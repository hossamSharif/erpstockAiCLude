import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { AlertController, LoadingController, ModalController, Platform, ToastController, IonPopover } from '@ionic/angular';
import { DatePipe, Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SortingService, SortConfig } from '../services/sorting.service';
import { ExportService, ExportConfig, ExportColumn } from '../services/export.service';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TransactionModalComponent } from '../components/transaction-modal/transaction-modal.component';

@Component({
  selector: 'app-statement2',
  templateUrl: './statement2.page.html',
  styleUrls: ['./statement2.page.scss'], 
})
export class Statement2Page implements OnInit, OnDestroy {
  // Core data
  sub_account: Array<any> = [];
  searchedAccounts: Array<any> = [];
  transactions: Array<any> = [];
  displayedTransactions: Array<any> = [];
  sortedTransactions: Array<any> = [];
  currentSort: SortConfig | null = null;
  
  // App info
  store_info: {id: any, location: any, store_name: any, store_ref: any} | null = null;
  user_info: {id: any, user_name: any, store_id: any, full_name: any, password: any} | null = null;
  year: {id: any, yearDesc: any, yearStart: any, yearEnd: any} | null = null;
  
  // Selected account with enhanced info
  selectedAccount: {
    id: any;
    ac_id: any;
    sub_name: any;
    sub_type: any;
    sub_code: any;
    sub_balance: any;
    store_id: any;
    cat_id: any;
    cat_name: any;
    ac_behavior: any;
    phone: any;
    address: any;
  } = {
    id: '',
    ac_id: '',
    sub_name: '',
    sub_type: '',
    sub_code: '',
    sub_balance: '',
    store_id: '',
    cat_id: '',
    cat_name: '',
    ac_behavior: '',
    phone: '',
    address: ''
  };
  
  // Balance calculations
  currentBalance: number = 0;
  currentStatus: string = '';
  openingBalance: number = 0;
  
  // Search and filtering
  radioVal: number = 0; // 0: recent, 1: date, 2: range
  startingDate: string = '';
  endDate: string = '';
  
  // No filtering - removed as requested
  
  // Pagination
  currentPage: number = 1;
  pageSize: number = 20;
  hasMoreTransactions: boolean = true;
  totalTransactions: number = 0;
  
  // UI state
  loading: boolean = false;
  loadingMore: boolean = false;
  showEmpty: boolean = false;
  device: string = '';
  navigatingToEdit: boolean = false;
  
  // Totals
  sums: {debitTot: number, creditTot: number} = {debitTot: 0, creditTot: 0};
  
  // Search timeout for debouncing
  private searchTimeout: any;

  // Currency management
  private currencySubscription: Subscription;

  // Navigation state
  navigatedFromExternal: boolean = false;
  pendingAccountId: string | null = null;
  private isInitialized: boolean = false;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private storage: Storage,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private sortingService: SortingService,
    private exportService: ExportService,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef,
    public translate: TranslateService
  ) {
    this.initializeData();
    this.checkPlatform();

    let d = new Date();
    this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd') || '';
    this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd') || '';

    // Subscribe to query params for external navigation
    this.route.queryParams.subscribe(params => {
      if (params['accountId']) {
        this.navigatedFromExternal = true;
        this.pendingAccountId = params['accountId'];
        console.log('Constructor: Set pendingAccountId to:', this.pendingAccountId);
      }
    });
  }

  ngOnInit() {
    this.initializeCurrency();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter: isInitialized =', this.isInitialized, 'pendingAccountId =', this.pendingAccountId);

    // Only reload app info if not already initialized
    if (!this.isInitialized) {
      this.isInitialized = true;
      console.log('ionViewDidEnter: Calling getAppInfo()');
      this.getAppInfo();
    } else if (this.pendingAccountId && this.sub_account.length > 0) {
      // If already initialized but we have a pending account (e.g., navigated back then forward)
      console.log('ionViewDidEnter: Processing pending account in already initialized state');
      const accountToSelect = this.sub_account.find(
        (acc: any) => acc.id == this.pendingAccountId
      );
      if (accountToSelect) {
        this.pickAccount(accountToSelect);
      }
      this.pendingAccountId = null;
    }
  }
  
  async initializeCurrency() {
    await this.currencyService.initializeCurrency();
    await this.currencyService.loadSupportedCurrencies();
    
    if (this.store_info && this.year) {
      await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
    }
    
    this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }

  initializeData() {
    this.selectedAccount = {
      id: '',
      ac_id: '',
      sub_name: 'لم يتم اختيار حساب',
      sub_type: 'غير محدد',
      sub_code: '',
      sub_balance: '0',
      store_id: '',
      cat_id: '',
      cat_name: 'غير محدد',
      ac_behavior: '',
      phone: '',
      address: ''
    };
    
    this.transactions = [];
    this.displayedTransactions = [];
    this.sortedTransactions = [];
    this.currentPage = 1;
    this.hasMoreTransactions = false;
    this.currentBalance = 0;
    this.currentStatus = 'debit';
    this.openingBalance = 0;
    this.sums = {debitTot: 0, creditTot: 0};
    this.showEmpty = false;
  }

  checkPlatform() {
    if (this.platform.is('desktop')) {
      this.device = 'desktop';
    } else if (this.platform.is('mobile')) {
      this.device = 'mobile';
    }
  }

  async getAppInfo() {
    console.log('getAppInfo: Starting to load app info...');

    // Load all required data in parallel, then call getAllAccount after all are loaded
    const [userInfo, year, storeInfo] = await Promise.all([
      this.storage.get('USER_INFO'),
      this.storage.get('year'),
      this.storage.get('STORE_INFO')
    ]);

    console.log('getAppInfo: Loaded from storage:', {
      hasUserInfo: !!userInfo,
      hasYear: !!year,
      hasStoreInfo: !!storeInfo
    });

    if (userInfo) {
      this.user_info = userInfo;
    }

    if (year) {
      this.year = year;
    }

    if (storeInfo) {
      this.store_info = storeInfo;
    }

    // Only call getAllAccount if both store_info and year are loaded
    if (this.store_info && this.year) {
      console.log('getAppInfo: Both store_info and year loaded, calling getAllAccount');
      this.getAllAccount();
    } else {
      console.warn('getAppInfo: Missing store_info or year, cannot load accounts');
    }
  }

  getAllAccount() {
    if (!this.store_info?.id || !this.year?.id) {
      console.log('getAllAccount: store_info or year not available, returning early');
      return;
    }

    console.log('getAllAccount: Loading accounts for store', this.store_info.id, 'year', this.year.id);
    console.log('getAllAccount: pendingAccountId =', this.pendingAccountId);

    this.api.getAllAccounts(this.store_info.id, this.year.id).subscribe(
      data => {
        this.sub_account = data['data'] || [];
        this.searchedAccounts = this.sub_account;
        console.log('getAllAccount: Loaded', this.sub_account.length, 'accounts');

        // Check if we have a pending account to select from external navigation
        if (this.pendingAccountId) {
          console.log('getAllAccount: Looking for pending account ID:', this.pendingAccountId);
          const accountToSelect = this.sub_account.find(
            (acc: any) => acc.id == this.pendingAccountId
          );
          if (accountToSelect) {
            console.log('getAllAccount: Found account to select:', accountToSelect);
            this.pickAccount(accountToSelect);
          } else {
            console.warn('getAllAccount: Account not found with ID:', this.pendingAccountId);
          }
          this.pendingAccountId = null; // Clear after processing
        }
      },
      error => {
        console.error('getAllAccount: Error loading accounts:', error);
        this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_LOADING_ACCOUNTS', 'danger');
      }
    );
  }

  // Handle account selection from account-selector component
  onAccountSelected(account: any) {
    if (account) {
      this.pickAccount(account);
    }
  }

  pickAccount(account: any) {
    console.log('pickAccount: Called with account:', account);

    if (account) {
      this.selectedAccount = {
        id: account.id,
        ac_id: account.ac_id,
        sub_name: account.sub_name,
        sub_type: account.sub_type,
        sub_code: account.sub_code,
        sub_balance: account.sub_balance,
        store_id: account.store_id,
        cat_id: account.cat_id,
        cat_name: account.cat_name,
        ac_behavior: account.ac_behavior,
        phone: account.phone || '',
        address: account.address || ''
      };

      this.openingBalance = parseFloat(account.sub_balance) || 0;

      console.log('pickAccount: selectedAccount set to:', this.selectedAccount);
      console.log('pickAccount: Calling resetPagination and loadTransactions');

      // Reset pagination and load transactions
      this.resetPagination();
      this.loadTransactions();
    } else {
      console.error('pickAccount: No account provided');
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_SELECTING_ACCOUNT', 'danger');
    }
  }

  radioChange(ev: any) {
    this.radioVal = parseInt(ev.detail.value);
  }

  // Load transactions with pagination
  loadTransactions(loadMore = false) {
    if (!this.selectedAccount.id) {
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.SELECT_ACCOUNT_FIRST', 'warning');
      return;
    }

    // Ensure store_info and year are available
    if (!this.store_info?.id || !this.year?.id) {
      console.error('loadTransactions: store_info or year not available');
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_LOADING_DATA', 'danger');
      return;
    }

    if (loadMore) {
      this.loadingMore = true;
      this.currentPage++;
    } else {
      this.loading = true;
      this.currentPage = 1;
    }

    const options = {
      search_type: this.radioVal,
      start_date: this.radioVal > 0 ? this.startingDate : null,
      end_date: this.radioVal === 2 ? this.endDate : null,
      page: this.currentPage,
      limit: this.pageSize
    };

    console.log('loadTransactions called with:', {
      store_id: this.store_info.id,
      year_id: this.year.id,
      account_id: this.selectedAccount.id,
      options
    });

    this.api.getStatementWithBalance(
      this.store_info.id,
      this.year.id,
      this.selectedAccount.id,
      options
    ).subscribe(
      data => {
        console.log('getStatementWithBalance response:', data);
        const response = data as any;

        // Handle different API response formats
        let newTransactions: any[] = [];
        let responseData: any = null;

        // Check for {success: true, data: {...}} wrapper format (server response)
        if (response && response.success && response.data) {
          responseData = response.data;
          console.log('Response format: {success, data} wrapper');
        } else {
          responseData = response;
          console.log('Response format: direct response');
        }

        // Extract transactions from various possible locations
        if (Array.isArray(responseData)) {
          // API returns array directly
          newTransactions = responseData;
          console.log('Found transactions as direct array');
        } else if (responseData) {
          // Try different property names for transactions
          if (responseData.transactions && Array.isArray(responseData.transactions)) {
            newTransactions = responseData.transactions;
            console.log('Found transactions in .transactions property');
          } else if (responseData.data && Array.isArray(responseData.data)) {
            newTransactions = responseData.data;
            console.log('Found transactions in .data property');
          } else {
            console.log('No transactions array found in response. Response keys:', Object.keys(responseData));
          }

          // Update account info and balances from response
          this.currentBalance = responseData.current_balance || 0;
          this.currentStatus = responseData.balance_status || responseData.status || '';
          this.totalTransactions = responseData.pagination?.total_count || newTransactions.length || 0;
          this.hasMoreTransactions = responseData.pagination?.has_more || false;

          // Update opening balance if available
          if (responseData.opening_balance !== undefined) {
            this.openingBalance = parseFloat(responseData.opening_balance) || 0;
          }
        }

        console.log('Extracted transactions count:', newTransactions.length);

        if (loadMore) {
          this.displayedTransactions = [...this.displayedTransactions, ...newTransactions];
        } else {
          this.displayedTransactions = newTransactions;
        }

        // Calculate totals for displayed transactions
        this.calculateTotals();

        // Apply sorting to transactions
        this.applySorting();

        this.showEmpty = this.displayedTransactions.length === 0;

        console.log('Final state:', {
          displayedCount: this.displayedTransactions.length,
          sortedCount: this.sortedTransactions.length,
          showEmpty: this.showEmpty,
          loading: this.loading
        });

        this.loading = false;
        this.loadingMore = false;
      },
      error => {
        console.error('Error loading transactions:', error);
        this.loading = false;
        this.loadingMore = false;

        if (loadMore) {
          this.currentPage--; // Revert page increment on error
        }

        this.showEmpty = true;
        this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_LOADING_DATA', 'danger');
      }
    );
  }

  // Load more transactions
  loadMoreTransactions() {
    if (this.hasMoreTransactions && !this.loadingMore) {
      this.loadTransactions(true);
    }
  }

  calculateTotals() {
    this.sums.debitTot = 0;
    this.sums.creditTot = 0;
    
    this.displayedTransactions.forEach(transaction => {
      this.sums.debitTot += parseFloat(transaction.debit) || 0;
      this.sums.creditTot += parseFloat(transaction.credit) || 0;
    });
  }

  resetPagination() {
    this.currentPage = 1;
    this.hasMoreTransactions = true;
    this.displayedTransactions = [];
    this.sortedTransactions = [];
    this.showEmpty = false;
  }

  search() {
    if (!this.selectedAccount.id) {
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.SELECT_ACCOUNT_FIRST', 'warning');
      return;
    }
    
    this.resetPagination();
    this.loadTransactions();
  }

  // Filter methods removed as requested

  // Format balance display
  formatBalance(balance: number): string {
    if (!balance && balance !== 0) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(balance));
  }

  // Get balance color for display
  getBalanceColor(): string {
    if (this.currentStatus === 'credit') {
      return 'success'; // Green for credit balance
    } else {
      return 'danger'; // Red for debit balance
    }
  }

  // Get transaction type display
  getTransactionTypeDisplay(transaction: any): string {
    if (transaction.source_type === 'sales') {
      return 'مبيعات';
    } else if (transaction.source_type === 'purchases') {
      return 'مشتريات';
    } else if (parseFloat(transaction.credit) > 0) {
      return 'سند قبض';
    } else {
      return 'سند دفع';
    }
  }

  async presentToast(translationKey: string, color: string = 'primary') {
    const message = this.translate.instant(translationKey);
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      color: color,
      cssClass: 'cust_Toast',
      mode: 'ios',
      position: 'top'
    });
    await toast.present();
  }

  // Refresh method
  refresh() {
    console.log('refresh: Refreshing data, selectedAccount.id =', this.selectedAccount.id);
    this.getAllAccount();
    if (this.selectedAccount.id) {
      this.resetPagination();
      this.loadTransactions();
    }
  }

  // Navigate back to previous page
  back() {
    this._location.back();
  }

  // Navigate to edit page based on transaction type
  async navigateToEdit(transaction: any) {
    if (this.navigatingToEdit || !transaction) {
      return;
    }

    console.log('navigateToEdit called with transaction:', transaction);

    const sourceType = transaction.source_type;
    const jRef = transaction.j_ref;

    if (!jRef) {
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.NO_REFERENCE', 'warning');
      return;
    }

    switch (sourceType) {
      case 'sales':
        await this.navigateToSalesEdit(transaction);
        break;
      case 'purchases':
        await this.navigateToPerchEdit(transaction);
        break;
      case 'journal':
        await this.navigateToJournalEdit(transaction);
        break;
      default:
        // For journal entries (سند قبض / سند دفع)
        await this.navigateToJournalEdit(transaction);
        break;
    }
  }

  // Navigate to edit-sales page
  async navigateToSalesEdit(transaction: any) {
    if (!this.store_info?.id || !this.year?.id) {
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_LOADING_DATA', 'danger');
      return;
    }

    this.navigatingToEdit = true;
    const loading = await this.loadingController.create({
      message: this.translate.instant('COMMON.MESSAGE.LOADING'),
      spinner: 'crescent'
    });
    await loading.present();

    try {
      // Get sales invoice items by pay_ref (getPayInvoDetail returns item list)
      const itemsResponse: any = await this.api.getPayInvoDetail(
        this.store_info.id,
        transaction.j_ref,
        this.year.id
      ).toPromise();

      console.log('Sales items response:', itemsResponse);

      const items = itemsResponse?.data || [];

      // Construct invoice object from transaction data
      const invoice = {
        pay_id: transaction.j_id,
        pay_ref: transaction.j_ref,
        pay_date: transaction.j_date,
        sub_name: this.selectedAccount.sub_name,
        cust_id: this.selectedAccount.id,
        tot_pr: Math.abs(transaction.debit || transaction.credit || 0),
        store_id: this.store_info.id
      };

      const navigationExtras: NavigationExtras = {
        queryParams: {
          payInvo: JSON.stringify(invoice),
          sub_name: JSON.stringify(this.selectedAccount.sub_name),
          user_info: JSON.stringify(this.user_info),
          store_info: JSON.stringify(this.store_info),
          itemList: JSON.stringify(items)
        }
      };

      await loading.dismiss();
      this.navigatingToEdit = false;
      this.router.navigate(['folder/edit-sales'], navigationExtras);

    } catch (error) {
      console.error('Error navigating to sales edit:', error);
      await loading.dismiss();
      this.navigatingToEdit = false;
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_LOADING_INVOICE', 'danger');
    }
  }

  // Navigate to edit-perch page
  async navigateToPerchEdit(transaction: any) {
    if (!this.store_info?.id || !this.year?.id) {
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_LOADING_DATA', 'danger');
      return;
    }

    this.navigatingToEdit = true;
    const loading = await this.loadingController.create({
      message: this.translate.instant('COMMON.MESSAGE.LOADING'),
      spinner: 'crescent'
    });
    await loading.present();

    try {
      // Get purchase invoice items by pay_ref (getPerchInvoDetail returns item list)
      const itemsResponse: any = await this.api.getPerchInvoDetail(
        this.store_info.id,
        transaction.j_ref,
        this.year.id
      ).toPromise();

      console.log('Purchase items response:', itemsResponse);

      const items = itemsResponse?.data || [];

      // Construct invoice object from transaction data
      const invoice = {
        perch_id: transaction.j_id,
        pay_ref: transaction.j_ref,
        pay_date: transaction.j_date,
        sub_name: this.selectedAccount.sub_name,
        cust_id: this.selectedAccount.id,
        tot_pr: Math.abs(transaction.debit || transaction.credit || 0),
        store_id: this.store_info.id
      };

      const navigationExtras: NavigationExtras = {
        queryParams: {
          payInvo: JSON.stringify(invoice),
          sub_name: JSON.stringify(this.selectedAccount.sub_name),
          user_info: JSON.stringify(this.user_info),
          store_info: JSON.stringify(this.store_info),
          itemList: JSON.stringify(items)
        }
      };

      await loading.dismiss();
      this.navigatingToEdit = false;

      // Navigate to different routes based on device
      if (this.device === 'mobile') {
        this.router.navigate(['folder/edit-purchase-mob'], navigationExtras);
      } else {
        this.router.navigate(['folder/edit-perch'], navigationExtras);
      }

    } catch (error) {
      console.error('Error navigating to purchase edit:', error);
      await loading.dismiss();
      this.navigatingToEdit = false;
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_LOADING_INVOICE', 'danger');
    }
  }

  // Open journal edit modal (same pattern as transactions-record page)
  async navigateToJournalEdit(transaction: any) {
    if (!this.store_info?.id || !this.year?.id || !this.user_info?.id) {
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_LOADING_DATA', 'danger');
      return;
    }

    this.navigatingToEdit = true;

    try {
      // Build transaction object matching what TransactionModalComponent expects
      const journalTransaction = {
        j_id: transaction.j_id,
        j_ref: transaction.j_ref,
        j_date: transaction.j_date,
        j_details: transaction.j_details,
        j_type: transaction.j_type,
        j_pay: transaction.debit && +transaction.debit > 0
          ? +transaction.debit
          : (transaction.credit && +transaction.credit > 0 ? +transaction.credit : 0)
      };

      console.log('Opening journal modal with transaction:', journalTransaction);

      const modal = await this.modalController.create({
        component: TransactionModalComponent,
        cssClass: 'transaction-full-modal',
        componentProps: {
          transaction: journalTransaction,
          store_id: this.store_info.id,
          year_id: this.year.id,
          user_id: this.user_info.id,
          selectedDate: transaction.j_date
        }
      });

      this.navigatingToEdit = false;
      await modal.present();

      const { data } = await modal.onWillDismiss();
      if (data && data.refresh) {
        // Reload transactions after edit
        this.resetPagination();
        this.loadTransactions();
      }

    } catch (error) {
      console.error('Error opening journal modal:', error);
      this.navigatingToEdit = false;
      this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.ERROR_LOADING_JOURNAL', 'danger');
    }
  }

  // Apply sorting to transactions
  applySorting() {
    if (this.currentSort) {
      this.sortedTransactions = this.sortingService.sortData(
        this.displayedTransactions, 
        this.currentSort.column, 
        this.currentSort.direction
      );
    } else {
      this.sortedTransactions = [...this.displayedTransactions];
    }
  }

  // Handle column sort
  sortBy(column: string) {
    const direction = this.sortingService.getNextSortDirection(column, this.currentSort);
    this.currentSort = { column, direction };
    this.applySorting();
  }

  // Get sort icon for column
  getSortIcon(column: string): string {
    return this.sortingService.getSortIcon(column, this.currentSort);
  }

  // Export functionality
  async exportToPDF(): Promise<void> {
    if (!this.displayedTransactions || this.displayedTransactions.length === 0) {
      await this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.NO_DATA_TO_EXPORT', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: this.exportService.generateDynamicTitle('statement2'),
      subtitle: this.generateSubtitle(),
      fileName: `statement-${this.selectedAccount.sub_name || 'account'}-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.displayedTransactions,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'statement2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToPDF(config);
  }

  async exportToExcel(): Promise<void> {
    if (!this.displayedTransactions || this.displayedTransactions.length === 0) {
      await this.presentToast('ACCOUNTING.STATEMENT.MESSAGE.NO_DATA_TO_EXPORT', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: this.exportService.generateDynamicTitle('statement2'),
      subtitle: this.generateSubtitle(),
      fileName: `statement-${this.selectedAccount.sub_name || 'account'}-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.displayedTransactions,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'statement2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToExcel(config);
  }

  private generateSubtitle(): string {
    let subtitle = '';
    
    if (this.selectedAccount.sub_name && this.selectedAccount.sub_name !== 'لم يتم اختيار حساب') {
      subtitle = `الحساب: ${this.selectedAccount.sub_name}`;
    }

    const dateFilter = this.getDateFilter();
    if (dateFilter) {
      if (subtitle) subtitle += ' - ';
      
      if (dateFilter.type === 'single') {
        subtitle += `في تاريخ ${this.exportService['formatDateArabic'](dateFilter.date)}`;
      } else if (dateFilter.type === 'range') {
        subtitle += `في الفترة من ${this.exportService['formatDateArabic'](dateFilter.startDate)} إلى ${this.exportService['formatDateArabic'](dateFilter.endDate)}`;
      }
    }

    return subtitle;
  }

  private getDateFilter(): any {
    if (this.radioVal === 1 && this.startingDate) {
      return {
        type: 'single',
        date: this.startingDate
      };
    } else if (this.radioVal === 2 && this.startingDate && this.endDate) {
      return {
        type: 'range',
        startDate: this.startingDate,
        endDate: this.endDate
      };
    }
    return null;
  }

  private getExportColumns(): ExportColumn[] {
    return [
      { key: 'j_date', title: 'التاريخ', width: 12, type: 'date' },
      { key: 'source_type', title: 'نوع القيد', width: 15, type: 'text' },
      { key: 'j_description', title: 'البيان', width: 25, type: 'text' },
      { key: 'debit_amount', title: 'مدين', width: 12, type: 'currency' },
      { key: 'credit_amount', title: 'دائن', width: 12, type: 'currency' },
      { key: 'running_balance', title: 'الرصيد الجاري', width: 15, type: 'currency' },
      { key: 'user_name', title: 'المستخدم', width: 15, type: 'text' }
    ];
  }

  // Get current currency symbol for table headers
  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }

}
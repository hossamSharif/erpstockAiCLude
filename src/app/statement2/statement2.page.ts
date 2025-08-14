import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { AlertController, LoadingController, ModalController, Platform, ToastController, IonPopover } from '@ionic/angular';
import { DatePipe } from '@angular/common'; 
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-statement2',
  templateUrl: './statement2.page.html',
  styleUrls: ['./statement2.page.scss'], 
})
export class Statement2Page implements OnInit, OnDestroy {
  @ViewChild('accountPopover') accountPopover: IonPopover;

  // Core data
  sub_account: Array<any> = [];
  searchedAccounts: Array<any> = [];
  transactions: Array<any> = [];
  displayedTransactions: Array<any> = [];
  
  // Account selection
  isAccountPopoverOpen: boolean = false;
  searchTerm: string = '';
  
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
  
  // Totals
  sums: {debitTot: number, creditTot: number} = {debitTot: 0, creditTot: 0};
  
  // Search timeout for debouncing
  private searchTimeout: any;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private router: Router,
    private storage: Storage,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController
  ) {
    this.initializeData();
    this.checkPlatform();
    this.getAppInfo();
    
    let d = new Date();
    this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd') || '';
    this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd') || '';
  }

  ngOnInit() {
    // Component initialization
  }

  ionViewDidEnter() {
    this.getAppInfo();
  }

  ngOnDestroy() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
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

  getAppInfo() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response;
      }
    });

    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response;
      }
    });

    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response;
        this.getAllAccount();
      }
    });
  }

  getAllAccount() {
    if (!this.store_info?.id || !this.year?.id) return;
    
    this.api.getAllAccounts(this.store_info.id, this.year.id).subscribe(
      data => {
        this.sub_account = data['data'] || [];
        this.searchedAccounts = this.sub_account;
      },
      error => {
        this.presentToast('خطأ في تحميل الحسابات', 'danger');
      }
    );
  }

  // Present account popover
  presentAccountPopover(event: any) {
    this.searchedAccounts = this.sub_account;
    this.searchTerm = '';
    this.isAccountPopoverOpen = true;
  }

  // Search accounts
  searchAccount(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.trim() !== '') {
      this.searchedAccounts = this.sub_account.filter((acc) => {
        return acc.sub_name.toLowerCase().indexOf(searchTerm) > -1;
      });
    } else {
      this.searchedAccounts = this.sub_account;
    }
  }

  // Select account from popover
  selectAccount(account: any) {
    this.pickAccount(account);
    this.isAccountPopoverOpen = false;
  }

  pickAccount(account: any) {
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
      
      // Reset pagination and load transactions
      this.resetPagination();
      this.loadTransactions();
    } else {
      this.presentToast('خطأ في اختيار الحساب', 'danger');
    }
  }

  radioChange(ev: any) {
    this.radioVal = parseInt(ev.detail.value);
  }

  // Load transactions with pagination
  loadTransactions(loadMore = false) {
    if (!this.selectedAccount.id) {
      this.presentToast('الرجاء اختيار حساب أولاً', 'warning');
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

    this.api.getStatementWithBalance(
      this.store_info.id,
      this.year.id,
      this.selectedAccount.id,
      options
    ).subscribe(
      data => {
        const response = data as any;
        
        if (response && response.transactions) {
          const newTransactions = response.transactions;
          
          if (loadMore) {
            this.displayedTransactions = [...this.displayedTransactions, ...newTransactions];
          } else {
            this.displayedTransactions = newTransactions;
          }
          
          // Update account info and balances
          this.currentBalance = response.current_balance || 0;
          this.currentStatus = response.balance_status || '';
          this.totalTransactions = response.pagination?.total_count || 0;
          this.hasMoreTransactions = response.pagination?.has_more || false;
          
          // Calculate totals for displayed transactions
          this.calculateTotals();
          
          this.showEmpty = this.displayedTransactions.length === 0;
        }
        
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
        
        this.presentToast('خطأ في تحميل البيانات', 'danger');
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
    this.showEmpty = false;
  }

  search() {
    if (!this.selectedAccount.id) {
      this.presentToast('الرجاء اختيار حساب أولاً', 'warning');
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

  async presentToast(message: string, color: string = 'primary') {
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
    this.getAllAccount();
    if (this.selectedAccount.id) {
      this.resetPagination();
      this.loadTransactions();
    }
  }
}
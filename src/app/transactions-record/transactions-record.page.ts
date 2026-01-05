import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';
import { SortingService } from '../services/sorting.service';
import { CurrencyService } from '../services/currency.service';
import { TransactionModalComponent } from '../components/transaction-modal/transaction-modal.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-transactions-record',
  templateUrl: './transactions-record.page.html',
  styleUrls: ['./transactions-record.page.scss'],
})
export class TransactionsRecordPage implements OnInit {
  // App info
  store_info: any;
  user_info: any;
  year: any;

  // Dashboard data
  dashboardData: any = {
    cashBalance: 0,
    bankBalance: 0,
    dailySales: 0,
    dailyPurchase: 0,
    dailyExpenses: 0,
    dailyIncome: 0
  };
  loading: boolean = false;

  // Date navigation
  selectedDate: string = '';
  arabicDateDisplay: string = '';
  arabicDays: string[] = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  arabicMonths: string[] = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

  // Transactions table
  payArray: Array<any> = [];
  sortedPayArray: Array<any> = [];
  searchResult: Array<any> = [];
  searchTerm: string = '';

  // Filtering and sorting
  entryTypeFilter: string = 'all'; // 'all', 'سند قبض', 'سند دفع'
  currentSort: any = null;

  // Multi-select
  selectedRecords: Set<string> = new Set();
  selectAll: boolean = false;

  // Journal details arrays
  jdetailFromArr: Array<any> = [];
  jdetailToArr: Array<any> = [];

  // Currency
  currentCurrency$ = this.currencyService.getCurrentCurrency();

  constructor(
    private api: ServicesService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private sortingService: SortingService,
    private currencyService: CurrencyService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.getAppInfo();
    this.setTodayDate();
  }

  ionViewDidEnter() {
    this.getAppInfo();
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
        // Load data after store_info is available
        if (this.year) {
          this.loadData();
        }
      }
    });
  }

  setTodayDate() {
    const today = new Date();
    this.selectedDate = this.formatDateForInput(today);
    this.updateArabicDate(today);
  }

  formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  updateArabicDate(date: Date) {
    const dayName = this.arabicDays[date.getDay()];
    const day = date.getDate();
    const monthName = this.arabicMonths[date.getMonth()];
    const year = date.getFullYear();
    this.arabicDateDisplay = `${dayName}، ${day} ${monthName} ${year}`;
  }

  onDateChange() {
    if (this.selectedDate) {
      const date = new Date(this.selectedDate);
      this.updateArabicDate(date);
      this.loadData();
    }
  }

  previousDay() {
    const date = new Date(this.selectedDate);
    date.setDate(date.getDate() - 1);
    this.selectedDate = this.formatDateForInput(date);
    this.updateArabicDate(date);
    this.loadData();
  }

  nextDay() {
    const date = new Date(this.selectedDate);
    date.setDate(date.getDate() + 1);
    this.selectedDate = this.formatDateForInput(date);
    this.updateArabicDate(date);
    this.loadData();
  }

  goToToday() {
    this.setTodayDate();
    this.loadData();
  }

  loadData() {
    // Guard: Don't load if store_info or year is not available
    if (!this.store_info || !this.year) {
      return;
    }
    this.loadDashboardData();
    this.loadTransactions();
  }

  loadDashboardData() {
    // Additional guard
    if (!this.store_info || !this.year) {
      return;
    }
    this.loading = true;
    this.api.getDailyReport(this.store_info.id, this.year.id, this.selectedDate).subscribe(
      (response: any) => {
        this.loading = false;
        if (response && response.status === 'success' && response.data) {
          const data = response.data;

          // Extract dashboard data
          this.dashboardData.cashBalance = data.accountBalances?.totalCash || 0;
          this.dashboardData.bankBalance = data.accountBalances?.totalBank || 0;
          this.dashboardData.dailySales = data.sales?.totalAmount || 0;
          this.dashboardData.dailyPurchase = data.purchases?.totalAmount || 0;
          this.dashboardData.dailyExpenses = data.expenses?.totalAmount || 0;

          // Calculate daily income
          this.dashboardData.dailyIncome =
            this.dashboardData.dailySales -
            this.dashboardData.dailyPurchase -
            this.dashboardData.dailyExpenses;
        }
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  loadTransactions() {
    // Guard: Don't load if store_info or year is not available
    if (!this.store_info || !this.year) {
      return;
    }
    // Load journal entries for selected date
    this.api.getJournaleByDate(this.store_info.id, this.selectedDate, this.year.id).subscribe(
      (res: any) => {
        // Check for valid response and extract data array
        if (res['message'] != 'No record Found') {
          this.payArray = res['data'];
        } else {
          this.payArray = [];
        }
        this.loadJournalDetails();
      },
      (error) => {
        this.payArray = [];
      }
    );
  }

  loadJournalDetails() {
    // Guard: Don't load if store_info or year is not available
    if (!this.store_info || !this.year) {
      return;
    }
    // Load debit details
    this.api.getJFromByDate(this.store_info.id, this.selectedDate, this.year.id).subscribe(
      (res: any) => {
        // Extract data array from response
        if (res['message'] != 'No record Found') {
          this.jdetailFromArr = res['data'];
        } else {
          this.jdetailFromArr = [];
        }

        // Load credit details
        this.api.getJToByDate(this.store_info.id, this.selectedDate, this.year.id).subscribe(
          (res2: any) => {
            // Extract data array from response
            if (res2['message'] != 'No record Found') {
              this.jdetailToArr = res2['data'];
            } else {
              this.jdetailToArr = [];
            }
            this.prepareArray();
          }
        );
      }
    );
  }

  prepareArray() {
    this.payArray.forEach((item: any) => {
      // Find related debit details
      const fromDetails = this.jdetailFromArr.filter((x: any) => x.j_ref == item.j_ref);
      const toDetails = this.jdetailToArr.filter((x: any) => x.j_ref == item.j_ref);

      // Assign debit values (from jdetailFromArr which contains debit entries)
      if (fromDetails.length > 0) {
        item.debit = fromDetails[0]?.debit || 0;
        item.debit2 = fromDetails[1]?.debit || 0;
        item.debit3 = fromDetails[2]?.debit || 0;
        // PRIORITY: sub_name (from JOIN with sub_accounts) over j_desc (from journal)
        // Backend SQL joins with sub_accounts table and returns the actual account name in sub_name
        // j_desc comes from journal table and contains the transaction description, NOT account name
        item.from1 = fromDetails[0]?.sub_name || fromDetails[0]?.j_desc || '';
      }

      // Assign credit values (from jdetailToArr which contains credit entries)
      if (toDetails.length > 0) {
        item.credit = toDetails[0]?.credit || 0;
        item.credit2 = toDetails[1]?.credit || 0;
        item.credit3 = toDetails[2]?.credit || 0;
        // PRIORITY: sub_name (from JOIN with sub_accounts) over j_desc (from journal)
        // Backend SQL joins with sub_accounts table and returns the actual account name in sub_name
        // j_desc comes from journal table and contains the transaction description, NOT account name
        item.to1 = toDetails[0]?.sub_name || toDetails[0]?.j_desc || '';
      }
    });

    this.applyFilters();
  }

  applyFilters() {
    let filteredArray = [...this.payArray];

    // Apply entry type filter
    if (this.entryTypeFilter !== 'all') {
      filteredArray = filteredArray.filter(record => record.j_type === this.entryTypeFilter);
    }

    // Apply sorting
    if (this.currentSort) {
      this.sortedPayArray = this.sortingService.sortData(
        filteredArray,
        this.currentSort.column,
        this.currentSort.direction
      );
    } else {
      this.sortedPayArray = filteredArray;
    }

    // Update search results if searching
    if (this.searchTerm) {
      this.onSearch();
    }
  }

  sortBy(column: string) {
    if (!this.currentSort || this.currentSort.column !== column) {
      this.currentSort = { column, direction: 'asc' };
    } else {
      this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    }
    this.applyFilters();
  }

  filterByEntryType(type: string) {
    this.entryTypeFilter = type;
    this.applyFilters();
  }

  onSearch() {
    if (this.searchTerm.trim() === '') {
      this.searchResult = [];
      return;
    }

    const filter = this.searchTerm.toLowerCase();
    this.searchResult = this.sortedPayArray.filter(item =>
      item.j_details?.toLowerCase().indexOf(filter) !== -1 ||
      item.from1?.toLowerCase().indexOf(filter) !== -1 ||
      item.to1?.toLowerCase().indexOf(filter) !== -1 ||
      item.j_ref?.toLowerCase().indexOf(filter) !== -1
    );
  }

  // Multi-select functionality
  toggleRecordSelection(j_ref: string) {
    if (this.selectedRecords.has(j_ref)) {
      this.selectedRecords.delete(j_ref);
    } else {
      this.selectedRecords.add(j_ref);
    }
    this.updateSelectAllState();
  }

  toggleSelectAll() {
    if (this.selectAll) {
      this.selectedRecords.clear();
    } else {
      const displayArray = this.searchTerm ? this.searchResult : this.sortedPayArray;
      displayArray.forEach(record => this.selectedRecords.add(record.j_ref));
    }
    this.selectAll = !this.selectAll;
  }

  updateSelectAllState() {
    const displayArray = this.searchTerm ? this.searchResult : this.sortedPayArray;
    this.selectAll = displayArray.length > 0 &&
                     displayArray.every(record => this.selectedRecords.has(record.j_ref));
  }

  isRecordSelected(j_ref: string): boolean {
    return this.selectedRecords.has(j_ref);
  }

  getSelectedCount(): number {
    return this.selectedRecords.size;
  }

  clearSelection() {
    this.selectedRecords.clear();
    this.selectAll = false;
  }

  // Bulk delete
  async bulkDelete() {
    if (this.selectedRecords.size === 0) {
      return;
    }

    const alert = await this.alertCtrl.create({
      header: 'تأكيد الحذف',
      message: `هل أنت متأكد من حذف ${this.selectedRecords.size} حركة؟`,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'حذف',
          role: 'destructive',
          handler: () => {
            this.executeBulkDelete();
          }
        }
      ]
    });

    await alert.present();
  }

  async executeBulkDelete() {
    const selectedRefs = Array.from(this.selectedRecords);
    let deletedCount = 0;

    for (const j_ref of selectedRefs) {
      await this.deleteTransaction(j_ref, false);
      deletedCount++;
    }

    // Reload data to refresh table and recalculate dashboard
    this.loadData();
    this.clearSelection();

    const toast = await this.toastCtrl.create({
      message: `تم حذف ${deletedCount} حركة بنجاح`,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async deleteTransaction(j_ref: string, showToast: boolean = true): Promise<void> {
    return new Promise((resolve) => {
      // Delete journal
      this.api.deleteJournal(j_ref).subscribe(async () => {
        // Delete from details
        this.api.deleteJFrom(j_ref).subscribe(() => {});
        // Delete to details
        this.api.deleteJto(j_ref).subscribe(async () => {
          if (showToast) {
            const toast = await this.toastCtrl.create({
              message: 'تم حذف الحركة بنجاح',
              duration: 2000,
              color: 'success'
            });
            toast.present();
          }
          resolve();
        });
      });
    });
  }

  async deleteSingleRecord(record: any) {
    const alert = await this.alertCtrl.create({
      header: 'تأكيد الحذف',
      message: 'هل أنت متأكد من حذف هذه الحركة؟',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'حذف',
          role: 'destructive',
          handler: async () => {
            await this.deleteTransaction(record.j_ref);
            // Reload data to refresh table and recalculate dashboard
            this.loadData();
          }
        }
      ]
    });

    await alert.present();
  }

  // Open modal for create/edit
  async openTransactionModal(transaction?: any) {
    // Guard: Don't open modal if required data is not available
    if (!this.store_info || !this.year || !this.user_info) {
      const toast = await this.toastCtrl.create({
        message: 'يرجى الانتظار حتى يتم تحميل البيانات',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    const modal = await this.modalCtrl.create({
      component: TransactionModalComponent,
      componentProps: {
        transaction: transaction,
        store_id: this.store_info.id,
        year_id: this.year.id,
        user_id: this.user_info.id,
        selectedDate: this.selectedDate
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data && data.refresh) {
      this.loadData();
    }
  }

  createTransaction() {
    this.openTransactionModal();
  }

  editTransaction(record: any) {
    this.openTransactionModal(record);
  }

  getDisplayArray() {
    return this.searchTerm ? this.searchResult : this.sortedPayArray;
  }

  trackByJRef(index: number, item: any): string {
    return item.j_ref;
  }
}

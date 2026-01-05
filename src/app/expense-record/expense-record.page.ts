import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServicesService } from "../stockService/services.service";
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { FilterPipe } from './pipe';
import { SortingService, SortConfig } from '../services/sorting.service';
import { ExportService, ExportConfig, ExportColumn } from '../services/export.service';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expense-record',
  templateUrl: './expense-record.page.html',
  styleUrls: ['./expense-record.page.scss']
})
export class ExpenseRecordPage implements OnInit, OnDestroy {
  expenseArray: Array<any> = []
  sortedExpenseArray: Array<any> = []
  currentSort: SortConfig | null = null
  searchTerm: any
  showEmpty: boolean = false
  searchResult: Array<any> = []
  searchMode: boolean = false
  store_info: { id: any, location: any, store_name: any, store_ref: any }
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any }
  radioVal: any = 0
  startingDate: any
  endDate: any
  loading: boolean = false
  year: { id: any, yearDesc: any, yearStart: any, yearEnd: any }
  device: any = ''
  private currencySubscription: Subscription;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private rout: Router,
    private storage: Storage,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private sortingService: SortingService,
    private exportService: ExportService,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef
  ) {
    this.searchTerm = ""
    this.checkPlatform()
    this.getAppInfo()
    let d = new Date
    this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd')
    this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd')
  }

  checkPlatform() {
    if (this.platform.is('desktop')) {
      this.device = 'desktop'
    } else if (this.platform.is('mobile')) {
      this.device = 'mobile'
    }
  }

  getAppInfo() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response
      }
    });
    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response
      }
    });
    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response
        this.getTopExpenses()
      }
    });
  }

  ionViewDidEnter() {
    this.getAppInfo()
  }

  ngOnInit() {
    this.initializeCurrency();
  }

  ngOnDestroy() {
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
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

  searchItem(ev) {
    this.searchMode = true
    const filterPipe = new FilterPipe;
    let fiteredArr: any
    fiteredArr = filterPipe.transform(this.expenseArray, ev.target.value);
    this.searchResult = fiteredArr
  }

  getTopExpenses() {
    this.expenseArray = []
    this.loading = true
    this.api.getTopExpenses(this.store_info.id, this.year.id).subscribe(data => {
      let res = data
      if (res['message'] != 'No Expenses Found') {
        this.expenseArray = res['data']
        this.applySorting()
      }
      this.loading = false
      if (this.expenseArray.length == 0) {
        this.showEmpty = true
      } else {
        this.showEmpty = false
      }
    }, (err) => {
      console.log(err);
      this.loading = false
      this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger')
    })
  }

  getExpensesByDate() {
    this.expenseArray = []
    this.loading = true
    this.api.getExpensesByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
      let res = data
      if (res['message'] != 'No Expenses Found') {
        this.expenseArray = res['data']
        this.applySorting()
      }
      this.loading = false
      if (this.expenseArray.length == 0) {
        this.showEmpty = true
      } else {
        this.showEmpty = false
      }
    }, (err) => {
      console.log(err);
      this.loading = false
      this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger')
    })
  }

  getExpenses2Date() {
    this.expenseArray = []
    this.loading = true
    this.api.getExpenses2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
      let res = data
      if (res['message'] != 'No Expenses Found') {
        this.expenseArray = res['data']
        this.applySorting()
      }
      this.loading = false
      if (this.expenseArray.length == 0) {
        this.showEmpty = true
      } else {
        this.showEmpty = false
      }
    }, (err) => {
      console.log(err);
      this.loading = false
      this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger')
    })
  }

  radioChange(ev) {
    this.searchMode = false
    this.searchResult = []
    this.searchTerm = ""
  }

  search() {
    this.searchMode = false
    if (this.radioVal == 0) {
      this.getTopExpenses()
    } else if (this.radioVal == 1) {
      this.getExpensesByDate()
    } else if (this.radioVal == 2) {
      this.getExpenses2Date()
    }
  }

  // Sorting methods
  sortBy(column: string) {
    const direction = this.sortingService.getNextSortDirection(column, this.currentSort);
    this.currentSort = { column, direction };
    this.applySorting();
  }

  applySorting() {
    if (this.currentSort) {
      this.sortedExpenseArray = this.sortingService.sortData(
        this.expenseArray,
        this.currentSort.column,
        this.currentSort.direction
      );
    } else {
      this.sortedExpenseArray = [...this.expenseArray];
    }
  }

  getSortIcon(column: string): string {
    return this.sortingService.getSortIcon(column, this.currentSort);
  }

  // Edit expense
  editExpense(expense: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        expense: JSON.stringify(expense),
        user_info: JSON.stringify(this.user_info),
        store_info: JSON.stringify(this.store_info),
        year: JSON.stringify(this.year),
        editMode: true
      }
    }
    this.rout.navigate(['expense'], navigationExtras)
  }

  // Delete expense
  async deleteExpense(expense: any) {
    const alert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: `هل أنت متأكد من حذف المصروف "${expense.description}"؟`,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'حذف',
          role: 'destructive',
          handler: () => {
            this.confirmDelete(expense.id)
          }
        }
      ]
    });
    await alert.present();
  }

  confirmDelete(id: any) {
    this.api.deleteExpense(id).subscribe(data => {
      this.presentToast('تم حذف المصروف بنجاح', 'success')
      this.search()
    }, (err) => {
      console.log(err);
      this.presentToast('خطا في الحذف حاول مرة اخري', 'danger')
    })
  }

  // Currency methods
  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }

  formatCurrency(amount: number): string {
    return this.currencyService.formatAmountWithoutSymbol(amount);
  }

  // Export columns definition
  private getExportColumns(): ExportColumn[] {
    return [
      { key: 'expense_ref', title: 'المرجع', width: 15, type: 'text' },
      { key: 'expense_date', title: 'التاريخ', width: 12, type: 'date' },
      { key: 'description', title: 'الوصف', width: 25, type: 'text' },
      { key: 'category_name', title: 'التصنيف', width: 15, type: 'text' },
      { key: 'vendor_name', title: 'المورد', width: 15, type: 'text' },
      { key: 'payment_method', title: 'طريقة الدفع', width: 12, type: 'text' },
      { key: 'amount', title: 'المبلغ', width: 12, type: 'currency' },
      { key: 'notes', title: 'ملاحظات', width: 25, type: 'text' }
    ];
  }

  // Export methods
  async exportToPDF(): Promise<void> {
    if (!this.expenseArray || this.expenseArray.length === 0) {
      this.presentToast('لا توجد بيانات للتصدير', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: 'سجل المصروفات',
      subtitle: this.store_info?.store_name || '',
      fileName: `expenses_${this.datePipe.transform(new Date(), 'yyyyMMdd')}`,
      data: this.sortedExpenseArray.length > 0 ? this.sortedExpenseArray : this.expenseArray,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || '',
      pageType: 'spend-record2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    };

    await this.exportService.exportToPDF(config);
  }

  async exportToExcel(): Promise<void> {
    if (!this.expenseArray || this.expenseArray.length === 0) {
      this.presentToast('لا توجد بيانات للتصدير', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: 'سجل المصروفات',
      subtitle: this.store_info?.store_name || '',
      fileName: `expenses_${this.datePipe.transform(new Date(), 'yyyyMMdd')}`,
      data: this.sortedExpenseArray.length > 0 ? this.sortedExpenseArray : this.expenseArray,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || '',
      pageType: 'spend-record2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    };

    await this.exportService.exportToExcel(config);
  }

  // Calculate total
  getTotalAmount(): number {
    const dataArray = this.sortedExpenseArray.length > 0 ? this.sortedExpenseArray : this.expenseArray;
    return dataArray.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
  }

  async presentToast(msg: string, color: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }
}

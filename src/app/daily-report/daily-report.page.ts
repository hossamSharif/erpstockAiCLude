import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServicesService } from "../stockService/services.service";
import { LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { CurrencyService } from '../services/currency.service';
import { PrintModalPage } from '../print-modal/print-modal.page';
import { Subscription } from 'rxjs';

interface ReportData {
  sales: { invoices: any[]; totalAmount: number; invoiceCount: number; };
  purchases: { invoices: any[]; totalAmount: number; invoiceCount: number; };
  expenses: { items: any[]; totalAmount: number; itemCount: number; };
  receipts: { transactions: any[]; totalAmount: number; };
  payments: { transactions: any[]; totalAmount: number; };
  accountBalances: { cashAccounts: any[]; bankAccounts: any[]; totalCash: number; totalBank: number; };
  summary: { amountIn: number; amountOut: number; netIncome: number; };
}

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.page.html',
  styleUrls: ['./daily-report.page.scss']
})
export class DailyReportPage implements OnInit, OnDestroy {

  // App info
  store_info: {id: any, location: any, store_name: any, store_ref: any} | null = null;
  user_info: {id: any, user_name: any, store_id: any, full_name: any, password: any} | null = null;
  year: {id: any, yearDesc: any, yearStart: any, yearEnd: any} | null = null;

  // Date selection
  radioVal: number = 1; // 0=today, 1=single date, 2=date range
  startingDate: string = '';
  endDate: string = '';

  // Report state
  reportGenerated: boolean = false;
  loading: boolean = false;
  device: string = '';

  // Report data
  reportData: ReportData = {
    sales: { invoices: [], totalAmount: 0, invoiceCount: 0 },
    purchases: { invoices: [], totalAmount: 0, invoiceCount: 0 },
    expenses: { items: [], totalAmount: 0, itemCount: 0 },
    receipts: { transactions: [], totalAmount: 0 },
    payments: { transactions: [], totalAmount: 0 },
    accountBalances: { cashAccounts: [], bankAccounts: [], totalCash: 0, totalBank: 0 },
    summary: { amountIn: 0, amountOut: 0, netIncome: 0 }
  };

  // Accordion state
  salesExpanded: boolean = false;
  purchasesExpanded: boolean = false;
  expensesExpanded: boolean = false;
  receiptsExpanded: boolean = false;
  paymentsExpanded: boolean = false;

  // Currency management
  private currencySubscription: Subscription;

  constructor(
    private platform: Platform,
    private storage: Storage,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {
    this.checkPlatform();

    // Set default date to today
    let d = new Date();
    this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd') || '';
  }

  async ngOnInit() {
    await this.getAppInfo();
    await this.initializeCurrency();
  }

  async ionViewDidEnter() {
    await this.getAppInfo();
    await this.autoGenerateReport();
  }

  async autoGenerateReport() {
    // Validate store_info and year are available
    if (!this.store_info?.id || !this.year?.id) {
      await this.presentToast('يرجى التحقق من بيانات المتجر والسنة المالية', 'warning');
      return;
    }

    // Ensure radioVal is set to 1 (single date mode)
    this.radioVal = 1;

    // Ensure startingDate is set to today (already done in constructor, but reinforce)
    if (!this.startingDate) {
      this.startingDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
    }

    // Automatically generate the report
    await this.generateReport();
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
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }

  checkPlatform() {
    if (this.platform.is('desktop')) {
      this.device = 'desktop';
    } else {
      this.device = 'mobile';
    }
  }

  async getAppInfo() {
    await this.storage.create();

    const userInfo = await this.storage.get('USER_INFO');
    if (userInfo) {
      this.user_info = userInfo;
    }

    const storeInfo = await this.storage.get('STORE_INFO');
    if (storeInfo) {
      this.store_info = storeInfo;
    }

    const year = await this.storage.get('year');
    if (year) {
      this.year = year;
    }

    // Force change detection after loading storage values
    this.cdr.detectChanges();
  }

  async presentToast(msg: string, color: string = 'primary') {
    const toast = await this.toast.create({
      message: msg,
      duration: 2500,
      position: 'bottom',
      color: color
    });
    toast.present();
  }

  async generateReport() {
    if (!this.startingDate) {
      await this.presentToast('يرجى تحديد التاريخ', 'warning');
      return;
    }

    if (!this.store_info?.id || !this.year?.id) {
      await this.presentToast('يرجى التحقق من بيانات المتجر والسنة المالية', 'warning');
      return;
    }

    this.loading = true;
    this.reportGenerated = false;

    const loader = await this.loadingController.create({
      message: 'جاري تحميل التقرير...',
      cssClass: 'glass-loading'
    });
    await loader.present();

    try {
      const fromDate = this.startingDate;
      const toDate = this.radioVal === 2 ? this.endDate : undefined;

      this.api.getDailyReport(this.store_info.id, this.year.id, fromDate, toDate).subscribe({
        next: async (response: any) => {
          if (response && response.status === 'success' && response.data) {
            this.processReportData(response.data);
            this.reportGenerated = true;
            await this.presentToast('تم تحميل التقرير بنجاح', 'success');
          } else {
            await this.presentToast('لا توجد بيانات لهذا التاريخ', 'warning');
          }
          this.loading = false;
          loader.dismiss();
        },
        error: async (err) => {
          console.error('Error loading report:', err);
          await this.presentToast('خطأ في تحميل التقرير', 'danger');
          this.loading = false;
          loader.dismiss();
        }
      });
    } catch (error) {
      console.error('Error:', error);
      await this.presentToast('خطأ في تحميل التقرير', 'danger');
      this.loading = false;
      loader.dismiss();
    }
  }

  processReportData(data: any) {
    // Process sales
    this.reportData.sales = {
      invoices: data.sales?.invoices || [],
      totalAmount: data.sales?.totalAmount || 0,
      invoiceCount: data.sales?.invoiceCount || 0
    };

    // Process purchases
    this.reportData.purchases = {
      invoices: data.purchases?.invoices || [],
      totalAmount: data.purchases?.totalAmount || 0,
      invoiceCount: data.purchases?.invoiceCount || 0
    };

    // Process expenses
    this.reportData.expenses = {
      items: data.expenses?.items || [],
      totalAmount: data.expenses?.totalAmount || 0,
      itemCount: data.expenses?.itemCount || 0
    };

    // Process receipts (money in)
    this.reportData.receipts = {
      transactions: data.receipts?.transactions || [],
      totalAmount: data.receipts?.totalAmount || 0
    };

    // Process payments (money out)
    this.reportData.payments = {
      transactions: data.payments?.transactions || [],
      totalAmount: data.payments?.totalAmount || 0
    };

    // Process account balances
    this.reportData.accountBalances = {
      cashAccounts: data.accountBalances?.cashAccounts || [],
      bankAccounts: data.accountBalances?.bankAccounts || [],
      totalCash: data.accountBalances?.totalCash || 0,
      totalBank: data.accountBalances?.totalBank || 0
    };

    // Use summary from backend (transactions only - excludes sales and purchases)
    this.reportData.summary = {
      amountIn: data.summary?.amountIn || 0,
      amountOut: data.summary?.amountOut || 0,
      netIncome: data.summary?.netIncome || 0
    };
  }

  async printReport() {
    if (!this.reportGenerated) {
      await this.presentToast('يرجى توليد التقرير أولاً', 'warning');
      return;
    }

    const printData = {
      reportDate: this.startingDate,
      endDate: this.radioVal === 2 ? this.endDate : null,
      salesSummary: this.reportData.sales,
      purchaseSummary: this.reportData.purchases,
      expensesSummary: this.reportData.expenses,
      receipts: this.reportData.receipts,
      payments: this.reportData.payments,
      accountBalances: this.reportData.accountBalances,
      totals: this.reportData.summary,
      storeName: this.store_info?.store_name,
      userName: this.user_info?.full_name
    };

    const modal = await this.modalController.create({
      component: PrintModalPage,
      componentProps: {
        "printArr": [printData],
        "page": "daily_report"
      }
    });

    return await modal.present();
  }

  refresh() {
    if (this.reportGenerated) {
      this.generateReport();
    }
  }

  toggleSection(section: string) {
    switch (section) {
      case 'sales':
        this.salesExpanded = !this.salesExpanded;
        break;
      case 'purchases':
        this.purchasesExpanded = !this.purchasesExpanded;
        break;
      case 'expenses':
        this.expensesExpanded = !this.expensesExpanded;
        break;
      case 'receipts':
        this.receiptsExpanded = !this.receiptsExpanded;
        break;
      case 'payments':
        this.paymentsExpanded = !this.paymentsExpanded;
        break;
    }
  }

  formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  }

  getFormattedDate(): string {
    if (this.radioVal === 2 && this.endDate) {
      return `${this.startingDate} - ${this.endDate}`;
    }
    return this.startingDate;
  }
}

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { LoadingController, ToastController, Platform, ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { CurrencyService } from '../services/currency.service';
import { SortingService, SortConfig } from '../services/sorting.service';
import { ExportService, ExportConfig } from '../services/export.service';
import { PrintModalPage } from '../print-modal/print-modal.page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report.page.html',
  styleUrls: ['./purchase-report.page.scss'],
})
export class PurchaseReportPage implements OnInit, OnDestroy {

  // App info
  store_info: any;
  user_info: any;
  year: any;

  // Account selection
  radioVal: any = 0;
  selectedAccount: any = null;

  // Filter state
  filters = {
    dateFrom: '',
    dateTo: '',
    amountMin: null as number | null,
    amountMax: null as number | null,
    userId: null as number | null,
    itemId: null as number | null,
    supplierId: null as number | null
  };

  // Report data
  reportData = {
    invoices: [] as any[],
    summary: { total: 0, discount: 0, net: 0, count: 0 },
    topSuppliers: [] as any[],
    itemAnalytics: [] as any[]
  };

  // UI state
  loading: boolean = false;
  reportGenerated: boolean = false;
  device: string = '';

  // Filter options
  users: Array<any> = [];
  items: Array<any> = [];
  suppliers: Array<any> = [];

  // Sorting
  sortedInvoices: Array<any> = [];
  currentSort: SortConfig | null = null;

  // Currency management
  private currencySubscription: Subscription | undefined;

  constructor(
    private platform: Platform,
    private storage: Storage,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private currencyService: CurrencyService,
    private sortingService: SortingService,
    private exportService: ExportService,
    private modalController: ModalController,
    private cdr: ChangeDetectorRef
  ) {
    this.checkPlatform();

    // Set default dates (last 30 days)
    let today = new Date();
    let thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    this.filters.dateFrom = this.datePipe.transform(thirtyDaysAgo, 'yyyy-MM-dd') || '';
    this.filters.dateTo = this.datePipe.transform(today, 'yyyy-MM-dd') || '';
  }

  async ngOnInit() {
    await this.getAppInfo();
    await this.initializeCurrency();
    await this.loadFilterOptions();
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

    this.cdr.detectChanges();
  }

  async loadFilterOptions() {
    if (!this.store_info?.id) {
      console.log('No store_info available');
      return;
    }

    console.log('Loading filter options for store:', this.store_info.id);

    try {
      // Load users
      this.api.getUsers(this.store_info.id).subscribe({
        next: (res: any) => {
          console.log('Users response:', res);
          if (res && Array.isArray(res)) {
            this.users = res;
          } else if (res && res.data) {
            this.users = res.data;
          }
          console.log('Users loaded:', this.users.length);
        },
        error: (err) => console.error('Error loading users:', err)
      });

      // Load items
      this.api.getItemsByStore(this.store_info.id, this.year?.id).subscribe({
        next: (res: any) => {
          console.log('Items response:', res);
          if (res && Array.isArray(res)) {
            this.items = res;
          } else if (res && res.data && Array.isArray(res.data)) {
            this.items = res.data;
          } else if (res && res.message && Array.isArray(res.message)) {
            this.items = res.message;
          }
          console.log('Items loaded:', this.items.length);
        },
        error: (err) => console.error('Error loading items:', err)
      });

      // Load suppliers
      this.api.getNewAccByType('supplier', this.store_info.id).subscribe({
        next: (res: any) => {
          console.log('Suppliers response:', res);
          if (res && Array.isArray(res)) {
            this.suppliers = res;
          } else if (res && res.data && Array.isArray(res.data)) {
            this.suppliers = res.data;
          } else if (res && res.message && Array.isArray(res.message)) {
            this.suppliers = res.message;
          }
          console.log('Suppliers loaded:', this.suppliers.length);
        },
        error: (err) => console.error('Error loading suppliers:', err)
      });
    } catch (error) {
      console.error('Error in loadFilterOptions:', error);
    }
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
    if (!this.filters.dateFrom) {
      await this.presentToast('يرجى تحديد تاريخ البداية', 'warning');
      return;
    }

    if (!this.filters.dateTo) {
      await this.presentToast('يرجى تحديد تاريخ النهاية', 'warning');
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
      console.log('Generating purchase report with filters:', this.filters);
      console.log('Store ID:', this.store_info.id, 'Year ID:', this.year.id);

      this.api.getPurchaseReport(this.store_info.id, this.year.id, this.filters).subscribe({
        next: async (response: any) => {
          console.log('Purchase report API response:', response);

          if (response && response.status === 'success' && response.data) {
            console.log('Processing report data...');
            this.processReportData(response.data);
            this.reportGenerated = true;
            await this.presentToast('تم تحميل التقرير بنجاح', 'success');
          } else {
            console.log('No data in response');
            await this.presentToast('لا توجد بيانات لهذه الفترة', 'warning');
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
    console.log('Raw data received:', data);

    // Process invoices
    this.reportData.invoices = data.invoices || [];
    this.sortedInvoices = [...this.reportData.invoices];
    console.log('Invoices processed:', this.reportData.invoices.length);
    console.log('First invoice:', this.reportData.invoices[0]);

    // Process summary
    this.reportData.summary = data.summary || { total: 0, discount: 0, net: 0, count: 0 };
    console.log('Summary:', this.reportData.summary);

    // Process top suppliers
    this.reportData.topSuppliers = data.topSuppliers || [];
    console.log('Top suppliers:', this.reportData.topSuppliers.length);

    // Process item analytics
    this.reportData.itemAnalytics = data.itemAnalytics || [];
    console.log('Item analytics:', this.reportData.itemAnalytics.length);

    this.cdr.detectChanges();
  }

  clearFilters() {
    let today = new Date();
    let thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    this.filters = {
      dateFrom: this.datePipe.transform(thirtyDaysAgo, 'yyyy-MM-dd') || '',
      dateTo: this.datePipe.transform(today, 'yyyy-MM-dd') || '',
      amountMin: null,
      amountMax: null,
      userId: null,
      itemId: null,
      supplierId: null
    };

    this.selectedAccount = null;
    this.radioVal = 0;
    this.reportGenerated = false;
    this.reportData = {
      invoices: [],
      summary: { total: 0, discount: 0, net: 0, count: 0 },
      topSuppliers: [],
      itemAnalytics: []
    };
    this.sortedInvoices = [];
  }

  // Account selector handlers
  onAccountSelected(account: any) {
    if (account) {
      this.selectedAccount = account;
      this.filters.supplierId = account.id;
    } else {
      this.selectedAccount = null;
      this.filters.supplierId = null;
    }
  }

  onAccountBalanceLoaded(balance: any) {
    // Handle balance loaded if needed
  }

  radioChange(event: any) {
    // Handle radio change - Reset dates based on selection
    if (this.radioVal === 0) {
      // Recent purchases - default dates
      let today = new Date();
      let thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(today.getDate() - 30);
      this.filters.dateFrom = this.datePipe.transform(thirtyDaysAgo, 'yyyy-MM-dd') || '';
      this.filters.dateTo = this.datePipe.transform(today, 'yyyy-MM-dd') || '';
    } else if (this.radioVal === 1) {
      // Search by date - set to today
      let today = new Date();
      this.filters.dateFrom = this.datePipe.transform(today, 'yyyy-MM-dd') || '';
      this.filters.dateTo = this.datePipe.transform(today, 'yyyy-MM-dd') || '';
    } else if (this.radioVal === 2) {
      // Search by period - keep current dates
    }
  }

  sortBy(column: string) {
    this.currentSort = this.sortingService.sort(this.sortedInvoices, column, this.currentSort);
  }

  getSortIcon(column: string): string {
    if (!this.currentSort || this.currentSort.column !== column) {
      return 'swap-vertical-outline';
    }
    return this.currentSort.direction === 'asc' ? 'arrow-up' : 'arrow-down';
  }

  getCurrencySymbol(): string {
    return this.currencyService.getCurrencySymbol();
  }

  async exportToPDF(): Promise<void> {
    if (!this.reportData.invoices || this.reportData.invoices.length === 0) {
      await this.presentToast('لا توجد بيانات للتصدير', 'warning');
      return;
    }

    // Prepare print data in the format expected by PrintModalPage
    const printArr = [{
      reportData: this.reportData,
      filters: this.filters,
      summary: this.reportData.summary,
      invoices: this.sortedInvoices,
      topSuppliers: this.reportData.topSuppliers,
      itemAnalytics: this.reportData.itemAnalytics,
      store_info: this.store_info,
      user_info: this.user_info
    }];

    const modal = await this.modalController.create({
      component: PrintModalPage,
      componentProps: {
        "printArr": printArr,
        "page": "purchase_report"
      }
    });

    await modal.present();
  }

  async exportToExcel(): Promise<void> {
    if (!this.reportData.invoices || this.reportData.invoices.length === 0) {
      await this.presentToast('لا توجد بيانات للتصدير', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: 'تقرير المشتريات التفصيلي',
      subtitle: this.generateSubtitle(),
      fileName: `purchase-report-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.sortedInvoices,
      columns: [
        { key: 'pay_ref', title: 'رقم الفاتورة', type: 'text' },
        { key: 'pay_date', title: 'التاريخ', type: 'date' },
        { key: 'sub_name', title: 'المورد', type: 'text' },
        { key: 'tot_pr', title: 'المبلغ', type: 'currency' },
        { key: 'discount', title: 'الخصم', type: 'currency' },
        { key: 'net_amount', title: 'الصافي', type: 'currency' },
        { key: 'user_name', title: 'المستخدم', type: 'text' }
      ],
      userName: this.user_info?.full_name || 'مستخدم',
      pageType: 'purchase-record',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToExcel(config);
  }

  private generateSubtitle(): string {
    let parts = [];

    if (this.filters.dateFrom && this.filters.dateTo) {
      if (this.filters.dateFrom === this.filters.dateTo) {
        parts.push(`التاريخ: ${this.filters.dateFrom}`);
      } else {
        parts.push(`الفترة: ${this.filters.dateFrom} - ${this.filters.dateTo}`);
      }
    }

    if (this.filters.supplierId) {
      const supplier = this.suppliers.find(s => s.id === this.filters.supplierId);
      if (supplier) {
        parts.push(`المورد: ${supplier.sub_name}`);
      }
    }

    if (this.filters.userId) {
      const user = this.users.find(u => u.id === this.filters.userId);
      if (user) {
        parts.push(`المستخدم: ${user.full_name}`);
      }
    }

    return parts.join(' | ');
  }

  formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  }
}

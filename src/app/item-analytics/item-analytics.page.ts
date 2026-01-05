import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable, Subscription } from 'rxjs';
import { LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ExportService, ExportConfig, ExportColumn } from '../services/export.service';
import { CurrencyService } from '../services/currency.service';

interface ItemAnalyticsData {
  item_id: number;
  item_name: string;
  brand?: string;
  model?: string;
  part_no?: string;
  total_quantity: number;
  total_revenue: number;
  average_price: number;
  sales_count: number;
  last_sale_date: string;
}

interface AnalyticsSummary {
  totalItemsSold: number;
  totalRevenue: number;
  averageItemPrice: number;
  totalUniqueItems: number;
}

@Component({
  selector: 'app-item-analytics',
  templateUrl: './item-analytics.page.html',
  styleUrls: ['./item-analytics.page.scss']
})
export class ItemAnalyticsPage implements OnInit, OnDestroy {

  // Core data
  analyticsData: ItemAnalyticsData[] = [];
  filteredData: ItemAnalyticsData[] = [];
  summaryData: AnalyticsSummary = {
    totalItemsSold: 0,
    totalRevenue: 0,
    averageItemPrice: 0,
    totalUniqueItems: 0
  };

  // Store and user info
  store_info: { id: any, location: any, store_name: any, store_ref: any };
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any };
  year: { id: any, yearDesc: any, yearStart: any, yearEnd: any };

  // UI state
  loading: boolean = false;
  showEmpty: boolean = false;
  device: any = '';

  // Filter options
  dateFrom: any;
  dateTo: any;
  analysisType: number = 0; // 0: All time, 1: Date range
  sortBy: 'quantity' | 'revenue' = 'quantity';
  sortDirection: 'asc' | 'desc' = 'desc';

  // Result limit options
  resultLimit: string = 'all'; // 'all', '25', '50', '100', '200', '500', 'custom'
  customLimit: number = 50;
  totalItemsCount: number = 0;

  // Currency
  currentCurrency$ = this.currencyService.getCurrentCurrency();
  private subscription: Subscription = new Subscription();

  constructor(
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController, private translate: TranslateService,
    private exportService: ExportService,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef
  ) {
    this.checkPlatform();
    this.initializeDates();
  }

  ngOnInit() {
    this.getAppInfo();
    this.initializeCurrency();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkPlatform() {
    if (this.platform.is('desktop')) {
      this.device = 'desktop';
    } else if (this.platform.is('mobile')) {
      this.device = 'mobile';
    }
  }

  initializeDates() {
    let d = new Date();
    this.dateTo = this.datePipe.transform(d, 'yyyy-MM-dd');
    // Set dateFrom to 30 days ago as default
    let thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    this.dateFrom = this.datePipe.transform(thirtyDaysAgo, 'yyyy-MM-dd');

    console.log('Initialized dates:', { dateFrom: this.dateFrom, dateTo: this.dateTo });
  }

  private async initializeCurrency() {
    await this.currencyService.initializeCurrency();
    await this.currencyService.loadSupportedCurrencies();

    if (this.store_info && this.year) {
      await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
    }

    this.subscription.add(
      this.currencyService.getCurrentCurrency().subscribe(currency => {
        this.cdr.detectChanges();
      })
    );
  }

  ionViewDidEnter() {
    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response;
        this.loadAnalytics();
      }
    });
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
      }
    });
  }

  loadAnalytics() {
    if (!this.store_info) return;

    this.loading = true;
    this.showEmpty = false;

    // Determine date parameters
    let startDate = this.analysisType === 1 ? this.dateFrom : null;
    let endDate = this.analysisType === 1 ? this.dateTo : null;

    // Debug date values
    console.log('Loading analytics with dates:', {
      analysisType: this.analysisType,
      startDate: startDate,
      endDate: endDate
    });

    // Determine limit parameter
    const limitValue = this.getLimitValue();
    const limitParam = limitValue > 0 ? limitValue : undefined;

    // Call API to get analytics data with limit parameter
    this.api.getItemSalesAnalyticsWithLimit(this.store_info.id, this.year.id, startDate, endDate, limitParam)
      .subscribe(
        (data: any) => {
          if (data && data.message !== 'No record Found' && data.data) {
            this.analyticsData = data.data;
            // Store total count from summary if available
            if (data.summary && data.summary.total_unique_items) {
              this.totalItemsCount = data.summary.total_unique_items;
            }
            this.processAnalyticsData();
            this.showEmpty = this.analyticsData.length === 0;
          } else {
            this.analyticsData = [];
            this.totalItemsCount = 0;
            this.showEmpty = true;
          }
          this.loading = false;
        },
        (error) => {
          console.error('Error loading analytics:', error);
          this.presentToast('INVENTORY.ITEM_ANALYTICS.MESSAGE.ERROR_LOADING_ANALYTICS', 'danger');
          this.loading = false;
          this.showEmpty = true;
        }
      );
  }

  processAnalyticsData() {
    // Calculate summary statistics
    this.summaryData.totalUniqueItems = this.analyticsData.length;
    this.summaryData.totalItemsSold = this.analyticsData.reduce((sum, item) => sum + item.total_quantity, 0);
    this.summaryData.totalRevenue = this.analyticsData.reduce((sum, item) => sum + item.total_revenue, 0);
    this.summaryData.averageItemPrice = this.summaryData.totalRevenue / this.summaryData.totalItemsSold || 0;

    // Apply sorting
    this.applySorting();
  }

  applySorting() {
    this.filteredData = [...this.analyticsData];

    this.filteredData.sort((a, b) => {
      let valueA, valueB;

      if (this.sortBy === 'quantity') {
        valueA = a.total_quantity;
        valueB = b.total_quantity;
      } else {
        valueA = a.total_revenue;
        valueB = b.total_revenue;
      }

      if (this.sortDirection === 'desc') {
        return valueB - valueA;
      } else {
        return valueA - valueB;
      }
    });
  }

  onAnalysisTypeChange() {
    this.loadAnalytics();
  }

  onDateChange() {
    // Optional: Add delay to prevent too frequent API calls
    if (this.analysisType === 1 && this.dateFrom && this.dateTo) {
      console.log('Date changed:', { dateFrom: this.dateFrom, dateTo: this.dateTo });
      // Could add debouncing here if needed
      this.loadAnalytics();
    }
  }

  onSortChange() {
    this.applySorting();
  }

  onLimitChange() {
    if (this.resultLimit === 'custom') {
      // Don't reload data yet, wait for custom limit input
      return;
    }
    this.loadAnalytics();
  }

  onCustomLimitChange() {
    if (this.resultLimit === 'custom' && this.customLimit > 0) {
      this.loadAnalytics();
    }
  }

  getDisplayedItemsText(): string {
    if (this.filteredData.length === 0) return '';

    const displayedCount = this.filteredData.length;
    const totalCount = this.totalItemsCount || displayedCount;

    if (this.resultLimit === 'all') {
      return `جميع الأصناف (${displayedCount} صنف)`;
    }

    const limitValue = this.getLimitValue();
    if (displayedCount < limitValue || displayedCount === totalCount) {
      return `${displayedCount} من إجمالي ${totalCount} صنف`;
    }

    return `أفضل ${displayedCount} من إجمالي ${totalCount} صنف`;
  }

  private getLimitValue(): number {
    switch (this.resultLimit) {
      case 'all': return 0;
      case 'custom': return this.customLimit;
      default: return parseInt(this.resultLimit);
    }
  }

  formatCurrency(amount: number): string {
    const currentCurrency = this.currencyService.getCurrentCurrencyValue();
    return this.currencyService.formatCurrency(amount, currentCurrency);
  }

  formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
  }

  async exportToPDF(): Promise<void> {
    if (!this.filteredData || this.filteredData.length === 0) {
      await this.presentToast('INVENTORY.ITEM_ANALYTICS.MESSAGE.NO_DATA_TO_EXPORT', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: 'تحليل مبيعات الأصناف',
      subtitle: this.generateSubtitle(),
      fileName: `item-analytics-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.filteredData,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'item-analytics',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToPDF(config);
  }

  async exportToExcel(): Promise<void> {
    if (!this.filteredData || this.filteredData.length === 0) {
      await this.presentToast('INVENTORY.ITEM_ANALYTICS.MESSAGE.NO_DATA_TO_EXPORT', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: 'تحليل مبيعات الأصناف',
      subtitle: this.generateSubtitle(),
      fileName: `item-analytics-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.filteredData,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'item-analytics',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToExcel(config);
  }

  private generateSubtitle(): string {
    let subtitle = 'تحليل ';
    subtitle += this.sortBy === 'quantity' ? 'الكمية' : 'الإيرادات';

    if (this.analysisType === 1) {
      subtitle += ` من ${this.dateFrom} إلى ${this.dateTo}`;
    } else {
      subtitle += ' - جميع الأوقات';
    }

    return subtitle;
  }

  private getExportColumns(): ExportColumn[] {
    return [
      { key: 'item_name', title: 'اسم الصنف', width: 25, type: 'text' },
      { key: 'brand', title: 'الماركة', width: 15, type: 'text' },
      { key: 'model', title: 'الموديل', width: 15, type: 'text' },
      { key: 'part_no', title: 'رقم القطعة', width: 15, type: 'text' },
      { key: 'total_quantity', title: 'إجمالي الكمية', width: 12, type: 'number' },
      { key: 'total_revenue', title: 'إجمالي الإيرادات', width: 15, type: 'currency' },
      { key: 'average_price', title: 'متوسط السعر', width: 12, type: 'currency' },
      { key: 'sales_count', title: 'عدد المبيعات', width: 12, type: 'number' },
      { key: 'last_sale_date', title: 'آخر عملية بيع', width: 12, type: 'date' }
    ];
  }

  async presentToast(translationKey: string, color?: string) {
    const message = this.translate.instant(translationKey);
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      color: color,
      cssClass: 'cust_Toast',
      mode: 'ios',
      position: 'top'
    });
    toast.present();
  }

  async presentLoadingWithOptions(msg?: string) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode: 'ios',
      duration: 3000,
      message: msg,
      translucent: true,
      backdropDismiss: false
    });
    await loading.present();
  }
}

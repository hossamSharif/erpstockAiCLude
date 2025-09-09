import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from '../stockService/services.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Chart, registerables, ChartConfiguration } from 'chart.js';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.page.html',
  styleUrls: ['./analytics-dashboard.page.scss']
})
export class AnalyticsDashboardPage implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('salesPurchaseChart', { static: false }) salesPurchaseChart: ElementRef;
  @ViewChild('cashFlowChart', { static: false }) cashFlowChart: ElementRef;
  @ViewChild('stockValueChart', { static: false }) stockValueChart: ElementRef;

  // App info
  store_info: {id: any, location: any, store_name: any, store_ref: any} | null = null;
  user_info: {id: any, user_name: any, store_id: any, full_name: any, password: any} | null = null;
  year: {id: any, yearDesc: any, yearStart: any, yearEnd: any} | null = null;

  // Date filter properties
  selectedDateFilter: string = 'currentMonth';
  startDate: string = '';
  endDate: string = '';
  customDateRange: boolean = false;
  private dateChangeTimeout: any;
  
  // Currency management
  currentCurrency$ = this.currencyService.getCurrentCurrency();
  dashboardData: any = {};
  private currencySubscription: Subscription;

  // Loading states
  loading: boolean = false;
  cardsLoading: boolean = true;
  chartsLoading: boolean = true;
  
  // Mock data for loading states
  mockSalesPurchaseData: any[] = [
    { date: '2024-01-01', sales: 15000, purchase: 8000 },
    { date: '2024-01-02', sales: 22000, purchase: 12000 },
    { date: '2024-01-03', sales: 18000, purchase: 9500 },
    { date: '2024-01-04', sales: 25000, purchase: 15000 },
    { date: '2024-01-05', sales: 19000, purchase: 11000 },
    { date: '2024-01-06', sales: 28000, purchase: 16500 },
    { date: '2024-01-07', sales: 21000, purchase: 13000 }
  ];
  
  mockCashFlowData: any = {
    cashIn: 45000,
    cashOut: 28000
  };
  
  mockStockValueData: any = {
    payPrice: 125000,
    purchPrice: 89000
  };

  // Dashboard data
  dashboardTotals = {
    totalSales: 0,
    totalPurchase: 0,
    cashIn: 0,
    cashOut: 0,
    debtors: 0,
    creditors: 0
  };

  salesPurchaseData: any[] = [];
  cashFlowData: any = {
    cashIn: 0,
    cashOut: 0
  };
  stockValueData: any = {
    payPrice: 0,
    purchPrice: 0
  };

  // Chart instances
  salesPurchaseChartInstance: Chart | null = null;
  cashFlowChartInstance: Chart | null = null;
  stockValueChartInstance: Chart | null = null;

  // Preset options
  datePresets = [
    { key: 'week', label: 'اسبوع', value: 'week' },
    { key: 'currentMonth', label: 'الشهر الحالي', value: 'currentMonth' },
    { key: 'last3Months', label: 'اخر 3 شهور', value: 'last3Months' }
  ];

  constructor(
    private api: ServicesService,
    private loadingController: LoadingController,
    private toast: ToastController,
    private datePipe: DatePipe,
    private storage: Storage,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef
  ) { 
    this.initializeDateRange();
  }

  ngOnInit() {
    this.initializeCurrency();
    this.getAppInfo();
  }
  
  ngOnDestroy() {
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }
  
  async initializeCurrency() {
    try {
      await this.currencyService.initializeCurrency();
      await this.currencyService.loadSupportedCurrencies();
      
      if (this.store_info && this.year) {
        await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
      }
      
      this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
        this.updateDashboardCurrency();
        this.cdr.detectChanges();
      }, error => {
        console.error('Currency subscription error:', error);
        // Continue without currency features if there's an error
      });
    } catch (error) {
      console.error('Currency initialization error:', error);
      // Continue loading dashboard even if currency initialization fails
    }
  }
  
  updateDashboardCurrency() {
    this.convertDashboardMetrics();
    this.updateChartData();
  }
  
  convertDashboardMetrics() {
    const currentCurrency = this.currencyService.getCurrentCurrencyValue();
    
    // Convert mock data for display
    if (this.mockCashFlowData) {
      this.dashboardData.cashIn = this.currencyService.convertFromSDG(
        this.mockCashFlowData.cashIn || 0, currentCurrency
      );
      this.dashboardData.cashOut = this.currencyService.convertFromSDG(
        this.mockCashFlowData.cashOut || 0, currentCurrency
      );
    }
  }
  
  updateChartData() {
    // Update chart datasets with currency conversion if charts exist
    // This would be implemented based on the actual chart structure when real data is loaded
  }
  
  getCurrencySymbol(currency: string): string {
    const symbols = { 'SDG': 'ج.س', 'USD': '$', 'AED': 'د.إ', 'SAR': 'ر.س' };
    return symbols[currency] || currency;
  }
  
  getExchangeRate(): number {
    const currentCurrency = this.currencyService.getCurrentCurrencyValue();
    return this.currencyService.getExchangeRate(currentCurrency);
  }

  ngAfterViewInit() {
    // Initialize mock charts immediately for loading animation
    setTimeout(() => {
      this.initializeMockCharts();
    }, 100);
  }

  initializeDateRange() {
    const now = new Date();
    // Default to current month
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    
    this.startDate = this.datePipe.transform(firstDay, 'yyyy-MM-dd') || '';
    this.endDate = this.datePipe.transform(lastDay, 'yyyy-MM-dd') || '';
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
        this.loadDashboardData();
      }
    });
  }

  onDatePresetChange(preset: string) {
    // Clear any pending date change timeout
    if (this.dateChangeTimeout) {
      clearTimeout(this.dateChangeTimeout);
      this.dateChangeTimeout = null;
    }
    
    // Only proceed if not currently in custom mode or explicitly changing preset
    if (this.selectedDateFilter === preset && !this.customDateRange) {
      return; // Already on this preset, no need to change
    }
    
    this.selectedDateFilter = preset;
    this.customDateRange = false;

    const now = new Date();
    let start: Date, end: Date;

    switch (preset) {
      case 'week':
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        start = weekStart;
        end = new Date();
        break;
      case 'currentMonth':
        start = new Date(now.getFullYear(), now.getMonth(), 1);
        end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        break;
      case 'last3Months':
        start = new Date(now.getFullYear(), now.getMonth() - 3, 1);
        end = new Date();
        break;
      default:
        start = new Date(now.getFullYear(), now.getMonth(), 1);
        end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    }

    // Update dates directly (this might trigger ngModelChange, but that's okay)
    this.startDate = this.datePipe.transform(start, 'yyyy-MM-dd') || '';
    this.endDate = this.datePipe.transform(end, 'yyyy-MM-dd') || '';
    
    console.log('Preset changed to:', preset, 'Dates:', this.startDate, this.endDate);
    
    // Load data immediately for preset changes
    this.loadDashboardData();
  }

  onStartDateChange(newDate: string) {
    console.log('Start date changed:', newDate);
    this.triggerDateChange();
  }

  onEndDateChange(newDate: string) {
    console.log('End date changed:', newDate);
    this.triggerDateChange();
  }


  private triggerDateChange() {
    // Clear any existing timeout to prevent multiple calls
    if (this.dateChangeTimeout) {
      clearTimeout(this.dateChangeTimeout);
    }
    
    // Mark as custom range
    this.customDateRange = true;
    this.selectedDateFilter = 'custom';
    
    // Simple debounce - wait for user to finish selecting dates
    this.dateChangeTimeout = setTimeout(() => {
      console.log('Triggering data load with dates:', this.startDate, this.endDate);
      this.loadDashboardData();
    }, 800); // Shorter delay - 0.8 seconds
  }

  async loadDashboardData() {
    if (!this.store_info?.id || !this.year?.id) return;

    // Reset loading states
    this.cardsLoading = true;
    this.chartsLoading = true;
    
    try {
      // Progressive loading: Load cards first
      await this.loadTotalCards();
      this.cardsLoading = false;

      // Wait a bit for smooth transition, then load chart data
      await new Promise(resolve => setTimeout(resolve, 500));
      
      await Promise.all([
        this.loadSalesPurchaseData(),
        this.loadCashFlowData(),
        this.loadStockValueData()
      ]);

      // Initialize real charts after data is loaded
      this.chartsLoading = false;
      setTimeout(() => {
        this.initializeRealCharts();
      }, 300);
      
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      this.presentToast('خطأ في تحميل بيانات لوحة التحكم', 'danger');
      this.cardsLoading = false;
      this.chartsLoading = false;
    }
  }

  async loadTotalCards() {
    // Remove the duplicate cardsLoading assignment since it's now handled in loadDashboardData
    
    try {
      // Load sales totals
      const salesResponse: any = await this.api.getDashboardSalesPurchase(
        this.store_info!.id, 
        this.startDate, 
        this.endDate, 
        this.year!.id
      ).toPromise();
      
      if (salesResponse && salesResponse.success) {
        this.dashboardTotals.totalSales = salesResponse.data.total_sales || 0;
        this.dashboardTotals.totalPurchase = salesResponse.data.total_purchase || 0;
      }

      // Load debtor/creditor totals
      const debtorCreditorResponse: any = await this.api.getDashboardDebtorCreditor(
        this.store_info!.id,
        this.year!.id
      ).toPromise();

      if (debtorCreditorResponse && debtorCreditorResponse.success) {
        this.dashboardTotals.debtors = debtorCreditorResponse.data.total_debtors || 0;
        this.dashboardTotals.creditors = debtorCreditorResponse.data.total_creditors || 0;
      }

      // Load cash in/out totals
      const cashFlowResponse: any = await this.api.getDashboardCashFlow(
        this.store_info!.id,
        this.startDate,
        this.endDate,
        this.year!.id
      ).toPromise();

      if (cashFlowResponse && cashFlowResponse.success) {
        this.dashboardTotals.cashIn = cashFlowResponse.data.cash_in || 0;
        this.dashboardTotals.cashOut = cashFlowResponse.data.cash_out || 0;
      }

    } catch (error) {
      console.error('Error loading total cards:', error);
    }
  }

  async loadSalesPurchaseData() {
    try {
      const response: any = await this.api.getDashboardSalesPurchase(
        this.store_info!.id,
        this.startDate,
        this.endDate,
        this.year!.id
      ).toPromise();

      if (response && response.success) {
        this.salesPurchaseData = response.data.chart_data || [];
      }
    } catch (error) {
      console.error('Error loading sales purchase data:', error);
    }
  }

  async loadCashFlowData() {
    try {
      const response: any = await this.api.getDashboardCashFlow(
        this.store_info!.id,
        this.startDate,
        this.endDate,
        this.year!.id
      ).toPromise();

      if (response && response.success) {
        this.cashFlowData = {
          cashIn: response.data.cash_in || 0,
          cashOut: response.data.cash_out || 0
        };
      }
    } catch (error) {
      console.error('Error loading cash flow data:', error);
    }
  }

  async loadStockValueData() {
    try {
      const response: any = await this.api.getDashboardStockValue(
        this.store_info!.id,
        this.year!.id
      ).toPromise();

      console.log('Stock Value API Response:', response); // Debug log

      if (response && response.success) {
        this.stockValueData = {
          payPrice: response.data.payPrice || 0,
          purchPrice: response.data.purchPrice || 0
        };
        
        console.log('Stock Value Data Set:', this.stockValueData); // Debug log
      }
    } catch (error) {
      console.error('Error loading stock value data:', error);
    }
  }

  initializeMockCharts() {
    this.createMockSalesPurchaseChart();
    this.createMockCashFlowChart();
    this.createMockStockValueChart();
  }

  initializeRealCharts() {
    this.createSalesPurchaseChart();
    this.createCashFlowChart();
    this.createStockValueChart();
  }

  // Mock chart methods with animated loading data
  createMockSalesPurchaseChart() {
    if (!this.salesPurchaseChart?.nativeElement) return;

    const ctx = this.salesPurchaseChart.nativeElement.getContext('2d');
    
    if (this.salesPurchaseChartInstance) {
      this.salesPurchaseChartInstance.destroy();
    }

    const labels = this.mockSalesPurchaseData.map(item => item.date);
    const salesData = this.mockSalesPurchaseData.map(item => item.sales);
    const purchaseData = this.mockSalesPurchaseData.map(item => item.purchase);

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'المبيعات (مؤقت)',
            data: salesData,
            borderColor: 'rgba(61, 194, 255, 0.6)',
            backgroundColor: 'rgba(61, 194, 255, 0.1)',
            tension: 0.4,
            fill: true,
            borderDash: [5, 5] // Dashed line to indicate loading
          },
          {
            label: 'المشتريات (مؤقت)',
            data: purchaseData,
            borderColor: 'rgba(16, 220, 96, 0.6)',
            backgroundColor: 'rgba(16, 220, 96, 0.1)',
            tension: 0.4,
            fill: true,
            borderDash: [5, 5] // Dashed line to indicate loading
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'المبيعات والمشتريات (جاري التحميل...)',
            color: '#888'
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#ccc',
              callback: function(value) {
                return new Intl.NumberFormat('en-US').format(value as number);
              }
            }
          },
          x: {
            ticks: {
              color: '#ccc'
            }
          }
        },
        animation: {
          duration: 2000,
          loop: true
        }
      }
    };

    this.salesPurchaseChartInstance = new Chart(ctx, config);
  }

  createMockCashFlowChart() {
    if (!this.cashFlowChart?.nativeElement) return;

    const ctx = this.cashFlowChart.nativeElement.getContext('2d');
    
    if (this.cashFlowChartInstance) {
      this.cashFlowChartInstance.destroy();
    }

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: ['الوارد النقدي (مؤقت)', 'الصادر النقدي (مؤقت)'],
        datasets: [{
          data: [this.mockCashFlowData.cashIn, this.mockCashFlowData.cashOut],
          backgroundColor: ['rgba(16, 220, 96, 0.6)', 'rgba(240, 65, 65, 0.6)'],
          hoverBackgroundColor: ['rgba(12, 200, 81, 0.8)', 'rgba(237, 69, 69, 0.8)'],
          borderWidth: 2,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'الحركة النقدية (جاري التحميل...)',
            color: '#888'
          },
          legend: {
            position: 'bottom',
            labels: {
              color: '#ccc'
            }
          }
        },
        animation: {
          duration: 2000,
          loop: true
        }
      }
    };

    this.cashFlowChartInstance = new Chart(ctx, config);
  }

  createMockStockValueChart() {
    if (!this.stockValueChart?.nativeElement) return;

    const ctx = this.stockValueChart.nativeElement.getContext('2d');
    
    if (this.stockValueChartInstance) {
      this.stockValueChartInstance.destroy();
    }

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['قيمة البيع (مؤقت)', 'قيمة الشراء (مؤقت)'],
        datasets: [{
          label: 'قيمة المخزون (مؤقت)',
          data: [this.mockStockValueData.payPrice, this.mockStockValueData.purchPrice],
          backgroundColor: ['rgba(61, 194, 255, 0.6)', 'rgba(255, 206, 0, 0.6)'],
          borderColor: ['rgba(51, 157, 255, 0.8)', 'rgba(255, 183, 0, 0.8)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'قيمة المخزون (جاري التحميل...)',
            color: '#888'
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#ccc',
              callback: function(value) {
                return new Intl.NumberFormat('en-US').format(value as number);
              }
            }
          },
          x: {
            ticks: {
              color: '#ccc'
            }
          }
        },
        animation: {
          duration: 2000,
          loop: true
        }
      }
    };

    this.stockValueChartInstance = new Chart(ctx, config);
  }

  createSalesPurchaseChart() {
    if (!this.salesPurchaseChart?.nativeElement) return;

    const ctx = this.salesPurchaseChart.nativeElement.getContext('2d');
    
    // Destroy existing chart if any
    if (this.salesPurchaseChartInstance) {
      this.salesPurchaseChartInstance.destroy();
    }

    const chartData = this.salesPurchaseData;
    const labels = chartData.map(item => item.date);
    const salesData = chartData.map(item => item.sales);
    const purchaseData = chartData.map(item => item.purchase);

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'المبيعات',
            data: salesData,
            borderColor: '#3dc2ff',
            backgroundColor: 'rgba(61, 194, 255, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'المشتريات',
            data: purchaseData,
            borderColor: '#10dc60',
            backgroundColor: 'rgba(16, 220, 96, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'المبيعات والمشتريات'
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return new Intl.NumberFormat('en-US').format(value as number);
              }
            }
          }
        },
        animation: {
          duration: 1000
        }
      }
    };

    this.salesPurchaseChartInstance = new Chart(ctx, config);
  }

  createCashFlowChart() {
    if (!this.cashFlowChart?.nativeElement) return;

    const ctx = this.cashFlowChart.nativeElement.getContext('2d');
    
    // Destroy existing chart if any
    if (this.cashFlowChartInstance) {
      this.cashFlowChartInstance.destroy();
    }

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: ['الوارد النقدي', 'الصادر النقدي'],
        datasets: [{
          data: [this.cashFlowData.cashIn, this.cashFlowData.cashOut],
          backgroundColor: ['#10dc60', '#f04141'],
          hoverBackgroundColor: ['#0cd851', '#ed4545']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'الحركة النقدية'
          },
          legend: {
            position: 'bottom'
          }
        },
        animation: {
          duration: 1000
        }
      }
    };

    this.cashFlowChartInstance = new Chart(ctx, config);
  }

  createStockValueChart() {
    if (!this.stockValueChart?.nativeElement) return;

    const ctx = this.stockValueChart.nativeElement.getContext('2d');
    
    // Destroy existing chart if any
    if (this.stockValueChartInstance) {
      this.stockValueChartInstance.destroy();
    }

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['قيمة البيع', 'قيمة الشراء'],
        datasets: [{
          label: 'قيمة المخزون',
          data: [this.stockValueData.payPrice, this.stockValueData.purchPrice],
          backgroundColor: ['#3dc2ff', '#ffce00'],
          borderColor: ['#339dff', '#ffb700'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'قيمة المخزون'
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return new Intl.NumberFormat('en-US').format(value as number);
              }
            }
          }
        },
        animation: {
          duration: 1000
        }
      }
    };

    this.stockValueChartInstance = new Chart(ctx, config);
  }

  formatCurrency(amount: number): string {
    // Ensure English number format across all currency displays
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }

  refresh() {
    this.loadDashboardData();
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

  ionViewWillLeave() {
    // Clean up chart instances to prevent memory leaks
    if (this.salesPurchaseChartInstance) {
      this.salesPurchaseChartInstance.destroy();
      this.salesPurchaseChartInstance = null;
    }
    if (this.cashFlowChartInstance) {
      this.cashFlowChartInstance.destroy();
      this.cashFlowChartInstance = null;
    }
    if (this.stockValueChartInstance) {
      this.stockValueChartInstance.destroy();
      this.stockValueChartInstance = null;
    }
    
    // Clean up timeout
    if (this.dateChangeTimeout) {
      clearTimeout(this.dateChangeTimeout);
      this.dateChangeTimeout = null;
    }
  }
}

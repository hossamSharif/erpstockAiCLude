import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from '../stockService/services.service';
import { TranslateService } from '@ngx-translate/core';
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
  @ViewChild('expenseCategoryChart', { static: false }) expenseCategoryChart: ElementRef;

  // App info
  store_info: {id: any, location: any, store_name: any, store_ref: any} | null = null;
  user_info: {id: any, user_name: any, store_id: any, full_name: any, password: any} | null = null;
  year: {id: any, yearDesc: any, yearStart: any, yearEnd: any} | null = null;

  // Tab management
  selectedTab: string = 'analytics';

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
    creditors: 0,
    totalExpenses: 0
  };

  salesPurchaseData: any[] = [];

  // Expense data
  expenseData: any = {
    totalExpenses: 0,
    expenseCount: 0
  };
  expenseChartData: any[] = [];
  expenseCategoryData: any[] = [];
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
  expenseCategoryChartInstance: Chart | null = null;

  // Daily Report properties
  dailyReportData: any = {
    sales: { invoices: [], totalAmount: 0, invoiceCount: 0 },
    purchases: { invoices: [], totalAmount: 0, invoiceCount: 0 },
    expenses: { items: [], totalAmount: 0, itemCount: 0 },
    receipts: { transactions: [], totalAmount: 0 },
    payments: { transactions: [], totalAmount: 0 },
    accountBalances: { cashAccounts: [], bankAccounts: [], totalCash: 0, totalBank: 0 },
    summary: { amountIn: 0, amountOut: 0, netIncome: 0 }
  };
  dailyReportGenerated: boolean = false;
  dailyReportLoading: boolean = false;

  // Accordion state for daily report sections
  salesExpanded: boolean = false;
  purchasesExpanded: boolean = false;
  expensesExpanded: boolean = false;
  receiptsExpanded: boolean = false;
  paymentsExpanded: boolean = false;

  // Preset options
  datePresets = [
    { key: 'today', label: 'اليوم', value: 'today' },
    { key: 'week', label: 'اسبوع', value: 'week' },
    { key: 'currentMonth', label: 'الشهر الحالي', value: 'currentMonth' },
    { key: 'last3Months', label: 'اخر 3 شهور', value: 'last3Months' },
    { key: 'year', label: 'السنة', value: 'year' }
  ];

  constructor(
    private api: ServicesService,
    private loadingController: LoadingController,
    private toast: ToastController,
    private datePipe: DatePipe,
    private storage: Storage,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
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
      case 'today':
        start = new Date(now);
        end = new Date(now);
        break;
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
      case 'year':
        // Use financial year from stored year object
        if (this.year) {
          start = new Date(this.year.yearStart);
          end = new Date(this.year.yearEnd);
        } else {
          start = new Date(now.getFullYear(), 0, 1);
          end = new Date(now.getFullYear(), 11, 31);
        }
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

    // Also load daily report if on that tab
    if (this.selectedTab === 'dailyReport') {
      this.loadDailyReportData();
    }
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

      // Also load daily report if on that tab
      if (this.selectedTab === 'dailyReport') {
        this.loadDailyReportData();
      }
    }, 800); // Shorter delay - 0.8 seconds
  }

  async loadDashboardData() {
    if (!this.store_info?.id || !this.year?.id) return;

    // Reset loading states
    this.cardsLoading = true;
    this.chartsLoading = true;

    try {
      // Progressive loading: Load cards first (including expense KPI)
      await Promise.all([
        this.loadTotalCards(),
        this.loadExpenseData()
      ]);
      this.cardsLoading = false;

      // Wait a bit for smooth transition, then load chart data
      await new Promise(resolve => setTimeout(resolve, 500));

      await Promise.all([
        this.loadSalesPurchaseData(),
        this.loadCashFlowData(),
        this.loadStockValueData(),
        this.loadExpenseCategoryData()
      ]);

      // Initialize real charts after data is loaded
      this.chartsLoading = false;
      setTimeout(() => {
        this.initializeRealCharts();
      }, 300);

    } catch (error) {
      console.error('Error loading dashboard data:', error);
      this.presentToast('COMMON.MESSAGE.ERROR_LOADING_DATA', 'danger');
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

  // Load expense analytics data
  async loadExpenseData() {
    try {
      const response: any = await this.api.getDashboardExpenseAnalytics(
        this.store_info!.id,
        this.startDate,
        this.endDate,
        this.year!.id
      ).toPromise();

      if (response && response.success) {
        this.expenseData.totalExpenses = response.data.total_expenses || 0;
        this.expenseData.expenseCount = response.data.expense_count || 0;
        this.expenseChartData = response.data.chart_data || [];

        // Update dashboardTotals for expense KPI card
        this.dashboardTotals.totalExpenses = this.expenseData.totalExpenses;
      }
    } catch (error) {
      console.error('Error loading expense data:', error);
    }
  }

  // Load expense by category data
  async loadExpenseCategoryData() {
    try {
      const response: any = await this.api.getDashboardExpenseByCategory(
        this.store_info!.id,
        this.startDate,
        this.endDate,
        this.year!.id
      ).toPromise();

      if (response && response.success) {
        this.expenseCategoryData = response.data.categories || [];
      }
    } catch (error) {
      console.error('Error loading expense category data:', error);
    }
  }

  // Tab switching method
  onTabChange(event: any) {
    const tab = event?.detail?.value || event;
    this.selectedTab = tab;
    if (tab === 'analytics') {
      // Refresh analytics charts if needed
      if (!this.cardsLoading && !this.chartsLoading) {
        setTimeout(() => this.initializeRealCharts(), 100);
      }
    } else if (tab === 'dailyReport') {
      // Load daily report data
      this.loadDailyReportData();
    }
  }

  // Daily Report methods
  async loadDailyReportData() {
    if (!this.store_info?.id || !this.year?.id) return;

    console.log('Loading daily report for date range:', this.startDate, 'to', this.endDate);

    this.dailyReportLoading = true;
    this.dailyReportGenerated = false;

    try {
      const fromDate = this.startDate;
      const toDate = this.endDate;

      const response: any = await this.api.getDailyReport(
        this.store_info.id,
        this.year.id,
        fromDate,
        toDate
      ).toPromise();

      console.log('Daily report response:', response);

      if (response && response.status === 'success' && response.data) {
        this.processDailyReportData(response.data);
        this.dailyReportGenerated = true;
        console.log('Daily report data processed successfully');
      }
    } catch (error) {
      console.error('Error loading daily report:', error);
      this.presentToast('COMMON.MESSAGE.ERROR_LOADING_DATA', 'danger');
    } finally {
      this.dailyReportLoading = false;
    }
  }

  processDailyReportData(data: any) {
    this.dailyReportData = {
      sales: {
        invoices: data.sales?.invoices || [],
        totalAmount: data.sales?.totalAmount || 0,
        invoiceCount: data.sales?.invoiceCount || 0
      },
      purchases: {
        invoices: data.purchases?.invoices || [],
        totalAmount: data.purchases?.totalAmount || 0,
        invoiceCount: data.purchases?.invoiceCount || 0
      },
      expenses: {
        items: data.expenses?.items || [],
        totalAmount: data.expenses?.totalAmount || 0,
        itemCount: data.expenses?.itemCount || 0
      },
      receipts: {
        transactions: data.receipts?.transactions || [],
        totalAmount: data.receipts?.totalAmount || 0
      },
      payments: {
        transactions: data.payments?.transactions || [],
        totalAmount: data.payments?.totalAmount || 0
      },
      accountBalances: {
        cashAccounts: data.accountBalances?.cashAccounts || [],
        bankAccounts: data.accountBalances?.bankAccounts || [],
        totalCash: data.accountBalances?.totalCash || 0,
        totalBank: data.accountBalances?.totalBank || 0
      },
      summary: {
        amountIn: data.summary?.amountIn || 0,
        amountOut: data.summary?.amountOut || 0,
        netIncome: data.summary?.netIncome || 0
      }
    };
  }

  toggleSection(section: string) {
    switch (section) {
      case 'sales': this.salesExpanded = !this.salesExpanded; break;
      case 'purchases': this.purchasesExpanded = !this.purchasesExpanded; break;
      case 'expenses': this.expensesExpanded = !this.expensesExpanded; break;
      case 'receipts': this.receiptsExpanded = !this.receiptsExpanded; break;
      case 'payments': this.paymentsExpanded = !this.paymentsExpanded; break;
    }
  }

  getFormattedDateRange(): string {
    if (this.startDate === this.endDate) {
      return this.startDate;
    }
    return `${this.startDate} - ${this.endDate}`;
  }

  // Helper: Merge sales, purchase, and expense data by date
  mergeSalesPurchaseExpenseData(): any[] {
    const dateMap = new Map();

    // Add sales/purchase data
    this.salesPurchaseData.forEach(item => {
      dateMap.set(item.date, {
        date: item.date,
        sales: item.sales || 0,
        purchase: item.purchase || 0,
        expense: 0
      });
    });

    // Add expense data
    this.expenseChartData.forEach(item => {
      if (dateMap.has(item.date)) {
        dateMap.get(item.date).expense = item.amount || 0;
      } else {
        dateMap.set(item.date, {
          date: item.date,
          sales: 0,
          purchase: 0,
          expense: item.amount || 0
        });
      }
    });

    // Sort by date and return
    return Array.from(dateMap.values()).sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  // Helper: Generate chart colors
  generateChartColors(count: number): string[] {
    const baseColors = [
      '#9b59b6', '#e74c3c', '#3498db', '#2ecc71', '#f39c12',
      '#1abc9c', '#e67e22', '#34495e', '#16a085', '#d35400',
      '#8e44ad', '#c0392b', '#27ae60', '#2980b9', '#f1c40f'
    ];

    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(baseColors[i % baseColors.length]);
    }
    return colors;
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
    this.createExpenseCategoryChart();
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

    // Merge sales, purchase, and expense data by date
    const mergedData = this.mergeSalesPurchaseExpenseData();
    const labels = mergedData.map(item => item.date);
    const salesData = mergedData.map(item => item.sales);
    const purchaseData = mergedData.map(item => item.purchase);
    const expenseData = mergedData.map(item => item.expense);

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'المبيعات',
            data: salesData,
            borderColor: '#10dc60',
            backgroundColor: 'rgba(16, 220, 96, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'المشتريات',
            data: purchaseData,
            borderColor: '#3dc2ff',
            backgroundColor: 'rgba(61, 194, 255, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'المصروفات',
            data: expenseData,
            borderColor: '#9b59b6',
            backgroundColor: 'rgba(155, 89, 182, 0.1)',
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
            text: 'المبيعات والمشتريات والمصروفات'
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

  createExpenseCategoryChart() {
    if (!this.expenseCategoryChart?.nativeElement) return;

    const ctx = this.expenseCategoryChart.nativeElement.getContext('2d');

    if (this.expenseCategoryChartInstance) {
      this.expenseCategoryChartInstance.destroy();
    }

    // Generate colors dynamically based on number of categories
    const colors = this.generateChartColors(this.expenseCategoryData.length);

    const labels = this.expenseCategoryData.map(item => item.category_name || 'غير مصنف');
    const data = this.expenseCategoryData.map(item => item.total_amount);

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          hoverBackgroundColor: colors.map(c => this.adjustColorBrightness(c, -20)),
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
            text: 'المصروفات حسب التصنيف'
          },
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 15
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.parsed;
                const total = (context.dataset.data as number[]).reduce((a: number, b: number) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${context.label}: ${this.formatCurrency(value)} (${percentage}%)`;
              }
            }
          }
        },
        animation: {
          duration: 1000
        }
      }
    };

    this.expenseCategoryChartInstance = new Chart(ctx, config);
  }

  // Helper: Adjust color brightness
  adjustColorBrightness(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 +
      (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255)
    ).toString(16).slice(1);
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
    if (this.expenseCategoryChartInstance) {
      this.expenseCategoryChartInstance.destroy();
      this.expenseCategoryChartInstance = null;
    }
    
    // Clean up timeout
    if (this.dateChangeTimeout) {
      clearTimeout(this.dateChangeTimeout);
      this.dateChangeTimeout = null;
    }
  }
}

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { AlertController, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common'; 
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { SortingService, SortConfig } from '../services/sorting.service';
import { ExportService, ExportConfig, ExportColumn } from '../services/export.service';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-balance-sheet2',
  templateUrl: './balance-sheet2.page.html',
  styleUrls: ['./balance-sheet2.page.scss'], 
})
export class BalanceSheet2Page implements OnInit, OnDestroy {
  
  // Core data
  accounts: Array<any> = [];
  filteredAccounts: Array<any> = [];
  sortedAccounts: Array<any> = [];
  currentSort: SortConfig | null = null;
  
  // App info
  store_info: {id: any, location: any, store_name: any, store_ref: any} | null = null;
  user_info: {id: any, user_name: any, store_id: any, full_name: any, password: any} | null = null;
  year: {id: any, yearDesc: any, yearStart: any, yearEnd: any} | null = null;
  
  // Filter and UI state
  segmentValue: string = 'all';
  showOnlyWithBalance: boolean = false;
  loading: boolean = false;
  showEmpty: boolean = false;
  device: string = '';
  
  // Summary totals
  summary: {
    total_accounts: number;
    grand_debit_total: number;
    grand_credit_total: number;
    difference: number;
  } = {
    total_accounts: 0,
    grand_debit_total: 0,
    grand_credit_total: 0,
    difference: 0
  };
  
  // Currency management
  private currencySubscription: Subscription;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private router: Router,
    private storage: Storage,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private datePipe: DatePipe,
    private api: ServicesService,
    private toast: ToastController,
    private sortingService: SortingService,
    private exportService: ExportService,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef
  ) { 
    this.checkPlatform();
    this.getAppInfo();
  }

  ngOnInit() {
    this.initializeCurrency();
  }
  
  ngOnDestroy() {
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }

  ionViewDidEnter() {
    this.getAppInfo();
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
        this.loadBalanceSheet();
      }
    });
  }

  loadBalanceSheet() {
    if (!this.store_info?.id || !this.year?.id) return;
    
    this.loading = true;
    this.showEmpty = false;
    
    this.api.getComprehensiveBalanceSheet(this.store_info.id, this.year.id).subscribe(
      (data: any) => {
        this.loading = false;
        
        if (data && data.accounts) {
          this.accounts = data.accounts;
          this.summary = data.summary;
          this.applyFilters();
        } else {
          this.showEmpty = true;
          this.accounts = [];
        }
      },
      (error) => {
        console.error('Error loading balance sheet:', error);
        this.loading = false;
        this.showEmpty = true;
        this.presentToast('خطأ في تحميل ميزان المراجعة', 'danger');
      }
    );
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
    this.applyFilters();
  }

  balanceFilterChanged() {
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.accounts];
    
    // Apply category filter
    if (this.segmentValue !== 'all') {
      switch (this.segmentValue) {
        case 'customer':
          filtered = filtered.filter(acc => acc.cat_id == 1);
          break;
        case 'supplier':
          filtered = filtered.filter(acc => acc.cat_id == 2);
          break;
        case 'sales':
          filtered = filtered.filter(acc => acc.ac_id == 8);
          break;
        case 'purchases':
          filtered = filtered.filter(acc => acc.ac_id == 9);
          break;
        case 'other':
          filtered = filtered.filter(acc => ![1, 2, 8, 9].includes(acc.ac_id));
          break;
      }
    }
    
    // Apply balance filter
    if (this.showOnlyWithBalance) {
      filtered = filtered.filter(acc => 
        acc.display_debit > 0 || acc.display_credit > 0
      );
    }
    
    this.filteredAccounts = filtered;
    this.calculateFilteredTotals();
    this.applySorting();
  }

  calculateFilteredTotals() {
    this.summary = {
      total_accounts: this.filteredAccounts.length,
      grand_debit_total: this.filteredAccounts.reduce((sum, acc) => sum + acc.display_debit, 0),
      grand_credit_total: this.filteredAccounts.reduce((sum, acc) => sum + acc.display_credit, 0),
      difference: 0
    };
    this.summary.difference = this.summary.grand_debit_total - this.summary.grand_credit_total;
  }

  // Format balance display with English numbers
  formatBalance(balance: number): string {
    if (!balance && balance !== 0) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(balance));
  }

  // Get account type display
  getAccountTypeDisplay(account: any): string {
    if (account.ac_id == 1) return 'عميل';
    if (account.ac_id == 2) return 'مورد';
    if (account.ac_id == 8) return 'مبيعات';
    if (account.ac_id == 9) return 'مشتريات';
    return account.sub_type;
  }

  // Get balance status display
  getBalanceStatusDisplay(account: any): string {
    if (account.balance_status === 'debit') return 'مدين';
    if (account.balance_status === 'credit') return 'دائن';
    return 'متوازن';
  }

  // Get absolute value (helper for template)
  getAbsoluteValue(value: number): number {
    if (!value && value !== 0) return 0;
    return Math.abs(value);
  }

  // Refresh data
  refresh() {
    this.loadBalanceSheet();
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

  // Apply sorting to filtered accounts
  applySorting() {
    if (this.currentSort) {
      this.sortedAccounts = this.sortingService.sortData(
        this.filteredAccounts, 
        this.currentSort.column, 
        this.currentSort.direction
      );
    } else {
      this.sortedAccounts = [...this.filteredAccounts];
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
    if (!this.filteredAccounts || this.filteredAccounts.length === 0) {
      await this.presentToast('لا توجد بيانات للتصدير', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: this.exportService.generateDynamicTitle('balance-sheet2'),
      subtitle: this.generateSubtitle(),
      fileName: `balance-sheet-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.filteredAccounts,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'balance-sheet2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToPDF(config);
  }

  async exportToExcel(): Promise<void> {
    if (!this.filteredAccounts || this.filteredAccounts.length === 0) {
      await this.presentToast('لا توجد بيانات للتصدير', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: this.exportService.generateDynamicTitle('balance-sheet2'),
      subtitle: this.generateSubtitle(),
      fileName: `balance-sheet-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.filteredAccounts,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'balance-sheet2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToExcel(config);
  }

  private generateSubtitle(): string {
    let subtitle = '';
    
    // Add filter type
    const filterLabels: { [key: string]: string } = {
      'all': 'جميع الحسابات',
      'customer': 'العملاء',
      'supplier': 'الموردون',
      'sales': 'حسابات المبيعات',
      'purchases': 'حسابات المشتريات',
      'other': 'الحسابات الأخرى'
    };
    
    if (this.segmentValue && this.segmentValue !== 'all') {
      subtitle = `فلتر: ${filterLabels[this.segmentValue]}`;
    }
    
    if (this.showOnlyWithBalance) {
      subtitle = subtitle ? `${subtitle} - الحسابات ذات الرصيد فقط` : 'الحسابات ذات الرصيد فقط';
    }
    
    return subtitle;
  }

  private getExportColumns(): ExportColumn[] {
    return [
      { key: 'sub_name', title: 'اسم الحساب', width: 25, type: 'text' },
      { key: 'cat_name', title: 'نوع الحساب', width: 15, type: 'text' },
      { key: 'opening_balance', title: 'الرصيد الافتتاحي', width: 15, type: 'currency' },
      { key: 'total_debit', title: 'إجمالي المدين', width: 15, type: 'currency' },
      { key: 'total_credit', title: 'إجمالي الدائن', width: 15, type: 'currency' },
      { key: 'current_balance', title: 'الرصيد الحالي', width: 15, type: 'currency' },
      { key: 'balance_type', title: 'نوع الرصيد', width: 10, type: 'text' }
    ];
  }

  // Get current currency symbol for table headers
  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }

}
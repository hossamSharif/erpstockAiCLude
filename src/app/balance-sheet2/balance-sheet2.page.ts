import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { AlertController, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common'; 
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-balance-sheet2',
  templateUrl: './balance-sheet2.page.html',
  styleUrls: ['./balance-sheet2.page.scss'], 
})
export class BalanceSheet2Page implements OnInit {
  
  // Core data
  accounts: Array<any> = [];
  filteredAccounts: Array<any> = [];
  
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
    this.checkPlatform();
    this.getAppInfo();
  }

  ngOnInit() {
    // Component initialization
  }

  ionViewDidEnter() {
    this.getAppInfo();
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
}
import { Component, OnInit } from '@angular/core';
import { DataVerificationService, VerificationResult, VerificationSummary } from '../services/data-verification.service';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { ServicesService } from '../stockService/services.service';

@Component({
  selector: 'app-data-verification',
  templateUrl: './data-verification.page.html',
  styleUrls: ['./data-verification.page.scss'],
})
export class DataVerificationPage implements OnInit {

  // Expose Math to template
  Math = Math;

  // Segment control (sales or purchase)
  selectedType: 'sales' | 'purchase' = 'sales';

  // Verification results
  verificationResults: VerificationResult[] = [];
  summary: VerificationSummary | null = null;

  // Loading state
  isVerifying: boolean = false;

  // Batch verification state
  currentBatch: number = 0;
  totalInvoicesCount: number = 0;
  totalErrorCount: number = 0;
  totalOkCount: number = 0;
  hasMoreInvoices: boolean = false;
  totalBatches: number = 0;

  // Store and year info from Ionic Storage
  store_info: { id: any, location: any, store_name: any, store_ref: any } | null = null;
  year: { id: any, year_name: any } | null = null;
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any } | null = null;

  // Filter for results table
  filterStatus: 'all' | 'OK' | 'ERROR' = 'all';

  constructor(
    private verificationService: DataVerificationService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: Storage,
    private router: Router,
    private api: ServicesService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    // Load store and year info from Ionic Storage
    this.getAppInfo();
  }

  /**
   * Load store and year information from Ionic Storage
   */
  getAppInfo() {
    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response;
        console.log('Store info loaded:', this.store_info);
      }
    });

    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response;
        console.log('Year loaded:', this.year);
      }
    });

    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response;
        console.log('User info loaded:', this.user_info);
      }
    });
  }

  /**
   * Check if store and year info are loaded
   */
  isDataLoaded(): boolean {
    return this.store_info !== null && this.year !== null;
  }

  /**
   * Handle segment change (Sales/Purchase)
   */
  onSegmentChange(event: any) {
    this.selectedType = event.detail.value;
    // Clear previous results when switching types
    this.clearResults();
  }

  /**
   * Clear results
   */
  clearResults() {
    this.verificationResults = [];
    this.summary = null;
    this.currentBatch = 0;
    this.totalInvoicesCount = 0;
    this.totalErrorCount = 0;
    this.totalOkCount = 0;
    this.hasMoreInvoices = false;
    this.totalBatches = 0;
  }

  /**
   * Verify first batch of invoices (20 invoices)
   */
  async verifyAllInvoices() {
    if (this.isVerifying) {
      return;
    }

    // Check if store and year info are loaded
    if (!this.isDataLoaded()) {
      this.showToast('Store and year information not loaded. Please try again.', 'danger');
      return;
    }

    // Reset batch state and clear previous results
    this.clearResults();

    const loading = await this.loadingCtrl.create({
      message: `Verifying ${this.selectedType === 'sales' ? 'Sales' : 'Purchase'} Invoices (Batch 1)...`,
      spinner: 'crescent'
    });
    await loading.present();

    this.isVerifying = true;

    this.verificationService.verifyInvoicesBatch(this.store_info!.id, this.year!.id, this.selectedType, 0, 20)
      .subscribe({
        next: (summary: VerificationSummary) => {
          // Store batch results
          this.verificationResults = summary.results;
          this.totalInvoicesCount = summary.totalInvoices;
          this.totalErrorCount = summary.errorCount;
          this.totalOkCount = summary.okCount;
          this.hasMoreInvoices = summary.hasMore || false;
          this.currentBatch = (summary.currentBatch || 0) + 1; // Next batch to load
          this.totalBatches = summary.totalBatches || 0;

          // Update summary for display
          this.summary = {
            totalInvoices: this.totalInvoicesCount,
            errorCount: this.totalErrorCount,
            okCount: this.totalOkCount,
            accuracy: this.verificationResults.length > 0
              ? (this.totalOkCount / this.verificationResults.length) * 100
              : 100,
            results: this.verificationResults
          };

          this.isVerifying = false;
          loading.dismiss();

          // Show toast with summary
          const checkedCount = this.verificationResults.length;
          const remainingCount = this.totalInvoicesCount - checkedCount;

          this.showToast(
            `Batch 1 Complete: ${checkedCount}/${this.totalInvoicesCount} invoices checked, ${summary.errorCount} errors found${this.hasMoreInvoices ? `. ${remainingCount} more to check.` : ''}`,
            summary.errorCount > 0 ? 'warning' : 'success'
          );
        },
        error: (error) => {
          console.error('Error during verification:', error);
          this.isVerifying = false;
          loading.dismiss();
          this.showToast('Error during verification. Please try again.', 'danger');
        }
      });
  }

  /**
   * Load and verify next batch of invoices
   */
  async loadMoreInvoices() {
    if (this.isVerifying || !this.hasMoreInvoices) {
      return;
    }

    // Check if store and year info are loaded
    if (!this.isDataLoaded()) {
      this.showToast('Store and year information not loaded. Please try again.', 'danger');
      return;
    }

    const batchNum = this.currentBatch;
    const loading = await this.loadingCtrl.create({
      message: `Verifying ${this.selectedType === 'sales' ? 'Sales' : 'Purchase'} Invoices (Batch ${batchNum + 1})...`,
      spinner: 'crescent'
    });
    await loading.present();

    this.isVerifying = true;

    this.verificationService.verifyInvoicesBatch(this.store_info!.id, this.year!.id, this.selectedType, batchNum, 20)
      .subscribe({
        next: (summary: VerificationSummary) => {
          // Append new results to existing results
          this.verificationResults = [...this.verificationResults, ...summary.results];

          // Update cumulative counts
          this.totalErrorCount += summary.errorCount;
          this.totalOkCount += summary.okCount;
          this.hasMoreInvoices = summary.hasMore || false;
          this.currentBatch = (summary.currentBatch || 0) + 1; // Next batch to load

          // Update summary for display
          this.summary = {
            totalInvoices: this.totalInvoicesCount,
            errorCount: this.totalErrorCount,
            okCount: this.totalOkCount,
            accuracy: this.verificationResults.length > 0
              ? (this.totalOkCount / this.verificationResults.length) * 100
              : 100,
            results: this.verificationResults
          };

          this.isVerifying = false;
          loading.dismiss();

          // Show toast with summary
          const checkedCount = this.verificationResults.length;
          const remainingCount = this.totalInvoicesCount - checkedCount;

          this.showToast(
            `Batch ${batchNum + 1} Complete: ${checkedCount}/${this.totalInvoicesCount} invoices checked${this.hasMoreInvoices ? `. ${remainingCount} more to check.` : ''}`,
            'success'
          );
        },
        error: (error) => {
          console.error('Error during verification:', error);
          this.isVerifying = false;
          loading.dismiss();
          this.showToast('Error during verification. Please try again.', 'danger');
        }
      });
  }

  /**
   * Get filtered results based on status filter
   */
  getFilteredResults(): VerificationResult[] {
    if (this.filterStatus === 'all') {
      return this.verificationResults;
    }
    return this.verificationResults.filter(r => r.status === this.filterStatus);
  }

  /**
   * Show toast message
   */
  async showToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }

  /**
   * Format number to 2 decimal places
   */
  formatNumber(num: number): string {
    return num.toFixed(2);
  }

  /**
   * Get status color
   */
  getStatusColor(status: string): string {
    return status === 'OK' ? 'success' : 'danger';
  }

  /**
   * Get accuracy color based on percentage
   */
  getAccuracyColor(accuracy: number): string {
    if (accuracy >= 95) return 'success';
    if (accuracy >= 80) return 'warning';
    return 'danger';
  }

  /**
   * Navigate to edit invoice page
   */
  async navigateToEditInvoice(result: VerificationResult) {
    // Check if required data is loaded
    if (!this.isDataLoaded()) {
      this.showToast('Store and year information not loaded. Please try again.', 'danger');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Loading invoice details... | جاري تحميل تفاصيل الفاتورة...',
      spinner: 'crescent'
    });
    await loading.present();

    // Determine invoice type and fetch details
    if (this.selectedType === 'sales') {
      this.navigateToEditSales(result, loading);
    } else {
      this.navigateToEditPurchase(result, loading);
    }
  }

  /**
   * Navigate to edit sales invoice
   */
  private navigateToEditSales(result: VerificationResult, loading: HTMLIonLoadingElement) {
    const pay = {
      pay_ref: result.invoiceRef,
      pay_date: result.date,
      sub_name: result.customerName,
      tot_pr: result.storedTotal,
      ...result.invoiceData
    };

    this.api.getPayInvoDetail(this.store_info!.id, result.invoiceRef, this.year!.id).subscribe({
      next: (data) => {
        let res = data;
        let navigationExtras: NavigationExtras = {
          queryParams: {
            payInvo: JSON.stringify(pay),
            sub_name: JSON.stringify(result.customerName),
            user_info: JSON.stringify(this.user_info),
            store_info: JSON.stringify(this.store_info),
            itemList: JSON.stringify(res['data'])
          }
        };

        loading.dismiss();
        this.router.navigate(['folder/edit-sales'], navigationExtras);
      },
      error: (err) => {
        loading.dismiss();
        console.error('Error loading sales invoice details:', err);
        this.showToast('Failed to load invoice details. Please try again. | فشل تحميل تفاصيل الفاتورة.', 'danger');
      }
    });
  }

  /**
   * Navigate to edit purchase invoice
   */
  private navigateToEditPurchase(result: VerificationResult, loading: HTMLIonLoadingElement) {
    const perch = {
      pay_ref: result.invoiceRef,
      pay_date: result.date,
      sub_name: result.customerName,
      tot_pr: result.storedTotal,
      ...result.invoiceData
    };

    this.api.getPerchInvoDetail(this.store_info!.id, result.invoiceRef, this.year!.id).subscribe({
      next: (data) => {
        let res = data;
        let navigationExtras: NavigationExtras = {
          queryParams: {
            perchInvo: JSON.stringify(perch),
            sub_name: JSON.stringify(result.customerName),
            user_info: JSON.stringify(this.user_info),
            store_info: JSON.stringify(this.store_info),
            itemList: JSON.stringify(res['data'])
          }
        };

        loading.dismiss();
        this.router.navigate(['folder/edit-perch'], navigationExtras);
      },
      error: (err) => {
        loading.dismiss();
        console.error('Error loading purchase invoice details:', err);
        this.showToast('Failed to load invoice details. Please try again. | فشل تحميل تفاصيل الفاتورة.', 'danger');
      }
    });
  }
}

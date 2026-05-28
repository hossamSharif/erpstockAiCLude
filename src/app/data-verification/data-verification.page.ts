import { Component, OnInit } from '@angular/core';
import { DataVerificationService, VerificationResult, VerificationSummary, VerificationProgress } from '../services/data-verification.service';
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
  isAutoVerifying: boolean = false;

  // Batch verification state
  currentBatch: number = 0;
  totalInvoicesCount: number = 0;
  totalErrorCount: number = 0;
  totalOkCount: number = 0;
  hasMoreInvoices: boolean = false;
  totalBatches: number = 0;

  // Progress tracking
  verificationProgress: VerificationProgress | null = null;
  processedCount: number = 0;

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
    this.verificationProgress = null;
    this.processedCount = 0;
    this.isAutoVerifying = false;
    this.filterStatus = 'all';
  }

  /**
   * Verify all invoices automatically in sequential batches
   */
  verifyAllInvoices() {
    if (this.isVerifying) {
      return;
    }

    if (!this.isDataLoaded()) {
      this.showToast('Store and year information not loaded. Please try again.', 'danger');
      return;
    }

    this.clearResults();
    this.isVerifying = true;
    this.isAutoVerifying = true;

    this.verificationService.verifyAllInvoicesSequential(this.store_info!.id, this.year!.id, this.selectedType, 20)
      .subscribe({
        next: (progress: VerificationProgress) => {
          this.verificationProgress = progress;
          this.verificationResults = progress.results;
          this.processedCount = progress.processedCount;
          this.totalInvoicesCount = progress.totalInvoices;
          this.totalErrorCount = progress.errorCount;
          this.totalOkCount = progress.okCount;
          this.totalBatches = progress.totalBatches;
          this.currentBatch = progress.currentBatchIndex + 1;

          // Update summary for display
          this.summary = {
            totalInvoices: progress.totalInvoices,
            errorCount: progress.errorCount,
            okCount: progress.okCount,
            accuracy: progress.processedCount > 0
              ? (progress.okCount / progress.processedCount) * 100
              : 100,
            results: progress.results
          };

          if (progress.isComplete) {
            this.isVerifying = false;
            this.isAutoVerifying = false;

            // Auto-filter to errors if any exist
            if (progress.errorCount > 0) {
              this.filterStatus = 'ERROR';
            }

            this.showToast(
              `Verification Complete: ${progress.processedCount} invoices checked, ${progress.errorCount} errors found`,
              progress.errorCount > 0 ? 'warning' : 'success'
            );
          }
        },
        error: (error) => {
          console.error('Error during verification:', error);
          this.isVerifying = false;
          this.isAutoVerifying = false;
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

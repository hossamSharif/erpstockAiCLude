import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { CurrencyService } from '../../services/currency.service';
import { ServicesService } from '../../stockService/services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-rate-modal',
  templateUrl: './currency-rate-modal.component.html',
  styleUrls: ['./currency-rate-modal.component.scss'],
  standalone: false
})
export class CurrencyRateModalComponent implements OnInit, OnDestroy {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() rateData: any = null;
  @Input() store_info: any = null;
  @Input() year: any = null;
  
  rateForm: FormGroup;
  supportedCurrencies: any[] = [];
  isLoading = false;
  private subscription: Subscription = new Subscription();
  
  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private currencyService: CurrencyService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private servicesService: ServicesService
  ) {
    this.initForm();
  }
  
  ngOnInit() {
    this.loadSupportedCurrencies();
    
    if (this.mode === 'edit' && this.rateData) {
      this.populateForm();
    }

    // Set default store_id and year_id if available
    if (this.store_info && this.year) {
      this.rateForm.patchValue({
        store_id: this.store_info.id,
        year_id: this.year.id
      });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    this.rateForm = this.fb.group({
      target_currency: ['', Validators.required],
      exchange_rate: [0, [Validators.required, Validators.min(0.000001)]],
      rate_date: [new Date().toISOString().split('T')[0], Validators.required],
      store_id: [null, Validators.required],
      year_id: [null, Validators.required],
      created_by: [1], // Default user ID - should be dynamic in real app
      updated_by: [1]
    });
  }

  private populateForm() {
    this.rateForm.patchValue({
      target_currency: this.rateData.target_currency,
      exchange_rate: this.rateData.exchange_rate,
      rate_date: this.rateData.rate_date,
      store_id: this.rateData.store_id,
      year_id: this.rateData.year_id
    });
  }
  
  private loadSupportedCurrencies() {
    this.subscription.add(
      this.currencyService.getActiveCurrencies().subscribe(response => {
        if (response && response.data) {
          // Exclude SDG as it's the base currency
          this.supportedCurrencies = response.data.filter(c => c.currency_code !== 'SDG');
        }
      }, error => {
        console.error('Error loading currencies:', error);
        this.presentToast('خطأ في تحميل العملات', 'danger');
        // Fallback currencies (excluding SDG)
        this.supportedCurrencies = [
          { currency_code: 'USD', currency_name_ar: 'دولار أمريكي', currency_symbol: '$' },
          { currency_code: 'AED', currency_name_ar: 'درهم إماراتي', currency_symbol: 'د.إ' },
          { currency_code: 'SAR', currency_name_ar: 'ريال سعودي', currency_symbol: 'ر.س' }
        ];
      })
    );
  }
  
  async save() {
    if (!this.rateForm.valid) {
      this.presentToast('يرجى ملء جميع الحقول المطلوبة', 'warning');
      return;
    }

    const loading = await this.loadingController.create({
      message: this.mode === 'create' ? 'إضافة سعر الصرف...' : 'تحديث سعر الصرف...'
    });
    await loading.present();

    try {
      const formData = { ...this.rateForm.value };
      
      if (this.mode === 'create') {
        this.subscription.add(
          this.currencyService.createCurrencyRate(formData).subscribe(
            async response => {
              await loading.dismiss();
              if (response && response.status === 'success') {
                await this.presentToast('تم حفظ سعر الصرف بنجاح', 'success');
                this.modalController.dismiss({ saved: true, data: response });
              } else {
                await this.presentToast('حدث خطأ أثناء حفظ سعر الصرف', 'danger');
              }
            },
            async error => {
              await loading.dismiss();
              console.error('Error creating rate:', error);
              await this.presentToast('حدث خطأ أثناء حفظ سعر الصرف', 'danger');
            }
          )
        );
      } else {
        this.subscription.add(
          this.currencyService.updateCurrencyRate(this.rateData.id, formData).subscribe(
            async response => {
              await loading.dismiss();
              if (response && response.status === 'success') {
                await this.presentToast('تم تحديث سعر الصرف بنجاح', 'success');
                this.modalController.dismiss({ saved: true, data: response });
              } else {
                await this.presentToast('حدث خطأ أثناء تحديث سعر الصرف', 'danger');
              }
            },
            async error => {
              await loading.dismiss();
              console.error('Error updating rate:', error);
              await this.presentToast('حدث خطأ أثناء تحديث سعر الصرف', 'danger');
            }
          )
        );
      }
    } catch (error) {
      await loading.dismiss();
      console.error('Error in save method:', error);
      await this.presentToast('حدث خطأ غير متوقع', 'danger');
    }
  }
  
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'top',
      cssClass: 'rtl-toast'
    });
    await toast.present();
  }
  
  dismiss() {
    this.modalController.dismiss();
  }

  getModalTitle(): string {
    return this.mode === 'create' ? 'إضافة سعر صرف' : 'تعديل سعر صرف';
  }

  getSaveButtonText(): string {
    return this.mode === 'create' ? 'إضافة' : 'تحديث';
  }

  getCurrencyDisplayText(currency: any): string {
    return `${currency.currency_name_ar} (${currency.currency_code})`;
  }

  // Validation helpers
  isFieldInvalid(fieldName: string): boolean {
    const field = this.rateForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getFieldErrorMessage(fieldName: string): string {
    const field = this.rateForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['required']) {
        return 'هذا الحقل مطلوب';
      }
      if (field.errors['min']) {
        return 'القيمة يجب أن تكون أكبر من صفر';
      }
    }
    return '';
  }
}
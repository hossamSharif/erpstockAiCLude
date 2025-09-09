import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { CurrencyService } from '../../services/currency.service';
import { ServicesService } from '../../stockService/services.service';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-currency-rate-modal',
  templateUrl: './currency-rate-modal.component.html',
  styleUrls: ['./currency-rate-modal.component.scss']
})
export class CurrencyRateModalComponent implements OnInit, OnDestroy {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() rateData: any = null;
  @Input() store_info: any = null;
  @Input() year: any = null;
  
  rateForm: FormGroup;
  supportedCurrencies: any[] = [];
  isLoading = false;
  maxDate: string = new Date().toISOString().split('T')[0];
  private subscription: Subscription = new Subscription();
  
  // Local storage data
  user_info: any = null;
  localStoreInfo: any = null;
  localYear: any = null;
  
  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private currencyService: CurrencyService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private servicesService: ServicesService,
    private storage: Storage,
    private datePipe: DatePipe
  ) {
    this.initForm();
  }
  
  ngOnInit() {
    
    // Load app info from localStorage
    this.getAppInfo();
    
    this.loadSupportedCurrencies();
    
    if (this.mode === 'edit' && this.rateData) {
      console.log('Populating form with rate data:', this.rateData);
      this.populateForm();
    }

    // Set default store_id and year_id - prioritize local storage over inputs
    const storeId = this.localStoreInfo?.id || this.store_info?.id;
    const yearId = this.localYear?.id || this.year?.id;
    
    if (storeId && yearId) {
      this.rateForm.patchValue({
        store_id: storeId,
        year_id: yearId
      });
    }
    
    console.log('Form after initialization:', this.rateForm.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    this.rateForm = this.fb.group({
      base_currency: ['SDG'], // Default base currency
      target_currency: ['', Validators.required],
      exchange_rate: [0, [Validators.required, Validators.min(0.000001), Validators.max(999999999)]],
      rate_date: [new Date().toISOString().split('T')[0], Validators.required],
      store_id: [null, Validators.required],
      year_id: [null, Validators.required],
      created_by: [1], // Default user ID - should be dynamic in real app
      updated_by: [1]
    });
  }

  private populateForm() {
    const formData = {
      base_currency: this.rateData.base_currency || 'SDG',
      target_currency: this.rateData.target_currency,
      exchange_rate: this.rateData.exchange_rate,
      rate_date: this.rateData.rate_date,
      store_id: this.rateData.store_id,
      year_id: this.rateData.year_id
    };
    
    this.rateForm.patchValue(formData);
  }
  
  private loadSupportedCurrencies() {
    this.subscription.add(
      this.currencyService.getSupportedCurrencies().subscribe(response => {
        if (response && response.data) {
          // Filter for active currencies and exclude SDG as it's the base currency
          this.supportedCurrencies = response.data.filter(c => 
            c.currency_code !== 'SDG' && c.is_active === true
          );
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
      
      // Decide API call based on whether we have a valid database ID
      const hasValidId = this.rateData?.id && this.rateData.id !== null;
      
      if (this.mode === 'create' || !hasValidId) {
        // Create new rate (either truly new or replacing sample data)
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
        // Update existing rate with valid database ID
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

  async delete() {
    if (!this.rateData?.id) {
      await this.presentToast('لا يمكن حذف سعر صرف غير محفوظ', 'warning');
      return;
    }

    const confirmAlert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: 'هل أنت متأكد من حذف سعر الصرف هذا؟ لا يمكن التراجع عن هذا الإجراء.',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'حذف',
          cssClass: 'danger-button',
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'جاري حذف سعر الصرف...'
            });
            await loading.present();

            try {
              this.subscription.add(
                this.currencyService.deleteCurrencyRate(this.rateData.id).subscribe(
                  async response => {
                    await loading.dismiss();
                    if (response && response.status === 'success') {
                      await this.presentToast('تم حذف سعر الصرف بنجاح', 'success');
                      this.modalController.dismiss({ deleted: true, data: response });
                    } else {
                      await this.presentToast('حدث خطأ أثناء حذف سعر الصرف', 'danger');
                    }
                  },
                  async error => {
                    await loading.dismiss();
                    console.error('Error deleting rate:', error);
                    await this.presentToast('حدث خطأ أثناء حذف سعر الصرف', 'danger');
                  }
                )
              );
            } catch (error) {
              await loading.dismiss();
              console.error('Error in delete method:', error);
              await this.presentToast('حدث خطأ غير متوقع', 'danger');
            }
          }
        }
      ]
    });

    await confirmAlert.present();
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
  
  onCurrencySegmentChange(event: any) {
    const selectedCurrency = event.detail.value;
    this.rateForm.patchValue({ target_currency: selectedCurrency });
  }
  
  private getAppInfo() {
    // Get year info from localStorage
    this.storage.get('year').then((response) => {
      if (response) {
        this.localYear = response;
        // Update form if not already set
        if (!this.year && !this.rateForm.get('year_id')?.value) {
          this.rateForm.patchValue({ year_id: response.id });
        }
      }
    });
    
    // Get store info from localStorage
    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.localStoreInfo = response;
        // Update form if not already set
        if (!this.store_info && !this.rateForm.get('store_id')?.value) {
          this.rateForm.patchValue({ store_id: response.id });
        }
      }
    });
    
    // Get user info from localStorage
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response;
        // Update created_by and updated_by with actual user ID
        this.rateForm.patchValue({
          created_by: response.id,
          updated_by: response.id
        });
      }
    });
  }
  
  resetForm() {
    this.rateForm.reset();
    // Re-initialize with current date and app info
    this.rateForm.patchValue({
      base_currency: 'SDG',
      rate_date: new Date().toISOString().split('T')[0],
      store_id: this.localStoreInfo?.id || this.store_info?.id,
      year_id: this.localYear?.id || this.year?.id,
      created_by: this.user_info?.id || 1,
      updated_by: this.user_info?.id || 1
    });
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
      if (field.errors['max']) {
        return 'القيمة كبيرة جداً - الحد الأقصى 999,999,999';
      }
    }
    return '';
  }
}
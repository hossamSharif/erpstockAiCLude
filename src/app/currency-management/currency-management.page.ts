import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServicesService } from '../stockService/services.service';
import { CurrencyService } from '../services/currency.service';
import { CurrencyRateModalComponent } from '../components/currency-rate-modal/currency-rate-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-management',
  templateUrl: './currency-management.page.html',
  styleUrls: ['./currency-management.page.scss']
})
export class CurrencyManagementPage implements OnInit, OnDestroy {
  currencies: Array<any> = [];
  rates: Array<any> = [];
  store_info: { id: any, location: any, store_name: any, store_ref: any };
  user_info: { id: any, user_name: any, store_id: any, full_name: any, password: any };
  year: { id: any, yearDesc: any, yearStart: any, yearEnd: any };
  currentCurrency = 'SDG';
  isLoading = false;
  private subscription = new Subscription();

  constructor(
    private route: Router,
    private alertController: AlertController,
    private storage: Storage,
    private loadingController: LoadingController,
    private api: ServicesService,
    private toast: ToastController,
    private currencyService: CurrencyService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    await this.getAppInfo();
    await this.initializeCurrency();
    await this.loadCurrencies();
    this.loadRates();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async initializeCurrency() {
    try {
      await this.currencyService.initializeCurrency();
      this.subscription.add(
        this.currencyService.getCurrentCurrency().subscribe(currency => {
          this.currentCurrency = currency;
        })
      );
    } catch (error) {
      console.error('Error initializing currency:', error);
    }
  }

  async getAppInfo() {
    this.user_info = await this.storage.get('USER_INFO');
    this.year = await this.storage.get('year');
    this.store_info = await this.storage.get('STORE_INFO');
  }

  async loadCurrencies() {
    try {
      this.isLoading = true;
      await this.currencyService.loadSupportedCurrencies();
      this.subscription.add(
        this.currencyService.getSupportedCurrenciesObservable().subscribe(currencies => {
          this.currencies = currencies;
          
          // Add fallback currencies if none loaded
          if (!this.currencies || this.currencies.length === 0) {
            this.currencies = [
              {
                id: 1,
                currency_code: 'USD',
                currency_name_ar: 'دولار أمريكي',
                currency_name_en: 'US Dollar',
                currency_symbol: '$',
                is_active: true
              },
              {
                id: 2,
                currency_code: 'AED',
                currency_name_ar: 'درهم إماراتي',
                currency_name_en: 'UAE Dirham',
                currency_symbol: 'د.إ',
                is_active: true
              },
              {
                id: 3,
                currency_code: 'SAR',
                currency_name_ar: 'ريال سعودي',
                currency_name_en: 'Saudi Riyal',
                currency_symbol: 'ر.س',
                is_active: true
              },
              {
                id: 4,
                currency_code: 'SDG',
                currency_name_ar: 'جنيه سوداني',
                currency_name_en: 'Sudanese Pound',
                currency_symbol: 'ج.س',
                is_active: true
              }
            ];
          }
        })
      );
    } catch (error) {
      this.presentToast('خطأ في تحميل العملات', 'danger');
    } finally {
      this.isLoading = false;
    }
  }

  async loadRates() {
    if (!this.store_info || !this.year) {
      return;
    }
    
    try {
      await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
      this.subscription.add(
        this.currencyService.getCurrentExchangeRates().subscribe(rates => {
          if (Array.isArray(rates)) {
            // If rates is an array of rate objects - preserve all original fields
            this.rates = rates.map(rate => ({
              ...rate, // Preserve all original fields including id
              currency: rate.target_currency || rate.currency,
              rate: rate.exchange_rate || rate.rate,
              currency_info: this.currencies.find(c => c.currency_code === (rate.target_currency || rate.currency))
            }));
          } else if (rates && typeof rates === 'object') {
            // If rates is an object with currency keys
            this.rates = Object.entries(rates).map(([currency, rate]) => ({
              currency,
              rate,
              currency_info: this.currencies.find(c => c.currency_code === currency)
            }));
          } else {
            this.rates = [];
          }
          
         
        })
      );
    } catch (error) {
      this.presentToast('خطأ في تحميل أسعار الصرف', 'danger');
    }
  }

  async openRateModal(rateOrCurrency?: any) {
    let mode: 'create' | 'edit' = 'create';
    let rateData = null;
    
    
    // Check if this is an edit operation (full rate object) or create (just currency string)
    if (rateOrCurrency && typeof rateOrCurrency === 'object' && rateOrCurrency.currency) {
      // For rate objects (even without database IDs), treat as edit mode since we're updating existing rates
      mode = 'edit';
      rateData = {
        id: rateOrCurrency.id || null, // ID can be null for sample data
        base_currency: rateOrCurrency.base_currency || 'SDG',
        target_currency: rateOrCurrency.target_currency || rateOrCurrency.currency,
        exchange_rate: rateOrCurrency.exchange_rate || this.getRateValue(rateOrCurrency.rate),
        rate_date: rateOrCurrency.rate_date || new Date().toISOString().split('T')[0],
        store_id: rateOrCurrency.store_id || this.store_info?.id,
        year_id: rateOrCurrency.year_id || this.year?.id
      };
    } else if (rateOrCurrency && typeof rateOrCurrency === 'string') {
      // For create mode with pre-selected currency
      rateData = {
        base_currency: 'SDG',
        target_currency: rateOrCurrency,
        exchange_rate: 0,
        rate_date: new Date().toISOString().split('T')[0],
        store_id: this.store_info?.id,
        year_id: this.year?.id
      };
    } else {
      // For create mode without pre-selected currency
      rateData = {
        base_currency: 'SDG',
        target_currency: '',
        exchange_rate: 0,
        rate_date: new Date().toISOString().split('T')[0],
        store_id: this.store_info?.id,
        year_id: this.year?.id
      };
    }


    const modal = await this.modalController.create({
      component: CurrencyRateModalComponent,
      componentProps: {
        mode: mode,
        rateData: rateData,
        store_info: this.store_info,
        year: this.year
      }
    });

    modal.onDidDismiss().then(async (result) => {
      if (result.data?.saved) {
        await this.refreshRates();
        this.presentToast('تم حفظ سعر الصرف بنجاح', 'success');
      } else if (result.data?.deleted) {
        await this.refreshRates();
        this.presentToast('تم حذف سعر الصرف بنجاح', 'success');
      }
    });

    return await modal.present();
  }

  async deleteRate(rate: any) {
    if (!rate?.id) {
      this.presentToast('لا يمكن حذف سعر صرف غير محفوظ', 'warning');
      return;
    }

    const alert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: `هل أنت متأكد من حذف سعر صرف ${rate.currency}؟ لا يمكن التراجع عن هذا الإجراء.`,
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
              this.currencyService.deleteCurrencyRate(rate.id).subscribe(
                async response => {
                  await loading.dismiss();
                  if (response && response.status === 'success') {
                    // Refresh rates from server
                    await this.refreshRates();
                    this.presentToast('تم حذف سعر الصرف بنجاح', 'success');
                  } else {
                    this.presentToast('حدث خطأ أثناء حذف سعر الصرف', 'danger');
                  }
                },
                async error => {
                  await loading.dismiss();
                  console.error('Error deleting rate:', error);
                  this.presentToast('حدث خطأ أثناء حذف سعر الصرف', 'danger');
                }
              );
            } catch (error) {
              await loading.dismiss();
              console.error('Error in delete method:', error);
              this.presentToast('حدث خطأ غير متوقع', 'danger');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async toggleCurrencyStatus(currency: any) {
    const alert = await this.alertController.create({
      header: 'تأكيد',
      message: `هل تريد ${currency.is_active ? 'إلغاء تفعيل' : 'تفعيل'} عملة ${currency.currency_name_ar}؟`,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'تأكيد',
          handler: async () => {
            try {
              const loading = await this.loadingController.create({
                message: 'جاري التحديث...'
              });
              await loading.present();

              const updatedCurrency = {
                ...currency,
                is_active: !currency.is_active
              };

              // Call API to update currency status
              this.currencyService.updateSupportedCurrency(updatedCurrency.id, updatedCurrency).subscribe(
                async (response) => {
                  await loading.dismiss();
                  console.log('Currency update response:', response);
                  if (response && response.status === 'success') {
                    this.loadCurrencies();
                    this.presentToast('تم تحديث حالة العملة بنجاح', 'success');
                  } else {
                    this.presentToast('خطأ في تحديث حالة العملة', 'danger');
                  }
                },
                async (error) => {
                  await loading.dismiss();
                  console.error('Currency update error:', error);
                  this.presentToast('خطأ في تحديث حالة العملة', 'danger');
                }
              );
            } catch (error) {
              this.presentToast('خطأ في تحديث حالة العملة', 'danger');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async setCurrency(currency: string) {
    this.currencyService.setCurrency(currency);
    this.presentToast(`تم تغيير العملة إلى ${this.getCurrencyName(currency)}`, 'success');
  }

  getCurrencyName(code: string): string {
    const currency = this.currencies.find(c => c.currency_code === code);
    return currency ? currency.currency_name_ar : code;
  }

  getExchangeRate(currency: string): number {
    return this.currencyService.getExchangeRate(currency);
  }

  formatCurrency(amount: number, currency: string): string {
    const formatted = this.currencyService.formatCurrency(amount, currency);
    return this.convertToEnglishNumbers(formatted);
  }

  getRateValue(rate: any): number {
    if (typeof rate === 'number') {
      return rate;
    } else if (typeof rate === 'string') {
      return parseFloat(rate) || 0;
    } else if (typeof rate === 'object' && rate !== null) {
      // If rate is an object, try to extract the rate value
      return parseFloat(rate.exchange_rate || rate.rate || rate.value || '0') || 0;
    }
    return 0;
  }

  // Convert Arabic numbers to English numbers
  convertToEnglishNumbers(text: string): string {
    if (!text) return text;
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    let result = text.toString();
    for (let i = 0; i < arabicNumbers.length; i++) {
      result = result.replace(new RegExp(arabicNumbers[i], 'g'), englishNumbers[i]);
    }
    return result;
  }

  // Format number with English digits only
  formatNumberEnglish(value: number, decimalPlaces: number = 6): string {
    if (value === null || value === undefined) return '0';
    const formattedNumber = value.toLocaleString('en-US', {
      minimumFractionDigits: decimalPlaces === 0 ? 0 : 2,
      maximumFractionDigits: decimalPlaces
    });
    return this.convertToEnglishNumbers(formattedNumber);
  }

  async presentToast(msg: string, color?: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: color,
      cssClass: 'cust_Toast',
      mode: 'ios',
      position: 'top'
    });
    toast.present();
  }

  async refreshRates() {
    if (!this.store_info || !this.year) return;
    
    try {
      this.isLoading = true;
      await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
      this.loadRates();
      this.presentToast('تم تحديث أسعار الصرف', 'success');
    } catch (error) {
      this.presentToast('خطأ في تحديث أسعار الصرف', 'danger');
    } finally {
      this.isLoading = false;
    }
  }

  goBack() {
    this.route.navigate(['/analytics-dashboard']);
  }
}
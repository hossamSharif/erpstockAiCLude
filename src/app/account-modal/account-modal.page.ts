import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingController, ToastController, NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../stockService/services.service';
import { Storage } from '@ionic/storage';
import { AccountCommunicationService } from '../services/account-communication.service';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.page.html',
  styleUrls: ['./account-modal.page.scss'],
})
export class AccountModalPage implements OnInit {
  mode: 'create' | 'edit' = 'create';
  account: any;
  account_category: Array<any> = [];
  main_account: Array<any> = [];

  // Form data
  payInvo: {
    id: any;
    ac_id: any;
    sub_name: any;
    sub_type: any;
    sub_code: any;
    sub_balance: any;
    store_id: any;
    cat_id: any;
    cat_name: any;
    ac_behavior: any;
    phone: any;
    address: any;
  };

  selectedMainAccount: {
    ac_id: any;
    actype_id: any;
    ac_name: any;
    ac_code: any;
    eng_name: any;
    ac_type: any;
  };

  selectedCategory: {
    id: any;
    cat_name: any;
  };

  // App info
  store_info: { id: any; location: any; store_name: any; store_ref: any };
  user_info: { id: any; user_name: any; store_id: any; full_name: any; password: any };
  year: { id: any; yearDesc: any; yearStart: any; yearEnd: any };

  // UI state
  loading: boolean = false;
  saving: boolean = false;

  constructor(
    private navController: NavController,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private api: ServicesService,
    private storage: Storage,
    private accountCommunicationService: AccountCommunicationService,
    private cdr: ChangeDetectorRef
  ) {
    this.initializeData();
  }

  ngOnInit() {
    console.log('Account modal ngOnInit');
    this.getAppInfo();
    this.initializeFromRoute();
  }

  initializeData() {
    this.payInvo = {
      id: '',
      ac_id: '',
      sub_name: '',
      sub_type: '',
      sub_code: '',
      sub_balance: '',
      store_id: '',
      cat_id: '',
      cat_name: '',
      ac_behavior: '',
      phone: '',
      address: ''
    };

    this.selectedMainAccount = {
      ac_id: '',
      actype_id: '',
      ac_name: '',
      ac_code: '',
      eng_name: '',
      ac_type: ''
    };

    this.selectedCategory = {
      id: '',
      cat_name: ''
    };
  }

  initializeFromRoute() {
    // Get route parameters
    this.route.queryParams.subscribe(params => {
      if (params['mode']) {
        this.mode = params['mode'];
      }
      
      if (params['account']) {
        this.account = JSON.parse(params['account']);
        this.initializeForm();
      }
    });
  }

  initializeForm() {
    if (this.mode === 'edit' && this.account) {
      // Fill form with existing account data
      this.payInvo = {
        id: this.account.id,
        ac_id: this.account.ac_id,
        sub_name: this.account.sub_name,
        sub_type: this.account.sub_type,
        sub_code: this.account.sub_code,
        sub_balance: this.account.sub_balance,
        store_id: this.account.store_id,
        cat_id: this.account.cat_id,
        cat_name: this.account.cat_name,
        ac_behavior: this.account.ac_behavior,
        phone: this.account.phone,
        address: this.account.address
      };

      // Category will be set after data is loaded in setCategoryForEdit()

      // Set main account after data is loaded
      this.setMainAccountForEdit();
    }
  }

  setMainAccountForEdit() {
    if (this.main_account && this.main_account.length > 0 && this.account) {
      const mainAcc = this.main_account.find(acc => acc.ac_id == this.account.ac_id);
      if (mainAcc) {
        this.selectedMainAccount = {
          ac_id: mainAcc.ac_id,
          actype_id: mainAcc.actype_id,
          ac_name: mainAcc.ac_name,
          ac_code: mainAcc.ac_code,
          eng_name: mainAcc.eng_name,
          ac_type: mainAcc.ac_type
        };
      }
    }
  }

  setCategoryForEdit() {
    if (this.account_category && this.account_category.length > 0 && this.account) {
      const category = this.account_category.find(cat => cat.id == this.account.cat_id);
      if (category) {
        this.selectedCategory = {
          id: category.id,
          cat_name: category.cat_name
        };
        // Also update the payInvo category fields to ensure consistency
        this.payInvo.cat_id = category.id;
        this.payInvo.cat_name = category.cat_name;
        
        // Force change detection to update UI
        this.cdr.detectChanges();
        
        console.log('Category set for edit mode:', this.selectedCategory);
      } else {
        console.log('Category not found for id:', this.account.cat_id);
      }
    }
  }

  getAppInfo() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.user_info = response;
        console.log('User info loaded:', this.user_info);
      }
    });

    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response;
        console.log('Year loaded:', this.year);
      }
    });

    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response;
        this.payInvo.store_id = this.store_info.id;
        console.log('Store info loaded:', this.store_info);
        
        // Load supporting data after store info is available
        this.loadSupportingData();
      }
    });
  }

  loadSupportingData() {
    console.log('Loading supporting data...');
    // Load main accounts first
    this.getMainAccount();
    
    // Load account categories
    this.getAccountCategory();
  }

  getMainAccount() {
    this.api.getMainAccounts().subscribe(data => {
      let res = data;
      this.main_account = res['data'] || [];
      console.log('Main accounts loaded:', this.main_account);
      
      // Set main account for edit mode after data is loaded
      if (this.mode === 'edit' && this.account) {
        this.setMainAccountForEdit();
      }
    }, (err) => {
      console.log('Error loading main accounts:', err);
    });
  }

  getAccountCategory() {
    if (this.store_info && this.store_info.id) {
      console.log('Loading categories for store:', this.store_info.id);
      this.api.getAccountCategory(this.store_info.id).subscribe(data => {
        let res = data;
        this.account_category = res['data'] || [];
        console.log('Account categories loaded:', this.account_category);
        
        // Set category for edit mode after data is loaded
        if (this.mode === 'edit' && this.account) {
          // Use setTimeout to ensure DOM is updated before setting category
          setTimeout(() => {
            this.setCategoryForEdit();
          }, 100);
        }
      }, (err) => {
        console.log('Error loading categories:', err);
      });
    } else {
      console.log('Store info not available for loading categories');
    }
  }

  pickMainAccount(event: any) {
    const selectedName = event.detail.value;
    console.log('Main account selected:', selectedName);
    const mainAcc = this.main_account.find(x => x.ac_name === selectedName);
    
    if (mainAcc) {
      this.selectedMainAccount = {
        ac_id: mainAcc.ac_id,
        ac_name: mainAcc.ac_name,
        actype_id: mainAcc.actype_id,
        ac_code: mainAcc.ac_code,
        eng_name: mainAcc.eng_name,
        ac_type: mainAcc.ac_type
      };
      
      this.payInvo.ac_id = this.selectedMainAccount.ac_id;
      this.payInvo.sub_type = this.selectedMainAccount.ac_type;
      this.payInvo.ac_behavior = this.selectedMainAccount.ac_type;
      
      console.log('Selected main account:', mainAcc);
      console.log('Auto-selected account type:', this.selectedMainAccount.ac_type);
    } else {
      this.presentToast('خطأ في اسم الحساب', 'danger');
    }
  }

  pickAccountCategory(event: any) {
    const selectedName = event.detail.value;
    console.log('Category selected:', selectedName);
    const category = this.account_category.find(x => x.cat_name === selectedName);
    
    if (category) {
      this.selectedCategory = {
        id: category.id,
        cat_name: category.cat_name
      };
      
      this.payInvo.cat_id = this.selectedCategory.id;
      this.payInvo.cat_name = this.selectedCategory.cat_name;
      
      console.log('Selected category:', category);
      console.log('Show phone/address fields:', this.shouldShowPhoneAndAddress());
    } else {
      this.presentToast('خطأ في اسم التصنيف', 'danger');
    }
  }

  // Check if phone and address fields should be shown (categories 1 and 2: عملاء, موردين)
  shouldShowPhoneAndAddress(): boolean {
    if (this.selectedCategory && this.selectedCategory.id) {
      const categoryId = parseInt(this.selectedCategory.id);
      return categoryId === 1 || categoryId === 2;
    }
    return false;
  }

  async save() {
    if (!this.validate()) {
      return;
    }

    this.saving = true;
    const loading = await this.loadingController.create({
      message: 'جاري حفظ البيانات...',
      spinner: 'crescent'
    });
    await loading.present();

    try {
      let result;
      if (this.mode === 'create') {
        result = await this.createAccount();
      } else {
        result = await this.updateAccount();
      }
      
      await loading.dismiss();
      this.saving = false;
      
      // If account was created successfully, send it via service
      if (this.mode === 'create' && result) {
        console.log('Account created successfully, result:', result);
        console.log('payInvo data:', this.payInvo);
        
        // Get the ID from the API response (the backend returns {message: "513"})
        const newAccountId = result.message;
        
        const accountData = {
          id: newAccountId,
          ac_id: this.payInvo.ac_id,
          sub_name: this.payInvo.sub_name,
          sub_type: this.payInvo.sub_type,
          sub_code: this.payInvo.sub_code,
          sub_balance: this.payInvo.sub_balance,
          store_id: this.payInvo.store_id,
          cat_id: this.payInvo.cat_id,
          cat_name: this.payInvo.cat_name,
          phone: this.payInvo.phone,
          address: this.payInvo.address
        };
        
        console.log('Sending account data with ID:', newAccountId, accountData);
        
        // Send the new account via service
        this.accountCommunicationService.setNewAccount(accountData);
      }
      
      this.navigateBack();
    } catch (error) {
      await loading.dismiss();
      this.saving = false;
      this.presentToast('خطأ في حفظ البيانات', 'danger');
    }
  }

  private createAccount(): Promise<any> {
    return new Promise((resolve, reject) => {
      // Pass the account object directly, not as an array
      this.api.createAccount(this.payInvo).subscribe(
        (data: any) => {
          if (data['message'] !== 'Post Not Created') {
            this.presentToast('تم حفظ الحساب بنجاح', 'success');
            resolve(data);
          } else {
            this.presentToast('فشل في إنشاء الحساب', 'danger');
            reject(data);
          }
        },
        (error) => {
          this.presentToast('خطأ في الاتصال', 'danger');
          reject(error);
        }
      );
    });
  }

  private updateAccount(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.updateSubAccount(this.payInvo).subscribe(
        (data: any) => {
          if (data['message'] !== 'Post Not Created') {
            this.presentToast('تم تحديث الحساب بنجاح', 'success');
            resolve(data);
          } else {
            this.presentToast('فشل في تحديث الحساب', 'danger');
            reject(data);
          }
        },
        (error) => {
          this.presentToast('خطأ في الاتصال', 'danger');
          reject(error);
        }
      );
    });
  }

  validate(): boolean {
    if (!this.payInvo.sub_name || this.payInvo.sub_name.trim() === '') {
      this.presentToast('الرجاء إدخال اسم الحساب', 'danger');
      return false;
    }

    if (!this.payInvo.sub_type || this.payInvo.sub_type === '') {
      this.presentToast('الرجاء اختيار طبيعة الحساب', 'danger');
      return false;
    }

    if (!this.selectedMainAccount.ac_id || this.selectedMainAccount.ac_name === '') {
      this.presentToast('الرجاء اختيار الحساب الرئيسي', 'danger');
      return false;
    }

    return true;
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      cssClass: 'cust_Toast',
      mode: 'ios',
      position: 'top'
    });
    await toast.present();
  }

  closeModal() {
    this.navigateBack();
  }

  navigateBack() {
    this.navController.back();
  }

  // Delete functionality with safety checks
  async deleteAccount() {
    if (this.mode !== 'edit' || !this.payInvo.id) {
      this.presentToast('لا يمكن حذف حساب غير محفوظ', 'danger');
      return;
    }

    const alert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: `هل تريد حذف الحساب "${this.payInvo.sub_name}"؟`,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'حذف',
          cssClass: 'danger',
          handler: () => {
            this.checkAccountUsageAndDelete();
          }
        }
      ]
    });
    
    await alert.present();
  }

  async checkAccountUsageAndDelete() {
    const loading = await this.loadingController.create({
      message: 'جاري التحقق من استخدام الحساب...',
      spinner: 'crescent'
    });
    await loading.present();

    try {
      // Check if account is used in any transactions
      const canDelete = await this.checkAccountCanBeDeleted();
      
      if (canDelete) {
        // Dismiss the check loading and perform delete
        await loading.dismiss();
        await this.performDelete();
      } else {
        await loading.dismiss();
        this.presentToast('لا يمكن حذف الحساب لأنه مستخدم في معاملات أخرى', 'danger');
      }
    } catch (error) {
      await loading.dismiss();
      this.presentToast('خطأ في التحقق من استخدام الحساب', 'danger');
    }
  }

  private checkAccountCanBeDeleted(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // Check if account is used in journal details (jdetails_from and jdetails_to)
      // Check if account is used in payments (pay.cust_id)
      // Check if account is used in purchases (perch.cust_id)
      
      this.api.checkAccountUsage(this.payInvo.id).subscribe(
        (data: any) => {
          console.log('Account usage check result:', data);
          
          // If the API returns usage data, check if account is used
          if (data && data.data) {
            const usage = data.data;
            const hasJournalEntries = (usage.jdetails_from_count || 0) > 0 || (usage.jdetails_to_count || 0) > 0;
            const hasPayments = (usage.pay_count || 0) > 0;
            const hasPurchases = (usage.perch_count || 0) > 0;
            
            const canDelete = !hasJournalEntries && !hasPayments && !hasPurchases;
            
            if (!canDelete) {
              console.log('Account cannot be deleted. Usage:', {
                journalEntries: hasJournalEntries,
                payments: hasPayments,
                purchases: hasPurchases
              });
            }
            
            resolve(canDelete);
          } else {
            // If no usage data returned, assume it's safe to delete
            resolve(true);
          }
        },
        (error) => {
          console.error('Error checking account usage:', error);
          reject(error);
        }
      );
    });
  }

  private async performDelete() {
    const deleteLoading = await this.loadingController.create({
      message: 'جاري حذف الحساب...',
      spinner: 'crescent'
    });
    await deleteLoading.present();

    try {
      const deleteResult = await this.deleteAccountFromServer();
      
      await deleteLoading.dismiss();
      
      if (deleteResult) {
        this.presentToast('تم حذف الحساب بنجاح', 'success');
        this.navigateBack();
      } else {
        this.presentToast('فشل في حذف الحساب', 'danger');
      }
    } catch (error) {
      await deleteLoading.dismiss();
      this.presentToast('خطأ في حذف الحساب', 'danger');
    }
  }

  private deleteAccountFromServer(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.api.deleteSubAccont(this.payInvo.id).subscribe(
        (data: any) => {
          if (data['message'] !== 'Post Not Deleted') {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-expense-categories',
  templateUrl: './expense-categories.page.html',
  styleUrls: ['./expense-categories.page.scss']
})
export class ExpenseCategoriesPage implements OnInit {
  expenseCategories: any[] = [];
  store_info: any;

  newCategory = {
    id: null,
    category_name: '',
    category_desc: '',
    store_id: null
  };

  editingCategory: any = null;
  showAddForm = false;

  constructor(
    private servicesService: ServicesService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastController: ToastController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.loadStoreInfo();
  }

  async loadStoreInfo() {
    await this.storage.create();
    this.store_info = await this.storage.get('STORE_INFO');
    this.loadExpenseCategories();
  }

  async loadExpenseCategories() {
    if (!this.store_info) return;

    this.servicesService.getExpenseCategories(this.store_info.id).subscribe(
      (data: any) => {
        if (data && data.message !== 'No Categories Found') {
          this.expenseCategories = data.data || [];
        } else {
          this.expenseCategories = [];
        }
      },
      error => {
        console.error('Error loading expense categories:', error);
        this.expenseCategories = [];
      }
    );
  }

  async addExpenseCategory() {
    if (!this.newCategory.category_name.trim()) {
      this.presentToast('يرجى إدخال اسم التصنيف', 'warning');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'جاري حفظ تصنيف المصروفات...'
    });
    await loading.present();

    const categoryData = {
      category_name: this.newCategory.category_name,
      category_desc: this.newCategory.category_desc,
      store_id: this.store_info.id
    };

    this.servicesService.createExpenseCategory(categoryData).subscribe(
      data => {
        loading.dismiss();
        this.presentToast('تم إضافة تصنيف المصروفات بنجاح', 'success');
        this.resetForm();
        this.loadExpenseCategories();
      },
      error => {
        console.error('Error creating expense category:', error);
        loading.dismiss();
        this.presentToast('خطأ في إضافة تصنيف المصروفات', 'danger');
      }
    );
  }

  editExpenseCategory(category: any) {
    this.editingCategory = { ...category };
    this.showAddForm = true;
    this.newCategory = {
      id: category.id,
      category_name: category.category_name,
      category_desc: category.category_desc,
      store_id: category.store_id
    };
  }

  async updateExpenseCategory() {
    if (!this.newCategory.category_name.trim()) {
      this.presentToast('يرجى إدخال اسم التصنيف', 'warning');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'جاري تحديث تصنيف المصروفات...'
    });
    await loading.present();

    const categoryData = {
      id: this.newCategory.id,
      category_name: this.newCategory.category_name,
      category_desc: this.newCategory.category_desc,
      store_id: this.store_info.id
    };

    this.servicesService.updateExpenseCategory(categoryData).subscribe(
      data => {
        loading.dismiss();
        this.presentToast('تم تحديث تصنيف المصروفات بنجاح', 'success');
        this.resetForm();
        this.loadExpenseCategories();
      },
      error => {
        console.error('Error updating expense category:', error);
        loading.dismiss();
        this.presentToast('خطأ في تحديث تصنيف المصروفات', 'danger');
      }
    );
  }

  async deleteExpenseCategory(category: any) {
    const alert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: `هل أنت متأكد من حذف تصنيف المصروفات "${category.category_name}"؟`,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'حذف',
          handler: () => {
            this.confirmDeleteExpenseCategory(category);
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmDeleteExpenseCategory(category: any) {
    const loading = await this.loadingController.create({
      message: 'جاري حذف تصنيف المصروفات...'
    });
    await loading.present();

    this.servicesService.deleteExpenseCategory(category.id).subscribe(
      (data: any) => {
        loading.dismiss();
        if (data.message && data.message.includes('Cannot delete')) {
          this.presentToast('لا يمكن حذف التصنيف لأنه مستخدم في مصروفات', 'warning');
        } else {
          this.presentToast('تم حذف تصنيف المصروفات بنجاح', 'success');
          this.loadExpenseCategories();
        }
      },
      error => {
        console.error('Error deleting expense category:', error);
        loading.dismiss();
        this.presentToast('خطأ في حذف تصنيف المصروفات', 'danger');
      }
    );
  }

  resetForm() {
    this.newCategory = {
      id: null,
      category_name: '',
      category_desc: '',
      store_id: null
    };
    this.editingCategory = null;
    this.showAddForm = false;
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) {
      this.resetForm();
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }
}

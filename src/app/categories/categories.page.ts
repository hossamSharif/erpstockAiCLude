import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})
export class CategoriesPage implements OnInit {
  categories: any[] = [];
  loading: any;
  
  newCategory = {
    category_name: '',
    category_desc: '',
    store_id: null
  };

  editingCategory: any = null;
  showAddForm = false;
  
  // Endpoint switching control
  selectedEndpointCategoryId: any = null;
  currentEndpoint: string = '';
  selectedCategoryName: string = '';
  isInitializingEndpoint: boolean = false;

  constructor(
    private servicesService: ServicesService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastController: ToastController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.loadCategories();
    this.loadEndpointSettings();
  }

  async loadCategories() {
    this.loading = await this.loadingController.create({
      message: 'جاري تحميل التصنيفات...'
    });
    await this.loading.present();

    try {
      // Fetch categories and cache them
      const categories: any[] = await this.servicesService.fetchAndCacheCategories();
      this.categories = Array.isArray(categories) ? categories : [];
      this.loadEndpointSettings(); // Load endpoint settings after categories are loaded
      this.loading.dismiss();
    } catch (error) {
      console.error('Error loading categories:', error);
      this.categories = [];
      this.loading.dismiss();
      this.presentToast('خطأ في تحميل التصنيفات', 'danger');
    }
  }

  async addCategory() {
    if (!this.newCategory.category_name.trim()) {
      this.presentToast('يرجى إدخال اسم التصنيف', 'warning');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'جاري حفظ التصنيف...'
    });
    await loading.present();

    try {
      this.servicesService.createCategory(this.newCategory).subscribe(
        data => {
          loading.dismiss();
          this.presentToast('تم إضافة التصنيف بنجاح', 'success');
          this.resetForm();
          this.loadCategories();
          // Refresh cached categories
          this.servicesService.fetchAndCacheCategories();
        },
        error => {
          console.error('Error creating category:', error);
          loading.dismiss();
          this.presentToast('خطأ في إضافة التصنيف', 'danger');
        }
      );
    } catch (error) {
      console.error('Error:', error);
      loading.dismiss();
    }
  }

  async editCategory(category: any) {
    this.editingCategory = { ...category };
    this.showAddForm = true;
    this.newCategory = { ...category };
  }

  async updateCategory() {
    if (!this.newCategory.category_name.trim()) {
      this.presentToast('يرجى إدخال اسم التصنيف', 'warning');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'جاري تحديث التصنيف...'
    });
    await loading.present();

    try {
      this.servicesService.updateCategory(this.newCategory).subscribe(
        data => {
          loading.dismiss();
          this.presentToast('تم تحديث التصنيف بنجاح', 'success');
          this.resetForm();
          this.loadCategories();
          // Refresh cached categories
          this.servicesService.fetchAndCacheCategories();
        },
        error => {
          console.error('Error updating category:', error);
          loading.dismiss();
          this.presentToast('خطأ في تحديث التصنيف', 'danger');
        }
      );
    } catch (error) {
      console.error('Error:', error);
      loading.dismiss();
    }
  }

  async deleteCategory(category: any) {
    const alert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: `هل أنت متأكد من حذف التصنيف "${category.category_name}"؟`,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'حذف',
          handler: () => {
            this.confirmDeleteCategory(category);
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmDeleteCategory(category: any) {
    const loading = await this.loadingController.create({
      message: 'جاري حذف التصنيف...'
    });
    await loading.present();

    try {
      this.servicesService.deleteCategory(category.id).subscribe(
        data => {
          loading.dismiss();
          if (data['message'].includes('Cannot delete')) {
            this.presentToast('لا يمكن حذف التصنيف لأنه مستخدم في أصناف', 'warning');
          } else {
            this.presentToast('تم حذف التصنيف بنجاح', 'success');
            this.loadCategories();
            // Refresh cached categories
            this.servicesService.fetchAndCacheCategories();
            // Check if deleted category was the selected endpoint
            if (this.selectedEndpointCategoryId == category.id) {
              this.clearEndpointSettings();
            }
          }
        },
        error => {
          console.error('Error deleting category:', error);
          loading.dismiss();
          this.presentToast('خطأ في حذف التصنيف', 'danger');
        }
      );
    } catch (error) {
      console.error('Error:', error);
      loading.dismiss();
    }
  }

  resetForm() {
    this.newCategory = {
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

  // Endpoint switching management methods
  async loadEndpointSettings() {
    this.isInitializingEndpoint = true;
    await this.storage.create();
    const savedCategoryId = await this.storage.get('SELECTED_CATEGORY_ID');
    const savedEndpoint = await this.storage.get('SELECTED_ENDPOINT');
    const savedCategory = await this.storage.get('SELECTED_CATEGORY');
    
    if (savedCategoryId && this.categories.length > 0) {
      // Verify that the saved category still exists in the categories list
      const categoryExists = this.categories.some(cat => cat.id == savedCategoryId);
      if (categoryExists) {
        this.selectedEndpointCategoryId = savedCategoryId;
        this.currentEndpoint = savedEndpoint || '';
        this.selectedCategoryName = savedCategory ? savedCategory.category_name : '';
      } else {
        // If saved category no longer exists, clear it from storage
        await this.clearEndpointSettings();
      }
    } else {
      this.selectedEndpointCategoryId = null;
      this.currentEndpoint = '';
      this.selectedCategoryName = '';
    }
    
    // Allow some time for the UI to settle before allowing user interactions
    setTimeout(() => {
      this.isInitializingEndpoint = false;
    }, 500);
  }

  async setEndpointCategory(event: any) {
    const selectedId = event.detail.value;
    
    // Don't show dialog during initialization
    if (this.isInitializingEndpoint) {
      return;
    }
    
    if (!selectedId) {
      await this.clearEndpointSettings();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'جاري تحديث نقطة الاتصال...'
    });
    await loading.present();

    try {
      const result = await this.servicesService.setEndpointFromCategory(selectedId);
      
      if (result.success) {
        this.selectedEndpointCategoryId = selectedId;
        this.currentEndpoint = result.endpoint;
        this.selectedCategoryName = result.category.category_name;
        
        loading.dismiss();
        
        // Show success message and reload confirmation
        const alert = await this.alertController.create({
          header: 'تم التحديث بنجاح',
          message: `تم تحديد "${result.category.category_name}" كنقطة اتصال. سيتم إعادة تحميل التطبيق لتطبيق التغييرات.`,
          buttons: [
            {
              text: 'موافق',
              handler: () => {
                this.servicesService.reloadApplication();
              }
            }
          ]
        });
        await alert.present();
        
      } else {
        loading.dismiss();
        this.presentToast(result.message || 'خطأ في تحديث نقطة الاتصال', 'danger');
      }
    } catch (error) {
      console.error('Error setting endpoint:', error);
      loading.dismiss();
      this.presentToast('خطأ في تحديث نقطة الاتصال', 'danger');
    }
  }

  async clearEndpointSettings() {
    await this.servicesService.clearEndpoint();
    this.selectedEndpointCategoryId = null;
    this.currentEndpoint = '';
    this.selectedCategoryName = '';
    
    // Only show toast if not during initialization
    if (!this.isInitializingEndpoint) {
      this.presentToast('تم إلغاء نقطة الاتصال المحددة', 'warning');
    }
  }

  getSelectedEndpointName(): string {
    return this.selectedCategoryName;
  }

  getCurrentEndpoint(): string {
    return this.currentEndpoint;
  }
}
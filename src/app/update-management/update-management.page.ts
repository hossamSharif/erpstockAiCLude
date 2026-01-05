import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../stockService/services.service';
import { AlertController, LoadingController, ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-management',
  templateUrl: './update-management.page.html',
  styleUrls: ['./update-management.page.scss'],
  
})
export class UpdateManagementPage implements OnInit {
  updates: Array<any> = [];
  showForm: boolean = false;
  isEditMode: boolean = false;

  updateForm = {
    id: null,
    version: '',
    title: '',
    description: '',
    features: [''],
    is_active: 1,
    priority: 100
  };

  constructor(
    private api: ServicesService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadUpdates();
  }

  /**
   * Load all updates from backend
   */
  async loadUpdates() {
    const loading = await this.loadingController.create({
      message: 'جاري التحميل...'
    });
    await loading.present();

    this.api.getAllAppUpdates().subscribe(
      (response: any) => {
        loading.dismiss();
        if (response && response.data) {
          this.updates = response.data.map((update: any) => ({
            ...update,
            features: JSON.parse(update.features || '[]')
          }));
        }
      },
      (error) => {
        loading.dismiss();
        this.showToast('حدث خطأ في تحميل البيانات', 'danger');
        console.error('Error loading updates:', error);
      }
    );
  }

  /**
   * Show form for adding new update
   */
  showAddForm() {
    this.resetForm();
    this.isEditMode = false;
    this.showForm = true;
  }

  /**
   * Show form for editing existing update
   */
  editUpdate(update: any) {
    this.updateForm = {
      id: update.id,
      version: update.version,
      title: update.title,
      description: update.description,
      features: [...update.features],
      is_active: update.is_active,
      priority: update.priority
    };
    this.isEditMode = true;
    this.showForm = true;
  }

  /**
   * Cancel form and hide it
   */
  cancelForm() {
    this.resetForm();
    this.showForm = false;
  }

  /**
   * Reset form to initial state
   */
  resetForm() {
    this.updateForm = {
      id: null,
      version: '',
      title: '',
      description: '',
      features: [''],
      is_active: 1,
      priority: 100
    };
    this.isEditMode = false;
  }

  /**
   * Add a new feature field
   */
  addFeature() {
    this.updateForm.features.push('');
  }

  /**
   * Remove a feature field
   */
  removeFeature(index: number) {
    if (this.updateForm.features.length > 1) {
      this.updateForm.features.splice(index, 1);
    }
  }

  /**
   * Track by index for ngFor
   */
  trackByIndex(index: number): number {
    return index;
  }

  /**
   * Validate form before submission
   */
  validateForm(): boolean {
    if (!this.updateForm.version || !this.updateForm.title || !this.updateForm.description) {
      this.showToast('يرجى ملء جميع الحقول المطلوبة', 'warning');
      return false;
    }

    // Remove empty features
    this.updateForm.features = this.updateForm.features.filter(f => f.trim() !== '');

    if (this.updateForm.features.length === 0) {
      this.showToast('يرجى إضافة ميزة واحدة على الأقل', 'warning');
      return false;
    }

    return true;
  }

  /**
   * Save update (create or update)
   */
  async saveUpdate() {
    if (!this.validateForm()) {
      return;
    }

    const loading = await this.loadingController.create({
      message: this.isEditMode ? 'جاري التحديث...' : 'جاري الإضافة...'
    });
    await loading.present();

    const updateData = {
      version: this.updateForm.version,
      title: this.updateForm.title,
      description: this.updateForm.description,
      features: this.updateForm.features,
      is_active: this.updateForm.is_active,
      priority: this.updateForm.priority
    };

    if (this.isEditMode) {
      // Update existing
      this.api.updateAppUpdate(this.updateForm.id, updateData).subscribe(
        (response: any) => {
          loading.dismiss();
          this.showToast('تم التحديث بنجاح', 'success');
          this.loadUpdates();
          this.cancelForm();
        },
        (error) => {
          loading.dismiss();
          this.showToast('حدث خطأ في التحديث', 'danger');
          console.error('Error updating:', error);
        }
      );
    } else {
      // Create new
      this.api.createAppUpdate(updateData).subscribe(
        (response: any) => {
          loading.dismiss();
          this.showToast('تم إضافة التحديث بنجاح', 'success');
          this.loadUpdates();
          this.cancelForm();
        },
        (error) => {
          loading.dismiss();
          this.showToast('حدث خطأ في الإضافة', 'danger');
          console.error('Error creating:', error);
        }
      );
    }
  }

  /**
   * Toggle update active status
   */
  async toggleActive(update: any) {
    const loading = await this.loadingController.create({
      message: 'جاري التحديث...'
    });
    await loading.present();

    const updateData = {
      ...update,
      is_active: update.is_active === 1 ? 0 : 1
    };

    this.api.updateAppUpdate(update.id, updateData).subscribe(
      (response: any) => {
        loading.dismiss();
        this.showToast('تم تحديث الحالة', 'success');
        this.loadUpdates();
      },
      (error) => {
        loading.dismiss();
        this.showToast('حدث خطأ في التحديث', 'danger');
        console.error('Error toggling:', error);
      }
    );
  }

  /**
   * Delete update with confirmation
   */
  async deleteUpdate(update: any) {
    const alert = await this.alertController.create({
      header: 'تأكيد الحذف',
      message: `هل أنت متأكد من حذف التحديث "${update.title}"؟`,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'حذف',
          cssClass: 'danger',
          handler: () => {
            this.confirmDelete(update.id);
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Confirm and execute delete
   */
  async confirmDelete(id: number) {
    const loading = await this.loadingController.create({
      message: 'جاري الحذف...'
    });
    await loading.present();

    this.api.deleteAppUpdate(id).subscribe(
      (response: any) => {
        loading.dismiss();
        this.showToast('تم الحذف بنجاح', 'success');
        this.loadUpdates();
      },
      (error) => {
        loading.dismiss();
        this.showToast('حدث خطأ في الحذف', 'danger');
        console.error('Error deleting:', error);
      }
    );
  }

  /**
   * Show toast message
   */
  async showToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'top'
    });
    await toast.present();
  }

  /**
   * Preview update modal
   */
  async previewUpdate(update: any) {
    const alert = await this.alertController.create({
      header: update.title,
      subHeader: `الإصدار ${update.version}`,
      message: `
        <p>${update.description}</p>
        <br>
        <strong>الميزات:</strong>
        <ul>
          ${update.features.map((f: string) => `<li>${f}</li>`).join('')}
        </ul>
      `,
      buttons: ['إغلاق']
    });

    await alert.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, PopoverController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServicesService } from '../../stockService/services.service';

@Component({
  selector: 'app-category-switcher-popover',
  templateUrl: './category-switcher-popover.component.html',
  styleUrls: ['./category-switcher-popover.component.scss'],
})
export class CategorySwitcherPopoverComponent implements OnInit {

  categories: any[] = [];
  filteredCategories: any[] = [];
  selectedCategoryId: any = null;
  searchTerm: string = '';
  loading: boolean = true;

  constructor(
    private popoverController: PopoverController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private servicesService: ServicesService,
    private storage: Storage,
  ) { }

  async ngOnInit() {
    await this.storage.create();
    this.selectedCategoryId = await this.storage.get('SELECTED_CATEGORY_ID');

    let cached = await this.servicesService.getCachedCategories();
    if (!cached || cached.length === 0) {
      const userInfo = await this.storage.get('USER_INFO');
      const storeId = userInfo ? userInfo.store_id : undefined;
      try {
        cached = await this.servicesService.fetchAndCacheCategories(storeId);
      } catch (e) {
        cached = [];
      }
    }

    this.categories = cached || [];
    this.filteredCategories = [...this.categories];
    this.loading = false;
  }

  onSearchChange(event: any) {
    const term = (event.detail.value || '').trim().toLowerCase();
    this.searchTerm = term;
    if (!term) {
      this.filteredCategories = [...this.categories];
      return;
    }
    this.filteredCategories = this.categories.filter(cat =>
      (cat.category_name || '').toLowerCase().includes(term)
    );
  }

  isActive(cat: any): boolean {
    return this.selectedCategoryId != null && cat.id == this.selectedCategoryId;
  }

  async selectCategory(cat: any) {
    if (this.isActive(cat)) {
      await this.popoverController.dismiss();
      return;
    }

    await this.popoverController.dismiss();

    const loading = await this.loadingController.create({
      message: 'جاري تحديث نقطة الاتصال...'
    });
    await loading.present();

    try {
      const result = await this.servicesService.setEndpointFromCategory(cat.id);

      if (result.success) {
        loading.dismiss();
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

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top'
    });
    toast.present();
  }
}

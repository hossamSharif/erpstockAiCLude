import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ServicesService } from '../../stockService/services.service';

@Component({
  selector: 'app-bulk-price-update-modal',
  templateUrl: './bulk-price-update-modal.component.html',
  styleUrls: ['./bulk-price-update-modal.component.scss']
})
export class BulkPriceUpdateModalComponent implements OnInit {
  @Input() itemsList: any[] = [];
  @Input() mode: 'sales' | 'purchase' = 'sales';

  editableItems: any[] = [];
  originalItems: any[] = [];
  hasChanges: boolean = false;

  constructor(
    private modalController: ModalController,
    private api: ServicesService,
    private toast: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    // Deep clone items for editing
    this.editableItems = this.itemsList.map(item => ({
      id: item.item_id,
      item_name: item.item_name,
      pay_price: parseFloat(item.pay_price) || 0,
      perch_price: parseFloat(item.perch_price) || 0,
      retail_price: parseFloat(item.retail_price) || 0,
      original_pay_price: parseFloat(item.pay_price) || 0,
      original_perch_price: parseFloat(item.perch_price) || 0,
      original_retail_price: parseFloat(item.retail_price) || 0,
      isEdited: false
    }));

    this.originalItems = JSON.parse(JSON.stringify(this.editableItems));
  }

  onPriceChange(item: any, priceType: string) {
    // Validate price (must be >= 0)
    if (item[priceType] < 0) {
      item[priceType] = 0;
    }

    // Mark item as edited
    item.isEdited = this.hasItemChanged(item);

    // Check if any items have changes
    this.hasChanges = this.editableItems.some(i => i.isEdited);
  }

  hasItemChanged(item: any): boolean {
    return item.pay_price !== item.original_pay_price ||
           item.perch_price !== item.original_perch_price ||
           item.retail_price !== item.original_retail_price;
  }

  removeItem(index: number) {
    this.editableItems.splice(index, 1);
    this.hasChanges = this.editableItems.some(i => i.isEdited);
  }

  async save() {
    // Check if there are items to update
    if (this.editableItems.length === 0) {
      this.presentToast('لا توجد أصناف للتحديث', 'warning');
      return;
    }

    // Show confirmation dialog with total count
    const confirmed = await this.showConfirmation(this.editableItems.length);

    if (confirmed) {
      // Send ALL items (not just changed ones)
      await this.updatePrices(this.editableItems);
    }
  }

  async showConfirmation(count: number): Promise<boolean> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: 'تأكيد تعديل اسعار النظام',
        message: `سيتم تعديل اسعار النظام لـ ${count} صنف في قاعدة البيانات. هل تريد المتابعة؟`,
        buttons: [
          {
            text: 'إلغاء',
            role: 'cancel',
            handler: () => resolve(false)
          },
          {
            text: 'تحديث',
            handler: () => resolve(true)
          }
        ]
      });

      await alert.present();
    });
  }

  async updatePrices(items: any[]) {
    const loading = await this.loadingController.create({
      message: 'جاري تعديل اسعار النظام...',
      spinner: 'bubbles'
    });

    await loading.present();

    try {
      // Prepare items for API (only send necessary fields)
      const itemsToUpdate = items.map(item => ({
        id: item.id,
        pay_price: item.pay_price,
        perch_price: item.perch_price,
        retail_price: item.retail_price,
        item_name: item.item_name
      }));

      const result: any = await this.api.bulkUpdatePrices(itemsToUpdate).toPromise();

      await loading.dismiss();

      if (result.success) {
        const updateInvoice = await this.askUpdateInvoice();
        if (updateInvoice) {
          await this.modalController.dismiss({
            success: true,
            updated: result.updated_count,
            updatedItems: this.editableItems.map(item => ({
              id: item.id,
              item_name: item.item_name,
              pay_price: item.pay_price,
              perch_price: item.perch_price,
              retail_price: item.retail_price
            }))
          });
        } else {
          await this.modalController.dismiss({
            success: true,
            updated: result.updated_count
          });
        }
      } else {
        this.presentToast('حدث خطأ أثناء التحديث', 'danger');
      }
    } catch (error) {
      await loading.dismiss();
      console.error('Bulk update error:', error);
      this.presentToast('خطأ في الاتصال بالسيرفر', 'danger');
    }
  }

  async cancel() {
    if (this.hasChanges) {
      const alert = await this.alertController.create({
        header: 'تأكيد الإلغاء',
        message: 'لديك تغييرات غير محفوظة. هل تريد المتابعة؟',
        buttons: [
          {
            text: 'البقاء',
            role: 'cancel'
          },
          {
            text: 'إلغاء',
            handler: () => this.modalController.dismiss()
          }
        ]
      });

      await alert.present();
    } else {
      await this.modalController.dismiss();
    }
  }

  async askUpdateInvoice(): Promise<boolean> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: 'تحديث الفاتورة',
        message: 'تم تحديث اسعار النظام بنجاح. هل تريد تحديث اسعار الفاتورة الحالية أيضاً؟',
        buttons: [
          {
            text: 'لا',
            role: 'cancel',
            handler: () => resolve(false)
          },
          {
            text: 'نعم، تحديث الفاتورة',
            handler: () => resolve(true)
          }
        ]
      });
      await alert.present();
    });
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    await toast.present();
  }
}

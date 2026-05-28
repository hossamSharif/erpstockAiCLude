import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { PurchasePage } from '../../purchase/purchase.page';

@Component({
  selector: 'app-insufficient-stock-dialog',
  templateUrl: './insufficient-stock-dialog.component.html',
  styleUrls: ['./insufficient-stock-dialog.component.scss'] 
})
export class InsufficientStockDialogComponent implements OnInit {
  @Input() insufficientItems: any[] = [];
  @Input() store_info: any;
  @Input() user_info: any;
  @Input() year: any;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    console.log('Insufficient items:', this.insufficientItems);
    console.log('First item structure:', this.insufficientItems[0]);
    // Log all properties of first item to debug
    if (this.insufficientItems.length > 0) {
      const firstItem = this.insufficientItems[0];
      console.log('pay_price:', firstItem.pay_price);
      console.log('perch_price:', firstItem.perch_price);
      console.log('All properties:', Object.keys(firstItem));
    }
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  async createPurchaseInvoice() {
    // Create alert to confirm
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'تأكيد إنشاء فاتورة شراء',
      mode: 'ios',
      message: 'هل تريد إنشاء فاتورة شراء تتضمن الأصناف الناقصة؟',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'موافق',
          handler: () => {
            this.openPurchaseModal(this.insufficientItems);
          }
        }
      ]
    });

    await alert.present();
  }

  private async openPurchaseModal(itemList: any[]) {
    // Transform insufficient items to purchase items format
    const purchaseItems = itemList.map(item => ({
      id: item.item_id,
      item_name: item.item_name,
      item_desc: item.item_desc,
      part_no: item.part_no || '',
      brand: item.brand || '',
      model: item.model || '',
      item_unit: item.item_unit || '',
      realPerchPrice: item.perch_price,
      perch_price: item.pay_price || 0, // Use sales price for purchase price initially
      pay_price: item.pay_price || 0,
      qty: item.shortage, // Use shortage as the quantity to purchase
      tot: (item.pay_price * item.shortage).toFixed(2) || 0,
      availQty: item.shortage,
      aliasEn: item.aliasEn || ''
    }));

    try {
      const modal = await this.modalController.create({
        component: PurchasePage,
        componentProps: {
          modalMode: true,
          modalStatus: 'newInvoFromItemsPage',
          modalSelectedItemsList: purchaseItems
        },
        cssClass: 'purchase-full-modal',
        showBackdrop: true,
        backdropDismiss: false
      });

      modal.onDidDismiss().then((result) => {
        if (result.data && result.data.success) {
          // Purchase completed - dismiss with success data so sales page can refresh
          this.modalController.dismiss({ purchaseCompleted: true });
        } else {
          // User cancelled/backed out - just dismiss the insufficient stock dialog
          this.modalController.dismiss();
        }
      });

      await modal.present();
    } catch (error) {
      console.error('Error opening purchase modal:', error);
      // Don't navigate away - just dismiss and show error
      this.modalController.dismiss();
    }
  }

  getTotalShortage(): number {
    return this.insufficientItems.reduce((total, item) => total + item.shortage, 0);
  }

  getTotalValue(): number {
    return this.insufficientItems.reduce((total, item) => 
      total + (item.pay_price * item.shortage), 0
    );
  }

  // Debug method - remove after testing
  getItemKeys(item: any): string {
    return Object.keys(item).join(', ');
  }
}
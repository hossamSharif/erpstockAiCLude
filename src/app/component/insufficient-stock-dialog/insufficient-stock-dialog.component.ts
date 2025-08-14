import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

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
    private alertController: AlertController,
    private router: Router
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
            this.navigateToInvoicePage(this.insufficientItems, 'purchase');
          }
        }
      ]
    });

    await alert.present();
  }

  private navigateToInvoicePage(itemList: any[], type: 'purchase') {
    // Transform insufficient items to purchase items format
    const purchaseItems = itemList.map(item => ({
      id: item.item_id,
      item_name: item.item_name,
      item_desc: item.item_desc,
      part_no: item.part_no || '',
      brand: item.brand || '',
      model: item.model || '',
      item_unit: item.item_unit || '',
      realPerchPrice:item.perch_price ,
      perch_price: item.pay_price || 0,// Use sales price for purchase price initially
      pay_price: item.pay_price || 0, 
      qty: item.shortage, // Use shortage as the quantity to purchase
      tot: (item.pay_price * item.shortage).toFixed(2) || 0,
      availQty: item.shortage,
      aliasEn: item.aliasEn || ''
    }));

    // Navigate to purchase page with items
    let navigationExtras: NavigationExtras = {
      queryParams: {
        status: 'newInvoFromItemsPage',
        selectedItemsList: JSON.stringify(purchaseItems)
      }
    };

    // Dismiss modal first
    this.modalController.dismiss();
    
    // Navigate to purchase page
    this.router.navigate(['folder/purchase'], navigationExtras);
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
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-invoice-price-config-dialog',
  templateUrl: './invoice-price-config-dialog.component.html',
  styleUrls: ['./invoice-price-config-dialog.component.scss']
})
export class InvoicePriceConfigDialogComponent implements OnInit {
  @Input() itemList: any[] = [];
  @Input() invoiceType: 'sales' | 'purchase' = 'sales';
  @Input() context: 'sales-record' | 'purchase-record' | 'default' = 'default';
  
  // Price configuration options
  salesPriceOption: 'keep_original' | 'use_perch_price' = 'use_perch_price';
  purchasePriceOption: 'keep_original' | 'set_custom' | 'pay_price_as_perch_price' | 'keep_pay_price' = 'pay_price_as_perch_price';
  purchaseSourcePrice: 'pay_price' | 'perch_price' = 'perch_price';
  customPerchPrice: number = 0;
  
  // Preview data
  previewItems: any[] = [];
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // Ensure itemList is an array
    if (!this.itemList || !Array.isArray(this.itemList)) {
      this.itemList = [];
    }
    
    // Initialize preview items
    this.initializePreviewItems();
    this.updatePreview();
  }

  initializePreviewItems() {
    this.previewItems = this.itemList.map(item => ({
      ...item,
      original_pay_price: parseFloat(item.pay_price) || 0,
      original_perch_price: parseFloat(item.perch_price) || 0,
      new_pay_price: parseFloat(item.pay_price) || 0,
      new_perch_price: parseFloat(item.perch_price) || 0,
      quantity: parseFloat(item.quantity) || 0
    }));
  }

  onSalesPriceOptionChange() {
    this.updatePreview();
  }

  onPurchasePriceOptionChange() {
    this.updatePreview();
  }

  onPurchaseSourcePriceChange() {
    this.updatePreview();
  }

  onCustomPerchPriceChange() {
    this.updatePreview();
  }

  updatePreview() {
    if (this.invoiceType === 'sales') {
      this.updateSalesPreview();
    } else {
      this.updatePurchasePreview();
    }
  }

  updateSalesPreview() {
    this.previewItems = this.previewItems.map(item => {
      let newPayPrice = item.original_pay_price;
      
      if (this.salesPriceOption === 'use_perch_price') {
        // Use perch_price as pay_price for sales
        newPayPrice = item.original_perch_price;
      }
      
      return {
        ...item,
        new_pay_price: newPayPrice,
        new_perch_price: item.original_perch_price // Keep perch_price unchanged
      };
    });
  }

  updatePurchasePreview() {
    this.previewItems = this.previewItems.map(item => {
      let newPerchPrice = item.original_perch_price;
      let newPayPrice = item.original_pay_price;
      
      if (this.purchasePriceOption === 'set_custom') {
        if (this.customPerchPrice > 0) {
          newPerchPrice = this.customPerchPrice;
        }
        
        // Choose which price to copy from old invoice
        if (this.purchaseSourcePrice === 'pay_price') {
          newPayPrice = item.original_pay_price;
        } else {
          newPayPrice = item.original_perch_price;
        }
      } else if (this.purchasePriceOption === 'pay_price_as_perch_price') {
        // Default option: Set current pay_price as perch_price in the copied invoice
        newPerchPrice = item.original_pay_price;
        newPayPrice = item.original_pay_price; // Keep the same for pay_price too
      } else if (this.purchasePriceOption === 'keep_pay_price') {
        // Second option: Use current pay_price in copied invoice
        newPerchPrice = item.original_perch_price; // Keep original perch_price
        newPayPrice = item.original_pay_price; // Keep original pay_price
      }
      
      return {
        ...item,
        new_pay_price: newPayPrice,
        new_perch_price: newPerchPrice
      };
    });
  }

  async applyConfiguration() {
    // Return configured items based on invoice type
    const configuredItems = this.previewItems.map(item => {
      if (this.invoiceType === 'sales') {
        return {
          ...item,
          pay_price: item.new_pay_price,
          perch_price: item.new_perch_price
        };
      } else {
        return {
          ...item,
          pay_price: item.new_pay_price,
          perch_price: item.new_perch_price
        };
      }
    });
    
    await this.modalController.dismiss(configuredItems);
  }

  async cancel() {
    await this.modalController.dismiss();
  }

  // Helper methods for template
  getTotalOriginal(): number {
    return this.previewItems.reduce((total, item) => {
      const price = this.invoiceType === 'sales' ? item.original_pay_price : item.original_perch_price;
      const qty = item.quantity || 0;
      return total + (price * qty);
    }, 0);
  }

  getTotalNew(): number {
    return this.previewItems.reduce((total, item) => {
      const price = this.invoiceType === 'sales' ? item.new_pay_price : item.new_perch_price;
      const qty = item.quantity || 0;
      return total + (price * qty);
    }, 0);
  }

  getTotalDifference(): number {
    return this.getTotalNew() - this.getTotalOriginal();
  }

  getItemOriginalPrice(item: any): number {
    return this.invoiceType === 'sales' ? item.original_pay_price : item.original_perch_price;
  }

  getItemNewPrice(item: any): number {
    return this.invoiceType === 'sales' ? item.new_pay_price : item.new_perch_price;
  }

  getItemPriceDifference(item: any): number {
    return this.getItemNewPrice(item) - this.getItemOriginalPrice(item);
  }

  hasChanges(): boolean {
    // Always show preview
    return true;
  }
}
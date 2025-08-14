import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ModalController, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-price-adjustment-dialog',
  templateUrl: './price-adjustment-dialog.component.html',
  styleUrls: ['./price-adjustment-dialog.component.scss'], 
})
export class PriceAdjustmentDialogComponent implements OnInit, OnDestroy {
  @Input() itemsList: any[] = [];
  @Input() mode: 'purchase' | 'sales' = 'purchase'; // New input to determine which price to adjust
  @ViewChild('adjustmentInput', { static: false }) adjustmentInput!: IonInput;
  
  adjustmentValue: number = 0;
  adjustmentType: 'percentage' | 'amount' = 'percentage';
  previewItems: any[] = [];
  
  // Dynamic properties based on mode
  get priceField(): string {
    return this.mode === 'sales' ? 'pay_price' : 'perch_price';
  }
  
  get originalPriceField(): string {
    return this.mode === 'sales' ? 'original_pay_price' : 'original_perch_price';
  }
  
  get newPriceField(): string {
    return this.mode === 'sales' ? 'new_pay_price' : 'new_perch_price';
  }

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // Ensure itemsList is an array
    if (!this.itemsList || !Array.isArray(this.itemsList)) {
      this.itemsList = [];
    }
    
    // Create preview items with current prices based on mode
    this.previewItems = this.itemsList.map(item => {
      const currentPrice = parseFloat(item[this.priceField]) || 0;
      return {
        ...item,
        [this.originalPriceField]: currentPrice,
        [this.newPriceField]: currentPrice
      };
    });
    
    this.updatePreview();
  }

  onAdjustmentTypeChange() {
    // Reset adjustment value when type changes for better UX
    this.adjustmentValue = 0;
    this.updatePreview();
  }

  updatePreview() {
    this.previewItems = this.previewItems.map(item => {
      const originalPrice = parseFloat(item[this.originalPriceField]) || 0;
      let newPrice = originalPrice;
      
      if (this.adjustmentType === 'percentage') {
        // Percentage adjustment
        newPrice = originalPrice * (1 + (this.adjustmentValue / 100));
      } else {
        // Amount adjustment
        newPrice = originalPrice + this.adjustmentValue;
      }
      
      // Ensure price doesn't go below 0
      newPrice = Math.max(0, newPrice);
      
      return {
        ...item,
        [this.newPriceField]: Math.round(newPrice * 100) / 100 // Round to 2 decimal places
      };
    });
  }

  async applyChanges() {
    // Update original items with new prices
    const updatedItems = this.previewItems.map(item => ({
      ...item,
      [this.priceField]: item[this.newPriceField]
    }));
    
    await this.modalController.dismiss(updatedItems);
  }

  async cancel() {
    await this.modalController.dismiss();
  }

  getTotalOriginal(): number {
    return this.previewItems.reduce((total, item) => {
      const price = parseFloat(item[this.originalPriceField]) || 0;
      const qty = parseFloat(item.qty) || 0;
      return total + (price * qty);
    }, 0);
  }

  getTotalNew(): number {
    return this.previewItems.reduce((total, item) => {
      const price = parseFloat(item[this.newPriceField]) || 0;
      const qty = parseFloat(item.qty) || 0;
      return total + (price * qty);
    }, 0);
  }

  getTotalDifference(): number {
    return this.getTotalNew() - this.getTotalOriginal();
  }

  setPresetValue(value: number) {
    this.adjustmentValue = value;
    this.updatePreview();
  }

  // Helper methods for template
  getOriginalPrice(item: any): number {
    return parseFloat(item[this.originalPriceField]) || 0;
  }

  getNewPrice(item: any): number {
    return parseFloat(item[this.newPriceField]) || 0;
  }

  getPriceDifference(item: any): number {
    return this.getNewPrice(item) - this.getOriginalPrice(item);
  }

  ngOnDestroy() {
    // Cleanup if needed
  }
}
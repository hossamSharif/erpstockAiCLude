import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemSelectorComponent } from '../../component/item-selector/item-selector.component';
import { FilterPipe } from '../../component/item-selector/pipe';
import { PriceAdjustmentDialogComponent } from '../../component/price-adjustment-dialog/price-adjustment-dialog.component';
import { InvoicePriceConfigDialogComponent } from '../../component/invoice-price-config-dialog/invoice-price-config-dialog.component';
import { AccountSelectorComponent } from '../../components/account-selector/account-selector.component';
import { ActionPopoverComponent } from '../../component/action-popover/action-popover.component';


@NgModule({
  declarations: [
     ItemSelectorComponent,
    FilterPipe,
    PriceAdjustmentDialogComponent,
    InvoicePriceConfigDialogComponent,
    ActionPopoverComponent,
    AccountSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ] ,
  exports: [
    ItemSelectorComponent,
    FilterPipe,
    ActionPopoverComponent,
    PriceAdjustmentDialogComponent,
    InvoicePriceConfigDialogComponent,
    AccountSelectorComponent
  ]
})
export class SharedModule { }

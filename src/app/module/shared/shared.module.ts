import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemSelectorComponent } from '../../component/item-selector/item-selector.component';
import { FilterPipe } from '../../component/item-selector/pipe';
import { EnhancedItemSelectorComponent } from '../../component/enhanced-item-selector/enhanced-item-selector.component';
import { PriceAdjustmentDialogComponent } from '../../component/price-adjustment-dialog/price-adjustment-dialog.component';
import { InvoicePriceConfigDialogComponent } from '../../component/invoice-price-config-dialog/invoice-price-config-dialog.component';
import { AccountSelectorComponent } from '../../components/account-selector/account-selector.component';
import { ActionPopoverComponent } from '../../component/action-popover/action-popover.component';
import { InvoiceJournalEntryComponent } from 'src/app/component/invoice-journal-entry/invoice-journal-entry.component';
import { ExportButtonsComponent } from '../../component/export-buttons/export-buttons.component';


@NgModule({
  declarations: [
     ItemSelectorComponent,
    FilterPipe,
    EnhancedItemSelectorComponent,
    PriceAdjustmentDialogComponent,
    InvoicePriceConfigDialogComponent,
    ActionPopoverComponent,
    AccountSelectorComponent ,
    InvoiceJournalEntryComponent,
    ExportButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ] ,
  exports: [
    ItemSelectorComponent,
    FilterPipe,
    EnhancedItemSelectorComponent,
    ActionPopoverComponent,
    PriceAdjustmentDialogComponent,
    InvoicePriceConfigDialogComponent,
    AccountSelectorComponent ,
    InvoiceJournalEntryComponent,
    ExportButtonsComponent

  ]
})
export class SharedModule { }

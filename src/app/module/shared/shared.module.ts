import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ItemSelectorComponent } from '../../component/item-selector/item-selector.component';
import { FilterPipe } from '../../component/item-selector/pipe';
import { EnhancedItemSelectorComponent } from '../../component/enhanced-item-selector/enhanced-item-selector.component';
import { PriceAdjustmentDialogComponent } from '../../component/price-adjustment-dialog/price-adjustment-dialog.component';
import { InvoicePriceConfigDialogComponent } from '../../component/invoice-price-config-dialog/invoice-price-config-dialog.component';
import { AccountSelectorComponent } from '../../components/account-selector/account-selector.component';
import { ActionPopoverComponent } from '../../component/action-popover/action-popover.component';
import { InvoiceJournalEntryComponent } from 'src/app/component/invoice-journal-entry/invoice-journal-entry.component';
import { ExportButtonsComponent } from '../../component/export-buttons/export-buttons.component';
import { CurrencySwitcherComponent } from '../../components/currency-switcher/currency-switcher.component';
import { CurrencyRateModalComponent } from '../../components/currency-rate-modal/currency-rate-modal.component';
import { CurrencyDisplayPipe } from '../../pipes/currency-display.pipe';


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
    ExportButtonsComponent,
    CurrencySwitcherComponent,
    CurrencyRateModalComponent,
    CurrencyDisplayPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IonicStorageModule
  ],
  providers: [
    DatePipe
  ],
  exports: [
    ItemSelectorComponent,
    FilterPipe,
    EnhancedItemSelectorComponent,
    ActionPopoverComponent,
    PriceAdjustmentDialogComponent,
    InvoicePriceConfigDialogComponent,
    AccountSelectorComponent ,
    InvoiceJournalEntryComponent,
    ExportButtonsComponent,
    CurrencySwitcherComponent,
    CurrencyRateModalComponent,
    CurrencyDisplayPipe

  ]
})
export class SharedModule { }

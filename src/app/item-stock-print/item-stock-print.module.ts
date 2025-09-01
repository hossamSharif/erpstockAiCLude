import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemStockPrintPageRoutingModule } from './item-stock-print-routing.module';

import { ItemStockPrintPage } from './item-stock-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemStockPrintPageRoutingModule
  ],
  declarations: [ItemStockPrintPage]
})
export class ItemStockPrintPageModule {}

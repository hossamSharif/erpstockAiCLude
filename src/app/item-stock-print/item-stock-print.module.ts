import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemStockPrintPageRoutingModule } from './item-stock-print-routing.module';

import { ItemStockPrintPage } from './item-stock-print.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemStockPrintPageRoutingModule,
    SharedModule
  ],
  declarations: [ItemStockPrintPage]
})
export class ItemStockPrintPageModule {}

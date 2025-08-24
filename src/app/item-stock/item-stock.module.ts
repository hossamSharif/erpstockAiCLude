import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemStockPageRoutingModule } from './item-stock-routing.module';

import { ItemStockPage } from './item-stock.page';
import { ShareModule } from '../shareModule/share-module/share-module.module';
import { SharedModule } from '../module/shared/shared.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    Ng2SearchPipeModule,
    
    ShareModule,
    SharedModule,
    ItemStockPageRoutingModule
  ],
  declarations: [ItemStockPage]
})
export class ItemStockPageModule {}

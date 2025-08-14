import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchasePageRoutingModule } from './purchase-routing.module';

import { PurchasePage } from './purchase.page'; 
import { ShareModule } from '../shareModule/share-module/share-module.module';
import { SharedModule } from '../module/shared/shared.module';
import { FilterPipe } from './pipe';
import { FilterPipe2 } from './pipe2';
import { FilterPipe3 } from './pipe3';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ShareModule, 
    IonicModule,
    PurchasePageRoutingModule
  ],
  exports: [],
  declarations: [PurchasePage, FilterPipe, FilterPipe2, FilterPipe3]
})
export class PurchasePageModule {}

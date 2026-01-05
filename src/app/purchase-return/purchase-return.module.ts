import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { PurchaseReturnPageRoutingModule } from './purchase-return-routing.module';

import { PurchaseReturnPage } from './purchase-return.page';

import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseReturnPageRoutingModule,
    SharedModule
  ,
    TranslateModule
  ],
  declarations: [PurchaseReturnPage]
})
export class PurchaseReturnPageModule {}
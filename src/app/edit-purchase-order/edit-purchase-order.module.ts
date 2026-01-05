import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { EditPurchaseOrderPageRoutingModule } from './edit-purchase-order-routing.module';

import { EditPurchaseOrderPage } from './edit-purchase-order.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPurchaseOrderPageRoutingModule,
    SharedModule
  ,
    TranslateModule
  ],
  declarations: [EditPurchaseOrderPage]
})
export class EditPurchaseOrderPageModule {}

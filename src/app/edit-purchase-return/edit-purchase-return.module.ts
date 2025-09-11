import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPurchaseReturnPageRoutingModule } from './edit-purchase-return-routing.module';

import { EditPurchaseReturnPage } from './edit-purchase-return.page';

import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPurchaseReturnPageRoutingModule,
    SharedModule
  ],
  declarations: [EditPurchaseReturnPage]
})
export class EditPurchaseReturnPageModule {}
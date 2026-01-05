import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { PurchaseRecordPageRoutingModule } from './purchase-record-routing.module';

import { PurchaseRecordPage } from './purchase-record.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseRecordPageRoutingModule,
    SharedModule
  ,
    TranslateModule
  ],
  declarations: [PurchaseRecordPage ]
})
export class PurchaseRecordPageModule {}

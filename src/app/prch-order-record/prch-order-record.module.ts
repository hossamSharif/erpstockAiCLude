import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrchOrderRecordPageRoutingModule } from './prch-order-record-routing.module';

import { PrchOrderRecordPage } from './prch-order-record.page';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PrchOrderRecordPageRoutingModule
  ],
  declarations: [PrchOrderRecordPage]
})
export class PrchOrderRecordPageModule {}

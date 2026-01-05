import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { PosSalesPageRoutingModule } from './pos-sales-routing.module';

import { PosSalesPage } from './pos-sales.page';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    PosSalesPageRoutingModule
  ,
    TranslateModule
  ],
  declarations: [PosSalesPage]
})
export class PosSalesPageModule {}

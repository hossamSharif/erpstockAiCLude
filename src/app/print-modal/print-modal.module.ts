import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintModalPageRoutingModule } from './print-modal-routing.module';

import { PrintModalPage } from './print-modal.page';
import { SharedModule } from '../module/shared/shared.module';
//import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   // QRCodeModule,
    PrintModalPageRoutingModule,
    SharedModule
  ],
  declarations: [PrintModalPage]
})
export class PrintModalPageModule {}

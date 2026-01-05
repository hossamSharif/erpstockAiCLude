import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PurchaseReportPageRoutingModule } from './purchase-report-routing.module';
import { PurchaseReportPage } from './purchase-report.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseReportPageRoutingModule,
    SharedModule
  ],
  declarations: [PurchaseReportPage]
})
export class PurchaseReportPageModule {}

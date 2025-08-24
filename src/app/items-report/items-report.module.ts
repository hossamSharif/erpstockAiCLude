import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsReportPageRoutingModule } from './items-report-routing.module';
import { SharedModule } from '../module/shared/shared.module';

import { ItemsReportPage } from './items-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsReportPageRoutingModule,
    SharedModule
  ],
  declarations: [ItemsReportPage]
})
export class ItemsReportPageModule {}

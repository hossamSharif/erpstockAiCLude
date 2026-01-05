import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { DailyReportPageRoutingModule } from './daily-report-routing.module';
import { DailyReportPage } from './daily-report.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyReportPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [DailyReportPage]
})
export class DailyReportPageModule {}

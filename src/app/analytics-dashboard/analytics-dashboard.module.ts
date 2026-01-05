import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { AnalyticsDashboardPageRoutingModule } from './analytics-dashboard-routing.module';
import { AnalyticsDashboardPage } from './analytics-dashboard.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalyticsDashboardPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [AnalyticsDashboardPage]
})
export class AnalyticsDashboardPageModule {}

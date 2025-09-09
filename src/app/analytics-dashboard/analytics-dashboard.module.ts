import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalyticsDashboardPageRoutingModule } from './analytics-dashboard-routing.module';

import { AnalyticsDashboardPage } from './analytics-dashboard.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalyticsDashboardPageRoutingModule,
    SharedModule
  ],
  declarations: [AnalyticsDashboardPage]
})
export class AnalyticsDashboardPageModule {}

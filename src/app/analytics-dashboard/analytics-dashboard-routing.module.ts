import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsDashboardPage } from './analytics-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsDashboardPageRoutingModule {}

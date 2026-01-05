import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseReportPage } from './purchase-report.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseReportPageRoutingModule {}

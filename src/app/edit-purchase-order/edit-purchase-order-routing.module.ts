import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPurchaseOrderPage } from './edit-purchase-order.page';

const routes: Routes = [
  {
    path: '',
    component: EditPurchaseOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPurchaseOrderPageRoutingModule {}

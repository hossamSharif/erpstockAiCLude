import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPurchaseReturnPage } from './edit-purchase-return.page';

const routes: Routes = [
  {
    path: '',
    component: EditPurchaseReturnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPurchaseReturnPageRoutingModule {}
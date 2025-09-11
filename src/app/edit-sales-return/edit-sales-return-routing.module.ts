import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditSalesReturnPage } from './edit-sales-return.page';

const routes: Routes = [
  {
    path: '',
    component: EditSalesReturnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSalesReturnPageRoutingModule {}
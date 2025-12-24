import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseRecordPage } from './expense-record.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseRecordPageRoutingModule {}

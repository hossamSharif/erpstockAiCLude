import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsRecordPage } from './transactions-record.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionsRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsRecordPageRoutingModule {}

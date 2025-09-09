import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyManagementPage } from './currency-management.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyManagementPageRoutingModule {}
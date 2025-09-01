import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemStockPrintPage } from './item-stock-print.page';

const routes: Routes = [
  {
    path: '',
    component: ItemStockPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemStockPrintPageRoutingModule {}

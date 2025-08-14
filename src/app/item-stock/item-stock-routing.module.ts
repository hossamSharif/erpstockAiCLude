import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemStockPage } from './item-stock.page';

const routes: Routes = [
  {
    path: '',
    component: ItemStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemStockPageRoutingModule {}

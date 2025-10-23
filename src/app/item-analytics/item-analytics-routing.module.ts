import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemAnalyticsPage } from './item-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: ItemAnalyticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemAnalyticsPageRoutingModule {}

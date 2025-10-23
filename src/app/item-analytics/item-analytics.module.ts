import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemAnalyticsPageRoutingModule } from './item-analytics-routing.module';

import { ItemAnalyticsPage } from './item-analytics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemAnalyticsPageRoutingModule
  ],
  declarations: [ItemAnalyticsPage],
  providers: [DatePipe]
})
export class ItemAnalyticsPageModule {}

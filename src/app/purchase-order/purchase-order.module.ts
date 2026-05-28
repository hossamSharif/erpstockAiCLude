import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { PurchaseOrderPageRoutingModule } from './purchase-order-routing.module';

import { PurchaseOrderPage } from './purchase-order.page';
import { SharedModule } from '../module/shared/shared.module';
import { SelectionActionPanelModule } from '../components/selection-action-panel/selection-action-panel.module';
import { ScrollToTopFabModule } from '../components/scroll-to-top-fab/scroll-to-top-fab.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseOrderPageRoutingModule,
    SharedModule,
    TranslateModule,
    SelectionActionPanelModule,
    ScrollToTopFabModule
  ],
  declarations: [PurchaseOrderPage]
})
export class PurchaseOrderPageModule {}

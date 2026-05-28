import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { EditPurchaseOrderPageRoutingModule } from './edit-purchase-order-routing.module';

import { EditPurchaseOrderPage } from './edit-purchase-order.page';
import { SharedModule } from '../module/shared/shared.module';
import { SelectionActionPanelModule } from '../components/selection-action-panel/selection-action-panel.module';
import { ScrollToTopFabModule } from '../components/scroll-to-top-fab/scroll-to-top-fab.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPurchaseOrderPageRoutingModule,
    SharedModule,
    TranslateModule,
    SelectionActionPanelModule,
    ScrollToTopFabModule
  ],
  declarations: [EditPurchaseOrderPage]
})
export class EditPurchaseOrderPageModule {}

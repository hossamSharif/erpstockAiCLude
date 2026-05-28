import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { PurchasePageRoutingModule } from './purchase-routing.module';

import { PurchasePage } from './purchase.page';
import { ShareModule } from '../shareModule/share-module/share-module.module';
import { SharedModule } from '../module/shared/shared.module';
import { FilterPipe } from './pipe';
import { FilterPipe2 } from './pipe2';
import { FilterPipe3 } from './pipe3';
import { SelectionActionPanelModule } from '../components/selection-action-panel/selection-action-panel.module';
import { ScrollToTopFabModule } from '../components/scroll-to-top-fab/scroll-to-top-fab.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ShareModule,
    IonicModule,
    PurchasePageRoutingModule,
    TranslateModule,
    SelectionActionPanelModule,
    ScrollToTopFabModule
  ],
  exports: [PurchasePage],
  declarations: [PurchasePage, FilterPipe, FilterPipe2, FilterPipe3]
})
export class PurchasePageModule {}

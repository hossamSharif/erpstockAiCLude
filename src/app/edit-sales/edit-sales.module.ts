import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { EditSalesPageRoutingModule } from './edit-sales-routing.module';

import { EditSalesPage } from './edit-sales.page';
import { ShareModule } from '../shareModule/share-module/share-module.module';
import { SharedModule } from '../module/shared/shared.module';
import { SelectionActionPanelModule } from '../components/selection-action-panel/selection-action-panel.module';
import { ScrollToTopFabModule } from '../components/scroll-to-top-fab/scroll-to-top-fab.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    SharedModule,
    EditSalesPageRoutingModule,
    TranslateModule,
    SelectionActionPanelModule,
    ScrollToTopFabModule
  ],
  exports: [ ],
  declarations: [EditSalesPage]
})
export class EditSalesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { EditSalesReturnPageRoutingModule } from './edit-sales-return-routing.module';
import { EditSalesReturnPage } from './edit-sales-return.page';
import { SharedModule } from '../module/shared/shared.module';
import { ScrollToTopFabModule } from '../components/scroll-to-top-fab/scroll-to-top-fab.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSalesReturnPageRoutingModule,
    SharedModule
  ,
    TranslateModule,
    ScrollToTopFabModule
  ],
  declarations: [EditSalesReturnPage]
})
export class EditSalesReturnPageModule {}
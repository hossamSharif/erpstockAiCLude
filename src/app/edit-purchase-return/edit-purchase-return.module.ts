import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { EditPurchaseReturnPageRoutingModule } from './edit-purchase-return-routing.module';

import { EditPurchaseReturnPage } from './edit-purchase-return.page';

import { SharedModule } from '../module/shared/shared.module';
import { ScrollToTopFabModule } from '../components/scroll-to-top-fab/scroll-to-top-fab.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPurchaseReturnPageRoutingModule,
    SharedModule
  ,
    TranslateModule,
    ScrollToTopFabModule
  ],
  declarations: [EditPurchaseReturnPage]
})
export class EditPurchaseReturnPageModule {}
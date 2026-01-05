import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { EditPurchaseMobPageRoutingModule } from './edit-purchase-mob-routing.module';

import { EditPurchaseMobPage } from './edit-purchase-mob.page';
import { ShareModule } from '../shareModule/share-module/share-module.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    IonicModule,
    EditPurchaseMobPageRoutingModule
  ,
    TranslateModule
  ],
  declarations: [EditPurchaseMobPage]
})
export class EditPurchaseMobPageModule {}

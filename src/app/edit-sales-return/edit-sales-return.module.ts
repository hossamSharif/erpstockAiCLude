import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditSalesReturnPageRoutingModule } from './edit-sales-return-routing.module';
import { EditSalesReturnPage } from './edit-sales-return.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSalesReturnPageRoutingModule,
    SharedModule
  ],
  declarations: [EditSalesReturnPage]
})
export class EditSalesReturnPageModule {}
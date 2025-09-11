import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FilterPipe } from "../sales/pipe";
import { FilterPipe2 } from "../sales/pipe2";
import { FilterPipe3 } from "../sales/pipe3";
import { SalesReturnPageRoutingModule } from './sales-return-routing.module';
import { ShareModule } from "../shareModule/share-module/share-module.module";
import { SalesReturnPage } from './sales-return.page'; 
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    IonicModule,
    SharedModule, 
    SalesReturnPageRoutingModule 
  ],
  declarations: 
  [
    SalesReturnPage
  ] ,
  providers: [
    DatePipe
  ]
})
export class SalesReturnPageModule {}
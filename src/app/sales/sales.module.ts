import { Component, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FilterPipe } from "./pipe";
import { FilterPipe2 } from "./pipe2";
import { FilterPipe3 } from "./pipe3";
import { SalesPageRoutingModule } from './sales-routing.module';
import { ShareModule } from "../shareModule/share-module/share-module.module";
import { SalesPage } from './sales.page'; 
import { SharedModule } from '../module/shared/shared.module';
import { InsufficientStockDialogComponent } from '../component/insufficient-stock-dialog/insufficient-stock-dialog.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    IonicModule,
    SharedModule,
    SalesPageRoutingModule 
  ],
  declarations: 
  [
    SalesPage,
    FilterPipe,
    FilterPipe2,
    FilterPipe3,
    InsufficientStockDialogComponent
  ] ,
  providers: [
    DatePipe
  ],
exports: [
  FilterPipe,
  FilterPipe2,
  FilterPipe3 
]
})
export class SalesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "./pipe";
import { IonicModule } from '@ionic/angular';
import { ExpenseRecordPageRoutingModule } from './expense-record-routing.module';
import { ExpenseRecordPage } from './expense-record.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseRecordPageRoutingModule,
    SharedModule
  ],
  declarations: [ExpenseRecordPage, FilterPipe],
  exports: [FilterPipe]
})
export class ExpenseRecordPageModule {}

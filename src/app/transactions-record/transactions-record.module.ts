import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsRecordPageRoutingModule } from './transactions-record-routing.module';

import { TransactionsRecordPage } from './transactions-record.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TransactionsRecordPageRoutingModule
  ],
  declarations: [TransactionsRecordPage]
})
export class TransactionsRecordPageModule {}

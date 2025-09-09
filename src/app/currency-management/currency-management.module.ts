import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyManagementPageRoutingModule } from './currency-management-routing.module';

import { CurrencyManagementPage } from './currency-management.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyManagementPageRoutingModule,
    SharedModule
  ],
  declarations: [CurrencyManagementPage]
})
export class CurrencyManagementPageModule {}
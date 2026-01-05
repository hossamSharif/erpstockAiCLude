import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashPageRoutingModule } from './cash-routing.module';

import { CashPage } from './cash.page';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CashPageRoutingModule
  ],
  declarations: [CashPage]
})
export class CashPageModule {}

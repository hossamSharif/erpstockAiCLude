import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubAccount2PageRoutingModule } from './sub-account2-routing.module';

import { SubAccount2Page } from './sub-account2.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubAccount2PageRoutingModule,
    SharedModule
  ],
  declarations: [SubAccount2Page]
})
export class SubAccount2PageModule {}

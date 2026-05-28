import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TswiaRecordPageRoutingModule } from './tswia-record-routing.module';
import { SharedModule } from '../module/shared/shared.module';

import { TswiaRecordPage } from './tswia-record.page';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TswiaRecordPageRoutingModule,
    SharedModule
  ],
  declarations: [TswiaRecordPage]
})
export class TswiaRecordPageModule {}

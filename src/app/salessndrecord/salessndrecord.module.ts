import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalessndrecordPageRoutingModule } from './salessndrecord-routing.module';

import { SalessndrecordPage } from './salessndrecord.page';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SalessndrecordPageRoutingModule
  ],
  declarations: [SalessndrecordPage]
})
export class SalessndrecordPageModule {}

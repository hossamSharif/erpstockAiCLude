import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { Statement2PageRoutingModule } from './statement2-routing.module';

import { Statement2Page } from './statement2.page';
import { SharedModule } from '../module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Statement2PageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [Statement2Page]
})
export class Statement2PageModule {}

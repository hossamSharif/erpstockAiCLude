import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpendsPageRoutingModule } from './spends-routing.module';

import { SpendsPage } from './spends.page';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SpendsPageRoutingModule
  ],
  declarations: [SpendsPage]
})
export class SpendsPageModule {}

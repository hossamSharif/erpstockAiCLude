import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchsndPageRoutingModule } from './purchsnd-routing.module';

import { PurchsndPage } from './purchsnd.page';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PurchsndPageRoutingModule
  ],
  declarations: [PurchsndPage]
})
export class PurchsndPageModule {}

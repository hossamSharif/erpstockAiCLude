import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { BulkPriceUpdateModalComponent } from './bulk-price-update-modal.component';

@NgModule({
  declarations: [
    BulkPriceUpdateModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule
  ],
  exports: [
    BulkPriceUpdateModalComponent
  ]
})
export class BulkPriceUpdateModalModule { }

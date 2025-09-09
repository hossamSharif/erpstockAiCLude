import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { CurrencyDisplayPipe } from 'src/app/pipes/currency-display.pipe';
  
@NgModule({
  declarations: [ DateAgoPipe, CurrencyDisplayPipe ],
  imports: [
    CommonModule
  ],
  exports:[DateAgoPipe, CurrencyDisplayPipe ]
 
})
export class ShareModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import all pipes
import { DateAgoPipe } from './date-ago.pipe';
import { CurrencyDisplayPipe } from './currency-display.pipe';
import { Nl2brPipe } from './nl2br.pipe';

@NgModule({
  declarations: [
    DateAgoPipe,
    CurrencyDisplayPipe,
    Nl2brPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateAgoPipe,
    CurrencyDisplayPipe,
    Nl2brPipe
  ]
})
export class PipesModule { }

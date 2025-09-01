import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'currencyDisplay',
  pure: false // Make it impure to react to currency changes
})
export class CurrencyDisplayPipe implements PipeTransform {

  constructor(private currencyService: CurrencyService) {}
  
  transform(value: number, fromCurrency: string = 'SDG'): string {
    if (!value && value !== 0) return '0.00';
    if (isNaN(value)) return '0.00';
    
    const currentCurrency = this.currencyService.getCurrentCurrencyValue();
    let convertedAmount = value;
    
    // Convert to current currency if needed
    if (fromCurrency !== currentCurrency) {
      convertedAmount = this.currencyService.convertToCurrentCurrency(value, fromCurrency);
    }
    
    return this.currencyService.formatCurrency(convertedAmount, currentCurrency);
  }
}
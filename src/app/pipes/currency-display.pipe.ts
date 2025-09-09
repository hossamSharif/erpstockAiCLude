import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'currencyDisplay',
  pure: false // Make it impure to react to currency changes
})
export class CurrencyDisplayPipe implements PipeTransform {

  constructor(private currencyService: CurrencyService) {}
  
  transform(value: number, fromCurrency: string = 'SDG', showSymbol: boolean = true): string {
    if (!value && value !== 0) return showSymbol ? '0.00' : '0.00';
    if (isNaN(value)) return showSymbol ? '0.00' : '0.00';
    
    try {
      const currentCurrency = this.currencyService.getCurrentCurrencyValue();
      let convertedAmount = value;
      
      // Convert to current currency if needed
      if (fromCurrency !== currentCurrency) {
        convertedAmount = this.currencyService.convertToCurrentCurrency(value, fromCurrency);
      }
      
      if (showSymbol) {
        return this.currencyService.formatCurrency(convertedAmount, currentCurrency);
      } else {
        // Return formatted number without currency symbol
        return convertedAmount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
    } catch (error) {
      console.error('Currency display pipe error:', error);
      // Fallback to simple number formatting
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value);
      
      return showSymbol ? formattedNumber + ' ج.س' : formattedNumber;
    }
  }
}
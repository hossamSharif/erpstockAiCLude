import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.scss'],
  standalone: false
})
export class CurrencySwitcherComponent implements OnInit, OnDestroy {
  selectedCurrency: string = 'SDG';
  supportedCurrencies: any[] = [];
  private subscription: Subscription = new Subscription();
  
  constructor(private currencyService: CurrencyService) {}
  
  ngOnInit() {
    // Load supported currencies
    this.loadSupportedCurrencies();
    
    // Subscribe to currency changes
    this.subscription.add(
      this.currencyService.getCurrentCurrency().subscribe(currency => {
        this.selectedCurrency = currency;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private loadSupportedCurrencies() {
    this.subscription.add(
      this.currencyService.getActiveCurrencies().subscribe(response => {
        if (response && response.data) {
          this.supportedCurrencies = response.data;
        }
      }, error => {
        console.error('Error loading currencies:', error);
        // Fallback currencies
        this.supportedCurrencies = [
          { currency_code: 'SDG', currency_name_ar: 'جنيه سوداني', currency_symbol: 'ج.س' },
          { currency_code: 'USD', currency_name_ar: 'دولار أمريكي', currency_symbol: '$' },
          { currency_code: 'AED', currency_name_ar: 'درهم إماراتي', currency_symbol: 'د.إ' },
          { currency_code: 'SAR', currency_name_ar: 'ريال سعودي', currency_symbol: 'ر.س' }
        ];
      })
    );
  }
  
  onCurrencyChange() {
    this.currencyService.setCurrency(this.selectedCurrency);
  }

  getCurrencyDisplayText(currency: any): string {
    return `${currency.currency_name_ar} (${currency.currency_code})`;
  }
}
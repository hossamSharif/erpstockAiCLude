import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ServicesService } from '../stockService/services.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  // State Management
  private currentCurrency = new BehaviorSubject<string>('SDG');
  private currentYear = new BehaviorSubject<any>(null);
  private exchangeRates = new BehaviorSubject<any>({});
  private supportedCurrencies = new BehaviorSubject<any[]>([]);
  private ratesCache = new Map<string, any>();
  private api: string;

  constructor(
    private http: HttpClient, 
    private storage: Storage,
    private servicesService: ServicesService
  ) {
    this.api = this.servicesService.api;
  }

  // Currency Selection
  getCurrentCurrency(): Observable<string> {
    return this.currentCurrency.asObservable();
  }
  
  getCurrentCurrencyValue(): string {
    return this.currentCurrency.value;
  }
  
  setCurrency(currency: string): void {
    this.currentCurrency.next(currency);
    this.storage.set('selectedCurrency', currency);
  }
  
  // Year Integration
  setCurrentYear(year: any): void {
    this.currentYear.next(year);
  }
  
  async loadRatesByYear(store_id: any, year_id: any): Promise<any> {
    try {
      const params = new HttpParams()
        .set('store_id', store_id)
        .set('year_id', year_id);
      
      const response = await this.http.get(this.api + 'currency_rates/latest.php', {params}).toPromise();
      
      if (response && response['data']) {
        this.cacheRates(response['data'], year_id);
        this.exchangeRates.next(response['data']);
      }
      
      return response;
    } catch (error) {
      console.error('Error loading currency rates:', error);
      return null;
    }
  }
  
  // Rate Management
  getExchangeRate(targetCurrency: string): number {
    if (targetCurrency === 'SDG') return 1.0;
    
    const rates = this.exchangeRates.value;
    if (Array.isArray(rates)) {
      const rate = rates.find(r => r.target_currency === targetCurrency);
      return rate ? parseFloat(rate.exchange_rate) : 1.0;
    }
    return 1.0;
  }
  
  createCurrencyRate(rateData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api + 'currency_rates/create.php', rateData, httpOptions);
  }
  
  getCurrencyRates(filters: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });
    
    return this.http.get(this.api + 'currency_rates/read.php', {params});
  }
  
  updateCurrencyRate(id: any, rateData: any): Observable<any> {
    const payload = {id, ...rateData};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    return this.http.put(this.api + 'currency_rates/update.php', payload, httpOptions);
  }
  
  deleteCurrencyRate(id: any): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.api + 'currency_rates/delete.php', {params});
  }

  // Get nearest rate for specific currency and date
  getNearestRate(currency: string, date: string, store_id: any, year_id: any): Observable<any> {
    const params = new HttpParams()
      .set('currency', currency)
      .set('date', date)
      .set('store_id', store_id)
      .set('year_id', year_id);
      
    return this.http.get(this.api + 'currency_rates/nearestDate.php', {params});
  }
  
  // Currency Conversion
  convertFromSDG(amount: number, targetCurrency: string): number {
    if (targetCurrency === 'SDG' || !amount) return amount;
    const rate = this.getExchangeRate(targetCurrency);
    return amount / rate; // Convert SDG to target currency
  }
  
  convertToSDG(amount: number, fromCurrency: string): number {
    if (fromCurrency === 'SDG' || !amount) return amount;
    const rate = this.getExchangeRate(fromCurrency);
    return amount * rate; // Convert from currency to SDG
  }
  
  // Formatting
  formatCurrency(amount: number, currency: string): string {
    const symbols = {
      'SDG': 'ج.س',
      'USD': '$',
      'AED': 'د.إ',
      'SAR': 'ر.س'
    };
    // Use 'en-US' locale to ensure English numerals are displayed
    return `${amount.toLocaleString('en-US', {minimumFractionDigits: 2})} ${symbols[currency] || currency}`;
  }
  
  // Supported Currencies
  getSupportedCurrencies(): Observable<any> {
    return this.http.get(this.api + 'currencies/read.php');
  }


  getActiveCurrencies(): Observable<any> {
    const params = new HttpParams().set('active_only', 'true');
    return this.http.get(this.api + 'currencies/read.php', {params});
  }
  
  addSupportedCurrency(currencyData: any): Observable<any> {
    return this.http.post(this.api + 'currencies/create.php', currencyData);
  }
  
  updateSupportedCurrency(id: any, currencyData: any): Observable<any> {
    return this.http.put(this.api + 'currencies/update.php', {id, ...currencyData});
  }

  deleteSupportedCurrency(id: any): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.api + 'currencies/delete.php', {params});
  }
  
  // Cache Management
  private cacheKey(currency: string, date: string, year_id: any): string {
    return `${currency}_${date}_${year_id}`;
  }
  
  private cacheRates(rates: any[], year_id: any): void {
    if (Array.isArray(rates)) {
      rates.forEach(rate => {
        const key = this.cacheKey(rate.target_currency, rate.rate_date, year_id);
        this.ratesCache.set(key, rate);
      });
    }
  }

  // Get cached rate
  getCachedRate(currency: string, date: string, year_id: any): any {
    const key = this.cacheKey(currency, date, year_id);
    return this.ratesCache.get(key);
  }

  // Clear cache
  clearCache(): void {
    this.ratesCache.clear();
  }
  
  // Initialize currency from storage
  async initializeCurrency(): Promise<void> {
    try {
      await this.storage.create();
      const savedCurrency = await this.storage.get('selectedCurrency');
      if (savedCurrency) {
        this.currentCurrency.next(savedCurrency);
      }
    } catch (error) {
      console.error('Error initializing currency:', error);
    }
  }

  // Get current exchange rates observable
  getCurrentExchangeRates(): Observable<any> {
    return this.exchangeRates.asObservable();
  }

  // Get supported currencies observable
  getSupportedCurrenciesObservable(): Observable<any[]> {
    return this.supportedCurrencies.asObservable();
  }

  // Load and cache supported currencies
  async loadSupportedCurrencies(): Promise<void> {
    try {
      const response = await this.getSupportedCurrencies().toPromise();
      if (response && response.data) {
        this.supportedCurrencies.next(response.data);
      }
    } catch (error) {
      console.error('Error loading supported currencies:', error);
    }
  }

  // Format number according to current currency
  formatAmount(amount: number, currency?: string): string {
    const currentCurrency = currency || this.getCurrentCurrencyValue();
    let convertedAmount = amount;

    // Convert from SDG to current currency if needed
    if (currentCurrency !== 'SDG') {
      convertedAmount = this.convertFromSDG(amount, currentCurrency);
    }

    return this.formatCurrency(convertedAmount, currentCurrency);
  }

  // Convert any amount to current currency
  convertToCurrentCurrency(amount: number, fromCurrency: string = 'SDG'): number {
    const currentCurrency = this.getCurrentCurrencyValue();
    
    if (fromCurrency === currentCurrency) {
      return amount;
    }

    if (fromCurrency === 'SDG') {
      return this.convertFromSDG(amount, currentCurrency);
    } else if (currentCurrency === 'SDG') {
      return this.convertToSDG(amount, fromCurrency);
    } else {
      // Convert from source currency to SDG, then to target currency
      const sdgAmount = this.convertToSDG(amount, fromCurrency);
      return this.convertFromSDG(sdgAmount, currentCurrency);
    }
  }

  // Get current currency symbol
  getCurrentCurrencySymbol(): string {
    const currentCurrency = this.getCurrentCurrencyValue();
    const symbols = {
      'SDG': 'ج.س',
      'USD': '$',
      'AED': 'د.إ',
      'SAR': 'ر.س'
    };
    return symbols[currentCurrency] || currentCurrency;
  }

  // Get currency symbol for header display
  getCurrentCurrencySymbolForHeader(labelText: string): string {
    const symbol = this.getCurrentCurrencySymbol();
    return `${labelText} (${symbol})`;
  }

  // Format number without currency symbol (for table cells)
  formatAmountWithoutSymbol(amount: number, currency?: string): string {
    const currentCurrency = currency || this.getCurrentCurrencyValue();
    let convertedAmount = amount;

    // Convert from SDG to current currency if needed
    if (currentCurrency !== 'SDG') {
      convertedAmount = this.convertFromSDG(amount, currentCurrency);
    }

    return convertedAmount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
}
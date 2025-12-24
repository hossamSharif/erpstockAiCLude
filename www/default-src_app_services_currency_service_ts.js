"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_currency_service_ts"],{

/***/ 6612:
/*!**********************************************!*\
  !*** ./src/app/services/currency.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyService": () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 18406);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stockService/services.service */ 91472);






let CurrencyService = class CurrencyService {
    constructor(http, storage, servicesService) {
        this.http = http;
        this.storage = storage;
        this.servicesService = servicesService;
        // State Management
        this.currentCurrency = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('SDG');
        this.currentYear = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.exchangeRates = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.supportedCurrencies = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.ratesCache = new Map();
        this.api = this.servicesService.api;
    }
    // Currency Selection
    getCurrentCurrency() {
        return this.currentCurrency.asObservable();
    }
    getCurrentCurrencyValue() {
        return this.currentCurrency.value;
    }
    setCurrency(currency) {
        this.currentCurrency.next(currency);
        this.storage.set('selectedCurrency', currency);
    }
    // Year Integration
    setCurrentYear(year) {
        this.currentYear.next(year);
    }
    loadRatesByYear(store_id, year_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
                    .set('store_id', store_id)
                    .set('year_id', year_id);
                const response = yield this.http.get(this.api + 'currency_rates/latest.php', { params }).toPromise();
                if (response && response['data']) {
                    this.cacheRates(response['data'], year_id);
                    this.exchangeRates.next(response['data']);
                }
                return response;
            }
            catch (error) {
                console.error('Error loading currency rates:', error);
                return null;
            }
        });
    }
    // Rate Management
    getExchangeRate(targetCurrency) {
        if (targetCurrency === 'SDG')
            return 1.0;
        const rates = this.exchangeRates.value;
        if (Array.isArray(rates)) {
            const rate = rates.find(r => r.target_currency === targetCurrency);
            return rate ? parseFloat(rate.exchange_rate) : 1.0;
        }
        return 1.0;
    }
    createCurrencyRate(rateData) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.api + 'currency_rates/create.php', rateData, httpOptions);
    }
    getCurrencyRates(filters) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        Object.keys(filters).forEach(key => {
            if (filters[key]) {
                params = params.set(key, filters[key]);
            }
        });
        return this.http.get(this.api + 'currency_rates/read.php', { params });
    }
    updateCurrencyRate(id, rateData) {
        const payload = Object.assign({ id }, rateData);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(this.api + 'currency_rates/update.php', payload, httpOptions);
    }
    deleteCurrencyRate(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('id', id);
        return this.http.delete(this.api + 'currency_rates/delete.php', { params });
    }
    // Get nearest rate for specific currency and date
    getNearestRate(currency, date, store_id, year_id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
            .set('currency', currency)
            .set('date', date)
            .set('store_id', store_id)
            .set('year_id', year_id);
        return this.http.get(this.api + 'currency_rates/nearestDate.php', { params });
    }
    // Currency Conversion
    convertFromSDG(amount, targetCurrency) {
        if (targetCurrency === 'SDG' || !amount)
            return amount;
        const rate = this.getExchangeRate(targetCurrency);
        return amount / rate; // Convert SDG to target currency
    }
    convertToSDG(amount, fromCurrency) {
        if (fromCurrency === 'SDG' || !amount)
            return amount;
        const rate = this.getExchangeRate(fromCurrency);
        return amount * rate; // Convert from currency to SDG
    }
    // Formatting
    formatCurrency(amount, currency) {
        const symbols = {
            'SDG': 'ج.س',
            'USD': '$',
            'AED': 'د.إ',
            'SAR': 'ر.س'
        };
        // Use 'en-US' locale to ensure English numerals are displayed
        return `${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} ${symbols[currency] || currency}`;
    }
    // Supported Currencies
    getSupportedCurrencies() {
        return this.http.get(this.api + 'currencies/read.php');
    }
    getActiveCurrencies() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('active_only', 'true');
        return this.http.get(this.api + 'currencies/read.php', { params });
    }
    addSupportedCurrency(currencyData) {
        return this.http.post(this.api + 'currencies/create.php', currencyData);
    }
    updateSupportedCurrency(id, currencyData) {
        return this.http.put(this.api + 'currencies/update.php', Object.assign({ id }, currencyData));
    }
    deleteSupportedCurrency(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('id', id);
        return this.http.delete(this.api + 'currencies/delete.php', { params });
    }
    // Cache Management
    cacheKey(currency, date, year_id) {
        return `${currency}_${date}_${year_id}`;
    }
    cacheRates(rates, year_id) {
        if (Array.isArray(rates)) {
            rates.forEach(rate => {
                const key = this.cacheKey(rate.target_currency, rate.rate_date, year_id);
                this.ratesCache.set(key, rate);
            });
        }
    }
    // Get cached rate
    getCachedRate(currency, date, year_id) {
        const key = this.cacheKey(currency, date, year_id);
        return this.ratesCache.get(key);
    }
    // Clear cache
    clearCache() {
        this.ratesCache.clear();
    }
    // Initialize currency from storage
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.storage.create();
                const savedCurrency = yield this.storage.get('selectedCurrency');
                if (savedCurrency) {
                    this.currentCurrency.next(savedCurrency);
                }
            }
            catch (error) {
                console.error('Error initializing currency:', error);
            }
        });
    }
    // Get current exchange rates observable
    getCurrentExchangeRates() {
        return this.exchangeRates.asObservable();
    }
    // Get supported currencies observable
    getSupportedCurrenciesObservable() {
        return this.supportedCurrencies.asObservable();
    }
    // Load and cache supported currencies
    loadSupportedCurrencies() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield this.getSupportedCurrencies().toPromise();
                if (response && response.data) {
                    this.supportedCurrencies.next(response.data);
                }
            }
            catch (error) {
                console.error('Error loading supported currencies:', error);
            }
        });
    }
    // Format number according to current currency
    formatAmount(amount, currency) {
        const currentCurrency = currency || this.getCurrentCurrencyValue();
        let convertedAmount = amount;
        // Convert from SDG to current currency if needed
        if (currentCurrency !== 'SDG') {
            convertedAmount = this.convertFromSDG(amount, currentCurrency);
        }
        return this.formatCurrency(convertedAmount, currentCurrency);
    }
    // Convert any amount to current currency
    convertToCurrentCurrency(amount, fromCurrency = 'SDG') {
        const currentCurrency = this.getCurrentCurrencyValue();
        if (fromCurrency === currentCurrency) {
            return amount;
        }
        if (fromCurrency === 'SDG') {
            return this.convertFromSDG(amount, currentCurrency);
        }
        else if (currentCurrency === 'SDG') {
            return this.convertToSDG(amount, fromCurrency);
        }
        else {
            // Convert from source currency to SDG, then to target currency
            const sdgAmount = this.convertToSDG(amount, fromCurrency);
            return this.convertFromSDG(sdgAmount, currentCurrency);
        }
    }
    // Get current currency symbol
    getCurrentCurrencySymbol() {
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
    getCurrentCurrencySymbolForHeader(labelText) {
        const symbol = this.getCurrentCurrencySymbol();
        return `${labelText} (${symbol})`;
    }
    // Format number without currency symbol (for table cells)
    formatAmountWithoutSymbol(amount, currency) {
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
};
CurrencyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_1__.ServicesService }
];
CurrencyService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], CurrencyService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_currency_service_ts.js.map
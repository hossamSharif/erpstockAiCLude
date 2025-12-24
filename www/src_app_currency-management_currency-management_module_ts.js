"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_currency-management_currency-management_module_ts"],{

/***/ 55871:
/*!***************************************************************************!*\
  !*** ./src/app/currency-management/currency-management-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyManagementPageRoutingModule": () => (/* binding */ CurrencyManagementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _currency_management_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-management.page */ 46550);




const routes = [
    {
        path: '',
        component: _currency_management_page__WEBPACK_IMPORTED_MODULE_0__.CurrencyManagementPage
    }
];
let CurrencyManagementPageRoutingModule = class CurrencyManagementPageRoutingModule {
};
CurrencyManagementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CurrencyManagementPageRoutingModule);



/***/ }),

/***/ 72043:
/*!*******************************************************************!*\
  !*** ./src/app/currency-management/currency-management.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyManagementPageModule": () => (/* binding */ CurrencyManagementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _currency_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-management-routing.module */ 55871);
/* harmony import */ var _currency_management_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-management.page */ 46550);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let CurrencyManagementPageModule = class CurrencyManagementPageModule {
};
CurrencyManagementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _currency_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.CurrencyManagementPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_currency_management_page__WEBPACK_IMPORTED_MODULE_1__.CurrencyManagementPage]
    })
], CurrencyManagementPageModule);



/***/ }),

/***/ 46550:
/*!*****************************************************************!*\
  !*** ./src/app/currency-management/currency-management.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyManagementPage": () => (/* binding */ CurrencyManagementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _currency_management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-management.page.html?ngResource */ 19085);
/* harmony import */ var _currency_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-management.page.scss?ngResource */ 81921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/currency.service */ 6612);
/* harmony import */ var _components_currency_rate_modal_currency_rate_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/currency-rate-modal/currency-rate-modal.component */ 30504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 75755);











let CurrencyManagementPage = class CurrencyManagementPage {
    constructor(route, alertController, storage, loadingController, api, toast, currencyService, modalController) {
        this.route = route;
        this.alertController = alertController;
        this.storage = storage;
        this.loadingController = loadingController;
        this.api = api;
        this.toast = toast;
        this.currencyService = currencyService;
        this.modalController = modalController;
        this.currencies = [];
        this.rates = [];
        this.currentCurrency = 'SDG';
        this.isLoading = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAppInfo();
            yield this.initializeCurrency();
            yield this.loadCurrencies();
            this.loadRates();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.currencyService.initializeCurrency();
                this.subscription.add(this.currencyService.getCurrentCurrency().subscribe(currency => {
                    this.currentCurrency = currency;
                }));
            }
            catch (error) {
                console.error('Error initializing currency:', error);
            }
        });
    }
    getAppInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user_info = yield this.storage.get('USER_INFO');
            this.year = yield this.storage.get('year');
            this.store_info = yield this.storage.get('STORE_INFO');
        });
    }
    loadCurrencies() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                yield this.currencyService.loadSupportedCurrencies();
                this.subscription.add(this.currencyService.getSupportedCurrenciesObservable().subscribe(currencies => {
                    this.currencies = currencies;
                    // Add fallback currencies if none loaded
                    if (!this.currencies || this.currencies.length === 0) {
                        this.currencies = [
                            {
                                id: 1,
                                currency_code: 'USD',
                                currency_name_ar: 'دولار أمريكي',
                                currency_name_en: 'US Dollar',
                                currency_symbol: '$',
                                is_active: true
                            },
                            {
                                id: 2,
                                currency_code: 'AED',
                                currency_name_ar: 'درهم إماراتي',
                                currency_name_en: 'UAE Dirham',
                                currency_symbol: 'د.إ',
                                is_active: true
                            },
                            {
                                id: 3,
                                currency_code: 'SAR',
                                currency_name_ar: 'ريال سعودي',
                                currency_name_en: 'Saudi Riyal',
                                currency_symbol: 'ر.س',
                                is_active: true
                            },
                            {
                                id: 4,
                                currency_code: 'SDG',
                                currency_name_ar: 'جنيه سوداني',
                                currency_name_en: 'Sudanese Pound',
                                currency_symbol: 'ج.س',
                                is_active: true
                            }
                        ];
                    }
                }));
            }
            catch (error) {
                this.presentToast('خطأ في تحميل العملات', 'danger');
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    loadRates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.store_info || !this.year) {
                return;
            }
            try {
                yield this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
                this.subscription.add(this.currencyService.getCurrentExchangeRates().subscribe(rates => {
                    if (Array.isArray(rates)) {
                        // If rates is an array of rate objects - preserve all original fields
                        this.rates = rates.map(rate => (Object.assign(Object.assign({}, rate), { currency: rate.target_currency || rate.currency, rate: rate.exchange_rate || rate.rate, currency_info: this.currencies.find(c => c.currency_code === (rate.target_currency || rate.currency)) })));
                    }
                    else if (rates && typeof rates === 'object') {
                        // If rates is an object with currency keys
                        this.rates = Object.entries(rates).map(([currency, rate]) => ({
                            currency,
                            rate,
                            currency_info: this.currencies.find(c => c.currency_code === currency)
                        }));
                    }
                    else {
                        this.rates = [];
                    }
                }));
            }
            catch (error) {
                this.presentToast('خطأ في تحميل أسعار الصرف', 'danger');
            }
        });
    }
    openRateModal(rateOrCurrency) {
        var _a, _b, _c, _d, _e, _f;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let mode = 'create';
            let rateData = null;
            // Check if this is an edit operation (full rate object) or create (just currency string)
            if (rateOrCurrency && typeof rateOrCurrency === 'object' && rateOrCurrency.currency) {
                // For rate objects (even without database IDs), treat as edit mode since we're updating existing rates
                mode = 'edit';
                rateData = {
                    id: rateOrCurrency.id || null,
                    base_currency: rateOrCurrency.base_currency || 'SDG',
                    target_currency: rateOrCurrency.target_currency || rateOrCurrency.currency,
                    exchange_rate: rateOrCurrency.exchange_rate || this.getRateValue(rateOrCurrency.rate),
                    rate_date: rateOrCurrency.rate_date || new Date().toISOString().split('T')[0],
                    store_id: rateOrCurrency.store_id || ((_a = this.store_info) === null || _a === void 0 ? void 0 : _a.id),
                    year_id: rateOrCurrency.year_id || ((_b = this.year) === null || _b === void 0 ? void 0 : _b.id)
                };
            }
            else if (rateOrCurrency && typeof rateOrCurrency === 'string') {
                // For create mode with pre-selected currency
                rateData = {
                    base_currency: 'SDG',
                    target_currency: rateOrCurrency,
                    exchange_rate: 0,
                    rate_date: new Date().toISOString().split('T')[0],
                    store_id: (_c = this.store_info) === null || _c === void 0 ? void 0 : _c.id,
                    year_id: (_d = this.year) === null || _d === void 0 ? void 0 : _d.id
                };
            }
            else {
                // For create mode without pre-selected currency
                rateData = {
                    base_currency: 'SDG',
                    target_currency: '',
                    exchange_rate: 0,
                    rate_date: new Date().toISOString().split('T')[0],
                    store_id: (_e = this.store_info) === null || _e === void 0 ? void 0 : _e.id,
                    year_id: (_f = this.year) === null || _f === void 0 ? void 0 : _f.id
                };
            }
            const modal = yield this.modalController.create({
                component: _components_currency_rate_modal_currency_rate_modal_component__WEBPACK_IMPORTED_MODULE_5__.CurrencyRateModalComponent,
                componentProps: {
                    mode: mode,
                    rateData: rateData,
                    store_info: this.store_info,
                    year: this.year
                }
            });
            modal.onDidDismiss().then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                var _g, _h;
                if ((_g = result.data) === null || _g === void 0 ? void 0 : _g.saved) {
                    yield this.refreshRates();
                    this.presentToast('تم حفظ سعر الصرف بنجاح', 'success');
                }
                else if ((_h = result.data) === null || _h === void 0 ? void 0 : _h.deleted) {
                    yield this.refreshRates();
                    this.presentToast('تم حذف سعر الصرف بنجاح', 'success');
                }
            }));
            return yield modal.present();
        });
    }
    deleteRate(rate) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!(rate === null || rate === void 0 ? void 0 : rate.id)) {
                this.presentToast('لا يمكن حذف سعر صرف غير محفوظ', 'warning');
                return;
            }
            const alert = yield this.alertController.create({
                header: 'تأكيد الحذف',
                message: `هل أنت متأكد من حذف سعر صرف ${rate.currency}؟ لا يمكن التراجع عن هذا الإجراء.`,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel'
                    },
                    {
                        text: 'حذف',
                        cssClass: 'danger-button',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            const loading = yield this.loadingController.create({
                                message: 'جاري حذف سعر الصرف...'
                            });
                            yield loading.present();
                            try {
                                this.currencyService.deleteCurrencyRate(rate.id).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                    yield loading.dismiss();
                                    if (response && response.status === 'success') {
                                        // Refresh rates from server
                                        yield this.refreshRates();
                                        this.presentToast('تم حذف سعر الصرف بنجاح', 'success');
                                    }
                                    else {
                                        this.presentToast('حدث خطأ أثناء حذف سعر الصرف', 'danger');
                                    }
                                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                    yield loading.dismiss();
                                    console.error('Error deleting rate:', error);
                                    this.presentToast('حدث خطأ أثناء حذف سعر الصرف', 'danger');
                                }));
                            }
                            catch (error) {
                                yield loading.dismiss();
                                console.error('Error in delete method:', error);
                                this.presentToast('حدث خطأ غير متوقع', 'danger');
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    toggleCurrencyStatus(currency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'تأكيد',
                message: `هل تريد ${currency.is_active ? 'إلغاء تفعيل' : 'تفعيل'} عملة ${currency.currency_name_ar}؟`,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel'
                    },
                    {
                        text: 'تأكيد',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                const loading = yield this.loadingController.create({
                                    message: 'جاري التحديث...'
                                });
                                yield loading.present();
                                const updatedCurrency = Object.assign(Object.assign({}, currency), { is_active: !currency.is_active });
                                // Call API to update currency status
                                this.currencyService.updateSupportedCurrency(updatedCurrency.id, updatedCurrency).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                    yield loading.dismiss();
                                    console.log('Currency update response:', response);
                                    if (response && response.status === 'success') {
                                        this.loadCurrencies();
                                        this.presentToast('تم تحديث حالة العملة بنجاح', 'success');
                                    }
                                    else {
                                        this.presentToast('خطأ في تحديث حالة العملة', 'danger');
                                    }
                                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                                    yield loading.dismiss();
                                    console.error('Currency update error:', error);
                                    this.presentToast('خطأ في تحديث حالة العملة', 'danger');
                                }));
                            }
                            catch (error) {
                                this.presentToast('خطأ في تحديث حالة العملة', 'danger');
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    setCurrency(currency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.currencyService.setCurrency(currency);
            this.presentToast(`تم تغيير العملة إلى ${this.getCurrencyName(currency)}`, 'success');
        });
    }
    getCurrencyName(code) {
        const currency = this.currencies.find(c => c.currency_code === code);
        return currency ? currency.currency_name_ar : code;
    }
    getExchangeRate(currency) {
        return this.currencyService.getExchangeRate(currency);
    }
    formatCurrency(amount, currency) {
        const formatted = this.currencyService.formatCurrency(amount, currency);
        return this.convertToEnglishNumbers(formatted);
    }
    getRateValue(rate) {
        if (typeof rate === 'number') {
            return rate;
        }
        else if (typeof rate === 'string') {
            return parseFloat(rate) || 0;
        }
        else if (typeof rate === 'object' && rate !== null) {
            // If rate is an object, try to extract the rate value
            return parseFloat(rate.exchange_rate || rate.rate || rate.value || '0') || 0;
        }
        return 0;
    }
    // Convert Arabic numbers to English numbers
    convertToEnglishNumbers(text) {
        if (!text)
            return text;
        const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let result = text.toString();
        for (let i = 0; i < arabicNumbers.length; i++) {
            result = result.replace(new RegExp(arabicNumbers[i], 'g'), englishNumbers[i]);
        }
        return result;
    }
    // Format number with English digits only
    formatNumberEnglish(value, decimalPlaces = 6) {
        if (value === null || value === undefined)
            return '0';
        const formattedNumber = value.toLocaleString('en-US', {
            minimumFractionDigits: decimalPlaces === 0 ? 0 : 2,
            maximumFractionDigits: decimalPlaces
        });
        return this.convertToEnglishNumbers(formattedNumber);
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: color,
                cssClass: 'cust_Toast',
                mode: 'ios',
                position: 'top'
            });
            toast.present();
        });
    }
    refreshRates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.store_info || !this.year)
                return;
            try {
                this.isLoading = true;
                yield this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
                this.loadRates();
                this.presentToast('تم تحديث أسعار الصرف', 'success');
            }
            catch (error) {
                this.presentToast('خطأ في تحديث أسعار الصرف', 'danger');
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    goBack() {
        this.route.navigate(['/analytics-dashboard']);
    }
};
CurrencyManagementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_3__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_4__.CurrencyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
CurrencyManagementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-currency-management',
        template: _currency_management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_currency_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyManagementPage);



/***/ }),

/***/ 81921:
/*!******************************************************************************!*\
  !*** ./src/app/currency-management/currency-management.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".current-currency-display ion-item {\n  --background: linear-gradient(135deg, var(--ion-color-primary-tint), var(--ion-color-primary));\n  --color: white;\n  border-radius: 12px;\n}\n\n.currency-avatar {\n  width: 40px;\n  height: 40px;\n  background: var(--ion-color-secondary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.currency-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.section-header h5 {\n  margin: 0;\n}\n\n.rate-display {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.exchange-rate-display {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.95rem;\n  margin-top: 4px;\n}\n\n.exchange-rate-display .currency-from {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  min-width: 60px;\n}\n\n.exchange-rate-display .equals {\n  color: var(--ion-color-medium);\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n\n.exchange-rate-display .currency-to {\n  color: var(--ion-color-success);\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n  letter-spacing: 0.5px;\n}\n\n.conversion-rate-display {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n}\n\n.conversion-rate-display .converted-amount {\n  color: var(--ion-color-success);\n  font-weight: 700;\n  font-size: 1.1rem;\n  font-family: \"Courier New\", monospace;\n  letter-spacing: 0.5px;\n}\n\n.conversion-rate-display .currency-name {\n  color: var(--ion-color-medium);\n  font-size: 0.85rem;\n  font-weight: 400;\n}\n\n.empty-state {\n  text-align: center;\n  padding: 2rem 1rem;\n  width: 100%;\n}\n\n.empty-state ion-icon {\n  margin-bottom: 1rem;\n}\n\n.empty-state h4 {\n  color: var(--ion-color-medium);\n  margin-bottom: 0.5rem;\n}\n\n.empty-state p {\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n\n.conversion-example .conversion-item h4 {\n  color: var(--ion-color-primary);\n  margin-bottom: 0.25rem;\n}\n\n.conversion-example .conversion-item p {\n  color: var(--ion-color-medium);\n  margin: 0;\n  font-size: 0.9rem;\n}\n\n.conversion-example .conversion-results .conversion-result {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.conversion-example .conversion-results .conversion-result:last-child {\n  border-bottom: none;\n}\n\n.conversion-example .conversion-results .conversion-result strong {\n  color: var(--ion-color-success);\n}\n\n.conversion-example .conversion-results .conversion-result span {\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n\nion-card {\n  margin: 1rem 0;\n}\n\nion-list {\n  padding: 0;\n}\n\nion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\nion-chip {\n  --color: white;\n}\n\nh5 {\n  color: var(--ion-color-dark);\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n[dir=rtl] .section-header {\n  direction: rtl;\n}\n\n[dir=rtl] .currency-actions {\n  direction: rtl;\n}\n\n[dir=rtl] .rate-display {\n  direction: rtl;\n}\n\n[dir=rtl] .exchange-rate-display {\n  direction: rtl;\n}\n\n[dir=rtl] .exchange-rate-display .currency-from {\n  text-align: right;\n}\n\n[dir=rtl] .exchange-rate-display .currency-to {\n  text-align: left;\n}\n\n[dir=rtl] .conversion-results {\n  direction: rtl;\n}\n\n[dir=rtl] .conversion-rate-display {\n  align-items: flex-end;\n}\n\n[dir=rtl] .conversion-rate-display .converted-amount {\n  text-align: left;\n}\n\n[dir=rtl] .conversion-rate-display .currency-name {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbmN5LW1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsOEZBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdFO0VBQ0UsU0FBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUZGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQUtFO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9FO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7QUFMSjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQVBGOztBQVNFO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtBQVBKOztBQVVFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVRGOztBQVdFO0VBQ0UsbUJBQUE7QUFUSjs7QUFZRTtFQUNFLDhCQUFBO0VBQ0EscUJBQUE7QUFWSjs7QUFhRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUFYSjs7QUFpQkk7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0FBZE47O0FBaUJJO0VBQ0UsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFmTjs7QUFvQkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7QUFsQk47O0FBb0JNO0VBQ0UsbUJBQUE7QUFsQlI7O0FBcUJNO0VBQ0UsK0JBQUE7QUFuQlI7O0FBc0JNO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQXBCUjs7QUEwQkE7RUFDRSxjQUFBO0FBdkJGOztBQTBCQTtFQUNFLFVBQUE7QUF2QkY7O0FBMEJBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSxjQUFBO0FBdkJGOztBQTBCQTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQXZCRjs7QUE0QkU7RUFDRSxjQUFBO0FBekJKOztBQTRCRTtFQUNFLGNBQUE7QUExQko7O0FBNkJFO0VBQ0UsY0FBQTtBQTNCSjs7QUE4QkU7RUFDRSxjQUFBO0FBNUJKOztBQThCSTtFQUNFLGlCQUFBO0FBNUJOOztBQStCSTtFQUNFLGdCQUFBO0FBN0JOOztBQWlDRTtFQUNFLGNBQUE7QUEvQko7O0FBa0NFO0VBQ0UscUJBQUE7QUFoQ0o7O0FBa0NJO0VBQ0UsZ0JBQUE7QUFoQ047O0FBbUNJO0VBQ0UsaUJBQUE7QUFqQ04iLCJmaWxlIjoiY3VycmVuY3ktbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVudC1jdXJyZW5jeS1kaXNwbGF5IHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmN1cnJlbmN5LWF2YXRhciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgXHJcbiAgaDUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnJhdGUtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4vLyBFbmhhbmNlZCBleGNoYW5nZSByYXRlIGRpc3BsYXlcclxuLmV4Y2hhbmdlLXJhdGUtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAuY3VycmVuY3ktZnJvbSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxuICB9XHJcblxyXG4gIC5lcXVhbHMge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbmN5LXRvIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEVuaGFuY2VkIGNvbnZlcnNpb24gcmF0ZSBkaXNwbGF5XHJcbi5jb252ZXJzaW9uLXJhdGUtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMnB4O1xyXG5cclxuICAuY29udmVydGVkLWFtb3VudCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcblxyXG4gIC5jdXJyZW5jeS1uYW1lIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgaDQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnZlcnNpb24tZXhhbXBsZSB7XHJcbiAgLmNvbnZlcnNpb24taXRlbSB7XHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jb252ZXJzaW9uLXJlc3VsdHMge1xyXG4gICAgLmNvbnZlcnNpb24tcmVzdWx0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIFxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jaGlwIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8vIFJUTCBzdXBwb3J0XHJcbltkaXI9XCJydGxcIl0ge1xyXG4gIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICB9XHJcbiAgXHJcbiAgLmN1cnJlbmN5LWFjdGlvbnMge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYXRlLWRpc3BsYXkge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGNoYW5nZS1yYXRlLWRpc3BsYXkge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICBcclxuICAgIC5jdXJyZW5jeS1mcm9tIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdXJyZW5jeS10byB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IC8vIEtlZXAgbnVtYmVycyBsZWZ0LWFsaWduZWRcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNvbnZlcnNpb24tcmVzdWx0cyB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnZlcnNpb24tcmF0ZS1kaXNwbGF5IHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIFxyXG4gICAgLmNvbnZlcnRlZC1hbW91bnQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyAvLyBLZWVwIG51bWJlcnMgbGVmdC1hbGlnbmVkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdXJyZW5jeS1uYW1lIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */";

/***/ }),

/***/ 19085:
/*!******************************************************************************!*\
  !*** ./src/app/currency-management/currency-management.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"goBack()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>إدارة العملات</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"refreshRates()\">\r\n        <ion-icon name=\"refresh-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-progress-bar *ngIf=\"isLoading\" type=\"indeterminate\"></ion-progress-bar>\r\n  \r\n  <ion-grid class=\"ion-margin-top\">\r\n    <!-- Current Currency Display -->\r\n    <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\r\n      <ion-col size=\"12\">\r\n        <h5>العملة الحالية</h5>\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <div class=\"current-currency-display\">\r\n              <ion-item lines=\"none\">\r\n                <ion-avatar slot=\"start\">\r\n                  <div class=\"currency-avatar\">{{currentCurrency}}</div>\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <h3>{{getCurrencyName(currentCurrency)}}</h3>\r\n                  <p>العملة المحددة حالياً</p>\r\n                </ion-label>\r\n                <ion-chip slot=\"end\" color=\"primary\">\r\n                  <ion-label>فعال</ion-label>\r\n                </ion-chip>\r\n              </ion-item>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n   \r\n\r\n    <!-- Exchange Rates -->\r\n    <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\r\n      <ion-col size=\"12\">\r\n        <div class=\"section-header\">\r\n          <h5>أسعار الصرف</h5>\r\n          <ion-button \r\n            fill=\"outline\" \r\n            size=\"small\" \r\n            (click)=\"openRateModal()\">\r\n            <ion-icon name=\"add\" slot=\"start\"></ion-icon>\r\n            إضافة سعر\r\n          </ion-button>\r\n        </div>\r\n        \r\n        <ion-card>\r\n          <ion-list class=\"ion-margin-top ion-margin-bottom\">\r\n            <ion-item-divider>\r\n              <ion-label>أسعار الصرف مقابل الجنيه السوداني (SDG)</ion-label>\r\n            </ion-item-divider>\r\n            \r\n            <ion-item *ngFor=\"let rate of rates\" button (click)=\"openRateModal(rate)\">\r\n              <ion-avatar slot=\"start\">\r\n                <div class=\"currency-avatar\">{{rate.currency}}</div>\r\n              </ion-avatar>\r\n              \r\n              <ion-label>\r\n                <h3>{{rate.currency_info?.currency_name_ar || rate.currency}}</h3>\r\n                <div class=\"exchange-rate-display\">\r\n                  <span class=\"currency-from\">1 {{rate.currency}}</span>\r\n                  <span class=\"equals\">=</span>\r\n                  <span class=\"currency-to\">{{formatNumberEnglish(getRateValue(rate.rate))}} SDG</span>\r\n                </div>\r\n              </ion-label>\r\n              \r\n              <div slot=\"end\" class=\"rate-actions\">\r\n                <ion-button \r\n                  fill=\"clear\" \r\n                  size=\"small\" \r\n                  color=\"primary\"\r\n                  (click)=\"openRateModal(rate); $event.stopPropagation()\">\r\n                  <ion-icon name=\"create-outline\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button \r\n                  *ngIf=\"rate.id\"\r\n                  fill=\"clear\" \r\n                  size=\"small\" \r\n                  color=\"danger\"\r\n                  (click)=\"deleteRate(rate); $event.stopPropagation()\">\r\n                  <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </ion-item>\r\n\r\n            <!-- Show SDG as base currency -->\r\n            <ion-item>\r\n              <ion-avatar slot=\"start\">\r\n                <div class=\"currency-avatar\">SDG</div>\r\n              </ion-avatar>\r\n              \r\n              <ion-label>\r\n                <h3>جنيه سوداني</h3>\r\n                <p>العملة الأساسية</p>\r\n              </ion-label>\r\n              \r\n              <div slot=\"end\" class=\"rate-display\">\r\n                <ion-chip color=\"primary\">\r\n                  <ion-label>عملة أساسية</ion-label>\r\n                </ion-chip>\r\n              </div>\r\n            </ion-item>\r\n            \r\n            <!-- Empty state -->\r\n            <ion-item *ngIf=\"rates.length === 0\" lines=\"none\">\r\n              <div class=\"empty-state\">\r\n                <ion-icon name=\"wallet-outline\" size=\"large\" color=\"medium\"></ion-icon>\r\n                <h4>لا توجد أسعار صرف محددة</h4>\r\n                <p>اضغط على \"إضافة سعر\" لإضافة أسعار الصرف</p>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n     <!-- Supported Currencies -->\r\n     <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\r\n      <ion-col size=\"12\">\r\n        <h5>العملات المدعومة</h5>\r\n        <ion-card>\r\n          <ion-list class=\"ion-margin-top ion-margin-bottom\">\r\n            <ion-item *ngFor=\"let currency of currencies\" button>\r\n              <ion-avatar slot=\"start\">\r\n                <div class=\"currency-avatar\">{{currency.currency_code}}</div>\r\n              </ion-avatar>\r\n              \r\n              <ion-label>\r\n                <h3>{{currency.currency_name_ar}}</h3>\r\n                <p>{{currency.currency_name_en}} ({{currency.currency_symbol}})</p>\r\n              </ion-label>\r\n              \r\n              <div slot=\"end\" class=\"currency-actions\">\r\n                <!-- Set as Current Currency Button -->\r\n                <ion-button \r\n                  fill=\"clear\" \r\n                  size=\"small\" \r\n                  [disabled]=\"currentCurrency === currency.currency_code\"\r\n                  (click)=\"setCurrency(currency.currency_code)\">\r\n                  <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n                </ion-button>\r\n                \r\n                <!-- Toggle Active Status -->\r\n                <ion-toggle \r\n                  [checked]=\"currency.is_active\" \r\n                  (ionChange)=\"toggleCurrencyStatus(currency)\">\r\n                </ion-toggle>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n   \r\n  </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_currency-management_currency-management_module_ts.js.map
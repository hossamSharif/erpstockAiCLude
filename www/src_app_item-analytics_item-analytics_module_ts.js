"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_item-analytics_item-analytics_module_ts"],{

/***/ 4742:
/*!*****************************************************************!*\
  !*** ./src/app/item-analytics/item-analytics-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemAnalyticsPageRoutingModule": () => (/* binding */ ItemAnalyticsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _item_analytics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-analytics.page */ 9662);




const routes = [
    {
        path: '',
        component: _item_analytics_page__WEBPACK_IMPORTED_MODULE_0__.ItemAnalyticsPage
    }
];
let ItemAnalyticsPageRoutingModule = class ItemAnalyticsPageRoutingModule {
};
ItemAnalyticsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemAnalyticsPageRoutingModule);



/***/ }),

/***/ 52382:
/*!*********************************************************!*\
  !*** ./src/app/item-analytics/item-analytics.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemAnalyticsPageModule": () => (/* binding */ ItemAnalyticsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _item_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-analytics-routing.module */ 4742);
/* harmony import */ var _item_analytics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-analytics.page */ 9662);







let ItemAnalyticsPageModule = class ItemAnalyticsPageModule {
};
ItemAnalyticsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _item_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemAnalyticsPageRoutingModule
        ],
        declarations: [_item_analytics_page__WEBPACK_IMPORTED_MODULE_1__.ItemAnalyticsPage],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe]
    })
], ItemAnalyticsPageModule);



/***/ }),

/***/ 9662:
/*!*******************************************************!*\
  !*** ./src/app/item-analytics/item-analytics.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemAnalyticsPage": () => (/* binding */ ItemAnalyticsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _item_analytics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-analytics.page.html?ngResource */ 61233);
/* harmony import */ var _item_analytics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-analytics.page.scss?ngResource */ 89627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 75755);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/export.service */ 79002);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/currency.service */ 6612);












let ItemAnalyticsPage = class ItemAnalyticsPage {
    constructor(platform, router, storage, modalController, loadingController, datePipe, api, toast, exportService, currencyService, cdr) {
        this.platform = platform;
        this.router = router;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.exportService = exportService;
        this.currencyService = currencyService;
        this.cdr = cdr;
        // Core data
        this.analyticsData = [];
        this.filteredData = [];
        this.summaryData = {
            totalItemsSold: 0,
            totalRevenue: 0,
            averageItemPrice: 0,
            totalUniqueItems: 0
        };
        // UI state
        this.loading = false;
        this.showEmpty = false;
        this.device = '';
        this.analysisType = 0; // 0: All time, 1: Date range
        this.sortBy = 'quantity';
        this.sortDirection = 'desc';
        // Result limit options
        this.resultLimit = 'all'; // 'all', '25', '50', '100', '200', '500', 'custom'
        this.customLimit = 50;
        this.totalItemsCount = 0;
        // Currency
        this.currentCurrency$ = this.currencyService.getCurrentCurrency();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.checkPlatform();
        this.initializeDates();
    }
    ngOnInit() {
        this.getAppInfo();
        this.initializeCurrency();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    checkPlatform() {
        if (this.platform.is('desktop')) {
            this.device = 'desktop';
        }
        else if (this.platform.is('mobile')) {
            this.device = 'mobile';
        }
    }
    initializeDates() {
        let d = new Date();
        this.dateTo = this.datePipe.transform(d, 'yyyy-MM-dd');
        // Set dateFrom to 30 days ago as default
        let thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        this.dateFrom = this.datePipe.transform(thirtyDaysAgo, 'yyyy-MM-dd');
        console.log('Initialized dates:', { dateFrom: this.dateFrom, dateTo: this.dateTo });
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.currencyService.initializeCurrency();
            yield this.currencyService.loadSupportedCurrencies();
            if (this.store_info && this.year) {
                yield this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
            }
            this.subscription.add(this.currencyService.getCurrentCurrency().subscribe(currency => {
                this.cdr.detectChanges();
            }));
        });
    }
    ionViewDidEnter() {
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                this.loadAnalytics();
            }
        });
    }
    getAppInfo() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
            }
        });
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
            }
        });
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
            }
        });
    }
    loadAnalytics() {
        if (!this.store_info)
            return;
        this.loading = true;
        this.showEmpty = false;
        // Determine date parameters
        let startDate = this.analysisType === 1 ? this.dateFrom : null;
        let endDate = this.analysisType === 1 ? this.dateTo : null;
        // Debug date values
        console.log('Loading analytics with dates:', {
            analysisType: this.analysisType,
            startDate: startDate,
            endDate: endDate
        });
        // Determine limit parameter
        const limitValue = this.getLimitValue();
        const limitParam = limitValue > 0 ? limitValue : undefined;
        // Call API to get analytics data with limit parameter
        this.api.getItemSalesAnalyticsWithLimit(this.store_info.id, this.year.id, startDate, endDate, limitParam)
            .subscribe((data) => {
            if (data && data.message !== 'No record Found' && data.data) {
                this.analyticsData = data.data;
                // Store total count from summary if available
                if (data.summary && data.summary.total_unique_items) {
                    this.totalItemsCount = data.summary.total_unique_items;
                }
                this.processAnalyticsData();
                this.showEmpty = this.analyticsData.length === 0;
            }
            else {
                this.analyticsData = [];
                this.totalItemsCount = 0;
                this.showEmpty = true;
            }
            this.loading = false;
        }, (error) => {
            console.error('Error loading analytics:', error);
            this.presentToast('خطأ في تحميل البيانات التحليلية', 'danger');
            this.loading = false;
            this.showEmpty = true;
        });
    }
    processAnalyticsData() {
        // Calculate summary statistics
        this.summaryData.totalUniqueItems = this.analyticsData.length;
        this.summaryData.totalItemsSold = this.analyticsData.reduce((sum, item) => sum + item.total_quantity, 0);
        this.summaryData.totalRevenue = this.analyticsData.reduce((sum, item) => sum + item.total_revenue, 0);
        this.summaryData.averageItemPrice = this.summaryData.totalRevenue / this.summaryData.totalItemsSold || 0;
        // Apply sorting
        this.applySorting();
    }
    applySorting() {
        this.filteredData = [...this.analyticsData];
        this.filteredData.sort((a, b) => {
            let valueA, valueB;
            if (this.sortBy === 'quantity') {
                valueA = a.total_quantity;
                valueB = b.total_quantity;
            }
            else {
                valueA = a.total_revenue;
                valueB = b.total_revenue;
            }
            if (this.sortDirection === 'desc') {
                return valueB - valueA;
            }
            else {
                return valueA - valueB;
            }
        });
    }
    onAnalysisTypeChange() {
        this.loadAnalytics();
    }
    onDateChange() {
        // Optional: Add delay to prevent too frequent API calls
        if (this.analysisType === 1 && this.dateFrom && this.dateTo) {
            console.log('Date changed:', { dateFrom: this.dateFrom, dateTo: this.dateTo });
            // Could add debouncing here if needed
            this.loadAnalytics();
        }
    }
    onSortChange() {
        this.applySorting();
    }
    onLimitChange() {
        if (this.resultLimit === 'custom') {
            // Don't reload data yet, wait for custom limit input
            return;
        }
        this.loadAnalytics();
    }
    onCustomLimitChange() {
        if (this.resultLimit === 'custom' && this.customLimit > 0) {
            this.loadAnalytics();
        }
    }
    getDisplayedItemsText() {
        if (this.filteredData.length === 0)
            return '';
        const displayedCount = this.filteredData.length;
        const totalCount = this.totalItemsCount || displayedCount;
        if (this.resultLimit === 'all') {
            return `جميع الأصناف (${displayedCount} صنف)`;
        }
        const limitValue = this.getLimitValue();
        if (displayedCount < limitValue || displayedCount === totalCount) {
            return `${displayedCount} من إجمالي ${totalCount} صنف`;
        }
        return `أفضل ${displayedCount} من إجمالي ${totalCount} صنف`;
    }
    getLimitValue() {
        switch (this.resultLimit) {
            case 'all': return 0;
            case 'custom': return this.customLimit;
            default: return parseInt(this.resultLimit);
        }
    }
    formatCurrency(amount) {
        const currentCurrency = this.currencyService.getCurrentCurrencyValue();
        return this.currencyService.formatCurrency(amount, currentCurrency);
    }
    formatNumber(num) {
        return new Intl.NumberFormat('en-US').format(num);
    }
    exportToPDF() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.filteredData || this.filteredData.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: 'تحليل مبيعات الأصناف',
                subtitle: this.generateSubtitle(),
                fileName: `item-analytics-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.filteredData,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'item-analytics',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToPDF(config);
        });
    }
    exportToExcel() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.filteredData || this.filteredData.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: 'تحليل مبيعات الأصناف',
                subtitle: this.generateSubtitle(),
                fileName: `item-analytics-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.filteredData,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'item-analytics',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToExcel(config);
        });
    }
    generateSubtitle() {
        let subtitle = 'تحليل ';
        subtitle += this.sortBy === 'quantity' ? 'الكمية' : 'الإيرادات';
        if (this.analysisType === 1) {
            subtitle += ` من ${this.dateFrom} إلى ${this.dateTo}`;
        }
        else {
            subtitle += ' - جميع الأوقات';
        }
        return subtitle;
    }
    getExportColumns() {
        return [
            { key: 'item_name', title: 'اسم الصنف', width: 25, type: 'text' },
            { key: 'brand', title: 'الماركة', width: 15, type: 'text' },
            { key: 'model', title: 'الموديل', width: 15, type: 'text' },
            { key: 'part_no', title: 'رقم القطعة', width: 15, type: 'text' },
            { key: 'total_quantity', title: 'إجمالي الكمية', width: 12, type: 'number' },
            { key: 'total_revenue', title: 'إجمالي الإيرادات', width: 15, type: 'currency' },
            { key: 'average_price', title: 'متوسط السعر', width: 12, type: 'currency' },
            { key: 'sales_count', title: 'عدد المبيعات', width: 12, type: 'number' },
            { key: 'last_sale_date', title: 'آخر عملية بيع', width: 12, type: 'date' }
        ];
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
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 3000,
                message: msg,
                translucent: true,
                backdropDismiss: false
            });
            yield loading.present();
        });
    }
};
ItemAnalyticsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _services_export_service__WEBPACK_IMPORTED_MODULE_4__.ExportService },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_5__.CurrencyService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef }
];
ItemAnalyticsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-item-analytics',
        template: _item_analytics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_analytics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemAnalyticsPage);



/***/ }),

/***/ 89627:
/*!********************************************************************!*\
  !*** ./src/app/item-analytics/item-analytics.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".filter-card {\n  margin: 16px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.filter-header {\n  margin-bottom: 16px;\n}\n\n.filter-header h2 {\n  color: var(--ion-color-primary);\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.date-range {\n  margin-top: 16px;\n}\n\n.date-range .date-input-item {\n  --border-radius: 8px;\n  --background: var(--ion-color-light);\n  margin-bottom: 8px;\n}\n\n.date-range .date-input {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-size: 14px;\n}\n\n.date-range .date-input input {\n  border: none;\n  background: transparent;\n  color: var(--ion-color-dark);\n  font-size: 14px;\n}\n\n.date-range .date-input input::-webkit-calendar-picker-indicator {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n\n.date-range .date-input input::-webkit-datetime-edit {\n  color: var(--ion-color-dark);\n}\n\n.date-range .date-input input::-webkit-datetime-edit-fields-wrapper {\n  background: transparent;\n}\n\n.sort-options {\n  margin-top: 16px;\n}\n\n.sort-options ion-item {\n  --border-radius: 8px;\n  --background: var(--ion-color-light);\n}\n\n.limit-options {\n  margin-top: 16px;\n}\n\n.limit-options ion-item {\n  --border-radius: 8px;\n  --background: var(--ion-color-light);\n}\n\n.limit-options ion-input {\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\n.summary-cards {\n  margin: 16px;\n}\n\n.summary-cards .summary-card {\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 8px;\n}\n\n.summary-cards .summary-card ion-card-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.summary-cards .summary-card .summary-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: var(--ion-color-primary-tint);\n}\n\n.summary-cards .summary-card .summary-icon ion-icon {\n  font-size: 24px;\n  color: var(--ion-color-primary);\n}\n\n.summary-cards .summary-card .summary-content {\n  flex: 1;\n}\n\n.summary-cards .summary-card .summary-content h3 {\n  margin: 0 0 4px 0;\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\n\n.summary-cards .summary-card .summary-content p {\n  margin: 0;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n\n.loading-container ion-spinner {\n  margin-bottom: 16px;\n}\n\n.loading-container p {\n  color: var(--ion-color-medium);\n  font-size: 1rem;\n  text-align: center;\n}\n\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n\n.empty-state ion-icon {\n  font-size: 4rem;\n  color: var(--ion-color-medium);\n  margin-bottom: 16px;\n}\n\n.empty-state h3 {\n  color: var(--ion-color-dark);\n  margin: 0 0 8px 0;\n  font-size: 1.3rem;\n}\n\n.empty-state p {\n  color: var(--ion-color-medium);\n  margin: 0;\n  line-height: 1.5;\n}\n\n.table-container {\n  overflow-x: auto;\n}\n\nion-card-subtitle {\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n  margin-top: 8px;\n  font-style: italic;\n  text-align: center;\n}\n\nion-card-subtitle.performance-indicator {\n  background: var(--ion-color-light-tint);\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-weight: 500;\n}\n\n.analytics-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n\n.analytics-table th, .analytics-table td {\n  padding: 12px 8px;\n  text-align: center;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.analytics-table th {\n  background: var(--ion-color-light);\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.analytics-table tbody tr {\n  transition: background-color 0.2s ease;\n}\n\n.analytics-table tbody tr:hover {\n  background: var(--ion-color-light-tint);\n}\n\n.analytics-table tbody tr.highlight-row {\n  background: linear-gradient(90deg, rgba(var(--ion-color-primary-rgb), 0.1) 0%, transparent 100%);\n}\n\n.analytics-table .item-name {\n  text-align: right;\n  font-weight: 500;\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.analytics-table .quantity, .analytics-table .revenue, .analytics-table .price {\n  font-weight: 600;\n}\n\n.analytics-table .quantity {\n  color: var(--ion-color-primary);\n}\n\n.analytics-table .revenue {\n  color: var(--ion-color-success);\n}\n\n.analytics-table .price {\n  color: var(--ion-color-tertiary);\n}\n\n.mobile-cards .item-card {\n  margin-bottom: 16px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.mobile-cards .item-card .item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.mobile-cards .item-card .item-header h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  flex: 1;\n  text-align: right;\n}\n\n.mobile-cards .item-card .item-header ion-badge {\n  margin-left: 8px;\n}\n\n.mobile-cards .item-card .item-details .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.mobile-cards .item-card .item-details .detail-row:last-child {\n  border-bottom: none;\n}\n\n.mobile-cards .item-card .item-details .detail-row .label {\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n  flex: 1;\n  text-align: right;\n}\n\n.mobile-cards .item-card .item-details .detail-row .value {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  text-align: left;\n}\n\n.mobile-cards .item-card .item-details .detail-row .value.highlight {\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\n@media (max-width: 768px) {\n  .summary-cards .summary-card ion-card-content {\n    flex-direction: column;\n    text-align: center;\n    gap: 12px;\n  }\n  .summary-cards .summary-card .summary-content h3 {\n    font-size: 1.5rem;\n  }\n}\n\n[dir=rtl] .analytics-table .item-name {\n  text-align: right;\n}\n\n[dir=rtl] .mobile-cards .item-card .item-header h3 {\n  text-align: right;\n}\n\n[dir=rtl] .mobile-cards .item-card .item-details .detail-row .label {\n  text-align: right;\n}\n\n[dir=rtl] .mobile-cards .item-card .item-details .detail-row .value {\n  text-align: left;\n}\n\n.fade-in {\n  animation: fadeIn 0.3s ease-in;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\nion-segment {\n  border-radius: 8px;\n  background: var(--ion-color-light);\n}\n\nion-segment ion-segment-button {\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n  --background-checked: var(--ion-color-primary-tint);\n  --border-radius: 6px;\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tYW5hbHl0aWNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFHRTtFQUNFLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLSTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUhOOztBQUtNO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBSFI7O0FBTU07RUFDRSw0QkFBQTtBQUpSOztBQU9NO0VBQ0UsdUJBQUE7QUFMUjs7QUFXQTtFQUNFLGdCQUFBO0FBUkY7O0FBVUU7RUFDRSxvQkFBQTtFQUNBLG9DQUFBO0FBUko7O0FBYUE7RUFDRSxnQkFBQTtBQVZGOztBQVlFO0VBQ0Usb0JBQUE7RUFDQSxvQ0FBQTtBQVZKOztBQWFFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWdCQTtFQUNFLFlBQUE7QUFiRjs7QUFlRTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWJOOztBQWdCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBZE47O0FBZ0JNO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBZFI7O0FBa0JJO0VBQ0UsT0FBQTtBQWhCTjs7QUFrQk07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQWhCUjs7QUFtQk07RUFDRSxTQUFBO0VB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Ly8gRmlsdGVyIFNlY3Rpb25cbi5maWx0ZXItY2FyZCB7XG4gIG1hcmdpbjogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmZpbHRlci1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gIGgyIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5kYXRlLXJhbmdlIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcblxuICAuZGF0ZS1pbnB1dC1pdGVtIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgLmRhdGUtaW5wdXQge1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAvLyBTdHlsZSB0aGUgbmF0aXZlIGRhdGUgaW5wdXRcbiAgICBpbnB1dCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgJjo6LXdlYmtpdC1kYXRldGltZS1lZGl0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cblxuICAgICAgJjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWZpZWxkcy13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zb3J0LW9wdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cbn1cblxuLy8gTGltaXQgT3B0aW9uc1xuLmxpbWl0LW9wdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cblxuICBpb24taW5wdXQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICB9XG59XG5cbi8vIFN1bW1hcnkgQ2FyZHNcbi5zdW1tYXJ5LWNhcmRzIHtcbiAgbWFyZ2luOiAxNnB4O1xuXG4gIC5zdW1tYXJ5LWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5zdW1tYXJ5LWljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdW1tYXJ5LWNvbnRlbnQge1xuICAgICAgZmxleDogMTtcblxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBMb2FkaW5nIFN0YXRlXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAyMHB4O1xuXG4gIGlvbi1zcGlubmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLy8gRW1wdHkgU3RhdGVcbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgaDMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuLy8gVGFibGUgQ29udGFpbmVyXG4udGFibGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLy8gUGVyZm9ybWFuY2UgSW5kaWNhdG9yXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJi5wZXJmb3JtYW5jZS1pbmRpY2F0b3Ige1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG4vLyBEZXNrdG9wIFRhYmxlXG4uYW5hbHl0aWNzLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gIHRoLCB0ZCB7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG5cbiAgdGgge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgdGJvZHkgdHIge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG4gICAgfVxuXG4gICAgJi5oaWdobGlnaHQtcm93IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxcbiAgICAgICAgcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpIDAlLFxuICAgICAgICB0cmFuc3BhcmVudCAxMDAlKTtcbiAgICB9XG4gIH1cblxuICAuaXRlbS1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgLnF1YW50aXR5LCAucmV2ZW51ZSwgLnByaWNlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLnF1YW50aXR5IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLnJldmVudWUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIH1cblxuICAucHJpY2Uge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICB9XG59XG5cbi8vIE1vYmlsZSBDYXJkc1xuLm1vYmlsZS1jYXJkcyB7XG4gIC5pdGVtLWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgLml0ZW0taGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cblxuICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1kZXRhaWxzIHtcbiAgICAgIC5kZXRhaWwtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgICAmLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgRGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN1bW1hcnktY2FyZHMge1xuICAgIC5zdW1tYXJ5LWNhcmQge1xuICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuc3VtbWFyeS1jb250ZW50IHtcbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJUTCBTdXBwb3J0XG5bZGlyPVwicnRsXCJdIHtcbiAgLmFuYWx5dGljcy10YWJsZSB7XG4gICAgLml0ZW0tbmFtZSB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cblxuICAubW9iaWxlLWNhcmRzIHtcbiAgICAuaXRlbS1jYXJkIHtcbiAgICAgIC5pdGVtLWhlYWRlciB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS1kZXRhaWxzIHtcbiAgICAgICAgLmRldGFpbC1yb3cge1xuICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uIENsYXNzZXNcbi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLWluO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vLyBDdXN0b20gc2VnbWVudCBzdHlsaW5nXG5pb24tc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDJweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 61233:
/*!********************************************************************!*\
  !*** ./src/app/item-analytics/item-analytics.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>تحليل الأصناف</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"exportToPDF()\">\n        <ion-icon name=\"document-text-outline\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"exportToExcel()\">\n        <ion-icon name=\"download-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" dir=\"rtl\">\n\n  <!-- Filter Section -->\n  <ion-card class=\"filter-card\">\n    <ion-card-content>\n      <div class=\"filter-header\">\n        <h2>خيارات التحليل</h2>\n      </div>\n\n      <!-- Analysis Type Selection -->\n      <ion-segment [(ngModel)]=\"analysisType\" (ionChange)=\"onAnalysisTypeChange()\">\n        <ion-segment-button value=\"0\">\n          <ion-label>جميع الأوقات</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"1\">\n          <ion-label>نطاق زمني</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <!-- Date Range (only visible when analysisType is 1) -->\n      <div class=\"date-range\" *ngIf=\"analysisType == 1\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item class=\"date-input-item\">\n              <ion-label position=\"stacked\">من تاريخ</ion-label>\n              <ion-input\n                type=\"date\"\n                [(ngModel)]=\"dateFrom\"\n                (ionBlur)=\"onAnalysisTypeChange()\"\n                (ionChange)=\"onDateChange()\"\n                class=\"date-input\">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item class=\"date-input-item\">\n              <ion-label position=\"stacked\">إلى تاريخ</ion-label>\n              <ion-input\n                type=\"date\"\n                [(ngModel)]=\"dateTo\"\n                (ionBlur)=\"onAnalysisTypeChange()\"\n                (ionChange)=\"onDateChange()\"\n                class=\"date-input\">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- Sort Options -->\n      <ion-row class=\"sort-options\">\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>ترتيب حسب</ion-label>\n            <ion-select [(ngModel)]=\"sortBy\" (ionChange)=\"onSortChange()\">\n              <ion-select-option value=\"quantity\">الكمية</ion-select-option>\n              <ion-select-option value=\"revenue\">الإيرادات</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>ترتيب</ion-label>\n            <ion-select [(ngModel)]=\"sortDirection\" (ionChange)=\"onSortChange()\">\n              <ion-select-option value=\"desc\">الأعلى أولاً</ion-select-option>\n              <ion-select-option value=\"asc\">الأقل أولاً</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Result Limit Options -->\n      <ion-row class=\"limit-options\">\n        <ion-col size=\"12\" size-md=\"6\">\n          <ion-item>\n            <ion-label>عدد النتائج</ion-label>\n            <ion-select [(ngModel)]=\"resultLimit\" (ionChange)=\"onLimitChange()\">\n              <ion-select-option value=\"all\">جميع الأصناف</ion-select-option>\n              <ion-select-option value=\"25\">أفضل 25</ion-select-option>\n              <ion-select-option value=\"50\">أفضل 50</ion-select-option>\n              <ion-select-option value=\"100\">أفضل 100</ion-select-option>\n              <ion-select-option value=\"200\">أفضل 200</ion-select-option>\n              <ion-select-option value=\"500\">أفضل 500</ion-select-option>\n              <ion-select-option value=\"custom\">مخصص</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-md=\"6\" *ngIf=\"resultLimit === 'custom'\">\n          <ion-item>\n            <ion-label position=\"stacked\">عدد مخصص</ion-label>\n            <ion-input\n              type=\"number\"\n              [(ngModel)]=\"customLimit\"\n              (ionBlur)=\"onCustomLimitChange()\"\n              (keyup.enter)=\"onCustomLimitChange()\"\n              placeholder=\"أدخل العدد (مثال: 75)\"\n              min=\"1\"\n              max=\"10000\">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Summary Cards -->\n  <div class=\"summary-cards\" *ngIf=\"!loading && !showEmpty\">\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"summary-card\">\n          <ion-card-content>\n            <div class=\"summary-icon\">\n              <ion-icon name=\"cube-outline\"></ion-icon>\n            </div>\n            <div class=\"summary-content\">\n              <h3>{{ formatNumber(summaryData.totalUniqueItems) }}</h3>\n              <p>عدد الأصناف</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"summary-card\">\n          <ion-card-content>\n            <div class=\"summary-icon\">\n              <ion-icon name=\"layers-outline\"></ion-icon>\n            </div>\n            <div class=\"summary-content\">\n              <h3>{{ formatNumber(summaryData.totalItemsSold) }}</h3>\n              <p>إجمالي الكمية المبيعة</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"summary-card\">\n          <ion-card-content>\n            <div class=\"summary-icon\">\n              <ion-icon name=\"cash-outline\"></ion-icon>\n            </div>\n            <div class=\"summary-content\">\n              <h3>{{ formatCurrency(summaryData.totalRevenue) }}</h3>\n              <p>إجمالي الإيرادات</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"3\">\n        <ion-card class=\"summary-card\">\n          <ion-card-content>\n            <div class=\"summary-icon\">\n              <ion-icon name=\"trending-up-outline\"></ion-icon>\n            </div>\n            <div class=\"summary-content\">\n              <h3>{{ formatCurrency(summaryData.averageItemPrice) }}</h3>\n              <p>متوسط سعر الصنف</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!-- Loading State -->\n  <div class=\"loading-container\" *ngIf=\"loading\">\n    <ion-spinner></ion-spinner>\n    <p>جاري تحميل البيانات التحليلية...</p>\n  </div>\n\n  <!-- Empty State -->\n  <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n    <ion-icon name=\"analytics-outline\"></ion-icon>\n    <h3>لا توجد بيانات للتحليل</h3>\n    <p>لم يتم العثور على بيانات مبيعات في الفترة المحددة</p>\n  </div>\n\n  <!-- Analytics Data Table -->\n  <ion-card *ngIf=\"!loading && !showEmpty && filteredData.length > 0\">\n    <ion-card-header>\n      <ion-card-title>\n        تفاصيل تحليل {{ sortBy === 'quantity' ? 'الكمية' : 'الإيرادات' }}\n      </ion-card-title>\n      <ion-card-subtitle class=\"performance-indicator\">\n        عرض {{ getDisplayedItemsText() }}\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      <div class=\"table-container\" [class.mobile-view]=\"device === 'mobile'\">\n\n        <!-- Mobile Cards View -->\n        <div class=\"mobile-cards\" *ngIf=\"device === 'mobile'\">\n          <ion-card *ngFor=\"let item of filteredData; let i = index\" class=\"item-card\">\n            <ion-card-content>\n              <div class=\"item-header\">\n                <h3>{{ item.item_name }}</h3>\n                <ion-badge [color]=\"sortBy === 'quantity' ? 'primary' : 'success'\">\n                  #{{ i + 1 }}\n                </ion-badge>\n              </div>\n\n              <div class=\"item-details\">\n                <div class=\"detail-row\" *ngIf=\"item.brand\">\n                  <span class=\"label\">الماركة:</span>\n                  <span class=\"value\">{{ item.brand }}</span>\n                </div>\n                <div class=\"detail-row\" *ngIf=\"item.model\">\n                  <span class=\"label\">الموديل:</span>\n                  <span class=\"value\">{{ item.model }}</span>\n                </div>\n                <div class=\"detail-row\" *ngIf=\"item.part_no\">\n                  <span class=\"label\">رقم القطعة:</span>\n                  <span class=\"value\">{{ item.part_no }}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">إجمالي الكمية:</span>\n                  <span class=\"value highlight\">{{ formatNumber(item.total_quantity) }}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">إجمالي الإيرادات:</span>\n                  <span class=\"value highlight\">{{ formatCurrency(item.total_revenue) }}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">متوسط السعر:</span>\n                  <span class=\"value\">{{ formatCurrency(item.average_price) }}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">عدد المبيعات:</span>\n                  <span class=\"value\">{{ formatNumber(item.sales_count) }}</span>\n                </div>\n                <div class=\"detail-row\" *ngIf=\"item.last_sale_date\">\n                  <span class=\"label\">آخر عملية بيع:</span>\n                  <span class=\"value\">{{ item.last_sale_date | date:'dd/MM/yyyy' }}</span>\n                </div>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </div>\n\n        <!-- Desktop Table View -->\n        <table class=\"analytics-table\" *ngIf=\"device === 'desktop'\">\n          <thead>\n            <tr>\n              <th>الترتيب</th>\n              <th>اسم الصنف</th>\n              <th>الماركة</th>\n              <th>الموديل</th>\n              <th>رقم القطعة</th>\n              <th>إجمالي الكمية</th>\n              <th>إجمالي الإيرادات</th>\n              <th>متوسط السعر</th>\n              <th>عدد المبيعات</th>\n              <th>آخر عملية بيع</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of filteredData; let i = index\"\n                [class.highlight-row]=\"i < 3\">\n              <td>\n                <ion-badge [color]=\"i < 3 ? (sortBy === 'quantity' ? 'primary' : 'success') : 'medium'\">\n                  {{ i + 1 }}\n                </ion-badge>\n              </td>\n              <td class=\"item-name\">{{ item.item_name }}</td>\n              <td>{{ item.brand || '-' }}</td>\n              <td>{{ item.model || '-' }}</td>\n              <td>{{ item.part_no || '-' }}</td>\n              <td class=\"quantity\">{{ formatNumber(item.total_quantity) }}</td>\n              <td class=\"revenue\">{{ formatCurrency(item.total_revenue) }}</td>\n              <td class=\"price\">{{ formatCurrency(item.average_price) }}</td>\n              <td>{{ formatNumber(item.sales_count) }}</td>\n              <td>{{ item.last_sale_date | date:'dd/MM/yyyy' || '-' }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_item-analytics_item-analytics_module_ts.js.map
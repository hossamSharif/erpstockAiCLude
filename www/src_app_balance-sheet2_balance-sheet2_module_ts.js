"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_balance-sheet2_balance-sheet2_module_ts"],{

/***/ 4173:
/*!*****************************************************************!*\
  !*** ./src/app/balance-sheet2/balance-sheet2-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceSheet2PageRoutingModule": () => (/* binding */ BalanceSheet2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _balance_sheet2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-sheet2.page */ 81522);




const routes = [
    {
        path: '',
        component: _balance_sheet2_page__WEBPACK_IMPORTED_MODULE_0__.BalanceSheet2Page
    }
];
let BalanceSheet2PageRoutingModule = class BalanceSheet2PageRoutingModule {
};
BalanceSheet2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BalanceSheet2PageRoutingModule);



/***/ }),

/***/ 8505:
/*!*********************************************************!*\
  !*** ./src/app/balance-sheet2/balance-sheet2.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceSheet2PageModule": () => (/* binding */ BalanceSheet2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _balance_sheet2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-sheet2-routing.module */ 4173);
/* harmony import */ var _balance_sheet2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance-sheet2.page */ 81522);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let BalanceSheet2PageModule = class BalanceSheet2PageModule {
};
BalanceSheet2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _balance_sheet2_routing_module__WEBPACK_IMPORTED_MODULE_0__.BalanceSheet2PageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_balance_sheet2_page__WEBPACK_IMPORTED_MODULE_1__.BalanceSheet2Page]
    })
], BalanceSheet2PageModule);



/***/ }),

/***/ 81522:
/*!*******************************************************!*\
  !*** ./src/app/balance-sheet2/balance-sheet2.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceSheet2Page": () => (/* binding */ BalanceSheet2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _balance_sheet2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-sheet2.page.html?ngResource */ 79529);
/* harmony import */ var _balance_sheet2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance-sheet2.page.scss?ngResource */ 68506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _services_sorting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sorting.service */ 52562);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/export.service */ 79002);











let BalanceSheet2Page = class BalanceSheet2Page {
    constructor(platform, alertController, router, storage, modalController, loadingController, datePipe, api, toast, sortingService, exportService) {
        this.platform = platform;
        this.alertController = alertController;
        this.router = router;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.sortingService = sortingService;
        this.exportService = exportService;
        // Core data
        this.accounts = [];
        this.filteredAccounts = [];
        this.sortedAccounts = [];
        this.currentSort = null;
        // App info
        this.store_info = null;
        this.user_info = null;
        this.year = null;
        // Filter and UI state
        this.segmentValue = 'all';
        this.showOnlyWithBalance = false;
        this.loading = false;
        this.showEmpty = false;
        this.device = '';
        // Summary totals
        this.summary = {
            total_accounts: 0,
            grand_debit_total: 0,
            grand_credit_total: 0,
            difference: 0
        };
        this.checkPlatform();
        this.getAppInfo();
    }
    ngOnInit() {
        // Component initialization
    }
    ionViewDidEnter() {
        this.getAppInfo();
    }
    checkPlatform() {
        if (this.platform.is('desktop')) {
            this.device = 'desktop';
        }
        else if (this.platform.is('mobile')) {
            this.device = 'mobile';
        }
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
                this.loadBalanceSheet();
            }
        });
    }
    loadBalanceSheet() {
        var _a, _b;
        if (!((_a = this.store_info) === null || _a === void 0 ? void 0 : _a.id) || !((_b = this.year) === null || _b === void 0 ? void 0 : _b.id))
            return;
        this.loading = true;
        this.showEmpty = false;
        this.api.getComprehensiveBalanceSheet(this.store_info.id, this.year.id).subscribe((data) => {
            this.loading = false;
            if (data && data.accounts) {
                this.accounts = data.accounts;
                this.summary = data.summary;
                this.applyFilters();
            }
            else {
                this.showEmpty = true;
                this.accounts = [];
            }
        }, (error) => {
            console.error('Error loading balance sheet:', error);
            this.loading = false;
            this.showEmpty = true;
            this.presentToast('خطأ في تحميل ميزان المراجعة', 'danger');
        });
    }
    segmentChanged(event) {
        this.segmentValue = event.detail.value;
        this.applyFilters();
    }
    balanceFilterChanged() {
        this.applyFilters();
    }
    applyFilters() {
        let filtered = [...this.accounts];
        // Apply category filter
        if (this.segmentValue !== 'all') {
            switch (this.segmentValue) {
                case 'customer':
                    filtered = filtered.filter(acc => acc.cat_id == 1);
                    break;
                case 'supplier':
                    filtered = filtered.filter(acc => acc.cat_id == 2);
                    break;
                case 'sales':
                    filtered = filtered.filter(acc => acc.ac_id == 8);
                    break;
                case 'purchases':
                    filtered = filtered.filter(acc => acc.ac_id == 9);
                    break;
                case 'other':
                    filtered = filtered.filter(acc => ![1, 2, 8, 9].includes(acc.ac_id));
                    break;
            }
        }
        // Apply balance filter
        if (this.showOnlyWithBalance) {
            filtered = filtered.filter(acc => acc.display_debit > 0 || acc.display_credit > 0);
        }
        this.filteredAccounts = filtered;
        this.calculateFilteredTotals();
        this.applySorting();
    }
    calculateFilteredTotals() {
        this.summary = {
            total_accounts: this.filteredAccounts.length,
            grand_debit_total: this.filteredAccounts.reduce((sum, acc) => sum + acc.display_debit, 0),
            grand_credit_total: this.filteredAccounts.reduce((sum, acc) => sum + acc.display_credit, 0),
            difference: 0
        };
        this.summary.difference = this.summary.grand_debit_total - this.summary.grand_credit_total;
    }
    // Format balance display with English numbers
    formatBalance(balance) {
        if (!balance && balance !== 0)
            return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(Math.abs(balance));
    }
    // Get account type display
    getAccountTypeDisplay(account) {
        if (account.ac_id == 1)
            return 'عميل';
        if (account.ac_id == 2)
            return 'مورد';
        if (account.ac_id == 8)
            return 'مبيعات';
        if (account.ac_id == 9)
            return 'مشتريات';
        return account.sub_type;
    }
    // Get balance status display
    getBalanceStatusDisplay(account) {
        if (account.balance_status === 'debit')
            return 'مدين';
        if (account.balance_status === 'credit')
            return 'دائن';
        return 'متوازن';
    }
    // Get absolute value (helper for template)
    getAbsoluteValue(value) {
        if (!value && value !== 0)
            return 0;
        return Math.abs(value);
    }
    // Refresh data
    refresh() {
        this.loadBalanceSheet();
    }
    presentToast(message, color = 'primary') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 2000,
                color: color,
                cssClass: 'cust_Toast',
                mode: 'ios',
                position: 'top'
            });
            yield toast.present();
        });
    }
    // Apply sorting to filtered accounts
    applySorting() {
        if (this.currentSort) {
            this.sortedAccounts = this.sortingService.sortData(this.filteredAccounts, this.currentSort.column, this.currentSort.direction);
        }
        else {
            this.sortedAccounts = [...this.filteredAccounts];
        }
    }
    // Handle column sort
    sortBy(column) {
        const direction = this.sortingService.getNextSortDirection(column, this.currentSort);
        this.currentSort = { column, direction };
        this.applySorting();
    }
    // Get sort icon for column
    getSortIcon(column) {
        return this.sortingService.getSortIcon(column, this.currentSort);
    }
    // Export functionality
    exportToPDF() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.filteredAccounts || this.filteredAccounts.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('balance-sheet2'),
                subtitle: this.generateSubtitle(),
                fileName: `balance-sheet-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.filteredAccounts,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'balance-sheet2',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToPDF(config);
        });
    }
    exportToExcel() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.filteredAccounts || this.filteredAccounts.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('balance-sheet2'),
                subtitle: this.generateSubtitle(),
                fileName: `balance-sheet-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.filteredAccounts,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'balance-sheet2',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToExcel(config);
        });
    }
    generateSubtitle() {
        let subtitle = '';
        // Add filter type
        const filterLabels = {
            'all': 'جميع الحسابات',
            'customer': 'العملاء',
            'supplier': 'الموردون',
            'sales': 'حسابات المبيعات',
            'purchases': 'حسابات المشتريات',
            'other': 'الحسابات الأخرى'
        };
        if (this.segmentValue && this.segmentValue !== 'all') {
            subtitle = `فلتر: ${filterLabels[this.segmentValue]}`;
        }
        if (this.showOnlyWithBalance) {
            subtitle = subtitle ? `${subtitle} - الحسابات ذات الرصيد فقط` : 'الحسابات ذات الرصيد فقط';
        }
        return subtitle;
    }
    getExportColumns() {
        return [
            { key: 'sub_name', title: 'اسم الحساب', width: 25, type: 'text' },
            { key: 'cat_name', title: 'نوع الحساب', width: 15, type: 'text' },
            { key: 'opening_balance', title: 'الرصيد الافتتاحي', width: 15, type: 'currency' },
            { key: 'total_debit', title: 'إجمالي المدين', width: 15, type: 'currency' },
            { key: 'total_credit', title: 'إجمالي الدائن', width: 15, type: 'currency' },
            { key: 'current_balance', title: 'الرصيد الحالي', width: 15, type: 'currency' },
            { key: 'balance_type', title: 'نوع الرصيد', width: 10, type: 'text' }
        ];
    }
};
BalanceSheet2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _services_sorting_service__WEBPACK_IMPORTED_MODULE_4__.SortingService },
    { type: _services_export_service__WEBPACK_IMPORTED_MODULE_5__.ExportService }
];
BalanceSheet2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-balance-sheet2',
        template: _balance_sheet2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_balance_sheet2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BalanceSheet2Page);



/***/ }),

/***/ 68506:
/*!********************************************************************!*\
  !*** ./src/app/balance-sheet2/balance-sheet2.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "/* Modern Balance Sheet Styles */\n/* ======================================\n   BASE STYLES - Modern Glass Design\n   ====================================== */\n.modern-content {\n  --background: linear-gradient(135deg,\n    rgba(255, 255, 255, 0.1),\n    rgba(255, 255, 255, 0.05)\n  );\n  --color: var(--ion-color-dark);\n  min-height: 100vh;\n  padding: 8px;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n.modern-content::before {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1), rgba(245, 166, 35, 0.1));\n  animation: gradientShift 15s ease infinite;\n  z-index: -1;\n}\n@keyframes gradientShift {\n  0%, 100% {\n    background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1), rgba(245, 166, 35, 0.1));\n  }\n  50% {\n    background: linear-gradient(225deg, rgba(245, 166, 35, 0.1), rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n  }\n}\n/* ======================================\n   LOADING STYLES\n   ====================================== */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  gap: 16px;\n}\n.loading-container ion-spinner {\n  width: 48px;\n  height: 48px;\n  --color: var(--ion-color-primary);\n}\n.loading-container .loading-text {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n  margin: 0;\n}\n/* ======================================\n   MAIN CONTAINER\n   ====================================== */\n.main-container {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n/* ======================================\n   CARD STYLES\n   ====================================== */\n.filter-card, .summary-card, .table-card, .mobile-header-card, .mobile-account-card {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);\n  margin: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filter-card:hover, .summary-card:hover, .table-card:hover, .mobile-header-card:hover, .mobile-account-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3);\n}\n/* ======================================\n   FILTER CARD STYLES\n   ====================================== */\n.filter-content {\n  padding: 16px;\n}\n.segment-container {\n  margin-bottom: 16px;\n}\n.segment-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 12px;\n}\n.balance-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.balance-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 44px;\n}\n.balance-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.balance-segment ion-segment-button .segment-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 6px;\n}\n.balance-segment ion-segment-button .segment-content ion-icon {\n  font-size: 16px;\n}\n.balance-segment ion-segment-button .segment-content span {\n  font-size: 12px;\n  font-weight: 500;\n}\n.balance-filter ion-item {\n  --background: transparent;\n  --color: var(--ion-color-dark);\n  --padding-start: 0;\n}\n.balance-filter ion-item ion-label {\n  font-weight: 500;\n}\n.balance-filter ion-item ion-checkbox {\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-primary);\n}\n/* ======================================\n   SUMMARY CARD STYLES\n   ====================================== */\n.summary-content {\n  padding: 16px;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  grid-gap: 16px;\n  gap: 16px;\n}\n.summary-item {\n  text-align: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 12px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.summary-item:hover {\n  background: rgba(255, 255, 255, 0.8);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.summary-item .summary-label {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n.summary-item .summary-value {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n  font-family: \"Courier New\", monospace;\n}\n.summary-item .summary-value.debit-total {\n  color: var(--ion-color-danger);\n}\n.summary-item .summary-value.credit-total {\n  color: var(--ion-color-success);\n}\n/* ======================================\n   TABLE STYLES WITH PRIMARY HEADER\n   ====================================== */\n.table-card[color=primary] .table-header {\n  background: linear-gradient(135deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n  color: white;\n}\n.table-card[color=primary] .table-header .table-title {\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.table-card[color=primary] .table-header .table-title ion-icon {\n  font-size: 22px;\n}\n.table-card[color=primary] .table-header .table-title .account-count {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n}\n.table-content {\n  padding: 0;\n}\n.table-container {\n  overflow-x: auto;\n  overflow-y: visible;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  position: relative;\n  margin-bottom: 80px;\n}\n.table-container::-webkit-scrollbar {\n  height: 8px;\n}\n.table-container::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n}\n.table-container::-webkit-scrollbar-thumb {\n  background: rgba(74, 144, 226, 0.6);\n  border-radius: 4px;\n}\n.table-container::-webkit-scrollbar-thumb:hover {\n  background: rgba(74, 144, 226, 0.8);\n}\n.modern-table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 14px;\n}\n.modern-table thead {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n}\n.modern-table thead th {\n  padding: 16px 12px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  border-bottom: 2px solid rgba(74, 144, 226, 0.2);\n  white-space: nowrap;\n  font-size: 13px;\n}\n.modern-table tbody .table-row {\n  transition: all 0.2s ease;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.modern-table tbody .table-row:hover {\n  background: rgba(74, 144, 226, 0.05);\n  transform: scale(1.001);\n}\n.modern-table tbody .table-row:last-child {\n  border-bottom: none;\n}\n.modern-table tbody .table-row td {\n  padding: 12px;\n  text-align: center;\n  vertical-align: middle;\n  color: var(--ion-color-dark);\n  font-size: 13px;\n}\n.modern-table tbody .table-row td.serial {\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  width: 60px;\n}\n.modern-table tbody .table-row td.account-name {\n  text-align: right;\n  font-weight: 500;\n  max-width: 200px;\n  word-break: break-word;\n}\n.modern-table tbody .table-row td.account-code {\n  color: var(--ion-color-medium);\n  font-family: \"Courier New\", monospace;\n}\n.modern-table tbody .table-row td.account-type {\n  width: 120px;\n}\n.modern-table tbody .table-row td.opening-balance, .modern-table tbody .table-row td.debit, .modern-table tbody .table-row td.credit {\n  font-family: \"Courier New\", monospace;\n  font-weight: 600;\n  width: 120px;\n}\n.modern-table tbody .table-row td .type-badge {\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.modern-table tbody .table-row td .type-badge.customer-type {\n  background: rgba(16, 220, 96, 0.1);\n  color: var(--ion-color-success);\n  border: 1px solid rgba(16, 220, 96, 0.2);\n}\n.modern-table tbody .table-row td .type-badge.supplier-type {\n  background: rgba(245, 166, 35, 0.1);\n  color: var(--ion-color-warning);\n  border: 1px solid rgba(245, 166, 35, 0.2);\n}\n.modern-table tbody .table-row td .type-badge.sales-type {\n  background: rgba(74, 144, 226, 0.1);\n  color: var(--ion-color-primary);\n  border: 1px solid rgba(74, 144, 226, 0.2);\n}\n.modern-table tbody .table-row td .type-badge.purchase-type {\n  background: rgba(220, 53, 69, 0.1);\n  color: var(--ion-color-danger);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n}\n.modern-table tbody .table-row td .status-badge {\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.modern-table tbody .table-row td .status-badge.debit-status {\n  background: rgba(220, 53, 69, 0.1);\n  color: var(--ion-color-danger);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n}\n.modern-table tbody .table-row td .status-badge.credit-status {\n  background: rgba(16, 220, 96, 0.1);\n  color: var(--ion-color-success);\n  border: 1px solid rgba(16, 220, 96, 0.2);\n}\n.modern-table tbody .table-row td .amount {\n  font-family: \"Courier New\", monospace;\n}\n.modern-table tbody .table-row td .amount.debit-amount {\n  color: var(--ion-color-danger);\n  font-weight: 600;\n}\n.modern-table tbody .table-row td .amount.credit-amount {\n  color: var(--ion-color-success);\n  font-weight: 600;\n}\n.modern-table tbody .table-row td .amount.zero-amount {\n  color: var(--ion-color-medium);\n  opacity: 0.6;\n}\n.modern-table tbody .skeleton-row td {\n  padding: 12px;\n}\n.modern-table tfoot {\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n}\n.modern-table tfoot .totals-row {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.95), rgba(80, 227, 194, 0.95));\n  border-top: 3px solid rgba(74, 144, 226, 0.8);\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.modern-table tfoot .totals-row td {\n  padding: 18px 12px;\n  font-weight: 700;\n  font-size: 14px;\n  border: none;\n  position: relative;\n}\n.modern-table tfoot .totals-row td.totals-label {\n  text-align: center;\n  color: white;\n  font-size: 16px;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.modern-table tfoot .totals-row td.debit-total, .modern-table tfoot .totals-row td.credit-total, .modern-table tfoot .totals-row td.difference-cell {\n  text-align: center;\n}\n.modern-table tfoot .totals-row td.debit-total .amount, .modern-table tfoot .totals-row td.credit-total .amount, .modern-table tfoot .totals-row td.difference-cell .amount {\n  font-family: \"Courier New\", monospace;\n  font-weight: 700;\n  font-size: 15px;\n  color: white !important;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  background: rgba(255, 255, 255, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  display: inline-block;\n  min-width: 80px;\n}\n/* ======================================\n   MOBILE STYLES\n   ====================================== */\n.mobile-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.mobile-header-card[color=primary] ion-card-header {\n  background: linear-gradient(135deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n}\n.mobile-header-card[color=primary] ion-card-header .mobile-title {\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.mobile-header-card[color=primary] ion-card-header .mobile-title ion-icon {\n  font-size: 22px;\n}\n.mobile-content {\n  padding: 16px;\n}\n.mobile-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.mobile-header .account-info {\n  flex: 1;\n}\n.mobile-header .account-info h3 {\n  margin: 0 0 4px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.mobile-header .account-info p {\n  margin: 0;\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  font-family: \"Courier New\", monospace;\n}\n.mobile-header .account-type-mobile {\n  flex-shrink: 0;\n}\n.mobile-balances {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.balance-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.balance-row:last-child {\n  border-bottom: none;\n}\n.balance-row .balance-label {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  font-weight: 500;\n}\n.balance-row .balance-value {\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n  color: var(--ion-color-dark);\n}\n.balance-row .balance-value.debit-amount {\n  color: var(--ion-color-danger);\n}\n.balance-row .balance-value.credit-amount {\n  color: var(--ion-color-success);\n}\n/* ======================================\n   EMPTY STATE\n   ====================================== */\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--ion-color-medium);\n}\n.empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty-state h4 {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n  opacity: 0.8;\n}\n/* ======================================\n   RESPONSIVE DESIGN\n   ====================================== */\n@media (max-width: 768px) {\n  .modern-content {\n    padding: 6px;\n  }\n\n  .balance-segment ion-segment-button .segment-content {\n    padding: 4px;\n  }\n  .balance-segment ion-segment-button .segment-content ion-icon {\n    font-size: 14px;\n  }\n  .balance-segment ion-segment-button .segment-content span {\n    font-size: 11px;\n  }\n\n  .summary-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n\n  .summary-item {\n    padding: 8px;\n  }\n  .summary-item .summary-label {\n    font-size: 12px;\n  }\n  .summary-item .summary-value {\n    font-size: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .summary-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .balance-segment ion-segment-button .segment-content span {\n    font-size: 10px;\n  }\n}\n.card-header-with-export {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: transparent;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.card-header-with-export .table-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: white;\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.card-header-with-export .table-title ion-icon {\n  margin-left: 8px;\n}\n.card-header-with-export .table-title .account-count {\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGFuY2Utc2hlZXQyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUVBOzsyQ0FBQTtBQUlBO0VBQ0U7OztHQUFBO0VBSUEsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZHQUFBO0VBTUEsMENBQUE7RUFDQSxXQUFBO0FBTko7QUFVQTtFQUNFO0lBQ0UsNkdBQUE7RUFQRjtFQVNBO0lBQ0UsOEdBQUE7RUFQRjtBQUNGO0FBVUE7OzJDQUFBO0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFURjtBQVdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQVRKO0FBWUU7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBVko7QUFjQTs7MkNBQUE7QUFJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWkY7QUFlQTs7MkNBQUE7QUFJQTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpRkFDRTtFQUVGLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0FBZkY7QUFpQkU7RUFDRSwyQkFBQTtFQUNBLG1GQUNFO0FBaEJOO0FBcUJBOzsyQ0FBQTtBQUlBO0VBQ0UsYUFBQTtBQW5CRjtBQXNCQTtFQUNFLG1CQUFBO0FBbkJGO0FBc0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFuQkY7QUFzQkE7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxn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MkhFO0lBQ0UsZUFBQTtFQXpISjtBQUNGO0FBNkhBO0VBQ0U7SUFDRSwwQkFBQTtFQTNIRjs7RUFpSU07SUFDRSxlQUFBO0VBOUhSO0FBQ0Y7QUFxSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0FBbklGO0FBcUlFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQW5JSjtBQXFJSTtFQUNFLGdCQUFBO0FBbklOO0FBc0lJO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBcElOIiwiZmlsZSI6ImJhbGFuY2Utc2hlZXQyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1vZGVybiBCYWxhbmNlIFNoZWV0IFN0eWxlcyAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQkFTRSBTVFlMRVMgLSBNb2Rlcm4gR2xhc3MgRGVzaWduXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubW9kZXJuLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVxuICApO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDQ1ZGVnLFxuICAgICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksXG4gICAgICByZ2JhKDgwLCAyMjcsIDE5NCwgMC4xKSxcbiAgICAgIHJnYmEoMjQ1LCAxNjYsIDM1LCAwLjEpXG4gICAgKTtcbiAgICBhbmltYXRpb246IGdyYWRpZW50U2hpZnQgMTVzIGVhc2UgaW5maW5pdGU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBncmFkaWVudFNoaWZ0IHtcbiAgMCUsIDEwMCUgeyBcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpLCByZ2JhKDgwLCAyMjcsIDE5NCwgMC4xKSwgcmdiYSgyNDUsIDE2NiwgMzUsIDAuMSkpOyBcbiAgfVxuICA1MCUgeyBcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCByZ2JhKDI0NSwgMTY2LCAzNSwgMC4xKSwgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpKTsgXG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIExPQURJTkcgU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZ2FwOiAxNnB4O1xuXG4gIGlvbi1zcGlubmVyIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbiAgLmxvYWRpbmctdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIE1BSU4gQ09OVEFJTkVSXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDQVJEIFNUWUxFU1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmZpbHRlci1jYXJkLCAuc3VtbWFyeS1jYXJkLCAudGFibGUtY2FyZCwgLm1vYmlsZS1oZWFkZXItY2FyZCwgLm1vYmlsZS1hY2NvdW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCAxMnB4IDQ4cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBGSUxURVIgQ0FSRCBTVFlMRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5maWx0ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5zZWdtZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5zZWdtZW50LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmJhbGFuY2Utc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG5cbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4zKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG5cbiAgICAuc2VnbWVudC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgcGFkZGluZzogNnB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJhbGFuY2UtZmlsdGVyIHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBcbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICBpb24tY2hlY2tib3gge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBTVU1NQVJZIENBUkQgU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uc3VtbWFyeS1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnN1bW1hcnktZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTgwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG59XG5cbi5zdW1tYXJ5LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cbiAgLnN1bW1hcnktbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuc3VtbWFyeS12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuXG4gICAgJi5kZWJpdC10b3RhbCB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgfVxuXG4gICAgJi5jcmVkaXQtdG90YWwge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFRBQkxFIFNUWUxFUyBXSVRIIFBSSU1BUlkgSEVBREVSXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4udGFibGUtY2FyZCB7XG4gICZbY29sb3I9XCJwcmltYXJ5XCJdIHtcbiAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIFxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSlcbiAgICAgICk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBcbiAgICAgIC50YWJsZS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5hY2NvdW50LWNvdW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50YWJsZS1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IHZpc2libGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4OyAvLyBBZGQgc3BhY2UgYWZ0ZXIgdGFibGUgZm9yIGZvb3RlciB2aXNpYmlsaXR5XG4gIFxuICAvLyBFbnN1cmUgZm9vdGVyIGlzIGFsd2F5cyB2aXNpYmxlXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgfVxuICBcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC44KTtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGVybi10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBcbiAgICAgIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpLCBcbiAgICAgIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpXG4gICAgKTtcblxuICAgIHRoIHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cblxuICB0Ym9keSB7XG4gICAgLnRhYmxlLXJvdyB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4wNSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDEpO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgICAgICYuc2VyaWFsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWNjb3VudC1uYW1lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWNjb3VudC1jb2RlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWNjb3VudC10eXBlIHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm9wZW5pbmctYmFsYW5jZSwgJi5kZWJpdCwgJi5jcmVkaXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudHlwZS1iYWRnZSB7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgXG4gICAgICAgICAgJi5jdXN0b21lci10eXBlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDIyMCwgOTYsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMjIwLCA5NiwgMC4yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnN1cHBsaWVyLXR5cGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDE2NiwgMzUsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsIDE2NiwgMzUsIDAuMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5zYWxlcy10eXBlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYucHVyY2hhc2UtdHlwZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDUzLCA2OSwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzLWJhZGdlIHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICAgICYuZGViaXQtc3RhdHVzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMCwgNTMsIDY5LCAwLjIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuY3JlZGl0LXN0YXR1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAyMjAsIDk2LCAwLjEpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDIyMCwgOTYsIDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFtb3VudCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICBcbiAgICAgICAgICAmLmRlYml0LWFtb3VudCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuY3JlZGl0LWFtb3VudCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnplcm8tYW1vdW50IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2tlbGV0b24tcm93IHtcbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHRmb290IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBcbiAgICAudG90YWxzLXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBcbiAgICAgICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuOTUpLCBcbiAgICAgICAgcmdiYSg4MCwgMjI3LCAxOTQsIDAuOTUpXG4gICAgICApO1xuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjgpO1xuICAgICAgYm94LXNoYWRvdzogMCAtNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICBcbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogMThweCAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBcbiAgICAgICAgJi50b3RhbHMtbGFiZWwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmRlYml0LXRvdGFsLCAmLmNyZWRpdC10b3RhbCwgJi5kaWZmZXJlbmNlLWNlbGwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBcbiAgICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBNT0JJTEUgU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubW9iaWxlLWNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ubW9iaWxlLWhlYWRlci1jYXJkIHtcbiAgJltjb2xvcj1cInByaW1hcnlcIl0ge1xuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCBcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpXG4gICAgICApO1xuICAgICAgXG4gICAgICAubW9iaWxlLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubW9iaWxlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ubW9iaWxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIFxuICAuYWNjb3VudC1pbmZvIHtcbiAgICBmbGV4OiAxO1xuICAgIFxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5hY2NvdW50LXR5cGUtbW9iaWxlIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxufVxuXG4ubW9iaWxlLWJhbGFuY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5iYWxhbmNlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gIFxuICAuYmFsYW5jZS1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAuYmFsYW5jZS12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIFxuICAgICYuZGViaXQtYW1vdW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgXG4gICAgJi5jcmVkaXQtYW1vdW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBFTVBUWSBTVEFURVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAuZW1wdHktaWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFJFU1BPTlNJVkUgREVTSUdOXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGVybi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gIH1cblxuICAuYmFsYW5jZS1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgLnNlZ21lbnQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnN1bW1hcnktZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5zdW1tYXJ5LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDhweDtcblxuICAgIC5zdW1tYXJ5LWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAuc3VtbWFyeS12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc3VtbWFyeS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5iYWxhbmNlLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAuc2VnbWVudC1jb250ZW50IHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEV4cG9ydCBidXR0b25zIHN0eWxpbmdcbi5jYXJkLWhlYWRlci13aXRoLWV4cG9ydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG5cbiAgLnRhYmxlLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDE7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgIC5hY2NvdW50LWNvdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICB9XG59Il19 */";

/***/ }),

/***/ 79529:
/*!********************************************************************!*\
  !*** ./src/app/balance-sheet2/balance-sheet2.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"glass-menu-button\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"glass-title\">ميزان المراجعة والأرصدة</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refresh()\">\n        <ion-icon name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info\" class=\"main-container\">\n    \n    <!-- Filter Card -->\n    <ion-card class=\"filter-card\">\n      <ion-card-content class=\"filter-content\">\n        <!-- Segment Filter -->\n        <div class=\"segment-container\">\n          <ion-label class=\"segment-label\">تصفية الحسابات:</ion-label>\n          <ion-segment [(ngModel)]=\"segmentValue\" (ionChange)=\"segmentChanged($event)\" class=\"balance-segment\">\n            <ion-segment-button value=\"all\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"list-outline\"></ion-icon>\n                <span>جميع الحسابات</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"customer\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>العملاء</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"supplier\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"business-outline\"></ion-icon>\n                <span>الموردون</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"sales\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"trending-up-outline\"></ion-icon>\n                <span>المبيعات</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"purchases\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"trending-down-outline\"></ion-icon>\n                <span>المشتريات</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"other\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"folder-outline\"></ion-icon>\n                <span>أخرى</span>\n              </div>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n        <!-- Balance Filter -->\n        <div class=\"balance-filter\">\n          <ion-item lines=\"none\">\n            <ion-checkbox \n              [(ngModel)]=\"showOnlyWithBalance\" \n              (ionChange)=\"balanceFilterChanged()\"\n              slot=\"start\">\n            </ion-checkbox>\n            <ion-label>عرض الحسابات ذات الرصيد فقط</ion-label>\n          </ion-item>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Summary Card -->\n    <ion-card class=\"summary-card\" *ngIf=\"!loading\">\n      <ion-card-content class=\"summary-content\">\n        <div class=\"summary-grid\">\n          <div class=\"summary-item\">\n            <div class=\"summary-label\">عدد الحسابات</div>\n            <div class=\"summary-value\">{{ summary.total_accounts }}</div>\n          </div>\n          <div class=\"summary-item\">\n            <div class=\"summary-label\">إجمالي المدين</div>\n            <div class=\"summary-value debit-total\">{{ formatBalance(summary.grand_debit_total) }}</div>\n          </div>\n          <div class=\"summary-item\">\n            <div class=\"summary-label\">إجمالي الدائن</div>\n            <div class=\"summary-value credit-total\">{{ formatBalance(summary.grand_credit_total) }}</div>\n          </div>\n          <div class=\"summary-item\">\n            <div class=\"summary-label\">الفرق</div>\n            <div class=\"summary-value\" [class.debit-total]=\"summary.difference > 0\" [class.credit-total]=\"summary.difference < 0\">\n              {{ formatBalance(getAbsoluteValue(summary.difference)) }}\n            </div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Desktop Table -->\n    <ion-card class=\"table-card\" *ngIf=\"device == 'desktop'\" color=\"primary\">\n      <ion-card-header class=\"table-header ion-no-padding\">\n        <div class=\"card-header-with-export\">\n          <ion-card-title class=\"table-title\">\n            <ion-icon name=\"analytics-outline\" slot=\"start\"></ion-icon>\n            ميزان المراجعة والأرصدة\n            <span class=\"account-count\" *ngIf=\"filteredAccounts.length > 0\">\n              ({{ filteredAccounts.length }} حساب)\n            </span>\n          </ion-card-title>\n          <app-export-buttons \n            [hasData]=\"filteredAccounts && filteredAccounts.length > 0\"\n            [isLoading]=\"loading\"\n            (exportPDF)=\"exportToPDF()\"\n            (exportExcel)=\"exportToExcel()\">\n          </app-export-buttons>\n        </div>\n      </ion-card-header>\n      <ion-card-content class=\"table-content\">\n        <div class=\"table-container\">\n          <table class=\"modern-table\">\n            <thead>\n              <tr>\n                <th>التسلسل</th>\n                <th class=\"sortable-header\" (click)=\"sortBy('sub_name')\">\n                  <ion-icon [name]=\"getSortIcon('sub_name')\" class=\"sort-icon\"></ion-icon>\n                  اسم الحساب\n                </th>\n                <th class=\"sortable-header\" (click)=\"sortBy('sub_code')\">\n                  <ion-icon [name]=\"getSortIcon('sub_code')\" class=\"sort-icon\"></ion-icon>\n                  رقم الحساب\n                </th>\n                <th class=\"sortable-header\" (click)=\"sortBy('ac_id')\">\n                  <ion-icon [name]=\"getSortIcon('ac_id')\" class=\"sort-icon\"></ion-icon>\n                  نوع الحساب\n                </th>\n                <th class=\"sortable-header\" (click)=\"sortBy('opening_balance')\">\n                  <ion-icon [name]=\"getSortIcon('opening_balance')\" class=\"sort-icon\"></ion-icon>\n                  الرصيد الافتتاحي\n                </th>\n                <th class=\"sortable-header\" (click)=\"sortBy('display_debit')\">\n                  <ion-icon [name]=\"getSortIcon('display_debit')\" class=\"sort-icon\"></ion-icon>\n                  مدين (عليه)\n                </th>\n                <th class=\"sortable-header\" (click)=\"sortBy('display_credit')\">\n                  <ion-icon [name]=\"getSortIcon('display_credit')\" class=\"sort-icon\"></ion-icon>\n                  دائن (له)\n                </th>\n                <th class=\"sortable-header\" (click)=\"sortBy('balance_status')\">\n                  <ion-icon [name]=\"getSortIcon('balance_status')\" class=\"sort-icon\"></ion-icon>\n                  حالة الرصيد\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let account of sortedAccounts; let i = index\" class=\"table-row\">\n                <td class=\"serial\">{{ i + 1 }}</td>\n                <td class=\"account-name\">{{ account.sub_name }}</td>\n                <td class=\"account-code\">{{ account.sub_code || 'غير محدد' }}</td>\n                <td class=\"account-type\">\n                  <span class=\"type-badge\" [ngClass]=\"{'customer-type': account.ac_id == 1, 'supplier-type': account.ac_id == 2, 'sales-type': account.ac_id == 8, 'purchase-type': account.ac_id == 9}\">\n                    {{ getAccountTypeDisplay(account) }}\n                  </span>\n                </td>\n                <td class=\"opening-balance\">{{ formatBalance(account.opening_balance) }}</td>\n                <td class=\"debit\">\n                  <span *ngIf=\"account.display_debit > 0\" class=\"amount debit-amount\">\n                    {{ formatBalance(account.display_debit) }}\n                  </span>\n                  <span *ngIf=\"account.display_debit == 0\" class=\"amount zero-amount\">0.00</span>\n                </td>\n                <td class=\"credit\">\n                  <span *ngIf=\"account.display_credit > 0\" class=\"amount credit-amount\">\n                    {{ formatBalance(account.display_credit) }}\n                  </span>\n                  <span *ngIf=\"account.display_credit == 0\" class=\"amount zero-amount\">0.00</span>\n                </td>\n                <td class=\"balance-status\">\n                  <span class=\"status-badge\" [ngClass]=\"{'debit-status': account.balance_status == 'debit', 'credit-status': account.balance_status == 'credit'}\">\n                    {{ getBalanceStatusDisplay(account) }}\n                  </span>\n                </td>\n              </tr>\n              \n              <!-- Loading Skeleton -->\n              <tr *ngIf=\"loading\" class=\"skeleton-row\">\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n              </tr>\n            </tbody>\n            \n            <!-- Totals Footer -->\n            <tfoot *ngIf=\"filteredAccounts.length > 0\">\n              <tr class=\"totals-row\">\n                <td colspan=\"5\" class=\"totals-label\">الإجمالي:</td>\n                <td class=\"debit-total\">\n                  <span class=\"amount debit-amount\">{{ formatBalance(summary.grand_debit_total) }}</span>\n                </td>\n                <td class=\"credit-total\">\n                  <span class=\"amount credit-amount\">{{ formatBalance(summary.grand_credit_total) }}</span>\n                </td>\n                <td class=\"difference-cell\">\n                  <span class=\"amount\" [class.debit-amount]=\"summary.difference > 0\" [class.credit-amount]=\"summary.difference < 0\">\n                    {{ formatBalance(getAbsoluteValue(summary.difference)) }}\n                  </span>\n                </td>\n              </tr>\n            </tfoot>\n          </table>\n        </div>\n        \n        <!-- Empty State -->\n        <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n          <ion-icon name=\"analytics-outline\" class=\"empty-icon\"></ion-icon>\n          <h4>لا توجد حسابات</h4>\n          <p>لم يتم العثور على أي حسابات</p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Mobile Cards -->\n    <div class=\"mobile-cards\" *ngIf=\"device == 'mobile'\">\n      <ion-card class=\"mobile-header-card\" color=\"primary\">\n        <ion-card-header>\n          <ion-card-title class=\"mobile-title\">\n            <ion-icon name=\"analytics-outline\" slot=\"start\"></ion-icon>\n            ميزان المراجعة\n          </ion-card-title>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card class=\"mobile-account-card\" *ngFor=\"let account of sortedAccounts; let i = index\">\n        <ion-card-content class=\"mobile-content\">\n          <div class=\"mobile-header\">\n            <div class=\"account-info\">\n              <h3>{{ account.sub_name }}</h3>\n              <p>{{ account.sub_code || 'غير محدد' }}</p>\n            </div>\n            <div class=\"account-type-mobile\">\n              <span class=\"type-badge\" [ngClass]=\"{'customer-type': account.ac_id == 1, 'supplier-type': account.ac_id == 2, 'sales-type': account.ac_id == 8, 'purchase-type': account.ac_id == 9}\">\n                {{ getAccountTypeDisplay(account) }}\n              </span>\n            </div>\n          </div>\n          \n          <div class=\"mobile-balances\">\n            <div class=\"balance-row\">\n              <span class=\"balance-label\">الرصيد الافتتاحي:</span>\n              <span class=\"balance-value\">{{ formatBalance(account.opening_balance) }}</span>\n            </div>\n            <div class=\"balance-row\" *ngIf=\"account.display_debit > 0\">\n              <span class=\"balance-label\">مدين (عليه):</span>\n              <span class=\"balance-value debit-amount\">{{ formatBalance(account.display_debit) }}</span>\n            </div>\n            <div class=\"balance-row\" *ngIf=\"account.display_credit > 0\">\n              <span class=\"balance-label\">دائن (له):</span>\n              <span class=\"balance-value credit-amount\">{{ formatBalance(account.display_credit) }}</span>\n            </div>\n            <div class=\"balance-row\">\n              <span class=\"balance-label\">حالة الرصيد:</span>\n              <span class=\"status-badge\" [ngClass]=\"{'debit-status': account.balance_status == 'debit', 'credit-status': account.balance_status == 'credit'}\">\n                {{ getBalanceStatusDisplay(account) }}\n              </span>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      \n      <!-- Empty State Mobile -->\n      <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n        <ion-icon name=\"analytics-outline\" class=\"empty-icon\"></ion-icon>\n        <h4>لا توجد حسابات</h4>\n        <p>لم يتم العثور على أي حسابات</p>\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_balance-sheet2_balance-sheet2_module_ts.js.map
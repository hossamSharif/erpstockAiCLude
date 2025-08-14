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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _balance_sheet2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-sheet2-routing.module */ 4173);
/* harmony import */ var _balance_sheet2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance-sheet2.page */ 81522);







let BalanceSheet2PageModule = class BalanceSheet2PageModule {
};
BalanceSheet2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _balance_sheet2_routing_module__WEBPACK_IMPORTED_MODULE_0__.BalanceSheet2PageRoutingModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _balance_sheet2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-sheet2.page.html?ngResource */ 79529);
/* harmony import */ var _balance_sheet2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance-sheet2.page.scss?ngResource */ 68506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);









let BalanceSheet2Page = class BalanceSheet2Page {
    constructor(platform, alertController, router, storage, modalController, loadingController, datePipe, api, toast) {
        this.platform = platform;
        this.alertController = alertController;
        this.router = router;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        // Core data
        this.accounts = [];
        this.filteredAccounts = [];
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
};
BalanceSheet2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
BalanceSheet2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = "/* Modern Balance Sheet Styles */\n/* ======================================\n   BASE STYLES - Modern Glass Design\n   ====================================== */\n.modern-content {\n  --background: linear-gradient(135deg,\n    rgba(255, 255, 255, 0.1),\n    rgba(255, 255, 255, 0.05)\n  );\n  --color: var(--ion-color-dark);\n  min-height: 100vh;\n  padding: 8px;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n.modern-content::before {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1), rgba(245, 166, 35, 0.1));\n  animation: gradientShift 15s ease infinite;\n  z-index: -1;\n}\n@keyframes gradientShift {\n  0%, 100% {\n    background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1), rgba(245, 166, 35, 0.1));\n  }\n  50% {\n    background: linear-gradient(225deg, rgba(245, 166, 35, 0.1), rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n  }\n}\n/* ======================================\n   LOADING STYLES\n   ====================================== */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  gap: 16px;\n}\n.loading-container ion-spinner {\n  width: 48px;\n  height: 48px;\n  --color: var(--ion-color-primary);\n}\n.loading-container .loading-text {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n  margin: 0;\n}\n/* ======================================\n   MAIN CONTAINER\n   ====================================== */\n.main-container {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n/* ======================================\n   CARD STYLES\n   ====================================== */\n.filter-card, .summary-card, .table-card, .mobile-header-card, .mobile-account-card {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);\n  margin: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filter-card:hover, .summary-card:hover, .table-card:hover, .mobile-header-card:hover, .mobile-account-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3);\n}\n/* ======================================\n   FILTER CARD STYLES\n   ====================================== */\n.filter-content {\n  padding: 16px;\n}\n.segment-container {\n  margin-bottom: 16px;\n}\n.segment-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 12px;\n}\n.balance-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.balance-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 44px;\n}\n.balance-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.balance-segment ion-segment-button .segment-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 6px;\n}\n.balance-segment ion-segment-button .segment-content ion-icon {\n  font-size: 16px;\n}\n.balance-segment ion-segment-button .segment-content span {\n  font-size: 12px;\n  font-weight: 500;\n}\n.balance-filter ion-item {\n  --background: transparent;\n  --color: var(--ion-color-dark);\n  --padding-start: 0;\n}\n.balance-filter ion-item ion-label {\n  font-weight: 500;\n}\n.balance-filter ion-item ion-checkbox {\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-primary);\n}\n/* ======================================\n   SUMMARY CARD STYLES\n   ====================================== */\n.summary-content {\n  padding: 16px;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  grid-gap: 16px;\n  gap: 16px;\n}\n.summary-item {\n  text-align: center;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 12px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.summary-item:hover {\n  background: rgba(255, 255, 255, 0.8);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.summary-item .summary-label {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n.summary-item .summary-value {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n  font-family: \"Courier New\", monospace;\n}\n.summary-item .summary-value.debit-total {\n  color: var(--ion-color-danger);\n}\n.summary-item .summary-value.credit-total {\n  color: var(--ion-color-success);\n}\n/* ======================================\n   TABLE STYLES WITH PRIMARY HEADER\n   ====================================== */\n.table-card[color=primary] .table-header {\n  background: linear-gradient(135deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n  color: white;\n}\n.table-card[color=primary] .table-header .table-title {\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.table-card[color=primary] .table-header .table-title ion-icon {\n  font-size: 22px;\n}\n.table-card[color=primary] .table-header .table-title .account-count {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 400;\n}\n.table-content {\n  padding: 0;\n}\n.table-container {\n  overflow-x: auto;\n  overflow-y: visible;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  position: relative;\n  margin-bottom: 80px;\n}\n.table-container::-webkit-scrollbar {\n  height: 8px;\n}\n.table-container::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n}\n.table-container::-webkit-scrollbar-thumb {\n  background: rgba(74, 144, 226, 0.6);\n  border-radius: 4px;\n}\n.table-container::-webkit-scrollbar-thumb:hover {\n  background: rgba(74, 144, 226, 0.8);\n}\n.modern-table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 14px;\n}\n.modern-table thead {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n}\n.modern-table thead th {\n  padding: 16px 12px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  border-bottom: 2px solid rgba(74, 144, 226, 0.2);\n  white-space: nowrap;\n  font-size: 13px;\n}\n.modern-table tbody .table-row {\n  transition: all 0.2s ease;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.modern-table tbody .table-row:hover {\n  background: rgba(74, 144, 226, 0.05);\n  transform: scale(1.001);\n}\n.modern-table tbody .table-row:last-child {\n  border-bottom: none;\n}\n.modern-table tbody .table-row td {\n  padding: 12px;\n  text-align: center;\n  vertical-align: middle;\n  color: var(--ion-color-dark);\n  font-size: 13px;\n}\n.modern-table tbody .table-row td.serial {\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  width: 60px;\n}\n.modern-table tbody .table-row td.account-name {\n  text-align: right;\n  font-weight: 500;\n  max-width: 200px;\n  word-break: break-word;\n}\n.modern-table tbody .table-row td.account-code {\n  color: var(--ion-color-medium);\n  font-family: \"Courier New\", monospace;\n}\n.modern-table tbody .table-row td.account-type {\n  width: 120px;\n}\n.modern-table tbody .table-row td.opening-balance, .modern-table tbody .table-row td.debit, .modern-table tbody .table-row td.credit {\n  font-family: \"Courier New\", monospace;\n  font-weight: 600;\n  width: 120px;\n}\n.modern-table tbody .table-row td .type-badge {\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.modern-table tbody .table-row td .type-badge.customer-type {\n  background: rgba(16, 220, 96, 0.1);\n  color: var(--ion-color-success);\n  border: 1px solid rgba(16, 220, 96, 0.2);\n}\n.modern-table tbody .table-row td .type-badge.supplier-type {\n  background: rgba(245, 166, 35, 0.1);\n  color: var(--ion-color-warning);\n  border: 1px solid rgba(245, 166, 35, 0.2);\n}\n.modern-table tbody .table-row td .type-badge.sales-type {\n  background: rgba(74, 144, 226, 0.1);\n  color: var(--ion-color-primary);\n  border: 1px solid rgba(74, 144, 226, 0.2);\n}\n.modern-table tbody .table-row td .type-badge.purchase-type {\n  background: rgba(220, 53, 69, 0.1);\n  color: var(--ion-color-danger);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n}\n.modern-table tbody .table-row td .status-badge {\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.modern-table tbody .table-row td .status-badge.debit-status {\n  background: rgba(220, 53, 69, 0.1);\n  color: var(--ion-color-danger);\n  border: 1px solid rgba(220, 53, 69, 0.2);\n}\n.modern-table tbody .table-row td .status-badge.credit-status {\n  background: rgba(16, 220, 96, 0.1);\n  color: var(--ion-color-success);\n  border: 1px solid rgba(16, 220, 96, 0.2);\n}\n.modern-table tbody .table-row td .amount {\n  font-family: \"Courier New\", monospace;\n}\n.modern-table tbody .table-row td .amount.debit-amount {\n  color: var(--ion-color-danger);\n  font-weight: 600;\n}\n.modern-table tbody .table-row td .amount.credit-amount {\n  color: var(--ion-color-success);\n  font-weight: 600;\n}\n.modern-table tbody .table-row td .amount.zero-amount {\n  color: var(--ion-color-medium);\n  opacity: 0.6;\n}\n.modern-table tbody .skeleton-row td {\n  padding: 12px;\n}\n.modern-table tfoot {\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n}\n.modern-table tfoot .totals-row {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.95), rgba(80, 227, 194, 0.95));\n  border-top: 3px solid rgba(74, 144, 226, 0.8);\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.modern-table tfoot .totals-row td {\n  padding: 18px 12px;\n  font-weight: 700;\n  font-size: 14px;\n  border: none;\n  position: relative;\n}\n.modern-table tfoot .totals-row td.totals-label {\n  text-align: center;\n  color: white;\n  font-size: 16px;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.modern-table tfoot .totals-row td.debit-total, .modern-table tfoot .totals-row td.credit-total, .modern-table tfoot .totals-row td.difference-cell {\n  text-align: center;\n}\n.modern-table tfoot .totals-row td.debit-total .amount, .modern-table tfoot .totals-row td.credit-total .amount, .modern-table tfoot .totals-row td.difference-cell .amount {\n  font-family: \"Courier New\", monospace;\n  font-weight: 700;\n  font-size: 15px;\n  color: white !important;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  background: rgba(255, 255, 255, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  display: inline-block;\n  min-width: 80px;\n}\n/* ======================================\n   MOBILE STYLES\n   ====================================== */\n.mobile-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.mobile-header-card[color=primary] ion-card-header {\n  background: linear-gradient(135deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n}\n.mobile-header-card[color=primary] ion-card-header .mobile-title {\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.mobile-header-card[color=primary] ion-card-header .mobile-title ion-icon {\n  font-size: 22px;\n}\n.mobile-content {\n  padding: 16px;\n}\n.mobile-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.mobile-header .account-info {\n  flex: 1;\n}\n.mobile-header .account-info h3 {\n  margin: 0 0 4px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.mobile-header .account-info p {\n  margin: 0;\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  font-family: \"Courier New\", monospace;\n}\n.mobile-header .account-type-mobile {\n  flex-shrink: 0;\n}\n.mobile-balances {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.balance-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.balance-row:last-child {\n  border-bottom: none;\n}\n.balance-row .balance-label {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  font-weight: 500;\n}\n.balance-row .balance-value {\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n  color: var(--ion-color-dark);\n}\n.balance-row .balance-value.debit-amount {\n  color: var(--ion-color-danger);\n}\n.balance-row .balance-value.credit-amount {\n  color: var(--ion-color-success);\n}\n/* ======================================\n   EMPTY STATE\n   ====================================== */\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--ion-color-medium);\n}\n.empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty-state h4 {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n  opacity: 0.8;\n}\n/* ======================================\n   RESPONSIVE DESIGN\n   ====================================== */\n@media (max-width: 768px) {\n  .modern-content {\n    padding: 6px;\n  }\n\n  .balance-segment ion-segment-button .segment-content {\n    padding: 4px;\n  }\n  .balance-segment ion-segment-button .segment-content ion-icon {\n    font-size: 14px;\n  }\n  .balance-segment ion-segment-button .segment-content span {\n    font-size: 11px;\n  }\n\n  .summary-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n\n  .summary-item {\n    padding: 8px;\n  }\n  .summary-item .summary-label {\n    font-size: 12px;\n  }\n  .summary-item .summary-value {\n    font-size: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .summary-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .balance-segment ion-segment-button .segment-content span {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGFuY2Utc2hlZXQyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUVBOzsyQ0FBQTtBQUlBO0VBQ0U7OztHQUFBO0VBSUEsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZHQUFBO0VBTUEsMENBQUE7RUFDQSxXQUFBO0FBTko7QUFVQTtFQUNFO0lBQ0UsNkdBQUE7RUFQRjtFQVNBO0lBQ0UsOEdBQUE7RUFQRjtBQUNGO0FBVUE7OzJDQUFBO0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFURjtBQVdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQVRKO0FBWUU7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBVko7QUFjQTs7MkNBQUE7QUFJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWkY7QUFlQTs7MkNBQUE7QUFJQTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpRkFDRTtFQUVGLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0FBZkY7QUFpQkU7RUFDRSwyQkFBQTtFQUNBLG1GQUNFO0FBaEJOO0FBcUJBOzsyQ0FBQTtBQUlBO0VBQ0UsYUFBQTtBQW5CRjtBQXNCQTtFQUNFLG1CQUFBO0FBbkJGO0FBc0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFuQkY7QUFzQkE7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxn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MkhFO0lBQ0UsZUFBQTtFQXpISjtBQUNGO0FBNkhBO0VBQ0U7SUFDRSwwQkFBQTtFQTNIRjs7RUFpSU07SUFDRSxlQUFBO0VBOUhSO0FBQ0YiLCJmaWxlIjoiYmFsYW5jZS1zaGVldDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW9kZXJuIEJhbGFuY2UgU2hlZXQgU3R5bGVzICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBCQVNFIFNUWUxFUyAtIE1vZGVybiBHbGFzcyBEZXNpZ25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5tb2Rlcm4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCBcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXG4gICk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSxcbiAgICAgIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpLFxuICAgICAgcmdiYSgyNDUsIDE2NiwgMzUsIDAuMSlcbiAgICApO1xuICAgIGFuaW1hdGlvbjogZ3JhZGllbnRTaGlmdCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50U2hpZnQge1xuICAwJSwgMTAwJSB7IFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpLCByZ2JhKDI0NSwgMTY2LCAzNSwgMC4xKSk7IFxuICB9XG4gIDUwJSB7IFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHJnYmEoMjQ1LCAxNjYsIDM1LCAwLjEpLCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSwgcmdiYSg4MCwgMjI3LCAxOTQsIDAuMSkpOyBcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTE9BRElORyBTVFlMRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBnYXA6IDE2cHg7XG5cbiAgaW9uLXNwaW5uZXIge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAubG9hZGluZy10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTUFJTiBDT05UQUlORVJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENBUkQgU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZmlsdGVyLWNhcmQsIC5zdW1tYXJ5LWNhcmQsIC50YWJsZS1jYXJkLCAubW9iaWxlLWhlYWRlci1jYXJkLCAubW9iaWxlLWFjY291bnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogXG4gICAgMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDEycHggNDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEZJTFRFUiBDQVJEIFNUWUxFU1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmZpbHRlci1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnNlZ21lbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnNlZ21lbnQtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uYmFsYW5jZS1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgbWluLWhlaWdodDogNDRweDtcblxuICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjMpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cblxuICAgIC5zZWdtZW50LWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBwYWRkaW5nOiA2cHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYmFsYW5jZS1maWx0ZXIge1xuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIFxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFNVTU1BUlkgQ0FSRCBTVFlMRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5zdW1tYXJ5LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uc3VtbWFyeS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbn1cblxuLnN1bW1hcnktaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICAuc3VtbWFyeS1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5zdW1tYXJ5LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG5cbiAgICAmLmRlYml0LXRvdGFsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG5cbiAgICAmLmNyZWRpdC10b3RhbCB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgVEFCTEUgU1RZTEVTIFdJVEggUFJJTUFSWSBIRUFERVJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi50YWJsZS1jYXJkIHtcbiAgJltjb2xvcj1cInByaW1hcnlcIl0ge1xuICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKVxuICAgICAgKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIFxuICAgICAgLnRhYmxlLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmFjY291bnQtY291bnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7IC8vIEFkZCBzcGFjZSBhZnRlciB0YWJsZSBmb3IgZm9vdGVyIHZpc2liaWxpdHlcbiAgXG4gIC8vIEVuc3VyZSBmb290ZXIgaXMgYWx3YXlzIHZpc2libGVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogOHB4O1xuICB9XG4gIFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjgpO1xuICAgIH1cbiAgfVxufVxuXG4ubW9kZXJuLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksIFxuICAgICAgcmdiYSg4MCwgMjI3LCAxOTQsIDAuMSlcbiAgICApO1xuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogMTZweCAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxuXG4gIHRib2R5IHtcbiAgICAudGFibGUtcm93IHtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjA1KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMSk7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG5cbiAgICAgICAgJi5zZXJpYWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY2NvdW50LW5hbWUge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY2NvdW50LWNvZGUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY2NvdW50LXR5cGUge1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYub3BlbmluZy1iYWxhbmNlLCAmLmRlYml0LCAmLmNyZWRpdCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50eXBlLWJhZGdlIHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBcbiAgICAgICAgICAmLmN1c3RvbWVyLXR5cGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMjIwLCA5NiwgMC4xKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAyMjAsIDk2LCAwLjIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuc3VwcGxpZXItdHlwZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTY2LCAzNSwgMC4xKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwgMTY2LCAzNSwgMC4yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNhbGVzLXR5cGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5wdXJjaGFzZS10eXBlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMCwgNTMsIDY5LCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMtYmFkZ2Uge1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICAgJi5kZWJpdC1zdGF0dXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCA1MywgNjksIDAuMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5jcmVkaXQtc3RhdHVzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDIyMCwgOTYsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMjIwLCA5NiwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgICAgIFxuICAgICAgICAgICYuZGViaXQtYW1vdW50IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5jcmVkaXQtYW1vdW50IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuemVyby1hbW91bnQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5za2VsZXRvbi1yb3cge1xuICAgICAgdGQge1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgdGZvb3Qge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIFxuICAgIC50b3RhbHMtcm93IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgICAgICByZ2JhKDc0LCAxNDQsIDIyNiwgMC45NSksIFxuICAgICAgICByZ2JhKDgwLCAyMjcsIDE5NCwgMC45NSlcbiAgICAgICk7XG4gICAgICBib3JkZXItdG9wOiAzcHggc29saWQgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuOCk7XG4gICAgICBib3gtc2hhZG93OiAwIC00cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgIFxuICAgICAgdGQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFxuICAgICAgICAmLnRvdGFscy1sYWJlbCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuZGViaXQtdG90YWwsICYuY3JlZGl0LXRvdGFsLCAmLmRpZmZlcmVuY2UtY2VsbCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIFxuICAgICAgICAgIC5hbW91bnQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIE1PQklMRSBTVFlMRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5tb2JpbGUtY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5tb2JpbGUtaGVhZGVyLWNhcmQge1xuICAmW2NvbG9yPVwicHJpbWFyeVwiXSB7XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIFxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSlcbiAgICAgICk7XG4gICAgICBcbiAgICAgIC5tb2JpbGUtdGl0bGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tb2JpbGUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5tb2JpbGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgXG4gIC5hY2NvdW50LWluZm8ge1xuICAgIGZsZXg6IDE7XG4gICAgXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgIH1cbiAgfVxuICBcbiAgLmFjY291bnQtdHlwZS1tb2JpbGUge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG59XG5cbi5tb2JpbGUtYmFsYW5jZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLmJhbGFuY2Utcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIFxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIC5iYWxhbmNlLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgXG4gICAgJi5kZWJpdC1hbW91bnQge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIH1cbiAgICBcbiAgICAmLmNyZWRpdC1hbW91bnQge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEVNUFRZIFNUQVRFXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXG4gIC5lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICBoNCB7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgUkVTUE9OU0lWRSBERVNJR05cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kZXJuLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDZweDtcbiAgfVxuXG4gIC5iYWxhbmNlLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAuc2VnbWVudC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3VtbWFyeS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLnN1bW1hcnktaXRlbSB7XG4gICAgcGFkZGluZzogOHB4O1xuXG4gICAgLnN1bW1hcnktbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5zdW1tYXJ5LXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zdW1tYXJ5LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmJhbGFuY2Utc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIC5zZWdtZW50LWNvbnRlbnQge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 79529:
/*!********************************************************************!*\
  !*** ./src/app/balance-sheet2/balance-sheet2.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"glass-menu-button\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"glass-title\">ميزان المراجعة والأرصدة</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refresh()\">\n        <ion-icon name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info\" class=\"main-container\">\n    \n    <!-- Filter Card -->\n    <ion-card class=\"filter-card\">\n      <ion-card-content class=\"filter-content\">\n        <!-- Segment Filter -->\n        <div class=\"segment-container\">\n          <ion-label class=\"segment-label\">تصفية الحسابات:</ion-label>\n          <ion-segment [(ngModel)]=\"segmentValue\" (ionChange)=\"segmentChanged($event)\" class=\"balance-segment\">\n            <ion-segment-button value=\"all\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"list-outline\"></ion-icon>\n                <span>جميع الحسابات</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"customer\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>العملاء</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"supplier\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"business-outline\"></ion-icon>\n                <span>الموردون</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"sales\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"trending-up-outline\"></ion-icon>\n                <span>المبيعات</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"purchases\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"trending-down-outline\"></ion-icon>\n                <span>المشتريات</span>\n              </div>\n            </ion-segment-button>\n            <ion-segment-button value=\"other\">\n              <div class=\"segment-content\">\n                <ion-icon name=\"folder-outline\"></ion-icon>\n                <span>أخرى</span>\n              </div>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n        <!-- Balance Filter -->\n        <div class=\"balance-filter\">\n          <ion-item lines=\"none\">\n            <ion-checkbox \n              [(ngModel)]=\"showOnlyWithBalance\" \n              (ionChange)=\"balanceFilterChanged()\"\n              slot=\"start\">\n            </ion-checkbox>\n            <ion-label>عرض الحسابات ذات الرصيد فقط</ion-label>\n          </ion-item>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Summary Card -->\n    <ion-card class=\"summary-card\" *ngIf=\"!loading\">\n      <ion-card-content class=\"summary-content\">\n        <div class=\"summary-grid\">\n          <div class=\"summary-item\">\n            <div class=\"summary-label\">عدد الحسابات</div>\n            <div class=\"summary-value\">{{ summary.total_accounts }}</div>\n          </div>\n          <div class=\"summary-item\">\n            <div class=\"summary-label\">إجمالي المدين</div>\n            <div class=\"summary-value debit-total\">{{ formatBalance(summary.grand_debit_total) }}</div>\n          </div>\n          <div class=\"summary-item\">\n            <div class=\"summary-label\">إجمالي الدائن</div>\n            <div class=\"summary-value credit-total\">{{ formatBalance(summary.grand_credit_total) }}</div>\n          </div>\n          <div class=\"summary-item\">\n            <div class=\"summary-label\">الفرق</div>\n            <div class=\"summary-value\" [class.debit-total]=\"summary.difference > 0\" [class.credit-total]=\"summary.difference < 0\">\n              {{ formatBalance(getAbsoluteValue(summary.difference)) }}\n            </div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Desktop Table -->\n    <ion-card class=\"table-card\" *ngIf=\"device == 'desktop'\" color=\"primary\">\n      <ion-card-header class=\"table-header\">\n        <ion-card-title class=\"table-title\">\n          <ion-icon name=\"analytics-outline\" slot=\"start\"></ion-icon>\n          ميزان المراجعة والأرصدة\n          <span class=\"account-count\" *ngIf=\"filteredAccounts.length > 0\">\n            ({{ filteredAccounts.length }} حساب)\n          </span>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"table-content\">\n        <div class=\"table-container\">\n          <table class=\"modern-table\">\n            <thead>\n              <tr>\n                <th>التسلسل</th>\n                <th>اسم الحساب</th>\n                <th>رقم الحساب</th>\n                <th>نوع الحساب</th>\n                <th>الرصيد الافتتاحي</th>\n                <th>مدين (عليه)</th>\n                <th>دائن (له)</th>\n                <th>حالة الرصيد</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let account of filteredAccounts; let i = index\" class=\"table-row\">\n                <td class=\"serial\">{{ i + 1 }}</td>\n                <td class=\"account-name\">{{ account.sub_name }}</td>\n                <td class=\"account-code\">{{ account.sub_code || 'غير محدد' }}</td>\n                <td class=\"account-type\">\n                  <span class=\"type-badge\" [ngClass]=\"{'customer-type': account.ac_id == 1, 'supplier-type': account.ac_id == 2, 'sales-type': account.ac_id == 8, 'purchase-type': account.ac_id == 9}\">\n                    {{ getAccountTypeDisplay(account) }}\n                  </span>\n                </td>\n                <td class=\"opening-balance\">{{ formatBalance(account.opening_balance) }}</td>\n                <td class=\"debit\">\n                  <span *ngIf=\"account.display_debit > 0\" class=\"amount debit-amount\">\n                    {{ formatBalance(account.display_debit) }}\n                  </span>\n                  <span *ngIf=\"account.display_debit == 0\" class=\"amount zero-amount\">0.00</span>\n                </td>\n                <td class=\"credit\">\n                  <span *ngIf=\"account.display_credit > 0\" class=\"amount credit-amount\">\n                    {{ formatBalance(account.display_credit) }}\n                  </span>\n                  <span *ngIf=\"account.display_credit == 0\" class=\"amount zero-amount\">0.00</span>\n                </td>\n                <td class=\"balance-status\">\n                  <span class=\"status-badge\" [ngClass]=\"{'debit-status': account.balance_status == 'debit', 'credit-status': account.balance_status == 'credit'}\">\n                    {{ getBalanceStatusDisplay(account) }}\n                  </span>\n                </td>\n              </tr>\n              \n              <!-- Loading Skeleton -->\n              <tr *ngIf=\"loading\" class=\"skeleton-row\">\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n              </tr>\n            </tbody>\n            \n            <!-- Totals Footer -->\n            <tfoot *ngIf=\"filteredAccounts.length > 0\">\n              <tr class=\"totals-row\">\n                <td colspan=\"5\" class=\"totals-label\">الإجمالي:</td>\n                <td class=\"debit-total\">\n                  <span class=\"amount debit-amount\">{{ formatBalance(summary.grand_debit_total) }}</span>\n                </td>\n                <td class=\"credit-total\">\n                  <span class=\"amount credit-amount\">{{ formatBalance(summary.grand_credit_total) }}</span>\n                </td>\n                <td class=\"difference-cell\">\n                  <span class=\"amount\" [class.debit-amount]=\"summary.difference > 0\" [class.credit-amount]=\"summary.difference < 0\">\n                    {{ formatBalance(getAbsoluteValue(summary.difference)) }}\n                  </span>\n                </td>\n              </tr>\n            </tfoot>\n          </table>\n        </div>\n        \n        <!-- Empty State -->\n        <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n          <ion-icon name=\"analytics-outline\" class=\"empty-icon\"></ion-icon>\n          <h4>لا توجد حسابات</h4>\n          <p>لم يتم العثور على أي حسابات</p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Mobile Cards -->\n    <div class=\"mobile-cards\" *ngIf=\"device == 'mobile'\">\n      <ion-card class=\"mobile-header-card\" color=\"primary\">\n        <ion-card-header>\n          <ion-card-title class=\"mobile-title\">\n            <ion-icon name=\"analytics-outline\" slot=\"start\"></ion-icon>\n            ميزان المراجعة\n          </ion-card-title>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card class=\"mobile-account-card\" *ngFor=\"let account of filteredAccounts; let i = index\">\n        <ion-card-content class=\"mobile-content\">\n          <div class=\"mobile-header\">\n            <div class=\"account-info\">\n              <h3>{{ account.sub_name }}</h3>\n              <p>{{ account.sub_code || 'غير محدد' }}</p>\n            </div>\n            <div class=\"account-type-mobile\">\n              <span class=\"type-badge\" [ngClass]=\"{'customer-type': account.ac_id == 1, 'supplier-type': account.ac_id == 2, 'sales-type': account.ac_id == 8, 'purchase-type': account.ac_id == 9}\">\n                {{ getAccountTypeDisplay(account) }}\n              </span>\n            </div>\n          </div>\n          \n          <div class=\"mobile-balances\">\n            <div class=\"balance-row\">\n              <span class=\"balance-label\">الرصيد الافتتاحي:</span>\n              <span class=\"balance-value\">{{ formatBalance(account.opening_balance) }}</span>\n            </div>\n            <div class=\"balance-row\" *ngIf=\"account.display_debit > 0\">\n              <span class=\"balance-label\">مدين (عليه):</span>\n              <span class=\"balance-value debit-amount\">{{ formatBalance(account.display_debit) }}</span>\n            </div>\n            <div class=\"balance-row\" *ngIf=\"account.display_credit > 0\">\n              <span class=\"balance-label\">دائن (له):</span>\n              <span class=\"balance-value credit-amount\">{{ formatBalance(account.display_credit) }}</span>\n            </div>\n            <div class=\"balance-row\">\n              <span class=\"balance-label\">حالة الرصيد:</span>\n              <span class=\"status-badge\" [ngClass]=\"{'debit-status': account.balance_status == 'debit', 'credit-status': account.balance_status == 'credit'}\">\n                {{ getBalanceStatusDisplay(account) }}\n              </span>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      \n      <!-- Empty State Mobile -->\n      <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n        <ion-icon name=\"analytics-outline\" class=\"empty-icon\"></ion-icon>\n        <h4>لا توجد حسابات</h4>\n        <p>لم يتم العثور على أي حسابات</p>\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_balance-sheet2_balance-sheet2_module_ts.js.map
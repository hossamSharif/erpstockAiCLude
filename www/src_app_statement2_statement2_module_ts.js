"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_statement2_statement2_module_ts"],{

/***/ 8134:
/*!*********************************************************!*\
  !*** ./src/app/statement2/statement2-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Statement2PageRoutingModule": () => (/* binding */ Statement2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _statement2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statement2.page */ 68694);




const routes = [
    {
        path: '',
        component: _statement2_page__WEBPACK_IMPORTED_MODULE_0__.Statement2Page
    }
];
let Statement2PageRoutingModule = class Statement2PageRoutingModule {
};
Statement2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Statement2PageRoutingModule);



/***/ }),

/***/ 16793:
/*!*************************************************!*\
  !*** ./src/app/statement2/statement2.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Statement2PageModule": () => (/* binding */ Statement2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _statement2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statement2-routing.module */ 8134);
/* harmony import */ var _statement2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement2.page */ 68694);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let Statement2PageModule = class Statement2PageModule {
};
Statement2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _statement2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Statement2PageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_statement2_page__WEBPACK_IMPORTED_MODULE_1__.Statement2Page]
    })
], Statement2PageModule);



/***/ }),

/***/ 68694:
/*!***********************************************!*\
  !*** ./src/app/statement2/statement2.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Statement2Page": () => (/* binding */ Statement2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _statement2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statement2.page.html?ngResource */ 73091);
/* harmony import */ var _statement2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement2.page.scss?ngResource */ 22349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _services_sorting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sorting.service */ 52562);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/export.service */ 79002);











let Statement2Page = class Statement2Page {
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
        this.sub_account = [];
        this.searchedAccounts = [];
        this.transactions = [];
        this.displayedTransactions = [];
        this.sortedTransactions = [];
        this.currentSort = null;
        // Account selection
        this.isAccountPopoverOpen = false;
        this.searchTerm = '';
        // App info
        this.store_info = null;
        this.user_info = null;
        this.year = null;
        // Selected account with enhanced info
        this.selectedAccount = {
            id: '',
            ac_id: '',
            sub_name: '',
            sub_type: '',
            sub_code: '',
            sub_balance: '',
            store_id: '',
            cat_id: '',
            cat_name: '',
            ac_behavior: '',
            phone: '',
            address: ''
        };
        // Balance calculations
        this.currentBalance = 0;
        this.currentStatus = '';
        this.openingBalance = 0;
        // Search and filtering
        this.radioVal = 0; // 0: recent, 1: date, 2: range
        this.startingDate = '';
        this.endDate = '';
        // No filtering - removed as requested
        // Pagination
        this.currentPage = 1;
        this.pageSize = 20;
        this.hasMoreTransactions = true;
        this.totalTransactions = 0;
        // UI state
        this.loading = false;
        this.loadingMore = false;
        this.showEmpty = false;
        this.device = '';
        // Totals
        this.sums = { debitTot: 0, creditTot: 0 };
        this.initializeData();
        this.checkPlatform();
        this.getAppInfo();
        let d = new Date();
        this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd') || '';
        this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd') || '';
    }
    ngOnInit() {
        // Component initialization
    }
    ionViewDidEnter() {
        this.getAppInfo();
    }
    ngOnDestroy() {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
    }
    initializeData() {
        this.selectedAccount = {
            id: '',
            ac_id: '',
            sub_name: 'لم يتم اختيار حساب',
            sub_type: 'غير محدد',
            sub_code: '',
            sub_balance: '0',
            store_id: '',
            cat_id: '',
            cat_name: 'غير محدد',
            ac_behavior: '',
            phone: '',
            address: ''
        };
        this.transactions = [];
        this.displayedTransactions = [];
        this.sortedTransactions = [];
        this.currentPage = 1;
        this.hasMoreTransactions = false;
        this.currentBalance = 0;
        this.currentStatus = 'debit';
        this.openingBalance = 0;
        this.sums = { debitTot: 0, creditTot: 0 };
        this.showEmpty = false;
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
                this.getAllAccount();
            }
        });
    }
    getAllAccount() {
        var _a, _b;
        if (!((_a = this.store_info) === null || _a === void 0 ? void 0 : _a.id) || !((_b = this.year) === null || _b === void 0 ? void 0 : _b.id))
            return;
        this.api.getAllAccounts(this.store_info.id, this.year.id).subscribe(data => {
            this.sub_account = data['data'] || [];
            this.searchedAccounts = this.sub_account;
        }, error => {
            this.presentToast('خطأ في تحميل الحسابات', 'danger');
        });
    }
    // Present account popover
    presentAccountPopover(event) {
        this.searchedAccounts = this.sub_account;
        this.searchTerm = '';
        this.isAccountPopoverOpen = true;
    }
    // Search accounts
    searchAccount(event) {
        const searchTerm = event.target.value.toLowerCase();
        if (searchTerm && searchTerm.trim() !== '') {
            this.searchedAccounts = this.sub_account.filter((acc) => {
                return acc.sub_name.toLowerCase().indexOf(searchTerm) > -1;
            });
        }
        else {
            this.searchedAccounts = this.sub_account;
        }
    }
    // Select account from popover
    selectAccount(account) {
        this.pickAccount(account);
        this.isAccountPopoverOpen = false;
    }
    pickAccount(account) {
        if (account) {
            this.selectedAccount = {
                id: account.id,
                ac_id: account.ac_id,
                sub_name: account.sub_name,
                sub_type: account.sub_type,
                sub_code: account.sub_code,
                sub_balance: account.sub_balance,
                store_id: account.store_id,
                cat_id: account.cat_id,
                cat_name: account.cat_name,
                ac_behavior: account.ac_behavior,
                phone: account.phone || '',
                address: account.address || ''
            };
            this.openingBalance = parseFloat(account.sub_balance) || 0;
            // Reset pagination and load transactions
            this.resetPagination();
            this.loadTransactions();
        }
        else {
            this.presentToast('خطأ في اختيار الحساب', 'danger');
        }
    }
    radioChange(ev) {
        this.radioVal = parseInt(ev.detail.value);
    }
    // Load transactions with pagination
    loadTransactions(loadMore = false) {
        if (!this.selectedAccount.id) {
            this.presentToast('الرجاء اختيار حساب أولاً', 'warning');
            return;
        }
        if (loadMore) {
            this.loadingMore = true;
            this.currentPage++;
        }
        else {
            this.loading = true;
            this.currentPage = 1;
        }
        const options = {
            search_type: this.radioVal,
            start_date: this.radioVal > 0 ? this.startingDate : null,
            end_date: this.radioVal === 2 ? this.endDate : null,
            page: this.currentPage,
            limit: this.pageSize
        };
        this.api.getStatementWithBalance(this.store_info.id, this.year.id, this.selectedAccount.id, options).subscribe(data => {
            var _a, _b;
            const response = data;
            if (response && response.transactions) {
                const newTransactions = response.transactions;
                if (loadMore) {
                    this.displayedTransactions = [...this.displayedTransactions, ...newTransactions];
                }
                else {
                    this.displayedTransactions = newTransactions;
                }
                // Update account info and balances
                this.currentBalance = response.current_balance || 0;
                this.currentStatus = response.balance_status || '';
                this.totalTransactions = ((_a = response.pagination) === null || _a === void 0 ? void 0 : _a.total_count) || 0;
                this.hasMoreTransactions = ((_b = response.pagination) === null || _b === void 0 ? void 0 : _b.has_more) || false;
                // Calculate totals for displayed transactions
                this.calculateTotals();
                // Apply sorting to transactions
                this.applySorting();
                this.showEmpty = this.displayedTransactions.length === 0;
            }
            this.loading = false;
            this.loadingMore = false;
        }, error => {
            console.error('Error loading transactions:', error);
            this.loading = false;
            this.loadingMore = false;
            if (loadMore) {
                this.currentPage--; // Revert page increment on error
            }
            this.presentToast('خطأ في تحميل البيانات', 'danger');
        });
    }
    // Load more transactions
    loadMoreTransactions() {
        if (this.hasMoreTransactions && !this.loadingMore) {
            this.loadTransactions(true);
        }
    }
    calculateTotals() {
        this.sums.debitTot = 0;
        this.sums.creditTot = 0;
        this.displayedTransactions.forEach(transaction => {
            this.sums.debitTot += parseFloat(transaction.debit) || 0;
            this.sums.creditTot += parseFloat(transaction.credit) || 0;
        });
    }
    resetPagination() {
        this.currentPage = 1;
        this.hasMoreTransactions = true;
        this.displayedTransactions = [];
        this.sortedTransactions = [];
        this.showEmpty = false;
    }
    search() {
        if (!this.selectedAccount.id) {
            this.presentToast('الرجاء اختيار حساب أولاً', 'warning');
            return;
        }
        this.resetPagination();
        this.loadTransactions();
    }
    // Filter methods removed as requested
    // Format balance display
    formatBalance(balance) {
        if (!balance && balance !== 0)
            return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(Math.abs(balance));
    }
    // Get balance color for display
    getBalanceColor() {
        if (this.currentStatus === 'credit') {
            return 'success'; // Green for credit balance
        }
        else {
            return 'danger'; // Red for debit balance
        }
    }
    // Get transaction type display
    getTransactionTypeDisplay(transaction) {
        if (transaction.source_type === 'sales') {
            return 'مبيعات';
        }
        else if (transaction.source_type === 'purchases') {
            return 'مشتريات';
        }
        else if (parseFloat(transaction.credit) > 0) {
            return 'سند قبض';
        }
        else {
            return 'سند دفع';
        }
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
    // Refresh method
    refresh() {
        this.getAllAccount();
        if (this.selectedAccount.id) {
            this.resetPagination();
            this.loadTransactions();
        }
    }
    // Apply sorting to transactions
    applySorting() {
        if (this.currentSort) {
            this.sortedTransactions = this.sortingService.sortData(this.displayedTransactions, this.currentSort.column, this.currentSort.direction);
        }
        else {
            this.sortedTransactions = [...this.displayedTransactions];
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
            if (!this.displayedTransactions || this.displayedTransactions.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('statement2'),
                subtitle: this.generateSubtitle(),
                fileName: `statement-${this.selectedAccount.sub_name || 'account'}-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.displayedTransactions,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'statement2',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToPDF(config);
        });
    }
    exportToExcel() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.displayedTransactions || this.displayedTransactions.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('statement2'),
                subtitle: this.generateSubtitle(),
                fileName: `statement-${this.selectedAccount.sub_name || 'account'}-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.displayedTransactions,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'statement2',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToExcel(config);
        });
    }
    generateSubtitle() {
        let subtitle = '';
        if (this.selectedAccount.sub_name && this.selectedAccount.sub_name !== 'لم يتم اختيار حساب') {
            subtitle = `الحساب: ${this.selectedAccount.sub_name}`;
        }
        const dateFilter = this.getDateFilter();
        if (dateFilter) {
            if (subtitle)
                subtitle += ' - ';
            if (dateFilter.type === 'single') {
                subtitle += `في تاريخ ${this.exportService['formatDateArabic'](dateFilter.date)}`;
            }
            else if (dateFilter.type === 'range') {
                subtitle += `في الفترة من ${this.exportService['formatDateArabic'](dateFilter.startDate)} إلى ${this.exportService['formatDateArabic'](dateFilter.endDate)}`;
            }
        }
        return subtitle;
    }
    getDateFilter() {
        if (this.radioVal === 1 && this.startingDate) {
            return {
                type: 'single',
                date: this.startingDate
            };
        }
        else if (this.radioVal === 2 && this.startingDate && this.endDate) {
            return {
                type: 'range',
                startDate: this.startingDate,
                endDate: this.endDate
            };
        }
        return null;
    }
    getExportColumns() {
        return [
            { key: 'j_date', title: 'التاريخ', width: 12, type: 'date' },
            { key: 'source_type', title: 'نوع القيد', width: 15, type: 'text' },
            { key: 'j_description', title: 'البيان', width: 25, type: 'text' },
            { key: 'debit_amount', title: 'مدين', width: 12, type: 'currency' },
            { key: 'credit_amount', title: 'دائن', width: 12, type: 'currency' },
            { key: 'running_balance', title: 'الرصيد الجاري', width: 15, type: 'currency' },
            { key: 'user_name', title: 'المستخدم', width: 15, type: 'text' }
        ];
    }
};
Statement2Page.ctorParameters = () => [
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
Statement2Page.propDecorators = {
    accountPopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['accountPopover',] }]
};
Statement2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-statement2',
        template: _statement2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_statement2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Statement2Page);



/***/ }),

/***/ 22349:
/*!************************************************************!*\
  !*** ./src/app/statement2/statement2.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/* Modern Statement2 Page Styles - Following spend_record2 and sub_account2 patterns */\n/* ======================================\n   BASE STYLES - Using Modern Glass Design\n   ====================================== */\n.modern-content {\n  --background: linear-gradient(135deg,\n    rgba(255, 255, 255, 0.1),\n    rgba(255, 255, 255, 0.05)\n  );\n  --color: var(--ion-color-dark);\n  min-height: 100vh;\n  padding: 8px;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n.modern-content::before {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1), rgba(245, 166, 35, 0.1));\n  animation: gradientShift 15s ease infinite;\n  z-index: -1;\n}\n@keyframes gradientShift {\n  0%, 100% {\n    background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1), rgba(245, 166, 35, 0.1));\n  }\n  50% {\n    background: linear-gradient(225deg, rgba(245, 166, 35, 0.1), rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n  }\n}\n/* ======================================\n   LOADING STYLES\n   ====================================== */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  gap: 16px;\n}\n.loading-container ion-spinner {\n  width: 48px;\n  height: 48px;\n  --color: var(--ion-color-primary);\n}\n.loading-container .loading-text {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n  margin: 0;\n}\n/* ======================================\n   MAIN CONTAINER AND FORM STYLES\n   ====================================== */\n.main-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.form-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n/* ======================================\n   CARD STYLES - Following spend_record2 pattern\n   ====================================== */\n.form-card, .info-card, .table-card, .mobile-card {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);\n  margin: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.form-card:hover, .info-card:hover, .table-card:hover, .mobile-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.form-card.compact-card, .info-card.compact-card, .table-card.compact-card, .mobile-card.compact-card {\n  border-radius: 12px;\n}\n.form-card.compact-card .compact-content, .info-card.compact-card .compact-content, .table-card.compact-card .compact-content, .mobile-card.compact-card .compact-content {\n  padding: 12px 16px;\n}\n.card-header, .table-header, .mobile-header {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 20px;\n}\n.card-header .card-title, .card-header .table-title, .card-header .mobile-title, .table-header .card-title, .table-header .table-title, .table-header .mobile-title, .mobile-header .card-title, .mobile-header .table-title, .mobile-header .mobile-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin: 0;\n}\n.card-header .card-title .transaction-count, .card-header .table-title .transaction-count, .card-header .mobile-title .transaction-count, .table-header .card-title .transaction-count, .table-header .table-title .transaction-count, .table-header .mobile-title .transaction-count, .mobile-header .card-title .transaction-count, .mobile-header .table-title .transaction-count, .mobile-header .mobile-title .transaction-count {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  font-weight: 400;\n}\n.compact-content, .info-content, .table-content, .mobile-content {\n  padding: 20px;\n}\n.compact-content {\n  padding: 10px 16px;\n}\n/* ======================================\n   MAIN ROW LAYOUT\n   ====================================== */\n.main-row {\n  display: flex;\n  gap: 20px;\n  align-items: flex-end;\n  margin-bottom: 16px;\n}\n.account-section {\n  flex: 1;\n  width: 50%;\n}\n.search-type-section {\n  flex: 1;\n  width: 50%;\n}\n.field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n/* ======================================\n   FIELD STYLES - Following cash2 pattern for account selection\n   ====================================== */\n.field-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.field-row:last-child {\n  margin-bottom: 0;\n}\n.field-label-right {\n  min-width: 120px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  text-align: right;\n}\n.field-with-balance {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.input-with-icon {\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.input-with-icon .readonly-input {\n  --background: rgba(255, 255, 255, 0.9);\n  --border-color: rgba(0, 0, 0, 0.2);\n  --border-width: 1px;\n  --border-style: solid;\n  --border-radius: 12px;\n  --padding-start: 16px;\n  --padding-end: 45px;\n  --color: var(--ion-color-dark);\n  --placeholder-color: var(--ion-color-medium);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-height: 48px;\n  font-size: 14px;\n  font-weight: 500;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.input-with-icon .readonly-input::part(native) {\n  cursor: pointer;\n}\n.input-with-icon .dropdown-icon {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--ion-color-medium);\n  font-size: 18px;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n.input-with-icon:hover .readonly-input {\n  --background: rgba(255, 255, 255, 1);\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 4px 16px rgba(74, 144, 226, 0.2);\n  transform: translateY(-1px);\n}\n.input-with-icon:hover .dropdown-icon {\n  color: var(--ion-color-primary);\n  transform: translateY(-50%) scale(1.1);\n}\n.input-with-icon:active .readonly-input {\n  transform: translateY(0);\n}\n/* ======================================\n   FILTER SEGMENT - Following spend_record2 pattern\n   ====================================== */\n.filter-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.6);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.filter-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n}\n.filter-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n}\n.filter-segment ion-segment-button .segment-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 8px;\n}\n.filter-segment ion-segment-button .segment-content ion-icon {\n  font-size: 18px;\n}\n.filter-segment ion-segment-button .segment-content span {\n  font-size: 12px;\n  font-weight: 500;\n}\n/* ======================================\n   FILTER AND SEARCH ROW\n   ====================================== */\n.search-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 16px;\n}\n.mini-input, .mini-btn {\n  height: 40px;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.mini-input {\n  --background: rgba(255, 255, 255, 0.9);\n  --border-color: rgba(0, 0, 0, 0.2);\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.mini-input:hover, .mini-input:focus {\n  --background: rgba(255, 255, 255, 1);\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 4px 16px rgba(74, 144, 226, 0.2);\n}\n.search-btn {\n  --background: var(--ion-color-primary);\n  --color: white;\n  font-weight: 500;\n}\n.search-btn:hover {\n  --background: var(--ion-color-primary-shade);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);\n}\n/* ======================================\n   BALANCE CARD STYLES\n   ====================================== */\n/* ======================================\n   SIMPLIFIED INFO CARD STYLES\n   ====================================== */\n.info-card {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  overflow: hidden;\n}\n.info-card .info-content {\n  padding: 12px 16px;\n}\n.info-card .info-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 16px;\n  gap: 16px;\n  align-items: start;\n}\n.info-card .info-column {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-card .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-card .info-item .info-label {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.info-card .info-item .info-value {\n  font-size: 15px;\n  color: var(--ion-color-dark);\n  font-weight: 600;\n  word-wrap: break-word;\n}\n.info-card .info-item .info-value.address-value {\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n/* ======================================\n   PRIMARY CARD HEADERS\n   ====================================== */\n.table-card[color=primary] .table-header, .table-card[color=primary] .mobile-header, .mobile-card[color=primary] .table-header, .mobile-card[color=primary] .mobile-header {\n  background: linear-gradient(135deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n  color: white;\n}\n.table-card[color=primary] .table-header .table-title, .table-card[color=primary] .table-header .mobile-title, .table-card[color=primary] .mobile-header .table-title, .table-card[color=primary] .mobile-header .mobile-title, .mobile-card[color=primary] .table-header .table-title, .mobile-card[color=primary] .table-header .mobile-title, .mobile-card[color=primary] .mobile-header .table-title, .mobile-card[color=primary] .mobile-header .mobile-title {\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-card[color=primary] .table-header .table-title ion-icon, .table-card[color=primary] .table-header .mobile-title ion-icon, .table-card[color=primary] .mobile-header .table-title ion-icon, .table-card[color=primary] .mobile-header .mobile-title ion-icon, .mobile-card[color=primary] .table-header .table-title ion-icon, .mobile-card[color=primary] .table-header .mobile-title ion-icon, .mobile-card[color=primary] .mobile-header .table-title ion-icon, .mobile-card[color=primary] .mobile-header .mobile-title ion-icon {\n  font-size: 20px;\n}\n.table-card[color=primary] .table-header .table-title .transaction-count, .table-card[color=primary] .table-header .mobile-title .transaction-count, .table-card[color=primary] .mobile-header .table-title .transaction-count, .table-card[color=primary] .mobile-header .mobile-title .transaction-count, .mobile-card[color=primary] .table-header .table-title .transaction-count, .mobile-card[color=primary] .table-header .mobile-title .transaction-count, .mobile-card[color=primary] .mobile-header .table-title .transaction-count, .mobile-card[color=primary] .mobile-header .mobile-title .transaction-count {\n  color: rgba(255, 255, 255, 0.8);\n}\n/* ======================================\n   TABLE STYLES - Following spend_record2 pattern\n   ====================================== */\n.table-container {\n  overflow-x: auto;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  margin: -20px;\n  margin-top: 0;\n}\n.modern-table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 14px;\n}\n.modern-table thead {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n}\n.modern-table thead th {\n  padding: 16px 12px;\n  text-align: right;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  border-bottom: 2px solid rgba(74, 144, 226, 0.2);\n  white-space: nowrap;\n}\n.modern-table tbody .table-row {\n  transition: all 0.2s ease;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.modern-table tbody .table-row:hover {\n  background: rgba(74, 144, 226, 0.05);\n  transform: scale(1.001);\n}\n.modern-table tbody .table-row:last-child {\n  border-bottom: none;\n}\n.modern-table tbody .table-row td {\n  padding: 12px;\n  text-align: right;\n  vertical-align: middle;\n  color: var(--ion-color-dark);\n}\n.modern-table tbody .table-row td.serial {\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  width: 60px;\n}\n.modern-table tbody .table-row td.date {\n  color: var(--ion-color-medium);\n  font-size: 13px;\n  width: 100px;\n}\n.modern-table tbody .table-row td.type {\n  width: 120px;\n}\n.modern-table tbody .table-row td.details {\n  max-width: 200px;\n  word-break: break-word;\n}\n.modern-table tbody .table-row td.debit, .modern-table tbody .table-row td.credit {\n  font-weight: 600;\n  text-align: center;\n  width: 100px;\n}\n.modern-table tbody .table-row td .transaction-type {\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.modern-table tbody .table-row td .transaction-type.sales-type {\n  background: rgba(16, 220, 96, 0.1);\n  color: var(--ion-color-success);\n  border: 1px solid rgba(16, 220, 96, 0.2);\n}\n.modern-table tbody .table-row td .transaction-type.purchase-type {\n  background: rgba(245, 166, 35, 0.1);\n  color: var(--ion-color-warning);\n  border: 1px solid rgba(245, 166, 35, 0.2);\n}\n.modern-table tbody .table-row td .transaction-type.voucher-type {\n  background: rgba(74, 144, 226, 0.1);\n  color: var(--ion-color-primary);\n  border: 1px solid rgba(74, 144, 226, 0.2);\n}\n.modern-table tbody .table-row td .amount {\n  font-family: \"Courier New\", monospace;\n}\n.modern-table tbody .table-row td .amount.debit-amount {\n  color: var(--ion-color-danger);\n}\n.modern-table tbody .table-row td .amount.credit-amount {\n  color: var(--ion-color-success);\n}\n.modern-table tbody .skeleton-row td {\n  padding: 12px;\n}\n.modern-table tfoot .totals-row {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n  border-top: 2px solid rgba(74, 144, 226, 0.2);\n}\n.modern-table tfoot .totals-row td {\n  padding: 16px 12px;\n  font-weight: 600;\n}\n.modern-table tfoot .totals-row td.totals-label {\n  text-align: right;\n  color: var(--ion-color-dark);\n  font-size: 16px;\n}\n.modern-table tfoot .totals-row td.debit-total, .modern-table tfoot .totals-row td.credit-total {\n  text-align: center;\n  font-size: 16px;\n}\n.modern-table tfoot .totals-row td.debit-total .amount, .modern-table tfoot .totals-row td.credit-total .amount {\n  font-family: \"Courier New\", monospace;\n  font-weight: 700;\n  color: #000000 !important;\n}\n/* ======================================\n   MOBILE ACCORDION STYLES\n   ====================================== */\n.mobile-card .accordion-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.mobile-card .accordion-header .header-main {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mobile-card .accordion-header .header-main .transaction-type-mobile {\n  font-weight: 600;\n  font-size: 14px;\n}\n.mobile-card .accordion-header .header-main .transaction-date {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n.mobile-card .accordion-header .header-amount {\n  text-align: left;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n.mobile-card .accordion-header .header-amount .credit-amount {\n  color: var(--ion-color-success);\n}\n.mobile-card .accordion-header .header-amount .debit-amount {\n  color: var(--ion-color-danger);\n}\n/* ======================================\n   LOAD MORE AND EMPTY STATE\n   ====================================== */\n.load-more-container {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n.load-more-container .load-more-btn {\n  --background: rgba(74, 144, 226, 0.1);\n  --border-color: rgba(74, 144, 226, 0.3);\n  --color: var(--ion-color-primary);\n  border-radius: 12px;\n  height: 44px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.load-more-container .load-more-btn:hover:not([disabled]) {\n  --background: rgba(74, 144, 226, 0.2);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(74, 144, 226, 0.3);\n}\n.load-more-container .load-more-btn[disabled] {\n  opacity: 0.6;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--ion-color-medium);\n}\n.empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty-state h4 {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n  opacity: 0.8;\n}\n/* ======================================\n   FOOTER TOTALS\n   ====================================== */\n.totals-footer {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 16px;\n}\n.totals-footer .totals-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 600px;\n  margin: 0 auto;\n  gap: 20px;\n}\n.totals-footer .totals-container .total-item {\n  text-align: center;\n}\n.totals-footer .totals-container .total-item .total-label {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  margin-bottom: 4px;\n}\n.totals-footer .totals-container .total-item .total-value {\n  font-size: 16px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n.totals-footer .totals-container .total-item .total-value.debit-total {\n  color: var(--ion-color-danger);\n}\n.totals-footer .totals-container .total-item .total-value.credit-total {\n  color: var(--ion-color-success);\n}\n/* ======================================\n   ACCOUNT POPOVER STYLES\n   ====================================== */\nion-popover {\n  --max-height: 300px;\n  --min-height: 200px;\n  --width: 320px;\n  --border-radius: 12px;\n  --box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n}\nion-popover .popover-content {\n  --background: white;\n  max-height: 250px;\n  overflow-y: auto;\n}\nion-popover .popover-content ion-list {\n  background: transparent;\n  padding: 0;\n}\nion-popover .popover-content ion-list ion-item {\n  --background: transparent;\n  --border-color: rgba(0, 0, 0, 0.1);\n  --min-height: 44px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  font-size: 14px;\n}\nion-popover .popover-content ion-list ion-item:hover {\n  --background: rgba(74, 144, 226, 0.1);\n}\nion-popover .popover-content ion-list ion-item ion-label {\n  margin: 8px 0;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\nion-popover ion-header ion-toolbar {\n  --background: white;\n  --border-color: rgba(0, 0, 0, 0.1);\n  --min-height: 56px;\n}\nion-popover ion-header ion-toolbar ion-searchbar {\n  --background: rgba(244, 245, 248, 0.6);\n  --border-radius: 8px;\n  --box-shadow: none;\n  --color: var(--ion-color-dark);\n  --placeholder-color: var(--ion-color-medium);\n  padding: 8px;\n}\nion-popover ion-header ion-toolbar ion-searchbar::part(native) {\n  border-radius: 8px;\n}\n@media (max-width: 768px) {\n  ion-popover {\n    --width: 280px;\n    --max-height: 250px;\n  }\n}\n/* ======================================\n   RESPONSIVE DESIGN\n   ====================================== */\n@media (max-width: 768px) {\n  .modern-content {\n    padding: 6px;\n  }\n\n  .main-row {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n\n  .account-section {\n    width: 100%;\n  }\n\n  .search-type-section {\n    width: 100%;\n  }\n\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .field-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n  .field-row .field-label-right {\n    min-width: auto;\n    text-align: left;\n  }\n\n  .filter-search-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n  .filter-search-row .filter-btn, .filter-search-row .mini-input, .filter-search-row .search-btn {\n    width: 100%;\n  }\n\n  .info-card .info-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n  .info-card .info-column {\n    gap: 8px;\n  }\n  .info-card .info-item .info-label {\n    font-size: 12px;\n  }\n  .info-card .info-item .info-value {\n    font-size: 13px;\n  }\n\n  .totals-container {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .totals-container .total-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 8px 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .totals-container .total-item:last-child {\n    border-bottom: none;\n  }\n  .totals-container .total-item .total-label {\n    margin-bottom: 0;\n    text-align: left;\n  }\n}\n@media (max-width: 480px) {\n  .card-header, .table-header, .mobile-header {\n    padding: 16px;\n  }\n  .card-header .card-title, .card-header .table-title, .card-header .mobile-title, .table-header .card-title, .table-header .table-title, .table-header .mobile-title, .mobile-header .card-title, .mobile-header .table-title, .mobile-header .mobile-title {\n    font-size: 16px;\n  }\n\n  .compact-content, .info-content, .table-content, .mobile-content {\n    padding: 16px;\n  }\n\n  .info-card .info-grid {\n    grid-template-columns: 1fr !important;\n    gap: 8px;\n  }\n\n  .filter-segment ion-segment-button .segment-content {\n    padding: 6px;\n  }\n  .filter-segment ion-segment-button .segment-content ion-icon {\n    font-size: 16px;\n  }\n  .filter-segment ion-segment-button .segment-content span {\n    font-size: 11px;\n  }\n}\n.card-header-with-export {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: transparent;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.card-header-with-export .table-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: white;\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.card-header-with-export .table-title ion-icon {\n  margin-left: 8px;\n}\n.card-header-with-export .table-title .transaction-count {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.8);\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,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SUFDQSxjQUFBO0lBQ0EsNENBQUE7RUE5Sko7RUFnS0k7SUFDRSxtQkFBQTtFQTlKTjtFQWlLSTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUEvSk47QUFDRjtBQW9LQTtFQUNFO0lBQ0UsYUFBQTtFQWxLRjtFQW9LRTtJQUNFLGVBQUE7RUFsS0o7O0VBc0tBO0lBQ0UsYUFBQTtFQW5LRjs7RUF1S0U7SUFDRSxxQ0FBQTtJQUNBLFFBQUE7RUFwS0o7O0VBMEtJO0lBQ0UsWUFBQTtFQXZLTjtFQXlLTTtJQUNFLGVBQUE7RUF2S1I7RUEwS007SUFDRSxlQUFBO0VBeEtSO0FBQ0Y7QUErS0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0FBN0tGO0FBK0tFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQTdLSjtBQStLSTtFQUNFLGdCQUFBO0FBN0tOO0FBZ0xJO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBOUtOIiwiZmlsZSI6InN0YXRlbWVudDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW9kZXJuIFN0YXRlbWVudDIgUGFnZSBTdHlsZXMgLSBGb2xsb3dpbmcgc3BlbmRfcmVjb3JkMiBhbmQgc3ViX2FjY291bnQyIHBhdHRlcm5zICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBCQVNFIFNUWUxFUyAtIFVzaW5nIE1vZGVybiBHbGFzcyBEZXNpZ25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5tb2Rlcm4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCBcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXG4gICk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSxcbiAgICAgIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpLFxuICAgICAgcmdiYSgyNDUsIDE2NiwgMzUsIDAuMSlcbiAgICApO1xuICAgIGFuaW1hdGlvbjogZ3JhZGllbnRTaGlmdCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50U2hpZnQge1xuICAwJSwgMTAwJSB7IFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpLCByZ2JhKDI0NSwgMTY2LCAzNSwgMC4xKSk7IFxuICB9XG4gIDUwJSB7IFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHJnYmEoMjQ1LCAxNjYsIDM1LCAwLjEpLCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSwgcmdiYSg4MCwgMjI3LCAxOTQsIDAuMSkpOyBcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTE9BRElORyBTVFlMRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBnYXA6IDE2cHg7XG5cbiAgaW9uLXNwaW5uZXIge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAubG9hZGluZy10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTUFJTiBDT05UQUlORVIgQU5EIEZPUk0gU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENBUkQgU1RZTEVTIC0gRm9sbG93aW5nIHNwZW5kX3JlY29yZDIgcGF0dGVyblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmZvcm0tY2FyZCwgLmluZm8tY2FyZCwgLnRhYmxlLWNhcmQsIC5tb2JpbGUtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogXG4gICAgMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDEycHggNDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIH1cbiAgXG4gICYuY29tcGFjdC1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIFxuICAgIC5jb21wYWN0LWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZC1oZWFkZXIsIC50YWJsZS1oZWFkZXIsIC5tb2JpbGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksIFxuICAgIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpXG4gICk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgLmNhcmQtdGl0bGUsIC50YWJsZS10aXRsZSwgLm1vYmlsZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgLnRyYW5zYWN0aW9uLWNvdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG59XG5cbi5jb21wYWN0LWNvbnRlbnQsIC5pbmZvLWNvbnRlbnQsIC50YWJsZS1jb250ZW50LCAubW9iaWxlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY29tcGFjdC1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTUFJTiBST1cgTEFZT1VUXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubWFpbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmFjY291bnQtc2VjdGlvbiB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5zZWFyY2gtdHlwZS1zZWN0aW9uIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmZpZWxkLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uY29tcGFjdC1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgZmxleDogMTtcblxuICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjMpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cblxuICAgICY6aG92ZXI6bm90KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgRklFTEQgU1RZTEVTIC0gRm9sbG93aW5nIGNhc2gyIHBhdHRlcm4gZm9yIGFjY291bnQgc2VsZWN0aW9uXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZmllbGQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4uZmllbGQtbGFiZWwtcmlnaHQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmZpZWxkLXdpdGgtYmFsYW5jZSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uaW5wdXQtd2l0aC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5yZWFkb25seS1pbnB1dCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDQ1cHg7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIFxuICAgICY6OnBhcnQobmF0aXZlKSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmRyb3Bkb3duLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTZweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLnJlYWRvbmx5LWlucHV0IHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG4gICAgXG4gICAgLmRyb3Bkb3duLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjEpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICAucmVhZG9ubHktaW5wdXQge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgRklMVEVSIFNFR01FTlQgLSBGb2xsb3dpbmcgc3BlbmRfcmVjb3JkMiBwYXR0ZXJuXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZmlsdGVyLXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjMpO1xuICAgIH1cblxuICAgIC5zZWdtZW50LWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBwYWRkaW5nOiA4cHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgRklMVEVSIEFORCBTRUFSQ0ggUk9XXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uc2VhcmNoLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ubWluaS1pbnB1dCwgLm1pbmktYnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ubWluaS1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICB9XG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gICY6aG92ZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjQpO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBCQUxBTkNFIENBUkQgU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgU0lNUExJRklFRCBJTkZPIENBUkQgU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uaW5mby1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5pbmZvLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgfVxuXG4gIC5pbmZvLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxuXG4gIC5pbmZvLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5pbmZvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcblxuICAgIC5pbmZvLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC5pbmZvLXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgXG4gICAgICAmLmFkZHJlc3MtdmFsdWUge1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgUFJJTUFSWSBDQVJEIEhFQURFUlNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi50YWJsZS1jYXJkLCAubW9iaWxlLWNhcmQge1xuICAmW2NvbG9yPVwicHJpbWFyeVwiXSB7XG4gICAgLnRhYmxlLWhlYWRlciwgLm1vYmlsZS1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKVxuICAgICAgKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIFxuICAgICAgLnRhYmxlLXRpdGxlLCAubW9iaWxlLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50cmFuc2FjdGlvbi1jb3VudCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgVEFCTEUgU1RZTEVTIC0gRm9sbG93aW5nIHNwZW5kX3JlY29yZDIgcGF0dGVyblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBtYXJnaW46IC0yMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubW9kZXJuLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksIFxuICAgICAgcmdiYSg4MCwgMjI3LCAxOTQsIDAuMSlcbiAgICApO1xuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogMTZweCAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG5cbiAgdGJvZHkge1xuICAgIC50YWJsZS1yb3cge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxKTtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgdGQge1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICAgICAgICAmLnNlcmlhbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmRhdGUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi50eXBlIHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmRldGFpbHMge1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZGViaXQsICYuY3JlZGl0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNhY3Rpb24tdHlwZSB7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAmLnNhbGVzLXR5cGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMjIwLCA5NiwgMC4xKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAyMjAsIDk2LCAwLjIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYucHVyY2hhc2UtdHlwZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTY2LCAzNSwgMC4xKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwgMTY2LCAzNSwgMC4yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnZvdWNoZXItdHlwZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgICAgIFxuICAgICAgICAgICYuZGViaXQtYW1vdW50IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmNyZWRpdC1hbW91bnQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2tlbGV0b24tcm93IHtcbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHRmb290IHtcbiAgICAudG90YWxzLXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBcbiAgICAgICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksIFxuICAgICAgICByZ2JhKDgwLCAyMjcsIDE5NCwgMC4xKVxuICAgICAgKTtcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbiAgICAgIFxuICAgICAgdGQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIFxuICAgICAgICAmLnRvdGFscy1sYWJlbCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuZGViaXQtdG90YWwsICYuY3JlZGl0LXRvdGFsIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIFxuICAgICAgICAgIC5hbW91bnQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTU9CSUxFIEFDQ09SRElPTiBTVFlMRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5tb2JpbGUtY2FyZCB7XG4gIC5hY2NvcmRpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmhlYWRlci1tYWluIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgIC50cmFuc2FjdGlvbi10eXBlLW1vYmlsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLnRyYW5zYWN0aW9uLWRhdGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyLWFtb3VudCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG5cbiAgICAgIC5jcmVkaXQtYW1vdW50IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgIH1cblxuICAgICAgLmRlYml0LWFtb3VudCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIExPQUQgTU9SRSBBTkQgRU1QVFkgU1RBVEVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5sb2FkLW1vcmUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgLmxvYWQtbW9yZS1idG4ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjMpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4zKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuICB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAyMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cbiAgLmVtcHR5LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIGg0IHtcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBGT09URVIgVE9UQUxTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4udG90YWxzLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDE2cHg7XG5cbiAgLnRvdGFscy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGdhcDogMjBweDtcblxuICAgIC50b3RhbC1pdGVtIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIFxuICAgICAgLnRvdGFsLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cblxuICAgICAgLnRvdGFsLXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuXG4gICAgICAgICYuZGViaXQtdG90YWwge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuY3JlZGl0LXRvdGFsIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBBQ0NPVU5UIFBPUE9WRVIgU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5pb24tcG9wb3ZlciB7XG4gIC0tbWF4LWhlaWdodDogMzAwcHg7XG4gIC0tbWluLWhlaWdodDogMjAwcHg7XG4gIC0td2lkdGg6IDMyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4gIC5wb3BvdmVyLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIGlvbi1saXN0IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIC0tbWluLWhlaWdodDogNTZweDtcbiAgICAgIFxuICAgICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NSwgMjQ4LCAwLjYpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIFxuICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaW9uLXBvcG92ZXIge1xuICAgIC0td2lkdGg6IDI4MHB4O1xuICAgIC0tbWF4LWhlaWdodDogMjUwcHg7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFJFU1BPTlNJVkUgREVTSUdOXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGVybi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gIH1cblxuICAubWFpbi1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuICAuYWNjb3VudC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnNlYXJjaC10eXBlLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuY29tcGFjdC1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmllbGQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogOHB4O1xuXG4gICAgLmZpZWxkLWxhYmVsLXJpZ2h0IHtcbiAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgLmZpbHRlci1zZWFyY2gtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogOHB4O1xuXG4gICAgLmZpbHRlci1idG4sIC5taW5pLWlucHV0LCAuc2VhcmNoLWJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAuaW5mby1jYXJkIHtcbiAgICAuaW5mby1ncmlkIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLmluZm8tY29sdW1uIHtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cbiAgICBcbiAgICAuaW5mby1pdGVtIHtcbiAgICAgIC5pbmZvLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaW5mby12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudG90YWxzLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAudG90YWwtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRvdGFsLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jYXJkLWhlYWRlciwgLnRhYmxlLWhlYWRlciwgLm1vYmlsZS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuY2FyZC10aXRsZSwgLnRhYmxlLXRpdGxlLCAubW9iaWxlLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cblxuICAuY29tcGFjdC1jb250ZW50LCAuaW5mby1jb250ZW50LCAudGFibGUtY29udGVudCwgLm1vYmlsZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmluZm8tY2FyZCB7XG4gICAgLmluZm8tZ3JpZCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuICB9XG5cbiAgLmZpbHRlci1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgLnNlZ21lbnQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEV4cG9ydCBidXR0b25zIHN0eWxpbmdcbi5jYXJkLWhlYWRlci13aXRoLWV4cG9ydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG5cbiAgLnRhYmxlLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDE7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgIC50cmFuc2FjdGlvbi1jb3VudCB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 73091:
/*!************************************************************!*\
  !*** ./src/app/statement2/statement2.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"glass-menu-button\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"glass-title\">كشف حساب</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refresh()\">\n        <ion-icon name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info\" class=\"main-container\">\n    <div class=\"form-container\">\n      \n      <!-- Account Selection and Search Card -->\n      <ion-card class=\"form-card compact-card\">\n        <ion-card-content class=\"compact-content\">\n          <!-- Main Row: Account Selection and Search Type -->\n          <div class=\"main-row\">\n            <!-- Account Selection -->\n            <div class=\"account-section\">\n              <ion-label class=\"field-label\">الحساب</ion-label>\n              <div class=\"input-with-icon\" (click)=\"presentAccountPopover($event)\">\n                <ion-input \n                  readonly=\"true\" \n                  [value]=\"selectedAccount.sub_name || 'اختر الحساب'\" \n                  placeholder=\"اختر الحساب\"\n                  class=\"mini-input readonly-input\">\n                </ion-input>\n                <ion-icon name=\"chevron-down-outline\" class=\"dropdown-icon\"></ion-icon>\n              </div>\n            </div>\n\n            <!-- Search Type -->\n            <div class=\"search-type-section\">\n              <ion-label class=\"field-label\">نوع البحث</ion-label>\n              <ion-segment [(ngModel)]=\"radioVal\" (ionChange)=\"radioChange($event)\" class=\"compact-segment\">\n                <ion-segment-button value=\"0\">\n                  <span>العمليات الحديثة</span>\n                </ion-segment-button>\n                <ion-segment-button value=\"1\">\n                  <span>بحث في تاريخ محدد</span>\n                </ion-segment-button>\n                <ion-segment-button value=\"2\">\n                  <span>بحث في فترة زمنية</span>\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n          </div>\n          \n          <!-- Search Row -->\n          <div class=\"search-row\">\n            <!-- Date Inputs -->\n            <ion-input \n              *ngIf=\"radioVal == 1\"\n              type=\"date\" \n              [(ngModel)]=\"startingDate\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            \n            <ion-input \n              *ngIf=\"radioVal == 2\"\n              type=\"date\" \n              [(ngModel)]=\"startingDate\"\n              placeholder=\"من تاريخ\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            \n            <ion-input \n              *ngIf=\"radioVal == 2\"\n              type=\"date\" \n              [(ngModel)]=\"endDate\"\n              placeholder=\"إلى تاريخ\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            \n            <!-- Search Button -->\n            <ion-button \n              (click)=\"search()\"\n              fill=\"outline\"\n              class=\"mini-btn search-btn\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              بحث\n            </ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- Account Info Card - 4 Columns -->\n      <ion-card class=\"info-card\">\n        <ion-card-content class=\"info-content\">\n          <div class=\"info-grid\">\n            <!-- First Column: النوع -->\n            <div class=\"info-column\">\n              <div class=\"info-item\">\n                <span class=\"info-label\">النوع:</span>\n                <span class=\"info-value\">{{ selectedAccount.sub_type }}</span>\n              </div>\n              <div class=\"info-item\" *ngIf=\"selectedAccount.sub_code\">\n                <span class=\"info-label\">الكود:</span>\n                <span class=\"info-value\">{{ selectedAccount.sub_code }}</span>\n              </div>\n            </div>\n\n            <!-- Second Column: الرصيد الافتتاحي -->\n            <div class=\"info-column\">\n              <div class=\"info-item\">\n                <span class=\"info-label\">الرصيد الافتتاحي:</span>\n                <span class=\"info-value\">{{ formatBalance(openingBalance) }}</span>\n              </div>\n            </div>\n\n            <!-- Third Column: الرصيد الحالي -->\n            <div class=\"info-column\">\n              <div class=\"info-item\">\n                <span class=\"info-label\">الرصيد الحالي:</span>\n                <span class=\"info-value\" [style.color]=\"getBalanceColor() === 'success' ? '#10dc60' : '#f04141'\">\n                  <span *ngIf=\"currentStatus == 'credit'\">دائن </span>\n                  <span *ngIf=\"currentStatus == 'debit'\">مدين </span>\n                  {{ formatBalance(currentBalance) }}\n                </span>\n              </div>\n            </div>\n\n            <!-- Fourth Column: التصنيف -->\n            <div class=\"info-column\">\n              <div class=\"info-item\" *ngIf=\"selectedAccount.cat_name\">\n                <span class=\"info-label\">التصنيف:</span>\n                <span class=\"info-value\">{{ selectedAccount.cat_name }}</span>\n              </div>\n              <div class=\"info-item\" *ngIf=\"selectedAccount.phone && (selectedAccount.cat_id == 1 || selectedAccount.cat_id == 2)\">\n                <span class=\"info-label\">الهاتف:</span>\n                <span class=\"info-value\">{{ selectedAccount.phone }}</span>\n              </div>\n              <div class=\"info-item\" *ngIf=\"selectedAccount.address && (selectedAccount.cat_id == 1 || selectedAccount.cat_id == 2)\">\n                <span class=\"info-label\">العنوان:</span>\n                <span class=\"info-value address-value\">{{ selectedAccount.address }}</span>\n              </div>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- Desktop Table -->\n      <ion-card class=\"table-card\" *ngIf=\"device == 'desktop'\" color=\"primary\">\n        <ion-card-header class=\"table-header ion-no-padding\">\n          <div class=\"card-header-with-export\">\n            <ion-card-title class=\"table-title\">\n              <ion-icon name=\"document-text-outline\" slot=\"start\"></ion-icon>\n              كشف حساب - {{ selectedAccount.sub_name === 'لم يتم اختيار حساب' ? 'اختر حساب لعرض البيانات' : selectedAccount.sub_name }}\n              <span class=\"transaction-count\" *ngIf=\"totalTransactions > 0\">\n                ({{ totalTransactions }} معاملة)\n              </span>\n            </ion-card-title>\n            <app-export-buttons \n              [hasData]=\"displayedTransactions && displayedTransactions.length > 0\"\n              [isLoading]=\"loading\"\n              (exportPDF)=\"exportToPDF()\"\n              (exportExcel)=\"exportToExcel()\">\n            </app-export-buttons>\n          </div>\n        </ion-card-header>\n        <ion-card-content class=\"table-content\">\n          <div class=\"table-container\">\n            <table class=\"modern-table\">\n              <thead>\n                <tr>\n                  <th>التسلسل</th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_date')\">\n                    <ion-icon [name]=\"getSortIcon('j_date')\" class=\"sort-icon\"></ion-icon>\n                    التاريخ\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('source_type')\">\n                    <ion-icon [name]=\"getSortIcon('source_type')\" class=\"sort-icon\"></ion-icon>\n                    نوع القيد\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_details')\">\n                    <ion-icon [name]=\"getSortIcon('j_details')\" class=\"sort-icon\"></ion-icon>\n                    البيان\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('debit')\">\n                    <ion-icon [name]=\"getSortIcon('debit')\" class=\"sort-icon\"></ion-icon>\n                    مدين (عليه)\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('credit')\">\n                    <ion-icon [name]=\"getSortIcon('credit')\" class=\"sort-icon\"></ion-icon>\n                    دائن (له)\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let transaction of sortedTransactions; let i = index\" class=\"table-row\">\n                  <td class=\"serial\">{{ i + 1 }}</td>\n                  <td class=\"date\">{{ transaction.j_date | date:'dd/MM/yyyy' }}</td>\n                  <td class=\"type\">\n                    <span class=\"transaction-type\" [ngClass]=\"{'sales-type': transaction.source_type === 'sales', 'purchase-type': transaction.source_type === 'purchases', 'voucher-type': transaction.source_type === 'journal'}\">\n                      {{ getTransactionTypeDisplay(transaction) }}\n                    </span>\n                  </td>\n                  <td class=\"details\">{{ transaction.j_details }}</td>\n                  <td class=\"debit\">\n                    <span *ngIf=\"transaction.debit && +transaction.debit > 0\" class=\"amount debit-amount\">\n                      {{ formatBalance(+transaction.debit) }}\n                    </span>\n                  </td>\n                  <td class=\"credit\">\n                    <span *ngIf=\"transaction.credit && +transaction.credit > 0\" class=\"amount credit-amount\">\n                      {{ formatBalance(+transaction.credit) }}\n                    </span>\n                  </td>\n                </tr>\n                \n                <!-- Loading Skeleton -->\n                <tr *ngIf=\"loading\" class=\"skeleton-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n              </tbody>\n              \n              <!-- Totals Footer -->\n              <tfoot *ngIf=\"displayedTransactions.length > 0\">\n                <tr class=\"totals-row\">\n                  <td colspan=\"4\" class=\"totals-label\">الإجمالي:</td>\n                  <td class=\"debit-total\">\n                    <span class=\"amount debit-amount\">{{ formatBalance(sums.debitTot) }}</span>\n                  </td>\n                  <td class=\"credit-total\">\n                    <span class=\"amount credit-amount\">{{ formatBalance(sums.creditTot) }}</span>\n                  </td>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n          \n          <!-- Load More Button -->\n          <div class=\"load-more-container\" *ngIf=\"hasMoreTransactions && displayedTransactions.length > 0\">\n            <ion-button \n              (click)=\"loadMoreTransactions()\" \n              fill=\"outline\" \n              [disabled]=\"loadingMore\"\n              class=\"load-more-btn\">\n              <ion-spinner *ngIf=\"loadingMore\" name=\"crescent\" slot=\"start\"></ion-spinner>\n              <ion-icon *ngIf=\"!loadingMore\" name=\"chevron-down-outline\" slot=\"start\"></ion-icon>\n              {{ loadingMore ? 'جاري التحميل...' : 'تحميل المزيد' }}\n            </ion-button>\n          </div>\n          \n          <!-- Empty State -->\n          <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n            <ion-icon name=\"archive-outline\" class=\"empty-icon\"></ion-icon>\n            <h4>لا توجد معاملات</h4>\n            <p>لم يتم العثور على معاملات لهذا الحساب</p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- Mobile Accordion -->\n      <ion-card class=\"mobile-card\" *ngIf=\"device == 'mobile'\" color=\"primary\">\n        <ion-card-header class=\"mobile-header\">\n          <ion-card-title class=\"mobile-title\">\n            <ion-icon name=\"document-text-outline\" slot=\"start\"></ion-icon>\nكشف حساب - {{ selectedAccount.sub_name === 'لم يتم اختيار حساب' ? 'اختر حساب لعرض البيانات' : selectedAccount.sub_name }}\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"mobile-content\">\n          <ion-accordion-group *ngIf=\"displayedTransactions.length > 0\">\n            <ion-accordion *ngFor=\"let transaction of sortedTransactions; let i = index\" [value]=\"i\" toggleIcon=\"caret-down-circle\" toggleIconSlot=\"end\">\n              <ion-item slot=\"header\" color=\"light\">\n                <ion-icon name=\"newspaper-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n                <div class=\"accordion-header\">\n                  <div class=\"header-main\">\n                    <span class=\"transaction-type-mobile\">{{ getTransactionTypeDisplay(transaction) }}</span>\n                    <span class=\"transaction-date\">{{ transaction.j_date | date:'dd/MM' }}</span>\n                  </div>\n                  <div class=\"header-amount\">\n                    <span *ngIf=\"transaction.credit && +transaction.credit > 0\" class=\"credit-amount\">\n                      {{ formatBalance(+transaction.credit) }}\n                    </span>\n                    <span *ngIf=\"transaction.debit && +transaction.debit > 0\" class=\"debit-amount\">\n                      {{ formatBalance(+transaction.debit) }}\n                    </span>\n                  </div>\n                </div>\n              </ion-item>\n\n              <div class=\"ion-padding\" slot=\"content\">\n                <ion-list>\n                  <ion-item lines=\"none\">\n                    <ion-label>\n                      <ion-note>نوع القيد: </ion-note>\n                      <strong>{{ transaction.j_type }}</strong>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label>\n                      <ion-note>البيان: </ion-note>\n                      <strong>{{ transaction.j_details }}</strong>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label>\n                      <ion-note>مدين (عليه): </ion-note>\n                      <strong>{{ formatBalance(+transaction.debit) }}</strong>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item lines=\"none\">\n                    <ion-label>\n                      <ion-note>دائن (له): </ion-note>\n                      <strong>{{ formatBalance(+transaction.credit) }}</strong>\n                    </ion-label>\n                  </ion-item>\n                </ion-list>\n              </div>\n            </ion-accordion>\n          </ion-accordion-group>\n          \n          <!-- Load More Button Mobile -->\n          <div class=\"load-more-container\" *ngIf=\"hasMoreTransactions && displayedTransactions.length > 0\">\n            <ion-button \n              (click)=\"loadMoreTransactions()\" \n              fill=\"outline\" \n              [disabled]=\"loadingMore\"\n              expand=\"block\"\n              class=\"load-more-btn\">\n              <ion-spinner *ngIf=\"loadingMore\" name=\"crescent\" slot=\"start\"></ion-spinner>\n              <ion-icon *ngIf=\"!loadingMore\" name=\"chevron-down-outline\" slot=\"start\"></ion-icon>\n              {{ loadingMore ? 'جاري التحميل...' : 'تحميل المزيد' }}\n            </ion-button>\n          </div>\n          \n          <!-- Empty State Mobile -->\n          <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n            <ion-icon name=\"archive-outline\" class=\"empty-icon\"></ion-icon>\n            <h4>لا توجد معاملات</h4>\n            <p>لم يتم العثور على معاملات لهذا الحساب</p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n\n<!-- Account Selection Popover -->\n<ion-popover #accountPopover [isOpen]=\"isAccountPopoverOpen\" (didDismiss)=\"isAccountPopoverOpen = false\" size=\"auto\" side=\"bottom\" alignment=\"start\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar dir=\"rtl\">\n        <ion-searchbar \n          [(ngModel)]=\"searchTerm\" \n          (ionInput)=\"searchAccount($event)\" \n          placeholder=\"بحث عن حساب\" \n          dir=\"rtl\"\n          show-clear-button=\"focus\">\n        </ion-searchbar>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content dir=\"rtl\" class=\"popover-content\">\n      <ion-list>\n        <ion-item \n          *ngFor=\"let acc of searchedAccounts\" \n          (click)=\"selectAccount(acc)\" \n          button \n          dir=\"rtl\">\n          <ion-label>{{ acc.sub_name }}</ion-label>\n        </ion-item>\n        \n        <!-- No results message -->\n        <ion-item *ngIf=\"searchedAccounts.length === 0\" dir=\"rtl\">\n          <ion-label>\n            <p>لا توجد حسابات تطابق البحث</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>";

/***/ })

}]);
//# sourceMappingURL=src_app_statement2_statement2_module_ts.js.map
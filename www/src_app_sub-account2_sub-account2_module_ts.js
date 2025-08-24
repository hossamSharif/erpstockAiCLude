"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sub-account2_sub-account2_module_ts"],{

/***/ 88029:
/*!*************************************************************!*\
  !*** ./src/app/sub-account2/sub-account2-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubAccount2PageRoutingModule": () => (/* binding */ SubAccount2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _sub_account2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-account2.page */ 1211);




const routes = [
    {
        path: '',
        component: _sub_account2_page__WEBPACK_IMPORTED_MODULE_0__.SubAccount2Page
    }
];
let SubAccount2PageRoutingModule = class SubAccount2PageRoutingModule {
};
SubAccount2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubAccount2PageRoutingModule);



/***/ }),

/***/ 34588:
/*!*****************************************************!*\
  !*** ./src/app/sub-account2/sub-account2.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubAccount2PageModule": () => (/* binding */ SubAccount2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _sub_account2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-account2-routing.module */ 88029);
/* harmony import */ var _sub_account2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-account2.page */ 1211);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let SubAccount2PageModule = class SubAccount2PageModule {
};
SubAccount2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sub_account2_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubAccount2PageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_sub_account2_page__WEBPACK_IMPORTED_MODULE_1__.SubAccount2Page]
    })
], SubAccount2PageModule);



/***/ }),

/***/ 1211:
/*!***************************************************!*\
  !*** ./src/app/sub-account2/sub-account2.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubAccount2Page": () => (/* binding */ SubAccount2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _sub_account2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-account2.page.html?ngResource */ 23140);
/* harmony import */ var _sub_account2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-account2.page.scss?ngResource */ 58844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _services_sorting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sorting.service */ 52562);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/export.service */ 79002);











let SubAccount2Page = class SubAccount2Page {
    constructor(storage, alertController, modalController, loadingController, datePipe, api, toast, router, sortingService, exportService) {
        this.storage = storage;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.router = router;
        this.sortingService = sortingService;
        this.exportService = exportService;
        // Core data arrays
        this.account_category = [];
        this.sub_account = [];
        this.main_account = [];
        this.displayedAccounts = [];
        this.filteredAccounts = [];
        this.sortedAccounts = [];
        this.currentSort = null;
        // Search and pagination
        this.searchTerm = '';
        this.currentPage = 1;
        this.pageSize = 20;
        this.hasMoreAccounts = true;
        // UI state
        this.loading = false;
        this.loadingMore = false;
        this.isActionsPopoverOpen = false;
        this.selectedAccount = null;
        // Legacy properties for backward compatibility
        this.radioVal = 0;
        this.radioVal2 = 0;
        this.status = 'save';
        this.codeSe = '';
        this.sklton = false;
        this.currentSearchTerm = '';
        // Filter properties
        this.filters = {
            cat_name: '',
            balance_type: '',
            sub_type: '',
            has_balance: false
        };
        this.activeFilters = {
            cat_name: false,
            balance_type: false,
            sub_type: false,
            has_balance: false
        };
        // Filter popover states
        this.showCategoryFilter = false;
        this.showBalanceTypeFilter = false;
        this.showSubTypeFilter = false;
        // Categories for filter dropdown
        this.categories = [];
        this.initializeData();
        this.getAppInfo();
    }
    ngOnInit() {
        // Component initialization
    }
    ionViewWillEnter() {
        // Refresh data when returning from account page
        if (this.store_info && this.store_info.id) {
            this.loadAccountsWithPagination();
        }
    }
    ngOnDestroy() {
        // Component cleanup
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
    }
    initializeData() {
        this.selectedAccount = null;
        this.selectedCategory = { id: '', cat_name: '' };
        this.payInvo = { id: '', ac_id: '', sub_name: '', sub_type: '', sub_code: '', sub_balance: '', store_id: '', cat_id: '', cat_name: '', ac_behavior: '', phone: '', address: '' };
        this.selectedMainAccount = { ac_id: '', actype_id: '', ac_name: '', ac_code: '', eng_name: '', ac_type: '' };
        this.store_info = { id: '', store_ref: '', store_name: '', location: '' };
        this.displayedAccounts = [];
        this.filteredAccounts = [];
        this.sortedAccounts = [];
        this.currentPage = 1;
        this.hasMoreAccounts = true;
        this.searchTerm = '';
        this.currentSearchTerm = '';
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    radioChange(ev) {
        //console.log(ev.target.value) 
    }
    radioChange2(ev) {
        //console.log(ev.target.value) 
    }
    pickAccount(ev) {
        this.showSklt();
        this.selectedCategory.cat_name = "";
        let fl = this.sub_account.filter(x => x.sub_name == ev.target.value);
        //console.log(fl);
        if (fl.length > 0) {
            this.selectedAccount = {
                id: fl[0]['id'],
                ac_id: fl[0]['ac_id'],
                sub_name: fl[0]['sub_name'],
                sub_type: fl[0]['sub_type'],
                sub_code: fl[0]['sub_code'],
                store_id: fl[0]['store_id'],
                sub_balance: fl[0]['sub_balance'],
                cat_id: fl[0]['cat_id'],
                cat_name: fl[0]['cat_name'],
                ac_behavior: fl[0]['ac_behavior'],
                phone: fl[0]['phone'],
                address: fl[0]['address']
            };
            //console.log( this.selectedAccount);
            this.payInvo = this.selectedAccount;
            this.status = 'edit';
            //  let flm = this.main_account.filter(x=>x.ac_id == +this.selectedAccount.ac_id)
            //  this.pickMainAccount(flm[0]['ac_name'],'fisrtLoad')
            let flmc = this.account_category.filter(x => x.id == +this.selectedAccount.cat_id);
            this.pickAccountCategory(flmc[0]['cat_name'], 'fisrtLoad');
        }
        else {
            this.presentToast(' خطأ في اسم الحساب ', 'danger');
        }
    }
    searchCode(codeSe) {
        this.showSklt();
        let fl = this.sub_account.filter(x => x.sub_code == codeSe);
        //console.log(fl);
        if (fl.length > 0) {
            this.selectedAccount = {
                id: fl[0]['id'],
                ac_id: fl[0]['ac_id'],
                sub_name: fl[0]['sub_name'],
                sub_type: fl[0]['sub_type'],
                sub_code: fl[0]['sub_code'],
                store_id: fl[0]['store_id'],
                sub_balance: fl[0]['sub_balance'],
                cat_id: fl[0]['cat_id'],
                cat_name: fl[0]['cat_name'],
                ac_behavior: fl[0]['ac_behavior'],
                phone: fl[0]['phone'],
                address: fl[0]['address']
            };
            //console.log( this.selectedAccount);
            this.payInvo = this.selectedAccount;
            this.status = 'edit';
        }
        else {
            this.presentToast('خطأ , لا يوجد حساب بهذا الرمز ', 'danger');
        }
    }
    searchId(codeSe) {
        this.showSklt();
        let fl = this.sub_account.filter(x => x.id == codeSe);
        //console.log(fl);
        if (fl.length > 0) {
            this.selectedAccount = {
                id: fl[0]['id'],
                ac_id: fl[0]['ac_id'],
                sub_name: fl[0]['sub_name'],
                sub_type: fl[0]['sub_type'],
                sub_code: fl[0]['sub_code'],
                store_id: fl[0]['store_id'],
                sub_balance: fl[0]['sub_balance'],
                cat_id: fl[0]['cat_id'],
                cat_name: fl[0]['cat_name'],
                ac_behavior: fl[0]['ac_behavior'],
                phone: fl[0]['phone'],
                address: fl[0]['address']
            };
            //console.log( this.selectedAccount);
            this.payInvo = this.selectedAccount;
            this.status = 'edit';
        }
        else {
            this.presentToast('خطأ , لا يوجد حساب بهذا الرقم ', 'danger');
        }
    }
    pickAccountCategory(ev, cat) {
        let evVal;
        if (cat) {
            evVal = ev;
        }
        else {
            evVal = ev.target.value;
        }
        //console.log('evVal',evVal);
        let fl = this.account_category.filter(x => x.cat_name == evVal);
        //console.log(fl);
        if (fl.length > 0) {
            this.selectedCategory = {
                id: fl[0]['id'],
                cat_name: fl[0]['cat_name']
            };
            this.selectedAccount.cat_id = fl[0]['cat_id'];
            this.selectedAccount.cat_name = fl[0]['cat_name'];
            this.payInvo.cat_id = this.selectedCategory.id;
            this.payInvo.cat_name = this.selectedCategory.cat_name;
        }
        else {
            this.presentToast(' خطأ في اسم التصنيف ', 'danger');
        }
    }
    showSklt() {
        this.sklton = true;
        setTimeout(() => {
            this.sklton = false;
        }, 3000);
    }
    pickMainAccount(ev, cust) {
        let evVal;
        if (cust) {
            evVal = ev;
        }
        else {
            evVal = ev.target.value;
        }
        //console.log('evVal',evVal); 
        let fl = this.main_account.filter(x => x.ac_name == evVal);
        //console.log(fl);  
        if (fl.length > 0) {
            this.selectedMainAccount = {
                ac_id: fl[0]['ac_id'],
                ac_name: fl[0]['ac_name'],
                actype_id: fl[0]['actype_id'],
                ac_code: fl[0]['ac_code'],
                eng_name: fl[0]['eng_name'],
                ac_type: fl[0]['ac_type']
            };
            //console.log( this.selectedMainAccount);
            this.payInvo.ac_id = this.selectedMainAccount.ac_id;
            this.payInvo.sub_type = this.selectedMainAccount.ac_type;
            this.payInvo.store_id = this.store_info.id;
            this.payInvo.ac_behavior = this.selectedMainAccount.ac_type;
            //  this.setFocusOnInput()
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
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
                this.loadAccountsWithPagination();
            }
        });
    }
    prepareInvo() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, cat_id: "", cat_name: "", ac_behavior: "", phone: "", address: "" };
        this.selectedCategory = { id: "", cat_name: "" };
        this.payInvo = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, cat_id: "", cat_name: "", ac_behavior: "", phone: "", address: "" };
        this.selectedMainAccount = { ac_id: "", actype_id: "", ac_name: "", ac_code: "", eng_name: "", ac_type: "" };
        this.status = 'save';
    }
    refresh() {
        // this.presentLoadingWithOptions("...")
        this.showSklt();
        this.prepareInvo();
    }
    // New method for paginated account loading with balance calculations
    loadAccountsWithPagination(loadMore = false) {
        if (loadMore) {
            this.loadingMore = true;
            // Increment page for next batch
            this.currentPage++;
        }
        else {
            this.loading = true;
            this.currentPage = 1;
            this.displayedAccounts = [];
            this.filteredAccounts = [];
        }
        // Choose the appropriate API endpoint based on filters
        console.log('API call with params:', {
            store_id: this.store_info.id,
            year_id: this.year.id,
            page: this.currentPage,
            pageSize: this.pageSize,
            searchTerm: this.currentSearchTerm,
            filters: this.filters
        });
        // Use separate endpoint for positive balance filter
        let apiCall;
        if (this.filters.has_balance) {
            console.log('Using positive balance endpoint');
            // Create filters without has_balance since the endpoint is specifically for positive balance
            const filtersWithoutHasBalance = {
                cat_name: this.filters.cat_name,
                balance_type: this.filters.balance_type,
                sub_type: this.filters.sub_type
            };
            apiCall = this.api.getAccountsWithPositiveBalance(this.store_info.id, this.year.id, this.currentPage, this.pageSize, this.currentSearchTerm, filtersWithoutHasBalance);
        }
        else {
            console.log('Using regular endpoint');
            apiCall = this.api.getAccountsWithBalance(this.store_info.id, this.year.id, this.currentPage, this.pageSize, this.currentSearchTerm, this.filters);
        }
        apiCall.subscribe((data) => {
            const newAccounts = data['data'] || [];
            console.log(`Loading page ${this.currentPage}: Got ${newAccounts.length} accounts`);
            console.log(`Load more: ${loadMore}, Current displayed: ${this.displayedAccounts.length}`);
            if (loadMore) {
                this.displayedAccounts = [...this.displayedAccounts, ...newAccounts];
            }
            else {
                this.displayedAccounts = newAccounts;
            }
            // Since search is now handled by backend, filteredAccounts should always match displayedAccounts
            this.filteredAccounts = [...this.displayedAccounts];
            // Apply sorting to filtered accounts
            this.applySorting();
            // Check if there are more accounts to load
            this.hasMoreAccounts = newAccounts.length === this.pageSize;
            console.log(`Total displayed: ${this.displayedAccounts.length}, Has more: ${this.hasMoreAccounts}`);
            // Balance is now calculated by the API, no need for client-side calculation
            this.loading = false;
            this.loadingMore = false;
            // Load supporting data on first load
            if (!loadMore) {
                this.getMainAccount();
                this.loadCategories();
            }
        }, (err) => {
            console.error('Error loading accounts:', err);
            this.loading = false;
            this.loadingMore = false;
            // Reset page on error
            if (loadMore) {
                this.currentPage--;
            }
            this.presentToast('خطأ في تحميل الحسابات', 'danger');
        });
    }
    // Legacy method for backward compatibility
    getAllAccount() {
        this.loadAccountsWithPagination();
    }
    // Balance is now calculated by the API endpoint, no need for client-side calculation
    // Load more accounts
    loadMoreAccounts() {
        if (this.hasMoreAccounts && !this.loadingMore) {
            this.loadAccountsWithPagination(true);
        }
    }
    searchAccounts(event) {
        console.log('Search input changed, this.searchTerm:', this.searchTerm);
        // Clear previous timeout
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        // Debounce all search requests (including empty ones)
        this.searchTimeout = setTimeout(() => {
            console.log('Performing search with this.searchTerm:', this.searchTerm);
            this.currentSearchTerm = this.searchTerm || '';
            console.log('Updated currentSearchTerm to:', this.currentSearchTerm);
            this.performSearch();
        }, 300); // 300ms delay for all searches
    }
    performSearch() {
        console.log('performSearch called with currentSearchTerm:', this.currentSearchTerm);
        // Reset pagination and reload accounts with current search term
        this.currentPage = 1;
        this.hasMoreAccounts = true;
        this.loadAccountsWithPagination(false);
    }
    // Clear search functionality
    clearSearch() {
        this.searchTerm = '';
        this.currentSearchTerm = '';
        // Clear any pending search timeout
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        // Reload accounts without search term
        this.performSearch();
    }
    // Filter methods
    toggleCategoryFilter() {
        this.showCategoryFilter = !this.showCategoryFilter;
    }
    toggleBalanceTypeFilter() {
        this.showBalanceTypeFilter = !this.showBalanceTypeFilter;
    }
    toggleHasBalanceFilter() {
        this.filters.has_balance = !this.filters.has_balance;
        this.activeFilters.has_balance = this.filters.has_balance;
        this.applyFilters();
    }
    toggleSubTypeFilter() {
        this.showSubTypeFilter = !this.showSubTypeFilter;
    }
    selectCategoryFilter(category) {
        this.filters.cat_name = category;
        this.activeFilters.cat_name = category !== '';
        this.showCategoryFilter = false;
        this.applyFilters();
    }
    selectBalanceTypeFilter(balanceType) {
        this.filters.balance_type = balanceType;
        this.activeFilters.balance_type = balanceType !== '';
        this.showBalanceTypeFilter = false;
        this.applyFilters();
    }
    selectSubTypeFilter(subType) {
        this.filters.sub_type = subType;
        this.activeFilters.sub_type = subType !== '';
        this.showSubTypeFilter = false;
        this.applyFilters();
    }
    clearAllFilters() {
        this.filters = {
            cat_name: '',
            balance_type: '',
            sub_type: '',
            has_balance: false
        };
        this.activeFilters = {
            cat_name: false,
            balance_type: false,
            sub_type: false,
            has_balance: false
        };
        this.applyFilters();
    }
    hasActiveFilters() {
        return Object.values(this.activeFilters).some(active => active);
    }
    applyFilters() {
        // Reset pagination and reload accounts with filters
        this.currentPage = 1;
        this.hasMoreAccounts = true;
        this.loadAccountsWithPagination(false);
    }
    // Open create page
    openCreateModal() {
        this.router.navigate(['/account-modal'], {
            queryParams: {
                mode: 'create'
            }
        });
    }
    // Present actions popover
    presentActionsPopover(event, account) {
        this.selectedAccount = account;
        this.isActionsPopoverOpen = true;
        if (this.actionsPopover) {
            this.actionsPopover.event = event;
        }
    }
    // Dismiss popover properly
    dismissActionsPopover() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.actionsPopover) {
                yield this.actionsPopover.dismiss();
            }
            this.isActionsPopoverOpen = false;
        });
    }
    // Edit account
    editAccount(account) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Dismiss the popover first
            yield this.dismissActionsPopover();
            // Navigate to edit modal
            this.router.navigate(['/account-modal'], {
                queryParams: {
                    mode: 'edit',
                    account: JSON.stringify(account)
                }
            });
        });
    }
    // Format balance display
    formatBalance(balance) {
        if (!balance && balance !== 0)
            return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(balance);
    }
    // Get balance color
    getBalanceColor(balance) {
        if (!balance && balance !== 0)
            return 'medium';
        return balance >= 0 ? 'success' : 'danger';
    }
    getAccountCategory() {
        this.api.getAccountCategory(this.store_info.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.account_category = res['data'];
            //console.log(this.account_category)
        }, (err) => {
            //console.log(err);
        });
    }
    loadCategories() {
        this.api.getAccountCategory(this.store_info.id).subscribe(data => {
            let res = data;
            this.categories = res['data'] || [];
            console.log('Categories loaded:', this.categories);
        }, (err) => {
            console.log('Error loading categories:', err);
        });
    }
    getMainAccount() {
        this.api.getMainAccounts().subscribe(data => {
            //console.log(data)
            let res = data;
            this.main_account = res['data'];
            this.getAccountCategory();
        }, (err) => {
            //console.log(err);
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 5000,
                message: msg,
                translucent: true,
                // cssClass: 'custom-class custom-loading',
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            //console.log('Loading dismissed with role:', role);
        });
    }
    save() {
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            let accountList = [];
            accountList.push(this.payInvo);
            this.api.createMultiAccount(accountList).subscribe(data => {
                //console.log(data)
                if (data['message'] != 'Post Not Created') {
                    this.prepareInvo();
                    this.presentToast('تم الحفظ بنجاح', "success");
                    this.getAllAccount();
                }
                else {
                    this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
                }
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.loadingController.dismiss();
            });
        }
    }
    update() {
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            this.api.updateSubAccount(this.payInvo).subscribe(data => {
                //console.log(data)
                if (data['message'] != 'Post Not Created') {
                    this.prepareInvo();
                    this.presentToast('تم التعديل بنجاح', "success");
                    this.getAllAccount();
                }
                else {
                    this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
                }
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.loadingController.dismiss();
            });
        }
    }
    validate() {
        let fl = [];
        if (this.sub_account) {
            fl = this.sub_account.filter(x => x.sub_name == this.payInvo.sub_name);
            if (fl.length > 0 && this.status != 'edit') {
                this.presentToast('تطابق في اسم الحساب مع حساب موجود مسبقا   ', 'danger');
            }
        }
        let fl2 = [];
        if (this.sub_account) {
            fl2 = this.sub_account.filter(x => x.sub_code == this.payInvo.sub_code);
            if (fl2.length > 0 && this.status != 'edit') {
                this.presentToast('تطابق في رمز الحساب مع حساب موجود مسبقا   ', 'danger');
            }
        }
        if (this.payInvo.sub_name == "") {
            this.presentToast('الرجاء ادخال اسم الحساب ', 'danger');
            return false;
        }
        else if (this.payInvo.sub_type == "") {
            this.presentToast(' الرجاء اختيار طبيعة الحساب', 'danger');
            return false;
        }
        else if (this.selectedMainAccount.ac_id == "" || this.selectedMainAccount.ac_name == "") {
            this.presentToast(' الرجاء اختيار الحساب الرئيسي', 'danger');
            return false;
        }
        else {
            return true;
        }
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
                title: this.exportService.generateDynamicTitle('sub-account2'),
                subtitle: this.generateSubtitle(),
                fileName: `sub-accounts-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.filteredAccounts,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'sub-account2',
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
                title: this.exportService.generateDynamicTitle('sub-account2'),
                subtitle: this.generateSubtitle(),
                fileName: `sub-accounts-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.filteredAccounts,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'sub-account2',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToExcel(config);
        });
    }
    generateSubtitle() {
        let subtitle = '';
        // Add search term if present
        if (this.currentSearchTerm && this.currentSearchTerm.trim() !== '') {
            subtitle = `البحث: ${this.currentSearchTerm}`;
        }
        // Add active filters
        const activeFilterTexts = [];
        if (this.filters.cat_name && this.filters.cat_name !== '') {
            activeFilterTexts.push(`التصنيف: ${this.filters.cat_name}`);
        }
        if (this.filters.balance_type && this.filters.balance_type !== '') {
            const balanceTypeText = this.filters.balance_type === 'debit' ? 'مدين' : 'دائن';
            activeFilterTexts.push(`نوع الرصيد: ${balanceTypeText}`);
        }
        if (this.filters.sub_type && this.filters.sub_type !== '') {
            const subTypeText = this.filters.sub_type === 'debit' ? 'مدين' : 'دائن';
            activeFilterTexts.push(`طبيعة الحساب: ${subTypeText}`);
        }
        if (this.filters.has_balance) {
            activeFilterTexts.push('الحسابات ذات الرصيد فقط');
        }
        if (activeFilterTexts.length > 0) {
            const filtersText = activeFilterTexts.join(' - ');
            subtitle = subtitle ? `${subtitle} | ${filtersText}` : filtersText;
        }
        return subtitle;
    }
    getExportColumns() {
        return [
            { key: 'sub_code', title: 'كود الحساب', width: 15, type: 'text' },
            { key: 'sub_name', title: 'اسم الحساب', width: 30, type: 'text' },
            { key: 'sub_type', title: 'نوع الحساب', width: 15, type: 'text' },
            { key: 'cat_name', title: 'التصنيف', width: 20, type: 'text' },
            { key: 'current_balance', title: 'الرصيد الحالي', width: 20, type: 'currency' }
        ];
    }
};
SubAccount2Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_sorting_service__WEBPACK_IMPORTED_MODULE_4__.SortingService },
    { type: _services_export_service__WEBPACK_IMPORTED_MODULE_5__.ExportService }
];
SubAccount2Page.propDecorators = {
    actionsPopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['actionsPopover',] }]
};
SubAccount2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-sub-account2',
        template: _sub_account2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sub_account2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubAccount2Page);



/***/ }),

/***/ 58844:
/*!****************************************************************!*\
  !*** ./src/app/sub-account2/sub-account2.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "/* ========================================\n   APPLE LIQUID GLASS DESIGN SYSTEM\n   Inspired by Apple's visionOS Liquid Glass\n   Matching cash2 page style\n======================================== */\n/* Core Liquid Glass Variables */\n:root {\n  /* Glass Material Properties */\n  --liquid-glass-bg: rgba(255, 255, 255, 0.15);\n  --liquid-glass-bg-light: rgba(255, 255, 255, 0.25);\n  --liquid-glass-bg-dark: rgba(0, 0, 0, 0.15);\n  --liquid-glass-border: rgba(255, 255, 255, 0.2);\n  --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  --liquid-glass-highlight: rgba(255, 255, 255, 0.4);\n  /* Blur and Effects */\n  --glass-blur: 20px;\n  --glass-blur-strong: 40px;\n  --glass-border-radius: 20px;\n  --glass-border-radius-small: 12px;\n  /* Dynamic Colors */\n  --glass-accent-primary: rgba(0, 122, 255, 0.8);\n  --glass-accent-success: rgba(52, 199, 89, 0.8);\n  --glass-accent-danger: rgba(255, 59, 48, 0.8);\n  /* Animation Properties */\n  --glass-transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-transition-fast: all 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-scale-hover: 1.02;\n  --glass-scale-active: 0.98;\n}\n/* Dark Mode Glass Variables */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --liquid-glass-bg: rgba(0, 0, 0, 0.25);\n    --liquid-glass-bg-light: rgba(255, 255, 255, 0.1);\n    --liquid-glass-bg-dark: rgba(0, 0, 0, 0.4);\n    --liquid-glass-border: rgba(255, 255, 255, 0.1);\n    --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n    --liquid-glass-highlight: rgba(255, 255, 255, 0.2);\n  }\n}\n/* ========================================\n   TRANSPARENT HEADER STYLES\n======================================== */\n/* Transparent Glass Header */\n.transparent-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n}\n.transparent-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  /* Glass material effect */\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%);\n  /* Subtle border only at bottom */\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  /* Glass reflection */\n}\n.transparent-header ion-toolbar::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n}\n.transparent-toolbar .glass-menu-button {\n  --background: rgba(255, 255, 255, 0.15);\n  --color: rgba(0, 0, 0, 0.8);\n  --border-radius: var(--glass-border-radius-small);\n  margin: 8px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: var(--glass-transition);\n}\n.transparent-toolbar .glass-menu-button:hover {\n  --background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.transparent-toolbar .glass-title {\n  color: rgba(0, 0, 0, 0.8);\n  font-weight: 700;\n  font-size: 1.1rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n/* ========================================\n   MAIN LAYOUT MATCHING CASH2\n======================================== */\n/* Page Background with Liquid Glass */\n.modern-content {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);\n  background-size: 400% 400%;\n  animation: gradientShift 15s ease infinite;\n  min-height: 100vh;\n  direction: rtl;\n  --color: rgba(0, 0, 0, 0.8);\n  overflow: hidden;\n}\n@keyframes gradientShift {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n/* Loading State */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  position: relative;\n  z-index: 2;\n}\n.loading-container ion-spinner {\n  --color: rgba(0, 122, 255, 0.8);\n  width: 50px;\n  height: 50px;\n  animation: spinnerGlow 2s ease-in-out infinite;\n}\n.loading-container .loading-text {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 16px 0 0 0;\n  position: relative;\n  z-index: 2;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n@keyframes spinnerGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 rgba(0, 122, 255, 0);\n  }\n  50% {\n    box-shadow: 0 0 20px rgba(0, 122, 255, 0.3);\n  }\n}\n/* Main Container with Glass Environment */\n.main-container {\n  padding: 2rem;\n  padding-top: 80px;\n  /* Account for transparent header */\n  max-width: 100%;\n  margin: 0 auto;\n  min-height: 100vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n/* Form Container with Floating Effect */\n.form-container {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  max-width: 1200px;\n  min-width: 600px;\n  position: relative;\n  z-index: 2;\n  gap: 1.5rem;\n  /* Floating Animation */\n  animation: glassFloat 6s ease-in-out infinite;\n}\n@keyframes glassFloat {\n  0%, 100% {\n    transform: translateY(0px) rotateX(0deg);\n  }\n  50% {\n    transform: translateY(-8px) rotateX(1deg);\n  }\n}\n/* ========================================\n   SEARCH AND CREATE CARD (LIQUID GLASS)\n======================================== */\n.search-card {\n  margin: 0;\n  border-radius: var(--glass-border-radius);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 0.5px solid rgba(128, 128, 128, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1), var(--liquid-glass-shadow), 0 0 0 1px var(--liquid-glass-highlight) inset, 0 1px 0 var(--liquid-glass-highlight) inset;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  transition: var(--glass-transition);\n  /* 3D Perspective */\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  /* Glass Reflection Effect */\n}\n.search-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius) var(--glass-border-radius) 0 0;\n  z-index: 1;\n}\n.search-card .compact-content {\n  padding: 1.5rem;\n  position: relative;\n  z-index: 2;\n}\n.search-card .search-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  justify-content: space-between;\n}\n.search-card .search-header .search-input-container {\n  flex: 0 0 60%;\n  max-width: 400px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-card .search-header .search-input-container .search-input {\n  flex: 1;\n  --background: rgba(255, 255, 255, 0.25);\n  --color: rgba(0, 0, 0, 0.8);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.75rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  transition: var(--glass-transition);\n  font-size: 0.9rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-card .search-header .search-input-container .search-input:focus-within {\n  --background: rgba(255, 255, 255, 0.35);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);\n  transform: translateY(-2px);\n}\n.search-card .search-header .search-input-container .search-input ion-icon {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1.1rem;\n}\n.search-card .search-header .search-input-container .clear-search-btn {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  --background: rgba(255, 255, 255, 0.3);\n  --color: rgba(0, 0, 0, 0.6);\n  --border-radius: 50%;\n  --padding: 0.3rem;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  transition: var(--glass-transition);\n}\n.search-card .search-header .search-input-container .clear-search-btn:hover {\n  --background: rgba(255, 59, 48, 0.3);\n  --color: rgba(255, 59, 48, 0.9);\n  transform: translateY(-50%) scale(1.1);\n}\n.search-card .search-header .search-input-container .clear-search-btn ion-icon {\n  font-size: 1rem;\n}\n.search-card .search-header .create-btn {\n  --background: transparent;\n  --color: var(--glass-accent-primary);\n  --border-color: var(--glass-accent-primary);\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: var(--glass-transition);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--glass-accent-primary);\n  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.2);\n}\n.search-card .search-header .create-btn:hover {\n  --background: var(--glass-accent-primary);\n  --color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n.search-card .search-header .create-btn ion-icon {\n  font-size: 1.1rem;\n}\n/* ========================================\n   TABLE CARD (LIQUID GLASS)\n======================================== */\n.table-card {\n  margin: 0;\n  border-radius: var(--glass-border-radius);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 0.5px solid rgba(128, 128, 128, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1), var(--liquid-glass-shadow), 0 0 0 1px var(--liquid-glass-highlight) inset, 0 1px 0 var(--liquid-glass-highlight) inset;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  transition: var(--glass-transition);\n  /* 3D Perspective */\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  /* Glass Reflection Effect */\n}\n.table-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius) var(--glass-border-radius) 0 0;\n  z-index: 1;\n}\n.table-card .card-header {\n  background: var(--ion-color-primary, #3880ff) !important;\n  color: white;\n  padding: 1rem 1.5rem;\n  position: relative;\n  z-index: 2;\n}\n.table-card .card-header .header-content {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n  min-height: 50px;\n}\n.table-card .card-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.table-card .card-header .card-title {\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.table-card .card-header .filter-buttons-center {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.table-card .card-header .filter-buttons-center .filter-btn {\n  --background: transparent;\n  --color: white;\n  --border-color: rgba(255, 255, 255, 0.4);\n  --border-width: 1px;\n  --border-radius: 20px;\n  --padding: 0.4rem 0.8rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  height: 32px;\n  min-width: auto;\n  transition: var(--glass-transition);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.table-card .card-header .filter-buttons-center .filter-btn:hover {\n  --background: rgba(255, 255, 255, 0.15);\n  --border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.table-card .card-header .filter-buttons-center .filter-btn.active {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-color: rgba(255, 255, 255, 0.8);\n  --color: white;\n  font-weight: 600;\n}\n.table-card .card-header .filter-buttons-center .filter-btn.active ion-icon {\n  color: white;\n}\n.table-card .card-header .filter-buttons-center .filter-btn ion-icon {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.8);\n}\n.table-card .card-header .filter-buttons-center .clear-filters-btn {\n  --background: rgba(244, 67, 54, 0.1);\n  --color: #f44336;\n  --border-color: rgba(244, 67, 54, 0.4);\n  --border-width: 1px;\n  --border-radius: 20px;\n  --padding: 0.4rem 0.8rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  height: 32px;\n  min-width: auto;\n  transition: var(--glass-transition);\n}\n.table-card .card-header .filter-buttons-center .clear-filters-btn:hover {\n  --background: rgba(244, 67, 54, 0.2);\n  --border-color: #f44336;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(244, 67, 54, 0.2);\n}\n.table-card .card-header .filter-buttons-center .clear-filters-btn ion-icon {\n  color: #f44336;\n  font-size: 0.9rem;\n}\n.table-card .card-header .export-buttons-left {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.table-card .card-header .filter-buttons {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.table-card .card-header .filter-buttons .filter-btn {\n  --background: transparent;\n  --color: white;\n  --border-color: rgba(255, 255, 255, 0.4);\n  --border-width: 1px;\n  --border-radius: 20px;\n  --padding: 0.4rem 0.8rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  height: 32px;\n  min-width: auto;\n  transition: var(--glass-transition);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.table-card .card-header .filter-buttons .filter-btn:hover {\n  --background: rgba(255, 255, 255, 0.15);\n  --border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-1px);\n}\n.table-card .card-header .filter-buttons .filter-btn.active {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-color: rgba(255, 255, 255, 0.8);\n  --color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.table-card .card-header .filter-buttons .filter-btn ion-icon {\n  font-size: 0.9rem;\n  margin-right: 0.3rem;\n}\n.table-card .card-header .filter-buttons .clear-filters-btn {\n  --background: rgba(255, 59, 48, 0.2);\n  --color: white;\n  --border-color: rgba(255, 59, 48, 0.6);\n  --border-width: 1px;\n  --border-radius: 20px;\n  --padding: 0.4rem 0.8rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  height: 32px;\n  min-width: auto;\n  transition: var(--glass-transition);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.table-card .card-header .filter-buttons .clear-filters-btn:hover {\n  --background: rgba(255, 59, 48, 0.3);\n  --border-color: rgba(255, 59, 48, 0.8);\n  transform: translateY(-1px);\n}\n.table-card .card-header .filter-buttons .clear-filters-btn ion-icon {\n  font-size: 0.9rem;\n  margin-right: 0.3rem;\n}\n.table-card .table-content {\n  padding: 0;\n  position: relative;\n  z-index: 2;\n}\n/* ========================================\n   GLASS TABLE STYLES\n======================================== */\n.glass-table-container {\n  position: relative;\n  overflow: hidden;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  /* Glass container reflection */\n}\n.glass-table-container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 30%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n  z-index: 1;\n}\n.glass-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  position: relative;\n  z-index: 2;\n}\n.glass-table thead {\n  background: rgba(255, 255, 255, 0.4);\n}\n.glass-table thead th {\n  padding: 1rem 0.8rem;\n  text-align: center;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 0.85rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  position: relative;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  /* Glass reflection on headers */\n}\n.glass-table thead th:not(:last-child) {\n  border-left: 1px solid rgba(255, 255, 255, 0.3);\n}\n.glass-table thead th::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%);\n  opacity: 0.7;\n  pointer-events: none;\n}\n.glass-table tbody tr {\n  background: rgba(255, 255, 255, 0.25);\n  transition: var(--glass-transition);\n}\n.glass-table tbody tr:hover {\n  background: rgba(255, 255, 255, 0.35);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.glass-table tbody tr:nth-child(even) {\n  background: rgba(255, 255, 255, 0.15);\n}\n.glass-table tbody tr:nth-child(even):hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.glass-table tbody td {\n  padding: 1rem 0.8rem;\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 0.85rem;\n  font-weight: 500;\n  position: relative;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.glass-table tbody td:not(:last-child) {\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n}\n.glass-table .loading-row {\n  background: rgba(255, 255, 255, 0.1);\n}\n.glass-table .loading-row td {\n  padding: 1.5rem 0.8rem;\n}\n.glass-table .serial-cell {\n  font-family: \"Courier New\", monospace;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 0.8rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  width: 60px;\n  min-width: 60px;\n  max-width: 60px;\n}\n.glass-table .code-cell {\n  font-family: \"Courier New\", monospace;\n  font-weight: 600;\n  color: var(--glass-accent-primary);\n  font-size: 0.8rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.glass-table .name-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.9);\n  text-align: right;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 1rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.glass-table .type-cell .type-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.3rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n.glass-table .type-cell .type-badge.type-credit {\n  background: rgba(52, 199, 89, 0.3);\n  color: rgba(0, 100, 0, 0.9);\n  border: 1px solid rgba(52, 199, 89, 0.5);\n  box-shadow: 0 2px 8px rgba(52, 199, 89, 0.2);\n}\n.glass-table .type-cell .type-badge.type-debit {\n  background: rgba(255, 149, 0, 0.3);\n  color: rgba(150, 75, 0, 0.9);\n  border: 1px solid rgba(255, 149, 0, 0.5);\n  box-shadow: 0 2px 8px rgba(255, 149, 0, 0.2);\n}\n.glass-table .category-cell {\n  color: rgba(0, 0, 0, 0.6);\n  font-style: italic;\n  font-size: 0.8rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.glass-table .balance-cell .balance-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.glass-table .balance-cell .balance-info .balance-amount {\n  font-weight: 700;\n  font-family: \"Courier New\", monospace;\n  font-size: 0.85rem;\n  padding: 0.3rem 0.6rem;\n  border-radius: 8px;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  margin-left: 0.3rem;\n}\n.glass-table .balance-cell .balance-info .balance-amount[style*=\"color: rgb(16, 220, 96)\"] {\n  background: rgba(52, 199, 89, 0.3);\n  color: rgba(0, 100, 0, 0.9) !important;\n  border: 1px solid rgba(52, 199, 89, 0.5);\n}\n.glass-table .balance-cell .balance-info .balance-amount[style*=\"color: rgb(240, 65, 65)\"] {\n  background: rgba(255, 59, 48, 0.3);\n  color: rgba(150, 0, 0, 0.9) !important;\n  border: 1px solid rgba(255, 59, 48, 0.5);\n}\n.glass-table .balance-cell .balance-info .balance-type {\n  font-weight: 600;\n  font-size: 0.75rem;\n  padding: 0.2rem 0.4rem;\n  border-radius: 6px;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  margin-right: 0.3rem;\n}\n.glass-table .balance-cell .balance-info .balance-type[style*=\"color: rgb(16, 220, 96)\"] {\n  background: rgba(52, 199, 89, 0.2);\n  color: rgba(0, 100, 0, 0.9) !important;\n  border: 1px solid rgba(52, 199, 89, 0.4);\n}\n.glass-table .balance-cell .balance-info .balance-type[style*=\"color: rgb(240, 65, 65)\"] {\n  background: rgba(255, 59, 48, 0.2);\n  color: rgba(150, 0, 0, 0.9) !important;\n  border: 1px solid rgba(255, 59, 48, 0.4);\n}\n.glass-table .balance-cell .balance-info ion-spinner {\n  --color: var(--glass-accent-primary);\n  width: 16px;\n  height: 16px;\n}\n.glass-table .actions-cell .actions-btn {\n  --background: rgba(255, 255, 255, 0.3);\n  --color: rgba(0, 0, 0, 0.7);\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.5rem;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  transition: var(--glass-transition);\n}\n.glass-table .actions-cell .actions-btn:hover {\n  --background: rgba(0, 122, 255, 0.3);\n  --color: rgba(0, 0, 0, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n.glass-table .actions-cell .actions-btn ion-icon {\n  font-size: 1.1rem;\n}\n/* ========================================\n   EMPTY STATE AND LOAD MORE\n======================================== */\n.empty-state {\n  text-align: center;\n  padding: 4rem 1.5rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.empty-state .empty-icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  color: rgba(0, 0, 0, 0.4);\n}\n.empty-state h3 {\n  margin: 0 0 0.5rem 0;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.2rem;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: rgba(0, 0, 0, 0.5);\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.load-more-container {\n  display: flex;\n  justify-content: center;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.1);\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.load-more-container .load-more-btn {\n  --background: rgba(255, 255, 255, 0.3);\n  --color: rgba(0, 0, 0, 0.8);\n  --border-color: rgba(255, 255, 255, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: var(--glass-transition);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.load-more-container .load-more-btn:hover:not([disabled]) {\n  --background: rgba(255, 255, 255, 0.4);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);\n}\n.load-more-container .load-more-btn[disabled] {\n  --background: rgba(255, 255, 255, 0.1);\n  --color: rgba(0, 0, 0, 0.4);\n  --border-color: rgba(255, 255, 255, 0.2);\n  opacity: 0.6;\n}\n.load-more-container .load-more-btn ion-icon {\n  font-size: 1rem;\n}\n/* ========================================\n   ACTIONS POPOVER\n======================================== */\nion-popover {\n  --background: rgba(255, 255, 255, 0.95);\n  --color: rgba(0, 0, 0, 0.9);\n  border-radius: var(--glass-border-radius);\n  box-shadow: var(--liquid-glass-shadow);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n}\nion-popover ion-content {\n  --background: rgba(255, 255, 255, 0.95);\n}\nion-popover ion-content ion-list {\n  background: rgba(255, 255, 255, 0.95);\n}\nion-popover ion-content ion-list ion-item {\n  --background: transparent;\n  --color: rgba(0, 0, 0, 0.9);\n  --border-color: rgba(0, 0, 0, 0.1);\n  --padding: 0.75rem 1rem;\n  --min-height: 48px;\n  transition: var(--glass-transition);\n}\nion-popover ion-content ion-list ion-item:hover {\n  --background: rgba(0, 0, 0, 0.1);\n}\nion-popover ion-content ion-list ion-item:last-child {\n  --border-width: 0;\n}\nion-popover ion-content ion-list ion-item ion-icon {\n  font-size: 1.1rem;\n  margin-left: 0.75rem;\n}\nion-popover ion-content ion-list ion-item ion-label {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.9) !important;\n}\nion-popover ion-content ion-list ion-item:first-child ion-icon {\n  color: var(--glass-accent-primary);\n}\nion-popover ion-content ion-list ion-item:last-child ion-icon {\n  color: var(--glass-accent-danger);\n}\nion-popover.filter-popover {\n  --width: 200px;\n  --max-width: 250px;\n  --background: rgba(240, 240, 240, 0.98);\n}\nion-popover.filter-popover ion-content {\n  --background: rgba(240, 240, 240, 0.98);\n}\nion-popover.filter-popover ion-content ion-list {\n  background: rgba(240, 240, 240, 0.98);\n}\nion-popover.filter-popover ion-content ion-list ion-item {\n  --padding: 0.5rem 1rem;\n  --min-height: 40px;\n  --background: transparent;\n  --color: rgba(0, 0, 0, 0.9);\n  --border-color: rgba(0, 0, 0, 0.1);\n}\nion-popover.filter-popover ion-content ion-list ion-item:hover {\n  --background: rgba(0, 0, 0, 0.1);\n}\nion-popover.filter-popover ion-content ion-list ion-item ion-label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.9) !important;\n}\nion-popover.filter-popover ion-content ion-list ion-item ion-checkbox {\n  --size: 16px;\n  --border-width: 1px;\n  --border-color: rgba(0, 0, 0, 0.6);\n  --background: rgba(255, 255, 255, 0.9);\n  --checkmark-color: rgba(0, 0, 0, 0.9);\n}\nion-popover.filter-popover ion-content ion-list ion-item ion-checkbox.checkbox-checked {\n  --background: rgba(0, 122, 255, 0.9);\n  --border-color: rgba(0, 122, 255, 0.9);\n  --checkmark-color: white;\n}\n/* ========================================\n   RESPONSIVE DESIGN\n======================================== */\n@media (max-width: 768px) {\n  .main-container {\n    padding: 1rem;\n    padding-top: 70px;\n  }\n\n  .form-container {\n    width: 100%;\n    min-width: 300px;\n  }\n\n  .search-header {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .search-header .search-input-container {\n    flex: 1;\n    max-width: 100%;\n  }\n  .search-header .create-btn {\n    width: 100%;\n    justify-content: center;\n  }\n\n  .glass-table-container {\n    overflow-x: auto;\n  }\n\n  .glass-table {\n    min-width: 800px;\n  }\n  .glass-table th, .glass-table td {\n    font-size: 0.75rem;\n    padding: 0.75rem 0.5rem;\n  }\n  .glass-table .name-cell {\n    max-width: 150px;\n  }\n}\n@media (max-width: 480px) {\n  .main-container {\n    padding: 0.5rem;\n    padding-top: 70px;\n  }\n\n  .glass-table {\n    min-width: 700px;\n  }\n  .glass-table th, .glass-table td {\n    font-size: 0.7rem;\n    padding: 0.5rem 0.3rem;\n  }\n  .glass-table .name-cell {\n    max-width: 120px;\n  }\n  .glass-table .balance-cell .balance-amount {\n    font-size: 0.7rem;\n  }\n}\n/* ========================================\n   ANIMATIONS\n======================================== */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.data-row {\n  animation: fadeIn 0.3s ease-out;\n}\n/* ========================================\n   LEGACY COMPATIBILITY\n======================================== */\n.custInput {\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--glass-border-radius-small);\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n.cust-card {\n  border-radius: var(--glass-border-radius);\n  box-shadow: var(--liquid-glass-shadow);\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n}\n.custRow {\n  margin-top: 2rem;\n}\n.bgP {\n  --background: var(--glass-accent-primary);\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1hY2NvdW50Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7MENBQUE7QUFNQSxnQ0FBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtEQUFBO0VBQ0EsMkNBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esa0RBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBRUEsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsNkNBQUE7RUFFQSx5QkFBQTtFQUNBLDJEQUFBO0VBQ0EsaUVBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBSEY7QUFNQSw4QkFBQTtBQUNBO0VBQ0U7SUFDRSxzQ0FBQTtJQUNBLGlEQUFBO0lBQ0EsMENBQUE7SUFDQSwrQ0FBQTtJQUNBLG9EQUFBO0lBQ0Esa0RBQUE7RUFIRjtBQUNGO0FBTUE7OzBDQUFBO0FBSUEsNkJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEY7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBRUEsMEJBQUE7RUFDQSxnSUFBQTtFQU9BLGlDQUFBO0VBQ0EsaURBQUE7RUFFQSxxQkFBQTtBQWJKO0FBY0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7RUFLQSxZQUFBO0VBQ0Esb0JBQUE7QUFoQk47QUFzQkU7RUFDRSx1Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7QUFuQko7QUFx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b0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0FBNUpkO0FBcUtBOzswQ0FBQTtBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7RUFuS0Y7O0VBc0tBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBbktGOztFQXNLQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQW5LRjtFQXFLRTtJQUNFLE9BQUE7SUFDQSxlQUFBO0VBbktKO0VBc0tFO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VBcEtKOztFQXdLQTtJQUNFLGdCQUFBO0VBcktGOztFQXdLQTtJQUNFLGdCQUFBO0VBcktGO0VBdUtFO0lBQ0Usa0JBQUE7SUFDQSx1QkFBQTtFQXJLSjtFQXdLRTtJQUNFLGdCQUFBO0VBdEtKO0FBQ0Y7QUEwS0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQXhLRjs7RUEyS0E7SUFDRSxnQkFBQTtFQXhLRjtFQTBLRTtJQUNFLGlCQUFBO0lBQ0Esc0JBQUE7RUF4S0o7RUEyS0U7SUFDRSxnQkFBQTtFQXpLSjtFQTRLRTtJQUNFLGlCQUFBO0VBMUtKO0FBQ0Y7QUE4S0E7OzBDQUFBO0FBSUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQTdLRjtFQStLQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQTdLRjtBQUNGO0FBZ0xBO0VBQ0UsK0JBQUE7QUE5S0Y7QUFpTEE7OzBDQUFBO0FBSUE7RUFDRSwwQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0FBL0tGO0FBa0xBO0VBQ0UseUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxnREFBQTtBQS9LRjtBQWtMQTtFQUNFLGdCQUFBO0FBL0tGO0FBa0xBO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0FBL0tGIiwiZmlsZSI6InN1Yi1hY2NvdW50Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBBUFBMRSBMSVFVSUQgR0xBU1MgREVTSUdOIFNZU1RFTVxuICAgSW5zcGlyZWQgYnkgQXBwbGUncyB2aXNpb25PUyBMaXF1aWQgR2xhc3NcbiAgIE1hdGNoaW5nIGNhc2gyIHBhZ2Ugc3R5bGVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogQ29yZSBMaXF1aWQgR2xhc3MgVmFyaWFibGVzICovXG46cm9vdCB7XG4gIC8qIEdsYXNzIE1hdGVyaWFsIFByb3BlcnRpZXMgKi9cbiAgLS1saXF1aWQtZ2xhc3MtYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAtLWxpcXVpZC1nbGFzcy1iZy1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtLWxpcXVpZC1nbGFzcy1ib3JkZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgLS1saXF1aWQtZ2xhc3Mtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBcbiAgLyogQmx1ciBhbmQgRWZmZWN0cyAqL1xuICAtLWdsYXNzLWJsdXI6IDIwcHg7XG4gIC0tZ2xhc3MtYmx1ci1zdHJvbmc6IDQwcHg7XG4gIC0tZ2xhc3MtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsOiAxMnB4O1xuICBcbiAgLyogRHluYW1pYyBDb2xvcnMgKi9cbiAgLS1nbGFzcy1hY2NlbnQtcHJpbWFyeTogcmdiYSgwLCAxMjIsIDI1NSwgMC44KTtcbiAgLS1nbGFzcy1hY2NlbnQtc3VjY2VzczogcmdiYSg1MiwgMTk5LCA4OSwgMC44KTtcbiAgLS1nbGFzcy1hY2NlbnQtZGFuZ2VyOiByZ2JhKDI1NSwgNTksIDQ4LCAwLjgpO1xuICBcbiAgLyogQW5pbWF0aW9uIFByb3BlcnRpZXMgKi9cbiAgLS1nbGFzcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gIC0tZ2xhc3MtdHJhbnNpdGlvbi1mYXN0OiBhbGwgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAtLWdsYXNzLXNjYWxlLWhvdmVyOiAxLjAyO1xuICAtLWdsYXNzLXNjYWxlLWFjdGl2ZTogMC45ODtcbn1cblxuLyogRGFyayBNb2RlIEdsYXNzIFZhcmlhYmxlcyAqL1xuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICA6cm9vdCB7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmc6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtLWxpcXVpZC1nbGFzcy1iZy1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgLS1saXF1aWQtZ2xhc3Mtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBUUkFOU1BBUkVOVCBIRUFERVIgU1RZTEVTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qIFRyYW5zcGFyZW50IEdsYXNzIEhlYWRlciAqL1xuLnRyYW5zcGFyZW50LWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1taW4taGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICBcbiAgICAvKiBHbGFzcyBtYXRlcmlhbCBlZmZlY3QgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpIDAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDEwMCVcbiAgICApO1xuICAgIFxuICAgIC8qIFN1YnRsZSBib3JkZXIgb25seSBhdCBib3R0b20gKi9cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIFxuICAgIC8qIEdsYXNzIHJlZmxlY3Rpb24gKi9cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTgwZGVnLFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgMCUsXG4gICAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICAgICk7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zcGFyZW50LXRvb2xiYXIge1xuICAuZ2xhc3MtbWVudS1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgICBtYXJnaW46IDhweDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIH1cbiAgfVxuICBcbiAgLmdsYXNzLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTUFJTiBMQVlPVVQgTUFUQ0hJTkcgQ0FTSDJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogUGFnZSBCYWNrZ3JvdW5kIHdpdGggTGlxdWlkIEdsYXNzICovXG4ubW9kZXJuLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgICM2NjdlZWEgMCUsXG4gICAgIzc2NGJhMiA1MCUsXG4gICAgIzY2N2VlYSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICBhbmltYXRpb246IGdyYWRpZW50U2hpZnQgMTVzIGVhc2UgaW5maW5pdGU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50U2hpZnQge1xuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTsgfVxuICA1MCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTsgfVxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlOyB9XG59XG5cbi8qIExvYWRpbmcgU3RhdGUgKi9cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIFxuICBpb24tc3Bpbm5lciB7XG4gICAgLS1jb2xvcjogcmdiYSgwLCAxMjIsIDI1NSwgMC44KTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYW5pbWF0aW9uOiBzcGlubmVyR2xvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmxvYWRpbmctdGV4dCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMTZweCAwIDAgMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW5uZXJHbG93IHtcbiAgMCUsIDEwMCUgeyBcbiAgICBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDEyMiwgMjU1LCAwKTtcbiAgfVxuICA1MCUgeyBcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjMpO1xuICB9XG59XG5cbi8qIE1haW4gQ29udGFpbmVyIHdpdGggR2xhc3MgRW52aXJvbm1lbnQgKi9cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctdG9wOiA4MHB4OyAvKiBBY2NvdW50IGZvciB0cmFuc3BhcmVudCBoZWFkZXIgKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogRm9ybSBDb250YWluZXIgd2l0aCBGbG9hdGluZyBFZmZlY3QgKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA5NSU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtaW4td2lkdGg6IDYwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGdhcDogMS41cmVtO1xuICBcbiAgLyogRmxvYXRpbmcgQW5pbWF0aW9uICovXG4gIGFuaW1hdGlvbjogZ2xhc3NGbG9hdCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBnbGFzc0Zsb2F0IHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGVYKDBkZWcpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGVYKDFkZWcpOyB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFNFQVJDSCBBTkQgQ1JFQVRFIENBUkQgKExJUVVJRCBHTEFTUylcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLnNlYXJjaC1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIHZhcigtLWxpcXVpZC1nbGFzcy1zaGFkb3cpLFxuICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldCxcbiAgICAwIDFweCAwIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBcbiAgLyogM0QgUGVyc3BlY3RpdmUgKi9cbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgXG4gIC8qIEdsYXNzIFJlZmxlY3Rpb24gRWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMpIHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMpIDAgMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuY29tcGFjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgXG4gIC5zZWFyY2gtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBcbiAgICAuc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICBmbGV4OiAwIDAgNjAlO1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgXG4gICAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgICAgICAgLS1wYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBcbiAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4yKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jbGVhci1zZWFyY2gtYnRuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLS1wYWRkaW5nOiAwLjNyZW07XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDU5LCA0OCwgMC4zKTtcbiAgICAgICAgICAtLWNvbG9yOiByZ2JhKDI1NSwgNTksIDQ4LCAwLjkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5jcmVhdGUtYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgICAgIC0tcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMik7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjMpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBUQUJMRSBDQVJEIChMSVFVSUQgR0xBU1MpXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi50YWJsZS1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIHZhcigtLWxpcXVpZC1nbGFzcy1zaGFkb3cpLFxuICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldCxcbiAgICAwIDFweCAwIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBcbiAgLyogM0QgUGVyc3BlY3RpdmUgKi9cbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgXG4gIC8qIEdsYXNzIFJlZmxlY3Rpb24gRWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMpIHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMpIDAgMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDFyZW07XG4gICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIH1cblxuICAgIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICAgIFxuICAgIC5maWx0ZXItYnV0dG9ucy1jZW50ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgXG4gICAgICAuZmlsdGVyLWJ0biB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIC0tcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuY2xlYXItZmlsdGVycy1idG4ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ0LCA2NywgNTQsIDAuMSk7XG4gICAgICAgIC0tY29sb3I6ICNmNDQzMzY7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjQpO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIC0tcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ0LCA2NywgNTQsIDAuMik7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmNDQzMzY7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgY29sb3I6ICNmNDQzMzY7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmV4cG9ydC1idXR0b25zLWxlZnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG4gICAgXG4gICAgLmZpbHRlci1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBcbiAgICAgIC5maWx0ZXItYnRuIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgLS1wYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jbGVhci1maWx0ZXJzLWJ0biB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDU5LCA0OCwgMC4yKTtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTksIDQ4LCAwLjYpO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIC0tcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCA1OSwgNDgsIDAuMyk7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1OSwgNDgsIDAuOCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC50YWJsZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEdMQVNTIFRBQkxFIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZ2xhc3MtdGFibGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBcbiAgLyogR2xhc3MgY29udGFpbmVyIHJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5cbi5nbGFzcy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBcbiAgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICBcbiAgICB0aCB7XG4gICAgICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogR2xhc3MgcmVmbGVjdGlvbiBvbiBoZWFkZXJzICovXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDE4MGRlZyxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsXG4gICAgICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICAgICApO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgdGJvZHkge1xuICAgIHRyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0ZCB7XG4gICAgICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5sb2FkaW5nLXJvdyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIFxuICAgIHRkIHtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwLjhyZW07XG4gICAgfVxuICB9XG4gIFxuICAuc2VyaWFsLWNlbGwge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgICBtYXgtd2lkdGg6IDYwcHg7XG4gIH1cbiAgXG4gIC5jb2RlLWNlbGwge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG4gIFxuICAubmFtZS1jZWxsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuICBcbiAgLnR5cGUtY2VsbCB7XG4gICAgLnR5cGUtYmFkZ2Uge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgXG4gICAgICAmLnR5cGUtY3JlZGl0IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTk5LCA4OSwgMC4zKTtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMTAwLCAwLCAwLjkpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUyLCAxOTksIDg5LCAwLjUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg1MiwgMTk5LCA4OSwgMC4yKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi50eXBlLWRlYml0IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0OSwgMCwgMC4zKTtcbiAgICAgICAgY29sb3I6IHJnYmEoMTUwLCA3NSwgMCwgMC45KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE0OSwgMCwgMC41KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMjU1LCAxNDksIDAsIDAuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY2F0ZWdvcnktY2VsbCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWNlbGwge1xuICAgIC5iYWxhbmNlLWluZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgXG4gICAgICAuYmFsYW5jZS1hbW91bnQge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjZyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICAgICAgICBcbiAgICAgICAgJltzdHlsZSo9XCJjb2xvcjogcmdiKDE2LCAyMjAsIDk2KVwiXSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTk5LCA4OSwgMC4zKTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAxMDAsIDAsIDAuOSkgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUyLCAxOTksIDg5LCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmW3N0eWxlKj1cImNvbG9yOiByZ2IoMjQwLCA2NSwgNjUpXCJdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTksIDQ4LCAwLjMpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1MCwgMCwgMCwgMC45KSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCA1OSwgNDgsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmJhbGFuY2UtdHlwZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xuICAgICAgICBcbiAgICAgICAgJltzdHlsZSo9XCJjb2xvcjogcmdiKDE2LCAyMjAsIDk2KVwiXSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTk5LCA4OSwgMC4yKTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAxMDAsIDAsIDAuOSkgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUyLCAxOTksIDg5LCAwLjQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmW3N0eWxlKj1cImNvbG9yOiByZ2IoMjQwLCA2NSwgNjUpXCJdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTksIDQ4LCAwLjIpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDE1MCwgMCwgMCwgMC45KSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCA1OSwgNDgsIDAuNCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLXNwaW5uZXIge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBcbiAgLmFjdGlvbnMtY2VsbCB7XG4gICAgLmFjdGlvbnMtYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgICAgIC0tcGFkZGluZzogMC41cmVtO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMTIyLCAyNTUsIDAuMyk7XG4gICAgICAgIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEVNUFRZIFNUQVRFIEFORCBMT0FEIE1PUkVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0cmVtIDEuNXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgXG4gIC5lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG4gIFxuICBoMyB7XG4gICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxufVxuXG4ubG9hZC1tb3JlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgXG4gIC5sb2FkLW1vcmUtYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICAgIC0tcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgXG4gICAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICB9XG4gICAgXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEFDVElPTlMgUE9QT1ZFUlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5pb24tcG9wb3ZlciB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tbGlxdWlkLWdsYXNzLXNoYWRvdyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gICAgXG4gICAgaW9uLWxpc3Qge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgICAgIFxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIC0tcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1kYW5nZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLy8gRmlsdGVyIHBvcG92ZXIgc3BlY2lmaWMgc3R5bGVzXG4gICYuZmlsdGVyLXBvcG92ZXIge1xuICAgIC0td2lkdGg6IDIwMHB4O1xuICAgIC0tbWF4LXdpZHRoOiAyNTBweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45OCk7XG4gICAgXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuOTgpO1xuICAgICAgXG4gICAgICBpb24tbGlzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45OCk7XG4gICAgICAgIFxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgLS1wYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgICAgIC0tc2l6ZTogMTZweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICAgICAgICAtLWNoZWNrbWFyay1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLmNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMTIyLCAyNTUsIDAuOSk7XG4gICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDEyMiwgMjU1LCAwLjkpO1xuICAgICAgICAgICAgICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFJFU1BPTlNJVkUgREVTSUdOXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIFxuICAgIC5zZWFyY2gtaW5wdXQtY29udGFpbmVyIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5jcmVhdGUtYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIFxuICAuZ2xhc3MtdGFibGUtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG4gIFxuICAuZ2xhc3MtdGFibGUge1xuICAgIG1pbi13aWR0aDogODAwcHg7XG4gICAgXG4gICAgdGgsIHRkIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtO1xuICAgIH1cbiAgICBcbiAgICAubmFtZS1jZWxsIHtcbiAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgfVxuICBcbiAgLmdsYXNzLXRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIFxuICAgIHRoLCB0ZCB7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjNyZW07XG4gICAgfVxuICAgIFxuICAgIC5uYW1lLWNlbGwge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmJhbGFuY2UtY2VsbCAuYmFsYW5jZS1hbW91bnQge1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEFOSU1BVElPTlNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLmRhdGEtcm93IHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTEVHQUNZIENPTVBBVElCSUxJVFlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmN1c3RJbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5jdXN0LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tbGlxdWlkLWdsYXNzLXNoYWRvdyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbn1cblxuLmN1c3RSb3cge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uYmdQIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gIC0tY29sb3I6IHdoaXRlO1xufSJdfQ== */";

/***/ }),

/***/ 23140:
/*!****************************************************************!*\
  !*** ./src/app/sub-account2/sub-account2.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"glass-menu-button\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"glass-title\">إدارة الحسابات</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info\" class=\"main-container\">\n    <div class=\"form-container\">\n      <!-- Search and Create Card -->\n      <ion-card class=\"search-card\">\n        <ion-card-content class=\"compact-content\">\n          <div class=\"search-header\">\n            <div class=\"search-input-container\">\n              <ion-input \n                [(ngModel)]=\"searchTerm\" \n                (ionInput)=\"searchAccounts($event)\" \n                placeholder=\"بحث بالاسم أو الكود...\"\n                class=\"search-input\">\n                <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              </ion-input>\n              <ion-button \n                *ngIf=\"searchTerm && searchTerm.trim() !== ''\"\n                (click)=\"clearSearch()\"\n                fill=\"clear\"\n                size=\"small\"\n                class=\"clear-search-btn\">\n                <ion-icon name=\"close-outline\"></ion-icon>\n              </ion-button>\n            </div>\n            <ion-button \n              (click)=\"openCreateModal()\"\n              fill=\"outline\"\n              color=\"primary\"\n              class=\"create-btn\">\n              <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\n              إنشاء حساب جديد\n            </ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      \n      <!-- Accounts Table Card -->\n      <ion-card class=\"table-card\" color=\"primary\">\n        <ion-card-header class=\"card-header\">\n          <div class=\"header-content\">\n            <ion-card-title class=\"card-title\">قائمة الحسابات</ion-card-title>\n            \n            <div class=\"filter-buttons-center\">\n              <ion-button \n                fill=\"outline\" \n                size=\"small\" \n                class=\"filter-btn\"\n                [class.active]=\"activeFilters.cat_name\"\n                (click)=\"toggleCategoryFilter()\">\n                <ion-icon name=\"funnel-outline\" slot=\"start\"></ion-icon>\n                تصنيف\n              </ion-button>\n              <ion-button \n                fill=\"outline\" \n                size=\"small\" \n                class=\"filter-btn\"\n                [class.active]=\"activeFilters.balance_type\"\n                (click)=\"toggleBalanceTypeFilter()\">\n                <ion-icon name=\"swap-horizontal-outline\" slot=\"start\"></ion-icon>\n                نوع الرصيد\n              </ion-button>\n              <ion-button \n                fill=\"outline\" \n                size=\"small\" \n                class=\"filter-btn\"\n                [class.active]=\"activeFilters.has_balance\"\n                (click)=\"toggleHasBalanceFilter()\">\n                <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\n                رصيد > 0\n              </ion-button>\n              <ion-button \n                fill=\"outline\" \n                size=\"small\" \n                class=\"filter-btn\"\n                [class.active]=\"activeFilters.sub_type\"\n                (click)=\"toggleSubTypeFilter()\">\n                <ion-icon name=\"list-outline\" slot=\"start\"></ion-icon>\n                طبيعة الحساب\n              </ion-button>\n              <ion-button \n                *ngIf=\"hasActiveFilters()\"\n                fill=\"clear\" \n                size=\"small\" \n                class=\"clear-filters-btn\"\n                (click)=\"clearAllFilters()\">\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                مسح الفلاتر\n              </ion-button>\n            </div>\n            \n            <div class=\"export-buttons-left\">\n              <app-export-buttons \n                [hasData]=\"filteredAccounts && filteredAccounts.length > 0\"\n                [isLoading]=\"loading\"\n                (exportPDF)=\"exportToPDF()\"\n                (exportExcel)=\"exportToExcel()\">\n              </app-export-buttons>\n            </div>\n          </div>\n        </ion-card-header>\n        <ion-card-content class=\"table-content\">\n          <!-- Glass Table -->\n          <div class=\"glass-table-container\">\n            <table class=\"glass-table\">\n              <thead>\n                <tr>\n                  <th>م</th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('sub_code')\">\n                    <ion-icon [name]=\"getSortIcon('sub_code')\" class=\"sort-icon\"></ion-icon>\n                    الكود\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('sub_name')\">\n                    <ion-icon [name]=\"getSortIcon('sub_name')\" class=\"sort-icon\"></ion-icon>\n                    اسم الحساب\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('sub_type')\">\n                    <ion-icon [name]=\"getSortIcon('sub_type')\" class=\"sort-icon\"></ion-icon>\n                    النوع\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('cat_name')\">\n                    <ion-icon [name]=\"getSortIcon('cat_name')\" class=\"sort-icon\"></ion-icon>\n                    التصنيف\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('current_balance')\">\n                    <ion-icon [name]=\"getSortIcon('current_balance')\" class=\"sort-icon\"></ion-icon>\n                    الرصيد الحالي\n                  </th>\n                  <th>العمليات</th>\n                </tr>\n              </thead>\n              <tbody>\n                <!-- Loading Rows -->\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                \n                <!-- Data Rows -->\n                <tr *ngFor=\"let account of sortedAccounts; let i = index\" class=\"data-row\">\n                  <td class=\"serial-cell\">{{(currentPage - 1) * pageSize + i + 1}}</td>\n                  <td class=\"code-cell\">{{account.sub_code}}</td>\n                  <td class=\"name-cell\">{{account.sub_name}}</td>\n                  <td class=\"type-cell\">\n                    <span class=\"type-badge\" [class.type-credit]=\"account.sub_type == 'credit'\" [class.type-debit]=\"account.sub_type == 'debit'\">\n                      {{account.sub_type == 'credit' ? 'دائن' : 'مدين'}}\n                    </span>\n                  </td>\n                  <td class=\"category-cell\">{{account.cat_name || 'غير محدد'}}</td>\n                  <td class=\"balance-cell\">\n                    <div class=\"balance-info\">\n                      <span class=\"balance-amount\" \n                            [style.color]=\"getBalanceColor(account.current_balance) === 'success' ? '#10dc60' : '#f04141'\">\n                        {{formatBalance(account.current_balance) || '0.00'}}\n                      </span>\n                      <span *ngIf=\"account.current_balance != 0\" class=\"balance-type\" \n                            [style.color]=\"account.balance_type === 'debit' ? '#10dc60' : '#f04141'\">\n                        {{account.balance_type === 'debit' ? 'مدين' : 'دائن'}}\n                      </span>\n                      <ion-spinner *ngIf=\"account.loadingBalance\" name=\"dots\" color=\"primary\"></ion-spinner>\n                    </div>\n                  </td>\n                  <td class=\"actions-cell\">\n                    <ion-button \n                      fill=\"clear\" \n                      size=\"small\" \n                      class=\"actions-btn\" \n                      (click)=\"presentActionsPopover($event, account)\"\n                      id=\"actions-trigger-{{i}}\">\n                      <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            \n            <!-- Empty State -->\n            <div class=\"empty-state\" *ngIf=\"filteredAccounts.length === 0 && !loading\">\n              <ion-icon name=\"business-outline\" class=\"empty-icon\"></ion-icon>\n              <h3 *ngIf=\"!searchTerm || searchTerm.trim() === ''\">لا توجد حسابات</h3>\n              <h3 *ngIf=\"searchTerm && searchTerm.trim() !== ''\">لا توجد نتائج للبحث</h3>\n              <p *ngIf=\"!searchTerm || searchTerm.trim() === ''\">ابدأ بإنشاء حساب جديد</p>\n              <p *ngIf=\"searchTerm && searchTerm.trim() !== ''\">جرب البحث بكلمة أخرى أو امسح البحث لعرض جميع الحسابات</p>\n              <ion-button *ngIf=\"searchTerm && searchTerm.trim() !== ''\" \n                          fill=\"outline\" \n                          (click)=\"clearSearch()\" \n                          class=\"clear-search-btn\">\n                <ion-icon name=\"refresh-outline\" slot=\"start\"></ion-icon>\n                مسح البحث\n              </ion-button>\n            </div>\n            \n            <!-- Load More Button -->\n            <div class=\"load-more-container\" *ngIf=\"hasMoreAccounts && !loading\">\n              <ion-button \n                (click)=\"loadMoreAccounts()\"\n                fill=\"outline\"\n                color=\"primary\"\n                class=\"load-more-btn\"\n                [disabled]=\"loadingMore\">\n                <ion-icon *ngIf=\"!loadingMore\" name=\"chevron-down-outline\" slot=\"start\"></ion-icon>\n                <ion-spinner *ngIf=\"loadingMore\" name=\"crescent\" slot=\"start\"></ion-spinner>\n                {{loadingMore ? 'جاري التحميل...' : 'عرض المزيد'}}\n              </ion-button>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n<!-- Actions Popover -->\n<ion-popover #actionsPopover [isOpen]=\"isActionsPopoverOpen\" (didDismiss)=\"isActionsPopoverOpen = false\"   [backdropDismiss]=\"true\">\n  <ng-template>\n    <ion-content>\n      <ion-list>\n        <ion-item button (click)=\"editAccount(selectedAccount)\">\n          <ion-icon name=\"create-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label>تعديل</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n\n<!-- Filter Popovers -->\n<!-- Category Filter -->\n<ion-popover #categoryFilter [isOpen]=\"showCategoryFilter\" (didDismiss)=\"showCategoryFilter = false\" >\n  <ng-template>\n    <ion-content class=\"filter-popover\">\n      <ion-list>\n        <ion-item button (click)=\"selectCategoryFilter('')\">\n          <ion-label>جميع التصنيفات</ion-label>\n          <ion-checkbox slot=\"end\" [checked]=\"filters.cat_name === ''\"></ion-checkbox>\n        </ion-item>\n        <ion-item button *ngFor=\"let category of categories\" (click)=\"selectCategoryFilter(category.cat_name)\">\n          <ion-label>{{category.cat_name}}</ion-label>\n          <ion-checkbox slot=\"end\" [checked]=\"filters.cat_name === category.cat_name\"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n\n<!-- Balance Type Filter -->\n<ion-popover #balanceTypeFilter [isOpen]=\"showBalanceTypeFilter\" (didDismiss)=\"showBalanceTypeFilter = false\"  >\n  <ng-template>\n    <ion-content class=\"filter-popover\">\n      <ion-list>\n        <ion-item button (click)=\"selectBalanceTypeFilter('')\">\n          <ion-label>جميع الأنواع</ion-label>\n          <ion-checkbox slot=\"end\" [checked]=\"filters.balance_type === ''\"></ion-checkbox>\n        </ion-item>\n        <ion-item button (click)=\"selectBalanceTypeFilter('debit')\">\n          <ion-label>مدين</ion-label>\n          <ion-checkbox slot=\"end\" [checked]=\"filters.balance_type === 'debit'\"></ion-checkbox>\n        </ion-item>\n        <ion-item button (click)=\"selectBalanceTypeFilter('credit')\">\n          <ion-label>دائن</ion-label>\n          <ion-checkbox slot=\"end\" [checked]=\"filters.balance_type === 'credit'\"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n\n<!-- Sub Type Filter -->\n<ion-popover #subTypeFilter [isOpen]=\"showSubTypeFilter\" (didDismiss)=\"showSubTypeFilter = false\" >\n  <ng-template>\n    <ion-content class=\"filter-popover\">\n      <ion-list>\n        <ion-item button (click)=\"selectSubTypeFilter('')\">\n          <ion-label>جميع الطبائع</ion-label>\n          <ion-checkbox slot=\"end\" [checked]=\"filters.sub_type === ''\"></ion-checkbox>\n        </ion-item>\n        <ion-item button (click)=\"selectSubTypeFilter('debit')\">\n          <ion-label>مدين</ion-label>\n          <ion-checkbox slot=\"end\" [checked]=\"filters.sub_type === 'debit'\"></ion-checkbox>\n        </ion-item>\n        <ion-item button (click)=\"selectSubTypeFilter('credit')\">\n          <ion-label>دائن</ion-label>\n          <ion-checkbox slot=\"end\" [checked]=\"filters.sub_type === 'credit'\"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sub-account2_sub-account2_module_ts.js.map
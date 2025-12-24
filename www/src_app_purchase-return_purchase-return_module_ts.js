"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_purchase-return_purchase-return_module_ts"],{

/***/ 23359:
/*!*******************************************************************!*\
  !*** ./src/app/purchase-return/purchase-return-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseReturnPageRoutingModule": () => (/* binding */ PurchaseReturnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _purchase_return_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-return.page */ 52949);




const routes = [
    {
        path: '',
        component: _purchase_return_page__WEBPACK_IMPORTED_MODULE_0__.PurchaseReturnPage
    }
];
let PurchaseReturnPageRoutingModule = class PurchaseReturnPageRoutingModule {
};
PurchaseReturnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchaseReturnPageRoutingModule);



/***/ }),

/***/ 91671:
/*!***********************************************************!*\
  !*** ./src/app/purchase-return/purchase-return.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseReturnPageModule": () => (/* binding */ PurchaseReturnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _purchase_return_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-return-routing.module */ 23359);
/* harmony import */ var _purchase_return_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-return.page */ 52949);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let PurchaseReturnPageModule = class PurchaseReturnPageModule {
};
PurchaseReturnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _purchase_return_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchaseReturnPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_purchase_return_page__WEBPACK_IMPORTED_MODULE_1__.PurchaseReturnPage]
    })
], PurchaseReturnPageModule);



/***/ }),

/***/ 52949:
/*!*********************************************************!*\
  !*** ./src/app/purchase-return/purchase-return.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseReturnPage": () => (/* binding */ PurchaseReturnPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _purchase_return_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-return.page.html?ngResource */ 37286);
/* harmony import */ var _purchase_return_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-return.page.scss?ngResource */ 15770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _services_account_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/account-communication.service */ 32724);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/currency.service */ 6612);















let PurchaseReturnPage = class PurchaseReturnPage {
    constructor(rout, platform, behavApi, _location, route, renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast, accountCommunicationService, cdr, currencyService) {
        this.rout = rout;
        this.platform = platform;
        this.behavApi = behavApi;
        this._location = _location;
        this.route = route;
        this.renderer = renderer;
        this.modalController = modalController;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.accountCommunicationService = accountCommunicationService;
        this.cdr = cdr;
        this.currencyService = currencyService;
        // Return-specific properties
        this.isReturnAllItems = false;
        this.originalInvoice = null;
        this.originalItems = [];
        this.selectedOriginalInvoice = null;
        this.availablePurchaseInvoices = [];
        this.returnReason = '';
        this.discountType = 'percentage'; // 'percentage' or 'amount'
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.isOpen = false;
        this.isOpenNotif = false;
        this.newNotif = false;
        this.sub_account = [];
        this.sub_accountLocalSales = [];
        this.sub_accountSales = [];
        this.initialInvoices = [];
        this.items = [];
        this.itemsLocal = [];
        this.itemList = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        this.searchTerm = '';
        this.highlightedIndex = -1;
        this.searchMatches = [];
        this.purchaseLocal = [];
        this.purchase = [];
        this.notifArr = [];
        this.LogHistoryLocalArr = [];
        this.randomsNumber = [];
        this.sub_nameNew = "";
        this.discountPerc = 0;
        this.printMode = false;
        this.printArr = [];
        this.offline = false;
        this.color = 'dark';
        this.showMe = null;
        this.status = 'new';
        this.searchLang = 0;
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        this.finalResult = [];
        this.loadingItems = false;
        this.logHistoryArr = [];
        this.showNotif = false;
        this.device = "";
        this.currenQty = 0;
        this.firstQty = 0;
        this.perchTotQty = 0;
        this.payTotQty = 0;
        this.perchTot = 0;
        this.qtyReal = 0;
        this.availQty = 0;
        this.pendingItemsFromStock = [];
        // Default category from localStorage
        this.defaultCategoryId = null;
        this.statusFromRoute = '';
        this.showBackButton = false;
        // Loading state management
        this.isSaving = false;
        this.isDeleting = false;
        this.isUpdating = false;
        this.currentLoadingMessage = '';
        this.currentLoader = null;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentSupplierStatus: 0 };
        this.printArr.push({
            'returnInvo': "",
            'itemList': "",
            'selectedAccount': "",
            'sub_nameNew': "",
            "userInfo": "",
            "sub_balanse": 0,
            "balanceStatus": ""
        });
        this.selectedItem = {
            id: undefined,
            dateCreated: "",
            return_ref: "",
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            return_price: 0,
            perch_price: 0,
            qty: 0,
            tot: 0,
            availQty: 0,
            aliasEn: "",
            tax: 0,
            imageUrl: ""
        };
    }
    ngOnInit() {
        // Ensure discountType is properly initialized
        if (!this.discountType) {
            this.discountType = 'percentage';
            this.cdr.detectChanges();
        }
        // Initialize currency service
        this.initializeCurrency();
        // Subscribe to supplier selection from account-selector
        this.supplierSubscription = this.accountCommunicationService.customerSelected$.subscribe(({ id, account }) => {
            if (id && this.returnInvo) {
                console.log('Supplier selected in purchase return, setting supplier_id:', id);
                this.returnInvo.supplier_id = id;
                this.returnInvo.sub_name = account.sub_name;
                this.selectedAccount = account;
                console.log('Purchase return invoice updated:', this.returnInvo);
            }
        });
        // Handle navigation parameters from purchase-record page
        this.route.queryParams.subscribe(params => {
            if (params['original_pay_ref']) {
                console.log('Navigation parameters received:', params);
                this.showBackButton = true;
                // Pre-select the invoice if coming from purchase-record
                this.handleNavigationParams(params);
            }
        });
        this.getAppInfo();
    }
    ngOnDestroy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // Clean up loading states
            yield this.hideLoading();
            // Clean up subscriptions
            if (this.supplierSubscription) {
                this.supplierSubscription.unsubscribe();
            }
            if (this.currencySubscription) {
                this.currencySubscription.unsubscribe();
            }
        });
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.currencyService.initializeCurrency();
                yield this.currencyService.loadSupportedCurrencies();
                // Load currency rates when year and store info are available
                if (this.store_info && this.year) {
                    yield this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
                }
                // Subscribe to currency changes
                this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
                    this.cdr.detectChanges();
                });
            }
            catch (error) {
                console.error('Error initializing currency:', error);
            }
        });
    }
    // Toggle return all items
    onReturnAllToggle() {
        this.isReturnAllItems = !this.isReturnAllItems;
        if (this.isReturnAllItems && this.originalItems.length > 0) {
            // Auto-select all items from original invoice
            this.selectAllItemsForReturn();
        }
        else {
            // Clear item selection for manual selection
            this.clearItemSelection();
        }
        this.updateReturnFlag();
        this.getTotal();
    }
    // Select all items from original invoice for return
    selectAllItemsForReturn() {
        this.itemList = [];
        if (this.originalItems && this.originalItems.length > 0) {
            this.originalItems.forEach(item => {
                let d = new Date();
                let r = this.datePipe.transform(d, 'dd-MM-YYYY');
                this.itemList.push({
                    "id": 'NULL',
                    "return_ref": this.returnInvo.return_ref,
                    "item_name": item.item_name,
                    "return_price": item.perch_price,
                    "quantity": +item.quantity,
                    "tot": (item.quantity * +item.perch_price).toFixed(2),
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +item.item_id,
                    "dateCreated": r,
                    "original_price": item.perch_price,
                    "tax": item.tax || 0,
                    "imageUrl": item.imageUrl || ''
                });
            });
        }
        this.updateSortedList();
    }
    // Clear item selection
    clearItemSelection() {
        this.itemList = [];
        this.updateSortedList();
    }
    // Update return flag based on current selection
    updateReturnFlag() {
        if (this.originalItems && this.originalItems.length > 0 && this.itemList.length > 0) {
            // Check if all original items are selected with full quantities
            this.returnInvo.is_full_return = this.isReturnAllItems ? 1 : 0;
        }
        else {
            this.returnInvo.is_full_return = 0;
        }
    }
    // Load available purchase invoices for selection
    loadAvailablePurchaseInvoices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تحميل فواتير الشراء المتاحة...', 'saving');
            try {
                this.api.getTopPerch(this.store_info.id, this.year.id).subscribe(data => {
                    this.hideLoading();
                    let res = data;
                    if (res['message'] != 'No record Found') {
                        this.availablePurchaseInvoices = res['data'];
                    }
                    else {
                        this.availablePurchaseInvoices = [];
                    }
                }, (err) => {
                    this.hideLoading();
                    console.log('Error loading purchase invoices:', err);
                    this.presentToast('خطأ في تحميل فواتير الشراء', 'danger');
                });
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Error in loadAvailablePurchaseInvoices:', error);
            }
        });
    }
    // Select original purchase invoice
    selectOriginalInvoice(invoice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري فحص فاتورة الشراء المختارة...', 'saving');
            try {
                // Check for existing returns first
                const existingReturns = yield this.checkForExistingReturns(invoice.pay_ref);
                if (existingReturns.hasExistingReturns) {
                    yield this.hideLoading();
                    yield this.showExistingReturnsWarning(existingReturns);
                    // Allow user to continue but with warning
                    const shouldContinue = yield this.presentConfirmAlert('تحذير - مرتجعات موجودة', `هذه الفاتورة لديها ${existingReturns.returnCount} مرتجعة(ات) موجودة بالفعل.\nهل تريد المتابعة لإنشاء مرتجعة جديدة؟`, 'نعم، متابعة', 'إلغاء');
                    if (!shouldContinue) {
                        return; // User chose to cancel
                    }
                }
                else {
                    yield this.hideLoading();
                }
                // Proceed with invoice selection
                this.selectedOriginalInvoice = invoice;
                this.originalInvoice = invoice;
                // Load original invoice items
                yield this.loadOriginalInvoiceItems(invoice.pay_ref);
                // Update return invoice details
                this.returnInvo.original_pay_ref = invoice.pay_ref;
                this.returnInvo.supplier_id = invoice.supplier_id;
                this.selectedAccount.id = invoice.supplier_id;
                this.selectedAccount.sub_name = invoice.sub_name || '';
                // Clear previous selections
                this.isReturnAllItems = false;
                this.clearItemSelection();
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Error checking existing returns:', error);
                this.presentToast('حدث خطأ أثناء فحص الفاتورة', 'danger');
            }
        });
    }
    // Load original invoice items
    loadOriginalInvoiceItems(pay_ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تحميل أصناف فاتورة الشراء...', 'saving');
            try {
                this.api.getPerchInvoDetail(this.store_info.id, pay_ref, this.year.id).subscribe(data => {
                    this.hideLoading();
                    let res = data;
                    this.originalItems = res['data'] || [];
                    console.log('Original purchase items loaded:', this.originalItems);
                }, (err) => {
                    this.hideLoading();
                    console.log('Error loading original items:', err);
                    this.presentToast('خطأ في تحميل أصناف فاتورة الشراء', 'danger');
                });
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Error in loadOriginalInvoiceItems:', error);
            }
        });
    }
    presentPopover(e) {
        this.popover.event = e;
        this.isOpen = true;
        this.clear();
        this.searchResult = this.originalItems; // Show original items instead of all items
        setTimeout(() => {
            this.setFocusOnInput('popInput');
        }, 2000);
    }
    presentPopoverNotif(e) {
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif.event = e;
        this.isOpenNotif = true;
    }
    didDissmis() {
        this.isOpen = false;
        this.setFocusOnInput('qtyId');
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_6__.FilterPipe;
        let fiteredArr = filterPipe.transform(this.originalItems, ev.target.value); // Search in original items
        if (fiteredArr.length > 0) {
            fiteredArr.forEach(element => {
                this.searchResult.push(element);
            });
        }
    }
    clear(item_name) {
        if (item_name) {
            this.selectedItem = {
                id: undefined,
                dateCreated: "",
                return_ref: this.returnInvo.return_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                return_price: 0,
                perch_price: 0,
                qty: 0,
                tot: 0,
                availQty: 0,
                aliasEn: "",
                tax: 0,
                imageUrl: ""
            };
        }
        else {
            this.searchTerm = "";
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
                this.prepareReturnInvo();
                this.loadAvailablePurchaseInvoices();
            }
        });
    }
    // Handle navigation parameters from purchase-record page
    handleNavigationParams(params) {
        if (this.store_info && this.year && params['original_pay_ref']) {
            // Create a mock invoice object from the parameters
            const mockInvoice = {
                pay_ref: params['original_pay_ref'],
                supplier_id: params['supplier_id'],
                sub_name: params['supplier_name'],
                tot_pr: params['original_total'],
                pay_date: params['original_date']
            };
            console.log('Pre-selecting invoice from navigation:', mockInvoice);
            // Auto-select this invoice
            setTimeout(() => {
                this.selectOriginalInvoice(mockInvoice);
            }, 1000); // Give time for page to initialize
        }
    }
    prepareReturnInvo() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentSupplierStatus: 0 };
        this.sub_nameNew = "";
        this.returnInvo = {
            return_id: undefined,
            return_ref: 0,
            original_pay_ref: "",
            store_id: "",
            tot_pr: 0,
            pay: 0,
            return_date: "",
            return_time: "",
            user_id: "",
            supplier_id: null,
            return_method: "",
            discount: 0,
            changee: 0,
            sub_name: "",
            returnComment: "",
            yearId: this.year.id,
            is_full_return: 0,
            return_reason: ""
        };
        this.discountPerc = 0;
        this.returnReason = '';
        this.isReturnAllItems = false;
        // Clear discount related variables - use setTimeout to prevent expression change error
        setTimeout(() => {
            this.discountType = 'percentage';
            this.discountAmount = 0;
            this.calculatedDiscountPerc = 0;
            this.calculatedDiscountAmount = 0;
            this.cdr.detectChanges();
        }, 0);
        let d = new Date;
        this.returnInvo.return_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.returnInvo.return_time = this.datePipe.transform(d, 'HH:mm:ss');
        this.generateRandom();
        this.returnInvo.store_id = this.store_info.id;
        this.returnInvo.user_id = this.user_info.id;
        this.returnInvo.yearId = this.year.id;
        // Clear itemList and related arrays
        this.itemList = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        // Clear search related variables
        this.searchTerm = '';
        this.searchMatches = [];
        this.highlightedIndex = -1;
        // Clear original invoice data
        this.originalInvoice = null;
        this.originalItems = [];
        this.selectedOriginalInvoice = null;
    }
    setFocusOnInput(Input) {
        if (Input == 'dst') {
            this.nameField.nativeElement.focus();
        }
        else if (Input == 'dstPop') {
            this.dstPop.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.originalItems;
            setTimeout(() => {
                this.popInput.setFocus();
            }, 1500);
        }
        else if (Input == 'qtyId') {
            this.qtyId.setFocus();
        }
        else if (Input == 'popInput') {
            this.popInput.setFocus();
        }
    }
    isFocused(event) {
        //console.log('focus event', event)
    }
    generateRandom() {
        let da = new Date;
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString();
        this.returnInvo.return_ref = 'PRTN' + this.store_info.store_ref + randomsNumber;
    }
    selectFromPop(item) {
        this.selectedItem = {
            id: item.item_id,
            dateCreated: item.dateCreated,
            return_ref: this.returnInvo.return_ref,
            item_desc: item.item_desc,
            item_name: item.item_name,
            item_unit: item.item_unit,
            parcode: item.parcode,
            return_price: item.perch_price,
            perch_price: item.perch_price,
            qty: "",
            tot: item.perch_price,
            availQty: item.quantity,
            aliasEn: item.aliasEn,
            tax: item.tax,
            imageUrl: item.imageUrl
        };
        this.searchTerm = item.item_name;
        this.didDissmis();
    }
    pickDetail(ev) {
        let fl = [];
        if (this.searchLang == 1) {
            fl = this.originalItems.filter(x => x.item_desc == ev.target.value);
        }
        else {
            fl = this.originalItems.filter(x => x.item_name == ev.target.value);
        }
        if (fl.length > 0) {
            this.selectedItem = {
                id: fl[0]['item_id'],
                dateCreated: fl[0]['dateCreated'],
                return_ref: this.returnInvo.return_ref,
                item_desc: fl[0]['item_desc'],
                item_name: fl[0]['item_name'],
                item_unit: fl[0]['item_unit'],
                parcode: fl[0]['parcode'],
                return_price: fl[0]['perch_price'],
                perch_price: fl[0]['perch_price'],
                qty: "",
                tot: fl[0]['perch_price'],
                availQty: fl[0]['quantity'],
                aliasEn: fl[0]['aliasEn'],
                tax: fl[0]['tax'],
                imageUrl: fl[0]['imageUrl']
            };
            this.setFocusOnInput('qtyId');
        }
        else {
            this.presentToast('خطأ في اسم الصنف ', 'danger');
            this.selectedItem.item_name = "";
            this.selectedItem.item_desc = "";
        }
    }
    qtyhange(ev) {
        // Update item total
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.return_price).toFixed(2);
        // Enhanced validation using the new validation methods
        const validationResult = this.validateItemQuantity(this.selectedItem, +this.selectedItem.qty);
        if (!validationResult.valid) {
            this.presentToast(validationResult.message, 'warning');
            // Reset quantity to previous valid value or available quantity
            this.selectedItem.qty = Math.min(+this.selectedItem.availQty, +this.selectedItem.qty);
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.return_price).toFixed(2);
            return;
        }
        // Additional real-time validation for business rules
        if (+this.selectedItem.qty > +this.selectedItem.availQty) {
            this.presentToast('الكمية المطلوب إرجاعها أكبر من الكمية المتاحة في الفاتورة الأصلية', 'warning');
            this.selectedItem.qty = +this.selectedItem.availQty;
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.return_price).toFixed(2);
        }
        // Check for existing returns of the same item
        const existingReturnItem = this.itemList.find(x => x.item_name == this.selectedItem.item_name);
        if (existingReturnItem) {
            const totalQuantity = +this.selectedItem.qty + +existingReturnItem.quantity;
            if (totalQuantity > +this.selectedItem.availQty) {
                this.presentToast(`مجموع الكمية المطلوب إرجاعها (${totalQuantity}) أكبر من الكمية المتاحة (${this.selectedItem.availQty})`, 'warning');
                const maxAllowedQty = +this.selectedItem.availQty - +existingReturnItem.quantity;
                this.selectedItem.qty = Math.max(0, maxAllowedQty);
                this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.return_price).toFixed(2);
            }
        }
    }
    pricehange(ev) {
        // Update total
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.return_price).toFixed(2);
        // Validate price against original price
        const originalItem = this.originalItems.find(item => item.item_id === this.selectedItem.id || item.item_name === this.selectedItem.item_name);
        if (originalItem && +this.selectedItem.return_price > (+originalItem.perch_price * 1.1)) {
            this.presentToast(`سعر الإرجاع (${this.selectedItem.return_price}) أكبر من السعر الأصلي (${originalItem.perch_price}) بشكل غير مقبول`, 'warning');
            this.selectedItem.return_price = +originalItem.perch_price;
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.return_price).toFixed(2);
        }
        // Ensure price is not negative
        if (+this.selectedItem.return_price < 0) {
            this.presentToast('السعر لا يمكن أن يكون سالباً', 'warning');
            this.selectedItem.return_price = originalItem ? +originalItem.perch_price : 0;
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.return_price).toFixed(2);
        }
    }
    payChange(ev) {
        if (this.discountPerc > 0) {
            this.returnInvo.discount = (+this.returnInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
        }
        this.returnInvo.changee = +(this.returnInvo.tot_pr - +this.returnInvo.discount) - ev.target.value;
    }
    onDiscountTypeChange(event) {
        this.discountType = event.detail.value;
        // Reset discount values when switching types
        this.discountPerc = 0;
        this.discountAmount = 0;
        this.returnInvo.discount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.calculateChange();
        // Trigger change detection to prevent ExpressionChangedAfterItHasBeenCheckedError
        this.cdr.detectChanges();
    }
    onPercentageDiscountChange(event) {
        this.discountPerc = event.target.value || 0;
        if (this.returnInvo.tot_pr > 0) {
            // Calculate discount amount based on percentage
            this.calculatedDiscountAmount = (+this.returnInvo.tot_pr * +this.discountPerc / 100);
            this.returnInvo.discount = this.calculatedDiscountAmount.toFixed(2);
            this.calculateChange();
        }
    }
    onAmountDiscountChange(event) {
        this.discountAmount = event.target.value || 0;
        if (this.returnInvo.tot_pr > 0 && this.discountAmount > 0) {
            // Calculate discount percentage based on amount
            this.calculatedDiscountPerc = ((+this.discountAmount / +this.returnInvo.tot_pr) * 100);
            this.returnInvo.discount = this.discountAmount;
            this.calculateChange();
        }
        else {
            this.calculatedDiscountPerc = 0;
            this.returnInvo.discount = 0;
            this.calculateChange();
        }
    }
    calculateChange() {
        this.returnInvo.changee = +(this.returnInvo.tot_pr - +this.returnInvo.discount) - this.returnInvo.pay;
    }
    getTotal() {
        // Use the enhanced calculation method
        this.recalculateReturnTotals();
        // Additional validation during calculation
        const subtotal = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
        // Validate total against original invoice
        if (this.selectedOriginalInvoice && subtotal > +this.selectedOriginalInvoice.tot_pr) {
            console.warn('Return total exceeds original invoice total');
            this.presentToast('تحذير: إجمالي المرتجعة يتجاوز إجمالي الفاتورة الأصلية', 'warning');
        }
        // Update discount calculation labels
        if (this.discountType === 'percentage' && this.discountPerc > 0) {
            this.calculatedDiscountAmount = (subtotal * +this.discountPerc / 100);
        }
        else if (this.discountType === 'amount' && this.discountAmount > 0 && subtotal > 0) {
            this.calculatedDiscountPerc = ((+this.discountAmount / subtotal) * 100);
        }
    }
    deleteItem(index) {
        const displayList = this.getDisplayItemList();
        const itemToDelete = displayList[index];
        // Find the item in the original itemList and remove it
        const originalIndex = this.itemList.findIndex(item => item.item_name === itemToDelete.item_name &&
            item.return_price === itemToDelete.return_price &&
            item.quantity === itemToDelete.quantity);
        if (originalIndex !== -1) {
            this.itemList.splice(originalIndex, 1);
        }
        // Reset discount but preserve pay amount
        this.discountPerc = 0;
        this.returnInvo.discount = 0;
        this.getTotal();
        this.updateSortedList();
        this.updateReturnFlag();
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
    addTolist() {
        // Enhanced validation before adding to list
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
            this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
            return;
        }
        // Validate item quantity using enhanced validation
        const validationResult = this.validateItemQuantity(this.selectedItem, +this.selectedItem.qty);
        if (!validationResult.valid) {
            this.presentToast(validationResult.message, 'danger');
            return;
        }
        // Validate price
        const originalItem = this.originalItems.find(item => item.item_id === this.selectedItem.id || item.item_name === this.selectedItem.item_name);
        if (originalItem && +this.selectedItem.return_price > (+originalItem.perch_price * 1.1)) {
            this.presentToast('سعر الإرجاع أكبر من السعر الأصلي بشكل غير مقبول', 'danger');
            return;
        }
        // Proceed with adding to list if all validation passes
        {
            let fl = [];
            if (this.itemList.length > 0) {
                fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name && x.return_price == this.selectedItem.return_price);
            }
            if (fl.length == 0) {
                let d = new Date;
                let r = this.datePipe.transform(d, 'dd-MM-YYYY');
                this.itemList.push({
                    "id": 'NULL',
                    "return_ref": this.selectedItem.return_ref,
                    "item_name": this.selectedItem.item_name,
                    "return_price": this.selectedItem.return_price,
                    "quantity": +this.selectedItem.qty,
                    "tot": this.selectedItem.tot,
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +this.selectedItem.id,
                    "dateCreated": r,
                    "original_price": this.selectedItem.return_price,
                    "tax": this.selectedItem.tax,
                    "imageUrl": this.selectedItem.imageUrl
                });
            }
            else {
                this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty;
                let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
                this.itemList[index].quantity = +this.selectedItem.qty;
                this.itemList[index].tot = (this.selectedItem.qty * +this.selectedItem.return_price).toFixed(2);
            }
            this.selectedItem = {
                id: undefined,
                dateCreated: "",
                return_ref: this.returnInvo.return_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                return_price: 0,
                perch_price: 0,
                qty: 0,
                tot: 0,
                availQty: 0,
                aliasEn: "",
                tax: 0,
                imageUrl: ""
            };
            this.discountPerc = 0;
            this.returnInvo.discount = 0;
            this.getTotal();
            this.updateReturnFlag();
            this.setFocusOnInput('dstPop');
        }
    }
    qtyClick(i) {
        this.showMe = i;
    }
    hideMe(i) {
        this.showMe = null;
    }
    editCell(i) {
        const displayList = this.getDisplayItemList();
        const itemToEdit = displayList[i];
        // Find the corresponding item in the original itemList
        const originalIndex = this.itemList.findIndex(item => item.item_name === itemToEdit.item_name &&
            item.return_price === itemToEdit.return_price);
        if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].return_price > 0) {
            // Update both the display list and original list
            displayList[i].tot = +displayList[i].quantity * displayList[i].return_price;
            this.itemList[originalIndex].quantity = displayList[i].quantity;
            this.itemList[originalIndex].return_price = displayList[i].return_price;
            this.itemList[originalIndex].tot = displayList[i].tot;
            // Reset discount but preserve pay amount
            this.discountPerc = 0;
            this.returnInvo.discount = 0;
            this.hideMe(i);
            this.getTotal();
        }
        else {
            this.presentToast("خطأ في الإدخال ", "danger");
        }
    }
    validate() {
        // Enhanced return-specific validation
        // 1. Original invoice validation
        if (!this.selectedOriginalInvoice || !this.returnInvo.original_pay_ref) {
            this.presentToast('الرجاء اختيار فاتورة الشراء الأصلية أولاً', 'danger');
            return false;
        }
        // 2. Items validation
        if (this.itemList.length == 0 || this.returnInvo.return_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        // 3. Return quantities validation
        const quantityValidationResult = this.validateReturnQuantities();
        if (!quantityValidationResult.valid) {
            this.presentToast(quantityValidationResult.message, 'danger');
            return false;
        }
        // 4. Supplier validation
        if (!this.returnInvo.supplier_id || !this.selectedAccount.sub_name) {
            this.presentToast('الرجاء إختيار حساب المورد', 'danger');
            return false;
        }
        // 5. Date validation
        if (this.returnInvo.return_date == "" || this.returnInvo.return_date == undefined) {
            this.presentToast('الرجاء تحديد التاريخ ', 'danger');
            return false;
        }
        // 6. Return date should not be earlier than original invoice date
        if (this.selectedOriginalInvoice && this.selectedOriginalInvoice.pay_date) {
            const returnDate = new Date(this.returnInvo.return_date);
            const originalDate = new Date(this.selectedOriginalInvoice.pay_date);
            if (returnDate < originalDate) {
                this.presentToast('تاريخ المرتجعة لا يمكن أن يكون قبل تاريخ فاتورة الشراء الأصلية', 'danger');
                return false;
            }
        }
        // 7. Business logic validation
        const businessValidationResult = this.validateBusinessLogic();
        if (!businessValidationResult.valid) {
            this.presentToast(businessValidationResult.message, 'danger');
            return false;
        }
        // 8. Financial validation
        if (this.returnInvo.changee < 0) {
            this.presentToast('الرجاء مراجعة المبلغ المستلم والخصم  ', 'danger');
            return false;
        }
        // 9. Return reason validation for partial returns
        if (!this.isReturnAllItems && (!this.returnReason || this.returnReason.trim() === '')) {
            this.presentToast('الرجاء إدخال سبب الإرجاع للمرتجعات الجزئية', 'warning');
            // Allow but warn for partial returns without reason
        }
        return true;
    }
    saveReturn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // Show loading indicator
            yield this.showLoading('جاري حفظ فاتورة مرتجعات الشراء...', 'saving');
            try {
                // Prepare return invoice and items together
                this.returnInvo.return_reason = this.returnReason;
                const returnWithItems = {
                    invoice: this.returnInvo,
                    items: this.itemList
                };
                console.log('Sending purchase return data:', returnWithItems);
                this.api.createPurchaseReturnWithItems(returnWithItems).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Purchase return saved:', response);
                    yield this.hideLoading();
                    this.handleSaveSuccess();
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Save error:', err);
                    yield this.hideLoading();
                    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in saveReturn:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء الحفظ', 'danger');
            }
        });
    }
    save() {
        let d = this.returnInvo.return_date;
        this.returnInvo.sub_name = this.selectedAccount.sub_name;
        this.returnInvo.return_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        if (this.validate() == true) {
            this.saveReturn();
        }
    }
    // Shared success handler for optimized save process
    handleSaveSuccess() {
        this.presentToast('تم الحفظ بنجاح', 'success');
        // Prepare print data with current return information
        this.printArr = [];
        this.printArr.push({
            'returnInvo': this.returnInvo,
            'itemList': this.itemList,
            'selectedAccount': this.selectedAccount,
            'sub_nameNew': this.sub_nameNew,
            "user_name": this.user_info.full_name,
            "sub_balanse": this.selectedAccount.sub_balance,
            "balanceStatus": this.selectedAccount.currentSupplierStatus
        });
        console.log('Print array prepared:', this.printArr);
        // Show print confirmation
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let msg = 'هل تريد طباعة فاتورة مرتجعات الشراء ؟ ';
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: msg,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            // Reset invoice data when user cancels print (after save)
                            this.resetPageAfterReturn();
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            this.presentModal(this.printArr, 'purchase_return').then(() => {
                                // Reset page after print modal is presented
                                this.resetPageAfterReturn();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__.PrintModalPage,
                componentProps: {
                    printArr: printArr,
                    page: page
                }
            });
            return yield modal.present();
        });
    }
    // Method to reset page to initial state after return operations
    resetPageAfterReturn() {
        console.log('Resetting page after return operation');
        this.prepareReturnInvo();
        this.status = 'new';
        // Navigate back if needed
        if (this.showBackButton) {
            setTimeout(() => {
                this.goBack();
            }, 1000); // Give time for reset to complete
        }
    }
    back() {
        this._location.back();
    }
    goBack() {
        this._location.back();
    }
    // Handle account selection from AccountSelectorComponent
    onAccountSelected(account) {
        if (account) {
            this.selectedAccount = {
                id: account.id,
                ac_id: account.ac_id,
                sub_name: account.sub_name,
                sub_type: account.sub_type,
                sub_code: account.sub_code,
                sub_balance: account.sub_balance,
                store_id: account.store_id,
                cat_name: account.cat_name,
                cat_id: account.cat_id,
                phone: account.phone,
                address: account.address,
                currentSupplierStatus: 0
            };
            // Update return invoice with selected account
            this.returnInvo.supplier_id = account.id;
            this.returnInvo.sub_name = account.sub_name;
            console.log('Supplier account selected in purchase return:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            // Update the current supplier status based on balance
            this.currentSupplierStatus = balance.status === 'debit' ? 0 : 1;
            console.log('Account balance loaded in purchase return:', balance);
        }
    }
    // Centralized loading management methods
    showLoading(message, operationType = 'saving') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // Dismiss any existing loader first
            yield this.hideLoading();
            // Set appropriate state
            this.resetLoadingStates();
            switch (operationType) {
                case 'saving':
                    this.isSaving = true;
                    break;
                case 'deleting':
                    this.isDeleting = true;
                    break;
                case 'updating':
                    this.isUpdating = true;
                    break;
            }
            this.currentLoadingMessage = message;
            // Create new loader without auto-dismiss
            this.currentLoader = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                message: message,
                translucent: true,
                backdropDismiss: false
            });
            yield this.currentLoader.present();
            this.cdr.detectChanges();
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currentLoader) {
                try {
                    yield this.currentLoader.dismiss();
                }
                catch (error) {
                    // Loader might already be dismissed, ignore error
                }
                this.currentLoader = null;
            }
            this.resetLoadingStates();
            this.currentLoadingMessage = '';
            this.cdr.detectChanges();
        });
    }
    resetLoadingStates() {
        this.isSaving = false;
        this.isDeleting = false;
        this.isUpdating = false;
    }
    // Check if any loading operation is active
    isLoading() {
        return this.isSaving || this.isDeleting || this.isUpdating;
    }
    sortItemListAlphabetically() {
        if (!this.itemList || this.itemList.length === 0) {
            return;
        }
        if (this.isItemListSorted) {
            // If already sorted, restore original order
            this.sortedItemList = [...this.itemList];
            this.isItemListSorted = false;
        }
        else {
            // Sort alphabetically by item_name
            this.sortedItemList = [...this.itemList].sort((a, b) => {
                const nameA = a.item_name ? a.item_name.toString().toLowerCase() : '';
                const nameB = b.item_name ? b.item_name.toString().toLowerCase() : '';
                return nameA.localeCompare(nameB, 'ar', { numeric: true });
            });
            this.isItemListSorted = true;
        }
    }
    getDisplayItemList() {
        return this.sortedItemList.length > 0 ? this.sortedItemList : this.itemList;
    }
    updateSortedList() {
        if (this.isItemListSorted) {
            this.sortItemListAlphabetically();
        }
        else {
            this.sortedItemList = [...this.itemList];
        }
    }
    onSearchTermChange() {
        this.searchMatches = [];
        this.highlightedIndex = -1;
        if (this.searchTerm.trim() === '') {
            return;
        }
        const displayList = this.getDisplayItemList();
        const searchTermLower = this.searchTerm.toLowerCase().trim();
        displayList.forEach((item, index) => {
            if (item.item_name && item.item_name.toLowerCase().includes(searchTermLower)) {
                this.searchMatches.push(index);
            }
        });
        if (this.searchMatches.length > 0) {
            this.highlightedIndex = 0;
            this.scrollToHighlightedItem();
        }
    }
    navigateSearch(direction) {
        if (this.searchMatches.length === 0)
            return;
        if (direction === 'next') {
            this.highlightedIndex = (this.highlightedIndex + 1) % this.searchMatches.length;
        }
        else {
            this.highlightedIndex = this.highlightedIndex <= 0 ? this.searchMatches.length - 1 : this.highlightedIndex - 1;
        }
        this.scrollToHighlightedItem();
    }
    scrollToHighlightedItem() {
        if (this.highlightedIndex >= 0 && this.searchMatches.length > 0) {
            const targetIndex = this.searchMatches[this.highlightedIndex];
            setTimeout(() => {
                const tableContainer = document.querySelector('.table-container');
                const targetRow = document.querySelector(`tr[data-index="${targetIndex}"]`);
                if (tableContainer && targetRow) {
                    targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }
    isHighlighted(index) {
        return this.searchMatches.includes(index) && this.searchMatches[this.highlightedIndex] === index;
    }
    isSearchMatch(index) {
        return this.searchMatches.includes(index);
    }
    clearSearch() {
        this.searchTerm = '';
        this.searchMatches = [];
        this.highlightedIndex = -1;
    }
    getSearchResultText() {
        if (this.searchTerm.trim() === '')
            return '';
        if (this.searchMatches.length === 0)
            return 'لا توجد نتائج';
        return `${this.highlightedIndex + 1} من ${this.searchMatches.length}`;
    }
    highlightText(text, searchTerm) {
        if (!text || !searchTerm.trim()) {
            return text || '';
        }
        const regex = new RegExp(`(${searchTerm.trim()})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    // Format balance display with number separators
    formatBalance(balance) {
        if (!balance && balance !== 0)
            return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(Math.abs(balance));
    }
    // Get current currency symbol for table headers
    getCurrencySymbol() {
        return this.currencyService.getCurrentCurrencySymbol();
    }
    // Enhanced validation methods for return business logic
    validateReturnQuantities() {
        // Check if any return quantities exceed original quantities
        for (const returnItem of this.itemList) {
            const originalItem = this.originalItems.find(item => item.item_id === returnItem.item_id || item.item_name === returnItem.item_name);
            if (!originalItem) {
                return {
                    valid: false,
                    message: `الصنف "${returnItem.item_name}" غير موجود في الفاتورة الأصلية`
                };
            }
            // Check if return quantity exceeds original quantity
            if (+returnItem.quantity > +originalItem.quantity) {
                return {
                    valid: false,
                    message: `كمية الإرجاع للصنف "${returnItem.item_name}" (${returnItem.quantity}) أكبر من الكمية الأصلية (${originalItem.quantity})`
                };
            }
            // Check for negative quantities
            if (+returnItem.quantity <= 0) {
                return {
                    valid: false,
                    message: `كمية الإرجاع للصنف "${returnItem.item_name}" يجب أن تكون أكبر من صفر`
                };
            }
            // Check if return price is reasonable (should not exceed original price significantly)
            if (+returnItem.return_price > (+originalItem.perch_price * 1.1)) {
                return {
                    valid: false,
                    message: `سعر الإرجاع للصنف "${returnItem.item_name}" أكبر من السعر الأصلي بشكل غير مقبول`
                };
            }
        }
        // Check for duplicate items in return list
        const itemNames = this.itemList.map(item => item.item_name);
        const duplicates = itemNames.filter((name, index) => itemNames.indexOf(name) !== index);
        if (duplicates.length > 0) {
            return {
                valid: false,
                message: `يوجد أصناف مكررة في قائمة الإرجاع: ${duplicates.join(', ')}`
            };
        }
        return { valid: true, message: '' };
    }
    validateBusinessLogic() {
        // Check if total return amount doesn't exceed original invoice amount
        const returnTotal = +this.returnInvo.tot_pr;
        const originalTotal = +this.selectedOriginalInvoice.tot_pr;
        if (returnTotal > originalTotal) {
            return {
                valid: false,
                message: `إجمالي المرتجعة (${returnTotal}) لا يمكن أن يتجاوز إجمالي الفاتورة الأصلية (${originalTotal})`
            };
        }
        // Validate discount logic
        if (+this.returnInvo.discount > returnTotal) {
            return {
                valid: false,
                message: 'قيمة الخصم لا يمكن أن تتجاوز إجمالي المرتجعة'
            };
        }
        // Check if return is attempted on the same day as purchase (business rule)
        if (this.selectedOriginalInvoice && this.selectedOriginalInvoice.pay_date) {
            const returnDate = new Date(this.returnInvo.return_date);
            const originalDate = new Date(this.selectedOriginalInvoice.pay_date);
            const daysDifference = Math.floor((returnDate.getTime() - originalDate.getTime()) / (1000 * 3600 * 24));
            // Allow same-day or future returns, but warn if too far in the future
            if (daysDifference > 365) {
                return {
                    valid: false,
                    message: 'لا يمكن إرجاع أصناف بعد أكثر من سنة من تاريخ الشراء'
                };
            }
        }
        // Validate supplier consistency
        if (this.selectedOriginalInvoice && this.selectedOriginalInvoice.supplier_id !== this.returnInvo.supplier_id) {
            return {
                valid: false,
                message: 'يجب أن يكون المورد المسترجع إليه هو نفس مورد الفاتورة الأصلية'
            };
        }
        return { valid: true, message: '' };
    }
    // Real-time quantity validation (called during item entry)
    validateItemQuantity(item, newQuantity) {
        const originalItem = this.originalItems.find(origItem => origItem.item_id === item.id || origItem.item_name === item.item_name);
        if (!originalItem) {
            return {
                valid: false,
                message: 'هذا الصنف غير موجود في الفاتورة الأصلية'
            };
        }
        // Check existing returns for this item
        const existingReturnQuantity = this.itemList
            .filter(returnItem => returnItem.item_name === item.item_name)
            .reduce((total, returnItem) => total + +returnItem.quantity, 0);
        const totalReturnQuantity = existingReturnQuantity + newQuantity;
        if (totalReturnQuantity > +originalItem.quantity) {
            return {
                valid: false,
                message: `إجمالي كمية الإرجاع (${totalReturnQuantity}) أكبر من الكمية الأصلية (${originalItem.quantity})`
            };
        }
        if (newQuantity <= 0) {
            return {
                valid: false,
                message: 'الكمية يجب أن تكون أكبر من صفر'
            };
        }
        return { valid: true, message: '' };
    }
    // Enhanced calculation methods with validation
    recalculateReturnTotals() {
        // Recalculate all totals with validation
        let subtotal = 0;
        this.itemList.forEach(item => {
            const itemTotal = (+item.quantity * +item.return_price);
            item.tot = itemTotal.toFixed(2);
            subtotal += itemTotal;
        });
        // Apply discount
        const discountAmount = this.calculateDiscountAmount(subtotal);
        this.returnInvo.discount = discountAmount.toFixed(2);
        // Calculate final total
        this.returnInvo.tot_pr = (subtotal - discountAmount).toFixed(2);
        // Calculate change
        this.returnInvo.changee = ((subtotal - discountAmount) - +this.returnInvo.pay).toFixed(2);
        // Update return flag
        this.updateReturnFlag();
    }
    calculateDiscountAmount(subtotal) {
        if (this.discountType === 'percentage') {
            return subtotal * (+this.discountPerc / 100);
        }
        else {
            return +this.discountAmount;
        }
    }
    // Helper methods for existing returns validation
    checkForExistingReturns(original_pay_ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api.checkExistingPurchaseReturns(original_pay_ref, this.store_info.id, this.year.id).subscribe((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            });
        });
    }
    showExistingReturnsWarning(existingReturns) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (existingReturns.hasFullReturn) {
                this.presentToast('تحذير: تم إرجاع هذه الفاتورة بالكامل من قبل!', 'warning');
            }
            else if (existingReturns.returnCount > 0) {
                this.presentToast(`تحذير: توجد ${existingReturns.returnCount} مرتجعة(ات) لهذه الفاتورة.`, 'warning');
            }
        });
    }
    getSubtotal() {
        if (!this.itemList || this.itemList.length === 0) {
            return 0;
        }
        return this.itemList.reduce((acc, item) => acc + Number(item.tot || 0), 0);
    }
    presentConfirmAlert(header, message, confirmText, cancelText) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: header,
                    message: message,
                    mode: 'ios',
                    buttons: [
                        {
                            text: cancelText,
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                resolve(false);
                            }
                        },
                        {
                            text: confirmText,
                            handler: () => {
                                resolve(true);
                            }
                        }
                    ]
                });
                yield alert.present();
            }));
        });
    }
};
PurchaseReturnPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_7__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _services_account_communication_service__WEBPACK_IMPORTED_MODULE_8__.AccountCommunicationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_9__.CurrencyService }
];
PurchaseReturnPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["dst",] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['dstPop',] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['qtyId',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popover',] }],
    popoverNotif: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popoverNotif',] }]
};
PurchaseReturnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-purchase-return',
        template: _purchase_return_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_purchase_return_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PurchaseReturnPage);



/***/ }),

/***/ 15770:
/*!**********************************************************************!*\
  !*** ./src/app/purchase-return/purchase-return.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  padding: 10px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 10px 15px;\n  background: var(--ion-color-primary);\n  border-radius: 8px;\n  color: white;\n}\n\n.section-header ion-title {\n  margin: 0;\n  padding: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.section-header ion-button {\n  --color: white;\n  --background: transparent;\n  --border-radius: 50%;\n  --padding: 8px;\n}\n\n.section {\n  margin-bottom: 20px;\n}\n\n.section-title {\n  color: var(--ion-color-primary);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n  padding: 0;\n}\n\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n@media (min-width: 768px) {\n  .form-row {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n    gap: 15px;\n    align-items: end;\n  }\n\n  .form-row ion-button {\n    grid-column: 1/-1;\n  }\n}\n\n.toggle-label {\n  margin-left: 15px;\n}\n\n.toggle-label h2 {\n  margin: 0 0 5px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n\n.toggle-label p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n\n.invoices-list {\n  margin-top: 15px;\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 8px;\n}\n\n.invoice-info h3 {\n  margin: 0 0 5px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n\n.invoice-info p {\n  margin: 2px 0;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n\n.invoice-info .invoice-total {\n  font-weight: 600;\n  color: var(--ion-color-success);\n}\n\n.list-controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.list-controls ion-item {\n  flex: 1;\n}\n\n.list-controls ion-button {\n  --padding: 8px;\n}\n\n.table-container {\n  overflow-x: auto;\n  margin-top: 15px;\n}\n\n.items-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n\n.items-table th, .items-table td {\n  padding: 12px 8px;\n  text-align: center;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.items-table th {\n  background-color: var(--ion-color-light);\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.items-table tbody tr {\n  transition: background-color 0.2s ease;\n}\n\n.items-table tbody tr:hover {\n  background-color: var(--ion-color-light);\n}\n\n.items-table tbody tr.highlighted {\n  background-color: var(--ion-color-warning-tint);\n  border: 2px solid var(--ion-color-warning);\n}\n\n.items-table tbody tr.search-match:not(.highlighted) {\n  background-color: var(--ion-color-success-tint);\n}\n\n.items-table ion-input {\n  --padding: 5px;\n  font-size: 0.85rem;\n  text-align: center;\n}\n\n.items-table ion-button {\n  --padding: 6px;\n  font-size: 0.8rem;\n}\n\n.search-navigation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-top: 15px;\n  padding: 10px;\n  background-color: var(--ion-color-light);\n  border-radius: 8px;\n}\n\n.search-navigation .search-results {\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n  font-weight: 500;\n}\n\n.search-navigation ion-button {\n  --padding: 5px;\n  --border-radius: 50%;\n}\n\n.summary-grid {\n  display: grid;\n  grid-gap: 12px;\n  gap: 12px;\n}\n\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n}\n\n.summary-row label {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n\n.summary-row span {\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n\n.summary-row span.negative {\n  color: var(--ion-color-danger);\n}\n\n.summary-row.total-row {\n  border-top: 2px solid var(--ion-color-primary);\n  border-bottom: 2px solid var(--ion-color-primary);\n  padding: 12px 0;\n}\n\n.summary-row.total-row label, .summary-row.total-row span {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.summary-row.total-row span {\n  color: var(--ion-color-success);\n}\n\n.action-buttons {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n}\n\n.action-buttons ion-button {\n  flex: 1;\n  --padding: 12px;\n  font-weight: 600;\n}\n\n@media (min-width: 768px) {\n  .action-buttons {\n    max-width: 300px;\n    margin: 20px auto 0;\n  }\n}\n\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.loading-overlay ion-spinner {\n  width: 50px;\n  height: 50px;\n  --color: var(--ion-color-primary);\n}\n\n.loading-overlay p {\n  margin-top: 15px;\n  color: white;\n  font-size: 1rem;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .container {\n    padding: 5px;\n  }\n\n  .items-table {\n    font-size: 0.8rem;\n  }\n  .items-table th, .items-table td {\n    padding: 8px 4px;\n  }\n\n  .summary-row {\n    font-size: 0.9rem;\n  }\n\n  .section-header {\n    padding: 8px 12px;\n  }\n  .section-header ion-title {\n    font-size: 1.1rem;\n  }\n}\n\n:global(mark) {\n  background-color: var(--ion-color-warning);\n  color: var(--ion-color-warning-contrast);\n  font-weight: bold;\n  padding: 1px 2px;\n  border-radius: 2px;\n}\n\nion-item.item-has-error {\n  --border-color: var(--ion-color-danger);\n  --highlight-color-focused: var(--ion-color-danger);\n}\n\nion-item.item-has-success {\n  --border-color: var(--ion-color-success);\n  --highlight-color-focused: var(--ion-color-success);\n}\n\nion-card {\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 16px;\n}\n\nion-card ion-card-header {\n  padding-bottom: 10px;\n}\n\nion-card ion-card-content {\n  padding-top: 0;\n}\n\nion-toggle {\n  --handle-width: 22px;\n  --handle-height: 22px;\n  --handle-spacing: 2px;\n  --track-width: 50px;\n  --track-height: 26px;\n}\n\nion-input.ion-focused, ion-textarea.ion-focused, ion-select.ion-focused {\n  --highlight-color: var(--ion-color-primary);\n}\n\nion-button:not(.button-disabled):hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  transition: all 0.2s ease;\n}\n\nion-popover {\n  --width: 350px;\n  --max-height: 400px;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n\n@media (prefers-color-scheme: dark) {\n  .items-table th {\n    background-color: var(--ion-color-dark);\n    color: var(--ion-color-light);\n  }\n\n  .loading-overlay {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n\n  .search-navigation {\n    background-color: var(--ion-color-dark);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLXJldHVybi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxjQUFBO0lBQUEsU0FBQTtJQUNBLGdCQUFBO0VBREY7O0VBSUE7SUFDRSxpQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxpQkFBQTtBQUZGOztBQUlFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFGSjs7QUFLRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBSEo7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBSkY7O0FBUUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBTEo7O0FBUUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQU5KOztBQVNFO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtBQVBKOztBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBUkY7O0FBVUU7RUFDRSxPQUFBO0FBUko7O0FBV0U7RUFDRSxjQUFBO0FBVEo7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVZGOztBQVlFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FBVko7O0FBYUU7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBWEo7O0FBY0U7RUFDRSxzQ0FBQTtBQVpKOztBQWNJO0VBQ0Usd0NBQUE7QUFaTjs7QUFlSTtFQUNFLCtDQUFBO0VBQ0EsMENBQUE7QUFiTjs7QUFnQkk7RUFDRSwrQ0FBQTtBQWROOztBQWtCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaEJKOztBQW1CRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQWpCSjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBbEJGOztBQW9CRTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQWxCSjs7QUFxQkU7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFuQko7O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBcEJGOztBQXVCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXBCRjs7QUFzQkU7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0FBcEJKOztBQXVCRTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7QUFyQko7O0FBdUJJO0VBQ0UsOEJBQUE7QUFyQk47O0FBeUJFO0VBQ0UsOENBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7QUF2Qko7O0FBeUJJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQXZCTjs7QUEwQkk7RUFDRSwrQkFBQTtBQXhCTjs7QUE2QkE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBMUJGOztBQTRCRTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUExQko7O0FBOEJBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBM0JGO0FBQ0Y7O0FBOEJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBNUJGOztBQThCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUE1Qko7O0FBK0JFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBN0JKOztBQWtDQTtFQUNFO0lBQ0UsWUFBQTtFQS9CRjs7RUFrQ0E7SUFDRSxpQkFBQTtFQS9CRjtFQWlDRTtJQUNFLGdCQUFBO0VBL0JKOztFQW1DQTtJQUNFLGlCQUFBO0VBaENGOztFQW1DQTtJQUNFLGlCQUFBO0VBaENGO0VBa0NFO0lBQ0UsaUJBQUE7RUFoQ0o7QUFDRjs7QUFxQ0E7RUFDRSwwQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbkNGOztBQXdDRTtFQUNFLHVDQUFBO0VBQ0Esa0RBQUE7QUFyQ0o7O0FBd0NFO0VBQ0Usd0NBQUE7RUFDQSxtREFBQTtBQXRDSjs7QUEyQ0E7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUF4Q0Y7O0FBMENFO0VBQ0Usb0JBQUE7QUF4Q0o7O0FBMkNFO0VBQ0UsY0FBQTtBQXpDSjs7QUE4Q0E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBM0NGOztBQWdERTtFQUNFLDJDQUFBO0FBN0NKOztBQWtEQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBL0NGOztBQW1EQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUFoREY7O0FBb0RBO0VBQ0U7SUFDRSx1Q0FBQTtJQUNBLDZCQUFBO0VBakRGOztFQW9EQTtJQUNFLDBDQUFBO0VBakRGOztFQW9EQTtJQUNFLHVDQUFBO0VBakRGO0FBQ0YiLCJmaWxlIjoicHVyY2hhc2UtcmV0dXJuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1wYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogMTVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1yb3cgaW9uLWJ1dHRvbiB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xyXG4gIH1cclxufVxyXG5cclxuLnRvZ2dsZS1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW52b2ljZXMtbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uaW52b2ljZS1pbmZvIHtcclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG5cclxuICAuaW52b2ljZS10b3RhbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0LWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZzogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uaXRlbXMtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcblxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuXHJcbiAgdGJvZHkgdHIge1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5oaWdobGlnaHRlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQpO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zZWFyY2gtbWF0Y2g6bm90KC5oaWdobGlnaHRlZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLXBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtbmF2aWdhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gIC5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZzogNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VtbWFyeS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnN1bW1hcnktcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgJi5uZWdhdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYudG90YWwtcm93IHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG5cclxuICAgIGxhYmVsLCBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIC0tcGFkZGluZzogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGluZy1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICBpb24tc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbXMtdGFibGUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gICAgdGgsIHRkIHtcclxuICAgICAgcGFkZGluZzogOHB4IDRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdW1tYXJ5LXJvdyB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFNlYXJjaCBoaWdobGlnaHRpbmdcclxuOmdsb2JhbChtYXJrKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMXB4IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi8vIEZvcm0gdmFsaWRhdGlvbiBzdGF0ZXNcclxuaW9uLWl0ZW0ge1xyXG4gICYuaXRlbS1oYXMtZXJyb3Ige1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgfVxyXG5cclxuICAmLml0ZW0taGFzLXN1Y2Nlc3Mge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBjYXJkIHN0eWxpbmdcclxuaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVG9nZ2xlIHN0eWxpbmdcclxuaW9uLXRvZ2dsZSB7XHJcbiAgLS1oYW5kbGUtd2lkdGg6IDIycHg7XHJcbiAgLS1oYW5kbGUtaGVpZ2h0OiAyMnB4O1xyXG4gIC0taGFuZGxlLXNwYWNpbmc6IDJweDtcclxuICAtLXRyYWNrLXdpZHRoOiA1MHB4O1xyXG4gIC0tdHJhY2staGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4vLyBJbnB1dCBmb2N1cyBzdGF0ZXNcclxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWEsIGlvbi1zZWxlY3Qge1xyXG4gICYuaW9uLWZvY3VzZWQge1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEJ1dHRvbiBob3ZlciBzdGF0ZXNcclxuaW9uLWJ1dHRvbjpub3QoLmJ1dHRvbi1kaXNhYmxlZCk6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLy8gUG9wb3ZlciBzdHlsaW5nXHJcbmlvbi1wb3BvdmVyIHtcclxuICAtLXdpZHRoOiAzNTBweDtcclxuICAtLW1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLy8gRGFyayBtb2RlIGFkanVzdG1lbnRzXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAuaXRlbXMtdGFibGUgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgfVxyXG5cclxuICAubG9hZGluZy1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtbmF2aWdhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG59Il19 */";

/***/ }),

/***/ 37286:
/*!**********************************************************************!*\
  !*** ./src/app/purchase-return/purchase-return.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-card>\r\n    <div class=\"container\">\r\n      \r\n      <!-- Header Section -->\r\n      <div class=\"section-header\">\r\n        <ion-title>فاتورة مرتجعات الشراء</ion-title>\r\n        <ion-button fill=\"clear\" (click)=\"back()\" *ngIf=\"showBackButton\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\r\n      <!-- Original Invoice Selection Section -->\r\n      <div class=\"section\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">اختيار فاتورة الشراء الأصلية</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"form-row\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">الفاتورة المختارة</ion-label>\r\n                <ion-input \r\n                  [value]=\"selectedOriginalInvoice?.pay_ref || ''\" \r\n                  readonly=\"true\"\r\n                  placeholder=\"لم يتم اختيار فاتورة بعد\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <ion-button \r\n                fill=\"outline\" \r\n                (click)=\"loadAvailablePurchaseInvoices()\"\r\n                [disabled]=\"isLoading()\">\r\n                <ion-icon name=\"search\" slot=\"start\"></ion-icon>\r\n                البحث في فواتير الشراء\r\n              </ion-button>\r\n            </div>\r\n\r\n            <!-- Available Invoices List -->\r\n            <div *ngIf=\"availablePurchaseInvoices.length > 0\" class=\"invoices-list\">\r\n              <ion-list>\r\n                <ion-radio-group [(ngModel)]=\"selectedOriginalInvoice\">\r\n                  <ion-item \r\n                    *ngFor=\"let invoice of availablePurchaseInvoices\" \r\n                    (click)=\"selectOriginalInvoice(invoice)\">\r\n                    <ion-radio slot=\"start\" [value]=\"invoice\"></ion-radio>\r\n                    <ion-label>\r\n                      <div class=\"invoice-info\">\r\n                        <h3>{{ invoice.pay_ref }}</h3>\r\n                        <p>{{ invoice.sub_name }} - {{ invoice.pay_date }}</p>\r\n                        <p class=\"invoice-total\">{{ formatBalance(invoice.tot_pr) }} {{ getCurrencySymbol() }}</p>\r\n                      </div>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Return All Items Toggle -->\r\n      <div class=\"section\" *ngIf=\"originalItems.length > 0\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-item>\r\n              <ion-toggle \r\n                [(ngModel)]=\"isReturnAllItems\" \r\n                (ionChange)=\"onReturnAllToggle()\"\r\n                color=\"primary\">\r\n              </ion-toggle>\r\n              <ion-label class=\"toggle-label\">\r\n                <h2>إرجاع جميع الأصناف</h2>\r\n                <p>تفعيل هذا الخيار سيقوم بإضافة جميع أصناف فاتورة الشراء الأصلية للإرجاع</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Account Selection Section -->\r\n      <div class=\"section\" *ngIf=\"selectedOriginalInvoice\">\r\n        <app-account-selector\r\n          [accountType]=\"'supplier'\"\r\n          (accountSelected)=\"onAccountSelected($event)\"\r\n          (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\r\n        </app-account-selector>\r\n      </div>\r\n\r\n      <!-- Item Selection Section -->\r\n      <div class=\"section\" *ngIf=\"!isReturnAllItems && originalItems.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">إضافة الأصناف للإرجاع</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <!-- Item Search -->\r\n            <div class=\"form-row\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">البحث عن الصنف</ion-label>\r\n                <ion-input \r\n                  #dstPop \r\n                  [(ngModel)]=\"searchTerm\" \r\n                  (ionInput)=\"pickDetail($event)\"\r\n                  (click)=\"presentPopover($event)\"\r\n                  placeholder=\"ابحث عن الصنف في فاتورة الشراء الأصلية\">\r\n                </ion-input>\r\n              </ion-item>\r\n              \r\n              <ion-item>\r\n                <ion-label position=\"stacked\">الكمية</ion-label>\r\n                <ion-input \r\n                  #qtyId \r\n                  type=\"number\" \r\n                  [(ngModel)]=\"selectedItem.qty\"\r\n                  (ionInput)=\"qtyhange($event)\"\r\n                  placeholder=\"أدخل الكمية المراد إرجاعها\">\r\n                </ion-input>\r\n              </ion-item>\r\n              \r\n              <ion-item>\r\n                <ion-label position=\"stacked\">السعر</ion-label>\r\n                <ion-input \r\n                  type=\"number\" \r\n                  [(ngModel)]=\"selectedItem.return_price\"\r\n                  (ionInput)=\"pricehange($event)\"\r\n                  placeholder=\"سعر الصنف\">\r\n                </ion-input>\r\n              </ion-item>\r\n              \r\n              <ion-button \r\n                expand=\"block\" \r\n                color=\"primary\"\r\n                (click)=\"addTolist()\"\r\n                [disabled]=\"!selectedItem.item_name || !selectedItem.qty\">\r\n                إضافة للقائمة\r\n              </ion-button>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Items List Section -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">أصناف الإرجاع</ion-card-title>\r\n            <div class=\"list-controls\">\r\n              <!-- Search in list -->\r\n              <ion-item>\r\n                <ion-input \r\n                  [(ngModel)]=\"searchTerm\" \r\n                  (ionInput)=\"onSearchTermChange()\"\r\n                  placeholder=\"البحث في القائمة\">\r\n                </ion-input>\r\n                <ion-button \r\n                  fill=\"clear\" \r\n                  slot=\"end\"\r\n                  (click)=\"clearSearch()\"\r\n                  *ngIf=\"searchTerm\">\r\n                  <ion-icon name=\"close\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n              \r\n              <!-- Sort button -->\r\n              <ion-button \r\n                fill=\"clear\" \r\n                (click)=\"sortItemListAlphabetically()\">\r\n                <ion-icon name=\"list\"></ion-icon>\r\n                ترتيب\r\n              </ion-button>\r\n            </div>\r\n          </ion-card-header>\r\n          \r\n          <ion-card-content>\r\n            <div class=\"table-container\">\r\n              <table class=\"items-table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>الصنف</th>\r\n                    <th>الكمية</th>\r\n                    <th>السعر ({{ getCurrencySymbol() }})</th>\r\n                    <th>المجموع ({{ getCurrencySymbol() }})</th>\r\n                    <th>عمليات</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr \r\n                    *ngFor=\"let item of getDisplayItemList(); let i = index\" \r\n                    [attr.data-index]=\"i\"\r\n                    [class.highlighted]=\"isHighlighted(i)\"\r\n                    [class.search-match]=\"isSearchMatch(i)\">\r\n                    <td>\r\n                      <div [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></div>\r\n                    </td>\r\n                    <td>\r\n                      <ion-input \r\n                        type=\"number\" \r\n                        [(ngModel)]=\"item.quantity\"\r\n                        (click)=\"qtyClick(i)\"\r\n                        (ionBlur)=\"editCell(i); hideMe(i)\"\r\n                        [readonly]=\"showMe !== i\">\r\n                      </ion-input>\r\n                    </td>\r\n                    <td>\r\n                      <ion-input \r\n                        type=\"number\" \r\n                        [(ngModel)]=\"item.return_price\"\r\n                        (click)=\"qtyClick(i)\"\r\n                        (ionBlur)=\"editCell(i); hideMe(i)\"\r\n                        [readonly]=\"showMe !== i\">\r\n                      </ion-input>\r\n                    </td>\r\n                    <td>{{ formatBalance(item.tot) }}</td>\r\n                    <td>\r\n                      <ion-button \r\n                        fill=\"clear\" \r\n                        color=\"danger\" \r\n                        (click)=\"deleteItem(i)\">\r\n                        <ion-icon name=\"trash\"></ion-icon>\r\n                      </ion-button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n            <!-- Search Navigation -->\r\n            <div class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\r\n              <div class=\"search-results\">{{ getSearchResultText() }}</div>\r\n              <ion-button fill=\"clear\" (click)=\"navigateSearch('prev')\">\r\n                <ion-icon name=\"chevron-up\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button fill=\"clear\" (click)=\"navigateSearch('next')\">\r\n                <ion-icon name=\"chevron-down\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Discount Section -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">تفاصيل الخصم والدفع</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <!-- Discount Type Selection -->\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">نوع الخصم</ion-label>\r\n              <ion-select [(ngModel)]=\"discountType\" (ionSelectionChange)=\"onDiscountTypeChange($event)\">\r\n                <ion-select-option value=\"percentage\">نسبة مئوية</ion-select-option>\r\n                <ion-select-option value=\"amount\">مبلغ ثابت</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- Percentage Discount -->\r\n            <ion-item *ngIf=\"discountType === 'percentage'\">\r\n              <ion-label position=\"stacked\">نسبة الخصم (%)</ion-label>\r\n              <ion-input \r\n                type=\"number\" \r\n                [(ngModel)]=\"discountPerc\"\r\n                (ionInput)=\"onPercentageDiscountChange($event)\"\r\n                placeholder=\"أدخل نسبة الخصم\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Amount Discount -->\r\n            <ion-item *ngIf=\"discountType === 'amount'\">\r\n              <ion-label position=\"stacked\">مبلغ الخصم ({{ getCurrencySymbol() }})</ion-label>\r\n              <ion-input \r\n                type=\"number\" \r\n                [(ngModel)]=\"discountAmount\"\r\n                (ionInput)=\"onAmountDiscountChange($event)\"\r\n                placeholder=\"أدخل مبلغ الخصم\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Payment Amount -->\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">المبلغ المدفوع ({{ getCurrencySymbol() }})</ion-label>\r\n              <ion-input \r\n                type=\"number\" \r\n                [(ngModel)]=\"returnInvo.pay\"\r\n                (ionInput)=\"payChange($event)\"\r\n                placeholder=\"أدخل المبلغ المدفوع\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Return Reason -->\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">سبب الإرجاع</ion-label>\r\n              <ion-textarea \r\n                [(ngModel)]=\"returnReason\"\r\n                rows=\"3\"\r\n                placeholder=\"أدخل سبب إرجاع الأصناف (اختياري للإرجاع الكامل)\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Summary Section -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">ملخص فاتورة الإرجاع</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"summary-grid\">\r\n              <div class=\"summary-row\">\r\n                <label>المجموع الفرعي:</label>\r\n                <span>{{ formatBalance(getSubtotal()) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row\" *ngIf=\"discountType === 'percentage' && discountPerc > 0\">\r\n                <label>الخصم ({{ discountPerc }}%):</label>\r\n                <span>{{ formatBalance(calculatedDiscountAmount) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row\" *ngIf=\"discountType === 'amount' && discountAmount > 0\">\r\n                <label>الخصم:</label>\r\n                <span>{{ formatBalance(discountAmount) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row total-row\">\r\n                <label>المجموع النهائي:</label>\r\n                <span>{{ formatBalance(returnInvo.tot_pr) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row\">\r\n                <label>المبلغ المدفوع:</label>\r\n                <span>{{ formatBalance(returnInvo.pay) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row\">\r\n                <label>الباقي:</label>\r\n                <span [class.negative]=\"returnInvo.changee < 0\">{{ formatBalance(returnInvo.changee) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Action Buttons -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <div class=\"action-buttons\">\r\n          <ion-button \r\n            expand=\"block\" \r\n            color=\"primary\"\r\n            (click)=\"save()\"\r\n            [disabled]=\"isLoading()\">\r\n            <ion-icon name=\"save\" slot=\"start\"></ion-icon>\r\n            حفظ فاتورة الإرجاع\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ion-card>\r\n\r\n  <!-- Item Selection Popover -->\r\n  <ion-popover #popover trigger=\"open-popover\" [isOpen]=\"isOpen\" (didDismiss)=\"didDissmis()\">\r\n    <ng-template>\r\n      <ion-content>\r\n        <ion-searchbar \r\n          #popInput \r\n          (ionInput)=\"searchItem($event)\" \r\n          placeholder=\"ابحث عن الصنف\">\r\n        </ion-searchbar>\r\n        <ion-list>\r\n          <ion-item \r\n            *ngFor=\"let item of searchResult\" \r\n            (click)=\"selectFromPop(item)\">\r\n            <ion-label>\r\n              <h2>{{ item.item_name }}</h2>\r\n              <p>{{ item.item_desc }}</p>\r\n              <p>الكمية المتاحة: {{ item.quantity }}</p>\r\n              <p>السعر: {{ formatBalance(item.perch_price) }} {{ getCurrencySymbol() }}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-popover>\r\n\r\n  <!-- Loading Indicator -->\r\n  <div class=\"loading-overlay\" *ngIf=\"isLoading()\">\r\n    <ion-spinner name=\"bubbles\"></ion-spinner>\r\n    <p>{{ currentLoadingMessage }}</p>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_purchase-return_purchase-return_module_ts.js.map
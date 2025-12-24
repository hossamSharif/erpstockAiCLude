"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sales-return_sales-return_module_ts"],{

/***/ 92586:
/*!*************************************************************!*\
  !*** ./src/app/sales-return/sales-return-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesReturnPageRoutingModule": () => (/* binding */ SalesReturnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _sales_return_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-return.page */ 62502);




const routes = [
    {
        path: '',
        component: _sales_return_page__WEBPACK_IMPORTED_MODULE_0__.SalesReturnPage
    }
];
let SalesReturnPageRoutingModule = class SalesReturnPageRoutingModule {
};
SalesReturnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalesReturnPageRoutingModule);



/***/ }),

/***/ 35796:
/*!*****************************************************!*\
  !*** ./src/app/sales-return/sales-return.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesReturnPageModule": () => (/* binding */ SalesReturnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _sales_return_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-return-routing.module */ 92586);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _sales_return_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-return.page */ 62502);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);









let SalesReturnPageModule = class SalesReturnPageModule {
};
SalesReturnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _sales_return_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesReturnPageRoutingModule
        ],
        declarations: [
            _sales_return_page__WEBPACK_IMPORTED_MODULE_2__.SalesReturnPage
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe
        ]
    })
], SalesReturnPageModule);



/***/ }),

/***/ 62502:
/*!***************************************************!*\
  !*** ./src/app/sales-return/sales-return.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesReturnPage": () => (/* binding */ SalesReturnPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _sales_return_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-return.page.html?ngResource */ 49683);
/* harmony import */ var _sales_return_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-return.page.scss?ngResource */ 44363);
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















let SalesReturnPage = class SalesReturnPage {
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
        this.Math = Math;
        // Return-specific properties
        this.isReturnAllItems = false;
        this.originalInvoice = null;
        this.originalItems = [];
        this.selectedOriginalInvoice = null;
        this.availableSalesInvoices = [];
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
        this.salesLocal = [];
        this.sales = [];
        this.notifArr = [];
        this.LogHistoryLocalArr = [];
        this.purchLocal = [];
        this.purchase = [];
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
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentCustumerStatus: 0 };
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
            pay_ref: "",
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
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
        // Check category visibility setting
        // Ensure discountType is properly initialized
        if (!this.discountType) {
            this.discountType = 'percentage';
            this.cdr.detectChanges();
        }
        // Initialize currency service
        this.initializeCurrency();
        // Subscribe to customer selection from account-selector
        this.customerSubscription = this.accountCommunicationService.customerSelected$.subscribe(({ id, account }) => {
            if (id && this.returnInvo) {
                console.log('Customer selected in sales return, setting cust_id:', id);
                this.returnInvo.cust_id = id;
                this.returnInvo.sub_name = account.sub_name;
                this.selectedAccount = account;
                console.log('Sales return invoice updated:', this.returnInvo);
            }
        });
        this.getAppInfo();
    }
    ngOnDestroy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // Clean up loading states
            yield this.hideLoading();
            // Clean up subscriptions
            if (this.customerSubscription) {
                this.customerSubscription.unsubscribe();
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
                    "return_price": item.pay_price,
                    "quantity": +item.quantity,
                    "tot": (item.quantity * +item.pay_price).toFixed(2),
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +item.item_id,
                    "dateCreated": r,
                    "original_price": item.pay_price,
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
    // Load available sales invoices for selection
    loadAvailableSalesInvoices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تحميل الفواتير المتاحة...', 'saving');
            try {
                this.api.getTopSales(this.store_info.id, this.year.id).subscribe(data => {
                    this.hideLoading();
                    let res = data;
                    if (res['message'] != 'No record Found') {
                        this.availableSalesInvoices = res['data'];
                    }
                    else {
                        this.availableSalesInvoices = [];
                    }
                }, (err) => {
                    this.hideLoading();
                    console.log('Error loading sales invoices:', err);
                    this.presentToast('خطأ في تحميل الفواتير', 'danger');
                });
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Error in loadAvailableSalesInvoices:', error);
            }
        });
    }
    // Select original sales invoice
    selectOriginalInvoice(invoice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري فحص الفاتورة المختارة...', 'saving');
            try {
                // Check for existing returns first
                const existingReturns = yield this.checkForExistingReturns(invoice.pay_ref);
                if (existingReturns.has_existing_returns) {
                    yield this.hideLoading();
                    yield this.showExistingReturnsWarning(existingReturns);
                    // Allow user to continue but with warning
                    const shouldContinue = yield this.presentConfirmAlert('تحذير - مرتجعات موجودة', `هذه الفاتورة لديها ${existingReturns.returns_count} مرتجعة(ات) موجودة بالفعل.\nهل تريد المتابعة لإنشاء مرتجعة جديدة؟`, 'نعم، متابعة', 'إلغاء');
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
                this.returnInvo.cust_id = invoice.cust_id;
                this.selectedAccount.id = invoice.cust_id;
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
            yield this.showLoading('جاري تحميل أصناف الفاتورة...', 'saving');
            try {
                this.api.getPayInvoDetail(this.store_info.id, pay_ref, this.year.id).subscribe(data => {
                    this.hideLoading();
                    let res = data;
                    this.originalItems = res['data'] || [];
                    console.log('Original invoice items loaded:', this.originalItems);
                }, (err) => {
                    this.hideLoading();
                    console.log('Error loading original items:', err);
                    this.presentToast('خطأ في تحميل أصناف الفاتورة', 'danger');
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
                pay_ref: this.returnInvo.return_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                pay_price: 0,
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
                this.loadAvailableSalesInvoices();
            }
        });
    }
    prepareReturnInvo() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentCustumerStatus: 0 };
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
            cust_id: null,
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
        this.returnInvo.return_ref = 'RTN' + this.store_info.store_ref + randomsNumber;
    }
    selectFromPop(item) {
        this.selectedItem = {
            id: item.item_id,
            dateCreated: item.dateCreated,
            pay_ref: this.returnInvo.return_ref,
            item_desc: item.item_desc,
            item_name: item.item_name,
            item_unit: item.item_unit,
            parcode: item.parcode,
            pay_price: item.pay_price,
            perch_price: item.perch_price || item.pay_price,
            qty: "",
            tot: item.pay_price,
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
                pay_ref: this.returnInvo.return_ref,
                item_desc: fl[0]['item_desc'],
                item_name: fl[0]['item_name'],
                item_unit: fl[0]['item_unit'],
                parcode: fl[0]['parcode'],
                pay_price: fl[0]['pay_price'],
                perch_price: fl[0]['perch_price'] || fl[0]['pay_price'],
                qty: "",
                tot: fl[0]['pay_price'],
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
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        // Enhanced validation using the new validation methods
        const validationResult = this.validateItemQuantity(this.selectedItem, +this.selectedItem.qty);
        if (!validationResult.valid) {
            this.presentToast(validationResult.message, 'warning');
            // Reset quantity to previous valid value or available quantity
            this.selectedItem.qty = Math.min(+this.selectedItem.availQty, +this.selectedItem.qty);
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
            return;
        }
        // Additional real-time validation for business rules
        if (+this.selectedItem.qty > +this.selectedItem.availQty) {
            this.presentToast('الكمية المطلوب إرجاعها أكبر من الكمية المتاحة في الفاتورة الأصلية', 'warning');
            this.selectedItem.qty = +this.selectedItem.availQty;
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        }
        // Check for existing returns of the same item
        const existingReturnItem = this.itemList.find(x => x.item_name == this.selectedItem.item_name);
        if (existingReturnItem) {
            const totalQuantity = +this.selectedItem.qty + +existingReturnItem.quantity;
            if (totalQuantity > +this.selectedItem.availQty) {
                this.presentToast(`مجموع الكمية المطلوب إرجاعها (${totalQuantity}) أكبر من الكمية المتاحة (${this.selectedItem.availQty})`, 'warning');
                const maxAllowedQty = +this.selectedItem.availQty - +existingReturnItem.quantity;
                this.selectedItem.qty = Math.max(0, maxAllowedQty);
                this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
            }
        }
    }
    pricehange(ev) {
        // Update total
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        // Validate price against original price
        const originalItem = this.originalItems.find(item => item.item_id === this.selectedItem.id || item.item_name === this.selectedItem.item_name);
        if (originalItem && +this.selectedItem.pay_price > (+originalItem.pay_price * 1.1)) {
            this.presentToast(`سعر الإرجاع (${this.selectedItem.pay_price}) أكبر من السعر الأصلي (${originalItem.pay_price}) بشكل غير مقبول`, 'warning');
            this.selectedItem.pay_price = +originalItem.pay_price;
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        }
        // Ensure price is not negative
        if (+this.selectedItem.pay_price < 0) {
            this.presentToast('السعر لا يمكن أن يكون سالباً', 'warning');
            this.selectedItem.pay_price = originalItem ? +originalItem.pay_price : 0;
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
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
        if (originalItem && +this.selectedItem.pay_price > (+originalItem.pay_price * 1.1)) {
            this.presentToast('سعر الإرجاع أكبر من السعر الأصلي بشكل غير مقبول', 'danger');
            return;
        }
        // Proceed with adding to list if all validation passes
        {
            let fl = [];
            if (this.itemList.length > 0) {
                fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name && x.return_price == this.selectedItem.pay_price);
            }
            if (fl.length == 0) {
                let d = new Date;
                let r = this.datePipe.transform(d, 'dd-MM-YYYY');
                this.itemList.push({
                    "id": 'NULL',
                    "return_ref": this.selectedItem.pay_ref,
                    "item_name": this.selectedItem.item_name,
                    "return_price": this.selectedItem.pay_price,
                    "quantity": +this.selectedItem.qty,
                    "tot": this.selectedItem.tot,
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +this.selectedItem.id,
                    "dateCreated": r,
                    "original_price": this.selectedItem.pay_price,
                    "tax": this.selectedItem.tax,
                    "imageUrl": this.selectedItem.imageUrl
                });
            }
            else {
                this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty;
                let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
                this.itemList[index].quantity = +this.selectedItem.qty;
                this.itemList[index].tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
            }
            this.selectedItem = {
                id: undefined,
                dateCreated: "",
                pay_ref: this.returnInvo.return_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                pay_price: 0,
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
            this.presentToast('الرجاء اختيار الفاتورة الأصلية أولاً', 'danger');
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
        // 4. Customer validation
        if (!this.returnInvo.cust_id || !this.selectedAccount.sub_name) {
            this.presentToast('الرجاء إختيار حساب العميل', 'danger');
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
                this.presentToast('تاريخ المرتجعة لا يمكن أن يكون قبل تاريخ الفاتورة الأصلية', 'danger');
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
            yield this.showLoading('جاري حفظ فاتورة المرتجعات...', 'saving');
            try {
                // Prepare return invoice and items together
                this.returnInvo.return_reason = this.returnReason;
                const returnWithItems = {
                    invoice: this.returnInvo,
                    items: this.itemList
                };
                console.log('Sending return data:', returnWithItems);
                this.api.createSalesReturnWithItems(returnWithItems).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Return saved:', response);
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
            "balanceStatus": this.selectedAccount.currentCustumerStatus
        });
        console.log('Print array prepared:', this.printArr);
        // Show print confirmation
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let msg = 'هل تريد طباعة فاتورة المرتجعات ؟ ';
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
                            this.presentModal(this.printArr, 'sales_return').then(() => {
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
                currentCustumerStatus: 0
            };
            // Update return invoice with selected account
            this.returnInvo.cust_id = account.id;
            this.returnInvo.sub_name = account.sub_name;
            console.log('Account selected in sales return:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            // Update the current customer status based on balance
            this.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
            console.log('Account balance loaded in sales return:', balance);
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
            if (+returnItem.return_price > (+originalItem.pay_price * 1.1)) {
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
        // Validate customer consistency
        if (this.selectedOriginalInvoice && this.selectedOriginalInvoice.cust_id !== this.returnInvo.cust_id) {
            return {
                valid: false,
                message: 'يجب أن يكون العميل المسترجع هو نفس عميل الفاتورة الأصلية'
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
                this.api.checkExistingReturns(original_pay_ref, this.store_info.id, this.year.id).subscribe((response) => {
                    if (response.success) {
                        resolve(response);
                    }
                    else {
                        reject(response.message);
                    }
                }, (error) => {
                    reject(error);
                });
            });
        });
    }
    showExistingReturnsWarning(existingReturns) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (existingReturns.has_full_return) {
                this.presentToast('تحذير: تم إرجاع هذه الفاتورة بالكامل من قبل!', 'warning');
            }
            else if (existingReturns.returns_count > 0) {
                const returnedItemsText = existingReturns.returned_items_summary.length > 0
                    ? `الأصناف المرتجعة: ${existingReturns.returned_items_summary.join(', ')}`
                    : '';
                this.presentToast(`تحذير: توجد ${existingReturns.returns_count} مرتجعة(ات) لهذه الفاتورة. ${returnedItemsText}`, 'warning');
            }
        });
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
SalesReturnPage.ctorParameters = () => [
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
SalesReturnPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["dst",] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['dstPop',] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['qtyId',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popover',] }],
    popoverNotif: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popoverNotif',] }]
};
SalesReturnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-sales-return',
        template: _sales_return_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sales_return_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalesReturnPage);



/***/ }),

/***/ 44363:
/*!****************************************************************!*\
  !*** ./src/app/sales-return/sales-return.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "/* Sales Return Page Styles - Following Sales Page Pattern */\n.container {\n  padding: 16px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n/* Header Styles */\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.section-header ion-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  text-align: center;\n}\n/* Section Styles */\n.section {\n  margin-bottom: 20px;\n}\n.section-title {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  text-align: center;\n}\n/* Form Styles */\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  grid-gap: 16px;\n  gap: 16px;\n  align-items: end;\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n}\n.form-row ion-item {\n  margin-bottom: 0;\n}\n/* Invoice Selection Styles */\n.invoices-list {\n  margin-top: 16px;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.invoices-list ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n  border: 1px solid var(--ion-color-light);\n}\n.invoices-list ion-item:hover {\n  background-color: var(--ion-color-light);\n}\n.invoice-info h3 {\n  margin: 0 0 4px 0;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.invoice-info p {\n  margin: 2px 0;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n.invoice-info .invoice-total {\n  color: var(--ion-color-success);\n  font-weight: bold;\n}\n/* Toggle Styles */\n.toggle-label {\n  margin-right: 12px;\n}\n.toggle-label h2 {\n  margin: 0 0 4px 0;\n  font-size: 1.1rem;\n  color: var(--ion-color-primary);\n}\n.toggle-label p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n/* List Controls */\n.list-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-top: 12px;\n}\n@media (max-width: 768px) {\n  .list-controls {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n}\n.list-controls ion-item {\n  flex: 1;\n  margin: 0;\n}\n/* Table Styles */\n.table-container {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid var(--ion-color-light);\n}\n.items-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.items-table th, .items-table td {\n  padding: 12px;\n  text-align: center;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.items-table th {\n  background-color: var(--ion-color-light);\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.items-table tr:hover {\n  background-color: var(--ion-color-light-shade);\n}\n.items-table tr.highlighted {\n  background-color: var(--ion-color-primary-tint) !important;\n  border: 2px solid var(--ion-color-primary);\n}\n.items-table tr.search-match {\n  background-color: var(--ion-color-warning-tint);\n}\n.items-table td ion-input {\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n/* Action Buttons */\n.action-buttons {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.action-buttons ion-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  min-width: 40px;\n}\n/* Discount Section */\n.discount-section {\n  border: 1px solid var(--ion-color-light);\n  border-radius: 8px;\n  padding: 16px;\n  margin: 16px 0;\n  background-color: var(--ion-color-light-tint);\n}\n.discount-section ion-item {\n  --background: transparent;\n  margin-bottom: 8px;\n}\n/* Totals Styles */\n.totals-card {\n  background: linear-gradient(135deg, var(--ion-color-primary-tint), var(--ion-color-light));\n  border: 2px solid var(--ion-color-primary);\n}\n.totals-grid .total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.totals-grid .total-row:last-child {\n  border-bottom: none;\n}\n.totals-grid .total-row.final-total {\n  border-top: 2px solid var(--ion-color-primary);\n  margin-top: 8px;\n  padding-top: 12px;\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n.totals-grid .total-row .label {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n.totals-grid .total-row .value {\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n.totals-grid .total-row .value.discount {\n  color: var(--ion-color-warning);\n}\n.totals-grid .total-row .value.positive {\n  color: var(--ion-color-success);\n}\n.totals-grid .total-row .value.negative {\n  color: var(--ion-color-danger);\n}\n/* Return Type Indicator */\n.return-type-indicator {\n  text-align: center;\n  margin-top: 16px;\n}\n.return-type-indicator ion-chip {\n  font-weight: bold;\n}\n/* Action Section */\n.action-section {\n  position: sticky;\n  bottom: 16px;\n  z-index: 10;\n}\n.action-section .action-buttons {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 12px;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .action-section .action-buttons {\n    grid-template-columns: 1fr;\n  }\n}\n/* Loading Overlay */\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loading-overlay ion-spinner {\n  --color: var(--ion-color-primary);\n  transform: scale(2);\n  margin-bottom: 20px;\n}\n.loading-overlay p {\n  color: white;\n  font-size: 1.1rem;\n  text-align: center;\n  margin: 0;\n}\n/* Popover Styles */\nion-popover {\n  --width: 400px;\n  --max-height: 50vh;\n}\n@media (max-width: 768px) {\n  ion-popover {\n    --width: 90vw;\n  }\n}\nion-popover ion-content {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n}\nion-popover ion-searchbar {\n  --background: var(--ion-color-light);\n  margin-bottom: 8px;\n}\nion-popover ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-popover ion-item:hover {\n  --background: var(--ion-color-light);\n}\nion-popover ion-item ion-label h2 {\n  margin: 0 0 4px 0;\n  font-weight: bold;\n}\nion-popover ion-item ion-label p {\n  margin: 2px 0;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n/* Search Highlighting */\nmark {\n  background-color: var(--ion-color-warning);\n  padding: 2px 4px;\n  border-radius: 2px;\n  font-weight: bold;\n}\n/* Card Styles */\nion-card {\n  margin: 16px 0;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\nion-card ion-card-header {\n  text-align: center;\n}\nion-card ion-card-header ion-card-title {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/* Responsive Design */\n@media (max-width: 768px) {\n  .container {\n    padding: 12px;\n  }\n\n  .section {\n    margin-bottom: 16px;\n  }\n\n  .items-table {\n    font-size: 0.9rem;\n  }\n  .items-table th, .items-table td {\n    padding: 8px 4px;\n  }\n\n  .totals-grid .total-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .totals-grid .total-row .value {\n    align-self: flex-end;\n  }\n}\n/* RTL Support */\n[dir=rtl] .form-row {\n  direction: rtl;\n}\n[dir=rtl] .totals-grid .total-row {\n  direction: rtl;\n}\n[dir=rtl] .action-buttons {\n  direction: rtl;\n}\n/* Focus States */\nion-input:focus-within,\nion-textarea:focus-within,\nion-select:focus-within {\n  --highlight-color: var(--ion-color-primary);\n}\n/* Button Styles */\nion-button {\n  --border-radius: 8px;\n}\nion-button[color=primary] {\n  font-weight: bold;\n}\nion-button[fill=outline] {\n  --border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLXJldHVybi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNERBQUE7QUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBLGtCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFJQSxtQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUFERjtBQUlBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUlBLGdCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQU5GO0lBT0ksMEJBQUE7SUFDQSxTQUFBO0VBQUY7QUFDRjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUlBLDZCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQURKO0FBR0k7RUFDRSx3Q0FBQTtBQUROO0FBT0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQVFFO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQU5KO0FBVUEsa0JBQUE7QUFDQTtFQUNFLGtCQUFBO0FBUEY7QUFTRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQVBKO0FBVUU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQVJKO0FBWUEsa0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBVEY7QUFXRTtFQVBGO0lBUUksc0JBQUE7SUFDQSxvQkFBQTtJQUNBLFFBQUE7RUFSRjtBQUNGO0FBVUU7RUFDRSxPQUFBO0VBQ0EsU0FBQTtBQVJKO0FBWUEsaUJBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQVRGO0FBWUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFURjtBQVdFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUFUSjtBQVlFO0VBQ0Usd0NBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQVZKO0FBY0k7RUFDRSw4Q0FBQTtBQVpOO0FBZUk7RUFDRSwwREFBQTtFQUNBLDBDQUFBO0FBYk47QUFnQkk7RUFDRSwrQ0FBQTtBQWROO0FBbUJJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQWpCTjtBQXNCQSxtQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQW5CRjtBQXFCRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBbkJKO0FBdUJBLHFCQUFBO0FBQ0E7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtBQXBCRjtBQXNCRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFwQko7QUF3QkEsa0JBQUE7QUFDQTtFQUNFLDBGQUFBO0VBQ0EsMENBQUE7QUFyQkY7QUF5QkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtBQXRCSjtBQXdCSTtFQUNFLG1CQUFBO0FBdEJOO0FBeUJJO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBdkJOO0FBMEJJO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtBQXhCTjtBQTJCSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUF6Qk47QUEyQk07RUFDRSwrQkFBQTtBQXpCUjtBQTRCTTtFQUNFLCtCQUFBO0FBMUJSO0FBNkJNO0VBQ0UsOEJBQUE7QUEzQlI7QUFpQ0EsMEJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUE5QkY7QUFnQ0U7RUFDRSxpQkFBQTtBQTlCSjtBQWtDQSxtQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQS9CRjtBQWlDRTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBL0JKO0FBaUNJO0VBTEY7SUFNSSwwQkFBQTtFQTlCSjtBQUNGO0FBa0NBLG9CQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUEvQkY7QUFpQ0U7RUFDRSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUEvQko7QUFrQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFoQ0o7QUFvQ0EsbUJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQWpDRjtBQW1DRTtFQUpGO0lBS0ksYUFBQTtFQWhDRjtBQUNGO0FBa0NFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQWhDSjtBQW1DRTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUFqQ0o7QUFvQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBbENKO0FBb0NJO0VBQ0Usb0NBQUE7QUFsQ047QUFzQ007RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBcENSO0FBdUNNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFyQ1I7QUEyQ0Esd0JBQUE7QUFDQTtFQUNFLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBeENGO0FBMkNBLGdCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQXhDRjtBQTBDRTtFQUNFLGtCQUFBO0FBeENKO0FBMENJO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQXhDTjtBQTZDQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSxhQUFBO0VBMUNGOztFQTZDQTtJQUNFLG1CQUFBO0VBMUNGOztFQTZDQTtJQUNFLGlCQUFBO0VBMUNGO0VBNENFO0lBQ0UsZ0JBQUE7RUExQ0o7O0VBOENBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFFBQUE7RUEzQ0Y7RUE2Q0U7SUFDRSxvQkFBQTtFQTNDSjtBQUNGO0FBK0NBLGdCQUFBO0FBRUU7RUFDRSxjQUFBO0FBOUNKO0FBaURFO0VBQ0UsY0FBQTtBQS9DSjtBQWtERTtFQUNFLGNBQUE7QUFoREo7QUFvREEsaUJBQUE7QUFDQTs7O0VBR0UsMkNBQUE7QUFqREY7QUFvREEsa0JBQUE7QUFDQTtFQUNFLG9CQUFBO0FBakRGO0FBbURFO0VBQ0UsaUJBQUE7QUFqREo7QUFvREU7RUFDRSxtQkFBQTtBQWxESiIsImZpbGUiOiJzYWxlcy1yZXR1cm4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2FsZXMgUmV0dXJuIFBhZ2UgU3R5bGVzIC0gRm9sbG93aW5nIFNhbGVzIFBhZ2UgUGF0dGVybiAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLyogSGVhZGVyIFN0eWxlcyAqL1xyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTZWN0aW9uIFN0eWxlcyAqL1xyXG4uc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBGb3JtIFN0eWxlcyAqL1xyXG4uZm9ybS1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIGF1dG87XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEludm9pY2UgU2VsZWN0aW9uIFN0eWxlcyAqL1xyXG4uaW52b2ljZXMtbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbnZvaWNlLWluZm8ge1xyXG4gIGgzIHtcclxuICAgIG1hcmdpbjogMCAwIDRweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmludm9pY2UtdG90YWwge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLyogVG9nZ2xlIFN0eWxlcyAqL1xyXG4udG9nZ2xlLWxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luOiAwIDAgNHB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMaXN0IENvbnRyb2xzICovXHJcbi5saXN0LWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUYWJsZSBTdHlsZXMgKi9cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLml0ZW1zLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgdHIge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuaGlnaGxpZ2h0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuc2VhcmNoLW1hdGNoIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHRkIHtcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBY3Rpb24gQnV0dG9ucyAqL1xyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIERpc2NvdW50IFNlY3Rpb24gKi9cclxuLmRpc2NvdW50LXNlY3Rpb24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUb3RhbHMgU3R5bGVzICovXHJcbi50b3RhbHMtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCksIHZhcigtLWlvbi1jb2xvci1saWdodCkpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRvdGFscy1ncmlkIHtcclxuICAudG90YWwtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIFxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5maW5hbC10b3RhbCB7XHJcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZhbHVlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBcclxuICAgICAgJi5kaXNjb3VudCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5wb3NpdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5uZWdhdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZXR1cm4gVHlwZSBJbmRpY2F0b3IgKi9cclxuLnJldHVybi10eXBlLWluZGljYXRvciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgXHJcbiAgaW9uLWNoaXAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBY3Rpb24gU2VjdGlvbiAqL1xyXG4uYWN0aW9uLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAxNnB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIFxyXG4gIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcclxuICAgIGdhcDogMTJweDtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTG9hZGluZyBPdmVybGF5ICovXHJcbi5sb2FkaW5nLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgXHJcbiAgaW9uLXNwaW5uZXIge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBQb3BvdmVyIFN0eWxlcyAqL1xyXG5pb24tcG9wb3ZlciB7XHJcbiAgLS13aWR0aDogNDAwcHg7XHJcbiAgLS1tYXgtaGVpZ2h0OiA1MHZoO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLS13aWR0aDogOTB2dztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogU2VhcmNoIEhpZ2hsaWdodGluZyAqL1xyXG5tYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgcGFkZGluZzogMnB4IDRweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIENhcmQgU3R5bGVzICovXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW46IDE2cHggMDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgXHJcbiAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW1zLXRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgXHJcbiAgICB0aCwgdGQge1xyXG4gICAgICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudG90YWxzLWdyaWQgLnRvdGFsLXJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIFxyXG4gICAgLnZhbHVlIHtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSVEwgU3VwcG9ydCAqL1xyXG5bZGlyPVwicnRsXCJdIHtcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3RhbHMtZ3JpZCAudG90YWwtcm93IHtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGb2N1cyBTdGF0ZXMgKi9cclxuaW9uLWlucHV0OmZvY3VzLXdpdGhpbixcclxuaW9uLXRleHRhcmVhOmZvY3VzLXdpdGhpbixcclxuaW9uLXNlbGVjdDpmb2N1cy13aXRoaW4ge1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBTdHlsZXMgKi9cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgXHJcbiAgJltjb2xvcj1cInByaW1hcnlcIl0ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gICZbZmlsbD1cIm91dGxpbmVcIl0ge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxuICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 49683:
/*!****************************************************************!*\
  !*** ./src/app/sales-return/sales-return.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-card>\r\n    <div class=\"container\">\r\n      \r\n      <!-- Header Section -->\r\n      <div class=\"section-header\">\r\n        <ion-title>فاتورة مرتجعات المبيعات</ion-title>\r\n        <ion-button fill=\"clear\" (click)=\"back()\" *ngIf=\"showBackButton\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\r\n      <!-- Original Invoice Selection Section -->\r\n      <div class=\"section\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">اختيار الفاتورة الأصلية</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"form-row\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">الفاتورة المختارة</ion-label>\r\n                <ion-input \r\n                  [value]=\"selectedOriginalInvoice?.pay_ref || ''\" \r\n                  readonly=\"true\"\r\n                  placeholder=\"لم يتم اختيار فاتورة بعد\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <ion-button \r\n                fill=\"outline\" \r\n                (click)=\"loadAvailableSalesInvoices()\"\r\n                [disabled]=\"isLoading()\">\r\n                <ion-icon name=\"search\" slot=\"start\"></ion-icon>\r\n                البحث في الفواتير\r\n              </ion-button>\r\n            </div>\r\n\r\n            <!-- Available Invoices List -->\r\n            <div *ngIf=\"availableSalesInvoices.length > 0\" class=\"invoices-list\">\r\n              <ion-list>\r\n                <ion-radio-group [(ngModel)]=\"selectedOriginalInvoice\">\r\n                  <ion-item \r\n                    *ngFor=\"let invoice of availableSalesInvoices\" \r\n                    (click)=\"selectOriginalInvoice(invoice)\">\r\n                    <ion-radio slot=\"start\" [value]=\"invoice\"></ion-radio>\r\n                    <ion-label>\r\n                      <div class=\"invoice-info\">\r\n                        <h3>{{ invoice.pay_ref }}</h3>\r\n                        <p>{{ invoice.sub_name }} - {{ invoice.pay_date }}</p>\r\n                        <p class=\"invoice-total\">{{ formatBalance(invoice.tot_pr) }} {{ getCurrencySymbol() }}</p>\r\n                      </div>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Return All Items Toggle -->\r\n      <div class=\"section\" *ngIf=\"originalItems.length > 0\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-item>\r\n              <ion-toggle \r\n                [(ngModel)]=\"isReturnAllItems\" \r\n                (ionChange)=\"onReturnAllToggle()\"\r\n                color=\"primary\">\r\n              </ion-toggle>\r\n              <ion-label class=\"toggle-label\">\r\n                <h2>إرجاع جميع الأصناف</h2>\r\n                <p>تفعيل هذا الخيار سيقوم بإضافة جميع أصناف الفاتورة الأصلية للإرجاع</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Account Selection Section -->\r\n      <div class=\"section\" *ngIf=\"selectedOriginalInvoice\">\r\n        <app-account-selector\r\n          [accountType]=\"'customer'\"\r\n          (accountSelected)=\"onAccountSelected($event)\"\r\n          (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\r\n        </app-account-selector>\r\n      </div>\r\n\r\n      <!-- Item Selection Section -->\r\n      <div class=\"section\" *ngIf=\"!isReturnAllItems && originalItems.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">إضافة الأصناف للإرجاع</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <!-- Item Search -->\r\n            <div class=\"form-row\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">البحث عن الصنف</ion-label>\r\n                <ion-input \r\n                  #dstPop \r\n                  [(ngModel)]=\"searchTerm\" \r\n                  (ionInput)=\"pickDetail($event)\"\r\n                  (click)=\"presentPopover($event)\"\r\n                  placeholder=\"ابحث عن الصنف في الفاتورة الأصلية\">\r\n                </ion-input>\r\n              </ion-item>\r\n              \r\n              <ion-item>\r\n                <ion-label position=\"stacked\">الكمية</ion-label>\r\n                <ion-input \r\n                  #qtyId \r\n                  type=\"number\" \r\n                  [(ngModel)]=\"selectedItem.qty\"\r\n                  (ionInput)=\"qtyhange($event)\"\r\n                  placeholder=\"أدخل الكمية المراد إرجاعها\">\r\n                </ion-input>\r\n              </ion-item>\r\n              \r\n              <ion-item>\r\n                <ion-label position=\"stacked\">السعر</ion-label>\r\n                <ion-input \r\n                  type=\"number\" \r\n                  [(ngModel)]=\"selectedItem.pay_price\"\r\n                  (ionInput)=\"pricehange($event)\"\r\n                  placeholder=\"سعر الصنف\">\r\n                </ion-input>\r\n              </ion-item>\r\n              \r\n              <ion-button \r\n                expand=\"block\" \r\n                color=\"primary\"\r\n                (click)=\"addTolist()\"\r\n                [disabled]=\"!selectedItem.item_name || !selectedItem.qty\">\r\n                إضافة للقائمة\r\n              </ion-button>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Items List Section -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">أصناف الإرجاع</ion-card-title>\r\n            <div class=\"list-controls\">\r\n              <!-- Search in list -->\r\n              <ion-item>\r\n                <ion-input \r\n                  [(ngModel)]=\"searchTerm\" \r\n                  (ionInput)=\"onSearchTermChange()\"\r\n                  placeholder=\"البحث في القائمة\">\r\n                </ion-input>\r\n                <ion-button \r\n                  fill=\"clear\" \r\n                  slot=\"end\"\r\n                  (click)=\"clearSearch()\"\r\n                  *ngIf=\"searchTerm\">\r\n                  <ion-icon name=\"close\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n              \r\n              <!-- Sort button -->\r\n              <ion-button \r\n                fill=\"clear\" \r\n                (click)=\"sortItemListAlphabetically()\">\r\n                <ion-icon name=\"list\"></ion-icon>\r\n                ترتيب\r\n              </ion-button>\r\n            </div>\r\n          </ion-card-header>\r\n          \r\n          <ion-card-content>\r\n            <div class=\"table-container\">\r\n              <table class=\"items-table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>الصنف</th>\r\n                    <th>الكمية</th>\r\n                    <th>السعر ({{ getCurrencySymbol() }})</th>\r\n                    <th>المجموع ({{ getCurrencySymbol() }})</th>\r\n                    <th>عمليات</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr \r\n                    *ngFor=\"let item of getDisplayItemList(); let i = index\" \r\n                    [attr.data-index]=\"i\"\r\n                    [class.highlighted]=\"isHighlighted(i)\"\r\n                    [class.search-match]=\"isSearchMatch(i)\">\r\n                    <td>\r\n                      <div [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></div>\r\n                    </td>\r\n                    <td>\r\n                      <ion-input \r\n                        type=\"number\" \r\n                        [(ngModel)]=\"item.quantity\"\r\n                        (click)=\"qtyClick(i)\"\r\n                        [readonly]=\"showMe !== i\">\r\n                      </ion-input>\r\n                    </td>\r\n                    <td>\r\n                      <ion-input \r\n                        type=\"number\" \r\n                        [(ngModel)]=\"item.return_price\"\r\n                        (click)=\"qtyClick(i)\"\r\n                        [readonly]=\"showMe !== i\">\r\n                      </ion-input>\r\n                    </td>\r\n                    <td>{{ formatBalance(item.tot) }}</td>\r\n                    <td>\r\n                      <div class=\"action-buttons\">\r\n                        <ion-button \r\n                          *ngIf=\"showMe === i\" \r\n                          fill=\"clear\" \r\n                          color=\"primary\"\r\n                          (click)=\"editCell(i)\">\r\n                          <ion-icon name=\"checkmark\"></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button \r\n                          *ngIf=\"showMe === i\" \r\n                          fill=\"clear\" \r\n                          color=\"medium\"\r\n                          (click)=\"hideMe(i)\">\r\n                          <ion-icon name=\"close\"></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button \r\n                          *ngIf=\"showMe !== i\" \r\n                          fill=\"clear\" \r\n                          color=\"danger\"\r\n                          (click)=\"deleteItem(i)\">\r\n                          <ion-icon name=\"trash\"></ion-icon>\r\n                        </ion-button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Return Details Section -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">تفاصيل الإرجاع</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <!-- Return Reason -->\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">سبب الإرجاع</ion-label>\r\n              <ion-textarea \r\n                [(ngModel)]=\"returnReason\"\r\n                rows=\"2\"\r\n                placeholder=\"أدخل سبب الإرجاع (اختياري)\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n\r\n            <!-- Discount Section -->\r\n            <div class=\"discount-section\">\r\n              <ion-item>\r\n                <ion-label>نوع الخصم</ion-label>\r\n                <ion-select \r\n                  [(ngModel)]=\"discountType\" \r\n                  (ionSelectionChange)=\"onDiscountTypeChange($event)\"\r\n                  interface=\"popover\">\r\n                  <ion-select-option value=\"percentage\">نسبة مئوية</ion-select-option>\r\n                  <ion-select-option value=\"amount\">مبلغ ثابت</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <ion-item *ngIf=\"discountType === 'percentage'\">\r\n                <ion-label position=\"stacked\">نسبة الخصم (%)</ion-label>\r\n                <ion-input \r\n                  type=\"number\" \r\n                  [(ngModel)]=\"discountPerc\"\r\n                  (ionInput)=\"onPercentageDiscountChange($event)\"\r\n                  placeholder=\"0\">\r\n                </ion-input>\r\n                <ion-note slot=\"helper\" *ngIf=\"calculatedDiscountAmount > 0\">\r\n                  مبلغ الخصم: {{ formatBalance(calculatedDiscountAmount) }} {{ getCurrencySymbol() }}\r\n                </ion-note>\r\n              </ion-item>\r\n\r\n              <ion-item *ngIf=\"discountType === 'amount'\">\r\n                <ion-label position=\"stacked\">مبلغ الخصم ({{ getCurrencySymbol() }})</ion-label>\r\n                <ion-input \r\n                  type=\"number\" \r\n                  [(ngModel)]=\"discountAmount\"\r\n                  (ionInput)=\"onAmountDiscountChange($event)\"\r\n                  placeholder=\"0\">\r\n                </ion-input>\r\n                <ion-note slot=\"helper\" *ngIf=\"calculatedDiscountPerc > 0\">\r\n                  نسبة الخصم: {{ calculatedDiscountPerc.toFixed(2) }}%\r\n                </ion-note>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <!-- Payment Section -->\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">المبلغ المستلم ({{ getCurrencySymbol() }})</ion-label>\r\n              <ion-input \r\n                type=\"number\" \r\n                [(ngModel)]=\"returnInvo.pay\"\r\n                (ionInput)=\"payChange($event)\"\r\n                placeholder=\"0\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">طريقة الدفع</ion-label>\r\n              <ion-select [(ngModel)]=\"returnInvo.return_method\" interface=\"popover\">\r\n                <ion-select-option value=\"cash\">نقدي</ion-select-option>\r\n                <ion-select-option value=\"card\">بطاقة</ion-select-option>\r\n                <ion-select-option value=\"transfer\">تحويل</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">ملاحظات</ion-label>\r\n              <ion-textarea \r\n                [(ngModel)]=\"returnInvo.returnComment\"\r\n                rows=\"2\"\r\n                placeholder=\"ملاحظات إضافية (اختياري)\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">تاريخ الإرجاع</ion-label>\r\n              <ion-input \r\n                type=\"date\" \r\n                [(ngModel)]=\"returnInvo.return_date\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Totals Section -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <ion-card class=\"totals-card\">\r\n          <ion-card-content>\r\n            <div class=\"totals-grid\">\r\n              <div class=\"total-row\">\r\n                <span class=\"label\">الإجمالي:</span>\r\n                <span class=\"value\">{{ formatBalance(returnInvo.tot_pr + returnInvo.discount) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"total-row\" *ngIf=\"returnInvo.discount > 0\">\r\n                <span class=\"label\">الخصم:</span>\r\n                <span class=\"value discount\">{{ formatBalance(returnInvo.discount) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"total-row final-total\">\r\n                <span class=\"label\">الإجمالي بعد الخصم:</span>\r\n                <span class=\"value\">{{ formatBalance(returnInvo.tot_pr) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"total-row\" *ngIf=\"returnInvo.pay > 0\">\r\n                <span class=\"label\">المبلغ المستلم:</span>\r\n                <span class=\"value\">{{ formatBalance(returnInvo.pay) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"total-row\" *ngIf=\"returnInvo.changee !== 0\">\r\n                <span class=\"label\">{{ returnInvo.changee > 0 ? 'الباقي:' : 'المطلوب:' }}</span>\r\n                <span class=\"value\" [class.positive]=\"returnInvo.changee > 0\" [class.negative]=\"returnInvo.changee < 0\">\r\n                  {{ formatBalance(Math.abs(returnInvo.changee)) }} {{ getCurrencySymbol() }}\r\n                </span>\r\n              </div>\r\n\r\n              <!-- Return Type Indicator -->\r\n              <div class=\"return-type-indicator\">\r\n                <ion-chip [color]=\"isReturnAllItems ? 'success' : 'warning'\">\r\n                  <ion-icon [name]=\"isReturnAllItems ? 'checkmark-circle' : 'partial-outline'\"></ion-icon>\r\n                  <ion-label>{{ isReturnAllItems ? 'إرجاع كامل' : 'إرجاع جزئي' }}</ion-label>\r\n                </ion-chip>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Action Buttons -->\r\n      <div class=\"section action-section\" *ngIf=\"itemList.length > 0\">\r\n        <div class=\"action-buttons\">\r\n          <ion-button \r\n            expand=\"block\" \r\n            color=\"primary\"\r\n            (click)=\"save()\"\r\n            [disabled]=\"isLoading()\">\r\n            <ion-icon name=\"save\" slot=\"start\"></ion-icon>\r\n            {{ isSaving ? 'جاري الحفظ...' : 'حفظ فاتورة الإرجاع' }}\r\n          </ion-button>\r\n          \r\n          <ion-button \r\n            expand=\"block\" \r\n            fill=\"outline\"\r\n            color=\"medium\"\r\n            (click)=\"prepareReturnInvo()\"\r\n            [disabled]=\"isLoading()\">\r\n            <ion-icon name=\"refresh\" slot=\"start\"></ion-icon>\r\n            إعادة تعيين\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ion-card>\r\n\r\n  <!-- Item Selection Popover -->\r\n  <ion-popover \r\n    #popover \r\n    [isOpen]=\"isOpen\" \r\n    (didDismiss)=\"didDissmis()\" \r\n    showBackdrop=\"true\">\r\n    <ng-template>\r\n      <ion-content>\r\n        <ion-searchbar \r\n          #popInput \r\n          [(ngModel)]=\"aliasTerm\" \r\n          (ionInput)=\"searchItem($event)\"\r\n          placeholder=\"البحث في أصناف الفاتورة الأصلية\">\r\n        </ion-searchbar>\r\n        \r\n        <ion-list>\r\n          <ion-item \r\n            *ngFor=\"let item of searchResult\" \r\n            (click)=\"selectFromPop(item)\"\r\n            button>\r\n            <ion-label>\r\n              <h2>{{ item.item_name }}</h2>\r\n              <p>السعر: {{ formatBalance(item.pay_price) }} {{ getCurrencySymbol() }}</p>\r\n              <p>الكمية المتاحة: {{ item.quantity }}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-popover>\r\n\r\n  <!-- Loading Overlay -->\r\n  <div class=\"loading-overlay\" *ngIf=\"isLoading()\">\r\n    <ion-spinner name=\"bubbles\"></ion-spinner>\r\n    <p>{{ currentLoadingMessage }}</p>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_sales-return_sales-return_module_ts.js.map
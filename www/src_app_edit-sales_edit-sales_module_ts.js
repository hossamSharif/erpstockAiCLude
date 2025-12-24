"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-sales_edit-sales_module_ts"],{

/***/ 63215:
/*!*********************************************************!*\
  !*** ./src/app/edit-sales/edit-sales-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesPageRoutingModule": () => (/* binding */ EditSalesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _edit_sales_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales.page */ 1023);




const routes = [
    {
        path: '',
        component: _edit_sales_page__WEBPACK_IMPORTED_MODULE_0__.EditSalesPage
    }
];
let EditSalesPageRoutingModule = class EditSalesPageRoutingModule {
};
EditSalesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditSalesPageRoutingModule);



/***/ }),

/***/ 22522:
/*!*************************************************!*\
  !*** ./src/app/edit-sales/edit-sales.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesPageModule": () => (/* binding */ EditSalesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _edit_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales-routing.module */ 63215);
/* harmony import */ var _edit_sales_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sales.page */ 1023);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);









let EditSalesPageModule = class EditSalesPageModule {
};
EditSalesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _edit_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditSalesPageRoutingModule
        ],
        exports: [],
        declarations: [_edit_sales_page__WEBPACK_IMPORTED_MODULE_1__.EditSalesPage]
    })
], EditSalesPageModule);



/***/ }),

/***/ 1023:
/*!***********************************************!*\
  !*** ./src/app/edit-sales/edit-sales.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesPage": () => (/* binding */ EditSalesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_sales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales.page.html?ngResource */ 61265);
/* harmony import */ var _edit_sales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sales.page.scss?ngResource */ 28371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/price-adjustment-dialog/price-adjustment-dialog.component */ 91872);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/currency.service */ 6612);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);














let EditSalesPage = class EditSalesPage {
    constructor(behavApi, _location, alertController, route, rout, storage, modalController, loadingController, datePipe, api, toast, cdr, currencyService) {
        this.behavApi = behavApi;
        this._location = _location;
        this.alertController = alertController;
        this.route = route;
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.cdr = cdr;
        this.currencyService = currencyService;
        // Add these properties at the top of your class
        this.discountType = 'percentage'; // 'percentage' or 'amount'
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.status = 'new';
        this.notifArr = [];
        this.showNotif = false;
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.isOpenNotif = false;
        this.newNotif = false;
        this.isOpen = false;
        this.sub_account = [];
        this.sub_accountLocalSales = [];
        this.items = [];
        this.itemsLocal = [];
        this.itemList = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        this.searchTerm = '';
        this.highlightedIndex = -1;
        this.searchMatches = [];
        this.salesLocal = [];
        this.salesLocalUpdate = [];
        this.salesLocalDelete = [];
        this.sub_accountSales = [];
        this.sales = [];
        this.randomsNumber = [];
        this.store_id = 1;
        this.sub_nameNew = "";
        this.discountPerc = 0;
        this.radioVal = 0;
        this.loading = false;
        this.offline = false;
        this.showMe = null;
        this.radioVal2 = 1;
        this.searchLang = 0;
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        this.finalResult = [];
        this.loadingItems = false;
        this.initialInvoices = [];
        this.currenQty = 0;
        this.firstQty = 0;
        this.perchTotQty = 0;
        this.payTotQty = 0;
        this.perchTot = 0;
        this.qtyReal = 0;
        this.availQty = 0;
        // Store original item values and index before editing to fix price/quantity edit matching issue
        this.editingItemOriginal = null;
        this.editingItemOriginalIndex = -1;
        // Loading state management
        this.isSaving = false;
        this.isDeleting = false;
        this.isUpdating = false;
        this.currentLoadingMessage = '';
        this.currentLoader = null;
        // Data initialization flag to prevent re-initialization from query parameters
        this.dataInitialized = false;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.route.queryParams.subscribe(params => {
            // Only initialize from parameters if data hasn't been loaded yet
            if (params && params.payInvo && !this.dataInitialized) {
                this.payInvo = JSON.parse(params.payInvo);
                this.selectedAccount.sub_name = JSON.parse(params.sub_name);
                this.user_info = JSON.parse(params.user_info);
                this.store_info = JSON.parse(params.store_info);
                this.itemList = JSON.parse(params.itemList);
                // Fix: Enrich itemList with store_id when coming from items-report
                // yearId will be set after year is loaded in getAppInfo()
                if (params.screen === "itemReport" && this.itemList && this.itemList.length > 0) {
                    this.itemList = this.itemList.map(item => (Object.assign(Object.assign({}, item), { store_id: item.store_id || +this.store_info.id })));
                }
                this.resortItemList();
                //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name )
                // this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
                this.initializeDiscountValues();
                this.getAppInfo();
                // Mark data as initialized to prevent re-initialization
                this.dataInitialized = true;
            }
        });
        console.log('lksjda');
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
            aliasEn: ""
        };
    }
    initializeDiscountValues() {
        // Initialize discount type based on existing discount
        if (this.payInvo.discount > 0) {
            // Calculate which type was used originally
            const percentageDiscount = (+this.payInvo.discount / +this.payInvo.tot_pr) * 100;
            // You can set a default or determine based on your business logic
            this.discountType = 'percentage'; // or 'amount' based on your preference
            if (this.discountType === 'percentage') {
                this.discountPerc = percentageDiscount.toFixed(2);
                this.calculatedDiscountAmount = +this.payInvo.discount;
            }
            else {
                this.discountAmount = +this.payInvo.discount;
                this.calculatedDiscountPerc = percentageDiscount;
            }
        }
    }
    ngOnInit() {
        // Initialize currency service
        this.initializeCurrency();
        // Check category visibility setting
    }
    ngOnDestroy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Clean up loading states
            yield this.hideLoading();
            // Clean up subscriptions
            if (this.currencySubscription) {
                this.currencySubscription.unsubscribe();
            }
            // Reset flag when component is actually destroyed (not just navigating to subpages)
            this.dataInitialized = false;
        });
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    getAllStockItemsWithouteCounts() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                //console.log('this.year.id',this.year.id)
                if (this.offline == false) {
                    this.loadingItems = true;
                    this.api.getAllStockItemsWithouteCounts(1, this.year.id).subscribe(data => {
                        //console.log(data)
                        let res = data;
                        this.items = res['data'];
                        this.loadingItems = false;
                        this.storage.set('itemsLocal', this.items).then((response) => {
                        });
                    }, (err) => {
                        this.loadingItems = false;
                        //console.log(err);
                    }, () => {
                        this.loadingItems = false;
                    });
                }
            }
        });
    }
    refresh(para) {
        if (para == 'account') {
        }
        else {
            // this.getItems()
            this.getAllStockItemsWithouteCounts();
        }
    }
    getAppInfo() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
                //console.log(this.user_info) 
            }
        });
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                // Fix: Enrich itemList with yearId if items are missing it (e.g., from items-report)
                if (this.itemList && this.itemList.length > 0) {
                    this.itemList = this.itemList.map(item => (Object.assign(Object.assign({}, item), { yearId: item.yearId || +this.year.id })));
                }
            }
        });
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                // After store info is loaded, get account balance if customer is selected
                this.loadInitialAccountBalance();
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.items = response;
            }
        });
    }
    radioChange2(ev, form) {
        //console.log(ev.target.value)  
        //console.log(this.status) 
        if (form == 'from') {
            if (ev.target.value == 1 && this.status == 'initial') {
                this.status = 'toFinal';
                this.payInvo.yearId = this.year.id;
                if (this.itemList.length > 0) {
                    this.itemList.forEach(element => {
                        element.yearId = this.year.id;
                    });
                }
                //console.log('convert invo to final',this.status)
            }
            else if (ev.target.value == 0 && this.status == 'toFinal') {
                this.status = 'initial';
                //console.log('from final to initial',this.status)
            }
        }
    }
    saveInvoInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Show loading indicator
            yield this.showLoading('جاري تحويل الفاتورة إلى مبدئية...', 'saving');
            try {
                // Optimized: Save initial invoice with items and delete final invoice in single API call
                const invoiceWithItems = {
                    invoice: this.payInvo,
                    items: this.itemList
                };
                this.api.saveSalesInvoInitWithItemsAndDeletePay(invoiceWithItems).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    this.handleSaveInitSuccess();
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.handleError(err, 'saveInvoInit', 'لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري');
                }));
            }
            catch (error) {
                yield this.handleError(error, 'saveInvoInit', 'حدث خطأ غير متوقع أثناء الحفظ');
            }
        });
    }
    handleSaveInitSuccess() {
        // Show success message
        this.presentToast('تم الحفظ بنجاح', 'success');
        // Update local sales storage - remove the invoice entry since it's now initial
        this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
        this.storage.set('sales', this.sales).then((response) => {
            // Since radioVal2 == 0 (initial mode), call performSyncDelInitialMode
            this.performSyncDelInitialMode();
        });
        // Loading already dismissed in saveInvoInit success handler
    }
    // Legacy method - should not be directly called in new flow
    // This method is used in complex multi-step processes - loading managed by parent methods
    saveitemListinit() {
        this.api.saveSalesitemListInit(this.itemList).subscribe(data => {
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.deleteSalesInvo();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            // Loading dismissal managed by parent method
        });
    }
    presentPopoverNotif(e) {
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif2.event = e;
        this.isOpenNotif = true;
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
    }
    prepareInvo() {
        this.radioVal = 0;
        this.payInvo = {
            pay_id: this.payArray[0].pay_id,
            pay_ref: this.payArray[0].pay_ref,
            store_id: this.payArray[0].store_id,
            tot_pr: this.payArray[0].tot_pr,
            pay: this.payArray[0].pay,
            pay_date: this.payArray[0].pay_date,
            pay_time: this.payArray[0].pay_time,
            user_id: this.user_info.id,
            cust_id: this.payArray[0].cust_id,
            pay_method: this.payArray[0].pay_method,
            discount: this.payArray[0].discount,
            changee: this.payArray[0].changee,
            sub_name: this.payArray[0].sub_name,
            payComment: this.payArray[0].payComment,
            nextPay: this.payArray[0].nextPay,
            yearId: this.payArray[0].yearId
        };
        this.itemList = this.payArray['details'];
        // Clear sorting and search related variables
        this.sortedItemList = [];
        this.isItemListSorted = false;
        this.searchTerm = '';
        this.searchMatches = [];
        this.highlightedIndex = -1;
        this.setFocusOnInput('dstEp');
    }
    setFocusOnInput(Input) {
        //console.log('setFocusOnInput')
        if (Input == 'dst') {
            this.dstEds.nativeElement.focus();
        }
        else if (Input == 'dstPop3') {
            this.dstPop3.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.items;
            setTimeout(() => {
                this.popInput3.setFocus();
            }, 1500);
        }
        else if (Input == 'qtyEds') {
            this.qtyEds.setFocus();
        }
        else if (Input == 'popInput3') {
            this.popInput3.setFocus();
        }
    }
    generateRandom2(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Ensure all loading is dismissed before navigation
            yield this.hideLoading();
            this.back();
        });
    }
    performSyncDel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Ensure all loading is dismissed before navigation
            yield this.hideLoading();
            this.back();
        });
    }
    performSyncDelInitialMode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Ensure all loading is dismissed before navigation
            yield this.hideLoading();
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.back();
        });
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    // Centralized loading management methods
    showLoading(message, operationType = 'saving') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    // Global error handler for consistent error management
    handleError(error, operation, defaultMessage = 'حدث خطأ غير متوقع') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.hideLoading();
            console.error(`Error in ${operation}:`, error);
            // Determine appropriate error message
            let errorMessage = defaultMessage;
            if (error === null || error === void 0 ? void 0 : error.message) {
                if (error.message.includes('timeout') || error.message.includes('TimeoutError')) {
                    errorMessage = 'انتهت مهلة الاتصال، يرجى المحاولة مرة أخرى';
                }
                else if (error.message.includes('connection') || error.message.includes('Network')) {
                    errorMessage = 'خطأ في الاتصال، يرجى التحقق من الإنترنت والمحاولة مرة أخرى';
                }
                else {
                    errorMessage = defaultMessage;
                }
            }
            this.presentToast(errorMessage, 'danger');
        });
    }
    // Legacy method - updated to use new system
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading(msg || 'جاري المعالجة...', 'saving');
        });
    }
    openPriceAdjustmentDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.itemList || this.itemList.length === 0) {
                this.presentToast('لا توجد أصناف في القائمة لتعديل أسعارها', 'warning');
                return;
            }
            // Transform itemList to the format expected by the dialog
            const itemsToPass = this.itemList.map(item => ({
                qty: item.quantity,
                id: item.item_id,
                item_name: item.item_name,
                perch_price: item.perch_price,
                pay_price: item.pay_price,
                item_unit: item.item_unit || '',
                parcode: item.parcode || 0,
                tax: item.tax || 0,
                imageUrl: item.imageUrl || ''
            }));
            const modal = yield this.modalController.create({
                component: _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_6__.PriceAdjustmentDialogComponent,
                cssClass: 'price-adjustment-modal',
                componentProps: {
                    itemsList: itemsToPass,
                    mode: 'sales'
                }
            });
            modal.onDidDismiss().then((result) => {
                if (result.data) {
                    this.handleEditModeResult(result.data);
                }
            });
            return yield modal.present();
        });
    }
    handleEditModeResult(updatedItems) {
        if (!updatedItems || updatedItems.length === 0)
            return;
        // Update the itemList with new prices
        updatedItems.forEach(updatedItem => {
            const itemIndex = this.itemList.findIndex(item => item.item_id === updatedItem.id && item.item_name === updatedItem.item_name);
            if (itemIndex !== -1) {
                // Update the pay_price and recalculate total
                this.itemList[itemIndex].pay_price = parseFloat(updatedItem.pay_price) || 0;
                this.itemList[itemIndex].tot = (this.itemList[itemIndex].quantity * this.itemList[itemIndex].pay_price).toFixed(2);
            }
        });
        // Recalculate totals
        this.recalculateTotals();
        this.presentToast('تم تعديل الأسعار بنجاح', 'success');
    }
    recalculateTotals() {
        // Use the existing getTotal() method which properly handles:
        // - Preserving existing discounts (percentage or amount)
        // - Recalculating discount amounts based on new totals
        // - Calculating change based on existing payment amount
        // - Maintaining discount type and values
        this.getTotal();
    }
    qtyClick(i) {
        //console.log(i)
        this.showMe = i;
        // Store original values AND find original index in itemList
        const displayList = this.getDisplayItemList();
        this.editingItemOriginal = Object.assign({}, displayList[i]);
        // Find the original index in itemList (not the display list)
        this.editingItemOriginalIndex = this.itemList.findIndex(item => item.item_name === this.editingItemOriginal.item_name &&
            item.pay_price === this.editingItemOriginal.pay_price &&
            item.quantity === this.editingItemOriginal.quantity);
    }
    hideMe(i) {
        this.showMe = null;
        this.editingItemOriginal = null;
        this.editingItemOriginalIndex = -1;
    }
    // Real-time calculation as user types in cell
    onCellValueChange(i) {
        if (!this.editingItemOriginal) {
            return; // No original item stored, skip update
        }
        const displayList = this.getDisplayItemList();
        // Only update the display total for visual feedback, DON'T update itemList yet
        // itemList will be updated only when user confirms (Enter or Blur) in editCell
        if (+displayList[i].quantity > 0 && +displayList[i].pay_price > 0) {
            displayList[i].tot = (+displayList[i].quantity * +displayList[i].pay_price).toFixed(2);
        }
        // No validation or error messages during typing for smooth UX
    }
    // Validation when user finishes editing (blur or enter)
    editCell(i) {
        if (!this.editingItemOriginal || this.editingItemOriginalIndex === -1) {
            // No error toast - this means edit was already completed successfully by a previous call
            return;
        }
        const displayList = this.getDisplayItemList();
        // Validate input values
        if (!displayList[i].quantity || +displayList[i].quantity <= 0 || !displayList[i].pay_price || +displayList[i].pay_price <= 0) {
            this.presentToast("خطأ في الإدخال - الكمية والسعر يجب أن يكونا أكبر من صفر", "danger");
            // Restore original values
            displayList[i].quantity = this.editingItemOriginal.quantity;
            displayList[i].pay_price = this.editingItemOriginal.pay_price;
            displayList[i].tot = this.editingItemOriginal.tot;
            this.hideMe(i);
            return;
        }
        // Use the stored original index directly (no need to search again)
        const originalIndex = this.editingItemOriginalIndex;
        // Update both the display list and original list
        displayList[i].tot = (+displayList[i].quantity * +displayList[i].pay_price).toFixed(2);
        this.itemList[originalIndex].quantity = +displayList[i].quantity;
        this.itemList[originalIndex].pay_price = +displayList[i].pay_price;
        this.itemList[originalIndex].tot = displayList[i].tot;
        // Update sorted list if needed
        if (this.isItemListSorted) {
            this.updateSortedList();
        }
        // DO NOT reset discount - getTotal() will handle it properly
        this.hideMe(i);
        this.getTotal();
    }
    selectFromPop(item) {
        //console.log(item)
        this.selectedItem = {
            id: item.id,
            dateCreated: item.dateCreated,
            pay_ref: this.payInvo.pay_ref,
            item_desc: item.item_desc,
            item_name: item.item_name,
            item_unit: item.item_unit,
            parcode: item.parcode,
            pay_price: item.pay_price,
            perch_price: item.perch_price,
            qty: "",
            tot: item.pay_price,
            availQty: item.quantity,
            aliasEn: item.aliasEn
        };
        this.searchTerm = item.item_name;
        //console.log( this.selectedItem); 
        this.didDissmis();
    }
    pickDetail(ev) {
        let fl = [];
        if (this.searchLang == 1) {
            fl = this.items.filter(x => x.item_desc == ev.target.value);
            //console.log('hyrr',fl);
        }
        else {
            fl = this.items.filter(x => x.item_name == ev.target.value);
            //console.log(fl);
        }
        //console.log(fl);
        if (fl.length > 0) {
            this.selectedItem = {
                id: fl[0]['id'],
                dateCreated: fl[0]['dateCreated'],
                pay_ref: this.payInvo.pay_ref,
                item_desc: fl[0]['item_desc'],
                item_name: fl[0]['item_name'],
                item_unit: fl[0]['item_unit'],
                parcode: fl[0]['parcode'],
                pay_price: fl[0]['pay_price'],
                perch_price: fl[0]['perch_price'],
                qty: "",
                tot: fl[0]['pay_price'],
                availQty: fl[0]['quantity'],
                aliasEn: fl[0]['aliasEn']
            };
            //console.log( this.selectedItem);
            this.setFocusOnInput('qtyEds');
        }
        else {
            this.presentToast('خطأ في اسم الصنف ', 'danger');
            this.selectedItem.item_name = "";
        }
    }
    presentPopover(e) {
        //console.log('preent me', e)
        this.popover3.event = e;
        this.isOpen = true;
        this.clear();
        this.searchResult = this.items;
        setTimeout(() => {
            this.setFocusOnInput('popInput3');
        }, 2000);
    }
    didDissmis() {
        this.isOpen = false;
        this.setFocusOnInput('qtyEds');
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe;
        let fiteredArr = filterPipe.transform(this.items, ev.target.value);
        if (fiteredArr.length > 0) {
            fiteredArr.forEach(element => {
                this.searchResult.push(element);
            });
        } //console.log('search',this.searchResult)
    }
    clear(item_name) {
        if (item_name) {
            this.selectedItem = {
                id: undefined,
                dateCreated: "",
                pay_ref: this.payInvo.pay_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                pay_price: 0,
                perch_price: 0,
                qty: 0,
                tot: 0,
                availQty: 0,
                aliasEn: ""
            };
        }
        else {
            this.searchTerm = "";
        }
    }
    qtyhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        let fl = [];
        if (this.itemList.length > 0) {
            fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name);
            if (fl.length > 0) {
                if (+this.selectedItem.qty + +fl[0].quantity > +this.selectedItem.availQty) {
                    this.presentToast('الصنف موجود بالقائمة , مجموع الكمية الجديد اكبر من المتوفر في المخزن', 'warning');
                }
            }
            else {
                if (+this.selectedItem.qty > +this.selectedItem.availQty) {
                    this.presentToast('الكمية في المخزن غير كافية', 'warning');
                }
            }
        }
        else {
            if (+this.selectedItem.qty > +this.selectedItem.availQty) {
                this.presentToast('الكمية في المخزن غير كافية', 'warning');
            }
        }
    }
    pricehange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
    }
    payChange(ev) {
        //console.log(ev); 
        this.payInvo.changee = +(this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value;
    }
    discountChange(ev) {
        //console.log('discountChange' ,ev); 
        this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100).toFixed(2);
        this.payInvo.changee = +(this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay;
    }
    discountPerChange(ev) {
        //console.log('discountPerChange',ev);
        this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
        this.payInvo.changee = +(this.payInvo.tot_pr - this.payInvo.discount) - this.payInvo.pay;
    }
    // Add these methods to your class
    onDiscountTypeChange(event) {
        this.discountType = event.detail.value;
        // Reset discount values when switching types
        this.discountPerc = 0;
        this.discountAmount = 0;
        this.payInvo.discount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.calculateChange();
    }
    onPercentageDiscountChange(event) {
        this.discountPerc = event.target.value || 0;
        if (this.payInvo.tot_pr > 0) {
            // Calculate discount amount based on percentage
            this.calculatedDiscountAmount = (+this.payInvo.tot_pr * +this.discountPerc / 100);
            this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
            this.calculateChange();
        }
    }
    onAmountDiscountChange(event) {
        this.discountAmount = event.target.value || 0;
        if (this.payInvo.tot_pr > 0 && this.discountAmount > 0) {
            // Calculate discount percentage based on amount
            this.calculatedDiscountPerc = ((+this.discountAmount / +this.payInvo.tot_pr) * 100);
            this.payInvo.discount = this.discountAmount;
            this.calculateChange();
        }
        else {
            this.calculatedDiscountPerc = 0;
            this.payInvo.discount = 0;
            this.calculateChange();
        }
    }
    calculateChange() {
        this.payInvo.changee = this.roundToTwo((+this.payInvo.tot_pr - +this.payInvo.discount) - this.payInvo.pay);
    }
    /**
     * Helper method for consistent rounding to 2 decimal places
     * Uses Math.round for precise rounding without floating-point issues
     */
    roundToTwo(num) {
        return Math.round(num * 100) / 100;
    }
    // Update your existing getTotal method
    getTotal() {
        // Calculate sum from item totals
        let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
        sum = this.roundToTwo(sum);
        // Store as numbers (not strings) for consistent type handling
        this.payInvo.tot_pr = sum;
        // Recalculate discount labels when total changes
        if (this.discountType === 'percentage' && this.discountPerc > 0) {
            this.calculatedDiscountAmount = this.roundToTwo(sum * +this.discountPerc / 100);
            this.payInvo.discount = this.calculatedDiscountAmount;
        }
        else if (this.discountType === 'amount' && this.discountAmount > 0) {
            this.calculatedDiscountPerc = this.roundToTwo((+this.discountAmount / sum) * 100);
            // Fix: Ensure discount is always a number (not string)
            this.payInvo.discount = +this.discountAmount;
        }
        // Calculate change after discount
        this.payInvo.changee = this.roundToTwo(sum - +this.payInvo.discount - this.payInvo.pay);
    }
    back() {
        this._location.back();
    }
    deleteItem(index) {
        //console.log( index);
        const displayList = this.getDisplayItemList();
        const itemToDelete = displayList[index];
        // Find the item in the original itemList and remove it
        const originalIndex = this.itemList.findIndex(item => item.item_name === itemToDelete.item_name &&
            item.pay_price === itemToDelete.pay_price &&
            item.quantity === itemToDelete.quantity);
        if (originalIndex !== -1) {
            this.itemList.splice(originalIndex, 1);
        }
        // DO NOT reset discount - getTotal() will preserve and recalculate it properly
        this.getTotal();
        this.updateSortedList();
    }
    addTolist() {
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
            this.presentToast('الرجاء ادختيار الصنف وتحديد الكمية', 'danger');
        }
        else {
            let fl = [];
            if (this.itemList) {
                fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name && x.pay_price == this.selectedItem.pay_price);
            }
            if (fl.length == 0) {
                let d = new Date;
                let r = this.datePipe.transform(d, 'dd-MM-YYYY');
                this.itemList.push({
                    "id": 'NULL',
                    "pay_ref": this.selectedItem.pay_ref,
                    "item_name": this.selectedItem.item_name,
                    "pay_price": this.selectedItem.pay_price,
                    "quantity": +this.selectedItem.qty,
                    "tot": this.selectedItem.tot,
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +this.selectedItem.id,
                    "dateCreated": r,
                    "perch_price": this.selectedItem.perch_price
                });
            }
            else {
                //console.log(this.itemList);
                //console.log(fl[0].quantity);
                //console.log(+this.selectedItem.qty);
                this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty;
                let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
                this.itemList[index].quantity = +this.selectedItem.qty;
                this.itemList[index].tot = (+this.selectedItem.qty * +this.selectedItem.pay_price).toFixed();
                this.itemList[index].tot.toFixed(2);
            }
            this.selectedItem = {
                id: undefined,
                dateCreated: "",
                pay_ref: this.payInvo.pay_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                pay_price: 0,
                perch_price: 0,
                qty: 0,
                tot: 0,
                availQty: 0,
                aliasEn: ""
            };
            // DO NOT reset discount - getTotal() will preserve and recalculate it properly
            this.getTotal();
            this.setFocusOnInput('dstPop3');
            //this.setFocusOnInput('dstEds')
        }
    }
    onItemSelected(selectedItem) {
        console.log('Item selected:', selectedItem);
        // You can perform any additional logic when an item is selected
        // For example, update availability or perform validations
    }
    onItemAdded(selectedItem) {
        console.log('Item to be added:', selectedItem);
        // Check if item already exists in the list
        let existingItem = this.itemList.find(item => item.item_name === selectedItem.item_name &&
            item.pay_price === selectedItem.pay_price);
        if (existingItem) {
            // Update existing item quantity
            let newQty = +existingItem.quantity + +selectedItem.qty;
            // Check if new quantity exceeds available stock
            if (newQty > selectedItem.availQty) {
                this.presentToast('الصنف موجود بالقائمة، مجموع الكمية الجديد أكبر من المتوفر في المخزن', 'warning');
            }
            existingItem.quantity = newQty;
            existingItem.tot = (newQty * +existingItem.pay_price).toFixed(2);
        }
        else {
            // Add new item to list
            let d = new Date();
            let r = this.datePipe.transform(d, 'dd-MM-YYYY');
            this.itemList.push({
                "id": 'NULL',
                "pay_ref": this.payInvo.pay_ref,
                "item_name": selectedItem.item_name,
                "pay_price": selectedItem.pay_price,
                "quantity": +selectedItem.qty,
                "tot": (selectedItem.qty * +selectedItem.pay_price).toFixed(2),
                "store_id": +this.store_info.id,
                "yearId": +this.year.id,
                "item_id": +selectedItem.id,
                "dateCreated": r,
                "perch_price": selectedItem.perch_price
            });
        }
        this.getTotal();
        this.updateSortedList();
        // this.presentToast('تم إضافة الصنف بنجاح', 'success');
    }
    validate() {
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        else if (this.payInvo.cust_id == 0) {
            this.presentToast('الرجاء إختيار حساب العميل', 'danger');
            return false;
        }
        else if (this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
            this.presentToast('الرجاء تحديد التاريخ ', 'danger');
            return false;
        }
        else if (this.payInvo.changee < 0) {
            this.presentToast('الرجاء مراجعة المبلغ المستلم والخصم  ', 'danger');
            return false;
        }
        else {
            return true;
        }
    }
    //edit prices for each item in itemList , by call confiramation and perform updateitem calling api 
    emadFunction(itemselect) {
        let item = { id: 0, pay_price: 0, perch_price: 0 };
        item.id = itemselect.item_id;
        item.pay_price = itemselect.pay_price;
        item.perch_price = itemselect.perch_price;
        this.priceChangeAlertConfirm(item, itemselect.item_name);
    }
    priceChangeAlertConfirm(item, item_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: 'هل تريد تعديل اسعار البيع والشراء' + ' >>>                 للصنف ' + item_name,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah'); 
                            //  this.addTolist() 
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            console.log('Confirm Okay', item);
                            this.updateItemDetail(item);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateItemDetail(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تعديل بيانات الصنف...', 'updating');
            try {
                this.api.updatePayPrice(item).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    //console.log(data)
                    yield this.hideLoading();
                    if (data['message'] != 'Post Not Updated') {
                        this.presentToast('تم التعديل بنجاح', 'success');
                    }
                    else {
                        this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                    }
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.handleError(err, 'updateItemDetail', 'لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري');
                }));
            }
            catch (error) {
                yield this.handleError(error, 'updateItemDetail', 'حدث خطأ غير متوقع أثناء التعديل');
            }
        });
    }
    //
    update() {
        console.log('update', this.payInvo);
        let d = this.payInvo.pay_date;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        if (this.radioVal2 == 0) {
            console.log('update', this.payInvo);
            if (this.validate() == true) {
                this.saveInvoInit();
            }
        }
        else if (this.radioVal2 == 1) {
            console.log('update', this.payInvo);
            if (this.validate() == true) {
                this.updateInvo();
            }
        }
    }
    updateInvo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Show loading indicator  
            yield this.showLoading('جاري تحديث الفاتورة النهائية...', 'updating');
            try {
                // Optimized: Update invoice and items together in single API call
                const invoiceWithItems = {
                    invoice: this.payInvo,
                    items: this.itemList
                };
                this.api.updateSalesInvoWithItems(invoiceWithItems).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    this.handleUpdateSuccess();
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.handleError(err, 'updateInvo', 'لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري');
                }));
            }
            catch (error) {
                yield this.handleError(error, 'updateInvo', 'حدث خطأ غير متوقع أثناء التحديث');
            }
        });
    }
    handleUpdateSuccess() {
        // Show success message
        this.presentToast('تم الحفظ بنجاح', 'success');
        // Update local sales storage
        this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
        this.sales.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('sales', this.sales).then((response) => {
            let arr = [];
            arr.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
            this.performSync();
        });
        // Loading already dismissed in updateInvo success handler
    }
    deleteSalesitemList4update() {
        this.api.deleteSalesitemList(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.saveitemList();
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                    this.hideLoading();
                });
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.hideLoading();
            });
        });
    }
    saveitemList() {
        this.api.saveSalesitemList(this.itemList).subscribe(data => {
            //console.log(data)  
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            this.sales.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
            this.storage.set('sales', this.sales).then((response) => {
                //console.log('sales', response)
                let arr = [];
                arr.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                this.performSync();
            });
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.hideLoading();
        }, () => {
            this.hideLoading();
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: 'هل تريد حذف السجل ؟ ',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            if (this.offline == false && this.payInvo.pay_id != undefined) {
                                this.deleteSalesInvo();
                            }
                            else if (this.offline == false && this.payInvo.pay_id == undefined) {
                                this.deleteSalesInvoLocal();
                            }
                            else if (this.offline == true) {
                                this.deleteSalesInvoLocal();
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete() {
        this.presentAlertConfirm();
    }
    deleteSalesInvo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Always show loading for delete operations
            yield this.showLoading('جاري حذف الفاتورة...', 'deleting');
            try {
                let arr = [];
                arr.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('delete sales'),
                    "userId": this.user_info.id,
                    "typee": 'delete sales',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                    "logStatus": 0,
                    "logToken": JSON.stringify(arr[0]),
                    "yearId": this.year.id,
                    "store_id": this.store_info.id
                });
                const deletionData = {
                    pay_id: this.payInvo.pay_id,
                    pay_ref: this.payInvo.pay_ref
                };
                this.api.deleteSalesInvoWithItems(deletionData).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    //console.log(data)
                    if (data['success']) {
                        yield this.hideLoading();
                        this.presentToast('تم الحذف بنجاح', 'success');
                        this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                        //console.log(' case ffff ' ,this.sales)
                        this.storage.set('sales', this.sales).then((response) => {
                            //console.log('sales', response) 
                            if (this.radioVal2 == 1) {
                                this.performSyncDel();
                            }
                            else {
                                this.performSyncDelInitialMode();
                            }
                        });
                    }
                    else {
                        yield this.hideLoading();
                        this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                    }
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.handleError(err, 'deleteSalesInvo', 'لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري');
                }));
            }
            catch (error) {
                yield this.handleError(error, 'deleteSalesInvo', 'حدث خطأ غير متوقع أثناء الحذف');
            }
        });
    }
    deleteSalesInvoLocal() {
        this.storage.get('salesLocalDelete').then((response) => {
            if (response) {
                this.salesLocalDelete = response;
                //console.log(this.salesLocalDelete) 
            }
        });
        //
        if (this.payInvo.pay_id == undefined) {
            this.salesLocal = this.salesLocal.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            //console.log('case undefined' , this.salesLocal)
            this.storage.set('salesLocal', this.salesLocal).then((response) => {
                //console.log('resoponse set', response) 
                this.presentToast('تم الحذف بنجاح', 'success');
                this.back();
            });
        }
        else {
            this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            //console.log('case defined',this.sales)
            this.storage.set('sales', this.sales).then((response) => {
                //console.log('sales', response) 
                this.salesLocalDelete.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                this.storage.set('salesLocalDelete', this.salesLocalDelete).then((response) => {
                    //console.log('resoponse set', response) 
                    this.presentToast('تم الحذف بنجاح', 'success');
                    this.back();
                });
            });
        }
    }
    deleteSalesitemList() {
        this.api.deleteSalesitemList(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                //console.log(' case ffff ' ,this.sales)
                this.storage.set('sales', this.sales).then((response) => {
                    //console.log('sales', response) 
                    if (this.radioVal2 == 1) {
                        this.performSyncDel();
                    }
                    else {
                        this.performSyncDelInitialMode();
                    }
                });
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.hideLoading();
        }, () => {
            this.hideLoading();
        });
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
                currentCustumerStatus: 0
            };
            // Update invoice with selected account
            this.payInvo.cust_id = account.id;
            this.payInvo.sub_name = account.sub_name;
            console.log('Account selected in edit-sales:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            // Update the current customer status based on balance
            this.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
            this.selectedAccount.currentCustumerStatus = this.currentCustumerStatus;
            this.selectedAccount.sub_balance = balance.current_balance;
            console.log('Account balance loaded in edit-sales:', balance);
        }
    }
    // Load account balance when page initializes with existing invoice data
    loadInitialAccountBalance() {
        if (this.payInvo && this.payInvo.cust_id && this.store_info && this.year) {
            // Get account balance for the customer in the invoice
            this.api.getAccountBalance(this.payInvo.cust_id, this.store_info.id, this.year.id).subscribe((response) => {
                if (response.success && response.data) {
                    // Update selected account balance
                    this.selectedAccount.sub_balance = response.data.current_balance;
                    this.selectedAccount.currentCustumerStatus = response.data.status === 'debit' ? 0 : 1;
                    this.currentCustumerStatus = this.selectedAccount.currentCustumerStatus;
                    // Populate selectedAccount with customer data
                    this.selectedAccount.id = this.payInvo.cust_id;
                    this.selectedAccount.sub_name = this.payInvo.sub_name;
                    console.log('Initial account balance loaded in edit-sales:', response.data);
                }
            }, (error) => {
                console.error('Error loading initial account balance:', error);
            });
        }
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
    resortItemList() {
        this.isItemListSorted = false;
        this.sortItemListAlphabetically();
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
};
EditSalesPage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_7__.CurrencyService }
];
EditSalesPage.propDecorators = {
    dstEds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ["dstEds",] }],
    qtyEds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['qtyEds',] }],
    dstPop3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['dstPop3',] }],
    popInput3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popInput3',] }],
    popover3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popover3',] }],
    popoverNotif2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popoverNotif2',] }]
};
EditSalesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-edit-sales',
        template: _edit_sales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_sales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditSalesPage);



/***/ }),

/***/ 28371:
/*!************************************************************!*\
  !*** ./src/app/edit-sales/edit-sales.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\nion-header ion-toolbar ion-title {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 40px;\n  margin: 0 5px;\n  border: none;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item .header-date-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-align: center;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button {\n  --background: rgba(255, 255, 255, 0.2);\n  --background-hover: rgba(255, 255, 255, 0.3);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0 5px;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button ion-label {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\nion-content {\n  --padding-top: 56px;\n  --padding-bottom: 120px;\n}\n.custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n.cust-card {\n  border-radius: 5px;\n}\n.show {\n  visibility: visible;\n}\n.hide {\n  visibility: hidden;\n}\n.bnone {\n  border: none;\n}\n.red {\n  color: var(--ion-color-danger);\n}\n.darko {\n  color: var(--ion-color-dark);\n}\nion-popover {\n  --offset-y: -30px ;\n}\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n.table-card-header ion-card-title {\n  margin: 0;\n}\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.compact-radio-style .discount-radio-container {\n  --min-height: 48px;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group {\n  justify-content: space-around;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option {\n  flex: 1;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background-color 0.2s ease;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option:hover {\n  background-color: var(--ion-color-light);\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option ion-label {\n  font-weight: 500;\n}\nion-segment {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  min-width: 200px;\n}\nion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-height: 28px;\n}\nion-segment ion-segment-button ion-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.rtl-input {\n  direction: rtl;\n}\n.rtl-input ion-label.float-right {\n  text-align: right !important;\n  transform-origin: right top !important;\n  right: 0 !important;\n  left: auto !important;\n}\n.rtl-input ion-label.float-right.label-floating {\n  transform: translateY(-14px) scale(0.82) !important;\n  right: 0 !important;\n}\n.rtl-input ion-input.text-right {\n  text-align: right !important;\n  --padding-start: 0;\n  --padding-end: 16px;\n}\n.rtl-input ion-input.text-right input {\n  text-align: right !important;\n  direction: ltr;\n}\n.rtl-input ion-note {\n  direction: ltr;\n}\n.custom-rtl-input .item-native {\n  flex-direction: row-reverse;\n}\n.custom-rtl-input ion-label {\n  order: 2;\n  text-align: right;\n  margin-right: 0;\n  margin-left: 16px;\n}\n.custom-rtl-input ion-input {\n  order: 1;\n  text-align: right;\n}\n.custom-rtl-input ion-input input {\n  text-align: right !important;\n}\n.custom-rtl-input ion-note {\n  order: 3;\n}\n.total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n  font-weight: 600;\n}\n.total-after-discount ion-input {\n  --color: #15803d;\n  font-size: 1.1em;\n  text-align: center;\n}\nion-modal {\n  --height: 90%;\n  --border-radius: 16px 16px 0 0;\n}\n.insufficient-stock-modal {\n  --height: 80vh;\n  --width: 90vw;\n  --max-width: 600px;\n  --border-radius: 12px;\n}\n@media (max-width: 768px) {\n  .insufficient-stock-modal {\n    --height: 95vh;\n    --width: 95vw;\n  }\n}\n.top-card-row {\n  padding: 16px;\n  align-items: flex-start;\n  gap: 16px;\n}\n.top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.top-card-row .account-column .column-label,\n.top-card-row .invoice-type-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n  font-size: 0.95rem;\n  height: 22px;\n  line-height: 30px;\n}\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n.top-card-row .invoice-type-column .invoice-type-section {\n  margin-top: 10px;\n}\n.top-card-row .invoice-type-column .invoice-type-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.category-column {\n  padding: 0 12px;\n  text-align: center;\n}\n.category-column .column-label {\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 12px;\n  font-size: 0.95rem;\n}\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .invoice-type-column:last-child,\n.top-card-row .category-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n.table-container {\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n.search-container {\n  width: 100%;\n}\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n/* ======================================\n   CATEGORY SELECTOR STYLES - From statement2\n   ====================================== */\n.category-section,\n.invoice-type-section {\n  margin-top: 0;\n}\n.category-section .field-label,\n.invoice-type-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n/* Responsive design for mobile */\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-column .column-label {\n    font-size: 13px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/* Footer styles */\nion-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-footer ion-toolbar {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-medium);\n}\nion-footer .total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n}\nion-footer .total-after-discount ion-input {\n  --color: #15803d;\n  font-weight: 600;\n}\nion-footer ion-item {\n  --background: white;\n  border-radius: 5px;\n  margin: 4px 0;\n}\nion-footer .footer-input-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  padding: 6px 0;\n}\nion-footer .footer-input-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 3px;\n  text-align: center;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .footer-input-item {\n  width: 100%;\n}\nion-footer .footer-input-item ion-input {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-header {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 20px;\n}\nion-footer .discount-type-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 0;\n  margin-inline-end: 6px;\n  white-space: nowrap;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .discount-segment-container {\n  --background: transparent;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  flex: 1;\n  max-width: 140px;\n}\nion-footer .compact-discount-segment {\n  --background: var(--ion-color-light);\n  border-radius: 14px;\n  padding: 1px;\n  width: 100%;\n  min-height: 24px;\n}\nion-footer .compact-discount-segment .compact-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  --indicator-color: transparent;\n  --border-radius: 12px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  min-height: 22px;\n  font-size: 10px;\n}\nion-footer .compact-discount-segment .compact-segment-button ion-label {\n  font-weight: 500;\n  margin: 0;\n}\nion-footer .discount-input {\n  margin-top: 3px;\n  width: 100%;\n}\nion-footer .discount-input ion-input {\n  text-align: center;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-input .discount-note {\n  font-size: 11px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-footer .discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n/* Responsive footer for mobile */\n@media (max-width: 768px) {\n  ion-footer ion-grid {\n    padding: 0;\n  }\n  ion-footer ion-col {\n    padding: 0 3px;\n  }\n  ion-footer .footer-input-container {\n    padding: 4px 0;\n  }\n  ion-footer .footer-input-label,\nion-footer .discount-type-label {\n    font-size: 9px;\n    height: 12px;\n    margin-bottom: 2px;\n  }\n  ion-footer .discount-header {\n    margin-bottom: 2px;\n    height: 22px;\n  }\n  ion-footer .footer-input-item ion-input,\nion-footer .discount-input ion-input {\n    font-size: 11px;\n    --padding-top: 5px;\n    --padding-bottom: 5px;\n  }\n  ion-footer .discount-segment-container {\n    max-width: 110px;\n  }\n  ion-footer .compact-discount-segment {\n    min-height: 20px;\n    border-radius: 12px;\n    padding: 1px;\n  }\n  ion-footer .compact-discount-segment .compact-segment-button {\n    min-height: 18px;\n    font-size: 8px;\n    --border-radius: 10px;\n    --padding-start: 3px;\n    --padding-end: 3px;\n  }\n  ion-footer ion-button {\n    --padding-start: 0;\n    --padding-end: 0;\n    font-size: 10px;\n    height: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2FsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUdNO0VBQ0Usc0NBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRFI7QUFHUTtFQUNFLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURWO0FBS007RUFDRSxzQ0FBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhSO0FBS1E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBSFY7QUFXQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFSRjtBQVdBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBUko7QUFVSTtFQUNJLGtCQUFBO0FBUFI7QUFTSTtFQUFPLG1CQUFBO0FBTFg7QUFPSTtFQUFNLGtCQUFBO0FBSFY7QUFPQTtFQUNFLFlBQUE7QUFKRjtBQU9DO0VBQ0MsOEJBQUE7QUFKRjtBQU1DO0VBQ0MsNEJBQUE7QUFIRjtBQUtBO0VBQ0Usa0JBQUE7QUFGRjtBQUlBO0VBQ0UseUJBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNLLGtCQUFBO0VBQ0gsV0FBQTtFQUNBLFlBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7QUFESjtBQUdFO0VBQVEseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsWUFBQTtBQU12RztBQUhFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQU1KO0FBSEE7RUFDRSxpREFB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Q0UsZ0JBQUE7RUFDQSxTQUFBO0FBbkdSO0FBd0dFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUF0R0o7QUF3R0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBdEdOO0FBeUdJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUF2R047QUE0R0k7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FBMUdOO0FBOEdFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQTVHSjtBQThHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUE1R047QUE4R007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBNUdSO0FBOEdRO0VBQ0UsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUNBQUE7QUE1R1Y7QUErR1E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUE3R1Y7QUFvSEEsaUNBQUE7QUFDQTtFQUVJO0lBQ0UsVUFBQTtFQWxISjtFQXFIRTtJQUNFLGNBQUE7RUFuSEo7RUFzSEU7SUFDRSxjQUFBO0VBcEhKO0VBdUhFOztJQUVFLGNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFySEo7RUF3SEU7SUFDRSxrQkFBQTtJQUNBLFlBQUE7RUF0SEo7RUEySEk7O0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUF4SE47RUE0SEU7SUFDRSxnQkFBQTtFQTFISjtFQTZIRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VBM0hKO0VBNkhJO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0VBM0hOO0VBK0hFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBN0hKO0FBQ0YiLCJmaWxlIjoiZWRpdC1zYWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk7IC8vIEhpZ2ggZW5vdWdoIHRvIHN0YXkgYWJvdmUgY29udGVudCBidXQgYmVsb3cgc3lzdGVtIG1vZGFscyAodXN1YWxseSAxMDAwKylcbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgICBpb24tdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICBcbiAgICBpb24tYnV0dG9uc1tzbG90PVwiZW5kXCJdIHtcbiAgICAgIC5oZWFkZXItZGF0ZS1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgXG4gICAgICAgIC5oZWFkZXItZGF0ZS1pbnB1dCB7XG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICBcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFkanVzdCBjb250ZW50IHBhZGRpbmcgZm9yIGZpeGVkIGhlYWRlciBhbmQgZm9vdGVyXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDU2cHg7IC8vIEFwcHJveGltYXRlIGhlaWdodCBvZiBpb24taGVhZGVyXG4gIC0tcGFkZGluZy1ib3R0b206IDEyMHB4OyAvLyBBcHByb3hpbWF0ZSBoZWlnaHQgb2YgZm9vdGVyIChhZGp1c3QgYmFzZWQgb24gYWN0dWFsIGZvb3RlciBoZWlnaHQpXG59XG5cbi5jdXN0SW5wdXR7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuY3VzdC1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5zaG93eyB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG5cbiAgICAuaGlkZXt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICAgIC5jdXN0Um93e1xuICAgICAgLy8gIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cbi5ibm9uZXtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4gLnJlZHtcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlcikgXG4gfVxuIC5kYXJrb3tcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKVxuIH1cbmlvbi1wb3BvdmVye1xuICAtLW9mZnNldC15IDogLTMwcHhcbn1cbi5jdXN0SW5we1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMC41cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIFxuICAudGFibGV7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTJweDtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgfVxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XG4gIFxuICAvLyBSaWdodCBhbGlnbiBpdGVtIG5hbWUgY29sdW1uXG4gIHRkOm50aC1jaGlsZCgyKSwgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9XG5cbi50YWJsZS1jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgaW9uLXJvdyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWNvbFtzaXplPVwiYXV0b1wiXSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIFxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAtLWNvbG9yLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuICAgICAgIFxuICAuZGlzY291bnQtc2VjdGlvbiB7XG4gIGlvbi1ub3RlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbi5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIFxuICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgLnJhZGlvLW9wdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgXG4gICAgICBpb24tcmFkaW8ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFsdGVybmF0aXZlIGNvbXBhY3QgdmVyc2lvbiAoaWYgeW91IHByZWZlciBldmVuIG1vcmUgY29tcGFjdClcbi5jb21wYWN0LXJhZGlvLXN0eWxlIHtcbiAgLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XG4gICAgLS1taW4taGVpZ2h0OiA0OHB4O1xuICAgIFxuICAgIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBcbiAgICAgIC5yYWRpby1vcHRpb24ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5pb24tc2VnbWVudCB7IFxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgbWluLXdpZHRoOiAyMDBweDtcbiAgXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDI4cHg7XG4gICAgXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cbi5kaXNjb3VudC1zZWN0aW9uIHtcbiAgaW9uLW5vdGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgXG4gIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBcbiAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgXG4gIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBcbiAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUlRMIElucHV0IHN0eWxpbmcgZm9yIEFyYWJpYyBsYWJlbHNcbi5ydGwtaW5wdXQge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgXG4gIGlvbi1sYWJlbC5mbG9hdC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3AgIWltcG9ydGFudDtcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBcbiAgICAmLmxhYmVsLWZsb2F0aW5nIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTRweCkgc2NhbGUoMC44MikgIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICBpb24taW5wdXQudGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICBcbiAgICBpbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgICAgZGlyZWN0aW9uOiBsdHI7IC8vIEtlZXAgbnVtYmVycyBMVFIgZm9yIGJldHRlciByZWFkYWJpbGl0eVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLW5vdGUge1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICB9XG59XG5cbi8vIEFsdGVybmF0aXZlIGFwcHJvYWNoIGlmIHRoZSBhYm92ZSBkb2Vzbid0IHdvcmsgcGVyZmVjdGx5XG4uY3VzdG9tLXJ0bC1pbnB1dCB7XG4gIC5pdGVtLW5hdGl2ZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG4gIFxuICBpb24tbGFiZWwge1xuICAgIG9yZGVyOiAyO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgfVxuICBcbiAgaW9uLWlucHV0IHtcbiAgICBvcmRlcjogMTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBcbiAgICBpbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLW5vdGUge1xuICAgIG9yZGVyOiAzO1xuICB9XG59XG5cbi8vIEFkZCBzdHlsZXMgZm9yIHRoZSB0b3RhbCBhZnRlciBkaXNjb3VudCBmaWVsZCBhbmQgcHJvZ3Jlc3Mgc3RlcHBlclxuLnRvdGFsLWFmdGVyLWRpc2NvdW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjBmZGY0O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTZhMzRhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBcbiAgaW9uLWlucHV0IHtcbiAgICAtLWNvbG9yOiAjMTU4MDNkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi8vIE1vZGFsIHN0eWxpbmdcbmlvbi1tb2RhbCB7XG4gIC0taGVpZ2h0OiA5MCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbn1cblxuLy8gSW5zdWZmaWNpZW50IFN0b2NrIE1vZGFsIFN0eWxpbmdcbi5pbnN1ZmZpY2llbnQtc3RvY2stbW9kYWwge1xuICAtLWhlaWdodDogODB2aDtcbiAgLS13aWR0aDogOTB2dztcbiAgLS1tYXgtd2lkdGg6IDYwMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAtLWhlaWdodDogOTV2aDtcbiAgICAtLXdpZHRoOiA5NXZ3O1xuICB9XG59XG5cbi8vIFRvcCBDYXJkIE9yZ2FuaXphdGlvbiBTdHlsaW5nXG4udG9wLWNhcmQtcm93IHtcbiAgcGFkZGluZzogMTZweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTZweDsgLy8gUmVwbGFjZSBvZmZzZXQgd2l0aCBnYXBcbiAgXG4gIC5hY2NvdW50LWNvbHVtbixcbiAgLmludm9pY2UtdHlwZS1jb2x1bW4sXG4gIC5jYXRlZ29yeS1jb2x1bW4sXG4gIC5kYXRlLWNvbW1lbnQtY29sdW1uLFxuICAuZGF0ZS1jb2x1bW4ge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAuY29sdW1uLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7IC8vIFJlZHVjZWQgbWFyZ2luXG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBoZWlnaHQ6IDIycHg7IC8vIEZpeGVkIGhlaWdodCBmb3IgY29uc2lzdGVudCBhbGlnbm1lbnRcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLy8gQWxpZ24gYWxsIGZvcm0gY29udGVudCBhdCB0aGUgc2FtZSBsZXZlbFxuICAuYWNjb3VudC1jb2x1bW4ge1xuICAgIGFwcC1hY2NvdW50LXNlbGVjdG9yIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICB9XG4gIFxuICAuaW52b2ljZS10eXBlLWNvbHVtbiB7XG4gICAgLmludm9pY2UtdHlwZS1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBcbiAgICAgIC5jb21wYWN0LXNlZ21lbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7IC8vIEluY3JlYXNlZCBoZWlnaHQgZm9yIGJldHRlciBhbGlnbm1lbnRcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1jb2x1bW4ge1xuICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBcbiAgICAgIC5jb21wYWN0LXNlZ21lbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7IC8vIEluY3JlYXNlZCBoZWlnaHQgZm9yIGJldHRlciBhbGlnbm1lbnRcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5kYXRlLWNvbW1lbnQtY29sdW1uIHtcbiAgICAuY29tbWVudC1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgaGVpZ2h0OiA0OHB4OyAvLyBNYXRjaCBvdGhlciBpbnB1dHNcbiAgICAgIFxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5kYXRlLWNvbHVtbiB7XG4gICAgLmRhdGUtaW5wdXQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIGhlaWdodDogNDhweDsgLy8gTWF0Y2ggb3RoZXIgaW5wdXRzXG4gICAgICBcbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiAgLmNhdGVnb3J5LWNvbHVtbiB7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAuY29sdW1uLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIH1cbiAgfVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBmb3IgbW9iaWxlXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvcC1jYXJkLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAuYWNjb3VudC1jb2x1bW4sXG4gICAgLmludm9pY2UtdHlwZS1jb2x1bW4sXG4gICAgLmNhdGVnb3J5LWNvbHVtbixcbiAgICAuZGF0ZS1jb21tZW50LWNvbHVtbiB7XG4gICAgICBzaXplOiAxMjtcbiAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIFxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVGFibGUgY29udGFpbmVyIGFuZCBzZWFyY2ggc3R5bGVzXG4udGFibGUtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBcbiAgLnNlYXJjaC1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIFxuICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC5zZWFyY2gtbmF2aWdhdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgXG4gICAgICAuc2VhcmNoLXJlc3VsdHMge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgICBcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUYWJsZSByb3cgaGlnaGxpZ2h0aW5nXG50ci5zZWFyY2gtbWF0Y2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC4yKSAhaW1wb3J0YW50O1xufVxuXG50ci5zZWFyY2gtaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE5MywgNywgMC40KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG5cbi8vIEhpZ2hsaWdodCB0ZXh0XG5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENBVEVHT1JZIFNFTEVDVE9SIFNUWUxFUyAtIEZyb20gc3RhdGVtZW50MlxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmNhdGVnb3J5LXNlY3Rpb24sXG4uaW52b2ljZS10eXBlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBcbiAgLmZpZWxkLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxufVxuXG4uY29tcGFjdC1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgZmxleDogMTtcblxuICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjMpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cblxuICAgICY6aG92ZXI6bm90KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG4vKiBSZXNwb25zaXZlIGRlc2lnbiBmb3IgbW9iaWxlICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbXBhY3Qtc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY2F0ZWdvcnktY29sdW1uIHtcbiAgICAuY29sdW1uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1zZWN0aW9uIHtcbiAgICAuZmllbGQtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxufVxuXG4vKiBGb290ZXIgc3R5bGVzICovXG5pb24tZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk7IC8vIEhpZ2ggZW5vdWdoIHRvIHN0YXkgYWJvdmUgY29udGVudCBidXQgYmVsb3cgc3lzdGVtIG1vZGFsc1xuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH1cbiAgXG4gIC50b3RhbC1hZnRlci1kaXNjb3VudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjBmZGY0O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxNmEzNGE7XG4gICAgXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIC0tY29sb3I6ICMxNTgwM2Q7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogNHB4IDA7XG4gIH1cbiAgXG4gIC5mb290ZXItaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICB9XG4gIFxuICAuZm9vdGVyLWlucHV0LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmZvb3Rlci1pbnB1dC1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICBpb24taW5wdXQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDZweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDZweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5kaXNjb3VudC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5kaXNjb3VudC10eXBlLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDZweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGhlaWdodDogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kaXNjb3VudC1zZWdtZW50LWNvbnRhaW5lciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxleDogMTtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICB9XG4gIFxuICAuY29tcGFjdC1kaXNjb3VudC1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjRweDtcbiAgICBcbiAgICAuY29tcGFjdC1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAgICAgbWluLWhlaWdodDogMjJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmRpc2NvdW50LWlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDZweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDZweDtcbiAgICB9XG4gICAgXG4gICAgLmRpc2NvdW50LW5vdGUge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuICBcbiAgLmRpc2NvdW50LXNlY3Rpb24ge1xuICAgIGlvbi1ub3RlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbiAgXG4gIC5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIFxuICAgIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAyNHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBcbiAgICAgIC5yYWRpby1vcHRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIFJlc3BvbnNpdmUgZm9vdGVyIGZvciBtb2JpbGUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tZm9vdGVyIHtcbiAgICBpb24tZ3JpZCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICBcbiAgICBpb24tY29sIHtcbiAgICAgIHBhZGRpbmc6IDAgM3B4O1xuICAgIH1cbiAgICBcbiAgICAuZm9vdGVyLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICB9XG4gICAgXG4gICAgLmZvb3Rlci1pbnB1dC1sYWJlbCxcbiAgICAuZGlzY291bnQtdHlwZS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB9XG4gICAgXG4gICAgLmRpc2NvdW50LWhlYWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXItaW5wdXQtaXRlbSxcbiAgICAuZGlzY291bnQtaW5wdXQge1xuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmRpc2NvdW50LXNlZ21lbnQtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogMTEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jb21wYWN0LWRpc2NvdW50LXNlZ21lbnQge1xuICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICBcbiAgICAgIC5jb21wYWN0LXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgbWluLWhlaWdodDogMThweDtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDNweDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIH1cbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 61265:
/*!************************************************************!*\
  !*** ./src/app/edit-sales/edit-sales.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"back()\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>تعديل فاتورة مبيعات</ion-title>\r\n    <!-- Date in header -->\r\n    <ion-buttons slot=\"end\">\r\n      <app-currency-switcher></app-currency-switcher>\r\n      <ion-item class=\"header-date-item\">\r\n        <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" class=\"header-date-input\"></ion-input>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- skeleton -->\r\n \r\n    <ion-card class=\"ion-no-padding ion-no-margin\"> \r\n      <ion-grid *ngIf=\"user_info && store_info\">\r\n        <ion-row dir=\"rtl\" class=\"top-card-row\">\r\n          <!-- First Column: Account Selector -->\r\n          <ion-col size=\"4\" class=\"account-column\">\r\n            <app-account-selector\r\n              accountType=\"customer\"\r\n              placeholder=\"اختر حساب العميل\"\r\n              label=\"حساب العميل\"\r\n              [store_info]=\"store_info\"\r\n              [year]=\"year\"\r\n              [showAddButton]=\"true\"\r\n              [(ngModel)]=\"selectedAccount\"\r\n              (accountSelected)=\"onAccountSelected($event)\"\r\n              (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\r\n            </app-account-selector>\r\n          </ion-col>\r\n          \r\n          <!-- Second Column: Invoice Type -->\r\n          <ion-col size=\"3\" class=\"invoice-type-column\">\r\n            <ion-label class=\"column-label\">نوع الفاتورة</ion-label>\r\n            <div class=\"invoice-type-section\">\r\n              <ion-segment \r\n                [(ngModel)]=\"radioVal2\" \r\n                (ionChange)=\"radioChange2($event ,'from')\" \r\n                class=\"compact-segment\"\r\n                [disabled]=\"isLoading()\">\r\n                <ion-segment-button [value]=\"0\">\r\n                  <span>مبدئية</span>\r\n                </ion-segment-button>\r\n                <ion-segment-button [value]=\"1\">\r\n                  <span>نهائية</span>\r\n                </ion-segment-button>\r\n              </ion-segment>\r\n            </div>\r\n          </ion-col>\r\n          \r\n          <!-- Comment Column: Note field in same row -->\r\n          <ion-col size=\"4\" class=\"date-comment-column\">\r\n            <ion-label class=\"column-label\">ملاحظــة</ion-label>\r\n            <ion-item class=\"custInput comment-input\"> \r\n              <ion-input \r\n                placeholder=\"أكتب تعليقا\" \r\n                [(ngModel)]=\"payInvo.payComment\"\r\n                [disabled]=\"isLoading()\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  \r\n    <ion-grid  *ngIf=\"user_info && store_info\" >\r\n      <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\r\n        <ion-col size=\"11\" class=\"ion-no-padding\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-card> \r\n                <app-item-selector\r\n                    [items]=\"items\"\r\n                    [loadingItems]=\"loadingItems\"\r\n                    [searchLang]=\"searchLang\"\r\n                    [store_info]=\"store_info\"\r\n                    [year]=\"year\"\r\n                    parentPage=\"edit-sales\"\r\n                    [enablePriceUpdateConfirmation]=\"true\"\r\n                    [payRef]=\"payInvo.pay_ref\"\r\n                    [showQuantityInput]=\"true\"\r\n                    [showPriceInput]=\"true\"\r\n                    [showPerchPriceInput]=\"false\"\r\n                    placeholder=\"اختر الصنف\"\r\n                    (itemSelected)=\"onItemSelected($event)\"\r\n                    (itemAdded)=\"onItemAdded($event)\"\r\n                    (refreshItems)=\"refresh('item')\">\r\n                  </app-item-selector>\r\n                </ion-card>\r\n              </ion-col>\r\n            \r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n              <ion-card>\r\n                <ion-card-header color=\"primary\" class=\"table-card-header\">\r\n                  <ion-card-title>\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                      <ion-col size=\"3\">\r\n                        <span>قائمة الأصناف</span>\r\n                      </ion-col>\r\n                      <ion-col size=\"6\" class=\"ion-text-center\">\r\n                        <div class=\"search-container\">\r\n                          <ion-item lines=\"none\" class=\"search-item\">\r\n                            <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\r\n                            <ion-input\r\n                              [(ngModel)]=\"searchTerm\"\r\n                              (ionInput)=\"onSearchTermChange()\"\r\n                              placeholder=\"البحث في الأصناف...\"\r\n                              clearInput=\"true\"\r\n                              class=\"search-input\">\r\n                            </ion-input>\r\n                            <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\r\n                              <span class=\"search-results\">{{ getSearchResultText() }}</span>\r\n                              <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\r\n                                <ion-icon name=\"chevron-up\"></ion-icon>\r\n                              </ion-button>\r\n                              <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\r\n                                <ion-icon name=\"chevron-down\"></ion-icon>\r\n                              </ion-button>\r\n                            </div>\r\n                          </ion-item>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"3\" class=\"ion-text-end\">\r\n                        <ion-button \r\n                          fill=\"clear\" \r\n                          color=\"light\" \r\n                          size=\"small\"\r\n                          (click)=\"sortItemListAlphabetically()\"\r\n                          [disabled]=\"!itemList || itemList.length === 0\"\r\n                        >\r\n                          <ion-icon name=\"list\" slot=\"start\"></ion-icon>\r\n                          {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\r\n                        </ion-button>\r\n                        <ion-button \r\n                          fill=\"clear\" \r\n                          color=\"light\" \r\n                          size=\"small\"\r\n                          (click)=\"openPriceAdjustmentDialog()\"\r\n                          [disabled]=\"!itemList || itemList.length === 0\"\r\n                        >\r\n                          <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\r\n                          تعديل الأسعار\r\n                        </ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-card-title>\r\n                </ion-card-header>\r\n                <div class=\"table-container\">\r\n                <table class=\"table\">\r\n                  <tr>\r\n                    <th>no</th>\r\n                    <th>الصنف</th>\r\n                    <th>الكمية</th>\r\n                    <th>سعر الوحده ({{ getCurrencySymbol() }})</th>\r\n                    <th>المجموع ({{ getCurrencySymbol() }})</th> \r\n                    <th></th> \r\n                  </tr>\r\n                  <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\"  \r\n                      (dblclick)=\"qtyClick(i)\"\r\n                      [attr.data-index]=\"i\"\r\n                      [class.search-highlight]=\"isHighlighted(i)\"\r\n                      [class.search-match]=\"isSearchMatch(i)\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>\r\n                      <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\r\n                    </td>\r\n                    <td >\r\n                      <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text>\r\n                      <ion-item *ngIf=\"showMe == i\">\r\n                        <ion-input (ionInput)=\"onCellValueChange(i)\" (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\r\n                      </ion-item>\r\n                    </td>\r\n                    <td>\r\n                      <ion-text *ngIf=\"showMe != i\">{{item.pay_price | currencyDisplay:'SDG':false}}</ion-text>\r\n                      <ion-item *ngIf=\"showMe == i\">\r\n                        <ion-input (ionInput)=\"onCellValueChange(i)\" (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.pay_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\r\n                      </ion-item>\r\n                    </td>\r\n\r\n                    <td>{{item.tot | currencyDisplay:'SDG':false}}</td>\r\n                    <td>\r\n                      <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\r\n                        <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\r\n                      </ion-button>\r\n                    </td>\r\n                  </tr>\r\n                  \r\n                \r\n                </table>\r\n                </div> \r\n              </ion-card>\r\n            </ion-col>\r\n            </ion-row> \r\n          </ion-grid>\r\n        </ion-col> \r\n      </ion-row> \r\n    </ion-grid>\r\n  \r\n  \r\n  \r\n   \r\n\r\n</ion-content>\r\n<!-- Footer with totals and action buttons -->\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <!-- Discount controls on the right side -->\r\n        <ion-col size=\"8\" class=\"ion-text-end\">\r\n          <ion-grid class=\"ion-no-padding\">\r\n            <ion-row class=\"ion-justify-content-end\">\r\n              <ion-col   class=\"footer-input-container\">\r\n                <ion-label class=\"footer-input-label\">إجمالي المبلغ</ion-label>\r\n                <ion-item class=\"custInput footer-input-item\">\r\n                  <ion-input [value]=\"payInvo.tot_pr | currencyDisplay\" [readonly]=\"true\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col   class=\"footer-input-container\">\r\n                <div class=\"discount-header\"> \r\n                  <div dir=\"rtl\" class=\"discount-segment-container\"> \r\n                    <ion-segment \r\n                      [(ngModel)]=\"discountType\" \r\n                      (ionChange)=\"onDiscountTypeChange($event)\" \r\n                      class=\"compact-discount-segment\"\r\n                      [disabled]=\"isLoading()\">\r\n                      <ion-segment-button value=\"percentage\" class=\"compact-segment-button\">\r\n                        <ion-label>نسبة الخصم%</ion-label>\r\n                      </ion-segment-button>\r\n                      <ion-segment-button value=\"amount\" class=\"compact-segment-button\">\r\n                        <ion-label>مبلغ الخصم</ion-label>\r\n                      </ion-segment-button>\r\n                    </ion-segment>\r\n                  </div>\r\n                </div>\r\n                <!-- Percentage Discount Input -->\r\n                <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input custInput discount-input\">\r\n                  <ion-input \r\n                    type=\"number\" \r\n                    [(ngModel)]=\"discountPerc\" \r\n                    (ionInput)=\"onPercentageDiscountChange($event)\"\r\n                    placeholder=\"نسبة الخصم %\"\r\n                    [disabled]=\"isLoading()\">\r\n                  </ion-input>\r\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\" class=\"discount-note\">\r\n                    {{ formatBalance(calculatedDiscountAmount) }} \r\n                  </ion-note>\r\n                </ion-item>\r\n\r\n                <!-- Amount Discount Input -->\r\n                <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input custInput discount-input\">\r\n                  <ion-input \r\n                    type=\"number\" \r\n                    [(ngModel)]=\"discountAmount\" \r\n                    (ionInput)=\"onAmountDiscountChange($event)\"\r\n                     placeholder=\"مبلغ الخصم\"\r\n                     [disabled]=\"isLoading()\">\r\n                  </ion-input>\r\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\" class=\"discount-note\">\r\n                    {{ calculatedDiscountPerc.toFixed(2) }}%\r\n                  </ion-note>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col   class=\"footer-input-container\">\r\n                <ion-label class=\"footer-input-label\">المجموع بعد الخصم</ion-label>\r\n                <ion-item class=\"custInput total-after-discount footer-input-item\">\r\n                  <ion-input [value]=\"(+payInvo.tot_pr - +payInvo.discount) | currencyDisplay\" [readonly]=\"true\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n\r\n              \r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n        \r\n        <!-- Action buttons on the left side -->\r\n        <ion-col size=\"4\">\r\n          <ion-grid>\r\n            <ion-row class=\"ion-justify-content-end\">\r\n              <ion-col size=\"6\">\r\n                <ion-button \r\n                  expand=\"block\" \r\n                  routerDirection=\"root\" \r\n                  color=\"primary\" \r\n                  (click)=\"update()\"\r\n                  [disabled]=\"isLoading()\">\r\n                  <ion-spinner *ngIf=\"isSaving || isUpdating\" slot=\"start\" name=\"dots\"></ion-spinner>\r\n                  <ion-label class=\"ion-text-center\">\r\n                    {{ (isSaving || isUpdating) ? currentLoadingMessage : 'تحديث' }}\r\n                  </ion-label>\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"6\" >\r\n                <ion-button \r\n                  expand=\"block\" \r\n                  routerDirection=\"root\" \r\n                  color=\"danger\" \r\n                  (click)=\"delete()\"\r\n                  [disabled]=\"isLoading()\">\r\n                  <ion-spinner *ngIf=\"isDeleting\" slot=\"start\" name=\"dots\"></ion-spinner>\r\n                  <ion-label class=\"ion-text-center\">\r\n                    {{ isDeleting ? 'جاري الحذف...' : 'حذف' }}\r\n                  </ion-label>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-sales_edit-sales_module_ts.js.map
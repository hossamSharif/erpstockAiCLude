"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-purchase-return_edit-purchase-return_module_ts"],{

/***/ 8015:
/*!*****************************************************************************!*\
  !*** ./src/app/edit-purchase-return/edit-purchase-return-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPurchaseReturnPageRoutingModule": () => (/* binding */ EditPurchaseReturnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _edit_purchase_return_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-purchase-return.page */ 4604);




const routes = [
    {
        path: '',
        component: _edit_purchase_return_page__WEBPACK_IMPORTED_MODULE_0__.EditPurchaseReturnPage
    }
];
let EditPurchaseReturnPageRoutingModule = class EditPurchaseReturnPageRoutingModule {
};
EditPurchaseReturnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditPurchaseReturnPageRoutingModule);



/***/ }),

/***/ 1856:
/*!*********************************************************************!*\
  !*** ./src/app/edit-purchase-return/edit-purchase-return.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPurchaseReturnPageModule": () => (/* binding */ EditPurchaseReturnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _edit_purchase_return_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-purchase-return-routing.module */ 8015);
/* harmony import */ var _edit_purchase_return_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-purchase-return.page */ 4604);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let EditPurchaseReturnPageModule = class EditPurchaseReturnPageModule {
};
EditPurchaseReturnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_purchase_return_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPurchaseReturnPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_edit_purchase_return_page__WEBPACK_IMPORTED_MODULE_1__.EditPurchaseReturnPage]
    })
], EditPurchaseReturnPageModule);



/***/ }),

/***/ 4604:
/*!*******************************************************************!*\
  !*** ./src/app/edit-purchase-return/edit-purchase-return.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPurchaseReturnPage": () => (/* binding */ EditPurchaseReturnPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_purchase_return_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-purchase-return.page.html?ngResource */ 13336);
/* harmony import */ var _edit_purchase_return_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-purchase-return.page.scss?ngResource */ 73274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _services_account_communication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/account-communication.service */ 32724);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/currency.service */ 6612);














let EditPurchaseReturnPage = class EditPurchaseReturnPage {
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
        // Edit mode specific properties
        this.editMode = true;
        this.returnRefToEdit = '';
        this.originalReturnData = null;
        // Return-specific properties (inherited from purchase-return)
        this.isReturnAllItems = false;
        this.originalInvoice = null;
        this.originalItems = [];
        this.selectedOriginalInvoice = null;
        this.availablePurchaseInvoices = [];
        this.returnReason = '';
        this.discountType = 'percentage';
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
        this.status = 'edit';
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
        this.statusFromRoute = 'edit';
        this.showBackButton = true;
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
        // Get route parameters for editing
        this.route.queryParams.subscribe(params => {
            if (params['return_ref']) {
                this.returnRefToEdit = params['return_ref'];
                this.editMode = true;
                this.showBackButton = true;
                console.log('Edit mode - Return ref:', this.returnRefToEdit);
            }
        });
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
                console.log('Supplier selected in edit purchase return, setting supplier_id:', id);
                this.returnInvo.supplier_id = id;
                this.returnInvo.sub_name = account.sub_name;
                this.selectedAccount = account;
                console.log('Edit purchase return invoice updated:', this.returnInvo);
            }
        });
        this.getAppInfo();
    }
    ngOnDestroy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                // Load the return data for editing
                if (this.returnRefToEdit) {
                    this.loadReturnForEditing();
                }
                else {
                    this.prepareReturnInvo();
                }
            }
        });
    }
    // Load existing return data for editing
    loadReturnForEditing() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تحميل بيانات المرتجعة...', 'saving');
            try {
                this.api.getPurchaseReturnDetail(this.store_info.id, this.returnRefToEdit, this.year.id).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Return data loaded:', data);
                    yield this.hideLoading();
                    if (data.message === 'Purchase return details retrieved successfully') {
                        this.populateReturnData(data.data);
                    }
                    else {
                        this.presentToast('لم يتم العثور على بيانات المرتجعة', 'danger');
                        this.goBack();
                    }
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    console.log('Error loading return data:', err);
                    this.presentToast('خطأ في تحميل بيانات المرتجعة', 'danger');
                    this.goBack();
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Error in loadReturnForEditing:', error);
            }
        });
    }
    // Populate the form with existing return data
    populateReturnData(data) {
        const returnInvoice = data.returnInvoice;
        const returnItems = data.returnItems;
        console.log('Populating return data:', returnInvoice, returnItems);
        // Store original data for comparison
        this.originalReturnData = JSON.parse(JSON.stringify(data));
        // Set up return invoice data
        this.returnInvo = {
            return_id: returnInvoice.return_id,
            return_ref: returnInvoice.return_ref,
            original_pay_ref: returnInvoice.original_pay_ref,
            store_id: returnInvoice.store_id,
            tot_pr: returnInvoice.tot_pr,
            pay: returnInvoice.pay,
            return_date: returnInvoice.return_date,
            return_time: returnInvoice.return_time,
            user_id: returnInvoice.user_id,
            supplier_id: returnInvoice.supplier_id,
            return_method: returnInvoice.return_method,
            discount: returnInvoice.discount,
            changee: returnInvoice.changee,
            sub_name: returnInvoice.sub_name,
            returnComment: returnInvoice.returnComment,
            yearId: returnInvoice.yearId,
            is_full_return: returnInvoice.is_full_return,
            return_reason: returnInvoice.return_reason
        };
        // Set return reason
        this.returnReason = returnInvoice.return_reason || '';
        // Set discount information
        if (returnInvoice.discount > 0) {
            const subtotal = returnItems.reduce((acc, item) => acc + (+item.quantity * +item.return_price), 0);
            if (subtotal > 0) {
                this.calculatedDiscountPerc = ((+returnInvoice.discount / subtotal) * 100);
                this.calculatedDiscountAmount = +returnInvoice.discount;
                // Determine discount type based on the calculated percentage
                if (Math.abs(this.calculatedDiscountPerc - Math.round(this.calculatedDiscountPerc)) < 0.01) {
                    this.discountType = 'percentage';
                    this.discountPerc = Math.round(this.calculatedDiscountPerc);
                }
                else {
                    this.discountType = 'amount';
                    this.discountAmount = +returnInvoice.discount;
                }
            }
        }
        // Set up supplier account
        this.selectedAccount = {
            id: returnInvoice.supplier_id,
            ac_id: returnInvoice.supplier_id,
            sub_name: returnInvoice.sub_name,
            sub_type: "",
            sub_code: "",
            sub_balance: "",
            store_id: returnInvoice.store_id,
            cat_name: "",
            cat_id: "",
            phone: "",
            address: "",
            currentSupplierStatus: 0
        };
        // Set up return items
        this.itemList = returnItems.map(item => ({
            id: item.id,
            return_ref: item.return_ref,
            item_name: item.item_name,
            return_price: item.return_price,
            quantity: item.quantity,
            tot: item.tot,
            store_id: item.store_id,
            yearId: item.yearId,
            item_id: item.item_id,
            dateCreated: item.dateCreated,
            original_price: item.original_price,
            tax: item.tax,
            imageUrl: item.imageUrl
        }));
        // Check if it's a full return
        this.isReturnAllItems = returnInvoice.is_full_return == 1;
        // Load original invoice data
        this.loadOriginalInvoiceForEdit(returnInvoice.original_pay_ref);
        this.updateSortedList();
        this.getTotal();
    }
    // Load original invoice data for editing context
    loadOriginalInvoiceForEdit(original_pay_ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.api.getPerchInvoDetail(this.store_info.id, original_pay_ref, this.year.id).subscribe(data => {
                    let res = data;
                    this.originalItems = res['data'] || [];
                    console.log('Original purchase items loaded for editing:', this.originalItems);
                    // Set selected original invoice info
                    this.selectedOriginalInvoice = {
                        pay_ref: original_pay_ref,
                        supplier_id: this.returnInvo.supplier_id,
                        sub_name: this.returnInvo.sub_name
                    };
                    this.originalInvoice = this.selectedOriginalInvoice;
                }, (err) => {
                    console.log('Error loading original items for editing:', err);
                });
            }
            catch (error) {
                console.error('Error in loadOriginalInvoiceForEdit:', error);
            }
        });
    }
    prepareReturnInvo() {
        // This should not be called in edit mode, but keep for consistency
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
        let d = new Date;
        this.returnInvo.return_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.returnInvo.return_time = this.datePipe.transform(d, 'HH:mm:ss');
        this.returnInvo.store_id = this.store_info.id;
        this.returnInvo.user_id = this.user_info.id;
        this.returnInvo.yearId = this.year.id;
        this.itemList = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        this.searchTerm = '';
        this.searchMatches = [];
        this.highlightedIndex = -1;
        this.originalInvoice = null;
        this.originalItems = [];
        this.selectedOriginalInvoice = null;
    }
    // Update existing return
    updateReturn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تحديث فاتورة مرتجعات الشراء...', 'updating');
            try {
                this.returnInvo.return_reason = this.returnReason;
                const returnWithItems = {
                    invoice: this.returnInvo,
                    items: this.itemList
                };
                console.log('Updating purchase return data:', returnWithItems);
                this.api.updatePurchaseReturnWithItems(returnWithItems).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Purchase return updated:', response);
                    yield this.hideLoading();
                    this.handleUpdateSuccess();
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Update error:', err);
                    yield this.hideLoading();
                    this.presentToast('لم يتم تحديث البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in updateReturn:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء التحديث', 'danger');
            }
        });
    }
    // Delete the return
    deleteReturn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const confirmDelete = yield this.presentConfirmAlert('تأكيد الحذف', 'هل أنت متأكد من حذف هذه المرتجعة؟ لا يمكن التراجع عن هذا الإجراء.', 'نعم، احذف', 'إلغاء');
            if (!confirmDelete) {
                return;
            }
            yield this.showLoading('جاري حذف فاتورة المرتجعات...', 'deleting');
            try {
                const deletionData = {
                    return_ref: this.returnInvo.return_ref,
                    store_id: this.returnInvo.store_id,
                    yearId: this.returnInvo.yearId
                };
                this.api.deletePurchaseReturnWithItems(deletionData).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Purchase return deleted:', response);
                    yield this.hideLoading();
                    this.presentToast('تم حذف المرتجعة بنجاح', 'success');
                    this.goBack();
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Delete error:', err);
                    yield this.hideLoading();
                    this.presentToast('لم يتم حذف البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in deleteReturn:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء الحذف', 'danger');
            }
        });
    }
    save() {
        let d = this.returnInvo.return_date;
        this.returnInvo.sub_name = this.selectedAccount.sub_name;
        this.returnInvo.return_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        if (this.validate() == true) {
            if (this.editMode) {
                this.updateReturn();
            }
            else {
                // This shouldn't happen in edit mode, but keep for safety
                this.updateReturn();
            }
        }
    }
    handleUpdateSuccess() {
        this.presentToast('تم التحديث بنجاح', 'success');
        // Prepare print data with updated return information
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
        console.log('Print array prepared for updated return:', this.printArr);
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let msg = 'هل تريد طباعة فاتورة المرتجعات المحدثة؟';
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
                            this.goBack();
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            this.presentModal(this.printArr, 'purchase_return').then(() => {
                                this.goBack();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    back() {
        this._location.back();
    }
    goBack() {
        this._location.back();
    }
    // Include all other methods from purchase-return.page.ts that are needed
    // (validation, calculations, item management, etc.)
    // These are exactly the same as in purchase-return page, so including key ones:
    validate() {
        // Same validation as purchase-return page
        if (!this.selectedOriginalInvoice || !this.returnInvo.original_pay_ref) {
            this.presentToast('الرجاء التأكد من بيانات الفاتورة الأصلية', 'danger');
            return false;
        }
        if (this.itemList.length == 0 || this.returnInvo.return_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        const quantityValidationResult = this.validateReturnQuantities();
        if (!quantityValidationResult.valid) {
            this.presentToast(quantityValidationResult.message, 'danger');
            return false;
        }
        if (!this.returnInvo.supplier_id || !this.selectedAccount.sub_name) {
            this.presentToast('الرجاء إختيار حساب المورد', 'danger');
            return false;
        }
        if (this.returnInvo.return_date == "" || this.returnInvo.return_date == undefined) {
            this.presentToast('الرجاء تحديد التاريخ ', 'danger');
            return false;
        }
        const businessValidationResult = this.validateBusinessLogic();
        if (!businessValidationResult.valid) {
            this.presentToast(businessValidationResult.message, 'danger');
            return false;
        }
        return true;
    }
    validateReturnQuantities() {
        for (const returnItem of this.itemList) {
            const originalItem = this.originalItems.find(item => item.item_id === returnItem.item_id || item.item_name === returnItem.item_name);
            if (!originalItem) {
                return {
                    valid: false,
                    message: `الصنف "${returnItem.item_name}" غير موجود في الفاتورة الأصلية`
                };
            }
            if (+returnItem.quantity > +originalItem.quantity) {
                return {
                    valid: false,
                    message: `كمية الإرجاع للصنف "${returnItem.item_name}" (${returnItem.quantity}) أكبر من الكمية الأصلية (${originalItem.quantity})`
                };
            }
            if (+returnItem.quantity <= 0) {
                return {
                    valid: false,
                    message: `كمية الإرجاع للصنف "${returnItem.item_name}" يجب أن تكون أكبر من صفر`
                };
            }
        }
        return { valid: true, message: '' };
    }
    validateBusinessLogic() {
        const returnTotal = +this.returnInvo.tot_pr;
        if (+this.returnInvo.discount > returnTotal) {
            return {
                valid: false,
                message: 'قيمة الخصم لا يمكن أن تتجاوز إجمالي المرتجعة'
            };
        }
        return { valid: true, message: '' };
    }
    getTotal() {
        this.recalculateReturnTotals();
    }
    recalculateReturnTotals() {
        let subtotal = 0;
        this.itemList.forEach(item => {
            const itemTotal = (+item.quantity * +item.return_price);
            item.tot = itemTotal.toFixed(2);
            subtotal += itemTotal;
        });
        const discountAmount = this.calculateDiscountAmount(subtotal);
        this.returnInvo.discount = discountAmount.toFixed(2);
        this.returnInvo.tot_pr = (subtotal - discountAmount).toFixed(2);
        this.returnInvo.changee = ((subtotal - discountAmount) - +this.returnInvo.pay).toFixed(2);
    }
    calculateDiscountAmount(subtotal) {
        if (this.discountType === 'percentage') {
            return subtotal * (+this.discountPerc / 100);
        }
        else {
            return +this.discountAmount;
        }
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
    presentConfirmAlert(header, message, confirmText, cancelText) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    // Centralized loading management methods
    showLoading(message, operationType = 'saving') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.hideLoading();
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
    isLoading() {
        return this.isSaving || this.isDeleting || this.isUpdating;
    }
    // Get current currency symbol for table headers
    getCurrencySymbol() {
        return this.currencyService.getCurrentCurrencySymbol();
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
    updateSortedList() {
        this.sortedItemList = [...this.itemList];
    }
    getDisplayItemList() {
        return this.sortedItemList.length > 0 ? this.sortedItemList : this.itemList;
    }
    deleteItem(index) {
        const displayList = this.getDisplayItemList();
        const itemToDelete = displayList[index];
        const originalIndex = this.itemList.findIndex(item => item.item_name === itemToDelete.item_name &&
            item.return_price === itemToDelete.return_price &&
            item.quantity === itemToDelete.quantity);
        if (originalIndex !== -1) {
            this.itemList.splice(originalIndex, 1);
        }
        this.discountPerc = 0;
        this.returnInvo.discount = 0;
        this.getTotal();
        this.updateSortedList();
    }
    onDiscountTypeChange(event) {
        this.discountType = event.detail.value;
        this.discountPerc = 0;
        this.discountAmount = 0;
        this.returnInvo.discount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.calculateChange();
        this.cdr.detectChanges();
    }
    onPercentageDiscountChange(event) {
        this.discountPerc = event.target.value || 0;
        if (this.returnInvo.tot_pr > 0) {
            this.calculatedDiscountAmount = (+this.returnInvo.tot_pr * +this.discountPerc / 100);
            this.returnInvo.discount = this.calculatedDiscountAmount.toFixed(2);
            this.calculateChange();
        }
    }
    onAmountDiscountChange(event) {
        this.discountAmount = event.target.value || 0;
        if (this.returnInvo.tot_pr > 0 && this.discountAmount > 0) {
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
    getSubtotal() {
        if (!this.itemList || this.itemList.length === 0) {
            return 0;
        }
        return this.itemList.reduce((acc, item) => acc + Number(item.tot || 0), 0);
    }
    calculateChange() {
        this.returnInvo.changee = +(this.returnInvo.tot_pr - +this.returnInvo.discount) - this.returnInvo.pay;
    }
    payChange(ev) {
        if (this.discountPerc > 0) {
            this.returnInvo.discount = (+this.returnInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
        }
        this.returnInvo.changee = +(this.returnInvo.tot_pr - +this.returnInvo.discount) - ev.target.value;
    }
};
EditPurchaseReturnPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_6__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _services_account_communication_service__WEBPACK_IMPORTED_MODULE_7__.AccountCommunicationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_8__.CurrencyService }
];
EditPurchaseReturnPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ["dst",] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['dstPop',] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['qtyId',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popover',] }],
    popoverNotif: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popoverNotif',] }]
};
EditPurchaseReturnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-edit-purchase-return',
        template: _edit_purchase_return_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_purchase_return_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditPurchaseReturnPage);



/***/ }),

/***/ 73274:
/*!********************************************************************************!*\
  !*** ./src/app/edit-purchase-return/edit-purchase-return.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  padding: 10px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 10px 15px;\n  background: var(--ion-color-primary);\n  border-radius: 8px;\n  color: white;\n}\n\n.section-header ion-title {\n  margin: 0;\n  padding: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.section-header ion-button {\n  --color: white;\n  --background: transparent;\n  --border-radius: 50%;\n  --padding: 8px;\n}\n\n.section {\n  margin-bottom: 20px;\n}\n\n.section-title {\n  color: var(--ion-color-primary);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n  padding: 0;\n}\n\n.edit-notice {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  background-color: var(--ion-color-primary-tint);\n  border-radius: 8px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n\n.edit-notice ion-icon {\n  font-size: 1.2rem;\n}\n\n.invoice-info-readonly {\n  display: grid;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.info-row label {\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  min-width: 150px;\n}\n\n.info-row span {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n\n.table-container {\n  overflow-x: auto;\n  margin-top: 15px;\n}\n\n.items-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n\n.items-table th, .items-table td {\n  padding: 12px 8px;\n  text-align: center;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.items-table th {\n  background-color: var(--ion-color-light);\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.items-table tbody tr {\n  transition: background-color 0.2s ease;\n}\n\n.items-table tbody tr:hover {\n  background-color: var(--ion-color-light);\n}\n\n.items-table ion-button {\n  --padding: 6px;\n  font-size: 0.8rem;\n}\n\n.summary-grid {\n  display: grid;\n  grid-gap: 12px;\n  gap: 12px;\n}\n\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n}\n\n.summary-row label {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n\n.summary-row span {\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n\n.summary-row span.negative {\n  color: var(--ion-color-danger);\n}\n\n.summary-row.total-row {\n  border-top: 2px solid var(--ion-color-primary);\n  border-bottom: 2px solid var(--ion-color-primary);\n  padding: 12px 0;\n}\n\n.summary-row.total-row label, .summary-row.total-row span {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.summary-row.total-row span {\n  color: var(--ion-color-success);\n}\n\n.action-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 20px;\n}\n\n.action-buttons ion-button {\n  --padding: 12px;\n  font-weight: 600;\n}\n\n@media (min-width: 768px) {\n  .action-buttons {\n    flex-direction: row;\n    max-width: 500px;\n    margin: 20px auto 0;\n  }\n  .action-buttons ion-button {\n    flex: 1;\n  }\n}\n\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.loading-overlay ion-spinner {\n  width: 50px;\n  height: 50px;\n  --color: var(--ion-color-primary);\n}\n\n.loading-overlay p {\n  margin-top: 15px;\n  color: white;\n  font-size: 1rem;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .container {\n    padding: 5px;\n  }\n\n  .items-table {\n    font-size: 0.8rem;\n  }\n  .items-table th, .items-table td {\n    padding: 8px 4px;\n  }\n\n  .summary-row {\n    font-size: 0.9rem;\n  }\n\n  .section-header {\n    padding: 8px 12px;\n  }\n  .section-header ion-title {\n    font-size: 1.1rem;\n  }\n\n  .info-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .info-row label {\n    min-width: auto;\n    margin-bottom: 4px;\n  }\n}\n\nion-item.item-has-error {\n  --border-color: var(--ion-color-danger);\n  --highlight-color-focused: var(--ion-color-danger);\n}\n\nion-item.item-has-success {\n  --border-color: var(--ion-color-success);\n  --highlight-color-focused: var(--ion-color-success);\n}\n\nion-card {\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 16px;\n}\n\nion-card ion-card-header {\n  padding-bottom: 10px;\n}\n\nion-card ion-card-content {\n  padding-top: 0;\n}\n\nion-input.ion-focused, ion-textarea.ion-focused, ion-select.ion-focused {\n  --highlight-color: var(--ion-color-primary);\n}\n\nion-button:not(.button-disabled):hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  transition: all 0.2s ease;\n}\n\n@media (prefers-color-scheme: dark) {\n  .items-table th {\n    background-color: var(--ion-color-dark);\n    color: var(--ion-color-light);\n  }\n\n  .loading-overlay {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n\n  .edit-notice {\n    background-color: var(--ion-color-primary-shade);\n    color: var(--ion-color-primary-tint);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHVyY2hhc2UtcmV0dXJuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBR0U7RUFDRSxpQkFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtBQUZGOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0FBSEo7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU1FO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FBSko7O0FBT0U7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUU7RUFDRSxzQ0FBQTtBQU5KOztBQVFJO0VBQ0Usd0NBQUE7QUFOTjs7QUFVRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFXRTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QUFUSjs7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7QUFWSjs7QUFZSTtFQUNFLDhCQUFBO0FBVk47O0FBY0U7RUFDRSw4Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtBQVpKOztBQWNJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQVpOOztBQWVJO0VBQ0UsK0JBQUE7QUFiTjs7QUFrQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFmRjs7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFmSjs7QUFtQkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQWhCRjtFQWtCRTtJQUNFLE9BQUE7RUFoQko7QUFDRjs7QUFvQkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFsQkY7O0FBb0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQWxCSjs7QUFxQkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFuQko7O0FBd0JBO0VBQ0U7SUFDRSxZQUFBO0VBckJGOztFQXdCQTtJQUNFLGlCQUFBO0VBckJGO0VBdUJFO0lBQ0UsZ0JBQUE7RUFyQko7O0VBeUJBO0lBQ0UsaUJBQUE7RUF0QkY7O0VBeUJBO0lBQ0UsaUJBQUE7RUF0QkY7RUF3QkU7SUFDRSxpQkFBQTtFQXRCSjs7RUEwQkE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VBdkJGO0VBeUJFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBdkJKO0FBQ0Y7O0FBNkJFO0VBQ0UsdUNBQUE7RUFDQSxrREFBQTtBQTNCSjs7QUE4QkU7RUFDRSx3Q0FBQTtFQUNBLG1EQUFBO0FBNUJKOztBQWlDQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQTlCRjs7QUFnQ0U7RUFDRSxvQkFBQTtBQTlCSjs7QUFpQ0U7RUFDRSxjQUFBO0FBL0JKOztBQXFDRTtFQUNFLDJDQUFBO0FBbENKOztBQXVDQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBcENGOztBQXdDQTtFQUNFO0lBQ0UsdUNBQUE7SUFDQSw2QkFBQTtFQXJDRjs7RUF3Q0E7SUFDRSwwQ0FBQTtFQXJDRjs7RUF3Q0E7SUFDRSxnREFBQTtJQUNBLG9DQUFBO0VBckNGO0FBQ0YiLCJmaWxlIjoiZWRpdC1wdXJjaGFzZS1yZXR1cm4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLXBhZGRpbmc6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZWRpdC1ub3RpY2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnZvaWNlLWluZm8tcmVhZG9ubHkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uaW5mby1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLml0ZW1zLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cclxuICB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcblxyXG4gIHRib2R5IHRyIHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLXBhZGRpbmc6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnN1bW1hcnktZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAgICYubmVnYXRpdmUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnRvdGFsLXJvdyB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuXHJcbiAgICBsYWJlbCwgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGluZy1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICBpb24tc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHNcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbXMtdGFibGUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gICAgdGgsIHRkIHtcclxuICAgICAgcGFkZGluZzogOHB4IDRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdW1tYXJ5LXJvdyB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbmZvLXJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZvcm0gdmFsaWRhdGlvbiBzdGF0ZXNcclxuaW9uLWl0ZW0ge1xyXG4gICYuaXRlbS1oYXMtZXJyb3Ige1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgfVxyXG5cclxuICAmLml0ZW0taGFzLXN1Y2Nlc3Mge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBjYXJkIHN0eWxpbmdcclxuaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSW5wdXQgZm9jdXMgc3RhdGVzXHJcbmlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0IHtcclxuICAmLmlvbi1mb2N1c2VkIHtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCdXR0b24gaG92ZXIgc3RhdGVzXHJcbmlvbi1idXR0b246bm90KC5idXR0b24tZGlzYWJsZWQpOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi8vIERhcmsgbW9kZSBhZGp1c3RtZW50c1xyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgLml0ZW1zLXRhYmxlIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmctb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgfVxyXG5cclxuICAuZWRpdC1ub3RpY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 13336:
/*!********************************************************************************!*\
  !*** ./src/app/edit-purchase-return/edit-purchase-return.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-card>\r\n    <div class=\"container\">\r\n      \r\n      <!-- Header Section -->\r\n      <div class=\"section-header\">\r\n        <ion-title>تعديل فاتورة مرتجعات الشراء</ion-title>\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\r\n      <!-- Edit Mode Notice -->\r\n      <div class=\"section\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <div class=\"edit-notice\">\r\n              <ion-icon name=\"create-outline\" color=\"primary\"></ion-icon>\r\n              <span>وضع التعديل - رقم المرتجعة: {{ returnInvo.return_ref }}</span>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Original Invoice Information (Read-only in edit mode) -->\r\n      <div class=\"section\" *ngIf=\"selectedOriginalInvoice\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">معلومات فاتورة الشراء الأصلية</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"invoice-info-readonly\">\r\n              <div class=\"info-row\">\r\n                <label>رقم الفاتورة الأصلية:</label>\r\n                <span>{{ selectedOriginalInvoice.pay_ref }}</span>\r\n              </div>\r\n              <div class=\"info-row\">\r\n                <label>المورد:</label>\r\n                <span>{{ selectedAccount.sub_name }}</span>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Return Items Section -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">أصناف الإرجاع</ion-card-title>\r\n          </ion-card-header>\r\n          \r\n          <ion-card-content>\r\n            <div class=\"table-container\">\r\n              <table class=\"items-table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>الصنف</th>\r\n                    <th>الكمية</th>\r\n                    <th>السعر ({{ getCurrencySymbol() }})</th>\r\n                    <th>المجموع ({{ getCurrencySymbol() }})</th>\r\n                    <th>عمليات</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of getDisplayItemList(); let i = index\">\r\n                    <td>{{ item.item_name }}</td>\r\n                    <td>{{ item.quantity }}</td>\r\n                    <td>{{ formatBalance(item.return_price) }}</td>\r\n                    <td>{{ formatBalance(item.tot) }}</td>\r\n                    <td>\r\n                      <ion-button \r\n                        fill=\"clear\" \r\n                        color=\"danger\" \r\n                        (click)=\"deleteItem(i)\">\r\n                        <ion-icon name=\"trash\"></ion-icon>\r\n                      </ion-button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Discount Section -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">تفاصيل الخصم والدفع</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <!-- Discount Type Selection -->\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">نوع الخصم</ion-label>\r\n              <ion-select [(ngModel)]=\"discountType\" (ionSelectionChange)=\"onDiscountTypeChange($event)\">\r\n                <ion-select-option value=\"percentage\">نسبة مئوية</ion-select-option>\r\n                <ion-select-option value=\"amount\">مبلغ ثابت</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- Percentage Discount -->\r\n            <ion-item *ngIf=\"discountType === 'percentage'\">\r\n              <ion-label position=\"stacked\">نسبة الخصم (%)</ion-label>\r\n              <ion-input \r\n                type=\"number\" \r\n                [(ngModel)]=\"discountPerc\"\r\n                (ionInput)=\"onPercentageDiscountChange($event)\"\r\n                placeholder=\"أدخل نسبة الخصم\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Amount Discount -->\r\n            <ion-item *ngIf=\"discountType === 'amount'\">\r\n              <ion-label position=\"stacked\">مبلغ الخصم ({{ getCurrencySymbol() }})</ion-label>\r\n              <ion-input \r\n                type=\"number\" \r\n                [(ngModel)]=\"discountAmount\"\r\n                (ionInput)=\"onAmountDiscountChange($event)\"\r\n                placeholder=\"أدخل مبلغ الخصم\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Payment Amount -->\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">المبلغ المدفوع ({{ getCurrencySymbol() }})</ion-label>\r\n              <ion-input \r\n                type=\"number\" \r\n                [(ngModel)]=\"returnInvo.pay\"\r\n                (ionInput)=\"payChange($event)\"\r\n                placeholder=\"أدخل المبلغ المدفوع\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Return Reason -->\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">سبب الإرجاع</ion-label>\r\n              <ion-textarea \r\n                [(ngModel)]=\"returnReason\"\r\n                rows=\"3\"\r\n                placeholder=\"أدخل سبب إرجاع الأصناف\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n\r\n            <!-- Return Date -->\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">تاريخ الإرجاع</ion-label>\r\n              <ion-input \r\n                type=\"date\" \r\n                [(ngModel)]=\"returnInvo.return_date\"\r\n                placeholder=\"تاريخ الإرجاع\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Summary Section -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"section-title\">ملخص فاتورة الإرجاع</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"summary-grid\">\r\n              <div class=\"summary-row\">\r\n                <label>المجموع الفرعي:</label>\r\n                <span>{{ formatBalance(getSubtotal()) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row\" *ngIf=\"discountType === 'percentage' && discountPerc > 0\">\r\n                <label>الخصم ({{ discountPerc }}%):</label>\r\n                <span>{{ formatBalance(calculatedDiscountAmount) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row\" *ngIf=\"discountType === 'amount' && discountAmount > 0\">\r\n                <label>الخصم:</label>\r\n                <span>{{ formatBalance(discountAmount) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row total-row\">\r\n                <label>المجموع النهائي:</label>\r\n                <span>{{ formatBalance(returnInvo.tot_pr) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row\">\r\n                <label>المبلغ المدفوع:</label>\r\n                <span>{{ formatBalance(returnInvo.pay) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n              \r\n              <div class=\"summary-row\">\r\n                <label>الباقي:</label>\r\n                <span [class.negative]=\"returnInvo.changee < 0\">{{ formatBalance(returnInvo.changee) }} {{ getCurrencySymbol() }}</span>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <!-- Action Buttons -->\r\n      <div class=\"section\" *ngIf=\"itemList.length > 0\">\r\n        <div class=\"action-buttons\">\r\n          <ion-button \r\n            expand=\"block\" \r\n            color=\"success\"\r\n            (click)=\"save()\"\r\n            [disabled]=\"isLoading()\">\r\n            <ion-icon name=\"save\" slot=\"start\"></ion-icon>\r\n            حفظ التعديلات\r\n          </ion-button>\r\n          \r\n          <ion-button \r\n            expand=\"block\" \r\n            color=\"danger\"\r\n            fill=\"outline\"\r\n            (click)=\"deleteReturn()\"\r\n            [disabled]=\"isLoading()\">\r\n            <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\r\n            حذف المرتجعة\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ion-card>\r\n\r\n  <!-- Loading Indicator -->\r\n  <div class=\"loading-overlay\" *ngIf=\"isLoading()\">\r\n    <ion-spinner name=\"bubbles\"></ion-spinner>\r\n    <p>{{ currentLoadingMessage }}</p>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-purchase-return_edit-purchase-return_module_ts.js.map
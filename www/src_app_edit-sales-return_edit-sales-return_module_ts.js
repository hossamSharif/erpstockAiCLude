"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-sales-return_edit-sales-return_module_ts"],{

/***/ 91918:
/*!***********************************************************************!*\
  !*** ./src/app/edit-sales-return/edit-sales-return-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesReturnPageRoutingModule": () => (/* binding */ EditSalesReturnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _edit_sales_return_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales-return.page */ 37466);




const routes = [
    {
        path: '',
        component: _edit_sales_return_page__WEBPACK_IMPORTED_MODULE_0__.EditSalesReturnPage
    }
];
let EditSalesReturnPageRoutingModule = class EditSalesReturnPageRoutingModule {
};
EditSalesReturnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditSalesReturnPageRoutingModule);



/***/ }),

/***/ 19801:
/*!***************************************************************!*\
  !*** ./src/app/edit-sales-return/edit-sales-return.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesReturnPageModule": () => (/* binding */ EditSalesReturnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _edit_sales_return_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales-return-routing.module */ 91918);
/* harmony import */ var _edit_sales_return_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sales-return.page */ 37466);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let EditSalesReturnPageModule = class EditSalesReturnPageModule {
};
EditSalesReturnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_sales_return_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditSalesReturnPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_edit_sales_return_page__WEBPACK_IMPORTED_MODULE_1__.EditSalesReturnPage]
    })
], EditSalesReturnPageModule);



/***/ }),

/***/ 37466:
/*!*************************************************************!*\
  !*** ./src/app/edit-sales-return/edit-sales-return.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesReturnPage": () => (/* binding */ EditSalesReturnPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_sales_return_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales-return.page.html?ngResource */ 22347);
/* harmony import */ var _edit_sales_return_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sales-return.page.scss?ngResource */ 88181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _services_account_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/account-communication.service */ 32724);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/currency.service */ 6612);













let EditSalesReturnPage = class EditSalesReturnPage {
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
        // Return-specific properties (inherited from sales-return)
        this.isReturnAllItems = false;
        this.originalInvoice = null;
        this.originalItems = [];
        this.selectedOriginalInvoice = null;
        this.availableSalesInvoices = [];
        this.returnReason = '';
        this.discountType = 'percentage';
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        // Common properties (from sales-return structure)
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
        this.statusFromRoute = '';
        this.showBackButton = true; // Always show back button in edit mode
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
        // Initialize currency service
        this.initializeCurrency();
        // Subscribe to customer selection from account-selector
        this.customerSubscription = this.accountCommunicationService.customerSelected$.subscribe(({ id, account }) => {
            if (id && this.returnInvo) {
                console.log('Customer selected in edit sales return, setting cust_id:', id);
                this.returnInvo.cust_id = id;
                this.returnInvo.sub_name = account.sub_name;
                this.selectedAccount = account;
                console.log('Edit return invoice updated:', this.returnInvo);
            }
        });
        // Get route parameters
        this.route.queryParams.subscribe(params => {
            this.returnRefToEdit = params['return_ref'] || '';
            if (this.returnRefToEdit) {
                this.loadReturnForEdit();
            }
            else {
                this.presentToast('لم يتم تحديد مرجع المرتجعة للتعديل', 'danger');
                this.goBack();
            }
        });
        this.getAppInfo();
    }
    ngOnDestroy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    // Load existing return data for editing
    loadReturnForEdit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تحميل بيانات المرتجعة...', 'updating');
            try {
                // Get return details
                this.api.getSalesReturnDetail(this.store_info.id, this.returnRefToEdit, this.year.id).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    if (response.message !== 'No record Found' && response.data) {
                        // Load return invoice data and items
                        yield this.populateReturnData(response.data);
                        yield this.hideLoading();
                    }
                    else {
                        yield this.hideLoading();
                        this.presentToast('لم يتم العثور على بيانات المرتجعة', 'danger');
                        this.goBack();
                    }
                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    console.error('Error loading return for edit:', error);
                    this.presentToast('حدث خطأ في تحميل بيانات المرتجعة', 'danger');
                    this.goBack();
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Error in loadReturnForEdit:', error);
                this.presentToast('حدث خطأ في تحميل بيانات المرتجعة', 'danger');
                this.goBack();
            }
        });
    }
    // Populate form with existing return data
    populateReturnData(returnData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                console.log('Populating return data:', returnData);
                // Set return invoice data
                this.returnInvo = {
                    return_id: returnData.returnInvoice.return_id,
                    return_ref: returnData.returnInvoice.return_ref,
                    original_pay_ref: returnData.returnInvoice.original_pay_ref,
                    store_id: returnData.returnInvoice.store_id,
                    tot_pr: parseFloat(returnData.returnInvoice.tot_pr),
                    pay: parseFloat(returnData.returnInvoice.pay || 0),
                    return_date: returnData.returnInvoice.return_date,
                    return_time: returnData.returnInvoice.return_time,
                    user_id: returnData.returnInvoice.user_id,
                    cust_id: returnData.returnInvoice.cust_id,
                    return_method: returnData.returnInvoice.return_method,
                    discount: parseFloat(returnData.returnInvoice.discount || 0),
                    changee: parseFloat(returnData.returnInvoice.changee || 0),
                    sub_name: returnData.returnInvoice.sub_name,
                    returnComment: returnData.returnInvoice.returnComment,
                    yearId: returnData.returnInvoice.yearId,
                    is_full_return: parseInt(returnData.returnInvoice.is_full_return),
                    return_reason: returnData.returnInvoice.return_reason
                };
                // Set return reason
                this.returnReason = this.returnInvo.return_reason || '';
                // Set return type
                this.isReturnAllItems = this.returnInvo.is_full_return === 1;
                // Set account data
                if (returnData.returnInvoice.cust_id) {
                    this.selectedAccount = {
                        id: returnData.returnInvoice.cust_id,
                        ac_id: returnData.returnInvoice.cust_id,
                        sub_name: returnData.returnInvoice.sub_name,
                        sub_type: "",
                        sub_code: "",
                        sub_balance: "",
                        store_id: this.store_info.id,
                        cat_id: "",
                        cat_name: "",
                        phone: "",
                        address: "",
                        currentCustumerStatus: 0
                    };
                }
                // Set discount data
                if (this.returnInvo.discount > 0) {
                    this.discountType = 'amount'; // Default to amount since we have the final amount
                    this.discountAmount = this.returnInvo.discount;
                    this.calculatedDiscountAmount = this.returnInvo.discount;
                    this.calculateDiscountPercentage();
                }
                // Set item list
                this.itemList = returnData.returnItems || [];
                this.itemList.forEach((item) => {
                    item.quantity = parseFloat(item.quantity);
                    item.return_price = parseFloat(item.return_price);
                    item.tot = parseFloat(item.tot);
                });
                console.log('Return data populated successfully');
                console.log('Return invoice:', this.returnInvo);
                console.log('Item list:', this.itemList);
            }
            catch (error) {
                console.error('Error populating return data:', error);
                this.presentToast('حدث خطأ في تحميل بيانات المرتجعة', 'danger');
            }
        });
    }
    // Update return functionality
    updateReturn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isUpdating)
                return;
            // Validate return data
            const validationError = this.validateReturnData();
            if (validationError) {
                this.presentToast(validationError, 'warning');
                return;
            }
            yield this.showLoading('جاري تحديث المرتجعة...', 'updating');
            this.isUpdating = true;
            try {
                // Calculate totals
                this.calculateTotals();
                // Prepare return data
                const returnData = {
                    returnInvoice: Object.assign(Object.assign({}, this.returnInvo), { return_reason: this.returnReason, is_full_return: this.isReturnAllItems ? 1 : 0, discount: this.returnInvo.discount }),
                    returnItems: this.itemList.map(item => ({
                        item_id: item.id,
                        item_name: item.item_name,
                        quantity: item.quantity,
                        return_price: item.return_price,
                        tot: item.tot
                    }))
                };
                console.log('Updating return with data:', returnData);
                // Update return via API
                this.api.updateSalesReturnWithItems(returnData).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    this.isUpdating = false;
                    if (response.message === 'Sales return updated successfully') {
                        this.presentToast('تم تحديث المرتجعة بنجاح', 'success');
                        this.goBack();
                    }
                    else {
                        this.presentToast('فشل في تحديث المرتجعة: ' + (response.message || 'خطأ غير معروف'), 'danger');
                    }
                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    this.isUpdating = false;
                    console.error('Error updating return:', error);
                    this.presentToast('حدث خطأ في تحديث المرتجعة', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                this.isUpdating = false;
                console.error('Error in updateReturn:', error);
                this.presentToast('حدث خطأ في تحديث المرتجعة', 'danger');
            }
        });
    }
    // Delete return functionality
    deleteReturn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isDeleting)
                return;
            const alert = yield this.alertController.create({
                header: 'تأكيد الحذف',
                message: 'هل أنت متأكد من حذف هذه المرتجعة؟ لا يمكن التراجع عن هذا الإجراء.',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel'
                    }, {
                        text: 'حذف',
                        cssClass: 'danger',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.performDelete();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    performDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isDeleting)
                return;
            yield this.showLoading('جاري حذف المرتجعة...', 'deleting');
            this.isDeleting = true;
            try {
                const deletionData = {
                    return_ref: this.returnInvo.return_ref,
                    store_id: this.store_info.id,
                    yearId: this.year.id
                };
                console.log('Deleting return with data:', deletionData);
                // Delete return via API
                this.api.deleteSalesReturnWithItems(deletionData).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    this.isDeleting = false;
                    if (response.message === 'Sales return deleted successfully') {
                        this.presentToast('تم حذف المرتجعة بنجاح', 'success');
                        this.goBack();
                    }
                    else {
                        this.presentToast('فشل في حذف المرتجعة: ' + (response.message || 'خطأ غير معروف'), 'danger');
                    }
                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    this.isDeleting = false;
                    console.error('Error deleting return:', error);
                    this.presentToast('حدث خطأ في حذف المرتجعة', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                this.isDeleting = false;
                console.error('Error in performDelete:', error);
                this.presentToast('حدث خطأ في حذف المرتجعة', 'danger');
            }
        });
    }
    // Validate return data before save
    validateReturnData() {
        if (!this.returnInvo.return_ref) {
            return 'مرجع المرتجعة مطلوب';
        }
        if (!this.returnInvo.return_date) {
            return 'تاريخ المرتجعة مطلوب';
        }
        if (!this.selectedAccount || !this.selectedAccount.id) {
            return 'يجب اختيار حساب العميل';
        }
        if (!this.itemList || this.itemList.length === 0) {
            return 'يجب أن تحتوي المرتجعة على صنف واحد على الأقل';
        }
        // Validate items
        for (let i = 0; i < this.itemList.length; i++) {
            const item = this.itemList[i];
            if (!item.quantity || item.quantity <= 0) {
                return `الكمية المرتجعة للصنف "${item.item_name}" يجب أن تكون أكبر من الصفر`;
            }
            if (!item.return_price || item.return_price < 0) {
                return `سعر الإرجاع للصنف "${item.item_name}" يجب أن يكون صالحاً`;
            }
        }
        if (!this.returnReason || this.returnReason.trim().length < 3) {
            return 'يجب كتابة سبب الإرجاع (3 أحرف على الأقل)';
        }
        return null;
    }
    // Calculate totals based on item list and discount
    calculateTotals() {
        // Calculate subtotal from items
        const subtotal = this.itemList.reduce((acc, item) => acc + (+item.tot), 0);
        // Apply discount
        let discountAmount = 0;
        if (this.discountType === 'percentage' && this.discountPerc > 0) {
            discountAmount = (subtotal * this.discountPerc) / 100;
        }
        else if (this.discountType === 'amount' && this.discountAmount > 0) {
            discountAmount = this.discountAmount;
        }
        // Update return invoice totals
        this.returnInvo.discount = discountAmount;
        this.returnInvo.tot_pr = subtotal - discountAmount;
        console.log('Calculated totals - Subtotal:', subtotal, 'Discount:', discountAmount, 'Total:', this.returnInvo.tot_pr);
    }
    // Calculate discount percentage when amount is given
    calculateDiscountPercentage() {
        const subtotal = this.itemList.reduce((acc, item) => acc + (+item.tot), 0);
        if (subtotal > 0 && this.discountAmount > 0) {
            this.calculatedDiscountPerc = (this.discountAmount / subtotal) * 100;
        }
        else {
            this.calculatedDiscountPerc = 0;
        }
    }
    // Handle discount type change
    onDiscountTypeChange(event) {
        this.discountType = event.detail.value;
        // Reset discount values when type changes
        this.discountPerc = 0;
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.returnInvo.discount = 0;
        this.calculateTotals();
    }
    // Handle percentage discount change
    onPercentageDiscountChange(event) {
        this.discountPerc = parseFloat(event.detail.value) || 0;
        if (this.discountPerc > 100) {
            this.discountPerc = 100;
        }
        else if (this.discountPerc < 0) {
            this.discountPerc = 0;
        }
        // Calculate amount from percentage
        const subtotal = this.itemList.reduce((acc, item) => acc + (+item.tot), 0);
        this.calculatedDiscountAmount = (subtotal * this.discountPerc) / 100;
        this.calculateTotals();
    }
    // Handle amount discount change
    onAmountDiscountChange(event) {
        this.discountAmount = parseFloat(event.detail.value) || 0;
        if (this.discountAmount < 0) {
            this.discountAmount = 0;
        }
        this.calculateDiscountPercentage();
        this.calculateTotals();
    }
    // Item editing methods
    editCell(i) {
        if (this.itemList[i]) {
            // Recalculate item total
            this.itemList[i].tot = this.itemList[i].quantity * this.itemList[i].return_price;
            this.calculateTotals();
        }
    }
    qtyClick(i) {
        this.showMe = i;
    }
    hideMe(i) {
        this.showMe = null;
    }
    deleteItem(i) {
        if (this.itemList.length > 1) {
            this.itemList.splice(i, 1);
            this.calculateTotals();
        }
        else {
            this.presentToast('يجب أن تحتوي المرتجعة على صنف واحد على الأقل', 'warning');
        }
    }
    // Account selection methods
    onAccountSelected(account) {
        console.log('Account selected in edit sales return:', account);
        this.selectedAccount = account;
        this.returnInvo.cust_id = account.id;
        this.returnInvo.sub_name = account.sub_name;
    }
    onAccountBalanceLoaded(balance) {
        console.log('Account balance loaded in edit sales return:', balance);
    }
    // Search and navigation methods
    onSearchTermChange() {
        if (this.searchTerm.trim()) {
            this.searchMatches = this.findSearchMatches();
            this.highlightedIndex = this.searchMatches.length > 0 ? 0 : -1;
        }
        else {
            this.searchMatches = [];
            this.highlightedIndex = -1;
        }
    }
    findSearchMatches() {
        const matches = [];
        const term = this.searchTerm.toLowerCase();
        this.getDisplayItemList().forEach((item, index) => {
            if (item.item_name.toLowerCase().includes(term)) {
                matches.push(index);
            }
        });
        return matches;
    }
    navigateSearch(direction) {
        if (this.searchMatches.length === 0)
            return;
        if (direction === 'next') {
            this.highlightedIndex = (this.highlightedIndex + 1) % this.searchMatches.length;
        }
        else {
            this.highlightedIndex = this.highlightedIndex <= 0
                ? this.searchMatches.length - 1
                : this.highlightedIndex - 1;
        }
    }
    getSearchResultText() {
        if (this.searchMatches.length === 0)
            return '0 / 0';
        return `${this.highlightedIndex + 1} / ${this.searchMatches.length}`;
    }
    isHighlighted(index) {
        if (this.highlightedIndex === -1)
            return false;
        return this.searchMatches[this.highlightedIndex] === index;
    }
    isSearchMatch(index) {
        return this.searchMatches.includes(index);
    }
    sortItemListAlphabetically() {
        if (!this.isItemListSorted) {
            this.sortedItemList = [...this.itemList].sort((a, b) => a.item_name.localeCompare(b.item_name, 'ar'));
            this.isItemListSorted = true;
        }
        else {
            this.isItemListSorted = false;
        }
    }
    getDisplayItemList() {
        return this.isItemListSorted ? this.sortedItemList : this.itemList;
    }
    highlightText(text, searchTerm) {
        if (!searchTerm || !text)
            return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    // Currency and utility methods
    getCurrencySymbol() {
        return this.currencyService.getCurrentCurrencySymbol();
    }
    // Loading and utility methods
    getAppInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.store_info = yield this.storage.get('store_info');
            this.user_info = yield this.storage.get('user_info');
            this.year = yield this.storage.get('year');
            if (!this.store_info || !this.user_info || !this.year) {
                this.presentToast('معلومات التطبيق غير مكتملة', 'danger');
                this.rout.navigate(['/folder/login']);
                return;
            }
            // Initialize currency rates if not done yet
            if (this.store_info && this.year) {
                yield this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
            }
            console.log('App info loaded - Store:', this.store_info, 'User:', this.user_info, 'Year:', this.year);
        });
    }
    isLoading() {
        return this.isSaving || this.isDeleting || this.isUpdating || this.loadingItems;
    }
    showLoading(message, operation) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.currentLoadingMessage = message;
            if (this.currentLoader) {
                yield this.currentLoader.dismiss();
            }
            this.currentLoader = yield this.loadingController.create({
                message: message,
                cssClass: 'custom-loading'
            });
            yield this.currentLoader.present();
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currentLoader) {
                yield this.currentLoader.dismiss();
                this.currentLoader = null;
            }
            this.currentLoadingMessage = '';
        });
    }
    getSubtotal() {
        if (!this.itemList || this.itemList.length === 0) {
            return 0;
        }
        return this.itemList.reduce((acc, item) => acc + Number(item.tot || 0), 0);
    }
    presentToast(message, color = 'primary') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 3000,
                color: color,
                position: 'bottom'
            });
            yield toast.present();
        });
    }
    goBack() {
        this._location.back();
    }
};
EditSalesReturnPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _services_account_communication_service__WEBPACK_IMPORTED_MODULE_6__.AccountCommunicationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_7__.CurrencyService }
];
EditSalesReturnPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["dst",] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['dstPop',] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['qtyId',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['popover',] }],
    popoverNotif: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['popoverNotif',] }]
};
EditSalesReturnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-edit-sales-return',
        template: _edit_sales_return_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_sales_return_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditSalesReturnPage);



/***/ }),

/***/ 88181:
/*!**************************************************************************!*\
  !*** ./src/app/edit-sales-return/edit-sales-return.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "/* Edit Sales Return Page Styles - Following Sales Return Page Pattern */\n.container {\n  padding: 16px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n/* Header Styles */\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.section-title {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  text-align: center;\n}\n/* List Controls */\n.list-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-top: 12px;\n}\n@media (max-width: 768px) {\n  .list-controls {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n}\n.list-controls ion-item {\n  flex: 1;\n  margin: 0;\n}\n.search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.search-navigation .search-results {\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n  min-width: 80px;\n  text-align: center;\n}\n/* Table Styles */\n.table-container {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid var(--ion-color-light);\n}\n.items-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.items-table th, .items-table td {\n  padding: 12px;\n  text-align: center;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.items-table th {\n  background-color: var(--ion-color-light);\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.items-table tr:hover {\n  background-color: var(--ion-color-light-shade);\n}\n.items-table tr.highlighted {\n  background-color: var(--ion-color-primary-tint) !important;\n  border: 2px solid var(--ion-color-primary);\n}\n.items-table tr.search-match {\n  background-color: var(--ion-color-warning-tint);\n}\n.items-table td ion-input {\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n/* Action Buttons */\n.action-buttons {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.action-buttons ion-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  min-width: 40px;\n}\n/* Discount Section */\n.discount-section {\n  border: 1px solid var(--ion-color-light);\n  border-radius: 8px;\n  padding: 16px;\n  margin: 16px 0;\n  background-color: var(--ion-color-light-tint);\n}\n.discount-section ion-item {\n  --background: transparent;\n  margin-bottom: 8px;\n}\n.discount-display {\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n  padding: 8px;\n  background-color: var(--ion-color-light);\n  border-radius: 4px;\n}\n/* Totals Styles */\n.totals-card {\n  background: linear-gradient(135deg, var(--ion-color-primary-tint), var(--ion-color-light));\n  border: 2px solid var(--ion-color-primary);\n}\n.totals-grid .total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.totals-grid .total-row:last-child {\n  border-bottom: none;\n}\n.totals-grid .total-row.final-total {\n  border-top: 2px solid var(--ion-color-primary);\n  margin-top: 8px;\n  padding-top: 12px;\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n.totals-grid .total-row .label {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n.totals-grid .total-row .value {\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n.totals-grid .total-row .value.discount {\n  color: var(--ion-color-warning);\n}\n.totals-grid .total-row .value.positive {\n  color: var(--ion-color-success);\n}\n.totals-grid .total-row .value.negative {\n  color: var(--ion-color-danger);\n}\n/* Action Section */\n.action-section {\n  position: sticky;\n  bottom: 16px;\n  z-index: 10;\n  margin-top: 24px;\n}\n.action-section .action-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .action-section .action-buttons {\n    gap: 8px;\n  }\n}\n/* Loading Overlay */\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loading-overlay ion-spinner {\n  --color: var(--ion-color-primary);\n  transform: scale(2);\n  margin-bottom: 20px;\n}\n.loading-overlay p {\n  color: white;\n  font-size: 1.1rem;\n  text-align: center;\n  margin: 0;\n}\n/* Search Highlighting */\nmark {\n  background-color: var(--ion-color-warning);\n  padding: 2px 4px;\n  border-radius: 2px;\n  font-weight: bold;\n}\n/* Empty State */\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--ion-color-medium);\n}\n.empty-state ion-icon {\n  font-size: 4rem;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty-state h3 {\n  margin: 16px 0 8px 0;\n  color: var(--ion-color-dark);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.9rem;\n}\n/* Card Styles */\nion-card {\n  margin: 16px 0;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\nion-card ion-card-header {\n  text-align: center;\n}\nion-card ion-card-header ion-card-title {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/* Responsive Design */\n@media (max-width: 768px) {\n  .container {\n    padding: 12px;\n  }\n\n  .items-table {\n    font-size: 0.9rem;\n  }\n  .items-table th, .items-table td {\n    padding: 8px 4px;\n  }\n\n  .totals-grid .total-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .totals-grid .total-row .value {\n    align-self: flex-end;\n  }\n}\n/* RTL Support */\n[dir=rtl] .totals-grid .total-row {\n  direction: rtl;\n}\n[dir=rtl] .action-buttons {\n  direction: rtl;\n}\n/* Focus States */\nion-input:focus-within,\nion-textarea:focus-within,\nion-select:focus-within {\n  --highlight-color: var(--ion-color-primary);\n}\n/* Button Styles */\nion-button {\n  --border-radius: 8px;\n}\nion-button[color=primary] {\n  font-weight: bold;\n}\nion-button[fill=outline] {\n  --border-width: 2px;\n}\n/* Edit Mode Specific Styles */\n.edit-mode-indicator {\n  background: var(--ion-color-warning);\n  color: var(--ion-color-warning-contrast);\n  padding: 8px;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2FsZXMtcmV0dXJuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0Esa0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBLGtCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUU7RUFQRjtJQVFJLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxRQUFBO0VBQ0Y7QUFDRjtBQUNFO0VBQ0UsT0FBQTtFQUNBLFNBQUE7QUFDSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUFGO0FBRUU7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFJQSxpQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQURKO0FBSUU7RUFDRSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBRko7QUFNSTtFQUNFLDhDQUFBO0FBSk47QUFPSTtFQUNFLDBEQUFBO0VBQ0EsMENBQUE7QUFMTjtBQVFJO0VBQ0UsK0NBQUE7QUFOTjtBQVdJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQVROO0FBY0EsbUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7QUFYRjtBQWFFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFYSjtBQWVBLHFCQUFBO0FBQ0E7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtBQVpGO0FBY0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBWko7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFiRjtBQWdCQSxrQkFBQTtBQUNBO0VBQ0UsMEZBQUE7RUFDQSwwQ0FBQTtBQWJGO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7QUFkSjtBQWdCSTtFQUNFLG1CQUFBO0FBZE47QUFpQkk7RUFDRSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFmTjtBQWtCSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QUFoQk47QUFtQkk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBakJOO0FBbUJNO0VBQ0UsK0JBQUE7QUFqQlI7QUFvQk07RUFDRSwrQkFBQTtBQWxCUjtBQXFCTTtFQUNFLDhCQUFBO0FBbkJSO0FBeUJBLG1CQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF0QkY7QUF3QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBdEJKO0FBd0JJO0VBTEY7SUFNSSxRQUFBO0VBckJKO0FBQ0Y7QUF5QkEsb0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQXRCRjtBQXdCRTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXRCSjtBQXlCRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQXZCSjtBQTJCQSx3QkFBQTtBQUNBO0VBQ0UsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUF4QkY7QUEyQkEsZ0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQXhCRjtBQTBCRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUF4Qko7QUEyQkU7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0FBekJKO0FBNEJFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBMUJKO0FBOEJBLGdCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQTNCRjtBQTZCRTtFQUNFLGtCQUFBO0FBM0JKO0FBNkJJO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQTNCTjtBQWdDQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSxhQUFBO0VBN0JGOztFQWdDQTtJQUNFLGlCQUFBO0VBN0JGO0VBK0JFO0lBQ0UsZ0JBQUE7RUE3Qko7O0VBaUNBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFFBQUE7RUE5QkY7RUFnQ0U7SUFDRSxvQkFBQTtFQTlCSjtBQUNGO0FBa0NBLGdCQUFBO0FBRUU7RUFDRSxjQUFBO0FBakNKO0FBb0NFO0VBQ0UsY0FBQTtBQWxDSjtBQXNDQSxpQkFBQTtBQUNBOzs7RUFHRSwyQ0FBQTtBQW5DRjtBQXNDQSxrQkFBQTtBQUNBO0VBQ0Usb0JBQUE7QUFuQ0Y7QUFxQ0U7RUFDRSxpQkFBQTtBQW5DSjtBQXNDRTtFQUNFLG1CQUFBO0FBcENKO0FBd0NBLDhCQUFBO0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBckNGIiwiZmlsZSI6ImVkaXQtc2FsZXMtcmV0dXJuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEVkaXQgU2FsZXMgUmV0dXJuIFBhZ2UgU3R5bGVzIC0gRm9sbG93aW5nIFNhbGVzIFJldHVybiBQYWdlIFBhdHRlcm4gKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIEhlYWRlciBTdHlsZXMgKi9cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogTGlzdCBDb250cm9scyAqL1xyXG4ubGlzdC1jb250cm9scyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGdhcDogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1uYXZpZ2F0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgXHJcbiAgLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLyogVGFibGUgU3R5bGVzICovXHJcbi50YWJsZS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbi5pdGVtcy10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIH1cclxuICBcclxuICB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIHRyIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmhpZ2hsaWdodGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCkgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnNlYXJjaC1tYXRjaCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogQWN0aW9uIEJ1dHRvbnMgKi9cclxuLmFjdGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogOHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBEaXNjb3VudCBTZWN0aW9uICovXHJcbi5kaXNjb3VudC1zZWN0aW9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICBcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2NvdW50LWRpc3BsYXkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLyogVG90YWxzIFN0eWxlcyAqL1xyXG4udG90YWxzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50b3RhbHMtZ3JpZCB7XHJcbiAgLnRvdGFsLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuZmluYWwtdG90YWwge1xyXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52YWx1ZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgXHJcbiAgICAgICYuZGlzY291bnQge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYucG9zaXRpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYubmVnYXRpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogQWN0aW9uIFNlY3Rpb24gKi9cclxuLmFjdGlvbi1zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJvdHRvbTogMTZweDtcclxuICB6LWluZGV4OiAxMDtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIFxyXG4gIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogTG9hZGluZyBPdmVybGF5ICovXHJcbi5sb2FkaW5nLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgXHJcbiAgaW9uLXNwaW5uZXIge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTZWFyY2ggSGlnaGxpZ2h0aW5nICovXHJcbm1hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICBwYWRkaW5nOiAycHggNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogRW1wdHkgU3RhdGUgKi9cclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICBcclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDE2cHggMCA4cHggMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBDYXJkIFN0eWxlcyAqL1xyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIFxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtcy10YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIFxyXG4gICAgdGgsIHRkIHtcclxuICAgICAgcGFkZGluZzogOHB4IDRweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRvdGFscy1ncmlkIC50b3RhbC1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiA0cHg7XHJcbiAgICBcclxuICAgIC52YWx1ZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogUlRMIFN1cHBvcnQgKi9cclxuW2Rpcj1cInJ0bFwiXSB7XHJcbiAgLnRvdGFscy1ncmlkIC50b3RhbC1yb3cge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEZvY3VzIFN0YXRlcyAqL1xyXG5pb24taW5wdXQ6Zm9jdXMtd2l0aGluLFxyXG5pb24tdGV4dGFyZWE6Zm9jdXMtd2l0aGluLFxyXG5pb24tc2VsZWN0OmZvY3VzLXdpdGhpbiB7XHJcbiAgLS1oaWdobGlnaHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLyogQnV0dG9uIFN0eWxlcyAqL1xyXG5pb24tYnV0dG9uIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICBcclxuICAmW2NvbG9yPVwicHJpbWFyeVwiXSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgJltmaWxsPVwib3V0bGluZVwiXSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogRWRpdCBNb2RlIFNwZWNpZmljIFN0eWxlcyAqL1xyXG4uZWRpdC1tb2RlLWluZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufSJdfQ== */";

/***/ }),

/***/ 22347:
/*!**************************************************************************!*\
  !*** ./src/app/edit-sales-return/edit-sales-return.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-title>تعديل مرتجعة المبيعات</ion-title>\r\n    \r\n    <ion-buttons slot=\"end\">\r\n      <app-currency-switcher></app-currency-switcher>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\" *ngIf=\"returnInvo && returnInvo.return_ref\">\r\n    \r\n    <!-- Return Information Section -->\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title class=\"section-title\">معلومات المرتجعة</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">رقم المرتجعة</ion-label>\r\n                <ion-input \r\n                  type=\"text\" \r\n                  [(ngModel)]=\"returnInvo.return_ref\" \r\n                  readonly>\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">الفاتورة الأصلية</ion-label>\r\n                <ion-input \r\n                  type=\"text\" \r\n                  [(ngModel)]=\"returnInvo.original_pay_ref\" \r\n                  readonly>\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">تاريخ المرتجعة</ion-label>\r\n                <ion-input \r\n                  type=\"date\" \r\n                  [(ngModel)]=\"returnInvo.return_date\">\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">نوع المرتجعة</ion-label>\r\n                <ion-chip [color]=\"isReturnAllItems ? 'success' : 'warning'\">\r\n                  {{ isReturnAllItems ? 'مرتجعة كاملة' : 'مرتجعة جزئية' }}\r\n                </ion-chip>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <!-- Customer Information Section -->\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title class=\"section-title\">معلومات العميل</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <app-account-selector\r\n          accountType=\"customer\"\r\n          placeholder=\"اختر حساب العميل\"\r\n          label=\"حساب العميل\"\r\n          [store_info]=\"store_info\"\r\n          [year]=\"year\"\r\n          [showAddButton]=\"false\"\r\n          [(ngModel)]=\"selectedAccount\"\r\n          (accountSelected)=\"onAccountSelected($event)\"\r\n          (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\r\n        </app-account-selector>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <!-- Return Reason Section -->\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title class=\"section-title\">سبب الإرجاع</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">اكتب سبب الإرجاع</ion-label>\r\n          <ion-textarea \r\n            [(ngModel)]=\"returnReason\" \r\n            placeholder=\"مثال: عيب في المنتج، عدم مطابقة المواصفات، إلخ...\"\r\n            rows=\"3\">\r\n          </ion-textarea>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <!-- Items Section -->\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <div class=\"section-header\">\r\n          <ion-card-title class=\"section-title\">أصناف المرتجعة</ion-card-title>\r\n          \r\n          <!-- Search and Sort Controls -->\r\n          <div class=\"list-controls\" *ngIf=\"itemList.length > 0\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">البحث في الأصناف</ion-label>\r\n              <ion-input \r\n                type=\"text\" \r\n                [(ngModel)]=\"searchTerm\" \r\n                (ionInput)=\"onSearchTermChange()\" \r\n                placeholder=\"ابحث عن صنف...\"\r\n                clearInput=\"true\">\r\n              </ion-input>\r\n            </ion-item>\r\n            \r\n            <div class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\r\n              <ion-button \r\n                fill=\"clear\" \r\n                size=\"small\" \r\n                (click)=\"navigateSearch('prev')\">\r\n                <ion-icon name=\"chevron-up\"></ion-icon>\r\n              </ion-button>\r\n              <span class=\"search-results\">{{ getSearchResultText() }}</span>\r\n              <ion-button \r\n                fill=\"clear\" \r\n                size=\"small\" \r\n                (click)=\"navigateSearch('next')\">\r\n                <ion-icon name=\"chevron-down\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n            \r\n            <ion-button \r\n              fill=\"outline\" \r\n              size=\"small\" \r\n              (click)=\"sortItemListAlphabetically()\">\r\n              <ion-icon name=\"list\" slot=\"start\"></ion-icon>\r\n              {{ isItemListSorted ? 'الترتيب الأصلي' : 'ترتيب أبجدي' }}\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-header>\r\n      \r\n      <ion-card-content *ngIf=\"itemList.length > 0\" class=\"ion-no-padding\">\r\n        <div class=\"table-container\">\r\n          <table class=\"items-table\">\r\n            <thead>\r\n              <tr>\r\n                <th>اسم الصنف</th>\r\n                <th>الكمية</th>\r\n                <th>سعر الإرجاع ({{ getCurrencySymbol() }})</th>\r\n                <th>المجموع ({{ getCurrencySymbol() }})</th>\r\n                <th>إجراء</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr \r\n                *ngFor=\"let item of getDisplayItemList(); let i = index\" \r\n                [attr.data-index]=\"i\"\r\n                [class.highlighted]=\"isHighlighted(i)\"\r\n                [class.search-match]=\"isSearchMatch(i)\">\r\n                <td>\r\n                  <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\r\n                </td>\r\n                <td>\r\n                  <ion-input \r\n                    *ngIf=\"showMe === i\" \r\n                    type=\"number\" \r\n                    [(ngModel)]=\"item.quantity\"\r\n                    (ionBlur)=\"hideMe(i); editCell(i)\"\r\n                    min=\"0.01\"\r\n                    step=\"0.01\">\r\n                  </ion-input>\r\n                  <span \r\n                    *ngIf=\"showMe !== i\" \r\n                    (click)=\"qtyClick(i)\">\r\n                    {{ item.quantity }}\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <ion-input \r\n                    *ngIf=\"showMe === i\" \r\n                    type=\"number\" \r\n                    [(ngModel)]=\"item.return_price\"\r\n                    (ionBlur)=\"hideMe(i); editCell(i)\"\r\n                    min=\"0\"\r\n                    step=\"0.01\">\r\n                  </ion-input>\r\n                  <span \r\n                    *ngIf=\"showMe !== i\" \r\n                    (click)=\"qtyClick(i)\">\r\n                    {{ item.return_price | currencyDisplay:'SDG':false }}\r\n                  </span>\r\n                </td>\r\n                <td>{{ item.tot | currencyDisplay:'SDG':false }}</td>\r\n                <td>\r\n                  <div class=\"action-buttons\">\r\n                    <ion-button \r\n                      fill=\"clear\" \r\n                      size=\"small\" \r\n                      color=\"danger\"\r\n                      (click)=\"deleteItem(i)\">\r\n                      <ion-icon name=\"trash-outline\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ion-card-content>\r\n      \r\n      <ion-card-content *ngIf=\"itemList.length === 0\">\r\n        <div class=\"empty-state\">\r\n          <ion-icon name=\"cube-outline\" size=\"large\"></ion-icon>\r\n          <h3>لا توجد أصناف مرتجعة</h3>\r\n          <p>لم يتم العثور على أصناف في هذه المرتجعة</p>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <!-- Discount Section -->\r\n    <ion-card class=\"discount-section\">\r\n      <ion-card-header>\r\n        <ion-card-title class=\"section-title\">الخصم</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">نوع الخصم</ion-label>\r\n                <ion-select \r\n                  [(ngModel)]=\"discountType\" \r\n                  (ionChange)=\"onDiscountTypeChange($event)\">\r\n                  <ion-select-option value=\"percentage\">نسبة مئوية (%)</ion-select-option>\r\n                  <ion-select-option value=\"amount\">مبلغ ثابت</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-item *ngIf=\"discountType === 'percentage'\">\r\n                <ion-label position=\"stacked\">نسبة الخصم (%)</ion-label>\r\n                <ion-input \r\n                  type=\"number\" \r\n                  [(ngModel)]=\"discountPerc\"\r\n                  (ionInput)=\"onPercentageDiscountChange($event)\"\r\n                  min=\"0\" \r\n                  max=\"100\" \r\n                  step=\"0.01\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"discountType === 'amount'\">\r\n                <ion-label position=\"stacked\">مبلغ الخصم ({{ getCurrencySymbol() }})</ion-label>\r\n                <ion-input \r\n                  type=\"number\" \r\n                  [(ngModel)]=\"discountAmount\"\r\n                  (ionInput)=\"onAmountDiscountChange($event)\"\r\n                  min=\"0\" \r\n                  step=\"0.01\">\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          \r\n          <!-- Discount Display -->\r\n          <ion-row *ngIf=\"returnInvo.discount > 0\">\r\n            <ion-col size=\"12\">\r\n              <div class=\"discount-display\">\r\n                <span *ngIf=\"discountType === 'percentage' && calculatedDiscountAmount > 0\">\r\n                  الخصم: {{ discountPerc }}% = {{ calculatedDiscountAmount | currencyDisplay:'SDG':false }}\r\n                </span>\r\n                <span *ngIf=\"discountType === 'amount' && calculatedDiscountPerc > 0\">\r\n                  الخصم: {{ discountAmount | currencyDisplay:'SDG':false }} = {{ calculatedDiscountPerc.toFixed(2) }}%\r\n                </span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <!-- Totals Section -->\r\n    <ion-card class=\"totals-card\">\r\n      <ion-card-header>\r\n        <ion-card-title class=\"section-title\">المجاميع</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <div class=\"totals-grid\">\r\n          <div class=\"total-row\">\r\n            <span class=\"label\">المجموع الفرعي:</span>\r\n            <span class=\"value\">{{ getSubtotal() | currencyDisplay:'SDG':false }}</span>\r\n          </div>\r\n          <div class=\"total-row\">\r\n            <span class=\"label\">الخصم:</span>\r\n            <span class=\"value discount\">{{ returnInvo.discount | currencyDisplay:'SDG':false }}</span>\r\n          </div>\r\n          <div class=\"total-row final-total\">\r\n            <span class=\"label\">المجموع الإجمالي:</span>\r\n            <span class=\"value positive\">{{ returnInvo.tot_pr | currencyDisplay:'SDG':false }}</span>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <!-- Action Buttons -->\r\n    <div class=\"action-section\">\r\n      <div class=\"action-buttons\">\r\n        <ion-button \r\n          expand=\"block\" \r\n          color=\"primary\" \r\n          [disabled]=\"isLoading()\"\r\n          (click)=\"updateReturn()\">\r\n          <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n          حفظ التعديلات\r\n        </ion-button>\r\n        \r\n        <ion-button \r\n          expand=\"block\" \r\n          color=\"danger\" \r\n          fill=\"outline\"\r\n          [disabled]=\"isLoading()\"\r\n          (click)=\"deleteReturn()\">\r\n          <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\r\n          حذف المرتجعة\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Loading State -->\r\n  <div *ngIf=\"isLoading()\" class=\"loading-overlay\">\r\n    <ion-spinner name=\"bubbles\"></ion-spinner>\r\n    <p>{{ currentLoadingMessage }}</p>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-sales-return_edit-sales-return_module_ts.js.map
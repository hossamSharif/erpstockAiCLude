"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sales_sales_module_ts"],{

/***/ 4022:
/*!********************************************************************************************!*\
  !*** ./src/app/component/insufficient-stock-dialog/insufficient-stock-dialog.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsufficientStockDialogComponent": () => (/* binding */ InsufficientStockDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _insufficient_stock_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insufficient-stock-dialog.component.html?ngResource */ 21291);
/* harmony import */ var _insufficient_stock_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insufficient-stock-dialog.component.scss?ngResource */ 47746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _purchase_purchase_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../purchase/purchase.page */ 47723);







let InsufficientStockDialogComponent = class InsufficientStockDialogComponent {
    constructor(modalController, alertController, router) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.router = router;
        this.insufficientItems = [];
    }
    ngOnInit() {
        console.log('Insufficient items:', this.insufficientItems);
        console.log('First item structure:', this.insufficientItems[0]);
        // Log all properties of first item to debug
        if (this.insufficientItems.length > 0) {
            const firstItem = this.insufficientItems[0];
            console.log('pay_price:', firstItem.pay_price);
            console.log('perch_price:', firstItem.perch_price);
            console.log('All properties:', Object.keys(firstItem));
        }
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    createPurchaseInvoice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Create alert to confirm
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد إنشاء فاتورة شراء',
                mode: 'ios',
                message: 'هل تريد إنشاء فاتورة شراء تتضمن الأصناف الناقصة؟',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'موافق',
                        handler: () => {
                            this.openPurchaseModal(this.insufficientItems);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openPurchaseModal(itemList) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Transform insufficient items to purchase items format
            const purchaseItems = itemList.map(item => ({
                id: item.item_id,
                item_name: item.item_name,
                item_desc: item.item_desc,
                part_no: item.part_no || '',
                brand: item.brand || '',
                model: item.model || '',
                item_unit: item.item_unit || '',
                realPerchPrice: item.perch_price,
                perch_price: item.pay_price || 0,
                pay_price: item.pay_price || 0,
                qty: item.shortage,
                tot: (item.pay_price * item.shortage).toFixed(2) || 0,
                availQty: item.shortage,
                aliasEn: item.aliasEn || ''
            }));
            try {
                const modal = yield this.modalController.create({
                    component: _purchase_purchase_page__WEBPACK_IMPORTED_MODULE_2__.PurchasePage,
                    componentProps: {
                        modalMode: true,
                        modalStatus: 'newInvoFromItemsPage',
                        modalSelectedItemsList: purchaseItems
                    },
                    cssClass: 'purchase-full-modal',
                    showBackdrop: true,
                    backdropDismiss: false
                });
                modal.onDidDismiss().then((result) => {
                    if (result.data && result.data.success) {
                        // Handle successful purchase completion
                        console.log('Purchase completed successfully:', result.data);
                        // Dismiss the current insufficient stock dialog
                        this.dismissModal();
                    }
                });
                yield modal.present();
            }
            catch (error) {
                console.error('Error opening purchase modal:', error);
                // Fallback to navigation method
                this.navigateToInvoicePage(itemList, 'purchase');
            }
        });
    }
    navigateToInvoicePage(itemList, type) {
        // Transform insufficient items to purchase items format
        const purchaseItems = itemList.map(item => ({
            id: item.item_id,
            item_name: item.item_name,
            item_desc: item.item_desc,
            part_no: item.part_no || '',
            brand: item.brand || '',
            model: item.model || '',
            item_unit: item.item_unit || '',
            realPerchPrice: item.perch_price,
            perch_price: item.pay_price || 0,
            pay_price: item.pay_price || 0,
            qty: item.shortage,
            tot: (item.pay_price * item.shortage).toFixed(2) || 0,
            availQty: item.shortage,
            aliasEn: item.aliasEn || ''
        }));
        // Navigate to purchase page with items
        let navigationExtras = {
            queryParams: {
                status: 'newInvoFromItemsPage',
                selectedItemsList: JSON.stringify(purchaseItems)
            },
            replaceUrl: true // This ensures the current route is replaced
        };
        // Dismiss modal first, then navigate with a small delay to ensure proper cleanup
        this.modalController.dismiss().then(() => {
            // Small delay to ensure modal is fully dismissed before navigation
            setTimeout(() => {
                // Navigate to purchase page with route replacement
                this.router.navigate(['folder/purchase'], navigationExtras);
            }, 100);
        });
    }
    getTotalShortage() {
        return this.insufficientItems.reduce((total, item) => total + item.shortage, 0);
    }
    getTotalValue() {
        return this.insufficientItems.reduce((total, item) => total + (item.pay_price * item.shortage), 0);
    }
    // Debug method - remove after testing
    getItemKeys(item) {
        return Object.keys(item).join(', ');
    }
};
InsufficientStockDialogComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
InsufficientStockDialogComponent.propDecorators = {
    insufficientItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    store_info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    user_info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    year: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
InsufficientStockDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-insufficient-stock-dialog',
        template: _insufficient_stock_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_insufficient_stock_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InsufficientStockDialogComponent);



/***/ }),

/***/ 80373:
/*!***********************************************!*\
  !*** ./src/app/sales/sales-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPageRoutingModule": () => (/* binding */ SalesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _sales_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.page */ 48027);




const routes = [
    {
        path: '',
        component: _sales_page__WEBPACK_IMPORTED_MODULE_0__.SalesPage
    }
];
let SalesPageRoutingModule = class SalesPageRoutingModule {
};
SalesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalesPageRoutingModule);



/***/ }),

/***/ 29146:
/*!***************************************!*\
  !*** ./src/app/sales/sales.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPageModule": () => (/* binding */ SalesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ 79208);
/* harmony import */ var _pipe2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe2 */ 36387);
/* harmony import */ var _pipe3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe3 */ 5022);
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-routing.module */ 80373);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _sales_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales.page */ 48027);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);
/* harmony import */ var _component_insufficient_stock_dialog_insufficient_stock_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/insufficient-stock-dialog/insufficient-stock-dialog.component */ 4022);













let SalesPageModule = class SalesPageModule {
};
SalesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_4__.ShareModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__.SalesPageRoutingModule
        ],
        declarations: [
            _sales_page__WEBPACK_IMPORTED_MODULE_5__.SalesPage,
            _pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe,
            _pipe2__WEBPACK_IMPORTED_MODULE_1__.FilterPipe2,
            _pipe3__WEBPACK_IMPORTED_MODULE_2__.FilterPipe3,
            _component_insufficient_stock_dialog_insufficient_stock_dialog_component__WEBPACK_IMPORTED_MODULE_7__.InsufficientStockDialogComponent
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
        ],
        exports: [
            _pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe,
            _pipe2__WEBPACK_IMPORTED_MODULE_1__.FilterPipe2,
            _pipe3__WEBPACK_IMPORTED_MODULE_2__.FilterPipe3
        ]
    })
], SalesPageModule);



/***/ }),

/***/ 48027:
/*!*************************************!*\
  !*** ./src/app/sales/sales.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPage": () => (/* binding */ SalesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _sales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.page.html?ngResource */ 81421);
/* harmony import */ var _sales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.page.scss?ngResource */ 3674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe */ 79208);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _services_account_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/account-communication.service */ 32724);
/* harmony import */ var _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/price-adjustment-dialog/price-adjustment-dialog.component */ 91872);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/currency.service */ 6612);
















let SalesPage = class SalesPage {
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
        this.radioVal2 = 0; // Keep this for initial/final invoice type
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
        // New workflow properties
        this.showJournalEntryModal = false;
        this.invoiceJournalData = null;
        this.customerBalance = null;
        // Loading state management
        this.isSaving = false;
        this.isDeleting = false;
        this.isUpdating = false;
        this.currentLoadingMessage = '';
        this.currentLoader = null;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentCustumerStatus: 0 };
        this.route.queryParams.subscribe(params => {
            if (params && params.payInvo) {
                this.status = 'initial';
                this.payInvo = JSON.parse(params.payInvo);
                //  this.payInvo.yearId = this.year.id
                console.log('params && params.payInvo', this.payInvo);
                if (this.payInvo.cust_id == null) {
                    // Account will be set via account-selector
                    this.sub_nameNew = JSON.parse(params.sub_name);
                }
                else {
                    this.selectedAccount.sub_name = JSON.parse(params.sub_name);
                }
                this.user_info = JSON.parse(params.user_info);
                this.store_info = JSON.parse(params.store_info);
                this.itemList = JSON.parse(params.itemList);
                this.resortItemList();
                //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name )
                this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100).toFixed(2);
                this.getAppInfoCase2();
            }
            else if (params['status'] === 'newInvoFromItemsPage' && params['selectedItemsList']) {
                console.log('New invoice from items page');
                this.statusFromRoute = params['status'];
                this.pendingItemsFromStock = JSON.parse(params['selectedItemsList']);
                this.showBackButton = true; // Show back button when coming from items page
                console.log('Received items from stock page:', this.pendingItemsFromStock);
            }
        });
        this.printArr.push({
            'payInvo': "",
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
            if (id && this.payInvo) {
                console.log('Customer selected in sales, setting cust_id:', id);
                this.payInvo.cust_id = id;
                this.payInvo.sub_name = account.sub_name;
                this.selectedAccount = account;
                console.log('Sales payInvo updated:', this.payInvo);
            }
        });
        if (this.status == 'new') {
            this.getAppInfo();
            // this.newLogic()
        }
        else if (this.status == 'initial') {
            this.getAppInfoCase2();
            this.radioVal2 = 0;
        }
        // this.getStockItems()
    }
    ngOnDestroy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
    presentPopover(e) {
        //console.log('preent me', e)
        this.popover.event = e;
        this.isOpen = true;
        this.clear();
        this.searchResult = this.items;
        setTimeout(() => {
            this.setFocusOnInput('popInput');
        }, 2000);
    }
    presentPopoverNotif(e) {
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif.event = e;
        this.isOpenNotif = true;
    }
    didDissmis() {
        this.isOpen = false;
        //console.log('dismissOver')
        this.setFocusOnInput('qtyId');
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _pipe__WEBPACK_IMPORTED_MODULE_6__.FilterPipe;
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
                aliasEn: "",
                tax: 0,
                imageUrl: ""
            };
        }
        else {
            this.searchTerm = "";
        }
    }
    getAllStockItemsWithouteCounts() {
        console.log('getAllStockItemsWithouteCounts');
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                console.log('getAllStockItemsWithouteCounts', this.year.id);
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
    ///
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
                "perch_price": selectedItem.perch_price,
                "tax": selectedItem.tax,
                "imageUrl": selectedItem.imageUrl
            });
        }
        // Reset discount and recalculate totals
        this.discountPerc = 0;
        this.payInvo.discount = 0;
        this.getTotal();
        this.updateSortedList();
        // this.presentToast('تم إضافة الصنف بنجاح', 'success');
    }
    presentAlertConfirm(initial) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let msg = 'هل تريد طباعة فاتورة ؟ ';
            if (initial) {
                msg = 'هل تريد حذف السجل ؟ ';
            }
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
                            //console.log('Confirm Cancel: blah');
                            // No need to reset - already reset after save
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            if (initial) {
                                this.deleteSalesInvoInit();
                            }
                            else {
                                this.presentModal(this.printArr, 'sales');
                                // No need to reset - already reset after save
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    Print(elem) {
        this.printMode = true;
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write('<html><head>');
        mywindow.document.write('<style type="text/css">');
        mywindow.document.write('.sumsDiv{border-style: solid;border-color: gray;border-width: .5px;} .flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;}.ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }');
        mywindow.document.write('</style></head><body>');
        mywindow.document.write(document.getElementById(elem).innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/ 
        mywindow.print();
        mywindow.close();
        this.printMode = false;
        return true;
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
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.items = response;
                if (this.items.length == 0 || !this.items) {
                    this.getAllStockItemsWithouteCounts();
                }
                else {
                }
            }
        });
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                this.prepareInvo();
            }
        });
    }
    getAppInfoCase2() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
                //console.log(this.user_info) 
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
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.items = response;
            }
        });
    }
    // ne logic 
    newLogic() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            //console.log('new logic')
            yield this.getAppInfo();
            yield this.prepareInvo();
        });
    }
    radioChange2(ev, form) {
        console.log(ev.target.value);
        console.log(this.status);
        if (form == 'from') {
            if (ev.target.value == 1 && this.status == 'initial') {
                console.log(this.status);
                this.status = 'toFinal';
                this.payInvo.yearId = this.year.id;
                if (this.itemList.length > 0) {
                    this.itemList.forEach(element => {
                        element.yearId = this.year.id;
                    });
                }
                console.log('convert invo to final', this.status);
            }
            else if (ev.target.value == 0 && this.status == 'toFinal') {
                this.status = 'initial';
                console.log('from final to initial', this.status);
            }
        }
    }
    prepareInvo() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentCustumerStatus: 0 };
        this.sub_nameNew = "";
        // radioVal removed - using only account-selector
        this.radioVal2 = 0;
        this.payInvo = { pay_id: undefined, pay_ref: 0, store_id: "", tot_pr: 0, pay: 0, pay_date: "", pay_time: "", user_id: "", cust_id: null, pay_method: "", discount: 0, changee: 0, sub_name: "", payComment: "", nextPay: null, yearId: this.year.id };
        this.discountPerc = 0;
        // Clear discount related variables - use setTimeout to prevent expression change error
        setTimeout(() => {
            this.discountType = 'percentage';
            this.discountAmount = 0;
            this.calculatedDiscountPerc = 0;
            this.calculatedDiscountAmount = 0;
            this.cdr.detectChanges();
        }, 0);
        let d = new Date;
        // this.payInvo.pay_date  = d.getMonth().toString() + "/" + d.getDay().toString()+ "/" + d.getFullYear().toString() 
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss');
        this.generateRandom();
        this.payInvo.store_id = this.store_info.id;
        this.payInvo.user_id = this.user_info.id;
        this.payInvo.yearId = this.year.id;
        //console.log(this.payInvo) 
        // Clear itemList and related arrays
        this.itemList = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        // Clear search related variables
        this.searchTerm = '';
        this.searchMatches = [];
        this.highlightedIndex = -1;
        if (this.statusFromRoute === 'newInvoFromItemsPage' && this.pendingItemsFromStock.length > 0) {
            //console.log('Pending items from stock page:', this.pendingItemsFromStock);
            this.pendingItemsFromStock.forEach(item => {
                this.itemList.push({
                    "id": 'NULL',
                    "pay_ref": this.payInvo.pay_ref,
                    "item_name": item.item_name,
                    "pay_price": item.pay_price,
                    "quantity": +item.qty,
                    "tot": (+item.qty * +item.pay_price).toFixed(2),
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +item.id,
                    "dateCreated": this.datePipe.transform(d, 'dd-MM-YYYY'),
                    "perch_price": item.perch_price,
                    "tax": item.tax,
                    "imageUrl": item.imageUrl
                });
            });
            this.statusFromRoute = '';
            this.pendingItemsFromStock = []; // Reset status after processing
            this.getTotal();
        }
    }
    setFocusOnInput(Input) {
        //console.log('setFocusOnInput')
        if (Input == 'dst') {
            this.nameField.nativeElement.focus();
        }
        else if (Input == 'dstPop') {
            this.dstPop.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.items;
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
        //console.log('dsdfsdf',event)
    }
    generateRandom() {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString();
        this.payInvo.pay_ref = this.store_info.store_ref + randomsNumber;
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
            aliasEn: item.aliasEn,
            tax: item.tax,
            imageUrl: item.imageUrl
        };
        this.searchTerm = item.item_name;
        //console.log( this.selectedItem); 
        this.didDissmis();
        //perform calculate here so moataz can get the qty
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
                aliasEn: fl[0]['aliasEn'],
                tax: fl[0]['tax'],
                imageUrl: fl[0]['imageUrl']
            };
            //console.log( this.selectedItem);
            this.setFocusOnInput('qtyId');
        }
        else {
            this.presentToast('خطأ في اسم الصنف ', 'danger');
            this.selectedItem.item_name = "";
            this.selectedItem.item_desc = "";
        }
    }
    qtyhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        let fl = [];
        if (this.itemList.length > 0) {
            fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name);
            if (fl.length > 0) {
                //console.log(fl)
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
        if (this.discountPerc > 0) {
            this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
        }
        this.payInvo.changee = +(this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value;
    }
    onDiscountTypeChange(event) {
        this.discountType = event.detail.value;
        // Reset discount values when switching types
        this.discountPerc = 0;
        this.discountAmount = 0;
        this.payInvo.discount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.calculateChange();
        // Trigger change detection to prevent ExpressionChangedAfterItHasBeenCheckedError
        this.cdr.detectChanges();
    }
    onPercentageDiscountChange(event) {
        this.discountPerc = event.target.value || 0;
        if (this.payInvo.tot_pr > 0) {
            // Calculate discount amount based on percentage
            this.calculatedDiscountAmount = this.roundToTwo(+this.payInvo.tot_pr * +this.discountPerc / 100);
            this.payInvo.discount = this.calculatedDiscountAmount;
            this.calculateChange();
        }
    }
    onAmountDiscountChange(event) {
        this.discountAmount = event.target.value || 0;
        if (this.payInvo.tot_pr > 0 && this.discountAmount > 0) {
            // Calculate discount percentage based on amount
            this.calculatedDiscountPerc = this.roundToTwo((+this.discountAmount / +this.payInvo.tot_pr) * 100);
            this.payInvo.discount = +this.discountAmount;
            this.calculateChange();
        }
        else {
            this.calculatedDiscountPerc = 0;
            this.payInvo.discount = 0;
            this.calculateChange();
        }
    }
    /**
     * Helper method for consistent rounding to 2 decimal places
     * Uses Math.round for precise rounding without floating-point issues
     */
    roundToTwo(num) {
        return Math.round(num * 100) / 100;
    }
    calculateChange() {
        this.payInvo.changee = this.roundToTwo((+this.payInvo.tot_pr - +this.payInvo.discount) - this.payInvo.pay);
    }
    // Update your existing discountChange method
    discountChange(ev) {
        // Keep this for backward compatibility if needed
        this.discountPerc = this.roundToTwo((+this.payInvo.discount / +this.payInvo.tot_pr) * 100);
        this.payInvo.changee = this.roundToTwo((+this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay);
    }
    // Update your existing discountPerChange method
    discountPerChange(ev) {
        // Keep this for backward compatibility if needed
        this.payInvo.discount = this.roundToTwo(+this.payInvo.tot_pr * +this.discountPerc / 100);
        this.payInvo.changee = this.roundToTwo((+this.payInvo.tot_pr - this.payInvo.discount) - this.payInvo.pay);
    }
    // Update your getTotal method to reset discount calculations
    getTotal() {
        // Calculate sum from item totals
        let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
        sum = this.roundToTwo(sum);
        // Store as numbers (not strings) for consistent type handling
        this.payInvo.tot_pr = this.roundToTwo(sum - +this.payInvo.discount);
        this.payInvo.changee = this.roundToTwo(this.payInvo.tot_pr - this.payInvo.pay);
        // Recalculate discount labels when total changes
        if (this.discountType === 'percentage' && this.discountPerc > 0) {
            this.calculatedDiscountAmount = this.roundToTwo(sum * +this.discountPerc / 100);
        }
        else if (this.discountType === 'amount' && this.discountAmount > 0) {
            this.calculatedDiscountPerc = this.roundToTwo((+this.discountAmount / sum) * 100);
        }
    }
    // getTotal(){
    //   let sum = this.itemList.reduce( (acc, obj)=> { return acc + +obj.tot; }, 0);
    //   //console.log('sum', sum)
    //   this.payInvo.tot_pr = sum - +this.payInvo.discount 
    //   this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay
    //   this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2)
    //   this.payInvo.changee = this.payInvo.changee.toFixed(2)
    // } 
    // discountChange(ev){
    //   //console.log('discountChange' ,ev); 
    //   this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
    //   this.payInvo.changee = +( this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay
    // }
    // discountPerChange(ev){
    //   //console.log('discountPerChange',ev);
    //   this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
    //   this.payInvo.changee = +( this.payInvo.tot_pr -  this.payInvo.discount ) - this.payInvo.pay
    // }
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
        // Reset discount but preserve pay amount
        this.discountPerc = 0;
        this.payInvo.discount = 0;
        this.getTotal();
        this.updateSortedList();
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
    refresh(item) {
        console.log('refreshPerform');
        this.getAllStockItemsWithouteCounts();
    }
    addTolist() {
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
            this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
        }
        else {
            let fl = [];
            if (this.itemList.length > 0) {
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
                    "perch_price": this.selectedItem.perch_price,
                    "tax": this.selectedItem.tax,
                    "imageUrl": this.selectedItem.imageUrl
                });
            }
            else {
                //console.log(this.itemList);
                //console.log(fl[0].quantity);
                //console.log(+this.selectedItem.qty);
                this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty;
                let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
                this.itemList[index].quantity = +this.selectedItem.qty;
                this.itemList[index].tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
                // this.itemList[index].tot.toFixed(2)
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
                aliasEn: "",
                tax: 0,
                imageUrl: ""
            };
            this.discountPerc = 0;
            this.payInvo.discount = 0;
            this.getTotal();
            this.setFocusOnInput('dstPop');
        }
    }
    qtyClick(i) {
        //console.log(i)
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
            item.pay_price === itemToEdit.pay_price);
        if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].pay_price > 0) {
            // Update both the display list and original list
            displayList[i].tot = +displayList[i].quantity * displayList[i].pay_price;
            this.itemList[originalIndex].quantity = displayList[i].quantity;
            this.itemList[originalIndex].pay_price = displayList[i].pay_price;
            this.itemList[originalIndex].tot = displayList[i].tot;
            // Reset discount but preserve pay amount
            this.discountPerc = 0;
            this.payInvo.discount = 0;
            this.hideMe(i);
            this.getTotal();
        }
        else {
            this.presentToast("خطأ في الإدخال ", "danger");
        }
    }
    validate() {
        // Simplified validation - no more radio dependencies
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        else if (!this.payInvo.cust_id || !this.selectedAccount.sub_name) {
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
    saveIntial() {
        // Account info already set by account-selector service  
        // check if the invoice is exist
        if (this.initialInvoices.length > 0) {
            this.initialInvoices = this.initialInvoices.filter(x => x['payInvo'].pay_ref != this.payInvo.pay_ref);
        }
        this.initialInvoices.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
            this.printArr = [];
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew,
                "user_name": this.user_info.full_name,
                "sub_balanse": this.selectedAccount.sub_balance,
                "balanceStatus": this.selectedAccount.currentCustumerStatus
            });
            //console.log(this.printArr)
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
            // Use the new reset method for consistency
            // Note: resetPageAfterInvoice will be called after print dialog
            // No need to call it here as it will be handled by presentAlertConfirm
        });
    }
    resortItemList() {
        this.isItemListSorted = false;
        this.sortItemListAlphabetically();
    }
    saveInvoInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // Show loading indicator
            yield this.showLoading('جاري حفظ الفاتورة المبدئية...', 'saving');
            try {
                // Optimized: Save invoice and items together in single API call
                const invoiceWithItems = {
                    invoice: this.payInvo,
                    items: this.itemList
                };
                console.log('Sending invoice data to saveInvoInit:', invoiceWithItems);
                console.log('PayInvo object:', this.payInvo);
                console.log('ItemList array:', this.itemList);
                this.api.saveSalesInvoInitWithItems(invoiceWithItems).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Initial invoice and items saved:', response);
                    yield this.hideLoading();
                    this.handleSaveSuccess();
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Save error:', err);
                    console.log('Error details:', err);
                    yield this.hideLoading();
                    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in saveInvoInit:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء الحفظ', 'danger');
            }
        });
    }
    deleteInitial() {
        if (this.initialInvoices.length > 0) {
            this.initialInvoices = this.initialInvoices.filter(x => x['payInvo'].pay_ref != this.payInvo.pay_ref);
        }
        this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
            this.presentToast('تم الحذف بنجاح', 'success');
            this.status = 'new';
            this.prepareInvo();
        });
    }
    deleteSalesInvoInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // Always show loading for delete operations
            yield this.showLoading('جاري حذف الفاتورة...', 'deleting');
            try {
                const deletionData = {
                    pay_id: this.payInvo.pay_id,
                    pay_ref: this.payInvo.pay_ref
                };
                this.api.deleteSalesInvoInitWithItems(deletionData).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Delete response:', data);
                    if (data['success']) {
                        yield this.hideLoading();
                        // Show success message for all cases
                        this.presentToast('تم الحذف بنجاح', 'success');
                        if (this.status != 'toFinal') {
                            this.prepareInvo();
                            // Navigate back to previous page after successful deletion
                            setTimeout(() => {
                                this.back();
                            }, 1500); // Give time for toast to show
                        }
                    }
                    else {
                        yield this.hideLoading();
                        this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                    }
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Delete error:', err);
                    yield this.hideLoading();
                    this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in deleteSalesInvoInit:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء الحذف', 'danger');
            }
        });
    }
    deleteSalesitemListInit() {
        this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                if (this.status != 'toFinal') {
                    this.presentToast('تم الحذف بنجاح', 'success');
                    this.prepareInvo();
                }
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    save() {
        let d = this.payInvo.pay_date;
        this.payInvo.sub_name = this.selectedAccount.sub_name;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        if (this.validate() == true) {
            // Check quantity validation for final invoices (radioVal2 = 1)
            if (this.radioVal2 == 1) {
                this.validateStockQuantityBeforeSave();
            }
            else {
                this.proceedWithSave();
            }
        }
    }
    validateStockQuantityBeforeSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري التحقق من الكميات المتوفرة...', 'saving');
            try {
                console.log('validateStockQuantityBeforeSave', this.itemList);
                // Prepare item list for validation
                const itemsToValidate = this.itemList.map(item => ({
                    item_id: item.item_id,
                    quantity: item.quantity
                }));
                console.log('item', itemsToValidate);
                this.api.validateStockQuantity(this.store_info.id, itemsToValidate).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    if (response.success && response.valid) {
                        // All items have sufficient stock, proceed with save
                        this.proceedWithSave();
                    }
                    else if (response.success && !response.valid) {
                        // Some items have insufficient stock, show dialog
                        console.log('response insuffiecnt', response.insufficient_items);
                        this.showInsufficientStockDialog(response.insufficient_items);
                    }
                    else {
                        // API error
                        this.presentToast('خطأ في التحقق من الكميات المتوفرة', 'danger');
                    }
                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.hideLoading();
                    console.error('Stock validation error:', error);
                    this.presentToast('خطأ في الاتصال أثناء التحقق من الكميات', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in validateStockQuantityBeforeSave:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء التحقق من الكميات', 'danger');
            }
        });
    }
    showInsufficientStockDialog(insufficientItems) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { InsufficientStockDialogComponent } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../component/insufficient-stock-dialog/insufficient-stock-dialog.component */ 4022));
            const modal = yield this.modalController.create({
                component: InsufficientStockDialogComponent,
                componentProps: {
                    insufficientItems: insufficientItems,
                    store_info: this.store_info,
                    user_info: this.user_info,
                    year: this.year
                },
                cssClass: 'insufficient-stock-modal',
                backdropDismiss: false
            });
            return yield modal.present();
        });
    }
    proceedWithSave() {
        // No need to show loading here - each save method handles its own loading
        // Simplified save logic - account already selected via account-selector
        if (this.radioVal2 == 0 && this.status == 'new') {
            // Initial invoice
            this.saveInvoInit();
        }
        else if (this.radioVal2 == 0 && this.status == 'initial') {
            // Update initial invoice
            this.updateInitInvo();
        }
        else {
            // Final invoice - account already exists with valid ID
            this.saveInvo();
        }
    }
    saveLogHistory() {
        //let mdata =  this.prepareLogHistory(itemData , firstq , role) 
        //console.log('this.logHistoryArr[0]',this.logHistoryArr[0])
        let role;
        let cust;
        let invo;
        if (this.logHistoryArr.length > 1) {
            invo = this.logHistoryArr[1];
            cust = this.logHistoryArr[0];
            role = 'new account';
        }
        else {
            invo = this.logHistoryArr[0];
            role = undefined;
        }
        this.api.saveLogHistoryMultiSales(invo, cust, role).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.logHistoryArr = [];
                this.presentAlertConfirm();
                this.presentToast('تم الحفظ بنجاح', 'success');
                // this.getStockItems()
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    // Centralized loading management methods
    showLoading(message, operationType = 'saving') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
    // Enhanced loading with timeout protection
    showLoadingWithTimeout(message, operationType = 'saving', timeoutMs = 30000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading(message, operationType);
            // Set a safety timeout
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                if (this.isLoading()) {
                    console.warn(`Operation ${operationType} timed out after ${timeoutMs}ms`);
                    yield this.hideLoading();
                    this.presentToast('العملية تستغرق وقتاً أطول من المعتاد، يرجى المحاولة مرة أخرى', 'warning');
                }
            }), timeoutMs);
        });
    }
    // Legacy method - updated to use new system
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading(msg || 'جاري المعالجة...', 'saving');
        });
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
    // Method to reset page to initial state after invoice operations
    resetPageAfterInvoice() {
        console.log('Resetting page after invoice operation');
        this.prepareInvo();
        this.status = 'new';
        // Navigate back if coming from items page
        if (this.showBackButton) {
            setTimeout(() => {
                this.goBack();
            }, 1000); // Give time for reset to complete
        }
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAllStockItemsWithouteCounts();
        });
    }
    back() {
        this._location.back();
    }
    updateInitInvo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تحديث الفاتورة المبدئية...', 'updating');
            try {
                this.api.updateInitSalesInvo(this.payInvo).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Invoice header updated, proceeding to update items...');
                    // Don't hide loading yet, continue to next step
                    yield this.deleteSalesitemListInit4update();
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Update invoice error:', err);
                    yield this.hideLoading();
                    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in updateInitInvo:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء التحديث', 'danger');
            }
        });
    }
    deleteSalesitemListInit4update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Old items deleted, proceeding to save new items...');
                    if (data['message'] != 'Post Not Deleted') {
                        yield this.saveitemListinit();
                    }
                    else {
                        yield this.hideLoading();
                        this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                    }
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Delete items error:', err);
                    yield this.hideLoading();
                    this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in deleteSalesitemListInit4update:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء حذف البيانات', 'danger');
            }
        });
    }
    preparenewaccount() {
        if (this.selectedAccount.sub_name.length > 0 && this.selectedAccount.id == null) {
            // this.selectedAccount.sub_name = this.payInvo.sub_name
        }
        else {
            //console.log('slwcted from drop' ) 
            this.selectedAccount.sub_name = this.sub_nameNew;
            this.payInvo.sub_name = this.selectedAccount.sub_name;
        }
        this.selectedAccount.id = null;
        this.selectedAccount.ac_id = 1;
        this.selectedAccount.sub_type = "debit";
        this.selectedAccount.sub_code = null;
        this.selectedAccount.sub_balance = "0";
        this.selectedAccount.cat_id = 1;
        this.selectedAccount.cat_name = 'العملاء';
        this.selectedAccount.store_id = this.store_info.id;
    }
    doubleCheckForFinalStatus() {
        this.route.queryParams.subscribe(params => {
            if (params && params.payInvo) {
                this.status = 'toFinal';
                this.payInvo = JSON.parse(params.payInvo);
                this.payInvo.yearId = this.year.id;
                this.itemList.forEach(element => {
                    element.yearId = this.payInvo.yearId;
                });
            }
        });
    }
    saveInvo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // Show loading indicator
            yield this.showLoading('جاري حفظ الفاتورة النهائية...', 'saving');
            try {
                this.doubleCheckForFinalStatus();
                // Optimized: Save invoice and items together in single API call
                const invoiceWithItems = {
                    invoice: this.payInvo,
                    items: this.itemList
                };
                console.log('status', this.status, invoiceWithItems);
                this.api.saveSalesInvoWithItems(invoiceWithItems).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Final invoice and items saved:', response);
                    yield this.hideLoading();
                    this.handleSaveSuccess();
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Save error:', err);
                    yield this.hideLoading();
                    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in saveInvo:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء الحفظ', 'danger');
            }
        });
    }
    // Shared success handler for optimized save process
    handleSaveSuccess() {
        this.presentToast('تم الحفظ بنجاح', 'success');
        // Check if invoice was converted from initial to final and delete initial invoice
        if (this.status == 'toFinal') {
            console.log('case delete intial', this.status);
            this.deleteSalesInvoInit();
        }
        // Save invoice type before reset (needed to determine which dialog to show)
        const savedInvoiceType = this.radioVal2;
        // Prepare print data with current invoice information (DEEP COPY before reset)
        this.printArr = [];
        this.printArr.push({
            'payInvo': Object.assign({}, this.payInvo),
            'itemList': [...this.itemList],
            'selectedAccount': Object.assign({}, this.selectedAccount),
            'sub_nameNew': this.sub_nameNew,
            "user_name": this.user_info.full_name,
            "sub_balanse": this.selectedAccount.sub_balance,
            "balanceStatus": this.selectedAccount.currentCustumerStatus
        });
        console.log('Print array prepared:', this.printArr);
        // RESET PAGE IMMEDIATELY after save to allow new invoice creation
        // This generates new pay_ref, clears itemList, and resets all fields
        this.resetPageAfterInvoice();
        // For final invoices, show journal entry confirmation
        // Use saved value since radioVal2 was reset
        if (savedInvoiceType == 1) {
            this.presentJournalEntryConfirmation();
        }
        else {
            // For initial invoices, go directly to print confirmation
            this.presentAlertConfirm();
        }
        // Loading already dismissed by individual save methods
    }
    // Legacy method - kept for compatibility but no longer used in optimized flow
    saveitemList() {
        this.api.saveSalesitemList(this.itemList).subscribe(data => {
            //console.log(data)  
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.printArr = [];
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew,
                "user_name": this.user_info.full_name,
                "sub_balanse": this.selectedAccount.sub_balance,
                "balanceStatus": this.selectedAccount.currentCustumerStatus
            });
            //console.log(this.printArr)
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.prepareInvo();
            this.status = 'new';
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    // Legacy method - updated for new loading system
    saveitemListinit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.api.saveSalesitemListInit(this.itemList).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Items saved successfully in update flow');
                    yield this.hideLoading();
                    this.printArr = [];
                    this.printArr.push({
                        'payInvo': this.payInvo,
                        'itemList': this.itemList,
                        'selectedAccount': this.selectedAccount,
                        'sub_nameNew': this.sub_nameNew,
                        "user_name": this.user_info.full_name,
                        "sub_balanse": this.selectedAccount.sub_balance,
                        "balanceStatus": this.selectedAccount.currentCustumerStatus
                    });
                    this.presentAlertConfirm();
                    this.presentToast('تم التحديث بنجاح', 'success');
                    // Use the new reset method for consistency
                    // Note: resetPageAfterInvoice will be called after print dialog
                    // No need to call it here as it will be handled by presentAlertConfirm
                }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('Save items error:', err);
                    yield this.hideLoading();
                    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                }));
            }
            catch (error) {
                yield this.hideLoading();
                console.error('Unexpected error in saveitemListinit:', error);
                this.presentToast('حدث خطأ غير متوقع أثناء حفظ البيانات', 'danger');
            }
        });
    }
    goBack() {
        this._location.back();
    }
    // New methods for journal entry workflow
    presentJournalEntryConfirmation() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // Use saved print data since page has been reset
            const savedInvoice = (_a = this.printArr[0]) === null || _a === void 0 ? void 0 : _a.payInvo;
            const totalAfterDiscount = savedInvoice ? (+savedInvoice.tot_pr - +savedInvoice.discount) : 0;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد استلام المبلغ',
                mode: 'ios',
                message: `هل تريد استلام مبلغ ${totalAfterDiscount.toFixed(2)} من العميل الآن؟`,
                buttons: [
                    {
                        text: 'لا، انتقل للطباعة مباشرة',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.presentAlertConfirm();
                            // No need to cleanup - already reset after save
                        }
                    },
                    {
                        text: 'نعم، استلام المبلغ',
                        handler: () => {
                            this.showJournalEntryDialog();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showJournalEntryDialog() {
        // Use saved print data since page has been reset
        const savedData = this.printArr[0];
        const savedInvoice = savedData === null || savedData === void 0 ? void 0 : savedData.payInvo;
        const totalAfterDiscount = savedInvoice ? (+savedInvoice.tot_pr - +savedInvoice.discount) : 0;
        this.invoiceJournalData = {
            invoiceAmount: totalAfterDiscount,
            totalAfterDiscount: totalAfterDiscount,
            customerAccount: (savedData === null || savedData === void 0 ? void 0 : savedData.selectedAccount) || this.selectedAccount,
            customerBalance: (savedData === null || savedData === void 0 ? void 0 : savedData.sub_balanse) || this.customerBalance,
            invoiceRef: savedInvoice === null || savedInvoice === void 0 ? void 0 : savedInvoice.pay_ref,
            invoiceType: 'sales',
            invoiceDate: savedInvoice === null || savedInvoice === void 0 ? void 0 : savedInvoice.pay_date,
            store_info: this.store_info,
            user_info: this.user_info,
            year: this.year
        };
        this.showJournalEntryModal = true;
    }
    onJournalSaved(success) {
        this.showJournalEntryModal = false;
        if (success) {
            this.presentToast('تم حفظ قيد اليومية بنجاح', 'success');
        }
        // Show print confirmation
        setTimeout(() => {
            this.presentAlertConfirm();
        }, 500);
        // No need to cleanup - already reset after save
    }
    onJournalCancelled() {
        this.showJournalEntryModal = false;
        // Show print confirmation
        setTimeout(() => {
            this.presentAlertConfirm();
        }, 500);
        // No need to cleanup - already reset after save
    }
    cleanupAfterInvoice() {
        // Use the consistent reset method
        this.resetPageAfterInvoice();
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
            // Update invoice with selected account
            this.payInvo.cust_id = account.id;
            this.payInvo.sub_name = account.sub_name;
            console.log('Account selected in sales:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            // Store the balance for invoice journal entry
            this.customerBalance = balance;
            // Update the current customer status based on balance
            this.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
            console.log('Account balance loaded in sales:', balance);
        }
    }
    // Date picker is now handled by ion-input type="date" directly in template
    openPriceAdjustmentDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
                component: _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_9__.PriceAdjustmentDialogComponent,
                cssClass: 'price-adjustment-modal',
                componentProps: {
                    itemsList: itemsToPass,
                    mode: 'sales'
                }
            });
            modal.onDidDismiss().then((result) => {
                if (result.data) {
                    this.handlePriceAdjustmentResult(result.data);
                }
            });
            return yield modal.present();
        });
    }
    handlePriceAdjustmentResult(updatedItems) {
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
        // Recalculate totals using existing method
        this.getTotal();
        this.presentToast('تم تعديل الأسعار بنجاح', 'success');
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
};
SalesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_7__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController },
    { type: _services_account_communication_service__WEBPACK_IMPORTED_MODULE_8__.AccountCommunicationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_10__.CurrencyService }
];
SalesPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ["dst",] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['dstPop',] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['qtyId',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['popover',] }],
    popoverNotif: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['popoverNotif',] }]
};
SalesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-sales',
        template: _sales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalesPage);



/***/ }),

/***/ 47746:
/*!*********************************************************************************************************!*\
  !*** ./src/app/component/insufficient-stock-dialog/insufficient-stock-dialog.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ion-color-danger: #e74c3c;\n  --ion-color-warning: #f39c12;\n  --ion-color-success: #27ae60;\n  --ion-color-primary: #3498db;\n}\n\n.title-icon {\n  margin-left: 8px;\n  font-size: 1.2em;\n}\n\n/* Alert Section */\n\n.alert-section {\n  margin-bottom: 16px;\n}\n\n.alert-message {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.alert-message .alert-icon {\n  font-size: 2em;\n  margin-left: 12px;\n  min-width: 40px;\n}\n\n.alert-message .alert-text {\n  margin: 0;\n  font-size: 1.1em;\n  line-height: 1.4;\n  color: var(--ion-color-medium-shade);\n}\n\n/* Summary Section */\n\n.summary-section {\n  margin-bottom: 16px;\n}\n\n.summary-item {\n  text-align: center;\n  padding: 8px;\n}\n\n.summary-item .summary-label {\n  display: block;\n  font-size: 0.9em;\n  color: var(--ion-color-medium);\n  margin-bottom: 4px;\n}\n\n.summary-item .summary-value {\n  display: block;\n  font-size: 1.3em;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n\n/* Items Section */\n\n.items-section {\n  flex: 1;\n  margin-bottom: 16px;\n}\n\n.items-container {\n  max-height: 400px;\n  overflow-y: auto;\n  border-radius: 8px;\n}\n\n.items-container::-webkit-scrollbar {\n  width: 4px;\n}\n\n.items-container::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n  border-radius: 4px;\n}\n\n.items-container::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 4px;\n}\n\n.item-row {\n  --border-radius: 8px;\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-start: 16px;\n  --inner-padding-end: 16px;\n  margin-bottom: 8px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.item-row.even-row {\n  --background: var(--ion-color-light-tint);\n}\n\n.item-row:hover {\n  --background: var(--ion-color-light);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.item-content {\n  width: 100%;\n  padding: 12px 0;\n}\n\n/* Item Header */\n\n.item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.item-name {\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n\n.item-name .item-icon {\n  margin-left: 8px;\n  font-size: 1.1em;\n}\n\n.item-name .name-text {\n  font-weight: bold;\n  font-size: 1.1em;\n  color: var(--ion-color-dark);\n}\n\n.item-shortage.critical ion-badge {\n  --background: var(--ion-color-danger);\n  animation: pulse 2s infinite;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Item Details */\n\n.item-details {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 8px;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.detail-row {\n  display: flex;\n  align-items: center;\n}\n\n.detail-row .detail-label {\n  font-size: 0.9em;\n  color: var(--ion-color-medium);\n  margin-left: 8px;\n  min-width: 60px;\n}\n\n.detail-row .detail-value {\n  font-size: 0.9em;\n  color: var(--ion-color-dark);\n  font-weight: 500;\n}\n\n/* Quantity Section */\n\n.quantity-section {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-bottom: 12px;\n  padding: 12px;\n  background: var(--ion-color-light-tint);\n  border-radius: 6px;\n}\n\n.quantity-item {\n  text-align: center;\n}\n\n.quantity-item .quantity-label {\n  display: block;\n  font-size: 0.8em;\n  color: var(--ion-color-medium);\n  margin-bottom: 4px;\n}\n\n.quantity-item .quantity-value {\n  display: block;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\n.quantity-item .quantity-value.requested {\n  color: var(--ion-color-primary);\n}\n\n.quantity-item .quantity-value.available {\n  color: var(--ion-color-success);\n}\n\n.quantity-item .quantity-value.shortage {\n  color: var(--ion-color-danger);\n}\n\n.quantity-item.shortage-highlight {\n  background: rgba(231, 76, 60, 0.1);\n  border-radius: 4px;\n  padding: 4px;\n}\n\n/* Price Section */\n\n.price-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--ion-color-light);\n  border-radius: 6px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.price-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  flex: 1;\n}\n\n.price-item .price-label {\n  font-size: 0.8em;\n  color: var(--ion-color-dark);\n  margin-bottom: 4px;\n  font-weight: 500;\n}\n\n.price-item .price-value {\n  font-size: 1em;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\n\n.price-item .price-value.total {\n  color: var(--ion-color-danger);\n  font-weight: bold;\n}\n\n/* Action Buttons */\n\n.action-buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 12px;\n  gap: 12px;\n  padding: 12px;\n}\n\n.cancel-button {\n  --color: white;\n  --background: var(--ion-color-medium);\n  height: 48px;\n  font-weight: bold;\n}\n\n.purchase-button {\n  --color: white;\n  --background: var(--ion-color-primary);\n  height: 48px;\n  font-weight: bold;\n}\n\n.purchase-button:hover {\n  --background: var(--ion-color-primary-shade);\n}\n\n/* RTL Support */\n\nion-content {\n  direction: rtl;\n}\n\n/* Responsive Design */\n\n@media (max-width: 768px) {\n  .item-details {\n    grid-template-columns: 1fr;\n  }\n\n  .quantity-section {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n\n  .price-section {\n    flex-direction: row;\n    gap: 8px;\n    padding: 8px;\n  }\n  .price-section .price-item .price-label {\n    font-size: 0.75em;\n  }\n  .price-section .price-item .price-value {\n    font-size: 0.9em;\n  }\n\n  .action-buttons {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Loading and Empty States */\n\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n}\n\n.empty-state ion-icon {\n  font-size: 4em;\n  color: var(--ion-color-medium);\n  margin-bottom: 16px;\n}\n\n.empty-state p {\n  color: var(--ion-color-medium);\n  font-size: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3VmZmljaWVudC1zdG9jay1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBLGtCQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBQUo7O0FBSUEsb0JBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBRko7O0FBTUEsa0JBQUE7O0FBQ0E7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtFO0VBQ0UsVUFBQTtBQUhKOztBQU1FO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9FO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVNBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUFORjs7QUFRRTtFQUNFLHlDQUFBO0FBTko7O0FBU0U7RUFDRSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0NBQUE7QUFQSjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBUkY7O0FBV0EsZ0JBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBUkY7O0FBVUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFUSjs7QUFjRTtFQUNFLHFDQUFBO0VBQ0EsNEJBQUE7QUFYSjs7QUFlQTtFQUNFO0lBQUssVUFBQTtFQVhMO0VBWUE7SUFBTSxZQUFBO0VBVE47RUFVQTtJQUFPLFVBQUE7RUFQUDtBQUNGOztBQVNBLGlCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBU0U7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUU7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFZQSxxQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7QUFURjs7QUFXRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFZRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVko7O0FBWUk7RUFDRSwrQkFBQTtBQVZOOztBQWFJO0VBQ0UsK0JBQUE7QUFYTjs7QUFjSTtFQUNFLDhCQUFBO0FBWk47O0FBZ0JFO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFkSjs7QUFrQkEsa0JBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUFmRjs7QUFrQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQWZGOztBQWlCRTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZko7O0FBa0JFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFoQko7O0FBa0JJO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQWhCTjs7QUFxQkEsbUJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGFBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWxCRjs7QUFvQkU7RUFDRSw0Q0FBQTtBQWxCSjs7QUFzQkEsZ0JBQUE7O0FBQ0E7RUFDRSxjQUFBO0FBbkJGOztBQXNCQSxzQkFBQTs7QUFDQTtFQUNFO0lBQ0UsMEJBQUE7RUFuQkY7O0VBc0JBO0lBQ0UsMEJBQUE7SUFDQSxRQUFBO0VBbkJGOztFQXNCQTtJQUNFLG1CQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7RUFuQkY7RUFzQkk7SUFDRSxpQkFBQTtFQXBCTjtFQXVCSTtJQUNFLGdCQUFBO0VBckJOOztFQTBCQTtJQUNFLDBCQUFBO0VBdkJGO0FBQ0Y7O0FBMEJBLDZCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQXhCRjs7QUEwQkU7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQXhCSjs7QUEyQkU7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0FBekJKIiwiZmlsZSI6Imluc3VmZmljaWVudC1zdG9jay1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2U3NGMzYztcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2YzOWMxMjtcbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzI3YWU2MDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzM0OThkYjtcbn1cblxuLnRpdGxlLWljb24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4vKiBBbGVydCBTZWN0aW9uICovXG4uYWxlcnQtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5hbGVydC1tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgLmFsZXJ0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIG1pbi13aWR0aDogNDBweDtcbiAgfVxuICBcbiAgLmFsZXJ0LXRleHQge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICB9XG59XG5cbi8qIFN1bW1hcnkgU2VjdGlvbiAqL1xuLnN1bW1hcnktc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5zdW1tYXJ5LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgXG4gIC5zdW1tYXJ5LWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgXG4gIC5zdW1tYXJ5LXZhbHVlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuLyogSXRlbXMgU2VjdGlvbiAqL1xuLml0ZW1zLXNlY3Rpb24ge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaXRlbXMtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNHB4O1xuICB9XG4gIFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cblxuLml0ZW0tcm93IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIFxuICAmLmV2ZW4tcm93IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgfVxuICBcbiAgJjpob3ZlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG59XG5cbi5pdGVtLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuXG4vKiBJdGVtIEhlYWRlciAqL1xuLml0ZW0taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgXG4gIC5pdGVtLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxuICBcbiAgLm5hbWUtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG59XG5cbi5pdGVtLXNob3J0YWdlIHtcbiAgJi5jcml0aWNhbCBpb24tYmFkZ2Uge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUgeyBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuNzsgfVxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBJdGVtIERldGFpbHMgKi9cbi5pdGVtLWRldGFpbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGV0YWlsLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICAuZGV0YWlsLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxuICBcbiAgLmRldGFpbC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuLyogUXVhbnRpdHkgU2VjdGlvbiAqL1xuLnF1YW50aXR5LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucXVhbnRpdHktaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIC5xdWFudGl0eS1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIFxuICAucXVhbnRpdHktdmFsdWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgXG4gICAgJi5yZXF1ZXN0ZWQge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgXG4gICAgJi5hdmFpbGFibGUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICB9XG4gICAgXG4gICAgJi5zaG9ydGFnZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgfVxuICB9XG4gIFxuICAmLnNob3J0YWdlLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG59XG5cbi8qIFByaWNlIFNlY3Rpb24gKi9cbi5wcmljZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuLnByaWNlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIFxuICAucHJpY2UtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLnByaWNlLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIFxuICAgICYudG90YWwge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbi8qIEFjdGlvbiBCdXR0b25zICovXG4uYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLmNhbmNlbC1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnB1cmNoYXNlLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgXG4gICY6aG92ZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICB9XG59XG5cbi8qIFJUTCBTdXBwb3J0ICovXG5pb24tY29udGVudCB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pdGVtLWRldGFpbHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIFxuICAucXVhbnRpdHktc2VjdGlvbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiA4cHg7XG4gIH1cbiAgXG4gIC5wcmljZS1zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAvLyBLZWVwIGluIG9uZSByb3cgZXZlbiBvbiBtb2JpbGVcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgXG4gICAgLnByaWNlLWl0ZW0ge1xuICAgICAgLnByaWNlLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wcmljZS12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbi8qIExvYWRpbmcgYW5kIEVtcHR5IFN0YXRlcyAqL1xuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gIFxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgXG4gIHAge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICB9XG59Il19 */";

/***/ }),

/***/ 3674:
/*!**************************************************!*\
  !*** ./src/app/sales/sales.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\nion-header ion-toolbar ion-title {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 40px;\n  margin: 0 5px;\n  border: none;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item .header-date-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-align: center;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button {\n  --background: rgba(255, 255, 255, 0.2);\n  --background-hover: rgba(255, 255, 255, 0.3);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0 5px;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button ion-label {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\nion-content {\n  --padding-top: 56px;\n  --padding-bottom: 120px;\n}\n.custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n.cust-card {\n  border-radius: 5px;\n}\n.show {\n  visibility: visible;\n}\n.hide {\n  visibility: hidden;\n}\n.bnone {\n  border: none;\n}\n.red {\n  color: var(--ion-color-danger);\n}\n.darko {\n  color: var(--ion-color-dark);\n}\nion-popover {\n  --offset-y: -30px ;\n}\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n.table-card-header ion-card-title {\n  margin: 0;\n}\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.compact-radio-style .discount-radio-container {\n  --min-height: 48px;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group {\n  justify-content: space-around;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option {\n  flex: 1;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background-color 0.2s ease;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option:hover {\n  background-color: var(--ion-color-light);\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option ion-label {\n  font-weight: 500;\n}\nion-segment {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  min-width: 200px;\n}\nion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-height: 28px;\n}\nion-segment ion-segment-button ion-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.rtl-input {\n  direction: rtl;\n}\n.rtl-input ion-label.float-right {\n  text-align: right !important;\n  transform-origin: right top !important;\n  right: 0 !important;\n  left: auto !important;\n}\n.rtl-input ion-label.float-right.label-floating {\n  transform: translateY(-14px) scale(0.82) !important;\n  right: 0 !important;\n}\n.rtl-input ion-input.text-right {\n  text-align: right !important;\n  --padding-start: 0;\n  --padding-end: 16px;\n}\n.rtl-input ion-input.text-right input {\n  text-align: right !important;\n  direction: ltr;\n}\n.rtl-input ion-note {\n  direction: ltr;\n}\n.custom-rtl-input .item-native {\n  flex-direction: row-reverse;\n}\n.custom-rtl-input ion-label {\n  order: 2;\n  text-align: right;\n  margin-right: 0;\n  margin-left: 16px;\n}\n.custom-rtl-input ion-input {\n  order: 1;\n  text-align: right;\n}\n.custom-rtl-input ion-input input {\n  text-align: right !important;\n}\n.custom-rtl-input ion-note {\n  order: 3;\n}\n.total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n  font-weight: 600;\n}\n.total-after-discount ion-input {\n  --color: #15803d;\n  font-size: 1.1em;\n  text-align: center;\n}\nion-modal {\n  --height: 90%;\n  --border-radius: 16px 16px 0 0;\n}\n.insufficient-stock-modal {\n  --height: 80vh;\n  --width: 90vw;\n  --max-width: 600px;\n  --border-radius: 12px;\n}\n@media (max-width: 768px) {\n  .insufficient-stock-modal {\n    --height: 95vh;\n    --width: 95vw;\n  }\n}\n.top-card-row {\n  align-items: flex-start;\n  gap: 16px;\n}\n.top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.top-card-row .account-column .column-label,\n.top-card-row .invoice-type-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  font-size: 0.95rem;\n}\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n.top-card-row .invoice-type-column .invoice-type-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .invoice-type-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n.table-container {\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n.search-container {\n  width: 100%;\n}\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n/* ======================================\n   CATEGORY AND INVOICE TYPE SELECTOR STYLES\n   ====================================== */\n.category-section,\n.invoice-type-section {\n  margin-top: 0;\n}\n.category-section .field-label,\n.invoice-type-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n/* Responsive design for mobile */\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-column .column-label {\n    font-size: 13px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/* Footer styles */\nion-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-footer ion-toolbar {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-medium);\n}\nion-footer .total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n}\nion-footer .total-after-discount ion-input {\n  --color: #15803d;\n  font-weight: 600;\n}\nion-footer ion-item {\n  --background: white;\n  border-radius: 5px;\n  margin: 4px 0;\n}\nion-footer .footer-input-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  padding: 6px 0;\n}\nion-footer .footer-input-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 3px;\n  text-align: center;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .footer-input-item {\n  width: 100%;\n}\nion-footer .footer-input-item ion-input {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-header {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 20px;\n}\nion-footer .discount-type-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 0;\n  margin-inline-end: 6px;\n  white-space: nowrap;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .discount-segment-container {\n  --background: transparent;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  flex: 1;\n  max-width: 140px;\n}\nion-footer .compact-discount-segment {\n  --background: var(--ion-color-light);\n  border-radius: 14px;\n  padding: 1px;\n  width: 100%;\n  min-height: 24px;\n}\nion-footer .compact-discount-segment .compact-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  --indicator-color: transparent;\n  --border-radius: 12px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  min-height: 22px;\n  font-size: 10px;\n}\nion-footer .compact-discount-segment .compact-segment-button ion-label {\n  font-weight: 500;\n  margin: 0;\n}\nion-footer .discount-input {\n  margin-top: 3px;\n  width: 100%;\n}\nion-footer .discount-input ion-input {\n  text-align: center;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-input .discount-note {\n  font-size: 11px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-footer .discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n/* Responsive footer for mobile */\n@media (max-width: 768px) {\n  ion-footer ion-grid {\n    padding: 0;\n  }\n  ion-footer ion-col {\n    padding: 0 3px;\n  }\n  ion-footer .footer-input-container {\n    padding: 4px 0;\n  }\n  ion-footer .footer-input-label,\nion-footer .discount-type-label {\n    font-size: 9px;\n    height: 12px;\n    margin-bottom: 2px;\n  }\n  ion-footer .discount-header {\n    margin-bottom: 2px;\n    height: 22px;\n  }\n  ion-footer .footer-input-item ion-input,\nion-footer .discount-input ion-input {\n    font-size: 11px;\n    --padding-top: 5px;\n    --padding-bottom: 5px;\n  }\n  ion-footer .discount-segment-container {\n    max-width: 110px;\n  }\n  ion-footer .compact-discount-segment {\n    min-height: 20px;\n    border-radius: 12px;\n    padding: 1px;\n  }\n  ion-footer .compact-discount-segment .compact-segment-button {\n    min-height: 18px;\n    font-size: 8px;\n    --border-radius: 10px;\n    --padding-start: 3px;\n    --padding-end: 3px;\n  }\n  ion-footer ion-button {\n    --padding-start: 0;\n    --padding-end: 0;\n    font-size: 10px;\n    height: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLHNDQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFHTTtFQUNFLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURSO0FBR1E7RUFDRSxjQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEVjtBQUtNO0VBQ0Usc0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFIUjtBQUtRO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUhWO0FBV0E7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBUkY7QUFXQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQVJKO0FBVUk7RUFDSSxrQkFBQTtBQVBSO0FBU0k7RUFBTyxtQkFBQTtBQUxYO0FBT0k7RUFBTSxrQkFBQTtBQUhWO0FBT0E7RUFDRSxZQUFBO0FBSkY7QUFPQztFQUNDLDhCQUFBO0FBSkY7QUFNQztFQUNDLDRCQUFBO0FBSEY7QUFLQTtFQUNFLGtCQUFBO0FBRkY7QUFJQTtFQUNFLHlCQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDSyxrQkFBQTtFQUNILFdBQUE7RUFDQSxZQUFBO0FBREo7QUFJRTtFQUNFLHlCQUFBO0FBREo7QUFHRTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFNdkc7QUFIRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFNSjtBQUhBO0VBQ0UsaURBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTUY7QUFKRTtFQUNFLFNBQUE7QUFNSjtBQUpJO0VBQ0UsbUJBQUE7QUFNTjtBQUpNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTVI7QUFKUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFNVjtBQUZNO0VBQ0UseUJBQUE7QUFJUjtBQUZRO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUFJVjtBQUZVO0VBQ0UsZ0JBQUE7QUFJWjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtBQUZKO0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFISjtBQUtJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUhOO0FBS007RUFDRSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtBQUhSO0FBTU07RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQVlFO0VBQ0Usa0JBQUE7QUFUSjtBQVdJO0VBQ0UsNkJBQUE7QUFUTjtBQVdNO0VBQ0UsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFUUjtBQVdRO0VBQ0Usd0NBQUE7QUFUVjtBQVlRO0VBQ0UsZ0JBQUE7QUFWVjtBQWdCQTtFQUNFLDhCQUFBO0VBQ0Esa0RBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQyxnQkFBQTtBQWJIO0FBZUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQWVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBYk47QUFtQkU7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FBaEJKO0FBb0JBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQWpCRjtBQW1CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFqQko7QUFtQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBakJOO0FBbUJNO0VBQ0UsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUNBQUE7QUFqQlI7QUFvQk07RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFsQlI7QUF3QkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBckJGO0FBdUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXJCSjtBQXVCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFyQk47QUF1Qk07RUFDRSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtBQXJCUjtBQXdCTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQXRCUjtBQTZCQTtFQUNFLGNBQUE7QUExQkY7QUE0QkU7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQTFCSjtBQTRCSTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7QUExQk47QUE4QkU7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUE1Qko7QUE4Qkk7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUE1Qk47QUFnQ0U7RUFDRSxjQUFBO0FBOUJKO0FBb0NFO0VBQ0UsMkJBQUE7QUFqQ0o7QUFvQ0U7RUFDRSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxRQUFBO0VBQ0EsaUJBQUE7QUFuQ0o7QUFxQ0k7RUFDRSw0QkFBQTtBQW5DTjtBQXVDRTtFQUNFLFFBQUE7QUFyQ0o7QUEwQ0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUF2Q0Y7QUF5Q0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF2Q0o7QUE0Q0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUF6Q0Y7QUE2Q0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUExQ0Y7QUE0Q0U7RUFORjtJQU9JLGNBQUE7SUFDQSxhQUFBO0VBekNGO0FBQ0Y7QUE2Q0E7RUFFRSx1QkFBQTtFQUNBLFNBQUE7QUEzQ0Y7QUE2Q0U7Ozs7O0VBS0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUEzQ0o7QUE2Q0k7Ozs7O0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtBQXhDTjtBQWdESTtFQUNFLGFBQUE7QUE5Q047QUFzRE07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXBEUjtBQTBESTtFQUNFLGdCQUFBO0FBeEROO0FBMERNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF4RFI7QUE4REk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTVETjtBQThETTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUE1RFI7QUFrRUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWhFTjtBQWtFTTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFoRVI7QUF1RUE7RUFDRTtJQUNFLHNCQUFBO0VBcEVGO0VBc0VFOzs7SUFHRSxRQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBcEVKO0VBc0VJOzs7SUFDRSxnQkFBQTtFQWxFTjtBQUNGO0FBd0VBO0VBQ0UsOENBQUE7RUFDQSxrQkFBQTtBQXRFRjtBQXlFQTtFQUNFLFdBQUE7QUF0RUY7QUF3RUU7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF0RUo7QUF3RUk7RUFDRSxjQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0FBdEVOO0FBeUVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXZFTjtBQXlFTTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdkVSO0FBMEVNO0VBQ0UsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQXhFUjtBQTBFUTtFQUNFLGVBQUE7QUF4RVY7QUFnRkE7RUFDRSxvREFBQTtBQTdFRjtBQWdGQTtFQUNFLG1EQUFBO0VBQ0EsMENBQUE7QUE3RUY7QUFpRkE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUE5RUY7QUFrRkE7OzJDQUFBO0FBSUE7O0VBRUUsYUFBQTtBQWhGRjtBQWtGRTs7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQS9FSjtBQW1GQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBaEZGO0FBa0ZFO0VBQ0UseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQWhGSjtBQWtGSTtFQUNFLDhDQUFBO0VBQ0EsMkJBQUE7QUFoRk47QUFtRkk7RUFDRSxtQ0FBQTtBQWpGTjtBQW9GSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWxGTjtBQXVGQSxpQ0FBQTtBQUNBO0VBR007SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUF0Rk47O0VBNEZFO0lBQ0UsZUFBQTtFQXpGSjs7RUE4RkU7SUFDRSxlQUFBO0VBM0ZKO0FBQ0Y7QUErRkEsa0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBN0ZGO0FBK0ZFO0VBQ0Usb0NBQUE7RUFDQSx1Q0FBQTtBQTdGSjtBQWdHRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUE5Rko7QUFnR0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBOUZOO0FBa0dFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFoR0o7QUFtR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFqR0o7QUFvR0U7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFsR0o7QUFxR0U7RUFDRSxXQUFBO0FBbkdKO0FBcUdJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBbkdOO0FBdUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUVBLFlBQUE7QUF2R0o7QUEwR0U7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXhHSjtBQTJHRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBekdKO0FBNEdFO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUExR0o7QUE0R0k7RUFDRSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTFHTjtBQTRHTTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQTFHUjtBQStHRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBN0dKO0FBK0dJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQTdHTjtBQWdISTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBOUdOO0FBbUhJO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtBQWpITjtBQXFIRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFuSEo7QUFxSEk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBbkhOO0FBcUhNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQW5IUjtBQXFIUTtFQUNFLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlDQUFBO0FBbkhWO0FBc0hRO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBcEhWO0FBMkhBLGlDQUFBO0FBQ0E7RUFFSTtJQUNFLFVBQUE7RUF6SEo7RUE0SEU7SUFDRSxjQUFBO0VBMUhKO0VBNkhFO0lBQ0UsY0FBQTtFQTNISjtFQThIRTs7SUFFRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBNUhKO0VBK0hFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBN0hKO0VBa0lJOztJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0VBL0hOO0VBbUlFO0lBQ0UsZ0JBQUE7RUFqSUo7RUFvSUU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQWxJSjtFQW9JSTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQWxJTjtFQXNJRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQXBJSjtBQUNGIiwiZmlsZSI6InNhbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTsgLy8gSGlnaCBlbm91Z2ggdG8gc3RheSBhYm92ZSBjb250ZW50IGJ1dCBiZWxvdyBzeXN0ZW0gbW9kYWxzICh1c3VhbGx5IDEwMDArKVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIGlvbi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIFxuICAgIGlvbi1idXR0b25zW3Nsb3Q9XCJlbmRcIl0ge1xuICAgICAgLmhlYWRlci1kYXRlLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICAgIC0tbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBcbiAgICAgICAgLmhlYWRlci1kYXRlLWlucHV0IHtcbiAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIFxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWRqdXN0IGNvbnRlbnQgcGFkZGluZyBmb3IgZml4ZWQgaGVhZGVyIGFuZCBmb290ZXJcbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogNTZweDsgLy8gQXBwcm94aW1hdGUgaGVpZ2h0IG9mIGlvbi1oZWFkZXJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTIwcHg7IC8vIEFwcHJveGltYXRlIGhlaWdodCBvZiBmb290ZXIgKGFkanVzdCBiYXNlZCBvbiBhY3R1YWwgZm9vdGVyIGhlaWdodClcbn1cblxuLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAgIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gICAgLmN1c3RSb3d7XG4gICAgICAvLyAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgfVxuLmJub25le1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiAucmVke1xuICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSBcbiB9XG4gLmRhcmtve1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspXG4gfVxuaW9uLXBvcG92ZXJ7XG4gIC0tb2Zmc2V0LXkgOiAtMzBweFxufVxuLmN1c3RJbnB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwLjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4gXG4gIC50YWJsZXtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMnB4O1xuICB9XG5cbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICB9XG4gIHRkLCB0aCB7Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogOHB4OyBmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6IGJsYWNrO31cbiAgXG4gIC8vIFJpZ2h0IGFsaWduIGl0ZW0gbmFtZSBjb2x1bW5cbiAgdGQ6bnRoLWNoaWxkKDIpLCB0aDpudGgtY2hpbGQoMikge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIH1cblxuLnRhYmxlLWNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgICBpb24tcm93IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tY29sW3NpemU9XCJhdXRvXCJdIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAgIC0tY29sb3ItaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4gICAgICAgXG4gIC5kaXNjb3VudC1zZWN0aW9uIHtcbiAgaW9uLW5vdGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgXG4gIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBcbiAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWx0ZXJuYXRpdmUgY29tcGFjdCB2ZXJzaW9uIChpZiB5b3UgcHJlZmVyIGV2ZW4gbW9yZSBjb21wYWN0KVxuLmNvbXBhY3QtcmFkaW8tc3R5bGUge1xuICAuZGlzY291bnQtcmFkaW8tY29udGFpbmVyIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgXG4gICAgLmlubGluZS1yYWRpby1ncm91cCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIFxuICAgICAgLnJhZGlvLW9wdGlvbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmlvbi1zZWdtZW50IHsgXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICBtaW4td2lkdGg6IDIwMHB4O1xuICBcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgbWluLWhlaWdodDogMjhweDtcbiAgICBcbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbn1cblxuLmRpc2NvdW50LXNlY3Rpb24ge1xuICBpb24tbm90ZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4uZGlzY291bnQtcmFkaW8tY29udGFpbmVyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICBcbiAgLmlubGluZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIC5yYWRpby1vcHRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIFxuICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZGlzY291bnQtcmFkaW8tY29udGFpbmVyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICBcbiAgLmlubGluZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIC5yYWRpby1vcHRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIFxuICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSVEwgSW5wdXQgc3R5bGluZyBmb3IgQXJhYmljIGxhYmVsc1xuLnJ0bC1pbnB1dCB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBcbiAgaW9uLWxhYmVsLmZsb2F0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIFxuICAgICYubGFiZWwtZmxvYXRpbmcge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNHB4KSBzY2FsZSgwLjgyKSAhaW1wb3J0YW50O1xuICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1pbnB1dC50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIFxuICAgIGlucHV0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICBkaXJlY3Rpb246IGx0cjsgLy8gS2VlcCBudW1iZXJzIExUUiBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5XG4gICAgfVxuICB9XG4gIFxuICBpb24tbm90ZSB7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gIH1cbn1cblxuLy8gQWx0ZXJuYXRpdmUgYXBwcm9hY2ggaWYgdGhlIGFib3ZlIGRvZXNuJ3Qgd29yayBwZXJmZWN0bHlcbi5jdXN0b20tcnRsLWlucHV0IHtcbiAgLml0ZW0tbmF0aXZlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cbiAgXG4gIGlvbi1sYWJlbCB7XG4gICAgb3JkZXI6IDI7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB9XG4gIFxuICBpb24taW5wdXQge1xuICAgIG9yZGVyOiAxO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIFxuICAgIGlucHV0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICBpb24tbm90ZSB7XG4gICAgb3JkZXI6IDM7XG4gIH1cbn1cblxuLy8gQWRkIHN0eWxlcyBmb3IgdGhlIHRvdGFsIGFmdGVyIGRpc2NvdW50IGZpZWxkIGFuZCBwcm9ncmVzcyBzdGVwcGVyXG4udG90YWwtYWZ0ZXItZGlzY291bnQge1xuICAtLWJhY2tncm91bmQ6ICNmMGZkZjQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxNmEzNGE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIFxuICBpb24taW5wdXQge1xuICAgIC0tY29sb3I6ICMxNTgwM2Q7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLy8gTW9kYWwgc3R5bGluZ1xuaW9uLW1vZGFsIHtcbiAgLS1oZWlnaHQ6IDkwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xufVxuXG4vLyBJbnN1ZmZpY2llbnQgU3RvY2sgTW9kYWwgU3R5bGluZ1xuLmluc3VmZmljaWVudC1zdG9jay1tb2RhbCB7XG4gIC0taGVpZ2h0OiA4MHZoO1xuICAtLXdpZHRoOiA5MHZ3O1xuICAtLW1heC13aWR0aDogNjAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC0taGVpZ2h0OiA5NXZoO1xuICAgIC0td2lkdGg6IDk1dnc7XG4gIH1cbn1cblxuLy8gVG9wIENhcmQgT3JnYW5pemF0aW9uIFN0eWxpbmdcbi50b3AtY2FyZC1yb3cge1xuICBcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTZweDsgLy8gUmVwbGFjZSBvZmZzZXQgd2l0aCBnYXBcbiAgXG4gIC5hY2NvdW50LWNvbHVtbixcbiAgLmludm9pY2UtdHlwZS1jb2x1bW4sXG4gIC5jYXRlZ29yeS1jb2x1bW4sXG4gIC5kYXRlLWNvbW1lbnQtY29sdW1uLFxuICAuZGF0ZS1jb2x1bW4ge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAuY29sdW1uLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgXG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICBcbiAgICAgIFxuICAgIH1cbiAgfVxuICBcbiAgLy8gQWxpZ24gYWxsIGZvcm0gY29udGVudCBhdCB0aGUgc2FtZSBsZXZlbFxuICAuYWNjb3VudC1jb2x1bW4ge1xuICAgIGFwcC1hY2NvdW50LXNlbGVjdG9yIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICB9XG4gIFxuICAuaW52b2ljZS10eXBlLWNvbHVtbiB7XG4gICAgLmludm9pY2UtdHlwZS1zZWN0aW9uIHtcbiAgICAgICBcbiAgICAgIFxuICAgICAgLmNvbXBhY3Qtc2VnbWVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGhlaWdodDogNjBweDsgLy8gSW5jcmVhc2VkIGhlaWdodCBmb3IgYmV0dGVyIGFsaWdubWVudFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LWNvbHVtbiB7XG4gICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIFxuICAgICAgLmNvbXBhY3Qtc2VnbWVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGhlaWdodDogNjBweDsgLy8gSW5jcmVhc2VkIGhlaWdodCBmb3IgYmV0dGVyIGFsaWdubWVudFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xuICAgIC5jb21tZW50LWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICBoZWlnaHQ6IDQ4cHg7IC8vIE1hdGNoIG90aGVyIGlucHV0c1xuICAgICAgXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmRhdGUtY29sdW1uIHtcbiAgICAuZGF0ZS1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgaGVpZ2h0OiA0OHB4OyAvLyBNYXRjaCBvdGhlciBpbnB1dHNcbiAgICAgIFxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b3AtY2FyZC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmFjY291bnQtY29sdW1uLFxuICAgIC5pbnZvaWNlLXR5cGUtY29sdW1uLFxuICAgIC5kYXRlLWNvbW1lbnQtY29sdW1uIHtcbiAgICAgIHNpemU6IDEyO1xuICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUYWJsZSBjb250YWluZXIgYW5kIHNlYXJjaCBzdHlsZXNcbi50YWJsZS1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICAuc2VhcmNoLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgXG4gICAgLnNlYXJjaC1uYXZpZ2F0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBcbiAgICAgIC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFRhYmxlIHJvdyBoaWdobGlnaHRpbmdcbnRyLnNlYXJjaC1tYXRjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjIpICFpbXBvcnRhbnQ7XG59XG5cbnRyLnNlYXJjaC1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjQpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cblxuLy8gSGlnaGxpZ2h0IHRleHRcbm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQ0FURUdPUlkgQU5EIElOVk9JQ0UgVFlQRSBTRUxFQ1RPUiBTVFlMRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5jYXRlZ29yeS1zZWN0aW9uLFxuLmludm9pY2UtdHlwZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgXG4gIC5maWVsZC1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cbn1cblxuLmNvbXBhY3Qtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGZsZXg6IDE7XG5cbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4zKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOm5vdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSk7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb21wYWN0LXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LWNvbHVtbiB7XG4gICAgLmNvbHVtbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG4gIFxuICAuY2F0ZWdvcnktc2VjdGlvbiB7XG4gICAgLmZpZWxkLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbn1cblxuLyogRm9vdGVyIHN0eWxlcyAqL1xuaW9uLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5OyAvLyBIaWdoIGVub3VnaCB0byBzdGF5IGFib3ZlIGNvbnRlbnQgYnV0IGJlbG93IHN5c3RlbSBtb2RhbHNcbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG4gIFxuICAudG90YWwtYWZ0ZXItZGlzY291bnQge1xuICAgIC0tYmFja2dyb3VuZDogI2YwZmRmNDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTZhMzRhO1xuICAgIFxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLWNvbG9yOiAjMTU4MDNkO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDRweCAwO1xuICB9XG4gIFxuICAuZm9vdGVyLWlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA2cHggMDtcbiAgfVxuICBcbiAgLmZvb3Rlci1pbnB1dC1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5mb290ZXItaW5wdXQtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgfVxuICB9XG4gIFxuICAuZGlzY291bnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuZGlzY291bnQtdHlwZS1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA2cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuZGlzY291bnQtc2VnbWVudC1jb250YWluZXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsZXg6IDE7XG4gICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgfVxuICBcbiAgLmNvbXBhY3QtZGlzY291bnQtc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG4gICAgXG4gICAgLmNvbXBhY3Qtc2VnbWVudC1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDIycHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5kaXNjb3VudC1pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIGlvbi1pbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgfVxuICAgIFxuICAgIC5kaXNjb3VudC1ub3RlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbiAgXG4gIC5kaXNjb3VudC1zZWN0aW9uIHtcbiAgICBpb24tbm90ZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG4gIFxuICAuZGlzY291bnQtcmFkaW8tY29udGFpbmVyIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICBcbiAgICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMjRweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgXG4gICAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIFxuICAgICAgICBpb24tcmFkaW8ge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBSZXNwb25zaXZlIGZvb3RlciBmb3IgbW9iaWxlICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWZvb3RlciB7XG4gICAgaW9uLWdyaWQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgXG4gICAgaW9uLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICB9XG4gICAgXG4gICAgLmZvb3Rlci1pbnB1dC1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXItaW5wdXQtbGFiZWwsXG4gICAgLmRpc2NvdW50LXR5cGUtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgfVxuICAgIFxuICAgIC5kaXNjb3VudC1oZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgIH1cbiAgICBcbiAgICAuZm9vdGVyLWlucHV0LWl0ZW0sXG4gICAgLmRpc2NvdW50LWlucHV0IHtcbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5kaXNjb3VudC1zZWdtZW50LWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDExMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY29tcGFjdC1kaXNjb3VudC1zZWdtZW50IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgXG4gICAgICAuY29tcGFjdC1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogM3B4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAzcHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 21291:
/*!*********************************************************************************************************!*\
  !*** ./src/app/component/insufficient-stock-dialog/insufficient-stock-dialog.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title class=\"ion-text-center\">\n      <ion-icon name=\"warning\" class=\"title-icon\"></ion-icon>\n      الكمية غير كافية في المخزن\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\" fill=\"clear\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"alert-section\">\n    <ion-card color=\"light\">\n      <ion-card-content>\n        <div class=\"alert-message\">\n          <ion-icon name=\"alert-circle\" color=\"warning\" class=\"alert-icon\"></ion-icon>\n          <p class=\"alert-text\">\n            لا يمكن حفظ الفاتورة لأن الأصناف التالية تتطلب كمية أكبر من المتوفر في المخزن\n          </p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div class=\"summary-section\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>ملخص النقص</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"4\">\n            <div class=\"summary-item\">\n              <span class=\"summary-label\">عدد الأصناف:</span>\n              <span class=\"summary-value\">{{ insufficientItems.length }}</span>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"summary-item\">\n              <span class=\"summary-label\">إجمالي النقص:</span>\n              <span class=\"summary-value\">{{ getTotalShortage() }}</span>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"summary-item\">\n              <span class=\"summary-label\">القيمة المقدرة:</span>\n              <span class=\"summary-value\">{{ getTotalValue().toFixed(2) }}</span>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div class=\"items-section\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>تفاصيل الأصناف الناقصة</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"items-container\">\n          <ion-item \n            *ngFor=\"let item of insufficientItems; let i = index\" \n            class=\"item-row\"\n            [class.even-row]=\"i % 2 === 0\"\n          >\n            <div class=\"item-content\">\n              <div class=\"item-header\">\n                <div class=\"item-name\">\n                  <ion-icon name=\"cube\" color=\"primary\" class=\"item-icon\"></ion-icon>\n                  <span class=\"name-text\">{{ item.item_name }}</span>\n                </div>\n                <div class=\"item-shortage\" [class.critical]=\"item.shortage > item.available_quantity * 2\">\n                  <ion-badge color=\"danger\">نقص: {{ item.shortage }}</ion-badge>\n                </div>\n              </div>\n              \n              \n\n              <div class=\"quantity-section\">\n                <div class=\"quantity-item\">\n                  <span class=\"quantity-label\">المطلوب:</span>\n                  <span class=\"quantity-value requested\">{{ item.requested_quantity }}</span>\n                </div>\n                <div class=\"quantity-item\">\n                  <span class=\"quantity-label\">المتوفر:</span>\n                  <span class=\"quantity-value available\">{{ item.available_quantity }}</span>\n                </div>\n                <div class=\"quantity-item shortage-highlight\">\n                  <span class=\"quantity-label\">النقص:</span>\n                  <span class=\"quantity-value shortage\">{{ item.shortage }}</span>\n                </div>\n              </div>\n\n             \n              \n              <div class=\"price-section\">\n                <span class=\"price-item\">\n                  <span class=\"price-label\">سعر الشراء:</span>\n                  <span class=\"price-value\">{{  item.perch_price  }}</span>\n                </span>\n                <span class=\"price-item\">\n                  <span class=\"price-label\">سعر البيع:</span>\n                  <span class=\"price-value\">{{  item.pay_price  }}</span>\n                </span>\n                <span class=\"price-item\">\n                  <span class=\"price-label\">قيمة النقص:</span>\n                  <span class=\"price-value total\">{{   +item.pay_price   *  +item.shortage  }}</span>\n                </span>  \n              </div>\n            </div>\n          </ion-item>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"action-buttons\">\n      <ion-button \n        expand=\"block\" \n        color=\"danger\" \n        (click)=\"dismissModal()\"\n        class=\"cancel-button\"\n      >\n        <ion-icon name=\"close-circle\" slot=\"start\"></ion-icon>\n        إغلاق\n      </ion-button>\n      \n      <ion-button \n        expand=\"block\" \n        color=\"primary\" \n        (click)=\"createPurchaseInvoice()\"\n        class=\"purchase-button\"\n      >\n        <ion-icon name=\"add-circle\" slot=\"start\"></ion-icon>\n        إنشاء فاتورة شراء\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 81421:
/*!**************************************************!*\
  !*** ./src/app/sales/sales.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"showBackButton\" (click)=\"goBack()\" defaultHref=\"/\"></ion-back-button>\n      <ion-menu-button *ngIf=\"!showBackButton\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>فاتورة مبيعات</ion-title>\n    <!-- Date in header -->\n    <ion-buttons slot=\"end\" *ngIf=\"user_info && store_info\" >\n      <app-currency-switcher></app-currency-switcher>\n      <ion-item class=\"header-date-item\">\n        <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" class=\"header-date-input\"></ion-input>\n      </ion-item>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card class=\"ion-no-padding ion-no-margin\"> \n      <ion-grid *ngIf=\"user_info && store_info\">\n        <ion-row dir=\"rtl\" class=\"top-card-row\">\n          <!-- First Column: Account Selector -->\n          <ion-col size=\"4\" class=\"account-column\">\n            <app-account-selector\n              accountType=\"customer\"\n              placeholder=\"اختر حساب العميل\"\n              label=\"حساب العميل\"\n              [store_info]=\"store_info\"\n              [year]=\"year\"\n              [showAddButton]=\"true\"\n              [(ngModel)]=\"selectedAccount\"\n              (accountSelected)=\"onAccountSelected($event)\"\n              (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n            </app-account-selector>\n          </ion-col>\n          \n          <!-- Second Column: Invoice Type -->\n          <ion-col size=\"3\" class=\"invoice-type-column\">\n            <ion-label class=\"column-label\">نوع الفاتورة</ion-label>\n            <div class=\"invoice-type-section\">\n              <ion-segment \n                [(ngModel)]=\"radioVal2\" \n                (ionChange)=\"radioChange2($event ,'from')\" \n                class=\"compact-segment\"\n                [disabled]=\"isLoading()\">\n                <ion-segment-button [value]=\"0\">\n                  <span>مبدئية</span>\n                </ion-segment-button>\n                <ion-segment-button [value]=\"1\">\n                  <span>نهائية</span>\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n          </ion-col>\n          \n          <!-- Comment Column: Note field in same row -->\n          <ion-col size=\"4\" class=\"date-comment-column\">\n            <ion-label class=\"column-label\">ملاحظــة</ion-label>\n            <ion-item class=\"custInput comment-input\"> \n              <ion-input \n                placeholder=\"أكتب تعليقا\" \n                [(ngModel)]=\"payInvo.payComment\"\n                [disabled]=\"isLoading()\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <ion-grid  *ngIf=\"user_info && store_info\" >\n      <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\n        <ion-col size=\"11\" class=\"ion-no-padding\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-card> \n                <app-item-selector\n                    [items]=\"items\"\n                    [loadingItems]=\"loadingItems\"\n                    [searchLang]=\"searchLang\"\n                    [store_info]=\"store_info\"\n                    [year]=\"year\"\n                    parentPage=\"sales\"\n                    [enablePriceUpdateConfirmation]=\"true\"\n                    [payRef]=\"payInvo.pay_ref\"\n                    [showQuantityInput]=\"true\"\n                    [showPriceInput]=\"true\"\n                    [showPerchPriceInput]=\"false\"\n                    placeholder=\"اختر الصنف\"\n                    (itemSelected)=\"onItemSelected($event)\"\n                    (itemAdded)=\"onItemAdded($event)\"\n                    (refreshItems)=\"refresh('item')\">\n                  </app-item-selector>\n                </ion-card>\n              </ion-col>\n            \n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n              <ion-card>\n                <ion-card-header color=\"primary\" class=\"table-card-header\">\n                  <ion-card-title>\n                    <ion-row class=\"ion-align-items-center\">\n                      <ion-col size=\"3\">\n                        <span>قائمة الأصناف</span>\n                      </ion-col>\n                      <ion-col size=\"6\" class=\"ion-text-center\">\n                        <div class=\"search-container\">\n                          <ion-item lines=\"none\" class=\"search-item\">\n                            <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\n                            <ion-input\n                              [(ngModel)]=\"searchTerm\"\n                              (ionInput)=\"onSearchTermChange()\"\n                              placeholder=\"البحث في الأصناف...\"\n                              clearInput=\"true\"\n                              class=\"search-input\">\n                            </ion-input>\n                            <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\n                              <span class=\"search-results\">{{ getSearchResultText() }}</span>\n                              <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\n                                <ion-icon name=\"chevron-up\"></ion-icon>\n                              </ion-button>\n                              <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\n                                <ion-icon name=\"chevron-down\"></ion-icon>\n                              </ion-button>\n                            </div>\n                          </ion-item>\n                        </div>\n                      </ion-col>\n                      <ion-col size=\"3\" class=\"ion-text-end\">\n                        <ion-button \n                          fill=\"clear\" \n                          color=\"light\" \n                          size=\"small\"\n                          (click)=\"sortItemListAlphabetically()\"\n                          [disabled]=\"!itemList || itemList.length === 0\"\n                        >\n                          <ion-icon name=\"list\" slot=\"start\"></ion-icon>\n                          {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\n                        </ion-button>\n                        <ion-button \n                          fill=\"clear\" \n                          color=\"light\" \n                          size=\"small\"\n                          (click)=\"openPriceAdjustmentDialog()\"\n                          [disabled]=\"!itemList || itemList.length === 0\"\n                        >\n                          <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n                          تعديل الأسعار\n                        </ion-button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-title>\n                </ion-card-header>\n                <div class=\"table-container\">\n                <table class=\"table\">\n                  <tr>\n                    <th>no</th>\n                    <th>الصنف</th>\n                    <th>الكمية</th>\n                    <th>سعر الوحده ({{ getCurrencySymbol() }})</th>\n                    <th>المجموع ({{ getCurrencySymbol() }})</th> \n                    <th></th> \n                  </tr>\n                  <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\"  \n                      (dblclick)=\"qtyClick(i)\"\n                      [attr.data-index]=\"i\"\n                      [class.search-highlight]=\"isHighlighted(i)\"\n                      [class.search-match]=\"isSearchMatch(i)\">\n                    <td>{{i+1}}</td>\n                    <td>\n                      <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\n                    </td>\n                    <td >\n                      <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \n                      <ion-item *ngIf=\"showMe == i\">\n                        <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                      </ion-item>\n                    </td>\n                    <td>\n                      <ion-text *ngIf=\"showMe != i\">{{item.pay_price | currencyDisplay:'SDG':false}}</ion-text> \n                      <ion-item *ngIf=\"showMe == i\">\n                        <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.pay_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                      </ion-item>\n                    </td>\n\n                    <td>{{item.tot | currencyDisplay:'SDG':false}}</td>\n                    <td>\n                      <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                        <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                      </ion-button>\n                    </td>\n                  </tr>\n                  \n                \n                </table>\n                </div> \n              </ion-card>\n            </ion-col>\n            </ion-row> \n          </ion-grid>\n        </ion-col> \n      </ion-row> \n    </ion-grid>\n    <!-- Journal Entry Modal -->\n<ion-modal [isOpen]=\"showJournalEntryModal\" (willDismiss)=\"onJournalCancelled()\" style=\"--width: 90%; --max-width: 600px; --min-width: 320px;\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n          <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; direction: rtl;\">\n            <ion-icon name=\"arrow-down-outline\" *ngIf=\"invoiceJournalData?.invoiceType === 'sales'\" color=\"success\" style=\"font-size: 1.2em;\"></ion-icon>\n            <ion-icon name=\"arrow-up-outline\" *ngIf=\"invoiceJournalData?.invoiceType === 'purchase'\" color=\"danger\" style=\"font-size: 1.2em;\"></ion-icon>\n            <span *ngIf=\"invoiceJournalData\">\n              {{ invoiceJournalData.invoiceType === 'sales' ? 'سند قبض' : 'سند دفع' }} - {{ invoiceJournalData.customerAccount?.sub_name || 'غير محدد' }}\n            </span>\n          </div>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"onJournalCancelled()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <app-invoice-journal-entry\n        *ngIf=\"invoiceJournalData\"\n        [invoiceData]=\"invoiceJournalData\"\n        (journalSaved)=\"onJournalSaved($event)\"\n        (journalCancelled)=\"onJournalCancelled()\">\n      </app-invoice-journal-entry>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n</ion-content>\n<!-- Footer with totals and action buttons -->\n<ion-footer *ngIf=\"user_info && store_info\" >\n  <ion-toolbar>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-align-items-center\">\n        <!-- Discount controls on the right side -->\n        <ion-col size=\"8\" class=\"ion-text-end\">\n          <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col   class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">إجمالي المبلغ</ion-label>\n                <ion-item class=\"custInput footer-input-item\">\n                  <ion-input [value]=\"payInvo.tot_pr | currencyDisplay\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <!-- <ion-col size=\"3\" class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">الخصم</ion-label>\n                <ion-item class=\"custInput footer-input-item\">\n                  <ion-input [value]=\"payInvo.discount | currencyDisplay\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col> -->\n              <ion-col   class=\"footer-input-container\">\n                <div class=\"discount-header\"> \n                  <div dir=\"rtl\" class=\"discount-segment-container\"> \n                    <ion-segment \n                      [(ngModel)]=\"discountType\" \n                      (ionChange)=\"onDiscountTypeChange($event)\" \n                      class=\"compact-discount-segment\"\n                      [disabled]=\"isLoading()\">\n                      <ion-segment-button value=\"percentage\" class=\"compact-segment-button\">\n                        <ion-label>نسبة الخصم%</ion-label>\n                      </ion-segment-button>\n                      <ion-segment-button value=\"amount\" class=\"compact-segment-button\">\n                        <ion-label>مبلغ الخصم</ion-label>\n                      </ion-segment-button>\n                    </ion-segment>\n                  </div>\n                </div>\n                <!-- Percentage Discount Input -->\n                <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input custInput discount-input\">\n                  <ion-input \n                    type=\"number\" \n                    [(ngModel)]=\"discountPerc\" \n                    (ionInput)=\"onPercentageDiscountChange($event)\"\n                    placeholder=\"نسبة الخصم %\"\n                    [disabled]=\"isLoading()\">\n                  </ion-input>\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\" class=\"discount-note\">\n                    {{ formatBalance(calculatedDiscountAmount) }} \n                  </ion-note>\n                </ion-item>\n\n                <!-- Amount Discount Input -->\n                <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input custInput discount-input\">\n                  <ion-input \n                    type=\"number\" \n                    [(ngModel)]=\"discountAmount\" \n                    (ionInput)=\"onAmountDiscountChange($event)\"\n                     placeholder=\"مبلغ الخصم\"\n                     [disabled]=\"isLoading()\">\n                  </ion-input>\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\" class=\"discount-note\">\n                    {{ calculatedDiscountPerc.toFixed(2) }}%\n                  </ion-note>\n                </ion-item>\n              </ion-col>\n              <ion-col   class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">المجموع بعد الخصم</ion-label>\n                <ion-item class=\"custInput total-after-discount footer-input-item\">\n                  <ion-input [value]=\"(+payInvo.tot_pr - +payInvo.discount) | currencyDisplay\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n        \n        <!-- Action buttons on the left side -->\n        <ion-col size=\"4\">\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col size=\"6\">\n                <ion-button \n                  expand=\"block\" \n                  routerDirection=\"root\" \n                  color=\"primary\" \n                  (click)=\"save()\"\n                  [disabled]=\"isLoading()\">\n                  <ion-spinner *ngIf=\"isSaving\" slot=\"start\" name=\"dots\"></ion-spinner>\n                  <ion-label class=\"ion-text-center\">\n                    {{ isSaving ? currentLoadingMessage : 'حفظ' }}\n                  </ion-label>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" *ngIf=\"status == 'initial' || status == 'toFinal'\">\n                <ion-button \n                  expand=\"block\" \n                  routerDirection=\"root\" \n                  color=\"danger\" \n                  (click)=\"presentAlertConfirm('initial')\"\n                  [disabled]=\"isLoading()\">\n                  <ion-spinner *ngIf=\"isDeleting\" slot=\"start\" name=\"dots\"></ion-spinner>\n                  <ion-label class=\"ion-text-center\">\n                    {{ isDeleting ? 'جاري الحذف...' : 'حذف' }}\n                  </ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sales_sales_module_ts.js.map
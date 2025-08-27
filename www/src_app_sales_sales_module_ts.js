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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _insufficient_stock_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insufficient-stock-dialog.component.html?ngResource */ 21291);
/* harmony import */ var _insufficient_stock_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insufficient-stock-dialog.component.scss?ngResource */ 47746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);






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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    createPurchaseInvoice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
                            this.navigateToInvoicePage(this.insufficientItems, 'purchase');
                        }
                    }
                ]
            });
            yield alert.present();
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
            }
        };
        // Dismiss modal first
        this.modalController.dismiss();
        // Navigate to purchase page
        this.router.navigate(['folder/purchase'], navigationExtras);
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
InsufficientStockDialogComponent.propDecorators = {
    insufficientItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    store_info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    user_info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    year: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
InsufficientStockDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _sales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.page.html?ngResource */ 81421);
/* harmony import */ var _sales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.page.scss?ngResource */ 3674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe */ 79208);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _services_account_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/account-communication.service */ 32724);
/* harmony import */ var _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/price-adjustment-dialog/price-adjustment-dialog.component */ 91872);















let SalesPage = class SalesPage {
    constructor(rout, platform, behavApi, _location, route, renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast, accountCommunicationService) {
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
        if (this.customerSubscription) {
            this.customerSubscription.unsubscribe();
        }
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
                            // Reset invoice data when user cancels print (after save)
                            if (!initial) {
                                this.prepareInvo();
                            }
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        // Clear discount related variables
        this.discountType = 'percentage';
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
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
        this.payInvo.changee = +(this.payInvo.tot_pr - +this.payInvo.discount) - this.payInvo.pay;
    }
    // Update your existing discountChange method
    discountChange(ev) {
        // Keep this for backward compatibility if needed
        this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100).toFixed(2);
        this.payInvo.changee = +(this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay;
    }
    // Update your existing discountPerChange method
    discountPerChange(ev) {
        // Keep this for backward compatibility if needed
        this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
        this.payInvo.changee = +(this.payInvo.tot_pr - this.payInvo.discount) - this.payInvo.pay;
    }
    // Update your getTotal method to reset discount calculations
    getTotal() {
        let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
        this.payInvo.tot_pr = sum - +this.payInvo.discount;
        this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
        this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
        this.payInvo.changee = this.payInvo.changee.toFixed(2);
        // Recalculate discount labels when total changes
        if (this.discountType === 'percentage' && this.discountPerc > 0) {
            this.calculatedDiscountAmount = (sum * +this.discountPerc / 100);
        }
        else if (this.discountType === 'amount' && this.discountAmount > 0) {
            this.calculatedDiscountPerc = ((+this.discountAmount / sum) * 100);
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
            this.prepareInvo();
            this.status = 'new';
        });
    }
    resortItemList() {
        this.isItemListSorted = false;
        this.sortItemListAlphabetically();
    }
    saveInvoInit() {
        // Optimized: Save invoice and items together in single API call
        const invoiceWithItems = {
            invoice: this.payInvo,
            items: this.itemList
        };
        console.log('Sending invoice data to saveInvoInit:', invoiceWithItems);
        console.log('PayInvo object:', this.payInvo);
        console.log('ItemList array:', this.itemList);
        this.api.saveSalesInvoInitWithItems(invoiceWithItems).subscribe((response) => {
            console.log('Initial invoice and items saved:', response);
            this.handleSaveSuccess();
        }, (err) => {
            console.log('Save error:', err);
            console.log('Error details:', err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
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
        if (this.status != 'toFinal') {
            this.presentLoadingWithOptions('جاري حذف البيانات ...');
        }
        const deletionData = {
            pay_id: this.payInvo.pay_id,
            pay_ref: this.payInvo.pay_ref
        };
        this.api.deleteSalesInvoInitWithItems(deletionData).subscribe(data => {
            //console.log(data)
            if (data['success']) {
                if (this.status != 'toFinal') {
                    this.presentToast('تم الحذف بنجاح', 'success');
                    this.prepareInvo();
                    // Navigate back to previous page after successful deletion
                    setTimeout(() => {
                        this.back();
                    }, 1500); // Give time for toast to show
                }
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            if (this.status != 'toFinal') {
                this.loadingController.dismiss();
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
        this.presentLoadingWithOptions('جاري التحقق من الكميات المتوفرة ...');
        console.log('validateStockQuantityBeforeSave', this.itemList);
        // Prepare item list for validation
        const itemsToValidate = this.itemList.map(item => ({
            item_id: item.item_id,
            quantity: item.quantity
        }));
        console.log('item', itemsToValidate);
        this.api.validateStockQuantity(this.store_info.id, itemsToValidate).subscribe((response) => {
            this.loadingController.dismiss();
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
        }, (error) => {
            this.loadingController.dismiss();
            console.error('Stock validation error:', error);
            this.presentToast('خطأ في الاتصال أثناء التحقق من الكميات', 'danger');
        });
    }
    showInsufficientStockDialog(insufficientItems) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        this.presentLoadingWithOptions('جاري حفظ البيانات ...');
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
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 5000,
                message: msg,
                translucent: true,
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
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
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAllStockItemsWithouteCounts();
        });
    }
    back() {
        this._location.back();
    }
    updateInitInvo() {
        this.api.updateInitSalesInvo(this.payInvo).subscribe(data => {
            //console.log(data)
            this.deleteSalesitemListInit4update();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
        });
    }
    deleteSalesitemListInit4update() {
        this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.saveitemListinit();
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                    this.loadingController.dismiss();
                });
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
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
        this.doubleCheckForFinalStatus();
        // Optimized: Save invoice and items together in single API call
        const invoiceWithItems = {
            invoice: this.payInvo,
            items: this.itemList
        };
        console.log('status', this.status, invoiceWithItems);
        this.api.saveSalesInvoWithItems(invoiceWithItems).subscribe((response) => {
            console.log('Final invoice and items saved:', response);
            this.handleSaveSuccess();
        }, (err) => {
            console.log('Save error:', err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
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
        console.log('Print array prepared:', this.printArr);
        // For final invoices, show journal entry confirmation
        if (this.radioVal2 == 1) {
            this.presentJournalEntryConfirmation();
        }
        else {
            // For initial invoices, go directly to print confirmation
            this.presentAlertConfirm();
        }
        this.loadingController.dismiss();
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
    // Legacy method - kept for compatibility but no longer used in optimized flow
    saveitemListinit() {
        this.api.saveSalesitemListInit(this.itemList).subscribe(data => {
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
            // Navigate back if coming from items page
            if (this.showBackButton) {
                setTimeout(() => {
                    this.goBack();
                }, 1500); // Give time for toast to show
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    goBack() {
        this._location.back();
    }
    // New methods for journal entry workflow
    presentJournalEntryConfirmation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const totalAfterDiscount = (+this.payInvo.tot_pr - +this.payInvo.discount);
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
                            this.cleanupAfterInvoice();
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
        const totalAfterDiscount = (+this.payInvo.tot_pr - +this.payInvo.discount);
        this.invoiceJournalData = {
            invoiceAmount: totalAfterDiscount,
            totalAfterDiscount: totalAfterDiscount,
            customerAccount: this.selectedAccount,
            customerBalance: this.customerBalance,
            invoiceRef: this.payInvo.pay_ref,
            invoiceType: 'sales',
            invoiceDate: this.payInvo.pay_date,
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
        this.cleanupAfterInvoice();
    }
    onJournalCancelled() {
        this.showJournalEntryModal = false;
        // Show print confirmation
        setTimeout(() => {
            this.presentAlertConfirm();
        }, 500);
        this.cleanupAfterInvoice();
    }
    cleanupAfterInvoice() {
        this.prepareInvo();
        this.status = 'new';
        // Navigate back if coming from items page
        if (this.showBackButton) {
            setTimeout(() => {
                this.goBack();
            }, 1500);
        }
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
    // Date picker method
    openDatePicker() {
        // Create a temporary input element to trigger the date picker
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.value = this.payInvo.pay_date;
        // When the date changes, update the model
        dateInput.addEventListener('change', (event) => {
            this.payInvo.pay_date = event.target.value;
        });
        // Trigger the date picker
        dateInput.click();
    }
    openPriceAdjustmentDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
};
SalesPage.ctorParameters = () => [
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
    { type: _services_account_communication_service__WEBPACK_IMPORTED_MODULE_8__.AccountCommunicationService }
];
SalesPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["dst",] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['dstPop',] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['qtyId',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popover',] }],
    popoverNotif: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popoverNotif',] }]
};
SalesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
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

module.exports = "ion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\nion-header ion-toolbar ion-title {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button {\n  --background: rgba(255, 255, 255, 0.2);\n  --background-hover: rgba(255, 255, 255, 0.3);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0 5px;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button ion-label {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n.cust-card {\n  border-radius: 5px;\n}\n.show {\n  visibility: visible;\n}\n.hide {\n  visibility: hidden;\n}\n.custRow {\n  margin-top: 5rem;\n}\n.bnone {\n  border: none;\n}\n.red {\n  color: var(--ion-color-danger);\n}\n.darko {\n  color: var(--ion-color-dark);\n}\nion-popover {\n  --offset-y: -30px ;\n}\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n.table-card-header ion-card-title {\n  margin: 0;\n}\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.compact-radio-style .discount-radio-container {\n  --min-height: 48px;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group {\n  justify-content: space-around;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option {\n  flex: 1;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background-color 0.2s ease;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option:hover {\n  background-color: var(--ion-color-light);\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option ion-label {\n  font-weight: 500;\n}\nion-segment {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  min-width: 200px;\n}\nion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-height: 28px;\n}\nion-segment ion-segment-button ion-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.rtl-input {\n  direction: rtl;\n}\n.rtl-input ion-label.float-right {\n  text-align: right !important;\n  transform-origin: right top !important;\n  right: 0 !important;\n  left: auto !important;\n}\n.rtl-input ion-label.float-right.label-floating {\n  transform: translateY(-14px) scale(0.82) !important;\n  right: 0 !important;\n}\n.rtl-input ion-input.text-right {\n  text-align: right !important;\n  --padding-start: 0;\n  --padding-end: 16px;\n}\n.rtl-input ion-input.text-right input {\n  text-align: right !important;\n  direction: ltr;\n}\n.rtl-input ion-note {\n  direction: ltr;\n}\n.custom-rtl-input .item-native {\n  flex-direction: row-reverse;\n}\n.custom-rtl-input ion-label {\n  order: 2;\n  text-align: right;\n  margin-right: 0;\n  margin-left: 16px;\n}\n.custom-rtl-input ion-input {\n  order: 1;\n  text-align: right;\n}\n.custom-rtl-input ion-input input {\n  text-align: right !important;\n}\n.custom-rtl-input ion-note {\n  order: 3;\n}\n.total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n  font-weight: 600;\n}\n.total-after-discount ion-input {\n  --color: #15803d;\n  font-size: 1.1em;\n  text-align: center;\n}\nion-modal {\n  --height: 90%;\n  --border-radius: 16px 16px 0 0;\n}\n.insufficient-stock-modal {\n  --height: 80vh;\n  --width: 90vw;\n  --max-width: 600px;\n  --border-radius: 12px;\n}\n@media (max-width: 768px) {\n  .insufficient-stock-modal {\n    --height: 95vh;\n    --width: 95vw;\n  }\n}\n.top-card-row {\n  padding: 16px;\n  align-items: flex-start;\n  gap: 16px;\n}\n.top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.top-card-row .account-column .column-label,\n.top-card-row .invoice-type-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n  font-size: 0.95rem;\n  height: 22px;\n  line-height: 30px;\n}\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n.top-card-row .invoice-type-column .invoice-type-section {\n  margin-top: 10px;\n}\n.top-card-row .invoice-type-column .invoice-type-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .invoice-type-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n.table-container {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n.search-container {\n  width: 100%;\n}\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n.table-container::-webkit-scrollbar {\n  width: 6px;\n}\n.table-container::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n}\n.table-container::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 3px;\n}\n.table-container::-webkit-scrollbar-thumb:hover {\n  background: var(--ion-color-dark);\n}\n/* ======================================\n   CATEGORY AND INVOICE TYPE SELECTOR STYLES\n   ====================================== */\n.category-section,\n.invoice-type-section {\n  margin-top: 0;\n}\n.category-section .field-label,\n.invoice-type-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n/* Responsive design for mobile */\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-column .column-label {\n    font-size: 13px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/* Footer styles */\nion-footer ion-toolbar {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-medium);\n}\nion-footer .total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n}\nion-footer .total-after-discount ion-input {\n  --color: #15803d;\n  font-weight: 600;\n}\nion-footer ion-item {\n  --background: white;\n  border-radius: 5px;\n  margin: 4px 0;\n}\nion-footer .footer-input-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  padding: 6px 0;\n}\nion-footer .footer-input-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 3px;\n  text-align: center;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .footer-input-item {\n  width: 100%;\n}\nion-footer .footer-input-item ion-input {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 3px;\n  height: 26px;\n}\nion-footer .discount-type-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 0;\n  margin-inline-end: 6px;\n  white-space: nowrap;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .discount-segment-container {\n  --background: transparent;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  flex: 1;\n  max-width: 140px;\n}\nion-footer .compact-discount-segment {\n  --background: var(--ion-color-light);\n  border-radius: 14px;\n  padding: 1px;\n  width: 100%;\n  min-height: 24px;\n}\nion-footer .compact-discount-segment .compact-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  --indicator-color: transparent;\n  --border-radius: 12px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  min-height: 22px;\n  font-size: 10px;\n}\nion-footer .compact-discount-segment .compact-segment-button ion-label {\n  font-weight: 500;\n  margin: 0;\n}\nion-footer .discount-input {\n  margin-top: 3px;\n  width: 100%;\n}\nion-footer .discount-input ion-input {\n  text-align: center;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-input .discount-note {\n  font-size: 11px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-footer .discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n/* Responsive footer for mobile */\n@media (max-width: 768px) {\n  ion-footer ion-grid {\n    padding: 0;\n  }\n  ion-footer ion-col {\n    padding: 0 3px;\n  }\n  ion-footer .footer-input-container {\n    padding: 4px 0;\n  }\n  ion-footer .footer-input-label,\nion-footer .discount-type-label {\n    font-size: 9px;\n    height: 12px;\n    margin-bottom: 2px;\n  }\n  ion-footer .discount-header {\n    margin-bottom: 2px;\n    height: 22px;\n  }\n  ion-footer .footer-input-item ion-input,\nion-footer .discount-input ion-input {\n    font-size: 11px;\n    --padding-top: 5px;\n    --padding-bottom: 5px;\n  }\n  ion-footer .discount-segment-container {\n    max-width: 110px;\n  }\n  ion-footer .compact-discount-segment {\n    min-height: 20px;\n    border-radius: 12px;\n    padding: 1px;\n  }\n  ion-footer .compact-discount-segment .compact-segment-button {\n    min-height: 18px;\n    font-size: 8px;\n    --border-radius: 10px;\n    --padding-start: 3px;\n    --padding-end: 3px;\n  }\n  ion-footer ion-button {\n    --padding-start: 0;\n    --padding-end: 0;\n    font-size: 10px;\n    height: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXJHTjtBQXVHTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFyR1I7QUF1R1E7RUFDRSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtBQXJHVjtBQXdHUTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQXRHVjtBQTZHQSxpQ0FBQTtBQUNBO0VBRUk7SUFDRSxVQUFBO0VBM0dKO0VBOEdFO0lBQ0UsY0FBQTtFQTVHSjtFQStHRTtJQUNFLGNBQUE7RUE3R0o7RUFnSEU7O0lBRUUsY0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQTlHSjtFQWlIRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtFQS9HSjtFQW9ISTs7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtFQWpITjtFQXFIRTtJQUNFLGdCQUFBO0VBbkhKO0VBc0hFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUFwSEo7RUFzSEk7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUFwSE47RUF3SEU7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUF0SEo7QUFDRiIsImZpbGUiOiJzYWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIFxuICAgIGlvbi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIFxuICAgIGlvbi1idXR0b25zW3Nsb3Q9XCJlbmRcIl0ge1xuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIFxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAgIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cbi5ibm9uZXtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4gLnJlZHtcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlcikgXG4gfVxuIC5kYXJrb3tcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKVxuIH1cbmlvbi1wb3BvdmVye1xuICAtLW9mZnNldC15IDogLTMwcHhcbn1cbi5jdXN0SW5we1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMC41cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIFxuICAudGFibGV7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTJweDtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgfVxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XG4gIFxuICAvLyBSaWdodCBhbGlnbiBpdGVtIG5hbWUgY29sdW1uXG4gIHRkOm50aC1jaGlsZCgyKSwgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9XG5cbi50YWJsZS1jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgaW9uLXJvdyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWNvbFtzaXplPVwiYXV0b1wiXSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIFxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAtLWNvbG9yLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuICAgICAgIFxuICAuZGlzY291bnQtc2VjdGlvbiB7XG4gIGlvbi1ub3RlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbi5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIFxuICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgLnJhZGlvLW9wdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgXG4gICAgICBpb24tcmFkaW8ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFsdGVybmF0aXZlIGNvbXBhY3QgdmVyc2lvbiAoaWYgeW91IHByZWZlciBldmVuIG1vcmUgY29tcGFjdClcbi5jb21wYWN0LXJhZGlvLXN0eWxlIHtcbiAgLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XG4gICAgLS1taW4taGVpZ2h0OiA0OHB4O1xuICAgIFxuICAgIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBcbiAgICAgIC5yYWRpby1vcHRpb24ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5pb24tc2VnbWVudCB7IFxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgbWluLXdpZHRoOiAyMDBweDtcbiAgXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDI4cHg7XG4gICAgXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cbi5kaXNjb3VudC1zZWN0aW9uIHtcbiAgaW9uLW5vdGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgXG4gIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBcbiAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgXG4gIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBcbiAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUlRMIElucHV0IHN0eWxpbmcgZm9yIEFyYWJpYyBsYWJlbHNcbi5ydGwtaW5wdXQge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgXG4gIGlvbi1sYWJlbC5mbG9hdC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3AgIWltcG9ydGFudDtcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBcbiAgICAmLmxhYmVsLWZsb2F0aW5nIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTRweCkgc2NhbGUoMC44MikgIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICBpb24taW5wdXQudGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICBcbiAgICBpbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgICAgZGlyZWN0aW9uOiBsdHI7IC8vIEtlZXAgbnVtYmVycyBMVFIgZm9yIGJldHRlciByZWFkYWJpbGl0eVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLW5vdGUge1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICB9XG59XG5cbi8vIEFsdGVybmF0aXZlIGFwcHJvYWNoIGlmIHRoZSBhYm92ZSBkb2Vzbid0IHdvcmsgcGVyZmVjdGx5XG4uY3VzdG9tLXJ0bC1pbnB1dCB7XG4gIC5pdGVtLW5hdGl2ZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG4gIFxuICBpb24tbGFiZWwge1xuICAgIG9yZGVyOiAyO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgfVxuICBcbiAgaW9uLWlucHV0IHtcbiAgICBvcmRlcjogMTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBcbiAgICBpbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLW5vdGUge1xuICAgIG9yZGVyOiAzO1xuICB9XG59XG5cbi8vIEFkZCBzdHlsZXMgZm9yIHRoZSB0b3RhbCBhZnRlciBkaXNjb3VudCBmaWVsZCBhbmQgcHJvZ3Jlc3Mgc3RlcHBlclxuLnRvdGFsLWFmdGVyLWRpc2NvdW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjBmZGY0O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTZhMzRhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBcbiAgaW9uLWlucHV0IHtcbiAgICAtLWNvbG9yOiAjMTU4MDNkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi8vIE1vZGFsIHN0eWxpbmdcbmlvbi1tb2RhbCB7XG4gIC0taGVpZ2h0OiA5MCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbn1cblxuLy8gSW5zdWZmaWNpZW50IFN0b2NrIE1vZGFsIFN0eWxpbmdcbi5pbnN1ZmZpY2llbnQtc3RvY2stbW9kYWwge1xuICAtLWhlaWdodDogODB2aDtcbiAgLS13aWR0aDogOTB2dztcbiAgLS1tYXgtd2lkdGg6IDYwMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAtLWhlaWdodDogOTV2aDtcbiAgICAtLXdpZHRoOiA5NXZ3O1xuICB9XG59XG5cbi8vIFRvcCBDYXJkIE9yZ2FuaXphdGlvbiBTdHlsaW5nXG4udG9wLWNhcmQtcm93IHtcbiAgcGFkZGluZzogMTZweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTZweDsgLy8gUmVwbGFjZSBvZmZzZXQgd2l0aCBnYXBcbiAgXG4gIC5hY2NvdW50LWNvbHVtbixcbiAgLmludm9pY2UtdHlwZS1jb2x1bW4sXG4gIC5jYXRlZ29yeS1jb2x1bW4sXG4gIC5kYXRlLWNvbW1lbnQtY29sdW1uLFxuICAuZGF0ZS1jb2x1bW4ge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAuY29sdW1uLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7IC8vIFJlZHVjZWQgbWFyZ2luXG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBoZWlnaHQ6IDIycHg7IC8vIEZpeGVkIGhlaWdodCBmb3IgY29uc2lzdGVudCBhbGlnbm1lbnRcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLy8gQWxpZ24gYWxsIGZvcm0gY29udGVudCBhdCB0aGUgc2FtZSBsZXZlbFxuICAuYWNjb3VudC1jb2x1bW4ge1xuICAgIGFwcC1hY2NvdW50LXNlbGVjdG9yIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICB9XG4gIFxuICAuaW52b2ljZS10eXBlLWNvbHVtbiB7XG4gICAgLmludm9pY2UtdHlwZS1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBcbiAgICAgIC5jb21wYWN0LXNlZ21lbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7IC8vIEluY3JlYXNlZCBoZWlnaHQgZm9yIGJldHRlciBhbGlnbm1lbnRcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1jb2x1bW4ge1xuICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBcbiAgICAgIC5jb21wYWN0LXNlZ21lbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7IC8vIEluY3JlYXNlZCBoZWlnaHQgZm9yIGJldHRlciBhbGlnbm1lbnRcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5kYXRlLWNvbW1lbnQtY29sdW1uIHtcbiAgICAuY29tbWVudC1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgaGVpZ2h0OiA0OHB4OyAvLyBNYXRjaCBvdGhlciBpbnB1dHNcbiAgICAgIFxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5kYXRlLWNvbHVtbiB7XG4gICAgLmRhdGUtaW5wdXQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIGhlaWdodDogNDhweDsgLy8gTWF0Y2ggb3RoZXIgaW5wdXRzXG4gICAgICBcbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduIGZvciBtb2JpbGVcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudG9wLWNhcmQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIC5hY2NvdW50LWNvbHVtbixcbiAgICAuaW52b2ljZS10eXBlLWNvbHVtbixcbiAgICAuZGF0ZS1jb21tZW50LWNvbHVtbiB7XG4gICAgICBzaXplOiAxMjtcbiAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIFxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVGFibGUgY29udGFpbmVyIGFuZCBzZWFyY2ggc3R5bGVzXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBcbiAgLnNlYXJjaC1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIFxuICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC5zZWFyY2gtbmF2aWdhdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgXG4gICAgICAuc2VhcmNoLXJlc3VsdHMge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgICBcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUYWJsZSByb3cgaGlnaGxpZ2h0aW5nXG50ci5zZWFyY2gtbWF0Y2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC4yKSAhaW1wb3J0YW50O1xufVxuXG50ci5zZWFyY2gtaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE5MywgNywgMC40KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG5cbi8vIEhpZ2hsaWdodCB0ZXh0XG5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi8vIFNjcm9sbGJhciBzdHlsaW5nIGZvciB3ZWJraXQgYnJvd3NlcnNcbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQ0FURUdPUlkgQU5EIElOVk9JQ0UgVFlQRSBTRUxFQ1RPUiBTVFlMRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5jYXRlZ29yeS1zZWN0aW9uLFxuLmludm9pY2UtdHlwZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgXG4gIC5maWVsZC1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cbn1cblxuLmNvbXBhY3Qtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGZsZXg6IDE7XG5cbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4zKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOm5vdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSk7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb21wYWN0LXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LWNvbHVtbiB7XG4gICAgLmNvbHVtbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG4gIFxuICAuY2F0ZWdvcnktc2VjdGlvbiB7XG4gICAgLmZpZWxkLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbn1cblxuLyogRm9vdGVyIHN0eWxlcyAqL1xuaW9uLWZvb3RlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG4gIFxuICAudG90YWwtYWZ0ZXItZGlzY291bnQge1xuICAgIC0tYmFja2dyb3VuZDogI2YwZmRmNDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTZhMzRhO1xuICAgIFxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLWNvbG9yOiAjMTU4MDNkO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDRweCAwO1xuICB9XG4gIFxuICAuZm9vdGVyLWlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA2cHggMDtcbiAgfVxuICBcbiAgLmZvb3Rlci1pbnB1dC1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5mb290ZXItaW5wdXQtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgfVxuICB9XG4gIFxuICAuZGlzY291bnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIGhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgLmRpc2NvdW50LXR5cGUtbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmRpc2NvdW50LXNlZ21lbnQtY29udGFpbmVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4OiAxO1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gIH1cbiAgXG4gIC5jb21wYWN0LWRpc2NvdW50LXNlZ21lbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgIFxuICAgIC5jb21wYWN0LXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgICBtaW4taGVpZ2h0OiAyMnB4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZGlzY291bnQtaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICBpb24taW5wdXQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgLS1wYWRkaW5nLXRvcDogNnB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIH1cbiAgICBcbiAgICAuZGlzY291bnQtbm90ZSB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG4gIFxuICAuZGlzY291bnQtc2VjdGlvbiB7XG4gICAgaW9uLW5vdGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuICBcbiAgLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgXG4gICAgLmlubGluZS1yYWRpby1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDI0cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIFxuICAgICAgLnJhZGlvLW9wdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBcbiAgICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogUmVzcG9uc2l2ZSBmb290ZXIgZm9yIG1vYmlsZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1mb290ZXIge1xuICAgIGlvbi1ncmlkIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIFxuICAgIGlvbi1jb2wge1xuICAgICAgcGFkZGluZzogMCAzcHg7XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXItaW5wdXQtY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIH1cbiAgICBcbiAgICAuZm9vdGVyLWlucHV0LWxhYmVsLFxuICAgIC5kaXNjb3VudC10eXBlLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cbiAgICBcbiAgICAuZGlzY291bnQtaGVhZGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICB9XG4gICAgXG4gICAgLmZvb3Rlci1pbnB1dC1pdGVtLFxuICAgIC5kaXNjb3VudC1pbnB1dCB7XG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuZGlzY291bnQtc2VnbWVudC1jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbXBhY3QtZGlzY291bnQtc2VnbWVudCB7XG4gICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgIFxuICAgICAgLmNvbXBhY3Qtc2VnbWVudC1idXR0b24ge1xuICAgICAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogM3B4O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"showBackButton\" (click)=\"goBack()\" defaultHref=\"/\"></ion-back-button>\n      <ion-menu-button *ngIf=\"!showBackButton\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>فاتورة مبيعات</ion-title>\n    <!-- Date in header -->\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openDatePicker()\">\n        <ion-label>{{ payInvo.pay_date | date:'dd/MM/yyyy' }}</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card class=\"ion-no-padding ion-no-margin\"> \n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\" class=\"top-card-row\">\n      <!-- First Column: Account Selector -->\n      <ion-col size=\"4\" class=\"account-column\">\n        <app-account-selector\n          accountType=\"customer\"\n          placeholder=\"اختر حساب العميل\"\n          label=\"حساب العميل\"\n          [store_info]=\"store_info\"\n          [year]=\"year\"\n          [showAddButton]=\"true\"\n          [(ngModel)]=\"selectedAccount\"\n          (accountSelected)=\"onAccountSelected($event)\"\n          (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n        </app-account-selector>\n      </ion-col>\n      \n      <!-- Second Column: Invoice Type -->\n      <ion-col size=\"4\" class=\"invoice-type-column\">\n        <ion-label class=\"column-label\">نوع الفاتورة</ion-label>\n        <div class=\"invoice-type-section\">\n          <ion-segment [(ngModel)]=\"radioVal2\" (ionChange)=\"radioChange2($event ,'from')\" class=\"compact-segment\">\n            <ion-segment-button [value]=\"0\">\n              <span>مبدئية</span>\n            </ion-segment-button>\n            <ion-segment-button [value]=\"1\">\n              <span>نهائية</span>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n      \n      <!-- Comment Column: Note field in same row -->\n      <ion-col size=\"4\" class=\"date-comment-column\">\n        <ion-label class=\"column-label\">ملاحظــة</ion-label>\n        <ion-item class=\"custInput comment-input\"> \n          <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n<ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\" >\n  <ion-row dir=\"rtl\">\n    <ion-col size=\"9\" class=\"ion-no-padding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card> \n             <app-item-selector\n                [items]=\"items\"\n                [loadingItems]=\"loadingItems\"\n                [searchLang]=\"searchLang\"\n                [store_info]=\"store_info\"\n                [year]=\"year\"\n                parentPage=\"sales\"\n                [enablePriceUpdateConfirmation]=\"true\"\n                [payRef]=\"payInvo.pay_ref\"\n                [showQuantityInput]=\"true\"\n                [showPriceInput]=\"true\"\n                [showPerchPriceInput]=\"false\"\n                placeholder=\"اختر الصنف\"\n                (itemSelected)=\"onItemSelected($event)\"\n                (itemAdded)=\"onItemAdded($event)\"\n                (refreshItems)=\"refresh('item')\">\n              </app-item-selector>\n            </ion-card>\n          </ion-col>\n         \n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-header color=\"primary\" class=\"table-card-header\">\n              <ion-card-title>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col size=\"3\">\n                    <span>قائمة الأصناف</span>\n                  </ion-col>\n                  <ion-col size=\"6\" class=\"ion-text-center\">\n                    <div class=\"search-container\">\n                      <ion-item lines=\"none\" class=\"search-item\">\n                        <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\n                        <ion-input\n                          [(ngModel)]=\"searchTerm\"\n                          (ionInput)=\"onSearchTermChange()\"\n                          placeholder=\"البحث في الأصناف...\"\n                          clearInput=\"true\"\n                          class=\"search-input\">\n                        </ion-input>\n                        <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\n                          <span class=\"search-results\">{{ getSearchResultText() }}</span>\n                          <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\n                            <ion-icon name=\"chevron-up\"></ion-icon>\n                          </ion-button>\n                          <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\n                            <ion-icon name=\"chevron-down\"></ion-icon>\n                          </ion-button>\n                        </div>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-text-end\">\n                    <ion-button \n                      fill=\"clear\" \n                      color=\"light\" \n                      size=\"small\"\n                      (click)=\"sortItemListAlphabetically()\"\n                      [disabled]=\"!itemList || itemList.length === 0\"\n                    >\n                      <ion-icon name=\"list\" slot=\"start\"></ion-icon>\n                      {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\n                    </ion-button>\n                    <ion-button \n                      fill=\"clear\" \n                      color=\"light\" \n                      size=\"small\"\n                      (click)=\"openPriceAdjustmentDialog()\"\n                      [disabled]=\"!itemList || itemList.length === 0\"\n                    >\n                      <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n                      تعديل الأسعار\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-card-title>\n            </ion-card-header>\n            <div class=\"table-container\">\n             <table class=\"table\">\n               <tr>\n                <th>no</th>\n                <th>الصنف</th>\n                <th>الكمية</th>\n                <th>سعر الوحده</th>\n                <th>المجموع</th> \n                <th></th> \n               </tr>\n               <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\"  \n                   (dblclick)=\"qtyClick(i)\"\n                   [attr.data-index]=\"i\"\n                   [class.search-highlight]=\"isHighlighted(i)\"\n                   [class.search-match]=\"isSearchMatch(i)\">\n                <td>{{i+1}}</td>\n                <td>\n                  <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\n                </td>\n                <td >\n                   <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \n                   <ion-item *ngIf=\"showMe == i\">\n                    <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                   </ion-item>\n                </td>\n                <td>\n                  <ion-text *ngIf=\"showMe != i\">{{formatBalance(item.pay_price)}}</ion-text> \n                   <ion-item *ngIf=\"showMe == i\">\n                    <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.pay_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                   </ion-item>\n                </td>\n\n                <td>{{formatBalance(+item.tot)}}</td>\n                <td>\n                  <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                    <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                  </ion-button>\n                </td>\n               </tr>\n               \n             \n             </table>\n            </div> \n          </ion-card>\n        </ion-col>\n        </ion-row> \n      </ion-grid>\n    </ion-col>\n\n\n    \n    \n\n\n    <!-- This column is now empty as we moved the totals and buttons to the footer -->\n    <ion-col size=\"3\" class=\"ion-no-padding\">\n    </ion-col>\n  </ion-row>\n\n\n \n</ion-grid>\n\n<!-- Footer with totals and action buttons -->\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- Discount controls on the right side -->\n        <ion-col size=\"8\" class=\"ion-text-end\">\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col size=\"3\" class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">إجمالي المبلغ</ion-label>\n                <ion-item class=\"custInput footer-input-item\">\n                  <ion-input [value]=\"formatBalance(payInvo.tot_pr)\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\" class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">الخصم</ion-label>\n                <ion-item class=\"custInput footer-input-item\">\n                  <ion-input [value]=\"formatBalance(payInvo.discount)\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\" class=\"footer-input-container\">\n                <div class=\"discount-header\">\n                  <ion-label class=\"discount-type-label\">نوع الخصم</ion-label>\n                  <ion-item dir=\"rtl\" class=\"discount-segment-container\"> \n                    <ion-segment [(ngModel)]=\"discountType\" (ionChange)=\"onDiscountTypeChange($event)\" class=\"compact-discount-segment\">\n                      <ion-segment-button value=\"percentage\" class=\"compact-segment-button\">\n                        <ion-label>نسبة %</ion-label>\n                      </ion-segment-button>\n                      <ion-segment-button value=\"amount\" class=\"compact-segment-button\">\n                        <ion-label>مبلغ</ion-label>\n                      </ion-segment-button>\n                    </ion-segment>\n                  </ion-item>\n                </div>\n                <!-- Percentage Discount Input -->\n                <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input custInput discount-input\">\n                  <ion-input \n                    type=\"number\" \n                    [(ngModel)]=\"discountPerc\" \n                    (ionInput)=\"onPercentageDiscountChange($event)\"\n                    placeholder=\"نسبة الخصم %\">\n                  </ion-input>\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\" class=\"discount-note\">\n                    {{ formatBalance(calculatedDiscountAmount) }} \n                  </ion-note>\n                </ion-item>\n\n                <!-- Amount Discount Input -->\n                <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input custInput discount-input\">\n                  <ion-input \n                    type=\"number\" \n                    [(ngModel)]=\"discountAmount\" \n                    (ionInput)=\"onAmountDiscountChange($event)\"\n                     placeholder=\"مبلغ الخصم\">\n                  </ion-input>\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\" class=\"discount-note\">\n                    {{ calculatedDiscountPerc.toFixed(2) }}%\n                  </ion-note>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\" class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">المجموع بعد الخصم</ion-label>\n                <ion-item class=\"custInput total-after-discount footer-input-item\">\n                  <ion-input [value]=\"formatBalance(+payInvo.tot_pr - +payInvo.discount)\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n        \n        <!-- Action buttons on the left side -->\n        <ion-col size=\"4\">\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-start\">\n              <ion-col size=\"6\">\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"primary\" (click)=\"save()\">\n                  <ion-label class=\"ion-text-center\">حفظ</ion-label>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" *ngIf=\"status == 'initial' || status == 'toFinal'\">\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\" (click)=\"presentAlertConfirm('initial')\">\n                  <ion-label class=\"ion-text-center\">حذف</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- Journal Entry Modal -->\n<ion-modal [isOpen]=\"showJournalEntryModal\" (willDismiss)=\"onJournalCancelled()\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n          <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; direction: rtl;\">\n            <ion-icon name=\"arrow-down-outline\" *ngIf=\"invoiceJournalData?.invoiceType === 'sales'\" color=\"success\" style=\"font-size: 1.2em;\"></ion-icon>\n            <ion-icon name=\"arrow-up-outline\" *ngIf=\"invoiceJournalData?.invoiceType === 'purchase'\" color=\"danger\" style=\"font-size: 1.2em;\"></ion-icon>\n            <span *ngIf=\"invoiceJournalData\">\n              {{ invoiceJournalData.invoiceType === 'sales' ? 'سند قبض' : 'سند دفع' }} - {{ invoiceJournalData.customerAccount?.sub_name || 'غير محدد' }}\n            </span>\n          </div>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"onJournalCancelled()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <app-invoice-journal-entry\n        *ngIf=\"invoiceJournalData\"\n        [invoiceData]=\"invoiceJournalData\"\n        (journalSaved)=\"onJournalSaved($event)\"\n        (journalCancelled)=\"onJournalCancelled()\">\n      </app-invoice-journal-entry>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sales_sales_module_ts.js.map
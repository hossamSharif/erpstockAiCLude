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

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.bnone {\n  border: none;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n\n.table-card-header ion-card-title {\n  margin: 0;\n}\n\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n\n.compact-radio-style .discount-radio-container {\n  --min-height: 48px;\n}\n\n.compact-radio-style .discount-radio-container .inline-radio-group {\n  justify-content: space-around;\n}\n\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option {\n  flex: 1;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background-color 0.2s ease;\n}\n\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option:hover {\n  background-color: var(--ion-color-light);\n}\n\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option ion-label {\n  font-weight: 500;\n}\n\nion-segment {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  min-width: 200px;\n}\n\nion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-height: 28px;\n}\n\nion-segment ion-segment-button ion-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n\n.rtl-input {\n  direction: rtl;\n}\n\n.rtl-input ion-label.float-right {\n  text-align: right !important;\n  transform-origin: right top !important;\n  right: 0 !important;\n  left: auto !important;\n}\n\n.rtl-input ion-label.float-right.label-floating {\n  transform: translateY(-14px) scale(0.82) !important;\n  right: 0 !important;\n}\n\n.rtl-input ion-input.text-right {\n  text-align: right !important;\n  --padding-start: 0;\n  --padding-end: 16px;\n}\n\n.rtl-input ion-input.text-right input {\n  text-align: right !important;\n  direction: ltr;\n}\n\n.rtl-input ion-note {\n  direction: ltr;\n}\n\n.custom-rtl-input .item-native {\n  flex-direction: row-reverse;\n}\n\n.custom-rtl-input ion-label {\n  order: 2;\n  text-align: right;\n  margin-right: 0;\n  margin-left: 16px;\n}\n\n.custom-rtl-input ion-input {\n  order: 1;\n  text-align: right;\n}\n\n.custom-rtl-input ion-input input {\n  text-align: right !important;\n}\n\n.custom-rtl-input ion-note {\n  order: 3;\n}\n\n.total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n  font-weight: 600;\n}\n\n.total-after-discount ion-input {\n  --color: #15803d;\n  font-size: 1.1em;\n  text-align: center;\n}\n\nion-modal {\n  --height: 90%;\n  --border-radius: 16px 16px 0 0;\n}\n\n.insufficient-stock-modal {\n  --height: 80vh;\n  --width: 90vw;\n  --max-width: 600px;\n  --border-radius: 12px;\n}\n\n@media (max-width: 768px) {\n  .insufficient-stock-modal {\n    --height: 95vh;\n    --width: 95vw;\n  }\n}\n\n.top-card-row {\n  padding: 16px;\n  align-items: flex-start;\n  gap: 16px;\n}\n\n.top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-card-row .account-column .column-label,\n.top-card-row .invoice-type-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n  font-size: 0.95rem;\n  height: 22px;\n  line-height: 30px;\n}\n\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n\n.top-card-row .invoice-type-column .invoice-type-section {\n  margin-top: 10px;\n}\n\n.top-card-row .invoice-type-column .invoice-type-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .invoice-type-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.table-container {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n\n.search-container {\n  width: 100%;\n}\n\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\n\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\n\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\n\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n\n.table-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.table-container::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n}\n\n.table-container::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 3px;\n}\n\n.table-container::-webkit-scrollbar-thumb:hover {\n  background: var(--ion-color-dark);\n}\n\n/* ======================================\n   CATEGORY AND INVOICE TYPE SELECTOR STYLES\n   ====================================== */\n\n.category-section,\n.invoice-type-section {\n  margin-top: 0;\n}\n\n.category-section .field-label,\n.invoice-type-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n\n/* Responsive design for mobile */\n\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-column .column-label {\n    font-size: 13px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksa0JBQUE7QUFFUjs7QUFBSTtFQUFPLG1CQUFBO0FBSVg7O0FBRkk7RUFBTSxrQkFBQTtBQU1WOztBQUxJO0VBQ0ksZ0JBQUE7QUFRUjs7QUFOQTtFQUNFLFlBQUE7QUFTRjs7QUFOQztFQUNDLDhCQUFBO0FBU0Y7O0FBUEM7RUFDQyw0QkFBQTtBQVVGOztBQVJBO0VBQ0Usa0JBQUE7QUFXRjs7QUFUQTtFQUNFLHlCQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVRFO0VBQ0ssa0JBQUE7RUFDSCxXQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVRFO0VBQ0UseUJBQUE7QUFZSjs7QUFWRTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFtQnZHOztBQWhCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFtQko7O0FBaEJBO0VBQ0UsaURBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBbUJGOztBQWpCRTtFQUNFLFNBQUE7QUFtQko7O0FBakJJO0VBQ0UsbUJBQUE7QUFtQk47O0FBakJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBbUJSOztBQWpCUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFtQlY7O0FBZk07RUFDRSx5QkFBQTtBQWlCUjs7QUFmUTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FBaUJWOztBQWZVO0VBQ0UsZ0JBQUE7QUFpQlo7O0FBUkU7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FBV0o7O0FBUEE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBUkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBVUo7O0FBUkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBVU47O0FBUk07RUFDRSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtBQVVSOztBQVBNO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBU1I7O0FBREU7RUFDRSxrQkFBQTtBQUlKOztBQUZJO0VBQ0UsNkJBQUE7QUFJTjs7QUFGTTtFQUNFLE9BQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBSVI7O0FBRlE7RUFDRSx3Q0FBQTtBQUlWOztBQURRO0VBQ0UsZ0JBQUE7QUFHVjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0Esa0RBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQyxnQkFBQTtBQUFIOztBQUVFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7QUFISjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFKSjs7QUFNSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFKTjs7QUFNTTtFQUNFLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlDQUFBO0FBSlI7O0FBT007RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFMUjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFSSjs7QUFVSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFSTjs7QUFVTTtFQUNFLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlDQUFBO0FBUlI7O0FBV007RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFUUjs7QUFnQkE7RUFDRSxjQUFBO0FBYkY7O0FBZUU7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWJKOztBQWVJO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtBQWJOOztBQWlCRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWlCSTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQWZOOztBQW1CRTtFQUNFLGNBQUE7QUFqQko7O0FBdUJFO0VBQ0UsMkJBQUE7QUFwQko7O0FBdUJFO0VBQ0UsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBckJKOztBQXdCRTtFQUNFLFFBQUE7RUFDQSxpQkFBQTtBQXRCSjs7QUF3Qkk7RUFDRSw0QkFBQTtBQXRCTjs7QUEwQkU7RUFDRSxRQUFBO0FBeEJKOztBQTZCQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQTFCRjs7QUE0QkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUExQko7O0FBK0JBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBNUJGOztBQWdDQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQTdCRjs7QUErQkU7RUFORjtJQU9JLGNBQUE7SUFDQSxhQUFBO0VBNUJGO0FBQ0Y7O0FBZ0NBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQTdCRjs7QUErQkU7Ozs7O0VBS0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUE3Qko7O0FBK0JJOzs7OztFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXpCTjs7QUErQkk7RUFDRSxhQUFBO0FBN0JOOztBQWtDSTtFQUNFLGdCQUFBO0FBaENOOztBQWtDTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBaENSOztBQXNDSTtFQUNFLGdCQUFBO0FBcENOOztBQXNDTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBcENSOztBQTBDSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBeENOOztBQTBDTTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUF4Q1I7O0FBOENJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUE1Q047O0FBOENNO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQTVDUjs7QUFtREE7RUFDRTtJQUNFLHNCQUFBO0VBaERGO0VBa0RFOzs7SUFHRSxRQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBaERKO0VBa0RJOzs7SUFDRSxnQkFBQTtFQTlDTjtBQUNGOztBQW9EQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFsREY7O0FBcURBO0VBQ0UsV0FBQTtBQWxERjs7QUFvREU7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFsREo7O0FBb0RJO0VBQ0UsY0FBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQWxETjs7QUFxREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBbkROOztBQXFETTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbkRSOztBQXNETTtFQUNFLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFwRFI7O0FBc0RRO0VBQ0UsZUFBQTtBQXBEVjs7QUE0REE7RUFDRSxvREFBQTtBQXpERjs7QUE0REE7RUFDRSxtREFBQTtFQUNBLDBDQUFBO0FBekRGOztBQTZEQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTFERjs7QUE4REE7RUFDRSxVQUFBO0FBM0RGOztBQThEQTtFQUNFLGtDQUFBO0FBM0RGOztBQThEQTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7QUEzREY7O0FBOERBO0VBQ0UsaUNBQUE7QUEzREY7O0FBOERBOzsyQ0FBQTs7QUFJQTs7RUFFRSxhQUFBO0FBNURGOztBQThERTs7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQTNESjs7QUErREE7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTVERjs7QUE4REU7RUFDRSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0FBNURKOztBQThESTtFQUNFLDhDQUFBO0VBQ0EsMkJBQUE7QUE1RE47O0FBK0RJO0VBQ0UsbUNBQUE7QUE3RE47O0FBZ0VJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBOUROOztBQW1FQSxpQ0FBQTs7QUFDQTtFQUdNO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBbEVOOztFQXdFRTtJQUNFLGVBQUE7RUFyRUo7O0VBMEVFO0lBQ0UsZUFBQTtFQXZFSjtBQUNGIiwiZmlsZSI6InNhbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0SW5wdXR7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuY3VzdC1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5zaG93eyB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG5cbiAgICAuaGlkZXt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICAgIC5jdXN0Um93e1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICB9XG4uYm5vbmV7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuIC5yZWR7XG4gIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpIFxuIH1cbiAuZGFya297XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaylcbiB9XG5pb24tcG9wb3ZlcntcbiAgLS1vZmZzZXQteSA6IC0zMHB4XG59XG4uY3VzdElucHtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDAuNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiBcbiAgLnRhYmxle1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEycHg7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIH1cbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fVxuICBcbiAgLy8gUmlnaHQgYWxpZ24gaXRlbSBuYW1lIGNvbHVtblxuICB0ZDpudGgtY2hpbGQoMiksIHRoOm50aC1jaGlsZCgyKSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgfVxuXG4udGFibGUtY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIFxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIFxuICAgIGlvbi1yb3cge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlvbi1jb2xbc2l6ZT1cImF1dG9cIl0ge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgLS1jb2xvci1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiAgICAgICBcbiAgLmRpc2NvdW50LXNlY3Rpb24ge1xuICBpb24tbm90ZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4uZGlzY291bnQtcmFkaW8tY29udGFpbmVyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICBcbiAgLmlubGluZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIC5yYWRpby1vcHRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIFxuICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBbHRlcm5hdGl2ZSBjb21wYWN0IHZlcnNpb24gKGlmIHlvdSBwcmVmZXIgZXZlbiBtb3JlIGNvbXBhY3QpXG4uY29tcGFjdC1yYWRpby1zdHlsZSB7XG4gIC5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xuICAgIC0tbWluLWhlaWdodDogNDhweDtcbiAgICBcbiAgICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgXG4gICAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuaW9uLXNlZ21lbnQgeyBcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgIG1pbi13aWR0aDogMjAwcHg7XG4gIFxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAyOHB4O1xuICAgIFxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4uZGlzY291bnQtc2VjdGlvbiB7XG4gIGlvbi1ub3RlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbi5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIFxuICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgLnJhZGlvLW9wdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgXG4gICAgICBpb24tcmFkaW8ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIFxuICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgLnJhZGlvLW9wdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgXG4gICAgICBpb24tcmFkaW8ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJUTCBJbnB1dCBzdHlsaW5nIGZvciBBcmFiaWMgbGFiZWxzXG4ucnRsLWlucHV0IHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIFxuICBpb24tbGFiZWwuZmxvYXQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgJi5sYWJlbC1mbG9hdGluZyB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE0cHgpIHNjYWxlKDAuODIpICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWlucHV0LnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgIGRpcmVjdGlvbjogbHRyOyAvLyBLZWVwIG51bWJlcnMgTFRSIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHlcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1ub3RlIHtcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgfVxufVxuXG4vLyBBbHRlcm5hdGl2ZSBhcHByb2FjaCBpZiB0aGUgYWJvdmUgZG9lc24ndCB3b3JrIHBlcmZlY3RseVxuLmN1c3RvbS1ydGwtaW5wdXQge1xuICAuaXRlbS1uYXRpdmUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuICBcbiAgaW9uLWxhYmVsIHtcbiAgICBvcmRlcjogMjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIH1cbiAgXG4gIGlvbi1pbnB1dCB7XG4gICAgb3JkZXI6IDE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1ub3RlIHtcbiAgICBvcmRlcjogMztcbiAgfVxufVxuXG4vLyBBZGQgc3R5bGVzIGZvciB0aGUgdG90YWwgYWZ0ZXIgZGlzY291bnQgZmllbGQgYW5kIHByb2dyZXNzIHN0ZXBwZXJcbi50b3RhbC1hZnRlci1kaXNjb3VudCB7XG4gIC0tYmFja2dyb3VuZDogI2YwZmRmNDtcbiAgYm9yZGVyOiAycHggc29saWQgIzE2YTM0YTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgXG4gIGlvbi1pbnB1dCB7XG4gICAgLS1jb2xvcjogIzE1ODAzZDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4vLyBNb2RhbCBzdHlsaW5nXG5pb24tbW9kYWwge1xuICAtLWhlaWdodDogOTAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG59XG5cbi8vIEluc3VmZmljaWVudCBTdG9jayBNb2RhbCBTdHlsaW5nXG4uaW5zdWZmaWNpZW50LXN0b2NrLW1vZGFsIHtcbiAgLS1oZWlnaHQ6IDgwdmg7XG4gIC0td2lkdGg6IDkwdnc7XG4gIC0tbWF4LXdpZHRoOiA2MDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLS1oZWlnaHQ6IDk1dmg7XG4gICAgLS13aWR0aDogOTV2dztcbiAgfVxufVxuXG4vLyBUb3AgQ2FyZCBPcmdhbml6YXRpb24gU3R5bGluZ1xuLnRvcC1jYXJkLXJvdyB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDE2cHg7IC8vIFJlcGxhY2Ugb2Zmc2V0IHdpdGggZ2FwXG4gIFxuICAuYWNjb3VudC1jb2x1bW4sXG4gIC5pbnZvaWNlLXR5cGUtY29sdW1uLFxuICAuY2F0ZWdvcnktY29sdW1uLFxuICAuZGF0ZS1jb21tZW50LWNvbHVtbixcbiAgLmRhdGUtY29sdW1uIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmNvbHVtbi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4OyAvLyBSZWR1Y2VkIG1hcmdpblxuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgaGVpZ2h0OiAyMnB4OyAvLyBGaXhlZCBoZWlnaHQgZm9yIGNvbnNpc3RlbnQgYWxpZ25tZW50XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEFsaWduIGFsbCBmb3JtIGNvbnRlbnQgYXQgdGhlIHNhbWUgbGV2ZWxcbiAgLmFjY291bnQtY29sdW1uIHtcbiAgICBhcHAtYWNjb3VudC1zZWxlY3RvciB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmludm9pY2UtdHlwZS1jb2x1bW4ge1xuICAgIC5pbnZvaWNlLXR5cGUtc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgXG4gICAgICAuY29tcGFjdC1zZWdtZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAvLyBJbmNyZWFzZWQgaGVpZ2h0IGZvciBiZXR0ZXIgYWxpZ25tZW50XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY2F0ZWdvcnktY29sdW1uIHtcbiAgICAuY2F0ZWdvcnktc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgXG4gICAgICAuY29tcGFjdC1zZWdtZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAvLyBJbmNyZWFzZWQgaGVpZ2h0IGZvciBiZXR0ZXIgYWxpZ25tZW50XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZGF0ZS1jb21tZW50LWNvbHVtbiB7XG4gICAgLmNvbW1lbnQtaW5wdXQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIGhlaWdodDogNDhweDsgLy8gTWF0Y2ggb3RoZXIgaW5wdXRzXG4gICAgICBcbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZGF0ZS1jb2x1bW4ge1xuICAgIC5kYXRlLWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICBoZWlnaHQ6IDQ4cHg7IC8vIE1hdGNoIG90aGVyIGlucHV0c1xuICAgICAgXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBmb3IgbW9iaWxlXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvcC1jYXJkLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAuYWNjb3VudC1jb2x1bW4sXG4gICAgLmludm9pY2UtdHlwZS1jb2x1bW4sXG4gICAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xuICAgICAgc2l6ZTogMTI7XG4gICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFRhYmxlIGNvbnRhaW5lciBhbmQgc2VhcmNoIHN0eWxlc1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgXG4gIC5zZWFyY2gtaXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoLW5hdmlnYXRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIFxuICAgICAgLnNlYXJjaC1yZXN1bHRzIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbWFyZ2luOiAwIDJweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVGFibGUgcm93IGhpZ2hsaWdodGluZ1xudHIuc2VhcmNoLW1hdGNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuMikgIWltcG9ydGFudDtcbn1cblxudHIuc2VhcmNoLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuNCkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuXG4vLyBIaWdobGlnaHQgdGV4dFxubWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwIDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4vLyBTY3JvbGxiYXIgc3R5bGluZyBmb3Igd2Via2l0IGJyb3dzZXJzXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENBVEVHT1JZIEFORCBJTlZPSUNFIFRZUEUgU0VMRUNUT1IgU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uY2F0ZWdvcnktc2VjdGlvbixcbi5pbnZvaWNlLXR5cGUtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIFxuICAuZmllbGQtbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG59XG5cbi5jb21wYWN0LXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBmbGV4OiAxO1xuXG4gICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMyk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuXG4gICAgJjpob3Zlcjpub3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG5cbi8qIFJlc3BvbnNpdmUgZGVzaWduIGZvciBtb2JpbGUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29tcGFjdC1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1jb2x1bW4ge1xuICAgIC5jb2x1bW4tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LXNlY3Rpb24ge1xuICAgIC5maWVsZC1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"showBackButton\" (click)=\"goBack()\" defaultHref=\"/\"></ion-back-button>\n      <ion-menu-button *ngIf=\"!showBackButton\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>فاتورة مبيعات</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card class=\"ion-no-padding ion-no-margin\"> \n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\" class=\"top-card-row\">\n      <!-- First Column: Account Selector -->\n      <ion-col size=\"3\" class=\"account-column\">\n        <app-account-selector\n          accountType=\"customer\"\n          placeholder=\"اختر حساب العميل\"\n          label=\"حساب العميل\"\n          [store_info]=\"store_info\"\n          [year]=\"year\"\n          [showAddButton]=\"true\"\n          [(ngModel)]=\"selectedAccount\"\n          (accountSelected)=\"onAccountSelected($event)\"\n          (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n        </app-account-selector>\n      </ion-col>\n      \n      <!-- Second Column: Invoice Type -->\n      <ion-col size=\"3\" class=\"invoice-type-column\">\n        <ion-label class=\"column-label\">نوع الفاتورة</ion-label>\n        <div class=\"invoice-type-section\">\n          <ion-segment [(ngModel)]=\"radioVal2\" (ionChange)=\"radioChange2($event ,'from')\" class=\"compact-segment\">\n            <ion-segment-button [value]=\"0\">\n              <span>مبدئية</span>\n            </ion-segment-button>\n            <ion-segment-button [value]=\"1\">\n              <span>نهائية</span>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n      \n      \n      <!-- Date Column -->\n      <ion-col size=\"3\" class=\"date-column\" dir=\"rtl\">\n        <ion-label class=\"column-label\">التاريخ</ion-label> \n        <ion-item class=\"custInput date-input\">\n          <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" placeholder=\"التاريخ\"></ion-input>\n        </ion-item> \n      </ion-col>\n\n      <!--  Column: Comment -->\n      <ion-col size=\"3\" class=\"date-comment-column\">\n        <ion-label class=\"column-label\">ملاحظــة</ion-label>\n        <ion-item class=\"custInput comment-input\"> \n          <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n<ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\" >\n  <ion-row dir=\"rtl\">\n    <ion-col size=\"9\" class=\"ion-no-padding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card> \n             <app-item-selector\n                [items]=\"items\"\n                [loadingItems]=\"loadingItems\"\n                [searchLang]=\"searchLang\"\n                [store_info]=\"store_info\"\n                [year]=\"year\"\n                parentPage=\"sales\"\n                [enablePriceUpdateConfirmation]=\"true\"\n                [payRef]=\"payInvo.pay_ref\"\n                [showQuantityInput]=\"true\"\n                [showPriceInput]=\"true\"\n                [showPerchPriceInput]=\"false\"\n                placeholder=\"اختر الصنف\"\n                (itemSelected)=\"onItemSelected($event)\"\n                (itemAdded)=\"onItemAdded($event)\"\n                (refreshItems)=\"refresh('item')\">\n              </app-item-selector>\n            </ion-card>\n          </ion-col>\n         \n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-header color=\"primary\" class=\"table-card-header\">\n              <ion-card-title>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col size=\"3\">\n                    <span>قائمة الأصناف</span>\n                  </ion-col>\n                  <ion-col size=\"6\" class=\"ion-text-center\">\n                    <div class=\"search-container\">\n                      <ion-item lines=\"none\" class=\"search-item\">\n                        <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\n                        <ion-input\n                          [(ngModel)]=\"searchTerm\"\n                          (ionInput)=\"onSearchTermChange()\"\n                          placeholder=\"البحث في الأصناف...\"\n                          clearInput=\"true\"\n                          class=\"search-input\">\n                        </ion-input>\n                        <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\n                          <span class=\"search-results\">{{ getSearchResultText() }}</span>\n                          <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\n                            <ion-icon name=\"chevron-up\"></ion-icon>\n                          </ion-button>\n                          <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\n                            <ion-icon name=\"chevron-down\"></ion-icon>\n                          </ion-button>\n                        </div>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-text-end\">\n                    <ion-button \n                      fill=\"clear\" \n                      color=\"light\" \n                      size=\"small\"\n                      (click)=\"sortItemListAlphabetically()\"\n                      [disabled]=\"!itemList || itemList.length === 0\"\n                    >\n                      <ion-icon name=\"list\" slot=\"start\"></ion-icon>\n                      {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\n                    </ion-button>\n                    <ion-button \n                      fill=\"clear\" \n                      color=\"light\" \n                      size=\"small\"\n                      (click)=\"openPriceAdjustmentDialog()\"\n                      [disabled]=\"!itemList || itemList.length === 0\"\n                    >\n                      <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n                      تعديل الأسعار\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-card-title>\n            </ion-card-header>\n            <div class=\"table-container\">\n             <table class=\"table\">\n               <tr>\n                <th>no</th>\n                <th>الصنف</th>\n                <th>الكمية</th>\n                <th>سعر الوحده</th>\n                <th>المجموع</th> \n                <th></th> \n               </tr>\n               <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\"  \n                   (dblclick)=\"qtyClick(i)\"\n                   [attr.data-index]=\"i\"\n                   [class.search-highlight]=\"isHighlighted(i)\"\n                   [class.search-match]=\"isSearchMatch(i)\">\n                <td>{{i+1}}</td>\n                <td>\n                  <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\n                </td>\n                <td >\n                   <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \n                   <ion-item *ngIf=\"showMe == i\">\n                    <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                   </ion-item>\n                </td>\n                <td>\n                  <ion-text *ngIf=\"showMe != i\">{{formatBalance(item.pay_price)}}</ion-text> \n                   <ion-item *ngIf=\"showMe == i\">\n                    <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.pay_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                   </ion-item>\n                </td>\n\n                <td>{{formatBalance(+item.tot)}}</td>\n                <td>\n                  <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                    <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                  </ion-button>\n                </td>\n               </tr>\n               \n             \n             </table>\n            </div> \n          </ion-card>\n        </ion-col>\n        </ion-row> \n      </ion-grid>\n    </ion-col>\n\n\n    \n    \n\n\n    <ion-col size=\"3\" class=\"ion-no-padding\">\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n              <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [value]=\"formatBalance(payInvo.tot_pr)\" [readonly]=\"true\" ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"11\">\n              <!-- Discount Section -->\n              <ion-label class=\"ion-padding\"><strong>  الخصم  </strong> </ion-label>\n                <ion-item dir=\"rtl\"> \n                  <ion-segment [(ngModel)]=\"discountType\" (ionChange)=\"onDiscountTypeChange($event)\" slot=\"start\">\n                    <ion-segment-button value=\"percentage\">\n                      <ion-label>نسبة %</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"amount\">\n                      <ion-label>مبلغ</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                </ion-item>  \n              <!-- Percentage Discount Input -->\n              <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input\" class=\"custInput\">\n                <ion-label position=\"floating\" class=\"float-right\">نسبة الخصم %</ion-label>\n                <ion-input \n                  type=\"number\" \n                  [(ngModel)]=\"discountPerc\" \n                  (ionInput)=\"onPercentageDiscountChange($event)\"\n                  placeholder=\"نسبة الخصم %\">\n                </ion-input>\n                <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\">\n                  {{ formatBalance(calculatedDiscountAmount) }} \n                </ion-note>\n              </ion-item>\n\n              <!-- Amount Discount Input -->\n              <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input\" class=\"custInput\">\n                <ion-label position=\"floating\" class=\"float-right\">مبلغ الخصم</ion-label>\n                <ion-input \n                  type=\"number\" \n                  [(ngModel)]=\"discountAmount\" \n                  (ionInput)=\"onAmountDiscountChange($event)\"\n                   placeholder=\"مبلغ الخصم \">\n                </ion-input>\n                <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\">\n                  {{ calculatedDiscountPerc.toFixed(2) }}%\n                </ion-note>\n              </ion-item>\n            </ion-col>\n            <!-- Total after discount for all sales invoices -->\n            <ion-col size=\"11\">\n              <ion-label class=\"ion-padding\"><strong>المجموع بعد الخصم</strong></ion-label>\n              <ion-item class=\"custInput total-after-discount\"> \n                <ion-input [value]=\"formatBalance(+payInvo.tot_pr - +payInvo.discount)\" [readonly]=\"true\"></ion-input>\n              </ion-item>\n            </ion-col>\n            \n            <!-- Keep hidden inputs to maintain values -->\n            <input type=\"hidden\" [(ngModel)]=\"payInvo.pay\">\n            <input type=\"hidden\" [(ngModel)]=\"payInvo.nextPay\">\n          </ion-row>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"5\" >\n              <ion-button fill=\"outline\" expand=\"block\" routerDirection=\"root\" color=\"primary\"  (click)=\"save()\" >\n                <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"5\"  *ngIf=\"status == 'initial' || status == 'toFinal'\">\n              <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\"  (click)=\"presentAlertConfirm('initial')\" >\n                <ion-label class=\"ion-text-center\"> حــذف</ion-label>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n \n</ion-grid>\n\n</ion-content>\n\n<!-- Journal Entry Modal -->\n<ion-modal [isOpen]=\"showJournalEntryModal\" (willDismiss)=\"onJournalCancelled()\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n          <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; direction: rtl;\">\n            <ion-icon name=\"arrow-down-outline\" *ngIf=\"invoiceJournalData?.invoiceType === 'sales'\" color=\"success\" style=\"font-size: 1.2em;\"></ion-icon>\n            <ion-icon name=\"arrow-up-outline\" *ngIf=\"invoiceJournalData?.invoiceType === 'purchase'\" color=\"danger\" style=\"font-size: 1.2em;\"></ion-icon>\n            <span *ngIf=\"invoiceJournalData\">\n              {{ invoiceJournalData.invoiceType === 'sales' ? 'سند قبض' : 'سند دفع' }} - {{ invoiceJournalData.customerAccount?.sub_name || 'غير محدد' }}\n            </span>\n          </div>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"onJournalCancelled()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <app-invoice-journal-entry\n        *ngIf=\"invoiceJournalData\"\n        [invoiceData]=\"invoiceJournalData\"\n        (journalSaved)=\"onJournalSaved($event)\"\n        (journalCancelled)=\"onJournalCancelled()\">\n      </app-invoice-journal-entry>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sales_sales_module_ts.js.map
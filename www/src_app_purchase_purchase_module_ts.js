"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_purchase_purchase_module_ts"],{

/***/ 25003:
/*!**********************************!*\
  !*** ./src/app/purchase/pipe.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe = class FilterPipe {
    transform(items, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || items.length === 0) {
                return items;
            }
            else {
                /// old way   return filter ? items.filter(item=> item.item_name.toLocaleLowerCase().indexOf(filter) != -1 ) : items;
                return filter ? items.filter(item => {
                    filter = filter.toLocaleLowerCase();
                    // Search across multiple attributes
                    return ((item.item_name && item.item_name.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.brand && item.brand.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.pay_price && item.pay_price.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.perch_price && item.perch_price.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.model && item.model.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.parcode && item.parcode.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.part_no && item.part_no.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.item_desc && item.item_desc.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.aliasEn && item.aliasEn.toLocaleLowerCase().indexOf(filter) !== -1));
                }) : items;
            }
        }
    }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByName', pure: true })
], FilterPipe);



/***/ }),

/***/ 73339:
/*!***********************************!*\
  !*** ./src/app/purchase/pipe2.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe2": () => (/* binding */ FilterPipe2)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe2 = class FilterPipe2 {
    transform(items, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || items.length === 0) {
                return items;
            }
            else {
                return filter ? items.filter(item => item.aliasEn.toLocaleLowerCase().indexOf(filter) != -1) : items;
            }
        }
    }
};
FilterPipe2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByAlias', pure: true })
], FilterPipe2);



/***/ }),

/***/ 61646:
/*!***********************************!*\
  !*** ./src/app/purchase/pipe3.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe3": () => (/* binding */ FilterPipe3)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe3 = class FilterPipe3 {
    transform(items, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || items.length === 0) {
                return items;
            }
            else {
                return filter ? items.filter(item => item.item_desc.toLocaleLowerCase().indexOf(filter) != -1) : items;
            }
        }
    }
};
FilterPipe3 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByEnName', pure: true })
], FilterPipe3);



/***/ }),

/***/ 4552:
/*!*****************************************************!*\
  !*** ./src/app/purchase/purchase-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePageRoutingModule": () => (/* binding */ PurchasePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase.page */ 47723);




const routes = [
    {
        path: '',
        component: _purchase_page__WEBPACK_IMPORTED_MODULE_0__.PurchasePage
    }
];
let PurchasePageRoutingModule = class PurchasePageRoutingModule {
};
PurchasePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchasePageRoutingModule);



/***/ }),

/***/ 10930:
/*!*********************************************!*\
  !*** ./src/app/purchase/purchase.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePageModule": () => (/* binding */ PurchasePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-routing.module */ 4552);
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase.page */ 47723);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe */ 25003);
/* harmony import */ var _pipe2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe2 */ 73339);
/* harmony import */ var _pipe3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe3 */ 61646);












let PurchasePageModule = class PurchasePageModule {
};
PurchasePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasePageRoutingModule
        ],
        exports: [],
        declarations: [_purchase_page__WEBPACK_IMPORTED_MODULE_1__.PurchasePage, _pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe, _pipe2__WEBPACK_IMPORTED_MODULE_5__.FilterPipe2, _pipe3__WEBPACK_IMPORTED_MODULE_6__.FilterPipe3]
    })
], PurchasePageModule);



/***/ }),

/***/ 47723:
/*!*******************************************!*\
  !*** ./src/app/purchase/purchase.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePage": () => (/* binding */ PurchasePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _purchase_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase.page.html?ngResource */ 48417);
/* harmony import */ var _purchase_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase.page.scss?ngResource */ 14858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item-modal/item-modal.page */ 3671);
/* harmony import */ var _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/price-adjustment-dialog/price-adjustment-dialog.component */ 91872);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe */ 25003);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
















let PurchasePage = class PurchasePage {
    // اي طريقة دفع ح يكون في حساب مقابل ليها مثلا الكاش ح يتورد في حساب الخزينة وبنكك في حساب بنك الخرطوم اما الشيك فحيكون بالاجل و ح ينزل في  سجل الشيكات ويتحول الي حساب المعين سواء كان اتورد في حساب بنكي او اتسحب كاش واتورد فيحساب الخزينة 
    constructor(behavApi, route, renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast, _location) {
        this.behavApi = behavApi;
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
        this._location = _location;
        this.discountType = 'percentage'; // 'percentage' or 'amount'
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.isOpenNotif = false;
        this.newNotif = false;
        this.sub_account = [];
        this.sub_accountLocalPurch = [];
        this.items = [];
        this.isOpen = false;
        this.notifArr = [];
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.showNotif = false;
        this.sub_accountPurch = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        this.searchTerm = '';
        this.highlightedIndex = -1;
        this.searchMatches = [];
        this.loadingItems = false;
        this.showBackButton = false;
        this.color = 'dark';
        this.itemsLocal = [];
        this.itemList = [];
        this.purchLocal = [];
        this.purchase = [];
        this.randomsNumber = [];
        this.sub_nameNew = "";
        // Category properties
        this.discountPerc = 0;
        this.radioVal = 0;
        this.printMode = false;
        this.offline = false;
        this.printArr = [];
        this.showMe = null;
        this.getItemLoader = false;
        this.searchLang = 0;
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        this.status = 'new';
        this.pendingItemsFromStock = [];
        this.statusFromRoute = '';
        this.currenQty = 0;
        this.firstQty = 0;
        this.perchTotQty = 0;
        this.payTotQty = 0;
        this.perchTot = 0;
        this.qtyReal = 0;
        this.availQty = 0;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "" };
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
            aliasEn: ""
        };
        this.route.queryParams.subscribe(params => {
            //console.log(params.payInvo,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
            if (params && params.payInvo) {
                this.status = 'initial';
                this.payInvo = JSON.parse(params.payInvo);
                this.user_info = JSON.parse(params.user_info);
                this.store_info = JSON.parse(params.store_info);
                this.itemList = JSON.parse(params.itemList);
                this.getAppInfoCase2();
            }
            else if (params['status'] === 'newInvoFromItemsPage' && params['selectedItemsList']) {
                console.log('New invoice from items page');
                this.statusFromRoute = params['status'];
                this.pendingItemsFromStock = JSON.parse(params['selectedItemsList']);
                this.showBackButton = true; // Show back button when coming from items page
                console.log('Received items from stock page:', this.pendingItemsFromStock);
                this.showPriceAdjustmentDialog('initial');
            }
        });
        this.printArr.push({
            'payInvo': "",
            'itemList': "",
            'selectedAccount': "",
            'sub_nameNew': ""
        });
    }
    refresh(para) {
        // this.getItems()
        this.getAllStockItemsWithouteCounts();
        // this.getStockItems()
    }
    getAllStockItemsWithouteCounts() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                //console.log('this.year.id',this.year.id)
                if (this.offline == false) {
                    this.loadingItems = true;
                    this.api.getAllStockItemsWithouteCounts(1, this.year.id).subscribe(data => {
                        console.log(data);
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
                else {
                    this.items = this.itemsLocal;
                    // this.items.forEach(element => {
                    //   if(+element.tswiaQuantity > 0){
                    //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
                    //   }else if(+element.tswiaQuantity < 0){
                    //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
                    //   }
                    //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
                    // });
                    this.searchResult = this.items;
                }
            }
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: 'هل تريد طباعة فاتورة ؟ ',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah'); 
                            this.prepareInvo();
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            this.presentModal(this.printArr, 'perch');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    priceChangeAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: 'هل تريد تعديل اسعار البيع والشراء',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah'); 
                            this.addTolist();
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            this.updateItemDetail();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateItemDetail() {
        this.presentLoadingWithOptions('جاري تعديل البيانات ...');
        this.logHistoryArr.push({
            "id": null,
            "logRef": this.generateRandom2('update item'),
            "userId": this.user_info.id,
            "typee": 'update item',
            "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            "logStatus": 0,
            "logToken": JSON.stringify(this.selectedItem),
            "yearId": this.year.id,
            "store_id": this.store_info.id
        });
        this.api.updateItem(this.selectedItem).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
                this.performSync2();
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    Print(elem) {
        this.printMode = true;
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write('<html><head>');
        mywindow.document.write('<style type="text/css">');
        mywindow.document.write('.flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;}.ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }');
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
    ngOnInit() {
        // Check category visibility setting
        if (this.status == 'new') {
            this.getAppInfo();
        }
        else if (this.status == 'initial') {
            this.getAppInfoCase2();
        }
    }
    showPriceAdjustmentDialog(mode = 'initial') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let itemsToPass = [];
            let isInitialMode = false;
            if (mode === 'initial') {
                // Case 1: Initial load with pendingItemsFromStock
                if (!this.pendingItemsFromStock || this.pendingItemsFromStock.length === 0) {
                    return;
                }
                itemsToPass = this.pendingItemsFromStock;
                isInitialMode = true;
            }
            else {
                // Case 2: Edit current itemList
                if (!this.itemList || this.itemList.length === 0) {
                    return;
                }
                // Convert itemList to format expected by modal
                itemsToPass = this.itemList.map(item => ({
                    id: item.item_id,
                    item_name: item.item_name,
                    qty: item.quantity,
                    perch_price: item.perch_price,
                    pay_price: item.pay_price,
                    item_unit: item.item_unit || '',
                    part_no: item.part_no || '',
                    brand: item.brand || '',
                    model: item.model || '',
                    aliasEn: item.aliasEn || ''
                }));
                isInitialMode = false;
            }
            try {
                const modal = yield this.modalController.create({
                    component: _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_7__.PriceAdjustmentDialogComponent,
                    componentProps: {
                        itemsList: itemsToPass,
                        mode: 'purchase'
                    },
                    cssClass: 'price-adjustment-modal'
                });
                modal.onDidDismiss().then((data) => {
                    if (data.data) {
                        // User applied price adjustments
                        if (isInitialMode) {
                            this.handleInitialModeResult(data.data);
                        }
                        else {
                            this.handleEditModeResult(data.data);
                        }
                    }
                    else {
                        // User cancelled
                        if (isInitialMode) {
                            this.addItemsFromStockToPurchase();
                        }
                        // For edit mode, do nothing if cancelled
                    }
                });
                yield modal.present();
            }
            catch (error) {
                console.error('Error creating modal:', error);
                if (isInitialMode) {
                    this.addItemsFromStockToPurchase();
                }
            }
        });
    }
    handleInitialModeResult(updatedItems) {
        // Case 1: Clear itemList and add updated items from pendingItemsFromStock
        this.itemList = []; // Clear existing items
        // Update pendingItemsFromStock with new prices
        this.pendingItemsFromStock = updatedItems;
        // Add items to itemList
        this.addItemsFromStockToPurchase();
        // Reset pendingItemsFromStock
        this.pendingItemsFromStock = [];
        // Recalculate totals
        this.recalculateTotals();
    }
    handleEditModeResult(updatedItems) {
        // Case 2: Update existing itemList with new prices
        if (!updatedItems || updatedItems.length === 0)
            return;
        // Update the itemList with new prices instead of recreating it
        updatedItems.forEach(updatedItem => {
            const itemIndex = this.itemList.findIndex(item => item.item_id === updatedItem.id && item.item_name === updatedItem.item_name);
            if (itemIndex !== -1) {
                // Update the perch_price and recalculate total
                this.itemList[itemIndex].perch_price = parseFloat(updatedItem.perch_price) || 0;
                this.itemList[itemIndex].tot = (this.itemList[itemIndex].quantity * this.itemList[itemIndex].perch_price).toFixed(2);
            }
        });
        // Recalculate totals
        this.recalculateTotals();
        this.presentToast('تم تعديل الأسعار بنجاح', 'success');
    }
    recalculateTotals() {
        // Recalculate tot_pr, pay, and changee using getTotal()
        this.getTotal(); // This updates payInvo.tot_pr, payInvo.changee based on itemList totals
        // Update pay amount to match total (common behavior after price adjustments)
        this.payInvo.pay = this.payInvo.tot_pr;
        this.payInvo.changee = 0; // Reset change since pay matches total
    }
    addItemsFromStockToPurchase() {
        // Add items from pendingItemsFromStock to itemList following prepareInvo() pattern
        let d = new Date();
        this.pendingItemsFromStock.forEach(item => {
            this.itemList.push({
                "id": 'NULL',
                "pay_ref": this.payInvo.pay_ref,
                "item_name": item.item_name,
                "pay_price": item.pay_price,
                "quantity": +item.qty,
                "tot": (+item.qty * +item.perch_price).toFixed(2),
                "store_id": +this.store_info.id,
                "yearId": +this.year.id,
                "item_id": +item.id,
                "dateCreated": this.datePipe.transform(d, 'dd-MM-YYYY'),
                "perch_price": item.perch_price
            });
        });
        // Clear pending items
        this.pendingItemsFromStock = [];
        // Recalculate totals using existing method
        this.getTotal();
    }
    // Public method to open price adjustment dialog for editing current itemList
    openPriceAdjustmentDialog() {
        this.showPriceAdjustmentDialog('edit');
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
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                this.prepareInvo();
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.items = response;
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
                this.payInvo.yearId = this.year.id;
                this.itemList.forEach(element => {
                    element.yearId = this.year.id;
                });
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
    radioChange(ev) {
        //console.log(ev.target.value) 
    }
    presentPopover(e) {
        //console.log('preent me', e)
        this.popover2.event = e;
        this.isOpen = true;
        this.clear();
        this.searchResult = this.items;
        setTimeout(() => {
            this.setFocusOnInput('popInput2');
        }, 2000);
    }
    presentPopoverNotif(e) {
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif3.event = e;
        this.isOpenNotif = true;
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
    }
    didDissmis() {
        this.isOpen = false;
        this.getItemPaysByItemId();
        this.setFocusOnInput('qtyIdP');
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _pipe__WEBPACK_IMPORTED_MODULE_8__.FilterPipe;
        let fiteredArr = filterPipe.transform(this.items, ev.target.value);
        if (fiteredArr.length > 0) {
            fiteredArr.forEach(element => {
                this.searchResult.push(element);
            });
        } //console.log('search',this.searchResult)
    }
    getItemPaysByItemId() {
        this.api.getItemQtyPaysByItemId(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            console.log('getItemPaysByItemId', data);
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payTotQty = res['data'][0].salesQuantity;
            }
            this.getQtyPurchByItemId();
        }, (err) => {
            //console.log(err);
            this.presentToast('1خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    getQtyPurchByItemId() {
        this.api.getQtyPurchByItemId(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            //console.log('purch',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.perchTotQty = res['data'][0].perchQuantity;
                this.firstQty = res['data'][0].firstQuantity;
            }
            this.getQtyTswiaByItemId();
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    getQtyTswiaByItemId() {
        this.api.getQtyTswiaByItemId(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            console.log('getQtyTswiaByItemId', data);
            let res = data;
            if (res['message'] != 'No record Found') {
                this.availQty = res['data'][0].availQty;
                this.qtyReal = res['data'][0].qtyReal;
            }
            this.getQtyTotalItemId();
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    getQtyTotalItemId() {
        //console.log('perchTotQty',this.perchTotQty ,this.payTotQty )
        //تجميع الكيات السالبة وتحويلها لموجب لإضافتها للمشتريات
        if ((+this.availQty - +this.qtyReal) < 0) {
            this.perchTotQty = +this.perchTotQty + Math.abs((+this.availQty - +this.qtyReal));
        }
        else if ((+this.availQty - +this.qtyReal) > 0) {
            this.payTotQty = +this.payTotQty + (+this.availQty - +this.qtyReal);
        }
        this.availQty = +this.perchTotQty - +this.payTotQty;
        console.log(this.payTotQty, this.payTotQty);
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
                aliasEn: ""
            };
        }
        else {
            this.searchTerm = "";
        }
    }
    prepareInvo() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "" };
        this.sub_nameNew = "";
        this.radioVal = 0;
        this.payInvo = { pay_id: undefined, pay_ref: 0, store_id: "", tot_pr: 0, pay: 0, pay_date: "", pay_time: "", user_id: "", cust_id: null, pay_method: "", discount: 0, changee: 0, sub_name: "", payComment: "", nextPay: null, yearId: "" };
        this.discountPerc = 0;
        let d = new Date;
        // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss');
        this.generateRandom();
        this.payInvo.store_id = this.store_info.id;
        this.payInvo.yearId = this.year.id;
        this.payInvo.user_id = this.user_info.id;
        //console.log( this.payInvo) 
        this.itemList = [];
        //check if there is pending items from stock page or from sales 
        if (this.statusFromRoute === 'newInvoFromItemsPage' && this.pendingItemsFromStock.length > 0) {
            //console.log('Pending items from stock page:', this.pendingItemsFromStock);
            this.pendingItemsFromStock.forEach(item => {
                this.itemList.push({
                    "id": 'NULL',
                    "pay_ref": this.payInvo.pay_ref,
                    "item_name": item.item_name,
                    "pay_price": item.pay_price,
                    "quantity": +item.qty,
                    "tot": (+item.qty * +item.perch_price).toFixed(2),
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +item.id,
                    "dateCreated": this.datePipe.transform(d, 'dd-MM-YYYY'),
                    "perch_price": item.perch_price
                });
            });
            this.statusFromRoute = '';
            this.pendingItemsFromStock = []; // Reset status after processing
            this.getTotal();
            console.log('itemlist after the get the');
        }
        this.getSalesAccount();
        //this.setFocusOnInput('dstP')
    }
    setFocusOnInput(Input) {
        //console.log('setFocusOnInput')
        if (Input == 'dstP') {
            this.nameField.nativeElement.focus();
        }
        else if (Input == 'dstPop2') {
            this.dstPop2.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.items;
            setTimeout(() => {
                this.popInput2.setFocus();
            }, 1500);
        }
        else if (Input == 'qtyIdP') {
            this.qtyIdP.setFocus();
        }
        else if (Input == 'popInput2') {
            this.popInput2.setFocus();
        }
    }
    getStockItems(pickName) {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                if (this.offline == false) {
                    this.loadingItems = true;
                    this.api.getAllStockItemsWithouteCounts(1, this.year.id).subscribe(data => {
                        //console.log(data)
                        let res = data;
                        this.items = res['data'];
                        this.items.forEach(element => {
                            if (+element.tswiaQuantity > 0) {
                                element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                            }
                            else if (+element.tswiaQuantity < 0) {
                                element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                            }
                            element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                        });
                        this.searchResult = this.items;
                        if (pickName) {
                            this.pickDetail(pickName, 'afterSave');
                        }
                        this.storage.set('itemsLocal', this.items).then((response) => {
                        });
                    }, (err) => {
                        //console.log(err);
                    }, () => {
                        this.loadingItems = false;
                    });
                }
                else {
                    this.items = this.itemsLocal;
                    this.items.forEach(element => {
                        element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                    });
                    this.searchResult = this.items;
                }
            }
        });
    }
    sumStockItems(pickName) {
        if (this.offline == false) {
            this.api.stockItems(1, this.year.id).subscribe(data => {
                //console.log(data)
                let res = data;
                let arr = res['data'];
                for (let index = 0; index < this.items.length; index++) {
                    const element = this.items[index];
                    let flt = arr.filter(x => x.id == element.id);
                    if (flt.length > 0) {
                        element.perchQuantity = +element.perchQuantity + +flt[0].perchQuantity;
                        //  element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
                        element.salesQuantity = +element.salesQuantity + +flt[0].salesQuantity;
                    }
                }
                this.items.forEach(element => {
                    if (+element.tswiaQuantity > 0) {
                        element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                    }
                    else if (+element.tswiaQuantity < 0) {
                        element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                    }
                    element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                });
                this.searchResult = this.items;
                if (pickName) {
                    this.pickDetail(pickName, 'afterSave');
                }
            }, (err) => {
                //console.log(err);
            }, () => {
            });
        }
        else {
            this.items = this.itemsLocal;
            this.items.forEach(element => {
                element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
            });
            this.searchResult = this.items;
        }
    }
    getStockItemsAfterUpdate() {
        let fl = [];
        if (this.searchLang == 1) {
            fl = this.items.filter(x => x.item_desc == this.selectedItem.item_desc);
            //console.log('hyrr',fl);
        }
        else {
            fl = this.items.filter(x => x.item_name == this.selectedItem.item_name);
            //console.log(fl);
        }
        let qt = +this.selectedItem.qty;
        let perch = +this.selectedItem.perch_price;
        let pay = +this.selectedItem.pay_price;
        //console.log(fl);
        this.selectedItem = {
            id: fl[0]['id'],
            dateCreated: fl[0]['dateCreated'],
            pay_ref: this.payInvo.pay_ref,
            item_desc: fl[0]['item_desc'],
            item_name: fl[0]['item_name'],
            item_unit: fl[0]['item_unit'],
            parcode: fl[0]['parcode'],
            pay_price: pay,
            perch_price: perch,
            qty: qt,
            tot: (qt * +fl[0]['perch_price']).toFixed(2),
            aliasEn: fl[0]['aliasEn']
        };
        ///
        this.getItemLoader = true;
        let index = this.items.map(e => e.id).indexOf(this.selectedItem.id);
        console.log('item inex', this.items[index]);
        if (index != -1) {
            this.items[index].pay_price = this.selectedItem.pay_price;
            this.items[index].perch_price = this.selectedItem.perch_price;
        }
        this.searchResult = this.items;
        console.log('index', this.items);
        this.storage.set('itemsLocal', this.items).then((response) => {
            this.getItemLoader = false;
        });
        ///
        this.addTolist();
        // this.api.getAllStockItemsWithouteCounts(1,this.year.id).subscribe(data => {
        //   //console.log(data)
        //   let res = data
        //   this.items = res['data']
        //   // this.items.forEach(element => {
        //   //   if(+element.tswiaQuantity > 0){
        //   //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
        //   //   }else if(+element.tswiaQuantity < 0){
        //   //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
        //   //   }
        //   //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
        //   // });
        //   this.searchResult = this.items
        //   //console.log('searchResult after Update',this.searchResult)
        //   this.getItemLoader =false
        //   this.storage.set('itemsLocal', this.items).then((response) => {
        //   //console.log('resoponse set', response)
        //   this.storage.get('itemsLocal').then((response2) => {
        //     if (response) {
        //       this.itemsLocal = response2 
        //       this.searchResult = [] 
        //        this.items = this.itemsLocal  
        //        this.searchResult = this.items
        //     //   this.loadingController.dismiss() 
        //     }
        //   }); 
        // });  
        //   // this.sumStockItemsAfterUpdate()
        // }, (err) => {
        //   //console.log(err);
        //   this.getItemLoader =false
        // },
        //   () => {
        //   }
        // )
    }
    sumStockItemsAfterUpdate() {
        if (this.offline == false) {
            this.getItemLoader = true;
            this.api.stockItems(1, this.year.id).subscribe(data => {
                //console.log(data)
                let res = data;
                let arr = res['data'];
                for (let index = 0; index < this.items.length; index++) {
                    const element = this.items[index];
                    let flt = arr.filter(x => x.id == element.id);
                    if (flt.length > 0) {
                        element.perchQuantity = +element.perchQuantity + +flt[0].perchQuantity;
                        // element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
                        element.salesQuantity = +element.salesQuantity + +flt[0].salesQuantity;
                    }
                }
                this.items.forEach(element => {
                    if (+element.tswiaQuantity > 0) {
                        element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                    }
                    else if (+element.tswiaQuantity < 0) {
                        element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                    }
                    element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                });
                this.searchResult = this.items;
                //console.log('searchResult after Update',this.searchResult)
                this.getItemLoader = false;
                this.storage.set('itemsLocal', this.items).then((response) => {
                    //console.log('resoponse set', response)
                    this.storage.get('itemsLocal').then((response2) => {
                        if (response) {
                            this.itemsLocal = response2;
                            this.searchResult = [];
                            this.items = this.itemsLocal;
                            this.searchResult = this.items;
                            //   this.loadingController.dismiss() 
                        }
                    });
                });
            }, (err) => {
                //console.log(err);
                this.getItemLoader = false;
            }, () => {
            });
        }
        else {
            this.items = this.itemsLocal;
            this.items.forEach(element => {
                element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
            });
            this.searchResult = this.items;
        }
    }
    afterSync(flt) {
        //push flt to local after chanch the logStatus to 1
        flt.forEach(element => {
            if (this.LogHistoryLocalArr.some(e => e.logRef === element.logRef) == false) {
                this.LogHistoryLocalArr.push(element);
            }
            else {
                //get index of it and replace it with value from flt
                let index = this.LogHistoryLocalArr.findIndex(x => x.logRef === element.logRef);
                if (index != -1) {
                    this.LogHistoryLocalArr[index] = element;
                }
            }
        });
        //set loghistory locally  
        //console.log ('finish ' ,  this.LogHistoryLocalArr)
        this.storage.set('LogHistoryLocal', this.LogHistoryLocalArr).then((response) => {
        });
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
            item.perch_price === itemToEdit.perch_price);
        if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].perch_price > 0) {
            // Update both the display list and original list
            displayList[i].tot = +displayList[i].quantity * displayList[i].perch_price;
            this.itemList[originalIndex].quantity = displayList[i].quantity;
            this.itemList[originalIndex].perch_price = displayList[i].perch_price;
            this.itemList[originalIndex].tot = displayList[i].tot;
            this.discountPerc = 0;
            this.payInvo.discount = 0;
            this.hideMe(i);
            this.getTotal();
        }
        else {
            this.presentToast("خطأ في الإدخال ", "danger");
        }
    }
    ionViewDidEnter() {
        setTimeout(() => {
            // //check all changes in case notif arr >0 
            //  this.subiscribtionNotif = this.behavApi.currentNotif.subscribe(notif=>{
            //   //console.log('notif page currentNotif behavApiRespnse',notif) 
            //    if(notif.length == 0){
            //     this.notifArr = []
            //    }else{
            //     this.notifArr =  notif[0]  
            //    }
            //   if(this.notifArr.length> 0){ 
            //     this.showNotif = true
            //     this.itemsLocal = notif[1] 
            //     this.items =  this.itemsLocal
            //     this.searchResult = this.items
            //     // this.sub_accountSales = notif[2] 
            //     // //console.log(this.sub_accountLocalSales)  
            //     this.storage.get('LogHistoryLocal').then((response) => { 
            //       if (response) {
            //         this.LogHistoryLocalArr = response  
            //       } 
            //     });
            //    // this.getSubBalance()
            //   } else {
            //     //console.log('no updates')
            //     this.showNotif = false  
            //   } 
            //   })
        }, 10000);
    }
    presentModal2(id, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // if (id !='null' && status == 'edit') {
            //    let fl= this.items.filter(x=>x.id == id)
            // //console.log(fl);
            // this.selectedItem = {
            //   id:fl[0]['id'],
            //   item_desc:fl[0]['item_desc'],
            //   model:fl[0]['model'],
            //   item_name:fl[0]['item_name'],
            //   min_qty:fl[0]['min_qty'],
            //   part_no:fl[0]['part_no'],
            //   brand:fl[0]['brand'],
            //   item_unit:fl[0]['item_unit'],
            //   item_parcode:fl[0]['item_parcode'],
            //   pay_price:fl[0]['pay_price'],
            //   perch_price:fl[0]['perch_price']
            // }
            // }
            const modal = yield this.modalController.create({
                component: _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_6__.ItemModalPage,
                componentProps: {
                    "item": this.selectedItem,
                    "status": status
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    //console.log(dataReturned )
                    this.doAfterDissmiss(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    getItems(pickName) {
        if (this.offline == false) {
            this.api.getItems().subscribe(data => {
                //console.log(data)
                let res = data;
                this.items = res['data'];
                this.searchResult = this.items;
                if (pickName) {
                    this.pickDetail(pickName, 'afterSave');
                }
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.items = this.itemsLocal;
            this.searchResult = this.items;
        }
    }
    getSalesAccount() {
        if (this.offline == false) {
            this.api.getPerchAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                console.log('acccccc', this.sub_account);
                this.addSubaccountLocal();
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.MixSubaccountSalesOffline();
        }
    }
    addSubaccountLocal() {
        if (this.sub_account) {
            if (this.sub_accountLocalPurch) {
                for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
                    const element = this.sub_accountLocalPurch[i];
                    this.sub_account.push(element);
                }
            }
        }
        else {
            if (this.sub_accountLocalPurch) {
                this.sub_account = this.sub_accountLocalPurch;
            }
        }
    }
    MixSubaccountSalesOffline() {
        this.sub_account = [];
        if (this.sub_accountLocalPurch) {
            for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
                const element = this.sub_accountLocalPurch[i];
                this.sub_account.push(element);
            }
        }
        if (this.sub_accountPurch) {
            for (let i = 0; i < this.sub_accountPurch.length; i++) {
                const element = this.sub_accountPurch[i];
                this.sub_account.push(element);
            }
        }
    }
    generateRandom() {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString();
        this.payInvo.pay_ref = this.store_info.store_ref + randomsNumber;
        //console.log(randomsNumber)
        //console.log(this.payInvo.pay_ref)  
    }
    selectFromPop(item) {
        console.log(item);
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
            tot: item.perch_price,
            aliasEn: item.aliasEn
        };
        this.searchTerm = item.item_name;
        //console.log( this.selectedItem); 
        this.didDissmis();
    }
    pickDetail(ev, notev) {
        let evVal;
        if (notev) {
            evVal = ev;
            this.searchLang = 0;
        }
        else {
            evVal = ev.target.value;
        }
        //console.log('evVal',evVal);
        let fl = [];
        if (this.searchLang == 1) {
            fl = this.items.filter(x => x.item_desc == evVal);
            //console.log('hyrr',fl);
        }
        else {
            fl = this.items.filter(x => x.item_name == evVal);
            //console.log(fl);
        }
        //console.log(fl);
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
            qty: 0,
            tot: fl[0]['perch_price'],
            aliasEn: fl[0]['aliasEn']
        };
        //console.log( this.selectedItem);
        this.setFocusOnInput('qtyIdP');
    }
    qtyhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
    }
    payPricehange(ev) {
        if ((+this.selectedItem.perch_price >= +this.selectedItem.pay_price) && (+this.selectedItem.perch_price > 0 && +this.selectedItem.pay_price > 0)) {
            this.presentToast('سعر الشراء اعلي من سعر البيع ', 'warning');
        }
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
    }
    perchPricehange(ev) {
        if ((this.selectedItem.perch_price >= this.selectedItem.pay_price) && this.selectedItem.perch_price > 0 && this.selectedItem.pay_price > 0) {
            this.presentToast('سعر الشراء اعلي من سعر البيع ', 'warning');
        }
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
    }
    payChange(ev) {
        //console.log(ev); 
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
    // let sum = this.itemList.reduce( (acc, obj)=> { return acc + +obj.tot; }, 0);
    // //console.log('sum', sum)
    // this.payInvo.tot_pr = sum - +this.payInvo.discount
    // this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay
    // this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2)
    // this.payInvo.changee = this.payInvo.changee.toFixed(2)
    // } 
    discountChange(ev) {
        //console.log('discountChange' ,ev); 
        this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100);
        this.payInvo.changee = +(this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay;
    }
    discountPerChange(ev) {
        //console.log('discountPerChange',ev);
        this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
        this.payInvo.changee = +(this.payInvo.tot_pr - this.payInvo.discount) - this.payInvo.pay;
    }
    deleteItem(index) {
        //console.log( index); 
        const displayList = this.getDisplayItemList();
        const itemToDelete = displayList[index];
        // Find the item in the original itemList and remove it
        const originalIndex = this.itemList.findIndex(item => item.item_name === itemToDelete.item_name &&
            item.perch_price === itemToDelete.perch_price &&
            item.quantity === itemToDelete.quantity);
        if (originalIndex !== -1) {
            this.itemList.splice(originalIndex, 1);
        }
        this.payInvo.pay = 0;
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
    chechPrice(cases) {
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
            this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
        }
        else {
            if (cases == 'check') {
                if (+this.selectedItem.perch_price >= +this.selectedItem.pay_price) {
                    this.priceChangeAlertConfirm();
                }
                else {
                    this.addTolist();
                }
            }
            else if (cases == 'uncheck') {
                ///update item => getiTEmstock and sysnc=> reselectItem => addtolist\
                this.updateItemDetail();
            }
        }
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
            item.perch_price === selectedItem.perch_price);
        if (existingItem) {
            // Update existing item quantity
            let newQty = +existingItem.quantity + +selectedItem.qty;
            existingItem.quantity = newQty;
            existingItem.tot = (newQty * +existingItem.perch_price).toFixed(2);
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
                "tot": (selectedItem.qty * +selectedItem.perch_price).toFixed(2),
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
    addTolist() {
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
            this.presentToast('الرجاء ادختيار الصنف وتحديد الكمية', 'danger');
        }
        else {
            let fl = [];
            if (this.itemList.length > 0) {
                fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name && x.perch_price == this.selectedItem.perch_price);
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
                    "tot": (+this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2),
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
                this.itemList[index].tot = (+this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
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
                aliasEn: ""
            };
            this.discountPerc = 0;
            this.payInvo.discount = 0;
            this.getTotal();
            this.updateSortedList();
            this.setFocusOnInput('dstPop2');
        }
    }
    validate() {
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        else if (+this.payInvo.cust_id == 0) {
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
    save() {
        let d = this.payInvo.pay_date;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        //console.log('save testing',this.payInvo ,  this.payInvo.sub_name)
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            this.saveInvo();
        }
    }
    pickAccount(ev) {
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
                phone: fl[0]['phone'],
                address: fl[0]['address']
            };
            //console.log( this.selectedAccount);
            this.payInvo.cust_id = this.selectedAccount.id;
            this.payInvo.sub_name = this.selectedAccount.sub_name;
            //  this.setFocusOnInput()
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
            this.selectedItem.item_name = "";
        }
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
        this.selectedAccount.ac_id = 2;
        this.selectedAccount.sub_type = "credit";
        this.selectedAccount.sub_code = null;
        this.selectedAccount.sub_balance = "0";
        this.selectedAccount.cat_id = 2;
        this.selectedAccount.cat_name = 'الموردين';
        this.selectedAccount.store_id = this.store_info.id;
        //console.log('preparenewaccount' , this.selectedAccount)
    }
    saveSubAccount() {
        //console.log('crea accoun')      
        this.preparenewaccount();
        this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.payInvo.cust_id = data['message'];
                //حالة الحساب موجود محلي والحفظ انلاين يسحب من المحلي ويضاف سsalesaccount   
                if (this.radioVal == 0 && this.selectedAccount.id == null && this.offline == false) {
                    this.sub_accountLocalPurch = this.sub_accountLocalPurch.filter(x => x.sub_name != this.selectedAccount.sub_name);
                    //console.log('imhereeeeeeeeeeeeeeeeee')
                    this.storage.set('sub_accountLocalPurch', this.sub_accountLocalPurch).then((response) => {
                        //console.log('resoponse set', this.sub_accountLocalPurch)
                        this.selectedAccount.id = this.payInvo.cust_id;
                        this.sub_accountPurch.push(this.selectedAccount);
                        this.storage.set('sub_accountPurch', this.sub_accountPurch).then((response) => {
                        });
                    });
                }
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('insert supplier'),
                    "userId": this.user_info.id,
                    "typee": 'insert supplier',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                    "logStatus": 0,
                    "logToken": JSON.stringify(this.selectedAccount),
                    "yearId": this.year.id,
                    "store_id": this.store_info.id
                });
                this.saveInvo();
            }
            else {
                this.presentToast('لم يتم انشاء حساب للمورد , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم انشاء حساب للمورد , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    saveSubAccountlocal() {
        //console.log('crea accoun')
        this.preparenewaccount();
        // add new account to acount list tobe available in next load
        if (!this.sub_account) {
            this.sub_account = [];
        }
        this.sub_account.push(this.selectedAccount);
        this.sub_accountLocalPurch.push(this.selectedAccount);
        this.storage.set('sub_accountLocalPurch', this.sub_accountLocalPurch).then((response) => {
            //console.log('resoponse set', this.sub_accountLocalPurch)
            // this.payInvo.cust_id =  data['message']
            this.saveInvoLocal();
        });
    }
    saveInvoLocal() {
        //console.log('resoponse set', this.payInvo.sub_name)
        // this.payInvo.sub_name = this.selectedAccount.sub_name
        this.purchLocal.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('purchLocal', this.purchLocal).then((response) => {
            //console.log('resoponse set', response)
            this.printArr = [];
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew
            });
            //console.log(this.printArr)
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
        });
    }
    saveInvo() {
        // Optimized: Save invoice and items together in single API call
        const invoiceWithItems = {
            invoice: this.payInvo,
            items: this.itemList
        };
        this.api.savePerchInvoWithItems(invoiceWithItems).subscribe((response) => {
            this.handleSaveSuccess();
        }, (err) => {
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    handleSaveSuccess() {
        // Prepare print array
        this.printArr = [];
        this.printArr.push({
            'payInvo': this.payInvo,
            'itemList': this.itemList,
            'selectedAccount': this.selectedAccount,
            'sub_nameNew': this.sub_nameNew
        });
        // Update local purchase storage
        this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
        this.purchase.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('purchase', this.purchase).then((response) => {
            // Purchase saved to local storage
        });
        // Prepare log history
        let arr = [];
        arr.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.logHistoryArr.push({
            "id": null,
            "logRef": this.generateRandom2('insert purchase'),
            "userId": this.user_info.id,
            "typee": 'insert purchase',
            "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            "logStatus": 0,
            "logToken": JSON.stringify(arr[0]),
            "yearId": this.year.id,
            "store_id": this.store_info.id
        });
        // Show success feedback
        this.presentAlertConfirm();
        this.presentToast('تم الحفظ بنجاح', 'success');
        // Navigate back if coming from items page
        if (this.showBackButton) {
            setTimeout(() => {
                this.goBack();
            }, 1500);
        }
        // Dismiss loading
        this.loadingController.dismiss();
    }
    saveitemList() {
        this.api.savePerchitemList(this.itemList).subscribe(data => {
            //console.log(data) 
            this.printArr = [];
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew
            });
            //console.log(this.printArr)
            this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            //console.log(' case ffff ' ,this.purchase)
            this.purchase.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
            this.storage.set('purchase', this.purchase).then((response) => {
                //console.log('purchase', response) 
            });
            let arr = [];
            arr.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
            this.logHistoryArr.push({
                "id": null,
                "logRef": this.generateRandom2('insert purchase'),
                "userId": this.user_info.id,
                "typee": 'insert purchase',
                "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(arr[0]),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
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
    generateRandom2(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
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
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveLogHistoryForInsertItem() {
        //let mdata =  this.prepareLogHistory(itemData , firstq , role) 
        //console.log('this.logHistoryArr[0]',this.logHistoryArr[0])
        let firstq;
        let item;
        if (this.logHistoryArr.length > 1) {
            item = this.logHistoryArr[1];
            firstq = this.logHistoryArr[0];
        }
        this.api.saveLogHistoryMulti(item, firstq, 'insert').subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.logHistoryArr = [];
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveLogHistoryForUpdateItem() {
        //let mdata =  this.prepareLogHistory(itemData , firstq , role) 
        //console.log('this.logHistoryArr[0]',this.logHistoryArr[0])
        let role;
        let cust;
        let invo;
        this.api.saveLogHistoryMulti(this.logHistoryArr[0], undefined, 'update').subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.logHistoryArr = [];
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__.PrintModalPage,
                componentProps: {
                    "printArr": this.printArr,
                    "page": page
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    //console.log(dataReturned )
                    this.prepareInvo();
                }
            });
            return yield modal.present();
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
    //
    doAfterDissmiss(data) {
        if (data.role == 'save') {
            //console.log('edit' ,data.data)
            this.saveItem(data.data);
        }
    }
    saveItem(mdata) {
        //prepare log history
        // this.logHistoryArr.push(
        //   {
        //     "id":null,
        //     "logRef":this.generateRandom2('insert item'),
        //     "userId":this.user_info.id,
        //     "typee":'insert item',
        //     "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
        //     "logStatus":0,
        //     "logToken":JSON.stringify(mdata[0]),
        //     "yearId":this.year.id,
        //     "store_id":this.store_info.id
        //   }
        //   )
        console.log('mdata[0]', mdata[0]);
        this.presentLoadingWithOptions('جاري حفظ البيانات ...');
        this.api.saveitemMulti(mdata[0]).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                let item_id = data['message'];
                this.firstq = { id: null, item_id: item_id, store_id: this.store_info.id, quantity: mdata[1].quantity, pay_price: mdata[0].pay_price, perch_price: mdata[0].perch_price, fq_year: '2022', item_name: mdata[0].item_name };
                this.saveFierstQty(mdata);
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveFierstQty(meta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveFirstQty(this.firstq).subscribe(data => {
                //console.log(data)  
                //this.getItems(item_name
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('insert firstq'),
                    "userId": this.user_info.id,
                    "typee": 'insert firstq',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                    "logStatus": 0,
                    "logToken": JSON.stringify(this.firstq),
                    "yearId": this.year.id,
                    "store_id": this.store_info.id
                });
                // this.performSyncItem()
                // update selected item from meta data 
                this.selectedItem = {
                    id: this.firstq.item_id,
                    dateCreated: "",
                    pay_ref: this.payInvo.pay_ref,
                    item_desc: meta[0].item_desc,
                    item_name: meta[0].item_name,
                    item_unit: meta[0].item_unit,
                    parcode: meta[0].parcode,
                    pay_price: meta[0].pay_price,
                    perch_price: meta[0].perch_price,
                    qty: 1,
                    tot: meta[0].perch_price,
                    aliasEn: meta[0].aliasEn
                };
                this.setFocusOnInput('qtyIdP');
                this.getItemLoader = true;
                // push meta data to items array
                this.items.push({
                    "aliasEn": meta[0].aliasEn,
                    "availQty": meta[1].quantity,
                    "brand": meta[0].brand,
                    "firstQuantity": meta[1].quantity,
                    "id": this.firstq.item_id,
                    "item_desc": meta[0].item_desc,
                    "item_name": meta[0].item_name,
                    "item_parcode": meta[0].item_parcode,
                    "item_unit": meta[0].item_unit,
                    "min_qty": meta[0].min_qty,
                    "model": meta[0].model,
                    "part_no": meta[0].part_no,
                    "pay_price": meta[0].pay_price,
                    "perch_price": meta[0].perch_price,
                    "qtyReal": 0,
                    "salesQuantity": 0,
                    "totalCount": 0,
                    "tswiaQuantity": 0
                });
                this.searchResult = this.items;
                console.log('index', this.items);
                this.storage.set('itemsLocal', this.items).then((response) => {
                    this.getItemLoader = false;
                });
            }, (err) => {
                //console.log(err);
                this.presentToast('1لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
            yield this.getStockItems();
        });
    }
    ionViewDidLeave() {
        //console.log('ionViewWillLeave') 
        // this.subiscribtionNotif.unsubscribe()
    }
    performSyncItem(item_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // await this.saveLogHistoryForInsertItem()
            if (item_name) {
                yield this.getStockItems(item_name);
            }
            else {
                yield this.getAllStockItemsWithouteCounts();
            }
        });
    }
    performSync2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            //await this.saveLogHistoryForUpdateItem()
            // await this.getAllStockItemsWithouteCounts()
            //update item in items array 
            yield this.getStockItemsAfterUpdate();
        });
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
                address: account.address
            };
            // Update invoice with selected account
            this.payInvo.cust_id = account.id;
            this.payInvo.sub_name = account.sub_name;
            console.log('Account selected in purchase:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            console.log('Account balance loaded in purchase:', balance);
        }
    }
};
PurchasePage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__.StockServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.Location }
];
PurchasePage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ["dstP",] }],
    qtyIdP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['qtyIdP',] }],
    dstPop2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['dstPop2',] }],
    popInput2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popInput2',] }],
    popover2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popover2',] }],
    popoverNotif3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popoverNotif3',] }]
};
PurchasePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-purchase',
        template: _purchase_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_purchase_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PurchasePage);



/***/ }),

/***/ 14858:
/*!********************************************************!*\
  !*** ./src/app/purchase/purchase.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.bnone {\n  border: none;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n\n.table-card-header ion-card-title {\n  margin: 0;\n}\n\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n\n.top-card-row {\n  padding: 16px;\n  align-items: flex-start;\n  gap: 16px;\n}\n\n.top-card-row .account-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-card-row .account-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n  font-size: 0.95rem;\n  height: 22px;\n  line-height: 30px;\n}\n\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n\nion-segment {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  min-width: 200px;\n}\n\nion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-height: 28px;\n}\n\nion-segment ion-segment-button ion-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n\n.rtl-input {\n  direction: rtl;\n}\n\n.rtl-input ion-label.float-right {\n  text-align: right !important;\n  transform-origin: right top !important;\n  right: 0 !important;\n  left: auto !important;\n}\n\n.rtl-input ion-label.float-right.label-floating {\n  transform: translateY(-14px) scale(0.82) !important;\n  right: 0 !important;\n}\n\n.rtl-input ion-input.text-right {\n  text-align: right !important;\n  --padding-start: 0;\n  --padding-end: 16px;\n}\n\n.rtl-input ion-input.text-right input {\n  text-align: right !important;\n  direction: ltr;\n}\n\n.rtl-input ion-note {\n  direction: ltr;\n}\n\n.table-container {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n\n.search-container {\n  width: 100%;\n}\n\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\n\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\n\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\n\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n\n.table-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.table-container::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n}\n\n.table-container::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 3px;\n}\n\n.table-container::-webkit-scrollbar-thumb:hover {\n  background: var(--ion-color-dark);\n}\n\n/* ======================================\n   CATEGORY SELECTOR STYLES - From statement2\n   ====================================== */\n\n.category-section {\n  margin-top: 0;\n}\n\n.category-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n\n/* Responsive design for mobile */\n\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksa0JBQUE7QUFFUjs7QUFBSTtFQUFPLG1CQUFBO0FBSVg7O0FBRkk7RUFBTSxrQkFBQTtBQU1WOztBQUxJO0VBQ0ksZ0JBQUE7QUFRUjs7QUFOQTtFQUNFLFlBQUE7QUFTRjs7QUFOQTtFQUNFLDhCQUFBO0FBU0Y7O0FBUEM7RUFDQyw0QkFBQTtBQVVGOztBQVJBO0VBQ0Usa0JBQUE7QUFXRjs7QUFUQTtFQUNFLHlCQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVRFO0VBQ0ssa0JBQUE7RUFDSCxXQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVRFO0VBQ0UseUJBQUE7QUFZSjs7QUFURTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFrQnZHOztBQWZFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQWtCSjs7QUFmQTtFQUNFLGlEQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWtCRjs7QUFoQkU7RUFDRSxTQUFBO0FBa0JKOztBQWhCSTtFQUNFLG1CQUFBO0FBa0JOOztBQWhCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWtCUjs7QUFoQlE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBa0JWOztBQWRNO0VBQ0UseUJBQUE7QUFnQlI7O0FBZFE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtBQWdCVjs7QUFkVTtFQUNFLGdCQUFBO0FBZ0JaOztBQVBBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQVVGOztBQVJFOzs7O0VBSUUsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFVSjs7QUFSSTs7OztFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWFOOztBQVBJO0VBQ0UsYUFBQTtBQVNOOztBQUpJO0VBQ0UsZ0JBQUE7QUFNTjs7QUFKTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTVI7O0FBQUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVOOztBQUFNO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUVSOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGTjs7QUFJTTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFGUjs7QUFTQTtFQUNFO0lBQ0Usc0JBQUE7RUFORjtFQVFFOztJQUVFLFFBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFOSjtFQVFJOztJQUNFLGdCQUFBO0VBTE47QUFDRjs7QUFXQTtFQUNFLDhCQUFBO0VBQ0Esa0RBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQyxnQkFBQTtBQVRIOztBQVdFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBV0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFUTjs7QUFlRTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7QUFaSjs7QUFpQkE7RUFDRSxjQUFBO0FBZEY7O0FBZ0JFO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFkSjs7QUFnQkk7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0FBZE47O0FBa0JFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBaEJKOztBQWtCSTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQWhCTjs7QUFvQkU7RUFDRSxjQUFBO0FBbEJKOztBQXVCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsV0FBQTtBQXBCRjs7QUFzQkU7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFwQko7O0FBc0JJO0VBQ0UsY0FBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQXBCTjs7QUF1Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBckJOOztBQXVCTTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckJSOztBQXdCTTtFQUNFLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUF0QlI7O0FBd0JRO0VBQ0UsZUFBQTtBQXRCVjs7QUE4QkE7RUFDRSxvREFBQTtBQTNCRjs7QUE4QkE7RUFDRSxtREFBQTtFQUNBLDBDQUFBO0FBM0JGOztBQStCQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTVCRjs7QUFnQ0E7RUFDRSxVQUFBO0FBN0JGOztBQWdDQTtFQUNFLGtDQUFBO0FBN0JGOztBQWdDQTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7QUE3QkY7O0FBZ0NBO0VBQ0UsaUNBQUE7QUE3QkY7O0FBZ0NBOzsyQ0FBQTs7QUFJQTtFQUNFLGFBQUE7QUE5QkY7O0FBZ0NFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUE5Qko7O0FBa0NBO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUEvQkY7O0FBaUNFO0VBQ0UseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQS9CSjs7QUFpQ0k7RUFDRSw4Q0FBQTtFQUNBLDJCQUFBO0FBL0JOOztBQWtDSTtFQUNFLG1DQUFBO0FBaENOOztBQW1DSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWpDTjs7QUFzQ0EsaUNBQUE7O0FBQ0E7RUFHTTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQXJDTjs7RUEyQ0U7SUFDRSxlQUFBO0VBeENKO0FBQ0YiLCJmaWxlIjoicHVyY2hhc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAgIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cbi5ibm9uZXtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucmVke1xuICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSBcbiB9XG4gLmRhcmtve1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspXG4gfVxuaW9uLXBvcG92ZXJ7XG4gIC0tb2Zmc2V0LXkgOiAtMzBweFxufVxuLmN1c3RJbnB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwLjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4gXG4gIC50YWJsZXtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMnB4O1xuICB9XG5cbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICB9XG4gIFxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XG4gIFxuICAvLyBSaWdodCBhbGlnbiBpdGVtIG5hbWUgY29sdW1uXG4gIHRkOm50aC1jaGlsZCgyKSwgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9XG5cbi50YWJsZS1jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgaW9uLXJvdyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWNvbFtzaXplPVwiYXV0b1wiXSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIFxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAtLWNvbG9yLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb3AgQ2FyZCBPcmdhbml6YXRpb24gU3R5bGluZyAtIE11bHRpIENvbHVtbiBMYXlvdXRcbi50b3AtY2FyZC1yb3cge1xuICBwYWRkaW5nOiAxNnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxNnB4OyAvLyBSZXBsYWNlIG9mZnNldCB3aXRoIGdhcFxuICBcbiAgLmFjY291bnQtY29sdW1uLFxuICAuY2F0ZWdvcnktY29sdW1uLFxuICAuZGF0ZS1jb21tZW50LWNvbHVtbixcbiAgLmRhdGUtY29sdW1uIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmNvbHVtbi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4OyAvLyBSZWR1Y2VkIG1hcmdpblxuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgaGVpZ2h0OiAyMnB4OyAvLyBGaXhlZCBoZWlnaHQgZm9yIGNvbnNpc3RlbnQgYWxpZ25tZW50XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEFsaWduIGFsbCBmb3JtIGNvbnRlbnQgYXQgdGhlIHNhbWUgbGV2ZWxcbiAgLmFjY291bnQtY29sdW1uIHtcbiAgICBhcHAtYWNjb3VudC1zZWxlY3RvciB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LWNvbHVtbiB7XG4gICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIFxuICAgICAgLmNvbXBhY3Qtc2VnbWVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGhlaWdodDogNjBweDsgLy8gSW5jcmVhc2VkIGhlaWdodCBmb3IgYmV0dGVyIGFsaWdubWVudFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xuICAgIC5jb21tZW50LWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICBoZWlnaHQ6IDQ4cHg7IC8vIE1hdGNoIG90aGVyIGlucHV0c1xuICAgICAgXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmRhdGUtY29sdW1uIHtcbiAgICAuZGF0ZS1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgaGVpZ2h0OiA0OHB4OyAvLyBNYXRjaCBvdGhlciBpbnB1dHNcbiAgICAgIFxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b3AtY2FyZC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmFjY291bnQtY29sdW1uLFxuICAgIC5kYXRlLWNvbW1lbnQtY29sdW1uIHtcbiAgICAgIHNpemU6IDEyO1xuICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBEaXNjb3VudCBTZWN0aW9uIFN0eWxlc1xuaW9uLXNlZ21lbnQgeyBcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgIG1pbi13aWR0aDogMjAwcHg7XG4gIFxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAyOHB4O1xuICAgIFxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4uZGlzY291bnQtc2VjdGlvbiB7XG4gIGlvbi1ub3RlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbi8vIFJUTCBJbnB1dCBzdHlsaW5nIGZvciBBcmFiaWMgbGFiZWxzXG4ucnRsLWlucHV0IHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIFxuICBpb24tbGFiZWwuZmxvYXQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgJi5sYWJlbC1mbG9hdGluZyB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE0cHgpIHNjYWxlKDAuODIpICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWlucHV0LnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgIGRpcmVjdGlvbjogbHRyOyAvLyBLZWVwIG51bWJlcnMgTFRSIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHlcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1ub3RlIHtcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgfVxufVxuXG4vLyBUYWJsZSBjb250YWluZXIgYW5kIHNlYXJjaCBzdHlsZXNcbi50YWJsZS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICAuc2VhcmNoLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgXG4gICAgLnNlYXJjaC1uYXZpZ2F0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBcbiAgICAgIC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFRhYmxlIHJvdyBoaWdobGlnaHRpbmdcbnRyLnNlYXJjaC1tYXRjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjIpICFpbXBvcnRhbnQ7XG59XG5cbnRyLnNlYXJjaC1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjQpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cblxuLy8gSGlnaGxpZ2h0IHRleHRcbm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLy8gU2Nyb2xsYmFyIHN0eWxpbmcgZm9yIHdlYmtpdCBicm93c2Vyc1xuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDQVRFR09SWSBTRUxFQ1RPUiBTVFlMRVMgLSBGcm9tIHN0YXRlbWVudDJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5jYXRlZ29yeS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgXG4gIC5maWVsZC1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cbn1cblxuLmNvbXBhY3Qtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGZsZXg6IDE7XG5cbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4zKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOm5vdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSk7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb21wYWN0LXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LXNlY3Rpb24ge1xuICAgIC5maWVsZC1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG59Il19 */";

/***/ }),

/***/ 48417:
/*!********************************************************!*\
  !*** ./src/app/purchase/purchase.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"showBackButton\" (click)=\"goBack()\" defaultHref=\"/\"></ion-back-button>\n      <ion-menu-button *ngIf=\"!showBackButton\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>فاتورة مشتريات</ion-title>\n    <ion-buttons  slot=\"end\">   \n</ion-buttons>\n \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card class=\"ion-no-padding ion-no-margin\" *ngIf=\"user_info && store_info\">\n  <ion-grid>\n    <ion-row dir=\"rtl\" class=\"top-card-row\">\n      <!-- First Column: Account Selector -->\n      <ion-col size=\"4\" class=\"account-column\">\n        <app-account-selector\n          accountType=\"supplier\"\n          placeholder=\"اختر حساب المورد\"\n          label=\"حساب المورد\"\n          [store_info]=\"store_info\"\n          [year]=\"year\"\n          [showAddButton]=\"true\"\n          [(ngModel)]=\"selectedAccount\"\n          (accountSelected)=\"onAccountSelected($event)\"\n          (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n        </app-account-selector>\n      </ion-col>\n      \n      \n      <!-- Third Column: Date -->\n      <ion-col size=\"3\" class=\"date-column\" dir=\"rtl\">\n        <ion-label class=\"column-label\">التاريخ</ion-label>\n        <ion-item class=\"custInput date-input\">\n          <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" placeholder=\"التاريخ\"></ion-input>\n        </ion-item>\n      </ion-col>\n      \n      <!-- Fourth Column: Comment -->\n      <ion-col size=\"4\" class=\"date-comment-column\">\n        <ion-label class=\"column-label\">ملاحظة</ion-label>\n        <ion-item class=\"custInput comment-input\">\n          <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n\n<ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\" >\n  <ion-row dir=\"rtl\">\n    <ion-col size=\"9\" class=\"ion-no-padding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card>\n               <app-item-selector\n                [items]=\"items\"\n                [loadingItems]=\"loadingItems\"\n                [searchLang]=\"searchLang\"\n                [store_info]=\"store_info\"\n                [year]=\"year\"\n                parentPage=\"purchase\"\n                [enablePriceUpdateConfirmation]=\"true\"\n                [payRef]=\"payInvo.pay_ref\"\n                [showQuantityInput]=\"true\"\n                [showPriceInput]=\"false\"\n                [showPerchPriceInput]=\"true\"\n                placeholder=\"اختر الصنف\"\n                (itemSelected)=\"onItemSelected($event)\"\n                (itemAdded)=\"onItemAdded($event)\"\n                (refreshItems)=\"refresh('item')\">\n              </app-item-selector>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n          <ion-card>\n            <ion-card-header color=\"primary\" class=\"table-card-header\">\n              <ion-card-title>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col size=\"3\">\n                    <span>قائمة الأصناف</span>\n                  </ion-col>\n                  <ion-col size=\"6\" class=\"ion-text-center\">\n                    <div class=\"search-container\">\n                      <ion-item lines=\"none\" class=\"search-item\">\n                        <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\n                        <ion-input\n                          [(ngModel)]=\"searchTerm\"\n                          (ionInput)=\"onSearchTermChange()\"\n                          placeholder=\"البحث في الأصناف...\"\n                          clearInput=\"true\"\n                          class=\"search-input\">\n                        </ion-input>\n                        <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\n                          <span class=\"search-results\">{{ getSearchResultText() }}</span>\n                          <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\n                            <ion-icon name=\"chevron-up\"></ion-icon>\n                          </ion-button>\n                          <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\n                            <ion-icon name=\"chevron-down\"></ion-icon>\n                          </ion-button>\n                        </div>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-text-end\">\n                    <ion-button \n                      fill=\"clear\" \n                      color=\"light\" \n                      size=\"small\"\n                      (click)=\"sortItemListAlphabetically()\"\n                      [disabled]=\"!itemList || itemList.length === 0\"\n                    >\n                      <ion-icon name=\"list\" slot=\"start\"></ion-icon>\n                      {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\n                    </ion-button>\n                    <ion-button \n                      fill=\"clear\" \n                      color=\"light\" \n                      size=\"small\"\n                      (click)=\"openPriceAdjustmentDialog()\"\n                      [disabled]=\"!itemList || itemList.length === 0\"\n                    >\n                      <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n                      تعديل الأسعار\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-card-title>\n            </ion-card-header>\n            <div class=\"table-container\">\n             <table class=\"table\">\n               <tr>\n                <th>no</th>\n                <th>الصنف</th>\n                <th>الكمية</th>\n                <th>سعر الشراء</th> \n                <th>المجموع</th> \n                <th></th> \n               </tr>\n               <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\"  \n                   (dblclick)=\"qtyClick(i)\"\n                   [attr.data-index]=\"i\"\n                   [class.search-highlight]=\"isHighlighted(i)\"\n                   [class.search-match]=\"isSearchMatch(i)\">\n                <td>{{i+1}}</td>\n                <td>\n                  <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\n                </td>\n                <td>\n                  <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \n                  <ion-item *ngIf=\"showMe == i\">\n                   <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                  </ion-item>\n               </td>\n               <td>\n                 <ion-text *ngIf=\"showMe != i\">{{item.perch_price}}</ion-text> \n                  <ion-item *ngIf=\"showMe == i\">\n                   <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.perch_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                  </ion-item>\n               </td>\n               \n                <td>{{+item.tot}}</td>\n                <td>\n                  <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                    <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                  </ion-button>\n                </td>\n               </tr> \n             </table>\n            </div> \n          </ion-card>\n        </ion-col>\n        </ion-row> \n      </ion-grid>\n    </ion-col>\n\n    <ion-col size=\"3\" class=\"ion-no-padding\">\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n              <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [(ngModel)]=\"payInvo.tot_pr\" [readonly]=\"true\" ></ion-input>\n              </ion-item>\n            </ion-col>\n           \n               <ion-col size=\"11\">\n              <!-- Discount Section -->\n              <ion-label class=\"ion-padding\"><strong>  الخصم  </strong> </ion-label>\n                <ion-item dir=\"rtl\"> \n                  <ion-segment [(ngModel)]=\"discountType\" (ionChange)=\"onDiscountTypeChange($event)\" slot=\"start\">\n                    <ion-segment-button value=\"percentage\">\n                      <ion-label>نسبة %</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"amount\">\n                      <ion-label>مبلغ</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                </ion-item>  \n              <!-- Percentage Discount Input -->\n              <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input\" class=\"custInput\">\n                <ion-label position=\"floating\" class=\"float-right\">نسبة الخصم %</ion-label>\n                <ion-input \n                  type=\"number\" \n                  [(ngModel)]=\"discountPerc\" \n                  (ionInput)=\"onPercentageDiscountChange($event)\"\n                  placeholder=\"نسبة الخصم %\">\n                </ion-input>\n                <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\">\n                  {{ calculatedDiscountAmount.toFixed(2) }} \n                </ion-note>\n              </ion-item>\n\n              <!-- Amount Discount Input -->\n              <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input\" class=\"custInput\">\n                <ion-label position=\"floating\" class=\"float-right\">مبلغ الخصم</ion-label>\n                <ion-input \n                  type=\"number\" \n                  [(ngModel)]=\"discountAmount\" \n                  (ionInput)=\"onAmountDiscountChange($event)\"\n                   placeholder=\"مبلغ الخصم \">\n                </ion-input>\n                <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\">\n                  {{ calculatedDiscountPerc.toFixed(2) }}%\n                </ion-note>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label class=\"ion-padding\"><strong> المدفوع نقدا</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [(ngModel)]=\"payInvo.pay\" (ionChange)=\"payChange($event)\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label class=\"ion-padding\"><strong>المتبقي</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input  [(ngModel)]=\"payInvo.changee\" [readonly]=\"true\"></ion-input>\n              </ion-item>\n            </ion-col> \n            <ion-col size=\"11\">\n              <ion-label class=\"ion-padding\"><strong>تاريخ السداد</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-item lines=\"none\">\n                  <input style=\"width:100%\"  type=\"date\"  id=\"startingDate3\" name=\"startingDate3\" [(ngModel)]=\"payInvo.nextPay\"  />\n                </ion-item>\n              </ion-item>\n            </ion-col> \n          </ion-row>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"5\" >\n              <ion-button fill=\"outline\" expand=\"block\" routerDirection=\"root\" color=\"primary\"  (click)=\"save()\" >\n                <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          \n        </ion-grid> \n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n\n\n \n</ion-grid>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_purchase_purchase_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_purchase_purchase_page_ts"],{

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

/***/ 47723:
/*!*******************************************!*\
  !*** ./src/app/purchase/purchase.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePage": () => (/* binding */ PurchasePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _purchase_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase.page.html?ngResource */ 48417);
/* harmony import */ var _purchase_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase.page.scss?ngResource */ 14858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item-modal/item-modal.page */ 3671);
/* harmony import */ var _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/price-adjustment-dialog/price-adjustment-dialog.component */ 91872);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe */ 25003);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/currency.service */ 6612);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);

















let PurchasePage = class PurchasePage {
    // اي طريقة دفع ح يكون في حساب مقابل ليها مثلا الكاش ح يتورد في حساب الخزينة وبنكك في حساب بنك الخرطوم اما الشيك فحيكون بالاجل و ح ينزل في  سجل الشيكات ويتحول الي حساب المعين سواء كان اتورد في حساب بنكي او اتسحب كاش واتورد فيحساب الخزينة 
    constructor(behavApi, route, renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast, _location, cdr, currencyService) {
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
        this.cdr = cdr;
        this.currencyService = currencyService;
        // Modal-specific properties
        this.modalMode = false;
        this.modalStatus = '';
        this.modalSelectedItemsList = [];
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
        // New workflow properties
        this.showJournalEntryModal = false;
        this.invoiceJournalData = null;
        this.customerBalance = null;
        this.currenQty = 0;
        this.firstQty = 0;
        this.perchTotQty = 0;
        this.payTotQty = 0;
        this.perchTot = 0;
        this.qtyReal = 0;
        this.availQty = 0;
        // Loading state management - Centralized loading system
        this.isSaving = false;
        this.currentLoadingMessage = '';
        this.currentLoader = null;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
                            // Close modal if in modal mode
                            if (this.modalMode) {
                                setTimeout(() => {
                                    this.modalController.dismiss({ success: true, data: this.payInvo });
                                }, 500);
                            }
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            this.presentModal(this.printArr, 'perch');
                            // Close modal after printing starts if in modal mode
                            if (this.modalMode) {
                                setTimeout(() => {
                                    this.modalController.dismiss({ success: true, data: this.payInvo });
                                }, 1000);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    priceChangeAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تعديل البيانات...');
            this.logHistoryArr.push({
                "id": null,
                "logRef": this.generateRandom2('update item'),
                "userId": this.user_info.id,
                "typee": 'update item',
                "datee": moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(this.selectedItem),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
            this.api.updateItem(this.selectedItem).subscribe(data => {
                this.hideLoading();
                if (data['message'] != 'Post Not Updated') {
                    this.presentToast('تم التعديل بنجاح', 'success');
                    this.performSync2();
                }
                else {
                    this.presentToast('لم يتم حفظ البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
                }
            }, (err) => {
                this.handleError(err, 'updateItemDetail');
            });
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
        // Initialize currency service
        this.initializeCurrency();
        // Handle modal mode
        if (this.modalMode && this.modalStatus === 'newInvoFromItemsPage' && this.modalSelectedItemsList.length > 0) {
            this.statusFromRoute = this.modalStatus;
            this.pendingItemsFromStock = this.modalSelectedItemsList;
            this.showBackButton = true;
            console.log('Modal mode: Received items from stock page:', this.pendingItemsFromStock);
            this.getAppInfo(); // Initialize app info for new invoice
            this.showPriceAdjustmentDialog('initial');
            return; // Exit early for modal mode
        }
        // Check category visibility setting
        if (this.status == 'new') {
            this.getAppInfo();
        }
        else if (this.status == 'initial') {
            this.getAppInfoCase2();
        }
    }
    ngOnDestroy() {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
        // Cleanup any remaining loading states
        this.hideLoading();
    }
    // Centralized Loading Management Methods
    showLoading(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.hideLoading(); // Ensure no existing loaders
            this.resetLoadingStates();
            this.isSaving = true;
            this.currentLoadingMessage = message;
            this.currentLoader = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                message: message,
                duration: 30000,
                backdropDismiss: false
            });
            yield this.currentLoader.present();
            // Timeout protection
            setTimeout(() => {
                if (this.isSaving && this.currentLoader) {
                    console.log('Loading timeout reached, dismissing...');
                    this.hideLoading();
                }
            }, 30000);
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currentLoader) {
                try {
                    yield this.currentLoader.dismiss();
                }
                catch (error) {
                    console.log('Error dismissing loader:', error);
                }
                this.currentLoader = null;
            }
            this.resetLoadingStates();
        });
    }
    resetLoadingStates() {
        this.isSaving = false;
        this.currentLoadingMessage = '';
    }
    handleError(error, operation) {
        console.error(`Error in ${operation}:`, error);
        this.hideLoading();
        this.presentToast('لم يتم حفظ البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
    }
    // Check if any loading operation is active
    isLoading() {
        return this.isSaving;
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
    showPriceAdjustmentDialog(mode = 'initial') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        // Recalculate tot_pr and changee using getTotal() - preserve existing pay amount
        this.getTotal(); // This updates payInvo.tot_pr, payInvo.changee based on itemList totals and existing pay amount
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
        // Clear discount related variables
        this.discountType = 'percentage';
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        let d = new Date;
        // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss');
        this.generateRandom();
        this.payInvo.store_id = this.store_info.id;
        this.payInvo.yearId = this.year.id;
        this.payInvo.user_id = this.user_info.id;
        //console.log( this.payInvo) 
        // Clear itemList and related arrays
        this.itemList = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        // Clear search related variables
        this.searchTerm = '';
        this.searchMatches = [];
        this.highlightedIndex = -1;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        // Reset discount but preserve pay amount
        this.discountPerc = 0;
        this.payInvo.discount = 0;
        this.getTotal();
        this.updateSortedList();
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let d = this.payInvo.pay_date;
            this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
            if (this.validate() == true) {
                yield this.showLoading('جاري حفظ فاتورة الشراء...');
                try {
                    this.saveInvo();
                }
                catch (error) {
                    this.handleError(error, 'save');
                }
            }
        });
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
                    "datee": moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
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
            this.presentToast('لم يتم انشاء حساب للمورد، خطأ في الاتصال حاول مرة أخرى', 'danger');
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
            this.hideLoading(); // Hide loading before success handling
            this.handleSaveSuccess();
        }, (err) => {
            this.handleError(err, 'saveInvo');
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
            "datee": moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            "logStatus": 0,
            "logToken": JSON.stringify(arr[0]),
            "yearId": this.year.id,
            "store_id": this.store_info.id
        });
        this.presentToast('تم الحفظ بنجاح', 'success');
        // Show journal entry confirmation for all purchase invoices
        this.presentJournalEntryConfirmation();
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
                "datee": moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveFirstQty(this.firstq).subscribe(data => {
                //console.log(data)  
                //this.getItems(item_name
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('insert firstq'),
                    "userId": this.user_info.id,
                    "typee": 'insert firstq',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
            yield this.getStockItems();
        });
    }
    ionViewDidLeave() {
        //console.log('ionViewWillLeave') 
        // this.subiscribtionNotif.unsubscribe()
    }
    performSyncItem(item_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
    // New methods for journal entry workflow
    presentJournalEntryConfirmation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const totalAfterDiscount = (+this.payInvo.tot_pr - +this.payInvo.discount);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد دفع المبلغ',
                mode: 'ios',
                message: `هل تريد دفع مبلغ ${totalAfterDiscount.toFixed(2)} للمورد الآن؟`,
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
                        text: 'نعم، دفع المبلغ',
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
            invoiceType: 'purchase',
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
        // In modal mode, close modal directly after journal entry
        if (this.modalMode) {
            setTimeout(() => {
                this.modalController.dismiss({ success: true, data: this.payInvo, journalSaved: success });
            }, 1000); // Give time for toast to show
        }
        else {
            // Show print confirmation for regular page mode
            setTimeout(() => {
                this.presentAlertConfirm();
            }, 500);
        }
        this.cleanupAfterInvoice();
    }
    onJournalCancelled() {
        this.showJournalEntryModal = false;
        // In modal mode, close modal directly after cancelling journal entry
        if (this.modalMode) {
            setTimeout(() => {
                this.modalController.dismiss({ success: true, data: this.payInvo, journalSaved: false });
            }, 500); // Small delay for smooth transition
        }
        else {
            // Show print confirmation for regular page mode
            setTimeout(() => {
                this.presentAlertConfirm();
            }, 500);
        }
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
    goBack() {
        if (this.modalMode) {
            this.modalController.dismiss();
        }
        else {
            this._location.back();
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
            // Store the balance for invoice journal entry
            this.customerBalance = balance;
            console.log('Account balance loaded in purchase:', balance);
        }
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
PurchasePage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__.StockServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.Location },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_10__.CurrencyService }
];
PurchasePage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["dstP",] }],
    qtyIdP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['qtyIdP',] }],
    dstPop2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['dstPop2',] }],
    popInput2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popInput2',] }],
    popover2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popover2',] }],
    popoverNotif3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popoverNotif3',] }],
    modalMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    modalStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    modalSelectedItemsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }]
};
PurchasePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
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

module.exports = "ion-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-header ion-toolbar {\n  --background:var(--ion-color-success);\n  --color: white;\n}\nion-header ion-toolbar ion-title {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 40px;\n  margin: 0 5px;\n  border: none;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item .header-date-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-align: center;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button {\n  --background: rgba(255, 255, 255, 0.2);\n  --background-hover: rgba(255, 255, 255, 0.3);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0 5px;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button ion-label {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\nion-content {\n  --padding-top: 56px;\n  --padding-bottom: 120px;\n}\n.custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n.cust-card {\n  border-radius: 5px;\n}\n.show {\n  visibility: visible;\n}\n.hide {\n  visibility: hidden;\n}\n.bnone {\n  border: none;\n}\n.red {\n  color: var(--ion-color-danger);\n}\n.darko {\n  color: var(--ion-color-dark);\n}\nion-popover {\n  --offset-y: -30px ;\n}\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n.table-card-header {\n  --background: var(--ion-color-success) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n.table-card-header ion-card-title {\n  margin: 0;\n}\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.compact-radio-style .discount-radio-container {\n  --min-height: 48px;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group {\n  justify-content: space-around;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option {\n  flex: 1;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background-color 0.2s ease;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option:hover {\n  background-color: var(--ion-color-light);\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option ion-label {\n  font-weight: 500;\n}\nion-segment {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  min-width: 200px;\n}\nion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-height: 28px;\n}\nion-segment ion-segment-button ion-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.rtl-input {\n  direction: rtl;\n}\n.rtl-input ion-label.float-right {\n  text-align: right !important;\n  transform-origin: right top !important;\n  right: 0 !important;\n  left: auto !important;\n}\n.rtl-input ion-label.float-right.label-floating {\n  transform: translateY(-14px) scale(0.82) !important;\n  right: 0 !important;\n}\n.rtl-input ion-input.text-right {\n  text-align: right !important;\n  --padding-start: 0;\n  --padding-end: 16px;\n}\n.rtl-input ion-input.text-right input {\n  text-align: right !important;\n  direction: ltr;\n}\n.rtl-input ion-note {\n  direction: ltr;\n}\n.custom-rtl-input .item-native {\n  flex-direction: row-reverse;\n}\n.custom-rtl-input ion-label {\n  order: 2;\n  text-align: right;\n  margin-right: 0;\n  margin-left: 16px;\n}\n.custom-rtl-input ion-input {\n  order: 1;\n  text-align: right;\n}\n.custom-rtl-input ion-input input {\n  text-align: right !important;\n}\n.custom-rtl-input ion-note {\n  order: 3;\n}\n.total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n  font-weight: 600;\n}\n.total-after-discount ion-input {\n  --color: #15803d;\n  font-size: 1.1em;\n  text-align: center;\n}\nion-modal {\n  --height: 90%;\n  --border-radius: 16px 16px 0 0;\n}\n.insufficient-stock-modal {\n  --height: 80vh;\n  --width: 90vw;\n  --max-width: 600px;\n  --border-radius: 12px;\n}\n@media (max-width: 768px) {\n  .insufficient-stock-modal {\n    --height: 95vh;\n    --width: 95vw;\n  }\n}\n.top-card-row {\n  padding: 8px 12px;\n  align-items: flex-start;\n  gap: 12px;\n}\n.top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.top-card-row .account-column .column-label,\n.top-card-row .invoice-type-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 4px;\n  font-size: 0.95rem;\n}\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n.top-card-row .invoice-type-column .invoice-type-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .invoice-type-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n.table-container {\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n.search-container {\n  width: 100%;\n}\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n/* ======================================\n   CATEGORY AND INVOICE TYPE SELECTOR STYLES\n   ====================================== */\n.category-section,\n.invoice-type-section {\n  margin-top: 0;\n}\n.category-section .field-label,\n.invoice-type-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n/* Responsive design for mobile */\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-column .column-label {\n    font-size: 13px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/* Footer styles */\nion-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-footer ion-toolbar {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-medium);\n}\nion-footer .total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n}\nion-footer .total-after-discount ion-input {\n  --color: #15803d;\n  font-weight: 600;\n}\nion-footer ion-item {\n  --background: white;\n  border-radius: 5px;\n  margin: 4px 0;\n}\nion-footer .footer-input-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  padding: 6px 0;\n}\nion-footer .footer-input-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 3px;\n  text-align: center;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .footer-input-item {\n  width: 100%;\n}\nion-footer .footer-input-item ion-input {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-header {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 20px;\n}\nion-footer .discount-type-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 0;\n  margin-inline-end: 6px;\n  white-space: nowrap;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .discount-segment-container {\n  --background: transparent;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  flex: 1;\n  max-width: 140px;\n}\nion-footer .compact-discount-segment {\n  --background: var(--ion-color-light);\n  border-radius: 14px;\n  padding: 1px;\n  width: 100%;\n  min-height: 24px;\n}\nion-footer .compact-discount-segment .compact-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  --indicator-color: transparent;\n  --border-radius: 12px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  min-height: 22px;\n  font-size: 10px;\n}\nion-footer .compact-discount-segment .compact-segment-button ion-label {\n  font-weight: 500;\n  margin: 0;\n}\nion-footer .discount-input {\n  margin-top: 3px;\n  width: 100%;\n}\nion-footer .discount-input ion-input {\n  text-align: center;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-input .discount-note {\n  font-size: 11px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-footer .discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n/* Responsive footer for mobile */\n@media (max-width: 768px) {\n  ion-footer ion-grid {\n    padding: 0;\n  }\n  ion-footer ion-col {\n    padding: 0 3px;\n  }\n  ion-footer .footer-input-container {\n    padding: 4px 0;\n  }\n  ion-footer .footer-input-label,\nion-footer .discount-type-label {\n    font-size: 9px;\n    height: 12px;\n    margin-bottom: 2px;\n  }\n  ion-footer .discount-header {\n    margin-bottom: 2px;\n    height: 22px;\n  }\n  ion-footer .footer-input-item ion-input,\nion-footer .discount-input ion-input {\n    font-size: 11px;\n    --padding-top: 5px;\n    --padding-bottom: 5px;\n  }\n  ion-footer .discount-segment-container {\n    max-width: 110px;\n  }\n  ion-footer .compact-discount-segment {\n    min-height: 20px;\n    border-radius: 12px;\n    padding: 1px;\n  }\n  ion-footer .compact-discount-segment .compact-segment-button {\n    min-height: 18px;\n    font-size: 8px;\n    --border-radius: 10px;\n    --padding-start: 3px;\n    --padding-end: 3px;\n  }\n  ion-footer ion-button {\n    --padding-start: 0;\n    --padding-end: 0;\n    font-size: 10px;\n    height: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QWlISTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7QUEvR047QUFtSEU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBakhKO0FBbUhJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWpITjtBQW1ITTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFqSFI7QUFtSFE7RUFDRSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtBQWpIVjtBQW9IUTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQWxIVjtBQXlIQSxpQ0FBQTtBQUNBO0VBRUk7SUFDRSxVQUFBO0VBdkhKO0VBMEhFO0lBQ0UsY0FBQTtFQXhISjtFQTJIRTtJQUNFLGNBQUE7RUF6SEo7RUE0SEU7O0lBRUUsY0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQTFISjtFQTZIRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtFQTNISjtFQWdJSTs7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtFQTdITjtFQWlJRTtJQUNFLGdCQUFBO0VBL0hKO0VBa0lFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUFoSUo7RUFrSUk7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUFoSU47RUFvSUU7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUFsSUo7QUFDRiIsImZpbGUiOiJwdXJjaGFzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5OyAvLyBIaWdoIGVub3VnaCB0byBzdGF5IGFib3ZlIGNvbnRlbnQgYnV0IGJlbG93IHN5c3RlbSBtb2RhbHMgKHVzdWFsbHkgMTAwMCspXHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWJ1dHRvbnNbc2xvdD1cImVuZFwiXSB7XHJcbiAgICAgIC5oZWFkZXItZGF0ZS1pdGVtIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5oZWFkZXItZGF0ZS1pbnB1dCB7XHJcbiAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGp1c3QgY29udGVudCBwYWRkaW5nIGZvciBmaXhlZCBoZWFkZXIgYW5kIGZvb3RlclxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogNTZweDsgLy8gQXBwcm94aW1hdGUgaGVpZ2h0IG9mIGlvbi1oZWFkZXJcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMjBweDsgLy8gQXBwcm94aW1hdGUgaGVpZ2h0IG9mIGZvb3RlciAoYWRqdXN0IGJhc2VkIG9uIGFjdHVhbCBmb290ZXIgaGVpZ2h0KVxyXG59XHJcblxyXG4uY3VzdElucHV0e1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIC5jdXN0LWNhcmR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cclxuXHJcbiAgICAuaGlkZXt2aXNpYmlsaXR5OiBoaWRkZW47fVxyXG4gICAgLmN1c3RSb3d7XHJcbiAgICAgIC8vICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICAgIH1cclxuLmJub25le1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuIC5yZWR7XHJcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlcikgXHJcbiB9XHJcbiAuZGFya297XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKVxyXG4gfVxyXG5pb24tcG9wb3ZlcntcclxuICAtLW9mZnNldC15IDogLTMwcHhcclxufVxyXG4uY3VzdElucHtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwLjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4gXHJcbiAgLnRhYmxle1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbiAgfVxyXG5cclxuICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICB9XHJcbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fVxyXG4gIFxyXG4gIC8vIFJpZ2h0IGFsaWduIGl0ZW0gbmFtZSBjb2x1bW5cclxuICB0ZDpudGgtY2hpbGQoMiksIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5cclxuLnRhYmxlLWNhcmQtaGVhZGVyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xyXG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIFxyXG4gIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIFxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tY29sW3NpemU9XCJhdXRvXCJdIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAtLWNvbG9yLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiAgICAgICBcclxuICAuZGlzY291bnQtc2VjdGlvbiB7XHJcbiAgaW9uLW5vdGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgXHJcbiAgLmlubGluZS1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgLnJhZGlvLW9wdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFsdGVybmF0aXZlIGNvbXBhY3QgdmVyc2lvbiAoaWYgeW91IHByZWZlciBldmVuIG1vcmUgY29tcGFjdClcclxuLmNvbXBhY3QtcmFkaW8tc3R5bGUge1xyXG4gIC5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xyXG4gICAgLS1taW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgXHJcbiAgICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIFxyXG4gICAgICAucmFkaW8tb3B0aW9uIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLXNlZ21lbnQgeyBcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgXHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjhweDtcclxuICAgIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRpc2NvdW50LXNlY3Rpb24ge1xyXG4gIGlvbi1ub3RlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuXHJcbi5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIFxyXG4gIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIC5yYWRpby1vcHRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgICAgXHJcbiAgICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzY291bnQtcmFkaW8tY29udGFpbmVyIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICBcclxuICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICAucmFkaW8tb3B0aW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgIFxyXG4gICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUlRMIElucHV0IHN0eWxpbmcgZm9yIEFyYWJpYyBsYWJlbHNcclxuLnJ0bC1pbnB1dCB7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbiAgXHJcbiAgaW9uLWxhYmVsLmZsb2F0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3AgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICYubGFiZWwtZmxvYXRpbmcge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE0cHgpIHNjYWxlKDAuODIpICFpbXBvcnRhbnQ7XHJcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpcmVjdGlvbjogbHRyOyAvLyBLZWVwIG51bWJlcnMgTFRSIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHlcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLW5vdGUge1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBbHRlcm5hdGl2ZSBhcHByb2FjaCBpZiB0aGUgYWJvdmUgZG9lc24ndCB3b3JrIHBlcmZlY3RseVxyXG4uY3VzdG9tLXJ0bC1pbnB1dCB7XHJcbiAgLml0ZW0tbmF0aXZlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIG9yZGVyOiAyO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcclxuICAgIGlucHV0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLW5vdGUge1xyXG4gICAgb3JkZXI6IDM7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgc3R5bGVzIGZvciB0aGUgdG90YWwgYWZ0ZXIgZGlzY291bnQgZmllbGQgYW5kIHByb2dyZXNzIHN0ZXBwZXJcclxuLnRvdGFsLWFmdGVyLWRpc2NvdW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmMGZkZjQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzE2YTM0YTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIFxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLWNvbG9yOiAjMTU4MDNkO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1vZGFsIHN0eWxpbmdcclxuaW9uLW1vZGFsIHtcclxuICAtLWhlaWdodDogOTAlO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcclxufVxyXG5cclxuLy8gSW5zdWZmaWNpZW50IFN0b2NrIE1vZGFsIFN0eWxpbmdcclxuLmluc3VmZmljaWVudC1zdG9jay1tb2RhbCB7XHJcbiAgLS1oZWlnaHQ6IDgwdmg7XHJcbiAgLS13aWR0aDogOTB2dztcclxuICAtLW1heC13aWR0aDogNjAwcHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLS1oZWlnaHQ6IDk1dmg7XHJcbiAgICAtLXdpZHRoOiA5NXZ3O1xyXG4gIH1cclxufVxyXG5cclxuLy8gVG9wIENhcmQgT3JnYW5pemF0aW9uIFN0eWxpbmdcclxuLnRvcC1jYXJkLXJvdyB7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7IC8vIFJlZHVjZWQgZnJvbSBkZWZhdWx0IHBhZGRpbmdcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDEycHg7IC8vIFJlZHVjZWQgZ2FwIGZvciBtb3JlIGNvbXBhY3QgbGF5b3V0XHJcbiAgXHJcbiAgLmFjY291bnQtY29sdW1uLFxyXG4gIC5pbnZvaWNlLXR5cGUtY29sdW1uLFxyXG4gIC5jYXRlZ29yeS1jb2x1bW4sXHJcbiAgLmRhdGUtY29tbWVudC1jb2x1bW4sXHJcbiAgLmRhdGUtY29sdW1uIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgLmNvbHVtbi1sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7IC8vIFJlZHVjZWQgbWFyZ2luIGZvciBjb21wYWN0IGxheW91dFxyXG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQWxpZ24gYWxsIGZvcm0gY29udGVudCBhdCB0aGUgc2FtZSBsZXZlbFxyXG4gIC5hY2NvdW50LWNvbHVtbiB7XHJcbiAgICBhcHAtYWNjb3VudC1zZWxlY3RvciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLXR5cGUtY29sdW1uIHtcclxuICAgIC5pbnZvaWNlLXR5cGUtc2VjdGlvbiB7XHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgIC5jb21wYWN0LXNlZ21lbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAvLyBJbmNyZWFzZWQgaGVpZ2h0IGZvciBiZXR0ZXIgYWxpZ25tZW50XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXRlZ29yeS1jb2x1bW4ge1xyXG4gICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBcclxuICAgICAgLmNvbXBhY3Qtc2VnbWVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7IC8vIEluY3JlYXNlZCBoZWlnaHQgZm9yIGJldHRlciBhbGlnbm1lbnRcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xyXG4gICAgLmNvbW1lbnQtaW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIGhlaWdodDogNDhweDsgLy8gTWF0Y2ggb3RoZXIgaW5wdXRzXHJcbiAgICAgIFxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGF0ZS1jb2x1bW4ge1xyXG4gICAgLmRhdGUtaW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIGhlaWdodDogNDhweDsgLy8gTWF0Y2ggb3RoZXIgaW5wdXRzXHJcbiAgICAgIFxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudG9wLWNhcmQtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgIC5hY2NvdW50LWNvbHVtbixcclxuICAgIC5pbnZvaWNlLXR5cGUtY29sdW1uLFxyXG4gICAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xyXG4gICAgICBzaXplOiAxMjtcclxuICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIFxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYmxlIGNvbnRhaW5lciBhbmQgc2VhcmNoIHN0eWxlc1xyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gIC5zZWFyY2gtaXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBcclxuICAgIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtbmF2aWdhdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNHB4O1xyXG4gICAgICBcclxuICAgICAgLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gVGFibGUgcm93IGhpZ2hsaWdodGluZ1xyXG50ci5zZWFyY2gtbWF0Y2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRyLnNlYXJjaC1oaWdobGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuNCkgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbn1cclxuXHJcbi8vIEhpZ2hsaWdodCB0ZXh0XHJcbm1hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQ0FURUdPUlkgQU5EIElOVk9JQ0UgVFlQRSBTRUxFQ1RPUiBTVFlMRVNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5jYXRlZ29yeS1zZWN0aW9uLFxyXG4uaW52b2ljZS10eXBlLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgXHJcbiAgLmZpZWxkLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29tcGFjdC1zZWdtZW50IHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4zKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXI6bm90KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgZGVzaWduIGZvciBtb2JpbGUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbXBhY3Qtc2VnbWVudCB7XHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2F0ZWdvcnktY29sdW1uIHtcclxuICAgIC5jb2x1bW4tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgIC5maWVsZC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEZvb3RlciBzdHlsZXMgKi9cclxuaW9uLWZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTsgLy8gSGlnaCBlbm91Z2ggdG8gc3RheSBhYm92ZSBjb250ZW50IGJ1dCBiZWxvdyBzeXN0ZW0gbW9kYWxzXHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIH1cclxuICBcclxuICAudG90YWwtYWZ0ZXItZGlzY291bnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjBmZGY0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzE2YTM0YTtcclxuICAgIFxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgLS1jb2xvcjogIzE1ODAzZDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWlucHV0LWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1pbnB1dC1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNjb3VudC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNjb3VudC10eXBlLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA2cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmRpc2NvdW50LXNlZ21lbnQtY29udGFpbmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29tcGFjdC1kaXNjb3VudC1zZWdtZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XHJcbiAgICBcclxuICAgIC5jb21wYWN0LXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xyXG4gICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgICAgbWluLWhlaWdodDogMjJweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGlzY291bnQtaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpc2NvdW50LW5vdGUge1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGlzY291bnQtc2VjdGlvbiB7XHJcbiAgICBpb24tbm90ZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGlzY291bnQtcmFkaW8tY29udGFpbmVyIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICBcclxuICAgIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDI0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgLnJhZGlvLW9wdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGZvb3RlciBmb3IgbW9iaWxlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGlvbi1mb290ZXIge1xyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb290ZXItaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb290ZXItaW5wdXQtbGFiZWwsXHJcbiAgICAuZGlzY291bnQtdHlwZS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpc2NvdW50LWhlYWRlciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9vdGVyLWlucHV0LWl0ZW0sXHJcbiAgICAuZGlzY291bnQtaW5wdXQge1xyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXNjb3VudC1zZWdtZW50LWNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb21wYWN0LWRpc2NvdW50LXNlZ21lbnQge1xyXG4gICAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgIFxyXG4gICAgICAuY29tcGFjdC1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 48417:
/*!********************************************************!*\
  !*** ./src/app/purchase/purchase.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button *ngIf=\"showBackButton\" (click)=\"goBack()\" defaultHref=\"/\"></ion-back-button>\r\n      <ion-menu-button *ngIf=\"!showBackButton\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>فاتورة مشتريات</ion-title>\r\n    <!-- Date in header -->\r\n    <ion-buttons slot=\"end\">\r\n      <app-currency-switcher *ngIf=\"user_info && store_info\"></app-currency-switcher>\r\n      <ion-item class=\"header-date-item\" *ngIf=\"user_info && store_info\" >\r\n        <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" class=\"header-date-input\"></ion-input>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-card class=\"ion-no-padding ion-no-margin\"> \r\n      <ion-grid *ngIf=\"user_info && store_info\">\r\n        <ion-row dir=\"rtl\" class=\"top-card-row\">\r\n          <!-- First Column: Account Selector -->\r\n          <ion-col size=\"4\" offset=\"3\" class=\"account-column\">\r\n            <app-account-selector\r\n              accountType=\"supplier\"\r\n              placeholder=\"اختر حساب المورد\"\r\n              label=\"حساب المورد\"\r\n              [store_info]=\"store_info\"\r\n              [year]=\"year\"\r\n              [showAddButton]=\"true\"\r\n              [(ngModel)]=\"selectedAccount\"\r\n              (accountSelected)=\"onAccountSelected($event)\"\r\n              (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\r\n            </app-account-selector>\r\n          </ion-col>\r\n          \r\n          <!-- Comment Column: Note field in same row -->\r\n          <ion-col size=\"4\" class=\"date-comment-column\">\r\n            <ion-label class=\"column-label\">ملاحظة</ion-label>\r\n            <ion-item class=\"custInput comment-input\"> \r\n              <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\" [disabled]=\"isLoading()\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n\r\n    <ion-grid  *ngIf=\"user_info && store_info\" >\r\n      <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\r\n        <ion-col size=\"11\" class=\"ion-no-padding\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-card>\r\n               <app-item-selector\r\n                [items]=\"items\"\r\n                [loadingItems]=\"loadingItems\"\r\n                [searchLang]=\"searchLang\"\r\n                [store_info]=\"store_info\"\r\n                [year]=\"year\"\r\n                parentPage=\"purchase\"\r\n                [enablePriceUpdateConfirmation]=\"true\"\r\n                [payRef]=\"payInvo.pay_ref\"\r\n                [showQuantityInput]=\"true\"\r\n                [showPriceInput]=\"false\"\r\n                [showPerchPriceInput]=\"true\"\r\n                placeholder=\"اختر الصنف\"\r\n                (itemSelected)=\"onItemSelected($event)\"\r\n                (itemAdded)=\"onItemAdded($event)\"\r\n                (refreshItems)=\"refresh('item')\">\r\n              </app-item-selector>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n          <ion-card>\r\n            <ion-card-header color=\"success\" class=\"table-card-header\">\r\n              <ion-card-title>\r\n                <ion-row class=\"ion-align-items-center\">\r\n                  <ion-col size=\"3\">\r\n                    <span>قائمة الأصناف</span>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" class=\"ion-text-center\">\r\n                    <div class=\"search-container\">\r\n                      <ion-item lines=\"none\" class=\"search-item\">\r\n                        <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\r\n                        <ion-input\r\n                          [(ngModel)]=\"searchTerm\"\r\n                          (ionInput)=\"onSearchTermChange()\"\r\n                          placeholder=\"البحث في الأصناف...\"\r\n                          clearInput=\"true\"\r\n                          class=\"search-input\">\r\n                        </ion-input>\r\n                        <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\r\n                          <span class=\"search-results\">{{ getSearchResultText() }}</span>\r\n                          <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\r\n                            <ion-icon name=\"chevron-up\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\r\n                            <ion-icon name=\"chevron-down\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </ion-item>\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-text-end\">\r\n                    <ion-button \r\n                      fill=\"clear\" \r\n                      color=\"light\" \r\n                      size=\"small\"\r\n                      (click)=\"sortItemListAlphabetically()\"\r\n                      [disabled]=\"!itemList || itemList.length === 0\"\r\n                    >\r\n                      <ion-icon name=\"list\" slot=\"start\"></ion-icon>\r\n                      {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\r\n                    </ion-button>\r\n                    <ion-button \r\n                      fill=\"clear\" \r\n                      color=\"light\" \r\n                      size=\"small\"\r\n                      (click)=\"openPriceAdjustmentDialog()\"\r\n                      [disabled]=\"!itemList || itemList.length === 0 || isLoading()\"\r\n                    >\r\n                      <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\r\n                      تعديل الأسعار\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <div class=\"table-container\">\r\n             <table class=\"table\">\r\n               <tr>\r\n                <th>no</th>\r\n                <th>الصنف</th>\r\n                <th>الكمية</th>\r\n                <th>سعر الشراء ({{ getCurrencySymbol() }})</th> \r\n                <th>المجموع ({{ getCurrencySymbol() }})</th> \r\n                <th></th> \r\n               </tr>\r\n               <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\"  \r\n                   (dblclick)=\"qtyClick(i)\"\r\n                   [attr.data-index]=\"i\"\r\n                   [class.search-highlight]=\"isHighlighted(i)\"\r\n                   [class.search-match]=\"isSearchMatch(i)\">\r\n                <td>{{i+1}}</td>\r\n                <td>\r\n                  <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\r\n                </td>\r\n                <td>\r\n                  <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \r\n                  <ion-item *ngIf=\"showMe == i\">\r\n                   <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\r\n                  </ion-item>\r\n               </td>\r\n               <td>\r\n                 <ion-text *ngIf=\"showMe != i\">{{item.perch_price | currencyDisplay:'SDG':false}}</ion-text> \r\n                  <ion-item *ngIf=\"showMe == i\">\r\n                   <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.perch_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\r\n                  </ion-item>\r\n               </td>\r\n               \r\n                <td>{{item.tot | currencyDisplay:'SDG':false}}</td>\r\n                <td>\r\n                  <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\r\n                    <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\r\n                  </ion-button>\r\n                </td>\r\n               </tr> \r\n             </table>\r\n            </div> \r\n          </ion-card>\r\n        </ion-col>\r\n          </ion-row> \r\n        </ion-grid>\r\n      </ion-col> \r\n    </ion-row> \r\n  </ion-grid>\r\n\r\n</ion-content>\r\n<!-- Footer with totals and action buttons -->\r\n<ion-footer *ngIf=\"user_info && store_info\" >\r\n  <ion-toolbar>\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <!-- Discount controls on the right side -->\r\n        <ion-col size=\"8\" class=\"ion-text-end\">\r\n          <ion-grid class=\"ion-no-padding\">\r\n            <ion-row class=\"ion-justify-content-end\">\r\n              <ion-col class=\"footer-input-container\">\r\n                <ion-label class=\"footer-input-label\">إجمالي المبلغ</ion-label>\r\n                <ion-item class=\"custInput footer-input-item\">\r\n                  <ion-input [value]=\"payInvo.tot_pr | currencyDisplay\" [readonly]=\"true\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col class=\"footer-input-container\">\r\n                <div class=\"discount-header\"> \r\n                  <div dir=\"rtl\" class=\"discount-segment-container\"> \r\n                    <ion-segment [(ngModel)]=\"discountType\" (ionChange)=\"onDiscountTypeChange($event)\" class=\"compact-discount-segment\" [disabled]=\"isLoading()\">\r\n                      <ion-segment-button value=\"percentage\" class=\"compact-segment-button\">\r\n                        <ion-label>نسبة الخصم%</ion-label>\r\n                      </ion-segment-button>\r\n                      <ion-segment-button value=\"amount\" class=\"compact-segment-button\">\r\n                        <ion-label>مبلغ الخصم</ion-label>\r\n                      </ion-segment-button>\r\n                    </ion-segment>\r\n                  </div>\r\n                </div>\r\n                <!-- Percentage Discount Input -->\r\n                <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input custInput discount-input\">\r\n                  <ion-input \r\n                    type=\"number\" \r\n                    [(ngModel)]=\"discountPerc\" \r\n                    (ionInput)=\"onPercentageDiscountChange($event)\"\r\n                    placeholder=\"نسبة الخصم %\"\r\n                    [disabled]=\"isLoading()\">\r\n                  </ion-input>\r\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\" class=\"discount-note\">\r\n                    {{ formatBalance(calculatedDiscountAmount) }} \r\n                  </ion-note>\r\n                </ion-item>\r\n\r\n                <!-- Amount Discount Input -->\r\n                <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input custInput discount-input\">\r\n                  <ion-input \r\n                    type=\"number\" \r\n                    [(ngModel)]=\"discountAmount\" \r\n                    (ionInput)=\"onAmountDiscountChange($event)\"\r\n                     placeholder=\"مبلغ الخصم\"\r\n                     [disabled]=\"isLoading()\">\r\n                  </ion-input>\r\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\" class=\"discount-note\">\r\n                    {{ calculatedDiscountPerc.toFixed(2) }}%\r\n                  </ion-note>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col class=\"footer-input-container\">\r\n                <ion-label class=\"footer-input-label\">المجموع بعد الخصم</ion-label>\r\n                <ion-item class=\"custInput total-after-discount footer-input-item\">\r\n                  <ion-input [value]=\"(+payInvo.tot_pr - +payInvo.discount) | currencyDisplay\" [readonly]=\"true\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n        \r\n        <!-- Action buttons on the left side -->\r\n        <ion-col size=\"4\">\r\n          <ion-grid>\r\n            <ion-row class=\"ion-justify-content-end\">\r\n              <ion-col size=\"6\">\r\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\" (click)=\"save()\" [disabled]=\"isLoading()\">\r\n                  <ion-spinner *ngIf=\"isSaving\" slot=\"start\" name=\"dots\"></ion-spinner>\r\n                  <ion-label class=\"ion-text-center\">{{ isSaving ? currentLoadingMessage : 'حفظ' }}</ion-label>\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"6\" *ngIf=\"status == 'initial' || status == 'toFinal'\">\r\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\" (click)=\"presentAlertConfirm()\">\r\n                  <ion-label class=\"ion-text-center\">حذف</ion-label>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<!-- Journal Entry Modal -->\r\n<ion-modal [isOpen]=\"showJournalEntryModal\" (willDismiss)=\"onJournalCancelled()\" style=\"--width: 90%; --max-width: 600px; --min-width: 320px;\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>\r\n          <div style=\"display: flex; align-items: center; justify-content: center; gap: 8px; direction: rtl;\">\r\n            <ion-icon name=\"arrow-down-outline\" *ngIf=\"invoiceJournalData?.invoiceType === 'sales'\" color=\"success\" style=\"font-size: 1.2em;\"></ion-icon>\r\n            <ion-icon name=\"arrow-up-outline\" *ngIf=\"invoiceJournalData?.invoiceType === 'purchase'\" color=\"danger\" style=\"font-size: 1.2em;\"></ion-icon>\r\n            <span *ngIf=\"invoiceJournalData\">\r\n              {{ invoiceJournalData.invoiceType === 'sales' ? 'سند قبض' : 'سند دفع' }} - {{ invoiceJournalData.customerAccount?.sub_name || 'غير محدد' }}\r\n            </span>\r\n          </div>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"onJournalCancelled()\">\r\n            <ion-icon name=\"close\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <app-invoice-journal-entry\r\n        *ngIf=\"invoiceJournalData\"\r\n        [invoiceData]=\"invoiceJournalData\"\r\n        (journalSaved)=\"onJournalSaved($event)\"\r\n        (journalCancelled)=\"onJournalCancelled()\">\r\n      </app-invoice-journal-entry>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_purchase_purchase_page_ts.js.map
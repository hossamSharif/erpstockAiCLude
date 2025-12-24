"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-purchase-order_edit-purchase-order_module_ts"],{

/***/ 97758:
/*!***************************************************************************!*\
  !*** ./src/app/edit-purchase-order/edit-purchase-order-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPurchaseOrderPageRoutingModule": () => (/* binding */ EditPurchaseOrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _edit_purchase_order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-purchase-order.page */ 77891);




const routes = [
    {
        path: '',
        component: _edit_purchase_order_page__WEBPACK_IMPORTED_MODULE_0__.EditPurchaseOrderPage
    }
];
let EditPurchaseOrderPageRoutingModule = class EditPurchaseOrderPageRoutingModule {
};
EditPurchaseOrderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditPurchaseOrderPageRoutingModule);



/***/ }),

/***/ 48052:
/*!*******************************************************************!*\
  !*** ./src/app/edit-purchase-order/edit-purchase-order.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPurchaseOrderPageModule": () => (/* binding */ EditPurchaseOrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _edit_purchase_order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-purchase-order-routing.module */ 97758);
/* harmony import */ var _edit_purchase_order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-purchase-order.page */ 77891);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let EditPurchaseOrderPageModule = class EditPurchaseOrderPageModule {
};
EditPurchaseOrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_purchase_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPurchaseOrderPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_edit_purchase_order_page__WEBPACK_IMPORTED_MODULE_1__.EditPurchaseOrderPage]
    })
], EditPurchaseOrderPageModule);



/***/ }),

/***/ 77891:
/*!*****************************************************************!*\
  !*** ./src/app/edit-purchase-order/edit-purchase-order.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPurchaseOrderPage": () => (/* binding */ EditPurchaseOrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_purchase_order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-purchase-order.page.html?ngResource */ 49797);
/* harmony import */ var _edit_purchase_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-purchase-order.page.scss?ngResource */ 2796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-modal/item-modal.page */ 3671);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/currency.service */ 6612);
/* harmony import */ var _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/price-adjustment-dialog/price-adjustment-dialog.component */ 91872);















let EditPurchaseOrderPage = class EditPurchaseOrderPage {
    constructor(behavApi, _location, alertController, route, rout, storage, modalController, loadingController, datePipe, api, toast, currencyService, cdr) {
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
        this.currencyService = currencyService;
        this.cdr = cdr;
        this.loadingItems = false;
        this.discountType = 'percentage'; // 'percentage' or 'amount'
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.notifArr = [];
        this.showNotif = false;
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.isOpenNotif = false;
        this.newNotif = false;
        this.currenQty = 0;
        this.firstQty = 0;
        this.perchTotQty = 0;
        this.payTotQty = 0;
        this.perchTot = 0;
        this.qtyReal = 0;
        this.availQty = 0;
        this.isOpen = false;
        this.sub_account = [];
        this.sub_accountLocalPurch = [];
        this.items = [];
        this.itemsLocal = [];
        this.itemList = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        this.searchTerm = '';
        this.highlightedIndex = -1;
        this.searchMatches = [];
        this.sub_accountPurch = [];
        this.purchaseOrders = [];
        this.purchaseOrdersLocal = [];
        this.purchOrderLocalUpdate = [];
        this.purchOrderLocalDelete = [];
        this.randomsNumber = [];
        this.store_id = 1;
        this.sub_nameNew = "";
        this.discountPerc = 0;
        this.radioVal = 0;
        this.offline = false;
        this.searchLang = 0;
        this.showMe = null;
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        // Loading state management - Centralized loading system
        this.isUpdating = false;
        this.isDeleting = false;
        this.isConverting = false;
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
                this.resortItemList();
                this.initializeDiscountValues();
                this.getAppInfo();
                // Mark data as initialized to prevent re-initialization
                this.dataInitialized = true;
            }
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
            aliasEn: ""
        };
    }
    // Search functionality methods
    onSearchTermChange() {
        this.searchMatches = [];
        this.highlightedIndex = -1;
        if (!this.searchTerm.trim()) {
            return;
        }
        const displayList = this.getDisplayItemList();
        const searchLower = this.searchTerm.toLowerCase();
        displayList.forEach((item, index) => {
            if (item.item_name && item.item_name.toString().toLowerCase().includes(searchLower)) {
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
            this.highlightedIndex = this.highlightedIndex === 0 ? this.searchMatches.length - 1 : this.highlightedIndex - 1;
        }
        this.scrollToHighlightedItem();
    }
    scrollToHighlightedItem() {
        if (this.highlightedIndex >= 0 && this.highlightedIndex < this.searchMatches.length) {
            const matchIndex = this.searchMatches[this.highlightedIndex];
            const element = document.querySelector(`tr[data-index="${matchIndex}"]`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
    highlightText(text, searchTerm) {
        if (!searchTerm || !text) {
            return text;
        }
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    isSearchMatch(index) {
        return this.searchMatches.includes(index);
    }
    isHighlighted(index) {
        return this.highlightedIndex >= 0 && this.searchMatches[this.highlightedIndex] === index;
    }
    getSearchResultText() {
        if (this.searchMatches.length === 0) {
            return 'لا توجد نتائج';
        }
        return `${this.highlightedIndex + 1} من ${this.searchMatches.length}`;
    }
    ngOnInit() {
        this.initializeCurrency();
    }
    ngOnDestroy() {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
        // Cleanup any remaining loading states
        this.hideLoading();
        // Reset flag when component is actually destroyed (not just navigating to subpages)
        this.dataInitialized = false;
    }
    // Centralized Loading Management Methods
    showLoading(message, operationType = 'updating') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.hideLoading(); // Ensure no existing loaders
            this.resetLoadingStates();
            if (operationType === 'updating') {
                this.isUpdating = true;
            }
            else if (operationType === 'deleting') {
                this.isDeleting = true;
            }
            else if (operationType === 'converting') {
                this.isConverting = true;
            }
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
                if ((this.isUpdating || this.isDeleting || this.isConverting) && this.currentLoader) {
                    console.log('Loading timeout reached, dismissing...');
                    this.hideLoading();
                }
            }, 30000);
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        this.isUpdating = false;
        this.isDeleting = false;
        this.isConverting = false;
        this.currentLoadingMessage = '';
    }
    handleError(error, operation) {
        console.error(`Error in ${operation}:`, error);
        this.hideLoading();
        this.presentToast('لم يتم حفظ البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
    }
    // Check if any loading operation is active
    isLoading() {
        return this.isUpdating || this.isDeleting || this.isConverting;
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.currencyService.initializeCurrency();
            yield this.currencyService.loadSupportedCurrencies();
            if (this.store_info && this.year) {
                yield this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
            }
            this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
                this.cdr.detectChanges();
            });
        });
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
    ionViewDidEnter() {
    }
    getStockItems(pickName) {
        this.api.stockItems(1, this.year.id).subscribe(data => {
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
            this.storage.set('itemsLocal', this.items).then((response) => {
            });
            this.searchResult = this.items;
            if (pickName) {
                this.pickDetail(pickName, 'afterSave');
            }
        }, (err) => {
        }, () => {
        });
    }
    ionViewDidLeave() {
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
                // After store info is loaded, get account balance if supplier is selected
                this.loadInitialAccountBalance();
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.items = response;
            }
        });
    }
    presentPopoverNotif(e) {
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif4.event = e;
        this.isOpenNotif = true;
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
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
            item.perch_price === itemToEdit.perch_price);
        if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].perch_price > 0) {
            // Update both the display list and original list
            displayList[i].tot = +displayList[i].quantity * +displayList[i].perch_price;
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
    getAllStockItemsWithouteCounts() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                if (this.offline == false) {
                    this.api.getAllStockItemsWithouteCounts(1, this.year.id).subscribe(data => {
                        let res = data;
                        this.items = res['data'];
                        this.storage.set('itemsLocal', this.items).then((response) => {
                        });
                    }, (err) => {
                    }, () => {
                    });
                }
            }
        });
    }
    prepareInvo() {
        this.sub_nameNew = "";
        this.radioVal = 0;
        this.payInvo = {
            pay_id: this.payArray[0].pay_id,
            pay_ref: this.payArray[0].pay_ref,
            store_id: this.payArray[0].store_id,
            tot_pr: this.payArray[0].tot_pr,
            pay: this.payArray[0].pay,
            pay_date: this.payArray[0].pay_date,
            pay_time: this.payArray[0].pay_time,
            user_id: this.payArray[0].user_id,
            cust_id: this.payArray[0].cust_id,
            pay_method: this.payArray[0].pay_method,
            discount: this.payArray[0].discount,
            changee: this.payArray[0].changee,
            sub_name: this.payArray[0].sub_name,
            payComment: this.payArray[0].payComment,
            nextPay: this.payArray[0].nextPay,
            yearId: this.payArray[0].yearId
        };
        this.selectedAccount.sub_name = this.payArray[0].sub_name;
        this.pickAccount(this.payArray[0].sub_name);
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
        if (Input == 'dstEp') {
            this.dstEp.nativeElement.focus();
        }
        else if (Input == 'dstPop4') {
            this.dstPop4.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.items;
            setTimeout(() => {
                this.popInput4.setFocus();
            }, 1500);
        }
        else if (Input == 'qtyIdEp') {
            this.qtyIdEp.setFocus();
        }
        else if (Input == 'popInput4') {
            this.popInput4.setFocus();
        }
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
    pickAccount(ev, firstLoad) {
        let evVal;
        if (firstLoad) {
            evVal = ev;
        }
        else {
            evVal = ev.target.value;
        }
        let fl = this.sub_account.filter(x => x.sub_name == evVal);
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
                currentCustumerStatus: 0
            };
            this.payInvo.cust_id = this.selectedAccount.id;
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
            this.selectedItem.item_name = "";
        }
    }
    selectFromPop(item) {
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
        let fl = [];
        if (this.searchLang == 1) {
            fl = this.items.filter(x => x.item_desc == evVal);
        }
        else {
            fl = this.items.filter(x => x.item_name == evVal);
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
                aliasEn: fl[0]['aliasEn']
            };
            this.setFocusOnInput('qtyIdEp');
        }
        else {
            this.presentToast('خطأ في اسم الصنف ', 'danger');
            this.selectedItem.item_name = "";
        }
    }
    presentModal2(id, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_4__.ItemModalPage,
                componentProps: {
                    "item": this.selectedItem,
                    "status": status
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.doAfterDissmiss(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    qtyhange(ev) {
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
    }
    pricehange(ev) {
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
    }
    payChange(ev) {
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
    discountChange(ev) {
        this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100).toFixed(2);
        this.payInvo.changee = +(this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay;
    }
    discountPerChange(ev) {
        this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
        this.payInvo.changee = +(this.payInvo.tot_pr - this.payInvo.discount) - this.payInvo.pay;
    }
    // Update your existing getTotal method
    getTotal() {
        let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
        this.payInvo.tot_pr = sum;
        this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
        this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
        this.payInvo.changee = this.payInvo.changee.toFixed(2);
        // Recalculate discount labels when total changes
        if (this.discountType === 'percentage' && this.discountPerc > 0) {
            this.calculatedDiscountAmount = (sum * +this.discountPerc / 100);
            this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
        }
        else if (this.discountType === 'amount' && this.discountAmount > 0) {
            this.calculatedDiscountPerc = ((+this.discountAmount / sum) * 100);
            this.payInvo.discount = this.discountAmount;
        }
        // Recalculate change after discount update
        this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
        this.payInvo.changee = this.payInvo.changee.toFixed(2);
    }
    back() {
        this._location.back();
    }
    deleteItem(index) {
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
    refresh(para) {
        this.getAllStockItemsWithouteCounts();
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
                parcode: item.parcode || 0
            }));
            const modal = yield this.modalController.create({
                component: _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_9__.PriceAdjustmentDialogComponent,
                cssClass: 'price-adjustment-modal',
                componentProps: {
                    itemsList: itemsToPass,
                    mode: 'purchase'
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
                // Update the perch_price and recalculate total
                this.itemList[itemIndex].perch_price = parseFloat(updatedItem.perch_price) || 0;
                this.itemList[itemIndex].tot = (this.itemList[itemIndex].quantity * this.itemList[itemIndex].perch_price).toFixed(2);
            }
        });
        // Recalculate totals
        this.getTotal();
        this.presentToast('تم تعديل الأسعار بنجاح', 'success');
    }
    onItemSelected(selectedItem) {
        console.log('Item selected:', selectedItem);
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
                    "tot": this.selectedItem.tot,
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +this.selectedItem.id,
                    "dateCreated": r,
                    "perch_price": this.selectedItem.perch_price
                });
            }
            else {
                this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty;
                let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
                this.itemList[index].quantity = +this.selectedItem.qty;
                this.itemList[index].tot = (+this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
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
            this.getTotal();
            this.setFocusOnInput('dstPop4');
        }
    }
    presentPopover(e) {
        this.popover4.event = e;
        this.isOpen = true;
        this.clear();
        this.searchResult = this.items;
        setTimeout(() => {
            this.setFocusOnInput('popInput4');
        }, 2000);
    }
    didDissmis() {
        this.isOpen = false;
        this.setFocusOnInput('qtyIdEP');
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_5__.FilterPipe;
        let fiteredArr = filterPipe.transform(this.items, ev.target.value);
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
    validate() {
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        else if (+this.payInvo.cust_id == 0) {
            this.presentToast('الرجاء إختيار حساب المورد', 'danger');
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
    doAfterDissmiss(data) {
        if (data.role == 'save') {
            this.saveItem(data.data);
        }
    }
    saveItem(mdata) {
        this.presentLoadingWithOptions('جاري حفظ البيانات ...');
        this.logHistoryArr.push({
            "id": null,
            "logRef": this.generateRandom2('insert item'),
            "userId": this.user_info.id,
            "typee": 'insert item',
            "datee": moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            "logStatus": 0,
            "logToken": JSON.stringify(mdata[0]),
            "yearId": this.year.id,
            "store_id": this.store_info.id
        });
        this.api.saveitemMulti(mdata[0]).subscribe(data => {
            if (data['message'] != 'Post Not Created') {
                this.firstq = { id: null, item_id: data['message'], store_id: this.store_info.id, quantity: mdata[1].quantity, pay_price: mdata[0].pay_price, perch_price: mdata[0].perch_price, fq_year: '2022', item_name: mdata[0].item_name };
                this.saveFierstQty(mdata[0].item_name);
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveFierstQty(item_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveFirstQty(this.firstq).subscribe(data => {
                this.performSyncItem(item_name);
                this.presentToast('تم الحفظ بنجاح', 'success');
            }, (err) => {
                this.presentToast('1لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    preparenewaccount() {
        if (this.selectedAccount.sub_name.length > 0 && this.selectedAccount.id == null) {
        }
        else {
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
    }
    saveLogHistoryForInsertItem() {
        let firstq;
        let item;
        if (this.logHistoryArr.length > 1) {
            item = this.logHistoryArr[1];
            firstq = this.logHistoryArr[0];
        }
        this.api.saveLogHistoryMulti(item, firstq, 'insert').subscribe(data => {
            if (data['message'] != 'Post Not Created') {
                this.logHistoryArr = [];
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let d = this.payInvo.pay_date;
            this.payInvo.sub_name = this.selectedAccount.sub_name;
            this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
            if (this.payInvo.nextPay != null) {
                this.payInvo.nextPay = this.datePipe.transform(d, 'yyyy-MM-dd');
            }
            if (this.validate() == true) {
                yield this.showLoading('جاري تحديث طلب الشراء...', 'updating');
                try {
                    this.updateInvo();
                }
                catch (error) {
                    this.handleError(error, 'update');
                }
            }
        });
    }
    performSyncItem(item_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (item_name) {
                yield this.getStockItems(item_name);
            }
            else {
                yield this.getAllStockItemsWithouteCounts();
                yield this.getStockItems();
            }
        });
    }
    generateRandom2(role) {
        let da = new Date;
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    updateInvo() {
        // Update purchase order and items together in single API call
        const orderWithItems = {
            order: this.payInvo,
            items: this.itemList
        };
        this.api.updatePurchaseOrderWithItems(orderWithItems).subscribe((response) => {
            this.hideLoading();
            this.handleUpdateSuccess();
        }, (err) => {
            this.handleError(err, 'updateInvo');
        });
    }
    handleUpdateSuccess() {
        // Show success message
        this.presentToast('تم الحفظ بنجاح', 'success');
        // Update local purchase orders storage
        this.purchaseOrders = this.purchaseOrders.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
        this.purchaseOrders.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('purchaseOrders', this.purchaseOrders).then((response) => {
            // Purchase orders saved to local storage
        });
        let arr = [];
        arr.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        // Perform sync
        this.performSync();
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.back();
        });
    }
    performSyncDel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.back();
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            this.deletePurchaseOrder();
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
    // Convert purchase order to purchase invoice
    presentConvertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد التحويل!',
                mode: 'ios',
                message: 'هل تريد تحويل هذا الطلب إلى فاتورة شراء؟',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: () => {
                            console.log('Convert cancelled');
                        }
                    }, {
                        text: 'تحويل',
                        id: 'confirm-button',
                        handler: () => {
                            this.executeConvertToInvoice();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    convertToInvoice() {
        this.presentConvertConfirm();
    }
    executeConvertToInvoice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تحويل الطلب إلى فاتورة شراء...', 'converting');
            const conversionData = {
                pay_id: this.payInvo.pay_id,
                pay_ref: this.payInvo.pay_ref,
                tot_pr: this.payInvo.tot_pr,
                pay: this.payInvo.pay,
                changee: this.payInvo.changee,
                user_id: this.payInvo.user_id,
                store_id: this.payInvo.store_id,
                pay_date: this.payInvo.pay_date,
                pay_time: this.payInvo.pay_time,
                nextPay: this.payInvo.nextPay,
                discount: this.payInvo.discount,
                payComment: this.payInvo.payComment,
                cust_id: this.payInvo.cust_id,
                pay_method: this.payInvo.pay_method,
                yearId: this.payInvo.yearId
            };
            this.api.convertPurchaseOrderToInvoice(conversionData).subscribe((response) => {
                this.hideLoading();
                if (response.success) {
                    this.presentToast('تم تحويل الطلب إلى فاتورة شراء بنجاح', 'success');
                    // Update local storage
                    this.purchaseOrders = this.purchaseOrders.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                    this.storage.set('purchaseOrders', this.purchaseOrders).then(() => {
                        this.performSyncDel();
                    });
                }
                else {
                    this.presentToast('لم يتم تحويل الطلب، خطأ في الاتصال حاول مرة أخرى', 'danger');
                }
            }, (err) => {
                this.handleError(err, 'convertToInvoice');
            });
        });
    }
    deletePurchaseOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري حذف طلب الشراء...', 'deleting');
            const deletionData = {
                pay_id: this.payInvo.pay_id,
                pay_ref: this.payInvo.pay_ref
            };
            this.api.deletePurchaseOrderWithItems(deletionData).subscribe(data => {
                this.hideLoading();
                if (data['success']) {
                    this.purchaseOrders = this.purchaseOrders.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                    this.storage.set('purchaseOrders', this.purchaseOrders).then((response) => {
                        this.performSyncDel();
                    });
                    this.presentToast('تم حذف البيانات بنجاح', 'success');
                }
                else {
                    this.presentToast('لم يتم حذف البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
                }
            }, (err) => {
                this.handleError(err, 'deletePurchaseOrder');
            });
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
                currentCustumerStatus: account.currentCustumerStatus || 0
            };
            // Update invoice with selected account
            this.payInvo.cust_id = account.id;
            this.payInvo.sub_name = account.sub_name;
            console.log('Account selected in edit-purchase-order:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            // Update the current supplier status based on balance
            this.selectedAccount.sub_balance = balance.current_balance;
            this.selectedAccount.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
            console.log('Account balance loaded in edit-purchase-order:', balance);
        }
    }
    // Load account balance when page initializes with existing order data
    loadInitialAccountBalance() {
        if (this.payInvo && this.payInvo.cust_id && this.store_info && this.year) {
            // Get account balance for the supplier in the order
            this.api.getAccountBalance(this.payInvo.cust_id, this.store_info.id, this.year.id).subscribe((response) => {
                if (response.success && response.data) {
                    // Update selected account balance
                    this.selectedAccount.sub_balance = response.data.current_balance;
                    this.selectedAccount.currentCustumerStatus = response.data.status === 'debit' ? 0 : 1;
                    // Populate selectedAccount with supplier data
                    this.selectedAccount.id = this.payInvo.cust_id;
                    this.selectedAccount.sub_name = this.payInvo.sub_name;
                    console.log('Initial account balance loaded in edit-purchase-order:', response.data);
                }
            }, (error) => {
                console.error('Error loading initial account balance in edit-purchase-order:', error);
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
EditPurchaseOrderPage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_6__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_8__.CurrencyService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef }
];
EditPurchaseOrderPage.propDecorators = {
    dstEp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["dstEp",] }],
    qtyIdEp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['qtyIdEp',] }],
    dstPop4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['dstPop4',] }],
    popInput4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popInput4',] }],
    popover4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popover4',] }],
    popoverNotif4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popoverNotif4',] }]
};
EditPurchaseOrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-edit-purchase-order',
        template: _edit_purchase_order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_purchase_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditPurchaseOrderPage);



/***/ }),

/***/ 2796:
/*!******************************************************************************!*\
  !*** ./src/app/edit-purchase-order/edit-purchase-order.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\nion-header ion-toolbar ion-title {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 40px;\n  margin: 0 5px;\n  border: none;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item .header-date-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-align: center;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button {\n  --background: rgba(255, 255, 255, 0.2);\n  --background-hover: rgba(255, 255, 255, 0.3);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0 5px;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button ion-label {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\nion-content {\n  --padding-top: 56px;\n  --padding-bottom: 120px;\n}\n.custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n.cust-card {\n  border-radius: 5px;\n}\n.show {\n  visibility: visible;\n}\n.hide {\n  visibility: hidden;\n}\n.bnone {\n  border: none;\n}\n.red {\n  color: var(--ion-color-danger);\n}\n.darko {\n  color: var(--ion-color-dark);\n}\nion-popover {\n  --offset-y: -30px ;\n}\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n.table-card-header ion-card-title {\n  margin: 0;\n}\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.compact-radio-style .discount-radio-container {\n  --min-height: 48px;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group {\n  justify-content: space-around;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option {\n  flex: 1;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background-color 0.2s ease;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option:hover {\n  background-color: var(--ion-color-light);\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option ion-label {\n  font-weight: 500;\n}\nion-segment {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  min-width: 200px;\n}\nion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-height: 28px;\n}\nion-segment ion-segment-button ion-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.rtl-input {\n  direction: rtl;\n}\n.rtl-input ion-label.float-right {\n  text-align: right !important;\n  transform-origin: right top !important;\n  right: 0 !important;\n  left: auto !important;\n}\n.rtl-input ion-label.float-right.label-floating {\n  transform: translateY(-14px) scale(0.82) !important;\n  right: 0 !important;\n}\n.rtl-input ion-input.text-right {\n  text-align: right !important;\n  --padding-start: 0;\n  --padding-end: 16px;\n}\n.rtl-input ion-input.text-right input {\n  text-align: right !important;\n  direction: ltr;\n}\n.rtl-input ion-note {\n  direction: ltr;\n}\n.custom-rtl-input .item-native {\n  flex-direction: row-reverse;\n}\n.custom-rtl-input ion-label {\n  order: 2;\n  text-align: right;\n  margin-right: 0;\n  margin-left: 16px;\n}\n.custom-rtl-input ion-input {\n  order: 1;\n  text-align: right;\n}\n.custom-rtl-input ion-input input {\n  text-align: right !important;\n}\n.custom-rtl-input ion-note {\n  order: 3;\n}\n.total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n  font-weight: 600;\n}\n.total-after-discount ion-input {\n  --color: #15803d;\n  font-size: 1.1em;\n  text-align: center;\n}\nion-modal {\n  --height: 90%;\n  --border-radius: 16px 16px 0 0;\n}\n.insufficient-stock-modal {\n  --height: 80vh;\n  --width: 90vw;\n  --max-width: 600px;\n  --border-radius: 12px;\n}\n@media (max-width: 768px) {\n  .insufficient-stock-modal {\n    --height: 95vh;\n    --width: 95vw;\n  }\n}\n.top-card-row {\n  padding: 16px;\n  align-items: flex-start;\n  gap: 16px;\n}\n.top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.top-card-row .account-column .column-label,\n.top-card-row .invoice-type-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n  font-size: 0.95rem;\n  height: 22px;\n  line-height: 30px;\n}\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n.top-card-row .invoice-type-column .invoice-type-section {\n  margin-top: 10px;\n}\n.top-card-row .invoice-type-column .invoice-type-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.category-column {\n  padding: 0 12px;\n  text-align: center;\n}\n.category-column .column-label {\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 12px;\n  font-size: 0.95rem;\n}\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .invoice-type-column:last-child,\n.top-card-row .category-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n.table-container {\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n.search-container {\n  width: 100%;\n}\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n/* ======================================\n   CATEGORY SELECTOR STYLES - From statement2\n   ====================================== */\n.category-section,\n.invoice-type-section {\n  margin-top: 0;\n}\n.category-section .field-label,\n.invoice-type-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n/* Responsive design for mobile */\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-column .column-label {\n    font-size: 13px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/* Footer styles */\nion-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-footer ion-toolbar {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-medium);\n}\nion-footer .total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n}\nion-footer .total-after-discount ion-input {\n  --color: #15803d;\n  font-weight: 600;\n}\nion-footer ion-item {\n  --background: white;\n  border-radius: 5px;\n  margin: 4px 0;\n}\nion-footer .footer-input-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  padding: 6px 0;\n}\nion-footer .footer-input-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 3px;\n  text-align: center;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .footer-input-item {\n  width: 100%;\n}\nion-footer .footer-input-item ion-input {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-header {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 20px;\n}\nion-footer .discount-type-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 0;\n  margin-inline-end: 6px;\n  white-space: nowrap;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .discount-segment-container {\n  --background: transparent;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  flex: 1;\n  max-width: 140px;\n}\nion-footer .compact-discount-segment {\n  --background: var(--ion-color-light);\n  border-radius: 14px;\n  padding: 1px;\n  width: 100%;\n  min-height: 24px;\n}\nion-footer .compact-discount-segment .compact-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  --indicator-color: transparent;\n  --border-radius: 12px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  min-height: 22px;\n  font-size: 10px;\n}\nion-footer .compact-discount-segment .compact-segment-button ion-label {\n  font-weight: 500;\n  margin: 0;\n}\nion-footer .discount-input {\n  margin-top: 3px;\n  width: 100%;\n}\nion-footer .discount-input ion-input {\n  text-align: center;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-input .discount-note {\n  font-size: 11px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-footer .discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n/* Responsive footer for mobile */\n@media (max-width: 768px) {\n  ion-footer ion-grid {\n    padding: 0;\n  }\n  ion-footer ion-col {\n    padding: 0 3px;\n  }\n  ion-footer .footer-input-container {\n    padding: 4px 0;\n  }\n  ion-footer .footer-input-label,\nion-footer .discount-type-label {\n    font-size: 9px;\n    height: 12px;\n    margin-bottom: 2px;\n  }\n  ion-footer .discount-header {\n    margin-bottom: 2px;\n    height: 22px;\n  }\n  ion-footer .footer-input-item ion-input,\nion-footer .discount-input ion-input {\n    font-size: 11px;\n    --padding-top: 5px;\n    --padding-bottom: 5px;\n  }\n  ion-footer .discount-segment-container {\n    max-width: 110px;\n  }\n  ion-footer .compact-discount-segment {\n    min-height: 20px;\n    border-radius: 12px;\n    padding: 1px;\n  }\n  ion-footer .compact-discount-segment .compact-segment-button {\n    min-height: 18px;\n    font-size: 8px;\n    --border-radius: 10px;\n    --padding-start: 3px;\n    --padding-end: 3px;\n  }\n  ion-footer ion-button {\n    --padding-start: 0;\n    --padding-end: 0;\n    font-size: 10px;\n    height: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHVyY2hhc2Utb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0FBQ047QUFDTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUdRO0VBQ0Usc0NBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRFY7QUFHVTtFQUNFLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURaO0FBS1E7RUFDRSxzQ0FBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhWO0FBS1U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFXRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFSSjtBQVdFO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBUk47QUFVTTtFQUNJLGtCQUFBO0FBUFY7QUFTTTtFQUFPLG1CQUFBO0FBTGI7QUFPTTtFQUFNLGtCQUFBO0FBSFo7QUFPRTtFQUNFLFlBQUE7QUFKSjtBQU9HO0VBQ0MsOEJBQUE7QUFKSjtBQU1HO0VBQ0MsNEJBQUE7QUFISjtBQUtFO0VBQ0Usa0JBQUE7QUFGSjtBQUlFO0VBQ0UseUJBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBRE47QUFJSTtFQUNLLGtCQUFBO0VBQ0gsV0FBQTtFQUNBLFlBQUE7QUFETjtBQUlJO0VBQ0UseUJBQUE7QUFETjtBQUdJO0VBQVEseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsWUFBQTtBQU16RztBQUhJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQU1OO0FBSEU7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ZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDk5OTsgLy8gSGlnaCBlbm91Z2ggdG8gc3RheSBhYm92ZSBjb250ZW50IGJ1dCBiZWxvdyBzeXN0ZW0gbW9kYWxzICh1c3VhbGx5IDEwMDArKVxyXG4gICAgXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgXHJcbiAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLWJ1dHRvbnNbc2xvdD1cImVuZFwiXSB7XHJcbiAgICAgICAgLmhlYWRlci1kYXRlLWl0ZW0ge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgICAgICAgLS1taW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmhlYWRlci1kYXRlLWlucHV0IHtcclxuICAgICAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xyXG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBZGp1c3QgY29udGVudCBwYWRkaW5nIGZvciBmaXhlZCBoZWFkZXIgYW5kIGZvb3RlclxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy10b3A6IDU2cHg7IC8vIEFwcHJveGltYXRlIGhlaWdodCBvZiBpb24taGVhZGVyXHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMjBweDsgLy8gQXBwcm94aW1hdGUgaGVpZ2h0IG9mIGZvb3RlciAoYWRqdXN0IGJhc2VkIG9uIGFjdHVhbCBmb290ZXIgaGVpZ2h0KVxyXG4gIH1cclxuICBcclxuICAuY3VzdElucHV0e1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuY3VzdC1jYXJke1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zaG93eyB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XHJcbiAgXHJcbiAgICAgIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XHJcbiAgICAgIC5jdXN0Um93e1xyXG4gICAgICAgIC8vICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gIC5ibm9uZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgIC5yZWR7XHJcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSBcclxuICAgfVxyXG4gICAuZGFya297XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspXHJcbiAgIH1cclxuICBpb24tcG9wb3ZlcntcclxuICAgIC0tb2Zmc2V0LXkgOiAtMzBweFxyXG4gIH1cclxuICAuY3VzdElucHtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMC41cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgIFxyXG4gICAgLnRhYmxle1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDEycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fVxyXG4gICAgXHJcbiAgICAvLyBSaWdodCBhbGlnbiBpdGVtIG5hbWUgY29sdW1uXHJcbiAgICB0ZDpudGgtY2hpbGQoMiksIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIC50YWJsZS1jYXJkLWhlYWRlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIFxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIFxyXG4gICAgICBpb24tcm93IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWNvbFtzaXplPVwiYXV0b1wiXSB7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIC0tY29sb3ItaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgICAgICBcclxuICAgIC5kaXNjb3VudC1zZWN0aW9uIHtcclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIFxyXG4gICAgLmlubGluZS1yYWRpby1ncm91cCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMjRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICAucmFkaW8tb3B0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQWx0ZXJuYXRpdmUgY29tcGFjdCB2ZXJzaW9uIChpZiB5b3UgcHJlZmVyIGV2ZW4gbW9yZSBjb21wYWN0KVxyXG4gIC5jb21wYWN0LXJhZGlvLXN0eWxlIHtcclxuICAgIC5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xyXG4gICAgICAtLW1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIFxyXG4gICAgICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBcclxuICAgICAgICAucmFkaW8tb3B0aW9uIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW9uLXNlZ21lbnQgeyBcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgIFxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNjb3VudC1zZWN0aW9uIHtcclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIFxyXG4gICAgLmlubGluZS1yYWRpby1ncm91cCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMjRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICAucmFkaW8tb3B0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgXHJcbiAgICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAyNHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgIC5yYWRpby1vcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBcclxuICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBSVEwgSW5wdXQgc3R5bGluZyBmb3IgQXJhYmljIGxhYmVsc1xyXG4gIC5ydGwtaW5wdXQge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbC5mbG9hdC1yaWdodCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcCAhaW1wb3J0YW50O1xyXG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgICAmLmxhYmVsLWZsb2F0aW5nIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE0cHgpIHNjYWxlKDAuODIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taW5wdXQudGV4dC1yaWdodCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpcmVjdGlvbjogbHRyOyAvLyBLZWVwIG51bWJlcnMgTFRSIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tbm90ZSB7XHJcbiAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBbHRlcm5hdGl2ZSBhcHByb2FjaCBpZiB0aGUgYWJvdmUgZG9lc24ndCB3b3JrIHBlcmZlY3RseVxyXG4gIC5jdXN0b20tcnRsLWlucHV0IHtcclxuICAgIC5pdGVtLW5hdGl2ZSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBvcmRlcjogMTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIFxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tbm90ZSB7XHJcbiAgICAgIG9yZGVyOiAzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBZGQgc3R5bGVzIGZvciB0aGUgdG90YWwgYWZ0ZXIgZGlzY291bnQgZmllbGQgYW5kIHByb2dyZXNzIHN0ZXBwZXJcclxuICAudG90YWwtYWZ0ZXItZGlzY291bnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjBmZGY0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzE2YTM0YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIC0tY29sb3I6ICMxNTgwM2Q7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gTW9kYWwgc3R5bGluZ1xyXG4gIGlvbi1tb2RhbCB7XHJcbiAgICAtLWhlaWdodDogOTAlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xyXG4gIH1cclxuICBcclxuICAvLyBJbnN1ZmZpY2llbnQgU3RvY2sgTW9kYWwgU3R5bGluZ1xyXG4gIC5pbnN1ZmZpY2llbnQtc3RvY2stbW9kYWwge1xyXG4gICAgLS1oZWlnaHQ6IDgwdmg7XHJcbiAgICAtLXdpZHRoOiA5MHZ3O1xyXG4gICAgLS1tYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgLS1oZWlnaHQ6IDk1dmg7XHJcbiAgICAgIC0td2lkdGg6IDk1dnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFRvcCBDYXJkIE9yZ2FuaXphdGlvbiBTdHlsaW5nXHJcbiAgLnRvcC1jYXJkLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDE2cHg7IC8vIFJlcGxhY2Ugb2Zmc2V0IHdpdGggZ2FwXHJcbiAgICBcclxuICAgIC5hY2NvdW50LWNvbHVtbixcclxuICAgIC5pbnZvaWNlLXR5cGUtY29sdW1uLFxyXG4gICAgLmNhdGVnb3J5LWNvbHVtbixcclxuICAgIC5kYXRlLWNvbW1lbnQtY29sdW1uLFxyXG4gICAgLmRhdGUtY29sdW1uIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBcclxuICAgICAgLmNvbHVtbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsgLy8gUmVkdWNlZCBtYXJnaW5cclxuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4OyAvLyBGaXhlZCBoZWlnaHQgZm9yIGNvbnNpc3RlbnQgYWxpZ25tZW50XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWxpZ24gYWxsIGZvcm0gY29udGVudCBhdCB0aGUgc2FtZSBsZXZlbFxyXG4gICAgLmFjY291bnQtY29sdW1uIHtcclxuICAgICAgYXBwLWFjY291bnQtc2VsZWN0b3Ige1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmludm9pY2UtdHlwZS1jb2x1bW4ge1xyXG4gICAgICAuaW52b2ljZS10eXBlLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbXBhY3Qtc2VnbWVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4OyAvLyBJbmNyZWFzZWQgaGVpZ2h0IGZvciBiZXR0ZXIgYWxpZ25tZW50XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhdGVnb3J5LWNvbHVtbiB7XHJcbiAgICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jb21wYWN0LXNlZ21lbnQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGhlaWdodDogNjBweDsgLy8gSW5jcmVhc2VkIGhlaWdodCBmb3IgYmV0dGVyIGFsaWdubWVudFxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kYXRlLWNvbW1lbnQtY29sdW1uIHtcclxuICAgICAgLmNvbW1lbnQtaW5wdXQge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIGhlaWdodDogNDhweDsgLy8gTWF0Y2ggb3RoZXIgaW5wdXRzXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGF0ZS1jb2x1bW4ge1xyXG4gICAgICAuZGF0ZS1pbnB1dCB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4OyAvLyBNYXRjaCBvdGhlciBpbnB1dHNcclxuICAgICAgICBcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICAgLmNhdGVnb3J5LWNvbHVtbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgLmNvbHVtbi1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIC8vIFJlc3BvbnNpdmUgZGVzaWduIGZvciBtb2JpbGVcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50b3AtY2FyZC1yb3cge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBcclxuICAgICAgLmFjY291bnQtY29sdW1uLFxyXG4gICAgICAuaW52b2ljZS10eXBlLWNvbHVtbixcclxuICAgICAgLmNhdGVnb3J5LWNvbHVtbixcclxuICAgICAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xyXG4gICAgICAgIHNpemU6IDEyO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFRhYmxlIGNvbnRhaW5lciBhbmQgc2VhcmNoIHN0eWxlc1xyXG4gIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIC5zZWFyY2gtaXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBcclxuICAgICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNlYXJjaC1uYXZpZ2F0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA0cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIC0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gVGFibGUgcm93IGhpZ2hsaWdodGluZ1xyXG4gIHRyLnNlYXJjaC1tYXRjaCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC4yKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICB0ci5zZWFyY2gtaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuNCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gSGlnaGxpZ2h0IHRleHRcclxuICBtYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgIENBVEVHT1JZIFNFTEVDVE9SIFNUWUxFUyAtIEZyb20gc3RhdGVtZW50MlxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgXHJcbiAgLmNhdGVnb3J5LXNlY3Rpb24sXHJcbiAgLmludm9pY2UtdHlwZS1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBcclxuICAgIC5maWVsZC1sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNvbXBhY3Qtc2VnbWVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBtYXJnaW46IDRweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgZmxleDogMTtcclxuICBcclxuICAgICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmOmhvdmVyOm5vdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgZGVzaWduIGZvciBtb2JpbGUgKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb21wYWN0LXNlZ21lbnQge1xyXG4gICAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhdGVnb3J5LWNvbHVtbiB7XHJcbiAgICAgIC5jb2x1bW4tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2F0ZWdvcnktc2VjdGlvbiB7XHJcbiAgICAgIC5maWVsZC1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvb3RlciBzdHlsZXMgKi9cclxuICBpb24tZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDk5OTsgLy8gSGlnaCBlbm91Z2ggdG8gc3RheSBhYm92ZSBjb250ZW50IGJ1dCBiZWxvdyBzeXN0ZW0gbW9kYWxzXHJcbiAgICBcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b3RhbC1hZnRlci1kaXNjb3VudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2YwZmRmNDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzE2YTM0YTtcclxuICAgICAgXHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgLS1jb2xvcjogIzE1ODAzZDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9vdGVyLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvb3Rlci1pbnB1dC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb290ZXItaW5wdXQtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGlzY291bnQtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGlzY291bnQtdHlwZS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDZweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpc2NvdW50LXNlZ21lbnQtY29udGFpbmVyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgbWF4LXdpZHRoOiAxNDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbXBhY3QtZGlzY291bnQtc2VnbWVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMjRweDtcclxuICAgICAgXHJcbiAgICAgIC5jb21wYWN0LXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xyXG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGlzY291bnQtaW5wdXQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5kaXNjb3VudC1ub3RlIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGlzY291bnQtc2VjdGlvbiB7XHJcbiAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXNjb3VudC1yYWRpby1jb250YWluZXIge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAgIFxyXG4gICAgICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJhZGlvLW9wdGlvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgZm9vdGVyIGZvciBtb2JpbGUgKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGlvbi1mb290ZXIge1xyXG4gICAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1pbnB1dC1sYWJlbCxcclxuICAgICAgLmRpc2NvdW50LXR5cGUtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5kaXNjb3VudC1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItaW5wdXQtaXRlbSxcclxuICAgICAgLmRpc2NvdW50LWlucHV0IHtcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmRpc2NvdW50LXNlZ21lbnQtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY29tcGFjdC1kaXNjb3VudC1zZWdtZW50IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jb21wYWN0LXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogM3B4O1xyXG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */";

/***/ }),

/***/ 49797:
/*!******************************************************************************!*\
  !*** ./src/app/edit-purchase-order/edit-purchase-order.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"back()\" defaultHref=\"/folder/purchase-record\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>تعديل طلب شراء</ion-title>\n    <!-- Date in header -->\n    <ion-buttons slot=\"end\">\n      <app-currency-switcher></app-currency-switcher>\n      <ion-item class=\"header-date-item\">\n        <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" class=\"header-date-input\"></ion-input>\n      </ion-item>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"ion-no-padding ion-no-margin\">\n      <ion-grid *ngIf=\"payInvo\">\n        <ion-row dir=\"rtl\" class=\"top-card-row\">\n          <!-- First Column: Account Selector -->\n          <ion-col size=\"4\" offset=\"3\" class=\"account-column\">\n            <app-account-selector\n              accountType=\"supplier\"\n              placeholder=\"اختر حساب المورد\"\n              label=\"حساب المورد\"\n              [store_info]=\"store_info\"\n              [year]=\"year\"\n              [showAddButton]=\"true\"\n              [(ngModel)]=\"selectedAccount\"\n              (accountSelected)=\"onAccountSelected($event)\"\n              (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n            </app-account-selector>\n          </ion-col>\n\n          <!-- Comment Column: Note field in same row -->\n          <ion-col size=\"4\" class=\"date-comment-column\">\n            <ion-label class=\"column-label\">ملاحظة</ion-label>\n            <ion-item class=\"custInput comment-input\">\n              <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\" [disabled]=\"isLoading()\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <ion-grid  *ngIf=\"payInvo\" >\n      <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\n        <ion-col size=\"11\" class=\"ion-no-padding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n              <app-item-selector\n                [items]=\"items\"\n                [loadingItems]=\"loadingItems\"\n                [searchLang]=\"searchLang\"\n                [store_info]=\"store_info\"\n                [year]=\"year\"\n                parentPage=\"edit-purchase-order\"\n                [enablePriceUpdateConfirmation]=\"true\"\n                [payRef]=\"payInvo.pay_ref\"\n                [showQuantityInput]=\"true\"\n                [showPriceInput]=\"false\"\n                [showPerchPriceInput]=\"true\"\n                placeholder=\"اختر الصنف\"\n                (itemSelected)=\"onItemSelected($event)\"\n                (itemAdded)=\"onItemAdded($event)\"\n                (refreshItems)=\"refresh('item')\">\n              </app-item-selector>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n              <ion-card-header color=\"primary\" class=\"table-card-header\">\n                <ion-card-title>\n                  <ion-row class=\"ion-align-items-center\">\n                    <ion-col size=\"3\">\n                      <span>قائمة الأصناف</span>\n                    </ion-col>\n                    <ion-col size=\"6\" class=\"ion-text-center\">\n                      <div class=\"search-container\">\n                        <ion-item lines=\"none\" class=\"search-item\">\n                          <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\n                          <ion-input\n                            [(ngModel)]=\"searchTerm\"\n                            (ionInput)=\"onSearchTermChange()\"\n                            placeholder=\"البحث في الأصناف...\"\n                            clearInput=\"true\"\n                            class=\"search-input\">\n                          </ion-input>\n                          <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\n                            <span class=\"search-results\">{{ getSearchResultText() }}</span>\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\n                              <ion-icon name=\"chevron-up\"></ion-icon>\n                            </ion-button>\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\n                              <ion-icon name=\"chevron-down\"></ion-icon>\n                            </ion-button>\n                          </div>\n                        </ion-item>\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"ion-text-end\">\n                      <ion-button\n                        fill=\"clear\"\n                        color=\"light\"\n                        size=\"small\"\n                        (click)=\"sortItemListAlphabetically()\"\n                        [disabled]=\"!itemList || itemList.length === 0\"\n                      >\n                        <ion-icon name=\"list\" slot=\"start\"></ion-icon>\n                        {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\n                      </ion-button>\n                      <ion-button\n                        fill=\"clear\"\n                        color=\"light\"\n                        size=\"small\"\n                        (click)=\"openPriceAdjustmentDialog()\"\n                        [disabled]=\"!itemList || itemList.length === 0\"\n                      >\n                        <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n                        تعديل الأسعار\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-title>\n              </ion-card-header>\n              <div class=\"table-container\">\n               <table class=\"table\">\n                 <tr>\n                  <th>no</th>\n                  <th>الصنف</th>\n                  <th>الكمية</th>\n                  <th>سعر الشراء ({{ getCurrencySymbol() }})</th>\n                  <th>المجموع ({{ getCurrencySymbol() }})</th>\n                  <th></th>\n                 </tr>\n                 <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\"\n                     (dblclick)=\"qtyClick(i)\"\n                     [attr.data-index]=\"i\"\n                     [class.search-highlight]=\"isHighlighted(i)\"\n                     [class.search-match]=\"isSearchMatch(i)\">\n                  <td>{{i+1}}</td>\n                  <td>\n                    <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\n                  </td>\n                  <td >\n                    <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                 <td>\n                   <ion-text *ngIf=\"showMe != i\">{{item.perch_price | currencyDisplay:'SDG':false}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.perch_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                  <td>{{item.tot | currencyDisplay:'SDG':false}}</td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>\n                 </tr>\n               </table>\n              </div>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n<!-- Footer with totals and action buttons -->\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-align-items-center\">\n        <!-- Discount controls on the right side -->\n        <ion-col size=\"8\" class=\"ion-text-end\">\n          <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">إجمالي المبلغ</ion-label>\n                <ion-item class=\"custInput footer-input-item\">\n                  <ion-input [value]=\"payInvo.tot_pr | currencyDisplay\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col class=\"footer-input-container\">\n                <div class=\"discount-header\">\n                  <div dir=\"rtl\" class=\"discount-segment-container\">\n                    <ion-segment [(ngModel)]=\"discountType\" (ionChange)=\"onDiscountTypeChange($event)\" class=\"compact-discount-segment\" [disabled]=\"isLoading()\">\n                      <ion-segment-button value=\"percentage\" class=\"compact-segment-button\">\n                        <ion-label>نسبة الخصم%</ion-label>\n                      </ion-segment-button>\n                      <ion-segment-button value=\"amount\" class=\"compact-segment-button\">\n                        <ion-label>مبلغ الخصم</ion-label>\n                      </ion-segment-button>\n                    </ion-segment>\n                  </div>\n                </div>\n                <!-- Percentage Discount Input -->\n                <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input custInput discount-input\">\n                  <ion-input\n                    type=\"number\"\n                    [(ngModel)]=\"discountPerc\"\n                    (ionInput)=\"onPercentageDiscountChange($event)\"\n                    placeholder=\"نسبة الخصم %\"\n                    [disabled]=\"isLoading()\">\n                  </ion-input>\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\" class=\"discount-note\">\n                    {{ calculatedDiscountAmount | currencyDisplay }}\n                  </ion-note>\n                </ion-item>\n\n                <!-- Amount Discount Input -->\n                <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input custInput discount-input\">\n                  <ion-input\n                    type=\"number\"\n                    [(ngModel)]=\"discountAmount\"\n                    (ionInput)=\"onAmountDiscountChange($event)\"\n                     placeholder=\"مبلغ الخصم\"\n                     [disabled]=\"isLoading()\">\n                  </ion-input>\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\" class=\"discount-note\">\n                    {{ calculatedDiscountPerc.toFixed(2) }}%\n                  </ion-note>\n                </ion-item>\n              </ion-col>\n              <ion-col class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">المجموع بعد الخصم</ion-label>\n                <ion-item class=\"custInput total-after-discount footer-input-item\">\n                  <ion-input [value]=\"(+payInvo.tot_pr - +payInvo.discount) | currencyDisplay\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n\n        <!-- Action buttons on the left side -->\n        <ion-col size=\"4\">\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col size=\"4\">\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\" (click)=\"update()\" [disabled]=\"isLoading()\">\n                  <ion-spinner *ngIf=\"isUpdating\" slot=\"start\" name=\"dots\"></ion-spinner>\n                  <ion-label class=\"ion-text-center\">{{ isUpdating ? currentLoadingMessage : 'حفظ' }}</ion-label>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"warning\" (click)=\"convertToInvoice()\" [disabled]=\"isLoading()\">\n                  <ion-spinner *ngIf=\"isConverting\" slot=\"start\" name=\"dots\"></ion-spinner>\n                  <ion-label class=\"ion-text-center\">{{ isConverting ? 'جاري التحويل...' : 'تحويل لفاتورة' }}</ion-label>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\" (click)=\"delete()\" [disabled]=\"isLoading()\">\n                  <ion-spinner *ngIf=\"isDeleting\" slot=\"start\" name=\"dots\"></ion-spinner>\n                  <ion-label class=\"ion-text-center\">{{ isDeleting ? currentLoadingMessage : 'حذف' }}</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-purchase-order_edit-purchase-order_module_ts.js.map
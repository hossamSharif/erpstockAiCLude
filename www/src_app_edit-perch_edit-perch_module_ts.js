"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-perch_edit-perch_module_ts"],{

/***/ 81741:
/*!*********************************************************!*\
  !*** ./src/app/edit-perch/edit-perch-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPerchPageRoutingModule": () => (/* binding */ EditPerchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _edit_perch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-perch.page */ 26811);




const routes = [
    {
        path: '',
        component: _edit_perch_page__WEBPACK_IMPORTED_MODULE_0__.EditPerchPage
    }
];
let EditPerchPageRoutingModule = class EditPerchPageRoutingModule {
};
EditPerchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditPerchPageRoutingModule);



/***/ }),

/***/ 36878:
/*!*************************************************!*\
  !*** ./src/app/edit-perch/edit-perch.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPerchPageModule": () => (/* binding */ EditPerchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _edit_perch_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-perch-routing.module */ 81741);
/* harmony import */ var _edit_perch_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-perch.page */ 26811);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);









let EditPerchPageModule = class EditPerchPageModule {
};
EditPerchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _edit_perch_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPerchPageRoutingModule
        ],
        declarations: [_edit_perch_page__WEBPACK_IMPORTED_MODULE_1__.EditPerchPage]
    })
], EditPerchPageModule);



/***/ }),

/***/ 26811:
/*!***********************************************!*\
  !*** ./src/app/edit-perch/edit-perch.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPerchPage": () => (/* binding */ EditPerchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_perch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-perch.page.html?ngResource */ 10363);
/* harmony import */ var _edit_perch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-perch.page.scss?ngResource */ 92868);
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















let EditPerchPage = class EditPerchPage {
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
        this.purchLocal = [];
        this.purchase = [];
        this.purchLocalUpdate = [];
        this.purchLocalDelete = [];
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
        // Store original item values and index before editing to fix price/quantity edit matching issue
        this.editingItemOriginal = null;
        this.editingItemOriginalIndex = -1;
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
                // Fix: Enrich itemList with store_id when coming from items-report
                // yearId will be set after year is loaded in getAppInfo()
                if (params.screen === "itemReport" && this.itemList && this.itemList.length > 0) {
                    this.itemList = this.itemList.map(item => (Object.assign(Object.assign({}, item), { store_id: item.store_id || +this.store_info.id })));
                }
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
        // Check category visibility setting
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
                if ((this.isUpdating || this.isDeleting) && this.currentLoader) {
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
            this.storage.set('itemsLocal', this.items).then((response) => {
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
    ionViewDidLeave() {
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
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif4.event = e;
        this.isOpenNotif = true;
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
    }
    qtyClick(i) {
        //console.log(i)
        this.showMe = i;
        // Store original values AND find original index in itemList
        const displayList = this.getDisplayItemList();
        this.editingItemOriginal = Object.assign({}, displayList[i]);
        // Find the original index in itemList (not the display list)
        this.editingItemOriginalIndex = this.itemList.findIndex(item => item.item_name === this.editingItemOriginal.item_name &&
            item.perch_price === this.editingItemOriginal.perch_price &&
            item.quantity === this.editingItemOriginal.quantity);
    }
    hideMe(i) {
        this.showMe = null;
        this.editingItemOriginal = null;
        this.editingItemOriginalIndex = -1;
    }
    editCell(i) {
        if (!this.editingItemOriginal || this.editingItemOriginalIndex === -1) {
            // No error toast - this means edit was already completed successfully by a previous call
            return;
        }
        const displayList = this.getDisplayItemList();
        // Validate input values
        if (!displayList[i].quantity || +displayList[i].quantity <= 0 || !displayList[i].perch_price || +displayList[i].perch_price <= 0) {
            this.presentToast("خطأ في الإدخال - الكمية والسعر يجب أن يكونا أكبر من صفر", "danger");
            // Restore original values
            displayList[i].quantity = this.editingItemOriginal.quantity;
            displayList[i].perch_price = this.editingItemOriginal.perch_price;
            displayList[i].tot = this.editingItemOriginal.tot;
            this.hideMe(i);
            return;
        }
        // Use the stored original index directly (no need to search again)
        const originalIndex = this.editingItemOriginalIndex;
        // Update both the display list and original list
        displayList[i].tot = (+displayList[i].quantity * +displayList[i].perch_price).toFixed(2);
        this.itemList[originalIndex].quantity = +displayList[i].quantity;
        this.itemList[originalIndex].perch_price = +displayList[i].perch_price;
        this.itemList[originalIndex].tot = displayList[i].tot;
        // Update sorted list if needed
        if (this.isItemListSorted) {
            this.updateSortedList();
        }
        // Reset discount but preserve pay amount
        this.discountPerc = 0;
        this.payInvo.discount = 0;
        this.hideMe(i);
        this.getTotal();
    }
    getAllStockItemsWithouteCounts() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                //console.log('this.year.id',this.year.id)
                if (this.offline == false) {
                    // this.loadingItems = true
                    this.api.getAllStockItemsWithouteCounts(1, this.year.id).subscribe(data => {
                        //console.log(data)
                        let res = data;
                        this.items = res['data'];
                        this.storage.set('itemsLocal', this.items).then((response) => {
                        });
                    }, (err) => {
                        // this.loadingItems = false
                        //console.log(err);
                    }, () => {
                        // this.loadingItems = false
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
        //console.log( this.payInvo) 
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
                // cssClass: 'custom-class custom-loading',
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            //console.log('Loading dismissed with role:', role);
        });
    }
    // radioChange(ev){
    //   //console.log(ev.target.value) 
    //  }
    pickAccount(ev, firstLoad) {
        let evVal;
        if (firstLoad) {
            evVal = ev;
        }
        else {
            evVal = ev.target.value;
        }
        //console.log('evVal',evVal);
        let fl = this.sub_account.filter(x => x.sub_name == evVal);
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
                currentCustumerStatus: 0
            };
            //console.log('jjjj', this.selectedAccount);
            this.payInvo.cust_id = this.selectedAccount.id;
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
            this.selectedItem.item_name = "";
        }
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
            //console.log( this.selectedItem);
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
                    //console.log(dataReturned )
                    this.doAfterDissmiss(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    qtyhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
    }
    pricehange(ev) {
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
        //console.log('preent me', e)
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
        //console.log('dismissOver')
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
    doAfterDissmiss(data) {
        if (data.role == 'save') {
            //console.log('edit' ,data.data)
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
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.firstq = { id: null, item_id: data['message'], store_id: this.store_info.id, quantity: mdata[1].quantity, pay_price: mdata[0].pay_price, perch_price: mdata[0].perch_price, fq_year: '2022', item_name: mdata[0].item_name };
                this.saveFierstQty(mdata[0].item_name);
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveFierstQty(item_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveFirstQty(this.firstq).subscribe(data => {
                //console.log(data)  
                //this.getItems(item_name) 
                this.performSyncItem(item_name);
                this.presentToast('تم الحفظ بنجاح', 'success');
            }, (err) => {
                //console.log(err);
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
    update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            //console.log('papa',this.payInvo)
            let d = this.payInvo.pay_date;
            this.payInvo.sub_name = this.selectedAccount.sub_name;
            this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
            if (this.payInvo.nextPay != null) {
                this.payInvo.nextPay = this.datePipe.transform(d, 'yyyy-MM-dd');
            }
            if (this.validate() == true) {
                yield this.showLoading('جاري تحديث فاتورة الشراء...', 'updating');
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
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    updateInvo() {
        // Optimized: Update invoice and items together in single API call
        const invoiceWithItems = {
            invoice: this.payInvo,
            items: this.itemList
        };
        this.api.updatePerchInvoWithItems(invoiceWithItems).subscribe((response) => {
            this.hideLoading(); // Hide loading before success handling
            this.handleUpdateSuccess();
        }, (err) => {
            this.handleError(err, 'updateInvo');
        });
    }
    handleUpdateSuccess() {
        // Show success message
        this.presentToast('تم الحفظ بنجاح', 'success');
        // Update local purchase storage
        this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
        this.purchase.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('purchase', this.purchase).then((response) => {
            // Purchase saved to local storage
        });
        let arr = [];
        arr.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        // Perform sync
        this.performSync();
    }
    deleteSalesitemList4update() {
        this.api.deletePerchitemList(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.saveitemList();
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
    saveitemList() {
        this.api.savePerchitemList(this.itemList).subscribe(data => {
            //console.log(data)  
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
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
            // 
            this.performSync();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
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
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            this.deleteSalesInvo();
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
    // Convert purchase invoice to purchase order
    presentConvertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد التحويل!',
                mode: 'ios',
                message: 'هل تريد تحويل هذه الفاتورة إلى طلب شراء؟',
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
                            this.executeConvertToOrder();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    convertToOrder() {
        this.presentConvertConfirm();
    }
    executeConvertToOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري تحويل الفاتورة إلى طلب شراء...', 'converting');
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
            this.api.convertPurchaseInvoiceToOrder(conversionData).subscribe((response) => {
                this.hideLoading();
                if (response.success) {
                    this.presentToast('تم تحويل الفاتورة إلى طلب شراء بنجاح', 'success');
                    // Update local storage
                    this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                    this.storage.set('purchase', this.purchase).then(() => {
                        this.performSyncDel();
                    });
                }
                else {
                    this.presentToast('لم يتم تحويل الفاتورة، خطأ في الاتصال حاول مرة أخرى', 'danger');
                }
            }, (err) => {
                this.handleError(err, 'convertToOrder');
            });
        });
    }
    deleteSalesInvo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.showLoading('جاري حذف فاتورة الشراء...', 'deleting');
            const deletionData = {
                pay_id: this.payInvo.pay_id,
                pay_ref: this.payInvo.pay_ref
            };
            this.api.deletePerchInvoWithItems(deletionData).subscribe(data => {
                this.hideLoading(); // Hide loading before processing response
                if (data['success']) {
                    this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                    this.storage.set('purchase', this.purchase).then((response) => {
                        this.performSyncDel();
                    });
                    this.presentToast('تم حذف البيانات بنجاح', 'success');
                }
                else {
                    this.presentToast('لم يتم حذف البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
                }
            }, (err) => {
                this.handleError(err, 'deleteSalesInvo');
            });
        });
    }
    deleteSalesitemList() {
        this.api.deletePerchitemList(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                //console.log(' case ffff ' ,this.purchase)
                this.storage.set('purchase', this.purchase).then((response) => {
                    //console.log('purchase', response) 
                    this.performSyncDel();
                });
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
            console.log('Account selected in edit-perch:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            // Update the current supplier status based on balance
            this.selectedAccount.sub_balance = balance.current_balance;
            this.selectedAccount.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
            console.log('Account balance loaded in edit-perch:', balance);
        }
    }
    // Load account balance when page initializes with existing invoice data
    loadInitialAccountBalance() {
        if (this.payInvo && this.payInvo.cust_id && this.store_info && this.year) {
            // Get account balance for the supplier in the invoice
            this.api.getAccountBalance(this.payInvo.cust_id, this.store_info.id, this.year.id).subscribe((response) => {
                if (response.success && response.data) {
                    // Update selected account balance
                    this.selectedAccount.sub_balance = response.data.current_balance;
                    this.selectedAccount.currentCustumerStatus = response.data.status === 'debit' ? 0 : 1;
                    // Populate selectedAccount with supplier data
                    this.selectedAccount.id = this.payInvo.cust_id;
                    this.selectedAccount.sub_name = this.payInvo.sub_name;
                    console.log('Initial account balance loaded in edit-perch:', response.data);
                }
            }, (error) => {
                console.error('Error loading initial account balance in edit-perch:', error);
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
EditPerchPage.ctorParameters = () => [
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
EditPerchPage.propDecorators = {
    dstEp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["dstEp",] }],
    qtyIdEp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['qtyIdEp',] }],
    dstPop4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['dstPop4',] }],
    popInput4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popInput4',] }],
    popover4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popover4',] }],
    popoverNotif4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popoverNotif4',] }]
};
EditPerchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-edit-perch',
        template: _edit_perch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_perch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditPerchPage);



/***/ }),

/***/ 92868:
/*!************************************************************!*\
  !*** ./src/app/edit-perch/edit-perch.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\nion-header ion-toolbar ion-title {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 40px;\n  margin: 0 5px;\n  border: none;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item .header-date-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-align: center;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button {\n  --background: rgba(255, 255, 255, 0.2);\n  --background-hover: rgba(255, 255, 255, 0.3);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0 5px;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button ion-label {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\nion-content {\n  --padding-top: 56px;\n  --padding-bottom: 120px;\n}\n.custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n.cust-card {\n  border-radius: 5px;\n}\n.custRow {\n  margin-top: 5rem;\n}\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n.red {\n  color: var(--ion-color-danger);\n}\n.darko {\n  color: var(--ion-color-dark);\n}\nion-popover {\n  --offset-y: -30px ;\n}\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n.bnone {\n  border: none;\n}\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n.table-card-header ion-card-title {\n  margin: 0;\n}\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n.top-card-row {\n  padding: 8px 12px;\n  align-items: flex-start;\n  gap: 12px;\n}\n.top-card-row .account-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.top-card-row .account-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 4px;\n  font-size: 0.95rem;\n  height: 20px;\n  line-height: 24px;\n}\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n.table-container {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n.search-container {\n  width: 100%;\n}\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n.table-container::-webkit-scrollbar {\n  width: 6px;\n}\n.table-container::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n}\n.table-container::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 3px;\n}\n.table-container::-webkit-scrollbar-thumb:hover {\n  background: var(--ion-color-dark);\n}\n/* ======================================\n   CATEGORY SELECTOR STYLES - From statement2\n   ====================================== */\n.category-section {\n  margin-top: 0;\n}\n.category-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n/* Responsive design for mobile */\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n.rtl-input {\n  direction: rtl;\n}\n.rtl-input ion-label.float-right {\n  text-align: right !important;\n  transform-origin: right top !important;\n  right: 0 !important;\n  left: auto !important;\n}\n.rtl-input ion-label.float-right.label-floating {\n  transform: translateY(-14px) scale(0.82) !important;\n  right: 0 !important;\n}\n.rtl-input ion-input.text-right {\n  text-align: right !important;\n  --padding-start: 0;\n  --padding-end: 16px;\n}\n.rtl-input ion-input.text-right input {\n  text-align: right !important;\n  direction: ltr;\n}\n.rtl-input ion-note {\n  direction: ltr;\n}\n.total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n  font-weight: 600;\n}\n.total-after-discount ion-input {\n  --color: #15803d;\n  font-size: 1.1em;\n  text-align: center;\n}\nion-modal {\n  --height: 90%;\n  --border-radius: 16px 16px 0 0;\n}\n.insufficient-stock-modal {\n  --height: 80vh;\n  --width: 90vw;\n  --max-width: 600px;\n  --border-radius: 12px;\n}\n@media (max-width: 768px) {\n  .insufficient-stock-modal {\n    --height: 95vh;\n    --width: 95vw;\n  }\n}\n/* Footer styles */\nion-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-footer ion-toolbar {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-medium);\n}\nion-footer .total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n}\nion-footer .total-after-discount ion-input {\n  --color: #15803d;\n  font-weight: 600;\n}\nion-footer ion-item {\n  --background: white;\n  border-radius: 5px;\n  margin: 4px 0;\n}\nion-footer .footer-input-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  padding: 6px 0;\n}\nion-footer .footer-input-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 3px;\n  text-align: center;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .footer-input-item {\n  width: 100%;\n}\nion-footer .footer-input-item ion-input {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-header {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 20px;\n}\nion-footer .discount-type-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 0;\n  margin-inline-end: 6px;\n  white-space: nowrap;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .discount-segment-container {\n  --background: transparent;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  flex: 1;\n  max-width: 140px;\n}\nion-footer .compact-discount-segment {\n  --background: var(--ion-color-light);\n  border-radius: 14px;\n  padding: 1px;\n  width: 100%;\n  min-height: 24px;\n}\nion-footer .compact-discount-segment .compact-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  --indicator-color: transparent;\n  --border-radius: 12px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  min-height: 22px;\n  font-size: 10px;\n}\nion-footer .compact-discount-segment .compact-segment-button ion-label {\n  font-weight: 500;\n  margin: 0;\n}\nion-footer .discount-input {\n  margin-top: 3px;\n  width: 100%;\n}\nion-footer .discount-input ion-input {\n  text-align: center;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-input .discount-note {\n  font-size: 11px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-footer .discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n/* Responsive footer for mobile */\n@media (max-width: 768px) {\n  ion-footer ion-grid {\n    padding: 0;\n  }\n  ion-footer ion-col {\n    padding: 0 3px;\n  }\n  ion-footer .footer-input-container {\n    padding: 4px 0;\n  }\n  ion-footer .footer-input-label,\nion-footer .discount-type-label {\n    font-size: 9px;\n    height: 12px;\n    margin-bottom: 2px;\n  }\n  ion-footer .discount-header {\n    margin-bottom: 2px;\n    height: 22px;\n  }\n  ion-footer .footer-input-item ion-input,\nion-footer .discount-input ion-input {\n    font-size: 11px;\n    --padding-top: 5px;\n    --padding-bottom: 5px;\n  }\n  ion-footer .discount-segment-container {\n    max-width: 110px;\n  }\n  ion-footer .compact-discount-segment {\n    min-height: 20px;\n    border-radius: 12px;\n    padding: 1px;\n  }\n  ion-footer .compact-discount-segment .compact-segment-button {\n    min-height: 18px;\n    font-size: 8px;\n    --border-radius: 10px;\n    --padding-start: 3px;\n    --padding-end: 3px;\n  }\n  ion-footer ion-button {\n    --padding-start: 0;\n    --padding-end: 0;\n    font-size: 10px;\n    height: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcGVyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUdNO0VBQ0Usc0NBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRFI7QUFHUTtFQUNFLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURWO0FBS007RUFDRSxzQ0FBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhSO0FBS1E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBSFY7QUFXQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFSRjtBQVdBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBUko7QUFVSTtFQUNJLGtCQUFBO0FBUFI7QUFVSTtFQUNJLGdCQUFBO0FBUFI7QUFTUTtFQUNFLHlCQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQU5aO0FBU1E7RUFDRSw4QkFBQTtBQU5WO0FBUVM7RUFDQyw0QkFBQTtBQUxWO0FBT1E7RUFDRSxrQkFBQTtBQUpWO0FBTUU7RUFDSyxrQkFBQTtFQUNILFdBQUE7RUFDQSxZQUFBO0FBSEo7QUFLRTtFQUNFLFlBQUE7QUFGSjtBQUlFO0VBQ0UseUJBQUE7QUFESjtBQUdFO0VBQVEseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsWUFBQTtBQU12RztBQUhFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQU1KO0FBSEE7RUFDRSxpREFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFNRjtBQUpFO0VBQ0UsU0FBQTtBQU1KO0FBSkk7RUFDRSxtQkFBQTtBQU1OO0FBSk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFNUjtBQUpRO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQU1WO0FBRk07RUFDRSx5QkFBQTtBQUlSO0FBRlE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtBQUlWO0FBRlU7RUFDRSxnQkFBQTtBQUlaO0FBS0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUZGO0FBSUU7Ozs7RUFJRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUZKO0FBSUk7Ozs7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUtJO0VBQ0UsYUFBQTtBQUhOO0FBUUk7RUFDRSxnQkFBQTtBQU5OO0FBUU07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5SO0FBWUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVZOO0FBWU07RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBVlI7QUFnQkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWROO0FBZ0JNO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQWRSO0FBcUJBO0VBQ0U7SUFDRSxzQkFBQTtFQWxCRjtFQW9CRTs7SUFFRSxRQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBbEJKO0VBb0JJOztJQUNFLGdCQUFBO0VBakJOO0FBQ0Y7QUF1QkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FBckJGO0FBd0JBO0VBQ0UsV0FBQTtBQXJCRjtBQXVCRTtFQUNFLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXJCSjtBQXVCSTtFQUNFLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7QUFyQk47QUF3Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBdEJOO0FBd0JNO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF0QlI7QUF5Qk07RUFDRSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBdkJSO0FBeUJRO0VBQ0UsZUFBQTtBQXZCVjtBQStCQTtFQUNFLG9EQUFBO0FBNUJGO0FBK0JBO0VBQ0UsbURBQUE7RUFDQSwwQ0FBQTtBQTVCRjtBQWdDQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTdCRjtBQWlDQTtFQUNFLFVBQUE7QUE5QkY7QUFpQ0E7RUFDRSxrQ0FBQTtBQTlCRjtBQWlDQTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7QUE5QkY7QUFpQ0E7RUFDRSxpQ0FBQTtBQTlCRjtBQWlDQTs7MkNBQUE7QUFJQTtFQUNFLGFBQUE7QUEvQkY7QUFpQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQS9CSjtBQW1DQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBaENGO0FBa0NFO0VBQ0UseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQWhDSjtBQWtDSTtFQUNFLDhDQUFBO0VBQ0EsMkJBQUE7QUFoQ047QUFtQ0k7RUFDRSxtQ0FBQTtBQWpDTjtBQW9DSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWxDTjtBQXVDQSxpQ0FBQTtBQUNBO0VBR007SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUF0Q047O0VBNENFO0lBQ0UsZUFBQTtFQXpDSjtBQUNGO0FBOENBO0VBQ0UsY0FBQTtBQTVDRjtBQThDRTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBNUNKO0FBOENJO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtBQTVDTjtBQWdERTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTlDSjtBQWdESTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQTlDTjtBQWtERTtFQUNFLGNBQUE7QUFoREo7QUFxREE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFsREY7QUFvREU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFsREo7QUF1REE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFwREY7QUF3REE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFyREY7QUF1REU7RUFORjtJQU9JLGNBQUE7SUFDQSxhQUFBO0VBcERGO0FBQ0Y7QUF1REEsa0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBcERGO0FBc0RFO0VBQ0Usb0NBQUE7RUFDQSx1Q0FBQTtBQXBESjtBQXVERTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFyREo7QUF1REk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBckROO0FBeURFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUF2REo7QUEwREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUF4REo7QUEyREU7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6REo7QUE0REU7RUFDRSxXQUFBO0FBMURKO0FBNERJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBMUROO0FBOERFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUVBLFlBQUE7QUE5REo7QUFpRUU7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQS9ESjtBQWtFRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBaEVKO0FBbUVFO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFqRUo7QUFtRUk7RUFDRSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWpFTjtBQW1FTTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQWpFUjtBQXNFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBcEVKO0FBc0VJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQXBFTjtBQXVFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBckVOO0FBMEVJO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtBQXhFTjtBQTRFRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUExRUo7QUE0RUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBMUVOO0FBNEVNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQTFFUjtBQTRFUTtFQUNFLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlDQUFBO0FBMUVWO0FBNkVRO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBM0VWO0FBa0ZBLGlDQUFBO0FBQ0E7RUFFSTtJQUNFLFVBQUE7RUFoRko7RUFtRkU7SUFDRSxjQUFBO0VBakZKO0VBb0ZFO0lBQ0UsY0FBQTtFQWxGSjtFQXFGRTs7SUFFRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBbkZKO0VBc0ZFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBcEZKO0VBeUZJOztJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0VBdEZOO0VBMEZFO0lBQ0UsZ0JBQUE7RUF4Rko7RUEyRkU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQXpGSjtFQTJGSTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQXpGTjtFQTZGRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQTNGSjtBQUNGIiwiZmlsZSI6ImVkaXQtcGVyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTsgLy8gSGlnaCBlbm91Z2ggdG8gc3RheSBhYm92ZSBjb250ZW50IGJ1dCBiZWxvdyBzeXN0ZW0gbW9kYWxzICh1c3VhbGx5IDEwMDArKVxyXG4gIFxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tYnV0dG9uc1tzbG90PVwiZW5kXCJdIHtcclxuICAgICAgLmhlYWRlci1kYXRlLWl0ZW0ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmhlYWRlci1kYXRlLWlucHV0IHtcclxuICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkanVzdCBjb250ZW50IHBhZGRpbmcgZm9yIGZpeGVkIGhlYWRlciBhbmQgZm9vdGVyXHJcbmlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctdG9wOiA1NnB4OyAvLyBBcHByb3hpbWF0ZSBoZWlnaHQgb2YgaW9uLWhlYWRlclxyXG4gIC0tcGFkZGluZy1ib3R0b206IDEyMHB4OyAvLyBBcHByb3hpbWF0ZSBoZWlnaHQgb2YgZm9vdGVyIChhZGp1c3QgYmFzZWQgb24gYWN0dWFsIGZvb3RlciBoZWlnaHQpXHJcbn1cclxuXHJcbi5jdXN0SW5wdXR7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmN1c3QtY2FyZHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RSb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1c3RJbnB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDAuNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVke1xyXG4gICAgICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlcikgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmRhcmtve1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgaW9uLXBvcG92ZXJ7XHJcbiAgICAgICAgICAtLW9mZnNldC15IDogLTMwcHhcclxuICAgICAgICB9XHJcbiAgLnRhYmxle1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbiAgfVxyXG4gIC5ibm9uZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9IFxyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gIH1cclxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XHJcbiAgXHJcbiAgLy8gUmlnaHQgYWxpZ24gaXRlbSBuYW1lIGNvbHVtblxyXG4gIHRkOm50aC1jaGlsZCgyKSwgdGg6bnRoLWNoaWxkKDIpIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICB9XHJcblxyXG4udGFibGUtY2FyZC1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgXHJcbiAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1jb2xbc2l6ZT1cImF1dG9cIl0ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIC0tY29sb3ItaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRvcCBDYXJkIE9yZ2FuaXphdGlvbiBTdHlsaW5nIC0gTXVsdGkgQ29sdW1uIExheW91dFxyXG4udG9wLWNhcmQtcm93IHtcclxuICBwYWRkaW5nOiA4cHggMTJweDsgLy8gUmVkdWNlZCBmcm9tIDE2cHggZm9yIG1vcmUgY29tcGFjdCBsYXlvdXRcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDEycHg7IC8vIFJlZHVjZWQgZ2FwIGZvciBtb3JlIGNvbXBhY3QgbGF5b3V0XHJcbiAgXHJcbiAgLmFjY291bnQtY29sdW1uLFxyXG4gIC5jYXRlZ29yeS1jb2x1bW4sXHJcbiAgLmRhdGUtY29tbWVudC1jb2x1bW4sXHJcbiAgLmRhdGUtY29sdW1uIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgLmNvbHVtbi1sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7IC8vIEZ1cnRoZXIgcmVkdWNlZCBtYXJnaW4gZm9yIGNvbXBhY3QgbGF5b3V0XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgaGVpZ2h0OiAyMHB4OyAvLyBSZWR1Y2VkIGhlaWdodCBmb3IgbW9yZSBjb21wYWN0IGRlc2lnblxyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDsgLy8gQWRqdXN0ZWQgbGluZSBoZWlnaHRcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQWxpZ24gYWxsIGZvcm0gY29udGVudCBhdCB0aGUgc2FtZSBsZXZlbFxyXG4gIC5hY2NvdW50LWNvbHVtbiB7XHJcbiAgICBhcHAtYWNjb3VudC1zZWxlY3RvciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXRlZ29yeS1jb2x1bW4ge1xyXG4gICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBcclxuICAgICAgLmNvbXBhY3Qtc2VnbWVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7IC8vIEluY3JlYXNlZCBoZWlnaHQgZm9yIGJldHRlciBhbGlnbm1lbnRcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xyXG4gICAgLmNvbW1lbnQtaW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIGhlaWdodDogNDhweDsgLy8gTWF0Y2ggb3RoZXIgaW5wdXRzXHJcbiAgICAgIFxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGF0ZS1jb2x1bW4ge1xyXG4gICAgLmRhdGUtaW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIGhlaWdodDogNDhweDsgLy8gTWF0Y2ggb3RoZXIgaW5wdXRzXHJcbiAgICAgIFxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudG9wLWNhcmQtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgIC5hY2NvdW50LWNvbHVtbixcclxuICAgIC5kYXRlLWNvbW1lbnQtY29sdW1uIHtcclxuICAgICAgc2l6ZTogMTI7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUYWJsZSBjb250YWluZXIgYW5kIHNlYXJjaCBzdHlsZXNcclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxuICAuc2VhcmNoLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgXHJcbiAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLW5hdmlnYXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDRweDtcclxuICAgICAgXHJcbiAgICAgIC5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRhYmxlIHJvdyBoaWdobGlnaHRpbmdcclxudHIuc2VhcmNoLW1hdGNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC4yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ci5zZWFyY2gtaGlnaGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG59XHJcblxyXG4vLyBIaWdobGlnaHQgdGV4dFxyXG5tYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDAgMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLy8gU2Nyb2xsYmFyIHN0eWxpbmcgZm9yIHdlYmtpdCBicm93c2Vyc1xyXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIENBVEVHT1JZIFNFTEVDVE9SIFNUWUxFUyAtIEZyb20gc3RhdGVtZW50MlxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgXHJcbiAgLmZpZWxkLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29tcGFjdC1zZWdtZW50IHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4zKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXI6bm90KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgZGVzaWduIGZvciBtb2JpbGUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbXBhY3Qtc2VnbWVudCB7XHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2F0ZWdvcnktc2VjdGlvbiB7XHJcbiAgICAuZmllbGQtbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSVEwgSW5wdXQgc3R5bGluZyBmb3IgQXJhYmljIGxhYmVsc1xyXG4ucnRsLWlucHV0IHtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICBcclxuICBpb24tbGFiZWwuZmxvYXQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgJi5sYWJlbC1mbG9hdGluZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTRweCkgc2NhbGUoMC44MikgIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWlucHV0LnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICBcclxuICAgIGlucHV0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgZGlyZWN0aW9uOiBsdHI7IC8vIEtlZXAgbnVtYmVycyBMVFIgZm9yIGJldHRlciByZWFkYWJpbGl0eVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tbm90ZSB7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBzdHlsZXMgZm9yIHRoZSB0b3RhbCBhZnRlciBkaXNjb3VudCBmaWVsZCBhbmQgcHJvZ3Jlc3Mgc3RlcHBlclxyXG4udG90YWwtYWZ0ZXItZGlzY291bnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2YwZmRmNDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMTZhMzRhO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIC0tY29sb3I6ICMxNTgwM2Q7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTW9kYWwgc3R5bGluZ1xyXG5pb24tbW9kYWwge1xyXG4gIC0taGVpZ2h0OiA5MCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xyXG59XHJcblxyXG4vLyBJbnN1ZmZpY2llbnQgU3RvY2sgTW9kYWwgU3R5bGluZ1xyXG4uaW5zdWZmaWNpZW50LXN0b2NrLW1vZGFsIHtcclxuICAtLWhlaWdodDogODB2aDtcclxuICAtLXdpZHRoOiA5MHZ3O1xyXG4gIC0tbWF4LXdpZHRoOiA2MDBweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAtLWhlaWdodDogOTV2aDtcclxuICAgIC0td2lkdGg6IDk1dnc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGb290ZXIgc3R5bGVzICovXHJcbmlvbi1mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA5OTk7IC8vIEhpZ2ggZW5vdWdoIHRvIHN0YXkgYWJvdmUgY29udGVudCBidXQgYmVsb3cgc3lzdGVtIG1vZGFsc1xyXG4gIFxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICB9XHJcbiAgXHJcbiAgLnRvdGFsLWFmdGVyLWRpc2NvdW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2YwZmRmNDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxNmEzNGE7XHJcbiAgICBcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIC0tY29sb3I6ICMxNTgwM2Q7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA2cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1pbnB1dC1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItaW5wdXQtaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIC0tcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGlzY291bnQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGlzY291bnQtdHlwZS1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNjb3VudC1zZWdtZW50LWNvbnRhaW5lciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWF4LXdpZHRoOiAxNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbXBhY3QtZGlzY291bnQtc2VnbWVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xyXG4gICAgXHJcbiAgICAuY29tcGFjdC1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcclxuICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRpc2NvdW50LWlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXNjb3VudC1ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRpc2NvdW50LXNlY3Rpb24ge1xyXG4gICAgaW9uLW5vdGUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgXHJcbiAgICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAyNHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgIC5yYWRpby1vcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBcclxuICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBmb290ZXIgZm9yIG1vYmlsZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBpb24tZm9vdGVyIHtcclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9vdGVyLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9vdGVyLWlucHV0LWxhYmVsLFxyXG4gICAgLmRpc2NvdW50LXR5cGUtbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXNjb3VudC1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvb3Rlci1pbnB1dC1pdGVtLFxyXG4gICAgLmRpc2NvdW50LWlucHV0IHtcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGlzY291bnQtc2VnbWVudC1jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29tcGFjdC1kaXNjb3VudC1zZWdtZW50IHtcclxuICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICBcclxuICAgICAgLmNvbXBhY3Qtc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogM3B4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 10363:
/*!************************************************************!*\
  !*** ./src/app/edit-perch/edit-perch.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"back()\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>تعديل فاتورة مشتريات</ion-title>\r\n    <!-- Date in header -->\r\n    <ion-buttons slot=\"end\">\r\n      <app-currency-switcher></app-currency-switcher>\r\n      <ion-item class=\"header-date-item\">\r\n        <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" class=\"header-date-input\"></ion-input>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content> \r\n    <ion-card class=\"ion-no-padding ion-no-margin\"> \r\n      <ion-grid *ngIf=\"payInvo\">\r\n        <ion-row dir=\"rtl\" class=\"top-card-row\">\r\n          <!-- First Column: Account Selector -->\r\n          <ion-col size=\"4\" offset=\"3\" class=\"account-column\">\r\n            <app-account-selector\r\n              accountType=\"supplier\"\r\n              placeholder=\"اختر حساب المورد\"\r\n              label=\"حساب المورد\"\r\n              [store_info]=\"store_info\"\r\n              [year]=\"year\"\r\n              [showAddButton]=\"true\"\r\n              [(ngModel)]=\"selectedAccount\"\r\n              (accountSelected)=\"onAccountSelected($event)\"\r\n              (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\r\n            </app-account-selector>\r\n          </ion-col>\r\n          \r\n          <!-- Comment Column: Note field in same row -->\r\n          <ion-col size=\"4\" class=\"date-comment-column\">\r\n            <ion-label class=\"column-label\">ملاحظة</ion-label>\r\n            <ion-item class=\"custInput comment-input\"> \r\n              <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\" [disabled]=\"isLoading()\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n    <ion-grid  *ngIf=\"payInvo\" >\r\n      <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\r\n        <ion-col size=\"11\" class=\"ion-no-padding\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-card>\r\n              <app-item-selector\r\n                [items]=\"items\"\r\n                [loadingItems]=\"loadingItems\"\r\n                [searchLang]=\"searchLang\"\r\n                [store_info]=\"store_info\"\r\n                [year]=\"year\"\r\n                parentPage=\"edit-perch\"\r\n                [enablePriceUpdateConfirmation]=\"true\"\r\n                [payRef]=\"payInvo.pay_ref\"\r\n                [showQuantityInput]=\"true\"\r\n                [showPriceInput]=\"false\"\r\n                [showPerchPriceInput]=\"true\"\r\n                placeholder=\"اختر الصنف\"\r\n                (itemSelected)=\"onItemSelected($event)\"\r\n                (itemAdded)=\"onItemAdded($event)\"\r\n                (refreshItems)=\"refresh('item')\">\r\n              </app-item-selector>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\" class=\"table-card-header\">\r\n                <ion-card-title>\r\n                  <ion-row class=\"ion-align-items-center\">\r\n                    <ion-col size=\"3\">\r\n                      <span>قائمة الأصناف</span>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\" class=\"ion-text-center\">\r\n                      <div class=\"search-container\">\r\n                        <ion-item lines=\"none\" class=\"search-item\">\r\n                          <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\r\n                          <ion-input\r\n                            [(ngModel)]=\"searchTerm\"\r\n                            (ionInput)=\"onSearchTermChange()\"\r\n                            placeholder=\"البحث في الأصناف...\"\r\n                            clearInput=\"true\"\r\n                            class=\"search-input\">\r\n                          </ion-input>\r\n                          <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\r\n                            <span class=\"search-results\">{{ getSearchResultText() }}</span>\r\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\r\n                              <ion-icon name=\"chevron-up\"></ion-icon>\r\n                            </ion-button>\r\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\r\n                              <ion-icon name=\"chevron-down\"></ion-icon>\r\n                            </ion-button>\r\n                          </div>\r\n                        </ion-item>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\" class=\"ion-text-end\">\r\n                      <ion-button \r\n                        fill=\"clear\" \r\n                        color=\"light\" \r\n                        size=\"small\"\r\n                        (click)=\"sortItemListAlphabetically()\"\r\n                        [disabled]=\"!itemList || itemList.length === 0\"\r\n                      >\r\n                        <ion-icon name=\"list\" slot=\"start\"></ion-icon>\r\n                        {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\r\n                      </ion-button>\r\n                      <ion-button \r\n                        fill=\"clear\" \r\n                        color=\"light\" \r\n                        size=\"small\"\r\n                        (click)=\"openPriceAdjustmentDialog()\"\r\n                        [disabled]=\"!itemList || itemList.length === 0\"\r\n                      >\r\n                        <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\r\n                        تعديل الأسعار\r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <div class=\"table-container\">\r\n               <table class=\"table\">\r\n                 <tr>\r\n                  <th>no</th>\r\n                  <th>الصنف</th>\r\n                  <th>الكمية</th>\r\n                  <th>سعر الشراء ({{ getCurrencySymbol() }})</th>\r\n                  <th>المجموع ({{ getCurrencySymbol() }})</th> \r\n                  <th></th> \r\n                 </tr>\r\n                 <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\" \r\n                     (dblclick)=\"qtyClick(i)\"\r\n                     [attr.data-index]=\"i\"\r\n                     [class.search-highlight]=\"isHighlighted(i)\"\r\n                     [class.search-match]=\"isSearchMatch(i)\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>\r\n                    <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\r\n                  </td>\r\n                  <td >\r\n                    <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \r\n                    <ion-item *ngIf=\"showMe == i\">\r\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\r\n                    </ion-item>\r\n                 </td>\r\n                 <td>\r\n                   <ion-text *ngIf=\"showMe != i\">{{item.perch_price | currencyDisplay:'SDG':false}}</ion-text> \r\n                    <ion-item *ngIf=\"showMe == i\">\r\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.perch_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\r\n                    </ion-item>\r\n                 </td>\r\n                  <td>{{item.tot | currencyDisplay:'SDG':false}}</td>\r\n                  <td>\r\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\r\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\r\n                    </ion-button>\r\n                  </td>\r\n                 </tr> \r\n               </table>\r\n              </div> \r\n            </ion-card>\r\n          </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-col> \r\n    </ion-row> \r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n<!-- Footer with totals and action buttons -->\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <!-- Discount controls on the right side -->\r\n        <ion-col size=\"8\" class=\"ion-text-end\">\r\n          <ion-grid class=\"ion-no-padding\">\r\n            <ion-row class=\"ion-justify-content-end\">\r\n              <ion-col class=\"footer-input-container\">\r\n                <ion-label class=\"footer-input-label\">إجمالي المبلغ</ion-label>\r\n                <ion-item class=\"custInput footer-input-item\">\r\n                  <ion-input [value]=\"payInvo.tot_pr | currencyDisplay\" [readonly]=\"true\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col class=\"footer-input-container\">\r\n                <div class=\"discount-header\"> \r\n                  <div dir=\"rtl\" class=\"discount-segment-container\"> \r\n                    <ion-segment [(ngModel)]=\"discountType\" (ionChange)=\"onDiscountTypeChange($event)\" class=\"compact-discount-segment\" [disabled]=\"isLoading()\">\r\n                      <ion-segment-button value=\"percentage\" class=\"compact-segment-button\">\r\n                        <ion-label>نسبة الخصم%</ion-label>\r\n                      </ion-segment-button>\r\n                      <ion-segment-button value=\"amount\" class=\"compact-segment-button\">\r\n                        <ion-label>مبلغ الخصم</ion-label>\r\n                      </ion-segment-button>\r\n                    </ion-segment>\r\n                  </div>\r\n                </div>\r\n                <!-- Percentage Discount Input -->\r\n                <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input custInput discount-input\">\r\n                  <ion-input \r\n                    type=\"number\" \r\n                    [(ngModel)]=\"discountPerc\" \r\n                    (ionInput)=\"onPercentageDiscountChange($event)\"\r\n                    placeholder=\"نسبة الخصم %\"\r\n                    [disabled]=\"isLoading()\">\r\n                  </ion-input>\r\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\" class=\"discount-note\">\r\n                    {{ calculatedDiscountAmount | currencyDisplay }} \r\n                  </ion-note>\r\n                </ion-item>\r\n\r\n                <!-- Amount Discount Input -->\r\n                <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input custInput discount-input\">\r\n                  <ion-input \r\n                    type=\"number\" \r\n                    [(ngModel)]=\"discountAmount\" \r\n                    (ionInput)=\"onAmountDiscountChange($event)\"\r\n                     placeholder=\"مبلغ الخصم\"\r\n                     [disabled]=\"isLoading()\">\r\n                  </ion-input>\r\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\" class=\"discount-note\">\r\n                    {{ calculatedDiscountPerc.toFixed(2) }}%\r\n                  </ion-note>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col class=\"footer-input-container\">\r\n                <ion-label class=\"footer-input-label\">المجموع بعد الخصم</ion-label>\r\n                <ion-item class=\"custInput total-after-discount footer-input-item\">\r\n                  <ion-input [value]=\"(+payInvo.tot_pr - +payInvo.discount) | currencyDisplay\" [readonly]=\"true\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n        \r\n        <!-- Action buttons on the left side -->\r\n        <ion-col size=\"4\">\r\n          <ion-grid>\r\n            <ion-row class=\"ion-justify-content-end\">\r\n              <ion-col size=\"4\">\r\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\" (click)=\"update()\" [disabled]=\"isLoading()\">\r\n                  <ion-spinner *ngIf=\"isUpdating\" slot=\"start\" name=\"dots\"></ion-spinner>\r\n                  <ion-label class=\"ion-text-center\">{{ isUpdating ? currentLoadingMessage : 'حفظ' }}</ion-label>\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"warning\" (click)=\"convertToOrder()\" [disabled]=\"isLoading()\">\r\n                  <ion-spinner *ngIf=\"isConverting\" slot=\"start\" name=\"dots\"></ion-spinner>\r\n                  <ion-label class=\"ion-text-center\">{{ isConverting ? 'جاري التحويل...' : 'تحويل لطلب' }}</ion-label>\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\" (click)=\"delete()\" [disabled]=\"isLoading()\">\r\n                  <ion-spinner *ngIf=\"isDeleting\" slot=\"start\" name=\"dots\"></ion-spinner>\r\n                  <ion-label class=\"ion-text-center\">{{ isDeleting ? currentLoadingMessage : 'حذف' }}</ion-label>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-perch_edit-perch_module_ts.js.map
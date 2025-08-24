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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_perch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-perch.page.html?ngResource */ 10363);
/* harmony import */ var _edit_perch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-perch.page.scss?ngResource */ 92868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-modal/item-modal.page */ 3671);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/price-adjustment-dialog/price-adjustment-dialog.component */ 91872);














let EditPerchPage = class EditPerchPage {
    constructor(behavApi, _location, alertController, route, rout, storage, modalController, loadingController, datePipe, api, toast) {
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
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.route.queryParams.subscribe(params => {
            if (params && params.payInvo) {
                this.payInvo = JSON.parse(params.payInvo);
                this.selectedAccount.sub_name = JSON.parse(params.sub_name);
                this.user_info = JSON.parse(params.user_info);
                this.store_info = JSON.parse(params.store_info);
                this.itemList = JSON.parse(params.itemList);
                this.resortItemList();
                this.initializeDiscountValues();
                this.getAppInfo();
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
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                parcode: item.parcode || 0
            }));
            const modal = yield this.modalController.create({
                component: _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_8__.PriceAdjustmentDialogComponent,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        //console.log('papa',this.payInvo)
        let d = this.payInvo.pay_date;
        this.payInvo.sub_name = this.selectedAccount.sub_name;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        if (this.payInvo.nextPay != null) {
            this.payInvo.nextPay = this.datePipe.transform(d, 'yyyy-MM-dd');
        }
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            this.updateInvo();
        }
    }
    performSyncItem(item_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
            this.handleUpdateSuccess();
        }, (err) => {
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
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
        // Dismiss loading
        this.loadingController.dismiss();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.back();
        });
    }
    performSyncDel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.back();
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
    deleteSalesInvo() {
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        const deletionData = {
            pay_id: this.payInvo.pay_id,
            pay_ref: this.payInvo.pay_ref
        };
        this.api.deletePerchInvoWithItems(deletionData).subscribe(data => {
            //console.log(data)
            if (data['success']) {
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
};
EditPerchPage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_6__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController }
];
EditPerchPage.propDecorators = {
    dstEp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ["dstEp",] }],
    qtyIdEp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['qtyIdEp',] }],
    dstPop4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['dstPop4',] }],
    popInput4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popInput4',] }],
    popover4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popover4',] }],
    popoverNotif4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popoverNotif4',] }]
};
EditPerchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
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

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\n.bnone {\n  border: none;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n\n.table-card-header ion-card-title {\n  margin: 0;\n}\n\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n\n.top-card-row {\n  padding: 16px;\n  align-items: flex-start;\n  gap: 16px;\n}\n\n.top-card-row .account-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-card-row .account-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n  font-size: 0.95rem;\n  height: 22px;\n  line-height: 30px;\n}\n\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.table-container {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n\n.search-container {\n  width: 100%;\n}\n\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\n\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\n\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\n\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n\n.table-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.table-container::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n}\n\n.table-container::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 3px;\n}\n\n.table-container::-webkit-scrollbar-thumb:hover {\n  background: var(--ion-color-dark);\n}\n\n/* ======================================\n   CATEGORY SELECTOR STYLES - From statement2\n   ====================================== */\n\n.category-section {\n  margin-top: 0;\n}\n\n.category-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n\n/* Responsive design for mobile */\n\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcGVyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtBQUVSOztBQUNJO0VBQ0ksZ0JBQUE7QUFFUjs7QUFBUTtFQUNFLHlCQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUdaOztBQUFRO0VBQ0UsOEJBQUE7QUFHVjs7QUFEUztFQUNDLDRCQUFBO0FBSVY7O0FBRlE7RUFDRSxrQkFBQTtBQUtWOztBQUhFO0VBQ0ssa0JBQUE7RUFDSCxXQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpFO0VBQ0UsWUFBQTtBQU9KOztBQUxFO0VBQ0UseUJBQUE7QUFRSjs7QUFORTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFldkc7O0FBWkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBZUo7O0FBWkE7RUFDRSxpREFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFlRjs7QUFiRTtFQUNFLFNBQUE7QUFlSjs7QUFiSTtFQUNFLG1CQUFBO0FBZU47O0FBYk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFlUjs7QUFiUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFlVjs7QUFYTTtFQUNFLHlCQUFBO0FBYVI7O0FBWFE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtBQWFWOztBQVhVO0VBQ0UsZ0JBQUE7QUFhWjs7QUFKQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFPRjs7QUFMRTs7OztFQUlFLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBT0o7O0FBTEk7Ozs7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFVTjs7QUFKSTtFQUNFLGFBQUE7QUFNTjs7QUFESTtFQUNFLGdCQUFBO0FBR047O0FBRE07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUdSOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFETjs7QUFHTTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFEUjs7QUFPSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTE47O0FBT007RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBTFI7O0FBWUE7RUFDRTtJQUNFLHNCQUFBO0VBVEY7RUFXRTs7SUFFRSxRQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBVEo7RUFXSTs7SUFDRSxnQkFBQTtFQVJOO0FBQ0Y7O0FBY0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FBWkY7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBY0U7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFaSjs7QUFjSTtFQUNFLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7QUFaTjs7QUFlSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFiTjs7QUFlTTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYlI7O0FBZ0JNO0VBQ0UsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWRSOztBQWdCUTtFQUNFLGVBQUE7QUFkVjs7QUFzQkE7RUFDRSxvREFBQTtBQW5CRjs7QUFzQkE7RUFDRSxtREFBQTtFQUNBLDBDQUFBO0FBbkJGOztBQXVCQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxVQUFBO0FBckJGOztBQXdCQTtFQUNFLGtDQUFBO0FBckJGOztBQXdCQTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsaUNBQUE7QUFyQkY7O0FBd0JBOzsyQ0FBQTs7QUFJQTtFQUNFLGFBQUE7QUF0QkY7O0FBd0JFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUF0Qko7O0FBMEJBO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUF2QkY7O0FBeUJFO0VBQ0UseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQXZCSjs7QUF5Qkk7RUFDRSw4Q0FBQTtFQUNBLDJCQUFBO0FBdkJOOztBQTBCSTtFQUNFLG1DQUFBO0FBeEJOOztBQTJCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXpCTjs7QUE4QkEsaUNBQUE7O0FBQ0E7RUFHTTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQTdCTjs7RUFtQ0U7SUFDRSxlQUFBO0VBaENKO0FBQ0YiLCJmaWxlIjoiZWRpdC1wZXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLmN1c3QtY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5jdXN0Um93e1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jdXN0SW5we1xuICAgICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDAuNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlZHtcbiAgICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSBcbiAgICAgICAgIH1cbiAgICAgICAgIC5kYXJrb3tcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspXG4gICAgICAgICB9XG4gICAgICAgIGlvbi1wb3BvdmVye1xuICAgICAgICAgIC0tb2Zmc2V0LXkgOiAtMzBweFxuICAgICAgICB9XG4gIC50YWJsZXtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMnB4O1xuICB9XG4gIC5ibm9uZXtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH0gXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgfVxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XG4gIFxuICAvLyBSaWdodCBhbGlnbiBpdGVtIG5hbWUgY29sdW1uXG4gIHRkOm50aC1jaGlsZCgyKSwgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9XG5cbi50YWJsZS1jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgaW9uLXJvdyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWNvbFtzaXplPVwiYXV0b1wiXSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIFxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAtLWNvbG9yLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb3AgQ2FyZCBPcmdhbml6YXRpb24gU3R5bGluZyAtIE11bHRpIENvbHVtbiBMYXlvdXRcbi50b3AtY2FyZC1yb3cge1xuICBwYWRkaW5nOiAxNnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxNnB4OyAvLyBSZXBsYWNlIG9mZnNldCB3aXRoIGdhcFxuICBcbiAgLmFjY291bnQtY29sdW1uLFxuICAuY2F0ZWdvcnktY29sdW1uLFxuICAuZGF0ZS1jb21tZW50LWNvbHVtbixcbiAgLmRhdGUtY29sdW1uIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmNvbHVtbi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4OyAvLyBSZWR1Y2VkIG1hcmdpblxuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgaGVpZ2h0OiAyMnB4OyAvLyBGaXhlZCBoZWlnaHQgZm9yIGNvbnNpc3RlbnQgYWxpZ25tZW50XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEFsaWduIGFsbCBmb3JtIGNvbnRlbnQgYXQgdGhlIHNhbWUgbGV2ZWxcbiAgLmFjY291bnQtY29sdW1uIHtcbiAgICBhcHAtYWNjb3VudC1zZWxlY3RvciB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LWNvbHVtbiB7XG4gICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIFxuICAgICAgLmNvbXBhY3Qtc2VnbWVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGhlaWdodDogNjBweDsgLy8gSW5jcmVhc2VkIGhlaWdodCBmb3IgYmV0dGVyIGFsaWdubWVudFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xuICAgIC5jb21tZW50LWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICBoZWlnaHQ6IDQ4cHg7IC8vIE1hdGNoIG90aGVyIGlucHV0c1xuICAgICAgXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmRhdGUtY29sdW1uIHtcbiAgICAuZGF0ZS1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgaGVpZ2h0OiA0OHB4OyAvLyBNYXRjaCBvdGhlciBpbnB1dHNcbiAgICAgIFxuICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b3AtY2FyZC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmFjY291bnQtY29sdW1uLFxuICAgIC5kYXRlLWNvbW1lbnQtY29sdW1uIHtcbiAgICAgIHNpemU6IDEyO1xuICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUYWJsZSBjb250YWluZXIgYW5kIHNlYXJjaCBzdHlsZXNcbi50YWJsZS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICAuc2VhcmNoLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgXG4gICAgLnNlYXJjaC1uYXZpZ2F0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBcbiAgICAgIC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFRhYmxlIHJvdyBoaWdobGlnaHRpbmdcbnRyLnNlYXJjaC1tYXRjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjIpICFpbXBvcnRhbnQ7XG59XG5cbnRyLnNlYXJjaC1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjQpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cblxuLy8gSGlnaGxpZ2h0IHRleHRcbm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLy8gU2Nyb2xsYmFyIHN0eWxpbmcgZm9yIHdlYmtpdCBicm93c2Vyc1xuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDQVRFR09SWSBTRUxFQ1RPUiBTVFlMRVMgLSBGcm9tIHN0YXRlbWVudDJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5jYXRlZ29yeS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgXG4gIC5maWVsZC1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cbn1cblxuLmNvbXBhY3Qtc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGZsZXg6IDE7XG5cbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4zKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOm5vdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSk7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb21wYWN0LXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmNhdGVnb3J5LXNlY3Rpb24ge1xuICAgIC5maWVsZC1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG59Il19 */";

/***/ }),

/***/ 10363:
/*!************************************************************!*\
  !*** ./src/app/edit-perch/edit-perch.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar > \n    <ion-title > تعديل فاتورة مشتريات</ion-title>\n    <ion-buttons  slot=\"end\"> \n     \n     \n \n\n    <ion-button fill=\"clear\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-sharp\"></ion-icon>\n    </ion-button> \n    </ion-buttons> \n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"ion-no-padding ion-no-margin\" *ngIf=\"payInvo\">\n    <ion-grid>\n      <ion-row dir=\"rtl\" class=\"top-card-row\">\n        <!-- First Column: Account Selector -->\n        <ion-col size=\"4\" class=\"account-column\">\n          <app-account-selector\n            accountType=\"supplier\"\n            placeholder=\"اختر حساب المورد\"\n            label=\"حساب المورد\"\n            [store_info]=\"store_info\"\n            [year]=\"year\"\n            [showAddButton]=\"true\"\n            [(ngModel)]=\"selectedAccount\"\n            (accountSelected)=\"onAccountSelected($event)\"\n            (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n          </app-account-selector>\n        </ion-col>\n        \n        \n        <!-- Third Column: Date -->\n        <ion-col size=\"3\" class=\"date-column\" dir=\"rtl\">\n          <ion-label class=\"column-label\">التاريخ</ion-label>\n          <ion-item class=\"custInput date-input\">\n            <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" placeholder=\"التاريخ\"></ion-input>\n          </ion-item>\n        </ion-col>\n        \n        <!-- Fourth Column: Comment -->\n        <ion-col size=\"4\" class=\"date-comment-column\">\n          <ion-label class=\"column-label\">ملاحظة</ion-label>\n          <ion-item class=\"custInput comment-input\">\n            <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"payInvo\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"8\" class=\"ion-no-padding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n              <app-item-selector\n                [items]=\"items\"\n                [loadingItems]=\"loadingItems\"\n                [searchLang]=\"searchLang\"\n                [store_info]=\"store_info\"\n                [year]=\"year\"\n                parentPage=\"edit-perch\"\n                [enablePriceUpdateConfirmation]=\"true\"\n                [payRef]=\"payInvo.pay_ref\"\n                [showQuantityInput]=\"true\"\n                [showPriceInput]=\"false\"\n                [showPerchPriceInput]=\"true\"\n                placeholder=\"اختر الصنف\"\n                (itemSelected)=\"onItemSelected($event)\"\n                (itemAdded)=\"onItemAdded($event)\"\n                (refreshItems)=\"refresh('item')\">\n              </app-item-selector>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n              <ion-card-header color=\"primary\" class=\"table-card-header\">\n                <ion-card-title>\n                  <ion-row class=\"ion-align-items-center\">\n                    <ion-col size=\"3\">\n                      <span>قائمة الأصناف</span>\n                    </ion-col>\n                    <ion-col size=\"6\" class=\"ion-text-center\">\n                      <div class=\"search-container\">\n                        <ion-item lines=\"none\" class=\"search-item\">\n                          <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\n                          <ion-input\n                            [(ngModel)]=\"searchTerm\"\n                            (ionInput)=\"onSearchTermChange()\"\n                            placeholder=\"البحث في الأصناف...\"\n                            clearInput=\"true\"\n                            class=\"search-input\">\n                          </ion-input>\n                          <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\n                            <span class=\"search-results\">{{ getSearchResultText() }}</span>\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\n                              <ion-icon name=\"chevron-up\"></ion-icon>\n                            </ion-button>\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\n                              <ion-icon name=\"chevron-down\"></ion-icon>\n                            </ion-button>\n                          </div>\n                        </ion-item>\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"ion-text-end\">\n                      <ion-button \n                        fill=\"clear\" \n                        color=\"light\" \n                        size=\"small\"\n                        (click)=\"sortItemListAlphabetically()\"\n                        [disabled]=\"!itemList || itemList.length === 0\"\n                      >\n                        <ion-icon name=\"list\" slot=\"start\"></ion-icon>\n                        {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\n                      </ion-button>\n                      <ion-button \n                        fill=\"clear\" \n                        color=\"light\" \n                        size=\"small\"\n                        (click)=\"openPriceAdjustmentDialog()\"\n                        [disabled]=\"!itemList || itemList.length === 0\"\n                      >\n                        <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n                        تعديل الأسعار\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-title>\n              </ion-card-header>\n              <div class=\"table-container\">\n               <table class=\"table\">\n                 <tr>\n                  <th>no</th>\n                  <th>الصنف</th>\n                  <th>الكمية</th>\n                  <th>سعر الشراء</th>\n                  <th>المجموع</th> \n                  <th></th> \n                 </tr>\n                 <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\" \n                     (dblclick)=\"qtyClick(i)\"\n                     [attr.data-index]=\"i\"\n                     [class.search-highlight]=\"isHighlighted(i)\"\n                     [class.search-match]=\"isSearchMatch(i)\">\n                  <td>{{i+1}}</td>\n                  <td>\n                    <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\n                  </td>\n                  <td >\n                    <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                 <td>\n                   <ion-text *ngIf=\"showMe != i\">{{item.perch_price}}</ion-text> \n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.perch_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                  <td>{{+item.tot}}</td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>\n                 </tr> \n               </table>\n              </div> \n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n   \n  \n      <ion-col size=\"4\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"9\">\n                <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n                <ion-item class=\"custInput\"> \n                  <ion-input [(ngModel)]=\"payInvo.tot_pr\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n                <ion-col size=\"11\">\n              <!-- Discount Section -->\n              <ion-label class=\"ion-padding\"><strong>  الخصم  </strong> </ion-label>\n                <ion-item dir=\"rtl\"> \n                  <ion-segment [(ngModel)]=\"discountType\" (ionChange)=\"onDiscountTypeChange($event)\" slot=\"start\">\n                    <ion-segment-button value=\"percentage\">\n                      <ion-label>نسبة %</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"amount\">\n                      <ion-label>مبلغ</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                </ion-item>  \n              <!-- Percentage Discount Input -->\n              <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input\" class=\"custInput\">\n                <ion-label position=\"floating\" class=\"float-right\">نسبة الخصم %</ion-label>\n                <ion-input \n                  type=\"number\" \n                  [(ngModel)]=\"discountPerc\" \n                  (ionInput)=\"onPercentageDiscountChange($event)\"\n                  placeholder=\"نسبة الخصم %\">\n                </ion-input>\n                <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\">\n                  {{ calculatedDiscountAmount.toFixed(2) }} \n                </ion-note>\n              </ion-item>\n\n              <!-- Amount Discount Input -->\n              <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input\" class=\"custInput\">\n                <ion-label position=\"floating\" class=\"float-right\">مبلغ الخصم</ion-label>\n                <ion-input \n                  type=\"number\" \n                  [(ngModel)]=\"discountAmount\" \n                  (ionInput)=\"onAmountDiscountChange($event)\"\n                   placeholder=\"مبلغ الخصم \">\n                </ion-input>\n                <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\">\n                  {{ calculatedDiscountPerc.toFixed(2) }}%\n                </ion-note>\n              </ion-item>\n            </ion-col>\n              <!-- <ion-col size=\"9\">\n                <ion-label class=\"ion-padding\">\n                  <strong>الخصم %</strong> \n                </ion-label> \n                <ion-label class=\"ion-padding ion-margin-start\">\n                  <strong>الخصم</strong> \n                </ion-label> \n                <ion-item class=\"custInput\"> \n                  <ion-input  [(ngModel)]=\"discountPerc\" (ionChange)=\"discountPerChange($event)\"></ion-input>\n                  <ion-input class=\"custInp\" [(ngModel)]=\"payInvo.discount\" tabindex=\"600\"   (ionBlur)=\"discountChange($event)\"></ion-input> \n                </ion-item>\n              </ion-col> -->\n              <!-- Total after discount for all purchase invoices -->\n              <ion-col size=\"11\">\n                <ion-label class=\"ion-padding\"><strong>المجموع بعد الخصم</strong></ion-label>\n                <ion-item class=\"custInput total-after-discount\"> \n                  <ion-input [value]=\"(+payInvo.tot_pr - +payInvo.discount).toFixed(2)\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              \n              <!-- Keep hidden inputs to maintain values -->\n              <input type=\"hidden\" [(ngModel)]=\"payInvo.pay\">\n              <input type=\"hidden\" [(ngModel)]=\"payInvo.nextPay\">\n            </ion-row>\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"5\" >\n                <ion-button expand=\"block\" routerDirection=\"root\"  color=\"success\"  (click)=\"update()\" >\n                  <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"5\" >\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\"  (click)=\"delete()\" >\n                  <ion-label class=\"ion-text-center\"> حــذف</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> \n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-perch_edit-perch_module_ts.js.map
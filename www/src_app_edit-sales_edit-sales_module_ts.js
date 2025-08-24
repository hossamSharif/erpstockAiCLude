"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-sales_edit-sales_module_ts"],{

/***/ 63215:
/*!*********************************************************!*\
  !*** ./src/app/edit-sales/edit-sales-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesPageRoutingModule": () => (/* binding */ EditSalesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _edit_sales_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales.page */ 1023);




const routes = [
    {
        path: '',
        component: _edit_sales_page__WEBPACK_IMPORTED_MODULE_0__.EditSalesPage
    }
];
let EditSalesPageRoutingModule = class EditSalesPageRoutingModule {
};
EditSalesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditSalesPageRoutingModule);



/***/ }),

/***/ 22522:
/*!*************************************************!*\
  !*** ./src/app/edit-sales/edit-sales.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesPageModule": () => (/* binding */ EditSalesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _edit_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales-routing.module */ 63215);
/* harmony import */ var _edit_sales_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sales.page */ 1023);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);









let EditSalesPageModule = class EditSalesPageModule {
};
EditSalesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _edit_sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditSalesPageRoutingModule
        ],
        exports: [],
        declarations: [_edit_sales_page__WEBPACK_IMPORTED_MODULE_1__.EditSalesPage]
    })
], EditSalesPageModule);



/***/ }),

/***/ 1023:
/*!***********************************************!*\
  !*** ./src/app/edit-sales/edit-sales.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesPage": () => (/* binding */ EditSalesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_sales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales.page.html?ngResource */ 61265);
/* harmony import */ var _edit_sales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sales.page.scss?ngResource */ 28371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/price-adjustment-dialog/price-adjustment-dialog.component */ 91872);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);













let EditSalesPage = class EditSalesPage {
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
        // Add these properties at the top of your class
        this.discountType = 'percentage'; // 'percentage' or 'amount'
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        this.status = 'new';
        this.notifArr = [];
        this.showNotif = false;
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.isOpenNotif = false;
        this.newNotif = false;
        this.isOpen = false;
        this.sub_account = [];
        this.sub_accountLocalSales = [];
        this.items = [];
        this.itemsLocal = [];
        this.itemList = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        this.searchTerm = '';
        this.highlightedIndex = -1;
        this.searchMatches = [];
        this.salesLocal = [];
        this.salesLocalUpdate = [];
        this.salesLocalDelete = [];
        this.sub_accountSales = [];
        this.sales = [];
        this.randomsNumber = [];
        this.store_id = 1;
        this.sub_nameNew = "";
        this.discountPerc = 0;
        this.radioVal = 0;
        this.loading = false;
        this.offline = false;
        this.showMe = null;
        this.radioVal2 = 1;
        this.searchLang = 0;
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        this.finalResult = [];
        this.loadingItems = false;
        this.initialInvoices = [];
        this.currenQty = 0;
        this.firstQty = 0;
        this.perchTotQty = 0;
        this.payTotQty = 0;
        this.perchTot = 0;
        this.qtyReal = 0;
        this.availQty = 0;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.route.queryParams.subscribe(params => {
            if (params && params.payInvo) {
                this.payInvo = JSON.parse(params.payInvo);
                this.selectedAccount.sub_name = JSON.parse(params.sub_name);
                this.user_info = JSON.parse(params.user_info);
                this.store_info = JSON.parse(params.store_info);
                this.itemList = JSON.parse(params.itemList);
                this.resortItemList();
                //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name )
                // this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
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
            availQty: 0,
            aliasEn: ""
        };
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
    ngOnInit() {
        // Check category visibility setting
    }
    getAllStockItemsWithouteCounts() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                //console.log('this.year.id',this.year.id)
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
    refresh(para) {
        if (para == 'account') {
        }
        else {
            // this.getItems()
            this.getAllStockItemsWithouteCounts();
        }
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
                // After store info is loaded, get account balance if customer is selected
                this.loadInitialAccountBalance();
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.items = response;
            }
        });
    }
    radioChange2(ev, form) {
        //console.log(ev.target.value)  
        //console.log(this.status) 
        if (form == 'from') {
            if (ev.target.value == 1 && this.status == 'initial') {
                this.status = 'toFinal';
                this.payInvo.yearId = this.year.id;
                if (this.itemList.length > 0) {
                    this.itemList.forEach(element => {
                        element.yearId = this.year.id;
                    });
                }
                //console.log('convert invo to final',this.status)
            }
            else if (ev.target.value == 0 && this.status == 'toFinal') {
                this.status = 'initial';
                //console.log('from final to initial',this.status)
            }
        }
    }
    saveInvoInit() {
        // Optimized: Save initial invoice with items and delete final invoice in single API call
        const invoiceWithItems = {
            invoice: this.payInvo,
            items: this.itemList
        };
        this.api.saveSalesInvoInitWithItemsAndDeletePay(invoiceWithItems).subscribe((response) => {
            this.handleSaveInitSuccess();
        }, (err) => {
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    handleSaveInitSuccess() {
        // Show success message
        this.presentToast('تم الحفظ بنجاح', 'success');
        // Update local sales storage - remove the invoice entry since it's now initial
        this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
        this.storage.set('sales', this.sales).then((response) => {
            // Since radioVal2 == 0 (initial mode), call performSyncDelInitialMode
            this.performSyncDelInitialMode();
        });
        // Dismiss loading
        this.loadingController.dismiss();
    }
    saveitemListinit() {
        this.api.saveSalesitemListInit(this.itemList).subscribe(data => {
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.deleteSalesInvo();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    presentPopoverNotif(e) {
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif2.event = e;
        this.isOpenNotif = true;
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
    }
    prepareInvo() {
        this.radioVal = 0;
        this.payInvo = {
            pay_id: this.payArray[0].pay_id,
            pay_ref: this.payArray[0].pay_ref,
            store_id: this.payArray[0].store_id,
            tot_pr: this.payArray[0].tot_pr,
            pay: this.payArray[0].pay,
            pay_date: this.payArray[0].pay_date,
            pay_time: this.payArray[0].pay_time,
            user_id: this.user_info.id,
            cust_id: this.payArray[0].cust_id,
            pay_method: this.payArray[0].pay_method,
            discount: this.payArray[0].discount,
            changee: this.payArray[0].changee,
            sub_name: this.payArray[0].sub_name,
            payComment: this.payArray[0].payComment,
            nextPay: this.payArray[0].nextPay,
            yearId: this.payArray[0].yearId
        };
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
        if (Input == 'dst') {
            this.dstEds.nativeElement.focus();
        }
        else if (Input == 'dstPop3') {
            this.dstPop3.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.items;
            setTimeout(() => {
                this.popInput3.setFocus();
            }, 1500);
        }
        else if (Input == 'qtyEds') {
            this.qtyEds.setFocus();
        }
        else if (Input == 'popInput3') {
            this.popInput3.setFocus();
        }
    }
    generateRandom2(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.back();
        });
    }
    performSyncDel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.back();
        });
    }
    performSyncDelInitialMode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.back();
        });
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    openPriceAdjustmentDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                component: _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_6__.PriceAdjustmentDialogComponent,
                cssClass: 'price-adjustment-modal',
                componentProps: {
                    itemsList: itemsToPass,
                    mode: 'sales'
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
                // Update the pay_price and recalculate total
                this.itemList[itemIndex].pay_price = parseFloat(updatedItem.pay_price) || 0;
                this.itemList[itemIndex].tot = (this.itemList[itemIndex].quantity * this.itemList[itemIndex].pay_price).toFixed(2);
            }
        });
        // Recalculate totals
        this.recalculateTotals();
        this.presentToast('تم تعديل الأسعار بنجاح', 'success');
    }
    recalculateTotals() {
        // Use the existing getTotal() method which properly handles:
        // - Preserving existing discounts (percentage or amount)
        // - Recalculating discount amounts based on new totals
        // - Calculating change based on existing payment amount
        // - Maintaining discount type and values
        this.getTotal();
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
            displayList[i].tot = +displayList[i].quantity * +displayList[i].pay_price;
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
            aliasEn: item.aliasEn
        };
        this.searchTerm = item.item_name;
        //console.log( this.selectedItem); 
        this.didDissmis();
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
                availQty: fl[0]['quantity'],
                aliasEn: fl[0]['aliasEn']
            };
            //console.log( this.selectedItem);
            this.setFocusOnInput('qtyEds');
        }
        else {
            this.presentToast('خطأ في اسم الصنف ', 'danger');
            this.selectedItem.item_name = "";
        }
    }
    presentPopover(e) {
        //console.log('preent me', e)
        this.popover3.event = e;
        this.isOpen = true;
        this.clear();
        this.searchResult = this.items;
        setTimeout(() => {
            this.setFocusOnInput('popInput3');
        }, 2000);
    }
    didDissmis() {
        this.isOpen = false;
        this.setFocusOnInput('qtyEds');
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe;
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
                aliasEn: ""
            };
        }
        else {
            this.searchTerm = "";
        }
    }
    qtyhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        let fl = [];
        if (this.itemList.length > 0) {
            fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name);
            if (fl.length > 0) {
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
        this.payInvo.changee = +(this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value;
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
    // Add these methods to your class
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
    addTolist() {
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
            this.presentToast('الرجاء ادختيار الصنف وتحديد الكمية', 'danger');
        }
        else {
            let fl = [];
            if (this.itemList) {
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
                this.itemList[index].tot = (+this.selectedItem.qty * +this.selectedItem.pay_price).toFixed();
                this.itemList[index].tot.toFixed(2);
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
                aliasEn: ""
            };
            this.discountPerc = 0;
            this.payInvo.discount = 0;
            this.getTotal();
            this.setFocusOnInput('dstPop3');
            //this.setFocusOnInput('dstEds')
        }
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
                "perch_price": selectedItem.perch_price
            });
        }
        this.getTotal();
        this.updateSortedList();
        // this.presentToast('تم إضافة الصنف بنجاح', 'success');
    }
    validate() {
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        else if (this.payInvo.cust_id == 0) {
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
    //edit prices for each item in itemList , by call confiramation and perform updateitem calling api 
    emadFunction(itemselect) {
        let item = { id: 0, pay_price: 0, perch_price: 0 };
        item.id = itemselect.item_id;
        item.pay_price = itemselect.pay_price;
        item.perch_price = itemselect.perch_price;
        this.priceChangeAlertConfirm(item, itemselect.item_name);
    }
    priceChangeAlertConfirm(item, item_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: 'هل تريد تعديل اسعار البيع والشراء' + ' >>>                 للصنف ' + item_name,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah'); 
                            //  this.addTolist() 
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            console.log('Confirm Okay', item);
                            this.updateItemDetail(item);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateItemDetail(item) {
        this.presentLoadingWithOptions('جاري تعديل البيانات ...');
        this.api.updatePayPrice(item).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    //
    update() {
        console.log('update', this.payInvo);
        let d = this.payInvo.pay_date;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        if (this.radioVal2 == 0) {
            console.log('update', this.payInvo);
            if (this.validate() == true) {
                this.presentLoadingWithOptions('جاري حفظ البيانات ...');
                this.saveInvoInit();
            }
        }
        else if (this.radioVal2 == 1) {
            console.log('update', this.payInvo);
            if (this.validate() == true) {
                this.presentLoadingWithOptions('جاري حفظ البيانات ...');
                this.updateInvo();
            }
        }
    }
    updateInvo() {
        // Optimized: Update invoice and items together in single API call
        const invoiceWithItems = {
            invoice: this.payInvo,
            items: this.itemList
        };
        this.api.updateSalesInvoWithItems(invoiceWithItems).subscribe((response) => {
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
        // Update local sales storage
        this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
        this.sales.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('sales', this.sales).then((response) => {
            let arr = [];
            arr.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
            this.performSync();
        });
        // Dismiss loading
        this.loadingController.dismiss();
    }
    deleteSalesitemList4update() {
        this.api.deleteSalesitemList(this.payInvo.pay_ref).subscribe(data => {
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
        this.api.saveSalesitemList(this.itemList).subscribe(data => {
            //console.log(data)  
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            this.sales.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
            this.storage.set('sales', this.sales).then((response) => {
                //console.log('sales', response)
                let arr = [];
                arr.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                this.performSync();
            });
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                            if (this.offline == false && this.payInvo.pay_id != undefined) {
                                this.deleteSalesInvo();
                            }
                            else if (this.offline == false && this.payInvo.pay_id == undefined) {
                                this.deleteSalesInvoLocal();
                            }
                            else if (this.offline == true) {
                                this.deleteSalesInvoLocal();
                            }
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
        let arr = [];
        arr.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.logHistoryArr.push({
            "id": null,
            "logRef": this.generateRandom2('delete sales'),
            "userId": this.user_info.id,
            "typee": 'delete sales',
            "datee": moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            "logStatus": 0,
            "logToken": JSON.stringify(arr[0]),
            "yearId": this.year.id,
            "store_id": this.store_info.id
        });
        if (this.radioVal2 == 1) {
            this.presentLoadingWithOptions('جاري حذف البيانات ...');
        }
        else {
        }
        const deletionData = {
            pay_id: this.payInvo.pay_id,
            pay_ref: this.payInvo.pay_ref
        };
        this.api.deleteSalesInvoWithItems(deletionData).subscribe(data => {
            //console.log(data)
            if (data['success']) {
                this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                //console.log(' case ffff ' ,this.sales)
                this.storage.set('sales', this.sales).then((response) => {
                    //console.log('sales', response) 
                    if (this.radioVal2 == 1) {
                        this.performSyncDel();
                    }
                    else {
                        this.performSyncDelInitialMode();
                    }
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
    deleteSalesInvoLocal() {
        this.storage.get('salesLocalDelete').then((response) => {
            if (response) {
                this.salesLocalDelete = response;
                //console.log(this.salesLocalDelete) 
            }
        });
        //
        if (this.payInvo.pay_id == undefined) {
            this.salesLocal = this.salesLocal.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            //console.log('case undefined' , this.salesLocal)
            this.storage.set('salesLocal', this.salesLocal).then((response) => {
                //console.log('resoponse set', response) 
                this.presentToast('تم الحذف بنجاح', 'success');
                this.back();
            });
        }
        else {
            this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            //console.log('case defined',this.sales)
            this.storage.set('sales', this.sales).then((response) => {
                //console.log('sales', response) 
                this.salesLocalDelete.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                this.storage.set('salesLocalDelete', this.salesLocalDelete).then((response) => {
                    //console.log('resoponse set', response) 
                    this.presentToast('تم الحذف بنجاح', 'success');
                    this.back();
                });
            });
        }
    }
    deleteSalesitemList() {
        this.api.deleteSalesitemList(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                //console.log(' case ffff ' ,this.sales)
                this.storage.set('sales', this.sales).then((response) => {
                    //console.log('sales', response) 
                    if (this.radioVal2 == 1) {
                        this.performSyncDel();
                    }
                    else {
                        this.performSyncDelInitialMode();
                    }
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
                currentCustumerStatus: 0
            };
            // Update invoice with selected account
            this.payInvo.cust_id = account.id;
            this.payInvo.sub_name = account.sub_name;
            console.log('Account selected in edit-sales:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            // Update the current customer status based on balance
            this.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
            this.selectedAccount.currentCustumerStatus = this.currentCustumerStatus;
            this.selectedAccount.sub_balance = balance.current_balance;
            console.log('Account balance loaded in edit-sales:', balance);
        }
    }
    // Load account balance when page initializes with existing invoice data
    loadInitialAccountBalance() {
        if (this.payInvo && this.payInvo.cust_id && this.store_info && this.year) {
            // Get account balance for the customer in the invoice
            this.api.getAccountBalance(this.payInvo.cust_id, this.store_info.id, this.year.id).subscribe((response) => {
                if (response.success && response.data) {
                    // Update selected account balance
                    this.selectedAccount.sub_balance = response.data.current_balance;
                    this.selectedAccount.currentCustumerStatus = response.data.status === 'debit' ? 0 : 1;
                    this.currentCustumerStatus = this.selectedAccount.currentCustumerStatus;
                    // Populate selectedAccount with customer data
                    this.selectedAccount.id = this.payInvo.cust_id;
                    this.selectedAccount.sub_name = this.payInvo.sub_name;
                    console.log('Initial account balance loaded in edit-sales:', response.data);
                }
            }, (error) => {
                console.error('Error loading initial account balance:', error);
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
EditSalesPage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
EditSalesPage.propDecorators = {
    dstEds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["dstEds",] }],
    qtyEds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['qtyEds',] }],
    dstPop3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['dstPop3',] }],
    popInput3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['popInput3',] }],
    popover3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['popover3',] }],
    popoverNotif2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['popoverNotif2',] }]
};
EditSalesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-edit-sales',
        template: _edit_sales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_sales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditSalesPage);



/***/ }),

/***/ 28371:
/*!************************************************************!*\
  !*** ./src/app/edit-sales/edit-sales.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.bnone {\n  border: none;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n\n.table-card-header ion-card-title {\n  margin: 0;\n}\n\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n\n.top-card-row {\n  padding: 16px;\n  align-items: flex-start;\n  gap: 16px;\n}\n\n.top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-card-row .account-column .column-label,\n.top-card-row .invoice-type-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n  font-size: 0.95rem;\n  height: 22px;\n  line-height: 30px;\n}\n\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n\n.top-card-row .invoice-type-column .invoice-type-section {\n  margin-top: 10px;\n}\n\n.top-card-row .invoice-type-column .invoice-type-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\n.category-column {\n  padding: 0 12px;\n  text-align: center;\n}\n\n.category-column .column-label {\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 12px;\n  font-size: 0.95rem;\n}\n\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .invoice-type-column:last-child,\n.top-card-row .category-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.table-container {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n\n.search-container {\n  width: 100%;\n}\n\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\n\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\n\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\n\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n\n.table-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.table-container::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n}\n\n.table-container::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 3px;\n}\n\n.table-container::-webkit-scrollbar-thumb:hover {\n  background: var(--ion-color-dark);\n}\n\n/* ======================================\n   CATEGORY SELECTOR STYLES - From statement2\n   ====================================== */\n\n.category-section,\n.invoice-type-section {\n  margin-top: 0;\n}\n\n.category-section .field-label,\n.invoice-type-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n\n/* Responsive design for mobile */\n\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2FsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtBQUVSOztBQUNJO0VBQ0ksZ0JBQUE7QUFFUjs7QUFDRTtFQUNLLGtCQUFBO0VBQ0gsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBRTtFQUNFLDhCQUFBO0FBR0o7O0FBREc7RUFDQyw0QkFBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7QUFLSjs7QUFIRTtFQUNFLFlBQUE7QUFNSjs7QUFKRTtFQUNFLHlCQUFBO0FBT0o7O0FBTEU7RUFBUSx5QkFBQTtFQUEwQixrQkFBQTtFQUFtQixZQUFBO0VBQWMsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixZQUFBO0FBY3ZHOztBQVhFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVhBO0VBQ0UsaURBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBY0Y7O0FBWkU7RUFDRSxTQUFBO0FBY0o7O0FBWkk7RUFDRSxtQkFBQTtBQWNOOztBQVpNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBY1I7O0FBWlE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBY1Y7O0FBVk07RUFDRSx5QkFBQTtBQVlSOztBQVZRO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUFZVjs7QUFWVTtFQUNFLGdCQUFBO0FBWVo7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBTUY7O0FBSkU7Ozs7O0VBS0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFNSjs7QUFKSTs7Ozs7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFVTjs7QUFKSTtFQUNFLGFBQUE7QUFNTjs7QUFESTtFQUNFLGdCQUFBO0FBR047O0FBRE07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUdSOztBQUdJO0VBQ0UsZ0JBQUE7QUFETjs7QUFHTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRFI7O0FBT0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxOOztBQU9NO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUxSOztBQVdJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFUTjs7QUFXTTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFUUjs7QUFlRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFaTjs7QUFpQkE7RUFDRTtJQUNFLHNCQUFBO0VBZEY7RUFnQkU7Ozs7SUFJRSxRQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBZEo7RUFnQkk7Ozs7SUFDRSxnQkFBQTtFQVhOO0FBQ0Y7O0FBaUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQWZGOztBQWtCQTtFQUNFLFdBQUE7QUFmRjs7QUFpQkU7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFmSjs7QUFpQkk7RUFDRSxjQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0FBZk47O0FBa0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQWhCTjs7QUFrQk07RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWhCUjs7QUFtQk07RUFDRSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBakJSOztBQW1CUTtFQUNFLGVBQUE7QUFqQlY7O0FBeUJBO0VBQ0Usb0RBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsbURBQUE7RUFDQSwwQ0FBQTtBQXRCRjs7QUEwQkE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUF2QkY7O0FBMkJBO0VBQ0UsVUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxrQ0FBQTtBQXhCRjs7QUEyQkE7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGlDQUFBO0FBeEJGOztBQTJCQTs7MkNBQUE7O0FBSUE7O0VBRUUsYUFBQTtBQXpCRjs7QUEyQkU7O0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBNEJBO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUF6QkY7O0FBMkJFO0VBQ0UseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQXpCSjs7QUEyQkk7RUFDRSw4Q0FBQTtFQUNBLDJCQUFBO0FBekJOOztBQTRCSTtFQUNFLG1DQUFBO0FBMUJOOztBQTZCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTNCTjs7QUFnQ0EsaUNBQUE7O0FBQ0E7RUFHTTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQS9CTjs7RUFxQ0U7SUFDRSxlQUFBO0VBbENKO0FBQ0YiLCJmaWxlIjoiZWRpdC1zYWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLmN1c3QtY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5jdXN0Um93e1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICB9XG5cbiAgLnRhYmxle1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEycHg7XG4gIH1cbiAgLnJlZHtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSBcbiAgIH1cbiAgIC5kYXJrb3tcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspXG4gICB9XG4gIGlvbi1wb3BvdmVye1xuICAgIC0tb2Zmc2V0LXkgOiAtMzBweFxuICB9XG4gIC5ibm9uZXtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH0gXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgfVxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XG4gIFxuICAvLyBSaWdodCBhbGlnbiBpdGVtIG5hbWUgY29sdW1uXG4gIHRkOm50aC1jaGlsZCgyKSwgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9XG5cbi50YWJsZS1jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgaW9uLXJvdyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWNvbFtzaXplPVwiYXV0b1wiXSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIFxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAtLWNvbG9yLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb3AgQ2FyZCBPcmdhbml6YXRpb24gU3R5bGluZ1xuLnRvcC1jYXJkLXJvdyB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDE2cHg7IC8vIFJlcGxhY2Ugb2Zmc2V0IHdpdGggZ2FwXG4gIFxuICAuYWNjb3VudC1jb2x1bW4sXG4gIC5pbnZvaWNlLXR5cGUtY29sdW1uLFxuICAuY2F0ZWdvcnktY29sdW1uLFxuICAuZGF0ZS1jb21tZW50LWNvbHVtbixcbiAgLmRhdGUtY29sdW1uIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmNvbHVtbi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4OyAvLyBSZWR1Y2VkIG1hcmdpblxuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgaGVpZ2h0OiAyMnB4OyAvLyBGaXhlZCBoZWlnaHQgZm9yIGNvbnNpc3RlbnQgYWxpZ25tZW50XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEFsaWduIGFsbCBmb3JtIGNvbnRlbnQgYXQgdGhlIHNhbWUgbGV2ZWxcbiAgLmFjY291bnQtY29sdW1uIHtcbiAgICBhcHAtYWNjb3VudC1zZWxlY3RvciB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmludm9pY2UtdHlwZS1jb2x1bW4ge1xuICAgIC5pbnZvaWNlLXR5cGUtc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgXG4gICAgICAuY29tcGFjdC1zZWdtZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAvLyBJbmNyZWFzZWQgaGVpZ2h0IGZvciBiZXR0ZXIgYWxpZ25tZW50XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY2F0ZWdvcnktY29sdW1uIHtcbiAgICAuY2F0ZWdvcnktc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgXG4gICAgICAuY29tcGFjdC1zZWdtZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAvLyBJbmNyZWFzZWQgaGVpZ2h0IGZvciBiZXR0ZXIgYWxpZ25tZW50XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZGF0ZS1jb21tZW50LWNvbHVtbiB7XG4gICAgLmNvbW1lbnQtaW5wdXQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIGhlaWdodDogNDhweDsgLy8gTWF0Y2ggb3RoZXIgaW5wdXRzXG4gICAgICBcbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZGF0ZS1jb2x1bW4ge1xuICAgIC5kYXRlLWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICBoZWlnaHQ6IDQ4cHg7IC8vIE1hdGNoIG90aGVyIGlucHV0c1xuICAgICAgXG4gICAgICBpb24taW5wdXQge1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4gIC5jYXRlZ29yeS1jb2x1bW4ge1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgLmNvbHVtbi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICB9XG4gIH1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b3AtY2FyZC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmFjY291bnQtY29sdW1uLFxuICAgIC5pbnZvaWNlLXR5cGUtY29sdW1uLFxuICAgIC5jYXRlZ29yeS1jb2x1bW4sXG4gICAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xuICAgICAgc2l6ZTogMTI7XG4gICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFRhYmxlIGNvbnRhaW5lciBhbmQgc2VhcmNoIHN0eWxlc1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgXG4gIC5zZWFyY2gtaXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoLW5hdmlnYXRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIFxuICAgICAgLnNlYXJjaC1yZXN1bHRzIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbWFyZ2luOiAwIDJweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVGFibGUgcm93IGhpZ2hsaWdodGluZ1xudHIuc2VhcmNoLW1hdGNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuMikgIWltcG9ydGFudDtcbn1cblxudHIuc2VhcmNoLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuNCkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuXG4vLyBIaWdobGlnaHQgdGV4dFxubWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwIDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4vLyBTY3JvbGxiYXIgc3R5bGluZyBmb3Igd2Via2l0IGJyb3dzZXJzXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi50YWJsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENBVEVHT1JZIFNFTEVDVE9SIFNUWUxFUyAtIEZyb20gc3RhdGVtZW50MlxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmNhdGVnb3J5LXNlY3Rpb24sXG4uaW52b2ljZS10eXBlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBcbiAgLmZpZWxkLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxufVxuXG4uY29tcGFjdC1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgZmxleDogMTtcblxuICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjMpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cblxuICAgICY6aG92ZXI6bm90KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG4vKiBSZXNwb25zaXZlIGRlc2lnbiBmb3IgbW9iaWxlICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbXBhY3Qtc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY2F0ZWdvcnktc2VjdGlvbiB7XG4gICAgLmZpZWxkLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 61265:
/*!************************************************************!*\
  !*** ./src/app/edit-sales/edit-sales.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar> \n    <ion-title > تعديل فاتورة مبيعات</ion-title> \n    <ion-buttons  slot=\"end\"> \n   \n    \n\n     \n    <ion-button fill=\"clear\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-sharp\"></ion-icon>\n    </ion-button> \n    </ion-buttons> \n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- skeleton -->\n \n  <ion-grid *ngIf=\"payInvo\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid>\n            <ion-row dir=\"rtl\" class=\"top-card-row\">\n              <!-- First Column: Account Selector -->\n              <ion-col size=\"3\" class=\"account-column\">\n                <app-account-selector\n                  accountType=\"customer\"\n                  placeholder=\"اختر حساب العميل\"\n                  label=\"حساب العميل\"\n                  [store_info]=\"store_info\"\n                  [year]=\"year\"\n                  [showAddButton]=\"true\"\n                  [(ngModel)]=\"selectedAccount\"\n                  (accountSelected)=\"onAccountSelected($event)\"\n                  (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n                </app-account-selector>\n              </ion-col>\n              \n              <!-- Second Column: Invoice Type -->\n              <ion-col size=\"3\" class=\"invoice-type-column\">\n                <ion-label class=\"column-label\">نوع الفاتورة</ion-label>\n                <div class=\"invoice-type-section\">\n                  <ion-segment [(ngModel)]=\"radioVal2\" (ionChange)=\"radioChange2($event ,'from')\" class=\"compact-segment\">\n                    <ion-segment-button [value]=\"0\">\n                      <span>مبدئية</span>\n                    </ion-segment-button>\n                    <ion-segment-button [value]=\"1\">\n                      <span>نهائية</span>\n                    </ion-segment-button>\n                  </ion-segment>\n                </div>\n              </ion-col>\n              \n              \n              <!-- Fourth Column: Date -->\n              <ion-col size=\"3\" class=\"date-column\" dir=\"rtl\">\n                <ion-label class=\"column-label\">التاريخ</ion-label>\n                <ion-item class=\"custInput date-input\">\n                  <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" placeholder=\"التاريخ\"></ion-input>\n                </ion-item>\n              </ion-col>\n              \n              <!-- Fifth Column: Comment -->\n              <ion-col size=\"3\" class=\"date-comment-column\">\n                <ion-label class=\"column-label\">ملاحظة</ion-label>\n                <ion-item class=\"custInput comment-input\">\n                  <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"payInvo\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"8\" class=\"ion-no-padding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <app-item-selector\n                [items]=\"items\"\n                [loadingItems]=\"loadingItems\"\n                [searchLang]=\"searchLang\"\n                [store_info]=\"store_info\"\n                [year]=\"year\"\n                parentPage=\"edit-sales\"\n                [enablePriceUpdateConfirmation]=\"true\"\n                [payRef]=\"payInvo.pay_ref\"\n                [showQuantityInput]=\"true\"\n                [showPriceInput]=\"true\"\n                [showPerchPriceInput]=\"false\"\n                placeholder=\"اختر الصنف\"\n                (itemSelected)=\"onItemSelected($event)\"\n                (itemAdded)=\"onItemAdded($event)\"\n                (refreshItems)=\"refresh('item')\">\n              </app-item-selector>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n              <ion-card-header color=\"primary\" class=\"table-card-header\">\n                <ion-card-title>\n                  <ion-row class=\"ion-align-items-center\">\n                    <ion-col size=\"3\">\n                      <span>قائمة الأصناف</span>\n                    </ion-col>\n                    <ion-col size=\"6\" class=\"ion-text-center\">\n                      <div class=\"search-container\">\n                        <ion-item lines=\"none\" class=\"search-item\">\n                          <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\n                          <ion-input\n                            [(ngModel)]=\"searchTerm\"\n                            (ionInput)=\"onSearchTermChange()\"\n                            placeholder=\"البحث في الأصناف...\"\n                            clearInput=\"true\"\n                            class=\"search-input\">\n                          </ion-input>\n                          <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\n                            <span class=\"search-results\">{{ getSearchResultText() }}</span>\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\n                              <ion-icon name=\"chevron-up\"></ion-icon>\n                            </ion-button>\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\n                              <ion-icon name=\"chevron-down\"></ion-icon>\n                            </ion-button>\n                          </div>\n                        </ion-item>\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"ion-text-end\">\n                      <ion-button \n                        fill=\"clear\" \n                        color=\"light\" \n                        size=\"small\"\n                        (click)=\"sortItemListAlphabetically()\"\n                        [disabled]=\"!itemList || itemList.length === 0\"\n                      >\n                        <ion-icon name=\"list\" slot=\"start\"></ion-icon>\n                        {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\n                      </ion-button>\n                      <ion-button \n                        fill=\"clear\" \n                        color=\"light\" \n                        size=\"small\"\n                        (click)=\"openPriceAdjustmentDialog()\"\n                        [disabled]=\"!itemList || itemList.length === 0\"\n                      >\n                        <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n                        تعديل الأسعار\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-title>\n              </ion-card-header>\n              <div class=\"table-container\">\n               <table class=\"table\">\n                 <tr>\n                  <th>no</th>\n                  <th>الصنف</th>\n                  <th>الكمية</th>\n                  <th>سعر الوحده</th>\n                  <th>المجموع</th> \n                  <!-- <th></th>  -->\n                 </tr>\n                 <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\" \n                     (dblclick)=\"qtyClick(i)\"\n                     [attr.data-index]=\"i\"\n                     [class.search-highlight]=\"isHighlighted(i)\"\n                     [class.search-match]=\"isSearchMatch(i)\">\n                  <td>{{i+1}}</td>\n                  <td>\n                    <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\n                  </td>\n                  <td>\n                    <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                 <td>\n                   <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text> \n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.pay_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                  <td>{{+item.tot}}</td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>\n                   <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"emadFunction(item)\">\n                      <ion-icon name=\"edit\" color=\"success\" ></ion-icon>\n                    </ion-button>\n                  </td> -->\n                 </tr>\n                 \n               \n               </table>\n              </div> \n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n  \n  \n  \n  \n      <ion-col size=\"4\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"11\">\n                <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n                <ion-item class=\"custInput\"> \n                  <ion-input [(ngModel)]=\"payInvo.tot_pr\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n               <ion-col size=\"11\">\n              <!-- Discount Section -->\n              <ion-label class=\"ion-padding\"><strong>  الخصم  </strong> </ion-label>\n                <ion-item dir=\"rtl\"> \n                  <ion-segment [(ngModel)]=\"discountType\" (ionChange)=\"onDiscountTypeChange($event)\" slot=\"start\">\n                    <ion-segment-button value=\"percentage\">\n                      <ion-label>نسبة %</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"amount\">\n                      <ion-label>مبلغ</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                </ion-item>  \n              <!-- Percentage Discount Input -->\n              <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input\" class=\"custInput\">\n                <ion-label position=\"floating\" class=\"float-right\">نسبة الخصم %</ion-label>\n                <ion-input \n                  type=\"number\" \n                  [(ngModel)]=\"discountPerc\" \n                  (ionInput)=\"onPercentageDiscountChange($event)\"\n                  placeholder=\"نسبة الخصم %\">\n                </ion-input>\n                <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\">\n                  {{ calculatedDiscountAmount.toFixed(2) }} \n                </ion-note>\n              </ion-item>\n\n              <!-- Amount Discount Input -->\n              <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input\" class=\"custInput\">\n                <ion-label position=\"floating\" class=\"float-right\">مبلغ الخصم</ion-label>\n                <ion-input \n                  type=\"number\" \n                  [(ngModel)]=\"discountAmount\" \n                  (ionInput)=\"onAmountDiscountChange($event)\"\n                   placeholder=\"مبلغ الخصم \">\n                </ion-input>\n                <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\">\n                  {{ calculatedDiscountPerc.toFixed(2) }}%\n                </ion-note>\n              </ion-item>\n            </ion-col>\n\n              <!-- <ion-col size=\"9\">\n                <ion-label class=\"ion-padding\">\n                  <strong>الخصم %</strong> \n                </ion-label>\n  \n                <ion-label class=\"ion-padding ion-margin-start\">\n                  <strong>الخصم</strong> \n                </ion-label> \n                <ion-item class=\"custInput\"> \n                  <ion-input  [(ngModel)]=\"discountPerc\" (ionChange)=\"discountPerChange($event)\"></ion-input>\n                  <ion-input  class=\"custInp\" [(ngModel)]=\"payInvo.discount\"  tabindex=\"600\"  (ionBlur)=\"discountChange($event)\"></ion-input> \n                </ion-item>\n              </ion-col> -->\n              <!-- Total after discount for all sales invoices -->\n              <ion-col size=\"11\">\n                <ion-label class=\"ion-padding\"><strong>المجموع بعد الخصم</strong></ion-label>\n                <ion-item class=\"custInput total-after-discount\"> \n                  <ion-input [value]=\"(+payInvo.tot_pr - +payInvo.discount).toFixed(2)\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              \n              <!-- Keep hidden inputs to maintain values -->\n              <input type=\"hidden\" [(ngModel)]=\"payInvo.pay\">\n              <input type=\"hidden\" [(ngModel)]=\"payInvo.nextPay\"> \n            </ion-row>\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"5\" >\n                <ion-button fill=\"outline\" expand=\"block\" routerDirection=\"root\"  color=\"primary\"  (click)=\"update()\" >\n                  <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"5\" >\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\"  (click)=\"delete()\" >\n                  <ion-label class=\"ion-text-center\"> حــذف</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> \n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-sales_edit-sales_module_ts.js.map
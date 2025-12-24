"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_purchase-order_purchase-order_module_ts"],{

/***/ 58205:
/*!*****************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderPageRoutingModule": () => (/* binding */ PurchaseOrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _purchase_order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-order.page */ 23855);




const routes = [
    {
        path: '',
        component: _purchase_order_page__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderPage
    }
];
let PurchaseOrderPageRoutingModule = class PurchaseOrderPageRoutingModule {
};
PurchaseOrderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchaseOrderPageRoutingModule);



/***/ }),

/***/ 32008:
/*!*********************************************************!*\
  !*** ./src/app/purchase-order/purchase-order.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderPageModule": () => (/* binding */ PurchaseOrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _purchase_order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-order-routing.module */ 58205);
/* harmony import */ var _purchase_order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-order.page */ 23855);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let PurchaseOrderPageModule = class PurchaseOrderPageModule {
};
PurchaseOrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _purchase_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_purchase_order_page__WEBPACK_IMPORTED_MODULE_1__.PurchaseOrderPage]
    })
], PurchaseOrderPageModule);



/***/ }),

/***/ 23855:
/*!*******************************************************!*\
  !*** ./src/app/purchase-order/purchase-order.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderPage": () => (/* binding */ PurchaseOrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _purchase_order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-order.page.html?ngResource */ 36196);
/* harmony import */ var _purchase_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-order.page.scss?ngResource */ 55282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/currency.service */ 6612);










let PurchaseOrderPage = class PurchaseOrderPage {
    constructor(route, modalController, alertController, storage, loadingController, datePipe, api, toast, _location, cdr, currencyService) {
        this.route = route;
        this.modalController = modalController;
        this.alertController = alertController;
        this.storage = storage;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this._location = _location;
        this.cdr = cdr;
        this.currencyService = currencyService;
        // Discount management
        this.discountType = 'percentage'; // 'percentage' or 'amount'
        this.discountAmount = 0;
        this.calculatedDiscountPerc = 0;
        this.calculatedDiscountAmount = 0;
        // Data arrays
        this.sub_account = [];
        this.items = [];
        this.itemList = [];
        this.sortedItemList = [];
        this.isItemListSorted = false;
        this.searchTerm = '';
        this.highlightedIndex = -1;
        this.searchMatches = [];
        this.loadingItems = false;
        this.searchLang = 0;
        this.discountPerc = 0;
        this.showMe = null;
        this.searchResult = [];
        // Loading state management
        this.isSaving = false;
        this.currentLoadingMessage = '';
        this.currentLoader = null;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
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
        // Handle incoming items from sales invoices
        this.route.queryParams.subscribe(params => {
            if (params['status'] === 'newInvoFromItemsPage' && params['selectedItemsList']) {
                console.log('New purchase order from sales invoices');
                const incomingItems = JSON.parse(params['selectedItemsList']);
                // Wait for store_info and year to be loaded, then populate itemList
                setTimeout(() => {
                    this.populateItemsFromSalesInvoices(incomingItems);
                }, 500);
            }
        });
    }
    ngOnInit() {
        this.initializeCurrency();
        this.getAppInfo();
        this.prepareInvo();
    }
    ngOnDestroy() {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
        this.hideLoading();
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    ionViewDidEnter() {
        this.getAppInfo();
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
                this.getSupplierAccounts();
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.items = response;
                this.searchResult = this.items;
            }
        });
    }
    getSupplierAccounts() {
        this.api.getPerchAccounts(this.store_info.id, this.year.id).subscribe(data => {
            let res = data;
            this.sub_account = res['data'];
        }, (err) => {
            console.log(err);
        });
    }
    prepareInvo() {
        let d = new Date;
        let da = this.datePipe.transform(d, 'yyyy-MM-dd');
        let ti = this.datePipe.transform(d, 'HH:mm');
        this.payInvo = {
            pay_id: null,
            pay_ref: this.generateRandom(),
            store_id: 0,
            tot_pr: 0,
            pay: 0,
            pay_date: da,
            pay_time: ti,
            user_id: 0,
            cust_id: 0,
            pay_method: 'cash',
            discount: 0,
            changee: 0,
            sub_name: "",
            payComment: "",
            nextPay: null,
            yearId: 0
        };
    }
    generateRandom() {
        let da = new Date;
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString();
        return this.store_info ? this.store_info.store_ref + randomsNumber : randomsNumber;
    }
    // Search functionality
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
    // Item list management
    qtyClick(i) {
        this.showMe = i;
    }
    hideMe(i) {
        this.showMe = null;
    }
    editCell(i) {
        const displayList = this.getDisplayItemList();
        const itemToEdit = displayList[i];
        const originalIndex = this.itemList.findIndex(item => item.item_name === itemToEdit.item_name &&
            item.perch_price === itemToEdit.perch_price);
        if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].perch_price > 0) {
            displayList[i].tot = +displayList[i].quantity * +displayList[i].perch_price;
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
    deleteItem(index) {
        const displayList = this.getDisplayItemList();
        const itemToDelete = displayList[index];
        const originalIndex = this.itemList.findIndex(item => item.item_name === itemToDelete.item_name &&
            item.perch_price === itemToDelete.perch_price &&
            item.quantity === itemToDelete.quantity);
        if (originalIndex !== -1) {
            this.itemList.splice(originalIndex, 1);
        }
        this.discountPerc = 0;
        this.payInvo.discount = 0;
        this.getTotal();
        this.updateSortedList();
    }
    sortItemListAlphabetically() {
        if (!this.itemList || this.itemList.length === 0) {
            return;
        }
        if (this.isItemListSorted) {
            this.sortedItemList = [...this.itemList];
            this.isItemListSorted = false;
        }
        else {
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
    // Item selection from item-selector
    onItemSelected(selectedItem) {
        console.log('Item selected:', selectedItem);
    }
    onItemAdded(selectedItem) {
        console.log('Item to be added:', selectedItem);
        let existingItem = this.itemList.find(item => item.item_name === selectedItem.item_name &&
            item.perch_price === selectedItem.perch_price);
        if (existingItem) {
            let newQty = +existingItem.quantity + +selectedItem.qty;
            existingItem.quantity = newQty;
            existingItem.tot = (newQty * +existingItem.perch_price).toFixed(2);
        }
        else {
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
    // Populate items from sales invoices
    populateItemsFromSalesInvoices(incomingItems) {
        if (!this.store_info || !this.year || !this.payInvo) {
            console.error('Store info, year, or payInvo not loaded yet');
            // Retry after a short delay
            setTimeout(() => {
                this.populateItemsFromSalesInvoices(incomingItems);
            }, 500);
            return;
        }
        console.log('Populating items from sales invoices:', incomingItems);
        let d = new Date();
        let r = this.datePipe.transform(d, 'dd-MM-YYYY');
        incomingItems.forEach(item => {
            this.itemList.push({
                "id": 'NULL',
                "pay_ref": this.payInvo.pay_ref,
                "item_name": item.item_name,
                "pay_price": item.pay_price || 0,
                "quantity": +item.qty,
                "tot": (item.qty * +item.perch_price).toFixed(2),
                "store_id": +this.store_info.id,
                "yearId": +this.year.id,
                "item_id": +item.item_id,
                "dateCreated": r,
                "perch_price": item.perch_price || 0,
                "item_desc": item.item_desc || "",
                "part_no": item.part_no || "",
                "brand": item.brand || "",
                "model": item.model || "",
                "item_unit": item.item_unit || ""
            });
        });
        this.getTotal();
        this.updateSortedList();
        console.log('Items populated successfully. Total items:', this.itemList.length);
        this.presentToast(`تم تحميل ${this.itemList.length} صنف من الفواتير المحددة`, 'success');
    }
    // Discount calculations
    onDiscountTypeChange(event) {
        this.discountType = event.detail.value;
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
            this.calculatedDiscountAmount = (+this.payInvo.tot_pr * +this.discountPerc / 100);
            this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
            this.calculateChange();
        }
    }
    onAmountDiscountChange(event) {
        this.discountAmount = event.target.value || 0;
        if (this.payInvo.tot_pr > 0 && this.discountAmount > 0) {
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
        this.payInvo.tot_pr = sum;
        this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
        this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
        this.payInvo.changee = this.payInvo.changee.toFixed(2);
        if (this.discountType === 'percentage' && this.discountPerc > 0) {
            this.calculatedDiscountAmount = (sum * +this.discountPerc / 100);
            this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
        }
        else if (this.discountType === 'amount' && this.discountAmount > 0) {
            this.calculatedDiscountPerc = ((+this.discountAmount / sum) * 100);
            this.payInvo.discount = this.discountAmount;
        }
        this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
        this.payInvo.changee = this.payInvo.changee.toFixed(2);
    }
    // Account selection
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
            this.payInvo.cust_id = account.id;
            this.payInvo.sub_name = account.sub_name;
            console.log('Account selected in purchase-order:', this.selectedAccount);
        }
    }
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            this.selectedAccount.sub_balance = balance.current_balance;
            this.selectedAccount.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
            console.log('Account balance loaded in purchase-order:', balance);
        }
    }
    // Validation
    validate() {
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء إدخال أصناف إلى القائمة', 'danger');
            return false;
        }
        else if (+this.payInvo.cust_id == 0) {
            this.presentToast('الرجاء إختيار حساب المورد', 'danger');
            return false;
        }
        else if (this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
            this.presentToast('الرجاء تحديد التاريخ', 'danger');
            return false;
        }
        else if (this.payInvo.changee < 0) {
            this.presentToast('الرجاء مراجعة المبلغ المستلم والخصم', 'danger');
            return false;
        }
        else {
            return true;
        }
    }
    // Save purchase order
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let d = this.payInvo.pay_date;
            this.payInvo.sub_name = this.selectedAccount.sub_name;
            this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
            if (this.payInvo.nextPay != null) {
                this.payInvo.nextPay = this.datePipe.transform(d, 'yyyy-MM-dd');
            }
            this.payInvo.store_id = this.store_info.id;
            this.payInvo.user_id = this.user_info.id;
            this.payInvo.yearId = this.year.id;
            if (this.validate() == true) {
                yield this.showLoading('جاري حفظ طلب الشراء...', 'saving');
                try {
                    this.saveInvo();
                }
                catch (error) {
                    this.handleError(error, 'save');
                }
            }
        });
    }
    saveInvo() {
        const orderWithItems = {
            order: this.payInvo,
            items: this.itemList
        };
        this.api.savePurchaseOrderWithItems(orderWithItems).subscribe((response) => {
            this.hideLoading();
            this.handleSaveSuccess();
        }, (err) => {
            this.handleError(err, 'saveInvo');
        });
    }
    handleSaveSuccess() {
        this.presentToast('تم الحفظ بنجاح', 'success');
        this.itemList = [];
        this.prepareInvo();
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.discountPerc = 0;
        this.discountAmount = 0;
        this.payInvo.discount = 0;
    }
    // Loading management
    showLoading(message, operationType = 'saving') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.hideLoading();
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
            setTimeout(() => {
                if (this.isSaving && this.currentLoader) {
                    console.log('Loading timeout reached, dismissing...');
                    this.hideLoading();
                }
            }, 30000);
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currentLoader) {
                try {
                    yield this.currentLoader.dismiss();
                }
                catch (error) {
                    console.log('Error dismissing loader:', error);
                }
                this.currentLoader = null;
            }
            this.isSaving = false;
            this.currentLoadingMessage = '';
        });
    }
    handleError(error, operation) {
        console.error(`Error in ${operation}:`, error);
        this.hideLoading();
        this.presentToast('لم يتم حفظ البيانات، خطأ في الاتصال حاول مرة أخرى', 'danger');
    }
    isLoading() {
        return this.isSaving;
    }
    // UI helpers
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    back() {
        this._location.back();
    }
    refresh(para) {
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.items = response;
                this.searchResult = this.items;
            }
        });
    }
    getCurrencySymbol() {
        return this.currencyService.getCurrentCurrencySymbol();
    }
    // Price adjustment dialog
    openPriceAdjustmentDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'تعديل الأسعار',
                message: 'اختر نوع التعديل وأدخل القيمة',
                inputs: [
                    {
                        name: 'adjustmentType',
                        type: 'radio',
                        label: 'زيادة بنسبة مئوية',
                        value: 'increasePercent',
                        checked: true
                    },
                    {
                        name: 'adjustmentType',
                        type: 'radio',
                        label: 'تخفيض بنسبة مئوية',
                        value: 'decreasePercent'
                    },
                    {
                        name: 'adjustmentType',
                        type: 'radio',
                        label: 'زيادة بمبلغ ثابت',
                        value: 'increaseAmount'
                    },
                    {
                        name: 'adjustmentType',
                        type: 'radio',
                        label: 'تخفيض بمبلغ ثابت',
                        value: 'decreaseAmount'
                    },
                    {
                        name: 'value',
                        type: 'number',
                        placeholder: 'أدخل القيمة',
                        min: 0
                    }
                ],
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel'
                    },
                    {
                        text: 'تطبيق',
                        handler: (data) => {
                            if (data.value && data.value > 0) {
                                this.applyPriceAdjustment(data.adjustmentType, parseFloat(data.value));
                            }
                            else {
                                this.presentToast('الرجاء إدخال قيمة صحيحة', 'warning');
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Apply price adjustment to all items
    applyPriceAdjustment(type, value) {
        if (!this.itemList || this.itemList.length === 0) {
            this.presentToast('لا توجد أصناف لتعديل أسعارها', 'warning');
            return;
        }
        this.itemList.forEach(item => {
            let newPrice = item.perch_price;
            switch (type) {
                case 'increasePercent':
                    newPrice = +item.perch_price * (1 + value / 100);
                    break;
                case 'decreasePercent':
                    newPrice = +item.perch_price * (1 - value / 100);
                    break;
                case 'increaseAmount':
                    newPrice = +item.perch_price + value;
                    break;
                case 'decreaseAmount':
                    newPrice = +item.perch_price - value;
                    break;
            }
            // Ensure price doesn't go below 0
            if (newPrice < 0) {
                newPrice = 0;
            }
            item.perch_price = newPrice.toFixed(2);
            item.tot = (+item.quantity * +item.perch_price).toFixed(2);
        });
        this.getTotal();
        this.updateSortedList();
        this.presentToast('تم تعديل الأسعار بنجاح', 'success');
    }
};
PurchaseOrderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_4__.CurrencyService }
];
PurchaseOrderPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ["dstP",] }]
};
PurchaseOrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-purchase-order',
        template: _purchase_order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_purchase_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PurchaseOrderPage);



/***/ }),

/***/ 55282:
/*!********************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\nion-header ion-toolbar ion-title {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item {\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 40px;\n  margin: 0 5px;\n  border: none;\n}\nion-header ion-toolbar ion-buttons[slot=end] .header-date-item .header-date-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-align: center;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button {\n  --background: rgba(255, 255, 255, 0.2);\n  --background-hover: rgba(255, 255, 255, 0.3);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0 5px;\n}\nion-header ion-toolbar ion-buttons[slot=end] ion-button ion-label {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\nion-content {\n  --padding-top: 56px;\n  --padding-bottom: 120px;\n}\n.custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n.cust-card {\n  border-radius: 5px;\n}\n.show {\n  visibility: visible;\n}\n.hide {\n  visibility: hidden;\n}\n.bnone {\n  border: none;\n}\n.red {\n  color: var(--ion-color-danger);\n}\n.darko {\n  color: var(--ion-color-dark);\n}\nion-popover {\n  --offset-y: -30px ;\n}\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n.table-card-header {\n  --background: var(--ion-color-primary) !important;\n  --color: white !important;\n  padding: 12px 16px;\n}\n.table-card-header ion-card-title {\n  margin: 0;\n}\n.table-card-header ion-card-title ion-row {\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col {\n  display: flex;\n  align-items: center;\n}\n.table-card-header ion-card-title ion-row ion-col span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] {\n  justify-content: flex-end;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n.table-card-header ion-card-title ion-row ion-col[size=auto] ion-button ion-icon {\n  margin-left: 4px;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.compact-radio-style .discount-radio-container {\n  --min-height: 48px;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group {\n  justify-content: space-around;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option {\n  flex: 1;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background-color 0.2s ease;\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option:hover {\n  background-color: var(--ion-color-light);\n}\n.compact-radio-style .discount-radio-container .inline-radio-group .radio-option ion-label {\n  font-weight: 500;\n}\nion-segment {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  min-width: 200px;\n}\nion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-height: 28px;\n}\nion-segment ion-segment-button ion-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n.discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\n.discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\n.discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n.rtl-input {\n  direction: rtl;\n}\n.rtl-input ion-label.float-right {\n  text-align: right !important;\n  transform-origin: right top !important;\n  right: 0 !important;\n  left: auto !important;\n}\n.rtl-input ion-label.float-right.label-floating {\n  transform: translateY(-14px) scale(0.82) !important;\n  right: 0 !important;\n}\n.rtl-input ion-input.text-right {\n  text-align: right !important;\n  --padding-start: 0;\n  --padding-end: 16px;\n}\n.rtl-input ion-input.text-right input {\n  text-align: right !important;\n  direction: ltr;\n}\n.rtl-input ion-note {\n  direction: ltr;\n}\n.custom-rtl-input .item-native {\n  flex-direction: row-reverse;\n}\n.custom-rtl-input ion-label {\n  order: 2;\n  text-align: right;\n  margin-right: 0;\n  margin-left: 16px;\n}\n.custom-rtl-input ion-input {\n  order: 1;\n  text-align: right;\n}\n.custom-rtl-input ion-input input {\n  text-align: right !important;\n}\n.custom-rtl-input ion-note {\n  order: 3;\n}\n.total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n  font-weight: 600;\n}\n.total-after-discount ion-input {\n  --color: #15803d;\n  font-size: 1.1em;\n  text-align: center;\n}\nion-modal {\n  --height: 90%;\n  --border-radius: 16px 16px 0 0;\n}\n.insufficient-stock-modal {\n  --height: 80vh;\n  --width: 90vw;\n  --max-width: 600px;\n  --border-radius: 12px;\n}\n@media (max-width: 768px) {\n  .insufficient-stock-modal {\n    --height: 95vh;\n    --width: 95vw;\n  }\n}\n.top-card-row {\n  padding: 16px;\n  align-items: flex-start;\n  gap: 16px;\n}\n.top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column,\n.top-card-row .date-column {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.top-card-row .account-column .column-label,\n.top-card-row .invoice-type-column .column-label,\n.top-card-row .category-column .column-label,\n.top-card-row .date-comment-column .column-label,\n.top-card-row .date-column .column-label {\n  display: block;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n  font-size: 0.95rem;\n  height: 22px;\n  line-height: 30px;\n}\n.top-card-row .account-column app-account-selector {\n  margin-top: 0;\n}\n.top-card-row .invoice-type-column .invoice-type-section {\n  margin-top: 10px;\n}\n.top-card-row .invoice-type-column .invoice-type-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .category-column .category-section {\n  margin-top: 10px;\n}\n.top-card-row .category-column .category-section .compact-segment {\n  margin-top: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.top-card-row .date-comment-column .comment-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-comment-column .comment-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.top-card-row .date-column .date-input {\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 48px;\n}\n.top-card-row .date-column .date-input ion-input {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n.category-column {\n  padding: 0 12px;\n  text-align: center;\n}\n.category-column .column-label {\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 12px;\n  font-size: 0.95rem;\n}\n@media (max-width: 768px) {\n  .top-card-row {\n    flex-direction: column;\n  }\n  .top-card-row .account-column,\n.top-card-row .invoice-type-column,\n.top-card-row .category-column,\n.top-card-row .date-comment-column {\n    size: 12;\n    padding: 8px 0;\n    margin-bottom: 16px;\n  }\n  .top-card-row .account-column:last-child,\n.top-card-row .invoice-type-column:last-child,\n.top-card-row .category-column:last-child,\n.top-card-row .date-comment-column:last-child {\n    margin-bottom: 0;\n  }\n}\n.table-container {\n  border: 1px solid var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n.search-container {\n  width: 100%;\n}\n.search-container .search-item {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 0;\n}\n.search-container .search-item .search-input {\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n}\n.search-container .search-item .search-navigation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.search-container .search-item .search-navigation .search-results {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  margin-left: 8px;\n}\n.search-container .search-item .search-navigation ion-button {\n  --color: rgba(255, 255, 255, 0.8);\n  --border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: 0 2px;\n}\n.search-container .search-item .search-navigation ion-button ion-icon {\n  font-size: 20px;\n}\ntr.search-match {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n}\ntr.search-highlight {\n  background-color: rgba(255, 193, 7, 0.4) !important;\n  border: 2px solid var(--ion-color-warning);\n}\nmark {\n  background-color: yellow;\n  color: black;\n  padding: 0 2px;\n  border-radius: 2px;\n}\n/* ======================================\n   CATEGORY SELECTOR STYLES - From statement2\n   ====================================== */\n.category-section,\n.invoice-type-section {\n  margin-top: 0;\n}\n.category-section .field-label,\n.invoice-type-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n/* Responsive design for mobile */\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .category-column .column-label {\n    font-size: 13px;\n  }\n\n  .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/* Footer styles */\nion-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nion-footer ion-toolbar {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-medium);\n}\nion-footer .total-after-discount {\n  --background: #f0fdf4;\n  border: 2px solid #16a34a;\n}\nion-footer .total-after-discount ion-input {\n  --color: #15803d;\n  font-weight: 600;\n}\nion-footer ion-item {\n  --background: white;\n  border-radius: 5px;\n  margin: 4px 0;\n}\nion-footer .footer-input-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  padding: 6px 0;\n}\nion-footer .footer-input-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 3px;\n  text-align: center;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .footer-input-item {\n  width: 100%;\n}\nion-footer .footer-input-item ion-input {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-header {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 20px;\n}\nion-footer .discount-type-label {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 11px;\n  margin-bottom: 0;\n  margin-inline-end: 6px;\n  white-space: nowrap;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-footer .discount-segment-container {\n  --background: transparent;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  flex: 1;\n  max-width: 140px;\n}\nion-footer .compact-discount-segment {\n  --background: var(--ion-color-light);\n  border-radius: 14px;\n  padding: 1px;\n  width: 100%;\n  min-height: 24px;\n}\nion-footer .compact-discount-segment .compact-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  --indicator-color: transparent;\n  --border-radius: 12px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  min-height: 22px;\n  font-size: 10px;\n}\nion-footer .compact-discount-segment .compact-segment-button ion-label {\n  font-weight: 500;\n  margin: 0;\n}\nion-footer .discount-input {\n  margin-top: 3px;\n  width: 100%;\n}\nion-footer .discount-input ion-input {\n  text-align: center;\n  font-size: 13px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\nion-footer .discount-input .discount-note {\n  font-size: 11px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-section ion-note {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-footer .discount-radio-container {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-footer .discount-radio-container .inline-radio-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-radio {\n  margin: 0;\n  --color: var(--ion-color-medium);\n  --color-checked: var(--ion-color-primary);\n}\nion-footer .discount-radio-container .inline-radio-group .radio-option ion-label {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  white-space: nowrap;\n}\n/* Responsive footer for mobile */\n@media (max-width: 768px) {\n  ion-footer ion-grid {\n    padding: 0;\n  }\n  ion-footer ion-col {\n    padding: 0 3px;\n  }\n  ion-footer .footer-input-container {\n    padding: 4px 0;\n  }\n  ion-footer .footer-input-label,\nion-footer .discount-type-label {\n    font-size: 9px;\n    height: 12px;\n    margin-bottom: 2px;\n  }\n  ion-footer .discount-header {\n    margin-bottom: 2px;\n    height: 22px;\n  }\n  ion-footer .footer-input-item ion-input,\nion-footer .discount-input ion-input {\n    font-size: 11px;\n    --padding-top: 5px;\n    --padding-bottom: 5px;\n  }\n  ion-footer .discount-segment-container {\n    max-width: 110px;\n  }\n  ion-footer .compact-discount-segment {\n    min-height: 20px;\n    border-radius: 12px;\n    padding: 1px;\n  }\n  ion-footer .compact-discount-segment .compact-segment-button {\n    min-height: 18px;\n    font-size: 8px;\n    --border-radius: 10px;\n    --padding-start: 3px;\n    --padding-end: 3px;\n  }\n  ion-footer ion-button {\n    --padding-start: 0;\n    --padding-end: 0;\n    font-size: 10px;\n    height: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLHNDQUFBO0VBQ0EsY0FBQTtBQUNOO0FBQ007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFHUTtFQUNFLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURWO0FBR1U7RUFDRSxjQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUtRO0VBQ0Usc0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFIVjtBQUtVO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUhaO0FBV0U7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBUko7QUFXRTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQVJOO0FBVU07RUFDSSxrQkFBQTtBQVBWO0FBU007RUFBTyxtQkFBQTtBQUxiO0FBT007RUFBTSxrQkFBQTtBQUhaO0FBT0U7RUFDRSxZQUFBO0FBSko7QUFPRztFQUNDLDhCQUFBO0FBSko7QUFNRztFQUNDLDRCQUFBO0FBSEo7QUFLRTtFQUNFLGtCQUFBO0FBRko7QUFJRTtFQUNFLHlCQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUk7RUFDSyxrQkFBQTtFQUNILFdBQUE7RUFDQSxZQUFBO0FBRE47QUFJSTtFQUNFLHlCQUFBO0FBRE47QUFHSTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFNekc7QUFISTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFNTjtBQUhFO0VBQ0Us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ICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTk5OyAvLyBIaWdoIGVub3VnaCB0byBzdGF5IGFib3ZlIGNvbnRlbnQgYnV0IGJlbG93IHN5c3RlbSBtb2RhbHMgKHVzdWFsbHkgMTAwMCspXHJcbiAgICBcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICBcclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tYnV0dG9uc1tzbG90PVwiZW5kXCJdIHtcclxuICAgICAgICAuaGVhZGVyLWRhdGUtaXRlbSB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuaGVhZGVyLWRhdGUtaW5wdXQge1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFkanVzdCBjb250ZW50IHBhZGRpbmcgZm9yIGZpeGVkIGhlYWRlciBhbmQgZm9vdGVyXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogNTZweDsgLy8gQXBwcm94aW1hdGUgaGVpZ2h0IG9mIGlvbi1oZWFkZXJcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEyMHB4OyAvLyBBcHByb3hpbWF0ZSBoZWlnaHQgb2YgZm9vdGVyIChhZGp1c3QgYmFzZWQgb24gYWN0dWFsIGZvb3RlciBoZWlnaHQpXHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0SW5wdXR7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jdXN0LWNhcmR7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cclxuICBcclxuICAgICAgLmhpZGV7dmlzaWJpbGl0eTogaGlkZGVuO31cclxuICAgICAgLmN1c3RSb3d7XHJcbiAgICAgICAgLy8gIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgLmJub25le1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAgLnJlZHtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpIFxyXG4gICB9XHJcbiAgIC5kYXJrb3tcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaylcclxuICAgfVxyXG4gIGlvbi1wb3BvdmVye1xyXG4gICAgLS1vZmZzZXQteSA6IC0zMHB4XHJcbiAgfVxyXG4gIC5jdXN0SW5we1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwLjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAgXHJcbiAgICAudGFibGV7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMTJweDtcclxuICAgIH1cclxuICBcclxuICAgIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgICB9XHJcbiAgICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XHJcbiAgICBcclxuICAgIC8vIFJpZ2h0IGFsaWduIGl0ZW0gbmFtZSBjb2x1bW5cclxuICAgIHRkOm50aC1jaGlsZCgyKSwgdGg6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgLnRhYmxlLWNhcmQtaGVhZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgXHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgXHJcbiAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tY29sW3NpemU9XCJhdXRvXCJdIHtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgLS1jb2xvci1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgICAgICAgIFxyXG4gICAgLmRpc2NvdW50LXNlY3Rpb24ge1xyXG4gICAgaW9uLW5vdGUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgXHJcbiAgICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAyNHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgIC5yYWRpby1vcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBcclxuICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBbHRlcm5hdGl2ZSBjb21wYWN0IHZlcnNpb24gKGlmIHlvdSBwcmVmZXIgZXZlbiBtb3JlIGNvbXBhY3QpXHJcbiAgLmNvbXBhY3QtcmFkaW8tc3R5bGUge1xyXG4gICAgLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XHJcbiAgICAgIC0tbWluLWhlaWdodDogNDhweDtcclxuICAgICAgXHJcbiAgICAgIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5yYWRpby1vcHRpb24ge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tc2VnbWVudCB7IFxyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIFxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgbWluLWhlaWdodDogMjhweDtcclxuICAgICAgXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRpc2NvdW50LXNlY3Rpb24ge1xyXG4gICAgaW9uLW5vdGUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgXHJcbiAgICAuaW5saW5lLXJhZGlvLWdyb3VwIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAyNHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgIC5yYWRpby1vcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBcclxuICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGlzY291bnQtcmFkaW8tY29udGFpbmVyIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICBcclxuICAgIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDI0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgLnJhZGlvLW9wdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJUTCBJbnB1dCBzdHlsaW5nIGZvciBBcmFiaWMgbGFiZWxzXHJcbiAgLnJ0bC1pbnB1dCB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIFxyXG4gICAgaW9uLWxhYmVsLmZsb2F0LXJpZ2h0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wICFpbXBvcnRhbnQ7XHJcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgICYubGFiZWwtZmxvYXRpbmcge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTRweCkgc2NhbGUoMC44MikgIWltcG9ydGFudDtcclxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1pbnB1dC50ZXh0LXJpZ2h0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlyZWN0aW9uOiBsdHI7IC8vIEtlZXAgbnVtYmVycyBMVFIgZm9yIGJldHRlciByZWFkYWJpbGl0eVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFsdGVybmF0aXZlIGFwcHJvYWNoIGlmIHRoZSBhYm92ZSBkb2Vzbid0IHdvcmsgcGVyZmVjdGx5XHJcbiAgLmN1c3RvbS1ydGwtaW5wdXQge1xyXG4gICAgLml0ZW0tbmF0aXZlIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBvcmRlcjogMjtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIG9yZGVyOiAxO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgb3JkZXI6IDM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFkZCBzdHlsZXMgZm9yIHRoZSB0b3RhbCBhZnRlciBkaXNjb3VudCBmaWVsZCBhbmQgcHJvZ3Jlc3Mgc3RlcHBlclxyXG4gIC50b3RhbC1hZnRlci1kaXNjb3VudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMGZkZjQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTZhMzRhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIFxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgLS1jb2xvcjogIzE1ODAzZDtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBNb2RhbCBzdHlsaW5nXHJcbiAgaW9uLW1vZGFsIHtcclxuICAgIC0taGVpZ2h0OiA5MCU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEluc3VmZmljaWVudCBTdG9jayBNb2RhbCBTdHlsaW5nXHJcbiAgLmluc3VmZmljaWVudC1zdG9jay1tb2RhbCB7XHJcbiAgICAtLWhlaWdodDogODB2aDtcclxuICAgIC0td2lkdGg6IDkwdnc7XHJcbiAgICAtLW1heC13aWR0aDogNjAwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAtLWhlaWdodDogOTV2aDtcclxuICAgICAgLS13aWR0aDogOTV2dztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gVG9wIENhcmQgT3JnYW5pemF0aW9uIFN0eWxpbmdcclxuICAudG9wLWNhcmQtcm93IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMTZweDsgLy8gUmVwbGFjZSBvZmZzZXQgd2l0aCBnYXBcclxuICAgIFxyXG4gICAgLmFjY291bnQtY29sdW1uLFxyXG4gICAgLmludm9pY2UtdHlwZS1jb2x1bW4sXHJcbiAgICAuY2F0ZWdvcnktY29sdW1uLFxyXG4gICAgLmRhdGUtY29tbWVudC1jb2x1bW4sXHJcbiAgICAuZGF0ZS1jb2x1bW4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIFxyXG4gICAgICAuY29sdW1uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4OyAvLyBSZWR1Y2VkIG1hcmdpblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7IC8vIEZpeGVkIGhlaWdodCBmb3IgY29uc2lzdGVudCBhbGlnbm1lbnRcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBbGlnbiBhbGwgZm9ybSBjb250ZW50IGF0IHRoZSBzYW1lIGxldmVsXHJcbiAgICAuYWNjb3VudC1jb2x1bW4ge1xyXG4gICAgICBhcHAtYWNjb3VudC1zZWxlY3RvciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW52b2ljZS10eXBlLWNvbHVtbiB7XHJcbiAgICAgIC5pbnZvaWNlLXR5cGUtc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAuY29tcGFjdC1zZWdtZW50IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7IC8vIEluY3JlYXNlZCBoZWlnaHQgZm9yIGJldHRlciBhbGlnbm1lbnRcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2F0ZWdvcnktY29sdW1uIHtcclxuICAgICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbXBhY3Qtc2VnbWVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4OyAvLyBJbmNyZWFzZWQgaGVpZ2h0IGZvciBiZXR0ZXIgYWxpZ25tZW50XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRhdGUtY29tbWVudC1jb2x1bW4ge1xyXG4gICAgICAuY29tbWVudC1pbnB1dCB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4OyAvLyBNYXRjaCBvdGhlciBpbnB1dHNcclxuICAgICAgICBcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kYXRlLWNvbHVtbiB7XHJcbiAgICAgIC5kYXRlLWlucHV0IHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7IC8vIE1hdGNoIG90aGVyIGlucHV0c1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgICAuY2F0ZWdvcnktY29sdW1uIHtcclxuICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAuY29sdW1uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgLy8gUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRvcC1jYXJkLXJvdyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIFxyXG4gICAgICAuYWNjb3VudC1jb2x1bW4sXHJcbiAgICAgIC5pbnZvaWNlLXR5cGUtY29sdW1uLFxyXG4gICAgICAuY2F0ZWdvcnktY29sdW1uLFxyXG4gICAgICAuZGF0ZS1jb21tZW50LWNvbHVtbiB7XHJcbiAgICAgICAgc2l6ZTogMTI7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gVGFibGUgY29udGFpbmVyIGFuZCBzZWFyY2ggc3R5bGVzXHJcbiAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgLnNlYXJjaC1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIFxyXG4gICAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc2VhcmNoLW5hdmlnYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDRweDtcclxuICAgICAgICBcclxuICAgICAgICAuc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgLS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBUYWJsZSByb3cgaGlnaGxpZ2h0aW5nXHJcbiAgdHIuc2VhcmNoLW1hdGNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLnNlYXJjaC1oaWdobGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE5MywgNywgMC40KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gIH1cclxuICBcclxuICAvLyBIaWdobGlnaHQgdGV4dFxyXG4gIG1hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgQ0FURUdPUlkgU0VMRUNUT1IgU1RZTEVTIC0gRnJvbSBzdGF0ZW1lbnQyXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICBcclxuICAuY2F0ZWdvcnktc2VjdGlvbixcclxuICAuaW52b2ljZS10eXBlLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIFxyXG4gICAgLmZpZWxkLWxhYmVsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29tcGFjdC1zZWdtZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWluLWhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gIFxyXG4gICAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICY6aG92ZXI6bm90KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIG1vYmlsZSAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbXBhY3Qtc2VnbWVudCB7XHJcbiAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2F0ZWdvcnktY29sdW1uIHtcclxuICAgICAgLmNvbHVtbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgICAgLmZpZWxkLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogRm9vdGVyIHN0eWxlcyAqL1xyXG4gIGlvbi1mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTk5OyAvLyBIaWdoIGVub3VnaCB0byBzdGF5IGFib3ZlIGNvbnRlbnQgYnV0IGJlbG93IHN5c3RlbSBtb2RhbHNcclxuICAgIFxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvdGFsLWFmdGVyLWRpc2NvdW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjBmZGY0O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTZhMzRhO1xyXG4gICAgICBcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAtLWNvbG9yOiAjMTU4MDNkO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb290ZXItaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9vdGVyLWlucHV0LWxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvb3Rlci1pbnB1dC1pdGVtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXNjb3VudC1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXNjb3VudC10eXBlLWxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW4taW5saW5lLWVuZDogNnB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGlzY291bnQtc2VnbWVudC1jb250YWluZXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29tcGFjdC1kaXNjb3VudC1zZWdtZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAyNHB4O1xyXG4gICAgICBcclxuICAgICAgLmNvbXBhY3Qtc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XHJcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXNjb3VudC1pbnB1dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmRpc2NvdW50LW5vdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXNjb3VudC1zZWN0aW9uIHtcclxuICAgICAgaW9uLW5vdGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpc2NvdW50LXJhZGlvLWNvbnRhaW5lciB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgXHJcbiAgICAgIC5pbmxpbmUtcmFkaW8tZ3JvdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMjRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBcclxuICAgICAgICAucmFkaW8tb3B0aW9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogUmVzcG9uc2l2ZSBmb290ZXIgZm9yIG1vYmlsZSAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgaW9uLWZvb3RlciB7XHJcbiAgICAgIGlvbi1ncmlkIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWlucHV0LWxhYmVsLFxyXG4gICAgICAuZGlzY291bnQtdHlwZS1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmRpc2NvdW50LWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1pbnB1dC1pdGVtLFxyXG4gICAgICAuZGlzY291bnQtaW5wdXQge1xyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGlzY291bnQtc2VnbWVudC1jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jb21wYWN0LWRpc2NvdW50LXNlZ21lbnQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbXBhY3Qtc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 36196:
/*!********************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>طلب شراء جديد</ion-title>\n    <!-- Date in header -->\n    <ion-buttons slot=\"end\">\n      <app-currency-switcher></app-currency-switcher>\n      <ion-item class=\"header-date-item\">\n        <ion-input type=\"date\" [(ngModel)]=\"payInvo.pay_date\" class=\"header-date-input\"></ion-input>\n      </ion-item>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"ion-no-padding ion-no-margin\">\n      <ion-grid *ngIf=\"payInvo\">\n        <ion-row dir=\"rtl\" class=\"top-card-row\">\n          <!-- First Column: Account Selector -->\n          <ion-col size=\"4\" offset=\"3\" class=\"account-column\">\n            <app-account-selector\n              accountType=\"supplier\"\n              placeholder=\"اختر حساب المورد\"\n              label=\"حساب المورد\"\n              [store_info]=\"store_info\"\n              [year]=\"year\"\n              [showAddButton]=\"true\"\n              [(ngModel)]=\"selectedAccount\"\n              (accountSelected)=\"onAccountSelected($event)\"\n              (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n            </app-account-selector>\n          </ion-col>\n\n          <!-- Comment Column: Note field in same row -->\n          <ion-col size=\"4\" class=\"date-comment-column\">\n            <ion-label class=\"column-label\">ملاحظة</ion-label>\n            <ion-item class=\"custInput comment-input\">\n              <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\" [disabled]=\"isLoading()\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <ion-grid  *ngIf=\"payInvo\" >\n      <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\n        <ion-col size=\"11\" class=\"ion-no-padding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n              <app-item-selector\n                [items]=\"items\"\n                [loadingItems]=\"loadingItems\"\n                [searchLang]=\"searchLang\"\n                [store_info]=\"store_info\"\n                [year]=\"year\"\n                parentPage=\"purchase-order\"\n                [enablePriceUpdateConfirmation]=\"true\"\n                [payRef]=\"payInvo.pay_ref\"\n                [showQuantityInput]=\"true\"\n                [showPriceInput]=\"false\"\n                [showPerchPriceInput]=\"true\"\n                placeholder=\"اختر الصنف\"\n                (itemSelected)=\"onItemSelected($event)\"\n                (itemAdded)=\"onItemAdded($event)\"\n                (refreshItems)=\"refresh('item')\">\n              </app-item-selector>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n              <ion-card-header color=\"primary\" class=\"table-card-header\">\n                <ion-card-title>\n                  <ion-row class=\"ion-align-items-center\">\n                    <ion-col size=\"3\">\n                      <span>قائمة الأصناف</span>\n                    </ion-col>\n                    <ion-col size=\"6\" class=\"ion-text-center\">\n                      <div class=\"search-container\">\n                        <ion-item lines=\"none\" class=\"search-item\">\n                          <ion-icon name=\"search\" slot=\"start\" color=\"medium\"></ion-icon>\n                          <ion-input\n                            [(ngModel)]=\"searchTerm\"\n                            (ionInput)=\"onSearchTermChange()\"\n                            placeholder=\"البحث في الأصناف...\"\n                            clearInput=\"true\"\n                            class=\"search-input\">\n                          </ion-input>\n                          <div slot=\"end\" class=\"search-navigation\" *ngIf=\"searchMatches.length > 0\">\n                            <span class=\"search-results\">{{ getSearchResultText() }}</span>\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('prev')\">\n                              <ion-icon name=\"chevron-up\"></ion-icon>\n                            </ion-button>\n                            <ion-button fill=\"clear\" size=\"small\" (click)=\"navigateSearch('next')\">\n                              <ion-icon name=\"chevron-down\"></ion-icon>\n                            </ion-button>\n                          </div>\n                        </ion-item>\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"ion-text-end\">\n                      <ion-button\n                        fill=\"clear\"\n                        color=\"light\"\n                        size=\"small\"\n                        (click)=\"sortItemListAlphabetically()\"\n                        [disabled]=\"!itemList || itemList.length === 0\"\n                      >\n                        <ion-icon name=\"list\" slot=\"start\"></ion-icon>\n                        {{ isItemListSorted ? 'ترتيب أصلي' : 'ترتيب أبجدي' }}\n                      </ion-button>\n                      <ion-button\n                        fill=\"clear\"\n                        color=\"light\"\n                        size=\"small\"\n                        (click)=\"openPriceAdjustmentDialog()\"\n                        [disabled]=\"!itemList || itemList.length === 0\"\n                      >\n                        <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n                        تعديل الأسعار\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-title>\n              </ion-card-header>\n              <div class=\"table-container\">\n               <table class=\"table\">\n                 <tr>\n                  <th>no</th>\n                  <th>الصنف</th>\n                  <th>الكمية</th>\n                  <th>سعر الشراء ({{ getCurrencySymbol() }})</th>\n                  <th>المجموع ({{ getCurrencySymbol() }})</th>\n                  <th></th>\n                 </tr>\n                 <tr *ngFor=\"let item of getDisplayItemList() ; let i = index\"\n                     (dblclick)=\"qtyClick(i)\"\n                     [attr.data-index]=\"i\"\n                     [class.search-highlight]=\"isHighlighted(i)\"\n                     [class.search-match]=\"isSearchMatch(i)\">\n                  <td>{{i+1}}</td>\n                  <td>\n                    <span [innerHTML]=\"highlightText(item.item_name, searchTerm)\"></span>\n                  </td>\n                  <td >\n                    <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                 <td>\n                   <ion-text *ngIf=\"showMe != i\">{{item.perch_price | currencyDisplay:'SDG':false}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.perch_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                  <td>{{item.tot | currencyDisplay:'SDG':false}}</td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>\n                 </tr>\n               </table>\n              </div>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n<!-- Footer with totals and action buttons -->\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-align-items-center\">\n        <!-- Discount controls on the right side -->\n        <ion-col size=\"8\" class=\"ion-text-end\">\n          <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">إجمالي المبلغ</ion-label>\n                <ion-item class=\"custInput footer-input-item\">\n                  <ion-input [value]=\"payInvo.tot_pr | currencyDisplay\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col class=\"footer-input-container\">\n                <div class=\"discount-header\">\n                  <div dir=\"rtl\" class=\"discount-segment-container\">\n                    <ion-segment [(ngModel)]=\"discountType\" (ionChange)=\"onDiscountTypeChange($event)\" class=\"compact-discount-segment\" [disabled]=\"isLoading()\">\n                      <ion-segment-button value=\"percentage\" class=\"compact-segment-button\">\n                        <ion-label>نسبة الخصم%</ion-label>\n                      </ion-segment-button>\n                      <ion-segment-button value=\"amount\" class=\"compact-segment-button\">\n                        <ion-label>مبلغ الخصم</ion-label>\n                      </ion-segment-button>\n                    </ion-segment>\n                  </div>\n                </div>\n                <!-- Percentage Discount Input -->\n                <ion-item *ngIf=\"discountType === 'percentage'\" class=\"rtl-input custInput discount-input\">\n                  <ion-input\n                    type=\"number\"\n                    [(ngModel)]=\"discountPerc\"\n                    (ionInput)=\"onPercentageDiscountChange($event)\"\n                    placeholder=\"نسبة الخصم %\"\n                    [disabled]=\"isLoading()\">\n                  </ion-input>\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountAmount > 0\" class=\"discount-note\">\n                    {{ calculatedDiscountAmount | currencyDisplay }}\n                  </ion-note>\n                </ion-item>\n\n                <!-- Amount Discount Input -->\n                <ion-item *ngIf=\"discountType === 'amount'\" class=\"rtl-input custInput discount-input\">\n                  <ion-input\n                    type=\"number\"\n                    [(ngModel)]=\"discountAmount\"\n                    (ionInput)=\"onAmountDiscountChange($event)\"\n                     placeholder=\"مبلغ الخصم\"\n                     [disabled]=\"isLoading()\">\n                  </ion-input>\n                  <ion-note slot=\"end\" *ngIf=\"calculatedDiscountPerc > 0\" class=\"discount-note\">\n                    {{ calculatedDiscountPerc.toFixed(2) }}%\n                  </ion-note>\n                </ion-item>\n              </ion-col>\n              <ion-col class=\"footer-input-container\">\n                <ion-label class=\"footer-input-label\">المجموع بعد الخصم</ion-label>\n                <ion-item class=\"custInput total-after-discount footer-input-item\">\n                  <ion-input [value]=\"(+payInvo.tot_pr - +payInvo.discount) | currencyDisplay\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n\n        <!-- Action buttons on the left side -->\n        <ion-col size=\"4\">\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-end\">\n              <ion-col size=\"6\">\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\" (click)=\"save()\" [disabled]=\"isLoading()\">\n                  <ion-spinner *ngIf=\"isSaving\" slot=\"start\" name=\"dots\"></ion-spinner>\n                  <ion-label class=\"ion-text-center\">{{ isSaving ? currentLoadingMessage : 'حفظ' }}</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_purchase-order_purchase-order_module_ts.js.map
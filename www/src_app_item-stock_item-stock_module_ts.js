"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_item-stock_item-stock_module_ts"],{

/***/ 50572:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 71666);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 81661);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


/***/ }),

/***/ 76465:
/*!*********************************************************!*\
  !*** ./src/app/item-stock/item-stock-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemStockPageRoutingModule": () => (/* binding */ ItemStockPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _item_stock_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-stock.page */ 80170);




const routes = [
    {
        path: '',
        component: _item_stock_page__WEBPACK_IMPORTED_MODULE_0__.ItemStockPage
    }
];
let ItemStockPageRoutingModule = class ItemStockPageRoutingModule {
};
ItemStockPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemStockPageRoutingModule);



/***/ }),

/***/ 5221:
/*!*************************************************!*\
  !*** ./src/app/item-stock/item-stock.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemStockPageModule": () => (/* binding */ ItemStockPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 27533);
/* harmony import */ var _item_stock_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-stock-routing.module */ 76465);
/* harmony import */ var _item_stock_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-stock.page */ 80170);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);










let ItemStockPageModule = class ItemStockPageModule {
};
ItemStockPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_3__.ShareModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _item_stock_routing_module__WEBPACK_IMPORTED_MODULE_1__.ItemStockPageRoutingModule
        ],
        declarations: [_item_stock_page__WEBPACK_IMPORTED_MODULE_2__.ItemStockPage]
    })
], ItemStockPageModule);



/***/ }),

/***/ 80170:
/*!***********************************************!*\
  !*** ./src/app/item-stock/item-stock.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemStockPage": () => (/* binding */ ItemStockPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _item_stock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-stock.page.html?ngResource */ 50427);
/* harmony import */ var _item_stock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-stock.page.scss?ngResource */ 99675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50572);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 12606);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 96671);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item-modal/item-modal.page */ 3671);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 1670);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ 18232);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/export.service */ 79002);











// import * as XLSX from 'xlsx'; 
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';




 // Add 

let ItemStockPage = class ItemStockPage {
    constructor(router, file, fileOpener, behavApi, storage, alertController, modalController, loadingController, datePipe, api, toast, exportService) {
        this.router = router;
        this.file = file;
        this.fileOpener = fileOpener;
        this.behavApi = behavApi;
        this.storage = storage;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.exportService = exportService;
        this.isActionPopoverOpen = false;
        this.selectedActionItem = null;
        this.isOpen = false;
        this.isClearing = false;
        this.notifArr = [];
        this.showNotif = false;
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.isOpenNotif = false;
        this.newNotif = false;
        // New sorting system
        this.currentSort = { column: '', direction: null };
        this.items = [];
        this.itemsAll = [];
        this.searcResult = [];
        this.searchMode = false;
        this.searchTerm = "";
        this.isCreatingSales = false;
        this.store_tot = 0;
        this.cost_tot = 0;
        this.store_fltTot = 0;
        this.loading = false;
        this.loadingTot = false;
        this.partnoFilterArray = [];
        this.filterArrayOrign = [];
        this.sortingArrayOrign = [];
        this.filterArray = [];
        this.brandFilterArray = [];
        this.brandList = [];
        this.modelList = [];
        this.itemsLocal = [];
        this.showMe = null;
        this.filterMode = false;
        this.exportMode = false;
        this.showBrand = false;
        this.showMdel = false;
        this.selectedItemsList = [];
        this.fileName = 'items.xlsx';
        this.currentPage = 1;
        this.itemsPerPage = 20; // Default items per page
        this.totalItems = 0;
        this.totalPages = 0;
        this.pageSizeOptions = [10, 20, 50, 100];
        // Available filter options
        this.availableBrands = [];
        this.availableModels = [];
        this.filteredAvailableBrands = [];
        this.filteredAvailableModels = [];
        this.brandSearchTerm = '';
        this.modelSearchTerm = '';
        // Pagination properties
        this.paginatedItems = [];
        this.paginationCurrentPage = 1;
        this.paginationPageSize = 20;
        this.paginationHasMore = false;
        this.paginationLoading = false;
        this.paginationSearchTerm = '';
        this.paginationFilters = {};
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.showPaginatedView = false;
        this.paginationStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
        // All Items view variables
        this.showAllItemsView = false;
        this.allItemsData = [];
        this.loadingAllItems = false;
        this.allItemsStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
        // Search functionality variables
        this.showSearchView = false;
        this.searchData = [];
        this.loadingSearch = false;
        this.searchStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
        this.currentSearchTerm = '';
        // New separate totals variables
        this.stockValuePayPrice = 0;
        this.stockValuePerchPrice = 0;
        this.loadingStockTotals = false;
        this.store_info = { id: "", store_ref: "", store_name: "", location: "" };
        this.selectedItem = { id: null, item_name: "", model: "", part_no: "", min_qty: 0, brand: "", pay_price: 0, perch_price: 0, item_unit: "", item_desc: "", item_parcode: "", aliasEn: "" };
        this.selectedItem2 = { id: null, item_name: "", model: "", part_no: "", min_qty: 0, brand: "", pay_price: 0, perch_price: 0, item_unit: "", item_desc: "", item_parcode: "", aliasEn: "" };
        this.colSetting = { id: true, item_name: true, model: true, part_no: true, min_qty: true, brand: true, pay_price: true, perch_price: true, item_unit: true, item_desc: true, item_parcode: true, profit: true, instock: true, total: true, lastSold: true, edit: true, delete: true, aliasEn: true };
        this.getAppInfo();
        // Initialize filter state
        this.filterState = {
            brand: {
                isActive: false,
                isVisible: false,
                selectedBrands: []
            },
            model: {
                isActive: false,
                isVisible: false,
                selectedModels: []
            },
            quantity: {
                isActive: false,
                isVisible: false,
                minQuantity: 0,
                maxQuantity: 0,
                filterType: 'range'
            }
        };
        // Initialize search debouncing
        this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)()).subscribe(searchTerm => {
            this.paginationSearchTerm = searchTerm;
            this.resetPaginationAndReload();
        });
    }
    onKeydownHandler(event) {
        this.hideMe('3');
    }
    ///
    ///
    toggleItemSelection(item, event) {
        if (event.detail.checked) {
            if (!this.isItemSelected(item)) {
                this.selectedItemsList.push(item);
            }
        }
        else {
            this.selectedItemsList = this.selectedItemsList.filter(selectedItem => selectedItem.id !== item.id);
        }
    }
    isItemSelected(item) {
        return this.selectedItemsList.some(selectedItem => selectedItem.id === item.id);
    }
    toggleSelectAll(event) {
        const currentData = this.getCurrentViewData();
        if (event.detail.checked) {
            // Select all items in current view
            currentData.forEach(item => {
                if (!this.isItemSelected(item)) {
                    this.selectedItemsList.push(item);
                }
            });
        }
        else {
            // Deselect all items in current view
            currentData.forEach(item => {
                this.selectedItemsList = this.selectedItemsList.filter(selectedItem => selectedItem.id !== item.id);
            });
        }
    }
    isAllSelected() {
        const currentData = this.getCurrentViewData();
        return currentData.length > 0 && currentData.every(item => this.isItemSelected(item));
    }
    isSomeSelected() {
        const currentData = this.getCurrentViewData();
        const selectedInCurrentView = currentData.filter(item => this.isItemSelected(item));
        return selectedInCurrentView.length > 0 && selectedInCurrentView.length < currentData.length;
    }
    // For filtered items
    toggleSelectAllFiltered(event) {
        if (event.detail.checked) {
            this.filterArray.forEach(item => {
                if (!this.isItemSelected(item)) {
                    this.selectedItemsList.push(item);
                }
            });
        }
        else {
            this.filterArray.forEach(item => {
                this.selectedItemsList = this.selectedItemsList.filter(selectedItem => selectedItem.id !== item.id);
            });
        }
    }
    isAllFilteredSelected() {
        return this.filterArray.length > 0 && this.filterArray.every(item => this.isItemSelected(item));
    }
    isSomeFilteredSelected() {
        return this.selectedItemsList.length > 0 && !this.isAllFilteredSelected();
    }
    // For search results
    toggleSelectAllSearch(event) {
        const searchResults = this.itemsAll.filter(item => {
            var _a, _b, _c, _d;
            return ((_a = item.item_name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                ((_b = item.item_desc) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                ((_c = item.part_no) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                ((_d = item.brand) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes(this.searchTerm.toLowerCase()));
        });
        if (event.detail.checked) {
            searchResults.forEach(item => {
                if (!this.isItemSelected(item)) {
                    this.selectedItemsList.push(item);
                }
            });
        }
        else {
            searchResults.forEach(item => {
                this.selectedItemsList = this.selectedItemsList.filter(selectedItem => selectedItem.id !== item.id);
            });
        }
    }
    isAllSearchSelected() {
        const searchResults = this.itemsAll.filter(item => {
            var _a, _b, _c, _d;
            return ((_a = item.item_name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                ((_b = item.item_desc) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                ((_c = item.part_no) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                ((_d = item.brand) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes(this.searchTerm.toLowerCase()));
        });
        return searchResults.length > 0 && searchResults.every(item => this.isItemSelected(item));
    }
    isSomeSearchSelected() {
        return this.selectedItemsList.length > 0 && !this.isAllSearchSelected();
    }
    clearSelection() {
        this.selectedItemsList = [];
    }
    // Helper method to get current view's data array
    getCurrentViewData() {
        if (this.showSearchView) {
            return this.searchData || [];
        }
        else if (this.showAllItemsView) {
            return this.allItemsData || [];
        }
        else if (this.filterMode || this.hasActiveFilters()) {
            return this.filterArray || [];
        }
        else if (this.paginatedItems && this.paginatedItems.length > 0) {
            // Pagination view
            return this.paginatedItems;
        }
        else {
            // Fallback to items array if pagination is not loaded yet
            return this.items || [];
        }
    }
    clearSelectionWithAnimation() {
        this.isClearing = true;
        // Add fade-out class for smooth transition
        const selectedBar = document.querySelector('.selected-items-bar');
        if (selectedBar) {
            selectedBar.classList.add('fade-out');
        }
        // Clear selection after animation
        setTimeout(() => {
            this.selectedItemsList = [];
            this.isClearing = false;
        }, 300);
    }
    createPurchaseFromSelected() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedItemsList.length === 0) {
                // Show toast message
                const toast = yield this.toast.create({
                    message: 'يرجى تحديد عناصر أولاً',
                    duration: 2000,
                    color: 'warning'
                });
                toast.present();
                return;
            }
            // Prepare items for purchase invoice
            const purchaseItems = this.selectedItemsList.map(item => ({
                id: item.id,
                item_name: item.item_name,
                item_desc: item.item_desc,
                part_no: item.part_no,
                brand: item.brand,
                model: item.model,
                item_unit: item.item_unit,
                perch_price: item.perch_price || 0,
                pay_price: item.pay_price || 0,
                qty: item.quantity < 0 ? Math.abs(item.quantity) : (item.quantity === 0 ? 1 : item.quantity),
                tot: item.perch_price || 0,
                availQty: item.quantity || 0,
                aliasEn: item.aliasEn
            }));
            // Navigate to purchase page with selected items
            this.router.navigate(['folder/purchase'], {
                queryParams: {
                    status: 'newInvoFromItemsPage',
                    selectedItemsList: JSON.stringify(purchaseItems)
                }
            });
            // Clear selection after navigation
            this.clearSelection();
        });
    }
    createTsiaFromSelected() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedItemsList.length === 0) {
                const toast = yield this.toast.create({
                    message: 'يرجى تحديد عناصر أولاً',
                    duration: 2000,
                    color: 'warning',
                    cssClass: 'warning-toast'
                });
                toast.present();
                return;
            }
            // Set loading state
            const salesItems = this.selectedItemsList.map(item => ({
                id: item.id,
                item_name: item.item_name,
                item_desc: item.item_desc,
                part_no: item.part_no,
                brand: item.brand,
                model: item.model,
                item_unit: item.item_unit,
                perch_price: item.perch_price || 0,
                pay_price: item.pay_price || 0,
                qty: item.quantity,
                tot: item.pay_price || 0,
                availQty: item.quantity || 0,
                aliasEn: item.aliasEn
            }));
            // Navigate to sales page
            yield this.router.navigate(['folder/tswia'], {
                queryParams: {
                    status: 'newInvoFromItemsPage',
                    selectedItemsList: JSON.stringify(salesItems)
                }
            });
            // Clear selection
            this.clearSelection();
            // Show loading
        });
    }
    createSalesFromSelected() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedItemsList.length === 0) {
                const toast = yield this.toast.create({
                    message: 'يرجى تحديد عناصر أولاً',
                    duration: 2000,
                    color: 'warning',
                    cssClass: 'warning-toast'
                });
                toast.present();
                return;
            }
            // Set loading state
            const salesItems = this.selectedItemsList.map(item => ({
                id: item.id,
                item_name: item.item_name,
                item_desc: item.item_desc,
                part_no: item.part_no,
                brand: item.brand,
                model: item.model,
                item_unit: item.item_unit,
                perch_price: item.perch_price || 0,
                pay_price: item.pay_price || 0,
                qty: item.quantity < 0 ? Math.abs(item.quantity) : (item.quantity === 0 ? 1 : item.quantity),
                tot: item.pay_price || 0,
                availQty: item.quantity || 0,
                aliasEn: item.aliasEn
            }));
            // Navigate to sales page
            yield this.router.navigate(['folder/sales'], {
                queryParams: {
                    status: 'newInvoFromItemsPage',
                    selectedItemsList: JSON.stringify(salesItems)
                }
            });
            // Clear selection
            this.clearSelection();
            // Show loading
        });
    }
    ///
    presentActionPopover(event, item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            // Debug logging
            console.log('presentActionPopover called with item:', item);
            console.log('item.id in presentActionPopover:', item === null || item === void 0 ? void 0 : item.id);
            this.selectedActionItem = item;
            this.actionPopover.event = event;
            this.isActionPopoverOpen = true;
        });
    }
    viewItemReport(item) {
        this.isActionPopoverOpen = false;
        let navigationExtras = {
            queryParams: {
                item: JSON.stringify(item)
            }
        };
        this.router.navigate(['folder/items-report'], navigationExtras);
    }
    editItem(item) {
        this.isActionPopoverOpen = false;
        // Debug logging to identify the issue
        console.log('editItem called with item:', item);
        console.log('item.id:', item === null || item === void 0 ? void 0 : item.id);
        // Check if item exists and has an id
        if (!item) {
            this.presentToast('لم يتم العثور على العنصر المحدد', 'danger');
            return;
        }
        const itemId = item.id || item.item_id;
        if (!itemId) {
            console.error('Item ID not found. Item properties:', Object.keys(item));
            this.presentToast('معرف العنصر غير موجود', 'danger');
            return;
        }
        this.presentModal(itemId, 'edit');
    }
    deleteItemPop(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.isActionPopoverOpen = false;
            // Add your delete logic here
            // For example:
            const alert = yield this.alertController.create({
                header: 'تأكيد الحذف',
                message: 'هل أنت متأكد من حذف هذا العنصر؟',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel'
                    },
                    {
                        text: 'حذف',
                        handler: () => {
                            this.deleteItem(item);
                            console.log('Delete item:', item);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteItem(item) {
        //console.log(item)
        this.selectedItem = item;
        if (item.salesQuantity > 0 || item.perchQuantity > 0) {
            this.presentToast('لا يمكن حذف الصنف , توجد كميات في المخزون    ', 'danger');
        }
        else {
            this.delete();
        }
    }
    delete() {
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        this.api.deleteItems(this.selectedItem.id).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.presentToast('تم الحذف بنجاح', 'success');
                this.updateItemArrays(this.selectedItem.id, 'delete');
                // this.saveLogHistory(this.selectedItem , undefined ,'delete')  
                // this.getAllStockItems() //this.getStockItems() 
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
    //
    // Helper function to find item across all table view arrays
    findItemById(id) {
        console.log('findItemById called with id:', id);
        console.log('Current view states:', {
            showSearchView: this.showSearchView,
            showAllItemsView: this.showAllItemsView,
            filterMode: this.filterMode,
            hasActiveFilters: this.hasActiveFilters()
        });
        // Try to find in current view first
        if (this.showSearchView && this.searchData && this.searchData.length > 0) {
            console.log('Searching in searchData, length:', this.searchData.length);
            const found = this.searchData.find(x => x.id == id);
            if (found) {
                console.log('Found in searchData:', found);
                return found;
            }
        }
        if (this.showAllItemsView && this.allItemsData && this.allItemsData.length > 0) {
            console.log('Searching in allItemsData, length:', this.allItemsData.length);
            const found = this.allItemsData.find(x => x.id == id);
            if (found) {
                console.log('Found in allItemsData:', found);
                return found;
            }
        }
        if ((this.filterMode || this.hasActiveFilters()) && this.filterArray && this.filterArray.length > 0) {
            console.log('Searching in filterArray, length:', this.filterArray.length);
            const found = this.filterArray.find(x => x.id == id);
            if (found) {
                console.log('Found in filterArray:', found);
                return found;
            }
        }
        if (this.paginatedItems && this.paginatedItems.length > 0) {
            console.log('Searching in paginatedItems, length:', this.paginatedItems.length);
            const found = this.paginatedItems.find(x => x.id == id);
            if (found) {
                console.log('Found in paginatedItems:', found);
                return found;
            }
        }
        // Fallback to main arrays
        if (this.items && this.items.length > 0) {
            console.log('Searching in items, length:', this.items.length);
            const found = this.items.find(x => x.id == id);
            if (found) {
                console.log('Found in items:', found);
                return found;
            }
        }
        if (this.itemsAll && this.itemsAll.length > 0) {
            console.log('Searching in itemsAll, length:', this.itemsAll.length);
            const found = this.itemsAll.find(x => x.id == id);
            if (found) {
                console.log('Found in itemsAll:', found);
                return found;
            }
        }
        console.log('Item not found in any array');
        return null;
    }
    presentModal(id, status) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (id != 'null' && status == 'edit') {
                const foundItem = this.findItemById(id);
                if (!foundItem) {
                    this.presentToast('لم يتم العثور على العنصر المحدد', 'danger');
                    return;
                }
                //console.log(foundItem);
                this.selectedItem = {
                    id: foundItem.id,
                    item_desc: foundItem.item_desc,
                    model: foundItem.model,
                    item_name: foundItem.item_name,
                    min_qty: foundItem.min_qty,
                    part_no: foundItem.part_no,
                    brand: foundItem.brand,
                    item_unit: foundItem.item_unit,
                    item_parcode: foundItem.item_parcode,
                    pay_price: foundItem.pay_price,
                    perch_price: foundItem.perch_price,
                    aliasEn: foundItem.aliasEn,
                };
                // Create firstq object for the modal
                this.firstq = {
                    id: foundItem.id,
                    item_id: foundItem.id,
                    store_id: (_a = this.store_info) === null || _a === void 0 ? void 0 : _a.id,
                    quantity: foundItem.firstQuantity || 0,
                    fq_year: (_b = this.year) === null || _b === void 0 ? void 0 : _b.id,
                    pay_price: foundItem.pay_price,
                    perch_price: foundItem.perch_price
                };
            }
            const modal = yield this.modalController.create({
                component: _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_3__.ItemModalPage,
                componentProps: {
                    "item": this.selectedItem,
                    "firstq": this.firstq,
                    "colSetting": this.colSetting,
                    "filterArrayOrign": this.filterArrayOrign,
                    "filterArray": this.filterArray,
                    "brandList": this.brandList,
                    "modelList": this.modelList,
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
    didDissmis() {
        this.isOpenNotif = false;
        //console.log('dismissOver')
    }
    presentPopover(e) {
        //console.log('preent me', e)
        this.popoverNotif33.event = e;
        this.isOpenNotif = true;
        this.showNotif = false;
    }
    prClick(i, item) {
        if (this.showMe == i) {
            console.log(i);
        }
        else {
            this.showMe = i;
            this.selectedItem2 = { id: item.id, item_name: item.item_name, model: item.model, part_no: item.part_no, min_qty: item.min_qty, brand: item.brand, pay_price: item.pay_price, perch_price: item.perch_price, item_unit: item.item_unit, item_desc: item.item_desc, item_parcode: item.item_parcode, aliasEn: item.aliasEn, quantity: item.firstQuantity };
        }
    }
    hideMe(i) {
        this.showMe = null;
        this.selectedItem2 = { id: null, item_name: "", model: "", part_no: "", min_qty: 0, brand: "", pay_price: 0, perch_price: 0, item_unit: "", item_desc: "", item_parcode: "", aliasEn: "", quantity: 0 };
    }
    update(mdata) {
        this.presentLoadingWithOptions('جاري تعديل البيانات ...');
        // Remove imageUrl and tax from update data while keeping category_id
        const updateData = Object.assign({}, mdata[0]);
        if ('imageUrl' in updateData)
            delete updateData.imageUrl;
        if ('tax' in updateData)
            delete updateData.tax;
        this.api.updateItem(updateData).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
                this.saveLogHistory(mdata[0], undefined, 'update');
                this.resetPaginationAndReload();
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
    doit() {
        //console.log('hi man ')
    }
    editCell(i, item) {
        this.presentLoadingWithOptions('جاري تعديل البيانات ...');
        // Validate input data
        if (this.selectedItem2.perch_price > 0 && this.selectedItem2.pay_price > 0 && this.selectedItem2.item_name != "") {
            // Update the item via API
            // Remove imageUrl and tax from inline edit data while keeping category_id
            const editData = Object.assign({}, this.selectedItem2);
            if ('imageUrl' in editData)
                delete editData.imageUrl;
            if ('tax' in editData)
                delete editData.tax;
            this.api.updateItem(editData).subscribe(data => {
                //console.log(data)
                let res = data;
                if (data['message'] != 'Post Not Updated') {
                    this.updateFirstq(item);
                    this.loadingController.dismiss();
                    this.presentToast('تم التعديل بنجاح', 'success');
                }
                else {
                    this.presentToast('لم يتم  تعديل البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                    this.loadingController.dismiss();
                }
                this.hideMe(i);
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
                this.hideMe(i);
            }, () => {
                this.hideMe(i);
                this.loadingController.dismiss();
            });
        }
        else {
            this.presentToast("خطأ في الإدخال ", "danger");
            this.loadingController.dismiss();
        }
    }
    updateFirstq(item) {
        console.log(item);
        let ft = {
            "item_id": item.id,
            "quantity": this.selectedItem2.quantity,
            "pay_price": item.pay_price,
            "perch_price": item.perch_price,
            "store_id": this.store_info.id
        };
        this.api.updatfiratqtynew(ft).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.updateItemArrays(item.id);
            }
            else {
                this.presentToast('لم يتم تعديل الكمية الإفتتاحية , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
            // this.getAllStockItems() //this.getStockItems() 
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    payChange(i, item) {
        console.log(item);
        this.selectedItem2.perch_price = +item.pay_price - (.15 * +item.pay_price);
    }
    updateItemArrays(itemId, status) {
        // this.presentLoadingWithOptions('جاري تحديث البيانات ...') 
        // Fetch the updated item from the backend
        if (status == 'delete') {
            // splice the item from all arrays 
            const itemIndex = this.items.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                this.items.splice(itemIndex, 1);
            }
            const itemAllIndex = this.itemsAll.findIndex(item => item.id === itemId);
            if (itemAllIndex !== -1) {
                this.itemsAll.splice(itemAllIndex, 1);
            }
            // Update pagination items if exists
            if (this.paginatedItems && this.paginatedItems.length > 0) {
                const paginatedIndex = this.paginatedItems.findIndex(item => item.id === itemId);
                if (paginatedIndex !== -1) {
                    this.paginatedItems.splice(paginatedIndex, 1);
                }
            }
            // Update search data if exists  
            if (this.searchData && this.searchData.length > 0) {
                const searchIndex = this.searchData.findIndex(item => item.id === itemId);
                if (searchIndex !== -1) {
                    this.searchData.splice(searchIndex, 1);
                }
            }
            // Update all items data if exists
            if (this.allItemsData && this.allItemsData.length > 0) {
                const allItemsIndex = this.allItemsData.findIndex(item => item.id === itemId);
                if (allItemsIndex !== -1) {
                    this.allItemsData.splice(allItemsIndex, 1);
                }
            }
            // Update filter array if exists
            if (this.filterArray && this.filterArray.length > 0) {
                const filterIndex = this.filterArray.findIndex(item => item.id === itemId);
                if (filterIndex !== -1) {
                    this.filterArray.splice(filterIndex, 1);
                }
            }
            this.storage.set('itemsLocal', this.items).then((response) => {
                // Storage updated
            });
        }
        else {
            this.api.getItemById(itemId).subscribe((data) => {
                console.log('data in updateItemArrays', data);
                if (data) {
                    console.log(data['data']['0'], ' emArrays');
                    const updatedItem = data['data']['0'];
                    // Update item in all arrays that contain it
                    // Update items array
                    const itemIndex = this.items.findIndex(item => item.id === itemId);
                    if (itemIndex !== -1) {
                        this.items[itemIndex] = Object.assign(Object.assign({}, this.items[itemIndex]), updatedItem);
                    }
                    // Update itemsAll array
                    const itemAllIndex = this.itemsAll.findIndex(item => item.id === itemId);
                    if (itemAllIndex !== -1) {
                        this.itemsAll[itemAllIndex] = Object.assign(Object.assign({}, this.itemsAll[itemAllIndex]), updatedItem);
                    }
                    // Update pagination items if exists
                    if (this.paginatedItems && this.paginatedItems.length > 0) {
                        const paginatedIndex = this.paginatedItems.findIndex(item => item.id === itemId);
                        if (paginatedIndex !== -1) {
                            this.paginatedItems[paginatedIndex] = Object.assign(Object.assign({}, this.paginatedItems[paginatedIndex]), updatedItem);
                        }
                    }
                    // Update search data if exists  
                    if (this.searchData && this.searchData.length > 0) {
                        const searchIndex = this.searchData.findIndex(item => item.id === itemId);
                        if (searchIndex !== -1) {
                            this.searchData[searchIndex] = Object.assign(Object.assign({}, this.searchData[searchIndex]), updatedItem);
                        }
                    }
                    // Update all items data if exists
                    if (this.allItemsData && this.allItemsData.length > 0) {
                        const allItemsIndex = this.allItemsData.findIndex(item => item.id === itemId);
                        if (allItemsIndex !== -1) {
                            this.allItemsData[allItemsIndex] = Object.assign(Object.assign({}, this.allItemsData[allItemsIndex]), updatedItem);
                        }
                    }
                    // Update filter array if exists
                    if (this.filterArray && this.filterArray.length > 0) {
                        const filterIndex = this.filterArray.findIndex(item => item.id === itemId);
                        if (filterIndex !== -1) {
                            this.filterArray[filterIndex] = Object.assign(Object.assign({}, this.filterArray[filterIndex]), updatedItem);
                        }
                    }
                    this.calculateTotalValue(this.itemsAll);
                    console.log(this.itemsAll, 'all items');
                    this.storage.set('itemsLocal', this.itemsAll).then((response) => {
                        // Storage updated         
                    });
                    // this.presentToast('تم تحديث البيانات بنجاح', 'success');
                }
                else {
                    //this.presentToast('لم يتم العثور على البيانات المحدثة', 'danger');
                }
            }, (err) => {
                console.error(err);
                //this.presentToast('حدث خطأ أثناء تحديث البيانات', 'danger');
            }, () => {
                this.loadingController.dismiss();
            });
        }
    }
    doAfterDissmiss(data) {
        if (data.role == 'edit') {
            //console.log('edit' ,data.data)
            this.update(data.data);
        }
        else if (data.role == 'save') {
            //console.log('save')
            this.save(data.data);
        }
        else if (data.role == 'dele') {
            //console.log('dele') 
            this.delete();
        }
        else if (data.role == 'price' && data.data.status == 'plus') {
            //console.log('plus') 
            this.incresePrice(data.data);
        }
        else if (data.role == 'price' && data.data.status == 'minus') {
            //console.log('plus') 
            this.decreasePrice(data.data);
        }
        else if (data.role == 'settings') {
            //console.log('settings' , data.data) 
            this.setColSetting(data.data);
            //   this.decreasePrice(data.data) 
        }
        else if (data.role == 'filter') {
            if (data.data[4] == 'filter') {
                //console.log('filter' , data.data) 
                this.applyFilter(data.data);
                this.filterArray = data.data[1];
                this.store_fltTot = data.data[1].reduce((acc, obj) => { return acc + (+obj.perch_price * +obj.quantity); }, 0);
            }
            else if (data.data[4] == 'clear') {
                this.removeFilter();
            }
        }
    }
    ngOnInit() {
        //   this.loading = true 
    }
    initializeFilterOptions() {
        if (this.filterArrayOrign && this.filterArrayOrign.length > 0) {
            // Extract unique brands
            const uniqueBrands = Array.from(new Set(this.filterArrayOrign.map(item => item.brand)));
            this.availableBrands = uniqueBrands.map(brand => ({
                brand: brand,
                selected: false
            }));
            // Extract unique models
            const uniqueModels = Array.from(new Set(this.filterArrayOrign.map(item => item.model)));
            this.availableModels = uniqueModels.map(model => ({
                model: model,
                selected: false
            }));
        }
    }
    // Brand filter methods
    onBrandSelectionChange(brand) {
        if (brand.selected) {
            if (!this.filterState.brand.selectedBrands.includes(brand.brand)) {
                this.filterState.brand.selectedBrands.push(brand.brand);
            }
        }
        else {
            const index = this.filterState.brand.selectedBrands.indexOf(brand.brand);
            if (index > -1) {
                this.filterState.brand.selectedBrands.splice(index, 1);
            }
        }
        this.updateFilterState();
    }
    toggleBrandSelection(brand) {
        brand.selected = !brand.selected;
        this.onBrandSelectionChange(brand);
    }
    applyBrandFilter() {
        this.filterState.brand.isActive = this.filterState.brand.selectedBrands.length > 0;
        this.filterState.brand.isVisible = false;
        this.applyAllFilters();
    }
    clearBrandFilter() {
        this.availableBrands.forEach(brand => brand.selected = false);
        this.filterState.brand.selectedBrands = [];
        this.filterState.brand.isActive = false;
        this.filterState.brand.isVisible = false;
        this.applyAllFilters();
    }
    // Model filter methods
    onModelSelectionChange(model) {
        if (model.selected) {
            if (!this.filterState.model.selectedModels.includes(model.model)) {
                this.filterState.model.selectedModels.push(model.model);
            }
        }
        else {
            const index = this.filterState.model.selectedModels.indexOf(model.model);
            if (index > -1) {
                this.filterState.model.selectedModels.splice(index, 1);
            }
        }
        this.updateFilterState();
    }
    toggleModelSelection(model) {
        model.selected = !model.selected;
        this.onModelSelectionChange(model);
    }
    applyModelFilter() {
        this.filterState.model.isActive = this.filterState.model.selectedModels.length > 0;
        this.filterState.model.isVisible = false;
        this.applyAllFilters();
    }
    clearModelFilter() {
        this.availableModels.forEach(model => model.selected = false);
        this.filterState.model.selectedModels = [];
        this.filterState.model.isActive = false;
        this.filterState.model.isVisible = false;
        this.applyAllFilters();
    }
    // Quantity filter methods
    onQuantityFilterTypeChange(event) {
        this.filterState.quantity.filterType = event.target.value;
    }
    selectQuantityFilter(type) {
        this.filterState.quantity.filterType = type;
        this.filterState.quantity.isActive = true;
        this.updateFilterState();
    }
    applyQuantityFilter() {
        this.filterState.quantity.isActive = true;
        this.filterState.quantity.isVisible = false;
        this.applyAllFilters();
    }
    clearQuantityFilter() {
        this.filterState.quantity.isActive = false;
        this.filterState.quantity.isVisible = false;
        this.filterState.quantity.minQuantity = 0;
        this.filterState.quantity.maxQuantity = 0;
        this.applyAllFilters();
    }
    // Apply all active filters - now uses backend filtering
    applyAllFilters() {
        // Check if any filters are active
        const hasActiveFilters = this.filterState.brand.isActive ||
            this.filterState.model.isActive ||
            this.filterState.quantity.isActive;
        if (hasActiveFilters) {
            // Use backend filtering
            this.loadFilteredItems();
            this.filterMode = true;
        }
        else {
            // No filters active, show original data
            if (this.filterArrayOrign && Array.isArray(this.filterArrayOrign)) {
                this.filterArray = [...this.filterArrayOrign];
            }
            else {
                this.filterArray = [];
            }
            this.filterMode = false;
        }
    }
    // Clear all filters
    clearAllFilters() {
        this.clearBrandFilter();
        this.clearModelFilter();
        this.clearQuantityFilter();
        this.hideAllFilters();
    }
    // Update filter state
    updateFilterState() {
        this.filterState.brand.isActive = this.filterState.brand.selectedBrands.length > 0;
        this.filterState.model.isActive = this.filterState.model.selectedModels.length > 0;
    }
    // Check if any filter is active
    hasActiveFilters() {
        return this.filterState.brand.isActive ||
            this.filterState.model.isActive ||
            this.filterState.quantity.isActive;
    }
    ionViewDidEnter() {
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
            this.loading = true;
            if (response) {
                this.store_info = response;
                //console.log(response)
                //console.log(this.store_info) 
                // Use pagination method directly for initial data loading
                this.showPaginatedView = true;
                this.loadItemsWithPagination();
                this.loadStockTotals(); // Load totals on page load
                // Load filter options from backend
                this.loadBrandsFromBackend();
                this.loadModelsFromBackend();
            }
        });
        //  this.storage.get('itemsLocal').then((response) => {
        //   if (response) {
        //      this.items = response  
        //     // this.initializeFilterOptions()  
        //   }
        // });
        this.storage.get('colSetting').then((response) => {
            if (response) {
                this.colSetting = response;
                // Category functionality removed
            }
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
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
    getStockItems() {
        console.log('data inrange');
        this.loading = true;
        const startRange = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endRange = this.currentPage * this.itemsPerPage;
        this.api.readStockInrange(startRange, endRange).subscribe(data => {
            console.log('data inrange', data);
            let res = data;
            this.items = res['data'];
            this.totalItems = this.items[0]['totalCount'];
            this.sortingArrayOrign = this.items;
            this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
            this.prepareFilters();
            // this.store_tot = 0
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
            if (this.colSetting) {
            }
            else {
                this.setColSetting();
            }
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
        //     this.api.getAllStockItemsWithouteCounts(this.store_info.id ,this.year.id).subscribe(data =>{
        //       console.log('data inrange',data)
        //       let res = data
        //       let items = res['data']  
        //       this.storage.set('itemsLocal' , items).then((response) => {
        //       }); 
        //   this.prepareFilters()
        //   this.setSortArayy()
        //  this.store_tot = 0
        //  this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
        //  if(this.colSetting){
        //  }else{
        //   this.setColSetting()
        //  }
        //     }, (err) => {
        //     //console.log(err);
        //   } ,
        //     ()=>{
        //     this.loading = false
        //   }
        //     ) 
    }
    // Go to next page
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.loadItemsWithPagination();
        }
    }
    // Go to previous page
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.loadItemsWithPagination();
        }
    }
    // Go to specific page
    goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.loadItemsWithPagination();
        }
    }
    // Change items per page
    changeItemsPerPage(event) {
        this.itemsPerPage = parseInt(event.detail.value);
        this.currentPage = 1; // Reset to first page
        this.resetPaginationAndReload();
    }
    // Get page numbers for pagination controls
    getPageNumbers() {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = startPage + maxPagesToShow - 1;
        if (endPage > this.totalPages) {
            endPage = this.totalPages;
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }
    refresh() {
        this.resetPaginationAndReload();
    }
    // Comprehensive refresh to initial state
    refreshToInitialState() {
        // Category functionality removed
        // Clear search terms
        this.searchTerm = '';
        this.paginationSearchTerm = '';
        this.brandSearchTerm = '';
        this.modelSearchTerm = '';
        this.searchMode = false;
        // Clear all filters
        this.clearAllFilters();
        // Reset filter state
        this.filterState = {
            brand: {
                isActive: false,
                isVisible: false,
                selectedBrands: []
            },
            model: {
                isActive: false,
                isVisible: false,
                selectedModels: []
            },
            quantity: {
                isActive: false,
                isVisible: false,
                minQuantity: 0,
                maxQuantity: 0,
                filterType: 'range'
            }
        };
        // Reset available filters
        this.availableBrands = [];
        this.availableModels = [];
        this.filteredAvailableBrands = [];
        this.filteredAvailableModels = [];
        // Clear selected items
        this.selectedItemsList = [];
        // Reset pagination filters
        this.paginationFilters = {};
        this.filterMode = false;
        // Reset arrays
        this.searcResult = [];
        this.filterArray = [];
        // Reset all items view
        this.showAllItemsView = false;
        this.allItemsData = [];
        this.allItemsStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
        // Reset search view
        this.showSearchView = false;
        this.searchData = [];
        this.searchStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
        this.currentSearchTerm = '';
        // Reset pagination and reload with totals (for category change)
        this.resetPaginationAndReloadWithTotals();
        // Show success message
        this.presentToast('تم إعادة تعيين جميع الإعدادات', 'success');
    }
    getAllStockItems() {
        console.log('getAllStockItems');
        this.itemsAll = [];
        this.loadingTot = true;
        // Category filtering removed - load all items directly
        this.api.getAllStockItemsWithouteCounts(this.store_info.id, this.year.id).subscribe(data => {
            console.log('data inrange', data);
            let res = data;
            let items = res['data'];
            this.itemsAll = items;
            this.itemsAll.forEach(element => {
                if ((+element.availQty - +element.qtyReal) < 0) {
                    element.perchQuantity = +element.perchQuantity + Math.abs((+element.availQty - +element.qtyReal));
                }
                else if ((+element.availQty - +element.qtyReal) > 0) {
                    element.salesQuantity = +element.salesQuantity + (+element.availQty - +element.qtyReal);
                }
                element.quantity = +element.firstQuantity + +element.perchQuantity - +element.salesQuantity;
                element.stockValuePayPrice = +element.quantity * +element.pay_price;
                element.stockValuePerchPrice = +element.quantity * +element.perch_price;
            });
            // this.itemsAll = this.itemsAll.filter(item => item.quantity > 0 || item.quantity < 0); 
            this.calculateTotalValue(this.itemsAll);
            this.storage.set('itemsLocal', items).then((response) => {
            });
            this.loadingTot = true;
            this.items = this.itemsAll;
            this.filterArray = this.itemsAll;
            this.filterArrayOrign = this.itemsAll;
            this.sortingArrayOrign = this.itemsAll;
            // Apply current sort if any
            if (this.currentSort.column && this.currentSort.direction) {
                this.filterArray = this.sortArray([...this.filterArray], this.currentSort.column, this.currentSort.direction);
                this.items = this.sortArray([...this.items], this.currentSort.column, this.currentSort.direction);
            }
            //this.prepareFilters()
            this.initializeFilterOptions();
            //  this.store_tot = this.items.reduce( (acc, obj)=> { return acc + (+obj.perch_price * +obj.quantity ); }, 0);
            if (this.colSetting) {
            }
            else {
                this.setColSetting();
            }
        }, (err) => {
            //console.log(err);
            this.loadingTot = false;
        }, () => {
            this.loadingTot = false;
        });
    }
    calculateTotalValue(item) {
        this.store_tot = item.reduce((acc, obj) => { return acc + +Math.abs(obj.stockValuePayPrice); }, 0);
        this.cost_tot = item.reduce((acc, obj) => { return acc + +Math.abs(obj.stockValuePerchPrice); }, 0);
    }
    setColSetting(data) {
        if (data) {
            this.colSetting = data;
            //console.log("col",this.colSetting)
            this.storage.set('colSetting', this.colSetting).then((response) => {
            });
        }
    }
    prepareFilters() {
        const idsbrand = this.items.map(o => o.brand);
        //console.log(idsbrand)
        const filtered = this.items.filter(({ brand }, index) => !idsbrand.includes(brand, index + 1));
        //console.log(filtered)
        for (let index = 0; index < filtered.length; index++) {
            const element = filtered[index];
            if (element.brand != "") {
                this.brandList.push({
                    "brand": element.brand,
                    "selected": false
                });
                this.availableBrands.push({
                    "brand": element.brand,
                    "selected": false
                });
            }
        }
        //console.log(this.brandList)
        const idsm = this.items.map(o => o.model);
        //console.log(idsm)
        const filteredm = this.items.filter(({ model }, index) => !idsm.includes(model, index + 1));
        //console.log(filteredm)
        for (let index = 0; index < filteredm.length; index++) {
            const element = filteredm[index];
            if (element.model != "") {
                this.modelList.push({
                    "model": element.model,
                    "selected": false
                });
                this.availableModels.push({
                    "model": element.model,
                    "selected": false
                });
            }
        }
        //console.log(this.modelList) 
        this.filterArrayOrign = this.items;
        this.filterArray = this.filterArrayOrign;
        //console.log(this.filterArray ,  this.filterArrayOrign)
    }
    // New efficient sorting system
    sortData(column) {
        // Toggle sort direction
        if (this.currentSort.column === column) {
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        }
        else {
            this.currentSort.column = column;
            this.currentSort.direction = 'asc';
        }
        // Apply sort to all table views
        this.applySortToAllViews(column, this.currentSort.direction);
    }
    applySortToAllViews(column, direction) {
        // Sort the main items array (used by older tables)
        if (this.items && this.items.length > 0) {
            this.items = this.sortArray([...this.items], column, direction);
        }
        // Sort pagination items
        if (this.paginatedItems && this.paginatedItems.length > 0) {
            this.paginatedItems = this.sortArray([...this.paginatedItems], column, direction);
        }
        // Sort all items view
        if (this.allItemsData && this.allItemsData.length > 0) {
            this.allItemsData = this.sortArray([...this.allItemsData], column, direction);
        }
        // Sort search results
        if (this.searchData && this.searchData.length > 0) {
            this.searchData = this.sortArray([...this.searchData], column, direction);
        }
        // Sort filtered items
        if (this.filterArray && this.filterArray.length > 0) {
            this.filterArray = this.sortArray([...this.filterArray], column, direction);
        }
    }
    sortArray(array, column, direction) {
        return array.sort((a, b) => {
            let valueA = this.getSortValue(a, column);
            let valueB = this.getSortValue(b, column);
            // Handle null/undefined values
            if (valueA == null)
                valueA = '';
            if (valueB == null)
                valueB = '';
            // Handle numeric columns
            if (this.isNumericColumn(column)) {
                valueA = +valueA || 0;
                valueB = +valueB || 0;
            }
            else {
                // String comparison
                valueA = String(valueA).toLowerCase();
                valueB = String(valueB).toLowerCase();
            }
            if (valueA < valueB) {
                return direction === 'asc' ? -1 : 1;
            }
            if (valueA > valueB) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }
    getSortValue(item, column) {
        switch (column) {
            case 'id': return item.id;
            case 'item_name': return item.item_name;
            case 'item_desc': return item.item_desc;
            case 'aliasEn': return item.aliasEn;
            case 'model': return item.model;
            case 'part_no': return item.part_no;
            case 'brand': return item.brand;
            case 'min_qty': return item.min_qty;
            case 'item_unit': return item.item_unit;
            case 'perch_price': return item.perch_price;
            case 'pay_price': return item.pay_price;
            case 'profit': return this.calculateProfit(item);
            case 'quantity': return item.quantity;
            case 'total': return item.stockValuePayPrice;
            case 'lastSold': return item.lastSoldDate;
            default: return '';
        }
    }
    isNumericColumn(column) {
        const numericColumns = ['id', 'min_qty', 'perch_price', 'pay_price', 'profit', 'quantity', 'total'];
        return numericColumns.includes(column);
    }
    calculateProfit(item) {
        const payPrice = +item.pay_price;
        const perchPrice = +item.perch_price;
        if (!payPrice || !perchPrice || perchPrice === 0) {
            return 0;
        }
        return ((payPrice - perchPrice) / perchPrice) * 100;
    }
    getSortIcon(column) {
        if (this.currentSort.column !== column) {
            return 'swap-vertical-outline';
        }
        return this.currentSort.direction === 'asc' ? 'chevron-up-outline' : 'chevron-down-outline';
    }
    applyFilter(data) {
        this.filterMode = true;
        this.modelList = data[2];
        this.brandList = data[3];
        //console.log( this.modelList , this.brandList ,data )
        this.modelList.forEach(element => {
            if (element.selected == true) {
                this.showMdel = true;
            }
        });
        this.brandList.forEach(element => {
            if (element.selected == true) {
                this.showBrand = true;
            }
        });
    }
    setFilter() {
        this.filterArray = this.items;
        let flt = [];
        for (let index = 0; index < this.brandList.length; index++) {
            const element = this.brandList[index];
            if (element.selected == true) {
                let fltbre = [];
                fltbre = this.filterArray.filter(x => x.brand == element.brand);
                if (fltbre.length > 0) {
                    fltbre.forEach(element => {
                        flt.push(element);
                    });
                }
            }
        }
        for (let index = 0; index < this.modelList.length; index++) {
            const element = this.modelList[index];
            if (element.selected == true) {
                let fltbre = [];
                fltbre = this.filterArray.filter(x => x.model == element.model);
                if (fltbre.length > 0) {
                    fltbre.forEach(element => {
                        flt.push(element);
                    });
                }
            }
        }
        this.filterArray = flt;
        // Apply current sort if any
        if (this.currentSort.column && this.currentSort.direction) {
            this.filterArray = this.sortArray([...this.filterArray], this.currentSort.column, this.currentSort.direction);
        }
        this.store_fltTot = flt.reduce((acc, obj) => { return acc + (+obj.perch_price * +obj.quantity); }, 0);
        //console.log( 'store_fltTot',this.store_fltTot)
    }
    removeFilter(type) {
        this.presentLoadingWithOptions('....');
        if (type == 'model') {
            this.modelList.forEach(element => {
                element.selected = false;
            });
            this.setFilter();
        }
        else if (type == 'brand') {
            this.brandList.forEach(element => {
                element.selected = false;
            });
            this.setFilter();
        }
        else {
            this.modelList.forEach(element => {
                element.selected = false;
            });
            this.brandList.forEach(element => {
                element.selected = false;
            });
            this.setFilter();
        }
        let bl = 0;
        for (let index = 0; index < this.brandList.length; index++) {
            const element = this.brandList[index];
            if (element.selected == true) {
                bl = bl + 1;
            }
        }
        if (bl > 0) {
            this.showBrand = true;
        }
        else {
            this.showBrand = false;
        }
        let bl2 = 0;
        for (let index = 0; index < this.modelList.length; index++) {
            const element = this.modelList[index];
            if (element.selected == true) {
                bl2 = bl2 + 1;
            }
        }
        if (bl2 > 0) {
            this.showMdel = true;
        }
        else {
            this.showMdel = false;
        }
        if (bl == 0 && bl2 == 0) {
            this.filterArray = this.items;
            this.filterMode = false;
        }
        // Apply current sort if any
        if (this.currentSort.column && this.currentSort.direction) {
            this.filterArray = this.sortArray([...this.filterArray], this.currentSort.column, this.currentSort.direction);
        }
        this.store_fltTot = this.filterArray.reduce((acc, obj) => { return acc + (+obj.perch_price * +obj.quantity); }, 0);
        //console.log( 'store_fltTot',this.store_fltTot)
        this.loadingController.dismiss();
    }
    filterItems(searchTerm) {
        //console.log(searchTerm)  
        this.searcResult = this.itemsAll.filter(item => item.item_name.toLowerCase().includes(searchTerm.toLowerCase()));
        //console.log(this.searcResult) 
    }
    searching($event) {
        if (this.searchTerm.length > 0) {
            this.searchMode = true;
            console.log($event, this.itemsAll);
        }
        else {
            this.searchMode = false;
        }
    }
    // clearSearch(){
    //    //console.log('clear')
    //    this.searchMode = false
    //   // this.searcResult = []
    //  }
    //  FocusSearch(){
    //     //console.log('FocusSearch')
    //     this.searchMode = true 
    //     this.searcResult = []
    // }	
    cancelSearch() {
        //console.log('cancelSearch' ,this.items)
        this.searchMode = false;
        this.searcResult = [];
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
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
    save(mdata) {
        this.presentLoadingWithOptions('جاري حفظ البيانات ...');
        // Remove imageUrl and tax from save data while keeping category_id
        const saveData = Object.assign({}, mdata[0]);
        if ('imageUrl' in saveData)
            delete saveData.imageUrl;
        if ('tax' in saveData)
            delete saveData.tax;
        this.api.saveItem(saveData).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.firstq = { id: null, item_id: data['message'], store_id: this.store_info.id, quantity: mdata[1].quantity, pay_price: mdata[0].pay_price, perch_price: mdata[0].perch_price, fq_year: '2022' };
                this.saveFierstQty(mdata[0]);
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveFierstQty(itemData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveFirstQty(this.firstq).subscribe(data => {
                //console.log(data)  
                if (data['message'] != 'Post Not Created') {
                    this.firstq.id = data['message'];
                }
                this.saveLogHistory(itemData, this.firstq, 'insert');
                this.presentToast('تم الحفظ', 'success');
            }, (err) => {
                //console.log(err);
                this.presentToast('1لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    generateRandom(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    prepareLogHistory(itemData, firstq, role) {
        this.logHistoryArr = [];
        let dt = new Date();
        let typee = "";
        if (role == 'insert') {
            typee = "insert firstq";
            itemData.id = firstq.item_id;
            this.logHistoryArr.push({
                "id": this.firstq.id,
                "logRef": this.generateRandom(typee),
                "userId": this.user_info.id,
                "typee": typee,
                "datee": moment__WEBPACK_IMPORTED_MODULE_5__(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(firstq),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
            typee = "insert item";
            this.logHistoryArr.push({
                "id": null,
                "logRef": this.generateRandom(typee),
                "userId": this.user_info.id,
                "typee": typee,
                "datee": moment__WEBPACK_IMPORTED_MODULE_5__(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(itemData),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
        }
        else {
            // typee = "insert firstq"
            // firstq.item_id =  itemData.id 
            // this.logHistoryArr.push(
            //   {
            //     "id":this.firstq.id,
            //     "logRef":this.generateRandom(),
            //     "userId": this.user_info.id,
            //     "typee":typee,
            //     "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            //     "logStatus":0,
            //     "logToken": JSON.stringify(firstq)  ,
            //     "yearId": this.year.id,
            //     "store_id" :this.store_info.id
            //   }
            //   )
            if (role == 'update') {
                typee = "update item";
            }
            else if (role == 'delete') {
                typee = "delete item";
            }
            this.logHistoryArr.push({
                "id": null,
                "logRef": this.generateRandom(typee),
                "userId": this.user_info.id,
                "typee": typee,
                "datee": moment__WEBPACK_IMPORTED_MODULE_5__(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(itemData),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
        }
        return this.logHistoryArr;
    }
    saveLogHistory(itemData, firstq, role) {
        let mdata = this.prepareLogHistory(itemData, firstq, role);
        //console.log('mdata',mdata)
        this.api.saveLogHistoryMulti(mdata[0], mdata[1], role).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.resetPaginationAndReload();
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
    saveItemStock() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveItemStock(this.itemSstock).subscribe(data => {
                //console.log(data)  
                // this.getAllStockItems() //this.getStockItems()
                this.presentToast('تم الحفظ بنجاح', 'success');
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    incresePrice(data) {
        this.presentLoadingWithOptions('جاري تعديل الأسعار ...');
        this.api.increasePrice(data.payval, data.perchval).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
                //this.getAllStockItems() //this.getStockItems()
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
    decreasePrice(data) {
        this.presentLoadingWithOptions('جاري تعديل الأسعار ...');
        this.api.decreasePrice(data.payval, data.perchval).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
                this.resetPaginationAndReload();
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
    calculateTotals() {
        this.store_tot = 0;
        this.cost_tot = 0;
        this.itemsAll.forEach(element => {
            this.store_tot += element.stockValuePayPrice;
            this.cost_tot += element.stockValuePerchPrice;
        });
    }
    // Pagination methods
    loadItemsWithPagination() {
        console.log('loadItemsWithPagination');
        if (this.paginationLoading)
            return;
        this.paginationLoading = true;
        console.log('loadItemsWithPagination - no filters applied');
        this.api.getStockItemsWithPagination(this.store_info.id, this.paginationCurrentPage, this.paginationPageSize).subscribe(data => {
            var _a;
            console.log('Paginated items response:', data);
            if (data && data.data) {
                if (this.paginationCurrentPage === 1) {
                    // First page - replace existing items
                    this.paginatedItems = data.data;
                }
                else {
                    // Subsequent pages - append to existing items
                    this.paginatedItems = [...this.paginatedItems, ...data.data];
                }
                // Apply current sort to new data (only for first page to maintain sort order)
                if (this.paginationCurrentPage === 1 && this.currentSort.column && this.currentSort.direction) {
                    this.paginatedItems = this.sortArray([...this.paginatedItems], this.currentSort.column, this.currentSort.direction);
                }
                // Update pagination info
                this.paginationHasMore = ((_a = data.pagination) === null || _a === void 0 ? void 0 : _a.hasMore) || false;
                // Update stock totals if provided
                if (data.totals) {
                    this.paginationStockTotals = data.totals;
                }
            }
            this.paginationLoading = false;
        }, error => {
            console.error('Error loading paginated items:', error);
            this.presentToast('خطأ في تحميل البيانات', 'danger');
            this.paginationLoading = false;
        });
    }
    loadMoreItems() {
        if (this.paginationHasMore && !this.paginationLoading) {
            this.paginationCurrentPage++;
            this.loadItemsWithPagination();
        }
    }
    resetPaginationAndReload() {
        this.paginationCurrentPage = 1;
        this.paginatedItems = [];
        this.paginationHasMore = false;
        this.loadItemsWithPagination();
        // Note: totals are only loaded on category changes, not on search/filter resets
    }
    // Reset pagination and reload totals (for category changes)
    resetPaginationAndReloadWithTotals() {
        this.paginationCurrentPage = 1;
        this.paginatedItems = [];
        this.paginationHasMore = false;
        this.loadItemsWithPagination();
        this.loadStockTotals(); // Load totals when category changes
    }
    onPaginationSearchChange(event) {
        const searchTerm = event.target.value || '';
        this.searchSubject.next(searchTerm);
    }
    setPaginationFilter(filterType, filterValue) {
        this.paginationFilters[filterType] = filterValue;
        this.resetPaginationAndReload();
    }
    clearPaginationFilters() {
        this.paginationFilters = {};
        this.resetPaginationAndReload();
    }
    togglePaginatedView() {
        this.showPaginatedView = !this.showPaginatedView;
        if (this.showPaginatedView) {
            // Switch to paginated view
            this.resetPaginationAndReload();
        }
        else {
            // Switch back to regular view
            this.resetPaginationAndReload();
        }
    }
    // Load stock totals separately
    loadStockTotals() {
        console.log('Loading stock totals...');
        if (this.loadingStockTotals)
            return;
        this.loadingStockTotals = true;
        this.api.getStockTotals(this.store_info.id, this.year.id).subscribe(data => {
            console.log('Stock totals response:', data);
            if (data && data.data) {
                this.stockValuePayPrice = parseFloat(data.data.stockValuePayPrice) || 0;
                this.stockValuePerchPrice = parseFloat(data.data.stockValuePerchPrice) || 0;
            }
            else {
                this.stockValuePayPrice = 0;
                this.stockValuePerchPrice = 0;
            }
            this.loadingStockTotals = false;
        }, error => {
            console.error('Error loading stock totals:', error);
            this.presentToast('خطأ في تحميل إجمالي المخزون', 'danger');
            this.loadingStockTotals = false;
            this.stockValuePayPrice = 0;
            this.stockValuePerchPrice = 0;
        });
    }
    // Load filtered items without pagination
    loadFilteredItems() {
        console.log('loadFilteredItems');
        this.loading = true;
        // Prepare filters for API call
        const filters = {
            brand: this.filterState.brand.selectedBrands.join(',') || '',
            model: this.filterState.model.selectedModels.join(',') || '',
            quantity_filter: this.filterState.quantity.isActive ? this.filterState.quantity.filterType : ''
        };
        console.log('loadFilteredItems - filters:', filters);
        this.api.getFilteredStockItems(this.store_info.id, this.year.id, filters).subscribe(data => {
            console.log('Filtered items response:', data);
            if (data && data.data) {
                // Use filterArray for filtered results (this will display in filter mode)
                this.filterArray = data.data;
                // Apply current sort if any
                if (this.currentSort.column && this.currentSort.direction) {
                    this.filterArray = this.sortArray([...this.filterArray], this.currentSort.column, this.currentSort.direction);
                }
                // Calculate totals for filtered items
                this.store_tot = 0;
                this.cost_tot = 0;
                this.filterArray.forEach(element => {
                    this.store_tot += element.stockValuePayPrice || 0;
                    this.cost_tot += element.stockValuePerchPrice || 0;
                });
            }
            else {
                this.filterArray = [];
                this.store_tot = 0;
                this.cost_tot = 0;
            }
            this.loading = false;
        }, error => {
            console.error('Error loading filtered items:', error);
            this.presentToast('خطأ في تحميل البيانات المفلترة', 'danger');
            this.loading = false;
            this.filterArray = [];
            this.store_tot = 0;
            this.cost_tot = 0;
        });
    }
    // Load brands and models from backend
    loadBrandsFromBackend() {
        var _a, _b;
        if (!((_a = this.store_info) === null || _a === void 0 ? void 0 : _a.id) || !((_b = this.year) === null || _b === void 0 ? void 0 : _b.id)) {
            console.log('Store info or year not available yet');
            return;
        }
        this.api.getUniqueBrands(this.store_info.id, this.year.id).subscribe(data => {
            if (data && data.data) {
                this.availableBrands = data.data.map((brand) => ({
                    brand: brand.brand,
                    selected: false,
                    count: brand.count || 0
                }));
                this.filteredAvailableBrands = [...this.availableBrands];
            }
        }, error => {
            console.error('Error loading brands:', error);
        });
    }
    loadModelsFromBackend() {
        var _a, _b;
        if (!((_a = this.store_info) === null || _a === void 0 ? void 0 : _a.id) || !((_b = this.year) === null || _b === void 0 ? void 0 : _b.id)) {
            console.log('Store info or year not available yet');
            return;
        }
        // Load models optionally filtered by selected brands
        const selectedBrands = this.filterState.brand.selectedBrands.join(',');
        this.api.getUniqueModels(this.store_info.id, this.year.id, selectedBrands).subscribe(data => {
            if (data && data.data) {
                this.availableModels = data.data.map((model) => ({
                    model: model.model,
                    selected: false,
                    count: model.count || 0
                }));
                this.filteredAvailableModels = [...this.availableModels];
            }
        }, error => {
            console.error('Error loading models:', error);
        });
    }
    // Brand search functionality
    onBrandSearchInput(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.brandSearchTerm = searchTerm;
        if (!searchTerm.trim()) {
            this.filteredAvailableBrands = [...this.availableBrands];
        }
        else {
            this.filteredAvailableBrands = this.availableBrands.filter(brand => brand.brand.toLowerCase().includes(searchTerm));
        }
    }
    // Model search functionality
    onModelSearchInput(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.modelSearchTerm = searchTerm;
        if (!searchTerm.trim()) {
            this.filteredAvailableModels = [...this.availableModels];
        }
        else {
            this.filteredAvailableModels = this.availableModels.filter(model => model.model.toLowerCase().includes(searchTerm));
        }
    }
    // Filter toggle methods
    toggleBrandFilter() {
        this.hideAllFilters();
        this.filterState.brand.isVisible = !this.filterState.brand.isVisible;
        if (this.filterState.brand.isVisible) {
            this.loadBrandsFromBackend();
        }
    }
    toggleModelFilter() {
        this.hideAllFilters();
        this.filterState.model.isVisible = !this.filterState.model.isVisible;
        if (this.filterState.model.isVisible) {
            this.loadModelsFromBackend();
        }
    }
    toggleQuantityFilter() {
        this.hideAllFilters();
        this.filterState.quantity.isVisible = !this.filterState.quantity.isVisible;
    }
    hideBrandFilter() {
        this.filterState.brand.isVisible = false;
    }
    hideModelFilter() {
        this.filterState.model.isVisible = false;
    }
    hideQuantityFilter() {
        this.filterState.quantity.isVisible = false;
    }
    hideAllFilters() {
        this.filterState.brand.isVisible = false;
        this.filterState.model.isVisible = false;
        this.filterState.quantity.isVisible = false;
    }
    // Quantity filter radio group change handler
    onQuantityFilterChange(event) {
        this.filterState.quantity.filterType = event.detail.value;
    }
    // All Items functionality
    toggleAllItemsView() {
        this.showAllItemsView = !this.showAllItemsView;
        if (this.showAllItemsView) {
            // Reset filters and search before showing all items
            this.resetFiltersAndSearch();
            this.loadAllItems();
        }
        else {
            // Return to pagination view
            this.showPaginatedView = true;
        }
    }
    resetFiltersAndSearch() {
        // Clear any active filters
        if (this.hasActiveFilters()) {
            this.clearAllFilters();
        }
        // Clear any active search
        if (this.showSearchView || this.searchTerm) {
            this.clearSearch();
        }
        // Reset filter mode
        this.filterMode = false;
        // Ensure we're in a clean state
        this.showSearchView = false;
        this.showPaginatedView = false; // Will be set to true in loadAllItems if needed
    }
    loadAllItems() {
        var _a;
        if (!((_a = this.store_info) === null || _a === void 0 ? void 0 : _a.id)) {
            this.presentToast('معلومات المتجر غير متوفرة', 'danger');
            return;
        }
        this.loadingAllItems = true;
        this.allItemsData = [];
        this.api.getAllStockItems(this.store_info.id).subscribe({
            next: (data) => {
                console.log('All items data:', data);
                if (data && data.data) {
                    this.allItemsData = data.data;
                    // Process each item (same as existing logic)
                    this.allItemsData.forEach(element => {
                        if ((+element.availQty - +element.qtyReal) < 0) {
                            element.perchQuantity = +element.perchQuantity + Math.abs((+element.availQty - +element.qtyReal));
                        }
                        else if ((+element.availQty - +element.qtyReal) > 0) {
                            element.salesQuantity = +element.salesQuantity + (+element.availQty - +element.qtyReal);
                        }
                        element.quantity = +element.firstQuantity + +element.perchQuantity - +element.salesQuantity;
                        element.stockValuePayPrice = +element.quantity * +element.pay_price;
                        element.stockValuePerchPrice = +element.quantity * +element.perch_price;
                    });
                    // Set totals
                    this.allItemsStockTotals = data.totals || { store_tot: 0, cost_tot: 0, items_count: 0 };
                    // Apply current sort if any
                    if (this.currentSort.column && this.currentSort.direction) {
                        this.allItemsData = this.sortArray([...this.allItemsData], this.currentSort.column, this.currentSort.direction);
                    }
                    this.presentToast(`تم تحميل ${this.allItemsData.length} صنف بنجاح`, 'success');
                }
                else {
                    this.allItemsData = [];
                    this.allItemsStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
                    this.presentToast('لا توجد أصناف', 'warning');
                }
                this.loadingAllItems = false;
            },
            error: (err) => {
                console.error('Error loading all items:', err);
                this.loadingAllItems = false;
                this.presentToast('خطأ في تحميل الأصناف', 'danger');
            }
        });
    }
    // Return to pagination view
    returnToPaginationView() {
        this.showAllItemsView = false;
        this.showPaginatedView = true;
        this.allItemsData = [];
        this.allItemsStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
    }
    // Search functionality
    onSearchChange(event) {
        const searchTerm = event.detail.value || event.target.value;
        this.searchTerm = searchTerm;
        if (searchTerm && searchTerm.trim().length >= 2) {
            this.performSearch(searchTerm.trim());
        }
        else if (searchTerm.trim().length === 0) {
            this.clearSearch();
        }
    }
    performSearch(searchTerm) {
        var _a;
        if (!((_a = this.store_info) === null || _a === void 0 ? void 0 : _a.id) || !searchTerm || searchTerm.trim().length < 2) {
            return;
        }
        console.log('Starting search for:', searchTerm);
        // Clear other views and set search view
        this.showSearchView = true;
        this.showAllItemsView = false;
        this.showPaginatedView = false;
        this.searchMode = false; // Clear any existing search mode
        // Set loading and search states
        this.loadingSearch = true;
        this.currentSearchTerm = searchTerm;
        this.searchData = [];
        console.log('Search view state:', {
            showSearchView: this.showSearchView,
            showAllItemsView: this.showAllItemsView,
            showPaginatedView: this.showPaginatedView,
            searchMode: this.searchMode
        });
        this.api.searchStockItems(this.store_info.id, searchTerm).subscribe({
            next: (data) => {
                console.log('Search results:', data);
                if (data && data.data) {
                    this.searchData = data.data;
                    // Process each item (same as existing logic)
                    this.searchData.forEach(element => {
                        if ((+element.availQty - +element.qtyReal) < 0) {
                            element.perchQuantity = +element.perchQuantity + Math.abs((+element.availQty - +element.qtyReal));
                        }
                        else if ((+element.availQty - +element.qtyReal) > 0) {
                            element.salesQuantity = +element.salesQuantity + (+element.availQty - +element.qtyReal);
                        }
                        element.quantity = +element.firstQuantity + +element.perchQuantity - +element.salesQuantity;
                        element.stockValuePayPrice = +element.quantity * +element.pay_price;
                        element.stockValuePerchPrice = +element.quantity * +element.perch_price;
                    });
                    // Set totals
                    this.searchStockTotals = data.totals || { store_tot: 0, cost_tot: 0, items_count: 0 };
                    // Apply current sort if any
                    if (this.currentSort.column && this.currentSort.direction) {
                        this.searchData = this.sortArray([...this.searchData], this.currentSort.column, this.currentSort.direction);
                    }
                    if (this.searchData.length > 0) {
                        this.presentToast(`تم العثور على ${this.searchData.length} صنف`, 'success');
                    }
                    else {
                        this.presentToast(`لا توجد نتائج للبحث عن "${searchTerm}"`, 'warning');
                    }
                }
                else {
                    this.searchData = [];
                    this.searchStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
                    this.presentToast(`لا توجد نتائج للبحث عن "${searchTerm}"`, 'warning');
                }
                this.loadingSearch = false;
                console.log('Search completed. Final state:', {
                    showSearchView: this.showSearchView,
                    searchDataLength: this.searchData.length,
                    loadingSearch: this.loadingSearch
                });
            },
            error: (err) => {
                console.error('Error searching items:', err);
                this.loadingSearch = false;
                this.presentToast('خطأ في البحث', 'danger');
            }
        });
    }
    clearSearch() {
        console.log('Clearing search...');
        this.showSearchView = false;
        this.showPaginatedView = true;
        this.searchData = [];
        this.searchStockTotals = { store_tot: 0, cost_tot: 0, items_count: 0 };
        this.currentSearchTerm = '';
        this.searchTerm = '';
        console.log('Search cleared. New state:', {
            showSearchView: this.showSearchView,
            showPaginatedView: this.showPaginatedView
        });
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
    // Check if data is available for export (more lenient than getCurrentTableData)
    hasDataForExport() {
        if (this.showAllItemsView) {
            return (this.allItemsData && this.allItemsData.length > 0) || false;
        }
        else if (this.showSearchView && this.currentSearchTerm && this.currentSearchTerm.trim().length > 0) {
            return (this.searchData && this.searchData.length > 0) || false;
        }
        else if (this.hasActiveFilters()) {
            return (this.filterArray && this.filterArray.length > 0) || false;
        }
        else if (this.showPaginatedView) {
            // In pagination mode, check both paginatedItems and fallback to items
            return (this.paginatedItems && this.paginatedItems.length > 0) || (this.items && this.items.length > 0) || false;
        }
        else {
            return (this.items && this.items.length > 0) || false;
        }
    }
    // Get current active table data based on view state
    getCurrentTableData() {
        if (this.showAllItemsView) {
            return this.allItemsData || [];
        }
        else if (this.showSearchView && this.currentSearchTerm && this.currentSearchTerm.trim().length > 0) {
            return this.searchData || [];
        }
        else if (this.hasActiveFilters()) {
            return this.filterArray || [];
        }
        else if (this.showPaginatedView) {
            return this.paginatedItems || [];
        }
        else {
            return this.items || [];
        }
    }
    // Get data for export - with fallback logic for pagination mode
    getDataForExport() {
        if (this.showAllItemsView) {
            return this.allItemsData || [];
        }
        else if (this.showSearchView && this.currentSearchTerm && this.currentSearchTerm.trim().length > 0) {
            return this.searchData || [];
        }
        else if (this.hasActiveFilters()) {
            return this.filterArray || [];
        }
        else if (this.showPaginatedView) {
            // In pagination mode, prefer paginatedItems but fallback to items if needed
            return (this.paginatedItems && this.paginatedItems.length > 0) ? this.paginatedItems : (this.items || []);
        }
        else {
            return this.items || [];
        }
    }
    // Export functionality
    exportToPDF() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const currentData = this.getDataForExport();
            if (!currentData || currentData.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('item-stock'),
                subtitle: this.generateSubtitle(),
                fileName: `item-stock-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: currentData,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'item-stock',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToPDF(config);
        });
    }
    exportToExcel() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const currentData = this.getDataForExport();
            if (!currentData || currentData.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('item-stock'),
                subtitle: this.generateSubtitle(),
                fileName: `item-stock-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: currentData,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'item-stock',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToExcel(config);
        });
    }
    generateSubtitle() {
        let subtitle = '';
        // Add filter information
        if (this.hasActiveFilters()) {
            const activeFilters = [];
            if (this.filterState.brand.selectedBrands && this.filterState.brand.selectedBrands.length > 0) {
                activeFilters.push(`ماركة: ${this.filterState.brand.selectedBrands.join(', ')}`);
            }
            if (this.filterState.model.selectedModels && this.filterState.model.selectedModels.length > 0) {
                activeFilters.push(`موديل: ${this.filterState.model.selectedModels.join(', ')}`);
            }
            if (this.filterState.quantity.isActive) {
                if (this.filterState.quantity.filterType === 'min') {
                    activeFilters.push(`الحد الأدنى: ${this.filterState.quantity.minQuantity}`);
                }
                else if (this.filterState.quantity.filterType === 'max') {
                    activeFilters.push(`الحد الأقصى: ${this.filterState.quantity.maxQuantity}`);
                }
                else if (this.filterState.quantity.filterType === 'range') {
                    activeFilters.push(`نطاق الكمية: ${this.filterState.quantity.minQuantity} - ${this.filterState.quantity.maxQuantity}`);
                }
            }
            if (activeFilters.length > 0) {
                subtitle = `فلتر: ${activeFilters.join(' - ')}`;
            }
        }
        if (this.searchTerm) {
            subtitle = subtitle ? `${subtitle} - البحث: ${this.searchTerm}` : `البحث: ${this.searchTerm}`;
        }
        // Add view type
        if (this.showAllItemsView) {
            subtitle = subtitle ? `${subtitle} - عرض جميع الأصناف` : 'عرض جميع الأصناف';
        }
        else if (this.showSearchView) {
            subtitle = subtitle ? `${subtitle} - نتائج البحث` : 'نتائج البحث';
        }
        return subtitle;
    }
    getExportColumns() {
        const columns = [];
        // Always add serial number as first column (replacing checkbox)
        columns.push({ key: 'serialNumber', title: 'التسلسل', width: 8, type: 'number' });
        // Add ID column if visible (but not as first since we have serial number)
        // if (this.colSetting.id) columns.push({ key: 'id', title: 'معرف الصنف', width: 10, type: 'number' });
        // Add all other columns based on visibility settings
        if (this.colSetting.item_name)
            columns.push({ key: 'item_name', title: 'اسم الصنف', width: 25, type: 'text' });
        if (this.colSetting.item_desc)
            columns.push({ key: 'item_desc', title: 'اسم الصنف (English)', width: 25, type: 'text' });
        if (this.colSetting.aliasEn)
            columns.push({ key: 'aliasEn', title: 'اسم مستعار (Alias)', width: 20, type: 'text' });
        if (this.colSetting.model)
            columns.push({ key: 'model', title: 'الموديل', width: 15, type: 'text' });
        if (this.colSetting.part_no)
            columns.push({ key: 'part_no', title: 'الكود (part no)', width: 15, type: 'text' });
        if (this.colSetting.brand)
            columns.push({ key: 'brand', title: 'الماركة', width: 15, type: 'text' });
        if (this.colSetting.min_qty)
            columns.push({ key: 'min_qty', title: 'اقل كمية (MSQ)', width: 12, type: 'number' });
        if (this.colSetting.item_unit)
            columns.push({ key: 'item_unit', title: 'الوحده', width: 10, type: 'text' });
        if (this.colSetting.perch_price)
            columns.push({ key: 'perch_price', title: 'سعر الشراء', width: 12, type: 'currency' });
        if (this.colSetting.pay_price)
            columns.push({ key: 'pay_price', title: 'سعر الوحده', width: 12, type: 'currency' });
        if (this.colSetting.profit)
            columns.push({ key: 'profitPercentage', title: 'نسبة الفائدة', width: 12, type: 'number' });
        if (this.colSetting.instock)
            columns.push({ key: 'quantity', title: 'المخزون', width: 12, type: 'number' });
        if (this.colSetting.total)
            columns.push({ key: 'stockValue', title: 'المجموع', width: 15, type: 'currency' });
        if (this.colSetting.lastSold)
            columns.push({ key: 'lastSoldDate', title: 'اخر عملية بيع', width: 15, type: 'text' });
        // Always add opening stock (firstQuantity) if it exists
        columns.push({ key: 'firstQuantity', title: 'المخزون الإفتتاحي', width: 15, type: 'number' });
        return columns;
    }
};
ItemStockPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__.FileOpener },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_6__.StockServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController },
    { type: _services_export_service__WEBPACK_IMPORTED_MODULE_9__.ExportService }
];
ItemStockPage.propDecorators = {
    onKeydownHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.HostListener, args: ['document:keydown.escape', ['$event'],] }],
    actionPopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['actionPopover',] }],
    popoverNotif33: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['popoverNotif33',] }],
    exceltable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['exceltable',] }]
};
ItemStockPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-item-stock',
        template: _item_stock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_stock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemStockPage);



/***/ }),

/***/ 99675:
/*!************************************************************!*\
  !*** ./src/app/item-stock/item-stock.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n\n.category-filter-card {\n  margin-bottom: 8px;\n}\n\n.category-filter-card ion-card-content {\n  padding: 8px;\n}\n\n.category-segment {\n  --background: var(--ion-color-light);\n}\n\n.category-segment ion-segment-button {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  margin: 2px;\n  min-height: 36px;\n}\n\n.category-segment ion-segment-button ion-label {\n  font-size: 14px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n.category-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.filter-bar {\n  background: var(--ion-color-light);\n  border-bottom: 1px solid var(--ion-color-medium);\n  padding: 12px 16px;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.filter-buttons {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n\n.filter-buttons ion-button {\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  height: 36px;\n  font-size: 14px;\n  font-weight: 500;\n  position: relative;\n  transition: all 0.3s ease;\n}\n\n.filter-buttons ion-button.filter-active {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-primary-contrast);\n  --border-color: var(--ion-color-primary);\n  box-shadow: 0 2px 8px rgba(var(--ion-color-primary-rgb), 0.3);\n  transform: translateY(-1px);\n}\n\n.filter-buttons ion-button ion-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 18px;\n  height: 18px;\n  font-size: 11px;\n  border-radius: 9px;\n}\n\n.filter-buttons ion-button ion-icon {\n  font-size: 16px;\n  margin-right: 4px;\n}\n\n.filter-panel {\n  background: white;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  margin-top: 8px;\n  overflow: hidden;\n  animation: slideDown 0.3s ease-out;\n}\n\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.filter-panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: var(--ion-color-light);\n  border-bottom: 1px solid var(--ion-color-medium);\n}\n\n.filter-panel-header h4 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.filter-panel-header ion-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --color: var(--ion-color-medium);\n}\n\n.filter-panel-content {\n  padding: 16px;\n}\n\n.filter-options {\n  max-height: 200px;\n  overflow-y: auto;\n  margin-bottom: 16px;\n}\n\n.filter-options ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: 40px;\n}\n\n.filter-options ion-item ion-checkbox {\n  margin-right: 12px;\n  --size: 18px;\n  --checkmark-width: 2px;\n}\n\n.filter-options ion-item ion-label {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n\n.quantity-inputs .ion-item {\n  margin-bottom: 8px;\n}\n\n.quantity-inputs .ion-item ion-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-medium);\n}\n\n.quantity-inputs .ion-item ion-input {\n  --padding-start: 0;\n  font-size: 14px;\n}\n\n.filter-panel-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  padding-top: 12px;\n  border-top: 1px solid var(--ion-color-light);\n}\n\n.filter-panel-actions ion-button {\n  --border-radius: 8px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  height: 36px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n@media (max-width: 768px) {\n  .filter-buttons {\n    justify-content: flex-start;\n  }\n  .filter-buttons ion-button {\n    font-size: 12px;\n    height: 32px;\n    --padding-start: 8px;\n    --padding-end: 8px;\n  }\n\n  .filter-panel-actions {\n    flex-direction: column;\n  }\n  .filter-panel-actions ion-button {\n    width: 100%;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .filter-bar {\n    background: var(--ion-color-dark);\n    border-bottom-color: var(--ion-color-medium);\n  }\n\n  .filter-panel {\n    background: var(--ion-color-dark);\n    border-color: var(--ion-color-medium);\n  }\n\n  .filter-panel-header {\n    background: var(--ion-color-step-50);\n    border-bottom-color: var(--ion-color-medium);\n  }\n  .filter-panel-header h4 {\n    color: var(--ion-color-light);\n  }\n}\n\n.filter-options::-webkit-scrollbar {\n  width: 4px;\n}\n\n.filter-options::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n  border-radius: 2px;\n}\n\n.filter-options::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 2px;\n}\n\n.filter-options::-webkit-scrollbar-thumb:hover {\n  background: var(--ion-color-dark);\n}\n\n.showMe {\n  color: black;\n}\n\n.hideMe {\n  display: none;\n}\n\n.custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custContent {\n  white-space: nowrap;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.custCol {\n  overflow-x: auto;\n  height: 400px;\n}\n\n.table-container {\n  margin: 0;\n  padding: 0;\n  overflow-x: auto;\n  width: 100%;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  min-width: 1200px;\n  margin: 12px 0;\n  border-collapse: collapse;\n  background: white;\n}\n\n.table th {\n  background: #f8f9fa;\n  border-bottom: 2px solid var(--ion-color-primary);\n  font-weight: bold;\n  padding: 8px 4px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 4px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\n.selected-items-bar {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  margin: 8px 0;\n  animation: slideDown 0.3s ease-out;\n}\n\n.selected-items-bar .selected-items-card {\n  border-radius: 16px;\n  border: 2px solid var(--ion-color-success);\n  background: linear-gradient(135deg, rgba(var(--ion-color-success-rgb), 0.08) 0%, rgba(var(--ion-color-success-rgb), 0.04) 100%);\n  box-shadow: 0 4px 12px rgba(var(--ion-color-success-rgb), 0.15);\n  margin: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.selected-items-bar .selected-items-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(var(--ion-color-success-rgb), 0.25);\n}\n\n.selected-items-bar .selected-items-content {\n  padding: 12px 16px;\n}\n\n.selected-items-bar .selected-items-content .selected-count {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.selected-items-bar .selected-items-content .selected-count .count-badge {\n  background: var(--ion-color-success);\n  color: white;\n  border-radius: 12px;\n  padding: 4px 12px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  min-width: 24px;\n  text-align: center;\n  animation: pulse 0.5s ease-in-out;\n}\n\n.selected-items-bar .selected-items-content .selected-count .selected-text {\n  color: var(--ion-color-success-shade);\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n\n.selected-items-bar .selected-items-content .action-buttons {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn {\n  --border-radius: 20px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  height: 36px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.5s;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action:hover::before {\n  left: 100%;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action.purchase-btn {\n  --background: var(--ion-color-success);\n  --color: white;\n  box-shadow: 0 2px 8px rgba(var(--ion-color-success-rgb), 0.3);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action.purchase-btn:hover {\n  --background: var(--ion-color-success-shade);\n  box-shadow: 0 4px 12px rgba(var(--ion-color-success-rgb), 0.4);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action.sales-btn {\n  --background: var(--ion-color-primary);\n  --color: white;\n  box-shadow: 0 2px 8px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action.sales-btn:hover {\n  --background: var(--ion-color-primary-shade);\n  box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.4);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.secondary-action {\n  --background: transparent;\n  --color: var(--ion-color-success);\n  --border-color: var(--ion-color-success);\n  --border-style: solid;\n  --border-width: 1.5px;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.secondary-action:hover {\n  --background: rgba(var(--ion-color-success-rgb), 0.1);\n  transform: translateY(-1px);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn ion-icon {\n  font-size: 1rem;\n  margin-inline-end: 6px;\n}\n\n.selected-items-bar.sales-mode .selected-items-card {\n  border-color: var(--ion-color-primary);\n  background: linear-gradient(135deg, rgba(var(--ion-color-primary-rgb), 0.08) 0%, rgba(var(--ion-color-primary-rgb), 0.04) 100%);\n  box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.15);\n}\n\n.selected-items-bar.sales-mode .selected-items-card:hover {\n  box-shadow: 0 6px 20px rgba(var(--ion-color-primary-rgb), 0.25);\n}\n\n.selected-items-bar.sales-mode .selected-count .count-badge {\n  background: var(--ion-color-primary);\n}\n\n.selected-items-bar.sales-mode .selected-count .selected-text {\n  color: var(--ion-color-primary-shade);\n}\n\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.selected-items-bar.fade-out {\n  animation: slideUp 0.3s ease-in forwards;\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n}\n\n@media (max-width: 768px) {\n  .selected-items-bar .selected-items-content .action-buttons {\n    justify-content: center;\n    flex-direction: column;\n    gap: 6px;\n  }\n  .selected-items-bar .selected-items-content .action-buttons .action-btn {\n    width: 100%;\n    min-width: unset;\n  }\n  .selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action {\n    order: 1;\n  }\n  .selected-items-bar .selected-items-content .action-buttons .action-btn.secondary-action {\n    order: 3;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .selected-items-bar .selected-items-content .action-buttons .action-btn {\n    flex: 1;\n    min-width: 140px;\n  }\n}\n\n.action-btn.loading {\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.action-btn.loading::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 16px;\n  height: 16px;\n  margin: -8px 0 0 -8px;\n  border: 2px solid transparent;\n  border-top-color: currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.quantity-filter-options {\n  padding: 0;\n}\n\n.quantity-option-item {\n  --border-radius: 8px;\n  margin-bottom: 8px;\n  border: 1px solid var(--ion-color-light-shade);\n  transition: all 0.2s ease;\n}\n\n.quantity-option-item:hover {\n  --background: var(--ion-color-light-tint);\n  border-color: var(--ion-color-medium);\n}\n\n.quantity-option-item.selected {\n  --background: var(--ion-color-primary-tint);\n  border-color: var(--ion-color-primary);\n}\n\n.quantity-option-item.selected ion-label h3 {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n\n.quantity-option-item.selected ion-radio {\n  --color-checked: var(--ion-color-primary);\n}\n\n.quantity-option-item ion-icon {\n  margin-inline-end: 12px;\n  font-size: 20px;\n}\n\n.quantity-option-item ion-label h3 {\n  margin: 0 0 4px 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n\n.quantity-option-item ion-label p {\n  margin: 0;\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  line-height: 1.3;\n}\n\n.quantity-option-item ion-radio {\n  --color: var(--ion-color-medium);\n  margin: 0;\n}\n\n.filter-loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 20px;\n  min-height: 200px;\n}\n\n.filter-loading-container .loading-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.filter-loading-container .loading-content ion-spinner {\n  --color: var(--ion-color-primary);\n  width: 32px;\n  height: 32px;\n}\n\n.filter-loading-container .loading-content .loading-text {\n  margin: 0;\n  color: var(--ion-color-medium);\n  font-size: 14px;\n  text-align: center;\n}\n\n.filter-popover {\n  --min-width: 320px;\n  --max-width: 400px;\n  --max-height: 500px;\n}\n\n.popover-content {\n  padding: 0;\n}\n\n.popover-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  background: var(--ion-color-light);\n  border-bottom: 1px solid var(--ion-color-medium);\n}\n\n.popover-header h4 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.popover-header ion-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --color: var(--ion-color-medium);\n  height: 32px;\n}\n\n.popover-search {\n  padding: 16px 20px 8px 20px;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.popover-search ion-searchbar {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --border-radius: 8px;\n  --background: var(--ion-color-light-tint);\n  --color: var(--ion-color-dark);\n  --placeholder-color: var(--ion-color-medium);\n  --icon-color: var(--ion-color-medium);\n  --clear-button-color: var(--ion-color-medium);\n  font-size: 14px;\n}\n\n.popover-options {\n  max-height: 300px;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n\n.popover-options ion-item {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --inner-padding-end: 0;\n  --min-height: 44px;\n}\n\n.popover-options ion-item ion-checkbox {\n  margin-inline-end: 12px;\n  --size: 18px;\n  --checkmark-width: 2px;\n}\n\n.popover-options ion-item ion-label {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n\n.popover-options ion-item ion-label .item-count {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  margin-top: 2px;\n}\n\n.popover-options ion-item:hover {\n  --background: var(--ion-color-light-tint);\n}\n\n.popover-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  padding: 16px 20px;\n  border-top: 1px solid var(--ion-color-light);\n}\n\n.popover-actions ion-button {\n  --border-radius: 8px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  height: 36px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.popover-actions ion-button.clear-btn {\n  --background: transparent;\n  --color: var(--ion-color-medium);\n  --border-color: var(--ion-color-medium);\n  --border-style: solid;\n  --border-width: 1px;\n}\n\n.popover-actions ion-button.apply-btn {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\n\n.popover-options::-webkit-scrollbar {\n  width: 4px;\n}\n\n.popover-options::-webkit-scrollbar-track {\n  background: var(--ion-color-light);\n  border-radius: 2px;\n}\n\n.popover-options::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium);\n  border-radius: 2px;\n}\n\n.popover-options::-webkit-scrollbar-thumb:hover {\n  background: var(--ion-color-dark);\n}\n\n.totals-summary {\n  margin-top: 16px;\n}\n\n.totals-summary ion-card {\n  --border-radius: 12px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.totals-summary ion-card ion-card-content {\n  padding: 20px;\n}\n\n.totals-summary h3 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin-bottom: 8px;\n}\n\n.totals-summary .total-value {\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  margin: 0;\n}\n\n.load-more-container {\n  padding: 16px;\n  text-align: center;\n}\n\n.card-header-with-export {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: linear-gradient(135deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px 12px 0 0;\n}\n\n.card-header-with-export ion-card-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc3RvY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBR0U7RUFDRSxZQUFBO0FBREo7O0FBS0E7RUFDRSxvQ0FBQTtBQUZGOztBQUlFO0VBQ0UsOEJBQUE7RUFDQSxrREFBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGTjs7QUFLSTtFQUNFLHdDQUFBO0FBSE47O0FBU0E7RUFDRSxrQ0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFRRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBTko7O0FBUUk7RUFDRSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSw2REFBQTtFQUNBLDJCQUFBO0FBTk47O0FBU0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFQTjs7QUFVSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVJOOztBQWNBO0VBQ0UsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQVhGOztBQWNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFYRjtFQWFBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBWEY7QUFDRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdEQUFBO0FBWkY7O0FBY0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFaSjs7QUFlRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQWJKOztBQWlCQTtFQUNFLGFBQUE7QUFkRjs7QUFpQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFkRjs7QUFnQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFnQkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWROOztBQWlCSTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQWZOOztBQXFCRTtFQUNFLGtCQUFBO0FBbEJKOztBQW9CSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBbEJOOztBQXFCSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQW5CTjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtBQXJCRjs7QUF1QkU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckJKOztBQTBCQTtFQUNFO0lBQ0UsMkJBQUE7RUF2QkY7RUF5QkU7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUF2Qko7O0VBMkJBO0lBQ0Usc0JBQUE7RUF4QkY7RUEwQkU7SUFDRSxXQUFBO0VBeEJKO0FBQ0Y7O0FBNkJBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLDRDQUFBO0VBM0JGOztFQThCQTtJQUNFLGlDQUFBO0lBQ0EscUNBQUE7RUEzQkY7O0VBOEJBO0lBQ0Usb0NBQUE7SUFDQSw0Q0FBQTtFQTNCRjtFQTZCRTtJQUNFLDZCQUFBO0VBM0JKO0FBQ0Y7O0FBZ0NBO0VBQ0UsVUFBQTtBQTlCRjs7QUFpQ0E7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0FBOUJGOztBQWlDQTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7QUE5QkY7O0FBaUNBO0VBQ0UsaUNBQUE7QUE5QkY7O0FBNkNBO0VBQ0MsWUFBQTtBQTFDRDs7QUE0Q0E7RUFDRSxhQUFBO0FBekNGOztBQStDQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQTVDSjs7QUE4Q0k7RUFDSSxrQkFBQTtBQTNDUjs7QUE2Q0E7RUFHRSxtQkFBQTtBQTVDRjs7QUE4Q0k7RUFDSSxnQkFBQTtBQTNDUjs7QUE2Q0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUExQ0Y7O0FBNkNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUExQ0o7O0FBNkNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQTFDSjs7QUE0Q0k7RUFDRSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTFDTjs7QUE4Q0U7RUFDRSx5QkFBQTtBQTNDSjs7QUE2Q0U7RUFBUSx5QkFBQTtFQUEwQixrQkFBQTtFQUFtQixZQUFBO0VBQWMsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixZQUFBO0FBcEN2Rzs7QUF5Q0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBdENGOztBQXdDRTtFQUNFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSwrSEFBQTtFQUdBLCtEQUFBO0VBQ0EsU0FBQTtFQUNBLGlEQUFBO0FBeENKOztBQTBDSTtFQUNFLDJCQUFBO0VBQ0EsK0RBQUE7QUF4Q047O0FBNENFO0VBQ0Usa0JBQUE7QUExQ0o7O0FBNENJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQTFDTjs7QUE0Q007RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBMUNSOztBQTZDTTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTNDUjs7QUErQ0k7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQTdDTjs7QUErQ007RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE3Q1I7O0FBK0NRO0VBQ0UseUNBQUE7QUE3Q1Y7O0FBK0NVO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQTdDWjs7QUFnRFU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0ZBQUE7RUFDQSxxQkFBQTtBQTlDWjs7QUFpRFU7RUFDRSxVQUFBO0FBL0NaOztBQW1EVTtFQUNFLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLDZEQUFBO0FBakRaOztBQW1EWTtFQUNFLDRDQUFBO0VBQ0EsOERBQUE7QUFqRGQ7O0FBc0RVO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0VBQ0EsNkRBQUE7QUFwRFo7O0FBc0RZO0VBQ0UsNENBQUE7RUFDQSw4REFBQTtBQXBEZDs7QUF5RFE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBdkRWOztBQXlEVTtFQUNFLHFEQUFBO0VBQ0EsMkJBQUE7QUF2RFo7O0FBMkRRO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBekRWOztBQWtFRTtFQUNFLHNDQUFBO0VBQ0EsK0hBQUE7RUFHQSwrREFBQTtBQWpFSjs7QUFtRUk7RUFDRSwrREFBQTtBQWpFTjs7QUFzRUk7RUFDRSxvQ0FBQTtBQXBFTjs7QUF1RUk7RUFDRSxxQ0FBQTtBQXJFTjs7QUEyRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQXhFRjtFQTBFQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXhFRjtBQUNGOztBQTJFQTtFQUNFO0lBQ0UsbUJBQUE7RUF6RUY7RUEyRUE7SUFDRSxxQkFBQTtFQXpFRjtFQTJFQTtJQUNFLG1CQUFBO0VBekVGO0FBQ0Y7O0FBNkVBO0VBQ0Usd0NBQUE7QUEzRUY7O0FBOEVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUEzRUY7RUE2RUE7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUEzRUY7QUFDRjs7QUErRUE7RUFHTTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxRQUFBO0VBL0VOO0VBaUZNO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VBL0VSO0VBaUZRO0lBQ0UsUUFBQTtFQS9FVjtFQWtGUTtJQUNFLFFBQUE7RUFoRlY7QUFDRjs7QUF1RkE7RUFJUTtJQUNFLE9BQUE7SUFDQSxnQkFBQTtFQXhGUjtBQUNGOztBQStGQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQTdGRjs7QUErRkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQTdGSjs7QUFpR0E7RUFDRTtJQUNFLHlCQUFBO0VBOUZGO0FBQ0Y7O0FBa0dBO0VBQ0UsVUFBQTtBQWhHRjs7QUFtR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQWhHRjs7QUFrR0U7RUFDRSx5Q0FBQTtFQUNBLHFDQUFBO0FBaEdKOztBQW1HRTtFQUNFLDJDQUFBO0VBQ0Esc0NBQUE7QUFqR0o7O0FBbUdJO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQWpHTjs7QUFvR0k7RUFDRSx5Q0FBQTtBQWxHTjs7QUFzR0U7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFwR0o7O0FBd0dJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQXRHTjs7QUF5R0k7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUF2R047O0FBMkdFO0VBQ0UsZ0NBQUE7RUFDQSxTQUFBO0FBekdKOztBQThHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTNHRjs7QUE2R0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUEzR0o7O0FBNkdJO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTNHTjs7QUE4R0k7RUFDRSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUE1R047O0FBa0hBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBL0dGOztBQWtIQTtFQUNFLFVBQUE7QUEvR0Y7O0FBa0hBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0RBQUE7QUEvR0Y7O0FBaUhFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBL0dKOztBQWtIRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFoSEo7O0FBb0hBO0VBQ0UsMkJBQUE7RUFDQSwrQ0FBQTtBQWpIRjs7QUFtSEU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQWpISjs7QUFxSEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWxIRjs7QUFvSEU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWxISjs7QUFvSEk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWxITjs7QUFxSEk7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUFuSE47O0FBcUhNO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQW5IUjs7QUF1SEk7RUFDRSx5Q0FBQTtBQXJITjs7QUEwSEE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQXZIRjs7QUF5SEU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdkhKOztBQXlISTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUF2SE47O0FBMEhJO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0FBeEhOOztBQThIQTtFQUNFLFVBQUE7QUEzSEY7O0FBOEhBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtBQTNIRjs7QUE4SEE7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0FBM0hGOztBQThIQTtFQUNFLGlDQUFBO0FBM0hGOztBQStIQTtFQUNFLGdCQUFBO0FBNUhGOztBQThIRTtFQUNFLHFCQUFBO0VBQ0Esd0NBQUE7QUE1SEo7O0FBOEhJO0VBQ0UsYUFBQTtBQTVITjs7QUFnSUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBOUhKOztBQWlJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQS9ISjs7QUFvSUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFqSUY7O0FBcUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkZBQUE7RUFJQSxpREFBQTtFQUNBLDRCQUFBO0FBcklGOztBQXVJRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQXJJSiIsImZpbGUiOiJpdGVtLXN0b2NrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBhZ2UgbGF5b3V0IC0gc2ltcGxpZmllZFxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbn1cclxuXHJcbi8vIENhdGVnb3J5IEZpbHRlciBTdHlsZXNcclxuLmNhdGVnb3J5LWZpbHRlci1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcnktc2VnbWVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIFxyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgbWluLWhlaWdodDogMzZweDtcclxuICAgIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRmlsdGVyIEJhciBTdHlsZXNcclxuLmZpbHRlci1iYXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmZpbHRlci1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgJi5maWx0ZXItYWN0aXZlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4zKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICByaWdodDogLTRweDtcclxuICAgICAgbWluLXdpZHRoOiAxOHB4O1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEZpbHRlciBQYW5lbCBTdHlsZXNcclxuLmZpbHRlci1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItcGFuZWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuXHJcbiAgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsdGVyLXBhbmVsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5maWx0ZXItb3B0aW9ucyB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1taW4taGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgLS1zaXplOiAxOHB4O1xyXG4gICAgICAtLWNoZWNrbWFyay13aWR0aDogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5xdWFudGl0eS1pbnB1dHMge1xyXG4gIC5pb24taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlci1wYW5lbC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogOHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5maWx0ZXItYnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5maWx0ZXItcGFuZWwtYWN0aW9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEYXJrIG1vZGUgc3VwcG9ydFxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgLmZpbHRlci1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLXBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC01MCk7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ3VzdG9tIHNjcm9sbGJhciBmb3IgZmlsdGVyIG9wdGlvbnNcclxuLmZpbHRlci1vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDRweDtcclxufVxyXG5cclxuLmZpbHRlci1vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5maWx0ZXItb3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmZpbHRlci1vcHRpb25zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vXHJcblxyXG4uc2hvd01le1xyXG4gY29sb3I6YmxhY2s7XHJcbn1cclxuLmhpZGVNZXtcclxuICBkaXNwbGF5OiBub25lOyBcclxuIH1cclxuXHJcblxyXG4gXHJcbiBcclxuLmN1c3RJbnB1dHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuY3VzdC1jYXJke1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuLmN1c3RDb250ZW50e1xyXG4gIFxyXG4gIFxyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuICAgIC5jdXN0Um93e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgfVxyXG4uY3VzdENvbHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuICAvLyBSZW1vdmUgdGFibGUgY29udGFpbmVyIC0gdXNlIG5vcm1hbCBsYXlvdXRcclxuICAudGFibGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvOyAvLyBPbmx5IGhvcml6b250YWwgc2Nyb2xsXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMjAwcHg7IC8vIEVuc3VyZSBhbGwgY29sdW1ucyBhcmUgdmlzaWJsZSB3aXRoIHByb3BlciBzcGFjZVxyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBcclxuICAgIHRoIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHBhZGRpbmc6IDhweCA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICB9XHJcbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA0cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fVxyXG5cclxuXHJcbiAgLy8vXHJcbiAgLy8vIC8gU2VsZWN0ZWQgaXRlbXMgYWN0aW9uIGJhciBzdHlsZXNcclxuLnNlbGVjdGVkLWl0ZW1zLWJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlLW91dDtcclxuICBcclxuICAuc2VsZWN0ZWQtaXRlbXMtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXHJcbiAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiKSwgMC4wOCkgMCUsIFxyXG4gICAgICByZ2JhKHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiksIDAuMDQpIDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiksIDAuMTUpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiksIDAuMjUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2VsZWN0ZWQtaXRlbXMtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBcclxuICAgIC5zZWxlY3RlZC1jb3VudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogOHB4O1xyXG4gICAgICBcclxuICAgICAgLmNvdW50LWJhZGdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc2VsZWN0ZWQtdGV4dCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBcclxuICAgICAgLmFjdGlvbi1idG4ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBcclxuICAgICAgICAmLnByaW1hcnktYWN0aW9uIHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFB1cmNoYXNlIGJ1dHRvbiBzdHlsaW5nIChHcmVlbilcclxuICAgICAgICAgICYucHVyY2hhc2UtYnRuIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAwLjMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiksIDAuNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gU2FsZXMgYnV0dG9uIHN0eWxpbmcgKEJsdWUpXHJcbiAgICAgICAgICAmLnNhbGVzLWJ0biB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYuc2Vjb25kYXJ5LWFjdGlvbiB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAwLjEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBbHRlcm5hdGl2ZSBjb2xvciBzY2hlbWUgZm9yIHNhbGVzLWZvY3VzZWQgc2VsZWN0aW9uXHJcbi5zZWxlY3RlZC1pdGVtcy1iYXIuc2FsZXMtbW9kZSB7XHJcbiAgLnNlbGVjdGVkLWl0ZW1zLWNhcmQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBcclxuICAgICAgcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjA4KSAwJSwgXHJcbiAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wNCkgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNSk7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yNSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3RlZC1jb3VudCB7XHJcbiAgICAuY291bnQtYmFkZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWxlY3RlZC10ZXh0IHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hdGlvbnNcclxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGYWRlIG91dCBhbmltYXRpb24gZm9yIGhpZGluZ1xyXG4uc2VsZWN0ZWQtaXRlbXMtYmFyLmZhZGUtb3V0IHtcclxuICBhbmltYXRpb246IHNsaWRlVXAgMC4zcyBlYXNlLWluIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGRlc2lnblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2VsZWN0ZWQtaXRlbXMtYmFyIHtcclxuICAgIC5zZWxlY3RlZC1pdGVtcy1jb250ZW50IHtcclxuICAgICAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogNnB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5hY3Rpb24tYnRuIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJi5wcmltYXJ5LWFjdGlvbiB7XHJcbiAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmLnNlY29uZGFyeS1hY3Rpb24ge1xyXG4gICAgICAgICAgICBvcmRlcjogMztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5zZWxlY3RlZC1pdGVtcy1iYXIge1xyXG4gICAgLnNlbGVjdGVkLWl0ZW1zLWNvbnRlbnQge1xyXG4gICAgICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgICAgIC5hY3Rpb24tYnRuIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQnV0dG9uIGxvYWRpbmcgc3RhdGVcclxuLmFjdGlvbi1idG4ubG9hZGluZyB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogLThweCAwIDAgLThweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFF1YW50aXR5IEZpbHRlciBPcHRpb25zIFN0eWxlc1xyXG4ucXVhbnRpdHktZmlsdGVyLW9wdGlvbnMge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5xdWFudGl0eS1vcHRpb24taXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICB9XHJcbiAgXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbCBoMyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yYWRpbyB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZpbHRlciBMb2FkaW5nIFN0eWxlc1xyXG4uZmlsdGVyLWxvYWRpbmctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIFxyXG4gIC5sb2FkaW5nLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgXHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvYWRpbmctdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFBvcG92ZXIgU3R5bGVzXHJcbi5maWx0ZXItcG9wb3ZlciB7XHJcbiAgLS1taW4td2lkdGg6IDMyMHB4O1xyXG4gIC0tbWF4LXdpZHRoOiA0MDBweDtcclxuICAtLW1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4ucG9wb3Zlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucG9wb3Zlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIFxyXG4gIGg0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9wb3Zlci1zZWFyY2gge1xyXG4gIHBhZGRpbmc6IDE2cHggMjBweCA4cHggMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBcclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAtLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBvcG92ZXItb3B0aW9ucyB7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICBcclxuICBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tbWluLWhlaWdodDogNDRweDtcclxuICAgIFxyXG4gICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEycHg7XHJcbiAgICAgIC0tc2l6ZTogMThweDtcclxuICAgICAgLS1jaGVja21hcmstd2lkdGg6IDJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBcclxuICAgICAgLml0ZW0tY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wb3BvdmVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgXHJcbiAgICAmLmNsZWFyLWJ0biB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5hcHBseS1idG4ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDdXN0b20gc2Nyb2xsYmFyIGZvciBwb3BvdmVyIG9wdGlvbnNcclxuLnBvcG92ZXItb3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbn1cclxuXHJcbi5wb3BvdmVyLW9wdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnBvcG92ZXItb3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnBvcG92ZXItb3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLy8gQWxsIEl0ZW1zIFRvdGFscyBTdW1tYXJ5IFN0eWxlc1xyXG4udG90YWxzLXN1bW1hcnkge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIFxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICAudG90YWwtdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTG9hZCBtb3JlIGJ1dHRvbiBzdHlsaW5nXHJcbi5sb2FkLW1vcmUtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gRXhwb3J0IGJ1dHRvbnMgc3R5bGluZ1xyXG4uY2FyZC1oZWFkZXItd2l0aC1leHBvcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBcclxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgXHJcbiAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSlcclxuICApO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcclxuXHJcbiAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 50427:
/*!************************************************************!*\
  !*** ./src/app/item-stock/item-stock.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshToInitialState()\">\n        <ion-icon name=\"refresh-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>  \n    <ion-title>الأصنــاف</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"custContent\">\n  <ion-grid>\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-margin\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"5\"> \n                <ion-item lines=\"none\" >\n                  <!-- <input placeholder=\"اختر  حساب العميل\" list=\"accounts\" id=\"account\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                 \n                  <datalist style=\"border: none;\" id=\"accounts\" style=\"height: auto;max-height: 20px;\">\n                    <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                </datalist> -->\n                <!-- <ion-input [(ngModel)]=\"searchTerm\" placeholder=\"بحــث\"></ion-input> -->\n                <ion-searchbar  [(ngModel)]=\"searchTerm\" (ionChange)=\"onSearchChange($event)\" showCancelButton=\"never\" placeholder=\"بحــث\" ></ion-searchbar>\n                </ion-item>  \n  \n              </ion-col>\n              <ion-col size=\"7\" >\n                <ion-item lines=\"none\">\n                  <ion-buttons slot=\"end\">\n                    <ion-button  fill=\"outline\" color=\"primary\" shape=\"round\"  (click)=\"presentModal('null', 'settings')\"  > \n                      <ion-icon name=\"settings-outline\" color=\"primary\"></ion-icon>\n                     <ion-label><ion-text color=\"dark\"> إخفاء الأعمدة</ion-text></ion-label> \n                    </ion-button>\n                    <ion-button  fill=\"outline\" color=\"primary\" shape=\"round\"   (click)=\"presentModal('null', 'price')\"  > \n                      <ion-icon name=\"create-outline\" color=\"primary\"></ion-icon>\n                      <ion-label><ion-text color=\"dark\">تعديل الأسعار</ion-text></ion-label> \n                    </ion-button>\n                    <ion-button  fill=\"outline\" color=\"primary\" shape=\"round\"  (click)=\"presentModal('null', 'save')\"  > \n                      <ion-icon name=\"add-circle-outline\" color=\"primary\"></ion-icon>\n                     <ion-label><ion-text color=\"dark\">صنف جديد</ion-text></ion-label> \n                    </ion-button>\n                   \n                   \n                  </ion-buttons>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  \n  <ion-grid>\n    <ion-row dir=\"rtl\"> \n      <ion-col size=\"3\" class=\"ion-text-end\"> \n          <ion-label *ngIf = \"filterMode == false\">\n            <ion-text><strong >قيمة المخزون :  </strong> </ion-text>\n          </ion-label> \n      </ion-col>\n\n      <ion-col size=\"3\" class=\"ion-text-start\">\n          <ion-label *ngIf = \"filterMode == false\"> \n            <ion-text *ngIf = \"loadingStockTotals == false\">{{formatBalance(stockValuePayPrice)}}</ion-text> \n            <ion-text *ngIf = \"loadingStockTotals == true\">\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </ion-text>\n          </ion-label> \n      </ion-col>\n\n      <ion-col size=\"3\" class=\"ion-text-end\"> \n          <ion-label *ngIf = \"filterMode == false && searchTerm == ''\">\n            <ion-text><strong >تكلفة المخزون :  </strong> </ion-text>\n          </ion-label> \n      </ion-col>\n\n      <ion-col size=\"3\" class=\"ion-text-start\">\n          <ion-label *ngIf = \"filterMode == false && searchTerm == ''\"> \n            <ion-text *ngIf = \"loadingStockTotals == false\">{{formatBalance(stockValuePerchPrice)}}</ion-text> \n            <ion-text *ngIf = \"loadingStockTotals == true\">\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </ion-text>\n          </ion-label> \n      </ion-col>\n    </ion-row>\n\n  \n        <!-- Filter Bar - Place this above your table -->\n<div class=\"filter-bar ion-margin-top\"  >\n  <!-- Filter Buttons -->\n  <div class=\"filter-buttons\" style=\"display: flex; justify-content: space-between; align-items: center;\"> \n   \n\n    <!-- Filter Buttons - Right Side -->\n    <div style=\"display: flex; gap: 8px; flex-wrap: wrap;\">\n      <ion-button fill=\"outline\" color=\"primary\" shape=\"round\" size=\"small\"> \n        <ion-icon name=\"filter-outline\" color=\"success\"></ion-icon>\n        <ion-label class=\"ion-margin-start ion-margin-end\"><ion-text color=\"dark\"> فلتر </ion-text></ion-label> \n      </ion-button>\n \n      <ion-button \n        fill=\"outline\" \n        size=\"small\" \n        [class.filter-active]=\"filterState.brand.isActive\"\n        (click)=\"toggleBrandFilter()\">\n        <ion-icon name=\"pricetag-outline\" slot=\"start\"></ion-icon>\n        Brand(الماركة)\n        <ion-badge *ngIf=\"filterState.brand.selectedBrands.length > 0\" color=\"primary\">\n          {{filterState.brand.selectedBrands.length}}\n        </ion-badge>\n      </ion-button>\n\n      <ion-button \n        fill=\"outline\" \n        size=\"small\" \n        [class.filter-active]=\"filterState.model.isActive\"\n        (click)=\"toggleModelFilter()\">\n        <ion-icon name=\"car-outline\" slot=\"start\"></ion-icon>\n        Model (الموديل)\n        <ion-badge *ngIf=\"filterState.model.selectedModels.length > 0\" color=\"primary\">\n          {{filterState.model.selectedModels.length}}\n        </ion-badge>\n      </ion-button>\n\n      <ion-button \n        fill=\"outline\" \n        size=\"small\" \n        [class.filter-active]=\"filterState.quantity.isActive\"\n        (click)=\"toggleQuantityFilter()\">\n        <ion-icon name=\"layers-outline\" slot=\"start\"></ion-icon>\n        Quantity (الكمية)\n        <ion-badge *ngIf=\"filterState.quantity.isActive\" color=\"primary\">1</ion-badge>\n      </ion-button>\n\n      <!-- Clear All Filters Button -->\n      <ion-button \n        fill=\"clear\" \n        size=\"small\" \n        color=\"medium\"\n        *ngIf=\"hasActiveFilters()\"\n        (click)=\"clearAllFilters()\">\n        <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n        إلغاء جميع الفلاتر\n      </ion-button>\n    </div>\n\n     <!-- All Items Toggle Button - Left Side -->\n     <div>\n      <ion-button \n        fill=\"outline\" \n        color=\"{{showAllItemsView ? 'success' : 'primary'}}\" \n        shape=\"round\" \n        size=\"small\"\n        (click)=\"toggleAllItemsView()\" \n        [disabled]=\"loadingAllItems\">\n        <ion-icon name=\"{{showAllItemsView ? 'checkmark-circle-outline' : 'list-outline'}}\" slot=\"start\"></ion-icon>\n        <ion-label>{{showAllItemsView ? 'عرض مرقم' : 'جميع الأصناف'}}</ion-label>\n        <ion-spinner name=\"crescent\" *ngIf=\"loadingAllItems\" slot=\"end\" size=\"small\"></ion-spinner>\n      </ion-button>\n    </div>\n  </div>\n\n  <!-- Brand Filter Panel -->\n  <div class=\"filter-panel\" *ngIf=\"filterState.brand.isVisible\">\n    <div class=\"filter-panel-header\">\n      <h4>فلتر الماركة</h4>\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"hideBrandFilter()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </div>\n    <div class=\"filter-panel-content\">\n      <!-- Search input for brands -->\n      <ion-item>\n        <ion-input\n          [(ngModel)]=\"brandSearchTerm\"\n          (ionInput)=\"onBrandSearchInput($event)\"\n          placeholder=\"البحث في الماركات...\"\n          clearInput=\"true\">\n          <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n        </ion-input>\n      </ion-item>\n      \n      <div class=\"filter-options\">\n        <ion-item *ngFor=\"let brand of filteredAvailableBrands\" lines=\"none\" button (click)=\"toggleBrandSelection(brand)\">\n          <ion-checkbox \n            slot=\"start\" \n            [(ngModel)]=\"brand.selected\"\n            (ionChange)=\"onBrandSelectionChange(brand)\">\n          </ion-checkbox>\n          <ion-label>{{brand.brand}}</ion-label>\n        </ion-item>\n      </div>\n      \n      <div class=\"filter-panel-actions\">\n        <ion-button \n          fill=\"outline\" \n          color=\"medium\"\n          (click)=\"clearBrandFilter()\">\n          إلغاء التحديد\n        </ion-button>\n        <ion-button \n          fill=\"solid\" \n          (click)=\"applyBrandFilter()\">\n          تطبيق الفلتر\n        </ion-button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Model Filter Panel -->\n  <div class=\"filter-panel\" *ngIf=\"filterState.model.isVisible\">\n    <div class=\"filter-panel-header\">\n      <h4>فلتر الموديل</h4>\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"hideModelFilter()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </div>\n    <div class=\"filter-panel-content\">\n      <!-- Search input for models -->\n      <ion-item>\n        <ion-input\n          [(ngModel)]=\"modelSearchTerm\"\n          (ionInput)=\"onModelSearchInput($event)\"\n          placeholder=\"البحث في الموديلات...\"\n          clearInput=\"true\">\n          <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n        </ion-input>\n      </ion-item>\n      \n      <div class=\"filter-options\">\n        <ion-item *ngFor=\"let model of filteredAvailableModels\" lines=\"none\" button (click)=\"toggleModelSelection(model)\">\n          <ion-checkbox \n            slot=\"start\" \n            [(ngModel)]=\"model.selected\"\n            (ionChange)=\"onModelSelectionChange(model)\">\n          </ion-checkbox>\n          <ion-label>{{model.model}}</ion-label>\n        </ion-item>\n      </div>\n      \n      <div class=\"filter-panel-actions\">\n        <ion-button \n          fill=\"outline\" \n          color=\"medium\"\n          (click)=\"clearModelFilter()\">\n          إلغاء التحديد\n        </ion-button>\n        <ion-button \n          fill=\"solid\" \n          (click)=\"applyModelFilter()\">\n          تطبيق الفلتر\n        </ion-button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Quantity Filter Panel -->\n  <div class=\"filter-panel\" *ngIf=\"filterState.quantity.isVisible\">\n    <div class=\"filter-panel-header\">\n      <h4>فلتر الكمية</h4>\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"hideQuantityFilter()\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </div>\n    <div class=\"filter-panel-content\">\n      <ion-radio-group [(ngModel)]=\"filterState.quantity.filterType\" (ionChange)=\"onQuantityFilterChange($event)\">\n        <div class=\"quantity-filter-options\">\n          \n          <ion-item \n            button \n            class=\"quantity-option-item\"\n            [class.selected]=\"filterState.quantity.filterType === 'positive'\"\n            (click)=\"selectQuantityFilter('positive')\">\n            <ion-icon name=\"trending-up-outline\" color=\"success\" slot=\"start\"></ion-icon>\n            <ion-label>\n              <h3>أكبر من صفر (>0)</h3>\n              <p>عرض الأصناف التي لها كمية أكبر من صفر</p>\n            </ion-label>\n            <ion-radio \n              slot=\"end\"\n              value=\"positive\">\n            </ion-radio>\n          </ion-item>\n\n          <ion-item \n            button \n            class=\"quantity-option-item\"\n            [class.selected]=\"filterState.quantity.filterType === 'zero'\"\n            (click)=\"selectQuantityFilter('zero')\">\n            <ion-icon name=\"remove-outline\" color=\"warning\" slot=\"start\"></ion-icon>\n            <ion-label>\n              <h3>يساوي صفر (=0)</h3>\n              <p>عرض الأصناف التي لها كمية تساوي صفر</p>\n            </ion-label>\n            <ion-radio \n              slot=\"end\"\n              value=\"zero\">\n            </ion-radio>\n          </ion-item>\n\n          <ion-item \n            button \n            class=\"quantity-option-item\"\n            [class.selected]=\"filterState.quantity.filterType === 'negative'\"\n            (click)=\"selectQuantityFilter('negative')\">\n            <ion-icon name=\"trending-down-outline\" color=\"danger\" slot=\"start\"></ion-icon>\n            <ion-label>\n              <h3>أقل من صفر (<0)</h3>\n              <p>عرض الأصناف التي لها كمية أقل من صفر (سالبة)</p>\n            </ion-label>\n            <ion-radio \n              slot=\"end\"\n              value=\"negative\">\n            </ion-radio>\n          </ion-item>\n\n        </div>\n      </ion-radio-group>\n      \n      <div class=\"filter-panel-actions\">\n        <ion-button \n          fill=\"outline\" \n          color=\"medium\"\n          (click)=\"clearQuantityFilter()\">\n          إلغاء التحديد\n        </ion-button>\n        <ion-button \n          fill=\"solid\" \n          (click)=\"applyQuantityFilter()\">\n          تطبيق الفلتر\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</div>\n    <div class=\"selected-items-bar\" *ngIf=\"selectedItemsList.length > 0\">\n      <ion-row dir=\"rtl\">\n        <ion-col size=\"12\">\n          <div class=\"selected-items-card\">\n            <div class=\"selected-items-content\">\n              <ion-grid>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col size=\"12\" size-md=\"6\">\n                    <div class=\"selected-count\">\n                      <div class=\"count-badge\">\n                        {{selectedItemsList.length}}\n                      </div>\n                      <span class=\"selected-text\">\n                        عنصر محدد\n                      </span>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"12\" size-md=\"6\">\n                    <div class=\"action-buttons\">\n                      <ion-button \n                        class=\"action-btn primary-action\" \n                        (click)=\"createPurchaseFromSelected()\">\n                        <ion-icon name=\"add-circle-outline\"></ion-icon>\n                        إنشاء فاتورة شراء\n                      </ion-button>\n                      <ion-button \n                        class=\"action-btn primary-action sales-btn\" \n                        (click)=\"createSalesFromSelected()\">\n                        <ion-icon name=\"receipt-outline\"></ion-icon>\n                        إنشاء فاتورة بيع\n                      </ion-button>\n                            <ion-button \n                        class=\"action-btn primary-action sales-btn\" \n                        (click)=\"createTsiaFromSelected()\">\n                        <ion-icon name=\"receipt-outline\"></ion-icon>\n                          تسوية الكميات  \n                      </ion-button>\n                      <ion-button \n                        class=\"action-btn secondary-action\" \n                        (click)=\"clearSelectionWithAnimation()\">\n                        <ion-icon name=\"close-outline\"></ion-icon>\n                        إلغاء التحديد\n                      </ion-button>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n     </div>   \n\n  </ion-grid>\n<!-- \n  <ion-grid *ngIf=\"items\">\n    <ion-row> \n      <ion-col size=\"2\" class=\"ion-no-padding ion-padding-top\">\n        <ion-label>\n          <strong>تصفية النتائج :</strong>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"6\" > \n        <ion-badge (click)=\"prepareFilters()\" class=\"ion-padding\" >\n          <ion-label class=\"ion-margin-end\">All</ion-label>\n        </ion-badge>\n        <ion-select   multiple=\"true\" cancelText=\"cancel\" okText=\"ok\">\n          <ion-select-option *ngFor=\"let b of brandList\" value=\"b.brand\">\n            {{b.brand}}\n          </ion-select-option>\n        </ion-select>\n        <ion-badge (click)=\"filter('all')\" class=\"ion-padding\" [ngClass]=\"{'selected': selectedIdx == 'all' , 'noneSelected': selectedIdx !='all' }\">\n          <ion-label class=\"ion-margin-end\">All</ion-label>\n        </ion-badge>\n        <ion-badge *ngFor=\"let st of stores ; let i = index\" class=\"ion-padding\" (click)=\"filter(i)\" [ngClass]=\"{'selected':+selectedIdx == +st.id  , 'noneSelected': +selectedIdx != +st.id  }\" >\n          <ion-label>{{st.store_name}}</ion-label>\n        </ion-badge>\n      </ion-col>\n       \n    </ion-row>\n  </ion-grid> -->\n\n  <!-- Unified table card for all view modes -->\n  <ion-card>\n    <ion-card-header class=\"ion-no-padding\">\n      <div class=\"card-header-with-export\">\n        <ion-card-title>\n          <span *ngIf=\"!showSearchView && !hasActiveFilters()\">قائمة الأصناف</span>\n          <span *ngIf=\"showSearchView && currentSearchTerm && currentSearchTerm.trim().length > 0\">نتائج البحث</span>\n          <span *ngIf=\"hasActiveFilters() && !showSearchView\">الأصناف المفلترة</span>\n        </ion-card-title>\n        <app-export-buttons \n          [hasData]=\"hasDataForExport()\"\n          [isLoading]=\"loading || (loadingTot && !showPaginatedView) || (showPaginatedView && paginationLoading && paginationCurrentPage === 1) || (showAllItemsView && loadingAllItems) || (showSearchView && loadingSearch)\"\n          (exportPDF)=\"exportToPDF()\"\n          (exportExcel)=\"exportToExcel()\">\n        </app-export-buttons>\n      </div>\n    </ion-card-header>\n\n    <!-- Unified table container for all view modes -->\n    <div class=\"table-container\">\n      <table class=\"table\">\n               \n                 <tr *ngIf=\"colSetting\">\n                              <th>\n                                <ion-checkbox [checked]=\"isAllSelected()\" [indeterminate]=\"isSomeSelected()\" (ionChange)=\"toggleSelectAll($event)\">\n                                </ion-checkbox>\n                              </th>\n                  <th> \n                    التسلسل\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('id')\">\n                      <ion-icon [name]=\"getSortIcon('id')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">\n                    الصنف\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('item_name')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('item_name')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.item_desc== false , 'showMe': colSetting.item_desc== true }\">اسم الصنف  (English)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('item_desc')\">\n                      <ion-icon [name]=\"getSortIcon('item_desc')\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.aliasEn== false , 'showMe': colSetting.aliasEn== true }\">اسم  مستعار  (Alias)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('aliasEn')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('aliasEn')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">الموديل (model)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('model')\">\n                      <ion-icon [name]=\"getSortIcon('model')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                 \n                  <th  [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">الكود (part no)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('part_no')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('part_no')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">الماركة (brand) \n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('brand')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('brand')\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.min_qty == false , 'showMe': colSetting.min_qty == true }\">اقل كمية (MSQ)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('min_qty')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('min_qty')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.item_unit== false , 'showMe': colSetting.item_unit== true }\">الوحده (unit)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('item_unit')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('item_unit')\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">سعر الشراء (purch price)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('perch_price')\">\n                      <ion-icon [name]=\"getSortIcon('perch_price')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">سعر الوحده (selling price)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('pay_price')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('pay_price')\"></ion-icon>\n                    </ion-button>\n                  </th> \n                  <th  [ngClass]=\"{'hideMe': colSetting.profit == false , 'showMe': colSetting.profit == true }\">نسبة الفائدة (profit perc)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('profit')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('profit')\"></ion-icon>\n                    </ion-button>\n                  </th>  \n                  <th  [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">المخزون (in stock)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('quantity')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('quantity')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">المجموع\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('total')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('total')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th  [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">اخر عملية بيع\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('lastSold')\">\n                    \n                      <ion-icon [name]=\"getSortIcon('lastSold')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                 \n                  <th>المخزون الإفتتاحي</th> \n                  <!-- <th  [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\"><strong>تعديل</strong>  </th>  -->\n                  <!-- <th  [ngClass]=\"{'hideMe': colSetting.delete == false , 'showMe': colSetting.delete == true }\"><strong>حذف</strong>  </th>  -->\n                 <th [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\"><strong>الإجراءات</strong></th>\n                </tr>\n\n        <!-- Unified data rows for all view modes -->\n        <tr *ngFor=\"let item of getCurrentTableData(); let i = index\" \n            (dblclick)=\"prClick(i, item)\" \n            [ngClass]=\"{'red': item.quantity < 0, 'darko': item.quantity > 0}\">\n                  <!-- <td>{{i+1}}</td> -->\n                    <td>\n                      <ion-checkbox [checked]=\"isItemSelected(item)\" (ionChange)=\"toggleItemSelection(item, $event)\">\n                      </ion-checkbox>\n                    </td>\n                  <td>{{item.id}}</td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_name}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_name\"  ></ion-input>\n                     </ion-item>\n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.item_desc == false , 'showMe': colSetting.item_desc == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_desc}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_desc\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.aliasEn == false , 'showMe': colSetting.aliasEn == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.aliasEn}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.aliasEn\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.model}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.model\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.part_no}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.part_no\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.brand}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.brand\"  ></ion-input>\n                     </ion-item>\n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.min_qty == false , 'showMe': colSetting.min_qty == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.min_qty}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.min_qty\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.item_unit == false , 'showMe': colSetting.item_unit == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_unit}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_unit\"  ></ion-input>\n                     </ion-item> \n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{formatBalance(item.perch_price)}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.perch_price\"  ></ion-input>\n                     </ion-item> \n                  </td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{formatBalance(item.pay_price)}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.pay_price\"  ></ion-input>\n                     </ion-item> \n                  </td> \n                  <td  [ngClass]=\"{'hideMe': colSetting.profit == false , 'showMe': colSetting.profit == true }\">\n                    {{calculateProfit(item).toFixed(2)}}\n                  </td>\n                \n                  <td  [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">{{item.quantity}}</td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">{{formatBalance(+item.quantity * +item.perch_price)}}</td>\n                  <td  [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">{{item.lastSoldDate }}</td>\n                  <!-- new -->\n                  <!-- <td   >{{item.sales28 }}</td>\n                  <td   >{{item.salesQuantity }}</td>\n                  <td   >{{item.purch28 }}</td> \n                  <td   >{{item.perchQuantity }}</td> -->\n                  <td>\n                     <ion-item *ngIf=\"showMe == i\">\n                    <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.quantity\"  ></ion-input>\n                     </ion-item>\n\n                    <ion-text *ngIf=\"showMe != i\">\n                      {{item.firstQuantity}}\n                    </ion-text> \n                  </td>\n                  \n\n                  <!-- end new -->\n                    <td [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\">\n                      <ion-button fill=\"clear\" size=\"small\" (click)=\"presentActionPopover($event, item)\" id=\"action-trigger-{{i}}\">\n                        <ion-icon name=\"ellipsis-vertical\" color=\"medium\"></ion-icon>\n                      </ion-button>\n                    </td>\n\n                 \n                  <!-- <td  [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\">\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"presentModal(item.id , 'edit')\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon> \n                    </ion-button>\n                  </td> -->\n                  \n                   <!-- <td  [ngClass]=\"{'hideMe': colSetting.delete == false , 'showMe': colSetting.delete == true }\">\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(item)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>   -->\n                 </tr> \n                 <tr  *ngIf=\"loadingTot == true \" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                 </tr>\n                 <tr  *ngIf=\"loadingTot == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  \n        </tr>\n      </table>\n    </div>\n\n    <!-- Loading indicators for different modes -->\n    <div *ngIf=\"loading || (showPaginatedView && paginationLoading && paginationCurrentPage === 1) || (loadingTot && !showPaginatedView)\" class=\"loading-container\">\n      <div class=\"loading-content\">\n        <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n        <p class=\"loading-text\">\n          <span *ngIf=\"showSearchView && currentSearchTerm && currentSearchTerm.trim().length > 0\">جاري البحث...</span>\n          <span *ngIf=\"hasActiveFilters() && !showSearchView\">جاري تطبيق الفلاتر...</span>\n          <span *ngIf=\"showPaginatedView && (paginationLoading || loadingTot)\">جاري تحميل البيانات...</span>\n          <span *ngIf=\"showAllItemsView && loadingAllItems\">جاري تحميل جميع الأصناف...</span>\n          <span *ngIf=\"!showSearchView && !hasActiveFilters() && !showPaginatedView && !showAllItemsView\">جاري التحميل...</span>\n        </p>\n      </div>\n    </div>\n\n    <!-- No data message -->\n    <div *ngIf=\"!loading && !(loadingTot && !showPaginatedView) && !(showPaginatedView && paginationLoading && paginationCurrentPage === 1) && getCurrentTableData().length === 0\" class=\"no-data-container\">\n      <p class=\"no-data-text\">\n        <span *ngIf=\"showSearchView && currentSearchTerm && currentSearchTerm.trim().length > 0\">لا توجد نتائج للبحث عن \"{{currentSearchTerm}}\"</span>\n        <span *ngIf=\"hasActiveFilters() && !showSearchView\">لا توجد عناصر تطابق الفلاتر المحددة</span>\n        <span *ngIf=\"!showSearchView && !hasActiveFilters()\">لا توجد أصناف</span>\n      </p>\n    </div>\n\n    <!-- Summary cards for search and all items views -->\n    <div *ngIf=\"showSearchView && currentSearchTerm && currentSearchTerm.trim().length > 0 && !loadingSearch && searchData.length > 0\" class=\"totals-summary ion-padding\">\n      <ion-card>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                <h4>البحث عن: \"{{currentSearchTerm}}\"</h4>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                <h3>عدد النتائج</h3>\n                <p class=\"total-value\">{{searchStockTotals.items_count}}</p>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                <h3>إجمالي قيمة المخزون</h3>\n                <p class=\"total-value\">{{searchStockTotals.store_tot | number : '1.2-2'}}</p>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                <h3>إجمالي تكلفة المخزون</h3>\n                <p class=\"total-value\">{{searchStockTotals.perch_tot | number : '1.2-2'}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"showAllItemsView && !loadingAllItems\" class=\"totals-summary ion-padding\">\n      <ion-card>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                <h3>إجمالي الأصناف</h3>\n                <p class=\"total-value\">{{allItemsStockTotals.items_count}}</p>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                <h3>إجمالي قيمة المخزون</h3>\n                <p class=\"total-value\">{{allItemsStockTotals.store_tot | number : '1.2-2'}}</p>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                <h3>إجمالي تكلفة المخزون</h3>\n                <p class=\"total-value\">{{allItemsStockTotals.perch_tot | number : '1.2-2'}}</p>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                <h3>إجمالي الكمية</h3>\n                <p class=\"total-value\">{{allItemsStockTotals.quantity | number : '1.2-2'}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <!-- Load More Button for Pagination -->\n    <div class=\"load-more-container\" \n         *ngIf=\"(paginationHasMore && !filterMode && !showSearchView && !showAllItemsView) || \n                (hasActiveFilters() && filterArray.length > 0 && !showAllItems && !showSearchView)\">\n      <ion-button \n        fill=\"outline\" \n        color=\"primary\" \n        (click)=\"loadMoreItems()\" \n        [disabled]=\"paginationLoading\">\n        <ion-icon name=\"refresh-outline\" *ngIf=\"!paginationLoading\"></ion-icon>\n        <ion-spinner name=\"crescent\" *ngIf=\"paginationLoading\"></ion-spinner>\n        <ion-label class=\"ion-margin-start\">\n          {{paginationLoading ? 'جاري التحميل...' : 'تحميل المزيد'}}\n        </ion-label>\n      </ion-button>\n    </div>\n\n    <!-- Action popover - placed at the end of the unified card -->\n    <ion-popover #actionPopover [isOpen]=\"isActionPopoverOpen\" (didDismiss)=\"isActionPopoverOpen = false\">\n      <ng-template>\n        <ion-content>\n          <ion-list>\n            <ion-item button (click)=\"editItem(selectedActionItem)\">\n              <ion-icon name=\"create-outline\" color=\"success\" slot=\"start\"></ion-icon>\n              <ion-label>تعديل</ion-label>\n            </ion-item>\n            <ion-item button (click)=\"viewItemReport(selectedActionItem)\">\n              <ion-icon name=\"analytics-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n              <ion-label>تقرير الصنف</ion-label>\n            </ion-item>\n            <ion-item button (click)=\"deleteItem(selectedActionItem)\">\n              <ion-icon name=\"trash\" color=\"danger\" slot=\"start\"></ion-icon>\n              <ion-label>حذف</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-content>\n      </ng-template>\n    </ion-popover>\n\n  </ion-card>\n\n  <!-- Export mode content (separate from main unified card) -->\n           <!-- Loading indicator for excel filter mode -->\n           <div *ngIf=\"loading && filterMode && exportMode\" class=\"filter-loading-container\">\n             <div class=\"loading-content\">\n               <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n               <p class=\"loading-text\">جاري تطبيق الفلاتر...</p>\n             </div>\n           </div>\n\n           <!-- Filter mode table -->\n           <div class=\"table-container\" *ngIf=\"filterMode == true && !loading && exportMode == true\">\n           <table id=\"exceltable\" class=\"table\">\n                <tr *ngIf=\"colSetting\">\n                  <th>\n                    <ion-checkbox [checked]=\"isAllSelected()\" [indeterminate]=\"isSomeSelected()\" (ionChange)=\"toggleSelectAll($event)\">\n                    </ion-checkbox>\n                  </th>\n                  <th>التسلسل\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('id')\">\n                      <ion-icon [name]=\"getSortIcon('id')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">الصنف\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('item_name')\">\n                      <ion-icon [name]=\"getSortIcon('item_name')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.item_desc== false , 'showMe': colSetting.item_desc== true }\">اسم الصنف (English)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('item_desc')\">\n                      <ion-icon [name]=\"getSortIcon('item_desc')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.aliasEn== false , 'showMe': colSetting.aliasEn== true }\">اسم مستعار (Alias)\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('aliasEn')\">\n                      <ion-icon [name]=\"getSortIcon('aliasEn')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">رقم الجزء\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('part_no')\">\n                      <ion-icon [name]=\"getSortIcon('part_no')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">البراند\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('brand')\">\n                      <ion-icon [name]=\"getSortIcon('brand')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">الموديل\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('model')\">\n                      <ion-icon [name]=\"getSortIcon('model')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.item_unit == false , 'showMe': colSetting.item_unit == true }\">الوحدة\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('item_unit')\">\n                      <ion-icon [name]=\"getSortIcon('item_unit')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">سعر الشراء\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('perch_price')\">\n                      <ion-icon [name]=\"getSortIcon('perch_price')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">سعر الوحده\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('pay_price')\">\n                      <ion-icon [name]=\"getSortIcon('pay_price')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">المخزون\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('quantity')\">\n                      <ion-icon [name]=\"getSortIcon('quantity')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">المجموع\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('total')\">\n                      <ion-icon [name]=\"getSortIcon('total')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">اخر عملية بيع\n                    <ion-button class=\"ion-no-margin ion-no-padding\" color=\"success\" fill=\"clear\" size=\"small\" (click)=\"sortData('lastSold')\">\n                      <ion-icon [name]=\"getSortIcon('lastSold')\"></ion-icon>\n                    </ion-button>\n                  </th>\n                  <th>المخزون الإفتتاحي</th>\n                  <th [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\"><strong>الإجراءات</strong></th>\n                </tr>\n\n                <tr *ngFor=\"let item of allItemsData ; let i = index\" (dblclick)=\"prClick(i , item)\" [ngClass]=\"{'red': item.quantity < 0  , 'darko':item.quantity > 0}\">\n                  <td>\n                    <ion-checkbox [checked]=\"isItemSelected(item)\" (ionChange)=\"toggleItemSelection(item, $event)\">\n                    </ion-checkbox>\n                  </td>\n                  <td>{{item.id}}</td>\n                  <td [ngClass]=\"{'hideMe': colSetting.item_name == false , 'showMe': colSetting.item_name == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_name}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_name\"  ></ion-input>\n                     </ion-item>\n                  </td> \n                  <td [ngClass]=\"{'hideMe': colSetting.item_desc == false , 'showMe': colSetting.item_desc == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_desc}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_desc\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.aliasEn == false , 'showMe': colSetting.aliasEn == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.aliasEn}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.aliasEn\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.part_no == false , 'showMe': colSetting.part_no == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.part_no}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.part_no\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.brand == false , 'showMe': colSetting.brand == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.brand}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.brand\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.model == false , 'showMe': colSetting.model == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.model}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.model\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.item_unit == false , 'showMe': colSetting.item_unit == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.item_unit}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.item_unit\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.perch_price == false , 'showMe': colSetting.perch_price == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{formatBalance(item.perch_price)}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.perch_price\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.pay_price == false , 'showMe': colSetting.pay_price == true }\">\n                    <ion-text *ngIf=\"showMe != i\">{{formatBalance(item.pay_price)}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.pay_price\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.instock == false , 'showMe': colSetting.instock == true }\">\n                    <ion-text [ngClass]=\"{'negative': item.quantity < 0}\">{{item.quantity}}</ion-text>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.total == false , 'showMe': colSetting.total == true }\">\n                    <ion-text>{{formatBalance(item.stockValuePayPrice)}}</ion-text>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.lastSold == false , 'showMe': colSetting.lastSold == true }\">\n                    <ion-text>{{item.lastSoldDate}}</ion-text>\n                  </td>\n                  <td>\n                    <ion-text *ngIf=\"showMe != i\">{{item.firstQuantity}}</ion-text>\n                    <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i ,item)\" [(ngModel)] =\"this.selectedItem2.quantity\"  ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td [ngClass]=\"{'hideMe': colSetting.edit == false , 'showMe': colSetting.edit == true }\">\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"presentActionPopover($event, item)\" id=\"action-trigger-{{i}}\">\n                      <ion-icon name=\"ellipsis-vertical\" color=\"medium\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>\n\n                <!-- Loading indicator for all items -->\n                <tr *ngIf=\"loadingAllItems\">\n                  <td colspan=\"16\" class=\"ion-text-center ion-padding\">\n                    <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n                    <p>جاري تحميل جميع الأصناف...</p>\n                  </td>\n                </tr>\n\n                <!-- Empty state -->\n                <tr *ngIf=\"!loadingAllItems && allItemsData.length === 0\">\n                  <td colspan=\"16\" class=\"ion-text-center ion-padding\">\n                    <p>لا توجد أصناف للعرض</p>\n                  </td>\n                </tr>\n              </table>\n              </div>\n             \n               \n\n\n\n              <!-- Loading indicator for filter mode -->\n                <!-- Filter loading - now handled by unified table above -->\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_item-stock_item-stock_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_items-report_items-report_module_ts"],{

/***/ 61508:
/*!*************************************************************!*\
  !*** ./src/app/items-report/items-report-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsReportPageRoutingModule": () => (/* binding */ ItemsReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _items_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-report.page */ 74374);




const routes = [
    {
        path: '',
        component: _items_report_page__WEBPACK_IMPORTED_MODULE_0__.ItemsReportPage
    }
];
let ItemsReportPageRoutingModule = class ItemsReportPageRoutingModule {
};
ItemsReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemsReportPageRoutingModule);



/***/ }),

/***/ 90435:
/*!*****************************************************!*\
  !*** ./src/app/items-report/items-report.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsReportPageModule": () => (/* binding */ ItemsReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _items_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-report-routing.module */ 61508);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);
/* harmony import */ var _items_report_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items-report.page */ 74374);








let ItemsReportPageModule = class ItemsReportPageModule {
};
ItemsReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _items_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemsReportPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ],
        declarations: [_items_report_page__WEBPACK_IMPORTED_MODULE_2__.ItemsReportPage]
    })
], ItemsReportPageModule);



/***/ }),

/***/ 74374:
/*!***************************************************!*\
  !*** ./src/app/items-report/items-report.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsReportPage": () => (/* binding */ ItemsReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _items_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-report.page.html?ngResource */ 98309);
/* harmony import */ var _items_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-report.page.scss?ngResource */ 80868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _services_sorting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/sorting.service */ 52562);













let ItemsReportPage = class ItemsReportPage {
    constructor(route, rout, renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast, sortingService) {
        this.route = route;
        this.rout = rout;
        this.renderer = renderer;
        this.modalController = modalController;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.sortingService = sortingService;
        this.searchResult = [];
        this.isOpen = false;
        this.payArray = [];
        this.sortedPayArray = [];
        this.currentTransactionsSort = null;
        this.payArrayDaily = [];
        this.perchDetailsArr = [];
        this.payDetailsArr = [];
        this.tswiaDetailsArr = [];
        this.hasParameter = false;
        this.searchTerm = "";
        this.searchLang = 0;
        this.sub_account1 = [];
        this.sub_account2 = [];
        this.sub_accountLocalSales = [];
        this.sub_accountLocalPurch = [];
        this.sub_accountSales = [];
        this.sub_accountPurch = [];
        this.items = [];
        this.itemsLocal = [];
        this.itemList = [];
        this.sortedItems = [];
        this.currentSort = null;
        this.salesLocal = [];
        this.loading = false;
        this.sales = [];
        this.randomsNumber = [];
        this.sub_nameNew = "";
        this.radioVal = 0;
        this.printMode = false;
        this.printArr = [];
        this.offline = false;
        this.color = 'dark';
        this.showEmpty = false;
        this.showError = false;
        this.loadingItems = false;
        this.qtyReal = 0;
        this.availQty = 0;
        this.currenQty = 0;
        this.firstQty = 0;
        this.perchTotQty = 0;
        this.payTotQty = 0;
        this.perchTot = 0;
        this.payTot = 0;
        this.totSales = 0;
        this.totPurch = 0;
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
            firstQuantity: 0,
            aliasEn: ""
        };
        this.selectedItemNew = {
            id: undefined,
            pay_ref: "",
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
            perch_price: 0,
            qtyReal: 0,
            availQty: 0,
            currenQty: 0,
            firstQty: 0,
            perchTotQty: 0,
            payTotQty: 0,
            totSales: 0,
            totPurch: 0
        };
        let d = new Date;
        this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd');
    }
    changeMode() {
        if (this.offline == true) {
            this.offline = false;
            this.color = 'primary';
        }
        else if (this.offline == false) {
            this.offline = true;
            this.color = 'dark';
        }
        this.storage.set('offline', this.offline).then((response) => {
            //console.log('mooooode',this.offline)  
        });
    }
    ionViewDidEnter() {
        this.route.queryParams.subscribe(params => {
            if (params['item']) {
                try {
                    const item = JSON.parse(params['item']);
                    this.handleItemFromNavigation(item);
                    return; // Exit early if we have a navigation parameter
                }
                catch (error) {
                    console.error('Error parsing item parameter:', error);
                }
            }
        });
        if (this.selectedItem.id) {
            console.log('ionViewDidEnter', this.selectedItem.id);
            this.search();
            //console.log('im sarching for you')
        }
    }
    ngOnInit() {
        this.route.queryParams.subscribe(queryParams => {
            if (Object.keys(queryParams).length > 0) {
                this.hasParameter = true;
            }
        });
        this.prepareOffline();
        this.getAppInfo();
        this.route.queryParams.subscribe(params => {
            if (params['item']) {
                try {
                    console.log('item param', params['item']);
                    const item = JSON.parse(params['item']);
                    this.handleItemFromNavigation(item);
                }
                catch (error) {
                    console.error('Error parsing item parameter:', error);
                }
            }
        });
    }
    handleItemFromNavigation(item) {
        // Wait for items to be loaded before processing
        setTimeout(() => {
            if (this.items && this.items.length > 0) {
                this.selectFromPop(item);
                this.search();
            }
            else {
                // If items not loaded yet, wait a bit more
                setTimeout(() => {
                    if (this.items && this.items.length > 0) {
                        this.selectFromPop(item);
                        this.search();
                    }
                }, 2000);
            }
        }, 1000);
    }
    readItemByIdQty() {
        var _a;
        // This method is now integrated into the search() method which uses getCompleteItemReport
        // Keeping it here for backward compatibility if called from other places
        if (!((_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id)) {
            return;
        }
        this.api.readItemByIdQty(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            console.log('readItemByIdQty', data);
            let res = data['data'][0];
            if (res && res['message'] != 'No record Found') {
                this.payTotQty = res.salesQuantity;
                this.availQty = res.availQty;
                this.qtyReal = res.qtyReal;
                this.perchTotQty = res.perchQuantity;
                this.firstQty = res.firstQuantity;
                console.log('readItemByIdQty', this.payTotQty, this.availQty, this.qtyReal, this.perchTotQty, this.firstQty);
                this.selectedItemNew = {
                    id: res.id,
                    pay_ref: "",
                    item_desc: res.item_desc || "",
                    item_name: res.item_name || "",
                    item_unit: res.item_unit || "",
                    parcode: res.item_parcode || 0,
                    pay_price: res.pay_price || 0,
                    perch_price: res.perch_price || 0,
                    qtyReal: res.qtyReal || 0,
                    availQty: res.availQty || 0,
                    firstQty: res.firstQuantity || 0,
                    perchTotQty: res.perchQuantity || 0,
                    payTotQty: res.salesQuantity || 0,
                    totSales: res.sales28 || 0,
                    totPurch: res.purch28 || 0,
                    currenQty: 0,
                };
                this.getQtyTotalItemId();
            }
        }, (err) => {
            console.log(err);
            this.presentToast('خطأ في الإتصال حاول مرة أخرى', 'danger');
        }, () => {
        });
    }
    getQtyTotalItemId() {
        //console.log('perchTotQty',this.perchTotQty ,this.payTotQty )
        //تجميع الكيات السالبة وتحويلها لموجب لإضافتها للمشتريات
        if ((+this.selectedItemNew.availQty - +this.selectedItemNew.qtyReal) < 0) {
            this.selectedItemNew.perchTotQty = +this.selectedItemNew.perchTotQty + Math.abs((+this.selectedItemNew.availQty - +this.selectedItemNew.qtyReal));
        }
        else if ((+this.selectedItemNew.availQty - +this.selectedItemNew.qtyReal) > 0) {
            this.selectedItemNew.payTotQty = +this.selectedItemNew.payTotQty + (+this.selectedItemNew.availQty - +this.selectedItemNew.qtyReal);
        }
        this.selectedItemNew.availQty = +this.selectedItemNew.firstQty + +this.selectedItemNew.perchTotQty - +this.selectedItemNew.payTotQty;
        console.log(this.selectedItemNew.availQty);
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAllStockItemsWithouteCounts();
        });
    }
    getItemLocalOff() {
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)  
                this.items = this.itemsLocal;
                this.searchResult = this.items;
            }
        });
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
                        // this.items.forEach(element => {
                        //   if(+element.tswiaQuantity > 0){
                        //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
                        //   }else if(+element.tswiaQuantity < 0){
                        //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
                        //   } 
                        //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
                        // });
                        // this.searchResult = this.items
                        // Apply sorting after loading items
                        this.applySorting();
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
                    // Apply sorting after loading items from offline
                    this.applySorting();
                    this.searchResult = this.items;
                }
            }
        });
    }
    getStockItems() {
        this.loadingItems = true;
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                if (this.offline == false) {
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
                            element.availQty = +element.quantity;
                        });
                    }, (err) => {
                        //console.log(err);
                        this.loadingItems = false;
                    }, () => {
                        this.loadingItems = false;
                    });
                }
                else {
                    this.items = this.itemsLocal;
                    this.items.forEach(element => {
                        if (+element.tswiaQuantity > 0) {
                            element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                        }
                        else if (+element.tswiaQuantity < 0) {
                            element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                        }
                        element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                        element.availQty = +element.quantity;
                    });
                }
            }
        });
    }
    // sumStocksItems(){
    //   this.api.stockItems(1).subscribe(data => {
    //     //console.log(data)
    //     let res = data
    //     let arr = res['data']
    //     for (let index = 0; index < this.items.length; index++) {
    //       const element = this.items[index];
    //       let flt = arr.filter(x=>x.id == element.id)
    //       if(flt.length>0){
    //         //console.log('here we are ')
    //         element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
    //       //  element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
    //         element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
    //       }
    //     } 
    //     this.items.forEach(element => {
    //       element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    //     });
    //   }, (err) => {
    //     //console.log(err);
    //   },
    //     () => {
    //     }
    //   )
    // }
    getOffliemode() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log('mooooode',this.offline)
            if (this.offline == true) {
                this.color = 'dark';
            }
            else {
                this.color = 'primary';
            }
        });
    }
    getAppInfo() {
        this.getOffliemode();
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
                //console.log(response)
                //console.log(this.store_info)
                // Remove getAllStockItemsWithouteCounts() call since enhanced component handles this
                this.getSalesAccount();
                this.getItemLocalOff();
            }
        });
        this.storage.get('searchLang').then((response) => {
            if (response) {
                this.searchLang = response;
                //console.log('searchLang' ,this.searchLang) 
            }
        });
    }
    getSalesAccount() {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account1 = res['data'];
                //console.log(this.sub_account1)
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
        if (this.sub_account1) {
            if (this.sub_accountLocalSales) {
                for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                    const element = this.sub_accountLocalSales[i];
                    this.sub_account1.push(element);
                }
            }
        }
        else {
            if (this.sub_accountLocalSales) {
                this.sub_account1 = this.sub_accountLocalSales;
            }
        }
    }
    //Yaw
    MixSubaccountSalesOffline() {
        this.sub_account1 = [];
        if (this.sub_accountLocalSales) {
            for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                const element = this.sub_accountLocalSales[i];
                this.sub_account1.push(element);
            }
        }
        if (this.sub_accountSales) {
            for (let i = 0; i < this.sub_accountSales.length; i++) {
                const element = this.sub_accountSales[i];
                this.sub_account1.push(element);
            }
        }
    }
    ///
    getPurchAccount() {
        if (this.offline == false) {
            this.api.getPerchAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account1 = res['data'];
                //console.log(this.sub_account1)
                this.addSubaccountLocalPurch();
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.MixSubaccountPurchOffline();
        }
    }
    addSubaccountLocalPurch() {
        if (this.sub_account2) {
            if (this.sub_accountLocalPurch) {
                for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
                    const element = this.sub_accountLocalPurch[i];
                    this.sub_account2.push(element);
                }
            }
        }
        else {
            if (this.sub_accountLocalPurch) {
                this.sub_account2 = this.sub_accountLocalPurch;
            }
        }
    }
    MixSubaccountPurchOffline() {
        this.sub_account2 = [];
        if (this.sub_accountLocalPurch) {
            for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
                const element = this.sub_accountLocalPurch[i];
                this.sub_account2.push(element);
            }
        }
        if (this.sub_accountPurch) {
            for (let i = 0; i < this.sub_accountPurch.length; i++) {
                const element = this.sub_accountPurch[i];
                this.sub_account1.push(element);
            }
        }
    }
    prepareOffline() {
        this.storage.get('salesLocal').then((response) => {
            //console.log('saleslocal heres',this.salesLocal) 
            if (response) {
                this.salesLocal = response;
                //console.log('salesLocal',this.salesLocal) 
            }
        });
        this.storage.get('sales').then((response) => {
            //console.log('sales heres',this.sales) 
            if (response) {
                this.sales = response;
                //console.log('sales',this.sales) 
            }
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)  
                this.items = this.itemsLocal;
            }
        });
        this.storage.get('sub_accountLocalSales').then((response) => {
            if (response) {
                this.sub_accountLocalSales = response;
                //console.log(this.sub_accountLocalSales)  
            }
        });
        //Yaw
        this.storage.get('sub_accountSales').then((response) => {
            if (response) {
                this.sub_accountSales = response;
                //console.log(this.sub_accountLocalSales)  
            }
        });
    }
    radioChange(ev) {
        //console.log(ev.target.value) 
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        else if (Input == 'popInput') {
            this.popInput.setFocus();
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
                availQty: 0,
                firstQuantity: 0,
                aliasEn: "",
            };
        }
        else {
            this.searchTerm = "";
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
    searchItem(ev) {
        this.searchResult = [];
        //   this.aliasTerm = ev.target.value 
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe;
        let fiteredArr = filterPipe.transform(this.items, ev.target.value);
        if (fiteredArr.length > 0) {
            fiteredArr.forEach(element => {
                this.searchResult.push(element);
            });
        }
    }
    didDissmis() {
        this.isOpen = false;
        //console.log('dismissOver')
        this.readItemByIdQty();
        this.setFocusOnInput('qtyId');
    }
    pickDetail(ev) {
        this.readItemByIdQty();
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
        this.selectedItem = {
            id: fl[0]['id'],
            dateCreated: fl[0]['dateCreated'],
            pay_ref: "",
            item_desc: fl[0]['item_desc'],
            item_name: fl[0]['item_name'],
            item_unit: fl[0]['item_unit'],
            parcode: fl[0]['parcode'],
            pay_price: fl[0]['pay_price'],
            perch_price: fl[0]['perch_price'],
            qty: 0,
            tot: fl[0]['pay_price'],
            availQty: +fl[0]['availQty'],
            firstQuantity: fl[0]['firstQuantity'],
            aliasEn: fl[0]['aliasEn']
        };
        //console.log('sseelleecctteedd' ,this.selectedItem);
        // this.currenQty = this.selectedItem.availQty
        // this.firstQty = +this.selectedItem.firstQuantity
    }
    selectFromPop(item) {
        this.readItemByIdQty();
        //console.log(item)
        this.selectedItem = {
            id: item.id,
            dateCreated: item.dateCreated,
            pay_ref: "",
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
            firstQuantity: item.firstQuantity
        };
        this.searchTerm = item.item_name;
        //console.log( this.selectedItem); 
        this.didDissmis();
        //perform calculate here so moataz can get the qty
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 3000,
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
    getPayInvoDetail(pay, sub_name, status) {
        console.log(pay, sub_name, status);
        let itemList = [];
        this.presentLoadingWithOptions('جاري جلب التفاصيل ...');
        let payInvo = {
            pay_id: pay.pay_id,
            pay_ref: pay.pay_ref,
            store_id: pay.store_id,
            tot_pr: pay.tot_pr,
            pay: pay.pay,
            pay_date: pay.pay_date,
            pay_time: pay.pay_time,
            user_id: pay.user_id,
            cust_id: pay.cust_id,
            pay_method: pay.pay_method,
            discount: pay.discount,
            changee: pay.changee,
            sub_name: pay.sub_name,
            yearId: pay.yearId,
            payComment: pay.payComment,
            nextPay: pay.payComment
        };
        let payInvo2 = {
            pay_id: pay.pay_id,
            pay_ref: pay.pay_ref,
            store_id: pay.store_id,
            tot_pr: pay.tot_pr,
            pay_date: pay.pay_date,
            pay_time: pay.pay_time,
            user_id: pay.user_id,
            yearId: pay.yearId,
            payComment: pay.payComment
        };
        //console.log('before',this.perchDetailsArr)
        //console.log(this.payDetailsArr)
        // get item list from pay  item details  info 
        if (pay.type == "مبيعات") {
            this.api.getPayInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
                //console.log(data,'case 1')
                let res = data;
                //console.log(pay) 
                this.loadingController.dismiss();
                let navigationExtras = {
                    queryParams: {
                        payInvo: JSON.stringify(payInvo),
                        sub_name: JSON.stringify(sub_name),
                        user_info: JSON.stringify(this.user_info),
                        store_info: JSON.stringify(this.store_info),
                        itemList: JSON.stringify(res['data']),
                        screen: "itemReport"
                    }
                };
                this.rout.navigate(['folder/edit-sales'], navigationExtras);
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            });
        }
        else if (pay.type == "مشتريات") {
            this.api.getPerchInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
                //console.log(data,'case 1')
                let res = data;
                //console.log(pay) 
                this.loadingController.dismiss();
                let navigationExtras = {
                    queryParams: {
                        payInvo: JSON.stringify(payInvo),
                        sub_name: JSON.stringify(sub_name),
                        user_info: JSON.stringify(this.user_info),
                        store_info: JSON.stringify(this.store_info),
                        itemList: JSON.stringify(res['data']),
                        screen: "itemReport"
                    }
                };
                this.rout.navigate(['folder/edit-perch'], navigationExtras);
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            });
        }
        else if (pay.type == "تسوية جردية") {
            this.api.getTswiaInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
                //console.log(data,'case 1')
                let res = data;
                //console.log(pay) 
                this.loadingController.dismiss();
                let navigationExtras = {
                    queryParams: {
                        payInvo: JSON.stringify(payInvo2),
                        user_info: JSON.stringify(this.user_info),
                        store_info: JSON.stringify(this.store_info),
                        itemList: JSON.stringify(res['data']),
                        screen: "itemReport"
                    }
                };
                this.rout.navigate(['folder/edit-tswia'], navigationExtras);
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            });
        }
    }
    getItemPaysByItemIdBydate() {
        // this.getSalesfromLocal()
        this.loading = true;
        this.api.getItemPaysByItemIdBydate(this.store_info.id, this.selectedItem.id, this.startingDate, this.year.id).subscribe(data => {
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payDetailsArr = res['data'];
                this.payDetailsArr = this.payDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                for (let i = 0; i < this.payDetailsArr.length; i++) {
                    const element = this.payDetailsArr[i];
                    element.type = 'مبيعات';
                }
            }
            this.getItemPurchsByItemIdBydate();
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    getItemPaysBydate() {
        // this.getSalesfromLocal()
        this.loading = true;
        this.api.getItemPaysBydate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payDetailsArr = res['data'];
                this.payDetailsArr = this.payDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                for (let i = 0; i < this.payDetailsArr.length; i++) {
                    const element = this.payDetailsArr[i];
                    element.type = 'مبيعات';
                }
            }
            this.getItemPurchsBydate();
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    getItemPaysByItemId() {
        this.loading = true;
        this.api.getItemPaysByItemId(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            //console.log('hhhhhsssshh',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payDetailsArr = res['data'];
                this.payDetailsArr = this.payDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                for (let i = 0; i < this.payDetailsArr.length; i++) {
                    const element = this.payDetailsArr[i];
                    element.type = 'مبيعات';
                }
            }
            this.getItemPurchByItemId();
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
            this.presentToast('1خطا في الإتصال حاول مرة اخري', 'danger');
            this.loading = false;
        }, () => { });
    }
    getItemPaysByItemIdBy2date() {
        // this.getSalesfromLocal()
        this.loading = true;
        this.api.getItemPaysByItemIdBy2date(this.store_info.id, this.selectedItem.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log('hhhhhsssshh',data) 
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payDetailsArr = res['data'];
                this.payDetailsArr = this.payDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                for (let i = 0; i < this.payDetailsArr.length; i++) {
                    const element = this.payDetailsArr[i];
                    element.type = 'مبيعات';
                }
            }
            this.getItemPurchByItemIdBy2date();
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
            this.loading = false;
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    getItemPurchsBydate() {
        // this.getSalesfromLocal()
        this.perchDetailsArr = [];
        this.loading = true;
        this.api.getItemPurchsBydate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log('purch',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.perchDetailsArr = res['data'];
                this.perchDetailsArr = this.perchDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                for (let i = 0; i < this.perchDetailsArr.length; i++) {
                    const element = this.perchDetailsArr[i];
                    element.type = 'مشتريات';
                }
            }
            this.getItemTswiasBydate();
        }, (err) => {
            //console.log(err);
            this.loading = false;
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    //
    getItemPurchsByItemIdBydate() {
        // this.getSalesfromLocal()
        this.perchDetailsArr = [];
        this.loading = true;
        this.api.getItemPurchsByItemIdBydate(this.store_info.id, this.selectedItem.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log('purch',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.perchDetailsArr = res['data'];
                this.perchDetailsArr = this.perchDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                for (let i = 0; i < this.perchDetailsArr.length; i++) {
                    const element = this.perchDetailsArr[i];
                    element.type = 'مشتريات';
                }
            }
            this.getItemTswiasByItemIdBydate();
        }, (err) => {
            //console.log(err);
            this.loading = false;
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    getItemTswiasByItemIdBydate() {
        // this.getSalesfromLocal()
        this.perchDetailsArr = [];
        this.loading = true;
        this.api.getItemTswiasByItemIdBydate(this.store_info.id, this.selectedItem.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log('purch',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.tswiaDetailsArr = res['data'];
                this.tswiaDetailsArr = this.tswiaDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                for (let i = 0; i < this.perchDetailsArr.length; i++) {
                    const element = this.perchDetailsArr[i];
                    element.type = 'تسوية جردية';
                }
            }
            this.mixArrayAndOrderong();
            this.getTotal();
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
            //console.log(this.payArray) 
        }, (err) => {
            //console.log(err);
            this.loading = false;
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    getItemTswiasBydate() {
        // this.getSalesfromLocal()
        this.perchDetailsArr = [];
        this.loading = true;
        this.api.getItemTswiasBydate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log('purch',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.tswiaDetailsArr = res['data'];
                this.tswiaDetailsArr = this.tswiaDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                for (let i = 0; i < this.perchDetailsArr.length; i++) {
                    const element = this.perchDetailsArr[i];
                    element.type = 'تسوية جردية';
                }
            }
            this.mixArrayAndOrderongCaseDaily();
            if (this.payArrayDaily.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
            //console.log(this.payArrayDaily) 
        }, (err) => {
            //console.log(err);
            this.loading = false;
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    getItemPurchByItemId() {
        this.perchDetailsArr = [];
        this.loading = true;
        this.api.getItemPurchByItemId(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            //console.log('purch',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.perchDetailsArr = res['data'];
                this.perchDetailsArr = this.perchDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                for (let i = 0; i < this.perchDetailsArr.length; i++) {
                    const element = this.perchDetailsArr[i];
                    element.type = 'مشتريات';
                }
            }
            this.getItemTswiaByItemId();
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    getItemTswiaByItemId() {
        this.tswiaDetailsArr = [];
        this.loading = true;
        this.api.getItemTswiaByItemId(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            //console.log('purch',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.tswiaDetailsArr = res['data'];
                this.tswiaDetailsArr = this.tswiaDetailsArr.filter(x => x.pay_date >= "2023-01-01");
                //console.log(this.tswiaDetailsArr) 
                for (let i = 0; i < this.tswiaDetailsArr.length; i++) {
                    const element = this.tswiaDetailsArr[i];
                    element.type = 'تسوية جردية';
                }
            }
            this.mixArrayAndOrderong();
            this.getTotal();
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
            //console.log(this.payArray) 
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    toPositive(negative) {
        return Math.abs(+negative);
    }
    getItemPurchByItemIdBy2date() {
        // this.getSalesfromLocal()
        this.loading = true;
        this.api.getItemPurchByItemIdBy2date(this.store_info.id, this.selectedItem.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log('purch',data) 
            let res = data;
            if (res['message'] != 'No record Found') {
                this.perchDetailsArr = res['data'];
                this.perchDetailsArr = this.perchDetailsArr.filter(x => x.pay_date >= "2023-01-01");
            }
            this.getItemTswiaByItemIdBy2date();
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    getItemTswiaByItemIdBy2date() {
        // this.getSalesfromLocal()
        this.loading = true;
        this.api.getItemTswiaByItemIdBy2date(this.store_info.id, this.selectedItem.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log('purch',data) 
            let res = data;
            if (res['message'] != 'No record Found') {
                this.tswiaDetailsArr = res['data'];
                this.tswiaDetailsArr = this.tswiaDetailsArr.filter(x => x.pay_date >= "2023-01-01");
            }
            this.mixArrayAndOrderong();
            this.getTotal();
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
            //console.log(this.payArray) 
        }, (err) => {
            //console.log(err);
            this.presentToast('  خطا في الإتصال حاول مرة اخري', 'danger');
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    mixArrayAndOrderong() {
        this.payArray = [];
        if (this.perchDetailsArr.length > 0) {
            for (let i = 0; i < this.perchDetailsArr.length; i++) {
                const element = this.perchDetailsArr[i];
                if (+element.discount > 0) {
                    let getPercg = +element.discount / +element.tot_pr;
                    element.perch_price = (element.perch_price - (element.perch_price * getPercg)).toFixed(2);
                }
                this.payArray.push(element);
            }
        }
        if (this.payDetailsArr.length > 0) {
            for (let i = 0; i < this.payDetailsArr.length; i++) {
                const element = this.payDetailsArr[i];
                if (+element.discount > 0) {
                    let getPercg = +element.discount / +element.tot_pr;
                    element.pay_price = (element.pay_price - (element.pay_price * getPercg)).toFixed(2);
                }
                this.payArray.push(element);
            }
        }
        //console.log('ljw;f', this.tswiaDetailsArr)
        if (this.tswiaDetailsArr.length > 0) {
            for (let i = 0; i < this.tswiaDetailsArr.length; i++) {
                const element = this.tswiaDetailsArr[i];
                let qty = +element.availQty - +element.qtyReal;
                //console.log(+qty)
                this.payArray.push({
                    "id": element.id,
                    "pay_ref": element.pay_ref,
                    "item_name": element.item_name,
                    "pay_date": element.pay_date,
                    "pay_price": element.pay_price,
                    "quantity": qty,
                    "tot": +element.tot,
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +element.id,
                    "dateCreated": element.dateCreated,
                    "perch_price": element.perch_price,
                    "type": element.type
                });
            }
        }
        // sorting array
        this.payArray = this.payArray.sort((a, b) => (a.pay_date > b.pay_date) ? -1 : 1);
        // Apply advanced sorting for transactions
        this.applyTransactionsSorting();
    }
    mixArrayAndOrderongCaseDaily() {
        this.payArrayDaily = [];
        if (this.perchDetailsArr.length > 0) {
            for (let i = 0; i < this.perchDetailsArr.length; i++) {
                const element = this.perchDetailsArr[i];
                // if(+element.discount>0){
                //   let getPercg = +element.discount / +element.tot_pr
                //   element.perch_price = (element.perch_price - (element.perch_price * getPercg)).toFixed(2)  
                // }
                // add available qty
                let inx = this.items.findIndex(x => x.item_id == element.item_id);
                element.currenQty = this.items[inx].quantity;
                let index = this.payArrayDaily.findIndex(x => x.item_id == element.item_id && element.type == 'مشتريات');
                if (index != -1) {
                    element.quantity = +element.quantity + +this.payArrayDaily[index].quantity;
                }
                else {
                    this.payArrayDaily.push(element);
                }
            }
        }
        if (this.payDetailsArr.length > 0) {
            for (let i = 0; i < this.payDetailsArr.length; i++) {
                const element = this.payDetailsArr[i];
                // if(+element.discount>0){
                //   let getPercg = +element.discount / +element.tot_pr
                //   element.pay_price = (element.pay_price - (element.pay_price * getPercg)).toFixed(2) 
                // }
                //check if it exist in array
                // add available qty
                let inx = this.items.findIndex(x => x.id == element.item_id);
                //console.log('inx' + inx  , this.items[0] )
                element.currenQty = this.items[inx].quantity;
                let index = this.payArrayDaily.findIndex(x => x.item_id == element.item_id && element.type == 'مبيعات');
                if (index != -1) {
                    element.quantity = +element.quantity + +this.payArrayDaily[index].quantity;
                }
                else {
                    this.payArrayDaily.push(element);
                }
            }
        }
        //console.log('ljw;f', this.tswiaDetailsArr)
        if (this.tswiaDetailsArr.length > 0) {
            for (let i = 0; i < this.tswiaDetailsArr.length; i++) {
                const element = this.tswiaDetailsArr[i];
                let qty = +element.availQty - +element.qtyReal;
                //console.log(+qty)
                // add available qty
                let inx = this.items.findIndex(x => x.item_id == element.item_id);
                element.currenQty = this.items[inx].quantity;
                let index = this.payArrayDaily.findIndex(x => x.item_id == element.item_id && element.type == 'تسوية جردية');
                if (index != -1) {
                    element.quantity = +element.quantity + +this.payArrayDaily[index].quantity;
                }
                else {
                    this.payArrayDaily.push({
                        "id": element.id,
                        "pay_ref": element.pay_ref,
                        "item_name": element.item_name,
                        "pay_date": element.pay_date,
                        "pay_price": element.pay_price,
                        "quantity": qty,
                        "tot": +element.tot,
                        "store_id": +this.store_info.id,
                        "yearId": +this.year.id,
                        "item_id": +element.id,
                        "dateCreated": element.dateCreated,
                        "perch_price": element.perch_price,
                        "type": element.type
                    });
                }
            }
        }
        // sorting array
        //this.payArrayDaily = this.payArray.sort((a, b) => (a.pay_date > b.pay_date) ? -1 : 1);
    }
    getTotal() {
        this.currenQty = this.selectedItem.availQty;
        this.firstQty = this.selectedItem.firstQuantity;
        this.perchTotQty = this.perchDetailsArr.reduce((acc, obj) => { return acc + +obj.quantity; }, 0);
        this.payTotQty = this.payDetailsArr.reduce((acc, obj) => { return acc + +obj.quantity; }, 0);
        this.perchTot = (this.perchDetailsArr.reduce((acc, obj) => { return acc + +obj.tot; }, 0)).toFixed(2);
        this.payTot = (this.payDetailsArr.reduce((acc, obj) => { return acc + +obj.tot; }, 0)).toFixed(2);
        //console.log('perchTotQty',this.perchTotQty ,this.payTotQty )
        //تجميع الكيات السالبة وتحويلها لموجب لإضافتها للمشتريات
        if (this.tswiaDetailsArr.length > 0) {
            for (let i = 0; i < this.tswiaDetailsArr.length; i++) {
                const element = this.tswiaDetailsArr[i];
                if ((+element.availQty - +element.qtyReal) < 0) {
                    this.perchTotQty = +this.perchTotQty + Math.abs((+element.availQty - +element.qtyReal));
                    //console.log('jdja',this.perchTotQty ,this.perchTot )
                }
                else if ((+element.availQty - +element.qtyReal) > 0) {
                    this.payTotQty = +this.payTotQty + (+element.availQty - +element.qtyReal);
                }
            }
        }
        //console.log(this.perchTot , this.payTot)
    }
    // Event handler for enhanced item selector
    onItemSelected(selectedItem) {
        console.log('Item selected from enhanced component:', selectedItem);
        if (selectedItem && selectedItem.id) {
            // Update the existing selectedItem with the new selection
            this.selectedItem = {
                id: selectedItem.id,
                dateCreated: selectedItem.dateCreated || "",
                pay_ref: selectedItem.pay_ref || "",
                item_desc: selectedItem.item_desc || "",
                item_name: selectedItem.item_name || "",
                item_unit: selectedItem.item_unit || "",
                parcode: selectedItem.parcode || 0,
                pay_price: selectedItem.pay_price || 0,
                perch_price: selectedItem.perch_price || 0,
                qty: selectedItem.qty || 0,
                tot: selectedItem.tot || 0,
                availQty: selectedItem.availQty || 0,
                firstQuantity: selectedItem.firstQuantity || 0,
                aliasEn: selectedItem.aliasEn || ""
            };
            // Automatically trigger search when item is selected
            this.search();
        }
        else {
            // Clear selection if null item is passed
            this.clearItemSelection();
        }
    }
    // Event handler for refresh request from enhanced component
    onRefreshRequested() {
        console.log('Refresh requested from enhanced component');
        // The enhanced component handles its own refresh, but we can add any additional logic here if needed
    }
    refresh() {
        this.presentToast('تم تحديث البيانات', 'success');
        window.location.reload();
    }
    // Helper method to clear item selection
    clearItemSelection() {
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
            firstQuantity: 0,
            aliasEn: ""
        };
        this.selectedItemNew = {
            id: undefined,
            pay_ref: "",
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
            perch_price: 0,
            qtyReal: 0,
            availQty: 0,
            currenQty: 0,
            firstQty: 0,
            perchTotQty: 0,
            payTotQty: 0,
            totSales: 0,
            totPurch: 0
        };
        this.payArray = [];
        this.perchDetailsArr = [];
        this.payDetailsArr = [];
        this.showEmpty = false;
    }
    search() {
        var _a;
        if (!((_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id)) {
            this.presentToast('يرجى اختيار صنف أولاً', 'warning');
            return;
        }
        // Reset all data before new search
        this.selectedItemNew = {
            id: undefined,
            pay_ref: "",
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
            perch_price: 0,
            qtyReal: 0,
            availQty: 0,
            currenQty: 0,
            firstQty: 0,
            perchTotQty: 0,
            payTotQty: 0,
            totSales: 0,
            totPurch: 0
        };
        this.payArray = [];
        this.perchDetailsArr = [];
        this.payDetailsArr = [];
        this.tswiaDetailsArr = [];
        this.showEmpty = false;
        this.loading = true;
        // Determine report type based on radioVal
        let reportType = this.radioVal;
        let startDate = null;
        let endDate = null;
        // Set date parameters based on report type
        if (this.radioVal == 1) {
            // Single date filter
            startDate = this.startingDate;
        }
        else if (this.radioVal == 2) {
            // Date range filter
            startDate = this.startingDate;
            endDate = this.endDate;
        }
        else if (this.radioVal == 3) {
            // Daily report by date
            startDate = this.startingDate;
        }
        // Make single API call to get all report data
        this.api.getCompleteItemReport(this.store_info.id, this.selectedItem.id, this.year.id, reportType, startDate, endDate).subscribe(data => {
            console.log('Complete item report data:', data);
            if (data && data['status'] === 'success' && data['data']) {
                const reportData = data['data'];
                // Update item details
                if (reportData.item_details) {
                    const itemData = reportData.item_details;
                    this.selectedItemNew = {
                        id: itemData.id,
                        pay_ref: "",
                        item_desc: itemData.item_desc || "",
                        item_name: itemData.item_name || "",
                        item_unit: itemData.item_unit || "",
                        parcode: itemData.item_parcode || 0,
                        pay_price: itemData.pay_price || 0,
                        perch_price: itemData.perch_price || 0,
                        qtyReal: itemData.qtyReal || 0,
                        availQty: itemData.availQty || 0,
                        currenQty: itemData.availQty || 0,
                        firstQty: itemData.firstQuantity || 0,
                        perchTotQty: itemData.perchQuantity || 0,
                        payTotQty: itemData.salesQuantity || 0,
                        totSales: itemData.sales28 || 0,
                        totPurch: itemData.purch28 || 0
                    };
                    // Update quantity calculations
                    this.payTotQty = itemData.salesQuantity || 0;
                    this.availQty = itemData.availQty || 0;
                    this.qtyReal = itemData.qtyReal || 0;
                    this.perchTotQty = itemData.perchQuantity || 0;
                    this.firstQty = itemData.firstQuantity || 0;
                }
                // Process sales invoices
                if (reportData.sales_invoices && reportData.sales_invoices.length > 0) {
                    this.payDetailsArr = reportData.sales_invoices.map(item => (Object.assign(Object.assign({}, item), { type: 'مبيعات' })));
                }
                // Process purchase invoices
                if (reportData.purchase_invoices && reportData.purchase_invoices.length > 0) {
                    this.perchDetailsArr = reportData.purchase_invoices.map(item => (Object.assign(Object.assign({}, item), { type: 'مشتريات' })));
                }
                // Process adjustment records
                if (reportData.adjustment_records && reportData.adjustment_records.length > 0) {
                    this.tswiaDetailsArr = reportData.adjustment_records.map(item => (Object.assign(Object.assign({}, item), { type: 'تسوية جردية' })));
                }
                // Process the data based on report type
                if (this.radioVal == 3) {
                    // Daily report - use aggregated view
                    this.mixArrayAndOrderongCaseDaily();
                    if (this.payArrayDaily.length == 0) {
                        this.showEmpty = true;
                    }
                    else {
                        this.showEmpty = false;
                    }
                }
                else {
                    // Regular report - combine all arrays
                    this.mixArrayAndOrderong();
                    this.getTotal();
                    if (this.payArray.length == 0) {
                        this.showEmpty = true;
                    }
                    else {
                        this.showEmpty = false;
                    }
                }
                console.log('Report processed successfully');
            }
            else {
                // No data found
                this.showEmpty = true;
                this.presentToast('لا توجد بيانات للصنف المحدد', 'warning');
            }
        }, (err) => {
            console.error('Error fetching complete item report:', err);
            this.loading = false;
            this.showEmpty = true;
            this.presentToast('خطأ في الإتصال حاول مرة أخرى', 'danger');
        }, () => {
            this.loading = false;
        });
    }
    // Apply sorting to transactions (payArray)
    applyTransactionsSorting() {
        if (this.currentTransactionsSort) {
            this.sortedPayArray = this.sortingService.sortData(this.payArray, this.currentTransactionsSort.column, this.currentTransactionsSort.direction);
        }
        else {
            this.sortedPayArray = [...this.payArray];
        }
    }
    // Handle transaction column sort
    sortTransactionsBy(column) {
        const direction = this.sortingService.getNextSortDirection(column, this.currentTransactionsSort);
        this.currentTransactionsSort = { column, direction };
        this.applyTransactionsSorting();
    }
    // Get sort icon for transaction column
    getTransactionsSortIcon(column) {
        return this.sortingService.getSortIcon(column, this.currentTransactionsSort);
    }
    // Apply sorting to items
    applySorting() {
        if (this.currentSort) {
            this.sortedItems = this.sortingService.sortData(this.items, this.currentSort.column, this.currentSort.direction);
        }
        else {
            this.sortedItems = [...this.items];
        }
    }
    // Handle column sort
    sortBy(column) {
        const direction = this.sortingService.getNextSortDirection(column, this.currentSort);
        this.currentSort = { column, direction };
        this.applySorting();
    }
    // Get sort icon for column
    getSortIcon(column) {
        return this.sortingService.getSortIcon(column, this.currentSort);
    }
};
ItemsReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _services_sorting_service__WEBPACK_IMPORTED_MODULE_6__.SortingService }
];
ItemsReportPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ["dst",] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['qtyId',] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['dstPop',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['popover',] }]
};
ItemsReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-items-report',
        template: _items_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_items_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemsReportPage);



/***/ }),

/***/ 80868:
/*!****************************************************************!*\
  !*** ./src/app/items-report/items-report.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "/* Modern Items-Report Page Styles - Following statement2 patterns */\n/* ======================================\n   BASE STYLES - Using Modern Glass Design\n   ====================================== */\n.modern-content {\n  --background: linear-gradient(135deg,\n    rgba(255, 255, 255, 0.1),\n    rgba(255, 255, 255, 0.05)\n  );\n  --color: var(--ion-color-dark);\n  min-height: 100vh;\n  padding: 8px;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  --overflow: visible;\n}\n.modern-content::before {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1), rgba(245, 166, 35, 0.1));\n  animation: gradientShift 15s ease infinite;\n  z-index: -1;\n}\n@keyframes gradientShift {\n  0%, 100% {\n    background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1), rgba(245, 166, 35, 0.1));\n  }\n  50% {\n    background: linear-gradient(225deg, rgba(245, 166, 35, 0.1), rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n  }\n}\n/* ======================================\n   LOADING STYLES\n   ====================================== */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  gap: 16px;\n}\n.loading-container ion-spinner {\n  width: 48px;\n  height: 48px;\n  --color: var(--ion-color-primary);\n}\n.loading-container .loading-text {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n  margin: 0;\n}\n/* ======================================\n   MAIN CONTAINER AND FORM STYLES\n   ====================================== */\n.main-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.form-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n/* ======================================\n   CARD STYLES - Following statement2 pattern\n   ====================================== */\n.form-card, .info-card, .table-card {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);\n  margin: 0;\n  overflow: visible;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.form-card:hover, .info-card:hover, .table-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.form-card.compact-card, .info-card.compact-card, .table-card.compact-card {\n  border-radius: 12px;\n}\n.form-card.compact-card .compact-content, .info-card.compact-card .compact-content, .table-card.compact-card .compact-content {\n  padding: 12px 16px;\n}\n.form-card.compact-card app-enhanced-item-selector, .info-card.compact-card app-enhanced-item-selector, .table-card.compact-card app-enhanced-item-selector {\n  position: relative;\n  z-index: 10000;\n}\n.form-card.compact-card app-enhanced-item-selector .dropdown-container, .info-card.compact-card app-enhanced-item-selector .dropdown-container, .table-card.compact-card app-enhanced-item-selector .dropdown-container {\n  z-index: 999999 !important;\n  position: absolute !important;\n}\n.table-header {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 20px;\n}\n.table-header .table-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin: 0;\n}\n.table-header .table-title .transaction-count {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  font-weight: 400;\n}\n.compact-content, .info-content, .table-content {\n  padding: 20px;\n}\n.compact-content {\n  padding: 10px 16px;\n}\n/* ======================================\n   MAIN ROW LAYOUT\n   ====================================== */\n.main-row {\n  display: flex;\n  gap: 20px;\n  align-items: flex-end;\n  margin-bottom: 16px;\n}\n.item-section {\n  flex: 1;\n  width: 50%;\n}\n.search-type-section {\n  flex: 1;\n  width: 50%;\n}\n.field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n/* ======================================\n   SEARCH ROW\n   ====================================== */\n.search-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 16px;\n}\n.mini-input, .mini-btn {\n  height: 40px;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.mini-input {\n  --background: rgba(255, 255, 255, 0.9);\n  --border-color: rgba(0, 0, 0, 0.2);\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.mini-input:hover, .mini-input:focus {\n  --background: rgba(255, 255, 255, 1);\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 4px 16px rgba(74, 144, 226, 0.2);\n}\n.search-btn {\n  --background: var(--ion-color-primary);\n  --color: white;\n  font-weight: 500;\n}\n.search-btn:hover {\n  --background: var(--ion-color-primary-shade);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);\n}\n/* ======================================\n   INFO CARD STYLES\n   ====================================== */\n.info-card {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  overflow: hidden;\n}\n.info-card .info-content {\n  padding: 12px 16px;\n}\n.info-card .info-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 16px;\n  gap: 16px;\n  align-items: start;\n}\n.info-card .info-column {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-card .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-card .info-item .info-label {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.info-card .info-item .info-value {\n  font-size: 15px;\n  color: var(--ion-color-dark);\n  font-weight: 600;\n  word-wrap: break-word;\n}\n/* ======================================\n   PRIMARY CARD HEADERS\n   ====================================== */\n.table-card[color=primary] .table-header {\n  background: linear-gradient(135deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n  color: white;\n}\n.table-card[color=primary] .table-header .table-title {\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-card[color=primary] .table-header .table-title ion-icon {\n  font-size: 20px;\n}\n.table-card[color=primary] .table-header .table-title .transaction-count {\n  color: rgba(255, 255, 255, 0.8);\n}\n/* ======================================\n   TABLE STYLES - Following statement2 pattern\n   ====================================== */\n.table-container {\n  overflow-x: auto;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  margin: -20px;\n  margin-top: 0;\n}\n.modern-table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 14px;\n}\n.modern-table thead {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(80, 227, 194, 0.1));\n}\n.modern-table thead th {\n  padding: 16px 12px;\n  text-align: right;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  border-bottom: 2px solid rgba(74, 144, 226, 0.2);\n  white-space: nowrap;\n}\n.modern-table tbody .table-row {\n  transition: all 0.2s ease;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.modern-table tbody .table-row:hover {\n  background: rgba(74, 144, 226, 0.05);\n  transform: scale(1.001);\n}\n.modern-table tbody .table-row:last-child {\n  border-bottom: none;\n}\n.modern-table tbody .table-row td {\n  padding: 12px;\n  text-align: right;\n  vertical-align: middle;\n  color: var(--ion-color-dark);\n}\n.modern-table tbody .table-row td.serial {\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  width: 60px;\n}\n.modern-table tbody .table-row td.date {\n  color: var(--ion-color-medium);\n  font-size: 13px;\n  width: 100px;\n}\n.modern-table tbody .table-row td.type {\n  width: 120px;\n}\n.modern-table tbody .table-row td.details {\n  max-width: 200px;\n  word-break: break-word;\n}\n.modern-table tbody .table-row td.debit, .modern-table tbody .table-row td.credit {\n  font-weight: 600;\n  text-align: center;\n  width: 100px;\n}\n.modern-table tbody .table-row td.actions {\n  text-align: center;\n  width: 80px;\n}\n.modern-table tbody .table-row td .transaction-type {\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.modern-table tbody .table-row td .transaction-type.sales-type {\n  background: rgba(16, 220, 96, 0.1);\n  color: var(--ion-color-success);\n  border: 1px solid rgba(16, 220, 96, 0.2);\n}\n.modern-table tbody .table-row td .transaction-type.purchase-type {\n  background: rgba(245, 166, 35, 0.1);\n  color: var(--ion-color-warning);\n  border: 1px solid rgba(245, 166, 35, 0.2);\n}\n.modern-table tbody .table-row td .transaction-type.voucher-type {\n  background: rgba(74, 144, 226, 0.1);\n  color: var(--ion-color-primary);\n  border: 1px solid rgba(74, 144, 226, 0.2);\n}\n.modern-table tbody .table-row td .amount {\n  font-family: \"Courier New\", monospace;\n}\n.modern-table tbody .table-row td .amount.debit-amount {\n  color: var(--ion-color-danger);\n}\n.modern-table tbody .table-row td .amount.credit-amount {\n  color: var(--ion-color-success);\n}\n.modern-table tbody .skeleton-row td {\n  padding: 12px;\n}\n/* ======================================\n   EMPTY STATE\n   ====================================== */\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--ion-color-medium);\n}\n.empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty-state h4 {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n  opacity: 0.8;\n}\n/* ======================================\n   FOOTER TOTALS\n   ====================================== */\n.totals-footer {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 16px;\n}\n.totals-footer .totals-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 600px;\n  margin: 0 auto;\n  gap: 20px;\n}\n.totals-footer .totals-container .total-item {\n  text-align: center;\n}\n.totals-footer .totals-container .total-item .total-label {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  margin-bottom: 4px;\n}\n.totals-footer .totals-container .total-item .total-value {\n  font-size: 16px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n.totals-footer .totals-container .total-item .total-value.debit-total {\n  color: var(--ion-color-danger);\n}\n.totals-footer .totals-container .total-item .total-value.credit-total {\n  color: var(--ion-color-success);\n}\n/* ======================================\n   RESPONSIVE DESIGN\n   ====================================== */\n@media (max-width: 768px) {\n  .modern-content {\n    padding: 6px;\n  }\n\n  .main-row {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n\n  .item-section {\n    width: 100%;\n  }\n\n  .search-type-section {\n    width: 100%;\n  }\n\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .info-card .info-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n  }\n  .info-card .info-column {\n    gap: 8px;\n  }\n  .info-card .info-item .info-label {\n    font-size: 12px;\n  }\n  .info-card .info-item .info-value {\n    font-size: 13px;\n  }\n\n  .totals-container {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .totals-container .total-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 8px 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .totals-container .total-item:last-child {\n    border-bottom: none;\n  }\n  .totals-container .total-item .total-label {\n    margin-bottom: 0;\n    text-align: left;\n  }\n}\n@media (max-width: 480px) {\n  .table-header {\n    padding: 16px;\n  }\n  .table-header .table-title {\n    font-size: 16px;\n  }\n\n  .compact-content, .info-content, .table-content {\n    padding: 16px;\n  }\n\n  .info-card .info-grid {\n    grid-template-columns: 1fr !important;\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQUE7QUFFQTs7MkNBQUE7QUFJQTtFQUNFOzs7R0FBQTtFQUlBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUdBLG1CQUFBO0FBSEY7QUFLRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZHQUFBO0VBTUEsMENBQUE7RUFDQSxXQUFBO0FBUko7QUFZQTtFQUNFO0lBQ0UsNkdBQUE7RUFURjtFQVdBO0lBQ0UsOEdBQUE7RUFURjtBQUNGO0FBWUE7OzJDQUFBO0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFYRjtBQWFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQVhKO0FBY0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBWko7QUFnQkE7OzJDQUFBO0FBSUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZEY7QUFpQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBZEY7QUFpQkE7OzJDQUFBO0FBSUE7RUFDRSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUZBQ0U7RUFFRixTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtBQWpCRjtBQW1CRTtFQUNFLDJCQUFBO0VBQ0EsbUZBQ0U7QUFsQk47QUFzQkU7RUFDRSxtQkFBQTtBQXBCSjtBQXNCSTtFQUNFLGtCQUFBO0FBcEJOO0FBd0JJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBdEJOO0FBeUJNO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQXZCUjtBQTZCQTtFQUNFLHFGQUFBO0VBSUEsaURBQUE7RUFDQSxhQUFBO0FBN0JGO0FBK0JFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0FBN0JKO0FBK0JJO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUE3Qk47QUFrQ0E7RUFDRSxhQUFBO0FBL0JGO0FBa0NBO0VBQ0Usa0JBQUE7QUEvQkY7QUFrQ0E7OzJDQUFBO0FBSUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSxPQUFBO0VBQ0EsVUFBQTtBQWhDRjtBQW1DQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0FBaENGO0FBbUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWhDRjtBQWtDRTtFQUNFLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7QUFoQ0o7QUFrQ0k7RUFDRSw4Q0FBQTtFQUNBLDJCQUFBO0FBaENOO0FBbUNJO0VBQ0UsbUNBQUE7QUFqQ047QUFvQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFsQ047QUF1Q0E7OzJDQUFBO0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckNGO0FBd0NBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFyQ0Y7QUF3Q0E7RUFDRSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FBckNGO0FBdUNFO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FBckNKO0FBeUNBO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUF0Q0Y7QUF3Q0U7RUFDRSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUF0Q0o7QUEwQ0E7OzJDQUFBO0FBSUE7RUFDRSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUF4Q0Y7QUEwQ0U7RUFDRSxrQkFBQTtBQXhDSjtBQTJDRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0Esa0JBQUE7QUF6Q0o7QUE0Q0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBMUNKO0FBNkNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQTNDSjtBQTZDSTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEzQ047QUE4Q0k7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBNUNOO0FBaURBOzsyQ0FBQTtBQU1JO0VBQ0UsNkZBQUE7RUFJQSxZQUFBO0FBcEROO0FBc0RNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFwRFI7QUFzRFE7RUFDRSxlQUFBO0FBcERWO0FBdURRO0VBQ0UsK0JBQUE7QUFyRFY7QUE0REE7OzJDQUFBO0FBSUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQTFERjtBQTZEQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTFERjtBQTRERTtFQUNFLHFGQUFBO0FBMURKO0FBK0RJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FBN0ROO0FBa0VJO0VBQ0UseUJBQUE7RUFDQSw0Q0FBQTtBQWhFTjtBQWtFTTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUFoRVI7QUFtRU07RUFDRSxtQkFBQTtBQWpFUjtBQW9FTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFsRVI7QUFvRVE7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQWxFVjtBQXFFUTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFuRVY7QUFzRVE7RUFDRSxZQUFBO0FBcEVWO0FBdUVRO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQXJFVjtBQXdFUTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBdEVWO0FBeUVRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBdkVWO0FBMEVRO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXhFVjtBQTBFVTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBQXhFWjtBQTJFVTtFQUNFLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSx5Q0FBQTtBQXpFWjtBQTRFVTtFQUNFLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSx5Q0FBQTtBQTFFWjtBQThFUTtFQUNFLHFDQUFBO0FBNUVWO0FBOEVVO0VBQ0UsOEJBQUE7QUE1RVo7QUErRVU7RUFDRSwrQkFBQTtBQTdFWjtBQW9GTTtFQUNFLGFBQUE7QUFsRlI7QUF3RkE7OzJDQUFBO0FBSUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUF0RkY7QUF3RkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBdEZKO0FBeUZFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF2Rko7QUEwRkU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUF4Rko7QUE0RkE7OzJDQUFBO0FBSUE7RUFDRSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7QUExRkY7QUE0RkU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUExRko7QUE0Rkk7RUFDRSxrQkFBQTtBQTFGTjtBQTRGTTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBMUZSO0FBNkZNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUEzRlI7QUE2RlE7RUFDRSw4QkFBQTtBQTNGVjtBQThGUTtFQUNFLCtCQUFBO0FBNUZWO0FBbUdBOzsyQ0FBQTtBQUlBO0VBQ0U7SUFDRSxZQUFBO0VBakdGOztFQW9HQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLG9CQUFBO0VBakdGOztFQW9HQTtJQUNFLFdBQUE7RUFqR0Y7O0VBb0dBO0lBQ0UsV0FBQTtFQWpHRjs7RUFzR0k7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFuR047O0VBeUdFO0lBQ0UsOEJBQUE7SUFDQSxTQUFBO0VBdEdKO0VBeUdFO0lBQ0UsUUFBQTtFQXZHSjtFQTJHSTtJQUNFLGVBQUE7RUF6R047RUE0R0k7SUFDRSxlQUFBO0VBMUdOOztFQStHQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQTVHRjtFQThHRTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSw0Q0FBQTtFQTVHSjtFQThHSTtJQUNFLG1CQUFBO0VBNUdOO0VBK0dJO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQTdHTjtBQUNGO0FBa0hBO0VBQ0U7SUFDRSxhQUFBO0VBaEhGO0VBa0hFO0lBQ0UsZUFBQTtFQWhISjs7RUFvSEE7SUFDRSxhQUFBO0VBakhGOztFQXFIRTtJQUNFLHFDQUFBO0lBQ0EsUUFBQTtFQWxISjtBQUNGIiwiZmlsZSI6Iml0ZW1zLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNb2Rlcm4gSXRlbXMtUmVwb3J0IFBhZ2UgU3R5bGVzIC0gRm9sbG93aW5nIHN0YXRlbWVudDIgcGF0dGVybnMgKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEJBU0UgU1RZTEVTIC0gVXNpbmcgTW9kZXJuIEdsYXNzIERlc2lnblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLm1vZGVybi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcbiAgKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBcbiAgLy8gRW5zdXJlIGRyb3Bkb3ducyBhcmUgbm90IGNsaXBwZWRcbiAgLS1vdmVyZmxvdzogdmlzaWJsZTtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSxcbiAgICAgIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpLFxuICAgICAgcmdiYSgyNDUsIDE2NiwgMzUsIDAuMSlcbiAgICApO1xuICAgIGFuaW1hdGlvbjogZ3JhZGllbnRTaGlmdCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50U2hpZnQge1xuICAwJSwgMTAwJSB7IFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpLCByZ2JhKDI0NSwgMTY2LCAzNSwgMC4xKSk7IFxuICB9XG4gIDUwJSB7IFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHJnYmEoMjQ1LCAxNjYsIDM1LCAwLjEpLCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSwgcmdiYSg4MCwgMjI3LCAxOTQsIDAuMSkpOyBcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTE9BRElORyBTVFlMRVNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBnYXA6IDE2cHg7XG5cbiAgaW9uLXNwaW5uZXIge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAubG9hZGluZy10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTUFJTiBDT05UQUlORVIgQU5EIEZPUk0gU1RZTEVTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENBUkQgU1RZTEVTIC0gRm9sbG93aW5nIHN0YXRlbWVudDIgcGF0dGVyblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmZvcm0tY2FyZCwgLmluZm8tY2FyZCwgLnRhYmxlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvLyBDaGFuZ2VkIGZyb20gJ2hpZGRlbicgdG8gJ3Zpc2libGUnIHRvIGFsbG93IGRyb3Bkb3duIHRvIHNob3dcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDEycHggNDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIH1cbiAgXG4gICYuY29tcGFjdC1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIFxuICAgIC5jb21wYWN0LWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAvLyBFbnN1cmUgZHJvcGRvd24gc2hvd3MgcHJvcGVybHkgZm9yIGVuaGFuY2VkIGl0ZW0gc2VsZWN0b3JcbiAgICBhcHAtZW5oYW5jZWQtaXRlbS1zZWxlY3RvciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxMDAwMDsgLy8gTXVjaCBoaWdoZXIgei1pbmRleCB0byBlbnN1cmUgZHJvcGRvd24gYXBwZWFycyBhYm92ZSBldmVyeXRoaW5nXG4gICAgICBcbiAgICAgIC8vIEZvcmNlIGRyb3Bkb3duIHRvIGJlIGFib3ZlIGFsbCBjb250ZW50XG4gICAgICAuZHJvcGRvd24tY29udGFpbmVyIHtcbiAgICAgICAgei1pbmRleDogOTk5OTk5ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSksIFxuICAgIHJnYmEoODAsIDIyNywgMTk0LCAwLjEpXG4gICk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgLnRhYmxlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgICAudHJhbnNhY3Rpb24tY291bnQge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gIH1cbn1cblxuLmNvbXBhY3QtY29udGVudCwgLmluZm8tY29udGVudCwgLnRhYmxlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY29tcGFjdC1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTUFJTiBST1cgTEFZT1VUXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubWFpbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLml0ZW0tc2VjdGlvbiB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5zZWFyY2gtdHlwZS1zZWN0aW9uIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmZpZWxkLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uY29tcGFjdC1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgZmxleDogMTtcblxuICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjMpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cblxuICAgICY6aG92ZXI6bm90KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgU0VBUkNIIFJPV1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLnNlYXJjaC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1pbmktaW5wdXQsIC5taW5pLWJ0biB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLm1pbmktaW5wdXQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIFxuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcbiAgfVxufVxuXG4uc2VhcmNoLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmOmhvdmVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDc0LCAxNDQsIDIyNiwgMC40KTtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgSU5GTyBDQVJEIFNUWUxFU1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmluZm8tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuaW5mby1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIH1cblxuICAuaW5mby1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgIGdhcDogMTZweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cblxuICAuaW5mby1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAuaW5mby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG5cbiAgICAuaW5mby1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICAuaW5mby12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFBSSU1BUlkgQ0FSRCBIRUFERVJTXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4udGFibGUtY2FyZCB7XG4gICZbY29sb3I9XCJwcmltYXJ5XCJdIHtcbiAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIFxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSlcbiAgICAgICk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBcbiAgICAgIC50YWJsZS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudHJhbnNhY3Rpb24tY291bnQge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFRBQkxFIFNUWUxFUyAtIEZvbGxvd2luZyBzdGF0ZW1lbnQyIHBhdHRlcm5cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi50YWJsZS1jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIG1hcmdpbjogLTIwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5tb2Rlcm4tdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxuICB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgICByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSwgXG4gICAgICByZ2JhKDgwLCAyMjcsIDE5NCwgMC4xKVxuICAgICk7XG5cbiAgICB0aCB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjIpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gIH1cblxuICB0Ym9keSB7XG4gICAgLnRhYmxlLXJvdyB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4wNSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDEpO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXG4gICAgICAgICYuc2VyaWFsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZGF0ZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLnR5cGUge1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZGV0YWlscyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5kZWJpdCwgJi5jcmVkaXQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aW9ucyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRyYW5zYWN0aW9uLXR5cGUge1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICAgJi5zYWxlcy10eXBlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDIyMCwgOTYsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMjIwLCA5NiwgMC4yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnB1cmNoYXNlLXR5cGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDE2NiwgMzUsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsIDE2NiwgMzUsIDAuMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi52b3VjaGVyLXR5cGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFtb3VudCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICBcbiAgICAgICAgICAmLmRlYml0LWFtb3VudCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5jcmVkaXQtYW1vdW50IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNrZWxldG9uLXJvdyB7XG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBFTVBUWSBTVEFURVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAuZW1wdHktaWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEZPT1RFUiBUT1RBTFNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi50b3RhbHMtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMTZweDtcblxuICAudG90YWxzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgLnRvdGFsLWl0ZW0ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgXG4gICAgICAudG90YWwtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuXG4gICAgICAudG90YWwtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG5cbiAgICAgICAgJi5kZWJpdC10b3RhbCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jcmVkaXQtdG90YWwge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFJFU1BPTlNJVkUgREVTSUdOXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGVybi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gIH1cblxuICAubWFpbi1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuICAuaXRlbS1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnNlYXJjaC10eXBlLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuY29tcGFjdC1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW5mby1jYXJkIHtcbiAgICAuaW5mby1ncmlkIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLmluZm8tY29sdW1uIHtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cbiAgICBcbiAgICAuaW5mby1pdGVtIHtcbiAgICAgIC5pbmZvLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaW5mby12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudG90YWxzLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAudG90YWwtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRvdGFsLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC50YWJsZS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAudGFibGUtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5jb21wYWN0LWNvbnRlbnQsIC5pbmZvLWNvbnRlbnQsIC50YWJsZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmluZm8tY2FyZCB7XG4gICAgLmluZm8tZ3JpZCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuICB9XG59Il19 */";

/***/ }),

/***/ 98309:
/*!****************************************************************!*\
  !*** ./src/app/items-report/items-report.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"hasParameter\" defaultHref=\"/\" class=\"glass-menu-button\"></ion-back-button>\n      <ion-menu-button *ngIf=\"!hasParameter\" class=\"glass-menu-button\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"glass-title\">تقرير حركة الصنف</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refresh()\">\n        <ion-icon name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info\" class=\"main-container\">\n    <div class=\"form-container\">\n      \n      <!-- Item Selection and Search Card -->\n      <ion-card class=\"form-card compact-card\">\n        <ion-card-content class=\"compact-content\">\n          <!-- Main Row: Item Selection and Search Type -->\n          <div class=\"main-row\">\n            <!-- Item Selection -->\n            <div class=\"item-section\">\n              <!-- <ion-label class=\"field-label\">الصنف</ion-label> -->\n              \n              <!-- Enhanced Item Selector Component - simple field style -->\n              <app-enhanced-item-selector\n                [placeholder]=\"'اختر الصنف للتقرير'\"\n                [searchLang]=\"searchLang\"\n                [showQuantityDisplay]=\"false\"\n                [parentPage]=\"'items-report'\"\n                (itemSelected)=\"onItemSelected($event)\"\n                (refreshRequested)=\"onRefreshRequested()\">\n              </app-enhanced-item-selector>\n            </div>\n\n            <!-- Search Type -->\n            <div class=\"search-type-section\">\n              <ion-label class=\"field-label\">نوع البحث</ion-label>\n              <ion-segment [(ngModel)]=\"radioVal\" (ionChange)=\"radioChange($event)\" class=\"compact-segment\">\n                <ion-segment-button value=\"0\">\n                  <span>جميع الحركات</span>\n                </ion-segment-button>\n                <ion-segment-button value=\"1\">\n                  <span>بحث في تاريخ محدد</span>\n                </ion-segment-button>\n                <ion-segment-button value=\"2\">\n                  <span>بحث في فترة زمنية</span>\n                </ion-segment-button>\n                <!-- <ion-segment-button value=\"3\">\n                  <span>الحركة اليومية</span>\n                </ion-segment-button> -->\n              </ion-segment>\n            </div>\n          </div>\n          \n          <!-- Search Row -->\n          <div class=\"search-row\">\n            <!-- Date Inputs -->\n            <ion-input \n              *ngIf=\"radioVal == 1 || radioVal == 3\"\n              type=\"date\" \n              [(ngModel)]=\"startingDate\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            \n            <ion-input \n              *ngIf=\"radioVal == 2\"\n              type=\"date\" \n              [(ngModel)]=\"startingDate\"\n              placeholder=\"من تاريخ\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            \n            <ion-input \n              *ngIf=\"radioVal == 2\"\n              type=\"date\" \n              [(ngModel)]=\"endDate\"\n              placeholder=\"إلى تاريخ\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            \n            <!-- Search Button -->\n            <ion-button \n              (click)=\"search()\"\n              fill=\"outline\"\n              class=\"mini-btn search-btn\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              بحث\n            </ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <!-- Item Info Card - 4 Columns -->\n      <ion-card class=\"info-card\" *ngIf=\"selectedItemNew && selectedItemNew.id && radioVal != 3\">\n        <ion-card-content class=\"info-content\">\n          <div class=\"info-grid\">\n            <!-- First Column: الكمية الإفتتاحية -->\n            <div class=\"info-column\">\n              <div class=\"info-item\">\n                <span class=\"info-label\">الكمية الإفتتاحية:</span>\n                <span class=\"info-value\">{{ selectedItemNew.firstQty }}</span>\n              </div>\n            </div>\n\n            <!-- Second Column: الكمية الحالية -->\n            <div class=\"info-column\">\n              <div class=\"info-item\">\n                <span class=\"info-label\">الكمية الحالية:</span>\n                <span class=\"info-value\" [style.color]=\"selectedItemNew.availQty > 0 ? '#10dc60' : '#f04141'\">\n                  {{ selectedItemNew.availQty }}\n                </span>\n              </div>\n            </div>\n\n            <!-- Third Column: الكمية الصادرة -->\n            <div class=\"info-column\">\n              <div class=\"info-item\">\n                <span class=\"info-label\">الكمية الصادرة:</span>\n                <span class=\"info-value\">{{ selectedItemNew.payTotQty }}</span>\n              </div>\n            </div>\n\n            <!-- Fourth Column: الكمية الواردة -->\n            <div class=\"info-column\">\n              <div class=\"info-item\">\n                <span class=\"info-label\">الكمية الواردة:</span>\n                <span class=\"info-value\">{{ selectedItemNew.perchTotQty }}</span>\n              </div>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- Main Table -->\n      <ion-card class=\"table-card\" *ngIf=\"radioVal != 3\" color=\"primary\">\n        <ion-card-header class=\"table-header\">\n          <ion-card-title class=\"table-title\">\n            <ion-icon name=\"list-outline\" slot=\"start\"></ion-icon>\n            تقرير حركة الصنف - {{ selectedItemNew?.item_name || 'اختر صنف لعرض البيانات' }}\n            <span class=\"transaction-count\" *ngIf=\"payArray && payArray.length > 0\">\n              ({{ payArray.length }} حركة)\n            </span>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"table-content\">\n          <div class=\"table-container\">\n            <table class=\"modern-table\">\n              <thead>\n                <tr>\n                  <th>التسلسل</th>\n                  <th class=\"sortable-header\" (click)=\"sortTransactionsBy('type')\">\n                    <ion-icon [name]=\"getTransactionsSortIcon('type')\" class=\"sort-icon\"></ion-icon>\n                    نوع الحركة\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortTransactionsBy('pay_date')\">\n                    <ion-icon [name]=\"getTransactionsSortIcon('pay_date')\" class=\"sort-icon\"></ion-icon>\n                    التاريخ\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortTransactionsBy('quantity')\">\n                    <ion-icon [name]=\"getTransactionsSortIcon('quantity')\" class=\"sort-icon\"></ion-icon>\n                    الكمية الواردة\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortTransactionsBy('quantity')\">\n                    <ion-icon [name]=\"getTransactionsSortIcon('quantity')\" class=\"sort-icon\"></ion-icon>\n                    الكمية الصادرة\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortTransactionsBy('sub_name')\">\n                    <ion-icon [name]=\"getTransactionsSortIcon('sub_name')\" class=\"sort-icon\"></ion-icon>\n                    العميل/المورد\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortTransactionsBy('pay_price')\">\n                    <ion-icon [name]=\"getTransactionsSortIcon('pay_price')\" class=\"sort-icon\"></ion-icon>\n                    سعر البيع\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortTransactionsBy('perch_price')\">\n                    <ion-icon [name]=\"getTransactionsSortIcon('perch_price')\" class=\"sort-icon\"></ion-icon>\n                    سعر الشراء\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortTransactionsBy('tot')\">\n                    <ion-icon [name]=\"getTransactionsSortIcon('tot')\" class=\"sort-icon\"></ion-icon>\n                    المجموع\n                  </th>\n                  <th>عرض الفاتورة</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let pay of sortedPayArray; let i = index\" class=\"table-row\">\n                  <td class=\"serial\">{{ i + 1 }}</td>\n                  <td class=\"type\">\n                    <span class=\"transaction-type\" \n                          [ngClass]=\"{\n                            'sales-type': pay.type === 'مبيعات', \n                            'purchase-type': pay.type === 'مشتريات', \n                            'voucher-type': pay.type === 'تسوية جردية'\n                          }\">\n                      {{ pay.type }}\n                    </span>\n                  </td>\n                  <td class=\"date\">{{ pay.pay_date | date:'dd/MM/yyyy' }}</td>\n                  <td class=\"debit\">\n                    <span *ngIf=\"pay.type == 'مشتريات' || (pay.type == 'تسوية جردية' && +pay.quantity < 0)\" class=\"amount\">\n                      {{ toPositive(pay.quantity) }}\n                    </span>\n                  </td>\n                  <td class=\"credit\">\n                    <span *ngIf=\"pay.type == 'مبيعات' || (pay.type == 'تسوية جردية' && +pay.quantity > 0)\" class=\"amount\">\n                      {{ toPositive(pay.quantity) }}\n                    </span>\n                  </td>\n                  <td class=\"details\">\n                    <span *ngIf=\"pay.type == 'مبيعات' || pay.type == 'مشتريات'\">{{ pay.sub_name }}</span>\n                  </td>\n                  <td class=\"amount\">{{ pay.pay_price }}</td>\n                  <td class=\"amount\">{{ pay.perch_price }}</td>\n                  <td class=\"amount\">{{ toPositive(+pay.tot) }}</td>\n                  <td class=\"actions\">\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"getPayInvoDetail(pay, pay.sub_name, 'edit')\">\n                      <ion-icon name=\"eye-outline\" color=\"primary\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>\n                \n                <!-- Loading Skeleton -->\n                <tr *ngIf=\"loading\" class=\"skeleton-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                <tr *ngIf=\"loading\" class=\"skeleton-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          \n          <!-- Empty State -->\n          <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n            <ion-icon name=\"archive-outline\" class=\"empty-icon\"></ion-icon>\n            <h4>لا توجد حركات</h4>\n            <p>لم يتم العثور على حركات لهذا الصنف</p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- Daily Report Table -->\n      <ion-card class=\"table-card\" *ngIf=\"radioVal == 3\" color=\"primary\">\n        <ion-card-header class=\"table-header\">\n          <ion-card-title class=\"table-title\">\n            <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n            الحركة اليومية للأصناف\n            <span class=\"transaction-count\" *ngIf=\"payArrayDaily && payArrayDaily.length > 0\">\n              ({{ payArrayDaily.length }} صنف)\n            </span>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"table-content\">\n          <div class=\"table-container\">\n            <table class=\"modern-table\">\n              <thead>\n                <tr>\n                  <th>التسلسل</th>\n                  <th>الصنف</th>\n                  <th>نوع الحركة</th>\n                  <th>الكمية الواردة</th>\n                  <th>الكمية الصادرة</th>\n                  <th>الكمية الحالية</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let pay of payArrayDaily; let i = index\" class=\"table-row\">\n                  <td class=\"serial\">{{ i + 1 }}</td>\n                  <td class=\"details\">{{ pay.item_name }}</td>\n                  <td class=\"type\">\n                    <span class=\"transaction-type\" \n                          [ngClass]=\"{\n                            'sales-type': pay.type === 'مبيعات', \n                            'purchase-type': pay.type === 'مشتريات', \n                            'voucher-type': pay.type === 'تسوية جردية'\n                          }\">\n                      {{ pay.type }}\n                    </span>\n                  </td>\n                  <td class=\"debit\">\n                    <span *ngIf=\"pay.type == 'مشتريات' || (pay.type == 'تسوية جردية' && +pay.quantity < 0)\" class=\"amount\">\n                      {{ toPositive(pay.quantity) }}\n                    </span>\n                  </td>\n                  <td class=\"credit\">\n                    <span *ngIf=\"pay.type == 'مبيعات' || (pay.type == 'تسوية جردية' && +pay.quantity > 0)\" class=\"amount\">\n                      {{ toPositive(pay.quantity) }}\n                    </span>\n                  </td>\n                  <td class=\"amount\">{{ pay.currenQty }}</td>\n                </tr>\n                \n                <!-- Loading Skeleton -->\n                <tr *ngIf=\"loading\" class=\"skeleton-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          \n          <!-- Empty State -->\n          <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n            <ion-icon name=\"archive-outline\" class=\"empty-icon\"></ion-icon>\n            <h4>لا توجد حركات</h4>\n            <p>لم يتم العثور على حركات في هذا التاريخ</p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n<!-- Footer with Totals -->\n<ion-footer class=\"totals-footer\" *ngIf=\"selectedItemNew && selectedItemNew.id && radioVal != 3\">\n  <div class=\"totals-container\">\n    <div class=\"total-item\">\n      <div class=\"total-label\">إجمالي الصادر:</div>\n      <div class=\"total-value debit-total\">{{ selectedItemNew.totSales }}</div>\n    </div>\n    <div class=\"total-item\">\n      <div class=\"total-label\">إجمالي الوارد:</div>\n      <div class=\"total-value credit-total\">{{ selectedItemNew.totPurch }}</div>\n    </div>\n  </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_items-report_items-report_module_ts.js.map
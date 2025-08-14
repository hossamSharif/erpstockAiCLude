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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _items_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-report-routing.module */ 61508);
/* harmony import */ var _items_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-report.page */ 74374);







let ItemsReportPageModule = class ItemsReportPageModule {
};
ItemsReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _items_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemsReportPageRoutingModule
        ],
        declarations: [_items_report_page__WEBPACK_IMPORTED_MODULE_1__.ItemsReportPage]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _items_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-report.page.html?ngResource */ 98309);
/* harmony import */ var _items_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-report.page.scss?ngResource */ 80868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);












let ItemsReportPage = class ItemsReportPage {
    constructor(route, rout, renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast) {
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
        this.searchResult = [];
        this.isOpen = false;
        this.payArray = [];
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
        this.getAllStockItemsWithouteCounts();
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
        this.api.readItemByIdQty(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            console.log('readItemByIdQty', data);
            let res = data['data'][0];
            if (res['message'] != 'No record Found') {
                this.payTotQty = res.salesQuantity;
                this.availQty = res.availQty;
                this.qtyReal = res.qtyReal;
                this.perchTotQty = res.perchQuantity;
                this.firstQty = res.firstQuantity;
                console.log('readItemByIdQty', this.payTotQty, this.availQty, this.qtyReal, this.perchTotQty, this.firstQty);
                this.selectedItemNew = {
                    id: res.id,
                    pay_ref: res,
                    item_desc: res,
                    item_name: res.item_name,
                    item_unit: res.item_unit,
                    parcode: res.parcode,
                    pay_price: res.pay_price,
                    perch_price: res.perch_price,
                    qtyReal: res.qtyReal,
                    availQty: res.availQty,
                    firstQty: res.firstQuantity,
                    perchTotQty: res.perchQuantity,
                    payTotQty: res.salesQuantity,
                    totSales: res.sales28,
                    totPurch: res.purch28,
                    currenQty: 0,
                };
                this.getQtyTotalItemId();
            }
            //   this.getQtyPurchByItemId() 
        }, (err) => {
            //console.log(err);
            this.presentToast('1خطا في الإتصال حاول مرة اخري', 'danger');
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
                this.getAllStockItemsWithouteCounts();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    refresh(para) {
        //this.getStockItems()tr
        this.loadingItems = true;
        this.getAllStockItemsWithouteCounts();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    search() {
        // this.currenQty = 0
        // this.firstQty = 0
        // this.perchTotQty =0
        // this.payTotQty =  0
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
        if (this.radioVal == 0) {
            this.getItemPaysByItemId();
            this.getItemPurchByItemId();
            this.readItemByIdQty();
        }
        else if (this.radioVal == 1) {
            this.getItemPurchsByItemIdBydate();
            this.getItemPaysByItemIdBydate();
            this.readItemByIdQty();
        }
        else if (this.radioVal == 2) {
            this.getItemPaysByItemIdBy2date();
            this.readItemByIdQty();
        }
        else if (this.radioVal == 3) {
            this.getItemPaysBydate();
        }
    }
};
ItemsReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
ItemsReportPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["dst",] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['qtyId',] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['dstPop',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['popover',] }]
};
ItemsReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUFPLG1CQUFBO0FBRVg7O0FBQUU7RUFBTSxrQkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7QUFLUjs7QUFGSTtFQUNJLGdCQUFBO0FBS1I7O0FBRkU7RUFBTyxrQkFBQTtFQUFtQixXQUFBO0VBQWEsWUFBQTtBQVF6Qzs7QUFORTtFQUFvQix5QkFBQTtBQVV0Qjs7QUFURTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFrQnZHIiwiZmlsZSI6Iml0ZW1zLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuc2hvd3sgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG4gIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIFxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuY3VzdFJvd3tcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgfVxuXG4gIC50YWJsZXt0ZXh0LWFsaWduOiBjZW50ZXI7d2lkdGg6IDEwMCU7IG1hcmdpbjogMTJweDt9XG5cbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO31cbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fSJdfQ== */";

/***/ }),

/***/ 98309:
/*!****************************************************************!*\
  !*** ./src/app/items-report/items-report.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n     <ion-back-button *ngIf=\"hasParameter\" defaultHref=\"/\"></ion-back-button>\n      <ion-menu-button *ngIf=\"!hasParameter\"></ion-menu-button>\n    </ion-buttons>  \n    <ion-title>تقرير حركة الصنف</ion-title>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>حركة الصنف</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <!-- <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>حركة صنف في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col> -->\n                            <!-- <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>حركة صنف في فترة </ion-label> \n                              </ion-item>\n                            </ion-col> -->\n                            <!-- <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"3\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>  الحركة اليومية للأصناف   </ion-label> \n                              </ion-item>\n                            </ion-col> -->\n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group> \n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                     \n                      <ion-col size=\"3\" *ngIf=\"loadingItems == true  && radioVal != 3\">  \n                        <ion-item class=\"custInput\">\n                          <ion-input [disabled]=\"true\"></ion-input>\n                          <ion-spinner></ion-spinner>\n                        </ion-item>\n                      </ion-col>\n                      <!-- <ion-col size=\"3\" *ngIf=\"loadingItems == false && radioVal != 3\">  \n                           <ion-item class=\"custInput\"   *ngIf=\"searchLang != 1\"> \n                            <input #dst *ngIf=\"items.length>0\" class=\"bnone\"  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\"  >\n                            <datalist *ngIf=\"items.length>0\" style=\"border: none;\" id=\"browsers\" style=\"height: auto;max-height: 20px;\">\n                              <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>                                                                                        \n                            </datalist>\n                            <ion-label *ngIf=\"items.length==0\">\n                              <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                             </ion-label> \n                           </ion-item>\n                           <ion-item *ngIf=\"searchLang == 1\" class=\"custInput\"  > \n                            <input #dst *ngIf=\"items.length>0\" class=\"bnone\"  list=\"browsers5561\" id=\"browser5561\" [(ngModel)]=\"selectedItem.item_desc\"  (change)=\"pickDetail($event)\"  >\n                            <datalist *ngIf=\"items.length>0\"  id=\"browsers5561\" style=\"border: none;height: auto;max-height: 20px;color: rgb(66, 3, 3)0000 ;\">\n                              <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_desc\" ></option>\n                            </datalist>\n                            <ion-label *ngIf=\"items.length==0\">\n                              <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                             </ion-label> \n                           </ion-item>\n                      </ion-col> -->\n\n                      \n                  <ion-col size=\"4\" *ngIf=\"loadingItems == false\"> \n                    <ion-label  class=\"ion-padding\">\n                      <strong>الصنف</strong>\n                      <ion-text *ngIf=\"searchLang == 0\">(عربي)</ion-text>\n                      <ion-text *ngIf=\"searchLang == 1\">(ENG)</ion-text>\n                    </ion-label> \n                    <!-- popOverSearch  -->\n                    <ion-item class=\"custInput\">\n                      <ion-input  #dstPop (click)=\"presentPopover($event)\"   [(ngModel)] =\"selectedItem.item_name\"></ion-input>\n                      <ion-button fill=\"clear\" (click)=\"refresh('item')\" slot=\"end\">\n                        <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                      </ion-button>\n                    </ion-item>\n                    <ion-popover  #popover [isOpen]=\"isOpen\" (didDismiss)=\"didDissmis()\">\n                      <ng-template>\n                        <ion-header>\n                          <ion-toolbar dir=\"rtl\">\n                            <ion-item>\n                              <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input>\n                              <ion-button fill=\"clear\" (click)=\"clear()\" slot=\"end\">\n                                <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                              </ion-button>\n                              <!-- <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input> -->\n                             </ion-item>\n                          </ion-toolbar>\n                        </ion-header>\n                        <ion-content class=\"ion-padding\" dir=\"rtl\"> \n                          <!-- spinner -->\n                          <ion-list class=\"ion-text-center\"  *ngIf=\"searchResult.length==0 && searchTerm =='' \">\n                            <ion-label>\n                              <ion-spinner name=\"lines-sharp\"></ion-spinner>\n                            </ion-label> \n                          </ion-list>\n                          \n                          <!-- <ion-list *ngIf=\"finalResult.length>0\"> \n                            <ion-item button *ngFor=\"let item of finalResult\"  >{{item.item_name}}</ion-item>\n                          </ion-list> -->\n                           <!-- <ion-list *ngIf=\"searchResult.length>0\" class=\"hide\"> \n                            <ion-item button *ngFor=\"let item1 of searchResult | filter:searchTerm\"  >{{item1.item_name}}</ion-item>\n                          </ion-list>\n                          <ion-list *ngIf=\"aliasResult.length>0\" class=\"hide\"> \n                            <ion-item button *ngFor=\"let item2 of aliasResult | filter:aliasTerm\"  >{{item2.aliasEn}}</ion-item>\n                          </ion-list> -->\n                           <ion-list *ngIf=\"searchResult.length>0\"> \n                            <ion-item button *ngFor=\"let item of searchResult\" (click)=\"selectFromPop(item)\"    class=\"darko\" [ngClass]=\"{'red':item.quantity == 0 , 'darko':item.quantity > 0}\">\n                              {{item.item_name}} \n                            </ion-item>\n                          </ion-list> \n                        </ion-content>\n                      </ng-template>\n                    </ion-popover>\n                        \n\n                       <!-- <h6><ion-label *ngIf=\"items.length>0\">\n                        <ion-text  >المخزون: </ion-text>  <ion-text color=\"danger\" >{{availQty}} </ion-text>\n                       </ion-label></h6>   -->\n                  </ion-col>\n\n\n\n                      <ion-col size=\"3\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 \">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" /> \n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"3\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"3\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n              </ion-col> \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-card *ngIf=\"payArray && radioVal != 3\"  >\n      <ion-grid>\n       <ion-row> \n        <ion-col size=\"3\">\n          <h5><ion-label color=\"dark\">الكمية الإفتتاحية :</ion-label> <ion-text><b>{{selectedItemNew.firstQty}}</b></ion-text></h5> \n         </ion-col>\n          <ion-col size=\"3\">\n            <h5><ion-label color=\"dark\">الكمية الحالية :</ion-label> <ion-text><b>{{selectedItemNew.availQty}}</b></ion-text></h5> \n          </ion-col>\n        \n          <ion-col size=\"3\">\n            <h5>\n              <ion-label color=\"dark\">الكمية الصادرة  :</ion-label> <ion-text><b>{{selectedItemNew.payTotQty}}</b></ion-text>\n            </h5>\n          </ion-col>\n          <ion-col size=\"3\">\n            <h5>\n            <ion-label color=\"dark\">الكمية الواردة  :</ion-label> <ion-text><b>{{selectedItemNew.perchTotQty}}</b></ion-text>\n\n            </h5>\n          </ion-col>\n        </ion-row> \n  </ion-grid>\n  </ion-card>\n\n\n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\"  *ngIf=\"radioVal != 3\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <th>نوع الحركة</th>\n                  <th>التاريخ</th>\n                  <th>الكمية الوارده</th> \n                  <th>الكمية الصادرة</th>  \n                  <th>العميل\\المورد</th> \n                  <th>سعر البيع</th>  \n                  <th>سعر الشراء</th>  \n                  <th>المجموع</th>  \n                  <th ><strong>عرض الفاتورة</strong></th>\n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of payArray ; let i = index\">\n                  <td>{{i+1}}</td>\n                  <!-- <td>{{pay.pay_id}}</td> -->\n                  <td>{{pay.type}}</td>\n                  <td>{{pay.pay_date}}</td>\n                  <td ><p *ngIf =\"pay.type == 'مشتريات' || (pay.type == 'تسوية جردية' && +pay.quantity < 0)\">{{toPositive(pay.quantity)}}</p></td>\n                  <td ><p *ngIf =\"pay.type == 'مبيعات' || (pay.type == 'تسوية جردية' && +pay.quantity > 0)\">{{toPositive(pay.quantity)}}</p></td> \n                  <td> <ion-text *ngIf=\"pay.type == 'مبيعات' ||pay.type == 'مشتريات' \">{{pay.sub_name}}</ion-text>   </td>\n                  <td>{{pay.pay_price}}</td>\n                  <td>{{pay.perch_price}}</td>\n                  <td>{{toPositive(+pay.tot)}}</td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit' )\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon>  \n                    </ion-button>\n                  </td>\n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon> \n                    </ion-button>\n                  </td> -->\n                 </tr> \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                 </tr> \n                \n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                <ion-col size=\"4\" class=\"ion-text-center\">  \n                  <ion-label> \n                    <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                 </ion-label>\n                 <h4> لا توجد سجلات </h4> \n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col> \n    </ion-row>\n\n    <ion-row dir=\"rtl\"  *ngIf=\"radioVal == 3\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <th> الصنف</th>\n                  <th>نوع الحركة</th> \n                  <th>الكمية الوارده</th> \n                  <th>الكمية الصادرة</th>  \n                  <th> الكمية الحالية</th>  \n                   \n                   \n                   \n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of payArrayDaily ; let i = index\">\n                  <td>{{i+1}}</td>\n                  <!-- <td>{{pay.pay_id}}</td> -->\n                  <td>{{pay.item_name}}</td>\n                  <td>{{pay.type}}</td>\n                  <td ><p *ngIf =\"pay.type == 'مشتريات' || (pay.type == 'تسوية جردية' && +pay.quantity < 0)\">{{toPositive(pay.quantity)}}</p></td>\n                  <td ><p *ngIf =\"pay.type == 'مبيعات' || (pay.type == 'تسوية جردية' && +pay.quantity > 0)\">{{toPositive(pay.quantity)}}</p></td> \n                  <td>{{pay.currenQty}}</td>\n                  \n                   \n                  \n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon> \n                    </ion-button>\n                  </td> -->\n                 </tr> \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  \n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   \n                 </tr>  \n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                <ion-col size=\"4\" class=\"ion-text-center\">  \n                  <ion-label> \n                    <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                 </ion-label>\n                 <h4> لا توجد سجلات </h4> \n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col> \n    </ion-row>\n  </ion-grid> \n\n</ion-content>\n<ion-footer *ngIf=\"payArray && radioVal != 3\"> \n  <ion-grid dir=\"rtl\">\n    <ion-row>\n      <ion-col>\n        <h5>\n        <ion-label><ion-text>إجمالي الصادر : </ion-text>  <strong>{{+selectedItemNew.totSales}}</strong></ion-label>\n        </h5>\n      </ion-col>\n      <ion-col>\n        <h5>\n          <ion-label><ion-text>اجمالي الوارد  : </ion-text>  <strong>{{+selectedItemNew.totPurch}}</strong></ion-label>\n        </h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_items-report_items-report_module_ts.js.map
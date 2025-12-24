"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_editsalessnd_editsalessnd_module_ts"],{

/***/ 4400:
/*!*************************************************************!*\
  !*** ./src/app/editsalessnd/editsalessnd-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditsalessndPageRoutingModule": () => (/* binding */ EditsalessndPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _editsalessnd_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editsalessnd.page */ 10601);




const routes = [
    {
        path: '',
        component: _editsalessnd_page__WEBPACK_IMPORTED_MODULE_0__.EditsalessndPage
    }
];
let EditsalessndPageRoutingModule = class EditsalessndPageRoutingModule {
};
EditsalessndPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditsalessndPageRoutingModule);



/***/ }),

/***/ 67033:
/*!*****************************************************!*\
  !*** ./src/app/editsalessnd/editsalessnd.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditsalessndPageModule": () => (/* binding */ EditsalessndPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _editsalessnd_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editsalessnd-routing.module */ 4400);
/* harmony import */ var _editsalessnd_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editsalessnd.page */ 10601);







let EditsalessndPageModule = class EditsalessndPageModule {
};
EditsalessndPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editsalessnd_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditsalessndPageRoutingModule
        ],
        declarations: [_editsalessnd_page__WEBPACK_IMPORTED_MODULE_1__.EditsalessndPage]
    })
], EditsalessndPageModule);



/***/ }),

/***/ 10601:
/*!***************************************************!*\
  !*** ./src/app/editsalessnd/editsalessnd.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditsalessndPage": () => (/* binding */ EditsalessndPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _editsalessnd_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editsalessnd.page.html?ngResource */ 48950);
/* harmony import */ var _editsalessnd_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editsalessnd.page.scss?ngResource */ 90981);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);












let EditsalessndPage = class EditsalessndPage {
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
        this.showMe = null;
        this.searchLang = 0;
        this.searchTerm = "";
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        this.finalResult = [];
        this.loadingItems = false;
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
                //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name )
                this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100).toFixed(2);
                this.prepareOffline();
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
    getOffliemode() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            console.log('mooooode', this.offline);
        });
    }
    ngOnInit() {
        // this.getStockItems()  
        //this.getItemLocalOff()
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
            //     this.sub_accountSales = notif[2] 
            //     //console.log(this.sub_accountLocalSales)  
            //     this.storage.get('LogHistoryLocal').then((response) => { 
            //       if (response) {
            //         this.LogHistoryLocalArr = response  
            //       } 
            //     });
            //     this.getSubBalance()
            //   } else {
            //     //console.log('no updates')
            //     this.showNotif = false
            //     // this.storage.get('itemsLocal' ).then((response) => {
            //     //   if (response) {
            //     //     this.itemsLocal = response 
            //     //   //console.log('after ntif',this.itemsLocal)  
            //     //     this.items = this.itemsLocal
            //     //     this.searchResult = this.items
            //     //   } 
            //     // }); 
            //     // this.storage.get('sub_accountSales').then((response) => {
            //     //     if (response) {
            //     //     }
            //     //    
            //     // });  
            //   } 
            //   })
        }, 10000);
    }
    prepareOffline() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log('mooooode',this.offline)
        });
        this.storage.get('salesLocal').then((response) => {
            if (response) {
                this.salesLocal = response;
                //console.log(this.salesLocal) 
            }
        });
        this.storage.get('sub_accountSales').then((response) => {
            if (response) {
                this.sub_accountSales = response;
                //console.log(this.sub_accountSales)  
            }
        });
        this.storage.get('sub_accountLocalSales').then((response) => {
            if (response) {
                this.sub_accountLocalSales = response;
                //console.log(this.sub_accountLocalSales)  
            }
        });
        this.storage.get('sales').then((response) => {
            if (response) {
                this.sales = response;
                //console.log(this.sales)  
            }
        });
        // this.getStockItems()
    }
    getAppInfo() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log('mooooode',this.offline) 
        });
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
                console.log(this.store_info);
                this.getAccountOffline();
                //this.getSalesAccountFirs()   
            }
        });
        this.storage.get('salesLocalUpdate').then((response) => {
            if (response) {
                this.salesLocalUpdate = response;
                //console.log('salesLocalUpdate',this.salesLocalUpdate) 
            }
        });
        this.storage.get('salesLocalDelete').then((response) => {
            if (response) {
                this.salesLocalDelete = response;
                //console.log(this.salesLocalDelete) 
            }
        });
    }
    getItemLocalOff() {
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)  
                this.items = this.itemsLocal;
                //  this.items.forEach(element => {
                //   if(+element.tswiaQuantity > 0){
                //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
                //   }else if(+element.tswiaQuantity < 0){
                //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
                //   }
                //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
                // });
                this.searchResult = this.items;
            }
        });
    }
    getSalesAccountFirs() {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                //console.log(this.sub_account)
                this.recalSubBalance();
                this.addSubaccountLocal();
                this.pickAccount(this.selectedAccount.sub_name, 'fl');
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.MixSubaccountSalesOffline();
            this.pickAccount(this.selectedAccount.sub_name, 'fl');
        }
    }
    getAccountOffline() {
        this.storage.get('sub_accountSales').then((response) => {
            if (response) {
                this.sub_account = response;
                //console.log(this.sub_accountLocalSales)  
                this.getSubBalance();
                this.addSubaccountLocal();
            }
        });
    }
    recalSubBalance() {
        // adding new change to subbalances
        this.sub_account.forEach(element => {
            element.sub_balance = 0;
            let debitTot = +element.changeeTot + +element.fromDebitTot;
            let creditTot = +element.purchChangeeTot + +element.toCreditTot;
            if (this.radioVal == 0 && this.selectedAccount.id == element.id) {
                debitTot = +debitTot + +this.payInvo.changee;
            }
            if (debitTot == creditTot) {
                element.sub_balance = 0;
                element.currentCustumerStatus = '';
            }
            else if (debitTot > creditTot) {
                element.sub_balance = (+debitTot - +creditTot).toFixed(2);
                element.currentCustumerStatus = 'debit';
                if (+this.selectedAccount.id == +element.id) {
                    this.selectedAccount.sub_balance = element.sub_balance;
                    this.selectedAccount.currentCustumerStatus = element.currentCustumerStatus;
                }
            }
            else if (creditTot > debitTot) {
                element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                element.currentCustumerStatus = 'credit';
                if (+this.selectedAccount.id == +element.id) {
                    this.selectedAccount.sub_balance = element.sub_balance;
                    this.selectedAccount.currentCustumerStatus = element.currentCustumerStatus;
                }
            }
        });
        //console.log('recalSubBalance',this.sub_account)
    }
    getSubBalance() {
        // payTot' => $payTot ,
        //      'tot_prTot' => $tot_prTot ,
        //      'changeeTot' => $changeeTot ,
        //      'purchPayTot' => $purchPayTot ,
        //      'purchTot_prTot' => $purchTot_prTot ,
        //      'purchChangeeTot' => $purchChangeeTot ,
        // 'fromDebitTot' => $fromDebitTot ,
        // 'fromCreditTot' => $fromCreditTot ,
        //  'toDebitTot' => $toDebitTot ,
        // 'toCreditTot' => $toCreditTot   
        this.sub_account.forEach(element => {
            element.sub_balance = 0;
            let debitTot = +element.changeeTot + +element.fromDebitTot;
            let creditTot = +element.purchChangeeTot + +element.toCreditTot;
            if (debitTot == creditTot) {
                element.sub_balance = 0;
                this.currentCustumerStatus = '';
            }
            else if (debitTot > creditTot) {
                element.sub_balance = (+debitTot - +creditTot).toFixed(2);
                this.currentCustumerStatus = 'debit';
            }
            else if (creditTot > debitTot) {
                element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                this.currentCustumerStatus = 'credit';
            }
        });
        //console.log('balances',this.sub_account)
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
    getSalesAccount() {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                //console.log(this.sub_account)
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
            //console.log('case1',this.sub_account,this.sub_accountLocalSales) 
            if (this.sub_accountLocalSales) {
                for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                    const element = this.sub_accountLocalSales[i];
                    this.sub_account.push(element);
                }
            }
        }
        else {
            //console.log('case2',this.sub_account)
            if (this.sub_accountLocalSales) {
                this.sub_account = this.sub_accountLocalSales;
            }
        }
    }
    MixSubaccountSalesOffline() {
        this.sub_account = [];
        if (this.sub_accountLocalSales) {
            for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                const element = this.sub_accountLocalSales[i];
                this.sub_account.push(element);
            }
        }
        if (this.sub_accountSales) {
            for (let i = 0; i < this.sub_accountSales.length; i++) {
                const element = this.sub_accountSales[i];
                this.sub_account.push(element);
            }
        }
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
        this.selectedAccount.sub_name = this.payArray[0].sub_name;
        this.pickAccount(this.payArray[0].sub_name);
        //console.log( this.payInvo) 
        this.itemList = this.payArray['details'];
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
    getItems() {
        if (this.offline == false) {
            this.api.getItems().subscribe(data => {
                //console.log('dataaaaaaa',data)
                let res = data;
                this.items = res['data'];
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.items = this.itemsLocal;
            //console.log('itemsLocal',this.itemsLocal)
        }
    }
    getStockItems() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                //console.log('this.year.id',this.year.id)
                if (this.offline == false) {
                    this.loadingItems = true;
                    this.api.stockItems(1, this.year.id).subscribe(data => {
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
                        this.storage.set('itemsLocal', this.items).then((response) => {
                        });
                        this.searchResult = this.items;
                        this.loadingItems = false;
                        //   this.sumStocksItems()
                    }, (err) => {
                        //console.log(err);
                        this.loadingItems = false;
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
    generateRandom2(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    saveLogHistory(role2) {
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
                if (role2 == 'delete') {
                    this.presentToast('تم الحذف بنجاح', 'success');
                }
                else {
                    this.presentToast('تم الحفظ بنجاح', 'success');
                }
                // this.getStockItems()
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
            yield this.getAllStockItemsWithouteCounts();
            this.back();
        });
    }
    performSyncDel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory('delete');
            yield this.getAllStockItemsWithouteCounts();
            this.back();
        });
    }
    // sumStocksItems(){
    // this.api.stockItems(1, this.year.id).subscribe(data => {
    //   //console.log(data)
    //   let res = data
    //   let arr = res['data']
    //   for (let index = 0; index < this.items.length; index++) {
    //     const element = this.items[index];
    //     let flt = arr.filter(x=>x.id == element.id)
    //     if(flt.length>0){
    //       element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
    //     //  element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
    //       element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
    //     }
    //   } 
    //   this.items.forEach(element => {
    //     element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    //   });
    //   //remove 0 an - quntity
    //   this.items = this.items.filter(x=> +x.quantity > 0)
    //   this.searchResult = this.items
    // }, (err) => {
    //   //console.log(err);
    // },
    //   () => {
    //   }
    // )
    // }
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
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    refresh(para) {
        if (para == 'account') {
            this.getSalesAccount();
        }
        else {
            this.getAllStockItemsWithouteCounts();
        }
    }
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
                currentCustumerStatus: fl[0]['currentCustumerStatus']
            };
            //console.log('jjjj', this.selectedAccount);
            this.payInvo.cust_id = this.selectedAccount.id;
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
            this.selectedItem.item_name = "";
        }
    }
    qtyClick(i) {
        //console.log(i)
        this.showMe = i;
    }
    hideMe(i) {
        this.showMe = null;
    }
    editCell(i) {
        if (+this.itemList[i].quantity > 0 && +this.itemList[i].pay_price > 0) {
            this.itemList[i].tot = +this.itemList[i].quantity * +this.itemList[i].pay_price;
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
    ionViewDidLeave() {
        //console.log('ionViewWillLeave') 
        this.subiscribtionNotif.unsubscribe();
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
        this.getItemPaysByItemId();
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
    totChange(ev) {
        //console.log(ev); 
        this.payInvo.changee = +(ev.target.value - +this.payInvo.discount) - +this.payInvo.pay;
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
    back() {
        this._location.back();
    }
    deleteItem(index) {
        //console.log( index); 
        this.itemList.splice(index, 1);
        //console.log( this.itemList);
        this.payInvo.pay = 0;
        this.discountPerc = 0;
        this.payInvo.discount = 0;
        this.getTotal();
    }
    getTotal() {
        let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
        //console.log('sum', sum)
        this.payInvo.tot_pr = sum - +this.payInvo.discount;
        this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
        this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
        this.payInvo.changee = this.payInvo.changee.toFixed(2);
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
    validate() {
        let fl = [];
        if (this.sub_account) {
            fl = this.sub_account.filter(x => x.sub_name == this.sub_nameNew);
            //console.log(fl)
        }
        if (this.radioVal == 1 && this.sub_nameNew == "") {
            this.presentToast('sالرجاء إختيار حساب العميل', 'danger');
            return false;
        }
        else if (this.radioVal == 0 && this.selectedAccount.sub_name == "") {
            this.presentToast('wالرجاء إختيار حساب العميل', 'danger');
            return false;
        }
        else if (this.payInvo.cust_id == 0 && this.radioVal == 0) {
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
        else if (this.radioVal == 1 && fl.length > 0) {
            this.presentToast('العميل موجود مسبقا , الرجاء اختيارة من قائمة العملاء', 'danger');
            return false;
        }
        else {
            return true;
        }
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
        this.selectedAccount.sub_type = "debit";
        this.selectedAccount.sub_code = null;
        this.selectedAccount.cat_id = 1;
        this.selectedAccount.cat_name = 'العملاء';
        this.selectedAccount.sub_balance = "0";
        this.selectedAccount.store_id = this.store_info.id;
    }
    update() {
        //console.log('papa',this.payInvo)
        let d = this.payInvo.pay_date;
        this.payInvo.sub_name = this.selectedAccount.sub_name;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            if (this.radioVal == 0 && this.selectedAccount.id != null) {
                if ((this.offline == true && this.payInvo.pay_id) || (this.offline == true && !this.payInvo.pay_id) || (this.offline == false && !this.payInvo.pay_id)) {
                    this.saveInvoLocal();
                }
                else {
                    this.updateInvo();
                }
            }
            else if (this.radioVal == 0 && this.selectedAccount.id == null && this.selectedAccount.sub_name != "") {
                if ((this.offline == true && !this.payInvo.pay_id) || (this.offline == false && !this.payInvo.pay_id)) {
                    this.saveInvoLocal();
                }
                else {
                    this.saveSubAccount();
                }
            }
            else {
                if (this.offline == true) {
                    this.saveSubAccountlocal();
                }
                else {
                    this.saveSubAccount();
                }
            }
        }
    }
    updateInvo() {
        this.api.updateSalesInvo(this.payInvo).subscribe(data => {
            //console.log(data)
            //  this.deleteSalesitemList4update()
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            this.sales.push({
                "payInvo": this.payInvo,
                "itemList": []
            });
            this.storage.set('sales', this.sales).then((response) => {
                //console.log('sales', response)
                let arr = [];
                arr.push({
                    "payInvo": this.payInvo,
                    "itemList": []
                });
                this.back();
            });
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
        });
    }
    saveSubAccount() {
        //console.log('crea accoun')
        this.preparenewaccount();
        this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.payInvo.cust_id = data['message'];
                if (this.radioVal == 0 && this.selectedAccount.id == null && this.offline == false) {
                    this.sub_accountLocalSales = this.sub_accountLocalSales.filter(x => x.sub_name != this.selectedAccount.sub_name);
                    //console.log('imhereeeeeeeeeeeeeeeeee')
                    this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
                        //console.log('resoponse set', this.sub_accountLocalSales) 
                    });
                }
                this.updateInvo();
            }
            else {
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
        });
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
    saveSubAccountlocal() {
        //console.log('crea accoun')
        this.preparenewaccount();
        // add new account to acount list tobe available in next load
        if (!this.sub_account) {
            this.sub_account = [];
        }
        this.sub_account.push(this.selectedAccount);
        this.sub_accountLocalSales.push(this.selectedAccount);
        //console.log('sub_account' ,this.sub_account )
        this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
            //console.log('resoponse set', this.sub_accountLocalSales)
            this.saveInvoLocal();
        });
    }
    saveInvoLocal() {
        //console.log('hahahahaha')
        //let index = this.purchLocal.findIndex(item => item.payInvo.pay_ref == this.payInvo.pay_ref);
        let flt = [];
        flt = this.salesLocal.filter(item => item.payInvo.pay_ref == this.payInvo.pay_ref);
        //console.log ('flt',flt )
        //console.log ('this.payInvo', this.payInvo ,this.itemList)
        if (flt.length > 0) {
            this.salesLocal = this.salesLocal.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            //case1  فاتور محفوظة محلي فقط مفروض تتعدل وتتحفظ تاني محلي
            //this.salesLocal.splice(index,1) 
            //console.log ('salesLocal',this.salesLocal) 
            this.salesLocal.push({
                "payInvo": this.payInvo,
                "itemList": []
            });
        }
        else {
            //case2 tفاتورة اونلاين تتعدل وتتمسح من الفواتير المعدلة محلي و تضاف مرة تانية محلي
            //console.log ('gggggg',this.salesLocalUpdate)
            let ind = this.salesLocalUpdate.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            this.salesLocalUpdate = ind;
            //console.log ('ind',ind , this.salesLocalUpdate)
            this.salesLocalUpdate.push({
                "payInvo": this.payInvo,
                "itemList": []
            });
        }
        if (this.payInvo.pay_id != undefined) {
            this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            this.sales.push({
                "payInvo": this.payInvo,
                "itemList": []
            });
            this.storage.set('sales', this.sales).then((response) => {
                //console.log('sales', response) 
            });
        }
        this.storage.set('salesLocalUpdate', this.salesLocalUpdate).then((response) => {
            //console.log('resoponse set', response) 
        });
        this.storage.set('salesLocal', this.salesLocal).then((response) => {
            //console.log('resoponse set', response)
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.back();
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
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('update sales'),
                    "userId": this.user_info.id,
                    "typee": 'update sales',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                    "logStatus": 0,
                    "logToken": JSON.stringify(arr[0]),
                    "yearId": this.year.id,
                    "store_id": this.store_info.id
                });
                // 
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            console.log(this.offline == false, 'Confirm nnn  Cancel: blahموافق', this.payInvo.pay_id);
                            if (this.offline == false && this.payInvo.pay_id != undefined) {
                                console.log('1');
                                this.deleteSalesInvo();
                            }
                            else if (this.offline == false && this.payInvo.pay_id == undefined) {
                                console.log('2');
                                this.deleteSalesInvoLocal();
                            }
                            else if (this.offline == true) {
                                console.log('3');
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
        console.log('deleteSalesInvo');
        let arr = [];
        arr.push({
            "payInvo": this.payInvo,
            "itemList": []
        });
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        this.api.deleteSalesInvo(this.payInvo.pay_id).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.back();
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
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
                    "itemList": []
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
};
EditsalessndPage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
EditsalessndPage.propDecorators = {
    dstEds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["dstEds",] }],
    qtyEds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['qtyEds',] }],
    dstPop3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['dstPop3',] }],
    popInput3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['popInput3',] }],
    popover3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['popover3',] }],
    popoverNotif2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['popoverNotif2',] }]
};
EditsalessndPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-editsalessnd',
        template: _editsalessnd_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_editsalessnd_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditsalessndPage);



/***/ }),

/***/ 90981:
/*!****************************************************************!*\
  !*** ./src/app/editsalessnd/editsalessnd.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.bnone {\n  border: none;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRzYWxlc3NuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNJLGtCQUFBO0FBRVI7O0FBQ0k7RUFDSSxnQkFBQTtBQUVSOztBQUNFO0VBQ0ssa0JBQUE7RUFDSCxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0UsOEJBQUE7QUFHSjs7QUFERztFQUNDLDRCQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtBQUtKOztBQUhFO0VBQ0UsWUFBQTtBQU1KOztBQUpFO0VBQ0UseUJBQUE7QUFPSjs7QUFMRTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFjdkciLCJmaWxlIjoiZWRpdHNhbGVzc25kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0SW5wdXR7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuY3VzdC1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cblxuICAudGFibGV7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTJweDtcbiAgfVxuICAucmVke1xuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpIFxuICAgfVxuICAgLmRhcmtve1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaylcbiAgIH1cbiAgaW9uLXBvcG92ZXJ7XG4gICAgLS1vZmZzZXQteSA6IC0zMHB4XG4gIH1cbiAgLmJub25le1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfSBcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICB9XG4gIHRkLCB0aCB7Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogOHB4OyBmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6IGJsYWNrO30iXX0= */";

/***/ }),

/***/ 48950:
/*!****************************************************************!*\
  !*** ./src/app/editsalessnd/editsalessnd.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar> \n    <ion-title > تعديل فاتورة مبيعات</ion-title> \n    <ion-buttons  slot=\"end\"> \n      \n    <ion-button fill=\"clear\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-sharp\"></ion-icon>\n    </ion-button> \n    </ion-buttons> \n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- skeleton -->\n \n  <ion-grid  *ngIf=\"payInvo\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card  class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row dir=\"rtl\">\n              <ion-col size=\"4\" offset=\"5\"> \n              <ion-radio-group [(ngModel)]=\"radioVal\"  > \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" >\n                        <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                        <ion-label>قائمة الحسابات </ion-label> \n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" >\n                        <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                        <ion-label>حساب جديد</ion-label> \n                      </ion-item>\n                    </ion-col> \n                  </ion-row>\n                </ion-grid>  \n              </ion-radio-group>\n               </ion-col>\n               <ion-col size=\"3\" class=\"ion-text-end\">\n                <ion-item lines=\"none\">\n                  <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"payInvo.pay_date\"  />\n                  <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                </ion-item>\n              </ion-col>\n            </ion-row>\n  \n  \n            <ion-row>\n              <ion-col size=\"4\" offset=\"4\"  *ngIf=\"radioVal == 0 \"> \n                <ion-item class=\"custInput\" >\n                  <input  class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accounts\" id=\"account\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                  <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accounts\" style=\"height: auto;max-height: 20px;\">\n                    <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                  </datalist>\n                  <ion-label *ngIf=\"!sub_account\">\n                    <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                   </ion-label>\n                  <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('account')\">\n                    <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                  </ion-button>  \n                </ion-item>   \n              </ion-col>\n              <ion-col size=\"4\" offset=\"4\"  *ngIf=\"radioVal == 1\"> \n                <ion-item class=\"custInput\"> \n                 <ion-input [(ngModel)]=\"sub_nameNew\" ></ion-input>\n                </ion-item>   \n              </ion-col>\n              <ion-col size=\"4\" class=\"ion-text-start\">\n                <ion-item class=\"custInput\"> \n                  <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n                 </ion-item>   \n              </ion-col>\n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"payInvo\" >\n    <ion-row dir=\"rtl\"> \n      <ion-col size=\"9\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"9\">\n                <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n                <ion-item class=\"custInput\"> \n                  <ion-input [(ngModel)]=\"payInvo.tot_pr\" (ionChange)=\"totChange($event)\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <!-- <ion-col size=\"9\">\n                <ion-label class=\"ion-padding\">\n                  <strong>الخصم %</strong> \n                </ion-label>\n  \n                <ion-label class=\"ion-padding ion-margin-start\">\n                  <strong>الخصم</strong> \n                </ion-label> \n                <ion-item class=\"custInput\"> \n                  <ion-input  [(ngModel)]=\"discountPerc\" (ionChange)=\"discountPerChange($event)\"></ion-input>\n                  <ion-input  class=\"custInp\" [(ngModel)]=\"payInvo.discount\"  tabindex=\"600\"  (ionBlur)=\"discountChange($event)\"></ion-input> \n                </ion-item>\n              </ion-col> -->\n              <ion-col size=\"9\">\n                <ion-label class=\"ion-padding\"><strong> المدفوع نقدا</strong></ion-label>\n                <ion-item class=\"custInput\"> \n                  <ion-input [(ngModel)]=\"payInvo.pay\" (ionChange)=\"payChange($event)\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"9\">\n                <ion-label class=\"ion-padding\"><strong>المتبقي</strong></ion-label>\n                <ion-item class=\"custInput\"> \n                  <ion-input  [(ngModel)]=\"payInvo.changee\" [readonly]=\"true\"></ion-input>\n                </ion-item>\n              </ion-col> \n            </ion-row>\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"5\" >\n                <ion-button expand=\"block\" routerDirection=\"root\"  color=\"success\"  (click)=\"update()\" >\n                  <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"5\" >\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\"  (click)=\"delete()\" >\n                  <ion-label class=\"ion-text-center\"> حــذف</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_editsalessnd_editsalessnd_module_ts.js.map
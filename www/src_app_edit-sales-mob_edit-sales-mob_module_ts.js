"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-sales-mob_edit-sales-mob_module_ts"],{

/***/ 73494:
/*!*****************************************************************!*\
  !*** ./src/app/edit-sales-mob/edit-sales-mob-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesMobPageRoutingModule": () => (/* binding */ EditSalesMobPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _edit_sales_mob_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales-mob.page */ 98750);




const routes = [
    {
        path: '',
        component: _edit_sales_mob_page__WEBPACK_IMPORTED_MODULE_0__.EditSalesMobPage
    }
];
let EditSalesMobPageRoutingModule = class EditSalesMobPageRoutingModule {
};
EditSalesMobPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditSalesMobPageRoutingModule);



/***/ }),

/***/ 69403:
/*!*********************************************************!*\
  !*** ./src/app/edit-sales-mob/edit-sales-mob.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesMobPageModule": () => (/* binding */ EditSalesMobPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _edit_sales_mob_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales-mob-routing.module */ 73494);
/* harmony import */ var _edit_sales_mob_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sales-mob.page */ 98750);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);








let EditSalesMobPageModule = class EditSalesMobPageModule {
};
EditSalesMobPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_sales_mob_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditSalesMobPageRoutingModule
        ],
        declarations: [_edit_sales_mob_page__WEBPACK_IMPORTED_MODULE_1__.EditSalesMobPage]
    })
], EditSalesMobPageModule);



/***/ }),

/***/ 98750:
/*!*******************************************************!*\
  !*** ./src/app/edit-sales-mob/edit-sales-mob.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSalesMobPage": () => (/* binding */ EditSalesMobPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_sales_mob_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-sales-mob.page.html?ngResource */ 29212);
/* harmony import */ var _edit_sales_mob_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-sales-mob.page.scss?ngResource */ 45129);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _sales_pipe2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sales/pipe2 */ 36387);
/* harmony import */ var _sales_pipe3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sales/pipe3 */ 5022);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);














let EditSalesMobPage = class EditSalesMobPage {
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
        this.segmentVal = 'second';
        this.loadingItems = false;
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
            //console.log('mooooode',this.offline)
        });
    }
    segmentChange(ev) {
        //console.log(ev)
        //console.log(this.segmentVal)
    }
    ngOnInit() {
        // this.getStockItems()  
        this.getItemLocalOff();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            //check all changes in case notif arr >0 
            this.subiscribtionNotif = this.behavApi.currentNotif.subscribe(notif => {
                //console.log('notif page currentNotif behavApiRespnse',notif) 
                if (notif.length == 0) {
                    this.notifArr = [];
                }
                else {
                    this.notifArr = notif[0];
                }
                if (this.notifArr.length > 0) {
                    this.showNotif = true;
                    this.itemsLocal = notif[1];
                    this.items = this.itemsLocal;
                    this.searchResult = this.items;
                    this.sub_accountSales = notif[2];
                    //console.log(this.sub_accountLocalSales)  
                    this.storage.get('LogHistoryLocal').then((response) => {
                        if (response) {
                            this.LogHistoryLocalArr = response;
                        }
                    });
                    this.getSubBalance();
                }
                else {
                    //console.log('no updates')
                    this.showNotif = false;
                    // this.storage.get('itemsLocal' ).then((response) => {
                    //   if (response) {
                    //     this.itemsLocal = response 
                    //   //console.log('after ntif',this.itemsLocal)  
                    //     this.items = this.itemsLocal
                    //     this.searchResult = this.items
                    //   } 
                    // }); 
                    // this.storage.get('sub_accountSales').then((response) => {
                    //     if (response) {
                    //     }
                    //    
                    // });  
                }
            });
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
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)  
                this.items = this.itemsLocal;
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
                //console.log(this.store_info)  
                this.getItemLocalOff();
                this.getAccountOffline();
                //this.getSalesAccountFirs()   
            }
        });
        this.storage.get('LogHistoryLocal').then((response) => {
            //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
            if (response) {
                this.LogHistoryLocalArr = response;
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
        this.storage.get('searchLang').then((response) => {
            if (response) {
                this.searchLang = response;
                //console.log('searchLang' ,this.searchLang) 
            }
        });
    }
    getItemLocalOff() {
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)  
                this.items = this.itemsLocal;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
            yield this.getStockItems();
            this.back();
        });
    }
    performSyncDel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory('delete');
            yield this.getStockItems();
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
    refresh(para) {
        if (para == 'account') {
            this.getSalesAccount();
        }
        else {
            this.getStockItems();
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
        //console.log('dismissOver')
        this.setFocusOnInput('qtyEds');
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe;
        const filterPipe2 = new _sales_pipe2__WEBPACK_IMPORTED_MODULE_5__.FilterPipe2;
        const filterPipe3 = new _sales_pipe3__WEBPACK_IMPORTED_MODULE_6__.FilterPipe3;
        let fiteredArr;
        if (this.searchLang == 0) {
            fiteredArr = filterPipe.transform(this.items, ev.target.value);
        }
        else {
            fiteredArr = filterPipe3.transform(this.items, ev.target.value);
        }
        const fiteredArr2 = filterPipe2.transform(this.items, this.aliasTerm);
        //console.log('filte',fiteredArr)
        //console.log('fiteredArr2',fiteredArr2)
        if (fiteredArr.length > 0) {
            fiteredArr.forEach(element => {
                this.searchResult.push(element);
            });
        }
        if (fiteredArr2.length > 0) {
            fiteredArr2.forEach(element => {
                this.searchResult.push(element);
            });
        }
        //console.log('search',this.searchResult)
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
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        else if (this.radioVal == 1 && this.sub_nameNew == "") {
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
            this.deleteSalesitemList4update();
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
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('insert customer'),
                    "userId": this.user_info.id,
                    "typee": 'insert customer',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                    "logStatus": 0,
                    "logToken": JSON.stringify(this.selectedAccount),
                    "yearId": this.year.id,
                    "store_id": this.store_info.id
                });
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
                "itemList": this.itemList
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
                "itemList": this.itemList
            });
        }
        if (this.payInvo.pay_id != undefined) {
            this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            this.sales.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
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
                    "datee": moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
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
            "datee": moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            "logStatus": 0,
            "logToken": JSON.stringify(arr[0]),
            "yearId": this.year.id,
            "store_id": this.store_info.id
        });
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        this.api.deleteSalesInvo(this.payInvo.pay_id).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.deleteSalesitemList();
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
};
EditSalesMobPage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_7__.StockServiceService },
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
EditSalesMobPage.propDecorators = {
    dstEds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ["dstEds",] }],
    qtyEds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['qtyEds',] }],
    dstPop3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['dstPop3',] }],
    popInput3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popInput3',] }],
    popover3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popover3',] }],
    popoverNotif2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['popoverNotif2',] }]
};
EditSalesMobPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-edit-sales-mob',
        template: _edit_sales_mob_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_sales_mob_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditSalesMobPage);



/***/ }),

/***/ 45129:
/*!********************************************************************!*\
  !*** ./src/app/edit-sales-mob/edit-sales-mob.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.bnone {\n  border: none;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2FsZXMtbW9iLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksa0JBQUE7QUFFUjs7QUFDSTtFQUNJLGdCQUFBO0FBRVI7O0FBQ0U7RUFDSyxrQkFBQTtFQUNILFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSw4QkFBQTtBQUdKOztBQURHO0VBQ0MsNEJBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSxZQUFBO0FBTUo7O0FBSkU7RUFDRSx5QkFBQTtBQU9KOztBQUxFO0VBQVEseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsWUFBQTtBQWN2Rzs7QUFYRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFjSiIsImZpbGUiOiJlZGl0LXNhbGVzLW1vYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLmN1c3QtY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5jdXN0Um93e1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICB9XG5cbiAgLnRhYmxle1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEycHg7XG4gIH1cbiAgLnJlZHtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSBcbiAgIH1cbiAgIC5kYXJrb3tcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspXG4gICB9XG4gIGlvbi1wb3BvdmVye1xuICAgIC0tb2Zmc2V0LXkgOiAtMzBweFxuICB9XG4gIC5ibm9uZXtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH0gXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgfVxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XG4gIFxuICAvLyBSaWdodCBhbGlnbiBpdGVtIG5hbWUgY29sdW1uXG4gIHRkOm50aC1jaGlsZCgyKSwgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9Il19 */";

/***/ }),

/***/ 29212:
/*!********************************************************************!*\
  !*** ./src/app/edit-sales-mob/edit-sales-mob.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar> \n    <ion-title > تعديل فاتورة مبيعات</ion-title> \n    <ion-buttons  slot=\"end\"> \n      <div class=\"poRel\">\n        <div class=\"posAb noti\">\n         <ion-label>\n           <ion-text *ngIf=\"showNotif == true && notifArr.length> 0\">{{notifArr.length}}</ion-text> \n         </ion-label> \n       </div>\n       <div (click)=\"presentPopoverNotif($event)\">\n         <ion-icon name=\"notifications-outline\"  class=\"dark\"  [ngClass]=\"{'warn':showNotif == true && notifArr.length> 0 , 'dark': showNotif == false }\"></ion-icon> \n       </div>\n     </div> \n     <ion-button fill=\"clear\" (click)=\"presentPopoverNotif($event)\">\n      <ion-label><ion-text color=\"dark\" >الإشعارات</ion-text></ion-label>  \n     </ion-button>\n\n    <!-- <ion-button fill=\"clear\" class=\"ion-margin\"  (click)=\"changeMode()\"  > \n      <ion-label><ion-icon name=\"wifi-outline\" [color]=\"color\" style=\"font-size:20px\"></ion-icon></ion-label> \n      <ion-label><ion-text color=\"dark\"  *ngIf=\"color == 'primary'\">متصل</ion-text></ion-label>   \n      <ion-label><ion-text  color=\"dark\" *ngIf=\"color == 'dark'\">غير متصل</ion-text></ion-label>\n    </ion-button>  -->\n\n    <ion-button fill=\"clear\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-sharp\"></ion-icon>\n    </ion-button> \n    </ion-buttons> \n  <ion-popover  #popoverNotif2 [isOpen]=\"isOpenNotif\" (didDismiss)=\"didDissmisNotif()\">\n   <ng-template>\n     <ion-header>\n       <ion-toolbar dir=\"rtl\" class=\"ion-text-center\">\n         الإشعارات\n       </ion-toolbar>\n     </ion-header>\n     <ion-content  dir=\"rtl\">  \n       <ion-list class=\"ion-text-center\"  *ngIf=\"LogHistoryLocalArr.length>0\">\n        <ion-item *ngFor=\"let log of LogHistoryLocalArr\" >\n        <ion-grid >\n          <ion-row>\n            <ion-col size=\"9\"> \n                {{log.desc}}    \n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-text color = \"primary\">{{log.datee | dateAgo}}</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item> \n       </ion-list> \n     </ion-content>\n   </ng-template>\n </ion-popover>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- skeleton -->\n  <ion-segment [(ngModel)]=\"segmentVal\" (ionChange)=\"segmentChange($event)\" >\n    <ion-segment-button value=\"first\"> \n      <ion-label>تهيئة الفاتورة</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"second\"> \n      <ion-label>إضافة الأصناف</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"third\"> \n      <ion-label> الحسابات</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid  *ngIf=\"payInvo && segmentVal == 'first'\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card  class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row dir=\"rtl\">\n              <ion-col size=\"12\"> \n              <ion-radio-group [(ngModel)]=\"radioVal\"  > \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" >\n                        <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                        <ion-label>قائمة الحسابات </ion-label> \n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" >\n                        <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                        <ion-label>حساب جديد</ion-label> \n                      </ion-item>\n                    </ion-col> \n                  </ion-row>\n                </ion-grid>  \n              </ion-radio-group>\n              <ion-col size=\"12\"   *ngIf=\"radioVal == 0 \"> \n                <ion-item class=\"custInput\" >\n                  <input  class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accounts\" id=\"account\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                  <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accounts\" style=\"height: auto;max-height: 20px;\">\n                    <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                  </datalist>\n                  <ion-label *ngIf=\"!sub_account\">\n                    <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                   </ion-label>\n                  <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('account')\">\n                    <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                  </ion-button>  \n                </ion-item>   \n              </ion-col>\n              <ion-col size=\"12\"  *ngIf=\"radioVal == 1\"> \n                <ion-item class=\"custInput\"> \n                 <ion-input [(ngModel)]=\"sub_nameNew\" ></ion-input>\n                </ion-item>   \n              </ion-col>\n               </ion-col>\n               <ion-col size=\"12\" class=\"ion-text-end\">\n                <ion-item lines=\"none\" >\n                  <ion-label>\n                    التاريخ\n                  </ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"payInvo.pay_date\"  />\n                  <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" class=\"ion-text-start\">\n                <ion-item lines=\"none\" >\n                  <ion-label>\n                    تعليق\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"custInput\"> \n                  <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n                 </ion-item>   \n              </ion-col>\n            </ion-row>\n  \n  \n            \n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"payInvo && segmentVal == 'second'\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"8\" *ngIf=\"loadingItems == true\"> \n                      <ion-label  class=\"ion-padding\"><strong>الصنف</strong> </ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [disabled]=\"true\"></ion-input>\n                        <ion-spinner></ion-spinner>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"8\" *ngIf=\"loadingItems == false\"> \n                     <ion-label  class=\"ion-padding\"><strong>الصنف</strong>\n                      <ion-text *ngIf=\"searchLang == 0\">(عربي)</ion-text>\n                      <ion-text *ngIf=\"searchLang == 1\">(ENG)</ion-text>\n                     </ion-label> \n                       <!-- popOverSearch  -->\n                      <ion-item class=\"custInput\">\n                      <ion-input  #dstPop3 (click)=\"presentPopover($event)\"   [(ngModel)] =\"selectedItem.item_name\"></ion-input>\n                      <!-- <ion-button fill=\"clear\" (click)=\"clear('item_name')\" slot=\"end\">\n                        <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                      </ion-button> -->\n                      <ion-button   fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('items')\">\n                        <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                      </ion-button> \n                    </ion-item>\n                    <ion-popover  #popover3 [isOpen]=\"isOpen\" (didDismiss)=\"didDissmis()\">\n                      <ng-template>\n                        <ion-header>\n                          <ion-toolbar dir=\"rtl\">\n                            <ion-item>\n                              <ion-input #popInput3 [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input>\n                              <ion-button fill=\"clear\" (click)=\"clear()\" slot=\"end\">\n                                <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                              </ion-button>\n                              <!-- <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input> -->\n                             </ion-item>\n                          </ion-toolbar>\n                        </ion-header>\n                        <ion-content class=\"ion-padding\" dir=\"rtl\"> \n                          <!-- spinner -->\n                          <ion-list class=\"ion-text-center\"  *ngIf=\"searchResult.length==0 && searchTerm =='' \">\n                            <ion-label>\n                              <ion-spinner name=\"lines-sharp\"></ion-spinner>\n                            </ion-label> \n                          </ion-list>\n                          \n                          <!-- <ion-list *ngIf=\"finalResult.length>0\"> \n                            <ion-item button *ngFor=\"let item of finalResult\"  >{{item.item_name}}</ion-item>\n                          </ion-list> -->\n                           <!-- <ion-list *ngIf=\"searchResult.length>0\" class=\"hide\"> \n                            <ion-item button *ngFor=\"let item1 of searchResult | filter:searchTerm\"  >{{item1.item_name}}</ion-item>\n                          </ion-list>\n                          <ion-list *ngIf=\"aliasResult.length>0\" class=\"hide\"> \n                            <ion-item button *ngFor=\"let item2 of aliasResult | filter:aliasTerm\"  >{{item2.aliasEn}}</ion-item>\n                          </ion-list> -->\n                           <ion-list *ngIf=\"searchResult.length>0\" > \n                            <ion-item button *ngFor=\"let item of searchResult\" (click)=\"selectFromPop(item)\"    class=\"darko\" [ngClass]=\"{'red':item.quantity == 0 , 'darko':item.quantity > 0}\">\n                              {{item.item_name}} \n                            </ion-item>\n                          </ion-list> \n                        </ion-content>\n                      </ng-template>\n                    </ion-popover>\n                        <!-- <ion-item *ngIf=\"searchLang == 0 && items\" class=\"custInput\" >\n                          <input #dstEds class=\"bnone\"  list=\"browsersEdi\" id=\"browserEdi\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                          <datalist style=\"border: none;\" id=\"browsersEdi\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                          </datalist>\n                        <ion-label *ngIf=\"items.length==0\">\n                          <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                         </ion-label>\n                        <ion-button  *ngIf=\"items.length==0\" fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('items')\">\n                          <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                        </ion-button>   \n                        </ion-item>\n                        <ion-item *ngIf=\"searchLang == 1\" class=\"custInput\"  > \n                          <input #dstEps *ngIf=\"items.length>0\" class=\"bnone\"  list=\"browsers5564\" id=\"browser5564\" [(ngModel)]=\"selectedItem.item_desc\"  (change)=\"pickDetail($event)\"  >\n                          <datalist *ngIf=\"items.length>0\"  id=\"browsers5564\" style=\"border: none;height: auto;max-height: 20px;color: rgb(66, 3, 3)0000 ;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_desc\" ></option>\n                          </datalist>\n                          <ion-label *ngIf=\"items.length==0\">\n                            <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                           </ion-label>\n                           \n                          <ion-button  *ngIf=\"items.length==0\" fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('items')\">\n                            <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                          </ion-button> \n                         </ion-item> -->\n\n                        <h6><ion-label *ngIf=\"items.length>0\">\n                          <ion-text  >المخزون: </ion-text>  <ion-text color=\"danger\" >{{selectedItem.availQty}} </ion-text>\n                         </ion-label></h6>\n                    </ion-col>\n                    <ion-col size=\"4\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input #qtyEds  (keyup.enter)=\"addTolist()\" [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event)\"  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input (keyup.enter)=\"addTolist()\" [(ngModel)]=\"selectedItem.pay_price\"  (ionChange)=\"pricehange($event)\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.tot\" [readonly]=\"true\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <!-- <th>no</th> -->\n                  <th>الصنف</th>\n                  <th>الكمية</th>\n                  <th>سعر الوحده</th>\n                  <!-- <th>المجموع</th>  -->\n                  <th>حذف</th> \n                 </tr>\n                 <tr *ngFor=\"let item of itemList ; let i = index\" (dblclick)=\"qtyClick(i)\">\n                  <!-- <td>{{i+1}}</td> -->\n                  <td>{{item.item_name}}</td>\n                  <td>\n                    <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                 <td>\n                   <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text> \n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.pay_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                 </td>\n                  <!-- <td>{{+item.tot}}</td> -->\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>\n                 </tr>\n                 \n               \n               </table> \n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n  \n      \n      \n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"payInvo && segmentVal == 'third'\">\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-no-padding\">\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [(ngModel)]=\"payInvo.tot_pr\" [readonly]=\"true\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\">\n                <strong>الخصم %</strong> \n              </ion-label>\n\n              <ion-label class=\"ion-padding ion-margin-start\">\n                <strong>الخصم</strong> \n              </ion-label> \n              <ion-item class=\"custInput\"> \n                <ion-input  [(ngModel)]=\"discountPerc\" (ionChange)=\"discountPerChange($event)\"></ion-input>\n                <ion-input  class=\"custInp\" [(ngModel)]=\"payInvo.discount\"  tabindex=\"600\"  (ionBlur)=\"discountChange($event)\"></ion-input> \n              </ion-item>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong> المدفوع نقدا</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [(ngModel)]=\"payInvo.pay\" (ionChange)=\"payChange($event)\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong>المتبقي</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input  [(ngModel)]=\"payInvo.changee\" [readonly]=\"true\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong>تاريخ السداد</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-item lines=\"none\">\n                  <input style=\"width:100%\"  type=\"date\"  id=\"startingDate6\" name=\"startingDate6\" [(ngModel)]=\"payInvo.nextPay\"  />\n                </ion-item>\n              </ion-item>\n            </ion-col> \n          </ion-row>\n       \n        </ion-grid> \n      </ion-card>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <ion-grid dir=\"rtl\" *ngIf=\"payInvo\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-label class=\"ion-padding\"> <strong>صافي المبلغ</strong> </ion-label><br>\n        <ion-label class=\"ion-padding\"> <strong> {{payInvo.changee}}  </strong> </ion-label>\n      </ion-col>\n      <ion-col size=\"6\" >\n        <ion-button expand=\"block\" routerDirection=\"root\"  color=\"success\"  (click)=\"update()\" >\n          <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" >\n        <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\"  (click)=\"delete()\" >\n          <ion-label class=\"ion-text-center\"> حــذف</ion-label>\n        </ion-button>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-sales-mob_edit-sales-mob_module_ts.js.map
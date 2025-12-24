"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tswia_tswia_module_ts"],{

/***/ 78749:
/*!***********************************************!*\
  !*** ./src/app/tswia/tswia-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TswiaPageRoutingModule": () => (/* binding */ TswiaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _tswia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tswia.page */ 31248);




const routes = [
    {
        path: '',
        component: _tswia_page__WEBPACK_IMPORTED_MODULE_0__.TswiaPage
    }
];
let TswiaPageRoutingModule = class TswiaPageRoutingModule {
};
TswiaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TswiaPageRoutingModule);



/***/ }),

/***/ 27639:
/*!***************************************!*\
  !*** ./src/app/tswia/tswia.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TswiaPageModule": () => (/* binding */ TswiaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _tswia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tswia-routing.module */ 78749);
/* harmony import */ var _tswia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tswia.page */ 31248);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);








let TswiaPageModule = class TswiaPageModule {
};
TswiaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tswia_routing_module__WEBPACK_IMPORTED_MODULE_0__.TswiaPageRoutingModule
        ],
        declarations: [_tswia_page__WEBPACK_IMPORTED_MODULE_1__.TswiaPage]
    })
], TswiaPageModule);



/***/ }),

/***/ 31248:
/*!*************************************!*\
  !*** ./src/app/tswia/tswia.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TswiaPage": () => (/* binding */ TswiaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _tswia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tswia.page.html?ngResource */ 14412);
/* harmony import */ var _tswia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tswia.page.scss?ngResource */ 65001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _sales_pipe2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sales/pipe2 */ 36387);
/* harmony import */ var _sales_pipe3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sales/pipe3 */ 5022);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
















let TswiaPage = class TswiaPage {
    // اي طريقة دفع ح يكون في حساب مقابل ليها مثلا الكاش ح يتورد في حساب الخزينة وبنكك في حساب بنك الخرطوم اما الشيك فحيكون بالاجل و ح ينزل في  سجل الشيكات ويتحول الي حساب المعين سواء كان اتورد في حساب بنكي او اتسحب كاش واتورد فيحساب الخزينة 
    constructor(behavApi, _location, route, renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast) {
        this.behavApi = behavApi;
        this._location = _location;
        this.route = route;
        this.renderer = renderer;
        this.modalController = modalController;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.storage = storage;
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
        this.sub_accountSales = [];
        this.initialInvoices = [];
        this.items = [];
        this.itemsLocal = [];
        this.itemList = [];
        this.salesLocal = [];
        this.sales = [];
        this.purchLocal = [];
        this.purchase = [];
        this.randomsNumber = [];
        this.sub_nameNew = "";
        this.discountPerc = 0;
        this.radioVal = 0;
        this.radioVal2 = 0;
        this.printMode = false;
        this.printArr = [];
        this.offline = false;
        this.color = 'dark';
        this.showMe = null;
        this.status = 'new';
        this.searchLang = 0;
        this.searchTerm = "";
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        this.finalResult = [];
        this.pendingItemsFromStock = [];
        this.statusFromRoute = '';
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentCustumerStatus: 0 };
        this.route.queryParams.subscribe(params => {
            //console.log(params.payInvo,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
            if (params && params.payInvo) {
                this.status = 'initial';
                this.payInvo = JSON.parse(params.payInvo);
                this.user_info = JSON.parse(params.user_info);
                this.store_info = JSON.parse(params.store_info);
                this.itemList = JSON.parse(params.itemList);
                //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name)
                // this.selectedAccount.sub_name = this.payInvo.sub_name;  
                this.prepareOffline();
                this.getAppInfoCase2();
            }
            else if (params['status'] === 'newInvoFromItemsPage' && params['selectedItemsList']) {
                console.log('New invoice from items page');
                this.statusFromRoute = params['status'];
                this.pendingItemsFromStock = JSON.parse(params['selectedItemsList']);
                console.log('Received items from stock page:', this.pendingItemsFromStock);
            }
        });
        this.printArr.push({
            'payInvo': "",
            'itemList': "",
            'selectedAccount': "",
            'sub_nameNew': "",
            "userInfo": "",
            "sub_balanse": 0,
            "balanceStatus": ""
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
            aliasEn: "",
            qtyReal: 0
        };
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
    ionViewDidLeave() {
        //console.log('ionViewWillLeave') 
        this.subiscribtionNotif.unsubscribe();
    }
    ionViewDidEnter() {
        // setTimeout(() => {
        //   //check all changes in case notif arr >0 
        //    this.subiscribtionNotif = this.behavApi.currentNotif.subscribe(notif=>{
        //     //console.log('notif page currentNotif behavApiRespnse',notif) 
        //      if(notif.length == 0){
        //       this.notifArr = []
        //      }else{
        //       this.notifArr =  notif[0]  
        //      }
        //     if(this.notifArr.length> 0){ 
        //       this.showNotif = true
        //       this.itemsLocal = notif[1] 
        //       this.items =  this.itemsLocal
        //       this.searchResult = this.items
        //       this.sub_accountSales = notif[2] 
        //       //console.log(this.sub_accountLocalSales)  
        //       this.storage.get('LogHistoryLocal').then((response) => { 
        //         if (response) {
        //           this.LogHistoryLocalArr = response  
        //         } 
        //       });
        //       this.getSubBalance()
        //     } else {
        //       //console.log('no updates')
        //       this.showNotif = false
        //     } 
        //     })
        //   }, 10000); 
    }
    ngOnInit() {
        this.prepareOffline();
        if (this.status == 'new') {
            this.getAppInfo();
        }
        else if (this.status == 'initial') {
            this.getAppInfoCase2();
            this.radioVal2 = 0;
        }
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
    didDissmis() {
        this.isOpen = false;
        //console.log('dismissOver')
        this.setFocusOnInput('qtyId12');
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_6__.FilterPipe;
        const filterPipe2 = new _sales_pipe2__WEBPACK_IMPORTED_MODULE_7__.FilterPipe2;
        const filterPipe3 = new _sales_pipe3__WEBPACK_IMPORTED_MODULE_8__.FilterPipe3;
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
                aliasEn: "",
                qtyReal: 0
            };
        }
        else {
            this.searchTerm = "";
        }
    }
    getStockItems() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                //console.log('this.year.id',this.year.id)
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
                        });
                        this.storage.set('itemsLocal', this.items).then((response) => {
                        });
                        this.searchResult = this.items;
                    }, (err) => {
                        //console.log(err);
                    }, () => {
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
    presentAlertConfirm(initial) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let msg = 'هل تريد طباعة فاتورة ؟ ';
            if (initial) {
                msg = 'هل تريد حذف السجل ؟ ';
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: msg,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah'); 
                            // this.prepareInvo()
                            // this.back()
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            if (initial) {
                                this.deleteSalesInvoInit();
                            }
                            else {
                                this.presentModal(this.printArr, 'sales');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    Print(elem) {
        this.printMode = true;
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write('<html><head>');
        mywindow.document.write('<style type="text/css">');
        mywindow.document.write('.sumsDiv{border-style: solid;border-color: gray;border-width: .5px;} .flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;}.ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }');
        mywindow.document.write('</style></head><body>');
        mywindow.document.write(document.getElementById(elem).innerHTML);
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/ 
        mywindow.print();
        mywindow.close();
        this.printMode = false;
        return true;
    }
    getOffliemode() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log('mooooode',this.offline)
            if (this.offline == true) {
                this.color = 'dark';
            }
            else if (this.offline == false) {
                this.color = 'primary';
            }
            else {
                this.SetOffliemode();
            }
        });
    }
    SetOffliemode() {
        this.storage.set('offline', false).then((response) => {
            this.offline = response;
            this.color = 'primary';
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
                this.getItemLocalOff();
                this.prepareInvo();
            }
        });
        this.storage.get('initialInvoices').then((response) => {
            if (response) {
                this.initialInvoices = response;
            }
        });
        this.storage.get('LogHistoryLocal').then((response) => {
            //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
            if (response) {
                this.LogHistoryLocalArr = response;
            }
        });
        this.storage.get('searchLang').then((response) => {
            if (response) {
                this.searchLang = response;
                //console.log('searchLang' ,this.searchLang) 
            }
        });
    }
    getAppInfoCase2() {
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
            }
            this.storage.get('year').then((response) => {
                if (response) {
                    this.year = response;
                }
            });
        });
        // this.storage.get('initialInvoices').then((response) => {
        //   this.getSalesAccount() 
        //   if (response) {
        //     this.initialInvoices = response  
        //   }
        // }); 
        this.storage.get('LogHistoryLocal').then((response) => {
            //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
            if (response) {
                this.LogHistoryLocalArr = response;
            }
        });
        this.storage.get('searchLang').then((response) => {
            if (response) {
                this.searchLang = response;
                //console.log('searchLang' ,this.searchLang) 
            }
        });
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
                this.getSubBalance();
            }
        });
    }
    radioChange(ev) {
        //console.log(ev.target.value) 
    }
    recalSubBalance() {
        // adding new change to subbalances
        this.sub_account.forEach(element => {
            element.sub_balance = 0;
            let debitTot = +element.changeeTot + +element.fromDebitTot;
            let creditTot = +element.purchChangeeTot + +element.toCreditTot;
            if (this.radioVal == 0 && this.selectedAccount.id == element.id) {
                // debitTot = +debitTot + +this.payInvo.changee
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
    prepareInvo() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_id: "", cat_name: "", phone: "", address: "", currentCustumerStatus: 0 };
        this.sub_nameNew = "";
        this.radioVal = 0;
        this.radioVal2 = 0;
        this.payInvo = { pay_id: undefined, pay_ref: 0, store_id: "", tot_pr: 0, pay_date: "", pay_time: "", user_id: "", yearId: this.year.id, payComment: "" };
        this.discountPerc = 0;
        let d = new Date;
        // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss');
        this.generateRandom();
        this.payInvo.store_id = this.store_info.id;
        this.payInvo.user_id = this.user_info.id;
        this.payInvo.yearId = this.year.id;
        //console.log( this.payInvo) 
        this.itemList = [];
        if (this.statusFromRoute === 'newInvoFromItemsPage' && this.pendingItemsFromStock.length > 0) {
            //console.log('Pending items from stock page:', this.pendingItemsFromStock);
            this.pendingItemsFromStock.forEach(item => {
                this.itemList.push({
                    "id": 'NULL',
                    "pay_ref": this.payInvo.pay_ref,
                    "item_name": item.item_name,
                    "pay_price": item.pay_price,
                    "quantity": +item.qty,
                    "tot": ((+item.qty - 0) * +item.perch_price).toFixed(2),
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +item.id,
                    "dateCreated": this.datePipe.transform(d, 'dd-MM-YYYY'),
                    "perch_price": item.perch_price,
                    "availQty": +item.qty,
                    "qtyReal": 0
                });
            });
            this.statusFromRoute = '';
            this.pendingItemsFromStock = []; // Reset status after processing
            this.getTotal();
        }
        //  this.getSalesAccount()  
        // this.setFocusOnInput('dst')
        // this.setFocusOnInput('dstPop')
    }
    setFocusOnInput(Input) {
        //console.log('setFocusOnInput')
        if (Input == 'dst') {
            this.nameField.nativeElement.focus();
        }
        else if (Input == 'dstPop') {
            this.dstPop12.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.items;
            setTimeout(() => {
                this.popInput.setFocus();
            }, 1500);
        }
        else if (Input == 'qtyId12') {
            this.qtyId12.setFocus();
        }
        else if (Input == 'popInput') {
            this.popInput.setFocus();
        }
    }
    isFocused(event) {
        //console.log('dsdfsdf',event)
    }
    presentPopoverNotif(e) {
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif7.event = e;
        this.isOpenNotif = true;
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
    }
    getItems() {
        if (this.offline == false) {
            this.api.getItems().subscribe(data => {
                //console.log(data)
                let res = data;
                this.items = res['data'];
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.items = this.itemsLocal;
        }
    }
    //Yaw
    getSalesAccount() {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                //console.log(this.sub_account)
                this.getSubBalance();
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
            if (this.sub_accountLocalSales) {
                for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                    const element = this.sub_accountLocalSales[i];
                    this.sub_account.push(element);
                }
            }
        }
        else {
            if (this.sub_accountLocalSales) {
                this.sub_account = this.sub_accountLocalSales;
            }
        }
    }
    //Yaw
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
    generateRandom() {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString();
        this.payInvo.pay_ref = this.store_info.store_ref + randomsNumber;
        //console.log(randomsNumber)
        //console.log(this.payInvo.pay_ref)  
    }
    pickAccount(ev) {
        let fl = this.sub_account.filter(x => x.sub_name == ev.target.value);
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
                phone: fl[0]['phone'],
                address: fl[0]['address'],
                currentCustumerStatus: fl[0]['currentCustumerStatus']
            };
            //console.log( this.selectedAccount);
            //  this.setFocusOnInput()
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
            tot: item.pay_price,
            availQty: item.quantity,
            aliasEn: item.aliasEn,
            qtyReal: 0
        };
        this.selectedItemSales29 = item.sales29;
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
                tot: fl[0]['perch_price'],
                availQty: fl[0]['availQty'],
                aliasEn: fl[0]['aliasEn'],
                qtyReal: fl[0]['qtyReal']
            };
            //console.log( this.selectedItem);
            this.setFocusOnInput('qtyId12');
        }
        else {
            this.presentToast('خطأ في اسم الصنف ', 'danger');
            this.selectedItem.item_name = "";
            this.selectedItem.item_desc = "";
        }
    }
    generateRandom2(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    qtyRealhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = ((this.selectedItem.availQty - this.selectedItem.qtyReal) * this.selectedItem.perch_price);
    }
    pricehange(ev) {
        //console.log(ev);
        this.selectedItem.tot = ((this.selectedItem.availQty - this.selectedItem.qtyReal) * this.selectedItem.perch_price);
    }
    payChange(ev) {
        //console.log(ev); 
        // if(this.discountPerc>0){
        //   this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
        // }
        // this.payInvo.changee = +( this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value 
    }
    discountChange(ev) {
        // //console.log('discountChange' ,ev); 
        // this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
        // this.payInvo.changee = +( this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay
    }
    discountPerChange(ev) {
        // //console.log('discountPerChange',ev);
        // this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
        // this.payInvo.changee = +( this.payInvo.tot_pr -  this.payInvo.discount ) - this.payInvo.pay
    }
    deleteItem(index) {
        //console.log( index); 
        this.itemList.splice(index, 1);
        //console.log( this.itemList); 
        this.getTotal();
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
    getTotal() {
        let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
        //console.log('sum', sum)
        this.payInvo.tot_pr = sum.toFixed(2);
    }
    refresh(para) {
        if (para == 'account') {
            this.getSalesAccount();
        }
        else {
            // this.getItems()
            this.getStockItems();
        }
    }
    addTolist() {
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "") {
            this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
        }
        else if (this.selectedItem.qtyReal == this.selectedItem.availQty) {
            this.presentToast(' الكميات متساوية , لا يمكن إضافة العنصر  ', 'danger');
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
                    "perch_price": this.selectedItem.perch_price,
                    "availQty": this.selectedItem.availQty,
                    "qtyReal": this.selectedItem.qtyReal
                });
            }
            else {
                //console.log(this.itemList);
                //console.log(fl[0].qtyReal);
                //console.log(+this.selectedItem.qtyReal);
                this.selectedItem.qtyReal = fl[0].qtyReal + this.selectedItem.qtyReal;
                let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
                // this.itemList[index].qtyReal = +this.selectedItem.qtyReal
                this.itemList[index].tot = ((this.selectedItem.availQty - this.selectedItem.qtyReal) * +this.selectedItem.perch_price);
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
                aliasEn: "",
                qtyReal: ""
            };
            this.getTotal();
            this.setFocusOnInput('dstPop12');
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
        if (+this.itemList[i].qtyReal > 0 && +this.itemList[i].perch_price > 0) {
            this.itemList[i].tot = (this.itemList[i].availQty - this.itemList[i].qtyReal) * +this.itemList[i].perch_price;
            this.hideMe(i);
            this.getTotal();
        }
        else {
            this.presentToast("خطأ في الإدخال ", "danger");
        }
    }
    validate() {
        let fl = [];
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        else if (this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
            this.presentToast('الرجاء تحديد التاريخ ', 'danger');
            return false;
        }
        else {
            return true;
        }
    }
    saveIntial() {
        //   if(this.radioVal == 1){
        //    this.payInvo.sub_name = this.sub_nameNew
        //    this.payInvo.cust_id = null
        //   }  
        //   // check if the invoice is exist
        //  if(this.initialInvoices.length > 0){ 
        //   this.initialInvoices = this.initialInvoices.filter(x=>x['payInvo'].pay_ref != this.payInvo.pay_ref) 
        //   }
        //   this.initialInvoices.push({
        //     "payInvo": this.payInvo,
        //     "itemList": this.itemList
        //   })
        //   this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
        //     this.printArr = []
        //     this.recalSubBalance()
        //     this.printArr.push({
        //       'payInvo': this.payInvo,
        //       'itemList':this.itemList,
        //       'selectedAccount' : this.selectedAccount,
        //       'sub_nameNew' : this.sub_nameNew ,
        //       "user_name" : this.user_info.full_name ,
        //       "sub_balanse": this.selectedAccount.sub_balance,
        //       "balanceStatus":  this.selectedAccount.currentCustumerStatus 
        //     }) 
        //       //console.log(this.printArr)
        //       this.presentAlertConfirm()
        //       this.presentToast('تم الحفظ بنجاح', 'success')
        //       this.prepareInvo()
        //       this.status = 'new'
        //     });  
    }
    saveInvoInit() {
        // // if(this.radioVal == 1){
        // //   this.payInvo.sub_name = this.sub_nameNew
        // //   this.payInvo.cust_id = null
        // //  }  
        // this.api.saveSalesInvoInit(this.payInvo).subscribe(data => {
        //   //console.log(data)
        //   this.saveitemListinit()
        // }, (err) => {
        //   //console.log(err);
        //   this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
        // })
    }
    deleteInitial() {
        if (this.initialInvoices.length > 0) {
            this.initialInvoices = this.initialInvoices.filter(x => x['payInvo'].pay_ref != this.payInvo.pay_ref);
        }
        this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
            this.presentToast('تم الحذف بنجاح', 'success');
            this.status = 'new';
            this.prepareInvo();
        });
    }
    deleteSalesInvoInit() {
        if (this.status != 'toFinal') {
            this.presentLoadingWithOptions('جاري حذف البيانات ...');
        }
        this.api.deleteSalesInvoInit(this.payInvo.pay_id).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.deleteSalesitemListInit();
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    deleteSalesitemListInit() {
        this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                if (this.status != 'toFinal') {
                    this.presentToast('تم الحذف بنجاح', 'success');
                    this.prepareInvo();
                }
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
    save() {
        let d = this.payInvo.pay_date;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        //console.log('save testing', this.payInvo)
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            if (this.offline == true) {
                this.saveInvoLocal();
            }
            else {
                this.saveInvo();
            }
        }
    }
    back() {
        this._location.back();
    }
    updateInitInvo() {
        this.api.updateInitSalesInvo(this.payInvo).subscribe(data => {
            //console.log(data)
            this.deleteSalesitemListInit4update();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
        });
    }
    deleteSalesitemListInit4update() {
        this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.saveitemListinit();
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
    preparenewaccount() {
        // if (this.selectedAccount.sub_name.length>0 && this.selectedAccount.id == null) {
        //  // this.selectedAccount.sub_name = this.payInvo.sub_name
        // } else {
        //   //console.log('slwcted from drop' ) 
        //     this.selectedAccount.sub_name = this.sub_nameNew
        //     this.payInvo.sub_name  =this.selectedAccount.sub_name
        // }
        //   this.selectedAccount.id=null  
        //   this.selectedAccount.ac_id = 1 
        //   this.selectedAccount.sub_type="debit"
        //   this.selectedAccount.sub_code=null
        //   this.selectedAccount.sub_balance="0"
        //   this.selectedAccount.cat_id = 1
        //   this.selectedAccount.cat_name = 'العملاء'
        //   this.selectedAccount.store_id=this.store_info.id  
    }
    saveSubAccount() {
        // //console.log('crea accoun')
        // this.preparenewaccount()
        // this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
        // //console.log(data)
        // if (data['message'] != 'Post Not Created') {
        //   this.payInvo.cust_id =  data['message'] 
        //   //حالة الحساب موجود محلي والحفظ انلاين يسحب من المحلي ويضاف سsalesaccount   
        //   if(this.radioVal == 0 && this.selectedAccount.id == null && this.offline == false) {
        //     this.sub_accountLocalSales = this.sub_accountLocalSales.filter(x=>x.sub_name != this.selectedAccount.sub_name)
        //     //console.log('imhereeeeeeeeeeeeeeeeee')
        //     this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
        //     //console.log('resoponse set', this.sub_accountLocalSales)
        //     this.selectedAccount.id = this.payInvo.cust_id
        //     this.sub_accountSales.push(this.selectedAccount)
        //     this.storage.set('sub_accountSales', this.sub_accountSales).then((response) => {
        //     })
        //    });
        //  }
        //   this.saveInvo()
        // } else {
        //    this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
        // } 
        //   }, (err) => {
        // //console.log(err);
        // this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
        //  },()=>{
        //  this.loadingController.dismiss()
        //  })
    }
    saveSubAccountInit() {
        // this.preparenewaccount()
        // this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
        // //console.log(data)
        // if (data['message'] != 'Post Not Created') {
        //   this.payInvo.cust_id =  data['message'] 
        //   //console.log('crea accoun' ,  data['message'] )
        //   this.saveInvoInit()
        // } else {
        //    this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
        // } 
        //   }, (err) => {
        // //console.log(err);
        // this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
        //  },()=>{
        //  this.loadingController.dismiss()
        //  })
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
        this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
            //console.log('resoponse set', this.sub_accountLocalSales)
            // this.payInvo.cust_id =  data['message']
            this.saveInvoLocal();
        });
    }
    saveInvo() {
        this.api.saveTswiaInvo(this.payInvo).subscribe(data => {
            //console.log(data)
            this.saveitemList();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveInvoLocal() {
        this.salesLocal.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('salesLocal', this.salesLocal).then((response) => {
            //console.log('resoponse set', response)
            this.printArr = [];
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew,
                "user_name": this.user_info.full_name,
                "sub_balanse": this.selectedAccount.sub_balance,
                "balanceStatus": this.selectedAccount.currentCustumerStatus
            });
            //console.log(this.printArr)
            // this.presentAlertConfirm()
            this.presentToast('تم الحفظ بنجاح', 'success');
        });
    }
    saveitemListinit() {
        this.api.saveSalesitemListInit(this.itemList).subscribe(data => {
            //console.log(data) 
            this.recalSubBalance();
            //console.log(this.selectedAccount.currentCustumerStatus)  
            //console.log(this.printArr) 
            this.printArr = [];
            this.recalSubBalance();
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew,
                "user_name": this.user_info.full_name,
                "sub_balanse": this.selectedAccount.sub_balance,
                "balanceStatus": this.selectedAccount.currentCustumerStatus
            });
            //console.log(this.printArr)
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.prepareInvo();
            this.status = 'new';
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    saveitemList() {
        this.api.saveTswiaitemList(this.itemList).subscribe(data => {
            //console.log(data) 
            //  this.recalSubBalance()
            //console.log(this.selectedAccount.currentCustumerStatus)  
            this.printArr = [];
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew,
                "user_name": this.user_info.full_name,
                "sub_balanse": this.selectedAccount.sub_balance,
                "balanceStatus": this.selectedAccount.currentCustumerStatus
            });
            //console.log('printinggg',this.printArr)
            let arr = [];
            arr.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
            this.logHistoryArr.push({
                "id": null,
                "logRef": this.generateRandom2('insert tswia'),
                "userId": this.user_info.id,
                "typee": 'insert tswia',
                "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(arr[0]),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
            //   this.sales.push({
            //    "payInvo": this.payInvo,
            //    "itemList": this.itemList 
            //  }) 
            //  this.storage.set('sales', this.sales).then((response) => {
            //  //console.log('sales', response) 
            //  }) 
            //  this.presentAlertConfirm() 
            this.performSync();
            // this.presentToast('تم الحفظ بنجاح' , 'success')  
            // this.prepareInvo()
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
            yield this.getStockItems();
        });
    }
    deleteInitInvo() {
    }
    saveLogHistory() {
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
                this.logHistoryArr = [];
                this.presentToast('تم الحفظ بنجاح', 'success');
                this.prepareInvo();
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.recalSubBalance();
            const modal = yield this.modalController.create({
                component: _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__.PrintModalPage,
                componentProps: {
                    "printArr": this.printArr,
                    "page": page
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    //console.log(dataReturned )
                    this.prepareInvo();
                }
            });
            return yield modal.present();
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
};
TswiaPage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController }
];
TswiaPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["dst",] }],
    dstPop12: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['dstPop12',] }],
    qtyId12: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['qtyId12',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popover',] }],
    popoverNotif7: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['popoverNotif7',] }]
};
TswiaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-tswia',
        template: _tswia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tswia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TswiaPage);



/***/ }),

/***/ 65001:
/*!**************************************************!*\
  !*** ./src/app/tswia/tswia.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.bnone {\n  border: none;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzd2lhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksa0JBQUE7QUFFUjs7QUFBSTtFQUFPLG1CQUFBO0FBSVg7O0FBRkk7RUFBTSxrQkFBQTtBQU1WOztBQUxJO0VBQ0ksZ0JBQUE7QUFRUjs7QUFOQTtFQUNFLFlBQUE7QUFTRjs7QUFOQztFQUNDLDhCQUFBO0FBU0Y7O0FBUEM7RUFDQyw0QkFBQTtBQVVGOztBQVJBO0VBQ0Usa0JBQUE7QUFXRjs7QUFUQTtFQUNFLHlCQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVRFO0VBQ0ssa0JBQUE7RUFDSCxXQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVRFO0VBQ0UseUJBQUE7QUFZSjs7QUFWRTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFtQnZHOztBQWhCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFtQkoiLCJmaWxlIjoidHN3aWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAgIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cbi5ibm9uZXtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4gLnJlZHtcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlcikgXG4gfVxuIC5kYXJrb3tcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKVxuIH1cbmlvbi1wb3BvdmVye1xuICAtLW9mZnNldC15IDogLTMwcHhcbn1cbi5jdXN0SW5we1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMC41cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIFxuICAudGFibGV7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTJweDtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgfVxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XG4gIFxuICAvLyBSaWdodCBhbGlnbiBpdGVtIG5hbWUgY29sdW1uXG4gIHRkOm50aC1jaGlsZCgyKSwgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9XG4gICAgICAgIl19 */";

/***/ }),

/***/ 14412:
/*!**************************************************!*\
  !*** ./src/app/tswia/tswia.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>جرد وتسوية </ion-title>\n    <ion-buttons  slot=\"end\">  \n      <div class=\"poRel\">\n        <div class=\"posAb noti\">\n         <ion-label>\n           <ion-text *ngIf=\"showNotif == true && notifArr.length> 0\">{{notifArr.length}}</ion-text> \n         </ion-label> \n       </div>\n       <div (click)=\"presentPopoverNotif($event)\">\n         <ion-icon name=\"notifications-outline\"  class=\"dark\"  [ngClass]=\"{'warn':showNotif == true && notifArr.length> 0 , 'dark': showNotif == false }\"></ion-icon> \n       </div>\n     </div> \n     <ion-button fill=\"clear\" (click)=\"presentPopoverNotif($event)\">\n      <ion-label><ion-text color=\"dark\" >الإشعارات</ion-text></ion-label>  \n     </ion-button>\n\n    <ion-button fill=\"clear\" class=\"ion-margin\"  (click)=\"changeMode()\"  > \n      <ion-label><ion-icon name=\"wifi-outline\" [color]=\"color\" style=\"font-size:20px\"></ion-icon></ion-label> \n      <ion-label><ion-text color=\"dark\"  *ngIf=\"color == 'primary'\">متصل</ion-text></ion-label>   \n      <ion-label><ion-text  color=\"dark\" *ngIf=\"color == 'dark'\">غير متصل</ion-text></ion-label>\n    </ion-button> \n    </ion-buttons> \n  <ion-popover  #popoverNotif7 [isOpen]=\"isOpenNotif\" (didDismiss)=\"didDissmisNotif()\">\n   <ng-template>\n     <ion-header>\n       <ion-toolbar dir=\"rtl\" class=\"ion-text-center\">\n         الإشعارات\n       </ion-toolbar>\n     </ion-header>\n     <ion-content  dir=\"rtl\">  \n       <ion-list class=\"ion-text-center\"  *ngIf=\"LogHistoryLocalArr.length>0\">\n        <ion-item *ngFor=\"let log of LogHistoryLocalArr\" >\n        <ion-grid >\n          <ion-row>\n            <ion-col size=\"9\"> \n                {{log.desc}}    \n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-text color = \"primary\">{{log.datee | dateAgo}}</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item> \n       </ion-list> \n     </ion-content>\n   </ng-template>\n </ion-popover>\n  </ion-toolbar>\n</ion-header>\n<ion-content> \n<ion-grid  *ngIf=\"user_info && store_info\" >\n  <ion-row dir=\"rtl\">\n    <ion-col size=\"12\">\n      <ion-card  class=\"ion-no-padding ion-no-margin\">\n        <ion-grid class=\"ion-no-padding ion-no-margin\"> \n          <ion-row>\n            <ion-col size=\"3\" offset=\"6\" class=\"ion-text-start\">\n              <ion-item class=\"custInput\"> \n                <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n               </ion-item>   \n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-item lines=\"none\">\n                <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"payInvo.pay_date\"  />\n              </ion-item>\n            </ion-col>\n          </ion-row>\n         </ion-grid> \n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\" >\n  <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\n    <ion-col size=\"12\"   class=\"ion-no-padding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"4\"> \n                    <ion-label  class=\"ion-padding\">\n                      <strong>الصنف</strong>\n                      <ion-text *ngIf=\"searchLang == 0\">(عربي)</ion-text>\n                      <ion-text *ngIf=\"searchLang == 1\">(ENG)</ion-text>\n                      <ion-text >{{+selectedItemSales29}}</ion-text>\n                      \n                    </ion-label> \n                    <!-- popOverSearch  -->\n                    <ion-item class=\"custInput\">\n                      <ion-input  #dstPop12 (click)=\"presentPopover($event)\"   [(ngModel)] =\"selectedItem.item_name\"></ion-input>\n                      <!-- <ion-button fill=\"clear\" (click)=\"clear('item_name')\" slot=\"end\">\n                        <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                      </ion-button> -->\n                    </ion-item>\n                    <ion-popover  #popover [isOpen]=\"isOpen\" (didDismiss)=\"didDissmis()\">\n                      <ng-template>\n                        <ion-header>\n                          <ion-toolbar dir=\"rtl\">\n                            <ion-item>\n                              <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input>\n                              <ion-button fill=\"clear\" (click)=\"clear()\" slot=\"end\">\n                                <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                              </ion-button>\n                              <!-- <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input> -->\n                             </ion-item>\n                          </ion-toolbar>\n                        </ion-header>\n                        <ion-content class=\"ion-padding\" dir=\"rtl\"> \n                          <!-- spinner -->\n                          <ion-list class=\"ion-text-center\"  *ngIf=\"searchResult.length==0 && searchTerm =='' \">\n                            <ion-label>\n                              <ion-spinner name=\"lines-sharp\"></ion-spinner>\n                            </ion-label> \n                          </ion-list>\n                          \n                           <ion-list *ngIf=\"searchResult.length>0\"> \n                            <ion-item button *ngFor=\"let item of searchResult\" (click)=\"selectFromPop(item)\"    class=\"darko\" [ngClass]=\"{'red':item.quantity == 0 , 'darko':item.quantity > 0}\">\n                              {{item.item_name}} \n                            </ion-item>\n                          </ion-list> \n                        </ion-content>\n                      </ng-template>\n                    </ion-popover>\n                  </ion-col>\n                  <ion-col size=\"2\"> \n                    <ion-label class=\"ion-padding\"><strong>الكمية في النظام</strong></ion-label>\n                    <ion-item class=\"custInput\" >\n                      <ion-input  [readonly]=\"true\"   [(ngModel)]=\"selectedItem.availQty\"  (ionChange)=\"qtyRealhange($event)\"  ></ion-input>\n                    </ion-item> \n                  </ion-col>\n\n                  <ion-col size=\"2\"> \n                    <ion-label class=\"ion-padding\"><strong>الكمية الفعلية</strong></ion-label>\n                    <ion-item class=\"custInput\" >\n                      <ion-input   #qtyId12  (keyup.enter)=\"addTolist()\" (ionFocus)=\"isFocused($event)\"  [(ngModel)]=\"selectedItem.qtyReal\"  (ionChange)=\"qtyRealhange($event)\" select-all ></ion-input>\n                    </ion-item> \n                  </ion-col>\n\n                  <ion-col size=\"2\"> \n                    <ion-label class=\"ion-padding\"><strong> فرق الكمية </strong></ion-label>\n                    <ion-item class=\"custInput\" >\n                      <ion-input [readonly]=\"true\"    [value]=\"selectedItem.availQty - selectedItem.qtyReal\"  ></ion-input>\n                    </ion-item> \n                  </ion-col>\n\n                  <ion-col size=\"2\">\n                    <ion-label class=\"ion-padding\"><strong>سعر الشراء</strong></ion-label>\n                    <ion-item class=\"custInput\">\n                      <ion-input (keyup.enter)=\"addTolist()\" [(ngModel)]=\"selectedItem.perch_price\" (ionChange)=\"pricehange($event)\"  ></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                    <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                    <ion-item class=\"custInput\">\n                      <ion-input [readonly]=\"true\" [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"ion-padding\"> \n                    <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                      <ion-label class=\"ion-text-center\"> +</ion-label>\n                    </ion-button> \n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card>\n          </ion-col> \n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n          <ion-card>\n             <table class=\"table\">\n               <tr>\n                <th>no</th>\n                <th>الصنف</th>\n                <th>الكمية في النظام</th>\n                <th>الكميةالفعلية </th>\n                <th>فرق الكمية</th> \n                <th>سعر الوحده</th>\n                <th>المجموع</th> \n                <th></th> \n               </tr>\n               <tr *ngFor=\"let item of itemList ; let i = index\"  (dblclick)=\"qtyClick(i)\">\n                <td>{{+i}}</td>\n                <td>{{item.item_name}}</td>\n                \n                <td>\n                   <ion-text >{{item.availQty}}</ion-text> \n                </td>\n\n                <td>\n                  <ion-text *ngIf=\"showMe != i\">{{item.qtyReal}}</ion-text> \n                  <ion-item *ngIf=\"showMe == i\">\n                   <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.qtyReal\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                  </ion-item>\n                </td>\n\n               <td>\n                <ion-text *ngIf=\"showMe != i\">{{item.availQty - item.qtyReal}}</ion-text> \n                \n               </td>\n\n                <td>\n                  <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text> \n                   <ion-item *ngIf=\"showMe == i\">\n                    <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.perch_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                   </ion-item>\n                </td>\n\n                <td>{{item.tot}}</td>\n                <td>\n                  <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                    <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                  </ion-button>\n                </td>\n               </tr>\n             </table> \n          </ion-card>\n        </ion-col>\n        </ion-row> \n      </ion-grid>\n    </ion-col> \n    <ion-col size=\"10\" class=\"ion-no-padding\">\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"4\">\n              <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [(ngModel)]=\"payInvo.tot_pr\" [readonly]=\"true\" ></ion-input>\n              </ion-item>\n            </ion-col> \n          </ion-row> \n        </ion-grid> \n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"4\" class=\"ion-no-padding\">\n      <ion-card>\n        <ion-grid> \n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"5\" >\n              <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"save()\" >\n                <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n              </ion-button>\n            </ion-col> \n          </ion-row>\n        </ion-grid> \n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n\n\n \n</ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tswia_tswia_module_ts.js.map
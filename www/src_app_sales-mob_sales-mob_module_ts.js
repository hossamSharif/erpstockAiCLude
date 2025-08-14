"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sales-mob_sales-mob_module_ts"],{

/***/ 90573:
/*!***********************************!*\
  !*** ./src/app/sales-mob/pipe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe = class FilterPipe {
    transform(items, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || items.length === 0) {
                return items;
            }
            else {
                return filter ? items.filter(item => item.item_name.toLocaleLowerCase().indexOf(filter) != -1) : items;
            }
        }
    }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByName', pure: true })
], FilterPipe);



/***/ }),

/***/ 24670:
/*!************************************!*\
  !*** ./src/app/sales-mob/pipe2.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe2": () => (/* binding */ FilterPipe2)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe2 = class FilterPipe2 {
    transform(items, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || items.length === 0) {
                return items;
            }
            else {
                return filter ? items.filter(item => item.aliasEn.toLocaleLowerCase().indexOf(filter) != -1) : items;
            }
        }
    }
};
FilterPipe2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByAlias', pure: true })
], FilterPipe2);



/***/ }),

/***/ 1204:
/*!************************************!*\
  !*** ./src/app/sales-mob/pipe3.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe3": () => (/* binding */ FilterPipe3)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe3 = class FilterPipe3 {
    transform(items, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || items.length === 0) {
                return items;
            }
            else {
                return filter ? items.filter(item => item.item_desc.toLocaleLowerCase().indexOf(filter) != -1) : items;
            }
        }
    }
};
FilterPipe3 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByEnName', pure: true })
], FilterPipe3);



/***/ }),

/***/ 91640:
/*!*******************************************************!*\
  !*** ./src/app/sales-mob/sales-mob-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesMobPageRoutingModule": () => (/* binding */ SalesMobPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _sales_mob_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-mob.page */ 46856);




const routes = [
    {
        path: '',
        component: _sales_mob_page__WEBPACK_IMPORTED_MODULE_0__.SalesMobPage
    }
];
let SalesMobPageRoutingModule = class SalesMobPageRoutingModule {
};
SalesMobPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalesMobPageRoutingModule);



/***/ }),

/***/ 38610:
/*!***********************************************!*\
  !*** ./src/app/sales-mob/sales-mob.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesMobPageModule": () => (/* binding */ SalesMobPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ 90573);
/* harmony import */ var _pipe2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe2 */ 24670);
/* harmony import */ var _pipe3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe3 */ 1204);
/* harmony import */ var _sales_mob_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-mob-routing.module */ 91640);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _sales_mob_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-mob.page */ 46856);











let SalesMobPageModule = class SalesMobPageModule {
};
SalesMobPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_4__.ShareModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _sales_mob_routing_module__WEBPACK_IMPORTED_MODULE_3__.SalesMobPageRoutingModule
        ],
        declarations: [
            _sales_mob_page__WEBPACK_IMPORTED_MODULE_5__.SalesMobPage,
            _pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe,
            _pipe2__WEBPACK_IMPORTED_MODULE_1__.FilterPipe2,
            _pipe3__WEBPACK_IMPORTED_MODULE_2__.FilterPipe3
        ],
        exports: [
            _pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe,
            _pipe2__WEBPACK_IMPORTED_MODULE_1__.FilterPipe2,
            _pipe3__WEBPACK_IMPORTED_MODULE_2__.FilterPipe3
        ]
    })
], SalesMobPageModule);



/***/ }),

/***/ 46856:
/*!*********************************************!*\
  !*** ./src/app/sales-mob/sales-mob.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesMobPage": () => (/* binding */ SalesMobPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _sales_mob_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-mob.page.html?ngResource */ 98057);
/* harmony import */ var _sales_mob_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-mob.page.scss?ngResource */ 44262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe */ 90573);
/* harmony import */ var _pipe2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipe2 */ 24670);
/* harmony import */ var _pipe3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe3 */ 1204);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
















let SalesMobPage = class SalesMobPage {
    constructor(platform, behavApi, _location, route, renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast) {
        this.platform = platform;
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
        this.isOpen = false;
        this.isOpenNotif = false;
        this.newNotif = false;
        this.sub_account = [];
        this.sub_accountLocalSales = [];
        this.sub_accountSales = [];
        this.initialInvoices = [];
        this.items = [];
        this.itemsLocal = [];
        this.itemList = [];
        this.salesLocal = [];
        this.sales = [];
        this.notifArr = [];
        this.LogHistoryLocalArr = [];
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
        this.loadingItems = false;
        this.logHistoryArr = [];
        this.showNotif = false;
        this.device = "";
        this.segmentVal = 'first';
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "", currentCustumerStatus: 0 };
        this.route.queryParams.subscribe(params => {
            //console.log(params.payInvo,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
            if (params && params.payInvo) {
                this.status = 'initial';
                this.payInvo = JSON.parse(params.payInvo);
                //  this.payInvo.yearId = this.year.id
                if (this.payInvo.cust_id == null) {
                    this.radioVal = 1;
                    this.sub_nameNew = JSON.parse(params.sub_name);
                }
                else {
                    this.selectedAccount.sub_name = JSON.parse(params.sub_name);
                }
                this.user_info = JSON.parse(params.user_info);
                this.store_info = JSON.parse(params.store_info);
                this.itemList = JSON.parse(params.itemList);
                //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name )
                this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100).toFixed(2);
                this.prepareOffline();
                this.getAppInfoCase2();
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
            aliasEn: ""
        };
    }
    segmentChange(ev) {
        //console.log(ev)
        //console.log(this.segmentVal)
    }
    checkPlatform() {
        if (this.platform.is('desktop')) {
            this.device = 'desktop';
            //console.log('I am an desktop device!');
        }
        else if (this.platform.is('mobile')) {
            this.device = 'mobile';
            //console.log('I am an mobile device!'); 
        }
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
                }
            });
        }, 10000);
    }
    // async presentAlertConfirmSync(type , flt) {
    //   let msg:string = ''
    //   msg = 'توجد تحديثات في الإصناف , هل تريد المزامنة؟'
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     header: 'تأكيد!',
    //     mode:'ios' ,
    //     message: msg,
    //     buttons: [
    //       {
    //         text: 'إلغاء',
    //         role: 'cancel',
    //         cssClass: 'secondary',
    //         id: 'cancel-button',
    //         handler: (blah) => {
    //           flt.forEach(element => {
    //             let indx = this.notifArr.findIndex(e=>e.logRef === element.logRef)
    //             //console.log ('founded in local ' , indx)
    //             if(indx!=-1){ 
    //               element.logStatus = 0
    //             }  
    //           });
    //           this.storage.set('LogHistoryLocal',flt).then((response) => {
    //           })  
    //         }
    //       }, {
    //         text: 'موافق',
    //         id: 'confirm-button',
    //         handler: () => {
    //         if(type == 'item'){
    //           this.getStockItems('sync item',flt) 
    //         }else if(type == 'customers'){
    //           this.getSalesAccount('sync both',flt)
    //         }else if(type == 'both'){
    //           this.bothItemAndAccount('sync both',flt)
    //         } 
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present(); 
    //  }
    ngOnInit() {
        this.prepareOffline();
        if (this.status == 'new') {
            this.getAppInfo();
            // this.newLogic()
        }
        else if (this.status == 'initial') {
            this.getAppInfoCase2();
            this.radioVal2 = 0;
        }
        // this.getStockItems()
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
    presentPopoverNotif(e) {
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif.event = e;
        this.isOpenNotif = true;
    }
    didDissmis() {
        this.isOpen = false;
        //console.log('dismissOver')
        this.setFocusOnInput('qtyId');
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
    }
    bothItemAndAccount(status, flt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getStockItems();
            yield this.getSalesAccount(status, flt);
        });
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _pipe__WEBPACK_IMPORTED_MODULE_6__.FilterPipe;
        const filterPipe2 = new _pipe2__WEBPACK_IMPORTED_MODULE_7__.FilterPipe2;
        const filterPipe3 = new _pipe3__WEBPACK_IMPORTED_MODULE_8__.FilterPipe3;
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
                        this.searchResult = this.items;
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
    //    getStockItems() {
    //     if (this.offline == false) {
    //       this.api.stockItems2(1 , this.year.id).subscribe(data => {
    //         //console.log(data)
    //         let res = data
    //         this.items = res['data']
    //         this.sumStocksItems()
    //       }, (err) => {
    //         //console.log(err);
    //       },
    //         () => {
    //         }
    //       )
    //     } else {
    //       this.items = this.itemsLocal
    //       this.items.forEach(element => {
    //         element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    //       });
    //       this.searchResult = this.items
    //     }
    //   }
    // sumStocksItems(){
    //   this.api.stockItems(1 , this.year.id).subscribe(data => {
    //     //console.log(data)
    //     let res = data
    //     let arr = res['data']
    //     for (let index = 0; index < this.items.length; index++) {
    //       const element = this.items[index];
    //       let flt = arr.filter(x=>x.id == element.id)
    //       if(flt.length>0){
    //         element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
    //        // element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
    //         element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
    //       }
    //     } 
    //     this.items.forEach(element => {
    //       element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    //     });
    //      //remove 0 an - quntity
    //      // this.items = this.items.filter(x=> x.quantity > 0)
    //     this.searchResult = this.items
    //   }, (err) => {
    //     //console.log(err);
    //   },
    //     () => {
    //     }
    //   )
    // }
    afterSync(flt) {
        //push flt to local after chanch the logStatus to 1
        flt.forEach(element => {
            if (this.LogHistoryLocalArr.some(e => e.logRef === element.logRef) == false) {
                this.LogHistoryLocalArr.push(element);
            }
            else {
                //get index of it and replace it with value from flt
                let index = this.LogHistoryLocalArr.findIndex(x => x.logRef === element.logRef);
                if (index != -1) {
                    this.LogHistoryLocalArr[index] = element;
                }
            }
        });
        //set loghistory locally  
        //console.log ('finish ' ,  this.LogHistoryLocalArr)
        this.storage.set('LogHistoryLocal', this.LogHistoryLocalArr).then((response) => {
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
                            this.prepareInvo();
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
                // this.getAccountOffline()
                //this.getSalesAccount()
                this.prepareInvo();
            }
        });
        this.storage.get('LogHistoryLocal').then((response) => {
            //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
            if (response) {
                this.LogHistoryLocalArr = response;
            }
        });
        this.storage.get('initialInvoices').then((response) => {
            if (response) {
                this.initialInvoices = response;
            }
        });
        this.storage.get('LogHistoryLocal').then((response) => {
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
        });
        this.storage.get('LogHistoryLocal').then((response) => {
            //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
            if (response) {
                this.LogHistoryLocalArr = response;
            }
        });
        // this.storage.get('initialInvoices').then((response) => {
        //   this.getSalesAccount() 
        //   if (response) {
        //     this.initialInvoices = response  
        //   }
        // }); 
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
    // ne logic 
    newLogic() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            //console.log('new logic')
            yield this.getAppInfo();
            yield this.prepareInvo();
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
                //   }     element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
                // });
                this.searchResult = this.items;
            }
        });
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
    //end of new logic
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
        this.payInvo = { pay_id: undefined, pay_ref: 0, store_id: "", tot_pr: 0, pay: 0, pay_date: "", pay_time: "", user_id: "", cust_id: null, pay_method: "", discount: 0, changee: 0, sub_name: "", payComment: "", nextPay: null, yearId: this.year.id };
        this.discountPerc = 0;
        let d = new Date;
        // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss');
        this.generateRandom();
        this.payInvo.store_id = this.store_info.id;
        this.payInvo.user_id = this.user_info.id;
        this.payInvo.yearId = this.year.id;
        //console.log(this.payInvo) 
        this.itemList = [];
        this.getAccountOffline();
        // this.getSalesAccount()   
        // this.setFocusOnInput('dst')
        // this.setFocusOnInput('dstPop')
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
        else if (Input == 'qtyId') {
            this.qtyId.setFocus();
        }
        else if (Input == 'popInput') {
            this.popInput.setFocus();
        }
    }
    isFocused(event) {
        //console.log('dsdfsdf',event)
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
    getSalesAccount(status, flt) {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                //console.log(this.sub_account)
                this.getSubBalance();
                this.addSubaccountLocal();
                if (status == 'sync both') {
                    this.storage.set('sub_accountSales', this.sub_account).then((response) => {
                        if (response) {
                        }
                    });
                    this.afterSync(flt);
                }
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.MixSubaccountSalesOffline();
        }
    }
    //  prepareCustSupl(){
    //   this.sub_account.forEach(element => {
    //     if(element.cat_id == 1){ 
    //         let tot_pr = element. 
    //         let discount =  element.
    //         let totAfterDiscout =   + tot_pr - +discount 
    //         let pay =  
    //         let balance = +totAfterDiscout - +pay
    //        // this.debitors = this.debitors + +balance
    //        if(+element.debit > 0){
    //         element.debit = +element.debit + +balance
    //         }else if(+element.debit == 0 && +element.credit == 0){
    //           element.debit = +element.debit + +balance
    //         }else if(+element.credit > 0){
    //           if(balance >= element.credit){
    //             element.debit = +balance - +element.credit
    //             element.credit = 0
    //           }else if(balance  <  element.credit){
    //             element.credit = +element.credit - +balance
    //             element.debit = 0
    //           }
    //         }
    //     } else if(element.cat_id == 2){
    //       let fltPurch : Array<any> = []
    //       fltPurch = this.purchase.filter(x=>x.cust_id == element.id)
    //       //console.log('fltPurch',fltPurch)
    //       if(fltPurch.length>0){
    //         let tot_pr =  fltPurch.reduce( (acc, obj)=> { return acc + +obj.tot_pr; }, 0); 
    //         let discount =  fltPurch.reduce( (acc, obj)=> { return acc + +obj.discount; }, 0);
    //         let totAfterDiscout =   + tot_pr - +discount 
    //         let pay =  fltPurch.reduce( (acc, obj)=> { return acc + +obj.pay; }, 0);
    //         let balance = +totAfterDiscout - +pay
    //        // this.creditors = this.creditors + +balance
    //        if(+element.credit > 0){
    //         element.credit = +element.credit + +balance
    //         }else if(+element.debit == 0 && +element.credit == 0){
    //           element.credit = +element.credit + +balance
    //         }else if(+element.debit > 0){
    //           if(balance >= element.debit){
    //             element.credit = +balance - +element.debit
    //             element.debit = 0
    //           }else if(balance  <  element.debit){
    //             element.debit = +element.debit - +balance
    //             element.credit = 0
    //           }
    //         }
    //       }
    //     } 
    //   });
    // }
    //Yaw
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
            this.payInvo.cust_id = this.selectedAccount.id;
            this.payInvo.sub_name = this.selectedAccount.sub_name;
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
            this.setFocusOnInput('qtyId');
        }
        else {
            this.presentToast('خطأ في اسم الصنف ', 'danger');
            this.selectedItem.item_name = "";
            this.selectedItem.item_desc = "";
        }
    }
    qtyhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        let fl = [];
        if (this.itemList.length > 0) {
            fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name);
            if (fl.length > 0) {
                //console.log(fl)
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
        if (this.discountPerc > 0) {
            this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
        }
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
    deleteItem(index) {
        //console.log( index); 
        this.itemList.splice(index, 1);
        //console.log( this.itemList);
        this.payInvo.pay = 0;
        this.discountPerc = 0;
        this.payInvo.discount = 0;
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
        this.payInvo.tot_pr = sum - +this.payInvo.discount;
        this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
        this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
        this.payInvo.changee = this.payInvo.changee.toFixed(2);
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
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
            this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
        }
        else {
            let fl = [];
            if (this.itemList.length > 0) {
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
                this.itemList[index].tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
                // this.itemList[index].tot.toFixed(2)
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
            this.setFocusOnInput('dstPop');
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
            this.presentToast(' 12الرجاء إختيار حساب العميل', 'danger');
            return false;
        }
        else if (this.radioVal == 0 && this.selectedAccount.sub_name == "") {
            this.presentToast('1 الرجاء إختيار حساب العميل', 'danger');
            return false;
        }
        else if (this.payInvo.cust_id == null && this.radioVal == 0 && this.selectedAccount.sub_name == "") {
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
    saveIntial() {
        if (this.radioVal == 1) {
            this.payInvo.sub_name = this.sub_nameNew;
            this.payInvo.cust_id = null;
        }
        // check if the invoice is exist
        if (this.initialInvoices.length > 0) {
            this.initialInvoices = this.initialInvoices.filter(x => x['payInvo'].pay_ref != this.payInvo.pay_ref);
        }
        this.initialInvoices.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
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
        });
    }
    saveInvoInit() {
        // if(this.radioVal == 1){
        //   this.payInvo.sub_name = this.sub_nameNew
        //   this.payInvo.cust_id = null
        //  }  
        this.api.saveSalesInvoInit(this.payInvo).subscribe(data => {
            //console.log(data)
            this.saveitemListinit();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
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
        this.payInvo.sub_name = this.selectedAccount.sub_name;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        //console.log('save testing', this.payInvo, this.payInvo.sub_name)
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            // initial invoice
            if (this.radioVal2 == 0 && this.radioVal == 0 && this.status == 'new') {
                //console.log('new initial')
                this.saveInvoInit();
            }
            else if (this.radioVal2 == 0 && this.radioVal == 1 && this.status == 'new') {
                // update initialInvoices
                //console.log('save sub account initial')
                this.saveSubAccountInit();
            }
            else if (this.radioVal2 == 0 && this.status == 'initial') {
                // update initialInvoices
                //console.log('update initial')
                this.updateInitInvo();
            }
            else {
                // حساب محفوظ اوننلاين وموجود في قائمة العملاء
                if (this.radioVal == 0 && this.selectedAccount.id != null) {
                    if (this.offline == true) {
                        this.saveInvoLocal();
                    }
                    else {
                        this.saveInvo();
                    }
                }
                // حساب محفوظ محلي وموجود في قائمة العملاء
                else if (this.radioVal == 0 && this.selectedAccount.id == null && this.selectedAccount.sub_name != "") {
                    if (this.offline == true) {
                        this.saveInvoLocal();
                    }
                    else {
                        this.saveSubAccount();
                    }
                }
                //حساب جديد
                else if (this.radioVal == 1) {
                    //console.log(this.radioVal, 'saveSubAccountlocal()')
                    if (this.offline == true) {
                        //console.log('saveSubAccountlocal()')
                        this.saveSubAccountlocal();
                    }
                    else {
                        this.saveSubAccount();
                    }
                }
            }
        }
    }
    // prepareLogHistory(itemData , firstq , role){
    //   this.logHistoryArr = []
    //  let dt = new Date()
    //  let typee = "" 
    //    if(role == 'insert'){
    //      typee = "insert firstq"
    //        itemData.id = firstq.item_id
    //      this.logHistoryArr.push(
    //        {
    //          "id":this.firstq.id,
    //          "logRef":this.generateRandom(typee),
    //          "userId": this.user_info.id,
    //          "typee":typee,
    //          "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
    //          "logStatus":0,
    //          "logToken": JSON.stringify(firstq)  ,
    //          "yearId": this.year.id,
    //          "store_id" :this.store_info.id
    //        }
    //        )
    //        typee = "insert item"
    //        this.logHistoryArr.push(
    //          {
    //            "id":null,
    //            "logRef":this.generateRandom(typee),
    //            "userId":this.user_info.id,
    //            "typee":typee,
    //            "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
    //            "logStatus":0,
    //            "logToken":JSON.stringify(itemData)  ,
    //            "yearId":this.year.id,
    //            "store_id":this.store_info.id
    //          }
    //          )
    //    } else {
    //     // typee = "insert firstq"
    //      // firstq.item_id =  itemData.id 
    //      // this.logHistoryArr.push(
    //      //   {
    //      //     "id":this.firstq.id,
    //      //     "logRef":this.generateRandom(),
    //      //     "userId": this.user_info.id,
    //      //     "typee":typee,
    //      //     "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
    //      //     "logStatus":0,
    //      //     "logToken": JSON.stringify(firstq)  ,
    //      //     "yearId": this.year.id,
    //      //     "store_id" :this.store_info.id
    //      //   }
    //      //   )
    //      if(role == 'update' ){
    //        typee = "update item" 
    //      }else if(role == 'delete' ){
    //        typee = "delete item" 
    //      }
    //        this.logHistoryArr.push(
    //          {
    //            "id":null,
    //            "logRef":this.generateRandom(typee),
    //            "userId":this.user_info.id,
    //            "typee":typee,
    //            "datee": momentObj(dt).locale('en').format('YYYY-MM-DD HH:mm:ss'),
    //            "logStatus":0,
    //            "logToken":JSON.stringify(itemData)  ,
    //            "yearId":this.year.id,
    //            "store_id":this.store_info.id
    //          }
    //          )
    //        }
    //      return this.logHistoryArr
    //    }
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
                this.presentAlertConfirm();
                this.presentToast('تم الحفظ بنجاح', 'success');
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
            yield this.getStockItems();
        });
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
        if (this.selectedAccount.sub_name.length > 0 && this.selectedAccount.id == null) {
            // this.selectedAccount.sub_name = this.payInvo.sub_name
        }
        else {
            //console.log('slwcted from drop' ) 
            this.selectedAccount.sub_name = this.sub_nameNew;
            this.payInvo.sub_name = this.selectedAccount.sub_name;
        }
        this.selectedAccount.id = null;
        this.selectedAccount.ac_id = 1;
        this.selectedAccount.sub_type = "debit";
        this.selectedAccount.sub_code = null;
        this.selectedAccount.sub_balance = "0";
        this.selectedAccount.cat_id = 1;
        this.selectedAccount.cat_name = 'العملاء';
        this.selectedAccount.store_id = this.store_info.id;
    }
    saveSubAccount() {
        //console.log('crea accoun')
        this.preparenewaccount();
        this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.payInvo.cust_id = data['message'];
                //حالة الحساب موجود محلي والحفظ انلاين يسحب من المحلي ويضاف سsalesaccount   
                if (this.radioVal == 0 && this.selectedAccount.id == null && this.offline == false) {
                    this.sub_accountLocalSales = this.sub_accountLocalSales.filter(x => x.sub_name != this.selectedAccount.sub_name);
                    //console.log('imhereeeeeeeeeeeeeeeeee')
                    this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
                        //console.log('resoponse set', this.sub_accountLocalSales)
                        this.selectedAccount.id = this.payInvo.cust_id;
                        this.sub_accountSales.push(this.selectedAccount);
                        this.storage.set('sub_accountSales', this.sub_accountSales).then((response) => {
                        });
                    });
                }
                this.selectedAccount.id = data['message'];
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('insert customer'),
                    "userId": this.user_info.id,
                    "typee": 'insert customer',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                    "logStatus": 0,
                    "logToken": JSON.stringify(this.selectedAccount),
                    "yearId": this.year.id,
                    "store_id": this.store_info.id
                });
                this.saveInvo();
            }
            else {
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    saveSubAccountInit() {
        this.preparenewaccount();
        this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.payInvo.cust_id = data['message'];
                //console.log('crea accoun' ,  data['message'] )
                this.saveInvoInit();
            }
            else {
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
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
        this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
            //console.log('resoponse set', this.sub_accountLocalSales)
            // this.payInvo.cust_id =  data['message']
            this.saveInvoLocal();
        });
    }
    saveInvo() {
        this.api.saveSalesInvo(this.payInvo).subscribe(data => {
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
            if (this.initialInvoices.length > 0) {
                this.initialInvoices = this.initialInvoices.filter(x => x['payInvo'].pay_ref != this.payInvo.pay_ref);
                this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
                });
            }
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveSalesitemList(this.itemList).subscribe(data => {
                //console.log(data) 
                this.recalSubBalance();
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
                this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                //console.log(' case ffff ' ,this.sales)
                this.sales.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                let arr = [];
                arr.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                this.logHistoryArr.push({
                    "id": null,
                    "logRef": this.generateRandom2('insert sales'),
                    "userId": this.user_info.id,
                    "typee": 'insert sales',
                    "datee": moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                    "logStatus": 0,
                    "logToken": JSON.stringify(arr[0]),
                    "yearId": this.year.id,
                    "store_id": this.store_info.id
                });
                // this.storage.set('sales', this.sales).then((response) => {
                // //console.log('sales', response) 
                // })
                if (this.status == 'toFinal') {
                    this.deleteSalesInvoInit();
                }
                // //console.log(this.printArr)
                // if(this.initialInvoices.length > 0){ 
                //   this.initialInvoices = this.initialInvoices.filter(x=>x['payInvo'].pay_ref != this.payInvo.pay_ref) 
                //   this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
                //     //console.log(this.initialInvoices , 'initialInvoices')
                //   });
                // }
                this.performSync();
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    generateRandom2(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    deleteInitInvo() {
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
SalesMobPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_9__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController }
];
SalesMobPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ["dst",] }],
    dstPop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['dstPop',] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['qtyId',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['popInput',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['popover',] }],
    popoverNotif: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['popoverNotif',] }]
};
SalesMobPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-sales-mob',
        template: _sales_mob_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sales_mob_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalesMobPage);



/***/ }),

/***/ 44262:
/*!**********************************************************!*\
  !*** ./src/app/sales-mob/sales-mob.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.bnone {\n  border: none;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLW1vYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNJLGtCQUFBO0FBRVI7O0FBQUk7RUFBTyxtQkFBQTtBQUlYOztBQUZJO0VBQU0sa0JBQUE7QUFNVjs7QUFMSTtFQUNJLGdCQUFBO0FBUVI7O0FBTkE7RUFDRSxZQUFBO0FBU0Y7O0FBTkM7RUFDQyw4QkFBQTtBQVNGOztBQVBDO0VBQ0MsNEJBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSx5QkFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFURTtFQUNLLGtCQUFBO0VBQ0gsV0FBQTtFQUNBLFlBQUE7QUFZSjs7QUFURTtFQUNFLHlCQUFBO0FBWUo7O0FBVkU7RUFBUSx5QkFBQTtFQUEwQixrQkFBQTtFQUFtQixZQUFBO0VBQWMsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixZQUFBO0FBbUJ2RyIsImZpbGUiOiJzYWxlcy1tb2IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAgIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cbi5ibm9uZXtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4gLnJlZHtcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlcikgXG4gfVxuIC5kYXJrb3tcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKVxuIH1cbmlvbi1wb3BvdmVye1xuICAtLW9mZnNldC15IDogLTMwcHhcbn1cbi5jdXN0SW5we1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMC41cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIFxuICAudGFibGV7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTJweDtcbiAgfVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgfVxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9XG4gICAgICAgIl19 */";

/***/ }),

/***/ 98057:
/*!**********************************************************!*\
  !*** ./src/app/sales-mob/sales-mob.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>فاتورة مبيعات</ion-title>\n    <ion-buttons  slot=\"end\">  \n      <div class=\"poRel\">\n        <div class=\"posAb noti\">\n         <ion-label>\n           <ion-text *ngIf=\"showNotif == true && notifArr.length> 0\">{{notifArr.length}}</ion-text> \n         </ion-label> \n       </div>\n       <div (click)=\"presentPopoverNotif($event)\">\n         <ion-icon name=\"notifications-outline\"  class=\"dark\"  [ngClass]=\"{'warn':showNotif == true && notifArr.length> 0 , 'dark': showNotif == false }\"></ion-icon> \n       </div>\n     </div> \n     <ion-button fill=\"clear\" (click)=\"presentPopoverNotif($event)\">\n      <ion-label><ion-text color=\"dark\" >الإشعارات</ion-text></ion-label>  \n     </ion-button>\n\n    <ion-button fill=\"clear\" class=\"ion-margin\"  (click)=\"changeMode()\"  > \n      <ion-label><ion-icon name=\"wifi-outline\" [color]=\"color\" style=\"font-size:20px\"></ion-icon></ion-label> \n      <ion-label><ion-text color=\"dark\"  *ngIf=\"color == 'primary'\">متصل</ion-text></ion-label>   \n      <ion-label><ion-text  color=\"dark\" *ngIf=\"color == 'dark'\">غير متصل</ion-text></ion-label>\n    </ion-button> \n    </ion-buttons> \n  <ion-popover  #popoverNotif [isOpen]=\"isOpenNotif\" (didDismiss)=\"didDissmisNotif()\">\n   <ng-template>\n     <ion-header>\n       <ion-toolbar dir=\"rtl\" class=\"ion-text-center\">\n         الإشعارات\n       </ion-toolbar>\n     </ion-header>\n     <ion-content  dir=\"rtl\">  \n       <ion-list class=\"ion-text-center\"  *ngIf=\"LogHistoryLocalArr.length>0\">\n        <ion-item *ngFor=\"let log of LogHistoryLocalArr\" >\n        <ion-grid >\n          <ion-row>\n            <ion-col size=\"9\"> \n                {{log.desc}}    \n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-text color = \"primary\">{{log.datee | dateAgo}}</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item> \n       </ion-list> \n     </ion-content>\n   </ng-template>\n </ion-popover>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content dir=\"rtl\">\n  <ion-segment [(ngModel)]=\"segmentVal\" (ionChange)=\"segmentChange($event)\" >\n    <ion-segment-button value=\"first\"> \n      <ion-label>تهيئة الفاتورة</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"second\"> \n      <ion-label>إضافة الأصناف</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"third\"> \n      <ion-label> الحسابات  </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid  *ngIf=\"user_info && store_info && segmentVal == 'first'\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card  class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row dir=\"rtl\">\n              <ion-col size=\"12\">\n                <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row>\n                      <ion-col class=\"ion-no-padding ion-no-margin\">\n                        <ion-item lines=\"none\" >\n                          <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                          <ion-label>قائمة الحسابات </ion-label> \n                        </ion-item>\n                      </ion-col>\n                      <ion-col class=\"ion-no-padding ion-no-margin\">\n                        <ion-item lines=\"none\" >\n                          <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                          <ion-label>حساب جديد</ion-label> \n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n                </ion-radio-group>\n                  <ion-item class=\"custInput\" *ngIf=\"radioVal == 0 \">\n                    <input  *ngIf=\"sub_account\" class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsSales\" id=\"accountSales\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                    <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accountsSales\" style=\"height: auto;max-height: 20px;\">\n                      <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                    </datalist>\n                    <ion-label *ngIf=\"!sub_account\">\n                      <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                     </ion-label>\n                    <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('account')\">\n                      <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                    </ion-button>   \n                  </ion-item>    \n                  <ion-item class=\"custInput\" *ngIf=\"radioVal == 1\"> \n                     <ion-input [(ngModel)]=\"sub_nameNew\" ></ion-input>\n                  </ion-item>    \n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-item lines=\"none\" >\n                  <ion-label>\n                    نوع الفاتورة\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"custInput\"> \n                  <ion-radio-group [(ngModel)]=\"radioVal2\"  (ionChange)=\"radioChange2($event ,'from')\" >\n                    <ion-grid class=\"ion-no-padding ion-no-margin\">\n                      <ion-row>\n                        <ion-col class=\"ion-no-padding ion-no-margin\">\n                          <ion-item lines=\"none\" >\n                            <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                            <ion-label> مبدئية </ion-label> \n                          </ion-item>\n                        </ion-col>\n                        <ion-col class=\"ion-no-padding ion-no-margin\">\n                          <ion-item lines=\"none\" >\n                            <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                            <ion-label>  نهائية </ion-label> \n                          </ion-item>\n                        </ion-col> \n                      </ion-row>\n                    </ion-grid> \n                  </ion-radio-group> \n                </ion-item> \n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-item lines=\"none\" >\n                  <ion-label>\n                    التاريخ\n                  </ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"payInvo.pay_date\"  />\n                  <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                </ion-item>\n              </ion-col>\n\n              <ion-col size=\"12\" class=\"ion-text-start\">\n                <ion-item lines=\"none\" >\n                  <ion-label>\n                    تعليق\n                  </ion-label>\n                </ion-item>\n                <ion-item class=\"custInput\"> \n                  <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n                 </ion-item>   \n              </ion-col>\n            </ion-row>  \n          \n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class=\"ion-margin-top\"  *ngIf=\"user_info && store_info && segmentVal == 'second'\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"8\" *ngIf=\"loadingItems == true\">  \n                      <ion-item class=\"custInput\">\n                        <ion-input [disabled]=\"true\"></ion-input>\n                        <ion-spinner></ion-spinner>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"8\" *ngIf=\"loadingItems == false\"> \n                      <ion-label  class=\"ion-padding\">\n                        <strong>الصنف</strong>\n                        <ion-text *ngIf=\"searchLang == 0\">(عربي)</ion-text>\n                        <ion-text *ngIf=\"searchLang == 1\">(ENG)</ion-text>\n                      </ion-label>\n                      <ion-label style=\"float:inline-end\" *ngIf=\"items.length>0\">\n                        <ion-text  >المخزون: </ion-text>  <ion-text color=\"danger\" >{{selectedItem.availQty}} </ion-text>\n                       </ion-label>\n\n                      <!-- popOverSearch  -->\n                      <ion-item class=\"custInput\">\n                        <ion-input  #dstPop (click)=\"presentPopover($event)\"   [(ngModel)] =\"selectedItem.item_name\"></ion-input>\n                        <ion-button fill=\"clear\" (click)=\"refresh('item')\" slot=\"end\">\n                          <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                        </ion-button>\n                      </ion-item>\n                      <ion-popover  #popover [isOpen]=\"isOpen\" (didDismiss)=\"didDissmis()\">\n                        <ng-template>\n                          <ion-header>\n                            <ion-toolbar dir=\"rtl\">\n                              <ion-item>\n                                <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input>\n                                <ion-button fill=\"clear\" (click)=\"clear()\" slot=\"end\">\n                                  <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                                </ion-button>\n                                <!-- <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input> -->\n                               </ion-item>\n                            </ion-toolbar>\n                          </ion-header>\n                          <ion-content class=\"ion-padding\" dir=\"rtl\"> \n                            <!-- spinner -->\n                            <ion-list class=\"ion-text-center\"  *ngIf=\"searchResult.length==0 && searchTerm =='' \">\n                              <ion-label>\n                                <ion-spinner name=\"lines-sharp\"></ion-spinner>\n                              </ion-label> \n                            </ion-list>\n                            \n                            <!-- <ion-list *ngIf=\"finalResult.length>0\"> \n                              <ion-item button *ngFor=\"let item of finalResult\"  >{{item.item_name}}</ion-item>\n                            </ion-list> -->\n                             <!-- <ion-list *ngIf=\"searchResult.length>0\" class=\"hide\"> \n                              <ion-item button *ngFor=\"let item1 of searchResult | filter:searchTerm\"  >{{item1.item_name}}</ion-item>\n                            </ion-list>\n                            <ion-list *ngIf=\"aliasResult.length>0\" class=\"hide\"> \n                              <ion-item button *ngFor=\"let item2 of aliasResult | filter:aliasTerm\"  >{{item2.aliasEn}}</ion-item>\n                            </ion-list> -->\n                             <ion-list *ngIf=\"searchResult.length>0\"> \n                              <ion-item button *ngFor=\"let item of searchResult\" (click)=\"selectFromPop(item)\"    class=\"darko\" [ngClass]=\"{'red':item.quantity == 0 , 'darko':item.quantity > 0}\">\n                                {{item.item_name}} \n                              </ion-item>\n                            </ion-list> \n                          </ion-content>\n                        </ng-template>\n                      </ion-popover>\n                           <!-- arabic search -->\n                         <!-- <ion-item *ngIf=\"searchLang == 0 \" class=\"custInput\"  > \n                          <input #dst *ngIf=\"items.length>0\" class=\"bnone\"  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\"  >\n                          <datalist *ngIf=\"items.length>0\"  id=\"browsers\" style=\"border: none;height: auto;max-height: 20px;color: rgb(66, 3, 3)0000 ;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\" ></option>\n                          </datalist>\n                          <ion-label *ngIf=\"items.length==0\">\n                            <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                           </ion-label>\n                           \n                          <ion-button  *ngIf=\"items.length==0\" fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('items')\">\n                            <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                          </ion-button> \n                         </ion-item> -->\n                         <!-- engsearch -->\n                         <!-- <ion-item *ngIf=\"searchLang == 1\" class=\"custInput\"  > \n                          <input #dst *ngIf=\"items.length>0\" class=\"bnone\"  list=\"browsers556\" id=\"browser556\" [(ngModel)]=\"selectedItem.item_desc\"  (change)=\"pickDetail($event)\"  >\n                          <datalist *ngIf=\"items.length>0\"  id=\"browsers556\" style=\"border: none;height: auto;max-height: 20px;color: rgb(66, 3, 3)0000 ;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_desc\" ></option>\n                          </datalist>\n                          <ion-label *ngIf=\"items.length==0\">\n                            <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                           </ion-label>\n                           \n                          <ion-button  *ngIf=\"items.length==0\" fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('items')\">\n                            <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                          </ion-button> \n                         </ion-item> -->\n  \n                         <h6><ion-label *ngIf=\"items.length>0\">\n                          <ion-text  >المخزون: </ion-text>  <ion-text color=\"danger\" >{{selectedItem.availQty}} </ion-text>\n                         </ion-label></h6>  \n                    </ion-col>\n                    \n                    \n                    <ion-col size=\"4\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\" >\n                        <ion-input   #qtyId  (keyup.enter)=\"addTolist()\" (ionFocus)=\"isFocused($event)\"  [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event)\" select-all ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input (keyup.enter)=\"addTolist()\" [(ngModel)]=\"selectedItem.pay_price\" (ionChange)=\"pricehange($event)\"  ></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [readonly]=\"true\" [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n           \n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <!-- <th>no</th> -->\n                  <th>الصنف</th>\n                  <th>الكمية</th>\n                  <th>سعر الوحده</th>\n                  <!-- <th>المجموع</th>  -->\n                  <th>حذف</th> \n                 </tr>\n                 <tr *ngFor=\"let item of itemList ; let i = index\"  (dblclick)=\"qtyClick(i)\">\n                  <!-- <td>{{+i}}</td> -->\n                  <td>{{item.item_name}}</td>\n                  <td >\n                     <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \n                     <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                     </ion-item>\n                  </td>\n                  <td>\n                    <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text> \n                     <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.pay_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                     </ion-item>\n                  </td>\n  \n                  <!-- <td>{{+item.tot}}</td> -->\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>\n                 </tr>\n                 \n               \n               </table> \n            </ion-card>\n            </ion-col>\n          </ion-row> \n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n   \n  <ion-grid *ngIf=\"user_info && store_info && segmentVal == 'third'\">\n    <ion-col size=\"3\" class=\"ion-no-padding\">\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [(ngModel)]=\"payInvo.tot_pr\" [readonly]=\"true\" ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\">\n                <strong>الخصم %</strong> \n              </ion-label>\n              <ion-label class=\"ion-padding ion-margin-start\">\n                <strong>الخصم</strong> \n              </ion-label> \n              <ion-item class=\"custInput\"> \n                <ion-input  [(ngModel)]=\"discountPerc\" (ionChange)=\"discountPerChange($event)\"></ion-input>\n                <ion-input class=\"custInp\" [(ngModel)]=\"payInvo.discount\" tabindex=\"600\"  (ionBlur)=\"discountChange($event)\"></ion-input> \n              </ion-item>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong> المدفوع نقدا</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [(ngModel)]=\"payInvo.pay\" (ionChange)=\"payChange($event)\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong>المتبقي</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input  [(ngModel)]=\"payInvo.changee\" [readonly]=\"true\"></ion-input>\n              </ion-item>\n            </ion-col> \n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong>تاريخ السداد</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-item lines=\"none\">\n                  <input style=\"width:100%\"  type=\"date\"  id=\"startingDate5\" name=\"startingDate5\" [(ngModel)]=\"payInvo.nextPay\"  />\n                </ion-item>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          \n        </ion-grid> \n      </ion-card>\n    </ion-col>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-grid dir=\"rtl\" *ngIf=\"user_info && store_info \">\n    <ion-row>\n      <ion-col size=\"6\" >\n        <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"save()\" >\n          <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\"  *ngIf=\"status == 'initial' || status == 'toFinal'\">\n        <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\"  (click)=\"presentAlertConfirm('initial')\" >\n          <ion-label class=\"ion-text-center\"> حــذف</ion-label>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-label class=\"ion-padding\"> <strong>صافي المبلغ</strong> </ion-label><br>\n        <ion-label class=\"ion-padding\"> <strong> {{payInvo.changee}}  </strong> </ion-label>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_sales-mob_sales-mob_module_ts.js.map
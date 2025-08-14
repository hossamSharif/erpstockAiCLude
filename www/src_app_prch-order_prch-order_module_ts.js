"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_prch-order_prch-order_module_ts"],{

/***/ 18731:
/*!*********************************************************!*\
  !*** ./src/app/prch-order/prch-order-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrchOrderPageRoutingModule": () => (/* binding */ PrchOrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _prch_order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prch-order.page */ 66515);




const routes = [
    {
        path: '',
        component: _prch_order_page__WEBPACK_IMPORTED_MODULE_0__.PrchOrderPage
    }
];
let PrchOrderPageRoutingModule = class PrchOrderPageRoutingModule {
};
PrchOrderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrchOrderPageRoutingModule);



/***/ }),

/***/ 36435:
/*!*************************************************!*\
  !*** ./src/app/prch-order/prch-order.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrchOrderPageModule": () => (/* binding */ PrchOrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _prch_order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prch-order-routing.module */ 18731);
/* harmony import */ var _prch_order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prch-order.page */ 66515);







let PrchOrderPageModule = class PrchOrderPageModule {
};
PrchOrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prch_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrchOrderPageRoutingModule
        ],
        declarations: [_prch_order_page__WEBPACK_IMPORTED_MODULE_1__.PrchOrderPage]
    })
], PrchOrderPageModule);



/***/ }),

/***/ 66515:
/*!***********************************************!*\
  !*** ./src/app/prch-order/prch-order.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrchOrderPage": () => (/* binding */ PrchOrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _prch_order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prch-order.page.html?ngResource */ 96687);
/* harmony import */ var _prch_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prch-order.page.scss?ngResource */ 69913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item-modal/item-modal.page */ 3671);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sales/pipe */ 79208);












let PrchOrderPage = class PrchOrderPage {
    // اي طريقة دفع ح يكون في حساب مقابل ليها مثلا الكاش ح يتورد في حساب الخزينة وبنكك في حساب بنك الخرطوم اما الشيك فحيكون بالاجل و ح ينزل في  سجل الشيكات ويتحول الي حساب المعين سواء كان اتورد في حساب بنكي او اتسحب كاش واتورد فيحساب الخزينة 
    constructor(renderer, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast) {
        this.renderer = renderer;
        this.modalController = modalController;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.sub_account = [];
        this.sub_accountLocalPurch = [];
        this.items = [];
        this.isOpen = false;
        this.sub_accountPurch = [];
        this.color = 'dark';
        this.itemsLocal = [];
        this.itemList = [];
        this.purchLocal = [];
        this.purchase = [];
        this.randomsNumber = [];
        this.sub_nameNew = "";
        this.discountPerc = 0;
        this.radioVal = 0;
        this.radioVal3 = 0;
        this.printMode = false;
        this.offline = false;
        this.printArr = [];
        this.showMe = null;
        this.getItemLoader = false;
        this.searchLang = 0;
        this.searchTerm = "";
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        this.printArr.push({
            'payInvo': "",
            'itemList': "",
            'selectedAccount': "",
            'sub_nameNew': ""
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
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: 'هل تريد طباعة فاتورة ؟ ',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah'); 
                            this.prepareInvo();
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            if (this.radioVal3 == 0) {
                                this.presentModal(this.printArr, 'perchOrderAr');
                            }
                            else if (this.radioVal3 == 1) {
                                this.presentModal(this.printArr, 'perchOrderEn');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    priceChangeAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: 'هل تريد تعديل اسعار البيع والشراء',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah'); 
                            this.addTolist();
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            this.updateItemDetail();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateItemDetail() {
        this.presentLoadingWithOptions('جاري تعديل البيانات ...');
        this.api.updateItem(this.selectedItem).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
                this.getStockItemsAfterUpdate();
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
    Print(elem) {
        this.printMode = true;
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write('<html><head>');
        mywindow.document.write('<style type="text/css">');
        mywindow.document.write('.flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;}.ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }');
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
    ngOnInit() {
        this.prepareOffline();
        this.getAppInfo();
        // this.getItems()
        this.getStockItems();
    }
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
                this.getSalesAccount();
                this.prepareInvo();
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
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)
                this.items = this.itemsLocal;
            }
        });
        this.storage.get('purchLocal').then((response) => {
            if (response) {
                this.purchLocal = response;
                //console.log('purchLocal',this.purchLocal) 
            }
        });
        this.storage.get('purchase').then((response) => {
            if (response) {
                this.purchase = response;
                //console.log(this.purchase)  
            }
        });
        this.storage.get('sub_accountLocalPurch').then((response) => {
            if (response) {
                this.sub_accountLocalPurch = response;
                //console.log(this.sub_accountLocalPurch)  
            }
        });
        //Yaw
        this.storage.get('sub_accountPurch').then((response) => {
            if (response) {
                this.sub_accountPurch = response;
                //console.log(this.sub_accountPurch)  
            }
        });
    }
    radioChange(ev) {
        //console.log(ev.target.value) 
    }
    radio3Change(ev) {
        //console.log(ev.target.value) 
    }
    presentPopover(e) {
        //console.log('preent me', e)
        this.popover2.event = e;
        this.isOpen = true;
        this.clear();
        this.searchResult = this.items;
        setTimeout(() => {
            this.setFocusOnInput('popInput2');
        }, 2000);
    }
    didDissmis() {
        this.isOpen = false;
        //console.log('dismissOver')
        this.setFocusOnInput('qtyIdP6');
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_7__.FilterPipe;
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
    prepareInvo() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", phone: "", address: "" };
        this.sub_nameNew = "";
        this.radioVal = 0;
        this.payInvo = { pay_id: undefined, pay_ref: 0, store_id: "", tot_pr: 0, pay: 0, pay_date: "", pay_time: "", user_id: "", cust_id: null, pay_method: "", discount: 0, changee: 0, sub_name: "", payComment: "", nextPay: null };
        this.discountPerc = 0;
        let d = new Date;
        // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss');
        this.generateRandom();
        this.payInvo.store_id = this.store_info.id;
        this.payInvo.user_id = this.user_info.id;
        //console.log( this.payInvo) 
        this.itemList = [];
        this.getSalesAccount();
        // this.setFocusOnInput('dstPop7')
    }
    setFocusOnInput(Input) {
        //console.log('setFocusOnInput')
        if (Input == 'dstP') {
            this.nameField.nativeElement.focus();
        }
        else if (Input == 'dstPop7') {
            this.dstPop7.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.items;
            setTimeout(() => {
                this.popInput2.setFocus();
            }, 1500);
        }
        else if (Input == 'qtyIdP6') {
            this.qtyIdP6.setFocus();
        }
        else if (Input == 'popInput2') {
            this.popInput2.setFocus();
        }
    }
    getStockItems(pickName) {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                if (this.offline == false) {
                    this.api.stockItems(1, this.year.id).subscribe(data => {
                        //console.log(data)
                        let res = data;
                        this.items = res['data'];
                        this.items.forEach(element => {
                            element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
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
                else {
                    this.items = this.itemsLocal;
                    this.items.forEach(element => {
                        element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                    });
                    this.searchResult = this.items;
                }
            }
        });
    }
    // sumStockItems(pickName?) {
    //   if (this.offline == false) {
    //     this.api.stockItems(1).subscribe(data => {
    //       //console.log(data)
    //       let res = data
    //       let arr = res['data']
    //       for (let index = 0; index < this.items.length; index++) {
    //         const element = this.items[index];
    //         let flt = arr.filter(x=>x.id == element.id)
    //         if(flt.length>0){
    //           element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
    //         //  element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
    //           element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
    //         }
    //       } 
    //       this.items.forEach(element => {
    //         element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    //       });
    //       this.searchResult = this.items
    //       if(pickName){
    //         this.pickDetail(pickName , 'afterSave') 
    //       }
    //     }, (err) => {
    //       //console.log(err);
    //     },
    //       () => {
    //       }
    //     )
    //   } else {
    //     this.items = this.itemsLocal
    //     this.items.forEach(element => {
    //       element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    //     });
    //     this.searchResult = this.items
    //   }
    // }
    getStockItemsAfterUpdate() {
        let fl = [];
        if (this.searchLang == 1) {
            fl = this.items.filter(x => x.item_desc == this.selectedItem.item_desc);
            //console.log('hyrr',fl);
        }
        else {
            fl = this.items.filter(x => x.item_name == this.selectedItem.item_name);
            //console.log(fl);
        }
        let qt = +this.selectedItem.qty;
        let perch = +this.selectedItem.perch_price;
        let pay = +this.selectedItem.pay_price;
        //console.log(fl);
        this.selectedItem = {
            id: fl[0]['id'],
            dateCreated: fl[0]['dateCreated'],
            pay_ref: this.payInvo.pay_ref,
            item_desc: fl[0]['item_desc'],
            item_name: fl[0]['item_name'],
            item_unit: fl[0]['item_unit'],
            parcode: fl[0]['parcode'],
            pay_price: pay,
            perch_price: perch,
            qty: qt,
            tot: fl[0]['perch_price'],
            aliasEn: fl[0]['aliasEn']
        };
        this.addTolist();
        if (this.offline == false) {
            this.getItemLoader = true;
            this.api.stockItems(1, this.year.id).subscribe(data => {
                //console.log(data)
                let res = data;
                this.items = res['data'];
                this.sumStockItemsAfterUpdate();
            }, (err) => {
                //console.log(err);
                this.getItemLoader = false;
            }, () => {
            });
        }
        else {
            this.items = this.itemsLocal;
            this.items.forEach(element => {
                element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
            });
            this.searchResult = this.items;
        }
    }
    sumStockItemsAfterUpdate() {
        if (this.offline == false) {
            this.getItemLoader = true;
            this.api.stockItems(1, this.year.id).subscribe(data => {
                //console.log(data)
                let res = data;
                let arr = res['data'];
                for (let index = 0; index < this.items.length; index++) {
                    const element = this.items[index];
                    let flt = arr.filter(x => x.id == element.id);
                    if (flt.length > 0) {
                        element.perchQuantity = +element.perchQuantity + +flt[0].perchQuantity;
                        // element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
                        element.salesQuantity = +element.salesQuantity + +flt[0].salesQuantity;
                    }
                }
                this.items.forEach(element => {
                    element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                });
                this.searchResult = this.items;
                //console.log('searchResult after Update',this.searchResult)
                this.getItemLoader = false;
                this.storage.set('itemsLocal', this.items).then((response) => {
                    //console.log('resoponse set', response)
                    this.storage.get('itemsLocal').then((response2) => {
                        if (response) {
                            this.itemsLocal = response2;
                            this.searchResult = [];
                            this.items = this.itemsLocal;
                            this.searchResult = this.items;
                            //   this.loadingController.dismiss() 
                        }
                    });
                });
            }, (err) => {
                //console.log(err);
                this.getItemLoader = false;
            }, () => {
            });
        }
        else {
            this.items = this.itemsLocal;
            this.items.forEach(element => {
                element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
            });
            this.searchResult = this.items;
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
        if (+this.itemList[i].quantity > 0 && +this.itemList[i].perch_price > 0) {
            this.itemList[i].tot = +this.itemList[i].quantity * +this.itemList[i].perch_price;
            this.discountPerc = 0;
            this.payInvo.discount = 0;
            this.hideMe(i);
            this.getTotal();
        }
        else {
            this.presentToast("خطأ في الإدخال ", "danger");
        }
    }
    ionViewDidEnter() {
    }
    presentModal2(id, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // if (id !='null' && status == 'edit') {
            //    let fl= this.items.filter(x=>x.id == id)
            // //console.log(fl);
            // this.selectedItem = {
            //   id:fl[0]['id'],
            //   item_desc:fl[0]['item_desc'],
            //   model:fl[0]['model'],
            //   item_name:fl[0]['item_name'],
            //   min_qty:fl[0]['min_qty'],
            //   part_no:fl[0]['part_no'],
            //   brand:fl[0]['brand'],
            //   item_unit:fl[0]['item_unit'],
            //   item_parcode:fl[0]['item_parcode'],
            //   pay_price:fl[0]['pay_price'],
            //   perch_price:fl[0]['perch_price']
            // }
            // }
            const modal = yield this.modalController.create({
                component: _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_6__.ItemModalPage,
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
    getItems(pickName) {
        if (this.offline == false) {
            this.api.getItems().subscribe(data => {
                //console.log(data)
                let res = data;
                this.items = res['data'];
                this.searchResult = this.items;
                if (pickName) {
                    this.pickDetail(pickName, 'afterSave');
                }
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.items = this.itemsLocal;
            this.searchResult = this.items;
        }
    }
    getSalesAccount() {
        if (this.offline == false) {
            this.api.getPerchAccounts(this.store_info.id, this.year.id).subscribe(data => {
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
            if (this.sub_accountLocalPurch) {
                for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
                    const element = this.sub_accountLocalPurch[i];
                    this.sub_account.push(element);
                }
            }
        }
        else {
            if (this.sub_accountLocalPurch) {
                this.sub_account = this.sub_accountLocalPurch;
            }
        }
    }
    MixSubaccountSalesOffline() {
        this.sub_account = [];
        if (this.sub_accountLocalPurch) {
            for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
                const element = this.sub_accountLocalPurch[i];
                this.sub_account.push(element);
            }
        }
        if (this.sub_accountPurch) {
            for (let i = 0; i < this.sub_accountPurch.length; i++) {
                const element = this.sub_accountPurch[i];
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
            qty: 0,
            tot: fl[0]['perch_price'],
            aliasEn: fl[0]['aliasEn']
        };
        //console.log( this.selectedItem);
        this.setFocusOnInput('qtyIdP6');
    }
    qtyhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
    }
    payPricehange(ev) {
        if ((+this.selectedItem.perch_price >= +this.selectedItem.pay_price) && (+this.selectedItem.perch_price > 0 && +this.selectedItem.pay_price > 0)) {
            this.presentToast('سعر الشراء اعلي من سعر البيع ', 'warning');
        }
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
    }
    perchPricehange(ev) {
        if ((this.selectedItem.perch_price >= this.selectedItem.pay_price) && this.selectedItem.perch_price > 0 && this.selectedItem.pay_price > 0) {
            this.presentToast('سعر الشراء اعلي من سعر البيع ', 'warning');
        }
        //console.log(ev);
        this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
    }
    payChange(ev) {
        //console.log(ev); 
        this.payInvo.changee = +(this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value;
    }
    discountChange(ev) {
        //console.log('discountChange' ,ev); 
        this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100);
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
        this.payInvo.discount = 0;
        this.getTotal();
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
    getTotal() {
        let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
        //console.log('sum', sum)
        this.payInvo.tot_pr = sum - +this.payInvo.discount;
        this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
        this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
        this.payInvo.changee = this.payInvo.changee.toFixed(2);
    }
    chechPrice(cases) {
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
            this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
        }
        else {
            if (cases == 'check') {
                if (+this.selectedItem.perch_price >= +this.selectedItem.pay_price) {
                    this.priceChangeAlertConfirm();
                }
                else {
                    this.addTolist();
                }
            }
            else if (cases == 'uncheck') {
                ///update item => getiTEmstock and sysnc=> reselectItem => addtolist\
                this.updateItemDetail();
            }
        }
    }
    // 1386.00  =>  1490.00
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
                this.itemList[index].tot = (+this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
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
                aliasEn: ""
            };
            this.getTotal();
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
        else if (this.payInvo.cust_id == null && this.radioVal == 0 && this.selectedAccount.sub_name == "") {
            this.presentToast('الرجاء إختيار حساب العميل', 'danger');
            return false;
        }
        else if (+this.payInvo.cust_id == 0 && this.radioVal == 0) {
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
    save() {
        let d = this.payInvo.pay_date;
        this.payInvo.sub_name = this.selectedAccount.sub_name;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        //console.log('save testing',this.payInvo ,  this.payInvo.sub_name)
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            // حساب محفوظ اوننلاين وموجود في قائمة العملاء
            if (this.radioVal == 0 && this.selectedAccount.id != null) {
                if (this.offline == true) {
                    this.presentToast('لا يوجد اتصال بالإنترنت', "danger");
                }
                else {
                    this.saveInvo();
                }
            }
            // حساب محفوظ محلي وموجود في قائمة العملاء
            else if (this.radioVal == 0 && this.selectedAccount.id == null && this.selectedAccount.sub_name != "") {
                if (this.offline == true) {
                    this.presentToast('لا يوجد اتصال بالإنترنت', "danger");
                }
                else {
                    this.saveSubAccount();
                }
            }
            //حساب جديد
            else if (this.radioVal == 1) {
                //console.log(this.radioVal,'saveSubAccountlocal()')
                if (this.offline == true) {
                    //console.log('saveSubAccountlocal()')
                    this.presentToast('لا يوجد اتصال بالإنترنت', "danger");
                }
                else {
                    this.saveSubAccount();
                }
            }
        }
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
                address: fl[0]['address']
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
        this.selectedAccount.ac_id = 2;
        this.selectedAccount.sub_type = "credit";
        this.selectedAccount.sub_code = null;
        this.selectedAccount.sub_balance = "0";
        this.selectedAccount.cat_id = 2;
        this.selectedAccount.cat_name = 'الموردين';
        this.selectedAccount.store_id = this.store_info.id;
        //console.log('preparenewaccount' , this.selectedAccount)
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
                    this.sub_accountLocalPurch = this.sub_accountLocalPurch.filter(x => x.sub_name != this.selectedAccount.sub_name);
                    //console.log('imhereeeeeeeeeeeeeeeeee')
                    this.storage.set('sub_accountLocalPurch', this.sub_accountLocalPurch).then((response) => {
                        //console.log('resoponse set', this.sub_accountLocalPurch)
                        this.selectedAccount.id = this.payInvo.cust_id;
                        this.sub_accountPurch.push(this.selectedAccount);
                        this.storage.set('sub_accountPurch', this.sub_accountPurch).then((response) => {
                        });
                    });
                }
                this.saveInvo();
            }
            else {
                this.presentToast('لم يتم انشاء حساب للمورد , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم انشاء حساب للمورد , خطا في الإتصال حاول مرة اخري', 'danger');
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
        this.sub_accountLocalPurch.push(this.selectedAccount);
        this.storage.set('sub_accountLocalPurch', this.sub_accountLocalPurch).then((response) => {
            //console.log('resoponse set', this.sub_accountLocalPurch)
            // this.payInvo.cust_id =  data['message']
            this.saveInvoLocal();
        });
    }
    saveInvoLocal() {
        //console.log('resoponse set', this.payInvo.sub_name)
        // this.payInvo.sub_name = this.selectedAccount.sub_name
        this.purchLocal.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.storage.set('purchLocal', this.purchLocal).then((response) => {
            //console.log('resoponse set', response)
            this.printArr = [];
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew
            });
            //console.log(this.printArr)
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
        });
    }
    saveInvo() {
        this.api.savePerchOrderInvo(this.payInvo).subscribe(data => {
            //console.log(data)
            this.saveitemList();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveitemList() {
        this.api.savePerchOrderitemList(this.itemList).subscribe(data => {
            //console.log(data) 
            this.printArr = [];
            this.printArr.push({
                'payInvo': this.payInvo,
                'itemList': this.itemList,
                'selectedAccount': this.selectedAccount,
                'sub_nameNew': this.sub_nameNew
            });
            //console.log(this.printArr)
            this.presentAlertConfirm();
            this.presentToast('تم الحفظ بنجاح', 'success');
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    //
    doAfterDissmiss(data) {
        if (data.role == 'save') {
            //console.log('edit' ,data.data)
            this.saveItem(data.data);
        }
    }
    saveItem(mdata) {
        this.presentLoadingWithOptions('جاري حفظ البيانات ...');
        this.api.saveitemMulti(mdata[0]).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.firstq = { id: null, item_id: data['message'], store_id: this.store_info.id, quantity: mdata[1].quantity, pay_price: mdata[0].pay_price, perch_price: mdata[0].perch_price, fq_year: '2022' };
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveFirstQty(this.firstq).subscribe(data => {
                //console.log(data)  
                //this.getItems(item_name) 
                this.getStockItems(item_name);
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
};
PrchOrderPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
PrchOrderPage.propDecorators = {
    nameField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ["dstP",] }],
    qtyIdP6: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['qtyIdP6',] }],
    dstPop7: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['dstPop7',] }],
    popInput2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['popInput6',] }],
    popover2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['popover6',] }]
};
PrchOrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-prch-order',
        template: _prch_order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_prch_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrchOrderPage);



/***/ }),

/***/ 69913:
/*!************************************************************!*\
  !*** ./src/app/prch-order/prch-order.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.bnone {\n  border: none;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.dark {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.custInp {\n  border-right-style: solid;\n  border-right-width: 0.5px;\n  text-align: center;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\ntd:nth-child(2), th:nth-child(2) {\n  text-align: right;\n  padding-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByY2gtb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtBQUVSOztBQUFJO0VBQU8sbUJBQUE7QUFJWDs7QUFGSTtFQUFNLGtCQUFBO0FBTVY7O0FBTEk7RUFDSSxnQkFBQTtBQVFSOztBQU5BO0VBQ0UsWUFBQTtBQVNGOztBQU5BO0VBQ0UsOEJBQUE7QUFTRjs7QUFQQztFQUNDLDRCQUFBO0FBVUY7O0FBUkE7RUFDRSxrQkFBQTtBQVdGOztBQVRBO0VBQ0UseUJBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBWUo7O0FBVEU7RUFDSyxrQkFBQTtFQUNILFdBQUE7RUFDQSxZQUFBO0FBWUo7O0FBVEU7RUFDRSx5QkFBQTtBQVlKOztBQVRFO0VBQVEseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsWUFBQTtBQWtCdkc7O0FBZkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBa0JKIiwiZmlsZSI6InByY2gtb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAgIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cbi5ibm9uZXtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucmVke1xuICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSBcbiB9XG4gLmRhcmt7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaylcbiB9XG5pb24tcG9wb3ZlcntcbiAgLS1vZmZzZXQteSA6IC0zMHB4XG59XG4uY3VzdElucHtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDAuNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiBcbiAgLnRhYmxle1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEycHg7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIH1cbiAgXG4gIHRkLCB0aCB7Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogOHB4OyBmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6IGJsYWNrO31cbiAgXG4gIC8vIFJpZ2h0IGFsaWduIGl0ZW0gbmFtZSBjb2x1bW5cbiAgdGQ6bnRoLWNoaWxkKDIpLCB0aDpudGgtY2hpbGQoMikge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIH0iXX0= */";

/***/ }),

/***/ 96687:
/*!************************************************************!*\
  !*** ./src/app/prch-order/prch-order.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>أمر شراء</ion-title>\n    <ion-button fill=\"clear\" class=\"ion-margin\"  (click)=\"changeMode()\" slot=\"end\"> \n      <ion-label><ion-icon name=\"wifi-outline\" [color]=\"color\" style=\"font-size:20px\"></ion-icon></ion-label> \n      <ion-label><ion-text color=\"dark\"  *ngIf=\"color == 'primary'\">متصل</ion-text></ion-label>   \n      <ion-label><ion-text  color=\"dark\" *ngIf=\"color == 'dark'\">غير متصل</ion-text></ion-label>   \n  </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid  *ngIf=\"user_info && store_info\" >\n  <ion-row dir=\"rtl\">\n    <ion-col size=\"12\">\n      <ion-card  class=\"ion-no-padding ion-no-margin\">\n        <ion-grid class=\"ion-no-padding ion-no-margin\">\n          <ion-row dir=\"rtl\">\n            <ion-col size=\"4\" offset=\"5\">\n            <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n              <ion-grid class=\"ion-no-padding ion-no-margin\">\n                <ion-row>\n                  <ion-col class=\"ion-no-padding ion-no-margin\">\n                    <ion-item lines=\"none\" >\n                      <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                      <ion-label>قائمة الحسابات </ion-label> \n                    </ion-item>\n                  </ion-col>\n                  <ion-col class=\"ion-no-padding ion-no-margin\">\n                    <ion-item lines=\"none\" >\n                      <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                      <ion-label>حساب جديد</ion-label> \n                    </ion-item>\n                  </ion-col> \n                </ion-row>\n              </ion-grid> \n            </ion-radio-group>\n          </ion-col>\n          <ion-col size=\"3\" class=\"ion-text-end\">\n            <ion-item lines=\"none\">\n              <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"payInvo.pay_date\"  />\n              <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n            </ion-item>\n          </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col size=\"4\" offset=\"4\"  *ngIf=\"radioVal == 0 \"> \n              <ion-item class=\"custInput\">\n                <input  class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsp\" id=\"accountp\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                <datalist style=\"border: none;\" id=\"accountsp\" style=\"height: auto;max-height: 20px;\">\n                  <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                </datalist>\n              </ion-item>   \n            </ion-col>\n            <ion-col size=\"3\" offset=\"1\"  *ngIf=\"radioVal == 1\"> \n              <ion-item class=\"custInput\"> \n               <ion-input [(ngModel)]=\"sub_nameNew\" ></ion-input>\n              </ion-item>   \n            </ion-col>\n            <ion-col size=\"2\"  offset=\"1\" *ngIf=\"radioVal == 1\"> \n              <ion-item class=\"custInput\"> \n               <ion-input placeholder=\"الجوال\" [(ngModel)]=\"selectedAccount.phone\" ></ion-input>\n              </ion-item>   \n            </ion-col>\n            <ion-col size=\"3\" offset=\"2\"  *ngIf=\"radioVal == 1\"> \n              <ion-item class=\"custInput\"> \n               <ion-input  placeholder=\"العنوان\" [(ngModel)]=\"selectedAccount.address\" ></ion-input>\n              </ion-item>   \n            </ion-col>\n            <ion-col>\n              <ion-item class=\"custInput\"> \n                <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n               </ion-item> \n            </ion-col>\n            \n          </ion-row>\n         </ion-grid> \n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\" >\n  <ion-row dir=\"rtl\">\n    <ion-col size=\"9\" class=\"ion-no-padding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"3\"  class=\"ion-no-margin ion-no-padding\">  \n                    <ion-grid class=\"ion-no-margin ion-no-padding\">\n                      <ion-row>\n                        <ion-col size=\"6\"  class=\"custPadding ion-no-margin ion-no-padding\" >\n                          <ion-label>\n                            <strong>الصنف</strong>\n                            <ion-text *ngIf=\"searchLang == 0\">(عربي)</ion-text>\n                            <ion-text *ngIf=\"searchLang == 1\">(ENG)</ion-text>\n                          </ion-label> \n                        </ion-col>\n                        <ion-col size=\"5\" *ngIf=\"offline == false\"  class=\"ion-no-margin ion-no-padding ion-text-end\">\n                          <ion-button size=\"small\"  fill=\"clear\" (click)=\"presentModal2('null', 'save')\">\n                            صنف جديد\n                            <ion-icon name=\"add-circle-outline\" color=\"success\" slot=\"end\"></ion-icon> \n                          </ion-button>  \n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <!-- <ion-item *ngIf=\"searchLang == 0\" class=\"custInput\">\n                          <input #dstP class=\"bnone\"  list=\"browsersP\" id=\"browserP\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                          <datalist style=\"border: none;\" id=\"browsersP\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                        </datalist>\n                        </ion-item> \n                        <ion-item *ngIf=\"searchLang == 1\" class=\"custInput\"  > \n                          <input #dstP *ngIf=\"items.length>0\" class=\"bnone\"  list=\"browsers5562\" id=\"browser5562\" [(ngModel)]=\"selectedItem.item_desc\"  (change)=\"pickDetail($event)\"  >\n                          <datalist *ngIf=\"items.length>0\"  id=\"browsers5562\" style=\"border: none;height: auto;max-height: 20px;color: rgb(66, 3, 3)0000 ;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_desc\" ></option>\n                          </datalist> \n                         </ion-item> -->\n                         <ion-item class=\"custInput\">\n                          <ion-label *ngIf=\"getItemLoader == true\">\n                            <ion-spinner name=\"lines-sharp\"></ion-spinner>\n                          </ion-label> \n                          <ion-input *ngIf=\"getItemLoader == false\"  #dstPop7 (click)=\"presentPopover($event)\"   [(ngModel)] =\"selectedItem.item_name\"></ion-input>\n                          <!-- <ion-button fill=\"clear\" (click)=\"clear('item_name')\" slot=\"end\">\n                            <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                          </ion-button> -->\n                        </ion-item>\n                        <ion-popover  #popover6 [isOpen]=\"isOpen\" (didDismiss)=\"didDissmis()\">\n                          <ng-template>\n                            <ion-header>\n                              <ion-toolbar dir=\"rtl\">\n                                <ion-item>\n                                  \n                                  <ion-input   #popInput6 [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input>\n                                  <ion-button fill=\"clear\" (click)=\"clear()\" slot=\"end\">\n                                    <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                                  </ion-button>\n                                  <!-- <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input> -->\n                                 </ion-item>\n                              </ion-toolbar>\n                            </ion-header>\n                            <ion-content class=\"ion-padding\" dir=\"rtl\"> \n                              <!-- spinner -->\n                              <ion-list class=\"ion-text-center\"  *ngIf=\"searchResult.length==0 && searchTerm =='' \">\n                                <ion-label>\n                                  <ion-spinner name=\"lines-sharp\"></ion-spinner>\n                                </ion-label> \n                              </ion-list>\n                              \n                              <!-- <ion-list *ngIf=\"finalResult.length>0\"> \n                                <ion-item button *ngFor=\"let item of finalResult\"  >{{item.item_name}}</ion-item>\n                              </ion-list> -->\n                               <!-- <ion-list *ngIf=\"searchResult.length>0\" class=\"hide\"> \n                                <ion-item button *ngFor=\"let item1 of searchResult | filter:searchTerm\"  >{{item1.item_name}}</ion-item>\n                              </ion-list>\n                              <ion-list *ngIf=\"aliasResult.length>0\" class=\"hide\"> \n                                <ion-item button *ngFor=\"let item2 of aliasResult | filter:aliasTerm\"  >{{item2.aliasEn}}</ion-item>\n                              </ion-list> -->\n                               <ion-list *ngIf=\"searchResult.length>0\"> \n                                <ion-item button *ngFor=\"let item of searchResult\" (click)=\"selectFromPop(item)\"    class=\"dark\" [ngClass]=\"{'red':item.quantity == 0 , 'dark':item.quantity > 0}\">\n                                  {{item.item_name}} \n                                </ion-item>\n                              </ion-list> \n                            </ion-content>\n                          </ng-template>\n                        </ion-popover>\n                      </ion-row>\n                    </ion-grid>  \n                  </ion-col>\n                  <ion-col size=\"2\" class=\"ion-margin-top\"> \n                    <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                    <ion-item class=\"custInput\" >\n                      <ion-input #qtyIdP6    (keyup.enter)=\"chechPrice('check')\"   [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event)\"  ></ion-input>\n                    </ion-item> \n                  </ion-col>\n                  <ion-col size=\"2\" class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>سعر الشراء</strong></ion-label>\n                    <ion-item class=\"custInput\">\n                      <ion-input (keyup.enter)=\"chechPrice('check')\" [(ngModel)]=\"selectedItem.perch_price\" (ionChange)=\"perchPricehange($event)\"  ></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>سعر البيع</strong></ion-label>\n                    <ion-item class=\"custInput\">\n                      <ion-input (keyup.enter)=\"chechPrice('check')\" [(ngModel)]=\"selectedItem.pay_price\" (ionChange)=\"payPricehange($event)\"  ></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                    <ion-item class=\"custInput\">\n                      <ion-input [readonly]=\"true\" [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                    </ion-item>\n                  </ion-col> \n                </ion-row>\n\n                <ion-row class=\"ion-justify-content-center\">\n                  <ion-col size=\"2\" class=\"ion-padding\"> \n                    <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"chechPrice('check')\" >\n                      <ion-label class=\"ion-text-center\">إضافة </ion-label>\n                      <ion-icon name=\"add-circle\" color=\"light\">  </ion-icon>\n                    </ion-button> \n                  </ion-col>\n                  <!-- <ion-col size=\"2\" class=\"ion-padding\"> \n                    <ion-button expand=\"block\" routerDirection=\"root\" color=\"light\"  (click)=\"chechPrice('uncheck')\" >\n                      <ion-label class=\"ion-text-center\"> تعديل وإضافة</ion-label>\n                      <ion-icon name=\"create-outline\" color=\"primary\"></ion-icon>   \n                    </ion-button> \n                  </ion-col> -->\n                </ion-row>\n              </ion-grid>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n          <ion-card>\n             <table class=\"table\">\n               <tr>\n                <th>الصنف</th>\n                <th>EN</th>\n               \n                <th>الكمية</th>\n                <th>سعر الشراء</th>\n                <th>المجموع</th> \n                <th></th> \n               </tr>\n               <tr *ngFor=\"let item of itemList ; let i = index\" (dblclick)=\"qtyClick(i)\">\n                <td>{{item.item_name}}</td>\n                <td>{{item.item_desc}}</td>\n                <td>\n                  <ion-text *ngIf=\"showMe != i\">{{item.quantity}}</ion-text> \n                  <ion-item *ngIf=\"showMe == i\">\n                   <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.quantity\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                  </ion-item>\n               </td>\n               <td>\n                 <ion-text *ngIf=\"showMe != i\">{{item.perch_price}}</ion-text> \n                  <ion-item *ngIf=\"showMe == i\">\n                   <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.perch_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                  </ion-item>\n               </td>\n               \n                <td>{{+item.tot}}</td>\n                <td>\n                  <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                    <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                  </ion-button>\n                </td>\n               </tr> \n             </table> \n          </ion-card>\n        </ion-col>\n        </ion-row> \n      </ion-grid>\n    </ion-col>\n\n\n    \n    \n\n\n    <ion-col size=\"3\" class=\"ion-no-padding\">\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [(ngModel)]=\"payInvo.tot_pr\" [readonly]=\"true\" ></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"9\">\n              <ion-item-divider></ion-item-divider>\n              <ion-label class=\"ion-padding\"><strong>خيارات الطباعة</strong></ion-label>\n              <ion-radio-group [(ngModel)]=\"radioVal3\"  (ionChange)=\"radio3Change($event)\" >\n                <ion-grid size=\"6\" class=\"ion-no-padding ion-no-margin\">\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" >\n                        <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                        <ion-label> عربي  </ion-label> \n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" >\n                        <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                        <ion-label> EN  </ion-label> \n                      </ion-item>\n                    </ion-col> \n                  </ion-row>\n                </ion-grid> \n              </ion-radio-group>\n            </ion-col>\n            <!-- <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\">\n                <strong>الخصم %</strong> \n              </ion-label>\n\n              <ion-label class=\"ion-padding ion-margin-start\">\n                <strong>الخصم</strong> \n              </ion-label> \n              <ion-item class=\"custInput\"> \n                <ion-input  [(ngModel)]=\"discountPerc\" (ionChange)=\"discountPerChange($event)\"></ion-input>\n                <ion-input class=\"custInp\" [(ngModel)]=\"payInvo.discount\"  tabindex=\"600\" (ionBlur)=\"discountChange($event)\"></ion-input> \n              </ion-item>\n            </ion-col> -->\n            <!-- <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong> المدفوع نقدا</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input [(ngModel)]=\"payInvo.pay\" (ionChange)=\"payChange($event)\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong>المتبقي</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-input  [(ngModel)]=\"payInvo.changee\" [readonly]=\"true\"></ion-input>\n              </ion-item>\n            </ion-col> \n            <ion-col size=\"9\">\n              <ion-label class=\"ion-padding\"><strong>تاريخ السداد</strong></ion-label>\n              <ion-item class=\"custInput\"> \n                <ion-item lines=\"none\">\n                  <input style=\"width:100%\"  type=\"date\"  id=\"startingDate3\" name=\"startingDate3\" [(ngModel)]=\"payInvo.nextPay\"  />\n                </ion-item>\n              </ion-item>\n            </ion-col>  -->\n          </ion-row>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"5\" >\n              <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"save()\" >\n                <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          \n        </ion-grid> \n      </ion-card>\n    </ion-col>\n    \n  </ion-row>\n\n\n \n</ion-grid>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_prch-order_prch-order_module_ts.js.map
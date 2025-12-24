"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_prch-order-record_prch-order-record_module_ts"],{

/***/ 94237:
/*!***********************************************************************!*\
  !*** ./src/app/prch-order-record/prch-order-record-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrchOrderRecordPageRoutingModule": () => (/* binding */ PrchOrderRecordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _prch_order_record_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prch-order-record.page */ 50102);




const routes = [
    {
        path: '',
        component: _prch_order_record_page__WEBPACK_IMPORTED_MODULE_0__.PrchOrderRecordPage
    }
];
let PrchOrderRecordPageRoutingModule = class PrchOrderRecordPageRoutingModule {
};
PrchOrderRecordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrchOrderRecordPageRoutingModule);



/***/ }),

/***/ 88750:
/*!***************************************************************!*\
  !*** ./src/app/prch-order-record/prch-order-record.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrchOrderRecordPageModule": () => (/* binding */ PrchOrderRecordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _prch_order_record_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prch-order-record-routing.module */ 94237);
/* harmony import */ var _prch_order_record_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prch-order-record.page */ 50102);







let PrchOrderRecordPageModule = class PrchOrderRecordPageModule {
};
PrchOrderRecordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prch_order_record_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrchOrderRecordPageRoutingModule
        ],
        declarations: [_prch_order_record_page__WEBPACK_IMPORTED_MODULE_1__.PrchOrderRecordPage]
    })
], PrchOrderRecordPageModule);



/***/ }),

/***/ 50102:
/*!*************************************************************!*\
  !*** ./src/app/prch-order-record/prch-order-record.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrchOrderRecordPage": () => (/* binding */ PrchOrderRecordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _prch_order_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prch-order-record.page.html?ngResource */ 8208);
/* harmony import */ var _prch_order_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prch-order-record.page.scss?ngResource */ 22821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);










let PrchOrderRecordPage = class PrchOrderRecordPage {
    constructor(rout, storage, modalController, loadingController, datePipe, api, toast) {
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.payArray = [];
        this.printArr = [];
        this.sub_account = [];
        this.sub_accountLocalPurch = [];
        this.sub_accountPurch = [];
        this.printMode = false;
        this.itemList = [];
        this.radioVal = 0;
        this.loading = false;
        this.showEmpty = false;
        this.offline = false;
        this.purchLocal = [];
        this.purchase = [];
        this.purchOffline = [];
        this.color = 'dark';
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "" };
        this.sums = { pay: 0, change: 0, discount: 0, tot: 0, totAfterDiscout: 0 };
        this.getAppInfo();
        this.prepareOffline();
        let d = new Date;
        this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd');
    }
    ngOnInit() {
        this.payArray = [];
        //console.log('ngOnInit')
        this.getAppInfo();
        this.prepareOffline();
    }
    ionViewDidEnter() {
        this.payArray = [];
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        //console.log('ionViewDidEnter')
        // this.search()
    }
    clear() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "" };
        this.payArray = [];
        this.purchLocal = [];
        this.showEmpty = false;
        this.loading = false;
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
                this.getSalesAccount();
                // this.search() 
            }
        });
        this.storage.get('purchase').then((response) => {
            if (response) {
                this.purchase = response;
                //console.log(this.purchase)  
            }
        });
    }
    prepareOffline() {
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
    printInvo(printarea, dataFrom) {
        if (this.offline == false && dataFrom.pay_id != undefined) {
            this.paInvo = dataFrom;
            //console.log( this.paInvo) 
            this.api.getPerchOrderInvoDetail(this.store_info.id, dataFrom.pay_ref).subscribe(data => {
                //console.log(data)
                let res = data;
                this.itemList = res['data'];
                //console.log(res) 
                this.printArr = [];
                this.printArr.push({
                    'payInvo': this.paInvo,
                    'itemList': this.itemList,
                    'selectedAccount': this.paInvo.sub_name,
                    'sub_nameNew': ""
                });
                //console.log(this.printArr)
                this.presentModal(this.printArr, 'perchOrderAr-record');
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
            });
        }
        else if (this.offline == false && dataFrom.pay_id == undefined) {
            console.log(dataFrom, dataFrom);
            //console.log(this.purchLocal ,'case2')
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                'sub_nameNew': ""
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'perchOrderAr-record');
        }
        else if (this.offline == true && dataFrom.pay_id != undefined) {
            //console.log(this.purchase ,'case3')
            let flt = [];
            flt = this.purchase.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                'sub_nameNew': ""
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'perchOrderAr-record');
        }
        else if (this.offline == true && dataFrom.pay_id == undefined) {
            //console.log(this.purchLocal)
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                'sub_nameNew': ""
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'perchOrderAr-record');
        }
    }
    printInvoEn(printarea, dataFrom) {
        if (this.offline == false && dataFrom.pay_id != undefined) {
            this.paInvo = dataFrom;
            //console.log( this.paInvo) 
            this.api.getPerchOrderInvoDetail(this.store_info.id, dataFrom.pay_ref).subscribe(data => {
                //console.log(data)
                let res = data;
                this.itemList = res['data'];
                //console.log(res) 
                this.printArr = [];
                this.printArr.push({
                    'payInvo': this.paInvo,
                    'itemList': this.itemList,
                    'selectedAccount': this.paInvo.sub_name,
                    'sub_nameNew': ""
                });
                //console.log(this.printArr)
                this.presentModal(this.printArr, 'perchOrderEn-record');
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
            });
        }
        else if (this.offline == false && dataFrom.pay_id == undefined) {
            console.log(dataFrom, dataFrom);
            //console.log(this.purchLocal ,'case2')
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here') 
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                'sub_nameNew': ""
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'perchOrderEn-record');
        }
        else if (this.offline == true && dataFrom.pay_id != undefined) {
            //console.log(this.purchase ,'case3')
            let flt = [];
            flt = this.purchase.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here') 
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                'sub_nameNew': ""
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'perchOrderEn-record');
        }
        else if (this.offline == true && dataFrom.pay_id == undefined) {
            //console.log(this.purchLocal)
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                'sub_nameNew': ""
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'perchOrderEn-record');
        }
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__.PrintModalPage,
                componentProps: {
                    "printArr": this.printArr,
                    "page": page
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    //console.log(dataReturned )
                }
            });
            return yield modal.present();
        });
    }
    preparedPrin(printarea, paInvo, itemList) {
        if (printarea && paInvo && itemList) {
            this.printMode = true;
            this.Print(printarea, this.paInvo, this.itemList);
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
                cat_name: fl[0]['cat_name']
            };
            //console.log( this.selectedAccount);
            this.payArray = [];
            this.purchLocal = [];
            this.showEmpty = false;
            this.loading = false;
            //  this.setFocusOnInput()
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
            this.selectedAccount.sub_name = "";
        }
    }
    Print(elem, paInvo, itemList) {
        if (elem && paInvo && itemList) {
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
    }
    getSalesfromLocal() {
        this.purchLocal = [];
        this.storage.get('purchLocal').then((response) => {
            if (response) {
                this.purchLocal = response;
                //console.log(this.purchLocal)  
            }
        });
    }
    getSalesOffline() {
        this.purchOffline = [];
        this.storage.get('sales').then((response) => {
            if (response) {
                this.purchOffline = response;
                //console.log(this.purchOffline)  
            }
        });
    }
    getTotal() {
        this.sums.tot = this.payArray.reduce((acc, obj) => { return acc + +obj.tot_pr; }, 0);
        this.sums.change = this.payArray.reduce((acc, obj) => { return acc + +obj.changee; }, 0);
        this.sums.pay = this.payArray.reduce((acc, obj) => { return acc + +obj.pay; }, 0);
        this.sums.discount = this.payArray.reduce((acc, obj) => { return acc + +obj.discount; }, 0);
        this.sums.totAfterDiscout = +this.sums.tot - this.sums.discount;
    }
    search() {
        this.showEmpty = false;
        if (this.radioVal == 0) {
            if (this.offline == true) {
                //   this.getTopSalesOffline()
                this.presentToast('لا يوجد اتصال بالإنترنت', "danger");
            }
            else {
                this.getTopSales();
            }
        }
    }
    getTopSales() {
        //this.getSalesfromLocal()
        this.loading = true;
        this.api.getTopOrderPerch(this.store_info.id).subscribe(data => {
            //console.log('hhhhhh',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            //  if(this.purchLocal.length >0){
            //   //console.log('locLaly',this.purchLocal)
            //   for (let i = 0; i < this.purchLocal.length; i++) {
            //     const element = this.purchLocal[i];
            //     this.payArray.push(element.payInvo)
            //   }
            //   this.getTotal()
            //   if(this.payArray.length==0){
            //     this.showEmpty = true
            //   }else{
            //     this.showEmpty = false
            //   }
            //   this.loading=false
            //   //console.log(this.payArray)
            //  }
            //custName
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    getTopSalesOffline() {
        //console.log('getTopSalesOffline')
        this.payArray = [];
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        this.storage.get('purchLocal').then((response) => {
            if (response) {
                let flt = [];
                flt = response;
                this.purchLocal = flt;
                //console.log(flt)
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            // 
            this.storage.get('purchase').then((response2) => {
                if (response2) {
                    let flt = [];
                    flt = response2;
                    this.purchOffline = flt;
                    this.purchase = this.purchOffline;
                    //console.log(flt)
                    if (flt.length > 0) {
                        for (let i = 0; i < flt.length; i++) {
                            const element = flt[i];
                            this.payArray.push(element.payInvo);
                        }
                    }
                }
                this.getTotal();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
            });
            //custName
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
        });
    }
    getSalesByDate() {
        this.payArray = [];
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        //console.log(this.store_info.id,this.startingDate)
        this.getSalesfromLocal();
        this.loading = true;
        this.api.getPerchByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            if (this.purchLocal.length > 0) {
                this.purchLocal = this.purchLocal.filter(x => x.payInvo.pay_id == undefined && x.payInvo.pay_date == this.startingDate);
                //console.log('locLaly',this.purchLocal)
                for (let i = 0; i < this.purchLocal.length; i++) {
                    const element = this.purchLocal[i];
                    this.payArray.push(element.payInvo);
                }
                this.getTotal();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
                //console.log(this.payArray)
            }
            //custName
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    getSalesByDateOffline() {
        this.payArray = [];
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        this.loading = true;
        this.storage.get('purchLocal').then((response) => {
            if (response) {
                this.purchLocal = response;
                let flt = [];
                //console.log('haloo',this.purchLocal) 
                flt = this.purchLocal.filter(x => x.payInvo.pay_date == this.startingDate);
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            this.storage.get('purchase').then((response2) => {
                if (response2) {
                    this.purchOffline = response2;
                    this.purchase = this.purchOffline;
                    //console.log(this.purchOffline) 
                    let flt = [];
                    flt = this.purchOffline.filter(x => x.payInvo.pay_date == this.startingDate);
                    if (flt.length > 0) {
                        for (let i = 0; i < flt.length; i++) {
                            const element = flt[i];
                            this.payArray.push(element.payInvo);
                        }
                    }
                }
                this.getTotal();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
            });
            //custName
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            //custName
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
        });
    }
    getSales2Date() {
        this.payArray = [];
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        this.getSalesfromLocal();
        this.loading = true;
        //console.log(this.store_info.id,this.startingDate,this.endDate)
        this.api.getPerch2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            if (this.purchLocal.length > 0) {
                this.purchLocal = this.purchLocal.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                //console.log('locLaly',this.purchLocal)
                for (let i = 0; i < this.purchLocal.length; i++) {
                    const element = this.purchLocal[i];
                    this.payArray.push(element.payInvo);
                }
                //console.log(this.payArray)
                this.getTotal();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
            }
            //custName
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    getSales2DateOffline() {
        this.payArray = [];
        this.purchLocal = [];
        this.purchase = [];
        this.purchOffline = [];
        this.loading = true;
        this.storage.get('purchLocal').then((response) => {
            if (response) {
                this.purchLocal = response;
                //console.log(this.purchLocal) 
                let flt = [];
                flt = this.purchLocal.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            this.storage.get('purchase').then((response2) => {
                if (response2) {
                    this.purchOffline = response2;
                    this.purchase = this.purchOffline;
                    //console.log(this.purchOffline) 
                    let flt = [];
                    flt = this.purchOffline.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                    if (flt.length > 0) {
                        for (let i = 0; i < flt.length; i++) {
                            const element = flt[i];
                            this.payArray.push(element.payInvo);
                        }
                    }
                }
                this.getTotal();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
            });
            //custName
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
        });
    }
    radioChange(ev) {
        //console.log(ev.target.value) 
        this.payArray = [];
        this.purchLocal = [];
        this.showEmpty = false;
        this.loading = false;
    }
    getPayInvoDetail(pay, sub_name, status) {
        console.log(pay, sub_name, status);
        this.presentLoadingWithOptions('جاري جلب التفاصيل ...');
        if (this.offline == false && pay.pay_id != undefined) {
            this.api.getPerchOrderInvoDetail(this.store_info.id, pay.pay_ref).subscribe(data => {
                //console.log(data,'case 1')
                let res = data;
                //console.log(pay) 
                let navigationExtras = {
                    queryParams: {
                        payInvo: JSON.stringify(pay),
                        sub_name: JSON.stringify(sub_name),
                        user_info: JSON.stringify(this.user_info),
                        store_info: JSON.stringify(this.store_info),
                        itemList: JSON.stringify(res['data'])
                    }
                };
                this.rout.navigate(['folder/edit-prch-order'], navigationExtras);
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            });
        }
    }
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
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
};
PrchOrderRecordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
PrchOrderRecordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-prch-order-record',
        template: _prch_order_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_prch_order_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrchOrderRecordPage);



/***/ }),

/***/ 22821:
/*!**************************************************************************!*\
  !*** ./src/app/prch-order-record/prch-order-record.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByY2gtb3JkZXItcmVjb3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVJO0VBQU8sbUJBQUE7QUFFWDs7QUFBRTtFQUFNLGtCQUFBO0FBSVI7O0FBRkk7RUFDSSxrQkFBQTtBQUtSOztBQUZJO0VBQ0ksZ0JBQUE7QUFLUjs7QUFGRTtFQUFPLGtCQUFBO0VBQW1CLFdBQUE7RUFBYSxZQUFBO0FBUXpDOztBQU5FO0VBQW9CLHlCQUFBO0FBVXRCOztBQVRFO0VBQVEseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsWUFBQTtBQWtCdkciLCJmaWxlIjoicHJjaC1vcmRlci1yZWNvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAuaGlkZXt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICBcbiAgICAuY3VzdC1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cblxuICAudGFibGV7dGV4dC1hbGlnbjogY2VudGVyO3dpZHRoOiAxMDAlOyBtYXJnaW46IDEycHg7fVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDt9XG4gIHRkLCB0aCB7Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogOHB4OyBmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6IGJsYWNrO30iXX0= */";

/***/ }),

/***/ 8208:
/*!**************************************************************************!*\
  !*** ./src/app/prch-order-record/prch-order-record.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>سجل اوامر الشراء</ion-title>\n    <ion-button fill=\"clear\" class=\"ion-margin\"  (click)=\"changeMode()\" slot=\"end\"> \n      <ion-label><ion-icon name=\"wifi-outline\" [color]=\"color\" style=\"font-size:20px\"></ion-icon></ion-label> \n      <ion-label><ion-text color=\"dark\"  *ngIf=\"color == 'primary'\">متصل</ion-text></ion-label>   \n      <ion-label><ion-text  color=\"dark\" *ngIf=\"color == 'dark'\">غير متصل</ion-text></ion-label>   \n  </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n\n                            <!-- <ion-col> \n                              <ion-item class=\"custInput\">\n                                <input  *ngIf=\"sub_account\" class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsSales\" id=\"accountSales\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                                <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accountsSales\" style=\"height: auto;max-height: 20px;\">\n                                  <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                                </datalist>\n                                <ion-label *ngIf=\"!sub_account\">\n                                  <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                                 </ion-label>\n                                <ion-button  fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"clear()\">\n                                  <ion-icon name=\"close-circle\" color=\"danger\"></ion-icon>\n                                </ion-button> \n                             \n                              </ion-item>   \n                            </ion-col> -->\n                            \n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>طلبات شراء حديثة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <!-- <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث  في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                              <ion-label>بحث في فترة</ion-label> \n                              </ion-item>\n                            </ion-col> -->\n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 \">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col>\n                      \n                    </ion-row>\n                  </ion-grid>\n                 \n              </ion-col>\n               \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <!-- <th>رقم الفاتورة</th> -->\n                  <th>العميل</th>\n                  <th>التاريخ</th>\n                  <th>اجمالي المبلغ</th>\n                  <!-- <th>الخصــم</th>  \n                  <th>الإجمالي بعد الخصم</th>  \n                  <th>نقدا</th>  \n                  <th>المتبقي</th> -->\n                  <th>تعليق</th>  \n                  <th ><strong>تعديل</strong></th> \n                  <th ><strong>طباعة بالغة العربية</strong></th> \n                  <th ><strong>طباعة بالغة الإنجليزية</strong></th>   \n                 </tr>\n                 <tr *ngFor=\"let pay of payArray ; let i = index\">\n                  <td>{{i+1}}</td>\n                  <!-- <td>{{pay.pay_id}}</td> -->\n                  <td>{{pay.sub_name}}</td>\n                  <td> {{pay.pay_date}}</td>\n                  <td>{{pay.tot_pr}}</td>\n                  <!-- <td>{{pay.discount}}</td>\n                  <td>{{+pay.tot_pr - +pay.discount}}</td>\n                  <td>{{pay.pay}}</td>\n                  <td>{{pay.changee}}</td> -->\n                  <td>{{pay.payComment}}</td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"getPayInvoDetail(pay ,pay.sub_name, 'edit')\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon> \n                    </ion-button>\n                  </td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon>\n                    </ion-button>\n                  </td>\n\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvoEn('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon>\n                    </ion-button>\n                  </td>\n                 </tr> \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <!-- <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  -->\n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <!-- <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  -->\n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <!-- <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>  -->\n                 </tr> \n                \n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                <ion-col size=\"4\" class=\"ion-text-center\">  \n                  <ion-label> \n                    <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                 </ion-label>\n                 <h4> لا توجد سجلات </h4> \n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n  \n  \n    <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"4\"> \n                     <ion-label  class=\"ion-padding\"><strong>الصنف</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                         \n                          <datalist style=\"border: none;\" id=\"browsers\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                        </datalist>\n                        </ion-item>  \n                    </ion-col>\n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input  [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event.target.val)\" #qtyId  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.pay_price\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row> -->\n  \n      \n      \n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n<ion-footer *ngIf=\"payArray\">\n  <ion-grid dir=\"rtl\">\n    <ion-row>\n      <ion-col>\n        <ion-label><ion-text>إجمالي : </ion-text><br>  <strong>{{sums.tot.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{sums.discount.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>المشتريات بعد الخصم : </ion-text><br>  <strong>{{sums.totAfterDiscout.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي النقد : </ion-text><br>  <strong>{{sums.pay.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي الاجل : </ion-text><br>  <strong>{{sums.change.toFixed(2)}}</strong></ion-label>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_prch-order-record_prch-order-record_module_ts.js.map
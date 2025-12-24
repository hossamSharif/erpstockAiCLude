"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tswia-record_tswia-record_module_ts"],{

/***/ 65939:
/*!*************************************************************!*\
  !*** ./src/app/tswia-record/tswia-record-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TswiaRecordPageRoutingModule": () => (/* binding */ TswiaRecordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _tswia_record_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tswia-record.page */ 10824);




const routes = [
    {
        path: '',
        component: _tswia_record_page__WEBPACK_IMPORTED_MODULE_0__.TswiaRecordPage
    }
];
let TswiaRecordPageRoutingModule = class TswiaRecordPageRoutingModule {
};
TswiaRecordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TswiaRecordPageRoutingModule);



/***/ }),

/***/ 88375:
/*!*****************************************************!*\
  !*** ./src/app/tswia-record/tswia-record.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TswiaRecordPageModule": () => (/* binding */ TswiaRecordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _tswia_record_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tswia-record-routing.module */ 65939);
/* harmony import */ var _tswia_record_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tswia-record.page */ 10824);







let TswiaRecordPageModule = class TswiaRecordPageModule {
};
TswiaRecordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tswia_record_routing_module__WEBPACK_IMPORTED_MODULE_0__.TswiaRecordPageRoutingModule
        ],
        declarations: [_tswia_record_page__WEBPACK_IMPORTED_MODULE_1__.TswiaRecordPage]
    })
], TswiaRecordPageModule);



/***/ }),

/***/ 10824:
/*!***************************************************!*\
  !*** ./src/app/tswia-record/tswia-record.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TswiaRecordPage": () => (/* binding */ TswiaRecordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _tswia_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tswia-record.page.html?ngResource */ 83148);
/* harmony import */ var _tswia_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tswia-record.page.scss?ngResource */ 23853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);










let TswiaRecordPage = class TswiaRecordPage {
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
        this.initialInvoices = [];
        this.sub_accountLocalSales = [];
        this.sub_accountSales = [];
        this.sub_account = [];
        this.printMode = false;
        this.itemList = [];
        this.radioVal = 0;
        this.searchLang = 0;
        this.loading = false;
        this.showEmpty = false;
        this.showError = false;
        this.offline = false;
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.color = 'dark';
        this.currentCustumerStatus = 0;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.getAppInfo();
        this.prepareOffline();
        this.sums = { pay: 0, change: 0, discount: 0, tot: 0, totAfterDiscout: 0 };
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
    clear() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.payArray = [];
        this.salesLocal = [];
        this.showEmpty = false;
        this.loading = false;
    }
    ionViewDidEnter() {
        this.payArray = [];
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        //console.log('ionViewDidEnter')
        this.search();
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
                // this.getSalesAccount()
                //this.search() 
            }
        });
    }
    prepareOffline() {
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
    getSalesAccount() {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                //console.log(this.sub_account)
                this.recalSubBalance();
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
    recalSubBalance() {
        // adding new change to subbalances
        this.sub_account.forEach(element => {
            element.sub_balance = 0;
            let debitTot = +element.changeeTot + +element.fromDebitTot;
            let creditTot = +element.purchChangeeTot + +element.toCreditTot;
            if (debitTot == creditTot) {
                element.sub_balance = 0;
                element.currentCustumerStatus = '';
            }
            else if (debitTot > creditTot) {
                element.sub_balance = (+debitTot - +creditTot).toFixed(2);
                element.currentCustumerStatus = 'debit';
                if (this.selectedAccount.id == element.id) {
                    this.selectedAccount.sub_balance = element.sub_balance;
                }
            }
            else if (creditTot > debitTot) {
                element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                element.currentCustumerStatus = 'credit';
                if (this.selectedAccount.id == element.id) {
                    this.selectedAccount.sub_balance = element.sub_balance;
                }
            }
        });
        //console.log('recalSubBalance',this.sub_account)
    }
    printInvo(printarea, dataFrom) {
        // this.recalSubBalance()
        if (this.offline == false && dataFrom.pay_id != undefined) {
            this.paInvo = dataFrom;
            //console.log( this.paInvo) 
            let flt = this.sub_account.filter(x => x.id == dataFrom.cust_id);
            this.api.getPayInvoDetail(this.store_info.id, dataFrom.pay_ref, this.year.id).subscribe(data => {
                //console.log(data)
                let res = data;
                this.itemList = res['data'];
                //console.log(res) 
                this.printArr = [];
                this.printArr.push({
                    'payInvo': this.paInvo,
                    'itemList': this.itemList,
                    'selectedAccount': this.paInvo.sub_name,
                    "balanceStatus": flt[0].currentCustumerStatus,
                    "sub_balanse": flt[0].sub_balance,
                    'sub_nameNew': "",
                    'user_name': this.paInvo.user_name
                });
                //console.log(this.printArr)
                this.presentModal(this.printArr, 'sales_record');
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
            });
        }
        else if (this.offline == false && dataFrom.pay_id == undefined) {
            console.log(dataFrom, dataFrom);
            //console.log(this.salesLocal ,'case2')
            let flt = [];
            flt = this.salesLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                "balanceStatus": this.selectedAccount.currentCustumerStatus,
                'sub_nameNew': "",
                'user_name': this.paInvo.user_name
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'sales_record');
        }
        else if (this.offline == true && dataFrom.pay_id != undefined) {
            this.loadingController.dismiss();
            //console.log(this.sales ,'case3')
            let flt = [];
            flt = this.sales.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                "balanceStatus": this.selectedAccount.currentCustumerStatus,
                'sub_nameNew': "",
                'user_name': this.paInvo.user_name
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'sales_record');
        }
        else if (this.offline == true && dataFrom.pay_id == undefined) {
            //console.log(this.salesLocal)
            let flt = [];
            flt = this.salesLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                "balanceStatus": this.selectedAccount.currentCustumerStatus,
                'sub_nameNew': "",
                'user_name': this.paInvo.user_name
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'sales_record');
        }
        //
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
                //console.log(dataReturned ) 
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
    Print(elem, paInvo, itemList) {
        if (elem && paInvo && itemList) {
            var mywindow = window.open('', 'PRINT', 'height=400,width=600');
            mywindow.document.write('<html><head>');
            mywindow.document.write('<style type="text/css">');
            mywindow.document.write('.flr2{display:inline-flex;float:right;} .flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} .td2, .th2 {border: 0.5px solid #dddddd;text-align: center;padding: 8px;} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;} .ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }');
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
        this.salesLocal = [];
        this.storage.get('salesLocal').then((response) => {
            if (response) {
                this.salesLocal = response;
                //console.log(this.salesLocal)  
            }
        });
    }
    getSalesOffline() {
        this.salesOffline = [];
        this.storage.get('sales').then((response) => {
            if (response) {
                this.salesOffline = response;
                //console.log(this.salesOffline)  
            }
        });
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
                currentCustumerStatus: fl[0]['currentCustumerStatus']
            };
            //console.log( this.selectedAccount);
            this.payArray = [];
            this.salesLocal = [];
            this.showEmpty = false;
            this.loading = false;
            //  this.setFocusOnInput()
        }
        else {
            // this.presentToast('خطأ في اسم الحساب ', 'danger') 
            this.selectedAccount.sub_name = "";
        }
    }
    search() {
        this.showEmpty = false;
        if (this.radioVal == 0) {
            if (this.offline == true) {
                // this.getTopSalesOffline()
            }
            else {
                this.getTopSales();
            }
        }
        else if (this.radioVal == 1) {
            if (this.offline == true) {
                //this.getSalesByDateOffline()
            }
            else {
                this.getSalesByDate();
            }
        }
        else if (this.radioVal == 2) {
            if (this.offline == true) {
                //  this.getSales2DateOffline()
            }
            else {
                this.getSales2Date();
            }
        }
    }
    getInitialInvoices() {
        this.payArray = [];
        this.loading = true;
        this.storage.get('initialInvoices').then((response2) => {
            if (response2) {
                let flt = [];
                flt = response2;
                this.initialInvoices = flt;
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
        this.getTotal();
    }
    getInitialInvoicesServer() {
        this.payArray = [];
        this.loading = true;
        this.loading = true;
        this.api.getTopSalesInit(this.store_info.id).subscribe(data => {
            //console.log('hhhhhh',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
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
    getTotal() {
        this.sums.tot = this.payArray.reduce((acc, obj) => { return acc + +obj.tot_pr; }, 0);
        this.sums.change = this.payArray.reduce((acc, obj) => { return acc + +obj.changee; }, 0);
        this.sums.pay = this.payArray.reduce((acc, obj) => { return acc + +obj.pay; }, 0);
        this.sums.discount = this.payArray.reduce((acc, obj) => { return acc + +obj.discount; }, 0);
        this.sums.totAfterDiscout = +this.sums.tot - this.sums.discount;
    }
    getTopSales() {
        // this.getSalesfromLocal()
        this.loading = true;
        this.api.getToptswia(this.store_info.id, this.year.id).subscribe(data => {
            //console.log('hhhhhh',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            //  if(this.salesLocal.length >0){
            //   //console.log('locLaly',this.salesLocal)
            //   for (let i = 0; i < this.salesLocal.length; i++) {
            //     const element = this.salesLocal[i];
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
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
            //console.log(this.payArray)
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
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.storage.get('salesLocal').then((response) => {
            if (response) {
                let flt = [];
                flt = response;
                this.salesLocal = flt;
                //console.log(flt)
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            // 
            this.storage.get('sales').then((response2) => {
                if (response2) {
                    let flt = [];
                    flt = response2;
                    this.salesOffline = flt;
                    this.sales = this.salesOffline;
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
        //console.log(this.store_info.id,this.startingDate)
        // this.getSalesfromLocal()
        this.loading = true;
        this.api.getTswiaByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
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
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    getSalesByDateOffline() {
        this.payArray = [];
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.loading = true;
        this.storage.get('salesLocal').then((response) => {
            if (response) {
                this.salesLocal = response;
                let flt = [];
                //console.log('haloo',this.salesLocal) 
                flt = this.salesLocal.filter(x => x.payInvo.pay_date == this.startingDate);
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            this.storage.get('sales').then((response2) => {
                if (response2) {
                    this.salesOffline = response2;
                    this.sales = this.salesOffline;
                    //console.log(this.salesOffline) 
                    let flt = [];
                    flt = this.salesOffline.filter(x => x.payInvo.pay_date == this.startingDate);
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
        this.loading = true;
        //console.log(this.store_info.id,this.startingDate,this.endDate)
        this.api.getTswia2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            this.getTotal();
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    getSales2DateOffline() {
        this.payArray = [];
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.loading = true;
        this.storage.get('salesLocal').then((response) => {
            if (response) {
                this.salesLocal = response;
                //console.log(this.salesLocal) 
                let flt = [];
                flt = this.salesLocal.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            this.storage.get('sales').then((response2) => {
                if (response2) {
                    this.salesOffline = response2;
                    this.sales = this.salesOffline;
                    //console.log(this.salesOffline) 
                    let flt = [];
                    flt = this.salesOffline.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
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
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
        });
    }
    showLoadingSk() {
        setTimeout(() => {
        }, 3000);
    }
    radioChange(ev) {
        //console.log(ev.target.value) 
        this.payArray = [];
        this.salesLocal = [];
        this.showEmpty = false;
        this.loading = false;
    }
    getPayInvoDetail(pay, sub_name, status) {
        console.log(pay, sub_name, status);
        this.presentLoadingWithOptions('جاري جلب التفاصيل ...');
        if (this.offline == false && pay.pay_id != undefined) {
            this.api.getTswiaInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
                //console.log(data,'case 1')
                let res = data;
                //console.log(pay)  
                let navigationExtras = {
                    queryParams: {
                        payInvo: JSON.stringify(pay),
                        user_info: JSON.stringify(this.user_info),
                        store_info: JSON.stringify(this.store_info),
                        itemList: JSON.stringify(res['data'])
                    }
                };
                this.rout.navigate(['folder/edit-tswia'], navigationExtras);
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
TswiaRecordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
TswiaRecordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tswia-record',
        template: _tswia_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tswia_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TswiaRecordPage);



/***/ }),

/***/ 23853:
/*!****************************************************************!*\
  !*** ./src/app/tswia-record/tswia-record.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzd2lhLXJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUFPLG1CQUFBO0FBRVg7O0FBQUU7RUFBTSxrQkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7QUFLUjs7QUFGSTtFQUNJLGdCQUFBO0FBS1I7O0FBREU7RUFBTyxrQkFBQTtFQUFtQixXQUFBO0VBQWEsWUFBQTtBQU96Qzs7QUFMRTtFQUFvQix5QkFBQTtBQVN0Qjs7QUFQRTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFnQnZHIiwiZmlsZSI6InRzd2lhLXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuc2hvd3sgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG4gIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIFxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuY3VzdFJvd3tcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAudGFibGV7dGV4dC1hbGlnbjogY2VudGVyO3dpZHRoOiAxMDAlOyBtYXJnaW46IDEycHg7fVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDt9XG4gIFxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9Il19 */";

/***/ }),

/***/ 83148:
/*!****************************************************************!*\
  !*** ./src/app/tswia-record/tswia-record.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- sh605579887 -->\n   \n    <ion-title>سجل التسويات الجردية</ion-title>\n   \n      <ion-button fill=\"clear\" class=\"ion-margin\"  (click)=\"changeMode()\" slot=\"end\"> \n          <ion-label><ion-icon name=\"wifi-outline\" [color]=\"color\" style=\"font-size:20px\"></ion-icon></ion-label> \n          <ion-label><ion-text color=\"dark\"  *ngIf=\"color == 'primary'\">متصل</ion-text></ion-label>   \n          <ion-label><ion-text  color=\"dark\" *ngIf=\"color == 'dark'\">غير متصل</ion-text></ion-label>   \n      </ion-button> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                           \n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>كل السجلات</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث  في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث في فترة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            \n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 && radioVal != 3\">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n              </ion-col> \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n\n    <ion-row>\n      <ion-card class=\"custCard\">\n      </ion-card>\n    </ion-row>\n\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <!-- <th>رقم الفاتورة</th> -->\n                  <th>رقم السجل</th>\n                  <th>التاريخ</th>\n                  <th>اجمالي المبلغ</th> \n                  <th>تعليق</th>\n                  <th>المستخدم</th>  \n                  <th ><strong>تعديل</strong></th> \n                  <!-- <th ><strong>طياعة</strong></th>  -->\n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of payArray ; let i = index\">\n                  <td>{{i+1}}</td>\n                  <!-- <td>{{pay.pay_id}}</td> -->\n                  <td>{{pay.pay_ref}}</td>\n                  <td> {{pay.pay_date}}</td>\n                  <td>{{pay.tot_pr}}</td>  \n                  <td>{{pay.payComment}}</td>\n                  <td>{{pay.user_name}}</td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit')\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon>  \n                    </ion-button>\n                  </td>\n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon> \n                    </ion-button>\n                  </td> -->\n                 </tr>\n\n              <!--    <ion-icon name=\"cloud-offline-outline\"></ion-icon> -->\n\n                 <!-- skeleton -->\n                 \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr> \n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                 <ion-col size=\"4\" class=\"ion-text-center\">  \n                   <ion-label> \n                     <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                  </ion-label>\n                  <h4> لا توجد سجلات </h4> \n                 </ion-col>\n               </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n\n<ion-footer *ngIf=\"payArray\">\n  <ion-grid >\n    <ion-row>\n      <ion-col>\n        <ion-label><ion-text>  المجموع : </ion-text><br>  <strong>{{sums.tot.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_tswia-record_tswia-record_module_ts.js.map
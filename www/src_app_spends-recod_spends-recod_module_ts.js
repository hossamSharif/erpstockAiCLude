"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_spends-recod_spends-recod_module_ts"],{

/***/ 54499:
/*!*************************************************************!*\
  !*** ./src/app/spends-recod/spends-recod-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendsRecodPageRoutingModule": () => (/* binding */ SpendsRecodPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _spends_recod_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spends-recod.page */ 40306);




const routes = [
    {
        path: '',
        component: _spends_recod_page__WEBPACK_IMPORTED_MODULE_0__.SpendsRecodPage
    }
];
let SpendsRecodPageRoutingModule = class SpendsRecodPageRoutingModule {
};
SpendsRecodPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpendsRecodPageRoutingModule);



/***/ }),

/***/ 94378:
/*!*****************************************************!*\
  !*** ./src/app/spends-recod/spends-recod.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendsRecodPageModule": () => (/* binding */ SpendsRecodPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _spends_recod_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spends-recod-routing.module */ 54499);
/* harmony import */ var _spends_recod_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spends-recod.page */ 40306);







let SpendsRecodPageModule = class SpendsRecodPageModule {
};
SpendsRecodPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _spends_recod_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpendsRecodPageRoutingModule
        ],
        declarations: [_spends_recod_page__WEBPACK_IMPORTED_MODULE_1__.SpendsRecodPage]
    })
], SpendsRecodPageModule);



/***/ }),

/***/ 40306:
/*!***************************************************!*\
  !*** ./src/app/spends-recod/spends-recod.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendsRecodPage": () => (/* binding */ SpendsRecodPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _spends_recod_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spends-recod.page.html?ngResource */ 26622);
/* harmony import */ var _spends_recod_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spends-recod.page.scss?ngResource */ 34894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);










let SpendsRecodPage = class SpendsRecodPage {
    constructor(platform, alertController, rout, storage, modalController, loadingController, datePipe, api, toast) {
        this.platform = platform;
        this.alertController = alertController;
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.jdetailsFrom = [];
        this.jdetailsTo = [];
        this.payArray = [];
        this.purchase = [];
        this.sales = [];
        this.printArr = [];
        this.showEmpty = false;
        this.printMode = false;
        this.itemList = [];
        this.radioVal = 0;
        this.loading = false;
        this.device = '';
        this.checkPlatform();
        this.getAppInfo();
        let d = new Date;
        this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd');
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
    getAppInfo() {
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
                this.getTopSales();
            }
        });
    }
    ionViewDidEnter() {
        //console.log('ionViewDidEnter')
        this.getAppInfo();
    }
    ngOnInit() {
    }
    printInvo(printarea, data) {
        this.paInvo = data;
        //console.log( this.paInvo) 
        this.api.getPayInvoDetail(this.store_info.id, data.pay_ref, this.year.id).subscribe(data => {
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
            this.presentModal(this.printArr, 'sales_record');
        }, (err) => {
            //console.log(err);
            this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
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
    getTopSales() {
        this.payArray = [];
        this.loading = true;
        this.api.getTopJournale(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
                this.getTopJto();
            }
            this.loading = false;
            //this.getTopPurchase()
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
        });
    }
    getTopPurchase() {
        this.purchase = [];
        this.api.getTopPerch(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.purchase = res['data'];
            this.getTopSales();
        }, (err) => {
            //console.log(err);
            this.loading = false;
        });
    }
    getTopSalesRec() {
        this.sales = [];
        this.api.getTopSales(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.sales = res['data'];
            this.prepareArray();
        }, (err) => {
            //console.log(err);
            this.loading = false;
        });
    }
    prepareArray() {
        this.payArray.forEach((element) => {
            let std = element.standard_details;
            let fromMainInd = std.indexOf("الي");
            let fromMain = std.substring(0, fromMainInd);
            //console.log( "fromMain" ,fromMainInd ,fromMain,)
            let toMain = std.substring(fromMainInd, element.standard_details.length);
            //console.log( "toMain" ,toMain)
            //from1
            let from1Ind = fromMain.indexOf(",");
            if (from1Ind == -1) {
                element.from1 = fromMain;
            }
            else {
                element.from1 = fromMain.substring(0, from1Ind);
                //console.log( "from1" ,element.from1)
                let newstr = element.from1.substring(from1Ind, element.from1.length);
                let from2Ind = newstr.indexOf(",");
                if (from2Ind == -1) {
                    element.from2 = fromMain.substring(element.from1.length, fromMain.length);
                    //console.log( "from2" ,element.from2)
                }
                else {
                    element.from2 = newstr.substring(0, from2Ind);
                    //console.log( "newstr" ,element.from2)
                    let from3Ind = newstr.indexOf(",");
                    if (from3Ind == -1) {
                    }
                    else {
                        element.from3 = element.newstr.substring(element.from2.length, newstr.length);
                        //console.log( "newstr2" ,element.from3)
                    }
                }
            }
            // to
            //to
            let to1Ind = toMain.indexOf(",");
            if (to1Ind == -1) {
                element.to1 = toMain;
                //console.log( "to1" ,element.to1)
            }
            else {
                element.to1 = toMain.substring(0, to1Ind);
                //console.log( "to1" ,element.to1)
                let newstr = element.to1.substring(to1Ind, element.to1.length);
                let to2Ind = newstr.indexOf(",");
                if (to2Ind == -1) {
                    element.to2 = toMain.substring(element.to1.length, toMain.length);
                    //console.log( "to2" ,element.to2)
                }
                else {
                    element.to2 = newstr.substring(0, to2Ind);
                    //console.log( "newstrto" ,element.to2)
                    let to3Ind = newstr.indexOf(",");
                    if (to3Ind == -1) {
                    }
                    else {
                        element.from3 = element.newstr.substring(element.from2.length, newstr.length);
                        //console.log( "newstr2to" ,element.from3)
                    }
                }
            }
        });
        this.payArray.forEach((element) => {
            let fltFrom = [];
            fltFrom = this.jdetailsFrom.filter(x => x.j_ref == element.j_ref);
            //console.log('fltFrom' ,fltFrom)
            fltFrom = fltFrom.sort((a, b) => (a.id < b.id ? -1 : 1));
            //console.log('sorted fltFrom' ,fltFrom)
            if (fltFrom.length > 0) {
                for (let i = 0; i < fltFrom.length; i++) {
                    const element2 = fltFrom[i];
                    if (i == 0) {
                        element.debit = element2.debit;
                    }
                    else if (i == 1) {
                        element.debit2 = element2.debit;
                    }
                    else if (i == 2) {
                        element.debit3 = element2.debit;
                    }
                }
            }
            let fltTo = [];
            fltTo = this.jdetailsTo.filter(x => x.j_ref == element.j_ref);
            //console.log('fltTo' ,fltFrom)
            fltTo = fltTo.sort((a, b) => (a.id < b.id ? -1 : 1));
            //console.log('sortedfltTo' ,fltFrom)
            if (fltTo.length > 0) {
                for (let i = 0; i < fltTo.length; i++) {
                    const element3 = fltTo[i];
                    if (i == 0) {
                        element.credit = element3.credit;
                    }
                    else if (i == 1) {
                        element.credit2 = element3.credit;
                    }
                    else if (i == 2) {
                        element.credit3 = element3.credit;
                    }
                }
            }
        });
    }
    getSalesByDate() {
        this.payArray = [];
        //console.log(this.store_info.id,this.startingDate) 
        this.api.getJournaleByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
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
        });
    }
    getPurchByDate() {
        this.purchase = [];
        this.api.getPerchByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.purchase = res['data'];
            }
        }, (err) => {
            //console.log(err);
        }, () => {
        });
    }
    getSalesrecByDate() {
        this.sales = [];
        this.api.getSalesByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.sales = res['data'];
            }
        }, (err) => {
            //console.log(err);
        }, () => {
        });
    }
    getSales2Date() {
        this.payArray = [];
        this.loading = true;
        //console.log(this.store_info.id,this.startingDate,this.endDate)
        this.api.getJournale2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
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
            this.loading = false;
            //console.log(err);
        });
    }
    getTopJto() {
        this.jdetailsTo = [];
        this.loading = true;
        this.api.getTopJTo(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.jdetailsTo = res['data'];
                //   this.jdetailsTo = this.jdetailsTo.filter(x=>x.ac_id == this.selectedAccount.id)
            }
            this.getTopJfrom();
            //console.log(this.jdetailsTo)
        }, (err) => {
            //console.log(err);
            this.loading = false;
        });
    }
    getTopJfrom() {
        this.jdetailsFrom = [];
        this.api.getTopJfrom(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.jdetailsFrom = res['data'];
                //  this.jdetailsFrom = this.jdetailsFrom.filter(x=>x.ac_id == this.selectedAccount.id)
                //console.log('flt' ,this.jdetailsFrom)
            }
            this.prepareArray();
        }, (err) => {
            //console.log(err);
            this.loading = false;
        });
    }
    getJFromByDate() {
        this.jdetailsFrom = [];
        this.loading = true;
        //console.log(this.store_info.id,this.startingDate) 
        this.api.getJFromByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.jdetailsFrom = res['data'];
                // this.jdetailsFrom = this.jdetailsFrom.filter(x=>x.ac_id == this.selectedAccount.id)
            }
            this.getJToByDate();
        }, (err) => {
            //console.log(err);
            this.loading = false;
        });
    }
    getJToByDate() {
        this.jdetailsTo = [];
        this.api.getJToByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.jdetailsTo = res['data'];
                // this.jdetailsTo = this.jdetailsTo.filter(x=>x.ac_id == this.selectedAccount.id)
            }
            this.prepareArray();
        }, (err) => {
            //console.log(err);
            this.loading = false;
        }, () => {
        });
    }
    getJTo2Date() {
        this.jdetailsTo = [];
        //console.log(this.store_info.id,this.startingDate,this.endDate)
        this.api.getJTo2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.jdetailsTo = res['data'];
                // this.jdetailsTo = this.jdetailsTo.filter(x=>x.ac_id == this.selectedAccount.id)
            }
            this.getJFrom2Date();
        }, (err) => {
            this.loading = false;
            //console.log(err);
        });
    }
    getJFrom2Date() {
        this.jdetailsFrom = [];
        this.loading = true;
        //console.log(this.store_info.id,this.startingDate,this.endDate)
        this.api.getJFrom2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.jdetailsFrom = res['data'];
                //  this.jdetailsFrom = this.jdetailsFrom.filter(x=>x.ac_id == this.selectedAccount.id)
            }
            this.prepareArray();
        }, (err) => {
            //console.log(err);
            this.loading = false;
        }, () => {
        });
    }
    //purchases
    getPurchase2Date() {
        this.purchase = [];
        //console.log(this.store_info.id,this.startingDate,this.endDate)
        this.api.getPerch2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.purchase = res['data'];
            }
        }, (err) => {
            //console.log(err);
        }, () => {
        });
    }
    getSalesrec2Date() {
        this.sales = [];
        //console.log(this.store_info.id,this.startingDate,this.endDate)
        this.api.getSales2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.sales = res['data'];
            }
        }, (err) => {
            //console.log(err);
        }, () => {
        });
    }
    radioChange(ev) {
        //console.log(ev.target.value) 
        this.payArray = [];
        this.showEmpty = false;
        this.loading = false;
    }
    search() {
        if (this.radioVal == 0) {
            this.getTopSales();
        }
        else if (this.radioVal == 1) {
            this.getSalesByDate();
        }
        else if (this.radioVal == 2) {
            this.getSales2Date();
        }
    }
    getPayInvoDetail(ref) {
        //   this.presentLoadingWithOptions('جاري جلب التفاصيل ...')
        this.api.getPayInvoDetail(this.store_info.id, ref, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            //console.log(this.payArray) 
            let navigationExtras = {
                queryParams: {
                    payArray: JSON.stringify(this.payArray),
                    user_info: JSON.stringify(this.user_info),
                    store_info: JSON.stringify(this.store_info),
                    itemList: JSON.stringify(res['data'])
                }
            };
            this.rout.navigate(['folder/edit-sales'], navigationExtras);
        }, (err) => {
            //console.log(err);
            this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
        });
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
    presentAlertConfirm(j_ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
                            this.deleteSalesInvo(j_ref);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete(j_ref) {
        this.presentAlertConfirm(j_ref);
    }
    deleteSalesInvo(j_ref) {
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        this.api.deleteJournal(j_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.deleteJfrom(j_ref);
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    deleteJfrom(j_ref) {
        this.api.deleteJFrom(j_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.deleteJto(j_ref);
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
    deleteJto(j_ref) {
        this.api.deleteJto(j_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                //console.log(' case ffff ' ,this.sales)
                this.presentToast('تم الحذف بنجاح', 'success');
                this.search();
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
SpendsRecodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
SpendsRecodPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-spends-recod',
        template: _spends_recod_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_spends_recod_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpendsRecodPage);



/***/ }),

/***/ 34894:
/*!****************************************************************!*\
  !*** ./src/app/spends-recod/spends-recod.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.mgR {\n  margin-right: 60px;\n}\n\n.h15 {\n  height: 15px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\n.tabl2 {\n  text-align: right;\n  width: 100%;\n  margin: 12px;\n}\n\n.tr2 {\n  background-color: none;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZW5kcy1yZWNvZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUFPLG1CQUFBO0FBRVg7O0FBQUU7RUFBTSxrQkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7QUFLUjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBSkE7RUFDRSxZQUFBO0FBT0Y7O0FBTEk7RUFDSSxnQkFBQTtBQVFSOztBQUxFO0VBQU8sa0JBQUE7RUFBbUIsV0FBQTtFQUFhLFlBQUE7QUFXekM7O0FBVkU7RUFBTyxpQkFBQTtFQUFrQixXQUFBO0VBQWEsWUFBQTtBQWdCeEM7O0FBZEU7RUFBTSxzQkFBQTtBQWtCUjs7QUFoQkU7RUFBUSx5QkFBQTtFQUEwQixrQkFBQTtFQUFtQixZQUFBO0VBQWMsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixZQUFBO0FBeUJ2RyIsImZpbGUiOiJzcGVuZHMtcmVjb2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAuaGlkZXt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICBcbiAgICAuY3VzdC1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuLm1nUntcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuLmgxNXtcbiAgaGVpZ2h0OiAxNXB4XG59XG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cblxuICAudGFibGV7dGV4dC1hbGlnbjogY2VudGVyO3dpZHRoOiAxMDAlOyBtYXJnaW46IDEycHg7fVxuICAudGFibDJ7dGV4dC1hbGlnbjogcmlnaHQ7d2lkdGg6IDEwMCU7IG1hcmdpbjogMTJweDt9XG5cbiAgLnRyMiB7YmFja2dyb3VuZC1jb2xvcjpub25lO31cbiAgLy8gdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO31cbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fSJdfQ== */";

/***/ }),

/***/ 26622:
/*!****************************************************************!*\
  !*** ./src/app/spends-recod/spends-recod.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> سجل القيود المحاسبية</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  *ngIf=\"device == 'desktop'\">\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label> حديثة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث  في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                              <ion-label>بحث في فترة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 \">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col>\n                      \n                    </ion-row>\n                  </ion-grid>\n                 \n              </ion-col>\n               \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\" >\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <!-- <th>رقم الفاتورة</th> --> \n                  <th>التاريخ</th>\n                  <th>نوع القيد</th>\n                  <th>البيان</th>\n                  <th>المبلغ</th>\n                  <th>القيد المحاسبي</th>  \n                  <th>المدين </th>  \n                  <th>الدائن </th>  \n                  <!-- <th ><strong>تعديل</strong></th>  -->\n                  <th ><strong>حذف</strong></th> \n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of payArray ; let i = index\">\n                  <td>{{i+1}}</td> \n                  <td> {{pay.j_date}}</td> \n                   <td>{{pay.j_type}}</td>  \n                  <td style=\"max-width:180px;\">{{pay.j_details}}</td>\n                  <td>{{pay.j_pay}}</td>\n                  <td>\n                    <table class=\"tabl2\">\n                      <tr><ion-text>{{pay.from1}}</ion-text></tr>\n\n                      <tr>\n                        <ion-text *ngIf=\"pay.from2\">{{pay.from2}}</ion-text>\n                        <ion-text *ngIf=\"!pay.from2\"></ion-text>\n                      </tr>\n                      <tr>\n                        <ion-text *ngIf=\"pay.from3\">{{pay.from3}}</ion-text>\n                        <ion-text *ngIf=\"!pay.from3\"></ion-text>\n                      </tr>\n\n                      <tr > <ion-text class=\"mgR\">{{pay.to1}}</ion-text></tr>\n                      <tr>\n                        <ion-text class=\"mgR\" *ngIf=\"pay.to2\">{{pay.to2}}</ion-text>\n                        <ion-text class=\"mgR\" *ngIf=\"!pay.to2\"></ion-text>\n                      </tr>\n                      <tr>\n                        <ion-text class=\"mgR\" *ngIf=\"pay.to3\">{{pay.to3}}</ion-text>\n                        <ion-text class=\"mgR\" *ngIf=\"!pay.to3\"></ion-text>\n                      </tr> \n                    </table>\n                    \n                  </td>\n                  <td>\n                    <table>\n                      <tr class=\"\"><ion-text>{{pay.debit}}</ion-text></tr>\n                      <tr class=\"h15 \">\n                        <ion-text *ngIf=\"pay.debit2\">{{pay.debit2}}</ion-text>\n                        <ion-text *ngIf=\"!pay.debit2\"></ion-text>\n                      </tr>\n                      <tr class=\"h15 \">\n                        <ion-text *ngIf=\"pay.debit3\">{{pay.debit3}}</ion-text>\n                        <ion-text  *ngIf=\"!pay.debit3\"></ion-text>\n                      </tr>\n                    </table> \n                  </td>\n                 \n                  <td> \n                    <table>\n                      <tr class=\"h15 \"><ion-text></ion-text></tr>\n                      <tr class=\"h15 \" *ngIf=\"pay.debit\"><ion-text></ion-text></tr>\n                      <tr  class=\"h15 \" *ngIf=\"pay.debit &&  pay.debit2 \"><ion-text></ion-text></tr>\n                      <tr class=\"h15 \" *ngIf=\"pay.debit &&  pay.debit2 &&  pay.debit3\"><ion-text color=\"light\"></ion-text></tr>\n                      <tr>\n                        <ion-text>{{pay.credit}}</ion-text>\n                      </tr>\n                      <tr class=\"h15 \">\n                        <ion-text *ngIf=\"pay.credit2\">  {{pay.credit2}} </ion-text>\n                        <ion-text *ngIf=\"!pay.credit2\">  </ion-text>\n                      </tr>\n                      <tr class=\"h15 \">\n                        <ion-text *ngIf=\"pay.credit3\">  {{pay.credit3}} </ion-text>\n                        <ion-text *ngIf=\"!pay.credit3\">   </ion-text>\n                      </tr>\n                    </table>  \n                  </td>\n              \n\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"delete(pay.j_ref )\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon> \n                    </ion-button>\n                  </td>\n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon>\n                    </ion-button>\n                  </td> -->\n                 </tr> \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   \n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  \n                 </tr>\n\n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                <ion-col size=\"4\" class=\"ion-text-center\">  \n                  <ion-label> \n                    <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                 </ion-label>\n                 <h4> لا توجد سجلات </h4> \n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n  \n  \n    <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"4\"> \n                     <ion-label  class=\"ion-padding\"><strong>الصنف</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                         \n                          <datalist style=\"border: none;\" id=\"browsers\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                        </datalist>\n                        </ion-item>  \n                    </ion-col>\n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input  [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event.target.val)\" #qtyId  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.pay_price\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row> -->\n  \n      \n      \n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n\n\n<ion-content  *ngIf=\"device == 'mobile'\">\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label> حديثة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث  في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                              <ion-label>بحث في فترة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"6\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 \">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"6\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"8\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col>\n                      \n                    </ion-row>\n                  </ion-grid>\n                 \n              </ion-col>\n               \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n    <ion-list *ngIf=\"loading == true\">\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n    </ion-list>\n      <ion-accordion-group *ngIf=\"payArray\">\n        <ion-accordion *ngFor=\"let pay of payArray ; let i = index\"  [value]=\"i\"   toggleIcon=\"caret-down-circle\" toggleIconSlot=\"end\" >\n          <ion-item slot=\"header\" color=\"light\" > \n            <ion-icon name=\"newspaper-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label>{{pay.to1}}</ion-label>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-label><ion-note>{{pay.pay_date | date:'dd-MM'}}</ion-note>    </ion-label>\n                </ion-col>\n                <ion-col size=\"8\" class=\"ion-text-end\">\n                  <ion-label>{{pay.j_pay}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-item>\n          <!-- <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item> -->\n\n        <div class=\"ion-padding\" slot=\"content\">\n          <ion-item color=\"light\"   ><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n           \n            <!-- <ion-list *ngIf=\" !pay.item_details || pay.item_details.length == 0\">\n              <ion-label>حدث خطأ في الفاتورة</ion-label>\n            </ion-list> -->\n          <ion-item-divider></ion-item-divider>\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-label><ion-note>نوع القيد: </ion-note><strong>{{pay.j_type}}</strong></ion-label>\n            </ion-item>\n            <ion-item lines=\"none\"  >\n              <ion-label><ion-note>البيان: </ion-note><strong>{{pay.j_details}}</strong></ion-label>\n            </ion-item>\n            <ion-item lines=\"none\"  >\n              <ion-label><ion-note>   المبلغ    : \n              </ion-note><strong> {{pay.j_pay}} </strong></ion-label>\n            </ion-item>\n            <!-- <ion-item lines=\"none\"  >\n              <ion-label><ion-note>   القيد المحاسبي : \n              </ion-note><strong> {{pay.}} </strong></ion-label>\n            </ion-item> -->\n            <ion-item lines=\"none\"  >\n              <ion-label><ion-note>  من\n                <ion-icon name=\"arrow-up-outline\" color=\"danger\"></ion-icon> \n              </ion-note><strong> {{ pay.to1 }} </strong></ion-label>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label><ion-note>    الي\n                <ion-icon name=\"arrow-up-outline\" color=\"danger\"></ion-icon>\n              </ion-note><strong> {{ pay.from1 }} </strong></ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-row class=\"ion-justify-content-center\"> \n            <ion-col size=\"6\">\n              <ion-button  fill=\"outline\" color=\"success\"  (click)=\"delete(pay.j_ref )\"  > \n                <ion-icon name=\" trash \" color=\"danger\"></ion-icon>\n                <ion-label><ion-text color=\"dark\">حذف</ion-text></ion-label> \n              </ion-button>\n            </ion-col>  \n          </ion-row>\n       \n        </div>\n        </ion-accordion>\n      </ion-accordion-group>\n    \n    <!-- <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                 \n                  <th>التاريخ</th>\n                  <th>نوع القيد</th>\n                  <th>البيان</th>\n                  <th>المبلغ</th>\n                  <th>القيد المحاسبي</th>  \n                  <th>المدين </th>  \n                  <th>الدائن </th>  \n                  <th ><strong>تعديل</strong></th> \n                  <th ><strong>حذف</strong></th> \n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of payArray ; let i = index\">\n                  <td>{{i+1}}</td> \n                  <td> {{pay.j_date}}</td> \n                   <td>{{pay.j_type}}</td>  \n                  <td style=\"max-width:180px;\">{{pay.j_details}}</td>\n                  <td>{{pay.j_pay}}</td>\n                  <td>\n                    <table class=\"tabl2\">\n                      <tr><ion-text>{{pay.from1}}</ion-text></tr>\n\n                      <tr>\n                        <ion-text *ngIf=\"pay.from2\">{{pay.from2}}</ion-text>\n                        <ion-text *ngIf=\"!pay.from2\"></ion-text>\n                      </tr>\n                      <tr>\n                        <ion-text *ngIf=\"pay.from3\">{{pay.from3}}</ion-text>\n                        <ion-text *ngIf=\"!pay.from3\"></ion-text>\n                      </tr>\n\n                      <tr > <ion-text class=\"mgR\">{{pay.to1}}</ion-text></tr>\n                      <tr>\n                        <ion-text class=\"mgR\" *ngIf=\"pay.to2\">{{pay.to2}}</ion-text>\n                        <ion-text class=\"mgR\" *ngIf=\"!pay.to2\"></ion-text>\n                      </tr>\n                      <tr>\n                        <ion-text class=\"mgR\" *ngIf=\"pay.to3\">{{pay.to3}}</ion-text>\n                        <ion-text class=\"mgR\" *ngIf=\"!pay.to3\"></ion-text>\n                      </tr> \n                    </table>\n                    \n                  </td>\n                  <td>\n                    <table>\n                      <tr class=\"\"><ion-text>{{pay.debit}}</ion-text></tr>\n                      <tr class=\"h15 \">\n                        <ion-text *ngIf=\"pay.debit2\">{{pay.debit2}}</ion-text>\n                        <ion-text *ngIf=\"!pay.debit2\"></ion-text>\n                      </tr>\n                      <tr class=\"h15 \">\n                        <ion-text *ngIf=\"pay.debit3\">{{pay.debit3}}</ion-text>\n                        <ion-text  *ngIf=\"!pay.debit3\"></ion-text>\n                      </tr>\n                    </table> \n                  </td>\n                 \n                  <td> \n                    <table>\n                      <tr class=\"h15 \"><ion-text></ion-text></tr>\n                      <tr class=\"h15 \" *ngIf=\"pay.debit\"><ion-text></ion-text></tr>\n                      <tr  class=\"h15 \" *ngIf=\"pay.debit &&  pay.debit2 \"><ion-text></ion-text></tr>\n                      <tr class=\"h15 \" *ngIf=\"pay.debit &&  pay.debit2 &&  pay.debit3\"><ion-text color=\"light\"></ion-text></tr>\n                      <tr>\n                        <ion-text>{{pay.credit}}</ion-text>\n                      </tr>\n                      <tr class=\"h15 \">\n                        <ion-text *ngIf=\"pay.credit2\">  {{pay.credit2}} </ion-text>\n                        <ion-text *ngIf=\"!pay.credit2\">  </ion-text>\n                      </tr>\n                      <tr class=\"h15 \">\n                        <ion-text *ngIf=\"pay.credit3\">  {{pay.credit3}} </ion-text>\n                        <ion-text *ngIf=\"!pay.credit3\">   </ion-text>\n                      </tr>\n                    </table>  \n                  </td>\n              \n\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"delete(pay.j_ref )\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon> \n                    </ion-button>\n                  </td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon>\n                    </ion-button>\n                  </td>\n                 </tr> \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   \n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  \n                 </tr>\n\n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                <ion-col size=\"4\" class=\"ion-text-center\">  \n                  <ion-label> \n                    <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                 </ion-label>\n                 <h4> لا توجد سجلات </h4> \n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n  \n  \n   <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"4\"> \n                     <ion-label  class=\"ion-padding\"><strong>الصنف</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                         \n                          <datalist style=\"border: none;\" id=\"browsers\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                        </datalist>\n                        </ion-item>  \n                    </ion-col>\n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input  [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event.target.val)\" #qtyId  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.pay_price\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>  \n  \n      \n      \n    </ion-row> -->\n  </ion-grid>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_spends-recod_spends-recod_module_ts.js.map
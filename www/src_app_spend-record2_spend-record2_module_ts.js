"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_spend-record2_spend-record2_module_ts"],{

/***/ 39969:
/*!***************************************!*\
  !*** ./src/app/spend-record2/pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe = class FilterPipe {
    transform(record, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || record.length === 0) {
                return record;
            }
            else {
                return filter ? record.filter(item => item.j_details.toLocaleLowerCase().indexOf(filter) != -1 || item.from1.toLocaleLowerCase().indexOf(filter) != -1 || item.to1.toLocaleLowerCase().indexOf(filter) != -1) : record;
            }
        }
    }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterBydetails', pure: true })
], FilterPipe);



/***/ }),

/***/ 55148:
/*!***************************************************************!*\
  !*** ./src/app/spend-record2/spend-record2-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendRecord2PageRoutingModule": () => (/* binding */ SpendRecord2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _spend_record2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spend-record2.page */ 42898);




const routes = [
    {
        path: '',
        component: _spend_record2_page__WEBPACK_IMPORTED_MODULE_0__.SpendRecord2Page
    }
];
let SpendRecord2PageRoutingModule = class SpendRecord2PageRoutingModule {
};
SpendRecord2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpendRecord2PageRoutingModule);



/***/ }),

/***/ 40447:
/*!*******************************************************!*\
  !*** ./src/app/spend-record2/spend-record2.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendRecord2PageModule": () => (/* binding */ SpendRecord2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ 39969);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _spend_record2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spend-record2-routing.module */ 55148);
/* harmony import */ var _spend_record2_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spend-record2.page */ 42898);








let SpendRecord2PageModule = class SpendRecord2PageModule {
};
SpendRecord2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _spend_record2_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpendRecord2PageRoutingModule
        ],
        declarations: [_spend_record2_page__WEBPACK_IMPORTED_MODULE_2__.SpendRecord2Page, _pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe],
        exports: [_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe]
    })
], SpendRecord2PageModule);



/***/ }),

/***/ 42898:
/*!*****************************************************!*\
  !*** ./src/app/spend-record2/spend-record2.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendRecord2Page": () => (/* binding */ SpendRecord2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _spend_record2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spend-record2.page.html?ngResource */ 71720);
/* harmony import */ var _spend_record2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spend-record2.page.scss?ngResource */ 9242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe */ 39969);











let SpendRecord2Page = class SpendRecord2Page {
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
        this.searchResult = [];
        this.searchMode = false;
        this.printMode = false;
        this.itemList = [];
        this.radioVal = 0;
        this.device = '';
        this.loading = false;
        this.searchTerm = "";
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
    // filterItems(searchTerm) {
    //   //console.log(searchTerm)  
    //   this.searcResult = this.items.filter(item => item.item_name.toLowerCase().includes(searchTerm.toLowerCase())) 
    //   //console.log(this.searcResult) 
    // }
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    searchItem(ev) {
        this.searchMode = true;
        const filterPipe = new _pipe__WEBPACK_IMPORTED_MODULE_5__.FilterPipe;
        let fiteredArr;
        fiteredArr = filterPipe.transform(this.payArray, ev.target.value);
        this.searchResult = fiteredArr;
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
            element.from1 = fromMain.substring(3, fromMain.lenght);
            element.to1 = toMain.substring(3, toMain.lenght);
            // fromMain = fromMain.substring(4,fromMain.lenght)
            // toMain = toMain.substring(3,toMain.lenght)
            //from1
            // let from1Ind = fromMain.indexOf(",")
            // if(from1Ind == -1){
            //   element.from1 = fromMain
            // }else{
            //    element.from1 = fromMain.substring(0,from1Ind)
            //    //console.log( "from1" ,element.from1)
            //    let newstr =  element.from1.substring(from1Ind , element.from1.length)
            //    let from2Ind = newstr.indexOf(",")
            //    if(from2Ind == -1){
            //     element.from2 = fromMain.substring(element.from1.length, fromMain.length)
            //     //console.log( "from2" ,element.from2)
            //    }else{
            //     element.from2 = newstr.substring(0,from2Ind)
            //     //console.log( "newstr" ,element.from2)
            //     let from3Ind = newstr.indexOf(",")
            //     if(from3Ind == -1){
            //     }else{
            //       element.from3 =  element.newstr.substring(element.from2.length , newstr.length)
            //       //console.log( "newstr2" ,element.from3)
            //     }
            //    }
            // }
            // to
            //to
            //  let to1Ind = toMain.indexOf(",")
            //  if(to1Ind == -1){
            //    element.to1 = toMain
            //    //console.log( "to1" ,element.to1)
            //  }else{
            //     element.to1 = toMain.substring(0,to1Ind)
            //     //console.log( "to1" ,element.to1)
            //     let newstr =  element.to1.substring(to1Ind , element.to1.length)
            //     let to2Ind = newstr.indexOf(",")
            //     if(to2Ind == -1){
            //      element.to2 = toMain.substring(element.to1.length, toMain.length)
            //      //console.log( "to2" ,element.to2)
            //     }else{
            //      element.to2 = newstr.substring(0,to2Ind)
            //      //console.log( "newstrto" ,element.to2)
            //      let to3Ind = newstr.indexOf(",")
            //      if(to3Ind == -1){
            //      }else{
            //        element.from3 =  element.newstr.substring(element.from2.length , newstr.length)
            //        //console.log( "newstr2to" ,element.from3)
            //      }
            //     }
            //  } 
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
            this.getJFromByDate();
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
            this.getJTo2Date();
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
            this.loading = false;
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
            //console.log('getJFrom2Date',data)
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
            this.loading = false;
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
    presentAlertConfirm(j_ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    editJournal(journalId) {
        this.rout.navigate(['/edit-journal'], {
            queryParams: { journalId: journalId }
        });
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
                this.loadingController.dismiss();
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
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
                this.loadingController.dismiss();
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    deleteJto(j_ref) {
        this.api.deleteJto(j_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                //console.log(' case ffff ' ,this.sales)
                this.presentToast('تم الحذف بنجاح', 'success');
                // Remove the deleted record from the payArray immediately
                this.payArray = this.payArray.filter(item => item.j_ref !== j_ref);
                // Also remove from search results if search mode is active
                if (this.searchMode && this.searchResult.length > 0) {
                    this.searchResult = this.searchResult.filter(item => item.j_ref !== j_ref);
                    // If search results become empty, update search mode
                    if (this.searchResult.length === 0 && this.searchTerm) {
                        // Refresh search to show updated results
                        this.searchItem({ target: { value: this.searchTerm } });
                    }
                }
                // Update empty state
                if (this.payArray.length === 0) {
                    this.showEmpty = true;
                }
                // Also refresh data from server to ensure consistency
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
SpendRecord2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
SpendRecord2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-spend-record2',
        template: _spend_record2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_spend_record2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpendRecord2Page);



/***/ }),

/***/ 9242:
/*!******************************************************************!*\
  !*** ./src/app/spend-record2/spend-record2.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/* ========================================\n   APPLE LIQUID GLASS DESIGN SYSTEM\n   Inspired by Apple's visionOS Liquid Glass\n======================================== */\n/* Core Liquid Glass Variables */\n:root {\n  /* Glass Material Properties */\n  --liquid-glass-bg: rgba(255, 255, 255, 0.15);\n  --liquid-glass-bg-light: rgba(255, 255, 255, 0.25);\n  --liquid-glass-bg-dark: rgba(0, 0, 0, 0.15);\n  --liquid-glass-border: rgba(255, 255, 255, 0.2);\n  --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  --liquid-glass-highlight: rgba(255, 255, 255, 0.4);\n  /* Blur and Effects */\n  --glass-blur: 20px;\n  --glass-blur-strong: 40px;\n  --glass-border-radius: 20px;\n  --glass-border-radius-small: 12px;\n  /* Dynamic Colors */\n  --glass-accent-primary: rgba(0, 122, 255, 0.8);\n  --glass-accent-success: rgba(52, 199, 89, 0.8);\n  --glass-accent-danger: rgba(255, 59, 48, 0.8);\n  /* Animation Properties */\n  --glass-transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-transition-fast: all 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-scale-hover: 1.02;\n  --glass-scale-active: 0.98;\n}\n/* Dark Mode Glass Variables */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --liquid-glass-bg: rgba(0, 0, 0, 0.25);\n    --liquid-glass-bg-light: rgba(255, 255, 255, 0.1);\n    --liquid-glass-bg-dark: rgba(0, 0, 0, 0.4);\n    --liquid-glass-border: rgba(255, 255, 255, 0.1);\n    --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n    --liquid-glass-highlight: rgba(255, 255, 255, 0.2);\n  }\n}\n/* ========================================\n   TRANSPARENT HEADER STYLES\n======================================== */\n/* Transparent Glass Header */\n.transparent-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n}\n.transparent-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  /* Glass material effect */\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%);\n  /* Subtle border only at bottom */\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  /* Glass reflection */\n}\n.transparent-header ion-toolbar::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n}\n.transparent-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n}\n/* Glass Menu Button */\n.glass-menu-button {\n  --background: rgba(255, 255, 255, 0.15);\n  --background-hover: rgba(255, 255, 255, 0.25);\n  --background-activated: rgba(255, 255, 255, 0.35);\n  --color: rgba(0, 0, 0, 0.8);\n  --border-radius: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: var(--glass-transition);\n}\n.glass-menu-button:hover {\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.glass-menu-button:active {\n  transform: translateY(0) scale(0.95);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.glass-menu-button ion-icon {\n  font-size: 1.4rem;\n  color: rgba(0, 0, 0, 0.8);\n  filter: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.5));\n}\n/* Glass Title */\n.glass-title {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.8);\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));\n}\n/* Modern Content with Glass Background */\n.modern-content {\n  --background: linear-gradient(135deg,\n    rgba(120, 119, 198, 0.1) 0%,\n    rgba(255, 255, 255, 0.05) 50%,\n    rgba(74, 144, 226, 0.1) 100%);\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  position: relative;\n  overflow: hidden;\n}\n/* Animated Background Glass Effect */\n.modern-content::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);\n  animation: glassShimmer 8s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 0;\n}\n@keyframes glassShimmer {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.05);\n  }\n}\n/* Glass Loading State */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  gap: 2rem;\n  position: relative;\n  /* Glass loading background */\n}\n.loading-container::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 200px;\n  height: 200px;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: var(--liquid-glass-shadow);\n  animation: pulseGlass 2s ease-in-out infinite;\n  z-index: -1;\n}\n.loading-container ion-spinner {\n  --color: var(--glass-accent-primary);\n  width: 3rem;\n  height: 3rem;\n  filter: drop-shadow(0 0 20px rgba(0, 122, 255, 0.3));\n}\n.loading-container .loading-text {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.1rem;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 122, 255, 0.8) 50%, rgba(0, 0, 0, 0.8) 100%);\n  background-size: 200% 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: textShimmer 2s ease-in-out infinite;\n}\n@keyframes pulseGlass {\n  0%, 100% {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 0.5;\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.1);\n    opacity: 0.8;\n  }\n}\n@keyframes textShimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n/* Main Container with Glass Environment */\n.main-container {\n  padding: 2rem;\n  padding-top: 80px;\n  /* Account for transparent header */\n  max-width: 100%;\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: relative;\n  z-index: 1;\n}\n/* Form Container with Floating Effect */\n.form-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1400px;\n  gap: 1.5rem;\n  position: relative;\n  z-index: 2;\n  /* Floating animation */\n  animation: containerFloat 6s ease-in-out infinite;\n}\n@keyframes containerFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n/* ========================================\n   LIQUID GLASS CARDS\n======================================== */\n/* Base Card Styles */\nion-card {\n  margin: 0;\n  border-radius: var(--glass-border-radius);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: var(--liquid-glass-shadow);\n  overflow: hidden;\n  position: relative;\n  transition: var(--glass-transition);\n  /* Glass reflection overlay */\n  /* Dynamic glass shimmer */\n}\nion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.2;\n  pointer-events: none;\n  z-index: 1;\n}\nion-card::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%);\n  transform: rotate(-45deg);\n  animation: glassShine 3s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 1;\n}\nion-card:hover {\n  transform: translateY(-8px) scale(var(--glass-scale-hover));\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\nion-card:hover::before {\n  opacity: 0.4;\n}\nion-card:active {\n  transform: translateY(-4px) scale(var(--glass-scale-active));\n}\n@keyframes glassShine {\n  0% {\n    transform: translateX(-100%) translateY(-100%) rotate(-45deg);\n  }\n  100% {\n    transform: translateX(100%) translateY(100%) rotate(-45deg);\n  }\n}\n/* Filter Card */\n.filter-card {\n  background: linear-gradient(135deg, rgba(120, 119, 198, 0.15) 0%, var(--liquid-glass-bg) 100%);\n  border: 0.5px solid #d3d3d3;\n  border-radius: var(--glass-border-radius);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;\n}\n/* Search Card */\n.search-card {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, var(--liquid-glass-bg) 100%);\n}\n/* Table Card */\n.table-card {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, var(--liquid-glass-bg) 100%);\n  min-height: 400px;\n}\n/* Card Headers */\n.card-header {\n  background: var(--ion-color-primary) !important;\n  padding: 0.8rem 1rem;\n  position: relative;\n  z-index: 2;\n  /* Glass reflection on header */\n}\n.card-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);\n  pointer-events: none;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.card-title {\n  color: white;\n  font-weight: 700;\n  font-size: 1.1rem;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  flex: 0 0 auto;\n}\n/* Header Search Input */\n.header-search-input {\n  flex: 1;\n  max-width: 300px;\n  --background: rgba(255, 255, 255, 0.15);\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  --border-radius: 8px;\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  --min-height: 2rem;\n  --max-height: 2rem;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass input reflection */\n  /* Input text styling */\n}\n.header-search-input::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.header-search-input:hover {\n  --background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(255, 255, 255, 0.2) inset;\n}\n.header-search-input:focus-within {\n  --background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.5);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(255, 255, 255, 0.3) inset;\n}\n.header-search-input ion-icon {\n  color: rgba(255, 255, 255, 0.8);\n  margin-right: 0.5rem;\n  font-size: 1rem;\n}\n.header-search-input input {\n  color: white !important;\n}\n.header-search-input input::placeholder {\n  color: rgba(255, 255, 255, 0.7) !important;\n}\n/* Card Content */\n.compact-content {\n  padding: 1rem;\n  position: relative;\n  z-index: 2;\n}\n.table-content {\n  padding: 0;\n  position: relative;\n  z-index: 2;\n}\n/* ========================================\n   FIELD ROWS AND INPUTS\n======================================== */\n.field-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.8rem;\n  position: relative;\n  z-index: 2;\n}\n.field-row:last-child {\n  margin-bottom: 0;\n}\n.field-label-right {\n  min-width: 120px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: right;\n  font-size: 0.9rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n/* Glass Inputs */\n.mini-input {\n  flex: 1;\n  --background: var(--liquid-glass-bg-light);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  --min-height: 2.2rem;\n  --max-height: 2.2rem;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass input reflection */\n}\n.mini-input::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.mini-input:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 0 0 2px var(--glass-accent-primary) inset;\n}\n.mini-input:focus-within {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 122, 255, 0.2), 0 0 0 2px var(--glass-accent-primary) inset;\n}\n/* Search Input with Icon */\n.search-input ion-icon {\n  color: var(--glass-accent-primary);\n  margin-right: 0.5rem;\n}\n/* Search Input with Gray Border */\n.search-input-bordered {\n  --background: var(--liquid-glass-bg-light);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  --min-height: 2.2rem;\n  --max-height: 2.2rem;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid #d3d3d3;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass input reflection */\n}\n.search-input-bordered::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.search-input-bordered:hover {\n  transform: translateY(-2px);\n  border-color: #a9a9a9;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 0 0 2px var(--glass-accent-primary) inset;\n}\n.search-input-bordered:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 8px 20px rgba(0, 122, 255, 0.2), 0 0 0 2px var(--glass-accent-primary) inset;\n}\n.search-input-bordered ion-icon {\n  color: var(--glass-accent-primary);\n  margin-right: 0.5rem;\n}\n/* ========================================\n   SEGMENT CONTROLS\n======================================== */\n.filter-segment {\n  --background: var(--liquid-glass-bg);\n  --color: rgba(0, 0, 0, 0.8);\n  --color-checked: white;\n  --border-radius: var(--glass-border-radius-small);\n  --indicator-color: var(--ion-color-primary);\n  --indicator-color-checked: var(--ion-color-primary);\n  flex: 1;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  border-radius: var(--glass-border-radius-small);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.filter-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: rgba(0, 0, 0, 0.8);\n  --color-checked: white;\n  --border-radius: calc(var(--glass-border-radius-small) - 2px);\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass button reflection */\n}\n.filter-segment ion-segment-button::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  opacity: 0;\n  pointer-events: none;\n  transition: var(--glass-transition);\n  z-index: 1;\n}\n.filter-segment ion-segment-button.segment-button-checked::before {\n  opacity: 1;\n}\n.filter-segment ion-segment-button .segment-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n  position: relative;\n  z-index: 2;\n}\n.filter-segment ion-segment-button .segment-content ion-icon {\n  font-size: 1rem;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.filter-segment ion-segment-button .segment-content span {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.filter-segment ion-segment-button:hover {\n  transform: scale(1.02);\n}\n.filter-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 6px 15px rgba(var(--ion-color-primary-rgb), 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3) inset;\n}\n/* ========================================\n   GLASS BUTTONS\n======================================== */\n.button-row {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.8rem;\n  justify-content: center;\n  position: relative;\n  z-index: 2;\n}\n/* Date Filter Row */\n.date-filter-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.8rem;\n  position: relative;\n  z-index: 2;\n}\n.date-filter-row .date-input {\n  flex: 1;\n}\n.date-filter-row .spacer {\n  flex: 1;\n}\n.date-filter-row .search-btn {\n  flex: 0 0 auto;\n  margin-left: auto;\n}\n.mini-btn {\n  border-radius: var(--glass-border-radius-small);\n  font-size: 0.9rem;\n  font-weight: 700;\n  min-height: 2.8rem;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Base glass material */\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  /* Glass reflection */\n  /* Search Button */\n}\n.mini-btn::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-btn:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn:hover::before {\n  opacity: 0.5;\n}\n.mini-btn:active {\n  transform: translateY(-1px) scale(0.98);\n}\n.mini-btn.search-btn {\n  --background: transparent;\n  --color: var(--glass-accent-success);\n  --border-color: var(--glass-accent-success);\n  --border-width: 2px;\n  --border-style: solid;\n  background: transparent;\n  color: var(--glass-accent-success);\n  border: 2px solid var(--glass-accent-success);\n}\n.mini-btn.search-btn:hover {\n  --background: rgba(52, 199, 89, 0.1);\n  --color: var(--glass-accent-success);\n  background: rgba(52, 199, 89, 0.1);\n  box-shadow: 0 8px 20px rgba(52, 199, 89, 0.2), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.search-btn:active {\n  --background: rgba(52, 199, 89, 0.2);\n  background: rgba(52, 199, 89, 0.2);\n}\n/* ========================================\n   GLASS TABLE STYLES\n======================================== */\n.glass-table-container {\n  position: relative;\n  border-radius: var(--glass-border-radius-small);\n  overflow: hidden;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  /* Glass container reflection */\n}\n.glass-table-container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 30%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.glass-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  position: relative;\n  z-index: 2;\n  /* Special Cell Types */\n}\n.glass-table thead {\n  background: linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(120, 119, 198, 0.1) 100%);\n}\n.glass-table thead th {\n  padding: 1rem 0.8rem;\n  text-align: center;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 0.85rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  border-bottom: 2px solid var(--liquid-glass-border);\n  position: relative;\n  /* Glass header reflection */\n}\n.glass-table thead th::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  pointer-events: none;\n}\n.glass-table thead th ion-icon {\n  margin-left: 0.3rem;\n  font-size: 0.9rem;\n  vertical-align: middle;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.glass-table tbody tr {\n  transition: var(--glass-transition);\n}\n.glass-table tbody tr:hover:not(.loading-row) {\n  background: rgba(255, 255, 255, 0.1);\n  transform: scale(1.01);\n}\n.glass-table tbody tr:hover:not(.loading-row) td {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.glass-table tbody tr.loading-row td {\n  padding: 0.8rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.glass-table tbody tr.data-row td {\n  padding: 0.8rem;\n  text-align: center;\n  font-size: 0.85rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  color: rgba(0, 0, 0, 0.8);\n  position: relative;\n  /* Subtle cell glow */\n}\n.glass-table tbody tr.data-row td::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);\n  opacity: 0;\n  transition: var(--glass-transition);\n  pointer-events: none;\n}\n.glass-table tbody tr.data-row td:hover::before {\n  opacity: 1;\n}\n.glass-table .details-cell {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: right !important;\n  font-size: 0.8rem;\n}\n.glass-table .amount-cell {\n  font-weight: 700;\n  color: var(--glass-accent-success);\n  text-shadow: 0 0 10px rgba(52, 199, 89, 0.3);\n}\n.glass-table .account-cell {\n  font-weight: 600;\n  text-align: right !important;\n}\n.glass-table .account-cell.from-account {\n  color: var(--glass-accent-danger);\n}\n.glass-table .account-cell.to-account {\n  color: var(--glass-accent-success);\n}\n.glass-table .actions-cell {\n  padding: 0.5rem !important;\n}\n.glass-table .actions-cell .action-buttons {\n  display: flex;\n  gap: 0.3rem;\n  justify-content: center;\n  align-items: center;\n}\n.glass-table .actions-cell .action-buttons ion-button {\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  --min-height: 2rem;\n  --border-radius: 8px;\n  transition: var(--glass-transition);\n}\n.glass-table .actions-cell .action-buttons ion-button.edit-btn {\n  --color: var(--glass-accent-primary);\n}\n.glass-table .actions-cell .action-buttons ion-button.edit-btn:hover {\n  transform: scale(1.1);\n  --color: rgba(0, 122, 255, 1);\n}\n.glass-table .actions-cell .action-buttons ion-button.delete-btn {\n  --color: var(--glass-accent-danger);\n}\n.glass-table .actions-cell .action-buttons ion-button.delete-btn:hover {\n  transform: scale(1.1);\n  --color: rgba(255, 59, 48, 1);\n}\n.glass-table .actions-cell .action-buttons ion-button ion-icon {\n  font-size: 1.1rem;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n/* Type Badges */\n.type-badge {\n  padding: 0.2rem 0.8rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  background: var(--liquid-glass-bg);\n  border: 1px solid var(--liquid-glass-border);\n  color: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n.type-badge.type-receipt {\n  background: linear-gradient(135deg, rgba(52, 199, 89, 0.2), rgba(52, 199, 89, 0.1));\n  color: var(--glass-accent-success);\n  border-color: rgba(52, 199, 89, 0.3);\n}\n.type-badge.type-payment {\n  background: linear-gradient(135deg, rgba(255, 59, 48, 0.2), rgba(255, 59, 48, 0.1));\n  color: var(--glass-accent-danger);\n  border-color: rgba(255, 59, 48, 0.3);\n}\n/* ========================================\n   EMPTY STATE\n======================================== */\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n  position: relative;\n  /* Glass empty background */\n}\n.empty-state::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150px;\n  height: 150px;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: var(--liquid-glass-shadow);\n  animation: pulseGlass 3s ease-in-out infinite;\n  z-index: -1;\n}\n.empty-state .empty-icon {\n  font-size: 3rem;\n  color: rgba(0, 0, 0, 0.4);\n  margin-bottom: 1rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n}\n.empty-state h3 {\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 600;\n  margin: 0;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n/* ========================================\n   RESPONSIVE DESIGN\n======================================== */\n@media (max-width: 768px) {\n  .main-container {\n    padding: 1rem;\n    padding-top: 70px;\n  }\n\n  .form-container {\n    gap: 1rem;\n  }\n\n  .field-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .field-row .field-label-right {\n    min-width: auto;\n    text-align: left;\n  }\n\n  .date-filter-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .date-filter-row .spacer {\n    display: none;\n  }\n  .date-filter-row .search-btn {\n    margin-left: 0;\n    align-self: stretch;\n  }\n\n  .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .header-content .card-title {\n    text-align: center;\n  }\n  .header-content .header-search-input {\n    max-width: none;\n  }\n\n  .filter-segment ion-segment-button .segment-content span {\n    font-size: 0.7rem;\n  }\n\n  .glass-table-container {\n    overflow-x: auto;\n  }\n\n  .glass-table {\n    min-width: 800px;\n  }\n  .glass-table th, .glass-table td {\n    font-size: 0.75rem;\n    padding: 0.5rem 0.4rem;\n  }\n  .glass-table .details-cell {\n    max-width: 150px;\n  }\n}\n@media (max-width: 480px) {\n  .main-container {\n    padding: 0.5rem;\n    padding-top: 65px;\n  }\n\n  .glass-table {\n    min-width: 700px;\n  }\n  .glass-table th, .glass-table td {\n    font-size: 0.7rem;\n    padding: 0.4rem 0.3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZW5kLXJlY29yZDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7MENBQUE7QUFLQSxnQ0FBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtEQUFBO0VBQ0EsMkNBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esa0RBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBRUEsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsNkNBQUE7RUFFQSx5QkFBQTtFQUNBLDJEQUFBO0VBQ0EsaUVBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBSEY7QUFNQSw4QkFBQTtBQUNBO0VBQ0U7SUFDRSxzQ0FBQTtJQUNBLGlEQUFBO0lBQ0EsMENBQUE7SUFDQSwrQ0FBQTtJQUNBLG9EQUFBO0lBQ0Esa0RBQUE7RUFIRjtBQUNGO0FBTUE7OzBDQUFBO0FBSUEsNkJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEY7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBRUEsMEJBQUE7RUFDQSxnSUFBQTtFQU9BLGlDQUFBO0VBQ0EsaURBQUE7RUFFQSxxQkFBQTtBQWJKO0FBY0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7RUFLQSxZQUFBO0VBQ0Esb0JBQUE7QUFoQk47QUFxQkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBbEJGO0FBcUJBLHNCQUFBO0FBQ0E7RUFDRSx1Q0FBQTtFQUNBLDZD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T0U7SUFDRSxnQkFBQTtFQXZPSjtBQUNGO0FBMk9BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUF6T0Y7O0VBNE9BO0lBQ0UsZ0JBQUE7RUF6T0Y7RUEyT0U7SUFDRSxpQkFBQTtJQUNBLHNCQUFBO0VBek9KO0FBQ0YiLCJmaWxlIjoic3BlbmQtcmVjb3JkMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBBUFBMRSBMSVFVSUQgR0xBU1MgREVTSUdOIFNZU1RFTVxuICAgSW5zcGlyZWQgYnkgQXBwbGUncyB2aXNpb25PUyBMaXF1aWQgR2xhc3Ncbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogQ29yZSBMaXF1aWQgR2xhc3MgVmFyaWFibGVzICovXG46cm9vdCB7XG4gIC8qIEdsYXNzIE1hdGVyaWFsIFByb3BlcnRpZXMgKi9cbiAgLS1saXF1aWQtZ2xhc3MtYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAtLWxpcXVpZC1nbGFzcy1iZy1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtLWxpcXVpZC1nbGFzcy1ib3JkZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgLS1saXF1aWQtZ2xhc3Mtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBcbiAgLyogQmx1ciBhbmQgRWZmZWN0cyAqL1xuICAtLWdsYXNzLWJsdXI6IDIwcHg7XG4gIC0tZ2xhc3MtYmx1ci1zdHJvbmc6IDQwcHg7XG4gIC0tZ2xhc3MtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsOiAxMnB4O1xuICBcbiAgLyogRHluYW1pYyBDb2xvcnMgKi9cbiAgLS1nbGFzcy1hY2NlbnQtcHJpbWFyeTogcmdiYSgwLCAxMjIsIDI1NSwgMC44KTtcbiAgLS1nbGFzcy1hY2NlbnQtc3VjY2VzczogcmdiYSg1MiwgMTk5LCA4OSwgMC44KTtcbiAgLS1nbGFzcy1hY2NlbnQtZGFuZ2VyOiByZ2JhKDI1NSwgNTksIDQ4LCAwLjgpO1xuICBcbiAgLyogQW5pbWF0aW9uIFByb3BlcnRpZXMgKi9cbiAgLS1nbGFzcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gIC0tZ2xhc3MtdHJhbnNpdGlvbi1mYXN0OiBhbGwgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAtLWdsYXNzLXNjYWxlLWhvdmVyOiAxLjAyO1xuICAtLWdsYXNzLXNjYWxlLWFjdGl2ZTogMC45ODtcbn1cblxuLyogRGFyayBNb2RlIEdsYXNzIFZhcmlhYmxlcyAqL1xuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICA6cm9vdCB7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmc6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtLWxpcXVpZC1nbGFzcy1iZy1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgLS1saXF1aWQtZ2xhc3Mtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBUUkFOU1BBUkVOVCBIRUFERVIgU1RZTEVTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qIFRyYW5zcGFyZW50IEdsYXNzIEhlYWRlciAqL1xuLnRyYW5zcGFyZW50LWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1taW4taGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICBcbiAgICAvKiBHbGFzcyBtYXRlcmlhbCBlZmZlY3QgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpIDAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDEwMCVcbiAgICApO1xuICAgIFxuICAgIC8qIFN1YnRsZSBib3JkZXIgb25seSBhdCBib3R0b20gKi9cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIFxuICAgIC8qIEdsYXNzIHJlZmxlY3Rpb24gKi9cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTgwZGVnLFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgMCUsXG4gICAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICAgICk7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zcGFyZW50LXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci13aWR0aDogMDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC0tbWluLWhlaWdodDogNjBweDtcbn1cblxuLyogR2xhc3MgTWVudSBCdXR0b24gKi9cbi5nbGFzcy1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIFxuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgIDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSk7XG4gIH1cbn1cblxuLyogR2xhc3MgVGl0bGUgKi9cbi5nbGFzcy10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG59XG5cbi8qIE1vZGVybiBDb250ZW50IHdpdGggR2xhc3MgQmFja2dyb3VuZCAqL1xuLm1vZGVybi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBcbiAgICByZ2JhKDEyMCwgMTE5LCAxOTgsIDAuMSkgMCUsIFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgNTAlLCBcbiAgICByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSAxMDAlKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogQW5pbWF0ZWQgQmFja2dyb3VuZCBHbGFzcyBFZmZlY3QgKi9cbi5tb2Rlcm4tY29udGVudDo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSA1MCUsIHJnYmEoMTIwLCAxMTksIDE5OCwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNDAlIDgwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgYW5pbWF0aW9uOiBnbGFzc1NoaW1tZXIgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGdsYXNzU2hpbW1lciB7XG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMC4zOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuNjsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxufVxuXG4vKiBHbGFzcyBMb2FkaW5nIFN0YXRlICovXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHZoO1xuICBnYXA6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC8qIEdsYXNzIGxvYWRpbmcgYmFja2dyb3VuZCAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbGlxdWlkLWdsYXNzLXNoYWRvdyk7XG4gICAgYW5pbWF0aW9uOiBwdWxzZUdsYXNzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gIFxuICBpb24tc3Bpbm5lciB7XG4gICAgLS1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAyMHB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMykpO1xuICB9XG4gIFxuICAubG9hZGluZy10ZXh0IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgOTBkZWcsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMCUsXG4gICAgICByZ2JhKDAsIDEyMiwgMjU1LCAwLjgpIDUwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44KSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYW5pbWF0aW9uOiB0ZXh0U2hpbW1lciAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlR2xhc3Mge1xuICAwJSwgMTAwJSB7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpOyBcbiAgICBvcGFjaXR5OiAwLjU7IFxuICB9XG4gIDUwJSB7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMSk7IFxuICAgIG9wYWNpdHk6IDAuODsgXG4gIH1cbn1cblxuQGtleWZyYW1lcyB0ZXh0U2hpbW1lciB7XG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9XG59XG5cbi8qIE1haW4gQ29udGFpbmVyIHdpdGggR2xhc3MgRW52aXJvbm1lbnQgKi9cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctdG9wOiA4MHB4OyAvKiBBY2NvdW50IGZvciB0cmFuc3BhcmVudCBoZWFkZXIgKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBGb3JtIENvbnRhaW5lciB3aXRoIEZsb2F0aW5nIEVmZmVjdCAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBnYXA6IDEuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBcbiAgLyogRmxvYXRpbmcgYW5pbWF0aW9uICovXG4gIGFuaW1hdGlvbjogY29udGFpbmVyRmxvYXQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgY29udGFpbmVyRmxvYXQge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBMSVFVSUQgR0xBU1MgQ0FSRFNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogQmFzZSBDYXJkIFN0eWxlcyAqL1xuaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1saXF1aWQtZ2xhc3Mtc2hhZG93KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgXG4gIC8qIEdsYXNzIHJlZmxlY3Rpb24gb3ZlcmxheSAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAvKiBEeW5hbWljIGdsYXNzIHNoaW1tZXIgKi9cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MCU7XG4gICAgbGVmdDogLTUwJTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICB0cmFuc3BhcmVudCA0MCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgNTAlLFxuICAgICAgdHJhbnNwYXJlbnQgNjAlXG4gICAgKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIGFuaW1hdGlvbjogZ2xhc3NTaGluZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCkgc2NhbGUodmFyKC0tZ2xhc3Mtc2NhbGUtaG92ZXIpKTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgICAgIFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuICB9XG4gIFxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKHZhcigtLWdsYXNzLXNjYWxlLWFjdGl2ZSkpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZ2xhc3NTaGluZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSB0cmFuc2xhdGVZKC0xMDAlKSByb3RhdGUoLTQ1ZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlKC00NWRlZyk7IH1cbn1cblxuLyogRmlsdGVyIENhcmQgKi9cbi5maWx0ZXItY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgcmdiYSgxMjAsIDExOSwgMTk4LCAwLjE1KSAwJSxcbiAgICB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpIDEwMCVcbiAgKTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZDNkM2QzO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksXG4gICAgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbn1cblxuLyogU2VhcmNoIENhcmQgKi9cbi5zZWFyY2gtY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMTUpIDAlLFxuICAgIHZhcigtLWxpcXVpZC1nbGFzcy1iZykgMTAwJVxuICApO1xufVxuXG4vKiBUYWJsZSBDYXJkICovXG4udGFibGUtY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLFxuICAgIHZhcigtLWxpcXVpZC1nbGFzcy1iZykgMTAwJVxuICApO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLyogQ2FyZCBIZWFkZXJzICovXG4uY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgXG4gIC8qIEdsYXNzIHJlZmxlY3Rpb24gb24gaGVhZGVyICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbi5oZWFkZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMDtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi8qIEhlYWRlciBTZWFyY2ggSW5wdXQgKi9cbi5oZWFkZXItc2VhcmNoLWlucHV0IHtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjhyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuOHJlbTtcbiAgLS1taW4taGVpZ2h0OiAycmVtO1xuICAtLW1heC1oZWlnaHQ6IDJyZW07XG4gIFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgXG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAvKiBHbGFzcyBpbnB1dCByZWZsZWN0aW9uICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gICY6aG92ZXIge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSBpbnNldDtcbiAgfVxuICBcbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgfVxuICBcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIFxuICAvKiBJbnB1dCB0ZXh0IHN0eWxpbmcgKi9cbiAgaW5wdXQge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIFxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLyogQ2FyZCBDb250ZW50ICovXG4uY29tcGFjdC1jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4udGFibGUtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgRklFTEQgUk9XUyBBTkQgSU5QVVRTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5maWVsZC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cbi5maWVsZC1sYWJlbC1yaWdodCB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi8qIEdsYXNzIElucHV0cyAqL1xuLm1pbmktaW5wdXQge1xuICBmbGV4OiAxO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDFyZW07XG4gIC0tbWluLWhlaWdodDogMi4ycmVtO1xuICAtLW1heC1oZWlnaHQ6IDIuMnJlbTtcbiAgXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBib3gtc2hhZG93OiBcbiAgICAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gIFxuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLyogR2xhc3MgaW5wdXQgcmVmbGVjdGlvbiAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDAgMCAycHggdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpIGluc2V0O1xuICB9XG4gIFxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA4cHggMjBweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjIpLFxuICAgICAgMCAwIDAgMnB4IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KSBpbnNldDtcbiAgfVxufVxuXG4vKiBTZWFyY2ggSW5wdXQgd2l0aCBJY29uICovXG4uc2VhcmNoLWlucHV0IHtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cbn1cblxuLyogU2VhcmNoIElucHV0IHdpdGggR3JheSBCb3JkZXIgKi9cbi5zZWFyY2gtaW5wdXQtYm9yZGVyZWQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDFyZW07XG4gIC0tbWluLWhlaWdodDogMi4ycmVtO1xuICAtLW1heC1oZWlnaHQ6IDIuMnJlbTtcbiAgXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgXG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAvKiBHbGFzcyBpbnB1dCByZWZsZWN0aW9uICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3JkZXItY29sb3I6ICNhOWE5YTk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDAgMCAycHggdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpIGluc2V0O1xuICB9XG4gIFxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA4cHggMjBweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjIpLFxuICAgICAgMCAwIDAgMnB4IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KSBpbnNldDtcbiAgfVxuICBcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgU0VHTUVOVCBDT05UUk9MU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZmlsdGVyLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBcbiAgZmxleDogMTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICBib3gtc2hhZG93OiBcbiAgICAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gIFxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgLSAycHgpO1xuICAgIFxuICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxuICAgIC8qIEdsYXNzIGJ1dHRvbiByZWZsZWN0aW9uICovXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDE4MGRlZyxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLFxuICAgICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgICApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICBcbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICBcbiAgICAuc2VnbWVudC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC4ycmVtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgfVxuICAgIFxuICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgMCA2cHggMTVweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMyksXG4gICAgICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEdMQVNTIEJVVFRPTlNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLyogRGF0ZSBGaWx0ZXIgUm93ICovXG4uZGF0ZS1maWx0ZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgXG4gIC5kYXRlLWlucHV0IHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIFxuICAuc3BhY2VyIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIFxuICAuc2VhcmNoLWJ0biB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbn1cblxuLm1pbmktYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtaW4taGVpZ2h0OiAyLjhyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAvKiBCYXNlIGdsYXNzIG1hdGVyaWFsICovXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBcbiAgYm94LXNoYWRvdzogXG4gICAgMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICBcbiAgLyogR2xhc3MgcmVmbGVjdGlvbiAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKSB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKSAwIDA7XG4gIH1cbiAgXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSBzY2FsZSgxLjAyKTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KSBzY2FsZSgwLjk4KTtcbiAgfVxuICBcbiAgLyogU2VhcmNoIEJ1dHRvbiAqL1xuICAmLnNlYXJjaC1idG4ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3MpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtc3VjY2Vzcyk7XG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1zdWNjZXNzKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nbGFzcy1hY2NlbnQtc3VjY2Vzcyk7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoNTIsIDE5OSwgODksIDAuMSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtc3VjY2Vzcyk7XG4gICAgICBcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE5OSwgODksIDAuMSk7XG4gICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgMCA4cHggMjBweCByZ2JhKDUyLCAxOTksIDg5LCAwLjIpLFxuICAgICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gICAgfVxuICAgIFxuICAgICY6YWN0aXZlIHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSg1MiwgMTk5LCA4OSwgMC4yKTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE5OSwgODksIDAuMik7XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEdMQVNTIFRBQkxFIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZ2xhc3MtdGFibGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gIFxuICAvKiBHbGFzcyBjb250YWluZXIgcmVmbGVjdGlvbiAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4uZ2xhc3MtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgXG4gIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICByZ2JhKDAsIDEyMiwgMjU1LCAwLjEpIDAlLFxuICAgICAgcmdiYSgxMjAsIDExOSwgMTk4LCAwLjEpIDEwMCVcbiAgICApO1xuICAgIFxuICAgIHRoIHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMC44cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIFxuICAgICAgLyogR2xhc3MgaGVhZGVyIHJlZmxlY3Rpb24gKi9cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSxcbiAgICAgICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgICAgICk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgdGJvZHkge1xuICAgIHRyIHtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgICAgXG4gICAgICAmOmhvdmVyOm5vdCgubG9hZGluZy1yb3cpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgICAgICBcbiAgICAgICAgdGQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5sb2FkaW5nLXJvdyB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5kYXRhLXJvdyB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBcbiAgICAgICAgICAvKiBTdWJ0bGUgY2VsbCBnbG93ICovXG4gICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgNTAlLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogU3BlY2lhbCBDZWxsIFR5cGVzICovXG4gIC5kZXRhaWxzLWNlbGwge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgXG4gIC5hbW91bnQtY2VsbCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3MpO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDUyLCAxOTksIDg5LCAwLjMpO1xuICB9XG4gIFxuICAuYWNjb3VudC1jZWxsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgJi5mcm9tLWFjY291bnQge1xuICAgICAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1kYW5nZXIpO1xuICAgIH1cbiAgICBcbiAgICAmLnRvLWFjY291bnQge1xuICAgICAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1zdWNjZXNzKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5hY3Rpb25zLWNlbGwge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIFxuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjNyZW07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNXJlbTtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMC41cmVtO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDJyZW07XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gICAgICAgIFxuICAgICAgICAmLmVkaXQtYnRuIHtcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAtLWNvbG9yOiByZ2JhKDAsIDEyMiwgMjU1LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuZGVsZXRlLWJ0biB7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LWRhbmdlcik7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAtLWNvbG9yOiByZ2JhKDI1NSwgNTksIDQ4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIFR5cGUgQmFkZ2VzICovXG4udHlwZS1iYWRnZSB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBcbiAgJi50eXBlLXJlY2VpcHQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNTIsIDE5OSwgODksIDAuMiksIHJnYmEoNTIsIDE5OSwgODksIDAuMSkpO1xuICAgIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtc3VjY2Vzcyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxOTksIDg5LCAwLjMpO1xuICB9XG4gIFxuICAmLnR5cGUtcGF5bWVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDU5LCA0OCwgMC4yKSwgcmdiYSgyNTUsIDU5LCA0OCwgMC4xKSk7XG4gICAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1kYW5nZXIpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDU5LCA0OCwgMC4zKTtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBFTVBUWSBTVEFURVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAvKiBHbGFzcyBlbXB0eSBiYWNrZ3JvdW5kICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1saXF1aWQtZ2xhc3Mtc2hhZG93KTtcbiAgICBhbmltYXRpb246IHB1bHNlR2xhc3MgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgXG4gIC5lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gIH1cbiAgXG4gIGgzIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFJFU1BPTlNJVkUgREVTSUdOXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG4gIFxuICAuZmllbGQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogMC41cmVtO1xuICAgIFxuICAgIC5maWVsZC1sYWJlbC1yaWdodCB7XG4gICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuICBcbiAgLmRhdGUtZmlsdGVyLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBcbiAgICAuc3BhY2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5zZWFyY2gtYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICB9XG4gIH1cbiAgXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBcbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXItc2VhcmNoLWlucHV0IHtcbiAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5maWx0ZXItc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIC5zZWdtZW50LWNvbnRlbnQge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmdsYXNzLXRhYmxlLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuICBcbiAgLmdsYXNzLXRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xuICAgIFxuICAgIHRoLCB0ZCB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMC40cmVtO1xuICAgIH1cbiAgICBcbiAgICAuZGV0YWlscy1jZWxsIHtcbiAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogNjVweDtcbiAgfVxuICBcbiAgLmdsYXNzLXRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIFxuICAgIHRoLCB0ZCB7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjNyZW07XG4gICAgfVxuICB9XG59Il19 */";

/***/ }),

/***/ 71720:
/*!******************************************************************!*\
  !*** ./src/app/spend-record2/spend-record2.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"glass-menu-button\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"glass-title\">سجل سندات القبض والدفع</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info\" class=\"main-container\">\n    <div class=\"form-container\">\n      <!-- Filter Card -->\n      <ion-card class=\"filter-card\">\n        <ion-card-content class=\"compact-content\">\n          <!-- Filter Type Segment -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">نوع البحث</ion-label>\n            <ion-segment [(ngModel)]=\"radioVal\" (ionChange)=\"radioChange($event)\" class=\"filter-segment\">\n              <ion-segment-button value=\"0\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"time-outline\"></ion-icon>\n                  <span>حديثة</span>\n                </div>\n              </ion-segment-button>\n              <ion-segment-button value=\"1\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\n                  <span>بحث في تاريخ</span>\n                </div>\n              </ion-segment-button>\n              <ion-segment-button value=\"2\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"calendar-number-outline\"></ion-icon>\n                  <span>بحث في فترة</span>\n                </div>\n              </ion-segment-button>\n            </ion-segment>\n          </div>\n          \n          <!-- Date Filter Row for Recent Records -->\n          <div class=\"date-filter-row\" *ngIf=\"radioVal == '0'\">\n            <div class=\"spacer\"></div>\n            <ion-button \n              (click)=\"search()\"\n              fill=\"outline\"\n              class=\"mini-btn search-btn\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              بحث\n            </ion-button>\n          </div>\n          \n          <!-- Date Filter Row for Single Date -->\n          <div class=\"date-filter-row\" *ngIf=\"radioVal == '1'\">\n            <ion-input \n              type=\"date\" \n              [(ngModel)]=\"startingDate\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            <ion-button \n              (click)=\"search()\"\n              fill=\"outline\"\n              class=\"mini-btn search-btn\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              بحث\n            </ion-button>\n          </div>\n          \n          <!-- Date Filter Row for Date Range -->\n          <div class=\"date-filter-row\" *ngIf=\"radioVal == '2'\">\n            <ion-input \n              type=\"date\" \n              [(ngModel)]=\"startingDate\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            <ion-input \n              type=\"date\" \n              [(ngModel)]=\"endDate\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            <ion-button \n              (click)=\"search()\"\n              fill=\"outline\"\n              class=\"mini-btn search-btn\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              بحث\n            </ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      \n      \n      <!-- Records Table Card -->\n      <ion-card class=\"table-card\" *ngIf=\"searchMode == false\">\n        <ion-card-header class=\"card-header\">\n          <div class=\"header-content\">\n            <ion-card-title class=\"card-title\">سجل السندات</ion-card-title>\n            <ion-input \n              [(ngModel)]=\"searchTerm\" \n              (ionChange)=\"searchItem($event)\" \n              placeholder=\"بحث في البيانات...\"\n              class=\"header-search-input\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n            </ion-input>\n          </div>\n        </ion-card-header>\n        <ion-card-content class=\"table-content\">\n          <!-- Glass Table -->\n          <div class=\"glass-table-container\">\n            <table class=\"glass-table\">\n              <thead>\n                <tr>\n                  <th>التسلسل</th>\n                  <th>التاريخ</th>\n                  <th>نوع السند</th>\n                  <th>البيان</th>\n                  <th>المبلغ</th>\n                  <th>من <ion-icon name=\"arrow-up-outline\" color=\"danger\"></ion-icon></th>  \n                  <th>إلى <ion-icon name=\"arrow-down-outline\" color=\"success\"></ion-icon></th>\n                  <th>العمليات</th>\n                </tr>\n              </thead>\n              <tbody>\n                <!-- Loading Rows -->\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                \n                <!-- Data Rows -->\n                <tr *ngFor=\"let pay of payArray; let i = index\" class=\"data-row\">\n                  <td>{{i+1}}</td>\n                  <td>{{pay.j_date}}</td>\n                  <td><span class=\"type-badge\" [class.type-receipt]=\"pay.j_type == 'سند قبض'\" [class.type-payment]=\"pay.j_type == 'سند دفع'\">{{pay.j_type}}</span></td>\n                  <td class=\"details-cell\">{{pay.j_details}}</td>\n                  <td class=\"amount-cell\">{{pay.j_pay}}</td>\n                  <td class=\"account-cell from-account\">{{pay.to1}}</td>\n                  <td class=\"account-cell to-account\">{{pay.from1}}</td>\n                  <td class=\"actions-cell\">\n                    <div class=\"action-buttons\">\n                      <ion-button fill=\"clear\" size=\"small\" class=\"edit-btn\" (click)=\"editJournal(pay.j_id)\">\n                        <ion-icon name=\"create-outline\"></ion-icon>\n                      </ion-button>\n                      <ion-button fill=\"clear\" size=\"small\" class=\"delete-btn\" (click)=\"delete(pay.j_ref)\">\n                        <ion-icon name=\"trash-outline\"></ion-icon>\n                      </ion-button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            \n            <!-- Empty State -->\n            <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n              <ion-icon name=\"archive-outline\" class=\"empty-icon\"></ion-icon>\n              <h3>لا توجد سجلات</h3>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      \n      <!-- Search Results Table Card -->\n      <ion-card class=\"table-card\" *ngIf=\"searchMode == true\">\n        <ion-card-header class=\"card-header\">\n          <div class=\"header-content\">\n            <ion-card-title class=\"card-title\">نتائج البحث</ion-card-title>\n            <ion-input \n              [(ngModel)]=\"searchTerm\" \n              (ionChange)=\"searchItem($event)\" \n              placeholder=\"بحث في البيانات...\"\n              class=\"header-search-input\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n            </ion-input>\n          </div>\n        </ion-card-header>\n        <ion-card-content class=\"table-content\">\n          <!-- Glass Table -->\n          <div class=\"glass-table-container\">\n            <table class=\"glass-table\">\n              <thead>\n                <tr>\n                  <th>التسلسل</th>\n                  <th>التاريخ</th>\n                  <th>نوع السند</th>\n                  <th>البيان</th>\n                  <th>المبلغ</th>\n                  <th>من <ion-icon name=\"arrow-up-outline\" color=\"danger\"></ion-icon></th>  \n                  <th>إلى <ion-icon name=\"arrow-down-outline\" color=\"success\"></ion-icon></th>\n                  <th>العمليات</th>\n                </tr>\n              </thead>\n              <tbody>\n                <!-- Loading Rows -->\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                \n                <!-- Search Results Data Rows -->\n                <tr *ngFor=\"let pay of searchResult; let i = index\" class=\"data-row\">\n                  <td>{{i+1}}</td>\n                  <td>{{pay.j_date}}</td>\n                  <td><span class=\"type-badge\" [class.type-receipt]=\"pay.j_type == 'سند قبض'\" [class.type-payment]=\"pay.j_type == 'سند دفع'\">{{pay.j_type}}</span></td>\n                  <td class=\"details-cell\">{{pay.j_details}}</td>\n                  <td class=\"amount-cell\">{{pay.j_pay}}</td>\n                  <td class=\"account-cell from-account\">{{pay.to1}}</td>\n                  <td class=\"account-cell to-account\">{{pay.from1}}</td>\n                  <td class=\"actions-cell\">\n                    <div class=\"action-buttons\">\n                      <ion-button fill=\"clear\" size=\"small\" class=\"delete-btn\" (click)=\"delete(pay.j_ref)\">\n                        <ion-icon name=\"trash-outline\"></ion-icon>\n                      </ion-button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            \n            <!-- Empty State -->\n            <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n              <ion-icon name=\"archive-outline\" class=\"empty-icon\"></ion-icon>\n              <h3>لا توجد نتائج</h3>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_spend-record2_spend-record2_module_ts.js.map
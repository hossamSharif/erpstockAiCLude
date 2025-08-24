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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ 39969);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _spend_record2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spend-record2-routing.module */ 55148);
/* harmony import */ var _spend_record2_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spend-record2.page */ 42898);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);









let SpendRecord2PageModule = class SpendRecord2PageModule {
};
SpendRecord2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _spend_record2_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpendRecord2PageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _spend_record2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spend-record2.page.html?ngResource */ 71720);
/* harmony import */ var _spend_record2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spend-record2.page.scss?ngResource */ 9242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe */ 39969);
/* harmony import */ var _services_sorting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/sorting.service */ 52562);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/export.service */ 79002);













let SpendRecord2Page = class SpendRecord2Page {
    constructor(platform, alertController, rout, storage, modalController, loadingController, datePipe, api, toast, sortingService, exportService) {
        this.platform = platform;
        this.alertController = alertController;
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.sortingService = sortingService;
        this.exportService = exportService;
        this.jdetailsFrom = [];
        this.jdetailsTo = [];
        this.payArray = [];
        this.sortedPayArray = [];
        this.currentSort = null;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        // Apply sorting after preparing data
        this.applySorting();
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
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    // Apply sorting to payArray
    applySorting() {
        if (this.currentSort) {
            this.sortedPayArray = this.sortingService.sortData(this.payArray, this.currentSort.column, this.currentSort.direction);
        }
        else {
            this.sortedPayArray = [...this.payArray];
        }
    }
    // Handle column sort
    sortBy(column) {
        const direction = this.sortingService.getNextSortDirection(column, this.currentSort);
        this.currentSort = { column, direction };
        this.applySorting();
    }
    // Get sort icon for column
    getSortIcon(column) {
        return this.sortingService.getSortIcon(column, this.currentSort);
    }
    // Export functionality
    exportToPDF() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.payArray || this.payArray.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('spend-record2'),
                subtitle: this.generateSubtitle(),
                fileName: `spend-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.payArray,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'spend-record2',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToPDF(config);
        });
    }
    exportToExcel() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.payArray || this.payArray.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('spend-record2'),
                subtitle: this.generateSubtitle(),
                fileName: `spend-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.payArray,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'spend-record2',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToExcel(config);
        });
    }
    generateSubtitle() {
        const filters = {
            selectedAccount: null,
            dateFilter: this.getDateFilter(),
            searchTerm: this.searchTerm || null
        };
        return this.exportService.generateDynamicSubtitle('spend-record2', filters);
    }
    getDateFilter() {
        if (this.radioVal === 1 && this.startingDate) {
            return {
                type: 'single',
                date: this.startingDate
            };
        }
        else if (this.radioVal === 2 && this.startingDate && this.endDate) {
            return {
                type: 'range',
                startDate: this.startingDate,
                endDate: this.endDate
            };
        }
        return null;
    }
    getExportColumns() {
        return [
            { key: 'j_date', title: 'التاريخ', width: 12, type: 'date' },
            { key: 'j_type', title: 'النوع', width: 12, type: 'text' },
            { key: 'j_description', title: 'البيان', width: 25, type: 'text' },
            { key: 'debit', title: 'مدين', width: 12, type: 'currency' },
            { key: 'credit', title: 'دائن', width: 12, type: 'currency' },
            { key: 'user_name', title: 'المستخدم', width: 15, type: 'text' }
        ];
    }
};
SpendRecord2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _services_sorting_service__WEBPACK_IMPORTED_MODULE_6__.SortingService },
    { type: _services_export_service__WEBPACK_IMPORTED_MODULE_7__.ExportService }
];
SpendRecord2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
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

module.exports = "/* ========================================\n   APPLE LIQUID GLASS DESIGN SYSTEM\n   Inspired by Apple's visionOS Liquid Glass\n======================================== */\n/* Core Liquid Glass Variables */\n:root {\n  /* Glass Material Properties */\n  --liquid-glass-bg: rgba(255, 255, 255, 0.15);\n  --liquid-glass-bg-light: rgba(255, 255, 255, 0.25);\n  --liquid-glass-bg-dark: rgba(0, 0, 0, 0.15);\n  --liquid-glass-border: rgba(255, 255, 255, 0.2);\n  --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  --liquid-glass-highlight: rgba(255, 255, 255, 0.4);\n  /* Blur and Effects */\n  --glass-blur: 20px;\n  --glass-blur-strong: 40px;\n  --glass-border-radius: 20px;\n  --glass-border-radius-small: 12px;\n  /* Dynamic Colors */\n  --glass-accent-primary: rgba(0, 122, 255, 0.8);\n  --glass-accent-success: rgba(52, 199, 89, 0.8);\n  --glass-accent-danger: rgba(255, 59, 48, 0.8);\n  /* Animation Properties */\n  --glass-transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-transition-fast: all 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-scale-hover: 1.02;\n  --glass-scale-active: 0.98;\n}\n/* Dark Mode Glass Variables */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --liquid-glass-bg: rgba(0, 0, 0, 0.25);\n    --liquid-glass-bg-light: rgba(255, 255, 255, 0.1);\n    --liquid-glass-bg-dark: rgba(0, 0, 0, 0.4);\n    --liquid-glass-border: rgba(255, 255, 255, 0.1);\n    --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n    --liquid-glass-highlight: rgba(255, 255, 255, 0.2);\n  }\n}\n/* ========================================\n   TRANSPARENT HEADER STYLES\n======================================== */\n/* Transparent Glass Header */\n.transparent-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n}\n.transparent-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  /* Glass material effect */\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%);\n  /* Subtle border only at bottom */\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  /* Glass reflection */\n}\n.transparent-header ion-toolbar::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n}\n.transparent-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n}\n/* Glass Menu Button */\n.glass-menu-button {\n  --background: rgba(255, 255, 255, 0.15);\n  --background-hover: rgba(255, 255, 255, 0.25);\n  --background-activated: rgba(255, 255, 255, 0.35);\n  --color: rgba(0, 0, 0, 0.8);\n  --border-radius: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: var(--glass-transition);\n}\n.glass-menu-button:hover {\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.glass-menu-button:active {\n  transform: translateY(0) scale(0.95);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.glass-menu-button ion-icon {\n  font-size: 1.4rem;\n  color: rgba(0, 0, 0, 0.8);\n  filter: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.5));\n}\n/* Glass Title */\n.glass-title {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.8);\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));\n}\n/* Modern Content with Glass Background */\n.modern-content {\n  --background: linear-gradient(135deg,\n    rgba(120, 119, 198, 0.1) 0%,\n    rgba(255, 255, 255, 0.05) 50%,\n    rgba(74, 144, 226, 0.1) 100%);\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  position: relative;\n  overflow: hidden;\n}\n/* Animated Background Glass Effect */\n.modern-content::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);\n  animation: glassShimmer 8s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 0;\n}\n@keyframes glassShimmer {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.05);\n  }\n}\n/* Glass Loading State */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  gap: 2rem;\n  position: relative;\n  /* Glass loading background */\n}\n.loading-container::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 200px;\n  height: 200px;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: var(--liquid-glass-shadow);\n  animation: pulseGlass 2s ease-in-out infinite;\n  z-index: -1;\n}\n.loading-container ion-spinner {\n  --color: var(--glass-accent-primary);\n  width: 3rem;\n  height: 3rem;\n  filter: drop-shadow(0 0 20px rgba(0, 122, 255, 0.3));\n}\n.loading-container .loading-text {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.1rem;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 122, 255, 0.8) 50%, rgba(0, 0, 0, 0.8) 100%);\n  background-size: 200% 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: textShimmer 2s ease-in-out infinite;\n}\n@keyframes pulseGlass {\n  0%, 100% {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 0.5;\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.1);\n    opacity: 0.8;\n  }\n}\n@keyframes textShimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n/* Main Container with Glass Environment */\n.main-container {\n  padding: 2rem;\n  padding-top: 80px;\n  /* Account for transparent header */\n  max-width: 100%;\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: relative;\n  z-index: 1;\n}\n/* Form Container with Floating Effect */\n.form-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1400px;\n  gap: 1.5rem;\n  position: relative;\n  z-index: 2;\n  /* Floating animation */\n  animation: containerFloat 6s ease-in-out infinite;\n}\n@keyframes containerFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n/* ========================================\n   LIQUID GLASS CARDS\n======================================== */\n/* Base Card Styles */\nion-card {\n  margin: 0;\n  border-radius: var(--glass-border-radius);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: var(--liquid-glass-shadow);\n  overflow: hidden;\n  position: relative;\n  transition: var(--glass-transition);\n  /* Glass reflection overlay */\n  /* Dynamic glass shimmer */\n}\nion-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.2;\n  pointer-events: none;\n  z-index: 1;\n}\nion-card::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%);\n  transform: rotate(-45deg);\n  animation: glassShine 3s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 1;\n}\nion-card:hover {\n  transform: translateY(-8px) scale(var(--glass-scale-hover));\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\nion-card:hover::before {\n  opacity: 0.4;\n}\nion-card:active {\n  transform: translateY(-4px) scale(var(--glass-scale-active));\n}\n@keyframes glassShine {\n  0% {\n    transform: translateX(-100%) translateY(-100%) rotate(-45deg);\n  }\n  100% {\n    transform: translateX(100%) translateY(100%) rotate(-45deg);\n  }\n}\n/* Filter Card */\n.filter-card {\n  background: linear-gradient(135deg, rgba(120, 119, 198, 0.15) 0%, var(--liquid-glass-bg) 100%);\n  border: 0.5px solid #d3d3d3;\n  border-radius: var(--glass-border-radius);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;\n}\n/* Search Card */\n.search-card {\n  background: linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, var(--liquid-glass-bg) 100%);\n}\n/* Table Card */\n.table-card {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, var(--liquid-glass-bg) 100%);\n  min-height: 400px;\n}\n/* Card Headers */\n.card-header {\n  background: var(--ion-color-primary) !important;\n  padding: 0.8rem 1rem;\n  position: relative;\n  z-index: 2;\n  /* Glass reflection on header */\n}\n.card-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);\n  pointer-events: none;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.card-title {\n  color: white;\n  font-weight: 700;\n  font-size: 1.1rem;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  flex: 0 0 auto;\n}\n/* Header Search Input */\n.header-search-input {\n  flex: 1;\n  max-width: 300px;\n  --background: rgba(255, 255, 255, 0.15);\n  --color: white;\n  --placeholder-color: rgba(255, 255, 255, 0.7);\n  --border-radius: 8px;\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  --min-height: 2rem;\n  --max-height: 2rem;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass input reflection */\n  /* Input text styling */\n}\n.header-search-input::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.header-search-input:hover {\n  --background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(255, 255, 255, 0.2) inset;\n}\n.header-search-input:focus-within {\n  --background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.5);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(255, 255, 255, 0.3) inset;\n}\n.header-search-input ion-icon {\n  color: rgba(255, 255, 255, 0.8);\n  margin-right: 0.5rem;\n  font-size: 1rem;\n}\n.header-search-input input {\n  color: white !important;\n}\n.header-search-input input::placeholder {\n  color: rgba(255, 255, 255, 0.7) !important;\n}\n/* Card Content */\n.compact-content {\n  padding: 1rem;\n  position: relative;\n  z-index: 2;\n}\n.table-content {\n  padding: 0;\n  position: relative;\n  z-index: 2;\n}\n/* ========================================\n   FIELD ROWS AND INPUTS\n======================================== */\n.field-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.8rem;\n  position: relative;\n  z-index: 2;\n}\n.field-row:last-child {\n  margin-bottom: 0;\n}\n.field-label-right {\n  min-width: 120px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: right;\n  font-size: 0.9rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n/* Glass Inputs */\n.mini-input {\n  flex: 1;\n  --background: var(--liquid-glass-bg-light);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  --min-height: 2.2rem;\n  --max-height: 2.2rem;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass input reflection */\n}\n.mini-input::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.mini-input:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 0 0 2px var(--glass-accent-primary) inset;\n}\n.mini-input:focus-within {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 122, 255, 0.2), 0 0 0 2px var(--glass-accent-primary) inset;\n}\n/* Search Input with Icon */\n.search-input ion-icon {\n  color: var(--glass-accent-primary);\n  margin-right: 0.5rem;\n}\n/* Search Input with Gray Border */\n.search-input-bordered {\n  --background: var(--liquid-glass-bg-light);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  --min-height: 2.2rem;\n  --max-height: 2.2rem;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid #d3d3d3;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass input reflection */\n}\n.search-input-bordered::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.search-input-bordered:hover {\n  transform: translateY(-2px);\n  border-color: #a9a9a9;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 0 0 2px var(--glass-accent-primary) inset;\n}\n.search-input-bordered:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 8px 20px rgba(0, 122, 255, 0.2), 0 0 0 2px var(--glass-accent-primary) inset;\n}\n.search-input-bordered ion-icon {\n  color: var(--glass-accent-primary);\n  margin-right: 0.5rem;\n}\n/* ========================================\n   SEGMENT CONTROLS\n======================================== */\n.filter-segment {\n  --background: var(--liquid-glass-bg);\n  --color: rgba(0, 0, 0, 0.8);\n  --color-checked: white;\n  --border-radius: var(--glass-border-radius-small);\n  --indicator-color: var(--ion-color-primary);\n  --indicator-color-checked: var(--ion-color-primary);\n  flex: 1;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  border-radius: var(--glass-border-radius-small);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.filter-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: rgba(0, 0, 0, 0.8);\n  --color-checked: white;\n  --border-radius: calc(var(--glass-border-radius-small) - 2px);\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass button reflection */\n}\n.filter-segment ion-segment-button::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  opacity: 0;\n  pointer-events: none;\n  transition: var(--glass-transition);\n  z-index: 1;\n}\n.filter-segment ion-segment-button.segment-button-checked::before {\n  opacity: 1;\n}\n.filter-segment ion-segment-button .segment-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n  position: relative;\n  z-index: 2;\n}\n.filter-segment ion-segment-button .segment-content ion-icon {\n  font-size: 1rem;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.filter-segment ion-segment-button .segment-content span {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.filter-segment ion-segment-button:hover {\n  transform: scale(1.02);\n}\n.filter-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 6px 15px rgba(var(--ion-color-primary-rgb), 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3) inset;\n}\n/* ========================================\n   GLASS BUTTONS\n======================================== */\n.button-row {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.8rem;\n  justify-content: center;\n  position: relative;\n  z-index: 2;\n}\n/* Date Filter Row */\n.date-filter-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.8rem;\n  position: relative;\n  z-index: 2;\n}\n.date-filter-row .date-input {\n  flex: 1;\n}\n.date-filter-row .spacer {\n  flex: 1;\n}\n.date-filter-row .search-btn {\n  flex: 0 0 auto;\n  margin-left: auto;\n}\n.mini-btn {\n  border-radius: var(--glass-border-radius-small);\n  font-size: 0.9rem;\n  font-weight: 700;\n  min-height: 2.8rem;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Base glass material */\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  /* Glass reflection */\n  /* Search Button */\n}\n.mini-btn::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-btn:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn:hover::before {\n  opacity: 0.5;\n}\n.mini-btn:active {\n  transform: translateY(-1px) scale(0.98);\n}\n.mini-btn.search-btn {\n  --background: transparent;\n  --color: var(--glass-accent-success);\n  --border-color: var(--glass-accent-success);\n  --border-width: 2px;\n  --border-style: solid;\n  background: transparent;\n  color: var(--glass-accent-success);\n  border: 2px solid var(--glass-accent-success);\n}\n.mini-btn.search-btn:hover {\n  --background: rgba(52, 199, 89, 0.1);\n  --color: var(--glass-accent-success);\n  background: rgba(52, 199, 89, 0.1);\n  box-shadow: 0 8px 20px rgba(52, 199, 89, 0.2), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.search-btn:active {\n  --background: rgba(52, 199, 89, 0.2);\n  background: rgba(52, 199, 89, 0.2);\n}\n/* ========================================\n   GLASS TABLE STYLES\n======================================== */\n.glass-table-container {\n  position: relative;\n  border-radius: var(--glass-border-radius-small);\n  overflow: hidden;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  /* Glass container reflection */\n}\n.glass-table-container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 30%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.glass-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  position: relative;\n  z-index: 2;\n  /* Special Cell Types */\n}\n.glass-table thead {\n  background: linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(120, 119, 198, 0.1) 100%);\n}\n.glass-table thead th {\n  padding: 1rem 0.8rem;\n  text-align: center;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 0.85rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  border-bottom: 2px solid var(--liquid-glass-border);\n  position: relative;\n  /* Glass header reflection */\n}\n.glass-table thead th::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  pointer-events: none;\n}\n.glass-table thead th ion-icon {\n  margin-left: 0.3rem;\n  font-size: 0.9rem;\n  vertical-align: middle;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.glass-table tbody tr {\n  transition: var(--glass-transition);\n}\n.glass-table tbody tr:hover:not(.loading-row) {\n  background: rgba(255, 255, 255, 0.1);\n  transform: scale(1.01);\n}\n.glass-table tbody tr:hover:not(.loading-row) td {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.glass-table tbody tr.loading-row td {\n  padding: 0.8rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.glass-table tbody tr.data-row td {\n  padding: 0.8rem;\n  text-align: center;\n  font-size: 0.85rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  color: rgba(0, 0, 0, 0.8);\n  position: relative;\n  /* Subtle cell glow */\n}\n.glass-table tbody tr.data-row td::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);\n  opacity: 0;\n  transition: var(--glass-transition);\n  pointer-events: none;\n}\n.glass-table tbody tr.data-row td:hover::before {\n  opacity: 1;\n}\n.glass-table .details-cell {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: right !important;\n  font-size: 0.8rem;\n}\n.glass-table .amount-cell {\n  font-weight: 700;\n  color: var(--glass-accent-success);\n  text-shadow: 0 0 10px rgba(52, 199, 89, 0.3);\n}\n.glass-table .account-cell {\n  font-weight: 600;\n  text-align: right !important;\n}\n.glass-table .account-cell.from-account {\n  color: var(--glass-accent-danger);\n}\n.glass-table .account-cell.to-account {\n  color: var(--glass-accent-success);\n}\n.glass-table .actions-cell {\n  padding: 0.5rem !important;\n}\n.glass-table .actions-cell .action-buttons {\n  display: flex;\n  gap: 0.3rem;\n  justify-content: center;\n  align-items: center;\n}\n.glass-table .actions-cell .action-buttons ion-button {\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  --min-height: 2rem;\n  --border-radius: 8px;\n  transition: var(--glass-transition);\n}\n.glass-table .actions-cell .action-buttons ion-button.edit-btn {\n  --color: var(--glass-accent-primary);\n}\n.glass-table .actions-cell .action-buttons ion-button.edit-btn:hover {\n  transform: scale(1.1);\n  --color: rgba(0, 122, 255, 1);\n}\n.glass-table .actions-cell .action-buttons ion-button.delete-btn {\n  --color: var(--glass-accent-danger);\n}\n.glass-table .actions-cell .action-buttons ion-button.delete-btn:hover {\n  transform: scale(1.1);\n  --color: rgba(255, 59, 48, 1);\n}\n.glass-table .actions-cell .action-buttons ion-button ion-icon {\n  font-size: 1.1rem;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n/* Type Badges */\n.type-badge {\n  padding: 0.2rem 0.8rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  background: var(--liquid-glass-bg);\n  border: 1px solid var(--liquid-glass-border);\n  color: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n.type-badge.type-receipt {\n  background: linear-gradient(135deg, rgba(52, 199, 89, 0.2), rgba(52, 199, 89, 0.1));\n  color: var(--glass-accent-success);\n  border-color: rgba(52, 199, 89, 0.3);\n}\n.type-badge.type-payment {\n  background: linear-gradient(135deg, rgba(255, 59, 48, 0.2), rgba(255, 59, 48, 0.1));\n  color: var(--glass-accent-danger);\n  border-color: rgba(255, 59, 48, 0.3);\n}\n/* ========================================\n   EMPTY STATE\n======================================== */\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n  position: relative;\n  /* Glass empty background */\n}\n.empty-state::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150px;\n  height: 150px;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  box-shadow: var(--liquid-glass-shadow);\n  animation: pulseGlass 3s ease-in-out infinite;\n  z-index: -1;\n}\n.empty-state .empty-icon {\n  font-size: 3rem;\n  color: rgba(0, 0, 0, 0.4);\n  margin-bottom: 1rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n}\n.empty-state h3 {\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 600;\n  margin: 0;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n/* ========================================\n   RESPONSIVE DESIGN\n======================================== */\n@media (max-width: 768px) {\n  .main-container {\n    padding: 1rem;\n    padding-top: 70px;\n  }\n\n  .form-container {\n    gap: 1rem;\n  }\n\n  .field-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .field-row .field-label-right {\n    min-width: auto;\n    text-align: left;\n  }\n\n  .date-filter-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .date-filter-row .spacer {\n    display: none;\n  }\n  .date-filter-row .search-btn {\n    margin-left: 0;\n    align-self: stretch;\n  }\n\n  .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .header-content .card-title {\n    text-align: center;\n  }\n  .header-content .header-search-input {\n    max-width: none;\n  }\n\n  .filter-segment ion-segment-button .segment-content span {\n    font-size: 0.7rem;\n  }\n\n  .glass-table-container {\n    overflow-x: auto;\n  }\n\n  .glass-table {\n    min-width: 800px;\n  }\n  .glass-table th, .glass-table td {\n    font-size: 0.75rem;\n    padding: 0.5rem 0.4rem;\n  }\n  .glass-table .details-cell {\n    max-width: 150px;\n  }\n}\n@media (max-width: 480px) {\n  .main-container {\n    padding: 0.5rem;\n    padding-top: 65px;\n  }\n\n  .glass-table {\n    min-width: 700px;\n  }\n  .glass-table th, .glass-table td {\n    font-size: 0.7rem;\n    padding: 0.4rem 0.3rem;\n  }\n}\n.card-header-with-export {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: var(--liquid-glass-bg);\n  border-bottom: 1px solid var(--liquid-glass-border);\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n          backdrop-filter: blur(var(--glass-blur));\n}\n.card-header-with-export .header-left {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex: 1;\n}\n.card-header-with-export .header-left .card-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.card-header-with-export .header-left .header-search-input {\n  max-width: 300px;\n  --background: rgba(255, 255, 255, 0.1);\n  --color: var(--ion-color-dark);\n  --border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZW5kLXJlY29yZDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7MENBQUE7QUFLQSxnQ0FBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtEQUFBO0VBQ0EsMkNBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esa0RBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBRUEsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsNkNBQUE7RUFFQSx5QkFBQTtFQUNBLDJEQUFBO0VBQ0EsaUVBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBSEY7QUFNQSw4QkFBQTtBQUNBO0VBQ0U7SUFDRSxzQ0FBQTtJQUNBLGlEQUFBO0lBQ0EsMENBQUE7SUFDQSwrQ0FBQTtJQUNBLG9EQUFBO0lBQ0Esa0RBQUE7RUFIRjtBQUNGO0FBTUE7OzBDQUFBO0FBSUEsNkJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEY7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBRUEsMEJBQUE7RUFDQSxnSUFBQTtFQU9BLGlDQUFBO0VBQ0EsaURBQUE7RUFFQSxxQkFBQTtBQWJKO0FBY0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7RUFLQSxZQUFBO0VBQ0Esb0JBQUE7QUFoQk47QUFxQkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBbEJGO0FBcUJBLHNCQUFBO0FBQ0E7RUFDRSx1Q0FBQTtFQUNBLDZD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T0U7SUFDRSxnQkFBQTtFQXZPSjtBQUNGO0FBMk9BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUF6T0Y7O0VBNE9BO0lBQ0UsZ0JBQUE7RUF6T0Y7RUEyT0U7SUFDRSxpQkFBQTtJQUNBLHNCQUFBO0VBek9KO0FBQ0Y7QUE4T0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQTVPRjtBQThPRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBNU9KO0FBOE9JO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQTVPTjtBQStPSTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBN09OIiwiZmlsZSI6InNwZW5kLXJlY29yZDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQVBQTEUgTElRVUlEIEdMQVNTIERFU0lHTiBTWVNURU1cbiAgIEluc3BpcmVkIGJ5IEFwcGxlJ3MgdmlzaW9uT1MgTGlxdWlkIEdsYXNzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qIENvcmUgTGlxdWlkIEdsYXNzIFZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICAvKiBHbGFzcyBNYXRlcmlhbCBQcm9wZXJ0aWVzICovXG4gIC0tbGlxdWlkLWdsYXNzLWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAtLWxpcXVpZC1nbGFzcy1iZy1saWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgLS1saXF1aWQtZ2xhc3MtYmctZGFyazogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLS1saXF1aWQtZ2xhc3MtYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIC0tbGlxdWlkLWdsYXNzLXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgXG4gIC8qIEJsdXIgYW5kIEVmZmVjdHMgKi9cbiAgLS1nbGFzcy1ibHVyOiAyMHB4O1xuICAtLWdsYXNzLWJsdXItc3Ryb25nOiA0MHB4O1xuICAtLWdsYXNzLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbDogMTJweDtcbiAgXG4gIC8qIER5bmFtaWMgQ29sb3JzICovXG4gIC0tZ2xhc3MtYWNjZW50LXByaW1hcnk6IHJnYmEoMCwgMTIyLCAyNTUsIDAuOCk7XG4gIC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3M6IHJnYmEoNTIsIDE5OSwgODksIDAuOCk7XG4gIC0tZ2xhc3MtYWNjZW50LWRhbmdlcjogcmdiYSgyNTUsIDU5LCA0OCwgMC44KTtcbiAgXG4gIC8qIEFuaW1hdGlvbiBQcm9wZXJ0aWVzICovXG4gIC0tZ2xhc3MtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAtLWdsYXNzLXRyYW5zaXRpb24tZmFzdDogYWxsIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgLS1nbGFzcy1zY2FsZS1ob3ZlcjogMS4wMjtcbiAgLS1nbGFzcy1zY2FsZS1hY3RpdmU6IDAuOTg7XG59XG5cbi8qIERhcmsgTW9kZSBHbGFzcyBWYXJpYWJsZXMgKi9cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgOnJvb3Qge1xuICAgIC0tbGlxdWlkLWdsYXNzLWJnOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmctZGFyazogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIC0tbGlxdWlkLWdsYXNzLWJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIC0tbGlxdWlkLWdsYXNzLXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgVFJBTlNQQVJFTlQgSEVBREVSIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKiBUcmFuc3BhcmVudCBHbGFzcyBIZWFkZXIgKi9cbi50cmFuc3BhcmVudC1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIFxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIC0tbWluLWhlaWdodDogNjBweDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgXG4gICAgLyogR2xhc3MgbWF0ZXJpYWwgZWZmZWN0ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSAwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSAxMDAlXG4gICAgKTtcbiAgICBcbiAgICAvKiBTdWJ0bGUgYm9yZGVyIG9ubHkgYXQgYm90dG9tICovXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBcbiAgICAvKiBHbGFzcyByZWZsZWN0aW9uICovXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDE4MGRlZyxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDAlLFxuICAgICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgICApO1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi50cmFuc3BhcmVudC10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAtLW1pbi1oZWlnaHQ6IDYwcHg7XG59XG5cbi8qIEdsYXNzIE1lbnUgQnV0dG9uICovXG4uZ2xhc3MtbWVudS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUoMS4wNSk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOTUpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAgIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIFxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkpO1xuICB9XG59XG5cbi8qIEdsYXNzIFRpdGxlICovXG4uZ2xhc3MtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xufVxuXG4vKiBNb2Rlcm4gQ29udGVudCB3aXRoIEdsYXNzIEJhY2tncm91bmQgKi9cbi5tb2Rlcm4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgcmdiYSgxMjAsIDExOSwgMTk4LCAwLjEpIDAlLCBcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDUwJSwgXG4gICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSkgMTAwJSk7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEFuaW1hdGVkIEJhY2tncm91bmQgR2xhc3MgRWZmZWN0ICovXG4ubW9kZXJuLWNvbnRlbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgNTAlLCByZ2JhKDEyMCwgMTE5LCAxOTgsIDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQwJSA4MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIGFuaW1hdGlvbjogZ2xhc3NTaGltbWVyIDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMDtcbn1cblxuQGtleWZyYW1lcyBnbGFzc1NoaW1tZXIge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuMzsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjY7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cbn1cblxuLyogR2xhc3MgTG9hZGluZyBTdGF0ZSAqL1xuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNTB2aDtcbiAgZ2FwOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAvKiBHbGFzcyBsb2FkaW5nIGJhY2tncm91bmQgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWxpcXVpZC1nbGFzcy1zaGFkb3cpO1xuICAgIGFuaW1hdGlvbjogcHVsc2VHbGFzcyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICBcbiAgaW9uLXNwaW5uZXIge1xuICAgIC0tY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMjBweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjMpKTtcbiAgfVxuICBcbiAgLmxvYWRpbmctdGV4dCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDkwZGVnLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjgpIDAlLFxuICAgICAgcmdiYSgwLCAxMjIsIDI1NSwgMC44KSA1MCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMTAwJVxuICAgICk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogdGV4dFNoaW1tZXIgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZUdsYXNzIHtcbiAgMCUsIDEwMCUgeyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTsgXG4gICAgb3BhY2l0eTogMC41OyBcbiAgfVxuICA1MCUgeyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEpOyBcbiAgICBvcGFjaXR5OiAwLjg7IFxuICB9XG59XG5cbkBrZXlmcmFtZXMgdGV4dFNoaW1tZXIge1xuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDsgfVxufVxuXG4vKiBNYWluIENvbnRhaW5lciB3aXRoIEdsYXNzIEVudmlyb25tZW50ICovXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAycmVtO1xuICBwYWRkaW5nLXRvcDogODBweDsgLyogQWNjb3VudCBmb3IgdHJhbnNwYXJlbnQgaGVhZGVyICovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogRm9ybSBDb250YWluZXIgd2l0aCBGbG9hdGluZyBFZmZlY3QgKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgZ2FwOiAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgXG4gIC8qIEZsb2F0aW5nIGFuaW1hdGlvbiAqL1xuICBhbmltYXRpb246IGNvbnRhaW5lckZsb2F0IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGNvbnRhaW5lckZsb2F0IHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTElRVUlEIEdMQVNTIENBUkRTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qIEJhc2UgQ2FyZCBTdHlsZXMgKi9cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tbGlxdWlkLWdsYXNzLXNoYWRvdyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIFxuICAvKiBHbGFzcyByZWZsZWN0aW9uIG92ZXJsYXkgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLyogRHluYW1pYyBnbGFzcyBzaGltbWVyICovXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNTAlO1xuICAgIGxlZnQ6IC01MCU7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiAyMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDQ1ZGVnLFxuICAgICAgdHJhbnNwYXJlbnQgNDAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDUwJSxcbiAgICAgIHRyYW5zcGFyZW50IDYwJVxuICAgICk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICBhbmltYXRpb246IGdsYXNzU2hpbmUgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHNjYWxlKHZhcigtLWdsYXNzLXNjYWxlLWhvdmVyKSk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gICAgICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSh2YXIoLS1nbGFzcy1zY2FsZS1hY3RpdmUpKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdsYXNzU2hpbmUge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgdHJhbnNsYXRlWSgtMTAwJSkgcm90YXRlKC00NWRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZSgtNDVkZWcpOyB9XG59XG5cbi8qIEZpbHRlciBDYXJkICovXG4uZmlsdGVyLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHJnYmEoMTIwLCAxMTksIDE5OCwgMC4xNSkgMCUsXG4gICAgdmFyKC0tbGlxdWlkLWdsYXNzLWJnKSAxMDAlXG4gICk7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2QzZDNkMztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG59XG5cbi8qIFNlYXJjaCBDYXJkICovXG4uc2VhcmNoLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjE1KSAwJSxcbiAgICB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpIDEwMCVcbiAgKTtcbn1cblxuLyogVGFibGUgQ2FyZCAqL1xuLnRhYmxlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSxcbiAgICB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpIDEwMCVcbiAgKTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi8qIENhcmQgSGVhZGVycyAqL1xuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIFxuICAvKiBHbGFzcyByZWZsZWN0aW9uIG9uIGhlYWRlciAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4uaGVhZGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDA7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4vKiBIZWFkZXIgU2VhcmNoIElucHV0ICovXG4uaGVhZGVyLXNlYXJjaC1pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMC44cmVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjhyZW07XG4gIC0tbWluLWhlaWdodDogMnJlbTtcbiAgLS1tYXgtaGVpZ2h0OiAycmVtO1xuICBcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3gtc2hhZG93OiBcbiAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIFxuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLyogR2xhc3MgaW5wdXQgcmVmbGVjdGlvbiAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAmOmhvdmVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgIDAgMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgaW5zZXQ7XG4gIH1cbiAgXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgIDAgMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIH1cbiAgXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICBcbiAgLyogSW5wdXQgdGV4dCBzdHlsaW5nICovXG4gIGlucHV0IHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBcbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qIENhcmQgQ29udGVudCAqL1xuLmNvbXBhY3QtY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLnRhYmxlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEZJRUxEIFJPV1MgQU5EIElOUFVUU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZmllbGQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4uZmllbGQtbGFiZWwtcmlnaHQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4vKiBHbGFzcyBJbnB1dHMgKi9cbi5taW5pLWlucHV0IHtcbiAgZmxleDogMTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQpO1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xuICAtLXBhZGRpbmctZW5kOiAxcmVtO1xuICAtLW1pbi1oZWlnaHQ6IDIuMnJlbTtcbiAgLS1tYXgtaGVpZ2h0OiAyLjJyZW07XG4gIFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICBcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gIC8qIEdsYXNzIGlucHV0IHJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgMCAwIDAgMnB4IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KSBpbnNldDtcbiAgfVxuICBcbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDIwcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4yKSxcbiAgICAgIDAgMCAwIDJweCB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSkgaW5zZXQ7XG4gIH1cbn1cblxuLyogU2VhcmNoIElucHV0IHdpdGggSWNvbiAqL1xuLnNlYXJjaC1pbnB1dCB7XG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG59XG5cbi8qIFNlYXJjaCBJbnB1dCB3aXRoIEdyYXkgQm9yZGVyICovXG4uc2VhcmNoLWlucHV0LWJvcmRlcmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQpO1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xuICAtLXBhZGRpbmctZW5kOiAxcmVtO1xuICAtLW1pbi1oZWlnaHQ6IDIuMnJlbTtcbiAgLS1tYXgtaGVpZ2h0OiAyLjJyZW07XG4gIFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICBib3gtc2hhZG93OiBcbiAgICAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gIFxuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLyogR2xhc3MgaW5wdXQgcmVmbGVjdGlvbiAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTlhOWE5O1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgMCAwIDAgMnB4IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KSBpbnNldDtcbiAgfVxuICBcbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDIwcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4yKSxcbiAgICAgIDAgMCAwIDJweCB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSkgaW5zZXQ7XG4gIH1cbiAgXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFNFR01FTlQgQ09OVFJPTFNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmZpbHRlci1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgXG4gIGZsZXg6IDE7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICBcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpIC0gMnB4KTtcbiAgICBcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgICAvKiBHbGFzcyBidXR0b24gcmVmbGVjdGlvbiAqL1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxODBkZWcsXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICAgKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgXG4gICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkOjpiZWZvcmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgXG4gICAgLnNlZ21lbnQtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuMnJlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgICBcbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgYm94LXNoYWRvdzogXG4gICAgICAgIDAgNnB4IDE1cHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjMpLFxuICAgICAgICAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBHTEFTUyBCVVRUT05TXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5idXR0b24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi8qIERhdGUgRmlsdGVyIFJvdyAqL1xuLmRhdGUtZmlsdGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMC44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIFxuICAuZGF0ZS1pbnB1dCB7XG4gICAgZmxleDogMTtcbiAgfVxuICBcbiAgLnNwYWNlciB7XG4gICAgZmxleDogMTtcbiAgfVxuICBcbiAgLnNlYXJjaC1idG4ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG59XG5cbi5taW5pLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWluLWhlaWdodDogMi44cmVtO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLyogQmFzZSBnbGFzcyBtYXRlcmlhbCAqL1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKTtcbiAgXG4gIGJveC1zaGFkb3c6IFxuICAgIDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgXG4gIC8qIEdsYXNzIHJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgMCAwO1xuICB9XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgc2NhbGUoMS4wMik7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gICAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cbiAgXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgc2NhbGUoMC45OCk7XG4gIH1cbiAgXG4gIC8qIFNlYXJjaCBCdXR0b24gKi9cbiAgJi5zZWFyY2gtYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1zdWNjZXNzKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3MpO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtc3VjY2Vzcyk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3MpO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDUyLCAxOTksIDg5LCAwLjEpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3MpO1xuICAgICAgXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxOTksIDg5LCAwLjEpO1xuICAgICAgYm94LXNoYWRvdzogXG4gICAgICAgIDAgOHB4IDIwcHggcmdiYSg1MiwgMTk5LCA4OSwgMC4yKSxcbiAgICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoNTIsIDE5OSwgODksIDAuMik7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxOTksIDg5LCAwLjIpO1xuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBHTEFTUyBUQUJMRSBTVFlMRVNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmdsYXNzLXRhYmxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBcbiAgLyogR2xhc3MgY29udGFpbmVyIHJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cblxuLmdsYXNzLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIFxuICB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTM1ZGVnLFxuICAgICAgcmdiYSgwLCAxMjIsIDI1NSwgMC4xKSAwJSxcbiAgICAgIHJnYmEoMTIwLCAxMTksIDE5OCwgMC4xKSAxMDAlXG4gICAgKTtcbiAgICBcbiAgICB0aCB7XG4gICAgICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcbiAgICAgIC8qIEdsYXNzIGhlYWRlciByZWZsZWN0aW9uICovXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDE4MGRlZyxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsXG4gICAgICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICAgICApO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHRib2R5IHtcbiAgICB0ciB7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICAgIFxuICAgICAgJjpob3Zlcjpub3QoLmxvYWRpbmctcm93KSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgICAgICAgXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgICYubG9hZGluZy1yb3cge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMC44cmVtO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgICYuZGF0YS1yb3cge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMC44cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgXG4gICAgICAgICAgLyogU3VidGxlIGNlbGwgZ2xvdyAqL1xuICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDUwJSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIFNwZWNpYWwgQ2VsbCBUeXBlcyAqL1xuICAuZGV0YWlscy1jZWxsIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIFxuICAuYW1vdW50LWNlbGwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1zdWNjZXNzKTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1MiwgMTk5LCA4OSwgMC4zKTtcbiAgfVxuICBcbiAgLmFjY291bnQtY2VsbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIFxuICAgICYuZnJvbS1hY2NvdW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtZGFuZ2VyKTtcbiAgICB9XG4gICAgXG4gICAgJi50by1hY2NvdW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtc3VjY2Vzcyk7XG4gICAgfVxuICB9XG4gIFxuICAuYWN0aW9ucy1jZWxsIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBcbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMC4zcmVtO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVyZW07XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDAuNXJlbTtcbiAgICAgICAgLS1taW4taGVpZ2h0OiAycmVtO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgXG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgICAgICBcbiAgICAgICAgJi5lZGl0LWJ0biB7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgLS1jb2xvcjogcmdiYSgwLCAxMjIsIDI1NSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmLmRlbGV0ZS1idG4ge1xuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1kYW5nZXIpO1xuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgLS1jb2xvcjogcmdiYSgyNTUsIDU5LCA0OCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBUeXBlIEJhZGdlcyAqL1xuLnR5cGUtYmFkZ2Uge1xuICBwYWRkaW5nOiAwLjJyZW0gMC44cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgXG4gICYudHlwZS1yZWNlaXB0IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDUyLCAxOTksIDg5LCAwLjIpLCByZ2JhKDUyLCAxOTksIDg5LCAwLjEpKTtcbiAgICBjb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3MpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1MiwgMTk5LCA4OSwgMC4zKTtcbiAgfVxuICBcbiAgJi50eXBlLXBheW1lbnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LCA1OSwgNDgsIDAuMiksIHJnYmEoMjU1LCA1OSwgNDgsIDAuMSkpO1xuICAgIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtZGFuZ2VyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1OSwgNDgsIDAuMyk7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgRU1QVFkgU1RBVEVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgLyogR2xhc3MgZW1wdHkgYmFja2dyb3VuZCAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbGlxdWlkLWdsYXNzLXNoYWRvdyk7XG4gICAgYW5pbWF0aW9uOiBwdWxzZUdsYXNzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gIFxuICAuZW1wdHktaWNvbiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICB9XG4gIFxuICBoMyB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBSRVNQT05TSVZFIERFU0lHTlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICB9XG4gIFxuICAuZm9ybS1jb250YWluZXIge1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICBcbiAgLmZpZWxkLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBcbiAgICAuZmllbGQtbGFiZWwtcmlnaHQge1xuICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbiAgXG4gIC5kYXRlLWZpbHRlci1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgXG4gICAgLnNwYWNlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoLWJ0biB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgfVxuICB9XG4gIFxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuaGVhZGVyLXNlYXJjaC1pbnB1dCB7XG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAuZmlsdGVyLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAuc2VnbWVudC1jb250ZW50IHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5nbGFzcy10YWJsZS1jb250YWluZXIge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgXG4gIC5nbGFzcy10YWJsZSB7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICBcbiAgICB0aCwgdGQge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgcGFkZGluZzogMC41cmVtIDAuNHJlbTtcbiAgICB9XG4gICAgXG4gICAgLmRldGFpbHMtY2VsbCB7XG4gICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDY1cHg7XG4gIH1cbiAgXG4gIC5nbGFzcy10YWJsZSB7XG4gICAgbWluLXdpZHRoOiA3MDBweDtcbiAgICBcbiAgICB0aCwgdGQge1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMC4zcmVtO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFeHBvcnQgYnV0dG9ucyBzdHlsaW5nXG4uY2FyZC1oZWFkZXItd2l0aC1leHBvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcblxuICAuaGVhZGVyLWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gICAgZmxleDogMTtcblxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuXG4gICAgLmhlYWRlci1zZWFyY2gtaW5wdXQge1xuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIH1cbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 71720:
/*!******************************************************************!*\
  !*** ./src/app/spend-record2/spend-record2.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"glass-menu-button\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"glass-title\">سجل سندات القبض والدفع</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info\" class=\"main-container\">\n    <div class=\"form-container\">\n      <!-- Filter Card -->\n      <ion-card class=\"filter-card\">\n        <ion-card-content class=\"compact-content\">\n          <!-- Filter Type Segment -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">نوع البحث</ion-label>\n            <ion-segment [(ngModel)]=\"radioVal\" (ionChange)=\"radioChange($event)\" class=\"filter-segment\">\n              <ion-segment-button value=\"0\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"time-outline\"></ion-icon>\n                  <span>حديثة</span>\n                </div>\n              </ion-segment-button>\n              <ion-segment-button value=\"1\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\n                  <span>بحث في تاريخ</span>\n                </div>\n              </ion-segment-button>\n              <ion-segment-button value=\"2\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"calendar-number-outline\"></ion-icon>\n                  <span>بحث في فترة</span>\n                </div>\n              </ion-segment-button>\n            </ion-segment>\n          </div>\n          \n          <!-- Date Filter Row for Recent Records -->\n          <div class=\"date-filter-row\" *ngIf=\"radioVal == '0'\">\n            <div class=\"spacer\"></div>\n            <ion-button \n              (click)=\"search()\"\n              fill=\"outline\"\n              class=\"mini-btn search-btn\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              بحث\n            </ion-button>\n          </div>\n          \n          <!-- Date Filter Row for Single Date -->\n          <div class=\"date-filter-row\" *ngIf=\"radioVal == '1'\">\n            <ion-input \n              type=\"date\" \n              [(ngModel)]=\"startingDate\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            <ion-button \n              (click)=\"search()\"\n              fill=\"outline\"\n              class=\"mini-btn search-btn\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              بحث\n            </ion-button>\n          </div>\n          \n          <!-- Date Filter Row for Date Range -->\n          <div class=\"date-filter-row\" *ngIf=\"radioVal == '2'\">\n            <ion-input \n              type=\"date\" \n              [(ngModel)]=\"startingDate\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            <ion-input \n              type=\"date\" \n              [(ngModel)]=\"endDate\"\n              class=\"mini-input date-input\">\n            </ion-input>\n            <ion-button \n              (click)=\"search()\"\n              fill=\"outline\"\n              class=\"mini-btn search-btn\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              بحث\n            </ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      \n      \n      <!-- Records Table Card -->\n      <ion-card class=\"table-card\" *ngIf=\"searchMode == false\" color=\"primary\">\n        <ion-card-header class=\"card-header ion-no-padding\">\n          <div class=\"card-header-with-export\">\n            <div class=\"header-left\">\n              <ion-card-title class=\"card-title\">سجل السندات</ion-card-title>\n              <ion-input \n                [(ngModel)]=\"searchTerm\" \n                (ionChange)=\"searchItem($event)\" \n                placeholder=\"بحث في البيانات...\"\n                class=\"header-search-input\">\n                <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n              </ion-input>\n            </div>\n            <app-export-buttons \n              [hasData]=\"payArray && payArray.length > 0\"\n              [isLoading]=\"loading\"\n              (exportPDF)=\"exportToPDF()\"\n              (exportExcel)=\"exportToExcel()\">\n            </app-export-buttons>\n          </div>\n        </ion-card-header>\n        <ion-card-content class=\"table-content\">\n          <!-- Glass Table -->\n          <div class=\"glass-table-container\">\n            <table class=\"glass-table\">\n              <thead>\n                <tr>\n                  <th>التسلسل</th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_date')\">\n                    <ion-icon [name]=\"getSortIcon('j_date')\" class=\"sort-icon\"></ion-icon>\n                    التاريخ\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_type')\">\n                    <ion-icon [name]=\"getSortIcon('j_type')\" class=\"sort-icon\"></ion-icon>\n                    نوع السند\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_details')\">\n                    <ion-icon [name]=\"getSortIcon('j_details')\" class=\"sort-icon\"></ion-icon>\n                    البيان\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_pay')\">\n                    <ion-icon [name]=\"getSortIcon('j_pay')\" class=\"sort-icon\"></ion-icon>\n                    المبلغ\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('to1')\">\n                    <ion-icon [name]=\"getSortIcon('to1')\" class=\"sort-icon\"></ion-icon>\n                    من <ion-icon name=\"arrow-up-outline\" color=\"danger\"></ion-icon>\n                  </th>  \n                  <th class=\"sortable-header\" (click)=\"sortBy('from1')\">\n                    <ion-icon [name]=\"getSortIcon('from1')\" class=\"sort-icon\"></ion-icon>\n                    إلى <ion-icon name=\"arrow-down-outline\" color=\"success\"></ion-icon>\n                  </th>\n                  <th>العمليات</th>\n                </tr>\n              </thead>\n              <tbody>\n                <!-- Loading Rows -->\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                \n                <!-- Data Rows -->\n                <tr *ngFor=\"let pay of sortedPayArray; let i = index\" class=\"data-row\">\n                  <td>{{i+1}}</td>\n                  <td>{{pay.j_date}}</td>\n                  <td><span class=\"type-badge\" [class.type-receipt]=\"pay.j_type == 'سند قبض'\" [class.type-payment]=\"pay.j_type == 'سند دفع'\">{{pay.j_type}}</span></td>\n                  <td class=\"details-cell\">{{pay.j_details}}</td>\n                  <td class=\"amount-cell\">{{pay.j_pay}}</td>\n                  <td class=\"account-cell from-account\">{{pay.to1}}</td>\n                  <td class=\"account-cell to-account\">{{pay.from1}}</td>\n                  <td class=\"actions-cell\">\n                    <div class=\"action-buttons\">\n                      <ion-button fill=\"clear\" size=\"small\" class=\"edit-btn\" (click)=\"editJournal(pay.j_id)\">\n                        <ion-icon name=\"create-outline\"></ion-icon>\n                      </ion-button>\n                      <ion-button fill=\"clear\" size=\"small\" class=\"delete-btn\" (click)=\"delete(pay.j_ref)\">\n                        <ion-icon name=\"trash-outline\"></ion-icon>\n                      </ion-button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            \n            <!-- Empty State -->\n            <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n              <ion-icon name=\"archive-outline\" class=\"empty-icon\"></ion-icon>\n              <h3>لا توجد سجلات</h3>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      \n      <!-- Search Results Table Card -->\n      <ion-card class=\"table-card\" *ngIf=\"searchMode == true\" color=\"primary\">\n        <ion-card-header class=\"card-header\">\n          <div class=\"header-content\">\n            <ion-card-title class=\"card-title\">نتائج البحث</ion-card-title>\n            <ion-input \n              [(ngModel)]=\"searchTerm\" \n              (ionChange)=\"searchItem($event)\" \n              placeholder=\"بحث في البيانات...\"\n              class=\"header-search-input\">\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n            </ion-input>\n          </div>\n        </ion-card-header>\n        <ion-card-content class=\"table-content\">\n          <!-- Glass Table -->\n          <div class=\"glass-table-container\">\n            <table class=\"glass-table\">\n              <thead>\n                <tr>\n                  <th>التسلسل</th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_date')\">\n                    <ion-icon [name]=\"getSortIcon('j_date')\" class=\"sort-icon\"></ion-icon>\n                    التاريخ\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_type')\">\n                    <ion-icon [name]=\"getSortIcon('j_type')\" class=\"sort-icon\"></ion-icon>\n                    نوع السند\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_details')\">\n                    <ion-icon [name]=\"getSortIcon('j_details')\" class=\"sort-icon\"></ion-icon>\n                    البيان\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('j_pay')\">\n                    <ion-icon [name]=\"getSortIcon('j_pay')\" class=\"sort-icon\"></ion-icon>\n                    المبلغ\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('to1')\">\n                    <ion-icon [name]=\"getSortIcon('to1')\" class=\"sort-icon\"></ion-icon>\n                    من <ion-icon name=\"arrow-up-outline\" color=\"danger\"></ion-icon>\n                  </th>  \n                  <th class=\"sortable-header\" (click)=\"sortBy('from1')\">\n                    <ion-icon [name]=\"getSortIcon('from1')\" class=\"sort-icon\"></ion-icon>\n                    إلى <ion-icon name=\"arrow-down-outline\" color=\"success\"></ion-icon>\n                  </th>\n                  <th>العمليات</th>\n                </tr>\n              </thead>\n              <tbody>\n                <!-- Loading Rows -->\n                <tr *ngIf=\"loading\" class=\"loading-row\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                </tr>\n                \n                <!-- Search Results Data Rows -->\n                <tr *ngFor=\"let pay of searchResult; let i = index\" class=\"data-row\">\n                  <td>{{i+1}}</td>\n                  <td>{{pay.j_date}}</td>\n                  <td><span class=\"type-badge\" [class.type-receipt]=\"pay.j_type == 'سند قبض'\" [class.type-payment]=\"pay.j_type == 'سند دفع'\">{{pay.j_type}}</span></td>\n                  <td class=\"details-cell\">{{pay.j_details}}</td>\n                  <td class=\"amount-cell\">{{pay.j_pay}}</td>\n                  <td class=\"account-cell from-account\">{{pay.to1}}</td>\n                  <td class=\"account-cell to-account\">{{pay.from1}}</td>\n                  <td class=\"actions-cell\">\n                    <div class=\"action-buttons\">\n                      <ion-button fill=\"clear\" size=\"small\" class=\"delete-btn\" (click)=\"delete(pay.j_ref)\">\n                        <ion-icon name=\"trash-outline\"></ion-icon>\n                      </ion-button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            \n            <!-- Empty State -->\n            <div class=\"empty-state\" *ngIf=\"showEmpty && !loading\">\n              <ion-icon name=\"archive-outline\" class=\"empty-icon\"></ion-icon>\n              <h3>لا توجد نتائج</h3>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_spend-record2_spend-record2_module_ts.js.map
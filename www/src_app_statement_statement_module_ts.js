"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_statement_statement_module_ts"],{

/***/ 84862:
/*!*******************************************************!*\
  !*** ./src/app/statement/statement-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatementPageRoutingModule": () => (/* binding */ StatementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _statement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statement.page */ 21333);




const routes = [
    {
        path: '',
        component: _statement_page__WEBPACK_IMPORTED_MODULE_0__.StatementPage
    }
];
let StatementPageRoutingModule = class StatementPageRoutingModule {
};
StatementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StatementPageRoutingModule);



/***/ }),

/***/ 48925:
/*!***********************************************!*\
  !*** ./src/app/statement/statement.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatementPageModule": () => (/* binding */ StatementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _statement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statement-routing.module */ 84862);
/* harmony import */ var _statement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement.page */ 21333);







let StatementPageModule = class StatementPageModule {
};
StatementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _statement_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatementPageRoutingModule
        ],
        declarations: [_statement_page__WEBPACK_IMPORTED_MODULE_1__.StatementPage]
    })
], StatementPageModule);



/***/ }),

/***/ 21333:
/*!*********************************************!*\
  !*** ./src/app/statement/statement.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatementPage": () => (/* binding */ StatementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _statement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statement.page.html?ngResource */ 7858);
/* harmony import */ var _statement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement.page.scss?ngResource */ 38044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);










let StatementPage = class StatementPage {
    constructor(alertController, rout, storage, modalController, loadingController, datePipe, api, toast) {
        this.alertController = alertController;
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.sub_account = [];
        this.payArray = [];
        this.purchase = [];
        this.jdetailsFrom = [];
        this.jdetailsTo = [];
        this.sales = [];
        this.printArr = [];
        this.showEmpty = false;
        this.printMode = false;
        this.itemList = [];
        this.radioVal = 0;
        this.loading = false;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", debit: "", credit: "" };
        this.sums = { debitTot: 0, creditTot: 0 };
        this.getAppInfo();
        let d = new Date;
        this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd');
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
                this.getAllAccount();
            }
        });
    }
    ionViewDidEnter() {
        //console.log('ionViewDidEnter')
        this.getAppInfo();
    }
    ngOnInit() {
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
                debit: fl[0]['debit'],
                credit: fl[0]['credit']
            };
            //console.log( this.selectedAccount);
            this.payArray = [];
        }
        else {
            this.presentToast(' خطأ في اسم الحساب ', 'danger');
        }
    }
    getAllAccount() {
        this.api.getAllAccounts(this.store_info.id, this.year.id).subscribe(data => {
            //console.log('getAllAccounts',data)
            let res = data;
            this.sub_account = res['data'];
            this.prepareCurrentBalnces();
        }, (err) => {
            //console.log(err);
        });
    }
    prepareCurrentBalnces() {
        for (let i = 0; i < this.sub_account.length; i++) {
            const element = this.sub_account[i];
            let debitTot = +element.fromDebitTot + +element.toDebitTot;
            let creditTot = +element.fromCreditTot + +element.toCreditTot;
            if (element.sub_type == "debit") {
                let bl = (+element.sub_balance + +debitTot) - +creditTot;
                if (bl > 0) {
                    element.debit = bl;
                    element.credit = 0;
                }
                else if (bl < 0) {
                    bl = bl * -1;
                    element.debit = 0;
                    element.credit = bl;
                }
                else if (bl == 0) {
                    element.debit = bl;
                    element.credit = 0;
                }
            }
            else if (element.sub_type == "credit") {
                let bl = (+element.sub_balance + +creditTot) - +debitTot;
                if (bl > 0) {
                    element.debit = 0;
                    element.credit = bl;
                }
                else if (bl < 0) {
                    bl = bl * -1;
                    element.debit = bl;
                    element.credit = 0;
                }
                else if (bl == 0) {
                    element.debit = 0;
                    element.credit = bl;
                }
            }
        }
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
    getTopJto() {
        this.jdetailsTo = [];
        this.loading = true;
        this.api.getTopJTo(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.jdetailsTo = res['data'];
                this.jdetailsTo = this.jdetailsTo.filter(x => x.ac_id == this.selectedAccount.id);
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
                this.jdetailsFrom = this.jdetailsFrom.filter(x => x.ac_id == this.selectedAccount.id);
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
                this.jdetailsFrom = this.jdetailsFrom.filter(x => x.ac_id == this.selectedAccount.id);
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
                this.jdetailsTo = this.jdetailsTo.filter(x => x.ac_id == this.selectedAccount.id);
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
                this.jdetailsTo = this.jdetailsTo.filter(x => x.ac_id == this.selectedAccount.id);
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
                this.jdetailsFrom = this.jdetailsFrom.filter(x => x.ac_id == this.selectedAccount.id);
            }
            this.prepareArray();
        }, (err) => {
            //console.log(err);
            this.loading = false;
        }, () => {
        });
    }
    prepareArray() {
        //console.log('im here' ,  this.jdetailsFrom ,this.jdetailsTo)
        if (this.jdetailsFrom.length > 0) {
            for (let i = 0; i < this.jdetailsFrom.length; i++) {
                const element = this.jdetailsFrom[i];
                this.payArray.push(element);
            }
        }
        if (this.jdetailsTo.length > 0) {
            for (let i = 0; i < this.jdetailsTo.length; i++) {
                const element = this.jdetailsTo[i];
                this.payArray.push(element);
            }
        }
        //console.log('im here' ,  this.payArray )
        this.payArray = this.payArray.sort((a, b) => (a.j_date > b.j_date ? -1 : 1));
        this.getTotal();
        if (this.payArray.length == 0) {
            this.showEmpty = true;
        }
        else {
            this.showEmpty = false;
        }
        this.loading = false;
    }
    getTotal() {
        this.sums.debitTot = this.payArray.reduce((acc, obj) => { return acc + +obj.debit; }, 0);
        this.sums.creditTot = this.payArray.reduce((acc, obj) => { return acc + +obj.credit; }, 0);
    }
    radioChange(ev) {
        //console.log(ev.target.value) 
        this.payArray = [];
        this.jdetailsTo = [];
        this.jdetailsFrom = [];
        this.showEmpty = false;
        this.loading = false;
    }
    search() {
        this.payArray = [];
        this.jdetailsTo = [];
        this.jdetailsFrom = [];
        if (this.radioVal == 0) {
            this.getTopJto();
        }
        else if (this.radioVal == 1) {
            this.getJFromByDate();
        }
        else if (this.radioVal == 2) {
            this.getJTo2Date();
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
StatementPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
StatementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-statement',
        template: _statement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_statement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatementPage);



/***/ }),

/***/ 38044:
/*!**********************************************************!*\
  !*** ./src/app/statement/statement.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUFPLG1CQUFBO0FBRVg7O0FBQUU7RUFBTSxrQkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7QUFLUjs7QUFGSTtFQUNJLGdCQUFBO0FBS1I7O0FBRkU7RUFBTyxrQkFBQTtFQUFtQixXQUFBO0VBQWEsWUFBQTtBQVF6Qzs7QUFORTtFQUFvQix5QkFBQTtBQVV0Qjs7QUFURTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFrQnZHIiwiZmlsZSI6InN0YXRlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuc2hvd3sgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG4gIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIFxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuY3VzdFJvd3tcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgfVxuXG4gIC50YWJsZXt0ZXh0LWFsaWduOiBjZW50ZXI7d2lkdGg6IDEwMCU7IG1hcmdpbjogMTJweDt9XG5cbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO31cbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fSJdfQ== */";

/***/ }),

/***/ 7858:
/*!**********************************************************!*\
  !*** ./src/app/statement/statement.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>كشف حساب </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-grid  *ngIf=\"user_info && store_info\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card  class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row dir=\"rtl\"> \n                <ion-grid class=\"ion-no-padding ion-no-margin\">\n                  <ion-row>\n                    <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" > \n                        <ion-label>قائمة الحسابات </ion-label> \n                      </ion-item> \n                      </ion-col> \n                  </ion-row>\n                </ion-grid>  \n            </ion-row>  \n            <ion-row>\n              <ion-col size=\"5\" offset=\"2\"   > \n                <ion-item class=\"custInput\">\n                  <input  *ngIf=\"sub_account\" class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsSales\" id=\"accountSales\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                  <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accountsSales\" style=\"height: auto;max-height: 20px;\">\n                    <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                  </datalist>\n                  <ion-label *ngIf=\"!sub_account\">\n                    <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                   </ion-label>\n                  <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"refresh('account')\">\n                    <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                  </ion-button>   \n                </ion-item>   \n              </ion-col>  \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label> حديثة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث  في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                              <ion-label>بحث في فترة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\"> \n                        <ion-item class=\"custInput\">\n                          <input  *ngIf=\"sub_account\" class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsSales3\" id=\"accountSales3\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                          <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accountsSales3\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                          </datalist>\n                          <ion-label *ngIf=\"!sub_account\">\n                            <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                           </ion-label>\n                          <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\" >\n                            <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                          </ion-button>   \n                        </ion-item>   \n                      </ion-col> \n                      <ion-col size=\"3\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 \">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"3\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"2\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col>\n                      \n                    </ion-row>\n                  </ion-grid>\n                 \n              </ion-col>\n               \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"payArray\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid>\n            <ion-row> \n             <ion-col size=\"4\" class=\"ion-text-center\">\n               <h5><ion-label color=\"dark\">الرصيد  الإفتتاحي :</ion-label> <ion-text><b>{{selectedAccount.sub_balance}}</b></ion-text></h5> \n              </ion-col>\n               <ion-col size=\"4\" class=\"ion-text-center\">\n                 <h5>\n                  <ion-label *ngIf=\"selectedAccount.debit > 0\" color=\"dark\"> الرصيد الحالي : \n                    <ion-text >مدين بـ </ion-text>\n                    <ion-text><b>{{selectedAccount.debit}}</b></ion-text>\n                  </ion-label>\n                  <ion-label *ngIf=\"selectedAccount.credit > 0\" color=\"dark\"> الرصيد الحالي : \n                    <ion-text >مدين بـ </ion-text>\n                    <ion-text><b>{{selectedAccount.credit}}</b></ion-text>\n                  </ion-label>\n                </h5> \n               </ion-col>\n             \n               <ion-col size=\"4\" class=\"ion-text-center\" >\n                 <h5>\n                   <ion-label color=\"dark\">طبيعة الحساب  :</ion-label> <ion-text><b>{{selectedAccount.sub_type}}</b></ion-text>\n                 </h5>\n               </ion-col>\n               \n             </ion-row> \n       </ion-grid>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <!-- <th>رقم الفاتورة</th> --> \n                  <th>التاريخ</th>\n                  <th>نوع القيد</th>\n                  <th>البيان</th>\n                  <th>مدين (عليه)</th> \n                  <th>دائن (له)</th>  \n                  \n                  <!-- <th ><strong>تعديل</strong></th>  -->\n                  <th ><strong>حذف</strong></th> \n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of payArray ; let i = index\">\n                  <td>{{i+1}}</td> \n                  <td> {{pay.j_date}}</td> \n                  <td>{{pay.j_type}}</td>  \n                  <td>{{pay.desc}}</td>\n                  <td >{{pay.debit}}</td>\n                  <td >{{pay.credit}}</td>\n                  <td>\n                    <!-- (click)=\"getPayInvoDetail(pay.pay_ref , 'edit')\" -->\n                    \n                    <!-- <ion-button fill=\"clear\" size=\"small\" >\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon> \n                    </ion-button> -->\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"delete(pay.j_ref )\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon> \n                    </ion-button>\n                  </td>\n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon>\n                    </ion-button>\n                  </td> -->\n                 </tr> \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   \n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  \n                 </tr>\n\n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                <ion-col size=\"4\" class=\"ion-text-center\">  \n                  <ion-label> \n                    <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                 </ion-label>\n                 <h4> لا توجد سجلات </h4> \n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer *ngIf=\"payArray\">\n  <ion-grid >\n    <ion-row class=\"ion-justify-content-end\">\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-label><ion-text>إجمالي الجانب المدين : </ion-text><br>  <strong>{{sums.debitTot.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col  size=\"3\" class=\"ion-text-center\">\n        <ion-label><ion-text>اجمالي الجانب الدائن  : </ion-text><br>  <strong>{{sums.creditTot.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_statement_statement_module_ts.js.map
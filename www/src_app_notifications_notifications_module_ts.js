"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notifications_notifications_module_ts"],{

/***/ 47897:
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 4598);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 89182:
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 47897);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 4598);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);








let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage],
        exports: []
    })
], NotificationsPageModule);



/***/ }),

/***/ 4598:
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page.html?ngResource */ 59674);
/* harmony import */ var _notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss?ngResource */ 87161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);










let NotificationsPage = class NotificationsPage {
    constructor(loadingController, toast, rout, http, api2, storage, router) {
        this.loadingController = loadingController;
        this.toast = toast;
        this.rout = rout;
        this.http = http;
        this.api2 = api2;
        this.storage = storage;
        this.router = router;
        this.showEmptyitems = false;
        this.showEmptyPay = false;
        this.showEmptyPurch = false;
        this.segmVal = "items";
        this.sub_accountSalse = [];
        this.sub_accountPurch = [];
        this.payNotifArr = [];
        this.purchNotifArr = [];
        this.itemNotifArr = [];
        this.itemMinusNotifArr = [];
        this.showSpinner = false;
        this.api = 'http://localhost/myaperpi/myapi/api/';
        // this.subiscribeInterval()
        this.getAppInfo();
    }
    ngOnInit() {
    }
    stockItems(store_id, yearId) {
        this.showSpinner = true;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearId', yearId);
        this.http.get('http://localhost/myaperpi/myapi/api/', { params: params }).subscribe(data => {
            let res = data;
            let itemNotifArr = res['data'];
            itemNotifArr.forEach(element => {
                if (+element.tswiaQuantity > 0) {
                    element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                }
                else if (+element.tswiaQuantity < 0) {
                    element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                }
                element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
            });
            this.itemMinusNotifArr = itemNotifArr.filter(x => +x.quantity < 0);
            this.itemNotifArr = itemNotifArr.filter(x => +x.quantity == 0);
            if (this.itemNotifArr.length == 0) {
                this.showEmptyitems = true;
            }
            this.showSpinner = false;
            //  this.sumCount(itemNotifArr) 
        }, (err) => {
            //console.log(err);
            this.showSpinner = false;
        });
    }
    sumCount(itemNotifArr) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
        params = params.append('store_id', 1);
        this.http.get('http://localhost/myaperpi/myapi/api/', { params: params }).subscribe(data => {
            let res = data;
            let arr = res['data'];
            for (let index = 0; index < itemNotifArr.length; index++) {
                const element = itemNotifArr[index];
                let flt = arr.filter(x => x.id == element.id);
                if (flt.length > 0) {
                    element.perchQuantity = +element.perchQuantity + +flt[0].perchQuantity;
                    // element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
                    element.salesQuantity = +element.salesQuantity + +flt[0].salesQuantity;
                }
            }
            itemNotifArr.forEach(element => {
                element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
            });
            this.itemMinusNotifArr = itemNotifArr.filter(x => +x.quantity < 0);
            this.itemNotifArr = itemNotifArr.filter(x => +x.quantity == 0);
            if (this.itemNotifArr.length == 0) {
                this.showEmptyitems = true;
            }
            // this.getTot()
            //console.log('interval data from backend',data) 
            this.showSpinner = false;
        }, (err) => {
            //console.log(err);
            this.showSpinner = false;
        });
    }
    segmChange(ev, filter) {
        if (this.segmVal == 'items') {
            this.stockItems(1, this.year.id);
        }
        else if (this.segmVal == 'customer') {
            this.getPayNotif(1);
        }
        else if (this.segmVal == 'supplier') {
            this.getPerchNotif(1, this.year.id);
        }
    }
    getTot() {
        this.totalObj.items = this.itemNotifArr.length;
        this.totalObj.perch = this.purchNotifArr.length;
        this.totalObj.pay = this.payNotifArr.length;
        let tot = this.totalObj.items + this.totalObj.perch + this.totalObj.pay;
        return tot;
    }
    getPayNotif(store_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
        params = params.append('store_id', store_id);
        this.showSpinner = true;
        this.http.get(this.api + 'pay/paynotif.php', { params: params }).subscribe(data => {
            let res = data;
            this.payArr = res;
            //console.log('payArr',data,this.payArr)
            this.getAccounts(1, 1);
            //console.log('interval data from backend',data) 
        }, (err) => {
            //console.log(err);
        });
    }
    getPerchNotif(store_id, yearId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('yearI', yearId);
        this.showSpinner = true;
        this.http.get(this.api + 'perch/paynotif.php', { params: params }).subscribe(data => {
            let res = data;
            this.perchArr = res;
            //console.log('perchArr',data ,this.perchArr)
            this.getAccounts(1, 2);
            //console.log('interval data from backend',data) 
        }, (err) => {
            //console.log(err);
        });
    }
    getAccounts(store_id, ac_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
        params = params.append('store_id', store_id);
        params = params.append('ac_id', ac_id);
        this.http.get(this.api + 'sub_accounts/readByStore.php', { params: params }).subscribe(data => {
            let res = data;
            if (ac_id == 1) {
                this.sub_accountSalse = res['data'];
            }
            else {
                this.sub_accountPurch = res['data'];
            }
            //console.log(' from backend',data)
            //console.log(' filter' ,this.sub_accountPurch ,this.sub_accountPurch )
            this.showSpinner = false;
            this.recalSubBalance(ac_id);
        }, (err) => {
            //console.log(err);
            this.showSpinner = false;
        });
    }
    recalSubBalance(type) {
        if (type == 1) {
            // adding new change to subbalances
            this.sub_accountSalse.forEach(element => {
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
                }
                else if (creditTot > debitTot) {
                    element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                    element.currentCustumerStatus = 'credit';
                }
            });
            this.sub_accountSalse = this.sub_accountSalse.filter(x => +x.sub_balance > 0);
            //console.log('recalSubBalance sales',this.sub_accountSalse)
            this.preparePayNotifArr(this.payArr);
        }
        else {
            // adding new change to subbalances
            this.sub_accountPurch.forEach(element => {
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
                }
                else if (creditTot > debitTot) {
                    element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                    element.currentCustumerStatus = 'credit';
                }
            });
            this.sub_accountPurch = this.sub_accountPurch.filter(x => +x.sub_balance > 0);
            //console.log('recalSubBalance purchace',this.sub_accountPurch)
            this.preparePurchNotifArr(this.perchArr);
        }
    }
    preparePayNotifArr(arr) {
        this.payNotifArr = [];
        if (arr) {
            arr = arr.filter(x => x.nextPay != null && x.nextPay != "0000-00-00");
            //console.log('nextPay',arr) 
            arr.forEach(element => {
                let flt = [];
                flt = this.sub_accountSalse.filter(x => +x.id == +element.cust_id);
                //console.log('flt' ,flt)
                if (flt.length > 0) {
                    if (+flt[0].sub_balance > 0) {
                        this.payNotifArr.push({
                            'title': "مواعيد سداد فاتورة  " + flt[0].sub_name + '  بتاريخ  ' + element.pay_date,
                            'pay_ref': element.pay_ref,
                            'tot_pr': element.tot_pr,
                            'pay_date': element.pay_date,
                            'pay_time': element.pay_time,
                            'cust_id': element.cust_id,
                            'discount': element.discount,
                            'changee': element.changee,
                            'user_id': element.user_id,
                            'pay': element.pay,
                            'store_id': element.store_id,
                            'pay_method': element.pay_method,
                            'payComment': element.payComment,
                            'nextPay': element.nextPay,
                            'nextMoPay': moment__WEBPACK_IMPORTED_MODULE_4__(element.nextPay),
                            'sub_name': flt[0].sub_name
                        });
                    }
                }
            });
            if (this.payNotifArr.length == 0) {
                this.showEmptyPay = true;
            }
        }
        //console.log(this.payNotifArr)
        // this.getTot()
    }
    preparePurchNotifArr(arr) {
        this.purchNotifArr = [];
        if (arr) {
            arr = arr.filter(x => x.nextPay != null && x.nextPay != "0000-00-00");
            //console.log('nextPay',arr)
            arr.forEach(element => {
                let flt = [];
                flt = this.sub_accountPurch.filter(x => +x.id == +element.cust_id);
                if (flt.length > 0) {
                    if (+flt[0].sub_balance > 0) {
                        this.payNotifArr.push({
                            'title': "مواعيد سداد فاتورة  " + flt[0].sub_name + 'بتاريخ ' + element.pay_date,
                            'pay_ref': element.pay_ref,
                            'tot_pr': element.tot_pr,
                            'pay_date': element.pay_date,
                            'pay_time': element.pay_time,
                            'cust_id': element.cust_id,
                            'discount': element.discount,
                            'changee': element.changee,
                            'user_id': element.user_id,
                            'pay': element.pay,
                            'store_id': element.store_id,
                            'pay_method': element.pay_method,
                            'payComment': element.payComment,
                            'nextPay': element.nextPay,
                            'nextMoPay': moment__WEBPACK_IMPORTED_MODULE_4__(element.nextPay),
                            'sub_name': flt[0].sub_name
                        });
                    }
                }
            });
            if (this.purchNotifArr.length == 0) {
                this.showEmptyPurch = true;
            }
        }
        //console.log(this.purchNotifArr)
        // this.getTot()
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
                this.stockItems(1, this.year.id);
            }
        });
    }
    getPayInvoDetail(pay, sub_name, status) {
        console.log(pay, sub_name, status);
        this.presentLoadingWithOptions('جاري جلب التفاصيل ...');
        this.api2.getPayInvoDetail(1, pay.pay_ref, this.year.id).subscribe(data => {
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
            this.rout.navigate(['folder/edit-sales'], navigationExtras);
        }, (err) => {
            //console.log(err);
            this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
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
    subiscribeInterval() {
        this.getPayNotif(1);
        this.getPerchNotif(1, this.year.id);
        this.stockItems(1, this.year.id);
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_3__.ServicesService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-notifications',
        template: _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsPage);



/***/ }),

/***/ 87161:
/*!******************************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 59674:
/*!******************************************************************!*\
  !*** ./src/app/notifications/notifications.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>التنبيهات </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-segment scrollable=\"true\" mode=\"ios\"  [(ngModel)]=\"segmVal\"  (ionChange)=\"segmChange($event)\" >\n            <ion-segment-button value=\"items\">\n              <h4> <ion-text color=\"dark\"> الأصناف المنتهية</ion-text></h4>\n            </ion-segment-button> \n            <ion-segment-button value=\"itemsminus\">\n              <h4> <ion-text color=\"dark\">    اصناف بكميات سالبة</ion-text></h4>\n            </ion-segment-button>\n            <ion-segment-button value=\"customer\">\n              <h4> <ion-text color=\"dark\"> مواعيد سداد العملاء  </ion-text>  </h4>\n            </ion-segment-button>\n            <ion-segment-button value=\"supplier\">\n              <h4> <ion-text color=\"dark\"> مواعيد سداد الموردين</ion-text> </h4>\n            </ion-segment-button>\n           \n          </ion-segment>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div *ngIf = \"segmVal == 'customer' \">\n   <ion-list class=\"ion-margin-top\" >\n    <ion-item *ngFor=\"let pay of payNotifArr\">\n      <ion-avatar >\n        <ion-icon name=\"notifications-outline\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <ion-text>{{pay.title}} &nbsp;</ion-text>\n      </ion-label><br>\n      <ion-label slot=\"end\">\n        <ion-text color=\"primary\"><strong>{{pay.nextMoPay  | dateAgo}}</strong> </ion-text>  \n      </ion-label>\n      <ion-button slot=\"end\" (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit')\">عرض</ion-button>\n    </ion-item> \n   </ion-list>\n   <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showSpinner == true\"> \n    <ion-col size=\"4\" class=\"ion-text-center\">  \n   <h4 class=\"ion-text-center\">\n              <ion-spinner name=\"lines-sharp\" slot =\"end\"></ion-spinner>\n   </h4>   \n    </ion-col>\n  </ion-row>\n  <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmptyPay == true\"> \n    <ion-col size=\"4\" class=\"ion-text-center\">  \n      <ion-label> \n        <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n     </ion-label>\n     <h4> لا توجد سجلات </h4> \n    </ion-col>\n  </ion-row>\n  </div>\n\n  <div *ngIf = \"segmVal == 'supplier' \">\n    <ion-list class=\"ion-margin-top\">\n     <ion-item *ngFor=\"let perch of purchNotifArr\">\n       <ion-avatar >\n         <ion-icon name=\"notifications-outline\"></ion-icon>\n       </ion-avatar>\n       <ion-label>\n         <ion-text>{{perch.title}} &nbsp;</ion-text>\n       </ion-label>\n       <ion-label slot=\"end\">\n      <ion-text color=\"primary\"><strong>{{perch.nextMoPay  | dateAgo}}</strong> </ion-text>  \n       </ion-label>\n       <ion-button slot=\"end\" (click)=\"getPayInvoDetail(perch , perch.sub_name,'edit')\">عرض</ion-button>\n     </ion-item> \n    </ion-list>\n\n    <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmptyPurch == true\"> \n      <ion-col size=\"4\" class=\"ion-text-center\">  \n        <ion-label> \n          <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n       </ion-label>\n       <h4> لا توجد سجلات </h4> \n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showSpinner == true\"> \n      <ion-col size=\"4\" class=\"ion-text-center\">  \n     <h4 class=\"ion-text-center\">\n                <ion-spinner name=\"lines-sharp\" slot =\"end\"></ion-spinner>\n     </h4>   \n      </ion-col>\n    </ion-row>\n  \n   </div>\n\n   <div *ngIf = \"segmVal == 'items' \">\n    <ion-list class=\"ion-margin-top\">\n     <ion-item *ngFor=\"let item of itemNotifArr ; let i = index\">\n       <ion-avatar >\n         <ion-icon name=\"notifications-outline\"></ion-icon>\n       </ion-avatar>\n       <ion-label>\n         <ion-text> {{item.item_name}} &nbsp;</ion-text>\n       </ion-label><br> \n     </ion-item> \n    </ion-list>\n    \n\n    <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmptyitems == true\"> \n      <ion-col size=\"4\" class=\"ion-text-center\">  \n        <ion-label> \n          <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n       </ion-label>\n       <h4> لا توجد سجلات </h4> \n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showSpinner == true\"> \n      <ion-col size=\"4\" class=\"ion-text-center\">  \n     <h4 class=\"ion-text-center\">\n                <ion-spinner name=\"lines-sharp\" slot =\"end\"></ion-spinner>\n     </h4>   \n      </ion-col>\n    </ion-row>\n   </div>\n\n   <div *ngIf = \"segmVal == 'itemsminus' \">\n    <ion-list class=\"ion-margin-top\">\n     <ion-item *ngFor=\"let item of itemMinusNotifArr ; let i =index\">\n       <ion-avatar >\n         <ion-icon name=\"notifications-outline\"></ion-icon>\n       </ion-avatar>\n       <ion-label>\n         <ion-text>{{i+1}} - {{item.item_name}} &nbsp;</ion-text> الكمية:<ion-text><strong>{{item.quantity}}</strong> &nbsp;</ion-text>\n       </ion-label><br> \n     </ion-item> \n    </ion-list>\n    \n\n    <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmptyitems == true\"> \n      <ion-col size=\"4\" class=\"ion-text-center\">  \n        <ion-label> \n          <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n       </ion-label>\n       <h4> لا توجد سجلات </h4> \n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showSpinner == true\"> \n      <ion-col size=\"4\" class=\"ion-text-center\">  \n     <h4 class=\"ion-text-center\">\n                <ion-spinner name=\"lines-sharp\" slot =\"end\"></ion-spinner>\n     </h4>   \n      </ion-col>\n    </ion-row>\n   </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_notifications_notifications_module_ts.js.map
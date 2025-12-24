"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user-activity_user-activity_module_ts"],{

/***/ 11394:
/*!***************************************!*\
  !*** ./src/app/user-activity/pipe.ts ***!
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
                return filter ? record.filter(item => item.full_name.toLocaleLowerCase().indexOf(filter) != -1) : record;
            }
        }
    }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByLogdetails', pure: true })
], FilterPipe);



/***/ }),

/***/ 99693:
/*!***************************************************************!*\
  !*** ./src/app/user-activity/user-activity-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityPageRoutingModule": () => (/* binding */ UserActivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _user_activity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-activity.page */ 70926);




const routes = [
    {
        path: '',
        component: _user_activity_page__WEBPACK_IMPORTED_MODULE_0__.UserActivityPage
    }
];
let UserActivityPageRoutingModule = class UserActivityPageRoutingModule {
};
UserActivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserActivityPageRoutingModule);



/***/ }),

/***/ 33532:
/*!*******************************************************!*\
  !*** ./src/app/user-activity/user-activity.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityPageModule": () => (/* binding */ UserActivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _user_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-activity-routing.module */ 99693);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _user_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-activity.page */ 70926);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipe */ 11394);









let UserActivityPageModule = class UserActivityPageModule {
};
UserActivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule,
            _user_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserActivityPageRoutingModule
        ],
        declarations: [_user_activity_page__WEBPACK_IMPORTED_MODULE_2__.UserActivityPage, _pipe__WEBPACK_IMPORTED_MODULE_3__.FilterPipe],
        exports: [_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterPipe]
    })
], UserActivityPageModule);



/***/ }),

/***/ 70926:
/*!*****************************************************!*\
  !*** ./src/app/user-activity/user-activity.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActivityPage": () => (/* binding */ UserActivityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _user_activity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-activity.page.html?ngResource */ 45246);
/* harmony import */ var _user_activity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-activity.page.scss?ngResource */ 59358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe */ 11394);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);











let UserActivityPage = class UserActivityPage {
    constructor(behavApi, _location, alertController, route, rout, storage, modalController, loadingController, datePipe, api, toast) {
        this.behavApi = behavApi;
        this._location = _location;
        this.alertController = alertController;
        this.route = route;
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.sub_accountSales = [];
        this.sub_accountPurch = [];
        this.searchResult = [];
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.searchMode = false;
        this.isOpenNotif = false;
        this.loading = false;
        this.getAppInfo();
    }
    ngOnInit() {
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
        this.storage.get('sub_accountPurch').then((response) => {
            if (response) {
                this.sub_accountPurch = response;
                //console.log(this.sub_accountPurch)  
            }
        });
        this.storage.get('sub_accountSales').then((response) => {
            if (response) {
                this.sub_accountSales = response;
                //console.log(this.sub_accountPurch)  
            }
        });
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                //console.log(response)
                //console.log(this.store_info) 
                this.getAllLogHistory();
            }
        });
        this.storage.get('LogHistoryLocal').then((response) => {
            //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
            if (response) {
                this.LogHistoryLocalArr = response;
            }
        });
    }
    getAllLogHistory() {
        this.loading = true;
        this.api.getAllLogHistory(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.logHistoryArr = res['data'];
            this.prepareStep1New();
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    prepareStep1New() {
        for (let index = 0; index < this.logHistoryArr.length; index++) {
            const element = this.logHistoryArr[index];
            // customers
            if (element.typee.includes('customer') == true) {
                if (element.typee == 'insert customer') {
                    element.desc = "قام " + element.full_name + " - بإضافة عميل جديد" + JSON.parse(element.logToken).sub_name;
                }
                else if (element.typee == 'update customer') {
                    element.desc = "قام " + element.full_name + " - بتعديل البيانات الشخصية للعميل  " + JSON.parse(element.logToken).sub_name;
                }
                else if (element.typee == 'delete customer') {
                    element.desc = "قام " + element.full_name + " - بحذف العميل " + JSON.parse(element.logToken).sub_name;
                }
                //  change logStatus to 1 to be egnoring when  run syncFunct()
                // element.logStatus = 1
            }
            // supplier
            if (element.typee.includes('supplier') == true) {
                if (element.typee == 'insert supplier') {
                    element.desc = "قام " + element.full_name + " - بإضافة مورد جديد" + JSON.parse(element.logToken).sub_name;
                }
                else if (element.typee == 'update supplier') {
                    element.desc = "قام " + element.full_name + " - بتعديل البيانات الشخصية للمورد  " + JSON.parse(element.logToken).sub_name;
                }
                else if (element.typee == 'delete supplier') {
                    element.desc = "قام " + element.full_name + " - بحذف المورد " + JSON.parse(element.logToken).sub_name;
                }
                //  change logStatus to 1 to be egnoring when  run syncFunct()
                // element.logStatus = 1
            }
            // firstq
            if (element.typee.includes('firstq') == true) {
                if (element.typee == 'insert firstq') {
                    element.desc = "قام " + element.full_name + " - بإضافة كمية افتتاحية لصنف جديد" + JSON.parse(element.logToken).item_name;
                }
                else if (element.typee == 'update firstq') {
                    element.desc = "قام " + element.full_name + " - بتعديل الكمية افتتاحية الصنف  " + JSON.parse(element.logToken).item_name;
                }
                else if (element.typee == 'delete firstq') {
                    element.desc = "قام " + element.full_name + " - بحذف الكمية افتتاحية الصنف " + JSON.parse(element.logToken).item_name;
                }
                //  change logStatus to 1 to be egnoring when  run syncFunct()
                // element.logStatus = 1
            }
            // item
            if (element.typee.includes('item') == true) {
                if (element.typee == 'insert item') {
                    element.desc = "قام " + element.full_name + " - بإضافة صنف جديد" + JSON.parse(element.logToken).item_name;
                }
                else if (element.typee == 'update item') {
                    element.desc = "قام " + element.full_name + " - بتعديل بيانات الصنف  " + JSON.parse(element.logToken).item_name;
                }
                else if (element.typee == 'delete item') {
                    element.desc = "قام " + element.full_name + " - بحذف الصنف " + JSON.parse(element.logToken).item_name;
                }
                //  change logStatus to 1 to be egnoring when  run syncFunct()
                // element.logStatus = 1 
                //push notif 
                //
            }
            // sales
            if (element.typee.includes('sales') == true) {
                let parseData = JSON.parse(element.logToken);
                //console.log(parseData)
                let id = parseData.payInvo.cust_id;
                let fltsub_name = this.sub_accountSales.filter(x => +x.id == +id);
                //console.log(this.sub_accountSales, 'fltsub_name', fltsub_name, JSON.parse(element.logToken).payInvo.cust_id)
                if (element.typee == 'insert sales') {
                    element.desc = "قام " + element.full_name + " - بإضافة فاتورة مبيعات " + fltsub_name[0].sub_name + " بتاريخ : " + JSON.parse(element.logToken).payInvo.pay_date + " - اجمالي الفاتورة : " + JSON.parse(element.logToken).payInvo.tot_pr;
                }
                else if (element.typee == 'update sales') {
                    element.desc = "قام " + element.full_name + " - بتعديل  فاتورة مبيعات  " + fltsub_name[0].sub_name + " بتاريخ : " + JSON.parse(element.logToken).payInvo.pay_date + " - اجمالي الفاتورة : " + JSON.parse(element.logToken).payInvo.tot_pr;
                }
                else if (element.typee == 'delete sales') {
                    element.desc = "قام " + element.full_name + " -بحذف فاتورة مبيعات  " + fltsub_name[0].sub_name + " بتاريخ : " + JSON.parse(element.logToken).payInvo.pay_date + " - اجمالي الفاتورة : " + JSON.parse(element.logToken).payInvo.tot_pr;
                }
                //  change logStatus to 1 to be egnoring when  run syncFunct()
                // element.logStatus = 1 
            }
            // purchase
            if (element.typee.includes('purchase') == true) {
                let parseData = JSON.parse(element.logToken);
                //console.log(parseData)
                let id = parseData.payInvo.cust_id;
                let fltsub_name = this.sub_accountSales.filter(x => +x.id == +id);
                if (element.typee == 'insert purchase') {
                    element.desc = "قام " + element.full_name + " - بإضافة فاتورة مشتريات" + fltsub_name[0].sub_name + " بتاريخ : " + JSON.parse(element.logToken).payInvo.pay_date + " - اجمالي الفاتورة : " + JSON.parse(element.logToken).payInvo.tot_pr;
                }
                else if (element.typee == 'update purchase') {
                    element.desc = "قام " + element.full_name + " - بتعديل  فاتورة مشتريات  " + fltsub_name[0].sub_name + " بتاريخ : " + JSON.parse(element.logToken).payInvo.pay_date + " - اجمالي الفاتورة : " + JSON.parse(element.logToken).payInvo.tot_pr;
                }
                else if (element.typee == 'delete purchase') {
                    element.desc = "قام " + element.full_name + " -بحذف فاتورة مشتريات  " + fltsub_name[0].sub_name + " بتاريخ : " + JSON.parse(element.logToken).payInvo.pay_date + " - اجمالي الفاتورة : " + JSON.parse(element.logToken).payInvo.tot_pr;
                }
                //  change logStatus to 1 to be egnoring when  run syncFunct()
                // element.logStatus = 1
            }
            // journal
            if (element.typee.includes('journal') == true) {
                if (element.typee == 'insert journal') {
                    element.desc = "قام " + element.full_name + " بإضافة  " + JSON.parse(element.logToken).j_type + " بتاريخ : " + JSON.parse(element.logToken).j_date + " - بقيمة: " + JSON.parse(element.logToken).j_pay + " " + JSON.parse(element.logToken).standard_details;
                }
                else if (element.typee == 'update journal') {
                    element.desc = "قام " + element.full_name + " بتعديل  " + JSON.parse(element.logToken).j_type + " بتاريخ : " + JSON.parse(element.logToken).j_date + " - بقيمة: " + JSON.parse(element.logToken).j_pay + " " + JSON.parse(element.logToken).standard_details;
                }
                else if (element.typee == 'delete purchase') {
                    element.desc = "قام " + element.full_name + " بحذف  " + JSON.parse(element.logToken).j_type + " بتاريخ : " + JSON.parse(element.logToken).j_date + " - بقيمة: " + JSON.parse(element.logToken).j_pay + " " + JSON.parse(element.logToken).standard_details;
                }
                //  change logStatus to 1 to be egnoring when  run syncFunct()
                //  element.logStatus = 1
                // set to storage    
            }
            // tswia
            if (element.typee.includes('tswia') == true) {
                if (element.typee == 'insert tswia') {
                    element.desc = "قام " + element.full_name + " بإضافة سجل تسوية جردية  " + " بتاريخ : " + JSON.parse(element.logToken).payInvo.pay_date + " - اجمالي التسوية : " + JSON.parse(element.logToken).payInvo.tot_pr;
                }
                else if (element.typee == 'update tswia') {
                    element.desc = "قام " + element.full_name + " بتعديل سجل تسوية جردية  " + " بتاريخ : " + JSON.parse(element.logToken).payInvo.pay_date + " - اجمالي التسوية : " + JSON.parse(element.logToken).payInvo.tot_pr;
                }
                else if (element.typee == 'delete tswia') {
                    element.desc = "قام " + element.full_name + " بحذف  " + " بتعديل سجل تسوية جردية  " + " بتاريخ : " + JSON.parse(element.logToken).payInvo.pay_date + " - اجمالي التسوية : " + JSON.parse(element.logToken).payInvo.tot_pr;
                }
            }
        }
    }
    searchItem(ev) {
        this.searchMode = true;
        const filterPipe = new _pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe;
        let fiteredArr;
        fiteredArr = filterPipe.transform(this.logHistoryArr, ev.target.value);
        this.searchResult = fiteredArr;
    }
};
UserActivityPage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
UserActivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-user-activity',
        template: _user_activity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_activity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserActivityPage);



/***/ }),

/***/ 59358:
/*!******************************************************************!*\
  !*** ./src/app/user-activity/user-activity.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.w100 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWN0aXZpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUk7RUFDSSxXQUFBO0FBQ1IiLCJmaWxlIjoidXNlci1hY3Rpdml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAudzEwMHtcbiAgICAgICAgd2lkdGg6MTAwJVxuICAgIH0iXX0= */";

/***/ }),

/***/ 45246:
/*!******************************************************************!*\
  !*** ./src/app/user-activity/user-activity.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>أنشطة المستخدمين</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid dir=\"rtl\">\n    <ion-row >\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" class=\"custInput\">\n          <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\" placeholder=\"بحــث\"></ion-input>\n          \n       </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row  >\n      <ion-list class=\"w100 ion-text-center\" *ngIf=\"logHistoryArr.length>0 && loading == false && searchMode == false\" >\n        <ion-item *ngFor=\"let log of logHistoryArr\">\n        <ion-grid >\n          <ion-row>\n            <ion-col size=\"10\"> \n                {{log.desc}}    \n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-end\">\n              <ion-text color = \"primary\">{{log.datee | dateAgo}}</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item> \n      </ion-list> \n\n      <ion-list class=\"w100 ion-text-center\" *ngIf=\"searchMode == true\">\n        <ion-item *ngFor=\"let log of searchResult\" >\n        <ion-grid >\n          <ion-row>\n            <ion-col size=\"10\" class=\"ion-text-end\"> \n                {{log.desc}}    \n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-text color = \"primary\">{{log.datee | dateAgo}}</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item> \n      </ion-list> \n\n    \n      <ion-list *ngIf=\"loading == true\"  class=\"w100 ion-text-center\">\n        <ion-item>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        </ion-item>\n        <ion-item>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        </ion-item>\n        <ion-item>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        </ion-item>\n      </ion-list>\n\n\n\n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_user-activity_user-activity_module_ts.js.map
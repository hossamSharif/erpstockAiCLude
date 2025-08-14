"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 84053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _app_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/auth/auth-service.service */ 65465);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stockService/services.service */ 91472);








let LoginPage = class LoginPage {
    constructor(api, storage, toast, loadingController, authenticationService) {
        this.api = api;
        this.storage = storage;
        this.toast = toast;
        this.loadingController = loadingController;
        this.authenticationService = authenticationService;
        this.yearArr = [];
        this.stores = [];
        this.store_info = { id: "1", store_ref: "sh", store_name: "sooq sha'by", location: "sha'aby" };
        this.USER_INFO = {
            id: "",
            user_name: "",
            store_id: 1,
            full_name: "",
            password: "",
        };
    }
    ngOnInit() {
        this.getStore();
        //  this.getCompany()
        this.getyear();
    }
    pickDetail(ev) {
        let fl = this.stores.filter(x => x.store_name == ev.target.value);
        //console.log(fl);
        this.store_info = {
            id: fl[0]['id'],
            store_name: fl[0]['store_name'],
            store_ref: fl[0]['store_ref'],
            location: fl[0]['location']
        };
        this.USER_INFO.store_id = fl[0]['id'];
        //console.log( this.store_info); 
    }
    getStore() {
        this.api.getStores().subscribe(data => {
            //console.log(data)
            let res = data;
            this.stores = res['data'];
        }, (err) => {
            //console.log(err);
        });
    }
    getCompany() {
        this.api.getCompany().subscribe(data => {
            console.log('companay', data);
            let res = data;
            this.company = res['data'];
        }, (erriho) => {
            //console.log(err);
        });
    }
    getyear() {
        this.api.getYear().subscribe(data => {
            let res = data;
            this.yearArr = res['data'];
            this.setCurrentYear();
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        });
    }
    setCurrentYear() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
            }
            else {
                this.year = this.yearArr[0];
                this.storage.set('year', this.year).then((response) => {
                    //console.log('year set',  this.year) 
                });
            }
        });
    }
    setCurrentStoreLocaly() {
        this.storage.set('STORE_INFO', this.store_info).then((response) => {
        });
        this.storage.set('company', this.company).then((response) => {
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
                duration: 2000,
                message: msg,
                translucent: true,
                // cssClass: 'custom-class custom-loading',
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            loading.onDidDismiss().then(data => {
                //console.log(data)
            });
            //console.log('Loading dismissed with role:', role);
        });
    }
    loginUser() {
        if (this.USER_INFO.user_name == "" || this.USER_INFO.password == "") {
            this.presentToast('الرجاء إكمال بيانات تسجيل الدخول', 'danger');
        }
        else {
            this.storage.set('STORE_INFO', this.store_info).then((response) => {
            });
            this.storage.set('company', this.company).then((response) => {
            });
            this.authenticationService.login(this.USER_INFO);
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_4__.ServicesService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _app_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 84053:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNBOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFDSTtFQUNJLGtCQUFBO0FBRVIiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbmJvcmRlci1zdHlsZTogc29saWQ7XG5ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY3VzdFJvd3tcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIH1cblxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9Il19 */";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n<ion-grid class=\"custRow\" dir=\"rtl\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"11\" >\n      <ion-card class=\"cust-card\">\n        <ion-card-header class=\"ion-text-center\">\n          <h3> تسجيل دخول </h3>\n        </ion-card-header> \n        <ion-grid>\n          <ion-row class=\" ion-justify-content-center\">\n            <ion-col size=\"12\">\n              <!-- <ion-item class=\"custInput\">\n              <input  list=\"browsers2\" id=\"browser2\" [(ngModel)]=\"store_info.store_name\"  (change)=\"pickDetail($event)\">\n                       \n              <datalist style=\"border: none;\" id=\"browsers2\" style=\"height: auto;max-height: 20px;\">\n                <option *ngFor=\"let store of stores ; let i = index\"   [value]=\"store.store_name\"></option>\n              </datalist>\n            </ion-item> -->\n              <!-- <ion-select [(ngModel)]=\"USER_INFO.store_id\" class=\"custInput\" placeholder=\"كلمة المرور\">\n                <ion-select-option>السوق الشعبي</ion-select-option>\n                <ion-select-option>الخرطوم السلمة</ion-select-option>\n              </ion-select> -->\n            </ion-col>\n            <ion-col size=\"9\" >\n              <ion-item class=\"custInput\">\n                <ion-icon name=\"lock-closed-outline\" slot=\"end\" ></ion-icon>\n              <ion-input [(ngModel)]=\"USER_INFO.user_name\" placeholder=\"اسم المستخدم\" ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"9\" >\n              <ion-item class=\"custInput\">\n                 <ion-icon name=\"eye-outline\" slot=\"end\" ></ion-icon>\n                  <ion-input type=\"password\"  [(ngModel)]=\"USER_INFO.password\" placeholder=\"كلمة المرور\" ></ion-input>\n              </ion-item> \n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"8\" >\n              <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"loginUser()\">\n                <ion-label class=\"ion-text-center\" > دخـــول</ion-label>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_balance-sheet_balance-sheet_module_ts"],{

/***/ 82339:
/*!***************************************************************!*\
  !*** ./src/app/balance-sheet/balance-sheet-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceSheetPageRoutingModule": () => (/* binding */ BalanceSheetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _balance_sheet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-sheet.page */ 69725);




const routes = [
    {
        path: '',
        component: _balance_sheet_page__WEBPACK_IMPORTED_MODULE_0__.BalanceSheetPage
    }
];
let BalanceSheetPageRoutingModule = class BalanceSheetPageRoutingModule {
};
BalanceSheetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BalanceSheetPageRoutingModule);



/***/ }),

/***/ 99547:
/*!*******************************************************!*\
  !*** ./src/app/balance-sheet/balance-sheet.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceSheetPageModule": () => (/* binding */ BalanceSheetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _balance_sheet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-sheet-routing.module */ 82339);
/* harmony import */ var _balance_sheet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance-sheet.page */ 69725);







let BalanceSheetPageModule = class BalanceSheetPageModule {
};
BalanceSheetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _balance_sheet_routing_module__WEBPACK_IMPORTED_MODULE_0__.BalanceSheetPageRoutingModule
        ],
        declarations: [_balance_sheet_page__WEBPACK_IMPORTED_MODULE_1__.BalanceSheetPage]
    })
], BalanceSheetPageModule);



/***/ }),

/***/ 69725:
/*!*****************************************************!*\
  !*** ./src/app/balance-sheet/balance-sheet.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceSheetPage": () => (/* binding */ BalanceSheetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _balance_sheet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-sheet.page.html?ngResource */ 28132);
/* harmony import */ var _balance_sheet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance-sheet.page.scss?ngResource */ 96483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);









let BalanceSheetPage = class BalanceSheetPage {
    constructor(rout, storage, modalController, loadingController, datePipe, api, toast) {
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.loading = false;
        this.showEmpty = false;
        this.payArray = [];
        this.debitSum = 0;
        this.creditSum = 0;
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
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                //console.log(response)
                //console.log(this.store_info) 
                this.search();
            }
        });
    }
    search() {
        this.getBalanceSheet();
    }
    getBalanceSheet() {
        this.loading = true;
        this.api.getBalanceSubAccount(this.store_info.id, 2).subscribe(data => {
            //console.log('hhhhhh',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            this.loading = false;
            //console.log(this.payArray) 
            this.prepareBalances();
        }, (err) => {
            //console.log(err);
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    prepareBalances() {
        for (let i = 0; i < this.payArray.length; i++) {
            const element = this.payArray[i];
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
        this.debitSum = this.payArray.reduce((acc, obj) => { return acc + +obj.debit; }, 0);
        this.creditSum = this.payArray.reduce((acc, obj) => { return acc + +obj.credit; }, 0);
    }
};
BalanceSheetPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
BalanceSheetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-balance-sheet',
        template: _balance_sheet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_balance_sheet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BalanceSheetPage);



/***/ }),

/***/ 96483:
/*!******************************************************************!*\
  !*** ./src/app/balance-sheet/balance-sheet.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGFuY2Utc2hlZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUk7RUFBTyxtQkFBQTtBQUVYOztBQUFFO0VBQU0sa0JBQUE7QUFJUjs7QUFGSTtFQUNJLGtCQUFBO0FBS1I7O0FBRkk7RUFDSSxnQkFBQTtBQUtSOztBQUZFO0VBQU8sa0JBQUE7RUFBbUIsV0FBQTtFQUFhLFlBQUE7QUFRekM7O0FBTkU7RUFBb0IseUJBQUE7QUFVdEI7O0FBVEU7RUFBUSx5QkFBQTtFQUEwQixrQkFBQTtFQUFtQixZQUFBO0VBQWMsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixZQUFBO0FBa0J2RyIsImZpbGUiOiJiYWxhbmNlLXNoZWV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0SW5wdXR7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5zaG93eyB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG5cbiAgLmhpZGV7dmlzaWJpbGl0eTogaGlkZGVuO31cbiAgXG4gICAgLmN1c3QtY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5jdXN0Um93e1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICB9XG5cbiAgLnRhYmxle3RleHQtYWxpZ246IGNlbnRlcjt3aWR0aDogMTAwJTsgbWFyZ2luOiAxMnB4O31cblxuICB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7fVxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9Il19 */";

/***/ }),

/***/ 28132:
/*!******************************************************************!*\
  !*** ./src/app/balance-sheet/balance-sheet.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ميزان المراجعة  </ion-title> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\" class=\"ion-text-end\">\n                <ion-item lines=\"none\">\n                  <ion-buttons slot=\"end\"> \n                    <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                      <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                      <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                    </ion-button>\n                  </ion-buttons>\n                </ion-item>\n              </ion-col> \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th> \n                  <th>اسم الحساب</th>\n                  <th> الرصيد الإفتتاحي </th>\n                  <th>الحساب الرئيسي</th> \n                  <th>دائن (له)</th>  \n                  <th>مدين (عليه)</th> \n                 </tr>\n                 <tr *ngFor=\"let pay of payArray ; let i = index\">\n                  <td>{{i+1}}</td>\n                  <td>{{pay.sub_name}}</td>\n                  <td> {{pay.sub_balance}}</td>\n                  <td>{{pay.ac_name}} - {{pay.eng_name}}</td>\n                  <td>{{pay.credit}}</td>\n                  <td>{{pay.debit}}</td> \n                 </tr> \n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td>{{creditSum}}</td>\n                  <td>{{debitSum}}</td>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                   \n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                 </tr>  \n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                <ion-col size=\"4\" class=\"ion-text-center\">  \n                  <ion-label> \n                    <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                 </ion-label>\n                 <h4> لا توجد سجلات </h4> \n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n<ion-footer *ngIf=\"payArray\">\n  <!-- <ion-grid dir=\"rtl\">\n    <ion-row>\n      <ion-col>\n        <ion-label><ion-text>إجمالي المشتريات : </ion-text><br>  <strong>{{sums.tot.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{sums.discount.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>المشتريات بعد الخصم : </ion-text><br>  <strong>{{sums.totAfterDiscout.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي النقد : </ion-text><br>  <strong>{{sums.pay.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي الاجل : </ion-text><br>  <strong>{{sums.change.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_balance-sheet_balance-sheet_module_ts.js.map
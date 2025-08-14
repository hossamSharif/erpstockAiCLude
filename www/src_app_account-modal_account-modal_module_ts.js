"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account-modal_account-modal_module_ts"],{

/***/ 45324:
/*!***************************************************************!*\
  !*** ./src/app/account-modal/account-modal-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModalPageRoutingModule": () => (/* binding */ AccountModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _account_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-modal.page */ 55506);




const routes = [
    {
        path: '',
        component: _account_modal_page__WEBPACK_IMPORTED_MODULE_0__.AccountModalPage
    }
];
let AccountModalPageRoutingModule = class AccountModalPageRoutingModule {
};
AccountModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountModalPageRoutingModule);



/***/ }),

/***/ 57901:
/*!*******************************************************!*\
  !*** ./src/app/account-modal/account-modal.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModalPageModule": () => (/* binding */ AccountModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _account_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-modal-routing.module */ 45324);
/* harmony import */ var _account_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-modal.page */ 55506);







let AccountModalPageModule = class AccountModalPageModule {
};
AccountModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountModalPageRoutingModule
        ],
        declarations: [_account_modal_page__WEBPACK_IMPORTED_MODULE_1__.AccountModalPage]
    })
], AccountModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_account-modal_account-modal_module_ts.js.map
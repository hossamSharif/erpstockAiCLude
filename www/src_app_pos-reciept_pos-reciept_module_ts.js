"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pos-reciept_pos-reciept_module_ts"],{

/***/ 64643:
/*!***********************************************************!*\
  !*** ./src/app/pos-reciept/pos-reciept-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosRecieptPageRoutingModule": () => (/* binding */ PosRecieptPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _pos_reciept_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos-reciept.page */ 92471);




const routes = [
    {
        path: '',
        component: _pos_reciept_page__WEBPACK_IMPORTED_MODULE_0__.PosRecieptPage
    }
];
let PosRecieptPageRoutingModule = class PosRecieptPageRoutingModule {
};
PosRecieptPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PosRecieptPageRoutingModule);



/***/ }),

/***/ 59234:
/*!***************************************************!*\
  !*** ./src/app/pos-reciept/pos-reciept.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosRecieptPageModule": () => (/* binding */ PosRecieptPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _pos_reciept_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos-reciept-routing.module */ 64643);
/* harmony import */ var _pos_reciept_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos-reciept.page */ 92471);







let PosRecieptPageModule = class PosRecieptPageModule {
};
PosRecieptPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pos_reciept_routing_module__WEBPACK_IMPORTED_MODULE_0__.PosRecieptPageRoutingModule
        ],
        declarations: [_pos_reciept_page__WEBPACK_IMPORTED_MODULE_1__.PosRecieptPage]
    })
], PosRecieptPageModule);



/***/ }),

/***/ 92471:
/*!*************************************************!*\
  !*** ./src/app/pos-reciept/pos-reciept.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosRecieptPage": () => (/* binding */ PosRecieptPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _pos_reciept_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos-reciept.page.html?ngResource */ 77379);
/* harmony import */ var _pos_reciept_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos-reciept.page.scss?ngResource */ 56793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let PosRecieptPage = class PosRecieptPage {
    constructor() { }
    ngOnInit() {
    }
};
PosRecieptPage.ctorParameters = () => [];
PosRecieptPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pos-reciept',
        template: _pos_reciept_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pos_reciept_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PosRecieptPage);



/***/ }),

/***/ 56793:
/*!**************************************************************!*\
  !*** ./src/app/pos-reciept/pos-reciept.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3MtcmVjaWVwdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 77379:
/*!**************************************************************!*\
  !*** ./src/app/pos-reciept/pos-reciept.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pos-reciept</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pos-reciept_pos-reciept_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_fristq_fristq_module_ts"],{

/***/ 99718:
/*!*************************************************!*\
  !*** ./src/app/fristq/fristq-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FristqPageRoutingModule": () => (/* binding */ FristqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _fristq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fristq.page */ 96183);




const routes = [
    {
        path: '',
        component: _fristq_page__WEBPACK_IMPORTED_MODULE_0__.FristqPage
    }
];
let FristqPageRoutingModule = class FristqPageRoutingModule {
};
FristqPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FristqPageRoutingModule);



/***/ }),

/***/ 77935:
/*!*****************************************!*\
  !*** ./src/app/fristq/fristq.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FristqPageModule": () => (/* binding */ FristqPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _fristq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fristq-routing.module */ 99718);
/* harmony import */ var _fristq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fristq.page */ 96183);







let FristqPageModule = class FristqPageModule {
};
FristqPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fristq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FristqPageRoutingModule
        ],
        declarations: [_fristq_page__WEBPACK_IMPORTED_MODULE_1__.FristqPage]
    })
], FristqPageModule);



/***/ }),

/***/ 96183:
/*!***************************************!*\
  !*** ./src/app/fristq/fristq.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FristqPage": () => (/* binding */ FristqPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _fristq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fristq.page.html?ngResource */ 50334);
/* harmony import */ var _fristq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fristq.page.scss?ngResource */ 5219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let FristqPage = class FristqPage {
    constructor() { }
    ngOnInit() {
    }
};
FristqPage.ctorParameters = () => [];
FristqPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fristq',
        template: _fristq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fristq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FristqPage);



/***/ }),

/***/ 5219:
/*!****************************************************!*\
  !*** ./src/app/fristq/fristq.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmlzdHEucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 50334:
/*!****************************************************!*\
  !*** ./src/app/fristq/fristq.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>fristq</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_fristq_fristq_module_ts.js.map
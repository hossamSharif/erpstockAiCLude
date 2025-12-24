"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_items-serarch_items-serarch_module_ts"],{

/***/ 15031:
/*!***************************************************************!*\
  !*** ./src/app/items-serarch/items-serarch-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsSerarchPageRoutingModule": () => (/* binding */ ItemsSerarchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _items_serarch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-serarch.page */ 95601);




const routes = [
    {
        path: '',
        component: _items_serarch_page__WEBPACK_IMPORTED_MODULE_0__.ItemsSerarchPage
    }
];
let ItemsSerarchPageRoutingModule = class ItemsSerarchPageRoutingModule {
};
ItemsSerarchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemsSerarchPageRoutingModule);



/***/ }),

/***/ 35701:
/*!*******************************************************!*\
  !*** ./src/app/items-serarch/items-serarch.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsSerarchPageModule": () => (/* binding */ ItemsSerarchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _items_serarch_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-serarch-routing.module */ 15031);
/* harmony import */ var _items_serarch_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-serarch.page */ 95601);







let ItemsSerarchPageModule = class ItemsSerarchPageModule {
};
ItemsSerarchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _items_serarch_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemsSerarchPageRoutingModule
        ],
        declarations: [_items_serarch_page__WEBPACK_IMPORTED_MODULE_1__.ItemsSerarchPage]
    })
], ItemsSerarchPageModule);



/***/ }),

/***/ 95601:
/*!*****************************************************!*\
  !*** ./src/app/items-serarch/items-serarch.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsSerarchPage": () => (/* binding */ ItemsSerarchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _items_serarch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-serarch.page.html?ngResource */ 15586);
/* harmony import */ var _items_serarch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-serarch.page.scss?ngResource */ 51467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let ItemsSerarchPage = class ItemsSerarchPage {
    constructor() { }
    ngOnInit() {
    }
};
ItemsSerarchPage.ctorParameters = () => [];
ItemsSerarchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-items-serarch',
        template: _items_serarch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_items_serarch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemsSerarchPage);



/***/ }),

/***/ 51467:
/*!******************************************************************!*\
  !*** ./src/app/items-serarch/items-serarch.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtcy1zZXJhcmNoLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 15586:
/*!******************************************************************!*\
  !*** ./src/app/items-serarch/items-serarch.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>itemsSerarch</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_items-serarch_items-serarch_module_ts.js.map
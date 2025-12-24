"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_item-modal_item-modal_module_ts"],{

/***/ 56487:
/*!*********************************************************!*\
  !*** ./src/app/item-modal/item-modal-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemModalPageRoutingModule": () => (/* binding */ ItemModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _item_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-modal.page */ 3671);




const routes = [
    {
        path: '',
        component: _item_modal_page__WEBPACK_IMPORTED_MODULE_0__.ItemModalPage
    }
];
let ItemModalPageRoutingModule = class ItemModalPageRoutingModule {
};
ItemModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemModalPageRoutingModule);



/***/ }),

/***/ 84756:
/*!*************************************************!*\
  !*** ./src/app/item-modal/item-modal.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemModalPageModule": () => (/* binding */ ItemModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _item_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-modal-routing.module */ 56487);
/* harmony import */ var _item_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-modal.page */ 3671);







let ItemModalPageModule = class ItemModalPageModule {
};
ItemModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _item_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemModalPageRoutingModule
        ],
        declarations: [_item_modal_page__WEBPACK_IMPORTED_MODULE_1__.ItemModalPage]
    })
], ItemModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_item-modal_item-modal_module_ts.js.map
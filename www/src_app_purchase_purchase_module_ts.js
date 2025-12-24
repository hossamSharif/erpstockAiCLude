"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_purchase_purchase_module_ts"],{

/***/ 73339:
/*!***********************************!*\
  !*** ./src/app/purchase/pipe2.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe2": () => (/* binding */ FilterPipe2)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe2 = class FilterPipe2 {
    transform(items, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || items.length === 0) {
                return items;
            }
            else {
                return filter ? items.filter(item => item.aliasEn.toLocaleLowerCase().indexOf(filter) != -1) : items;
            }
        }
    }
};
FilterPipe2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByAlias', pure: true })
], FilterPipe2);



/***/ }),

/***/ 61646:
/*!***********************************!*\
  !*** ./src/app/purchase/pipe3.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe3": () => (/* binding */ FilterPipe3)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe3 = class FilterPipe3 {
    transform(items, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || items.length === 0) {
                return items;
            }
            else {
                return filter ? items.filter(item => item.item_desc.toLocaleLowerCase().indexOf(filter) != -1) : items;
            }
        }
    }
};
FilterPipe3 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByEnName', pure: true })
], FilterPipe3);



/***/ }),

/***/ 4552:
/*!*****************************************************!*\
  !*** ./src/app/purchase/purchase-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePageRoutingModule": () => (/* binding */ PurchasePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase.page */ 47723);




const routes = [
    {
        path: '',
        component: _purchase_page__WEBPACK_IMPORTED_MODULE_0__.PurchasePage
    }
];
let PurchasePageRoutingModule = class PurchasePageRoutingModule {
};
PurchasePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchasePageRoutingModule);



/***/ }),

/***/ 10930:
/*!*********************************************!*\
  !*** ./src/app/purchase/purchase.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePageModule": () => (/* binding */ PurchasePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-routing.module */ 4552);
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase.page */ 47723);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe */ 25003);
/* harmony import */ var _pipe2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe2 */ 73339);
/* harmony import */ var _pipe3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe3 */ 61646);












let PurchasePageModule = class PurchasePageModule {
};
PurchasePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasePageRoutingModule
        ],
        exports: [_purchase_page__WEBPACK_IMPORTED_MODULE_1__.PurchasePage],
        declarations: [_purchase_page__WEBPACK_IMPORTED_MODULE_1__.PurchasePage, _pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe, _pipe2__WEBPACK_IMPORTED_MODULE_5__.FilterPipe2, _pipe3__WEBPACK_IMPORTED_MODULE_6__.FilterPipe3]
    })
], PurchasePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_purchase_purchase_module_ts.js.map
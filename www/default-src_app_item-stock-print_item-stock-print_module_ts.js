"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_item-stock-print_item-stock-print_module_ts"],{

/***/ 38955:
/*!*********************************************************************!*\
  !*** ./src/app/item-stock-print/item-stock-print-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemStockPrintPageRoutingModule": () => (/* binding */ ItemStockPrintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _item_stock_print_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-stock-print.page */ 20683);




const routes = [
    {
        path: '',
        component: _item_stock_print_page__WEBPACK_IMPORTED_MODULE_0__.ItemStockPrintPage
    }
];
let ItemStockPrintPageRoutingModule = class ItemStockPrintPageRoutingModule {
};
ItemStockPrintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemStockPrintPageRoutingModule);



/***/ }),

/***/ 42576:
/*!*************************************************************!*\
  !*** ./src/app/item-stock-print/item-stock-print.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemStockPrintPageModule": () => (/* binding */ ItemStockPrintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _item_stock_print_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-stock-print-routing.module */ 38955);
/* harmony import */ var _item_stock_print_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-stock-print.page */ 20683);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let ItemStockPrintPageModule = class ItemStockPrintPageModule {
};
ItemStockPrintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _item_stock_print_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemStockPrintPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_item_stock_print_page__WEBPACK_IMPORTED_MODULE_1__.ItemStockPrintPage]
    })
], ItemStockPrintPageModule);



/***/ }),

/***/ 20683:
/*!***********************************************************!*\
  !*** ./src/app/item-stock-print/item-stock-print.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemStockPrintPage": () => (/* binding */ ItemStockPrintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _item_stock_print_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-stock-print.page.html?ngResource */ 53701);
/* harmony import */ var _item_stock_print_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-stock-print.page.scss?ngResource */ 10752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/currency.service */ 6612);






let ItemStockPrintPage = class ItemStockPrintPage {
    constructor(modalController, toast, currencyService, cdr) {
        this.modalController = modalController;
        this.toast = toast;
        this.currencyService = currencyService;
        this.cdr = cdr;
        this.exportMode = 'all'; // 'all', 'filtered', 'search'
        this.logoBase64 = '';
        this.vehicleBase64 = '';
        // Currency management
        this.currentCurrency = 'SDG';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Print data:', this.printData);
            yield this.loadImages();
            yield this.initializeCurrency();
        });
    }
    ngOnDestroy() {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.currencyService.initializeCurrency();
            this.currentCurrency = this.currencyService.getCurrentCurrencyValue();
            this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
                this.currentCurrency = currency;
                this.cdr.detectChanges();
            });
        });
    }
    formatStockValue(item) {
        const stockValue = (item.quantity || 0) * (item.unit_price || item.pay_price || 0);
        const convertedValue = this.currencyService.convertFromSDG(stockValue, this.currentCurrency);
        return this.currencyService.formatCurrency(convertedValue, this.currentCurrency);
    }
    loadImages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.logoBase64 = yield this.convertImageToBase64('assets/imgs/logo.png');
            }
            catch (error) {
                console.log('Failed to load logo image:', error);
            }
            try {
                this.vehicleBase64 = yield this.convertImageToBase64('assets/imgs/tuk.jpg');
            }
            catch (error) {
                console.log('Failed to load vehicle image:', error);
            }
        });
    }
    convertImageToBase64(imagePath) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const dataURL = canvas.toDataURL('image/png');
                    resolve(dataURL);
                }
                catch (error) {
                    console.error('Error converting image to base64:', error);
                    reject(error);
                }
            };
            img.onerror = (error) => {
                console.error('Failed to load image:', imagePath, error);
                reject('Failed to load image: ' + imagePath);
            };
            img.src = imagePath;
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.Print('printarea1');
        });
    }
    Print(elem) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let printContent = document.getElementById(elem).innerHTML;
            if (this.logoBase64) {
                printContent = printContent.replace(/src="assets\/imgs\/logo\.png"/g, `src="${this.logoBase64}"`);
                printContent = printContent.replace(/\[src\]="logoBase64 \|\| 'assets\/imgs\/logo\.png'"/g, `src="${this.logoBase64}"`);
            }
            if (this.vehicleBase64) {
                printContent = printContent.replace(/src="assets\/imgs\/tuk\.jpg"/g, `src="${this.vehicleBase64}"`);
                printContent = printContent.replace(/\[src\]="vehicleBase64 \|\| 'assets\/imgs\/tuk\.jpg'"/g, `src="${this.vehicleBase64}"`);
            }
            var mywindow = window.open('', 'PRINT', 'height=600,width=800');
            mywindow.document.write('<html><head>');
            mywindow.document.write('<style type="text/css">');
            mywindow.document.write(`
      @page { 
        size: A4 landscape; 
        margin: 0.5in; 
      }
      * { 
        box-sizing: border-box; 
      }
      body { 
        font-family: Arial, sans-serif; 
        font-size: 10px; 
        line-height: 1.2; 
        margin: 0; 
        padding: 0; 
        direction: rtl;
      }
      .flr { display: block; float: right; } 
      .show { } 
      .hide { width:0px; height:0px; } 
      .w45 { width:45%; } 
      .w35 { width:35%; } 
      .w50 { width:50%; } 
      .w100 { width:100%; }
      table { 
        width: 100%; 
        border-collapse: collapse; 
        font-size: 8px;
        table-layout: fixed;
        margin: 0;
      }
      th, td { 
        border: 1px solid #333; 
        text-align: center; 
        padding: 3px; 
        word-wrap: break-word;
        vertical-align: middle;
      }
      th {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-weight: bold;
        font-size: 9px;
      }
      .hd { 
        background-color: #b9b8b8; 
      }
      .ion-margin { 
        margin: 5px; 
      } 
      .ion-margin-top { 
        margin-top: 5px; 
      } 
      .rtl { 
        direction: rtl; 
      } 
      .ion-text-center { 
        text-align: center; 
      } 
      .ion-text-end { 
        text-align: left; 
      } 
      .ion-text-start { 
        text-align: right; 
      }
      /* Column specific widths */
      th:nth-child(1), td:nth-child(1) { width: 5%; } /* التسلسل */
      th:nth-child(2), td:nth-child(2) { width: 8%; } /* كود الصنف */
      th:nth-child(3), td:nth-child(3) { width: 25%; } /* اسم الصنف */
      th:nth-child(4), td:nth-child(4) { width: 8%; } /* الوحدة */
      th:nth-child(5), td:nth-child(5) { width: 12%; } /* المجموعة */
      th:nth-child(6), td:nth-child(6) { width: 10%; } /* الكمية الحالية */
      th:nth-child(7), td:nth-child(7) { width: 10%; } /* سعر الشراء */
      th:nth-child(8), td:nth-child(8) { width: 10%; } /* سعر البيع */
      th:nth-child(9), td:nth-child(9) { width: 12%; } /* قيمة المخزون */
      
      /* Header styling */
      h1, h2 { 
        margin: 5px 0; 
        font-size: 14px;
      }
      img { 
        max-width: 60px; 
        max-height: 40px; 
        object-fit: contain; 
      }
      /* Summary sections */
      .summary-section {
        font-size: 8px;
        margin: 10px 0;
      }
      .grid-container {
        display: flex;
        justify-content: space-between;
        font-size: 8px;
      }
      .grid-item {
        flex: 1;
        text-align: center;
        padding: 5px;
      }
    `);
            mywindow.document.write('</style></head><body>');
            mywindow.document.write(printContent);
            mywindow.document.write('</body></html>');
            mywindow.document.close();
            mywindow.focus();
            mywindow.window.print();
            mywindow.window.close();
            this.modalController.dismiss();
        });
    }
    generateTitle() {
        switch (this.exportMode) {
            case 'filtered':
                return 'تقرير المخزون - البيانات المفلترة';
            case 'search':
                return 'تقرير المخزون - نتائج البحث';
            default:
                return 'تقرير المخزون - جميع الأصناف';
        }
    }
    formatBalance(balance) {
        if (!balance && balance !== 0)
            return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(Math.abs(balance));
    }
    getTotalQuantity() {
        if (!this.printData || this.printData.length === 0)
            return '0.00';
        const total = this.printData.reduce((sum, item) => sum + (item.currentQuantity || 0), 0);
        return this.formatBalance(total);
    }
    getTotalValue() {
        if (!this.printData || this.printData.length === 0)
            return '0.00';
        const total = this.printData.reduce((sum, item) => {
            return sum + ((item.currentQuantity || 0) * (item.item_parcode || 0));
        }, 0);
        return this.formatBalance(total);
    }
    getTotalValueRaw() {
        if (!this.printData || this.printData.length === 0)
            return 0;
        return this.printData.reduce((sum, item) => {
            return sum + ((item.currentQuantity || 0) * (item.item_parcode || 0));
        }, 0);
    }
    getItemsInStock() {
        if (!this.printData || this.printData.length === 0)
            return 0;
        return this.printData.filter(item => (item.currentQuantity || 0) > 0).length;
    }
    getItemsOutOfStock() {
        if (!this.printData || this.printData.length === 0)
            return 0;
        return this.printData.filter(item => (item.currentQuantity || 0) === 0).length;
    }
    getAverageStockValue() {
        if (!this.printData || this.printData.length === 0)
            return 0;
        const totalValue = this.printData.reduce((sum, item) => {
            return sum + ((item.currentQuantity || 0) * (item.item_parcode || 0));
        }, 0);
        return totalValue / this.printData.length;
    }
    getCurrentDate() {
        return new Date().toLocaleDateString('en-US');
    }
    getCurrentTime() {
        return new Date().toLocaleTimeString('en-US');
    }
    // Get current currency symbol for headers
    getCurrencySymbol() {
        return this.currencyService.getCurrentCurrencySymbol();
    }
};
ItemStockPrintPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_2__.CurrencyService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
ItemStockPrintPage.propDecorators = {
    printData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    exportMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    userName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ItemStockPrintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-item-stock-print',
        template: _item_stock_print_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_stock_print_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemStockPrintPage);



/***/ }),

/***/ 10752:
/*!************************************************************************!*\
  !*** ./src/app/item-stock-print/item-stock-print.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\n#printarea1 {\n  width: 100%;\n  padding: 20px;\n  background: white;\n  font-family: Arial, sans-serif;\n  direction: rtl;\n}\n\n@media print {\n  @page {\n    size: A4 landscape;\n    margin: 0.5in;\n  }\n  body, ion-app, ion-content {\n    background: white !important;\n    color: black !important;\n  }\n\n  #printarea1 {\n    padding: 0 !important;\n    margin: 0 !important;\n    width: 100% !important;\n    max-width: none !important;\n  }\n\n  table {\n    width: 100% !important;\n    border-collapse: collapse !important;\n    font-size: 8px !important;\n    table-layout: fixed !important;\n    margin: 0 !important;\n    /* 'D*3D3D */\n    /* CH/ 'D5FA */\n    /* '3E 'D5FA */\n    /* 'DH-/) */\n    /* 'DE,EH9) */\n    /* 'DCEJ) 'D-'DJ) */\n    /* 391 'D41'! */\n    /* 391 'D(J9 */\n    /* BJE) 'DE.2HF */\n  }\n  table th, table td {\n    border: 1px solid #333 !important;\n    text-align: center !important;\n    padding: 3px !important;\n    word-wrap: break-word !important;\n    vertical-align: middle !important;\n    font-size: 8px !important;\n  }\n  table th {\n    background: #667eea !important;\n    color: white !important;\n    font-weight: bold !important;\n    -webkit-print-color-adjust: exact !important;\n    color-adjust: exact !important;\n  }\n  table th:nth-child(1), table td:nth-child(1) {\n    width: 5% !important;\n  }\n  table th:nth-child(2), table td:nth-child(2) {\n    width: 8% !important;\n  }\n  table th:nth-child(3), table td:nth-child(3) {\n    width: 25% !important;\n  }\n  table th:nth-child(4), table td:nth-child(4) {\n    width: 8% !important;\n  }\n  table th:nth-child(5), table td:nth-child(5) {\n    width: 12% !important;\n  }\n  table th:nth-child(6), table td:nth-child(6) {\n    width: 10% !important;\n  }\n  table th:nth-child(7), table td:nth-child(7) {\n    width: 10% !important;\n  }\n  table th:nth-child(8), table td:nth-child(8) {\n    width: 10% !important;\n  }\n  table th:nth-child(9), table td:nth-child(9) {\n    width: 12% !important;\n  }\n\n  h1, h2 {\n    margin: 5px 0 !important;\n    font-size: 14px !important;\n  }\n\n  img {\n    max-width: 60px !important;\n    max-height: 40px !important;\n    object-fit: contain !important;\n  }\n\n  .summary-section {\n    font-size: 8px !important;\n    margin: 10px 0 !important;\n  }\n\n  .grid-container {\n    display: flex !important;\n    justify-content: space-between !important;\n    font-size: 8px !important;\n  }\n\n  .grid-item {\n    flex: 1 !important;\n    text-align: center !important;\n    padding: 5px !important;\n  }\n\n  ion-header, .print-controls {\n    display: none !important;\n  }\n}\n\n@media screen {\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 12px;\n    margin: 0;\n  }\n  table th, table td {\n    border: 1px solid #ddd;\n    text-align: center;\n    padding: 10px;\n    word-wrap: break-word;\n    vertical-align: middle;\n  }\n  table th {\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    color: white;\n    font-weight: bold;\n  }\n  table tbody tr:nth-child(odd) {\n    background-color: #f8f9fa;\n  }\n  table tbody tr:nth-child(even) {\n    background-color: white;\n  }\n\n  .table-responsive {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n.header-layout {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.header-layout .header-cell {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.header-layout .header-cell.left {\n  width: 150px;\n  text-align: left;\n}\n\n.header-layout .header-cell.center {\n  text-align: center;\n}\n\n.header-layout .header-cell.right {\n  width: 150px;\n  text-align: right;\n}\n\n.info-section {\n  margin-bottom: 25px;\n  border: 2px solid #333;\n  padding: 15px;\n  direction: rtl;\n  border-radius: 8px;\n  background-color: #f9f9f9;\n}\n\n.info-section .info-grid {\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n.info-section .info-grid .info-row {\n  margin-bottom: 12px;\n  border-bottom: 2px dotted #666;\n  padding-bottom: 8px;\n}\n\n.info-section .info-grid .info-row .info-item {\n  display: inline-block;\n  width: 48%;\n  text-align: right;\n}\n\n.info-section .info-grid .info-row .info-item strong {\n  color: #333;\n}\n\n.info-section .info-grid .info-row .info-item span {\n  color: #555;\n}\n\n.summary-stats {\n  margin-top: 30px;\n  border: 2px solid #333;\n  padding: 20px;\n  direction: rtl;\n  border-radius: 8px;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n}\n\n.summary-stats h3 {\n  text-align: center;\n  margin-bottom: 20px;\n  color: #333;\n  font-size: 20px;\n}\n\n.summary-stats .stats-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n  gap: 20px;\n  text-align: center;\n}\n\n.summary-stats .stats-grid .stat-item {\n  background-color: white;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.summary-stats .stats-grid .stat-item strong {\n  font-size: 18px;\n}\n\n.summary-stats .stats-grid .stat-item strong.success {\n  color: #28a745;\n}\n\n.summary-stats .stats-grid .stat-item strong.danger {\n  color: #dc3545;\n}\n\n.summary-stats .stats-grid .stat-item strong.primary {\n  color: #007bff;\n}\n\n.summary-stats .stats-grid .stat-item p {\n  margin: 5px 0 0 0;\n  color: #666;\n}\n\n.footer-section {\n  margin-top: 40px;\n  text-align: center;\n  border-top: 2px solid #333;\n  padding-top: 20px;\n  direction: rtl;\n}\n\n.footer-section .footer-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n  gap: 20px;\n  font-size: 14px;\n  color: #666;\n}\n\n.footer-section .footer-grid .footer-item strong {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.footer-section .footer-grid .footer-item p {\n  margin: 5px 0 0 0;\n  color: #333;\n  font-weight: bold;\n}\n\n.footer-section .company-footer {\n  margin-top: 20px;\n  padding-top: 15px;\n  border-top: 1px dotted #ccc;\n}\n\n.footer-section .company-footer p {\n  margin: 5px 0;\n  font-size: 12px;\n  color: #888;\n}\n\n.total-row {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;\n  color: white !important;\n  font-weight: bold !important;\n  -webkit-print-color-adjust: exact !important;\n  color-adjust: exact !important;\n}\n\n.total-row td {\n  font-size: 14px !important;\n  padding: 12px !important;\n}\n\n@media print {\n  .total-row {\n    background: #667eea !important;\n    color: white !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc3RvY2stcHJpbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFPQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0VBSkY7RUFPQTtJQUNFLDRCQUFBO0lBQ0EsdUJBQUE7RUFMRjs7RUFRQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0VBTEY7O0VBU0E7SUFDRSxzQkFBQTtJQUNBLG9DQUFBO0lBQ0EseUJBQUE7SUFDQSw4QkFBQTtJQUNBLG9CQUFBO0lBb0IyRCxZQUFBO0lBQ0EsY0FBQTtJQUNDLGNBQUE7SUFDRCxXQUFBO0lBQ0MsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQXpCOUQ7RUFERTtJQUNFLGlDQUFBO0lBQ0EsNkJBQUE7SUFDQSx1QkFBQTtJQUNBLGdDQUFBO0lBQ0EsaUNBQUE7SUFDQSx5QkFBQTtFQUdKO0VBQUU7SUFDRSw4QkFBQTtJQUNBLHVCQUFBO0lBQ0EsNEJBQUE7SUFDQSw0Q0FBQTtJQUNBLDhCQUFBO0VBRUo7RUFFRTtJQUFtQyxvQkFBQTtFQUNyQztFQUFFO0lBQW1DLG9CQUFBO0VBR3JDO0VBRkU7SUFBbUMscUJBQUE7RUFLckM7RUFKRTtJQUFtQyxvQkFBQTtFQU9yQztFQU5FO0lBQW1DLHFCQUFBO0VBU3JDO0VBUkU7SUFBbUMscUJBQUE7RUFXckM7RUFWRTtJQUFtQyxxQkFBQTtFQWFyQztFQVpFO0lBQW1DLHFCQUFBO0VBZXJDO0VBZEU7SUFBbUMscUJBQUE7RUFpQnJDOztFQWJBO0lBQ0Usd0JBQUE7SUFDQSwwQkFBQTtFQWdCRjs7RUFiQTtJQUNFLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQTtFQWdCRjs7RUFaQTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFlRjs7RUFaQTtJQUNFLHdCQUFBO0lBQ0EseUNBQUE7SUFDQSx5QkFBQTtFQWVGOztFQVpBO0lBQ0Usa0JBQUE7SUFDQSw2QkFBQTtJQUNBLHVCQUFBO0VBZUY7O0VBWEE7SUFDRSx3QkFBQTtFQWNGO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLFdBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0VBWUY7RUFWRTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtFQVlKO0VBVEU7SUFDRSw2REFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQVdKO0VBUkU7SUFDRSx5QkFBQTtFQVVKO0VBUEU7SUFDRSx1QkFBQTtFQVNKOztFQUpBO0lBQ0UsZ0JBQUE7SUFDQSxpQ0FBQTtFQU9GO0FBQ0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBS0o7O0FBSEk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFLTjs7QUFGSTtFQUNFLGtCQUFBO0FBSU47O0FBREk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFHTjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVJO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQU47O0FBRU07RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUFSOztBQUVRO0VBQ0UsV0FBQTtBQUFWOztBQUdRO0VBQ0UsV0FBQTtBQURWOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtBQU5GOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGtCQUFBO0FBUEo7O0FBU0k7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBUE47O0FBU007RUFDRSxlQUFBO0FBUFI7O0FBU1E7RUFBWSxjQUFBO0FBTnBCOztBQU9RO0VBQVcsY0FBQTtBQUpuQjs7QUFLUTtFQUFZLGNBQUE7QUFGcEI7O0FBS007RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFIUjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVNFO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVBKOztBQVVNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBUlI7O0FBV007RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVRSOztBQWNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBWko7O0FBY0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFaTjs7QUFrQkE7RUFDRSx3RUFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0FBZkY7O0FBaUJFO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtBQWZKOztBQW1CQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSx1QkFBQTtFQWhCRjtBQUNGIiwiZmlsZSI6Iml0ZW0tc3RvY2stcHJpbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJpbnQtc3BlY2lmaWMgc3R5bGVzIGZvciBpdGVtIHN0b2NrIHJlcG9ydFxuOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59XG5cbi8vIEdlbmVyYWwgcHJpbnQgY29udGFpbmVyXG4jcHJpbnRhcmVhMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxuLy8gUHJpbnQgbWVkaWEgcXVlcmllcyBmb3Igb3B0aW1hbCBwcmludGluZ1xuQG1lZGlhIHByaW50IHtcbiAgQHBhZ2Uge1xuICAgIHNpemU6IEE0IGxhbmRzY2FwZTtcbiAgICBtYXJnaW46IDAuNWluO1xuICB9XG4gIFxuICBib2R5LCBpb24tYXBwLCBpb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgI3ByaW50YXJlYTEge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvLyBUYWJsZSBzdHlsaW5nIGZvciBwcmludFxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgdGgsIHRkIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIHRoIHtcbiAgICAgIGJhY2tncm91bmQ6ICM2NjdlZWEgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50O1xuICAgICAgY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAvLyBTcGVjaWZpYyBjb2x1bW4gd2lkdGhzIGZvciBwcmludFxuICAgIHRoOm50aC1jaGlsZCgxKSwgdGQ6bnRoLWNoaWxkKDEpIHsgd2lkdGg6IDUlICFpbXBvcnRhbnQ7IH0gLyogJ0QqM0QzRCAqL1xuICAgIHRoOm50aC1jaGlsZCgyKSwgdGQ6bnRoLWNoaWxkKDIpIHsgd2lkdGg6IDglICFpbXBvcnRhbnQ7IH0gLyogQ0gvICdENUZBICovXG4gICAgdGg6bnRoLWNoaWxkKDMpLCB0ZDpudGgtY2hpbGQoMykgeyB3aWR0aDogMjUlICFpbXBvcnRhbnQ7IH0gLyogJzNFICdENUZBICovXG4gICAgdGg6bnRoLWNoaWxkKDQpLCB0ZDpudGgtY2hpbGQoNCkgeyB3aWR0aDogOCUgIWltcG9ydGFudDsgfSAvKiAnREgtLykgKi9cbiAgICB0aDpudGgtY2hpbGQoNSksIHRkOm50aC1jaGlsZCg1KSB7IHdpZHRoOiAxMiUgIWltcG9ydGFudDsgfSAvKiAnREUsRUg5KSAqL1xuICAgIHRoOm50aC1jaGlsZCg2KSwgdGQ6bnRoLWNoaWxkKDYpIHsgd2lkdGg6IDEwJSAhaW1wb3J0YW50OyB9IC8qICdEQ0VKKSAnRC0nREopICovXG4gICAgdGg6bnRoLWNoaWxkKDcpLCB0ZDpudGgtY2hpbGQoNykgeyB3aWR0aDogMTAlICFpbXBvcnRhbnQ7IH0gLyogMzkxICdENDEnISAqL1xuICAgIHRoOm50aC1jaGlsZCg4KSwgdGQ6bnRoLWNoaWxkKDgpIHsgd2lkdGg6IDEwJSAhaW1wb3J0YW50OyB9IC8qIDM5MSAnRChKOSAqL1xuICAgIHRoOm50aC1jaGlsZCg5KSwgdGQ6bnRoLWNoaWxkKDkpIHsgd2lkdGg6IDEyJSAhaW1wb3J0YW50OyB9IC8qIEJKRSkgJ0RFLjJIRiAqL1xuICB9XG4gIFxuICAvLyBIZWFkZXIgZWxlbWVudHNcbiAgaDEsIGgyIHtcbiAgICBtYXJnaW46IDVweCAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLy8gU3VtbWFyeSBzZWN0aW9uc1xuICAuc3VtbWFyeS1zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5ncmlkLWl0ZW0ge1xuICAgIGZsZXg6IDEgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLy8gSGlkZSB1bm5lY2Vzc2FyeSBlbGVtZW50c1xuICBpb24taGVhZGVyLCAucHJpbnQtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBTY3JlZW4gc3R5bGVzIGZvciBwcmV2aWV3XG5AbWVkaWEgc2NyZWVuIHtcbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgICB0aCwgdGQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICBcbiAgICB0aCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIFxuICAgIHRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgfVxuICAgIFxuICAgIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIE1ha2UgdGFibGUgcmVzcG9uc2l2ZSBvbiBzY3JlZW5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG59XG5cbi8vIEhlYWRlciBsYXlvdXRcbi5oZWFkZXItbGF5b3V0IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBcbiAgLmhlYWRlci1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgXG4gICAgJi5sZWZ0IHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIFxuICAgICYuY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgJi5yaWdodCB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbn1cblxuLy8gSW5mb3JtYXRpb24gc2VjdGlvbnMgc3R5bGluZ1xuLmluZm8tc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIFxuICAuaW5mby1ncmlkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIFxuICAgIC5pbmZvLXJvdyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjNjY2O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIFxuICAgICAgLmluZm8taXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIFxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBTdW1tYXJ5IHN0YXRpc3RpY3Mgc3R5bGluZ1xuLnN1bW1hcnktc3RhdHMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xuICBcbiAgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBcbiAgLnN0YXRzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIC5zdGF0LWl0ZW0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIFxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBcbiAgICAgICAgJi5zdWNjZXNzIHsgY29sb3I6ICMyOGE3NDU7IH1cbiAgICAgICAgJi5kYW5nZXIgeyBjb2xvcjogI2RjMzU0NTsgfVxuICAgICAgICAmLnByaW1hcnkgeyBjb2xvcjogIzAwN2JmZjsgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMCAwIDA7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBGb290ZXIgc3R5bGluZ1xuLmZvb3Rlci1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzMzMztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBcbiAgLmZvb3Rlci1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBcbiAgICAuZm9vdGVyLWl0ZW0ge1xuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY29tcGFueS1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjY2NjO1xuICAgIFxuICAgIHAge1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjODg4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBUb3RhbCByb3cgc3R5bGluZ1xuLnRvdGFsLXJvdyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50O1xuICBjb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7XG4gIFxuICB0ZCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC50b3RhbC1yb3cge1xuICAgIGJhY2tncm91bmQ6ICM2NjdlZWEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 53701:
/*!************************************************************************!*\
  !*** ./src/app/item-stock-print/item-stock-print.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div style=\"padding: 20px;\">\n    <div #printarea1 id=\"printarea1\">\n      <!-- Currency Information Header -->\n      <div class=\"currency-info\" style=\"font-size: 0.8em; margin-bottom: 15px; border-bottom: 1px solid #ccc; padding-bottom: 8px; text-align: center; direction: rtl;\" *ngIf=\"currentCurrency !== 'SDG'\">\n        <p style=\"margin: 5px 0; color: #333;\">العملة: {{currentCurrency}} - جميع القيم محولة من الجنيه السوداني</p>\n      </div>\n      \n      <!-- Header with Images and Title -->\n      <div style=\"display: table; width: 100%; margin-bottom: 30px;\">\n        <div style=\"display: table-cell; width: 150px; text-align: left; vertical-align: middle;\">\n          <img [src]=\"vehicleBase64 || 'assets/imgs/tuk.jpg'\" style=\"width: 120px; height: 80px; object-fit: contain;\" alt=\"Vehicle\">\n        </div>\n        <div style=\"display: table-cell; text-align: center; vertical-align: middle;\">\n          <h2 style=\"margin: 5px 0 0 0; font-size: 32px; font-weight: bold;\">GVS</h2>\n          <h1 style=\"margin: 10px 0; padding: 15px 25px; background-color: #f0f0f0; display: inline-block; font-size: 28px; border-radius: 8px; direction: rtl;\">\n            {{ generateTitle() }}\n          </h1>\n        </div>\n        <div style=\"display: table-cell; width: 150px; text-align: right; vertical-align: middle;\">\n          <img [src]=\"logoBase64 || 'assets/imgs/logo.png'\" style=\"width: 120px; height: 80px; object-fit: contain;\" alt=\"Logo\">\n        </div>\n      </div>\n\n      <!-- Report Information Section - RTL -->\n      <div style=\"margin-bottom: 25px; border: 2px solid #333; padding: 15px; direction: rtl; border-radius: 8px; background-color: #f9f9f9;\">\n        <div style=\"font-size: 14px; margin-right: 10px;\">\n          <div style=\"margin-bottom: 12px; border-bottom: 2px dotted #666; padding-bottom: 8px;\">\n            <span style=\"display: inline-block; width: 48%; text-align: right;\">\n              <strong style=\"color: #333;\">تاريخ التقرير: </strong>\n              <span style=\"color: #555;\">{{ getCurrentDate() }}</span>\n            </span>\n            <span style=\"display: inline-block; width: 48%; text-align: right;\">\n              <strong style=\"color: #333;\">وقت التقرير: </strong>\n              <span style=\"color: #555;\">{{ getCurrentTime() }}</span>\n            </span>\n          </div>\n          <div style=\"margin-bottom: 8px;\">\n            <span style=\"display: inline-block; width: 48%; text-align: right;\">\n              <strong style=\"color: #333;\">إجمالي الأصناف: </strong>\n              <span style=\"color: #555;\">{{ printData?.length || 0 }}</span>\n            </span>\n            <span style=\"display: inline-block; width: 48%; text-align: right;\">\n              <strong style=\"color: #333;\">نوع التقرير: </strong>\n              <span style=\"color: #555;\">\n                {{ exportMode === 'filtered' ? 'مفلتر' : (exportMode === 'search' ? 'بحث' : 'شامل') }}\n              </span>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Items Table - RTL with Modern Design -->\n      <div *ngIf=\"printData && printData.length > 0\" class=\"table-responsive\" style=\"margin-bottom: 20px; direction: rtl; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;\">\n        <table>\n          <thead>\n            <tr>\n              <th>التسلسل</th>\n              <th>كود الصنف</th>\n              <th>اسم الصنف</th>\n              <th>الوحدة</th>\n              <th>المجموعة</th>\n              <th>الكمية الحالية</th>\n              <th>سعر الشراء ({{ getCurrencySymbol() }})</th>\n              <th>سعر البيع ({{ getCurrencySymbol() }})</th>\n              <th>قيمة المخزون ({{ getCurrencySymbol() }})</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of printData; let i = index; let isOdd = odd\">\n              <td>{{ i + 1 }}</td>\n              <td>{{ item.item_code || '-' }}</td>\n              <td>{{ item.item_name || '-' }}</td>\n              <td>{{ item.item_unit || '-' }}</td>\n              <td>{{ item.item_cat || '-' }}</td>\n              <td [style.color]=\"item.currentQuantity > 0 ? '#28a745' : '#dc3545'\">\n                {{ formatBalance(item.currentQuantity || 0) }}\n              </td>\n              <td>{{ (item.item_parcode || 0) | currencyDisplay:'SDG':false }}</td>\n              <td>{{ (item.item_Sell_price || 0) | currencyDisplay:'SDG':false }}</td>\n              <td>{{ ((item.quantity || 0) * (item.unit_price || item.pay_price || 0)) | currencyDisplay:'SDG':false }}</td>\n            </tr>\n          </tbody>\n          \n          <!-- Summary Row -->\n          <tfoot>\n            <tr class=\"total-row\">\n              <td colspan=\"5\">الإجمالي</td>\n              <!-- <td>{{ getTotalQuantity() }}</td> -->\n              <td colspan=\"2\"></td>\n              <td>{{ getTotalValueRaw() | currencyDisplay:'SDG':false }}</td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n\n      <!-- No Data Message -->\n      <div *ngIf=\"!printData || printData.length === 0\" \n           style=\"text-align: center; padding: 40px; background-color: #f8f9fa; border-radius: 8px; margin: 20px 0;\">\n        <p style=\"font-size: 18px; color: #666; direction: rtl;\">لا توجد بيانات للعرض</p>\n      </div>\n\n      <!-- Summary Statistics -->\n      <div *ngIf=\"printData && printData.length > 0\" \n           style=\"margin-top: 30px; border: 2px solid #333; padding: 20px; direction: rtl; border-radius: 8px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\">\n        <h3 style=\"text-align: center; margin-bottom: 20px; color: #333; font-size: 20px;\">ملخص إحصائيات المخزون</h3>\n        <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center;\">\n          <div style=\"background-color: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\">\n            <strong style=\"color: #28a745; font-size: 18px;\">{{ getItemsInStock() }}</strong>\n            <p style=\"margin: 5px 0 0 0; color: #666;\">أصناف متوفرة</p>\n          </div>\n          <div style=\"background-color: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\">\n            <strong style=\"color: #dc3545; font-size: 18px;\">{{ getItemsOutOfStock() }}</strong>\n            <p style=\"margin: 5px 0 0 0; color: #666;\">أصناف غير متوفرة</p>\n          </div>\n          <!-- <div style=\"background-color: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\">\n            <strong style=\"color: #007bff; font-size: 18px;\">{{ formatBalance(getAverageStockValue()) }}</strong>\n            <p style=\"margin: 5px 0 0 0; color: #666;\">متوسط قيمة المخزون</p>\n          </div> -->\n        </div>\n      </div>\n\n      <!-- Footer with User Info -->\n      <div style=\"margin-top: 40px; text-align: center; border-top: 2px solid #333; padding-top: 20px; direction: rtl;\">\n        <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; font-size: 14px; color: #666;\">\n          <div>\n            <strong>تم إنشاء التقرير بواسطة:</strong>\n            <p style=\"margin: 5px 0 0 0; color: #333; font-weight: bold;\">{{ userName || 'مستخدم غير معروف' }}</p>\n          </div>\n          <div>\n            <strong>النظام:</strong>\n            <p style=\"margin: 5px 0 0 0; color: #333; font-weight: bold;\">نظام إدارة المخزون - GVS</p>\n          </div>\n          <div>\n            <strong>رقم الصفحة:</strong>\n            <p style=\"margin: 5px 0 0 0; color: #333; font-weight: bold;\">1 من 1</p>\n          </div>\n        </div>\n        \n        <!-- Company Footer -->\n        <!-- <div style=\"margin-top: 20px; padding-top: 15px; border-top: 1px dotted #ccc;\">\n          <p style=\"margin: 5px 0; font-size: 12px; color: #888;\">\n            <strong>شركة جي في اس للإستيراد والتصدير</strong> | \n            الوكيل الحصري لماركات POWERMAX, SIMBA, GIRISH\n          </p>\n          <p style=\"margin: 5px 0; font-size: 12px; color: #888;\">\n            شكراً لاستخدام نظام إدارة المخزون\n          </p>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_item-stock-print_item-stock-print_module_ts.js.map
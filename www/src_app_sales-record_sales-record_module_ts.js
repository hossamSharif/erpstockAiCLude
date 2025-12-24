"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sales-record_sales-record_module_ts"],{

/***/ 27804:
/*!*************************************************************!*\
  !*** ./src/app/sales-record/sales-record-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesRecordPageRoutingModule": () => (/* binding */ SalesRecordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _sales_record_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-record.page */ 10795);




const routes = [
    {
        path: '',
        component: _sales_record_page__WEBPACK_IMPORTED_MODULE_0__.SalesRecordPage
    }
];
let SalesRecordPageRoutingModule = class SalesRecordPageRoutingModule {
};
SalesRecordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalesRecordPageRoutingModule);



/***/ }),

/***/ 40994:
/*!*****************************************************!*\
  !*** ./src/app/sales-record/sales-record.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesRecordPageModule": () => (/* binding */ SalesRecordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _sales_record_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-record-routing.module */ 27804);
/* harmony import */ var _sales_record_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-record.page */ 10795);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let SalesRecordPageModule = class SalesRecordPageModule {
};
SalesRecordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sales_record_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesRecordPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_sales_record_page__WEBPACK_IMPORTED_MODULE_1__.SalesRecordPage]
    })
], SalesRecordPageModule);



/***/ }),

/***/ 10795:
/*!***************************************************!*\
  !*** ./src/app/sales-record/sales-record.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesRecordPage": () => (/* binding */ SalesRecordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _sales_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-record.page.html?ngResource */ 3771);
/* harmony import */ var _sales_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-record.page.scss?ngResource */ 13370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 75755);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _component_action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/action-popover/action-popover.component */ 10276);
/* harmony import */ var _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/invoice-price-config-dialog/invoice-price-config-dialog.component */ 67705);
/* harmony import */ var _services_sorting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/sorting.service */ 52562);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/export.service */ 79002);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/currency.service */ 6612);
/* harmony import */ var _services_data_verification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/data-verification.service */ 23614);

















// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
let SalesRecordPage = class SalesRecordPage {
    constructor(popoverController, platform, rout, storage, modalController, loadingController, datePipe, api, toast, sortingService, exportService, currencyService, cdr, verificationService, alertController) {
        this.popoverController = popoverController;
        this.platform = platform;
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.sortingService = sortingService;
        this.exportService = exportService;
        this.currencyService = currencyService;
        this.cdr = cdr;
        this.verificationService = verificationService;
        this.alertController = alertController;
        this.payArray = [];
        this.sortedPayArray = []; // Sorted invoices for display
        this.currentSort = null;
        this.printArr = [];
        this.initialInvoices = [];
        this.loadinDet = false;
        this.sub_accountLocalSales = [];
        this.sub_accountSales = [];
        this.sub_account = [];
        this.printMode = false;
        this.itemList = [];
        this.radioVal = 0;
        this.searchLang = 0;
        this.loading = false;
        this.loadingDetails = false;
        this.showEmpty = false;
        this.showError = false;
        this.offline = false;
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.color = 'dark';
        this.currentCustumerStatus = 0;
        this.device = '';
        // Multi-select invoice properties
        this.selectedInvoicesList = [];
        this.selectAllInvoices = false;
        this.slideOpts = {
            slidesPerView: 4,
            spaceBetween: 0
            // coverflowEffect: {
            //   rotate: 50,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 1,
            //   slideShadows: true,
            // }  
        };
        this.pdfObj = null;
        this.tbArr = {
            content: [
                {
                    columns: [
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: 'auto',
                            text: 'BANSI GIRISH JAYANTILAL IMPORT & EXPORT ENTERPRISES',
                            alignment: 'center'
                        },
                        {
                            width: '*',
                            text: ''
                        },
                    ],
                    margin: [0, 0, 10, 10]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: 'auto',
                            text: ' Exclusive agent for brands (POWERMAX , SIMBA , GIRISH )',
                            alignment: 'center'
                        },
                        {
                            width: '*',
                            text: ''
                        }
                    ],
                    margin: [0, 0, 10, 10]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: 'auto',
                            text: ' فاتورة مبيعات',
                            alignment: 'center'
                        },
                        {
                            width: '*',
                            text: ''
                        }
                    ],
                    margin: [0, 10, 0, 10]
                },
                {
                    columns: [
                        {
                            width: 90,
                            text: 'التاريخ :'
                        },
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: 90,
                            text: ''
                        },
                        {
                            width: '*',
                            text: 'العميل:'
                        },
                    ],
                    margin: [0, 20, 0, 10]
                },
                {
                    columns: [
                        {
                            width: 90,
                            text: 'رقم الهاتف :'
                        },
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: 90,
                            text: ''
                        },
                        {
                            width: '*',
                            text: 'المكان :'
                        },
                    ],
                    margin: [0, 10, 0, 10]
                },
                {
                    table: {
                        body: [
                            ['المجموع', 'سعر الوحدة', 'الكمية', 'الصنف', 'التسلسل']
                        ]
                    },
                    margin: [0, 10, 0, 10]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: 'auto',
                            text: 'إجمالي المبلغ',
                            alignment: 'center'
                        },
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: '*',
                            text: ''
                        }
                    ],
                    margin: [0, 10, 0, 10]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: 'auto',
                            text: 'المبلغ المدفوع  ',
                            alignment: 'center'
                        },
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: '*',
                            text: ''
                        }
                    ],
                    margin: [0, 10, 0, 10]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: 'auto',
                            text: 'المتبقي',
                            alignment: 'center'
                        },
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: '*',
                            text: ''
                        }
                    ],
                    margin: [0, 10, 0, 10]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: 'auto',
                            text: 'الرصيد الحالي ',
                            alignment: 'center'
                        },
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: '*',
                            text: ''
                        }
                    ],
                    margin: [0, 10, 0, 10]
                }
            ],
            defaultStyle: {
                font: 'MyFontName'
            }
        };
        // Currency-related properties
        this.currentCurrency$ = this.currencyService.getCurrentCurrency();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.checkPlatform();
        this.getAppInfo();
        this.prepareOffline();
        this.sums = { pay: 0, change: 0, discount: 0, tot: 0, totAfterDiscout: 0 };
        let d = new Date;
        this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd');
    }
    checkPlatform() {
        if (this.platform.is('desktop')) {
            this.device = 'desktop';
            //console.log('I am an desktop device!');
        }
        else if (this.platform.is('mobile')) {
            this.device = 'mobile';
            //console.log('I am an mobile device!'); 
        }
    }
    ngOnInit() {
        this.payArray = [];
        this.sortedPayArray = [];
        this.currentSort = null;
        // Check category visibility setting
        //  this.isCategoryVisibilityEnabled = CategoriesPage.isCategoryVisibilityEnabled();
        //console.log('ngOnInit')
        this.getAppInfo();
        this.prepareOffline();
        this.initializeCurrency();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Initialize currency service
            yield this.currencyService.initializeCurrency();
            // Load supported currencies
            yield this.currencyService.loadSupportedCurrencies();
            // Load currency rates when store_info and year are available
            if (this.store_info && this.year) {
                yield this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
            }
            // Subscribe to currency changes for UI updates
            this.subscription.add(this.currencyService.getCurrentCurrency().subscribe(currency => {
                this.cdr.detectChanges(); // Trigger UI update for price displays
            }));
        });
    }
    presentActionPopover(ev, pay, sub_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _component_action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__.ActionPopoverComponent,
                event: ev,
                translucent: true,
                cssClass: 'action-popover-rtl',
                componentProps: {
                    contextType: this.radioVal === 4 ? 'returns' : 'sales'
                }
            });
            popover.onDidDismiss().then((result) => {
                if (result.data) {
                    switch (result.data.action) {
                        case 'print':
                            if (this.radioVal === 4) {
                                this.printReturnInvo('', pay);
                            }
                            else {
                                this.printInvo('', pay);
                            }
                            break;
                        case 'edit':
                            if (this.radioVal === 4) {
                                this.getReturnInvoDetail(pay, sub_name, '');
                            }
                            else {
                                this.getPayInvoDetail(pay, sub_name, '');
                            }
                            break;
                        case 'copySales':
                            this.copyAsInvoice(pay, 'sales');
                            break;
                        case 'copyPurchase':
                            this.copyAsInvoice(pay, 'purchase');
                            break;
                    }
                }
            });
            return yield popover.present();
        });
    }
    /**
     * Verify invoice integrity
     */
    verifyInvoice(pay) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Verifying invoice... | جاري التحقق من الفاتورة...',
                spinner: 'crescent'
            });
            yield loading.present();
            // Pass invoice header data to verification service
            this.verificationService.verifySalesInvoice(pay.pay_ref, this.store_info.id, this.year.id, pay)
                .subscribe({
                next: (result) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: result.status === 'OK' ? 'Verification Passed | تم التحقق بنجاح' : 'Verification Failed | فشل التحقق',
                        message: `
              <div style="text-align: left; direction: ltr;">
                <strong>Invoice Ref:</strong> ${result.invoiceRef}<br>
                <strong>رقم الفاتورة:</strong> ${result.invoiceRef}<br><br>
                <strong>Customer:</strong> ${result.customerName}<br>
                <strong>العميل:</strong> ${result.customerName}<br><br>
                <strong>Stored Total:</strong> ${result.storedTotal.toFixed(2)}<br>
                <strong>الإجمالي المحفوظ:</strong> ${result.storedTotal.toFixed(2)}<br><br>
                <strong>Calculated Total:</strong> ${result.calculatedTotal.toFixed(2)}<br>
                <strong>الإجمالي المحسوب:</strong> ${result.calculatedTotal.toFixed(2)}<br><br>
                <strong>Difference:</strong> ${result.difference.toFixed(2)} ${result.difference > 0 ? '(Stored > Calculated)' : result.difference < 0 ? '(Stored < Calculated)' : ''}<br>
                <strong>الفرق:</strong> ${result.difference.toFixed(2)} ${result.difference > 0 ? '(المحفوظ > المحسوب)' : result.difference < 0 ? '(المحفوظ < المحسوب)' : ''}<br><br>
                ${result.status === 'OK' ?
                            '<strong style="color: green;">✓ Invoice data is correct | البيانات صحيحة</strong>' :
                            '<strong style="color: red;">✗ Invoice total does not match! | الإجمالي لا يتطابق!</strong>'}
              </div>
            `,
                        buttons: ['OK | حسناً']
                    });
                    yield alert.present();
                }),
                error: (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                    console.error('Verification error:', error);
                    const alert = yield this.alertController.create({
                        header: 'Error | خطأ',
                        message: 'Failed to verify invoice. Please try again. | فشل التحقق من الفاتورة. حاول مرة أخرى.',
                        buttons: ['OK | حسناً']
                    });
                    yield alert.present();
                })
            });
        });
    }
    copyAsInvoice(pay, type) {
        this.presentLoadingWithOptions('جاري نسخ الفاتورة...');
        // Check if we're dealing with initial invoices (radioVal == 3)
        if (this.radioVal == 3) {
            // Handle initial invoices using getPayInvoDetailinit API
            this.api.getPayInvoDetailinit(this.store_info.id, pay.pay_ref).subscribe(data => {
                let res = data;
                console.log('Initial invoice data:', res);
                // For initial invoices being copied as sales, skip the price config dialog
                // For initial invoices being copied as purchase, show the price config dialog
                if (type === 'sales') {
                    // Skip price config dialog for initial invoice to sales copy
                    this.loadingController.dismiss();
                    this.navigateToInvoicePage(res['data'], type);
                }
                else {
                    // Show price config dialog for initial invoice to purchase copy
                    this.showPriceConfigDialog(res['data'], type);
                }
            }, (err) => {
                this.loadingController.dismiss();
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            });
        }
        else {
            // Handle regular sales invoices (existing logic)
            // Determine which method to call based on offline status and pay_id
            if (this.offline == false && pay.pay_id != undefined) {
                this.api.getPayInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
                    let res = data;
                    console.log('Regular invoice data:', res);
                    this.showPriceConfigDialog(res['data'], type);
                }, (err) => {
                    this.loadingController.dismiss();
                    this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
                });
            }
            else if (this.offline == false && pay.pay_id == undefined) {
                let flt = [];
                flt = this.salesLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
                if (flt.length > 0) {
                    this.showPriceConfigDialog(flt[0].itemList, type);
                }
            }
            else if (this.offline == true && pay.pay_id != undefined) {
                let flt = [];
                flt = this.salesLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
                if (flt.length > 0) {
                    this.showPriceConfigDialog(flt[0].itemList, type);
                }
            }
            else if (this.offline == true && pay.pay_id == undefined) {
                let flt = [];
                flt = this.salesLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
                if (flt.length > 0) {
                    this.showPriceConfigDialog(flt[0].itemList, type);
                }
            }
        }
    }
    showPriceConfigDialog(itemList, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Dismiss loading controller first
            this.loadingController.dismiss();
            // For sales type, skip dialog and navigate directly
            if (type === 'sales') {
                this.navigateToInvoicePage(itemList, type);
                return;
            }
            // For purchase type, show the dialog
            const modal = yield this.modalController.create({
                component: _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_6__.InvoicePriceConfigDialogComponent,
                componentProps: {
                    itemList: itemList,
                    invoiceType: type,
                    context: 'sales-record'
                },
                cssClass: 'invoice-price-config-modal'
            });
            modal.onDidDismiss().then((result) => {
                if (result.data) {
                    // User confirmed configuration, use configured items
                    this.navigateToInvoicePage(result.data, type);
                }
                // If result.data is null/undefined, user cancelled - don't navigate anywhere
            });
            return yield modal.present();
        });
    }
    navigateToInvoicePage(itemList, type) {
        this.loadingController.dismiss();
        const salesitems = itemList.map(item => ({
            id: item.item_id,
            item_id: item.item_id,
            item_name: item.item_name,
            item_desc: item.item_desc,
            part_no: item.part_no,
            brand: item.brand,
            model: item.model,
            item_unit: item.item_unit,
            perch_price: item.perch_price || 0,
            pay_price: item.pay_price || 0,
            qty: item.quantity,
            tot: (item.pay_price * item.quantity).toFixed(2) || 0,
            availQty: item.quantity || 0,
            aliasEn: item.aliasEn
        }));
        const purchitems = itemList.map(item => ({
            id: item.item_id,
            item_id: item.item_id,
            item_name: item.item_name,
            item_desc: item.item_desc,
            part_no: item.part_no,
            brand: item.brand,
            model: item.model,
            item_unit: item.item_unit,
            perch_price: item.pay_price || 0,
            pay_price: item.pay_price || 0,
            qty: item.quantity,
            tot: (item.pay_price * item.quantity).toFixed(2) || 0,
            availQty: item.quantity || 0,
            aliasEn: item.aliasEn
        }));
        if (type === 'sales') {
            let navigationExtras = {
                queryParams: {
                    status: 'newInvoFromItemsPage',
                    selectedItemsList: JSON.stringify(salesitems)
                }
            };
            this.rout.navigate(['folder/sales'], navigationExtras);
        }
        else {
            let navigationExtras = {
                queryParams: {
                    status: 'newInvoFromItemsPage',
                    selectedItemsList: JSON.stringify(purchitems)
                }
            };
            this.rout.navigate(['folder/purchase'], navigationExtras);
        }
    }
    changeMode() {
        if (this.offline == true) {
            this.offline = false;
            this.color = 'primary';
        }
        else if (this.offline == false) {
            this.offline = true;
            this.color = 'dark';
        }
        this.storage.set('offline', this.offline).then((response) => {
            //console.log('mooooode',this.offline)  
        });
    }
    clear() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.payArray = [];
        this.sortedPayArray = [];
        this.salesLocal = [];
        this.showEmpty = false;
        this.loading = false;
        // Clear invoice selections when clearing account
        this.clearInvoiceSelection();
    }
    ionViewDidEnter() {
        this.payArray = [];
        this.sortedPayArray = [];
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                this.search();
            }
        });
    }
    getOffliemode() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log('mooooode',this.offline)
            if (this.offline == true) {
                this.color = 'dark';
            }
            else {
                this.color = 'primary';
            }
        });
    }
    getAppInfo() {
        this.getOffliemode();
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
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                //console.log(response)
                //console.log(this.store_info) 
                this.getSalesAccount();
                //this.search() 
            }
        });
        this.storage.get('sales').then((response) => {
            if (response) {
                this.sales = response;
                //console.log(this.sales)  
            }
        });
        this.storage.get('sales').then((response) => {
            if (response) {
                this.sales = response;
                //console.log(this.sales)  
            }
        });
        this.storage.get('searchLang').then((response) => {
            if (response) {
                this.searchLang = response;
                //console.log('searchLang' ,this.searchLang) 
            }
        });
    }
    prepareOffline() {
        this.storage.get('sub_accountLocalSales').then((response) => {
            if (response) {
                this.sub_accountLocalSales = response;
                console.log('this.sub_accountLocalSales', this.sub_accountLocalSales);
            }
        });
        //Yaw
        this.storage.get('sub_accountSales').then((response) => {
            if (response) {
                this.sub_accountSales = response;
                //console.log(this.sub_accountLocalSales)  
            }
        });
    }
    getSalesAccount() {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                console.log('this.sub_account', this.sub_account);
                this.recalSubBalance();
                this.addSubaccountLocal();
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.MixSubaccountSalesOffline();
        }
    }
    MixSubaccountSalesOffline() {
        this.sub_account = [];
        if (this.sub_accountLocalSales) {
            for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                const element = this.sub_accountLocalSales[i];
                this.sub_account.push(element);
            }
        }
        if (this.sub_accountSales) {
            for (let i = 0; i < this.sub_accountSales.length; i++) {
                const element = this.sub_accountSales[i];
                this.sub_account.push(element);
            }
        }
    }
    addSubaccountLocal() {
        if (this.sub_account) {
            if (this.sub_accountLocalSales) {
                for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                    const element = this.sub_accountLocalSales[i];
                    this.sub_account.push(element);
                }
            }
        }
        else {
            if (this.sub_accountLocalSales) {
                this.sub_account = this.sub_accountLocalSales;
            }
        }
    }
    recalSubBalance() {
        // adding new change to subbalances
        this.sub_account.forEach(element => {
            element.sub_balance = 0;
            let debitTot = +element.changeeTot + +element.fromDebitTot;
            let creditTot = +element.purchChangeeTot + +element.toCreditTot;
            if (debitTot == creditTot) {
                element.sub_balance = 0;
                element.currentCustumerStatus = '';
            }
            else if (debitTot > creditTot) {
                element.sub_balance = (+debitTot - +creditTot).toFixed(2);
                element.currentCustumerStatus = 'debit';
                if (this.selectedAccount.id == element.id) {
                    this.selectedAccount.sub_balance = element.sub_balance;
                }
            }
            else if (creditTot > debitTot) {
                element.sub_balance = (+creditTot - +debitTot).toFixed(2);
                element.currentCustumerStatus = 'credit';
                if (this.selectedAccount.id == element.id) {
                    this.selectedAccount.sub_balance = element.sub_balance;
                }
            }
        });
        console.log('recalSubBalance', this.sub_account);
    }
    createPdf(pay) {
        //   // ['المجموع', 'Column 2', 'Column 3' , 'Column 3', 'Column 3'],
        //   //         ['One value goes here', 'Another one here', 'OK?', 'Another one here', 'OK?', 'Another one here', 'OK?'] 
        //   this.preparePdf(pay)
        //   this.pdfObj = pdfMake.createPdf(this.tbArr ,null,
        //     {
        //     MyFontName: {
        //       normal: 'arial_Unicode_ms.ttf',
        //       bold: 'arial_Unicode_ms.ttf',
        //       italics: 'arial_Unicode_ms.ttf',
        //       bolditalics: 'arial_Unicode_ms.ttf'
        //      } // same as before
        //  },
        //  pdfFonts.pdfMake.vfs).download(pay.cust_name+".pdf")
    }
    downLoadPdf() {
    }
    preparePdf(pay) {
    }
    printInvo(printarea, dataFrom) {
        if (dataFrom.pay_id != undefined) {
            this.paInvo = dataFrom;
            let flt = this.sub_account.filter(x => +x.id == +dataFrom.cust_id);
            if (this.radioVal == 3) {
                this.api.getPayInvoDetailinit(this.store_info.id, dataFrom.pay_ref).subscribe(data => {
                    //console.log(data)
                    let res = data;
                    this.itemList = res['data'];
                    console.log('case 1', this.paInvo);
                    console.log('case2', res);
                    this.printArr = [];
                    this.printArr.push({
                        'payInvo': this.paInvo,
                        'itemList': this.itemList,
                        'selectedAccount': this.paInvo.sub_name,
                        "balanceStatus": "",
                        "sub_balanse": '',
                        'sub_nameNew': "",
                        'user_name': this.paInvo.user_name
                    });
                    //console.log(this.printArr)
                    this.presentModal(this.printArr, 'sales_record');
                }, (err) => {
                    //console.log(err);
                    this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
                }, () => {
                });
            }
            else {
                this.api.getPayInvoDetail(this.store_info.id, dataFrom.pay_ref, this.year.id).subscribe(data => {
                    //console.log(data)
                    let res = data;
                    this.itemList = res['data'];
                    console.log('case1', res);
                    this.printArr = [];
                    this.printArr.push({
                        'payInvo': this.paInvo,
                        'itemList': this.itemList,
                        'selectedAccount': this.paInvo.sub_name,
                        "balanceStatus": '',
                        "sub_balanse": '',
                        'sub_nameNew': "",
                        'user_name': this.paInvo.user_name
                    });
                    //console.log(this.printArr)
                    this.presentModal(this.printArr, 'sales_record');
                }, (err) => {
                    //console.log(err);
                    this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
                }, () => {
                });
            }
        }
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__.PrintModalPage,
                componentProps: {
                    "printArr": this.printArr,
                    "page": page
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                //console.log(dataReturned ) 
                if (dataReturned !== null) {
                    //console.log(dataReturned ) 
                }
            });
            return yield modal.present();
        });
    }
    preparedPrin(printarea, paInvo, itemList) {
        if (printarea && paInvo && itemList) {
            this.printMode = true;
            this.Print(printarea, this.paInvo, this.itemList);
        }
    }
    Print(elem, paInvo, itemList) {
        if (elem && paInvo && itemList) {
            var mywindow = window.open('', 'PRINT', 'height=400,width=600');
            mywindow.document.write('<html><head>');
            mywindow.document.write('<style type="text/css">');
            mywindow.document.write('.flr2{display:inline-flex;float:right;} .flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} .td2, .th2 {border: 0.5px solid #dddddd;text-align: center;padding: 8px;} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;} .ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }');
            mywindow.document.write('</style></head><body>');
            mywindow.document.write(document.getElementById(elem).innerHTML);
            mywindow.document.write('</body></html>');
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/ 
            mywindow.print();
            mywindow.close();
            this.printMode = false;
            return true;
        }
    }
    getSalesfromLocal() {
        this.salesLocal = [];
        this.storage.get('salesLocal').then((response) => {
            if (response) {
                this.salesLocal = response;
                //console.log(this.salesLocal)  
            }
        });
    }
    getSalesOffline() {
        this.salesOffline = [];
        this.storage.get('sales').then((response) => {
            if (response) {
                this.salesOffline = response;
                //console.log(this.salesOffline)  
            }
        });
    }
    pickAccount(ev) {
        let fl = this.sub_account.filter(x => x.sub_name == ev.target.value);
        //console.log(fl);
        if (fl.length > 0) {
            this.selectedAccount = {
                id: fl[0]['id'],
                ac_id: fl[0]['ac_id'],
                sub_name: fl[0]['sub_name'],
                sub_type: fl[0]['sub_type'],
                sub_code: fl[0]['sub_code'],
                store_id: fl[0]['store_id'],
                sub_balance: fl[0]['sub_balance'],
                cat_id: fl[0]['cat_id'],
                cat_name: fl[0]['cat_name'],
                currentCustumerStatus: fl[0]['currentCustumerStatus']
            };
            //console.log( this.selectedAccount);
            this.payArray = [];
            this.salesLocal = [];
            this.showEmpty = false;
            this.loading = false;
            //  this.setFocusOnInput()
        }
        else {
            // this.presentToast('خطأ في اسم الحساب ', 'danger') 
            this.selectedAccount.sub_name = "";
        }
    }
    search() {
        this.showEmpty = false;
        if (this.radioVal == 0) {
            if (this.offline == true) {
                this.getTopSalesOffline();
            }
            else {
                this.getTopSales();
            }
        }
        else if (this.radioVal == 1) {
            if (this.offline == true) {
                this.getSalesByDateOffline();
            }
            else {
                this.getSalesByDate();
            }
        }
        else if (this.radioVal == 2) {
            if (this.offline == true) {
                this.getSales2DateOffline();
            }
            else {
                this.getSales2Date();
            }
        }
        else if (this.radioVal == 3) {
            this.getInitialInvoicesServer();
        }
        else if (this.radioVal == 4) {
            if (this.offline == true) {
                // TODO: Handle offline sales returns when implemented
                this.showEmpty = true;
            }
            else {
                this.getSalesReturns();
            }
        }
    }
    getInitialInvoices() {
        this.payArray = [];
        this.loading = true;
        this.storage.get('initialInvoices').then((response2) => {
            if (response2) {
                let flt = [];
                flt = response2;
                this.initialInvoices = flt;
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            this.getTotal();
            // Apply category filtering after loading initial invoices from localStorage
            this.applySorting();
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
        });
        this.getTotal();
    }
    getPayDetailsForMob(pay) {
        if (!pay.item_details) {
            this.loadingDetails = true;
            this.api.getPayInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
                //console.log(data,'case 1')
                let res = data;
                //console.log(data) 
                this.payArray.forEach(element => {
                    if (element.pay_ref == pay.pay_ref) {
                        element.item_details = data['data'];
                    }
                });
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.loadingDetails = false;
            });
        }
    }
    getInitialInvoicesServer() {
        this.payArray = [];
        this.loading = true;
        this.api.getTopSalesInit(this.store_info.id).subscribe(data => {
            //console.log('hhhhhh',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading initial invoices from API 
            this.applySorting();
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    // Get sales returns method
    getSalesReturns() {
        this.payArray = [];
        this.loading = true;
        if (this.radioVal == 4) {
            // Get recent sales returns (similar to getTopSales)
            this.api.getTopSalesReturns(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                if (res['message'] != 'No record Found') {
                    this.payArray = res['data'];
                }
                // Apply account filter if selected
                if (this.selectedAccount.sub_name != "") {
                    if (this.payArray.length > 0) {
                        this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                    }
                }
                this.getTotal();
                this.applySorting();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
            }, (err) => {
                console.log('Sales returns error:', err);
                this.showEmpty = true;
                this.loading = false;
            });
        }
    }
    getSalesReturnsByDate() {
        this.payArray = [];
        this.loading = true;
        this.api.getSalesReturnsByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            // Apply account filter if selected  
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            this.applySorting();
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
        }, (err) => {
            console.log('Sales returns by date error:', err);
            this.showEmpty = true;
            this.loading = false;
        });
    }
    getTotal() {
        this.sums.tot = this.payArray.reduce((acc, obj) => { return acc + +obj.tot_pr; }, 0);
        this.sums.change = this.payArray.reduce((acc, obj) => { return acc + +obj.changee; }, 0);
        this.sums.pay = this.payArray.reduce((acc, obj) => { return acc + +obj.pay; }, 0);
        this.sums.discount = this.payArray.reduce((acc, obj) => { return acc + +obj.discount; }, 0);
        this.sums.totAfterDiscout = +this.sums.tot - this.sums.discount;
    }
    getTopSales() {
        this.getSalesfromLocal();
        this.loading = true;
        this.api.getTopSales(this.store_info.id, this.year.id).subscribe(data => {
            //console.log('hhhhhh',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            if (this.salesLocal.length > 0) {
                //console.log('locLaly',this.salesLocal)
                for (let i = 0; i < this.salesLocal.length; i++) {
                    const element = this.salesLocal[i];
                    this.payArray.push(element.payInvo);
                }
            }
            // Apply account filter if selected
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading all sales data in getTopSales  
            this.applySorting();
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
            //console.log(this.payArray)
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    getTopSalesOffline() {
        //console.log('getTopSalesOffline')
        this.payArray = [];
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.storage.get('salesLocal').then((response) => {
            if (response) {
                let flt = [];
                flt = response;
                this.salesLocal = flt;
                //console.log(flt)
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            // 
            this.storage.get('sales').then((response2) => {
                if (response2) {
                    let flt = [];
                    flt = response2;
                    this.salesOffline = flt;
                    this.sales = this.salesOffline;
                    //console.log(flt)
                    if (flt.length > 0) {
                        for (let i = 0; i < flt.length; i++) {
                            const element = flt[i];
                            this.payArray.push(element.payInvo);
                        }
                    }
                }
                this.getTotal();
                // Apply category filtering after loading sales data from localStorage in getTopSalesOffline
                this.applySorting();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
            });
            //custName
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after account filter in getTopSalesOffline
            this.applySorting();
        });
    }
    getSalesByDate() {
        this.payArray = [];
        this.salesLocal = [];
        this.salesOffline = [];
        this.sales = [];
        //console.log(this.store_info.id,this.startingDate)
        this.getSalesfromLocal();
        this.loading = true;
        this.api.getSalesByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            if (this.salesLocal.length > 0) {
                this.salesLocal = this.salesLocal.filter(x => x.payInvo.pay_id == undefined && x.payInvo.pay_date == this.startingDate);
                //console.log('locLaly',this.salesLocal)
                for (let i = 0; i < this.salesLocal.length; i++) {
                    const element = this.salesLocal[i];
                    this.payArray.push(element.payInvo);
                }
            }
            // Apply account filter if selected
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading all sales data in getSalesByDate
            this.applySorting();
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
            //console.log(this.payArray)
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    getSalesByDateOffline() {
        this.payArray = [];
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.loading = true;
        this.storage.get('salesLocal').then((response) => {
            if (response) {
                this.salesLocal = response;
                let flt = [];
                //console.log('haloo',this.salesLocal) 
                flt = this.salesLocal.filter(x => x.payInvo.pay_date == this.startingDate);
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            this.storage.get('sales').then((response2) => {
                if (response2) {
                    this.salesOffline = response2;
                    this.sales = this.salesOffline;
                    //console.log(this.salesOffline) 
                    let flt = [];
                    flt = this.salesOffline.filter(x => x.payInvo.pay_date == this.startingDate);
                    if (flt.length > 0) {
                        for (let i = 0; i < flt.length; i++) {
                            const element = flt[i];
                            this.payArray.push(element.payInvo);
                        }
                    }
                }
                this.getTotal();
                // Apply category filtering after loading sales data from localStorage in getSalesByDateOffline
                this.applySorting();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
            });
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after account filter in getSalesByDateOffline
            this.applySorting();
        });
    }
    getSales2Date() {
        this.payArray = [];
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.getSalesfromLocal();
        this.loading = true;
        //console.log(this.store_info.id,this.startingDate,this.endDate)
        this.api.getSales2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            if (this.salesLocal.length > 0) {
                this.salesLocal = this.salesLocal.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                //console.log('locLaly',this.salesLocal)
                for (let i = 0; i < this.salesLocal.length; i++) {
                    const element = this.salesLocal[i];
                    this.payArray.push(element.payInvo);
                }
                //console.log(this.payArray)
            }
            // Apply account filter if selected
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading all sales data in getSales2Date
            this.applySorting();
            if (this.payArray.length == 0) {
                this.showEmpty = true;
            }
            else {
                this.showEmpty = false;
            }
            this.loading = false;
        }, (err) => {
            //console.log(err);
        }, () => {
            this.loading = false;
        });
    }
    getSales2DateOffline() {
        this.payArray = [];
        this.salesLocal = [];
        this.sales = [];
        this.salesOffline = [];
        this.loading = true;
        this.storage.get('salesLocal').then((response) => {
            if (response) {
                this.salesLocal = response;
                //console.log(this.salesLocal) 
                let flt = [];
                flt = this.salesLocal.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            this.storage.get('sales').then((response2) => {
                if (response2) {
                    this.salesOffline = response2;
                    this.sales = this.salesOffline;
                    //console.log(this.salesOffline) 
                    let flt = [];
                    flt = this.salesOffline.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                    if (flt.length > 0) {
                        for (let i = 0; i < flt.length; i++) {
                            const element = flt[i];
                            this.payArray.push(element.payInvo);
                        }
                    }
                }
                this.getTotal();
                // Apply category filtering after loading sales data from localStorage in getSales2DateOffline
                this.applySorting();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
            });
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after account filter in getSales2DateOffline
            this.applySorting();
        });
    }
    showLoadingSk() {
        setTimeout(() => {
        }, 3000);
    }
    radioChange(ev) {
        //console.log(ev.target.value)
        this.payArray = [];
        this.sortedPayArray = [];
        this.salesLocal = [];
        this.showEmpty = false;
        this.loading = false;
        // Clear invoice selections when changing invoice type
        this.clearInvoiceSelection();
    }
    getPayInvoDetail(pay, sub_name, status) {
        this.presentLoadingWithOptions('جاري جلب التفاصيل ...');
        if (this.radioVal == 3) {
            console.log(pay, sub_name, status);
            this.api.getPayInvoDetailinit(this.store_info.id, pay.pay_ref).subscribe(data => {
                //console.log(data,'case 1')
                let res = data;
                //console.log(pay) 
                let navigationExtras = {
                    queryParams: {
                        payInvo: JSON.stringify(pay),
                        sub_name: JSON.stringify(sub_name),
                        user_info: JSON.stringify(this.user_info),
                        store_info: JSON.stringify(this.store_info),
                        itemList: JSON.stringify(res['data'])
                    }
                };
                this.rout.navigate(['folder/sales'], navigationExtras);
            });
        }
        else {
            if (pay.pay_id != undefined) {
                this.api.getPayInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
                    //console.log(data,'case 1')
                    let res = data;
                    //console.log(pay)  
                    let navigationExtras = {
                        queryParams: {
                            payInvo: JSON.stringify(pay),
                            sub_name: JSON.stringify(sub_name),
                            user_info: JSON.stringify(this.user_info),
                            store_info: JSON.stringify(this.store_info),
                            itemList: JSON.stringify(res['data'])
                        }
                    };
                    this.rout.navigate(['folder/edit-sales'], navigationExtras);
                }, (err) => {
                    //console.log(err);
                    this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
                });
            }
        }
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 3000,
                message: msg,
                translucent: true,
                // cssClass: 'custom-class custom-loading',
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            //console.log('Loading dismissed with role:', role);
        });
    }
    // Handle account selection from AccountSelectorComponent
    onAccountSelected(account) {
        if (account) {
            this.selectedAccount = {
                id: account.id,
                ac_id: account.ac_id,
                sub_name: account.sub_name,
                sub_type: account.sub_type,
                sub_code: account.sub_code,
                sub_balance: account.sub_balance,
                store_id: account.store_id,
                cat_name: account.cat_name,
                cat_id: account.cat_id,
                currentCustumerStatus: 0
            };
            // Clear existing data and reload records for selected account
            this.payArray = [];
            this.sortedPayArray = [];
            this.salesLocal = [];
            this.showEmpty = false;
            this.loading = false;
            console.log('Account selected in sales-record:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            // Update the current customer status and balance based on loaded balance
            this.selectedAccount.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
            this.selectedAccount.sub_balance = balance.current_balance;
            console.log('Account balance loaded in sales-record:', balance);
        }
    }
    // Format balance display with number separators
    formatBalance(balance) {
        if (!balance && balance !== 0)
            return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(Math.abs(balance));
    }
    // Apply sorting to data
    applySorting() {
        if (this.currentSort) {
            this.sortedPayArray = this.sortingService.sortData(this.payArray, this.currentSort.column, this.currentSort.direction);
        }
        else {
            this.sortedPayArray = [...this.payArray];
        }
    }
    // Handle column sort
    sortBy(column) {
        const direction = this.sortingService.getNextSortDirection(column, this.currentSort);
        this.currentSort = { column, direction };
        this.applySorting();
    }
    // Get sort icon for column
    getSortIcon(column) {
        return this.sortingService.getSortIcon(column, this.currentSort);
    }
    // Multi-select invoice methods
    toggleInvoiceSelection(invoice, event) {
        if (event.detail.checked) {
            if (!this.isInvoiceSelected(invoice)) {
                this.selectedInvoicesList.push(invoice);
            }
        }
        else {
            this.selectedInvoicesList = this.selectedInvoicesList.filter(selectedInvoice => selectedInvoice.pay_ref !== invoice.pay_ref);
            this.selectAllInvoices = false;
        }
    }
    isInvoiceSelected(invoice) {
        return this.selectedInvoicesList.some(selectedInvoice => selectedInvoice.pay_ref === invoice.pay_ref);
    }
    toggleSelectAll(event) {
        if (event.detail.checked) {
            this.selectedInvoicesList = [...this.sortedPayArray];
        }
        else {
            this.selectedInvoicesList = [];
        }
    }
    clearInvoiceSelection() {
        this.selectedInvoicesList = [];
        this.selectAllInvoices = false;
    }
    createSalesInvoiceFromSelectedInvoices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedInvoicesList.length === 0) {
                yield this.presentToast('الرجاء تحديد فاتورة واحدة على الأقل', 'warning');
                return;
            }
            this.presentLoadingWithOptions('جاري تجميع الأصناف من الفواتير المحددة...');
            try {
                const allItems = [];
                // Fetch details for all selected invoices
                const detailPromises = this.selectedInvoicesList.map(invoice => {
                    if (this.radioVal == 3) {
                        // Initial invoices
                        return this.api.getPayInvoDetailinit(this.store_info.id, invoice.pay_ref).toPromise();
                    }
                    else {
                        // Final invoices
                        return this.api.getPayInvoDetail(this.store_info.id, invoice.pay_ref, this.year.id).toPromise();
                    }
                });
                const results = yield Promise.all(detailPromises);
                // Collect all items from all invoices
                results.forEach(res => {
                    if (res && res['data']) {
                        allItems.push(...res['data']);
                    }
                });
                // Merge duplicate items by item_id and pay_price, summing quantities
                const mergedItemsMap = new Map();
                allItems.forEach(item => {
                    // Create a unique key based on item_id and pay_price
                    const key = `${item.item_id}_${item.pay_price || 0}`;
                    if (mergedItemsMap.has(key)) {
                        // Item exists, sum the quantity
                        const existingItem = mergedItemsMap.get(key);
                        existingItem.quantity = +existingItem.quantity + +item.quantity;
                    }
                    else {
                        // New item, add to map with a copy
                        mergedItemsMap.set(key, Object.assign({}, item));
                    }
                });
                // Convert map to array and transform for sales page
                const mergedItems = Array.from(mergedItemsMap.values());
                const salesItems = mergedItems.map(item => ({
                    id: item.item_id,
                    item_id: item.item_id,
                    item_name: item.item_name,
                    item_desc: item.item_desc,
                    part_no: item.part_no,
                    brand: item.brand,
                    model: item.model,
                    item_unit: item.item_unit,
                    perch_price: item.perch_price || 0,
                    pay_price: item.pay_price || 0,
                    qty: item.quantity,
                    tot: ((item.pay_price || 0) * item.quantity).toFixed(2),
                    availQty: item.quantity || 0,
                    aliasEn: item.aliasEn,
                    store_id: this.store_info.id,
                    yearId: this.year.id // Add yearId
                }));
                this.loadingController.dismiss();
                // Show price configuration dialog
                const modal = yield this.modalController.create({
                    component: _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_6__.InvoicePriceConfigDialogComponent,
                    componentProps: {
                        itemList: salesItems,
                        invoiceType: 'sales',
                        context: 'sales-record'
                    },
                    cssClass: 'invoice-price-config-modal'
                });
                modal.onDidDismiss().then((result) => {
                    if (result.data) {
                        // User confirmed configuration, navigate with configured items
                        const configuredItems = result.data;
                        let navigationExtras = {
                            queryParams: {
                                status: 'newInvoFromItemsPage',
                                selectedItemsList: JSON.stringify(configuredItems)
                            }
                        };
                        this.rout.navigate(['folder/sales'], navigationExtras);
                        // Clear selection after navigation
                        this.clearInvoiceSelection();
                    }
                    // If result.data is null/undefined, user cancelled - don't navigate
                });
                return yield modal.present();
            }
            catch (error) {
                this.loadingController.dismiss();
                console.error('Error creating sales invoice from selected invoices:', error);
                yield this.presentToast('حدث خطأ أثناء تجميع الأصناف', 'danger');
            }
        });
    }
    createPurchaseInvoiceFromSelectedInvoices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedInvoicesList.length === 0) {
                yield this.presentToast('الرجاء تحديد فاتورة واحدة على الأقل', 'warning');
                return;
            }
            this.presentLoadingWithOptions('جاري تجميع الأصناف من الفواتير المحددة...');
            try {
                const allItems = [];
                // Fetch details for all selected invoices
                const detailPromises = this.selectedInvoicesList.map(invoice => {
                    if (this.radioVal == 3) {
                        // Initial invoices
                        return this.api.getPayInvoDetailinit(this.store_info.id, invoice.pay_ref).toPromise();
                    }
                    else {
                        // Final invoices
                        return this.api.getPayInvoDetail(this.store_info.id, invoice.pay_ref, this.year.id).toPromise();
                    }
                });
                const results = yield Promise.all(detailPromises);
                // Collect all items from all invoices
                results.forEach(res => {
                    if (res && res['data']) {
                        allItems.push(...res['data']);
                    }
                });
                // Merge duplicate items by item_id and perch_price, summing quantities
                const mergedItemsMap = new Map();
                allItems.forEach(item => {
                    // Create a unique key based on item_id and perch_price
                    const key = `${item.item_id}_${item.perch_price || 0}`;
                    if (mergedItemsMap.has(key)) {
                        // Item exists, sum the quantity
                        const existingItem = mergedItemsMap.get(key);
                        existingItem.quantity = +existingItem.quantity + +item.quantity;
                    }
                    else {
                        // New item, add to map with a copy
                        mergedItemsMap.set(key, Object.assign({}, item));
                    }
                });
                // Convert map to array and transform for purchase page
                const mergedItems = Array.from(mergedItemsMap.values());
                const purchaseItems = mergedItems.map(item => ({
                    id: item.item_id,
                    item_id: item.item_id,
                    item_name: item.item_name,
                    item_desc: item.item_desc,
                    part_no: item.part_no,
                    brand: item.brand,
                    model: item.model,
                    item_unit: item.item_unit,
                    perch_price: item.perch_price || 0,
                    pay_price: item.pay_price || 0,
                    qty: item.quantity,
                    tot: ((item.perch_price || 0) * item.quantity).toFixed(2),
                    availQty: item.quantity || 0,
                    aliasEn: item.aliasEn,
                    store_id: this.store_info.id,
                    yearId: this.year.id // Add yearId
                }));
                this.loadingController.dismiss();
                // Show price configuration dialog
                const modal = yield this.modalController.create({
                    component: _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_6__.InvoicePriceConfigDialogComponent,
                    componentProps: {
                        itemList: purchaseItems,
                        invoiceType: 'purchase',
                        context: 'sales-record'
                    },
                    cssClass: 'invoice-price-config-modal'
                });
                modal.onDidDismiss().then((result) => {
                    if (result.data) {
                        // User confirmed configuration, navigate with configured items
                        const configuredItems = result.data;
                        let navigationExtras = {
                            queryParams: {
                                status: 'newInvoFromItemsPage',
                                selectedItemsList: JSON.stringify(configuredItems)
                            }
                        };
                        this.rout.navigate(['folder/purchase'], navigationExtras);
                        // Clear selection after navigation
                        this.clearInvoiceSelection();
                    }
                    // If result.data is null/undefined, user cancelled - don't navigate
                });
                return yield modal.present();
            }
            catch (error) {
                this.loadingController.dismiss();
                console.error('Error creating purchase invoice from selected invoices:', error);
                yield this.presentToast('حدث خطأ أثناء تجميع الأصناف', 'danger');
            }
        });
    }
    createPurchaseOrderFromSelectedInvoices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedInvoicesList.length === 0) {
                yield this.presentToast('الرجاء تحديد فاتورة واحدة على الأقل', 'warning');
                return;
            }
            this.presentLoadingWithOptions('جاري تجميع الأصناف من الفواتير المحددة...');
            try {
                const allItems = [];
                // Fetch details for all selected invoices
                const detailPromises = this.selectedInvoicesList.map(invoice => {
                    if (this.radioVal == 3) {
                        // Initial invoices
                        return this.api.getPayInvoDetailinit(this.store_info.id, invoice.pay_ref).toPromise();
                    }
                    else {
                        // Final invoices
                        return this.api.getPayInvoDetail(this.store_info.id, invoice.pay_ref, this.year.id).toPromise();
                    }
                });
                const results = yield Promise.all(detailPromises);
                // Collect all items from all invoices
                results.forEach(res => {
                    if (res && res['data']) {
                        allItems.push(...res['data']);
                    }
                });
                // Merge duplicate items by item_id and perch_price, summing quantities
                const mergedItemsMap = new Map();
                allItems.forEach(item => {
                    // Create a unique key based on item_id and perch_price
                    const key = `${item.item_id}_${item.perch_price || 0}`;
                    if (mergedItemsMap.has(key)) {
                        // Item exists, sum the quantity
                        const existingItem = mergedItemsMap.get(key);
                        existingItem.quantity = +existingItem.quantity + +item.quantity;
                    }
                    else {
                        // New item, add to map with a copy
                        mergedItemsMap.set(key, Object.assign({}, item));
                    }
                });
                // Convert map to array and transform for purchase order page
                const mergedItems = Array.from(mergedItemsMap.values());
                const purchaseOrderItems = mergedItems.map(item => ({
                    id: item.item_id,
                    item_id: item.item_id,
                    item_name: item.item_name,
                    item_desc: item.item_desc,
                    part_no: item.part_no,
                    brand: item.brand,
                    model: item.model,
                    item_unit: item.item_unit,
                    perch_price: item.perch_price || 0,
                    pay_price: item.pay_price || 0,
                    qty: item.quantity,
                    tot: ((item.perch_price || 0) * item.quantity).toFixed(2),
                    availQty: item.quantity || 0,
                    aliasEn: item.aliasEn,
                    store_id: this.store_info.id,
                    yearId: this.year.id // Add yearId
                }));
                this.loadingController.dismiss();
                // Show price configuration dialog
                const modal = yield this.modalController.create({
                    component: _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_6__.InvoicePriceConfigDialogComponent,
                    componentProps: {
                        itemList: purchaseOrderItems,
                        invoiceType: 'purchase',
                        context: 'sales-record'
                    },
                    cssClass: 'invoice-price-config-modal'
                });
                modal.onDidDismiss().then((result) => {
                    if (result.data) {
                        // User confirmed configuration, navigate with configured items
                        const configuredItems = result.data;
                        let navigationExtras = {
                            queryParams: {
                                status: 'newInvoFromItemsPage',
                                selectedItemsList: JSON.stringify(configuredItems)
                            }
                        };
                        this.rout.navigate(['/purchase-order'], navigationExtras);
                        // Clear selection after navigation
                        this.clearInvoiceSelection();
                    }
                    // If result.data is null/undefined, user cancelled - don't navigate
                });
                return yield modal.present();
            }
            catch (error) {
                this.loadingController.dismiss();
                console.error('Error creating purchase order from selected invoices:', error);
                yield this.presentToast('حدث خطأ أثناء تجميع الأصناف', 'danger');
            }
        });
    }
    // Export functionality
    exportToPDF() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.sortedPayArray || this.sortedPayArray.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('sales-record'),
                subtitle: this.generateSubtitle(),
                fileName: `sales-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.sortedPayArray,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'sales-record',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToPDF(config);
        });
    }
    exportToExcel() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.sortedPayArray || this.sortedPayArray.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('sales-record'),
                subtitle: this.generateSubtitle(),
                fileName: `sales-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.sortedPayArray,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'sales-record',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToExcel(config);
        });
    }
    generateSubtitle() {
        const filters = {
            selectedAccount: this.selectedAccount.sub_name ? this.selectedAccount : null,
            dateFilter: this.getDateFilter(),
            searchTerm: null // Sales record doesn't have search term
        };
        return this.exportService.generateDynamicSubtitle('sales-record', filters);
    }
    getDateFilter() {
        if (this.radioVal === 1 && this.startingDate) {
            return {
                type: 'single',
                date: this.startingDate
            };
        }
        else if (this.radioVal === 2 && this.startingDate && this.endDate) {
            return {
                type: 'range',
                startDate: this.startingDate,
                endDate: this.endDate
            };
        }
        return null;
    }
    getExportColumns() {
        if (this.radioVal === 4) {
            // Return-specific columns
            return [
                { key: 'sub_name', title: 'العميل', width: 20, type: 'text' },
                { key: 'return_date', title: 'تاريخ المرتجعة', width: 12, type: 'date' },
                { key: 'tot_pr', title: 'إجمالي المبلغ', width: 15, type: 'currency' },
                { key: 'discount', title: 'الخصم', width: 12, type: 'currency' },
                { key: 'finalAmount', title: 'الإجمالي بعد الخصم', width: 18, type: 'currency' },
                { key: 'returnComment', title: 'سبب المرتجعة', width: 20, type: 'text' },
                { key: 'user_name', title: 'المستخدم', width: 15, type: 'text' }
            ];
        }
        else {
            // Sales-specific columns
            return [
                { key: 'sub_name', title: 'العميل', width: 20, type: 'text' },
                { key: 'pay_date', title: 'التاريخ', width: 12, type: 'date' },
                { key: 'tot_pr', title: 'إجمالي المبلغ', width: 15, type: 'currency' },
                { key: 'discount', title: 'الخصم', width: 12, type: 'currency' },
                { key: 'finalAmount', title: 'الإجمالي بعد الخصم', width: 18, type: 'currency' },
                { key: 'payComment', title: 'تعليق', width: 20, type: 'text' },
                { key: 'user_name', title: 'المستخدم', width: 15, type: 'text' }
            ];
        }
    }
    // Get current currency symbol for table headers
    getCurrencySymbol() {
        return this.currencyService.getCurrentCurrencySymbol();
    }
    // Helper methods for dynamic table content based on radio selection
    getTableTitle() {
        switch (this.radioVal) {
            case 4:
                return 'سجل مرتجعات المبيعات';
            case 3:
                return 'الفواتير المبدئية';
            default:
                return 'سجل المبيعات';
        }
    }
    getDateField() {
        return this.radioVal === 4 ? 'return_date' : 'pay_date';
    }
    getCommentField() {
        return this.radioVal === 4 ? 'returnComment' : 'payComment';
    }
    getDateValue(pay) {
        return this.radioVal === 4 ? pay.return_date : pay.pay_date;
    }
    getCommentValue(pay) {
        return this.radioVal === 4 ? pay.returnComment : pay.payComment;
    }
    // Navigate to create new return page
    navigateToCreateReturn() {
        this.rout.navigate(['/folder/sales-return']);
    }
    // Handle printing return invoices
    printReturnInvo(divName, returnInvo) {
        this.api.getSalesReturnDetail(this.store_info.id, returnInvo.return_ref, this.year.id).subscribe(data => {
            let res = data;
            if (res['message'] != 'No record Found') {
                this.itemList = res['data'];
                this.printArr = [{
                        'returnInvo': returnInvo,
                        'itemList': this.itemList,
                        'selectedAccount': { sub_name: returnInvo.sub_name },
                        'sub_nameNew': '',
                        "userInfo": "",
                        "sub_balanse": 0,
                        "balanceStatus": ""
                    }];
                this.presentModal(this.printArr, 'sales_return');
            }
        }, (err) => {
            console.log('Error loading return details for print:', err);
        });
    }
    // Handle editing return invoices
    getReturnInvoDetail(returnInvo, sub_name, status) {
        console.log('Edit return invoice:', returnInvo);
        // Navigate to edit-sales-return page with return_ref parameter
        this.rout.navigate(['folder/edit-sales-return'], {
            queryParams: {
                return_ref: returnInvo.return_ref
            }
        });
    }
};
SalesRecordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController },
    { type: _services_sorting_service__WEBPACK_IMPORTED_MODULE_7__.SortingService },
    { type: _services_export_service__WEBPACK_IMPORTED_MODULE_8__.ExportService },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_9__.CurrencyService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef },
    { type: _services_data_verification_service__WEBPACK_IMPORTED_MODULE_10__.DataVerificationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController }
];
SalesRecordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-sales-record',
        template: _sales_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sales_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalesRecordPage);



/***/ }),

/***/ 13370:
/*!****************************************************************!*\
  !*** ./src/app/sales-record/sales-record.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\n.card-header-with-export {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: var(--ion-color-light);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.card-header-with-export ion-card-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.card-header-with-export .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.card-header-with-export .header-actions ion-button {\n  font-size: 0.9rem;\n  --border-radius: 6px;\n}\n\n.card-header-with-export .header-actions ion-button ion-icon {\n  font-size: 1.1rem;\n}\n\n.selected-items-bar {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  margin: 8px 0;\n  animation: slideDown 0.3s ease-out;\n}\n\n.selected-items-bar .selected-items-card {\n  border-radius: 16px;\n  border: 2px solid var(--ion-color-success);\n  background: linear-gradient(135deg, rgba(var(--ion-color-success-rgb), 0.08) 0%, rgba(var(--ion-color-success-rgb), 0.04) 100%);\n  box-shadow: 0 4px 12px rgba(var(--ion-color-success-rgb), 0.15);\n  margin: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.selected-items-bar .selected-items-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(var(--ion-color-success-rgb), 0.25);\n}\n\n.selected-items-bar .selected-items-content {\n  padding: 12px 16px;\n}\n\n.selected-items-bar .selected-items-content .selected-count {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.selected-items-bar .selected-items-content .selected-count .count-badge {\n  background: var(--ion-color-success);\n  color: white;\n  border-radius: 12px;\n  padding: 4px 12px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  min-width: 24px;\n  text-align: center;\n  animation: pulse 0.5s ease-in-out;\n}\n\n.selected-items-bar .selected-items-content .selected-count .selected-text {\n  color: var(--ion-color-success-shade);\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n\n.selected-items-bar .selected-items-content .action-buttons {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn {\n  --border-radius: 20px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  height: 36px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.5s;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action:hover::before {\n  left: 100%;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.secondary-action {\n  --background: transparent;\n  --color: var(--ion-color-success);\n  --border-color: var(--ion-color-success);\n  --border-style: solid;\n  --border-width: 1.5px;\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn.secondary-action:hover {\n  --background: rgba(var(--ion-color-success-rgb), 0.1);\n  transform: translateY(-1px);\n}\n\n.selected-items-bar .selected-items-content .action-buttons .action-btn ion-icon {\n  font-size: 1rem;\n  margin-inline-end: 6px;\n}\n\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.selected-items-bar.fade-out {\n  animation: slideUp 0.3s ease-in forwards;\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n}\n\n@media (max-width: 768px) {\n  .selected-items-bar .selected-items-content .action-buttons {\n    justify-content: center;\n    flex-direction: column;\n    gap: 6px;\n  }\n  .selected-items-bar .selected-items-content .action-buttons .action-btn {\n    width: 100%;\n    min-width: unset;\n  }\n  .selected-items-bar .selected-items-content .action-buttons .action-btn.primary-action {\n    order: 1;\n  }\n  .selected-items-bar .selected-items-content .action-buttons .action-btn.secondary-action {\n    order: 3;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .selected-items-bar .selected-items-content .action-buttons .action-btn {\n    flex: 1;\n    min-width: 140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLXJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUFPLG1CQUFBO0FBRVg7O0FBQUU7RUFBTSxrQkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7QUFLUjs7QUFGSTtFQUNJLGdCQUFBO0FBS1I7O0FBREU7RUFBTyxrQkFBQTtFQUFtQixXQUFBO0VBQWEsWUFBQTtBQU96Qzs7QUFMRTtFQUFvQix5QkFBQTtBQVN0Qjs7QUFQRTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFnQnZHOztBQWJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxxREFBQTtBQWdCRjs7QUFkRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFnQko7O0FBYkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBZUo7O0FBYkk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBZU47O0FBYk07RUFDRSxpQkFBQTtBQWVSOztBQVJBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQVdGOztBQVRFO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLCtIQUFBO0VBR0EsK0RBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7QUFTSjs7QUFQSTtFQUNFLDJCQUFBO0VBQ0EsK0RBQUE7QUFTTjs7QUFMRTtFQUNFLGtCQUFBO0FBT0o7O0FBTEk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBT047O0FBTE07RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBT1I7O0FBSk07RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFNUjs7QUFGSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSU47O0FBRk07RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFJUjs7QUFGUTtFQUNFLHlDQUFBO0FBSVY7O0FBRlU7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FBSVo7O0FBRFU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0ZBQUE7RUFDQSxxQkFBQTtBQUdaOztBQUFVO0VBQ0UsVUFBQTtBQUVaOztBQUVRO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUFWOztBQUVVO0VBQ0UscURBQUE7RUFDQSwyQkFBQTtBQUFaOztBQUlRO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBRlY7O0FBVUE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQVBGO0VBU0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFQRjtBQUNGOztBQVVBO0VBQ0U7SUFDRSxtQkFBQTtFQVJGO0VBVUE7SUFDRSxxQkFBQTtFQVJGO0VBVUE7SUFDRSxtQkFBQTtFQVJGO0FBQ0Y7O0FBWUE7RUFDRSx3Q0FBQTtBQVZGOztBQWFBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFWRjtFQVlBO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBVkY7QUFDRjs7QUFjQTtFQUdNO0lBQ0UsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLFFBQUE7RUFkTjtFQWdCTTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQWRSO0VBZ0JRO0lBQ0UsUUFBQTtFQWRWO0VBaUJRO0lBQ0UsUUFBQTtFQWZWO0FBQ0Y7O0FBc0JBO0VBSVE7SUFDRSxPQUFBO0lBQ0EsZ0JBQUE7RUF2QlI7QUFDRiIsImZpbGUiOiJzYWxlcy1yZWNvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAuaGlkZXt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICBcbiAgICAuY3VzdC1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgLnRhYmxle3RleHQtYWxpZ246IGNlbnRlcjt3aWR0aDogMTAwJTsgbWFyZ2luOiAxMnB4O31cblxuICB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7fVxuICBcbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fVxuXG4vLyBFeHBvcnQgYnV0dG9ucyBzdHlsaW5nXG4uY2FyZC1oZWFkZXItd2l0aC1leHBvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBTZWxlY3RlZCBpdGVtcyBhY3Rpb24gYmFyIHN0eWxlc1xuLnNlbGVjdGVkLWl0ZW1zLWJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xuICBtYXJnaW46IDhweCAwO1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGVhc2Utb3V0O1xuXG4gIC5zZWxlY3RlZC1pdGVtcy1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLFxuICAgICAgcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAwLjA4KSAwJSxcbiAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiKSwgMC4wNCkgMTAwJSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiksIDAuMTUpO1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiKSwgMC4yNSk7XG4gICAgfVxuICB9XG5cbiAgLnNlbGVjdGVkLWl0ZW1zLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcblxuICAgIC5zZWxlY3RlZC1jb3VudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAuY291bnQtYmFkZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbmltYXRpb246IHB1bHNlIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC5zZWxlY3RlZC10ZXh0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJi5wcmltYXJ5LWFjdGlvbiB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAtMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsMjU1LDI1NSwwLjIpLCB0cmFuc3BhcmVudCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWNvbmRhcnktYWN0aW9uIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDogMS41cHg7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAwLjEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuLy8gRmFkZSBvdXQgYW5pbWF0aW9uIGZvciBoaWRpbmdcbi5zZWxlY3RlZC1pdGVtcy1iYXIuZmFkZS1vdXQge1xuICBhbmltYXRpb246IHNsaWRlVXAgMC4zcyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNlbGVjdGVkLWl0ZW1zLWJhciB7XG4gICAgLnNlbGVjdGVkLWl0ZW1zLWNvbnRlbnQge1xuICAgICAgLmFjdGlvbi1idXR0b25zIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNnB4O1xuXG4gICAgICAgIC5hY3Rpb24tYnRuIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xuXG4gICAgICAgICAgJi5wcmltYXJ5LWFjdGlvbiB7XG4gICAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNlY29uZGFyeS1hY3Rpb24ge1xuICAgICAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2VsZWN0ZWQtaXRlbXMtYmFyIHtcbiAgICAuc2VsZWN0ZWQtaXRlbXMtY29udGVudCB7XG4gICAgICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */";

/***/ }),

/***/ 3771:
/*!****************************************************************!*\
  !*** ./src/app/sales-record/sales-record.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- sh605579887 -->\n   \n    <ion-title>سجل المبيعات</ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <app-currency-switcher></app-currency-switcher>\n    </ion-buttons>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"device == 'desktop'\">\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col size=\"4\" dir=\"rtl\"> \n                              <app-account-selector\n                                accountType=\"customer\"\n                                placeholder=\"اختر حساب العميل\"\n                                label=\"حساب العميل\"\n                                [store_info]=\"store_info\"\n                                [year]=\"year\"\n                                [showAddButton]=\"false\"\n                                [(ngModel)]=\"selectedAccount\"\n                                (accountSelected)=\"onAccountSelected($event)\"\n                                (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n                              </app-account-selector>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>مبيعات حديثة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث  في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث في فترة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"3\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label> فواتير  مبدئية </ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"4\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>مرتجعات المبيعات</ion-label> \n                              </ion-item>\n                            </ion-col> \n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 && radioVal != 3\">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n              </ion-col> \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n\n    <ion-row>\n      <ion-card class=\"custCard\">\n      </ion-card>\n    </ion-row>\n\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n              <ion-card-header class=\"ion-no-padding\">\n                <div class=\"card-header-with-export\">\n                  <ion-card-title>{{ getTableTitle() }}</ion-card-title>\n                  <div class=\"header-actions\">\n                    <ion-button \n                      *ngIf=\"radioVal === 4\"\n                      fill=\"outline\" \n                      color=\"primary\" \n                      size=\"small\"\n                      (click)=\"navigateToCreateReturn()\">\n                      <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n                      إنشاء مرتجعة جديدة\n                    </ion-button>\n                    <app-export-buttons \n                      [hasData]=\"sortedPayArray && sortedPayArray.length > 0\"\n                      [isLoading]=\"loading\"\n                      (exportPDF)=\"exportToPDF()\"\n                      (exportExcel)=\"exportToExcel()\">\n                    </app-export-buttons>\n                  </div>\n                </div>\n              </ion-card-header>\n\n               <!-- Selected Invoices Bar -->\n               <div class=\"selected-items-bar\" *ngIf=\"selectedInvoicesList.length > 0\">\n                 <ion-row dir=\"rtl\">\n                   <ion-col size=\"12\">\n                     <div class=\"selected-items-card\">\n                       <div class=\"selected-items-content\">\n                         <ion-grid>\n                           <ion-row class=\"ion-align-items-center\">\n                             <ion-col size=\"12\" size-md=\"6\">\n                               <div class=\"selected-count\">\n                                 <div class=\"count-badge\">\n                                   {{selectedInvoicesList.length}}\n                                 </div>\n                                 <span class=\"selected-text\">فاتورة محددة</span>\n                               </div>\n                             </ion-col>\n                             <ion-col size=\"12\" size-md=\"6\">\n                               <div class=\"action-buttons\">\n                                 <ion-button class=\"action-btn primary-action\"\n                                   (click)=\"createSalesInvoiceFromSelectedInvoices()\">\n                                   <ion-icon name=\"receipt-outline\"></ion-icon>\n                                   إنشاء فاتورة مبيعات\n                                 </ion-button>\n                                 <ion-button class=\"action-btn primary-action\"\n                                   (click)=\"createPurchaseInvoiceFromSelectedInvoices()\">\n                                   <ion-icon name=\"document-text-outline\"></ion-icon>\n                                   إنشاء فاتورة شراء\n                                 </ion-button>\n                                 <ion-button class=\"action-btn primary-action\"\n                                   (click)=\"createPurchaseOrderFromSelectedInvoices()\">\n                                   <ion-icon name=\"clipboard-outline\"></ion-icon>\n                                   إنشاء طلب شراء\n                                 </ion-button>\n                                 <ion-button class=\"action-btn secondary-action\"\n                                   (click)=\"clearInvoiceSelection()\">\n                                   <ion-icon name=\"close-outline\"></ion-icon>\n                                   إلغاء التحديد\n                                 </ion-button>\n                               </div>\n                             </ion-col>\n                           </ion-row>\n                         </ion-grid>\n                       </div>\n                     </div>\n                   </ion-col>\n                 </ion-row>\n               </div>\n\n               <table class=\"table\">\n                 <tr>\n                  <th>\n                    <ion-checkbox\n                      [(ngModel)]=\"selectAllInvoices\"\n                      (ionChange)=\"toggleSelectAll($event)\">\n                    </ion-checkbox>\n                  </th>\n                  <th>التسلسل</th>\n                  <!-- <th>رقم الفاتورة</th> -->\n                  <th class=\"sortable-header\" (click)=\"sortBy('sub_name')\">\n                    <ion-icon [name]=\"getSortIcon('sub_name')\" class=\"sort-icon\"></ion-icon>\n                    العميل\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy(getDateField())\">\n                    <ion-icon [name]=\"getSortIcon(getDateField())\" class=\"sort-icon\"></ion-icon>\n                    التاريخ\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('tot_pr')\">\n                    <ion-icon [name]=\"getSortIcon('tot_pr')\" class=\"sort-icon\"></ion-icon>\n                    اجمالي المبلغ ({{ getCurrencySymbol() }})\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('discount')\">\n                    <ion-icon [name]=\"getSortIcon('discount')\" class=\"sort-icon\"></ion-icon>\n                    الخصــم ({{ getCurrencySymbol() }})\n                  </th>  \n                  <th>الإجمالي بعد الخصم ({{ getCurrencySymbol() }})</th> \n                  <!-- <th> المدفوع </th>  -->\n\n                  <!-- Hidden pay and change columns -->   \n                  <th class=\"sortable-header\" (click)=\"sortBy(getCommentField())\">\n                    <ion-icon [name]=\"getSortIcon(getCommentField())\" class=\"sort-icon\"></ion-icon>\n                    تعليق\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('user_name')\">\n                    <ion-icon [name]=\"getSortIcon('user_name')\" class=\"sort-icon\"></ion-icon>\n                    المستخدم\n                  </th> \n                  <th>إجراء</th> \n                  <!-- <th ><strong>تعديل</strong></th> \n                  <th ><strong>طياعة</strong></th>  -->\n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of sortedPayArray ; let i = index\">\n                  <td>\n                    <ion-checkbox\n                      [checked]=\"isInvoiceSelected(pay)\"\n                      (ionChange)=\"toggleInvoiceSelection(pay, $event)\">\n                    </ion-checkbox>\n                  </td>\n                  <td>{{i+1}}</td>\n                  <!-- <td>{{pay.pay_id}}</td> -->\n                  <td>{{pay.sub_name}}</td>\n                  <td> {{getDateValue(pay)}}</td>\n                  <td>{{pay.tot_pr | currencyDisplay:'SDG':false}}</td>\n                  <td>{{pay.discount | currencyDisplay:'SDG':false}}</td>\n                  <td>{{(+pay.tot_pr - +pay.discount) | currencyDisplay:'SDG':false}}</td>\n                  <!-- Hidden pay and change data -->\n                  <!-- <td>{{pay.pay}}</td>  -->\n                  <td>{{getCommentValue(pay)}}</td>\n                  \n                  <td>{{pay.user_name}}</td>\n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit')\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon>  \n                    </ion-button>\n                  </td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon> \n                    </ion-button>\n                  </td> -->\n                   <td>\n                    <!-- Verify button -->\n                    <ion-button\n                      fill=\"clear\"\n                      size=\"small\"\n                      (click)=\"verifyInvoice(pay)\"\n                      title=\"Verify Invoice | التحقق من الفاتورة\">\n                      <ion-icon name=\"shield-checkmark-outline\" slot=\"icon-only\" color=\"success\"></ion-icon>\n                    </ion-button>\n                    <!-- Actions popover button -->\n                    <ion-button\n                      fill=\"clear\"\n                      size=\"small\"\n                      (click)=\"presentActionPopover($event, pay, pay.sub_name)\"\n                      slot=\"end\">\n                      <ion-icon name=\"ellipsis-vertical\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                  </td>\n                 </tr>\n\n              <!--    <ion-icon name=\"cloud-offline-outline\"></ion-icon> -->\n\n                 <!-- skeleton -->\n\n                 <tr  *ngIf=\"loading == true\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <!-- Hidden skeleton for pay and change columns -->\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <!-- Hidden skeleton for pay and change columns -->\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                 </tr>\n               </table>\n\n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\">\n                 <ion-col size=\"4\" class=\"ion-text-center\">  \n                   <ion-label> \n                     <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                  </ion-label>\n                  <h4> لا توجد سجلات </h4> \n                 </ion-col>\n               </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n  \n  \n    <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"4\"> \n                     <ion-label  class=\"ion-padding\"><strong>الصنف</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                         \n                          <datalist style=\"border: none;\" id=\"browsers\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                        </datalist>\n                        </ion-item>  \n                    </ion-col>\n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input  [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event.target.val)\" #qtyId  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.pay_price\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row> -->\n      \n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n\n<ion-content *ngIf=\"device == 'mobile'\"> \n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\"> \n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col size=\"12\"> \n                              <app-account-selector\n                                accountType=\"customer\"\n                                placeholder=\"اختر حساب العميل\"\n                                label=\"حساب العميل\"\n                                [store_info]=\"store_info\"\n                                [year]=\"year\"\n                                [showAddButton]=\"false\"\n                                [(ngModel)]=\"selectedAccount\"\n                                (accountSelected)=\"onAccountSelected($event)\"\n                                (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n                              </app-account-selector>\n                            </ion-col>\n                            \n                              <ion-col>\n                                <ion-item lines=\"none\" >\n                                  <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>مبيعات حديثة</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              \n                              <ion-col>\n                                <ion-item lines=\"none\" >\n                                  <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>بحث  في تاريخ</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col>\n                                <ion-item lines=\"none\">\n                                  <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>بحث في فترة</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col>\n                                <ion-item lines=\"none\">\n                                  <ion-radio [value]=\"3\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label> فواتير  مبدئية </ion-label> \n                                </ion-item>\n                              </ion-col>\n                             \n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group> \n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"6\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 && radioVal != 3\">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"6\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"8\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n              </ion-col> \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" dir=\"rtl\" *ngIf=\"user_info && store_info\">\n    <ion-list *ngIf=\"loading == true\">\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      </ion-list>\n    <ion-accordion-group *ngIf=\"payArray\">\n      <ion-accordion *ngFor=\"let pay of payArray ; let i = index\"  (click)=\"getPayDetailsForMob(pay)\" [value]=\"i\"   toggleIcon=\"caret-down-circle\" toggleIconSlot=\"end\" >\n        <ion-item slot=\"header\" color=\"light\" > \n          <ion-icon name=\"newspaper-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{pay.sub_name}}</ion-label>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-label><ion-note>{{pay.pay_date | date:'dd-MM'}}</ion-note>    </ion-label>\n              </ion-col>\n              <ion-col size=\"8\" class=\"ion-text-end\">\n                <ion-label>{{(+pay.tot_pr - +pay.discount) | currencyDisplay}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          \n        </ion-item>\n\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n       \n        <div class=\"ion-padding\" slot=\"content\">\n          <ion-item color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n            <ion-list *ngIf=\"pay.item_details\">\n              <ion-item color=\"light\" *ngFor=\"let item of pay.item_details\" > \n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-label>{{item.item_name}}</ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-label><ion-note>الكمية :</ion-note>{{item.quantity}}</ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"ion-text-end\">\n                      <ion-label><ion-note>السعر :</ion-note>{{item.pay_price | currencyDisplay}}</ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid> \n              </ion-item>\n              <ion-grid>\n              </ion-grid>\n            </ion-list> \n            <ion-list *ngIf=\" !pay.item_details || pay.item_details.length == 0\">\n              <ion-label>حدث خطأ في الفاتورة</ion-label>\n            </ion-list>\n          <ion-item-divider></ion-item-divider>\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-label><ion-note>المجموع  : </ion-note><strong>{{pay.tot_pr | currencyDisplay}}</strong></ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"pay.discount > 0\">\n              <ion-label><ion-note>تخفيض  : </ion-note><strong>{{pay.discount | currencyDisplay}}</strong></ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"pay.discount > 0\">\n              <ion-label><ion-note> صافي المبلغ    : \n              </ion-note><strong> {{(+pay.tot_pr - +pay.discount) | currencyDisplay}} </strong></ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"4\">\n              <ion-button  fill=\"outline\" color=\"success\"  (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit')\"  >\n                <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                <ion-label><ion-text color=\"dark\">تعديل</ion-text></ion-label>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button  fill=\"outline\" color=\"success\"  (click)=\"verifyInvoice(pay)\"  >\n                <ion-icon name=\"shield-checkmark-outline\" color=\"success\"></ion-icon>\n                <ion-label><ion-text color=\"dark\">تحقق</ion-text></ion-label>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button  fill=\"outline\" color=\"success\"  (click)=\"createPdf(pay)\"  >\n                <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                <ion-label><ion-text color=\"dark\">طباعة</ion-text></ion-label>\n              </ion-button>\n            </ion-col>  \n          </ion-row>\n       \n        </div>\n      </ion-accordion> \n    </ion-accordion-group>\n\n    \n  </ion-grid>\n \n</ion-content>\n\n<ion-footer *ngIf=\"payArray\">\n  <ion-grid dir=\"rtl\" *ngIf=\"device == 'desktop'\" >\n    <ion-row>\n      <ion-col>\n        <ion-label><ion-text>إجمالي المبيعات : </ion-text><br>  <strong>{{sums.tot | currencyDisplay}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{sums.discount | currencyDisplay}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>المبيعات بعد الخصم : </ion-text><br>  <strong>{{sums.totAfterDiscout | currencyDisplay}}</strong></ion-label>\n      </ion-col>\n      <!-- Hidden pay and change summary columns -->\n    </ion-row>\n  </ion-grid>\n  <ion-grid dir=\"rtl\" *ngIf=\"device == 'mobile'\" >\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>إجمالي المبيعات : </ion-text><br>  <strong>{{sums.tot | currencyDisplay}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{sums.discount | currencyDisplay}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label><ion-text>المبيعات بعد الخصم : </ion-text><br>  <strong>{{sums.totAfterDiscout | currencyDisplay}}</strong></ion-label>\n      </ion-col>\n      <!-- Hidden pay and change summary columns for mobile -->\n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_sales-record_sales-record_module_ts.js.map
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _sales_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-record.page.html?ngResource */ 3771);
/* harmony import */ var _sales_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-record.page.scss?ngResource */ 13370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _component_action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/action-popover/action-popover.component */ 10276);
/* harmony import */ var _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/invoice-price-config-dialog/invoice-price-config-dialog.component */ 67705);












// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
let SalesRecordPage = class SalesRecordPage {
    constructor(popoverController, platform, rout, storage, modalController, loadingController, datePipe, api, toast) {
        this.popoverController = popoverController;
        this.platform = platform;
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.payArray = [];
        this.filteredPayArray = []; // Filtered invoices based on selected category
        this.printArr = [];
        this.initialInvoices = [];
        // Category properties
        this.categories = [];
        this.selectedCategoryId = null;
        this.isCategoryVisibilityEnabled = true;
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
        this.filteredPayArray = [];
        // Check category visibility setting
        //  this.isCategoryVisibilityEnabled = CategoriesPage.isCategoryVisibilityEnabled();
        //console.log('ngOnInit')
        this.getAppInfo();
        this.prepareOffline();
    }
    presentActionPopover(ev, pay, sub_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _component_action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__.ActionPopoverComponent,
                event: ev,
                translucent: true,
                cssClass: 'action-popover-rtl'
            });
            popover.onDidDismiss().then((result) => {
                if (result.data) {
                    switch (result.data.action) {
                        case 'print':
                            this.printInvo('', pay);
                            break;
                        case 'edit':
                            this.getPayInvoDetail(pay, sub_name, '');
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        this.salesLocal = [];
        this.showEmpty = false;
        this.loading = false;
    }
    ionViewDidEnter() {
        this.payArray = [];
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
                // Load categories for sales records
                this.loadCategories();
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
    // Category management methods
    loadCategories() {
        if (this.store_info && this.store_info.id) {
            this.api.getCategories(this.store_info.id).subscribe((data) => {
                if (data && data.data) {
                    this.categories = data.data;
                    console.log('Categories loaded in sales-record:', this.categories);
                    // Set initial category from localStorage or first category
                    const savedCategoryId = localStorage.getItem('SELECTED_CATEGORY_ID');
                    if (savedCategoryId && this.categories.some(cat => cat.id == savedCategoryId)) {
                        this.selectedCategoryId = savedCategoryId;
                    }
                    else if (this.categories.length > 0) {
                        this.selectedCategoryId = this.categories[0].id;
                        localStorage.setItem('SELECTED_CATEGORY_ID', this.categories[0].id);
                    }
                }
            }, (error) => {
                console.error('Error loading categories in sales-record:', error);
            });
        }
    }
    onCategoryChange(event) {
        this.selectedCategoryId = event.detail.value;
        // Save selected category
        if (this.selectedCategoryId) {
            localStorage.setItem('SELECTED_CATEGORY_ID', this.selectedCategoryId);
        }
        console.log('Sales record category changed to:', this.selectedCategoryId);
        // Apply category filtering when category selection changes
        this.filterInvoicesByCategory();
    }
    // Filter invoices by selected category
    filterInvoicesByCategory() {
        console.log('🔍 FILTERING SALES INVOICES BY CATEGORY');
        console.log('Selected category ID:', this.selectedCategoryId);
        console.log('Total invoices to filter:', this.payArray.length);
        if (!this.selectedCategoryId || this.selectedCategoryId === 'all') {
            // Show all invoices if no category selected or "all" is selected
            this.filteredPayArray = [...this.payArray];
            console.log('No category filter applied, showing all invoices:', this.filteredPayArray.length);
            return;
        }
        // Filter invoices that match the selected category
        this.filteredPayArray = this.payArray.filter(invoice => {
            // Check multiple possible category property names
            const possibleCategoryIds = [
                invoice.category_id,
                invoice.categoryId,
                invoice.category ? invoice.category.id : null,
                invoice.cat_id
            ];
            let invoiceCategoryId = null;
            // Find the first valid category ID from possible properties
            for (const catId of possibleCategoryIds) {
                if (catId !== null && catId !== undefined && catId !== '') {
                    invoiceCategoryId = catId;
                    break;
                }
            }
            if (invoiceCategoryId === null || invoiceCategoryId === undefined) {
                console.log(`Invoice "${invoice.pay_ref}" - NO VALID category_id found`);
                return false;
            }
            // Compare with type coercion (== instead of ===) to handle string/number differences
            const categoryMatches = (invoiceCategoryId == this.selectedCategoryId);
            console.log(`Invoice "${invoice.pay_ref}":`, {
                invoiceCategoryId: invoiceCategoryId,
                selectedCategoryId: this.selectedCategoryId,
                matches: categoryMatches
            });
            return categoryMatches;
        });
        console.log('Sales invoices after category filter:', this.filteredPayArray.length);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
            // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
        }, (err) => {
            //console.log(err);
        }, () => {
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
                if (this.selectedAccount.sub_name != "") {
                    if (this.payArray.length > 0) {
                        this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                    }
                }
                this.getTotal();
                // Apply category filtering after loading sales data from localStorage in getTopSales  
                this.filterInvoicesByCategory();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
                //console.log(this.payArray)
            }
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading sales data from API in getTopSales
            this.filterInvoicesByCategory();
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
                this.filterInvoicesByCategory();
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
            this.filterInvoicesByCategory();
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
                this.getTotal();
                // Apply category filtering after loading sales data from localStorage in getSalesByDate
                this.filterInvoicesByCategory();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
                //console.log(this.payArray)
            }
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading sales data from API in getSalesByDate
            this.filterInvoicesByCategory();
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
                this.filterInvoicesByCategory();
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
            this.filterInvoicesByCategory();
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
                this.getTotal();
                // Apply category filtering after loading sales data from localStorage in getSales2Date
                this.filterInvoicesByCategory();
                if (this.payArray.length == 0) {
                    this.showEmpty = true;
                }
                else {
                    this.showEmpty = false;
                }
                this.loading = false;
            }
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading sales data from API in getSales2Date
            this.filterInvoicesByCategory();
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
                this.filterInvoicesByCategory();
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
            this.filterInvoicesByCategory();
        });
    }
    showLoadingSk() {
        setTimeout(() => {
        }, 3000);
    }
    radioChange(ev) {
        //console.log(ev.target.value) 
        this.payArray = [];
        this.salesLocal = [];
        this.showEmpty = false;
        this.loading = false;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
};
SalesRecordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
SalesRecordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLXJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUFPLG1CQUFBO0FBRVg7O0FBQUU7RUFBTSxrQkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7QUFLUjs7QUFGSTtFQUNJLGdCQUFBO0FBS1I7O0FBREU7RUFBTyxrQkFBQTtFQUFtQixXQUFBO0VBQWEsWUFBQTtBQU96Qzs7QUFMRTtFQUFvQix5QkFBQTtBQVN0Qjs7QUFQRTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFnQnZHIiwiZmlsZSI6InNhbGVzLXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuc2hvd3sgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG4gIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIFxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuY3VzdFJvd3tcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAudGFibGV7dGV4dC1hbGlnbjogY2VudGVyO3dpZHRoOiAxMDAlOyBtYXJnaW46IDEycHg7fVxuXG4gIHRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDt9XG4gIFxuICB0ZCwgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6IDhweDsgZm9udC1zaXplOiAxNnB4O2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOiBibGFjazt9Il19 */";

/***/ }),

/***/ 3771:
/*!****************************************************************!*\
  !*** ./src/app/sales-record/sales-record.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- sh605579887 -->\n   \n    <ion-title>سجل المبيعات</ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"device == 'desktop'\">\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col size=\"4\" dir=\"rtl\"> \n                              <app-account-selector\n                                accountType=\"customer\"\n                                placeholder=\"اختر حساب العميل\"\n                                label=\"حساب العميل\"\n                                [store_info]=\"store_info\"\n                                [year]=\"year\"\n                                [showAddButton]=\"false\"\n                                [(ngModel)]=\"selectedAccount\"\n                                (accountSelected)=\"onAccountSelected($event)\"\n                                (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n                              </app-account-selector>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>مبيعات حديثة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث  في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث في فترة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"3\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label> فواتير  مبدئية </ion-label> \n                              </ion-item>\n                            </ion-col> \n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 && radioVal != 3\">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n              </ion-col> \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n\n    <ion-row>\n      <ion-card class=\"custCard\">\n      </ion-card>\n    </ion-row>\n\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <!-- <th>رقم الفاتورة</th> -->\n                  <th>العميل</th>\n                  <th>التاريخ</th>\n                  <th>اجمالي المبلغ</th>\n                  <th>الخصــم</th>  \n                  <th>الإجمالي بعد الخصم</th>  \n                  <th>نقدا</th>  \n                  <th>المتبقي</th>   \n                  <th>تعليق</th>\n                  <th>المستخدم</th> \n                  <th>إجراء</th> \n                  <!-- <th ><strong>تعديل</strong></th> \n                  <th ><strong>طياعة</strong></th>  -->\n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of payArray ; let i = index\">\n                  <td>{{i+1}}</td>\n                  <!-- <td>{{pay.pay_id}}</td> -->\n                  <td>{{pay.sub_name}}</td>\n                  <td> {{pay.pay_date}}</td>\n                  <td>{{pay.tot_pr}}</td>\n                  <td>{{pay.discount}}</td>\n                  <td>{{+pay.tot_pr - +pay.discount}}</td>\n                  <td>{{pay.pay}}</td>\n                  <td>{{pay.changee}}</td> \n                  <td>{{pay.payComment}}</td>\n                  <td>{{pay.user_name}}</td>\n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit')\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon>  \n                    </ion-button>\n                  </td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon> \n                    </ion-button>\n                  </td> -->\n                   <td>\n                    <!-- Replace the existing action buttons in your ion-item with this: -->\n                    <ion-button \n                      fill=\"clear\" \n                      size=\"small\" \n                      (click)=\"presentActionPopover($event, pay, pay.sub_name)\"\n                      slot=\"end\">\n                      <ion-icon name=\"ellipsis-vertical\" slot=\"icon-only\"></ion-icon>\n                    </ion-button> \n                  </td>\n                 </tr>\n\n              <!--    <ion-icon name=\"cloud-offline-outline\"></ion-icon> -->\n\n                 <!-- skeleton -->\n                 \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr> \n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                 <ion-col size=\"4\" class=\"ion-text-center\">  \n                   <ion-label> \n                     <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                  </ion-label>\n                  <h4> لا توجد سجلات </h4> \n                 </ion-col>\n               </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n  \n  \n    <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"4\"> \n                     <ion-label  class=\"ion-padding\"><strong>الصنف</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                         \n                          <datalist style=\"border: none;\" id=\"browsers\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                        </datalist>\n                        </ion-item>  \n                    </ion-col>\n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input  [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event.target.val)\" #qtyId  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.pay_price\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row> -->\n      \n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n\n<ion-content *ngIf=\"device == 'mobile'\"> \n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\"> \n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col size=\"12\"> \n                              <app-account-selector\n                                accountType=\"customer\"\n                                placeholder=\"اختر حساب العميل\"\n                                label=\"حساب العميل\"\n                                [store_info]=\"store_info\"\n                                [year]=\"year\"\n                                [showAddButton]=\"false\"\n                                [(ngModel)]=\"selectedAccount\"\n                                (accountSelected)=\"onAccountSelected($event)\"\n                                (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n                              </app-account-selector>\n                            </ion-col>\n                            \n                              <ion-col>\n                                <ion-item lines=\"none\" >\n                                  <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>مبيعات حديثة</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              \n                              <ion-col>\n                                <ion-item lines=\"none\" >\n                                  <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>بحث  في تاريخ</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col>\n                                <ion-item lines=\"none\">\n                                  <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>بحث في فترة</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col>\n                                <ion-item lines=\"none\">\n                                  <ion-radio [value]=\"3\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label> فواتير  مبدئية </ion-label> \n                                </ion-item>\n                              </ion-col>\n                             \n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group> \n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"6\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 && radioVal != 3\">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"6\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"8\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n              </ion-col> \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" dir=\"rtl\" *ngIf=\"user_info && store_info\">\n    <ion-list *ngIf=\"loading == true\">\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      </ion-list>\n    <ion-accordion-group *ngIf=\"payArray\">\n      <ion-accordion *ngFor=\"let pay of payArray ; let i = index\"  (click)=\"getPayDetailsForMob(pay)\" [value]=\"i\"   toggleIcon=\"caret-down-circle\" toggleIconSlot=\"end\" >\n        <ion-item slot=\"header\" color=\"light\" > \n          <ion-icon name=\"newspaper-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{pay.sub_name}}</ion-label>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-label><ion-note>{{pay.pay_date | date:'dd-MM'}}</ion-note>    </ion-label>\n              </ion-col>\n              <ion-col size=\"8\" class=\"ion-text-end\">\n                <ion-label>{{+pay.tot_pr - +pay.discount}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          \n        </ion-item>\n\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n       \n        <div class=\"ion-padding\" slot=\"content\">\n          <ion-item color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n            <ion-list *ngIf=\"pay.item_details\">\n              <ion-item color=\"light\" *ngFor=\"let item of pay.item_details\" > \n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-label>{{item.item_name}}</ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-label><ion-note>الكمية :</ion-note>{{item.quantity}}</ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"ion-text-end\">\n                      <ion-label><ion-note>السعر :</ion-note>{{item.pay_price}}</ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid> \n              </ion-item>\n              <ion-grid>\n              </ion-grid>\n            </ion-list> \n            <ion-list *ngIf=\" !pay.item_details || pay.item_details.length == 0\">\n              <ion-label>حدث خطأ في الفاتورة</ion-label>\n            </ion-list>\n          <ion-item-divider></ion-item-divider>\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-label><ion-note>المجموع  : </ion-note><strong>{{pay.tot_pr}}</strong></ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"pay.discount > 0\">\n              <ion-label><ion-note>تخفيض  : </ion-note><strong>{{pay.discount}}</strong></ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"pay.discount > 0\">\n              <ion-label><ion-note> صافي المبلغ    : \n              </ion-note><strong> {{+pay.tot_pr - +pay.discount}} </strong></ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"6\">\n              <ion-button  fill=\"outline\" color=\"success\"  (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit')\"  > \n                <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                <ion-label><ion-text color=\"dark\">تعديل</ion-text></ion-label> \n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button  fill=\"outline\" color=\"success\"  (click)=\"createPdf(pay)\"  > \n                <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                <ion-label><ion-text color=\"dark\">طباعة</ion-text></ion-label> \n              </ion-button>\n            </ion-col>  \n          </ion-row>\n       \n        </div>\n      </ion-accordion> \n    </ion-accordion-group>\n\n    \n  </ion-grid>\n \n</ion-content>\n\n<ion-footer *ngIf=\"payArray\">\n  <ion-grid dir=\"rtl\" *ngIf=\"device == 'desktop'\" >\n    <ion-row>\n      <ion-col>\n        <ion-label><ion-text>إجمالي المبيعات : </ion-text><br>  <strong>{{sums.tot.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{sums.discount.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>المبيعات بعد الخصم : </ion-text><br>  <strong>{{sums.totAfterDiscout.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي النقد : </ion-text><br>  <strong>{{sums.pay.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي الاجل : </ion-text><br>  <strong>{{sums.change.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid dir=\"rtl\" *ngIf=\"device == 'mobile'\" >\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>إجمالي المبيعات : </ion-text><br>  <strong>{{sums.tot.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{sums.discount.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label><ion-text>المبيعات بعد الخصم : </ion-text><br>  <strong>{{sums.totAfterDiscout.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>اجمالي النقد : </ion-text><br>  <strong>{{sums.pay.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>اجمالي الاجل : </ion-text><br>  <strong>{{sums.change.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_sales-record_sales-record_module_ts.js.map
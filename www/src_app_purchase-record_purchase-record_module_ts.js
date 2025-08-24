"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_purchase-record_purchase-record_module_ts"],{

/***/ 29023:
/*!*******************************************************************!*\
  !*** ./src/app/purchase-record/purchase-record-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseRecordPageRoutingModule": () => (/* binding */ PurchaseRecordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _purchase_record_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-record.page */ 78963);




const routes = [
    {
        path: '',
        component: _purchase_record_page__WEBPACK_IMPORTED_MODULE_0__.PurchaseRecordPage
    }
];
let PurchaseRecordPageRoutingModule = class PurchaseRecordPageRoutingModule {
};
PurchaseRecordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchaseRecordPageRoutingModule);



/***/ }),

/***/ 96923:
/*!***********************************************************!*\
  !*** ./src/app/purchase-record/purchase-record.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseRecordPageModule": () => (/* binding */ PurchaseRecordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _purchase_record_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-record-routing.module */ 29023);
/* harmony import */ var _purchase_record_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-record.page */ 78963);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);








let PurchaseRecordPageModule = class PurchaseRecordPageModule {
};
PurchaseRecordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _purchase_record_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchaseRecordPageRoutingModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_purchase_record_page__WEBPACK_IMPORTED_MODULE_1__.PurchaseRecordPage]
    })
], PurchaseRecordPageModule);



/***/ }),

/***/ 78963:
/*!*********************************************************!*\
  !*** ./src/app/purchase-record/purchase-record.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseRecordPage": () => (/* binding */ PurchaseRecordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _purchase_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-record.page.html?ngResource */ 68582);
/* harmony import */ var _purchase_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-record.page.scss?ngResource */ 24305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);
/* harmony import */ var _component_action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/action-popover/action-popover.component */ 10276);
/* harmony import */ var _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/invoice-price-config-dialog/invoice-price-config-dialog.component */ 67705);
/* harmony import */ var _services_sorting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/sorting.service */ 52562);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/export.service */ 79002);














let PurchaseRecordPage = class PurchaseRecordPage {
    constructor(popoverController, platform, rout, storage, modalController, loadingController, datePipe, api, toast, sortingService, exportService) {
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
        this.payArray = [];
        this.sortedPayArray = []; // Sorted invoices for display
        this.currentSort = null;
        this.printArr = [];
        this.sub_account = [];
        this.sub_accountLocalPurch = [];
        this.sub_accountPurch = [];
        this.printMode = false;
        this.itemList = [];
        this.loadingDetails = false;
        this.radioVal = 0;
        this.loading = false;
        this.showEmpty = false;
        this.offline = false;
        this.purchLocal = [];
        this.purchase = [];
        this.purchOffline = [];
        this.device = '';
        this.slideOpts = {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }
        };
        this.color = 'dark';
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.sums = { pay: 0, change: 0, discount: 0, tot: 0, totAfterDiscout: 0 };
        this.checkPlatform();
        this.getAppInfo();
        this.prepareOffline();
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
        // this.isCategoryVisibilityEnabled = CategoriesPage.isCategoryVisibilityEnabled();
        //console.log('ngOnInit')
        this.getAppInfo();
        this.prepareOffline();
    }
    ionViewDidEnter() {
        this.payArray = [];
        this.sortedPayArray = [];
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                this.search();
            }
        });
        //console.log('ionViewDidEnter')
        // this.search()
    }
    presentActionPopover(ev, pay, sub_name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        console.log('pay pefor call', pay);
        this.presentLoadingWithOptions('جاري نسخ الفاتورة...');
        // Determine which method to call based on offline status and pay_id
        if (this.offline == false && pay.pay_id != undefined) {
            this.api.getPerchInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
                let res = data;
                console.log('res after call', res);
                this.loadingController.dismiss();
                this.showPriceConfigDialog(res['data'], type);
            }, (err) => {
                this.loadingController.dismiss();
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            });
        }
        else if (this.offline == false && pay.pay_id == undefined) {
            this.loadingController.dismiss();
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
            if (flt.length > 0) {
                this.showPriceConfigDialog(flt[0].itemList, type);
            }
        }
        else if (this.offline == true && pay.pay_id != undefined) {
            this.loadingController.dismiss();
            let flt = [];
            flt = this.purchase.filter(x => x.payInvo.pay_ref == pay.pay_ref);
            if (flt.length > 0) {
                this.showPriceConfigDialog(flt[0].itemList, type);
            }
        }
        else if (this.offline == true && pay.pay_id == undefined) {
            this.loadingController.dismiss();
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
            if (flt.length > 0) {
                this.showPriceConfigDialog(flt[0].itemList, type);
            }
        }
    }
    showPriceConfigDialog(itemList, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // For purchase type, skip dialog and navigate directly
            if (type === 'purchase') {
                this.navigateToInvoicePage(itemList, type);
                return;
            }
            // For sales type, show the dialog
            const modal = yield this.modalController.create({
                component: _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_6__.InvoicePriceConfigDialogComponent,
                componentProps: {
                    itemList: itemList,
                    invoiceType: type,
                    context: 'purchase-record'
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
            tot: (item.perch_price * item.quantity).toFixed(2) || 0,
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
            perch_price: item.perch_price || 0,
            pay_price: item.pay_price || 0,
            qty: item.quantity,
            tot: (item.perch_price * item.quantity).toFixed(2) || 0,
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
    clear() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "", currentCustumerStatus: 0 };
        this.payArray = [];
        this.sortedPayArray = [];
        this.purchLocal = [];
        this.showEmpty = false;
        this.loading = false;
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
    getPayDetailsForMob(pay) {
        if (!pay.item_details) {
            this.loadingDetails = true;
            this.api.getPerchInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
                //console.log(data,'case 1')
                let res = data;
                //console.log(data) 
                this.payArray.forEach(element => {
                    if (element.pay_ref == pay.pay_ref) {
                        element.item_details = data['data'];
                    }
                });
                this.loadingDetails = false;
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => { this.loadingDetails = false; });
        }
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
                // this.search() 
            }
        });
        this.storage.get('purchase').then((response) => {
            if (response) {
                this.purchase = response;
                //console.log(this.purchase)  
            }
        });
    }
    prepareOffline() {
        this.storage.get('sub_accountLocalPurch').then((response) => {
            if (response) {
                this.sub_accountLocalPurch = response;
                //console.log(this.sub_accountLocalPurch)  
            }
        });
        //Yaw
        this.storage.get('sub_accountPurch').then((response) => {
            if (response) {
                this.sub_accountPurch = response;
                //console.log(this.sub_accountPurch)  
            }
        });
    }
    getSalesAccount() {
        if (this.offline == false) {
            this.api.getPerchAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                //console.log(this.sub_account)
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
        if (this.sub_accountLocalPurch) {
            for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
                const element = this.sub_accountLocalPurch[i];
                this.sub_account.push(element);
            }
        }
        if (this.sub_accountPurch) {
            for (let i = 0; i < this.sub_accountPurch.length; i++) {
                const element = this.sub_accountPurch[i];
                this.sub_account.push(element);
            }
        }
    }
    addSubaccountLocal() {
        if (this.sub_account) {
            if (this.sub_accountLocalPurch) {
                for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
                    const element = this.sub_accountLocalPurch[i];
                    this.sub_account.push(element);
                }
            }
        }
        else {
            if (this.sub_accountLocalPurch) {
                this.sub_account = this.sub_accountLocalPurch;
            }
        }
    }
    printInvo(printarea, dataFrom) {
        if (this.offline == false && dataFrom.pay_id != undefined) {
            this.paInvo = dataFrom;
            //console.log( this.paInvo) 
            this.api.getPerchInvoDetail(this.store_info.id, dataFrom.pay_ref, this.year.id).subscribe(data => {
                //console.log(data)
                let res = data;
                this.itemList = res['data'];
                //console.log(res) 
                this.printArr = [];
                this.printArr.push({
                    'payInvo': this.paInvo,
                    'itemList': this.itemList,
                    'selectedAccount': this.paInvo.sub_name,
                    'sub_nameNew': ""
                });
                //console.log(this.printArr)
                this.presentModal(this.printArr, 'perch_record');
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
            });
        }
        else if (this.offline == false && dataFrom.pay_id == undefined) {
            console.log(dataFrom, dataFrom);
            //console.log(this.purchLocal ,'case2')
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                'sub_nameNew': ""
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'perch_record');
        }
        else if (this.offline == true && dataFrom.pay_id != undefined) {
            //console.log(this.purchase ,'case3')
            let flt = [];
            flt = this.purchase.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                'sub_nameNew': ""
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'perch_record');
        }
        else if (this.offline == true && dataFrom.pay_id == undefined) {
            //console.log(this.purchLocal)
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                'sub_nameNew': ""
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'perch_record');
        }
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__.PrintModalPage,
                componentProps: {
                    "printArr": this.printArr,
                    "page": page
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
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
                currentCustumerStatus: 0
            };
            //console.log( this.selectedAccount);
            this.payArray = [];
            this.sortedPayArray = [];
            this.purchLocal = [];
            this.showEmpty = false;
            this.loading = false;
            //  this.setFocusOnInput()
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
            this.selectedAccount.sub_name = "";
        }
    }
    Print(elem, paInvo, itemList) {
        if (elem && paInvo && itemList) {
            var mywindow = window.open('', 'PRINT', 'height=400,width=600');
            mywindow.document.write('<html><head>');
            mywindow.document.write('<style type="text/css">');
            mywindow.document.write('.flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;}.ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }');
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
        this.purchLocal = [];
        this.storage.get('purchLocal').then((response) => {
            if (response) {
                this.purchLocal = response;
                //console.log(this.purchLocal)  
            }
        });
    }
    getSalesOffline() {
        this.purchOffline = [];
        this.storage.get('sales').then((response) => {
            if (response) {
                this.purchOffline = response;
                //console.log(this.purchOffline)  
            }
        });
    }
    getTotal() {
        this.sums.tot = this.payArray.reduce((acc, obj) => { return acc + +obj.tot_pr; }, 0);
        this.sums.change = this.payArray.reduce((acc, obj) => { return acc + +obj.changee; }, 0);
        this.sums.pay = this.payArray.reduce((acc, obj) => { return acc + +obj.pay; }, 0);
        this.sums.discount = this.payArray.reduce((acc, obj) => { return acc + +obj.discount; }, 0);
        this.sums.totAfterDiscout = +this.sums.tot - this.sums.discount;
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
    }
    getTopSales() {
        this.getSalesfromLocal();
        this.loading = true;
        this.api.getTopPerch(this.store_info.id, this.year.id).subscribe(data => {
            //console.log('hhhhhh',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            if (this.purchLocal.length > 0) {
                //console.log('locLaly',this.purchLocal)
                for (let i = 0; i < this.purchLocal.length; i++) {
                    const element = this.purchLocal[i];
                    this.payArray.push(element.payInvo);
                }
            }
            //custName - apply account filter if selected
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading all purchase data in getTopSales  
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
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        this.storage.get('purchLocal').then((response) => {
            if (response) {
                let flt = [];
                flt = response;
                this.purchLocal = flt;
                //console.log(flt)
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            // 
            this.storage.get('purchase').then((response2) => {
                if (response2) {
                    let flt = [];
                    flt = response2;
                    this.purchOffline = flt;
                    this.purchase = this.purchOffline;
                    //console.log(flt)
                    if (flt.length > 0) {
                        for (let i = 0; i < flt.length; i++) {
                            const element = flt[i];
                            this.payArray.push(element.payInvo);
                        }
                    }
                }
                this.getTotal();
                // Apply category filtering after loading purchase data from localStorage in getTopSalesOffline
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
            // Apply category filtering after loading data in getTopSalesOffline
            this.applySorting();
        });
    }
    getSalesByDate() {
        this.payArray = [];
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        //console.log(this.store_info.id,this.startingDate)
        this.getSalesfromLocal();
        this.loading = true;
        this.api.getPerchByDate(this.store_info.id, this.startingDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            if (this.purchLocal.length > 0) {
                this.purchLocal = this.purchLocal.filter(x => x.payInvo.pay_id == undefined && x.payInvo.pay_date == this.startingDate);
                //console.log('locLaly',this.purchLocal)
                for (let i = 0; i < this.purchLocal.length; i++) {
                    const element = this.purchLocal[i];
                    this.payArray.push(element.payInvo);
                }
            }
            //custName - apply account filter if selected
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading all purchase data in getSalesByDate
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
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        this.loading = true;
        this.storage.get('purchLocal').then((response) => {
            if (response) {
                this.purchLocal = response;
                let flt = [];
                //console.log('haloo',this.purchLocal) 
                flt = this.purchLocal.filter(x => x.payInvo.pay_date == this.startingDate);
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            this.storage.get('purchase').then((response2) => {
                if (response2) {
                    this.purchOffline = response2;
                    this.purchase = this.purchOffline;
                    //console.log(this.purchOffline) 
                    let flt = [];
                    flt = this.purchOffline.filter(x => x.payInvo.pay_date == this.startingDate);
                    if (flt.length > 0) {
                        for (let i = 0; i < flt.length; i++) {
                            const element = flt[i];
                            this.payArray.push(element.payInvo);
                        }
                    }
                }
                this.getTotal();
                // Apply category filtering after loading purchase data from localStorage in getSalesByDateOffline
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
            //custName
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading data in getSalesByDateOffline
            this.applySorting();
        });
    }
    getSales2Date() {
        this.payArray = [];
        this.purchLocal = [];
        this.purchOffline = [];
        this.purchase = [];
        this.getSalesfromLocal();
        this.loading = true;
        //console.log(this.store_info.id,this.startingDate,this.endDate)
        this.api.getPerch2Date(this.store_info.id, this.startingDate, this.endDate, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payArray = res['data'];
            }
            if (this.purchLocal.length > 0) {
                this.purchLocal = this.purchLocal.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                //console.log('locLaly',this.purchLocal)
                for (let i = 0; i < this.purchLocal.length; i++) {
                    const element = this.purchLocal[i];
                    this.payArray.push(element.payInvo);
                }
                //console.log(this.payArray)
            }
            //custName - apply account filter if selected
            if (this.selectedAccount.sub_name != "") {
                if (this.payArray.length > 0) {
                    this.payArray = this.payArray.filter(x => +x.cust_id == +this.selectedAccount.id);
                }
            }
            this.getTotal();
            // Apply category filtering after loading all purchase data in getSales2Date
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
        this.purchLocal = [];
        this.purchase = [];
        this.purchOffline = [];
        this.loading = true;
        this.storage.get('purchLocal').then((response) => {
            if (response) {
                this.purchLocal = response;
                //console.log(this.purchLocal) 
                let flt = [];
                flt = this.purchLocal.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                if (flt.length > 0) {
                    for (let i = 0; i < flt.length; i++) {
                        const element = flt[i];
                        this.payArray.push(element.payInvo);
                    }
                }
            }
            this.storage.get('purchase').then((response2) => {
                if (response2) {
                    this.purchOffline = response2;
                    this.purchase = this.purchOffline;
                    //console.log(this.purchOffline) 
                    let flt = [];
                    flt = this.purchOffline.filter(x => x.payInvo.pay_date >= this.startingDate && x.payInvo.pay_date <= this.endDate);
                    if (flt.length > 0) {
                        for (let i = 0; i < flt.length; i++) {
                            const element = flt[i];
                            this.payArray.push(element.payInvo);
                        }
                    }
                }
                this.getTotal();
                // Apply category filtering after loading purchase data from localStorage in getSales2DateOffline
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
            // Apply category filtering after loading data in getSales2DateOffline
            this.applySorting();
        });
    }
    radioChange(ev) {
        //console.log(ev.target.value) 
        this.payArray = [];
        this.sortedPayArray = [];
        this.purchLocal = [];
        this.showEmpty = false;
        this.loading = false;
    }
    getPayInvoDetail(pay, sub_name, status) {
        console.log(pay, sub_name, status);
        this.presentLoadingWithOptions('جاري جلب التفاصيل ...');
        if (this.offline == false && pay.pay_id != undefined) {
            this.api.getPerchInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
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
                if (this.device == 'desktop') {
                    this.rout.navigate(['folder/edit-perch'], navigationExtras);
                }
                else {
                    this.rout.navigate(['folder/edit-purchase-mob'], navigationExtras);
                }
            }, (err) => {
                //console.log(err);
                this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
            });
        }
        else if (this.offline == false && pay.pay_id == undefined) {
            console.log(pay, sub_name, status);
            this.loadingController.dismiss();
            //console.log(this.purchLocal ,'case2')
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
            //console.log(flt,'here')
            let navigationExtras = {
                queryParams: {
                    payInvo: JSON.stringify(flt[0].payInvo),
                    sub_name: JSON.stringify(flt[0].payInvo.sub_name),
                    user_info: JSON.stringify(this.user_info),
                    store_info: JSON.stringify(this.store_info),
                    itemList: JSON.stringify(flt[0].itemList)
                }
            };
            if (this.device == 'desktop') {
                this.rout.navigate(['folder/edit-perch'], navigationExtras);
            }
            else {
                this.rout.navigate(['folder/edit-purchase-mob'], navigationExtras);
            }
        }
        else if (this.offline == true && pay.pay_id != undefined) {
            console.log('bbbbbbb', pay, sub_name, status);
            this.loadingController.dismiss();
            //console.log(this.purchase ,'case3')
            let flt = [];
            flt = this.purchase.filter(x => x.payInvo.pay_ref == pay.pay_ref);
            //console.log(flt,'here')
            let navigationExtras = {
                queryParams: {
                    payInvo: JSON.stringify(flt[0].payInvo),
                    sub_name: JSON.stringify(flt[0].payInvo.sub_name),
                    user_info: JSON.stringify(this.user_info),
                    store_info: JSON.stringify(this.store_info),
                    itemList: JSON.stringify(flt[0].itemList)
                }
            };
            if (this.device == 'desktop') {
                this.rout.navigate(['folder/edit-perch'], navigationExtras);
            }
            else {
                this.rout.navigate(['folder/edit-purchase-mob'], navigationExtras);
            }
        }
        else if (this.offline == true && pay.pay_id == undefined) {
            console.log(pay, sub_name, status);
            this.loadingController.dismiss();
            //console.log(this.purchLocal)
            let flt = [];
            flt = this.purchLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
            //console.log(flt,'here')
            let navigationExtras = {
                queryParams: {
                    payInvo: JSON.stringify(flt[0].payInvo),
                    sub_name: JSON.stringify(flt[0].payInvo.sub_name),
                    user_info: JSON.stringify(this.user_info),
                    store_info: JSON.stringify(this.store_info),
                    itemList: JSON.stringify(flt[0].itemList)
                }
            };
            if (this.device == 'desktop') {
                this.rout.navigate(['folder/edit-perch'], navigationExtras);
            }
            else {
                this.rout.navigate(['folder/edit-purchase-mob'], navigationExtras);
            }
        }
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                currentCustumerStatus: account.currentCustumerStatus || 0
            };
            // Clear existing data and reload records for selected account
            this.payArray = [];
            this.sortedPayArray = [];
            this.purchLocal = [];
            this.showEmpty = false;
            this.loading = false;
            console.log('Account selected in purchase-record:', this.selectedAccount);
        }
    }
    // Handle account balance loaded
    onAccountBalanceLoaded(balance) {
        if (balance && this.selectedAccount) {
            // Update the supplier balance
            this.selectedAccount.sub_balance = balance.current_balance;
            console.log('Account balance loaded in purchase-record:', balance);
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
    // Export functionality
    exportToPDF() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.sortedPayArray || this.sortedPayArray.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('purchase-record'),
                subtitle: this.generateSubtitle(),
                fileName: `purchase-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.sortedPayArray,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'purchase-record',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToPDF(config);
        });
    }
    exportToExcel() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.sortedPayArray || this.sortedPayArray.length === 0) {
                yield this.presentToast('لا توجد بيانات للتصدير', 'warning');
                return;
            }
            const config = {
                title: this.exportService.generateDynamicTitle('purchase-record'),
                subtitle: this.generateSubtitle(),
                fileName: `purchase-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
                data: this.sortedPayArray,
                columns: this.getExportColumns(),
                userName: ((_a = this.user_info) === null || _a === void 0 ? void 0 : _a.full_name) || ((_b = this.user_info) === null || _b === void 0 ? void 0 : _b.user_name) || 'مستخدم غير معروف',
                pageType: 'purchase-record',
                currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
            };
            yield this.exportService.exportToExcel(config);
        });
    }
    generateSubtitle() {
        const filters = {
            selectedAccount: this.selectedAccount.sub_name ? this.selectedAccount : null,
            dateFilter: this.getDateFilter(),
            searchTerm: null
        };
        return this.exportService.generateDynamicSubtitle('purchase-record', filters);
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
        return [
            { key: 'sub_name', title: 'المورد', width: 20, type: 'text' },
            { key: 'pay_date', title: 'التاريخ', width: 12, type: 'date' },
            { key: 'tot_pr', title: 'إجمالي المبلغ', width: 15, type: 'currency' },
            { key: 'discount', title: 'الخصم', width: 12, type: 'currency' },
            { key: 'finalAmount', title: 'الإجمالي بعد الخصم', width: 18, type: 'currency' },
            { key: 'payComment', title: 'تعليق', width: 20, type: 'text' },
            { key: 'user_name', title: 'المستخدم', width: 15, type: 'text' }
        ];
    }
};
PurchaseRecordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _services_sorting_service__WEBPACK_IMPORTED_MODULE_7__.SortingService },
    { type: _services_export_service__WEBPACK_IMPORTED_MODULE_8__.ExportService }
];
PurchaseRecordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-purchase-record',
        template: _purchase_record_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_purchase_record_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PurchaseRecordPage);



/***/ }),

/***/ 24305:
/*!**********************************************************************!*\
  !*** ./src/app/purchase-record/purchase-record.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\n.card-header-with-export {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: var(--ion-color-light);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.card-header-with-export ion-card-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLXJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUFPLG1CQUFBO0FBRVg7O0FBQUU7RUFBTSxrQkFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7QUFLUjs7QUFGSTtFQUNJLGdCQUFBO0FBS1I7O0FBRkU7RUFBTyxrQkFBQTtFQUFtQixXQUFBO0VBQWEsWUFBQTtBQVF6Qzs7QUFORTtFQUFvQix5QkFBQTtBQVV0Qjs7QUFURTtFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFrQnZHOztBQWZBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxxREFBQTtBQWtCRjs7QUFoQkU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBa0JKIiwiZmlsZSI6InB1cmNoYXNlLXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuc2hvd3sgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG4gIC5oaWRle3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIFxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuY3VzdFJvd3tcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgfVxuXG4gIC50YWJsZXt0ZXh0LWFsaWduOiBjZW50ZXI7d2lkdGg6IDEwMCU7IG1hcmdpbjogMTJweDt9XG5cbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO31cbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fVxuXG4vLyBFeHBvcnQgYnV0dG9ucyBzdHlsaW5nXG4uY2FyZC1oZWFkZXItd2l0aC1leHBvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG59Il19 */";

/***/ }),

/***/ 68582:
/*!**********************************************************************!*\
  !*** ./src/app/purchase-record/purchase-record.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>سجل المشتريات</ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"device == 'desktop'\">\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n\n                            <ion-col size=\"4\" dir=\"rtl\"> \n                              <app-account-selector\n                                accountType=\"supplier\"\n                                placeholder=\"اختر حساب المورد\"\n                                label=\"حساب المورد\"\n                                [store_info]=\"store_info\"\n                                [year]=\"year\"\n                                [showAddButton]=\"false\"\n                                [(ngModel)]=\"selectedAccount\"\n                                (accountSelected)=\"onAccountSelected($event)\"\n                                (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n                              </app-account-selector>\n                              <!-- Balance Preview -->\n                              \n                            </ion-col>\n                            \n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>مشتريات حديثة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث  في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                              <ion-label>بحث في فترة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 \">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col>\n                      \n                    </ion-row>\n                  </ion-grid>\n                 \n              </ion-col>\n               \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n              <ion-card-header class=\"ion-no-padding\">\n                <div class=\"card-header-with-export\">\n                  <ion-card-title>سجل المشتريات</ion-card-title>\n                  <app-export-buttons \n                    [hasData]=\"sortedPayArray && sortedPayArray.length > 0\"\n                    [isLoading]=\"loading\"\n                    (exportPDF)=\"exportToPDF()\"\n                    (exportExcel)=\"exportToExcel()\">\n                  </app-export-buttons>\n                </div>\n              </ion-card-header>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <!-- <th>رقم الفاتورة</th> -->\n                  <th class=\"sortable-header\" (click)=\"sortBy('sub_name')\">\n                    <ion-icon [name]=\"getSortIcon('sub_name')\" class=\"sort-icon\"></ion-icon>\n                    العميل\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('pay_date')\">\n                    <ion-icon [name]=\"getSortIcon('pay_date')\" class=\"sort-icon\"></ion-icon>\n                    التاريخ\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('tot_pr')\">\n                    <ion-icon [name]=\"getSortIcon('tot_pr')\" class=\"sort-icon\"></ion-icon>\n                    اجمالي المبلغ\n                  </th>\n                  <th class=\"sortable-header\" (click)=\"sortBy('discount')\">\n                    <ion-icon [name]=\"getSortIcon('discount')\" class=\"sort-icon\"></ion-icon>\n                    الخصــم\n                  </th>  \n                  <th>الإجمالي بعد الخصم</th>  \n                  <!-- Hidden pay and change columns -->\n                  <th class=\"sortable-header\" (click)=\"sortBy('payComment')\">\n                    <ion-icon [name]=\"getSortIcon('payComment')\" class=\"sort-icon\"></ion-icon>\n                    تعليق\n                  </th>  \n                  <!-- <th ><strong>تعديل</strong></th> -->\n                  <th ><strong>إجراء</strong></th>\n\n                  <!-- <th ><strong>طياعة</strong></th>  -->\n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of sortedPayArray ; let i = index\">\n                  <td>{{i+1}}</td>\n                  <!-- <td>{{pay.pay_id}}</td> -->\n                  <td>{{pay.sub_name}}</td>\n                  <td> {{pay.pay_date}}</td>\n                  <td>{{formatBalance(pay.tot_pr)}}</td>\n                  <td>{{formatBalance(pay.discount)}}</td>\n                  <td>{{formatBalance(+pay.tot_pr - +pay.discount)}}</td>\n                  <!-- Hidden pay and change data -->\n                  <td>{{pay.payComment}}</td>\n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"getPayInvoDetail(pay ,pay.sub_name, 'edit')\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon> \n                    </ion-button>\n                  </td> -->\n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon>\n                    </ion-button>\n                  </td> -->\n                  <td>\n                    <!-- Replace the existing action buttons in your ion-item with this: -->\n                    <ion-button \n                      fill=\"clear\" \n                      size=\"small\" \n                      (click)=\"presentActionPopover($event, pay, pay.sub_name)\"\n                      slot=\"end\">\n                      <ion-icon name=\"ellipsis-vertical\" slot=\"icon-only\"></ion-icon>\n                    </ion-button> \n                  </td>\n                 </tr> \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <!-- Hidden skeleton for pay and change columns -->\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <!-- Hidden skeleton for pay and change columns -->\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr> \n                \n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                <ion-col size=\"4\" class=\"ion-text-center\">  \n                  <ion-label> \n                    <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                 </ion-label>\n                 <h4> لا توجد سجلات </h4> \n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n  \n  \n    <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"4\"> \n                     <ion-label  class=\"ion-padding\"><strong>الصنف</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                         \n                          <datalist style=\"border: none;\" id=\"browsers\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                        </datalist>\n                        </ion-item>  \n                    </ion-col>\n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input  [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event.target.val)\" #qtyId  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.pay_price\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row> -->\n  \n      \n      \n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n\n<ion-content *ngIf=\"device == 'mobile'\">\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row> \n                            <ion-col> \n                              <app-account-selector\n                                accountType=\"supplier\"\n                                placeholder=\"اختر حساب المورد\"\n                                label=\"حساب المورد\"\n                                [store_info]=\"store_info\"\n                                [year]=\"year\"\n                                [showAddButton]=\"false\"\n                                [(ngModel)]=\"selectedAccount\"\n                                (accountSelected)=\"onAccountSelected($event)\"\n                                (balanceLoaded)=\"onAccountBalanceLoaded($event)\">\n                              </app-account-selector>\n                              <!-- Balance Preview -->\n                              <ion-item lines=\"none\" *ngIf=\"selectedAccount && selectedAccount.sub_name\">\n                                <ion-label class=\"ion-text-wrap\">\n                                  <p><strong>الرصيد الحالي:</strong> {{formatBalance(selectedAccount.sub_balance || 0)}} ريال</p>\n                                </ion-label>\n                              </ion-item>\n                            </ion-col> \n                              <ion-col>\n                                <ion-item lines=\"none\" >\n                                  <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>مشتريات حديثة</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col>\n                                <ion-item lines=\"none\" >\n                                  <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>بحث  في تاريخ</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col>\n                                <ion-item lines=\"none\">\n                                  <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث في فترة</ion-label> \n                                </ion-item>\n                              </ion-col>\n                             \n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 \">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" *ngIf=\"radioVal == 2\">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"8\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid>\n                 \n              </ion-col>\n               \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n<ion-grid class=\"ion-margin-top\" dir=\"rtl\" *ngIf=\"user_info && store_info\">\n  <ion-accordion-group *ngIf=\"payArray\">\n    <ion-accordion *ngFor=\"let pay of payArray ; let i = index\"  (click)=\"getPayDetailsForMob(pay)\" [value]=\"i\"   toggleIcon=\"caret-down-circle\" toggleIconSlot=\"end\" >\n      <ion-item slot=\"header\" color=\"light\" > \n        <ion-icon name=\"newspaper-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>{{pay.sub_name}}</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-label><ion-note>{{pay.pay_date | date:'dd-MM'}}</ion-note>    </ion-label>\n            </ion-col>\n            <ion-col size=\"8\" class=\"ion-text-end\">\n              <ion-label>{{formatBalance(+pay.tot_pr - +pay.discount)}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loading == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n      <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loading == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n      <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loading == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n     \n      <div class=\"ion-padding\" slot=\"content\">\n        <ion-item color=\"light\"  *ngIf=\"loading == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n          <ion-list *ngIf=\"pay.item_details\">\n            <ion-item color=\"light\" lines=\"none\" *ngFor=\"let item of pay.item_details\" > \n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-label>{{item.item_name}}</ion-label>\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <ion-label><ion-note>الكمية :</ion-note>{{item.quantity}}</ion-label>\n                  </ion-col>\n                  <ion-col size=\"8\" class=\"ion-text-end\">\n                    <ion-label><ion-note>السعر :</ion-note>{{item.perch_price}}</ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n            </ion-item>\n            <ion-grid>\n             \n            </ion-grid>\n          </ion-list> \n        <ion-item-divider></ion-item-divider>\n        <ion-list>\n          <ion-item lines=\"none\">\n            <ion-label><ion-note>المجموع  : </ion-note><strong>{{formatBalance(pay.tot_pr)}}</strong></ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"pay.discount > 0\">\n            <ion-label><ion-note>تخفيض  : </ion-note><strong>{{formatBalance(pay.discount)}}</strong></ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"pay.discount > 0\">\n            <ion-label><ion-note> صافي المبلغ    : \n            </ion-note><strong> {{formatBalance(+pay.tot_pr - +pay.discount)}} </strong></ion-label>\n            </ion-item>\n        </ion-list>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"6\">\n            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit')\"  > \n              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n              <ion-label><ion-text color=\"dark\">تعديل</ion-text></ion-label> \n            </ion-button>\n          </ion-col>\n          <!-- <ion-col size=\"6\">\n            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"printInvo('printarea',pay)\"  > \n              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n              <ion-label><ion-text color=\"dark\">طباعة</ion-text></ion-label> \n            </ion-button>\n          </ion-col> -->\n        </ion-row>\n     \n      </div>\n    </ion-accordion> \n  </ion-accordion-group> \n</ion-grid>  \n</ion-content>\n\n\n<ion-footer *ngIf=\"payArray\"> \n  <ion-grid dir=\"rtl\" *ngIf=\"device == 'desktop'\">\n    <ion-row>\n      <ion-col>\n        <ion-label><ion-text>إجمالي المشتريات : </ion-text><br>  <strong>{{formatBalance(sums.tot)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{formatBalance(sums.discount)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>المشتريات بعد الخصم : </ion-text><br>  <strong>{{formatBalance(sums.totAfterDiscout)}}</strong></ion-label>\n      </ion-col>\n      <!-- Hidden pay and change summary columns -->\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid dir=\"rtl\" *ngIf=\"device == 'mobile'\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>إجمالي المشتريات : </ion-text><br>  <strong>{{formatBalance(sums.tot)}}</strong></ion-label>\n      </ion-col>\n      <ion-col  size=\"6\">\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{formatBalance(sums.discount)}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label><ion-text>المشتريات بعد الخصم : </ion-text><br>  <strong>{{formatBalance(sums.totAfterDiscout)}}</strong></ion-label>\n      </ion-col>\n      <!-- Hidden pay and change summary columns for mobile -->\n    </ion-row>\n  </ion-grid>\n\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_purchase-record_purchase-record_module_ts.js.map
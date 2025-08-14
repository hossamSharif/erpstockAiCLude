"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 75375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 41070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stockService/services.service */ 91472);








let SettingsPage = class SettingsPage {
    constructor(route, alertController, storage, loadingController, api, toast) {
        this.route = route;
        this.alertController = alertController;
        this.storage = storage;
        this.loadingController = loadingController;
        this.api = api;
        this.toast = toast;
        this.purchase = [];
        this.sales = [];
        this.tswia = [];
        this.tswiaDetails = [];
        this.salesDetails = [];
        this.purchDetails = [];
        this.itemsLocal = [];
        this.firstq = [];
        this.sub_account = [];
        this.purchLocal = [];
        this.salesLocal = [];
        this.sub_accountLocalSales = [];
        this.sub_accountLocalPurch = [];
        this.sub_accountSales = [];
        this.sub_accountPurch = [];
        this.purchLocalUpdate = [];
        this.purchLocalDelete = [];
        this.salesLocalDelete = [];
        this.salesLocalUpdate = [];
        this.yearArr = [];
        this.newAccounts = [];
        this.color = 'dark';
        this.radioVal = null;
        this.selectedYear = null;
        this.progressVal = .2;
    }
    ngOnInit() {
        this.getAppInfo();
        setTimeout(() => {
            this.afterLoad = 'loaded';
        }, 3000);
    }
    radioChangeS(ev) {
        //console.log(this.radioVal)
        this.storage.set('searchLang', this.radioVal).then((response) => {
        });
    }
    getOfflineMode() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            if (this.offline == true) {
                this.color = 'dark';
            }
            else {
                this.color = 'primary';
            }
            //console.log(this.offline)  
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
            }
        });
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log(this.offline) 
            if (this.offline == true) {
                this.color = 'dark';
            }
            else {
                this.color = 'primary';
            }
        });
        this.storage.get('searchLang').then((response) => {
            if (response) {
                this.radioVal = response;
                //console.log(this.radioVal) 
            }
        });
        this.getyear();
    }
    getyear() {
        this.api.getYear().subscribe(data => {
            let res = data;
            this.yearArr = res['data'];
            this.setCurrentYear();
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        });
    }
    setCurrentYear() {
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                this.selectedYear = this.year.id;
            }
            else {
                this.year = this.yearArr[0];
                this.storage.set('year', this.year).then((response) => {
                    //console.log('year set',  this.year) 
                });
            }
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let msg = 'سيتم اعادة تحميل النظام من جديد , اضغط علي موافق للإستمرار';
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: msg,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            window.location.reload();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    yearChange(ev, after) {
        //console.log(ev.target.value)
        this.year = this.yearArr[this.yearArr.findIndex(x => x.id == ev.target.value)];
        //console.log( this.year)
        //set year 
        this.storage.set('year', this.year).then((response) => {
            //console.log('year set',  this.year) 
            if (after == 'loaded') {
                this.presentAlertConfirm();
            }
        });
    }
    //مزامنة التحديثات 
    // new accounts 
    sync() {
        //console.log('firstTimeSync')
        this.progressVal = .2;
        this.firstTimeSync();
        // this.storage.get('itemsLocal').then((response) => {
        //   if (response) {  
        //     this.prepareNewAccounts()
        //       //console.log('updateSync')
        //   }else{
        //     //console.log('firstTimeSync')
        //     this.progressVal = .2
        //     this.firstTimeSync() 
        //   }
        // });
    }
    firstTimeSync() {
        // this.getItems()
        this.getTswia();
    }
    //old version
    getStockItems() {
        this.api.getAllStockItemsWithouteCounts(this.store_info.id, this.year.id).subscribe(data => {
            console.log('new items call ', data);
            let res = data;
            this.itemsLocal = res['data'];
            // this.itemsLocal.forEach(element => {
            //   element.quantity =  (+element.perchQuantity + +element.firstQuantity)  - +element.salesQuantity  
            // }); 
            this.storage.set('itemsLocal', this.itemsLocal).then((response) => {
                //console.log('resoponse set', response)
                this.getSalesAccount();
                this.progressVal = +this.progressVal + .2;
            });
        }, (err) => {
            //console.log(err);
        }, () => {
        });
    }
    //   getStockItems(){
    //     this.api.stockItems2(this.store_info.id,this.year.id).subscribe(data =>{
    //       //console.log(data)
    //       let res = data 
    //       this.itemsLocal = res['data'] 
    //       this.sumStocksItems()
    //     }, (err) => {
    //     //console.log(err);
    //   } ,
    //     ()=>{
    //   }
    //   )  
    // }
    // sumStocksItems( ){
    //   this.api.stockItems(this.store_info.id,this.year.id).subscribe(data =>{
    //     //console.log(data)
    //     let res = data
    //     this.itemsLocal = res['data'] 
    //     for (let index = 0; index < this.itemsLocal.length; index++) {
    //       const element = this.itemsLocal[index];
    //       let flt = this.itemsLocal.filter(x=>x.id == element.id)
    //       if(flt.length>0){
    //         element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
    //        // element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
    //         element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
    //       }
    //     }  
    //     this.itemsLocal.forEach(element => {
    //       element.quantity =  (+element.perchQuantity + +element.firstQuantity)  - +element.salesQuantity  
    //     }); 
    //     this.storage.set('itemsLocal', this.itemsLocal).then((response) => {
    //       //console.log('resoponse set', response)
    //       this.getSalesAccount() 
    //       this.progressVal = +this.progressVal+ .2
    //     }); 
    //   }, (err) => {
    //   //console.log(err);
    // } ,
    //   ()=>{
    // }
    // )  
    // }
    getTswia() {
        this.api.getToptswia(this.store_info.id, this.year.id).subscribe(data => {
            //console.log('hhhhhh',data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.tswia = res['data'];
            }
            this.getAllTswiaDetail();
        }, (err) => {
            //console.log(err);
        }, () => {
        });
    }
    getAllTswiaDetail() {
        this.api.getAllTswiaDetail(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] != 'No record Found') {
                this.tswiaDetails = res['data'];
            }
            if (this.tswia.length > 0) {
                this.addSTswiaDetails();
                this.storage.set('tswia', this.tswia).then((response) => {
                    //console.log('tswia', response)
                });
            }
            this.getfirstQty();
        }, (err) => {
            //console.log(err);
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
        }, () => {
        });
    }
    addSTswiaDetails() {
        let payArr = [];
        for (let index = 0; index < this.tswia.length; index++) {
            const element = this.tswia[index];
            let flt = this.tswiaDetails.filter(item => item.pay_ref == element.pay_ref);
            payArr.push({
                "payInvo": element,
                "itemList": flt
            });
        }
        this.tswia = payArr;
        //console.log('tswia',this.tswia)
    }
    getfirstQty() {
        this.api.getFirstQty(this.store_info.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.firstq = res['data'];
            this.storage.set('firstq', this.firstq).then((response) => {
                //console.log('resoponse set', response)
                this.getStockItems();
                this.progressVal = +this.progressVal + .2;
            });
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        });
    }
    getItems() {
        this.api.getItems().subscribe(data => {
            //console.log(data)
            let res = data;
            this.itemsLocal = res['data'];
            this.storage.set('itemsLocal', this.itemsLocal).then((response) => {
                //console.log('resoponse set', response)
                this.getSalesAccount();
                this.progressVal = +this.progressVal + .2;
            });
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        });
    }
    getSalesAccount() {
        this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
            let res = data;
            this.sub_accountSales = res['data'];
            //console.log(this.sub_account)
            this.storage.set('sub_accountSales', this.sub_accountSales).then((response) => {
                //console.log('sub_accountSales ', response) 
                this.getPurchAccount();
                this.progressVal = +this.progressVal + .2;
            });
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        });
    }
    getPurchAccount() {
        this.api.getPerchAccounts(this.store_info.id, this.year.id).subscribe(data => {
            let res = data;
            this.sub_accountPurch = res['data'];
            this.storage.set('sub_accountPurch', this.sub_accountPurch).then((response) => {
                //console.log('sub_accountPurch', response) 
                this.getTopPerch();
                this.progressVal = +this.progressVal + .2;
            });
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        });
    }
    getTopPerch() {
        this.api.getTopPerch(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.purchase = res['data'];
            if (res['message'] == 'No record Found') {
                this.getTopSales();
            }
            else {
                this.storage.set('purchase', this.purchase).then((response) => {
                    //console.log('purchase', response) 
                    this.getTopSales();
                    this.progressVal = +this.progressVal + .2;
                });
            }
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        }, () => {
        });
    }
    getTopSales() {
        this.api.getTopSales(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.sales = res['data'];
            if (res['message'] == 'No record Found') {
                this.getAllPurchDetail();
            }
            else {
                this.storage.set('sales', this.sales).then((response) => {
                    //console.log('sales', response)
                    this.getAllSalesDetail();
                });
            }
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        }, () => {
        });
    }
    getAllSalesDetail() {
        this.api.getAllSalesDetail(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.salesDetails = res['data'];
            if (this.sales.length > 0) {
                this.addSalesDetails();
                this.storage.set('sales', this.sales).then((response) => {
                    //console.log('sales', response)
                });
            }
            this.getAllPurchDetail();
        }, (err) => {
            //console.log(err);
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
        }, () => {
        });
    }
    addSalesDetails() {
        let payArr = [];
        for (let index = 0; index < this.sales.length; index++) {
            const element = this.sales[index];
            let flt = this.salesDetails.filter(item => item.pay_ref == element.pay_ref);
            payArr.push({
                "payInvo": element,
                "itemList": flt
            });
        }
        this.sales = payArr;
        //console.log(this.sales)
    }
    getAllPurchDetail() {
        this.api.getAllPerchDetail(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            if (res['message'] == 'No record Found') {
                this.prepareNewAccounts();
            }
            else {
                this.purchDetails = res['data'];
                this.addPurchDetails();
                this.storage.set('purchase', this.purchase).then((response) => {
                    //console.log('purchase', response)
                    this.prepareNewAccounts();
                });
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
        }, () => {
        });
    }
    addPurchDetails() {
        let payArr = [];
        for (let index = 0; index < this.purchase.length; index++) {
            const element = this.purchase[index];
            let flt = this.purchDetails.filter(item => item.pay_ref == element.pay_ref);
            payArr.push({
                "payInvo": element,
                "itemList": flt
            });
        }
        this.purchase = payArr;
        //console.log(this.purchase)
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 5000,
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
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    clickTo() {
        if (this.offline == false) {
            this.offline = true;
            this.color = 'dark';
        }
        else {
            this.offline = false;
            this.color = 'primary';
        }
    }
    radioChange(ev) {
        //console.log(ev.detail.checked)
        //console.log(this.offline)
        if (ev.detail.checked == true) {
            this.offline = true;
            this.color = 'dark';
        }
        else {
            this.offline = false;
            this.color = 'primary';
        }
        this.storage.set('offline', this.offline).then((response) => {
            //console.log('resoponse set', response) 
        });
    }
    prepareNewAccounts() {
        this.newAccounts = [];
        this.sub_accountLocalSales = [];
        this.sub_accountLocalPurch = [];
        this.storage.get('sub_accountLocalSales').then((response) => {
            if (response) {
                this.sub_accountLocalSales = response;
                //console.log(this.sub_accountLocalSales)  
                if (this.sub_accountLocalSales.length > 0) {
                    for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                        const element = this.sub_accountLocalSales[i];
                        this.newAccounts.push(element);
                    }
                }
            }
            this.storage.get('sub_accountLocalPurch').then((response2) => {
                if (response2) {
                    this.sub_accountLocalPurch = response2;
                    //console.log(this.sub_accountLocalPurch)
                    if (this.sub_accountLocalPurch.length > 0) {
                        for (let j = 0; j < this.sub_accountLocalPurch.length; j++) {
                            const element = this.sub_accountLocalPurch[j];
                            this.newAccounts.push(element);
                        }
                    }
                }
                if (this.newAccounts.length > 0) {
                    //console.log('new accounts' ,this.newAccounts)
                    this.saveSubAccountMulti(this.newAccounts);
                }
                else {
                    this.addAccountstosalesLocal();
                }
            });
        });
    }
    saveSubAccountMulti(newAccounts) {
        this.api.createMultiAccount(newAccounts).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.sub_accountLocalSales = [];
                this.sub_accountLocalPurch = [];
                this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
                    //console.log('sub_accountLocalSales ', response)  
                    this.storage.set('sub_accountLocalPurch', this.sub_accountLocalPurch).then((response2) => {
                        //console.log('sub_accountLocalPurch ', response2)  
                    });
                });
                this.getSalesAccounts2();
            }
            else {
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
        });
    }
    //  update locally
    getSalesAccounts2() {
        this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
            let res = data;
            this.sub_accountSales = res['data'];
            //console.log(this.sub_account)
            this.storage.set('sub_accountSales', this.sub_accountSales).then((response) => {
                //console.log('sub_accountSales ', response) 
                this.getPurchAccount2();
            });
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        });
    }
    getPurchAccount2() {
        this.api.getPerchAccounts(this.store_info.id, this.year.id).subscribe(data => {
            let res = data;
            this.sub_accountPurch = res['data'];
            this.storage.set('sub_accountPurch', this.sub_accountPurch).then((response) => {
                //console.log('sub_accountPurch', response) 
                this.addAccountstosalesLocal();
            });
        }, (err) => {
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
            //console.log(err);
        });
    }
    //  add account to salesLocal and purchLcal
    addAccountstosalesLocal() {
        this.storage.get('sub_accountSales').then((response) => {
            //console.log('sub_accountSales ', response) 
            this.sub_accountSales = response;
            this.storage.get('salesLocal').then((response2) => {
                if (response2) {
                    this.salesLocal = response2;
                    //console.log(this.salesLocal)
                    if (this.salesLocal.length > 0) {
                        for (let j = 0; j < this.salesLocal.length; j++) {
                            const element = this.salesLocal[j];
                            if (element.payInvo.cust_id == null) {
                                let flt = this.sub_accountSales.filter(x => x.sub_name == element.payInvo.sub_name);
                                //console.log(this.sub_accountSales,flt)
                                if (flt) {
                                    element.payInvo.cust_id = flt[0].id;
                                }
                            }
                        }
                    }
                }
                // creatmulti sale
                if (this.salesLocal.length > 0) {
                    let salesLit = [];
                    let itemList = [];
                    for (let r = 0; r < this.salesLocal.length; r++) {
                        const element = this.salesLocal[r];
                        salesLit.push(element.payInvo);
                        for (let s = 0; s < element.itemList.length; s++) {
                            const element2 = element.itemList[s];
                            itemList.push(element2);
                        }
                    }
                    this.createMultiSales(salesLit, itemList);
                }
                else {
                    this.addSubaccoutPurch();
                }
            });
        });
    }
    createMultiSales(salesLit, itemList) {
        //console.log(itemList)
        this.api.createMultiSales(salesLit).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.createPayDetais(itemList);
            }
            else {
                this.presentToast('لم يتم  حفظ البيانات, خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
        });
    }
    createPayDetais(itemList) {
        this.api.saveSalesitemList(itemList).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                // update sales localy
                this.salesLocal = [];
                this.storage.set('salesLocal', this.salesLocal).then((response) => {
                    //console.log('salesLocal ', response) 
                    this.addSubaccoutPurch();
                });
            }
            else {
            }
        }, (err) => {
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    addSubaccoutPurch() {
        this.storage.get('sub_accountPurch').then((response) => {
            //console.log('sub_accountPurch ', response) 
            this.sub_accountPurch = response;
            this.storage.get('purchLocal').then((response2) => {
                if (response2) {
                    this.purchLocal = response2;
                    //console.log(this.purchLocal)
                    if (this.purchLocal.length > 0) {
                        for (let j = 0; j < this.purchLocal.length; j++) {
                            const element = this.purchLocal[j];
                            if (element.payInvo.cust_id == null) {
                                let flt = this.sub_accountPurch.filter(x => x.sub_name == element.payInvo.sub_name);
                                if (flt) {
                                    element.payInvo.cust_id = flt[0].id;
                                }
                            }
                        }
                    }
                }
                this.presentToast('تمت المزامنة ', "success");
                // create multicastlti purch
                if (this.purchLocal.length > 0) {
                    let purchLit = [];
                    let itemList = [];
                    for (let r = 0; r < this.purchLocal.length; r++) {
                        const element = this.purchLocal[r];
                        purchLit.push(element.payInvo);
                        for (let s = 0; s < element.itemList.length; s++) {
                            const element2 = element.itemList[s];
                            itemList.push(element2);
                        }
                    }
                    this.createMultiPurch(purchLit, itemList);
                }
                else {
                    //what next step
                    this.deleteSalesLocal();
                }
            });
        });
    }
    createMultiPurch(purchLit, itemList) {
        this.api.createMultiPurch(purchLit).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.createPerchDetais(itemList);
            }
            else {
                this.presentToast('لم يتم  حفظ البيانات, خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('حدث خطأ ما , الرجاء اعادة المحاولة ', 'danger');
        });
    }
    createPerchDetais(itemList) {
        this.api.savePerchitemList(itemList).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                // update sales localy
                this.purchLocal = [];
                this.storage.set('purchLocal', this.purchLocal).then((response) => {
                    //console.log('purchLocal ', response) 
                    this.deleteSalesLocal();
                });
            }
            else {
            }
        }, (err) => {
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    // salesLocalDelete
    deleteSalesLocal() {
        this.storage.get('salesLocalDelete').then((response2) => {
            if (response2) {
                this.salesLocalDelete = response2;
                for (let i = 0; i < this.salesLocalDelete.length; i++) {
                    const element = this.salesLocalDelete[i];
                    this.api.deleteSalesInvo(element.payInvo.pay_id).subscribe(data => {
                        //console.log(data)
                        // if (data['message'] != 'Post Not Deleted') {
                        // }else{
                        //  this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
                        // }
                    }, (err) => {
                        //console.log(err);
                        this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                    });
                }
                this.deleteSalesitemList(this.salesLocalDelete[0].payInvo.pay_ref);
            }
            else {
                this.updateSalesInvo();
            }
        });
    }
    deleteSalesitemList(pay_ref) {
        this.api.deleteSalesitemList(pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.salesLocalDelete = [];
                this.storage.set('salesLocalDelete', this.salesLocalDelete).then((response) => {
                    //console.log('salesLocalDelete', response)  
                });
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    updateSalesInvo() {
        this.storage.get('salesLocalUpdate').then((response2) => {
            if (response2) {
                this.salesLocalUpdate = response2;
                for (let i = 0; i < this.salesLocalUpdate.length; i++) {
                    const element = this.salesLocalUpdate[i];
                    this.api.updateSalesInvo(element.payInvo).subscribe(data => {
                        //console.log(data)
                    }, (err) => {
                        //console.log(err);
                    });
                }
                this.deleteSalesitemList4update(this.salesLocalUpdate);
            }
            else {
                this.deletePurchLocal();
            }
        });
    }
    deleteSalesitemList4update(saleseLocalUpdate) {
        let itemsList = [];
        for (let i = 0; i < saleseLocalUpdate.length; i++) {
            const element = saleseLocalUpdate[i];
            for (let s = 0; s < element.itemList.length; s++) {
                const element2 = element.itemList[s];
                itemsList.push(element2);
            }
            this.api.deleteSalesitemList(element.payInvo.pay_ref).subscribe(data => {
                //console.log(data) 
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                });
            });
        }
        if (itemsList.length > 0) {
            this.saveSalesitemList(itemsList);
        }
        else {
            this.deletePurchLocal();
        }
    }
    saveSalesitemList(itemList) {
        //console.log(itemList)
        this.api.saveSalesitemList(itemList).subscribe(data => {
            //console.log(data)   
            if (data['message'] != 'Post Not Deleted') {
                this.salesLocalUpdate = [];
                this.storage.set('salesLocalUpdate', this.salesLocalUpdate).then((response) => {
                    //console.log('salesLocalUpdate', response) 
                    this.deletePurchLocal();
                });
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    // delte purch
    //update purch
    // salesLocalDelete
    deletePurchLocal() {
        this.storage.get('purchLocalDelete').then((response2) => {
            if (response2) {
                this.purchLocalDelete = response2;
                for (let i = 0; i < this.purchLocalDelete.length; i++) {
                    const element = this.purchLocalDelete[i];
                    this.api.deletePerchInvo(element.payInvo.pay_id).subscribe(data => {
                        //console.log(data)
                    }, (err) => {
                        //console.log(err);
                        this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                    });
                }
                this.deletePurchitemList(this.salesLocalDelete[0].payInvo.pay_ref);
            }
            else {
                this.updatePurchInvo();
            }
        });
    }
    deletePurchitemList(pay_ref) {
        this.api.deletePerchitemList(pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.purchLocalDelete = [];
                this.storage.set('purchLocalDelete', this.purchLocalDelete).then((response) => {
                    //console.log('purchLocalDelete', response)  
                });
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
        });
    }
    updatePurchInvo() {
        this.storage.get('purchLocalUpdate').then((response2) => {
            if (response2) {
                this.purchLocalUpdate = response2;
                for (let i = 0; i < this.purchLocalUpdate.length; i++) {
                    const element = this.purchLocalUpdate[i];
                    this.api.updatePerchInvo(element.payInvo).subscribe(data => {
                        //console.log(data)
                    }, (err) => {
                        //console.log(err);
                    });
                }
                this.deletePurchitemList4update(this.purchLocalUpdate);
            }
            else {
                //  next step is delete purch info 
            }
        });
    }
    deletePurchitemList4update(PurcheLocalUpdate) {
        let itemsList = [];
        for (let i = 0; i < PurcheLocalUpdate.length; i++) {
            const element = PurcheLocalUpdate[i];
            itemsList.push(element.itemList);
            for (let s = 0; s < element.itemList.length; s++) {
                const element2 = element.itemList[s];
                itemsList.push(element2);
            }
            this.api.deletePerchitemList(element.payInvo.pay_ref).subscribe(data => {
                //console.log(data)
                if (data['message'] != 'Post Not Deleted') {
                }
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                });
            });
        }
        if (itemsList.length > 0) {
            this.savePurchitemList(itemsList);
        }
        else {
            this.presentToast('تمت المزامنة ', "success");
        }
    }
    savePurchitemList(itemList) {
        this.api.savePerchitemList(itemList).subscribe(data => {
            //console.log(data)   
            if (data['message'] != 'Post Not Deleted') {
                this.salesLocalUpdate = [];
                this.storage.set('purchLocalUpdate', this.purchLocalUpdate).then((response) => {
                    //console.log('purchLocalUpdate', response) 
                    this.presentToast('تمت المزامنة ', "success");
                });
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_3__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 41070:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 75375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>الإعدادات والضبط</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar *ngIf=\"progressVal >.2 && progressVal < 1\" [value]=\"progressVal\" ></ion-progress-bar>\n  <ion-grid class=\"ion-margin-top\">\n    <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\n      \n    </ion-row>\n   <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\n        <ion-col size=\"12\"> \n        <h5> المزامنة والإتصال</h5>\n        <ion-card>\n          <ion-list class=\"ion-margin-top ion-margin-bottom\">\n            <ion-item button (click) = \"sync()\">\n              <ion-label >مزامنة البيانات </ion-label> \n              <ion-icon name=\"cloud-upload-outline\" color=\"dark\" slot=\"start\"></ion-icon>  \n            </ion-item>\n            <ion-item button  (click) = \"clickTo()\">\n              <ion-label >وضع عدم الإتصال (العمل بدون انترنت) </ion-label>\n              <ion-toggle slot=\"end\" [(ngModel)]=\"offline\" [value]=\"offline\" (ionChange)=\"radioChange($event)\"></ion-toggle>\n              <ion-icon name=\"wifi-outline\" [color]=\"color\" slot=\"start\"></ion-icon>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>   \n        <!-- <ion-col size=\"12\">\n        <h5> اعدادات طرق البحث</h5>\n        <ion-card>\n          <ion-list class=\"ion-margin-top ion-margin-bottom\">\n            <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChangeS($event)\" >\n              <ion-grid class=\"ion-no-padding ion-no-margin\">\n                <ion-row> \n                  <ion-col class=\"ion-no-padding ion-no-margin\">\n                    <ion-item lines=\"none\" >\n                      <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                      <ion-label>  بحث بالإسم (لغة عربية)</ion-label> \n                    </ion-item>\n                  </ion-col>\n                  <ion-col class=\"ion-no-padding ion-no-margin\">\n                    <ion-item lines=\"none\" >\n                      <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                      <ion-label>  بحث بالإسم (لغة انجليزية)</ion-label>  \n                    </ion-item>\n                  </ion-col> \n                </ion-row>\n              </ion-grid> \n            </ion-radio-group>\n          </ion-list>\n        </ion-card>\n      </ion-col>   -->\n\n      <ion-col size=\"12\">\n        <h5>السنة المالية</h5>\n        <ion-card>\n          <ion-list class=\"ion-margin-top ion-margin-bottom\">\n            <ion-radio-group [(ngModel)]=\"selectedYear\"  (ionChange)=\"yearChange($event,afterLoad)\" >\n              <ion-grid class=\"ion-no-padding ion-no-margin\">\n                <ion-row>     \n                  <ion-col size=\"12\" class=\"ion-no-padding ion-no-margin\" *ngFor=\"let y of yearArr\">\n                    <ion-item lines=\"none\" >\n                      <ion-radio [value]=\"y.id\" class=\"ion-margin-end\"></ion-radio>\n                      <ion-label> {{y.yearDesc}} (<ion-text> {{y.yearStart}}</ion-text> <ion-text color=\"primary\"> <strong>-</strong> </ion-text> <ion-text> {{y.yearEnd}}</ion-text>) </ion-label>  \n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n            </ion-radio-group>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-tswia_edit-tswia_module_ts"],{

/***/ 31799:
/*!*********************************************************!*\
  !*** ./src/app/edit-tswia/edit-tswia-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTswiaPageRoutingModule": () => (/* binding */ EditTswiaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _edit_tswia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-tswia.page */ 71103);




const routes = [
    {
        path: '',
        component: _edit_tswia_page__WEBPACK_IMPORTED_MODULE_0__.EditTswiaPage
    }
];
let EditTswiaPageRoutingModule = class EditTswiaPageRoutingModule {
};
EditTswiaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditTswiaPageRoutingModule);



/***/ }),

/***/ 23157:
/*!*************************************************!*\
  !*** ./src/app/edit-tswia/edit-tswia.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTswiaPageModule": () => (/* binding */ EditTswiaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _edit_tswia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-tswia-routing.module */ 31799);
/* harmony import */ var _edit_tswia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-tswia.page */ 71103);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);








let EditTswiaPageModule = class EditTswiaPageModule {
};
EditTswiaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_tswia_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditTswiaPageRoutingModule
        ],
        declarations: [_edit_tswia_page__WEBPACK_IMPORTED_MODULE_1__.EditTswiaPage]
    })
], EditTswiaPageModule);



/***/ }),

/***/ 71103:
/*!***********************************************!*\
  !*** ./src/app/edit-tswia/edit-tswia.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTswiaPage": () => (/* binding */ EditTswiaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_tswia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-tswia.page.html?ngResource */ 57609);
/* harmony import */ var _edit_tswia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-tswia.page.scss?ngResource */ 42528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _sales_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sales/pipe */ 79208);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 53975);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);












let EditTswiaPage = class EditTswiaPage {
    constructor(behavApi, _location, alertController, route, rout, storage, modalController, loadingController, datePipe, api, toast) {
        this.behavApi = behavApi;
        this._location = _location;
        this.alertController = alertController;
        this.route = route;
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.notifArr = [];
        this.showNotif = false;
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.isOpenNotif = false;
        this.newNotif = false;
        this.isOpen = false;
        this.sub_account = [];
        this.sub_accountLocalSales = [];
        this.items = [];
        this.itemsLocal = [];
        this.itemList = [];
        this.salesLocal = [];
        this.salesLocalUpdate = [];
        this.salesLocalDelete = [];
        this.sub_accountSales = [];
        this.sales = [];
        this.randomsNumber = [];
        this.store_id = 1;
        this.sub_nameNew = "";
        this.discountPerc = 0;
        this.radioVal = 0;
        this.loading = false;
        this.showMe = null;
        this.searchLang = 0;
        this.searchTerm = "";
        this.aliasTerm = "";
        this.searchResult = [];
        this.aliasResult = [];
        this.finalResult = [];
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_name: "", cat_id: "" };
        this.route.queryParams.subscribe(params => {
            if (params && params.payInvo) {
                this.payInvo = JSON.parse(params.payInvo);
                this.user_info = JSON.parse(params.user_info);
                this.store_info = JSON.parse(params.store_info);
                this.itemList = JSON.parse(params.itemList);
                this.prepareOffline();
                this.getAppInfo();
            }
        });
        this.selectedItem = {
            id: undefined,
            dateCreated: "",
            pay_ref: "",
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
            perch_price: 0,
            tot: 0,
            availQty: 0,
            aliasEn: "",
            qtyReal: 0
        };
    }
    getOffliemode() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log('mooooode',this.offline)
        });
    }
    ionViewDidLeave() {
        //console.log('ionViewWillLeave')
        this.subiscribtionNotif.unsubscribe();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            //check all changes in case notif arr >0 
            this.subiscribtionNotif = this.behavApi.currentNotif.subscribe(notif => {
                //console.log('notif page currentNotif behavApiRespnse',notif) 
                if (notif.length == 0) {
                    this.notifArr = [];
                }
                else {
                    this.notifArr = notif[0];
                }
                if (this.notifArr.length > 0) {
                    this.showNotif = true;
                    this.itemsLocal = notif[1];
                    this.items = this.itemsLocal;
                    this.searchResult = this.items;
                    this.sub_accountSales = notif[2];
                    //console.log(this.sub_accountLocalSales)  
                    this.storage.get('LogHistoryLocal').then((response) => {
                        if (response) {
                            this.LogHistoryLocalArr = response;
                        }
                    });
                }
                else {
                    //console.log('no updates')
                    this.showNotif = false;
                }
            });
        }, 10000);
    }
    ngOnInit() {
        // this.getStockItems() 
        this.getItemLocalOff();
    }
    prepareOffline() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log('mooooode',this.offline)
        });
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)  
                this.items = this.itemsLocal;
            }
        });
        this.getItemLocalOff();
        //this.getStockItems()
    }
    getAppInfo() {
        this.storage.get('offline').then((response) => {
            this.offline = response;
            //console.log('mooooode',this.offline) 
        });
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
                this.getItemLocalOff();
            }
        });
        this.storage.get('LogHistoryLocal').then((response) => {
            //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
            if (response) {
                this.LogHistoryLocalArr = response;
            }
        });
        this.storage.get('searchLang').then((response) => {
            if (response) {
                this.searchLang = response;
                //console.log('searchLang' ,this.searchLang) 
            }
        });
    }
    getItemLocalOff() {
        this.storage.get('itemsLocal').then((response) => {
            if (response) {
                this.itemsLocal = response;
                //console.log(this.itemsLocal)  
                this.items = this.itemsLocal;
                this.items.forEach(element => {
                    if (+element.tswiaQuantity > 0) {
                        element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                    }
                    else if (+element.tswiaQuantity < 0) {
                        element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                    }
                    element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                });
                this.searchResult = this.items;
            }
        });
    }
    getSalesAccountFirs() {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
                let res = data;
                this.sub_account = res['data'];
                //console.log(this.sub_account)
                this.addSubaccountLocal();
                this.pickAccount(this.selectedAccount.sub_name, 'fl');
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.MixSubaccountSalesOffline();
            this.pickAccount(this.selectedAccount.sub_name, 'fl');
        }
    }
    getSalesAccount() {
        if (this.offline == false) {
            this.api.getSalesAccounts(this.store_info.id, this.year.id).subscribe(data => {
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
    addSubaccountLocal() {
        if (this.sub_account) {
            //console.log('case1',this.sub_account,this.sub_accountLocalSales) 
            if (this.sub_accountLocalSales) {
                for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
                    const element = this.sub_accountLocalSales[i];
                    this.sub_account.push(element);
                }
            }
        }
        else {
            //console.log('case2',this.sub_account)
            if (this.sub_accountLocalSales) {
                this.sub_account = this.sub_accountLocalSales;
            }
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
    prepareInvo() {
        this.sub_nameNew = "";
        this.radioVal = 0;
        this.payInvo = {
            pay_id: this.payArray[0].pay_id,
            pay_ref: this.payArray[0].pay_ref,
            store_id: this.payArray[0].store_id,
            tot_pr: this.payArray[0].tot_pr,
            pay_date: this.payArray[0].pay_date,
            pay_time: this.payArray[0].pay_time,
            user_id: this.user_info.id,
            payComment: this.payArray[0].payComment,
            yearId: this.payArray[0].yearId
        };
        this.setFocusOnInput('dstEp');
    }
    setFocusOnInput(Input) {
        //console.log('setFocusOnInput')
        if (Input == 'dst') {
            this.dstEds.nativeElement.focus();
        }
        else if (Input == 'dstPop14') {
            this.dstPop14.setFocus();
            this.isOpen = true;
            this.clear();
            this.searchResult = this.items;
            setTimeout(() => {
                this.popInput5.setFocus();
            }, 1500);
        }
        else if (Input == 'qtyId13') {
            this.qtyId13.setFocus();
        }
        else if (Input == 'popInput5') {
            this.popInput5.setFocus();
        }
    }
    getItems() {
        if (this.offline == false) {
            this.api.getItems().subscribe(data => {
                //console.log('dataaaaaaa',data)
                let res = data;
                this.items = res['data'];
            }, (err) => {
                //console.log(err);
            });
        }
        else {
            this.items = this.itemsLocal;
            //console.log('itemsLocal',this.itemsLocal)
        }
    }
    getStockItems() {
        if (this.offline == false) {
            this.api.stockItems(1, this.year.id).subscribe(data => {
                //console.log(data)
                let res = data;
                this.items = res['data'];
                this.items.forEach(element => {
                    if (+element.tswiaQuantity > 0) {
                        element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                    }
                    else if (+element.tswiaQuantity < 0) {
                        element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                    }
                    element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
                });
                this.storage.set('itemsLocal', this.items).then((response) => {
                });
                this.searchResult = this.items;
            }, (err) => {
                //console.log(err);
            }, () => {
            });
        }
        else {
            this.items = this.itemsLocal;
            this.items.forEach(element => {
                if (+element.tswiaQuantity > 0) {
                    element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity;
                }
                else if (+element.tswiaQuantity < 0) {
                    element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity);
                }
                element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity;
            });
            this.searchResult = this.items;
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
    // radioChange(ev){
    //   //console.log(ev.target.value) 
    //  }
    refresh(para) {
        if (para == 'account') {
            this.getSalesAccount();
        }
        else {
            this.getStockItems();
        }
    }
    pickAccount(ev, firstLoad) {
        let evVal;
        if (firstLoad) {
            evVal = ev;
        }
        else {
            evVal = ev.target.value;
        }
        //console.log('evVal',evVal);
        let fl = this.sub_account.filter(x => x.sub_name == evVal);
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
                cat_name: fl[0]['cat_name']
            };
            //console.log('jjjj', this.selectedAccount);
            // this.payInvo.cust_id = this.selectedAccount.id
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
            this.selectedItem.item_name = "";
        }
    }
    qtyClick(i) {
        //console.log(i)
        this.showMe = i;
    }
    hideMe(i) {
        this.showMe = null;
    }
    editCell(i) {
        if (+this.itemList[i].qtyReal > 0 && +this.itemList[i].perch_price > 0) {
            this.itemList[i].tot = (this.itemList[i].availQty - this.itemList[i].qtyReal) * +this.itemList[i].perch_price;
            this.hideMe(i);
            this.getTotal();
        }
        else {
            this.presentToast("خطأ في الإدخال ", "danger");
        }
    }
    selectFromPop(item) {
        //console.log(item)
        this.selectedItem = {
            id: item.id,
            dateCreated: item.dateCreated,
            pay_ref: this.payInvo.pay_ref,
            item_desc: item.item_desc,
            item_name: item.item_name,
            item_unit: item.item_unit,
            parcode: item.parcode,
            pay_price: item.pay_price,
            perch_price: item.perch_price,
            qtyReal: "",
            tot: item.pay_price,
            availQty: item.quantity,
            aliasEn: item.aliasEn
        };
        this.selectedItemSales29 = item.sales29;
        this.searchTerm = item.item_name;
        //console.log( this.selectedItem); 
        this.didDissmis();
    }
    pickDetail(ev) {
        let fl = [];
        if (this.searchLang == 1) {
            fl = this.items.filter(x => x.item_desc == ev.target.value);
            //console.log('hyrr',fl);
        }
        else {
            fl = this.items.filter(x => x.item_name == ev.target.value);
            //console.log(fl);
        }
        //console.log(fl);
        if (fl.length > 0) {
            this.selectedItem = {
                id: fl[0]['id'],
                dateCreated: fl[0]['dateCreated'],
                pay_ref: this.payInvo.pay_ref,
                item_desc: fl[0]['item_desc'],
                item_name: fl[0]['item_name'],
                item_unit: fl[0]['item_unit'],
                parcode: fl[0]['parcode'],
                pay_price: fl[0]['pay_price'],
                perch_price: fl[0]['perch_price'],
                tot: fl[0]['pay_price'],
                availQty: fl[0]['quantity'],
                aliasEn: fl[0]['aliasEn'],
                qtyReal: fl[0]['qtyReal'],
            };
            //console.log( this.selectedItem);
            this.setFocusOnInput('qtyEds');
        }
        else {
            this.presentToast('خطأ في اسم الصنف ', 'danger');
            this.selectedItem.item_name = "";
        }
    }
    presentPopover(e) {
        //console.log('preent me', e)
        this.popover6.event = e;
        this.isOpen = true;
        this.clear();
        this.searchResult = this.items;
        setTimeout(() => {
            this.setFocusOnInput('popInput5');
        }, 2000);
    }
    didDissmis() {
        this.isOpen = false;
        //console.log('dismissOver')
        this.setFocusOnInput('qtyEds');
    }
    presentPopoverNotif(e) {
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif21.event = e;
        this.isOpenNotif = true;
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
    }
    searchItem(ev) {
        this.searchResult = [];
        this.aliasTerm = ev.target.value;
        const filterPipe = new _sales_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe;
        let fiteredArr = filterPipe.transform(this.items, ev.target.value);
        if (fiteredArr.length > 0) {
            fiteredArr.forEach(element => {
                this.searchResult.push(element);
            });
        } //console.log('search',this.searchResult)
    }
    clear(item_name) {
        if (item_name) {
            this.selectedItem = {
                id: undefined,
                dateCreated: "",
                pay_ref: this.payInvo.pay_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                pay_price: 0,
                perch_price: 0,
                qtyReal: 0,
                tot: 0,
                availQty: 0,
                aliasEn: ""
            };
        }
        else {
            this.searchTerm = "";
        }
    }
    qtyRealhange(ev) {
        //console.log(ev);
        this.selectedItem.tot = ((this.selectedItem.availQty - this.selectedItem.qtyReal) * +this.selectedItem.perch_price);
    }
    pricehange(ev) {
        //console.log(ev);
        this.selectedItem.tot = ((this.selectedItem.availQty - this.selectedItem.qtyReal) * +this.selectedItem.perch_price);
    }
    payChange(ev) {
        // //console.log(ev); 
        // this.payInvo.changee = +( this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value 
    }
    discountChange(ev) {
        // //console.log('discountChange' ,ev); 
        // this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
        // this.payInvo.changee = +( this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay
    }
    discountPerChange(ev) {
        // //console.log('discountPerChange',ev);
        // this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
        // this.payInvo.changee = +( this.payInvo.tot_pr -  this.payInvo.discount ) - this.payInvo.pay
    }
    back() {
        this._location.back();
    }
    deleteItem(index) {
        //console.log( index); 
        this.itemList.splice(index, 1);
        //console.log( this.itemList); 
        this.getTotal();
    }
    getTotal() {
        let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
        //console.log('sum', sum)
        this.payInvo.tot_pr = sum;
    }
    addTolist() {
        if (this.selectedItem.item_name == "" || this.selectedItem.id == "") {
            this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
        }
        else if (this.selectedItem.qtyReal == this.selectedItem.availQty) {
            this.presentToast(' الكميات متساوية , لا يمكن إضافة العنصر  ', 'danger');
        }
        else {
            let fl = [];
            if (this.itemList) {
                fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name && x.pay_price == this.selectedItem.pay_price);
            }
            if (fl.length == 0) {
                let d = new Date;
                let r = this.datePipe.transform(d, 'dd-MM-YYYY');
                this.itemList.push({
                    "id": 'NULL',
                    "pay_ref": this.selectedItem.pay_ref,
                    "item_name": this.selectedItem.item_name,
                    "pay_price": this.selectedItem.pay_price,
                    "qtyReal": +this.selectedItem.qtyReal,
                    "tot": this.selectedItem.tot,
                    "store_id": +this.store_info.id,
                    "yearId": +this.year.id,
                    "item_id": +this.selectedItem.id,
                    "dateCreated": r,
                    "perch_price": this.selectedItem.perch_price,
                    "availQty": this.selectedItem.availQty
                });
            }
            else {
                //console.log(this.itemList);
                //console.log(fl[0].quantity);
                this.presentToast('موجود مسبقا , سيتم جمع العنصرين');
                this.selectedItem.qtyReal = fl[0].qtyReal + this.selectedItem.qtyReal;
                let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
                // this.itemList[index].qtyReal = +this.selectedItem.qtyReal
                this.itemList[index].tot = ((this.selectedItem.qtyReal - this.selectedItem.availQty) * +this.selectedItem.perch_price);
                this.itemList[index].tot.toFixed(2);
            }
            this.selectedItem = {
                id: undefined,
                dateCreated: "",
                pay_ref: this.payInvo.pay_ref,
                item_desc: "",
                item_name: "",
                item_unit: "",
                parcode: 0,
                pay_price: 0,
                perch_price: 0,
                qtyReal: 0,
                tot: 0,
                availQty: 0,
                aliasEn: ""
            };
            this.discountPerc = 0;
            this.getTotal();
            this.setFocusOnInput('dstPop14');
            //this.setFocusOnInput('dstEds')
        }
    }
    validate() {
        let fl = [];
        if (this.itemList.length == 0 || this.payInvo.pay_ref == "") {
            this.presentToast('الرجاء ادخال اصناف الي القائمة', 'danger');
            return false;
        }
        else if (this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
            this.presentToast('الرجاء تحديد التاريخ ', 'danger');
            return false;
        }
        else {
            return true;
        }
    }
    preparenewaccount() {
        // if (this.selectedAccount.sub_name.length>0 && this.selectedAccount.id == null) {
        // } else {
        //   //console.log('slwcted from drop' ) 
        //   this.selectedAccount.sub_name = this.sub_nameNew
        //   this.payInvo.sub_name  =this.selectedAccount.sub_name
        // }
        // this.selectedAccount.id=null  
        // this.selectedAccount.ac_id = 2 
        // this.selectedAccount.sub_type="debit"
        // this.selectedAccount.sub_code=null
        // this.selectedAccount.cat_id = 1
        //   this.selectedAccount.cat_name = 'العملاء'
        //    this.selectedAccount.sub_balance="0"
        // this.selectedAccount.store_id=this.store_info.id   
    }
    update() {
        //console.log('papa',this.payInvo)
        let d = this.payInvo.pay_date;
        this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            this.updateInvo();
        }
    }
    updateInvo() {
        this.api.updateTswiaInvo(this.payInvo).subscribe(data => {
            //console.log(data)
            this.deleteSalesitemList4update();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
        });
    }
    saveSubAccount() {
        // //console.log('crea accoun')
        // this.preparenewaccount()
        // this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
        // //console.log(data)
        // if (data['message'] != 'Post Not Created') {
        //   this.payInvo.cust_id =  data['message'] 
        //   if(this.radioVal == 0 && this.selectedAccount.id == null && this.offline == false) {
        //     this.sub_accountLocalSales = this.sub_accountLocalSales.filter(x=>x.sub_name != this.selectedAccount.sub_name)
        //     //console.log('imhereeeeeeeeeeeeeeeeee')
        //     this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
        //    //console.log('resoponse set', this.sub_accountLocalSales) 
        //  });
        //  }
        //   this.updateInvo()
        // }else {
        //    this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
        // } 
        //   }, (err) => {
        // //console.log(err);
        //   this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger').then(()=>{
        //     this.loadingController.dismiss()
        //   })
        //  } )
    }
    deleteSalesitemList4update() {
        this.api.deleteTswiaitemList(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.saveitemList();
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                    this.loadingController.dismiss();
                });
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger').then(() => {
                this.loadingController.dismiss();
            });
        });
    }
    saveSubAccountlocal() {
        //console.log('crea accoun')
        this.preparenewaccount();
        // add new account to acount list tobe available in next load
        if (!this.sub_account) {
            this.sub_account = [];
        }
        this.sub_account.push(this.selectedAccount);
        this.sub_accountLocalSales.push(this.selectedAccount);
        //console.log('sub_account' ,this.sub_account )
        this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
            //console.log('resoponse set', this.sub_accountLocalSales)
            this.saveInvoLocal();
        });
    }
    isFocused(event) {
        //console.log('dsdfsdf',event)
    }
    saveInvoLocal() {
        //console.log('hahahahaha')
        //let index = this.purchLocal.findIndex(item => item.payInvo.pay_ref == this.payInvo.pay_ref);
        let flt = [];
        flt = this.salesLocal.filter(item => item.payInvo.pay_ref == this.payInvo.pay_ref);
        //console.log ('flt',flt )
        //console.log ('this.payInvo', this.payInvo ,this.itemList)
        if (flt.length > 0) {
            this.salesLocal = this.salesLocal.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            //case1  فاتور محفوظة محلي فقط مفروض تتعدل وتتحفظ تاني محلي
            //this.salesLocal.splice(index,1) 
            //console.log ('salesLocal',this.salesLocal) 
            this.salesLocal.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
        }
        else {
            //case2 tفاتورة اونلاين تتعدل وتتمسح من الفواتير المعدلة محلي و تضاف مرة تانية محلي
            //console.log ('gggggg',this.salesLocalUpdate)
            let ind = this.salesLocalUpdate.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            this.salesLocalUpdate = ind;
            //console.log ('ind',ind , this.salesLocalUpdate)
            this.salesLocalUpdate.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
        }
        if (this.payInvo.pay_id != undefined) {
            this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            this.sales.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
            this.storage.set('sales', this.sales).then((response) => {
                //console.log('sales', response) 
            });
        }
        this.storage.set('salesLocalUpdate', this.salesLocalUpdate).then((response) => {
            //console.log('resoponse set', response) 
        });
        this.storage.set('salesLocal', this.salesLocal).then((response) => {
            //console.log('resoponse set', response)
            this.presentToast('تم الحفظ بنجاح', 'success');
            this.back();
        });
    }
    saveitemList() {
        this.api.saveTswiaitemList(this.itemList).subscribe(data => {
            //console.log(data)  
            let arr = [];
            arr.push({
                "payInvo": this.payInvo,
                "itemList": this.itemList
            });
            this.logHistoryArr.push({
                "id": null,
                "logRef": this.generateRandom2('update tswia'),
                "userId": this.user_info.id,
                "typee": 'update tswia',
                "datee": moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
                "logStatus": 0,
                "logToken": JSON.stringify(arr[0]),
                "yearId": this.year.id,
                "store_id": this.store_info.id
            });
            // 
            this.performSync();
            // this.presentToast('تم الحفظ بنجاح' , 'success') 
            // this.back()
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    generateRandom2(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    saveLogHistory(role2) {
        //let mdata =  this.prepareLogHistory(itemData , firstq , role) 
        //console.log('this.logHistoryArr[0]',this.logHistoryArr[0])
        let role;
        let cust;
        let invo;
        if (this.logHistoryArr.length > 1) {
            invo = this.logHistoryArr[1];
            cust = this.logHistoryArr[0];
            role = 'new account';
        }
        else {
            invo = this.logHistoryArr[0];
            role = undefined;
        }
        this.api.saveLogHistoryMultiSales(invo, cust, role).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                if (role2 == 'delete') {
                    this.presentToast('تم الحذف بنجاح', 'success');
                }
                else {
                    this.presentToast('تم الحفظ بنجاح', 'success');
                }
                // this.getStockItems()
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
            yield this.getStockItems();
            this.back();
        });
    }
    performSyncDel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory('delete');
            yield this.getStockItems();
            this.back();
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد!',
                mode: 'ios',
                message: 'هل تريد حذف السجل ؟ ',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'موافق',
                        id: 'confirm-button',
                        handler: () => {
                            if (this.offline == false && this.payInvo.pay_id != undefined) {
                                this.deleteSalesInvo();
                            }
                            else if (this.offline == false && this.payInvo.pay_id == undefined) {
                                this.deleteSalesInvoLocal();
                            }
                            else if (this.offline == true) {
                                this.deleteSalesInvoLocal();
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete() {
        this.presentAlertConfirm();
    }
    deleteSalesInvo() {
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        let arr = [];
        arr.push({
            "payInvo": this.payInvo,
            "itemList": this.itemList
        });
        this.logHistoryArr.push({
            "id": null,
            "logRef": this.generateRandom2('delete tswia'),
            "userId": this.user_info.id,
            "typee": 'delete tswia',
            "datee": moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
            "logStatus": 0,
            "logToken": JSON.stringify(arr[0]),
            "yearId": this.year.id,
            "store_id": this.store_info.id
        });
        this.api.deleteTswiaInvo(this.payInvo.pay_id).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.deleteSalesitemList();
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    deleteSalesInvoLocal() {
        this.storage.get('salesLocalDelete').then((response) => {
            if (response) {
                this.salesLocalDelete = response;
                //console.log(this.salesLocalDelete) 
            }
        });
        //
        if (this.payInvo.pay_id == undefined) {
            this.salesLocal = this.salesLocal.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            //console.log('case undefined' , this.salesLocal)
            this.storage.set('salesLocal', this.salesLocal).then((response) => {
                //console.log('resoponse set', response) 
                this.presentToast('تم الحذف بنجاح', 'success');
                this.back();
            });
        }
        else {
            this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
            //console.log('case defined',this.sales)
            this.storage.set('sales', this.sales).then((response) => {
                //console.log('sales', response) 
                this.salesLocalDelete.push({
                    "payInvo": this.payInvo,
                    "itemList": this.itemList
                });
                this.storage.set('salesLocalDelete', this.salesLocalDelete).then((response) => {
                    //console.log('resoponse set', response) 
                    this.presentToast('تم الحذف بنجاح', 'success');
                    this.back();
                });
            });
        }
    }
    deleteSalesitemList() {
        this.api.deleteTswiaitemList(this.payInvo.pay_ref).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
                //console.log(' case ffff ' ,this.sales)
                this.storage.set('sales', this.sales).then((response) => {
                    //console.log('sales', response) 
                    this.performSyncDel();
                });
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
};
EditTswiaPage.ctorParameters = () => [
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__.StockServiceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
EditTswiaPage.propDecorators = {
    dstEds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["dstEds",] }],
    qtyId13: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['qtyId13',] }],
    dstPop14: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['dstPop14',] }],
    popInput5: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['popInput5',] }],
    popover6: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['popover6',] }],
    popoverNotif21: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['popoverNotif21',] }]
};
EditTswiaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-edit-tswia',
        template: _edit_tswia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_tswia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditTswiaPage);



/***/ }),

/***/ 42528:
/*!************************************************************!*\
  !*** ./src/app/edit-tswia/edit-tswia.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\n.red {\n  color: var(--ion-color-danger);\n}\n\n.darko {\n  color: var(--ion-color-dark);\n}\n\nion-popover {\n  --offset-y: -30px ;\n}\n\n.bnone {\n  border: none;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdHN3aWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtBQUVSOztBQUNJO0VBQ0ksZ0JBQUE7QUFFUjs7QUFDRTtFQUNLLGtCQUFBO0VBQ0gsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBRTtFQUNFLDhCQUFBO0FBR0o7O0FBREc7RUFDQyw0QkFBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7QUFLSjs7QUFIRTtFQUNFLFlBQUE7QUFNSjs7QUFKRTtFQUNFLHlCQUFBO0FBT0o7O0FBTEU7RUFBUSx5QkFBQTtFQUEwQixrQkFBQTtFQUFtQixZQUFBO0VBQWMsZUFBQTtFQUFnQixpQkFBQTtFQUFrQixZQUFBO0FBY3ZHIiwiZmlsZSI6ImVkaXQtdHN3aWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5jdXN0LWNhcmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuY3VzdFJvd3tcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgfVxuXG4gIC50YWJsZXtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMnB4O1xuICB9XG4gIC5yZWR7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlcikgXG4gICB9XG4gICAuZGFya297XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKVxuICAgfVxuICBpb24tcG9wb3ZlcntcbiAgICAtLW9mZnNldC15IDogLTMwcHhcbiAgfVxuICAuYm5vbmV7XG4gICAgYm9yZGVyOiBub25lO1xuICB9IFxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIH1cbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fSJdfQ== */";

/***/ }),

/***/ 57609:
/*!************************************************************!*\
  !*** ./src/app/edit-tswia/edit-tswia.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title> تعديل عملية تسوية جردية</ion-title>\n    <ion-buttons  slot=\"end\">  \n      <div class=\"poRel\">\n        <div class=\"posAb noti\">\n         <ion-label>\n           <ion-text *ngIf=\"showNotif == true && notifArr.length> 0\">{{notifArr.length}}</ion-text> \n         </ion-label> \n       </div>\n       <div (click)=\"presentPopoverNotif($event)\">\n         <ion-icon name=\"notifications-outline\"  class=\"dark\"  [ngClass]=\"{'warn':showNotif == true && notifArr.length> 0 , 'dark': showNotif == false }\"></ion-icon> \n       </div>\n     </div> \n     <ion-button fill=\"clear\" (click)=\"presentPopoverNotif($event)\">\n      <ion-label><ion-text color=\"dark\" >الإشعارات</ion-text></ion-label>  \n     </ion-button>\n     <ion-button fill=\"clear\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-sharp\"></ion-icon>\n    </ion-button>\n    </ion-buttons> \n  <ion-popover  #popoverNotif21 [isOpen]=\"isOpenNotif\" (didDismiss)=\"didDissmisNotif()\">\n   <ng-template>\n     <ion-header>\n       <ion-toolbar dir=\"rtl\" class=\"ion-text-center\">\n         الإشعارات\n       </ion-toolbar>\n     </ion-header>\n     <ion-content  dir=\"rtl\">  \n       <ion-list class=\"ion-text-center\"  *ngIf=\"LogHistoryLocalArr.length>0\">\n        <ion-item *ngFor=\"let log of LogHistoryLocalArr\" >\n        <ion-grid >\n          <ion-row>\n            <ion-col size=\"9\"> \n                {{log.desc}}    \n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-text color = \"primary\">{{log.datee | dateAgo}}</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item> \n       </ion-list> \n     </ion-content>\n   </ng-template>\n </ion-popover>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- skeleton --> \n  <ion-content> \n  <ion-grid  *ngIf=\"user_info && store_info\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card  class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\"> \n            <ion-row>\n              <ion-col size=\"3\" offset=\"6\" class=\"ion-text-start\">\n                <ion-item class=\"custInput\"> \n                  <ion-input placeholder=\"أكتب تعليقا\" [(ngModel)]=\"payInvo.payComment\"></ion-input>\n                 </ion-item>   \n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item lines=\"none\">\n                  <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"payInvo.pay_date\"  />\n                </ion-item>\n              </ion-col>\n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\" >\n    <ion-row dir=\"rtl\" class=\"ion-justify-content-center\">\n      <ion-col size=\"12\"   class=\"ion-no-padding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"4\"> \n                      <ion-label  class=\"ion-padding\">\n                        <strong>الصنف</strong>\n                        <ion-text *ngIf=\"searchLang == 0\">(عربي)</ion-text>\n                        <ion-text *ngIf=\"searchLang == 1\">(ENG)</ion-text>\n                        <ion-text >{{+selectedItemSales29}}</ion-text>\n                      </ion-label> \n                      <!-- popOverSearch  -->\n                      <ion-item class=\"custInput\">\n                        <ion-input  #dstPop14 (click)=\"presentPopover($event)\"   [(ngModel)] =\"selectedItem.item_name\"></ion-input>\n                        <!-- <ion-button fill=\"clear\" (click)=\"clear('item_name')\" slot=\"end\">\n                          <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                        </ion-button> -->\n                      </ion-item>\n                      <ion-popover  #popover6 [isOpen]=\"isOpen\" (didDismiss)=\"didDissmis()\">\n                        <ng-template>\n                          <ion-header>\n                            <ion-toolbar dir=\"rtl\">\n                              <ion-item>\n                                <ion-input #popInput5 [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input>\n                                <ion-button fill=\"clear\" (click)=\"clear()\" slot=\"end\">\n                                  <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                                </ion-button>\n                                <!-- <ion-input #popInput5 [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input> -->\n                               </ion-item>\n                            </ion-toolbar>\n                          </ion-header>\n                          <ion-content class=\"ion-padding\" dir=\"rtl\"> \n                            <!-- spinner -->\n                            <ion-list class=\"ion-text-center\"  *ngIf=\"searchResult.length==0 && searchTerm =='' \">\n                              <ion-label>\n                                <ion-spinner name=\"lines-sharp\"></ion-spinner>\n                              </ion-label> \n                            </ion-list>\n                            \n                             <ion-list *ngIf=\"searchResult.length>0\"> \n                              <ion-item button *ngFor=\"let item of searchResult\" (click)=\"selectFromPop(item)\"    class=\"darko\" [ngClass]=\"{'red':item.quantity == 0 , 'darko':item.quantity > 0}\">\n                                {{item.item_name}} \n                              </ion-item>\n                            </ion-list> \n                          </ion-content>\n                        </ng-template>\n                      </ion-popover>\n                    </ion-col>\n                    \n                    \n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية في النظام</strong></ion-label>\n                      <ion-item class=\"custInput\" >\n                        <ion-input  [readonly]=\"true\"   [(ngModel)]=\"selectedItem.availQty\"  (ionChange)=\"qtyRealhange($event)\"  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n  \n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية الفعلية</strong></ion-label>\n                      <ion-item class=\"custInput\" >\n                        <ion-input   #qtyId13  (keyup.enter)=\"addTolist()\" (ionFocus)=\"isFocused($event)\"  [(ngModel)]=\"selectedItem.qtyReal\"  (ionChange)=\"qtyRealhange($event)\" select-all ></ion-input>\n                      </ion-item> \n                    </ion-col>\n  \n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong> فرق الكمية </strong></ion-label>\n                      <ion-item class=\"custInput\" >\n                        <ion-input [readonly]=\"true\"    [value]=\"selectedItem.availQty - selectedItem.qtyReal\"  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n  \n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الشراء</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input (keyup.enter)=\"addTolist()\" [(ngModel)]=\"selectedItem.perch_price\" (ionChange)=\"pricehange($event)\"  ></ion-input>\n                      </ion-item>\n                    </ion-col>\n\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [readonly]=\"true\" [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col> \n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>no</th>\n                  <th>الصنف</th>\n                  <th>الكمية في النظام</th>\n                  <th>الكميةالفعلية </th>\n                  <th>فرق الكمية</th> \n                  <th>سعر الوحده</th>\n                  <th>المجموع</th> \n                  <th></th> \n                 </tr>\n                 <tr *ngFor=\"let item of itemList ; let i = index\"  (dblclick)=\"qtyClick(i)\">\n                  <td>{{+i}}</td>\n                  <td>{{item.item_name}}</td>\n                  \n                  <td>\n                     <ion-text >{{item.availQty}}</ion-text> \n                  </td>\n  \n                  <td>\n                    <ion-text *ngIf=\"showMe != i\">{{item.qtyReal}}</ion-text> \n                    <!-- <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.qtyReal\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item> -->\n                  </td>\n  \n                 <td>\n                  <ion-text *ngIf=\"showMe != i\">{{item.availQty - item.qtyReal}}</ion-text>  \n                 </td>\n  \n                  <td>\n                    <ion-text *ngIf=\"showMe != i\">{{item.pay_price}}</ion-text> \n                     <ion-item *ngIf=\"showMe == i\">\n                      <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.perch_price\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                     </ion-item>\n                  </td>\n  \n                  <td>{{item.tot}}</td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                      <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                    </ion-button>\n                  </td>\n                 </tr>\n               </table> \n            </ion-card>\n          </ion-col>\n          </ion-row> \n        </ion-grid>\n      </ion-col> \n      <ion-col size=\"10\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"4\">\n                <ion-label class=\"ion-padding\"><strong>اجمالي المبلغ</strong></ion-label>\n                <ion-item class=\"custInput\"> \n                  <ion-input [(ngModel)]=\"payInvo.tot_pr\" [readonly]=\"true\" ></ion-input>\n                </ion-item>\n              </ion-col> \n            </ion-row> \n          </ion-grid> \n        </ion-card>\n      </ion-col>\n  \n      <ion-col size=\"4\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-grid> \n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"5\" >\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"update()\" >\n                  <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n                </ion-button>\n              </ion-col> \n               <ion-col size=\"5\" >\n                <ion-button expand=\"block\" routerDirection=\"root\" color=\"danger\"  (click)=\"delete()\" >\n                  <ion-label class=\"ion-text-center\"> حــذف</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> \n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  \n  \n   \n  </ion-grid>\n  \n  </ion-content>\n  \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-tswia_edit-tswia_module_ts.js.map
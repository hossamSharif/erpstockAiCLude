"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_salessndrecord_salessndrecord_module_ts"],{

/***/ 10069:
/*!*****************************************************************!*\
  !*** ./src/app/salessndrecord/salessndrecord-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalessndrecordPageRoutingModule": () => (/* binding */ SalessndrecordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _salessndrecord_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salessndrecord.page */ 38468);




const routes = [
    {
        path: '',
        component: _salessndrecord_page__WEBPACK_IMPORTED_MODULE_0__.SalessndrecordPage
    }
];
let SalessndrecordPageRoutingModule = class SalessndrecordPageRoutingModule {
};
SalessndrecordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalessndrecordPageRoutingModule);



/***/ }),

/***/ 87201:
/*!*********************************************************!*\
  !*** ./src/app/salessndrecord/salessndrecord.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalessndrecordPageModule": () => (/* binding */ SalessndrecordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _salessndrecord_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salessndrecord-routing.module */ 10069);
/* harmony import */ var _salessndrecord_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salessndrecord.page */ 38468);







let SalessndrecordPageModule = class SalessndrecordPageModule {
};
SalessndrecordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _salessndrecord_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalessndrecordPageRoutingModule
        ],
        declarations: [_salessndrecord_page__WEBPACK_IMPORTED_MODULE_1__.SalessndrecordPage]
    })
], SalessndrecordPageModule);



/***/ }),

/***/ 38468:
/*!*******************************************************!*\
  !*** ./src/app/salessndrecord/salessndrecord.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalessndrecordPage": () => (/* binding */ SalessndrecordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _salessndrecord_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salessndrecord.page.html?ngResource */ 8307);
/* harmony import */ var _salessndrecord_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salessndrecord.page.scss?ngResource */ 67078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _print_modal_print_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print-modal/print-modal.page */ 4441);










let SalessndrecordPage = class SalessndrecordPage {
    constructor(platform, rout, storage, modalController, loadingController, datePipe, api, toast) {
        this.platform = platform;
        this.rout = rout;
        this.storage = storage;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.payArray = [];
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
        //console.log('ngOnInit')
        this.getAppInfo();
        this.prepareOffline();
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
        //console.log('ionViewDidEnter')
        this.search();
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
                //console.log(this.sub_accountLocalSales)  
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
                //console.log(this.sub_account)
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
        //console.log('recalSubBalance',this.sub_account)
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
        // //console.log('print arr', this.tbArr.content[5].table.body)
        // let ar = this.tbArr.content[5].table.body
        // for (let index = 0; index < pay.item_details.length; index++) {
        //   const element = pay.item_details[index];
        //   //console.log('aelerr', element)
        //   ar.push(
        //     [element.pay_price * element.pay_price, element.pay_price, element.quantity , element.item_name, index+1],
        //   )
        // }
        // this.tbArr.content[5].table.body = ar
        // this.tbArr.content[6].columns[2].text = pay.tot_pr
        // this.tbArr.content[7].columns[2].text = pay.pay
        // //console.log('print arr', this.tbArr.content[5].table.body)
    }
    printInvo(printarea, dataFrom) {
        // this.recalSubBalance()
        if (this.offline == false && dataFrom.pay_id != undefined) {
            this.paInvo = dataFrom;
            //console.log( this.paInvo) 
            let flt = this.sub_account.filter(x => x.id == dataFrom.cust_id);
            if (this.radioVal == 3) {
                this.api.getPayInvoDetailinit(this.store_info.id, dataFrom.pay_ref).subscribe(data => {
                    //console.log(data)
                    let res = data;
                    this.itemList = res['data'];
                    //console.log(res) 
                    this.printArr = [];
                    this.printArr.push({
                        'payInvo': this.paInvo,
                        'itemList': this.itemList,
                        'selectedAccount': this.paInvo.sub_name,
                        "balanceStatus": flt[0].currentCustumerStatus,
                        "sub_balanse": flt[0].sub_balance,
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
                    //console.log(res) 
                    this.printArr = [];
                    this.printArr.push({
                        'payInvo': this.paInvo,
                        'itemList': this.itemList,
                        'selectedAccount': this.paInvo.sub_name,
                        "balanceStatus": flt[0].currentCustumerStatus,
                        "sub_balanse": flt[0].sub_balance,
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
        else if (this.offline == false && dataFrom.pay_id == undefined) {
            console.log(dataFrom, dataFrom);
            //console.log(this.salesLocal ,'case2')
            let flt = [];
            flt = this.salesLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                "balanceStatus": this.selectedAccount.currentCustumerStatus,
                'sub_nameNew': "",
                'user_name': this.paInvo.user_name
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'sales_record');
        }
        else if (this.offline == true && dataFrom.pay_id != undefined) {
            this.loadingController.dismiss();
            //console.log(this.sales ,'case3')
            let flt = [];
            flt = this.sales.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                "balanceStatus": this.selectedAccount.currentCustumerStatus,
                'sub_nameNew': "",
                'user_name': this.paInvo.user_name
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'sales_record');
        }
        else if (this.offline == true && dataFrom.pay_id == undefined) {
            //console.log(this.salesLocal)
            let flt = [];
            flt = this.salesLocal.filter(x => x.payInvo.pay_ref == dataFrom.pay_ref);
            //console.log(flt,'here')
            this.printArr = [];
            this.printArr.push({
                'payInvo': flt[0].payInvo,
                'itemList': flt[0].itemList,
                'selectedAccount': flt[0].payInvo.sub_name,
                "balanceStatus": this.selectedAccount.currentCustumerStatus,
                'sub_nameNew': "",
                'user_name': this.paInvo.user_name
            });
            //console.log(this.printArr)
            this.presentModal(this.printArr, 'sales_record');
        }
        //
    }
    presentModal(printArr, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        console.log(pay, sub_name, status);
        this.presentLoadingWithOptions('جاري جلب التفاصيل ...');
        if (this.radioVal == 3) {
            console.log(pay, sub_name, status);
            // this.loadingController.dismiss() 
            // //console.log(this.salesLocal ,'case2')
            // let flt:Array<any> =[]
            // flt = this.initialInvoices.filter(x=>x.payInvo.pay_ref==pay.pay_ref )
            // //console.log(flt,'here')
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
            if (this.offline == false && pay.pay_id != undefined) {
                let navigationExtras = {
                    queryParams: {
                        payInvo: JSON.stringify(pay),
                        sub_name: JSON.stringify(sub_name),
                        user_info: JSON.stringify(this.user_info),
                        store_info: JSON.stringify(this.store_info),
                        itemList: JSON.stringify([])
                    }
                };
                if (this.device == 'desktop') {
                    this.rout.navigate(['folder/editsalessnd'], navigationExtras);
                }
                else {
                    this.rout.navigate(['folder/edit-sales-mob'], navigationExtras);
                }
            }
            else if (this.offline == false && pay.pay_id == undefined) {
                console.log(pay, sub_name, status);
                this.loadingController.dismiss();
                //console.log(this.salesLocal ,'case2')
                let flt = [];
                flt = this.salesLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
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
                    this.rout.navigate(['folder/editsalessnd'], navigationExtras);
                }
            }
            else if (this.offline == true && pay.pay_id != undefined) {
                console.log(pay, sub_name, status);
                this.loadingController.dismiss();
                //console.log(this.sales ,'case3')
                let flt = [];
                flt = this.sales.filter(x => x.payInvo.pay_ref == pay.pay_ref);
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
                    this.rout.navigate(['folder/editsalessnd'], navigationExtras);
                }
                else {
                    this.rout.navigate(['folder/edit-sales-mob'], navigationExtras);
                }
            }
            else if (this.offline == true && pay.pay_id == undefined) {
                console.log(pay, sub_name, status);
                this.loadingController.dismiss();
                //console.log(this.salesLocal)
                let flt = [];
                flt = this.salesLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
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
                    this.rout.navigate(['folder/editsalessnd'], navigationExtras);
                }
                else {
                    this.rout.navigate(['folder/edit-sales-mob'], navigationExtras);
                }
            }
        }
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
};
SalessndrecordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
SalessndrecordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-salessndrecord',
        template: _salessndrecord_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_salessndrecord_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalessndrecordPage);



/***/ }),

/***/ 67078:
/*!********************************************************************!*\
  !*** ./src/app/salessndrecord/salessndrecord.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.show {\n  visibility: visible;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzc25kcmVjb3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVJO0VBQU8sbUJBQUE7QUFFWDs7QUFBRTtFQUFNLGtCQUFBO0FBSVI7O0FBRkk7RUFDSSxrQkFBQTtBQUtSOztBQUZJO0VBQ0ksZ0JBQUE7QUFLUjs7QUFERTtFQUFPLGtCQUFBO0VBQW1CLFdBQUE7RUFBYSxZQUFBO0FBT3pDOztBQUxFO0VBQW9CLHlCQUFBO0FBU3RCOztBQVBFO0VBQVEseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsWUFBQTtFQUFjLGVBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsWUFBQTtBQWdCdkciLCJmaWxlIjoic2FsZXNzbmRyZWNvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLnNob3d7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuICAuaGlkZXt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICBcbiAgICAuY3VzdC1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgLnRhYmxle3RleHQtYWxpZ246IGNlbnRlcjt3aWR0aDogMTAwJTsgbWFyZ2luOiAxMnB4O31cblxuICB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7fVxuICBcbiAgdGQsIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOiA4cHg7IGZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDtjb2xvcjogYmxhY2s7fSJdfQ== */";

/***/ }),

/***/ 8307:
/*!********************************************************************!*\
  !*** ./src/app/salessndrecord/salessndrecord.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- sh605579887 -->\n   \n    <ion-title>سجل المبيعات</ion-title>\n   \n      <ion-button fill=\"clear\" class=\"ion-margin\"  (click)=\"changeMode()\" slot=\"end\"> \n          <ion-label><ion-icon name=\"wifi-outline\" [color]=\"color\" style=\"font-size:20px\"></ion-icon></ion-label> \n          <ion-label><ion-text color=\"dark\"  *ngIf=\"color == 'primary'\">متصل</ion-text></ion-label>   \n          <ion-label><ion-text  color=\"dark\" *ngIf=\"color == 'dark'\">غير متصل</ion-text></ion-label>   \n      </ion-button>\n\n      <!-- <ion-popover  #popover [isOpen]=\"isOpen\" (didDismiss)=\"didDissmis()\">\n        <ng-template> -->\n          <!-- <ion-header>\n            <ion-toolbar dir=\"rtl\">\n              <ion-item>\n                <ion-input #popInput [(ngModel)] =\"searchTerm\" (ionChange)=\"searchItem($event)\"></ion-input>\n                <ion-button fill=\"clear\" (click)=\"clear()\" slot=\"end\">\n                  <ion-icon name=\"close\" color=\"danger\"></ion-icon>\n                </ion-button>\n               </ion-item>\n            </ion-toolbar>\n          </ion-header> -->\n          <!-- <ion-content class=\"ion-padding\" dir=\"rtl\">  -->\n            <!-- spinner -->\n            <!-- <ion-list class=\"ion-text-center\"  *ngIf=\"searchResult.length==0 && searchTerm =='' \">\n              <ion-label>\n                <ion-spinner name=\"lines-sharp\"></ion-spinner>\n              </ion-label> \n            </ion-list> -->\n            \n            <!-- <ion-list *ngIf=\"finalResult.length>0\"> \n              <ion-item button *ngFor=\"let item of finalResult\"  >{{item.item_name}}</ion-item>\n            </ion-list> -->\n             <!-- <ion-list *ngIf=\"searchResult.length>0\" class=\"hide\"> \n              <ion-item button *ngFor=\"let item1 of searchResult | filter:searchTerm\"  >{{item1.item_name}}</ion-item>\n            </ion-list>\n            <ion-list *ngIf=\"aliasResult.length>0\" class=\"hide\"> \n              <ion-item button *ngFor=\"let item2 of aliasResult | filter:aliasTerm\"  >{{item2.aliasEn}}</ion-item>\n            </ion-list> -->\n             <!-- <ion-list *ngIf=\"searchResult.length>0\"> \n              <ion-item button *ngFor=\"let item of searchResult\" (click)=\"selectFromPop(item)\"    class=\"dark\" [ngClass]=\"{'red':item.quantity == 0 , 'dark':item.quantity > 0}\">\n                {{item.item_name}} \n              </ion-item>\n            </ion-list> \n          </ion-content>\n        </ng-template>\n      </ion-popover> -->\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"device == 'desktop'\">\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\">\n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col> \n                              <ion-item class=\"custInput\">\n                                <input  *ngIf=\"sub_account\" class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsSales\" id=\"accountSales\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                                <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accountsSales\" style=\"height: auto;max-height: 20px;\">\n                                  <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                                </datalist>\n                                <ion-label *ngIf=\"!sub_account\">\n                                  <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                                 </ion-label>\n                                <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\">\n                                  <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                                </ion-button>\n                                <ion-button  fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"clear()\">\n                                  <ion-icon name=\"close-circle\" color=\"danger\"></ion-icon>\n                                </ion-button>   \n                              </ion-item>   \n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>مبيعات حديثة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\" >\n                                <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث  في تاريخ</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label>بحث في فترة</ion-label> \n                              </ion-item>\n                            </ion-col>\n                            <ion-col class=\"ion-no-padding ion-no-margin\">\n                              <ion-item lines=\"none\">\n                                <ion-radio [value]=\"3\" class=\"ion-margin-end\"></ion-radio>\n                                <ion-label> فواتير  مبدئية </ion-label> \n                              </ion-item>\n                            </ion-col> \n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group>\n\n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 && radioVal != 3\">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"4\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n              </ion-col> \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" *ngIf=\"user_info && store_info\">\n\n    <ion-row>\n      <ion-card class=\"custCard\">\n      </ion-card>\n    </ion-row>\n\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <!-- <th>رقم الفاتورة</th> -->\n                  <th>العميل</th>\n                  <th>التاريخ</th>\n                  <th>اجمالي المبلغ</th>\n                  <th>الخصــم</th>  \n                  <th>الإجمالي بعد الخصم</th>  \n                  <th>نقدا</th>  \n                  <th>المتبقي</th>   \n                  <th>تعليق</th>\n                  <th>المستخدم</th>  \n                  <th ><strong>تعديل</strong></th> \n                  <!-- <th ><strong>طياعة</strong></th>  -->\n                  \n                 </tr>\n                 <tr *ngFor=\"let pay of payArray ; let i = index\">\n                  <td>{{i+1}}</td>\n                  <!-- <td>{{pay.pay_id}}</td> -->\n                  <td>{{pay.sub_name}}</td>\n                  <td> {{pay.pay_date}}</td>\n                  <td>{{pay.tot_pr}}</td>\n                  <td>{{pay.discount}}</td>\n                  <td>{{+pay.tot_pr - +pay.discount}}</td>\n                  <td>{{pay.pay}}</td>\n                  <td>{{pay.changee}}</td> \n                  <td>{{pay.payComment}}</td>\n                  <td>{{pay.user_name}}</td>\n                  <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit')\">\n                      <ion-icon name=\"create-outline\" color=\"success\" ></ion-icon>  \n                    </ion-button>\n                  </td>\n                  <!-- <td>\n                    <ion-button fill=\"clear\" size=\"small\" (click)=\"printInvo('printarea',pay)\">\n                      <ion-icon name=\"print\" color=\"brimary\" ></ion-icon> \n                    </ion-button>\n                  </td> -->\n                 </tr>\n\n              <!--    <ion-icon name=\"cloud-offline-outline\"></ion-icon> -->\n\n                 <!-- skeleton -->\n                 \n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr>\n                 <tr *ngIf=\"loading == true\" >\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr>\n                 <tr  *ngIf=\"loading == true\">\n                  <td> <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td>  <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td>\n                  <td><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></td> \n                 </tr> \n               </table> \n               <ion-row class=\"ion-justify-content-center ion-margin-top\" *ngIf=\"showEmpty == true\"> \n                 <ion-col size=\"4\" class=\"ion-text-center\">  \n                   <ion-label> \n                     <ion-icon style=\"font-size: 30px;\"  name=\"archive-outline\"></ion-icon>\n                  </ion-label>\n                  <h4> لا توجد سجلات </h4> \n                 </ion-col>\n               </ion-row>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n  \n  \n    <!-- <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"4\"> \n                     <ion-label  class=\"ion-padding\"><strong>الصنف</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  list=\"browsers\" id=\"browser\" [(ngModel)]=\"selectedItem.item_name\"  (change)=\"pickDetail($event)\">\n                         \n                          <datalist style=\"border: none;\" id=\"browsers\" style=\"height: auto;max-height: 20px;\">\n                            <option *ngFor=\"let item of items ; let i = index\"   [value]=\"item.item_name\"></option>\n                        </datalist>\n                        </ion-item>  \n                    </ion-col>\n                    <ion-col size=\"2\"> \n                      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input  [(ngModel)]=\"selectedItem.qty\"  (ionChange)=\"qtyhange($event.target.val)\" #qtyId  ></ion-input>\n                      </ion-item> \n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.pay_price\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\">\n                      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n                      <ion-item class=\"custInput\">\n                        <ion-input [(ngModel)]=\"selectedItem.tot\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-padding\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row> -->\n  \n      \n      \n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n\n<ion-content *ngIf=\"device == 'mobile'\">\n \n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid class=\"ion-no-padding ion-no-margin\">\n                    <ion-row dir=\"rtl\"> \n                      <ion-radio-group [(ngModel)]=\"radioVal\"  (ionChange)=\"radioChange($event)\" >\n                        <ion-grid class=\"ion-no-padding ion-no-margin\">\n                          <ion-row>\n                            <ion-col size=\"12\"> \n\n                              <ion-item class=\"custInput\">\n                                <input  *ngIf=\"sub_account\" class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsSales\" id=\"accountSales\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                                <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accountsSales\" style=\"height: auto;max-height: 20px;\">\n                                  <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                                </datalist>\n                                <ion-label *ngIf=\"!sub_account\">\n                                  <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                                 </ion-label>\n                                <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\">\n                                  <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                                </ion-button>\n                                <ion-button  fill=\"clear\" size=\"small\" slot=\"end\" (click)=\"clear()\">\n                                  <ion-icon name=\"close-circle\" color=\"danger\"></ion-icon>\n                                </ion-button>   \n                              </ion-item>   \n                            </ion-col>\n                            \n                              <ion-col>\n                                <ion-item lines=\"none\" >\n                                  <ion-radio [value]=\"0\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>مبيعات حديثة</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              \n                              <ion-col>\n                                <ion-item lines=\"none\" >\n                                  <ion-radio [value]=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>بحث  في تاريخ</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col>\n                                <ion-item lines=\"none\">\n                                  <ion-radio [value]=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>بحث في فترة</ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col>\n                                <ion-item lines=\"none\">\n                                  <ion-radio [value]=\"3\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label> فواتير  مبدئية </ion-label> \n                                </ion-item>\n                              </ion-col>\n                             \n                          </ion-row>\n                        </ion-grid> \n                      </ion-radio-group> \n                    </ion-row>\n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"6\">\n                        <ion-item class=\"custInput\" *ngIf=\"radioVal != 0 && radioVal != 3\">\n                          <input style=\"width:100%\"  [(ngModel)]=\"startingDate\" type=\"date\"  id=\"startingDate\" name=\"startingDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"6\" *ngIf=\"radioVal == 2 \">\n                        <ion-item class=\"custInput\"> \n                          <input style=\"width:100%\" [(ngModel)]=\"endDate\"  type=\"date\"  id=\"endDate\" name=\"endDate\" />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>  \n                      </ion-col>\n                      <ion-col size=\"8\" class=\"ion-text-end\">\n                        <ion-item lines=\"none\">\n                          <ion-buttons slot=\"end\"> \n                            <ion-button  fill=\"outline\" color=\"success\"  (click)=\"search()\"  > \n                              <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                              <ion-label><ion-text color=\"dark\">بحــث</ion-text></ion-label> \n                            </ion-button>\n                          </ion-buttons>\n                        </ion-item>\n                      </ion-col> \n                    </ion-row>\n                  </ion-grid> \n              </ion-col> \n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-grid class=\"ion-margin-top\" dir=\"rtl\" *ngIf=\"user_info && store_info\">\n    <ion-list *ngIf=\"loading == true\">\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>  \n      </ion-item>\n      </ion-list>\n    <ion-accordion-group *ngIf=\"payArray\">\n      <ion-accordion *ngFor=\"let pay of payArray ; let i = index\"  (click)=\"getPayDetailsForMob(pay)\" [value]=\"i\"   toggleIcon=\"caret-down-circle\" toggleIconSlot=\"end\" >\n        <ion-item slot=\"header\" color=\"light\" > \n          <ion-icon name=\"newspaper-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>{{pay.sub_name}}</ion-label>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-label><ion-note>{{pay.pay_date | date:'dd-MM'}}</ion-note>    </ion-label>\n              </ion-col>\n              <ion-col size=\"8\" class=\"ion-text-end\">\n                <ion-label>{{+pay.tot_pr - +pay.discount}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          \n        </ion-item>\n\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n        <ion-item slot=\"header\" color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n       \n        <div class=\"ion-padding\" slot=\"content\">\n          <ion-item color=\"light\"  *ngIf=\"loadingDetails == true\"><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-item>\n            <ion-list *ngIf=\"pay.item_details\">\n              <ion-item color=\"light\" *ngFor=\"let item of pay.item_details\" > \n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-label>{{item.item_name}}</ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                      <ion-label><ion-note>الكمية :</ion-note>{{item.quantity}}</ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"ion-text-end\">\n                      <ion-label><ion-note>السعر :</ion-note>{{item.pay_price}}</ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid> \n              </ion-item>\n              <ion-grid>\n              </ion-grid>\n            </ion-list> \n            <ion-list *ngIf=\" !pay.item_details || pay.item_details.length == 0\">\n              <ion-label>حدث خطأ في الفاتورة</ion-label>\n            </ion-list>\n          <ion-item-divider></ion-item-divider>\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-label><ion-note>المجموع  : </ion-note><strong>{{pay.tot_pr}}</strong></ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"pay.discount > 0\">\n              <ion-label><ion-note>تخفيض  : </ion-note><strong>{{pay.discount}}</strong></ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"pay.discount > 0\">\n              <ion-label><ion-note> صافي المبلغ    : \n              </ion-note><strong> {{+pay.tot_pr - +pay.discount}} </strong></ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"6\">\n              <ion-button  fill=\"outline\" color=\"success\"  (click)=\"getPayInvoDetail(pay , pay.sub_name,'edit')\"  > \n                <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                <ion-label><ion-text color=\"dark\">تعديل</ion-text></ion-label> \n              </ion-button>\n            </ion-col>\n            <!-- <ion-col size=\"6\">\n              <ion-button  fill=\"outline\" color=\"success\"  (click)=\"createPdf(pay)\"  > \n                <ion-icon name=\"search-outline\" color=\"success\"></ion-icon>\n                <ion-label><ion-text color=\"dark\">طباعة</ion-text></ion-label> \n              </ion-button>\n            </ion-col>   -->\n          </ion-row>\n       \n        </div>\n      </ion-accordion> \n    </ion-accordion-group>\n\n    \n  </ion-grid>\n \n</ion-content>\n\n<ion-footer *ngIf=\"payArray\">\n  <ion-grid dir=\"rtl\" *ngIf=\"device == 'desktop'\" >\n    <ion-row>\n      <ion-col>\n        <ion-label><ion-text>إجمالي المبيعات : </ion-text><br>  <strong>{{sums.tot.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{sums.discount.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>المبيعات بعد الخصم : </ion-text><br>  <strong>{{sums.totAfterDiscout.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي النقد : </ion-text><br>  <strong>{{sums.pay.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label><ion-text>اجمالي الاجل : </ion-text><br>  <strong>{{sums.change.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid dir=\"rtl\" *ngIf=\"device == 'mobile'\" >\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>إجمالي المبيعات : </ion-text><br>  <strong>{{sums.tot.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>اجمالي الخصم  : </ion-text><br>  <strong>{{sums.discount.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label><ion-text>المبيعات بعد الخصم : </ion-text><br>  <strong>{{sums.totAfterDiscout.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>اجمالي النقد : </ion-text><br>  <strong>{{sums.pay.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label><ion-text>اجمالي الاجل : </ion-text><br>  <strong>{{sums.change.toFixed(2)}}</strong></ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_salessndrecord_salessndrecord_module_ts.js.map
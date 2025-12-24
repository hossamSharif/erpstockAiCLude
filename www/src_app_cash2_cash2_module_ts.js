"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cash2_cash2_module_ts"],{

/***/ 45504:
/*!***********************************************!*\
  !*** ./src/app/cash2/cash2-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cash2PageRoutingModule": () => (/* binding */ Cash2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _cash2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash2.page */ 3721);




const routes = [
    {
        path: '',
        component: _cash2_page__WEBPACK_IMPORTED_MODULE_0__.Cash2Page
    }
];
let Cash2PageRoutingModule = class Cash2PageRoutingModule {
};
Cash2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Cash2PageRoutingModule);



/***/ }),

/***/ 36389:
/*!***************************************!*\
  !*** ./src/app/cash2/cash2.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cash2PageModule": () => (/* binding */ Cash2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _cash2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash2-routing.module */ 45504);
/* harmony import */ var _cash2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash2.page */ 3721);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/shared/shared.module */ 62279);









let Cash2PageModule = class Cash2PageModule {
};
Cash2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cash2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Cash2PageRoutingModule
        ],
        declarations: [_cash2_page__WEBPACK_IMPORTED_MODULE_1__.Cash2Page]
    })
], Cash2PageModule);



/***/ }),

/***/ 3721:
/*!*************************************!*\
  !*** ./src/app/cash2/cash2.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cash2Page": () => (/* binding */ Cash2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _cash2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash2.page.html?ngResource */ 29991);
/* harmony import */ var _cash2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash2.page.scss?ngResource */ 20489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/currency.service */ 6612);









//import { AccountModalPage } from '../account-modal/account-modal.page';


let Cash2Page = class Cash2Page {
    constructor(platform, behavApi, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast, currencyService, cdr) {
        this.platform = platform;
        this.behavApi = behavApi;
        this.modalController = modalController;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.currencyService = currencyService;
        this.cdr = cdr;
        this.notifArr = [];
        this.showNotif = false;
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.isOpenNotif = false;
        this.newNotif = false;
        this.sub_accountFrom = [];
        this.itemList = [];
        this.sub_accountTo = [];
        this.randomsNumber = [];
        this.jdetail_fromArr = [];
        this.journalType = [];
        this.journalTypeDetails = [];
        this.jType = "1";
        this.pay = 0;
        this.radioVal = "1";
        this.jdetail_toArr = [];
        this.selectedFromAccountArr = [];
        this.selectedToAccountArr = [];
        this.banksAccountArray = [];
        this.showMe = null;
        this.showFrom = false;
        this.showTo = false;
        this.showFrom3 = false;
        this.showTo3 = false;
        ///
        this.coloredMsgFrom = false;
        this.coloredMsgFrom3 = false;
        this.coloredMsgTo = false;
        this.coloredMsgTo3 = false;
        this.isAccountPopoverOpen = false;
        this.searchTerm = '';
        this.searchedAccounts = [];
        // Balance display properties
        this.selectedAccountBalance = null;
        this.sourceAccountBalance = null;
        this.loadingAccountBalance = false;
        this.loadingSourceBalance = false;
        this.selectedBankAccount = { id: null, ac_id: null, sub_name: null, sub_type: null, sub_code: null, sub_balance: null, store_id: null, debit: null, credit: null, currentType: null };
        this.getAppInfo();
    }
    ngOnInit() {
        this.initializeCurrency();
    }
    ngOnDestroy() {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
    }
    initializeCurrency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.currencyService.initializeCurrency();
            yield this.currencyService.loadSupportedCurrencies();
            if (this.store_info && this.year) {
                yield this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
            }
            this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
                this.cdr.detectChanges();
            });
        });
    }
    presentAccountPopover(event) {
        this.searchedAccounts = this.sub_accountFrom;
        this.isAccountPopoverOpen = true;
    }
    searchAccount(event) {
        const searchTerm = event.target.value.toLowerCase();
        if (searchTerm && searchTerm.trim() !== '') {
            this.searchedAccounts = this.sub_accountFrom.filter((acc) => {
                return acc.sub_name.toLowerCase().indexOf(searchTerm) > -1;
            });
        }
        else {
            this.searchedAccounts = this.sub_accountFrom;
        }
    }
    selectAccount(account) {
        this.pickAccount(account);
        this.isAccountPopoverOpen = false;
        this.loadAccountBalance(account.id);
    }
    ionViewDidLeave() {
        //console.log('ionViewWillLeave') 
        if (this.subiscribtionNotif) {
            this.subiscribtionNotif.unsubscribe();
        }
    }
    ionViewDidEnter() {
        // setTimeout(() => {
        //   //check all changes in case notif arr >0 
        //    this.subiscribtionNotif = this.behavApi.currentNotif.subscribe(notif=>{
        //     //console.log('notif page currentNotif behavApiRespnse',notif) 
        //      if(notif.length == 0){
        //       this.notifArr = []
        //      }else{
        //       this.notifArr =  notif[0]  
        //      } 
        //     if(this.notifArr.length> 0){ 
        //       this.showNotif = true 
        //       this.storage.get('LogHistoryLocal').then((response) => { 
        //         if (response) {
        //           this.LogHistoryLocalArr = response  
        //         } 
        //       });  
        //     } else {
        //       //console.log('no updates')
        //     } 
        //     })
        //   }, 10000); 
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
        // this.storage.get('LogHistoryLocal').then((response) => {
        //   //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
        //   if (response) {
        //     this.LogHistoryLocalArr = response
        //   }   
        // });
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                //console.log(response)
                //console.log(this.store_info) 
                this.getAllAccounts();
                this.getJournalType();
                this.prepareInvo();
            }
        });
    }
    coleredMsgFromFunc() {
        if (this.showFrom == true && this.selectedFromAccount2.sub_name == "") {
            this.coloredMsgFrom = true;
        }
        else if (this.showFrom3 == true && this.selectedFromAccount3.sub_name == "") {
            this.coloredMsgFrom3 = true;
        }
        if (this.showTo == true && this.selectedToAccount2.sub_name == "") {
            this.coloredMsgTo = true;
        }
        else if (this.showTo3 == true && this.selectedToAccount3.sub_name == "") {
            this.coloredMsgTo3 = true;
        }
        setTimeout(() => {
            this.coloredMsgFrom = false;
            this.coloredMsgFrom3 = false;
            this.coloredMsgTo = false;
            this.coloredMsgTo3 = false;
        }, 10000);
    }
    //  jTypeChange(ev){
    //   this.selectedToAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"" ,currentType:""};
    //   this.selectedToAccount2 = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"" ,currentType:""};
    //   this.selectedToAccount3 = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"" ,currentType:""};
    //   this.selectedFromAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,debit:"",credit:"",currentType:""}; 
    //   this.selectedFromAccount2 = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,debit:"",credit:"",currentType:""}; 
    //   this.selectedFromAccount3 = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,debit:"",credit:"",currentType:""}; 
    //   this.showFrom = false
    //   this.showFrom3 = false
    //   this.showTo = false
    //   this.showTo3 = false
    //   this.journal.j_details=""
    //   //console.log(ev.target.value) 
    //   //console.log(this.jType) 
    //   let fl= this.journalType.filter(x=>x.type_name == ev.target.value)
    //   let flDetails = this.journalTypeDetails.filter(x=>x.jType_id == fl[0].id)
    //   this.selectedJtype = fl[0]
    //   //console.log('im here', fl ,fl[0])
    // //show account feilds
    // this.journal.j_details=this.selectedJtype.type_desc
    // if (+fl[0].from_count ==  2 ) {
    //   this.showFrom = true
    //   this.showFrom3 = false
    // } else if(+fl[0].from_count == 3) {
    //   this.showFrom3 = true
    //   this.showFrom = true
    // }
    // if (+fl[0].to_count == 2) {
    //   this.showTo = true
    //   this.showTo3 = false
    // } else if(+fl[0].to_count == 3) {
    //   this.showTo = true
    //   this.showTo3 = true
    // }
    // //
    // let fromAccount :Array<any> = []
    // let toAccount :Array<any> = []
    // for (let i = 0; i <  flDetails.length; i++) {
    //   const element =  flDetails[i];
    //   if(element.type_ac == 'debit'){
    //    fromAccount.push(element)
    //   }else if(element.type_ac == 'credit'){
    //     toAccount.push(element) 
    //   }
    // }
    // //console.log('from' ,fromAccount)
    // //console.log('to', toAccount)
    // if(fromAccount){
    //   for (let i = 0; i <  fromAccount.length; i++) {
    //     const element =  fromAccount[i];
    //     let flAccounts = this.sub_accountFrom.filter(x=>x.id == element.ac_id)
    //     //console.log(fromAccount[0].sub_name)
    //         if (i == 0) {
    //           this.pickAccountFrom('ev', 1,flAccounts[0].sub_name)
    //         }else if(i == 1){
    //           this.pickAccountFrom('ev', 2,flAccounts[0].sub_name) 
    //         }else if(i == 2){
    //           this.pickAccountFrom('ev', 3,flAccounts[0].sub_name)
    //         } 
    //   }
    // }
    // if(toAccount){
    //   for (let i = 0; i <  toAccount.length; i++) {
    //     const element =  toAccount[i];
    //     let flAccounts = this.sub_accountTo.filter(x=>x.id == element.ac_id)
    //      //console.log(flAccounts[0].sub_name)
    //         if (i == 0) {
    //           this.pickAccountTo('ev', 1,flAccounts[0].sub_name)
    //         }else if(i == 1){
    //           this.pickAccountTo('ev', 2,flAccounts[0].sub_name)
    //         }else if(i == 2){
    //           this.pickAccountTo('ev', 3,flAccounts[0].sub_name)
    //         } 
    //   }
    // }
    // //  for (let i = 0; i <  flDetails.length; i++) {
    // //    const element =  flDetails[i];
    // //    if(element.type_ac == 'debit'){
    // //     let flAccounts = this.sub_accountFrom.filter(x=>x.id == element.ac_id)
    // //     //console.log(flAccounts[0].sub_name)
    // //     if (i == 0) {
    // //       this.pickAccountFrom('ev', 1,flAccounts[0].sub_name)
    // //     }else if(i == 1){
    // //       this.pickAccountFrom('ev', 2,flAccounts[0].sub_name)
    // //     }else if(i == 2){
    // //       this.pickAccountFrom('ev', 3,flAccounts[0].sub_name)
    // //     }
    // //    }else if(element.type_ac == 'credit'){
    // //     let flAccounts = this.sub_accountTo.filter(x=>x.id == element.ac_id)
    // //     //console.log(flAccounts[0].sub_name)
    // //     if (i == 0) {
    // //       this.pickAccountTo('ev',  1,flAccounts[0].sub_name)
    // //     }else if(i ==1){
    // //       this.pickAccountTo('ev',  2,flAccounts[0].sub_name)
    // //     }else if(i ==2){
    // //       this.pickAccountTo('ev', 3,flAccounts[0].sub_name)
    // //     }
    // //    }
    // //  }
    //     // if (this.selectedJtype.debitac_id != null) {
    //     //   let fname = this.sub_accountFrom.filter(x => x.id == this.selectedJtype.debitac_id)
    //     //   //console.log(fname)
    //     //   this.pickAccountFrom(fname[0].sub_name, 4)
    //     // } else if (this.selectedJtype.debitac_id == null) {
    //     //   this.selectedFromAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debitTot: "", creditTot: "", currentType: "" };
    //     // }
    //     // if (this.selectedJtype.creditac_id != null) {
    //     //   let cname = this.sub_accountTo.filter(x => x.id == this.selectedJtype.creditac_id)
    //     //   this.pickAccountTo(cname[0].sub_name, 1)
    //     // } else if (this.selectedJtype.creditac_id == null) {
    //     //   this.selectedToAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, creditTot: "", debitTot: "", currentType: "" };
    //     // }  
    //   this.payInvo.rec_detailes = fl[0].default_details 
    //   this.payInvo.rec_pay = fl[0].default_val 
    //   this.coleredMsgFromFunc()
    //  }
    radioChange(ev) {
        if (ev.target.value == 1) {
            //console.log(ev)
        }
        else if (ev.target.value == 1) {
        }
    }
    pickAccount(account) {
        let fl = [account];
        let ctype;
        if (fl[0].debit > 0) {
            ctype = 'debit';
        }
        else if (fl[0].credit > 0) {
            ctype = 'credit';
        }
        this.selectedFromAccount = {
            id: fl[0]['id'],
            ac_id: fl[0]['ac_id'],
            sub_name: fl[0]['sub_name'],
            sub_type: fl[0]['sub_type'],
            sub_code: fl[0]['sub_code'],
            store_id: fl[0]['store_id'],
            sub_balance: fl[0]['sub_balance'],
            currentType: ctype,
            debit: +fl[0]['debit'],
            credit: +fl[0]['credit']
        };
        this.selectedItem = {
            id: "NULL",
            ac_id: this.selectedFromAccount.id,
            sub_name: this.selectedFromAccount.sub_name,
            sub_type: this.selectedFromAccount.sub_type,
            sub_code: this.selectedFromAccount.sub_code,
            store_id: this.selectedFromAccount.store_id,
            sub_balance: this.selectedFromAccount.sub_balance,
            currentType: this.selectedFromAccount.currentType,
            debit: this.selectedFromAccount.debit,
            credit: this.selectedFromAccount.credit
        };
    }
    pickAccountBank(ev) {
        console.log('ev', ev.target.value);
        if (ev.target.value == 1) {
            this.selectedBankAccount = {
                id: 46,
                ac_id: 7,
                sub_name: "الخزينة",
                sub_type: "",
                sub_code: "",
                store_id: this.store_info.id,
                sub_balance: "",
                currentType: "",
                debit: "",
                credit: ""
            };
            this.loadSourceBalance(46);
        }
        else {
            let fl = this.banksAccountArray.filter(x => x.id == ev.target.value);
            console.log(this.banksAccountArray);
            console.log(fl);
            this.selectedBankAccount = {
                id: fl[0]['id'],
                ac_id: fl[0]['ac_id'],
                sub_name: fl[0]['sub_name'],
                sub_type: fl[0]['sub_type'],
                sub_code: fl[0]['sub_code'],
                store_id: fl[0]['store_id'],
                sub_balance: fl[0]['sub_balance'],
                currentType: "",
                debit: +fl[0]['debit'],
                credit: +fl[0]['credit']
            };
            this.loadSourceBalance(fl[0]['id']);
        }
    }
    prepare4save() {
        this.payInvo.rec_date = this.journal.j_date;
        let d = this.payInvo.rec_date;
        this.payInvo.rec_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        let debit = 0;
        let credit = 0;
        let currentType = "";
        if (+this.jType == 1) {
            debit = +this.pay;
            this.journal.j_type = "سند دفع";
            // currentType = "debit"
        }
        else if (+this.jType == 2) {
            credit = +this.pay;
            this.journal.j_type = "سند قبض";
            // currentType = "credit"
        }
        this.itemList = [];
        this.itemList.push({
            "id": "NULL",
            "j_id": this.journal.j_id,
            "j_ref": this.journal.j_ref,
            "ac_id": this.selectedFromAccount.id,
            "j_desc": this.selectedFromAccount.sub_type,
            "j_type": "",
            "credit": credit,
            "debit": debit,
            "store_id": this.store_info.id,
            "sub_code": this.selectedFromAccount.sub_code,
            "sub_name": this.selectedFromAccount.sub_name,
            "yearId": this.year.id
        });
        this.journal.j_pay = +this.pay;
        let from = "";
        let to = "";
        if (+this.jType == 1) {
            if (+this.radioVal == 1) {
                this.jdetail_to = {
                    id: "NULL",
                    j_id: this.journal.j_id,
                    j_ref: this.journal.j_ref,
                    ac_id: 46,
                    j_desc: "",
                    j_type: "سند دفع",
                    credit: this.pay,
                    debit: 0,
                    store_id: this.store_info.id,
                    yearId: this.year.id
                };
                to = 'الخزينة';
                from = this.selectedFromAccount.sub_name;
            }
            else if (+this.radioVal != 1) {
                this.jdetail_to = {
                    id: "NULL",
                    j_id: this.journal.j_id,
                    j_ref: this.journal.j_ref,
                    ac_id: this.selectedBankAccount.id,
                    j_desc: "",
                    j_type: "سند دفع",
                    credit: this.pay,
                    debit: 0,
                    store_id: this.store_info.id,
                    yearId: this.year.id
                };
                to = this.selectedBankAccount.sub_name;
                //to = 'البنك'
                from = this.selectedFromAccount.sub_name;
            }
            this.itemList[0].j_type = "سند قبض";
            this.jdetail_toArr.push(this.jdetail_to);
            this.jdetail_fromArr.push(this.itemList[0]);
            this.journal.standard_details = 'من حساب ' + from + ' الي حساب ' + to;
        }
        else if (+this.jType == 2) {
            if (+this.radioVal == 1) {
                this.jdetail_from = {
                    id: "NULL",
                    j_id: this.journal.j_id,
                    j_ref: this.journal.j_ref,
                    ac_id: 46,
                    j_desc: "",
                    j_type: "سند قبض",
                    credit: 0,
                    debit: this.pay,
                    store_id: this.store_info.id,
                    yearId: this.year.id
                };
                from = 'الخزينة';
                to = this.selectedFromAccount.sub_name;
            }
            else if (+this.radioVal != 1) {
                this.jdetail_from = {
                    id: "NULL",
                    j_id: this.journal.j_id,
                    j_ref: this.journal.j_ref,
                    ac_id: this.selectedBankAccount.id,
                    j_desc: "",
                    j_type: "سند قبض",
                    credit: 0,
                    debit: +this.pay,
                    store_id: this.store_info.id,
                    yearId: this.year.id
                };
                //from = 'البنك'
                from = this.selectedBankAccount.sub_name;
                to = this.selectedFromAccount.sub_name;
            }
            this.itemList[0].j_type = "سند دفع";
            this.jdetail_toArr.push(this.itemList[0]);
            this.jdetail_fromArr.push(this.jdetail_from);
            this.journal.standard_details = 'من حساب ' + from + ' الي حساب ' + to;
            //console.log('this.journal' ,  this.journal)
        }
    }
    addTolist() {
        if (this.selectedItem.sub_name == "" || this.selectedItem.id == "") {
            this.presentToast('الرجاء اختيار الحساب ', 'danger');
        }
        else if (+this.pay == 0) {
            this.presentToast('الرجاء ادخال المبلغ ', 'danger');
        }
        else {
            let fl = [];
            if (this.itemList.length > 0) {
                fl = this.itemList.filter(x => x.ac_id == this.selectedItem.ac_id);
            }
            if (fl.length == 0) {
                let debit = 0;
                let credit = 0;
                let currentType = "";
                if (+this.jType == 1) {
                    debit = +this.pay;
                    // currentType = "debit"
                }
                else if (+this.jType == 2) {
                    credit = +this.pay;
                    // currentType = "credit"
                }
                this.itemList.push({
                    "id": "NULL",
                    "j_id": this.journal.j_id,
                    "ac_id": this.selectedItem.id,
                    "j_ref": this.journal.j_ref,
                    "j_desc": this.selectedItem.sub_type,
                    "j_type": "",
                    "credit": credit,
                    "debit": debit,
                    "store_id": this.store_info.id,
                    "sub_code": this.selectedItem.sub_code,
                    "sub_name": this.selectedItem.sub_name,
                    "yearId": this.year.id
                });
            }
            // else {
            //   this.presentToast('الحساب موجود مسبقا في القائمة , يمكنك تعديل قيمة المبلغ', 'danger')
            // }
            this.getTotal();
            this.pay = 0;
            this.selectedItem = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
            this.selectedFromAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        }
    }
    deleteItem(index) {
        //console.log( index); 
        this.itemList.splice(index, 1);
        //console.log( this.itemList);
        this.pay = 0;
        this.getTotal();
    }
    generateRandom(type) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString();
        if (type == 'invo') {
            this.payInvo.rec_ref = this.store_info.store_ref + "INV" + randomsNumber;
            this.journal.invo_ref = this.payInvo.rec_ref;
        }
        else {
            this.journal.j_ref = this.store_info.store_ref + "JO" + randomsNumber;
            this.jdetail_from.j_ref = this.journal.j_ref;
            this.jdetail_to.j_ref = this.journal.j_ref;
        }
        //console.log(randomsNumber)
        //console.log(this.payInvo.rec_ref ,this.journal.j_ref)  
    }
    hideMe(i) {
        this.showMe = null;
    }
    editCell(i) {
        if (+this.jType == 1) {
            if (+this.itemList[i].debit > 0) {
                this.hideMe(i);
                this.getTotal();
            }
            else {
                this.presentToast("خطأ في الإدخال ", "danger");
            }
        }
        else if (+this.jType == 2) {
            if (+this.itemList[i].credit > 0) {
                this.hideMe(i);
                this.getTotal();
            }
            else {
                this.presentToast("خطأ في الإدخال ", "danger");
            }
        }
    }
    getTotal() {
        if (+this.jType == 1) {
            let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.debit; }, 0);
            //console.log('sum', sum)
            this.journal.j_pay = sum;
        }
        else if (+this.jType == 2) {
            let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.credit; }, 0);
            //console.log('sum', sum)
            this.journal.j_pay = sum;
        }
    }
    qtyClick(i) {
        //console.log(i)
        this.showMe = i;
    }
    pickAccountTo(ev, index, sub_name) {
        let s;
        if (sub_name) {
            s = sub_name;
        }
        else {
            s = ev.target.value;
        }
        let fl = this.sub_accountTo.filter(x => x.sub_name == s);
        //console.log(s,this.sub_accountTo,fl);
        let bl;
        let ctype;
        if (fl[0].debit > 0) {
            ctype = 'debit';
        }
        else if (fl[0].credit > 0) {
            ctype = 'credit';
        }
        if (index == 1) {
            this.selectedToAccount = {
                id: fl[0]['id'],
                ac_id: fl[0]['ac_id'],
                sub_name: fl[0]['sub_name'],
                sub_type: fl[0]['sub_type'],
                sub_code: fl[0]['sub_code'],
                store_id: fl[0]['store_id'],
                sub_balance: fl[0]['sub_balance'],
                currentType: ctype,
                debit: +fl[0]['debit'],
                credit: +fl[0]['credit']
            };
            //console.log('kjdh', this.selectedToAccount);
        }
        else if (index == 2) {
            this.selectedToAccount2 = {
                id: fl[0]['id'],
                ac_id: fl[0]['ac_id'],
                sub_name: fl[0]['sub_name'],
                sub_type: fl[0]['sub_type'],
                sub_code: fl[0]['sub_code'],
                store_id: fl[0]['store_id'],
                sub_balance: bl,
                currentType: ctype,
                debit: +fl[0]['debit'],
                credit: +fl[0]['credit']
            };
        }
        else if (index == 3) {
            this.selectedToAccount3 = {
                id: fl[0]['id'],
                ac_id: fl[0]['ac_id'],
                sub_name: fl[0]['sub_name'],
                sub_type: fl[0]['sub_type'],
                sub_code: fl[0]['sub_code'],
                store_id: fl[0]['store_id'],
                sub_balance: bl,
                currentType: ctype,
                debit: +fl[0]['debit'],
                credit: +fl[0]['credit']
            };
        }
    }
    prepareInvo(saved) {
        this.selectedItem = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.selectedFromAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.jdetail_from = { id: "", j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: "", yearId: "" };
        this.jdetail_to = { id: "", j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: "", yearId: "" };
        this.payInvo = { rec_id: undefined, rec_ref: 0, store_id: this.store_info.id, rec_date: "", user_id: "", ac_id: 0, rec_detailes: "", rec_pay: 0, rec_type: "", yearId: "" };
        this.journal = { j_id: undefined, j_ref: "", j_details: "", j_type: "", invo_ref: "", j_desc: "", j_date: "", store_id: this.store_info.id, user_id: "", j_pay: "", standard_details: "", yearId: "" };
        this.jdetail_fromArr = [];
        this.jdetail_toArr = [];
        this.pay = 0;
        let d = new Date;
        // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
        this.payInvo.rec_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.journal.j_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.generateRandom('invo');
        this.generateRandom('journal');
        this.payInvo.store_id = this.store_info.id;
        this.payInvo.yearId = this.year.id;
        this.payInvo.user_id = this.user_info.id;
        this.journal.invo_ref = this.payInvo.rec_ref;
        this.journal.store_id = this.store_info.id;
        this.journal.user_id = this.user_info.id;
        this.journal.yearId = this.year.id;
        this.journal.store_id = this.store_info.id;
        this.journal.user_id = this.user_info.id;
        this.jdetail_from.store_id = this.store_info.id;
        this.jdetail_from.j_ref = this.journal.j_ref;
        this.jdetail_from.yearId = this.year.id;
        this.jdetail_to.j_ref = this.journal.j_ref;
        this.jdetail_to.store_id = this.store_info.id;
        this.jdetail_to.yearId = this.year.id;
        //console.log('fgdfdgdfgd', this.payInvo) 
        this.radioVal = "1";
        this.jType = "1";
        if (saved) {
            this.loadingController.dismiss();
        }
        this.getAllAccounts();
    }
    getAllAccounts() {
        console.log('getAllAccounts', this.store_info.id, this.year.id);
        this.api.getAllAccounts(this.store_info.id, this.year.id).subscribe(data => {
            let res = data;
            console.log('res', res);
            this.sub_accountFrom = res['data'];
            this.sub_accountTo = res['data'];
            this.sub_accountFrom = this.sub_accountFrom.filter(x => x.ac_id != 8 && x.ac_id != 9);
            this.getBanksAccount();
            this.prepareCurrentBalnces();
            //console.log(this.sub_accountFrom)
        }, (err) => {
            //console.log(err);
        });
    }
    getBanksAccount() {
        this.banksAccountArray = this.sub_accountFrom.filter(x => x.ac_id == 7);
        console.log('banksAccountArray', this.banksAccountArray);
    }
    prepareCurrentBalnces() {
        for (let i = 0; i < this.sub_accountFrom.length; i++) {
            const element = this.sub_accountFrom[i];
            let debitTot = +element.fromDebitTot + +element.toDebitTot;
            let creditTot = +element.fromCreditTot + +element.toCreditTot;
            if (element.sub_type == "debit") {
                let bl = (+element.sub_balance + +debitTot) - +creditTot;
                if (bl > 0) {
                    element.debit = bl;
                    element.credit = 0;
                }
                else if (bl < 0) {
                    bl = bl * -1;
                    element.debit = 0;
                    element.credit = bl;
                }
                else if (bl == 0) {
                    element.debit = bl;
                    element.credit = 0;
                }
            }
            else if (element.sub_type == "credit") {
                let bl = (+element.sub_balance + +creditTot) - +debitTot;
                if (bl > 0) {
                    element.debit = 0;
                    element.credit = bl;
                }
                else if (bl < 0) {
                    bl = bl * -1;
                    element.debit = bl;
                    element.credit = 0;
                }
                else if (bl == 0) {
                    element.debit = 0;
                    element.credit = bl;
                }
            }
        }
        this.sub_accountTo = this.sub_accountFrom;
    }
    getJournalType() {
        this.api.getJournalType(this.store_info.id).subscribe(data => {
            let res = data;
            this.journalType = res['data'];
            //console.log('sasasa',this.journalType)
            this.getJournalTypeDetails();
        }, (err) => {
            //console.log(err);
        });
    }
    getJournalTypeDetails() {
        this.api.getJournalTypeDetails(this.store_info.id).subscribe(data => {
            let res = data;
            this.journalTypeDetails = res['data'];
            //console.log(this.journalTypeDetails)
        }, (err) => {
            //console.log(err);
        });
    }
    payChange(ev) {
        //console.log( ev.target.value);
        this.jdetail_from.debit = ev.target.value;
        this.jdetail_to.credit = ev.target.value;
    }
    validate() {
        if (+this.radioVal == 0 || +this.jType == 0) {
            this.presentToast('الرجاء اختيار  نوع السند ', 'danger');
            return false;
        }
        else if (+this.journal.j_pay == 0) {
            this.presentToast('الرجاء ادخال معاملات ', 'danger');
            return false;
        }
        else if (+this.jdetail_fromArr[0].ac_id == 0 || +this.jdetail_toArr[0].ac_id == 0) {
            this.presentToast('الرجاء إختيار الحساب مرة اخري  ', 'danger');
        }
        else {
            return true;
        }
    }
    setStandard() {
        let from2 = "";
        let from3 = "";
        let to2 = "";
        let to3 = "";
        if (this.showFrom == true && this.selectedFromAccount2.sub_name != undefined) {
            from2 = ' , ' + this.selectedFromAccount2.sub_name;
        }
        else if (this.showFrom3 == true && this.selectedFromAccount3.sub_name != undefined) {
            from3 = ' , ' + this.selectedFromAccount3.sub_name;
        }
        if (this.showTo == true && this.selectedToAccount2.sub_name != undefined) {
            to2 = ' , ' + this.selectedToAccount2.sub_name;
        }
        else if (this.showTo3 == true && this.selectedToAccount3.sub_name != undefined) {
            to3 = ' , ' + this.selectedToAccount3.sub_name;
        }
        this.journal.standard_details = 'من حساب ' + this.selectedFromAccount.sub_name + from2 + from3 + ' الي حساب ' + this.selectedToAccount.sub_name + to2 + to3;
    }
    save() {
        this.prepare4save();
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            this.saveJournal();
        }
    }
    presentModalSales(type, sub_name, cust_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedToAccount.ac_id == 8) {
                type = 'sales'; // حساب المبيعات
                if (this.selectedFromAccount2.sub_name == "" && this.showFrom == true) {
                    this.presentToast('الرجاء اختيار حساب العميل', 'warning');
                }
                else if (this.selectedFromAccount2.sub_name != "" && this.showFrom == true) {
                    sub_name = this.selectedFromAccount2.sub_name; // حساب العميل
                    cust_id = this.selectedFromAccount2.id; // حساب المورد
                }
            }
            if (this.selectedFromAccount.ac_id == 9) {
                type = 'purch'; // حساب المشتريات
                if (this.selectedToAccount2.sub_name == "" && this.showTo == true) {
                    this.presentToast('الرجاء اختيار حساب المورد', 'warning');
                }
                else if (this.selectedToAccount2.sub_name != "" && this.showTo == true) {
                    sub_name = this.selectedToAccount2.sub_name; // حساب المورد
                    cust_id = this.selectedToAccount2.id; // حساب المورد
                }
            }
            const modal = yield this.modalController.create({
                component: "AccountModalPage",
                componentProps: {
                    "type": type,
                    "sub_name": sub_name,
                    "cust_id": cust_id
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    //console.log(dataReturned )
                    this.doAfterDissmiss(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    doAfterDissmiss(data) {
        if (data.role == 'sales') {
            //console.log('sales' ,data.data)
            this.journal.j_details = this.journal.j_details + ", " + data.data[1] + ' , رقم :  ' + data.data[0].pay_id + ' بتاريخ ' + data.data[0].pay_date + ', إجمالي : ' + (+data.data[0].tot_pr - +data.data[0].discount);
        }
        else if (data.role == 'purch') {
            this.journal.j_details = this.journal.j_details + ", " + data.data[1] + ' , رقم :  ' + data.data[0].pay_id + ' بتاريخ ' + data.data[0].pay_date + ', إجمالي : ' + (+data.data[0].tot_pr - +data.data[0].discount);
        }
    }
    saveJournal() {
        //console.log('here we are',this.jdetail_toArr , this.jdetail_fromArr)
        this.api.saveJournal(this.journal).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                for (let i = 0; i < this.jdetail_fromArr.length; i++) {
                    const element = this.jdetail_fromArr[i];
                    element.j_id = data['message'];
                }
                for (let i = 0; i < this.jdetail_toArr.length; i++) {
                    const element = this.jdetail_toArr[i];
                    element.j_id = data['message'];
                }
                this.saveJournalFrom();
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    generateRandom2(role) {
        let da = new Date;
        //console.log(da)
        let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString() + da.getMinutes().toString() + da.getSeconds().toString() + da.getMilliseconds().toString() + role;
        return this.store_info.store_ref + randomsNumber;
    }
    saveJournalFrom() {
        this.api.saveJournalFrom(this.jdetail_fromArr).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.saveJournalTo();
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    saveJournalTo() {
        this.api.saveJournalTo(this.jdetail_toArr).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Created') {
                this.presentToast('تم الحفظ بنجاح', 'success');
                this.loadingController.dismiss();
                this.prepareInvo('saved');
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    performSync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
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
    saveLogHistory() {
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
                this.logHistoryArr = [];
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
    presentPopoverNotif(e) {
        //console.log('preent me', e)
        this.notifArr = [];
        this.showNotif = false;
        this.popoverNotif22.event = e;
        this.isOpenNotif = true;
    }
    didDissmisNotif() {
        this.isOpenNotif = false;
        //console.log('dismissOver') 
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
    // Method to check if the form is valid for enabling/disabling the save button
    isFormValid() {
        // Check if journal type is selected
        if (!this.jType || +this.jType === 0) {
            return false;
        }
        // Check if radio value is selected
        if (!this.radioVal || +this.radioVal === 0) {
            return false;
        }
        // Check if amount is entered and greater than 0
        if (!this.pay || +this.pay <= 0) {
            return false;
        }
        // Check if account is selected
        if (!this.selectedFromAccount || !this.selectedFromAccount.sub_name || this.selectedFromAccount.sub_name === '') {
            return false;
        }
        // Check if bank account is selected when not using cash (radioVal != 1)
        if (+this.radioVal !== 1 && (!this.selectedBankAccount || !this.selectedBankAccount.sub_name || this.selectedBankAccount.sub_name === '')) {
            return false;
        }
        // Check if journal details are provided
        if (!this.journal.j_details || this.journal.j_details.trim() === '') {
            return false;
        }
        // Check if journal date is provided
        if (!this.journal.j_date || this.journal.j_date === '') {
            return false;
        }
        return true;
    }
    // Method to reset the form fields
    clearForm() {
        var _a, _b;
        // Reset payment amount
        this.pay = 0;
        // Reset journal type and radio value
        this.jType = "1";
        this.radioVal = "1";
        // Reset selected accounts
        this.selectedFromAccount = {
            id: "",
            ac_id: "",
            sub_name: "",
            sub_type: "",
            sub_code: "",
            sub_balance: "",
            store_id: ((_a = this.store_info) === null || _a === void 0 ? void 0 : _a.id) || "",
            debit: "",
            credit: "",
            currentType: ""
        };
        this.selectedItem = {
            id: "",
            ac_id: "",
            sub_name: "",
            sub_type: "",
            sub_code: "",
            sub_balance: "",
            store_id: ((_b = this.store_info) === null || _b === void 0 ? void 0 : _b.id) || "",
            debit: "",
            credit: "",
            currentType: ""
        };
        this.selectedBankAccount = {
            id: null,
            ac_id: null,
            sub_name: null,
            sub_type: null,
            sub_code: null,
            sub_balance: null,
            store_id: null,
            debit: null,
            credit: null,
            currentType: null
        };
        // Reset item list
        this.itemList = [];
        // Reset journal details arrays
        this.jdetail_fromArr = [];
        this.jdetail_toArr = [];
        // Reset visibility flags
        this.showFrom = false;
        this.showTo = false;
        this.showFrom3 = false;
        this.showTo3 = false;
        this.showMe = null;
        // Reset colored message flags
        this.coloredMsgFrom = false;
        this.coloredMsgFrom3 = false;
        this.coloredMsgTo = false;
        this.coloredMsgTo3 = false;
        // Reset search term and account popover
        this.searchTerm = '';
        this.isAccountPopoverOpen = false;
        this.searchedAccounts = [];
        // Reinitialize the form with fresh data
        this.prepareInvo();
        // Reset balance data
        this.selectedAccountBalance = null;
        this.sourceAccountBalance = null;
    }
    // Load balance for selected account (الحساب)
    loadAccountBalance(accountId) {
        if (!accountId || !this.store_info || !this.year) {
            return;
        }
        this.loadingAccountBalance = true;
        this.selectedAccountBalance = null;
        this.api.getAccountBalance(accountId, this.store_info.id, this.year.id).subscribe((response) => {
            this.loadingAccountBalance = false;
            if (response.success) {
                this.selectedAccountBalance = response.data;
                console.log('Account balance loaded:', this.selectedAccountBalance);
                console.log('INVOICE AMOUNT:', this.selectedAccountBalance.invoice_amount);
                console.log('CURRENT BALANCE:', this.selectedAccountBalance.current_balance);
                console.log('CUSTOMER TOTALS:', this.selectedAccountBalance.customer_totals);
                console.log('TOTAL DEBITS:', this.selectedAccountBalance.journal_transactions.total_debits);
                console.log('Debug info:', this.selectedAccountBalance.debug_info);
            }
            else {
                console.error('Failed to load account balance:', response.message);
                this.selectedAccountBalance = null;
            }
        }, (error) => {
            this.loadingAccountBalance = false;
            console.error('Error loading account balance:', error);
            this.selectedAccountBalance = null;
        });
    }
    // Load balance for source account (المصدر)
    loadSourceBalance(accountId) {
        if (!accountId || !this.store_info || !this.year) {
            return;
        }
        this.loadingSourceBalance = true;
        this.sourceAccountBalance = null;
        this.api.getAccountBalance(accountId, this.store_info.id, this.year.id).subscribe((response) => {
            this.loadingSourceBalance = false;
            if (response.success) {
                this.sourceAccountBalance = response.data;
                console.log('Source balance loaded:', this.sourceAccountBalance);
                console.log('Source debug info:', this.sourceAccountBalance.debug_info);
            }
            else {
                console.error('Failed to load source balance:', response.message);
                this.sourceAccountBalance = null;
            }
        }, (error) => {
            this.loadingSourceBalance = false;
            console.error('Error loading source balance:', error);
            this.sourceAccountBalance = null;
        });
    }
    // Format balance for display
    formatBalance(balance) {
        if (!balance)
            return '0.00';
        const amount = parseFloat(balance.current_balance || 0).toFixed(2);
        const type = balance.balance_type === 'debit' ? 'مدين' : 'دائن';
        return `${amount} ${type}`;
    }
    // Get balance color for styling
    getBalanceColor(balance) {
        if (!balance)
            return 'medium';
        return balance.balance_type === 'debit' ? 'success' : 'danger';
    }
};
Cash2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__.StockServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_6__.CurrencyService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef }
];
Cash2Page.propDecorators = {
    popoverNotif22: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['popoverNotif22',] }]
};
Cash2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-cash2',
        template: _cash2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cash2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Cash2Page);



/***/ }),

/***/ 20489:
/*!**************************************************!*\
  !*** ./src/app/cash2/cash2.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/* ========================================\n   APPLE LIQUID GLASS DESIGN SYSTEM\n   Inspired by Apple's visionOS Liquid Glass\n======================================== */\n/* Core Liquid Glass Variables */\n:root {\n  /* Glass Material Properties */\n  --liquid-glass-bg: rgba(255, 255, 255, 0.15);\n  --liquid-glass-bg-light: rgba(255, 255, 255, 0.25);\n  --liquid-glass-bg-dark: rgba(0, 0, 0, 0.15);\n  --liquid-glass-border: rgba(255, 255, 255, 0.2);\n  --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  --liquid-glass-highlight: rgba(255, 255, 255, 0.4);\n  /* Blur and Effects */\n  --glass-blur: 20px;\n  --glass-blur-strong: 40px;\n  --glass-border-radius: 20px;\n  --glass-border-radius-small: 12px;\n  /* Dynamic Colors */\n  --glass-accent-primary: rgba(0, 122, 255, 0.8);\n  --glass-accent-success: rgba(52, 199, 89, 0.8);\n  --glass-accent-danger: rgba(255, 59, 48, 0.8);\n  /* Animation Properties */\n  --glass-transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-transition-fast: all 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-scale-hover: 1.02;\n  --glass-scale-active: 0.98;\n}\n/* Dark Mode Glass Variables */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --liquid-glass-bg: rgba(0, 0, 0, 0.25);\n    --liquid-glass-bg-light: rgba(255, 255, 255, 0.1);\n    --liquid-glass-bg-dark: rgba(0, 0, 0, 0.4);\n    --liquid-glass-border: rgba(255, 255, 255, 0.1);\n    --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n    --liquid-glass-highlight: rgba(255, 255, 255, 0.2);\n  }\n}\n/* ========================================\n   TRANSPARENT HEADER STYLES\n======================================== */\n/* Transparent Glass Header */\n.transparent-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n}\n.transparent-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  /* Glass material effect */\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%);\n  /* Subtle border only at bottom */\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  /* Glass reflection */\n}\n.transparent-header ion-toolbar::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n}\n.transparent-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n}\n/* Glass Menu Button */\n.glass-menu-button {\n  --background: rgba(255, 255, 255, 0.15);\n  --background-hover: rgba(255, 255, 255, 0.25);\n  --background-activated: rgba(255, 255, 255, 0.35);\n  --color: rgba(0, 0, 0, 0.8);\n  --border-radius: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: var(--glass-transition);\n}\n.glass-menu-button:hover {\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.glass-menu-button:active {\n  transform: translateY(0) scale(0.95);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.glass-menu-button ion-icon {\n  font-size: 1.4rem;\n  color: rgba(0, 0, 0, 0.8);\n  filter: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.5));\n}\n/* Modern Content with Glass Background */\n.modern-content {\n  --background: linear-gradient(135deg,\n    rgba(120, 119, 198, 0.1) 0%,\n    rgba(255, 255, 255, 0.05) 50%,\n    rgba(74, 144, 226, 0.1) 100%);\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  position: relative;\n  overflow: visible;\n  /* Changed from hidden to visible */\n}\n/* Animated Background Glass Effect */\n.modern-content::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);\n  animation: glassShimmer 8s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 0;\n}\n@keyframes glassShimmer {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.05);\n  }\n}\n/* Glass Loading State */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  gap: 2rem;\n  position: relative;\n  /* Glass loading background */\n}\n.loading-container::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  transform: translate(-50%, -50%);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  animation: loadingPulse 2s ease-in-out infinite;\n  z-index: 0;\n}\n@keyframes loadingPulse {\n  0%, 100% {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 0.3;\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.1);\n    opacity: 0.6;\n  }\n}\n/* Glass Loading Spinner */\n.loading-container ion-spinner {\n  position: relative;\n  z-index: 2;\n  filter: drop-shadow(0 0 15px rgba(0, 122, 255, 0.4));\n  /* Enhanced spinner with glass effect */\n}\n.loading-container ion-spinner::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  animation: spinnerGlow 1.5s ease-in-out infinite;\n  z-index: -1;\n}\n@keyframes spinnerGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 rgba(0, 122, 255, 0);\n  }\n  50% {\n    box-shadow: 0 0 20px rgba(0, 122, 255, 0.3);\n  }\n}\n.loading-text {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n  position: relative;\n  z-index: 2;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  /* Glass text shimmer */\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 122, 255, 0.8) 50%, rgba(0, 0, 0, 0.8) 100%);\n  background-size: 200% 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: textShimmer 2s ease-in-out infinite;\n}\n@keyframes textShimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n/* Main Container with Glass Environment */\n.main-container {\n  padding: 0.8rem;\n  padding-top: 65px;\n  /* Account for transparent header */\n  padding-bottom: 15px;\n  /* Minimal bottom padding */\n  max-width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: relative;\n  z-index: 1;\n}\n/* Form Container with Floating Effect */\n.form-container {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  max-width: 700px;\n  min-width: 400px;\n  position: relative;\n  z-index: 2;\n  margin-top: 0.5rem;\n  /* Disable floating animation to prevent layout issues */\n  animation: none;\n}\n@keyframes glassFloat {\n  0%, 100% {\n    transform: translateY(0px) rotateX(0deg);\n  }\n  50% {\n    transform: translateY(-8px) rotateX(1deg);\n  }\n}\n/* Liquid Glass Form Card */\n.form-card {\n  margin: 0;\n  border-radius: var(--glass-border-radius);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 0.5px solid rgba(128, 128, 128, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1), var(--liquid-glass-shadow), 0 0 0 1px var(--liquid-glass-highlight) inset, 0 1px 0 var(--liquid-glass-highlight) inset;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n  /* Changed from hidden to visible */\n  max-height: none;\n  /* Remove max-height constraint */\n  position: relative;\n  transition: var(--glass-transition);\n  /* 3D Perspective */\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  /* Glass Reflection Effect */\n  /* Specular Highlight */\n}\n.form-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius) var(--glass-border-radius) 0 0;\n  z-index: 1;\n}\n.form-card::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: radial-gradient(circle at center, var(--liquid-glass-highlight) 0%, transparent 50%);\n  opacity: 0;\n  pointer-events: none;\n  transition: var(--glass-transition);\n  z-index: 2;\n  animation: glassSpecular 4s ease-in-out infinite;\n}\n@keyframes glassSpecular {\n  0%, 100% {\n    opacity: 0;\n    transform: scale(0.8) rotate(0deg);\n  }\n  50% {\n    opacity: 0.1;\n    transform: scale(1.2) rotate(180deg);\n  }\n}\n/* Glass Card Hover Effects */\n.form-card:hover {\n  transform: translateY(-4px) scale(var(--glass-scale-hover));\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 15px rgba(0, 0, 0, 0.15), 0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--liquid-glass-highlight) inset, 0 1px 0 var(--liquid-glass-highlight) inset;\n  border-color: rgba(128, 128, 128, 0.4);\n}\n.form-card:hover::after {\n  opacity: 0.15;\n}\n/* Glass Card Header */\n.card-header {\n  background: var(--ion-color-primary) !important;\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: none;\n  border-bottom: 1px solid var(--liquid-glass-border);\n  padding: 0.6rem 1rem;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 3;\n  /* Glass Header Reflection */\n}\n.card-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.4;\n  pointer-events: none;\n}\n/* Header Row Layout */\n.header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n.currency-switcher-container {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n.card-title {\n  font-size: 1rem;\n  font-weight: 800;\n  margin: 0;\n  text-align: right;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 1;\n  flex: 1;\n  /* Glass Text Effect */\n  background: linear-gradient(135deg, white 0%, rgba(255, 255, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.compact-header {\n  --background: var(--ion-color-primary);\n  --color: white;\n  padding: 0.4rem 0.8rem;\n  border-bottom: none;\n  flex-shrink: 0;\n}\n.form-title {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  text-align: center;\n}\n.compact-content {\n  padding: 0.8rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: visible;\n  /* Remove scrolling */\n  max-height: none;\n  /* Remove height constraint */\n}\n/* Field Rows - Each field in separate row */\n.field-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  min-height: auto;\n}\n/* Right-aligned Labels */\n.field-label-right {\n  flex: 0 0 100px;\n  text-align: right;\n  direction: rtl;\n  font-size: 1rem !important;\n  font-weight: 700;\n  color: #000000;\n  margin: 0;\n  padding-right: 0.5rem;\n  padding-top: 0.4rem;\n  align-self: flex-start;\n}\n/* Premium Glass Segment Controls */\n.mini-segment {\n  flex: 1;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 1px solid var(--liquid-glass-border);\n  border-radius: var(--glass-border-radius-small);\n  padding: 0.2rem;\n  height: 2.8rem;\n  min-height: 2.8rem;\n  position: relative;\n  overflow: hidden;\n  /* Glass segment reflection */\n}\n.mini-segment::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.2;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-segment ion-segment-button {\n  --indicator-color: transparent;\n  --indicator-color-checked: transparent;\n  --color: rgba(0, 0, 0, 0.7);\n  --color-checked: white;\n  --background: transparent;\n  --background-checked: var(--glass-accent-primary);\n  border-radius: var(--glass-border-radius-small);\n  margin: 0.1rem;\n  min-height: 2rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass button effect */\n}\n.mini-segment ion-segment-button::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--liquid-glass-bg-light);\n  border-radius: var(--glass-border-radius-small);\n  opacity: 0;\n  transition: var(--glass-transition);\n  pointer-events: none;\n}\n.mini-segment ion-segment-button:hover::before {\n  opacity: 1;\n}\n.mini-segment ion-segment-button.segment-button-checked {\n  background: linear-gradient(135deg, var(--ion-color-primary) 0%, var(--ion-color-primary-shade) 100%);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow: 0 4px 15px rgba(var(--ion-color-primary-rgb), 0.3), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  transform: translateY(-1px);\n}\n.mini-segment ion-segment-button.segment-button-checked::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-segment ion-segment-button .segment-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n.mini-segment ion-segment-button .segment-content ion-icon {\n  font-size: 1.2rem;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));\n}\n.mini-segment ion-segment-button .segment-content span {\n  font-size: 1rem;\n  font-weight: 700;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n/* Glass Input Fields */\n.mini-input {\n  flex: 1;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  --padding-top: 0.6rem;\n  --padding-bottom: 0.6rem;\n  border: 0.5px solid rgba(128, 128, 128, 0.4);\n  border-radius: var(--glass-border-radius-small);\n  font-size: 1rem;\n  font-weight: 500;\n  min-height: 2.8rem;\n  max-height: 2.8rem;\n  transition: var(--glass-transition);\n  position: relative;\n  z-index: 2;\n  /* Glass reflection effect */\n}\n.mini-input::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  background: linear-gradient(135deg, var(--liquid-glass-highlight) 0%, transparent 50%);\n  opacity: 0.1;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small);\n}\n.mini-input:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15), 0 0 0 3px rgba(0, 122, 255, 0.1);\n  background: var(--liquid-glass-bg);\n}\n.mini-input.readonly-input {\n  --color: rgba(0, 0, 0, 0.8);\n  cursor: pointer;\n  background: var(--liquid-glass-bg);\n}\n.mini-input.readonly-input:hover {\n  transform: translateY(-1px);\n  background: var(--liquid-glass-bg-light);\n}\n.mini-input.amount-input {\n  font-size: 1.2rem;\n  font-weight: 700;\n  --color: var(--glass-accent-primary);\n  text-align: center;\n}\n.mini-input.amount-input:focus-within {\n  --color: rgba(0, 122, 255, 1);\n  text-shadow: 0 0 10px rgba(0, 122, 255, 0.3);\n}\n/* Glass Select Fields */\n.mini-select {\n  flex: 1;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  --padding-top: 0.6rem;\n  --padding-bottom: 0.6rem;\n  border: 0.5px solid rgba(128, 128, 128, 0.4);\n  border-radius: var(--glass-border-radius-small);\n  font-size: 1rem;\n  font-weight: 500;\n  min-height: 2.8rem;\n  max-height: 2.8rem;\n  transition: var(--glass-transition);\n  position: relative;\n  z-index: 2;\n}\n.mini-select:hover {\n  transform: translateY(-1px);\n  background: var(--liquid-glass-bg);\n  border-color: var(--glass-accent-primary);\n}\n.mini-select:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15), 0 0 0 3px rgba(0, 122, 255, 0.1);\n}\n/* Glass Textarea Fields */\n.mini-textarea {\n  flex: 1;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  --padding-top: 0.6rem;\n  --padding-bottom: 0.6rem;\n  border: 0.5px solid rgba(128, 128, 128, 0.4);\n  border-radius: var(--glass-border-radius-small);\n  font-size: 1rem;\n  font-weight: 500;\n  min-height: 2.8rem;\n  max-height: 2.8rem;\n  resize: none;\n  transition: var(--glass-transition);\n}\n.mini-textarea:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15), 0 0 0 3px rgba(0, 122, 255, 0.1);\n  background: var(--liquid-glass-bg);\n}\n/* Input with Icon */\n.input-with-icon {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  z-index: 2;\n}\n/* Field with Balance Container */\n.field-with-balance {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  position: relative;\n}\n/* Floating Glass Balance Displays */\n.balance-display {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.2rem 0.6rem;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  border-radius: var(--glass-border-radius-small);\n  border: 1px solid var(--liquid-glass-border);\n  min-height: 1.8rem;\n  max-height: 1.8rem;\n  font-size: 0.7rem;\n  direction: rtl;\n  text-align: right;\n  position: relative;\n  overflow: hidden;\n  transition: var(--glass-transition);\n  margin-top: 0.1rem;\n  z-index: 1;\n  width: 100%;\n  clear: both;\n  /* Reduce floating animation */\n  animation: none;\n  /* Glass reflection */\n  /* Dynamic highlight */\n}\n.balance-display::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.2;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.balance-display::after {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -50%;\n  width: 200%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent 0%, var(--liquid-glass-highlight) 50%, transparent 100%);\n  animation: balanceShimmer 2s ease-in-out infinite;\n  opacity: 0.6;\n}\n.balance-display:hover {\n  transform: translateY(-2px) scale(1.02);\n  background: var(--liquid-glass-bg-light);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n@keyframes balanceFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-2px);\n  }\n}\n@keyframes balanceShimmer {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n.balance-label {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 0.7rem;\n  position: relative;\n  z-index: 1;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.balance-amount {\n  font-weight: 800;\n  font-size: 0.8rem;\n  flex: 1;\n  text-align: left;\n  position: relative;\n  z-index: 1;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n  /* Dynamic color based on balance type */\n}\n.balance-amount.positive {\n  color: var(--glass-accent-success);\n  text-shadow: 0 0 10px rgba(52, 199, 89, 0.3);\n}\n.balance-amount.negative {\n  color: var(--glass-accent-danger);\n  text-shadow: 0 0 10px rgba(255, 59, 48, 0.3);\n}\n.balance-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: var(--glass-accent-primary);\n  font-size: 0.7rem;\n  position: relative;\n  z-index: 1;\n}\n.balance-loading ion-spinner {\n  width: 12px;\n  height: 12px;\n  filter: drop-shadow(0 0 5px rgba(0, 122, 255, 0.3));\n}\n.balance-loading span {\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.balance-error {\n  color: var(--glass-accent-danger);\n  font-size: 0.7rem;\n  font-style: italic;\n  font-weight: 600;\n  position: relative;\n  z-index: 1;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  filter: drop-shadow(0 0 5px rgba(255, 59, 48, 0.2));\n}\n.dropdown-icon {\n  position: absolute;\n  right: 0.4rem;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n/* Glass Button Row */\n.button-row {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  border-top: 1px solid var(--liquid-glass-border);\n  position: relative;\n  /* Glass divider effect */\n}\n.button-row::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 20%;\n  right: 20%;\n  height: 1px;\n  background: linear-gradient(90deg, transparent 0%, var(--liquid-glass-highlight) 50%, transparent 100%);\n  opacity: 0.5;\n}\n/* 3D Glass Buttons */\n.mini-btn {\n  flex: 0 0 130px;\n  border-radius: var(--glass-border-radius-small);\n  font-size: 1rem;\n  font-weight: 700;\n  min-height: 3.2rem;\n  max-height: 3.2rem;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  /* Base glass material */\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  /* 3D Depth Effect */\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  /* Glass reflection */\n  /* Interactive States */\n  /* Save Button - Primary Glass */\n  /* Clear Button - Secondary Glass */\n}\n.mini-btn::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-btn:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn:hover::before {\n  opacity: 0.5;\n}\n.mini-btn:active {\n  transform: translateY(-1px) scale(0.98);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.save-btn {\n  background: linear-gradient(135deg, var(--glass-accent-success) 0%, rgba(52, 199, 89, 0.9) 100%);\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  border-color: rgba(52, 199, 89, 0.3);\n  box-shadow: 0 6px 15px rgba(52, 199, 89, 0.3), 0 2px 4px rgba(52, 199, 89, 0.2), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.save-btn:hover {\n  background: linear-gradient(135deg, rgba(52, 199, 89, 0.9) 0%, #34c759 100%);\n  box-shadow: 0 12px 30px rgba(52, 199, 89, 0.4), 0 4px 8px rgba(52, 199, 89, 0.3), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.save-btn:disabled {\n  background: var(--liquid-glass-bg-dark);\n  color: rgba(255, 255, 255, 0.5);\n  text-shadow: none;\n  transform: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-border) inset;\n  cursor: not-allowed;\n}\n.mini-btn.save-btn:disabled:hover {\n  transform: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-border) inset;\n}\n.mini-btn.clear-btn {\n  background: var(--liquid-glass-bg-light);\n  color: rgba(0, 0, 0, 0.7);\n  border-color: var(--liquid-glass-border);\n}\n.mini-btn.clear-btn:hover {\n  background: var(--liquid-glass-bg);\n  color: rgba(0, 0, 0, 0.9);\n  border-color: var(--glass-accent-primary);\n}\n/* Popover Styles */\nion-popover {\n  --width: 320px;\n  --max-width: 90vw;\n  --height: 60vh;\n  --max-height: 400px;\n  --border-radius: 8px;\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  direction: rtl;\n}\nion-searchbar {\n  --background: #f8f9fa;\n  --color: #000000;\n  --placeholder-color: var(--ion-color-medium);\n  --border-radius: 6px;\n  --box-shadow: none;\n  --icon-color: var(--ion-color-primary);\n  padding: 0.4rem;\n  --min-height: 2.5rem;\n  direction: rtl;\n  text-align: right;\n}\nion-list {\n  --background: white;\n}\nion-item {\n  --background: white;\n  --color: #000000;\n  --border-color: #f1f3f4;\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  --min-height: 2.5rem;\n  font-size: 1rem;\n  direction: rtl;\n  text-align: right;\n}\nion-item:hover {\n  --background: #f8f9fa;\n}\nion-item:active {\n  --background: #e9ecef;\n}\n/* Select Interface Styling */\nion-select {\n  --placeholder-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n  font-size: 0.85rem;\n}\nion-select-option {\n  font-size: 0.85rem;\n  --color: var(--ion-color-dark);\n}\nion-action-sheet {\n  --button-color: var(--ion-color-dark);\n  --button-background: white;\n  --button-background-hover: #f8f9fa;\n  --button-background-focused: #f8f9fa;\n  --button-background-activated: #e9ecef;\n}\n/* Mobile Glass Responsive Design */\n@media (max-width: 768px) {\n  /* Mobile Glass Environment */\n  .form-container {\n    width: 92%;\n    min-width: 320px;\n    /* Reduced floating animation for mobile */\n    animation: none;\n  }\n\n  .main-container {\n    padding: 0.8rem;\n    padding-bottom: 20px;\n    /* Reduced bottom padding */\n    height: 100vh;\n    overflow-y: visible;\n    /* Ensure no page scrolling */\n  }\n\n  /* Mobile Glass Card */\n  .form-card {\n    /* Reduced glass blur for performance */\n    backdrop-filter: blur(15px);\n    -webkit-backdrop-filter: blur(15px);\n    border-radius: 16px;\n    /* Simplified hover effects for touch */\n  }\n  .form-card:hover {\n    transform: none;\n  }\n\n  /* Mobile Glass Content */\n  .compact-content {\n    padding: 0.6rem;\n    gap: 0.4rem;\n    overflow-y: visible;\n    /* Remove scrolling */\n    max-height: none;\n    /* Remove height constraints */\n  }\n\n  .field-row {\n    min-height: auto;\n    /* Allow natural height */\n    gap: 0.6rem;\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .field-label-right {\n    flex: none;\n    text-align: right;\n    font-size: 1rem !important;\n    margin-bottom: 0.3rem;\n  }\n\n  /* Mobile Glass Inputs */\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 2.8rem;\n    max-height: 2.8rem;\n    font-size: 1rem;\n    border-radius: 10px;\n    /* Enhanced touch target */\n  }\n  .mini-input:focus-within,\n.mini-select:focus-within,\n.mini-textarea:focus-within {\n    transform: none;\n    /* Remove translateY for mobile */\n    border-color: var(--glass-accent-primary);\n    box-shadow: 0 4px 15px rgba(0, 122, 255, 0.2), 0 0 0 2px rgba(0, 122, 255, 0.15);\n  }\n\n  /* Mobile Glass Segment */\n  .mini-segment {\n    height: 3.5rem;\n    min-height: 3.5rem;\n    border-radius: 10px;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 2rem;\n    font-size: 0.95rem;\n    border-radius: 8px;\n    /* Enhanced touch feedback */\n  }\n  .mini-segment ion-segment-button:active {\n    transform: scale(0.95);\n  }\n  .mini-segment ion-segment-button .segment-content {\n    gap: 0.4rem;\n  }\n  .mini-segment ion-segment-button .segment-content ion-icon {\n    font-size: 1.1rem;\n  }\n  .mini-segment ion-segment-button .segment-content span {\n    font-size: 0.95rem;\n  }\n\n  /* Mobile Glass Buttons */\n  .mini-btn {\n    min-height: 3.2rem;\n    max-height: 3.2rem;\n    font-size: 1rem;\n    flex: 0 0 120px;\n    border-radius: 10px;\n    /* Touch-optimized interactions */\n  }\n  .mini-btn:hover {\n    transform: scale(1.02);\n  }\n  .mini-btn:active {\n    transform: scale(0.98);\n  }\n\n  /* Mobile Glass Balance */\n  .balance-display {\n    min-height: 2.2rem;\n    padding: 0.6rem 0.8rem;\n    font-size: 0.85rem;\n    border-radius: 8px;\n    /* Reduced animation for mobile */\n    animation: none;\n  }\n  .balance-display:hover {\n    transform: scale(1.02);\n  }\n\n  .balance-label {\n    font-size: 0.8rem;\n  }\n\n  .balance-amount {\n    font-size: 0.9rem;\n  }\n\n  /* Mobile Button Row */\n  .button-row {\n    gap: 1rem;\n    margin-top: 1.2rem;\n    flex-direction: row;\n    /* Keep buttons in a row for better layout */\n    justify-content: space-around;\n  }\n  .button-row .mini-btn {\n    flex: 1;\n    max-width: 45%;\n    /* Limit button width */\n  }\n\n  /* Mobile Glass Background - Reduced for performance */\n  .modern-content::before {\n    animation-duration: 12s;\n    /* Slower animation */\n  }\n}\n@media (max-width: 480px) {\n  /* Extra Small Mobile Optimization */\n  .form-container {\n    width: 95%;\n    margin: 0 auto;\n  }\n\n  .main-container {\n    padding: 0.8rem;\n    padding-bottom: 70px;\n    /* Add space for footer visibility on small screens */\n  }\n\n  .compact-content {\n    padding: 1rem;\n    gap: 0.8rem;\n  }\n\n  .field-row {\n    min-height: 1rem;\n  }\n\n  .field-label-right {\n    font-size: 0.9rem !important;\n  }\n\n  /* Smaller glass components for extra small screens */\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 2.8rem;\n    max-height: 2.8rem;\n    font-size: 0.9rem;\n    border-radius: 8px;\n  }\n\n  .mini-segment {\n    height: 3rem;\n    min-height: 3rem;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 2.2rem;\n    font-size: 0.85rem;\n  }\n  .mini-segment ion-segment-button .segment-content ion-icon {\n    font-size: 1rem;\n  }\n  .mini-segment ion-segment-button .segment-content span {\n    font-size: 0.85rem;\n  }\n\n  .mini-btn {\n    min-height: 2.8rem;\n    max-height: 2.8rem;\n    font-size: 0.85rem;\n  }\n\n  .balance-display {\n    min-height: 2rem;\n    padding: 0.5rem 0.7rem;\n    font-size: 0.8rem;\n  }\n\n  .balance-label {\n    font-size: 0.75rem;\n  }\n\n  .balance-amount {\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 480px) {\n  .form-container {\n    width: 95%;\n    margin-top: 0.5rem;\n    /* Reduce top margin */\n  }\n\n  .main-container {\n    padding: 0.5rem;\n    padding-top: 60px;\n    padding-bottom: 20px;\n    /* Minimal bottom padding */\n    height: 100vh;\n    overflow: hidden;\n  }\n\n  .field-label-right {\n    flex: 0 0 80px;\n    font-size: 1rem !important;\n  }\n\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 3.2rem;\n    max-height: 3.2rem;\n    font-size: 1rem;\n  }\n\n  .mini-segment {\n    height: 3.2rem;\n    min-height: 3.2rem;\n  }\n\n  .mini-btn {\n    min-height: 3.8rem;\n    max-height: 3.8rem;\n    font-size: 1rem;\n    flex: 0 0 120px;\n  }\n\n  .balance-display {\n    min-height: 2rem;\n    padding: 0.6rem 0.8rem;\n    font-size: 0.9rem;\n  }\n\n  .balance-label {\n    font-size: 0.8rem;\n  }\n\n  .balance-amount {\n    font-size: 0.9rem;\n  }\n}\n/* Small Height Screens */\n@media (max-height: 600px) {\n  .main-container {\n    height: 100vh;\n    padding-top: 50px;\n    padding-bottom: 10px;\n    overflow: hidden;\n  }\n\n  .compact-content {\n    gap: 0.4rem;\n    padding: 0.8rem;\n    overflow-y: visible;\n  }\n\n  .field-row {\n    min-height: 3rem;\n  }\n\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 2.8rem;\n    max-height: 2.8rem;\n  }\n\n  .mini-segment {\n    height: 2.8rem;\n    min-height: 2.8rem;\n  }\n\n  .mini-btn {\n    min-height: 3rem;\n    max-height: 3rem;\n  }\n}\n/* Very Small Height Screens */\n@media (max-height: 500px) {\n  .compact-header {\n    padding: 0.4rem 0.8rem;\n  }\n\n  .form-title {\n    font-size: 0.95rem;\n  }\n\n  .compact-content {\n    padding: 0.6rem;\n    gap: 0.3rem;\n    overflow-y: visible;\n    max-height: none;\n  }\n\n  .main-container {\n    padding-top: 45px;\n  }\n\n  .field-row {\n    min-height: 2rem;\n  }\n\n  .field-label-right {\n    font-size: 0.95rem !important;\n    flex: 0 0 75px;\n  }\n\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 2rem;\n    max-height: 2.5rem;\n    font-size: 0.95rem;\n  }\n\n  .mini-segment {\n    height: 2.5rem;\n    min-height: 2rem;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 2rem;\n    font-size: 0.9rem;\n  }\n  .mini-segment ion-segment-button ion-icon {\n    font-size: 1rem;\n  }\n  .mini-segment ion-segment-button span {\n    font-size: 0.9rem;\n  }\n\n  .mini-btn {\n    min-height: 2.8rem;\n    max-height: 2.8rem;\n    font-size: 0.95rem;\n  }\n}\n/* Enhanced Dark Mode Glass Materials */\n@media (prefers-color-scheme: dark) {\n  .modern-content {\n    --background: linear-gradient(135deg,\n      rgba(30, 30, 30, 0.95) 0%,\n      rgba(0, 0, 0, 0.9) 50%,\n      rgba(20, 20, 40, 0.95) 100%);\n  }\n\n  .modern-content::before {\n    background: radial-gradient(circle at 20% 50%, rgba(60, 60, 120, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(40, 80, 140, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);\n  }\n\n  /* Dark Glass Form Card */\n  .form-card {\n    background: var(--liquid-glass-bg-dark);\n    border: 0.5px solid rgba(128, 128, 128, 0.2);\n    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5), 0 6px 12px rgba(0, 0, 0, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset;\n  }\n  .form-card:hover {\n    border-color: rgba(128, 128, 128, 0.3);\n  }\n\n  /* Dark Glass Header */\n  .card-header {\n    background: linear-gradient(135deg, rgba(0, 122, 255, 0.6) 0%, rgba(0, 100, 200, 0.8) 100%);\n    border-bottom-color: rgba(255, 255, 255, 0.08);\n  }\n\n  .card-title {\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  /* Dark Glass Inputs */\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    background: rgba(0, 0, 0, 0.3);\n    border: 0.5px solid rgba(128, 128, 128, 0.3);\n    --color: rgba(255, 255, 255, 0.9);\n    --placeholder-color: rgba(255, 255, 255, 0.4);\n  }\n  .mini-input:focus-within,\n.mini-select:focus-within,\n.mini-textarea:focus-within {\n    background: rgba(0, 0, 0, 0.2);\n    border-color: rgba(0, 122, 255, 0.8);\n    box-shadow: 0 8px 25px rgba(0, 122, 255, 0.2), 0 0 0 3px rgba(0, 122, 255, 0.15);\n  }\n  .mini-input.readonly-input:hover,\n.mini-select.readonly-input:hover,\n.mini-textarea.readonly-input:hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n  .mini-input.amount-input,\n.mini-select.amount-input,\n.mini-textarea.amount-input {\n    --color: rgba(0, 180, 255, 0.9);\n  }\n  .mini-input.amount-input:focus-within,\n.mini-select.amount-input:focus-within,\n.mini-textarea.amount-input:focus-within {\n    --color: rgba(0, 180, 255, 1);\n    text-shadow: 0 0 15px rgba(0, 180, 255, 0.4);\n  }\n\n  /* Dark Glass Segment */\n  .mini-segment {\n    background: rgba(0, 0, 0, 0.3);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n\n  .mini-segment ion-segment-button {\n    --color: rgba(255, 255, 255, 0.7);\n    --color-checked: white;\n  }\n  .mini-segment ion-segment-button.segment-button-checked {\n    background: linear-gradient(135deg, var(--ion-color-primary) 0%, var(--ion-color-primary-shade) 100%);\n    box-shadow: 0 4px 15px rgba(var(--ion-color-primary-rgb), 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;\n  }\n\n  /* Dark Glass Buttons */\n  .mini-btn {\n    background: rgba(0, 0, 0, 0.3);\n    border-color: rgba(255, 255, 255, 0.1);\n    color: rgba(255, 255, 255, 0.9);\n  }\n  .mini-btn.save-btn {\n    background: linear-gradient(135deg, rgba(52, 199, 89, 0.7) 0%, rgba(40, 180, 70, 0.8) 100%);\n    border-color: rgba(52, 199, 89, 0.3);\n    color: white;\n  }\n  .mini-btn.save-btn:hover {\n    background: linear-gradient(135deg, rgba(52, 199, 89, 0.8) 0%, rgba(40, 180, 70, 0.9) 100%);\n  }\n  .mini-btn.save-btn:disabled {\n    background: rgba(0, 0, 0, 0.4);\n    color: rgba(255, 255, 255, 0.3);\n    border-color: rgba(255, 255, 255, 0.05);\n  }\n  .mini-btn.clear-btn {\n    background: rgba(0, 0, 0, 0.2);\n    color: rgba(255, 255, 255, 0.7);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n  .mini-btn.clear-btn:hover {\n    background: rgba(0, 0, 0, 0.3);\n    color: rgba(255, 255, 255, 0.9);\n    border-color: rgba(0, 122, 255, 0.5);\n  }\n\n  /* Dark Glass Balance Displays */\n  .balance-display {\n    background: rgba(0, 0, 0, 0.3);\n    border-color: rgba(255, 255, 255, 0.08);\n  }\n  .balance-display:hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n\n  .balance-label {\n    color: rgba(255, 255, 255, 0.7);\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  .balance-loading span {\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  .balance-error {\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  /* Dark Glass Field Labels */\n  .field-label-right {\n    color: rgba(255, 255, 255, 0.9);\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  }\n\n  /* Dark Loading State */\n  .loading-text {\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(0, 180, 255, 0.9) 50%, rgba(255, 255, 255, 0.8) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n}\n/* Focus States */\n.mini-input:focus-within,\n.mini-select:focus-within,\n.mini-textarea:focus-within {\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 0 0 1px rgba(var(--ion-color-primary-rgb), 0.2);\n}\n/* Touch Optimization */\n@media (hover: none) and (pointer: coarse) {\n  .mini-input,\n.mini-select,\n.mini-textarea,\n.mini-btn {\n    min-height: 32px;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 30px;\n  }\n\n  .field-row {\n    min-height: 36px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QkFBQTtJQUNBLDRDQUFBO0VBeExOOztFQTZMQSx1QkFBQTtFQUNBO0lBQ0UsOEJBQUE7SUFDQSxzQ0FBQTtFQTFMRjs7RUE2TEE7SUFDRSxpQ0FBQTtJQUNBLHNCQUFBO0VBMUxGO0VBNExFO0lBQ0UscUdBQUE7SUFLQSx3R0FDRTtFQS9MTjs7RUFvTUEsdUJBQUE7RUFDQTtJQUNFLDhCQUFBO0lBQ0Esc0NBQUE7SUFDQSwrQkFBQTtFQWpNRjtFQW1NRTtJQUNFLDJGQUFBO0lBS0Esb0NBQUE7SUFDQSxZQUFBO0VBck1KO0VBdU1JO0lBQ0UsMkZBQUE7RUFyTU47RUE0TUk7SUFDRSw4QkFBQTtJQUNBLCtCQUFBO0lBQ0EsdUNBQUE7RUExTU47RUE4TUU7SUFDRSw4QkFBQTtJQUNBLCtCQUFBO0lBQ0Esc0NBQUE7RUE1TUo7RUE4TUk7SUFDRSw4QkFBQTtJQUNBLCtCQUFBO0lBQ0Esb0NBQUE7RUE1TU47O0VBaU5BLGdDQUFBO0VBQ0E7SUFDRSw4QkFBQTtJQUNBLHVDQUFBO0VBOU1GO0VBZ05FO0lBQ0UsOEJBQUE7RUE5TUo7O0VBa05BO0lBQ0UsK0JBQUE7SUFDQSx5Q0FBQTtFQS9NRjs7RUFrTkE7SUFDRSx5Q0FBQTtFQS9NRjs7RUFrTkE7SUFDRSx5Q0FBQTtFQS9NRjs7RUFrTkEsNEJBQUE7RUFDQTtJQUNFLCtCQUFBO0lBQ0EseUNBQUE7RUEvTUY7O0VBa05BLHVCQUFBO0VBQ0E7SUFDRSwwSEFBQTtJQU1BLDZCQUFBO0lBQ0Esb0NBQUE7SUFDQSxxQkFBQTtFQXBORjtBQUNGO0FBdU5BLGlCQUFBO0FBQ0E7OztFQUdFLHNDQUFBO0VBQ0EsNkRBQUE7QUFyTkY7QUF3TkEsdUJBQUE7QUFDQTtFQUNFOzs7O0lBSUUsZ0JBQUE7RUFyTkY7O0VBd05BO0lBQ0UsZ0JBQUE7RUFyTkY7O0VBd05BO0lBQ0UsZ0JBQUE7RUFyTkY7QUFDRiIsImZpbGUiOiJjYXNoMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBBUFBMRSBMSVFVSUQgR0xBU1MgREVTSUdOIFNZU1RFTVxuICAgSW5zcGlyZWQgYnkgQXBwbGUncyB2aXNpb25PUyBMaXF1aWQgR2xhc3Ncbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogQ29yZSBMaXF1aWQgR2xhc3MgVmFyaWFibGVzICovXG46cm9vdCB7XG4gIC8qIEdsYXNzIE1hdGVyaWFsIFByb3BlcnRpZXMgKi9cbiAgLS1saXF1aWQtZ2xhc3MtYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAtLWxpcXVpZC1nbGFzcy1iZy1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtLWxpcXVpZC1nbGFzcy1ib3JkZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgLS1saXF1aWQtZ2xhc3Mtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBcbiAgLyogQmx1ciBhbmQgRWZmZWN0cyAqL1xuICAtLWdsYXNzLWJsdXI6IDIwcHg7XG4gIC0tZ2xhc3MtYmx1ci1zdHJvbmc6IDQwcHg7XG4gIC0tZ2xhc3MtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsOiAxMnB4O1xuICBcbiAgLyogRHluYW1pYyBDb2xvcnMgKi9cbiAgLS1nbGFzcy1hY2NlbnQtcHJpbWFyeTogcmdiYSgwLCAxMjIsIDI1NSwgMC44KTtcbiAgLS1nbGFzcy1hY2NlbnQtc3VjY2VzczogcmdiYSg1MiwgMTk5LCA4OSwgMC44KTtcbiAgLS1nbGFzcy1hY2NlbnQtZGFuZ2VyOiByZ2JhKDI1NSwgNTksIDQ4LCAwLjgpO1xuICBcbiAgLyogQW5pbWF0aW9uIFByb3BlcnRpZXMgKi9cbiAgLS1nbGFzcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gIC0tZ2xhc3MtdHJhbnNpdGlvbi1mYXN0OiBhbGwgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAtLWdsYXNzLXNjYWxlLWhvdmVyOiAxLjAyO1xuICAtLWdsYXNzLXNjYWxlLWFjdGl2ZTogMC45ODtcbn1cblxuLyogRGFyayBNb2RlIEdsYXNzIFZhcmlhYmxlcyAqL1xuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICA6cm9vdCB7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmc6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtLWxpcXVpZC1nbGFzcy1iZy1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgLS1saXF1aWQtZ2xhc3Mtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBUUkFOU1BBUkVOVCBIRUFERVIgU1RZTEVTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qIFRyYW5zcGFyZW50IEdsYXNzIEhlYWRlciAqL1xuLnRyYW5zcGFyZW50LWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1taW4taGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICBcbiAgICAvKiBHbGFzcyBtYXRlcmlhbCBlZmZlY3QgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpIDAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDEwMCVcbiAgICApO1xuICAgIFxuICAgIC8qIFN1YnRsZSBib3JkZXIgb25seSBhdCBib3R0b20gKi9cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIFxuICAgIC8qIEdsYXNzIHJlZmxlY3Rpb24gKi9cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTgwZGVnLFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgMCUsXG4gICAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICAgICk7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zcGFyZW50LXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci13aWR0aDogMDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC0tbWluLWhlaWdodDogNjBweDtcbn1cblxuLyogR2xhc3MgTWVudSBCdXR0b24gKi9cbi5nbGFzcy1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIFxuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgIDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSk7XG4gIH1cbn1cblxuLyogTW9kZXJuIENvbnRlbnQgd2l0aCBHbGFzcyBCYWNrZ3JvdW5kICovXG4ubW9kZXJuLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgIHJnYmEoMTIwLCAxMTksIDE5OCwgMC4xKSAwJSwgXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSA1MCUsIFxuICAgIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpIDEwMCUpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogQ2hhbmdlZCBmcm9tIGhpZGRlbiB0byB2aXNpYmxlICovXG59XG5cbi8qIEFuaW1hdGVkIEJhY2tncm91bmQgR2xhc3MgRWZmZWN0ICovXG4ubW9kZXJuLWNvbnRlbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgNTAlLCByZ2JhKDEyMCwgMTE5LCAxOTgsIDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQwJSA4MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIGFuaW1hdGlvbjogZ2xhc3NTaGltbWVyIDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMDtcbn1cblxuQGtleWZyYW1lcyBnbGFzc1NoaW1tZXIge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuMzsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjY7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cbn1cblxuLyogR2xhc3MgTG9hZGluZyBTdGF0ZSAqL1xuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNTB2aDtcbiAgZ2FwOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAvKiBHbGFzcyBsb2FkaW5nIGJhY2tncm91bmQgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICAgIGFuaW1hdGlvbjogbG9hZGluZ1B1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nUHVsc2Uge1xuICAwJSwgMTAwJSB7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuICA1MCUgeyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuXG4vKiBHbGFzcyBMb2FkaW5nIFNwaW5uZXIgKi9cbi5sb2FkaW5nLWNvbnRhaW5lciBpb24tc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjQpKTtcbiAgXG4gIC8qIEVuaGFuY2VkIHNwaW5uZXIgd2l0aCBnbGFzcyBlZmZlY3QgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICByaWdodDogLTEwcHg7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gICAgYW5pbWF0aW9uOiBzcGlubmVyR2xvdyAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lckdsb3cge1xuICAwJSwgMTAwJSB7IFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMTIyLCAyNTUsIDApO1xuICB9XG4gIDUwJSB7IFxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMyk7XG4gIH1cbn1cblxuLmxvYWRpbmctdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIFxuICAvKiBHbGFzcyB0ZXh0IHNoaW1tZXIgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgIHJnYmEoMCwgMCwgMCwgMC44KSAwJSxcbiAgICByZ2JhKDAsIDEyMiwgMjU1LCAwLjgpIDUwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBhbmltYXRpb246IHRleHRTaGltbWVyIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHRleHRTaGltbWVyIHtcbiAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH1cbn1cblxuLyogTWFpbiBDb250YWluZXIgd2l0aCBHbGFzcyBFbnZpcm9ubWVudCAqL1xuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogNjVweDsgLyogQWNjb3VudCBmb3IgdHJhbnNwYXJlbnQgaGVhZGVyICovXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4OyAvKiBNaW5pbWFsIGJvdHRvbSBwYWRkaW5nICovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBGb3JtIENvbnRhaW5lciB3aXRoIEZsb2F0aW5nIEVmZmVjdCAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDYwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIFxuICAvKiBEaXNhYmxlIGZsb2F0aW5nIGFuaW1hdGlvbiB0byBwcmV2ZW50IGxheW91dCBpc3N1ZXMgKi9cbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIGdsYXNzRmxvYXQge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZVgoMGRlZyk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZVgoMWRlZyk7IH1cbn1cblxuLyogTGlxdWlkIEdsYXNzIEZvcm0gQ2FyZCAqL1xuLmZvcm0tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICB2YXIoLS1saXF1aWQtZ2xhc3Mtc2hhZG93KSxcbiAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQsXG4gICAgMCAxcHggMCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIENoYW5nZWQgZnJvbSBoaWRkZW4gdG8gdmlzaWJsZSAqL1xuICBtYXgtaGVpZ2h0OiBub25lOyAvKiBSZW1vdmUgbWF4LWhlaWdodCBjb25zdHJhaW50ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIFxuICAvKiAzRCBQZXJzcGVjdGl2ZSAqL1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBcbiAgLyogR2xhc3MgUmVmbGVjdGlvbiBFZmZlY3QgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cykgdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cykgMCAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC8qIFNwZWN1bGFyIEhpZ2hsaWdodCAqL1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTUwJTtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGhlaWdodDogMjAwJTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICBjaXJjbGUgYXQgY2VudGVyLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCA1MCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gICAgei1pbmRleDogMjtcbiAgICBhbmltYXRpb246IGdsYXNzU3BlY3VsYXIgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBnbGFzc1NwZWN1bGFyIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgcm90YXRlKDBkZWcpOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuMTsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSgxODBkZWcpOyB9XG59XG5cbi8qIEdsYXNzIENhcmQgSG92ZXIgRWZmZWN0cyAqL1xuLmZvcm0tY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSh2YXIoLS1nbGFzcy1zY2FsZS1ob3ZlcikpO1xuICBib3gtc2hhZG93OiBcbiAgICAwIDE1cHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgIDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQsXG4gICAgMCAxcHggMCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNCk7XG4gIFxuICAmOjphZnRlciB7XG4gICAgb3BhY2l0eTogMC4xNTtcbiAgfVxufVxuXG4vKiBHbGFzcyBDYXJkIEhlYWRlciAqL1xuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICBcbiAgLyogR2xhc3MgSGVhZGVyIFJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLyogSGVhZGVyIFJvdyBMYXlvdXQgKi9cbi5oZWFkZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY3VycmVuY3ktc3dpdGNoZXItY29udGFpbmVyIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW46IDA7XG4gdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZmxleDogMTtcbiAgXG4gIC8qIEdsYXNzIFRleHQgRWZmZWN0ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMzVkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAwJSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgMTAwJVxuICApO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59XG5cbi5jb21wYWN0LWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbXBhY3QtY29udGVudCB7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gZ2FwOiAwLjNyZW07XG4gIG92ZXJmbG93LXk6IHZpc2libGU7IC8qIFJlbW92ZSBzY3JvbGxpbmcgKi9cbiAgbWF4LWhlaWdodDogbm9uZTsgLyogUmVtb3ZlIGhlaWdodCBjb25zdHJhaW50ICovXG59XG5cbi8qIEZpZWxkIFJvd3MgLSBFYWNoIGZpZWxkIGluIHNlcGFyYXRlIHJvdyAqL1xuLmZpZWxkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDAuOHJlbTtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgLy8gcGFkZGluZzogMC40cmVtIDA7XG4gIC8vIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbn1cblxuLyogUmlnaHQtYWxpZ25lZCBMYWJlbHMgKi9cbi5maWVsZC1sYWJlbC1yaWdodCB7XG4gIGZsZXg6IDAgMCAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLXRvcDogMC40cmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4vKiBQcmVtaXVtIEdsYXNzIFNlZ21lbnQgQ29udHJvbHMgKi9cbi5taW5pLXNlZ21lbnQge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBoZWlnaHQ6IDIuOHJlbTtcbiAgbWluLWhlaWdodDogMi44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAvKiBHbGFzcyBzZWdtZW50IHJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgMCAwO1xuICB9XG59XG5cbi5taW5pLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgbWFyZ2luOiAwLjFyZW07XG4gIG1pbi1oZWlnaHQ6IDJyZW07XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gIC8qIEdsYXNzIGJ1dHRvbiBlZmZlY3QgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgJjpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEzNWRlZyxcbiAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwJSxcbiAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDRweCAxNXB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4zKSxcbiAgICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTgwZGVnLFxuICAgICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICAgKTtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgMCAwO1xuICAgIH1cbiAgfVxuICBcbiAgLnNlZ21lbnQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcbiAgICB9XG4gICAgXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgfVxuICB9XG59XG5cbi8qIEdsYXNzIElucHV0IEZpZWxkcyAqL1xuLm1pbmktaW5wdXQge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjhyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuOHJlbTtcbiAgLS1wYWRkaW5nLXRvcDogMC42cmVtO1xuICAtLXBhZGRpbmctYm90dG9tOiAwLjZyZW07XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4taGVpZ2h0OiAyLjhyZW07XG4gIG1heC1oZWlnaHQ6IDIuOHJlbTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgXG4gIC8qIEdsYXNzIHJlZmxlY3Rpb24gZWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDUwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICB9XG4gIFxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA4cHggMjVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjE1KSxcbiAgICAgIDAgMCAwIDNweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjEpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIH1cbiAgXG4gICYucmVhZG9ubHktaW5wdXQge1xuICAgIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gICAgfVxuICB9XG4gIFxuICAmLmFtb3VudC1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAtLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgIC0tY29sb3I6IHJnYmEoMCwgMTIyLCAyNTUsIDEpO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi8qIEdsYXNzIFNlbGVjdCBGaWVsZHMgKi9cbi5taW5pLXNlbGVjdCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuOHJlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC44cmVtO1xuICAtLXBhZGRpbmctdG9wOiAwLjZyZW07XG4gIC0tcGFkZGluZy1ib3R0b206IDAuNnJlbTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi1oZWlnaHQ6IDIuOHJlbTtcbiAgbWF4LWhlaWdodDogMi44cmVtO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gIH1cbiAgXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDhweCAyNXB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMTUpLFxuICAgICAgMCAwIDAgM3B4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMSk7XG4gIH1cbn1cblxuLyogR2xhc3MgVGV4dGFyZWEgRmllbGRzICovXG4ubWluaS10ZXh0YXJlYSB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuOHJlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC44cmVtO1xuICAtLXBhZGRpbmctdG9wOiAwLjZyZW07XG4gIC0tcGFkZGluZy1ib3R0b206IDAuNnJlbTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi1oZWlnaHQ6IDIuOHJlbTtcbiAgbWF4LWhlaWdodDogMi44cmVtO1xuICByZXNpemU6IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBcbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDI1cHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xNSksXG4gICAgICAwIDAgMCAzcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICB9XG59XG5cbi8qIElucHV0IHdpdGggSWNvbiAqL1xuLmlucHV0LXdpdGgtaWNvbiB7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xufVxuXG4vKiBGaWVsZCB3aXRoIEJhbGFuY2UgQ29udGFpbmVyICovXG4uZmllbGQtd2l0aC1iYWxhbmNlIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogRmxvYXRpbmcgR2xhc3MgQmFsYW5jZSBEaXNwbGF5cyAqL1xuLmJhbGFuY2UtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xuICBwYWRkaW5nOiAwLjJyZW0gMC42cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gIG1pbi1oZWlnaHQ6IDEuOHJlbTtcbiAgbWF4LWhlaWdodDogMS44cmVtO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBtYXJnaW4tdG9wOiAwLjFyZW07XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBjbGVhcjogYm90aDtcbiAgXG4gIC8qIFJlZHVjZSBmbG9hdGluZyBhbmltYXRpb24gKi9cbiAgYW5pbWF0aW9uOiBub25lO1xuICBcbiAgLyogR2xhc3MgcmVmbGVjdGlvbiAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKSB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKSAwIDA7XG4gIH1cbiAgXG4gIC8qIER5bmFtaWMgaGlnaGxpZ2h0ICovXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMnB4O1xuICAgIGxlZnQ6IC01MCU7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgOTBkZWcsXG4gICAgICB0cmFuc3BhcmVudCAwJSxcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDUwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIGFuaW1hdGlvbjogYmFsYW5jZVNoaW1tZXIgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUoMS4wMik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJhbGFuY2VGbG9hdCB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgYmFsYW5jZVNoaW1tZXIge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IG9wYWNpdHk6IDA7IH1cbiAgNTAlIHsgb3BhY2l0eTogMC42OyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IG9wYWNpdHk6IDA7IH1cbn1cblxuLmJhbGFuY2UtbGFiZWwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmJhbGFuY2UtYW1vdW50IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgXG4gIC8qIER5bmFtaWMgY29sb3IgYmFzZWQgb24gYmFsYW5jZSB0eXBlICovXG4gICYucG9zaXRpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtc3VjY2Vzcyk7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoNTIsIDE5OSwgODksIDAuMyk7XG4gIH1cbiAgXG4gICYubmVnYXRpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtZGFuZ2VyKTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyNTUsIDU5LCA0OCwgMC4zKTtcbiAgfVxufVxuXG4uYmFsYW5jZS1sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNyZW07XG4gIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIFxuICBpb24tc3Bpbm5lciB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjMpKTtcbiAgfVxuICBcbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxufVxuXG4uYmFsYW5jZS1lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IHJnYmEoMjU1LCA1OSwgNDgsIDAuMikpO1xufVxuXG4uZHJvcGRvd24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNHJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIEdsYXNzIEJ1dHRvbiBSb3cgKi9cbi5idXR0b24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICAgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC8qIEdsYXNzIGRpdmlkZXIgZWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAyMCU7XG4gICAgcmlnaHQ6IDIwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA5MGRlZyxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgNTAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi8qIDNEIEdsYXNzIEJ1dHRvbnMgKi9cbi5taW5pLWJ0biB7XG4gIGZsZXg6IDAgMCAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWluLWhlaWdodDogMy4ycmVtO1xuICBtYXgtaGVpZ2h0OiAzLjJyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIFxuICAvKiBCYXNlIGdsYXNzIG1hdGVyaWFsICovXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBcbiAgLyogM0QgRGVwdGggRWZmZWN0ICovXG4gIGJveC1zaGFkb3c6IFxuICAgIDAgNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgXG4gIC8qIEdsYXNzIHJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgMCAwO1xuICB9XG4gIFxuICAvKiBJbnRlcmFjdGl2ZSBTdGF0ZXMgKi9cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHNjYWxlKDEuMDIpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gICAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cbiAgXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgc2NhbGUoMC45OCk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICB9XG4gIFxuICAvKiBTYXZlIEJ1dHRvbiAtIFByaW1hcnkgR2xhc3MgKi9cbiAgJi5zYXZlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTM1ZGVnLFxuICAgICAgdmFyKC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3MpIDAlLFxuICAgICAgcmdiYSg1MiwgMTk5LCA4OSwgMC45KSAxMDAlXG4gICAgKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxOTksIDg5LCAwLjMpO1xuICAgIFxuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA2cHggMTVweCByZ2JhKDUyLCAxOTksIDg5LCAwLjMpLFxuICAgICAgMCAycHggNHB4IHJnYmEoNTIsIDE5OSwgODksIDAuMiksXG4gICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDEzNWRlZyxcbiAgICAgICAgcmdiYSg1MiwgMTk5LCA4OSwgMC45KSAwJSxcbiAgICAgICAgcmdiYSg1MiwgMTk5LCA4OSwgMSkgMTAwJVxuICAgICAgKTtcbiAgICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwIDEycHggMzBweCByZ2JhKDUyLCAxOTksIDg5LCAwLjQpLFxuICAgICAgICAwIDRweCA4cHggcmdiYSg1MiwgMTk5LCA4OSwgMC4zKSxcbiAgICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICAgIH1cbiAgICBcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1kYXJrKTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcikgaW5zZXQ7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgICAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKSBpbnNldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIENsZWFyIEJ1dHRvbiAtIFNlY29uZGFyeSBHbGFzcyAqL1xuICAmLmNsZWFyLWJ0biB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0KTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgIH1cbiAgfVxufVxuXG4vKiBQb3BvdmVyIFN0eWxlcyAqL1xuaW9uLXBvcG92ZXIge1xuICAtLXdpZHRoOiAzMjBweDtcbiAgLS1tYXgtd2lkdGg6IDkwdnc7XG4gIC0taGVpZ2h0OiA2MHZoO1xuICAtLW1heC1oZWlnaHQ6IDQwMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIC0tY29sb3I6ICMwMDAwMDA7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMC40cmVtO1xuICAtLW1pbi1oZWlnaHQ6IDIuNXJlbTtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tbGlzdCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzAwMDAwMDtcbiAgLS1ib3JkZXItY29sb3I6ICNmMWYzZjQ7XG4gIC0tcGFkZGluZy1zdGFydDogMXJlbTtcbiAgLS1wYWRkaW5nLWVuZDogMXJlbTtcbiAgLS1taW4taGVpZ2h0OiAyLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBcbiAgJjpob3ZlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICB9XG4gIFxuICAmOmFjdGl2ZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTllY2VmO1xuICB9XG59XG5cbi8qIFNlbGVjdCBJbnRlcmZhY2UgU3R5bGluZyAqL1xuaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuaW9uLWFjdGlvbi1zaGVldCB7XG4gIC0tYnV0dG9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tYnV0dG9uLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyOiAjZjhmOWZhO1xuICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmOGY5ZmE7XG4gIC0tYnV0dG9uLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZTllY2VmO1xufVxuXG4vKiBNb2JpbGUgR2xhc3MgUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAvKiBNb2JpbGUgR2xhc3MgRW52aXJvbm1lbnQgKi9cbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTIlO1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgLyogUmVkdWNlZCBmbG9hdGluZyBhbmltYXRpb24gZm9yIG1vYmlsZSAqL1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgLy8gcGFkZGluZy10b3A6IDYwcHg7IC8qIFJlZHVjZWQgdG9wIHBhZGRpbmcgKi9cbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDsgLyogUmVkdWNlZCBib3R0b20gcGFkZGluZyAqL1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTsgLyogRW5zdXJlIG5vIHBhZ2Ugc2Nyb2xsaW5nICovXG4gIH1cbiAgXG4gIC8qIE1vYmlsZSBHbGFzcyBDYXJkICovXG4gIC5mb3JtLWNhcmQge1xuICAgIC8qIFJlZHVjZWQgZ2xhc3MgYmx1ciBmb3IgcGVyZm9ybWFuY2UgKi9cbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBcbiAgICAvKiBTaW1wbGlmaWVkIGhvdmVyIGVmZmVjdHMgZm9yIHRvdWNoICovXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAvKiBNb2JpbGUgR2xhc3MgQ29udGVudCAqL1xuICAuY29tcGFjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgZ2FwOiAwLjRyZW07XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTsgLyogUmVtb3ZlIHNjcm9sbGluZyAqL1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7IC8qIFJlbW92ZSBoZWlnaHQgY29uc3RyYWludHMgKi9cbiAgfVxuICBcbiAgLmZpZWxkLXJvdyB7XG4gICAgbWluLWhlaWdodDogYXV0bzsgLyogQWxsb3cgbmF0dXJhbCBoZWlnaHQgKi9cbiAgICBnYXA6IDAuNnJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIC8vIHBhZGRpbmc6IDAuNHJlbSAwO1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbiAgfVxuICBcbiAgLmZpZWxkLWxhYmVsLXJpZ2h0IHtcbiAgICBmbGV4OiBub25lO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIElucHV0cyAqL1xuICAubWluaS1pbnB1dCxcbiAgLm1pbmktc2VsZWN0LFxuICAubWluaS10ZXh0YXJlYSB7XG4gICAgbWluLWhlaWdodDogMi44cmVtO1xuICAgIG1heC1oZWlnaHQ6IDIuOHJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBcbiAgICAvKiBFbmhhbmNlZCB0b3VjaCB0YXJnZXQgKi9cbiAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7IC8qIFJlbW92ZSB0cmFuc2xhdGVZIGZvciBtb2JpbGUgKi9cbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgICAgYm94LXNoYWRvdzogXG4gICAgICAgIDAgNHB4IDE1cHggcmdiYSgwLCAxMjIsIDI1NSwgMC4yKSxcbiAgICAgICAgMCAwIDAgMnB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMTUpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIFNlZ21lbnQgKi9cbiAgLm1pbmktc2VnbWVudCB7XG4gICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgbWluLWhlaWdodDogMy41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBtaW4taGVpZ2h0OiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgXG4gICAgLyogRW5oYW5jZWQgdG91Y2ggZmVlZGJhY2sgKi9cbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cbiAgICBcbiAgICAuc2VnbWVudC1jb250ZW50IHtcbiAgICAgIGdhcDogMC40cmVtO1xuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIEJ1dHRvbnMgKi9cbiAgLm1pbmktYnRuIHtcbiAgICBtaW4taGVpZ2h0OiAzLjJyZW07XG4gICAgbWF4LWhlaWdodDogMy4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmbGV4OiAwIDAgMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBcbiAgICAvKiBUb3VjaC1vcHRpbWl6ZWQgaW50ZXJhY3Rpb25zICovXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIEJhbGFuY2UgKi9cbiAgLmJhbGFuY2UtZGlzcGxheSB7XG4gICAgbWluLWhlaWdodDogMi4ycmVtO1xuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjhyZW07XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBcbiAgICAvKiBSZWR1Y2VkIGFuaW1hdGlvbiBmb3IgbW9iaWxlICovXG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtYW1vdW50IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICBcbiAgLyogTW9iaWxlIEJ1dHRvbiBSb3cgKi9cbiAgLmJ1dHRvbi1yb3cge1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogS2VlcCBidXR0b25zIGluIGEgcm93IGZvciBiZXR0ZXIgbGF5b3V0ICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgXG4gICAgLm1pbmktYnRuIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXgtd2lkdGg6IDQ1JTsgLyogTGltaXQgYnV0dG9uIHdpZHRoICovXG4gICAgfVxuICB9XG4gIFxuICAvKiBNb2JpbGUgR2xhc3MgQmFja2dyb3VuZCAtIFJlZHVjZWQgZm9yIHBlcmZvcm1hbmNlICovXG4gIC5tb2Rlcm4tY29udGVudDo6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEyczsgLyogU2xvd2VyIGFuaW1hdGlvbiAqL1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAvKiBFeHRyYSBTbWFsbCBNb2JpbGUgT3B0aW1pemF0aW9uICovXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7IC8qIEFkZCBzcGFjZSBmb3IgZm9vdGVyIHZpc2liaWxpdHkgb24gc21hbGwgc2NyZWVucyAqL1xuICB9XG4gIFxuICAuY29tcGFjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGdhcDogMC44cmVtO1xuICB9XG4gIFxuICAuZmllbGQtcm93IHtcbiAgICBtaW4taGVpZ2h0OiAxcmVtO1xuICB9XG4gIFxuICAuZmllbGQtbGFiZWwtcmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qIFNtYWxsZXIgZ2xhc3MgY29tcG9uZW50cyBmb3IgZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuICAubWluaS1pbnB1dCxcbiAgLm1pbmktc2VsZWN0LFxuICAubWluaS10ZXh0YXJlYSB7XG4gICAgbWluLWhlaWdodDogMi44cmVtO1xuICAgIG1heC1oZWlnaHQ6IDIuOHJlbTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICB9XG4gIFxuICAubWluaS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgbWluLWhlaWdodDogMi4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBcbiAgICAuc2VnbWVudC1jb250ZW50IGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgLnNlZ21lbnQtY29udGVudCBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5taW5pLWJ0biB7XG4gICAgbWluLWhlaWdodDogMi44cmVtO1xuICAgIG1heC1oZWlnaHQ6IDIuOHJlbTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWRpc3BsYXkge1xuICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtYW1vdW50IHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IC8qIFJlZHVjZSB0b3AgbWFyZ2luICovXG4gIH1cbiAgXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4OyAvKiBNaW5pbWFsIGJvdHRvbSBwYWRkaW5nICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuZmllbGQtbGFiZWwtcmlnaHQge1xuICAgIGZsZXg6IDAgMCA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubWluaS1pbnB1dCxcbiAgLm1pbmktc2VsZWN0LFxuICAubWluaS10ZXh0YXJlYSB7XG4gICAgbWluLWhlaWdodDogMy4ycmVtO1xuICAgIG1heC1oZWlnaHQ6IDMuMnJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQge1xuICAgIGhlaWdodDogMy4ycmVtO1xuICAgIG1pbi1oZWlnaHQ6IDMuMnJlbTtcbiAgfVxuICBcbiAgLm1pbmktYnRuIHtcbiAgICBtaW4taGVpZ2h0OiAzLjhyZW07XG4gICAgbWF4LWhlaWdodDogMy44cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmbGV4OiAwIDAgMTIwcHg7XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWRpc3BsYXkge1xuICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gICAgcGFkZGluZzogMC42cmVtIDAuOHJlbTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIFxuICAuYmFsYW5jZS1hbW91bnQge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59XG5cbi8qIFNtYWxsIEhlaWdodCBTY3JlZW5zICovXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuY29tcGFjdC1jb250ZW50IHtcbiAgICBnYXA6IDAuNHJlbTtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgfVxuICBcbiAgLmZpZWxkLXJvdyB7XG4gICAgbWluLWhlaWdodDogM3JlbTtcbiAgICAvLyBwYWRkaW5nOiAwLjZyZW0gMDtcbiAgfVxuICBcbiAgLm1pbmktaW5wdXQsXG4gIC5taW5pLXNlbGVjdCxcbiAgLm1pbmktdGV4dGFyZWEge1xuICAgIG1pbi1oZWlnaHQ6IDIuOHJlbTtcbiAgICBtYXgtaGVpZ2h0OiAyLjhyZW07XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQge1xuICAgIGhlaWdodDogMi44cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDIuOHJlbTtcbiAgfVxuICBcbiAgLm1pbmktYnRuIHtcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICAgIG1heC1oZWlnaHQ6IDNyZW07XG4gIH1cbn1cblxuLyogVmVyeSBTbWFsbCBIZWlnaHQgU2NyZWVucyAqL1xuQG1lZGlhIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAuY29tcGFjdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XG4gIH1cbiAgXG4gIC5mb3JtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gIH1cbiAgXG4gIC5jb21wYWN0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICBnYXA6IDAuM3JlbTtcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIH1cbiAgXG4gIC5maWVsZC1yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gICAgLy8gcGFkZGluZzogMC40cmVtIDA7XG4gIH1cbiAgXG4gIC5maWVsZC1sYWJlbC1yaWdodCB7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDc1cHg7XG4gIH1cbiAgXG4gIC5taW5pLWlucHV0LFxuICAubWluaS1zZWxlY3QsXG4gIC5taW5pLXRleHRhcmVhIHtcbiAgICBtaW4taGVpZ2h0OiAycmVtO1xuICAgIG1heC1oZWlnaHQ6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBtaW4taGVpZ2h0OiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5taW5pLWJ0biB7XG4gICAgbWluLWhlaWdodDogMi44cmVtO1xuICAgIG1heC1oZWlnaHQ6IDIuOHJlbTtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gIH1cbn1cblxuLyogRW5oYW5jZWQgRGFyayBNb2RlIEdsYXNzIE1hdGVyaWFscyAqL1xuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAubW9kZXJuLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgICByZ2JhKDMwLCAzMCwgMzAsIDAuOTUpIDAlLCBcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC45KSA1MCUsIFxuICAgICAgcmdiYSgyMCwgMjAsIDQwLCAwLjk1KSAxMDAlKTtcbiAgfVxuICBcbiAgLm1vZGVybi1jb250ZW50OjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IFxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgNTAlLCByZ2JhKDYwLCA2MCwgMTIwLCAwLjE1KSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDIwJSwgcmdiYSg0MCwgODAsIDE0MCwgMC4xNSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQwJSA4MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIH1cbiAgXG4gIC8qIERhcmsgR2xhc3MgRm9ybSBDYXJkICovXG4gIC5mb3JtLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1kYXJrKTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgMTJweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC41KSxcbiAgICAgIDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuICAgICAgMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuNCksXG4gICAgICAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSBpbnNldCxcbiAgICAgIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XG4gICAgfVxuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIEhlYWRlciAqL1xuICAuY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEzNWRlZyxcbiAgICAgIHJnYmEoMCwgMTIyLCAyNTUsIDAuNikgMCUsXG4gICAgICByZ2JhKDAsIDEwMCwgMjAwLCAwLjgpIDEwMCVcbiAgICApO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIH1cbiAgXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpIDAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDEwMCVcbiAgICApO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIH1cbiAgXG4gIC8qIERhcmsgR2xhc3MgSW5wdXRzICovXG4gIC5taW5pLWlucHV0LFxuICAubWluaS1zZWxlY3QsXG4gIC5taW5pLXRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XG4gICAgLS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICBcbiAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTIyLCAyNTUsIDAuOCk7XG4gICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgMCA4cHggMjVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjIpLFxuICAgICAgICAwIDAgMCAzcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xNSk7XG4gICAgfVxuICAgIFxuICAgICYucmVhZG9ubHktaW5wdXQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgICBcbiAgICAmLmFtb3VudC1pbnB1dCB7XG4gICAgICAtLWNvbG9yOiByZ2JhKDAsIDE4MCwgMjU1LCAwLjkpO1xuICAgICAgXG4gICAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICAgIC0tY29sb3I6IHJnYmEoMCwgMTgwLCAyNTUsIDEpO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAxODAsIDI1NSwgMC40KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIERhcmsgR2xhc3MgU2VnbWVudCAqL1xuICAubWluaS1zZWdtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICBcbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxMzVkZWcsXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwJSxcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpIDEwMCVcbiAgICAgICk7XG4gICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgMCA0cHggMTVweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuNCksXG4gICAgICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gICAgfVxuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIEJ1dHRvbnMgKi9cbiAgLm1pbmktYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBcbiAgICAmLnNhdmUtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTM1ZGVnLFxuICAgICAgICByZ2JhKDUyLCAxOTksIDg5LCAwLjcpIDAlLFxuICAgICAgICByZ2JhKDQwLCAxODAsIDcwLCAwLjgpIDEwMCVcbiAgICAgICk7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoNTIsIDE5OSwgODksIDAuMyk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMTM1ZGVnLFxuICAgICAgICAgIHJnYmEoNTIsIDE5OSwgODksIDAuOCkgMCUsXG4gICAgICAgICAgcmdiYSg0MCwgMTgwLCA3MCwgMC45KSAxMDAlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJi5jbGVhci1idG4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTIyLCAyNTUsIDAuNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIEJhbGFuY2UgRGlzcGxheXMgKi9cbiAgLmJhbGFuY2UtZGlzcGxheSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWxhYmVsIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIFxuICAuYmFsYW5jZS1sb2FkaW5nIHNwYW4ge1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIFxuICAuYmFsYW5jZS1lcnJvciB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgXG4gIC8qIERhcmsgR2xhc3MgRmllbGQgTGFiZWxzICovXG4gIC5maWVsZC1sYWJlbC1yaWdodCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICBcbiAgLyogRGFyayBMb2FkaW5nIFN0YXRlICovXG4gIC5sb2FkaW5nLXRleHQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDkwZGVnLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIDAlLFxuICAgICAgcmdiYSgwLCAxODAsIDI1NSwgMC45KSA1MCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgMTAwJVxuICAgICk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgfVxufVxuXG4vKiBGb2N1cyBTdGF0ZXMgKi9cbi5taW5pLWlucHV0OmZvY3VzLXdpdGhpbixcbi5taW5pLXNlbGVjdDpmb2N1cy13aXRoaW4sXG4ubWluaS10ZXh0YXJlYTpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yKTtcbn1cblxuLyogVG91Y2ggT3B0aW1pemF0aW9uICovXG5AbWVkaWEgKGhvdmVyOiBub25lKSBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAubWluaS1pbnB1dCxcbiAgLm1pbmktc2VsZWN0LFxuICAubWluaS10ZXh0YXJlYSxcbiAgLm1pbmktYnRuIHtcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICB9XG4gIFxuICAubWluaS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLmZpZWxkLXJvdyB7XG4gICAgbWluLWhlaWdodDogMzZweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 29991:
/*!**************************************************!*\
  !*** ./src/app/cash2/cash2.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = " \n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info || !journal\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info && journal\" class=\"main-container\">\n    <div class=\"form-container\">\n      <ion-card class=\"form-card\">\n        <ion-card-header class=\"card-header\">\n          <div class=\"header-row\">\n            <ion-card-title class=\"card-title\">سندات القبض والدفع</ion-card-title>\n            <div class=\"currency-switcher-container\">\n              <app-currency-switcher></app-currency-switcher>\n            </div>\n          </div>\n        </ion-card-header>\n      \n        <ion-card-content class=\"compact-content\">\n          \n          <!-- Row 1: Transaction Type -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">نوع السند</ion-label>\n            <ion-segment [(ngModel)]=\"jType\" (ionChange)=\"radioChange($event)\" class=\"mini-segment\">\n              <ion-segment-button value=\"1\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"arrow-up-outline\"></ion-icon>\n                  <span>سند دفع</span>\n                </div>\n              </ion-segment-button>\n              <ion-segment-button value=\"2\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"arrow-down-outline\"></ion-icon>\n                  <span>سند قبض</span>\n                </div>\n              </ion-segment-button>\n            </ion-segment>\n          </div>\n\n          <!-- Row 2: Date -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">التاريخ</ion-label>\n            <ion-input \n              type=\"date\" \n              [(ngModel)]=\"journal.j_date\"\n              class=\"mini-input\">\n            </ion-input>\n          </div>\n\n          <!-- Row 3: Source -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">المصدر</ion-label>\n            <div class=\"field-with-balance\">\n              <ion-select \n                [(ngModel)]=\"radioVal\" \n                (ionChange)=\"pickAccountBank($event)\" \n                placeholder=\"اختر المصدر\"\n                interface=\"action-sheet\"\n                class=\"mini-select\">\n                <ion-select-option value=\"1\">الخزينة</ion-select-option>\n                <ion-select-option *ngFor=\"let bank of banksAccountArray\" [value]=\"bank.id\">\n                  {{ bank.sub_name }}\n                </ion-select-option>\n              </ion-select>\n              \n              <!-- Source Balance Display -->\n              <div class=\"balance-display\" *ngIf=\"selectedBankAccount && selectedBankAccount.sub_name\">\n                <div class=\"balance-label\">الرصيد:</div>\n                <div class=\"balance-amount\" *ngIf=\"!loadingSourceBalance && sourceAccountBalance\" \n                     [style.color]=\"getBalanceColor(sourceAccountBalance) === 'success' ? '#10dc60' : '#f04141'\">\n                  {{ sourceAccountBalance.current_balance | currencyDisplay }}\n                </div>\n                <div class=\"balance-loading\" *ngIf=\"loadingSourceBalance\">\n                  <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner>\n                  <span>جاري التحميل...</span>\n                </div>\n                <div class=\"balance-error\" *ngIf=\"!loadingSourceBalance && !sourceAccountBalance && selectedBankAccount.sub_name\">\n                  لا يمكن تحميل الرصيد\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Row 4: Account -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">الحساب</ion-label>\n            <div class=\"field-with-balance\">\n              <div class=\"input-with-icon\" (click)=\"presentAccountPopover($event)\">\n                <ion-input \n                  readonly=\"true\" \n                  [(ngModel)]=\"selectedFromAccount.sub_name\" \n                  placeholder=\"اختر الحساب\"\n                  class=\"mini-input readonly-input\">\n                </ion-input>\n                <ion-icon name=\"chevron-down-outline\" class=\"dropdown-icon\"></ion-icon>\n              </div>\n              \n              <!-- Account Balance Display -->\n              <div class=\"balance-display\" *ngIf=\"selectedFromAccount && selectedFromAccount.sub_name\">\n                <div class=\"balance-label\">الرصيد:</div>\n                <div class=\"balance-amount\" *ngIf=\"!loadingAccountBalance && selectedAccountBalance\" \n                     [style.color]=\"getBalanceColor(selectedAccountBalance) === 'success' ? '#10dc60' : '#f04141'\">\n                  {{ selectedAccountBalance.current_balance | currencyDisplay }}\n                </div>\n                <div class=\"balance-loading\" *ngIf=\"loadingAccountBalance\">\n                  <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner>\n                  <span>جاري التحميل...</span>\n                </div>\n                <div class=\"balance-error\" *ngIf=\"!loadingAccountBalance && !selectedAccountBalance && selectedFromAccount.sub_name\">\n                  لا يمكن تحميل الرصيد\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Row 5: Amount -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">المبلغ</ion-label>\n            <ion-input \n              type=\"number\" \n              placeholder=\"0.00\" \n              [(ngModel)]=\"pay\"\n              class=\"mini-input amount-input\">\n            </ion-input>\n          </div>\n\n          <!-- Row 6: Description -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">البيان</ion-label>\n            <ion-textarea \n              rows=\"1\" \n              [(ngModel)]=\"journal.j_details\"\n              placeholder=\"وصف المعاملة...\"\n              class=\"mini-textarea\">\n            </ion-textarea>\n          </div>\n\n          <!-- Action Buttons -->\n          <div class=\"button-row\">\n            <ion-button \n              (click)=\"save()\"\n              class=\"mini-btn save-btn\"\n              [disabled]=\"!isFormValid()\">\n              <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n              حفـظ\n            </ion-button>\n            <ion-button \n              fill=\"outline\" \n              (click)=\"clearForm()\"\n              class=\"mini-btn clear-btn\">\n              <ion-icon name=\"refresh-outline\" slot=\"start\"></ion-icon>\n              مسح\n            </ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n<ion-popover #accountPopover [isOpen]=\"isAccountPopoverOpen\" (didDismiss)=\"isAccountPopoverOpen = false\"  side=\"bottom\" alignment=\"start\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar dir=\"rtl\">\n        <ion-searchbar [(ngModel)]=\"searchTerm\" (ionInput)=\"searchAccount($event)\" placeholder=\"بحث عن حساب\" dir=\"rtl\"></ion-searchbar>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content dir=\"rtl\">\n      <ion-list>\n        <ion-item *ngFor=\"let acc of searchedAccounts\" (click)=\"selectAccount(acc)\" button dir=\"rtl\">\n          <ion-label>{{acc.sub_name}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n\n<ion-popover #popoverNotif22 [isOpen]=\"isOpenNotif\" (didDismiss)=\"didDissmisNotif()\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar dir=\"rtl\" class=\"ion-text-center\">\n        <ion-title>الإشعارات</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content dir=\"rtl\">\n      <ion-list class=\"ion-text-center\" *ngIf=\"LogHistoryLocalArr.length > 0\">\n        <ion-item *ngFor=\"let log of LogHistoryLocalArr\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-label>{{ log.desc }}</ion-label>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-text color=\"primary\">{{ log.datee | dateAgo }}</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n      <div *ngIf=\"LogHistoryLocalArr.length === 0\" class=\"ion-text-center ion-padding\">\n        <ion-label>لا توجد إشعارات جديدة</ion-label>\n      </div>\n    </ion-content>\n  </ng-template>\n</ion-popover>";

/***/ })

}]);
//# sourceMappingURL=src_app_cash2_cash2_module_ts.js.map
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _cash2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash2-routing.module */ 45504);
/* harmony import */ var _cash2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash2.page */ 3721);
/* harmony import */ var _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareModule/share-module/share-module.module */ 78565);








let Cash2PageModule = class Cash2PageModule {
};
Cash2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _shareModule_share_module_share_module_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _cash2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash2.page.html?ngResource */ 29991);
/* harmony import */ var _cash2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash2.page.scss?ngResource */ 20489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);









//import { AccountModalPage } from '../account-modal/account-modal.page';

let Cash2Page = class Cash2Page {
    constructor(platform, behavApi, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast) {
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
        this.subiscribtionNotif.unsubscribe();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.saveLogHistory();
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__.StockServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
Cash2Page.propDecorators = {
    popoverNotif22: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['popoverNotif22',] }]
};
Cash2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

module.exports = "/* ========================================\n   APPLE LIQUID GLASS DESIGN SYSTEM\n   Inspired by Apple's visionOS Liquid Glass\n======================================== */\n/* Core Liquid Glass Variables */\n:root {\n  /* Glass Material Properties */\n  --liquid-glass-bg: rgba(255, 255, 255, 0.15);\n  --liquid-glass-bg-light: rgba(255, 255, 255, 0.25);\n  --liquid-glass-bg-dark: rgba(0, 0, 0, 0.15);\n  --liquid-glass-border: rgba(255, 255, 255, 0.2);\n  --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  --liquid-glass-highlight: rgba(255, 255, 255, 0.4);\n  /* Blur and Effects */\n  --glass-blur: 20px;\n  --glass-blur-strong: 40px;\n  --glass-border-radius: 20px;\n  --glass-border-radius-small: 12px;\n  /* Dynamic Colors */\n  --glass-accent-primary: rgba(0, 122, 255, 0.8);\n  --glass-accent-success: rgba(52, 199, 89, 0.8);\n  --glass-accent-danger: rgba(255, 59, 48, 0.8);\n  /* Animation Properties */\n  --glass-transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-transition-fast: all 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-scale-hover: 1.02;\n  --glass-scale-active: 0.98;\n}\n/* Dark Mode Glass Variables */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --liquid-glass-bg: rgba(0, 0, 0, 0.25);\n    --liquid-glass-bg-light: rgba(255, 255, 255, 0.1);\n    --liquid-glass-bg-dark: rgba(0, 0, 0, 0.4);\n    --liquid-glass-border: rgba(255, 255, 255, 0.1);\n    --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n    --liquid-glass-highlight: rgba(255, 255, 255, 0.2);\n  }\n}\n/* ========================================\n   TRANSPARENT HEADER STYLES\n======================================== */\n/* Transparent Glass Header */\n.transparent-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n}\n.transparent-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  /* Glass material effect */\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%);\n  /* Subtle border only at bottom */\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  /* Glass reflection */\n}\n.transparent-header ion-toolbar::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n}\n.transparent-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n}\n/* Glass Menu Button */\n.glass-menu-button {\n  --background: rgba(255, 255, 255, 0.15);\n  --background-hover: rgba(255, 255, 255, 0.25);\n  --background-activated: rgba(255, 255, 255, 0.35);\n  --color: rgba(0, 0, 0, 0.8);\n  --border-radius: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: var(--glass-transition);\n}\n.glass-menu-button:hover {\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.glass-menu-button:active {\n  transform: translateY(0) scale(0.95);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.glass-menu-button ion-icon {\n  font-size: 1.4rem;\n  color: rgba(0, 0, 0, 0.8);\n  filter: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.5));\n}\n/* Modern Content with Glass Background */\n.modern-content {\n  --background: linear-gradient(135deg,\n    rgba(120, 119, 198, 0.1) 0%,\n    rgba(255, 255, 255, 0.05) 50%,\n    rgba(74, 144, 226, 0.1) 100%);\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  position: relative;\n  overflow: hidden;\n}\n/* Animated Background Glass Effect */\n.modern-content::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);\n  animation: glassShimmer 8s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 0;\n}\n@keyframes glassShimmer {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.05);\n  }\n}\n/* Glass Loading State */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  gap: 2rem;\n  position: relative;\n  /* Glass loading background */\n}\n.loading-container::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  transform: translate(-50%, -50%);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  animation: loadingPulse 2s ease-in-out infinite;\n  z-index: 0;\n}\n@keyframes loadingPulse {\n  0%, 100% {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 0.3;\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.1);\n    opacity: 0.6;\n  }\n}\n/* Glass Loading Spinner */\n.loading-container ion-spinner {\n  position: relative;\n  z-index: 2;\n  filter: drop-shadow(0 0 15px rgba(0, 122, 255, 0.4));\n  /* Enhanced spinner with glass effect */\n}\n.loading-container ion-spinner::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  animation: spinnerGlow 1.5s ease-in-out infinite;\n  z-index: -1;\n}\n@keyframes spinnerGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 rgba(0, 122, 255, 0);\n  }\n  50% {\n    box-shadow: 0 0 20px rgba(0, 122, 255, 0.3);\n  }\n}\n.loading-text {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n  position: relative;\n  z-index: 2;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  /* Glass text shimmer */\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 122, 255, 0.8) 50%, rgba(0, 0, 0, 0.8) 100%);\n  background-size: 200% 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: textShimmer 2s ease-in-out infinite;\n}\n@keyframes textShimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n/* Main Container with Glass Environment */\n.main-container {\n  padding: 2rem;\n  padding-top: 80px;\n  /* Account for transparent header */\n  padding-bottom: 100px;\n  /* Add space for footer visibility */\n  max-width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n/* Form Container with Floating Effect */\n.form-container {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  max-width: 800px;\n  min-width: 400px;\n  position: relative;\n  z-index: 2;\n  /* Floating Animation */\n  animation: glassFloat 6s ease-in-out infinite;\n}\n@keyframes glassFloat {\n  0%, 100% {\n    transform: translateY(0px) rotateX(0deg);\n  }\n  50% {\n    transform: translateY(-8px) rotateX(1deg);\n  }\n}\n/* Liquid Glass Form Card */\n.form-card {\n  margin: 0;\n  border-radius: var(--glass-border-radius);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 0.5px solid rgba(128, 128, 128, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1), var(--liquid-glass-shadow), 0 0 0 1px var(--liquid-glass-highlight) inset, 0 1px 0 var(--liquid-glass-highlight) inset;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  max-height: 85vh;\n  position: relative;\n  transition: var(--glass-transition);\n  /* 3D Perspective */\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  /* Glass Reflection Effect */\n  /* Specular Highlight */\n}\n.form-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius) var(--glass-border-radius) 0 0;\n  z-index: 1;\n}\n.form-card::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: radial-gradient(circle at center, var(--liquid-glass-highlight) 0%, transparent 50%);\n  opacity: 0;\n  pointer-events: none;\n  transition: var(--glass-transition);\n  z-index: 2;\n  animation: glassSpecular 4s ease-in-out infinite;\n}\n@keyframes glassSpecular {\n  0%, 100% {\n    opacity: 0;\n    transform: scale(0.8) rotate(0deg);\n  }\n  50% {\n    opacity: 0.1;\n    transform: scale(1.2) rotate(180deg);\n  }\n}\n/* Glass Card Hover Effects */\n.form-card:hover {\n  transform: translateY(-4px) scale(var(--glass-scale-hover));\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 15px rgba(0, 0, 0, 0.15), 0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--liquid-glass-highlight) inset, 0 1px 0 var(--liquid-glass-highlight) inset;\n  border-color: rgba(128, 128, 128, 0.4);\n}\n.form-card:hover::after {\n  opacity: 0.15;\n}\n/* Glass Card Header */\n.card-header {\n  background: var(--ion-color-primary) !important;\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: none;\n  border-bottom: 1px solid var(--liquid-glass-border);\n  padding: 0.8rem 1rem;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 3;\n  /* Glass Header Reflection */\n}\n.card-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.4;\n  pointer-events: none;\n}\n.card-title {\n  font-size: 1.1rem;\n  font-weight: 800;\n  margin: 0;\n  text-align: center;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 1;\n  /* Glass Text Effect */\n  background: linear-gradient(135deg, white 0%, rgba(255, 255, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.compact-header {\n  --background: var(--ion-color-primary);\n  --color: white;\n  padding: 0.4rem 0.8rem;\n  border-bottom: none;\n  flex-shrink: 0;\n}\n.form-title {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  text-align: center;\n}\n.compact-content {\n  padding: 0.8rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  overflow-y: auto;\n  max-height: calc(85vh - 60px);\n}\n/* Field Rows - Each field in separate row */\n.field-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  min-height: auto;\n  padding: 0.2rem 0;\n  margin-bottom: 0.1rem;\n}\n/* Right-aligned Labels */\n.field-label-right {\n  flex: 0 0 100px;\n  text-align: right;\n  direction: rtl;\n  font-size: 1rem !important;\n  font-weight: 700;\n  color: #000000;\n  margin: 0;\n  padding-right: 0.5rem;\n  padding-top: 0.4rem;\n  align-self: flex-start;\n}\n/* Premium Glass Segment Controls */\n.mini-segment {\n  flex: 1;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 1px solid var(--liquid-glass-border);\n  border-radius: var(--glass-border-radius-small);\n  padding: 0.2rem;\n  height: 2.4rem;\n  min-height: 2.4rem;\n  position: relative;\n  overflow: hidden;\n  /* Glass segment reflection */\n}\n.mini-segment::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.2;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-segment ion-segment-button {\n  --indicator-color: transparent;\n  --indicator-color-checked: transparent;\n  --color: rgba(0, 0, 0, 0.7);\n  --color-checked: white;\n  --background: transparent;\n  --background-checked: var(--glass-accent-primary);\n  border-radius: var(--glass-border-radius-small);\n  margin: 0.1rem;\n  min-height: 1.8rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass button effect */\n}\n.mini-segment ion-segment-button::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--liquid-glass-bg-light);\n  border-radius: var(--glass-border-radius-small);\n  opacity: 0;\n  transition: var(--glass-transition);\n  pointer-events: none;\n}\n.mini-segment ion-segment-button:hover::before {\n  opacity: 1;\n}\n.mini-segment ion-segment-button.segment-button-checked {\n  background: linear-gradient(135deg, var(--ion-color-primary) 0%, var(--ion-color-primary-shade) 100%);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow: 0 4px 15px rgba(var(--ion-color-primary-rgb), 0.3), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  transform: translateY(-1px);\n}\n.mini-segment ion-segment-button.segment-button-checked::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-segment ion-segment-button .segment-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n.mini-segment ion-segment-button .segment-content ion-icon {\n  font-size: 1.2rem;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));\n}\n.mini-segment ion-segment-button .segment-content span {\n  font-size: 1rem;\n  font-weight: 700;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n/* Glass Input Fields */\n.mini-input {\n  flex: 1;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  --padding-top: 0.5rem;\n  --padding-bottom: 0.5rem;\n  border: 0.5px solid rgba(128, 128, 128, 0.4);\n  border-radius: var(--glass-border-radius-small);\n  font-size: 0.9rem;\n  font-weight: 500;\n  min-height: 2.2rem;\n  max-height: 2.2rem;\n  transition: var(--glass-transition);\n  position: relative;\n  z-index: 2;\n  /* Glass reflection effect */\n}\n.mini-input::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  background: linear-gradient(135deg, var(--liquid-glass-highlight) 0%, transparent 50%);\n  opacity: 0.1;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small);\n}\n.mini-input:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15), 0 0 0 3px rgba(0, 122, 255, 0.1);\n  background: var(--liquid-glass-bg);\n}\n.mini-input.readonly-input {\n  --color: rgba(0, 0, 0, 0.8);\n  cursor: pointer;\n  background: var(--liquid-glass-bg);\n}\n.mini-input.readonly-input:hover {\n  transform: translateY(-1px);\n  background: var(--liquid-glass-bg-light);\n}\n.mini-input.amount-input {\n  font-size: 1.2rem;\n  font-weight: 700;\n  --color: var(--glass-accent-primary);\n  text-align: center;\n}\n.mini-input.amount-input:focus-within {\n  --color: rgba(0, 122, 255, 1);\n  text-shadow: 0 0 10px rgba(0, 122, 255, 0.3);\n}\n/* Glass Select Fields */\n.mini-select {\n  flex: 1;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  border: 0.5px solid rgba(128, 128, 128, 0.4);\n  border-radius: var(--glass-border-radius-small);\n  font-size: 0.9rem;\n  font-weight: 500;\n  min-height: 2.2rem;\n  max-height: 2.2rem;\n  transition: var(--glass-transition);\n  position: relative;\n  z-index: 2;\n}\n.mini-select:hover {\n  transform: translateY(-1px);\n  background: var(--liquid-glass-bg);\n  border-color: var(--glass-accent-primary);\n}\n.mini-select:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15), 0 0 0 3px rgba(0, 122, 255, 0.1);\n}\n/* Glass Textarea Fields */\n.mini-textarea {\n  flex: 1;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  --padding-top: 0.5rem;\n  --padding-bottom: 0.5rem;\n  border: 0.5px solid rgba(128, 128, 128, 0.4);\n  border-radius: var(--glass-border-radius-small);\n  font-size: 0.9rem;\n  font-weight: 500;\n  min-height: 2.2rem;\n  max-height: 2.2rem;\n  resize: none;\n  transition: var(--glass-transition);\n}\n.mini-textarea:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15), 0 0 0 3px rgba(0, 122, 255, 0.1);\n  background: var(--liquid-glass-bg);\n}\n/* Input with Icon */\n.input-with-icon {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  z-index: 2;\n}\n/* Field with Balance Container */\n.field-with-balance {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  position: relative;\n}\n/* Floating Glass Balance Displays */\n.balance-display {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  border-radius: var(--glass-border-radius-small);\n  border: 1px solid var(--liquid-glass-border);\n  min-height: 1.8rem;\n  max-height: 1.8rem;\n  font-size: 0.75rem;\n  direction: rtl;\n  text-align: right;\n  position: relative;\n  overflow: hidden;\n  transition: var(--glass-transition);\n  margin-top: 0.1rem;\n  z-index: 1;\n  width: 100%;\n  clear: both;\n  /* Reduce floating animation */\n  animation: none;\n  /* Glass reflection */\n  /* Dynamic highlight */\n}\n.balance-display::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.2;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.balance-display::after {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -50%;\n  width: 200%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent 0%, var(--liquid-glass-highlight) 50%, transparent 100%);\n  animation: balanceShimmer 2s ease-in-out infinite;\n  opacity: 0.6;\n}\n.balance-display:hover {\n  transform: translateY(-2px) scale(1.02);\n  background: var(--liquid-glass-bg-light);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n@keyframes balanceFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-2px);\n  }\n}\n@keyframes balanceShimmer {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n.balance-label {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 0.7rem;\n  position: relative;\n  z-index: 1;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.balance-amount {\n  font-weight: 800;\n  font-size: 0.8rem;\n  flex: 1;\n  text-align: left;\n  position: relative;\n  z-index: 1;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n  /* Dynamic color based on balance type */\n}\n.balance-amount.positive {\n  color: var(--glass-accent-success);\n  text-shadow: 0 0 10px rgba(52, 199, 89, 0.3);\n}\n.balance-amount.negative {\n  color: var(--glass-accent-danger);\n  text-shadow: 0 0 10px rgba(255, 59, 48, 0.3);\n}\n.balance-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: var(--glass-accent-primary);\n  font-size: 0.7rem;\n  position: relative;\n  z-index: 1;\n}\n.balance-loading ion-spinner {\n  width: 12px;\n  height: 12px;\n  filter: drop-shadow(0 0 5px rgba(0, 122, 255, 0.3));\n}\n.balance-loading span {\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.balance-error {\n  color: var(--glass-accent-danger);\n  font-size: 0.7rem;\n  font-style: italic;\n  font-weight: 600;\n  position: relative;\n  z-index: 1;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  filter: drop-shadow(0 0 5px rgba(255, 59, 48, 0.2));\n}\n.dropdown-icon {\n  position: absolute;\n  right: 0.4rem;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n/* Glass Button Row */\n.button-row {\n  display: flex;\n  gap: 1.2rem;\n  margin-top: 0.8rem;\n  padding-top: 0.8rem;\n  justify-content: center;\n  border-top: 1px solid var(--liquid-glass-border);\n  position: relative;\n  /* Glass divider effect */\n}\n.button-row::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 20%;\n  right: 20%;\n  height: 1px;\n  background: linear-gradient(90deg, transparent 0%, var(--liquid-glass-highlight) 50%, transparent 100%);\n  opacity: 0.5;\n}\n/* 3D Glass Buttons */\n.mini-btn {\n  flex: 0 0 120px;\n  border-radius: var(--glass-border-radius-small);\n  font-size: 1rem;\n  font-weight: 700;\n  min-height: 3.2rem;\n  max-height: 3.2rem;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  /* Base glass material */\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  /* 3D Depth Effect */\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  /* Glass reflection */\n  /* Interactive States */\n  /* Save Button - Primary Glass */\n  /* Clear Button - Secondary Glass */\n}\n.mini-btn::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-btn:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn:hover::before {\n  opacity: 0.5;\n}\n.mini-btn:active {\n  transform: translateY(-1px) scale(0.98);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.save-btn {\n  background: linear-gradient(135deg, var(--glass-accent-success) 0%, rgba(52, 199, 89, 0.9) 100%);\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  border-color: rgba(52, 199, 89, 0.3);\n  box-shadow: 0 6px 15px rgba(52, 199, 89, 0.3), 0 2px 4px rgba(52, 199, 89, 0.2), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.save-btn:hover {\n  background: linear-gradient(135deg, rgba(52, 199, 89, 0.9) 0%, #34c759 100%);\n  box-shadow: 0 12px 30px rgba(52, 199, 89, 0.4), 0 4px 8px rgba(52, 199, 89, 0.3), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.save-btn:disabled {\n  background: var(--liquid-glass-bg-dark);\n  color: rgba(255, 255, 255, 0.5);\n  text-shadow: none;\n  transform: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-border) inset;\n  cursor: not-allowed;\n}\n.mini-btn.save-btn:disabled:hover {\n  transform: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-border) inset;\n}\n.mini-btn.clear-btn {\n  background: var(--liquid-glass-bg-light);\n  color: rgba(0, 0, 0, 0.7);\n  border-color: var(--liquid-glass-border);\n}\n.mini-btn.clear-btn:hover {\n  background: var(--liquid-glass-bg);\n  color: rgba(0, 0, 0, 0.9);\n  border-color: var(--glass-accent-primary);\n}\n/* Popover Styles */\nion-popover {\n  --width: 320px;\n  --max-width: 90vw;\n  --height: 60vh;\n  --max-height: 400px;\n  --border-radius: 8px;\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  direction: rtl;\n}\nion-searchbar {\n  --background: #f8f9fa;\n  --color: #000000;\n  --placeholder-color: var(--ion-color-medium);\n  --border-radius: 6px;\n  --box-shadow: none;\n  --icon-color: var(--ion-color-primary);\n  padding: 0.4rem;\n  --min-height: 2.5rem;\n  direction: rtl;\n  text-align: right;\n}\nion-list {\n  --background: white;\n}\nion-item {\n  --background: white;\n  --color: #000000;\n  --border-color: #f1f3f4;\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  --min-height: 2.5rem;\n  font-size: 1rem;\n  direction: rtl;\n  text-align: right;\n}\nion-item:hover {\n  --background: #f8f9fa;\n}\nion-item:active {\n  --background: #e9ecef;\n}\n/* Select Interface Styling */\nion-select {\n  --placeholder-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n  font-size: 0.85rem;\n}\nion-select-option {\n  font-size: 0.85rem;\n  --color: var(--ion-color-dark);\n}\nion-action-sheet {\n  --button-color: var(--ion-color-dark);\n  --button-background: white;\n  --button-background-hover: #f8f9fa;\n  --button-background-focused: #f8f9fa;\n  --button-background-activated: #e9ecef;\n}\n/* Mobile Glass Responsive Design */\n@media (max-width: 768px) {\n  /* Mobile Glass Environment */\n  .form-container {\n    width: 92%;\n    min-width: 320px;\n    /* Reduced floating animation for mobile */\n    animation: none;\n  }\n\n  .main-container {\n    padding: 1rem;\n    padding-bottom: 80px;\n    /* Add space for footer visibility on mobile */\n    height: 100dvh;\n    /* Dynamic viewport height for mobile */\n  }\n\n  /* Mobile Glass Card */\n  .form-card {\n    /* Reduced glass blur for performance */\n    backdrop-filter: blur(15px);\n    -webkit-backdrop-filter: blur(15px);\n    border-radius: 16px;\n    /* Simplified hover effects for touch */\n  }\n  .form-card:hover {\n    transform: none;\n  }\n\n  /* Mobile Glass Content */\n  .compact-content {\n    padding: 1.2rem;\n    gap: 1rem;\n  }\n\n  .field-row {\n    min-height: 3.5rem;\n    gap: 1rem;\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .field-label-right {\n    flex: none;\n    text-align: right;\n    font-size: 1rem !important;\n    margin-bottom: 0.3rem;\n  }\n\n  /* Mobile Glass Inputs */\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 3rem;\n    max-height: 3rem;\n    font-size: 1rem;\n    border-radius: 10px;\n    /* Enhanced touch target */\n  }\n  .mini-input:focus-within,\n.mini-select:focus-within,\n.mini-textarea:focus-within {\n    transform: none;\n    /* Remove translateY for mobile */\n    border-color: var(--glass-accent-primary);\n    box-shadow: 0 4px 15px rgba(0, 122, 255, 0.2), 0 0 0 2px rgba(0, 122, 255, 0.15);\n  }\n\n  /* Mobile Glass Segment */\n  .mini-segment {\n    height: 3.5rem;\n    min-height: 3.5rem;\n    border-radius: 10px;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 2.5rem;\n    font-size: 0.95rem;\n    border-radius: 8px;\n    /* Enhanced touch feedback */\n  }\n  .mini-segment ion-segment-button:active {\n    transform: scale(0.95);\n  }\n  .mini-segment ion-segment-button .segment-content {\n    gap: 0.4rem;\n  }\n  .mini-segment ion-segment-button .segment-content ion-icon {\n    font-size: 1.1rem;\n  }\n  .mini-segment ion-segment-button .segment-content span {\n    font-size: 0.95rem;\n  }\n\n  /* Mobile Glass Buttons */\n  .mini-btn {\n    min-height: 3.2rem;\n    max-height: 3.2rem;\n    font-size: 0.95rem;\n    flex: 0 0 110px;\n    border-radius: 10px;\n    /* Touch-optimized interactions */\n  }\n  .mini-btn:hover {\n    transform: scale(1.02);\n  }\n  .mini-btn:active {\n    transform: scale(0.98);\n  }\n\n  /* Mobile Glass Balance */\n  .balance-display {\n    min-height: 2.2rem;\n    padding: 0.6rem 0.8rem;\n    font-size: 0.85rem;\n    border-radius: 8px;\n    /* Reduced animation for mobile */\n    animation: none;\n  }\n  .balance-display:hover {\n    transform: scale(1.02);\n  }\n\n  .balance-label {\n    font-size: 0.8rem;\n  }\n\n  .balance-amount {\n    font-size: 0.9rem;\n  }\n\n  /* Mobile Button Row */\n  .button-row {\n    gap: 1rem;\n    margin-top: 1.5rem;\n    flex-direction: column;\n  }\n  .button-row .mini-btn {\n    flex: none;\n    width: 100%;\n  }\n\n  /* Mobile Glass Background - Reduced for performance */\n  .modern-content::before {\n    animation-duration: 12s;\n    /* Slower animation */\n  }\n}\n@media (max-width: 480px) {\n  /* Extra Small Mobile Optimization */\n  .form-container {\n    width: 95%;\n    margin: 0 auto;\n  }\n\n  .main-container {\n    padding: 0.8rem;\n    padding-bottom: 70px;\n    /* Add space for footer visibility on small screens */\n  }\n\n  .compact-content {\n    padding: 1rem;\n    gap: 0.8rem;\n  }\n\n  .field-row {\n    min-height: 3rem;\n  }\n\n  .field-label-right {\n    font-size: 0.9rem !important;\n  }\n\n  /* Smaller glass components for extra small screens */\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 2.8rem;\n    max-height: 2.8rem;\n    font-size: 0.9rem;\n    border-radius: 8px;\n  }\n\n  .mini-segment {\n    height: 3rem;\n    min-height: 3rem;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 2.2rem;\n    font-size: 0.85rem;\n  }\n  .mini-segment ion-segment-button .segment-content ion-icon {\n    font-size: 1rem;\n  }\n  .mini-segment ion-segment-button .segment-content span {\n    font-size: 0.85rem;\n  }\n\n  .mini-btn {\n    min-height: 2.8rem;\n    max-height: 2.8rem;\n    font-size: 0.85rem;\n  }\n\n  .balance-display {\n    min-height: 2rem;\n    padding: 0.5rem 0.7rem;\n    font-size: 0.8rem;\n  }\n\n  .balance-label {\n    font-size: 0.75rem;\n  }\n\n  .balance-amount {\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 480px) {\n  .form-container {\n    width: 95%;\n  }\n\n  .main-container {\n    padding: 0.5rem;\n    padding-bottom: 60px;\n    /* Add space for footer visibility on extra small screens */\n  }\n\n  .field-label-right {\n    flex: 0 0 70px;\n    font-size: 0.9rem !important;\n  }\n\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 2rem;\n    max-height: 2rem;\n    font-size: 0.85rem;\n  }\n\n  .mini-segment {\n    height: 2rem;\n    min-height: 2rem;\n  }\n\n  .mini-btn {\n    min-height: 2rem;\n    max-height: 2rem;\n    font-size: 0.75rem;\n    flex: 0 0 80px;\n  }\n\n  .balance-display {\n    min-height: 1.3rem;\n    padding: 0.1rem 0.25rem;\n    font-size: 0.65rem;\n  }\n\n  .balance-label {\n    font-size: 0.65rem;\n  }\n\n  .balance-amount {\n    font-size: 0.75rem;\n  }\n}\n/* Small Height Screens */\n@media (max-height: 600px) {\n  .main-container {\n    height: calc(100vh - 50px);\n  }\n\n  .compact-content {\n    gap: 0.2rem;\n    padding: 0.3rem;\n  }\n\n  .field-row {\n    min-height: 1.5rem;\n    padding: 0.1rem 0;\n  }\n\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 1.4rem;\n    max-height: 1.4rem;\n  }\n\n  .mini-segment {\n    height: 1.4rem;\n    min-height: 1.4rem;\n  }\n\n  .mini-btn {\n    min-height: 1.4rem;\n    max-height: 1.4rem;\n  }\n}\n/* Very Small Height Screens */\n@media (max-height: 500px) {\n  .compact-header {\n    padding: 0.2rem 0.5rem;\n  }\n\n  .form-title {\n    font-size: 0.85rem;\n  }\n\n  .compact-content {\n    padding: 0.2rem;\n    gap: 0.15rem;\n  }\n\n  .field-row {\n    min-height: 1.3rem;\n    padding: 0.05rem 0;\n  }\n\n  .field-label-right {\n    font-size: 0.8rem !important;\n    flex: 0 0 65px;\n  }\n\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 1.3rem;\n    max-height: 1.3rem;\n    font-size: 0.75rem;\n  }\n\n  .mini-segment {\n    height: 1.3rem;\n    min-height: 1.3rem;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 1.1rem;\n    font-size: 0.65rem;\n  }\n  .mini-segment ion-segment-button ion-icon {\n    font-size: 0.7rem;\n  }\n  .mini-segment ion-segment-button span {\n    font-size: 0.65rem;\n  }\n\n  .mini-btn {\n    min-height: 1.3rem;\n    max-height: 1.3rem;\n    font-size: 0.7rem;\n  }\n}\n/* Enhanced Dark Mode Glass Materials */\n@media (prefers-color-scheme: dark) {\n  .modern-content {\n    --background: linear-gradient(135deg,\n      rgba(30, 30, 30, 0.95) 0%,\n      rgba(0, 0, 0, 0.9) 50%,\n      rgba(20, 20, 40, 0.95) 100%);\n  }\n\n  .modern-content::before {\n    background: radial-gradient(circle at 20% 50%, rgba(60, 60, 120, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(40, 80, 140, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);\n  }\n\n  /* Dark Glass Form Card */\n  .form-card {\n    background: var(--liquid-glass-bg-dark);\n    border: 0.5px solid rgba(128, 128, 128, 0.2);\n    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5), 0 6px 12px rgba(0, 0, 0, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset;\n  }\n  .form-card:hover {\n    border-color: rgba(128, 128, 128, 0.3);\n  }\n\n  /* Dark Glass Header */\n  .card-header {\n    background: linear-gradient(135deg, rgba(0, 122, 255, 0.6) 0%, rgba(0, 100, 200, 0.8) 100%);\n    border-bottom-color: rgba(255, 255, 255, 0.08);\n  }\n\n  .card-title {\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  /* Dark Glass Inputs */\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    background: rgba(0, 0, 0, 0.3);\n    border: 0.5px solid rgba(128, 128, 128, 0.3);\n    --color: rgba(255, 255, 255, 0.9);\n    --placeholder-color: rgba(255, 255, 255, 0.4);\n  }\n  .mini-input:focus-within,\n.mini-select:focus-within,\n.mini-textarea:focus-within {\n    background: rgba(0, 0, 0, 0.2);\n    border-color: rgba(0, 122, 255, 0.8);\n    box-shadow: 0 8px 25px rgba(0, 122, 255, 0.2), 0 0 0 3px rgba(0, 122, 255, 0.15);\n  }\n  .mini-input.readonly-input:hover,\n.mini-select.readonly-input:hover,\n.mini-textarea.readonly-input:hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n  .mini-input.amount-input,\n.mini-select.amount-input,\n.mini-textarea.amount-input {\n    --color: rgba(0, 180, 255, 0.9);\n  }\n  .mini-input.amount-input:focus-within,\n.mini-select.amount-input:focus-within,\n.mini-textarea.amount-input:focus-within {\n    --color: rgba(0, 180, 255, 1);\n    text-shadow: 0 0 15px rgba(0, 180, 255, 0.4);\n  }\n\n  /* Dark Glass Segment */\n  .mini-segment {\n    background: rgba(0, 0, 0, 0.3);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n\n  .mini-segment ion-segment-button {\n    --color: rgba(255, 255, 255, 0.7);\n    --color-checked: white;\n  }\n  .mini-segment ion-segment-button.segment-button-checked {\n    background: linear-gradient(135deg, var(--ion-color-primary) 0%, var(--ion-color-primary-shade) 100%);\n    box-shadow: 0 4px 15px rgba(var(--ion-color-primary-rgb), 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;\n  }\n\n  /* Dark Glass Buttons */\n  .mini-btn {\n    background: rgba(0, 0, 0, 0.3);\n    border-color: rgba(255, 255, 255, 0.1);\n    color: rgba(255, 255, 255, 0.9);\n  }\n  .mini-btn.save-btn {\n    background: linear-gradient(135deg, rgba(52, 199, 89, 0.7) 0%, rgba(40, 180, 70, 0.8) 100%);\n    border-color: rgba(52, 199, 89, 0.3);\n    color: white;\n  }\n  .mini-btn.save-btn:hover {\n    background: linear-gradient(135deg, rgba(52, 199, 89, 0.8) 0%, rgba(40, 180, 70, 0.9) 100%);\n  }\n  .mini-btn.save-btn:disabled {\n    background: rgba(0, 0, 0, 0.4);\n    color: rgba(255, 255, 255, 0.3);\n    border-color: rgba(255, 255, 255, 0.05);\n  }\n  .mini-btn.clear-btn {\n    background: rgba(0, 0, 0, 0.2);\n    color: rgba(255, 255, 255, 0.7);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n  .mini-btn.clear-btn:hover {\n    background: rgba(0, 0, 0, 0.3);\n    color: rgba(255, 255, 255, 0.9);\n    border-color: rgba(0, 122, 255, 0.5);\n  }\n\n  /* Dark Glass Balance Displays */\n  .balance-display {\n    background: rgba(0, 0, 0, 0.3);\n    border-color: rgba(255, 255, 255, 0.08);\n  }\n  .balance-display:hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n\n  .balance-label {\n    color: rgba(255, 255, 255, 0.7);\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  .balance-loading span {\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  .balance-error {\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  /* Dark Glass Field Labels */\n  .field-label-right {\n    color: rgba(255, 255, 255, 0.9);\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  }\n\n  /* Dark Loading State */\n  .loading-text {\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(0, 180, 255, 0.9) 50%, rgba(255, 255, 255, 0.8) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n}\n/* Focus States */\n.mini-input:focus-within,\n.mini-select:focus-within,\n.mini-textarea:focus-within {\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 0 0 1px rgba(var(--ion-color-primary-rgb), 0.2);\n}\n/* Touch Optimization */\n@media (hover: none) and (pointer: coarse) {\n  .mini-input,\n.mini-select,\n.mini-textarea,\n.mini-btn {\n    min-height: 32px;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 30px;\n  }\n\n  .field-row {\n    min-height: 36px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QUE7RUFDQTtJQUNFLDhCQUFBO0lBQ0EsdUNBQUE7RUFoTkY7RUFrTkU7SUFDRSw4QkFBQTtFQWhOSjs7RUFvTkE7SUFDRSwrQkFBQTtJQUNBLHlDQUFBO0VBak5GOztFQW9OQTtJQUNFLHlDQUFBO0VBak5GOztFQW9OQTtJQUNFLHlDQUFBO0VBak5GOztFQW9OQSw0QkFBQTtFQUNBO0lBQ0UsK0JBQUE7SUFDQSx5Q0FBQTtFQWpORjs7RUFvTkEsdUJBQUE7RUFDQTtJQUNFLDBIQUFBO0lBTUEsNkJBQUE7SUFDQSxvQ0FBQTtJQUNBLHFCQUFBO0VBdE5GO0FBQ0Y7QUF5TkEsaUJBQUE7QUFDQTs7O0VBR0Usc0NBQUE7RUFDQSw2REFBQTtBQXZORjtBQTBOQSx1QkFBQTtBQUNBO0VBQ0U7Ozs7SUFJRSxnQkFBQTtFQXZORjs7RUEwTkE7SUFDRSxnQkFBQTtFQXZORjs7RUEwTkE7SUFDRSxnQkFBQTtFQXZORjtBQUNGIiwiZmlsZSI6ImNhc2gyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEFQUExFIExJUVVJRCBHTEFTUyBERVNJR04gU1lTVEVNXG4gICBJbnNwaXJlZCBieSBBcHBsZSdzIHZpc2lvbk9TIExpcXVpZCBHbGFzc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKiBDb3JlIExpcXVpZCBHbGFzcyBWYXJpYWJsZXMgKi9cbjpyb290IHtcbiAgLyogR2xhc3MgTWF0ZXJpYWwgUHJvcGVydGllcyAqL1xuICAtLWxpcXVpZC1nbGFzcy1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWJnLWRhcms6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAtLWxpcXVpZC1nbGFzcy1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIFxuICAvKiBCbHVyIGFuZCBFZmZlY3RzICovXG4gIC0tZ2xhc3MtYmx1cjogMjBweDtcbiAgLS1nbGFzcy1ibHVyLXN0cm9uZzogNDBweDtcbiAgLS1nbGFzcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGw6IDEycHg7XG4gIFxuICAvKiBEeW5hbWljIENvbG9ycyAqL1xuICAtLWdsYXNzLWFjY2VudC1wcmltYXJ5OiByZ2JhKDAsIDEyMiwgMjU1LCAwLjgpO1xuICAtLWdsYXNzLWFjY2VudC1zdWNjZXNzOiByZ2JhKDUyLCAxOTksIDg5LCAwLjgpO1xuICAtLWdsYXNzLWFjY2VudC1kYW5nZXI6IHJnYmEoMjU1LCA1OSwgNDgsIDAuOCk7XG4gIFxuICAvKiBBbmltYXRpb24gUHJvcGVydGllcyAqL1xuICAtLWdsYXNzLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgLS1nbGFzcy10cmFuc2l0aW9uLWZhc3Q6IGFsbCAwLjE1cyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gIC0tZ2xhc3Mtc2NhbGUtaG92ZXI6IDEuMDI7XG4gIC0tZ2xhc3Mtc2NhbGUtYWN0aXZlOiAwLjk4O1xufVxuXG4vKiBEYXJrIE1vZGUgR2xhc3MgVmFyaWFibGVzICovXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIDpyb290IHtcbiAgICAtLWxpcXVpZC1nbGFzcy1iZzogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAtLWxpcXVpZC1nbGFzcy1iZy1saWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIC0tbGlxdWlkLWdsYXNzLWJnLWRhcms6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAtLWxpcXVpZC1nbGFzcy1ib3JkZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtLWxpcXVpZC1nbGFzcy1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFRSQU5TUEFSRU5UIEhFQURFUiBTVFlMRVNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogVHJhbnNwYXJlbnQgR2xhc3MgSGVhZGVyICovXG4udHJhbnNwYXJlbnQtaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAtLW1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIFxuICAgIC8qIEdsYXNzIG1hdGVyaWFsIGVmZmVjdCAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSkgMCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMTAwJVxuICAgICk7XG4gICAgXG4gICAgLyogU3VidGxlIGJvcmRlciBvbmx5IGF0IGJvdHRvbSAqL1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgXG4gICAgLyogR2xhc3MgcmVmbGVjdGlvbiAqL1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxODBkZWcsXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAwJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICAgKTtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4udHJhbnNwYXJlbnQtdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgLS1taW4taGVpZ2h0OiA2MHB4O1xufVxuXG4vKiBHbGFzcyBNZW51IEJ1dHRvbiAqL1xuLmdsYXNzLW1lbnUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICBcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3gtc2hhZG93OiBcbiAgICAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgXG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk1KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICBcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpKTtcbiAgfVxufVxuXG4vKiBNb2Rlcm4gQ29udGVudCB3aXRoIEdsYXNzIEJhY2tncm91bmQgKi9cbi5tb2Rlcm4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgcmdiYSgxMjAsIDExOSwgMTk4LCAwLjEpIDAlLCBcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDUwJSwgXG4gICAgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSkgMTAwJSk7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEFuaW1hdGVkIEJhY2tncm91bmQgR2xhc3MgRWZmZWN0ICovXG4ubW9kZXJuLWNvbnRlbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgNTAlLCByZ2JhKDEyMCwgMTE5LCAxOTgsIDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDc0LCAxNDQsIDIyNiwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQwJSA4MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIGFuaW1hdGlvbjogZ2xhc3NTaGltbWVyIDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMDtcbn1cblxuQGtleWZyYW1lcyBnbGFzc1NoaW1tZXIge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuMzsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjY7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cbn1cblxuLyogR2xhc3MgTG9hZGluZyBTdGF0ZSAqL1xuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNTB2aDtcbiAgZ2FwOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAvKiBHbGFzcyBsb2FkaW5nIGJhY2tncm91bmQgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICAgIGFuaW1hdGlvbjogbG9hZGluZ1B1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nUHVsc2Uge1xuICAwJSwgMTAwJSB7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuICA1MCUgeyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuXG4vKiBHbGFzcyBMb2FkaW5nIFNwaW5uZXIgKi9cbi5sb2FkaW5nLWNvbnRhaW5lciBpb24tc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjQpKTtcbiAgXG4gIC8qIEVuaGFuY2VkIHNwaW5uZXIgd2l0aCBnbGFzcyBlZmZlY3QgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICByaWdodDogLTEwcHg7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gICAgYW5pbWF0aW9uOiBzcGlubmVyR2xvdyAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lckdsb3cge1xuICAwJSwgMTAwJSB7IFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMTIyLCAyNTUsIDApO1xuICB9XG4gIDUwJSB7IFxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMyk7XG4gIH1cbn1cblxuLmxvYWRpbmctdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIFxuICAvKiBHbGFzcyB0ZXh0IHNoaW1tZXIgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgIHJnYmEoMCwgMCwgMCwgMC44KSAwJSxcbiAgICByZ2JhKDAsIDEyMiwgMjU1LCAwLjgpIDUwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBhbmltYXRpb246IHRleHRTaGltbWVyIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHRleHRTaGltbWVyIHtcbiAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH1cbn1cblxuLyogTWFpbiBDb250YWluZXIgd2l0aCBHbGFzcyBFbnZpcm9ubWVudCAqL1xuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgcGFkZGluZy10b3A6IDgwcHg7IC8qIEFjY291bnQgZm9yIHRyYW5zcGFyZW50IGhlYWRlciAqL1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7IC8qIEFkZCBzcGFjZSBmb3IgZm9vdGVyIHZpc2liaWxpdHkgKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogRm9ybSBDb250YWluZXIgd2l0aCBGbG9hdGluZyBFZmZlY3QgKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA2MCU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgXG4gIC8qIEZsb2F0aW5nIEFuaW1hdGlvbiAqL1xuICBhbmltYXRpb246IGdsYXNzRmxvYXQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZ2xhc3NGbG9hdCB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlWCgwZGVnKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCkgcm90YXRlWCgxZGVnKTsgfVxufVxuXG4vKiBMaXF1aWQgR2xhc3MgRm9ybSBDYXJkICovXG4uZm9ybS1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIHZhcigtLWxpcXVpZC1nbGFzcy1zaGFkb3cpLFxuICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldCxcbiAgICAwIDFweCAwIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBcbiAgLyogM0QgUGVyc3BlY3RpdmUgKi9cbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgXG4gIC8qIEdsYXNzIFJlZmxlY3Rpb24gRWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMpIHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMpIDAgMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAvKiBTcGVjdWxhciBIaWdobGlnaHQgKi9cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MCU7XG4gICAgbGVmdDogLTUwJTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgY2lyY2xlIGF0IGNlbnRlcixcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgNTAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYW5pbWF0aW9uOiBnbGFzc1NwZWN1bGFyIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZ2xhc3NTcGVjdWxhciB7XG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZSgwZGVnKTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjE7IHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoMTgwZGVnKTsgfVxufVxuXG4vKiBHbGFzcyBDYXJkIEhvdmVyIEVmZmVjdHMgKi9cbi5mb3JtLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUodmFyKC0tZ2xhc3Mtc2NhbGUtaG92ZXIpKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCAxNXB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0LFxuICAgIDAgMXB4IDAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQpO1xuICBcbiAgJjo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDAuMTU7XG4gIH1cbn1cblxuLyogR2xhc3MgQ2FyZCBIZWFkZXIgKi9cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgXG4gIC8qIEdsYXNzIEhlYWRlciBSZWZsZWN0aW9uICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIFxuICAvKiBHbGFzcyBUZXh0IEVmZmVjdCAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIDEwMCVcbiAgKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xufVxuXG4uY29tcGFjdC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb21wYWN0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAwLjhyZW07XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4ycmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDg1dmggLSA2MHB4KTtcbn1cblxuLyogRmllbGQgUm93cyAtIEVhY2ggZmllbGQgaW4gc2VwYXJhdGUgcm93ICovXG4uZmllbGQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMXJlbTtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMC4ycmVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcbn1cblxuLyogUmlnaHQtYWxpZ25lZCBMYWJlbHMgKi9cbi5maWVsZC1sYWJlbC1yaWdodCB7XG4gIGZsZXg6IDAgMCAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLXRvcDogMC40cmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4vKiBQcmVtaXVtIEdsYXNzIFNlZ21lbnQgQ29udHJvbHMgKi9cbi5taW5pLXNlZ21lbnQge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBoZWlnaHQ6IDIuNHJlbTtcbiAgbWluLWhlaWdodDogMi40cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAvKiBHbGFzcyBzZWdtZW50IHJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgMCAwO1xuICB9XG59XG5cbi5taW5pLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgbWFyZ2luOiAwLjFyZW07XG4gIG1pbi1oZWlnaHQ6IDEuOHJlbTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLyogR2xhc3MgYnV0dG9uIGVmZmVjdCAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICAmOmhvdmVyOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTM1ZGVnLFxuICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDAlLFxuICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpIDEwMCVcbiAgICApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgNHB4IDE1cHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjMpLFxuICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxODBkZWcsXG4gICAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDAlLFxuICAgICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgICApO1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKSB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKSAwIDA7XG4gICAgfVxuICB9XG4gIFxuICAuc2VnbWVudC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xuICAgIH1cbiAgICBcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gIH1cbn1cblxuLyogR2xhc3MgSW5wdXQgRmllbGRzICovXG4ubWluaS1pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuOHJlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC44cmVtO1xuICAtLXBhZGRpbmctdG9wOiAwLjVyZW07XG4gIC0tcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWluLWhlaWdodDogMi4ycmVtO1xuICBtYXgtaGVpZ2h0OiAyLjJyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIFxuICAvKiBHbGFzcyByZWZsZWN0aW9uIGVmZmVjdCAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTM1ZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCA1MCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgfVxuICBcbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDI1cHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xNSksXG4gICAgICAwIDAgMCAzcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICB9XG4gIFxuICAmLnJlYWRvbmx5LWlucHV0IHtcbiAgICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQpO1xuICAgIH1cbiAgfVxuICBcbiAgJi5hbW91bnQtaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgLS1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICAtLWNvbG9yOiByZ2JhKDAsIDEyMiwgMjU1LCAxKTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4vKiBHbGFzcyBTZWxlY3QgRmllbGRzICovXG4ubWluaS1zZWxlY3Qge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjhyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuOHJlbTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWluLWhlaWdodDogMi4ycmVtO1xuICBtYXgtaGVpZ2h0OiAyLjJyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgfVxuICBcbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDI1cHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xNSksXG4gICAgICAwIDAgMCAzcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xKTtcbiAgfVxufVxuXG4vKiBHbGFzcyBUZXh0YXJlYSBGaWVsZHMgKi9cbi5taW5pLXRleHRhcmVhIHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC0tcGFkZGluZy1zdGFydDogMC44cmVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjhyZW07XG4gIC0tcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4taGVpZ2h0OiAyLjJyZW07XG4gIG1heC1oZWlnaHQ6IDIuMnJlbTtcbiAgcmVzaXplOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDhweCAyNXB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMTUpLFxuICAgICAgMCAwIDAgM3B4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgfVxufVxuXG4vKiBJbnB1dCB3aXRoIEljb24gKi9cbi5pbnB1dC13aXRoLWljb24ge1xuICBmbGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMjtcbn1cblxuLyogRmllbGQgd2l0aCBCYWxhbmNlIENvbnRhaW5lciAqL1xuLmZpZWxkLXdpdGgtYmFsYW5jZSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4ycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEZsb2F0aW5nIEdsYXNzIEJhbGFuY2UgRGlzcGxheXMgKi9cbi5iYWxhbmNlLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBtaW4taGVpZ2h0OiAxLjhyZW07XG4gIG1heC1oZWlnaHQ6IDEuOHJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNsZWFyOiBib3RoO1xuICBcbiAgLyogUmVkdWNlIGZsb2F0aW5nIGFuaW1hdGlvbiAqL1xuICBhbmltYXRpb246IG5vbmU7XG4gIFxuICAvKiBHbGFzcyByZWZsZWN0aW9uICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC4yO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpIHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpIDAgMDtcbiAgfVxuICBcbiAgLyogRHluYW1pYyBoaWdobGlnaHQgKi9cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgbGVmdDogLTUwJTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA5MGRlZyxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgNTAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgYW5pbWF0aW9uOiBiYWxhbmNlU2hpbW1lciAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbiAgXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjAyKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYmFsYW5jZUZsb2F0IHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH1cbn1cblxuQGtleWZyYW1lcyBiYWxhbmNlU2hpbW1lciB7XG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgb3BhY2l0eTogMDsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjY7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgb3BhY2l0eTogMDsgfVxufVxuXG4uYmFsYW5jZS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4uYmFsYW5jZS1hbW91bnQge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICBcbiAgLyogRHluYW1pYyBjb2xvciBiYXNlZCBvbiBiYWxhbmNlIHR5cGUgKi9cbiAgJi5wb3NpdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1zdWNjZXNzKTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1MiwgMTk5LCA4OSwgMC4zKTtcbiAgfVxuICBcbiAgJi5uZWdhdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1kYW5nZXIpO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDI1NSwgNTksIDQ4LCAwLjMpO1xuICB9XG59XG5cbi5iYWxhbmNlLWxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbiAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgXG4gIGlvbi1zcGlubmVyIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMykpO1xuICB9XG4gIFxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG59XG5cbi5iYWxhbmNlLWVycm9yIHtcbiAgY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1kYW5nZXIpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggcmdiYSgyNTUsIDU5LCA0OCwgMC4yKSk7XG59XG5cbi5kcm9wZG93bi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC40cmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogR2xhc3MgQnV0dG9uIFJvdyAqL1xuLmJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuMnJlbTtcbiAgbWFyZ2luLXRvcDogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogMC44cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAvKiBHbGFzcyBkaXZpZGVyIGVmZmVjdCAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMjAlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgOTBkZWcsXG4gICAgICB0cmFuc3BhcmVudCAwJSxcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDUwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuXG4vKiAzRCBHbGFzcyBCdXR0b25zICovXG4ubWluaS1idG4ge1xuICBmbGV4OiAwIDAgMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1pbi1oZWlnaHQ6IDMuMnJlbTtcbiAgbWF4LWhlaWdodDogMy4ycmVtO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBcbiAgLyogQmFzZSBnbGFzcyBtYXRlcmlhbCAqL1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKTtcbiAgXG4gIC8qIDNEIERlcHRoIEVmZmVjdCAqL1xuICBib3gtc2hhZG93OiBcbiAgICAwIDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gIFxuICAvKiBHbGFzcyByZWZsZWN0aW9uICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpIHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpIDAgMDtcbiAgfVxuICBcbiAgLyogSW50ZXJhY3RpdmUgU3RhdGVzICovXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSBzY2FsZSgxLjAyKTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICAgIFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG4gIFxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpIHNjYWxlKDAuOTgpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgfVxuICBcbiAgLyogU2F2ZSBCdXR0b24gLSBQcmltYXJ5IEdsYXNzICovXG4gICYuc2F2ZS1idG4ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEzNWRlZyxcbiAgICAgIHZhcigtLWdsYXNzLWFjY2VudC1zdWNjZXNzKSAwJSxcbiAgICAgIHJnYmEoNTIsIDE5OSwgODksIDAuOSkgMTAwJVxuICAgICk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1MiwgMTk5LCA4OSwgMC4zKTtcbiAgICBcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgNnB4IDE1cHggcmdiYSg1MiwgMTk5LCA4OSwgMC4zKSxcbiAgICAgIDAgMnB4IDRweCByZ2JhKDUyLCAxOTksIDg5LCAwLjIpLFxuICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxMzVkZWcsXG4gICAgICAgIHJnYmEoNTIsIDE5OSwgODksIDAuOSkgMCUsXG4gICAgICAgIHJnYmEoNTIsIDE5OSwgODksIDEpIDEwMCVcbiAgICAgICk7XG4gICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgMCAxMnB4IDMwcHggcmdiYSg1MiwgMTk5LCA4OSwgMC40KSxcbiAgICAgICAgMCA0cHggOHB4IHJnYmEoNTIsIDE5OSwgODksIDAuMyksXG4gICAgICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgICB9XG4gICAgXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctZGFyayk7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpIGluc2V0O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogXG4gICAgICAgICAgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAgICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcikgaW5zZXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKiBDbGVhciBCdXR0b24gLSBTZWNvbmRhcnkgR2xhc3MgKi9cbiAgJi5jbGVhci1idG4ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLyogUG9wb3ZlciBTdHlsZXMgKi9cbmlvbi1wb3BvdmVyIHtcbiAgLS13aWR0aDogMzIwcHg7XG4gIC0tbWF4LXdpZHRoOiA5MHZ3O1xuICAtLWhlaWdodDogNjB2aDtcbiAgLS1tYXgtaGVpZ2h0OiA0MDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAtLWNvbG9yOiAjMDAwMDAwO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgLS1taW4taGVpZ2h0OiAyLjVyZW07XG4gIGRpcmVjdGlvbjogcnRsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDAwMDA7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZjFmM2Y0O1xuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDFyZW07XG4gIC0tbWluLWhlaWdodDogMi41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpcmVjdGlvbjogcnRsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgXG4gICY6aG92ZXIge1xuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIC0tYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgfVxufVxuXG4vKiBTZWxlY3QgSW50ZXJmYWNlIFN0eWxpbmcgKi9cbmlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi1hY3Rpb24tc2hlZXQge1xuICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJ1dHRvbi1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1idXR0b24tYmFja2dyb3VuZC1ob3ZlcjogI2Y4ZjlmYTtcbiAgLS1idXR0b24tYmFja2dyb3VuZC1mb2N1c2VkOiAjZjhmOWZhO1xuICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2U5ZWNlZjtcbn1cblxuLyogTW9iaWxlIEdsYXNzIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLyogTW9iaWxlIEdsYXNzIEVudmlyb25tZW50ICovXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIC8qIFJlZHVjZWQgZmxvYXRpbmcgYW5pbWF0aW9uIGZvciBtb2JpbGUgKi9cbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDsgLyogQWRkIHNwYWNlIGZvciBmb290ZXIgdmlzaWJpbGl0eSBvbiBtb2JpbGUgKi9cbiAgICBoZWlnaHQ6IDEwMGR2aDsgLyogRHluYW1pYyB2aWV3cG9ydCBoZWlnaHQgZm9yIG1vYmlsZSAqL1xuICB9XG4gIFxuICAvKiBNb2JpbGUgR2xhc3MgQ2FyZCAqL1xuICAuZm9ybS1jYXJkIHtcbiAgICAvKiBSZWR1Y2VkIGdsYXNzIGJsdXIgZm9yIHBlcmZvcm1hbmNlICovXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgXG4gICAgLyogU2ltcGxpZmllZCBob3ZlciBlZmZlY3RzIGZvciB0b3VjaCAqL1xuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIENvbnRlbnQgKi9cbiAgLmNvbXBhY3QtY29udGVudCB7XG4gICAgcGFkZGluZzogMS4ycmVtO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICBcbiAgLmZpZWxkLXJvdyB7XG4gICAgbWluLWhlaWdodDogMy41cmVtO1xuICAgIGdhcDogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuICAuZmllbGQtbGFiZWwtcmlnaHQge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xuICB9XG4gIFxuICAvKiBNb2JpbGUgR2xhc3MgSW5wdXRzICovXG4gIC5taW5pLWlucHV0LFxuICAubWluaS1zZWxlY3QsXG4gIC5taW5pLXRleHRhcmVhIHtcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICAgIG1heC1oZWlnaHQ6IDNyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICAgLyogRW5oYW5jZWQgdG91Y2ggdGFyZ2V0ICovXG4gICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgdHJhbnNmb3JtOiBub25lOyAvKiBSZW1vdmUgdHJhbnNsYXRlWSBmb3IgbW9iaWxlICovXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwIDRweCAxNXB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMiksXG4gICAgICAgIDAgMCAwIDJweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjE1KTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIE1vYmlsZSBHbGFzcyBTZWdtZW50ICovXG4gIC5taW5pLXNlZ21lbnQge1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAubWluaS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgbWluLWhlaWdodDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgXG4gICAgLyogRW5oYW5jZWQgdG91Y2ggZmVlZGJhY2sgKi9cbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cbiAgICBcbiAgICAuc2VnbWVudC1jb250ZW50IHtcbiAgICAgIGdhcDogMC40cmVtO1xuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIEJ1dHRvbnMgKi9cbiAgLm1pbmktYnRuIHtcbiAgICBtaW4taGVpZ2h0OiAzLjJyZW07XG4gICAgbWF4LWhlaWdodDogMy4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBmbGV4OiAwIDAgMTEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBcbiAgICAvKiBUb3VjaC1vcHRpbWl6ZWQgaW50ZXJhY3Rpb25zICovXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIEJhbGFuY2UgKi9cbiAgLmJhbGFuY2UtZGlzcGxheSB7XG4gICAgbWluLWhlaWdodDogMi4ycmVtO1xuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjhyZW07XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBcbiAgICAvKiBSZWR1Y2VkIGFuaW1hdGlvbiBmb3IgbW9iaWxlICovXG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtYW1vdW50IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICBcbiAgLyogTW9iaWxlIEJ1dHRvbiBSb3cgKi9cbiAgLmJ1dHRvbi1yb3cge1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAubWluaS1idG4ge1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIEJhY2tncm91bmQgLSBSZWR1Y2VkIGZvciBwZXJmb3JtYW5jZSAqL1xuICAubW9kZXJuLWNvbnRlbnQ6OmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMnM7IC8qIFNsb3dlciBhbmltYXRpb24gKi9cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLyogRXh0cmEgU21hbGwgTW9iaWxlIE9wdGltaXphdGlvbiAqL1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4OyAvKiBBZGQgc3BhY2UgZm9yIGZvb3RlciB2aXNpYmlsaXR5IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgfVxuICBcbiAgLmNvbXBhY3QtY29udGVudCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDAuOHJlbTtcbiAgfVxuICBcbiAgLmZpZWxkLXJvdyB7XG4gICAgbWluLWhlaWdodDogM3JlbTtcbiAgfVxuICBcbiAgLmZpZWxkLWxhYmVsLXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKiBTbWFsbGVyIGdsYXNzIGNvbXBvbmVudHMgZm9yIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbiAgLm1pbmktaW5wdXQsXG4gIC5taW5pLXNlbGVjdCxcbiAgLm1pbmktdGV4dGFyZWEge1xuICAgIG1pbi1oZWlnaHQ6IDIuOHJlbTtcbiAgICBtYXgtaGVpZ2h0OiAyLjhyZW07XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIFxuICAubWluaS1zZWdtZW50IHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgbWluLWhlaWdodDogM3JlbTtcbiAgfVxuICBcbiAgLm1pbmktc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIG1pbi1oZWlnaHQ6IDIuMnJlbTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgXG4gICAgLnNlZ21lbnQtY29udGVudCBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIFxuICAgIC5zZWdtZW50LWNvbnRlbnQgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgfVxuICB9XG4gIFxuICAubWluaS1idG4ge1xuICAgIG1pbi1oZWlnaHQ6IDIuOHJlbTtcbiAgICBtYXgtaGVpZ2h0OiAyLjhyZW07XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG4gIFxuICAuYmFsYW5jZS1kaXNwbGF5IHtcbiAgICBtaW4taGVpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWFtb3VudCB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4OyAvKiBBZGQgc3BhY2UgZm9yIGZvb3RlciB2aXNpYmlsaXR5IG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbiAgfVxuICBcbiAgLmZpZWxkLWxhYmVsLXJpZ2h0IHtcbiAgICBmbGV4OiAwIDAgNzBweDtcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubWluaS1pbnB1dCxcbiAgLm1pbmktc2VsZWN0LFxuICAubWluaS10ZXh0YXJlYSB7XG4gICAgbWluLWhlaWdodDogMnJlbTtcbiAgICBtYXgtaGVpZ2h0OiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuICBcbiAgLm1pbmktc2VnbWVudCB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gIH1cbiAgXG4gIC5taW5pLWJ0biB7XG4gICAgbWluLWhlaWdodDogMnJlbTtcbiAgICBtYXgtaGVpZ2h0OiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmbGV4OiAwIDAgODBweDtcbiAgfVxuICBcbiAgLmJhbGFuY2UtZGlzcGxheSB7XG4gICAgbWluLWhlaWdodDogMS4zcmVtO1xuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtYW1vdW50IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cblxuLyogU21hbGwgSGVpZ2h0IFNjcmVlbnMgKi9cbkBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgfVxuICBcbiAgLmNvbXBhY3QtY29udGVudCB7XG4gICAgZ2FwOiAwLjJyZW07XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICB9XG4gIFxuICAuZmllbGQtcm93IHtcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gICAgcGFkZGluZzogMC4xcmVtIDA7XG4gIH1cbiAgXG4gIC5taW5pLWlucHV0LFxuICAubWluaS1zZWxlY3QsXG4gIC5taW5pLXRleHRhcmVhIHtcbiAgICBtaW4taGVpZ2h0OiAxLjRyZW07XG4gICAgbWF4LWhlaWdodDogMS40cmVtO1xuICB9XG4gIFxuICAubWluaS1zZWdtZW50IHtcbiAgICBoZWlnaHQ6IDEuNHJlbTtcbiAgICBtaW4taGVpZ2h0OiAxLjRyZW07XG4gIH1cbiAgXG4gIC5taW5pLWJ0biB7XG4gICAgbWluLWhlaWdodDogMS40cmVtO1xuICAgIG1heC1oZWlnaHQ6IDEuNHJlbTtcbiAgfVxufVxuXG4vKiBWZXJ5IFNtYWxsIEhlaWdodCBTY3JlZW5zICovXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gIC5jb21wYWN0LWhlYWRlciB7XG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgfVxuICBcbiAgLmZvcm0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuICBcbiAgLmNvbXBhY3QtY29udGVudCB7XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICAgIGdhcDogMC4xNXJlbTtcbiAgfVxuICBcbiAgLmZpZWxkLXJvdyB7XG4gICAgbWluLWhlaWdodDogMS4zcmVtO1xuICAgIHBhZGRpbmc6IDAuMDVyZW0gMDtcbiAgfVxuICBcbiAgLmZpZWxkLWxhYmVsLXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA2NXB4O1xuICB9XG4gIFxuICAubWluaS1pbnB1dCxcbiAgLm1pbmktc2VsZWN0LFxuICAubWluaS10ZXh0YXJlYSB7XG4gICAgbWluLWhlaWdodDogMS4zcmVtO1xuICAgIG1heC1oZWlnaHQ6IDEuM3JlbTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQge1xuICAgIGhlaWdodDogMS4zcmVtO1xuICAgIG1pbi1oZWlnaHQ6IDEuM3JlbTtcbiAgfVxuICBcbiAgLm1pbmktc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIG1pbi1oZWlnaHQ6IDEuMXJlbTtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgfVxuICAgIFxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLm1pbmktYnRuIHtcbiAgICBtaW4taGVpZ2h0OiAxLjNyZW07XG4gICAgbWF4LWhlaWdodDogMS4zcmVtO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG59XG5cbi8qIEVuaGFuY2VkIERhcmsgTW9kZSBHbGFzcyBNYXRlcmlhbHMgKi9cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLm1vZGVybi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgICAgcmdiYSgzMCwgMzAsIDMwLCAwLjk1KSAwJSwgXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuOSkgNTAlLCBcbiAgICAgIHJnYmEoMjAsIDIwLCA0MCwgMC45NSkgMTAwJSk7XG4gIH1cbiAgXG4gIC5tb2Rlcm4tY29udGVudDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiBcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDUwJSwgcmdiYSg2MCwgNjAsIDEyMCwgMC4xNSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoNDAsIDgwLCAxNDAsIDAuMTUpIDAlLCB0cmFuc3BhcmVudCA1MCUpLFxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA0MCUgODAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIDAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIEZvcm0gQ2FyZCAqL1xuICAuZm9ybS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctZGFyayk7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDEycHggMzVweCByZ2JhKDAsIDAsIDAsIDAuNSksXG4gICAgICAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcbiAgICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjQpLFxuICAgICAgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgaW5zZXQsXG4gICAgICAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogRGFyayBHbGFzcyBIZWFkZXIgKi9cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICByZ2JhKDAsIDEyMiwgMjU1LCAwLjYpIDAlLFxuICAgICAgcmdiYSgwLCAxMDAsIDIwMCwgMC44KSAxMDAlXG4gICAgKTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICB9XG4gIFxuICAuY2FyZC10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTM1ZGVnLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSAwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAxMDAlXG4gICAgKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIElucHV0cyAqL1xuICAubWluaS1pbnB1dCxcbiAgLm1pbmktc2VsZWN0LFxuICAubWluaS10ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICAgIC0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgXG4gICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDEyMiwgMjU1LCAwLjgpO1xuICAgICAgYm94LXNoYWRvdzogXG4gICAgICAgIDAgOHB4IDI1cHggcmdiYSgwLCAxMjIsIDI1NSwgMC4yKSxcbiAgICAgICAgMCAwIDAgM3B4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMTUpO1xuICAgIH1cbiAgICBcbiAgICAmLnJlYWRvbmx5LWlucHV0OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gICAgXG4gICAgJi5hbW91bnQtaW5wdXQge1xuICAgICAgLS1jb2xvcjogcmdiYSgwLCAxODAsIDI1NSwgMC45KTtcbiAgICAgIFxuICAgICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgICAtLWNvbG9yOiByZ2JhKDAsIDE4MCwgMjU1LCAxKTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMTgwLCAyNTUsIDAuNCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIFNlZ21lbnQgKi9cbiAgLm1pbmktc2VnbWVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIFxuICAubWluaS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gICAgXG4gICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTM1ZGVnLFxuICAgICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMCUsXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKSAxMDAlXG4gICAgICApO1xuICAgICAgYm94LXNoYWRvdzogXG4gICAgICAgIDAgNHB4IDE1cHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjQpLFxuICAgICAgICAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIH1cbiAgfVxuICBcbiAgLyogRGFyayBHbGFzcyBCdXR0b25zICovXG4gIC5taW5pLWJ0biB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgXG4gICAgJi5zYXZlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDEzNWRlZyxcbiAgICAgICAgcmdiYSg1MiwgMTk5LCA4OSwgMC43KSAwJSxcbiAgICAgICAgcmdiYSg0MCwgMTgwLCA3MCwgMC44KSAxMDAlXG4gICAgICApO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxOTksIDg5LCAwLjMpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDEzNWRlZyxcbiAgICAgICAgICByZ2JhKDUyLCAxOTksIDg5LCAwLjgpIDAlLFxuICAgICAgICAgIHJnYmEoNDAsIDE4MCwgNzAsIDAuOSkgMTAwJVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICYuY2xlYXItYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDEyMiwgMjU1LCAwLjUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogRGFyayBHbGFzcyBCYWxhbmNlIERpc3BsYXlzICovXG4gIC5iYWxhbmNlLWRpc3BsYXkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICB9XG4gIFxuICAuYmFsYW5jZS1sYWJlbCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtbG9hZGluZyBzcGFuIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtZXJyb3Ige1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIEZpZWxkIExhYmVscyAqL1xuICAuZmllbGQtbGFiZWwtcmlnaHQge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgXG4gIC8qIERhcmsgTG9hZGluZyBTdGF0ZSAqL1xuICAubG9hZGluZy10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA5MGRlZyxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSAwJSxcbiAgICAgIHJnYmEoMCwgMTgwLCAyNTUsIDAuOSkgNTAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIDEwMCVcbiAgICApO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIH1cbn1cblxuLyogRm9jdXMgU3RhdGVzICovXG4ubWluaS1pbnB1dDpmb2N1cy13aXRoaW4sXG4ubWluaS1zZWxlY3Q6Zm9jdXMtd2l0aGluLFxuLm1pbmktdGV4dGFyZWE6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMik7XG59XG5cbi8qIFRvdWNoIE9wdGltaXphdGlvbiAqL1xuQG1lZGlhIChob3Zlcjogbm9uZSkgYW5kIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgLm1pbmktaW5wdXQsXG4gIC5taW5pLXNlbGVjdCxcbiAgLm1pbmktdGV4dGFyZWEsXG4gIC5taW5pLWJ0biB7XG4gICAgbWluLWhlaWdodDogMzJweDtcbiAgfVxuICBcbiAgLm1pbmktc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5maWVsZC1yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 29991:
/*!**************************************************!*\
  !*** ./src/app/cash2/cash2.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"glass-menu-button\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info || !journal\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info && journal\" class=\"main-container\">\n    <div class=\"form-container\">\n      <ion-card class=\"form-card\">\n        <ion-card-header class=\"card-header\">\n          <ion-card-title class=\"card-title\">سندات القبض والدفع</ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"compact-content\">\n          \n          <!-- Row 1: Transaction Type -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">نوع السند</ion-label>\n            <ion-segment [(ngModel)]=\"jType\" (ionChange)=\"radioChange($event)\" class=\"mini-segment\">\n              <ion-segment-button value=\"1\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"arrow-up-outline\"></ion-icon>\n                  <span>سند دفع</span>\n                </div>\n              </ion-segment-button>\n              <ion-segment-button value=\"2\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"arrow-down-outline\"></ion-icon>\n                  <span>سند قبض</span>\n                </div>\n              </ion-segment-button>\n            </ion-segment>\n          </div>\n\n          <!-- Row 2: Date -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">التاريخ</ion-label>\n            <ion-input \n              type=\"date\" \n              [(ngModel)]=\"journal.j_date\"\n              class=\"mini-input\">\n            </ion-input>\n          </div>\n\n          <!-- Row 3: Source -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">المصدر</ion-label>\n            <div class=\"field-with-balance\">\n              <ion-select \n                [(ngModel)]=\"radioVal\" \n                (ionChange)=\"pickAccountBank($event)\" \n                placeholder=\"اختر المصدر\"\n                interface=\"action-sheet\"\n                class=\"mini-select\">\n                <ion-select-option value=\"1\">الخزينة</ion-select-option>\n                <ion-select-option *ngFor=\"let bank of banksAccountArray\" [value]=\"bank.id\">\n                  {{ bank.sub_name }}\n                </ion-select-option>\n              </ion-select>\n              \n              <!-- Source Balance Display -->\n              <div class=\"balance-display\" *ngIf=\"selectedBankAccount && selectedBankAccount.sub_name\">\n                <div class=\"balance-label\">الرصيد:</div>\n                <div class=\"balance-amount\" *ngIf=\"!loadingSourceBalance && sourceAccountBalance\" \n                     [style.color]=\"getBalanceColor(sourceAccountBalance) === 'success' ? '#10dc60' : '#f04141'\">\n                  {{ formatBalance(sourceAccountBalance) }}\n                </div>\n                <div class=\"balance-loading\" *ngIf=\"loadingSourceBalance\">\n                  <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner>\n                  <span>جاري التحميل...</span>\n                </div>\n                <div class=\"balance-error\" *ngIf=\"!loadingSourceBalance && !sourceAccountBalance && selectedBankAccount.sub_name\">\n                  لا يمكن تحميل الرصيد\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Row 4: Account -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">الحساب</ion-label>\n            <div class=\"field-with-balance\">\n              <div class=\"input-with-icon\" (click)=\"presentAccountPopover($event)\">\n                <ion-input \n                  readonly=\"true\" \n                  [(ngModel)]=\"selectedFromAccount.sub_name\" \n                  placeholder=\"اختر الحساب\"\n                  class=\"mini-input readonly-input\">\n                </ion-input>\n                <ion-icon name=\"chevron-down-outline\" class=\"dropdown-icon\"></ion-icon>\n              </div>\n              \n              <!-- Account Balance Display -->\n              <div class=\"balance-display\" *ngIf=\"selectedFromAccount && selectedFromAccount.sub_name\">\n                <div class=\"balance-label\">الرصيد:</div>\n                <div class=\"balance-amount\" *ngIf=\"!loadingAccountBalance && selectedAccountBalance\" \n                     [style.color]=\"getBalanceColor(selectedAccountBalance) === 'success' ? '#10dc60' : '#f04141'\">\n                  {{ formatBalance(selectedAccountBalance) }}\n                </div>\n                <div class=\"balance-loading\" *ngIf=\"loadingAccountBalance\">\n                  <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner>\n                  <span>جاري التحميل...</span>\n                </div>\n                <div class=\"balance-error\" *ngIf=\"!loadingAccountBalance && !selectedAccountBalance && selectedFromAccount.sub_name\">\n                  لا يمكن تحميل الرصيد\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Row 5: Amount -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">المبلغ</ion-label>\n            <ion-input \n              type=\"number\" \n              placeholder=\"0.00\" \n              [(ngModel)]=\"pay\"\n              class=\"mini-input amount-input\">\n            </ion-input>\n          </div>\n\n          <!-- Row 6: Description -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">البيان</ion-label>\n            <ion-textarea \n              rows=\"1\" \n              [(ngModel)]=\"journal.j_details\"\n              placeholder=\"وصف المعاملة...\"\n              class=\"mini-textarea\">\n            </ion-textarea>\n          </div>\n\n          <!-- Action Buttons -->\n          <div class=\"button-row\">\n            <ion-button \n              (click)=\"save()\"\n              class=\"mini-btn save-btn\"\n              [disabled]=\"!isFormValid()\">\n              <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n              حفـظ\n            </ion-button>\n            <ion-button \n              fill=\"outline\" \n              (click)=\"clearForm()\"\n              class=\"mini-btn clear-btn\">\n              <ion-icon name=\"refresh-outline\" slot=\"start\"></ion-icon>\n              مسح\n            </ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n<ion-popover #accountPopover [isOpen]=\"isAccountPopoverOpen\" (didDismiss)=\"isAccountPopoverOpen = false\"  side=\"bottom\" alignment=\"start\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar dir=\"rtl\">\n        <ion-searchbar [(ngModel)]=\"searchTerm\" (ionInput)=\"searchAccount($event)\" placeholder=\"بحث عن حساب\" dir=\"rtl\"></ion-searchbar>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content dir=\"rtl\">\n      <ion-list>\n        <ion-item *ngFor=\"let acc of searchedAccounts\" (click)=\"selectAccount(acc)\" button dir=\"rtl\">\n          <ion-label>{{acc.sub_name}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n\n<ion-popover #popoverNotif22 [isOpen]=\"isOpenNotif\" (didDismiss)=\"didDissmisNotif()\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar dir=\"rtl\" class=\"ion-text-center\">\n        <ion-title>الإشعارات</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content dir=\"rtl\">\n      <ion-list class=\"ion-text-center\" *ngIf=\"LogHistoryLocalArr.length > 0\">\n        <ion-item *ngFor=\"let log of LogHistoryLocalArr\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-label>{{ log.desc }}</ion-label>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-text color=\"primary\">{{ log.datee | dateAgo }}</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n      <div *ngIf=\"LogHistoryLocalArr.length === 0\" class=\"ion-text-center ion-padding\">\n        <ion-label>لا توجد إشعارات جديدة</ion-label>\n      </div>\n    </ion-content>\n  </ng-template>\n</ion-popover>";

/***/ })

}]);
//# sourceMappingURL=src_app_cash2_cash2_module_ts.js.map
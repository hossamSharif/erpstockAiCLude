"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cash_cash_module_ts"],{

/***/ 37602:
/*!*********************************************!*\
  !*** ./src/app/cash/cash-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashPageRoutingModule": () => (/* binding */ CashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _cash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash.page */ 6654);




const routes = [
    {
        path: '',
        component: _cash_page__WEBPACK_IMPORTED_MODULE_0__.CashPage
    }
];
let CashPageRoutingModule = class CashPageRoutingModule {
};
CashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CashPageRoutingModule);



/***/ }),

/***/ 94142:
/*!*************************************!*\
  !*** ./src/app/cash/cash.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashPageModule": () => (/* binding */ CashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _cash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash-routing.module */ 37602);
/* harmony import */ var _cash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash.page */ 6654);







let CashPageModule = class CashPageModule {
};
CashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cash_routing_module__WEBPACK_IMPORTED_MODULE_0__.CashPageRoutingModule
        ],
        declarations: [_cash_page__WEBPACK_IMPORTED_MODULE_1__.CashPage]
    })
], CashPageModule);



/***/ }),

/***/ 6654:
/*!***********************************!*\
  !*** ./src/app/cash/cash.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashPage": () => (/* binding */ CashPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _cash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash.page.html?ngResource */ 84243);
/* harmony import */ var _cash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash.page.scss?ngResource */ 40363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _account_modal_account_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account-modal/account-modal.page */ 55506);










let CashPage = class CashPage {
    constructor(platform, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast) {
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.sub_accountFrom = [];
        this.itemList = [];
        this.sub_accountTo = [];
        this.randomsNumber = [];
        this.jdetail_fromArr = [];
        this.journalType = [];
        this.journalTypeDetails = [];
        this.pay = 0;
        this.jdetail_toArr = [];
        this.selectedFromAccountArr = [];
        this.selectedToAccountArr = [];
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
        // new aproch
        this.device = '';
        this.checkPlatform();
        this.getAppInfo();
    }
    ngOnInit() {
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
    getAppInfo() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
                //console.log(this.user_info) 
            }
        });
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
        //console.log(ev)
    }
    pickAccount(ev, index, sub_name) {
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
        //console.log( this.selectedFromAccount); 
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
        //console.log('kjdh', this.selectedItem);
        //console.log(this.selectedItem )
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
                if (this.jType == 1) {
                    debit = +this.pay;
                    // currentType = "debit"
                }
                else if (this.jType == 2) {
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
                    "sub_name": this.selectedItem.sub_name
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
        if (this.jType == 1) {
            if (+this.itemList[i].debit > 0) {
                this.hideMe(i);
                this.getTotal();
            }
            else {
                this.presentToast("خطأ في الإدخال ", "danger");
            }
        }
        else if (this.jType == 2) {
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
        if (this.jType == 1) {
            let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.debit; }, 0);
            //console.log('sum', sum)
            this.journal.j_pay = sum;
        }
        else if (this.jType == 2) {
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
    prepareInvo() {
        this.jType = 1;
        this.selectedItem = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.selectedFromAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.payInvo = { rec_id: undefined, rec_ref: 0, store_id: this.store_info.id, rec_date: "", user_id: "", ac_id: 0, rec_detailes: "", rec_pay: 0, rec_type: "" };
        this.journal = { j_id: undefined, j_ref: "", j_details: "", j_type: "", invo_ref: "", j_desc: "", j_date: "", store_id: this.store_info.id, user_id: "", j_pay: "", standard_details: "" };
        this.jdetail_fromArr = [];
        this.jdetail_toArr = [];
        let d = new Date;
        // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
        this.payInvo.rec_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.journal.j_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.generateRandom('invo');
        this.generateRandom('journal');
        this.payInvo.store_id = this.store_info.id;
        this.payInvo.user_id = this.user_info.id;
        this.journal.invo_ref = this.payInvo.rec_ref;
        this.journal.store_id = this.store_info.id;
        this.journal.user_id = this.user_info.id;
        this.journal.store_id = this.store_info.id;
        this.journal.user_id = this.user_info.id;
        this.jdetail_from.store_id = this.store_info.id;
        this.jdetail_from.j_ref = this.journal.j_ref;
        this.jdetail_to.j_ref = this.journal.j_ref;
        this.jdetail_to.store_id = this.store_info.id;
        //console.log('fgdfdgdfgd', this.payInvo)  
        this.getAllAccounts();
    }
    getAllAccounts() {
        this.api.getAllAccounts(this.store_info.id, 1).subscribe(data => {
            let res = data;
            this.sub_accountFrom = res['data'];
            this.sub_accountTo = res['data'];
            this.prepareCurrentBalnces();
            //console.log(this.sub_accountFrom)
        }, (err) => {
            //console.log(err);
        });
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
        if (+this.journal.j_pay == 0) {
            this.presentToast('الرجاء ادخال معاملات ', 'danger');
            return false;
        }
        else if (this.journal.j_details == "") {
            this.presentToast('الرجاء ادخال البيان ', 'danger');
        }
        else {
            return false;
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
    prepare4save() {
        this.payInvo.rec_date = this.journal.j_date;
        let d = this.payInvo.rec_date;
        this.payInvo.rec_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        //this.journal.j_desc = this.selectedJtype.type_desc
        // this.journal.j_details =  this.selectedJtype.type_desc
        if (this.jType == 1) {
            this.jdetail_from = {
                id: "NULL",
                j_id: this.journal.j_id,
                ac_id: 46,
                j_ref: this.journal.j_ref,
                j_desc: "",
                j_type: "",
                credit: this.journal.j_pay,
                debit: 0,
                store_id: this.store_info.id
            };
            this.jdetail_fromArr.push(this.jdetail_from);
            for (let i = 0; i < this.itemList.length; i++) {
                const element = this.itemList[i];
                this.jdetail_toArr.push(element);
            }
        }
        else if (this.jType == 2) {
            this.jdetail_to = {
                id: "NULL",
                j_id: this.journal.j_id,
                ac_id: 46,
                j_ref: this.journal.j_ref,
                j_desc: "",
                j_type: "",
                credit: this.journal.j_pay,
                debit: 0,
                store_id: this.store_info.id
            };
            this.jdetail_toArr.push(this.jdetail_to);
            for (let i = 0; i < this.itemList.length; i++) {
                const element = this.itemList[i];
                this.jdetail_fromArr.push(element);
            }
        }
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
                component: _account_modal_account_modal_page__WEBPACK_IMPORTED_MODULE_5__.AccountModalPage,
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
    saveInvo() {
        this.api.saveExpenseInvo(this.payInvo).subscribe(data => {
            //console.log(data)
            this.saveJournal();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveJournal() {
        this.api.saveJournal(this.journal).subscribe(data => {
            //console.log(data)
            this.jdetail_from.j_id = data['message'];
            this.jdetail_to.j_id = data['message'];
            this.saveJournalFrom();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveJournalFrom() {
        this.api.saveJournalFrom(this.jdetail_fromArr).subscribe(data => {
            //console.log(data)
            this.saveJournalTo();
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    saveJournalTo() {
        this.api.saveJournalTo(this.jdetail_toArr).subscribe(data => {
            //console.log(data)
            this.prepareInvo();
            this.presentToast('تم الحفظ بنجاح', 'success');
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
};
CashPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
CashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cash',
        template: _cash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CashPage);



/***/ }),

/***/ 40363:
/*!************************************************!*\
  !*** ./src/app/cash/cash.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.coloredMsg {\n  border-style: solid;\n  border-width: 1.5px;\n  box-shadow: 10px 10px 5px 5px darkorange;\n  border-color: var(--ion-color-warning);\n}\n\n.table {\n  text-align: center;\n  width: 100%;\n  margin: 12px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0csbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtBQURKOztBQUdJO0VBQ0Usa0JBQUE7RUFDSCxXQUFBO0VBQ0EsWUFBQTtBQUFIOztBQUdDO0VBQ0UseUJBQUE7QUFBSDs7QUFHQztFQUFRLHlCQUFBO0VBQTBCLGtCQUFBO0VBQW1CLFlBQUE7RUFBYyxlQUFBO0VBQWdCLGlCQUFBO0VBQWtCLFlBQUE7QUFNdEciLCJmaWxlIjoiY2FzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cblxuICAuY29sb3JlZE1zZ3tcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMS41cHg7IFxuICAgIGJveC1zaGFkb3c6MTBweCAxMHB4IDVweCA1cHggZGFya29yYW5nZTtcbiAgICBib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOyBcbiAgICB9XG4gICAgLnRhYmxle1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXJnaW46IDEycHg7XG4gfVxuXG4gdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gfVxuIFxuIHRkLCB0aCB7Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzogOHB4OyBmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6IGJsYWNrO30iXX0= */";

/***/ }),

/***/ 84243:
/*!************************************************!*\
  !*** ./src/app/cash/cash.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> الخزينة </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"device == 'desktop'\">\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid> \n                    <ion-row dir=\"rtl\">\n                      <!-- <ion-col size=\"4\" offset=\"4\">\n                        <ion-label ><strong>نوع القيد المحاسبي :</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  class=\"bnone\" placeholder=\"اختر  نوع القيد \" list=\"j_typeId\" id=\"j_typeIds\" [(ngModel)]=\"journal.j_type\"  (change)=\"jTypeChange($event)\">\n                          <datalist style=\"border: none;\" id=\"j_typeId\" style=\"height: auto;max-height: 20px;\"  >\n                            <option *ngFor=\"let j of journalType ; let i = index\"   [value]=\"j.type_name\"></option>\n                          </datalist>\n                        </ion-item> \n                      </ion-col> -->\n                      <ion-col size=\"4\" offset=\"4\">\n                        <ion-label class=\"ion-padding\"><strong>نوع القيد  </strong></ion-label>\n                        <ion-radio-group [(ngModel)]=\"jType\"  (ionChange)=\"radioChange($event)\" >\n                          <ion-grid class=\"ion-no-padding ion-no-margin\">\n                            <ion-row  class=\"custInput\">\n                              <ion-col class=\"ion-no-padding ion-no-margin\">\n                                <ion-item lines=\"none\" >\n                                  <ion-radio value=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label> سند دفع </ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col class=\"ion-no-padding ion-no-margin\">\n                                <ion-item lines=\"none\" >\n                                  <ion-radio value=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>  سند قبض</ion-label> \n                                </ion-item>\n                              </ion-col> \n                            </ion-row>\n                          </ion-grid> \n                        </ion-radio-group> \n                      </ion-col>\n                      <ion-col size=\"3\">\n                        <ion-label ><strong>التاريخ</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"journal.j_date\"  />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid> \n              </ion-col>\n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- ashkjdh -->\n  <ion-grid  *ngIf=\"user_info && store_info\">\n   <ion-row>\n     <ion-col size=\"7\">\n      <ion-card>\n        <ion-list-header color=\"light\"> \n          <h4><ion-label class=\"ion-padding\"><strong> المعاملات : </strong></ion-label></h4>  \n        </ion-list-header>\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"5\" offset=\"1\" > \n                      <ion-item class=\"custInput\">\n                        <input  class=\"bnone\" placeholder=\"اختر  الحساب \" list=\"accountsfrom\" id=\"accountfrom\" [(ngModel)]=\"selectedFromAccount.sub_name\"  (change)=\"pickAccount($event ,1)\">\n                        <datalist style=\"border: none;\" id=\"accountsfrom\" style=\"height: auto;max-height: 20px;\"  >\n                          <option *ngFor=\"let ac of sub_accountFrom ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                        </datalist>\n                      </ion-item>  \n                      <ion-label><strong> الرصيد : </strong>\n                        <ion-text color=\"danger\" *ngIf=\"selectedFromAccount.currentType == 'credit'\">دائن  </ion-text  >\n                          <ion-text *ngIf=\"selectedFromAccount.currentType == 'credit'\"><b>{{selectedFromAccount.credit}}</b></ion-text>\n                        <ion-text color=\"success\" *ngIf=\"selectedItem.currentType == 'debit'\">مدين </ion-text >\n                          <ion-text *ngIf=\"selectedFromAccount.currentType == 'debit'\"><b>{{selectedFromAccount.debit}}</b></ion-text>\n                      </ion-label> \n                    </ion-col>\n                    <ion-col size=\"3\" offset=\"1\" >\n                      <ion-item class=\"custInput\">\n                       <ion-input  placeholder=\"ادخل المبلغ\"  [(ngModel)]=\"pay\"></ion-input>\n                      </ion-item>\n                    </ion-col> \n                    <ion-col size=\"2\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <th>الحساب</th>\n                  <th> المبلغ</th> \n                  <th></th> \n                 </tr>\n                 <tr *ngFor=\"let item of itemList ; let i = index\" (dblclick)=\"qtyClick(i)\">\n                  <td>{{i+1}}</td>\n                  <td>{{item.sub_name}}</td>\n                  <td *ngIf=\"jType == 1\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.debit}}</ion-text> \n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.debit\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                  </td>\n                 <td *ngIf=\"jType == 2\">\n                  <ion-text *ngIf=\"showMe != i\">{{item.credit}}</ion-text> \n                  <ion-item *ngIf=\"showMe == i\">\n                   <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.credit\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                  </ion-item>\n                 </td> \n                 <td>\n                  <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                    <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                  </ion-button>\n                </td>\n                 </tr> \n                 <tr>\n                  <th>المجموع</th>\n                  <th></th>\n                  <th> {{journal.j_pay}}</th> \n                  <th></th> \n                 </tr>\n               </table> \n            </ion-card>\n          </ion-col>\n          </ion-row> \n        </ion-grid> \n      </ion-card>\n     </ion-col>\n     <ion-col size=\"5\"> \n        <ion-card>\n         <ion-item  color=\"light\"> \n           <h4><ion-label ><strong> البيان</strong></ion-label></h4> \n           <ion-button slot=\"end\" fill=\"clear\" color=\"success\" (click)=\"presentModalSales('sales','ود المحجوب')\">\n             <ion-icon name=\"link-outline\"></ion-icon>\n             ربط القيد بفاتورة\n           </ion-button> \n         </ion-item>\n           <ion-item class=\"custInput\">\n             <ion-textarea rows=\"12\" cols=\"20\" [(ngModel)]=\"journal.j_details\"></ion-textarea>\n           </ion-item>\n        </ion-card> \n     </ion-col> \n  </ion-row>\n\n   \n   \n   <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"4\" >\n      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"save()\" >\n        <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n      </ion-button>\n    </ion-col>\n   </ion-row> \n \n   \n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf=\"device == 'mobile'\">\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid> \n                    <ion-row dir=\"rtl\">\n                      <!-- <ion-col size=\"4\" offset=\"4\">\n                        <ion-label ><strong>نوع القيد المحاسبي :</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  class=\"bnone\" placeholder=\"اختر  نوع القيد \" list=\"j_typeId\" id=\"j_typeIds\" [(ngModel)]=\"journal.j_type\"  (change)=\"jTypeChange($event)\">\n                          <datalist style=\"border: none;\" id=\"j_typeId\" style=\"height: auto;max-height: 20px;\"  >\n                            <option *ngFor=\"let j of journalType ; let i = index\"   [value]=\"j.type_name\"></option>\n                          </datalist>\n                        </ion-item> \n                      </ion-col> -->\n                      <ion-col size=\"4\" offset=\"4\">\n                        <ion-label class=\"ion-padding\"><strong>نوع القيد  </strong></ion-label>\n                        <ion-radio-group [(ngModel)]=\"jType\"  (ionChange)=\"radioChange($event)\" >\n                          <ion-grid class=\"ion-no-padding ion-no-margin\">\n                            <ion-row  class=\"custInput\">\n                              <ion-col class=\"ion-no-padding ion-no-margin\">\n                                <ion-item lines=\"none\" >\n                                  <ion-radio value=\"1\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label> سند دفع </ion-label> \n                                </ion-item>\n                              </ion-col>\n                              <ion-col class=\"ion-no-padding ion-no-margin\">\n                                <ion-item lines=\"none\" >\n                                  <ion-radio value=\"2\" class=\"ion-margin-end\"></ion-radio>\n                                  <ion-label>  سند قبض</ion-label> \n                                </ion-item>\n                              </ion-col> \n                            </ion-row>\n                          </ion-grid> \n                        </ion-radio-group> \n                      </ion-col>\n                      <ion-col size=\"3\">\n                        <ion-label ><strong>التاريخ</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"journal.j_date\"  />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid> \n              </ion-col>\n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- ashkjdh -->\n  <ion-grid  *ngIf=\"user_info && store_info\">\n   <ion-row>\n     <ion-col size=\"7\">\n      <ion-card>\n        <ion-list-header color=\"light\"> \n          <h4><ion-label class=\"ion-padding\"><strong> المعاملات : </strong></ion-label></h4>  \n        </ion-list-header>\n        <ion-grid> \n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"5\" offset=\"1\" > \n                      <ion-item class=\"custInput\">\n                        <input  class=\"bnone\" placeholder=\"اختر  الحساب \" list=\"accountsfrom\" id=\"accountfrom\" [(ngModel)]=\"selectedFromAccount.sub_name\"  (change)=\"pickAccount($event ,1)\">\n                        <datalist style=\"border: none;\" id=\"accountsfrom\" style=\"height: auto;max-height: 20px;\"  >\n                          <option *ngFor=\"let ac of sub_accountFrom ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                        </datalist>\n                      </ion-item>  \n                      <ion-label><strong> الرصيد : </strong>\n                        <ion-text color=\"danger\" *ngIf=\"selectedFromAccount.currentType == 'credit'\">دائن  </ion-text  >\n                          <ion-text *ngIf=\"selectedFromAccount.currentType == 'credit'\"><b>{{selectedFromAccount.credit}}</b></ion-text>\n                        <ion-text color=\"success\" *ngIf=\"selectedItem.currentType == 'debit'\">مدين </ion-text >\n                          <ion-text *ngIf=\"selectedFromAccount.currentType == 'debit'\"><b>{{selectedFromAccount.debit}}</b></ion-text>\n                      </ion-label> \n                    </ion-col>\n                    <ion-col size=\"3\" offset=\"1\" >\n                      <ion-item class=\"custInput\">\n                       <ion-input  placeholder=\"ادخل المبلغ\"  [(ngModel)]=\"pay\"></ion-input>\n                      </ion-item>\n                    </ion-col> \n                    <ion-col size=\"2\"> \n                      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"addTolist()\" >\n                        <ion-label class=\"ion-text-center\"> +</ion-label>\n                      </ion-button> \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n            <ion-card>\n               <table class=\"table\">\n                 <tr>\n                  <th>التسلسل</th>\n                  <th>الحساب</th>\n                  <th> المبلغ</th> \n                  <th></th> \n                 </tr>\n                 <tr *ngFor=\"let item of itemList ; let i = index\" (dblclick)=\"qtyClick(i)\">\n                  <td>{{i+1}}</td>\n                  <td>{{item.sub_name}}</td>\n                  <td *ngIf=\"jType == 1\">\n                    <ion-text *ngIf=\"showMe != i\">{{item.debit}}</ion-text> \n                    <ion-item *ngIf=\"showMe == i\">\n                     <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.debit\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                    </ion-item>\n                  </td>\n                 <td *ngIf=\"jType == 2\">\n                  <ion-text *ngIf=\"showMe != i\">{{item.credit}}</ion-text> \n                  <ion-item *ngIf=\"showMe == i\">\n                   <ion-input (keyup.enter)=\"editCell(i)\" [(ngModel)] =\"item.credit\" (ionBlur)=\"editCell(i)\" ></ion-input>\n                  </ion-item>\n                 </td> \n                 <td>\n                  <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteItem(i)\">\n                    <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n                  </ion-button>\n                </td>\n                 </tr> \n                 <tr>\n                  <th>المجموع</th>\n                  <th></th>\n                  <th> {{journal.j_pay}}</th> \n                  <th></th> \n                 </tr>\n               </table> \n            </ion-card>\n          </ion-col>\n          </ion-row> \n        </ion-grid> \n      </ion-card>\n     </ion-col>\n     <ion-col size=\"5\"> \n        <ion-card>\n         <ion-item  color=\"light\"> \n           <h4><ion-label ><strong> البيان</strong></ion-label></h4> \n           <ion-button slot=\"end\" fill=\"clear\" color=\"success\" (click)=\"presentModalSales('sales','ود المحجوب')\">\n             <ion-icon name=\"link-outline\"></ion-icon>\n             ربط القيد بفاتورة\n           </ion-button> \n         </ion-item>\n           <ion-item class=\"custInput\">\n             <ion-textarea rows=\"12\" cols=\"20\" [(ngModel)]=\"journal.j_details\"></ion-textarea>\n           </ion-item>\n        </ion-card> \n     </ion-col> \n  </ion-row>\n\n   \n   \n   <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"4\" >\n      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"save()\" >\n        <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n      </ion-button>\n    </ion-col>\n   </ion-row> \n \n   \n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_cash_cash_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_spends_spends_module_ts"],{

/***/ 85893:
/*!*************************************************!*\
  !*** ./src/app/spends/spends-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendsPageRoutingModule": () => (/* binding */ SpendsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _spends_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spends.page */ 98910);




const routes = [
    {
        path: '',
        component: _spends_page__WEBPACK_IMPORTED_MODULE_0__.SpendsPage
    }
];
let SpendsPageRoutingModule = class SpendsPageRoutingModule {
};
SpendsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpendsPageRoutingModule);



/***/ }),

/***/ 94797:
/*!*****************************************!*\
  !*** ./src/app/spends/spends.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendsPageModule": () => (/* binding */ SpendsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _spends_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spends-routing.module */ 85893);
/* harmony import */ var _spends_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spends.page */ 98910);







let SpendsPageModule = class SpendsPageModule {
};
SpendsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _spends_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpendsPageRoutingModule
        ],
        declarations: [_spends_page__WEBPACK_IMPORTED_MODULE_1__.SpendsPage]
    })
], SpendsPageModule);



/***/ }),

/***/ 98910:
/*!***************************************!*\
  !*** ./src/app/spends/spends.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendsPage": () => (/* binding */ SpendsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _spends_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spends.page.html?ngResource */ 43646);
/* harmony import */ var _spends_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spends.page.scss?ngResource */ 73674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _account_modal_account_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account-modal/account-modal.page */ 55506);










let SpendsPage = class SpendsPage {
    // new aproch
    constructor(modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.sub_accountFrom = [];
        this.sub_accountTo = [];
        this.randomsNumber = [];
        this.jdetail_fromArr = [];
        this.journalType = [];
        this.journalTypeDetails = [];
        this.jdetail_toArr = [];
        this.selectedFromAccountArr = [];
        this.selectedToAccountArr = [];
        this.showFrom = false;
        this.showTo = false;
        this.showFrom3 = false;
        this.showTo3 = false;
        ///
        this.coloredMsgFrom = false;
        this.coloredMsgFrom3 = false;
        this.coloredMsgTo = false;
        this.coloredMsgTo3 = false;
        this.getAppInfo();
    }
    ngOnInit() {
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
    jTypeChange(ev) {
        this.selectedToAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.selectedToAccount2 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.selectedToAccount3 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.selectedFromAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debit: "", credit: "", currentType: "" };
        this.selectedFromAccount2 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debit: "", credit: "", currentType: "" };
        this.selectedFromAccount3 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debit: "", credit: "", currentType: "" };
        this.showFrom = false;
        this.showFrom3 = false;
        this.showTo = false;
        this.showTo3 = false;
        this.journal.j_details = "";
        //console.log(ev.target.value) 
        //console.log(this.jType) 
        let fl = this.journalType.filter(x => x.type_name == ev.target.value);
        let flDetails = this.journalTypeDetails.filter(x => x.jType_id == fl[0].id);
        this.selectedJtype = fl[0];
        //console.log('im here', fl ,fl[0])
        //show account feilds
        this.journal.j_details = this.selectedJtype.type_desc;
        if (+fl[0].from_count == 2) {
            this.showFrom = true;
            this.showFrom3 = false;
        }
        else if (+fl[0].from_count == 3) {
            this.showFrom3 = true;
            this.showFrom = true;
        }
        if (+fl[0].to_count == 2) {
            this.showTo = true;
            this.showTo3 = false;
        }
        else if (+fl[0].to_count == 3) {
            this.showTo = true;
            this.showTo3 = true;
        }
        //
        let fromAccount = [];
        let toAccount = [];
        for (let i = 0; i < flDetails.length; i++) {
            const element = flDetails[i];
            if (element.type_ac == 'debit') {
                fromAccount.push(element);
            }
            else if (element.type_ac == 'credit') {
                toAccount.push(element);
            }
        }
        //console.log('from' ,fromAccount)
        //console.log('to', toAccount)
        if (fromAccount) {
            for (let i = 0; i < fromAccount.length; i++) {
                const element = fromAccount[i];
                let flAccounts = this.sub_accountFrom.filter(x => x.id == element.ac_id);
                //console.log(fromAccount[0].sub_name)
                if (i == 0) {
                    this.pickAccountFrom('ev', 1, flAccounts[0].sub_name);
                }
                else if (i == 1) {
                    this.pickAccountFrom('ev', 2, flAccounts[0].sub_name);
                }
                else if (i == 2) {
                    this.pickAccountFrom('ev', 3, flAccounts[0].sub_name);
                }
            }
        }
        if (toAccount) {
            for (let i = 0; i < toAccount.length; i++) {
                const element = toAccount[i];
                let flAccounts = this.sub_accountTo.filter(x => x.id == element.ac_id);
                //console.log(flAccounts[0].sub_name)
                if (i == 0) {
                    this.pickAccountTo('ev', 1, flAccounts[0].sub_name);
                }
                else if (i == 1) {
                    this.pickAccountTo('ev', 2, flAccounts[0].sub_name);
                }
                else if (i == 2) {
                    this.pickAccountTo('ev', 3, flAccounts[0].sub_name);
                }
            }
        }
        //  for (let i = 0; i <  flDetails.length; i++) {
        //    const element =  flDetails[i];
        //    if(element.type_ac == 'debit'){
        //     let flAccounts = this.sub_accountFrom.filter(x=>x.id == element.ac_id)
        //     //console.log(flAccounts[0].sub_name)
        //     if (i == 0) {
        //       this.pickAccountFrom('ev', 1,flAccounts[0].sub_name)
        //     }else if(i == 1){
        //       this.pickAccountFrom('ev', 2,flAccounts[0].sub_name)
        //     }else if(i == 2){
        //       this.pickAccountFrom('ev', 3,flAccounts[0].sub_name)
        //     }
        //    }else if(element.type_ac == 'credit'){
        //     let flAccounts = this.sub_accountTo.filter(x=>x.id == element.ac_id)
        //     //console.log(flAccounts[0].sub_name)
        //     if (i == 0) {
        //       this.pickAccountTo('ev',  1,flAccounts[0].sub_name)
        //     }else if(i ==1){
        //       this.pickAccountTo('ev',  2,flAccounts[0].sub_name)
        //     }else if(i ==2){
        //       this.pickAccountTo('ev', 3,flAccounts[0].sub_name)
        //     }
        //    }
        //  }
        // if (this.selectedJtype.debitac_id != null) {
        //   let fname = this.sub_accountFrom.filter(x => x.id == this.selectedJtype.debitac_id)
        //   //console.log(fname)
        //   this.pickAccountFrom(fname[0].sub_name, 4)
        // } else if (this.selectedJtype.debitac_id == null) {
        //   this.selectedFromAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debitTot: "", creditTot: "", currentType: "" };
        // }
        // if (this.selectedJtype.creditac_id != null) {
        //   let cname = this.sub_accountTo.filter(x => x.id == this.selectedJtype.creditac_id)
        //   this.pickAccountTo(cname[0].sub_name, 1)
        // } else if (this.selectedJtype.creditac_id == null) {
        //   this.selectedToAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, creditTot: "", debitTot: "", currentType: "" };
        // }  
        this.payInvo.rec_detailes = fl[0].default_details;
        this.payInvo.rec_pay = fl[0].default_val;
        this.coleredMsgFromFunc();
    }
    addTolist(type) {
        if (type == 'from') {
            this.showFrom = true;
        }
        else if (type == 'to') {
            this.showTo = true;
        }
    }
    addTolist3(type) {
        if (type == 'from') {
            this.showFrom3 = true;
        }
        else if (type == 'to') {
            this.showTo3 = true;
        }
    }
    deleteItem(type) {
        if (type == 'from') {
            this.jdetail_from2 = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
            this.selectedFromAccount2 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debit: "", credit: "", currentType: "" };
            this.showFrom = false;
        }
        else if (type == 'to') {
            this.jdetail_to2 = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
            this.selectedToAccount2 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
            this.showTo = false;
        }
    }
    deleteItem3(type) {
        if (type == 'from') {
            this.jdetail_from3 = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
            this.selectedFromAccount3 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debit: "", credit: "", currentType: "" };
            this.showFrom3 = false;
        }
        else if (type == 'to') {
            this.jdetail_to3 = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
            this.selectedToAccount3 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
            this.showTo3 = false;
        }
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
    pickAccountFrom(ev, index, sub_name) {
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
        if (index == 1) {
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
            //console.log('kjdh', this.selectedToAccount);
        }
        else if (index == 2) {
            this.selectedFromAccount2 = {
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
        }
        else if (index == 3) {
            this.selectedFromAccount3 = {
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
        }
        //console.log(this.selectedFromAccount ,this.selectedFromAccount2 , this.selectedFromAccount3)
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
        this.selectedToAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debit: "", credit: "", currentType: "" };
        this.selectedToAccount2 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debit: "", credit: "", currentType: "" };
        this.selectedToAccount3 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debit: "", credit: "", currentType: "" };
        this.selectedFromAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.selectedFromAccount2 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.selectedFromAccount3 = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, credit: "", debit: "", currentType: "" };
        this.payInvo = { rec_id: undefined, rec_ref: 0, store_id: this.store_info.id, rec_date: "", user_id: "", ac_id: 0, rec_detailes: "", rec_pay: 0, rec_type: "" };
        this.journal = { j_id: undefined, j_ref: "", j_details: "", j_type: "", invo_ref: "", j_desc: "", j_date: "", store_id: this.store_info.id, user_id: "", j_pay: "", standard_details: "" };
        this.jdetail_from = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
        this.jdetail_from2 = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
        this.jdetail_from3 = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
        this.jdetail_to = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
        this.jdetail_to2 = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
        this.jdetail_to3 = { id: 'NULL', j_id: "", j_ref: "", ac_id: "", credit: "", debit: "", j_desc: "", j_type: "", store_id: this.store_info.id };
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
        this.api.getAllAccounts(this.store_info.id, 2).subscribe(data => {
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
        let fromTot = +this.jdetail_from.debit + +this.jdetail_from2.debit + +this.jdetail_from3.debit;
        let ToTot = +this.jdetail_to.credit + +this.jdetail_to2.credit + +this.jdetail_to3.credit;
        //console.log(fromTot , ToTot)
        if (+fromTot == 0 && ToTot == 0) {
            this.presentToast('الرجاء ادخال المبالغ', 'danger');
            return false;
        }
        else if ((+fromTot > 0 && ToTot > 0) && (+fromTot != ToTot)) {
            this.presentToast('مجموع المبالغ في الطرف الأيمن لا يساوي المجموع في الأيسر', 'danger');
            return false;
        }
        else if (this.jdetail_from.ac_id == "" || this.jdetail_to.ac_id == "") {
            this.presentToast('الرجاء اختيار الحساب', 'danger');
            return false;
        }
        else if (this.payInvo.rec_detailes == "") {
            this.presentToast('الرجاء ادخال البيان', 'danger');
            return false;
            // }else if(this.payInvo.ac_id == "" ) {
            //   this.presentToast('ddddالرجاء إختيار الحساب ','danger')
            //   return false
            // 
        }
        else {
            this.journal.j_pay = fromTot;
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
    prepare4save() {
        this.payInvo.rec_date = this.journal.j_date;
        let d = this.payInvo.rec_date;
        this.payInvo.rec_date = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.setStandard();
        this.journal.j_desc = this.selectedJtype.type_desc;
        // this.journal.j_details =  this.selectedJtype.type_desc
        this.jdetail_from.j_type = this.journal.j_type;
        this.jdetail_from.j_ref = this.journal.j_ref;
        this.jdetail_to.j_type = this.journal.j_type;
        this.jdetail_to.j_ref = this.journal.j_ref;
        this.jdetail_from.ac_id = this.selectedFromAccount.id;
        this.jdetail_to.ac_id = this.selectedToAccount.id;
        this.jdetail_fromArr.push(this.jdetail_from);
        this.jdetail_toArr.push(this.jdetail_to);
        if (this.jdetail_from2.debit > 0 && this.selectedFromAccount2.id) {
            //console.log('case1from')
            this.jdetail_from2.j_type = this.journal.j_type;
            this.jdetail_from2.ac_id = this.selectedFromAccount2.id;
            this.jdetail_from2.j_ref = this.journal.j_ref;
            this.jdetail_fromArr.push(this.jdetail_from2);
        }
        if (this.jdetail_from3.debit > 0 && this.selectedFromAccount3.id) {
            //console.log('case2from')
            this.jdetail_from3.j_type = this.journal.j_type;
            this.jdetail_from3.ac_id = this.selectedFromAccount3.id;
            this.jdetail_from3.j_ref = this.journal.j_ref;
            this.jdetail_fromArr.push(this.jdetail_from3);
        }
        if (this.jdetail_to2.credit > 0 && this.selectedToAccount2.id) {
            //console.log('case1to')
            this.jdetail_to2.j_type = this.journal.j_type;
            this.jdetail_to2.j_ref = this.journal.j_ref;
            this.jdetail_to2.ac_id = this.selectedToAccount2.id;
            this.jdetail_toArr.push(this.jdetail_to2);
        }
        if (this.jdetail_to3.credit > 0 && this.selectedToAccount3.id) {
            //console.log('case2to')
            this.jdetail_to3.j_type = this.journal.j_type;
            this.jdetail_to3.j_ref = this.journal.j_ref;
            this.jdetail_to3.ac_id = this.selectedToAccount3.id;
            this.jdetail_toArr.push(this.jdetail_to3);
        }
        //console.log( this.jdetail_toArr , this.jdetail_toArr)
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
            if (this.jdetail_from2.debit > 0 && this.selectedFromAccount2.id) {
                this.jdetail_from2.j_id = data['message'];
            }
            if (this.jdetail_from3.debit > 0 && this.selectedFromAccount3.id) {
                this.jdetail_from3.j_id = data['message'];
            }
            if (this.jdetail_to2.credit > 0 && this.selectedToAccount2.id) {
                this.jdetail_to2.j_id = data['message'];
            }
            if (this.jdetail_to3.credit > 0 && this.selectedToAccount3.id) {
                this.jdetail_to3.j_id = data['message'];
            }
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
SpendsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
SpendsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-spends',
        template: _spends_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_spends_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpendsPage);



/***/ }),

/***/ 73674:
/*!****************************************************!*\
  !*** ./src/app/spends/spends.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.coloredMsg {\n  border-style: solid;\n  border-width: 1.5px;\n  box-shadow: 10px 10px 5px 5px darkorange;\n  border-color: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDRyxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJSTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNDQUFBO0FBREoiLCJmaWxlIjoic3BlbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuIC5jdXN0SW5wdXR7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuXG4gICAgLmNvbG9yZWRNc2d7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDEuNXB4OyBcbiAgICBib3gtc2hhZG93OjEwcHggMTBweCA1cHggNXB4IGRhcmtvcmFuZ2U7XG4gICAgYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci13YXJuaW5nKTsgXG4gICAgfVxuICAgICJdfQ== */";

/***/ }),

/***/ 43646:
/*!****************************************************!*\
  !*** ./src/app/spends/spends.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> القيود المحاسبية</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"user_info && store_info\">\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card >\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">  \n                  <ion-grid> \n                    <ion-row dir=\"rtl\">\n                      <ion-col size=\"4\" offset=\"4\">\n                        <ion-label ><strong>نوع القيد المحاسبي :</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input  class=\"bnone\" placeholder=\"اختر  نوع القيد \" list=\"j_typeId\" id=\"j_typeIds\" [(ngModel)]=\"journal.j_type\"  (change)=\"jTypeChange($event)\">\n                          <datalist style=\"border: none;\" id=\"j_typeId\" style=\"height: auto;max-height: 20px;\"  >\n                            <option *ngFor=\"let j of journalType ; let i = index\"   [value]=\"j.type_name\"></option>\n                          </datalist>\n                        </ion-item> \n                      </ion-col>\n                      <ion-col size=\"4\">\n                        <ion-label ><strong>التاريخ</strong></ion-label> \n                        <ion-item class=\"custInput\">\n                          <input style=\"width:100%\"  type=\"date\"  id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"journal.j_date\"  />\n                          <!-- <ion-input type=\"date\"  [(ngModel)]=\"payInvo.pay_date\"  placeholder=\"التاريخ\"></ion-input> -->\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid> \n              </ion-col>\n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- ashkjdh -->\n  <ion-grid  *ngIf=\"user_info && store_info\">\n   <ion-row class=\"ion-justify-content-center\">\n     <ion-col size=\"6\">\n\n      <ion-card>\n        <ion-list-header color=\"light\"> \n          <h4><ion-label class=\"ion-padding\"><strong>من حساب : </strong></ion-label></h4>  \n        </ion-list-header>\n        <ion-grid> \n          <ion-row class=\"ion-justify-content-center \" >\n          \n            <ion-col size=\"6\" offset=\"1\" > \n              <ion-item class=\"custInput\">\n                <input  class=\"bnone\" placeholder=\"اختر  الحساب \" list=\"accountsfrom\" id=\"accountfrom\" [(ngModel)]=\"selectedFromAccount.sub_name\"  (change)=\"pickAccountFrom($event ,1)\">\n                <datalist style=\"border: none;\" id=\"accountsfrom\" style=\"height: auto;max-height: 20px;\"  >\n                  <option *ngFor=\"let ac of sub_accountFrom ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                </datalist>\n              </ion-item>  \n              <ion-label><strong> الرصيد : </strong>\n                <ion-text color=\"danger\" *ngIf=\"selectedFromAccount.currentType == 'credit'\">دائن  </ion-text  >\n                  <ion-text *ngIf=\"selectedFromAccount.currentType == 'credit'\"><b>{{selectedFromAccount.credit}}</b></ion-text>\n                <ion-text color=\"success\" *ngIf=\"selectedFromAccount.currentType == 'debit'\">مدين </ion-text >\n                  <ion-text *ngIf=\"selectedFromAccount.currentType == 'debit'\"><b>{{selectedFromAccount.debit}}</b></ion-text>\n              </ion-label> \n            </ion-col>\n            <ion-col size=\"4\" >\n              <ion-item class=\"custInput\">\n               <ion-input  placeholder=\"ادخل المبلغ\"  [(ngModel)]=\"jdetail_from.debit\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col  size=\"1\" class=\"ion-padding-top\"> </ion-col>\n            <!-- <ion-col size=\"4\" class=\"ion-padding-top\">\n              <ion-label class=\"ion-padding\">\n                <strong> الرصيد الحالي : </strong>\n                <ion-text color=\"danger\"  *ngIf=\"selectedFromAccount.currentType == 'credit'\">دائن</ion-text>\n                <ion-text color=\"success\" *ngIf=\"selectedFromAccount.currentType == 'debit'\">مدين</ion-text> \n              </ion-label>\n              <ion-item class=\"custInput\">\n                <ion-label>\n                  <strong> {{selectedFromAccount.sub_balance}} </strong>\n                </ion-label>\n              </ion-item>\n            </ion-col> -->\n            \n          </ion-row>\n         \n          <ion-row *ngIf=\"showFrom == true\" class=\"ion-justify-content-center\" [ngClass]=\"{'coloredMsg': coloredMsgFrom === true , 'ion-justify-content-center' : coloredMsgFrom === false}\">\n            <ion-col size=\"12\" class=\"ion-text-center\" *ngIf=\"coloredMsgFrom == true\">\n              <ion-label><ion-text color=\"success\">اختر حساب   العميل او المورد </ion-text></ion-label> \n            </ion-col>\n            <ion-col size=\"6\" offset=\"1\" > \n              <ion-item class=\"custInput\">\n                <input  class=\"bnone\" placeholder=\"اختر  الحساب \" list=\"accountsfrom2\" id=\"accountfrom2\" [(ngModel)]=\"selectedFromAccount2.sub_name\"  (change)=\"pickAccountFrom($event ,2)\">\n                <datalist style=\"border: none;\" id=\"accountsfrom2\" style=\"height: auto;max-height: 20px;\"  >\n                  <option *ngFor=\"let ac of sub_accountFrom ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                </datalist>\n              </ion-item> \n              <ion-label><strong> الرصيد : </strong>\n                <ion-text color=\"danger\" *ngIf=\"selectedFromAccount2.currentType == 'credit'\">دائن  </ion-text >\n                  <ion-text *ngIf=\"selectedFromAccount2.currentType == 'credit'\"><b>{{selectedFromAccount2.credit}}</b></ion-text>\n                <ion-text color=\"success\" *ngIf=\"selectedFromAccount2.currentType == 'debit'\">مدين </ion-text >\n                  <ion-text *ngIf=\"selectedFromAccount2.currentType == 'debit'\"><b>{{selectedFromAccount2.debit}}</b></ion-text>\n              </ion-label> \n            </ion-col> \n\n            <ion-col size=\"4\" >\n              <ion-item class=\"custInput\">\n               <ion-input  placeholder=\"ادخل المبلغ\"  [(ngModel)]=\"jdetail_from2.debit\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col  size=\"1\" class=\"ion-padding-top\">\n              <ion-button *ngIf=\"showFrom3 == false\"  size=\"small\"  fill=\"clear\"  (click)=\"deleteItem('from')\" >\n                <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n              </ion-button> \n            </ion-col>\n             \n          </ion-row>\n\n\n          <!-- fghjk -->\n          <ion-row *ngIf=\"showFrom3 == true\" class=\"ion-justify-content-center\" [ngClass]=\"{'coloredMsg': coloredMsgFrom3 === true , 'ion-justify-content-center' : coloredMsgFrom3 === false}\" >\n            <ion-col size=\"12\" class=\"ion-text-center\" *ngIf=\"coloredMsgFrom3 == true\">\n              <ion-label><ion-text color=\"success\">اختر حساب   العميل او المورد </ion-text></ion-label> \n\n            </ion-col>\n            <ion-col size=\"6\" offset=\"1\" > \n              <ion-item class=\"custInput\">\n                <input  class=\"bnone\" placeholder=\"اختر  الحساب \" list=\"accountsfrom3\" id=\"accountfrom3\" [(ngModel)]=\"selectedFromAccount3.sub_name\"  (change)=\"pickAccountFrom($event ,3)\">\n                <datalist style=\"border: none;\" id=\"accountsfrom3\" style=\"height: auto;max-height: 20px;\"  >\n                  <option *ngFor=\"let ac of sub_accountFrom ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                </datalist>\n              </ion-item>  \n              <ion-label><strong> الرصيد : </strong>\n                <ion-text color=\"danger\" *ngIf=\"selectedFromAccount3.currentType == 'credit'\">دائن  </ion-text>\n                <ion-text *ngIf=\"selectedFromAccount3.currentType == 'credit'\"><b>{{selectedFromAccount3.credit}}</b></ion-text>\n                <ion-text color=\"success\" *ngIf=\"selectedFromAccount3.currentType == 'debit'\">مدين </ion-text>\n                <ion-text *ngIf=\"selectedFromAccount3.currentType == 'debit'\"><b>{{selectedFromAccount3.debit}}</b></ion-text>\n              </ion-label>  \n            </ion-col> \n\n            <ion-col size=\"4\" >\n              <ion-item class=\"custInput\">\n               <ion-input  placeholder=\"ادخل المبلغ\"  [(ngModel)]=\"jdetail_from3.debit\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col  size=\"1\" class=\"ion-padding-top\">\n              <ion-button  size=\"small\"  fill=\"clear\"  (click)=\"deleteItem3('from')\" >\n                <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n              </ion-button> \n            </ion-col>\n            <!-- <ion-col size=\"4\" class=\"ion-padding-top\">\n              <ion-label class=\"ion-padding\">\n                <strong> الرصيد الحالي : </strong>\n                <ion-text color=\"danger\"  *ngIf=\"selectedFromAccount2.currentType == 'credit'\">دائن</ion-text>\n                <ion-text color=\"success\" *ngIf=\"selectedFromAccount2.currentType == 'debit'\">مدين</ion-text> \n              </ion-label>\n              <ion-item class=\"custInput\">\n                <ion-label>\n                  <strong> {{selectedFromAccount2.sub_balance}} </strong>\n                </ion-label>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-item-divider></ion-item-divider>\n\n          <ion-item lines=\"none\"  *ngIf=\"showFrom == false && showFrom3 == false \">\n            <ion-button slot=\"end\" size=\"small\"     color=\"success\"  (click)=\"addTolist('from')\" >\n              <ion-label class=\"ion-text-center\">اضافة حساب +</ion-label>\n            </ion-button> \n          </ion-item>\n          <ion-item lines=\"none\"  *ngIf=\"showFrom3 == false && showFrom == true \">\n            <ion-button slot=\"end\" size=\"small\"     color=\"success\"  (click)=\"addTolist3('from')\" >\n              <ion-label class=\"ion-text-center\">اضافة حساب +</ion-label>\n            </ion-button> \n          </ion-item>\n        </ion-grid> \n      </ion-card>\n     </ion-col>\n\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-list-header color=\"light\"> \n          <h4><ion-label class=\"ion-padding\"><strong>الي حساب :</strong></ion-label></h4>  \n        </ion-list-header>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\" offset=\"1\"> \n              <ion-item class=\"custInput\">\n                <input class=\"bnone\" placeholder=\"اختر  الحساب \" list=\"accountsto\" id=\"accountto\"\n                  [(ngModel)]=\"selectedToAccount.sub_name\" (change)=\"pickAccountTo($event ,1)\">\n                 <datalist style=\"border: none;\" id=\"accountsto\" style=\"height: auto;max-height: 20px;\">\n                  <option *ngFor=\"let ac of sub_accountTo ; let i = index\" [value]=\"ac.sub_name\"></option>\n                </datalist>\n              </ion-item>\n              <ion-label><strong> الرصيد : </strong>\n                <ion-text color=\"danger\" *ngIf=\"selectedToAccount.currentType == 'credit'\">دائن  </ion-text>\n                <ion-text *ngIf=\"selectedToAccount.currentType == 'credit'\"><b>{{selectedToAccount.credit}}</b></ion-text>\n                <ion-text color=\"success\" *ngIf=\"selectedToAccount.currentType == 'debit'\">مدين </ion-text >\n                  <ion-text *ngIf=\"selectedToAccount.currentType == 'debit'\"><b>{{selectedToAccount.debit}}</b></ion-text>\n              </ion-label>\n            </ion-col> \n            <ion-col size=\"4\" >\n              <ion-item class=\"custInput\">\n               <ion-input  placeholder=\"ادخل المبلغ\"  [(ngModel)]=\"jdetail_to.credit\"></ion-input>\n              </ion-item>\n            </ion-col> \n          </ion-row>\n\n          <ion-row *ngIf=\"showTo == true\" class=\"ion-justify-content-center\" [ngClass]=\"{'coloredMsg': coloredMsgTo == true , 'ion-justify-content-center' : coloredMsgTo == false}\">\n            <ion-col size=\"12\" class=\"ion-text-center\" *ngIf=\"coloredMsgTo == true\">\n              <ion-label><ion-text color=\"success\">اختر حساب   العميل او المورد </ion-text></ion-label> \n\n            </ion-col>\n            <ion-col size=\"6\" offset=\"1\">\n              <ion-item class=\"custInput\">\n                <input class=\"bnone\" placeholder=\"اختر  الحساب \" list=\"accountsto2\" id=\"accountto2\"\n                  [(ngModel)]=\"selectedToAccount2.sub_name\" (change)=\"pickAccountTo($event ,2)\">\n                 <datalist style=\"border: none;\" id=\"accountsto2\" style=\"height: auto;max-height: 20px;\">\n                  <option *ngFor=\"let ac of sub_accountTo ; let i = index\" [value]=\"ac.sub_name\"></option>\n                </datalist>\n              </ion-item>\n              <ion-label><strong> الرصيد  : </strong>\n                <ion-text color=\"danger\" *ngIf=\"selectedToAccount2.currentType == 'credit'\">دائن  </ion-text>\n                <ion-text *ngIf=\"selectedToAccount2.currentType == 'credit'\"><b>{{selectedToAccount2.credit}}</b></ion-text>\n                <ion-text color=\"success\" *ngIf=\"selectedToAccount2.currentType == 'debit'\">مدين </ion-text>\n                <ion-text *ngIf=\"selectedToAccount2.currentType == 'debit'\"><b>{{selectedToAccount2.debit}}</b></ion-text>\n              </ion-label>\n            </ion-col>\n             \n            <ion-col size=\"4\" >\n              <ion-item class=\"custInput\">\n               <ion-input  placeholder=\"ادخل المبلغ\"  [(ngModel)]=\"jdetail_to2.credit\"></ion-input>\n              </ion-item>\n            </ion-col> \n            <ion-col  size=\"1\" class=\"ion-padding-top\">\n              <ion-button *ngIf=\"showTo3 == false\" size=\"small\"  fill=\"clear\"  (click)=\"deleteItem('to')\" >\n                <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n              </ion-button> \n            </ion-col>\n          </ion-row>\n          <!-- dfg -->\n          <ion-row *ngIf=\"showTo3 == true\" class=\"ion-justify-content-center\" [ngClass]=\"{'coloredMsg': coloredMsgTo3 == true , 'ion-justify-content-center' : coloredMsgTo3 == false}\">\n            <ion-col size=\"12\" class=\"ion-text-center\" *ngIf=\"coloredMsgTo3 == true\">\n              <ion-label><ion-text color=\"success\">اختر حساب   العميل او المورد </ion-text></ion-label>\n            </ion-col>\n            <ion-col size=\"6\" offset=\"1\">\n              <ion-item class=\"custInput\">\n                <input class=\"bnone\" placeholder=\"اختر  الحساب \" list=\"accountsto3\" id=\"accountto3\"\n                  [(ngModel)]=\"selectedToAccount3.sub_name\" (change)=\"pickAccountTo($event ,3)\">\n                 <datalist style=\"border: none;\" id=\"accountsto3\" style=\"height: auto;max-height: 20px;\">\n                  <option *ngFor=\"let ac of sub_accountTo ; let i = index\" [value]=\"ac.sub_name\"></option>\n                </datalist>\n              </ion-item>\n              <ion-label><strong> الرصيد  : </strong>\n                <ion-text color=\"danger\" *ngIf=\"selectedToAccount3.currentType == 'credit'\">دائن  </ion-text>\n                <ion-text  *ngIf=\"selectedToAccount3.currentType == 'credit'\"><b>{{selectedToAccount3.credit}}</b></ion-text>\n                <ion-text color=\"success\" *ngIf=\"selectedToAccount3.currentType == 'debit'\">مدين </ion-text>\n                <ion-text *ngIf=\"selectedToAccount3.currentType == 'debit'\"><b>{{selectedToAccount3.debit}}</b></ion-text>\n              </ion-label>\n            </ion-col>\n           \n            <ion-col size=\"4\" >\n              <ion-item class=\"custInput\">\n               <ion-input  placeholder=\"ادخل المبلغ\"  [(ngModel)]=\"jdetail_to3.credit\"></ion-input>\n              </ion-item>\n            </ion-col> \n            <ion-col  size=\"1\" class=\"ion-padding-top\">\n              <ion-button  size=\"small\"  fill=\"clear\"  (click)=\"deleteItem3('to')\" >\n                <ion-icon name=\"trash\" color=\"danger\" ></ion-icon>\n              </ion-button> \n            </ion-col>\n          </ion-row>\n\n          <ion-item-divider></ion-item-divider>\n          <ion-item lines=\"none\" *ngIf=\"showTo == false && showTo3 == false\">\n            <ion-button slot=\"end\" size=\"small\"     color=\"success\"  (click)=\"addTolist('to')\" >\n              <ion-label class=\"ion-text-center\">اضافة حساب +</ion-label>\n            </ion-button> \n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"showTo3 == false  &&  showTo == true\">\n            <ion-button slot=\"end\" size=\"small\"     color=\"success\"  (click)=\"addTolist3('to')\" >\n              <ion-label class=\"ion-text-center\">اضافة حساب +</ion-label>\n            </ion-button> \n          </ion-item>\n\n        </ion-grid>\n      </ion-card>\n    \n    </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-grid>\n        <ion-row>\n         <ion-col size=\"12\">\n           <ion-card>\n            <ion-item > \n              <h4><ion-label class=\"ion-padding\"><strong> البيان</strong></ion-label></h4> \n              <ion-button slot=\"end\" fill=\"clear\" color=\"success\" (click)=\"presentModalSales('sales','ود المحجوب')\">\n                <ion-icon name=\"link-outline\"></ion-icon>\n                ربط القيد بفاتورة\n              </ion-button> \n            </ion-item>\n              <ion-item class=\"custInput\">\n                <ion-input [(ngModel)]=\"journal.j_details\"></ion-input>\n              </ion-item>\n           </ion-card> \n         </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      <!-- <ion-col size=\"6\" offset=\"6\">\n        <ion-label class=\"ion-padding\"><strong>المبلغ</strong></ion-label>\n        <ion-item class=\"custInput\">\n          <ion-input [(ngModel)]=\"payInvo.rec_pay\" (ionChange)=\"payChange($event)\"></ion-input>\n        </ion-item>\n      </ion-col> -->\n    </ion-row>\n   \n   <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"4\" >\n      <ion-button expand=\"block\" routerDirection=\"root\" color=\"success\"  (click)=\"save()\" >\n        <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n      </ion-button>\n    </ion-col>\n   </ion-row> \n \n   \n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_spends_spends_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-journal_edit-journal_module_ts"],{

/***/ 49333:
/*!*************************************************************!*\
  !*** ./src/app/edit-journal/edit-journal-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditJournalPageRoutingModule": () => (/* binding */ EditJournalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _edit_journal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-journal.page */ 4366);




const routes = [
    {
        path: '',
        component: _edit_journal_page__WEBPACK_IMPORTED_MODULE_0__.EditJournalPage
    }
];
let EditJournalPageRoutingModule = class EditJournalPageRoutingModule {
};
EditJournalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditJournalPageRoutingModule);



/***/ }),

/***/ 72083:
/*!*****************************************************!*\
  !*** ./src/app/edit-journal/edit-journal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditJournalPageModule": () => (/* binding */ EditJournalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _edit_journal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-journal-routing.module */ 49333);
/* harmony import */ var _edit_journal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-journal.page */ 4366);







let EditJournalPageModule = class EditJournalPageModule {
};
EditJournalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_journal_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditJournalPageRoutingModule
        ],
        declarations: [_edit_journal_page__WEBPACK_IMPORTED_MODULE_1__.EditJournalPage]
    })
], EditJournalPageModule);



/***/ }),

/***/ 4366:
/*!***************************************************!*\
  !*** ./src/app/edit-journal/edit-journal.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditJournalPage": () => (/* binding */ EditJournalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _edit_journal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-journal.page.html?ngResource */ 11050);
/* harmony import */ var _edit_journal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-journal.page.scss?ngResource */ 63626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-service.service */ 65465);
/* harmony import */ var _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../syncService/stock-service.service */ 17158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65485);











let EditJournalPage = class EditJournalPage {
    constructor(platform, behavApi, modalController, alertController, authenticationService, storage, loadingController, datePipe, api, toast, route, router) {
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
        this.route = route;
        this.router = router;
        this.notifArr = [];
        this.showNotif = false;
        this.LogHistoryLocalArr = [];
        this.logHistoryArr = [];
        this.isOpenNotif = false;
        this.newNotif = false;
        this.device = '';
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
        this.coloredMsgFrom = false;
        this.coloredMsgFrom3 = false;
        this.coloredMsgTo = false;
        this.coloredMsgTo3 = false;
        // Balance display properties (from cash2)
        this.isAccountPopoverOpen = false;
        this.searchTerm = '';
        this.searchedAccounts = [];
        this.selectedAccountBalance = null;
        this.sourceAccountBalance = null;
        this.loadingAccountBalance = false;
        this.loadingSourceBalance = false;
        this.selectedBankAccount = { id: null, ac_id: null, sub_name: null, sub_type: null, sub_code: null, sub_balance: null, store_id: null, debit: null, credit: null, currentType: null };
        this.checkPlatform();
        this.getAppInfo();
    }
    ngOnInit() {
        // this.route.queryParams.subscribe(params => {
        //   if (params['journalId']) {
        //     console.log('params', params);
        //     this.journalId = params['journalId'];
        //     this.loadJournalData();
        //   }
        // });
    }
    // Account popover methods (from cash2)
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
        this.pickAccount({ target: { value: account.sub_name } }, 1);
        this.isAccountPopoverOpen = false;
        this.loadAccountBalance(account.id);
    }
    checkPlatform() {
        if (this.platform.is('desktop')) {
            this.device = 'desktop';
        }
        else if (this.platform.is('mobile')) {
            this.device = 'mobile';
        }
    }
    ionViewDidEnter() {
        // Notification logic can be added here if needed
    }
    getAppInfo() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
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
                this.getAllAccounts();
                this.getJournalType();
            }
        });
    }
    loadJournalData() {
        console.log('data', this.journalId);
        // Load journal header
        this.api.getJournalById(this.journalId).subscribe(data => {
            console.log('data', data);
            if (data['message'] != 'No record Found') {
                this.originalJournal = data['data'][0];
                this.journal = Object.assign({}, this.originalJournal);
                console.log('journal', this.journal);
                this.pay = this.journal.j_pay;
                // Set transaction type
                if (this.journal.j_type === 'سند دفع') {
                    this.jType = "1";
                }
                else if (this.journal.j_type === 'سند قبض') {
                    this.jType = "2";
                }
                // Load journal details
                this.loadJournalDetails();
            }
        }, (err) => {
            this.presentToast('خطأ في تحميل البيانات', 'danger');
            this.loadingController.dismiss();
        });
    }
    loadJournalDetails() {
        // Load jdetails_from
        console.log('loadJournalDetails');
        this.api.getJFromByJournalId(this.journalId).subscribe(data => {
            console.log('data', data);
            if (data['message'] != 'No record Found') {
                this.originalJdetailFrom = data['data'][0];
                this.jdetail_from = Object.assign({}, this.originalJdetailFrom);
                console.log('jdetail_from', this.jdetail_from);
                // Set account and amount
                // Load jdetails_to
                this.loadJDetailsTo();
            }
        }, (err) => {
            this.presentToast('خطأ في تحميل تفاصيل القيد', 'danger');
            this.loadingController.dismiss();
        });
    }
    loadJDetailsTo() {
        this.api.getJToByJournalId(this.journalId).subscribe(data => {
            if (data['data'][0] != null) {
                this.originalJdetailTo = data['data'][0];
                this.jdetail_to = Object.assign({}, this.originalJdetailTo);
                console.log('jdetail_to', this.jdetail_to);
                // Set bank account   
                this.loadingController.dismiss();
                if (this.jType == "1") {
                    console.log('case jdetail_to', this.jType);
                    this.setBankAccountToDetails();
                    this.setAccountFromDetails();
                }
                else if (this.jType == "2") {
                    console.log('case jdetail from', this.jType);
                    this.setBankAccountFromDetails();
                    this.setAccountToDetails();
                }
            }
            else {
                this.presentToast('لم يتم تحميل تفاصيل القيد', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            this.presentToast('خطأ في تحميل تفاصيل القيد', 'danger');
            this.loadingController.dismiss();
        });
    }
    setAccountFromDetails() {
        // Find account by ac_id
        let account = this.sub_accountFrom.find(acc => acc.id == this.jdetail_from.ac_id);
        console.log('sub_accountFrom', this.sub_accountFrom, account);
        if (account) {
            this.selectedFromAccount = {
                id: account.id,
                ac_id: account.ac_id,
                sub_name: account.sub_name,
                sub_type: account.sub_type,
                sub_code: account.sub_code,
                sub_balance: account.sub_balance,
                store_id: account.store_id,
                debit: account.debit,
                credit: account.credit,
                currentType: account.currentType
            };
            // Load account balance
            this.loadAccountBalance(account.id);
            console.log('jType', this.jType);
        }
    }
    setAccountToDetails() {
        // Find account by ac_id
        let account = this.sub_accountFrom.find(acc => acc.id == this.jdetail_to.ac_id);
        console.log('sub_accountFrom', this.sub_accountFrom, account);
        if (account) {
            this.selectedFromAccount = {
                id: account.id,
                ac_id: account.ac_id,
                sub_name: account.sub_name,
                sub_type: account.sub_type,
                sub_code: account.sub_code,
                sub_balance: account.sub_balance,
                store_id: account.store_id,
                debit: account.debit,
                credit: account.credit,
                currentType: account.currentType
            };
            // Load account balance
            this.loadAccountBalance(account.id);
            console.log('jType', this.jType);
        }
    }
    setBankAccountFromDetails() {
        console.log('setBankAccountFromDetails', this.jdetail_from.ac_id);
        if (this.jdetail_from.ac_id == 46) {
            // Cash account
            this.radioVal = "1";
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
            // Bank account
            let bankAccount = this.banksAccountArray.find(bank => bank.id == this.jdetail_from.ac_id);
            if (bankAccount) {
                this.radioVal = bankAccount.id.toString();
                this.selectedBankAccount = {
                    id: bankAccount.id,
                    ac_id: bankAccount.ac_id,
                    sub_name: bankAccount.sub_name,
                    sub_type: bankAccount.sub_type,
                    sub_code: bankAccount.sub_code,
                    store_id: bankAccount.store_id,
                    sub_balance: bankAccount.sub_balance,
                    currentType: "",
                    debit: bankAccount.debit,
                    credit: bankAccount.credit
                };
                this.loadSourceBalance(bankAccount.id);
            }
        }
    }
    setBankAccountToDetails() {
        console.log('setBankAccountFromDetails', this.jdetail_to.ac_id);
        if (this.jdetail_to.ac_id == 46) {
            // Cash account
            this.radioVal = "1";
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
            // Bank account
            let bankAccount = this.banksAccountArray.find(bank => bank.id == this.jdetail_to.ac_id);
            if (bankAccount) {
                this.radioVal = bankAccount.id.toString();
                this.selectedBankAccount = {
                    id: bankAccount.id,
                    ac_id: bankAccount.ac_id,
                    sub_name: bankAccount.sub_name,
                    sub_type: bankAccount.sub_type,
                    sub_code: bankAccount.sub_code,
                    store_id: bankAccount.store_id,
                    sub_balance: bankAccount.sub_balance,
                    currentType: "",
                    debit: bankAccount.debit,
                    credit: bankAccount.credit
                };
                this.loadSourceBalance(bankAccount.id);
            }
        }
    }
    radioChange(ev) {
        // Handle radio change if needed
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
        let bl;
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
        console.log(this.selectedFromAccount);
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
    validate() {
        if (+this.radioVal == 0 || +this.jType == 0) {
            this.presentToast('الرجاء اختيار  نوع السند ', 'danger');
            return false;
        }
        else if (+this.pay == 0) {
            this.presentToast('الرجاء ادخال المبلغ ', 'danger');
            return false;
        }
        else if (this.selectedFromAccount.id == null) {
            this.presentToast('الرجاء إختيار الحساب ', 'danger');
            return false;
        }
        else {
            return true;
        }
    }
    update() {
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري تحديث البيانات ...');
            this.updateJournal();
        }
    }
    updateJournal() {
        // Prepare updated journal data
        //this.prepareUpdatedJournal();
        this.prepare4save();
        // Update journal header
        this.api.updateJournal(this.journal).subscribe(data => {
            if (data['message'] != 'Post Not Updated') {
                this.updateJournalDetails();
            }
            else {
                this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    prepare4save() {
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
            "id": this.jdetail_to.id,
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
                    id: this.originalJdetailTo.id,
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
                    id: this.originalJdetailTo.id,
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
                    id: this.originalJdetailFrom.id,
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
                    id: this.originalJdetailFrom.id,
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
    prepareUpdatedJournal() {
        // Update journal type
        if (+this.jType == 1) {
            this.journal.j_type = "سند دفع";
        }
        else if (+this.jType == 2) {
            this.journal.j_type = "سند قبض";
        }
        // Update amount
        this.journal.j_pay = +this.pay;
        // Update standard details
        let from = this.selectedFromAccount.sub_name;
        let to = this.selectedBankAccount.sub_name;
        this.journal.standard_details = 'من حساب ' + from + ' الي حساب ' + to;
    }
    updateJournalDetails() {
        // Update jdetails_from
        // this.jdetail_from.ac_id = this.selectedFromAccount.id;
        // this.jdetail_from.j_desc = this.selectedFromAccount.sub_type;
        // if (+this.jType == 1) {
        //   this.jdetail_from.debit = +this.pay;
        //   this.jdetail_from.credit = 0;
        // } else {
        //   this.jdetail_from.credit = +this.pay;
        //   this.jdetail_from.debit = 0;
        // }
        this.api.updateJFrom(this.jdetail_fromArr[0]).subscribe(data => {
            if (data['message'] != 'Post Not Updated') {
                this.updateJDetailsTo();
            }
            else {
                this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    updateJDetailsTo() {
        // Update jdetails_to
        // this.jdetail_to.ac_id = this.selectedBankAccount.id;
        // if (+this.jType == 1) {
        //   this.jdetail_to.credit = +this.pay;
        //   this.jdetail_to.debit = 0;
        // } else {
        //   this.jdetail_to.debit = +this.pay;
        //   this.jdetail_to.credit = 0;
        // }
        this.api.updateJTo(this.jdetail_toArr[0]).subscribe(data => {
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التحديث بنجاح', 'success');
                this.router.navigate(['/folder/spend-record2']);
                this.loadingController.dismiss();
            }
            else {
                this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    getAllAccounts() {
        this.api.getAllAccounts(this.store_info.id, this.year.id).subscribe(data => {
            let res = data;
            this.sub_accountFrom = res['data'];
            this.sub_accountTo = res['data'];
            this.sub_accountFrom = this.sub_accountFrom.filter(x => x.ac_id != 8 && x.ac_id != 9 && x.ac_id != 5);
            console.log('sub_accountFrom', this.sub_accountFrom);
            this.getBanksAccount();
            this.route.queryParams.subscribe(params => {
                if (params['journalId']) {
                    console.log('params', params);
                    this.journalId = params['journalId'];
                    this.loadJournalData();
                }
            });
            this.prepareCurrentBalnces();
        }, (err) => {
        });
    }
    getBanksAccount() {
        this.banksAccountArray = this.sub_accountFrom.filter(x => x.ac_id == 7);
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
            this.getJournalTypeDetails();
        }, (err) => {
        });
    }
    getJournalTypeDetails() {
        this.api.getJournalTypeDetails(this.store_info.id).subscribe(data => {
            let res = data;
            this.journalTypeDetails = res['data'];
        }, (err) => {
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                message: msg,
                translucent: true,
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
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
    // Form validation method (from cash2)
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
    // Delete functionality (from spend-record2)
    delete(j_ref) {
        this.presentAlertConfirm(j_ref);
    }
    presentAlertConfirm(j_ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'تأكيد الحذف',
                message: 'هل أنت متأكد من حذف هذا القيد المحاسبي؟',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'حذف',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.deleteSalesInvo(j_ref);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteSalesInvo(j_ref) {
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        this.api.deleteJournal(j_ref).subscribe(data => {
            console.log('delete Journal response', data);
            if (data['message'] != 'Post Not Deleted') {
                this.deleteJfrom(j_ref);
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    deleteJfrom(j_ref) {
        this.api.deleteJFrom(j_ref).subscribe(data => {
            console.log('delete Jfrom response', data);
            if (data['message'] != 'Post Not Deleted') {
                this.deleteJto(j_ref);
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    deleteJto(j_ref) {
        this.api.deleteJto(j_ref).subscribe(data => {
            console.log('delete Jto response', data);
            if (data['message'] != 'Post Not Deleted') {
                this.presentToast('تم الحذف بنجاح', 'success');
                this.loadingController.dismiss();
                // Navigate back to spend-record2 page
                this.router.navigate(['/spend-record2']);
            }
            else {
                this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }
        }, (err) => {
            console.log(err);
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    // Load balance for selected account (الحساب) - from cash2
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
    // Load balance for source account (المصدر) - from cash2
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
    // Format balance for display (from cash2)
    formatBalance(balance) {
        if (!balance)
            return '0.00';
        const amount = parseFloat(balance.current_balance || 0).toFixed(2);
        const type = balance.balance_type === 'debit' ? 'مدين' : 'دائن';
        return `${amount} ${type}`;
    }
    // Get balance color for styling (from cash2)
    getBalanceColor(balance) {
        if (!balance)
            return 'medium';
        return balance.balance_type === 'debit' ? 'success' : 'danger';
    }
};
EditJournalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _syncService_stock_service_service__WEBPACK_IMPORTED_MODULE_5__.StockServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
EditJournalPage.propDecorators = {
    popoverNotif22: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['popoverNotif22',] }]
};
EditJournalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edit-journal',
        template: _edit_journal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_journal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditJournalPage);



/***/ }),

/***/ 63626:
/*!****************************************************************!*\
  !*** ./src/app/edit-journal/edit-journal.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "/* ========================================\n   APPLE LIQUID GLASS DESIGN SYSTEM\n   Inspired by Apple's visionOS Liquid Glass\n======================================== */\n/* Transparent Header */\n.transparent-header {\n  --background: transparent;\n  --border-width: 0;\n  --box-shadow: none;\n  position: relative;\n  z-index: 10;\n}\n.transparent-toolbar {\n  --background: rgba(255, 255, 255, 0.1);\n  --color: var(--ion-color-primary);\n  --border-width: 0;\n  --box-shadow: none;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  /* Glass reflection effect */\n}\n.transparent-toolbar::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n}\n.glass-title {\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: var(--ion-color-primary);\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  /* Glass text effect */\n  background: linear-gradient(135deg, var(--ion-color-primary) 0%, rgba(0, 122, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.glass-back-button {\n  --color: var(--ion-color-primary);\n  --background: rgba(255, 255, 255, 0.1);\n  --border-radius: 8px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 0.5px solid rgba(128, 128, 128, 0.2);\n}\n.glass-back-button:hover {\n  --background: rgba(255, 255, 255, 0.2);\n  transform: scale(1.05);\n}\n/* Core Liquid Glass Variables */\n:root {\n  /* Glass Material Properties */\n  --liquid-glass-bg: rgba(255, 255, 255, 0.15);\n  --liquid-glass-bg-light: rgba(255, 255, 255, 0.25);\n  --liquid-glass-bg-dark: rgba(0, 0, 0, 0.15);\n  --liquid-glass-border: rgba(255, 255, 255, 0.2);\n  --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  --liquid-glass-highlight: rgba(255, 255, 255, 0.4);\n  /* Blur and Effects */\n  --glass-blur: 20px;\n  --glass-blur-strong: 40px;\n  --glass-border-radius: 20px;\n  --glass-border-radius-small: 12px;\n  /* Dynamic Colors */\n  --glass-accent-primary: rgba(0, 122, 255, 0.8);\n  --glass-accent-success: rgba(52, 199, 89, 0.8);\n  --glass-accent-danger: rgba(255, 59, 48, 0.8);\n  /* Animation Properties */\n  --glass-transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-transition-fast: all 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);\n  --glass-scale-hover: 1.02;\n  --glass-scale-active: 0.98;\n}\n/* Dark Mode Glass Variables */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --liquid-glass-bg: rgba(0, 0, 0, 0.25);\n    --liquid-glass-bg-light: rgba(255, 255, 255, 0.1);\n    --liquid-glass-bg-dark: rgba(0, 0, 0, 0.4);\n    --liquid-glass-border: rgba(255, 255, 255, 0.1);\n    --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n    --liquid-glass-highlight: rgba(255, 255, 255, 0.2);\n  }\n}\n/* Modern Content with Glass Background */\n.modern-content {\n  --background: linear-gradient(135deg,\n    rgba(120, 119, 198, 0.1) 0%,\n    rgba(255, 255, 255, 0.05) 50%,\n    rgba(74, 144, 226, 0.1) 100%);\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  position: relative;\n  overflow: hidden;\n}\n/* Animated Background Glass Effect */\n.modern-content::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);\n  animation: glassShimmer 8s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 0;\n}\n@keyframes glassShimmer {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.05);\n  }\n}\n/* Glass Loading State */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  gap: 2rem;\n  position: relative;\n  /* Glass loading background */\n}\n.loading-container::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  transform: translate(-50%, -50%);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  animation: loadingPulse 2s ease-in-out infinite;\n  z-index: 0;\n}\n@keyframes loadingPulse {\n  0%, 100% {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 0.3;\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.1);\n    opacity: 0.6;\n  }\n}\n/* Glass Loading Spinner */\n.loading-container ion-spinner {\n  position: relative;\n  z-index: 2;\n  filter: drop-shadow(0 0 15px rgba(0, 122, 255, 0.4));\n  /* Enhanced spinner with glass effect */\n}\n.loading-container ion-spinner::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 50%;\n  border: 1px solid var(--liquid-glass-border);\n  animation: spinnerGlow 1.5s ease-in-out infinite;\n  z-index: -1;\n}\n@keyframes spinnerGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 rgba(0, 122, 255, 0);\n  }\n  50% {\n    box-shadow: 0 0 20px rgba(0, 122, 255, 0.3);\n  }\n}\n.loading-text {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n  position: relative;\n  z-index: 2;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  /* Glass text shimmer */\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 122, 255, 0.8) 50%, rgba(0, 0, 0, 0.8) 100%);\n  background-size: 200% 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: textShimmer 2s ease-in-out infinite;\n}\n@keyframes textShimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n/* Main Container with Glass Environment */\n.main-container {\n  padding: 2rem;\n  max-width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n/* Form Container with Floating Effect */\n.form-container {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  max-width: 800px;\n  min-width: 400px;\n  position: relative;\n  z-index: 2;\n  /* Floating Animation */\n  animation: glassFloat 6s ease-in-out infinite;\n}\n@keyframes glassFloat {\n  0%, 100% {\n    transform: translateY(0px) rotateX(0deg);\n  }\n  50% {\n    transform: translateY(-8px) rotateX(1deg);\n  }\n}\n/* Liquid Glass Form Card */\n.form-card {\n  margin: 0;\n  border-radius: var(--glass-border-radius);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 0.5px solid rgba(128, 128, 128, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1), var(--liquid-glass-shadow), 0 0 0 1px var(--liquid-glass-highlight) inset, 0 1px 0 var(--liquid-glass-highlight) inset;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  max-height: 85vh;\n  position: relative;\n  transition: var(--glass-transition);\n  /* 3D Perspective */\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  /* Glass Reflection Effect */\n  /* Specular Highlight */\n}\n.form-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius) var(--glass-border-radius) 0 0;\n  z-index: 1;\n}\n.form-card::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: radial-gradient(circle at center, var(--liquid-glass-highlight) 0%, transparent 50%);\n  opacity: 0;\n  pointer-events: none;\n  transition: var(--glass-transition);\n  z-index: 2;\n  animation: glassSpecular 4s ease-in-out infinite;\n}\n@keyframes glassSpecular {\n  0%, 100% {\n    opacity: 0;\n    transform: scale(0.8) rotate(0deg);\n  }\n  50% {\n    opacity: 0.1;\n    transform: scale(1.2) rotate(180deg);\n  }\n}\n/* Glass Card Hover Effects */\n.form-card:hover {\n  transform: translateY(-4px) scale(var(--glass-scale-hover));\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 15px rgba(0, 0, 0, 0.15), 0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--liquid-glass-highlight) inset, 0 1px 0 var(--liquid-glass-highlight) inset;\n  border-color: rgba(128, 128, 128, 0.4);\n}\n.form-card:hover::after {\n  opacity: 0.15;\n}\n/* Glass Card Header */\n.card-header {\n  background: var(--ion-color-primary) !important;\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: none;\n  border-bottom: 1px solid var(--liquid-glass-border);\n  padding: 0.8rem 1rem;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 3;\n  /* Glass Header Reflection */\n}\n.card-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.4;\n  pointer-events: none;\n}\n.card-title {\n  font-size: 1.1rem;\n  font-weight: 800;\n  margin: 0;\n  text-align: center;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 1;\n  /* Glass Text Effect */\n  background: linear-gradient(135deg, white 0%, rgba(255, 255, 255, 0.8) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.compact-content {\n  padding: 0.8rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  overflow-y: auto;\n  max-height: calc(85vh - 60px);\n}\n/* Field Rows - Each field in separate row */\n.field-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  min-height: auto;\n  padding: 0.2rem 0;\n  margin-bottom: 0.1rem;\n}\n/* Right-aligned Labels */\n.field-label-right {\n  flex: 0 0 100px;\n  text-align: right;\n  direction: rtl;\n  font-size: 1rem !important;\n  font-weight: 700;\n  color: #000000;\n  margin: 0;\n  padding-right: 0.5rem;\n  padding-top: 0.4rem;\n  align-self: flex-start;\n}\n/* Premium Glass Segment Controls */\n.mini-segment {\n  flex: 1;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 1px solid var(--liquid-glass-border);\n  border-radius: var(--glass-border-radius-small);\n  padding: 0.2rem;\n  height: 2.4rem;\n  min-height: 2.4rem;\n  position: relative;\n  overflow: hidden;\n  /* Glass segment reflection */\n}\n.mini-segment::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.2;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-segment ion-segment-button {\n  --indicator-color: transparent;\n  --indicator-color-checked: transparent;\n  --color: rgba(0, 0, 0, 0.7);\n  --color-checked: white;\n  --background: transparent;\n  --background-checked: var(--glass-accent-primary);\n  border-radius: var(--glass-border-radius-small);\n  margin: 0.1rem;\n  min-height: 1.8rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  /* Glass button effect */\n}\n.mini-segment ion-segment-button::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--liquid-glass-bg-light);\n  border-radius: var(--glass-border-radius-small);\n  opacity: 0;\n  transition: var(--glass-transition);\n  pointer-events: none;\n}\n.mini-segment ion-segment-button:hover::before {\n  opacity: 1;\n}\n.mini-segment ion-segment-button.segment-button-checked {\n  background: linear-gradient(135deg, var(--ion-color-primary) 0%, var(--ion-color-primary-shade) 100%);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow: 0 4px 15px rgba(var(--ion-color-primary-rgb), 0.3), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  transform: translateY(-1px);\n}\n.mini-segment ion-segment-button.segment-button-checked::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-segment ion-segment-button .segment-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n.mini-segment ion-segment-button .segment-content ion-icon {\n  font-size: 1.2rem;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));\n}\n.mini-segment ion-segment-button .segment-content span {\n  font-size: 1rem;\n  font-weight: 700;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n/* Glass Input Fields */\n.mini-input {\n  flex: 1;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  --padding-top: 0.5rem;\n  --padding-bottom: 0.5rem;\n  border: 0.5px solid rgba(128, 128, 128, 0.4);\n  border-radius: var(--glass-border-radius-small);\n  font-size: 0.9rem;\n  font-weight: 500;\n  min-height: 2.2rem;\n  max-height: 2.2rem;\n  transition: var(--glass-transition);\n  position: relative;\n  z-index: 2;\n  /* Glass reflection effect */\n}\n.mini-input::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  background: linear-gradient(135deg, var(--liquid-glass-highlight) 0%, transparent 50%);\n  opacity: 0.1;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small);\n}\n.mini-input:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15), 0 0 0 3px rgba(0, 122, 255, 0.1);\n  background: var(--liquid-glass-bg);\n}\n.mini-input.readonly-input {\n  --color: rgba(0, 0, 0, 0.8);\n  cursor: pointer;\n  background: var(--liquid-glass-bg);\n}\n.mini-input.readonly-input:hover {\n  transform: translateY(-1px);\n  background: var(--liquid-glass-bg-light);\n}\n.mini-input.amount-input {\n  font-size: 1.2rem;\n  font-weight: 700;\n  --color: var(--glass-accent-primary);\n  text-align: center;\n}\n.mini-input.amount-input:focus-within {\n  --color: rgba(0, 122, 255, 1);\n  text-shadow: 0 0 10px rgba(0, 122, 255, 0.3);\n}\n/* Glass Select Fields */\n.mini-select {\n  flex: 1;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  border: 0.5px solid rgba(128, 128, 128, 0.4);\n  border-radius: var(--glass-border-radius-small);\n  font-size: 0.9rem;\n  font-weight: 500;\n  min-height: 2.2rem;\n  max-height: 2.2rem;\n  transition: var(--glass-transition);\n  position: relative;\n  z-index: 2;\n}\n.mini-select:hover {\n  transform: translateY(-1px);\n  background: var(--liquid-glass-bg);\n  border-color: var(--glass-accent-primary);\n}\n.mini-select:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15), 0 0 0 3px rgba(0, 122, 255, 0.1);\n}\n/* Glass Textarea Fields */\n.mini-textarea {\n  flex: 1;\n  background: var(--liquid-glass-bg-light);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  --color: rgba(0, 0, 0, 0.9);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --padding-start: 0.8rem;\n  --padding-end: 0.8rem;\n  --padding-top: 0.5rem;\n  --padding-bottom: 0.5rem;\n  border: 0.5px solid rgba(128, 128, 128, 0.4);\n  border-radius: var(--glass-border-radius-small);\n  font-size: 0.9rem;\n  font-weight: 500;\n  min-height: 2.2rem;\n  max-height: 2.2rem;\n  resize: none;\n  transition: var(--glass-transition);\n}\n.mini-textarea:focus-within {\n  transform: translateY(-2px);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15), 0 0 0 3px rgba(0, 122, 255, 0.1);\n  background: var(--liquid-glass-bg);\n}\n/* Input with Icon */\n.input-with-icon {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  z-index: 2;\n}\n/* Field with Balance Container */\n.field-with-balance {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  position: relative;\n}\n/* Floating Glass Balance Displays */\n.balance-display {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  border-radius: var(--glass-border-radius-small);\n  border: 1px solid var(--liquid-glass-border);\n  min-height: 1.8rem;\n  max-height: 1.8rem;\n  font-size: 0.75rem;\n  direction: rtl;\n  text-align: right;\n  position: relative;\n  overflow: hidden;\n  transition: var(--glass-transition);\n  margin-top: 0.1rem;\n  z-index: 1;\n  width: 100%;\n  clear: both;\n  /* Reduce floating animation */\n  animation: none;\n  /* Glass reflection */\n  /* Dynamic highlight */\n}\n.balance-display::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.2;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.balance-display::after {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -50%;\n  width: 200%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent 0%, var(--liquid-glass-highlight) 50%, transparent 100%);\n  animation: balanceShimmer 2s ease-in-out infinite;\n  opacity: 0.6;\n}\n.balance-display:hover {\n  transform: translateY(-2px) scale(1.02);\n  background: var(--liquid-glass-bg-light);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n@keyframes balanceFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-2px);\n  }\n}\n@keyframes balanceShimmer {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n.balance-label {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 0.7rem;\n  position: relative;\n  z-index: 1;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.balance-amount {\n  font-weight: 800;\n  font-size: 0.8rem;\n  flex: 1;\n  text-align: left;\n  position: relative;\n  z-index: 1;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n  /* Dynamic color based on balance type */\n}\n.balance-amount.positive {\n  color: var(--glass-accent-success);\n  text-shadow: 0 0 10px rgba(52, 199, 89, 0.3);\n}\n.balance-amount.negative {\n  color: var(--glass-accent-danger);\n  text-shadow: 0 0 10px rgba(255, 59, 48, 0.3);\n}\n.balance-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: var(--glass-accent-primary);\n  font-size: 0.7rem;\n  position: relative;\n  z-index: 1;\n}\n.balance-loading ion-spinner {\n  width: 12px;\n  height: 12px;\n  filter: drop-shadow(0 0 5px rgba(0, 122, 255, 0.3));\n}\n.balance-loading span {\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.balance-error {\n  color: var(--glass-accent-danger);\n  font-size: 0.7rem;\n  font-style: italic;\n  font-weight: 600;\n  position: relative;\n  z-index: 1;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n  filter: drop-shadow(0 0 5px rgba(255, 59, 48, 0.2));\n}\n.dropdown-icon {\n  position: absolute;\n  right: 0.4rem;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n/* Glass Button Row */\n.button-row {\n  display: flex;\n  gap: 1.2rem;\n  margin-top: 0.8rem;\n  padding-top: 0.8rem;\n  justify-content: center;\n  border-top: 1px solid var(--liquid-glass-border);\n  position: relative;\n  /* Glass divider effect */\n}\n.button-row::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 20%;\n  right: 20%;\n  height: 1px;\n  background: linear-gradient(90deg, transparent 0%, var(--liquid-glass-highlight) 50%, transparent 100%);\n  opacity: 0.5;\n}\n/* 3D Glass Buttons */\n.mini-btn {\n  flex: 0 0 120px;\n  border-radius: var(--glass-border-radius-small);\n  font-size: 1rem;\n  font-weight: 700;\n  min-height: 3.2rem;\n  max-height: 3.2rem;\n  transition: var(--glass-transition);\n  position: relative;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  /* Base glass material */\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid var(--liquid-glass-border);\n  /* 3D Depth Effect */\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05), 0 0 0 1px var(--liquid-glass-highlight) inset;\n  /* Glass reflection */\n  /* Interactive States */\n  /* Save Button - Primary Glass */\n  /* Delete Button - Pale Red Outline */\n  /* Clear Button - Secondary Glass */\n}\n.mini-btn::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius-small) var(--glass-border-radius-small) 0 0;\n}\n.mini-btn:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn:hover::before {\n  opacity: 0.5;\n}\n.mini-btn:active {\n  transform: translateY(-1px) scale(0.98);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.save-btn {\n  background: linear-gradient(135deg, var(--glass-accent-success) 0%, rgba(52, 199, 89, 0.9) 100%);\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  border-color: rgba(52, 199, 89, 0.3);\n  box-shadow: 0 6px 15px rgba(52, 199, 89, 0.3), 0 2px 4px rgba(52, 199, 89, 0.2), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.save-btn:hover {\n  background: linear-gradient(135deg, rgba(52, 199, 89, 0.9) 0%, #34c759 100%);\n  box-shadow: 0 12px 30px rgba(52, 199, 89, 0.4), 0 4px 8px rgba(52, 199, 89, 0.3), 0 0 0 1px var(--liquid-glass-highlight) inset;\n}\n.mini-btn.save-btn:disabled {\n  background: var(--liquid-glass-bg-dark);\n  color: rgba(255, 255, 255, 0.5);\n  text-shadow: none;\n  transform: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-border) inset;\n  cursor: not-allowed;\n}\n.mini-btn.save-btn:disabled:hover {\n  transform: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--liquid-glass-border) inset;\n}\n.mini-btn.delete-btn {\n  background: transparent;\n  color: #f04141;\n  text-shadow: none;\n  border: 2px solid #f04141;\n  border-color: #f04141;\n  box-shadow: 0 2px 6px rgba(240, 65, 65, 0.1), 0 1px 2px rgba(240, 65, 65, 0.05);\n}\n.mini-btn.delete-btn:hover {\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 6px 15px rgba(240, 65, 65, 0.15), 0 2px 4px rgba(240, 65, 65, 0.1);\n}\n.mini-btn.clear-btn {\n  background: var(--liquid-glass-bg-light);\n  color: rgba(0, 0, 0, 0.7);\n  border-color: var(--liquid-glass-border);\n}\n.mini-btn.clear-btn:hover {\n  background: var(--liquid-glass-bg);\n  color: rgba(0, 0, 0, 0.9);\n  border-color: var(--glass-accent-primary);\n}\n/* Popover Styles */\nion-popover {\n  --width: 320px;\n  --max-width: 90vw;\n  --height: 60vh;\n  --max-height: 400px;\n  --border-radius: 8px;\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  direction: rtl;\n}\nion-searchbar {\n  --background: #f8f9fa;\n  --color: #000000;\n  --placeholder-color: var(--ion-color-medium);\n  --border-radius: 6px;\n  --box-shadow: none;\n  --icon-color: var(--ion-color-primary);\n  padding: 0.4rem;\n  --min-height: 2.5rem;\n  direction: rtl;\n  text-align: right;\n}\nion-list {\n  --background: white;\n}\nion-item {\n  --background: white;\n  --color: #000000;\n  --border-color: #f1f3f4;\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  --min-height: 2.5rem;\n  font-size: 1rem;\n  direction: rtl;\n  text-align: right;\n}\nion-item:hover {\n  --background: #f8f9fa;\n}\nion-item:active {\n  --background: #e9ecef;\n}\n/* Select Interface Styling */\nion-select {\n  --placeholder-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n  font-size: 0.85rem;\n}\nion-select-option {\n  font-size: 0.85rem;\n  --color: var(--ion-color-dark);\n}\nion-action-sheet {\n  --button-color: var(--ion-color-dark);\n  --button-background: white;\n  --button-background-hover: #f8f9fa;\n  --button-background-focused: #f8f9fa;\n  --button-background-activated: #e9ecef;\n}\n/* Mobile Glass Responsive Design */\n@media (max-width: 768px) {\n  /* Mobile Glass Environment */\n  .form-container {\n    width: 92%;\n    min-width: 320px;\n    /* Reduced floating animation for mobile */\n    animation: none;\n  }\n\n  .main-container {\n    padding: 1rem;\n    height: 100dvh;\n    /* Dynamic viewport height for mobile */\n  }\n\n  /* Mobile Glass Card */\n  .form-card {\n    /* Reduced glass blur for performance */\n    backdrop-filter: blur(15px);\n    -webkit-backdrop-filter: blur(15px);\n    border-radius: 16px;\n    /* Simplified hover effects for touch */\n  }\n  .form-card:hover {\n    transform: none;\n  }\n\n  /* Mobile Glass Content */\n  .compact-content {\n    padding: 1.2rem;\n    gap: 1rem;\n  }\n\n  .field-row {\n    min-height: 3.5rem;\n    gap: 1rem;\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .field-label-right {\n    flex: none;\n    text-align: right;\n    font-size: 1rem !important;\n    margin-bottom: 0.3rem;\n  }\n\n  /* Mobile Glass Inputs */\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 3rem;\n    max-height: 3rem;\n    font-size: 1rem;\n    border-radius: 10px;\n    /* Enhanced touch target */\n  }\n  .mini-input:focus-within,\n.mini-select:focus-within,\n.mini-textarea:focus-within {\n    transform: none;\n    /* Remove translateY for mobile */\n    border-color: var(--glass-accent-primary);\n    box-shadow: 0 4px 15px rgba(0, 122, 255, 0.2), 0 0 0 2px rgba(0, 122, 255, 0.15);\n  }\n\n  /* Mobile Glass Segment */\n  .mini-segment {\n    height: 3.5rem;\n    min-height: 3.5rem;\n    border-radius: 10px;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 2.5rem;\n    font-size: 0.95rem;\n    border-radius: 8px;\n    /* Enhanced touch feedback */\n  }\n  .mini-segment ion-segment-button:active {\n    transform: scale(0.95);\n  }\n  .mini-segment ion-segment-button .segment-content {\n    gap: 0.4rem;\n  }\n  .mini-segment ion-segment-button .segment-content ion-icon {\n    font-size: 1.1rem;\n  }\n  .mini-segment ion-segment-button .segment-content span {\n    font-size: 0.95rem;\n  }\n\n  /* Mobile Glass Buttons */\n  .mini-btn {\n    min-height: 3.2rem;\n    max-height: 3.2rem;\n    font-size: 0.95rem;\n    flex: 0 0 110px;\n    border-radius: 10px;\n    /* Touch-optimized interactions */\n  }\n  .mini-btn:hover {\n    transform: scale(1.02);\n  }\n  .mini-btn:active {\n    transform: scale(0.98);\n  }\n\n  /* Mobile Glass Balance */\n  .balance-display {\n    min-height: 2.2rem;\n    padding: 0.6rem 0.8rem;\n    font-size: 0.85rem;\n    border-radius: 8px;\n    /* Reduced animation for mobile */\n    animation: none;\n  }\n  .balance-display:hover {\n    transform: scale(1.02);\n  }\n\n  .balance-label {\n    font-size: 0.8rem;\n  }\n\n  .balance-amount {\n    font-size: 0.9rem;\n  }\n\n  /* Mobile Button Row */\n  .button-row {\n    gap: 1rem;\n    margin-top: 1.5rem;\n    flex-direction: column;\n  }\n  .button-row .mini-btn {\n    flex: none;\n    width: 100%;\n  }\n\n  /* Mobile Glass Background - Reduced for performance */\n  .modern-content::before {\n    animation-duration: 12s;\n    /* Slower animation */\n  }\n}\n@media (max-width: 480px) {\n  /* Extra Small Mobile Optimization */\n  .form-container {\n    width: 95%;\n    margin: 0 auto;\n  }\n\n  .main-container {\n    padding: 0.8rem;\n  }\n\n  .compact-content {\n    padding: 1rem;\n    gap: 0.8rem;\n  }\n\n  .field-row {\n    min-height: 3rem;\n  }\n\n  .field-label-right {\n    font-size: 0.9rem !important;\n  }\n\n  /* Smaller glass components for extra small screens */\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    min-height: 2.8rem;\n    max-height: 2.8rem;\n    font-size: 0.9rem;\n    border-radius: 8px;\n  }\n\n  .mini-segment {\n    height: 3rem;\n    min-height: 3rem;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 2.2rem;\n    font-size: 0.85rem;\n  }\n  .mini-segment ion-segment-button .segment-content ion-icon {\n    font-size: 1rem;\n  }\n  .mini-segment ion-segment-button .segment-content span {\n    font-size: 0.85rem;\n  }\n\n  .mini-btn {\n    min-height: 2.8rem;\n    max-height: 2.8rem;\n    font-size: 0.85rem;\n  }\n\n  .balance-display {\n    min-height: 2rem;\n    padding: 0.5rem 0.7rem;\n    font-size: 0.8rem;\n  }\n\n  .balance-label {\n    font-size: 0.75rem;\n  }\n\n  .balance-amount {\n    font-size: 0.85rem;\n  }\n}\n/* Enhanced Dark Mode Glass Materials */\n@media (prefers-color-scheme: dark) {\n  .modern-content {\n    --background: linear-gradient(135deg,\n      rgba(30, 30, 30, 0.95) 0%,\n      rgba(0, 0, 0, 0.9) 50%,\n      rgba(20, 20, 40, 0.95) 100%);\n  }\n\n  .modern-content::before {\n    background: radial-gradient(circle at 20% 50%, rgba(60, 60, 120, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(40, 80, 140, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);\n  }\n\n  /* Dark Glass Form Card */\n  .form-card {\n    background: var(--liquid-glass-bg-dark);\n    border: 0.5px solid rgba(128, 128, 128, 0.2);\n    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5), 0 6px 12px rgba(0, 0, 0, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset;\n  }\n  .form-card:hover {\n    border-color: rgba(128, 128, 128, 0.3);\n  }\n\n  /* Dark Glass Header */\n  .card-header {\n    background: linear-gradient(135deg, rgba(0, 122, 255, 0.6) 0%, rgba(0, 100, 200, 0.8) 100%);\n    border-bottom-color: rgba(255, 255, 255, 0.08);\n  }\n\n  .card-title {\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  /* Dark Glass Inputs */\n  .mini-input,\n.mini-select,\n.mini-textarea {\n    background: rgba(0, 0, 0, 0.3);\n    border: 0.5px solid rgba(128, 128, 128, 0.3);\n    --color: rgba(255, 255, 255, 0.9);\n    --placeholder-color: rgba(255, 255, 255, 0.4);\n  }\n  .mini-input:focus-within,\n.mini-select:focus-within,\n.mini-textarea:focus-within {\n    background: rgba(0, 0, 0, 0.2);\n    border-color: rgba(0, 122, 255, 0.8);\n    box-shadow: 0 8px 25px rgba(0, 122, 255, 0.2), 0 0 0 3px rgba(0, 122, 255, 0.15);\n  }\n  .mini-input.readonly-input:hover,\n.mini-select.readonly-input:hover,\n.mini-textarea.readonly-input:hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n  .mini-input.amount-input,\n.mini-select.amount-input,\n.mini-textarea.amount-input {\n    --color: rgba(0, 180, 255, 0.9);\n  }\n  .mini-input.amount-input:focus-within,\n.mini-select.amount-input:focus-within,\n.mini-textarea.amount-input:focus-within {\n    --color: rgba(0, 180, 255, 1);\n    text-shadow: 0 0 15px rgba(0, 180, 255, 0.4);\n  }\n\n  /* Dark Glass Segment */\n  .mini-segment {\n    background: rgba(0, 0, 0, 0.3);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n\n  .mini-segment ion-segment-button {\n    --color: rgba(255, 255, 255, 0.7);\n    --color-checked: white;\n  }\n  .mini-segment ion-segment-button.segment-button-checked {\n    background: linear-gradient(135deg, var(--ion-color-primary) 0%, var(--ion-color-primary-shade) 100%);\n    box-shadow: 0 4px 15px rgba(var(--ion-color-primary-rgb), 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;\n  }\n\n  /* Dark Glass Buttons */\n  .mini-btn {\n    background: rgba(0, 0, 0, 0.3);\n    border-color: rgba(255, 255, 255, 0.1);\n    color: rgba(255, 255, 255, 0.9);\n  }\n  .mini-btn.save-btn {\n    background: linear-gradient(135deg, rgba(52, 199, 89, 0.7) 0%, rgba(40, 180, 70, 0.8) 100%);\n    border-color: rgba(52, 199, 89, 0.3);\n    color: white;\n  }\n  .mini-btn.save-btn:hover {\n    background: linear-gradient(135deg, rgba(52, 199, 89, 0.8) 0%, rgba(40, 180, 70, 0.9) 100%);\n  }\n  .mini-btn.save-btn:disabled {\n    background: rgba(0, 0, 0, 0.4);\n    color: rgba(255, 255, 255, 0.3);\n    border-color: rgba(255, 255, 255, 0.05);\n  }\n  .mini-btn.delete-btn {\n    background: linear-gradient(135deg, rgba(255, 59, 48, 0.7) 0%, rgba(220, 50, 40, 0.8) 100%);\n    border-color: rgba(255, 59, 48, 0.3);\n    color: white;\n  }\n  .mini-btn.delete-btn:hover {\n    background: linear-gradient(135deg, rgba(255, 59, 48, 0.8) 0%, rgba(220, 50, 40, 0.9) 100%);\n  }\n  .mini-btn.clear-btn {\n    background: rgba(0, 0, 0, 0.2);\n    color: rgba(255, 255, 255, 0.7);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n  .mini-btn.clear-btn:hover {\n    background: rgba(0, 0, 0, 0.3);\n    color: rgba(255, 255, 255, 0.9);\n    border-color: rgba(0, 122, 255, 0.5);\n  }\n\n  /* Dark Glass Balance Displays */\n  .balance-display {\n    background: rgba(0, 0, 0, 0.3);\n    border-color: rgba(255, 255, 255, 0.08);\n  }\n  .balance-display:hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n\n  .balance-label {\n    color: rgba(255, 255, 255, 0.7);\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  .balance-loading span {\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  .balance-error {\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  /* Dark Glass Field Labels */\n  .field-label-right {\n    color: rgba(255, 255, 255, 0.9);\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  }\n\n  /* Dark Loading State */\n  .loading-text {\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(0, 180, 255, 0.9) 50%, rgba(255, 255, 255, 0.8) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n}\n/* Focus States */\n.mini-input:focus-within,\n.mini-select:focus-within,\n.mini-textarea:focus-within {\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 0 0 1px rgba(var(--ion-color-primary-rgb), 0.2);\n}\n/* Touch Optimization */\n@media (hover: none) and (pointer: coarse) {\n  .mini-input,\n.mini-select,\n.mini-textarea,\n.mini-btn {\n    min-height: 32px;\n  }\n\n  .mini-segment ion-segment-button {\n    min-height: 30px;\n  }\n\n  .field-row {\n    min-height: 36px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtam91cm5hbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzswQ0FBQTtBQUtBLHVCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0Usc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBRUEsNEJBQUE7QUFERjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtGQUFBO0VBS0EsWUFBQTtFQUNBLG9CQUFBO0FBSko7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLCtDQUFBO0VBRUEsc0JBQUE7RUFDQSw2RkFBQTtFQUtBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQVZGO0FBYUE7RUFDRSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNENBQUE7QUFWRjtBQVlFO0VBQ0Usc0NBQUE7RUFDQSxzQkFBQTtBQVZKO0FBY0EsZ0NBQUE7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSxrREFBQTtFQUNBLDJDQUFBO0VBQ0EsK0NBQUE7RUFDQSxxREFBQTtFQUNBLGtEQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUVBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSw4Q0FBQTtFQUNBLDZDQUFBO0VBRUEseUJBQUE7RUFDQSwyREFBQTtFQUNBLGlFQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQWRGO0FBaUJBLDhCQUFBO0FBQ0E7RUFDRTtJQUNFLHNDQUFBO0lBQ0EsaURBQUE7SUFDQSwwQ0FBQTtJQUNBLCtDQUFBO0lBQ0Esb0RBQUE7SUFD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TkY7QUE2TkEsdUJBQUE7QUFDQTtFQUNFOzs7O0lBSUUsZ0JBQUE7RUExTkY7O0VBNk5BO0lBQ0UsZ0JBQUE7RUExTkY7O0VBNk5BO0lBQ0UsZ0JBQUE7RUExTkY7QUFDRiIsImZpbGUiOiJlZGl0LWpvdXJuYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQVBQTEUgTElRVUlEIEdMQVNTIERFU0lHTiBTWVNURU1cbiAgIEluc3BpcmVkIGJ5IEFwcGxlJ3MgdmlzaW9uT1MgTGlxdWlkIEdsYXNzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qIFRyYW5zcGFyZW50IEhlYWRlciAqL1xuLnRyYW5zcGFyZW50LWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi50cmFuc3BhcmVudC10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgXG4gIC8qIEdsYXNzIHJlZmxlY3Rpb24gZWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4uZ2xhc3MtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIFxuICAvKiBHbGFzcyB0ZXh0IGVmZmVjdCAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwJSxcbiAgICByZ2JhKDAsIDEyMiwgMjU1LCAwLjgpIDEwMCVcbiAgKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xufVxuXG4uZ2xhc3MtYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XG4gIFxuICAmOmhvdmVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG59XG5cbi8qIENvcmUgTGlxdWlkIEdsYXNzIFZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICAvKiBHbGFzcyBNYXRlcmlhbCBQcm9wZXJ0aWVzICovXG4gIC0tbGlxdWlkLWdsYXNzLWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAtLWxpcXVpZC1nbGFzcy1iZy1saWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgLS1saXF1aWQtZ2xhc3MtYmctZGFyazogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLS1saXF1aWQtZ2xhc3MtYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIC0tbGlxdWlkLWdsYXNzLXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgXG4gIC8qIEJsdXIgYW5kIEVmZmVjdHMgKi9cbiAgLS1nbGFzcy1ibHVyOiAyMHB4O1xuICAtLWdsYXNzLWJsdXItc3Ryb25nOiA0MHB4O1xuICAtLWdsYXNzLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbDogMTJweDtcbiAgXG4gIC8qIER5bmFtaWMgQ29sb3JzICovXG4gIC0tZ2xhc3MtYWNjZW50LXByaW1hcnk6IHJnYmEoMCwgMTIyLCAyNTUsIDAuOCk7XG4gIC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3M6IHJnYmEoNTIsIDE5OSwgODksIDAuOCk7XG4gIC0tZ2xhc3MtYWNjZW50LWRhbmdlcjogcmdiYSgyNTUsIDU5LCA0OCwgMC44KTtcbiAgXG4gIC8qIEFuaW1hdGlvbiBQcm9wZXJ0aWVzICovXG4gIC0tZ2xhc3MtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAtLWdsYXNzLXRyYW5zaXRpb24tZmFzdDogYWxsIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgLS1nbGFzcy1zY2FsZS1ob3ZlcjogMS4wMjtcbiAgLS1nbGFzcy1zY2FsZS1hY3RpdmU6IDAuOTg7XG59XG5cbi8qIERhcmsgTW9kZSBHbGFzcyBWYXJpYWJsZXMgKi9cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgOnJvb3Qge1xuICAgIC0tbGlxdWlkLWdsYXNzLWJnOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmctZGFyazogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIC0tbGlxdWlkLWdsYXNzLWJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIC0tbGlxdWlkLWdsYXNzLXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cbn1cblxuLyogTW9kZXJuIENvbnRlbnQgd2l0aCBHbGFzcyBCYWNrZ3JvdW5kICovXG4ubW9kZXJuLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxuICAgIHJnYmEoMTIwLCAxMTksIDE5OCwgMC4xKSAwJSwgXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSA1MCUsIFxuICAgIHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpIDEwMCUpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBBbmltYXRlZCBCYWNrZ3JvdW5kIEdsYXNzIEVmZmVjdCAqL1xuLm1vZGVybi1jb250ZW50OjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDUwJSwgcmdiYSgxMjAsIDExOSwgMTk4LCAwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDIwJSwgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA0MCUgODAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICBhbmltYXRpb246IGdsYXNzU2hpbW1lciA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG59XG5cbkBrZXlmcmFtZXMgZ2xhc3NTaGltbWVyIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAwLjM7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgb3BhY2l0eTogMC42OyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XG59XG5cbi8qIEdsYXNzIExvYWRpbmcgU3RhdGUgKi9cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGdhcDogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgLyogR2xhc3MgbG9hZGluZyBiYWNrZ3JvdW5kICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKTtcbiAgICBhbmltYXRpb246IGxvYWRpbmdQdWxzZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZ1B1bHNlIHtcbiAgMCUsIDEwMCUgeyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbiAgNTAlIHsgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbn1cblxuLyogR2xhc3MgTG9hZGluZyBTcGlubmVyICovXG4ubG9hZGluZy1jb250YWluZXIgaW9uLXNwaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDE1cHggcmdiYSgwLCAxMjIsIDI1NSwgMC40KSk7XG4gIFxuICAvKiBFbmhhbmNlZCBzcGlubmVyIHdpdGggZ2xhc3MgZWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICAgIGFuaW1hdGlvbjogc3Bpbm5lckdsb3cgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW5uZXJHbG93IHtcbiAgMCUsIDEwMCUgeyBcbiAgICBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDEyMiwgMjU1LCAwKTtcbiAgfVxuICA1MCUgeyBcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjMpO1xuICB9XG59XG5cbi5sb2FkaW5nLXRleHQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBcbiAgLyogR2xhc3MgdGV4dCBzaGltbWVyICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICA5MGRlZyxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOCkgMCUsXG4gICAgcmdiYSgwLCAxMjIsIDI1NSwgMC44KSA1MCUsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjgpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYW5pbWF0aW9uOiB0ZXh0U2hpbW1lciAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyB0ZXh0U2hpbW1lciB7XG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9XG59XG5cbi8qIE1haW4gQ29udGFpbmVyIHdpdGggR2xhc3MgRW52aXJvbm1lbnQgKi9cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIEZvcm0gQ29udGFpbmVyIHdpdGggRmxvYXRpbmcgRWZmZWN0ICovXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNjAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIFxuICAvKiBGbG9hdGluZyBBbmltYXRpb24gKi9cbiAgYW5pbWF0aW9uOiBnbGFzc0Zsb2F0IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGdsYXNzRmxvYXQge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZVgoMGRlZyk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZVgoMWRlZyk7IH1cbn1cblxuLyogTGlxdWlkIEdsYXNzIEZvcm0gQ2FyZCAqL1xuLmZvcm0tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICB2YXIoLS1saXF1aWQtZ2xhc3Mtc2hhZG93KSxcbiAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQsXG4gICAgMCAxcHggMCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgXG4gIC8qIDNEIFBlcnNwZWN0aXZlICovXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIFxuICAvKiBHbGFzcyBSZWZsZWN0aW9uIEVmZmVjdCAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKSB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKSAwIDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLyogU3BlY3VsYXIgSGlnaGxpZ2h0ICovXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNTAlO1xuICAgIGxlZnQ6IC01MCU7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiAyMDAlO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgIGNpcmNsZSBhdCBjZW50ZXIsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDUwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGFuaW1hdGlvbjogZ2xhc3NTcGVjdWxhciA0cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdsYXNzU3BlY3VsYXIge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC44KSByb3RhdGUoMGRlZyk7IH1cbiAgNTAlIHsgb3BhY2l0eTogMC4xOyB0cmFuc2Zvcm06IHNjYWxlKDEuMikgcm90YXRlKDE4MGRlZyk7IH1cbn1cblxuLyogR2xhc3MgQ2FyZCBIb3ZlciBFZmZlY3RzICovXG4uZm9ybS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKHZhcigtLWdsYXNzLXNjYWxlLWhvdmVyKSk7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgMTVweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldCxcbiAgICAwIDFweCAwIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICBib3JkZXItY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40KTtcbiAgXG4gICY6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAwLjE1O1xuICB9XG59XG5cbi8qIEdsYXNzIENhcmQgSGVhZGVyICovXG4uY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKTtcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIFxuICAvKiBHbGFzcyBIZWFkZXIgUmVmbGVjdGlvbiAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBcbiAgLyogR2xhc3MgVGV4dCBFZmZlY3QgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDEzNWRlZyxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSAxMDAlXG4gICk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cblxuLmNvbXBhY3QtY29udGVudCB7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjJyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoODV2aCAtIDYwcHgpO1xufVxuXG4vKiBGaWVsZCBSb3dzIC0gRWFjaCBmaWVsZCBpbiBzZXBhcmF0ZSByb3cgKi9cbi5maWVsZC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xufVxuXG4vKiBSaWdodC1hbGlnbmVkIExhYmVscyAqL1xuLmZpZWxkLWxhYmVsLXJpZ2h0IHtcbiAgZmxleDogMCAwIDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjRyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi8qIFByZW1pdW0gR2xhc3MgU2VnbWVudCBDb250cm9scyAqL1xuLm1pbmktc2VnbWVudCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cih2YXIoLS1nbGFzcy1ibHVyKSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGhlaWdodDogMi40cmVtO1xuICBtaW4taGVpZ2h0OiAyLjRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gIC8qIEdsYXNzIHNlZ21lbnQgcmVmbGVjdGlvbiAqL1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxODBkZWcsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKSB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKSAwIDA7XG4gIH1cbn1cblxuLm1pbmktc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICBtYXJnaW46IDAuMXJlbTtcbiAgbWluLWhlaWdodDogMS44cmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAvKiBHbGFzcyBidXR0b24gZWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMCUsXG4gICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSkgMTAwJVxuICAgICk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA0cHggMTVweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMyksXG4gICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDE4MGRlZyxcbiAgICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICAgICk7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpIHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpIDAgMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5zZWdtZW50LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XG4gICAgfVxuICAgIFxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cbiAgfVxufVxuXG4vKiBHbGFzcyBJbnB1dCBGaWVsZHMgKi9cbi5taW5pLWlucHV0IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnLWxpZ2h0KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC0tcGFkZGluZy1zdGFydDogMC44cmVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjhyZW07XG4gIC0tcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4taGVpZ2h0OiAyLjJyZW07XG4gIG1heC1oZWlnaHQ6IDIuMnJlbTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgXG4gIC8qIEdsYXNzIHJlZmxlY3Rpb24gZWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDUwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICB9XG4gIFxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA4cHggMjVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjE1KSxcbiAgICAgIDAgMCAwIDNweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjEpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIH1cbiAgXG4gICYucmVhZG9ubHktaW5wdXQge1xuICAgIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gICAgfVxuICB9XG4gIFxuICAmLmFtb3VudC1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAtLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgIC0tY29sb3I6IHJnYmEoMCwgMTIyLCAyNTUsIDEpO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi8qIEdsYXNzIFNlbGVjdCBGaWVsZHMgKi9cbi5taW5pLXNlbGVjdCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuOHJlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC44cmVtO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4taGVpZ2h0OiAyLjJyZW07XG4gIG1heC1oZWlnaHQ6IDIuMnJlbTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICB9XG4gIFxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA4cHggMjVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjE1KSxcbiAgICAgIDAgMCAwIDNweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjEpO1xuICB9XG59XG5cbi8qIEdsYXNzIFRleHRhcmVhIEZpZWxkcyAqL1xuLm1pbmktdGV4dGFyZWEge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjhyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuOHJlbTtcbiAgLS1wYWRkaW5nLXRvcDogMC41cmVtO1xuICAtLXBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi1oZWlnaHQ6IDIuMnJlbTtcbiAgbWF4LWhlaWdodDogMi4ycmVtO1xuICByZXNpemU6IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBcbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgOHB4IDI1cHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xNSksXG4gICAgICAwIDAgMCAzcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICB9XG59XG5cbi8qIElucHV0IHdpdGggSWNvbiAqL1xuLmlucHV0LXdpdGgtaWNvbiB7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xufVxuXG4vKiBGaWVsZCB3aXRoIEJhbGFuY2UgQ29udGFpbmVyICovXG4uZmllbGQtd2l0aC1iYWxhbmNlIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogRmxvYXRpbmcgR2xhc3MgQmFsYW5jZSBEaXNwbGF5cyAqL1xuLmJhbGFuY2UtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saXF1aWQtZ2xhc3MtYmcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gIG1pbi1oZWlnaHQ6IDEuOHJlbTtcbiAgbWF4LWhlaWdodDogMS44cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGRpcmVjdGlvbjogcnRsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgbWFyZ2luLXRvcDogMC4xcmVtO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgY2xlYXI6IGJvdGg7XG4gIFxuICAvKiBSZWR1Y2UgZmxvYXRpbmcgYW5pbWF0aW9uICovXG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgXG4gIC8qIEdsYXNzIHJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgMCAwO1xuICB9XG4gIFxuICAvKiBEeW5hbWljIGhpZ2hsaWdodCAqL1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTJweDtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDkwZGVnLFxuICAgICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgICB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSA1MCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBhbmltYXRpb246IGJhbGFuY2VTaGltbWVyIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBiYWxhbmNlRmxvYXQge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJhbGFuY2VTaGltbWVyIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyBvcGFjaXR5OiAwOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuNjsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyBvcGFjaXR5OiAwOyB9XG59XG5cbi5iYWxhbmNlLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5iYWxhbmNlLWFtb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gIFxuICAvKiBEeW5hbWljIGNvbG9yIGJhc2VkIG9uIGJhbGFuY2UgdHlwZSAqL1xuICAmLnBvc2l0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3MpO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDUyLCAxOTksIDg5LCAwLjMpO1xuICB9XG4gIFxuICAmLm5lZ2F0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LWRhbmdlcik7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCA1OSwgNDgsIDAuMyk7XG4gIH1cbn1cblxuLmJhbGFuY2UtbG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zcmVtO1xuICBjb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBcbiAgaW9uLXNwaW5uZXIge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggcmdiYSgwLCAxMjIsIDI1NSwgMC4zKSk7XG4gIH1cbiAgXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbn1cblxuLmJhbGFuY2UtZXJyb3Ige1xuICBjb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCByZ2JhKDI1NSwgNTksIDQ4LCAwLjIpKTtcbn1cblxuLmRyb3Bkb3duLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwLjRyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBHbGFzcyBCdXR0b24gUm93ICovXG4uYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS4ycmVtO1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC8qIEdsYXNzIGRpdmlkZXIgZWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAyMCU7XG4gICAgcmlnaHQ6IDIwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA5MGRlZyxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgNTAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi8qIDNEIEdsYXNzIEJ1dHRvbnMgKi9cbi5taW5pLWJ0biB7XG4gIGZsZXg6IDAgMCAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWluLWhlaWdodDogMy4ycmVtO1xuICBtYXgtaGVpZ2h0OiAzLjJyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIFxuICAvKiBCYXNlIGdsYXNzIG1hdGVyaWFsICovXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICBcbiAgLyogM0QgRGVwdGggRWZmZWN0ICovXG4gIGJveC1zaGFkb3c6IFxuICAgIDAgNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldDtcbiAgXG4gIC8qIEdsYXNzIHJlZmxlY3Rpb24gKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgMCUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCkgMCAwO1xuICB9XG4gIFxuICAvKiBJbnRlcmFjdGl2ZSBTdGF0ZXMgKi9cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHNjYWxlKDEuMDIpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gICAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cbiAgXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgc2NhbGUoMC45OCk7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICB9XG4gIFxuICAvKiBTYXZlIEJ1dHRvbiAtIFByaW1hcnkgR2xhc3MgKi9cbiAgJi5zYXZlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTM1ZGVnLFxuICAgICAgdmFyKC0tZ2xhc3MtYWNjZW50LXN1Y2Nlc3MpIDAlLFxuICAgICAgcmdiYSg1MiwgMTk5LCA4OSwgMC45KSAxMDAlXG4gICAgKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxOTksIDg5LCAwLjMpO1xuICAgIFxuICAgIGJveC1zaGFkb3c6IFxuICAgICAgMCA2cHggMTVweCByZ2JhKDUyLCAxOTksIDg5LCAwLjMpLFxuICAgICAgMCAycHggNHB4IHJnYmEoNTIsIDE5OSwgODksIDAuMiksXG4gICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWhpZ2hsaWdodCkgaW5zZXQ7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDEzNWRlZyxcbiAgICAgICAgcmdiYSg1MiwgMTk5LCA4OSwgMC45KSAwJSxcbiAgICAgICAgcmdiYSg1MiwgMTk5LCA4OSwgMSkgMTAwJVxuICAgICAgKTtcbiAgICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwIDEycHggMzBweCByZ2JhKDUyLCAxOTksIDg5LCAwLjQpLFxuICAgICAgICAwIDRweCA4cHggcmdiYSg1MiwgMTk5LCA4OSwgMC4zKSxcbiAgICAgICAgMCAwIDAgMXB4IHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICAgIH1cbiAgICBcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1kYXJrKTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgICAwIDAgMCAxcHggdmFyKC0tbGlxdWlkLWdsYXNzLWJvcmRlcikgaW5zZXQ7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgICAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtYm9yZGVyKSBpbnNldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIERlbGV0ZSBCdXR0b24gLSBQYWxlIFJlZCBPdXRsaW5lICovXG4gICYuZGVsZXRlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmMDQxNDE7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2YwNDE0MTtcbiAgICBib3JkZXItY29sb3I6ICNmMDQxNDE7XG4gICAgXG4gICAgYm94LXNoYWRvdzogXG4gICAgICAwIDJweCA2cHggcmdiYSgyNDAsIDY1LCA2NSwgMC4xKSxcbiAgICAgIDAgMXB4IDJweCByZ2JhKDI0MCwgNjUsIDY1LCAwLjA1KTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSBzY2FsZSgxLjAyKTtcbiAgICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwIDZweCAxNXB4IHJnYmEoMjQwLCA2NSwgNjUsIDAuMTUpLFxuICAgICAgICAwIDJweCA0cHggcmdiYSgyNDAsIDY1LCA2NSwgMC4xKTtcbiAgICB9XG4gIH1cblxuICAvKiBDbGVhciBCdXR0b24gLSBTZWNvbmRhcnkgR2xhc3MgKi9cbiAgJi5jbGVhci1idG4ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1saWdodCk7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWxpcXVpZC1nbGFzcy1ib3JkZXIpO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLyogUG9wb3ZlciBTdHlsZXMgKi9cbmlvbi1wb3BvdmVyIHtcbiAgLS13aWR0aDogMzIwcHg7XG4gIC0tbWF4LXdpZHRoOiA5MHZ3O1xuICAtLWhlaWdodDogNjB2aDtcbiAgLS1tYXgtaGVpZ2h0OiA0MDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAtLWNvbG9yOiAjMDAwMDAwO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgLS1taW4taGVpZ2h0OiAyLjVyZW07XG4gIGRpcmVjdGlvbjogcnRsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDAwMDA7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZjFmM2Y0O1xuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDFyZW07XG4gIC0tbWluLWhlaWdodDogMi41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpcmVjdGlvbjogcnRsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgXG4gICY6aG92ZXIge1xuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIC0tYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgfVxufVxuXG4vKiBTZWxlY3QgSW50ZXJmYWNlIFN0eWxpbmcgKi9cbmlvbi1zZWxlY3Qge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi1hY3Rpb24tc2hlZXQge1xuICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJ1dHRvbi1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1idXR0b24tYmFja2dyb3VuZC1ob3ZlcjogI2Y4ZjlmYTtcbiAgLS1idXR0b24tYmFja2dyb3VuZC1mb2N1c2VkOiAjZjhmOWZhO1xuICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2U5ZWNlZjtcbn1cblxuLyogTW9iaWxlIEdsYXNzIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLyogTW9iaWxlIEdsYXNzIEVudmlyb25tZW50ICovXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIC8qIFJlZHVjZWQgZmxvYXRpbmcgYW5pbWF0aW9uIGZvciBtb2JpbGUgKi9cbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBoZWlnaHQ6IDEwMGR2aDsgLyogRHluYW1pYyB2aWV3cG9ydCBoZWlnaHQgZm9yIG1vYmlsZSAqL1xuICB9XG4gIFxuICAvKiBNb2JpbGUgR2xhc3MgQ2FyZCAqL1xuICAuZm9ybS1jYXJkIHtcbiAgICAvKiBSZWR1Y2VkIGdsYXNzIGJsdXIgZm9yIHBlcmZvcm1hbmNlICovXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgXG4gICAgLyogU2ltcGxpZmllZCBob3ZlciBlZmZlY3RzIGZvciB0b3VjaCAqL1xuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIENvbnRlbnQgKi9cbiAgLmNvbXBhY3QtY29udGVudCB7XG4gICAgcGFkZGluZzogMS4ycmVtO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICBcbiAgLmZpZWxkLXJvdyB7XG4gICAgbWluLWhlaWdodDogMy41cmVtO1xuICAgIGdhcDogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuICAuZmllbGQtbGFiZWwtcmlnaHQge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xuICB9XG4gIFxuICAvKiBNb2JpbGUgR2xhc3MgSW5wdXRzICovXG4gIC5taW5pLWlucHV0LFxuICAubWluaS1zZWxlY3QsXG4gIC5taW5pLXRleHRhcmVhIHtcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICAgIG1heC1oZWlnaHQ6IDNyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICAgLyogRW5oYW5jZWQgdG91Y2ggdGFyZ2V0ICovXG4gICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgdHJhbnNmb3JtOiBub25lOyAvKiBSZW1vdmUgdHJhbnNsYXRlWSBmb3IgbW9iaWxlICovXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwIDRweCAxNXB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMiksXG4gICAgICAgIDAgMCAwIDJweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjE1KTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIE1vYmlsZSBHbGFzcyBTZWdtZW50ICovXG4gIC5taW5pLXNlZ21lbnQge1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAubWluaS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgbWluLWhlaWdodDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgXG4gICAgLyogRW5oYW5jZWQgdG91Y2ggZmVlZGJhY2sgKi9cbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cbiAgICBcbiAgICAuc2VnbWVudC1jb250ZW50IHtcbiAgICAgIGdhcDogMC40cmVtO1xuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIEJ1dHRvbnMgKi9cbiAgLm1pbmktYnRuIHtcbiAgICBtaW4taGVpZ2h0OiAzLjJyZW07XG4gICAgbWF4LWhlaWdodDogMy4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBmbGV4OiAwIDAgMTEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBcbiAgICAvKiBUb3VjaC1vcHRpbWl6ZWQgaW50ZXJhY3Rpb25zICovXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIEJhbGFuY2UgKi9cbiAgLmJhbGFuY2UtZGlzcGxheSB7XG4gICAgbWluLWhlaWdodDogMi4ycmVtO1xuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjhyZW07XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBcbiAgICAvKiBSZWR1Y2VkIGFuaW1hdGlvbiBmb3IgbW9iaWxlICovXG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtYW1vdW50IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICBcbiAgLyogTW9iaWxlIEJ1dHRvbiBSb3cgKi9cbiAgLmJ1dHRvbi1yb3cge1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAubWluaS1idG4ge1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgLyogTW9iaWxlIEdsYXNzIEJhY2tncm91bmQgLSBSZWR1Y2VkIGZvciBwZXJmb3JtYW5jZSAqL1xuICAubW9kZXJuLWNvbnRlbnQ6OmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMnM7IC8qIFNsb3dlciBhbmltYXRpb24gKi9cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLyogRXh0cmEgU21hbGwgTW9iaWxlIE9wdGltaXphdGlvbiAqL1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICB9XG4gIFxuICAuY29tcGFjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGdhcDogMC44cmVtO1xuICB9XG4gIFxuICAuZmllbGQtcm93IHtcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICB9XG4gIFxuICAuZmllbGQtbGFiZWwtcmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qIFNtYWxsZXIgZ2xhc3MgY29tcG9uZW50cyBmb3IgZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuICAubWluaS1pbnB1dCxcbiAgLm1pbmktc2VsZWN0LFxuICAubWluaS10ZXh0YXJlYSB7XG4gICAgbWluLWhlaWdodDogMi44cmVtO1xuICAgIG1heC1oZWlnaHQ6IDIuOHJlbTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICB9XG4gIFxuICAubWluaS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgbWluLWhlaWdodDogMi4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBcbiAgICAuc2VnbWVudC1jb250ZW50IGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgLnNlZ21lbnQtY29udGVudCBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5taW5pLWJ0biB7XG4gICAgbWluLWhlaWdodDogMi44cmVtO1xuICAgIG1heC1oZWlnaHQ6IDIuOHJlbTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWRpc3BsYXkge1xuICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxuICBcbiAgLmJhbGFuY2UtYW1vdW50IHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbn1cblxuLyogRW5oYW5jZWQgRGFyayBNb2RlIEdsYXNzIE1hdGVyaWFscyAqL1xuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAubW9kZXJuLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXG4gICAgICByZ2JhKDMwLCAzMCwgMzAsIDAuOTUpIDAlLCBcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC45KSA1MCUsIFxuICAgICAgcmdiYSgyMCwgMjAsIDQwLCAwLjk1KSAxMDAlKTtcbiAgfVxuICBcbiAgLm1vZGVybi1jb250ZW50OjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IFxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgNTAlLCByZ2JhKDYwLCA2MCwgMTIwLCAwLjE1KSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODAlIDIwJSwgcmdiYSg0MCwgODAsIDE0MCwgMC4xNSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQwJSA4MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gIH1cbiAgXG4gIC8qIERhcmsgR2xhc3MgRm9ybSBDYXJkICovXG4gIC5mb3JtLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpcXVpZC1nbGFzcy1iZy1kYXJrKTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgMTJweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC41KSxcbiAgICAgIDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuICAgICAgMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuNCksXG4gICAgICAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSBpbnNldCxcbiAgICAgIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XG4gICAgfVxuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIEhlYWRlciAqL1xuICAuY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEzNWRlZyxcbiAgICAgIHJnYmEoMCwgMTIyLCAyNTUsIDAuNikgMCUsXG4gICAgICByZ2JhKDAsIDEwMCwgMjAwLCAwLjgpIDEwMCVcbiAgICApO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIH1cbiAgXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpIDAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDEwMCVcbiAgICApO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIH1cbiAgXG4gIC8qIERhcmsgR2xhc3MgSW5wdXRzICovXG4gIC5taW5pLWlucHV0LFxuICAubWluaS1zZWxlY3QsXG4gIC5taW5pLXRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XG4gICAgLS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICBcbiAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTIyLCAyNTUsIDAuOCk7XG4gICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgMCA4cHggMjVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjIpLFxuICAgICAgICAwIDAgMCAzcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4xNSk7XG4gICAgfVxuICAgIFxuICAgICYucmVhZG9ubHktaW5wdXQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgICBcbiAgICAmLmFtb3VudC1pbnB1dCB7XG4gICAgICAtLWNvbG9yOiByZ2JhKDAsIDE4MCwgMjU1LCAwLjkpO1xuICAgICAgXG4gICAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICAgIC0tY29sb3I6IHJnYmEoMCwgMTgwLCAyNTUsIDEpO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAxODAsIDI1NSwgMC40KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIERhcmsgR2xhc3MgU2VnbWVudCAqL1xuICAubWluaS1zZWdtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgXG4gIC5taW5pLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICBcbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxMzVkZWcsXG4gICAgICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwJSxcbiAgICAgICAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpIDEwMCVcbiAgICAgICk7XG4gICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgMCA0cHggMTVweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuNCksXG4gICAgICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gICAgfVxuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIEJ1dHRvbnMgKi9cbiAgLm1pbmktYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBcbiAgICAmLnNhdmUtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTM1ZGVnLFxuICAgICAgICByZ2JhKDUyLCAxOTksIDg5LCAwLjcpIDAlLFxuICAgICAgICByZ2JhKDQwLCAxODAsIDcwLCAwLjgpIDEwMCVcbiAgICAgICk7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoNTIsIDE5OSwgODksIDAuMyk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMTM1ZGVnLFxuICAgICAgICAgIHJnYmEoNTIsIDE5OSwgODksIDAuOCkgMCUsXG4gICAgICAgICAgcmdiYSg0MCwgMTgwLCA3MCwgMC45KSAxMDAlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmRlbGV0ZS1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxMzVkZWcsXG4gICAgICAgIHJnYmEoMjU1LCA1OSwgNDgsIDAuNykgMCUsXG4gICAgICAgIHJnYmEoMjIwLCA1MCwgNDAsIDAuOCkgMTAwJVxuICAgICAgKTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDU5LCA0OCwgMC4zKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAxMzVkZWcsXG4gICAgICAgICAgcmdiYSgyNTUsIDU5LCA0OCwgMC44KSAwJSxcbiAgICAgICAgICByZ2JhKDIyMCwgNTAsIDQwLCAwLjkpIDEwMCVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJi5jbGVhci1idG4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTIyLCAyNTUsIDAuNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKiBEYXJrIEdsYXNzIEJhbGFuY2UgRGlzcGxheXMgKi9cbiAgLmJhbGFuY2UtZGlzcGxheSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5iYWxhbmNlLWxhYmVsIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIFxuICAuYmFsYW5jZS1sb2FkaW5nIHNwYW4ge1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIFxuICAuYmFsYW5jZS1lcnJvciB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgXG4gIC8qIERhcmsgR2xhc3MgRmllbGQgTGFiZWxzICovXG4gIC5maWVsZC1sYWJlbC1yaWdodCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICBcbiAgLyogRGFyayBMb2FkaW5nIFN0YXRlICovXG4gIC5sb2FkaW5nLXRleHQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDkwZGVnLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIDAlLFxuICAgICAgcmdiYSgwLCAxODAsIDI1NSwgMC45KSA1MCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgMTAwJVxuICAgICk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgfVxufVxuXG4vKiBGb2N1cyBTdGF0ZXMgKi9cbi5taW5pLWlucHV0OmZvY3VzLXdpdGhpbixcbi5taW5pLXNlbGVjdDpmb2N1cy13aXRoaW4sXG4ubWluaS10ZXh0YXJlYTpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yKTtcbn1cblxuLyogVG91Y2ggT3B0aW1pemF0aW9uICovXG5AbWVkaWEgKGhvdmVyOiBub25lKSBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAubWluaS1pbnB1dCxcbiAgLm1pbmktc2VsZWN0LFxuICAubWluaS10ZXh0YXJlYSxcbiAgLm1pbmktYnRuIHtcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICB9XG4gIFxuICAubWluaS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLmZpZWxkLXJvdyB7XG4gICAgbWluLWhlaWdodDogMzZweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 11050:
/*!****************************************************************!*\
  !*** ./src/app/edit-journal/edit-journal.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/spend-record2\" class=\"glass-back-button\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"glass-title\">تعديل القيد المحاسبي</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <!-- Loading State -->\n  <div *ngIf=\"!user_info || !store_info || !journal\" class=\"loading-container\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p class=\"loading-text\">جاري التحميل...</p>\n  </div>\n\n  <!-- Main Content -->\n  <div *ngIf=\"user_info && store_info && journal\" class=\"main-container\">\n    <div class=\"form-container\">\n      <ion-card class=\"form-card\">\n        <ion-card-header class=\"card-header\">\n          <ion-card-title class=\"card-title\">تعديل القيد المحاسبي</ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"compact-content\">\n          \n          <!-- Row 1: Transaction Type -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">نوع السند</ion-label>\n            <ion-segment [(ngModel)]=\"jType\" (ionChange)=\"radioChange($event)\" class=\"mini-segment\">\n              <ion-segment-button value=\"1\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"arrow-up-outline\"></ion-icon>\n                  <span>سند دفع</span>\n                </div>\n              </ion-segment-button>\n              <ion-segment-button value=\"2\">\n                <div class=\"segment-content\">\n                  <ion-icon name=\"arrow-down-outline\"></ion-icon>\n                  <span>سند قبض</span>\n                </div>\n              </ion-segment-button>\n            </ion-segment>\n          </div>\n\n          <!-- Row 2: Date -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">التاريخ</ion-label>\n            <ion-input \n              type=\"date\" \n              [(ngModel)]=\"journal.j_date\"\n              class=\"mini-input\">\n            </ion-input>\n          </div>\n\n          <!-- Row 3: Source -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">المصدر</ion-label>\n            <div class=\"field-with-balance\">\n              <ion-select \n                [(ngModel)]=\"radioVal\" \n                (ionChange)=\"pickAccountBank($event)\" \n                placeholder=\"اختر المصدر\"\n                interface=\"action-sheet\"\n                class=\"mini-select\">\n                <ion-select-option value=\"1\">الخزينة</ion-select-option>\n                <ion-select-option *ngFor=\"let bank of banksAccountArray\" [value]=\"bank.id\">\n                  {{ bank.sub_name }}\n                </ion-select-option>\n              </ion-select>\n              \n              <!-- Source Balance Display -->\n              <div class=\"balance-display\" *ngIf=\"selectedBankAccount && selectedBankAccount.sub_name\">\n                <div class=\"balance-label\">الرصيد:</div>\n                <div class=\"balance-amount\" *ngIf=\"!loadingSourceBalance && sourceAccountBalance\" \n                     [style.color]=\"getBalanceColor(sourceAccountBalance) === 'success' ? '#10dc60' : '#f04141'\">\n                  {{ formatBalance(sourceAccountBalance) }}\n                </div>\n                <div class=\"balance-loading\" *ngIf=\"loadingSourceBalance\">\n                  <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner>\n                  <span>جاري التحميل...</span>\n                </div>\n                <div class=\"balance-error\" *ngIf=\"!loadingSourceBalance && !sourceAccountBalance && selectedBankAccount.sub_name\">\n                  لا يمكن تحميل الرصيد\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Row 4: Account -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">الحساب</ion-label>\n            <div class=\"field-with-balance\">\n              <div class=\"input-with-icon\" (click)=\"presentAccountPopover($event)\">\n                <ion-input \n                  readonly=\"true\" \n                  [(ngModel)]=\"selectedFromAccount.sub_name\" \n                  placeholder=\"اختر الحساب\"\n                  class=\"mini-input readonly-input\">\n                </ion-input>\n                <ion-icon name=\"chevron-down-outline\" class=\"dropdown-icon\"></ion-icon>\n              </div>\n              \n              <!-- Account Balance Display -->\n              <div class=\"balance-display\" *ngIf=\"selectedFromAccount && selectedFromAccount.sub_name\">\n                <div class=\"balance-label\">الرصيد:</div>\n                <div class=\"balance-amount\" *ngIf=\"!loadingAccountBalance && selectedAccountBalance\" \n                     [style.color]=\"getBalanceColor(selectedAccountBalance) === 'success' ? '#10dc60' : '#f04141'\">\n                  {{ formatBalance(selectedAccountBalance) }}\n                </div>\n                <div class=\"balance-loading\" *ngIf=\"loadingAccountBalance\">\n                  <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner>\n                  <span>جاري التحميل...</span>\n                </div>\n                <div class=\"balance-error\" *ngIf=\"!loadingAccountBalance && !selectedAccountBalance && selectedFromAccount.sub_name\">\n                  لا يمكن تحميل الرصيد\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Row 5: Amount -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">المبلغ</ion-label>\n            <ion-input \n              type=\"number\" \n              placeholder=\"0.00\" \n              [(ngModel)]=\"pay\"\n              class=\"mini-input amount-input\">\n            </ion-input>\n          </div>\n\n          <!-- Row 6: Description -->\n          <div class=\"field-row\">\n            <ion-label class=\"field-label-right\">البيان</ion-label>\n            <ion-textarea \n              rows=\"1\" \n              [(ngModel)]=\"journal.j_details\"\n              placeholder=\"وصف المعاملة...\"\n              class=\"mini-textarea\">\n            </ion-textarea>\n          </div>\n\n          <!-- Action Buttons -->\n          <div class=\"button-row\">\n            <ion-button \n              (click)=\"update()\"\n              class=\"mini-btn save-btn\"\n              [disabled]=\"!isFormValid()\">\n              <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n              تحديث\n            </ion-button>\n            <ion-button \n              fill=\"outline\" \n              (click)=\"delete(journal.j_ref)\"\n              class=\"mini-btn delete-btn\">\n              <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n              حذف\n            </ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n<ion-popover #accountPopover [isOpen]=\"isAccountPopoverOpen\" (didDismiss)=\"isAccountPopoverOpen = false\"  side=\"bottom\" alignment=\"start\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar dir=\"rtl\">\n        <ion-searchbar [(ngModel)]=\"searchTerm\" (ionInput)=\"searchAccount($event)\" placeholder=\"بحث عن حساب\" dir=\"rtl\"></ion-searchbar>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content dir=\"rtl\">\n      <ion-list>\n        <ion-item *ngFor=\"let acc of searchedAccounts\" (click)=\"selectAccount(acc)\" button dir=\"rtl\">\n          <ion-label>{{acc.sub_name}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-journal_edit-journal_module_ts.js.map
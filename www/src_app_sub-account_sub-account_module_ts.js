"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sub-account_sub-account_module_ts"],{

/***/ 89835:
/*!***********************************************************!*\
  !*** ./src/app/sub-account/sub-account-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubAccountPageRoutingModule": () => (/* binding */ SubAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _sub_account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-account.page */ 26356);




const routes = [
    {
        path: '',
        component: _sub_account_page__WEBPACK_IMPORTED_MODULE_0__.SubAccountPage
    }
];
let SubAccountPageRoutingModule = class SubAccountPageRoutingModule {
};
SubAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubAccountPageRoutingModule);



/***/ }),

/***/ 28044:
/*!***************************************************!*\
  !*** ./src/app/sub-account/sub-account.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubAccountPageModule": () => (/* binding */ SubAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _sub_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-account-routing.module */ 89835);
/* harmony import */ var _sub_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-account.page */ 26356);







let SubAccountPageModule = class SubAccountPageModule {
};
SubAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sub_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubAccountPageRoutingModule
        ],
        declarations: [_sub_account_page__WEBPACK_IMPORTED_MODULE_1__.SubAccountPage]
    })
], SubAccountPageModule);



/***/ }),

/***/ 26356:
/*!*************************************************!*\
  !*** ./src/app/sub-account/sub-account.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubAccountPage": () => (/* binding */ SubAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _sub_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-account.page.html?ngResource */ 97029);
/* harmony import */ var _sub_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-account.page.scss?ngResource */ 80243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);








let SubAccountPage = class SubAccountPage {
    constructor(storage, alertController, modalController, loadingController, datePipe, api, toast) {
        this.storage = storage;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.radioVal = 0;
        this.radioVal2 = 0;
        this.account_category = [];
        this.sub_account = [];
        this.main_account = [];
        this.status = 'save';
        this.codeSe = "";
        this.sklton = false;
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_id: "", cat_name: "", ac_behavior: "", phone: "", address: "" };
        this.selectedCategory = { id: "", cat_name: "" };
        this.payInvo = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_id: "", cat_name: "", ac_behavior: "", phone: "", address: "" };
        this.selectedMainAccount = { ac_id: "", actype_id: "", ac_name: "", ac_code: "", eng_name: "", ac_type: "" };
        this.store_info = { id: "", store_ref: "", store_name: "", location: "" };
        this.getAppInfo();
    }
    ngOnInit() {
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
    radioChange(ev) {
        //console.log(ev.target.value) 
    }
    radioChange2(ev) {
        //console.log(ev.target.value) 
    }
    pickAccount(ev) {
        this.showSklt();
        this.selectedCategory.cat_name = "";
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
                ac_behavior: fl[0]['ac_behavior'],
                phone: fl[0]['phone'],
                address: fl[0]['address']
            };
            //console.log( this.selectedAccount);
            this.payInvo = this.selectedAccount;
            this.status = 'edit';
            //  let flm = this.main_account.filter(x=>x.ac_id == +this.selectedAccount.ac_id)
            //  this.pickMainAccount(flm[0]['ac_name'],'fisrtLoad')
            let flmc = this.account_category.filter(x => x.id == +this.selectedAccount.cat_id);
            this.pickAccountCategory(flmc[0]['cat_name'], 'fisrtLoad');
        }
        else {
            this.presentToast(' خطأ في اسم الحساب ', 'danger');
        }
    }
    searchCode(codeSe) {
        this.showSklt();
        let fl = this.sub_account.filter(x => x.sub_code == codeSe);
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
                ac_behavior: fl[0]['ac_behavior'],
                phone: fl[0]['phone'],
                address: fl[0]['address']
            };
            //console.log( this.selectedAccount);
            this.payInvo = this.selectedAccount;
            this.status = 'edit';
        }
        else {
            this.presentToast('خطأ , لا يوجد حساب بهذا الرمز ', 'danger');
        }
    }
    searchId(codeSe) {
        this.showSklt();
        let fl = this.sub_account.filter(x => x.id == codeSe);
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
                ac_behavior: fl[0]['ac_behavior'],
                phone: fl[0]['phone'],
                address: fl[0]['address']
            };
            //console.log( this.selectedAccount);
            this.payInvo = this.selectedAccount;
            this.status = 'edit';
        }
        else {
            this.presentToast('خطأ , لا يوجد حساب بهذا الرقم ', 'danger');
        }
    }
    pickAccountCategory(ev, cat) {
        let evVal;
        if (cat) {
            evVal = ev;
        }
        else {
            evVal = ev.target.value;
        }
        //console.log('evVal',evVal);
        let fl = this.account_category.filter(x => x.cat_name == evVal);
        //console.log(fl);
        if (fl.length > 0) {
            this.selectedCategory = {
                id: fl[0]['id'],
                cat_name: fl[0]['cat_name']
            };
            this.selectedAccount.cat_id = fl[0]['cat_id'];
            this.selectedAccount.cat_name = fl[0]['cat_name'];
            this.payInvo.cat_id = this.selectedCategory.id;
            this.payInvo.cat_name = this.selectedCategory.cat_name;
        }
        else {
            this.presentToast(' خطأ في اسم التصنيف ', 'danger');
        }
    }
    showSklt() {
        this.sklton = true;
        setTimeout(() => {
            this.sklton = false;
        }, 3000);
    }
    pickMainAccount(ev, cust) {
        let evVal;
        if (cust) {
            evVal = ev;
        }
        else {
            evVal = ev.target.value;
        }
        //console.log('evVal',evVal); 
        let fl = this.main_account.filter(x => x.ac_name == evVal);
        //console.log(fl);  
        if (fl.length > 0) {
            this.selectedMainAccount = {
                ac_id: fl[0]['ac_id'],
                ac_name: fl[0]['ac_name'],
                actype_id: fl[0]['actype_id'],
                ac_code: fl[0]['ac_code'],
                eng_name: fl[0]['eng_name'],
                ac_type: fl[0]['ac_type']
            };
            //console.log( this.selectedMainAccount);
            this.payInvo.ac_id = this.selectedMainAccount.ac_id;
            this.payInvo.sub_type = this.selectedMainAccount.ac_type;
            this.payInvo.store_id = this.store_info.id;
            this.payInvo.ac_behavior = this.selectedMainAccount.ac_type;
            //  this.setFocusOnInput()
        }
        else {
            this.presentToast('خطأ في اسم الحساب ', 'danger');
        }
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
                this.getAllAccount();
            }
        });
    }
    prepareInvo() {
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, cat_id: "", cat_name: "", ac_behavior: "", phone: "", address: "" };
        this.selectedCategory = { id: "", cat_name: "" };
        this.payInvo = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, cat_id: "", cat_name: "", ac_behavior: "", phone: "", address: "" };
        this.selectedMainAccount = { ac_id: "", actype_id: "", ac_name: "", ac_code: "", eng_name: "", ac_type: "" };
        this.status = 'save';
    }
    refresh() {
        // this.presentLoadingWithOptions("...")
        this.showSklt();
        this.prepareInvo();
    }
    getAllAccount() {
        this.api.getAllAccounts(this.store_info.id, this.year.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.sub_account = res['data'];
            this.getMainAccount();
        }, (err) => {
            //console.log(err);
        });
    }
    getAccountCategory() {
        this.api.getAccountCategory(this.store_info.id).subscribe(data => {
            //console.log(data)
            let res = data;
            this.account_category = res['data'];
            //console.log(this.account_category)
        }, (err) => {
            //console.log(err);
        });
    }
    getMainAccount() {
        this.api.getMainAccounts().subscribe(data => {
            //console.log(data)
            let res = data;
            this.main_account = res['data'];
            this.getAccountCategory();
        }, (err) => {
            //console.log(err);
        });
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
    save() {
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            let accountList = [];
            accountList.push(this.payInvo);
            this.api.createMultiAccount(accountList).subscribe(data => {
                //console.log(data)
                if (data['message'] != 'Post Not Created') {
                    this.prepareInvo();
                    this.presentToast('تم الحفظ بنجاح', "success");
                    this.getAllAccount();
                }
                else {
                    this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
                }
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.loadingController.dismiss();
            });
        }
    }
    update() {
        if (this.validate() == true) {
            this.presentLoadingWithOptions('جاري حفظ البيانات ...');
            this.api.updateSubAccount(this.payInvo).subscribe(data => {
                //console.log(data)
                if (data['message'] != 'Post Not Created') {
                    this.prepareInvo();
                    this.presentToast('تم التعديل بنجاح', "success");
                    this.getAllAccount();
                }
                else {
                    this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
                }
            }, (err) => {
                //console.log(err);
                this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري', 'danger');
            }, () => {
                this.loadingController.dismiss();
            });
        }
    }
    validate() {
        let fl = [];
        if (this.sub_account) {
            fl = this.sub_account.filter(x => x.sub_name == this.payInvo.sub_name);
            if (fl.length > 0 && this.status != 'edit') {
                this.presentToast('تطابق في اسم الحساب مع حساب موجود مسبقا   ', 'danger');
            }
        }
        let fl2 = [];
        if (this.sub_account) {
            fl2 = this.sub_account.filter(x => x.sub_code == this.payInvo.sub_code);
            if (fl2.length > 0 && this.status != 'edit') {
                this.presentToast('تطابق في رمز الحساب مع حساب موجود مسبقا   ', 'danger');
            }
        }
        if (this.payInvo.sub_name == "") {
            this.presentToast('الرجاء ادخال اسم الحساب ', 'danger');
            return false;
        }
        else if (this.payInvo.sub_type == "") {
            this.presentToast(' الرجاء اختيار طبيعة الحساب', 'danger');
            return false;
        }
        else if (this.selectedMainAccount.ac_id == "" || this.selectedMainAccount.ac_name == "") {
            this.presentToast(' الرجاء اختيار الحساب الرئيسي', 'danger');
            return false;
        }
        else {
            return true;
        }
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                            this.delete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete() {
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        this.api.deleteSubAccont(this.payInvo.id).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.presentToast('تم الحذف بنجاح', 'success');
                this.prepareInvo();
                this.getAllAccount();
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
SubAccountPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
SubAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sub-account',
        template: _sub_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sub_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubAccountPage);



/***/ }),

/***/ 80243:
/*!**************************************************************!*\
  !*** ./src/app/sub-account/sub-account.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n\n.bgP {\n  --background: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksa0JBQUE7QUFFUjs7QUFDSTtFQUNJLGdCQUFBO0FBRVI7O0FBQ1E7RUFDRSxzQ0FBQTtBQUVWIiwiZmlsZSI6InN1Yi1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0SW5wdXR7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuY3VzdC1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmN1c3RSb3d7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYmdQe1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogICAgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpOyBcbiAgICAgICAgfSJdfQ== */";

/***/ }),

/***/ 97029:
/*!**************************************************************!*\
  !*** ./src/app/sub-account/sub-account.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> الحسابات </ion-title> \n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-grid  *ngIf=\"user_info && store_info\" >\n      <ion-row dir=\"rtl\">\n        <ion-col size=\"12\">\n         \n            <ion-grid class=\"ion-no-padding ion-no-margin\"> \n              <ion-row>\n                <ion-col size=\"4\"  offset=\"2\">\n                  <ion-item class=\"custInput\">\n                    <ion-label>   بحث بإسم الحساب  </ion-label> \n                    <input  *ngIf=\"sub_account\" class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsSales\" id=\"accountSales\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                    <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accountsSales\" style=\"height: auto;max-height: 20px;\">\n                      <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                    </datalist>\n                    <ion-label *ngIf=\"!sub_account\">\n                      <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                     </ion-label>\n                    <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\" >\n                      <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                    </ion-button>   \n                  </ion-item>   \n                </ion-col> \n                 \n                  <ion-col size=\"3\" offset=\"1\">  \n                    <ion-item class=\"custInput\"> \n                      <ion-label>  بحث برقم الحساب </ion-label>\n                      <ion-input [(ngModel)]=\"codeSe\" ></ion-input>\n                    </ion-item> \n                  </ion-col>\n                  <ion-col size=\"2\">\n                    <ion-button fill=\"outline\" color=\"primary\"  (click)=\"searchCode(codeSe)\"> \n                      بحــث\n                    </ion-button>\n                  </ion-col>\n              </ion-row>\n             </ion-grid> \n         \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"5\" class=\"ion-margin-top\">\n      <ion-card>\n        <ion-item class=\"bgP\" >\n            <h4><ion-text color=\"light\">قائمة الحسابات </ion-text> </h4>\n           \n        </ion-item>\n          <ion-item *ngFor=\"let ac of sub_account ; let i = index\">\n            <ion-label>\n              <ion-note>{{ac.id}}-</ion-note>\n             <ion-text>{{ac.sub_name}}</ion-text> \n            </ion-label>\n            <ion-buttons slot=\"end\">\n              <ion-button size=\"small\" fill=\"clear\" slot=\"end\" color=\"primary\" (click)=\"searchId(ac.id)\">\n                <ion-icon name=\"create-outline\" color=\"primary\"></ion-icon>\n              </ion-button>\n              <!-- <ion-button size=\"small\" fill=\"clear\" slot=\"end\" color=\"success\"  (click)=\"refresh()\">\n                <ion-icon name=\"add\" color=\"success\"></ion-icon>\n              </ion-button> -->\n            </ion-buttons>\n          </ion-item>\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"7\">\n      <ion-grid dir=\"rtl\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\" class=\"ion-padding-end ion-padding-start \"> \n            <ion-card>\n              <ion-item class=\"bgP\" >\n                <h4><ion-text color=\"light\">بيانات الحساب </ion-text>  </h4> \n                <ion-button size=\"small\" fill=\"outline\" slot=\"end\"  color=\"light\"  (click)=\"refresh()\">\n                  <ion-icon name=\"add\" color=\"light\"></ion-icon>\n                  حساب جديد\n                 </ion-button>\n            </ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\" class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>اسم الحساب </strong></ion-label>\n                    <ion-item class=\"custInput\" *ngIf=\"sklton==false\"> \n                      <ion-input [(ngModel)]=\"payInvo.sub_name\" ></ion-input>\n                    </ion-item>\n                    <ion-skeleton-text *ngIf=\"sklton==true\" animated style=\"width: 100% ;height : 100%;\"></ion-skeleton-text> \n\n                  </ion-col>\n                  <ion-col size=\"6\" class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>الحساب الرئيسي</strong></ion-label>\n                    <ion-item class=\"custInput\" *ngIf=\"sklton==false\">\n                      <input  *ngIf=\"main_account\" class=\"bnone\" placeholder=\"اختر  الحساب  الرئيسي\" list=\"accountmain\" id=\"accountmainid\" [(ngModel)]=\"selectedMainAccount.ac_name\"  (change)=\"pickMainAccount($event)\">\n                      <datalist *ngIf=\"main_account\" style=\"border: none;\" id=\"accountmain\" style=\"height: auto;max-height: 20px;\">\n                        <option *ngFor=\"let ac of main_account ; let i = index\"   [value]=\"ac.ac_name\"></option>\n                      </datalist>\n                      <ion-label *ngIf=\"!main_account\">\n                        <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                       </ion-label>\n                      <ion-button  *ngIf=\"!main_account\" fill=\"clear\" size=\"small\" slot=\"end\" >\n                        <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                      </ion-button>   \n                    </ion-item> \n                    <ion-skeleton-text *ngIf=\"sklton==true\" animated style=\"width: 100% ;height : 100%;\"></ion-skeleton-text> \n                    \n                  </ion-col> \n                  <ion-col size=\"6\" class=\"ion-margin-top\"  >\n                    <ion-label class=\"ion-padding\"><strong> كود الحساب </strong></ion-label>\n                    <ion-item class=\"custInput\" *ngIf=\"sklton==false\"> \n                      <ion-input [(ngModel)]=\"payInvo.sub_code\" ></ion-input>\n                    </ion-item>\n                    <ion-skeleton-text *ngIf=\"sklton==true\" animated style=\"width: 100% ;height : 100%;\"></ion-skeleton-text> \n\n                  </ion-col>\n                  <ion-col size=\"6\"  class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>الرصيد الإفتتاحي  </strong></ion-label>\n                    <ion-item class=\"custInput\" *ngIf=\"sklton==false\"> \n                      <ion-input [(ngModel)]=\"payInvo.sub_balance\" ></ion-input>\n                    </ion-item>\n                    <ion-skeleton-text *ngIf=\"sklton==true\" animated style=\"width: 100% ;height : 100%;\"></ion-skeleton-text> \n\n                  </ion-col>\n                 \n                  <ion-col size=\"12\" class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>طبيعة الحساب </strong></ion-label>\n                    <ion-radio-group *ngIf=\"sklton==false\"  [(ngModel)]=\"payInvo.sub_type\"  (ionChange)=\"radioChange($event)\" >\n                      <ion-grid class=\"ion-no-padding ion-no-margin\">\n                        <ion-row  class=\"custInput\">\n                          <ion-col class=\"ion-no-padding ion-no-margin\">\n                            <ion-item lines=\"none\" >\n                              <ion-radio disabled=\"true\" value=\"credit\" class=\"ion-margin-end\"></ion-radio>\n                              <ion-label>دائن-credit</ion-label> \n                            </ion-item>\n                          </ion-col>\n                          <ion-col class=\"ion-no-padding ion-no-margin\">\n                            <ion-item lines=\"none\" >\n                              <ion-radio disabled=\"true\" value =\"debit\" class=\"ion-margin-end\"></ion-radio>\n                              <ion-label>مدين-debit</ion-label> \n                            </ion-item>\n                          </ion-col> \n                        </ion-row>\n                      </ion-grid> \n                    </ion-radio-group>\n                    <ion-skeleton-text *ngIf=\"sklton==true\" animated style=\"width: 100% ;height : 100%;\"></ion-skeleton-text> \n\n                      <!-- <ion-label  *ngIf=\"payInvo.sub_type == 'credit'\"><strong> دائن </strong></ion-label>\n                      <ion-label  *ngIf=\"payInvo.sub_type == 'debit'\"><strong> مدين </strong></ion-label> -->\n                      <!-- <ion-input  disabled [(ngModel)]=\"payInvo.sub_type\" ></ion-input> -->\n                  </ion-col>\n                  \n\n                  <!-- <ion-col size=\"6\" class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>نوع الحساب </strong></ion-label>\n                    <ion-radio-group [(ngModel)]=\"payInvo.ac_behavior\"  (ionChange)=\"radioChange2($event)\" >\n                      <ion-grid class=\"ion-no-padding ion-no-margin\">\n                        <ion-row  class=\"custInput\">\n                          <ion-col class=\"ion-no-padding ion-no-margin\">\n                            <ion-item lines=\"none\" >\n                              <ion-radio value=\"1\" class=\"ion-margin-end\"></ion-radio>\n                              <ion-label> حساب مساعد  </ion-label> \n                            </ion-item>\n                          </ion-col>\n                          <ion-col class=\"ion-no-padding ion-no-margin\">\n                            <ion-item lines=\"none\" >\n                              <ion-radio value=\"2\" class=\"ion-margin-end\"></ion-radio>\n                              <ion-label>  مركز تكلفة </ion-label> \n                            </ion-item>\n                          </ion-col> \n                        </ion-row>\n                      </ion-grid> \n                    </ion-radio-group>\n                  </ion-col> -->\n\n                \n                \n                   <ion-col size=\"6\"   class=\"ion-margin-top\">\n                    <ion-label class=\"ion-padding\"><strong>تصنيف الحساب   </strong></ion-label>\n                    <ion-item class=\"custInput\" *ngIf=\"sklton==false\">\n                      <input  *ngIf=\"main_account\" class=\"bnone\" placeholder=\"اختر التصنيف   \" list=\"accountcategory\" id=\"accountcategoryid\" [(ngModel)]=\"selectedCategory.cat_name\"  (change)=\"pickAccountCategory($event)\">\n                      <datalist *ngIf=\"account_category\" style=\"border: none;\" id=\"accountcategory\" style=\"height: auto;max-height: 20px;\">\n                        <option *ngFor=\"let ac of account_category ; let i = index\"   [value]=\"ac.cat_name\"></option>\n                      </datalist>\n                      <ion-label *ngIf=\"!main_account\">\n                        <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                      </ion-label>\n                      <ion-button  *ngIf=\"!main_account\" fill=\"clear\" size=\"small\" slot=\"end\" >\n                        <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                      </ion-button>   \n                    </ion-item> \n                    <ion-skeleton-text *ngIf=\"sklton==true\" animated style=\"width: 100% ;height : 100%;\"></ion-skeleton-text> \n                  </ion-col> \n\n                  <ion-col size=\"6\" class=\"ion-margin-top\"  >\n                    <ion-label class=\"ion-padding\"><strong>الهاتف </strong></ion-label>\n                    <ion-item class=\"custInput\" *ngIf=\"sklton==false\"> \n                      <ion-input [(ngModel)]=\"payInvo.phone\" ></ion-input>\n                    </ion-item>\n                    <ion-skeleton-text *ngIf=\"sklton==true\" animated style=\"width: 100% ;height : 100%;\"></ion-skeleton-text> \n                  </ion-col>\n                  <ion-col size=\"12\" class=\"ion-margin-top\"  >\n                    <ion-label class=\"ion-padding\"><strong>    العنوان</strong></ion-label>\n                    <ion-item class=\"custInput\" *ngIf=\"sklton==false\"> \n                      <ion-input [(ngModel)]=\"payInvo.address\"></ion-input>\n                    </ion-item>\n                    <ion-skeleton-text *ngIf=\"sklton==true\" animated style=\"width: 100% ;height : 100%;\"></ion-skeleton-text> \n                  </ion-col>\n                </ion-row>\n                <ion-item-divider></ion-item-divider>\n                <ion-row class=\"ion-justify-content-center\">\n                  <ion-col size=\"8\"class=\"ion-margin-top ion-text-center\" >\n                    <ion-button  *ngIf=\"status == 'save'\"   fill=\"outline\" color=\"success\"  (click)=\"save()\" >\n                      <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n                    </ion-button>\n                    <ion-button *ngIf=\"status == 'edit'\"  fill=\"outline\"  color=\"warning\"  (click)=\"update()\" >\n                      <ion-label class=\"ion-text-center\"> تعديل </ion-label>\n                    </ion-button>\n                    <!-- <ion-button *ngIf=\"status == 'edit'\"   fill=\"outline\" color=\"danger\"  (click)=\"presentAlertConfirm()\" >\n                      <ion-label class=\"ion-text-center\"> حـذف</ion-label>\n                    </ion-button> -->\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-col>\n  </ion-row>\n  \n</ion-grid>\n\n\n \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sub-account_sub-account_module_ts.js.map
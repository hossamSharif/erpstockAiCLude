"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account-tree_account-tree_module_ts"],{

/***/ 79962:
/*!*************************************************************!*\
  !*** ./src/app/account-tree/account-tree-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountTreePageRoutingModule": () => (/* binding */ AccountTreePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _account_tree_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-tree.page */ 44856);




const routes = [
    {
        path: '',
        component: _account_tree_page__WEBPACK_IMPORTED_MODULE_0__.AccountTreePage
    }
];
let AccountTreePageRoutingModule = class AccountTreePageRoutingModule {
};
AccountTreePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountTreePageRoutingModule);



/***/ }),

/***/ 57364:
/*!*****************************************************!*\
  !*** ./src/app/account-tree/account-tree.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountTreePageModule": () => (/* binding */ AccountTreePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _account_tree_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-tree-routing.module */ 79962);
/* harmony import */ var _account_tree_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-tree.page */ 44856);







let AccountTreePageModule = class AccountTreePageModule {
};
AccountTreePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_tree_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountTreePageRoutingModule
        ],
        declarations: [_account_tree_page__WEBPACK_IMPORTED_MODULE_1__.AccountTreePage]
    })
], AccountTreePageModule);



/***/ }),

/***/ 44856:
/*!***************************************************!*\
  !*** ./src/app/account-tree/account-tree.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountTreePage": () => (/* binding */ AccountTreePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _account_tree_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-tree.page.html?ngResource */ 40143);
/* harmony import */ var _account_tree_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-tree.page.scss?ngResource */ 84331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);








let AccountTreePage = class AccountTreePage {
    constructor(storage, alertController, modalController, loadingController, datePipe, api, toast) {
        this.storage = storage;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.api = api;
        this.toast = toast;
        this.account_category = [];
        this.sub_account = [];
        this.main_account = [];
        this.status = 'save';
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_id: "", cat_name: "" };
        this.selectedCategory = { id: "", cat_name: "" };
        this.payInvo = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: "", cat_id: "", cat_name: "" };
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
    pickAccount(ev) {
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
                cat_name: fl[0]['cat_name']
            };
            //console.log( this.selectedAccount);
            this.payInvo = this.selectedAccount;
            this.status = 'edit';
            let flm = this.main_account.filter(x => x.ac_id == +this.selectedAccount.ac_id);
            this.pickMainAccount(flm[0]['ac_name'], 'fisrtLoad');
            let flmc = this.account_category.filter(x => x.id == +this.selectedAccount.cat_id);
            this.pickAccountCategory(flmc[0]['cat_name'], 'fisrtLoad');
        }
        else {
            this.presentToast(' خطأ في اسم الحساب ', 'danger');
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
        this.selectedAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, cat_id: "", cat_name: "" };
        this.selectedCategory = { id: "", cat_name: "" };
        this.payInvo = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, cat_id: "", cat_name: "" };
        this.selectedMainAccount = { ac_id: "", actype_id: "", ac_name: "", ac_code: "", eng_name: "", ac_type: "" };
        this.status = 'save';
    }
    refresh() {
        this.presentLoadingWithOptions();
        this.prepareInvo();
    }
    getAllAccount() {
        this.api.getAllAccounts(this.store_info.id, 1).subscribe(data => {
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
        if (this.payInvo.sub_name == "") {
            this.presentToast('الرجاء ادخال اسم الحساب ', 'danger');
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
AccountTreePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
AccountTreePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-account-tree',
        template: _account_tree_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_tree_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountTreePage);



/***/ }),

/***/ 84331:
/*!****************************************************************!*\
  !*** ./src/app/account-tree/account-tree.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.cust-card {\n  border-radius: 5px;\n}\n\n.custRow {\n  margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtdHJlZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNJLGtCQUFBO0FBRVI7O0FBQ0k7RUFDSSxnQkFBQTtBQUVSIiwiZmlsZSI6ImFjY291bnQtdHJlZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdElucHV0e1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLmN1c3QtY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5jdXN0Um93e1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICB9XG4iXX0= */";

/***/ }),

/***/ 40143:
/*!****************************************************************!*\
  !*** ./src/app/account-tree/account-tree.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> الحسابات </ion-title> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid  *ngIf=\"user_info && store_info\" >\n    <ion-row dir=\"rtl\">\n      <ion-col size=\"12\">\n        <ion-card  class=\"ion-no-padding ion-no-margin\">\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row dir=\"rtl\"> \n                <ion-grid class=\"ion-no-padding ion-no-margin\">\n                  <ion-row>\n                    <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin\">\n                      <ion-item lines=\"none\" > \n                        <ion-label>قائمة الحسابات </ion-label> \n                      </ion-item> \n                      </ion-col> \n                  </ion-row>\n                </ion-grid>  \n            </ion-row>  \n            <ion-row>\n              <ion-col size=\"5\" offset=\"2\"   > \n                <ion-item class=\"custInput\">\n                  <input  *ngIf=\"sub_account\" class=\"bnone\" placeholder=\"اختر  حساب العميل\" list=\"accountsSales\" id=\"accountSales\" [(ngModel)]=\"selectedAccount.sub_name\"  (change)=\"pickAccount($event)\">\n                  <datalist *ngIf=\"sub_account\" style=\"border: none;\" id=\"accountsSales\" style=\"height: auto;max-height: 20px;\">\n                    <option *ngFor=\"let ac of sub_account ; let i = index\"   [value]=\"ac.sub_name\"></option>\n                  </datalist>\n                  <ion-label *ngIf=\"!sub_account\">\n                    <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                   </ion-label>\n                  <ion-button  *ngIf=\"!sub_account\" fill=\"clear\" size=\"small\" slot=\"end\" >\n                    <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                  </ion-button>   \n                </ion-item>   \n              </ion-col> \n              <ion-col size=\"5\" class=\"ion-no-padding ion-no-margin ion-text-center\">\n                <ion-button size=\"small\" fill=\"outline\" color=\"primary\" >\n                    حساب جديد  \n                 <ion-icon color=\"primary\" name=\"person-add-outline\"></ion-icon>\n                </ion-button>\n                 </ion-col>\n            </ion-row>\n           </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n \n  <ion-grid dir=\"rtl\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"8\" class=\"ion-padding\"> \n        <ion-card>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\"  offset=\"2\">\n                <ion-label class=\"ion-padding\"><strong>الحساب الرئيسي</strong></ion-label>\n                <ion-item class=\"custInput\">\n                  <input  *ngIf=\"main_account\" class=\"bnone\" placeholder=\"اختر  الحساب  الرئيسي\" list=\"accountmain\" id=\"accountmainid\" [(ngModel)]=\"selectedMainAccount.ac_name\"  (change)=\"pickMainAccount($event)\">\n                  <datalist *ngIf=\"main_account\" style=\"border: none;\" id=\"accountmain\" style=\"height: auto;max-height: 20px;\">\n                    <option *ngFor=\"let ac of main_account ; let i = index\"   [value]=\"ac.ac_name\"></option>\n                  </datalist>\n                  <ion-label *ngIf=\"!main_account\">\n                    <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                   </ion-label>\n                  <ion-button  *ngIf=\"!main_account\" fill=\"clear\" size=\"small\" slot=\"end\" >\n                    <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                  </ion-button>   \n                </ion-item>  \n              </ion-col>\n              <ion-col size=\"4\" >\n                <ion-label class=\"ion-padding\"><strong>طبيعة الحساب </strong></ion-label>\n                <ion-item class=\"custInput\"> \n                  <ion-label  *ngIf=\"payInvo.sub_type == 'credit'\"><strong> دائن </strong></ion-label>\n                  <ion-label  *ngIf=\"payInvo.sub_type == 'debit'\"><strong> مدين </strong></ion-label>\n\n                  <ion-input  disabled [(ngModel)]=\"payInvo.sub_type\" ></ion-input>\n                </ion-item>\n              </ion-col>\n              \n              <ion-col size=\"6\" class=\"ion-margin-top\"  offset=\"2\">\n                <ion-label class=\"ion-padding\"><strong>اسم الحساب </strong></ion-label>\n                <ion-item class=\"custInput\"> \n                  <ion-input [(ngModel)]=\"payInvo.sub_name\" ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\"   class=\"ion-margin-top\">\n                <ion-label class=\"ion-padding\"><strong>تصنيف الحساب   </strong></ion-label>\n                <ion-item class=\"custInput\">\n                  <input  *ngIf=\"main_account\" class=\"bnone\" placeholder=\"اختر التصنيف   \" list=\"accountcategory\" id=\"accountcategoryid\" [(ngModel)]=\"selectedCategory.cat_name\"  (change)=\"pickAccountCategory($event)\">\n                  <datalist *ngIf=\"account_category\" style=\"border: none;\" id=\"accountcategory\" style=\"height: auto;max-height: 20px;\">\n                    <option *ngFor=\"let ac of account_category ; let i = index\"   [value]=\"ac.cat_name\"></option>\n                  </datalist>\n                  <ion-label *ngIf=\"!main_account\">\n                    <ion-text color=\"danger\" >خطأ في التحميل </ion-text>\n                  </ion-label>\n                  <ion-button  *ngIf=\"!main_account\" fill=\"clear\" size=\"small\" slot=\"end\" >\n                    <ion-icon name=\"refresh\" color=\"success\"></ion-icon>\n                  </ion-button>   \n                </ion-item>  \n              </ion-col>\n              <ion-col size=\"4\"  class=\"ion-margin-top\">\n                <ion-label class=\"ion-padding\"><strong>الرصيد الإفتتاحي  </strong></ion-label>\n                <ion-item class=\"custInput\"> \n                  <ion-input [(ngModel)]=\"payInvo.sub_balance\" ></ion-input>\n                </ion-item>\n              </ion-col> \n            </ion-row>\n            <ion-item-divider class=\"ion-margin\"></ion-item-divider>\n            <ion-row class=\"ion-justify-content-center ion-margin-top\">\n              <ion-col size=\"8\"class=\"ion-margin-top ion-text-center\" >\n                <ion-button  *ngIf=\"status == 'save'\"   fill=\"outline\" color=\"success\"  (click)=\"save()\" >\n                  <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n                </ion-button>\n                <ion-button *ngIf=\"status == 'edit'\"  fill=\"outline\"  color=\"warning\"  (click)=\"update()\" >\n                  <ion-label class=\"ion-text-center\"> تعديل </ion-label>\n                </ion-button>\n                <ion-button *ngIf=\"status == 'edit'\"   fill=\"outline\" color=\"danger\"  (click)=\"presentAlertConfirm()\" >\n                  <ion-label class=\"ion-text-center\"> حـذف</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_account-tree_account-tree_module_ts.js.map
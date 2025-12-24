"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_firstq-modal_firstq-modal_module_ts"],{

/***/ 71722:
/*!*************************************************************!*\
  !*** ./src/app/firstq-modal/firstq-modal-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstqModalPageRoutingModule": () => (/* binding */ FirstqModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _firstq_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstq-modal.page */ 54479);




const routes = [
    {
        path: '',
        component: _firstq_modal_page__WEBPACK_IMPORTED_MODULE_0__.FirstqModalPage
    }
];
let FirstqModalPageRoutingModule = class FirstqModalPageRoutingModule {
};
FirstqModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FirstqModalPageRoutingModule);



/***/ }),

/***/ 12578:
/*!*****************************************************!*\
  !*** ./src/app/firstq-modal/firstq-modal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstqModalPageModule": () => (/* binding */ FirstqModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _firstq_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstq-modal-routing.module */ 71722);
/* harmony import */ var _firstq_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstq-modal.page */ 54479);







let FirstqModalPageModule = class FirstqModalPageModule {
};
FirstqModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _firstq_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.FirstqModalPageRoutingModule
        ],
        declarations: [_firstq_modal_page__WEBPACK_IMPORTED_MODULE_1__.FirstqModalPage]
    })
], FirstqModalPageModule);



/***/ }),

/***/ 54479:
/*!***************************************************!*\
  !*** ./src/app/firstq-modal/firstq-modal.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstqModalPage": () => (/* binding */ FirstqModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _firstq_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstq-modal.page.html?ngResource */ 1117);
/* harmony import */ var _firstq_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstq-modal.page.scss?ngResource */ 27149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);







let FirstqModalPage = class FirstqModalPage {
    constructor(storage, loadingController, api, modalController, toast) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.api = api;
        this.modalController = modalController;
        this.toast = toast;
        this.shortLink = "";
        this.loading = false; // Flag variable
        this.file = null; // Variable to store file
        //@Input() item: any;
        //@Input() status: any;
        this.status = 'price';
        this.segment = 'xls';
        this.selectedItem = { id: "", item_name: "", pay_price: "", perch_price: "", item_unit: "", item_desc: "", item_parcode: "" };
        this.price = { payval: 0, perchval: 0, type: 'pay', status: 'plus' };
    }
    ngOnInit() {
        // //console.log(this.item, this.status)
        // this.checkstatus()
        this.getAppInfo();
    }
    fileChange(element) {
        //console.log('file', element.target.files[0]['name']);
        this.uploadedFiles = element.target.files[0];
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
                //console.log('store_info',this.store_info) 
            }
        });
    }
    truncateItems() {
        this.presentLoadingWithOptions('uploading ...');
        this.api.truncateItems().subscribe((data) => {
            //console.log(' received is ', data);
            if (data['message'] != 'Post not delete') {
                this.upload();
            }
            else {
                this.presentToast("خطأ في الإتصال بالسيرفر");
            }
        }, (error) => {
            this.presentToast("خطأ في الإتصال بالسيرفر");
        });
    }
    deleteByStore() {
        let da = new Date;
        //console.log(da)
        let fq_year = da.getFullYear().toString();
        this.presentLoadingWithOptions('uploading ...');
        this.api.deleteFristq(this.store_info.id, fq_year).subscribe((data) => {
            //console.log(' received is ', data);
            if (data['message'] != 'Post not delete') {
                this.upload();
            }
            else {
                this.presentToast("خطأ في الإتصال بالسيرفر", 'danger');
                this.loadingController.dismiss();
            }
        }, (error) => {
            this.presentToast("خطأ في الإتصال بالسيرفر", 'danger');
            this.loadingController.dismiss();
        });
    }
    upload() {
        let formData = new FormData();
        formData.append("avatar", this.uploadedFiles);
        // for(let i =0; i < this.uploadedFiles.length; i++){
        // formData.append("files", this.uploadedFiles[i], this.uploadedFiles[i]['name']);
        //   }
        //console.log(formData)
        this.api.uploadFq(formData).subscribe((response) => {
            //console.log('response received is ', response);
            this.loadingController.dismiss();
            this.presentToast('تم الحفظ بنجاح', 'success');
        }, (error) => {
            this.presentToast("خطأ في الإتصال بالسيرفر", 'danger');
            this.loadingController.dismiss();
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                // duration: 5000,
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
    onChange(event) {
        this.file = event.target.files[0];
    }
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        //console.log(this.file);
        this.api.upload2(this.file).subscribe((event) => {
            if (typeof (event) === 'object') {
                // Short link via api response
                this.shortLink = event.link;
                this.loading = false; // Flag variable 
            }
        });
    }
    segmentChanged(ev) {
        //console.log(ev.target.value) 
    }
    //  checkstatus(){
    //    if ( this.status == 'edit') {
    //      this.selectedItem = {id:this.item.id ,item_name:this.item.item_name,pay_price:this.item.pay_price,perch_price:this.item.perch_price,item_unit:this.item.item_unit,item_desc:this.item.item_desc,item_parcode:this.item.item_parcode}; 
    //    } else  {   
    //    }  
    // }
    typeChange(ev) {
        //console.log(ev.target.value) 
    }
    statusChange(ev) {
        //console.log(ev.target.value)  
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.selectedItem, this.status);
        });
    }
    updatePrice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.price, this.status);
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
    validate() {
        if (this.selectedItem.item_name == "" || +this.selectedItem.perch_price == 0 || +this.selectedItem.pay_price == 0) {
            this.presentToast('الرجاء ادخال البيانات المطلوبة', 'danger');
            return false;
        }
        else {
            return true;
        }
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
FirstqModalPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
FirstqModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-firstq-modal',
        template: _firstq_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_firstq_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FirstqModalPage);



/***/ }),

/***/ 27149:
/*!****************************************************************!*\
  !*** ./src/app/firstq-modal/firstq-modal.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJzdHEtbW9kYWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1117:
/*!****************************************************************!*\
  !*** ./src/app/firstq-modal/firstq-modal.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>الكميات الإفتتاحية</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n \n\n<ion-content>  \n  \n  <!-- <ion-segment scrollable value=\"heart\" [(ngModel)]=\"segment\" value=\"xls\"  (ionChange)=\"segmentChanged($event)\" *ngIf=\"status == 'price'\">\n    <ion-segment-button value=\"manual\">\n      <ion-icon name=\"hand-left-outline\"></ion-icon>\n      <ion-label class=\"ion-padding\"><strong>manualy</strong></ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"xls\">\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\n      <ion-label class=\"ion-padding\"><strong>XLS Sheet</strong></ion-label>\n    </ion-segment-button> \n  </ion-segment>\n\n    <div *ngIf=\"status == 'edit' || status =='save'\">\n      <ion-grid dir=\"rtl\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-padding\"> \n              <ion-grid>\n                <ion-row class=\"ion-justify-content-center\">\n                  <ion-col size=\"9\">\n                    <ion-label class=\"ion-padding\"><strong>اسم الصنف</strong></ion-label>\n                    <ion-item class=\"custInput\"> \n                      <ion-input [(ngModel)]=\"selectedItem.item_name\" ></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"9\">\n                    <ion-label class=\"ion-padding\"><strong>الوحده</strong></ion-label>\n                    <ion-item class=\"custInput\"> \n                      <ion-input [(ngModel)]=\"selectedItem.item_unit\" ></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"9\">\n                    <ion-label class=\"ion-padding\"><strong>سعر الوحده</strong></ion-label>\n                    <ion-item class=\"custInput\"> \n                      <ion-input [(ngModel)]=\"selectedItem.pay_price\" ></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"9\">\n                    <ion-label class=\"ion-padding\"><strong> سعر الشراء</strong></ion-label>\n                    <ion-item class=\"custInput\"> \n                      <ion-input [(ngModel)]=\"selectedItem.perch_price\" ></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"9\">\n                    <ion-label class=\"ion-padding\"><strong>الباركود</strong></ion-label>\n                    <ion-item class=\"custInput\"> \n                      <ion-input  [(ngModel)]=\"selectedItem.item_parcode\"></ion-input>\n                    </ion-item>\n                  </ion-col> \n                </ion-row>\n                <ion-row class=\"ion-justify-content-center\">\n                  <ion-col size=\"5\" >\n                    <ion-button expand=\"block\" color=\"success\"  (click)=\"save()\" >\n                      <ion-label class=\"ion-text-center\"> حفــظ</ion-label>\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <ion-grid dir=\"rtl\" *ngIf=\"status == 'price' && segment =='manual'\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label><ion-text color=\"dark\">اختر السعر</ion-text></ion-label> \n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-padding\"> \n          <ion-radio-group [(ngModel)]=\"price.type\"  (ionChange)=\"typeChange($event)\" >\n            <ion-grid class=\"ion-no-padding ion-no-margin\">\n              <ion-row>\n                <ion-col class=\"ion-no-padding ion-no-margin\">\n                  <ion-item lines=\"none\" >\n                    <ion-radio value=\"pay\" class=\"ion-margin-end\"></ion-radio>\n                    <ion-label>سعر بيع</ion-label> \n                  </ion-item>\n                </ion-col>\n                <ion-col class=\"ion-no-padding ion-no-margin\">\n                  <ion-item lines=\"none\" >\n                    <ion-radio value=\"perch\" class=\"ion-margin-end\"></ion-radio>\n                    <ion-label>سعر شراء</ion-label> \n                  </ion-item>\n                </ion-col>\n                \n              </ion-row>\n            </ion-grid> \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-label><ion-text color=\"dark\"> التعديل</ion-text></ion-label> \n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-padding\"> \n          <ion-radio-group [(ngModel)]=\"price.status\"  (ionChange)=\"statusChange($event)\" >\n            <ion-grid class=\"ion-padding ion-margin\">\n              <ion-row>\n                <ion-col >\n                  <ion-item lines=\"none\" >\n                    <ion-radio value=\"plus\" class=\"ion-margin-end\"></ion-radio>\n                    <ion-label>زيادة</ion-label> \n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item lines=\"none\" >\n                    <ion-radio value=\"minus\" class=\"ion-margin-end\"></ion-radio>\n                    <ion-label>نقصان</ion-label> \n                  </ion-item>\n                </ion-col>\n                \n              </ion-row>\n            </ion-grid> \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label >\n            <ion-text color=\"dark\" *ngIf=\"price.status== 'plus'\"> قيمة الزيادة </ion-text>   \n            <ion-text color=\"dark\" *ngIf=\"price.status== 'minus'\"> قيمة النقصان </ion-text>  \n          </ion-label> \n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-padding\"> \n          <ion-item lines=\"none\" *ngIf=\"price.type == 'pay'\" class=\"custInput\">\n            <ion-input  [(ngModel)]=\"price.payval\" class=\"ion-margin-end\" ></ion-input>  \n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"price.type == 'perch'\" class=\"custInput\">\n            <ion-input  [(ngModel)]=\"price.perchval\" class=\"ion-margin-end\" ></ion-input>  \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"5\" >\n          <ion-button expand=\"block\" color=\"success\"  (click)=\"updatePrice()\" >\n            <ion-label class=\"ion-text-center\"> تعديل الأسعار </ion-label>\n          </ion-button>\n        </ion-col>\n        \n      </ion-row>\n\n    </ion-grid>  -->\n  \n    <div *ngIf=\"segment ==  'xls' && status == 'price'\">\n      <ion-card class=\"ion-margin-top\">\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"6\">\n              <input type=\"file\" (change)=\"fileChange($event)\"> \n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-justify-content-center ion-margin-top\">\n            <ion-col size=\"6\">\n              <ion-button [disabled]=\"!uploadedFiles\" expand=\"block\" color=\"success\" (click)=\"deleteByStore()\" >\n                Upload File\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_firstq-modal_firstq-modal_module_ts.js.map
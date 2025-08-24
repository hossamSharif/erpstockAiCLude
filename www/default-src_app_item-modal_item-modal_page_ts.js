"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_item-modal_item-modal_page_ts"],{

/***/ 3671:
/*!***********************************************!*\
  !*** ./src/app/item-modal/item-modal.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemModalPage": () => (/* binding */ ItemModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _item_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-modal.page.html?ngResource */ 48599);
/* harmony import */ var _item_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-modal.page.scss?ngResource */ 10844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);






let ItemModalPage = class ItemModalPage {
    constructor(loadingController, api, modalController, toast, alertController) {
        this.loadingController = loadingController;
        this.api = api;
        this.modalController = modalController;
        this.toast = toast;
        this.alertController = alertController;
        this.shortLink = "";
        this.loading = false; // Flag variable
        this.file = null; // Variable to store file
        this.segment = 'manual';
        this.categories = [];
        this.showAddCategoryModal = false;
        this.newCategory = {
            category_name: '',
            category_desc: '',
            store_id: null
        };
        this.customPercentage = null;
        this.lastAppliedPercentage = null;
        this.selectedItem = { id: "", item_name: "", model: "", part_no: "", min_qty: 0, brand: "", pay_price: "", perch_price: "", item_unit: "", item_desc: "", item_parcode: "", aliasEn: "", category_id: "" };
        this.firstqObj = { id: "", item_id: "", store_id: "", quantity: 0, fq_year: "", pay_price: "", perch_price: "" };
        this.colSettingpr = { id: true, item_name: true, model: true, part_no: true, min_qty: true, brand: true, pay_price: true, perch_price: true, item_unit: true, item_desc: true, item_parcode: true, profit: true, instock: true, total: true, lastSold: true, aliasEn: true };
        this.price = { payval: 0, perchval: 0, type: 'pay', status: 'plus' };
        // Initialize quantity filter
        this.quantityFilter = {
            enabled: false,
            minQuantity: 0,
            maxQuantity: 0,
            filterType: 'range'
        };
    }
    ngOnInit() {
        //console.log(this.item, this.status)
        this.checkstatus();
        this.loadCategories();
    }
    fileChange(element) {
        //console.log('file', element.target.files[0]['name']);
        this.uploadedFiles = element.target.files[0];
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
    upload() {
        let formData = new FormData();
        formData.append("avatar", this.uploadedFiles);
        // for(let i =0; i < this.uploadedFiles.length; i++){
        // formData.append("files", this.uploadedFiles[i], this.uploadedFiles[i]['name']);
        //   }
        //console.log(formData)
        this.api.uploadItems(formData).subscribe((response) => {
            //console.log('response received is ', response);
            this.loadingController.dismiss();
            this.presentToast('تم الحفظ بنجاح', 'success');
        }, (error) => {
            this.presentToast("خطأ في الإتصال بالسيرفر");
        });
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    // Add quantity filter change handlers
    quantityFilterTypeChange(ev) {
        this.quantityFilter.filterType = ev.target.value;
    }
    quantityFilterToggle(ev) {
        this.quantityFilter.enabled = ev.target.checked;
    }
    applyQuantityFilter(items) {
        if (!this.quantityFilter.enabled) {
            return items;
        }
        return items.filter(item => {
            const quantity = +item.quantity || 0; // Assuming quantity field exists
            switch (this.quantityFilter.filterType) {
                case 'min':
                    return quantity >= this.quantityFilter.minQuantity;
                case 'max':
                    return quantity <= this.quantityFilter.maxQuantity;
                case 'exact':
                    return quantity === this.quantityFilter.minQuantity;
                case 'range':
                default:
                    return quantity >= this.quantityFilter.minQuantity && quantity <= this.quantityFilter.maxQuantity;
            }
        });
    }
    checkstatus() {
        if (this.status == 'edit') {
            this.selectedItem = { id: this.item.id, item_name: this.item.item_name, model: this.item.model, part_no: this.item.part_no, min_qty: this.item.min_qty, brand: this.item.brand, pay_price: this.item.pay_price, perch_price: this.item.perch_price, item_unit: this.item.item_unit, item_desc: this.item.item_desc, item_parcode: this.item.item_parcode, aliasEn: this.item.aliasEn, category_id: this.item.category_id };
            // this.firstqObj = {id:this.firstq.id ,item_id:this.firstq.item_id,
            //   store_id:this.firstq.store_id,
            //   quantity:this.firstq.quantity  ,
            //   fq_year:this.firstq.fq_year ,
            //   pay_price:this.firstq.pay_price,perch_price:this.firstq.perch_price}; 
        }
        else if (this.status == 'settings') {
            this.colSettingpr = { id: this.colSetting.id, item_name: this.colSetting.item_name, model: this.colSetting.model, part_no: this.colSetting.part_no, min_qty: this.colSetting.min_qty, brand: this.colSetting.brand, pay_price: this.colSetting.pay_price, perch_price: this.colSetting.perch_price, item_unit: this.colSetting.item_unit, item_desc: this.colSetting.item_desc, item_parcode: this.colSetting.item_parcode, profit: this.colSetting.profit, instock: this.colSetting.instock, total: this.colSetting.total, lastSold: this.colSetting.lastSold, aliasEn: this.colSetting.aliasEn };
        }
        else if (this.status == 'filter') {
            this.filterArray = this.filterArrayOrign;
            //console.log(this.filterArray)
        }
    }
    typeChange(ev) {
        //console.log(ev.target.value) 
    }
    statusChange(ev) {
        //console.log(ev.target.value)  
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //  await this.modalController.dismiss(this.selectedItem , this.status);
            yield this.modalController.dismiss([this.selectedItem, this.firstqObj], this.status);
        });
    }
    setColomns() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.colSettingpr, this.status);
        });
    }
    brandChange(ev) {
        //console.log(ev.target.checked)
    }
    modelChange(ev) {
        //console.log(ev.target.checked)
    }
    setFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.filterArray = this.filterArrayOrign;
            let flt = [];
            for (let index = 0; index < this.brandList.length; index++) {
                const element = this.brandList[index];
                if (element.selected == true) {
                    let fltbre = [];
                    fltbre = this.filterArray.filter(x => x.brand == element.brand);
                    if (fltbre.length > 0) {
                        fltbre.forEach(element => {
                            flt.push(element);
                        });
                    }
                }
            }
            for (let index = 0; index < this.modelList.length; index++) {
                const element = this.modelList[index];
                if (element.selected == true) {
                    let fltbre = [];
                    fltbre = this.filterArray.filter(x => x.model == element.model);
                    if (fltbre.length > 0) {
                        fltbre.forEach(element => {
                            flt.push(element);
                        });
                    }
                }
            }
            flt = this.applyQuantityFilter(flt);
            this.filterArray = flt;
            yield this.modalController.dismiss([
                this.filterArrayOrign,
                this.filterArray,
                this.modelList,
                this.brandList,
                this.quantityFilter,
                'filter'
            ], this.status);
            this.filterArray = flt;
            yield this.modalController.dismiss([this.filterArrayOrign, this.filterArray, this.modelList, this.brandList, 'filter'], this.status);
        });
    }
    clearFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modelList.forEach(element => {
                element.selected = false;
            });
            this.brandList.forEach(element => {
                element.selected = false;
            });
            this.filterArray = this.filterArrayOrign;
            yield this.modalController.dismiss([this.filterArrayOrign, this.filterArray, this.modelList, this.brandList, 'clear'], this.status);
        });
    }
    updatePrice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.price, this.status);
        });
    }
    presentToast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return this.isFormValid();
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    loadCategories() {
        this.api.getCategories().subscribe(data => {
            this.categories = data['data'] || [];
        }, error => {
            console.error('Error loading categories:', error);
        });
    }
    closeAddCategoryModal() {
        this.showAddCategoryModal = false;
        this.newCategory = {
            category_name: '',
            category_desc: '',
            store_id: null
        };
    }
    // Price calculation methods
    onPerchPriceChange() {
        // Reset calculator when purchase price changes
        this.customPercentage = null;
        this.lastAppliedPercentage = null;
    }
    selectPresetPercentage(percentage) {
        // Set the custom percentage field to the selected preset
        this.customPercentage = percentage;
    }
    applyPresetPercentage(percentage) {
        // Apply preset percentage directly without needing to click apply
        const perchPrice = +this.selectedItem.perch_price;
        if (!perchPrice || perchPrice <= 0) {
            this.presentToast('يرجى إدخال سعر الشراء أولاً', 'warning');
            return;
        }
        const calculatedPrice = perchPrice + (perchPrice * (percentage / 100));
        this.selectedItem.pay_price = calculatedPrice.toFixed(2);
        this.lastAppliedPercentage = percentage;
        // Update the custom percentage field to show what was applied
        this.customPercentage = percentage;
        this.presentToast(`تم تطبيق زيادة ${percentage}%`, 'success');
    }
    onCustomPercentageChange() {
        // This method is called when user types in the custom percentage field
        // No additional logic needed, just for future extensibility
    }
    applyPercentage(percentage) {
        if (percentage === null || percentage === undefined || percentage === 0) {
            this.presentToast('يرجى إدخال نسبة صحيحة', 'warning');
            return;
        }
        const perchPrice = +this.selectedItem.perch_price;
        if (!perchPrice || perchPrice <= 0) {
            this.presentToast('يرجى إدخال سعر الشراء أولاً', 'warning');
            return;
        }
        const calculatedPrice = perchPrice + (perchPrice * (percentage / 100));
        this.selectedItem.pay_price = calculatedPrice.toFixed(2);
        // Show appropriate message based on positive or negative percentage
        const message = percentage > 0
            ? `تم تطبيق زيادة ${percentage}%`
            : `تم تطبيق خصم ${Math.abs(percentage)}%`;
        this.presentToast(message, 'success');
    }
    getPreviewPrice() {
        if (this.customPercentage === null || this.customPercentage === undefined || this.customPercentage === 0) {
            return '0';
        }
        const perchPrice = +this.selectedItem.perch_price;
        if (!perchPrice || perchPrice <= 0) {
            return '0';
        }
        const calculatedPrice = perchPrice + (perchPrice * (this.customPercentage / 100));
        return calculatedPrice.toFixed(2);
    }
    resetCalculator() {
        this.customPercentage = null;
        this.lastAppliedPercentage = null;
        this.presentToast('تم إعادة تعيين الحاسبة', 'medium');
    }
    copyPurchasePrice() {
        if (!this.selectedItem.perch_price || +this.selectedItem.perch_price <= 0) {
            this.presentToast('لا يوجد سعر شراء لنسخه', 'warning');
            return;
        }
        this.selectedItem.pay_price = this.selectedItem.perch_price;
        this.presentToast('تم نسخ سعر الشراء إلى سعر البيع', 'success');
    }
    getProfit() {
        const payPrice = +this.selectedItem.pay_price;
        const perchPrice = +this.selectedItem.perch_price;
        if (!payPrice || !perchPrice || perchPrice === 0) {
            return 0;
        }
        return ((payPrice - perchPrice) / perchPrice) * 100;
    }
    getProfitColor() {
        const profit = this.getProfit();
        if (profit > 0)
            return 'success';
        if (profit < 0)
            return 'danger';
        return 'medium';
    }
    isFormValid() {
        return !!(this.selectedItem.item_name &&
            this.selectedItem.item_name.trim() &&
            +this.selectedItem.perch_price > 0 &&
            +this.selectedItem.pay_price > 0);
    }
    confirmDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'تأكيد الحذف',
                message: 'هل أنت متأكد من حذف هذا الصنف؟',
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel'
                    },
                    {
                        text: 'حذف',
                        handler: () => {
                            this.deleteItem();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Implement delete functionality
            yield this.modalController.dismiss(this.selectedItem, 'delete');
        });
    }
    // Format balance display with number separators
    formatBalance(balance) {
        if (!balance && balance !== 0)
            return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(Math.abs(balance));
    }
};
ItemModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
ItemModalPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    filterArrayOrign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    filterArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    brandList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    modelList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    firstq: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    colSetting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ItemModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-item-modal',
        template: _item_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemModalPage);



/***/ }),

/***/ 10844:
/*!************************************************************!*\
  !*** ./src/app/item-modal/item-modal.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border-style: solid;\n  border-color: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.form-container {\n  background: var(--ion-color-light-tint);\n  border-radius: 12px;\n  margin: 8px;\n  padding: 0;\n}\n\n.modern-form {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.form-section {\n  padding: 20px;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.form-section:last-child {\n  border-bottom: none;\n}\n\n.section-title {\n  color: var(--ion-color-primary);\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid var(--ion-color-primary-tint);\n}\n\n.modern-input {\n  margin-bottom: 16px;\n  --border-radius: 8px;\n  --border-width: 1px;\n  --border-color: var(--ion-color-medium-tint);\n  --background: white;\n}\n\n.modern-input ion-label {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n\n.modern-input.item-has-focus {\n  --border-color: var(--ion-color-primary);\n  --border-width: 2px;\n}\n\n.price-calculator {\n  margin: 16px 0;\n}\n\n.price-calculator .calc-card {\n  margin: 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  background: var(--ion-color-light-tint);\n}\n\n.price-calculator .calc-card ion-card-header {\n  padding-bottom: 8px;\n}\n\n.price-calculator .calc-card ion-card-header ion-card-subtitle {\n  color: var(--ion-color-medium-shade);\n  font-weight: 500;\n}\n\n.price-calculator .calc-card ion-card-content {\n  padding-top: 0;\n}\n\n.price-calculator .preset-buttons-inline {\n  display: flex;\n  justify-content: space-between;\n  gap: 6px;\n  margin-bottom: 12px;\n  padding: 8px;\n  background: var(--ion-color-light-tint);\n  border-radius: 8px;\n}\n\n.price-calculator .preset-btn {\n  flex: 1;\n  margin: 0;\n  --border-radius: 6px;\n  font-weight: 500;\n  font-size: 11px;\n  height: 28px;\n}\n\n.price-calculator .preset-btn[color=primary] {\n  --background: var(--ion-color-primary);\n  --color: white;\n  --border-color: var(--ion-color-primary);\n  font-weight: 600;\n  transform: scale(1.05);\n  box-shadow: 0 2px 4px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n\n.price-calculator .preset-btn:hover {\n  --background: var(--ion-color-primary-tint);\n}\n\n.price-calculator .custom-section {\n  margin-bottom: 16px;\n}\n\n.price-calculator .custom-section .calc-input {\n  --border-radius: 6px;\n  margin-bottom: 0;\n}\n\n.price-calculator .custom-section .calc-input ion-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.price-calculator .custom-section .apply-btn {\n  margin-top: 8px;\n  --border-radius: 6px;\n  font-weight: 600;\n  height: 40px;\n}\n\n.price-calculator .calculation-preview {\n  margin-top: 12px;\n  padding: 8px;\n  background: var(--ion-color-primary-tint);\n  border-radius: 8px;\n  border-left: 4px solid var(--ion-color-primary);\n}\n\n.price-calculator .calculation-preview .preview-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --min-height: auto;\n}\n\n.price-calculator .calculation-preview .preview-item ion-label {\n  margin: 0;\n}\n\n.price-calculator .calculation-preview .preview-text {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n.price-calculator .calculation-preview .preview-label {\n  font-weight: 600;\n  color: var(--ion-color-primary-shade);\n}\n\n.price-calculator .calculation-preview .preview-calculation {\n  color: var(--ion-color-dark);\n  margin-left: 8px;\n}\n\n.price-calculator .calculation-preview .preview-result {\n  color: var(--ion-color-primary);\n  font-size: 14px;\n}\n\n.price-calculator .quick-actions {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  margin-top: 16px;\n  padding-top: 12px;\n  border-top: 1px solid var(--ion-color-light);\n}\n\n.price-calculator .quick-actions .reset-btn,\n.price-calculator .quick-actions .copy-btn {\n  --color: var(--ion-color-medium-shade);\n  font-size: 12px;\n}\n\n.price-calculator .quick-actions .reset-btn:hover,\n.price-calculator .quick-actions .copy-btn:hover {\n  --color: var(--ion-color-primary);\n}\n\n.price-calculator .quick-actions .reset-btn ion-icon,\n.price-calculator .quick-actions .copy-btn ion-icon {\n  font-size: 16px;\n}\n\n.profit-display {\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n}\n\n.profit-display ion-chip {\n  font-weight: 600;\n  font-size: 14px;\n  padding: 8px 16px;\n}\n\n.profit-display ion-chip ion-icon {\n  margin-inline-end: 8px;\n}\n\n.footer-toolbar {\n  --background: white;\n  --border-color: var(--ion-color-light);\n  --border-width: 1px 0 0 0;\n  --border-style: solid;\n  padding: 12px 16px;\n}\n\n.footer-buttons {\n  width: 100%;\n}\n\n.footer-buttons .item-actions {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  grid-gap: 12px;\n  gap: 12px;\n  align-items: center;\n}\n\n.footer-buttons .item-actions .save-btn {\n  --border-radius: 8px;\n  font-weight: 600;\n}\n\n.footer-buttons .item-actions .save-btn:not([disabled]) {\n  --background: var(--ion-color-success);\n  --color: white;\n}\n\n.footer-buttons .item-actions .delete-btn {\n  --border-radius: 8px;\n  --border-color: var(--ion-color-danger);\n  --color: var(--ion-color-danger);\n  font-weight: 500;\n}\n\n.footer-buttons .item-actions .delete-btn:hover {\n  --background: var(--ion-color-danger);\n  --color: white;\n}\n\n.footer-buttons .item-actions .cancel-btn {\n  --border-radius: 8px;\n  --border-color: var(--ion-color-medium);\n  --color: var(--ion-color-medium-shade);\n  font-weight: 500;\n}\n\n.footer-buttons .filter-actions,\n.footer-buttons .settings-actions,\n.footer-buttons .price-actions {\n  display: flex;\n  gap: 12px;\n}\n\n.footer-buttons .filter-actions .action-btn,\n.footer-buttons .settings-actions .action-btn,\n.footer-buttons .price-actions .action-btn {\n  --border-radius: 8px;\n  font-weight: 600;\n  flex: 1;\n}\n\n.footer-buttons .filter-actions .action-btn ion-icon,\n.footer-buttons .settings-actions .action-btn ion-icon,\n.footer-buttons .price-actions .action-btn ion-icon {\n  margin-inline-end: 8px;\n}\n\n.action-btn {\n  --border-radius: 8px;\n  font-weight: 500;\n}\n\n.action-btn ion-icon {\n  margin-inline-end: 8px;\n}\n\n@media (max-width: 768px) {\n  .form-section {\n    padding: 16px;\n  }\n\n  .section-title {\n    font-size: 16px;\n  }\n\n  .footer-buttons .item-actions {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .footer-buttons .item-actions .save-btn {\n    order: 1;\n  }\n  .footer-buttons .item-actions .cancel-btn {\n    order: 2;\n  }\n  .footer-buttons .item-actions .delete-btn {\n    order: 3;\n  }\n}\n\n.form-container {\n  animation: slideInUp 0.3s ease-out;\n}\n\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.modern-input:focus-within {\n  --border-color: var(--ion-color-primary);\n  --border-width: 2px;\n}\n\n.modern-input.ng-invalid.ng-touched {\n  --border-color: var(--ion-color-danger);\n  --border-width: 1px;\n}\n\n.modern-input.ng-valid.ng-touched {\n  --border-color: var(--ion-color-success);\n  --border-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsK0NBQUE7QUFBRjs7QUFFRTtFQUNFLG1CQUFBO0FBQUo7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtBQURKOztBQUlFO0VBQ0Usd0NBQUE7RUFDQSxtQkFBQTtBQUZKOztBQU9BO0VBQ0UsY0FBQTtBQUpGOztBQU1FO0VBQ0UsU0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQUpKOztBQU1JO0VBQ0UsbUJBQUE7QUFKTjs7QUFNTTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUFKUjs7QUFRSTtFQUNFLGNBQUE7QUFOTjs7QUFXRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0FBVEo7O0FBWUU7RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVZKOztBQVlJO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkRBQUE7QUFWTjs7QUFhSTtFQUNFLDJDQUFBO0FBWE47O0FBZ0JFO0VBQ0UsbUJBQUE7QUFkSjs7QUFnQkk7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBZE47O0FBZ0JNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBZFI7O0FBa0JJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaEJOOztBQXFCRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQW5CSjs7QUFxQkk7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFuQk47O0FBcUJNO0VBQ0UsU0FBQTtBQW5CUjs7QUF1Qkk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckJOOztBQXdCSTtFQUNFLGdCQUFBO0VBQ0EscUNBQUE7QUF0Qk47O0FBeUJJO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQXZCTjs7QUEwQkk7RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUF4Qk47O0FBNkJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtBQTNCSjs7QUE2Qkk7O0VBRUUsc0NBQUE7RUFDQSxlQUFBO0FBM0JOOztBQTZCTTs7RUFDRSxpQ0FBQTtBQTFCUjs7QUE2Qk07O0VBQ0UsZUFBQTtBQTFCUjs7QUFnQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQTdCRjs7QUErQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTdCSjs7QUErQkk7RUFDRSxzQkFBQTtBQTdCTjs7QUFtQ0E7RUFDRSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBaENGOztBQW1DQTtFQUNFLFdBQUE7QUFoQ0Y7O0FBa0NFO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxtQkFBQTtBQWhDSjs7QUFrQ0k7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBaENOOztBQWtDTTtFQUNFLHNDQUFBO0VBQ0EsY0FBQTtBQWhDUjs7QUFvQ0k7RUFDRSxvQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQWxDTjs7QUFvQ007RUFDRSxxQ0FBQTtFQUNBLGNBQUE7QUFsQ1I7O0FBc0NJO0VBQ0Usb0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUFwQ047O0FBd0NFOzs7RUFHRSxhQUFBO0VBQ0EsU0FBQTtBQXRDSjs7QUF3Q0k7OztFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0FBcENOOztBQXNDTTs7O0VBQ0Usc0JBQUE7QUFsQ1I7O0FBd0NBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQXJDRjs7QUF1Q0U7RUFDRSxzQkFBQTtBQXJDSjs7QUEwQ0E7RUFDRTtJQUNFLGFBQUE7RUF2Q0Y7O0VBMENBO0lBQ0UsZUFBQTtFQXZDRjs7RUEwQ0E7SUFDRSwwQkFBQTtJQUNBLFFBQUE7RUF2Q0Y7RUF5Q0U7SUFDRSxRQUFBO0VBdkNKO0VBMENFO0lBQ0UsUUFBQTtFQXhDSjtFQTJDRTtJQUNFLFFBQUE7RUF6Q0o7QUFDRjs7QUE4Q0E7RUFDRSxrQ0FBQTtBQTVDRjs7QUErQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQTVDRjtFQThDQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQTVDRjtBQUNGOztBQWdEQTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7QUE5Q0Y7O0FBa0RBO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtBQS9DRjs7QUFrREE7RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0FBL0NGIiwiZmlsZSI6Iml0ZW0tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8vIE1vZGVybiBGb3JtIFN0eWxpbmdcbi5mb3JtLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiA4cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb2Rlcm4tZm9ybSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIFxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xufVxuXG4ubW9kZXJuLWlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cbiAgXG4gICYuaXRlbS1oYXMtZm9jdXMge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgfVxufVxuXG4vLyBQcmljZSBDYWxjdWxhdG9yIFN0eWxlc1xuLnByaWNlLWNhbGN1bGF0b3Ige1xuICBtYXJnaW46IDE2cHggMDtcbiAgXG4gIC5jYWxjLWNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG4gICAgXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBcbiAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gSW5saW5lIFByZXNldCBCdXR0b25zXG4gIC5wcmVzZXQtYnV0dG9ucy1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgXG4gIC5wcmVzZXQtYnRuIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgXG4gICAgJltjb2xvcj1cInByaW1hcnlcIl0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMyk7XG4gICAgfVxuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEN1c3RvbSBTZWN0aW9uIFN0eWxlc1xuICAuY3VzdG9tLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgXG4gICAgLmNhbGMtaW5wdXQge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5hcHBseS1idG4ge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLy8gUHJldmlldyBTZWN0aW9uIFN0eWxlc1xuICAuY2FsY3VsYXRpb24tcHJldmlldyB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIFxuICAgIC5wcmV2aWV3LWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5wcmV2aWV3LXRleHQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG4gICAgXG4gICAgLnByZXZpZXctbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gICAgfVxuICAgIFxuICAgIC5wcmV2aWV3LWNhbGN1bGF0aW9uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbiAgICBcbiAgICAucHJldmlldy1yZXN1bHQge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIFF1aWNrIEFjdGlvbnMgU3R5bGVzXG4gIC5xdWljay1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIFxuICAgIC5yZXNldC1idG4sXG4gICAgLmNvcHktYnRuIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnByb2ZpdC1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIFxuICBpb24tY2hpcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRm9vdGVyIFN0eWxlc1xuLmZvb3Rlci10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHggMCAwIDA7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xufVxuXG4uZm9vdGVyLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgXG4gIC5pdGVtLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvO1xuICAgIGdhcDogMTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIC5zYXZlLWJ0biB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBcbiAgICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuZGVsZXRlLWJ0biB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY2FuY2VsLWJ0biB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5maWx0ZXItYWN0aW9ucyxcbiAgLnNldHRpbmdzLWFjdGlvbnMsXG4gIC5wcmljZS1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgICBcbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmbGV4OiAxO1xuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIFxuICBpb24taWNvbiB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIERlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIC5mb290ZXItYnV0dG9ucyAuaXRlbS1hY3Rpb25zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDhweDtcbiAgICBcbiAgICAuc2F2ZS1idG4ge1xuICAgICAgb3JkZXI6IDE7XG4gICAgfVxuICAgIFxuICAgIC5jYW5jZWwtYnRuIHtcbiAgICAgIG9yZGVyOiAyO1xuICAgIH1cbiAgICBcbiAgICAuZGVsZXRlLWJ0biB7XG4gICAgICBvcmRlcjogMztcbiAgICB9XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uIGZvciBzbW9vdGggdHJhbnNpdGlvbnNcbi5mb3JtLWNvbnRhaW5lciB7XG4gIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuM3MgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8vIEZvY3VzIHN0YXRlc1xuLm1vZGVybi1pbnB1dDpmb2N1cy13aXRoaW4ge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufVxuXG4vLyBJbnB1dCB2YWxpZGF0aW9uIHN0YXRlc1xuLm1vZGVybi1pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbi5tb2Rlcm4taW5wdXQubmctdmFsaWQubmctdG91Y2hlZCB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59Il19 */";

/***/ }),

/***/ 48599:
/*!************************************************************!*\
  !*** ./src/app/item-modal/item-modal.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"closeModal()\"> \n        <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" >\n      <ion-text *ngIf=\"status == 'edit'\">تعديل الصنف</ion-text>\n      <ion-text *ngIf=\"status == 'save'\"> صنف جديد</ion-text>\n      <ion-text *ngIf=\"status == 'price'\"> تعديل الأسعار</ion-text>\n      <ion-text *ngIf=\"status == 'settings'\">  إظهار و اخفاء الأعمدة </ion-text>\n      <ion-text *ngIf=\"status == 'filter'\"> فلتر</ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n  \n  <ion-segment scrollable value=\"heart\" [(ngModel)]=\"segment\" value=\"manual\"  (ionChange)=\"segmentChanged($event)\" *ngIf=\"status == 'price'\">\n    <ion-segment-button value=\"manual\">\n      <ion-icon name=\"hand-left-outline\"></ion-icon>\n      <ion-label class=\"ion-padding\"><strong>manualy</strong></ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"xls\">\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\n      <ion-label class=\"ion-padding\"><strong>XLS Sheet</strong></ion-label>\n    </ion-segment-button> \n  </ion-segment>\n\n    <div *ngIf=\"status == 'edit' || status =='save'\" class=\"form-container\">\n      <ion-grid dir=\"rtl\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-padding\">\n            <div class=\"modern-form\">\n              <!-- Basic Information Section -->\n              <div class=\"form-section\">\n                <h3 class=\"section-title\">معلومات أساسية</h3>\n                \n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">اسم الصنف *</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.item_name\" placeholder=\"أدخل اسم الصنف\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">الوصف</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.item_desc\" placeholder=\"وصف الصنف\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">اسم مستعار</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.aliasEn\" placeholder=\"الاسم المستعار\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                \n              </div>\n\n              <!-- Product Details Section -->\n              <div class=\"form-section\">\n                <h3 class=\"section-title\">تفاصيل المنتج</h3>\n                \n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">الكود</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.part_no\" placeholder=\"رقم القطعة\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">الماركة</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.brand\" placeholder=\"العلامة التجارية\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">الموديل</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.model\" placeholder=\"الموديل\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">الوحدة</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.item_unit\" placeholder=\"وحدة القياس\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">أقل كمية</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.min_qty\" type=\"number\" placeholder=\"الحد الأدنى للكمية\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\" *ngIf=\"status =='save'\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">الكمية الافتتاحية</ion-label>\n                      <ion-input [(ngModel)]=\"firstqObj.quantity\" type=\"number\" placeholder=\"الكمية الأولية\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n\n              <!-- Pricing Section -->\n              <div class=\"form-section\">\n                <h3 class=\"section-title\">معلومات الأسعار</h3>\n                \n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">سعر الشراء *</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.perch_price\" \n                                 type=\"number\" \n                                 placeholder=\"سعر الشراء\"\n                                 (ionInput)=\"onPerchPriceChange()\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <!-- Price Calculation Tool -->\n                <div class=\"price-calculator\" *ngIf=\"selectedItem.perch_price && +selectedItem.perch_price > 0\">\n                  <ion-card class=\"calc-card\">\n                    <ion-card-header>\n                      <ion-card-subtitle>حاسبة سعر البيع</ion-card-subtitle>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <!-- Custom Percentage Input -->\n                      <div class=\"custom-section\">\n                        <!-- Preset Buttons Row -->\n                        <div class=\"preset-buttons-inline\">\n                          <ion-button \n                            fill=\"outline\" \n                            size=\"small\" \n                            (click)=\"applyPresetPercentage(2)\"\n                            [color]=\"lastAppliedPercentage === 2 ? 'primary' : 'medium'\"\n                            class=\"preset-btn\">\n                            +2%\n                          </ion-button>\n                          <ion-button \n                            fill=\"outline\" \n                            size=\"small\" \n                            (click)=\"applyPresetPercentage(4)\"\n                            [color]=\"lastAppliedPercentage === 4 ? 'primary' : 'medium'\"\n                            class=\"preset-btn\">\n                            +4%\n                          </ion-button>\n                          <ion-button \n                            fill=\"outline\" \n                            size=\"small\" \n                            (click)=\"applyPresetPercentage(6)\"\n                            [color]=\"lastAppliedPercentage === 6 ? 'primary' : 'medium'\"\n                            class=\"preset-btn\">\n                            +6%\n                          </ion-button>\n                          <ion-button \n                            fill=\"outline\" \n                            size=\"small\" \n                            (click)=\"applyPresetPercentage(8)\"\n                            [color]=\"lastAppliedPercentage === 8 ? 'primary' : 'medium'\"\n                            class=\"preset-btn\">\n                            +8%\n                          </ion-button>\n                          <ion-button \n                            fill=\"outline\" \n                            size=\"small\" \n                            (click)=\"applyPresetPercentage(10)\"\n                            [color]=\"lastAppliedPercentage === 10 ? 'primary' : 'medium'\"\n                            class=\"preset-btn\">\n                            +10%\n                          </ion-button>\n                        </div>\n\n                        <ion-row>\n                          <ion-col size=\"8\">\n                            <ion-item fill=\"outline\" class=\"calc-input\">\n                              <ion-label position=\"stacked\">نسبة مخصصة (%) - موجبة أو سالبة</ion-label>\n                              <ion-input [(ngModel)]=\"customPercentage\" \n                                         type=\"number\" \n                                         step=\"0.1\"\n                                         placeholder=\"مثال: 15 أو -5\"\n                                         (ionInput)=\"onCustomPercentageChange()\"></ion-input>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col size=\"4\">\n                            <ion-button \n                              fill=\"solid\" \n                              (click)=\"applyPercentage(customPercentage)\"\n                              [disabled]=\"customPercentage === null || customPercentage === undefined || customPercentage === 0\"\n                              class=\"apply-btn\">\n                              تطبيق\n                            </ion-button>\n                          </ion-col>\n                        </ion-row>\n\n                        <!-- Preview calculation -->\n                        <div class=\"calculation-preview\" *ngIf=\"customPercentage !== null && customPercentage !== undefined && customPercentage !== 0\">\n                          <ion-item lines=\"none\" class=\"preview-item\">\n                            <ion-label>\n                              <p class=\"preview-text\">\n                                <span class=\"preview-label\">المعاينة:</span>\n                                <span class=\"preview-calculation\">\n                                  {{selectedItem.perch_price}} + ({{selectedItem.perch_price}} × {{customPercentage}}%) = \n                                  <strong class=\"preview-result\">{{getPreviewPrice()}}</strong>\n                                </span>\n                              </p>\n                            </ion-label>\n                          </ion-item>\n                        </div>\n                      </div>\n\n                      <!-- Quick Actions -->\n                      <div class=\"quick-actions\">\n                        <ion-button \n                          fill=\"clear\" \n                          size=\"small\" \n                          (click)=\"resetCalculator()\"\n                          class=\"reset-btn\">\n                          <ion-icon name=\"refresh\" slot=\"start\"></ion-icon>\n                          إعادة تعيين\n                        </ion-button>\n                        <ion-button \n                          fill=\"clear\" \n                          size=\"small\" \n                          (click)=\"copyPurchasePrice()\"\n                          class=\"copy-btn\">\n                          <ion-icon name=\"copy\" slot=\"start\"></ion-icon>\n                          نسخ سعر الشراء\n                        </ion-button>\n                      </div>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-item class=\"modern-input\" fill=\"outline\">\n                      <ion-label position=\"stacked\">سعر البيع *</ion-label>\n                      <ion-input [(ngModel)]=\"selectedItem.pay_price\" \n                                 type=\"number\" \n                                 placeholder=\"سعر البيع\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <!-- Profit Display -->\n                <ion-row *ngIf=\"selectedItem.pay_price && selectedItem.perch_price\">\n                  <ion-col size=\"12\">\n                    <div class=\"profit-display\">\n                      <ion-chip [color]=\"getProfitColor()\">\n                        <ion-icon name=\"trending-up\" *ngIf=\"getProfit() >= 0\"></ion-icon>\n                        <ion-icon name=\"trending-down\" *ngIf=\"getProfit() < 0\"></ion-icon>\n                        <ion-label>نسبة الربح: {{getProfit().toFixed(2)}}%</ion-label>\n                      </ion-chip>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <ion-grid dir=\"rtl\" *ngIf=\"status == 'price' && segment =='manual'\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label><ion-text color=\"dark\">اختر السعر</ion-text></ion-label> \n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-padding\"> \n          <ion-radio-group [(ngModel)]=\"price.type\"  (ionChange)=\"typeChange($event)\" >\n            <ion-grid class=\"ion-no-padding ion-no-margin\">\n              <ion-row>\n                <ion-col class=\"ion-no-padding ion-no-margin\">\n                  <ion-item lines=\"none\" >\n                    <ion-radio value=\"pay\" class=\"ion-margin-end\"></ion-radio>\n                    <ion-label>سعر بيع</ion-label> \n                  </ion-item>\n                </ion-col>\n                <ion-col class=\"ion-no-padding ion-no-margin\">\n                  <ion-item lines=\"none\" >\n                    <ion-radio value=\"perch\" class=\"ion-margin-end\"></ion-radio>\n                    <ion-label>سعر شراء</ion-label> \n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid> \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-label><ion-text color=\"dark\"> التعديل</ion-text></ion-label> \n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-padding\"> \n          <ion-radio-group [(ngModel)]=\"price.status\"  (ionChange)=\"statusChange($event)\" >\n            <ion-grid class=\"ion-padding ion-margin\">\n              <ion-row>\n                <ion-col >\n                  <ion-item lines=\"none\" >\n                    <ion-radio value=\"plus\" class=\"ion-margin-end\"></ion-radio>\n                    <ion-label>زيادة</ion-label> \n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item lines=\"none\" >\n                    <ion-radio value=\"minus\" class=\"ion-margin-end\"></ion-radio>\n                    <ion-label>نقصان</ion-label> \n                  </ion-item>\n                </ion-col>\n                \n              </ion-row>\n            </ion-grid> \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label >\n            <ion-text color=\"dark\" *ngIf=\"price.status== 'plus'\"> قيمة الزيادة </ion-text>   \n            <ion-text color=\"dark\" *ngIf=\"price.status== 'minus'\"> قيمة النقصان </ion-text>  \n          </ion-label> \n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-padding\"> \n          <ion-item lines=\"none\" *ngIf=\"price.type == 'pay'\" class=\"custInput\">\n            <ion-input  [(ngModel)]=\"price.payval\" class=\"ion-margin-end\" ></ion-input>  \n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"price.type == 'perch'\" class=\"custInput\">\n            <ion-input  [(ngModel)]=\"price.perchval\" class=\"ion-margin-end\" ></ion-input>  \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"5\" >\n          <ion-button expand=\"block\" color=\"success\"  (click)=\"updatePrice()\" >\n            <ion-label class=\"ion-text-center\"> تعديل الأسعار </ion-label>\n          </ion-button>\n        </ion-col>\n        \n      </ion-row>\n\n    </ion-grid> \n  \n    <div *ngIf=\"segment ==  'xls' && status == 'price'\">\n      <ion-card class=\"ion-margin-top\">\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"6\">\n              <input type=\"file\" (change)=\"fileChange($event)\"> \n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-justify-content-center ion-margin-top\">\n            <ion-col size=\"6\">\n              <ion-button [disabled]=\"!uploadedFiles\" expand=\"block\" color=\"success\" (click)=\"truncateItems()\" >\n                Upload File\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n\n    \n    <ion-grid dir=\"rtl\" *ngIf=\"status == 'settings'\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-padding\"> \n          <ion-list>\n            <ion-item>\n              <ion-label>اسم الصنف</ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.item_name\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>اسم الصنف (en)</ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.item_desc\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>اسم مستعار (Alias)</ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.aliasEn\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>   الموديل (model)\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.model\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>    الكود (part no)\t\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.part_no\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>   الماركة (brand)\t\t\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.brand\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>   اقل كمية (MSQ)\t\t\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.min_qty\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>   الوحده (unit)\t\t\t\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.item_unit\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>   سعر الشراء (purch price)\t\t\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.perch_price\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>   سعر الوحده (selling price)\t\t\t\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.pay_price\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>   نسبة الفائدة (profit perc)\t\t\t\t\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.profit\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label> المخزون (in stock)\t\t\t\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.instock\"></ion-checkbox>\n            </ion-item> \n            <ion-item>\n              <ion-label> المجموع\t \t\t\t  </ion-label>\n              <ion-checkbox [(ngModel)]=\"colSettingpr.total\"></ion-checkbox>\n            </ion-item>\n             \n              <ion-item>\n                <ion-label> اخر عملية بيع\t \t\t\t  </ion-label>\n                <ion-checkbox [(ngModel)]=\"colSettingpr.lastSold\"></ion-checkbox>\n              </ion-item>\n          </ion-list>\n        </ion-col>\n       \n      </ion-row>\n    </ion-grid> \n\n\n    <ion-grid dir=\"rtl\" *ngIf=\"status == 'filter'\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-padding\"> \n          <ion-list>\n            <ion-list-header color=\"light\">الماركة (brand)</ion-list-header>\n            <ion-item *ngFor=\"let st of brandList ; let i = index\">\n              <ion-label> {{st.brand}}  </ion-label>\n              <ion-checkbox [(ngModel)]=\"st.selected\" (ionChange)=\"brandChange($event)\"></ion-checkbox>\n            </ion-item>\n           \n          </ion-list>\n          <ion-list>\n            <ion-list-header color=\"light\">الموديل(model)</ion-list-header>\n            <ion-item *ngFor=\"let rt of modelList ; let i = index\">\n              <ion-label>  {{rt.model}}  </ion-label>\n              <ion-checkbox [(ngModel)]=\"rt.selected\" (ionChange)=\"modelChange($event)\"></ion-checkbox>\n            </ion-item> \n          </ion-list>\n        </ion-col>\n       \n      </ion-row>\n    </ion-grid> \n\n  \n  \n\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"footer-toolbar\">\n    <div class=\"footer-buttons\">\n      <!-- Item Save/Edit/Delete Actions -->\n      <div *ngIf=\"status == 'edit' || status == 'save'\" class=\"item-actions\">\n        <ion-button \n          expand=\"block\" \n          color=\"success\" \n          (click)=\"save()\"\n          [disabled]=\"!isFormValid()\"\n          class=\"action-btn save-btn\">\n          <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n          <ion-label>{{status == 'save' ? 'حفظ' : 'تحديث'}}</ion-label>\n        </ion-button>\n        \n        <ion-button \n          *ngIf=\"status == 'edit'\" \n          expand=\"block\" \n          color=\"danger\" \n          fill=\"outline\"\n          (click)=\"confirmDelete()\"\n          class=\"action-btn delete-btn\">\n          <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n          <ion-label>حذف</ion-label>\n        </ion-button>\n        \n        <ion-button \n          expand=\"block\" \n          fill=\"outline\" \n          color=\"medium\"\n          (click)=\"closeModal()\"\n          class=\"action-btn cancel-btn\">\n          <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n          <ion-label>إلغاء</ion-label>\n        </ion-button>\n      </div>\n\n      <!-- Filter Actions -->\n      <div *ngIf=\"status == 'filter'\" class=\"filter-actions\">\n        <ion-button \n          expand=\"block\" \n          fill=\"outline\" \n          color=\"light\"  \n          (click)=\"clearFilter()\"\n          class=\"action-btn\">\n          <ion-icon name=\"refresh\" slot=\"start\"></ion-icon>\n          <ion-label><ion-text color=\"dark\">إلغاء كل الفلتر</ion-text></ion-label>\n        </ion-button>\n        \n        <ion-button \n          expand=\"block\" \n          color=\"success\"  \n          (click)=\"setFilter()\"\n          class=\"action-btn\">\n          <ion-icon name=\"funnel\" slot=\"start\"></ion-icon>\n          <ion-label>تطبيق الفلتر</ion-label>\n        </ion-button>\n      </div>\n\n      <!-- Settings Actions -->\n      <div *ngIf=\"status == 'settings'\" class=\"settings-actions\">\n        <ion-button \n          expand=\"block\" \n          color=\"success\"  \n          (click)=\"setColomns()\"\n          class=\"action-btn\">\n          <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\n          <ion-label>حفظ الإعدادات</ion-label>\n        </ion-button>\n      </div>\n\n      <!-- Price Update Actions -->\n      <div *ngIf=\"status == 'price'\" class=\"price-actions\">\n        <ion-button \n          *ngIf=\"segment == 'manual'\"\n          expand=\"block\" \n          color=\"success\"  \n          (click)=\"updatePrice()\"\n          class=\"action-btn\">\n          <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n          <ion-label>تعديل الأسعار</ion-label>\n        </ion-button>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_item-modal_item-modal_page_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_module_shared_shared_module_ts"],{

/***/ 10276:
/*!**********************************************************************!*\
  !*** ./src/app/component/action-popover/action-popover.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionPopoverComponent": () => (/* binding */ ActionPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _action_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-popover.component.html?ngResource */ 46625);
/* harmony import */ var _action_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-popover.component.scss?ngResource */ 20879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 95472);





let ActionPopoverComponent = class ActionPopoverComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    selectAction(action) {
        this.popoverController.dismiss({
            action: action
        });
    }
    closePopover() {
        this.popoverController.dismiss();
    }
};
ActionPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController }
];
ActionPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-action-popover',
        template: _action_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActionPopoverComponent);



/***/ }),

/***/ 67705:
/*!************************************************************************************************!*\
  !*** ./src/app/component/invoice-price-config-dialog/invoice-price-config-dialog.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePriceConfigDialogComponent": () => (/* binding */ InvoicePriceConfigDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _invoice_price_config_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-price-config-dialog.component.html?ngResource */ 90559);
/* harmony import */ var _invoice_price_config_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-price-config-dialog.component.scss?ngResource */ 58019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 95472);





let InvoicePriceConfigDialogComponent = class InvoicePriceConfigDialogComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.itemList = [];
        this.invoiceType = 'sales';
        this.context = 'default';
        // Price configuration options
        this.salesPriceOption = 'use_perch_price';
        this.purchasePriceOption = 'pay_price_as_perch_price';
        this.purchaseSourcePrice = 'perch_price';
        this.customPerchPrice = 0;
        // Preview data
        this.previewItems = [];
    }
    ngOnInit() {
        // Ensure itemList is an array
        if (!this.itemList || !Array.isArray(this.itemList)) {
            this.itemList = [];
        }
        // Initialize preview items
        this.initializePreviewItems();
        this.updatePreview();
    }
    initializePreviewItems() {
        this.previewItems = this.itemList.map(item => (Object.assign(Object.assign({}, item), { original_pay_price: parseFloat(item.pay_price) || 0, original_perch_price: parseFloat(item.perch_price) || 0, new_pay_price: parseFloat(item.pay_price) || 0, new_perch_price: parseFloat(item.perch_price) || 0, quantity: parseFloat(item.quantity) || 0 })));
    }
    onSalesPriceOptionChange() {
        this.updatePreview();
    }
    onPurchasePriceOptionChange() {
        this.updatePreview();
    }
    onPurchaseSourcePriceChange() {
        this.updatePreview();
    }
    onCustomPerchPriceChange() {
        this.updatePreview();
    }
    updatePreview() {
        if (this.invoiceType === 'sales') {
            this.updateSalesPreview();
        }
        else {
            this.updatePurchasePreview();
        }
    }
    updateSalesPreview() {
        this.previewItems = this.previewItems.map(item => {
            let newPayPrice = item.original_pay_price;
            if (this.salesPriceOption === 'use_perch_price') {
                // Use perch_price as pay_price for sales
                newPayPrice = item.original_perch_price;
            }
            return Object.assign(Object.assign({}, item), { new_pay_price: newPayPrice, new_perch_price: item.original_perch_price // Keep perch_price unchanged
             });
        });
    }
    updatePurchasePreview() {
        this.previewItems = this.previewItems.map(item => {
            let newPerchPrice = item.original_perch_price;
            let newPayPrice = item.original_pay_price;
            if (this.purchasePriceOption === 'set_custom') {
                if (this.customPerchPrice > 0) {
                    newPerchPrice = this.customPerchPrice;
                }
                // Choose which price to copy from old invoice
                if (this.purchaseSourcePrice === 'pay_price') {
                    newPayPrice = item.original_pay_price;
                }
                else {
                    newPayPrice = item.original_perch_price;
                }
            }
            else if (this.purchasePriceOption === 'pay_price_as_perch_price') {
                // Default option: Set current pay_price as perch_price in the copied invoice
                newPerchPrice = item.original_pay_price;
                newPayPrice = item.original_pay_price; // Keep the same for pay_price too
            }
            else if (this.purchasePriceOption === 'keep_pay_price') {
                // Second option: Use current pay_price in copied invoice
                newPerchPrice = item.original_perch_price; // Keep original perch_price
                newPayPrice = item.original_pay_price; // Keep original pay_price
            }
            return Object.assign(Object.assign({}, item), { new_pay_price: newPayPrice, new_perch_price: newPerchPrice });
        });
    }
    applyConfiguration() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Return configured items based on invoice type
            const configuredItems = this.previewItems.map(item => {
                if (this.invoiceType === 'sales') {
                    return Object.assign(Object.assign({}, item), { pay_price: item.new_pay_price, perch_price: item.new_perch_price });
                }
                else {
                    return Object.assign(Object.assign({}, item), { pay_price: item.new_pay_price, perch_price: item.new_perch_price });
                }
            });
            yield this.modalController.dismiss(configuredItems);
        });
    }
    cancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    // Helper methods for template
    getTotalOriginal() {
        return this.previewItems.reduce((total, item) => {
            const price = this.invoiceType === 'sales' ? item.original_pay_price : item.original_perch_price;
            const qty = item.quantity || 0;
            return total + (price * qty);
        }, 0);
    }
    getTotalNew() {
        return this.previewItems.reduce((total, item) => {
            const price = this.invoiceType === 'sales' ? item.new_pay_price : item.new_perch_price;
            const qty = item.quantity || 0;
            return total + (price * qty);
        }, 0);
    }
    getTotalDifference() {
        return this.getTotalNew() - this.getTotalOriginal();
    }
    getItemOriginalPrice(item) {
        return this.invoiceType === 'sales' ? item.original_pay_price : item.original_perch_price;
    }
    getItemNewPrice(item) {
        return this.invoiceType === 'sales' ? item.new_pay_price : item.new_perch_price;
    }
    getItemPriceDifference(item) {
        return this.getItemNewPrice(item) - this.getItemOriginalPrice(item);
    }
    hasChanges() {
        // Always show preview
        return true;
    }
};
InvoicePriceConfigDialogComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
InvoicePriceConfigDialogComponent.propDecorators = {
    itemList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    invoiceType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    context: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
InvoicePriceConfigDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-invoice-price-config-dialog',
        template: _invoice_price_config_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invoice_price_config_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvoicePriceConfigDialogComponent);



/***/ }),

/***/ 30752:
/*!********************************************************************!*\
  !*** ./src/app/component/item-selector/item-selector.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemSelectorComponent": () => (/* binding */ ItemSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _item_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-selector.component.html?ngResource */ 30845);
/* harmony import */ var _item_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-selector.component.scss?ngResource */ 93428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../item-modal/item-modal.page */ 3671);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);











let ItemSelectorComponent = class ItemSelectorComponent {
    constructor(alertController, router, api, storage, toast, modalController, loadingController, datePipe, cdr) {
        this.alertController = alertController;
        this.router = router;
        this.api = api;
        this.storage = storage;
        this.toast = toast;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.datePipe = datePipe;
        this.cdr = cdr;
        // Dropdown state
        this.showDropdown = false;
        this.highlightedIndex = -1;
        this.loadingQty = false;
        this.updateSuccess = false;
        // Legacy compatibility properties (for remaining old code)
        this.selectedIndex = -1;
        this.isOpen = false;
        this.popoverSize = {};
        this.items = [];
        this.loadingItems = false;
        this.searchLang = 0;
        this.payRef = '';
        this.showQuantityInput = true;
        this.showPriceInput = true;
        this.showPerchPriceInput = true;
        this.placeholder = 'اختر الصنف';
        // Dropdown positioning
        this.dropdownPosition = { top: '0px', left: '0px', width: '250px' };
        // Price update properties
        this.enablePriceUpdateConfirmation = true;
        this.originalPayPrice = 0;
        this.originalPerchPrice = 0;
        this.pricesChanged = false;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.itemAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.refreshItems = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // Component properties
        this.parentPage = '';
        this.payPriceInputElement = null;
        this.showQtyWarning = false;
        this.searchTerm = "";
        this.availQty = 0;
        // Focus tracking
        this.componentHasFocus = false;
        // Quantity calculation properties
        this.payTotQty = 0;
        this.perchTotQty = 0;
        this.firstQty = 0;
        this.qtyReal = 0;
        // Error handling
        this.qtyError = false;
        this.qtyErrorMsg = '';
        this.logHistoryArr = [];
        this.getItemLoader = false;
        this.initializeSelectedItem();
    }
    ngOnInit() {
        this.getAppInfo();
    }
    ngOnChanges() {
        console.log('📊 ITEMS CHANGED - ngOnChanges triggered');
        console.log('New items count:', this.items.length);
    }
    // Calculate dropdown position
    calculateDropdownPosition() {
        var _a, _b;
        // Use the inner div wrapper for positioning (this is our reference element)
        const elementToUse = ((_a = this.inputWrapper) === null || _a === void 0 ? void 0 : _a.nativeElement) || ((_b = this.searchInput) === null || _b === void 0 ? void 0 : _b.nativeElement);
        if (elementToUse) {
            const rect = elementToUse.getBoundingClientRect();
            this.dropdownPosition = {
                top: (rect.bottom + 4) + 'px',
                left: rect.left + 'px',
                width: rect.width + 'px'
            };
            console.log('Dropdown position calculated:', this.dropdownPosition);
            console.log('Element used for positioning:', elementToUse.tagName, elementToUse.className);
        }
        else {
            console.warn('Could not find element for dropdown positioning');
        }
    }
    // Reset all fields and selection when input is cleared
    resetAllFieldsAndSelection() {
        console.log('🔄 Starting resetAllFieldsAndSelection...');
        // Use the existing initialization method
        this.initializeSelectedItem();
        // Reset additional states not covered in initializeSelectedItem
        this.loadingQty = false;
        this.updateSuccess = false;
        // Reset price change tracking
        this.pricesChanged = false;
        this.originalPayPrice = 0;
        this.originalPerchPrice = 0;
        // Reset any warning states
        this.showQtyWarning = false;
        // Clear search term completely
        this.searchTerm = '';
        // Reset dropdown state
        this.showDropdown = false;
        this.highlightedIndex = -1;
        // Force update of all input field displays
        setTimeout(() => {
            // Clear the search input field
            if (this.searchInput && this.searchInput.nativeElement) {
                console.log('📝 Clearing search input field');
                this.searchInput.nativeElement.value = '';
            }
            // Clear quantity input field if exists
            if (this.qtyId && this.qtyId.nativeElement) {
                console.log('📝 Clearing quantity input field');
                this.qtyId.nativeElement.value = '0';
            }
            // Force change detection to update all bindings
            this.cdr.detectChanges();
            console.log('🔄 Change detection forced');
        }, 10);
        // Emit null selection to parent components
        this.itemSelected.emit(null);
        console.log('📤 Emitted null selection to parent');
        console.log('✅ resetAllFieldsAndSelection completed');
        console.log('Final values - qty:', this.selectedItem.qty, 'pay_price:', this.selectedItem.pay_price, 'availQty:', this.availQty);
    }
    applyFilters() {
        // No category filtering - items are used directly in templates
        // Search filtering is handled by the getFilteredItems method
    }
    // Get filtered items for display (search filtering only)
    getFilteredItems() {
        if (!this.items || this.items.length === 0) {
            return [];
        }
        // Apply search filter if search term exists
        if (this.searchTerm && this.searchTerm.trim() !== '') {
            const searchValue = this.searchTerm.toLowerCase();
            return this.items.filter(item => item.item_name.toLowerCase().includes(searchValue) ||
                (item.item_desc && item.item_desc.toLowerCase().includes(searchValue)));
        }
        // Return all items if no search term
        return this.items;
    }
    getAppInfo() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
                console.log(this.user_info);
            }
        });
    }
    // drop down 
    // Add this method to your component
    viewItemReport(item) {
        if (!item || !item.id) {
            this.presentToast('يرجى اختيار صنف أولاً', 'warning');
            return;
        }
        let navigationExtras = {
            queryParams: {
                item: JSON.stringify(item)
            }
        };
        this.router.navigate(['folder/items-report'], navigationExtras);
    }
    // Add this method to handle button click from popover
    viewSelectedItemReport() {
        if (this.selectedItem && this.selectedItem.id) {
            this.viewItemReport(this.selectedItem);
        }
        else {
            this.presentToast('يرجى اختيار صنف أولاً', 'warning');
        }
    }
    presentModal2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_4__.ItemModalPage,
                componentProps: {
                    "item": this.selectedItem,
                    "status": 'save'
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    console.log(dataReturned);
                    this.doAfterDismiss(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    // Add this method to present item details modal
    presentModal(id, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!id || id === 'null') {
                this.presentToast('يرجى اختيار صنف أولاً', 'warning');
                return;
            }
            let selectedItemForModal;
            if (status === 'edit') {
                // Find item from items array
                let fl = this.items.filter(x => x.id == id);
                if (fl.length === 0) {
                    this.presentToast('لم يتم العثور على بيانات الصنف', 'danger');
                    return;
                }
                selectedItemForModal = {
                    id: fl[0]['id'],
                    item_desc: fl[0]['item_desc'],
                    model: fl[0]['model'],
                    item_name: fl[0]['item_name'],
                    min_qty: fl[0]['min_qty'],
                    part_no: fl[0]['part_no'],
                    brand: fl[0]['brand'],
                    item_unit: fl[0]['item_unit'],
                    item_parcode: fl[0]['item_parcode'],
                    pay_price: fl[0]['pay_price'],
                    perch_price: fl[0]['perch_price'],
                    aliasEn: fl[0]['aliasEn']
                };
            }
            const modal = yield this.modalController.create({
                component: _item_modal_item_modal_page__WEBPACK_IMPORTED_MODULE_4__.ItemModalPage,
                componentProps: {
                    "item": selectedItemForModal,
                    "colSetting": {},
                    "filterArrayOrign": this.items,
                    "filterArray": this.items,
                    "status": status
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    console.log('Modal dismissed with data:', dataReturned);
                    this.doAfterDismiss(dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    doAfterDismiss(data) {
        if (data.role === 'edit') {
            console.log('Item edited:', data.data);
            // Handle item edit if needed
            this.update(data.data);
        }
        else if (data.role === 'save') {
            console.log('Item saved:', data.data);
            this.saveItem(data.data);
            // Handle item save if needed
        }
        else if (data.role == 'dele') {
            console.log('dele');
            this.delete();
        }
        // Add other handlers as needed
    }
    handleItemUpdate(updatedData) {
        console.log('Received updated data:', updatedData);
        const updatedItem = updatedData;
        // Update the selected item if it matches
        console.log('Updated Item:', updatedItem);
        if (this.selectedItem.id === updatedItem.id) {
            this.selectedItem = Object.assign(Object.assign({}, this.selectedItem), { item_name: updatedItem.item_name, item_desc: updatedItem.item_desc, pay_price: updatedItem.pay_price, perch_price: updatedItem.perch_price });
            // Update original prices
            this.originalPayPrice = updatedItem.pay_price;
            this.originalPerchPrice = updatedItem.perch_price;
        }
        // Update items array
        const itemIndex = this.items.findIndex(item => item.id === updatedItem.id);
        if (itemIndex !== -1) {
            this.items[itemIndex] = Object.assign(Object.assign({}, this.items[itemIndex]), updatedItem);
        }
        // Update search results
        const searchIndex = this.items.findIndex(item => item.id === updatedItem.id);
        if (searchIndex !== -1) {
            this.items[searchIndex] = Object.assign(Object.assign({}, this.items[searchIndex]), updatedItem);
        }
        this.presentToast('تم تحديث بيانات الصنف', 'success');
    }
    update(mdata) {
        this.presentLoadingWithOptions('جاري تعديل البيانات ...');
        this.api.updateItem(mdata[0]).subscribe(data => {
            console.log(data);
            if (data['message'] != 'Post Not Updated') {
                this.presentToast('تم التعديل بنجاح', 'success');
                this.handleItemUpdate(mdata[0]);
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            //console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }, () => {
            this.loadingController.dismiss();
        });
    }
    delete() {
        this.presentLoadingWithOptions('جاري حذف البيانات ...');
        this.api.deleteItems(this.selectedItem.id).subscribe(data => {
            //console.log(data)
            if (data['message'] != 'Post Not Deleted') {
                this.presentToast('تم الحذف بنجاح', 'success');
                //delete selected_ item  from items array
                const itemIndex = this.items.findIndex(item => item.id === this.selectedItem.id);
                if (itemIndex !== -1) {
                    this.items.splice(itemIndex, 1);
                }
                //delete selected_ item  from searchResult array
                const searchIndex = this.items.findIndex(item => item.id === this.selectedItem.id);
                if (searchIndex !== -1) {
                    this.items.splice(searchIndex, 1);
                }
                this.initializeSelectedItem();
                //reset selected item object  n 
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
    saveItem(mdata) {
        console.log('mdata[0]', mdata[0]);
        this.presentLoadingWithOptions('جاري حفظ البيانات ...');
        if ('imageUrl' in mdata[0])
            delete mdata[0].imageUrl;
        if ('tax' in mdata[0])
            delete mdata[0].tax;
        this.api.saveItem(mdata[0]).subscribe(data => {
            console.log(data);
            if (data['message'] != 'Post Not Created') {
                let item_id = data['message'];
                this.firstq = {
                    id: null,
                    item_id: item_id,
                    store_id: this.store_info.id,
                    quantity: mdata[1].quantity,
                    pay_price: mdata[0].pay_price,
                    perch_price: mdata[0].perch_price,
                    fq_year: this.year.id,
                    item_name: mdata[0].item_name
                };
                this.saveFierstQty(mdata);
            }
            else {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            }
        }, (err) => {
            console.log(err);
            this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            this.loadingController.dismiss();
        });
    }
    saveFierstQty(meta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.api.saveFirstQty(this.firstq).subscribe(data => {
                console.log(data);
                // Update selected item from meta data 
                this.selectedItem = {
                    id: this.firstq.item_id,
                    dateCreated: "",
                    pay_ref: this.payRef,
                    item_desc: meta[0].item_desc,
                    item_name: meta[0].item_name,
                    item_unit: meta[0].item_unit,
                    parcode: meta[0].parcode,
                    pay_price: meta[0].pay_price,
                    perch_price: meta[0].perch_price,
                    qty: 1,
                    tot: meta[0].perch_price,
                    aliasEn: meta[0].aliasEn,
                    availQty: meta[1].quantity
                };
                this.setFocusOnInput('qtyId');
                this.getItemLoader = true;
                // Push meta data to items array
                this.items.push({
                    "aliasEn": meta[0].aliasEn,
                    "availQty": meta[1].quantity,
                    "brand": meta[0].brand,
                    "firstQuantity": meta[1].quantity,
                    "id": this.firstq.item_id,
                    "item_desc": meta[0].item_desc,
                    "item_name": meta[0].item_name,
                    "item_parcode": meta[0].item_parcode,
                    "item_unit": meta[0].item_unit,
                    "min_qty": meta[0].min_qty,
                    "model": meta[0].model,
                    "part_no": meta[0].part_no,
                    "pay_price": meta[0].pay_price,
                    "perch_price": meta[0].perch_price,
                    "qtyReal": 0,
                    "salesQuantity": 0,
                    "totalCount": 0,
                    "tswiaQuantity": 0,
                    "quantity": meta[1].quantity,
                    "tax": meta[0].tax,
                    "imageUrl": meta[0].imageUrl
                });
                // Items are now loaded directly without filtering
                console.log('Updated items', this.items);
                // Store items locally
                this.storage.set('itemsLocal', this.items).then((response) => {
                    this.getItemLoader = false;
                });
                this.presentToast('تم حفظ الصنف بنجاح', 'success');
            }, (err) => {
                console.log(err);
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                this.loadingController.dismiss();
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    // Add this method to view selected item details
    viewSelectedItemDetails() {
        if (this.selectedItem && this.selectedItem.id) {
            this.presentModal(this.selectedItem.id, 'edit');
        }
        else {
            this.presentToast('يرجى اختيار صنف أولاً', 'warning');
        }
    }
    presentLoadingWithOptions(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'bubbles',
                mode: 'ios',
                duration: 5000,
                message: msg,
                translucent: true,
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed with role:', role);
        });
    }
    initializeSelectedItem() {
        this.selectedItem = {
            id: undefined,
            dateCreated: "",
            pay_ref: this.payRef,
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
            perch_price: 0,
            qty: 0,
            tot: 0,
            availQty: 0,
            aliasEn: ""
        };
        // Reset quantity calculation values
        this.resetQuantityValues();
    }
    resetQuantityValues() {
        this.availQty = 0;
        this.payTotQty = 0;
        this.perchTotQty = 0;
        this.firstQty = 0;
        this.qtyReal = 0;
        this.qtyError = false;
        this.qtyErrorMsg = '';
    }
    // Removed duplicate implementation
    // Removed duplicate implementation
    // Removed duplicate implementation
    // Removed duplicate implementations
    /// Optimize search method
    searchItem(ev) {
        const searchValue = ev.target.value || ev.detail.value;
        this.searchTerm = searchValue || '';
        this.highlightedIndex = -1;
    }
    // Handle input focus - show dropdown
    onInputFocus() {
        console.log('Input focused, items:', this.items.length);
        this.componentHasFocus = true;
        this.highlightedIndex = -1;
        // Show dropdown when focused if we have items
        if (this.items.length > 0) {
            // Calculate position before showing
            setTimeout(() => {
                this.calculateDropdownPosition();
                this.showDropdown = true;
            }, 10);
            // If no search term, show all items (limited for performance)
            if (this.searchTerm.length === 0) {
                // Show first 50 items if no search term
                // All items are shown since no category filtering
            }
            else {
                // Items are used directly without filtering
            }
        }
        else {
            console.warn('No items available to show in dropdown');
        }
    }
    // Handle input blur - hide dropdown with delay
    onInputBlur() {
        console.log('Input blur triggered');
        this.componentHasFocus = false;
        // Reduced timeout since we now have document click listener as backup
        setTimeout(() => {
            // Only hide if component doesn't have focus anymore
            if (!this.componentHasFocus) {
                console.log('Hiding dropdown after blur delay');
                this.showDropdown = false;
                this.highlightedIndex = -1;
            }
        }, 150); // Delay to allow click events
    }
    // Listen for clicks outside the component to hide dropdowns
    onDocumentClick(event) {
        var _a, _b;
        const target = event.target;
        if (!target)
            return;
        const componentElement = ((_a = this.inputWrapper) === null || _a === void 0 ? void 0 : _a.nativeElement) || ((_b = this.searchInput) === null || _b === void 0 ? void 0 : _b.nativeElement);
        // Get all relevant dropdown elements
        const dropdownElements = document.querySelectorAll('.dropdown-container, .category-dropdown-container');
        let isClickInsideComponent = false;
        let isClickInsideDropdown = false;
        // Check if click is inside the component input area
        if (componentElement) {
            isClickInsideComponent = componentElement.contains(target) ||
                target.closest('.item-selector-wrapper') !== null;
        }
        // Check if click is inside any of the dropdown elements
        dropdownElements.forEach(dropdown => {
            if (dropdown.contains(target)) {
                isClickInsideDropdown = true;
            }
        });
        // Only hide dropdowns if click is completely outside both component and dropdowns
        if (!isClickInsideComponent && !isClickInsideDropdown) {
            if (this.showDropdown) {
                console.log('Hiding item dropdown due to outside click');
                this.showDropdown = false;
                this.highlightedIndex = -1;
                this.componentHasFocus = false;
            }
            // Category dropdown removed
        }
    }
    // Listen for focus changes to hide dropdowns when focus moves away
    onDocumentFocusIn(event) {
        var _a, _b;
        const target = event.target;
        if (!target)
            return;
        const componentElement = ((_a = this.inputWrapper) === null || _a === void 0 ? void 0 : _a.nativeElement) || ((_b = this.searchInput) === null || _b === void 0 ? void 0 : _b.nativeElement);
        // Check if focus moved to an element outside the component
        if (componentElement && !componentElement.contains(target)) {
            // Check if focus is not on dropdown elements either
            const dropdownElements = document.querySelectorAll('.dropdown-container, .category-dropdown-container');
            let isFocusInsideDropdown = false;
            dropdownElements.forEach(dropdown => {
                if (dropdown.contains(target)) {
                    isFocusInsideDropdown = true;
                }
            });
            // If focus is completely outside component and dropdowns, hide them
            if (!isFocusInsideDropdown) {
                if (this.showDropdown) {
                    console.log('Hiding item dropdown due to focus change');
                    this.showDropdown = false;
                    this.highlightedIndex = -1;
                }
                // Category dropdown removed
                this.componentHasFocus = false;
            }
        }
        else if (componentElement && componentElement.contains(target)) {
            // Focus is back on the component
            this.componentHasFocus = true;
        }
    }
    // Handle search input changes
    onSearchInput(event) {
        const searchValue = event.target.value || event.detail.value;
        this.searchTerm = searchValue || '';
        console.log('Search term changed to:', this.searchTerm);
        // Check if input field was cleared - reset all fields and selection
        if (this.searchTerm.length === 0) {
            console.log('Input field cleared - resetting all fields and selection');
            this.resetAllFieldsAndSelection();
        }
        this.highlightedIndex = -1; // Reset highlight when user types
        // Show dropdown when user starts typing or when there are items
        if (this.searchTerm.length > 0 || this.items.length > 0) {
            // Calculate position if dropdown is not already shown
            if (!this.showDropdown) {
                this.calculateDropdownPosition();
            }
            this.showDropdown = true;
            console.log('Showing dropdown with', this.getFilteredItems().length, 'filtered items');
        }
        else {
            this.showDropdown = false;
        }
    }
    // Handle clear button click (X button on ion-input)
    onInputClear(event) {
        console.log('🔴 CLEAR BUTTON CLICKED - ionClear event fired!');
        console.log('Event details:', event);
        console.log('Current searchTerm before clear:', this.searchTerm);
        console.log('Current selectedItem before clear:', this.selectedItem);
        // Immediately set search term to empty
        this.searchTerm = '';
        // Direct reset without relying on synthetic events
        this.resetAllFieldsAndSelection();
        // No filters to apply - all items shown
        // Hide dropdown
        this.showDropdown = false;
        this.highlightedIndex = -1;
        console.log('🟢 Clear button reset completed');
        console.log('searchTerm after clear:', this.searchTerm);
        console.log('selectedItem after clear:', this.selectedItem);
    }
    // Handle model changes (including clear button)
    onModelChange(newValue) {
        console.log('🔄 Model changed from:', this.searchTerm, 'to:', newValue);
        // Update the search term
        this.searchTerm = newValue || '';
        // If the new value is empty, reset everything
        if (!newValue || newValue.length === 0) {
            console.log('🧽 Model change detected empty value - resetting component');
            this.resetAllFieldsAndSelection();
        }
        this.highlightedIndex = -1;
        // Show/hide dropdown based on content
        if (this.searchTerm.length > 0 || this.getFilteredItems().length > 0) {
            if (!this.showDropdown) {
                this.calculateDropdownPosition();
            }
            this.showDropdown = true;
        }
        else {
            this.showDropdown = false;
        }
    }
    // Reset fields and show dropdown after adding item to list
    resetAfterAddingItem() {
        console.log('📦 Item added - resetting fields and showing dropdown');
        // Use the comprehensive reset method
        this.resetAllFieldsAndSelection();
        // Set pay_ref back since it should be preserved
        this.selectedItem.pay_ref = this.payRef;
        // Show dropdown automatically to allow quick selection of next item
        if (this.items.length > 0) {
            setTimeout(() => {
                // Calculate position and show dropdown
                this.calculateDropdownPosition();
                this.showDropdown = true;
                // Focus on the search input for immediate typing
                if (this.searchInput && this.searchInput.nativeElement) {
                    this.searchInput.nativeElement.focus();
                }
                console.log('📦 Dropdown shown after item added - ready for next selection');
            }, 100); // Small delay to ensure DOM is updated
        }
    }
    // Toggle dropdown visibility
    toggleDropdown() {
        console.log('Toggle dropdown clicked, items:', this.items.length);
        if (this.items.length > 0) {
            this.showDropdown = !this.showDropdown;
            if (this.showDropdown) {
                // Calculate position before showing
                this.calculateDropdownPosition();
                // Show all items when dropdown is opened
                // Items loaded directly without filtering
                // Focus the input field
                if (this.searchInput) {
                    setTimeout(() => {
                        this.searchInput.nativeElement.focus();
                    }, 100);
                }
            }
            this.highlightedIndex = -1;
        }
        else {
            console.warn('No items loaded yet');
        }
    }
    // Add missing methods that are being called
    presentDropdown(event) {
        this.highlightedIndex = -1;
        this.clearSearch();
        // Items loaded directly without filtering
        if (this.items.length > 0) {
            this.calculateDropdownPosition();
            this.showDropdown = true;
            // Focus input after short delay
            setTimeout(() => {
                if (this.searchInput) {
                    this.searchInput.nativeElement.focus();
                }
            }, 100);
        }
    }
    clearSelection() {
        this.selectedItem = {
            id: undefined,
            dateCreated: "",
            pay_ref: this.payRef,
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
            perch_price: 0,
            qty: 0,
            tot: 0,
            availQty: 0,
            aliasEn: ""
        };
        this.searchTerm = '';
        this.showDropdown = false;
        this.highlightedIndex = -1;
        // Items loaded directly without filtering
        this.itemSelected.emit(null);
    }
    onKeyDown(event) {
        if (!this.showDropdown || this.getFilteredItems().length === 0) {
            if (event.key === 'ArrowDown' && this.getFilteredItems().length > 0) {
                event.preventDefault();
                this.showDropdown = true;
                this.highlightedIndex = 0;
                this.calculateDropdownPosition();
            }
            return;
        }
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.highlightedIndex = Math.min(this.highlightedIndex + 1, this.getFilteredItems().length - 1);
                this.scrollHighlightedItemIntoView();
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.highlightedIndex = Math.max(this.highlightedIndex - 1, -1);
                this.scrollHighlightedItemIntoView();
                break;
            case 'Enter':
                event.preventDefault();
                if (this.highlightedIndex >= 0 && this.highlightedIndex < this.getFilteredItems().length) {
                    this.selectItem(this.getFilteredItems()[this.highlightedIndex]);
                }
                break;
            case 'Escape':
                event.preventDefault();
                this.showDropdown = false;
                this.highlightedIndex = -1;
                break;
            case 'Tab':
                this.showDropdown = false;
                this.highlightedIndex = -1;
                break;
        }
    }
    scrollHighlightedItemIntoView() {
        if (this.highlightedIndex >= 0) {
            setTimeout(() => {
                const dropdownContainer = document.querySelector('.dropdown-container');
                const highlightedItem = document.querySelector('.item-item.highlighted');
                if (dropdownContainer && highlightedItem) {
                    const containerRect = dropdownContainer.getBoundingClientRect();
                    const itemRect = highlightedItem.getBoundingClientRect();
                    if (itemRect.bottom > containerRect.bottom) {
                        dropdownContainer.scrollTop += (itemRect.bottom - containerRect.bottom + 10);
                    }
                    else if (itemRect.top < containerRect.top) {
                        dropdownContainer.scrollTop -= (containerRect.top - itemRect.top + 10);
                    }
                }
            }, 10);
        }
    }
    selectItem(item) {
        this.selectedItem = {
            id: item.id,
            dateCreated: item.dateCreated,
            pay_ref: this.payRef,
            item_desc: item.item_desc,
            item_name: item.item_name,
            item_unit: item.item_unit,
            parcode: item.parcode,
            pay_price: item.pay_price,
            perch_price: item.perch_price,
            qty: "",
            tot: item.pay_price,
            availQty: item.quantity,
            aliasEn: item.aliasEn
        };
        // Store original prices for comparison
        this.originalPayPrice = item.pay_price;
        this.originalPerchPrice = item.perch_price;
        this.pricesChanged = false;
        this.searchTerm = item.item_name;
        this.showDropdown = false;
        this.highlightedIndex = -1;
        // Force change detection
        this.cdr.detectChanges();
        // Update input value manually
        if (this.searchInput && this.searchInput.nativeElement) {
            setTimeout(() => {
                const ionInput = this.searchInput.nativeElement;
                ionInput.value = item.item_name;
                const inputEvent = new Event('input', { bubbles: true });
                ionInput.dispatchEvent(inputEvent);
            }, 10);
        }
        this.itemSelected.emit(this.selectedItem);
        // Load item quantity data
        if (this.selectedItem.id) {
            this.readItemByIdQty();
            setTimeout(() => {
                this.setFocusOnInput('qtyId');
            }, 200);
        }
    }
    reopenDropdown() {
        setTimeout(() => {
            this.highlightedIndex = -1;
            this.clearSearch();
            // Items loaded directly without filtering
            this.presentDropdown();
        }, 50);
    }
    clearSearch() {
        this.searchTerm = '';
        this.highlightedIndex = -1;
    }
    // Enhanced selection
    selectFromPop(item) {
        this.selectedItem = {
            id: item.id,
            dateCreated: item.dateCreated,
            pay_ref: this.payRef,
            item_desc: item.item_desc,
            item_name: item.item_name,
            item_unit: item.item_unit,
            parcode: item.parcode,
            pay_price: item.pay_price,
            perch_price: item.perch_price,
            qty: "",
            tot: item.pay_price,
            availQty: item.quantity,
            aliasEn: item.aliasEn
        };
        // Store original prices for comparison
        this.originalPayPrice = item.pay_price;
        this.originalPerchPrice = item.perch_price;
        this.pricesChanged = false;
        this.searchTerm = item.item_name;
        this.itemSelected.emit(this.selectedItem);
        // Store original position before closing
        const originalEvent = this.popover.event;
        this.isOpen = false;
        // Focus on quantity input after selection
        setTimeout(() => {
            this.setFocusOnInput('qtyId');
        }, 200);
    }
    // Method to detect if prices have changed
    checkPriceChanges() {
        const payPriceChanged = +this.selectedItem.pay_price !== +this.originalPayPrice;
        const perchPriceChanged = +this.selectedItem.perch_price !== +this.originalPerchPrice;
        this.pricesChanged = payPriceChanged || perchPriceChanged;
        return this.pricesChanged;
    }
    // Method to get changed prices info
    getChangedPricesInfo() {
        let changes = [];
        if (+this.selectedItem.pay_price !== +this.originalPayPrice) {
            changes.push(`سعر البيع: ${this.originalPayPrice} ← ${this.selectedItem.pay_price}`);
        }
        if (+this.selectedItem.perch_price !== +this.originalPerchPrice) {
            changes.push(`سعر الشراء: ${this.originalPerchPrice} ← ${this.selectedItem.perch_price}`);
        }
        return changes.join('\n');
    }
    updatePayPrice(item) {
        return new Promise((resolve, reject) => {
            this.presentLoadingWithOptions('جاري تعديل البيانات ...');
            this.api.updatePayPrice(item).subscribe(data => {
                //console.log(data)
                if (data['message'] != 'Post Not Updated') {
                    this.presentToast('تم التعديل بنجاح', 'success');
                    this.originalPayPrice = +this.selectedItem.pay_price;
                    this.originalPerchPrice = +this.selectedItem.perch_price;
                    this.pricesChanged = false;
                    this.updateItemInArray();
                    this.updateSuccess = true; // Set success flag
                    // Update the item in the items array
                    resolve(true);
                }
                else {
                    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                    resolve(false);
                }
            }, (err) => {
                this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
                resolve(false);
            }, () => {
                this.loadingController.dismiss();
            });
        });
    }
    // Method to update item in the items array
    updateItemInArray() {
        const itemIndex = this.items.findIndex(item => item.id === this.selectedItem.id);
        if (itemIndex !== -1) {
            this.items[itemIndex].pay_price = this.selectedItem.pay_price;
            this.items[itemIndex].perch_price = this.selectedItem.perch_price;
        }
        // Update search results if needed
        const searchIndex = this.items.findIndex(item => item.id === this.selectedItem.id);
        if (searchIndex !== -1) {
            this.items[searchIndex].pay_price = this.selectedItem.pay_price;
            this.items[searchIndex].perch_price = this.selectedItem.perch_price;
        }
    }
    // Method to show price update confirmation dialog
    showPriceUpdateConfirmation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                const changesInfo = this.getChangedPricesInfo();
                const alert = yield this.alertController.create({
                    cssClass: 'price-update-alert',
                    header: 'تحديث الأسعار',
                    mode: 'ios',
                    message: `
        <div style="text-align: right; direction: rtl;">
          <p><strong>تم تغيير الأسعار للصنف:</strong></p>
          <p><strong>${this.selectedItem.item_name}</strong></p>
          <br>
          <p><strong>التغييرات:</strong></p>
          <p style="color: #3880ff; white-space: pre-line;">${changesInfo}</p>
          <br>
          <p>هل تريد حفظ الأسعار الجديدة؟</p>
        </div>
      `,
                    buttons: [
                        // {
                        //   text: 'إلغاء',
                        //   role: 'cancel',
                        //   cssClass: 'secondary',
                        //   handler: () => {
                        //     // Reset prices to original values
                        //     this.selectedItem.pay_price = this.originalPayPrice;
                        //     this.selectedItem.perch_price = this.originalPerchPrice;
                        //     this.pricesChanged = false;
                        //     resolve(false);
                        //   }
                        // },
                        {
                            text: 'المتابعة بدون حفظ',
                            cssClass: 'tertiary',
                            handler: () => {
                                // Continue without updating prices in database
                                resolve(false);
                            }
                        },
                        {
                            text: 'حفظ وإضافة',
                            cssClass: 'primary',
                            handler: () => {
                                // Update prices then continue
                                resolve(true);
                            }
                        }
                    ]
                });
                yield alert.present();
            }));
        });
    }
    // Performance optimization
    trackByItemId(index, item) {
        return item.id || index;
    }
    readItemByIdQty() {
        if (!this.selectedItem.id || !this.store_info || !this.year)
            return;
        this.resetQuantityValues();
        this.loadingQty = true; // Add this line 
        this.api.readItemByIdQty(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
            console.log('readItemByIdQty', data);
            let res = data;
            if (res['message'] != 'No record Found') {
                this.payTotQty = res['data'][0].salesQuantity;
                this.availQty = res['data'][0].availQty;
                this.qtyReal = res['data'][0].qtyReal;
                this.perchTotQty = res['data'][0].perchQuantity;
                this.firstQty = res['data'][0].firstQuantity;
                console.log('readItemByIdQty', this.payTotQty, this.availQty, this.qtyReal, this.perchTotQty, this.firstQty);
                this.getQtyTotalItemId();
                this.qtyError = false;
            }
            else {
                this.qtyError = true;
                this.qtyErrorMsg = 'لا توجد بيانات للصنف';
            }
            this.loadingQty = false; // Add this line
        }, (err) => {
            console.log(err);
            this.qtyError = true;
            this.qtyErrorMsg = 'خطأ في الإتصال';
            this.loadingQty = false; // Add this line
            this.presentToast('خطأ في الإتصال حاول مرة أخرى', 'danger');
        });
    }
    getQtyTotalItemId() {
        console.log('perchTotQty', this.perchTotQty, this.payTotQty);
        // تجميع الكميات السالبة وتحويلها لموجب لإضافتها للمشتريات
        if ((+this.availQty - +this.qtyReal) < 0) {
            this.perchTotQty = +this.perchTotQty + Math.abs((+this.availQty - +this.qtyReal));
        }
        else if ((+this.availQty - +this.qtyReal) > 0) {
            this.payTotQty = +this.payTotQty + (+this.availQty - +this.qtyReal);
        }
        this.availQty = +this.firstQty + +this.perchTotQty - +this.payTotQty;
        this.selectedItem.availQty = this.availQty;
        console.log('Final availQty:', this.availQty);
    }
    refreshQuantity() {
        if (this.selectedItem.id) {
            this.readItemByIdQty();
        }
    }
    qtyChange(ev) {
        const isSalesPage = this.parentPage === 'sales' || this.parentPage === 'edit-sales';
        const isPurchasePage = this.parentPage === 'purchase' || this.parentPage === 'edit-perch';
        if (isSalesPage) {
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
            const qtyExceedsAvailable = this.selectedItem.qty > +this.availQty;
            if (qtyExceedsAvailable) {
                // Show red border on pay_price input only for sales pages
                this.showPayPriceWarning();
            }
        }
        if (isPurchasePage) {
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
            // No quantity checking or warnings for purchase pages
        }
    }
    onPayPriceChange(ev) {
        const isSalesPage = this.parentPage === 'sales' || this.parentPage === 'edit-sales';
        if (isSalesPage) {
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2);
        }
        if (this.enablePriceUpdateConfirmation) {
            this.checkPriceChanges();
        }
    }
    onPerchPriceChange(ev) {
        const isPurchasePage = this.parentPage === 'purchase' || this.parentPage === 'edit-perch';
        if (isPurchasePage) {
            this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2);
        }
        if (this.enablePriceUpdateConfirmation) {
            this.checkPriceChanges();
        }
    }
    addToList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Check if this is a purchase page where quantity checking should be ignored
            const isPurchasePage = this.parentPage === 'purchase' || this.parentPage === 'edit-perch';
            const isSalesPage = this.parentPage === 'sales' || this.parentPage === 'edit-sales';
            // Show quantity warning for sales pages but don't prevent adding
            if (isSalesPage && (+this.selectedItem.qty > +this.availQty)) {
                this.presentToast('الكمية المطلوبة أكبر من المتوفر في المخزن', 'warning');
                // Continue execution - don't return, just show the warning
            }
            if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
                this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger');
            }
            else {
                // Check if prices have changed and confirmation is enabled
                // Check if prices have changed and confirmation is enabled
                if (this.enablePriceUpdateConfirmation && this.checkPriceChanges()) {
                    const shouldContinue = yield this.showPriceUpdateConfirmation();
                    console.log('User chose not to save prices', shouldContinue);
                    if (!shouldContinue) {
                    }
                    else {
                        // If user chose to save prices, update them via API
                        if (this.pricesChanged) {
                            let item = { id: this.selectedItem.id, pay_price: this.selectedItem.pay_price, perch_price: this.selectedItem.perch_price };
                            // Call the updatePayPrice method
                            const updateSuccess = yield this.updatePayPrice(item);
                            if (!updateSuccess) {
                                // If update failed, ask user if they want to continue anyway
                                const continueAnyway = yield this.askContinueWithoutUpdate();
                                if (!continueAnyway) {
                                    return;
                                }
                            }
                        }
                    }
                }
                // Emit the selected item to parent component
                this.itemAdded.emit(Object.assign({}, this.selectedItem));
                // Reset all fields and show dropdown after adding item
                this.resetAfterAddingItem();
                this.setFocusOnInput('dstPop');
                // Store the original trigger element before reopening popover
                const originalTrigger = this.popover.event;
                // Close and reopen popover with proper positioning and focus
                this.isOpen = false;
                this.resetSelectedItem();
                setTimeout(() => {
                    // Restore original trigger position
                    this.popover.event = originalTrigger;
                    this.isOpen = true;
                    this.highlightedIndex = -1;
                    this.clearSearch();
                    // Items loaded directly without filtering
                    this.resetSelectedItem();
                    // Multiple focus attempts
                    setTimeout(() => this.forceFocusOnPopInput(), 100);
                    setTimeout(() => this.forceFocusOnPopInput(), 300);
                    setTimeout(() => this.forceFocusOnPopInput(), 500);
                }, 50);
            }
        });
    }
    // Helper method for continue without update confirmation
    askContinueWithoutUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: 'فشل التحديث',
                    mode: 'ios',
                    message: 'فشل في تحديث الأسعار. هل تريد المتابعة بالأسعار الجديدة بدون حفظها؟',
                    buttons: [
                        {
                            text: 'إلغاء',
                            role: 'cancel',
                            handler: () => resolve(false)
                        },
                        {
                            text: 'متابعة',
                            handler: () => resolve(true)
                        }
                    ]
                });
                yield alert.present();
            }));
        });
    }
    // Helper method to reset selected item
    resetSelectedItem() {
        this.selectedItem = {
            id: undefined,
            dateCreated: "",
            pay_ref: null,
            item_desc: "",
            item_name: "",
            item_unit: "",
            parcode: 0,
            pay_price: 0,
            perch_price: 0,
            qty: 0,
            tot: 0,
            availQty: 0,
            aliasEn: ""
        };
    }
    // Helper method to reopen popover
    // Add this method to show pay_price input warning
    showPayPriceWarning() {
        // Find the pay_price input element
        this.findPayPriceInput();
        if (this.payPriceInputElement) {
            // Add red border class
            this.payPriceInputElement.classList.add('qty-warning-border');
            // Remove the class after 3 seconds
            setTimeout(() => {
                if (this.payPriceInputElement) {
                    this.payPriceInputElement.classList.remove('qty-warning-border');
                }
            }, 3000);
        }
        // Set warning flag
        this.showQtyWarning = true;
        setTimeout(() => {
            this.showQtyWarning = false;
        }, 3000);
    }
    // Method to find pay_price input element
    findPayPriceInput() {
        // Try different selectors to find the pay_price input
        const selectors = [
            'ion-input[ng-reflect-model*="pay_price"] input',
            'ion-input[ng-reflect-model*="selectedItem.pay_price"] input',
            '.pay-price-input input',
            'ion-col:nth-child(3) ion-input input', // Assuming it's the 3rd column
        ];
        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element) {
                this.payPriceInputElement = element;
                break;
            }
        }
        // Fallback: find by looking for input with pay_price value
        if (!this.payPriceInputElement) {
            const allInputs = document.querySelectorAll('ion-input input');
            allInputs.forEach((input) => {
                if (input.value == this.selectedItem.pay_price.toString()) {
                    this.payPriceInputElement = input;
                }
            });
        }
    }
    // Method to present dropdown from external call
    presentDropdownFromEvent(event) {
        this.presentDropdown(event);
    }
    refresh() {
        this.refreshItems.emit();
    }
    // Refresh items (manual refresh with user feedback)
    refreshItemsList() {
        console.log('Manual refresh triggered by user');
        // Clear current data
        // Items cleared directly
        this.showDropdown = false;
        this.highlightedIndex = -1;
        // Clear selection if exists
        if (this.selectedItem && this.selectedItem.id) {
            this.clearSelection();
        }
        // Reload items
        this.refreshItems.emit();
    }
    setFocusOnInput(inputName) {
        if (inputName === 'dstPop' || inputName === 'searchInput') {
            if (this.searchInput) {
                this.searchInput.nativeElement.focus();
            }
            this.presentDropdown();
        }
        else if (inputName === 'qtyId') {
            if (this.qtyId) {
                this.qtyId.setFocus();
            }
        }
    }
    isFocused(event) {
        // Handle focus events if needed
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
    // Compatibility methods for remaining old code
    calculatePopoverSize() {
        // Legacy method - no longer needed
    }
    presentPopover(event) {
        // Redirect to new dropdown method
        this.presentDropdown(event);
    }
    didDismiss() {
        // Legacy method - handled by new dropdown logic
        this.showDropdown = false;
        this.highlightedIndex = -1;
        this.searchTerm = '';
    }
    onPopoverDidPresent() {
        // Legacy method - no longer needed
    }
    onPopoverKeyDown(event) {
        // Redirect to new method
        this.onKeyDown(event);
    }
    scrollToSelected() {
        // Legacy method - replaced by scrollHighlightedItemIntoView
        this.scrollHighlightedItemIntoView();
    }
    fixPopoverPosition(event) {
        // Legacy method - no longer needed
    }
    setFocusOnPopInput() {
        // Legacy method - redirect to new input
        if (this.searchInput) {
            this.searchInput.nativeElement.focus();
        }
    }
    forceFocusOnPopInput() {
        // Legacy method - redirect to new input
        setTimeout(() => {
            if (this.searchInput) {
                this.searchInput.nativeElement.focus();
            }
        }, 100);
    }
    onWindowResize() {
        // Legacy method - no longer needed for dropdowns
    }
    onOrientationChange() {
        // Legacy method - no longer needed for dropdowns
    }
    reopenPopover() {
        // Legacy method - redirect to dropdown
        this.reopenDropdown();
    }
    reopenPopoverWithStoredPosition() {
        // Legacy method - redirect to dropdown
        this.presentDropdown();
    }
};
ItemSelectorComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
ItemSelectorComponent.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['searchInput', { static: false },] }],
    inputWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['inputWrapper', { static: false },] }],
    qtyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['qtyId',] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['popover',] }],
    popInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['popInput',] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    loadingItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    searchLang: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    store_info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    year: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    payRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    showQuantityInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    showPriceInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    showPerchPriceInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    enablePriceUpdateConfirmation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    itemSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    itemAdded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    refreshItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    parentPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    onDocumentClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.HostListener, args: ['document:click', ['$event'],] }],
    onDocumentFocusIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.HostListener, args: ['document:focusin', ['$event'],] }]
};
ItemSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-item-selector',
        template: _item_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemSelectorComponent);



/***/ }),

/***/ 47068:
/*!*************************************************!*\
  !*** ./src/app/component/item-selector/pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let FilterPipe = class FilterPipe {
    transform(items, args) {
        let filter = args.toString();
        if (filter !== undefined && filter.length !== null) {
            if (filter.length === 0 || items.length === 0) {
                return items;
            }
            else {
                /// old way   return filter ? items.filter(item=> item.item_name.toLocaleLowerCase().indexOf(filter) != -1 ) : items;
                return filter ? items.filter(item => {
                    filter = filter.toLocaleLowerCase();
                    // Search across multiple attributes
                    return ((item.item_name && item.item_name.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.brand && item.brand.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.pay_price && item.pay_price.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.perch_price && item.perch_price.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.model && item.model.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.parcode && item.parcode.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.part_no && item.part_no.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.item_desc && item.item_desc.toLocaleLowerCase().indexOf(filter) !== -1) ||
                        (item.aliasEn && item.aliasEn.toLocaleLowerCase().indexOf(filter) !== -1));
                }) : items;
            }
        }
    }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({ name: 'filterByName', pure: true })
], FilterPipe);



/***/ }),

/***/ 91872:
/*!****************************************************************************************!*\
  !*** ./src/app/component/price-adjustment-dialog/price-adjustment-dialog.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceAdjustmentDialogComponent": () => (/* binding */ PriceAdjustmentDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _price_adjustment_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price-adjustment-dialog.component.html?ngResource */ 43069);
/* harmony import */ var _price_adjustment_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price-adjustment-dialog.component.scss?ngResource */ 70373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 95472);





let PriceAdjustmentDialogComponent = class PriceAdjustmentDialogComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.itemsList = [];
        this.mode = 'purchase'; // New input to determine which price to adjust
        this.adjustmentValue = 0;
        this.adjustmentType = 'percentage';
        this.previewItems = [];
    }
    // Dynamic properties based on mode
    get priceField() {
        return this.mode === 'sales' ? 'pay_price' : 'perch_price';
    }
    get originalPriceField() {
        return this.mode === 'sales' ? 'original_pay_price' : 'original_perch_price';
    }
    get newPriceField() {
        return this.mode === 'sales' ? 'new_pay_price' : 'new_perch_price';
    }
    ngOnInit() {
        // Ensure itemsList is an array
        if (!this.itemsList || !Array.isArray(this.itemsList)) {
            this.itemsList = [];
        }
        // Create preview items with current prices based on mode
        this.previewItems = this.itemsList.map(item => {
            const currentPrice = parseFloat(item[this.priceField]) || 0;
            return Object.assign(Object.assign({}, item), { [this.originalPriceField]: currentPrice, [this.newPriceField]: currentPrice });
        });
        this.updatePreview();
    }
    onAdjustmentTypeChange() {
        // Reset adjustment value when type changes for better UX
        this.adjustmentValue = 0;
        this.updatePreview();
    }
    updatePreview() {
        this.previewItems = this.previewItems.map(item => {
            const originalPrice = parseFloat(item[this.originalPriceField]) || 0;
            let newPrice = originalPrice;
            if (this.adjustmentType === 'percentage') {
                // Percentage adjustment
                newPrice = originalPrice * (1 + (this.adjustmentValue / 100));
            }
            else {
                // Amount adjustment
                newPrice = originalPrice + this.adjustmentValue;
            }
            // Ensure price doesn't go below 0
            newPrice = Math.max(0, newPrice);
            return Object.assign(Object.assign({}, item), { [this.newPriceField]: Math.round(newPrice * 100) / 100 // Round to 2 decimal places
             });
        });
    }
    applyChanges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Update original items with new prices
            const updatedItems = this.previewItems.map(item => (Object.assign(Object.assign({}, item), { [this.priceField]: item[this.newPriceField] })));
            yield this.modalController.dismiss(updatedItems);
        });
    }
    cancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    getTotalOriginal() {
        return this.previewItems.reduce((total, item) => {
            const price = parseFloat(item[this.originalPriceField]) || 0;
            const qty = parseFloat(item.qty) || 0;
            return total + (price * qty);
        }, 0);
    }
    getTotalNew() {
        return this.previewItems.reduce((total, item) => {
            const price = parseFloat(item[this.newPriceField]) || 0;
            const qty = parseFloat(item.qty) || 0;
            return total + (price * qty);
        }, 0);
    }
    getTotalDifference() {
        return this.getTotalNew() - this.getTotalOriginal();
    }
    setPresetValue(value) {
        this.adjustmentValue = value;
        this.updatePreview();
    }
    // Helper methods for template
    getOriginalPrice(item) {
        return parseFloat(item[this.originalPriceField]) || 0;
    }
    getNewPrice(item) {
        return parseFloat(item[this.newPriceField]) || 0;
    }
    getPriceDifference(item) {
        return this.getNewPrice(item) - this.getOriginalPrice(item);
    }
    ngOnDestroy() {
        // Cleanup if needed
    }
};
PriceAdjustmentDialogComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
PriceAdjustmentDialogComponent.propDecorators = {
    itemsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    adjustmentInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['adjustmentInput', { static: false },] }]
};
PriceAdjustmentDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-price-adjustment-dialog',
        template: _price_adjustment_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_price_adjustment_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PriceAdjustmentDialogComponent);



/***/ }),

/***/ 35845:
/*!***************************************************************************!*\
  !*** ./src/app/components/account-selector/account-selector.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSelectorComponent": () => (/* binding */ AccountSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _account_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-selector.component.html?ngResource */ 7317);
/* harmony import */ var _account_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-selector.component.scss?ngResource */ 69834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stockService/services.service */ 91472);
/* harmony import */ var _services_account_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account-communication.service */ 32724);
var AccountSelectorComponent_1;








let AccountSelectorComponent = AccountSelectorComponent_1 = class AccountSelectorComponent {
    constructor(api, navController, accountCommunicationService, cdr) {
        this.api = api;
        this.navController = navController;
        this.accountCommunicationService = accountCommunicationService;
        this.cdr = cdr;
        this.accountType = 'customer'; // customer = ac_id 1, supplier = ac_id 2
        this.placeholder = 'اختر الحساب';
        this.label = 'الحساب';
        this.store_info = null;
        this.year = null;
        this.showAddButton = true;
        this.disabled = false;
        this.accountSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.balanceLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.addAccountClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        // Component state
        this.accounts = [];
        this.filteredAccounts = [];
        this.selectedAccount = null;
        this.accountBalance = null;
        this.searchTerm = '';
        this.showDropdown = false;
        this.loadingAccounts = false;
        this.loadingBalance = false;
        // Keyboard navigation
        this.highlightedIndex = -1;
        // Dropdown positioning
        this.dropdownPosition = { top: '0px', left: '0px', width: '250px' };
        // ControlValueAccessor implementation
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        // Ensure we start with no selection
        this.selectedAccount = null;
        this.accountBalance = null;
        this.loadingBalance = false;
        this.loadAccounts();
        this.subscribeToNewAccount();
    }
    ngOnDestroy() {
        if (this.newAccountSubscription) {
            this.newAccountSubscription.unsubscribe();
        }
    }
    // Subscribe to new account creation
    subscribeToNewAccount() {
        this.newAccountSubscription = this.accountCommunicationService.newAccount$.subscribe(newAccount => {
            if (newAccount) {
                console.log('AccountSelector: Received new account:', newAccount);
                // Add to accounts list
                this.accounts.push(newAccount);
                this.filteredAccounts = [...this.accounts];
                // Select the new account
                this.selectAccount(newAccount);
                // Clear the service data
                this.accountCommunicationService.clearNewAccount();
                console.log('AccountSelector: New account added and selected');
            }
        });
    }
    ngOnChanges() {
        // Reload accounts if store_info or year changes
        if (this.store_info && this.year) {
            this.loadAccounts();
        }
    }
    // Load all accounts (both customers and suppliers)
    loadAccounts() {
        if (!this.store_info || !this.year) {
            console.warn('Account Selector: store_info or year not provided');
            return;
        }
        this.loadingAccounts = true;
        console.log('Loading accounts for store:', this.store_info.id, 'year:', this.year.id);
        // Load all accounts with ac_id = 1 (customers) and ac_id = 2 (suppliers)
        this.api.getAllCustomerSupplierAccounts(this.store_info.id, this.year.id).subscribe((response) => {
            this.loadingAccounts = false;
            console.log('Accounts response:', response);
            if (response && response.data) {
                this.accounts = response.data;
                this.filteredAccounts = [...this.accounts];
                console.log('Loaded', this.accounts.length, 'accounts');
            }
            else {
                console.warn('No accounts data in response');
                this.accounts = [];
                this.filteredAccounts = [];
            }
        }, (error) => {
            this.loadingAccounts = false;
            console.error('Error loading accounts:', error);
            this.accounts = [];
            this.filteredAccounts = [];
        });
    }
    // Handle search input
    onSearchInput(event) {
        this.searchTerm = event.target.value; // Keep original case
        console.log('Search term:', this.searchTerm);
        console.log('Total accounts:', this.accounts.length);
        // Clear selected account if user is typing something different
        if (this.selectedAccount && this.searchTerm !== this.selectedAccount.sub_name) {
            console.log('Clearing selectedAccount because search term changed');
            this.selectedAccount = null;
            this.accountBalance = null; // Also clear balance
            this.loadingBalance = false; // Stop any loading
            // Force change detection
            this.cdr.detectChanges();
        }
        this.filterAccounts();
        this.highlightedIndex = -1; // Reset highlight when user types
        // Show dropdown when user starts typing or when there are accounts
        if (this.searchTerm.length > 0 || this.accounts.length > 0) {
            // Calculate position if dropdown is not already shown
            if (!this.showDropdown) {
                this.calculateDropdownPosition();
            }
            this.showDropdown = true;
            console.log('Showing dropdown with', this.filteredAccounts.length, 'filtered accounts');
        }
        else {
            this.showDropdown = false;
            this.filteredAccounts = [...this.accounts];
        }
    }
    // Filter accounts based on search term
    filterAccounts() {
        if (this.searchTerm.trim() === '') {
            this.filteredAccounts = [...this.accounts];
        }
        else {
            this.filteredAccounts = this.accounts.filter(account => account.sub_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                (account.sub_code && account.sub_code.toLowerCase().includes(this.searchTerm.toLowerCase())));
        }
    }
    // Handle input focus
    onInputFocus() {
        console.log('Input focused, accounts:', this.accounts.length);
        console.log('Current searchTerm:', this.searchTerm);
        console.log('Selected account:', this.selectedAccount);
        this.highlightedIndex = -1; // Reset highlight on focus
        // Show dropdown when focused if we have accounts
        if (this.accounts.length > 0) {
            // Calculate position before showing
            setTimeout(() => {
                this.calculateDropdownPosition();
                this.showDropdown = true;
            }, 10);
            // If the current search term matches selected account name exactly, show all accounts
            // This handles the case where user clicks on input after selecting an account
            if (this.selectedAccount && this.searchTerm === this.selectedAccount.sub_name) {
                this.filteredAccounts = [...this.accounts];
            }
            else if (this.searchTerm.length === 0) {
                // If no search term, show all accounts
                this.filteredAccounts = [...this.accounts];
            }
            else {
                // Otherwise filter based on search term
                this.filteredAccounts = this.accounts.filter(account => account.sub_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    (account.sub_code && account.sub_code.toLowerCase().includes(this.searchTerm.toLowerCase())));
            }
        }
    }
    // Handle input blur with delay to allow item click
    onInputBlur() {
        console.log('Input blur triggered');
        setTimeout(() => {
            console.log('Hiding dropdown after blur delay');
            this.showDropdown = false;
            this.highlightedIndex = -1; // Reset highlight when dropdown closes
        }, 200); // Delay to allow click events on dropdown items
    }
    // Handle keyboard navigation
    onKeyDown(event) {
        if (!this.showDropdown || this.filteredAccounts.length === 0) {
            // If dropdown is not shown, down arrow should open it
            if (event.key === 'ArrowDown' && this.filteredAccounts.length > 0) {
                event.preventDefault();
                this.showDropdown = true;
                this.highlightedIndex = 0;
                this.calculateDropdownPosition();
            }
            return;
        }
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.highlightedIndex = Math.min(this.highlightedIndex + 1, this.filteredAccounts.length - 1);
                this.scrollHighlightedItemIntoView();
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.highlightedIndex = Math.max(this.highlightedIndex - 1, -1);
                this.scrollHighlightedItemIntoView();
                break;
            case 'Enter':
                event.preventDefault();
                if (this.highlightedIndex >= 0 && this.highlightedIndex < this.filteredAccounts.length) {
                    this.selectAccount(this.filteredAccounts[this.highlightedIndex]);
                }
                break;
            case 'Escape':
                event.preventDefault();
                this.showDropdown = false;
                this.highlightedIndex = -1;
                break;
            case 'Tab':
                // Allow tab to close dropdown and move to next field
                this.showDropdown = false;
                this.highlightedIndex = -1;
                break;
        }
    }
    // Scroll highlighted item into view
    scrollHighlightedItemIntoView() {
        if (this.highlightedIndex >= 0) {
            // Find the dropdown container and highlighted item
            setTimeout(() => {
                const dropdownContainer = document.querySelector('.dropdown-container');
                const highlightedItem = document.querySelector('.account-item.highlighted');
                if (dropdownContainer && highlightedItem) {
                    const containerRect = dropdownContainer.getBoundingClientRect();
                    const itemRect = highlightedItem.getBoundingClientRect();
                    if (itemRect.bottom > containerRect.bottom) {
                        // Item is below visible area, scroll down
                        dropdownContainer.scrollTop += (itemRect.bottom - containerRect.bottom + 10);
                    }
                    else if (itemRect.top < containerRect.top) {
                        // Item is above visible area, scroll up
                        dropdownContainer.scrollTop -= (containerRect.top - itemRect.top + 10);
                    }
                }
            }, 10);
        }
    }
    // Calculate dropdown position
    calculateDropdownPosition() {
        var _a, _b;
        // Try to use the input wrapper first, fallback to search input
        const elementToUse = ((_a = this.inputWrapper) === null || _a === void 0 ? void 0 : _a.nativeElement) || ((_b = this.searchInput) === null || _b === void 0 ? void 0 : _b.nativeElement);
        if (elementToUse) {
            const rect = elementToUse.getBoundingClientRect();
            console.log('Dropdown position calculation:');
            console.log('Element used:', elementToUse.tagName, elementToUse.className);
            console.log('Element rect:', rect);
            console.log('Viewport size:', window.innerWidth, window.innerHeight);
            this.dropdownPosition = {
                top: (rect.bottom + 2) + 'px',
                left: rect.left + 'px',
                width: rect.width + 'px'
            };
            console.log('Calculated dropdown position:', this.dropdownPosition);
        }
        else {
            console.warn('Could not find element for dropdown positioning');
        }
    }
    // Toggle dropdown visibility
    toggleDropdown() {
        console.log('Toggle dropdown clicked, accounts:', this.accounts.length);
        if (this.accounts.length > 0) {
            this.showDropdown = !this.showDropdown;
            if (this.showDropdown) {
                // Calculate position before showing
                this.calculateDropdownPosition();
                // Show all accounts when dropdown is opened
                this.filteredAccounts = [...this.accounts];
                // Focus the input field
                if (this.searchInput) {
                    setTimeout(() => {
                        this.searchInput.nativeElement.focus();
                    }, 100);
                }
            }
        }
        else {
            console.warn('No accounts loaded yet');
        }
    }
    // Select account from dropdown
    selectAccount(account) {
        console.log('selectAccount called with:', account);
        console.log('Before - searchTerm:', this.searchTerm);
        this.selectedAccount = account;
        this.searchTerm = account.sub_name;
        this.showDropdown = false;
        this.highlightedIndex = -1; // Reset highlight after selection
        console.log('After - searchTerm:', this.searchTerm);
        console.log('After - selectedAccount:', this.selectedAccount);
        // Force change detection
        this.cdr.detectChanges();
        // Also try to manually update the input value
        if (this.searchInput && this.searchInput.nativeElement) {
            setTimeout(() => {
                // For ion-input, we need to set the value and trigger input event
                const ionInput = this.searchInput.nativeElement;
                ionInput.value = account.sub_name;
                // Trigger input event to ensure ion-input updates
                const inputEvent = new Event('input', { bubbles: true });
                ionInput.dispatchEvent(inputEvent);
            }, 10);
        }
        // Emit events
        this.accountSelected.emit(account);
        this.onChange(account);
        this.onTouched();
        // Notify pages about customer selection for payInvo.cust_id setting
        if (account && account.id) {
            this.accountCommunicationService.setCustomerSelected(account.id, account);
        }
        // Load account balance
        this.loadAccountBalance(account.id);
        console.log('Account selection completed');
    }
    // Load account balance
    loadAccountBalance(accountId) {
        if (!accountId || !this.store_info || !this.year) {
            return;
        }
        this.loadingBalance = true;
        this.accountBalance = null;
        this.api.getAccountBalance(accountId, this.store_info.id, this.year.id).subscribe((response) => {
            this.loadingBalance = false;
            if (response.success) {
                this.accountBalance = response.data;
                this.balanceLoaded.emit(this.accountBalance);
            }
        }, (error) => {
            this.loadingBalance = false;
            console.error('Error loading account balance:', error);
        });
    }
    // Handle add account button click
    onAddAccount() {
        console.log('Add account button clicked');
        this.addAccountClicked.emit();
        // Navigate to account modal page
        this.navController.navigateForward('/account-modal', {
            queryParams: {
                mode: 'create'
            }
        });
    }
    // Clear selection
    clearSelection() {
        console.log('Clearing all selection data');
        this.selectedAccount = null;
        this.accountBalance = null;
        this.searchTerm = '';
        this.showDropdown = false;
        this.loadingBalance = false;
        this.highlightedIndex = -1; // Reset highlight on clear
        this.filteredAccounts = [...this.accounts];
        this.onChange(null);
        this.onTouched();
        this.accountSelected.emit(null);
    }
    // Format balance for display
    formatBalance(balance) {
        if (!balance)
            return '';
        const amount = Math.abs(balance.current_balance).toFixed(2);
        const status = balance.status === 'debit' ? 'مدين' : 'دائن';
        return `${amount} (${status})`;
    }
    // Get balance color
    getBalanceColor(balance) {
        if (!balance)
            return 'medium';
        return balance.status === 'debit' ? 'danger' : 'success';
    }
    // Refresh accounts (manual refresh with user feedback)
    refreshAccounts() {
        console.log('Manual refresh triggered by user');
        // Clear current data
        this.accounts = [];
        this.filteredAccounts = [];
        this.showDropdown = false;
        this.highlightedIndex = -1;
        // Clear selection if exists
        if (this.selectedAccount) {
            this.selectedAccount = null;
            this.accountBalance = null;
            this.searchTerm = '';
            this.onChange(null);
            this.accountSelected.emit(null);
        }
        // Reload accounts
        this.loadAccounts();
    }
    // Refresh accounts (internal method)
    refresh() {
        console.log('Internal refresh triggered');
        this.loadAccounts();
    }
    // Check if component is ready
    isReady() {
        return !this.loadingAccounts && this.accounts.length > 0;
    }
    // ControlValueAccessor implementation
    writeValue(value) {
        if (value && typeof value === 'object') {
            this.selectedAccount = value;
            this.searchTerm = value.sub_name || '';
        }
        else {
            this.clearSelection();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
AccountSelectorComponent.ctorParameters = () => [
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_account_communication_service__WEBPACK_IMPORTED_MODULE_3__.AccountCommunicationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef }
];
AccountSelectorComponent.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['searchInput', { static: false },] }],
    inputWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['inputWrapper', { static: false },] }],
    accountType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    store_info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    year: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    showAddButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    accountSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    balanceLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    addAccountClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
AccountSelectorComponent = AccountSelectorComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-account-selector',
        template: _account_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => AccountSelectorComponent_1),
                multi: true
            }
        ],
        styles: [_account_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountSelectorComponent);



/***/ }),

/***/ 62279:
/*!************************************************!*\
  !*** ./src/app/module/shared/shared.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _component_item_selector_item_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/item-selector/item-selector.component */ 30752);
/* harmony import */ var _component_item_selector_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/item-selector/pipe */ 47068);
/* harmony import */ var _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/price-adjustment-dialog/price-adjustment-dialog.component */ 91872);
/* harmony import */ var _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/invoice-price-config-dialog/invoice-price-config-dialog.component */ 67705);
/* harmony import */ var _components_account_selector_account_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/account-selector/account-selector.component */ 35845);
/* harmony import */ var _component_action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/action-popover/action-popover.component */ 10276);











let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _component_item_selector_item_selector_component__WEBPACK_IMPORTED_MODULE_0__.ItemSelectorComponent,
            _component_item_selector_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe,
            _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_2__.PriceAdjustmentDialogComponent,
            _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_3__.InvoicePriceConfigDialogComponent,
            _component_action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__.ActionPopoverComponent,
            _components_account_selector_account_selector_component__WEBPACK_IMPORTED_MODULE_4__.AccountSelectorComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule
        ],
        exports: [
            _component_item_selector_item_selector_component__WEBPACK_IMPORTED_MODULE_0__.ItemSelectorComponent,
            _component_item_selector_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe,
            _component_action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__.ActionPopoverComponent,
            _component_price_adjustment_dialog_price_adjustment_dialog_component__WEBPACK_IMPORTED_MODULE_2__.PriceAdjustmentDialogComponent,
            _component_invoice_price_config_dialog_invoice_price_config_dialog_component__WEBPACK_IMPORTED_MODULE_3__.InvoicePriceConfigDialogComponent,
            _components_account_selector_account_selector_component__WEBPACK_IMPORTED_MODULE_4__.AccountSelectorComponent
        ]
    })
], SharedModule);



/***/ }),

/***/ 32724:
/*!***********************************************************!*\
  !*** ./src/app/services/account-communication.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountCommunicationService": () => (/* binding */ AccountCommunicationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 18406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 96671);



let AccountCommunicationService = class AccountCommunicationService {
    constructor() {
        this.newAccountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.newAccount$ = this.newAccountSubject.asObservable();
        // For notifying pages to set customer ID in their payInvo
        this.customerSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.customerSelected$ = this.customerSelectedSubject.asObservable();
    }
    // Set new account data (for account selector)
    setNewAccount(account) {
        console.log('AccountCommunicationService: Setting new account:', account);
        this.newAccountSubject.next(account);
        // Also emit customer selection event for pages to update their payInvo
        if (account && account.id) {
            this.customerSelectedSubject.next({ id: account.id, account: account });
        }
    }
    // Emit customer selection (for pages to set cust_id)
    setCustomerSelected(accountId, account) {
        console.log('AccountCommunicationService: Customer selected with ID:', accountId);
        this.customerSelectedSubject.next({ id: accountId, account: account });
    }
    // Clear the new account data
    clearNewAccount() {
        this.newAccountSubject.next(null);
    }
    // Get current value without subscription
    getCurrentAccount() {
        return this.newAccountSubject.value;
    }
};
AccountCommunicationService.ctorParameters = () => [];
AccountCommunicationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AccountCommunicationService);



/***/ }),

/***/ 20879:
/*!***********************************************************************************!*\
  !*** ./src/app/component/action-popover/action-popover.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".action-popover-list {\n  min-width: 200px;\n  direction: rtl;\n}\n.action-popover-list .action-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n.action-popover-list .action-item ion-label {\n  font-size: 14px;\n  font-weight: 500;\n}\n.action-popover-list .action-item .action-icon {\n  margin-inline-end: 12px;\n  color: var(--ion-color-primary);\n}\n.action-popover-list .action-item:hover {\n  --background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ047QUFFSTtFQUNFLHVCQUFBO0VBQ0EsK0JBQUE7QUFBTjtBQUdJO0VBQ0Usb0NBQUE7QUFETiIsImZpbGUiOiJhY3Rpb24tcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tcG9wb3Zlci1saXN0IHtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIFxyXG4gIC5hY3Rpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3Rpb24taWNvbiB7XHJcbiAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 58019:
/*!*************************************************************************************************************!*\
  !*** ./src/app/component/invoice-price-config-dialog/invoice-price-config-dialog.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.modern-header ion-toolbar {\n  --background: linear-gradient(45deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n  --color: white;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.modern-header .header-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.modern-header .header-title .title-icon {\n  font-size: 1.4rem;\n}\n\n.modern-header .close-btn {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n}\n\n.modern-content {\n  --background: #f8f9fa;\n  padding: 16px;\n  padding-bottom: 80px;\n  flex: 1;\n}\n\n.modern-content .configuration-section,\n.modern-content .summary-section {\n  margin-bottom: 16px;\n  display: block;\n  visibility: visible;\n}\n\n.modern-content .preview-section {\n  margin-bottom: 16px;\n  display: block;\n  visibility: visible;\n}\n\n.modern-content .control-card {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #dee2e6;\n  margin-bottom: 16px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.modern-content .control-card .card-header {\n  margin-bottom: 20px;\n  text-align: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f3f4;\n}\n\n.modern-content .control-card .card-content {\n  display: block;\n}\n\n.modern-content .control-card .section-title {\n  color: var(--ion-color-primary);\n  font-size: 1.3rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n\n.modern-content .control-card .section-title ion-icon {\n  font-size: 1.5rem;\n}\n\n.modern-content .control-card .section-description {\n  color: #6c757d;\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1.5;\n}\n\n.modern-content .control-card ion-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.modern-content .control-card ion-radio-group .option-item {\n  border-radius: 10px;\n  border: 2px solid #e9ecef;\n  background: #f8f9fa;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n\n.modern-content .control-card ion-radio-group .option-item.default-option {\n  border-color: var(--ion-color-success);\n  background: #f0f9f0;\n}\n\n.modern-content .control-card ion-radio-group .option-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.modern-content .control-card ion-radio-group .option-item .option-radio {\n  --background: transparent;\n  --border-radius: 0;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: auto;\n  padding: 16px;\n}\n\n.modern-content .control-card ion-radio-group .option-item .option-radio ion-radio {\n  --color-checked: var(--ion-color-primary);\n  --border-width: 2px;\n  margin-right: 12px;\n}\n\n.modern-content .control-card ion-radio-group .option-item .option-radio ion-label h3 {\n  color: #495057;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0 0 6px 0;\n}\n\n.modern-content .control-card ion-radio-group .option-item .option-radio ion-label p {\n  color: #6c757d;\n  font-size: 0.95rem;\n  margin: 0 0 8px 0;\n  line-height: 1.4;\n}\n\n.modern-content .control-card ion-radio-group .option-item .option-radio ion-label .default-chip,\n.modern-content .control-card ion-radio-group .option-item .option-radio ion-label .info-chip {\n  --background: var(--ion-color-success);\n  --color: white;\n  margin-top: 4px;\n}\n\n.modern-content .control-card ion-radio-group .option-item .option-radio ion-label .default-chip ion-icon,\n.modern-content .control-card ion-radio-group .option-item .option-radio ion-label .info-chip ion-icon {\n  margin-right: 4px;\n}\n\n.modern-content .control-card ion-radio-group .option-item .option-radio ion-label .info-chip {\n  --background: var(--ion-color-warning);\n}\n\n.modern-content .control-card .custom-settings {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #e9ecef;\n}\n\n.modern-content .control-card .custom-settings .custom-price-input {\n  margin-bottom: 20px;\n}\n\n.modern-content .control-card .custom-settings .custom-price-input ion-item {\n  --background: white;\n  --border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n\n.modern-content .control-card .custom-settings .custom-price-input ion-item .price-input {\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n\n.modern-content .control-card .custom-settings .source-price-selection .selection-label {\n  display: block;\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 12px;\n  font-size: 1rem;\n}\n\n.modern-content .control-card .custom-settings .source-price-selection .modern-segment {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 4px;\n  border: 1px solid #dee2e6;\n}\n\n.modern-content .control-card .custom-settings .source-price-selection .modern-segment .segment-btn {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: white;\n  --border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  flex: 1;\n}\n\n.modern-content .control-card .custom-settings .source-price-selection .modern-segment .segment-btn ion-icon {\n  margin-right: 6px;\n  font-size: 1.1rem;\n}\n\n.modern-content .control-card .custom-settings .source-price-selection .modern-segment .segment-btn ion-label {\n  font-size: 0.95rem;\n}\n\n.modern-content .summary-card {\n  --background: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n}\n\n.modern-content .summary-card .summary-grid {\n  padding: 0;\n}\n\n.modern-content .summary-card .summary-grid .summary-item {\n  text-align: center;\n  padding: 12px;\n  border-radius: 8px;\n  background: #f8f9fa;\n  margin: 4px;\n}\n\n.modern-content .summary-card .summary-grid .summary-item .summary-label {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n\n.modern-content .summary-card .summary-grid .summary-item .summary-value {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #495057;\n}\n\n.modern-content .summary-card .summary-grid .summary-item .summary-value.primary {\n  color: var(--ion-color-primary);\n}\n\n.modern-content .summary-card .summary-grid .summary-item .summary-value.success {\n  color: var(--ion-color-success);\n}\n\n.modern-content .summary-card .summary-grid .difference-item {\n  text-align: center;\n  padding: 16px;\n  border-radius: 8px;\n  background: linear-gradient(135deg, #f8f9fa, #e9ecef);\n  margin: 8px 4px 4px 4px;\n  border: 2px solid transparent;\n}\n\n.modern-content .summary-card .summary-grid .difference-item .difference-label {\n  font-size: 1rem;\n  color: #495057;\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n\n.modern-content .summary-card .summary-grid .difference-item .difference-value {\n  font-size: 1.6rem;\n  font-weight: 800;\n}\n\n.modern-content .summary-card .summary-grid .difference-item .difference-value.positive {\n  color: var(--ion-color-success);\n}\n\n.modern-content .summary-card .summary-grid .difference-item .difference-value.negative {\n  color: var(--ion-color-danger);\n}\n\n.modern-content .items-card {\n  --background: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n}\n\n.modern-content .items-card .items-container {\n  max-height: 300px;\n  overflow-y: auto;\n  margin-bottom: 10px;\n}\n\n.modern-content .items-card .items-container .item-preview {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n\n.modern-content .items-card .items-container .item-preview.even {\n  background: #f8f9fa;\n}\n\n.modern-content .items-card .items-container .item-preview:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.modern-content .items-card .items-container .item-preview .item-info {\n  flex: 1;\n}\n\n.modern-content .items-card .items-container .item-preview .item-info .item-name {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.modern-content .items-card .items-container .item-preview .item-info .item-name ion-icon {\n  font-size: 1.2rem;\n}\n\n.modern-content .items-card .items-container .item-preview .item-info .item-details {\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n\n.modern-content .items-card .items-container .item-preview .item-info .item-details .quantity {\n  background: var(--ion-color-primary-tint);\n  color: var(--ion-color-primary);\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison {\n  text-align: right;\n  min-width: 140px;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .price-label {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-left: 8px;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .original-price {\n  font-weight: 500;\n  color: #495057;\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .new-price {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .new-price.increased {\n  color: var(--ion-color-success);\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .new-price.decreased {\n  color: var(--ion-color-danger);\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-difference {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-difference span.increased {\n  color: var(--ion-color-success);\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-difference span.decreased {\n  color: var(--ion-color-danger);\n}\n\n.modern-footer {\n  position: relative;\n  margin-top: auto;\n}\n\n.modern-footer ion-toolbar {\n  background: white;\n  padding: 8px 16px;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.modern-footer ion-toolbar .action-buttons {\n  display: flex;\n  gap: 12px;\n}\n\n.modern-footer ion-toolbar .action-buttons .cancel-btn,\n.modern-footer ion-toolbar .action-buttons .apply-btn {\n  flex: 1;\n  height: 48px;\n  font-weight: 600;\n  --border-radius: 12px;\n  transition: all 0.3s ease;\n}\n\n.modern-footer ion-toolbar .action-buttons .cancel-btn:hover,\n.modern-footer ion-toolbar .action-buttons .apply-btn:hover {\n  transform: translateY(-2px);\n}\n\n.modern-footer ion-toolbar .action-buttons .apply-btn {\n  --background: linear-gradient(45deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n  box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n\n@media (max-width: 768px) {\n  .modern-content {\n    padding: 12px;\n  }\n  .modern-content .control-card {\n    padding: 16px;\n  }\n  .modern-content .control-card .section-title {\n    font-size: 1.1rem;\n  }\n  .modern-content .control-card .option-item .option-radio {\n    padding: 12px;\n  }\n  .modern-content .control-card .option-item .option-radio ion-label h3 {\n    font-size: 1rem;\n  }\n  .modern-content .control-card .option-item .option-radio ion-label p {\n    font-size: 0.9rem;\n  }\n  .modern-content .summary-grid ion-col[size=\"4\"] {\n    size: 12;\n    margin-bottom: 8px;\n  }\n  .modern-content .item-preview {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .modern-content .item-preview .price-comparison {\n    text-align: left;\n    width: 100%;\n  }\n\n  .modern-footer .action-buttons {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .modern-footer .action-buttons .cancel-btn,\n.modern-footer .action-buttons .apply-btn {\n    height: 44px;\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.configuration-section,\n.summary-section,\n.preview-section {\n  animation: slideInUp 0.5s ease-out;\n}\n\n.configuration-section {\n  animation-delay: 0.1s;\n}\n\n.summary-section {\n  animation-delay: 0.2s;\n}\n\n.preview-section {\n  animation-delay: 0.3s;\n}\n\nion-segment {\n  display: flex !important;\n  flex-direction: row !important;\n  width: 100%;\n}\n\nion-segment-button {\n  flex: 1 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UtcHJpY2UtY29uZmlnLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFLRTtFQUNFLDhGQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FBRko7O0FBS0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUhKOztBQUtJO0VBQ0UsaUJBQUE7QUFITjs7QUFPRTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtBQUxKOztBQVVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxPQUFBO0FBUEY7O0FBU0U7O0VBRUUsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBUko7O0FBWUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtBQVZKOztBQVlJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFWTjs7QUFhSTtFQUNFLGNBQUE7QUFYTjs7QUFjSTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBWk47O0FBY007RUFDRSxpQkFBQTtBQVpSOztBQWdCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBZE47O0FBa0JJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWhCTjs7QUFrQk07RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBaEJSOztBQWtCUTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7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O0lBQ0EsUUFBQTtFQWxHSjtFQW9HSTs7SUFFRSxZQUFBO0VBbEdOO0FBQ0Y7O0FBd0dBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUF0R0Y7RUF3R0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUF0R0Y7QUFDRjs7QUF5R0E7OztFQUdFLGtDQUFBO0FBdkdGOztBQTBHQTtFQUNFLHFCQUFBO0FBdkdGOztBQTBHQTtFQUNFLHFCQUFBO0FBdkdGOztBQTBHQTtFQUNFLHFCQUFBO0FBdkdGOztBQTJHQTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBeEdGOztBQTJHQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0FBeEdGIiwiZmlsZSI6Imludm9pY2UtcHJpY2UtY29uZmlnLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1haW4gY29udGFpbmVyXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLy8gTW9kZXJuIGhlYWRlciBzdHlsaW5nXG4ubW9kZXJuLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSkpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cbiAgLmhlYWRlci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAudGl0bGUtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWNvbG9yLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIH1cbn1cblxuLy8gTW9kZXJuIGNvbnRlbnQgc3R5bGluZ1xuLm1vZGVybi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgZmxleDogMTtcblxuICAuY29uZmlndXJhdGlvbi1zZWN0aW9uLFxuICAuc3VtbWFyeS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAucHJldmlldy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAvLyBDb250cm9sIGNhcmQgc3R5bGluZ1xuICAuY29udHJvbC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xuICAgIH1cblxuICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cblxuICAgIC8vIFJhZGlvIGdyb3VwIHN0eWxpbmdcbiAgICBpb24tcmFkaW8tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDEycHg7XG5cbiAgICAgIC5vcHRpb24taXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJi5kZWZhdWx0LW9wdGlvbiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YwZjlmMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vcHRpb24tcmFkaW8ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICAgIC0tbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDZweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZWZhdWx0LWNoaXAsXG4gICAgICAgICAgICAuaW5mby1jaGlwIHtcbiAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG5cbiAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbmZvLWNoaXAge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDdXN0b20gc2V0dGluZ3Mgc3R5bGluZ1xuICAgIC5jdXN0b20tc2V0dGluZ3Mge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XG5cbiAgICAgIC5jdXN0b20tcHJpY2UtaW5wdXQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG5cbiAgICAgICAgICAucHJpY2UtaW5wdXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc291cmNlLXByaWNlLXNlbGVjdGlvbiB7XG4gICAgICAgIC5zZWxlY3Rpb24tbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubW9kZXJuLXNlZ21lbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuXG4gICAgICAgICAgLnNlZ21lbnQtYnRuIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3VtbWFyeSBjYXJkIHN0eWxpbmdcbiAgLnN1bW1hcnktY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXG4gICAgLnN1bW1hcnktZ3JpZCB7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAuc3VtbWFyeS1pdGVtIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuXG4gICAgICAgIC5zdW1tYXJ5LWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdW1tYXJ5LXZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuXG4gICAgICAgICAgJi5wcmltYXJ5IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5zdWNjZXNzIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kaWZmZXJlbmNlLWl0ZW0ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgI2U5ZWNlZik7XG4gICAgICAgIG1hcmdpbjogOHB4IDRweCA0cHggNHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICAgICAuZGlmZmVyZW5jZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpZmZlcmVuY2UtdmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAgICAgICAmLnBvc2l0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5uZWdhdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSXRlbXMgcHJldmlldyBzdHlsaW5nXG4gIC5pdGVtcy1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG5cbiAgICAuaXRlbXMtY29udGFpbmVyIHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIC5pdGVtLXByZXZpZXcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXG4gICAgICAgICYuZXZlbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0taW5mbyB7XG4gICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgIC5pdGVtLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pdGVtLWRldGFpbHMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcblxuICAgICAgICAgICAgLnF1YW50aXR5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByaWNlLWNvbXBhcmlzb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIG1pbi13aWR0aDogMTQwcHg7XG5cbiAgICAgICAgICAucHJpY2Utcm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuXG4gICAgICAgICAgICAucHJpY2UtbGFiZWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmlnaW5hbC1wcmljZSB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV3LXByaWNlIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG5cbiAgICAgICAgICAgICAgJi5pbmNyZWFzZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmRlY3JlYXNlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByaWNlLWRpZmZlcmVuY2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAmLmluY3JlYXNlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuZGVjcmVhc2VkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTW9kZXJuIGZvb3RlciBzdHlsaW5nXG4ubW9kZXJuLWZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3gtc2hhZG93OiAwIC0ycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAuY2FuY2VsLWJ0bixcbiAgICAgIC5hcHBseS1idG4ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFwcGx5LWJ0biB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2Rlcm4tY29udGVudCB7XG4gICAgcGFkZGluZzogMTJweDtcblxuICAgIC5jb250cm9sLWNhcmQge1xuICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIH1cblxuICAgICAgLm9wdGlvbi1pdGVtIHtcbiAgICAgICAgLm9wdGlvbi1yYWRpbyB7XG4gICAgICAgICAgcGFkZGluZzogMTJweDtcblxuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zdW1tYXJ5LWdyaWQge1xuICAgICAgaW9uLWNvbFtzaXplPVwiNFwiXSB7XG4gICAgICAgIHNpemU6IDEyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tcHJldmlldyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBnYXA6IDEycHg7XG5cbiAgICAgIC5wcmljZS1jb21wYXJpc29uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1vZGVybi1mb290ZXIge1xuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIC5jYW5jZWwtYnRuLFxuICAgICAgLmFwcGx5LWJ0biB7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uIGNsYXNzZXNcbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi5jb25maWd1cmF0aW9uLXNlY3Rpb24sXG4uc3VtbWFyeS1zZWN0aW9uLFxuLnByZXZpZXctc2VjdGlvbiB7XG4gIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi5jb25maWd1cmF0aW9uLXNlY3Rpb24ge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi5zdW1tYXJ5LXNlY3Rpb24ge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5wcmV2aWV3LXNlY3Rpb24ge1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi8vIFNlZ21lbnQgc3R5bGluZyBmaXhlc1xuaW9uLXNlZ21lbnQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGZsZXg6IDEgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 93428:
/*!*********************************************************************************!*\
  !*** ./src/app/component/item-selector/item-selector.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin: 5px 0;\n}\n\n.red {\n  --background: #ffebee;\n  --color: #c62828;\n}\n\n.darko {\n  --background: #f5f5f5;\n  --color: #333;\n}\n\n.cust_Toast {\n  --border-radius: 10px;\n  --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n\n.label-with-buttons-container {\n  direction: rtl;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  text-align: right;\n}\n\n.label-with-buttons-container .action-buttons-left {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  order: 1;\n}\n\n.label-with-buttons-container .item-label-center {\n  flex: 1;\n  text-align: center;\n  order: 2;\n}\n\n.item-refresh-btn-left {\n  --color: var(--ion-color-success);\n  --padding-start: 3px;\n  --padding-end: 3px;\n  height: 32px;\n  width: 32px;\n  margin: 0;\n}\n\n.item-refresh-btn-left ion-icon {\n  font-size: 18px;\n  transition: transform 0.3s ease;\n}\n\n.item-refresh-btn-left ion-icon.spin {\n  animation: spin 1s linear infinite;\n}\n\n.item-refresh-btn-left:hover {\n  --color: var(--ion-color-success-shade);\n  --background: rgba(var(--ion-color-success-rgb), 0.1);\n}\n\n.item-refresh-btn-left[disabled] {\n  --color: var(--ion-color-medium);\n  opacity: 0.5;\n}\n\n.add-item-btn-left {\n  --color: var(--ion-color-success);\n  --padding-start: 3px;\n  --padding-end: 3px;\n  height: 32px;\n  width: 32px;\n  margin: 0;\n}\n\n.add-item-btn-left ion-icon {\n  font-size: 18px;\n}\n\n.add-item-btn-left:hover {\n  --color: var(--ion-color-success-shade);\n  --background: rgba(var(--ion-color-success-rgb), 0.1);\n}\n\n.item-loading-spinner-left {\n  width: 18px;\n  height: 18px;\n  margin: 0;\n}\n\n.dropdown-filter-container {\n  background: var(--ion-color-light-tint);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.filter-toggle-header {\n  padding: 8px 12px;\n  background: var(--ion-color-light);\n}\n\n.filter-toggle-header .filter-toggle-btn {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  width: 100%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.filter-toggle-header .filter-toggle-btn .button-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.filter-toggle-header .filter-toggle-btn ion-icon {\n  font-size: 16px;\n  margin-left: 6px;\n  transition: transform 0.2s ease;\n  order: 1;\n}\n\n.filter-toggle-header .filter-toggle-btn ion-label {\n  font-size: 14px;\n  font-weight: 500;\n  order: 2;\n  flex: 1;\n  text-align: right;\n  margin-right: 8px;\n}\n\n.filter-toggle-header .filter-toggle-btn .results-count {\n  font-size: 12px;\n  font-weight: 400;\n  order: 3;\n  margin-left: auto;\n}\n\n.filter-buttons-wrapper {\n  padding: 12px;\n  animation: slideDown 0.2s ease-out;\n}\n\n.filter-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: flex-start;\n  direction: rtl;\n}\n\n.filter-button {\n  --border-radius: 20px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  margin: 0;\n  text-transform: none;\n}\n\n.filter-button[fill=outline] {\n  --border-color: var(--ion-color-primary);\n  --border-width: 1.5px;\n  --color: var(--ion-color-primary);\n  --background: transparent;\n}\n\n.filter-button[fill=outline]:hover {\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.filter-button[fill=outline]:active {\n  --background: rgba(var(--ion-color-primary-rgb), 0.2);\n}\n\n.filter-button[fill=solid] {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\n\n.filter-button[fill=solid]:hover {\n  --background: var(--ion-color-primary-shade);\n}\n\n.filter-button[fill=solid]:active {\n  --background: var(--ion-color-primary-shade);\n}\n\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    max-height: 200px;\n  }\n}\n\n.dropdown-container .dropdown-filter-container + .item-dropdown {\n  border-top: none;\n}\n\n.item-selector-wrapper {\n  width: 100%;\n  margin: 5px 0;\n}\n\n.item-selector-wrapper .input-container-wrapper {\n  position: relative;\n  width: 100%;\n}\n\n.item-selector-wrapper .item-selector-input {\n  --background: transparent;\n  --color: var(--ion-color-dark);\n  --placeholder-color: var(--ion-color-medium);\n  width: 100%;\n  direction: rtl;\n  text-align: right;\n  --padding-start: 12px;\n  --padding-end: 45px;\n}\n\n.item-selector-wrapper .item-selector-input input,\n.item-selector-wrapper .item-selector-input .native-input,\n.item-selector-wrapper .item-selector-input .input-wrapper input {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  max-width: calc(100% - 80px) !important;\n  display: block !important;\n}\n\n.item-selector-wrapper .item-selector-input[disabled] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-medium);\n  cursor: not-allowed;\n}\n\n.item-selector-wrapper .item-refresh-btn {\n  --color: var(--ion-color-success);\n  --padding-start: 3px;\n  --padding-end: 3px;\n  height: 30px;\n  width: 30px;\n  margin: 0;\n  position: absolute;\n  right: 40px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1000;\n}\n\n.item-selector-wrapper .item-refresh-btn ion-icon {\n  font-size: 16px;\n  transition: transform 0.3s ease;\n}\n\n.item-selector-wrapper .item-refresh-btn ion-icon.spin {\n  animation: spin 1s linear infinite;\n}\n\n.item-selector-wrapper .item-refresh-btn:hover {\n  --color: var(--ion-color-success-shade);\n  --background: rgba(var(--ion-color-success-rgb), 0.1);\n}\n\n.item-selector-wrapper .item-refresh-btn[disabled] {\n  --color: var(--ion-color-medium);\n  opacity: 0.5;\n}\n\n.item-selector-wrapper .item-loading-spinner {\n  position: absolute;\n  right: 45px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  z-index: 999;\n}\n\n.dropdown-container {\n  position: fixed;\n  z-index: 10000;\n  background: white;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  max-height: 300px;\n  overflow-y: auto;\n  margin-top: 4px;\n  min-width: 250px;\n}\n\n.dropdown-container .dropdown-header {\n  background: var(--ion-color-light-tint);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n  padding: 8px;\n}\n\n.dropdown-container .item-dropdown {\n  margin: 0;\n  padding: 0;\n  background: transparent;\n}\n\n.dropdown-container .item-dropdown .item-item {\n  --background: transparent;\n  --border-color: transparent;\n  --color: var(--ion-color-dark);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 60px;\n  direction: rtl;\n  text-align: right;\n}\n\n.dropdown-container .item-dropdown .item-item:hover {\n  --background: var(--ion-color-light);\n}\n\n.dropdown-container .item-dropdown .item-item:active {\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.dropdown-container .item-dropdown .item-item.highlighted {\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-left: 3px solid var(--ion-color-primary);\n}\n\n.dropdown-container .item-dropdown .item-item ion-label {\n  margin: 0;\n}\n\n.dropdown-container .item-dropdown .item-item ion-label h3 {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin: 0 0 4px 0;\n}\n\n.dropdown-container .item-dropdown .item-item ion-label .item-desc {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  margin: 2px 0;\n}\n\n.dropdown-container .item-dropdown .item-item ion-label .item-prices-compact {\n  display: flex;\n  gap: 12px;\n  font-size: 11px;\n  margin-top: 4px;\n}\n\n.dropdown-container .item-dropdown .item-item ion-label .item-prices-compact .price-sale {\n  color: var(--ion-color-success);\n  font-weight: 600;\n}\n\n.dropdown-container .item-dropdown .item-item ion-label .item-prices-compact .price-purchase {\n  color: var(--ion-color-danger);\n  font-weight: 600;\n}\n\n.dropdown-container .item-dropdown .item-item ion-label .item-prices-compact .stock-qty {\n  color: var(--ion-color-dark);\n  font-weight: 500;\n}\n\n.dropdown-container .item-dropdown .no-results {\n  --color: var(--ion-color-medium);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  text-align: center;\n  font-style: italic;\n}\n\n.dropdown-container .item-dropdown .no-results ion-label p {\n  margin: 0;\n  font-size: 14px;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 768px) {\n  .label-with-buttons-container .action-buttons-left {\n    gap: 2px;\n  }\n  .label-with-buttons-container .item-refresh-btn-left,\n.label-with-buttons-container .add-item-btn-left {\n    height: 28px;\n    width: 28px;\n    --padding-start: 2px;\n    --padding-end: 2px;\n  }\n  .label-with-buttons-container .item-refresh-btn-left ion-icon,\n.label-with-buttons-container .add-item-btn-left ion-icon {\n    font-size: 16px;\n  }\n  .label-with-buttons-container .item-loading-spinner-left {\n    width: 16px;\n    height: 16px;\n  }\n  .label-with-buttons-container .item-label-center {\n    font-size: 14px;\n  }\n\n  .filter-buttons {\n    gap: 6px;\n  }\n\n  .filter-button {\n    --padding-start: 10px;\n    --padding-end: 10px;\n    --padding-top: 4px;\n    --padding-bottom: 4px;\n    height: 28px;\n    font-size: 12px;\n  }\n\n  .filter-toggle-header .filter-toggle-btn ion-icon {\n    font-size: 14px;\n    margin-left: 4px;\n  }\n  .filter-toggle-header .filter-toggle-btn ion-label {\n    font-size: 13px;\n  }\n  .filter-toggle-header .filter-toggle-btn .results-count {\n    font-size: 11px;\n  }\n\n  .item-selector-wrapper .item-selector-input {\n    font-size: 13px;\n    --padding-start: 10px;\n    --padding-end: 40px;\n  }\n  .item-selector-wrapper .item-selector-input input,\n.item-selector-wrapper .item-selector-input .native-input,\n.item-selector-wrapper .item-selector-input .input-wrapper input {\n    max-width: calc(100% - 45px) !important;\n    font-size: 13px !important;\n  }\n  .item-selector-wrapper .item-refresh-btn {\n    right: 36px;\n    height: 26px;\n    width: 26px;\n    --padding-start: 2px;\n    --padding-end: 2px;\n  }\n  .item-selector-wrapper .item-refresh-btn ion-icon {\n    font-size: 14px;\n  }\n  .item-selector-wrapper .item-loading-spinner {\n    right: 41px;\n    width: 14px;\n    height: 14px;\n  }\n\n  .dropdown-container {\n    max-height: 200px;\n  }\n  .dropdown-container .item-dropdown .item-item {\n    --min-height: 50px;\n  }\n  .dropdown-container .item-dropdown .item-item ion-label h3 {\n    font-size: 13px;\n  }\n  .dropdown-container .item-dropdown .item-item ion-label .item-desc {\n    font-size: 11px;\n  }\n  .dropdown-container .item-dropdown .item-item ion-label .item-prices-compact {\n    font-size: 10px;\n  }\n}\n\n.item-selector-wrapper ion-input .native-input,\n.item-selector-wrapper ion-input input {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  width: 100% !important;\n}\n\n.item-selector-wrapper .input-wrapper {\n  overflow: hidden !important;\n}\n\n.item-selector-wrapper .input-wrapper input {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n}\n\n.stock-info-container {\n  margin-top: 8px;\n  min-height: 32px;\n  display: flex;\n  align-items: center;\n}\n\n.stock-info-line {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n\n.stock-info-line ion-text {\n  font-size: 14px;\n  margin: 0;\n}\n\n.stock-info-line .qty-value {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.stock-info-line .loading-text {\n  color: var(--ion-color-primary);\n  font-size: 12px;\n}\n\n.stock-info-line .error-text {\n  font-size: 12px;\n}\n\n.stock-info-line .refresh-btn {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  margin: 0;\n  height: 24px;\n  width: 24px;\n}\n\n.stock-info-line .refresh-btn ion-icon {\n  font-size: 16px;\n}\n\n.error-line .refresh-btn ion-icon {\n  color: var(--ion-color-danger) !important;\n}\n\nion-spinner {\n  width: 16px;\n  height: 16px;\n}\n\n.new-item-btn {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  margin-left: 4px;\n}\n\n.new-item-btn ion-icon {\n  font-size: 20px;\n}\n\n.button-labels {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 4px;\n  padding-right: 8px;\n}\n\n.button-labels .btn-label {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n  margin-left: 32px;\n}\n\n.category-selector-container {\n  padding: 8px 16px;\n  background: var(--ion-color-light);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n  position: relative;\n}\n\n.category-selector-container .category-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.category-selector-container .category-input-wrapper .category-input {\n  --background: #ffffff;\n  --border-radius: 6px;\n  --padding-start: 12px;\n  --padding-end: 35px;\n  --color: var(--ion-color-dark);\n  --placeholder-color: var(--ion-color-medium);\n  border: 1.5px solid var(--ion-color-light);\n  border-radius: 6px;\n  height: 36px;\n  font-size: 13px;\n  direction: rtl;\n  text-align: right;\n}\n\n.category-selector-container .category-input-wrapper .category-input:focus {\n  --border-color: var(--ion-color-primary);\n  box-shadow: 0 0 0 2px rgba(var(--ion-color-primary-rgb), 0.2);\n}\n\n.category-selector-container .category-input-wrapper .category-input.has-focus {\n  --border-color: var(--ion-color-primary);\n}\n\n.category-selector-container .category-input-wrapper .category-dropdown-icon {\n  position: absolute;\n  right: 10px;\n  color: var(--ion-color-medium);\n  font-size: 16px;\n  transition: transform 0.2s ease;\n  cursor: pointer;\n  z-index: 10;\n}\n\n.category-selector-container .category-input-wrapper .category-dropdown-icon.rotated {\n  transform: rotate(180deg);\n}\n\n.category-dropdown-container {\n  position: fixed;\n  z-index: 10000;\n  background: white;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 6px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  max-height: 160px;\n  overflow-y: auto;\n  margin-top: 4px;\n  min-width: 200px;\n}\n\n.category-dropdown-container .category-dropdown {\n  margin: 0;\n  padding: 0;\n  background: transparent;\n}\n\n.category-dropdown-container .category-dropdown .category-item {\n  --background: transparent;\n  --border-color: transparent;\n  --color: var(--ion-color-dark);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 40px;\n  direction: rtl;\n  text-align: right;\n}\n\n.category-dropdown-container .category-dropdown .category-item:hover {\n  --background: var(--ion-color-light);\n}\n\n.category-dropdown-container .category-dropdown .category-item:active {\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.category-dropdown-container .category-dropdown .category-item.highlighted {\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-left: 3px solid var(--ion-color-primary);\n}\n\n.category-dropdown-container .category-dropdown .category-item ion-label {\n  margin: 0;\n}\n\n.category-dropdown-container .category-dropdown .category-item ion-label h3 {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin: 0;\n}\n\n@media (max-width: 480px) {\n  .category-selector-container {\n    padding: 6px 12px;\n  }\n  .category-selector-container .category-input-wrapper .category-input {\n    height: 32px;\n    font-size: 12px;\n    --padding-start: 10px;\n    --padding-end: 30px;\n  }\n  .category-selector-container .category-input-wrapper .category-dropdown-icon {\n    right: 8px;\n    font-size: 14px;\n  }\n\n  .category-dropdown-container {\n    max-height: 120px;\n  }\n  .category-dropdown-container .category-dropdown .category-item {\n    --min-height: 36px;\n  }\n  .category-dropdown-container .category-dropdown .category-item ion-label h3 {\n    font-size: 12px;\n  }\n}\n\n.popover-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  gap: 16px;\n}\n\n.popover-loading ion-spinner {\n  --color: var(--ion-color-primary);\n  transform: scale(1.2);\n}\n\n.popover-loading ion-text {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.items-list {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n}\n\n.item-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 6px !important;\n}\n\n.item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n\n.item-name {\n  font-weight: bold;\n  color: var(--ion-color-dark);\n  font-size: 13px !important;\n  line-height: 1.2 !important;\n  flex: 1;\n  margin: 0;\n  letter-spacing: 0.2px;\n}\n\n.stock-status {\n  flex-shrink: 0;\n}\n\n.stock-status ion-badge {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.stock-status ion-badge[color=danger] {\n  --background: var(--ion-color-danger);\n  --color: white;\n}\n\n.stock-status ion-badge[color=warning] {\n  --background: var(--ion-color-warning);\n  --color: var(--ion-color-warning-contrast);\n}\n\n.stock-status ion-badge[color=success] {\n  --background: var(--ion-color-success);\n  --color: white;\n}\n\n.item-prices {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.price-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n}\n\n.price-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  padding: 6px 8px;\n  border-radius: 6px;\n  background: rgba(0, 0, 0, 0.02);\n  padding: 2px 5px !important;\n}\n\n.price-item.sale-price {\n  background: rgba(var(--ion-color-success-rgb), 0.1);\n}\n\n.price-item.sale-price .price-icon {\n  color: var(--ion-color-success);\n  font-size: 14px;\n}\n\n.price-item.sale-price .price-value {\n  color: var(--ion-color-success);\n  font-weight: 700;\n}\n\n.price-item.sale-price .price-label {\n  color: var(--ion-color-success-shade);\n}\n\n.price-item.purchase-price {\n  background: rgba(var(--ion-color-danger-rgb), 0.1);\n}\n\n.price-item.purchase-price .price-icon {\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.price-item.purchase-price .price-value {\n  color: var(--ion-color-danger);\n  font-weight: 300;\n}\n\n.price-item.purchase-price .price-label {\n  color: var(--ion-color-danger-shade);\n}\n\n.price-icon {\n  font-size: 10px;\n  min-width: 10px;\n}\n\n.price-label {\n  font-size: 8px;\n  font-weight: bold;\n  min-width: 25px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n\n.price-value {\n  font-size: 10px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.stock-info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  padding: 2px 5px !important;\n  background: rgba(var(--ion-color-medium-rgb), 0.1);\n  border-radius: 6px;\n}\n\n.stock-label {\n  font-size: 11px;\n  color: var(--ion-color-medium);\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n\n.stock-value {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n}\n\n.selection-icon {\n  font-size: 20px;\n  animation: checkmark-bounce 0.3s ease;\n}\n\n@keyframes checkmark-bounce {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.no-results {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  gap: 12px;\n  text-align: center;\n}\n\n.no-results ion-icon {\n  font-size: 48px;\n  opacity: 0.5;\n}\n\n.no-results ion-text {\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.navigation-hint {\n  padding: 12px 16px;\n  background: var(--ion-color-light-tint);\n  border-top: 1px solid var(--ion-color-light-shade);\n  text-align: center;\n}\n\n.navigation-hint ion-text {\n  font-size: 11px;\n  color: var(--ion-color-medium);\n  line-height: 1.4;\n}\n\n.popover-item {\n  --inner-margin-top: 8px !important;\n  --inner-padding-top: 8px !important;\n  --inner-padding-bottom: 8px !important;\n}\n\n.popover-item.keyboard-selected {\n  --background: #514e4e !important;\n  --color: white !important;\n  transform: translateX(-4px);\n  box-shadow: 4px 0 12px rgba(74, 74, 74, 0.3);\n  border-left: 4px solid #333333;\n}\n\n.popover-item.keyboard-selected .item-name {\n  color: white !important;\n  font-weight: 700 !important;\n}\n\n.popover-item.keyboard-selected .price-value {\n  color: rgba(255, 255, 255, 0.95) !important;\n  font-weight: 600 !important;\n}\n\n.popover-item.keyboard-selected .price-label, .popover-item.keyboard-selected .stock-label {\n  color: rgba(255, 255, 255, 0.85) !important;\n}\n\n.popover-item.keyboard-selected .price-icon {\n  color: rgba(255, 255, 255, 0.9) !important;\n}\n\n.popover-item.keyboard-selected .stock-value {\n  color: rgba(255, 255, 255, 0.95) !important;\n  font-weight: 600 !important;\n}\n\n.popover-item.keyboard-selected ion-badge {\n  --background: rgba(255, 255, 255, 0.25) !important;\n  --color: white !important;\n  font-weight: 600 !important;\n}\n\n.popover-item.keyboard-selected .price-item.sale-price {\n  background: rgba(255, 255, 255, 0.15) !important;\n}\n\n.popover-item.keyboard-selected .price-item.purchase-price {\n  background: rgba(255, 255, 255, 0.15) !important;\n}\n\n.popover-item.keyboard-selected .stock-info {\n  background: rgba(255, 255, 255, 0.15) !important;\n}\n\n.popover-content {\n  scroll-behavior: smooth;\n}\n\n.popover-content::-webkit-scrollbar {\n  width: 4px;\n}\n\n.popover-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.popover-content::-webkit-scrollbar-thumb {\n  background: var(--ion-color-medium-tint);\n  border-radius: 2px;\n}\n\n.popover-content::-webkit-scrollbar-thumb:hover {\n  background: var(--ion-color-medium);\n}\n\n:host ::ng-deep .item-selector-popover {\n  width: min(280px, 75vw) !important;\n  height: min(320px, 45vh) !important;\n  max-width: 75vw !important;\n  max-height: 45vh !important;\n}\n\n:host ::ng-deep .item-selector-popover .popover-content {\n  max-height: calc(min(320px, 45vh) - 45px) !important;\n}\n\n:host ::ng-deep .item-selector-popover ion-toolbar {\n  min-height: 45px !important;\n}\n\n@supports (padding: 0px) {\n  :host ::ng-deep .item-selector-popover .popover-content {\n    padding-left: max(8px, env(safe-area-inset-left));\n    padding-right: max(8px, env(safe-area-inset-right));\n    padding-bottom: max(8px, env(safe-area-inset-bottom));\n  }\n}\n\n:host ::ng-deep .item-selector-popover {\n  position: absolute !important;\n}\n\n:host ::ng-deep .item-selector-popover.popover-desktop {\n  position: absolute !important;\n  top: auto !important;\n  left: auto !important;\n  transform: none !important;\n}\n\n@media (max-width: 768px) {\n  :host ::ng-deep .item-selector-popover {\n    position: fixed !important;\n    top: 50% !important;\n    left: 50% !important;\n    transform: translate(-50%, -50%) !important;\n  }\n}\n\n.stock-display-container {\n  margin-top: 5px;\n}\n\n.stock-info-single-line {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  gap: 4px;\n  width: 100%;\n  overflow-x: auto;\n}\n\n.stock-info-single-line .stock-section,\n.stock-info-single-line .report-section,\n.stock-info-single-line .price-info-section,\n.stock-info-single-line .action-button-section {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n\n.stock-info-single-line .stock-section .qty-value {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.stock-info-single-line .stock-section .refresh-btn {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  margin: 0;\n  height: 24px;\n  width: 24px;\n}\n\n.stock-info-single-line .stock-section .refresh-btn ion-icon {\n  font-size: 16px;\n}\n\n.stock-info-single-line .report-section ion-button,\n.stock-info-single-line .action-button-section ion-button {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  margin: 0;\n  min-height: 28px;\n}\n\n.stock-info-single-line .report-section ion-button ion-icon,\n.stock-info-single-line .action-button-section ion-button ion-icon {\n  font-size: 16px;\n}\n\n.stock-info-single-line ion-text {\n  font-size: 14px;\n  margin: 0;\n}\n\n.stock-info-single-line ion-label {\n  margin: 0;\n  font-size: 14px;\n}\n\n@media (max-width: 768px) {\n  .stock-info-single-line {\n    gap: 2px;\n    font-size: 12px;\n  }\n  .stock-info-single-line .stock-section,\n.stock-info-single-line .report-section,\n.stock-info-single-line .price-info-section,\n.stock-info-single-line .action-button-section {\n    gap: 2px;\n  }\n  .stock-info-single-line ion-text {\n    font-size: 12px;\n  }\n  .stock-info-single-line ion-label {\n    font-size: 12px;\n  }\n  .stock-info-single-line .report-section ion-button,\n.stock-info-single-line .action-button-section ion-button {\n    --padding-start: 4px;\n    --padding-end: 4px;\n    --padding-top: 2px;\n    --padding-bottom: 2px;\n    min-height: 24px;\n  }\n  .stock-info-single-line .report-section ion-button ion-icon,\n.stock-info-single-line .action-button-section ion-button ion-icon {\n    font-size: 14px;\n  }\n}\n\n:host ::ng-deep .qty-warning-border {\n  border: 2px solid #ff4444 !important;\n  border-radius: 4px !important;\n  box-shadow: 0 0 8px rgba(255, 68, 68, 0.3) !important;\n  animation: warningPulse 0.5s ease-in-out;\n}\n\n@keyframes warningPulse {\n  0% {\n    box-shadow: 0 0 8px rgba(255, 68, 68, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 16px rgba(255, 68, 68, 0.6);\n  }\n  100% {\n    box-shadow: 0 0 8px rgba(255, 68, 68, 0.3);\n  }\n}\n\n:host ::ng-deep ion-item.qty-warning {\n  --border-color: #ff4444 !important;\n  --border-width: 2px !important;\n  --border-style: solid !important;\n}\n\n:host ::ng-deep ion-item.qty-warning ion-input {\n  --border-color: #ff4444 !important;\n  --border-width: 2px !important;\n}\n\n.stock-info-line {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.stock-info-line .price-info-section {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n}\n\n.stock-info-line .action-button-section {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n\n.stock-info-line .details-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n  margin: 0;\n  min-height: 32px;\n  cursor: pointer !important;\n}\n\n.stock-info-line .details-button:hover {\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n  cursor: pointer !important;\n}\n\n.stock-info-line .details-button:active {\n  --background: rgba(var(--ion-color-primary-rgb), 0.2);\n}\n\n.stock-info-line .details-button ion-icon {\n  font-size: 16px;\n  margin-right: 4px;\n}\n\n.stock-info-line ion-button {\n  cursor: pointer !important;\n}\n\n.stock-info-line ion-button:hover {\n  cursor: pointer !important;\n}\n\n.stock-info-line ion-button ion-text, .stock-info-line ion-button ion-icon {\n  cursor: pointer !important;\n  pointer-events: all !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  .search-input-wrapper .item-input {\n    --background: var(--ion-color-step-50);\n    --color: var(--ion-color-dark-contrast);\n    border-color: var(--ion-color-step-200);\n  }\n\n  .dropdown-container {\n    background: var(--ion-color-step-50);\n    border-color: var(--ion-color-step-200);\n  }\n  .dropdown-container .item-dropdown .item-item {\n    --color: var(--ion-color-dark-contrast);\n  }\n  .dropdown-container .item-dropdown .item-item:hover {\n    --background: var(--ion-color-step-100);\n  }\n  .dropdown-container .item-dropdown .item-item ion-label h3 {\n    color: var(--ion-color-dark-contrast);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGlEQUFBO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUFKOztBQUdFO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQURKOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSEY7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFISjs7QUFLSTtFQUNFLGtDQUFBO0FBSE47O0FBT0U7RUFDRSx1Q0FBQTtFQUNBLHFEQUFBO0FBTEo7O0FBUUU7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7QUFOSjs7QUFXQTtFQUNFLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQVJGOztBQVVFO0VBQ0UsZUFBQTtBQVJKOztBQVdFO0VBQ0UsdUNBQUE7RUFDQSxxREFBQTtBQVRKOztBQWNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBWEY7O0FBZUE7RUFDRSx1Q0FBQTtFQUNBLHFEQUFBO0FBWkY7O0FBZUE7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0FBWkY7O0FBY0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVpK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LGVBQUE7RUFDQSxRQUFBO0FBbE9GOztBQW9PRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBbE9KOztBQXFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFuT0o7O0FBc09FO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQXBPSjs7QUFzT0k7RUFDRSxxREFBQTtFQUNBLDBCQUFBO0FBcE9OOztBQXVPSTtFQUNFLHFEQUFBO0FBck9OOztBQXdPSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQXRPTjs7QUEyT0U7RUFDRSwwQkFBQTtBQXpPSjs7QUEyT0k7RUFDRSwwQkFBQTtBQXpPTjs7QUE0T0k7RUFDRSwwQkFBQTtFQUNBLDhCQUFBO0FBMU9OOztBQWdQQTtFQUVJO0lBQ0Usc0NBQUE7SUFDQSx1Q0FBQTtJQUNBLHVDQUFBO0VBOU9KOztFQWtQQTtJQUNFLG9DQUFBO0lBQ0EsdUNBQUE7RUEvT0Y7RUFpUEU7SUFDRSx1Q0FBQTtFQS9PSjtFQWlQSTtJQUNFLHVDQUFBO0VBL09OO0VBa1BJO0lBQ0UscUNBQUE7RUFoUE47QUFDRiIsImZpbGUiOiJpdGVtLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RJbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZlYmVlO1xyXG4gIC0tY29sb3I6ICNjNjI4Mjg7XHJcbn1cclxuXHJcbi5kYXJrbyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIC0tY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5jdXN0X1RvYXN0IHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLS1ib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLy8gTmV3IGxheW91dCBmb3IgbGFiZWwgd2l0aCBidXR0b25zIGluIHRvcCBsZWZ0XHJcbi5sYWJlbC13aXRoLWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgXHJcbiAgLmFjdGlvbi1idXR0b25zLWxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIG9yZGVyOiAxO1xyXG4gIH1cclxuICBcclxuICAuaXRlbS1sYWJlbC1jZW50ZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG9yZGVyOiAyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGVmdCBwb3NpdGlvbmVkIHJlZnJlc2ggYnV0dG9uXHJcbi5pdGVtLXJlZnJlc2gtYnRuLWxlZnQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcclxuICAtLXBhZGRpbmctZW5kOiAzcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICYuc3BpbiB7XHJcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAwLjEpO1xyXG4gIH1cclxuXHJcbiAgJltkaXNhYmxlZF0ge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMZWZ0IHBvc2l0aW9uZWQgYWRkIGl0ZW0gYnV0dG9uXHJcbi5hZGQtaXRlbS1idG4tbGVmdCB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gIC0tcGFkZGluZy1zdGFydDogM3B4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDNweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIFxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiksIDAuMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMZWZ0IHBvc2l0aW9uZWQgbG9hZGluZyBzcGlubmVyXHJcbi5pdGVtLWxvYWRpbmctc3Bpbm5lci1sZWZ0IHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vLyBGaWx0ZXIgQ29udGFpbmVyIGluc2lkZSBEcm9wZG93biBTdHlsZXNcclxuLmRyb3Bkb3duLWZpbHRlci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxufVxyXG5cclxuLmZpbHRlci10b2dnbGUtaGVhZGVyIHtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIFxyXG4gIC5maWx0ZXItdG9nZ2xlLWJ0biB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgLmJ1dHRvbi1pbm5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgICBvcmRlcjogMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBvcmRlcjogMjtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVzdWx0cy1jb3VudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgb3JkZXI6IDM7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlci1idXR0b25zLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuLmZpbHRlci1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDhweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuXHJcbi5maWx0ZXItYnV0dG9uIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogNnB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDZweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIFxyXG4gIC8vIFVuc2VsZWN0ZWQgc3RhdGUgKG91dGxpbmUgd2l0aCBwcmltYXJ5IGNvbG9yKVxyXG4gICZbZmlsbD1cIm91dGxpbmVcIl0ge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gU2VsZWN0ZWQgc3RhdGUgKHNvbGlkIHByaW1hcnkgYmFja2dyb3VuZClcclxuICAmW2ZpbGw9XCJzb2xpZFwiXSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE92ZXJyaWRlIGZvciBkcm9wZG93biBjb250YWluZXIgd2hlbiBmaWx0ZXJzIGFyZSBpbnNpZGVcclxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XHJcbiAgLmRyb3Bkb3duLWZpbHRlci1jb250YWluZXIgKyAuaXRlbS1kcm9wZG93biB7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSXRlbSBTZWxlY3RvciBFbmhhbmNlZCBTdHlsZXMgLSBNYXRjaCBvdGhlciBpbnB1dCBmaWVsZHNcclxuLml0ZW0tc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1cHggMDsgLy8gU2FtZSBhcyBvdGhlciBjdXN0SW5wdXQgZmllbGRzXHJcbiAgXHJcbiAgLy8gSW5wdXQgY29udGFpbmVyIHdyYXBwZXIgZm9yIHByb3BlciBkcm9wZG93biBwb3NpdGlvbmluZ1xyXG4gIC5pbnB1dC1jb250YWluZXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLy8gTWFrZSBpdCBsb29rIGV4YWN0bHkgbGlrZSBvdGhlciBpbnB1dCBmaWVsZHMgKHF1YW50aXR5LCBwYXlfcHJpY2UsIGV0YylcclxuICAuaXRlbS1zZWxlY3Rvci1pbnB1dCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcclxuICAgIC8vIEZpeCB0ZXh0IG92ZXJmbG93IGZvciBsb25nIGl0ZW0gbmFtZXMgLSBtaW5pbWFsIHBhZGRpbmcgdG8gbWF4aW1pemUgdGV4dCBzcGFjZVxyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4OyAvLyBNaW5pbWFsIHBhZGRpbmcgZm9yIHRleHQgc3BhY2VcclxuICAgIC0tcGFkZGluZy1lbmQ6IDQ1cHg7IC8vIFNwYWNlIGZvciBjbGVhciBidXR0b24gb25seSBvbiByaWdodFxyXG4gICAgXHJcbiAgICAvLyBFbmhhbmNlZCB0ZXh0IG92ZXJmbG93IGhhbmRsaW5nIGZvciBsb25nIGl0ZW0gbmFtZXMgLSB0YXJnZXQgYWxsIHBvc3NpYmxlIGlucHV0IGVsZW1lbnRzXHJcbiAgICBpbnB1dCxcclxuICAgIC5uYXRpdmUtaW5wdXQsXHJcbiAgICAuaW5wdXQtd3JhcHBlciBpbnB1dCB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpICFpbXBvcnRhbnQ7IC8vIEFjY291bnQgZm9yIGJ1dHRvbnNcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZWZyZXNoIGJ1dHRvbiBwb3NpdGlvbmVkIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvZiByaWdodCBzaWRlXHJcbiAgLml0ZW0tcmVmcmVzaC1idG4ge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0MHB4OyAvLyBBdCB0aGUgYmVnaW5uaW5nIG9mIHJpZ2h0IHNpZGUsIGJlZm9yZSBjbGVhciBidXR0b25cclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogMTAwMDsgLy8gSGlnaGVyIHotaW5kZXggdG8gZW5zdXJlIHZpc2liaWxpdHlcclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmLnNwaW4ge1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiKSwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBMb2FkaW5nIHNwaW5uZXIgcG9zaXRpb25pbmcgLSByZXBsYWNlIHJlZnJlc2ggYnV0dG9uIHdoZW4gbG9hZGluZ1xyXG4gIC5pdGVtLWxvYWRpbmctc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNDVweDsgLy8gU2FtZSBhcmVhIGFzIHJlZnJlc2ggYnV0dG9uXHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRHJvcGRvd24gY29udGFpbmVyIHN0eWxlc1xyXG4uZHJvcGRvd24tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuXHJcbiAgLmRyb3Bkb3duLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWRyb3Bkb3duIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAuaXRlbS1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgICAgLS1taW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5oaWdobGlnaHRlZCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW0tZGVzYyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW0tcHJpY2VzLWNvbXBhY3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuXHJcbiAgICAgICAgICAucHJpY2Utc2FsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByaWNlLXB1cmNoYXNlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdG9jay1xdHkge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uby1yZXN1bHRzIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcblxyXG4gICAgICBpb24tbGFiZWwgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU3BpbiBhbmltYXRpb24gZm9yIHJlZnJlc2ggYnV0dG9uXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgZm9yIG1vYmlsZVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubGFiZWwtd2l0aC1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICAuYWN0aW9uLWJ1dHRvbnMtbGVmdCB7XHJcbiAgICAgIGdhcDogMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaXRlbS1yZWZyZXNoLWJ0bi1sZWZ0LFxyXG4gICAgLmFkZC1pdGVtLWJ0bi1sZWZ0IHtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAycHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDJweDtcclxuXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1sb2FkaW5nLXNwaW5uZXItbGVmdCB7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pdGVtLWxhYmVsLWNlbnRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gTW9iaWxlIGZpbHRlciBzdHlsZXNcclxuICAuZmlsdGVyLWJ1dHRvbnMge1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXItYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXItdG9nZ2xlLWhlYWRlciAuZmlsdGVyLXRvZ2dsZS1idG4ge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlc3VsdHMtY291bnQge1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgLml0ZW0tc2VsZWN0b3ItaW5wdXQge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDsgLy8gTWluaW1hbCBwYWRkaW5nIHRvIG1heGltaXplIHRleHQgc3BhY2VcclxuICAgICAgLS1wYWRkaW5nLWVuZDogNDBweDsgLy8gU3BhY2UgZm9yIGNsZWFyIGJ1dHRvbiBvbmx5XHJcbiAgICAgIFxyXG4gICAgICAvLyBFbmhhbmNlZCBtb2JpbGUgdGV4dCBvdmVyZmxvd1xyXG4gICAgICBpbnB1dCxcclxuICAgICAgLm5hdGl2ZS1pbnB1dCxcclxuICAgICAgLmlucHV0LXdyYXBwZXIgaW5wdXQge1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNDVweCkgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLXJlZnJlc2gtYnRuIHtcclxuICAgICAgcmlnaHQ6IDM2cHg7IC8vIFBvc2l0aW9uIGJlZm9yZSBjbGVhciBidXR0b24gb24gbW9iaWxlXHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMnB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAycHg7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tbG9hZGluZy1zcGlubmVyIHtcclxuICAgICAgcmlnaHQ6IDQxcHg7IC8vIE1hdGNoIHJlZnJlc2ggYnV0dG9uIHBvc2l0aW9uIG9uIG1vYmlsZVxyXG4gICAgICB3aWR0aDogMTRweDtcclxuICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAuaXRlbS1kcm9wZG93biAuaXRlbS1pdGVtIHtcclxuICAgICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbS1kZXNjIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pdGVtLXByaWNlcy1jb21wYWN0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBmaXggZm9yIGlvbi1pbnB1dCB0ZXh0IG92ZXJmbG93IGluIGl0ZW0gc2VsZWN0b3JcclxuLml0ZW0tc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIC8vIEZvcmNlIHRleHQgb3ZlcmZsb3cgZm9yIGFsbCBuZXN0ZWQgaW5wdXQgZWxlbWVudHNcclxuICAgIC5uYXRpdmUtaW5wdXQsXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBZGRpdGlvbmFsIENTUyB0byBoYW5kbGUgaW9uLWlucHV0IHdyYXBwZXJcclxuICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIGlucHV0IHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdG9jayBpbmZvIHN0eWxlc1xyXG4uc3RvY2staW5mby1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtaW4taGVpZ2h0OiAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0b2NrLWluZm8tbGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAucXR5LXZhbHVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmctdGV4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmVycm9yLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZnJlc2gtYnRuIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXJyb3ItbGluZSB7XHJcbiAgLnJlZnJlc2gtYnRuIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ubmV3LWl0ZW0tYnRuIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi1sYWJlbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG5cclxuICAuYnRuLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDsgLy8gQWRqdXN0IGJhc2VkIG9uIGJ1dHRvbiBzcGFjaW5nXHJcbiAgfVxyXG59XHJcblxyXG4vLyBDYXRlZ29yeSBTZWxlY3RvciBTdHlsZXMgLSBMaWtlIGFjY291bnQtc2VsZWN0b3JcclxuLmNhdGVnb3J5LXNlbGVjdG9yLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgLmNhdGVnb3J5LWlucHV0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIC5jYXRlZ29yeS1pbnB1dCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMzVweDsgLy8gU3BhY2UgZm9yIGRyb3Bkb3duIGljb25cclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMik7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuaGFzLWZvY3VzIHtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXRlZ29yeS1kcm9wZG93bi1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIFxyXG4gICAgICAmLnJvdGF0ZWQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENhdGVnb3J5IERyb3Bkb3duIFN0eWxlcyAtIExpa2UgYWNjb3VudC1zZWxlY3RvclxyXG4uY2F0ZWdvcnktZHJvcGRvd24tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWF4LWhlaWdodDogMTYwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuXHJcbiAgLmNhdGVnb3J5LWRyb3Bkb3duIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAuY2F0ZWdvcnktaXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAgIC0tbWluLWhlaWdodDogNDBweDtcclxuICAgICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaGlnaGxpZ2h0ZWQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBmb3IgY2F0ZWdvcnkgc2VsZWN0b3JcclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmNhdGVnb3J5LXNlbGVjdG9yLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIFxyXG4gICAgLmNhdGVnb3J5LWlucHV0LXdyYXBwZXIge1xyXG4gICAgICAuY2F0ZWdvcnktaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jYXRlZ29yeS1kcm9wZG93bi1pY29uIHtcclxuICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2F0ZWdvcnktZHJvcGRvd24tY29udGFpbmVyIHtcclxuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgXHJcbiAgICAuY2F0ZWdvcnktZHJvcGRvd24gLmNhdGVnb3J5LWl0ZW0ge1xyXG4gICAgICAtLW1pbi1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgIFxyXG4gICAgICBpb24tbGFiZWwgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTG9hZGluZyBzdGF0ZVxyXG4ucG9wb3Zlci1sb2FkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgZ2FwOiAxNnB4O1xyXG5cclxuICBpb24tc3Bpbm5lciB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgfVxyXG5cclxuICBpb24tdGV4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW1zLWxpc3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtaW4taGVpZ2h0OiAwOyAvLyBJbXBvcnRhbnQgZm9yIGZsZXggc2Nyb2xsaW5nXHJcbn1cclxuXHJcbiBcclxuIFxyXG4vLyBJdGVtIGNvbnRlbnQgbGF5b3V0XHJcbi5pdGVtLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuZ2FwOiA2cHggIWltcG9ydGFudDt9XHJcblxyXG4gXHJcbi8vIEl0ZW0gaGVhZGVyIChuYW1lICsgc3RhdHVzKVxyXG4uaXRlbS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gICBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbjogMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbn1cclxuXHJcbi5zdG9jay1zdGF0dXMge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICBpb24tYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHJcbiAgICAmW2NvbG9yPVwiZGFuZ2VyXCJdIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJltjb2xvcj1cIndhcm5pbmdcIl0ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QpO1xyXG4gICAgfVxyXG5cclxuICAgICZbY29sb3I9XCJzdWNjZXNzXCJdIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUHJpY2VzIHNlY3Rpb25cclxuLml0ZW0tcHJpY2VzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5wcmljZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ucHJpY2UtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogNnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICBwYWRkaW5nOiAycHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgJi5zYWxlLXByaWNlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiKSwgMC4xKTtcclxuXHJcbiAgICAucHJpY2UtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJpY2UtdmFsdWUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZS1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnB1cmNoYXNlLXByaWNlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjEpO1xyXG5cclxuICAgIC5wcmljZS1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlLXZhbHVlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZS1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcmljZS1pY29uIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWluLXdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4ucHJpY2UtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1pbi13aWR0aDogMjVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxufVxyXG5cclxuLnByaWNlLXZhbHVlIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8gU3RvY2sgaW5mb1xyXG4uc3RvY2staW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gcGFkZGluZzogMnB4IDVweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLnN0b2NrLWxhYmVsIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG59XHJcblxyXG4uc3RvY2stdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi8vIFNlbGVjdGlvbiBpbmRpY2F0b3JcclxuLnNlbGVjdGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYW5pbWF0aW9uOiBjaGVja21hcmstYm91bmNlIDAuM3MgZWFzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjaGVja21hcmstYm91bmNlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE5vIHJlc3VsdHMgc3RhdGVcclxuLm5vLXJlc3VsdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICBnYXA6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICBpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTmF2aWdhdGlvbiBoaW50XHJcbi5uYXZpZ2F0aW9uLWhpbnQge1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gIH1cclxufVxyXG5cclxuIFxyXG4ucG9wb3Zlci1pdGVtIHtcclxuICAtLWlubmVyLW1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gIC0taW5uZXItcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICYua2V5Ym9hcmQtc2VsZWN0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNTE0ZTRlICFpbXBvcnRhbnQ7ICAvLyBEYXJrIGdyYXkgYmFja2dyb3VuZFxyXG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDRweCAwIDEycHggcmdiYSg3NCwgNzQsIDc0LCAwLjMpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMzMzMzMzOyAgLy8gRGFya2VyIGdyYXkgYm9yZGVyXHJcbiAgICBcclxuICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJpY2UtdmFsdWUge1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcmljZS1sYWJlbCwgLnN0b2NrLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByaWNlLWljb24ge1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdG9jay12YWx1ZSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWJhZGdlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTWFrZSBwcmljZSBpdGVtcyBtb3JlIHZpc2libGUgb24gZGFyayBiYWNrZ3JvdW5kXHJcbiAgICAucHJpY2UtaXRlbSB7XHJcbiAgICAgICYuc2FsZS1wcmljZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLnB1cmNoYXNlLXByaWNlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0b2NrLWluZm8ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTbW9vdGggc2Nyb2xsaW5nXHJcbi5wb3BvdmVyLWNvbnRlbnQge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4vLyBDdXN0b20gc2Nyb2xsYmFyXHJcbi5wb3BvdmVyLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNHB4O1xyXG59XHJcblxyXG4ucG9wb3Zlci1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wb3BvdmVyLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnBvcG92ZXItY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcblxyXG4vLyBBZGQgdGhpcyB0byB5b3VyIGV4aXN0aW5nIFNDU1MgZmlsZVxyXG46aG9zdCA6Om5nLWRlZXAgLml0ZW0tc2VsZWN0b3ItcG9wb3ZlciB7XHJcbiAgd2lkdGg6IG1pbigyODBweCwgNzV2dykgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IG1pbigzMjBweCwgNDV2aCkgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDc1dncgIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiA0NXZoICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgLnBvcG92ZXItY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKG1pbigzMjBweCwgNDV2aCkgLSA0NXB4KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBtaW4taGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gU2FmZSBhcmVhIGFkanVzdG1lbnRzIGZvciBtb2JpbGUgZGV2aWNlc1xyXG5Ac3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5pdGVtLXNlbGVjdG9yLXBvcG92ZXIge1xyXG4gICAgLnBvcG92ZXItY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogbWF4KDhweCwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IG1heCg4cHgsIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IG1heCg4cHgsIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaXRlbS1zZWxlY3Rvci1wb3BvdmVyIHtcclxuICAvLyBFbnN1cmUgcG9wb3ZlciBzdGF5cyBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRyaWdnZXJcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICBcclxuICAvLyBQcmV2ZW50IHBvcG92ZXIgZnJvbSBnb2luZyB0byB0b3Agb2Ygc2NyZWVuXHJcbiAgJi5wb3BvdmVyLWRlc2t0b3Age1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRml4IGZvciBtb2JpbGUgcG9zaXRpb25pbmdcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5pdGVtLXNlbGVjdG9yLXBvcG92ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiBcclxuXHJcbi8vIENTUyBmb3Igc2luZ2xlLWxpbmUgc3RvY2sgZGlzcGxheVxyXG4uc3RvY2stZGlzcGxheS1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnN0b2NrLWluZm8tc2luZ2xlLWxpbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBcclxuICAuc3RvY2stc2VjdGlvbixcclxuICAucmVwb3J0LXNlY3Rpb24sXHJcbiAgLnByaWNlLWluZm8tc2VjdGlvbixcclxuICAuYWN0aW9uLWJ1dHRvbi1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA0cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdG9jay1zZWN0aW9uIHtcclxuICAgIC5xdHktdmFsdWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVmcmVzaC1idG4ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIFxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXBvcnQtc2VjdGlvbixcclxuICAuYWN0aW9uLWJ1dHRvbi1zZWN0aW9uIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogNnB4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtaW4taGVpZ2h0OiAyOHB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBmb3Igc21hbGxlciBzY3JlZW5zXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5zdG9jay1pbmZvLXNpbmdsZS1saW5lIHtcclxuICAgIGdhcDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgXHJcbiAgICAuc3RvY2stc2VjdGlvbixcclxuICAgIC5yZXBvcnQtc2VjdGlvbixcclxuICAgIC5wcmljZS1pbmZvLXNlY3Rpb24sXHJcbiAgICAuYWN0aW9uLWJ1dHRvbi1zZWN0aW9uIHtcclxuICAgICAgZ2FwOiAycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZXBvcnQtc2VjdGlvbixcclxuICAgIC5hY3Rpb24tYnV0dG9uLXNlY3Rpb24ge1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vL1xyXG4vLyBBZGQgdGhpcyBDU1MgZm9yIHRoZSB3YXJuaW5nIGJvcmRlclxyXG46aG9zdCA6Om5nLWRlZXAgLnF0eS13YXJuaW5nLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmNDQ0NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgyNTUsIDY4LCA2OCwgMC4zKSAhaW1wb3J0YW50O1xyXG4gIGFuaW1hdGlvbjogd2FybmluZ1B1bHNlIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd2FybmluZ1B1bHNlIHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMjU1LCA2OCwgNjgsIDAuMyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDI1NSwgNjgsIDY4LCAwLjYpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgyNTUsIDY4LCA2OCwgMC4zKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFsdGVybmF0aXZlIGFwcHJvYWNoIHVzaW5nIENTUyBjbGFzcyBvbiBpb24taXRlbVxyXG46aG9zdCA6Om5nLWRlZXAgaW9uLWl0ZW0ucXR5LXdhcm5pbmcge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjZmY0NDQ0ICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDJweCAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmNDQ0NCAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRml4IGZvciDYqtmB2KfYtdmK2YQg2KfZhNi12YbZgSBidXR0b24gY2xpY2sgYmVoYXZpb3IgYW5kIGxheW91dFxyXG4uc3RvY2staW5mby1saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDhweDtcclxuICBcclxuICAucHJpY2UtaW5mby1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA0cHg7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLWJ1dHRvbi1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDZweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBHZW5lcmljIGJ1dHRvbiBmaXhcclxuICBpb24tYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi10ZXh0LCBpb24taWNvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEYXJrIHRoZW1lIHN1cHBvcnRcclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIC5zZWFyY2gtaW5wdXQtd3JhcHBlciB7XHJcbiAgICAuaXRlbS1pbnB1dCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTApO1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTApO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDApO1xyXG5cclxuICAgIC5pdGVtLWRyb3Bkb3duIC5pdGVtLWl0ZW0ge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1sYWJlbCBoMyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 70373:
/*!*****************************************************************************************************!*\
  !*** ./src/app/component/price-adjustment-dialog/price-adjustment-dialog.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.modern-header ion-toolbar {\n  --background: linear-gradient(45deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n  --color: white;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.modern-header .header-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.modern-header .header-title .title-icon {\n  font-size: 1.4rem;\n}\n\n.modern-header .close-btn {\n  --color: white;\n  --color-hover: rgba(255, 255, 255, 0.8);\n}\n\n.modern-content {\n  --background: #f8f9fa;\n  padding: 16px;\n  padding-bottom: 80px;\n  flex: 1;\n}\n\n.modern-content .adjustment-section,\n.modern-content .summary-section {\n  margin-bottom: 16px;\n  display: block;\n  visibility: visible;\n}\n\n.modern-content .preview-section {\n  margin-bottom: 16px;\n  display: block;\n  visibility: visible;\n}\n\n.modern-content .control-card {\n  background: white;\n  border-radius: 8px;\n  border: 1px solid #ddd;\n  margin-bottom: 16px;\n  padding: 16px;\n}\n\n.modern-content .control-card .card-header {\n  margin-bottom: 16px;\n}\n\n.modern-content .control-card .card-content {\n  display: block;\n}\n\n.modern-content .control-card .section-title {\n  color: var(--ion-color-primary);\n  font-size: 1.1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.modern-content .control-card .section-title ion-icon {\n  font-size: 1.3rem;\n}\n\n.modern-content .control-card .adjustment-type-container {\n  margin-bottom: 20px;\n  display: block;\n}\n\n.modern-content .control-card .adjustment-type-container .modern-segment {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 4px;\n  display: flex;\n  width: 100%;\n}\n\n.modern-content .control-card .adjustment-type-container .modern-segment.segment {\n  display: flex !important;\n  flex-direction: row !important;\n}\n\n.modern-content .control-card .adjustment-type-container .modern-segment .segment-btn {\n  --background-checked: var(--ion-color-primary);\n  --color-checked: white;\n  --border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modern-content .control-card .adjustment-type-container .modern-segment .segment-btn ion-icon {\n  margin-right: 4px;\n}\n\n.modern-content .control-card .adjustment-type-container .modern-segment .segment-btn ion-label {\n  white-space: nowrap;\n}\n\n.modern-content .control-card .value-input-container {\n  margin-bottom: 20px;\n  display: block;\n}\n\n.modern-content .control-card .value-input-container .modern-input {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  margin-bottom: 0;\n}\n\n.modern-content .control-card .value-input-container .modern-input .adjustment-input {\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n\n.modern-content .control-card .quick-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n}\n\n.modern-content .control-card .quick-actions .quick-btn {\n  --border-radius: 20px;\n  height: 36px;\n  min-width: 60px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.modern-content .control-card .quick-actions .quick-btn:hover {\n  transform: translateY(-2px);\n}\n\n.modern-content .summary-card {\n  --background: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n}\n\n.modern-content .summary-card .summary-grid {\n  padding: 0;\n}\n\n.modern-content .summary-card .summary-grid .summary-item {\n  text-align: center;\n  padding: 12px;\n  border-radius: 8px;\n  background: #f8f9fa;\n  margin: 4px;\n}\n\n.modern-content .summary-card .summary-grid .summary-item .summary-label {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n\n.modern-content .summary-card .summary-grid .summary-item .summary-value {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #495057;\n}\n\n.modern-content .summary-card .summary-grid .summary-item .summary-value.primary {\n  color: var(--ion-color-primary);\n}\n\n.modern-content .summary-card .summary-grid .summary-item .summary-value.success {\n  color: var(--ion-color-success);\n}\n\n.modern-content .summary-card .summary-grid .difference-item {\n  text-align: center;\n  padding: 16px;\n  border-radius: 8px;\n  background: linear-gradient(135deg, #f8f9fa, #e9ecef);\n  margin: 8px 4px 4px 4px;\n  border: 2px solid transparent;\n}\n\n.modern-content .summary-card .summary-grid .difference-item .difference-label {\n  font-size: 1rem;\n  color: #495057;\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n\n.modern-content .summary-card .summary-grid .difference-item .difference-value {\n  font-size: 1.6rem;\n  font-weight: 800;\n}\n\n.modern-content .summary-card .summary-grid .difference-item .difference-value.positive {\n  color: var(--ion-color-success);\n}\n\n.modern-content .summary-card .summary-grid .difference-item .difference-value.negative {\n  color: var(--ion-color-danger);\n}\n\n.modern-content .items-card {\n  --background: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n}\n\n.modern-content .items-card .items-container {\n  max-height: 300px;\n  overflow-y: auto;\n  margin-bottom: 10px;\n}\n\n.modern-content .items-card .items-container .item-preview {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n\n.modern-content .items-card .items-container .item-preview.even {\n  background: #f8f9fa;\n}\n\n.modern-content .items-card .items-container .item-preview:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.modern-content .items-card .items-container .item-preview .item-info {\n  flex: 1;\n}\n\n.modern-content .items-card .items-container .item-preview .item-info .item-name {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.modern-content .items-card .items-container .item-preview .item-info .item-name ion-icon {\n  font-size: 1.2rem;\n}\n\n.modern-content .items-card .items-container .item-preview .item-info .item-details {\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n\n.modern-content .items-card .items-container .item-preview .item-info .item-details .quantity {\n  background: var(--ion-color-primary-tint);\n  color: var(--ion-color-primary);\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison {\n  text-align: right;\n  min-width: 140px;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .price-label {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-left: 8px;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .original-price {\n  font-weight: 500;\n  color: #495057;\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .new-price {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .new-price.increased {\n  color: var(--ion-color-success);\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-row .new-price.decreased {\n  color: var(--ion-color-danger);\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-difference {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-difference span.increased {\n  color: var(--ion-color-success);\n}\n\n.modern-content .items-card .items-container .item-preview .price-comparison .price-difference span.decreased {\n  color: var(--ion-color-danger);\n}\n\n.modern-footer {\n  position: relative;\n  margin-top: auto;\n}\n\n.modern-footer ion-toolbar {\n  background: white;\n  padding: 8px 16px;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.modern-footer ion-toolbar .action-buttons {\n  display: flex;\n  gap: 12px;\n}\n\n.modern-footer ion-toolbar .action-buttons .cancel-btn,\n.modern-footer ion-toolbar .action-buttons .apply-btn {\n  flex: 1;\n  height: 48px;\n  font-weight: 600;\n  --border-radius: 12px;\n  transition: all 0.3s ease;\n}\n\n.modern-footer ion-toolbar .action-buttons .cancel-btn:hover,\n.modern-footer ion-toolbar .action-buttons .apply-btn:hover {\n  transform: translateY(-2px);\n}\n\n.modern-footer ion-toolbar .action-buttons .apply-btn {\n  --background: linear-gradient(45deg, var(--ion-color-primary), var(--ion-color-primary-shade));\n  box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n\n.modern-footer ion-toolbar .action-buttons .apply-btn:disabled {\n  --background: #e9ecef;\n  --color: #6c757d;\n  box-shadow: none;\n  transform: none;\n}\n\n@media (max-width: 768px) {\n  .modern-content {\n    padding: 12px;\n  }\n  .modern-content .summary-grid ion-col[size=\"4\"] {\n    size: 12;\n    margin-bottom: 8px;\n  }\n  .modern-content .item-preview {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .modern-content .item-preview .price-comparison {\n    text-align: left;\n    width: 100%;\n  }\n  .modern-content .quick-actions .quick-btn {\n    min-width: 50px;\n    height: 32px;\n    font-size: 0.9rem;\n  }\n\n  .modern-footer .action-buttons {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .modern-footer .action-buttons .cancel-btn,\n.modern-footer .action-buttons .apply-btn {\n    height: 44px;\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.adjustment-section,\n.summary-section,\n.preview-section {\n  animation: slideInUp 0.5s ease-out;\n}\n\n.adjustment-section {\n  animation-delay: 0.1s;\n}\n\n.summary-section {\n  animation-delay: 0.2s;\n}\n\n.preview-section {\n  animation-delay: 0.3s;\n}\n\nion-segment {\n  display: flex !important;\n  flex-direction: row !important;\n  width: 100%;\n}\n\nion-segment-button {\n  flex: 1 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNlLWFkanVzdG1lbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUtFO0VBQ0UsOEZBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7QUFGSjs7QUFLRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSEo7O0FBS0k7RUFDRSxpQkFBQTtBQUhOOztBQU9FO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0FBTEo7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLE9BQUE7QUFQRjs7QUFTRTs7RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFZRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVZKOztBQVlJO0VBQ0UsbUJBQUE7QUFWTjs7QUFhSTtFQUNFLGNBQUE7QUFYTjs7QUFjSTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQVpOOztBQWNNO0VBQ0UsaUJBQUE7QUFaUjs7QUFnQkk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFkTjs7QUFnQk07RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBZFI7O0FBaUJRO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtBQWZWOztBQWtCUTtFQUNFLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFoQlY7O0FBa0JVO0VBQ0Us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QW1FSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBakVOOztBQW1FTTs7RUFFRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQWpFUjs7QUFtRVE7O0VBQ0UsMkJBQUE7QUFoRVY7O0FBb0VNO0VBQ0UsOEZBQUE7RUFDQSw4REFBQTtBQWxFUjs7QUFvRVE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBbEVWOztBQTBFQTtFQUNFO0lBQ0UsYUFBQTtFQXZFRjtFQTBFSTtJQUNFLFFBQUE7SUFDQSxrQkFBQTtFQXhFTjtFQTRFRTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0VBMUVKO0VBNEVJO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VBMUVOO0VBK0VJO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQTdFTjs7RUFtRkU7SUFDRSxzQkFBQTtJQUNBLFFBQUE7RUFoRko7RUFrRkk7O0lBRUUsWUFBQTtFQWhGTjtBQUNGOztBQXNGQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBcEZGO0VBc0ZBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBcEZGO0FBQ0Y7O0FBdUZBOzs7RUFHRSxrQ0FBQTtBQXJGRjs7QUF3RkE7RUFDRSxxQkFBQTtBQXJGRjs7QUF3RkE7RUFDRSxxQkFBQTtBQXJGRjs7QUF3RkE7RUFDRSxxQkFBQTtBQXJGRjs7QUF5RkE7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQXRGRjs7QUF5RkE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQXRGRiIsImZpbGUiOiJwcmljZS1hZGp1c3RtZW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1haW4gY29udGFpbmVyXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLy8gTW9kZXJuIGhlYWRlciBzdHlsaW5nXG4ubW9kZXJuLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSkpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cbiAgLmhlYWRlci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAudGl0bGUtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWNvbG9yLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIH1cbn1cblxuLy8gTW9kZXJuIGNvbnRlbnQgc3R5bGluZ1xuLm1vZGVybi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDsgLy8gQWRkIGJvdHRvbSBwYWRkaW5nIHRvIHByZXZlbnQgZm9vdGVyIG92ZXJsYXBcbiAgZmxleDogMTsgLy8gVGFrZSByZW1haW5pbmcgc3BhY2VcblxuICAuYWRqdXN0bWVudC1zZWN0aW9uLFxuICAuc3VtbWFyeS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAucHJldmlldy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAvLyBDb250cm9sIGNhcmQgc3R5bGluZ1xuICAuY29udHJvbC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hZGp1c3RtZW50LXR5cGUtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgLm1vZGVybi1zZWdtZW50IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBcbiAgICAgICAgLy8gRW5zdXJlIGlvbi1zZWdtZW50IGRpc3BsYXlzIGFzIGZsZXggcm93XG4gICAgICAgICYuc2VnbWVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWdtZW50LWJ0biB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC52YWx1ZS1pbnB1dC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAubW9kZXJuLWlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAuYWRqdXN0bWVudC1pbnB1dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5xdWljay1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAucXVpY2stYnRuIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdW1tYXJ5IGNhcmQgc3R5bGluZ1xuICAuc3VtbWFyeS1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG5cbiAgICAuc3VtbWFyeS1ncmlkIHtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIC5zdW1tYXJ5LWl0ZW0ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG5cbiAgICAgICAgLnN1bW1hcnktbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1bW1hcnktdmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XG5cbiAgICAgICAgICAmLnByaW1hcnkge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnN1Y2Nlc3Mge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRpZmZlcmVuY2UtaXRlbSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjZTllY2VmKTtcbiAgICAgICAgbWFyZ2luOiA4cHggNHB4IDRweCA0cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC5kaWZmZXJlbmNlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGlmZmVyZW5jZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcblxuICAgICAgICAgICYucG9zaXRpdmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLm5lZ2F0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJdGVtcyBwcmV2aWV3IHN0eWxpbmdcbiAgLml0ZW1zLWNhcmQge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblxuICAgIC5pdGVtcy1jb250YWluZXIge1xuICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgLml0ZW0tcHJldmlldyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG5cbiAgICAgICAgJi5ldmVuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1pbmZvIHtcbiAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLml0ZW0tZGV0YWlscyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuXG4gICAgICAgICAgICAucXVhbnRpdHkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJpY2UtY29tcGFyaXNvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcblxuICAgICAgICAgIC5wcmljZS1yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG5cbiAgICAgICAgICAgIC5wcmljZS1sYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9yaWdpbmFsLXByaWNlIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXctcHJpY2Uge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcblxuICAgICAgICAgICAgICAmLmluY3JlYXNlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuZGVjcmVhc2VkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJpY2UtZGlmZmVyZW5jZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICYuaW5jcmVhc2VkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5kZWNyZWFzZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBNb2Rlcm4gZm9vdGVyIHN0eWxpbmdcbi5tb2Rlcm4tZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiBhdXRvOyAvLyBQdXNoIGZvb3RlciB0byBib3R0b21cbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3gtc2hhZG93OiAwIC0ycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLy8gQWRkIHNoYWRvdyBmb3Igc2VwYXJhdGlvblxuXG4gICAgLmFjdGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEycHg7XG5cbiAgICAgIC5jYW5jZWwtYnRuLFxuICAgICAgLmFwcGx5LWJ0biB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYXBwbHktYnRuIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMyk7XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZTllY2VmO1xuICAgICAgICAgIC0tY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kZXJuLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEycHg7XG5cbiAgICAuc3VtbWFyeS1ncmlkIHtcbiAgICAgIGlvbi1jb2xbc2l6ZT1cIjRcIl0ge1xuICAgICAgICBzaXplOiAxMjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLXByZXZpZXcge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAucHJpY2UtY29tcGFyaXNvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5xdWljay1hY3Rpb25zIHtcbiAgICAgIC5xdWljay1idG4ge1xuICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1vZGVybi1mb290ZXIge1xuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIC5jYW5jZWwtYnRuLFxuICAgICAgLmFwcGx5LWJ0biB7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uIGNsYXNzZXNcbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi5hZGp1c3RtZW50LXNlY3Rpb24sXG4uc3VtbWFyeS1zZWN0aW9uLFxuLnByZXZpZXctc2VjdGlvbiB7XG4gIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi5hZGp1c3RtZW50LXNlY3Rpb24ge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi5zdW1tYXJ5LXNlY3Rpb24ge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5wcmV2aWV3LXNlY3Rpb24ge1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi8vIEFkZGl0aW9uYWwgaW9uLXNlZ21lbnQgc3R5bGluZyB0byBlbnN1cmUgaG9yaXpvbnRhbCBsYXlvdXRcbmlvbi1zZWdtZW50IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBmbGV4OiAxICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 69834:
/*!****************************************************************************************!*\
  !*** ./src/app/components/account-selector/account-selector.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".custInput {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin: 5px 0;\n}\n\n.account-selector-container {\n  position: relative;\n  width: 100%;\n  margin-bottom: 8px;\n}\n\n.account-selector-container .header-container {\n  margin-bottom: 8px;\n}\n\n.account-selector-container .header-container .label-with-buttons-container {\n  direction: ltr;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  text-align: right;\n}\n\n.account-selector-container .header-container .label-with-buttons-container .action-buttons-left {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  order: 1;\n}\n\n.account-selector-container .header-container .label-with-buttons-container ion-label {\n  flex: 1;\n  text-align: right;\n  order: 2;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.account-selector-container .account-refresh-btn-left {\n  --color: var(--ion-color-primary);\n  --padding-start: 3px;\n  --padding-end: 3px;\n  height: 32px;\n  width: 32px;\n  margin: 0;\n}\n\n.account-selector-container .account-refresh-btn-left ion-icon {\n  font-size: 18px;\n  transition: transform 0.3s ease;\n}\n\n.account-selector-container .account-refresh-btn-left ion-icon.spin {\n  animation: spin 1s linear infinite;\n}\n\n.account-selector-container .account-refresh-btn-left:hover {\n  --color: var(--ion-color-primary-shade);\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.account-selector-container .account-refresh-btn-left[disabled] {\n  --color: var(--ion-color-medium);\n  opacity: 0.5;\n}\n\n.account-selector-container .add-account-btn-left {\n  --color: var(--ion-color-primary);\n  --padding-start: 3px;\n  --padding-end: 3px;\n  height: 32px;\n  width: 32px;\n  margin: 0;\n}\n\n.account-selector-container .add-account-btn-left ion-icon {\n  font-size: 18px;\n}\n\n.account-selector-container .add-account-btn-left:hover {\n  --color: var(--ion-color-primary-shade);\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.account-selector-container .add-account-btn-left[disabled] {\n  --color: var(--ion-color-medium);\n  opacity: 0.5;\n}\n\n.account-selector-container .account-loading-spinner-left {\n  width: 18px;\n  height: 18px;\n  margin: 0;\n}\n\n.account-selector-container .input-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n}\n\n.account-selector-container .input-container .account-selector-wrapper {\n  width: 100%;\n  margin: 5px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.account-selector-container .input-container .account-selector-wrapper .input-container-wrapper {\n  position: relative;\n  width: 100%;\n}\n\n.account-selector-container .input-container .account-selector-wrapper .account-input {\n  --background: transparent;\n  --color: var(--ion-color-dark);\n  --placeholder-color: var(--ion-color-medium);\n  width: 100%;\n  direction: rtl;\n  text-align: right;\n  --padding-start: 12px;\n  --padding-end: 45px;\n}\n\n.account-selector-container .input-container .account-selector-wrapper .account-input[disabled] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-medium);\n  cursor: not-allowed;\n}\n\n.account-selector-container .dropdown-container {\n  position: fixed;\n  z-index: 10000;\n  background: white;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  max-height: 200px;\n  overflow-y: auto;\n  margin-top: 4px;\n  min-width: 250px;\n}\n\n.account-selector-container .dropdown-container .account-dropdown {\n  margin: 0;\n  padding: 0;\n  background: transparent;\n}\n\n.account-selector-container .dropdown-container .account-dropdown .account-item {\n  --background: transparent;\n  --border-color: transparent;\n  --color: var(--ion-color-dark);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 48px;\n  direction: rtl;\n  text-align: right;\n}\n\n.account-selector-container .dropdown-container .account-dropdown .account-item:hover {\n  --background: var(--ion-color-light);\n}\n\n.account-selector-container .dropdown-container .account-dropdown .account-item:active {\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.account-selector-container .dropdown-container .account-dropdown .account-item.highlighted {\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-left: 3px solid var(--ion-color-primary);\n}\n\n.account-selector-container .dropdown-container .account-dropdown .account-item ion-label {\n  margin: 0;\n}\n\n.account-selector-container .dropdown-container .account-dropdown .account-item ion-label h3 {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin: 0;\n}\n\n.account-selector-container .dropdown-container .account-dropdown .account-item ion-label .account-code {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  margin: 2px 0 0 0;\n}\n\n.account-selector-container .dropdown-container .account-dropdown .no-results {\n  --color: var(--ion-color-medium);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  text-align: center;\n  font-style: italic;\n}\n\n.account-selector-container .dropdown-container .account-dropdown .no-results ion-label p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.account-selector-container .balance-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 8px 12px;\n  background: var(--ion-color-light-tint);\n  border-radius: 6px;\n  direction: rtl;\n}\n\n.account-selector-container .balance-container .balance-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.account-selector-container .balance-container .balance-loading {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.account-selector-container .balance-container .balance-loading ion-spinner {\n  width: 14px;\n  height: 14px;\n}\n\n.account-selector-container .balance-container .balance-loading span {\n  font-size: 12px;\n  color: var(--ion-color-primary);\n}\n\n.account-selector-container .balance-container .balance-amount {\n  font-size: 13px;\n  font-weight: 600;\n  flex: 1;\n}\n\n.account-selector-container .balance-container .balance-error {\n  font-size: 12px;\n  color: var(--ion-color-danger);\n  font-style: italic;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 768px) {\n  .account-selector-container .header-container .label-with-buttons-container .action-buttons-left {\n    gap: 2px;\n  }\n  .account-selector-container .header-container .label-with-buttons-container ion-label {\n    font-size: 13px;\n  }\n  .account-selector-container .header-container .label-with-buttons-container .account-refresh-btn-left,\n.account-selector-container .header-container .label-with-buttons-container .add-account-btn-left {\n    height: 28px;\n    width: 28px;\n    --padding-start: 2px;\n    --padding-end: 2px;\n  }\n  .account-selector-container .header-container .label-with-buttons-container .account-refresh-btn-left ion-icon,\n.account-selector-container .header-container .label-with-buttons-container .add-account-btn-left ion-icon {\n    font-size: 16px;\n  }\n  .account-selector-container .header-container .label-with-buttons-container .account-loading-spinner-left {\n    width: 16px;\n    height: 16px;\n  }\n  .account-selector-container .input-container .account-selector-wrapper .account-input {\n    font-size: 13px;\n    --padding-start: 10px;\n    --padding-end: 40px;\n  }\n  .account-selector-container .dropdown-container {\n    max-height: 160px;\n  }\n  .account-selector-container .dropdown-container .account-dropdown .account-item {\n    --min-height: 44px;\n  }\n  .account-selector-container .dropdown-container .account-dropdown .account-item ion-label h3 {\n    font-size: 13px;\n  }\n  .account-selector-container .dropdown-container .account-dropdown .account-item ion-label .account-code {\n    font-size: 11px;\n  }\n  .account-selector-container .balance-container {\n    padding: 6px 10px;\n  }\n  .account-selector-container .balance-container .balance-label {\n    font-size: 11px;\n  }\n  .account-selector-container .balance-container .balance-amount {\n    font-size: 12px;\n  }\n  .account-selector-container .balance-container .balance-loading span {\n    font-size: 11px;\n  }\n  .account-selector-container .balance-container .balance-error {\n    font-size: 11px;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .account-selector-container .field-label {\n    color: var(--ion-color-dark-contrast);\n  }\n  .account-selector-container .input-container .search-input-wrapper .account-input {\n    --background: var(--ion-color-step-50);\n    --color: var(--ion-color-dark-contrast);\n    border-color: var(--ion-color-step-200);\n  }\n  .account-selector-container .dropdown-container {\n    background: var(--ion-color-step-50);\n    border-color: var(--ion-color-step-200);\n  }\n  .account-selector-container .dropdown-container .account-dropdown .account-item {\n    --color: var(--ion-color-dark-contrast);\n  }\n  .account-selector-container .dropdown-container .account-dropdown .account-item:hover {\n    --background: var(--ion-color-step-100);\n  }\n  .account-selector-container .dropdown-container .account-dropdown .account-item ion-label h3 {\n    color: var(--ion-color-dark-contrast);\n  }\n  .account-selector-container .balance-container {\n    background: var(--ion-color-step-100);\n  }\n  .account-selector-container .balance-container .balance-label {\n    color: var(--ion-color-dark-contrast);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0k7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRE47O0FBR007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQURSOztBQUlNO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBRlI7O0FBUUU7RUFDRSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFOSjs7QUFRSTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQU5OOztBQVFNO0VBQ0Usa0NBQUE7QUFOUjs7QUFVSTtFQUNFLHVDQUFBO0VBQ0EscURBQUE7QUFSTjs7QUFXSTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQVROOztBQWNFO0VBQ0UsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBWko7O0FBY0k7RUFDRSxlQUFBO0FBWk47O0FBZUk7RUFDRSx1Q0FBQTtFQUNBLHFEQUFBO0FBYk47O0FBZ0JJO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0FBZE47O0FBbUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBakJKOztBQW9CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQWxCSjs7QUFxQkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFuQk47O0FB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LXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWRkIGN1c3RJbnB1dCBjbGFzcyBzdHlsaW5nIHRvIG1hdGNoIGl0ZW0tc2VsZWN0b3Jcbi5jdXN0SW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5hY2NvdW50LXNlbGVjdG9yLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgLy8gTmV3IGxheW91dCBmb3IgbGFiZWwgd2l0aCBidXR0b25zIGluIHRvcCBsZWZ0IC0gTWF0Y2ggaXRlbS1zZWxlY3RvclxuICAgIC5sYWJlbC13aXRoLWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBcbiAgICAgIC5hY3Rpb24tYnV0dG9ucy1sZWZ0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBMZWZ0IHBvc2l0aW9uZWQgcmVmcmVzaCBidXR0b24gLSBNYXRjaCBpdGVtLXNlbGVjdG9yXG4gIC5hY2NvdW50LXJlZnJlc2gtYnRuLWxlZnQge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAzcHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuXG4gICAgICAmLnNwaW4ge1xuICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG5cbiAgLy8gTGVmdCBwb3NpdGlvbmVkIGFkZCBhY2NvdW50IGJ1dHRvbiAtIE1hdGNoIGl0ZW0tc2VsZWN0b3JcbiAgLmFkZC1hY2NvdW50LWJ0bi1sZWZ0IHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogM3B4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG5cbiAgLy8gTGVmdCBwb3NpdGlvbmVkIGxvYWRpbmcgc3Bpbm5lciAtIE1hdGNoIGl0ZW0tc2VsZWN0b3JcbiAgLmFjY291bnQtbG9hZGluZy1zcGlubmVyLWxlZnQge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gQWNjb3VudCBTZWxlY3RvciBFbmhhbmNlZCBTdHlsZXMgLSBNYXRjaCBpdGVtLXNlbGVjdG9yXG4gICAgLmFjY291bnQtc2VsZWN0b3Itd3JhcHBlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogNXB4IDA7IC8vIFNhbWUgYXMgb3RoZXIgY3VzdElucHV0IGZpZWxkc1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIFxuICAgICAgLy8gSW5wdXQgY29udGFpbmVyIHdyYXBwZXIgZm9yIHByb3BlciBkcm9wZG93biBwb3NpdGlvbmluZ1xuICAgICAgLmlucHV0LWNvbnRhaW5lci13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gTWFrZSBpdCBsb29rIGV4YWN0bHkgbGlrZSBvdGhlciBpbnB1dCBmaWVsZHMgKHF1YW50aXR5LCBwYXlfcHJpY2UsIGV0YylcbiAgICAgIC5hY2NvdW50LWlucHV0IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgXG4gICAgICAgIC8vIE5vcm1hbCBwYWRkaW5nIHNpbmNlIG5vIGJ1dHRvbnMgYXJlIG92ZXIgdGhlIGlucHV0IG5vd1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDQ1cHg7IC8vIFNwYWNlIGZvciBjbGVhciBidXR0b25cbiAgICAgICAgXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kcm9wZG93bi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuXG4gICAgLmFjY291bnQtZHJvcGRvd24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAuYWNjb3VudC1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiA0OHB4O1xuICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5oaWdobGlnaHRlZCB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hY2NvdW50LWNvZGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgbWFyZ2luOiAycHggMCAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5uby1yZXN1bHRzIHtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgICAgICAgaW9uLWxhYmVsIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYmFsYW5jZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXJlY3Rpb246IHJ0bDtcblxuICAgIC5iYWxhbmNlLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cblxuICAgIC5iYWxhbmNlLWxvYWRpbmcge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcblxuICAgICAgaW9uLXNwaW5uZXIge1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5iYWxhbmNlLWFtb3VudCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuYmFsYW5jZS1lcnJvciB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICB9XG5cbn1cblxuLy8gU3BpbiBhbmltYXRpb24gZm9yIHJlZnJlc2ggYnV0dG9uXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFjY291bnQtc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAubGFiZWwtd2l0aC1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICAgIC5hY3Rpb24tYnV0dG9ucy1sZWZ0IHtcbiAgICAgICAgICBnYXA6IDJweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5hY2NvdW50LXJlZnJlc2gtYnRuLWxlZnQsXG4gICAgICAgIC5hZGQtYWNjb3VudC1idG4tbGVmdCB7XG4gICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMnB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDJweDtcblxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWNjb3VudC1sb2FkaW5nLXNwaW5uZXItbGVmdCB7XG4gICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAuYWNjb3VudC1zZWxlY3Rvci13cmFwcGVyIHtcbiAgICAgICAgLmFjY291bnQtaW5wdXQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogNDBweDsgLy8gU3BhY2UgZm9yIGNsZWFyIGJ1dHRvbiBvbmx5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24tY29udGFpbmVyIHtcbiAgICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xuXG4gICAgICAuYWNjb3VudC1kcm9wZG93biAuYWNjb3VudC1pdGVtIHtcbiAgICAgICAgLS1taW4taGVpZ2h0OiA0NHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hY2NvdW50LWNvZGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5iYWxhbmNlLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiA2cHggMTBweDtcblxuICAgICAgLmJhbGFuY2UtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICB9XG5cbiAgICAgIC5iYWxhbmNlLWFtb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLmJhbGFuY2UtbG9hZGluZyBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgfVxuXG4gICAgICAuYmFsYW5jZS1lcnJvciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gRGFyayB0aGVtZSBzdXBwb3J0XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC5hY2NvdW50LXNlbGVjdG9yLWNvbnRhaW5lciB7XG4gICAgLmZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLmlucHV0LWNvbnRhaW5lciAuc2VhcmNoLWlucHV0LXdyYXBwZXIgLmFjY291bnQtaW5wdXQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC01MCk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCk7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC01MCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCk7XG5cbiAgICAgIC5hY2NvdW50LWRyb3Bkb3duIC5hY2NvdW50LWl0ZW0ge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIGgzIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJhbGFuY2UtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG5cbiAgICAgIC5iYWxhbmNlLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 46625:
/*!***********************************************************************************!*\
  !*** ./src/app/component/action-popover/action-popover.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-list class=\"action-popover-list\">\n  <ion-item button (click)=\"selectAction('print')\" class=\"action-item\">\n    <ion-icon name=\"print-outline\" slot=\"start\" class=\"action-icon\"></ion-icon>\n    <ion-label>طباعة</ion-label>\n  </ion-item>\n  \n  <ion-item button (click)=\"selectAction('edit')\" class=\"action-item\">\n    <ion-icon name=\"create-outline\" slot=\"start\" class=\"action-icon\"></ion-icon>\n    <ion-label>تعديل</ion-label>\n  </ion-item>\n  \n  <ion-item button (click)=\"selectAction('copySales')\" class=\"action-item\">\n    <ion-icon name=\"copy-outline\" slot=\"start\" class=\"action-icon\"></ion-icon>\n    <ion-label>نسخ كفاتورة مبيعات</ion-label>\n  </ion-item>\n  \n  <ion-item button (click)=\"selectAction('copyPurchase')\" class=\"action-item\">\n    <ion-icon name=\"copy-outline\" slot=\"start\" class=\"action-icon\"></ion-icon>\n    <ion-label>نسخ كفاتورة مشتريات</ion-label>\n  </ion-item>\n</ion-list>\n";

/***/ }),

/***/ 90559:
/*!*************************************************************************************************************!*\
  !*** ./src/app/component/invoice-price-config-dialog/invoice-price-config-dialog.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"modern-header\" dir=\"rtl\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"header-title\">\n      <ion-icon name=\"copy\" class=\"title-icon\"></ion-icon>\n      ضبط أسعار الفاتورة المنسوخة\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\" fill=\"clear\" class=\"close-btn\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\" dir=\"rtl\">\n  <!-- Sales Price Configuration -->\n  <div class=\"configuration-section\" *ngIf=\"invoiceType === 'sales'\">\n    <div class=\"control-card\">\n      <div class=\"card-header\">\n        <h3 class=\"section-title\">\n          <ion-icon name=\"storefront\" color=\"primary\"></ion-icon>\n          ضبط أسعار فاتورة البيع\n        </h3>\n        <p class=\"section-description\">\n          اختر كيف تريد تحديد أسعار البيع في الفاتورة الجديدة\n        </p>\n      </div>\n      <div class=\"card-content\">\n        <!-- Sales Price Options -->\n        <ion-radio-group [(ngModel)]=\"salesPriceOption\" (ionChange)=\"onSalesPriceOptionChange()\">\n          <div class=\"option-item default-option\">\n            <ion-item class=\"option-radio\">\n              <ion-radio slot=\"start\" value=\"use_perch_price\"></ion-radio>\n              <ion-label>\n                <h3>استخدام أسعار الشراء كأسعار بيع</h3>\n                <p>نسخ أسعار الشراء من الأصناف لتصبح أسعار البيع في الفاتورة الجديدة</p>\n                <ion-chip color=\"success\" class=\"default-chip\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                  <ion-label>الخيار الافتراضي</ion-label>\n                </ion-chip>\n              </ion-label>\n            </ion-item>\n          </div>\n          \n          <div class=\"option-item\">\n            <ion-item class=\"option-radio\">\n              <ion-radio slot=\"start\" value=\"keep_original\"></ion-radio>\n              <ion-label>\n                <h3>الاحتفاظ بالأسعار  الشراء في الفاتورة القديمة</h3>\n                <p>استخدام  أسعار البيع الإفتراضية للأصناف</p>\n              </ion-label>\n            </ion-item>\n          </div>\n        </ion-radio-group>\n      </div>\n    </div>\n  </div>\n\n  <!-- Purchase Price Configuration -->\n  <div class=\"configuration-section\" *ngIf=\"invoiceType === 'purchase'\">\n    <div class=\"control-card\">\n      <div class=\"card-header\">\n        <h3 class=\"section-title\">\n          <ion-icon name=\"bag\" color=\"primary\"></ion-icon>\n          ضبط أسعار فاتورة الشراء\n        </h3>\n        <p class=\"section-description\">\n          اختر كيف تريد تحديد أسعار الشراء في الفاتورة الجديدة\n        </p>\n      </div>\n      <div class=\"card-content\">\n        <!-- Purchase Price Options -->\n        <ion-radio-group [(ngModel)]=\"purchasePriceOption\" (ionChange)=\"onPurchasePriceOptionChange()\">\n          <div class=\"option-item default-option\">\n            <ion-item class=\"option-radio\">\n              <ion-radio slot=\"start\" value=\"pay_price_as_perch_price\"></ion-radio>\n              <ion-label>\n                <h3>استخدام سعر البيع كسعر شراء</h3>\n                <p>تحويل سعر البيع الحالي ليصبح سعر الشراء في الفاتورة الجديدة</p>\n                <ion-chip color=\"success\" class=\"default-chip\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                  <ion-label>الخيار الافتراضي</ion-label>\n                </ion-chip>\n              </ion-label>\n            </ion-item>\n          </div>\n          \n          <div class=\"option-item\">\n            <ion-item class=\"option-radio\">\n              <ion-radio slot=\"start\" value=\"keep_pay_price\"></ion-radio>\n              <ion-label>\n                <h3>الاحتفاظ بسعر البيع الحالي في الفاتورة القديمة</h3>\n                <p>استخدام سعر البيع الحالي في الفاتورة الجديدة مع الاحتفاظ بسعر الشراء الأصلي</p>\n              </ion-label>\n            </ion-item>\n          </div>\n          \n          <div class=\"option-item\" *ngIf=\"context !== 'sales-record'\">\n            <ion-item class=\"option-radio\">\n              <ion-radio slot=\"start\" value=\"set_custom\"></ion-radio>\n              <ion-label>\n                <h3>تحديد أسعار مخصصة</h3>\n                <p>تحديد سعر شراء جديد واختيار السعر المرجعي من الفاتورة القديمة</p>\n              </ion-label>\n            </ion-item>\n          </div>\n          \n          <div class=\"option-item\" *ngIf=\"context !== 'sales-record'\">\n            <ion-item class=\"option-radio\">\n              <ion-radio slot=\"start\" value=\"keep_original\"></ion-radio>\n              <ion-label>\n                <h3>الاحتفاظ بالأسعار الأصلية</h3>\n                <p>استخدام نفس الأسعار الموجودة في الفاتورة الأصلية</p>\n              </ion-label>\n            </ion-item>\n          </div>\n        </ion-radio-group>\n\n        <!-- Custom Purchase Price Settings -->\n        <div class=\"custom-settings\" *ngIf=\"purchasePriceOption === 'set_custom' && context !== 'sales-record'\">\n          <div class=\"custom-price-input\">\n            <ion-item fill=\"outline\">\n              <ion-label position=\"stacked\">سعر الشراء الجديد</ion-label>\n              <ion-input\n                type=\"number\"\n                [(ngModel)]=\"customPerchPrice\"\n                (ngModelChange)=\"onCustomPerchPriceChange()\"\n                placeholder=\"أدخل سعر الشراء الجديد\"\n                class=\"price-input\"\n              ></ion-input>\n              <ion-icon name=\"pricetag\" slot=\"end\" color=\"primary\"></ion-icon>\n            </ion-item>\n          </div>\n\n          <div class=\"source-price-selection\">\n            <ion-label class=\"selection-label\">اختر السعر المرجعي من الفاتورة القديمة:</ion-label>\n            <ion-segment [(ngModel)]=\"purchaseSourcePrice\" (ionChange)=\"onPurchaseSourcePriceChange()\" class=\"modern-segment\">\n              <ion-segment-button value=\"perch_price\" class=\"segment-btn\">\n                <ion-icon name=\"cube\"></ion-icon>\n                <ion-label>سعر الشراء</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"pay_price\" class=\"segment-btn\">\n                <ion-icon name=\"storefront\"></ion-icon>\n                <ion-label>سعر البيع</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Summary Section -->\n  <div class=\"summary-section\">\n    <ion-card class=\"summary-card\">\n      <ion-card-header>\n        <ion-card-title class=\"section-title\">\n          <ion-icon name=\"calculator\" color=\"success\"></ion-icon>\n          ملخص الضبط\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid class=\"summary-grid\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"summary-item\">\n                <div class=\"summary-label\">عدد الأصناف</div>\n                <div class=\"summary-value primary\">{{ previewItems.length }}</div>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"summary-item\">\n                <div class=\"summary-label\">الإجمالي الجديد</div>\n                <div class=\"summary-value success\">{{ (getTotalNew() || 0).toFixed(2) }}</div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Items Preview Section -->\n  <div class=\"preview-section\" *ngIf=\"previewItems && previewItems.length > 0\">\n    <ion-card class=\"items-card\">\n      <ion-card-header>\n        <ion-card-title class=\"section-title\">\n          <ion-icon name=\"eye\" color=\"tertiary\"></ion-icon>\n          معاينة الأصناف بعد الضبط ({{ previewItems.length }})\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"items-container\">\n          <div \n            *ngFor=\"let item of previewItems; let i = index\" \n            class=\"item-preview\"\n            [class.even]=\"i % 2 === 0\"\n          >\n            <div class=\"item-info\">\n              <div class=\"item-name\">\n                <ion-icon name=\"cube\" color=\"primary\"></ion-icon>\n                {{ item.item_name }}\n              </div>\n              <div class=\"item-details\">\n                <span class=\"quantity\">الكمية: {{ item.quantity }}</span>\n              </div>\n            </div>\n            <div class=\"price-comparison\">\n              <div class=\"price-row\">\n                <span class=\"price-label\">{{ invoiceType === 'sales' ? 'سعر البيع الحالي:' : 'سعر الشراء الحالي:' }}</span>\n                <span class=\"original-price\">{{ getItemOriginalPrice(item).toFixed(2) }}</span>\n              </div>\n              <div class=\"price-row\">\n                <span class=\"price-label\">{{ invoiceType === 'sales' ? 'سعر البيع الجديد:' : 'سعر الشراء الجديد:' }}</span>\n                <span \n                  class=\"new-price\"\n                  [class.increased]=\"getItemNewPrice(item) > getItemOriginalPrice(item)\"\n                  [class.decreased]=\"getItemNewPrice(item) < getItemOriginalPrice(item)\"\n                >\n                  {{ getItemNewPrice(item).toFixed(2) }}\n                </span>\n              </div>\n              <div class=\"price-difference\" *ngIf=\"getItemNewPrice(item) !== getItemOriginalPrice(item)\">\n                <ion-icon \n                  [name]=\"getItemNewPrice(item) > getItemOriginalPrice(item) ? 'trending-up' : 'trending-down'\"\n                  [color]=\"getItemNewPrice(item) > getItemOriginalPrice(item) ? 'success' : 'danger'\"\n                ></ion-icon>\n                <span \n                  [class.increased]=\"getItemNewPrice(item) > getItemOriginalPrice(item)\"\n                  [class.decreased]=\"getItemNewPrice(item) < getItemOriginalPrice(item)\"\n                >\n                  {{ getItemPriceDifference(item).toFixed(2) }}\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer class=\"modern-footer\">\n  <ion-toolbar>\n    <div class=\"action-buttons\">\n      <ion-button \n        expand=\"block\" \n        color=\"medium\" \n        fill=\"outline\"\n        (click)=\"cancel()\"\n        class=\"cancel-btn\"\n      >\n        <ion-icon name=\"close-circle\" slot=\"start\"></ion-icon>\n        إلغاء\n      </ion-button>\n      \n      <ion-button \n        expand=\"block\" \n        color=\"primary\"\n        (click)=\"applyConfiguration()\"\n        class=\"apply-btn\"\n      >\n        <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n        تطبيق الضبط\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 30845:
/*!*********************************************************************************!*\
  !*** ./src/app/component/item-selector/item-selector.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col size=\"4\" *ngIf=\"loadingItems == true\">\n      <ion-item class=\"custInput\">\n        <ion-input [disabled]=\"true\"></ion-input>\n        <ion-spinner></ion-spinner>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"4\" *ngIf=\"loadingItems == false\">\n      <ion-grid class=\"ion-no-margin ion-no-padding\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-no-margin ion-no-padding\">\n            <div class=\"label-with-buttons-container\">\n              <div class=\"action-buttons-left\">\n                <!-- Refresh Button positioned in top left -->\n                <ion-button \n                  fill=\"clear\" \n                  size=\"small\"\n                  class=\"item-refresh-btn-left\"\n                  (click)=\"refresh()\"\n                  [disabled]=\"loadingItems\">\n                  <ion-icon \n                    name=\"refresh\" \n                    color=\"primary\"\n                    [class.spin]=\"loadingItems\">\n                  </ion-icon>\n                </ion-button>\n                \n                <!-- Add New Item Button -->\n                <ion-button size=\"small\" fill=\"clear\" class=\"add-item-btn-left\" (click)=\"presentModal2()\">\n                  <ion-icon name=\"add-circle-outline\" color=\"primary\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n                \n                <!-- Loading Spinner -->\n                <ion-spinner \n                  *ngIf=\"loadingItems\" \n                  name=\"dots\" \n                  class=\"item-loading-spinner-left\">\n                </ion-spinner>\n              </div>\n              \n              <ion-label  style=\"text-align: right;\">\n                <strong>الصنف</strong> \n              </ion-label>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <!-- Search Input Container - Match other field styles with proper positioning -->\n          <ion-item class=\"custInput item-selector-wrapper\">\n            <div class=\"input-container-wrapper\" #inputWrapper>\n              <ion-input\n                #searchInput\n                [(ngModel)]=\"searchTerm\"\n                (ngModelChange)=\"onModelChange($event)\"\n                [placeholder]=\"placeholder\"\n                [disabled]=\"loadingItems\"\n                [clearInput]=\"true\"\n                class=\"item-selector-input\"\n                (ionInput)=\"onSearchInput($event)\"\n                (ionClear)=\"onInputClear($event)\"\n                (ionFocus)=\"onInputFocus()\"\n                (ionBlur)=\"onInputBlur()\"\n                (click)=\"onInputFocus()\"\n                (keydown)=\"onKeyDown($event)\">\n              </ion-input>\n              \n            \n            </div>\n          </ion-item>\n\n          <!-- Dropdown List -->\n          <div class=\"dropdown-container\" \n               *ngIf=\"showDropdown && getFilteredItems().length > 0\"\n               [style.top]=\"dropdownPosition.top\"\n               [style.left]=\"dropdownPosition.left\"\n               [style.width]=\"dropdownPosition.width\">\n            \n            <ion-list class=\"item-dropdown\">\n              <ion-item \n                *ngFor=\"let item of getFilteredItems(); let i = index; trackBy: trackByItemId\" \n                button \n                class=\"item-item\"\n                [class.highlighted]=\"i === highlightedIndex\"\n                (click)=\"selectItem(item)\"\n                (mousedown)=\"$event.preventDefault()\"\n                (mouseenter)=\"highlightedIndex = i\">\n                <ion-label>\n                  <h3>{{ item.item_name }}</h3>\n                  <p *ngIf=\"item.item_desc\" class=\"item-desc\">{{ item.item_desc }}</p>\n                  <div class=\"item-prices-compact\">\n                    <span class=\"price-sale\">بيع: {{ item.pay_price }}</span>\n                    <span class=\"price-purchase\">شراء: {{ item.perch_price }}</span>\n                    <!-- <span class=\"stock-qty\">مخزون: {{ item.quantity }}</span> -->\n                  </div>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n\n\n          <!-- No Results Dropdown -->\n          <div class=\"dropdown-container\" \n               *ngIf=\"showDropdown && getFilteredItems().length === 0 && searchTerm.length > 0\"\n               [style.top]=\"dropdownPosition.top\"\n               [style.left]=\"dropdownPosition.left\"\n               [style.width]=\"dropdownPosition.width\">\n            <ion-list class=\"item-dropdown\">\n              <ion-item class=\"no-results\">\n                <ion-label>\n                  <p>لا توجد نتائج مطابقة</p>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-row>\n      </ion-grid>\n\n\n      <div class=\"stock-info-container\">\n        <div *ngIf=\"loadingQty && selectedItem.id\" class=\"stock-info-line\">\n          <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n          <ion-text class=\"loading-text\">جاري التحميل...</ion-text>\n        </div>\n\n        <div class=\"stock-display-container\">\n          <div *ngIf=\"items.length > 0 && selectedItem.id && !qtyError && !loadingQty\" class=\"stock-info-single-line\">\n            <!-- Stock quantity section -->\n            <div class=\"stock-section\">\n              <ion-text>المخزون: </ion-text>\n              <ion-text color=\"danger\" class=\"qty-value\">{{availQty}}</ion-text>\n              <ion-button fill=\"clear\" size=\"small\" class=\"refresh-btn\" (click)=\"refreshQuantity()\">\n                <ion-icon name=\"refresh-outline\" color=\"primary\"></ion-icon>\n              </ion-button>\n            </div>\n\n            <!-- Report button section -->\n            <div class=\"report-section\">\n              <ion-label> <strong> | </strong></ion-label>\n              <ion-button fill=\"outline\" *ngIf=\"selectedItem && selectedItem.id\" fill=\"clear\" size=\"small\" (click)=\"viewSelectedItemReport()\" color=\"primary\">\n                <ion-icon name=\"analytics-outline\" slot=\"icon-only\"></ion-icon>\n                <ion-text color=\"dark\"> تقرير الصنف </ion-text>\n              </ion-button>\n            </div>\n\n            <!-- Price info section -->\n            <div class=\"price-info-section\">\n              <ion-label> <strong> | </strong></ion-label>\n              <ion-text color=\"dark\">شراء</ion-text>\n              <ion-text color=\"dark\">{{selectedItem.perch_price}}</ion-text>\n              <ion-label> <strong> | </strong></ion-label>\n              <ion-text color=\"dark\">بيع</ion-text>\n              <ion-text color=\"dark\">{{selectedItem.pay_price}}</ion-text>\n              <ion-label> <strong> | </strong></ion-label>\n            </div>\n\n            <!-- Details button section -->\n            <div class=\"action-button-section\">\n              <ion-button \n                fill=\"clear\" \n                size=\"small\" \n                (click)=\"viewSelectedItemDetails()\" \n                color=\"primary\"\n                style=\"cursor: pointer; z-index: 1000; position: relative;\">\n                <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n                تفاصيل الصنف\n              </ion-button>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"qtyError && selectedItem.id && !loadingQty\" class=\"stock-info-line error-line\">\n          <ion-text color=\"danger\" class=\"error-text\">{{qtyErrorMsg}}</ion-text>\n          <ion-button fill=\"clear\" size=\"small\" class=\"refresh-btn\" (click)=\"refreshQuantity()\">\n            <ion-icon name=\"refresh-outline\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </div>\n      </div> \n    </ion-col>\n\n    <ion-col size=\"2\" *ngIf=\"showQuantityInput\" class=\"ion-margin-top\">\n      <ion-label class=\"ion-padding\"><strong>الكمية</strong></ion-label>\n      <ion-item class=\"custInput\" [ngClass]=\"{'qty-warning': showQtyWarning}\"> \n        <ion-input #qtyId (keyup.enter)=\"addToList()\" (ionFocus)=\"isFocused($event)\" [(ngModel)]=\"selectedItem.qty\"\n          (ionChange)=\"qtyChange($event)\"   select-all></ion-input>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"2\" *ngIf=\"showPriceInput\" class=\"ion-margin-top\">\n      <ion-label class=\"ion-padding\"><strong>سعر الوحدة</strong></ion-label>\n      <ion-item class=\"custInput\">\n        <ion-input (keyup.enter)=\"addToList()\" [(ngModel)]=\"selectedItem.pay_price\"\n          (ionChange)=\"onPayPriceChange($event)\"></ion-input>\n      </ion-item>\n    </ion-col>\n\n     <ion-col size=\"2\" *ngIf=\"showPerchPriceInput\" class=\"ion-margin-top\">\n      <ion-label class=\"ion-padding\"><strong>سعر الشراء</strong></ion-label>\n      <ion-item class=\"custInput\">\n        <ion-input (keyup.enter)=\"addToList()\" [(ngModel)]=\"selectedItem.perch_price\"\n          (ionChange)=\"onPerchPriceChange($event)\"></ion-input>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"2\" class=\"ion-margin-top\">\n      <ion-label class=\"ion-padding\"><strong>المجموع</strong></ion-label>\n      <ion-item class=\"custInput\">\n        <ion-input [readonly]=\"true\" [(ngModel)]=\"selectedItem.tot\"></ion-input>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"2\" class=\"ion-padding\" class=\"ion-margin-top ion-padding-top\">\n      <ion-button class=\"ion-margin-top\" expand=\"block\" routerDirection=\"root\" color=\"primary\" (click)=\"addToList()\">\n        <ion-label class=\"ion-text-center\">+</ion-label>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>";

/***/ }),

/***/ 43069:
/*!*****************************************************************************************************!*\
  !*** ./src/app/component/price-adjustment-dialog/price-adjustment-dialog.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"modern-header\" dir=\"rtl\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"header-title\">\n      <ion-icon name=\"pricetag\" class=\"title-icon\"></ion-icon>\n      {{ mode === 'sales' ? 'تعديل أسعار البيع' : 'تعديل أسعار الشراء' }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\" fill=\"clear\" class=\"close-btn\">\n        <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\" dir=\"rtl\">\n  <!-- Adjustment Controls Section -->\n  <div class=\"adjustment-section\">\n    <div class=\"control-card\">\n      <div class=\"card-header\">\n        <h3 class=\"section-title\">\n          <ion-icon name=\"settings\" color=\"primary\"></ion-icon>\n          إعدادات التعديل\n        </h3>\n      </div>\n      <div class=\"card-content\">\n        <!-- Adjustment Type Selection -->\n        <div class=\"adjustment-type-container\">\n          <ion-segment \n            [(ngModel)]=\"adjustmentType\" \n            (ionChange)=\"onAdjustmentTypeChange()\"\n            class=\"modern-segment\"\n          >\n            <ion-segment-button value=\"percentage\" class=\"segment-btn\">\n              <ion-icon name=\"percent\"></ion-icon>\n              <ion-label>نسبة مئوية</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"amount\" class=\"segment-btn\">\n              <ion-icon name=\"cash\"></ion-icon>\n              <ion-label>قيمة ثابتة</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n        <!-- Adjustment Value Input -->\n        <div class=\"value-input-container\">\n          <ion-item class=\"modern-input\" fill=\"outline\">\n            <ion-label position=\"stacked\">\n              {{ adjustmentType === 'percentage' ? 'نسبة التعديل (%)' : 'قيمة التعديل' }}\n            </ion-label>\n            <ion-input\n              #adjustmentInput\n              type=\"number\"\n              [(ngModel)]=\"adjustmentValue\"\n              (ngModelChange)=\"updatePreview()\"\n              placeholder=\"{{ adjustmentType === 'percentage' ? 'مثال: 10 للزيادة، -10 للنقصان' : 'مثال: 5.50 للزيادة، -2.25 للنقصان' }}\"\n              class=\"adjustment-input\"\n            ></ion-input>\n            <ion-icon \n              name=\"{{ adjustmentType === 'percentage' ? 'percent' : 'cash' }}\" \n              slot=\"end\" \n              color=\"primary\"\n            ></ion-icon>\n          </ion-item>\n        </div>\n\n        <!-- Quick Adjustment Buttons -->\n        <div class=\"quick-actions\">\n          <ion-button \n            *ngFor=\"let preset of (adjustmentType === 'percentage' ? [2,5, 7, 10,15, -2,-5,-7,-10, -15] : [100, 200, 300, -100, -200,-300])\"\n            size=\"small\" \n            fill=\"outline\" \n            color=\"primary\"\n            (click)=\"setPresetValue(preset)\"\n            class=\"quick-btn\"\n          >\n            {{ preset > 0 ? '+' : '' }}{{ preset }}{{ adjustmentType === 'percentage' ? '%' : '' }}\n          </ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Summary Section -->\n  <div class=\"summary-section\">\n    <ion-card class=\"summary-card\">\n      <ion-card-header>\n        <ion-card-title class=\"section-title\">\n          <ion-icon name=\"calculator\" color=\"success\"></ion-icon>\n          ملخص التعديل\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid class=\"summary-grid\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <div class=\"summary-item\">\n                <div class=\"summary-label\">عدد الأصناف</div>\n                <div class=\"summary-value primary\">{{ previewItems.length }}</div>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div class=\"summary-item\">\n                <div class=\"summary-label\">الإجمالي الحالي</div>\n                <div class=\"summary-value\">{{ (getTotalOriginal() || 0).toFixed(2) }}</div>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div class=\"summary-item\">\n                <div class=\"summary-label\">الإجمالي الجديد</div>\n                <div class=\"summary-value success\">{{ (getTotalNew() || 0).toFixed(2) }}</div>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <div class=\"difference-item\">\n                <div class=\"difference-label\">الفرق</div>\n                <div \n                  class=\"difference-value\"\n                  [class.positive]=\"getTotalDifference() > 0\"\n                  [class.negative]=\"getTotalDifference() < 0\"\n                >\n                  {{ getTotalDifference() > 0 ? '+' : '' }}{{ (getTotalDifference() || 0).toFixed(2) }}\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Items Preview Section -->\n  <div class=\"preview-section\" *ngIf=\"previewItems && previewItems.length > 0\">\n    <ion-card class=\"items-card\">\n      <ion-card-header>\n        <ion-card-title class=\"section-title\">\n          <ion-icon name=\"eye\" color=\"tertiary\"></ion-icon>\n          معاينة الأصناف ({{ previewItems.length }})\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"items-container\">\n          <div \n            *ngFor=\"let item of previewItems; let i = index\" \n            class=\"item-preview\"\n            [class.even]=\"i % 2 === 0\"\n          >\n            <div class=\"item-info\">\n              <div class=\"item-name\">\n                <ion-icon name=\"cube\" color=\"primary\"></ion-icon>\n                {{ item.item_name }}\n              </div>\n              <div class=\"item-details\">\n                <span class=\"quantity\">الكمية: {{ item.qty }}</span>\n              </div>\n            </div>\n            <div class=\"price-comparison\">\n              <div class=\"price-row\">\n                <span class=\"price-label\">{{ mode === 'sales' ? 'سعر البيع الحالي:' : 'سعر الشراء الحالي:' }}</span>\n                <span class=\"original-price\">{{ getOriginalPrice(item).toFixed(2) }}</span>\n              </div>\n              <div class=\"price-row\">\n                <span class=\"price-label\">{{ mode === 'sales' ? 'سعر البيع الجديد:' : 'سعر الشراء الجديد:' }}</span>\n                <span \n                  class=\"new-price\"\n                  [class.increased]=\"getNewPrice(item) > getOriginalPrice(item)\"\n                  [class.decreased]=\"getNewPrice(item) < getOriginalPrice(item)\"\n                >\n                  {{ getNewPrice(item).toFixed(2) }}\n                </span>\n              </div>\n              <div class=\"price-difference\" *ngIf=\"getNewPrice(item) !== getOriginalPrice(item)\">\n                <ion-icon \n                  [name]=\"getNewPrice(item) > getOriginalPrice(item) ? 'trending-up' : 'trending-down'\"\n                  [color]=\"getNewPrice(item) > getOriginalPrice(item) ? 'success' : 'danger'\"\n                ></ion-icon>\n                <span \n                  [class.increased]=\"getNewPrice(item) > getOriginalPrice(item)\"\n                  [class.decreased]=\"getNewPrice(item) < getOriginalPrice(item)\"\n                >\n                  {{ getPriceDifference(item).toFixed(2) }}\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer class=\"modern-footer\">\n  <ion-toolbar>\n    <div class=\"action-buttons\">\n      <ion-button \n        expand=\"block\" \n        color=\"medium\" \n        fill=\"outline\"\n        (click)=\"cancel()\"\n        class=\"cancel-btn\"\n      >\n        <ion-icon name=\"close-circle\" slot=\"start\"></ion-icon>\n        إلغاء\n      </ion-button>\n      \n      <ion-button \n        expand=\"block\" \n        color=\"primary\"\n        (click)=\"applyChanges()\"\n        class=\"apply-btn\"\n        [disabled]=\"adjustmentValue === 0\"\n      >\n        <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n        تطبيق التعديل\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 7317:
/*!****************************************************************************************!*\
  !*** ./src/app/components/account-selector/account-selector.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"account-selector-container\">\n  <!-- Header with Label and Action Buttons -->\n  <div class=\"header-container\">\n    <div class=\"label-with-buttons-container\">\n      <div class=\"action-buttons-left\">\n        <!-- Refresh Button positioned in top left -->\n        <ion-button \n          fill=\"clear\" \n          size=\"small\"\n          class=\"account-refresh-btn-left\"\n          (click)=\"refreshAccounts()\"\n          [disabled]=\"loadingAccounts\">\n          <ion-icon \n            name=\"refresh\" \n            color=\"primary\"\n            [class.spin]=\"loadingAccounts\">\n          </ion-icon>\n        </ion-button>\n        \n        <!-- Add Account Button -->\n        <ion-button \n          *ngIf=\"showAddButton\"\n          size=\"small\" \n          fill=\"clear\" \n          class=\"add-account-btn-left\" \n          (click)=\"onAddAccount()\"\n          [disabled]=\"disabled\">\n          <ion-icon name=\"add-circle-outline\" color=\"primary\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n        \n        <!-- Loading Spinner -->\n        <ion-spinner \n          *ngIf=\"loadingAccounts\" \n          name=\"dots\" \n          class=\"account-loading-spinner-left\">\n        </ion-spinner>\n      </div>\n      \n      <ion-label style=\"text-align: right;\">\n        <strong>{{ label || 'الحساب' }}</strong> \n      </ion-label>\n    </div>\n  </div>\n\n  <!-- Input Field Container -->\n  <div class=\"input-container\">\n    <!-- Search Input - Match item-selector styling -->\n    <ion-item class=\"custInput account-selector-wrapper\">\n      <div class=\"input-container-wrapper\" #inputWrapper>\n        <ion-input\n          #searchInput\n          [(ngModel)]=\"searchTerm\"\n          [placeholder]=\"placeholder\"\n          [disabled]=\"disabled\"\n          [clearInput]=\"true\"\n          class=\"account-input\"\n          (ionInput)=\"onSearchInput($event)\"\n          (ionFocus)=\"onInputFocus()\"\n          (ionBlur)=\"onInputBlur()\"\n          (click)=\"onInputFocus()\"\n          (keydown)=\"onKeyDown($event)\">\n        </ion-input>\n      </div>\n    </ion-item>\n  </div>\n\n \n\n  <!-- Dropdown List -->\n  <div class=\"dropdown-container\" \n       *ngIf=\"showDropdown && filteredAccounts.length > 0\"\n       [style.top]=\"dropdownPosition.top\"\n       [style.left]=\"dropdownPosition.left\"\n       [style.width]=\"dropdownPosition.width\">\n    <ion-list class=\"account-dropdown\">\n      <ion-item \n        *ngFor=\"let account of filteredAccounts; let i = index\" \n        button \n        class=\"account-item\"\n        [class.highlighted]=\"i === highlightedIndex\"\n        (click)=\"selectAccount(account)\"\n        (mousedown)=\"$event.preventDefault()\"\n        (mouseenter)=\"highlightedIndex = i\">\n        <ion-label>\n          <h3>{{ account.sub_name }}</h3>\n          <p *ngIf=\"account.sub_code\" class=\"account-code\">كود: {{ account.sub_code }}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!-- No Results Dropdown -->\n  <div class=\"dropdown-container\" \n       *ngIf=\"showDropdown && filteredAccounts.length === 0 && searchTerm.length > 0\"\n       [style.top]=\"dropdownPosition.top\"\n       [style.left]=\"dropdownPosition.left\"\n       [style.width]=\"dropdownPosition.width\">\n    <ion-list class=\"account-dropdown\">\n      <ion-item class=\"no-results\">\n        <ion-label>\n          <p>لا توجد نتائج مطابقة</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!-- Account Balance Display -->\n  <div class=\"balance-container\" *ngIf=\"selectedAccount && selectedAccount.id\">\n    <div class=\"balance-label\">الرصيد:</div>\n    \n    <!-- Loading Balance -->\n    <div class=\"balance-loading\" *ngIf=\"loadingBalance && selectedAccount\">\n      <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner>\n      <span>جاري التحميل...</span>\n    </div>\n    \n    <!-- Balance Amount -->\n    <div class=\"balance-amount\" \n         *ngIf=\"!loadingBalance && accountBalance && selectedAccount\"\n         [style.color]=\"getBalanceColor(accountBalance) === 'success' ? '#10dc60' : '#f04141'\">\n      {{ formatBalance(accountBalance) }}\n    </div>\n    \n    <!-- Balance Error -->\n    <div class=\"balance-error\" \n         *ngIf=\"!loadingBalance && !accountBalance && selectedAccount && selectedAccount.id\">\n      لا يمكن تحميل الرصيد\n    </div>\n  </div>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_module_shared_shared_module_ts.js.map
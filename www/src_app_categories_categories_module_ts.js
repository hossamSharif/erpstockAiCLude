"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_categories_categories_module_ts"],{

/***/ 47036:
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageRoutingModule": () => (/* binding */ CategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.page */ 14945);




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ 71944:
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageModule": () => (/* binding */ CategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories-routing.module */ 47036);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page */ 14945);







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriesPageRoutingModule
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_1__.CategoriesPage]
    })
], CategoriesPageModule);



/***/ }),

/***/ 14945:
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPage": () => (/* binding */ CategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.page.html?ngResource */ 72467);
/* harmony import */ var _categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page.scss?ngResource */ 31819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);







let CategoriesPage = class CategoriesPage {
    constructor(servicesService, loadingController, alertController, toastController, storage) {
        this.servicesService = servicesService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.storage = storage;
        this.categories = [];
        this.newCategory = {
            category_name: '',
            category_desc: '',
            store_id: null
        };
        this.editingCategory = null;
        this.showAddForm = false;
        // Endpoint switching control
        this.selectedEndpointCategoryId = null;
        this.currentEndpoint = '';
        this.selectedCategoryName = '';
        this.isInitializingEndpoint = false;
    }
    ngOnInit() {
        this.loadCategories();
        this.loadEndpointSettings();
    }
    loadCategories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'جاري تحميل التصنيفات...'
            });
            yield this.loading.present();
            try {
                // Fetch categories and cache them
                const categories = yield this.servicesService.fetchAndCacheCategories();
                this.categories = Array.isArray(categories) ? categories : [];
                this.loadEndpointSettings(); // Load endpoint settings after categories are loaded
                this.loading.dismiss();
            }
            catch (error) {
                console.error('Error loading categories:', error);
                this.categories = [];
                this.loading.dismiss();
                this.presentToast('خطأ في تحميل التصنيفات', 'danger');
            }
        });
    }
    addCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.newCategory.category_name.trim()) {
                this.presentToast('يرجى إدخال اسم التصنيف', 'warning');
                return;
            }
            const loading = yield this.loadingController.create({
                message: 'جاري حفظ التصنيف...'
            });
            yield loading.present();
            try {
                this.servicesService.createCategory(this.newCategory).subscribe(data => {
                    loading.dismiss();
                    this.presentToast('تم إضافة التصنيف بنجاح', 'success');
                    this.resetForm();
                    this.loadCategories();
                    // Refresh cached categories
                    this.servicesService.fetchAndCacheCategories();
                }, error => {
                    console.error('Error creating category:', error);
                    loading.dismiss();
                    this.presentToast('خطأ في إضافة التصنيف', 'danger');
                });
            }
            catch (error) {
                console.error('Error:', error);
                loading.dismiss();
            }
        });
    }
    editCategory(category) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.editingCategory = Object.assign({}, category);
            this.showAddForm = true;
            this.newCategory = Object.assign({}, category);
        });
    }
    updateCategory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.newCategory.category_name.trim()) {
                this.presentToast('يرجى إدخال اسم التصنيف', 'warning');
                return;
            }
            const loading = yield this.loadingController.create({
                message: 'جاري تحديث التصنيف...'
            });
            yield loading.present();
            try {
                this.servicesService.updateCategory(this.newCategory).subscribe(data => {
                    loading.dismiss();
                    this.presentToast('تم تحديث التصنيف بنجاح', 'success');
                    this.resetForm();
                    this.loadCategories();
                    // Refresh cached categories
                    this.servicesService.fetchAndCacheCategories();
                }, error => {
                    console.error('Error updating category:', error);
                    loading.dismiss();
                    this.presentToast('خطأ في تحديث التصنيف', 'danger');
                });
            }
            catch (error) {
                console.error('Error:', error);
                loading.dismiss();
            }
        });
    }
    deleteCategory(category) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'تأكيد الحذف',
                message: `هل أنت متأكد من حذف التصنيف "${category.category_name}"؟`,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel'
                    },
                    {
                        text: 'حذف',
                        handler: () => {
                            this.confirmDeleteCategory(category);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirmDeleteCategory(category) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'جاري حذف التصنيف...'
            });
            yield loading.present();
            try {
                this.servicesService.deleteCategory(category.id).subscribe(data => {
                    loading.dismiss();
                    if (data['message'].includes('Cannot delete')) {
                        this.presentToast('لا يمكن حذف التصنيف لأنه مستخدم في أصناف', 'warning');
                    }
                    else {
                        this.presentToast('تم حذف التصنيف بنجاح', 'success');
                        this.loadCategories();
                        // Refresh cached categories
                        this.servicesService.fetchAndCacheCategories();
                        // Check if deleted category was the selected endpoint
                        if (this.selectedEndpointCategoryId == category.id) {
                            this.clearEndpointSettings();
                        }
                    }
                }, error => {
                    console.error('Error deleting category:', error);
                    loading.dismiss();
                    this.presentToast('خطأ في حذف التصنيف', 'danger');
                });
            }
            catch (error) {
                console.error('Error:', error);
                loading.dismiss();
            }
        });
    }
    resetForm() {
        this.newCategory = {
            category_name: '',
            category_desc: '',
            store_id: null
        };
        this.editingCategory = null;
        this.showAddForm = false;
    }
    toggleAddForm() {
        this.showAddForm = !this.showAddForm;
        if (!this.showAddForm) {
            this.resetForm();
        }
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                color: color,
                position: 'top'
            });
            toast.present();
        });
    }
    // Endpoint switching management methods
    loadEndpointSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isInitializingEndpoint = true;
            yield this.storage.create();
            const savedCategoryId = yield this.storage.get('SELECTED_CATEGORY_ID');
            const savedEndpoint = yield this.storage.get('SELECTED_ENDPOINT');
            const savedCategory = yield this.storage.get('SELECTED_CATEGORY');
            if (savedCategoryId && this.categories.length > 0) {
                // Verify that the saved category still exists in the categories list
                const categoryExists = this.categories.some(cat => cat.id == savedCategoryId);
                if (categoryExists) {
                    this.selectedEndpointCategoryId = savedCategoryId;
                    this.currentEndpoint = savedEndpoint || '';
                    this.selectedCategoryName = savedCategory ? savedCategory.category_name : '';
                }
                else {
                    // If saved category no longer exists, clear it from storage
                    yield this.clearEndpointSettings();
                }
            }
            else {
                this.selectedEndpointCategoryId = null;
                this.currentEndpoint = '';
                this.selectedCategoryName = '';
            }
            // Allow some time for the UI to settle before allowing user interactions
            setTimeout(() => {
                this.isInitializingEndpoint = false;
            }, 500);
        });
    }
    setEndpointCategory(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const selectedId = event.detail.value;
            // Don't show dialog during initialization
            if (this.isInitializingEndpoint) {
                return;
            }
            if (!selectedId) {
                yield this.clearEndpointSettings();
                return;
            }
            const loading = yield this.loadingController.create({
                message: 'جاري تحديث نقطة الاتصال...'
            });
            yield loading.present();
            try {
                const result = yield this.servicesService.setEndpointFromCategory(selectedId);
                if (result.success) {
                    this.selectedEndpointCategoryId = selectedId;
                    this.currentEndpoint = result.endpoint;
                    this.selectedCategoryName = result.category.category_name;
                    loading.dismiss();
                    // Show success message and reload confirmation
                    const alert = yield this.alertController.create({
                        header: 'تم التحديث بنجاح',
                        message: `تم تحديد "${result.category.category_name}" كنقطة اتصال. سيتم إعادة تحميل التطبيق لتطبيق التغييرات.`,
                        buttons: [
                            {
                                text: 'موافق',
                                handler: () => {
                                    this.servicesService.reloadApplication();
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    loading.dismiss();
                    this.presentToast(result.message || 'خطأ في تحديث نقطة الاتصال', 'danger');
                }
            }
            catch (error) {
                console.error('Error setting endpoint:', error);
                loading.dismiss();
                this.presentToast('خطأ في تحديث نقطة الاتصال', 'danger');
            }
        });
    }
    clearEndpointSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.servicesService.clearEndpoint();
            this.selectedEndpointCategoryId = null;
            this.currentEndpoint = '';
            this.selectedCategoryName = '';
            // Only show toast if not during initialization
            if (!this.isInitializingEndpoint) {
                this.presentToast('تم إلغاء نقطة الاتصال المحددة', 'warning');
            }
        });
    }
    getSelectedEndpointName() {
        return this.selectedCategoryName;
    }
    getCurrentEndpoint() {
        return this.currentEndpoint;
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
CategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-categories',
        template: _categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoriesPage);



/***/ }),

/***/ 31819:
/*!************************************************************!*\
  !*** ./src/app/categories/categories.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".category-card {\n  margin-bottom: 12px;\n}\n\n.category-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.category-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.category-header h3 {\n  margin: 0 0 8px 0;\n  font-size: 1.2em;\n  font-weight: 600;\n}\n\n.category-header p {\n  margin: 0 0 8px 0;\n  color: var(--ion-color-medium);\n}\n\nion-card-content {\n  padding: 16px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.category-settings-card {\n  margin-top: 20px;\n  border-left: 4px solid var(--ion-color-primary);\n}\n\n.category-settings-card ion-card-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.1em;\n}\n\n.category-settings-card ion-card-subtitle {\n  margin-top: 8px;\n  color: var(--ion-color-medium);\n  font-size: 0.9em;\n}\n\n.category-settings-card ion-item {\n  --background: transparent;\n  margin-bottom: 8px;\n}\n\n.category-settings-card ion-item h3 {\n  margin: 0;\n  font-size: 1em;\n  font-weight: 500;\n}\n\n.category-settings-card ion-item p {\n  margin: 4px 0 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.85em;\n}\n\n.category-settings-card ion-item ion-toggle {\n  margin-left: 16px;\n}\n\n.category-settings-card ion-item:last-child {\n  margin-bottom: 0;\n}\n\n.endpoint-category-card {\n  margin-top: 20px;\n  border-left: 4px solid var(--ion-color-primary);\n}\n\n.endpoint-category-card ion-card-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.1em;\n}\n\n.endpoint-category-card ion-card-title ion-icon {\n  color: var(--ion-color-primary);\n}\n\n.endpoint-category-card ion-card-subtitle {\n  margin-top: 8px;\n  color: var(--ion-color-medium);\n  font-size: 0.9em;\n}\n\n.endpoint-category-card .column-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 12px;\n}\n\n.endpoint-category-card .category-section {\n  margin-bottom: 16px;\n}\n\n.default-category-card {\n  margin-top: 20px;\n  border-left: 4px solid var(--ion-color-warning);\n}\n\n.default-category-card ion-card-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.1em;\n}\n\n.default-category-card ion-card-title ion-icon {\n  color: var(--ion-color-warning);\n}\n\n.default-category-card ion-card-subtitle {\n  margin-top: 8px;\n  color: var(--ion-color-medium);\n  font-size: 0.9em;\n}\n\n.default-category-card ion-item {\n  --background: transparent;\n  margin-bottom: 8px;\n}\n\n.default-category-card ion-item h3 {\n  margin: 0;\n  font-size: 1em;\n  font-weight: 500;\n}\n\n.default-category-card ion-item p {\n  margin: 4px 0 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.85em;\n}\n\n.default-category-card ion-item ion-select {\n  --placeholder-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n}\n\n.default-category-card ion-item:last-child {\n  margin-bottom: 0;\n}\n\n.default-category-card ion-button {\n  margin-top: 12px;\n}\n\n.default-category-card ion-button ion-icon {\n  margin-left: 4px;\n}\n\n.default-category-card .category-section {\n  margin-bottom: 16px;\n}\n\n.default-category-card .category-section .field-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin-bottom: 6px;\n}\n\n.compact-segment {\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  min-height: 48px;\n  width: 100%;\n}\n\n.compact-segment ion-segment-button {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-dark);\n  --color-checked: white;\n  border-radius: 8px;\n  margin: 4px;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  flex: 1;\n}\n\n.compact-segment ion-segment-button.segment-button-checked {\n  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);\n  transform: translateY(-1px);\n}\n\n.compact-segment ion-segment-button:hover:not(.segment-button-checked) {\n  background: rgba(74, 144, 226, 0.1);\n}\n\n.compact-segment ion-segment-button span {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 8px 12px;\n  display: block;\n}\n\nion-segment {\n  --color: var(--ion-color-dark);\n  --color-checked: var(--ion-color-primary-contrast);\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: transparent;\n  --border-radius: 8px;\n  min-width: 200px;\n}\n\nion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-height: 28px;\n}\n\nion-segment ion-segment-button ion-label {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n@media (max-width: 768px) {\n  .compact-segment ion-segment-button span {\n    font-size: 12px;\n    padding: 6px 8px;\n  }\n\n  .default-category-card .category-section .field-label {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLCtDQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0k7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRE47O0FBSUk7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFGTjs7QUFLSTtFQUNFLGlCQUFBO0FBSE47O0FBTUk7RUFDRSxnQkFBQTtBQUpOOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSwrQ0FBQTtBQVBGOztBQVNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBUEo7O0FBU0k7RUFDRSwrQkFBQTtBQVBOOztBQVdFO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFZRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBVko7O0FBYUU7RUFDRSxtQkFBQTtBQVhKOztBQWdCQTtFQUNFLGdCQUFBO0VBQ0EsK0NBQUE7QUFiRjs7QUFlRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWJKOztBQWVJO0VBQ0UsK0JBQUE7QUFiTjs7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQWZKOztBQWtCRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFoQko7O0FBa0JJO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWhCTjs7QUFtQkk7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFqQk47O0FBb0JJO0VBQ0UsNENBQUE7RUFDQSw4QkFBQTtBQWxCTjs7QUFxQkk7RUFDRSxnQkFBQTtBQW5CTjs7QUF1QkU7RUFDRSxnQkFBQTtBQXJCSjs7QUF1Qkk7RUFDRSxnQkFBQTtBQXJCTjs7QUEwQkU7RUFDRSxtQkFBQTtBQXhCSjs7QUEwQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQXhCTjs7QUE4QkE7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTNCRjs7QUE2QkU7RUFDRSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0FBM0JKOztBQTZCSTtFQUNFLDhDQUFBO0VBQ0EsMkJBQUE7QUEzQk47O0FBOEJJO0VBQ0UsbUNBQUE7QUE1Qk47O0FBK0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBN0JOOztBQW1DQTtFQUNFLDhCQUFBO0VBQ0Esa0RBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQWhDRjs7QUFrQ0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFoQ0o7O0FBa0NJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBaENOOztBQXNDQTtFQUdNO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBckNOOztFQTRDSTtJQUNFLGVBQUE7RUF6Q047QUFDRiIsImZpbGUiOiJjYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmNhdGVnb3J5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5jYXRlZ29yeS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jYXRlZ29yeS1oZWFkZXIgaDMge1xuICBtYXJnaW46IDAgMCA4cHggMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhdGVnb3J5LWhlYWRlciBwIHtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuLy8gQ2F0ZWdvcnkgc2V0dGluZ3MgY2FyZCBzdHlsaW5nXG4uY2F0ZWdvcnktc2V0dGluZ3MtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxuICBcbiAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIFxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDRweCAwIDAgMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgIH1cbiAgICBcbiAgICBpb24tdG9nZ2xlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW5kcG9pbnQgY2F0ZWdvcnkgY2FyZCBzdHlsaW5nXG4uZW5kcG9pbnQtY2F0ZWdvcnktY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgLmNvbHVtbi1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG4gIFxuICAuY2F0ZWdvcnktc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxufVxuXG4vLyBEZWZhdWx0IGNhdGVnb3J5IGNhcmQgc3R5bGluZ1xuLmRlZmF1bHQtY2F0ZWdvcnktY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICBcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIFxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDRweCAwIDAgMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgIH1cbiAgICBcbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cbiAgICBcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIENhdGVnb3J5IHNlY3Rpb24gc3R5bGluZyAoY29waWVkIGZyb20gc2FsZXMgcGFnZSlcbiAgLmNhdGVnb3J5LXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgXG4gICAgLmZpZWxkLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIFNlZ21lbnQgc3R5bGluZyAoY29waWVkIGZyb20gc2FsZXMgcGFnZSlcbi5jb21wYWN0LXNlZ21lbnQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBmbGV4OiAxO1xuXG4gICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMyk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuXG4gICAgJjpob3Zlcjpub3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE0NCwgMjI2LCAwLjEpO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG5cbi8vIEdlbmVyYWwgaW9uLXNlZ21lbnQgc3R5bGluZyAoY29waWVkIGZyb20gc2FsZXMgcGFnZSlcbmlvbi1zZWdtZW50IHsgXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIFxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAyOHB4O1xuICAgIFxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBmb3IgbW9iaWxlXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbXBhY3Qtc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZGVmYXVsdC1jYXRlZ29yeS1jYXJkIHtcbiAgICAuY2F0ZWdvcnktc2VjdGlvbiB7XG4gICAgICAuZmllbGQtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 72467:
/*!************************************************************!*\
  !*** ./src/app/categories/categories.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>إدارة التصنيفات</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleAddForm()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">إدارة التصنيفات</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- Add/Edit Form -->\n  <ion-card *ngIf=\"showAddForm\">\n    <ion-card-header>\n      <ion-card-title>{{ editingCategory ? 'تعديل التصنيف' : 'إضافة تصنيف جديد' }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"stacked\">اسم التصنيف *</ion-label>\n        <ion-input [(ngModel)]=\"newCategory.category_name\" placeholder=\"اسم التصنيف\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label position=\"stacked\">وصف التصنيف</ion-label>\n        <ion-textarea [(ngModel)]=\"newCategory.category_desc\" placeholder=\"وصف التصنيف (اختياري)\"></ion-textarea>\n      </ion-item>\n\n      <div class=\"ion-padding-top\">\n        <ion-button \n          expand=\"block\" \n          (click)=\"editingCategory ? updateCategory() : addCategory()\"\n          [disabled]=\"!newCategory.category_name?.trim()\">\n          {{ editingCategory ? 'تحديث' : 'إضافة' }}\n        </ion-button>\n        \n        <ion-button \n          expand=\"block\" \n          fill=\"outline\" \n          (click)=\"resetForm()\">\n          إلغاء\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Categories List -->\n  <div class=\"ion-padding\">\n    <ion-card *ngFor=\"let category of categories\" class=\"category-card\">\n      <ion-card-content>\n        <div class=\"category-header\">\n          <div>\n            <h3>{{ category.category_name }}</h3>\n            <p *ngIf=\"category.category_desc\">{{ category.category_desc }}</p>\n            <ion-text color=\"medium\">\n              <small>تاريخ الإنشاء: {{ category.created_at | date:'short':'ar' }}</small>\n            </ion-text>\n          </div>\n          \n          <div class=\"category-actions\">\n            <ion-button \n              fill=\"clear\" \n              size=\"small\" \n              color=\"primary\"\n              (click)=\"editCategory(category)\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-button>\n            \n            <ion-button \n              fill=\"clear\" \n              size=\"small\" \n              color=\"danger\"\n              (click)=\"deleteCategory(category)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Empty State -->\n    <ion-card *ngIf=\"categories.length === 0\">\n      <ion-card-content class=\"ion-text-center\">\n        <ion-icon name=\"folder-open-outline\" style=\"font-size: 64px; color: var(--ion-color-medium);\"></ion-icon>\n        <h3>لا توجد تصنيفات</h3>\n        <p>ابدأ بإضافة التصنيف الأول للأصناف</p>\n        <ion-button fill=\"outline\" (click)=\"toggleAddForm()\">\n          <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n          إضافة تصنيف\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n   \n    \n    <!-- Endpoint Selection Section -->\n    <ion-card class=\"endpoint-category-card\" *ngIf=\"categories.length > 0\">\n      <ion-card-header>\n        <ion-card-title>\n          <ion-icon name=\"globe-outline\" slot=\"start\"></ion-icon>\n          تحديد القسم   \n        </ion-card-title>\n        <ion-card-subtitle>\n          اختر التصنيف الذي يحتوي على عنوان نقطة الاتصال للنظام\n        </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-label class=\"column-label\">اختر التصنيف</ion-label>\n        <div class=\"category-section\">\n          <ion-segment \n            [(ngModel)]=\"selectedEndpointCategoryId\" \n            (ionChange)=\"setEndpointCategory($event)\" \n            class=\"compact-segment\"\n            scrollable=\"true\">\n            <ion-segment-button \n              *ngFor=\"let category of categories\" \n              [value]=\"category.id\">\n              <span>{{ category.category_name }}</span>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n        \n        <ion-item *ngIf=\"selectedEndpointCategoryId && currentEndpoint\">\n          <ion-label color=\"success\">\n            <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"success\"></ion-icon>\n            <h3>نقطة الاتصال النشطة</h3>\n            <p><strong>التصنيف:</strong> {{ getSelectedEndpointName() }}</p>\n            <p><strong>العنوان:</strong> {{ getCurrentEndpoint() }}</p>\n          </ion-label>\n        </ion-item>\n        \n        <ion-item *ngIf=\"!selectedEndpointCategoryId\">\n          <ion-label color=\"warning\">\n            <ion-icon name=\"warning\" slot=\"start\" color=\"warning\"></ion-icon>\n            <h3>لم يتم تحديد نقطة اتصال</h3>\n            <p>سيتم استخدام نقطة الاتصال الافتراضية</p>\n          </ion-label>\n        </ion-item>\n        \n        <ion-button \n          *ngIf=\"selectedEndpointCategoryId\"\n          fill=\"clear\" \n          color=\"danger\" \n          size=\"small\"\n          (click)=\"clearEndpointSettings()\">\n          <ion-icon name=\"close-circle\" slot=\"start\"></ion-icon>\n          إلغاء نقطة الاتصال المحددة\n        </ion-button>\n        \n        <ion-note>\n          <p><strong>ملاحظة:</strong> تأكد من أن وصف التصنيف المحدد يحتوي على عنوان صحيح لنقطة الاتصال (مثل: https://example.com/api/)</p>\n        </ion-note>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_categories_categories_module_ts.js.map
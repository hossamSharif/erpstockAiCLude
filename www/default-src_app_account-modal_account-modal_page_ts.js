"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_account-modal_account-modal_page_ts"],{

/***/ 55506:
/*!*****************************************************!*\
  !*** ./src/app/account-modal/account-modal.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModalPage": () => (/* binding */ AccountModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _account_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-modal.page.html?ngResource */ 11691);
/* harmony import */ var _account_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-modal.page.scss?ngResource */ 15921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _services_account_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/account-communication.service */ 32724);









let AccountModalPage = class AccountModalPage {
    constructor(navController, route, loadingController, toastController, alertController, api, storage, accountCommunicationService, cdr) {
        this.navController = navController;
        this.route = route;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.api = api;
        this.storage = storage;
        this.accountCommunicationService = accountCommunicationService;
        this.cdr = cdr;
        this.mode = 'create';
        this.account_category = [];
        this.main_account = [];
        // UI state
        this.loading = false;
        this.saving = false;
        this.initializeData();
    }
    ngOnInit() {
        console.log('Account modal ngOnInit');
        this.getAppInfo();
        this.initializeFromRoute();
    }
    initializeData() {
        this.payInvo = {
            id: '',
            ac_id: '',
            sub_name: '',
            sub_type: '',
            sub_code: '',
            sub_balance: '',
            store_id: '',
            cat_id: '',
            cat_name: '',
            ac_behavior: '',
            phone: '',
            address: ''
        };
        this.selectedMainAccount = {
            ac_id: '',
            actype_id: '',
            ac_name: '',
            ac_code: '',
            eng_name: '',
            ac_type: ''
        };
        this.selectedCategory = {
            id: '',
            cat_name: ''
        };
    }
    initializeFromRoute() {
        // Get route parameters
        this.route.queryParams.subscribe(params => {
            if (params['mode']) {
                this.mode = params['mode'];
            }
            if (params['account']) {
                this.account = JSON.parse(params['account']);
                this.initializeForm();
            }
        });
    }
    initializeForm() {
        if (this.mode === 'edit' && this.account) {
            // Fill form with existing account data
            this.payInvo = {
                id: this.account.id,
                ac_id: this.account.ac_id,
                sub_name: this.account.sub_name,
                sub_type: this.account.sub_type,
                sub_code: this.account.sub_code,
                sub_balance: this.account.sub_balance,
                store_id: this.account.store_id,
                cat_id: this.account.cat_id,
                cat_name: this.account.cat_name,
                ac_behavior: this.account.ac_behavior,
                phone: this.account.phone,
                address: this.account.address
            };
            // Category will be set after data is loaded in setCategoryForEdit()
            // Set main account after data is loaded
            this.setMainAccountForEdit();
        }
    }
    setMainAccountForEdit() {
        if (this.main_account && this.main_account.length > 0 && this.account) {
            const mainAcc = this.main_account.find(acc => acc.ac_id == this.account.ac_id);
            if (mainAcc) {
                this.selectedMainAccount = {
                    ac_id: mainAcc.ac_id,
                    actype_id: mainAcc.actype_id,
                    ac_name: mainAcc.ac_name,
                    ac_code: mainAcc.ac_code,
                    eng_name: mainAcc.eng_name,
                    ac_type: mainAcc.ac_type
                };
            }
        }
    }
    setCategoryForEdit() {
        if (this.account_category && this.account_category.length > 0 && this.account) {
            const category = this.account_category.find(cat => cat.id == this.account.cat_id);
            if (category) {
                this.selectedCategory = {
                    id: category.id,
                    cat_name: category.cat_name
                };
                // Also update the payInvo category fields to ensure consistency
                this.payInvo.cat_id = category.id;
                this.payInvo.cat_name = category.cat_name;
                // Force change detection to update UI
                this.cdr.detectChanges();
                console.log('Category set for edit mode:', this.selectedCategory);
            }
            else {
                console.log('Category not found for id:', this.account.cat_id);
            }
        }
    }
    getAppInfo() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
                console.log('User info loaded:', this.user_info);
            }
        });
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                console.log('Year loaded:', this.year);
            }
        });
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                this.payInvo.store_id = this.store_info.id;
                console.log('Store info loaded:', this.store_info);
                // Load supporting data after store info is available
                this.loadSupportingData();
            }
        });
    }
    loadSupportingData() {
        console.log('Loading supporting data...');
        // Load main accounts first
        this.getMainAccount();
        // Load account categories
        this.getAccountCategory();
    }
    getMainAccount() {
        this.api.getMainAccounts().subscribe(data => {
            let res = data;
            this.main_account = res['data'] || [];
            console.log('Main accounts loaded:', this.main_account);
            // Set main account for edit mode after data is loaded
            if (this.mode === 'edit' && this.account) {
                this.setMainAccountForEdit();
            }
        }, (err) => {
            console.log('Error loading main accounts:', err);
        });
    }
    getAccountCategory() {
        if (this.store_info && this.store_info.id) {
            console.log('Loading categories for store:', this.store_info.id);
            this.api.getAccountCategory(this.store_info.id).subscribe(data => {
                let res = data;
                this.account_category = res['data'] || [];
                console.log('Account categories loaded:', this.account_category);
                // Set category for edit mode after data is loaded
                if (this.mode === 'edit' && this.account) {
                    // Use setTimeout to ensure DOM is updated before setting category
                    setTimeout(() => {
                        this.setCategoryForEdit();
                    }, 100);
                }
            }, (err) => {
                console.log('Error loading categories:', err);
            });
        }
        else {
            console.log('Store info not available for loading categories');
        }
    }
    pickMainAccount(event) {
        const selectedName = event.detail.value;
        console.log('Main account selected:', selectedName);
        const mainAcc = this.main_account.find(x => x.ac_name === selectedName);
        if (mainAcc) {
            this.selectedMainAccount = {
                ac_id: mainAcc.ac_id,
                ac_name: mainAcc.ac_name,
                actype_id: mainAcc.actype_id,
                ac_code: mainAcc.ac_code,
                eng_name: mainAcc.eng_name,
                ac_type: mainAcc.ac_type
            };
            this.payInvo.ac_id = this.selectedMainAccount.ac_id;
            this.payInvo.sub_type = this.selectedMainAccount.ac_type;
            this.payInvo.ac_behavior = this.selectedMainAccount.ac_type;
            console.log('Selected main account:', mainAcc);
            console.log('Auto-selected account type:', this.selectedMainAccount.ac_type);
        }
        else {
            this.presentToast('خطأ في اسم الحساب', 'danger');
        }
    }
    pickAccountCategory(event) {
        const selectedName = event.detail.value;
        console.log('Category selected:', selectedName);
        const category = this.account_category.find(x => x.cat_name === selectedName);
        if (category) {
            this.selectedCategory = {
                id: category.id,
                cat_name: category.cat_name
            };
            this.payInvo.cat_id = this.selectedCategory.id;
            this.payInvo.cat_name = this.selectedCategory.cat_name;
            console.log('Selected category:', category);
            console.log('Show phone/address fields:', this.shouldShowPhoneAndAddress());
        }
        else {
            this.presentToast('خطأ في اسم التصنيف', 'danger');
        }
    }
    // Check if phone and address fields should be shown (categories 1 and 2: عملاء, موردين)
    shouldShowPhoneAndAddress() {
        if (this.selectedCategory && this.selectedCategory.id) {
            const categoryId = parseInt(this.selectedCategory.id);
            return categoryId === 1 || categoryId === 2;
        }
        return false;
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.validate()) {
                return;
            }
            this.saving = true;
            const loading = yield this.loadingController.create({
                message: 'جاري حفظ البيانات...',
                spinner: 'crescent'
            });
            yield loading.present();
            try {
                let result;
                if (this.mode === 'create') {
                    result = yield this.createAccount();
                }
                else {
                    result = yield this.updateAccount();
                }
                yield loading.dismiss();
                this.saving = false;
                // If account was created successfully, send it via service
                if (this.mode === 'create' && result) {
                    console.log('Account created successfully, result:', result);
                    console.log('payInvo data:', this.payInvo);
                    // Get the ID from the API response (the backend returns {message: "513"})
                    const newAccountId = result.message;
                    const accountData = {
                        id: newAccountId,
                        ac_id: this.payInvo.ac_id,
                        sub_name: this.payInvo.sub_name,
                        sub_type: this.payInvo.sub_type,
                        sub_code: this.payInvo.sub_code,
                        sub_balance: this.payInvo.sub_balance,
                        store_id: this.payInvo.store_id,
                        cat_id: this.payInvo.cat_id,
                        cat_name: this.payInvo.cat_name,
                        phone: this.payInvo.phone,
                        address: this.payInvo.address
                    };
                    console.log('Sending account data with ID:', newAccountId, accountData);
                    // Send the new account via service
                    this.accountCommunicationService.setNewAccount(accountData);
                }
                this.navigateBack();
            }
            catch (error) {
                yield loading.dismiss();
                this.saving = false;
                this.presentToast('خطأ في حفظ البيانات', 'danger');
            }
        });
    }
    createAccount() {
        return new Promise((resolve, reject) => {
            // Pass the account object directly, not as an array
            this.api.createAccount(this.payInvo).subscribe((data) => {
                if (data['message'] !== 'Post Not Created') {
                    this.presentToast('تم حفظ الحساب بنجاح', 'success');
                    resolve(data);
                }
                else {
                    this.presentToast('فشل في إنشاء الحساب', 'danger');
                    reject(data);
                }
            }, (error) => {
                this.presentToast('خطأ في الاتصال', 'danger');
                reject(error);
            });
        });
    }
    updateAccount() {
        return new Promise((resolve, reject) => {
            this.api.updateSubAccount(this.payInvo).subscribe((data) => {
                if (data['message'] !== 'Post Not Created') {
                    this.presentToast('تم تحديث الحساب بنجاح', 'success');
                    resolve(data);
                }
                else {
                    this.presentToast('فشل في تحديث الحساب', 'danger');
                    reject(data);
                }
            }, (error) => {
                this.presentToast('خطأ في الاتصال', 'danger');
                reject(error);
            });
        });
    }
    validate() {
        if (!this.payInvo.sub_name || this.payInvo.sub_name.trim() === '') {
            this.presentToast('الرجاء إدخال اسم الحساب', 'danger');
            return false;
        }
        if (!this.payInvo.sub_type || this.payInvo.sub_type === '') {
            this.presentToast('الرجاء اختيار طبيعة الحساب', 'danger');
            return false;
        }
        if (!this.selectedMainAccount.ac_id || this.selectedMainAccount.ac_name === '') {
            this.presentToast('الرجاء اختيار الحساب الرئيسي', 'danger');
            return false;
        }
        return true;
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                color: color,
                cssClass: 'cust_Toast',
                mode: 'ios',
                position: 'top'
            });
            yield toast.present();
        });
    }
    closeModal() {
        this.navigateBack();
    }
    navigateBack() {
        this.navController.back();
    }
    // Delete functionality with safety checks
    deleteAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.mode !== 'edit' || !this.payInvo.id) {
                this.presentToast('لا يمكن حذف حساب غير محفوظ', 'danger');
                return;
            }
            const alert = yield this.alertController.create({
                header: 'تأكيد الحذف',
                message: `هل تريد حذف الحساب "${this.payInvo.sub_name}"؟`,
                buttons: [
                    {
                        text: 'إلغاء',
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'حذف',
                        cssClass: 'danger',
                        handler: () => {
                            this.checkAccountUsageAndDelete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    checkAccountUsageAndDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'جاري التحقق من استخدام الحساب...',
                spinner: 'crescent'
            });
            yield loading.present();
            try {
                // Check if account is used in any transactions
                const canDelete = yield this.checkAccountCanBeDeleted();
                if (canDelete) {
                    // Dismiss the check loading and perform delete
                    yield loading.dismiss();
                    yield this.performDelete();
                }
                else {
                    yield loading.dismiss();
                    this.presentToast('لا يمكن حذف الحساب لأنه مستخدم في معاملات أخرى', 'danger');
                }
            }
            catch (error) {
                yield loading.dismiss();
                this.presentToast('خطأ في التحقق من استخدام الحساب', 'danger');
            }
        });
    }
    checkAccountCanBeDeleted() {
        return new Promise((resolve, reject) => {
            // Check if account is used in journal details (jdetails_from and jdetails_to)
            // Check if account is used in payments (pay.cust_id)
            // Check if account is used in purchases (perch.cust_id)
            this.api.checkAccountUsage(this.payInvo.id).subscribe((data) => {
                console.log('Account usage check result:', data);
                // If the API returns usage data, check if account is used
                if (data && data.data) {
                    const usage = data.data;
                    const hasJournalEntries = (usage.jdetails_from_count || 0) > 0 || (usage.jdetails_to_count || 0) > 0;
                    const hasPayments = (usage.pay_count || 0) > 0;
                    const hasPurchases = (usage.perch_count || 0) > 0;
                    const canDelete = !hasJournalEntries && !hasPayments && !hasPurchases;
                    if (!canDelete) {
                        console.log('Account cannot be deleted. Usage:', {
                            journalEntries: hasJournalEntries,
                            payments: hasPayments,
                            purchases: hasPurchases
                        });
                    }
                    resolve(canDelete);
                }
                else {
                    // If no usage data returned, assume it's safe to delete
                    resolve(true);
                }
            }, (error) => {
                console.error('Error checking account usage:', error);
                reject(error);
            });
        });
    }
    performDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const deleteLoading = yield this.loadingController.create({
                message: 'جاري حذف الحساب...',
                spinner: 'crescent'
            });
            yield deleteLoading.present();
            try {
                const deleteResult = yield this.deleteAccountFromServer();
                yield deleteLoading.dismiss();
                if (deleteResult) {
                    this.presentToast('تم حذف الحساب بنجاح', 'success');
                    this.navigateBack();
                }
                else {
                    this.presentToast('فشل في حذف الحساب', 'danger');
                }
            }
            catch (error) {
                yield deleteLoading.dismiss();
                this.presentToast('خطأ في حذف الحساب', 'danger');
            }
        });
    }
    deleteAccountFromServer() {
        return new Promise((resolve, reject) => {
            this.api.deleteSubAccont(this.payInvo.id).subscribe((data) => {
                if (data['message'] !== 'Post Not Deleted') {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }, (error) => {
                reject(error);
            });
        });
    }
};
AccountModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _services_account_communication_service__WEBPACK_IMPORTED_MODULE_4__.AccountCommunicationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef }
];
AccountModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-account-modal',
        template: _account_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountModalPage);



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

/***/ 15921:
/*!******************************************************************!*\
  !*** ./src/app/account-modal/account-modal.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/* ========================================\n   ACCOUNT MODAL LIQUID GLASS DESIGN\n   Matching the liquid glass theme\n======================================== */\n/* Core Liquid Glass Variables */\n:root {\n  /* Glass Material Properties */\n  --liquid-glass-bg: rgba(255, 255, 255, 0.15);\n  --liquid-glass-bg-light: rgba(255, 255, 255, 0.25);\n  --liquid-glass-bg-dark: rgba(0, 0, 0, 0.15);\n  --liquid-glass-border: rgba(255, 255, 255, 0.2);\n  --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  --liquid-glass-highlight: rgba(255, 255, 255, 0.4);\n  /* Blur and Effects */\n  --glass-blur: 20px;\n  --glass-border-radius: 20px;\n  --glass-border-radius-small: 12px;\n  /* Dynamic Colors */\n  --glass-accent-primary: rgba(0, 122, 255, 0.8);\n  --glass-accent-success: rgba(52, 199, 89, 0.8);\n  --glass-accent-danger: rgba(255, 59, 48, 0.8);\n  /* Animation Properties */\n  --glass-transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\n}\n/* Dark Mode Glass Variables */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --liquid-glass-bg: rgba(0, 0, 0, 0.25);\n    --liquid-glass-bg-light: rgba(255, 255, 255, 0.1);\n    --liquid-glass-bg-dark: rgba(0, 0, 0, 0.4);\n    --liquid-glass-border: rgba(255, 255, 255, 0.1);\n    --liquid-glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n    --liquid-glass-highlight: rgba(255, 255, 255, 0.2);\n  }\n}\n/* ========================================\n   TRANSPARENT HEADER STYLES\n======================================== */\n.transparent-header {\n  background: transparent;\n  box-shadow: none;\n  border: none;\n}\n.transparent-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  --border-color: transparent;\n  --color: rgba(0, 0, 0, 0.8);\n  --min-height: 60px;\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  /* Glass material effect */\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%);\n  /* Subtle border only at bottom */\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  /* Glass reflection */\n}\n.transparent-header ion-toolbar::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);\n  opacity: 0.6;\n  pointer-events: none;\n}\n.transparent-toolbar .glass-title {\n  color: rgba(0, 0, 0, 0.8);\n  font-weight: 700;\n  font-size: 1.1rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.transparent-toolbar ion-button {\n  --background: rgba(255, 255, 255, 0.15);\n  --color: rgba(0, 0, 0, 0.8);\n  --border-radius: var(--glass-border-radius-small);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: var(--glass-transition);\n}\n.transparent-toolbar ion-button:hover {\n  --background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.transparent-toolbar ion-button[color=primary] {\n  --background: var(--glass-accent-primary);\n  --color: white;\n  border-color: var(--glass-accent-primary);\n}\n.transparent-toolbar ion-button[color=primary]:hover {\n  --background: rgba(0, 122, 255, 0.9);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n/* ========================================\n   MAIN CONTENT STYLES\n======================================== */\n.modern-content {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);\n  background-size: 400% 400%;\n  animation: gradientShift 15s ease infinite;\n  min-height: 100vh;\n  direction: rtl;\n  --color: rgba(0, 0, 0, 0.8);\n  padding: 0;\n}\n@keyframes gradientShift {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.form-container {\n  padding: 1.5rem;\n  max-width: 800px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  min-height: 100vh;\n}\n/* ========================================\n   ACCOUNT CARD STYLES\n======================================== */\n.account-card {\n  margin: 0;\n  border-radius: var(--glass-border-radius);\n  background: var(--liquid-glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 0.5px solid rgba(128, 128, 128, 0.3);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1), var(--liquid-glass-shadow), 0 0 0 1px var(--liquid-glass-highlight) inset, 0 1px 0 var(--liquid-glass-highlight) inset;\n  overflow: hidden;\n  position: relative;\n  transition: var(--glass-transition);\n  /* 3D Perspective */\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  /* Glass Reflection Effect */\n}\n.account-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(180deg, var(--liquid-glass-highlight) 0%, transparent 100%);\n  opacity: 0.3;\n  pointer-events: none;\n  border-radius: var(--glass-border-radius) var(--glass-border-radius) 0 0;\n  z-index: 1;\n}\n.account-card ion-card-header {\n  background: var(--ion-color-primary, #3880ff);\n  color: white;\n  padding: 1.5rem;\n  position: relative;\n  z-index: 2;\n}\n.account-card ion-card-header ion-card-title {\n  color: white;\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 0;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.account-card ion-card-content {\n  padding: 2rem;\n  position: relative;\n  z-index: 2;\n  background: transparent;\n}\n/* ========================================\n   FORM STYLES\n======================================== */\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n  align-items: start;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group.full-width {\n  grid-column: 1/-1;\n}\n.form-label {\n  color: rgba(0, 0, 0, 0.8);\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.form-input {\n  --background: rgba(255, 255, 255, 0.3);\n  --color: rgba(0, 0, 0, 0.8);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.75rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  transition: var(--glass-transition);\n  font-size: 0.9rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.form-input:focus-within {\n  --background: rgba(255, 255, 255, 0.4);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);\n  transform: translateY(-2px);\n}\n.form-select {\n  --background: rgba(255, 255, 255, 0.3);\n  --color: rgba(0, 0, 0, 0.8);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.75rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  transition: var(--glass-transition);\n  font-size: 0.9rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n}\n.form-select:focus-within {\n  --background: rgba(255, 255, 255, 0.4);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);\n  transform: translateY(-2px);\n  z-index: 10;\n}\n.form-select.select-expanded {\n  z-index: 100;\n  transform: translateY(-2px);\n}\n.form-textarea {\n  --background: rgba(255, 255, 255, 0.3);\n  --color: rgba(0, 0, 0, 0.8);\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.75rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  transition: var(--glass-transition);\n  font-size: 0.9rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  resize: vertical;\n}\n.form-textarea:focus-within {\n  --background: rgba(255, 255, 255, 0.4);\n  border-color: var(--glass-accent-primary);\n  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);\n  transform: translateY(-2px);\n}\n/* ========================================\n   RADIO GROUP STYLES\n======================================== */\n.radio-group .radio-options {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n.radio-group .radio-options .radio-item {\n  --background: rgba(255, 255, 255, 0.2);\n  --color: rgba(0, 0, 0, 0.8);\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.5rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  transition: var(--glass-transition);\n  margin: 0;\n}\n.radio-group .radio-options .radio-item:hover {\n  --background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n.radio-group .radio-options .radio-item ion-radio {\n  --color: var(--glass-accent-primary);\n  --color-checked: var(--glass-accent-primary);\n}\n.radio-group .radio-options .radio-item ion-label {\n  color: rgba(0, 0, 0, 0.8);\n  font-weight: 500;\n  font-size: 0.9rem;\n  margin-left: 0.5rem;\n}\n/* ========================================\n   ACTION BUTTONS\n======================================== */\n.action-buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  gap: 1rem;\n  margin-top: auto;\n  padding-top: 1rem;\n}\n.action-buttons-container {\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.buttons-row {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  align-items: center;\n}\n.action-btn {\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: var(--glass-transition);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  width: 200px;\n  max-width: 100%;\n}\n.action-btn:hover:not([disabled]) {\n  transform: translateY(-2px);\n}\n.action-btn ion-icon {\n  font-size: 1rem;\n}\n.cancel-btn {\n  --background: transparent;\n  --color: rgba(0, 0, 0, 0.6);\n  --border-color: rgba(255, 255, 255, 0.5);\n  --border-radius: var(--glass-border-radius-small);\n  --padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: var(--glass-transition);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.cancel-btn:hover {\n  --background: rgba(255, 255, 255, 0.2);\n  --color: rgba(0, 0, 0, 0.8);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);\n}\n.save-btn {\n  --background: var(--glass-accent-primary);\n  --color: white;\n  border: 1px solid var(--glass-accent-primary);\n  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.2);\n}\n.save-btn:hover:not([disabled]) {\n  --background: rgba(0, 122, 255, 0.9);\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n.save-btn[disabled] {\n  --background: rgba(0, 122, 255, 0.5);\n  --color: rgba(255, 255, 255, 0.7);\n  opacity: 0.6;\n}\n.delete-btn {\n  --background: var(--glass-accent-danger);\n  --color: white;\n  border: 1px solid var(--glass-accent-danger);\n  box-shadow: 0 2px 8px rgba(255, 59, 48, 0.2);\n}\n.delete-btn:hover:not([disabled]) {\n  --background: rgba(255, 59, 48, 0.9);\n  box-shadow: 0 4px 12px rgba(255, 59, 48, 0.3);\n}\n/* ========================================\n   RESPONSIVE DESIGN\n======================================== */\n@media (max-width: 768px) {\n  .form-container {\n    padding: 1rem;\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n\n  .action-buttons {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n\n  .action-buttons-container {\n    margin-top: 1rem;\n    padding-top: 0.75rem;\n  }\n\n  .buttons-row {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n\n  .action-btn {\n    width: 100%;\n    max-width: 250px;\n  }\n\n  .account-card ion-card-header {\n    padding: 1rem;\n  }\n  .account-card ion-card-content {\n    padding: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .form-container {\n    padding: 0.5rem;\n  }\n\n  .radio-group .radio-options {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7MENBQUE7QUFLQSxnQ0FBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtEQUFBO0VBQ0EsMkNBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esa0RBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUVBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSw4Q0FBQTtFQUNBLDZDQUFBO0VBRUEseUJBQUE7RUFDQSwyREFBQTtBQUhGO0FBTUEsOEJBQUE7QUFDQTtFQUNFO0lBQ0Usc0NBQUE7SUFDQSxpREFBQTtJQUNBLDBDQUFBO0lBQ0EsK0NBQUE7SUFDQSxvREFBQTtJQUNBLGtEQUFBO0VBSEY7QUFDRjtBQU1BOzswQ0FBQTtBQUlBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFMRjtBQU9FO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFFQSwwQkFBQTtFQUNBLGdJQUFBO0VBT0EsaUNBQUE7RUFDQSxpREFBQTtFQUVBLHFCQUFBO0FBYko7QUFjSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrRkFBQTtFQUtBLFlBQUE7RUFDQSxvQkFBQTtBQWhCTjtBQXNCRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FBbkJKO0FBc0JFO0VBQ0UsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLGlEQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7QUFwQko7QUFzQkk7RUFDRSx1Q0FBQTtFQUNBLDJCQUFBO0FBcEJOO0FBdUJJO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VB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QTZERTtFQUNFLG9DQUFBO0VBQ0EsNkNBQUE7QUEzREo7QUErREE7OzBDQUFBO0FBSUE7RUFDRTtJQUNFLGFBQUE7RUE3REY7O0VBZ0VBO0lBQ0UsMEJBQUE7SUFDQSxTQUFBO0VBN0RGOztFQWdFQTtJQUNFLDBCQUFBO0lBQ0EsWUFBQTtFQTdERjs7RUFnRUE7SUFDRSxnQkFBQTtJQUNBLG9CQUFBO0VBN0RGOztFQWdFQTtJQUNFLHNCQUFBO0lBQ0EsWUFBQTtFQTdERjs7RUFnRUE7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUE3REY7O0VBaUVFO0lBQ0UsYUFBQTtFQTlESjtFQWlFRTtJQUNFLGFBQUE7RUEvREo7QUFDRjtBQW1FQTtFQUNFO0lBQ0UsZUFBQTtFQWpFRjs7RUFvRUE7SUFDRSxzQkFBQTtJQUNBLFdBQUE7RUFqRUY7QUFDRiIsImZpbGUiOiJhY2NvdW50LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEFDQ09VTlQgTU9EQUwgTElRVUlEIEdMQVNTIERFU0lHTlxuICAgTWF0Y2hpbmcgdGhlIGxpcXVpZCBnbGFzcyB0aGVtZVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKiBDb3JlIExpcXVpZCBHbGFzcyBWYXJpYWJsZXMgKi9cbjpyb290IHtcbiAgLyogR2xhc3MgTWF0ZXJpYWwgUHJvcGVydGllcyAqL1xuICAtLWxpcXVpZC1nbGFzcy1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWJnLWRhcms6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC0tbGlxdWlkLWdsYXNzLWJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAtLWxpcXVpZC1nbGFzcy1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIFxuICAvKiBCbHVyIGFuZCBFZmZlY3RzICovXG4gIC0tZ2xhc3MtYmx1cjogMjBweDtcbiAgLS1nbGFzcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGw6IDEycHg7XG4gIFxuICAvKiBEeW5hbWljIENvbG9ycyAqL1xuICAtLWdsYXNzLWFjY2VudC1wcmltYXJ5OiByZ2JhKDAsIDEyMiwgMjU1LCAwLjgpO1xuICAtLWdsYXNzLWFjY2VudC1zdWNjZXNzOiByZ2JhKDUyLCAxOTksIDg5LCAwLjgpO1xuICAtLWdsYXNzLWFjY2VudC1kYW5nZXI6IHJnYmEoMjU1LCA1OSwgNDgsIDAuOCk7XG4gIFxuICAvKiBBbmltYXRpb24gUHJvcGVydGllcyAqL1xuICAtLWdsYXNzLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbn1cblxuLyogRGFyayBNb2RlIEdsYXNzIFZhcmlhYmxlcyAqL1xuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICA6cm9vdCB7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmc6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYmctbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtLWxpcXVpZC1nbGFzcy1iZy1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgLS1saXF1aWQtZ2xhc3MtYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgLS1saXF1aWQtZ2xhc3Mtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBUUkFOU1BBUkVOVCBIRUFERVIgU1RZTEVTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi50cmFuc3BhcmVudC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAtLW1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIFxuICAgIC8qIEdsYXNzIG1hdGVyaWFsIGVmZmVjdCAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSkgMCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMTAwJVxuICAgICk7XG4gICAgXG4gICAgLyogU3VidGxlIGJvcmRlciBvbmx5IGF0IGJvdHRvbSAqL1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgXG4gICAgLyogR2xhc3MgcmVmbGVjdGlvbiAqL1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxODBkZWcsXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAwJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICAgKTtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4udHJhbnNwYXJlbnQtdG9vbGJhciB7XG4gIC5nbGFzcy10aXRsZSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB9XG4gICAgXG4gICAgJltjb2xvcj1cInByaW1hcnlcIl0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMiwgMjU1LCAwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAxMjIsIDI1NSwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTUFJTiBDT05URU5UIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubW9kZXJuLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTM1ZGVnLFxuICAgICM2NjdlZWEgMCUsXG4gICAgIzc2NGJhMiA1MCUsXG4gICAgIzY2N2VlYSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICBhbmltYXRpb246IGdyYWRpZW50U2hpZnQgMTVzIGVhc2UgaW5maW5pdGU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBwYWRkaW5nOiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50U2hpZnQge1xuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTsgfVxuICA1MCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTsgfVxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlOyB9XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQUNDT1VOVCBDQVJEIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uYWNjb3VudC1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlxdWlkLWdsYXNzLWJnKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKHZhcigtLWdsYXNzLWJsdXIpKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIodmFyKC0tZ2xhc3MtYmx1cikpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIHZhcigtLWxpcXVpZC1nbGFzcy1zaGFkb3cpLFxuICAgIDAgMCAwIDFweCB2YXIoLS1saXF1aWQtZ2xhc3MtaGlnaGxpZ2h0KSBpbnNldCxcbiAgICAwIDFweCAwIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIGluc2V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBcbiAgLyogM0QgUGVyc3BlY3RpdmUgKi9cbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgXG4gIC8qIEdsYXNzIFJlZmxlY3Rpb24gRWZmZWN0ICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHZhcigtLWxpcXVpZC1nbGFzcy1oaWdobGlnaHQpIDAlLFxuICAgICAgdHJhbnNwYXJlbnQgMTAwJVxuICAgICk7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMpIHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMpIDAgMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIFxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBGT1JNIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uZm9ybS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdhcDogMS41cmVtO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIFxuICAmLmZ1bGwtd2lkdGgge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gIH1cbn1cblxuLmZvcm0tbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmZvcm0taW5wdXQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIC0tcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cbn1cblxuLmZvcm0tc2VsZWN0IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICAtLXBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ2xhc3MtdHJhbnNpdGlvbik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMjIsIDI1NSwgMC4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgXG4gICYuc2VsZWN0LWV4cGFuZGVkIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG59XG5cbi5mb3JtLXRleHRhcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIC0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWdsYXNzLWJvcmRlci1yYWRpdXMtc21hbGwpO1xuICAtLXBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIFxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nbGFzcy1hY2NlbnQtcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFJBRElPIEdST1VQIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ucmFkaW8tZ3JvdXAge1xuICAucmFkaW8tb3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIFxuICAgIC5yYWRpby1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgICAgIC0tcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0tZ2xhc3MtYWNjZW50LXByaW1hcnkpO1xuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEFDVElPTiBCVVRUT05TXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLmFjdGlvbi1idXR0b25zLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5idXR0b25zLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1nbGFzcy1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbiAgLS1wYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLWdsYXNzLXRyYW5zaXRpb24pO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgXG4gICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cbiAgXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmNhbmNlbC1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tZ2xhc3MtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4gIC0tcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1nbGFzcy10cmFuc2l0aW9uKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBcbiAgJjpob3ZlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgLS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgfVxufVxuXG4uc2F2ZS1idG4ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdsYXNzLWFjY2VudC1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMik7XG4gIFxuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMiwgMjU1LCAwLjkpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAxMjIsIDI1NSwgMC4zKTtcbiAgfVxuICBcbiAgJltkaXNhYmxlZF0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAxMjIsIDI1NSwgMC41KTtcbiAgICAtLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1hY2NlbnQtZGFuZ2VyKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdsYXNzLWFjY2VudC1kYW5nZXIpO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyNTUsIDU5LCA0OCwgMC4yKTtcbiAgXG4gICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCA1OSwgNDgsIDAuOSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDI1NSwgNTksIDQ4LCAwLjMpO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFJFU1BPTlNJVkUgREVTSUdOXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICBcbiAgLmFjdGlvbi1idXR0b25zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnV0dG9ucy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gIH1cbiAgXG4gIC5idXR0b25zLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICB9XG4gIFxuICAuYWNjb3VudC1jYXJkIHtcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbiAgXG4gIC5yYWRpby1ncm91cCAucmFkaW8tb3B0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 11691:
/*!******************************************************************!*\
  !*** ./src/app/account-modal/account-modal.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"transparent-header\">\n  <ion-toolbar class=\"transparent-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navigateBack()\" fill=\"clear\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"glass-title\">\n      {{ mode === 'create' ? 'إنشاء حساب جديد' : 'تعديل الحساب' }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"modern-content\">\n  <div class=\"form-container\">\n    <!-- Account Data Card -->\n    <ion-card class=\"account-card\">\n      <ion-card-header>\n        <ion-card-title>بيانات الحساب</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"form-grid\">\n          <!-- Account Name -->\n          <div class=\"form-group\">\n            <ion-label position=\"stacked\" class=\"form-label\">اسم الحساب *</ion-label>\n            <ion-input\n              [(ngModel)]=\"payInvo.sub_name\"\n              placeholder=\"أدخل اسم الحساب\"\n              class=\"form-input\"\n              type=\"text\"\n              required>\n            </ion-input>\n          </div>\n\n          <!-- Main Account -->\n          <div class=\"form-group\">\n            <ion-label position=\"stacked\" class=\"form-label\">الحساب الرئيسي *</ion-label>\n            <ion-select\n              [(ngModel)]=\"selectedMainAccount.ac_name\"\n              (ionChange)=\"pickMainAccount($event)\"\n              placeholder=\"اختر الحساب الرئيسي\"\n              class=\"form-select\"\n              interface=\"alert\"\n              [interfaceOptions]=\"{ header: 'اختر الحساب الرئيسي' }\">\n              <ion-select-option *ngFor=\"let mainAcc of main_account\" [value]=\"mainAcc.ac_name\">\n                {{mainAcc.ac_name}}\n              </ion-select-option>\n            </ion-select>\n            <div *ngIf=\"main_account.length === 0\" class=\"loading-text\">\n              جاري تحميل الحسابات الرئيسية...\n            </div>\n          </div>\n\n          <!-- Account Code -->\n          <div class=\"form-group\">\n            <ion-label position=\"stacked\" class=\"form-label\">كود الحساب</ion-label>\n            <ion-input\n              [(ngModel)]=\"payInvo.sub_code\"\n              placeholder=\"أدخل كود الحساب\"\n              class=\"form-input\"\n              type=\"text\">\n            </ion-input>\n          </div>\n\n          <!-- Opening Balance -->\n          <div class=\"form-group\">\n            <ion-label position=\"stacked\" class=\"form-label\">الرصيد الافتتاحي</ion-label>\n            <ion-input\n              [(ngModel)]=\"payInvo.sub_balance\"\n              placeholder=\"0.00\"\n              class=\"form-input\"\n              type=\"number\"\n              step=\"0.01\">\n            </ion-input>\n          </div>\n\n\n          <!-- Account Category -->\n          <div class=\"form-group\">\n            <ion-label position=\"stacked\" class=\"form-label\">تصنيف الحساب</ion-label>\n            <ion-select\n              [value]=\"selectedCategory.cat_name\"\n              (ionChange)=\"pickAccountCategory($event)\"\n              placeholder=\"اختر التصنيف\"\n              class=\"form-select\"\n              interface=\"alert\"\n              [interfaceOptions]=\"{ header: 'اختر التصنيف' }\">\n              <ion-select-option *ngFor=\"let category of account_category\" [value]=\"category.cat_name\">\n                {{category.cat_name}}\n              </ion-select-option>\n            </ion-select>\n            <div *ngIf=\"account_category.length === 0\" class=\"loading-text\">\n              جاري تحميل التصنيفات...\n            </div>\n          </div>\n\n          <!-- Phone - Only show for categories 1 and 2 (عملاء, موردين) -->\n          <div class=\"form-group\" *ngIf=\"shouldShowPhoneAndAddress()\">\n            <ion-label position=\"stacked\" class=\"form-label\">الهاتف</ion-label>\n            <ion-input\n              [(ngModel)]=\"payInvo.phone\"\n              placeholder=\"أدخل رقم الهاتف\"\n              class=\"form-input\"\n              type=\"tel\">\n            </ion-input>\n          </div>\n\n          <!-- Address - Only show for categories 1 and 2 (عملاء, موردين) -->\n          <div class=\"form-group full-width\" *ngIf=\"shouldShowPhoneAndAddress()\">\n            <ion-label position=\"stacked\" class=\"form-label\">العنوان</ion-label>\n            <ion-textarea\n              [(ngModel)]=\"payInvo.address\"\n              placeholder=\"أدخل العنوان\"\n              class=\"form-textarea\"\n              rows=\"3\"\n              maxlength=\"500\">\n            </ion-textarea>\n          </div>\n        </div>\n        \n        <!-- Action Buttons -->\n        <div class=\"action-buttons-container\">\n          <div class=\"buttons-row\">\n            <ion-button \n              (click)=\"save()\" \n              fill=\"solid\" \n              color=\"primary\" \n              class=\"action-btn save-btn\"\n              [disabled]=\"saving\">\n              <ion-icon *ngIf=\"!saving\" name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n              <ion-spinner *ngIf=\"saving\" name=\"crescent\" slot=\"start\"></ion-spinner>\n              {{ mode === 'create' ? 'إنشاء الحساب' : 'تحديث الحساب' }}\n            </ion-button>\n            <ion-button \n              *ngIf=\"mode === 'edit'\" \n              (click)=\"deleteAccount()\" \n              fill=\"solid\" \n              color=\"danger\" \n              class=\"action-btn delete-btn\">\n              <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n              حذف الحساب\n            </ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_account-modal_account-modal_page_ts.js.map
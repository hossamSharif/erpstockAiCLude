"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_data-verification_data-verification_module_ts"],{

/***/ 78027:
/*!***********************************************************************!*\
  !*** ./src/app/data-verification/data-verification-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataVerificationPageRoutingModule": () => (/* binding */ DataVerificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _data_verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-verification.page */ 94135);




const routes = [
    {
        path: '',
        component: _data_verification_page__WEBPACK_IMPORTED_MODULE_0__.DataVerificationPage
    }
];
let DataVerificationPageRoutingModule = class DataVerificationPageRoutingModule {
};
DataVerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DataVerificationPageRoutingModule);



/***/ }),

/***/ 57083:
/*!***************************************************************!*\
  !*** ./src/app/data-verification/data-verification.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataVerificationPageModule": () => (/* binding */ DataVerificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _data_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-verification-routing.module */ 78027);
/* harmony import */ var _data_verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-verification.page */ 94135);







let DataVerificationPageModule = class DataVerificationPageModule {
};
DataVerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _data_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.DataVerificationPageRoutingModule
        ],
        declarations: [_data_verification_page__WEBPACK_IMPORTED_MODULE_1__.DataVerificationPage]
    })
], DataVerificationPageModule);



/***/ }),

/***/ 94135:
/*!*************************************************************!*\
  !*** ./src/app/data-verification/data-verification.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataVerificationPage": () => (/* binding */ DataVerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _data_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-verification.page.html?ngResource */ 12415);
/* harmony import */ var _data_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-verification.page.scss?ngResource */ 18843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _services_data_verification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-verification.service */ 23614);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stockService/services.service */ 91472);









let DataVerificationPage = class DataVerificationPage {
    constructor(verificationService, loadingCtrl, toastCtrl, storage, router, api) {
        this.verificationService = verificationService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.router = router;
        this.api = api;
        // Expose Math to template
        this.Math = Math;
        // Segment control (sales or purchase)
        this.selectedType = 'sales';
        // Verification results
        this.verificationResults = [];
        this.summary = null;
        // Loading state
        this.isVerifying = false;
        // Batch verification state
        this.currentBatch = 0;
        this.totalInvoicesCount = 0;
        this.totalErrorCount = 0;
        this.totalOkCount = 0;
        this.hasMoreInvoices = false;
        this.totalBatches = 0;
        // Store and year info from Ionic Storage
        this.store_info = null;
        this.year = null;
        this.user_info = null;
        // Filter for results table
        this.filterStatus = 'all';
    }
    ngOnInit() {
        // Load store and year info from Ionic Storage
        this.getAppInfo();
    }
    /**
     * Load store and year information from Ionic Storage
     */
    getAppInfo() {
        this.storage.get('STORE_INFO').then((response) => {
            if (response) {
                this.store_info = response;
                console.log('Store info loaded:', this.store_info);
            }
        });
        this.storage.get('year').then((response) => {
            if (response) {
                this.year = response;
                console.log('Year loaded:', this.year);
            }
        });
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.user_info = response;
                console.log('User info loaded:', this.user_info);
            }
        });
    }
    /**
     * Check if store and year info are loaded
     */
    isDataLoaded() {
        return this.store_info !== null && this.year !== null;
    }
    /**
     * Handle segment change (Sales/Purchase)
     */
    onSegmentChange(event) {
        this.selectedType = event.detail.value;
        // Clear previous results when switching types
        this.clearResults();
    }
    /**
     * Clear results
     */
    clearResults() {
        this.verificationResults = [];
        this.summary = null;
        this.currentBatch = 0;
        this.totalInvoicesCount = 0;
        this.totalErrorCount = 0;
        this.totalOkCount = 0;
        this.hasMoreInvoices = false;
        this.totalBatches = 0;
    }
    /**
     * Verify first batch of invoices (20 invoices)
     */
    verifyAllInvoices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isVerifying) {
                return;
            }
            // Check if store and year info are loaded
            if (!this.isDataLoaded()) {
                this.showToast('Store and year information not loaded. Please try again.', 'danger');
                return;
            }
            // Reset batch state and clear previous results
            this.clearResults();
            const loading = yield this.loadingCtrl.create({
                message: `Verifying ${this.selectedType === 'sales' ? 'Sales' : 'Purchase'} Invoices (Batch 1)...`,
                spinner: 'crescent'
            });
            yield loading.present();
            this.isVerifying = true;
            this.verificationService.verifyInvoicesBatch(this.store_info.id, this.year.id, this.selectedType, 0, 20)
                .subscribe({
                next: (summary) => {
                    // Store batch results
                    this.verificationResults = summary.results;
                    this.totalInvoicesCount = summary.totalInvoices;
                    this.totalErrorCount = summary.errorCount;
                    this.totalOkCount = summary.okCount;
                    this.hasMoreInvoices = summary.hasMore || false;
                    this.currentBatch = (summary.currentBatch || 0) + 1; // Next batch to load
                    this.totalBatches = summary.totalBatches || 0;
                    // Update summary for display
                    this.summary = {
                        totalInvoices: this.totalInvoicesCount,
                        errorCount: this.totalErrorCount,
                        okCount: this.totalOkCount,
                        accuracy: this.verificationResults.length > 0
                            ? (this.totalOkCount / this.verificationResults.length) * 100
                            : 100,
                        results: this.verificationResults
                    };
                    this.isVerifying = false;
                    loading.dismiss();
                    // Show toast with summary
                    const checkedCount = this.verificationResults.length;
                    const remainingCount = this.totalInvoicesCount - checkedCount;
                    this.showToast(`Batch 1 Complete: ${checkedCount}/${this.totalInvoicesCount} invoices checked, ${summary.errorCount} errors found${this.hasMoreInvoices ? `. ${remainingCount} more to check.` : ''}`, summary.errorCount > 0 ? 'warning' : 'success');
                },
                error: (error) => {
                    console.error('Error during verification:', error);
                    this.isVerifying = false;
                    loading.dismiss();
                    this.showToast('Error during verification. Please try again.', 'danger');
                }
            });
        });
    }
    /**
     * Load and verify next batch of invoices
     */
    loadMoreInvoices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isVerifying || !this.hasMoreInvoices) {
                return;
            }
            // Check if store and year info are loaded
            if (!this.isDataLoaded()) {
                this.showToast('Store and year information not loaded. Please try again.', 'danger');
                return;
            }
            const batchNum = this.currentBatch;
            const loading = yield this.loadingCtrl.create({
                message: `Verifying ${this.selectedType === 'sales' ? 'Sales' : 'Purchase'} Invoices (Batch ${batchNum + 1})...`,
                spinner: 'crescent'
            });
            yield loading.present();
            this.isVerifying = true;
            this.verificationService.verifyInvoicesBatch(this.store_info.id, this.year.id, this.selectedType, batchNum, 20)
                .subscribe({
                next: (summary) => {
                    // Append new results to existing results
                    this.verificationResults = [...this.verificationResults, ...summary.results];
                    // Update cumulative counts
                    this.totalErrorCount += summary.errorCount;
                    this.totalOkCount += summary.okCount;
                    this.hasMoreInvoices = summary.hasMore || false;
                    this.currentBatch = (summary.currentBatch || 0) + 1; // Next batch to load
                    // Update summary for display
                    this.summary = {
                        totalInvoices: this.totalInvoicesCount,
                        errorCount: this.totalErrorCount,
                        okCount: this.totalOkCount,
                        accuracy: this.verificationResults.length > 0
                            ? (this.totalOkCount / this.verificationResults.length) * 100
                            : 100,
                        results: this.verificationResults
                    };
                    this.isVerifying = false;
                    loading.dismiss();
                    // Show toast with summary
                    const checkedCount = this.verificationResults.length;
                    const remainingCount = this.totalInvoicesCount - checkedCount;
                    this.showToast(`Batch ${batchNum + 1} Complete: ${checkedCount}/${this.totalInvoicesCount} invoices checked${this.hasMoreInvoices ? `. ${remainingCount} more to check.` : ''}`, 'success');
                },
                error: (error) => {
                    console.error('Error during verification:', error);
                    this.isVerifying = false;
                    loading.dismiss();
                    this.showToast('Error during verification. Please try again.', 'danger');
                }
            });
        });
    }
    /**
     * Get filtered results based on status filter
     */
    getFilteredResults() {
        if (this.filterStatus === 'all') {
            return this.verificationResults;
        }
        return this.verificationResults.filter(r => r.status === this.filterStatus);
    }
    /**
     * Show toast message
     */
    showToast(message, color = 'primary') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 3000,
                color: color,
                position: 'bottom'
            });
            yield toast.present();
        });
    }
    /**
     * Format number to 2 decimal places
     */
    formatNumber(num) {
        return num.toFixed(2);
    }
    /**
     * Get status color
     */
    getStatusColor(status) {
        return status === 'OK' ? 'success' : 'danger';
    }
    /**
     * Get accuracy color based on percentage
     */
    getAccuracyColor(accuracy) {
        if (accuracy >= 95)
            return 'success';
        if (accuracy >= 80)
            return 'warning';
        return 'danger';
    }
    /**
     * Navigate to edit invoice page
     */
    navigateToEditInvoice(result) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Check if required data is loaded
            if (!this.isDataLoaded()) {
                this.showToast('Store and year information not loaded. Please try again.', 'danger');
                return;
            }
            const loading = yield this.loadingCtrl.create({
                message: 'Loading invoice details... | جاري تحميل تفاصيل الفاتورة...',
                spinner: 'crescent'
            });
            yield loading.present();
            // Determine invoice type and fetch details
            if (this.selectedType === 'sales') {
                this.navigateToEditSales(result, loading);
            }
            else {
                this.navigateToEditPurchase(result, loading);
            }
        });
    }
    /**
     * Navigate to edit sales invoice
     */
    navigateToEditSales(result, loading) {
        const pay = Object.assign({ pay_ref: result.invoiceRef, pay_date: result.date, sub_name: result.customerName, tot_pr: result.storedTotal }, result.invoiceData);
        this.api.getPayInvoDetail(this.store_info.id, result.invoiceRef, this.year.id).subscribe({
            next: (data) => {
                let res = data;
                let navigationExtras = {
                    queryParams: {
                        payInvo: JSON.stringify(pay),
                        sub_name: JSON.stringify(result.customerName),
                        user_info: JSON.stringify(this.user_info),
                        store_info: JSON.stringify(this.store_info),
                        itemList: JSON.stringify(res['data'])
                    }
                };
                loading.dismiss();
                this.router.navigate(['folder/edit-sales'], navigationExtras);
            },
            error: (err) => {
                loading.dismiss();
                console.error('Error loading sales invoice details:', err);
                this.showToast('Failed to load invoice details. Please try again. | فشل تحميل تفاصيل الفاتورة.', 'danger');
            }
        });
    }
    /**
     * Navigate to edit purchase invoice
     */
    navigateToEditPurchase(result, loading) {
        const perch = Object.assign({ pay_ref: result.invoiceRef, pay_date: result.date, sub_name: result.customerName, tot_pr: result.storedTotal }, result.invoiceData);
        this.api.getPerchInvoDetail(this.store_info.id, result.invoiceRef, this.year.id).subscribe({
            next: (data) => {
                let res = data;
                let navigationExtras = {
                    queryParams: {
                        perchInvo: JSON.stringify(perch),
                        sub_name: JSON.stringify(result.customerName),
                        user_info: JSON.stringify(this.user_info),
                        store_info: JSON.stringify(this.store_info),
                        itemList: JSON.stringify(res['data'])
                    }
                };
                loading.dismiss();
                this.router.navigate(['folder/edit-perch'], navigationExtras);
            },
            error: (err) => {
                loading.dismiss();
                console.error('Error loading purchase invoice details:', err);
                this.showToast('Failed to load invoice details. Please try again. | فشل تحميل تفاصيل الفاتورة.', 'danger');
            }
        });
    }
};
DataVerificationPage.ctorParameters = () => [
    { type: _services_data_verification_service__WEBPACK_IMPORTED_MODULE_2__.DataVerificationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_4__.ServicesService }
];
DataVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-data-verification',
        template: _data_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_data_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DataVerificationPage);



/***/ }),

/***/ 18843:
/*!**************************************************************************!*\
  !*** ./src/app/data-verification/data-verification.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".stat-box {\n  padding: 15px;\n  border-radius: 8px;\n  background: var(--ion-color-light);\n}\n.stat-box h2 {\n  margin: 10px 0 5px 0;\n  font-size: 2rem;\n  font-weight: bold;\n}\n.stat-box p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n.table-container {\n  overflow-x: auto;\n  width: 100%;\n}\n.verification-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n.verification-table thead {\n  background: var(--ion-color-primary);\n  color: white;\n}\n.verification-table thead th {\n  padding: 12px 8px;\n  text-align: left;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.verification-table tbody tr {\n  border-bottom: 1px solid var(--ion-color-light);\n  transition: background-color 0.2s ease;\n}\n.verification-table tbody tr:hover {\n  background-color: var(--ion-color-light);\n}\n.verification-table tbody tr.error-row {\n  background-color: rgba(var(--ion-color-danger-rgb), 0.05);\n}\n.verification-table tbody tr.error-row:hover {\n  background-color: rgba(var(--ion-color-danger-rgb), 0.1);\n}\n.verification-table tbody tr.ok-row:hover {\n  background-color: var(--ion-color-light);\n}\n.verification-table tbody tr td {\n  padding: 12px 8px;\n}\n.verification-table tbody tr td.difference-highlight {\n  color: var(--ion-color-danger);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .verification-table {\n    font-size: 0.8rem;\n  }\n  .verification-table thead th,\n.verification-table tbody td {\n    padding: 8px 4px;\n  }\n}\nion-card-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\nion-segment ion-segment-button {\n  --indicator-color: var(--ion-color-primary);\n}\nion-segment ion-segment-button ion-label {\n  font-size: 0.9rem;\n}\nion-badge {\n  font-weight: 600;\n  padding: 4px 8px;\n}\nion-icon[size=large] {\n  font-size: 4rem;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBQUY7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBREo7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUhGO0FBS0U7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUFISjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFITjtBQVFJO0VBQ0UsK0NBQUE7RUFDQSxzQ0FBQTtBQU5OO0FBUU07RUFDRSx3Q0FBQTtBQU5SO0FBU007RUFDRSx5REFBQTtBQVBSO0FBU1E7RUFDRSx3REFBQTtBQVBWO0FBWVE7RUFDRSx3Q0FBQTtBQVZWO0FBY007RUFDRSxpQkFBQTtBQVpSO0FBY1E7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0FBWlY7QUFvQkE7RUFDRTtJQUNFLGlCQUFBO0VBakJGO0VBbUJFOztJQUVFLGdCQUFBO0VBakJKO0FBQ0Y7QUFzQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBcEJGO0FBeUJFO0VBQ0UsMkNBQUE7QUF0Qko7QUF3Qkk7RUFDRSxpQkFBQTtBQXRCTjtBQTRCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUF6QkY7QUE2QkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUExQkYiLCJmaWxlIjoiZGF0YS12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3RhdGlzdGljcyBib3hlc1xuLnN0YXQtYm94IHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIGgyIHtcbiAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG59XG5cbi8vIFRhYmxlIHN0eWxlc1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udmVyaWZpY2F0aW9uLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG5cbiAgdGJvZHkge1xuICAgIHRyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgfVxuXG4gICAgICAmLmVycm9yLXJvdyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjA1KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLm9rLXJvdyB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGQge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcblxuICAgICAgICAmLmRpZmZlcmVuY2UtaGlnaGxpZ2h0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIHRhYmxlIG9uIG1vYmlsZVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC52ZXJpZmljYXRpb24tdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuXG4gICAgdGhlYWQgdGgsXG4gICAgdGJvZHkgdGQge1xuICAgICAgcGFkZGluZzogOHB4IDRweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2FyZCBoZWFkZXIgdGl0bGVcbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8vIFNlZ21lbnQgYnV0dG9uIGN1c3RvbWl6YXRpb25cbmlvbi1zZWdtZW50IHtcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgfVxufVxuXG4vLyBCYWRnZSBzdHlsaW5nXG5pb24tYmFkZ2Uge1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA0cHggOHB4O1xufVxuXG4vLyBJbml0aWFsIG1lc3NhZ2UgaWNvblxuaW9uLWljb25bc2l6ZT1cImxhcmdlXCJdIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 12415:
/*!**************************************************************************!*\
  !*** ./src/app/data-verification/data-verification.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Data Verification | التحقق من البيانات</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-padding\">\n    <!-- Header Card with Type Selector and Verify Button -->\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-content>\n            <ion-grid class=\"ion-no-padding\">\n              <ion-row class=\"ion-align-items-center\">\n                <!-- Segment Control -->\n                <ion-col size-xs=\"12\" size-md=\"6\">\n                  <ion-segment [(ngModel)]=\"selectedType\" (ionChange)=\"onSegmentChange($event)\" mode=\"md\">\n                    <ion-segment-button value=\"sales\">\n                      <ion-label>Sales Invoices | فواتير المبيعات</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"purchase\">\n                      <ion-label>Purchase Invoices | فواتير المشتريات</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                </ion-col>\n\n                <!-- Verify Button -->\n                <ion-col size-xs=\"12\" size-md=\"6\" class=\"ion-text-center\">\n                  <ion-button\n                    expand=\"block\"\n                    (click)=\"verifyAllInvoices()\"\n                    [disabled]=\"isVerifying\"\n                    color=\"primary\">\n                    <ion-icon name=\"checkmark-done-outline\" slot=\"start\"></ion-icon>\n                    <ion-label>Verify All | التحقق من الكل</ion-label>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- Summary Statistics Card -->\n    <ion-row *ngIf=\"summary\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Verification Summary | ملخص التحقق</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid class=\"ion-no-padding\">\n              <ion-row>\n                <ion-col size-xs=\"6\" size-md=\"3\" class=\"ion-text-center\">\n                  <div class=\"stat-box\">\n                    <h2>{{ summary.totalInvoices }}</h2>\n                    <p>Total Invoices<br>إجمالي الفواتير</p>\n                  </div>\n                </ion-col>\n                <ion-col size-xs=\"6\" size-md=\"3\" class=\"ion-text-center\">\n                  <div class=\"stat-box success\">\n                    <h2 style=\"color: var(--ion-color-success);\">{{ summary.okCount }}</h2>\n                    <p>Valid<br>صحيحة</p>\n                  </div>\n                </ion-col>\n                <ion-col size-xs=\"6\" size-md=\"3\" class=\"ion-text-center\">\n                  <div class=\"stat-box danger\">\n                    <h2 style=\"color: var(--ion-color-danger);\">{{ summary.errorCount }}</h2>\n                    <p>Errors<br>أخطاء</p>\n                  </div>\n                </ion-col>\n                <ion-col size-xs=\"6\" size-md=\"3\" class=\"ion-text-center\">\n                  <div class=\"stat-box\">\n                    <h2 [style.color]=\"'var(--ion-color-' + getAccuracyColor(summary.accuracy) + ')'\">\n                      {{ formatNumber(summary.accuracy) }}%\n                    </h2>\n                    <p>Accuracy<br>الدقة</p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- Filter Options -->\n    <ion-row *ngIf=\"verificationResults.length > 0\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-content>\n            <ion-segment [(ngModel)]=\"filterStatus\" mode=\"md\">\n              <ion-segment-button value=\"all\">\n                <ion-label>All | الكل ({{ verificationResults.length }})</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"OK\">\n                <ion-label>Valid | صحيحة ({{ summary?.okCount || 0 }})</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"ERROR\">\n                <ion-label>Errors | أخطاء ({{ summary?.errorCount || 0 }})</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- Results Table -->\n    <ion-row *ngIf=\"verificationResults.length > 0\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Verification Results | نتائج التحقق</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"ion-no-padding\">\n            <div class=\"table-container\">\n              <table class=\"verification-table\">\n                <thead>\n                  <tr>\n                    <th>Status | الحالة</th>\n                    <th>Invoice Ref | رقم الفاتورة</th>\n                    <th>Date | التاريخ</th>\n                    <th>Customer/Supplier | العميل/المورد</th>\n                    <th>Stored Total | الإجمالي المحفوظ</th>\n                    <th>Calculated Total | الإجمالي المحسوب</th>\n                    <th>Difference | الفرق</th>\n                    <th>Actions | إجراءات</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let result of getFilteredResults()\"\n                      [class.error-row]=\"result.status === 'ERROR'\"\n                      [class.ok-row]=\"result.status === 'OK'\">\n                    <td class=\"ion-text-center\">\n                      <ion-badge [color]=\"getStatusColor(result.status)\">\n                        {{ result.status }}\n                      </ion-badge>\n                    </td>\n                    <td>{{ result.invoiceRef }}</td>\n                    <td>{{ result.date }}</td>\n                    <td>{{ result.customerName }}</td>\n                    <td class=\"ion-text-end\">{{ formatNumber(result.storedTotal) }}</td>\n                    <td class=\"ion-text-end\">{{ formatNumber(result.calculatedTotal) }}</td>\n                    <td class=\"ion-text-end\" [class.difference-highlight]=\"Math.abs(result.difference) > 0.01\">\n                      {{ formatNumber(result.difference) }}\n                    </td>\n                    <td class=\"ion-text-center\">\n                      <ion-button\n                        fill=\"clear\"\n                        size=\"small\"\n                        (click)=\"navigateToEditInvoice(result)\"\n                        [title]=\"'Edit Invoice | تعديل الفاتورة'\">\n                        <ion-icon name=\"create-outline\" slot=\"icon-only\"></ion-icon>\n                      </ion-button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- Load More Button -->\n    <ion-row *ngIf=\"hasMoreInvoices && verificationResults.length > 0\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\">\n            <p>\n              <strong>{{ verificationResults.length }} / {{ totalInvoicesCount }}</strong> invoices verified<br>\n              <strong>{{ verificationResults.length }} / {{ totalInvoicesCount }}</strong> فاتورة تم التحقق منها\n            </p>\n            <ion-button\n              expand=\"block\"\n              (click)=\"loadMoreInvoices()\"\n              [disabled]=\"isVerifying\"\n              color=\"primary\">\n              <ion-icon name=\"download-outline\" slot=\"start\"></ion-icon>\n              <ion-label>Load Next 20 Invoices | تحميل الـ 20 فاتورة التالية</ion-label>\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- No Results Message -->\n    <ion-row *ngIf=\"!isVerifying && verificationResults.length === 0 && summary\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\">\n            <ion-icon name=\"checkmark-circle-outline\" size=\"large\" color=\"success\"></ion-icon>\n            <h3>No invoices found | لا توجد فواتير</h3>\n            <p>There are no invoices to verify for the selected type.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- Initial Message (Before First Verification) -->\n    <ion-row *ngIf=\"!isVerifying && !summary\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-content class=\"ion-text-center\">\n            <ion-icon name=\"documents-outline\" size=\"large\" color=\"primary\"></ion-icon>\n            <h3>Invoice Data Integrity Verification Tool</h3>\n            <h4>أداة التحقق من سلامة بيانات الفواتير</h4>\n            <p>\n              This tool verifies that invoice totals match the sum of their item details.<br>\n              تتحقق هذه الأداة من أن إجماليات الفواتير تطابق مجموع تفاصيل العناصر.\n            </p>\n            <p>\n              <strong>Verification Formula:</strong><br>\n              Stored Total = (tot_pr - discount)<br>\n              Calculated Total = SUM(quantity × price)<br>\n              <br>\n              <strong>Batch Processing:</strong> Invoices are verified in batches of 20 to prevent server overload.<br>\n              <strong>المعالجة على دفعات:</strong> يتم التحقق من الفواتير على دفعات من 20 لتجنب إرهاق الخادم.\n            </p>\n            <p>\n              Select an invoice type above and click \"Verify All\" to start.<br>\n              اختر نوع الفاتورة أعلاه وانقر على \"التحقق من الكل\" للبدء.\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_data-verification_data-verification_module_ts.js.map
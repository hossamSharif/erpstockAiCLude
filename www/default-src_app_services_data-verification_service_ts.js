"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_data-verification_service_ts"],{

/***/ 23614:
/*!*******************************************************!*\
  !*** ./src/app/services/data-verification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataVerificationService": () => (/* binding */ DataVerificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _stockService_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stockService/services.service */ 91472);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 23815);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 45661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 89258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 51325);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13800);





let DataVerificationService = class DataVerificationService {
    constructor(servicesService) {
        this.servicesService = servicesService;
    }
    /**
     * Verify a single sales invoice with invoice header data
     */
    verifySalesInvoice(pay_ref, store_id, yearId, invoiceHeader) {
        return this.servicesService.getPayInvoDetail(store_id, pay_ref, yearId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
            const details = result.data || [];
            // Calculate the sum of all item totals by multiplying quantity × pay_price
            // For SALES invoices, use pay_price (selling price)
            const calculatedGrossTotal = details.reduce((sum, item) => {
                const quantity = parseFloat(item.quantity) || 0;
                const price = parseFloat(item.pay_price) || 0;
                const itemTotal = quantity * price;
                return sum + itemTotal;
            }, 0);
            // Use invoice header data if provided, otherwise try to get from details
            const invoiceData = invoiceHeader || (details.length > 0 ? details[0] : null);
            const tot_pr = invoiceData ? parseFloat(invoiceData.tot_pr || 0) : 0;
            const discount = invoiceData ? parseFloat(invoiceData.discount || 0) : 0;
            // Apply discount to BOTH sides for fair comparison
            // Stored side: tot_pr - discount
            const storedTotalAfterDiscount = tot_pr - discount;
            // Calculated side: SUM(quantity × price) - discount
            const calculatedTotalAfterDiscount = calculatedGrossTotal - discount;
            // Calculate signed difference: stored - calculated
            // Positive = stored > calculated (stored has extra)
            // Negative = stored < calculated (stored is missing amount)
            const difference = storedTotalAfterDiscount - calculatedTotalAfterDiscount;
            return {
                invoiceRef: pay_ref,
                date: (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.pay_date) || '',
                customerName: (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.sub_name) || 'Unknown',
                storedTotal: storedTotalAfterDiscount,
                calculatedTotal: calculatedTotalAfterDiscount,
                difference: difference,
                status: (Math.abs(difference) < 0.01 ? 'OK' : 'ERROR'),
                details: details,
                invoiceData: invoiceData
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error(`Error verifying sales invoice ${pay_ref}:`, error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
                invoiceRef: pay_ref,
                date: '',
                customerName: 'Error',
                storedTotal: 0,
                calculatedTotal: 0,
                difference: 0,
                status: 'ERROR',
                details: [],
                invoiceData: null
            });
        }));
    }
    /**
     * Verify a single purchase invoice with invoice header data
     */
    verifyPurchaseInvoice(pay_ref, store_id, yearId, invoiceHeader) {
        return this.servicesService.getPerchInvoDetail(store_id, pay_ref, yearId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
            const details = result.data || [];
            // Calculate the sum of all item totals by multiplying quantity × perch_price
            // For PURCHASE invoices, use perch_price (purchase price)
            const calculatedGrossTotal = details.reduce((sum, item) => {
                const quantity = parseFloat(item.quantity) || 0;
                const price = parseFloat(item.perch_price) || 0;
                const itemTotal = quantity * price;
                return sum + itemTotal;
            }, 0);
            // Use invoice header data if provided, otherwise try to get from details
            const invoiceData = invoiceHeader || (details.length > 0 ? details[0] : null);
            const tot_pr = invoiceData ? parseFloat(invoiceData.tot_pr || 0) : 0;
            const discount = invoiceData ? parseFloat(invoiceData.discount || 0) : 0;
            // Apply discount to BOTH sides for fair comparison
            // Stored side: tot_pr - discount
            const storedTotalAfterDiscount = tot_pr - discount;
            // Calculated side: SUM(quantity × price) - discount
            const calculatedTotalAfterDiscount = calculatedGrossTotal - discount;
            // Calculate signed difference: stored - calculated
            // Positive = stored > calculated (stored has extra)
            // Negative = stored < calculated (stored is missing amount)
            const difference = storedTotalAfterDiscount - calculatedTotalAfterDiscount;
            return {
                invoiceRef: pay_ref,
                date: (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.pay_date) || '',
                customerName: (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.sub_name) || 'Unknown',
                storedTotal: storedTotalAfterDiscount,
                calculatedTotal: calculatedTotalAfterDiscount,
                difference: difference,
                status: (Math.abs(difference) < 0.01 ? 'OK' : 'ERROR'),
                details: details,
                invoiceData: invoiceData
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error(`Error verifying purchase invoice ${pay_ref}:`, error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
                invoiceRef: pay_ref,
                date: '',
                customerName: 'Error',
                storedTotal: 0,
                calculatedTotal: 0,
                difference: 0,
                status: 'ERROR',
                details: [],
                invoiceData: null
            });
        }));
    }
    /**
     * Verify invoices in batches to avoid server overload
     */
    verifyInvoicesBatch(store_id, yearId, type, batchNumber = 0, batchSize = 20) {
        // Get all invoices
        const invoicesObservable = type === 'sales'
            ? this.servicesService.getTopSales(store_id, yearId)
            : this.servicesService.getTopPerch(store_id, yearId);
        return invoicesObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            // Handle the "No record Found" message from the API
            if (response.message === 'No record Found' || !response.data) {
                return [];
            }
            return response.data || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error('Error fetching invoices:', error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(allInvoices => {
            // If no invoices, return empty results
            if (!allInvoices || allInvoices.length === 0) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
                    totalInvoices: 0,
                    errorCount: 0,
                    okCount: 0,
                    accuracy: 100,
                    results: [],
                    hasMore: false,
                    currentBatch: 0,
                    totalBatches: 0
                });
            }
            // Calculate batch info
            const totalBatches = Math.ceil(allInvoices.length / batchSize);
            const startIndex = batchNumber * batchSize;
            const endIndex = Math.min(startIndex + batchSize, allInvoices.length);
            const batchInvoices = allInvoices.slice(startIndex, endIndex);
            const hasMore = endIndex < allInvoices.length;
            // If no invoices in this batch
            if (batchInvoices.length === 0) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
                    totalInvoices: allInvoices.length,
                    errorCount: 0,
                    okCount: 0,
                    accuracy: 100,
                    results: [],
                    hasMore: false,
                    currentBatch: batchNumber,
                    totalBatches: totalBatches
                });
            }
            // Create an array of verification observables for this batch
            // Pass the invoice header data to each verification call
            const verificationObservables = batchInvoices.map((invoice) => {
                const pay_ref = invoice.pay_ref;
                return type === 'sales'
                    ? this.verifySalesInvoice(pay_ref, store_id, yearId, invoice)
                    : this.verifyPurchaseInvoice(pay_ref, store_id, yearId, invoice);
            });
            // Execute all verifications in this batch
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(verificationObservables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((results) => {
                const errorCount = results.filter(r => r.status === 'ERROR').length;
                const okCount = results.filter(r => r.status === 'OK').length;
                const accuracy = results.length > 0 ? (okCount / results.length) * 100 : 100;
                return {
                    totalInvoices: allInvoices.length,
                    errorCount: errorCount,
                    okCount: okCount,
                    accuracy: accuracy,
                    results: results,
                    hasMore: hasMore,
                    currentBatch: batchNumber,
                    totalBatches: totalBatches
                };
            }));
        }));
    }
    /**
     * Verify all invoices of a specific type (kept for backward compatibility)
     * @deprecated Use verifyInvoicesBatch instead
     */
    verifyAllInvoices(store_id, yearId, type) {
        // Get all invoices
        const invoicesObservable = type === 'sales'
            ? this.servicesService.getTopSales(store_id, yearId)
            : this.servicesService.getTopPerch(store_id, yearId);
        return invoicesObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            // Handle the "No record Found" message from the API
            if (response.message === 'No record Found' || !response.data) {
                return [];
            }
            return response.data || [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
            console.error('Error fetching invoices:', error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(invoices => {
            // If no invoices, return empty results
            if (!invoices || invoices.length === 0) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
                    totalInvoices: 0,
                    errorCount: 0,
                    okCount: 0,
                    accuracy: 100,
                    results: []
                });
            }
            // Create an array of verification observables
            // Pass the invoice header data to each verification call
            const verificationObservables = invoices.map((invoice) => {
                const pay_ref = invoice.pay_ref;
                return type === 'sales'
                    ? this.verifySalesInvoice(pay_ref, store_id, yearId, invoice)
                    : this.verifyPurchaseInvoice(pay_ref, store_id, yearId, invoice);
            });
            // Execute all verifications in parallel
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(verificationObservables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((results) => {
                const errorCount = results.filter(r => r.status === 'ERROR').length;
                const okCount = results.filter(r => r.status === 'OK').length;
                const accuracy = results.length > 0 ? (okCount / results.length) * 100 : 100;
                return {
                    totalInvoices: results.length,
                    errorCount: errorCount,
                    okCount: okCount,
                    accuracy: accuracy,
                    results: results
                };
            }));
        }));
    }
    /**
     * Verify invoice item details (check if item.tot = item.pay_price * item.quantity)
     */
    verifyItemCalculations(details) {
        const errors = [];
        details.forEach((item, index) => {
            const price = parseFloat(item.pay_price) || 0;
            const quantity = parseFloat(item.quantity) || 0;
            const storedTotal = parseFloat(item.tot) || 0;
            const calculatedTotal = price * quantity;
            const difference = Math.abs(storedTotal - calculatedTotal);
            if (difference >= 0.01) { // Allow 0.01 difference for rounding
                errors.push({
                    itemIndex: index,
                    itemName: item.item_name,
                    price: price,
                    quantity: quantity,
                    storedTotal: storedTotal,
                    calculatedTotal: calculatedTotal,
                    difference: difference
                });
            }
        });
        return {
            valid: errors.length === 0,
            errors: errors
        };
    }
};
DataVerificationService.ctorParameters = () => [
    { type: _stockService_services_service__WEBPACK_IMPORTED_MODULE_0__.ServicesService }
];
DataVerificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], DataVerificationService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_data-verification_service_ts.js.map
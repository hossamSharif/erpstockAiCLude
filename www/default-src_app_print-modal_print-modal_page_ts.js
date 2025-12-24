"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_print-modal_print-modal_page_ts"],{

/***/ 4441:
/*!*************************************************!*\
  !*** ./src/app/print-modal/print-modal.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintModalPage": () => (/* binding */ PrintModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _print_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-modal.page.html?ngResource */ 84669);
/* harmony import */ var _print_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-modal.page.scss?ngResource */ 85602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/currency.service */ 6612);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 52879);
/**
 * PRINT MODAL COMPONENT - ROBUST IMAGE LOADING SOLUTION
 *
 * This component handles printing functionality with enhanced image loading reliability.
 *
 * ISSUE RESOLVED:
 * - logoBase64 and vehicleBase64 images were not consistently displaying in print mode
 * - Race conditions between image loading and printing
 * - Missing fallback mechanisms for production environments
 * - Poor error handling for failed image loads
 *
 * SOLUTION IMPLEMENTED:
 * 1. **Image Loading State Management**:
 *    - Tracks loading state with `imagesLoaded` boolean
 *    - Shows loading spinner until all images are ready
 *    - Prevents printing until images are loaded or timeout occurs
 *
 * 2. **Retry Mechanism with Exponential Backoff**:
 *    - Retries failed image loads up to 3 times
 *    - Uses exponential backoff (1s, 2s, 4s) between retries
 *    - Tries multiple path variations for better compatibility
 *
 * 3. **Fallback Images**:
 *    - Embedded SVG fallback images as base64 strings
 *    - Automatic fallback when original images fail to load
 *    - Ensures printing always has images (even if placeholder)
 *
 * 4. **Enhanced Image Replacement**:
 *    - Multiple regex patterns for different HTML structures
 *    - Handles Angular property bindings and direct src attributes
 *    - Comprehensive replacement verification with logging
 *
 * 5. **Better Error Handling**:
 *    - Graceful degradation when images fail
 *    - User feedback through toast messages
 *    - Console logging for debugging
 *
 * WORKS IN BOTH DEVELOPMENT AND PRODUCTION:
 * - Handles different asset path structures
 * - Compatible with Angular build process
 * - Robust across different deployment scenarios
 *
 * @author Claude Code Assistant
 * @version 2.0 - Enhanced with robust image loading
 */







let PrintModalPage = class PrintModalPage {
    constructor(modalController, toast, currencyService, storage, cdr) {
        this.modalController = modalController;
        this.toast = toast;
        this.currencyService = currencyService;
        this.storage = storage;
        this.cdr = cdr;
        //mode = 'pos'
        this.mode = 'enhanced';
        this.logoBase64 = '';
        this.vehicleBase64 = '';
        this.itemImagesBase64 = {};
        this.categoryId = 1; // Default to category 1
        // Image loading state management
        this.imagesLoaded = false;
        this.imageLoadingAttempts = {};
        this.maxRetryAttempts = 3;
        // Currency management
        this.currentCurrency = 'SDG';
        this.exchangeRate = 1.0;
        // Fallback images as base64 (small placeholder images)
        this.fallbackLogo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjBmMGYwIiBzdHJva2U9IiNjY2MiLz4KPHRLEHT4PSJHVlMiIHg9IjUwIiB5PSI1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY2NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij5HVlM8L3RleHQ+Cjwvc3ZnPg==';
        this.fallbackVehicle = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjBmMGYwIiBzdHJva2U9IiNjY2MiLz4KPHRLEHT4PSLZgNmJ2YTYudmE2YTZhIiB4PSI1MCIgeT0iNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+2YDZidmE2LnZhNmq2YTZh9mE2Yk8L3RleHQ+Cjwvc3ZnPg==';
        this.mode = 'enhanced';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.printArr[0]);
            this.sortItemListAlphabetically();
            yield this.loadCategoryFromStorage();
            yield this.loadImages();
            yield this.initializeCurrencyForPrint();
        });
    }
    ngOnDestroy() {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
    }
    // Get the current vehicle image path based on categoryId
    getVehicleImagePath() {
        return this.categoryId !== 1 ? 'assets/imgs/track.jpg' : 'assets/imgs/tuk.jpg';
    }
    // Utility method to get the appropriate invoice object
    getInvoiceData() {
        if (this.page === 'sales_return' && this.printArr && this.printArr[0].returnInvo) {
            return this.printArr[0].returnInvo;
        }
        else if (this.printArr && this.printArr[0].payInvo) {
            return this.printArr[0].payInvo;
        }
        return {};
    }
    // Get invoice reference number
    getInvoiceRef() {
        const invoiceData = this.getInvoiceData();
        return this.page === 'sales_return' ? (invoiceData.return_ref || '') : (invoiceData.pay_ref || '');
    }
    // Get invoice date
    getInvoiceDate() {
        const invoiceData = this.getInvoiceData();
        return this.page === 'sales_return' ? (invoiceData.return_date || '') : (invoiceData.pay_date || '');
    }
    // Get invoice time
    getInvoiceTime() {
        const invoiceData = this.getInvoiceData();
        return this.page === 'sales_return' ? (invoiceData.return_time || '') : (invoiceData.pay_time || '');
    }
    // Get invoice total
    getInvoiceTotal() {
        const invoiceData = this.getInvoiceData();
        return invoiceData.tot_pr || 0;
    }
    // Get invoice discount
    getInvoiceDiscount() {
        const invoiceData = this.getInvoiceData();
        return invoiceData.discount || 0;
    }
    // Get invoice comment
    getInvoiceComment() {
        const invoiceData = this.getInvoiceData();
        return this.page === 'sales_return' ? (invoiceData.returnComment || invoiceData.return_reason || '') : (invoiceData.payComment || '');
    }
    // Get user name
    getUserName() {
        var _a;
        const invoiceData = this.getInvoiceData();
        return invoiceData.user_name || ((_a = this.printArr[0]) === null || _a === void 0 ? void 0 : _a.user_name) || '';
    }
    initializeCurrencyForPrint() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.currencyService.initializeCurrency();
            this.currentCurrency = this.currencyService.getCurrentCurrencyValue();
            this.exchangeRate = this.currencyService.getExchangeRate(this.currentCurrency);
            this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
                this.currentCurrency = currency;
                this.exchangeRate = this.currencyService.getExchangeRate(currency);
                this.cdr.detectChanges();
            });
            this.addCurrencyToPrintData();
        });
    }
    addCurrencyToPrintData() {
        if (this.printArr && this.printArr[0]) {
            this.printArr[0].currency = {
                code: this.currentCurrency,
                rate: this.exchangeRate,
                baseCurrency: 'SDG'
            };
        }
    }
    formatDualCurrency(amount) {
        if (!amount && amount !== 0)
            return '0.00';
        const convertedAmount = this.currencyService.convertFromSDG(amount, this.currentCurrency);
        const baseCurrency = this.currencyService.formatCurrency(amount, 'SDG');
        const targetCurrency = this.currencyService.formatCurrency(convertedAmount, this.currentCurrency);
        if (this.currentCurrency === 'SDG') {
            return baseCurrency;
        }
        return `${targetCurrency} (${baseCurrency})`;
    }
    getExchangeRateFooter() {
        if (this.currentCurrency === 'SDG')
            return '';
        const today = new Date().toLocaleDateString('en-US');
        return `سعر الصرف المستخدم: 1 ${this.currentCurrency} = ${this.exchangeRate} جنيه سوداني (تاريخ: ${today})`;
    }
    loadCategoryFromStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const storedCategoryId = yield this.storage.get('SELECTED_CATEGORY_ID');
                if (storedCategoryId) {
                    this.categoryId = parseInt(storedCategoryId, 10);
                    console.log('Loaded category ID from storage:', this.categoryId);
                }
                else {
                    this.categoryId = 1; // Default to category 1
                    console.log('No category ID in storage, using default:', this.categoryId);
                }
            }
            catch (error) {
                console.warn('Error loading category from storage:', error);
                this.categoryId = 1; // Fallback to default
            }
        });
    }
    sortItemListAlphabetically() {
        if (!this.printArr[0].itemList || this.printArr[0].itemList.length === 0) {
            return;
        }
        this.printArr[0].itemList = [...this.printArr[0].itemList].sort((a, b) => {
            const nameA = a.item_name ? a.item_name.toString().toLowerCase() : '';
            const nameB = b.item_name ? b.item_name.toString().toLowerCase() : '';
            return nameA.localeCompare(nameB, 'ar', { numeric: true });
        });
    }
    loadImages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Starting image loading process...');
            const imageLoadingPromises = [];
            // Initialize loading attempts
            this.imageLoadingAttempts['logo'] = 0;
            this.imageLoadingAttempts['vehicle'] = 0;
            // Load logo with retry mechanism
            imageLoadingPromises.push(this.loadImageWithRetry('assets/imgs/logo.png', 'logo')
                .then((base64) => {
                this.logoBase64 = base64;
                console.log('Logo loaded successfully');
            })
                .catch((error) => {
                console.warn('Failed to load logo after retries, using fallback:', error);
                this.logoBase64 = this.fallbackLogo;
            }));
            // Load vehicle image with retry mechanism - conditional based on categoryId
            const vehicleImagePath = this.categoryId !== 1 ? 'assets/imgs/track.jpg' : 'assets/imgs/tuk.jpg';
            console.log(`Loading vehicle image based on categoryId ${this.categoryId}: ${vehicleImagePath}`);
            imageLoadingPromises.push(this.loadImageWithRetry(vehicleImagePath, 'vehicle')
                .then((base64) => {
                this.vehicleBase64 = base64;
                console.log('Vehicle image loaded successfully:', vehicleImagePath);
            })
                .catch((error) => {
                console.warn('Failed to load vehicle image after retries, using fallback:', error);
                this.vehicleBase64 = this.fallbackVehicle;
            }));
            try {
                // Wait for all image loading attempts to complete
                yield Promise.all(imageLoadingPromises);
                this.imagesLoaded = true;
                console.log('All images loaded. Ready to print.');
                // Trigger change detection to update UI
                this.cdr.detectChanges();
            }
            catch (error) {
                console.error('Unexpected error during image loading:', error);
                // Even if there's an error, mark as loaded with fallbacks
                this.imagesLoaded = true;
                this.cdr.detectChanges();
            }
        });
    }
    loadItemImages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.printArr || !this.printArr[0] || !this.printArr[0].itemList) {
                return;
            }
            const itemList = this.printArr[0].itemList;
            const imagePromises = [];
            for (const item of itemList) {
                if (item.imageUrl && !this.itemImagesBase64[item.imageUrl]) {
                    imagePromises.push(this.convertImageToBase64(item.imageUrl)
                        .then((base64) => {
                        this.itemImagesBase64[item.imageUrl] = base64;
                    })
                        .catch((error) => {
                        console.log(`Failed to load item image ${item.imageUrl}:`, error);
                    }));
                }
            }
            yield Promise.all(imagePromises);
            console.log('Loaded item images:', Object.keys(this.itemImagesBase64));
        });
    }
    // New method with retry mechanism
    loadImageWithRetry(imagePath, imageKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const maxAttempts = this.maxRetryAttempts;
            let lastError;
            for (let attempt = 1; attempt <= maxAttempts; attempt++) {
                this.imageLoadingAttempts[imageKey] = attempt;
                console.log(`Loading ${imageKey} (attempt ${attempt}/${maxAttempts}): ${imagePath}`);
                try {
                    const base64 = yield this.convertImageToBase64(imagePath);
                    console.log(`Successfully loaded ${imageKey} on attempt ${attempt}`);
                    return base64;
                }
                catch (error) {
                    lastError = error;
                    console.warn(`Failed to load ${imageKey} on attempt ${attempt}:`, error);
                    // Wait before retry (exponential backoff)
                    if (attempt < maxAttempts) {
                        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000); // Cap at 5 seconds
                        console.log(`Retrying ${imageKey} in ${delay}ms...`);
                        yield new Promise(resolve => setTimeout(resolve, delay));
                    }
                }
            }
            throw new Error(`Failed to load ${imageKey} after ${maxAttempts} attempts: ${lastError}`);
        });
    }
    convertImageToBase64(imagePath) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            // Set a timeout for loading
            const timeout = setTimeout(() => {
                reject(new Error(`Image loading timeout: ${imagePath}`));
            }, 10000); // 10 second timeout
            img.crossOrigin = 'anonymous'; // Handle CORS issues
            img.onload = () => {
                clearTimeout(timeout);
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        reject(new Error('Failed to get canvas context'));
                        return;
                    }
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const dataURL = canvas.toDataURL('image/png', 0.8); // Compress slightly
                    resolve(dataURL);
                }
                catch (error) {
                    console.error('Error converting image to base64:', error);
                    reject(error);
                }
            };
            img.onerror = (error) => {
                clearTimeout(timeout);
                console.error('Failed to load image:', imagePath, error);
                reject(new Error(`Failed to load image: ${imagePath}`));
            };
            // Try multiple path variations for better compatibility
            const pathVariations = [
                imagePath,
                imagePath.replace('assets/', '/assets/'),
                imagePath.replace('assets/', './assets/'),
                imagePath.replace('assets/', '../assets/'),
            ];
            let currentPathIndex = 0;
            const tryNextPath = () => {
                if (currentPathIndex < pathVariations.length) {
                    console.log(`Trying path variation: ${pathVariations[currentPathIndex]}`);
                    img.src = pathVariations[currentPathIndex];
                    currentPathIndex++;
                }
                else {
                    clearTimeout(timeout);
                    reject(new Error(`All path variations failed for: ${imagePath}`));
                }
            };
            // Override onerror to try different path variations
            img.onerror = () => {
                console.warn(`Path failed: ${pathVariations[currentPathIndex - 1] || imagePath}`);
                setTimeout(tryNextPath, 500); // Small delay between attempts
            };
            // Start with first path
            tryNextPath();
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Print modal entered, waiting for images...');
            // Wait for images to be loaded before printing
            let waitCount = 0;
            const maxWait = 30; // Maximum 15 seconds (30 * 500ms)
            while (!this.imagesLoaded && waitCount < maxWait) {
                yield new Promise(resolve => setTimeout(resolve, 500));
                waitCount++;
                console.log(`Waiting for images... (${waitCount}/${maxWait})`);
            }
            if (!this.imagesLoaded) {
                console.warn('Images not loaded after timeout, proceeding with available images/fallbacks');
                this.imagesLoaded = true; // Force proceed with fallbacks
            }
            console.log('Starting print process...');
            yield this.Print('printarea1');
        });
    }
    Print(elem) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Starting print process with images ready');
            try {
                // Get the content and replace asset paths with base64 images for print
                let printContent = (_a = document.getElementById(elem)) === null || _a === void 0 ? void 0 : _a.innerHTML;
                if (!printContent) {
                    console.error('Print element not found:', elem);
                    throw new Error('Print content not available');
                }
                console.log('Original content length:', printContent.length);
                // Enhanced image replacement with multiple pattern matching
                printContent = this.replaceImagesInContent(printContent);
                console.log('Content after image replacement:', printContent.length);
                const mywindow = window.open('', 'PRINT', 'height=600,width=800,scrollbars=1');
                if (!mywindow) {
                    throw new Error('Failed to open print window - popup may be blocked');
                }
                mywindow.document.write('<html><head><meta charset="UTF-8">');
                mywindow.document.write('<title>طباعة - Print</title>');
                mywindow.document.write('<style type="text/css">');
                // Enhanced print styles with better font handling
                const printStyles = `
        @page { 
          size: A4; 
          margin: 15mm 20mm 15mm 20mm; 
        }
        body { 
          font-family: Arial, 'Times New Roman', sans-serif; 
          font-size: 14px; 
          line-height: 1.2; 
          margin: 0; 
          padding: 10px 15px;
          direction: rtl;
        }
        .flr { display: block; float: right; }
        .show { display: block; }
        .hide { display: none; }
        .w45 { width: 45%; }
        .w35 { width: 35%; }
        .w50 { width: 50%; }
        .w100 { width: 100%; }
        .bnone { border: 1px solid #000000; }
        .td, .th { 
          border: 1px solid #000000; 
          text-align: center; 
          padding: 4px 6px; 
          font-size: 16px; 
          line-height: 1.2;
        }
        .hd { background-color: #b9b8b8; }
        .table { 
          text-align: center; 
          width: 100%; 
          margin: 4px 0; 
          font-size: 14px; 
          border-collapse: collapse;
        }
        .ion-margin { margin: 4px; }
        .ion-margin-top { margin-top: 4px; }
        .rtl { direction: rtl; text-align: right; }
        .ion-text-center { text-align: center; }
        .ion-text-end { text-align: left; }
        .ion-text-start { text-align: right; }
        img { 
          max-width: 100%; 
          height: auto; 
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
        h1, h2, h3, h4, h5, h6 { 
          margin: 4px 0; 
          line-height: 1.2; 
          page-break-after: avoid;
        }
        table { 
          page-break-inside: auto;
          table-layout: fixed;
          width: 100%;
          border-collapse: collapse;
          orphans: 3;
          widows: 3;
        }
        thead {
          display: table-header-group;
        }
        tbody {
          display: table-row-group;
        }
        tr { 
          page-break-inside: avoid;
          page-break-after: auto;
        }
        tbody tr:nth-child(-n+3) {
          page-break-before: avoid;
        }
        td, th {
          padding: 3px 6px;
          line-height: 1.1;
          overflow: hidden;
          word-wrap: break-word;
        }
        /* Column width adjustments for better item name display */
        table th:nth-child(1), table td:nth-child(1) { width: 8%; } /* Serial number */
        table th:nth-child(2), table td:nth-child(2) { width: 40%; text-align: right !important; } /* Item name - wider */
        table th:nth-child(3), table td:nth-child(3) { width: 12%; } /* Quantity */
        table th:nth-child(4), table td:nth-child(4) { width: 15%; } /* Unit price */
        table th:nth-child(5), table td:nth-child(5) { width: 15%; } /* Discount or VAT% */
        table th:nth-child(6), table td:nth-child(6) { width: 15%; } /* VAT or Total */
        table th:nth-child(7), table td:nth-child(7) { width: 15%; } /* Total */
        
        /* For 5-column tables (purchase orders, etc.) */
        table.five-column th:nth-child(1), table.five-column td:nth-child(1) { width: 8%; }
        table.five-column th:nth-child(2), table.five-column td:nth-child(2) { width: 45%; text-align: right !important; }
        table.five-column th:nth-child(3), table.five-column td:nth-child(3) { width: 12%; }
        table.five-column th:nth-child(4), table.five-column td:nth-child(4) { width: 17%; }
        table.five-column th:nth-child(5), table.five-column td:nth-child(5) { width: 18%; }
      `;
                mywindow.document.write(printStyles);
                mywindow.document.write('</style></head><body>');
                mywindow.document.write(printContent);
                mywindow.document.write('</body></html>');
                mywindow.document.close();
                console.log('Print document prepared, waiting for images to load...');
                // Wait a moment for images to load in the print window
                setTimeout(() => {
                    try {
                        mywindow.focus();
                        mywindow.print();
                        // Close print window after printing (with delay for print dialog)
                        setTimeout(() => {
                            if (!mywindow.closed) {
                                mywindow.close();
                            }
                        }, 1000);
                    }
                    catch (printError) {
                        console.error('Error during printing:', printError);
                        // Don't close window on print error so user can try manually
                    }
                }, 1500); // Wait 1.5 seconds for images to load
            }
            catch (error) {
                console.error('Print process failed:', error);
                yield this.showToast('خطأ في الطباعة - Print error: ' + error.message, 'danger');
            }
            // Always dismiss the modal
            this.modalController.dismiss();
        });
    }
    replaceImagesInContent(content) {
        console.log('Replacing images in content...');
        // Multiple replacement strategies for maximum compatibility
        const replacements = [
            // Direct asset path replacements
            {
                pattern: /src=['"]assets\/imgs\/logo\.png['"]/gi,
                replacement: `src="${this.logoBase64}"`,
                name: 'logo-direct'
            },
            {
                pattern: /src=['"]assets\/imgs\/tuk\.jpg['"]/gi,
                replacement: `src="${this.vehicleBase64}"`,
                name: 'vehicle-tuk-direct'
            },
            {
                pattern: /src=['"]assets\/imgs\/track\.jpg['"]/gi,
                replacement: `src="${this.vehicleBase64}"`,
                name: 'vehicle-track-direct'
            },
            // Handle variations with different quote styles
            {
                pattern: /src=assets\/imgs\/logo\.png/gi,
                replacement: `src="${this.logoBase64}"`,
                name: 'logo-no-quotes'
            },
            {
                pattern: /src=assets\/imgs\/tuk\.jpg/gi,
                replacement: `src="${this.vehicleBase64}"`,
                name: 'vehicle-tuk-no-quotes'
            },
            {
                pattern: /src=assets\/imgs\/track\.jpg/gi,
                replacement: `src="${this.vehicleBase64}"`,
                name: 'vehicle-track-no-quotes'
            },
            // Handle Angular property binding results (after rendering)
            {
                pattern: /src=['"][^'"]*assets\/imgs\/logo\.png[^'"]*['"]/gi,
                replacement: `src="${this.logoBase64}"`,
                name: 'logo-property-binding'
            },
            {
                pattern: /src=['"][^'"]*assets\/imgs\/tuk\.jpg[^'"]*['"]/gi,
                replacement: `src="${this.vehicleBase64}"`,
                name: 'vehicle-tuk-property-binding'
            },
            {
                pattern: /src=['"][^'"]*assets\/imgs\/track\.jpg[^'"]*['"]/gi,
                replacement: `src="${this.vehicleBase64}"`,
                name: 'vehicle-track-property-binding'
            },
            // Handle fallback paths that might be in the HTML
            {
                pattern: /assets\/imgs\/logo\.png/gi,
                replacement: this.logoBase64,
                name: 'logo-any-occurrence'
            },
            {
                pattern: /assets\/imgs\/tuk\.jpg/gi,
                replacement: this.vehicleBase64,
                name: 'vehicle-tuk-any-occurrence'
            },
            {
                pattern: /assets\/imgs\/track\.jpg/gi,
                replacement: this.vehicleBase64,
                name: 'vehicle-track-any-occurrence'
            }
        ];
        let modifiedContent = content;
        let totalReplacements = 0;
        replacements.forEach(({ pattern, replacement, name }) => {
            const matches = modifiedContent.match(pattern);
            if (matches) {
                console.log(`Found ${matches.length} matches for ${name}:`, matches);
                modifiedContent = modifiedContent.replace(pattern, replacement);
                totalReplacements += matches.length;
            }
        });
        console.log(`Total image replacements made: ${totalReplacements}`);
        // Verify that our base64 images are present
        if (this.logoBase64 && modifiedContent.includes(this.logoBase64)) {
            console.log('✓ Logo base64 found in final content');
        }
        else {
            console.warn('⚠ Logo base64 NOT found in final content');
        }
        if (this.vehicleBase64 && modifiedContent.includes(this.vehicleBase64)) {
            console.log('✓ Vehicle base64 found in final content');
        }
        else {
            console.warn('⚠ Vehicle base64 NOT found in final content');
        }
        return modifiedContent;
    }
    showToast(message, color = 'primary') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 3000,
                color: color,
                position: 'top'
            });
            toast.present();
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
    // Format number with thousand separators for display
    formatNumberWithSeparators(value) {
        if (!value && value !== 0)
            return '0.00';
        if (isNaN(value))
            return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    }
    // Format currency with separators and symbol
    formatCurrencyWithSeparators(value, showSymbol = true) {
        if (!value && value !== 0)
            return showSymbol ? '0.00 ' + this.getCurrencySymbol() : '0.00';
        if (isNaN(value))
            return showSymbol ? '0.00 ' + this.getCurrencySymbol() : '0.00';
        const formattedNumber = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
        return showSymbol ? formattedNumber + ' ' + this.getCurrencySymbol() : formattedNumber;
    }
    // Get current currency symbol for headers
    getCurrencySymbol() {
        return this.currencyService.getCurrentCurrencySymbol();
    }
};
PrintModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_2__.CurrencyService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef }
];
PrintModalPage.propDecorators = {
    printArr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
PrintModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-print-modal',
        template: _print_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_print_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrintModalPage);



/***/ }),

/***/ 85602:
/*!**************************************************************!*\
  !*** ./src/app/print-modal/print-modal.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 16px;\n}\n\n.th {\n  padding: 6px 8px;\n  border: 1px solid #000;\n  text-align: center;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 1.2;\n}\n\n.td {\n  padding: 4px 8px;\n  border: 1px solid #000;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1.2;\n}\n\ntable[style*=\"border-collapse: collapse\"] th {\n  padding: 6px 8px !important;\n  font-size: 16px !important;\n  line-height: 1.2 !important;\n}\n\ntable[style*=\"border-collapse: collapse\"] td {\n  padding: 4px 8px !important;\n  font-size: 16px !important;\n  line-height: 1.2 !important;\n}\n\nion-content[style*=\"max-width : 30px\"] .table .th, ion-content[style*=\"max-width : 30px\"] .table .td {\n  font-size: 14px;\n  padding: 3px 6px;\n  line-height: 1.1;\n}\n\nion-label {\n  font-size: 16px;\n}\n\nh4, h3 {\n  line-height: 1.3;\n  margin: 8px 0;\n}\n\n.rtl ion-label {\n  font-size: 14px;\n}\n\n@media print {\n  * {\n    -webkit-print-color-adjust: exact !important;\n    color-adjust: exact !important;\n  }\n\n  #printarea1 {\n    page-break-inside: auto !important;\n    break-inside: auto !important;\n  }\n\n  h4, h3 {\n    page-break-after: auto !important;\n    page-break-inside: avoid !important;\n    margin: 4px 0 !important;\n    line-height: 1.2 !important;\n  }\n\n  .ion-margin-top {\n    page-break-before: auto !important;\n    page-break-after: auto !important;\n    page-break-inside: avoid !important;\n    margin-top: 8px !important;\n    margin-bottom: 8px !important;\n  }\n\n  .ion-margin.rtl {\n    margin: 4px !important;\n    page-break-inside: auto !important;\n  }\n\n  .table,\ntable[style*=\"border-collapse: collapse\"] {\n    page-break-inside: auto !important;\n    break-inside: auto !important;\n    table-layout: fixed !important;\n    width: 100% !important;\n    /* Serial number */\n    /* Item name - wider */\n    /* Quantity */\n    /* Unit price */\n    /* Discount/VAT% or Total for 5-column */\n    /* VAT */\n    /* Total */\n  }\n  .table thead,\ntable[style*=\"border-collapse: collapse\"] thead {\n    display: table-header-group !important;\n  }\n  .table tbody,\ntable[style*=\"border-collapse: collapse\"] tbody {\n    display: table-row-group !important;\n  }\n  .table tr,\ntable[style*=\"border-collapse: collapse\"] tr {\n    page-break-inside: avoid !important;\n    break-inside: avoid !important;\n    page-break-after: auto !important;\n  }\n  .table th, .table td,\ntable[style*=\"border-collapse: collapse\"] th,\ntable[style*=\"border-collapse: collapse\"] td {\n    padding: 3px 6px !important;\n    line-height: 1.1 !important;\n    font-size: 14px !important;\n    overflow: hidden !important;\n    word-wrap: break-word !important;\n  }\n  .table th:nth-child(1), .table td:nth-child(1),\ntable[style*=\"border-collapse: collapse\"] th:nth-child(1),\ntable[style*=\"border-collapse: collapse\"] td:nth-child(1) {\n    width: 8% !important;\n  }\n  .table th:nth-child(2), .table td:nth-child(2),\ntable[style*=\"border-collapse: collapse\"] th:nth-child(2),\ntable[style*=\"border-collapse: collapse\"] td:nth-child(2) {\n    width: 40% !important;\n    text-align: right !important;\n    padding-right: 8px !important;\n  }\n  .table th:nth-child(3), .table td:nth-child(3),\ntable[style*=\"border-collapse: collapse\"] th:nth-child(3),\ntable[style*=\"border-collapse: collapse\"] td:nth-child(3) {\n    width: 12% !important;\n  }\n  .table th:nth-child(4), .table td:nth-child(4),\ntable[style*=\"border-collapse: collapse\"] th:nth-child(4),\ntable[style*=\"border-collapse: collapse\"] td:nth-child(4) {\n    width: 15% !important;\n  }\n  .table th:nth-child(5), .table td:nth-child(5),\ntable[style*=\"border-collapse: collapse\"] th:nth-child(5),\ntable[style*=\"border-collapse: collapse\"] td:nth-child(5) {\n    width: 15% !important;\n  }\n  .table th:nth-child(6), .table td:nth-child(6),\ntable[style*=\"border-collapse: collapse\"] th:nth-child(6),\ntable[style*=\"border-collapse: collapse\"] td:nth-child(6) {\n    width: 10% !important;\n  }\n  .table th:nth-child(7), .table td:nth-child(7),\ntable[style*=\"border-collapse: collapse\"] th:nth-child(7),\ntable[style*=\"border-collapse: collapse\"] td:nth-child(7) {\n    width: 15% !important;\n  }\n  .table th:nth-child(2), .table td:nth-child(2),\ntable[style*=\"border-collapse: collapse\"] th:nth-child(2),\ntable[style*=\"border-collapse: collapse\"] td:nth-child(2) {\n    white-space: normal !important;\n    word-wrap: break-word !important;\n  }\n\n  .table tbody tr:nth-child(-n+3),\ntable[style*=\"border-collapse: collapse\"] tbody tr:nth-child(-n+3) {\n    page-break-before: avoid !important;\n  }\n\n  .w100.rtl.ion-margin {\n    page-break-inside: avoid !important;\n    page-break-before: auto !important;\n    margin: 8px 16px !important;\n  }\n\n  ion-content[style*=\"max-width : 30px\"] .table th, ion-content[style*=\"max-width : 30px\"] .table td {\n    padding: 1px 2px !important;\n    font-size: 12px !important;\n  }\n\n  div[style*=\"margin-bottom: 20px\"] {\n    margin-bottom: 10px !important;\n    page-break-inside: auto !important;\n  }\n\n  .ion-margin {\n    margin: 4px !important;\n  }\n\n  .ion-padding {\n    padding: 8px !important;\n  }\n\n  ion-label, ion-text {\n    font-size: 14px !important;\n    line-height: 1.1 !important;\n  }\n\n  .w100.rtl {\n    margin-bottom: 8px !important;\n  }\n  .w100.rtl div {\n    margin-bottom: 4px !important;\n  }\n\n  .ion-margin-top + .ion-margin.rtl {\n    page-break-before: auto !important;\n    margin-top: 0 !important;\n  }\n\n  .table thead tr:first-child,\ntable[style*=\"border-collapse: collapse\"] thead tr:first-child {\n    page-break-before: avoid !important;\n    page-break-after: avoid !important;\n  }\n\n  .table,\ntable[style*=\"border-collapse: collapse\"] {\n    orphans: 3 !important;\n    widows: 3 !important;\n  }\n\n  div.ion-margin:has(table) {\n    page-break-before: avoid !important;\n    page-break-inside: auto !important;\n  }\n\n  .table,\ntable[style*=\"border-collapse: collapse\"] {\n    border-collapse: separate !important;\n    border-spacing: 0 !important;\n  }\n\n  ion-content {\n    page-break-inside: auto !important;\n  }\n\n  .ion-padding {\n    page-break-inside: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFPRTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQUpKOztBQU9FO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FBTEo7O0FBWUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVROOztBQWVBO0VBQ0UsZUFBQTtBQVpGOztBQWVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBWkY7O0FBaUJFO0VBQ0UsZUFBQTtBQWRKOztBQW1CQTtFQUNFO0lBQ0UsNENBQUE7SUFDQSw4QkFBQTtFQWhCRjs7RUFvQkE7SUFDRSxrQ0FBQTtJQUNBLDZCQUFBO0VBakJGOztFQXFCQTtJQUNFLGlDQUFBO0lBQ0EsbUNBQUE7SUFDQSx3QkFBQTtJQUNBLDJCQUFBO0VBbEJGOztFQXNCQTtJQUNFLGtDQUFBO0lBQ0EsaUNBQUE7SUFDQSxtQ0FBQTtJQUNBLDBCQUFBO0lBQ0EsNkJBQUE7RUFuQkY7O0VBdUJBO0lBQ0Usc0JBQUE7SUFDQSxrQ0FBQTtFQXBCRjs7RUF3QkE7O0lBRUUsa0NBQUE7SUFDQSw2QkFBQTtJQUNBLDhCQUFBO0lBQ0Esc0JBQUE7SUE0QjJELGtCQUFBO0lBQzhELHNCQUFBO0lBQzdELGFBQUE7SUFDQSxlQUFBO0lBQ0Esd0NBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtFQWhEOUQ7RUFpQkU7O0lBQ0Usc0NBQUE7RUFkSjtFQWlCRTs7SUFDRSxtQ0FBQTtFQWRKO0VBa0JFOztJQUNFLG1DQUFBO0lBQ0EsOEJBQUE7SUFDQSxpQ0FBQTtFQWZKO0VBbUJFOzs7SUFDRSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLGdDQUFBO0VBZko7RUFtQkU7OztJQUFtQyxvQkFBQTtFQWRyQztFQWVFOzs7SUFBbUMscUJBQUE7SUFBdUIsNEJBQUE7SUFBOEIsNkJBQUE7RUFSMUY7RUFTRTs7O0lBQW1DLHFCQUFBO0VBSnJDO0VBS0U7OztJQUFtQyxxQkFBQTtFQUFyQztFQUNFOzs7SUFBbUMscUJBQUE7RUFJckM7RUFIRTs7O0lBQW1DLHFCQUFBO0VBUXJDO0VBUEU7OztJQUFtQyxxQkFBQTtFQVlyQztFQVRFOzs7SUFDRSw4QkFBQTtJQUNBLGdDQUFBO0VBYUo7O0VBUkE7O0lBRUUsbUNBQUE7RUFXRjs7RUFQQTtJQUNFLG1DQUFBO0lBQ0Esa0NBQUE7SUFDQSwyQkFBQTtFQVVGOztFQUpJO0lBQ0UsMkJBQUE7SUFDQSwwQkFBQTtFQU9OOztFQURBO0lBQ0UsOEJBQUE7SUFDQSxrQ0FBQTtFQUlGOztFQUFBO0lBQ0Usc0JBQUE7RUFHRjs7RUFBQTtJQUNFLHVCQUFBO0VBR0Y7O0VBQ0E7SUFDRSwwQkFBQTtJQUNBLDJCQUFBO0VBRUY7O0VBRUE7SUFDRSw2QkFBQTtFQUNGO0VBQ0U7SUFDRSw2QkFBQTtFQUNKOztFQUlBO0lBQ0Usa0NBQUE7SUFDQSx3QkFBQTtFQURGOztFQUtBOztJQUVFLG1DQUFBO0lBQ0Esa0NBQUE7RUFGRjs7RUFNQTs7SUFFRSxxQkFBQTtJQUNBLG9CQUFBO0VBSEY7O0VBT0E7SUFDRSxtQ0FBQTtJQUNBLGtDQUFBO0VBSkY7O0VBUUE7O0lBRUUsb0NBQUE7SUFDQSw0QkFBQTtFQUxGOztFQVNBO0lBQ0Usa0NBQUE7RUFORjs7RUFTQTtJQUNFLGtDQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJwcmludC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcmludCBNb2RhbCBTdHlsZXNcblxuLy8gVGFibGUgc3R5bGVzIGZvciBhbGwgcHJpbnQgbW9kZXNcbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDE2cHg7IC8vIEluY3JlYXNlZCBmb250IHNpemUgZnJvbSBkZWZhdWx0XG59XG5cbi50aCB7XG4gIHBhZGRpbmc6IDZweCA4cHg7IC8vIFJlZHVjZWQgcGFkZGluZyBmb3Igc21hbGxlciByb3cgaGVpZ2h0XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDsgLy8gSW5jcmVhc2VkIGZvbnQgc2l6ZVxuICBsaW5lLWhlaWdodDogMS4yOyAvLyBSZWR1Y2VkIGxpbmUgaGVpZ2h0XG59XG5cbi50ZCB7XG4gIHBhZGRpbmc6IDRweCA4cHg7IC8vIFJlZHVjZWQgcGFkZGluZyBmb3Igc21hbGxlciByb3cgaGVpZ2h0XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4OyAvLyBJbmNyZWFzZWQgZm9udCBzaXplXG4gIGxpbmUtaGVpZ2h0OiAxLjI7IC8vIFJlZHVjZWQgbGluZSBoZWlnaHRcbn1cblxuLy8gRW5oYW5jZWQgbW9kZSB0YWJsZSBzdHlsZXNcbnRhYmxlW3N0eWxlKj1cImJvcmRlci1jb2xsYXBzZTogY29sbGFwc2VcIl0ge1xuICB0aCB7XG4gICAgcGFkZGluZzogNnB4IDhweCAhaW1wb3J0YW50OyAvLyBSZWR1Y2VkIHBhZGRpbmdcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgLy8gSW5jcmVhc2VkIGZvbnQgc2l6ZVxuICAgIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDsgLy8gUmVkdWNlZCBsaW5lIGhlaWdodFxuICB9XG4gIFxuICB0ZCB7XG4gICAgcGFkZGluZzogNHB4IDhweCAhaW1wb3J0YW50OyAvLyBSZWR1Y2VkIHBhZGRpbmdcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgLy8gSW5jcmVhc2VkIGZvbnQgc2l6ZVxuICAgIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDsgLy8gUmVkdWNlZCBsaW5lIGhlaWdodFxuICB9XG59XG5cbi8vIFBPUyBtb2RlIHNwZWNpZmljIHN0eWxlc1xuaW9uLWNvbnRlbnRbc3R5bGUqPVwibWF4LXdpZHRoIDogMzBweFwiXSB7XG4gIC50YWJsZSB7XG4gICAgLnRoLCAudGQge1xuICAgICAgZm9udC1zaXplOiAxNHB4OyAvLyBTbWFsbGVyIGZvbnQgZm9yIFBPUyBtb2RlIGR1ZSB0byB3aWR0aCBjb25zdHJhaW50c1xuICAgICAgcGFkZGluZzogM3B4IDZweDsgLy8gRXZlbiBzbWFsbGVyIHBhZGRpbmcgZm9yIFBPU1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICB9XG4gIH1cbn1cblxuLy8gR2VuZXJhbCB0ZXh0IHNpemUgaW1wcm92ZW1lbnRzIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHlcbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaDQsIGgzIHtcbiAgbGluZS1oZWlnaHQ6IDEuMzsgLy8gUmVkdWNlIGxpbmUgaGVpZ2h0IGZvciBoZWFkZXJzXG4gIG1hcmdpbjogOHB4IDA7IC8vIFJlZHVjZSBtYXJnaW5zXG59XG5cbi8vIFJUTCB0ZXh0IGltcHJvdmVtZW50c1xuLnJ0bCB7XG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi8vIFByaW50LXNwZWNpZmljIHN0eWxlcyB0byBmaXggcGFnaW5hdGlvbiBpc3N1ZXNcbkBtZWRpYSBwcmludCB7XG4gICoge1xuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50O1xuICAgIGNvbG9yLWFkanVzdDogZXhhY3QgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLy8gUm9vdCBjb250YWluZXIgc2hvdWxkIGFsbG93IG5hdHVyYWwgcGFnZSBmbG93XG4gICNwcmludGFyZWExIHtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXV0byAhaW1wb3J0YW50O1xuICAgIGJyZWFrLWluc2lkZTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvLyBDb21wYW55IGhlYWRlciBzZWN0aW9uIC0ga2VlcCB0b2dldGhlciBidXQgYWxsb3cgYnJlYWtzIGFmdGVyXG4gIGg0LCBoMyB7XG4gICAgcGFnZS1icmVhay1hZnRlcjogYXV0byAhaW1wb3J0YW50O1xuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNHB4IDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS4yICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8vIEludm9pY2UgaW5mbyBzZWN0aW9uIC0gY29tcGFjdCBhbmQgYWxsb3cgYnJlYWtzXG4gIC5pb24tbWFyZ2luLXRvcCB7XG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGF1dG8gIWltcG9ydGFudDtcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8vIFRhYmxlIGNvbnRhaW5lcnMgLSBhbGxvdyBicmVha3MgYW5kIHJlZHVjZSBtYXJnaW5zXG4gIC5pb24tbWFyZ2luLnJ0bCB7XG4gICAgbWFyZ2luOiA0cHggIWltcG9ydGFudDtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvLyBUYWJsZXMgLSBjcml0aWNhbCBzZXR0aW5ncyBmb3IgcHJvcGVyIHBhZ2luYXRpb25cbiAgLnRhYmxlLFxuICB0YWJsZVtzdHlsZSo9XCJib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXCJdIHtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXV0byAhaW1wb3J0YW50O1xuICAgIGJyZWFrLWluc2lkZTogYXV0byAhaW1wb3J0YW50O1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIFxuICAgIC8vIEhlYWRlcnMgcmVwZWF0IG9uIGVhY2ggcGFnZVxuICAgIHRoZWFkIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICB0Ym9keSB7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLy8gSW5kaXZpZHVhbCByb3dzIHNob3VsZCBub3QgYnJlYWsgaW50ZXJuYWxseVxuICAgIHRyIHtcbiAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZCAhaW1wb3J0YW50O1xuICAgICAgYnJlYWstaW5zaWRlOiBhdm9pZCAhaW1wb3J0YW50O1xuICAgICAgcGFnZS1icmVhay1hZnRlcjogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAvLyBSZWR1Y2UgY2VsbCBwYWRkaW5nIGZvciBtb3JlIGNvbXBhY3QgbGF5b3V0XG4gICAgdGgsIHRkIHtcbiAgICAgIHBhZGRpbmc6IDNweCA2cHggIWltcG9ydGFudDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjEgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC8vIENvbHVtbiB3aWR0aHMgZm9yIGFsbCB0YWJsZXNcbiAgICB0aDpudGgtY2hpbGQoMSksIHRkOm50aC1jaGlsZCgxKSB7IHdpZHRoOiA4JSAhaW1wb3J0YW50OyB9IC8qIFNlcmlhbCBudW1iZXIgKi9cbiAgICB0aDpudGgtY2hpbGQoMiksIHRkOm50aC1jaGlsZCgyKSB7IHdpZHRoOiA0MCUgIWltcG9ydGFudDsgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDsgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7IH0gLyogSXRlbSBuYW1lIC0gd2lkZXIgKi9cbiAgICB0aDpudGgtY2hpbGQoMyksIHRkOm50aC1jaGlsZCgzKSB7IHdpZHRoOiAxMiUgIWltcG9ydGFudDsgfSAvKiBRdWFudGl0eSAqL1xuICAgIHRoOm50aC1jaGlsZCg0KSwgdGQ6bnRoLWNoaWxkKDQpIHsgd2lkdGg6IDE1JSAhaW1wb3J0YW50OyB9IC8qIFVuaXQgcHJpY2UgKi9cbiAgICB0aDpudGgtY2hpbGQoNSksIHRkOm50aC1jaGlsZCg1KSB7IHdpZHRoOiAxNSUgIWltcG9ydGFudDsgfSAvKiBEaXNjb3VudC9WQVQlIG9yIFRvdGFsIGZvciA1LWNvbHVtbiAqL1xuICAgIHRoOm50aC1jaGlsZCg2KSwgdGQ6bnRoLWNoaWxkKDYpIHsgd2lkdGg6IDEwJSAhaW1wb3J0YW50OyB9IC8qIFZBVCAqL1xuICAgIHRoOm50aC1jaGlsZCg3KSwgdGQ6bnRoLWNoaWxkKDcpIHsgd2lkdGg6IDE1JSAhaW1wb3J0YW50OyB9IC8qIFRvdGFsICovXG4gICAgXG4gICAgLy8gQWxsb3cgaXRlbSBuYW1lIGNvbHVtbiB0byB3cmFwIGZvciBsb25nIG5hbWVzXG4gICAgdGg6bnRoLWNoaWxkKDIpLCB0ZDpudGgtY2hpbGQoMikge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICAvLyBGb3JjZSBmaXJzdCBmZXcgcm93cyB0byBzdGF5IG9uIGZpcnN0IHBhZ2VcbiAgLnRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCgtbiszKSxcbiAgdGFibGVbc3R5bGUqPVwiYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVwiXSB0Ym9keSB0cjpudGgtY2hpbGQoLW4rMykge1xuICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdm9pZCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvLyBUb3RhbHMgc2VjdGlvbiAtIGtlZXAgdG9nZXRoZXJcbiAgLncxMDAucnRsLmlvbi1tYXJnaW4ge1xuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZCAhaW1wb3J0YW50O1xuICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvLyBQT1MgbW9kZSBzcGVjaWZpYyAtIGV2ZW4gbW9yZSBjb21wYWN0XG4gIGlvbi1jb250ZW50W3N0eWxlKj1cIm1heC13aWR0aCA6IDMwcHhcIl0ge1xuICAgIC50YWJsZSB7XG4gICAgICB0aCwgdGQge1xuICAgICAgICBwYWRkaW5nOiAxcHggMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLy8gRW5oYW5jZWQgbW9kZSBzcGVjaWZpYyBhZGp1c3RtZW50c1xuICBkaXZbc3R5bGUqPVwibWFyZ2luLWJvdHRvbTogMjBweFwiXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8vIEdlbmVyYWwgc3BhY2luZyByZWR1Y3Rpb25zIGZvciBwcmludFxuICAuaW9uLW1hcmdpbiB7XG4gICAgbWFyZ2luOiA0cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmlvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLy8gRW5zdXJlIGxhYmVscyBhbmQgdGV4dCBhcmUgY29tcGFjdFxuICBpb24tbGFiZWwsIGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS4xICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8vIENvbXBhbnkgaW5mbyBzZWN0aW9uIC0gcmVkdWNlIHNwYWNpbmdcbiAgLncxMDAucnRsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgICBcbiAgICBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICAvLyBGb3JjZSB0YWJsZSB0byBzdGFydCBpbW1lZGlhdGVseSBhZnRlciBoZWFkZXJcbiAgLmlvbi1tYXJnaW4tdG9wICsgLmlvbi1tYXJnaW4ucnRsIHtcbiAgICBwYWdlLWJyZWFrLWJlZm9yZTogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLy8gQWRkaXRpb25hbCBhZ2dyZXNzaXZlIGZpeGVzIGZvciB0YWJsZSBwYWdpbmF0aW9uXG4gIC50YWJsZSB0aGVhZCB0cjpmaXJzdC1jaGlsZCxcbiAgdGFibGVbc3R5bGUqPVwiYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVwiXSB0aGVhZCB0cjpmaXJzdC1jaGlsZCB7XG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGF2b2lkICFpbXBvcnRhbnQ7XG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLy8gRW5zdXJlIGZpcnN0IHBhZ2UgaGFzIG1pbmltdW0gY29udGVudFxuICAudGFibGUsXG4gIHRhYmxlW3N0eWxlKj1cImJvcmRlci1jb2xsYXBzZTogY29sbGFwc2VcIl0ge1xuICAgIG9ycGhhbnM6IDMgIWltcG9ydGFudDtcbiAgICB3aWRvd3M6IDMgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLy8gRm9yY2UgdGFibGUgY29udGFpbmVyIHRvIG5vdCBwdXNoIHRvIG5leHQgcGFnZVxuICBkaXYuaW9uLW1hcmdpbjpoYXModGFibGUpIHtcbiAgICBwYWdlLWJyZWFrLWJlZm9yZTogYXZvaWQgIWltcG9ydGFudDtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvLyBBbHRlcm5hdGl2ZSBhcHByb2FjaCAtIG1ha2UgdGFibGUgbGVzcyBcImhlYXZ5XCJcbiAgLnRhYmxlLFxuICB0YWJsZVtzdHlsZSo9XCJib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXCJdIHtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLy8gQ3JpdGljYWw6IHByZXZlbnQgZW50aXJlIGRvY3VtZW50IGZyb20gYmVjb21pbmcgb25lIGJsb2NrXG4gIGlvbi1jb250ZW50IHtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuaW9uLXBhZGRpbmcge1xuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 84669:
/*!**************************************************************!*\
  !*** ./src/app/print-modal/print-modal.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n<!-- var dd = {\n\tcontent: [\n\t    {\n\t\t\tcolumns: [\n\t\t\t    {\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t},\n\t\t\t    {\n\t\t\t\t\twidth:'auto' ,\n\t\t\t\t\ttext:'BANSI GIRISH JAYANTILAL IMPORT & EXPORT ENTERPRISES',\n\t\t\t\t\talignment:'center'\n \t\t\t\t},\n \t\t\t\t{\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t},\n\t\t\t],\n\t\t\tmargin:[0,0,10,10]\n\t\t\t\n\t\t },   \t\n\t    \t{\n\t\t\tcolumns: [\n\t\t\t    {\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t},\n\t\t\t    {\n\t\t\t\t\twidth:'auto' ,\n\t\t\t\t\ttext:' Exclusive agent for brands (POWERMAX , SIMBA , GIRISH )',\n\t\t\t\t\talignment:'center'\n \t\t\t\t},\n \t\t\t\t{\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t}\n\t\t\t],\n\t\t\t\tmargin:[0,0,10,10]\n\t\t\t\n\t\t}, \n\t\t \t{\n\t\t\tcolumns: [\n\t\t\t    {\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t},\n\t\t\t    {\n\t\t\t\t\twidth:'auto' ,\n\t\t\t\t\ttext:' فاتورة مبيعات',\n\t\t\t\t\talignment:'center'\n \t\t\t\t},\n \t\t\t\t{\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t}\n\t\t\t],\n\t\t\t\tmargin:[0,10,0,10]\n\t\t\t\n\t\t},\n\t\t{\n\t\t\tcolumns: [\n\t\t\t\t{\n\t\t\t\t\twidth: 90,\n\t\t\t\t\ttext:'التاريخ :'\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\twidth: 90,\n\t\t\t\t\ttext:''\n \t\t\t\t},\n \t\t\t\t{\n\t\t\t\t\twidth: '*',\n\t\t\t\t\ttext: 'العميل:'\n\t\t\t\t},\n\t\t\t],\n\t\t\t\tmargin:[0,20,0,10]\n\t\t\t\n\t\t\n\t\t}, \n\t\t{\n\t\t \tcolumns: [\n\t\t\t\t{\n\t\t\t\t\twidth: 90,\n\t\t\t\t\ttext:'رقم الهاتف :'\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\twidth: 90,\n\t\t\t\t\ttext:''\n \t\t\t\t},\n \t\t\t\t{\n\t\t\t\t\twidth: '*',\n\t\t\t\t\ttext: 'المكان :'\n\t\t\t\t},\n\t\t\t],\n\t\t\t\tmargin:[0,10,0,10]\n\t\t},\n\t\t{\n\t\t  table: {\n\t\t\t\tbody: [\n\t\t\t\t\t['المجموع', 'Column 2', 'Column 3' , 'Column 3', 'Column 3'],\n\t\t\t\t\t['One value goes here', 'Another one here', 'OK?', 'Another one here', 'OK?', 'Another one here', 'OK?']\n\t\t\t\t]\n\t\t\t},\n\t\t\tmargin:[0,10,0,10]\n\t\t},\n\t\t{\n\t\t\tcolumns: [\n\t\t\t    {\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t},\n\t\t\t    {\n\t\t\t\t\twidth:'auto' ,\n\t\t\t\t\ttext:'kj;lkjd;qwljwfweww',\n\t\t\t\t\talignment:'center'\n \t\t\t\t},\n \t\t\t\t{\n\t\t\t\t\twidth: '*',\n\t\t\t\t     text:''\n\t\t\t\t}\n\t\t\t],\n\t\t\t\tmargin:[0,10,0,10]\n\t\t\t\n\t\t},\n\t\t\n\t  ]\n\t\n} -->\n<ion-content  style=\"max-width : 30px\" *ngIf=\"mode == 'pos'\">\n  <!-- Loading indicator for images -->\n  <div *ngIf=\"!imagesLoaded\" style=\"position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.9); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;\">\n    <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n    <p style=\"margin-top: 16px; font-size: 14px; color: #666;\">جاري تحضير الصور للطباعة...</p>\n    <p style=\"font-size: 12px; color: #999;\">Preparing images for printing...</p>\n  </div>\n  <div class=\"ion-padding\" >\n      <div   #printarea1  id=\"printarea1\" >\n        <div style=\"width : 100px ; height: 100px ;margin-left: 20%\" >\n           <img alt=\"\" [src]=\"printArr[0].company.logoUrl\">  \n         </div>\n        <h4 class=\"ion-text-center\">{{printArr[0].company.engName}} </h4>\n        <h4 class=\"ion-text-center\">{{printArr[0].company.arName}} </h4>\n        <h4 class=\"ion-text-center\"><ion-label>الرقم الضريبي / VAT NO :</ion-label><ion-text>{{printArr[0].company.vatNo}}</ion-text> </h4>\n        \n        <h3 class=\"ion-text-center\" *ngIf=\"page=='sales' || page=='sales_record' || page=='pos-sales'\"> فاتورة ضريبية مبسطة  </h3> \n        <h3 class=\"ion-text-center\" *ngIf=\"page=='sales' || page=='sales_record' || page=='pos-sales'\"> simple vat invoice </h3> \n\n        <div class=\"ion-margin-top rtl\"  *ngIf=\"printArr && page!='perchOrderEn' && page!='perchOrderAr' && page!='perchOrderAr-record'  && page!='perchOrderEn-record'\">\n          <div class=\"w100 rtl\" style=\"display:inline-block ;\">\n            <div class=\" rtl flr ion-margin\" style=\"width: 100%; position: relative; float: right; text-align:right;\">\n               <ion-label><ion-text>التاريخ / date: </ion-text> \n                <ion-text>{{getInvoiceDate()}} {{getInvoiceTime()}}</ion-text>\n               </ion-label>\n            </div>\n            <div class=\" rtl flr ion-margin\" style=\"width: 100%; position: relative; float: right; text-align:right;\">\n              <ion-label><ion-text>  اسم المستخدم  / user name:</ion-text>  <ion-text>{{printArr[0].user_name }} </ion-text> </ion-label>  \n            </div>\n          </div>\n\n          \n            <div class=\"ion-margin rtl\"  >\n              <div class=\"ion-margin\">\n                <table class=\"table\" >\n                <thead>\n                  <tr>\n                  <th class=\"th\" style=\"border-bottom: .5px solid #dddddd ;\">الصنف  item</th>\n                  <th class=\"th\" style=\"border-bottom: .5px solid #dddddd ;\">الكمية  QTY</th> \n                  <th class=\"th\" style=\"border-bottom: .5px solid #dddddd ;\">سعر  unit price </th> \n                  <th class=\"th\" style=\"border-bottom: .5px solid #dddddd ;\">الخصم   discount </th>\n                  <th class=\"th\" style=\"border-bottom: .5px solid #dddddd ;\">نسبة الضريبة   VAT%</th> \n                  <th class=\"th\" style=\"border-bottom: .5px solid #dddddd ;\">قيمة الضريبة   VAT </th> \n                  <th class=\"th\" style=\"border-bottom: .5px solid #dddddd ;\">   صافي القيمة  total </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of printArr[0].itemList ; let i = index\"> \n                    <td class=\"td\" style=\"border: none;\">{{item.item_name}}</td>\n                    <td class=\"td\"  style=\"border: none;\"> {{item.quantity}}</td>\n                    <td  class=\"td\" style=\"border: none;\">  {{formatNumberWithSeparators(item.pay_price)}} </td> \n                    <td  class=\"td\" style=\"border: none;\">  {{formatNumberWithSeparators(item.discount)}} </td> \n                    <td  class=\"td\" style=\"border: none;\">  {{item.tax}} </td> \n                    <td class=\"td\" style=\"border: none;\">{{formatNumberWithSeparators(+item.pay_price + (+item.tax/100 * +item.pay_price))}}</td>\n                    <td  class=\"td\" style=\"border: none;\">  {{formatNumberWithSeparators(item.tot)}} </td> \n                  </tr> \n                  <tr>\n                    <td ></td>\n                    <td ></td>\n                    <td ></td>\n                    <td></td>\n                    <td></td>\n                    <td class=\"td\" style=\"border: none;\">{{formatNumberWithSeparators(printArr[0].payInvo.tot_pr)}}</td>\n                  </tr>\n                </tbody>\n              </table> \n              </div> \n            </div>\n            \n            <div *ngIf=\"printArr\" class=\"w100 rtl ion-margin\"> \n              <div class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n                <div class=\"rtl ion-text-center\" style=\" width:20% ;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>صافي المبلغ  / total  </ion-label>\n                </div>\n                <div class=\"rtl ion-text-center \"  style=\"width:30% ;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label> {{formatNumberWithSeparators(printArr[0].payInvo.tot_pr)}}</ion-label>\n                </div>\n              </div>\n              <div  class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n                <div class=\"rtl ion-text-center\" style=\" width:20% ;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>   نسبة الضريبة % / VAT%</ion-label>\n                </div>\n                <div class=\"rtl ion-text-center \"  style=\"width:30% ;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>  {{formatNumberWithSeparators(printArr[0].payInvo.discount)}} </ion-label>\n                </div>\n              </div>\n              <div  class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n                <div class=\"rtl ion-text-center\" style=\" width:20% ;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label> قيمة الضريبة / VAT </ion-label>\n                </div>\n                <div class=\"rtl ion-text-center \"  style=\"width:30% ;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>  {{formatNumberWithSeparators(printArr[0].payInvo.discount)}} </ion-label>\n                </div>\n              </div> \n\n              <div   class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n                <div class=\"rtl ion-text-center\" style=\" width:20% ;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label> صافي المبلغ شامل الضريبة / total include VAT   </ion-label>\n                </div>\n                <div class=\"rtl ion-text-center \"  style=\"width:30% ;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label> {{formatNumberWithSeparators(printArr[0].payInvo.tot_pr - +printArr[0].payInvo.discount)}}   </ion-label>\n                </div>\n              </div> \n           </div>\n            \n           <div *ngIf=\"printArr\">\n              <!-- <qrcode [qrdata]=\"printArr[0].qrcodedata\" size=\"256\" level=\"'M'\"></qrcode>   -->\n           </div>\n           <div *ngIf=\"printArr\" class=\"w100 rtl ion-margin\"> \n            \n            <h6 class=\"ion-text-center\"><ion-label>  Thank You For Visit    </ion-label> </h6>\n            <h6 class=\"ion-text-center\"><ion-label>    شكرا لزيارتكم  </ion-label> </h6>\n          </div>\n          <div *ngIf=\"printArr\" class=\"w100 rtl ion-margin\"> \n            \n            <h6 class=\"ion-text-center\"><ion-label>    : {{printArr[0].company.address}} </ion-label> </h6>\n          </div>\n\n          <div *ngIf=\"printArr\" class=\"w100 rtl ion-margin\"> \n           \n            <h6 class=\"ion-text-center\"><ion-label>  الهاتف / phone  : {{printArr[0].company.phone - printArr[0].company.phone2 }}     </ion-label> </h6>\n             \n          </div>\n        </div>  \n      </div>\n  </div>  \n</ion-content>\n\n\n<!-- NEW ENHANCED PRINTING STYLE -->\n<ion-content *ngIf=\"mode == 'enhanced'\">\n  <!-- Loading indicator for images -->\n  <div *ngIf=\"!imagesLoaded\" style=\"position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.9); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;\">\n    <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n    <p style=\"margin-top: 16px; font-size: 14px; color: #666;\">جاري تحضير الصور للطباعة...</p>\n    <p style=\"font-size: 12px; color: #999;\">Preparing images for printing...</p>\n  </div>\n\n  <!-- Currency Information Header -->\n  <div class=\"currency-info\" style=\"font-size: 0.8em; margin: 10px 20px; border-bottom: 1px solid #ccc; padding-bottom: 5px; text-align: center;\" *ngIf=\"currentCurrency !== 'SDG'\">\n    <p>العملة المحددة: {{currentCurrency}} - سعر الصرف: {{exchangeRate | number:'1.2-6'}}</p>\n    <p>جميع القيم معروضة بالعملة المحددة مع القيمة بالجنيه السوداني</p>\n  </div>\n  \n  <div style=\"padding: 13px;\">\n    <div #printarea1 id=\"printarea1\">\n      <!-- Header with Images and Title -->\n      <div style=\"display: table; width: 100%; margin-bottom: 12px;\">\n        <div style=\"display: table-cell; width: 150px; text-align: left; vertical-align: middle;\">\n          <img [src]=\"vehicleBase64 || getVehicleImagePath()\" style=\"width: 120px; height: 80px; object-fit: contain;\" alt=\"Vehicle\">\n        </div>\n        <div style=\"display: table-cell; text-align: center; vertical-align: middle;\">\n          <h2 style=\"margin: 5px 0 0 0; font-size: 30px;\">   <strong>GVS</strong>      </h2>\n          <h1 style=\"margin: 0; padding: 10px; background-color: #f0f0f0; display: inline-block; font-size: 30px;\" \n            *ngIf=\"page=='sales' || page=='sales_record'\">  بيان</h1>\n        </div>\n        <div style=\"display: table-cell; width: 150px; text-align: right; vertical-align: middle;\">\n          <img [src]=\"logoBase64 || 'assets/imgs/logo.png'\" style=\"width: 120px; height: 80px; object-fit: contain;\" alt=\"Logo\">\n        </div>\n      </div>\n\n     \n\n      <!-- General Information Section - RTL -->\n      <div *ngIf=\"printArr\" style=\"margin-bottom: 13px;margin-top: 20px; border: 1px solid #ccc; padding: 15px; direction: rtl;\">\n        <div style=\"font-size: 14px; margin-right: 10px;\">\n          <!-- First Row -->\n          <div style=\"margin-bottom: 8px; border-bottom: 1px dotted #ccc; padding-bottom: 8px;\">\n            <span style=\"display: inline-block; width: 48%; text-align: right;\">\n              <strong>التاريخ: </strong>{{printArr[0].payInvo.pay_date}}\n            </span>\n            <span style=\"display: inline-block; width: 48%; text-align: right;\">\n              <strong *ngIf=\"page=='sales' || page=='sales_record'\">العميل: </strong>\n              <strong *ngIf=\"page=='perch' || page=='perch_record'\">المورد: </strong>\n              <span *ngIf=\"printArr[0].sub_nameNew.length == 0 && (page =='sales' || page =='perch')\">\n                {{printArr[0].selectedAccount.sub_name}}\n              </span>\n              <span *ngIf=\"printArr[0].sub_nameNew.length == 0 && (page =='sales_record' || page =='perch_record')\">\n                {{printArr[0].selectedAccount}}\n              </span>\n              <span *ngIf=\"printArr[0].sub_nameNew.length > 0\">{{printArr[0].sub_nameNew}}</span>\n            </span>\n          </div>\n          <!-- Second Row -->\n          <div style=\"margin-bottom: 8px;\">\n            <span style=\"display: inline-block; width: 48%; text-align: right;\" *ngIf=\"printArr[0].selectedAccount.address && printArr[0].selectedAccount.address.trim() != ''\">\n              <strong>العنوان: </strong>{{printArr[0].selectedAccount.address}}\n            </span>\n            <span style=\"display: inline-block; width: 48%; text-align: right;\" *ngIf=\"printArr[0].selectedAccount.phone && printArr[0].selectedAccount.phone.trim() != ''\">\n              <strong>الهاتف: </strong>{{printArr[0].selectedAccount.phone}}\n            </span>\n          </div> \n        </div>\n      </div>\n\n      <!-- Items Table - RTL -->\n      <div *ngIf=\"printArr\" style=\"margin-bottom: 20px; direction: rtl;\">\n        <table style=\"width: 100%; border-collapse: collapse; font-size: 12px; direction: rtl;\">\n          <thead>\n            <tr style=\"background-color: #d3d3d3;\">\n              <th style=\"border: 1px solid #000; padding: 10px; text-align: center;\">التسلسل</th>\n              <th style=\"border: 1px solid #000; padding: 10px; text-align: center;\">الصنف</th>\n              <th style=\"border: 1px solid #000; padding: 10px; text-align: center;\">الكمية</th>\n              <th style=\"border: 1px solid #000; padding: 10px; text-align: center;\" *ngIf=\"page=='sales' || page=='sales_record'\">\n                سعر الوحدة \n              </th>\n              <th style=\"border: 1px solid #000; padding: 10px; text-align: center;\" *ngIf=\"page=='perch' || page=='perch_record'\">\n                سعر الشراء \n              </th>\n              <th style=\"border: 1px solid #000; padding: 10px; text-align: center;\">المجموع </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of printArr[0].itemList; let i = index\">\n              <td style=\"border: 1px solid #000; padding: 3px; text-align: center;font-size: 16px;\">{{i+1}}</td>\n              <td style=\"border: 1px solid #000; padding: 3px; text-align: right;font-size: 16px;\">{{item.item_name}}</td>\n              <td style=\"border: 1px solid #000; padding: 3px; text-align: center;font-size: 16px;\">{{item.quantity}}</td>\n              <td style=\"border: 1px solid #000; padding: 3px; text-align: center;font-size: 16px;\" *ngIf=\"page=='sales' || page=='sales_record'\">\n                {{formatNumberWithSeparators(item.pay_price)}}\n              </td>\n              <td style=\"border: 1px solid #000; padding: 3px; text-align: center;font-size: 16px;\" *ngIf=\"page=='perch' || page=='perch_record'\">\n                {{formatNumberWithSeparators(item.perch_price)}}\n              </td>\n              <td style=\"border: 1px solid #000; padding: 3px; text-align: center;font-size: 16px;\">{{formatNumberWithSeparators(item.tot)}}</td>\n            </tr>\n            <!-- Totals Row -->\n            <!-- <tr style=\"background-color: #f0f0f0; font-weight: bold;\">\n                <td style=\"border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold;\"></td>\n              <td style=\"border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold;\"></td>\n              <td style=\"border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold;\">{{printArr[0].itemList.length}}</td>\n              <td style=\"border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold;\" *ngIf=\"page=='sales' || page=='sales_record' || page=='perch' || page=='perch_record'\"></td>\n              <td style=\"border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold;\">{{formatDualCurrency(printArr[0].payInvo.tot_pr)}}</td>\n            </tr> -->\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Totals Section - RTL with Values After Colon -->\n      <div *ngIf=\"printArr\" style=\"margin-top: 20px; border: 1px solid #ccc; padding: 15px; direction: rtl;\">\n        <div style=\"font-size: 14px; margin-right: 10px;\">\n          <!-- All totals in one row -->\n          <div style=\"margin-bottom: 8px; border-bottom: 1px dotted #ccc; padding-bottom: 8px;\">\n            <span style=\"display: inline-block; width: 32%; text-align: right;\">\n              <strong>إجمالي المبلغ : </strong>{{formatNumberWithSeparators(printArr[0].payInvo.tot_pr)}}\n            </span>\n            <span style=\"display: inline-block; width: 32%; text-align: right;\" *ngIf=\"+printArr[0].payInvo.discount > 0\">\n              <strong>الخصم : </strong>{{formatNumberWithSeparators(printArr[0].payInvo.discount)}}\n            </span>\n            <span style=\"display: inline-block; width: 32%; text-align: right;\" *ngIf=\"+printArr[0].payInvo.discount > 0\">\n              <strong>الإجمالي بعد الخصم : </strong>{{formatNumberWithSeparators(printArr[0].payInvo.tot_pr - +printArr[0].payInvo.discount)}}\n            </span>\n            <!-- Hidden pay amount for enhanced mode -->\n          </div>\n        </div>\n      </div>\n\n      <!-- User Information - RTL -->\n      <div *ngIf=\"printArr\" style=\"margin-top: 20px; text-align: right; font-size: 12px; direction: rtl;\">\n        <p><strong>اسم المستخدم:</strong> {{printArr[0].payInvo.user_name}}</p>\n      </div>\n\n      <!-- Footer -->\n      <!-- <div style=\"margin-top: 30px; text-align: center; font-size: 12px; border-top: 1px solid #ccc; padding-top: 10px;\">\n        <p style=\"margin: 5px 0;\"><strong>شكراً لزيارتكم</strong></p>\n        <p style=\"margin: 5px 0;\">{{printArr[0].company?.address || 'العنوان غير متوفر'}}</p>\n        <p style=\"margin: 5px 0;\">الهاتف: {{printArr[0].company?.phone || 'غير متوفر'}}</p>\n      </div> -->\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-content *ngIf=\"mode != 'pos' && mode != 'enhanced'\">\n  <!-- Loading indicator for images -->\n  <div *ngIf=\"!imagesLoaded\" style=\"position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.9); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000;\">\n    <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n    <p style=\"margin-top: 16px; font-size: 14px; color: #666;\">جاري تحضير الصور للطباعة...</p>\n    <p style=\"font-size: 12px; color: #999;\">Preparing images for printing...</p>\n  </div>\n  <div class=\"ion-padding\"  >\n      <div   #printarea1  id=\"printarea1\" >\n        <h4 class=\"ion-text-center\">GVS FOR IMPORT AND EXPORT </h4>\n        <h4 class=\"ion-text-center\">جي في اس للإستيراد والتصدير </h4>\n        <h4 class=\"ion-text-center\"  *ngIf=\"page=='sales' || page=='sales_record' || page=='perch' || page=='perch_record' ||  page=='perchOrderAr' || page=='perchOrderAr-record'\">POWERMAX , SIMBA , GIRISH الوكيل الحصري لماركات  </h4>\n        <h4 class=\"ion-text-center\"  *ngIf=\" page=='perchOrderEn' || page=='perchOrderEn-record'\"> Exclusive agent for brands (POWERMAX , SIMBA , GIRISH )  </h4>\n       \n        <h3 class=\"ion-text-center\" *ngIf=\"page=='sales' || page=='sales_record'\"> فاتورة مبيعات  </h3> \n        <h3 class=\"ion-text-center\"  *ngIf=\"page=='perch' || page=='perch_record'\"> فاتورة مشتريات  </h3> \n        <h3 class=\"ion-text-center\"  *ngIf=\"page=='sales_returns' || page=='sales_return_record'\"> فاتورة مرتجعة مبيعات  </h3> \n        <h3 class=\"ion-text-center\"  *ngIf=\"page=='perchOrderEn' || page=='perchOrderEn-record'\">  Purchase Order  </h3> \n        <h3 class=\"ion-text-center\"  *ngIf=\"page=='perchOrderAr' || page==' perchOrderAr-record'\"> امر شراء    </h3> \n        \n        \n        \n        <div class=\"ion-margin-top rtl\"  *ngIf=\"printArr && page!='perchOrderEn' && page!='perchOrderAr' && page!='perchOrderAr-record'  && page!='perchOrderEn-record'\">\n          <div class=\"w100 rtl\" style=\"display:inline-block ;\">\n            <div class=\" rtl flr ion-margin\" style=\"width: 30%; position: relative; float: left; text-align:left;\">\n              <ion-label>التاريخ :</ion-label> {{printArr[0].payInvo.pay_date}}\n            </div>\n          \n            <div class=\"ion-margin \" *ngIf=\"page=='sales' || page=='sales_record'\" style=\" width: 60%; position: relative; float: right;\">\n              <ion-label *ngIf=\"printArr[0].sub_nameNew.length == 0 && page =='sales' \">العميل :\n                {{printArr[0].selectedAccount.sub_name}}</ion-label>\n              <ion-label *ngIf=\"printArr[0].sub_nameNew.length == 0 && page =='sales_record' \">العميل :\n                {{printArr[0].selectedAccount}}</ion-label>\n              <ion-label *ngIf=\"printArr[0].sub_nameNew.length>0\">العميل : {{printArr[0].sub_nameNew}}</ion-label>\n            </div>\n  \n            <div class=\"ion-margin \" *ngIf=\"page =='perch' || page=='perch_record'\"  style=\" width: 60%; position: relative; float: right;\">\n              <ion-label *ngIf=\"printArr[0].sub_nameNew.length == 0 && page =='perch' \">المورد :\n                {{printArr[0].selectedAccount.sub_name}}</ion-label>\n              <ion-label *ngIf=\"printArr[0].sub_nameNew.length == 0 && page =='perch_record' \">المورد :\n                {{printArr[0].selectedAccount}}</ion-label>\n              <ion-label *ngIf=\"printArr[0].sub_nameNew.length>0\">المورد : {{printArr[0].sub_nameNew}}</ion-label>\n            </div>\n          </div>\n\n          <div class=\"w100 rtl\" style=\"display:inline-block ;\">\n            <div class=\"ion-margin\" *ngIf=\"(page=='sales' || page=='sales_record') && printArr[0].selectedAccount.address && printArr[0].selectedAccount.address.trim() != ''\" style=\"width: 30%; position: relative; float: right ; text-align:right;\"> \n              <ion-label>المكان : {{printArr[0].selectedAccount.address}}</ion-label>\n            </div>\n\n            <div *ngIf=\"(page=='sales' || page=='sales_record') && printArr[0].selectedAccount.phone && printArr[0].selectedAccount.phone.trim() != ''\" class=\"rtl ion-margin\" style=\"width: 30%; position: relative; float: left; text-align:left;\">\n              <ion-label>  رقم الهاتف   :  {{printArr[0].selectedAccount.phone}} </ion-label> \n            </div> \n             <!--   -->\n          </div> \n\n\n            \n\n            <div class=\"ion-margin rtl\"  >\n              <div class=\"ion-margin\">\n                <table class=\"table five-column\" >\n                <thead>\n                  <tr>\n                  <th class=\"th\">التسلسل</th>\n                  <th class=\"th\">الصنف</th>\n                  <th class=\"th\">الكمية</th>\n                  <th  *ngIf=\"page=='perch' || page=='perch_record'\" class=\"th\">\n                    سعر الشراء \n                  </th>\n                  <th *ngIf=\"page=='sales' || page=='sales_record'\" class=\"th\">\n                    سعر الوحده \n                  </th>\n                  <th class=\"th\">المجموع </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr   *ngFor=\"let item of printArr[0].itemList ; let i = index\">\n                    <td class=\"td\">{{i+1}}</td>\n                    <td class=\"td\">{{item.item_name}}</td>\n                   <td class=\"td\"> {{item.quantity}}</td>\n                   <td *ngIf=\"page=='sales' || page=='sales_record'\" class=\"td\">\n                    {{formatNumberWithSeparators(item.pay_price)}}\n                  </td>\n                   <td  *ngIf=\"page=='perch' || page=='perch_record'\" class=\"td\">\n                    {{formatNumberWithSeparators(item.perch_price)}}\n                  </td>\n                   <td class=\"td\">{{formatNumberWithSeparators(item.tot)}}</td>\n                  </tr> \n                  <tr>\n                    <td ></td>\n                    <td ></td>\n                    <td></td>\n                    <td></td>\n                    <td class=\"td\">{{formatNumberWithSeparators(printArr[0].payInvo.tot_pr)}}</td>\n                  </tr>\n                </tbody>\n              </table> \n              </div> \n            </div>\n\n            <div *ngIf=\"printArr\" class=\"w100 rtl ion-margin\"> \n              <!-- All totals in one row -->\n              <div class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n                <div class=\"rtl ion-text-center\" style=\" width:15% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>إجمالي المبلغ  </ion-label>\n                </div>\n                <div class=\"rtl ion-text-center \"  style=\"width:18% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label> {{formatNumberWithSeparators(printArr[0].payInvo.tot_pr)}}</ion-label>\n                </div>\n                <div *ngIf=\"+printArr[0].payInvo.discount>0\" class=\"rtl ion-text-center\" style=\" width:12% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>الخصــم  </ion-label>\n                </div>\n                <div *ngIf=\"+printArr[0].payInvo.discount>0\" class=\"rtl ion-text-center \"  style=\"width:15% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>{{formatNumberWithSeparators(printArr[0].payInvo.discount)}}</ion-label>\n                </div>\n                <div *ngIf=\"+printArr[0].payInvo.discount>0\" class=\"rtl ion-text-center\" style=\" width:15% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>الإجمالي بعدالخصم</ion-label>\n                </div>\n                <div *ngIf=\"+printArr[0].payInvo.discount>0\" class=\"rtl ion-text-center \"  style=\"width:20% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>{{formatNumberWithSeparators(printArr[0].payInvo.tot_pr - +printArr[0].payInvo.discount)}}</ion-label>\n                </div>\n              </div>\n              <!-- Hidden pay amount section for regular mode -->\n              <!-- Hidden remaining amount section for regular mode -->\n             \n              <!-- <div   class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n                <div class=\"rtl ion-text-center\" style=\" width:20% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>  الرصيد الحالي    </ion-label>\n                  <ion-label *ngIf = \"printArr[0].balanceStatus == 'debit'\"> <strong>( عليه ) </strong></ion-label>\n                  <ion-label *ngIf = \"printArr[0].balanceStatus == 'credit'\">  <strong>( له ) </strong>  </ion-label>\n                </div>\n                <div class=\"rtl ion-text-center \"  style=\"width:30% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                  <ion-label>  {{formatBalance(printArr[0].sub_balanse)}} ج.س</ion-label>\n                </div>\n              </div> -->\n\n              <!-- \"sub_balanse\": this.selectedAccount.sub_balance,\n              \"balanceStatus\": this.currentCustumerStatus -->\n          \n              <div class=\"rtl ion-margin\" style=\"width: 30%; position: relative; float: left; text-align:left;\">\n                <ion-label> اسم المستخدم :  {{printArr[0].payInvo.user_name}} </ion-label> \n              </div>\n           </div>\n        </div>\n\n\n      <!-- purchase orders arabic -->\n\n\n      <div class=\"ion-margin-top rtl\"  *ngIf=\"printArr && ( page=='perchOrderAr' || page=='perchOrderAr-record')\">\n        <div class=\"w100 rtl\" style=\"display:inline-block ;\">\n          <div class=\" rtl flr ion-margin\" style=\"width: 30%; position: relative; float: left; text-align:left;\">\n            <ion-label>التاريخ :</ion-label> {{printArr[0].payInvo.pay_date}}\n          </div>\n        \n          <div class=\"ion-margin\" style=\" width: 60%; position: relative; float: right;\">\n            <ion-label *ngIf=\"printArr[0].sub_nameNew.length == 0 && page =='perchOrderAr' \">المورد :\n              {{printArr[0].selectedAccount.sub_name}}</ion-label>\n            <ion-label *ngIf=\"printArr[0].sub_nameNew.length == 0 && page =='perchOrderAr-record' \">المورد :\n              {{printArr[0].selectedAccount}}</ion-label>\n            <ion-label *ngIf=\"printArr[0].sub_nameNew.length>0\">المورد : {{printArr[0].sub_nameNew}}</ion-label>\n          </div>\n        </div>\n\n        <div class=\"w100 rtl\" style=\"display:inline-block ;\">\n          <div class=\"ion-margin\" *ngIf=\"printArr[0].selectedAccount.address && printArr[0].selectedAccount.address.trim() != ''\" style=\"width: 30%; position: relative; float: right ; text-align:right;\"> \n            <ion-label>العنوان : {{printArr[0].selectedAccount.address}}</ion-label>\n          </div>\n\n          <div class=\"rtl ion-margin\" *ngIf=\"printArr[0].selectedAccount.phone && printArr[0].selectedAccount.phone.trim() != ''\" style=\"width: 30%; position: relative; float: left; text-align:left;\">\n            <ion-label>  رقم الهاتف   :  {{printArr[0].selectedAccount.phone}} </ion-label> \n          </div> \n           <!--   -->\n        </div> \n\n          <div class=\"ion-margin rtl\"  >\n            <div class=\"ion-margin\">\n              <table class=\"table five-column\" >\n              <thead>\n                <tr>\n                <th class=\"th\">التسلسل</th>\n                <th class=\"th\">الصنف</th>\n                <th class=\"th\">الكمية</th>\n                <th  class=\"th\">\n                  سعر الشراء \n                </th>\n                \n                <th class=\"th\">المجموع </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr   *ngFor=\"let item of printArr[0].itemList ; let i = index\">\n                  <td class=\"td\">{{i+1}}</td>\n                  <td class=\"td\">{{item.item_name}}</td>\n                 <td class=\"td\"> {{item.quantity}}</td>\n                 \n                 <td   class=\"td\">\n                  {{formatNumberWithSeparators(item.perch_price)}}\n                </td>\n                 <td class=\"td\">{{formatNumberWithSeparators(item.tot)}}</td>\n                </tr> \n                <tr>\n                  <td ></td>\n                  <td ></td>\n                  <td></td>\n                  <td></td>\n                  <td class=\"td\">{{formatNumberWithSeparators(printArr[0].payInvo.tot_pr)}}</td>\n                </tr>\n              </tbody>\n            </table> \n            </div> \n          </div>\n\n          <div *ngIf=\"printArr\" class=\"w100 rtl ion-margin\"> \n            <div class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n              <div class=\"rtl ion-text-center\" style=\" width:20% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                <ion-label>إجمالي المبلغ </ion-label>\n              </div>\n              <div class=\"rtl ion-text-center \"  style=\"width:30% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                <ion-label> {{formatCurrencyWithSeparators(printArr[0].payInvo.tot_pr)}}</ion-label>\n              </div>\n            </div>\n\n            \n            <!-- <div *ngIf=\"+printArr[0].payInvo.discount>0\" class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n              <div class=\"rtl ion-text-center\" style=\" width:20% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                <ion-label>   الخصــم </ion-label>\n              </div>\n              <div class=\"rtl ion-text-center \"  style=\"width:30% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                <ion-label>  {{formatCurrencyWithSeparators(printArr[0].payInvo.discount)}}  </ion-label>\n              </div>\n            </div>  \n            <div *ngIf=\"+printArr[0].payInvo.discount>0\" class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n              <div class=\"rtl ion-text-center\" style=\" width:20% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                <ion-label> الإجمالي بعدالخصم    </ion-label>\n              </div>\n              <div class=\"rtl ion-text-center \"  style=\"width:30% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n                <ion-label> {{formatCurrencyWithSeparators(printArr[0].payInvo.tot_pr - +printArr[0].payInvo.discount)}}  </ion-label>\n              </div>\n            </div> -->\n            <!-- \"sub_balanse\": this.selectedAccount.sub_balance,\n            \"balanceStatus\": this.currentCustumerStatus -->\n        \n            <div class=\"rtl ion-margin\" style=\"margin-top:20px;width: 30%; position: relative; float: right; text-align:right;\">\n              <ion-label> تعليق:  {{printArr[0].payInvo.payComment}} </ion-label> \n            </div>\n         </div>\n      </div>\n\n <!-- purchase orders english-->\n\n\n <div class=\"ion-margin-top\"  *ngIf=\"printArr && (page=='perchOrderEn' || page=='perchOrderEn-record')\">\n  <div class=\"w100\" style=\"display:inline-block ;\">\n    <div class=\"flr ion-margin\" style=\"width: 30%; position: relative; float: right; text-align:right;\">\n      <ion-label>Date :</ion-label> {{printArr[0].payInvo.pay_date}}\n    </div>\n  \n    <div class=\"ion-margin\" style=\" width: 60%; position: relative; float: left;\">\n      <ion-label *ngIf=\"printArr[0].sub_nameNew.length == 0 && page =='perchOrderEn' \">Supplier :\n        {{printArr[0].selectedAccount.sub_name}}</ion-label>\n      <ion-label *ngIf=\"printArr[0].sub_nameNew.length == 0 && page =='perchOrderEn-record' \">Supplier :\n        {{printArr[0].selectedAccount}}</ion-label>\n      <ion-label *ngIf=\"printArr[0].sub_nameNew.length>0\">Supplier : {{printArr[0].sub_nameNew}}</ion-label>\n    </div>\n  </div>\n\n  <div class=\"w100 rtl\" style=\"display:inline-block ;\">\n    <div class=\"ion-margin\" *ngIf=\"printArr[0].selectedAccount.address && printArr[0].selectedAccount.address.trim() != ''\" style=\"width: 30%; position: relative; float: right ; text-align:right;\"> \n      <ion-label>Address : {{printArr[0].selectedAccount.address}}</ion-label>\n    </div>\n\n    <div class=\"rtl ion-margin\" *ngIf=\"printArr[0].selectedAccount.phone && printArr[0].selectedAccount.phone.trim() != ''\" style=\"width: 30%; position: relative; float: left; text-align:left;\">\n      <ion-label> Phone No  :  {{printArr[0].selectedAccount.phone}} </ion-label> \n    </div> \n     <!--   -->\n  </div> \n\n    <div class=\"ion-margin rtl\"  >\n      <div class=\"ion-margin\">\n        <table class=\"table five-column\" >\n        <thead>\n          <tr>\n          <th class=\"th\">No</th>\n          <th class=\"th\">Item</th>\n          <th class=\"th\">Qty</th>\n          <th   class=\"th\">\n            Purchace price \n          </th>\n          \n          <th class=\"th\">Total </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr   *ngFor=\"let item of printArr[0].itemList ; let i = index\">\n            <td class=\"td\">{{i+1}}</td>\n            <td class=\"td\">{{item.item_desc}}</td>\n           <td class=\"td\"> {{item.quantity}}</td>\n           \n           <td   class=\"td\">\n            {{formatNumberWithSeparators(item.perch_price)}}\n          </td>\n           <td class=\"td\">{{formatNumberWithSeparators(item.tot)}}</td>\n          </tr> \n          <tr>\n            <td ></td>\n            <td ></td>\n            <td></td>\n            <td></td>\n            <td class=\"td\">{{formatNumberWithSeparators(printArr[0].payInvo.tot_pr)}}</td>\n          </tr>\n        </tbody>\n      </table> \n      </div> \n    </div>\n\n    <div *ngIf=\"printArr\" class=\"w100 rtl ion-margin\"> \n      <div class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n        <div class=\"rtl ion-text-center\" style=\" width:20% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n          <ion-label>  Total  </ion-label>\n        </div>\n        <div class=\"rtl ion-text-center \"  style=\"width:30% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n          <ion-label> {{formatNumberWithSeparators(printArr[0].payInvo.tot_pr)}}</ion-label>\n        </div>\n      </div>\n\n      \n      <!-- <div *ngIf=\"+printArr[0].payInvo.discount>0\" class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n        <div class=\"rtl ion-text-center\" style=\" width:20% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n          <ion-label>   الخصــم </ion-label>\n        </div>\n        <div class=\"rtl ion-text-center \"  style=\"width:30% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n          <ion-label>  {{formatCurrencyWithSeparators(printArr[0].payInvo.discount)}}</ion-label>\n        </div>\n      </div>  \n      <div *ngIf=\"+printArr[0].payInvo.discount>0\" class=\"w100 rtl\" style=\"display:inline-block ;margin-right: 16px;\">\n        <div class=\"rtl ion-text-center\" style=\" width:20% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n          <ion-label> الإجمالي بعدالخصم    </ion-label>\n        </div>\n        <div class=\"rtl ion-text-center \"  style=\"width:30% ;border: .5px solid #dddddd;text-align: center;padding: 8px; position: relative; float: right;\">\n          <ion-label> {{formatCurrencyWithSeparators(printArr[0].payInvo.tot_pr - +printArr[0].payInvo.discount)}}</ion-label>\n        </div>\n      </div> -->\n      <!-- \"sub_balanse\": this.selectedAccount.sub_balance,\n      \"balanceStatus\": this.currentCustumerStatus -->\n  \n      <div class=\"rtl ion-margin\" style=\"margin-top:20px;width: 30%; position: relative; float: right; text-align:right;\">\n        <ion-label> Comment:  {{printArr[0].payInvo.payComment}} </ion-label> \n      </div>\n   </div>\n</div>\n\n      </div>\n      \n      <!-- Exchange Rate Footer -->\n      <div class=\"exchange-rate-footer\" style=\"font-size: 0.7em; text-align: center; border-top: 1px solid #ccc; padding-top: 5px; margin-top: 20px;\" *ngIf=\"getExchangeRateFooter()\">\n        {{getExchangeRateFooter()}}\n      </div>\n  </div>  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_print-modal_print-modal_page_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_export_service_ts"],{

/***/ 79002:
/*!********************************************!*\
  !*** ./src/app/services/export.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportService": () => (/* binding */ ExportService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 26772);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ 59055);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 95472);





let ExportService = class ExportService {
    constructor(injector) {
        this.injector = injector;
        this.MAX_ROWS_WARNING = 1000;
        this.MAX_ROWS_LIMIT = 5000;
        this.pdfMakeInitialized = false;
        // PDFMake will be initialized lazily when first used
    }
    getToastController() {
        if (!this.toastController) {
            this.toastController = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController);
        }
        return this.toastController;
    }
    getLoadingController() {
        if (!this.loadingController) {
            this.loadingController = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController);
        }
        return this.loadingController;
    }
    getAlertController() {
        if (!this.alertController) {
            this.alertController = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController);
        }
        return this.alertController;
    }
    initializePDFMake() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.pdfMakeInitialized) {
                try {
                    // Dynamic import to avoid circular dependency
                    const [pdfMake, pdfFonts] = yield Promise.all([
                        __webpack_require__.e(/*! import() */ "node_modules_pdfmake_build_pdfmake_js").then(__webpack_require__.t.bind(__webpack_require__, /*! pdfmake/build/pdfmake */ 58518, 23)),
                        __webpack_require__.e(/*! import() */ "node_modules_pdfmake_build_vfs_fonts_js").then(__webpack_require__.t.bind(__webpack_require__, /*! pdfmake/build/vfs_fonts */ 36849, 23))
                    ]);
                    // PDFMake modules loaded successfully
                    // Handle different possible module structures
                    let vfs;
                    if (pdfFonts.pdfMake && pdfFonts.pdfMake.vfs) {
                        vfs = pdfFonts.pdfMake.vfs;
                    }
                    else if (pdfFonts.default && pdfFonts.default.pdfMake && pdfFonts.default.pdfMake.vfs) {
                        vfs = pdfFonts.default.pdfMake.vfs;
                    }
                    else if (pdfFonts.vfs) {
                        vfs = pdfFonts.vfs;
                    }
                    else {
                        // Try to access the vfs directly from the module
                        vfs = Object.values(pdfFonts)[0];
                    }
                    if (!vfs) {
                        throw new Error('Could not find vfs in pdfFonts module');
                    }
                    // Initialize PDFMake with fonts
                    pdfMake.vfs = vfs;
                    // Debug: Log available fonts in VFS
                    console.log('Available fonts in VFS:', Object.keys(vfs || {}));
                    // Configure fonts to use only available VFS fonts
                    const availableFonts = Object.keys(vfs || {});
                    const hasRoboto = availableFonts.some(font => font.includes('Roboto'));
                    if (hasRoboto) {
                        // Use available Roboto fonts from VFS
                        pdfMake.fonts = {
                            Roboto: {
                                normal: availableFonts.find(f => f.includes('Roboto') && f.includes('Regular')) || availableFonts.find(f => f.includes('Roboto')),
                                bold: availableFonts.find(f => f.includes('Roboto') && f.includes('Bold')) || availableFonts.find(f => f.includes('Roboto')),
                                italics: availableFonts.find(f => f.includes('Roboto') && f.includes('Italic')) || availableFonts.find(f => f.includes('Roboto')),
                                bolditalics: availableFonts.find(f => f.includes('Roboto') && f.includes('Bold') && f.includes('Italic')) || availableFonts.find(f => f.includes('Roboto'))
                            }
                        };
                    }
                    else {
                        // If no Roboto, use first available font or fallback
                        const firstFont = availableFonts[0];
                        if (firstFont) {
                            pdfMake.fonts = {
                                DefaultFont: {
                                    normal: firstFont,
                                    bold: firstFont,
                                    italics: firstFont,
                                    bolditalics: firstFont
                                }
                            };
                        }
                    }
                    this.pdfMakeInitialized = true;
                    return pdfMake;
                }
                catch (error) {
                    console.error('PDFMake initialization failed:', error);
                    throw error;
                }
            }
            else {
                // If already initialized, return the pdfMake module
                return __webpack_require__.e(/*! import() */ "node_modules_pdfmake_build_pdfmake_js").then(__webpack_require__.t.bind(__webpack_require__, /*! pdfmake/build/pdfmake */ 58518, 23));
            }
        });
    }
    formatDate(date, format = 'yyyy-MM-dd HH:mm') {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        if (format === 'yyyy-MM-dd HH:mm') {
            return `${year}-${month}-${day} ${hours}:${minutes}`;
        }
        else if (format === 'yyyy-MM-dd') {
            return `${year}-${month}-${day}`;
        }
        return `${year}-${month}-${day}`;
    }
    exportToPDF(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Check data size
            if (!(yield this.checkDataSize(config.data.length))) {
                return;
            }
            const loading = yield this.getLoadingController().create({
                message: 'جاري تصدير ملف PDF...',
                spinner: 'crescent'
            });
            yield loading.present();
            try {
                // Use PDFMake for better Arabic support
                yield this.exportToPDFWithPDFMake(config);
                yield this.showSuccessToast('تم تصدير ملف PDF بنجاح');
            }
            catch (error) {
                console.error('PDF Export Error:', error);
                yield this.showErrorToast('فشل في تصدير ملف PDF');
            }
            finally {
                yield loading.dismiss();
            }
        });
    }
    exportToPDFWithProfessionalTranslation(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4',
                putOnlyUsedFonts: true,
                compress: true
            });
            // Use standard fonts that work reliably
            doc.setFont('helvetica', 'normal');
            // Set document properties with English titles
            doc.setProperties({
                title: 'Inventory Report',
                subject: 'Stock Management Report',
                author: 'ERP System',
                creator: 'Stock Management System'
            });
            // Add header with professional translation
            this.addPDFHeaderWithTranslation(doc, config);
            // Add table with professional translation
            this.addPDFTableWithTranslation(doc, config);
            // Add footer with professional translation
            this.addPDFFooterWithTranslation(doc, config);
            // Save the PDF
            doc.save(`${config.fileName}.pdf`);
        });
    }
    detectArabicText(text) {
        if (!text)
            return false;
        // Check for Arabic characters (U+0600 to U+06FF)
        return /[\u0600-\u06FF]/.test(text);
    }
    processTextForPDF(text) {
        const hasArabic = this.detectArabicText(text);
        if (hasArabic) {
            return {
                text: text,
                alignment: 'right'
            };
        }
        else {
            return {
                text: text,
                alignment: 'left'
            };
        }
    }
    exportToPDFWithPDFMake(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // For now, let's fall back to jsPDF instead of PDFMake due to font issues
                console.warn('PDFMake has font loading issues, falling back to jsPDF');
                return this.exportToPDFWithJSPDF(config);
            }
            catch (error) {
                console.error('PDF export failed:', error);
                throw error;
            }
        });
    }
    exportToPDFWithPDFMakeOLD(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // Initialize PDFMake lazily with dynamic import
                const pdfMake = yield this.initializePDFMake();
                // Prepare table data for PDFMake
                const tableBody = [];
                // Add column headers with simple styling
                const headers = config.columns.map(col => {
                    const processedHeader = this.processTextForPDF(col.title);
                    return {
                        text: processedHeader.text,
                        alignment: processedHeader.alignment || 'right',
                        fillColor: '#4472C4',
                        color: 'white'
                    };
                });
                tableBody.push(headers);
                // Add data rows with simple styling
                config.data.forEach((row, index) => {
                    const rowData = config.columns.map(col => {
                        const cellValue = this.getCellValue(row, col, index + 1).toString();
                        const processedCell = this.processTextForPDF(cellValue);
                        return {
                            text: processedCell.text,
                            alignment: col.type === 'number' || col.type === 'currency' ? 'center' : processedCell.alignment || 'right'
                        };
                    });
                    tableBody.push(rowData);
                });
                // Minimal PDFMake document definition
                const docDefinition = {
                    pageSize: 'A4',
                    pageOrientation: 'landscape',
                    pageMargins: [20, 40, 20, 40],
                    defaultStyle: {
                        font: 'Roboto'
                    },
                    content: [
                        // Simple title
                        {
                            text: config.title,
                            fontSize: 18,
                            alignment: 'center',
                            margin: [0, 0, 0, 20]
                        },
                        // Simple subtitle if exists
                        ...(config.subtitle ? [{
                                text: config.subtitle,
                                fontSize: 14,
                                alignment: 'center',
                                margin: [0, 0, 0, 10]
                            }] : []),
                        // Simple date
                        {
                            text: config.currentDate || this.formatDate(new Date(), 'yyyy-MM-dd'),
                            fontSize: 12,
                            alignment: 'center',
                            margin: [0, 0, 0, 20]
                        },
                        // Simple table
                        {
                            table: {
                                headerRows: 1,
                                widths: config.columns.map(col => col.width ? `${col.width}%` : 'auto'),
                                body: tableBody
                            }
                        },
                        // Footer space
                        { text: '', margin: [0, 20, 0, 0] },
                        // Simple footer
                        {
                            columns: [
                                {
                                    text: `المستخدم: ${config.userName}`,
                                    fontSize: 8,
                                    alignment: 'left'
                                },
                                {
                                    text: `تاريخ التصدير: ${this.formatDate(new Date(), 'yyyy-MM-dd HH:mm')}`,
                                    fontSize: 8,
                                    alignment: 'right'
                                }
                            ]
                        }
                    ]
                };
                // Generate and download PDF
                const pdfDoc = pdfMake.createPdf(docDefinition);
                pdfDoc.download(`${config.fileName}.pdf`);
            }
            catch (error) {
                console.error('PDFMake Export Error:', error);
                throw error;
            }
        });
    }
    exportToPDFWithJSPDF(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { jsPDF } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! jspdf */ 26772));
                // Create PDF document with basic settings
                const pdf = new jsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                    format: 'a4'
                });
                // Enhanced Arabic text processing
                const processText = (text) => {
                    if (!text)
                        return '';
                    // Check if text contains Arabic characters
                    const hasArabic = /[\u0600-\u06FF]/.test(text);
                    if (hasArabic) {
                        // Convert Arabic text to a readable English equivalent
                        return this.convertArabicForPDF(text);
                    }
                    return text;
                };
                // Add title
                pdf.setFontSize(16);
                pdf.text(processText(config.title), 148, 20, { align: 'center' });
                // Add subtitle if exists
                let currentY = 30;
                if (config.subtitle) {
                    pdf.setFontSize(12);
                    pdf.text(processText(config.subtitle), 148, currentY, { align: 'center' });
                    currentY += 10;
                }
                // Add date
                pdf.setFontSize(10);
                pdf.text(config.currentDate || this.formatDate(new Date(), 'yyyy-MM-dd'), 148, currentY, { align: 'center' });
                currentY += 15;
                // Simple table layout
                const startX = 10;
                const rowHeight = 8;
                const pageWidth = 287;
                const colWidth = (pageWidth - 20) / config.columns.length;
                // Draw headers
                let currentX = startX;
                config.columns.forEach((col) => {
                    pdf.setFillColor(70, 130, 180);
                    pdf.rect(currentX, currentY, colWidth, rowHeight, 'F');
                    pdf.setTextColor(255, 255, 255);
                    pdf.setFontSize(10);
                    pdf.text(processText(col.title), currentX + 2, currentY + 5);
                    currentX += colWidth;
                });
                currentY += rowHeight;
                pdf.setTextColor(0, 0, 0);
                // Draw data
                config.data.forEach((row, rowIndex) => {
                    currentX = startX;
                    if (rowIndex % 2 === 0) {
                        pdf.setFillColor(245, 245, 245);
                        pdf.rect(startX, currentY, pageWidth - 20, rowHeight, 'F');
                    }
                    config.columns.forEach((col) => {
                        const cellValue = this.getCellValue(row, col, rowIndex + 1).toString();
                        pdf.setFontSize(9);
                        pdf.text(processText(cellValue), currentX + 2, currentY + 5);
                        pdf.setDrawColor(200, 200, 200);
                        pdf.rect(currentX, currentY, colWidth, rowHeight);
                        currentX += colWidth;
                    });
                    currentY += rowHeight;
                    if (currentY > 180) {
                        pdf.addPage();
                        currentY = 20;
                        // Redraw headers
                        currentX = startX;
                        config.columns.forEach((col) => {
                            pdf.setFillColor(70, 130, 180);
                            pdf.rect(currentX, currentY, colWidth, rowHeight, 'F');
                            pdf.setTextColor(255, 255, 255);
                            pdf.setFontSize(10);
                            pdf.text(processText(col.title), currentX + 2, currentY + 5);
                            currentX += colWidth;
                        });
                        currentY += rowHeight;
                        pdf.setTextColor(0, 0, 0);
                    }
                });
                // Add footer
                const pageCount = pdf.getNumberOfPages();
                for (let i = 1; i <= pageCount; i++) {
                    pdf.setPage(i);
                    pdf.setFontSize(8);
                    pdf.setTextColor(100, 100, 100);
                    pdf.text(processText(`المستخدم: ${config.userName}`), 20, 200);
                    pdf.text(processText(`تاريخ التصدير: ${this.formatDate(new Date(), 'yyyy-MM-dd HH:mm')}`), 200, 200);
                    pdf.text(processText(`صفحة ${i} من ${pageCount}`), 148, 200, { align: 'center' });
                }
                // Save PDF
                pdf.save(`${config.fileName}.pdf`);
            }
            catch (error) {
                console.error('jsPDF Export Error:', error);
                throw error;
            }
        });
    }
    convertArabicForPDF(text) {
        // Comprehensive Arabic to English translation map for PDF compatibility
        const arabicToEnglishTranslations = {
            // Basic terms
            'اسم الصنف': 'Item Name',
            'رقم الصنف': 'Item Code',
            'الكمية': 'Quantity',
            'السعر': 'Price',
            'المجموع': 'Total',
            'المجموع الكلي': 'Grand Total',
            'التاريخ': 'Date',
            'الوصف': 'Description',
            'المورد': 'Supplier',
            'العميل': 'Customer',
            'الحساب': 'Account',
            'الرصيد': 'Balance',
            'المخزون': 'Inventory',
            'التسلسل': 'Serial',
            'النوع': 'Type',
            'الفئة': 'Category',
            'الوحدة': 'Unit',
            'التكلفة': 'Cost',
            'الربح': 'Profit',
            'نسبة الربح': 'Profit Rate',
            'المبيعات': 'Sales',
            'المشتريات': 'Purchases',
            'المصروفات': 'Expenses',
            'الايرادات': 'Revenue',
            'الدفع': 'Payment',
            'الاستلام': 'Receipt',
            'المدين': 'Debit',
            'الدائن': 'Credit',
            'الاجمالي': 'Total',
            'الصافي': 'Net',
            'الخصم': 'Discount',
            'الضريبة': 'Tax',
            'الفاتورة': 'Invoice',
            'السند': 'Voucher',
            'القيد': 'Entry',
            'المستند': 'Document',
            'الملاحظات': 'Notes',
            'التفاصيل': 'Details',
            'العملة': 'Currency',
            'جنيه': 'EGP',
            'دولار': 'USD',
            'يورو': 'EUR',
            // Units
            'قطعة': 'Piece',
            'كيلو': 'Kg',
            'متر': 'Meter',
            'لتر': 'Liter',
            'جرام': 'Gram',
            'علبة': 'Box',
            'حبة': 'Item',
            'زجاجة': 'Bottle',
            'كيس': 'Bag',
            'عبوة': 'Package',
            // Status terms
            'مفعل': 'Active',
            'غير مفعل': 'Inactive',
            'متوفر': 'Available',
            'غير متوفر': 'Unavailable',
            'مكتمل': 'Complete',
            'غير مكتمل': 'Incomplete',
            'منتهي': 'Finished',
            'قيد التنفيذ': 'In Progress',
            // Common phrases
            'تقرير المخزون': 'Inventory Report',
            'تقرير المبيعات': 'Sales Report',
            'تقرير المشتريات': 'Purchase Report',
            'تقرير الحسابات': 'Accounts Report',
            'كشف الحساب': 'Account Statement',
            'الميزانية': 'Balance Sheet',
            'قائمة الدخل': 'Income Statement',
            'التدفق النقدي': 'Cash Flow',
            'المستخدم': 'User',
            'تاريخ التصدير': 'Export Date',
            'صفحة': 'Page',
            'من': 'of',
            'إلى': 'to',
            'في': 'in',
            'على': 'on',
            'مع': 'with',
            'بدون': 'without',
            'كل': 'all',
            'بعض': 'some',
            'أخرى': 'other',
            'جديد': 'new',
            'قديم': 'old',
            'كبير': 'large',
            'صغير': 'small',
            'عالي': 'high',
            'منخفض': 'low',
            'سريع': 'fast',
            'بطيء': 'slow'
        };
        try {
            let result = text;
            // First, try direct translation for common terms
            for (const [arabic, english] of Object.entries(arabicToEnglishTranslations)) {
                result = result.replace(new RegExp(arabic, 'g'), english);
            }
            // If still contains Arabic, try word-by-word processing
            if (/[\u0600-\u06FF]/.test(result)) {
                const words = result.split(/\s+/);
                const translatedWords = words.map(word => {
                    const cleanWord = word.replace(/[^\u0600-\u06FF\u0020-\u007E]/g, '');
                    // Check if word is in our dictionary
                    for (const [arabic, english] of Object.entries(arabicToEnglishTranslations)) {
                        if (cleanWord.includes(arabic) || arabic.includes(cleanWord)) {
                            return english;
                        }
                    }
                    // If not found, use transliteration
                    return this.transliterateArabicForPDF(cleanWord);
                });
                result = translatedWords.join(' ');
            }
            return result;
        }
        catch (error) {
            console.warn('Arabic conversion for PDF failed:', error);
            // Fallback: simple character replacement
            return this.transliterateArabicForPDF(text);
        }
    }
    transliterateArabicForPDF(text) {
        // Simple Arabic to Latin transliteration for PDF compatibility
        const arabicToLatin = {
            'ا': 'a', 'أ': 'a', 'إ': 'i', 'آ': 'aa',
            'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j',
            'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'dh',
            'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh',
            'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z',
            'ع': 'a', 'غ': 'gh', 'ف': 'f', 'ق': 'q',
            'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
            'ه': 'h', 'و': 'w', 'ي': 'y', 'ى': 'a',
            'ة': 'h', 'ء': '', 'ئ': 'i', 'ؤ': 'u',
            'لا': 'la', 'ال': 'al-',
            // Numbers
            '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4',
            '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9',
            // Punctuation
            '،': ',', '؛': ';', '؟': '?', '٪': '%'
        };
        let result = '';
        for (const char of text) {
            result += arabicToLatin[char] || char;
        }
        // Clean up and capitalize first letter
        result = result.replace(/\s+/g, ' ').trim();
        if (result) {
            result = result.charAt(0).toUpperCase() + result.slice(1);
        }
        return result || text;
    }
    exportToExcel(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Check data size
            if (!(yield this.checkDataSize(config.data.length))) {
                return;
            }
            const loading = yield this.getLoadingController().create({
                message: 'جاري تصدير ملف Excel...',
                spinner: 'crescent'
            });
            yield loading.present();
            try {
                // Create workbook
                const wb = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.book_new();
                // Prepare data
                const worksheetData = this.prepareExcelData(config);
                // Create worksheet
                const ws = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.aoa_to_sheet(worksheetData);
                // Apply modern styling
                this.applyModernExcelStyling(ws, config);
                // Set column widths
                const colWidths = config.columns.map(col => ({ wch: col.width || 15 }));
                ws['!cols'] = colWidths;
                // Add worksheet to workbook
                xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.book_append_sheet(wb, ws, 'البيانات');
                // Write file
                xlsx__WEBPACK_IMPORTED_MODULE_3__.writeFile(wb, `${config.fileName}.xlsx`);
                yield this.showSuccessToast('تم تصدير ملف Excel بنجاح');
            }
            catch (error) {
                console.error('Excel Export Error:', error);
                yield this.showErrorToast('فشل في تصدير ملف Excel');
            }
            finally {
                yield loading.dismiss();
            }
        });
    }
    checkDataSize(rowCount) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (rowCount === 0) {
                yield this.showErrorToast('لا توجد بيانات للتصدير');
                return false;
            }
            if (rowCount > this.MAX_ROWS_LIMIT) {
                yield this.showErrorToast(`البيانات كثيرة جداً (${rowCount} صف). الحد الأقصى هو ${this.MAX_ROWS_LIMIT} صف`);
                return false;
            }
            if (rowCount > this.MAX_ROWS_WARNING) {
                return yield this.showConfirmationAlert('تحذير', `البيانات كثيرة (${rowCount} صف). قد يستغرق التصدير وقتاً طويلاً. هل تريد المتابعة؟`);
            }
            return true;
        });
    }
    addArabicFontSupport(doc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // Use Times font for better Unicode support
                doc.setFont('times', 'normal');
                doc.setFontSize(10);
                doc.setCharSpace(0);
            }
            catch (error) {
                console.warn('Arabic font setup failed, trying alternatives');
                try {
                    // Try Courier as fallback
                    doc.setFont('courier', 'normal');
                }
                catch (courierError) {
                    try {
                        // Final fallback to Helvetica
                        doc.setFont('helvetica', 'normal');
                    }
                    catch (helveticaError) {
                        console.error('All font options failed');
                    }
                }
            }
        });
    }
    enableUTF8Support(doc) {
        try {
            // Configure jsPDF for better Unicode handling
            // Set document properties for UTF-8 support
            doc.setProperties({
                title: 'تقرير المخزون',
                subject: 'Inventory Report',
                author: 'ERP System',
                creator: 'ERP Stock Management'
            });
        }
        catch (error) {
            console.warn('UTF-8 support setup failed:', error);
        }
    }
    addPDFHeader(doc, config) {
        const pageWidth = doc.internal.pageSize.getWidth();
        // Current date (RTL positioning)
        doc.setFontSize(10);
        const dateText = config.currentDate || this.formatDate(new Date(), 'yyyy-MM-dd') || '';
        const dateWidth = doc.getTextWidth(dateText);
        doc.text(dateText, pageWidth - dateWidth - 10, 10);
        // Title (centered, handle Arabic RTL)
        doc.setFontSize(16);
        const titleText = this.processArabicText(config.title);
        const titleWidth = doc.getTextWidth(titleText);
        doc.text(titleText, (pageWidth - titleWidth) / 2, 20);
        // Subtitle (centered, handle Arabic RTL)
        if (config.subtitle) {
            doc.setFontSize(12);
            const subtitleText = this.processArabicText(config.subtitle);
            const subtitleWidth = doc.getTextWidth(subtitleText);
            doc.text(subtitleText, (pageWidth - subtitleWidth) / 2, 30);
        }
    }
    addPDFTable(doc, config) {
        const startY = config.subtitle ? 40 : 30;
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 10;
        const tableWidth = pageWidth - (margin * 2);
        const columnWidth = tableWidth / config.columns.length;
        // Table headers
        doc.setFontSize(10);
        let currentY = startY;
        // Header background
        doc.setFillColor(240, 240, 240);
        doc.rect(margin, currentY, tableWidth, 10, 'F');
        // Header text (standard LTR positioning for better compatibility)
        doc.setTextColor(0, 0, 0);
        config.columns.forEach((col, index) => {
            const x = margin + (index * columnWidth) + 2;
            const headerText = this.processArabicText(col.title);
            doc.text(headerText, x, currentY + 7);
        });
        currentY += 10;
        // Table data
        config.data.forEach((row, rowIndex) => {
            if (currentY > doc.internal.pageSize.getHeight() - 30) {
                doc.addPage();
                currentY = 20;
                // Re-draw headers on new page
                doc.setFontSize(10);
                doc.setFillColor(240, 240, 240);
                doc.rect(margin, currentY - 10, tableWidth, 10, 'F');
                doc.setTextColor(0, 0, 0);
                config.columns.forEach((col, index) => {
                    const x = margin + (index * columnWidth) + 2;
                    const headerText = this.processArabicText(col.title);
                    doc.text(headerText, x, currentY - 3);
                });
            }
            // Alternating row colors
            if (rowIndex % 2 === 1) {
                doc.setFillColor(250, 250, 250);
                doc.rect(margin, currentY, tableWidth, 8, 'F');
            }
            // Reset text color for data
            doc.setTextColor(0, 0, 0);
            config.columns.forEach((col, colIndex) => {
                const x = margin + (colIndex * columnWidth) + 2;
                let value = this.getCellValue(row, col, rowIndex + 1);
                const processedValue = this.processArabicText(value);
                // Handle long text by truncating if necessary
                const maxWidth = columnWidth - 4;
                const textWidth = doc.getTextWidth(processedValue);
                let displayText = processedValue;
                if (textWidth > maxWidth) {
                    // Truncate text if it's too long
                    let truncated = processedValue;
                    while (doc.getTextWidth(truncated + '...') > maxWidth && truncated.length > 1) {
                        truncated = truncated.slice(0, -1);
                    }
                    displayText = truncated + (truncated.length < processedValue.length ? '...' : '');
                }
                doc.text(displayText, x, currentY + 6);
            });
            currentY += 8;
        });
    }
    addPDFFooter(doc, config) {
        const pageHeight = doc.internal.pageSize.getHeight();
        const pageWidth = doc.internal.pageSize.getWidth();
        doc.setFontSize(8);
        doc.setTextColor(0, 0, 0);
        // User info (left side)
        const userText = this.processArabicText(`المستخدم: ${config.userName}`);
        doc.text(userText, 10, pageHeight - 10);
        // Export date (right side)
        const exportText = this.processArabicText(`تاريخ التصدير: ${this.formatDate(new Date(), 'yyyy-MM-dd HH:mm')}`);
        const exportWidth = doc.getTextWidth(exportText);
        doc.text(exportText, pageWidth - exportWidth - 10, pageHeight - 10);
    }
    processArabicText(text) {
        if (!text)
            return '';
        try {
            // Check if text contains Arabic characters
            const hasArabic = /[\u0600-\u06FF\u0750-\u077F]/.test(text);
            if (hasArabic) {
                // Convert to professional English equivalents that maintain meaning
                return this.convertArabicToProfessionalEnglish(text);
            }
            return text;
        }
        catch (error) {
            console.warn('Arabic text processing failed:', error);
            return text;
        }
    }
    convertArabicToProfessionalEnglish(text) {
        try {
            // Professional Arabic-to-English conversion for business terms
            const professionalTranslations = {
                // Report titles and headers
                'تقرير المخزون': 'Inventory Report',
                'تقرير': 'Report',
                'المخزون الإفتتاحي': 'Opening Stock',
                'المخزون (in stock)': 'Stock Qty',
                'المخزون': 'Inventory',
                // Column headers
                'التسلسل': 'Serial No.',
                'معرف الصنف': 'Item ID',
                'اسم الصنف (English)': 'Item Name (English)',
                'اسم الصنف': 'Item Name',
                'الصنف': 'Item',
                'اسم مستعار (Alias)': 'Alias Name',
                'اسم مستعار': 'Alias',
                'الموديل (model)': 'Model',
                'الموديل': 'Model',
                'الكود (part no)': 'Part Number',
                'الكود': 'Code',
                'رقم القطعة': 'Part Number',
                'الماركة (brand)': 'Brand',
                'الماركة': 'Brand',
                'اقل كمية (MSQ)': 'Min. Stock Qty',
                'اقل كمية': 'Min. Qty',
                'الحد الأدنى': 'Minimum',
                'الوحده (unit)': 'Unit',
                'الوحده': 'Unit',
                'الوحدة': 'Unit',
                'سعر الشراء (purch price)': 'Purchase Price',
                'سعر الشراء': 'Purchase Price',
                'سعر الوحده (selling price)': 'Selling Price',
                'سعر الوحده': 'Unit Price',
                'سعر البيع': 'Selling Price',
                'نسبة الفائدة (profit perc)': 'Profit %',
                'نسبة الفائدة': 'Profit %',
                'الكمية المتاحة': 'Available Qty',
                'الكمية': 'Quantity',
                'المجموع': 'Total',
                'اخر عملية بيع': 'Last Sale Date',
                'الإفتتاحي': 'Opening',
                'الإجراءات': 'Actions',
                // Common terms
                'المستخدم': 'User',
                'تاريخ التصدير': 'Export Date',
                'صفحة': 'Page',
                'من': 'of',
                'إلى': 'to',
                'في': 'on',
                'التاريخ': 'Date',
                'الوقت': 'Time',
                // Status and descriptions
                'متوفر': 'Available',
                'غير متوفر': 'Out of Stock',
                'نشط': 'Active',
                'غير نشط': 'Inactive',
                'جديد': 'New',
                'مستعمل': 'Used',
                // Numbers and measurements
                'قطعة': 'Piece',
                'قطع': 'Pieces',
                'كيلو': 'Kg',
                'جرام': 'Gram',
                'متر': 'Meter',
                'لتر': 'Liter'
            };
            // First try exact phrase matches
            let result = text.trim();
            // Sort by length (longest first) to match longer phrases before shorter ones
            const sortedKeys = Object.keys(professionalTranslations).sort((a, b) => b.length - a.length);
            for (const arabicTerm of sortedKeys) {
                if (result.includes(arabicTerm)) {
                    result = result.replace(new RegExp(arabicTerm, 'g'), professionalTranslations[arabicTerm]);
                }
            }
            // If no exact matches found, try word-by-word translation
            if (result === text) {
                const words = text.split(/\s+/);
                const translatedWords = words.map(word => {
                    const cleanWord = word.trim();
                    return professionalTranslations[cleanWord] || this.transliterateArabicWord(cleanWord);
                });
                result = translatedWords.join(' ');
            }
            return result;
        }
        catch (error) {
            console.warn('Professional Arabic conversion failed:', error);
            return this.transliterateArabicWord(text);
        }
    }
    transliterateArabicWord(word) {
        // Fallback transliteration for unmapped words
        const arabicToEnglishMap = {
            'ا': 'a', 'أ': 'a', 'إ': 'i', 'آ': 'aa',
            'ب': 'b', 'ت': 't', 'ث': 'th',
            'ج': 'j', 'ح': 'h', 'خ': 'kh',
            'د': 'd', 'ذ': 'dh',
            'ر': 'r', 'ز': 'z',
            'س': 's', 'ش': 'sh',
            'ص': 's', 'ض': 'd',
            'ط': 't', 'ظ': 'dh',
            'ع': 'a', 'غ': 'gh',
            'ف': 'f', 'ق': 'q',
            'ك': 'k', 'ل': 'l',
            'م': 'm', 'ن': 'n',
            'ه': 'h', 'ة': 'h',
            'و': 'w', 'ي': 'y',
            'ى': 'a', 'ء': ''
        };
        let result = '';
        for (const char of word) {
            result += arabicToEnglishMap[char] || char;
        }
        // Capitalize first letter for better appearance
        return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    }
    fixArabicTextForPDF(text) {
        // Apply specific fixes for common Arabic text issues in PDF
        let fixedText = text;
        // Fix common Arabic ligatures and complex characters that might not render well
        const arabicFixes = {
            // Replace complex ligatures with simpler forms
            '\uFEDF': 'لا',
            '\uFEE0': 'لا',
            '\uFEE1': 'لإ',
            '\uFEE2': 'لإ',
            '\uFEE3': 'لآ',
            '\uFEE4': 'لآ',
            // Fix other common problematic characters
            '\u064B': '',
            '\u064C': '',
            '\u064D': '',
            '\u064E': '',
            '\u064F': '',
            '\u0650': '',
            '\u0651': '',
            '\u0652': '', // Arabic Sukun
        };
        // Apply fixes
        Object.entries(arabicFixes).forEach(([problematic, replacement]) => {
            fixedText = fixedText.replace(new RegExp(problematic, 'g'), replacement);
        });
        return fixedText;
    }
    addPDFHeaderWithTranslation(doc, config) {
        const pageWidth = doc.internal.pageSize.getWidth();
        // Current date (left side)
        doc.setFontSize(10);
        const dateText = config.currentDate || this.formatDate(new Date(), 'yyyy-MM-dd') || '';
        doc.text(dateText, 10, 10);
        // Title (centered, translated to English)
        doc.setFontSize(16);
        const titleText = this.processArabicText(config.title);
        const titleWidth = doc.getTextWidth(titleText);
        doc.text(titleText, (pageWidth - titleWidth) / 2, 20);
        // Subtitle (centered, translated to English)
        if (config.subtitle) {
            doc.setFontSize(12);
            const subtitleText = this.processArabicText(config.subtitle);
            const subtitleWidth = doc.getTextWidth(subtitleText);
            doc.text(subtitleText, (pageWidth - subtitleWidth) / 2, 30);
        }
    }
    addPDFTableWithTranslation(doc, config) {
        const startY = config.subtitle ? 40 : 30;
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 10;
        const tableWidth = pageWidth - (margin * 2);
        const columnWidth = tableWidth / config.columns.length;
        // Table headers
        doc.setFontSize(10);
        let currentY = startY;
        // Header background
        doc.setFillColor(70, 114, 196); // Professional blue
        doc.rect(margin, currentY, tableWidth, 10, 'F');
        // Header text (translated to English)
        doc.setTextColor(255, 255, 255); // White text
        config.columns.forEach((col, index) => {
            const x = margin + (index * columnWidth) + 2;
            const headerText = this.processArabicText(col.title);
            doc.text(headerText, x, currentY + 7);
        });
        currentY += 10;
        // Table data
        doc.setTextColor(0, 0, 0); // Black text
        config.data.forEach((row, rowIndex) => {
            if (currentY > doc.internal.pageSize.getHeight() - 30) {
                doc.addPage();
                currentY = 20;
                // Re-draw headers on new page
                doc.setFillColor(70, 114, 196);
                doc.rect(margin, currentY - 10, tableWidth, 10, 'F');
                doc.setTextColor(255, 255, 255);
                config.columns.forEach((col, index) => {
                    const x = margin + (index * columnWidth) + 2;
                    const headerText = this.processArabicText(col.title);
                    doc.text(headerText, x, currentY - 3);
                });
                doc.setTextColor(0, 0, 0);
            }
            // Alternating row colors
            if (rowIndex % 2 === 1) {
                doc.setFillColor(248, 249, 250);
                doc.rect(margin, currentY, tableWidth, 8, 'F');
            }
            config.columns.forEach((col, colIndex) => {
                const x = margin + (colIndex * columnWidth) + 2;
                let value = this.getCellValue(row, col, rowIndex + 1);
                const processedValue = this.processArabicText(value);
                // Handle long text by truncating if necessary
                const maxWidth = columnWidth - 4;
                const textWidth = doc.getTextWidth(processedValue);
                let displayText = processedValue;
                if (textWidth > maxWidth) {
                    let truncated = processedValue;
                    while (doc.getTextWidth(truncated + '...') > maxWidth && truncated.length > 1) {
                        truncated = truncated.slice(0, -1);
                    }
                    displayText = truncated + (truncated.length < processedValue.length ? '...' : '');
                }
                doc.text(displayText, x, currentY + 6);
            });
            currentY += 8;
        });
    }
    addPDFFooterWithTranslation(doc, config) {
        const pageHeight = doc.internal.pageSize.getHeight();
        const pageWidth = doc.internal.pageSize.getWidth();
        doc.setFontSize(8);
        doc.setTextColor(0, 0, 0);
        // User info (left side, translated)
        const userText = this.processArabicText(`المستخدم: ${config.userName}`);
        doc.text(userText, 10, pageHeight - 10);
        // Export date (right side, translated)
        const exportText = this.processArabicText(`تاريخ التصدير: ${this.formatDate(new Date(), 'yyyy-MM-dd HH:mm')}`);
        const exportWidth = doc.getTextWidth(exportText);
        doc.text(exportText, pageWidth - exportWidth - 10, pageHeight - 10);
    }
    prepareExcelData(config) {
        const data = [];
        // Add title row - will be styled later
        const titleRow = new Array(config.columns.length).fill('');
        titleRow[0] = config.title;
        data.push(titleRow);
        // Add subtitle row if exists - will be styled later
        if (config.subtitle) {
            const subtitleRow = new Array(config.columns.length).fill('');
            subtitleRow[0] = config.subtitle;
            data.push(subtitleRow);
        }
        // Add date row
        const dateRow = new Array(config.columns.length).fill('');
        dateRow[0] = config.currentDate || this.formatDate(new Date(), 'yyyy-MM-dd');
        data.push(dateRow);
        data.push(new Array(config.columns.length).fill('')); // Empty row
        // Add column headers
        data.push(config.columns.map(col => col.title));
        // Add data rows with serial number support
        config.data.forEach((row, index) => {
            const rowData = config.columns.map(col => this.getCellValue(row, col, index + 1));
            data.push(rowData);
        });
        // Add footer
        data.push(new Array(config.columns.length).fill('')); // Empty row
        const footerRow1 = new Array(config.columns.length).fill('');
        footerRow1[0] = `المستخدم: ${config.userName}`;
        data.push(footerRow1);
        const footerRow2 = new Array(config.columns.length).fill('');
        footerRow2[0] = `تاريخ التصدير: ${this.formatDate(new Date(), 'yyyy-MM-dd HH:mm')}`;
        data.push(footerRow2);
        return data;
    }
    applyModernExcelStyling(ws, config) {
        const numCols = config.columns.length;
        const lastCol = this.numberToExcelColumn(numCols - 1);
        // Initialize merges array if it doesn't exist
        if (!ws['!merges']) {
            ws['!merges'] = [];
        }
        let currentRow = 0;
        // Style and merge title row (row 1)
        const titleCell = `A${currentRow + 1}`;
        const titleMergeRange = `A${currentRow + 1}:${lastCol}${currentRow + 1}`;
        if (ws[titleCell]) {
            ws[titleCell].s = {
                font: { bold: true, sz: 18, color: { rgb: "1F4E79" } },
                alignment: { horizontal: "center", vertical: "center" },
                fill: { fgColor: { rgb: "E7F3FF" } },
                border: {
                    top: { style: "thin", color: { rgb: "1F4E79" } },
                    bottom: { style: "thin", color: { rgb: "1F4E79" } },
                    left: { style: "thin", color: { rgb: "1F4E79" } },
                    right: { style: "thin", color: { rgb: "1F4E79" } }
                }
            };
        }
        // Merge title cells
        ws['!merges'].push(this.decodeRange(titleMergeRange));
        currentRow++;
        // Style and merge subtitle row if exists
        if (config.subtitle) {
            const subtitleCell = `A${currentRow + 1}`;
            const subtitleMergeRange = `A${currentRow + 1}:${lastCol}${currentRow + 1}`;
            if (ws[subtitleCell]) {
                ws[subtitleCell].s = {
                    font: { bold: true, sz: 14, color: { rgb: "2F75B5" } },
                    alignment: { horizontal: "center", vertical: "center" },
                    fill: { fgColor: { rgb: "F2F8FF" } }
                };
            }
            ws['!merges'].push(this.decodeRange(subtitleMergeRange));
            currentRow++;
        }
        // Style date row
        const dateCell = `A${currentRow + 1}`;
        const dateMergeRange = `A${currentRow + 1}:${lastCol}${currentRow + 1}`;
        if (ws[dateCell]) {
            ws[dateCell].s = {
                font: { sz: 11, color: { rgb: "666666" } },
                alignment: { horizontal: "center", vertical: "center" }
            };
        }
        ws['!merges'].push(this.decodeRange(dateMergeRange));
        currentRow += 2; // Skip date row and empty row
        // Style column headers
        const headerRowIndex = currentRow + 1;
        for (let colIndex = 0; colIndex < numCols; colIndex++) {
            const colLetter = this.numberToExcelColumn(colIndex);
            const cellRef = `${colLetter}${headerRowIndex}`;
            if (ws[cellRef]) {
                ws[cellRef].s = {
                    font: { bold: true, sz: 12, color: { rgb: "FFFFFF" } },
                    alignment: { horizontal: "center", vertical: "center" },
                    fill: { fgColor: { rgb: "4472C4" } },
                    border: {
                        top: { style: "thin", color: { rgb: "FFFFFF" } },
                        bottom: { style: "thin", color: { rgb: "FFFFFF" } },
                        left: { style: "thin", color: { rgb: "FFFFFF" } },
                        right: { style: "thin", color: { rgb: "FFFFFF" } }
                    }
                };
            }
        }
        // Style data rows with alternating colors
        const dataStartRow = headerRowIndex + 1;
        const dataEndRow = dataStartRow + config.data.length - 1;
        for (let rowIndex = dataStartRow; rowIndex <= dataEndRow; rowIndex++) {
            const isEvenRow = (rowIndex - dataStartRow) % 2 === 0;
            const fillColor = isEvenRow ? "FFFFFF" : "F8F9FA";
            for (let colIndex = 0; colIndex < numCols; colIndex++) {
                const colLetter = this.numberToExcelColumn(colIndex);
                const cellRef = `${colLetter}${rowIndex}`;
                if (ws[cellRef]) {
                    ws[cellRef].s = {
                        font: { sz: 10 },
                        alignment: { horizontal: "center", vertical: "center" },
                        fill: { fgColor: { rgb: fillColor } },
                        border: {
                            top: { style: "thin", color: { rgb: "E1E5E9" } },
                            bottom: { style: "thin", color: { rgb: "E1E5E9" } },
                            left: { style: "thin", color: { rgb: "E1E5E9" } },
                            right: { style: "thin", color: { rgb: "E1E5E9" } }
                        }
                    };
                    // Special formatting for currency columns
                    const column = config.columns[colIndex];
                    if (column && column.type === 'currency') {
                        ws[cellRef].s.alignment.horizontal = "right";
                    }
                    // Special formatting for serial number column
                    if (column && column.key === 'serialNumber') {
                        ws[cellRef].s.font.bold = true;
                        ws[cellRef].s.fill = { fgColor: { rgb: "E7F3FF" } };
                    }
                }
            }
        }
    }
    numberToExcelColumn(num) {
        let column = '';
        while (num >= 0) {
            column = String.fromCharCode(65 + (num % 26)) + column;
            num = Math.floor(num / 26) - 1;
        }
        return column;
    }
    decodeRange(range) {
        const parts = range.split(':');
        const start = this.cellRefToCoords(parts[0]);
        const end = this.cellRefToCoords(parts[1]);
        return {
            s: { c: start.c, r: start.r },
            e: { c: end.c, r: end.r }
        };
    }
    cellRefToCoords(cellRef) {
        const match = cellRef.match(/([A-Z]+)(\d+)/);
        if (!match)
            return { c: 0, r: 0 };
        const col = match[1];
        const row = parseInt(match[2]) - 1;
        let colNum = 0;
        for (let i = 0; i < col.length; i++) {
            colNum = colNum * 26 + (col.charCodeAt(i) - 64);
        }
        colNum -= 1;
        return { c: colNum, r: row };
    }
    getCellValue(row, column, serialNumber) {
        let value;
        // Handle calculated fields
        if (column.key === 'serialNumber') {
            value = serialNumber || 1;
        }
        else if (column.key === 'finalAmount') {
            const total = parseFloat(row.tot_pr) || 0;
            const discount = parseFloat(row.discount) || 0;
            value = total - discount;
        }
        else if (column.key === 'stockValue') {
            const quantity = parseFloat(row.quantity) || 0;
            const payPrice = parseFloat(row.pay_price) || 0;
            value = quantity * payPrice;
        }
        else if (column.key === 'profitPercentage') {
            // Calculate profit percentage like in the component
            const payPrice = parseFloat(row.pay_price) || 0;
            const perchPrice = parseFloat(row.perch_price) || 0;
            if (!payPrice || !perchPrice || perchPrice === 0) {
                value = 0;
            }
            else {
                value = ((payPrice - perchPrice) / perchPrice) * 100;
            }
        }
        else {
            value = this.getNestedValue(row, column.key);
        }
        if (value === null || value === undefined) {
            return '';
        }
        switch (column.type) {
            case 'currency':
                return this.formatCurrency(value);
            case 'date':
                return this.formatDate(value, 'yyyy-MM-dd');
            case 'number':
                if (column.key === 'profitPercentage') {
                    // Format profit percentage with 2 decimal places and % sign
                    const numValue = parseFloat(value);
                    if (isNaN(numValue))
                        return '0.00%';
                    return `${numValue.toFixed(2)}%`;
                }
                return this.formatNumber(value);
            default:
                return value.toString();
        }
    }
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, prop) => current && current[prop], obj);
    }
    formatCurrency(value) {
        const numValue = parseFloat(value);
        if (isNaN(numValue))
            return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(numValue);
    }
    formatNumber(value) {
        const numValue = parseFloat(value);
        if (isNaN(numValue))
            return '0';
        return new Intl.NumberFormat('en-US').format(numValue);
    }
    generateDynamicTitle(pageType) {
        const titles = {
            'sales-record': 'تقرير المبيعات',
            'purchase-record': 'تقرير المشتريات',
            'item-stock': 'تقرير المخزون',
            'cash2': 'تقرير الخزينة',
            'statement2': 'كشف الحساب',
            'spend-record2': 'تقرير المصروفات',
            'balance-sheet2': 'الميزانية العمومية',
            'sub-account2': 'تقرير الحسابات الفرعية'
        };
        return titles[pageType] || 'تقرير';
    }
    generateDynamicSubtitle(pageType, filters) {
        let subtitle = '';
        if (filters.selectedAccount && filters.selectedAccount.sub_name) {
            if (pageType === 'sales-record') {
                subtitle += `العميل: ${filters.selectedAccount.sub_name}`;
            }
            else if (pageType === 'purchase-record') {
                subtitle += `المورد: ${filters.selectedAccount.sub_name}`;
            }
            else {
                subtitle += `الحساب: ${filters.selectedAccount.sub_name}`;
            }
        }
        if (filters.dateFilter) {
            if (subtitle)
                subtitle += ' - ';
            if (filters.dateFilter.type === 'single' && filters.dateFilter.date) {
                subtitle += `في تاريخ ${this.formatDateArabic(filters.dateFilter.date)}`;
            }
            else if (filters.dateFilter.type === 'range' && filters.dateFilter.startDate && filters.dateFilter.endDate) {
                subtitle += `في الفترة من ${this.formatDateArabic(filters.dateFilter.startDate)} إلى ${this.formatDateArabic(filters.dateFilter.endDate)}`;
            }
        }
        if (filters.searchTerm) {
            if (subtitle)
                subtitle += ' - ';
            subtitle += `البحث: ${filters.searchTerm}`;
        }
        return subtitle;
    }
    formatDateArabic(date) {
        if (!date)
            return '';
        const arabicMonths = [
            'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
            'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
        ];
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const month = arabicMonths[dateObj.getMonth()];
        return `${day} ${month}`;
    }
    showSuccessToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.getToastController().create({
                message,
                duration: 3000,
                color: 'success',
                position: 'top',
                mode: 'ios'
            });
            yield toast.present();
        });
    }
    showErrorToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.getToastController().create({
                message,
                duration: 3000,
                color: 'danger',
                position: 'top',
                mode: 'ios'
            });
            yield toast.present();
        });
    }
    showConfirmationAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.getAlertController().create({
                    header,
                    message,
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
};
ExportService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }
];
ExportService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ExportService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_export_service_ts.js.map
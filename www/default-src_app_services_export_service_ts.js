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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 26772);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ 59055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);






let ExportService = class ExportService {
    constructor(datePipe, toastController, loadingController, alertController) {
        this.datePipe = datePipe;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.MAX_ROWS_WARNING = 1000;
        this.MAX_ROWS_LIMIT = 5000;
    }
    exportToPDF(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // Check data size
            if (!(yield this.checkDataSize(config.data.length))) {
                return;
            }
            const loading = yield this.loadingController.create({
                message: 'جاري تصدير ملف PDF...',
                spinner: 'crescent'
            });
            yield loading.present();
            try {
                const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                    format: 'a4'
                });
                // Set up Arabic font (using default for now)
                doc.setFont('helvetica');
                // Add header
                this.addPDFHeader(doc, config);
                // Add table
                this.addPDFTable(doc, config);
                // Add footer
                this.addPDFFooter(doc, config);
                // Save the PDF
                doc.save(`${config.fileName}.pdf`);
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
    exportToExcel(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // Check data size
            if (!(yield this.checkDataSize(config.data.length))) {
                return;
            }
            const loading = yield this.loadingController.create({
                message: 'جاري تصدير ملف Excel...',
                spinner: 'crescent'
            });
            yield loading.present();
            try {
                // Create workbook
                const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_new();
                // Prepare data
                const worksheetData = this.prepareExcelData(config);
                // Create worksheet
                const ws = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.aoa_to_sheet(worksheetData);
                // Set column widths
                const colWidths = config.columns.map(col => ({ wch: col.width || 15 }));
                ws['!cols'] = colWidths;
                // Add worksheet to workbook
                xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_append_sheet(wb, ws, 'البيانات');
                // Write file
                xlsx__WEBPACK_IMPORTED_MODULE_2__.writeFile(wb, `${config.fileName}.xlsx`);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
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
    addPDFHeader(doc, config) {
        const pageWidth = doc.internal.pageSize.getWidth();
        // Current date
        doc.setFontSize(10);
        doc.text(config.currentDate || this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '', 10, 10);
        // Title
        doc.setFontSize(16);
        const titleWidth = doc.getTextWidth(config.title);
        doc.text(config.title, (pageWidth - titleWidth) / 2, 20);
        // Subtitle
        if (config.subtitle) {
            doc.setFontSize(12);
            const subtitleWidth = doc.getTextWidth(config.subtitle);
            doc.text(config.subtitle, (pageWidth - subtitleWidth) / 2, 30);
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
        // Header text
        doc.setTextColor(0, 0, 0);
        config.columns.forEach((col, index) => {
            const x = margin + (index * columnWidth) + 2;
            doc.text(col.title, x, currentY + 7);
        });
        currentY += 10;
        // Table data
        config.data.forEach((row, rowIndex) => {
            if (currentY > doc.internal.pageSize.getHeight() - 30) {
                doc.addPage();
                currentY = 20;
            }
            // Alternating row colors
            if (rowIndex % 2 === 1) {
                doc.setFillColor(250, 250, 250);
                doc.rect(margin, currentY, tableWidth, 8, 'F');
            }
            config.columns.forEach((col, colIndex) => {
                const x = margin + (colIndex * columnWidth) + 2;
                let value = this.getCellValue(row, col);
                doc.text(value, x, currentY + 6);
            });
            currentY += 8;
        });
    }
    addPDFFooter(doc, config) {
        const pageHeight = doc.internal.pageSize.getHeight();
        const pageWidth = doc.internal.pageSize.getWidth();
        doc.setFontSize(8);
        doc.text(`المستخدم: ${config.userName}`, 10, pageHeight - 10);
        doc.text(`تاريخ التصدير: ${this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm')}`, pageWidth - 60, pageHeight - 10);
    }
    prepareExcelData(config) {
        const data = [];
        // Add header rows
        data.push([config.title]);
        if (config.subtitle) {
            data.push([config.subtitle]);
        }
        data.push([config.currentDate || this.datePipe.transform(new Date(), 'yyyy-MM-dd')]);
        data.push([]); // Empty row
        // Add column headers
        data.push(config.columns.map(col => col.title));
        // Add data rows
        config.data.forEach(row => {
            const rowData = config.columns.map(col => this.getCellValue(row, col));
            data.push(rowData);
        });
        // Add footer
        data.push([]); // Empty row
        data.push([`المستخدم: ${config.userName}`]);
        data.push([`تاريخ التصدير: ${this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm')}`]);
        return data;
    }
    getCellValue(row, column) {
        let value;
        // Handle calculated fields
        if (column.key === 'finalAmount') {
            const total = parseFloat(row.tot_pr) || 0;
            const discount = parseFloat(row.discount) || 0;
            value = total - discount;
        }
        else if (column.key === 'stockValue') {
            const quantity = parseFloat(row.quantity) || 0;
            const payPrice = parseFloat(row.pay_price) || 0;
            value = quantity * payPrice;
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
                return this.datePipe.transform(value, 'yyyy-MM-dd') || value.toString();
            case 'number':
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
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
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
ExportService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ExportService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_export_service_ts.js.map
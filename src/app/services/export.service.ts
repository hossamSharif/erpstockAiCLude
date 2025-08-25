import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

export interface ExportConfig {
  title: string;
  subtitle?: string;
  fileName: string;
  data: any[];
  columns: ExportColumn[];
  userName: string;
  pageType: 'sales-record' | 'purchase-record' | 'item-stock' | 'cash2' | 'statement2' | 'spend-record2' | 'balance-sheet2' | 'sub-account2';
  currentDate?: string;
  maxRows?: number;
}

export interface ExportColumn {
  key: string;
  title: string;
  width?: number;
  type?: 'text' | 'number' | 'date' | 'currency';
}

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  private readonly MAX_ROWS_WARNING = 1000;
  private readonly MAX_ROWS_LIMIT = 5000;

  constructor(
    private datePipe: DatePipe,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  async exportToPDF(config: ExportConfig): Promise<void> {
    // Check data size
    if (!await this.checkDataSize(config.data.length)) {
      return;
    }

    const loading = await this.loadingController.create({
      message: 'جاري تصدير ملف PDF...',
      spinner: 'crescent'
    });
    await loading.present();

    try {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      // Add Arabic font support
      await this.addArabicFontSupport(doc);
      
      // Add header
      this.addPDFHeader(doc, config);
      
      // Add table
      this.addPDFTable(doc, config);
      
      // Add footer
      this.addPDFFooter(doc, config);

      // Save the PDF
      doc.save(`${config.fileName}.pdf`);
      
      await this.showSuccessToast('تم تصدير ملف PDF بنجاح');
      
    } catch (error) {
      console.error('PDF Export Error:', error);
      await this.showErrorToast('فشل في تصدير ملف PDF');
    } finally {
      await loading.dismiss();
    }
  }

  async exportToExcel(config: ExportConfig): Promise<void> {
    // Check data size
    if (!await this.checkDataSize(config.data.length)) {
      return;
    }

    const loading = await this.loadingController.create({
      message: 'جاري تصدير ملف Excel...',
      spinner: 'crescent'
    });
    await loading.present();

    try {
      // Create workbook
      const wb = XLSX.utils.book_new();
      
      // Prepare data
      const worksheetData = this.prepareExcelData(config);
      
      // Create worksheet
      const ws = XLSX.utils.aoa_to_sheet(worksheetData);
      
      // Apply modern styling
      this.applyModernExcelStyling(ws, config);
      
      // Set column widths
      const colWidths = config.columns.map(col => ({ wch: col.width || 15 }));
      ws['!cols'] = colWidths;
      
      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, 'البيانات');
      
      // Write file
      XLSX.writeFile(wb, `${config.fileName}.xlsx`);
      
      await this.showSuccessToast('تم تصدير ملف Excel بنجاح');
      
    } catch (error) {
      console.error('Excel Export Error:', error);
      await this.showErrorToast('فشل في تصدير ملف Excel');
    } finally {
      await loading.dismiss();
    }
  }

  private async checkDataSize(rowCount: number): Promise<boolean> {
    if (rowCount === 0) {
      await this.showErrorToast('لا توجد بيانات للتصدير');
      return false;
    }

    if (rowCount > this.MAX_ROWS_LIMIT) {
      await this.showErrorToast(`البيانات كثيرة جداً (${rowCount} صف). الحد الأقصى هو ${this.MAX_ROWS_LIMIT} صف`);
      return false;
    }

    if (rowCount > this.MAX_ROWS_WARNING) {
      return await this.showConfirmationAlert(
        'تحذير',
        `البيانات كثيرة (${rowCount} صف). قد يستغرق التصدير وقتاً طويلاً. هل تريد المتابعة؟`
      );
    }

    return true;
  }

  private async addArabicFontSupport(doc: jsPDF): Promise<void> {
    try {
      // Set the font that supports Arabic characters better
      doc.setFont('helvetica', 'normal');
      
      // Configure the document for better Arabic rendering
      doc.setCharSpace(0);
      doc.setFontSize(10);
    } catch (error) {
      console.warn('Arabic font setup failed, using fallback');
      doc.setFont('helvetica');
    }
  }

  private addPDFHeader(doc: jsPDF, config: ExportConfig): void {
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Current date (RTL positioning)
    doc.setFontSize(10);
    const dateText = config.currentDate || this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
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

  private addPDFTable(doc: jsPDF, config: ExportConfig): void {
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
    
    // Header text (RTL for Arabic columns)
    doc.setTextColor(0, 0, 0);
    config.columns.forEach((col, index) => {
      // Position headers from right to left for Arabic
      const x = pageWidth - margin - ((index + 1) * columnWidth) + 2;
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
        doc.setFillColor(240, 240, 240);
        doc.rect(margin, currentY - 10, tableWidth, 10, 'F');
        config.columns.forEach((col, index) => {
          const x = pageWidth - margin - ((index + 1) * columnWidth) + 2;
          const headerText = this.processArabicText(col.title);
          doc.text(headerText, x, currentY - 3);
        });
      }
      
      // Alternating row colors
      if (rowIndex % 2 === 1) {
        doc.setFillColor(250, 250, 250);
        doc.rect(margin, currentY, tableWidth, 8, 'F');
      }
      
      config.columns.forEach((col, colIndex) => {
        // Position data from right to left for Arabic
        const x = pageWidth - margin - ((colIndex + 1) * columnWidth) + 2;
        let value = this.getCellValue(row, col, rowIndex + 1);
        const processedValue = this.processArabicText(value);
        doc.text(processedValue, x, currentY + 6);
      });
      
      currentY += 8;
    });
  }

  private addPDFFooter(doc: jsPDF, config: ExportConfig): void {
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    doc.setFontSize(8);
    
    // User info (RTL positioning)
    const userText = this.processArabicText(`المستخدم: ${config.userName}`);
    const userWidth = doc.getTextWidth(userText);
    doc.text(userText, pageWidth - userWidth - 10, pageHeight - 10);
    
    // Export date (LTR positioning for date)
    const exportText = this.processArabicText(`تاريخ التصدير: ${this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm')}`);
    doc.text(exportText, 10, pageHeight - 10);
  }

  private processArabicText(text: string): string {
    if (!text) return '';
    
    try {
      // Clean up the text first
      let processedText = text
        .replace(/[\u200F\u200E\u202A-\u202E]/g, '') // Remove directional marks
        .replace(/\s+/g, ' ') // Normalize spaces
        .trim();
      
      // Check if text contains Arabic characters
      const hasArabic = /[\u0600-\u06FF]/.test(processedText);
      
      if (hasArabic) {
        // Enhanced Arabic text processing
        // Split text into words and handle each word appropriately
        const words = processedText.split(' ');
        const processedWords = words.map(word => {
          // Check if word contains Arabic
          if (/[\u0600-\u06FF]/.test(word)) {
            // Process Arabic word
            return this.reverseArabicWord(word);
          } else {
            // Keep non-Arabic words as is (numbers, English, etc.)
            return word;
          }
        });
        
        // For Arabic, reverse the word order as well
        return processedWords.reverse().join(' ');
      }
      
      return processedText;
    } catch (error) {
      console.warn('Arabic text processing failed:', error);
      // Fallback: just return the original text
      return text;
    }
  }

  private reverseArabicWord(word: string): string {
    // Simple character reversal for Arabic words
    // This handles basic Arabic character ordering
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
      const char = word[i];
      // Keep punctuation and numbers in their positions
      if (/[a-zA-Z0-9\(\)\[\]\{\}\-\+\=\:\;\<\>\،\.]/.test(char)) {
        // Find the correct position for non-Arabic characters
        reversed = char + reversed;
      } else {
        reversed += char;
      }
    }
    return reversed;
  }

  private prepareExcelData(config: ExportConfig): any[][] {
    const data: any[][] = [];
    
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
    dateRow[0] = config.currentDate || this.datePipe.transform(new Date(), 'yyyy-MM-dd');
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
    footerRow2[0] = `تاريخ التصدير: ${this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm')}`;
    data.push(footerRow2);
    
    return data;
  }

  private applyModernExcelStyling(ws: any, config: ExportConfig): void {
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
  
  private numberToExcelColumn(num: number): string {
    let column = '';
    while (num >= 0) {
      column = String.fromCharCode(65 + (num % 26)) + column;
      num = Math.floor(num / 26) - 1;
    }
    return column;
  }
  
  private decodeRange(range: string): any {
    const parts = range.split(':');
    const start = this.cellRefToCoords(parts[0]);
    const end = this.cellRefToCoords(parts[1]);
    
    return {
      s: { c: start.c, r: start.r },
      e: { c: end.c, r: end.r }
    };
  }
  
  private cellRefToCoords(cellRef: string): { c: number, r: number } {
    const match = cellRef.match(/([A-Z]+)(\d+)/);
    if (!match) return { c: 0, r: 0 };
    
    const col = match[1];
    const row = parseInt(match[2]) - 1;
    
    let colNum = 0;
    for (let i = 0; i < col.length; i++) {
      colNum = colNum * 26 + (col.charCodeAt(i) - 64);
    }
    colNum -= 1;
    
    return { c: colNum, r: row };
  }

  private getCellValue(row: any, column: ExportColumn, serialNumber?: number): string {
    let value: any;
    
    // Handle calculated fields
    if (column.key === 'serialNumber') {
      value = serialNumber || 1;
    } else if (column.key === 'finalAmount') {
      const total = parseFloat(row.tot_pr) || 0;
      const discount = parseFloat(row.discount) || 0;
      value = total - discount;
    } else if (column.key === 'stockValue') {
      const quantity = parseFloat(row.quantity) || 0;
      const payPrice = parseFloat(row.pay_price) || 0;
      value = quantity * payPrice;
    } else if (column.key === 'profitPercentage') {
      // Calculate profit percentage like in the component
      const payPrice = parseFloat(row.pay_price) || 0;
      const perchPrice = parseFloat(row.perch_price) || 0;
      
      if (!payPrice || !perchPrice || perchPrice === 0) {
        value = 0;
      } else {
        value = ((payPrice - perchPrice) / perchPrice) * 100;
      }
    } else {
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
        if (column.key === 'profitPercentage') {
          // Format profit percentage with 2 decimal places and % sign
          const numValue = parseFloat(value);
          if (isNaN(numValue)) return '0.00%';
          return `${numValue.toFixed(2)}%`;
        }
        return this.formatNumber(value);
      default:
        return value.toString();
    }
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, prop) => current && current[prop], obj);
  }

  private formatCurrency(value: any): string {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return '0.00';
    
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numValue);
  }

  private formatNumber(value: any): string {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return '0';
    
    return new Intl.NumberFormat('en-US').format(numValue);
  }

  generateDynamicTitle(pageType: string): string {
    const titles: { [key: string]: string } = {
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

  generateDynamicSubtitle(pageType: string, filters: any): string {
    let subtitle = '';
    
    if (filters.selectedAccount && filters.selectedAccount.sub_name) {
      if (pageType === 'sales-record') {
        subtitle += `العميل: ${filters.selectedAccount.sub_name}`;
      } else if (pageType === 'purchase-record') {
        subtitle += `المورد: ${filters.selectedAccount.sub_name}`;
      } else {
        subtitle += `الحساب: ${filters.selectedAccount.sub_name}`;
      }
    }
    
    if (filters.dateFilter) {
      if (subtitle) subtitle += ' - ';
      
      if (filters.dateFilter.type === 'single' && filters.dateFilter.date) {
        subtitle += `في تاريخ ${this.formatDateArabic(filters.dateFilter.date)}`;
      } else if (filters.dateFilter.type === 'range' && filters.dateFilter.startDate && filters.dateFilter.endDate) {
        subtitle += `في الفترة من ${this.formatDateArabic(filters.dateFilter.startDate)} إلى ${this.formatDateArabic(filters.dateFilter.endDate)}`;
      }
    }
    
    if (filters.searchTerm) {
      if (subtitle) subtitle += ' - ';
      subtitle += `البحث: ${filters.searchTerm}`;
    }
    
    return subtitle;
  }

  private formatDateArabic(date: string): string {
    if (!date) return '';
    
    const arabicMonths = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = arabicMonths[dateObj.getMonth()];
    
    return `${day} ${month}`;
  }

  private async showSuccessToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'success',
      position: 'top',
      mode: 'ios'
    });
    await toast.present();
  }

  private async showErrorToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'danger',
      position: 'top',
      mode: 'ios'
    });
    await toast.present();
  }

  private async showConfirmationAlert(header: string, message: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
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
      await alert.present();
    });
  }
}
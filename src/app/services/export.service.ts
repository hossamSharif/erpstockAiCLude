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

  private addPDFHeader(doc: jsPDF, config: ExportConfig): void {
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

  private addPDFFooter(doc: jsPDF, config: ExportConfig): void {
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    doc.setFontSize(8);
    doc.text(`المستخدم: ${config.userName}`, 10, pageHeight - 10);
    doc.text(`تاريخ التصدير: ${this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm')}`, pageWidth - 60, pageHeight - 10);
  }

  private prepareExcelData(config: ExportConfig): any[][] {
    const data: any[][] = [];
    
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

  private getCellValue(row: any, column: ExportColumn): string {
    let value: any;
    
    // Handle calculated fields
    if (column.key === 'finalAmount') {
      const total = parseFloat(row.tot_pr) || 0;
      const discount = parseFloat(row.discount) || 0;
      value = total - discount;
    } else if (column.key === 'stockValue') {
      const quantity = parseFloat(row.quantity) || 0;
      const payPrice = parseFloat(row.pay_price) || 0;
      value = quantity * payPrice;
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
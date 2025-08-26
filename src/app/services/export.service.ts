import { Injectable, Injector } from '@angular/core';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

// Simple Arabic text processor for better PDF rendering
interface ArabicTextProcessor {
  process(text: string): string;
}

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
  
  private toastController!: ToastController;
  private loadingController!: LoadingController;
  private alertController!: AlertController;

  private pdfMakeInitialized = false;

  constructor(private injector: Injector) {
    // PDFMake will be initialized lazily when first used
  }

  private getToastController(): ToastController {
    if (!this.toastController) {
      this.toastController = this.injector.get(ToastController);
    }
    return this.toastController;
  }

  private getLoadingController(): LoadingController {
    if (!this.loadingController) {
      this.loadingController = this.injector.get(LoadingController);
    }
    return this.loadingController;
  }

  private getAlertController(): AlertController {
    if (!this.alertController) {
      this.alertController = this.injector.get(AlertController);
    }
    return this.alertController;
  }

  private async initializePDFMake(): Promise<any> {
    if (!this.pdfMakeInitialized) {
      try {
        // Dynamic import to avoid circular dependency
        const [pdfMake, pdfFonts] = await Promise.all([
          import('pdfmake/build/pdfmake'),
          import('pdfmake/build/vfs_fonts')
        ]);
        
        // PDFMake modules loaded successfully
        
        // Handle different possible module structures
        let vfs;
        if (pdfFonts.pdfMake && pdfFonts.pdfMake.vfs) {
          vfs = pdfFonts.pdfMake.vfs;
        } else if (pdfFonts.default && pdfFonts.default.pdfMake && pdfFonts.default.pdfMake.vfs) {
          vfs = pdfFonts.default.pdfMake.vfs;
        } else if ((pdfFonts as any).vfs) {
          vfs = (pdfFonts as any).vfs;
        } else {
          // Try to access the vfs directly from the module
          vfs = Object.values(pdfFonts)[0];
        }
        
        if (!vfs) {
          throw new Error('Could not find vfs in pdfFonts module');
        }
        
        // Initialize PDFMake with fonts
        (pdfMake as any).vfs = vfs;
        
        // Debug: Log available fonts in VFS
        console.log('Available fonts in VFS:', Object.keys(vfs || {}));
        
        // Configure fonts to use only available VFS fonts
        const availableFonts = Object.keys(vfs || {});
        const hasRoboto = availableFonts.some(font => font.includes('Roboto'));
        
        if (hasRoboto) {
          // Use available Roboto fonts from VFS
          (pdfMake as any).fonts = {
            Roboto: {
              normal: availableFonts.find(f => f.includes('Roboto') && f.includes('Regular')) || availableFonts.find(f => f.includes('Roboto')),
              bold: availableFonts.find(f => f.includes('Roboto') && f.includes('Bold')) || availableFonts.find(f => f.includes('Roboto')),
              italics: availableFonts.find(f => f.includes('Roboto') && f.includes('Italic')) || availableFonts.find(f => f.includes('Roboto')),
              bolditalics: availableFonts.find(f => f.includes('Roboto') && f.includes('Bold') && f.includes('Italic')) || availableFonts.find(f => f.includes('Roboto'))
            }
          };
        } else {
          // If no Roboto, use first available font or fallback
          const firstFont = availableFonts[0];
          if (firstFont) {
            (pdfMake as any).fonts = {
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
      } catch (error) {
        console.error('PDFMake initialization failed:', error);
        throw error;
      }
    } else {
      // If already initialized, return the pdfMake module
      return import('pdfmake/build/pdfmake');
    }
  }

  private formatDate(date: Date, format: string = 'yyyy-MM-dd HH:mm'): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    if (format === 'yyyy-MM-dd HH:mm') {
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    } else if (format === 'yyyy-MM-dd') {
      return `${year}-${month}-${day}`;
    }
    
    return `${year}-${month}-${day}`;
  }

  async exportToPDF(config: ExportConfig): Promise<void> {
    // Check data size
    if (!await this.checkDataSize(config.data.length)) {
      return;
    }

    const loading = await this.getLoadingController().create({
      message: 'جاري تصدير ملف PDF...',
      spinner: 'crescent'
    });
    await loading.present();

    try {
      // Use PDFMake for better Arabic support
      await this.exportToPDFWithPDFMake(config);
      
      await this.showSuccessToast('تم تصدير ملف PDF بنجاح');
      
    } catch (error) {
      console.error('PDF Export Error:', error);
      await this.showErrorToast('فشل في تصدير ملف PDF');
    } finally {
      await loading.dismiss();
    }
  }

  private async exportToPDFWithProfessionalTranslation(config: ExportConfig): Promise<void> {
    const doc = new jsPDF({
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
  }

  private detectArabicText(text: string): boolean {
    if (!text) return false;
    // Check for Arabic characters (U+0600 to U+06FF)
    return /[\u0600-\u06FF]/.test(text);
  }

  private processTextForPDF(text: string): { text: string; alignment?: string } {
    const hasArabic = this.detectArabicText(text);
    
    if (hasArabic) {
      return {
        text: text,
        alignment: 'right'
      };
    } else {
      return {
        text: text,
        alignment: 'left'
      };
    }
  }

  private async exportToPDFWithPDFMake(config: ExportConfig): Promise<void> {
    try {
      // For now, let's fall back to jsPDF instead of PDFMake due to font issues
      console.warn('PDFMake has font loading issues, falling back to jsPDF');
      return this.exportToPDFWithJSPDF(config);
    } catch (error) {
      console.error('PDF export failed:', error);
      throw error;
    }
  }

  private async exportToPDFWithPDFMakeOLD(config: ExportConfig): Promise<void> {
    try {
      // Initialize PDFMake lazily with dynamic import
      const pdfMake = await this.initializePDFMake();
      // Prepare table data for PDFMake
      const tableBody: any[][] = [];
      
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
      const docDefinition: any = {
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
      const pdfDoc = (pdfMake as any).createPdf(docDefinition);
      pdfDoc.download(`${config.fileName}.pdf`);
      
    } catch (error) {
      console.error('PDFMake Export Error:', error);
      throw error;
    }
  }

  private async exportToPDFWithJSPDF(config: ExportConfig): Promise<void> {
    try {
      const { jsPDF } = await import('jspdf');
      
      // Create PDF document with basic settings
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      // Enhanced Arabic text processing
      const processText = (text: string): string => {
        if (!text) return '';
        
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
      
    } catch (error) {
      console.error('jsPDF Export Error:', error);
      throw error;
    }
  }

  private convertArabicForPDF(text: string): string {
    // Comprehensive Arabic to English translation map for PDF compatibility
    const arabicToEnglishTranslations: { [key: string]: string } = {
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
      
    } catch (error) {
      console.warn('Arabic conversion for PDF failed:', error);
      // Fallback: simple character replacement
      return this.transliterateArabicForPDF(text);
    }
  }

  private transliterateArabicForPDF(text: string): string {
    // Simple Arabic to Latin transliteration for PDF compatibility
    const arabicToLatin: { [key: string]: string } = {
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

  async exportToExcel(config: ExportConfig): Promise<void> {
    // Check data size
    if (!await this.checkDataSize(config.data.length)) {
      return;
    }

    const loading = await this.getLoadingController().create({
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
      // Use Times font for better Unicode support
      doc.setFont('times', 'normal');
      doc.setFontSize(10);
      doc.setCharSpace(0);
      
    } catch (error) {
      console.warn('Arabic font setup failed, trying alternatives');
      try {
        // Try Courier as fallback
        doc.setFont('courier', 'normal');
      } catch (courierError) {
        try {
          // Final fallback to Helvetica
          doc.setFont('helvetica', 'normal');
        } catch (helveticaError) {
          console.error('All font options failed');
        }
      }
    }
  }

  private enableUTF8Support(doc: jsPDF): void {
    try {
      // Configure jsPDF for better Unicode handling
      // Set document properties for UTF-8 support
      doc.setProperties({
        title: 'تقرير المخزون',
        subject: 'Inventory Report',
        author: 'ERP System',
        creator: 'ERP Stock Management'
      });
    } catch (error) {
      console.warn('UTF-8 support setup failed:', error);
    }
  }

  private addPDFHeader(doc: jsPDF, config: ExportConfig): void {
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

  private addPDFFooter(doc: jsPDF, config: ExportConfig): void {
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

  private processArabicText(text: string): string {
    if (!text) return '';
    
    try {
      // Check if text contains Arabic characters
      const hasArabic = /[\u0600-\u06FF\u0750-\u077F]/.test(text);
      
      if (hasArabic) {
        // Convert to professional English equivalents that maintain meaning
        return this.convertArabicToProfessionalEnglish(text);
      }
      
      return text;
    } catch (error) {
      console.warn('Arabic text processing failed:', error);
      return text;
    }
  }

  private convertArabicToProfessionalEnglish(text: string): string {
    try {
      // Professional Arabic-to-English conversion for business terms
      const professionalTranslations: { [key: string]: string } = {
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
    } catch (error) {
      console.warn('Professional Arabic conversion failed:', error);
      return this.transliterateArabicWord(text);
    }
  }

  private transliterateArabicWord(word: string): string {
    // Fallback transliteration for unmapped words
    const arabicToEnglishMap: { [key: string]: string } = {
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

  private fixArabicTextForPDF(text: string): string {
    // Apply specific fixes for common Arabic text issues in PDF
    let fixedText = text;
    
    // Fix common Arabic ligatures and complex characters that might not render well
    const arabicFixes: { [key: string]: string } = {
      // Replace complex ligatures with simpler forms
      '\uFEDF': 'لا', // Arabic ligature Lam-Alef
      '\uFEE0': 'لا', // Arabic ligature Lam-Alef with Hamza above
      '\uFEE1': 'لإ', // Arabic ligature Lam-Alef with Hamza below
      '\uFEE2': 'لإ', // Arabic ligature Lam-Alef with Hamza below
      '\uFEE3': 'لآ', // Arabic ligature Lam-Alef with Madda above
      '\uFEE4': 'لآ', // Arabic ligature Lam-Alef with Madda above
      
      // Fix other common problematic characters
      '\u064B': '', // Arabic Fathatan (remove diacritics that cause issues)
      '\u064C': '', // Arabic Dammatan
      '\u064D': '', // Arabic Kasratan
      '\u064E': '', // Arabic Fatha
      '\u064F': '', // Arabic Damma
      '\u0650': '', // Arabic Kasra
      '\u0651': '', // Arabic Shadda
      '\u0652': '', // Arabic Sukun
    };
    
    // Apply fixes
    Object.entries(arabicFixes).forEach(([problematic, replacement]) => {
      fixedText = fixedText.replace(new RegExp(problematic, 'g'), replacement);
    });
    
    return fixedText;
  }

  private addPDFHeaderWithTranslation(doc: jsPDF, config: ExportConfig): void {
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

  private addPDFTableWithTranslation(doc: jsPDF, config: ExportConfig): void {
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

  private addPDFFooterWithTranslation(doc: jsPDF, config: ExportConfig): void {
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
        return this.formatDate(value, 'yyyy-MM-dd');
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
    const toast = await this.getToastController().create({
      message,
      duration: 3000,
      color: 'success',
      position: 'top',
      mode: 'ios'
    });
    await toast.present();
  }

  private async showErrorToast(message: string): Promise<void> {
    const toast = await this.getToastController().create({
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
      const alert = await this.getAlertController().create({
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
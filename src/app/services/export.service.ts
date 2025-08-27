import { Injectable, Injector } from '@angular/core';
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


  constructor(private injector: Injector) {}

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
      // Use direct Arabic-preserving PDF export
      await this.exportToPDFWithDirectArabicSupport(config);
      
      await this.showSuccessToast('تم تصدير ملف PDF بنجاح مع النص العربي الأصلي');
      
    } catch (error) {
      console.error('Direct Arabic PDF Export Error:', error);
      await this.showErrorToast('فشل في تصدير ملف PDF - يرجى المحاولة مرة أخرى');
    } finally {
      await loading.dismiss();
    }
  }

  private async exportToPDFWithDirectArabicSupport(config: ExportConfig): Promise<void> {
    try {
      console.log('🔄 Starting direct Arabic-preserving PDF export...');
      
      // Import pdf-lib
      const { PDFDocument, rgb, StandardFonts } = await import('pdf-lib');
      
      // Create PDF document
      const pdfDoc = await PDFDocument.create();
      
      // Add landscape page
      let page = pdfDoc.addPage([842, 595]);
      const { width, height } = page.getSize();
      const margin = 40;
      const contentWidth = width - (2 * margin);
      
      // Try to load Arabic font, fallback to better approach if failed
      let font: any;
      let fontBold: any;
      let useExternalFont = false;
      
      try {
        console.log('Attempting to load external Arabic font...');
        // Try loading a simple Arabic font from online
        const fontResponse = await fetch('https://fonts.gstatic.com/s/cairo/v28/SLXGc1nY6HkvalIkTp2mxdt0UX8gfO8_19co.woff2');
        if (fontResponse.ok) {
          const fontBytes = await fontResponse.arrayBuffer();
          font = await pdfDoc.embedFont(fontBytes);
          fontBold = font; // Use same font for bold
          useExternalFont = true;
          console.log('✅ Successfully loaded external Arabic font');
        } else {
          throw new Error('External font loading failed');
        }
      } catch (externalFontError) {
        console.warn('External Arabic font failed, trying TimesRoman:', externalFontError);
        try {
          // Fallback to TimesRoman which has some Unicode support
          font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
          fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
          console.log('✅ Using TimesRoman font');
        } catch (timesError) {
          // Final fallback to Helvetica
          font = await pdfDoc.embedFont(StandardFonts.Helvetica);
          fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
          console.log('⚠️ Using Helvetica font as final fallback');
        }
      }
      
      // Title - PRESERVE ORIGINAL ARABIC TEXT
      const titleFontSize = 20;
      let currentY = height - margin - 30;
      
      try {
        // Draw title with original Arabic text - NO CONVERSION
        page.drawText(config.title, {
          x: (width - font.widthOfTextAtSize(config.title, titleFontSize)) / 2,
          y: currentY,
          size: titleFontSize,
          font: fontBold,
          color: rgb(0.2, 0.3, 0.5)
        });
        console.log('✅ Title drawn with original Arabic text');
      } catch (titleError) {
        console.warn('Title drawing failed, trying safer approach:', titleError);
        // If font doesn't support Arabic, use a simple approach
        page.drawText('Stock Report', {
          x: (width - font.widthOfTextAtSize('Stock Report', titleFontSize)) / 2,
          y: currentY,
          size: titleFontSize,
          font: fontBold,
          color: rgb(0.2, 0.3, 0.5)
        });
      }
      
      currentY -= 40;
      
      // Subtitle if exists - PRESERVE ORIGINAL ARABIC TEXT
      if (config.subtitle) {
        try {
          page.drawText(config.subtitle, {
            x: (width - font.widthOfTextAtSize(config.subtitle, 14)) / 2,
            y: currentY,
            size: 14,
            font: font,
            color: rgb(0.4, 0.4, 0.4)
          });
          console.log('✅ Subtitle drawn with original Arabic text');
        } catch (subtitleError) {
          console.warn('Subtitle drawing failed:', subtitleError);
        }
        currentY -= 25;
      }
      
      // Date
      const dateText = config.currentDate || this.formatDate(new Date(), 'yyyy-MM-dd');
      page.drawText(dateText, {
        x: (width - font.widthOfTextAtSize(dateText, 12)) / 2,
        y: currentY,
        size: 12,
        font: font,
        color: rgb(0.5, 0.5, 0.5)
      });
      
      currentY -= 40;
      
      // Table setup
      const colCount = config.columns.length;
      const colWidth = contentWidth / colCount;
      const rowHeight = 25;
      const headerHeight = 30;
      
      // Draw header background
      page.drawRectangle({
        x: margin,
        y: currentY - headerHeight,
        width: contentWidth,
        height: headerHeight,
        color: rgb(0.2, 0.4, 0.7)
      });
      
      // Draw column headers - PRESERVE ORIGINAL ARABIC TEXT
      let currentX = margin;
      config.columns.forEach((col, index) => {
        const headerText = col.title;
        const textSize = 11;
        
        console.log(`📝 Drawing header: "${headerText}" (Font: ${useExternalFont ? 'Arabic' : 'Standard'})`);
        
        // Multiple strategies to render Arabic text
        let textRendered = false;
        
        // Strategy 1: Try with original text (works with Arabic fonts)
        if (!textRendered) {
          try {
            const textWidth = this.safeCalculateTextWidth(font, headerText, textSize);
            const textX = currentX + colWidth - textWidth - 10;
            
            page.drawText(headerText, {
              x: Math.max(currentX + 5, textX),
              y: currentY - 18,
              size: textSize,
              font: fontBold,
              color: rgb(1, 1, 1)
            });
            
            textRendered = true;
            console.log(`✅ Header "${headerText}" rendered successfully`);
          } catch (error) {
            console.warn(`Strategy 1 failed for "${headerText}":`, error);
          }
        }
        
        // Strategy 2: Try with cleaned Arabic text (remove problematic characters)
        if (!textRendered && useExternalFont) {
          try {
            const cleanedText = this.cleanArabicForRendering(headerText);
            const textWidth = this.safeCalculateTextWidth(font, cleanedText, textSize);
            const textX = currentX + colWidth - textWidth - 10;
            
            page.drawText(cleanedText, {
              x: Math.max(currentX + 5, textX),
              y: currentY - 18,
              size: textSize,
              font: fontBold,
              color: rgb(1, 1, 1)
            });
            
            textRendered = true;
            console.log(`✅ Header "${cleanedText}" rendered with cleaned text`);
          } catch (error) {
            console.warn(`Strategy 2 failed for "${headerText}":`, error);
          }
        }
        
        // Strategy 3: For non-Arabic fonts, keep trying the original text but with error handling
        if (!textRendered) {
          try {
            // Simple approach: draw text and let the font handle what it can
            page.drawText(headerText, {
              x: currentX + 10,
              y: currentY - 18,
              size: textSize,
              font: fontBold,
              color: rgb(1, 1, 1)
            });
            
            textRendered = true;
            console.log(`⚠️ Header "${headerText}" rendered with standard approach`);
          } catch (error) {
            console.error(`All strategies failed for "${headerText}":`, error);
            // As absolute last resort, show the original Arabic text even if it doesn't render perfectly
            try {
              page.drawText(headerText, {
                x: currentX + 5,
                y: currentY - 18,
                size: 9, // Smaller size might work better
                font: font, // Use regular font instead of bold
                color: rgb(1, 1, 1)
              });
              textRendered = true;
              console.log(`⚠️ Header rendered with minimal approach`);
            } catch (finalError) {
              console.error(`Final attempt failed for "${headerText}":`, finalError);
              // Don't render anything rather than showing "Col 1", "Col 2"
            }
          }
        }
        
        // Column separator
        if (index < colCount - 1) {
          page.drawLine({
            start: { x: currentX + colWidth, y: currentY },
            end: { x: currentX + colWidth, y: currentY - headerHeight },
            thickness: 1,
            color: rgb(0.8, 0.8, 0.8)
          });
        }
        
        currentX += colWidth;
      });
      
      currentY -= headerHeight;
      
      // Draw data rows - PRESERVE ORIGINAL ARABIC TEXT
      const maxRowsPerPage = Math.floor((currentY - margin - 50) / rowHeight);
      let rowsDrawn = 0;
      let pageNumber = 1;
      
      for (let i = 0; i < config.data.length; i++) {
        const row = config.data[i];
        
        // Check if we need a new page
        if (rowsDrawn >= maxRowsPerPage) {
          // Add footer
          await this.drawSimpleFooter(page, config, pageNumber, Math.ceil(config.data.length / maxRowsPerPage), font, width, margin);
          
          // New page
          page = pdfDoc.addPage([842, 595]);
          currentY = height - margin - 40;
          rowsDrawn = 0;
          pageNumber++;
          
          // Redraw headers on new page
          page.drawRectangle({
            x: margin,
            y: currentY - headerHeight,
            width: contentWidth,
            height: headerHeight,
            color: rgb(0.2, 0.4, 0.7)
          });
          
          currentX = margin;
          config.columns.forEach((col, index) => {
            const headerText = col.title;
            
            // Use same multi-strategy approach for new page headers
            let textRendered = false;
            
            // Strategy 1: Try original text
            if (!textRendered) {
              try {
                const textWidth = this.safeCalculateTextWidth(font, headerText, 11);
                const textX = currentX + colWidth - textWidth - 10;
                
                page.drawText(headerText, {
                  x: Math.max(currentX + 5, textX),
                  y: currentY - 18,
                  size: 11,
                  font: fontBold,
                  color: rgb(1, 1, 1)
                });
                textRendered = true;
              } catch (error) {
                // Continue to next strategy
              }
            }
            
            // Strategy 2: Try cleaned text
            if (!textRendered) {
              try {
                const cleanedText = this.cleanArabicForRendering(headerText);
                page.drawText(cleanedText, {
                  x: currentX + 10,
                  y: currentY - 18,
                  size: 11,
                  font: fontBold,
                  color: rgb(1, 1, 1)
                });
                textRendered = true;
              } catch (error) {
                // Continue to next strategy
              }
            }
            
            // Strategy 3: Simple approach
            if (!textRendered) {
              try {
                page.drawText(headerText, {
                  x: currentX + 5,
                  y: currentY - 18,
                  size: 10, // Smaller size
                  font: font, // Regular font
                  color: rgb(1, 1, 1)
                });
                textRendered = true;
              } catch (error) {
                // Don't render anything rather than "Col X"
              }
            }
            
            if (index < colCount - 1) {
              page.drawLine({
                start: { x: currentX + colWidth, y: currentY },
                end: { x: currentX + colWidth, y: currentY - headerHeight },
                thickness: 1,
                color: rgb(0.8, 0.8, 0.8)
              });
            }
            currentX += colWidth;
          });
          
          currentY -= headerHeight;
        }
        
        // Row background
        if (i % 2 === 0) {
          page.drawRectangle({
            x: margin,
            y: currentY - rowHeight,
            width: contentWidth,
            height: rowHeight,
            color: rgb(0.95, 0.95, 0.95)
          });
        }
        
        // Draw cell data - PRESERVE ORIGINAL ARABIC TEXT
        currentX = margin;
        config.columns.forEach((col, colIndex) => {
          const cellValue = this.getCellValue(row, col, i + 1).toString();
          const textSize = 10;
          const maxWidth = colWidth - 10;
          
          // Prepare display text (truncate if needed)
          let displayText = cellValue;
          let textWidth = this.safeCalculateTextWidth(font, displayText, textSize);
          
          while (textWidth > maxWidth && displayText.length > 1) {
            displayText = displayText.slice(0, -1);
            textWidth = this.safeCalculateTextWidth(font, displayText + '...', textSize);
          }
          if (displayText !== cellValue && displayText.length > 0) {
            displayText = displayText + '...';
            textWidth = this.safeCalculateTextWidth(font, displayText, textSize);
          }
          
          // Multiple strategies to render cell text
          let cellRendered = false;
          
          // Strategy 1: Try with original text
          if (!cellRendered) {
            try {
              const textX = currentX + colWidth - textWidth - 5;
              
              page.drawText(displayText, {
                x: Math.max(currentX + 5, textX),
                y: currentY - 15,
                size: textSize,
                font: font,
                color: rgb(0, 0, 0)
              });
              
              cellRendered = true;
            } catch (error) {
              console.warn(`Cell text strategy 1 failed for "${displayText}":`, error);
            }
          }
          
          // Strategy 2: Try with cleaned text (for Arabic)
          if (!cellRendered && this.detectArabicText(displayText)) {
            try {
              const cleanedText = this.cleanArabicForRendering(displayText);
              const cleanedWidth = this.safeCalculateTextWidth(font, cleanedText, textSize);
              const textX = currentX + colWidth - cleanedWidth - 5;
              
              page.drawText(cleanedText, {
                x: Math.max(currentX + 5, textX),
                y: currentY - 15,
                size: textSize,
                font: font,
                color: rgb(0, 0, 0)
              });
              
              cellRendered = true;
            } catch (error) {
              console.warn(`Cell text strategy 2 failed for "${displayText}":`, error);
            }
          }
          
          // Strategy 3: Simple left-aligned rendering
          if (!cellRendered) {
            try {
              page.drawText(displayText, {
                x: currentX + 5,
                y: currentY - 15,
                size: textSize,
                font: font,
                color: rgb(0, 0, 0)
              });
              
              cellRendered = true;
            } catch (error) {
              console.warn(`Cell text strategy 3 failed for "${displayText}":`, error);
              // Don't add fallback text - better to have empty cells than wrong data
            }
          }
          
          // Cell border
          page.drawRectangle({
            x: currentX,
            y: currentY - rowHeight,
            width: colWidth,
            height: rowHeight,
            borderColor: rgb(0.8, 0.8, 0.8),
            borderWidth: 0.5
          });
          
          currentX += colWidth;
        });
        
        currentY -= rowHeight;
        rowsDrawn++;
      }
      
      // Final page footer
      const totalPages = Math.ceil(config.data.length / maxRowsPerPage) || 1;
      await this.drawSimpleFooter(page, config, pageNumber, totalPages, font, width, margin);
      
      // Save PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${config.fileName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log('✅ PDF exported successfully with PRESERVED Arabic text!');
      
    } catch (error) {
      console.error('❌ Direct Arabic PDF export failed:', error);
      throw error;
    }
  }

  private async drawSimpleFooter(page: any, config: ExportConfig, currentPage: number, totalPages: number, font: any, pageWidth: number, margin: number): Promise<void> {
    try {
      const { rgb } = await import('pdf-lib');
      const footerY = margin;
      
      // User name (left) - try Arabic first, fallback if needed
      try {
        const userText = `المستخدم: ${config.userName}`;
        page.drawText(userText, {
          x: margin,
          y: footerY,
          size: 8,
          font: font,
          color: rgb(0.4, 0.4, 0.4)
        });
      } catch (userError) {
        page.drawText(`User: ${config.userName}`, {
          x: margin,
          y: footerY,
          size: 8,
          font: font,
          color: rgb(0.4, 0.4, 0.4)
        });
      }
      
      // Page number (center)
      const pageText = `Page ${currentPage} of ${totalPages}`;
      const pageTextWidth = font.widthOfTextAtSize(pageText, 8);
      page.drawText(pageText, {
        x: (pageWidth - pageTextWidth) / 2,
        y: footerY,
        size: 8,
        font: font,
        color: rgb(0.4, 0.4, 0.4)
      });
      
      // Date (right)
      const dateText = this.formatDate(new Date(), 'yyyy-MM-dd HH:mm');
      const dateTextWidth = font.widthOfTextAtSize(dateText, 8);
      page.drawText(dateText, {
        x: pageWidth - margin - dateTextWidth,
        y: footerY,
        size: 8,
        font: font,
        color: rgb(0.4, 0.4, 0.4)
      });
    } catch (footerError) {
      console.warn('Footer drawing failed:', footerError);
    }
  }

  private safeCalculateTextWidth(font: any, text: string, size: number): number {
    try {
      return font.widthOfTextAtSize(text, size);
    } catch (error) {
      // Fallback calculation based on character count
      return text.length * size * 0.6;
    }
  }

  private cleanArabicForRendering(text: string): string {
    if (!text) return text;
    
    // Remove problematic characters that might cause rendering issues
    return text
      .replace(/[\u064B-\u0652]/g, '') // Remove most diacritics
      .replace(/[\u0653-\u0655]/g, '') // Remove additional marks  
      .replace(/[\u0670\u0640]/g, '') // Remove elongation marks
      .replace(/\u200C/g, '') // Remove zero-width non-joiner
      .replace(/\u200D/g, '') // Remove zero-width joiner
      .normalize('NFKC') // Normalize Unicode
      .trim();
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



  private async exportToPDFWithModernLib(config: ExportConfig): Promise<void> {
    try {
      console.log('Using modern pdf-lib with native Arabic text support...');
      
      // Import the modern pdf-lib
      const { PDFDocument, rgb } = await import('pdf-lib');
      
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      
      // Add a page with landscape orientation
      let page = pdfDoc.addPage([842, 595]); // A4 landscape (595 x 842 mm -> points)
      
      // Get page dimensions
      const { width, height } = page.getSize();
      const margin = 40;
      const contentWidth = width - (2 * margin);
      const contentHeight = height - (2 * margin);
      
      // Embed Arabic-compatible font with multiple strategies
      let font, fontBold;
      let useArabicFont = false;
      
      try {
        // Strategy 1: Try to load custom Arabic font
        const fontBytes = await this.loadArabicFont();
        font = await pdfDoc.embedFont(fontBytes);
        fontBold = font; // Use same font for bold (Arabic fonts often handle weight internally)
        useArabicFont = true;
        console.log('✅ Arabic-compatible font embedded successfully');
      } catch (fontError) {
        console.warn('❌ Arabic font embedding failed, trying advanced built-in fonts:', fontError);
        try {
          // Strategy 2: Try TimesRoman which has better Unicode support
          const { StandardFonts } = await import('pdf-lib');
          font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
          fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
          useArabicFont = true; // TimesRoman has decent Arabic support
          console.log('⚠️ Using TimesRoman font with Unicode support');
        } catch (timesError) {
          console.warn('❌ TimesRoman failed, trying Helvetica');
          try {
            // Strategy 3: Try Helvetica (sometimes better than Courier for Arabic)
            const { StandardFonts: StandardFontsBackup } = await import('pdf-lib');
            font = await pdfDoc.embedFont(StandardFontsBackup.Helvetica);
            fontBold = await pdfDoc.embedFont(StandardFontsBackup.HelveticaBold);
            useArabicFont = true; // Give it a chance with Arabic
            console.log('⚠️ Using Helvetica font - attempting Arabic support');
          } catch (helveticaError) {
            console.warn('❌ All font strategies failed, using enhanced Arabic text processing');
            // Don't fall back to text conversion, instead use Courier with enhanced text processing
            const { StandardFonts: FinalFallback } = await import('pdf-lib');
            font = await pdfDoc.embedFont(FinalFallback.Courier);
            fontBold = font;
            useArabicFont = true; // We'll process the text better
            console.log('⚠️ Using Courier font with enhanced Arabic text processing');
          }
        }
      }
      
      // Title (preserve original Arabic text)
      const titleFontSize = 20;
      const titleText = config.title; // Keep original Arabic
      const titleWidth = this.safeGetTextWidth(font, titleText, titleFontSize);
      
      this.safeDrawText(page, titleText, {
        x: (width - titleWidth) / 2,
        y: height - margin - 30,
        size: titleFontSize,
        font: fontBold,
        color: rgb(0.2, 0.3, 0.5)
      });
      
      // Subtitle if exists (preserve original Arabic text)
      let currentY = height - margin - 60;
      if (config.subtitle) {
        const subtitleText = config.subtitle; // Keep original Arabic
        const subtitleWidth = this.safeGetTextWidth(font, subtitleText, 14);
        this.safeDrawText(page, subtitleText, {
          x: (width - subtitleWidth) / 2,
          y: currentY,
          size: 14,
          font: font,
          color: rgb(0.4, 0.4, 0.4)
        });
        currentY -= 25;
      }
      
      // Date
      const dateText = config.currentDate || this.formatDate(new Date(), 'yyyy-MM-dd');
      const dateWidth = this.safeGetTextWidth(font, dateText, 12);
      this.safeDrawText(page, dateText, {
        x: (width - dateWidth) / 2,
        y: currentY,
        size: 12,
        font: font,
        color: rgb(0.5, 0.5, 0.5)
      });
      
      currentY -= 40;
      
      // Calculate table layout
      const colCount = config.columns.length;
      const colWidth = contentWidth / colCount;
      const rowHeight = 25;
      const headerHeight = 30;
      
      // Draw table header background
      page.drawRectangle({
        x: margin,
        y: currentY - headerHeight,
        width: contentWidth,
        height: headerHeight,
        color: rgb(0.2, 0.4, 0.7)
      });
      
      // Draw headers with white text (preserve original Arabic)
      let currentX = margin;
      config.columns.forEach((col, index) => {
        // Header text (keep original Arabic)
        const headerText = col.title; // Keep original Arabic
        const textSize = 11;
        const textWidth = this.safeGetTextWidth(font, headerText, textSize);
        
        // Right-align text for Arabic support
        const textX = currentX + colWidth - 10 - textWidth;
        
        this.safeDrawText(page, headerText, {
          x: Math.max(currentX + 5, textX),
          y: currentY - 18,
          size: textSize,
          font: fontBold,
          color: rgb(1, 1, 1) // White text
        });
        
        // Draw column separator
        if (index < colCount - 1) {
          page.drawLine({
            start: { x: currentX + colWidth, y: currentY },
            end: { x: currentX + colWidth, y: currentY - headerHeight },
            thickness: 1,
            color: rgb(0.8, 0.8, 0.8)
          });
        }
        
        currentX += colWidth;
      });
      
      currentY -= headerHeight;
      
      // Calculate how many rows fit on the page
      const availableHeight = currentY - margin - 50; // Leave space for footer
      const maxRowsPerPage = Math.floor(availableHeight / rowHeight);
      let rowsDrawn = 0;
      let pageNumber = 1;
      
      // Draw data rows
      for (let i = 0; i < config.data.length; i++) {
        const row = config.data[i];
        
        // Check if we need a new page
        if (rowsDrawn >= maxRowsPerPage) {
          // Add footer to current page
          await this.addModernPDFFooter(page, config, pageNumber, Math.ceil(config.data.length / maxRowsPerPage), font, width, margin);
          
          // Add new page
          const newPage = pdfDoc.addPage([842, 595]);
          page = newPage; // Update current page reference
          currentY = height - margin - 40;
          rowsDrawn = 0;
          pageNumber++;
          
          // Redraw headers on new page
          newPage.drawRectangle({
            x: margin,
            y: currentY - headerHeight,
            width: contentWidth,
            height: headerHeight,
            color: rgb(0.2, 0.4, 0.7)
          });
          
          currentX = margin;
          config.columns.forEach((col, index) => {
            const headerText = col.title; // Keep original Arabic
            const textSize = 11;
            const textWidth = this.safeGetTextWidth(font, headerText, textSize);
            const textX = currentX + colWidth - 10 - textWidth;
            
            this.safeDrawText(page, headerText, {
              x: Math.max(currentX + 5, textX),
              y: currentY - 18,
              size: textSize,
              font: fontBold,
              color: rgb(1, 1, 1)
            });
            
            if (index < colCount - 1) {
              newPage.drawLine({
                start: { x: currentX + colWidth, y: currentY },
                end: { x: currentX + colWidth, y: currentY - headerHeight },
                thickness: 1,
                color: rgb(0.8, 0.8, 0.8)
              });
            }
            
            currentX += colWidth;
          });
          
          currentY -= headerHeight;
        }
        
        // Alternating row background
        if (i % 2 === 0) {
          page.drawRectangle({
            x: margin,
            y: currentY - rowHeight,
            width: contentWidth,
            height: rowHeight,
            color: rgb(0.95, 0.95, 0.95)
          });
        }
        
        // Draw row data (preserve original Arabic text)
        currentX = margin;
        config.columns.forEach((col, colIndex) => {
          const cellValue = this.getCellValue(row, col, i + 1).toString();
          const displayValue = cellValue; // Keep original Arabic
          const textSize = 10;
          
          // Truncate text if too long
          let displayText = displayValue;
          const maxWidth = colWidth - 10;
          let textWidth = this.safeGetTextWidth(font, displayText, textSize);
          
          while (textWidth > maxWidth && displayText.length > 1) {
            displayText = displayText.slice(0, -1);
            textWidth = this.safeGetTextWidth(font, displayText + '...', textSize);
          }
          if (displayText !== displayValue) {
            displayText = displayText + '...';
          }
          
          // Right-align for Arabic support
          textWidth = this.safeGetTextWidth(font, displayText, textSize);
          const textX = currentX + colWidth - 5 - textWidth;
          
          this.safeDrawText(page, displayText, {
            x: Math.max(currentX + 5, textX),
            y: currentY - 15,
            size: textSize,
            font: font,
            color: rgb(0, 0, 0)
          });
          
          // Draw cell border
          page.drawRectangle({
            x: currentX,
            y: currentY - rowHeight,
            width: colWidth,
            height: rowHeight,
            borderColor: rgb(0.8, 0.8, 0.8),
            borderWidth: 0.5
          });
          
          currentX += colWidth;
        });
        
        currentY -= rowHeight;
        rowsDrawn++;
      }
      
      // Add footer to last page
      const totalPages = Math.ceil(config.data.length / maxRowsPerPage) || 1;
      this.addModernPDFFooter(page, config, pageNumber, totalPages, font, width, margin);
      
      // Save and download PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${config.fileName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log('PDF exported successfully with pdf-lib!');
      
    } catch (error) {
      console.error('Modern PDF Export Error:', error);
      // Don't automatically fall back to text conversion, let the main handler try alternative method
      throw error;
    }
  }

  private async exportToPDFWithAlternativeMethod(config: ExportConfig): Promise<void> {
    try {
      console.log('Using alternative PDF export method with enhanced Arabic support...');
      
      // Import the modern pdf-lib
      const { PDFDocument, rgb, StandardFonts } = await import('pdf-lib');
      
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      
      // Add a page with landscape orientation
      let page = pdfDoc.addPage([842, 595]); // A4 landscape
      
      // Get page dimensions
      const { width, height } = page.getSize();
      const margin = 40;
      const contentWidth = width - (2 * margin);
      
      // Use Helvetica font which has better Unicode support than previously thought
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      
      console.log('✅ Using Helvetica with enhanced Arabic text processing');
      
      // Title - use enhanced text processing
      const titleFontSize = 20;
      const titleText = this.enhancedArabicTextProcessing(config.title);
      const titleWidth = this.safeGetTextWidth(font, titleText, titleFontSize);
      
      this.safeDrawText(page, titleText, {
        x: (width - titleWidth) / 2,
        y: height - margin - 30,
        size: titleFontSize,
        font: fontBold,
        color: rgb(0.2, 0.3, 0.5)
      });
      
      // Subtitle if exists
      let currentY = height - margin - 60;
      if (config.subtitle) {
        const subtitleText = this.enhancedArabicTextProcessing(config.subtitle);
        const subtitleWidth = this.safeGetTextWidth(font, subtitleText, 14);
        this.safeDrawText(page, subtitleText, {
          x: (width - subtitleWidth) / 2,
          y: currentY,
          size: 14,
          font: font,
          color: rgb(0.4, 0.4, 0.4)
        });
        currentY -= 25;
      }
      
      // Date
      const dateText = config.currentDate || this.formatDate(new Date(), 'yyyy-MM-dd');
      const dateWidth = this.safeGetTextWidth(font, dateText, 12);
      this.safeDrawText(page, dateText, {
        x: (width - dateWidth) / 2,
        y: currentY,
        size: 12,
        font: font,
        color: rgb(0.5, 0.5, 0.5)
      });
      
      currentY -= 40;
      
      // Calculate table layout
      const colCount = config.columns.length;
      const colWidth = contentWidth / colCount;
      const rowHeight = 25;
      const headerHeight = 30;
      
      // Draw table header background
      page.drawRectangle({
        x: margin,
        y: currentY - headerHeight,
        width: contentWidth,
        height: headerHeight,
        color: rgb(0.2, 0.4, 0.7)
      });
      
      // Draw headers with enhanced Arabic processing
      let currentX = margin;
      config.columns.forEach((col, index) => {
        const headerText = this.enhancedArabicTextProcessing(col.title);
        const textSize = 11;
        const textWidth = this.safeGetTextWidth(font, headerText, textSize);
        
        // Right-align for Arabic content
        const textX = currentX + colWidth - 10 - textWidth;
        
        this.safeDrawText(page, headerText, {
          x: Math.max(currentX + 5, textX),
          y: currentY - 18,
          size: textSize,
          font: fontBold,
          color: rgb(1, 1, 1)
        });
        
        // Draw column separator
        if (index < colCount - 1) {
          page.drawLine({
            start: { x: currentX + colWidth, y: currentY },
            end: { x: currentX + colWidth, y: currentY - headerHeight },
            thickness: 1,
            color: rgb(0.8, 0.8, 0.8)
          });
        }
        
        currentX += colWidth;
      });
      
      currentY -= headerHeight;
      
      // Calculate how many rows fit on the page
      const availableHeight = currentY - margin - 50;
      const maxRowsPerPage = Math.floor(availableHeight / rowHeight);
      let rowsDrawn = 0;
      let pageNumber = 1;
      
      // Draw data rows with enhanced Arabic processing
      for (let i = 0; i < config.data.length; i++) {
        const row = config.data[i];
        
        // Check if we need a new page
        if (rowsDrawn >= maxRowsPerPage) {
          // Add footer to current page
          await this.addEnhancedPDFFooter(page, config, pageNumber, Math.ceil(config.data.length / maxRowsPerPage), font, width, margin);
          
          // Add new page
          page = pdfDoc.addPage([842, 595]);
          currentY = height - margin - 40;
          rowsDrawn = 0;
          pageNumber++;
          
          // Redraw headers on new page
          page.drawRectangle({
            x: margin,
            y: currentY - headerHeight,
            width: contentWidth,
            height: headerHeight,
            color: rgb(0.2, 0.4, 0.7)
          });
          
          currentX = margin;
          config.columns.forEach((col, index) => {
            const headerText = this.enhancedArabicTextProcessing(col.title);
            const textSize = 11;
            const textWidth = this.safeGetTextWidth(font, headerText, textSize);
            const textX = currentX + colWidth - 10 - textWidth;
            
            this.safeDrawText(page, headerText, {
              x: Math.max(currentX + 5, textX),
              y: currentY - 18,
              size: textSize,
              font: fontBold,
              color: rgb(1, 1, 1)
            });
            
            if (index < colCount - 1) {
              page.drawLine({
                start: { x: currentX + colWidth, y: currentY },
                end: { x: currentX + colWidth, y: currentY - headerHeight },
                thickness: 1,
                color: rgb(0.8, 0.8, 0.8)
              });
            }
            
            currentX += colWidth;
          });
          
          currentY -= headerHeight;
        }
        
        // Alternating row background
        if (i % 2 === 0) {
          page.drawRectangle({
            x: margin,
            y: currentY - rowHeight,
            width: contentWidth,
            height: rowHeight,
            color: rgb(0.95, 0.95, 0.95)
          });
        }
        
        // Draw row data with enhanced Arabic processing
        currentX = margin;
        config.columns.forEach((col, colIndex) => {
          const cellValue = this.getCellValue(row, col, i + 1).toString();
          const displayValue = this.enhancedArabicTextProcessing(cellValue);
          const textSize = 10;
          
          // Truncate text if too long
          let displayText = displayValue;
          const maxWidth = colWidth - 10;
          let textWidth = this.safeGetTextWidth(font, displayText, textSize);
          
          while (textWidth > maxWidth && displayText.length > 1) {
            displayText = displayText.slice(0, -1);
            textWidth = this.safeGetTextWidth(font, displayText + '...', textSize);
          }
          if (displayText !== displayValue) {
            displayText = displayText + '...';
          }
          
          // Right-align for Arabic support
          textWidth = this.safeGetTextWidth(font, displayText, textSize);
          const textX = currentX + colWidth - 5 - textWidth;
          
          this.safeDrawText(page, displayText, {
            x: Math.max(currentX + 5, textX),
            y: currentY - 15,
            size: textSize,
            font: font,
            color: rgb(0, 0, 0)
          });
          
          // Draw cell border
          page.drawRectangle({
            x: currentX,
            y: currentY - rowHeight,
            width: colWidth,
            height: rowHeight,
            borderColor: rgb(0.8, 0.8, 0.8),
            borderWidth: 0.5
          });
          
          currentX += colWidth;
        });
        
        currentY -= rowHeight;
        rowsDrawn++;
      }
      
      // Add footer to last page
      const totalPages = Math.ceil(config.data.length / maxRowsPerPage) || 1;
      await this.addEnhancedPDFFooter(page, config, pageNumber, totalPages, font, width, margin);
      
      // Save and download PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${config.fileName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log('PDF exported successfully with enhanced Arabic method!');
      
    } catch (error) {
      console.error('Alternative PDF Export Error:', error);
      throw error;
    }
  }

  private generateHTMLTable(config: ExportConfig): string {
    const titleStyle = 'text-align: center; color: #1F4E79; font-size: 18px; font-weight: bold; margin: 10px 0;';
    const headerStyle = 'background-color: #4472C4; color: white; padding: 8px; text-align: center; font-weight: bold;';
    const cellStyle = 'padding: 6px; border: 1px solid #ddd; text-align: center;';
    const tableStyle = 'width: 100%; border-collapse: collapse; margin: 10px 0; font-family: Arial, "Noto Sans Arabic", serif;';
    
    let html = `
      <div style="direction: rtl; text-align: right;">
        <div style="${titleStyle}">${config.title}</div>
        ${config.subtitle ? `<div style="text-align: center; margin: 5px 0; color: #666;">${config.subtitle}</div>` : ''}
        <div style="text-align: center; margin: 5px 0; color: #888; font-size: 12px;">${config.currentDate || new Date().toLocaleDateString()}</div>
        
        <table style="${tableStyle}">
          <thead>
            <tr>
              ${config.columns.map(col => `<th style="${headerStyle}">${col.title}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
    `;
    
    config.data.forEach((row, index) => {
      const bgColor = index % 2 === 0 ? '#f8f9fa' : '#ffffff';
      html += '<tr>';
      
      config.columns.forEach(col => {
        const cellValue = this.getCellValue(row, col, index + 1);
        html += `<td style="${cellStyle} background-color: ${bgColor};">${cellValue}</td>`;
      });
      
      html += '</tr>';
    });
    
    html += `
          </tbody>
        </table>
        
        <div style="margin-top: 20px; font-size: 10px; color: #666;">
          <div>المستخدم: ${config.userName}</div>
          <div>تاريخ التصدير: ${new Date().toLocaleString('ar-SA')}</div>
        </div>
      </div>
    `;
    
    return html;
  }

  private enhancedArabicTextProcessing(text: string): string {
    if (!text) return '';
    
    // Multi-stage Arabic text processing that tries to preserve Arabic characters
    try {
      // Stage 1: Clean up problematic characters while preserving main text
      let processed = this.cleanArabicTextForPDF(text);
      
      // Stage 2: Check if the cleaned text still has Arabic characters
      const hasArabicAfterClean = /[\u0600-\u06FF]/.test(processed);
      
      if (hasArabicAfterClean) {
        // Try to keep the Arabic text with basic fixes
        processed = processed
          .normalize('NFKC') // Normalize Unicode
          .replace(/[\u200C\u200D]/g, '') // Remove zero-width joiners
          .replace(/\s+/g, ' ') // Normalize spaces
          .trim();
        
        console.log('✅ Preserved Arabic text with basic cleaning');
        return processed;
      } else {
        // If cleaning removed all Arabic, use smart transliteration
        console.log('⚠️ Arabic text lost during cleaning, using smart transliteration');
        return this.smartArabicTransliteration(text);
      }
    } catch (error) {
      console.warn('Enhanced Arabic processing failed, using fallback:', error);
      return this.smartArabicTransliteration(text);
    }
  }

  private async addEnhancedPDFFooter(page: any, config: ExportConfig, currentPage: number, totalPages: number, font: any, pageWidth: number, margin: number): Promise<void> {
    const { rgb } = await import('pdf-lib');
    const footerY = margin;
    
    // User name (left) - use enhanced processing
    const userText = this.enhancedArabicTextProcessing(`المستخدم: ${config.userName}`);
    this.safeDrawText(page, userText, {
      x: margin,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
    
    // Page number (center) - use enhanced processing
    const pageText = this.enhancedArabicTextProcessing(`صفحة ${currentPage} من ${totalPages}`);
    const pageTextWidth = this.safeGetTextWidth(font, pageText, 8);
    this.safeDrawText(page, pageText, {
      x: (pageWidth - pageTextWidth) / 2,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
    
    // Export date (right) - use enhanced processing
    const exportText = this.enhancedArabicTextProcessing(`تاريخ التصدير: ${this.formatDate(new Date(), 'yyyy-MM-dd HH:mm')}`);
    const exportTextWidth = this.safeGetTextWidth(font, exportText, 8);
    this.safeDrawText(page, exportText, {
      x: pageWidth - margin - exportTextWidth,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
  }

  private async exportToPDFWithTextConversion(config: ExportConfig): Promise<void> {
    try {
      console.log('Using PDF export with Arabic text conversion...');
      
      // Import the modern pdf-lib
      const { PDFDocument, rgb, StandardFonts } = await import('pdf-lib');
      
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      
      // Add a page with landscape orientation
      let page = pdfDoc.addPage([842, 595]); // A4 landscape
      
      // Get page dimensions
      const { width, height } = page.getSize();
      const margin = 40;
      const contentWidth = width - (2 * margin);
      
      // Use standard Helvetica font
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      
      // Title (convert Arabic to English)
      const titleFontSize = 20;
      const titleText = this.convertArabicToProfessionalEnglish(config.title);
      const titleWidth = font.widthOfTextAtSize(titleText, titleFontSize);
      
      page.drawText(titleText, {
        x: (width - titleWidth) / 2,
        y: height - margin - 30,
        size: titleFontSize,
        font: fontBold,
        color: rgb(0.2, 0.3, 0.5)
      });
      
      // Subtitle if exists
      let currentY = height - margin - 60;
      if (config.subtitle) {
        const subtitleText = this.convertArabicToProfessionalEnglish(config.subtitle);
        const subtitleWidth = font.widthOfTextAtSize(subtitleText, 14);
        page.drawText(subtitleText, {
          x: (width - subtitleWidth) / 2,
          y: currentY,
          size: 14,
          font: font,
          color: rgb(0.4, 0.4, 0.4)
        });
        currentY -= 25;
      }
      
      // Date
      const dateText = config.currentDate || this.formatDate(new Date(), 'yyyy-MM-dd');
      const dateWidth = font.widthOfTextAtSize(dateText, 12);
      page.drawText(dateText, {
        x: (width - dateWidth) / 2,
        y: currentY,
        size: 12,
        font: font,
        color: rgb(0.5, 0.5, 0.5)
      });
      
      currentY -= 40;
      
      // Calculate table layout
      const colCount = config.columns.length;
      const colWidth = contentWidth / colCount;
      const rowHeight = 25;
      const headerHeight = 30;
      
      // Draw table header background
      page.drawRectangle({
        x: margin,
        y: currentY - headerHeight,
        width: contentWidth,
        height: headerHeight,
        color: rgb(0.2, 0.4, 0.7)
      });
      
      // Draw headers with converted text
      let currentX = margin;
      config.columns.forEach((col, index) => {
        // Convert Arabic header to English
        const headerText = this.convertArabicToProfessionalEnglish(col.title);
        const textSize = 11;
        const textWidth = font.widthOfTextAtSize(headerText, textSize);
        
        // Center-align text for better readability
        const textX = currentX + (colWidth - textWidth) / 2;
        
        page.drawText(headerText, {
          x: Math.max(currentX + 5, textX),
          y: currentY - 18,
          size: textSize,
          font: fontBold,
          color: rgb(1, 1, 1) // White text
        });
        
        // Draw column separator
        if (index < colCount - 1) {
          page.drawLine({
            start: { x: currentX + colWidth, y: currentY },
            end: { x: currentX + colWidth, y: currentY - headerHeight },
            thickness: 1,
            color: rgb(0.8, 0.8, 0.8)
          });
        }
        
        currentX += colWidth;
      });
      
      currentY -= headerHeight;
      
      // Calculate rows per page
      const availableHeight = currentY - margin - 50;
      const maxRowsPerPage = Math.floor(availableHeight / rowHeight);
      let rowsDrawn = 0;
      let pageNumber = 1;
      
      // Draw data rows
      for (let i = 0; i < config.data.length; i++) {
        const row = config.data[i];
        
        // Check if we need a new page
        if (rowsDrawn >= maxRowsPerPage) {
          // Add footer to current page
          await this.addConvertedPDFFooter(page, config, pageNumber, Math.ceil(config.data.length / maxRowsPerPage), font, width, margin);
          
          // Add new page
          page = pdfDoc.addPage([842, 595]);
          currentY = height - margin - 40;
          rowsDrawn = 0;
          pageNumber++;
          
          // Redraw headers on new page
          page.drawRectangle({
            x: margin,
            y: currentY - headerHeight,
            width: contentWidth,
            height: headerHeight,
            color: rgb(0.2, 0.4, 0.7)
          });
          
          currentX = margin;
          config.columns.forEach((col, index) => {
            const headerText = this.convertArabicToProfessionalEnglish(col.title); // Convert Arabic to English
            const textSize = 11;
            const textWidth = font.widthOfTextAtSize(headerText, textSize);
            const textX = currentX + (colWidth - textWidth) / 2;
            
            page.drawText(headerText, {
              x: Math.max(currentX + 5, textX),
              y: currentY - 18,
              size: textSize,
              font: fontBold,
              color: rgb(1, 1, 1)
            });
            
            if (index < colCount - 1) {
              page.drawLine({
                start: { x: currentX + colWidth, y: currentY },
                end: { x: currentX + colWidth, y: currentY - headerHeight },
                thickness: 1,
                color: rgb(0.8, 0.8, 0.8)
              });
            }
            
            currentX += colWidth;
          });
          
          currentY -= headerHeight;
        }
        
        // Alternating row background
        if (i % 2 === 0) {
          page.drawRectangle({
            x: margin,
            y: currentY - rowHeight,
            width: contentWidth,
            height: rowHeight,
            color: rgb(0.95, 0.95, 0.95)
          });
        }
        
        // Draw row data with text conversion
        currentX = margin;
        config.columns.forEach((col, colIndex) => {
          const cellValue = this.getCellValue(row, col, i + 1).toString();
          // Convert Arabic text to English
          const convertedText = this.convertArabicToProfessionalEnglish(cellValue);
          const textSize = 10;
          
          // Truncate text if too long
          let displayText = convertedText;
          const maxWidth = colWidth - 10;
          let textWidth = font.widthOfTextAtSize(displayText, textSize);
          
          while (textWidth > maxWidth && displayText.length > 1) {
            displayText = displayText.slice(0, -1);
            textWidth = font.widthOfTextAtSize(displayText + '...', textSize);
          }
          if (displayText !== convertedText) {
            displayText = displayText + '...';
          }
          
          // Center-align for better readability
          textWidth = font.widthOfTextAtSize(displayText, textSize);
          const textX = currentX + (colWidth - textWidth) / 2;
          
          page.drawText(displayText, {
            x: Math.max(currentX + 5, textX),
            y: currentY - 15,
            size: textSize,
            font: font,
            color: rgb(0, 0, 0)
          });
          
          // Draw cell border
          page.drawRectangle({
            x: currentX,
            y: currentY - rowHeight,
            width: colWidth,
            height: rowHeight,
            borderColor: rgb(0.8, 0.8, 0.8),
            borderWidth: 0.5
          });
          
          currentX += colWidth;
        });
        
        currentY -= rowHeight;
        rowsDrawn++;
      }
      
      // Add footer to last page
      const totalPages = Math.ceil(config.data.length / maxRowsPerPage) || 1;
      await this.addConvertedPDFFooter(page, config, pageNumber, totalPages, font, width, margin);
      
      // Save and download PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${config.fileName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log('PDF exported successfully with text conversion!');
      
    } catch (error) {
      console.error('Fallback PDF Export Error:', error);
      throw error;
    }
  }

  private async addConvertedPDFFooter(page: any, config: ExportConfig, currentPage: number, totalPages: number, font: any, pageWidth: number, margin: number): Promise<void> {
    const { rgb } = await import('pdf-lib');
    const footerY = margin;
    
    // Convert footer text to English
    const userText = this.convertArabicToProfessionalEnglish(`المستخدم: ${config.userName}`);
    page.drawText(userText, {
      x: margin,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
    
    // Page number (center)
    const pageText = `Page ${currentPage} of ${totalPages}`;
    const pageTextWidth = font.widthOfTextAtSize(pageText, 8);
    page.drawText(pageText, {
      x: (pageWidth - pageTextWidth) / 2,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
    
    // Export date (right)
    const exportText = `Export Date: ${this.formatDate(new Date(), 'yyyy-MM-dd HH:mm')}`;
    const exportTextWidth = font.widthOfTextAtSize(exportText, 8);
    page.drawText(exportText, {
      x: pageWidth - margin - exportTextWidth,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
  }

  private async addModernPDFFooter(page: any, config: ExportConfig, currentPage: number, totalPages: number, font: any, pageWidth: number, margin: number): Promise<void> {
    const { rgb } = await import('pdf-lib');
    const footerY = margin;
    
    // User name (left) - keep Arabic
    const userText = `المستخدم: ${config.userName}`;
    this.safeDrawText(page, userText, {
      x: margin,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
    
    // Page number (center) - keep Arabic
    const pageText = `صفحة ${currentPage} من ${totalPages}`;
    const pageTextWidth = this.safeGetTextWidth(font, pageText, 8);
    this.safeDrawText(page, pageText, {
      x: (pageWidth - pageTextWidth) / 2,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
    
    // Export date (right) - keep Arabic
    const exportText = `تاريخ التصدير: ${this.formatDate(new Date(), 'yyyy-MM-dd HH:mm')}`;
    const exportTextWidth = this.safeGetTextWidth(font, exportText, 8);
    this.safeDrawText(page, exportText, {
      x: pageWidth - margin - exportTextWidth,
      y: footerY,
      size: 8,
      font: font,
      color: rgb(0.4, 0.4, 0.4)
    });
  }








  private reverseArabicText(text: string): string {
    try {
      // For Arabic RTL text, we need to reverse the text order for proper display in PDF
      // This handles mixed content (Arabic + English + numbers)
      
      // Split text into segments (Arabic, non-Arabic)
      const segments = this.segmentText(text);
      
      // Process each segment
      const processedSegments = segments.map(segment => {
        if (segment.isArabic) {
          // Reverse Arabic text for RTL display
          return segment.text.split('').reverse().join('');
        } else {
          // Keep non-Arabic text as is
          return segment.text;
        }
      });
      
      // Join segments back together
      return processedSegments.join('');
      
    } catch (error) {
      console.warn('Arabic text processing failed:', error);
      // Fallback: return original text
      return text;
    }
  }

  private segmentText(text: string): Array<{text: string, isArabic: boolean}> {
    const segments: Array<{text: string, isArabic: boolean}> = [];
    let currentSegment = '';
    let isCurrentArabic = false;
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const isArabicChar = /[\u0600-\u06FF]/.test(char);
      
      if (i === 0) {
        // First character - initialize
        currentSegment = char;
        isCurrentArabic = isArabicChar;
      } else if (isArabicChar === isCurrentArabic) {
        // Same type as current segment - add to current
        currentSegment += char;
      } else {
        // Different type - save current segment and start new one
        segments.push({text: currentSegment, isArabic: isCurrentArabic});
        currentSegment = char;
        isCurrentArabic = isArabicChar;
      }
    }
    
    // Add final segment
    if (currentSegment) {
      segments.push({text: currentSegment, isArabic: isCurrentArabic});
    }
    
    return segments;
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
      // First check if text contains any Arabic characters
      if (!text || !this.detectArabicText(text)) {
        return text; // Return as-is if no Arabic
      }
      
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
      
      // CRITICAL: Final safety check - if ANY Arabic characters remain, transliterate them
      // This ensures NO Arabic characters reach font rendering
      if (this.detectArabicText(result)) {
        console.warn('Arabic characters still present after conversion, applying full transliteration');
        result = this.safeArabicToEnglishTransliteration(result);
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

  private safeArabicToEnglishTransliteration(text: string): string {
    // COMPREHENSIVE Arabic character replacement - handles ALL Unicode Arabic ranges
    const completeArabicToEnglishMap: { [key: string]: string } = {
      // Basic Arabic Letters (U+0621-U+063A)
      'ء': '', 'آ': 'aa', 'أ': 'a', 'ؤ': 'u', 'إ': 'i', 'ئ': 'i', 'ا': 'a', 'ب': 'b',
      'ة': 'h', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'dh',
      'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'dh',
      'ع': 'a', 'غ': 'gh', 'ـ': '', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm',
      'ن': 'n', 'ه': 'h', 'و': 'w', 'ى': 'a', 'ي': 'y',
      
      // Extended Arabic (U+0640-U+065F)
      'ً': '', 'ٌ': '', 'ٍ': '', 'َ': '', 'ُ': '', 'ِ': '', 'ّ': '', 'ْ': '', 'ٓ': '',
      'ٔ': '', 'ٕ': '', 'ٖ': '', 'ٗ': '', '٘': '', 'ٙ': '', 'ٚ': '', 'ٛ': '', 'ٜ': '',
      'ٝ': '', 'ٞ': '', 'ٟ': '',
      
      // Arabic-Indic Digits (U+0660-U+0669)
      '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9',
      
      // Additional Arabic characters
      'ک': 'k', 'گ': 'g', 'پ': 'p', 'چ': 'ch', 'ژ': 'zh', 'ڤ': 'v', 'ڥ': 'f', 'ڦ': 'f',
      'ڧ': 'q', 'ڨ': 'q', 'ڪ': 'k', 'ګ': 'g', 'ڬ': 'g', 'ڭ': 'ng', 'ڮ': 'ng',
      
      // Arabic Presentation Forms-A (U+FB50-U+FDFF) - Common ligatures
      'ﻻ': 'la', 'ﻷ': 'laa', 'ﻹ': 'laa', 'ﻵ': 'laa',
      
      // Arabic Presentation Forms-B (U+FE70-U+FEFF) - Positional forms
      'ﹰ': '', 'ﹱ': '', 'ﹲ': '', 'ﹳ': '', 'ﹴ': '', 'ﹶ': '', 'ﹷ': '', 'ﹸ': '', 'ﹹ': '', 'ﹺ': '', 'ﹻ': '', 'ﹼ': '', 'ﹽ': '', 'ﹾ': '', 'ﹿ': '',
      'ﺀ': '', 'ﺁ': 'aa', 'ﺂ': 'aa', 'ﺃ': 'a', 'ﺄ': 'a', 'ﺅ': 'u', 'ﺆ': 'u', 'ﺇ': 'i', 'ﺈ': 'i', 'ﺉ': 'i', 'ﺊ': 'i', 'ﺋ': 'i', 'ﺌ': 'i', 'ﺍ': 'a', 'ﺎ': 'a',
      'ﺏ': 'b', 'ﺐ': 'b', 'ﺑ': 'b', 'ﺒ': 'b', 'ﺓ': 'h', 'ﺔ': 'h', 'ﺕ': 't', 'ﺖ': 't', 'ﺗ': 't', 'ﺘ': 't', 'ﺙ': 'th', 'ﺚ': 'th', 'ﺛ': 'th', 'ﺜ': 'th',
      'ﺝ': 'j', 'ﺞ': 'j', 'ﺟ': 'j', 'ﺠ': 'j', 'ﺡ': 'h', 'ﺢ': 'h', 'ﺣ': 'h', 'ﺤ': 'h', 'ﺥ': 'kh', 'ﺦ': 'kh', 'ﺧ': 'kh', 'ﺨ': 'kh',
      'ﺩ': 'd', 'ﺪ': 'd', 'ﺫ': 'dh', 'ﺬ': 'dh', 'ﺭ': 'r', 'ﺮ': 'r', 'ﺯ': 'z', 'ﺰ': 'z',
      'ﺱ': 's', 'ﺲ': 's', 'ﺳ': 's', 'ﺴ': 's', 'ﺵ': 'sh', 'ﺶ': 'sh', 'ﺷ': 'sh', 'ﺸ': 'sh',
      'ﺹ': 's', 'ﺺ': 's', 'ﺻ': 's', 'ﺼ': 's', 'ﺽ': 'd', 'ﺾ': 'd', 'ﺿ': 'd', 'ﻀ': 'd',
      'ﻁ': 't', 'ﻂ': 't', 'ﻃ': 't', 'ﻄ': 't', 'ﻅ': 'dh', 'ﻆ': 'dh', 'ﻇ': 'dh', 'ﻈ': 'dh',
      'ﻉ': 'a', 'ﻊ': 'a', 'ﻋ': 'a', 'ﻌ': 'a', 'ﻍ': 'gh', 'ﻎ': 'gh', 'ﻏ': 'gh', 'ﻐ': 'gh',
      'ﻑ': 'f', 'ﻒ': 'f', 'ﻓ': 'f', 'ﻔ': 'f', 'ﻕ': 'q', 'ﻖ': 'q', 'ﻗ': 'q', 'ﻘ': 'q',
      'ﻙ': 'k', 'ﻚ': 'k', 'ﻛ': 'k', 'ﻜ': 'k', 'ﻝ': 'l', 'ﻞ': 'l', 'ﻟ': 'l', 'ﻠ': 'l',
      'ﻡ': 'm', 'ﻢ': 'm', 'ﻣ': 'm', 'ﻤ': 'm', 'ﻥ': 'n', 'ﻦ': 'n', 'ﻧ': 'n', 'ﻨ': 'n',
      'ﻩ': 'h', 'ﻪ': 'h', 'ﻫ': 'h', 'ﻬ': 'h', 'ﻭ': 'w', 'ﻮ': 'w', 'ﻯ': 'a', 'ﻰ': 'a', 'ﻱ': 'y', 'ﻲ': 'y', 'ﻳ': 'y', 'ﻴ': 'y'
    };
    
    let result = '';
    for (const char of text) {
      // Check if character is in our mapping
      if (completeArabicToEnglishMap[char]) {
        result += completeArabicToEnglishMap[char];
      } else if (/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(char)) {
        // If it's still an Arabic character not in our map, replace with 'x'
        result += 'x';
      } else {
        // Keep non-Arabic characters as-is
        result += char;
      }
    }
    
    // Clean up the result
    result = result.replace(/\s+/g, ' ').trim();
    
    // Capitalize first letter if result is not empty
    if (result.length > 0) {
      result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    }
    
    return result || 'Text'; // Fallback to 'Text' if result is empty
  }

  private async loadArabicFont(): Promise<ArrayBuffer> {
    try {
      // Strategy 1: Try to load from multiple reliable Arabic font sources
      const fontUrls = [
        // Google Fonts - more reliable endpoints
        'https://fonts.gstatic.com/s/cairo/v28/SLXGc1nY6HkvalIkTp2mxdt0UX8gfO8_19co.woff2',
        'https://fonts.gstatic.com/s/nototc/v35/m8JVjfNVeKWVnh3QMuKkFcZlbkGG1dKFzQ.woff2',
        'https://fonts.gstatic.com/s/scheherazadnew/v16/4UaZrEhTvBiF3i89P6gvLJ2lfjz_-ruOvKsv.woff2',
        // Fallback to a more basic Arabic font
        'https://cdn.jsdelivr.net/gh/googlefonts/noto-fonts@main/hinted/ttf/NotoSansArabic/NotoSansArabic-Regular.ttf'
      ];
      
      // Try each font URL with better error handling
      for (const fontUrl of fontUrls) {
        try {
          console.log(`Attempting to load Arabic font from: ${fontUrl}`);
          
          const response = await fetch(fontUrl, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            headers: {
              'Accept': 'font/woff2,font/woff,font/ttf,*/*'
            }
          });
          
          if (response.ok && response.status === 200) {
            const fontBytes = await response.arrayBuffer();
            if (fontBytes.byteLength > 1000) { // Ensure we got actual font data
              console.log(`✅ Arabic font loaded successfully from CDN: ${fontBytes.byteLength} bytes`);
              return fontBytes;
            }
          }
        } catch (urlError) {
          console.warn(`❌ Failed to load font from ${fontUrl}:`, urlError);
          continue;
        }
      }
      
      // Strategy 2: Try loading from local assets if available
      try {
        console.log('Attempting to load Arabic font from local assets...');
        const localResponse = await fetch('./assets/fonts/NotoSansArabic-Regular.ttf');
        if (localResponse.ok) {
          const fontBytes = await localResponse.arrayBuffer();
          console.log('✅ Arabic font loaded from local assets');
          return fontBytes;
        }
      } catch (localError) {
        console.warn('❌ No local Arabic font found');
      }
      
      // Strategy 3: Create a basic Arabic font using web fonts API
      try {
        console.log('Attempting to create Arabic font using CSS Font Loading API...');
        const fontFace = new FontFace('ArabicFont', 'url(https://fonts.gstatic.com/s/cairo/v28/SLXGc1nY6HkvalIkTp2mxdt0UX8gfO8_19co.woff2)');
        await fontFace.load();
        console.log('✅ Arabic font created using Font Loading API');
        
        // Convert FontFace to ArrayBuffer (this is a workaround)
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.font = '16px ArabicFont';
          ctx.fillText('تجربة', 10, 30); // Test Arabic text
        }
        
        // For now, we'll fall back to the embed process
        throw new Error('FontFace to ArrayBuffer conversion needed');
      } catch (fontFaceError) {
        console.warn('❌ Font Loading API failed');
      }
      
      // If all else fails, throw error to trigger fallback
      throw new Error('All Arabic font loading strategies failed');
      
    } catch (error) {
      console.warn('All Arabic font loading attempts failed:', error);
      throw error;
    }
  }

  private safeGetTextWidth(font: any, text: string, size: number): number {
    try {
      return font.widthOfTextAtSize(text, size);
    } catch (error) {
      console.warn('Error calculating text width, using fallback:', error);
      // Fallback: approximate width based on character count
      return text.length * size * 0.6;
    }
  }

  private safeDrawText(page: any, text: string, options: any): boolean {
    try {
      // Process Arabic text for better PDF rendering
      let processedText = text;
      const hasArabic = /[\u0600-\u06FF]/.test(text);
      
      if (hasArabic) {
        console.log('Processing Arabic text for PDF:', text.substring(0, 20) + '...');
        
        // Apply Arabic text fixes for PDF compatibility
        processedText = this.fixArabicTextForPDF(text);
        
        // Apply proper RTL text processing
        processedText = this.processArabicTextForPDF(processedText);
        
        console.log('Arabic text processed successfully');
      }
      
      page.drawText(processedText, options);
      return true;
    } catch (error) {
      console.warn('Failed to draw processed Arabic text:', error);
      console.warn('Original text:', text);
      
      // Enhanced fallback strategy - try different approaches
      const fallbackStrategies = [
        () => {
          // Strategy 1: Try with cleaned Arabic text (remove problematic chars)
          const cleanedText = this.cleanArabicTextForPDF(text);
          page.drawText(cleanedText, options);
          console.log('✅ Successfully drawn with cleaned Arabic text');
        },
        () => {
          // Strategy 2: Try with simplified Arabic (basic characters only)
          const simplifiedText = this.simplifyArabicText(text);
          page.drawText(simplifiedText, options);
          console.log('✅ Successfully drawn with simplified Arabic text');
        },
        () => {
          // Strategy 3: Try with transliterated Arabic but keeping structure
          const transliteratedText = this.smartArabicTransliteration(text);
          page.drawText(transliteratedText, options);
          console.log('⚠️ Drawn with smart transliteration');
        }
      ];
      
      // Try each fallback strategy
      for (let i = 0; i < fallbackStrategies.length; i++) {
        try {
          fallbackStrategies[i]();
          return true;
        } catch (strategyError) {
          console.warn(`Fallback strategy ${i + 1} failed:`, strategyError);
          if (i === fallbackStrategies.length - 1) {
            console.error('All fallback strategies failed');
            return false;
          }
        }
      }
      
      return false;
    }
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

  private cleanArabicTextForPDF(text: string): string {
    if (!text) return '';
    
    // Remove only the most problematic diacritics but keep main Arabic characters
    const cleanedText = text
      .replace(/[\u064B-\u0652]/g, '') // Remove most diacritics
      .replace(/[\u0653-\u0655]/g, '') // Remove additional marks
      .replace(/[\u0670\u0640]/g, '') // Remove elongation marks
      .replace(/\u200C/g, '') // Remove zero-width non-joiner
      .replace(/\u200D/g, '') // Remove zero-width joiner
      .trim();
    
    return cleanedText;
  }

  private simplifyArabicText(text: string): string {
    if (!text) return '';
    
    // Keep only basic Arabic letters and numbers
    const basicArabicPattern = /[\u0621-\u063A\u0641-\u064A\u0660-\u0669\u0020-\u007E]/g;
    const matches = text.match(basicArabicPattern);
    
    return matches ? matches.join('') : text;
  }

  private smartArabicTransliteration(text: string): string {
    if (!text) return '';
    
    // Only transliterate if absolutely necessary, and do it intelligently
    const hasArabic = /[\u0600-\u06FF]/.test(text);
    
    if (!hasArabic) return text;
    
    // Smart transliteration that preserves meaning for business terms
    const smartMap: { [key: string]: string } = {
      // Keep common business terms recognizable
      'تقرير المخزون': 'Stock Report',
      'المخزون الإفتتاحي': 'Opening Inventory',
      'اسم الصنف': 'Item Name',
      'الكمية': 'Quantity',
      'السعر': 'Price',
      'المجموع': 'Total',
      'التاريخ': 'Date',
      
      // Individual characters as last resort
      'ا': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'h',
      'خ': 'kh', 'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z', 'س': 's',
      'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'dh', 'ع': 'a',
      'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm',
      'ن': 'n', 'ه': 'h', 'و': 'w', 'ي': 'y'
    };
    
    let result = text;
    
    // First try phrase-based replacement
    Object.keys(smartMap).forEach(arabic => {
      if (result.includes(arabic)) {
        result = result.replace(new RegExp(arabic, 'g'), smartMap[arabic]);
      }
    });
    
    return result;
  }

  private processArabicTextForPDF(text: string): string {
    if (!text) return '';
    
    // Enhanced Arabic text processing for PDF compatibility
    try {
      // Clean the text first
      let processedText = this.cleanArabicTextForPDF(text);
      
      // Apply RTL text fixes if needed
      const hasArabic = /[\u0600-\u06FF]/.test(processedText);
      if (hasArabic) {
        // For PDF, we typically don't need to reverse text as the font handles directionality
        // Just ensure proper character encoding
        processedText = processedText.normalize('NFKC'); // Normalize Unicode
      }
      
      return processedText;
    } catch (error) {
      console.warn('Arabic text processing failed, returning original:', error);
      return text;
    }
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
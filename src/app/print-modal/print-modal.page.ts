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

import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-print-modal',
  templateUrl: './print-modal.page.html',
  styleUrls: ['./print-modal.page.scss'],
})
export class PrintModalPage implements OnInit, OnDestroy {
  @Input() printArr: any;
  @Input() page: any;
   //mode = 'pos' 
   mode = 'enhanced' 
   logoBase64: string = '';
   vehicleBase64: string = '';
   itemImagesBase64: { [key: string]: string } = {};
   
   // Image loading state management
   imagesLoaded: boolean = false;
   imageLoadingAttempts: { [key: string]: number } = {};
   maxRetryAttempts: number = 3;
   
   // Currency management
   currentCurrency: string = 'SDG';
   exchangeRate: number = 1.0;
   private currencySubscription: Subscription;

   // Fallback images as base64 (small placeholder images)
   private fallbackLogo: string = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjBmMGYwIiBzdHJva2U9IiNjY2MiLz4KPHRLEHT4PSJHVlMiIHg9IjUwIiB5PSI1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY2NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij5HVlM8L3RleHQ+Cjwvc3ZnPg==';
   
   private fallbackVehicle: string = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjBmMGYwIiBzdHJva2U9IiNjY2MiLz4KPHRLEHT4PSLZgNmJ2YTYudmE2YTZhIiB4PSI1MCIgeT0iNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+2YDZidmE2LnZhNmq2YTZh9mE2Yk8L3RleHQ+Cjwvc3ZnPg==';
  
  constructor(
    private modalController: ModalController,
    private toast: ToastController,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef
  ) {
    this.mode = 'enhanced';
  }

  async ngOnInit() {
    console.log(this.printArr[0]);
    this.sortItemListAlphabetically();
    await this.loadImages();
    await this.initializeCurrencyForPrint();
  }
  
  ngOnDestroy() {
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }

  // Utility method to get the appropriate invoice object
  getInvoiceData() {
    if (this.page === 'sales_return' && this.printArr && this.printArr[0].returnInvo) {
      return this.printArr[0].returnInvo;
    } else if (this.printArr && this.printArr[0].payInvo) {
      return this.printArr[0].payInvo;
    }
    return {};
  }

  // Get invoice reference number
  getInvoiceRef(): string {
    const invoiceData = this.getInvoiceData();
    return this.page === 'sales_return' ? (invoiceData.return_ref || '') : (invoiceData.pay_ref || '');
  }

  // Get invoice date
  getInvoiceDate(): string {
    const invoiceData = this.getInvoiceData();
    return this.page === 'sales_return' ? (invoiceData.return_date || '') : (invoiceData.pay_date || '');
  }

  // Get invoice time
  getInvoiceTime(): string {
    const invoiceData = this.getInvoiceData();
    return this.page === 'sales_return' ? (invoiceData.return_time || '') : (invoiceData.pay_time || '');
  }

  // Get invoice total
  getInvoiceTotal(): number {
    const invoiceData = this.getInvoiceData();
    return invoiceData.tot_pr || 0;
  }

  // Get invoice discount
  getInvoiceDiscount(): number {
    const invoiceData = this.getInvoiceData();
    return invoiceData.discount || 0;
  }

  // Get invoice comment
  getInvoiceComment(): string {
    const invoiceData = this.getInvoiceData();
    return this.page === 'sales_return' ? (invoiceData.returnComment || invoiceData.return_reason || '') : (invoiceData.payComment || '');
  }

  // Get user name
  getUserName(): string {
    const invoiceData = this.getInvoiceData();
    return invoiceData.user_name || this.printArr[0]?.user_name || '';
  }
  
  async initializeCurrencyForPrint() {
    await this.currencyService.initializeCurrency();
    this.currentCurrency = this.currencyService.getCurrentCurrencyValue();
    this.exchangeRate = this.currencyService.getExchangeRate(this.currentCurrency);
    
    this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
      this.currentCurrency = currency;
      this.exchangeRate = this.currencyService.getExchangeRate(currency);
      this.cdr.detectChanges();
    });
    
    this.addCurrencyToPrintData();
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
  
  formatDualCurrency(amount: number): string {
    if (!amount && amount !== 0) return '0.00';
    
    const convertedAmount = this.currencyService.convertFromSDG(amount, this.currentCurrency);
    const baseCurrency = this.currencyService.formatCurrency(amount, 'SDG');
    const targetCurrency = this.currencyService.formatCurrency(convertedAmount, this.currentCurrency);
    
    if (this.currentCurrency === 'SDG') {
      return baseCurrency;
    }
    
    return `${targetCurrency} (${baseCurrency})`;
  }
  
  getExchangeRateFooter(): string {
    if (this.currentCurrency === 'SDG') return '';
    
    const today = new Date().toLocaleDateString('en-US');
    return `سعر الصرف المستخدم: 1 ${this.currentCurrency} = ${this.exchangeRate} جنيه سوداني (تاريخ: ${today})`;
  }

  sortItemListAlphabetically() {
    if (!this.printArr[0].itemList || this.printArr[0].itemList.length === 0) {
      return;
    }
    
    this.printArr[0].itemList= [...this.printArr[0].itemList].sort((a, b) => {
      const nameA = a.item_name ? a.item_name.toString().toLowerCase() : '';
      const nameB = b.item_name ? b.item_name.toString().toLowerCase() : '';
      return nameA.localeCompare(nameB, 'ar', { numeric: true });
    });
  }



  async loadImages() {
    console.log('Starting image loading process...');
    const imageLoadingPromises: Promise<void>[] = [];
    
    // Initialize loading attempts
    this.imageLoadingAttempts['logo'] = 0;
    this.imageLoadingAttempts['vehicle'] = 0;
    
    // Load logo with retry mechanism
    imageLoadingPromises.push(
      this.loadImageWithRetry('assets/imgs/logo.png', 'logo')
        .then((base64) => {
          this.logoBase64 = base64;
          console.log('Logo loaded successfully');
        })
        .catch((error) => {
          console.warn('Failed to load logo after retries, using fallback:', error);
          this.logoBase64 = this.fallbackLogo;
        })
    );
    
    // Load vehicle image with retry mechanism
    imageLoadingPromises.push(
      this.loadImageWithRetry('assets/imgs/tuk.jpg', 'vehicle')
        .then((base64) => {
          this.vehicleBase64 = base64;
          console.log('Vehicle image loaded successfully');
        })
        .catch((error) => {
          console.warn('Failed to load vehicle image after retries, using fallback:', error);
          this.vehicleBase64 = this.fallbackVehicle;
        })
    );
    
    try {
      // Wait for all image loading attempts to complete
      await Promise.all(imageLoadingPromises);
      this.imagesLoaded = true;
      console.log('All images loaded. Ready to print.');
      
      // Trigger change detection to update UI
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Unexpected error during image loading:', error);
      // Even if there's an error, mark as loaded with fallbacks
      this.imagesLoaded = true;
      this.cdr.detectChanges();
    }
  }

  async loadItemImages() {
    if (!this.printArr || !this.printArr[0] || !this.printArr[0].itemList) {
      return;
    }
    
    const itemList = this.printArr[0].itemList;
    const imagePromises = [];
    
    for (const item of itemList) {
      if (item.imageUrl && !this.itemImagesBase64[item.imageUrl]) {
        imagePromises.push(
          this.convertImageToBase64(item.imageUrl)
            .then((base64) => {
              this.itemImagesBase64[item.imageUrl] = base64;
            })
            .catch((error) => {
              console.log(`Failed to load item image ${item.imageUrl}:`, error);
            })
        );
      }
    }
    
    await Promise.all(imagePromises);
    console.log('Loaded item images:', Object.keys(this.itemImagesBase64));
  }

  // New method with retry mechanism
  async loadImageWithRetry(imagePath: string, imageKey: string): Promise<string> {
    const maxAttempts = this.maxRetryAttempts;
    let lastError: any;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      this.imageLoadingAttempts[imageKey] = attempt;
      console.log(`Loading ${imageKey} (attempt ${attempt}/${maxAttempts}): ${imagePath}`);
      
      try {
        const base64 = await this.convertImageToBase64(imagePath);
        console.log(`Successfully loaded ${imageKey} on attempt ${attempt}`);
        return base64;
      } catch (error) {
        lastError = error;
        console.warn(`Failed to load ${imageKey} on attempt ${attempt}:`, error);
        
        // Wait before retry (exponential backoff)
        if (attempt < maxAttempts) {
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000); // Cap at 5 seconds
          console.log(`Retrying ${imageKey} in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw new Error(`Failed to load ${imageKey} after ${maxAttempts} attempts: ${lastError}`);
  }

  convertImageToBase64(imagePath: string): Promise<string> {
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
        } catch (error) {
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
        } else {
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


  async ionViewDidEnter(){
    console.log('Print modal entered, waiting for images...');
    
    // Wait for images to be loaded before printing
    let waitCount = 0;
    const maxWait = 30; // Maximum 15 seconds (30 * 500ms)
    
    while (!this.imagesLoaded && waitCount < maxWait) {
      await new Promise(resolve => setTimeout(resolve, 500));
      waitCount++;
      console.log(`Waiting for images... (${waitCount}/${maxWait})`);
    }
    
    if (!this.imagesLoaded) {
      console.warn('Images not loaded after timeout, proceeding with available images/fallbacks');
      this.imagesLoaded = true; // Force proceed with fallbacks
    }
    
    console.log('Starting print process...');
    await this.Print('printarea1');
  }


 async Print(elem){  
    console.log('Starting print process with images ready');
    
    try {
      // Get the content and replace asset paths with base64 images for print
      let printContent = document.getElementById(elem)?.innerHTML;
      
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
          margin: 10mm; 
        }
        body { 
          font-family: Arial, 'Times New Roman', sans-serif; 
          font-size: 14px; 
          line-height: 1.2; 
          margin: 0; 
          padding: 5px;
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
          padding: 2px 4px;
          line-height: 1.1;
        }
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
          
        } catch (printError) {
          console.error('Error during printing:', printError);
          // Don't close window on print error so user can try manually
        }
      }, 1500); // Wait 1.5 seconds for images to load
      
    } catch (error) {
      console.error('Print process failed:', error);
      await this.showToast('خطأ في الطباعة - Print error: ' + error.message, 'danger');
    }
    
    // Always dismiss the modal
    this.modalController.dismiss();
  }

  private replaceImagesInContent(content: string): string {
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
        name: 'vehicle-direct'
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
        name: 'vehicle-no-quotes'
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
        name: 'vehicle-property-binding'
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
        name: 'vehicle-any-occurrence'
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
    } else {
      console.warn('⚠ Logo base64 NOT found in final content');
    }
    
    if (this.vehicleBase64 && modifiedContent.includes(this.vehicleBase64)) {
      console.log('✓ Vehicle base64 found in final content');
    } else {
      console.warn('⚠ Vehicle base64 NOT found in final content');
    }
    
    return modifiedContent;
  }

  private async showToast(message: string, color: string = 'primary') {
    const toast = await this.toast.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'top'
    });
    toast.present();
  }

// Format balance display with number separators
formatBalance(balance: number): string {
  if (!balance && balance !== 0) return '0.00';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(balance));
}

// Format number with thousand separators for display
formatNumberWithSeparators(value: number): string {
  if (!value && value !== 0) return '0.00';
  if (isNaN(value)) return '0.00';
  
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

// Format currency with separators and symbol
formatCurrencyWithSeparators(value: number, showSymbol: boolean = true): string {
  if (!value && value !== 0) return showSymbol ? '0.00 ' + this.getCurrencySymbol() : '0.00';
  if (isNaN(value)) return showSymbol ? '0.00 ' + this.getCurrencySymbol() : '0.00';
  
  const formattedNumber = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
  
  return showSymbol ? formattedNumber + ' ' + this.getCurrencySymbol() : formattedNumber;
}

// Get current currency symbol for headers
getCurrencySymbol(): string {
  return this.currencyService.getCurrentCurrencySymbol();
}

}

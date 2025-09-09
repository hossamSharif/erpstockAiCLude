import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-stock-print',
  templateUrl: './item-stock-print.page.html',
  styleUrls: ['./item-stock-print.page.scss'],
})
export class ItemStockPrintPage implements OnInit, OnDestroy {
  @Input() printData: any;
  @Input() exportMode: string = 'all'; // 'all', 'filtered', 'search'
  @Input() userName: string;
  
  logoBase64: string = '';
  vehicleBase64: string = '';
  
  // Currency management
  currentCurrency: string = 'SDG';
  private currencySubscription: Subscription;

  constructor(
    private modalController: ModalController,
    private toast: ToastController,
    private currencyService: CurrencyService,
    private cdr: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    console.log('Print data:', this.printData);
    await this.loadImages();
    await this.initializeCurrency();
  }
  
  ngOnDestroy() {
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }
  
  async initializeCurrency() {
    await this.currencyService.initializeCurrency();
    this.currentCurrency = this.currencyService.getCurrentCurrencyValue();
    
    this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
      this.currentCurrency = currency;
      this.cdr.detectChanges();
    });
  }
  
  formatStockValue(item: any): string {
    const stockValue = (item.quantity || 0) * (item.unit_price || item.pay_price || 0);
    const convertedValue = this.currencyService.convertFromSDG(stockValue, this.currentCurrency);
    return this.currencyService.formatCurrency(convertedValue, this.currentCurrency);
  }

  async loadImages() {
    try {
      this.logoBase64 = await this.convertImageToBase64('assets/imgs/logo.png');
    } catch (error) {
      console.log('Failed to load logo image:', error);
    }
    
    try {
      this.vehicleBase64 = await this.convertImageToBase64('assets/imgs/tuk.jpg');
    } catch (error) {
      console.log('Failed to load vehicle image:', error);
    }
  }

  convertImageToBase64(imagePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/png');
          resolve(dataURL);
        } catch (error) {
          console.error('Error converting image to base64:', error);
          reject(error);
        }
      };
      img.onerror = (error) => {
        console.error('Failed to load image:', imagePath, error);
        reject('Failed to load image: ' + imagePath);
      };
      img.src = imagePath;
    });
  }

  async ionViewDidEnter() {
    await this.Print('printarea1');
  }

  async Print(elem: string) {
    let printContent = document.getElementById(elem).innerHTML;
    
    if (this.logoBase64) {
      printContent = printContent.replace(/src="assets\/imgs\/logo\.png"/g, `src="${this.logoBase64}"`);
      printContent = printContent.replace(/\[src\]="logoBase64 \|\| 'assets\/imgs\/logo\.png'"/g, `src="${this.logoBase64}"`);
    }
    
    if (this.vehicleBase64) {
      printContent = printContent.replace(/src="assets\/imgs\/tuk\.jpg"/g, `src="${this.vehicleBase64}"`);
      printContent = printContent.replace(/\[src\]="vehicleBase64 \|\| 'assets\/imgs\/tuk\.jpg'"/g, `src="${this.vehicleBase64}"`);
    }
    
    var mywindow = window.open('', 'PRINT', 'height=600,width=800'); 
    mywindow.document.write('<html><head>'); 
    mywindow.document.write('<style type="text/css">');
    mywindow.document.write(`
      @page { 
        size: A4 landscape; 
        margin: 0.5in; 
      }
      * { 
        box-sizing: border-box; 
      }
      body { 
        font-family: Arial, sans-serif; 
        font-size: 10px; 
        line-height: 1.2; 
        margin: 0; 
        padding: 0; 
        direction: rtl;
      }
      .flr { display: block; float: right; } 
      .show { } 
      .hide { width:0px; height:0px; } 
      .w45 { width:45%; } 
      .w35 { width:35%; } 
      .w50 { width:50%; } 
      .w100 { width:100%; }
      table { 
        width: 100%; 
        border-collapse: collapse; 
        font-size: 8px;
        table-layout: fixed;
        margin: 0;
      }
      th, td { 
        border: 1px solid #333; 
        text-align: center; 
        padding: 3px; 
        word-wrap: break-word;
        vertical-align: middle;
      }
      th {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-weight: bold;
        font-size: 9px;
      }
      .hd { 
        background-color: #b9b8b8; 
      }
      .ion-margin { 
        margin: 5px; 
      } 
      .ion-margin-top { 
        margin-top: 5px; 
      } 
      .rtl { 
        direction: rtl; 
      } 
      .ion-text-center { 
        text-align: center; 
      } 
      .ion-text-end { 
        text-align: left; 
      } 
      .ion-text-start { 
        text-align: right; 
      }
      /* Column specific widths */
      th:nth-child(1), td:nth-child(1) { width: 5%; } /* التسلسل */
      th:nth-child(2), td:nth-child(2) { width: 8%; } /* كود الصنف */
      th:nth-child(3), td:nth-child(3) { width: 25%; } /* اسم الصنف */
      th:nth-child(4), td:nth-child(4) { width: 8%; } /* الوحدة */
      th:nth-child(5), td:nth-child(5) { width: 12%; } /* المجموعة */
      th:nth-child(6), td:nth-child(6) { width: 10%; } /* الكمية الحالية */
      th:nth-child(7), td:nth-child(7) { width: 10%; } /* سعر الشراء */
      th:nth-child(8), td:nth-child(8) { width: 10%; } /* سعر البيع */
      th:nth-child(9), td:nth-child(9) { width: 12%; } /* قيمة المخزون */
      
      /* Header styling */
      h1, h2 { 
        margin: 5px 0; 
        font-size: 14px;
      }
      img { 
        max-width: 60px; 
        max-height: 40px; 
        object-fit: contain; 
      }
      /* Summary sections */
      .summary-section {
        font-size: 8px;
        margin: 10px 0;
      }
      .grid-container {
        display: flex;
        justify-content: space-between;
        font-size: 8px;
      }
      .grid-item {
        flex: 1;
        text-align: center;
        padding: 5px;
      }
    `);
    mywindow.document.write('</style></head><body>'); 
    mywindow.document.write(printContent);
    mywindow.document.write('</body></html>');
    mywindow.document.close();
    mywindow.focus();
    mywindow.window.print();
    mywindow.window.close();
    this.modalController.dismiss();
  }

  generateTitle(): string {
    switch(this.exportMode) {
      case 'filtered': 
        return 'تقرير المخزون - البيانات المفلترة';
      case 'search': 
        return 'تقرير المخزون - نتائج البحث';
      default: 
        return 'تقرير المخزون - جميع الأصناف';
    }
  }

  formatBalance(balance: number): string {
    if (!balance && balance !== 0) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(balance));
  }

  getTotalQuantity(): string {
    if (!this.printData || this.printData.length === 0) return '0.00';
    const total = this.printData.reduce((sum, item) => sum + (item.currentQuantity || 0), 0);
    return this.formatBalance(total);
  }

  getTotalValue(): string {
    if (!this.printData || this.printData.length === 0) return '0.00';
    const total = this.printData.reduce((sum, item) => {
      return sum + ((item.currentQuantity || 0) * (item.item_parcode || 0));
    }, 0);
    return this.formatBalance(total);
  }
  
  getTotalValueRaw(): number {
    if (!this.printData || this.printData.length === 0) return 0;
    return this.printData.reduce((sum, item) => {
      return sum + ((item.currentQuantity || 0) * (item.item_parcode || 0));
    }, 0);
  }

  getItemsInStock(): number {
    if (!this.printData || this.printData.length === 0) return 0;
    return this.printData.filter(item => (item.currentQuantity || 0) > 0).length;
  }

  getItemsOutOfStock(): number {
    if (!this.printData || this.printData.length === 0) return 0;
    return this.printData.filter(item => (item.currentQuantity || 0) === 0).length;
  }

  getAverageStockValue(): number {
    if (!this.printData || this.printData.length === 0) return 0;
    const totalValue = this.printData.reduce((sum, item) => {
      return sum + ((item.currentQuantity || 0) * (item.item_parcode || 0));
    }, 0);
    return totalValue / this.printData.length;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString('en-US');
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString('en-US');
  }
  
  // Get current currency symbol for headers
  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }
}

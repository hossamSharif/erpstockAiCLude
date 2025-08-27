import { Component, OnInit,Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-print-modal',
  templateUrl: './print-modal.page.html',
  styleUrls: ['./print-modal.page.scss'],
})
export class PrintModalPage implements OnInit {
  @Input() printArr: any;
  @Input() page: any;
   //mode = 'pos' 
   mode = 'enhanced' 
   logoBase64: string = '';
   vehicleBase64: string = '';
   itemImagesBase64: { [key: string]: string } = {};
  
  constructor(private modalController: ModalController,private toast :ToastController) {
    this.mode = 'enhanced' 
   }

  async ngOnInit() {
    console.log(this.printArr[0]);
    this.sortItemListAlphabetically()
    await this.loadImages();
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
    
    // Load item images from itemList
  //  await this.loadItemImages();
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

  convertImageToBase64(imagePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous'; // Handle CORS issues
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


  async ionViewDidEnter(){
  //console.log('printing process')
    await this.Print('printarea1')
  }


 async Print(elem){  
    //console.log('here we are')
    
    // Get the content and replace asset paths with base64 images for print
    let printContent = document.getElementById(elem).innerHTML;
    
    // Replace asset image paths with base64 encoded images
    if (this.logoBase64) {
      printContent = printContent.replace(/src="assets\/imgs\/logo\.png"/g, `src="${this.logoBase64}"`);
      printContent = printContent.replace(/\[src\]="logoBase64 \|\| 'assets\/imgs\/logo\.png'"/g, `src="${this.logoBase64}"`);
    }
    
    if (this.vehicleBase64) {
      printContent = printContent.replace(/src="assets\/imgs\/tuk\.jpg"/g, `src="${this.vehicleBase64}"`);
      printContent = printContent.replace(/\[src\]="vehicleBase64 \|\| 'assets\/imgs\/tuk\.jpg'"/g, `src="${this.vehicleBase64}"`);
    }
    
    // // Replace item images with base64 encoded versions
    // for (const [originalUrl, base64] of Object.entries(this.itemImagesBase64)) {
    //   // Escape special regex characters in the URL
    //   const escapedUrl = originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    //   // Replace all occurrences of this image URL with base64
    //   const regex = new RegExp(`src="${escapedUrl}"`, 'g');
    //   printContent = printContent.replace(regex, `src="${base64}"`);
      
    //   // Also handle Angular property binding format [src]
    //   const angularRegex = new RegExp(`\\[src\\]="[^"]*${escapedUrl}[^"]*"`, 'g');
    //   printContent = printContent.replace(angularRegex, `src="${base64}"`);
    // }
    
    // Replace any remaining asset paths with base64 if company logo exists
    if (this.printArr && this.printArr[0] && this.printArr[0].company && this.printArr[0].company.logoUrl) {
      // Convert company logo to base64 if it's an asset path
      if (this.printArr[0].company.logoUrl.includes('assets/')) {
        try {
          const base64 = await this.convertImageToBase64(this.printArr[0].company.logoUrl);
          printContent = printContent.replace(new RegExp(this.printArr[0].company.logoUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), base64);
        } catch (error) {
          console.log('Failed to convert company logo to base64:', error);
        }
      }
    }
    
    var mywindow = window.open('', 'PRINT', 'height=400,width=600'); 
    mywindow.document.write('<html><head>'); 
    mywindow.document.write('<style type="text/css">')
    mywindow.document.write('.flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w35 {width:35%} .w50 {width:50%} .w100 {width:100%} .bnone {border: 1px solid #000000;} .td,.th  {border: 1px solid #000000;text-align: center;padding: 8px;} .hd {background-color: #b9b8b8;} .table{text-align: center;width: 100%; margin: 12px;} .ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }')
    mywindow.document.write('</style></head><body>'); 
    mywindow.document.write(printContent);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/ 
   // mywindow.print();
    mywindow.window.print();
    mywindow.window.close();
    this.modalController.dismiss()    
}

// Format balance display with number separators
formatBalance(balance: number): string {
  if (!balance && balance !== 0) return '0.00';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(balance));
}

}

import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable } from 'rxjs';
import {  LoadingController, ModalController,Platform , PopoverController, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common'; 
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router'
import { PrintModalPage } from '../print-modal/print-modal.page';
import {  Filesystem , Directory ,Encoding  } from '@capacitor/filesystem';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ActionPopoverComponent } from '../component/action-popover/action-popover.component';
import { InvoicePriceConfigDialogComponent } from '../component/invoice-price-config-dialog/invoice-price-config-dialog.component';
import { CategoriesPage } from '../categories/categories.page';
import { SortingService, SortConfig } from '../services/sorting.service';
import { ExportService, ExportConfig, ExportColumn } from '../services/export.service';
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-sales-record',
  templateUrl: './sales-record.page.html',
  styleUrls: ['./sales-record.page.scss'],
})

export class SalesRecordPage implements OnInit {
  payArray:Array<any> =[]
  sortedPayArray:Array<any> =[] // Sorted invoices for display
  currentSort: SortConfig | null = null
  printArr:Array<any> =[]
  initialInvoices:Array<any> =[]
  selectedAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any ,cat_id:any,cat_name:any,currentCustumerStatus:any};
  loadinDet:boolean = false
  sub_accountLocalSales:Array<any> =[]
  sub_accountSales:Array<any> =[]
  sub_account:Array<any> =[]
  store_info : {id:any , location :any ,store_name:any , store_ref:any }
  user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
  printMode :boolean =false
  itemList :Array<any> =[]
  paInvo :any
  dateFrom :any;
  dateTo :any;
  radioVal : any = 0
  searchLang : any = 0
  startingDate :any
  endDate :any
  loading:boolean = false
  loadingDetails:boolean = false
  showEmpty :boolean = false
  showError :boolean = false
  offline: boolean = false;
  salesLocal:Array<any> =[]
  sales:Array<any> =[]
  salesOffline:Array<any> =[]
  color :any ='dark' 
  currentCustumerStatus :any = 0
  sums : {pay:any ,change:any,discount:any,tot:any,totAfterDiscout:any}
  year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
  device:any =''
   slideOpts = {
    slidesPerView: 4,
    spaceBetween: 0
    

    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // }  
  }
 pdfObj = null
 tbArr = {
    content: [
        {
        columns: [
            {
            width: '*',
               text:''
          },
            {
            width:'auto' ,
            text:'BANSI GIRISH JAYANTILAL IMPORT & EXPORT ENTERPRISES',
            alignment:'center'
           },
           {
            width: '*',
               text:''
          },
        ],
        margin:[0,0,10,10]
        
       },   	
          {
        columns: [
            {
            width: '*',
               text:''
          },
            {
            width:'auto' ,
            text:' Exclusive agent for brands (POWERMAX , SIMBA , GIRISH )',
            alignment:'center'
           },
           {
            width: '*',
               text:''
          }
        ],
          margin:[0,0,10,10]
        
      }, 
         {
        columns: [
            {
            width: '*',
               text:''
          },
            {
            width:'auto' ,
            text:' فاتورة مبيعات',
            alignment:'center'
           },
           {
            width: '*',
               text:''
          }
        ],
          margin:[0,10,0,10]
        
      },
      {
        columns: [
          {
            width: 90,
            text:'التاريخ :'
          },
          {
            width: '*',
               text:''
          },
          {
            width: 90,
            text:''
           },
           {
            width: '*',
            text: 'العميل:'
          },
        ],
          margin:[0,20,0,10]
        
      
      }, 
      {
         columns: [
          {
            width: 90,
            text:'رقم الهاتف :'
          },
          {
            width: '*',
               text:''
          },
          {
            width: 90,
            text:''
           },
           {
            width: '*',
            text: 'المكان :'
          },
        ],
          margin:[0,10,0,10]
      },
      {
        table: {
          body: [
            ['المجموع', 'سعر الوحدة', 'الكمية' , 'الصنف', 'التسلسل']
          ]
        },
        margin:[0,10,0,10]
      },
      {
        columns: [
            {
            width: '*',
               text:''
          },
            {
            width:'auto' ,
            text:'إجمالي المبلغ',
            alignment:'center'
           },
           {
            width: '*',
               text:''
          },
          {
           width: '*',
              text:''
         }
        ],
          margin:[0,10,0,10]
        
      },
      {
        columns: [
            {
            width: '*',
               text:''
          },
            {
            width:'auto' ,
            text:'المبلغ المدفوع  ',
            alignment:'center'
           },
           {
            width: '*',
               text:''
          },
          {
           width: '*',
              text:''
         }
        ],
          margin:[0,10,0,10]
        
      },
      {
        columns: [
            {
            width: '*',
               text:''
          },
            {
            width:'auto' ,
            text:'المتبقي',
            alignment:'center'
           },
           {
            width: '*',
               text:''
          },
          {
           width: '*',
              text:''
         }
        ],
          margin:[0,10,0,10]
        
      },
      {
        columns: [
            {
            width: '*',
               text:''
          },
            {
            width:'auto' ,
            text:'الرصيد الحالي ',
            alignment:'center'
           },
           {
            width: '*',
               text:''
          },
          {
           width: '*',
              text:''
         }
        ],
          margin:[0,10,0,10]
        
      }
      ],
      defaultStyle: {
      font: 'MyFontName'
      }
    
  }
  constructor(private popoverController: PopoverController , private platform :Platform,private rout : Router,private storage: Storage,private modalController: ModalController,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController, private sortingService: SortingService, private exportService: ExportService) { 
  this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",currentCustumerStatus:0};
   
   this.checkPlatform()
    this.getAppInfo()
    this.prepareOffline()
    this.sums = {pay:0 ,change:0,discount:0,tot:0,totAfterDiscout:0} 
    let d = new Date
    this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd')
    this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd')
  }

  checkPlatform(){
    if (this.platform.is('desktop')) { 
      this.device = 'desktop'
      //console.log('I am an desktop device!');
     }else if(this.platform.is('mobile')){
      this.device = 'mobile'
      //console.log('I am an mobile device!'); 
     }
  }

  ngOnInit() { 
    this.payArray =[]
    this.sortedPayArray =[]
    this.currentSort = null
    // Check category visibility setting
  //  this.isCategoryVisibilityEnabled = CategoriesPage.isCategoryVisibilityEnabled();
    //console.log('ngOnInit')
    this.getAppInfo() 
    this.prepareOffline()
  }


    async presentActionPopover(ev: any, pay: any, sub_name: any) {
    const popover = await this.popoverController.create({
      component: ActionPopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'action-popover-rtl'
    });
  
    popover.onDidDismiss().then((result) => {
      if (result.data) {
        switch (result.data.action) {
          case 'print':
            this.printInvo('', pay);
            break;
          case 'edit':
            this.getPayInvoDetail(pay, sub_name, '');
            break;
          case 'copySales':
            this.copyAsInvoice(pay, 'sales');
            break;
          case 'copyPurchase':
            this.copyAsInvoice(pay, 'purchase');
            break;
        }
      }
    });
  
    return await popover.present();
  }
  
  copyAsInvoice(pay: any, type: 'sales' | 'purchase') {
    this.presentLoadingWithOptions('جاري نسخ الفاتورة...');
    
    // Check if we're dealing with initial invoices (radioVal == 3)
    if (this.radioVal == 3) {
      // Handle initial invoices using getPayInvoDetailinit API
      this.api.getPayInvoDetailinit(this.store_info.id, pay.pay_ref).subscribe(data => {
        let res = data;
        console.log('Initial invoice data:', res);
        // For initial invoices being copied as sales, skip the price config dialog
        // For initial invoices being copied as purchase, show the price config dialog
        if (type === 'sales') {
          // Skip price config dialog for initial invoice to sales copy
          this.loadingController.dismiss();
          this.navigateToInvoicePage(res['data'], type);
        } else {
          // Show price config dialog for initial invoice to purchase copy
          this.showPriceConfigDialog(res['data'], type);
        }
      }, (err) => {
        this.loadingController.dismiss();
        this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
      });
    } else {
      // Handle regular sales invoices (existing logic)
      // Determine which method to call based on offline status and pay_id
      if (this.offline == false && pay.pay_id != undefined) {
        this.api.getPayInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
          let res = data;
          console.log('Regular invoice data:', res);
          this.showPriceConfigDialog(res['data'], type);
        }, (err) => {
          this.loadingController.dismiss();
          this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
        });
      } else if (this.offline == false && pay.pay_id == undefined) {
        let flt: Array<any> = [];
        flt = this.salesLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
        if (flt.length > 0) {
          this.showPriceConfigDialog(flt[0].itemList, type);
        }
      } else if (this.offline == true && pay.pay_id != undefined) {
        let flt: Array<any> = [];
        flt = this.salesLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
        if (flt.length > 0) {
          this.showPriceConfigDialog(flt[0].itemList, type);
        }
      } else if (this.offline == true && pay.pay_id == undefined) {
        let flt: Array<any> = [];
        flt = this.salesLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
        if (flt.length > 0) {
          this.showPriceConfigDialog(flt[0].itemList, type);
        }
      }
    }
  }

  async showPriceConfigDialog(itemList: any[], type: 'sales' | 'purchase') {
    // Dismiss loading controller first
    this.loadingController.dismiss();
    
    // For sales type, skip dialog and navigate directly
    if (type === 'sales') {
      this.navigateToInvoicePage(itemList, type);
      return;
    }
    
    // For purchase type, show the dialog
    const modal = await this.modalController.create({
      component: InvoicePriceConfigDialogComponent,
      componentProps: {
        itemList: itemList,
        invoiceType: type,
        context: 'sales-record'
      },
      cssClass: 'invoice-price-config-modal'
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        // User confirmed configuration, use configured items
        this.navigateToInvoicePage(result.data, type);
      }
      // If result.data is null/undefined, user cancelled - don't navigate anywhere
    });

    return await modal.present();
  }
  
  private navigateToInvoicePage(itemList: any[], type: 'sales' | 'purchase') {
    this.loadingController.dismiss();
     const salesitems = itemList.map(item => ({
      id: item.item_id,
      item_id: item.item_id,
        item_name: item.item_name,
        item_desc: item.item_desc,
        part_no: item.part_no,
        brand: item.brand,
        model: item.model,
        item_unit: item.item_unit,
        perch_price: item.perch_price || 0,
        pay_price: item.pay_price || 0,
        qty: item.quantity ,
        tot: (item.pay_price * item.quantity).toFixed(2)  || 0,
        availQty: item.quantity || 0,
        aliasEn: item.aliasEn
        }));
  
        const purchitems = itemList.map(item => ({
          id: item.item_id,
         item_id: item.item_id,
        item_name: item.item_name,
        item_desc: item.item_desc,
        part_no: item.part_no,
        brand: item.brand,
        model: item.model,
        item_unit: item.item_unit,
        perch_price: item.pay_price || 0,
        pay_price: item.pay_price || 0,
        qty: item.quantity ,
        tot: (item.pay_price * item.quantity).toFixed(2)  || 0,
        availQty: item.quantity || 0,
        aliasEn: item.aliasEn
        }));
  
    
  
    if (type === 'sales') { 
      let navigationExtras: NavigationExtras = {  
      queryParams: {
          status: 'newInvoFromItemsPage',
          selectedItemsList: JSON.stringify(salesitems) 
      }
    };
        this.rout.navigate(['folder/sales'], navigationExtras); 
    } else {  
       let navigationExtras: NavigationExtras = {  
      queryParams: {
          status: 'newInvoFromItemsPage',
          selectedItemsList: JSON.stringify(purchitems) 
      }
    };
        this.rout.navigate(['folder/purchase'], navigationExtras); 
    }
  }
  

  changeMode(){
    if(this.offline == true){
      this.offline = false
      this.color = 'primary' 
    }else if(this.offline == false){
      this.offline = true
      this.color = 'dark'
    }
    this.storage.set('offline',this.offline).then((response) => { 
      //console.log('mooooode',this.offline)  
  });
  }
  
  clear(){
    this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",currentCustumerStatus:0};
    this.payArray = []
    this.sortedPayArray = []
    this.salesLocal = []
    this.showEmpty = false
    this.loading = false
  }

  ionViewDidEnter(){
    this.payArray =[]
    this.sortedPayArray =[]
    this.salesLocal =[]
    this.sales =[]
    this.salesOffline =[]
    
     this.storage.get('STORE_INFO').then((response) => {
     if (response) {
       this.store_info = response 
        this.search() 
     }
     }); 
   }

  getOffliemode(){
    this.storage.get('offline').then((response) => {
        this.offline = response
        //console.log('mooooode',this.offline)
        if (this.offline == true) {
          this.color= 'dark'
        }else{
          this.color = 'primary'
        }
 
    });
  }

  getAppInfo(){ 
    this.getOffliemode()
    this.storage.get('USER_INFO').then((response) => {
     if (response) {
       this.user_info = response
       //console.log(this.user_info) 
     }
   });

   this.storage.get('year').then((response) => {
    if (response) {
      this.year = response 
     } 
    });

   this.storage.get('STORE_INFO').then((response) => {
     if (response) {
       this.store_info = response
        //console.log(response)
        //console.log(this.store_info) 
       this.getSalesAccount()
       //this.search() 
     }
   });
   
   this.storage.get('sales').then((response) => {
    if (response) {
      this.sales = response 
       //console.log(this.sales)  
    }
  });
  this.storage.get('sales').then((response) => {
    if (response) {
      this.sales = response 
       //console.log(this.sales)  
    }
  });
  this.storage.get('searchLang').then((response) => {
    if (response) {
      this.searchLang = response
      //console.log('searchLang' ,this.searchLang) 
    }
  }); 
  }


 prepareOffline(){   
 this.storage.get('sub_accountLocalSales').then((response) => {
   if (response) {
     this.sub_accountLocalSales = response 
    
       console.log('this.sub_accountLocalSales',this.sub_accountLocalSales)  
   }
 });
 //Yaw
 this.storage.get('sub_accountSales').then((response) => {
  if (response) {
    this.sub_accountSales = response  
     //console.log(this.sub_accountLocalSales)  
  }
 });
 
 }

 
 getSalesAccount(){
  if (this.offline == false) {
  this.api.getSalesAccounts(this.store_info.id , this.year.id).subscribe(data =>{
     let res = data
     this.sub_account = res ['data']
     console.log('this.sub_account',this.sub_account)
     this.recalSubBalance()
      this.addSubaccountLocal()
   }, (err) => {
   //console.log(err);
  }) 
  }else{
  this.MixSubaccountSalesOffline()
 } 
 } 

 MixSubaccountSalesOffline(){
  this.sub_account=[] 
    if (this.sub_accountLocalSales) {
      for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
        const element = this.sub_accountLocalSales[i];
        this.sub_account.push(element)
      }
    }

    if (this.sub_accountSales) {
      for (let i = 0; i < this.sub_accountSales.length; i++) {
        const element = this.sub_accountSales[i];
        this.sub_account.push(element)
      }
    } 
  }

 addSubaccountLocal(){
  if (this.sub_account) {
    if (this.sub_accountLocalSales) {
      for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
        const element = this.sub_accountLocalSales[i];
        this.sub_account.push(element)
      }
    }
  } else{
    if (this.sub_accountLocalSales) {
      this.sub_account = this.sub_accountLocalSales 
    }
  } 
  }

  
  recalSubBalance(){
    // adding new change to subbalances
    this.sub_account.forEach(element => {
      element.sub_balance = 0 
      let debitTot = +element.changeeTot + +element.fromDebitTot
      let creditTot = +element.purchChangeeTot + +element.toCreditTot
    
      if (debitTot == creditTot) {
        element.sub_balance = 0
        element.currentCustumerStatus = ''
       }else if(debitTot > creditTot ){
         element.sub_balance = (+debitTot - +creditTot).toFixed(2)
         element.currentCustumerStatus = 'debit'
         if(this.selectedAccount.id == element.id){
          this.selectedAccount.sub_balance = element.sub_balance 
          }
       }else if(creditTot > debitTot ){
        element.sub_balance = (+creditTot - +debitTot).toFixed(2)
        element.currentCustumerStatus = 'credit'
        if( this.selectedAccount.id == element.id){
          this.selectedAccount.sub_balance = element.sub_balance 
          }
       }
    });
    console.log('recalSubBalance',this.sub_account)
  }


  createPdf(pay){
  //   // ['المجموع', 'Column 2', 'Column 3' , 'Column 3', 'Column 3'],
  //   //         ['One value goes here', 'Another one here', 'OK?', 'Another one here', 'OK?', 'Another one here', 'OK?'] 
    
  //   this.preparePdf(pay)
     
  //   this.pdfObj = pdfMake.createPdf(this.tbArr ,null,
  //     {
  //     MyFontName: {
  //       normal: 'arial_Unicode_ms.ttf',
  //       bold: 'arial_Unicode_ms.ttf',
  //       italics: 'arial_Unicode_ms.ttf',
  //       bolditalics: 'arial_Unicode_ms.ttf'
  //      } // same as before
  //  },
  //  pdfFonts.pdfMake.vfs).download(pay.cust_name+".pdf")
  }

  downLoadPdf(){

  }

  preparePdf(pay){
   
  }

   printInvo(printarea , dataFrom){  
    if ( dataFrom.pay_id != undefined) {
      this.paInvo = dataFrom  
      let flt = this.sub_account.filter(x=>+x.id == +dataFrom.cust_id) 
      if(this.radioVal == 3){
        this.api.getPayInvoDetailinit(this.store_info.id , dataFrom.pay_ref).subscribe(data =>{
          //console.log(data)
          let res = data 
          this.itemList = res['data']
          console.log('case 1', this.paInvo) 
          console.log('case2', res) 
          this.printArr = []
          this.printArr.push({
          'payInvo': this.paInvo,
          'itemList':this.itemList,
          'selectedAccount' : this.paInvo.sub_name,
          "balanceStatus": "" ,//flt[0].currentCustumerStatus,
          "sub_balanse": '',// flt[0].sub_balance,
          'sub_nameNew' : "",
          'user_name' : this.paInvo.user_name
        }) 
         //console.log(this.printArr)
         this.presentModal(this.printArr , 'sales_record')
          }, (err) => {
           //console.log(err);
           this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
          },()=>{ 
          }) 
      }else{
        this.api.getPayInvoDetail(this.store_info.id , dataFrom.pay_ref, this.year.id).subscribe(data =>{
          //console.log(data)
          let res = data 
          this.itemList = res['data']
           console.log('case1',res) 
          this.printArr = []
          this.printArr.push({
          'payInvo': this.paInvo,
          'itemList': this.itemList,
          'selectedAccount' : this.paInvo.sub_name,
          "balanceStatus": '',//flt[0].currentCustumerStatus ,
          "sub_balanse": '',//flt[0].sub_balance,
          'sub_nameNew' : "",
          'user_name' : this.paInvo.user_name
        }) 
         //console.log(this.printArr)
         this.presentModal(this.printArr , 'sales_record')
          }, (err) => {
           //console.log(err);
           this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
          },()=>{ 
          }) 
      }
      
    }  

   }
  
    async presentModal(printArr , page) { 
      const modal = await this.modalController.create({
        component: PrintModalPage ,
        componentProps: {
          "printArr": this.printArr,
          "page": page
        }
      });
      
      modal.onDidDismiss().then((dataReturned) => {
        //console.log(dataReturned ) 
        if (dataReturned !== null) {
          //console.log(dataReturned ) 
        }
      });
    
      return await modal.present(); 
    }

   preparedPrin(printarea ,paInvo, itemList){
     if (printarea && paInvo && itemList) {
        this.printMode = true
        this.Print(printarea ,this.paInvo , this.itemList)
     }
    
   }
 
   Print(elem ,paInvo, itemList  ){ 
    if (elem && paInvo && itemList){ 
       var mywindow = window.open('', 'PRINT', 'height=400,width=600'); 
      mywindow.document.write('<html><head>'); 
      mywindow.document.write('<style type="text/css">')
      mywindow.document.write('.flr2{display:inline-flex;float:right;} .flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} .td2, .th2 {border: 0.5px solid #dddddd;text-align: center;padding: 8px;} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;} .ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }')
      mywindow.document.write('</style></head><body>');
      mywindow.document.write(document.getElementById(elem).innerHTML);
      mywindow.document.write('</body></html>');
      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/ 
      mywindow.print();
      mywindow.close();
      this.printMode = false 
      return true;
    }
     
  }

  getSalesfromLocal(){
    this.salesLocal =[]
    this.storage.get('salesLocal').then((response) => {
      if (response) {
        this.salesLocal = response
        //console.log(this.salesLocal)  
      } 
    });
  }

  getSalesOffline(){
    this.salesOffline =[]
    this.storage.get('sales').then((response) => {
      if (response) {
        this.salesOffline = response
        //console.log(this.salesOffline)  
      } 
    });
  }

  pickAccount(ev){
    let fl= this.sub_account.filter(x=>x.sub_name == ev.target.value)
    //console.log(fl);
    if (fl.length > 0) {
    this.selectedAccount = {
      id:fl[0]['id'],
      ac_id:fl[0]['ac_id'],
      sub_name:fl[0]['sub_name'],
      sub_type:fl[0]['sub_type'],
      sub_code:fl[0]['sub_code'], 
      store_id:fl[0]['store_id'],
      sub_balance:fl[0]['sub_balance'] ,
      cat_id:fl[0]['cat_id'],
      cat_name:fl[0]['cat_name'],
      currentCustumerStatus:fl[0]['currentCustumerStatus']
    }
    //console.log( this.selectedAccount);
    this.payArray = []
  this.salesLocal = []
  this.showEmpty = false
  this.loading = false
  //  this.setFocusOnInput()
  }else{
   // this.presentToast('خطأ في اسم الحساب ', 'danger') 
    this.selectedAccount.sub_name =""
    
  }

 
}
  
  search(){
    this.showEmpty=false
    if (this.radioVal == 0) { 
     if (this.offline == true) {
      this.getTopSalesOffline()
    } else {
      this.getTopSales()
    }
    } else if (this.radioVal == 1) {
      
       if (this.offline == true) {
        this.getSalesByDateOffline()
      } else {
        this.getSalesByDate()
      }
    } else if (this.radioVal == 2) {
      if (this.offline == true) {
        this.getSales2DateOffline()
      } else {
        this.getSales2Date() 
      }
    } else if (this.radioVal == 3) {
      this.getInitialInvoicesServer()
    }
   }

   getInitialInvoices(){
    this.payArray=[]
    this.loading = true
    this.storage.get('initialInvoices').then((response2) => {
      if (response2) {
        let flt : Array<any> =[]
        flt= response2
        this.initialInvoices=flt 
        if (flt.length > 0) {
          for (let i = 0; i < flt.length; i++) {
          const element = flt[i];
          this.payArray.push(element.payInvo)
        } 
        }
      }
      this.getTotal() 
      // Apply category filtering after loading initial invoices from localStorage
      this.applySorting();
      if(this.payArray.length==0){
        this.showEmpty = true
      }else{
        this.showEmpty = false
      }
      this.loading=false
    });
    this.getTotal() 
   }
   
   getPayDetailsForMob(pay){
    if(!pay.item_details){
      this.loadingDetails = true
      this.api.getPayInvoDetail(this.store_info.id , pay.pay_ref,this.year.id).subscribe(data =>{
        //console.log(data,'case 1')
         let res = data 
         //console.log(data) 
         this.payArray.forEach(element => {
          if(element.pay_ref == pay.pay_ref){
            element.item_details = data['data']   
          }
         });  
      
       }, (err) => {
       //console.log(err);
       this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
     },()=>{
        this.loadingDetails = false
     })  
    }
   }
   getInitialInvoicesServer(){
    this.payArray=[]
    this.loading = true

      
    this.api.getTopSalesInit(this.store_info.id).subscribe(data =>{
       //console.log('hhhhhh',data)
       let res = data
       if(res['message'] != 'No record Found'){
         this.payArray = res['data'] 
       }
      if( this.selectedAccount.sub_name != ""){
        if(this.payArray.length>0){
          this.payArray= this.payArray.filter(x=> +x.cust_id == +this.selectedAccount.id)
          
        }
      }
      

       this.getTotal()
       // Apply category filtering after loading initial invoices from API 
       this.applySorting();

       // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
     }, (err) => {
     //console.log(err);
   },
   ()=>{
    this.loading = false
   })

   
   }
   getTotal(){
    this.sums.tot = this.payArray.reduce( (acc, obj)=> { return acc + +obj.tot_pr; }, 0);
    this.sums.change = this.payArray.reduce( (acc, obj)=> { return acc + +obj.changee; }, 0);
    this.sums.pay = this.payArray.reduce( (acc, obj)=> { return acc + +obj.pay; }, 0);
    this.sums.discount = this.payArray.reduce( (acc, obj)=> { return acc + +obj.discount; }, 0);
    this.sums.totAfterDiscout =   + this.sums.tot - this.sums.discount 
    } 

   getTopSales(){ 
    this.getSalesfromLocal()
    this.loading = true
    this.api.getTopSales(this.store_info.id, this.year.id).subscribe(data =>{
       //console.log('hhhhhh',data)
       let res = data
       if(res['message'] != 'No record Found'){
         this.payArray = res['data'] 
       }
       if(this.salesLocal.length >0){
        //console.log('locLaly',this.salesLocal)
        for (let i = 0; i < this.salesLocal.length; i++) {
          const element = this.salesLocal[i];
          this.payArray.push(element.payInvo)
        }
       }

       // Apply account filter if selected
       if( this.selectedAccount.sub_name != ""){
        if(this.payArray.length>0){
          this.payArray = this.payArray.filter(x=> +x.cust_id == +this.selectedAccount.id) 
        }
       }

        this.getTotal()
        // Apply category filtering after loading all sales data in getTopSales  
        this.applySorting();
 
        if(this.payArray.length==0){
          this.showEmpty = true
        }else{
          this.showEmpty = false
        }
        this.loading=false
        //console.log(this.payArray)

       // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
     }, (err) => {
     //console.log(err);
   },
   ()=>{
    this.loading = false
   })  
   }

   getTopSalesOffline(){
    //console.log('getTopSalesOffline')
    this.payArray=[]
    this.salesLocal =[]
    this.sales =[]
    this.salesOffline=[]
    this.storage.get('salesLocal').then((response) => {
     if (response) {
       let flt : Array<any> =[]
       flt= response
       this.salesLocal=flt
       //console.log(flt)
       if (flt.length > 0) {
         for (let i = 0; i < flt.length; i++) {
         const element = flt[i];
         this.payArray.push(element.payInvo)
       } 

       }
     }
     // 
     this.storage.get('sales').then((response2) => {
      if (response2) {
        let flt : Array<any> =[]
        flt= response2
        this.salesOffline=flt
        this.sales= this.salesOffline
        //console.log(flt)
        if (flt.length > 0) {
          for (let i = 0; i < flt.length; i++) {
          const element = flt[i];
          this.payArray.push(element.payInvo)
        } 
        }
      }
      
   
      this.getTotal()
      // Apply category filtering after loading sales data from localStorage in getTopSalesOffline
      this.applySorting();
 
      if(this.payArray.length==0){
        this.showEmpty = true
      }else{
        this.showEmpty = false
      }
      this.loading=false
    });

     //custName
     if( this.selectedAccount.sub_name != ""){
      if(this.payArray.length>0){
      this.payArray= this.payArray.filter(x=>+x.cust_id == +this.selectedAccount.id)
        
      }
    }
    this.getTotal()
    // Apply category filtering after account filter in getTopSalesOffline
    this.applySorting();
   });
  }

   getSalesByDate(){ 
    this.payArray=[]
    this.salesLocal =[]
    this.salesOffline=[]
    this.sales =[]
    //console.log(this.store_info.id,this.startingDate)
    this.getSalesfromLocal()
    this.loading = true
    this.api.getSalesByDate(this.store_info.id , this.startingDate, this.year.id).subscribe(data =>{
       //console.log(data)
       let res = data
       if(res['message'] != 'No record Found'){ 
       this.payArray = res['data'] 
     }
     if(this.salesLocal.length >0){
      this.salesLocal = this.salesLocal.filter(x=>x.payInvo.pay_id==undefined && x.payInvo.pay_date==this.startingDate)
      //console.log('locLaly',this.salesLocal)
      for (let i = 0; i < this.salesLocal.length; i++) {
        const element = this.salesLocal[i];
        this.payArray.push(element.payInvo)
      }
     } 

     // Apply account filter if selected
     if(this.selectedAccount.sub_name != ""){
      if(this.payArray.length>0){
        this.payArray= this.payArray.filter(x=> +x.cust_id == +this.selectedAccount.id)
      }
     }

     this.getTotal()
     // Apply category filtering after loading all sales data in getSalesByDate
     this.applySorting();

      if(this.payArray.length==0){
        this.showEmpty= true
      }else{
        this.showEmpty = false
      }
      this.loading=false
      //console.log(this.payArray)

     // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
     }, (err) => {
     //console.log(err);
    
   },()=>{
    this.loading = false
   }
   )  
   }

   getSalesByDateOffline(){
    this.payArray=[]
    this.salesLocal =[]
    this.sales =[]
    this.salesOffline=[]
    this.loading = true
    this.storage.get('salesLocal').then((response) => {
      if (response) {
        this.salesLocal = response
        
        let flt:Array<any> =[]
        //console.log('haloo',this.salesLocal) 
        flt = this.salesLocal.filter(x=> x.payInvo.pay_date==this.startingDate)
        if (flt.length>0) {
          for (let i = 0; i < flt.length; i++) {
            const element = flt[i];
            this.payArray.push(element.payInvo)
          } 
        }  
      }
      this.storage.get('sales').then((response2) => {
        if (response2) {
          this.salesOffline = response2
          this.sales= this.salesOffline
          //console.log(this.salesOffline) 
          let flt:Array<any> =[]
          flt = this.salesOffline.filter(x=> x.payInvo.pay_date==this.startingDate)
          if (flt.length>0) {
            for (let i = 0; i < flt.length; i++) {
              const element = flt[i];
              this.payArray.push(element.payInvo)
            } 
          } 
        }

        

        this.getTotal()
        // Apply category filtering after loading sales data from localStorage in getSalesByDateOffline
        this.applySorting();
        if(this.payArray.length==0){
          this.showEmpty = true
        }else{
          this.showEmpty = false
        }
        this.loading=false

      }); 

      if( this.selectedAccount.sub_name != ""){
        if(this.payArray.length>0){
          this.payArray=   this.payArray.filter(x=> +x.cust_id == +this.selectedAccount.id)
          
        }
      }
      this.getTotal()
      // Apply category filtering after account filter in getSalesByDateOffline
      this.applySorting();
     
    });

 
   }


   getSales2Date(){
    this.payArray=[]
    this.salesLocal =[]
    this.sales =[]
    this.salesOffline=[]
    this.getSalesfromLocal()
    this.loading = true
    //console.log(this.store_info.id,this.startingDate,this.endDate)
    this.api.getSales2Date(this.store_info.id,this.startingDate,this.endDate, this.year.id).subscribe(data =>{
       //console.log(data)
       let res = data
       if(res['message'] != 'No record Found'){
        this.payArray = res['data'] 
      } 
      
     
     if(this.salesLocal.length >0){
      this.salesLocal = this.salesLocal.filter(x=>x.payInvo.pay_date>=this.startingDate && x.payInvo.pay_date<=this.endDate)
      //console.log('locLaly',this.salesLocal)
      for (let i = 0; i < this.salesLocal.length; i++) {
        const element = this.salesLocal[i];
        this.payArray.push(element.payInvo)
      }
      //console.log(this.payArray)
     }

     // Apply account filter if selected
     if( this.selectedAccount.sub_name != ""){
      if(this.payArray.length>0){
        this.payArray= this.payArray.filter(x=> +x.cust_id == +this.selectedAccount.id)
      }
     }

     this.getTotal()
     // Apply category filtering after loading all sales data in getSales2Date
     this.applySorting();
     
     if(this.payArray.length==0){
        this.showEmpty = true
      }else{
        this.showEmpty = false
      }
      this.loading=false

     }, (err) => {
     //console.log(err);
   },()=>{
    this.loading = false
   }
   )  
   }

   getSales2DateOffline(){
    this.payArray=[]
    this.salesLocal =[]
    this.sales =[]
    this.salesOffline=[]
    this.loading = true
    this.storage.get('salesLocal').then((response) => {
      if (response) {
        this.salesLocal = response
        //console.log(this.salesLocal) 
        let flt:Array<any> =[]
        flt =this.salesLocal.filter(x=>x.payInvo.pay_date>=this.startingDate && x.payInvo.pay_date<=this.endDate)
        if (flt.length>0) {
          for (let i = 0; i < flt.length; i++) {
            const element = flt[i];
            this.payArray.push(element.payInvo)
          } 
        }  
      } 
      this.storage.get('sales').then((response2) => {
        if (response2) {
          this.salesOffline = response2
          this.sales= this.salesOffline
          //console.log(this.salesOffline) 
          let flt:Array<any> =[]
          flt =this.salesOffline.filter(x=>x.payInvo.pay_date>=this.startingDate && x.payInvo.pay_date<=this.endDate)
          if (flt.length>0) {
            for (let i = 0; i < flt.length; i++) {
              const element = flt[i];
              this.payArray.push(element.payInvo)
            } 
          }  
        } 


       

        this.getTotal() 
        // Apply category filtering after loading sales data from localStorage in getSales2DateOffline
        this.applySorting();
        if(this.payArray.length==0){
          this.showEmpty = true
        }else{
          this.showEmpty = false
        }
        this.loading=false 
      });

      if( this.selectedAccount.sub_name != ""){
        if(this.payArray.length>0){
          this.payArray=  this.payArray.filter(x=> +x.cust_id == +this.selectedAccount.id)
          
        }
      }
      this.getTotal()
      // Apply category filtering after account filter in getSales2DateOffline
      this.applySorting();
    }); 
  }

   showLoadingSk(){
     setTimeout(() => {
       
     }, 3000);
   }

   radioChange(ev){
    //console.log(ev.target.value) 
    this.payArray = []
    this.sortedPayArray = []
    this.salesLocal = []
    this.showEmpty = false
    this.loading = false
   }

  
   getPayInvoDetail(pay,sub_name,status){
     
    this.presentLoadingWithOptions('جاري جلب التفاصيل ...')
    if(this.radioVal == 3){
      console .log(pay,sub_name,status)
    
      this.api.getPayInvoDetailinit(this.store_info.id , pay.pay_ref).subscribe(data =>{
        //console.log(data,'case 1')
         let res = data 
         //console.log(pay) 
         let navigationExtras: NavigationExtras = {
          queryParams: {
            payInvo: JSON.stringify(pay),
            sub_name: JSON.stringify(sub_name),
            user_info:JSON.stringify(this.user_info),
            store_info:JSON.stringify(this.store_info),
            itemList:JSON.stringify(res['data'])
          }
        }
        this.rout.navigate(['folder/sales'], navigationExtras); 
      }); 
    }else{
      if (pay.pay_id != undefined) {
        this.api.getPayInvoDetail(this.store_info.id , pay.pay_ref, this.year.id).subscribe(data =>{
          //console.log(data,'case 1')
          let res = data 
          //console.log(pay)  
          let navigationExtras: NavigationExtras = {
           queryParams: {
             payInvo: JSON.stringify(pay),
             sub_name: JSON.stringify(sub_name),
             user_info:JSON.stringify(this.user_info),
             store_info:JSON.stringify(this.store_info),
             itemList:JSON.stringify(res['data'])
           }
         };
 
          this.rout.navigate(['folder/edit-sales'], navigationExtras); 
          
        }, (err) => {
        //console.log(err);
        this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
      })  
      }  
    }
    
  }

  async presentToast(msg,color?) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color:color,
      cssClass:'cust_Toast',
      mode:'ios',
      position:'top' 
    });
    toast.present();
  }


  async presentLoadingWithOptions(msg?) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode:'ios',
      duration: 3000,
      message: msg,
      translucent: true,
     // cssClass: 'custom-class custom-loading',
      backdropDismiss: false
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed with role:', role);
  }

// Handle account selection from AccountSelectorComponent
onAccountSelected(account: any) {
  if (account) {
    this.selectedAccount = {
      id: account.id,
      ac_id: account.ac_id,
      sub_name: account.sub_name,
      sub_type: account.sub_type,
      sub_code: account.sub_code,
      sub_balance: account.sub_balance,
      store_id: account.store_id,
      cat_name: account.cat_name,
      cat_id: account.cat_id,
      currentCustumerStatus: 0
    };
    
    // Clear existing data and reload records for selected account
    this.payArray = [];
    this.sortedPayArray = [];
    this.salesLocal = [];
    this.showEmpty = false;
    this.loading = false;
    
    console.log('Account selected in sales-record:', this.selectedAccount);
  }
}

// Handle account balance loaded
onAccountBalanceLoaded(balance: any) {
  if (balance && this.selectedAccount) {
    // Update the current customer status and balance based on loaded balance
    this.selectedAccount.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
    this.selectedAccount.sub_balance = balance.current_balance;
    console.log('Account balance loaded in sales-record:', balance);
  }
}

// Format balance display with number separators
formatBalance(balance: number): string {
  if (!balance && balance !== 0) return '0.00';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(balance));
}

// Apply sorting to data
applySorting() {
  if (this.currentSort) {
    this.sortedPayArray = this.sortingService.sortData(
      this.payArray, 
      this.currentSort.column, 
      this.currentSort.direction
    );
  } else {
    this.sortedPayArray = [...this.payArray];
  }
}

// Handle column sort
sortBy(column: string) {
  const direction = this.sortingService.getNextSortDirection(column, this.currentSort);
  this.currentSort = { column, direction };
  this.applySorting();
}

// Get sort icon for column
getSortIcon(column: string): string {
  return this.sortingService.getSortIcon(column, this.currentSort);
}

// Export functionality
async exportToPDF(): Promise<void> {
  if (!this.sortedPayArray || this.sortedPayArray.length === 0) {
    await this.presentToast('لا توجد بيانات للتصدير', 'warning');
    return;
  }

  const config: ExportConfig = {
    title: this.exportService.generateDynamicTitle('sales-record'),
    subtitle: this.generateSubtitle(),
    fileName: `sales-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
    data: this.sortedPayArray,
    columns: this.getExportColumns(),
    userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
    pageType: 'sales-record',
    currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
  };

  await this.exportService.exportToPDF(config);
}

async exportToExcel(): Promise<void> {
  if (!this.sortedPayArray || this.sortedPayArray.length === 0) {
    await this.presentToast('لا توجد بيانات للتصدير', 'warning');
    return;
  }

  const config: ExportConfig = {
    title: this.exportService.generateDynamicTitle('sales-record'),
    subtitle: this.generateSubtitle(),
    fileName: `sales-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
    data: this.sortedPayArray,
    columns: this.getExportColumns(),
    userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
    pageType: 'sales-record',
    currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
  };

  await this.exportService.exportToExcel(config);
}

private generateSubtitle(): string {
  const filters = {
    selectedAccount: this.selectedAccount.sub_name ? this.selectedAccount : null,
    dateFilter: this.getDateFilter(),
    searchTerm: null // Sales record doesn't have search term
  };

  return this.exportService.generateDynamicSubtitle('sales-record', filters);
}

private getDateFilter(): any {
  if (this.radioVal === 1 && this.startingDate) {
    return {
      type: 'single',
      date: this.startingDate
    };
  } else if (this.radioVal === 2 && this.startingDate && this.endDate) {
    return {
      type: 'range',
      startDate: this.startingDate,
      endDate: this.endDate
    };
  }
  return null;
}

private getExportColumns(): ExportColumn[] {
  return [
    { key: 'sub_name', title: 'العميل', width: 20, type: 'text' },
    { key: 'pay_date', title: 'التاريخ', width: 12, type: 'date' },
    { key: 'tot_pr', title: 'إجمالي المبلغ', width: 15, type: 'currency' },
    { key: 'discount', title: 'الخصم', width: 12, type: 'currency' },
    { key: 'finalAmount', title: 'الإجمالي بعد الخصم', width: 18, type: 'currency' },
    { key: 'payComment', title: 'تعليق', width: 20, type: 'text' },
    { key: 'user_name', title: 'المستخدم', width: 15, type: 'text' }
  ];
}

}

import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable } from 'rxjs';
import {  LoadingController,Platform, ModalController, ToastController, PopoverController } from '@ionic/angular';
import { DatePipe } from '@angular/common'; 
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router'
import { PrintModalPage } from '../print-modal/print-modal.page';
import { ActionPopoverComponent } from '../component/action-popover/action-popover.component';
import { InvoicePriceConfigDialogComponent } from '../component/invoice-price-config-dialog/invoice-price-config-dialog.component';
import { CategoriesPage } from '../categories/categories.page';
 
@Component({
  selector: 'app-purchase-record',
  templateUrl: './purchase-record.page.html',
  styleUrls: ['./purchase-record.page.scss'],
})
export class PurchaseRecordPage implements OnInit {
  payArray:Array<any> =[]
  filteredPayArray:Array<any> =[] // Filtered invoices based on selected category
  printArr:Array<any> =[]
  sub_account:Array<any> =[]
  sub_accountLocalPurch:Array<any> =[]
  selectedAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any ,cat_id:any,cat_name:any,currentCustumerStatus:any};
  // Category properties
  categories: Array<any> = [];
  selectedCategoryId: any = null;
  isCategoryVisibilityEnabled: boolean = true;
  sub_accountPurch:Array<any> =[]
  store_info : {id:any , location :any ,store_name:any , store_ref:any }
  user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
  printMode :boolean =false
  itemList :Array<any> =[]
  loadingDetails:boolean =false
  paInvo :any
  dateFrom :any;
  dateTo :any;
  radioVal : any = 0
  startingDate :any
  endDate :any 
  loading:boolean = false
  showEmpty :boolean = false
  offline: boolean = false;
  purchLocal:Array<any> =[]
  purchase:Array<any> =[]
  purchOffline:Array<any> =[]
  device:any =''
   slideOpts = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  color :any ='dark'
  sums : {pay:any ,change:any,discount:any,tot:any,totAfterDiscout:any}
  year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
  constructor(private popoverController: PopoverController ,private platform :Platform ,private rout : Router,private storage: Storage,private modalController: ModalController,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController) { 
  this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",currentCustumerStatus:0};
    this.sums = {pay:0 ,change:0,discount:0,tot:0,totAfterDiscout:0}
    this.checkPlatform()
    this.getAppInfo()
    this.prepareOffline()
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
    this.filteredPayArray =[]
    // Check category visibility setting
   // this.isCategoryVisibilityEnabled = CategoriesPage.isCategoryVisibilityEnabled();
    //console.log('ngOnInit')
    this.getAppInfo() 
    this.prepareOffline()
  }


  ionViewDidEnter(){
    this.payArray =[]
    this.purchLocal =[]
    this.purchOffline =[]
    this.purchase =[]
    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response 
         this.search() 
      }
      }); 
    //console.log('ionViewDidEnter')
   // this.search()
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
  console.log('pay pefor call' , pay )
  this.presentLoadingWithOptions('جاري نسخ الفاتورة...');
  
  // Determine which method to call based on offline status and pay_id
  if (this.offline == false && pay.pay_id != undefined) {
    this.api.getPerchInvoDetail(this.store_info.id, pay.pay_ref, this.year.id).subscribe(data => {
      let res = data;
      console.log('res after call',res);
      this.loadingController.dismiss();
      this.showPriceConfigDialog(res['data'], type);
    }, (err) => {
      this.loadingController.dismiss();
      this.presentToast('خطا في الإتصال حاول مرة اخري', 'danger');
    });
  } else if (this.offline == false && pay.pay_id == undefined) {
    this.loadingController.dismiss();
    let flt: Array<any> = [];
    flt = this.purchLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
    if (flt.length > 0) {
      this.showPriceConfigDialog(flt[0].itemList, type);
    }
  } else if (this.offline == true && pay.pay_id != undefined) {
    this.loadingController.dismiss();
    let flt: Array<any> = [];
    flt = this.purchase.filter(x => x.payInvo.pay_ref == pay.pay_ref);
    if (flt.length > 0) {
      this.showPriceConfigDialog(flt[0].itemList, type);
    }
  } else if (this.offline == true && pay.pay_id == undefined) {
    this.loadingController.dismiss();
    let flt: Array<any> = [];
    flt = this.purchLocal.filter(x => x.payInvo.pay_ref == pay.pay_ref);
    if (flt.length > 0) {
      this.showPriceConfigDialog(flt[0].itemList, type);
    }
  }
}

async showPriceConfigDialog(itemList: any[], type: 'sales' | 'purchase') {
  // For purchase type, skip dialog and navigate directly
  if (type === 'purchase') {
    this.navigateToInvoicePage(itemList, type);
    return;
  }

  // For sales type, show the dialog
  const modal = await this.modalController.create({
    component: InvoicePriceConfigDialogComponent,
    componentProps: {
      itemList: itemList,
      invoiceType: type,
      context: 'purchase-record'
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
      tot: (item.perch_price * item.quantity).toFixed(2)  || 0,
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
      perch_price: item.perch_price || 0,
      pay_price: item.pay_price || 0,
      qty: item.quantity ,
      tot: (item.perch_price * item.quantity).toFixed(2)  || 0,
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

    clear(){
      this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",currentCustumerStatus:0};
      this.payArray = []
      this.purchLocal = []
      this.showEmpty = false
      this.loading = false
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



  getPayDetailsForMob(pay){
  if(!pay.item_details){
    this.loadingDetails = true
    this.api.getPerchInvoDetail(this.store_info.id , pay.pay_ref,this.year.id).subscribe(data =>{
      //console.log(data,'case 1')
       let res = data 
       //console.log(data) 
       this.payArray.forEach(element => {
        if(element.pay_ref == pay.pay_ref){
          element.item_details = data['data'] 
        }
       });
       this.loadingDetails = false
     
     }, (err) => {
     //console.log(err);
     
     this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
   
  },()=>{ this.loadingDetails = false})  
  }
 
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
        // Load categories for purchase records
        this.loadCategories();
      // this.search() 
     }
   });
   this.storage.get('purchase').then((response) => {
    if (response) {
      this.purchase = response 
       //console.log(this.purchase)  
    }
  });
 }

  // Category management methods
  loadCategories() {
    if (this.store_info && this.store_info.id) {
      this.api.getCategories(this.store_info.id).subscribe(
        (data: any) => {
          if (data && data.data) {
            this.categories = data.data;
            console.log('Categories loaded in purchase-record:', this.categories);
            
            // Set initial category from localStorage or first category
            const savedCategoryId = localStorage.getItem('SELECTED_CATEGORY_ID');
            if (savedCategoryId && this.categories.some(cat => cat.id == savedCategoryId)) {
              this.selectedCategoryId = savedCategoryId;
            } else if (this.categories.length > 0) {
              this.selectedCategoryId = this.categories[0].id;
              localStorage.setItem('SELECTED_CATEGORY_ID', this.categories[0].id);
            }
          }
        },
        (error: any) => {
          console.error('Error loading categories in purchase-record:', error);
        }
      );
    }
  }

  onCategoryChange(event: any) {
    this.selectedCategoryId = event.detail.value;
    
    // Save selected category
    if (this.selectedCategoryId) {
      localStorage.setItem('SELECTED_CATEGORY_ID', this.selectedCategoryId);
    }
    
    console.log('Purchase record category changed to:', this.selectedCategoryId);
    
    // Apply category filtering when category selection changes
    this.filterInvoicesByCategory();
  }

// Filter invoices by selected category
filterInvoicesByCategory() {
  console.log('🔍 FILTERING PURCHASE INVOICES BY CATEGORY');
  console.log('Selected category ID:', this.selectedCategoryId);
  console.log('Total invoices to filter:', this.payArray.length);

  if (!this.selectedCategoryId || this.selectedCategoryId === 'all') {
    // Show all invoices if no category selected or "all" is selected
    this.filteredPayArray = [...this.payArray];
    console.log('No category filter applied, showing all invoices:', this.filteredPayArray.length);
    return;
  }

  // Filter invoices that match the selected category
  this.filteredPayArray = this.payArray.filter(invoice => {
    // Check multiple possible category property names
    const possibleCategoryIds = [
      invoice.category_id,
      invoice.categoryId,
      invoice.category ? invoice.category.id : null,
      invoice.cat_id
    ];

    let invoiceCategoryId = null;

    // Find the first valid category ID from possible properties
    for (const catId of possibleCategoryIds) {
      if (catId !== null && catId !== undefined && catId !== '') {
        invoiceCategoryId = catId;
        break;
      }
    }

    if (invoiceCategoryId === null || invoiceCategoryId === undefined) {
      console.log(`Invoice "${invoice.pay_ref}" - NO VALID category_id found`);
      return false;
    }

    // Compare with type coercion (== instead of ===) to handle string/number differences
    const categoryMatches = (invoiceCategoryId == this.selectedCategoryId);

    console.log(`Invoice "${invoice.pay_ref}":`, {
      invoiceCategoryId: invoiceCategoryId,
      selectedCategoryId: this.selectedCategoryId,
      matches: categoryMatches
    });

    return categoryMatches;
  });

  console.log('Purchase invoices after category filter:', this.filteredPayArray.length);
}

 prepareOffline(){ 
 this.storage.get('sub_accountLocalPurch').then((response) => {
   if (response) {
     this.sub_accountLocalPurch = response 
      //console.log(this.sub_accountLocalPurch)  
   }
 });
 //Yaw
 this.storage.get('sub_accountPurch').then((response) => {
  if (response) {
    this.sub_accountPurch = response  
     //console.log(this.sub_accountPurch)  
  }
});
 
 }

getSalesAccount(){
  if (this.offline == false) {
    this.api.getPerchAccounts(this.store_info.id ,this.year.id).subscribe(data =>{
       let res = data
       this.sub_account = res ['data']
       //console.log(this.sub_account)
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
    if (this.sub_accountLocalPurch) {
      for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
        const element = this.sub_accountLocalPurch[i];
        this.sub_account.push(element)
      }
    }
    if (this.sub_accountPurch) {
      for (let i = 0; i < this.sub_accountPurch.length; i++) {
        const element = this.sub_accountPurch[i];
        this.sub_account.push(element)
      }
    } 
  }

 addSubaccountLocal(){
  if (this.sub_account) {
    if (this.sub_accountLocalPurch) {
      for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
        const element = this.sub_accountLocalPurch[i];
        this.sub_account.push(element)
      }
    }
  } else{
    if (this.sub_accountLocalPurch) {
      this.sub_account = this.sub_accountLocalPurch 
    }
  } 
}

   printInvo(printarea , dataFrom){   
    if (this.offline==false && dataFrom.pay_id != undefined) {
      this.paInvo = dataFrom 
      //console.log( this.paInvo) 
      this.api.getPerchInvoDetail(this.store_info.id , dataFrom.pay_ref ,this.year.id).subscribe(data =>{
       //console.log(data)
       let res = data 
       this.itemList = res['data']
       //console.log(res) 
       this.printArr = []
       this.printArr.push({
       'payInvo': this.paInvo,
       'itemList':this.itemList,
       'selectedAccount' : this.paInvo.sub_name,
       'sub_nameNew' : ""
     }) 
      //console.log(this.printArr)
      this.presentModal(this.printArr , 'perch_record')
       }, (err) => {
        //console.log(err);
        this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
       },()=>{ 
       })        
    } else if (this.offline==false && dataFrom.pay_id == undefined) {
     console .log(dataFrom,dataFrom)
      
     //console.log(this.purchLocal ,'case2')
     let flt:Array<any> =[]
     flt = this.purchLocal.filter(x=>x.payInvo.pay_ref==dataFrom.pay_ref )
     //console.log(flt,'here')

     this.printArr = []
     this.printArr.push({
     'payInvo': flt[0].payInvo,
     'itemList':flt[0].itemList,
     'selectedAccount' : flt[0].payInvo.sub_name,
     'sub_nameNew' : ""
   }) 
    //console.log(this.printArr)
    this.presentModal(this.printArr , 'perch_record') 
    }else if (this.offline==true && dataFrom.pay_id != undefined) {
      
     
     //console.log(this.purchase ,'case3')
     let flt:Array<any> =[]
     flt = this.purchase.filter(x=>x.payInvo.pay_ref==dataFrom.pay_ref )
     //console.log(flt,'here')

     this.printArr = []
     this.printArr.push({
     'payInvo': flt[0].payInvo,
     'itemList':flt[0].itemList,
     'selectedAccount' : flt[0].payInvo.sub_name,
     'sub_nameNew' : ""
   }) 
    //console.log(this.printArr)
    this.presentModal(this.printArr , 'perch_record') 
    }else if (this.offline==true && dataFrom.pay_id == undefined) {
     
     
     //console.log(this.purchLocal)
     let flt:Array<any> =[]
     flt = this.purchLocal.filter(x=>x.payInvo.pay_ref==dataFrom.pay_ref )
     //console.log(flt,'here')
     this.printArr = []
     this.printArr.push({
     'payInvo': flt[0].payInvo,
     'itemList':flt[0].itemList,
     'selectedAccount' : flt[0].payInvo.sub_name,
     'sub_nameNew' : ""
   }) 
    //console.log(this.printArr)
    this.presentModal(this.printArr , 'perch_record')  
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
      currentCustumerStatus:0
    }
    //console.log( this.selectedAccount);
    this.payArray = []
    this.purchLocal = []
    this.showEmpty = false
    this.loading = false
  //  this.setFocusOnInput()
  }else{
    this.presentToast('خطأ في اسم الحساب ', 'danger') 
    this.selectedAccount.sub_name =""
  }
}

   Print(elem ,paInvo, itemList  ){ 
    if (elem && paInvo && itemList){ 
       var mywindow = window.open('', 'PRINT', 'height=400,width=600'); 
      mywindow.document.write('<html><head>'); 
      mywindow.document.write('<style type="text/css">')
      mywindow.document.write('.flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;}.ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }')
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
    this.purchLocal =[]
    this.storage.get('purchLocal').then((response) => {
      if (response) {
        this.purchLocal = response
        //console.log(this.purchLocal)  
      } 
    });
  }

  getSalesOffline(){
    this.purchOffline =[]
    this.storage.get('sales').then((response) => {
      if (response) {
        this.purchOffline = response
        //console.log(this.purchOffline)  
      } 
    });
  }
  
  getTotal(){
    this.sums.tot = this.payArray.reduce( (acc, obj)=> { return acc + +obj.tot_pr; }, 0);
    this.sums.change = this.payArray.reduce( (acc, obj)=> { return acc + +obj.changee; }, 0);
    this.sums.pay = this.payArray.reduce( (acc, obj)=> { return acc + +obj.pay; }, 0);
    this.sums.discount = this.payArray.reduce( (acc, obj)=> { return acc + +obj.discount; }, 0);
    this.sums.totAfterDiscout =   + this.sums.tot - this.sums.discount 
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
    }
   }
   
   getTopSales(){ 
    this.getSalesfromLocal()
    this.loading = true
    this.api.getTopPerch(this.store_info.id,this.year.id).subscribe(data =>{
       //console.log('hhhhhh',data)
       let res = data
       if(res['message'] != 'No record Found'){
         this.payArray = res['data'] 
       }
       if(this.purchLocal.length >0){
        //console.log('locLaly',this.purchLocal)
        for (let i = 0; i < this.purchLocal.length; i++) {
          const element = this.purchLocal[i];
          this.payArray.push(element.payInvo)
        }
        this.getTotal()
        // Apply category filtering after loading purchase data from localStorage in getTopSales
        this.filterInvoicesByCategory();
        if(this.payArray.length==0){
          this.showEmpty = true
        }else{
          this.showEmpty = false
        }
        this.loading=false
        //console.log(this.payArray)
       }
        //custName
     if( this.selectedAccount.sub_name != ""){
      if(this.payArray.length>0){
      this.payArray= this.payArray.filter(x=>+x.cust_id == +this.selectedAccount.id)
        
      }
    }
       this.getTotal()
       // Apply category filtering after account filter in getTopSales  
       this.filterInvoicesByCategory();
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
    this.purchLocal =[]
    this.purchOffline=[]
    this.purchase =[]
    this.storage.get('purchLocal').then((response) => {
     if (response) {
       let flt : Array<any> =[]
       flt= response
       this.purchLocal=flt
       //console.log(flt)
       if (flt.length > 0) {
         for (let i = 0; i < flt.length; i++) {
         const element = flt[i];
         this.payArray.push(element.payInvo)
       } 

       }
     }
     // 
     this.storage.get('purchase').then((response2) => {
      if (response2) {
        let flt : Array<any> =[]
        flt= response2
        this.purchOffline=flt
        this.purchase=this.purchOffline
        //console.log(flt)
        if (flt.length > 0) {
          for (let i = 0; i < flt.length; i++) {
          const element = flt[i];
          this.payArray.push(element.payInvo)
        } 
        }
      }
      this.getTotal()

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
    // Apply category filtering after loading data in getTopSalesOffline
    this.filterInvoicesByCategory();
   });
  }

  getSalesByDate(){ 
    this.payArray=[]
    this.purchLocal =[]
    this.purchOffline=[]
    this.purchase =[]
    //console.log(this.store_info.id,this.startingDate)
    this.getSalesfromLocal()
    this.loading = true
    this.api.getPerchByDate(this.store_info.id , this.startingDate,this.year.id).subscribe(data =>{
       //console.log(data)
       let res = data
       if(res['message'] != 'No record Found'){ 
       this.payArray = res['data'] 
     }
     if(this.purchLocal.length >0){
      this.purchLocal = this.purchLocal.filter(x=>x.payInvo.pay_id==undefined && x.payInvo.pay_date==this.startingDate)
      //console.log('locLaly',this.purchLocal)
      for (let i = 0; i < this.purchLocal.length; i++) {
        const element = this.purchLocal[i];
        this.payArray.push(element.payInvo)
      }
      this.getTotal()

      if(this.payArray.length==0){
        this.showEmpty= true
      }else{
        this.showEmpty = false
      }
      this.loading=false
      //console.log(this.payArray)

     } 
      //custName
      if( this.selectedAccount.sub_name != ""){
        if(this.payArray.length>0){
        this.payArray= this.payArray.filter(x=>+x.cust_id == +this.selectedAccount.id)
          
        }
      }
     this.getTotal()
     // Apply category filtering after loading data in getSalesByDate
     this.filterInvoicesByCategory();
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
    this.purchLocal =[]
    this.purchOffline=[]
    this.purchase =[]
    this.loading = true
    this.storage.get('purchLocal').then((response) => {
      if (response) {
        this.purchLocal = response
        
        let flt:Array<any> =[]
        //console.log('haloo',this.purchLocal) 
        flt = this.purchLocal.filter(x=> x.payInvo.pay_date==this.startingDate)
        if (flt.length>0) {
          for (let i = 0; i < flt.length; i++) {
            const element = flt[i];
            this.payArray.push(element.payInvo)
          } 
        }  
      }
      this.storage.get('purchase').then((response2) => {
        if (response2) {
          this.purchOffline = response2
          this.purchase =  this.purchOffline
          //console.log(this.purchOffline) 
          let flt:Array<any> =[]
          flt = this.purchOffline.filter(x=> x.payInvo.pay_date==this.startingDate)
          if (flt.length>0) {
            for (let i = 0; i < flt.length; i++) {
              const element = flt[i];
              this.payArray.push(element.payInvo)
            } 
          } 
        }
        this.getTotal()
       
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
     //custName
     if( this.selectedAccount.sub_name != ""){
      if(this.payArray.length>0){
      this.payArray= this.payArray.filter(x=>+x.cust_id == +this.selectedAccount.id)
        
      }
    }
      this.getTotal()
      // Apply category filtering after loading data in getSalesByDateOffline
      this.filterInvoicesByCategory();
     
    });

 
   }

   getSales2Date(){
    this.payArray=[]
    this.purchLocal =[]
    this.purchOffline=[]
    this.purchase =[]
    this.getSalesfromLocal()
    this.loading = true
    //console.log(this.store_info.id,this.startingDate,this.endDate)
    this.api.getPerch2Date(this.store_info.id,this.startingDate,this.endDate,this.year.id).subscribe(data =>{
       //console.log(data)
       let res = data
       if(res['message'] != 'No record Found'){
        this.payArray = res['data'] 
      } 
      
     
     if(this.purchLocal.length >0){
      this.purchLocal = this.purchLocal.filter(x=>x.payInvo.pay_date>=this.startingDate && x.payInvo.pay_date<=this.endDate)
      //console.log('locLaly',this.purchLocal)
      for (let i = 0; i < this.purchLocal.length; i++) {
        const element = this.purchLocal[i];
        this.payArray.push(element.payInvo)
      }
      //console.log(this.payArray)
    
      this.getTotal()
      if(this.payArray.length==0){
        this.showEmpty = true
      }else{
        this.showEmpty = false
      }
      this.loading=false
     }
      //custName
      if( this.selectedAccount.sub_name != ""){
        if(this.payArray.length>0){
        this.payArray= this.payArray.filter(x=>+x.cust_id == +this.selectedAccount.id)
          
        }
      }
     this.getTotal()
     // Apply category filtering after loading data in getSales2Date
     this.filterInvoicesByCategory();
     }, (err) => {
     //console.log(err);
   },()=>{
    this.loading = false
   }
   )  
   }
  

   getSales2DateOffline(){
    this.payArray=[]
    this.purchLocal =[]
    this.purchase =[]
    this.purchOffline=[]
    this.loading = true
    this.storage.get('purchLocal').then((response) => {
      if (response) {
        this.purchLocal = response
        //console.log(this.purchLocal) 
        let flt:Array<any> =[]
        flt =this.purchLocal.filter(x=>x.payInvo.pay_date>=this.startingDate && x.payInvo.pay_date<=this.endDate)
        if (flt.length>0) {
          for (let i = 0; i < flt.length; i++) {
            const element = flt[i];
            this.payArray.push(element.payInvo)
          } 
        }  
      } 
      this.storage.get('purchase').then((response2) => {
        if (response2) {
          this.purchOffline = response2
          this.purchase=this.purchOffline 
          //console.log(this.purchOffline) 
          let flt:Array<any> =[]
          flt =this.purchOffline.filter(x=>x.payInvo.pay_date>=this.startingDate && x.payInvo.pay_date<=this.endDate)
          if (flt.length>0) {
            for (let i = 0; i < flt.length; i++) {
              const element = flt[i];
              this.payArray.push(element.payInvo)
            } 
          }  
        } 
       
        this.getTotal()
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
      // Apply category filtering after loading data in getSales2DateOffline
      this.filterInvoicesByCategory();
    });  
  }
  
   radioChange(ev){
    //console.log(ev.target.value) 
    this.payArray = []
    this.purchLocal = []
    this.showEmpty = false
    this.loading = false
   }
 

   getPayInvoDetail(pay,sub_name,status){
     console .log(pay,sub_name,status)
   this.presentLoadingWithOptions('جاري جلب التفاصيل ...')
   if (this.offline==false && pay.pay_id != undefined) {
    this.api.getPerchInvoDetail(this.store_info.id , pay.pay_ref,this.year.id).subscribe(data =>{
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
      if(this.device == 'desktop'){
        this.rout.navigate(['folder/edit-perch'], navigationExtras);  
      }else{
        this.rout.navigate(['folder/edit-purchase-mob'], navigationExtras);  
      }
     }, (err) => {
     //console.log(err);
     this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
   })  
   } else if (this.offline==false && pay.pay_id == undefined) {
    console .log(pay,sub_name,status)
    this.loadingController.dismiss() 
    //console.log(this.purchLocal ,'case2')
    let flt:Array<any> =[]
    flt = this.purchLocal.filter(x=>x.payInvo.pay_ref==pay.pay_ref )
    //console.log(flt,'here')
    let navigationExtras: NavigationExtras = {
     queryParams: {
       payInvo: JSON.stringify(flt[0].payInvo),
       sub_name: JSON.stringify(flt[0].payInvo.sub_name),
       user_info:JSON.stringify(this.user_info),
       store_info:JSON.stringify(this.store_info),
       itemList:JSON.stringify(flt[0].itemList)
     }
   };
   if(this.device == 'desktop'){
   this.rout.navigate(['folder/edit-perch'], navigationExtras); 
  }else{
    this.rout.navigate(['folder/edit-purchase-mob'], navigationExtras);  
  }
   }else if (this.offline==true && pay.pay_id != undefined) {
    console .log('bbbbbbb',pay,sub_name,status)
    this.loadingController.dismiss() 
    //console.log(this.purchase ,'case3')
    let flt:Array<any> =[]
    flt = this.purchase.filter(x=>x.payInvo.pay_ref==pay.pay_ref)
    //console.log(flt,'here')
    let navigationExtras: NavigationExtras = {
     queryParams: {
       payInvo: JSON.stringify(flt[0].payInvo),
       sub_name: JSON.stringify(flt[0].payInvo.sub_name),
       user_info:JSON.stringify(this.user_info),
       store_info:JSON.stringify(this.store_info),
       itemList:JSON.stringify(flt[0].itemList)
     }
   };
   if(this.device == 'desktop'){
    this.rout.navigate(['folder/edit-perch'], navigationExtras); 
   }else{
     this.rout.navigate(['folder/edit-purchase-mob'], navigationExtras);  
   }
   }else if (this.offline==true && pay.pay_id == undefined) {
    console .log(pay,sub_name,status)
    this.loadingController.dismiss() 
    //console.log(this.purchLocal)
    let flt:Array<any> =[]
    flt = this.purchLocal.filter(x=>x.payInvo.pay_ref==pay.pay_ref )
    //console.log(flt,'here')
    let navigationExtras: NavigationExtras = {
     queryParams: {
       payInvo: JSON.stringify(flt[0].payInvo),
       sub_name: JSON.stringify(flt[0].payInvo.sub_name),
       user_info:JSON.stringify(this.user_info),
       store_info:JSON.stringify(this.store_info),
       itemList:JSON.stringify(flt[0].itemList)
     }
   };
   if(this.device == 'desktop'){
    this.rout.navigate(['folder/edit-perch'], navigationExtras); 
   }else{
     this.rout.navigate(['folder/edit-purchase-mob'], navigationExtras);  
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
      currentCustumerStatus: account.currentCustumerStatus || 0
    };
    
    // Clear existing data and reload records for selected account
    this.payArray = [];
    this.purchLocal = [];
    this.showEmpty = false;
    this.loading = false;
    
    console.log('Account selected in purchase-record:', this.selectedAccount);
  }
}

// Handle account balance loaded
onAccountBalanceLoaded(balance: any) {
  if (balance && this.selectedAccount) {
    // Update the supplier balance
    this.selectedAccount.sub_balance = balance.current_balance;
    console.log('Account balance loaded in purchase-record:', balance);
  }
}

}
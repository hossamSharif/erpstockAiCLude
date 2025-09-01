import { Component, OnInit, ViewChild, ElementRef ,Renderer2,Input} from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable, Subscription } from 'rxjs';
import { AlertController, IonInput, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { DatePipe, Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { AuthServiceService } from '../auth/auth-service.service';
import { PrintModalPage } from '../print-modal/print-modal.page';
import { ItemModalPage } from '../item-modal/item-modal.page';
import { PriceAdjustmentDialogComponent } from '../component/price-adjustment-dialog/price-adjustment-dialog.component';
import { InvoiceJournalEntryComponent, InvoiceJournalData } from '../component/invoice-journal-entry/invoice-journal-entry.component';
import { FilterPipe } from './pipe';
import { FilterPipe2 } from './pipe2';
import { FilterPipe3 } from './pipe3';
import { ActivatedRoute } from '@angular/router';
import { StockServiceService } from '../syncService/stock-service.service';
import * as momentObj from 'moment';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {
  @ViewChild("dstP") nameField: ElementRef;
  @ViewChild('qtyIdP') qtyIdP; 
  @ViewChild('dstPop2') dstPop2; 
  @ViewChild('popInput2') popInput2; 
  @ViewChild('popover2') popover2;
  @ViewChild('popoverNotif3') popoverNotif3;

  // Modal-specific properties
  @Input() modalMode: boolean = false;
  @Input() modalStatus: string = '';
  @Input() modalSelectedItemsList: any[] = [];

 discountType: string = 'percentage'; // 'percentage' or 'amount'
  discountAmount: number = 0;
  calculatedDiscountPerc: number = 0;
  calculatedDiscountAmount: number = 0;



  isOpenNotif = false ;
  newNotif = false ; 
sub_account:Array<any> =[]
sub_accountLocalPurch:Array<any> =[]
items:Array<any> =[]
isOpen = false; 
notifArr:Array<any> =[]
LogHistoryLocalArr:Array<any> =[]
logHistoryArr:Array<any>=[]; 
  subiscribtionNotif:Subscription
  showNotif = false
sub_accountPurch:Array<any> =[]
sortedItemList:Array<any> =[]
isItemListSorted:boolean = false
searchTerm:string = ''
highlightedIndex:number = -1
searchMatches:number[] = []
loadingItems :boolean = false
showBackButton: boolean = false
color :any ='dark'
itemsLocal:Array<any> =[]
itemList:Array<any> =[]
purchLocal:Array<any> =[] 
purchase:Array<any> =[]
randomsNumber:Array<any> =[]
store_info : {id:any , location :any ,store_name:any , store_ref:any }
user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
sub_nameNew :any = ""
selectedItem : {id:any ,pay_ref:any,item_name:any,pay_price:any,perch_price:any,item_unit:any,item_desc:any,parcode:any,qty:any,tot:any ,dateCreated:any,aliasEn:any};
selectedAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any,cat_id:any,cat_name:any,phone:any,address:any};
payInvo : {pay_id:any ,pay_ref:any ,store_id:any,tot_pr:any,pay:any,pay_date:any,pay_time:any,user_id:any,cust_id:any,pay_method:any,discount:any ,changee:any,sub_name:any,payComment:any,nextPay:any, yearId:any};

// Category properties
discountPerc :any = 0
radioVal : any = 0
printMode :boolean = false
offline: boolean = false;
printArr:Array<any> =[]
firstq : {id:any ,item_id:any , store_id:any , quantity :any ,	fq_year:any ,	pay_price:any ,	perch_price:any ,item_name:any }
showMe :any =null
getItemLoader:boolean = false
searchLang :any = 0
aliasTerm :any =""
searchResult :Array<any> =[]
aliasResult :Array<any> =[]
status:any = 'new'
year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
pendingItemsFromStock: Array<any> = [];
  statusFromRoute: string = '';
  
  // New workflow properties
  showJournalEntryModal: boolean = false;
  invoiceJournalData: InvoiceJournalData = null;
  customerBalance: any = null;

currenQty:any = 0
firstQty:any = 0
perchTotQty:any = 0
payTotQty:any = 0
perchTot :any = 0
qtyReal:any = 0
availQty :any = 0
// اي طريقة دفع ح يكون في حساب مقابل ليها مثلا الكاش ح يتورد في حساب الخزينة وبنكك في حساب بنك الخرطوم اما الشيك فحيكون بالاجل و ح ينزل في  سجل الشيكات ويتحول الي حساب المعين سواء كان اتورد في حساب بنكي او اتسحب كاش واتورد فيحساب الخزينة 
constructor( private behavApi:StockServiceService ,private route: ActivatedRoute,private renderer : Renderer2,private modalController: ModalController,private alertController: AlertController, private authenticationService: AuthServiceService,private storage: Storage,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController, private _location: Location) {
 
  this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",phone:"",address:""};

  this.selectedItem = {
    id:undefined,
    dateCreated:"",
    pay_ref:"",
    item_desc:"",
    item_name:"",
    item_unit:"",
    parcode:0,
    pay_price:0,
    perch_price:0,
    qty:0,
    tot:0,
    aliasEn:""
  }
  this.route.queryParams.subscribe(params => {
    //console.log(params.payInvo,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
    if (params && params.payInvo) {
      this.status = 'initial'
      this.payInvo = JSON.parse(params.payInvo);  
      this.user_info = JSON.parse(params.user_info);
      this.store_info = JSON.parse(params.store_info);
      this.itemList = JSON.parse(params.itemList);
       
       
      this.getAppInfoCase2()
    } else if (params['status'] === 'newInvoFromItemsPage' && params['selectedItemsList']) {
      console.log('New invoice from items page');
      this.statusFromRoute = params['status'];
      this.pendingItemsFromStock = JSON.parse(params['selectedItemsList']);
      this.showBackButton = true; // Show back button when coming from items page
      console.log('Received items from stock page:', this.pendingItemsFromStock);
      this.showPriceAdjustmentDialog('initial');
    } 
  });


     this.printArr.push({
    'payInvo': "",
    'itemList':"",
     'selectedAccount' :"",
      'sub_nameNew' : ""
  }) 
  }


  refresh(para ?){
    
     // this.getItems()
     this.getAllStockItemsWithouteCounts()
     // this.getStockItems()
    
    
  }




  getAllStockItemsWithouteCounts() {
    this.storage.get('year').then((response) => {
     if (response) {
      this.year = response
      //console.log('this.year.id',this.year.id)
      if (this.offline == false) {
        this.loadingItems = true
        this.api.getAllStockItemsWithouteCounts(1,this.year.id).subscribe(data => {
           console.log(data)
          let res = data
          this.items = res['data'] 
          this.loadingItems = false
          this.storage.set('itemsLocal' , this.items).then((response) => {
             
          });  
         
        }, (err) => {
          this.loadingItems = false
          //console.log(err);
        },
          () => {
            this.loadingItems = false
          }
        )
      } else {
        this.items = this.itemsLocal
        // this.items.forEach(element => {
        //   if(+element.tswiaQuantity > 0){
        //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 

        //   }else if(+element.tswiaQuantity < 0){
        //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
        //   }

        //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
        // });
        this.searchResult = this.items
      }
      } 
  }); 
  }




async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'تأكيد!',
    mode:'ios' ,
    message: 'هل تريد طباعة فاتورة ؟ ',
    buttons: [
      {
        text: 'إلغاء',
        role: 'cancel',
        cssClass: 'secondary',
        id: 'cancel-button',
        handler: (blah) => {
          //console.log('Confirm Cancel: blah'); 
          this.prepareInvo();
          // Close modal if in modal mode
          if (this.modalMode) {
            setTimeout(() => {
              this.modalController.dismiss({ success: true, data: this.payInvo });
            }, 500);
          }
        }
      }, {
        text: 'موافق',
        id: 'confirm-button',
        handler: () => {
          this.presentModal(this.printArr , 'perch');
          // Close modal after printing starts if in modal mode
          if (this.modalMode) {
            setTimeout(() => {
              this.modalController.dismiss({ success: true, data: this.payInvo });
            }, 1000);
          }
        }
      }
    ]
  });

  await alert.present();
}

async priceChangeAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'تأكيد!',
    mode:'ios' ,
    message: 'هل تريد تعديل اسعار البيع والشراء',
    buttons: [
      {
        text: 'إلغاء',
        role: 'cancel',
        cssClass: 'secondary',
        id: 'cancel-button',
        handler: (blah) => {
          //console.log('Confirm Cancel: blah'); 
          this.addTolist() 
        }
      }, {
        text: 'موافق',
        id: 'confirm-button',
        handler: () => {
           this.updateItemDetail()
        }
      }
    ]
  }); 
  await alert.present();
}


updateItemDetail(){
  this.presentLoadingWithOptions('جاري تعديل البيانات ...') 
  this.logHistoryArr.push(
    {
      "id":null,
      "logRef":this.generateRandom2('update item'),
      "userId":this.user_info.id,
      "typee":'update item',
      "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
      "logStatus":0,
      "logToken":JSON.stringify(this.selectedItem)  ,
      "yearId":this.year.id,
      "store_id":this.store_info.id
    }
  )

  this.api.updateItem(this.selectedItem).subscribe(data => {
  //console.log(data)
  if (data['message'] != 'Post Not Updated') {
   this.presentToast('تم التعديل بنجاح' , 'success')
   this.performSync2()
  }else{
  this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
  }
 
}, (err) => {
  //console.log(err);
  this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
},() => {
 this.loadingController.dismiss()
}) 
}



Print(elem){ 
    this.printMode = true 
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

ngOnInit() { 
  // Handle modal mode
  if (this.modalMode && this.modalStatus === 'newInvoFromItemsPage' && this.modalSelectedItemsList.length > 0) {
    this.statusFromRoute = this.modalStatus;
    this.pendingItemsFromStock = this.modalSelectedItemsList;
    this.showBackButton = true;
    console.log('Modal mode: Received items from stock page:', this.pendingItemsFromStock);
    this.getAppInfo(); // Initialize app info for new invoice
    this.showPriceAdjustmentDialog('initial');
    return; // Exit early for modal mode
  }
  
  // Check category visibility setting
  
  if(this.status == 'new'){
    this.getAppInfo()  
   }else if(this.status == 'initial'){
    this.getAppInfoCase2() 
   }  
  
 
}

async showPriceAdjustmentDialog(mode: 'initial' | 'edit' = 'initial') {
  let itemsToPass = [];
  let isInitialMode = false;
  
  if (mode === 'initial') {
    // Case 1: Initial load with pendingItemsFromStock
    if (!this.pendingItemsFromStock || this.pendingItemsFromStock.length === 0) {
      return;
    }
    itemsToPass = this.pendingItemsFromStock;
    isInitialMode = true;
  } else {
    // Case 2: Edit current itemList
    if (!this.itemList || this.itemList.length === 0) {
      return;
    }
    // Convert itemList to format expected by modal
    itemsToPass = this.itemList.map(item => ({
      id: item.item_id,
      item_name: item.item_name,
      qty: item.quantity, // quantity → qty for modal
      perch_price: item.perch_price,
      pay_price: item.pay_price,
      item_unit: item.item_unit || '',
      part_no: item.part_no || '',
      brand: item.brand || '',
      model: item.model || '',
      aliasEn: item.aliasEn || ''
    }));
    isInitialMode = false;
  }
  
  try {
    const modal = await this.modalController.create({
      component: PriceAdjustmentDialogComponent,
      componentProps: {
        itemsList: itemsToPass,
        mode: 'purchase'
      },
      cssClass: 'price-adjustment-modal'
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        // User applied price adjustments
        if (isInitialMode) {
          this.handleInitialModeResult(data.data);
        } else {
          this.handleEditModeResult(data.data);
        }
      } else {
        // User cancelled
        if (isInitialMode) {
          this.addItemsFromStockToPurchase();
        }
        // For edit mode, do nothing if cancelled
      }
    });

    await modal.present();
    
  } catch (error) {
    console.error('Error creating modal:', error);
    if (isInitialMode) {
      this.addItemsFromStockToPurchase();
    }
  }
}

handleInitialModeResult(updatedItems: any[]) {
  // Case 1: Clear itemList and add updated items from pendingItemsFromStock
  this.itemList = []; // Clear existing items
  
  // Update pendingItemsFromStock with new prices
  this.pendingItemsFromStock = updatedItems;
  
  // Add items to itemList
  this.addItemsFromStockToPurchase();
  
  // Reset pendingItemsFromStock
  this.pendingItemsFromStock = [];
  
  // Recalculate totals
  this.recalculateTotals();
}

handleEditModeResult(updatedItems: any[]) {
  // Case 2: Update existing itemList with new prices
  if (!updatedItems || updatedItems.length === 0) return;

  // Update the itemList with new prices instead of recreating it
  updatedItems.forEach(updatedItem => {
    const itemIndex = this.itemList.findIndex(item => 
      item.item_id === updatedItem.id && item.item_name === updatedItem.item_name
    );
    
    if (itemIndex !== -1) {
      // Update the perch_price and recalculate total
      this.itemList[itemIndex].perch_price = parseFloat(updatedItem.perch_price) || 0;
      this.itemList[itemIndex].tot = (this.itemList[itemIndex].quantity * this.itemList[itemIndex].perch_price).toFixed(2);
    }
  });
  
  // Recalculate totals
  this.recalculateTotals();
  
  this.presentToast('تم تعديل الأسعار بنجاح', 'success');
}

recalculateTotals() {
  // Recalculate tot_pr and changee using getTotal() - preserve existing pay amount
  this.getTotal(); // This updates payInvo.tot_pr, payInvo.changee based on itemList totals and existing pay amount
}

addItemsFromStockToPurchase() {
  // Add items from pendingItemsFromStock to itemList following prepareInvo() pattern
  let d = new Date();
  
  this.pendingItemsFromStock.forEach(item => {
    this.itemList.push({
      "id": 'NULL',
      "pay_ref": this.payInvo.pay_ref,
      "item_name": item.item_name,
      "pay_price": item.pay_price,
      "quantity": +item.qty, // Convert qty to quantity
      "tot": (+item.qty * +item.perch_price).toFixed(2),
      "store_id": +this.store_info.id,
      "yearId": +this.year.id,
      "item_id": +item.id,
      "dateCreated": this.datePipe.transform(d, 'dd-MM-YYYY'),
      "perch_price": item.perch_price
    });
  });
  
  // Clear pending items
  this.pendingItemsFromStock = [];
  
  // Recalculate totals using existing method
  this.getTotal();
}

// Public method to open price adjustment dialog for editing current itemList
openPriceAdjustmentDialog() {
  this.showPriceAdjustmentDialog('edit');
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
      this.prepareInvo()
    }
  });

  this.storage.get('itemsLocal').then((response) => {
    if (response) {
       this.items = response
    }
  });
  
}


getAppInfoCase2(){  
  
   this.storage.get('USER_INFO').then((response) => {
    if (response) {
      this.user_info = response
      //console.log(this.user_info) 
    }
  });
  this.storage.get('year').then((response) => {
    if (response) {
      this.year = response 
      this.payInvo.yearId = this.year.id
      this.itemList.forEach(element => {
        element.yearId =this.year.id
      });
    } 
  });

   
  this.storage.get('STORE_INFO').then((response) => {
    if (response) {
      this.store_info = response
      
      
    }   
  });  

  this.storage.get('itemsLocal').then((response) => {
    if (response) {
       this.items = response
    }
  });
  
}
 


radioChange(ev){
  //console.log(ev.target.value) 
 }

 presentPopover(e?: Event) {
  //console.log('preent me', e)
   this.popover2.event = e;
   this.isOpen = true;
   this.clear()
   this.searchResult = this.items
   setTimeout(() => {
   this.setFocusOnInput('popInput2')
   }, 2000);
 }

 presentPopoverNotif(e?: Event) {
  //console.log('preent me', e)
   this.notifArr = []
   this.showNotif = false
   this.popoverNotif3.event = e;
   this.isOpenNotif = true;  
 }
 didDissmisNotif(){
  this.isOpenNotif = false
  //console.log('dismissOver') 
}
 didDissmis(){
  this.isOpen = false
  this.getItemPaysByItemId()
  this.setFocusOnInput('qtyIdP')
}


  searchItem(ev){
      this.searchResult = []
      this.aliasTerm = ev.target.value 
      const filterPipe = new FilterPipe;   
      let  fiteredArr :any = filterPipe.transform(this.items,ev.target.value); 
      if(fiteredArr.length>0){
        fiteredArr.forEach(element => {
          this.searchResult.push( element)
        });
      }    //console.log('search',this.searchResult)
    }


getItemPaysByItemId(){  
   
  this.api.getItemQtyPaysByItemId(this.store_info.id ,this.selectedItem.id,this.year.id).subscribe(data =>{
     console.log('getItemPaysByItemId',data)
     let res = data
     if(res['message'] != 'No record Found'){
       this.payTotQty = res['data'][0].salesQuantity 
     }
       this.getQtyPurchByItemId() 
    
   }, (err) => {
   //console.log(err);
   this.presentToast('1خطا في الإتصال حاول مرة اخري' , 'danger')
  
 },
 ()=>{
 })  
 }

 getQtyPurchByItemId(){ 
  this.api.getQtyPurchByItemId(this.store_info.id ,this.selectedItem.id,this.year.id).subscribe(data =>{
     //console.log('purch',data)
     let res = data
     if(res['message'] != 'No record Found'){
       this.perchTotQty = res['data'][0].perchQuantity 
       this.firstQty =    res['data'][0].firstQuantity 
     } 
     this.getQtyTswiaByItemId() 
   }, (err) => {
   //console.log(err);
   this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
 },
 ()=>{
  
 })  
 }


 getQtyTswiaByItemId(){  
  this.api.getQtyTswiaByItemId(this.store_info.id ,this.selectedItem.id,this.year.id).subscribe(data =>{
     console.log('getQtyTswiaByItemId',data)
     let res = data
     if(res['message'] != 'No record Found'){
      this.availQty = res['data'][0].availQty   
      this.qtyReal = res['data'][0].qtyReal   
     } 
     this.getQtyTotalItemId()  
   }, (err) => {
   //console.log(err);
   this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
 },
 ()=>{

 })  
 }

 getQtyTotalItemId(){  
  //console.log('perchTotQty',this.perchTotQty ,this.payTotQty )
  //تجميع الكيات السالبة وتحويلها لموجب لإضافتها للمشتريات
  if( (+this.availQty  - +this.qtyReal) < 0 ){ 
    this.perchTotQty = +this.perchTotQty +  Math.abs((+this.availQty  - +this.qtyReal))  
  }else if((+this.availQty  - +this.qtyReal) > 0 ){
    this.payTotQty = +this.payTotQty + (+this.availQty  - +this.qtyReal)  
  } 
  this.availQty = + this.perchTotQty  - +  this.payTotQty
  console.log(this.payTotQty , this.payTotQty)
} 

clear(item_name?){
 if(item_name){
  this.selectedItem = {
    id: undefined,
    dateCreated: "", 
    pay_ref:this.payInvo.pay_ref,
    item_desc: "",
    item_name: "",
    item_unit: "",
    parcode: 0,
    pay_price: 0,
    perch_price: 0,
    qty: 0,
    tot: 0, 
    aliasEn:""
  }
 }else{
  this.searchTerm = "" 
 }
}


prepareInvo(){ 
  this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",phone:"",address:""};
  this.sub_nameNew = ""
  this.radioVal = 0
  this.payInvo ={pay_id:undefined ,pay_ref:0 ,store_id:"",tot_pr:0,pay:0,pay_date:"",pay_time:"",user_id:"",cust_id:null,pay_method:"",discount:0 ,changee:0,sub_name:"",payComment:"",nextPay:null,yearId:""};
  this.discountPerc = 0
  // Clear discount related variables
  this.discountType = 'percentage';
  this.discountAmount = 0;
  this.calculatedDiscountPerc = 0;
  this.calculatedDiscountAmount = 0;
  let d = new Date
// this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
 this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd')
 
 this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss') 
 this.generateRandom()  
 this.payInvo.store_id =this.store_info.id
 this.payInvo.yearId =this.year.id
 this.payInvo.user_id = this.user_info.id
 //console.log( this.payInvo) 
 
 // Clear itemList and related arrays
 this.itemList = []
 this.sortedItemList = []
 this.isItemListSorted = false
 
 // Clear search related variables
 this.searchTerm = ''
 this.searchMatches = []
 this.highlightedIndex = -1
 
 //check if there is pending items from stock page or from sales 
  if (this.statusFromRoute === 'newInvoFromItemsPage' && this.pendingItemsFromStock.length > 0) {
      //console.log('Pending items from stock page:', this.pendingItemsFromStock);
      this.pendingItemsFromStock.forEach(item => {
      this.itemList.push({
      "id" : 'NULL',
      "pay_ref" :this.payInvo.pay_ref,
      "item_name" :item.item_name,
      "pay_price" :item.pay_price,
      "quantity" : +item.qty,
      "tot" :(+item.qty * +item.perch_price).toFixed(2),
      "store_id" :+this.store_info.id, 
      "yearId" :+this.year.id, 
      "item_id" : +item.id,
      "dateCreated" : this.datePipe.transform(d, 'dd-MM-YYYY'),
      "perch_price":item.perch_price 
        });
      });
       this.statusFromRoute = '';
       this.pendingItemsFromStock = []; // Reset status after processing
       this.getTotal()
       console.log('itemlist after the get the')
    }
    this.getSalesAccount()  
     //this.setFocusOnInput('dstP')
}


  

setFocusOnInput(Input) {
  //console.log('setFocusOnInput')
  if (Input == 'dstP') { 
    this.nameField.nativeElement.focus(); 
   } else if(Input == 'dstPop2') {
    this.dstPop2.setFocus();
    this.isOpen = true;
    this.clear()
    this.searchResult = this.items
    setTimeout(() => {
        this.popInput2.setFocus(); 
    }, 1500);
  
   }else if(Input == 'qtyIdP') {
    this.qtyIdP.setFocus();  
   }else if(Input == 'popInput2'){
    this.popInput2.setFocus();  
   }
}

getStockItems(pickName?) {
  this.storage.get('year').then((response) => {
    if (response) {
      this.year = response 
      if (this.offline == false) {
        this.loadingItems = true
        this.api.getAllStockItemsWithouteCounts(1,this.year.id).subscribe(data => {
          //console.log(data)
          let res = data
          this.items = res['data']
    
          this.items.forEach(element => {
            if(+element.tswiaQuantity > 0){
              element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
    
            }else if(+element.tswiaQuantity < 0){
              element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
            }
    
            element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
          });
          
          this.searchResult = this.items
          if(pickName){
            this.pickDetail(pickName , 'afterSave') 
          }
          this.storage.set('itemsLocal' , this.items).then((response) => {
             
          }); 
         
        }, (err) => {
          //console.log(err);
        },
          () => {
            this.loadingItems = false
          }
        )
      } else {
        this.items = this.itemsLocal
        this.items.forEach(element => {
          element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
        });
        this.searchResult = this.items
      }
    } 
  }); 
}

sumStockItems(pickName?) {
  if (this.offline == false) {
    this.api.stockItems(1,this.year.id).subscribe(data => {
      //console.log(data)
      let res = data
      let arr = res['data']
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        let flt = arr.filter(x=>x.id == element.id)
        if(flt.length>0){
          element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
        //  element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
          element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
        }
      } 
      this.items.forEach(element => {
        if(+element.tswiaQuantity > 0){
          element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 

        }else if(+element.tswiaQuantity < 0){
          element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
        }

        element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
      });
      this.searchResult = this.items
      if(pickName){
        this.pickDetail(pickName , 'afterSave') 
      }
    }, (err) => {
      //console.log(err);
    },
      () => {
      }
    )
  } else {
    this.items = this.itemsLocal
    this.items.forEach(element => {
      element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    });
    this.searchResult = this.items
  }

}

getStockItemsAfterUpdate() {
  let fl : Array<any>=[]
      if(this.searchLang == 1){
        fl= this.items.filter(x=>x.item_desc == this.selectedItem.item_desc)
       //console.log('hyrr',fl);
     }else{
        fl= this.items.filter(x=>x.item_name == this.selectedItem.item_name)
       //console.log(fl);
     }
        
    let qt = +this.selectedItem.qty
    let perch = +this.selectedItem.perch_price
    let pay = +this.selectedItem.pay_price

    //console.log(fl);
    this.selectedItem = {
      id:fl[0]['id'],
      dateCreated:fl[0]['dateCreated'],
      pay_ref:this.payInvo.pay_ref,
      item_desc:fl[0]['item_desc'],
      item_name:fl[0]['item_name'],
      item_unit:fl[0]['item_unit'],
      parcode:fl[0]['parcode'],
      pay_price:pay,
      perch_price:perch,
      qty:qt,
      tot:  (qt * +fl[0]['perch_price']).toFixed(2), 
      aliasEn:fl[0]['aliasEn']
    }
    
   
  ///
   
    this.getItemLoader =true

     let index = this.items.map(e => e.id).indexOf(this.selectedItem.id);
    console.log('item inex',this.items[index])
    if(index != -1){
      this.items[index].pay_price = this.selectedItem.pay_price
      this.items[index].perch_price = this.selectedItem.perch_price
    } 
      this.searchResult = this.items
      console.log('index',this.items)
      
       this.storage.set('itemsLocal' , this.items).then((response) => {
             this.getItemLoader =false
        });
///

 this.addTolist()

    // this.api.getAllStockItemsWithouteCounts(1,this.year.id).subscribe(data => {
    //   //console.log(data)
    //   let res = data
    //   this.items = res['data']
    //   // this.items.forEach(element => {
    //   //   if(+element.tswiaQuantity > 0){
    //   //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 

    //   //   }else if(+element.tswiaQuantity < 0){
    //   //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
    //   //   }

    //   //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    //   // });
    //   this.searchResult = this.items
    //   //console.log('searchResult after Update',this.searchResult)
    //   this.getItemLoader =false
    //   this.storage.set('itemsLocal', this.items).then((response) => {
    //   //console.log('resoponse set', response)
    //   this.storage.get('itemsLocal').then((response2) => {
    //     if (response) {
    //       this.itemsLocal = response2 
    //       this.searchResult = [] 
    //        this.items = this.itemsLocal  
    //        this.searchResult = this.items
    //     //   this.loadingController.dismiss() 
    //     }
    //   }); 
    // });  


      
    //   // this.sumStockItemsAfterUpdate()
    // }, (err) => {
    //   //console.log(err);
    //   this.getItemLoader =false
    // },
    //   () => {
    //   }
    // )
  
}

sumStockItemsAfterUpdate() { 
  if (this.offline == false) {
    this.getItemLoader =true
    this.api.stockItems(1,this.year.id).subscribe(data => {
      //console.log(data)
      let res = data
      let arr = res['data']
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        let flt = arr.filter(x=>x.id == element.id)
        if(flt.length>0){
          element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
         // element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
          element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
        }
      }   
      this.items.forEach(element => {
        if(+element.tswiaQuantity > 0){
          element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 

        }else if(+element.tswiaQuantity < 0){
          element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
        }

        element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
      });
      this.searchResult = this.items
      //console.log('searchResult after Update',this.searchResult)
      this.getItemLoader =false
      this.storage.set('itemsLocal', this.items).then((response) => {
      //console.log('resoponse set', response)
      this.storage.get('itemsLocal').then((response2) => {
        if (response) {
          this.itemsLocal = response2 
          this.searchResult = [] 
           this.items = this.itemsLocal
           this.searchResult = this.items
        //   this.loadingController.dismiss() 
        }
      }); 
    });  
    }, (err) => {
      //console.log(err);
      this.getItemLoader =false
    },
      () => {
      }
    )
  } else {
    this.items = this.itemsLocal
    this.items.forEach(element => {
      element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
    });
    this.searchResult = this.items
  } 
}

afterSync(flt){
  //push flt to local after chanch the logStatus to 1
  flt.forEach(element => {
   if(this.LogHistoryLocalArr.some(e => e.logRef === element.logRef) == false) {
     this.LogHistoryLocalArr.push(element)
   }else{
    //get index of it and replace it with value from flt
    let index = this.LogHistoryLocalArr.findIndex(x => x.logRef === element.logRef);
    if(index != -1){
      this.LogHistoryLocalArr[index] = element
    }
   }
    
  });

   //set loghistory locally  
 //console.log ('finish ' ,  this.LogHistoryLocalArr)
 this.storage.set('LogHistoryLocal',this.LogHistoryLocalArr).then((response) => {
        
 }) 
}

qtyClick(i){
  //console.log(i)
  this.showMe = i
}

hideMe(i){
  this.showMe = null 
}

editCell(i){
  const displayList = this.getDisplayItemList();
  const itemToEdit = displayList[i];
  
  // Find the corresponding item in the original itemList
  const originalIndex = this.itemList.findIndex(item => 
    item.item_name === itemToEdit.item_name && 
    item.perch_price === itemToEdit.perch_price
  );
  
  if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].perch_price > 0) {
    // Update both the display list and original list
    displayList[i].tot = +displayList[i].quantity * displayList[i].perch_price;
    this.itemList[originalIndex].quantity = displayList[i].quantity;
    this.itemList[originalIndex].perch_price = displayList[i].perch_price;
    this.itemList[originalIndex].tot = displayList[i].tot;
    
    // Reset discount but preserve pay amount
    this.discountPerc = 0
    this.payInvo.discount = 0
    this.hideMe(i)
    this.getTotal() 
  } else {
    this.presentToast("خطأ في الإدخال ", "danger")
  }
}
 

ionViewDidEnter(){
  setTimeout(() => {
    // //check all changes in case notif arr >0 
    //  this.subiscribtionNotif = this.behavApi.currentNotif.subscribe(notif=>{
    //   //console.log('notif page currentNotif behavApiRespnse',notif) 
    //    if(notif.length == 0){
    //     this.notifArr = []
    //    }else{
    //     this.notifArr =  notif[0]  
    //    }

    //   if(this.notifArr.length> 0){ 
    //     this.showNotif = true
    //     this.itemsLocal = notif[1] 
    //     this.items =  this.itemsLocal
    //     this.searchResult = this.items
    //     // this.sub_accountSales = notif[2] 
    //     // //console.log(this.sub_accountLocalSales)  
    //     this.storage.get('LogHistoryLocal').then((response) => { 
    //       if (response) {
    //         this.LogHistoryLocalArr = response  
    //       } 
    //     });
    //    // this.getSubBalance()
    //   } else {
    //     //console.log('no updates')
    //     this.showNotif = false  
    //   } 
    //   })
    }, 10000); 
} 



async presentModal2(id?, status?) {
  // if (id !='null' && status == 'edit') {
  //    let fl= this.items.filter(x=>x.id == id)
  // //console.log(fl);

  // this.selectedItem = {
  //   id:fl[0]['id'],
  //   item_desc:fl[0]['item_desc'],
  //   model:fl[0]['model'],
  //   item_name:fl[0]['item_name'],
  //   min_qty:fl[0]['min_qty'],
  //   part_no:fl[0]['part_no'],
  //   brand:fl[0]['brand'],
  //   item_unit:fl[0]['item_unit'],
  //   item_parcode:fl[0]['item_parcode'],
  //   pay_price:fl[0]['pay_price'],
  //   perch_price:fl[0]['perch_price']
  // }

   
  // }
 

  const modal = await this.modalController.create({
    component: ItemModalPage ,
    componentProps: {
      "item": this.selectedItem,
      "status": status
    }
  });
  
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      //console.log(dataReturned )
      this.doAfterDissmiss(dataReturned)
    }
  });

  return await modal.present(); 
}

getItems(pickName?) {
  if (this.offline == false) {
    this.api.getItems().subscribe(data => {
      //console.log(data)
      let res = data
      this.items = res['data']
      this.searchResult = this.items
      if(pickName){
        this.pickDetail(pickName , 'afterSave') 
      }
    }, (err) => {
      //console.log(err);
    })
  } else {
    this.items = this.itemsLocal 
    this.searchResult = this.items
  }
}

getSalesAccount(){
  if (this.offline == false) {
    this.api.getPerchAccounts(this.store_info.id ,this.year.id).subscribe(data =>{
       let res = data
       this.sub_account = res ['data']
       console.log('acccccc',this.sub_account)
        this.addSubaccountLocal()
     }, (err) => {
     //console.log(err);
   }) 
  }else{
    this.MixSubaccountSalesOffline()
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

generateRandom():any{
let da = new Date 
//console.log(da)
let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString()
this.payInvo.pay_ref = this.store_info.store_ref + randomsNumber
//console.log(randomsNumber)
//console.log(this.payInvo.pay_ref)  
}


selectFromPop(item){
   console.log(item)
  this.selectedItem = {
    id:item.id,
    dateCreated:item.dateCreated,
    pay_ref:this.payInvo.pay_ref,
    item_desc:item.item_desc,
    item_name:item.item_name,
    item_unit:item.item_unit,
    parcode:item.parcode,
    pay_price:item.pay_price,
    perch_price:item.perch_price,
    qty:"",
    tot:item.perch_price, 
    aliasEn:item.aliasEn
  } 
    this.searchTerm = item.item_name
    //console.log( this.selectedItem); 
    this.didDissmis()
    
  }

pickDetail(ev , notev?){
  let evVal 
  if(notev){
   evVal = ev
   this.searchLang = 0
  }else{
  evVal = ev.target.value
  }
  //console.log('evVal',evVal);
  let fl : Array<any>=[]
  if(this.searchLang == 1){
    fl= this.items.filter(x=>x.item_desc == evVal)
   //console.log('hyrr',fl);
 }else{
    fl= this.items.filter(x=>x.item_name == evVal)
   //console.log(fl);
 }

  
//console.log(fl);
this.selectedItem = {
  id:fl[0]['id'],
  dateCreated:fl[0]['dateCreated'],
  pay_ref:this.payInvo.pay_ref,
  item_desc:fl[0]['item_desc'],
  item_name:fl[0]['item_name'],
  item_unit:fl[0]['item_unit'],
  parcode:fl[0]['parcode'],
  pay_price:fl[0]['pay_price'],
  perch_price:fl[0]['perch_price'],
  qty:0,
  tot:fl[0]['perch_price'],
   aliasEn:fl[0]['aliasEn']
}
//console.log( this.selectedItem);
this.setFocusOnInput('qtyIdP')

}

qtyhange(ev){
//console.log(ev);
this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2)
}


payPricehange(ev){
  if((+this.selectedItem.perch_price >= +this.selectedItem.pay_price) && (+this.selectedItem.perch_price > 0 && +this.selectedItem.pay_price >0)){
    this.presentToast('سعر الشراء اعلي من سعر البيع ' , 'warning')
  }
//console.log(ev);
this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2)
}

perchPricehange(ev){
  if((this.selectedItem.perch_price >= this.selectedItem.pay_price) &&  this.selectedItem.perch_price > 0 && this.selectedItem.pay_price >0){
    this.presentToast('سعر الشراء اعلي من سعر البيع ' , 'warning')
  }
//console.log(ev);
this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2)
}

payChange(ev){
//console.log(ev); 
this.payInvo.changee = +( this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value 
}


onDiscountTypeChange(event: any) {
    this.discountType = event.detail.value;
    // Reset discount values when switching types
    this.discountPerc = 0;
    this.discountAmount = 0;
    this.payInvo.discount = 0;
    this.calculatedDiscountPerc = 0;
    this.calculatedDiscountAmount = 0;
    this.calculateChange();
  }

  onPercentageDiscountChange(event: any) {
    this.discountPerc = event.target.value || 0;
    if (this.payInvo.tot_pr > 0) {
      // Calculate discount amount based on percentage
      this.calculatedDiscountAmount = (+this.payInvo.tot_pr * +this.discountPerc / 100);
      this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
      this.calculateChange();
    }
  }

   onAmountDiscountChange(event: any) {
    this.discountAmount = event.target.value || 0;
    if (this.payInvo.tot_pr > 0 && this.discountAmount > 0) {
      // Calculate discount percentage based on amount
      this.calculatedDiscountPerc = ((+this.discountAmount / +this.payInvo.tot_pr) * 100);
      this.payInvo.discount = this.discountAmount;
      this.calculateChange();
    } else {
      this.calculatedDiscountPerc = 0;
      this.payInvo.discount = 0;
      this.calculateChange();
    }
  }

  calculateChange() {
    this.payInvo.changee = +(this.payInvo.tot_pr - +this.payInvo.discount) - this.payInvo.pay;
  }


    getTotal() {
    let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
    this.payInvo.tot_pr = sum - +this.payInvo.discount;
    this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
    this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
    this.payInvo.changee = this.payInvo.changee.toFixed(2);
    
    // Recalculate discount labels when total changes
    if (this.discountType === 'percentage' && this.discountPerc > 0) {
      this.calculatedDiscountAmount = (sum * +this.discountPerc / 100);
    } else if (this.discountType === 'amount' && this.discountAmount > 0) {
      this.calculatedDiscountPerc = ((+this.discountAmount / sum) * 100);
    }
  }

// getTotal(){
// let sum = this.itemList.reduce( (acc, obj)=> { return acc + +obj.tot; }, 0);
// //console.log('sum', sum)
// this.payInvo.tot_pr = sum - +this.payInvo.discount
// this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay
// this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2)
// this.payInvo.changee = this.payInvo.changee.toFixed(2)
// } 



discountChange(ev){
  //console.log('discountChange' ,ev); 
  this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 )
  this.payInvo.changee = +( this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay
}

discountPerChange(ev){
  //console.log('discountPerChange',ev);
  this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
  this.payInvo.changee = +( this.payInvo.tot_pr -  this.payInvo.discount ) - this.payInvo.pay
}
deleteItem(index){
//console.log( index); 
const displayList = this.getDisplayItemList();
const itemToDelete = displayList[index];

// Find the item in the original itemList and remove it
const originalIndex = this.itemList.findIndex(item => 
  item.item_name === itemToDelete.item_name && 
  item.perch_price === itemToDelete.perch_price &&
  item.quantity === itemToDelete.quantity
);

if (originalIndex !== -1) {
  this.itemList.splice(originalIndex, 1);
}

// Reset discount but preserve pay amount
this.discountPerc = 0
this.payInvo.discount = 0 
this.getTotal()
this.updateSortedList()
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



chechPrice(cases?){
  if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
    this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger')
  } else {
    if (cases == 'check'){
        if(+this.selectedItem.perch_price >= +this.selectedItem.pay_price){
          this.priceChangeAlertConfirm()
        }else{
          this.addTolist()
        }
      }else if(cases == 'uncheck'){
      ///update item => getiTEmstock and sysnc=> reselectItem => addtolist\
      this.updateItemDetail()
      }  
  }
 
}

///
  onItemSelected(selectedItem: any) {
    console.log('Item selected:', selectedItem);
    // You can perform any additional logic when an item is selected
    // For example, update availability or perform validations
  }

  onItemAdded(selectedItem: any) {
    console.log('Item to be added:', selectedItem);
   
    // Check if item already exists in the list
    let existingItem = this.itemList.find(item => 
      item.item_name === selectedItem.item_name && 
      item.perch_price === selectedItem.perch_price
    );

    if (existingItem) {
      // Update existing item quantity
      let newQty = +existingItem.quantity + +selectedItem.qty;
      
    
      
      existingItem.quantity = newQty;
      existingItem.tot = (newQty * +existingItem.perch_price).toFixed(2);
    } else {
      // Add new item to list
      let d = new Date();
      let r = this.datePipe.transform(d, 'dd-MM-YYYY');

      this.itemList.push({
        "id": 'NULL',
        "pay_ref": this.payInvo.pay_ref,
        "item_name": selectedItem.item_name,
        "pay_price": selectedItem.pay_price,
        "quantity": +selectedItem.qty,
        "tot": (selectedItem.qty * +selectedItem.perch_price).toFixed(2),
        "store_id": +this.store_info.id,
        "yearId": +this.year.id,
        "item_id": +selectedItem.id,
        "dateCreated": r,
        "perch_price": selectedItem.perch_price
      });
    }

    
    this.getTotal();
    this.updateSortedList();
    
    // this.presentToast('تم إضافة الصنف بنجاح', 'success');
  }


addTolist() { 
  if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
    this.presentToast('الرجاء ادختيار الصنف وتحديد الكمية', 'danger')
  } else {
    let fl: any = []
    if (this.itemList.length > 0) {
      fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name &&  x.perch_price == this.selectedItem.perch_price)
    }
    if (fl.length == 0) {
      let d =   new Date
      let r= this.datePipe.transform(d, 'dd-MM-YYYY')
    
      this.itemList.push({
      "id" : 'NULL',
      "pay_ref" :this.selectedItem.pay_ref,
      "item_name" :this.selectedItem.item_name,
      "pay_price" :this.selectedItem.pay_price,
      "quantity" : +this.selectedItem.qty,
      "tot" :(+this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2),
      "store_id" :+this.store_info.id, 
      "yearId" :+this.year.id, 
      "item_id" : +this.selectedItem.id,
      "dateCreated" : r,
      "perch_price":this.selectedItem.perch_price
      })
    } else {
      //console.log(this.itemList);
      //console.log(fl[0].quantity);
      //console.log(+this.selectedItem.qty);

      this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty
      let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
      this.itemList[index].quantity = +this.selectedItem.qty
      this.itemList[index].tot = (+this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2)
     // this.itemList[index].tot.toFixed(2)
     
    }

      this.selectedItem = {
        id: undefined,
        dateCreated: "", 
        pay_ref:this.payInvo.pay_ref,
        item_desc: "",
        item_name: "",
        item_unit: "",
        parcode: 0,
        pay_price: 0,
        perch_price: 0,
        qty: 0,
        tot: 0,
        aliasEn:""
      }
      this.discountPerc = 0
      this.payInvo.discount = 0
      
      this.getTotal()
      this.updateSortedList()
      this.setFocusOnInput('dstPop2')
    }

}

validate():boolean{
 
  
if (this.itemList.length == 0  || this.payInvo.pay_ref == "" ) {
  this.presentToast('الرجاء ادخال اصناف الي القائمة','danger')
  return false
}  
 else if(+this.payInvo.cust_id == 0 ) {
  this.presentToast('الرجاء إختيار حساب العميل','danger')
  return false
}
else if(this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
  this.presentToast('الرجاء تحديد التاريخ ','danger')
  return false
}else if(this.payInvo.changee < 0 ) {
  this.presentToast('الرجاء مراجعة المبلغ المستلم والخصم  ','danger')
  return false
} 
 else {
  return true
}
}

save() { 
  let d : Date = this.payInvo.pay_date 
  
  this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd')
  
  
    if (this.validate() == true) {
       this.presentLoadingWithOptions('جاري حفظ البيانات ...')
       this.saveInvo()    
        
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
    sub_balance:fl[0]['sub_balance'],
    cat_id:fl[0]['cat_id'],
    cat_name:fl[0]['cat_name'],
    phone:fl[0]['phone'],
    address:fl[0]['address'] 
  }
  //console.log( this.selectedAccount);
  this.payInvo.cust_id = this.selectedAccount.id
  this.payInvo.sub_name = this.selectedAccount.sub_name
  //  this.setFocusOnInput()
}else{
    this.presentToast('خطأ في اسم الحساب ', 'danger') 
    this.selectedItem.item_name =""
  }
  }

preparenewaccount(){ 
  if (this.selectedAccount.sub_name.length>0 && this.selectedAccount.id == null) {
    // this.selectedAccount.sub_name = this.payInvo.sub_name  
  } else {
     //console.log('slwcted from drop' ) 
      this.selectedAccount.sub_name = this.sub_nameNew
      this.payInvo.sub_name  =this.selectedAccount.sub_name  
}
  this.selectedAccount.id=null  
  this.selectedAccount.ac_id = 2
  this.selectedAccount.sub_type="credit"
  this.selectedAccount.sub_code=null
  this.selectedAccount.sub_balance="0"
  this.selectedAccount.cat_id = 2
  this.selectedAccount.cat_name = 'الموردين'
  this.selectedAccount.store_id=this.store_info.id  
  //console.log('preparenewaccount' , this.selectedAccount)
}


saveSubAccount(){
//console.log('crea accoun')      
this.preparenewaccount()
this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
//console.log(data)
if (data['message'] != 'Post Not Created') {
  this.payInvo.cust_id =  data['message'] 
   //حالة الحساب موجود محلي والحفظ انلاين يسحب من المحلي ويضاف سsalesaccount   
   if(this.radioVal == 0 && this.selectedAccount.id == null && this.offline == false) {
    this.sub_accountLocalPurch = this.sub_accountLocalPurch.filter(x=>x.sub_name != this.selectedAccount.sub_name)
    //console.log('imhereeeeeeeeeeeeeeeeee')
    this.storage.set('sub_accountLocalPurch', this.sub_accountLocalPurch).then((response) => {
    //console.log('resoponse set', this.sub_accountLocalPurch)
    this.selectedAccount.id = this.payInvo.cust_id
    this.sub_accountPurch.push(this.selectedAccount)
    this.storage.set('sub_accountPurch', this.sub_accountPurch).then((response) => {

    })
   });
  }


  this.logHistoryArr.push(
    {
      "id":null,
      "logRef":this.generateRandom2('insert supplier'),
      "userId":this.user_info.id,
      "typee":'insert supplier',
      "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
      "logStatus":0,
      "logToken":JSON.stringify(this.selectedAccount)  ,
      "yearId":this.year.id,
      "store_id":this.store_info.id
    }
  )
  this.saveInvo()
}else {
   this.presentToast('لم يتم انشاء حساب للمورد , خطا في الإتصال حاول مرة اخري' , 'danger')
} 
  }, (err) => {
//console.log(err);
this.presentToast('لم يتم انشاء حساب للمورد , خطا في الإتصال حاول مرة اخري' , 'danger')
 },()=>{
 this.loadingController.dismiss()
 })
}


saveSubAccountlocal(){
  //console.log('crea accoun')
  this.preparenewaccount()
// add new account to acount list tobe available in next load
if (!this.sub_account) {
  this.sub_account = [] 
 }  

 this.sub_account.push(
  this.selectedAccount
 )
  this.sub_accountLocalPurch.push(
    this.selectedAccount
  )
  this.storage.set('sub_accountLocalPurch', this.sub_accountLocalPurch).then((response) => {
    //console.log('resoponse set', this.sub_accountLocalPurch)
   // this.payInvo.cust_id =  data['message']
    this.saveInvoLocal()
  });
 }

 saveInvoLocal() {
  //console.log('resoponse set', this.payInvo.sub_name)
 // this.payInvo.sub_name = this.selectedAccount.sub_name
  this.purchLocal.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  })
  this.storage.set('purchLocal', this.purchLocal).then((response) => {
    //console.log('resoponse set', response)
    this.printArr = []
  this.printArr.push({
    'payInvo': this.payInvo,
    'itemList':this.itemList,
    'selectedAccount' : this.selectedAccount,
    'sub_nameNew' : this.sub_nameNew
  }) 
  //console.log(this.printArr)
    this.presentAlertConfirm()
    this.presentToast('تم الحفظ بنجاح', 'success')
  });
}

saveInvo(){
  // Optimized: Save invoice and items together in single API call
  const invoiceWithItems = {
    invoice: this.payInvo,
    items: this.itemList
  };
  
  this.api.savePerchInvoWithItems(invoiceWithItems).subscribe(
    (response: any) => {
      this.handleSaveSuccess();
    }, 
    (err) => {
      this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
    }
  );
}

private handleSaveSuccess() {
  
  // Prepare print array
  this.printArr = [];
  this.printArr.push({
    'payInvo': this.payInvo,
    'itemList': this.itemList,
    'selectedAccount': this.selectedAccount,
    'sub_nameNew': this.sub_nameNew
  });

  // Update local purchase storage
  this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
  this.purchase.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  });
  
  this.storage.set('purchase', this.purchase).then((response) => {
    // Purchase saved to local storage
  });

  // Prepare log history
  let arr: Array<any> = [];
  arr.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  });
  
  this.logHistoryArr.push({
    "id": null,
    "logRef": this.generateRandom2('insert purchase'),
    "userId": this.user_info.id,
    "typee": 'insert purchase',
    "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
    "logStatus": 0,
    "logToken": JSON.stringify(arr[0]),
    "yearId": this.year.id,
    "store_id": this.store_info.id
  });

  this.presentToast('تم الحفظ بنجاح', 'success');
  
  // Show journal entry confirmation for all purchase invoices
  this.presentJournalEntryConfirmation();
  
  // Dismiss loading
  this.loadingController.dismiss();
}

saveitemList(){  
this.api.savePerchitemList(this.itemList).subscribe(data=>{ 
  //console.log(data) 
  this.printArr = []
  this.printArr.push({
    'payInvo': this.payInvo,
    'itemList':this.itemList,
    'selectedAccount' : this.selectedAccount,
    'sub_nameNew' : this.sub_nameNew
  }) 
  //console.log(this.printArr)
  this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
       //console.log(' case ffff ' ,this.purchase)
       this.purchase.push({
        "payInvo": this.payInvo,
        "itemList": this.itemList 
      }) 
      this.storage.set('purchase', this.purchase).then((response) => {
      //console.log('purchase', response) 
      })


      let arr:Array<any> = []
      arr.push({
        "payInvo": this.payInvo,
        "itemList": this.itemList 
      })
      this.logHistoryArr.push(
        {
          "id":null,
          "logRef":this.generateRandom2('insert purchase'),
          "userId":this.user_info.id,
          "typee":'insert purchase',
          "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
          "logStatus":0,
          "logToken":JSON.stringify(arr[0]),
          "yearId":this.year.id,
          "store_id":this.store_info.id
        }
        )
      this.presentAlertConfirm() 
      this.presentToast('تم الحفظ بنجاح' , 'success')
      
      // Navigate back if coming from items page
      if (this.showBackButton) {
        setTimeout(() => {
          this.goBack();
        }, 1500); // Give time for toast to show
      }
}, (err) => {
  //console.log(err);
  this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
}, () => {
  this.loadingController.dismiss()
}
)      
}


generateRandom2(role):any{
  let da = new Date 
  //console.log(da)
  let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString() + role
  return this.store_info.store_ref + randomsNumber 
}

 


  saveLogHistory(){  
    //let mdata =  this.prepareLogHistory(itemData , firstq , role) 
    //console.log('this.logHistoryArr[0]',this.logHistoryArr[0])
     let role
     let cust
     let invo 
     if (this.logHistoryArr.length > 1) {
      invo = this.logHistoryArr[1]
      cust = this.logHistoryArr[0]
      role = 'new account'
     } else {
      invo = this.logHistoryArr[0]
      role = undefined
     }
    this.api.saveLogHistoryMultiSales(invo ,cust,role).subscribe(data => {
     //console.log(data)
     if (data['message'] != 'Post Not Created') { 
      this.logHistoryArr = []
      this.presentAlertConfirm() 
      this.presentToast('تم الحفظ بنجاح' , 'success') 
     }else{
       this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
     }
   }, (err) => {
     //console.log(err);
     this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
   }) 
  }


  saveLogHistoryForInsertItem(){  
    //let mdata =  this.prepareLogHistory(itemData , firstq , role) 
    //console.log('this.logHistoryArr[0]',this.logHistoryArr[0])
    
     let firstq
     let item 
     if (this.logHistoryArr.length > 1) {
      item = this.logHistoryArr[1]
      firstq = this.logHistoryArr[0] 
     }  
    this.api.saveLogHistoryMulti(item ,firstq,'insert').subscribe(data => {
     //console.log(data)
     if (data['message'] != 'Post Not Created') { 
     this.logHistoryArr = []
     
     }else{
       this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
     }
   }, (err) => {
     //console.log(err);
     this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
   }) 
  }

  saveLogHistoryForUpdateItem(){  
    //let mdata =  this.prepareLogHistory(itemData , firstq , role) 
    //console.log('this.logHistoryArr[0]',this.logHistoryArr[0])
     let role
     let cust
     let invo 
     
    this.api.saveLogHistoryMulti(this.logHistoryArr[0] ,undefined,'update').subscribe(data => {
     //console.log(data)
     if (data['message'] != 'Post Not Created') { 
     this.logHistoryArr = []
     }else{
       this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
     }
   }, (err) => {
     //console.log(err);
     this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
   }) 
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
   this.prepareInvo()
  }
});

return await modal.present(); 
}

async presentLoadingWithOptions(msg?) {
const loading = await this.loadingController.create({
  spinner: 'bubbles',
  mode:'ios',
  duration: 5000,
  message: msg,
  translucent: true,
 // cssClass: 'custom-class custom-loading',
  backdropDismiss: false
});
await loading.present();

const { role, data } = await loading.onDidDismiss();
//console.log('Loading dismissed with role:', role);
}
//
doAfterDissmiss(data){
  if (data.role == 'save' ) {
    //console.log('edit' ,data.data)
    this.saveItem(data.data )  
  } 
}

saveItem(mdata){ 
  //prepare log history
  // this.logHistoryArr.push(
  //   {
  //     "id":null,
  //     "logRef":this.generateRandom2('insert item'),
  //     "userId":this.user_info.id,
  //     "typee":'insert item',
  //     "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
  //     "logStatus":0,
  //     "logToken":JSON.stringify(mdata[0]),
  //     "yearId":this.year.id,
  //     "store_id":this.store_info.id
  //   }
  //   )
 console.log('mdata[0]',mdata[0])
 this.presentLoadingWithOptions('جاري حفظ البيانات ...')
 this.api.saveitemMulti(mdata[0]).subscribe(data => {
   //console.log(data)
   if (data['message'] != 'Post Not Created') {
      let item_id = data['message']
     this.firstq = {id:null ,item_id:item_id, store_id:this.store_info.id , quantity :mdata[1].quantity ,pay_price:mdata[0].pay_price,perch_price:mdata[0].perch_price ,fq_year:'2022' ,item_name:mdata[0].item_name}
     this.saveFierstQty(mdata ) 
   }else{
     this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
   }
  
 }, (err) => {
   //console.log(err);
   this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
 }) 
}

async saveFierstQty(meta){  
this.api.saveFirstQty(this.firstq).subscribe(data=>{ 
 //console.log(data)  
  //this.getItems(item_name
  this.logHistoryArr.push(
    {
      "id":null,
      "logRef":this.generateRandom2('insert firstq'),
      "userId":this.user_info.id,
      "typee":'insert firstq',
      "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
      "logStatus":0,
      "logToken":JSON.stringify(this.firstq),
      "yearId":this.year.id,
      "store_id":this.store_info.id
    }
    )

    
  // this.performSyncItem()
    // update selected item from meta data 
    this.selectedItem = {
      id:this.firstq.item_id,
      dateCreated:"",
      pay_ref:this.payInvo.pay_ref,
      item_desc:meta[0].item_desc,
      item_name:meta[0].item_name,
      item_unit:meta[0].item_unit,
      parcode:meta[0].parcode,
      pay_price:meta[0].pay_price,
      perch_price:meta[0].perch_price,
      qty:1,
      tot:meta[0].perch_price,
      aliasEn:meta[0].aliasEn
    }
     this.setFocusOnInput('qtyIdP')
     this.getItemLoader =true 
     
  // push meta data to items array
  this.items.push({
    "aliasEn":meta[0].aliasEn,   
    "availQty":meta[1].quantity,
    "brand":meta[0].brand,
    "firstQuantity":meta[1].quantity,
    "id":this.firstq.item_id,
    "item_desc":meta[0].item_desc,
    "item_name":meta[0].item_name,
    "item_parcode":meta[0].item_parcode,
    "item_unit":meta[0].item_unit,
    "min_qty":meta[0].min_qty,
    "model":meta[0].model,
    "part_no":meta[0].part_no,
    "pay_price":meta[0].pay_price,
    "perch_price":meta[0].perch_price,
    "qtyReal":0, 
    "salesQuantity":0,
    "totalCount":0,
    "tswiaQuantity":0
  })
     
      this.searchResult = this.items
      console.log('index',this.items)
       this.storage.set('itemsLocal' , this.items).then((response) => {
             this.getItemLoader = false
        });

 
     
}, (err) => {
 //console.log(err);
 this.presentToast('1لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
 this.loadingController.dismiss()
}, () => {
 this.loadingController.dismiss()
}
)      
}

async  performSync(){
   await this.saveLogHistory() 
    await this.getStockItems( ) 
  }

  ionViewDidLeave(){
    //console.log('ionViewWillLeave') 
   // this.subiscribtionNotif.unsubscribe()
  } 
  
async  performSyncItem(item_name?){
 // await this.saveLogHistoryForInsertItem()
  if(item_name){
    await this.getStockItems(item_name)
  }else{ 
    await  this.getAllStockItemsWithouteCounts() 
  } 
}

  async  performSync2(){
    //await this.saveLogHistoryForUpdateItem()
   // await this.getAllStockItemsWithouteCounts()
    //update item in items array 
   
    await this.getStockItemsAfterUpdate()   
  }

  sortItemListAlphabetically() {
    if (!this.itemList || this.itemList.length === 0) {
      return;
    }
    
    if (this.isItemListSorted) {
      // If already sorted, restore original order
      this.sortedItemList = [...this.itemList];
      this.isItemListSorted = false;
    } else {
      // Sort alphabetically by item_name
      this.sortedItemList = [...this.itemList].sort((a, b) => {
        const nameA = a.item_name ? a.item_name.toString().toLowerCase() : '';
        const nameB = b.item_name ? b.item_name.toString().toLowerCase() : '';
        return nameA.localeCompare(nameB, 'ar', { numeric: true });
      });
      this.isItemListSorted = true;
    }
  }

  // New methods for journal entry workflow
  async presentJournalEntryConfirmation() {
    const totalAfterDiscount = (+this.payInvo.tot_pr - +this.payInvo.discount);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'تأكيد دفع المبلغ',
      mode: 'ios',
      message: `هل تريد دفع مبلغ ${totalAfterDiscount.toFixed(2)} للمورد الآن؟`,
      buttons: [
        {
          text: 'لا، انتقل للطباعة مباشرة',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.presentAlertConfirm();
            this.cleanupAfterInvoice();
          }
        },
        {
          text: 'نعم، دفع المبلغ',
          handler: () => {
            this.showJournalEntryDialog();
          }
        }
      ]
    });
    await alert.present();
  }

  showJournalEntryDialog() {
    
    const totalAfterDiscount = (+this.payInvo.tot_pr - +this.payInvo.discount);
    
    this.invoiceJournalData = {
      invoiceAmount: totalAfterDiscount,
      totalAfterDiscount: totalAfterDiscount,
      customerAccount: this.selectedAccount,
      customerBalance: this.customerBalance,
      invoiceRef: this.payInvo.pay_ref,
      invoiceType: 'purchase',
      invoiceDate: this.payInvo.pay_date,
      store_info: this.store_info,
      user_info: this.user_info,
      year: this.year
    };
    
    this.showJournalEntryModal = true;
  }

  onJournalSaved(success: boolean) {
    this.showJournalEntryModal = false;
    
    if (success) {
      this.presentToast('تم حفظ قيد اليومية بنجاح', 'success');
    }
    
    // In modal mode, close modal directly after journal entry
    if (this.modalMode) {
      setTimeout(() => {
        this.modalController.dismiss({ success: true, data: this.payInvo, journalSaved: success });
      }, 1000); // Give time for toast to show
    } else {
      // Show print confirmation for regular page mode
      setTimeout(() => {
        this.presentAlertConfirm();
      }, 500);
    }
    
    this.cleanupAfterInvoice();
  }

  onJournalCancelled() {
    this.showJournalEntryModal = false;
    
    // In modal mode, close modal directly after cancelling journal entry
    if (this.modalMode) {
      setTimeout(() => {
        this.modalController.dismiss({ success: true, data: this.payInvo, journalSaved: false });
      }, 500); // Small delay for smooth transition
    } else {
      // Show print confirmation for regular page mode
      setTimeout(() => {
        this.presentAlertConfirm();
      }, 500);
    }
    
    this.cleanupAfterInvoice();
  }

  private cleanupAfterInvoice() {
    this.prepareInvo();
    this.status = 'new';
    
    // Navigate back if coming from items page
    if (this.showBackButton) {
      setTimeout(() => {
        this.goBack();
      }, 1500);
    }
  }

  goBack() {
    if (this.modalMode) {
      this.modalController.dismiss();
    } else {
      this._location.back();
    }
  }

  getDisplayItemList() {
    return this.sortedItemList.length > 0 ? this.sortedItemList : this.itemList;
  }

  updateSortedList() {
    if (this.isItemListSorted) {
      this.sortItemListAlphabetically();
    } else {
      this.sortedItemList = [...this.itemList];
    }
  }

  onSearchTermChange() {
    this.searchMatches = [];
    this.highlightedIndex = -1;
    
    if (this.searchTerm.trim() === '') {
      return;
    }
    
    const displayList = this.getDisplayItemList();
    const searchTermLower = this.searchTerm.toLowerCase().trim();
    
    displayList.forEach((item, index) => {
      if (item.item_name && item.item_name.toLowerCase().includes(searchTermLower)) {
        this.searchMatches.push(index);
      }
    });
    
    if (this.searchMatches.length > 0) {
      this.highlightedIndex = 0;
      this.scrollToHighlightedItem();
    }
  }

  navigateSearch(direction: 'next' | 'prev') {
    if (this.searchMatches.length === 0) return;
    
    if (direction === 'next') {
      this.highlightedIndex = (this.highlightedIndex + 1) % this.searchMatches.length;
    } else {
      this.highlightedIndex = this.highlightedIndex <= 0 ? this.searchMatches.length - 1 : this.highlightedIndex - 1;
    }
    
    this.scrollToHighlightedItem();
  }

  scrollToHighlightedItem() {
    if (this.highlightedIndex >= 0 && this.searchMatches.length > 0) {
      const targetIndex = this.searchMatches[this.highlightedIndex];
      setTimeout(() => {
        const tableContainer = document.querySelector('.table-container');
        const targetRow = document.querySelector(`tr[data-index="${targetIndex}"]`);
        if (tableContainer && targetRow) {
          targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }

  isHighlighted(index: number): boolean {
    return this.searchMatches.includes(index) && this.searchMatches[this.highlightedIndex] === index;
  }

  isSearchMatch(index: number): boolean {
    return this.searchMatches.includes(index);
  }

  clearSearch() {
    this.searchTerm = '';
    this.searchMatches = [];
    this.highlightedIndex = -1;
  }

  getSearchResultText(): string {
    if (this.searchTerm.trim() === '') return '';
    if (this.searchMatches.length === 0) return 'لا توجد نتائج';
    return `${this.highlightedIndex + 1} من ${this.searchMatches.length}`;
  }

  highlightText(text: string, searchTerm: string): string {
    if (!text || !searchTerm.trim()) {
      return text || '';
    }
    
    const regex = new RegExp(`(${searchTerm.trim()})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
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
        phone: account.phone,
        address: account.address
      };
      
      // Update invoice with selected account
      this.payInvo.cust_id = account.id;
      this.payInvo.sub_name = account.sub_name;
      
      console.log('Account selected in purchase:', this.selectedAccount);
    }
  }

  // Handle account balance loaded
  onAccountBalanceLoaded(balance: any) {
    if (balance && this.selectedAccount) {
      // Store the balance for invoice journal entry
      this.customerBalance = balance;
      console.log('Account balance loaded in purchase:', balance);
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

}

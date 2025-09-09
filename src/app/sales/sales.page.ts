import { Component, OnInit, ViewChild, ElementRef ,Renderer2,Input, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable, Subscription } from 'rxjs';
import { AlertController, Platform ,IonInput, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { DatePipe ,Location} from '@angular/common';
import { Storage } from '@ionic/storage';
import { AuthServiceService } from '../auth/auth-service.service';
import { PrintModalPage } from '../print-modal/print-modal.page';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from './pipe';
import { FilterPipe2 } from './pipe2';
import { FilterPipe3  } from './pipe3';
import { element } from 'protractor';
import { StockServiceService } from '../syncService/stock-service.service';
import { AccountCommunicationService } from '../services/account-communication.service';
import { PriceAdjustmentDialogComponent } from '../component/price-adjustment-dialog/price-adjustment-dialog.component';
import { InvoiceJournalEntryComponent, InvoiceJournalData } from '../component/invoice-journal-entry/invoice-journal-entry.component';
import { CurrencyService } from '../services/currency.service';
import * as momentObj from 'moment';
 
@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
 
  
 
export class SalesPage implements OnInit, OnDestroy { 
  @ViewChild("dst") nameField: ElementRef;
  @ViewChild('dstPop') dstPop;
  @ViewChild('qtyId') qtyId; 
  @ViewChild('popInput') popInput; 
  @ViewChild('popover') popover;
  @ViewChild('popoverNotif') popoverNotif;

 discountType: string = 'percentage'; // 'percentage' or 'amount'
  discountAmount: number = 0;
  calculatedDiscountPerc: number = 0;
  calculatedDiscountAmount: number = 0;

  isOpen = false; 
  isOpenNotif = false ;
  newNotif = false ; 
  sub_account:Array<any> =[]
  sub_accountLocalSales:Array<any> =[]
  sub_accountSales:Array<any> =[]
  initialInvoices:Array<any> =[]
  items:Array<any> =[]
  itemsLocal:Array<any> =[]
  itemList:Array<any> =[]
  sortedItemList:Array<any> =[]
  isItemListSorted:boolean = false
  searchTerm:string = ''
  highlightedIndex:number = -1
  searchMatches:number[] = []
  salesLocal:Array<any> =[]
  sales:Array<any> =[]
  notifArr:Array<any> =[]
  LogHistoryLocalArr:Array<any> =[]
  purchLocal:Array<any> =[] 
  purchase:Array<any> =[]
  randomsNumber:Array<any> =[]
  store_info : {id:any , location :any ,store_name:any , store_ref:any }
  user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
  sub_nameNew :any = ""
  discountPerc : any = 0
  selectedItem : {id:any ,pay_ref:any,item_name:any,pay_price:any,perch_price:any,item_unit:any,item_desc:any,parcode:any,qty:any,tot:any ,dateCreated:any,availQty:any,aliasEn:any,tax:any,imageUrl:any};
  selectedAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any ,cat_id:any,cat_name:any,phone:any,address:any,currentCustumerStatus:any};
  payInvo : {pay_id:any ,pay_ref:any ,store_id:any,tot_pr:any,pay:any,pay_date:any,pay_time:any,user_id:any,cust_id:any,pay_method:any,discount:any ,changee:any,sub_name:any,payComment:any,nextPay:any, yearId:any}  
  radioVal2 : any = 0  // Keep this for initial/final invoice type
  
  
  // Account communication subscription
  private customerSubscription: Subscription;
  private currencySubscription: Subscription;
  printMode :boolean = false
  printArr:Array<any> =[]
  offline: boolean = false;
  color :any ='dark'
  showMe = null
  status:any = 'new'
  searchLang :any = 0
  currentCustumerStatus :any
  aliasTerm :any =""
  searchResult :Array<any> =[]
  aliasResult :Array<any> =[]
  finalResult :Array<any> =[]
  year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
  loadingItems:boolean = false
  logHistoryArr:Array<any>=[];
  subiscribtionItem:Subscription
  subiscribtionNotif:Subscription
  showNotif = false
  device :any = ""
  currenQty:any = 0
  firstQty:any = 0
  perchTotQty:any = 0
  payTotQty:any = 0
  perchTot :any = 0
  qtyReal:any = 0
  availQty :any = 0

  pendingItemsFromStock: Array<any> = [];
  
  // Default category from localStorage
  defaultCategoryId: any = null;
  statusFromRoute: string = '';
  showBackButton: boolean = false;
  
  // New workflow properties
  showJournalEntryModal: boolean = false;
  invoiceJournalData: InvoiceJournalData = null;
  customerBalance: any = null;
  
  // Loading state management
  isSaving: boolean = false;
  isDeleting: boolean = false;
  isUpdating: boolean = false;
  currentLoadingMessage: string = '';
  private currentLoader: any = null;
  constructor(private rout : Router ,private platform:Platform,private behavApi:StockServiceService ,private _location: Location, private route: ActivatedRoute,private renderer : Renderer2,private modalController: ModalController,private alertController: AlertController, private authenticationService: AuthServiceService,private storage: Storage,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController, private accountCommunicationService: AccountCommunicationService, private cdr: ChangeDetectorRef, private currencyService: CurrencyService) {
  this.selectedAccount = {id:"",ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",phone:"",address:"",currentCustumerStatus:0};
    this.route.queryParams.subscribe(params => {
      
      if (params && params.payInvo) {
        this.status = 'initial'
        this.payInvo = JSON.parse(params.payInvo);
      //  this.payInvo.yearId = this.year.id
        console.log('params && params.payInvo' , this.payInvo)
        
        if(this.payInvo.cust_id == null){
          // Account will be set via account-selector
          this.sub_nameNew = JSON.parse(params.sub_name)
        }else{
          this.selectedAccount.sub_name = JSON.parse(params.sub_name);
        }
        this.user_info = JSON.parse(params.user_info);
        this.store_info = JSON.parse(params.store_info);
        this.itemList = JSON.parse(params.itemList);
        this.resortItemList()
        //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name )
        this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
       
        this.getAppInfoCase2()
       } else if (params['status'] === 'newInvoFromItemsPage' && params['selectedItemsList']) {
         console.log('New invoice from items page');
          this.statusFromRoute = params['status'];
          this.pendingItemsFromStock = JSON.parse(params['selectedItemsList']);
          this.showBackButton = true; // Show back button when coming from items page
          console.log('Received items from stock page:', this.pendingItemsFromStock);
      }  
    });
    
    this.printArr.push({
      'payInvo': "",
      'itemList':"",
       'selectedAccount' :"",
        'sub_nameNew' : "",
         "userInfo" : "" ,
         "sub_balanse": 0,
         "balanceStatus": ""
    })
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
      availQty:0,
      aliasEn:"",
      tax:0,
      imageUrl:""
    }
  }

  
    ngOnInit() {  
     // Check category visibility setting
     
     // Ensure discountType is properly initialized
     if (!this.discountType) {
       this.discountType = 'percentage';
       this.cdr.detectChanges();
     }
     
     // Initialize currency service
     this.initializeCurrency();
     
     // Subscribe to customer selection from account-selector
     this.customerSubscription = this.accountCommunicationService.customerSelected$.subscribe(
       ({id, account}) => {
         if (id && this.payInvo) {
           console.log('Customer selected in sales, setting cust_id:', id);
           this.payInvo.cust_id = id;
           this.payInvo.sub_name = account.sub_name;
           this.selectedAccount = account;
           console.log('Sales payInvo updated:', this.payInvo);
         }
       }
     );
     
     if(this.status == 'new'){
      this.getAppInfo()  
    // this.newLogic()
     }else if(this.status == 'initial'){
      this.getAppInfoCase2() 
      this.radioVal2 = 0  
     }
    // this.getStockItems()
    
    }

  async ngOnDestroy() {
    // Clean up loading states
    await this.hideLoading();
    
    // Clean up subscriptions
    if (this.customerSubscription) {
      this.customerSubscription.unsubscribe();
    }
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }

  async initializeCurrency() {
    try {
      await this.currencyService.initializeCurrency();
      await this.currencyService.loadSupportedCurrencies();
      
      // Load currency rates when year and store info are available
      if (this.store_info && this.year) {
        await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
      }
      
      // Subscribe to currency changes
      this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
        this.cdr.detectChanges();
      });
    } catch (error) {
      console.error('Error initializing currency:', error);
    }
  }

    presentPopover(e?: Event) {
     //console.log('preent me', e)
      this.popover.event = e;
      this.isOpen = true;
      this.clear()
      this.searchResult = this.items
      setTimeout(() => {
      this.setFocusOnInput('popInput')
      }, 2000);
    }

    presentPopoverNotif(e?: Event) {
      //console.log('preent me', e)
       this.notifArr = []
       this.showNotif = false
       this.popoverNotif.event = e;
       this.isOpenNotif = true;  
     }

    didDissmis(){
      this.isOpen = false
      //console.log('dismissOver')
       
      
      this.setFocusOnInput('qtyId')
    }

    didDissmisNotif(){
      this.isOpenNotif = false
      //console.log('dismissOver') 
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
        availQty:0,
        aliasEn:"",
        tax:0,
        imageUrl:""
      }
     }else{
      this.searchTerm = "" 
     }
    }

    



    getAllStockItemsWithouteCounts() {
      console.log('getAllStockItemsWithouteCounts')
      this.storage.get('year').then((response) => {
       if (response) {
        this.year = response
         console.log('getAllStockItemsWithouteCounts',this.year.id)
        if (this.offline == false) {
          this.loadingItems = true
          this.api.getAllStockItemsWithouteCounts(1,this.year.id).subscribe(data => {
            //console.log(data)
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
        } 
        } 
      }); 
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
      item.pay_price === selectedItem.pay_price
    );

    if (existingItem) {
      // Update existing item quantity
      let newQty = +existingItem.quantity + +selectedItem.qty;
      
      // Check if new quantity exceeds available stock
      if (newQty > selectedItem.availQty) {
        this.presentToast('الصنف موجود بالقائمة، مجموع الكمية الجديد أكبر من المتوفر في المخزن', 'warning');
 
      }
      
      existingItem.quantity = newQty;
      existingItem.tot = (newQty * +existingItem.pay_price).toFixed(2);
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
        "tot": (selectedItem.qty * +selectedItem.pay_price).toFixed(2),
        "store_id": +this.store_info.id,
        "yearId": +this.year.id,
        "item_id": +selectedItem.id,
        "dateCreated": r,
        "perch_price": selectedItem.perch_price,
        "tax": selectedItem.tax,
        "imageUrl": selectedItem.imageUrl
      });
    }

    // Reset discount and recalculate totals
    this.discountPerc = 0;
    this.payInvo.discount = 0;
    this.getTotal();
    this.updateSortedList();
    
    // this.presentToast('تم إضافة الصنف بنجاح', 'success');
  }



 
 

  async presentAlertConfirm(initial?) {
    let msg:string = 'هل تريد طباعة فاتورة ؟ '
    if(initial){
       msg   = 'هل تريد حذف السجل ؟ '
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'تأكيد!',
      mode:'ios' ,
      message: msg,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
          //console.log('Confirm Cancel: blah'); 
           // Reset invoice data when user cancels print (after save)
           if (!initial) {
             this.resetPageAfterInvoice();
           }
          }
        }, {
          text: 'موافق',
          id: 'confirm-button',
          handler: () => {
            if(initial){
            this.deleteSalesInvoInit()
            }else{
             
              this.presentModal(this.printArr , 'sales').then(() => {
                // Reset page after print modal is presented
                this.resetPageAfterInvoice();
              });
            } 
          }
        }
      ]
    });
  
    await alert.present();
  }

  Print(elem){ 
      this.printMode = true 
      var mywindow = window.open('', 'PRINT', 'height=400,width=600'); 
      mywindow.document.write('<html><head>'); 
      mywindow.document.write('<style type="text/css">')
      mywindow.document.write('.sumsDiv{border-style: solid;border-color: gray;border-width: .5px;} .flr{ display: block; float: right; } .show{ } .hide{width:0px;height:0px} .w45 {width:45%} .w50 {width:50%} .w100 {width:100%} td, th {border: 1px solid #dddddd;text-align: center;padding: 8px;} tr:nth-child(even) {background-color: #dddddd;} .table{text-align: center;width: 100%; margin: 12px;}.ion-margin{ margin: 10px; } .ion-margin-top{ margin-top: 10px; } .rtl {  direction: rtl; } .ion-text-center{ text-align: center; } .ion-text-end{ text-align: left; } .ion-text-start{ text-align: right; }')
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

    this.storage.get('itemsLocal').then((response) => {
      if (response) {
         this.items = response 
         if (this.items.length == 0 || !this.items) {
           this.getAllStockItemsWithouteCounts()
         } else {
         }
      }
    });
    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response
        
        
        this.prepareInvo()
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
      } 
    });
    this.storage.get('STORE_INFO').then((response) => {
      if (response) {
        this.store_info = response
        
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

 

 // ne logic 
 async  newLogic(){
  //console.log('new logic')
    await this.getAppInfo() 
    await this.prepareInvo()
 }
 
  

  
 

   radioChange2(ev ,form?){
    console.log(ev.target.value)  
    console.log(this.status)
    if(form == 'from'){  
      if(ev.target.value == 1 && this.status == 'initial'){  
        console.log(this.status) 
        this.status = 'toFinal'
        this.payInvo.yearId = this.year.id
        if(this.itemList.length>0){
          this.itemList.forEach(element =>{
            element.yearId =this.year.id
          })
        }
        console.log('convert invo to final',this.status)
      }else if(ev.target.value == 0 && this.status == 'toFinal'){ 
        this.status = 'initial'
        console.log('from final to initial',this.status)
      }
    } 
   }

  prepareInvo(){  
        this.selectedAccount = {id:"",ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",phone:"",address:"",currentCustumerStatus:0};
        this.sub_nameNew = ""
        // radioVal removed - using only account-selector
        this.radioVal2 = 0
        this.payInvo ={pay_id:undefined ,pay_ref:0 ,store_id:"",tot_pr:0,pay:0,pay_date:"",pay_time:"",user_id:"",cust_id:null,pay_method:"",discount:0 ,changee:0,sub_name:"",payComment:"",nextPay:null, yearId:this.year.id};
        this.discountPerc = 0
        // Clear discount related variables - use setTimeout to prevent expression change error
        setTimeout(() => {
          this.discountType = 'percentage';
          this.discountAmount = 0;
          this.calculatedDiscountPerc = 0;
          this.calculatedDiscountAmount = 0;
          this.cdr.detectChanges();
        }, 0);
        let d = new Date
      // this.payInvo.pay_date  = d.getMonth().toString() + "/" + d.getDay().toString()+ "/" + d.getFullYear().toString() 
       this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd')
       this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss') 
       this.generateRandom()  
       this.payInvo.store_id =this.store_info.id
       this.payInvo.user_id = this.user_info.id
       this.payInvo.yearId = this.year.id
       //console.log(this.payInvo) 
       
       // Clear itemList and related arrays
       this.itemList = []
       this.sortedItemList = []
       this.isItemListSorted = false
       
       // Clear search related variables
       this.searchTerm = ''
       this.searchMatches = []
       this.highlightedIndex = -1
        
    if (this.statusFromRoute === 'newInvoFromItemsPage' && this.pendingItemsFromStock.length > 0) {
      //console.log('Pending items from stock page:', this.pendingItemsFromStock);
      this.pendingItemsFromStock.forEach(item => {
       
        this.itemList.push({
      "id" : 'NULL',
      "pay_ref" :this.payInvo.pay_ref,
      "item_name" :item.item_name,
      "pay_price" :item.pay_price,
      "quantity" : +item.qty,
      "tot" :(+item.qty * +item.pay_price).toFixed(2),
      "store_id" :+this.store_info.id, 
      "yearId" :+this.year.id, 
      "item_id" : +item.id,
      "dateCreated" : this.datePipe.transform(d, 'dd-MM-YYYY'),
      "perch_price":item.perch_price,
      "tax":item.tax,
      "imageUrl":item.imageUrl
          
        });
      });
      this.statusFromRoute = '';
       this.pendingItemsFromStock = []; // Reset status after processing
       this.getTotal()
    }
    

 
  }
 
   setFocusOnInput(Input) {
     //console.log('setFocusOnInput')
     if (Input == 'dst') { 
      this.nameField.nativeElement.focus(); 
     } else if(Input == 'dstPop') {
      this.dstPop.setFocus();
      this.isOpen = true;
      this.clear()
      this.searchResult = this.items
      setTimeout(() => {
          this.popInput.setFocus(); 
      }, 1500);
    
     }else if(Input == 'qtyId') {
      this.qtyId.setFocus();  
     }else if(Input == 'popInput'){
      this.popInput.setFocus();  
     }
   }


   isFocused(event){
    //console.log('dsdfsdf',event)
  }

   
 
generateRandom():any{
  let da = new Date 
  //console.log(da)
  let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString()
  this.payInvo.pay_ref = this.store_info.store_ref + randomsNumber
    
}



 

selectFromPop(item){
//console.log(item)
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
  tot:item.pay_price,
  availQty:item.quantity,
  aliasEn:item.aliasEn,
  tax:item.tax,
  imageUrl:item.imageUrl
} 
 this.searchTerm = item.item_name
  //console.log( this.selectedItem); 
  this.didDissmis()
  //perform calculate here so moataz can get the qty
}

 

 


pickDetail(ev){ 
  let fl : Array<any>=[]
  if(this.searchLang == 1){
     fl= this.items.filter(x=>x.item_desc == ev.target.value)
    //console.log('hyrr',fl);
  } else {
     fl= this.items.filter(x=>x.item_name == ev.target.value)
    //console.log(fl);
  }
 
  if (fl.length > 0) {
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
    qty:"",
    tot:fl[0]['pay_price'],
    availQty:fl[0]['quantity'],
    aliasEn:fl[0]['aliasEn'],
    tax:fl[0]['tax'],
    imageUrl:fl[0]['imageUrl']
  }
  //console.log( this.selectedItem);
  this.setFocusOnInput('qtyId')
  }else{
    this.presentToast('خطأ في اسم الصنف ', 'danger') 
    this.selectedItem.item_name =""
    this.selectedItem.item_desc =""
  } 
}

qtyhange(ev){
  //console.log(ev);
  this.selectedItem.tot =  (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2)

  let fl : Array<any> = []
  if (this.itemList.length > 0) {
      fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name )
    if (fl.length> 0){
      //console.log(fl)
      if(+this.selectedItem.qty + +fl[0].quantity > +this.selectedItem.availQty){
        this.presentToast('الصنف موجود بالقائمة , مجموع الكمية الجديد اكبر من المتوفر في المخزن','warning')
       }
    }else{
      if(+this.selectedItem.qty > +this.selectedItem.availQty){
        this.presentToast('الكمية في المخزن غير كافية','warning')
       }
    }
  }else{
    if(+this.selectedItem.qty > +this.selectedItem.availQty){
      this.presentToast('الكمية في المخزن غير كافية','warning')
     }
  }

 
}

pricehange(ev){
  //console.log(ev);
  this.selectedItem.tot =  (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2)
}

payChange(ev){
  //console.log(ev); 
  if(this.discountPerc>0){
    this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
  }
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
    // Trigger change detection to prevent ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
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

  // Update your existing discountChange method
  discountChange(ev) {
    // Keep this for backward compatibility if needed
    this.discountPerc = ((+this.payInvo.discount / +this.payInvo.tot_pr) * 100).toFixed(2);
    this.payInvo.changee = +(this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay;
  }

  // Update your existing discountPerChange method
  discountPerChange(ev) {
    // Keep this for backward compatibility if needed
    this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc / 100).toFixed(2);
    this.payInvo.changee = +(this.payInvo.tot_pr - this.payInvo.discount) - this.payInvo.pay;
  }

  // Update your getTotal method to reset discount calculations
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
//   let sum = this.itemList.reduce( (acc, obj)=> { return acc + +obj.tot; }, 0);
//   //console.log('sum', sum)
//   this.payInvo.tot_pr = sum - +this.payInvo.discount 
//   this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay
//   this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2)
//   this.payInvo.changee = this.payInvo.changee.toFixed(2)
// } 



// discountChange(ev){
//   //console.log('discountChange' ,ev); 
//   this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
//   this.payInvo.changee = +( this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay
// }

// discountPerChange(ev){
//   //console.log('discountPerChange',ev);
//   this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
//   this.payInvo.changee = +( this.payInvo.tot_pr -  this.payInvo.discount ) - this.payInvo.pay
// }

deleteItem(index){
//console.log( index); 
const displayList = this.getDisplayItemList();
const itemToDelete = displayList[index];

// Find the item in the original itemList and remove it
const originalIndex = this.itemList.findIndex(item => 
  item.item_name === itemToDelete.item_name && 
  item.pay_price === itemToDelete.pay_price &&
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



refresh(item?){ 
  console.log('refreshPerform')
    this.getAllStockItemsWithouteCounts()
   
}

addTolist() {
    if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0 ) {
      this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger')
    } else {
      let fl: any = []
      if (this.itemList.length > 0) {
        fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name &&  x.pay_price == this.selectedItem.pay_price)
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
        "tot" :this.selectedItem.tot, 
        "store_id" :+this.store_info.id, 
        "yearId" :+this.year.id, 
        "item_id" : +this.selectedItem.id,
        "dateCreated" : r,
        "perch_price":this.selectedItem.perch_price,
        "tax":this.selectedItem.tax,
        "imageUrl":this.selectedItem.imageUrl
        })
         
        
      } else {
        //console.log(this.itemList);
        //console.log(fl[0].quantity);
        //console.log(+this.selectedItem.qty);

        this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty
        let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
        this.itemList[index].quantity = +this.selectedItem.qty
        this.itemList[index].tot =  (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2)
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
        availQty:0,
        aliasEn:"",
        tax:0,
        imageUrl:""
      }
      this.discountPerc = 0
      this.payInvo.discount = 0
      
      this.getTotal()
      this.setFocusOnInput('dstPop')
    }  
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
      item.pay_price === itemToEdit.pay_price
    );
    
    if (originalIndex !== -1 && +displayList[i].quantity > 0 && +displayList[i].pay_price > 0) {
      // Update both the display list and original list
      displayList[i].tot = +displayList[i].quantity * displayList[i].pay_price;
      this.itemList[originalIndex].quantity = displayList[i].quantity;
      this.itemList[originalIndex].pay_price = displayList[i].pay_price;
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


validate():boolean{
  // Simplified validation - no more radio dependencies
  if (this.itemList.length == 0  || this.payInvo.pay_ref == "" ) {
    this.presentToast('الرجاء ادخال اصناف الي القائمة','danger')
    return false
  }
  else if(!this.payInvo.cust_id || !this.selectedAccount.sub_name) {
    this.presentToast('الرجاء إختيار حساب العميل','danger')
    return false
  }
  else if(this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
    this.presentToast('الرجاء تحديد التاريخ ','danger')
    return false
  }
  else if(this.payInvo.changee < 0 ) {
    this.presentToast('الرجاء مراجعة المبلغ المستلم والخصم  ','danger')
    return false
  }
  else {
    return true
  }
}

saveIntial(){ 
  // Account info already set by account-selector service  
  // check if the invoice is exist
 if(this.initialInvoices.length > 0){ 
  this.initialInvoices = this.initialInvoices.filter(x=>x['payInvo'].pay_ref != this.payInvo.pay_ref) 
  }

  this.initialInvoices.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList
  })
  this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
    this.printArr = []
   
    this.printArr.push({
      'payInvo': this.payInvo,
      'itemList':this.itemList,
      'selectedAccount' : this.selectedAccount,
      'sub_nameNew' : this.sub_nameNew ,
      "user_name" : this.user_info.full_name ,
      "sub_balanse": this.selectedAccount.sub_balance,
      "balanceStatus":  this.selectedAccount.currentCustumerStatus 
    }) 
      //console.log(this.printArr)
      this.presentAlertConfirm()
      this.presentToast('تم الحفظ بنجاح', 'success')
      // Use the new reset method for consistency
      // Note: resetPageAfterInvoice will be called after print dialog
      // No need to call it here as it will be handled by presentAlertConfirm
    });  
}

resortItemList(){
  this.isItemListSorted = false
  this.sortItemListAlphabetically()
}

async saveInvoInit() {
  // Show loading indicator
  await this.showLoading('جاري حفظ الفاتورة المبدئية...', 'saving');
  
  try {
    // Optimized: Save invoice and items together in single API call
    const invoiceWithItems = {
      invoice: this.payInvo,
      items: this.itemList
    };
    
    console.log('Sending invoice data to saveInvoInit:', invoiceWithItems);
    console.log('PayInvo object:', this.payInvo);
    console.log('ItemList array:', this.itemList);
     
    this.api.saveSalesInvoInitWithItems(invoiceWithItems).subscribe(
      async (response: any) => {
        console.log('Initial invoice and items saved:', response);
        await this.hideLoading();
        this.handleSaveSuccess();
      }, 
      async (err) => {
        console.log('Save error:', err);
        console.log('Error details:', err);
        await this.hideLoading();
        this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
      }
    );
  } catch (error) {
    await this.hideLoading();
    console.error('Unexpected error in saveInvoInit:', error);
    this.presentToast('حدث خطأ غير متوقع أثناء الحفظ', 'danger');
  }
}
 
deleteInitial(){
  if(this.initialInvoices.length > 0){ 
     this.initialInvoices = this.initialInvoices.filter(x=>x['payInvo'].pay_ref != this.payInvo.pay_ref) 
    } 
     this.storage.set('initialInvoices', this.initialInvoices).then((response) => { 
      this.presentToast('تم الحذف بنجاح' , 'success') 
      this.status = 'new'
      this.prepareInvo()
      });    
}



async deleteSalesInvoInit(){ 
  // Always show loading for delete operations
  await this.showLoading('جاري حذف الفاتورة...', 'deleting');
  
  try {
    const deletionData = {
      pay_id: this.payInvo.pay_id,
      pay_ref: this.payInvo.pay_ref
    };

    this.api.deleteSalesInvoInitWithItems(deletionData).subscribe(
      async (data) => {
        console.log('Delete response:', data);
        
        if (data['success']) {
          await this.hideLoading();
          
          // Show success message for all cases
          this.presentToast('تم الحذف بنجاح' , 'success');
          
          if(this.status != 'toFinal'){
            this.prepareInvo();
            // Navigate back to previous page after successful deletion
            setTimeout(() => {
              this.back()
            }, 1500); // Give time for toast to show
          } 
        } else {
          await this.hideLoading();
          this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger');
        }
      },
      async (err) => {
        console.log('Delete error:', err);
        await this.hideLoading();
        this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger');
      }
    );
  } catch (error) {
    await this.hideLoading();
    console.error('Unexpected error in deleteSalesInvoInit:', error);
    this.presentToast('حدث خطأ غير متوقع أثناء الحذف', 'danger');
  }
}


deleteSalesitemListInit(){  
  this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe(data => {
  //console.log(data)
  if (data['message'] != 'Post Not Deleted') { 
    if(this.status != 'toFinal'){
      this.presentToast('تم الحذف بنجاح' , 'success') 
     this.prepareInvo()
    } 
  }else{
   this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
  }
},(err) => {
  //console.log(err);
  this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
  
 },() => {
   this.loadingController.dismiss()
 }) 
}

  save() {
    let d: Date = this.payInvo.pay_date
    this.payInvo.sub_name = this.selectedAccount.sub_name
    this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd')
    
    
    if (this.validate() == true) {
      // Check quantity validation for final invoices (radioVal2 = 1)
      if (this.radioVal2 == 1) {
        this.validateStockQuantityBeforeSave()
      } else {
        this.proceedWithSave()
      }
    }
  }

  private async validateStockQuantityBeforeSave() {
    await this.showLoading('جاري التحقق من الكميات المتوفرة...', 'saving');
    
    try {
      console.log('validateStockQuantityBeforeSave' ,this.itemList)
      // Prepare item list for validation
      const itemsToValidate = this.itemList.map(item => ({
        item_id: item.item_id,
        quantity: item.quantity
      }))
      console.log('item' , itemsToValidate  )

      this.api.validateStockQuantity(this.store_info.id, itemsToValidate).subscribe(
        async (response: any) => {
          await this.hideLoading()
          
          if (response.success && response.valid) {
            // All items have sufficient stock, proceed with save
            this.proceedWithSave()
          } else if (response.success && !response.valid) {
            // Some items have insufficient stock, show dialog
            console.log('response insuffiecnt',response.insufficient_items)
            this.showInsufficientStockDialog(response.insufficient_items)
          } else {
            // API error
            this.presentToast('خطأ في التحقق من الكميات المتوفرة', 'danger')
          }
        },
        async (error) => {
          await this.hideLoading()
          console.error('Stock validation error:', error)
          this.presentToast('خطأ في الاتصال أثناء التحقق من الكميات', 'danger')
        }
      )
    } catch (error) {
      await this.hideLoading();
      console.error('Unexpected error in validateStockQuantityBeforeSave:', error);
      this.presentToast('حدث خطأ غير متوقع أثناء التحقق من الكميات', 'danger');
    }
  }

  private async showInsufficientStockDialog(insufficientItems: any[]) {
    const { InsufficientStockDialogComponent } = await import('../component/insufficient-stock-dialog/insufficient-stock-dialog.component')
    
    const modal = await this.modalController.create({
      component: InsufficientStockDialogComponent,
      componentProps: {
        insufficientItems: insufficientItems,
        store_info: this.store_info,
        user_info: this.user_info,
        year: this.year
      },
      cssClass: 'insufficient-stock-modal',
      backdropDismiss: false
    })

    return await modal.present()
  }

  private proceedWithSave() {
    // No need to show loading here - each save method handles its own loading
    
    // Simplified save logic - account already selected via account-selector
    if (this.radioVal2 == 0 && this.status == 'new') {
      // Initial invoice
      this.saveInvoInit()
    } else if(this.radioVal2 == 0 && this.status == 'initial') {
      // Update initial invoice
      this.updateInitInvo()
    } else {
      // Final invoice - account already exists with valid ID
      this.saveInvo()
    }
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
          this.presentToast('تم الحفظ بنجاح', 'success')
          // this.getStockItems()
         }else{
           this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger') 
         }
       }, (err) => {
         //console.log(err);
         this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
       }) 
      }


  // Centralized loading management methods
  async showLoading(message: string, operationType: 'saving' | 'deleting' | 'updating' = 'saving') {
    // Dismiss any existing loader first
    await this.hideLoading();
    
    // Set appropriate state
    this.resetLoadingStates();
    switch (operationType) {
      case 'saving':
        this.isSaving = true;
        break;
      case 'deleting':
        this.isDeleting = true;
        break;
      case 'updating':
        this.isUpdating = true;
        break;
    }
    
    this.currentLoadingMessage = message;
    
    // Create new loader without auto-dismiss
    this.currentLoader = await this.loadingController.create({
      spinner: 'bubbles',
      mode: 'ios',
      message: message,
      translucent: true,
      backdropDismiss: false
    });
    
    await this.currentLoader.present();
    this.cdr.detectChanges();
  }
  
  async hideLoading() {
    if (this.currentLoader) {
      try {
        await this.currentLoader.dismiss();
      } catch (error) {
        // Loader might already be dismissed, ignore error
      }
      this.currentLoader = null;
    }
    
    this.resetLoadingStates();
    this.currentLoadingMessage = '';
    this.cdr.detectChanges();
  }
  
  private resetLoadingStates() {
    this.isSaving = false;
    this.isDeleting = false;
    this.isUpdating = false;
  }
  
  // Check if any loading operation is active
  isLoading(): boolean {
    return this.isSaving || this.isDeleting || this.isUpdating;
  }
  
  // Global error handler for consistent error management
  private async handleError(error: any, operation: string, defaultMessage: string = 'حدث خطأ غير متوقع') {
    await this.hideLoading();
    console.error(`Error in ${operation}:`, error);
    
    // Determine appropriate error message
    let errorMessage = defaultMessage;
    if (error?.message) {
      if (error.message.includes('timeout') || error.message.includes('TimeoutError')) {
        errorMessage = 'انتهت مهلة الاتصال، يرجى المحاولة مرة أخرى';
      } else if (error.message.includes('connection') || error.message.includes('Network')) {
        errorMessage = 'خطأ في الاتصال، يرجى التحقق من الإنترنت والمحاولة مرة أخرى';
      } else {
        errorMessage = defaultMessage;
      }
    }
    
    this.presentToast(errorMessage, 'danger');
  }
  
  // Enhanced loading with timeout protection
  private async showLoadingWithTimeout(message: string, operationType: 'saving' | 'deleting' | 'updating' = 'saving', timeoutMs: number = 30000) {
    await this.showLoading(message, operationType);
    
    // Set a safety timeout
    setTimeout(async () => {
      if (this.isLoading()) {
        console.warn(`Operation ${operationType} timed out after ${timeoutMs}ms`);
        await this.hideLoading();
        this.presentToast('العملية تستغرق وقتاً أطول من المعتاد، يرجى المحاولة مرة أخرى', 'warning');
      }
    }, timeoutMs);
  }
  
  // Legacy method - updated to use new system
  async presentLoadingWithOptions(msg?) {
    await this.showLoading(msg || 'جاري المعالجة...', 'saving');
  }

  async presentModal(printArr: any, page: string) {
    const modal = await this.modalController.create({
      component: PrintModalPage,
      componentProps: {
        printArr: printArr,
        page: page
      }
    });
    return await modal.present();
  }
  
  // Method to reset page to initial state after invoice operations
  private resetPageAfterInvoice() {
    console.log('Resetting page after invoice operation');
    this.prepareInvo();
    this.status = 'new';
    
    // Navigate back if coming from items page
    if (this.showBackButton) {
      setTimeout(() => {
        this.goBack();
      }, 1000); // Give time for reset to complete
    }
  }

  async  performSync(){
   
  await this.getAllStockItemsWithouteCounts()
  }



  back(){
    this._location.back()
  }

  async updateInitInvo(){
    await this.showLoading('جاري تحديث الفاتورة المبدئية...', 'updating');
    
    try {
      this.api.updateInitSalesInvo(this.payInvo).subscribe(
        async (data) => {
          console.log('Invoice header updated, proceeding to update items...');
          // Don't hide loading yet, continue to next step
          await this.deleteSalesitemListInit4update()
        }, 
        async (err) => {
          console.log('Update invoice error:', err);
          await this.hideLoading();
          this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }
      );
    } catch (error) {
      await this.hideLoading();
      console.error('Unexpected error in updateInitInvo:', error);
      this.presentToast('حدث خطأ غير متوقع أثناء التحديث', 'danger');
    }
  }


    async deleteSalesitemListInit4update(){  
      try {
        this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe(
          async (data) => {
            console.log('Old items deleted, proceeding to save new items...');
            if (data['message'] != 'Post Not Deleted') { 
              await this.saveitemListinit();   
            } else {
              await this.hideLoading();
              this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
            } 
          },
          async (err) => {
            console.log('Delete items error:', err);
            await this.hideLoading();
            this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
          }
        ); 
      } catch (error) {
        await this.hideLoading();
        console.error('Unexpected error in deleteSalesitemListInit4update:', error);
        this.presentToast('حدث خطأ غير متوقع أثناء حذف البيانات', 'danger');
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
        this.selectedAccount.ac_id = 1 
        this.selectedAccount.sub_type="debit"
        this.selectedAccount.sub_code=null
        this.selectedAccount.sub_balance="0"
        this.selectedAccount.cat_id = 1
        this.selectedAccount.cat_name = 'العملاء'
        this.selectedAccount.store_id=this.store_info.id  
    }

 
 doubleCheckForFinalStatus (){

  this.route.queryParams.subscribe(params => { 
    if (params && params.payInvo) {
      this.status = 'toFinal'
      this.payInvo = JSON.parse(params.payInvo);
      this.payInvo.yearId = this.year.id
      this.itemList.forEach(element => {
        element.yearId = this.payInvo.yearId
      }); 
    }
  })
 }

  async saveInvo() { 
    // Show loading indicator
    await this.showLoading('جاري حفظ الفاتورة النهائية...', 'saving');
    
    try {
      this.doubleCheckForFinalStatus()
      // Optimized: Save invoice and items together in single API call
      const invoiceWithItems = {
        invoice: this.payInvo,
        items: this.itemList
      };
      console.log('status' , this.status , invoiceWithItems)
      this.api.saveSalesInvoWithItems(invoiceWithItems).subscribe(
        async (response: any) => {
          console.log('Final invoice and items saved:', response);
          await this.hideLoading();
          this.handleSaveSuccess();
        }, 
        async (err) => {
          console.log('Save error:', err);
          await this.hideLoading();
          this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        }
      );
    } catch (error) {
      await this.hideLoading();
      console.error('Unexpected error in saveInvo:', error);
      this.presentToast('حدث خطأ غير متوقع أثناء الحفظ', 'danger');
    }
  }


  


  // Shared success handler for optimized save process
  private handleSaveSuccess() {
    this.presentToast('تم الحفظ بنجاح', 'success');
    

     // Check if invoice was converted from initial to final and delete initial invoice
     if (this.status == 'toFinal') {
      console.log('case delete intial', this.status)
      this.deleteSalesInvoInit();
    }
     
    // Prepare print data with current invoice information
    this.printArr = []; 
    this.printArr.push({
      'payInvo': this.payInvo,
      'itemList': this.itemList,
      'selectedAccount': this.selectedAccount,
      'sub_nameNew': this.sub_nameNew,
      "user_name": this.user_info.full_name,
      "sub_balanse": this.selectedAccount.sub_balance,
      "balanceStatus": this.selectedAccount.currentCustumerStatus
    });
    
    console.log('Print array prepared:', this.printArr);
    
    // For final invoices, show journal entry confirmation
    if (this.radioVal2 == 1) {
      this.presentJournalEntryConfirmation();
    } else {
      // For initial invoices, go directly to print confirmation
      this.presentAlertConfirm();
    }
    
    // Loading already dismissed by individual save methods
  }

  // Legacy method - kept for compatibility but no longer used in optimized flow
  saveitemList(){  
    this.api.saveSalesitemList(this.itemList).subscribe(data=>{ 
      //console.log(data)  
      this.presentToast('تم الحفظ بنجاح' , 'success') 
      this.printArr = []
      
      this.printArr.push({
        'payInvo': this.payInvo,
        'itemList':this.itemList,
        'selectedAccount' : this.selectedAccount,
        'sub_nameNew' : this.sub_nameNew ,
        "user_name" : this.user_info.full_name ,
        "sub_balanse": this.selectedAccount.sub_balance,
        "balanceStatus":  this.selectedAccount.currentCustumerStatus 
      }) 
        //console.log(this.printArr)
        this.presentAlertConfirm()
        this.presentToast('تم الحفظ بنجاح', 'success')
        this.prepareInvo()
        this.status = 'new'
 
    }, (err) => {
      //console.log(err);
      this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
    }, () => {
      this.loadingController.dismiss()
    }
    )      
    }

 // Legacy method - updated for new loading system
 async saveitemListinit(){  
   try {
     this.api.saveSalesitemListInit(this.itemList).subscribe(
       async (data) => { 
         console.log('Items saved successfully in update flow');
         await this.hideLoading();
         
         this.printArr = []
         
         this.printArr.push({
           'payInvo': this.payInvo,
           'itemList':this.itemList,
           'selectedAccount' : this.selectedAccount,
           'sub_nameNew' : this.sub_nameNew ,
           "user_name" : this.user_info.full_name ,
           "sub_balanse": this.selectedAccount.sub_balance,
           "balanceStatus":  this.selectedAccount.currentCustumerStatus 
         }) 
         
         this.presentAlertConfirm()
         this.presentToast('تم التحديث بنجاح', 'success')
         // Use the new reset method for consistency
         // Note: resetPageAfterInvoice will be called after print dialog
         // No need to call it here as it will be handled by presentAlertConfirm
       }, 
       async (err) => {
         console.log('Save items error:', err);
         await this.hideLoading();
         this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger');
       }
     );
   } catch (error) {
     await this.hideLoading();
     console.error('Unexpected error in saveitemListinit:', error);
     this.presentToast('حدث خطأ غير متوقع أثناء حفظ البيانات', 'danger');
   }
}

goBack() {
  this._location.back();
}

// New methods for journal entry workflow
async presentJournalEntryConfirmation() {
  const totalAfterDiscount = (+this.payInvo.tot_pr - +this.payInvo.discount);
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'تأكيد استلام المبلغ',
    mode: 'ios',
    message: `هل تريد استلام مبلغ ${totalAfterDiscount.toFixed(2)} من العميل الآن؟`,
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
        text: 'نعم، استلام المبلغ',
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
    invoiceType: 'sales',
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
  
  // Show print confirmation
  setTimeout(() => {
    this.presentAlertConfirm();
  }, 500);
  
  this.cleanupAfterInvoice();
}

onJournalCancelled() {
  this.showJournalEntryModal = false;
  
  // Show print confirmation
  setTimeout(() => {
    this.presentAlertConfirm();
  }, 500);
  
  this.cleanupAfterInvoice();
}

private cleanupAfterInvoice() {
  // Use the consistent reset method
  this.resetPageAfterInvoice();
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
      address: account.address,
      currentCustumerStatus: 0
    };
    
    // Update invoice with selected account
    this.payInvo.cust_id = account.id;
    this.payInvo.sub_name = account.sub_name;
    
    console.log('Account selected in sales:', this.selectedAccount);
  }
}

// Handle account balance loaded
onAccountBalanceLoaded(balance: any) {
  if (balance && this.selectedAccount) {
    // Store the balance for invoice journal entry
    this.customerBalance = balance;
    // Update the current customer status based on balance
    this.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
    console.log('Account balance loaded in sales:', balance);
  }
}

// Date picker is now handled by ion-input type="date" directly in template

async openPriceAdjustmentDialog() {
  if (!this.itemList || this.itemList.length === 0) {
    this.presentToast('لا توجد أصناف في القائمة لتعديل أسعارها', 'warning');
    return;
  }

  // Transform itemList to the format expected by the dialog
  const itemsToPass = this.itemList.map(item => ({
    qty: item.quantity,
    id: item.item_id,
    item_name: item.item_name,
    perch_price: item.perch_price,
    pay_price: item.pay_price,
    item_unit: item.item_unit || '',
    parcode: item.parcode || 0,
    tax: item.tax || 0,
    imageUrl: item.imageUrl || ''
  }));

  const modal = await this.modalController.create({
    component: PriceAdjustmentDialogComponent,
    cssClass: 'price-adjustment-modal',
    componentProps: {
      itemsList: itemsToPass,
      mode: 'sales'
    }
  });

  modal.onDidDismiss().then((result) => {
    if (result.data) {
      this.handlePriceAdjustmentResult(result.data);
    }
  });

  return await modal.present();
}

private handlePriceAdjustmentResult(updatedItems: any[]) {
  if (!updatedItems || updatedItems.length === 0) return;

  // Update the itemList with new prices
  updatedItems.forEach(updatedItem => {
    const itemIndex = this.itemList.findIndex(item => 
      item.item_id === updatedItem.id && item.item_name === updatedItem.item_name
    );
    
    if (itemIndex !== -1) {
      // Update the pay_price and recalculate total
      this.itemList[itemIndex].pay_price = parseFloat(updatedItem.pay_price) || 0;
      this.itemList[itemIndex].tot = (this.itemList[itemIndex].quantity * this.itemList[itemIndex].pay_price).toFixed(2);
    }
  });

  // Recalculate totals using existing method
  this.getTotal();
  
  this.presentToast('تم تعديل الأسعار بنجاح', 'success');
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

// Format balance display with number separators
formatBalance(balance: number): string {
  if (!balance && balance !== 0) return '0.00';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(balance));
}

// Get current currency symbol for table headers
getCurrencySymbol(): string {
  return this.currencyService.getCurrentCurrencySymbol();
}

}
import { DatePipe, Location } from '@angular/common';
import { Component, OnInit ,ViewChild, ElementRef, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';
import { Storage } from '@ionic/storage';
import { FilterPipe } from '../sales/pipe';
import { FilterPipe2 } from '../sales/pipe2';
import { FilterPipe3 } from '../sales/pipe3';
import { StockServiceService } from '../syncService/stock-service.service';
import { PriceAdjustmentDialogComponent } from '../component/price-adjustment-dialog/price-adjustment-dialog.component';
import { CurrencyService } from '../services/currency.service';
import * as momentObj from 'moment';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edit-sales',
  templateUrl: './edit-sales.page.html',
  styleUrls: ['./edit-sales.page.scss'],
})
export class EditSalesPage implements OnInit, OnDestroy {
  @ViewChild("dstEds") dstEds: ElementRef;
  @ViewChild('qtyEds') qtyEds; 
// Add these properties at the top of your class
discountType: string = 'percentage'; // 'percentage' or 'amount'
discountAmount: number = 0;
calculatedDiscountPerc: number = 0;
calculatedDiscountAmount: number = 0;

  @ViewChild('dstPop3') dstPop3; 
  @ViewChild('popInput3') popInput3; 
  @ViewChild('popover3') popover3;
  @ViewChild('popoverNotif2') popoverNotif2;
  status:any = 'new'
  notifArr:Array<any> =[]
  showNotif = false
  LogHistoryLocalArr:Array<any> =[]
  logHistoryArr:Array<any>=[];
  isOpenNotif = false ;
  subiscribtionNotif:Subscription;
  private currencySubscription: Subscription;
  newNotif = false ;
 
  isOpen = false; 
  payArray:any ;  
  sub_account:Array<any> =[]
  sub_accountLocalSales:Array<any> =[]
  items:Array<any> =[]
  itemsLocal:Array<any> =[]
  itemList:Array<any> =[]
  sortedItemList:Array<any> =[]
  isItemListSorted:boolean = false
  searchTerm:string = ''
  highlightedIndex:number = -1
  searchMatches:number[] = []
  salesLocal:Array<any> =[]
  salesLocalUpdate :Array<any> =[]
  salesLocalDelete:Array<any> =[]
  sub_accountSales : Array<any> =[]
  sales  :Array<any> =[]
  randomsNumber:Array<any> =[]
  store_info : {id:any , location :any ,store_name:any , store_ref:any }
  user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
  store_id : any=1
  sub_nameNew :any = ""
  selectedItem : {id:any ,pay_ref:any,item_name:any,pay_price:any,perch_price:any,item_unit:any,item_desc:any,parcode:any,qty:any,tot:any ,dateCreated:any,availQty:any,aliasEn:any};
  discountPerc :any = 0
  selectedAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any ,cat_id:any,cat_name:any,currentCustumerStatus:any};
  payInvo : {pay_id:any ,pay_ref:any ,store_id:any,tot_pr:any,pay:any,pay_date:any,pay_time:any,user_id:any,cust_id:any,pay_method:any,discount:any ,changee:any ,sub_name:any,payComment:any,nextPay:any,yearId:any};
  radioVal : any = 0
  loading :boolean = false
  offline:boolean = false
  showMe = null
   radioVal2 : any = 1
  searchLang :any = 0
  aliasTerm :any =""
  searchResult :Array<any> =[]
  aliasResult :Array<any> =[]
  finalResult :Array<any> =[]
  currentCustumerStatus :any
  year : {id:any ,yearDesc: any ,yearStart :any,yearEnd:any} 
  loadingItems:boolean = false
 initialInvoices:Array<any> =[]
  currenQty:any = 0
  firstQty:any = 0
  perchTotQty:any = 0
  payTotQty:any = 0
  perchTot :any = 0
  qtyReal:any = 0
  availQty :any = 0
  
  // Loading state management
  isSaving: boolean = false;
  isDeleting: boolean = false;
  isUpdating: boolean = false;
  currentLoadingMessage: string = '';
  private currentLoader: any = null;
  
  constructor(private behavApi:StockServiceService ,private _location: Location ,private alertController: AlertController,private route: ActivatedRoute, private rout : Router,private storage: Storage,private modalController: ModalController,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController, private cdr: ChangeDetectorRef, private currencyService: CurrencyService) {
    this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",currentCustumerStatus:0};
    this.route.queryParams.subscribe(params => {
      if (params && params.payInvo) {
        this.payInvo = JSON.parse(params.payInvo);
        this.selectedAccount.sub_name = JSON.parse(params.sub_name);
        this.user_info = JSON.parse(params.user_info);
        this.store_info = JSON.parse(params.store_info);
        this.itemList = JSON.parse(params.itemList);
        this.resortItemList()
        //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name )
       // this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
      this.initializeDiscountValues();
       
        this.getAppInfo()
      }
    });
   
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
      aliasEn:""
    } 
   }



   initializeDiscountValues() {
  // Initialize discount type based on existing discount
  if (this.payInvo.discount > 0) {
    // Calculate which type was used originally
    const percentageDiscount = (+this.payInvo.discount / +this.payInvo.tot_pr) * 100;
    
    // You can set a default or determine based on your business logic
    this.discountType = 'percentage'; // or 'amount' based on your preference
    
    if (this.discountType === 'percentage') {
      this.discountPerc = percentageDiscount.toFixed(2);
      this.calculatedDiscountAmount = +this.payInvo.discount;
    } else {
      this.discountAmount = +this.payInvo.discount;
      this.calculatedDiscountPerc = percentageDiscount;
    }
  }
}

    

  ngOnInit() {
    // Initialize currency service
    this.initializeCurrency();
    
    // Check category visibility setting
   
  }
  
  async ngOnDestroy() {
    // Clean up loading states
    await this.hideLoading();
    
    // Clean up subscriptions
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


  getAllStockItemsWithouteCounts() {
    this.storage.get('year').then((response) => {
     if (response) {
      this.year = response
      //console.log('this.year.id',this.year.id)
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

  refresh(para){
    if (para=='account') {
      
    } else {
     // this.getItems()
      this.getAllStockItemsWithouteCounts()
    }   
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
       // After store info is loaded, get account balance if customer is selected
       this.loadInitialAccountBalance();
     }
   });

   this.storage.get('itemsLocal').then((response) => {
    if (response) {
       this.items = response
    }
  });
   
  }


 radioChange2(ev ,form?){
    //console.log(ev.target.value)  
    //console.log(this.status) 
    if(form == 'from'){
      if(ev.target.value == 1 && this.status == 'initial'){  
        this.status = 'toFinal'
        this.payInvo.yearId = this.year.id
        if(this.itemList.length>0){
          this.itemList.forEach(element =>{
            element.yearId =this.year.id
          })
        }
        //console.log('convert invo to final',this.status)
      }else if(ev.target.value == 0 && this.status == 'toFinal'){ 
        this.status = 'initial'
        //console.log('from final to initial',this.status)
      }
    } 
   }



async saveInvoInit() {
  // Show loading indicator
  await this.showLoading('جاري تحويل الفاتورة إلى مبدئية...', 'saving');
  
  try {
    // Optimized: Save initial invoice with items and delete final invoice in single API call
    const invoiceWithItems = {
      invoice: this.payInvo,
      items: this.itemList
    };
    
    this.api.saveSalesInvoInitWithItemsAndDeletePay(invoiceWithItems).subscribe(
      async (response: any) => {
        await this.hideLoading();
        this.handleSaveInitSuccess();
      }, 
      async (err) => {
        await this.handleError(err, 'saveInvoInit', 'لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري');
      }
    );
  } catch (error) {
    await this.handleError(error, 'saveInvoInit', 'حدث خطأ غير متوقع أثناء الحفظ');
  }
}

private handleSaveInitSuccess() {
  // Show success message
  this.presentToast('تم الحفظ بنجاح', 'success');
  
  // Update local sales storage - remove the invoice entry since it's now initial
  this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
  this.storage.set('sales', this.sales).then((response) => {
    // Since radioVal2 == 0 (initial mode), call performSyncDelInitialMode
    this.performSyncDelInitialMode();
  });
  
  // Loading already dismissed in saveInvoInit success handler
}


 // Legacy method - should not be directly called in new flow
 // This method is used in complex multi-step processes - loading managed by parent methods
 saveitemListinit(){  
  this.api.saveSalesitemListInit(this.itemList).subscribe(data=>{  
      this.presentToast('تم الحفظ بنجاح', 'success')
      this.deleteSalesInvo()
  }, (err) => {
    //console.log(err);
    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
  }, () => {
    // Loading dismissal managed by parent method
  }
  )      
}

      
 
 
 presentPopoverNotif(e?: Event) {
  //console.log('preent me', e)
   this.notifArr = []
   this.showNotif = false
   this.popoverNotif2.event = e;
   this.isOpenNotif = true;  
 }

 
didDissmisNotif(){
  this.isOpenNotif = false
  //console.log('dismissOver') 
}

 
 


  
   
  
  
  
 


     prepareInvo(){ 
      
      this.radioVal = 0
      this.payInvo ={
        pay_id:this.payArray[0].pay_id ,
        pay_ref:this.payArray[0].pay_ref ,
        store_id:this.payArray[0].store_id,
        tot_pr:this.payArray[0].tot_pr,
        pay:this.payArray[0].pay,
        pay_date:this.payArray[0].pay_date,
        pay_time:this.payArray[0].pay_time,
        user_id:this.user_info.id,
        cust_id:this.payArray[0].cust_id,
        pay_method:this.payArray[0].pay_method,
        discount:this.payArray[0].discount ,
        changee:this.payArray[0].changee,
        sub_name:this.payArray[0].sub_name,
        payComment:this.payArray[0].payComment,
        nextPay:this.payArray[0].nextPay,
        yearId:this.payArray[0].yearId
      };
   
     this.itemList = this.payArray['details']
     
     // Clear sorting and search related variables
     this.sortedItemList = []
     this.isItemListSorted = false
     this.searchTerm = ''
     this.searchMatches = []
     this.highlightedIndex = -1
     
     this.setFocusOnInput('dstEp')
    }

    setFocusOnInput(Input) {
      //console.log('setFocusOnInput')
      if (Input == 'dst') { 
       this.dstEds.nativeElement.focus(); 
      } else if(Input == 'dstPop3') {
       this.dstPop3.setFocus();
       this.isOpen = true;
       this.clear()
       this.searchResult = this.items
       setTimeout(() => {
           this.popInput3.setFocus(); 
       }, 1500);
     
      }else if(Input == 'qtyEds') {
       this.qtyEds.setFocus();  
      }else if(Input == 'popInput3'){
       this.popInput3.setFocus();  
      }
    }


 

 


generateRandom2(role):any{
  let da = new Date 
  //console.log(da)
  let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString() + role
  return this.store_info.store_ref + randomsNumber 
}

 



async  performSync(){
  
  
  this.back()
   }


   async  performSyncDel(){
    
     
    this.back()
    }

    async  performSyncDelInitialMode(){
     this.presentToast('تم الحفظ بنجاح' , 'success')
    
    this.back()
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
  
  // Legacy method - updated to use new system
  async presentLoadingWithOptions(msg?) {
    await this.showLoading(msg || 'جاري المعالجة...', 'saving');
  }

  
  

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
        this.handleEditModeResult(result.data);
      }
    });

    return await modal.present();
  }

  private handleEditModeResult(updatedItems: any[]) {
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

    // Recalculate totals
    this.recalculateTotals();
    
    this.presentToast('تم تعديل الأسعار بنجاح', 'success');
  }

  private recalculateTotals() {
    // Use the existing getTotal() method which properly handles:
    // - Preserving existing discounts (percentage or amount)
    // - Recalculating discount amounts based on new totals
    // - Calculating change based on existing payment amount
    // - Maintaining discount type and values
    this.getTotal();
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
        displayList[i].tot = +displayList[i].quantity * +displayList[i].pay_price;
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
    aliasEn:item.aliasEn
  } 
   this.searchTerm = item.item_name
    //console.log( this.selectedItem); 
    this.didDissmis()
    
  }

  pickDetail(ev){
    let fl : Array<any>=[]
  if(this.searchLang == 1){
     fl= this.items.filter(x=>x.item_desc == ev.target.value)
    //console.log('hyrr',fl);
  }else {
     fl= this.items.filter(x=>x.item_name == ev.target.value)
    //console.log(fl);
  }
    
    //console.log(fl);
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
      aliasEn:fl[0]['aliasEn']

    }
    //console.log( this.selectedItem);
     this.setFocusOnInput('qtyEds')
  }else{
    this.presentToast('خطأ في اسم الصنف ', 'danger') 
    this.selectedItem.item_name =""
  }
  }
  

  presentPopover(e?: Event) {
    //console.log('preent me', e)
     this.popover3.event = e;
     this.isOpen = true;
     this.clear()
     this.searchResult = this.items
     setTimeout(() => {
     this.setFocusOnInput('popInput3')
     }, 2000);
   }

   didDissmis(){
     this.isOpen = false
     
     this.setFocusOnInput('qtyEds')
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
       aliasEn:""
     }
    }else{
     this.searchTerm = "" 
    }
   }

  qtyhange(ev){
    //console.log(ev);
    this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2)
    let fl : Array<any> = []
    if (this.itemList.length > 0) {
        fl = this.itemList.filter(x => x.item_name == this.selectedItem.item_name )
      if (fl.length> 0){
        
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
    this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.pay_price).toFixed(2)
  }

  payChange(ev){
    //console.log(ev); 
    this.payInvo.changee = +( this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value 
  }
  
  discountChange(ev){
    //console.log('discountChange' ,ev); 
    this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
    this.payInvo.changee = +( this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay
  }
  
  discountPerChange(ev){
    //console.log('discountPerChange',ev);
    this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
    this.payInvo.changee = +( this.payInvo.tot_pr -  this.payInvo.discount ) - this.payInvo.pay
  }

  // Add these methods to your class
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



// Update your existing getTotal method
getTotal() {
  let sum = this.itemList.reduce((acc, obj) => { return acc + +obj.tot; }, 0);
  this.payInvo.tot_pr = sum;
  this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
  this.payInvo.tot_pr = this.payInvo.tot_pr.toFixed(2);
  this.payInvo.changee = this.payInvo.changee.toFixed(2);
  
  // Recalculate discount labels when total changes
  if (this.discountType === 'percentage' && this.discountPerc > 0) {
    this.calculatedDiscountAmount = (sum * +this.discountPerc / 100);
    this.payInvo.discount = this.calculatedDiscountAmount.toFixed(2);
  } else if (this.discountType === 'amount' && this.discountAmount > 0) {
    this.calculatedDiscountPerc = ((+this.discountAmount / sum) * 100);
    this.payInvo.discount = this.discountAmount;
  }
  
  // Recalculate change after discount update
  this.payInvo.changee = +(sum - +this.payInvo.discount) - this.payInvo.pay;
  this.payInvo.changee = this.payInvo.changee.toFixed(2);
}

 

  back(){
    this._location.back()
  }

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

  


  addTolist() {
    if (this.selectedItem.item_name == "" || this.selectedItem.id == "" || +this.selectedItem.qty == 0) {
      this.presentToast('الرجاء ادختيار الصنف وتحديد الكمية', 'danger')
    } else {
      let fl: any = []
      if (this.itemList) {
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
        "perch_price":this.selectedItem.perch_price
        })
      } else {
        //console.log(this.itemList);
        //console.log(fl[0].quantity);
        //console.log(+this.selectedItem.qty);

        this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty
        let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
        this.itemList[index].quantity = +this.selectedItem.qty
        this.itemList[index].tot = (+this.selectedItem.qty * +this.selectedItem.pay_price).toFixed()
        this.itemList[index].tot.toFixed(2)
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
        aliasEn:""

      }
      this.discountPerc = 0
      this.payInvo.discount = 0

      this.getTotal()
      this.setFocusOnInput('dstPop3')
      //this.setFocusOnInput('dstEds')
    }

  }



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
        "perch_price": selectedItem.perch_price
      });
    }

   
    this.getTotal();
    this.updateSortedList();
    
    // this.presentToast('تم إضافة الصنف بنجاح', 'success');
  }

  validate():boolean{
    
  
    if (this.itemList.length == 0  || this.payInvo.pay_ref == "" ) {
      this.presentToast('الرجاء ادخال اصناف الي القائمة','danger')
      return false
    } 
    else if(this.payInvo.cust_id == 0 ) {
      this.presentToast('الرجاء إختيار حساب العميل','danger')
      return false
    }else if(this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
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

  

 
//edit prices for each item in itemList , by call confiramation and perform updateitem calling api 
emadFunction(itemselect){
  let item = {id:0, pay_price:0,perch_price:0}
   item.id = itemselect.item_id
     item.pay_price = itemselect.pay_price 
     item.perch_price = itemselect.perch_price
     this.priceChangeAlertConfirm(item , itemselect.item_name)
}

async priceChangeAlertConfirm(item  , item_name) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'تأكيد!',
    mode:'ios' ,
    message: 'هل تريد تعديل اسعار البيع والشراء'  + ' >>>                 للصنف ' + item_name,
    buttons: [
      {
        text: 'إلغاء',
        role: 'cancel',
        cssClass: 'secondary',
        id: 'cancel-button',
        handler: (blah) => {
          //console.log('Confirm Cancel: blah'); 
        //  this.addTolist() 
        }
      }, {
        text: 'موافق',
        id: 'confirm-button',
        handler: () => {
          console.log('Confirm Okay' , item);
            this.updateItemDetail(item)
        }
      }
    ]
  });
  
  await alert.present();
}


async updateItemDetail(item){
  await this.showLoading('جاري تعديل بيانات الصنف...', 'updating');
  
  try {
    this.api.updatePayPrice(item).subscribe(
      async (data) => {
        //console.log(data)
        await this.hideLoading();
        if (data['message'] != 'Post Not Updated') {
         this.presentToast('تم التعديل بنجاح' , 'success') 
        }else{
        this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
        } 
      }, 
      async (err) => {
        await this.handleError(err, 'updateItemDetail', 'لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري');
      }
    );
  } catch (error) {
    await this.handleError(error, 'updateItemDetail', 'حدث خطأ غير متوقع أثناء التعديل');
  }
}



//






  update() {
    console.log('update' , this.payInvo)
    let d : Date = this.payInvo.pay_date   
    this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd')
    if(this.radioVal2 == 0){
       console.log('update' , this.payInvo)
      if (this.validate() == true) {
       this.presentLoadingWithOptions('جاري حفظ البيانات ...')
       this.saveInvoInit()  
       } 

    }else if(this.radioVal2 == 1){ 
       console.log('update' , this.payInvo)
    if (this.validate() == true) {
       this.presentLoadingWithOptions('جاري حفظ البيانات ...')
       this.updateInvo() 
    } 

    } 
  }

   

  async updateInvo(){
    // Show loading indicator  
    await this.showLoading('جاري تحديث الفاتورة النهائية...', 'updating');
    
    try {
      // Optimized: Update invoice and items together in single API call
      const invoiceWithItems = {
        invoice: this.payInvo,
        items: this.itemList
      };
      
      this.api.updateSalesInvoWithItems(invoiceWithItems).subscribe(
        async (response: any) => {
          await this.hideLoading();
          this.handleUpdateSuccess();
        }, 
        async (err) => {
          await this.handleError(err, 'updateInvo', 'لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري');
        }
      );
    } catch (error) {
      await this.handleError(error, 'updateInvo', 'حدث خطأ غير متوقع أثناء التحديث');
    }
  }

  private handleUpdateSuccess() {
    // Show success message
    this.presentToast('تم الحفظ بنجاح', 'success');
    
    // Update local sales storage
    this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
    this.sales.push({
      "payInvo": this.payInvo,
      "itemList": this.itemList 
    });
    
    this.storage.set('sales', this.sales).then((response) => {
      let arr: Array<any> = [];
      arr.push({
        "payInvo": this.payInvo,
        "itemList": this.itemList 
      });
      
      this.performSync();
    });
    
    // Loading already dismissed in updateInvo success handler
  }

 
 
  
 deleteSalesitemList4update(){  
  this.api.deleteSalesitemList(this.payInvo.pay_ref).subscribe(data => {
  //console.log(data)
  if (data['message'] != 'Post Not Deleted') {
    this.saveitemList()    
  }else{
   this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger').then(()=>{
    this.loadingController.dismiss()
  })

  } 
},(err) => {
  //console.log(err);
  this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger').then(()=>{
    this.loadingController.dismiss()
  })
  
 }) 
}


 



 

 



saveitemList(){  
this.api.saveSalesitemList(this.itemList).subscribe(data=>{ 
  //console.log(data)  
  this.presentToast('تم الحفظ بنجاح' , 'success')
  this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
  this.sales.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  })
  this.storage.set('sales', this.sales).then((response) => {
  //console.log('sales', response)
  let arr:Array<any> = []
  arr.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  })
  
  this.performSync()
  });
}, (err) => {
  //console.log(err);
  this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
}, () => {
  this.loadingController.dismiss()
}
)      
}

 
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'تأكيد!',
    mode:'ios' ,
    message: 'هل تريد حذف السجل ؟ ',
    buttons: [
      {
        text: 'إلغاء',
        role: 'cancel',
        cssClass: 'secondary',
        id: 'cancel-button',
        handler: (blah) => {
          //console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'موافق',
        id: 'confirm-button',
        handler: () => {
          if (this.offline == false && this.payInvo.pay_id != undefined) {
            this.deleteSalesInvo()
          } else if(this.offline == false && this.payInvo.pay_id == undefined) {
            this.deleteSalesInvoLocal()
          }else if( this.offline == true){
            this.deleteSalesInvoLocal()
          } 
        }
      }
    ]
  });

  await alert.present();
}


delete() {
  this.presentAlertConfirm()
}


async deleteSalesInvo(){ 
  // Always show loading for delete operations
  await this.showLoading('جاري حذف الفاتورة...', 'deleting');
  
  try {
    let arr :Array<any> =[]
    arr.push({
      "payInvo": this.payInvo,
      "itemList": this.itemList 
    })
    this.logHistoryArr.push(
      {
        "id":null,
        "logRef":this.generateRandom2('delete sales'),
        "userId":this.user_info.id,
        "typee":'delete sales',
        "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
        "logStatus":0,
        "logToken":JSON.stringify(arr[0]),
        "yearId":this.year.id,
        "store_id":this.store_info.id
      }
    )
   
    const deletionData = {
      pay_id: this.payInvo.pay_id,
      pay_ref: this.payInvo.pay_ref
    };

    this.api.deleteSalesInvoWithItems(deletionData).subscribe(
      async (data) => {
        //console.log(data)
        if (data['success']) {
          await this.hideLoading();
          this.presentToast('تم الحذف بنجاح', 'success');
          
          this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
          //console.log(' case ffff ' ,this.sales)
          this.storage.set('sales', this.sales).then((response) => {
            //console.log('sales', response) 
            
            if (this.radioVal2 == 1) {
              this.performSyncDel() 
            }else{
              this.performSyncDelInitialMode()
            }
          });
        }else{
          await this.hideLoading();
          this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
        }
      },
      async (err) => {
        await this.handleError(err, 'deleteSalesInvo', 'لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري');
      }
    );
  } catch (error) {
    await this.handleError(error, 'deleteSalesInvo', 'حدث خطأ غير متوقع أثناء الحذف');
  }
}



 


deleteSalesInvoLocal(){ 
  this.storage.get('salesLocalDelete').then((response) => {
    if (response) {
      this.salesLocalDelete = response
      //console.log(this.salesLocalDelete) 
    }
  });

  //
 
  if(this.payInvo.pay_id == undefined){
   this.salesLocal= this.salesLocal.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
   //console.log('case undefined' , this.salesLocal)
   this.storage.set('salesLocal', this.salesLocal).then((response) => {
    //console.log('resoponse set', response) 
    this.presentToast('تم الحذف بنجاح' , 'success') 
    this.back()
  });
  }else{
    this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
     //console.log('case defined',this.sales)
     this.storage.set('sales', this.sales).then((response) => {
     //console.log('sales', response) 
    this.salesLocalDelete.push({
      "payInvo": this.payInvo,
      "itemList": this.itemList 
    })
    this.storage.set('salesLocalDelete', this.salesLocalDelete).then((response) => {
      //console.log('resoponse set', response) 
      this.presentToast('تم الحذف بنجاح' , 'success') 
      this.back()
    }); 
  });
  }

}



deleteSalesitemList(){  
   this.api.deleteSalesitemList(this.payInvo.pay_ref).subscribe(data => {
   //console.log(data)
   if (data['message'] != 'Post Not Deleted') {
   
      this.sales = this.sales.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
       //console.log(' case ffff ' ,this.sales)
      this.storage.set('sales', this.sales).then((response) => {
      //console.log('sales', response) 
      
        if (this.radioVal2 == 1) {
          this.performSyncDel() 
        }else{
           this.performSyncDelInitialMode()
        }
     
      
      });
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
    
    // Update invoice with selected account
    this.payInvo.cust_id = account.id;
    this.payInvo.sub_name = account.sub_name;
    
    console.log('Account selected in edit-sales:', this.selectedAccount);
  }
}

// Handle account balance loaded
onAccountBalanceLoaded(balance: any) {
  if (balance && this.selectedAccount) {
    // Update the current customer status based on balance
    this.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
    this.selectedAccount.currentCustumerStatus = this.currentCustumerStatus;
    this.selectedAccount.sub_balance = balance.current_balance;
    console.log('Account balance loaded in edit-sales:', balance);
  }
}

// Load account balance when page initializes with existing invoice data
loadInitialAccountBalance() {
  if (this.payInvo && this.payInvo.cust_id && this.store_info && this.year) {
    // Get account balance for the customer in the invoice
    this.api.getAccountBalance(this.payInvo.cust_id, this.store_info.id, this.year.id).subscribe(
      (response: any) => {
        if (response.success && response.data) {
          // Update selected account balance
          this.selectedAccount.sub_balance = response.data.current_balance;
          this.selectedAccount.currentCustumerStatus = response.data.status === 'debit' ? 0 : 1;
          this.currentCustumerStatus = this.selectedAccount.currentCustumerStatus;
          
          // Populate selectedAccount with customer data
          this.selectedAccount.id = this.payInvo.cust_id;
          this.selectedAccount.sub_name = this.payInvo.sub_name;
          
          console.log('Initial account balance loaded in edit-sales:', response.data);
        }
      },
      (error) => {
        console.error('Error loading initial account balance:', error);
      }
    );
  }
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

resortItemList(){
  this.isItemListSorted = false
  this.sortItemListAlphabetically()
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

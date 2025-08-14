import { DatePipe, Location } from '@angular/common';
import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';
import { Storage } from '@ionic/storage';
import { ItemModalPage } from '../item-modal/item-modal.page';
import { FilterPipe } from '../sales/pipe';
import { FilterPipe2 } from '../sales/pipe2';
import { FilterPipe3 } from '../sales/pipe3';
import { StockServiceService } from '../syncService/stock-service.service';
import * as momentObj from 'moment';
import { Subscription } from 'rxjs';
import { PriceAdjustmentDialogComponent } from '../component/price-adjustment-dialog/price-adjustment-dialog.component';
@Component({
  selector: 'app-edit-perch',
  templateUrl: './edit-perch.page.html',
  styleUrls: ['./edit-perch.page.scss'],
})
export class EditPerchPage implements OnInit { 
  @ViewChild("dstEp") dstEp: ElementRef;
  @ViewChild('qtyIdEp') qtyIdEp; 
 loadingItems:boolean = false
  @ViewChild('dstPop4') dstPop4; 
  @ViewChild('popInput4') popInput4; 
  @ViewChild('popover4') popover4;
discountType: string = 'percentage'; // 'percentage' or 'amount'
discountAmount: number = 0;
calculatedDiscountPerc: number = 0;
calculatedDiscountAmount: number = 0;

  @ViewChild('popoverNotif4') popoverNotif4;
  notifArr:Array<any> =[]
  showNotif = false
  LogHistoryLocalArr:Array<any> =[]
  logHistoryArr:Array<any>=[];
  isOpenNotif = false ;
  subiscribtionNotif:Subscription;
  newNotif = false ;
 
  currenQty:any = 0
  firstQty:any = 0
  perchTotQty:any = 0
  payTotQty:any = 0
  perchTot :any = 0
  qtyReal:any = 0
  availQty :any = 0

  isOpen = false; 
  payArray:any ;  
  sub_account:Array<any> =[]
  sub_accountLocalPurch: Array<any> = []
  items: Array<any> = []
  itemsLocal: Array<any> = []
  itemList: Array<any> = []
  sortedItemList:Array<any> =[]
  isItemListSorted:boolean = false
  searchTerm:string = ''
  highlightedIndex:number = -1
  searchMatches:number[] = []
  
  // Search functionality methods
  onSearchTermChange() {
    this.searchMatches = [];
    this.highlightedIndex = -1;
    
    if (!this.searchTerm.trim()) {
      return;
    }
    
    const displayList = this.getDisplayItemList();
    const searchLower = this.searchTerm.toLowerCase();
    
    displayList.forEach((item, index) => {
      if (item.item_name && item.item_name.toString().toLowerCase().includes(searchLower)) {
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
      this.highlightedIndex = this.highlightedIndex === 0 ? this.searchMatches.length - 1 : this.highlightedIndex - 1;
    }
    
    this.scrollToHighlightedItem();
  }
  
  scrollToHighlightedItem() {
    if (this.highlightedIndex >= 0 && this.highlightedIndex < this.searchMatches.length) {
      const matchIndex = this.searchMatches[this.highlightedIndex];
      const element = document.querySelector(`tr[data-index="${matchIndex}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
  
  highlightText(text: string, searchTerm: string): string {
    if (!searchTerm || !text) {
      return text;
    }
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  
  isSearchMatch(index: number): boolean {
    return this.searchMatches.includes(index);
  }
  
  isHighlighted(index: number): boolean {
    return this.highlightedIndex >= 0 && this.searchMatches[this.highlightedIndex] === index;
  }
  
  getSearchResultText(): string {
    if (this.searchMatches.length === 0) {
      return 'لا توجد نتائج';
    }
    return `${this.highlightedIndex + 1} من ${this.searchMatches.length}`;
  }
  sub_accountPurch:Array<any> =[]
  purchLocal: Array<any> = []
  purchase:Array<any> =[]
  purchLocalUpdate: Array<any> = []
  purchLocalDelete: Array<any> = []
  randomsNumber: Array<any> = []
  store_info: { id: any , location :any ,store_name:any , store_ref:any }
  user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
  store_id : any=1
  sub_nameNew :any = ""
  selectedItem : {id:any ,pay_ref:any,item_name:any,pay_price:any,perch_price:any,item_unit:any,item_desc:any,parcode:any,qty:any,tot:any ,dateCreated:any,aliasEn:any};
  selectedAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any,cat_id:any,cat_name:any,currentCustumerStatus:any};
  payInvo : {pay_id:any ,pay_ref:any ,store_id:any,tot_pr:any,pay:any,pay_date:any,pay_time:any,user_id:any,cust_id:any,pay_method:any,discount:any ,changee:any,sub_name:any,payComment:any,nextPay:any,yearId:any};
  discountPerc :any =0
  radioVal : any = 0
  offline: boolean =false ;   
  searchLang :any = 0
  showMe:any =null
firstq : {id:any ,item_id:any , store_id:any , quantity :any ,	fq_year:any ,	pay_price:any ,	perch_price:any , item_name:any}
 
aliasTerm :any =""
searchResult :Array<any> =[]
aliasResult :Array<any> =[]
year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any} 

  constructor(private behavApi:StockServiceService ,private _location: Location ,private alertController: AlertController,private route: ActivatedRoute, private rout : Router,private storage: Storage,private modalController: ModalController,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController) {
  this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",currentCustumerStatus:0};
  this.route.queryParams.subscribe(params => {
    if (params && params.payInvo) {
      this.payInvo = JSON.parse(params.payInvo);
      this.selectedAccount.sub_name = JSON.parse(params.sub_name);
      this.user_info = JSON.parse(params.user_info);
      this.store_info = JSON.parse(params.store_info);
      this.itemList = JSON.parse(params.itemList);
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
    aliasEn:""
  }
   
   }

  ngOnInit() { 
    // Check category visibility setting
     
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
   ionViewDidEnter(){
  
  } 
  

  


 

  

  getStockItems(pickName?) {
    
      this.api.stockItems(1,this.year.id).subscribe(data => {
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
        this.storage.set('itemsLocal' , this.items).then((response) => {
               
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
       
  
  }



   ionViewDidLeave(){
     
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
       // After store info is loaded, get account balance if supplier is selected
       this.loadInitialAccountBalance();
     }
   }); 

   this.storage.get('itemsLocal').then((response) => {
    if (response) {
       this.items = response
    }
  });
  
 }


 presentPopoverNotif(e?: Event) {
  //console.log('preent me', e)
   this.notifArr = []
   this.showNotif = false
   this.popoverNotif4.event = e;
   this.isOpenNotif = true;  
 }

 didDissmisNotif(){
  this.isOpenNotif = false
  //console.log('dismissOver') 
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
    displayList[i].tot = +displayList[i].quantity * +displayList[i].perch_price;
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

  
  

  
  getAllStockItemsWithouteCounts() {
    this.storage.get('year').then((response) => {
     if (response) {
      this.year = response
      //console.log('this.year.id',this.year.id)
      if (this.offline == false) {
        // this.loadingItems = true
        this.api.getAllStockItemsWithouteCounts(1,this.year.id).subscribe(data => {
          //console.log(data)
          let res = data
          this.items = res['data']
          this.storage.set('itemsLocal' , this.items).then((response) => {
             
          }); 
           
         
        }, (err) => {
          // this.loadingItems = false
          //console.log(err);
        },
          () => {
            // this.loadingItems = false
          }
        )
      }  
      } 
  }); 
    }

 
  
 


 
    
 

 prepareInvo(){ 
  this.sub_nameNew = ""
  this.radioVal = 0
  this.payInvo ={
    pay_id:this.payArray[0].pay_id ,
    pay_ref:this.payArray[0].pay_ref ,
    store_id:this.payArray[0].store_id,
    tot_pr:this.payArray[0].tot_pr,
    pay:this.payArray[0].pay,
    pay_date:this.payArray[0].pay_date,
    pay_time:this.payArray[0].pay_time,
    user_id:this.payArray[0].user_id,
    cust_id:this.payArray[0].cust_id,
    pay_method:this.payArray[0].pay_method,
    discount:this.payArray[0].discount ,
    changee:this.payArray[0].changee,
    sub_name:this.payArray[0].sub_name,
    payComment:this.payArray[0].payComment,
    nextPay:this.payArray[0].nextPay,
    yearId:this.payArray[0].yearId
  };
this.selectedAccount.sub_name = this.payArray[0].sub_name
this.pickAccount(this.payArray[0].sub_name)
 //console.log( this.payInvo) 
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
  if (Input == 'dstEp') { 
    this.dstEp.nativeElement.focus();
   } else if(Input == 'dstPop4') {
    this.dstPop4.setFocus();
    this.isOpen = true;
    this.clear()
    this.searchResult = this.items
    setTimeout(() => {
        this.popInput4.setFocus(); 
    }, 1500);
  
   }else if(Input == 'qtyIdEp') {
    this.qtyIdEp.setFocus();  
   }else if(Input == 'popInput4'){
    this.popInput4.setFocus();  
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

  // radioChange(ev){
  //   //console.log(ev.target.value) 
  //  }

  pickAccount(ev  , firstLoad?){
    let evVal 
    if(firstLoad){
     evVal = ev
    }else{
    evVal = ev.target.value
    }
    //console.log('evVal',evVal);
  
    let fl= this.sub_account.filter(x=>x.sub_name == evVal)
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
    //console.log('jjjj', this.selectedAccount);
    this.payInvo.cust_id = this.selectedAccount.id
  
}else{
  this.presentToast('خطأ في اسم الحساب ', 'danger') 
  this.selectedItem.item_name =""
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
 }else {
    fl= this.items.filter(x=>x.item_name == evVal)
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
      aliasEn:fl[0]['aliasEn']
    }
    //console.log( this.selectedItem);
   this.setFocusOnInput('qtyIdEp')
  } else{
    this.presentToast('خطأ في اسم الصنف ', 'danger') 
    this.selectedItem.item_name =""
  }
  }
  

  async presentModal2(id?, status?) {
    
   
  
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
  


  qtyhange(ev){
    //console.log(ev);
    this.selectedItem.tot = (this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2)
  }

  pricehange(ev){
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

 

  refresh(para?){
    
      
      this.getAllStockItemsWithouteCounts()
     
    
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
      parcode: item.parcode || 0
    }));

    const modal = await this.modalController.create({
      component: PriceAdjustmentDialogComponent,
      cssClass: 'price-adjustment-modal',
      componentProps: {
        itemsList: itemsToPass,
        mode: 'purchase'
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
        // Update the perch_price and recalculate total
        this.itemList[itemIndex].perch_price = parseFloat(updatedItem.perch_price) || 0;
        this.itemList[itemIndex].tot = (this.itemList[itemIndex].quantity * this.itemList[itemIndex].perch_price).toFixed(2);
      }
    });

    // Recalculate totals
    this.getTotal();
    
    this.presentToast('تم تعديل الأسعار بنجاح', 'success');
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
        "tot" :this.selectedItem.tot, 
        "store_id" :+this.store_info.id, 
        "yearId" :+this.year.id, 
        "item_id" : +this.selectedItem.id,
        "dateCreated" : r,
        "perch_price":this.selectedItem.perch_price
        })
      } else {
         
        this.selectedItem.qty = +fl[0].quantity + +this.selectedItem.qty
        let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
        this.itemList[index].quantity = +this.selectedItem.qty
        this.itemList[index].tot =  (+this.selectedItem.qty * +this.selectedItem.perch_price).toFixed(2) 
       
       
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
      this.getTotal()
      this.setFocusOnInput('dstPop4')
    }

  }

  presentPopover(e?: Event) {
    //console.log('preent me', e)
     this.popover4.event = e;
     this.isOpen = true;
     this.clear()
     this.searchResult = this.items
     setTimeout(() => {
     this.setFocusOnInput('popInput4')
     }, 2000);
   }
   
   
   didDissmis(){
    this.isOpen = false
    //console.log('dismissOver')
    this.setFocusOnInput('qtyIdEP')
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
      aliasEn:""
    }
   }else{
    this.searchTerm = "" 
   }
  }
  



 validate():boolean{ 
  if (this.itemList.length == 0  || this.payInvo.pay_ref == "" ) {
    this.presentToast('الرجاء ادخال اصناف الي القائمة','danger')
    return false
  } 
  else if(+this.payInvo.cust_id == 0  ) {
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


doAfterDissmiss(data){
  if (data.role == 'save' ) {
    //console.log('edit' ,data.data)
    this.saveItem(data.data )  
  } 
}

saveItem(mdata){ 
  this.presentLoadingWithOptions('جاري حفظ البيانات ...')

  this.logHistoryArr.push(
    {
      "id":null,
      "logRef":this.generateRandom2('insert item'),
      "userId":this.user_info.id,
      "typee":'insert item',
      "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
      "logStatus":0,
      "logToken":JSON.stringify(mdata[0]),
      "yearId":this.year.id,
      "store_id":this.store_info.id
    }
    )

 this.api.saveitemMulti(mdata[0]).subscribe(data => {
   //console.log(data)
   if (data['message'] != 'Post Not Created') { 
     this.firstq = {id:null ,item_id:data['message'] , store_id:this.store_info.id , quantity :mdata[1].quantity ,pay_price:mdata[0].pay_price,perch_price:mdata[0].perch_price ,fq_year:'2022',item_name:mdata[0].item_name }
     this.saveFierstQty(mdata[0].item_name) 
   }else{
     this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
   }
  
 }, (err) => {
   //console.log(err);
   this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
 }) 
}

async saveFierstQty(item_name){  
this.api.saveFirstQty(this.firstq).subscribe(data=>{ 
 //console.log(data)  
 //this.getItems(item_name) 


  this.performSyncItem(item_name)
 this.presentToast('تم الحفظ بنجاح' , 'success')
}, (err) => {
 //console.log(err);
 this.presentToast('1لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')

 this.loadingController.dismiss()

}, () => {
 this.loadingController.dismiss()
}
)      
}

preparenewaccount(){ 
  if (this.selectedAccount.sub_name.length>0 && this.selectedAccount.id == null) {
    
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

update() {
  //console.log('papa',this.payInvo)
  let d : Date = this.payInvo.pay_date  
  this.payInvo.sub_name = this.selectedAccount.sub_name  
  this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd')
  if(this.payInvo.nextPay != null){
    this.payInvo.nextPay = this.datePipe.transform(d, 'yyyy-MM-dd')
  }
 
  if (this.validate() == true) {
     this.presentLoadingWithOptions('جاري حفظ البيانات ...')
     this.updateInvo() 
  } 
}

async  performSyncItem(item_name?){
  if(item_name){
    await this.getStockItems(item_name)
  }else{
   await this.getAllStockItemsWithouteCounts()
    await this.getStockItems() 
  }  
}

generateRandom2(role):any{
  let da = new Date 
  //console.log(da)
  let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString() + role
  return this.store_info.store_ref + randomsNumber 
}


updateInvo(){
  // Optimized: Update invoice and items together in single API call
  const invoiceWithItems = {
    invoice: this.payInvo,
    items: this.itemList
  };
  
  this.api.updatePerchInvoWithItems(invoiceWithItems).subscribe(
    (response: any) => {
      this.handleUpdateSuccess();
    }, 
    (err) => {
      this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger').then(()=>{
        this.loadingController.dismiss()
      })
    }
  );
}

private handleUpdateSuccess() {
  // Show success message
  this.presentToast('تم الحفظ بنجاح', 'success');
  
  // Update local purchase storage
  this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
  this.purchase.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  });
  
  this.storage.set('purchase', this.purchase).then((response) => {
    // Purchase saved to local storage
  });

  let arr: Array<any> = [];
  arr.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  });
  
  // Perform sync
  this.performSync();
  
  // Dismiss loading
  this.loadingController.dismiss();
}

 


  
 deleteSalesitemList4update(){  
  this.api.deletePerchitemList(this.payInvo.pay_ref).subscribe(data => {
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
this.api.savePerchitemList(this.itemList).subscribe(data=>{ 
  //console.log(data)  
  this.presentToast('تم الحفظ بنجاح' , 'success')
  this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
  this.purchase.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  })
  this.storage.set('purchase', this.purchase).then((response) => {
  //console.log('purchase', response) 
  
  });
  let arr:Array<any> = []
  arr.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  })
  

  // 
  this.performSync()


}, (err) => {
  //console.log(err);
  this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
}, () => {
  this.loadingController.dismiss()
}
)      
}

 


    async  performSync(){  
      this.back()
    }


   async  performSyncDel(){ 
    this.back()
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
            this.deleteSalesInvo()
          
          }
        }
      ]
    });

    await alert.present();
  }


delete() {
  this.presentAlertConfirm()
}


deleteSalesInvo(){ 
  this.presentLoadingWithOptions('جاري حذف البيانات ...')
  
  const deletionData = {
    pay_id: this.payInvo.pay_id,
    pay_ref: this.payInvo.pay_ref
  };

  this.api.deletePerchInvoWithItems(deletionData).subscribe(data => {
    //console.log(data)
    if (data['success']) {
      this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
      //console.log(' case ffff ' ,this.purchase)
      this.storage.set('purchase', this.purchase).then((response) => {
        //console.log('purchase', response) 
        this.performSyncDel()
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

 


deleteSalesitemList(){  
   this.api.deletePerchitemList(this.payInvo.pay_ref).subscribe(data => {
   //console.log(data)
   if (data['message'] != 'Post Not Deleted') {
   
      this.purchase = this.purchase.filter(item => item.payInvo.pay_ref != this.payInvo.pay_ref);
       //console.log(' case ffff ' ,this.purchase)
      this.storage.set('purchase', this.purchase).then((response) => {
      //console.log('purchase', response) 
      this.performSyncDel()
     
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
      currentCustumerStatus: account.currentCustumerStatus || 0
    };
    
    // Update invoice with selected account
    this.payInvo.cust_id = account.id;
    this.payInvo.sub_name = account.sub_name;
    
    console.log('Account selected in edit-perch:', this.selectedAccount);
  }
}

// Handle account balance loaded
onAccountBalanceLoaded(balance: any) {
  if (balance && this.selectedAccount) {
    // Update the current supplier status based on balance
    this.selectedAccount.sub_balance = balance.current_balance;
    this.selectedAccount.currentCustumerStatus = balance.status === 'debit' ? 0 : 1;
    console.log('Account balance loaded in edit-perch:', balance);
  }
}

// Load account balance when page initializes with existing invoice data
loadInitialAccountBalance() {
  if (this.payInvo && this.payInvo.cust_id && this.store_info && this.year) {
    // Get account balance for the supplier in the invoice
    this.api.getAccountBalance(this.payInvo.cust_id, this.store_info.id, this.year.id).subscribe(
      (response: any) => {
        if (response.success && response.data) {
          // Update selected account balance
          this.selectedAccount.sub_balance = response.data.current_balance;
          this.selectedAccount.currentCustumerStatus = response.data.status === 'debit' ? 0 : 1;
          
          // Populate selectedAccount with supplier data
          this.selectedAccount.id = this.payInvo.cust_id;
          this.selectedAccount.sub_name = this.payInvo.sub_name;
          
          console.log('Initial account balance loaded in edit-perch:', response.data);
        }
      },
      (error) => {
        console.error('Error loading initial account balance in edit-perch:', error);
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

}

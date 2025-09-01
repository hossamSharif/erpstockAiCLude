import { Component, OnInit, ViewChild, ElementRef ,Renderer2,Input, ChangeDetectorRef} from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable } from 'rxjs';
import { AlertController, IonInput, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { FilterPipe } from '../sales/pipe';
import { AuthServiceService } from '../auth/auth-service.service';
import { PrintModalPage } from '../print-modal/print-modal.page';
import { NavigationExtras, Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { SortingService, SortConfig } from '../services/sorting.service'; 

@Component({
  selector: 'app-items-report',
  templateUrl: './items-report.page.html',
  styleUrls: ['./items-report.page.scss'],
})
export class ItemsReportPage implements OnInit {
  @ViewChild("dst") nameField: ElementRef;
  @ViewChild('qtyId') qtyId;  
   @ViewChild('dstPop') dstPop;
   @ViewChild('popInput') popInput; 
    @ViewChild('popover') popover;
    searchResult :Array<any> =[]
  isOpen : boolean = false;
  payArray :Array<any> = []
  sortedPayArray :Array<any> = []
  currentTransactionsSort: SortConfig | null = null
  payArrayDaily :Array<any> = []
  perchDetailsArr :Array<any> = []
  payDetailsArr :Array<any> = []
  tswiaDetailsArr :Array<any> = []
  hasParameter: boolean = false;
  searchTerm : any = ""
   searchLang :any = 0
  sub_account1:Array<any> =[]
  sub_account2:Array<any> =[]
  sub_accountLocalSales:Array<any> =[]
  sub_accountLocalPurch:Array<any> =[]
  sub_accountSales:Array<any> =[]
  sub_accountPurch:Array<any> =[]
  items:Array<any> =[]
  itemsLocal:Array<any> =[]
  itemList:Array<any> =[]
  sortedItems:Array<any> =[]
  currentSort: SortConfig | null = null
  salesLocal:Array<any> =[]
  loading:boolean = false ;
  sales:Array<any> =[]
  randomsNumber:Array<any> =[]
  store_info : {id:any , location :any ,store_name:any , store_ref:any }
  user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
  sub_nameNew :any = ""
  selectedItem : {id:any ,pay_ref:any,item_name:any,pay_price:any,perch_price:any,item_unit:any,item_desc:any,parcode:any,qty:any,tot:any ,dateCreated:any,availQty:any,firstQuantity:any ,aliasEn:any};
  selectedAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any};
  payInvo : {pay_id:any ,pay_ref:any ,store_id:any,tot_pr:any,pay:any,pay_date:any,pay_time:any,user_id:any,cust_id:any,pay_method:any,discount:any ,changee:any,sub_name:any};
  radioVal : any = 0
  printMode :boolean = false
  printArr:Array<any> =[]
  offline: boolean = false;
  color :any ='dark'
  
  showEmpty :boolean = false
  showError :boolean = false
  startingDate :any

   
 
  endDate :any
  year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
  loadingItems:boolean = false


   qtyReal:any = 0
   availQty :any = 0
   currenQty:any = 0
   firstQty:any = 0
   perchTotQty:any = 0
   payTotQty:any = 0 
   perchTot :any = 0
   payTot :any = 0
   totSales:any = 0
   totPurch:any = 0


   selectedItemNew: {
    id:any ,
    pay_ref:any,
    item_name:any,
    pay_price:any,
    perch_price:any,
    item_unit:any,
    item_desc:any,
    parcode:any
    qtyReal:any 
   availQty :any 
   currenQty:any 
   firstQty:any 
   perchTotQty:any 
   payTotQty:any   
   totSales:any 
   totPurch:any 
   }

  constructor( private route: ActivatedRoute,private rout : Router,private renderer : Renderer2,private modalController: ModalController,private alertController: AlertController, private authenticationService: AuthServiceService,private storage: Storage,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController, private sortingService: SortingService, private cdr: ChangeDetectorRef) {
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
      firstQuantity:0 ,
      aliasEn:""

    }

    this.selectedItemNew = {
      id:undefined, 
      pay_ref:"",
      item_desc:"",
      item_name:"",
      item_unit:"",
      parcode:0,
      pay_price:0,
      perch_price:0, 
      qtyReal:0,
      availQty:0,
      currenQty:0,
      firstQty:0,
      perchTotQty:0,
      payTotQty:0, 
      totSales:0,
      totPurch:0
    }

    let d = new Date
    this.startingDate = this.datePipe.transform(d, 'yyyy-MM-dd')
    this.endDate = this.datePipe.transform(d, 'yyyy-MM-dd')


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

  ionViewDidEnter(){

    this.route.queryParams.subscribe(params => {
      if (params['item']) {
        try {
          const item = JSON.parse(params['item']);
          this.handleItemFromNavigation(item);
          return; // Exit early if we have a navigation parameter
        } catch (error) {
          console.error('Error parsing item parameter:', error);
        }
       }
     });


    if (this.selectedItem.id){
      console.log('ionViewDidEnter' , this.selectedItem.id)
      this.search()
      //console.log('im sarching for you')
    }
  }

  ngOnInit() {
     this.route.queryParams.subscribe(queryParams => {
      if (Object.keys(queryParams).length > 0) {
        this.hasParameter = true;
      }
    });
    this.prepareOffline()
    this.getAppInfo()

    this.route.queryParams.subscribe(params => {
      if (params['item']) {
        try {
          console.log('item param',params['item'])
          const item = JSON.parse(params['item']);
          this.handleItemFromNavigation(item);
        } catch (error) {
          console.error('Error parsing item parameter:', error);
        }
      }
    });
  }

   handleItemFromNavigation(item: any) {
    // Wait for items to be loaded before processing
    setTimeout(() => {
      if (this.items && this.items.length > 0) {
        this.selectFromPop(item);
        this.search();
      } else {
        // If items not loaded yet, wait a bit more
        setTimeout(() => {
          if (this.items && this.items.length > 0) {
            this.selectFromPop(item);
            this.search();
          }
        }, 2000);
      }
    }, 1000);
  }

readItemByIdQty(){  
  // This method is now integrated into the search() method which uses getCompleteItemReport
  // Keeping it here for backward compatibility if called from other places
  if (!this.selectedItem?.id) {
    return;
  }

  this.api.readItemByIdQty(this.store_info.id, this.selectedItem.id, this.year.id).subscribe(data => {
     console.log('readItemByIdQty',data)
     let res = data['data'][0]
     if(res && res['message'] != 'No record Found'){
       this.payTotQty = res.salesQuantity  
       this.availQty = res.availQty   
       this.qtyReal = res.qtyReal 
       this.perchTotQty = res.perchQuantity 
       this.firstQty = res.firstQuantity 
       console.log('readItemByIdQty',this.payTotQty , this.availQty , this.qtyReal , this.perchTotQty , this.firstQty) 
       
       this.selectedItemNew = {
         id: res.id, 
         pay_ref: "",
         item_desc: res.item_desc || "",
         item_name: res.item_name || "",
         item_unit: res.item_unit || "",
         parcode: res.item_parcode || 0,
         pay_price: res.pay_price || 0,
         perch_price: res.perch_price || 0, 
         qtyReal: res.qtyReal || 0,
         availQty: res.availQty || 0, 
         firstQty: res.firstQuantity || 0,
         perchTotQty: res.perchQuantity || 0,
         payTotQty: res.salesQuantity || 0, 
         totSales: res.sales28 || 0,
         totPurch: res.purch28 || 0,
         currenQty: 0,
       }

       this.getQtyTotalItemId() 
     }
   }, (err) => {
     console.log(err);
     this.presentToast('خطأ في الإتصال حاول مرة أخرى' , 'danger')
   },
   () => {
   })  
 }


 getQtyTotalItemId(){  
  //console.log('perchTotQty',this.perchTotQty ,this.payTotQty )
  //تجميع الكيات السالبة وتحويلها لموجب لإضافتها للمشتريات
  if( (+this.selectedItemNew.availQty  - +this.selectedItemNew.qtyReal) < 0 ){ 
    this.selectedItemNew.perchTotQty = +this.selectedItemNew.perchTotQty +  Math.abs((+this.selectedItemNew.availQty  - +this.selectedItemNew.qtyReal))  
  }else if((+this.selectedItemNew.availQty  - +this.selectedItemNew.qtyReal) > 0 ){
    this.selectedItemNew.payTotQty = +this.selectedItemNew.payTotQty + (+this.selectedItemNew.availQty  - +this.selectedItemNew.qtyReal)  
  } 
  this.selectedItemNew.availQty = +this.selectedItemNew.firstQty + +this.selectedItemNew.perchTotQty  - +this.selectedItemNew.payTotQty
    console.log( this.selectedItemNew.availQty)
 } 

 async  performSync(){
  
  await this.getAllStockItemsWithouteCounts()
  }
 getItemLocalOff(){
  this.storage.get('itemsLocal').then((response) => {
    if (response) {
      this.itemsLocal = response 
       //console.log(this.itemsLocal)  
       this.items = this.itemsLocal
      
      this.searchResult = this.items  
    }
  }); 
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
            // this.items.forEach(element => {
            //   if(+element.tswiaQuantity > 0){
            //     element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity 
    
            //   }else if(+element.tswiaQuantity < 0){
            //     element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
            //   } 
            //   element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
            // });
            // this.searchResult = this.items
            
            // Apply sorting after loading items
            this.applySorting();
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
          
          // Apply sorting after loading items from offline
          this.applySorting();
          this.searchResult = this.items
        }
        } 
    }); 
      }



  getStockItems() {
    this.loadingItems = true
    this.storage.get('year').then((response) => {
      if (response) {
        this.year = response 
         if (this.offline == false) {
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
          element.availQty = +element.quantity
          
        });
      }, (err) => {
        //console.log(err);
        this.loadingItems = false
      },
        () => {
          this.loadingItems = false
        }
      )
    } else {
      this.items = this.itemsLocal
      this.items.forEach(element => {
        if(+element.tswiaQuantity > 0){
          element.salesQuantity = +element.salesQuantity + +element.tswiaQuantity  
        }else if(+element.tswiaQuantity < 0){
          element.perchQuantity = +element.perchQuantity + Math.abs(+element.tswiaQuantity) 
        }
        element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
        element.availQty = +element.quantity
      });  
    }
      } 
    });
  }

  // sumStocksItems(){
  //   this.api.stockItems(1).subscribe(data => {
  //     //console.log(data)
  //     let res = data
  //     let arr = res['data']
  //     for (let index = 0; index < this.items.length; index++) {
  //       const element = this.items[index];
  //       let flt = arr.filter(x=>x.id == element.id)
  //       if(flt.length>0){
  //         //console.log('here we are ')
  //         element.perchQuantity =  +element.perchQuantity + +flt[0].perchQuantity
  //       //  element.firstQuantity =  +element.firstQuantity + +flt[0].firstQuantity
  //         element.salesQuantity =  +element.salesQuantity + +flt[0].salesQuantity
  //       }
  //     } 
  //     this.items.forEach(element => {
  //       element.quantity = (+element.perchQuantity + +element.firstQuantity) - +element.salesQuantity
  //     });
      
  //   }, (err) => {
  //     //console.log(err);
  //   },
  //     () => {
  //     }
  //   )
  // }

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
          // Remove getAllStockItemsWithouteCounts() call since enhanced component handles this
          this.getSalesAccount()   
           
          this.getItemLocalOff()
        }
      });  
      this.storage.get('searchLang').then((response) => {
        if (response) {
          this.searchLang = response
          //console.log('searchLang' ,this.searchLang) 
        }
      }); 
    }
 
    getSalesAccount(){
      if (this.offline == false) {
      this.api.getSalesAccounts(this.store_info.id,this.year.id).subscribe(data =>{
        let res = data
        this.sub_account1 = res ['data']
        //console.log(this.sub_account1)
          this.addSubaccountLocal()
      }, (err) => {
      //console.log(err);
    }) 
    }else{
      this.MixSubaccountSalesOffline()
    } 
    }
 
  
 addSubaccountLocal(){
  if (this.sub_account1) {
    if (this.sub_accountLocalSales) {
      for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
        const element = this.sub_accountLocalSales[i];
        this.sub_account1.push(element)
      }
    }
  } else{
    if (this.sub_accountLocalSales) {
      this.sub_account1 = this.sub_accountLocalSales 
    }
  } 
  }

//Yaw
  MixSubaccountSalesOffline(){
    this.sub_account1=[] 
      if (this.sub_accountLocalSales) {
        for (let i = 0; i < this.sub_accountLocalSales.length; i++) {
          const element = this.sub_accountLocalSales[i];
          this.sub_account1.push(element)
        }
      }

      if (this.sub_accountSales) {
        for (let i = 0; i < this.sub_accountSales.length; i++) {
          const element = this.sub_accountSales[i];
          this.sub_account1.push(element)
        }
      } 
  }

///

getPurchAccount(){
  if (this.offline == false) {
    this.api.getPerchAccounts(this.store_info.id,this.year.id).subscribe(data =>{
       let res = data
       this.sub_account1 = res ['data']
       //console.log(this.sub_account1)
        this.addSubaccountLocalPurch()
     }, (err) => {
     //console.log(err);
   }) 
  }else{
    this.MixSubaccountPurchOffline()
   } 
 } 

addSubaccountLocalPurch(){
  if (this.sub_account2) {
    if (this.sub_accountLocalPurch) {
      for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
        const element = this.sub_accountLocalPurch[i];
        this.sub_account2.push(element)
      }
    }
  } else{
    if (this.sub_accountLocalPurch) {
      this.sub_account2 = this.sub_accountLocalPurch 
    }
  } 
}

MixSubaccountPurchOffline(){
  this.sub_account2=[] 
    if (this.sub_accountLocalPurch) {
      for (let i = 0; i < this.sub_accountLocalPurch.length; i++) {
        const element = this.sub_accountLocalPurch[i];
        this.sub_account2.push(element)
      }
    }
    if (this.sub_accountPurch) {
      for (let i = 0; i < this.sub_accountPurch.length; i++) {
        const element = this.sub_accountPurch[i];
        this.sub_account1.push(element)
      }
    } 
  }
 
prepareOffline(){
  this.storage.get('salesLocal').then((response) => {
    //console.log('saleslocal heres',this.salesLocal) 
    if (response) {
      this.salesLocal = response
      //console.log('salesLocal',this.salesLocal) 
    }
  });

  this.storage.get('sales').then((response) => {
    //console.log('sales heres',this.sales) 
    if (response) {
      this.sales = response
      //console.log('sales',this.sales) 
    }
  });

  this.storage.get('itemsLocal').then((response) => {
    if (response) {
      this.itemsLocal = response 
       //console.log(this.itemsLocal)  
       this.items = this.itemsLocal  
    }
  });  
 
 this.storage.get('sub_accountLocalSales').then((response) => {
   if (response) {
     this.sub_accountLocalSales = response 
    
      //console.log(this.sub_accountLocalSales)  
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

radioChange(ev){
  //console.log(ev.target.value) 
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
    
     } else if(Input == 'popInput'){
      this.popInput.setFocus();  
     }
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
        firstQuantity:0,
        aliasEn:"",
      }
     }else{
      this.searchTerm = "" 
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

  



 searchItem(ev){
      this.searchResult = []
   //   this.aliasTerm = ev.target.value 
      const filterPipe = new FilterPipe;   
      let  fiteredArr :any = filterPipe.transform(this.items,ev.target.value); 
      if(fiteredArr.length>0){
        fiteredArr.forEach(element => {
          this.searchResult.push( element)
        });
      }    
    }



didDissmis(){
      this.isOpen = false
      //console.log('dismissOver')
      this.readItemByIdQty()
      
      this.setFocusOnInput('qtyId')
    }

pickDetail(ev){  
  this.readItemByIdQty() 
  let fl : Array<any>=[]
  if(this.searchLang == 1){
     fl= this.items.filter(x=>x.item_desc == ev.target.value)
    //console.log('hyrr',fl);
  }else {
     fl= this.items.filter(x=>x.item_name == ev.target.value)
    //console.log(fl);
  }
   

  //console.log(fl);
  this.selectedItem = {
    id:fl[0]['id'],
    dateCreated:fl[0]['dateCreated'],
    pay_ref:"",
    item_desc:fl[0]['item_desc'],
    item_name:fl[0]['item_name'],
    item_unit:fl[0]['item_unit'],
    parcode:fl[0]['parcode'],
    pay_price:fl[0]['pay_price'],
    perch_price:fl[0]['perch_price'],
    qty:0,
    tot:fl[0]['pay_price'],
    availQty: +fl[0]['availQty'] ,
    firstQuantity:fl[0]['firstQuantity'] ,
    aliasEn:fl[0]['aliasEn']
  }
  //console.log('sseelleecctteedd' ,this.selectedItem);
  // this.currenQty = this.selectedItem.availQty
  // this.firstQty = +this.selectedItem.firstQuantity

  }


  selectFromPop(item){
      this.readItemByIdQty()
//console.log(item)
this.selectedItem = {
  id:item.id,
  dateCreated:item.dateCreated,
  pay_ref:"",
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
  firstQuantity:item.firstQuantity
} 
 this.searchTerm = item.item_name
  //console.log( this.selectedItem); 
  this.didDissmis()
  //perform calculate here so moataz can get the qty
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

  getPayInvoDetail(pay,sub_name,status){
    console .log(pay,sub_name,status)
    let itemList :Array<any>=[] 
    this.presentLoadingWithOptions('جاري جلب التفاصيل ...') 
    let  payInvo ={
      pay_id:pay.pay_id ,
      pay_ref:pay.pay_ref ,
      store_id:pay.store_id,
      tot_pr:pay.tot_pr,
      pay:pay.pay,
      pay_date:pay.pay_date,
      pay_time:pay.pay_time,
      user_id:pay.user_id,
      cust_id:pay.cust_id,
      pay_method:pay.pay_method,
      discount:pay.discount ,
      changee:pay.changee ,
      sub_name:pay.sub_name,
      yearId:pay.yearId ,
      payComment:pay.payComment ,
      nextPay:pay.payComment 
    };
    let  payInvo2 ={
      pay_id:pay.pay_id ,
      pay_ref:pay.pay_ref ,
      store_id:pay.store_id,
      tot_pr:pay.tot_pr, 
      pay_date:pay.pay_date,
      pay_time:pay.pay_time,
      user_id:pay.user_id,
      yearId:pay.yearId ,
      payComment:pay.payComment   
    };
    //console.log('before',this.perchDetailsArr)
    //console.log(this.payDetailsArr)
  // get item list from pay  item details  info 
     if(pay.type == "مبيعات"){ 
      this.api.getPayInvoDetail(this.store_info.id , pay.pay_ref,this.year.id).subscribe(data =>{
        //console.log(data,'case 1')
         let res = data 
         //console.log(pay) 
         this.loadingController.dismiss() 
         let navigationExtras: NavigationExtras = {
          queryParams: {
            payInvo: JSON.stringify(payInvo),
            sub_name: JSON.stringify(sub_name),
            user_info:JSON.stringify(this.user_info),
            store_info:JSON.stringify(this.store_info), 
            itemList:JSON.stringify(res['data']) ,
            screen : "itemReport"
          }
        };
        this.rout.navigate(['folder/edit-sales'], navigationExtras); 
       }, (err) => {
       //console.log(err);
       this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
     })   
     }else if(pay.type == "مشتريات"){
      this.api.getPerchInvoDetail(this.store_info.id , pay.pay_ref,this.year.id).subscribe(data =>{
        //console.log(data,'case 1')
         let res = data 
         //console.log(pay) 
         this.loadingController.dismiss() 
         let navigationExtras: NavigationExtras = {
          queryParams: {
            payInvo: JSON.stringify(payInvo),
            sub_name: JSON.stringify(sub_name),
            user_info:JSON.stringify(this.user_info),
            store_info:JSON.stringify(this.store_info), 
            itemList:JSON.stringify(res['data']) ,
            screen : "itemReport"
          }
        };
        this.rout.navigate(['folder/edit-perch'], navigationExtras); 
       }, (err) => {
       //console.log(err);
       this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
     })  
     }else if(pay.type == "تسوية جردية"){
      this.api.getTswiaInvoDetail(this.store_info.id , pay.pay_ref,this.year.id).subscribe(data =>{
        //console.log(data,'case 1')
         let res = data 
         //console.log(pay) 
         this.loadingController.dismiss() 
         let navigationExtras: NavigationExtras = {
          queryParams: {
            payInvo: JSON.stringify(payInvo2), 
            user_info:JSON.stringify(this.user_info),
            store_info:JSON.stringify(this.store_info), 
            itemList:JSON.stringify(res['data']) ,
            screen : "itemReport"
          }
        };
        this.rout.navigate(['folder/edit-tswia'], navigationExtras); 
       }, (err) => {
       //console.log(err);
       this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
     })  
     }
     
  }


getItemPaysByItemIdBydate(){ 
 // this.getSalesfromLocal()
  this.loading = true
  this.api.getItemPaysByItemIdBydate(this.store_info.id ,this.selectedItem.id,this.startingDate,this.year.id).subscribe(data =>{
     let res = data
     if(res['message'] != 'No record Found'){
       this.payDetailsArr = res['data'] 
       this.payDetailsArr =  this.payDetailsArr.filter(x=>x.pay_date >= "2023-01-01")

       for (let i = 0; i < this.payDetailsArr.length; i++) {
        const element = this.payDetailsArr[i];
        element.type = 'مبيعات'  
      }
     }
      this.getItemPurchsByItemIdBydate() 
     // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
   }, (err) => {
   //console.log(err);
   this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')

 },
 ()=>{
  this.loading = false
 })  
 }

 getItemPaysBydate(){ 
  // this.getSalesfromLocal()
   this.loading = true
   this.api.getItemPaysBydate(this.store_info.id ,this.startingDate,this.year.id).subscribe(data =>{
      let res = data
      if(res['message'] != 'No record Found'){
        this.payDetailsArr = res['data'] 
        this.payDetailsArr =  this.payDetailsArr.filter(x=>x.pay_date >= "2023-01-01")
 
        for (let i = 0; i < this.payDetailsArr.length; i++) {
         const element = this.payDetailsArr[i];
         element.type = 'مبيعات'  
       }
      }
       this.getItemPurchsBydate() 
      // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
    }, (err) => {
    //console.log(err);
    this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
 
  },
  ()=>{
   this.loading = false
  })  
  }

 getItemPaysByItemId(){  
   this.loading = true
   this.api.getItemPaysByItemId(this.store_info.id ,this.selectedItem.id,this.year.id).subscribe(data =>{
      //console.log('hhhhhsssshh',data)
      let res = data
      if(res['message'] != 'No record Found'){
        this.payDetailsArr = res['data'] 
        this.payDetailsArr =  this.payDetailsArr.filter(x=>x.pay_date >= "2023-01-01")

        for (let i = 0; i < this.payDetailsArr.length; i++) {
          const element = this.payDetailsArr[i];
          element.type = 'مبيعات' 
        }
      }
     this.getItemPurchByItemId() 
      // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
    }, (err) => {
    //console.log(err);
    this.presentToast('1خطا في الإتصال حاول مرة اخري' , 'danger')
    this.loading = false
  },
  ()=>{})  
  }

getItemPaysByItemIdBy2date(){ 
  // this.getSalesfromLocal()
   this.loading = true
   this.api.getItemPaysByItemIdBy2date(this.store_info.id ,this.selectedItem.id,this.startingDate,this.endDate,this.year.id).subscribe(data =>{
      //console.log('hhhhhsssshh',data) 
      let res = data
      if(res['message'] != 'No record Found'){
        this.payDetailsArr = res['data'] 
        this.payDetailsArr =  this.payDetailsArr.filter(x=>x.pay_date >= "2023-01-01")

        for (let i = 0; i < this.payDetailsArr.length; i++) {
          const element = this.payDetailsArr[i];
          element.type = 'مبيعات' 
        }
      } 
      this.getItemPurchByItemIdBy2date()  
      // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
    }, (err) => {
    //console.log(err);
    this.loading = false
    this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')

  },
  ()=>{
   this.loading = false
  })  
  }

  getItemPurchsBydate(){ 
    // this.getSalesfromLocal()
    this.perchDetailsArr = []
     this.loading = true
     this.api.getItemPurchsBydate(this.store_info.id ,this.startingDate,this.year.id).subscribe(data =>{
        //console.log('purch',data)
        let res = data
        if(res['message'] != 'No record Found'){
          this.perchDetailsArr = res['data'] 
          this.perchDetailsArr =  this.perchDetailsArr.filter(x=>x.pay_date >= "2023-01-01")
          for (let i = 0; i < this.perchDetailsArr.length; i++) {
            const element = this.perchDetailsArr[i];
            element.type = 'مشتريات' 
          }
        }  

       this.getItemTswiasBydate()
        
      }, (err) => {
      //console.log(err);
      this.loading = false
      this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
  
    },
    ()=>{
     this.loading = false
    })  
    }
//
    getItemPurchsByItemIdBydate(){ 
      // this.getSalesfromLocal()
      this.perchDetailsArr = []
      this.loading = true
      this.api.getItemPurchsByItemIdBydate(this.store_info.id ,this.selectedItem.id,this.startingDate,this.year.id).subscribe(data =>{
          //console.log('purch',data)
          let res = data
          if(res['message'] != 'No record Found'){
            this.perchDetailsArr = res['data'] 
            this.perchDetailsArr =  this.perchDetailsArr.filter(x=>x.pay_date >= "2023-01-01")
            for (let i = 0; i < this.perchDetailsArr.length; i++) {
              const element = this.perchDetailsArr[i];
              element.type = 'مشتريات' 
            }
          }  
          this.getItemTswiasByItemIdBydate()
          
        }, (err) => {
        //console.log(err);
        this.loading = false
        this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')

      },

      ()=>{
      this.loading = false
      })  
      }

  getItemTswiasByItemIdBydate(){ 
    // this.getSalesfromLocal()
    this.perchDetailsArr = []
     this.loading = true
     this.api.getItemTswiasByItemIdBydate(this.store_info.id ,this.selectedItem.id,this.startingDate,this.year.id).subscribe(data =>{
        //console.log('purch',data)
        let res = data
        if(res['message'] != 'No record Found'){
          this.tswiaDetailsArr = res['data'] 
          this.tswiaDetailsArr =  this.tswiaDetailsArr.filter(x=>x.pay_date >= "2023-01-01")

          for (let i = 0; i < this.perchDetailsArr.length; i++) {
            const element = this.perchDetailsArr[i];
            element.type = 'تسوية جردية'
            
          }
        }  
         this.mixArrayAndOrderong()
         this.getTotal() 
         if(this.payArray.length==0){
          this.showEmpty = true
        }else{
          this.showEmpty = false
        }
          this.loading=false
          //console.log(this.payArray) 
      }, (err) => {
      //console.log(err);
      this.loading = false
      this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
  
    },
    ()=>{
     this.loading = false
    })  
    }

    getItemTswiasBydate(){ 
      // this.getSalesfromLocal()
      this.perchDetailsArr = []
       this.loading = true
       this.api.getItemTswiasBydate(this.store_info.id , this.startingDate,this.year.id).subscribe(data =>{
          //console.log('purch',data)
          let res = data
          if(res['message'] != 'No record Found'){
            this.tswiaDetailsArr = res['data'] 
            this.tswiaDetailsArr =  this.tswiaDetailsArr.filter(x=>x.pay_date >= "2023-01-01")
  
            for (let i = 0; i < this.perchDetailsArr.length; i++) {
              const element = this.perchDetailsArr[i];
              element.type = 'تسوية جردية' 
            }
          }  
           this.mixArrayAndOrderongCaseDaily()
          
           if(this.payArrayDaily.length==0){
            this.showEmpty = true
          }else{
            this.showEmpty = false
          }
            this.loading=false
            //console.log(this.payArrayDaily) 
        }, (err) => {
        //console.log(err);
        this.loading = false
        this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
    
      },
      ()=>{
       this.loading = false
      })  
      }

  getItemPurchByItemId(){ 
    this.perchDetailsArr = []
    this.loading = true
    this.api.getItemPurchByItemId(this.store_info.id ,this.selectedItem.id,this.year.id).subscribe(data =>{
       //console.log('purch',data)
       let res = data
       if(res['message'] != 'No record Found'){
         this.perchDetailsArr = res['data'] 
         this.perchDetailsArr =  this.perchDetailsArr.filter(x=>x.pay_date >= "2023-01-01")
         for (let i = 0; i < this.perchDetailsArr.length; i++) {
          const element = this.perchDetailsArr[i];
          element.type = 'مشتريات'
        }
       }

       this.getItemTswiaByItemId()
      
     
     }, (err) => {
     //console.log(err);
     this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
   },
   ()=>{
    this.loading = false
   })  
   }

   getItemTswiaByItemId(){ 
    this.tswiaDetailsArr = []
    this.loading = true
    this.api.getItemTswiaByItemId(this.store_info.id ,this.selectedItem.id,this.year.id).subscribe(data =>{
       //console.log('purch',data)
       let res = data
       if(res['message'] != 'No record Found'){
         this.tswiaDetailsArr = res['data'] 
         this.tswiaDetailsArr =  this.tswiaDetailsArr.filter(x=>x.pay_date >= "2023-01-01")
         //console.log(this.tswiaDetailsArr) 
         for (let i = 0; i < this.tswiaDetailsArr.length; i++) {
          const element = this.tswiaDetailsArr[i];
          element.type = 'تسوية جردية'
        }
       }

       this.mixArrayAndOrderong()
       this.getTotal() 
       if(this.payArray.length==0){
        this.showEmpty = true
      }else{
        this.showEmpty = false
      }
        this.loading = false
        //console.log(this.payArray) 
      
     
     }, (err) => {
     //console.log(err);
     this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
   },
   ()=>{
    this.loading = false
   })  
   }

   toPositive(negative){
   return Math.abs(+negative) 
   }
 
 getItemPurchByItemIdBy2date(){ 
   // this.getSalesfromLocal()
    this.loading = true
    this.api.getItemPurchByItemIdBy2date(this.store_info.id ,this.selectedItem.id,this.startingDate,this.endDate,this.year.id).subscribe(data =>{
       //console.log('purch',data) 
       let res = data
       if(res['message'] != 'No record Found'){
         this.perchDetailsArr = res['data'] 
         this.perchDetailsArr =  this.perchDetailsArr.filter(x=>x.pay_date >= "2023-01-01")
       } 
       this.getItemTswiaByItemIdBy2date()
       
     }, (err) => {
     //console.log(err);
     this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
     this.loading=false
   },
   ()=>{
    this.loading = false
   })  
   }


   getItemTswiaByItemIdBy2date(){ 
    // this.getSalesfromLocal()
     this.loading = true
     this.api.getItemTswiaByItemIdBy2date(this.store_info.id ,this.selectedItem.id,this.startingDate,this.endDate,this.year.id).subscribe(data =>{
        //console.log('purch',data) 
        let res = data
        if(res['message'] != 'No record Found'){
          this.tswiaDetailsArr = res['data'] 
          this.tswiaDetailsArr =  this.tswiaDetailsArr.filter(x=>x.pay_date >= "2023-01-01")
        } 
        this.mixArrayAndOrderong()
        this.getTotal() 
        if(this.payArray.length==0){
         this.showEmpty = true
       }else{
         this.showEmpty = false
       }
         this.loading=false
         //console.log(this.payArray) 
      }, (err) => {
      //console.log(err);
      this.presentToast('  خطا في الإتصال حاول مرة اخري' , 'danger')
      this.loading=false
    },
    ()=>{
     this.loading = false
    })  
    }


  mixArrayAndOrderong(){
    this.payArray = []
    console.log('Starting mixArrayAndOrderong - clearing payArray');
    console.log('Data arrays lengths - perch:', this.perchDetailsArr.length, 'pay:', this.payDetailsArr.length, 'tswia:', this.tswiaDetailsArr.length);
    
    if(this.perchDetailsArr.length>0){
      for (let i = 0; i < this.perchDetailsArr.length; i++) {
        const element = this.perchDetailsArr[i];
        if(+element.discount>0){
          let getPercg = +element.discount / +element.tot_pr
          element.perch_price = (element.perch_price - (element.perch_price * getPercg)).toFixed(2)  
        }
        this.payArray.push(element) 
      }
    }
    if(this.payDetailsArr.length>0){
      for (let i = 0; i < this.payDetailsArr.length; i++) {
        const element = this.payDetailsArr[i];
        if(+element.discount>0){
          let getPercg = +element.discount / +element.tot_pr
          element.pay_price = (element.pay_price - (element.pay_price * getPercg)).toFixed(2) 
        }
        this.payArray.push(element)
        
      }
    }
    //console.log('ljw;f', this.tswiaDetailsArr)
    if(this.tswiaDetailsArr.length>0){
      for (let i = 0; i < this.tswiaDetailsArr.length; i++) {
        const element = this.tswiaDetailsArr[i]; 
        let qty = +element.availQty  - +element.qtyReal
        //console.log(+qty)
        this.payArray.push({
          "id" : element.id,
          "pay_ref" :element.pay_ref,
          "item_name" :element.item_name, 
          "pay_date" :element.pay_date,
          "pay_price" :element.pay_price,
          "quantity" : qty,
          "tot" : +element.tot, 
          "store_id" :+this.store_info.id,
          "yearId" :+this.year.id, 
          "item_id" : +element.id,
          "dateCreated" : element.dateCreated,
          "perch_price":element.perch_price,
          "type":element.type 
        }   
        ) 
      }
    }

// sorting array
 this.payArray = this.payArray.sort((a, b) => (a.pay_date > b.pay_date) ? -1 : 1);
 
 // Apply advanced sorting for transactions
 this.applyTransactionsSorting();
 
 console.log('Finished mixArrayAndOrderong - payArray length:', this.payArray.length);
  }


  mixArrayAndOrderongCaseDaily(){
    this.payArrayDaily = []
    if(this.perchDetailsArr.length>0){
      for (let i = 0; i < this.perchDetailsArr.length; i++) {
        const element = this.perchDetailsArr[i];
        // if(+element.discount>0){
        //   let getPercg = +element.discount / +element.tot_pr
        //   element.perch_price = (element.perch_price - (element.perch_price * getPercg)).toFixed(2)  
        // }

        // add available qty
        let inx = this.items.findIndex(x=>x.item_id == element.item_id )
        element.currenQty =  this.items[inx].quantity

        let index = this.payArrayDaily.findIndex(x=>x.item_id == element.item_id && element.type == 'مشتريات')
        if(index != -1 ){
          element.quantity = +element.quantity + +this.payArrayDaily[index].quantity
        }else{
          this.payArrayDaily.push(element)
        } 
        
      }
    }
    if(this.payDetailsArr.length>0){
      for (let i = 0; i < this.payDetailsArr.length; i++) {
        const element = this.payDetailsArr[i];
        // if(+element.discount>0){
        //   let getPercg = +element.discount / +element.tot_pr
        //   element.pay_price = (element.pay_price - (element.pay_price * getPercg)).toFixed(2) 
        // }
        //check if it exist in array

        // add available qty
       
        let inx = this.items.findIndex(x=>x.id == element.item_id )
        //console.log('inx' + inx  , this.items[0] )
        element.currenQty =  this.items[inx].quantity


        let index = this.payArrayDaily.findIndex(x=>x.item_id == element.item_id && element.type == 'مبيعات')
        if(index != -1 ){
          element.quantity = +element.quantity + +this.payArrayDaily[index].quantity
        }else{
          this.payArrayDaily.push(element)
        } 
         
      }
    }
    
    //console.log('ljw;f', this.tswiaDetailsArr)
    if(this.tswiaDetailsArr.length>0){
      for (let i = 0; i < this.tswiaDetailsArr.length; i++) {
        const element = this.tswiaDetailsArr[i]; 
        let qty = +element.availQty  - +element.qtyReal
        //console.log(+qty)

        // add available qty
        let inx = this.items.findIndex(x=>x.item_id == element.item_id )
        element.currenQty =  this.items[inx].quantity


        let index = this.payArrayDaily.findIndex(x=>x.item_id == element.item_id && element.type == 'تسوية جردية')
        if(index != -1 ){
          element.quantity = +element.quantity + +this.payArrayDaily[index].quantity
        }else{
            this.payArrayDaily.push({
          "id" : element.id,
          "pay_ref" :element.pay_ref,
          "item_name" :element.item_name, 
          "pay_date" :element.pay_date,
          "pay_price" :element.pay_price,
          "quantity" : qty,
          "tot" : +element.tot, 
          "store_id" :+this.store_info.id,
          "yearId" :+this.year.id, 
          "item_id" : +element.id,
          "dateCreated" : element.dateCreated,
          "perch_price":element.perch_price,
          "type":element.type 
        }   
        ) 
        }  
      }
    }

// sorting array
 //this.payArrayDaily = this.payArray.sort((a, b) => (a.pay_date > b.pay_date) ? -1 : 1);
 
  }

 getTotal(){
    this.currenQty = this.selectedItem.availQty
    this.firstQty = this.selectedItem.firstQuantity

   this.perchTotQty = this.perchDetailsArr.reduce( (acc, obj)=> { return acc + +obj.quantity; }, 0);
   this.payTotQty =  this.payDetailsArr.reduce( (acc, obj)=> { return acc + +obj.quantity; }, 0);
  
    this.perchTot = (this.perchDetailsArr.reduce( (acc, obj)=> { return acc + +obj.tot; }, 0)).toFixed(2);
    this.payTot = (this.payDetailsArr.reduce( (acc, obj)=> { return acc + +obj.tot; }, 0)).toFixed(2);  
 
    //console.log('perchTotQty',this.perchTotQty ,this.payTotQty )
   //تجميع الكيات السالبة وتحويلها لموجب لإضافتها للمشتريات
   if(this.tswiaDetailsArr.length>0){ 
    for (let i = 0; i < this.tswiaDetailsArr.length; i++) {
      const element = this.tswiaDetailsArr[i];
      if( (+element.availQty  - +element.qtyReal) < 0 ){ 
        this.perchTotQty = +this.perchTotQty +  Math.abs((+element.availQty  - +element.qtyReal))  
        //console.log('jdja',this.perchTotQty ,this.perchTot )
      }else if((+element.availQty  - +element.qtyReal) > 0 ){
        this.payTotQty = +this.payTotQty + (+element.availQty  - +element.qtyReal)  
      }
    }

    
  }
 
 
  //console.log(this.perchTot , this.payTot)
 } 


// Event handler for enhanced item selector
onItemSelected(selectedItem: any) {
  console.log('Item selected from enhanced component:', selectedItem);
  
  if (selectedItem && selectedItem.id) {
    // Update the existing selectedItem with the new selection
    this.selectedItem = {
      id: selectedItem.id,
      dateCreated: selectedItem.dateCreated || "",
      pay_ref: selectedItem.pay_ref || "",
      item_desc: selectedItem.item_desc || "",
      item_name: selectedItem.item_name || "",
      item_unit: selectedItem.item_unit || "",
      parcode: selectedItem.parcode || 0,
      pay_price: selectedItem.pay_price || 0,
      perch_price: selectedItem.perch_price || 0,
      qty: selectedItem.qty || 0,
      tot: selectedItem.tot || 0,
      availQty: selectedItem.availQty || 0,
      firstQuantity: selectedItem.firstQuantity || 0,
      aliasEn: selectedItem.aliasEn || ""
    };
    
    // Automatically trigger search when item is selected
    this.search();
  } else {
    // Clear selection if null item is passed
    this.clearItemSelection();
  }
}

// Event handler for refresh request from enhanced component
onRefreshRequested() {
  console.log('Refresh requested from enhanced component');
  // The enhanced component handles its own refresh, but we can add any additional logic here if needed
}

refresh() {
  this.presentToast('تم تحديث البيانات', 'success');
  window.location.reload();
}

// Helper method to clear item selection
clearItemSelection() {
  this.selectedItem = {
    id: undefined,
    dateCreated: "",
    pay_ref: "",
    item_desc: "",
    item_name: "",
    item_unit: "",
    parcode: 0,
    pay_price: 0,
    perch_price: 0,
    qty: 0,
    tot: 0,
    availQty: 0,
    firstQuantity: 0,
    aliasEn: ""
  };
  
  this.selectedItemNew = {
    id: undefined, 
    pay_ref: "",
    item_desc: "",
    item_name: "",
    item_unit: "",
    parcode: 0,
    pay_price: 0,
    perch_price: 0, 
    qtyReal: 0,
    availQty: 0,
    currenQty: 0,
    firstQty: 0,
    perchTotQty: 0,
    payTotQty: 0, 
    totSales: 0,
    totPurch: 0
  };
  
  this.payArray = [];
  this.perchDetailsArr = [];
  this.payDetailsArr = [];
  this.showEmpty = false;
}

search(){
  if (!this.selectedItem?.id) {
    this.presentToast('يرجى اختيار صنف أولاً', 'warning');
    return;
  }

  // Reset all data before new search
  this.selectedItemNew = {
    id: undefined, 
    pay_ref: "",
    item_desc: "",
    item_name: "",
    item_unit: "",
    parcode: 0,
    pay_price: 0,
    perch_price: 0, 
    qtyReal: 0,
    availQty: 0,
    currenQty: 0,
    firstQty: 0,
    perchTotQty: 0,
    payTotQty: 0, 
    totSales: 0,
    totPurch: 0
  };
  
  // Clear all arrays before new search
  this.payArray = [];
  this.sortedPayArray = [];
  this.perchDetailsArr = [];
  this.payDetailsArr = [];
  this.tswiaDetailsArr = [];
  this.currentTransactionsSort = null; // Reset sorting
  this.showEmpty = false;
  this.loading = true;

  // Determine report type based on radioVal
  let reportType = this.radioVal;
  let startDate = null;
  let endDate = null;

  // Set date parameters based on report type
  if (this.radioVal == 1) {
    // Single date filter
    startDate = this.startingDate;
  } else if (this.radioVal == 2) {
    // Date range filter
    startDate = this.startingDate;
    endDate = this.endDate;
  } else if (this.radioVal == 3) {
    // Daily report by date
    startDate = this.startingDate;
  }

  // Make single API call to get all report data
  this.api.getCompleteItemReport(
    this.store_info.id, 
    this.selectedItem.id, 
    this.year.id, 
    reportType, 
    startDate, 
    endDate
  ).subscribe(
    data => {
      console.log('Complete item report data:', data);
      
      if (data && data['status'] === 'success' && data['data']) {
        const reportData = data['data'];
        
        // Update item details
        if (reportData.item_details) {
          const itemData = reportData.item_details;
          this.selectedItemNew = {
            id: itemData.id,
            pay_ref: "",
            item_desc: itemData.item_desc || "",
            item_name: itemData.item_name || "",
            item_unit: itemData.item_unit || "",
            parcode: itemData.item_parcode || 0,
            pay_price: itemData.pay_price || 0,
            perch_price: itemData.perch_price || 0,
            qtyReal: itemData.qtyReal || 0,
            availQty: itemData.availQty || 0,
            currenQty: itemData.availQty || 0,
            firstQty: itemData.firstQuantity || 0,
            perchTotQty: itemData.perchQuantity || 0,
            payTotQty: itemData.salesQuantity || 0,
            totSales: itemData.sales28 || 0,
            totPurch: itemData.purch28 || 0
          };

          // Update quantity calculations
          this.payTotQty = itemData.salesQuantity || 0;
          this.availQty = itemData.availQty || 0;
          this.qtyReal = itemData.qtyReal || 0;
          this.perchTotQty = itemData.perchQuantity || 0;
          this.firstQty = itemData.firstQuantity || 0;
        }

        // Process sales invoices
        if (reportData.sales_invoices && reportData.sales_invoices.length > 0) {
          this.payDetailsArr = reportData.sales_invoices.map(item => ({
            ...item,
            type: 'مبيعات'
          }));
          console.log('Loaded sales invoices:', this.payDetailsArr.length);
        } else {
          this.payDetailsArr = [];
          console.log('No sales invoices found');
        }

        // Process purchase invoices
        if (reportData.purchase_invoices && reportData.purchase_invoices.length > 0) {
          this.perchDetailsArr = reportData.purchase_invoices.map(item => ({
            ...item,
            type: 'مشتريات'
          }));
          console.log('Loaded purchase invoices:', this.perchDetailsArr.length);
        } else {
          this.perchDetailsArr = [];
          console.log('No purchase invoices found');
        }

        // Process adjustment records
        if (reportData.adjustment_records && reportData.adjustment_records.length > 0) {
          this.tswiaDetailsArr = reportData.adjustment_records.map(item => ({
            ...item,
            type: 'تسوية جردية'
          }));
          console.log('Loaded adjustment records:', this.tswiaDetailsArr.length);
        } else {
          this.tswiaDetailsArr = [];
          console.log('No adjustment records found');
        }

        // Process the data based on report type
        if (this.radioVal == 3) {
          // Daily report - use aggregated view
          this.mixArrayAndOrderongCaseDaily();
          if (this.payArrayDaily.length == 0) {
            this.showEmpty = true;
          } else {
            this.showEmpty = false;
          }
        } else {
          // Regular report - combine all arrays
          this.mixArrayAndOrderong();
          this.getTotal();
          
          // Ensure sortedPayArray is properly synchronized after all processing
          console.log('After processing - payArray length:', this.payArray.length);
          console.log('After processing - sortedPayArray length:', this.sortedPayArray.length);
          
          if (this.payArray.length == 0) {
            this.showEmpty = true;
          } else {
            this.showEmpty = false;
          }
        }

        console.log('Report processed successfully');

      } else {
        // No data found
        this.showEmpty = true;
        this.presentToast('لا توجد بيانات للصنف المحدد', 'warning');
      }
    },
    (err) => {
      console.error('Error fetching complete item report:', err);
      this.loading = false;
      this.showEmpty = true;
      this.presentToast('خطأ في الإتصال حاول مرة أخرى', 'danger');
    },
    () => {
      this.loading = false;
    }
  );
}

// Apply sorting to transactions (payArray)
applyTransactionsSorting() {
  if (this.currentTransactionsSort) {
    this.sortedPayArray = this.sortingService.sortData(
      [...this.payArray], // Create a deep copy to prevent mutation
      this.currentTransactionsSort.column, 
      this.currentTransactionsSort.direction
    );
  } else {
    this.sortedPayArray = [...this.payArray]; // Always create a new array copy
  }
  console.log('Applied transaction sorting, sortedPayArray length:', this.sortedPayArray.length);
}

// Handle transaction column sort
sortTransactionsBy(column: string) {
  const direction = this.sortingService.getNextSortDirection(column, this.currentTransactionsSort);
  this.currentTransactionsSort = { column, direction };
  this.applyTransactionsSorting();
}

// Get sort icon for transaction column
getTransactionsSortIcon(column: string): string {
  return this.sortingService.getSortIcon(column, this.currentTransactionsSort);
}

// Apply sorting to items
applySorting() {
  if (this.currentSort) {
    this.sortedItems = this.sortingService.sortData(
      this.items, 
      this.currentSort.column, 
      this.currentSort.direction
    );
  } else {
    this.sortedItems = [...this.items];
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

// TrackBy function for better change detection performance
trackByPaymentId(index: number, item: any): any {
  return item.pay_ref || item.id || index;
}

// Getter to ensure we always have data to display
get displayedPayArray(): any[] {
  return this.sortedPayArray && this.sortedPayArray.length > 0 ? this.sortedPayArray : this.payArray;
}

}

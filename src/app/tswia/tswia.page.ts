import { Component, OnInit, ViewChild, ElementRef ,Renderer2,Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServicesService } from "../stockService/services.service";
import { Observable, Subscription } from 'rxjs';
import { AlertController, IonInput, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { DatePipe ,Location} from '@angular/common';
import { Storage } from '@ionic/storage';
import { AuthServiceService } from '../auth/auth-service.service';
import { PrintModalPage } from '../print-modal/print-modal.page';
import { ActivatedRoute } from '@angular/router';
import { StockServiceService } from '../syncService/stock-service.service';
import * as momentObj from 'moment';

@Component({
  selector: 'app-tswia',
  templateUrl: './tswia.page.html',
  styleUrls: ['./tswia.page.scss'],
})
export class TswiaPage implements OnInit {
  @ViewChild("dst") nameField: ElementRef;
  @ViewChild('qtyId12') qtyId12;
  notifArr:Array<any> =[]
  showNotif = false
  LogHistoryLocalArr:Array<any> =[]
  logHistoryArr:Array<any>=[];
  isOpenNotif = false ;
  subiscribtionNotif:Subscription;
  newNotif = false ;
  selectedItemSales29

  // Selection, search, sort properties
  selectedItems: Set<number> = new Set()
  isSelectAll: boolean = false
  sortedItemList: Array<any> = []
  isItemListSorted: boolean = false
  tableSearchTerm: string = ''
  highlightedIndex: number = -1
  searchMatches: number[] = []
  sub_account:Array<any> =[]
  sub_accountLocalSales:Array<any> =[]
  sub_accountSales:Array<any> =[]
  initialInvoices:Array<any> =[]
  items:Array<any> =[]
  itemsLocal:Array<any> =[]
  itemList:Array<any> =[]
  salesLocal:Array<any> =[]
  sales:Array<any> =[]
  purchLocal:Array<any> =[] 
  purchase:Array<any> =[]
  randomsNumber:Array<any> =[]
  store_info : {id:any , location :any ,store_name:any , store_ref:any }
  user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
  sub_nameNew :any = ""
  discountPerc : any = 0
  selectedItem : {id:any ,pay_ref:any,item_name:any,pay_price:any,perch_price:any,item_unit:any,item_desc:any,parcode:any,qty:any,tot:any ,dateCreated:any,availQty:any,aliasEn:any,qtyReal:any};
  selectedAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any ,cat_id:any,cat_name:any,phone:any,address:any,currentCustumerStatus:0};
  payInvo : {pay_id:any ,pay_ref:any ,store_id:any,tot_pr:any,pay_date:any,pay_time:any,user_id:any, yearId:any,payComment:any};
  radioVal : any = 0
  radioVal2 : any = 0
  printMode :boolean = false
  printArr:Array<any> =[]
  offline: boolean = false;
  color :any ='dark'
  showMe = null
  status:any = 'new'
  searchLang :any = 0
  currentCustumerStatus :any
  year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
  pendingItemsFromStock: Array<any> = [];
  statusFromRoute: string = '';
  // اي طريقة دفع ح يكون في حساب مقابل ليها مثلا الكاش ح يتورد في حساب الخزينة وبنكك في حساب بنك الخرطوم اما الشيك فحيكون بالاجل و ح ينزل في  سجل الشيكات ويتحول الي حساب المعين سواء كان اتورد في حساب بنكي او اتسحب كاش واتورد فيحساب الخزينة 
  constructor(private behavApi:StockServiceService ,private _location: Location, private route: ActivatedRoute,private renderer : Renderer2,private modalController: ModalController,private alertController: AlertController, private authenticationService: AuthServiceService,private storage: Storage,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController,  private translate: TranslateService) {
  this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_name:"",cat_id:"",phone:"",address:"",currentCustumerStatus:0};
   

 this.route.queryParams.subscribe(params => {
    //console.log(params.payInvo,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
    if (params && params.payInvo) {
      this.status = 'initial'
      this.payInvo = JSON.parse(params.payInvo);  
      this.user_info = JSON.parse(params.user_info);
      this.store_info = JSON.parse(params.store_info);
      this.itemList = JSON.parse(params.itemList);
      //console.log('lksjda',this.payInvo, this.store_info,  this.user_info ,this.itemList ,this.selectedAccount.sub_name)
      // this.selectedAccount.sub_name = this.payInvo.sub_name;  
      this.prepareOffline()
      this.getAppInfoCase2()
    } else if (params['fromTab'] === 'true' && params['dataKey']) {
        // New tab mode: read items from localStorage
        const dataKey = params['dataKey'];
        const storedData = localStorage.getItem(dataKey);
        if (storedData) {
          const parsed = JSON.parse(storedData);
          this.statusFromRoute = 'newInvoFromItemsPage';
          this.pendingItemsFromStock = parsed;
          // Don't remove from localStorage here - component may be created twice
        }
        console.log('New invoice from new tab, items:', this.pendingItemsFromStock);
    } else if (params['status'] === 'newInvoFromItemsPage' && params['selectedItemsList']) {
        console.log('New invoice from items page');
        this.statusFromRoute = params['status'];
        this.pendingItemsFromStock = JSON.parse(params['selectedItemsList']);
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
      qtyReal:0
    }
  }

    ionViewDidLeave(){
      //console.log('ionViewWillLeave') 
      this.subiscribtionNotif.unsubscribe()
     } 

    ionViewDidEnter(){
      // setTimeout(() => {
      //   //check all changes in case notif arr >0 
      //    this.subiscribtionNotif = this.behavApi.currentNotif.subscribe(notif=>{
      //     //console.log('notif page currentNotif behavApiRespnse',notif) 
      //      if(notif.length == 0){
      //       this.notifArr = []
      //      }else{
      //       this.notifArr =  notif[0]  
      //      }

      //     if(this.notifArr.length> 0){ 
      //       this.showNotif = true
      //       this.itemsLocal = notif[1] 
      //       this.items =  this.itemsLocal
      //       this.searchResult = this.items
      //       this.sub_accountSales = notif[2] 
      //       //console.log(this.sub_accountLocalSales)  
      //       this.storage.get('LogHistoryLocal').then((response) => { 
      //         if (response) {
      //           this.LogHistoryLocalArr = response  
      //         } 
      //       });
      //       this.getSubBalance()
      //     } else {
      //       //console.log('no updates')
      //       this.showNotif = false
          
            
      //     } 
      //     })
      //   }, 10000); 
    } 


    ngOnInit() {
     this.prepareOffline()
     if(this.status == 'new'){
      this.getAppInfo()  
     }else if(this.status == 'initial'){
      this.getAppInfoCase2() 
      this.radioVal2 = 0  
     } 
    }

    
    getItemLocalOff(){
      this.storage.get('itemsLocal').then((response) => {
        if (response) {
          this.itemsLocal = response
           this.items = this.itemsLocal
        }
      });
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
        qtyReal:0
      }
     }
    }

    getStockItems() {
       this.storage.get('year').then((response) => {
     if (response) {
      this.year = response
      //console.log('this.year.id',this.year.id)
      if (this.offline == false) {
        this.api.getAllStockItemsWithouteCounts(this.store_info.id, this.year.id).subscribe(data => {
          let res = data
          this.items = res['data']
          this.storage.set('itemsLocal' , this.items).then((response) => {
          });
        }, (err) => {
          //console.log(err);
        },
          () => {
          }
        )
      } else {
        this.items = this.itemsLocal
      }
    }
  });

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
            // this.prepareInvo()
           // this.back()
          }
        }, {
          text: 'موافق',
          id: 'confirm-button',
          handler: () => {
            if(initial){
            this.deleteSalesInvoInit()
            }else{
              this.presentModal(this.printArr , 'sales')
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

  getOffliemode(){
    this.storage.get('offline').then((response) => {
        this.offline = response
        //console.log('mooooode',this.offline)
        if (this.offline == true) {
          this.color= 'dark'
        }else if(this.offline == false){
          this.color = 'primary'
        } else{
          this.SetOffliemode()
        }
    });
  }

  SetOffliemode(){
    this.storage.set('offline' , false).then((response) => {
        this.offline = response
        this.color = 'primary'
        
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
         this.getItemLocalOff()
         this.getStockItems()
         this.prepareInvo()
      }
    }); 

    this.storage.get('initialInvoices').then((response) => {
      if (response) {
        this.initialInvoices = response 
      }
    });  
    this.storage.get('LogHistoryLocal').then((response) => {
      //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
      if (response) {
        this.LogHistoryLocalArr = response
      }   
    });
    this.storage.get('searchLang').then((response) => {
      if (response) {
        this.searchLang = response
        //console.log('searchLang' ,this.searchLang) 
      }
    }); 
  }

  getAppInfoCase2(){  
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
      }

      this.storage.get('year').then((response) => {
        if (response) {
          this.year = response 
        } 
      });
    }); 

    // this.storage.get('initialInvoices').then((response) => {
    //   this.getSalesAccount() 
    //   if (response) {
    //     this.initialInvoices = response  
    //   }
    // }); 

    this.storage.get('LogHistoryLocal').then((response) => {
      //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
      if (response) {
        this.LogHistoryLocalArr = response
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
       this.getSubBalance()
    }
  });
   
  }

  radioChange(ev){
    //console.log(ev.target.value) 
   }

recalSubBalance(){
  // adding new change to subbalances
  this.sub_account.forEach(element => {
    element.sub_balance = 0 
    let debitTot = +element.changeeTot + +element.fromDebitTot
    let creditTot = +element.purchChangeeTot + +element.toCreditTot
    if(this.radioVal == 0  && this.selectedAccount.id == element.id){
     // debitTot = +debitTot + +this.payInvo.changee
    }
   
    if (debitTot == creditTot) {
      element.sub_balance = 0
      element.currentCustumerStatus = ''
     }else if(debitTot > creditTot ){
       element.sub_balance = (+debitTot - +creditTot).toFixed(2)
       element.currentCustumerStatus = 'debit'
       if(+this.selectedAccount.id == +element.id){
        this.selectedAccount.sub_balance = element.sub_balance 
        this.selectedAccount.currentCustumerStatus = element.currentCustumerStatus 
        }
     }else if(creditTot > debitTot ){
      element.sub_balance = (+creditTot - +debitTot).toFixed(2)
      element.currentCustumerStatus = 'credit'
      if( +this.selectedAccount.id == +element.id){
        this.selectedAccount.sub_balance = element.sub_balance 
        this.selectedAccount.currentCustumerStatus = element.currentCustumerStatus
        }
     }
  });
  //console.log('recalSubBalance',this.sub_account)
}

   getSubBalance(){
    // payTot' => $payTot ,
    //      'tot_prTot' => $tot_prTot ,
    //      'changeeTot' => $changeeTot ,
    //      'purchPayTot' => $purchPayTot ,
    //      'purchTot_prTot' => $purchTot_prTot ,
    //      'purchChangeeTot' => $purchChangeeTot ,
    // 'fromDebitTot' => $fromDebitTot ,
    // 'fromCreditTot' => $fromCreditTot ,
    //  'toDebitTot' => $toDebitTot ,
    // 'toCreditTot' => $toCreditTot   
    this.sub_account.forEach(element => {
      element.sub_balance = 0
      let debitTot = +element.changeeTot + +element.fromDebitTot
      let creditTot = +element.purchChangeeTot + +element.toCreditTot
      if (debitTot == creditTot) {
        element.sub_balance = 0
        this.currentCustumerStatus = ''
   
       }else if(debitTot > creditTot ){
        
         element.sub_balance = (+debitTot - +creditTot).toFixed(2)
        this.currentCustumerStatus = 'debit'
  
       }else if(creditTot > debitTot ){
         element.sub_balance = (+creditTot - +debitTot).toFixed(2)
        this.currentCustumerStatus = 'credit'
       }
    });
    //console.log('balances',this.sub_account)
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

  prepareInvo(){  
        this.selectedAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:"",cat_id:"",cat_name:"",phone:"",address:"", currentCustumerStatus:0};
        this.sub_nameNew = ""
        this.radioVal = 0
        this.radioVal2 = 0
        this.payInvo ={pay_id:undefined ,pay_ref:0 ,store_id:"",tot_pr:0,pay_date:"",pay_time:"",user_id:"", yearId:this.year.id,payComment:""} ;
        this.discountPerc = 0
        let d = new Date
      // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
       this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd')
       this.payInvo.pay_time = this.datePipe.transform(d, 'HH:mm:ss') 
       this.generateRandom()  
       this.payInvo.store_id =this.store_info.id
       this.payInvo.user_id = this.user_info.id
       this.payInvo.yearId = this.year.id
       //console.log( this.payInvo) 
       this.itemList = []

     // Fallback: check localStorage via snapshot if subscription hasn't fired yet
     if (this.pendingItemsFromStock.length === 0) {
       const snap = this.route.snapshot.queryParams;
       if (snap['fromTab'] === 'true' && snap['dataKey']) {
         const storedData = localStorage.getItem(snap['dataKey']);
         if (storedData) {
           this.pendingItemsFromStock = JSON.parse(storedData);
           this.statusFromRoute = 'newInvoFromItemsPage';
         }
       }
     }

     if (this.statusFromRoute === 'newInvoFromItemsPage' && this.pendingItemsFromStock.length > 0) {
      this.pendingItemsFromStock.forEach(item => {

      this.itemList.push({
      "id" : 'NULL',
      "pay_ref" :this.payInvo.pay_ref,
      "item_name" :item.item_name,
      "pay_price" :item.pay_price,
      "quantity" : +item.qty,
      "tot" :(( +item.qty - 0 ) * +item.perch_price).toFixed(2),
      "store_id" :+this.store_info.id,
      "yearId" :+this.year.id,
      "item_id" : +item.id,
      "dateCreated" : this.datePipe.transform(d, 'dd-MM-YYYY'),
      "perch_price":item.perch_price ,
        "availQty" :+item.qty,
        "qtyReal" :  0
        });
      });
      this.statusFromRoute = '';
       this.pendingItemsFromStock = []; // Reset status after processing
       this.getTotal()
       // Clean up localStorage after successful processing
       const snap = this.route.snapshot.queryParams;
       if (snap['dataKey']) { localStorage.removeItem(snap['dataKey']); }
    }
      


     //  this.getSalesAccount()  
      // this.setFocusOnInput('dst')
      // this.setFocusOnInput('dstPop')
  }
 
   setFocusOnInput(Input) {
     if (Input == 'dst') {
      this.nameField.nativeElement.focus();
     } else if(Input == 'qtyId12') {
      this.qtyId12.setFocus();
     }
   }

   isFocused(event){
    //console.log('dsdfsdf',event)
  }

  getItems() {
    if (this.offline == false) {
      this.api.getItems().subscribe(data => {
        //console.log(data)
        let res = data
        this.items = res['data']
      }, (err) => {
        //console.log(err);
      })
    } else {
      this.items = this.itemsLocal
    }
  }

 //Yaw
  getSalesAccount(){
    if (this.offline == false) {
    this.api.getSalesAccounts(this.store_info.id , this.year.id).subscribe(data =>{
       let res = data
       this.sub_account = res ['data']
       //console.log(this.sub_account)
       this.getSubBalance()
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
//Yaw
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

generateRandom():any{
  let da = new Date 
  //console.log(da)
  let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString()
  this.payInvo.pay_ref = this.store_info.store_ref + randomsNumber
  //console.log(randomsNumber)
  //console.log(this.payInvo.pay_ref)  
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
    phone:fl[0]['phone'],
    address:fl[0]['address'],
    currentCustumerStatus:fl[0]['currentCustumerStatus']
  }
  //console.log( this.selectedAccount);
 
//  this.setFocusOnInput()
}else{
  this.presentToast('خطأ في اسم الحساب ', 'danger') 
  this.selectedItem.item_name =""
}
}

onItemSelected(event: any) {
  if (!event) {
    this.selectedItem = {
      id: undefined,
      dateCreated: "",
      pay_ref: this.payInvo.pay_ref,
      item_desc: "",
      item_name: "",
      item_unit: "",
      parcode: 0,
      pay_price: 0,
      perch_price: 0,
      qty: 0,
      tot: 0,
      availQty: 0,
      aliasEn: "",
      qtyReal: 0
    };
    this.selectedItemSales29 = null;
    return;
  }
  this.selectedItem = {
    id: event.id,
    dateCreated: event.dateCreated,
    pay_ref: this.payInvo.pay_ref,
    item_desc: event.item_desc,
    item_name: event.item_name,
    item_unit: event.item_unit,
    parcode: event.parcode,
    pay_price: event.pay_price,
    perch_price: event.perch_price,
    qty: "",
    tot: event.pay_price,
    availQty: 0,
    aliasEn: event.aliasEn,
    qtyReal: 0
  };
  const orig = this.items.find(i => i.id === event.id);
  if (orig) {
    const baseStock = (+orig.firstQuantity || 0) + (+orig.perchQuantity || 0) - (+orig.salesQuantity || 0);
    const tswiaAdj = +orig.tswiaQuantity || 0;
    this.selectedItem.availQty = baseStock - tswiaAdj;
    this.selectedItem.tot = (this.selectedItem.availQty - this.selectedItem.qtyReal) * +this.selectedItem.perch_price;
    this.selectedItemSales29 = orig.sales29;
  }
  setTimeout(() => this.setFocusOnInput('qtyId12'), 300);
}

generateRandom2(role):any{
  let da = new Date 
  //console.log(da)
  let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString() + role
  return this.store_info.store_ref + randomsNumber 
}
qtyRealhange(ev){
  //console.log(ev);
  this.selectedItem.tot =  ((this.selectedItem.availQty - this.selectedItem.qtyReal)  * this.selectedItem.perch_price) 
}

pricehange(ev){
  //console.log(ev);
  this.selectedItem.tot =  ((this.selectedItem.availQty - this.selectedItem.qtyReal) * this.selectedItem.perch_price) 
}

payChange(ev){
  //console.log(ev); 
  // if(this.discountPerc>0){
  //   this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
  // }
  // this.payInvo.changee = +( this.payInvo.tot_pr - +this.payInvo.discount) - ev.target.value 

}

discountChange(ev){
  // //console.log('discountChange' ,ev); 
  // this.discountPerc = ((+this.payInvo.discount /+this.payInvo.tot_pr) * 100 ).toFixed(2)
  // this.payInvo.changee = +( this.payInvo.tot_pr - ev.target.value) - this.payInvo.pay
}

discountPerChange(ev){
  // //console.log('discountPerChange',ev);
  // this.payInvo.discount = (+this.payInvo.tot_pr * +this.discountPerc/100).toFixed(2)
  // this.payInvo.changee = +( this.payInvo.tot_pr -  this.payInvo.discount ) - this.payInvo.pay
}

deleteItem(index){
//console.log( index); 
this.itemList.splice(index,1)
//console.log( this.itemList); 
this.getTotal()
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

getTotal(){
  let sum = this.itemList.reduce( (acc, obj)=> { return acc + +obj.tot; }, 0);
  //console.log('sum', sum)
  this.payInvo.tot_pr = sum.toFixed(2)
  
} 


refresh(para){
  if (para=='account') {
    this.getSalesAccount()
  } else {
   // this.getItems()
    this.getStockItems()
  }
  
}

addTolist() {
    if (this.selectedItem.item_name == "" || this.selectedItem.id == "" ) {
      this.presentToast('الرجاء اختيار الصنف وتحديد الكمية', 'danger')
    } else if(this.selectedItem.qtyReal == this.selectedItem.availQty ){
      this.presentToast(' الكميات متساوية , لا يمكن إضافة العنصر  ', 'danger')
    }   else {
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
        "perch_price":this.selectedItem.perch_price,
        "availQty" : this.selectedItem.availQty,
        "qtyReal" : this.selectedItem.qtyReal
        })
      } else {
        //console.log(this.itemList);
        //console.log(fl[0].qtyReal);
        //console.log(+this.selectedItem.qtyReal);

        this.selectedItem.qtyReal = fl[0].qtyReal +this.selectedItem.qtyReal
        let index = this.itemList.map(e => e.item_name).indexOf(this.selectedItem.item_name);
       // this.itemList[index].qtyReal = +this.selectedItem.qtyReal
        this.itemList[index].tot =  ((this.selectedItem.availQty - this.selectedItem.qtyReal) * +this.selectedItem.perch_price)
        
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
        qtyReal:""
      } 
      this.getTotal()
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
    if(+this.itemList[i].qtyReal > 0 && +this.itemList[i].perch_price > 0){
      this.itemList[i].tot = (this.itemList[i].availQty - this.itemList[i].qtyReal)  * +this.itemList[i].perch_price
      this.hideMe(i)
      this.getTotal() 
    }else{
      this.presentToast("خطأ في الإدخال ", "danger")
    }
   
  }


validate():boolean{
  let fl :any =[]
  if (this.itemList.length == 0  || this.payInvo.pay_ref == "" ) {
    this.presentToast('الرجاء ادخال اصناف الي القائمة','danger')
    return false
  }   
  else if(this.payInvo.pay_date == "" || this.payInvo.pay_date == undefined) {
    this.presentToast('الرجاء تحديد التاريخ ','danger')
    return false
  }  
   else {
    return true
  }
}

saveIntial(){ 
//   if(this.radioVal == 1){
//    this.payInvo.sub_name = this.sub_nameNew
//    this.payInvo.cust_id = null
//   }  
//   // check if the invoice is exist
//  if(this.initialInvoices.length > 0){ 
//   this.initialInvoices = this.initialInvoices.filter(x=>x['payInvo'].pay_ref != this.payInvo.pay_ref) 
//   }

//   this.initialInvoices.push({
//     "payInvo": this.payInvo,
//     "itemList": this.itemList
//   })
//   this.storage.set('initialInvoices', this.initialInvoices).then((response) => {
//     this.printArr = []
//     this.recalSubBalance()
//     this.printArr.push({
//       'payInvo': this.payInvo,
//       'itemList':this.itemList,
//       'selectedAccount' : this.selectedAccount,
//       'sub_nameNew' : this.sub_nameNew ,
//       "user_name" : this.user_info.full_name ,
//       "sub_balanse": this.selectedAccount.sub_balance,
//       "balanceStatus":  this.selectedAccount.currentCustumerStatus 
//     }) 
//       //console.log(this.printArr)
//       this.presentAlertConfirm()
//       this.presentToast('تم الحفظ بنجاح', 'success')
//       this.prepareInvo()
//       this.status = 'new'
//     });  
}


saveInvoInit() {
  // // if(this.radioVal == 1){
  // //   this.payInvo.sub_name = this.sub_nameNew
  // //   this.payInvo.cust_id = null
  // //  }  
  // this.api.saveSalesInvoInit(this.payInvo).subscribe(data => {
  //   //console.log(data)
  //   this.saveitemListinit()
  // }, (err) => {
  //   //console.log(err);
  //   this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
  // })
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


deleteSalesInvoInit(){ 
  if(this.status != 'toFinal'){
    this.presentLoadingWithOptions('جاري حذف البيانات ...') 
  } 
 
   this.api.deleteSalesInvoInit(this.payInvo.pay_id).subscribe(data => {
   //console.log(data)
   if (data['message'] != 'Post Not Deleted') {
   this.deleteSalesitemListInit()
   }else{
    this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
   }
 },(err) => {
   //console.log(err);
   this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
  }) 
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
    this.payInvo.pay_date = this.datePipe.transform(d, 'yyyy-MM-dd')
    //console.log('save testing', this.payInvo)
    if (this.validate() == true) {
      this.presentLoadingWithOptions('جاري حفظ البيانات ...') 
          if (this.offline == true) {
            this.saveInvoLocal()
          } else {
            this.saveInvo()
          } 
         }
       }

  back(){
    this._location.back()
  }

  updateInitInvo(){
    this.api.updateInitSalesInvo(this.payInvo).subscribe(data => {
    //console.log(data)
     this.deleteSalesitemListInit4update()
      }, (err) => {
      //console.log(err);
      this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger').then(()=>{
        this.loadingController.dismiss()
      })
     })
    }


    deleteSalesitemListInit4update(){  
      this.api.deleteSalesitemListInit(this.payInvo.pay_ref).subscribe(data => {
      //console.log(data)
      if (data['message'] != 'Post Not Deleted') { 
        this.saveitemListinit()   
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


preparenewaccount(){ 
  // if (this.selectedAccount.sub_name.length>0 && this.selectedAccount.id == null) {
  //  // this.selectedAccount.sub_name = this.payInvo.sub_name
  // } else {
  //   //console.log('slwcted from drop' ) 
  //     this.selectedAccount.sub_name = this.sub_nameNew
  //     this.payInvo.sub_name  =this.selectedAccount.sub_name
  // }
  //   this.selectedAccount.id=null  
  //   this.selectedAccount.ac_id = 1 
  //   this.selectedAccount.sub_type="debit"
  //   this.selectedAccount.sub_code=null
  //   this.selectedAccount.sub_balance="0"
  //   this.selectedAccount.cat_id = 1
  //   this.selectedAccount.cat_name = 'العملاء'
  //   this.selectedAccount.store_id=this.store_info.id  
}

saveSubAccount(){
  // //console.log('crea accoun')
  // this.preparenewaccount()
  // this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
  // //console.log(data)
  // if (data['message'] != 'Post Not Created') {
  //   this.payInvo.cust_id =  data['message'] 

  //   //حالة الحساب موجود محلي والحفظ انلاين يسحب من المحلي ويضاف سsalesaccount   
  //   if(this.radioVal == 0 && this.selectedAccount.id == null && this.offline == false) {
  //     this.sub_accountLocalSales = this.sub_accountLocalSales.filter(x=>x.sub_name != this.selectedAccount.sub_name)
  //     //console.log('imhereeeeeeeeeeeeeeeeee')
  //     this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
  //     //console.log('resoponse set', this.sub_accountLocalSales)
  //     this.selectedAccount.id = this.payInvo.cust_id
  //     this.sub_accountSales.push(this.selectedAccount)
  //     this.storage.set('sub_accountSales', this.sub_accountSales).then((response) => {

  //     })
  //    });
  //  }

   
  //   this.saveInvo()
  // } else {
  //    this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
  // } 
  //   }, (err) => {
  // //console.log(err);
  // this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
  //  },()=>{
  //  this.loadingController.dismiss()
  //  })
}
saveSubAccountInit(){

  // this.preparenewaccount()
  // this.api.saveSubAccount(this.selectedAccount).subscribe(data => {
  // //console.log(data)
  // if (data['message'] != 'Post Not Created') {
  //   this.payInvo.cust_id =  data['message'] 
  //   //console.log('crea accoun' ,  data['message'] )
  //   this.saveInvoInit()
  // } else {
  //    this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
  // } 
  //   }, (err) => {
  // //console.log(err);
  // this.presentToast('لم يتم انشاء حساب للعميل , خطا في الإتصال حاول مرة اخري' , 'danger')
  //  },()=>{
  //  this.loadingController.dismiss()
  //  })
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
  this.sub_accountLocalSales.push(
    this.selectedAccount
  )
  this.storage.set('sub_accountLocalSales', this.sub_accountLocalSales).then((response) => {
    //console.log('resoponse set', this.sub_accountLocalSales)
   // this.payInvo.cust_id =  data['message']
    this.saveInvoLocal()
  });
 }


  saveInvo() {
    this.api.saveTswiaInvo(this.payInvo).subscribe(data => {
      //console.log(data)
      this.saveitemList()
    }, (err) => {
      //console.log(err);
      this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
    })
  }


  saveInvoLocal() {
    this.salesLocal.push({
      "payInvo": this.payInvo,
      "itemList": this.itemList
    })
    this.storage.set('salesLocal', this.salesLocal).then((response) => {
      //console.log('resoponse set', response)
    this.printArr = [] 
    this.printArr.push({
      'payInvo': this.payInvo,
      'itemList':this.itemList,
      'selectedAccount' : this.selectedAccount,
      'sub_nameNew' : this.sub_nameNew ,
      "user_name" : this.user_info.full_name,
      "sub_balanse": this.selectedAccount.sub_balance,
      "balanceStatus": this.selectedAccount.currentCustumerStatus
    }) 
    //console.log(this.printArr)
     // this.presentAlertConfirm()
      this.presentToast('تم الحفظ بنجاح', 'success')
  

       
    });
  }

 saveitemListinit(){  
  this.api.saveSalesitemListInit(this.itemList).subscribe(data=>{ 
    //console.log(data) 
     this.recalSubBalance()
    //console.log(this.selectedAccount.currentCustumerStatus)  
    //console.log(this.printArr) 
    this.printArr = []
    this.recalSubBalance()
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
      // Notify original tab that invoice was created
      try {
        const channel = new BroadcastChannel('invoice-channel');
        channel.postMessage({ type: 'invoice-created', source: 'tswia' });
        channel.close();
      } catch (e) { /* BroadcastChannel not supported */ }
  }, (err) => {
    //console.log(err);
    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
  }, () => {
    this.loadingController.dismiss()
  }
  )      
}


saveitemList(){  
  this.api.saveTswiaitemList(this.itemList).subscribe(data=>{ 
    //console.log(data) 
   //  this.recalSubBalance()
    //console.log(this.selectedAccount.currentCustumerStatus)  
    this.printArr = []
    this.printArr.push({
      'payInvo': this.payInvo,
      'itemList':this.itemList,
      'selectedAccount' : this.selectedAccount,
      'sub_nameNew' : this.sub_nameNew ,
      "user_name" : this.user_info.full_name ,
      "sub_balanse": this.selectedAccount.sub_balance,
      "balanceStatus":this.selectedAccount.currentCustumerStatus
    }) 
    //console.log('printinggg',this.printArr)
    let arr:Array<any> = []
  arr.push({
    "payInvo": this.payInvo,
    "itemList": this.itemList 
  })
    this.logHistoryArr.push(
      {
        "id":null,
        "logRef":this.generateRandom2('insert tswia'),
        "userId":this.user_info.id,
        "typee":'insert tswia',
        "datee": momentObj(new Date()).locale('en').format('YYYY-MM-DD HH:mm:ss'),
        "logStatus":0,
        "logToken":JSON.stringify(arr[0]),
        "yearId":this.year.id,
        "store_id":this.store_info.id
      }
      )
  //   this.sales.push({
  //    "payInvo": this.payInvo,
  //    "itemList": this.itemList 
  //  }) 
  //  this.storage.set('sales', this.sales).then((response) => {
  //  //console.log('sales', response) 
  //  }) 
  //  this.presentAlertConfirm() 
  this.performSync()  
    // this.presentToast('تم الحفظ بنجاح' , 'success')  
    // this.prepareInvo()
   
  }, (err) => {
    //console.log(err);
    this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
  }, () => {
    this.loadingController.dismiss()
  }
  )      
}

async  performSync(){
  await this.saveLogHistory()
  await this.getStockItems()
  }


deleteInitInvo(){

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
   
    this.presentToast('تم الحفظ بنجاح' , 'success')
    this.prepareInvo()
  
   }else{
     this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger') 
   }
 }, (err) => {
   //console.log(err);
   this.presentToast('لم يتم حفظ البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
 }) 
}


async presentModal(printArr , page) { 
  this.recalSubBalance()
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

// ============ Selection Methods ============

toggleSelectAll(event: any) {
  const isChecked = event.detail.checked;
  if (isChecked === this.isSelectAll) return;
  if (isChecked) {
    this.selectAllItems();
  } else {
    this.clearSelection();
  }
}

selectAllItems() {
  this.selectedItems.clear();
  const displayList = this.getDisplayItemList();
  displayList.forEach((_, index) => {
    this.selectedItems.add(index);
  });
  this.isSelectAll = true;
}

clearSelection() {
  this.selectedItems.clear();
  this.isSelectAll = false;
}

toggleItemSelection(index: number, event: any) {
  const isChecked = event.detail.checked;
  if (isChecked) {
    this.selectedItems.add(index);
  } else {
    this.selectedItems.delete(index);
  }
  this.isSelectAll = this.selectedItems.size === this.getDisplayItemList().length;
}

isItemSelected(displayIndex: number): boolean {
  return this.selectedItems.has(displayIndex);
}

async bulkDeleteItems() {
  if (this.selectedItems.size === 0) return;

  const alert = await this.alertController.create({
    header: 'تأكيد الحذف',
    message: `هل تريد حذف ${this.selectedItems.size} صنف من القائمة؟`,
    mode: 'ios',
    buttons: [
      { text: 'إلغاء', role: 'cancel' },
      { text: 'حذف', handler: () => this.performBulkDelete() }
    ]
  });
  await alert.present();
}

private performBulkDelete() {
  const displayList = this.getDisplayItemList();
  const itemsToDelete = Array.from(this.selectedItems).map(displayIndex => displayList[displayIndex]);

  itemsToDelete.forEach(itemToDelete => {
    const originalIndex = this.itemList.findIndex(item =>
      item.item_name === itemToDelete.item_name &&
      item.perch_price === itemToDelete.perch_price
    );
    if (originalIndex !== -1) {
      this.itemList.splice(originalIndex, 1);
    }
  });

  const deletedCount = this.selectedItems.size;
  this.clearSelection();
  this.getTotal();
  if (this.isItemListSorted) {
    this.sortItemListAlphabetically();
  }
  this.presentToast(`تم حذف ${deletedCount} صنف`, 'success');
}

// ============ Sort Methods ============

sortItemListAlphabetically() {
  if (!this.itemList || this.itemList.length === 0) return;

  if (this.isItemListSorted) {
    this.sortedItemList = [...this.itemList];
    this.isItemListSorted = false;
  } else {
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

// ============ Search Methods ============

onSearchTermChange() {
  this.searchMatches = [];
  this.highlightedIndex = -1;

  if (this.tableSearchTerm.trim() === '') return;

  const displayList = this.getDisplayItemList();
  const searchTermLower = this.tableSearchTerm.toLowerCase().trim();

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

getSearchResultText(): string {
  if (this.tableSearchTerm.trim() === '') return '';
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

}
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2, Input, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { from, Observable } from 'rxjs';
import { AlertController, IonInput, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { AuthServiceService } from '../auth/auth-service.service';
//import { AccountModalPage } from '../account-modal/account-modal.page';
import { StockServiceService } from '../syncService/stock-service.service';
import * as momentObj from 'moment';
import { Subscription } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-cash2',
  templateUrl: './cash2.page.html',
  styleUrls: ['./cash2.page.scss']
})
export class Cash2Page implements OnInit, OnDestroy { 
  @ViewChild('popoverNotif22') popoverNotif22;
  notifArr:Array<any> =[]
  showNotif = false
  LogHistoryLocalArr:Array<any> =[]
  logHistoryArr:Array<any>=[];
  isOpenNotif = false ;
  subiscribtionNotif:Subscription;
  newNotif = false ;
  private currencySubscription: Subscription; 
  
  sub_accountFrom:Array<any> =[] 
  itemList:Array<any> =[] 
  sub_accountTo:Array<any> =[] 
  randomsNumber:Array<any> =[]
  jdetail_fromArr :Array<any> =[]
  journalType :Array<any> =[]
  journalTypeDetails :Array<any> =[]
  jType : any = "1";
  pay:any = 0
  radioVal : any = "1"
  jdetail_toArr :Array<any> =[]
  store_info : {id:any , location :any ,store_name:any , store_ref:any }
  user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
  selectedFromAccountArr:Array<any> =[] 
  selectedToAccountArr:Array<any> =[]  
  selectedBankAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any,debit:any ,credit:any, currentType:any}; 

  selectedItem : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any,debit:any ,credit:any, currentType:any}; 
  selectedFromAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any,debit:any ,credit:any, currentType:any}; 
  selectedFromAccount2 : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any,debit:any ,credit:any, currentType:any}; 
  selectedFromAccount3 : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any,debit:any ,credit:any, currentType:any}; 
  selectedToAccount : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any ,credit:any ,debit:any, currentType:any}; 
  selectedToAccount2 : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any ,credit:any ,debit:any, currentType:any}; 
  selectedToAccount3 : {id:any ,ac_id:any,sub_name:any,sub_type:any,sub_code:any,sub_balance:any,store_id:any ,credit:any ,debit:any, currentType:any}; 
  selectedJtype : {id:any ,type_name:any,sub_name:any,type_desc:any,debitac_id:any,creditac_id:any,default_val:any ,default_details:any ,store_id:any}; 
 	banksAccountArray:Array<any> =[]
  payInvo : {rec_id:any ,rec_ref:any,rec_type:any ,rec_date:any,rec_detailes:any,rec_pay:any,user_id:any,ac_id:any,store_id:any,yearId:any};
  showMe :any =null
  journal : {j_id:any ,j_ref:any,j_details:any ,j_type:any,invo_ref:any,j_desc:any,j_date:any,store_id:any,user_id:any,j_pay:any,standard_details:any,yearId:any};

  jdetail_from : {id:any ,j_id:any,j_ref:any ,ac_id:any,credit:any,debit:any,j_desc:any,j_type:any,store_id:any,yearId:any };
  jdetail_from2 : {id:any ,j_id:any,j_ref:any ,ac_id:any,credit:any,debit:any,j_desc:any,j_type:any,store_id:any,yearId:any};
  jdetail_from3 : {id:any ,j_id:any,j_ref:any ,ac_id:any,credit:any,debit:any,j_desc:any,j_type:any,store_id:any,yearId:any};
  jdetail_to : {id:any ,j_id:any,j_ref:any ,ac_id:any,credit:any,debit:any,j_desc:any,j_type:any,store_id:any,yearId:any};
  jdetail_to2 : {id:any ,j_id:any,j_ref:any ,ac_id:any,credit:any,debit:any,j_desc:any,j_type:any,store_id:any,yearId:any};
  jdetail_to3 : {id:any ,j_id:any,j_ref:any ,ac_id:any,credit:any,debit:any,j_desc:any,j_type:any,store_id:any,yearId:any};
  showFrom :boolean =false
  showTo:boolean = false
  showFrom3 :boolean =false
  showTo3:boolean = false
///
coloredMsgFrom:boolean = false
coloredMsgFrom3:boolean = false
coloredMsgTo:boolean = false
coloredMsgTo3:boolean = false
// new aproch
year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}

  // Balance display properties (from account selector)
  selectedAccountBalance: any = null;
  sourceAccountBalance: any = null;
  loadingSourceBalance = false;
  loadingAccountBalance = false;
  accountBalance: any = null;
  selectedAccount: any = null;

  // Source dropdown properties
  sourceSearchTerm: string = '';
  showSourceDropdown: boolean = false;
  sourceHighlightedIndex: number = -1;
  allSources: Array<{id: any, name: string}> = [];
  filteredSources: Array<{id: any, name: string}> = [];

  constructor(private platform :Platform ,private behavApi:StockServiceService ,private modalController: ModalController,private alertController: AlertController, private authenticationService: AuthServiceService,private storage: Storage,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController, private currencyService: CurrencyService, private cdr: ChangeDetectorRef, public translate: TranslateService) {
    this.selectedBankAccount = {id:null,ac_id:null,sub_name:null,sub_type:null,sub_code:null,sub_balance:null,store_id:null,debit:null ,credit:null, currentType:null}
    this.getAppInfo()
   }

  ngOnInit() {
    this.initializeCurrency();
  }

  ngOnDestroy() {
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }

  async initializeCurrency() {
    await this.currencyService.initializeCurrency();
    await this.currencyService.loadSupportedCurrencies();
    if (this.store_info && this.year) {
      await this.currencyService.loadRatesByYear(this.store_info.id, this.year.id);
    }
    this.currencySubscription = this.currencyService.getCurrentCurrency().subscribe(currency => {
      this.cdr.detectChanges();
    });
  }

  // Handle account selection from account-selector component
  onAccountSelected(account: any) {
    if (account) {
      this.selectedAccount = account; // Store for inline balance display
      this.loadingAccountBalance = true; // Set loading state
      this.pickAccount(account);
    }
  }

  // Handle balance loaded from account-selector component
  onBalanceLoaded(balance: any) {
    this.selectedAccountBalance = balance;
    this.accountBalance = balance; // Store for inline balance display
    this.loadingAccountBalance = false; // Clear loading state
  }

  
  
  ionViewDidLeave(){
    //console.log('ionViewWillLeave') 
    if (this.subiscribtionNotif) {
      this.subiscribtionNotif.unsubscribe()
    }
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
    //       this.storage.get('LogHistoryLocal').then((response) => { 
    //         if (response) {
    //           this.LogHistoryLocalArr = response  
    //         } 
    //       });  
    //     } else {
    //       //console.log('no updates')
    //     } 
    //     })
    //   }, 10000); 
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
  // this.storage.get('LogHistoryLocal').then((response) => {
  //   //console.log('LogHistoryLocal',this.LogHistoryLocalArr)  
  //   if (response) {
  //     this.LogHistoryLocalArr = response
  //   }   
  // });
   this.storage.get('STORE_INFO').then((response) => {
     if (response) {
       this.store_info = response
        //console.log(response)
        //console.log(this.store_info) 
        this.getAllAccounts()
        this.getJournalType()     
        this.prepareInvo()
        
     }
   });
  }
 

coleredMsgFromFunc(){
  if (this.showFrom == true && this.selectedFromAccount2.sub_name ==""){
    this.coloredMsgFrom = true
  }else if (this.showFrom3 == true && this.selectedFromAccount3.sub_name ==""){
    this.coloredMsgFrom3 = true
  } 

  if (this.showTo == true && this.selectedToAccount2.sub_name ==""){
    this.coloredMsgTo = true
  }else if(this.showTo3 == true && this.selectedToAccount3.sub_name ==""){
    this.coloredMsgTo3 = true
  }
  setTimeout(() => {
    this.coloredMsgFrom = false
    this.coloredMsgFrom3 = false
    this.coloredMsgTo = false
    this.coloredMsgTo3 = false

  }, 10000);
}

//  jTypeChange(ev){
//   this.selectedToAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"" ,currentType:""};
//   this.selectedToAccount2 = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"" ,currentType:""};
//   this.selectedToAccount3 = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"" ,currentType:""};
//   this.selectedFromAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,debit:"",credit:"",currentType:""}; 
//   this.selectedFromAccount2 = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,debit:"",credit:"",currentType:""}; 
//   this.selectedFromAccount3 = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,debit:"",credit:"",currentType:""}; 
 
//   this.showFrom = false
//   this.showFrom3 = false
//   this.showTo = false
//   this.showTo3 = false
//   this.journal.j_details=""
//   //console.log(ev.target.value) 
//   //console.log(this.jType) 
//   let fl= this.journalType.filter(x=>x.type_name == ev.target.value)
//   let flDetails = this.journalTypeDetails.filter(x=>x.jType_id == fl[0].id)
//   this.selectedJtype = fl[0]
//   //console.log('im here', fl ,fl[0])
// //show account feilds
// this.journal.j_details=this.selectedJtype.type_desc

// if (+fl[0].from_count ==  2 ) {
//   this.showFrom = true
//   this.showFrom3 = false
// } else if(+fl[0].from_count == 3) {
//   this.showFrom3 = true
//   this.showFrom = true
// }

// if (+fl[0].to_count == 2) {
//   this.showTo = true
//   this.showTo3 = false
// } else if(+fl[0].to_count == 3) {
//   this.showTo = true
//   this.showTo3 = true
// }
// //
// let fromAccount :Array<any> = []
// let toAccount :Array<any> = []
// for (let i = 0; i <  flDetails.length; i++) {
//   const element =  flDetails[i];
//   if(element.type_ac == 'debit'){
//    fromAccount.push(element)
//   }else if(element.type_ac == 'credit'){
//     toAccount.push(element) 
//   }
// }
// //console.log('from' ,fromAccount)
// //console.log('to', toAccount)
// if(fromAccount){
//   for (let i = 0; i <  fromAccount.length; i++) {
//     const element =  fromAccount[i];
//     let flAccounts = this.sub_accountFrom.filter(x=>x.id == element.ac_id)
//     //console.log(fromAccount[0].sub_name)
//         if (i == 0) {
//           this.pickAccountFrom('ev', 1,flAccounts[0].sub_name)
//         }else if(i == 1){
//           this.pickAccountFrom('ev', 2,flAccounts[0].sub_name) 
//         }else if(i == 2){
//           this.pickAccountFrom('ev', 3,flAccounts[0].sub_name)
//         } 
//   }
 
// }

// if(toAccount){
//   for (let i = 0; i <  toAccount.length; i++) {
//     const element =  toAccount[i];
//     let flAccounts = this.sub_accountTo.filter(x=>x.id == element.ac_id)
//      //console.log(flAccounts[0].sub_name)
//         if (i == 0) {
//           this.pickAccountTo('ev', 1,flAccounts[0].sub_name)
//         }else if(i == 1){
//           this.pickAccountTo('ev', 2,flAccounts[0].sub_name)
//         }else if(i == 2){
//           this.pickAccountTo('ev', 3,flAccounts[0].sub_name)
//         } 
//   }
// }
// //  for (let i = 0; i <  flDetails.length; i++) {
// //    const element =  flDetails[i];
// //    if(element.type_ac == 'debit'){
// //     let flAccounts = this.sub_accountFrom.filter(x=>x.id == element.ac_id)
// //     //console.log(flAccounts[0].sub_name)
// //     if (i == 0) {
// //       this.pickAccountFrom('ev', 1,flAccounts[0].sub_name)
// //     }else if(i == 1){
// //       this.pickAccountFrom('ev', 2,flAccounts[0].sub_name)
// //     }else if(i == 2){
// //       this.pickAccountFrom('ev', 3,flAccounts[0].sub_name)
// //     }
// //    }else if(element.type_ac == 'credit'){
// //     let flAccounts = this.sub_accountTo.filter(x=>x.id == element.ac_id)
// //     //console.log(flAccounts[0].sub_name)
// //     if (i == 0) {
// //       this.pickAccountTo('ev',  1,flAccounts[0].sub_name)
// //     }else if(i ==1){
// //       this.pickAccountTo('ev',  2,flAccounts[0].sub_name)
// //     }else if(i ==2){
// //       this.pickAccountTo('ev', 3,flAccounts[0].sub_name)
// //     }
// //    }
// //  }



//     // if (this.selectedJtype.debitac_id != null) {
//     //   let fname = this.sub_accountFrom.filter(x => x.id == this.selectedJtype.debitac_id)
//     //   //console.log(fname)
//     //   this.pickAccountFrom(fname[0].sub_name, 4)
//     // } else if (this.selectedJtype.debitac_id == null) {
//     //   this.selectedFromAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, debitTot: "", creditTot: "", currentType: "" };
//     // }
//     // if (this.selectedJtype.creditac_id != null) {
//     //   let cname = this.sub_accountTo.filter(x => x.id == this.selectedJtype.creditac_id)
//     //   this.pickAccountTo(cname[0].sub_name, 1)
//     // } else if (this.selectedJtype.creditac_id == null) {
//     //   this.selectedToAccount = { id: "", ac_id: "", sub_name: "", sub_type: "", sub_code: "", sub_balance: "", store_id: this.store_info.id, creditTot: "", debitTot: "", currentType: "" };

//     // }  

//   this.payInvo.rec_detailes = fl[0].default_details 
//   this.payInvo.rec_pay = fl[0].default_val 
//   this.coleredMsgFromFunc()
//  }
 

 radioChange(ev){
  if(ev.target.value == 1){
    //console.log(ev)
  }else if(ev.target.value == 1){

  }
 }


pickAccount(account){
  let fl= [account];
  let ctype :any ;
  if(fl[0].debit > 0){
   ctype = 'debit'
  }else if(fl[0].credit > 0){
   ctype = 'credit' 
  }
   
  this.selectedFromAccount = {
   id:fl[0]['id'],
   ac_id:fl[0]['ac_id'],
   sub_name:fl[0]['sub_name'],
   sub_type:fl[0]['sub_type'],
   sub_code:fl[0]['sub_code'], 
   store_id:fl[0]['store_id'],
   sub_balance:fl[0]['sub_balance'] ,
   currentType:ctype,
   debit:+fl[0]['debit'],  
   credit:+fl[0]['credit'] 
 } 


 this.selectedItem ={
  id:"NULL",
   ac_id:this.selectedFromAccount.id,
   sub_name:this.selectedFromAccount.sub_name,
   sub_type:this.selectedFromAccount.sub_type,
   sub_code:this.selectedFromAccount.sub_code, 
   store_id:this.selectedFromAccount.store_id,
   sub_balance:this.selectedFromAccount.sub_balance ,
   currentType:this.selectedFromAccount.currentType,
   debit:this.selectedFromAccount.debit,  
   credit:this.selectedFromAccount.credit 
 }
}


pickAccountBank(ev ){
  console.log('ev', ev.target.value);
  if(ev.target.value == 1){ 
    this.selectedBankAccount = {
      id:46,
      ac_id:7,
      sub_name:"الخزينة",
      sub_type:"",
      sub_code:"",
      store_id:this.store_info.id,
      sub_balance:"",
      currentType:"",
      debit:"",
      credit:""
    }
    this.loadSourceBalance(46);
  }else{
    let fl = this.banksAccountArray.filter(x=>x.id ==  ev.target.value)
    console.log(this.banksAccountArray)
    console.log(fl);
    this.selectedBankAccount = {
      id:fl[0]['id'],
      ac_id:fl[0]['ac_id'],
      sub_name:fl[0]['sub_name'],
      sub_type:fl[0]['sub_type'],
      sub_code:fl[0]['sub_code'], 
      store_id:fl[0]['store_id'],
      sub_balance:fl[0]['sub_balance'] ,
      currentType:"",
      debit:+fl[0]['debit'],  
      credit:+fl[0]['credit'] 
    } 
    this.loadSourceBalance(fl[0]['id']);
  }
}





prepare4save(){
  this.payInvo.rec_date  =  this.journal.j_date
  let d : Date = this.payInvo.rec_date   
  this.payInvo.rec_date = this.datePipe.transform(d, 'yyyy-MM-dd')
  let debit :any=0 
  let credit :any=0 
  let currentType :any ="" 
  if(+this.jType == 1 ){
   debit = +this.pay
   this.journal.j_type = "سند دفع"
  // currentType = "debit"
  }else if(+this.jType == 2){
    credit = +this.pay
   this.journal.j_type = "سند قبض"

   // currentType = "credit"
  }
  this.itemList = []
  this.itemList.push({
  "id": "NULL" ,
  "j_id":this.journal.j_id , 
  "j_ref":this.journal.j_ref ,
  "ac_id":this.selectedFromAccount.id , 
  "j_desc":this.selectedFromAccount.sub_type,
  "j_type":"",
  "credit": credit,
  "debit": debit,
  "store_id":this.store_info.id ,
  "sub_code":this.selectedFromAccount.sub_code,
  "sub_name":this.selectedFromAccount.sub_name ,
  "yearId":this.year.id
})
this.journal.j_pay = +this.pay
let from:any = ""
let to :any = ""
 
 if(+this.jType  == 1){
  if(+this.radioVal == 1){
    this.jdetail_to = {
      id :  "NULL"  ,
      j_id :this.journal.j_id ,  
      j_ref :this.journal.j_ref ,
      ac_id : 46 ,
      j_desc :"",
      j_type : "سند دفع",
      credit : this.pay,
      debit : 0,
      store_id : this.store_info.id,
      yearId : this.year.id
 }
   to = 'الخزينة'
   from = this.selectedFromAccount.sub_name  
  }else if(+this.radioVal != 1){
    this.jdetail_to = {
      id :  "NULL"  ,
      j_id :this.journal.j_id ,  
      j_ref :this.journal.j_ref ,
      ac_id : this.selectedBankAccount.id ,
      j_desc :"",
      j_type : "سند دفع",
      credit : this.pay,
      debit : 0,
      store_id : this.store_info.id,
      yearId : this.year.id
  }
  to = this.selectedBankAccount.sub_name
  //to = 'البنك'
   from = this.selectedFromAccount.sub_name  
  }
  this.itemList[0].j_type =  "سند قبض"
  this.jdetail_toArr.push(this.jdetail_to)
  this.jdetail_fromArr.push(this.itemList[0])  
  this.journal.standard_details =  'من حساب ' + from +  ' الي حساب ' +  to
} else if(+this.jType  == 2){
  if(+this.radioVal == 1){
    this.jdetail_from = {
      id :  "NULL"  ,
      j_id :this.journal.j_id ,  
      j_ref :this.journal.j_ref ,
      ac_id : 46 ,
      j_desc :"",
      j_type :  "سند قبض",
      credit : 0,
      debit : this.pay,
      store_id : this.store_info.id,
      yearId : this.year.id
  } 
   from = 'الخزينة'
   to = this.selectedFromAccount.sub_name 
  }else if(+this.radioVal !=1){
    this.jdetail_from = {
      id :  "NULL"  ,
      j_id :this.journal.j_id ,  
      j_ref :this.journal.j_ref ,
      ac_id : this.selectedBankAccount.id ,
      j_desc :"",
      j_type : "سند قبض",
      credit :0,
      debit : +this.pay,
      store_id : this.store_info.id,
      yearId : this.year.id
  }
  //from = 'البنك'
   from = this.selectedBankAccount.sub_name
   to = this.selectedFromAccount.sub_name 
  } 

  this.itemList[0].j_type =  "سند دفع"
  this.jdetail_toArr.push(this.itemList[0]) 
  this.jdetail_fromArr.push(this.jdetail_from)
  this.journal.standard_details =  'من حساب ' + from +  ' الي حساب ' +  to

  //console.log('this.journal' ,  this.journal)
} 
 
 }



 addTolist() {
  if (this.selectedItem.sub_name == "" || this.selectedItem.id == "" ) {
    this.presentToast('ACCOUNTING.CASH.MESSAGE.SELECT_ACCOUNT', 'danger')
  }else if(+this.pay == 0){
    this.presentToast('ACCOUNTING.CASH.MESSAGE.ENTER_AMOUNT', 'danger')
  }  else {
    let fl: any = []
    if (this.itemList.length > 0) {
      fl = this.itemList.filter(x => x.ac_id == this.selectedItem.ac_id)
    }

    if (fl.length == 0) {
      let debit :any=0 
      let credit :any=0 
      let currentType :any ="" 
      if(+this.jType == 1 ){
       debit = +this.pay
      // currentType = "debit"
      }else if(+this.jType == 2){
        credit = +this.pay
       // currentType = "credit"
      }
      this.itemList.push({
      "id": "NULL" ,
      "j_id":this.journal.j_id , 
      "ac_id":this.selectedItem.id ,
      "j_ref":this.journal.j_ref ,
      "j_desc":this.selectedItem.sub_type,
      "j_type":"",
      "credit": credit,
      "debit": debit,
      "store_id":this.store_info.id ,
      "sub_code":this.selectedItem.sub_code,
      "sub_name":this.selectedItem.sub_name ,
      "yearId":this.year.id 
    })
    } 
    
    // else {
    //   this.presentToast('الحساب موجود مسبقا في القائمة , يمكنك تعديل قيمة المبلغ', 'danger')
    // }

    this.getTotal()
    this.pay = 0
    this.selectedItem = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"",currentType:""}; 
    this.selectedFromAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"",currentType:""}; 
  }

}

 

 deleteItem(index){
  //console.log( index); 
  this.itemList.splice(index,1)
  //console.log( this.itemList);
  this.pay = 0 
  this.getTotal()
  }
  
 


 generateRandom(type):any{
  let da = new Date 
  //console.log(da)
  let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString()
  if (type == 'invo') {
    this.payInvo.rec_ref = this.store_info.store_ref +"INV"+ randomsNumber 
    this.journal.invo_ref = this.payInvo.rec_ref 
  }else{
    this.journal.j_ref = this.store_info.store_ref + "JO" + randomsNumber 
    this.jdetail_from.j_ref = this.journal.j_ref
    this.jdetail_to.j_ref = this.journal.j_ref
  }
  //console.log(randomsNumber)
  //console.log(this.payInvo.rec_ref ,this.journal.j_ref)  
 }

 

hideMe(i){
  this.showMe = null 
}

editCell(i){
  if(+this.jType  == 1){
    if(+this.itemList[i].debit > 0){
      this.hideMe(i)
      this.getTotal()
    }else{
      this.presentToast("ACCOUNTING.CASH.MESSAGE.INPUT_ERROR", "danger")
    }
  }else if(+this.jType  == 2){
    if(+this.itemList[i].credit > 0){
      this.hideMe(i)
      this.getTotal()
    }else{
      this.presentToast("ACCOUNTING.CASH.MESSAGE.INPUT_ERROR", "danger")
    }
  }
}



getTotal(){
  if(+this.jType  == 1){
    let sum = this.itemList.reduce( (acc, obj)=> { return acc + +obj.debit; }, 0);
    //console.log('sum', sum)
    this.journal.j_pay = sum  

  } else if(+this.jType  == 2){
    let sum = this.itemList.reduce( (acc, obj)=> { return acc + +obj.credit; }, 0);
    //console.log('sum', sum)
    this.journal.j_pay = sum  
  } 
} 

qtyClick(i){
  //console.log(i)
  this.showMe = i
}

pickAccountTo(ev ,index ,sub_name?){
  let s :string
  if (sub_name) {
    s = sub_name
  } else {
    s = ev.target.value
  }
  let fl= this.sub_accountTo.filter(x=>x.sub_name ==  s)
  //console.log(s,this.sub_accountTo,fl);
  let bl :any 
  let ctype :any 
  if(fl[0].debit > 0){
    ctype = 'debit'
   }else if(fl[0].credit > 0){
    ctype = 'credit'
  
   }
  if(index == 1 ){
     this.selectedToAccount = {
    id:fl[0]['id'],
    ac_id:fl[0]['ac_id'],
    sub_name:fl[0]['sub_name'],
    sub_type:fl[0]['sub_type'],
    sub_code:fl[0]['sub_code'], 
    store_id:fl[0]['store_id'],
    sub_balance:fl[0]['sub_balance'] ,
    currentType:ctype, 
     debit:+fl[0]['debit'],  
     credit:+fl[0]['credit'] 
     
  } 
  //console.log('kjdh', this.selectedToAccount);
  }else if(index == 2){
    this.selectedToAccount2 = {
      id:fl[0]['id'],
      ac_id:fl[0]['ac_id'],
      sub_name:fl[0]['sub_name'],
      sub_type:fl[0]['sub_type'],
      sub_code:fl[0]['sub_code'], 
      store_id:fl[0]['store_id'],
      sub_balance:bl ,
      currentType:ctype,
      debit:+fl[0]['debit'],  
     credit:+fl[0]['credit']      
  }  
}else if(index == 3){
  this.selectedToAccount3 = {
    id:fl[0]['id'],
    ac_id:fl[0]['ac_id'],
    sub_name:fl[0]['sub_name'],
    sub_type:fl[0]['sub_type'],
    sub_code:fl[0]['sub_code'], 
    store_id:fl[0]['store_id'],
    sub_balance:bl ,
    currentType:ctype,
    debit:+fl[0]['debit'],  
     credit:+fl[0]['credit']   
}

} 
}
 
 prepareInvo(saved?){
  this.selectedItem = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"",currentType:""}; 
  this.selectedFromAccount = {id:"" ,ac_id:"",sub_name:"",sub_type:"",sub_code:"",sub_balance:"",store_id:this.store_info.id ,credit:"",debit:"",currentType:""}; 
  this.jdetail_from = {id:"" ,j_id:"",j_ref:"" ,ac_id:"",credit:"",debit:"",j_desc:"",j_type:"",store_id:"" ,yearId:""};
  this.jdetail_to = {id:"" ,j_id:"",j_ref:"" ,ac_id:"",credit:"",debit:"",j_desc:"",j_type:"",store_id:"",yearId:""};
 
  this.payInvo ={rec_id:undefined ,rec_ref:0 ,store_id:this.store_info.id,rec_date:"", user_id:"",ac_id:0,rec_detailes:"",rec_pay:0,rec_type:"",yearId:""};
 
  this.journal = {j_id:undefined ,j_ref:"",j_details:"" ,j_type:"",invo_ref:"",j_desc:"",j_date:"",store_id:this.store_info.id,user_id:"",j_pay:"",standard_details:"",yearId:""};
  
  this.jdetail_fromArr =[]
  this.jdetail_toArr =[]

  this.pay = 0
  let d = new Date
  // this.payInvo.pay_date  = d.getMonth().toString() + "/"+ d.getDay().toString()+ "/"+ d.getFullYear().toString() 
  this.payInvo.rec_date = this.datePipe.transform(d, 'yyyy-MM-dd') 
  this.journal.j_date = this.datePipe.transform(d, 'yyyy-MM-dd')
  this.generateRandom('invo')  
  this.generateRandom('journal')

  this.payInvo.store_id =this.store_info.id
  this.payInvo.yearId =this.year.id
  this.payInvo.user_id = this.user_info.id
  this.journal.invo_ref = this.payInvo.rec_ref
  this.journal.store_id =this.store_info.id
  this.journal.user_id = this.user_info.id
  this.journal.yearId = this.year.id
  this.journal.store_id = this.store_info.id
  this.journal.user_id = this.user_info.id
  this.jdetail_from.store_id =this.store_info.id
  this.jdetail_from.j_ref =this.journal.j_ref
  this.jdetail_from.yearId =this.year.id
  this.jdetail_to.j_ref = this.journal.j_ref
  this.jdetail_to.store_id =this.store_info.id
  this.jdetail_to.yearId =this.year.id
  
  //console.log('fgdfdgdfgd', this.payInvo) 
  this.radioVal = "1"
  this.jType = "1" 
  if(saved){
    this.loadingController.dismiss()
  }
  this.getAllAccounts()  
}

 getAllAccounts(){
  console.log('getAllAccounts' , this.store_info.id , this.year.id);
  this.api.getAllAccounts(this.store_info.id,this.year.id).subscribe(data =>{
     let res = data
     console.log('res', res);
     this.sub_accountFrom = res ['data']
     this.sub_accountTo = res ['data']
     this.sub_accountFrom = this.sub_accountFrom.filter(x=> x.ac_id != 8 && x.ac_id !=9 )
    this.getBanksAccount()
     this.prepareCurrentBalnces()
     //console.log(this.sub_accountFrom)
   }, (err) => {
   //console.log(err);
 })  
 } 

getBanksAccount(){
  this.banksAccountArray = this.sub_accountFrom.filter(x=> x.ac_id == 7)
  console.log('banksAccountArray', this.banksAccountArray);
  this.prepareSources();
}

// Prepare sources list (Cash + Banks)
prepareSources() {
  this.allSources = [];

  // Add cash option
  this.allSources.push({
    id: '1',
    name: this.translate.instant('ACCOUNTING.CASH.LABEL.CASH') || 'الخزينة'
  });

  // Add bank accounts
  this.banksAccountArray.forEach(bank => {
    this.allSources.push({
      id: bank.id,
      name: bank.sub_name
    });
  });

  this.filteredSources = [...this.allSources];

  // Set default to cash
  if (!this.sourceSearchTerm) {
    this.sourceSearchTerm = this.allSources[0].name;
    this.radioVal = '1';
  }
}

// Handle source search input
onSourceSearchInput(event: any) {
  this.sourceSearchTerm = event.target.value;
  this.filterSources();
  this.sourceHighlightedIndex = -1;

  if (this.sourceSearchTerm.length > 0 || this.allSources.length > 0) {
    this.showSourceDropdown = true;
  } else {
    this.showSourceDropdown = false;
    this.filteredSources = [...this.allSources];
  }
}

// Filter sources based on search term
filterSources() {
  if (this.sourceSearchTerm.trim() === '') {
    this.filteredSources = [...this.allSources];
  } else {
    this.filteredSources = this.allSources.filter(source =>
      source.name.toLowerCase().includes(this.sourceSearchTerm.toLowerCase())
    );
  }
}

// Handle source input focus
onSourceInputFocus() {
  this.sourceHighlightedIndex = -1;

  if (this.allSources.length > 0) {
    setTimeout(() => {
      this.showSourceDropdown = true;
    }, 10);

    if (this.sourceSearchTerm.length === 0) {
      this.filteredSources = [...this.allSources];
    } else {
      this.filterSources();
    }
  }
}

// Handle source input blur
onSourceInputBlur() {
  setTimeout(() => {
    this.showSourceDropdown = false;
    this.sourceHighlightedIndex = -1;
  }, 200);
}

// Handle source keyboard navigation
onSourceKeyDown(event: KeyboardEvent) {
  if (!this.showSourceDropdown || this.filteredSources.length === 0) {
    if (event.key === 'ArrowDown' && this.filteredSources.length > 0) {
      event.preventDefault();
      this.showSourceDropdown = true;
      this.sourceHighlightedIndex = 0;
    }
    return;
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      this.sourceHighlightedIndex = Math.min(this.sourceHighlightedIndex + 1, this.filteredSources.length - 1);
      break;

    case 'ArrowUp':
      event.preventDefault();
      this.sourceHighlightedIndex = Math.max(this.sourceHighlightedIndex - 1, -1);
      break;

    case 'Enter':
      event.preventDefault();
      if (this.sourceHighlightedIndex >= 0 && this.sourceHighlightedIndex < this.filteredSources.length) {
        this.selectSource(this.filteredSources[this.sourceHighlightedIndex]);
      }
      break;

    case 'Escape':
      event.preventDefault();
      this.showSourceDropdown = false;
      this.sourceHighlightedIndex = -1;
      break;

    case 'Tab':
      this.showSourceDropdown = false;
      this.sourceHighlightedIndex = -1;
      break;
  }
}

// Select source from dropdown
selectSource(source: {id: any, name: string}) {
  this.sourceSearchTerm = source.name;
  this.showSourceDropdown = false;
  this.sourceHighlightedIndex = -1;

  // Call the original pickAccountBank logic
  const event = { target: { value: source.id } };
  this.pickAccountBank(event);

  this.cdr.detectChanges();
}
 
 prepareCurrentBalnces(){
  for (let i = 0; i < this.sub_accountFrom.length; i++) {
    const element = this.sub_accountFrom[i];
    let debitTot = +element.fromDebitTot + +element.toDebitTot
    let creditTot = +element.fromCreditTot + +element.toCreditTot
    if(element.sub_type == "debit"){ 
      let bl = (+element.sub_balance + +debitTot) - +creditTot
      if(bl > 0){ 
        element.debit = bl
        element.credit = 0 
      }else if(bl < 0){ 
        bl = bl * -1
        element.debit = 0
        element.credit = bl  
      }else if(bl == 0){ 
       element.debit = bl
       element.credit = 0  
      }
      
    }else if(element.sub_type == "credit"){ 
      let bl = (+element.sub_balance + +creditTot) - +debitTot 
      if(bl > 0){ 
        element.debit = 0 
        element.credit = bl
      }else if(bl < 0){ 
        bl = bl * -1
        element.debit = bl
        element.credit =  0 
      }else if(bl == 0){ 
       element.debit = 0
       element.credit = bl  
      } 
    }
    
  }
  this.sub_accountTo = this.sub_accountFrom 
}


 getJournalType(){
  this.api.getJournalType(this.store_info.id).subscribe(data =>{
     let res = data
     this.journalType = res ['data'] 
     //console.log('sasasa',this.journalType)
     this.getJournalTypeDetails()
   }, (err) => {
   //console.log(err);
 })  
 }

 getJournalTypeDetails(){
  this.api.getJournalTypeDetails(this.store_info.id).subscribe(data =>{
     let res = data
     this.journalTypeDetails = res ['data'] 
     //console.log(this.journalTypeDetails)
   }, (err) => {
   //console.log(err);
 })  
 }

 payChange(ev){
  //console.log( ev.target.value);
  this.jdetail_from.debit =  ev.target.value
  this.jdetail_to.credit =  ev.target.value
}


 validate():boolean{
  if ( +this.radioVal == 0 || +this.jType == 0 ) {
    this.presentToast('ACCOUNTING.CASH.MESSAGE.SELECT_VOUCHER_TYPE','danger')
    return false
 }else if ( +this.journal.j_pay == 0  ) {
  this.presentToast('ACCOUNTING.CASH.MESSAGE.ENTER_TRANSACTIONS','danger')
    return false
  }else if(+this.jdetail_fromArr[0].ac_id == 0 || +this.jdetail_toArr[0].ac_id == 0){
    this.presentToast('ACCOUNTING.CASH.MESSAGE.SELECT_ACCOUNT_AGAIN','danger')
  }
   else {
    return true
  }
 }
 
setStandard(){
  let from2:any = ""
   let from3 :any = ""
  let to2 :any = ""
    let to3 :any = ""
  if (this.showFrom == true && this.selectedFromAccount2.sub_name  != undefined){
    from2 =  ' , ' + this.selectedFromAccount2.sub_name 
  }else if(this.showFrom3 == true && this.selectedFromAccount3.sub_name  != undefined){
    from3 = ' , ' + this.selectedFromAccount3.sub_name
  }  
  if (this.showTo == true && this.selectedToAccount2.sub_name != undefined){
    to2 = ' , ' + this.selectedToAccount2.sub_name
  }else if(this.showTo3 == true && this.selectedToAccount3.sub_name != undefined){
    to3 = ' , ' + this.selectedToAccount3.sub_name
  } 
  this.journal.standard_details =  'من حساب ' + this.selectedFromAccount.sub_name  + from2  + from3 +  ' الي حساب ' + this.selectedToAccount.sub_name  + to2  + to3
 
}

 


  save() {
   this.prepare4save()
    if (  this.validate() == true) {
       this.presentLoadingWithOptions('COMMON.MESSAGE.SAVING')
       this.saveJournal()
    }
  }



  async presentModalSales(type?, sub_name? , cust_id?) {
  if(this.selectedToAccount.ac_id == 8 ){
    type = 'sales' // حساب المبيعات
    if(this.selectedFromAccount2.sub_name == "" && this.showFrom == true){
      this.presentToast('ACCOUNTING.CASH.MESSAGE.SELECT_CUSTOMER_ACCOUNT' , 'warning')
    }else if(this.selectedFromAccount2.sub_name != "" && this.showFrom == true){

    sub_name = this.selectedFromAccount2.sub_name // حساب العميل
    cust_id = this.selectedFromAccount2.id // حساب المورد
    }
  }
  if(this.selectedFromAccount.ac_id == 9 ){
    type = 'purch'  // حساب المشتريات
    if(this.selectedToAccount2.sub_name == "" && this.showTo == true){
      this.presentToast('ACCOUNTING.CASH.MESSAGE.SELECT_SUPPLIER_ACCOUNT' , 'warning')
    }else if(this.selectedToAccount2.sub_name != "" && this.showTo == true){

     sub_name = this.selectedToAccount2.sub_name // حساب المورد
     cust_id = this.selectedToAccount2.id // حساب المورد
    }
  }


    const modal = await this.modalController.create({
      component: "AccountModalPage" ,
      componentProps: {
        "type": type,
        "sub_name": sub_name , 
         "cust_id" : cust_id
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
 
  doAfterDissmiss(data?){
    if (data.role == 'sales' ) {
        //console.log('sales' ,data.data)
        this.journal.j_details = this.journal.j_details + ", " + data.data[1] + ' , رقم :  ' + data.data[0].pay_id + ' بتاريخ ' + data.data[0].pay_date + ', إجمالي : ' + (+data.data[0].tot_pr - +data.data[0].discount) 
      } else if(data.role == 'purch'){
        this.journal.j_details = this.journal.j_details + ", " + data.data[1] + ' , رقم :  ' + data.data[0].pay_id + ' بتاريخ ' + data.data[0].pay_date + ', إجمالي : ' + (+data.data[0].tot_pr - +data.data[0].discount) 
      } 
  }
 
  saveJournal() {
    //console.log('here we are',this.jdetail_toArr , this.jdetail_fromArr)
    this.api.saveJournal(this.journal).subscribe(data => {
      //console.log(data)
      if (data['message'] != 'Post Not Created') {
        for (let i = 0; i < this.jdetail_fromArr.length; i++) {
        const element = this.jdetail_fromArr[i];
        element.j_id = data['message']
      }
      for (let i = 0; i < this.jdetail_toArr.length; i++) {
        const element = this.jdetail_toArr[i];
        element.j_id = data['message']
      }

      this.saveJournalFrom()
      }else{
      this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR', 'danger')
      this.loadingController.dismiss()
      }
    }, (err) => {
      //console.log(err);
      this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR', 'danger')
      this.loadingController.dismiss()
    })
  }


  generateRandom2(role):any{
    let da = new Date 
    //console.log(da)
    let randomsNumber = da.getMonth().toString() + da.getDay().toString() + da.getHours().toString()+ da.getMinutes().toString()+da.getSeconds().toString()+da.getMilliseconds().toString() + role
    return this.store_info.store_ref + randomsNumber 
  }


  saveJournalFrom() {
    this.api.saveJournalFrom(this.jdetail_fromArr).subscribe(data => {
      //console.log(data)
      if (data['message'] != 'Post Not Created') {

        this.saveJournalTo()
      }else{
        this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR', 'danger')
        this.loadingController.dismiss()
      }

    }, (err) => {
      //console.log(err);
      this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR', 'danger')
      this.loadingController.dismiss()
    })
  }

  saveJournalTo() {
    this.api.saveJournalTo(this.jdetail_toArr).subscribe(data => {
      //console.log(data)
      if (data['message'] != 'Post Not Created') {
        this.presentToast('COMMON.MESSAGE.SAVED_SUCCESSFULLY' , 'success')
        this.loadingController.dismiss()
        this.prepareInvo('saved')
      } else{
        this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR', 'danger')
        this.loadingController.dismiss()
      }
    }, (err) => {
      //console.log(err);
      this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR', 'danger')
      this.loadingController.dismiss()
    }
    )
  }

  async  performSync(){
    await this.saveLogHistory()
  }
  
  async presentLoadingWithOptions(translationKey?) {
    const message = translationKey ? this.translate.instant(translationKey) : undefined;
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode:'ios',
      message: message,
      translucent: true,
     // cssClass: 'custom-class custom-loading',
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed with role:', role);
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
      // this.getStockItems()
     }else{
       this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR' , 'danger')
     }
   }, (err) => {
     //console.log(err);
     this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR' , 'danger')
   })
  }
  
  presentPopoverNotif(e?: Event) {
    //console.log('preent me', e)
     this.notifArr = []
     this.showNotif = false
     this.popoverNotif22.event = e;
     this.isOpenNotif = true;  
   }

  didDissmisNotif(){
    this.isOpenNotif = false
    //console.log('dismissOver') 
  }

  async presentToast(translationKey: string, color?) {
    const message = this.translate.instant(translationKey);
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      color:color,
      cssClass:'cust_Toast',
      mode:'ios',
      position:'top'
    });
    toast.present();
  }
  
  // Method to check if the form is valid for enabling/disabling the save button
  isFormValid(): boolean {
    // Check if journal type is selected
    if (!this.jType || +this.jType === 0) {
      return false;
    }
    
    // Check if radio value is selected
    if (!this.radioVal || +this.radioVal === 0) {
      return false;
    }
    
    // Check if amount is entered and greater than 0
    if (!this.pay || +this.pay <= 0) {
      return false;
    }
    
    // Check if account is selected
    if (!this.selectedFromAccount || !this.selectedFromAccount.sub_name || this.selectedFromAccount.sub_name === '') {
      return false;
    }
    
    // Check if bank account is selected when not using cash (radioVal != 1)
    if (+this.radioVal !== 1 && (!this.selectedBankAccount || !this.selectedBankAccount.sub_name || this.selectedBankAccount.sub_name === '')) {
      return false;
    }
    
    // Check if journal details are provided
    if (!this.journal.j_details || this.journal.j_details.trim() === '') {
      return false;
    }
    
    // Check if journal date is provided
    if (!this.journal.j_date || this.journal.j_date === '') {
      return false;
    }
    
    return true;
  }
  
  // Method to reset the form fields
  clearForm(): void {
    // Reset payment amount
    this.pay = 0;

    // Reset journal type and radio value
    this.jType = "1";
    this.radioVal = "1";

    // Reset selected accounts
    this.selectedFromAccount = {
      id: "",
      ac_id: "",
      sub_name: "",
      sub_type: "",
      sub_code: "",
      sub_balance: "",
      store_id: this.store_info?.id || "",
      debit: "",
      credit: "",
      currentType: ""
    };

    this.selectedItem = {
      id: "",
      ac_id: "",
      sub_name: "",
      sub_type: "",
      sub_code: "",
      sub_balance: "",
      store_id: this.store_info?.id || "",
      debit: "",
      credit: "",
      currentType: ""
    };

    this.selectedBankAccount = {
      id: null,
      ac_id: null,
      sub_name: null,
      sub_type: null,
      sub_code: null,
      sub_balance: null,
      store_id: null,
      debit: null,
      credit: null,
      currentType: null
    };

    // Reset source dropdown
    this.sourceSearchTerm = this.allSources.length > 0 ? this.allSources[0].name : '';
    this.showSourceDropdown = false;
    this.sourceHighlightedIndex = -1;
    this.filteredSources = [...this.allSources];

    // Reset item list
    this.itemList = [];

    // Reset journal details arrays
    this.jdetail_fromArr = [];
    this.jdetail_toArr = [];

    // Reset visibility flags
    this.showFrom = false;
    this.showTo = false;
    this.showFrom3 = false;
    this.showTo3 = false;
    this.showMe = null;

    // Reset colored message flags
    this.coloredMsgFrom = false;
    this.coloredMsgFrom3 = false;
    this.coloredMsgTo = false;
    this.coloredMsgTo3 = false;

    // Reinitialize the form with fresh data
    this.prepareInvo();

    // Reset balance data
    this.selectedAccountBalance = null;
    this.sourceAccountBalance = null;
  }


  // Load balance for source account (المصدر)
  loadSourceBalance(accountId: any) {
    if (!accountId || !this.store_info || !this.year) {
      return;
    }

    this.loadingSourceBalance = true;
    this.sourceAccountBalance = null; 
    this.api.getAccountBalance(accountId, this.store_info.id, this.year.id).subscribe(
      (response) => {
        this.loadingSourceBalance = false;
        if (response.success) {
          this.sourceAccountBalance = response.data;
          console.log('Source balance loaded:', this.sourceAccountBalance);
          console.log('Source debug info:', this.sourceAccountBalance.debug_info);
        } else {
          console.error('Failed to load source balance:', response.message);
          this.sourceAccountBalance = null;
        }
      },
      (error) => {
        this.loadingSourceBalance = false;
        console.error('Error loading source balance:', error);
        this.sourceAccountBalance = null;
      }
    );
  }

  // Format balance for display
  formatBalance(balance: any): string {
    if (!balance) return '0.00';
    const amount = parseFloat(balance.current_balance || 0).toFixed(2);
    const type = balance.status === 'debit' ? 'مدين' : 'دائن';
    return `${amount} ${type}`;
  }

  // Get balance color for styling
  getBalanceColor(balance: any): string {
    if (!balance) return 'medium';
    return balance.status === 'debit' ? 'success' : 'danger';
  }

  // Format account balance from account object (when account has balance embedded)
  formatAccountBalance(account: any): string {
    if (!account || !account.current_balance) return '0.00';
    const amount = parseFloat(account.current_balance || 0).toFixed(2);
    const type = account.balance_status === 'debit' ? 'مدين' : 'دائن';
    return `${amount} ${type}`;
  }

  // Get account balance color from account object
  getAccountBalanceColor(account: any): string {
    if (!account || !account.balance_status) return 'medium';
    return account.balance_status === 'debit' ? 'success' : 'danger';
  }


}



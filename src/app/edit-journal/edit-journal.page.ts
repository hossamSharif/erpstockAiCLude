import { Component, OnInit, ViewChild, ElementRef ,Renderer2,Input} from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { from, Observable } from 'rxjs';
import { AlertController, IonInput, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { AuthServiceService } from '../auth/auth-service.service';
import { StockServiceService } from '../syncService/stock-service.service';
import * as momentObj from 'moment';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-journal',
  templateUrl: './edit-journal.page.html',
  styleUrls: ['./edit-journal.page.scss'],
})
export class EditJournalPage implements OnInit { 
  @ViewChild('popoverNotif22') popoverNotif22;
  notifArr:Array<any> =[]
  showNotif = false
  LogHistoryLocalArr:Array<any> =[]
  logHistoryArr:Array<any>=[];
  isOpenNotif = false ;
  subiscribtionNotif:Subscription;
  newNotif = false ; 
  device:any =''
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
  coloredMsgFrom:boolean = false
  coloredMsgFrom3:boolean = false
  coloredMsgTo:boolean = false
  coloredMsgTo3:boolean = false
  year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
  
  // For editing
  journalId: any;
  originalJournal: any;
  originalJdetailFrom: any;
  originalJdetailTo: any;

  // Balance display properties (from cash2)
  isAccountPopoverOpen = false;
  searchTerm = '';
  searchedAccounts: any[] = [];
  selectedAccountBalance: any = null;
  sourceAccountBalance: any = null;
  loadingAccountBalance = false;
  loadingSourceBalance = false;

  constructor(
    private platform :Platform,
    private behavApi:StockServiceService,
    private modalController: ModalController,
    private alertController: AlertController, 
    private authenticationService: AuthServiceService,
    private storage: Storage,
    private loadingController:LoadingController, 
    private datePipe:DatePipe,
    private api:ServicesService,
    private toast :ToastController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.selectedBankAccount = {id:null,ac_id:null,sub_name:null,sub_type:null,sub_code:null,sub_balance:null,store_id:null,debit:null ,credit:null, currentType:null} 
    this.checkPlatform()
    this.getAppInfo() 
   }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   if (params['journalId']) {
    //     console.log('params', params);
    //     this.journalId = params['journalId'];
    //     this.loadJournalData();
    //   }
    // });
  }

  // Account popover methods (from cash2)
  presentAccountPopover(event) {
    this.searchedAccounts = this.sub_accountFrom;
    this.isAccountPopoverOpen = true;
  }

  searchAccount(event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.trim() !== '') {
      this.searchedAccounts = this.sub_accountFrom.filter((acc) => {
        return acc.sub_name.toLowerCase().indexOf(searchTerm) > -1;
      });
    } else {
      this.searchedAccounts = this.sub_accountFrom;
    }
  }

  selectAccount(account) {
    this.pickAccount({ target: { value: account.sub_name } }, 1);
    this.isAccountPopoverOpen = false;
    this.loadAccountBalance(account.id);
  }

  checkPlatform(){
    if (this.platform.is('desktop')) { 
      this.device = 'desktop'
     }else if(this.platform.is('mobile')){
      this.device = 'mobile'
     }
  }
  
  

  ionViewDidEnter(){
    // Notification logic can be added here if needed
  } 

  getAppInfo(){ 
    this.storage.get('USER_INFO').then((response) => {
     if (response) {
       this.user_info = response
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
        this.getAllAccounts()
        this.getJournalType()     
     }
   });
  }

  loadJournalData() {
    console.log('data', this.journalId);
    // Load journal header
    this.api.getJournalById(this.journalId).subscribe(data => {
      console.log('data', data);
      if (data['message'] != 'No record Found') {
        this.originalJournal = data['data'][0];
        this.journal = { ...this.originalJournal };
        console.log('journal', this.journal);
        this.pay = this.journal.j_pay
        // Set transaction type
        if (this.journal.j_type === 'سند دفع') {
          this.jType = "1";
        } else if (this.journal.j_type === 'سند قبض') {
          this.jType = "2";
        } 
        // Load journal details
        this.loadJournalDetails();
      }
    }, (err) => {
      this.presentToast('خطأ في تحميل البيانات', 'danger');
      this.loadingController.dismiss();
    });
  }

  loadJournalDetails() {
    // Load jdetails_from
    console.log('loadJournalDetails');
    this.api.getJFromByJournalId(this.journalId).subscribe(data => {
      console.log('data', data);
      if (data['message'] != 'No record Found') {
        this.originalJdetailFrom = data['data'][0];
        this.jdetail_from = { ...this.originalJdetailFrom };
        console.log('jdetail_from', this.jdetail_from);
       
        // Set account and amount
      
        // Load jdetails_to
        this.loadJDetailsTo();
      }
    }, (err) => {
      this.presentToast('خطأ في تحميل تفاصيل القيد', 'danger');
      this.loadingController.dismiss();
    });
  }

  loadJDetailsTo() {
    this.api.getJToByJournalId(this.journalId).subscribe(data => { 
      if (data['data'][0] != null) {
        this.originalJdetailTo = data['data'][0];
        this.jdetail_to = { ...this.originalJdetailTo };
        console.log('jdetail_to', this.jdetail_to);
        // Set bank account   
        this.loadingController.dismiss(); 
        if (this.jType == "1") {
          console.log('case jdetail_to' ,this.jType )
          this.setBankAccountToDetails(); 
         this.setAccountFromDetails(); 
        } else if(this.jType == "2") {
          console.log('case jdetail from' ,this.jType ) 
          this.setBankAccountFromDetails(); 
          this.setAccountToDetails(); 
        } 
      }else{
        this.presentToast('لم يتم تحميل تفاصيل القيد', 'danger');
        this.loadingController.dismiss();
      }
    }, (err) => {
      this.presentToast('خطأ في تحميل تفاصيل القيد', 'danger');
      this.loadingController.dismiss();
    });
  }

  setAccountFromDetails() {
    // Find account by ac_id
    let account = this.sub_accountFrom.find(acc => acc.id == this.jdetail_from.ac_id);
    console.log('sub_accountFrom', this.sub_accountFrom , account);
    if (account) {
      this.selectedFromAccount = {
        id: account.id,
        ac_id: account.ac_id,
        sub_name: account.sub_name,
        sub_type: account.sub_type,
        sub_code: account.sub_code,
        sub_balance: account.sub_balance,
        store_id: account.store_id,
        debit: account.debit,
        credit: account.credit,
        currentType: account.currentType
      }; 
      // Load account balance
      this.loadAccountBalance(account.id);
      console.log('jType' , this.jType );
     
    }
  }
  setAccountToDetails() {
    // Find account by ac_id
    let account = this.sub_accountFrom.find(acc => acc.id == this.jdetail_to.ac_id);
    console.log('sub_accountFrom', this.sub_accountFrom , account);
    if (account) {
      this.selectedFromAccount = {
        id: account.id,
        ac_id: account.ac_id,
        sub_name: account.sub_name,
        sub_type: account.sub_type,
        sub_code: account.sub_code,
        sub_balance: account.sub_balance,
        store_id: account.store_id,
        debit: account.debit,
        credit: account.credit,
        currentType: account.currentType
      }; 
      // Load account balance
      this.loadAccountBalance(account.id);
      console.log('jType' , this.jType );
    
    }
  }

  setBankAccountFromDetails() {
    console.log('setBankAccountFromDetails' , this.jdetail_from.ac_id);
    if (this.jdetail_from.ac_id == 46) {
      // Cash account
      this.radioVal = "1";
      this.selectedBankAccount = {
        id: 46,
        ac_id: 7,
        sub_name: "الخزينة",
        sub_type: "",
        sub_code: "",
        store_id: this.store_info.id,
        sub_balance: "",
        currentType: "",
        debit: "",
        credit: ""
      };
      this.loadSourceBalance(46);
    } else {
      // Bank account
      let bankAccount = this.banksAccountArray.find(bank => bank.id == this.jdetail_from.ac_id);
      if (bankAccount) {
        this.radioVal = bankAccount.id.toString();
        this.selectedBankAccount = {
          id: bankAccount.id,
          ac_id: bankAccount.ac_id,
          sub_name: bankAccount.sub_name,
          sub_type: bankAccount.sub_type,
          sub_code: bankAccount.sub_code,
          store_id: bankAccount.store_id,
          sub_balance: bankAccount.sub_balance,
          currentType: "",
          debit: bankAccount.debit,
          credit: bankAccount.credit
        };
        this.loadSourceBalance(bankAccount.id);
      }
    }
  }

  setBankAccountToDetails() {
    console.log('setBankAccountFromDetails' , this.jdetail_to.ac_id);
    if (this.jdetail_to.ac_id == 46) {
      // Cash account
      this.radioVal = "1";
      this.selectedBankAccount = {
        id: 46,
        ac_id: 7,
        sub_name: "الخزينة",
        sub_type: "",
        sub_code: "",
        store_id: this.store_info.id,
        sub_balance: "",
        currentType: "",
        debit: "",
        credit: ""
      };
      this.loadSourceBalance(46);
    } else {
      // Bank account
      let bankAccount = this.banksAccountArray.find(bank => bank.id == this.jdetail_to.ac_id);
      if (bankAccount) {
        this.radioVal = bankAccount.id.toString();
        this.selectedBankAccount = {
          id: bankAccount.id,
          ac_id: bankAccount.ac_id,
          sub_name: bankAccount.sub_name,
          sub_type: bankAccount.sub_type,
          sub_code: bankAccount.sub_code,
          store_id: bankAccount.store_id,
          sub_balance: bankAccount.sub_balance,
          currentType: "",
          debit: bankAccount.debit,
          credit: bankAccount.credit
        };
        this.loadSourceBalance(bankAccount.id);
      }
    }
  }

  radioChange(ev){
    // Handle radio change if needed
  }

  pickAccount(ev , index ,sub_name?){
    let s :string
    if (sub_name) {
      s=sub_name
    } else {
      s= ev.target.value
    }
    let fl= this.sub_accountTo.filter(x=>x.sub_name ==  s)
    let bl :any 
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
  console.log(this.selectedFromAccount)
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

  validate():boolean{
    if ( +this.radioVal == 0 || +this.jType == 0 ) {
      this.presentToast('الرجاء اختيار  نوع السند ','danger')
      return false
   }else if ( +this.pay == 0  ) {
    this.presentToast('الرجاء ادخال المبلغ ','danger')
      return false
    }else if(this.selectedFromAccount.id == null){
      this.presentToast('الرجاء إختيار الحساب ','danger')
      return false
    }
     else {
      return true
    }
   }

  update() { 
    if (this.validate() == true) {
       this.presentLoadingWithOptions('جاري تحديث البيانات ...') 
       this.updateJournal()   
    }  
  }

  updateJournal() {
    // Prepare updated journal data
    //this.prepareUpdatedJournal();
    this.prepare4save()
    // Update journal header
    this.api.updateJournal(this.journal).subscribe(data => {
      if (data['message'] != 'Post Not Updated') {
        this.updateJournalDetails();
      } else {
        this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
        this.loadingController.dismiss();
      }
    }, (err) => {
      this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
      this.loadingController.dismiss();
    });
  }


  prepare4save(){ 
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
    "id": this.jdetail_to.id ,
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
        id :  this.originalJdetailTo.id  ,
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
        id : this.originalJdetailTo.id  ,
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
        id :  this.originalJdetailFrom.id  ,
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
        id :  this.originalJdetailFrom.id  ,
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


  prepareUpdatedJournal() {
    // Update journal type
    if (+this.jType == 1) {
      this.journal.j_type = "سند دفع";
    } else if (+this.jType == 2) {
      this.journal.j_type = "سند قبض";
    }
    // Update amount
    this.journal.j_pay = +this.pay;
    // Update standard details
    let from = this.selectedFromAccount.sub_name;
    let to = this.selectedBankAccount.sub_name;
    this.journal.standard_details = 'من حساب ' + from + ' الي حساب ' + to;
  }

  updateJournalDetails() {
    // Update jdetails_from
    // this.jdetail_from.ac_id = this.selectedFromAccount.id;
    // this.jdetail_from.j_desc = this.selectedFromAccount.sub_type;
    // if (+this.jType == 1) {
    //   this.jdetail_from.debit = +this.pay;
    //   this.jdetail_from.credit = 0;
    // } else {
    //   this.jdetail_from.credit = +this.pay;
    //   this.jdetail_from.debit = 0;
    // }
    
    this.api.updateJFrom(this.jdetail_fromArr[0]).subscribe(data => {
      if (data['message'] != 'Post Not Updated') {
        this.updateJDetailsTo();
      } else {
        this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
        this.loadingController.dismiss();
      }
    }, (err) => {
      this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
      this.loadingController.dismiss();
    });
  }

  updateJDetailsTo() {
    // Update jdetails_to
    // this.jdetail_to.ac_id = this.selectedBankAccount.id;
    
    // if (+this.jType == 1) {
    //   this.jdetail_to.credit = +this.pay;
    //   this.jdetail_to.debit = 0;
    // } else {
    //   this.jdetail_to.debit = +this.pay;
    //   this.jdetail_to.credit = 0;
    // }
    
    this.api.updateJTo(this.jdetail_toArr[0]).subscribe(data => {
      if (data['message'] != 'Post Not Updated') {
        this.presentToast('تم التحديث بنجاح', 'success');
       
        this.router.navigate(['/folder/spend-record2']);
        this.loadingController.dismiss();
      } else {
        this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
        this.loadingController.dismiss();
      }
    }, (err) => {
      this.presentToast('لم يتم تحديث البيانات , خطا في الإتصال حاول مرة اخري', 'danger')
      this.loadingController.dismiss();
    });
  }

  getAllAccounts(){
    this.api.getAllAccounts(this.store_info.id,this.year.id).subscribe(data =>{
       let res = data
       this.sub_accountFrom = res ['data']
       this.sub_accountTo = res ['data']
       this.sub_accountFrom = this.sub_accountFrom.filter(x=> x.ac_id != 8 && x.ac_id !=9 && x.ac_id !=5)
      console.log('sub_accountFrom', this.sub_accountFrom);
       this.getBanksAccount()
      this.route.queryParams.subscribe(params => {
        if (params['journalId']) {
          console.log('params', params);
          this.journalId = params['journalId'];
          this.loadJournalData();
        }
      });
      this.prepareCurrentBalnces()
     }, (err) => {
   })  
   } 

  getBanksAccount(){
    this.banksAccountArray = this.sub_accountFrom.filter(x=> x.ac_id == 7)
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
       this.getJournalTypeDetails()
     }, (err) => {
   })  
   }

  getJournalTypeDetails(){
    this.api.getJournalTypeDetails(this.store_info.id).subscribe(data =>{
       let res = data
       this.journalTypeDetails = res ['data'] 
     }, (err) => {
   })  
   }

  async presentLoadingWithOptions(msg?) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode:'ios', 
      message: msg,
      translucent: true,
      backdropDismiss: false
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
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

  // Form validation method (from cash2)
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
  
  // Delete functionality (from spend-record2)
  delete(j_ref) {
    this.presentAlertConfirm(j_ref);
  }

  async presentAlertConfirm(j_ref?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'تأكيد الحذف',
      message: 'هل أنت متأكد من حذف هذا القيد المحاسبي؟',
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'حذف',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteSalesInvo(j_ref);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteSalesInvo(j_ref) {
    this.presentLoadingWithOptions('جاري حذف البيانات ...');
    this.api.deleteJournal(j_ref).subscribe(data => {
      console.log('delete Journal response', data);
      if (data['message'] != 'Post Not Deleted') {
        this.deleteJfrom(j_ref);
      } else {
        this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        this.loadingController.dismiss();
      }
    }, (err) => {
      console.log(err);
      this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
      this.loadingController.dismiss();
    });
  }

  deleteJfrom(j_ref) {
    this.api.deleteJFrom(j_ref).subscribe(data => {
      console.log('delete Jfrom response', data);
      if (data['message'] != 'Post Not Deleted') {
        this.deleteJto(j_ref);
      } else {
        this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        this.loadingController.dismiss();
      }
    }, (err) => {
      console.log(err);
      this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
      this.loadingController.dismiss();
    });
  }

  deleteJto(j_ref) {
    this.api.deleteJto(j_ref).subscribe(data => {
      console.log('delete Jto response', data);
      if (data['message'] != 'Post Not Deleted') {
        this.presentToast('تم الحذف بنجاح', 'success');
        this.loadingController.dismiss();
        // Navigate back to spend-record2 page
        this.router.navigate(['/spend-record2']);
      } else {
        this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
        this.loadingController.dismiss();
      }
    }, (err) => {
      console.log(err);
      this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري', 'danger');
      this.loadingController.dismiss();
    });
  }

  // Load balance for selected account (الحساب) - from cash2
  loadAccountBalance(accountId: any) {
    if (!accountId || !this.store_info || !this.year) {
      return;
    }

    this.loadingAccountBalance = true;
    this.selectedAccountBalance = null;

    this.api.getAccountBalance(accountId, this.store_info.id, this.year.id).subscribe(
      (response) => {
        this.loadingAccountBalance = false;
        if (response.success) {
          this.selectedAccountBalance = response.data;
          console.log('Account balance loaded:', this.selectedAccountBalance);
        } else {
          console.error('Failed to load account balance:', response.message);
          this.selectedAccountBalance = null;
        }
      },
      (error) => {
        this.loadingAccountBalance = false;
        console.error('Error loading account balance:', error);
        this.selectedAccountBalance = null;
      }
    );
  }

  // Load balance for source account (المصدر) - from cash2
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

  // Format balance for display (from cash2)
  formatBalance(balance: any): string {
    if (!balance) return '0.00'; 
    const amount = parseFloat(balance.current_balance || 0).toFixed(2);
    const type = balance.balance_type === 'debit' ? 'مدين' : 'دائن'; 
    return `${amount} ${type}`;
  }

  // Get balance color for styling (from cash2)
  getBalanceColor(balance: any): string {
    if (!balance) return 'medium'; 
    return balance.balance_type === 'debit' ? 'success' : 'danger';
  }
}

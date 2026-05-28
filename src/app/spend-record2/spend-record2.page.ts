import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from "../stockService/services.service";
import { Observable } from 'rxjs';
import {  AlertController, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router'
import { PrintModalPage } from '../print-modal/print-modal.page';
import { FilterPipe } from './pipe';
import { SortingService, SortConfig } from '../services/sorting.service';
import { ExportService, ExportConfig, ExportColumn } from '../services/export.service';
import { CurrencyService } from '../services/currency.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TransactionModalComponent } from '../components/transaction-modal/transaction-modal.component';

@Component({
  selector: 'app-spend-record2',
  templateUrl: './spend-record2.page.html',
  styleUrls: ['./spend-record2.page.scss'],
})

export class SpendRecord2Page implements OnInit, OnDestroy {
    jdetailsFrom:Array<any> =[]
    jdetailsTo:Array<any> =[]
    payArray:Array<any> =[]
    sortedPayArray:Array<any> =[]
    currentSort: SortConfig | null = null
    purchase:Array<any> =[]
    sales:Array<any> =[]
    printArr:Array<any> =[]
    searchTerm :any
    showEmpty :boolean = false
    searchResult :Array<any> =[]
    searchMode : boolean =     false
    store_info : {id:any , location :any ,store_name:any , store_ref:any }
    user_info : {id:any ,user_name:any ,store_id :any,full_name:any,password:any}
    printMode :boolean =false
    itemList :Array<any> =[]
    paInvo :any
    dateFrom :any;
    dateTo :any;
    radioVal : any = 0
    startingDate :any
    device:any =''
    endDate :any
    loading:boolean = false
    year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
    private currencySubscription: Subscription;

    // Multi-select properties
    selectedRecords: Set<string> = new Set();
    selectAll: boolean = false;

    // Entry type filter
    entryTypeFilter: string = 'all'; // 'all', 'سند قبض', 'سند دفع'
    constructor(private platform :Platform  ,private alertController: AlertController,private rout : Router,private storage: Storage,private modalController: ModalController,private loadingController:LoadingController, private datePipe:DatePipe,private api:ServicesService,private toast :ToastController, private sortingService: SortingService, private exportService: ExportService, private currencyService: CurrencyService, private cdr: ChangeDetectorRef, private translate: TranslateService) { 
     this.searchTerm =""
     this.checkPlatform()
     this.getAppInfo()
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
          this.getTopSales()
       }
     });
   }
  
   ionViewDidEnter(){
     //console.log('ionViewDidEnter')
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
   
    // filterItems(searchTerm) {
    //   //console.log(searchTerm)  
    //   this.searcResult = this.items.filter(item => item.item_name.toLowerCase().includes(searchTerm.toLowerCase())) 
    //   //console.log(this.searcResult) 
    // }
  
     printInvo(printarea , data){ 
      this.paInvo = data 
       //console.log( this.paInvo) 
       this.api.getPayInvoDetail(this.store_info.id , data.pay_ref ,this.year.id).subscribe(data =>{
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
       this.presentModal(this.printArr , 'sales_record')
        }, (err) => {
         //console.log(err);
         this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR' , 'danger')
        },()=>{ 
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
   

    searchItem(ev){ 
      this.searchMode = true
      const filterPipe = new FilterPipe;  
      let  fiteredArr :any
      fiteredArr = filterPipe.transform(this.payArray,ev.target.value); 
      this.searchResult = fiteredArr  
    }


    getTopSales(){
      this.payArray=[]
      this.loading = true
      this.api.getTopJournale(this.store_info.id , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data
         if(res['message'] != 'No record Found'){
          this.payArray = res['data'] 
          this.getTopJto()
        }
         this.loading =false
         //this.getTopPurchase()
         if(this.payArray.length==0){
          this.showEmpty = true
        }else{
          this.showEmpty = false
        }
        this.loading=false
        //console.log(this.payArray)
       }, (err) => {
       //console.log(err);
       this.loading =false
     })  
     }
  
     getTopPurchase(){
      this.purchase = []
      this.api.getTopPerch(this.store_info.id , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data
         this.purchase = res['data']
         this.getTopSales() 
       }, (err) => {
       //console.log(err);
       this.loading =false
     })  
     }
  
     getTopSalesRec(){
      this.sales = []
      this.api.getTopSales(this.store_info.id , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data
         this.sales = res['data'] 
         this.prepareArray()
       }, (err) => {
       //console.log(err);
       this.loading = false
     })  
     }
  
     prepareArray(){
      // Get account names from jdetailsFrom and jdetailsTo arrays (not from string parsing)
      console.log('=== prepareArray DEBUG START ===');
      console.log('jdetailsFrom length:', this.jdetailsFrom.length);
      console.log('jdetailsTo length:', this.jdetailsTo.length);
      if(this.jdetailsFrom.length > 0) {
        console.log('Sample jdetailsFrom[0]:', this.jdetailsFrom[0]);
      }
      if(this.jdetailsTo.length > 0) {
        console.log('Sample jdetailsTo[0]:', this.jdetailsTo[0]);
      }

      this.payArray.forEach((element)=>{
        let fltFrom :Array<any> = []
        fltFrom =  this.jdetailsFrom.filter(x=>x.j_ref == element.j_ref)
        //console.log('fltFrom' ,fltFrom)
        fltFrom = fltFrom.sort((a, b) => (a.id < b.id ? -1 : 1));
        //console.log('sorted fltFrom' ,fltFrom)
        if(fltFrom.length > 0){
          for (let i = 0; i < fltFrom.length; i++) {
            const element2 = fltFrom[i];
            if(i==0){
              element.debit= element2.debit
              element.from1 = element2.sub_name || ''
              console.log('  j_ref:', element.j_ref, 'from1 set to:', element.from1, 'element2.sub_name:', element2.sub_name);

            }else if(i==1){
              element.debit2= element2.debit
              element.from2 = element2.sub_name || ''

            }else if(i == 2){
              element.debit3= element2.debit
              element.from3 = element2.sub_name || ''

            }
            
          }
        }  
        let fltTo :Array<any> = []
        fltTo =  this.jdetailsTo.filter(x=>x.j_ref == element.j_ref)
        //console.log('fltTo' ,fltFrom)
        fltTo = fltTo.sort((a, b) => (a.id < b.id ? -1 : 1));
        //console.log('sortedfltTo' ,fltFrom)
        if(fltTo.length > 0){
          for (let i = 0; i < fltTo.length; i++) {
            const element3 = fltTo[i];
            if(i == 0){
              element.credit= element3.credit
              element.to1 = element3.sub_name || ''
              console.log('  j_ref:', element.j_ref, 'to1 set to:', element.to1, 'element3.sub_name:', element3.sub_name);

            }else if(i ==  1){
              element.credit2= element3.credit
              element.to2 = element3.sub_name || ''

            }else if(i == 2){
              element.credit3= element3.credit
              element.to3 = element3.sub_name || ''
            }
            
          }
        }  
  
      })

      console.log('=== prepareArray DEBUG END ===');
      console.log('Final payArray sample:', this.payArray.length > 0 ? this.payArray[0] : 'empty');

      // Apply sorting and filtering after preparing data
      this.applyFilters();
     }
  
     getSalesByDate(){
      this.payArray=[]
      //console.log(this.store_info.id,this.startingDate) 
      this.api.getJournaleByDate(this.store_info.id , this.startingDate , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data
         if(res['message'] != 'No record Found'){
          this.payArray = res['data'] 
        }
        this.getJFromByDate()
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
     })  
     }
  
  
     getPurchByDate(){  
      this.purchase =[] 
      this.api.getPerchByDate(this.store_info.id , this.startingDate , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data
         if(res['message'] != 'No record Found'){ 
         this.purchase = res['data'] 
       } 
       }, (err) => {
       //console.log(err);
      
     },()=>{
      
     }
     )  
     }
  
     getSalesrecByDate(){  
      this.sales =[] 
      this.api.getSalesByDate(this.store_info.id , this.startingDate , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data
         if(res['message'] != 'No record Found'){ 
         this.sales = res['data'] 
       } 
       }, (err) => {
       //console.log(err);
      
     },()=>{
      
     }
     )  
     }
  
     getSales2Date(){ 
      this.payArray=[]
      this.loading=true
      //console.log(this.store_info.id,this.startingDate,this.endDate)
      this.api.getJournale2Date(this.store_info.id,this.startingDate,this.endDate , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data
         if(res['message'] != 'No record Found'){
          this.payArray = res['data'] 
        }
        this.getJTo2Date()
         if(this.payArray.length==0){
          this.showEmpty = true
        }else{
          this.showEmpty = false
        }
        this.loading=false
        //console.log(this.payArray)
         // this.store_tot = this.items.reduce( (acc, obj)=> { return acc + +(obj.perch_price * obj.quantity ); }, 0);
       }, (err) => {
        this.loading=false
       //console.log(err);
     })  
     }
  
     getTopJto(){
      this.jdetailsTo=[]
      this.loading = true
      this.api.getTopJTo(this.store_info.id , this.year.id).subscribe(data =>{
         console.log('=== getTopJTo API Response ===', data);
         let res = data
         if(res['message'] != 'No record Found'){
          this.jdetailsTo = res['data']
          console.log('jdetailsTo first item:', this.jdetailsTo.length > 0 ? this.jdetailsTo[0] : 'empty');
       //   this.jdetailsTo = this.jdetailsTo.filter(x=>x.ac_id == this.selectedAccount.id)
        }
        this.getTopJfrom() 
        //console.log(this.jdetailsTo)
       }, (err) => {
       //console.log(err);
       this.loading =false
     })  
     }
  
     getTopJfrom(){
      this.jdetailsFrom=[]
      this.api.getTopJfrom(this.store_info.id , this.year.id).subscribe(data =>{
         console.log('=== getTopJfrom API Response ===', data);
         let res = data
         if(res['message'] != 'No record Found'){
          this.jdetailsFrom = res['data']
          console.log('jdetailsFrom first item:', this.jdetailsFrom.length > 0 ? this.jdetailsFrom[0] : 'empty');
        //  this.jdetailsFrom = this.jdetailsFrom.filter(x=>x.ac_id == this.selectedAccount.id)
          //console.log('flt' ,this.jdetailsFrom)
        }
         this.prepareArray() 
       }, (err) => {
       //console.log(err);
       this.loading =false
     })  
     }
   
     getJFromByDate(){
      this.jdetailsFrom=[]
      this.loading = true
      //console.log(this.store_info.id,this.startingDate) 
      this.api.getJFromByDate(this.store_info.id , this.startingDate , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data
         if(res['message'] != 'No record Found'){
          this.jdetailsFrom = res['data']
         // this.jdetailsFrom = this.jdetailsFrom.filter(x=>x.ac_id == this.selectedAccount.id)
         }
            this.getJToByDate()
       }, (err) => {
       //console.log(err);
       this.loading = false
     })  
     }
  
  
     getJToByDate(){  
      this.jdetailsTo =[] 
      this.api.getJToByDate(this.store_info.id , this.startingDate , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data
         if(res['message'] != 'No record Found'){
          this.jdetailsTo = res['data'] 
         // this.jdetailsTo = this.jdetailsTo.filter(x=>x.ac_id == this.selectedAccount.id)
        } 
        this.prepareArray()
       }, (err) => {
       //console.log(err);
       this.loading = false
      
     },()=>{
      
     }
     )  
     }
   
  
     getJTo2Date(){ 
      this.jdetailsTo=[]  
      //console.log(this.store_info.id,this.startingDate,this.endDate)
      this.api.getJTo2Date(this.store_info.id,this.startingDate,this.endDate , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data 
        if(res['message'] != 'No record Found'){
          this.jdetailsTo = res['data'] 
         // this.jdetailsTo = this.jdetailsTo.filter(x=>x.ac_id == this.selectedAccount.id)
        } 
         this.getJFrom2Date()
         this.loading = false
       }, (err) => {
        this.loading=false
        //console.log(err);
     })  
     }
  
     getJFrom2Date(){ 
      this.jdetailsFrom =[] 
      this.loading = true
      //console.log(this.store_info.id,this.startingDate,this.endDate)
      this.api.getJFrom2Date(this.store_info.id,this.startingDate,this.endDate , this.year.id).subscribe(data =>{
        //console.log('getJFrom2Date',data)
        let res = data
        if(res['message'] != 'No record Found'){
          this.jdetailsFrom = res['data']
        //  this.jdetailsFrom = this.jdetailsFrom.filter(x=>x.ac_id == this.selectedAccount.id)
         }  
        this.prepareArray()
      }, (err) => {
      //console.log(err);
      this.loading=false
    },()=>{
      this.loading = false
    }
    )  
    }
  
  
  //purchases
   getPurchase2Date(){ 
    this.purchase =[] 
    //console.log(this.store_info.id,this.startingDate,this.endDate)
    this.api.getPerch2Date(this.store_info.id,this.startingDate,this.endDate , this.year.id).subscribe(data =>{
       //console.log(data)
       let res = data
       if(res['message'] != 'No record Found'){
        this.purchase = res['data'] 
      }  
     }, (err) => {
     //console.log(err);
   },()=>{
   
   }
   )  
   }
  
   getSalesrec2Date(){ 
    this.sales =[] 
    //console.log(this.store_info.id,this.startingDate,this.endDate)
    this.api.getSales2Date(this.store_info.id,this.startingDate,this.endDate , this.year.id).subscribe(data =>{
       //console.log(data)
       let res = data
       if(res['message'] != 'No record Found'){
        this.sales = res['data'] 
      }  
     }, (err) => {
     //console.log(err);
   },()=>{
   
   }
   )  
   }
  
  
   radioChange(ev){
    //console.log(ev.target.value) 
    this.payArray = [] 
    this.showEmpty = false
    this.loading = false
   }
  
  
     search(){
      if (this.radioVal == 0) {
       this.getTopSales()
      } else if (this.radioVal == 1) {
         this.getSalesByDate()
      }else if (this.radioVal == 2) {
        this.getSales2Date()
  
      }
     }
  
     getPayInvoDetail(ref){
   //   this.presentLoadingWithOptions('جاري جلب التفاصيل ...')
      this.api.getPayInvoDetail(this.store_info.id , ref , this.year.id).subscribe(data =>{
         //console.log(data)
         let res = data 
         //console.log(this.payArray) 
         
         let navigationExtras: NavigationExtras = {
          queryParams: {
            payArray: JSON.stringify(this.payArray),
            user_info:JSON.stringify(this.user_info),
            store_info:JSON.stringify(this.store_info),
            itemList:JSON.stringify( res['data'])
          }
        };
       
        this.rout.navigate(['folder/edit-sales'], navigationExtras); 
       }, (err) => {
       //console.log(err);
       this.presentToast('خطا في الإتصال حاول مرة اخري' , 'danger')
     })  
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
  
    async presentAlertConfirm(j_ref?) {
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
              this.deleteSalesInvo(j_ref)
            }
          }
        ]
      });
    
      await alert.present();
    }
  
      delete(j_ref){
    this.presentAlertConfirm(j_ref)
  }

  async editTransaction(record: any) {
    // Guard check - ensure required data is available
    if (!this.store_info || !this.year || !this.user_info) {
      await this.presentToast('COMMON.MESSAGE.WAIT_FOR_DATA_LOAD', 'warning');
      return;
    }

    const modal = await this.modalController.create({
      component: TransactionModalComponent,
      cssClass: 'transaction-full-modal',
      componentProps: {
        transaction: record,
        store_id: this.store_info.id,
        year_id: this.year.id,
        user_id: this.user_info.id,
        selectedDate: record.j_date
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data && data.refresh) {
      // Refresh the current view
      this.search();
    }
  }
  
    deleteSalesInvo(j_ref){ 
      this.presentLoadingWithOptions('جاري حذف البيانات ...')
       this.api.deleteJournal(j_ref).subscribe(data => {
       //console.log(data)
       if (data['message'] != 'Post Not Deleted') {
       this.deleteJfrom(j_ref)
       }else{
        this.presentToast('ACCOUNTING.EXPENSE_RECORD.MESSAGE.DELETE_FAILED' , 'danger')
        this.loadingController.dismiss()
       }
     },(err) => {
       //console.log(err);
       this.presentToast('ACCOUNTING.EXPENSE_RECORD.MESSAGE.DELETE_FAILED' , 'danger')
       this.loadingController.dismiss()
      }) 
    }
  
    deleteJfrom(j_ref){  
      this.api.deleteJFrom(j_ref).subscribe(data => {
      //console.log(data)
      if (data['message'] != 'Post Not Deleted') {
      
        this.deleteJto(j_ref) 
  
        
      }else{
       this.presentToast('ACCOUNTING.EXPENSE_RECORD.MESSAGE.DELETE_FAILED' , 'danger')
       this.loadingController.dismiss()
      }
    },(err) => {
      //console.log(err);
      this.presentToast('لم يتم حذف البيانات , خطا في الإتصال حاول مرة اخري' , 'danger')
      this.loadingController.dismiss()
      
     }) 
   }
  
   deleteJto(j_ref){  
    this.api.deleteJto(j_ref).subscribe(data => {
    //console.log(data)
    if (data['message'] != 'Post Not Deleted') { 
        //console.log(' case ffff ' ,this.sales)
        this.presentToast('COMMON.MESSAGE.DELETED_SUCCESSFULLY' , 'success')
        
        // Remove the deleted record from the payArray immediately
        this.payArray = this.payArray.filter(item => item.j_ref !== j_ref);
        
        // Also remove from search results if search mode is active
        if (this.searchMode && this.searchResult.length > 0) {
          this.searchResult = this.searchResult.filter(item => item.j_ref !== j_ref);
          
          // If search results become empty, update search mode
          if (this.searchResult.length === 0 && this.searchTerm) {
            // Refresh search to show updated results
            this.searchItem({ target: { value: this.searchTerm } });
          }
        }
        
        // Update empty state
        if (this.payArray.length === 0) {
          this.showEmpty = true;
        }
        
        // Also refresh data from server to ensure consistency
        this.search()
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

  // Apply sorting to payArray - now calls applyFilters instead
  applySorting() {
    this.applyFilters();
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
    if (!this.payArray || this.payArray.length === 0) {
      await this.presentToast('ACCOUNTING.EXPENSE_RECORD.MESSAGE.NO_DATA_TO_EXPORT', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: this.exportService.generateDynamicTitle('spend-record2'),
      subtitle: this.generateSubtitle(),
      fileName: `spend-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.payArray,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'spend-record2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToPDF(config);
  }

  async exportToExcel(): Promise<void> {
    if (!this.payArray || this.payArray.length === 0) {
      await this.presentToast('ACCOUNTING.EXPENSE_RECORD.MESSAGE.NO_DATA_TO_EXPORT', 'warning');
      return;
    }

    const config: ExportConfig = {
      title: this.exportService.generateDynamicTitle('spend-record2'),
      subtitle: this.generateSubtitle(),
      fileName: `spend-record-${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}`,
      data: this.payArray,
      columns: this.getExportColumns(),
      userName: this.user_info?.full_name || this.user_info?.user_name || 'مستخدم غير معروف',
      pageType: 'spend-record2',
      currentDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''
    };

    await this.exportService.exportToExcel(config);
  }

  private generateSubtitle(): string {
    const filters: any = {
      selectedAccount: null, // Spend record doesn't have account selection
      dateFilter: this.getDateFilter(),
      searchTerm: this.searchTerm || null
    };

    return this.exportService.generateDynamicSubtitle('spend-record2', filters);
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
      { key: 'j_date', title: 'التاريخ', width: 12, type: 'date' },
      { key: 'j_type', title: 'النوع', width: 12, type: 'text' },
      { key: 'j_description', title: 'البيان', width: 25, type: 'text' },
      { key: 'debit', title: 'مدين', width: 12, type: 'currency' },
      { key: 'credit', title: 'دائن', width: 12, type: 'currency' },
      { key: 'user_name', title: 'المستخدم', width: 15, type: 'text' }
    ];
  }

  
  // Get current currency symbol for table headers
  getCurrencySymbol(): string {
    return this.currencyService.getCurrentCurrencySymbol();
  }

  // Multi-select methods

  toggleSelectAll(event: any) {
    const isChecked = event.detail.checked;
    // If event value matches model, this is a programmatic echo — ignore
    if (isChecked === this.selectAll) return;
    this.selectAll = isChecked;
    if (isChecked) {
      // Select all visible records
      const visibleRecords = this.searchMode ? this.searchResult : this.sortedPayArray;
      visibleRecords.forEach(record => {
        this.selectedRecords.add(record.j_ref);
      });
    } else {
      // Deselect all
      this.selectedRecords.clear();
    }
  }

  toggleRecordSelection(j_ref: string, event: any) {
    const isChecked = event.detail.checked;
    // If event value matches current state, this is a programmatic echo — ignore
    if (isChecked === this.selectedRecords.has(j_ref)) return;
    if (isChecked) {
      this.selectedRecords.add(j_ref);
    } else {
      this.selectedRecords.delete(j_ref);
    }
    const visibleRecords = this.searchMode ? this.searchResult : this.sortedPayArray;
    this.selectAll = visibleRecords.length > 0 &&
      visibleRecords.every(record => this.selectedRecords.has(record.j_ref));
  }

  isRecordSelected(j_ref: string): boolean {
    return this.selectedRecords.has(j_ref);
  }

  getSelectedCount(): number {
    return this.selectedRecords.size;
  }

  clearSelection() {
    this.selectedRecords.clear();
    this.selectAll = false;
  }

  // Bulk delete confirmation and execution
  async bulkDelete() {
    if (this.selectedRecords.size === 0) {
      this.presentToast('ACCOUNTING.EXPENSE_RECORD.MESSAGE.SELECT_AT_LEAST_ONE', 'warning');
      return;
    }

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'تأكيد الحذف!',
      mode: 'ios',
      message: `هل تريد حذف ${this.selectedRecords.size} سجل؟`,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Do nothing
          }
        },
        {
          text: 'موافق',
          handler: () => {
            this.executeBulkDelete();
          }
        }
      ]
    });

    await alert.present();
  }

  async executeBulkDelete() {
    this.presentLoadingWithOptions('جاري حذف البيانات...');
    const selectedRefs = Array.from(this.selectedRecords);

    // Clear selections immediately
    this.clearSelection();

    // Use optimized bulk delete endpoint
    this.api.bulkDeleteJournals(selectedRefs).subscribe(
      (response: any) => {
        this.loadingController.dismiss();

        if (response.success) {
          // Remove deleted records from payArray
          this.payArray = this.payArray.filter(item => !selectedRefs.includes(item.j_ref));

          // Remove from search results if in search mode
          if (this.searchMode) {
            this.searchResult = this.searchResult.filter(item => !selectedRefs.includes(item.j_ref));
          }

          // Update sorted array by applying filters
          this.applyFilters();

          // Update empty state
          if (this.payArray.length === 0) {
            this.showEmpty = true;
          } else {
            this.showEmpty = false;
          }

          // Force change detection
          this.cdr.detectChanges();

          this.presentToast('ACCOUNTING.EXPENSE_RECORD.MESSAGE.BULK_DELETE_SUCCESS', 'success');
        } else {
          this.presentToast('ACCOUNTING.EXPENSE_RECORD.MESSAGE.BULK_DELETE_FAILED', 'danger');
        }
      },
      (error) => {
        this.loadingController.dismiss();
        console.error('Bulk delete error:', error);
        this.presentToast('ACCOUNTING.EXPENSE_RECORD.MESSAGE.BULK_DELETE_ERROR', 'danger');
      }
    );
  }

  // Promise-based delete for bulk operations
  deleteRecordComplete(j_ref: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.api.deleteJournal(j_ref).subscribe(
        (data) => {
          if (data['message'] !== 'Post Not Deleted') {
            this.api.deleteJFrom(j_ref).subscribe(
              (data2) => {
                if (data2['message'] !== 'Post Not Deleted') {
                  this.api.deleteJto(j_ref).subscribe(
                    (data3) => {
                      if (data3['message'] !== 'Post Not Deleted') {
                        // Remove from local arrays
                        this.payArray = this.payArray.filter(item => item.j_ref !== j_ref);
                        if (this.searchMode) {
                          this.searchResult = this.searchResult.filter(item => item.j_ref !== j_ref);
                        }
                        resolve();
                      } else {
                        reject(new Error('Failed to delete jdetails_to'));
                      }
                    },
                    (err) => reject(err)
                  );
                } else {
                  reject(new Error('Failed to delete jdetails_from'));
                }
              },
              (err) => reject(err)
            );
          } else {
            reject(new Error('Failed to delete journal'));
          }
        },
        (err) => reject(err)
      );
    });
  }

  // Entry type filter methods
  filterByEntryType(type: string) {
    this.entryTypeFilter = type;
    this.applyFilters();
  }

  applyFilters() {
    let filteredArray = [...this.payArray];

    // Apply entry type filter
    if (this.entryTypeFilter !== 'all') {
      filteredArray = filteredArray.filter(record => record.j_type === this.entryTypeFilter);
    }

    // Apply sorting
    if (this.currentSort) {
      this.sortedPayArray = this.sortingService.sortData(
        filteredArray,
        this.currentSort.column,
        this.currentSort.direction
      );
    } else {
      this.sortedPayArray = filteredArray;
    }

    // Update empty state
    this.showEmpty = this.sortedPayArray.length === 0;
  }

  // Override applySorting to work with filters
  applySortingOverride() {
    this.applyFilters();
  }

  }
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthServiceService } from "../app/auth/auth-service.service";
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { ServicesService } from './stockService/services.service';
import { Observable, Observer, timer } from 'rxjs'; 
import { Platform, PopoverController, MenuController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { ActionPopoverComponent } from './component/action-popover/action-popover.component';
import { UserActionsPopoverComponent } from './component/user-actions-popover/user-actions-popover.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  // Navigation structure is now defined in the template for better control
  public appPages = [];

   store_info : {id:any ,store_ref:any , store_name:any , location :any } 
   USER_INFO : { id: any , user_name: any, store_id :any, full_name:any, password:any}
  company : { id: any , phone: any, phone2  :any, address :any, logoUrl:any,engName:any,arName:any ,tradNo:any , vatNo:any};
  sub_accountSalse:Array<any> =[]
  sub_accountPurch:Array<any> =[]
  payNotifArr:Array<any> =[]
  payArr:Array<any> =[]
  perchArr:Array<any> =[]
  purchNotifArr:Array<any> =[]
  itemNotifArr:Array<any> =[]
  totalObj : {items:any , pay:any, perch:any} 
  showSpinner :boolean = false 
  isAuth :boolean ;
  device:any =''
  api = 'http://localhost/myaperpi/myapi/api/'
  selectedEndpointName: string = '' // Selected endpoint category name
  currentUrl: string = '';
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  // Collapsible sidebar properties
  isSidebarCollapsed = true;
  isSidebarHovered = false;
  constructor(
    private platform:Platform,
    public http: HttpClient,
    private api2:ServicesService,
    private storage: Storage,
    private authenticationService: AuthServiceService,
    private router: Router,
    private popoverController: PopoverController,
    private menuController: MenuController
  ) {
   
      // Use matchMedia to check the user preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      this.toggleDarkTheme(prefersDark.matches);
  
      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
  
      // Add or remove the "dark" class based on if the media query matches
     


    this.USER_INFO = {
      id: "" ,
      user_name: "",
      store_id :"",
      full_name:"",
      password:"",
  
    };

    this.store_info  = {id:"" ,store_ref:"" , store_name:"" , location :"" } 
    this.company  = {id:"" ,phone: "", phone2  :"", address :"", logoUrl:"",engName:"",arName:"" ,tradNo:"" , vatNo:"" } 

   this.initializeApp();
   this.initializeEndpointInfo();
   this.setupRouterNavigation();
  //  this.getPayNotif(1)
  //  this.getPerchNotif(1)
  //  this.stockItems(1)

  //  setTimeout(() => {
  //   this.subiscribeInterval()
  //  }, 5000);
     
  }

   toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  // Setup router navigation handling
  setupRouterNavigation() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
    });
  }

  // for mobile
  //  initializeApp() {
  //    this.platform.ready().then(() => {
  //      this.statusBar.styleDefault();
  //      this.splashScreen.hide();


  //     this.authenticationService.authState.subscribe(state => {
  //       if (state) {
  //         this.router.navigate(['dashboard']);
  //       } else {
  //         this.router.navigate(['login']);
  //       }
  //     });

  //   });
  // }
  

  stockItems(store_id){ 
    let params = new HttpParams() 
    params=params.append('store_id' , store_id)
   
    this.http.get(this.api+'items/readStock.php',{params: params}).subscribe(data =>{
      let res = data 
      this.itemNotifArr = res['data']  
          this.itemNotifArr.forEach(element => {
            element.quantity =  (+element.perchQuantity + +element.firstQuantity)  - +element.salesQuantity  
          });
          this.itemNotifArr =   this.itemNotifArr.filter(x=>+x.quantity == 0)
         // this.getTot()
      //console.log('interval data from backend',data) 
    }, (err) => {
    //console.log(err);
  }) 
  }

getTot(){
  this.totalObj.items = this.itemNotifArr.length
  this.totalObj.perch = this.purchNotifArr.length
  this.totalObj.pay = this.payNotifArr.length
  let tot = this.totalObj.items +this.totalObj.perch +this.totalObj.pay 
  return tot
}

getPayNotif(store_id){ 
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  this.http.get(this.api+'pay/paynotif.php',{params: params}).subscribe(data =>{
           let res = data 
           this.payArr = res['data']
           this.getAccounts(1 , 1)
           //console.log('interval data from backend',data) 
         }, (err) => {
         //console.log(err);
         
       }) 
}

getPerchNotif(store_id){ 
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  this.http.get(this.api+'perch/paynotif.php',{params: params}).subscribe(data =>{
           let res = data 
           this.perchArr = res['data']
           this.getAccounts(1 , 2)
           //console.log('interval data from backend',data) 
         }, (err) => {
         //console.log(err);
       }) 
}

getAccounts(store_id , ac_id){  
  let params = new HttpParams() 
  params=params.append('store_id' , store_id)
  params= params.append('ac_id' , ac_id) 
   this.http.get(this.api+'sub_accounts/readByStore.php',{params: params}).subscribe(data =>{
    let res = data 
    if(ac_id == 1){
        this.sub_accountSalse = res ['data']
        this.sub_accountSalse = this.sub_accountSalse.filter(x=>x.next_pay != null)
    }else{
      this.sub_accountPurch= res ['data'] 
      this.sub_accountPurch = this.sub_accountPurch.filter(x=>x.next_pay != null)
    } 
    //console.log(' from backend',data)
    this.recalSubBalance(ac_id) 
  }, (err) => {
  //console.log(err);
}) 
}

recalSubBalance(type){
  if (type == 1) {
     // adding new change to subbalances
  this.sub_accountSalse.forEach(element => {
    element.sub_balance = 0 
    let debitTot = +element.changeeTot + +element.fromDebitTot
    let creditTot = +element.purchChangeeTot + +element.toCreditTot
  
    if (debitTot == creditTot) {
      element.sub_balance = 0
      element.currentCustumerStatus = ''
     }else if(debitTot > creditTot ){
       element.sub_balance = (+debitTot - +creditTot).toFixed(2)
       element.currentCustumerStatus = 'debit'
       
     }else if(creditTot > debitTot ){
      element.sub_balance = (+creditTot - +debitTot).toFixed(2)
      element.currentCustumerStatus = 'credit'
       
     }
  });


  //console.log('recalSubBalance sales',this.sub_accountSalse)
  this.preparePayNotifArr(this.payArr)
  } else {
      // adding new change to subbalances
   this.sub_accountPurch.forEach(element => {
    element.sub_balance = 0 
    let debitTot = +element.changeeTot + +element.fromDebitTot
    let creditTot = +element.purchChangeeTot + +element.toCreditTot
  
    if (debitTot == creditTot) {
      element.sub_balance = 0
      element.currentCustumerStatus = ''
     }else if(debitTot > creditTot ){
       element.sub_balance = (+debitTot - +creditTot).toFixed(2)
       element.currentCustumerStatus = 'debit'
      
     }else if(creditTot > debitTot ){
      element.sub_balance = (+creditTot - +debitTot).toFixed(2)
      element.currentCustumerStatus = 'credit'
      
     }
  });
  //console.log('recalSubBalance purchace',this.sub_accountPurch)
  this.preparePurchNotifArr(this.perchArr)
  }
   
}


preparePayNotifArr(arr){
  if(arr){
    arr.forEach(element => {
      let flt = this.sub_accountSalse.filter(x=>x.ac_id == element.cust_id)
      if (+flt[0].sub_balace > 0) {
        this.payNotifArr.push({
          'title' : "مواعيد سداد فاتورة  " +  element.sub_name  + 'بتاريخ ' +  element.pay_date ,
          'pay_ref' : element.pay_ref,
          'tot_pr' : element.tot_pr,
          'pay_date' : element.pay_date, 
          'pay_time' : element.pay_time,
          'cust_id' : element.cust_id,
          'discount' : element.discount,
          'changee' : element.changee,
          'user_id' : element.user_id,
          'pay' : element.pay,
          'store_id' : element.store_id,
          'pay_method' : element.pay_method,
           'payComment' : element.payComment ,
           'nextPay' : element.nextPay,
           'sub_name' : element.sub_name  
        })
      } 
    });
  }
  this.getTot()
}

preparePurchNotifArr(arr){
  if(arr){
    arr.forEach(element => {
      let flt = this.sub_accountPurch.filter(x=>x.ac_id == element.cust_id)
      if (+flt[0].sub_balace > 0) {
        this.payNotifArr.push({
          'title' : "مواعيد سداد فاتورة  " +  element.sub_name  + 'بتاريخ ' +  element.pay_date ,
          'pay_ref' : element.pay_ref,
          'tot_pr' : element.tot_pr,
          'pay_date' : element.pay_date, 
          'pay_time' : element.pay_time,
          'cust_id' : element.cust_id,
          'discount' : element.discount,
          'changee' : element.changee,
          'user_id' : element.user_id,
          'pay' : element.pay,
          'store_id' : element.store_id,
          'pay_method' : element.pay_method,
           'payComment' : element.payComment ,
           'nextPay' : element.nextPay   ,
           'sub_name' : element.sub_name    
        })
      } 
    });
  }
  this.getTot()
}


subiscribeInterval(){
setInterval(function() {
  this.getPayNotif(1)
  this.getPerchNotif(1)
  this.stockItems(1)
  }, 10000);
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
  initializeApp() {  
    this.getAppInfo();
    this.checkPlatform()
    this.auth();  
  }

  // Initialize endpoint information
  async initializeEndpointInfo() {
    await this.storage.create();
    
    // Subscribe to endpoint changes from service
    this.api2.EndpointChanged.subscribe(endpoint => {
      if (endpoint) {
        this.updateEndpointInfo();
      } else {
        this.selectedEndpointName = '';
      }
    });
    
    // Load initial endpoint info
    this.updateEndpointInfo();
  }

  // Update endpoint information
  async updateEndpointInfo() {
    await this.storage.create();
    const selectedCategory = await this.storage.get('SELECTED_CATEGORY');
    
    if (selectedCategory) {
      this.selectedEndpointName = selectedCategory.category_name;
    } else {
      this.selectedEndpointName = '';
    }
  }

  // Get selected endpoint name for display
  getSelectedEndpointName(): string {
    return this.selectedEndpointName;
  }

  // Toggle menu visibility
  async toggleMenu() {
    await this.menuController.toggle();
  }

  redirectToExternal(url: string) {
  window.open(url, '_blank');
  }

  isCurrentUrl(domain: string): boolean {
  const currentHostname = window.location.hostname;
  const currentHref = window.location.href;
  
  // Check if the domain is part of the current hostname or full URL
  return currentHostname.includes(domain) || currentHref.includes(domain);
}


  async  getAppInfo(){
      await this.storage.create(); 
      this.storage.get('USER_INFO').then((response) => {
        if (response) {
          this.USER_INFO =response
          //console.log(response) 
        }
      });
      this.storage.get('STORE_INFO').then((response) => {
        if (response) {
          this.store_info =response
           //console.log(response)
           //console.log(this.store_info)
        }
      });
      this.storage.get('company').then((response) => {
        if (response) {
          this.company = response 
        }
      });
      
      // Update endpoint info when app info is loaded
      this.updateEndpointInfo();
  }

async auth (){
  await this.storage.create(); 
  this.authenticationService.authState.subscribe(state => {
    this.isAuth = this.authenticationService.isAuthenticated()
    if (state) { 
      // Initialize endpoint on auth success
      this.api2.initializeEndpoint();
      // Don't navigate here - let the auth guard handle all navigation
      // This prevents conflicts with the guard's routing logic
    } else {
      // Don't navigate here either - let the auth guard handle it
      // The guard will redirect to login when authentication fails
    }
  });
}

logOut(){
  this.authenticationService.logout()
}

// Navigate to categories page
goToCategories() {
  this.router.navigate(['/folder/categories'], { replaceUrl: true });
}

// Navigate with route replacement to prevent stacking
async navigateWithReplace(route: string) {
  try {
    // Close any open modals first
    document.querySelectorAll('ion-modal').forEach(modal => {
      (modal as any).dismiss();
    });
    
    // Close the menu if it's open
    await this.menuController.close();
    
    // Simple navigation using Angular Router
    await this.router.navigate([route], { replaceUrl: true });
    
  } catch (error) {
    console.error('Navigation error:', error);
  }
}

  ngAfterViewInit() {
    // Initialize current URL
    this.currentUrl = this.router.url;
  }



  // Toggle sidebar collapsed state
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  // Handle sidebar hover events
  onSidebarMouseEnter() {
    this.isSidebarHovered = true;
  }

  onSidebarMouseLeave() {
    this.isSidebarHovered = false;
  }

  // Check if sidebar should be expanded (either not collapsed or hovered)
  isSidebarExpanded(): boolean {
    return !this.isSidebarCollapsed || this.isSidebarHovered;
  }

  // Present user action popover
  async presentUserPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: UserActionsPopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'user-action-popover'
    });
    
    return await popover.present();
  }

}

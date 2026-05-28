import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, MenuController, NavController } from '@ionic/angular';
import { AuthServiceService } from "../../app/auth/auth-service.service";
import { Storage } from '@ionic/storage';
import { ServicesService } from '../stockService/services.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  private backBlocker = () => {
    window.history.pushState(null, '', window.location.href);
  };

  ionViewWillEnter() {
    this.menuController.enable(false);
    // Block browser back button — push a history entry so pressing back
    // triggers popstate, which pushes another entry, keeping user on login.
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', this.backBlocker);
  }

  ionViewWillLeave() {
    window.removeEventListener('popstate', this.backBlocker);
  }

  USER_INFO : {
    id: any ,
    email: any,
    store_id :any,
    full_name:any,
    password:any,
    user_level:any,
  };
  yearArr : Array<any> =[]
  year : {id:any ,yearDesc:any ,yearStart :any,yearEnd:any}
  stores:Array<any> =[]
  store_info : {id:any ,store_ref:any , store_name:any , location :any }
  company : { id: any , phone: any, phone2  :any, address :any, logoUrl:any,engName:any,arName:any ,tradNo:any , vatNo:any};

  constructor(private api:ServicesService,private storage: Storage,private toast:ToastController ,private loadingController:LoadingController , private authenticationService: AuthServiceService, private router: Router, private translate: TranslateService, private menuController: MenuController, private navCtrl: NavController) {
    this.store_info = {id:"1" ,store_ref:"sh" , store_name:"sooq sha'by" , location :"sha'aby" }
    this.USER_INFO = {
      id: "" ,
      email: "",
      store_id :1,
      full_name:"",
      password:"",
      user_level:"",
    }
   }

  ngOnInit() {
    this.menuController.enable(false);
    this.getStore()
  //  this.getCompany()
    this.getyear()
  }

  pickDetail(ev){
    let fl= this.stores.filter(x=>x.store_name == ev.target.value)
    //console.log(fl);
    this.store_info = {
      id:fl[0]['id'],
      store_name:fl[0]['store_name'],
      store_ref: fl[0]['store_ref'],
      location:fl[0]['location'] 
    }
    this.USER_INFO.store_id =fl[0]['id']
    //console.log( this.store_info); 
  }

  getStore(){
    this.api.getStores().subscribe(data =>{
       //console.log(data)
       let res = data
       this.stores = res['data']
     }, (err) => {
     //console.log(err);
   })  
  }

  getCompany(){
    this.api.getCompany().subscribe(data =>{
        console.log('companay',data)
       let res = data
       this.company = res['data']
     }, (erriho) => {
     //console.log(err);
   })  
  }


  getyear(){
    this.api.getYear().subscribe(data =>{
     let res = data
     this.yearArr = res ['data']
     this.setCurrentYear()
   }, (err) => {
    this.presentToast('AUTH.LOGIN.MESSAGE.LOGIN_ERROR', 'danger')
    //console.log(err);
   })
  } 

  setCurrentYear(){
    this.storage.get('year').then((response) => {
      if (response) {
         this.year = response 
      }else{
        this.year = this.yearArr[0]
        this.storage.set('year', this.year).then((response) => {
          //console.log('year set',  this.year) 
        }); 
      }
    });
  }

  setCurrentStoreLocaly(){
    this.storage.set('STORE_INFO', this.store_info).then((response) => {
      
    }) 
    this.storage.set('company', this.company).then((response) => {
      
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
      duration: 2000,
      message: msg,
      translucent: true,
     // cssClass: 'custom-class custom-loading',
      backdropDismiss: false
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss()
       loading.onDidDismiss().then(data=>{
          //console.log(data)
        });

    //console.log('Loading dismissed with role:', role);
  }

   // Navigate to forgot password page
   navigateToForgotPassword() {
     this.router.navigate(['/forgot-password']);
   }

   async loginUser(){
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(this.USER_INFO.email == "" || this.USER_INFO.password == ""){
    this.presentToast('AUTH.LOGIN.MESSAGE.COMPLETE_DATA' ,'danger')
   }else if(!emailRegex.test(this.USER_INFO.email)){
    this.presentToast('AUTH.LOGIN.MESSAGE.INVALID_EMAIL' ,'danger')
   }else{

    await this.storage.set('STORE_INFO', this.store_info);
    await this.storage.set('company', this.company);

    // Subscribe to auth state changes to handle redirect
    const authSubscription = this.authenticationService.authState.subscribe(async (isAuthenticated) => {
      if (isAuthenticated) {
        authSubscription.unsubscribe();
        this.navCtrl.navigateRoot('/analytics-dashboard');
      }
    });

    // Trigger login
    this.authenticationService.login(this.USER_INFO);
   }

  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController, Platform, LoadingController, NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';
import { ServicesService } from "../stockService/services.service";
 
 
@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  authState = new BehaviorSubject(false);
  device:any ='' ;
   USER_INFO : {
    id: any ,
    user_name: any,
    email: any,
    store_id :any,
    full_name:any,
     password:any,
    user_level:any
  };
  constructor(private toast:ToastController ,private loadingController:LoadingController,private api:ServicesService, private router: Router,private storage: Storage,private platform: Platform,public toastController: ToastController, private navCtrl: NavController) {
    this.platform.ready().then(() => {
      this.checkPlatform()
      this.ifLoggedIn();
    });
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

  async presentLoadingWithOptions(msg?,status?) {
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
    //console.log('Loading dismissed with role:', role);
  }

  async ifLoggedIn() {
    await this.storage.create();
    const response = await this.storage.get('USER_INFO');
    if (response) {
      this.authState.next(true);
    }
  }


 async login(user) {
   await this.presentLoadingWithOptions('جاري تسجيل الدخول' , 'login')
    //console.log(user)
    this.api.login(user).subscribe(data =>{
      //console.log('loogingksks',data)
      let res = data
      if(res['id'] != null){
      this.USER_INFO ={
        id :res['id'],
        user_name:res['user_name'],
        email:res['email'],
        full_name:res['full_name'],
        password:res['password'],
        store_id:res['store_id'],
        user_level:res['user_level'] || null
      }
        //console.log(  'sdlijlf' ,  this.USER_INFO)
        this.storage.set('USER_INFO', this.USER_INFO).then(async (response) => {
          // Dismiss loading (ignore if already auto-dismissed)
          try { await this.loadingController.dismiss(); } catch(e) {}

          // Set auth state - login page will handle navigation
          this.authState.next(true);
        });
      }else{
        try { this.loadingController.dismiss(); } catch(e) {}
        this.presentToast('خطأ في البريد الإلكتروني او كلمة المرور' ,'danger')
      }
    }, (err) => {
       //console.log(err);
       try { this.loadingController.dismiss(); } catch(e) {}
       this.presentToast('خطأ في البريد الإلكتروني او كلمة المرور' ,'danger')

      },()=>{ }
    )

  }

 
  async logout() {
    await this.storage.create();
    await this.storage.remove('USER_INFO');
    await this.storage.remove('STORE_INFO');
    this.authState.next(false);
    this.navCtrl.navigateRoot('folder/login');
  }

  isAuthenticated() {
    return this.authState.value;
  }

}

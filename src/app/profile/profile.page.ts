import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userInfo: any = {};

  // Change username
  newUsername: string = '';
  showUsernameForm: boolean = false;

  // Change password
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  showPasswordForm: boolean = false;

  constructor(
    private storage: Storage,
    private api: ServicesService,
    private toast: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadUserInfo();
  }

  async loadUserInfo() {
    this.userInfo = await this.storage.get('USER_INFO');
    if (!this.userInfo) {
      this.presentToast('لم يتم العثور على بيانات المستخدم', 'danger');
      this.router.navigate(['/folder/login']);
    }
    this.newUsername = this.userInfo.user_name;
  }

  async presentToast(msg: string, color?: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000,
      color: color,
      cssClass: 'cust_Toast',
      mode: 'ios',
      position: 'top'
    });
    toast.present();
  }

  async presentLoading(msg?: string) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode: 'ios',
      duration: 10000,
      message: msg,
      translucent: true,
      backdropDismiss: false
    });
    await loading.present();
  }

  toggleUsernameForm() {
    this.showUsernameForm = !this.showUsernameForm;
    if (this.showUsernameForm) {
      this.newUsername = this.userInfo.user_name;
      this.showPasswordForm = false;
    }
  }

  togglePasswordForm() {
    this.showPasswordForm = !this.showPasswordForm;
    if (this.showPasswordForm) {
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
      this.showUsernameForm = false;
    }
  }

  async changeUsername() {
    if (!this.newUsername || this.newUsername.trim() === '') {
      this.presentToast('الرجاء إدخال اسم المستخدم الجديد', 'danger');
      return;
    }

    if (this.newUsername === this.userInfo.user_name) {
      this.presentToast('اسم المستخدم الجديد مطابق للقديم', 'warning');
      return;
    }

    const alert = await this.alertController.create({
      header: 'تأكيد التغيير',
      message: `هل أنت متأكد من تغيير اسم المستخدم إلى "${this.newUsername}"؟`,
      buttons: [
        {
          text: 'إلغاء',
          role: 'cancel'
        },
        {
          text: 'تأكيد',
          handler: () => {
            this.performUsernameChange();
          }
        }
      ]
    });

    await alert.present();
  }

  async performUsernameChange() {
    await this.presentLoading('جاري تحديث اسم المستخدم...');

    this.api.changeUsername(this.userInfo.id, this.newUsername).subscribe(
      async (response: any) => {
        this.loadingController.dismiss();

        if (response.success) {
          // Update local storage
          this.userInfo.user_name = this.newUsername;
          await this.storage.set('USER_INFO', this.userInfo);

          this.presentToast(response.message, 'success');
          this.showUsernameForm = false;
        } else {
          this.presentToast(response.message, 'danger');
        }
      },
      (error) => {
        this.loadingController.dismiss();
        this.presentToast('حدث خطأ. يرجى المحاولة مرة أخرى', 'danger');
      }
    );
  }

  async changePassword() {
    // Validation
    if (!this.currentPassword || this.currentPassword.trim() === '') {
      this.presentToast('الرجاء إدخال كلمة المرور الحالية', 'danger');
      return;
    }

    if (!this.newPassword || this.newPassword.trim() === '') {
      this.presentToast('الرجاء إدخال كلمة المرور الجديدة', 'danger');
      return;
    }

    if (this.newPassword.length < 8) {
      this.presentToast('يجب أن تكون كلمة المرور 8 أحرف على الأقل', 'danger');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.presentToast('كلمات المرور غير متطابقة', 'danger');
      return;
    }

    if (this.newPassword === this.currentPassword) {
      this.presentToast('كلمة المرور الجديدة مطابقة للقديمة', 'warning');
      return;
    }

    await this.presentLoading('جاري تحديث كلمة المرور...');

    this.api.changePassword(this.userInfo.id, this.currentPassword, this.newPassword).subscribe(
      async (response: any) => {
        this.loadingController.dismiss();

        if (response.success) {
          // Update local storage
          this.userInfo.password = this.newPassword;
          await this.storage.set('USER_INFO', this.userInfo);

          this.presentToast(response.message, 'success');
          this.showPasswordForm = false;
          this.currentPassword = '';
          this.newPassword = '';
          this.confirmPassword = '';
        } else {
          this.presentToast(response.message, 'danger');
        }
      },
      (error) => {
        this.loadingController.dismiss();
        this.presentToast('حدث خطأ. يرجى المحاولة مرة أخرى', 'danger');
      }
    );
  }

  cancelUsernameChange() {
    this.showUsernameForm = false;
    this.newUsername = this.userInfo.user_name;
  }

  cancelPasswordChange() {
    this.showPasswordForm = false;
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

}

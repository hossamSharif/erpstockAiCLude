import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: string = '';
  emailSent: boolean = false;

  constructor(
    private api: ServicesService,
    private toast: ToastController,
    private loadingController: LoadingController,
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  async presentToast(translationKey: string, color?: string) {
    const message = this.translate.instant(translationKey);
    const toast = await this.toast.create({
      message: message,
      duration: 3000,
      color: color,
      cssClass: 'cust_Toast',
      mode: 'ios',
      position: 'top'
    });
    toast.present();
  }

  async presentLoading(translationKey?: string) {
    const message = translationKey ? this.translate.instant(translationKey) : undefined;
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode: 'ios',
      duration: 10000,
      message: message,
      translucent: true,
      backdropDismiss: false
    });
    await loading.present();
  }

  async sendResetEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.email || this.email.trim() === '') {
      this.presentToast('AUTH.FORGOT_PASSWORD.MESSAGE.ENTER_EMAIL', 'danger');
      return;
    }

    if (!emailRegex.test(this.email)) {
      this.presentToast('COMMON.VALIDATION.INVALID_EMAIL', 'danger');
      return;
    }

    await this.presentLoading('AUTH.FORGOT_PASSWORD.MESSAGE.SENDING');

    this.api.forgotPassword(this.email).subscribe(
      (response: any) => {
        this.loadingController.dismiss();
        if (response.success) {
          this.emailSent = true;
          this.presentToast('AUTH.FORGOT_PASSWORD.MESSAGE.EMAIL_SENT', 'success');
        } else {
          this.presentToast('COMMON.MESSAGE.ERROR', 'danger');
        }
      },
      (error) => {
        this.loadingController.dismiss();
        this.presentToast('COMMON.MESSAGE.CONNECTION_ERROR', 'danger');
      }
    );
  }

  backToLogin() {
    this.router.navigate(['/folder/login']);
  }

}

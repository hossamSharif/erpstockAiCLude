import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { ServicesService } from '../stockService/services.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  token: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  tokenValid: boolean = false;
  tokenChecked: boolean = false;
  userEmail: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ServicesService,
    private toast: ToastController,
    private loadingController: LoadingController,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    // Get token from URL query parameters
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      if (this.token) {
        this.verifyToken();
      } else {
        this.tokenChecked = true;
        this.tokenValid = false;
        this.presentToast('AUTH.RESET_PASSWORD.MESSAGE.INVALID_LINK', 'danger');
      }
    });
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

  verifyToken() {
    this.presentLoading('AUTH.RESET_PASSWORD.MESSAGE.VERIFYING_LINK');

    this.api.verifyResetToken(this.token).subscribe(
      (response: any) => {
        this.loadingController.dismiss();
        this.tokenChecked = true;

        if (response.valid) {
          this.tokenValid = true;
          this.userEmail = response.email;
        } else {
          this.tokenValid = false;
          this.presentToast('AUTH.RESET_PASSWORD.MESSAGE.LINK_EXPIRED', 'danger');
        }
      },
      (error) => {
        this.loadingController.dismiss();
        this.tokenChecked = true;
        this.tokenValid = false;
        this.presentToast('AUTH.RESET_PASSWORD.MESSAGE.VERIFICATION_ERROR', 'danger');
      }
    );
  }

  async resetPassword() {
    // Validation
    if (!this.newPassword || this.newPassword.trim() === '') {
      this.presentToast('AUTH.RESET_PASSWORD.MESSAGE.ENTER_PASSWORD', 'danger');
      return;
    }

    if (this.newPassword.length < 8) {
      this.presentToast('AUTH.RESET_PASSWORD.MESSAGE.PASSWORD_MIN_LENGTH', 'danger');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.presentToast('AUTH.RESET_PASSWORD.MESSAGE.PASSWORD_MISMATCH', 'danger');
      return;
    }

    await this.presentLoading('AUTH.RESET_PASSWORD.MESSAGE.UPDATING_PASSWORD');

    this.api.resetPassword(this.token, this.newPassword).subscribe(
      (response: any) => {
        this.loadingController.dismiss();

        if (response.success) {
          this.presentToast('AUTH.RESET_PASSWORD.MESSAGE.PASSWORD_UPDATED', 'success');
          // Navigate to login after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/folder/login']);
          }, 2000);
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

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  goToLogin() {
    this.router.navigate(['/folder/login']);
  }

}

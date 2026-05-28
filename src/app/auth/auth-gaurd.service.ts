import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';
import { MenuController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate  {

  constructor(
    public authenticationService: AuthServiceService,
    private storage: Storage,
    private menuController: MenuController,
    private navCtrl: NavController
  ) {}

   async canActivate(): Promise<boolean> {
    try {
      await this.storage.create();

      const userInfo = await this.storage.get('USER_INFO');

      if (userInfo && userInfo.id) {
        if (!this.authenticationService.isAuthenticated()) {
          this.authenticationService.authState.next(true);
        }
        this.menuController.enable(true);
        return true;
      } else {
        this.menuController.enable(false);
        await this.menuController.close();
        this.navCtrl.navigateRoot('folder/login');
        return false;
      }
    } catch (error) {
      console.error('Error in AuthGuard:', error);
      this.menuController.enable(false);
      await this.menuController.close();
      this.navCtrl.navigateRoot('folder/login');
      return false;
    }
  }

}

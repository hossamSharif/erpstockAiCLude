import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate  {

  constructor(
    public authenticationService: AuthServiceService,
    private router: Router,
    private storage: Storage
  ) {}

   async canActivate(): Promise<boolean> {
    // First ensure storage is created
    try {
      await this.storage.create();
      
      // Check storage for user info first
      const userInfo = await this.storage.get('USER_INFO');
      console.log('AuthGuard - USER_INFO from storage:', userInfo);
      
      if (userInfo && userInfo.id) {
        // User exists in storage, ensure auth state is updated
        if (!this.authenticationService.isAuthenticated()) {
          this.authenticationService.authState.next(true);
        }
        return true;
      } else {
        // No user in storage, redirect to login
        this.router.navigate(['folder/login'], { replaceUrl: true });
        return false;
      }
    } catch (error) {
      console.error('Error in AuthGuard:', error);
      // On error, redirect to login
      this.router.navigate(['folder/login'], { replaceUrl: true });
      return false;
    }
  }

}

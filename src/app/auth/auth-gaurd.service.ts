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
    // Check both the auth state and storage
    const isAuthenticated = this.authenticationService.isAuthenticated();
    
    if (isAuthenticated) {
      return true;
    }
    
    // Double-check with storage as fallback
    try {
      await this.storage.create();
      const userInfo = await this.storage.get('USER_INFO');
      if (userInfo && userInfo.id) {
        // Update auth state if user exists in storage but state is false
        this.authenticationService.authState.next(true);
        return true;
      }
    } catch (error) {
      console.error('Error checking storage in AuthGuard:', error);
    }
    
    // If not authenticated, redirect to login with replace to avoid history issues
    this.router.navigate(['folder/login'], { replaceUrl: true });
    return false;
  }

}

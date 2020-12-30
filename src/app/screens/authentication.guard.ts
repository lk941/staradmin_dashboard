import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';

@Injectable()

export class AuthenticationGuard implements  CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private authService: AuthService){}  
  
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {  
          
        return this.authService.isAuthenticated();  
    //Logic of authenticating user by calling some API service.  
    // For e.g. Here Authservice has a isAuthenticated() method which further  
    // Check user is valid or not.  
    }  
}

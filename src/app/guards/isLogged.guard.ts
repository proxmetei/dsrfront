import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, Router } from '@angular/router';
import {UserService} from '../user.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {
  constructor(private dataSrvice: UserService, private router: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.dataSrvice.isLoggedIn()){
          return true;
      }
      else{
          this.router.navigate(['login']);
      }
  return false;
  }
}

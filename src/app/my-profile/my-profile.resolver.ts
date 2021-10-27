import { HomeLoginService } from './../login-home/login-home.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../login-home/user.model';

@Injectable({
  providedIn: 'root'
})
export class MyProfileResolver implements Resolve<User> {

  constructor(private homeLogin: HomeLoginService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.homeLogin.reloadUser();
  }
}

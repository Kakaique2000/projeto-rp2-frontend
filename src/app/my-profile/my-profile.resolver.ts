import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserDto } from '../shared/models/user.model';
import { HomeLoginService } from './../login-home/login-home.service';

@Injectable({
  providedIn: 'root'
})
export class MyProfileResolver implements Resolve<UserDto> {

  constructor(private homeLogin: HomeLoginService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserDto> {
    return this.homeLogin.reloadUser();
  }
}

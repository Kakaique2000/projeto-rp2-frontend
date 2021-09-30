import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeLoginService } from './login-home.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;


  constructor(private _authService: HomeLoginService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.isLogged) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['/']);
    alert('Por favor, se autentique para acessar o sistema')
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}

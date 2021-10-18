import { from, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor, HttpStatusCode } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HomeLoginService } from './login-home/login-home.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _homeLogin: HomeLoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse, caught) => {
        console.log('erro http', err);
        if (err.status === HttpStatusCode.Unauthorized) {
          this._homeLogin.logout();
        }
        return throwError(caught);
      })
    )
  }

}

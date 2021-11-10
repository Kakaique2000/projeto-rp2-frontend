import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookieService } from '../cookie.service';
import { MyService } from '../globals';
import * as TokenDto from '../shared/models/user.model';
import { NewUser } from './signup/new-user';

const API_URL = environment.api + '/auth/';
@Injectable({
  providedIn: 'root'
})
export class HomeLoginService {
  constructor(private http: HttpClient, private cookie: CookieService, private myService: MyService, private router: Router) {
    this.reloadUser()
      .pipe(
        take(1)
      ).subscribe()
  }

  get isLogged() {
    return this.cookie.get('Authorization').length > 0;
  }

  private _loggedUser$ = new BehaviorSubject<TokenDto.UserDto | null>(null);

  get loggedUser$(): Observable<TokenDto.UserDto | null> {
    return this._loggedUser$.asObservable();
  }

  reloadUser() {
    return this.http.get<TokenDto.UserDto>(environment.api + '/users/me').pipe(
      tap(user => this._loggedUser$.next(user))
    )
  }

  authenticate(email: string, password: string) {

    return this.http.post<TokenDto.Token>(API_URL + 'login', { email, password }).pipe(
      tap(e => {
        this.myService.setValue(e.user.id);
        console.log(this.myService.getId);

        this._loggedUser$.next(e.user);

        console.log(e);


        this.cookie.set('userId', e.user.id, 0.1);
        this.cookie.set('Authorization', e.token, 0.1)
      })
    );
  }

  signup(newUser: NewUser) {
    return this.http.post(API_URL + 'signup', newUser);
  }

  sendEmail(email: string) {
    const params = new HttpParams({
      fromObject: {
        email: email
      }
    });

    return this.http.post(API_URL + 'reset-password?', {}, { params: params, responseType: 'text' });
  }

  novaSenha(token: string, password: string, passwordConfirmation: string) {
    return this.http.post(API_URL + 'reset-password/handle', { token, password, passwordConfirmation }, { responseType: 'text' });
  }

  logout() {
    this.cookie.delete('token');
    this.cookie.delete('userId');
    this._loggedUser$.next(null);
    this.router.navigate(['/'])
  }

}

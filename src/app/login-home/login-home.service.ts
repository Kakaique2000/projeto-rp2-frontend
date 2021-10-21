import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NewUser } from './signup/new-user';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { CookieService } from '../cookie.service';
import { MyService } from '../globals';
import { Router } from '@angular/router';
import * as TokenDto from './user.model';
import { BehaviorSubject, Observable } from 'rxjs';

const API_URL = environment.api + '/auth/';
@Injectable({
    providedIn: 'root'
})
export class HomeLoginService {
    constructor(private http: HttpClient, private cookie: CookieService, private myService: MyService, private router: Router) { }

    get isLogged() {
        return this.cookie.get('Authorization').length > 0;
    }

    private _loggedUser$ = new BehaviorSubject<TokenDto.User | null>(null);

  get loggedUser$(): Observable<TokenDto.User | null> {
    return this._loggedUser$.asObservable();
  }

    authenticate(email: string, password: string) {

        return this.http.post<TokenDto.Token>(API_URL+'login', { email, password }).pipe(
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
        const firstName = newUser.firstName;
        const lastName = newUser.lastName;
        const email = newUser.email;
        const password = newUser.password;
        const gender = newUser.gender;
        const cpf = newUser.cpf;
        const phone = newUser.phone;
        const recruiter = newUser.recruiter;

        return this.http.post(API_URL+'signup', { firstName, lastName, email, password, gender, cpf, phone, recruiter });
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HomeLoginService } from '../../login-home/login-home.service';
import { User } from '../../login-home/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private homeLoginService: HomeLoginService) { }

  readonly API = environment.api + '/users';

  patchUser(id: number, userForm: Partial<User>) {
    return this.http.patch<User>(`${this.API}/${id}`, userForm)
      .pipe(tap(_ => {
        this.homeLoginService.reloadUser().pipe(take(1)).subscribe()
      }))
  }
}

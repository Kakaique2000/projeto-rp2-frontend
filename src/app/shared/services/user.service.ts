import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, take, tap } from 'rxjs/operators';
import { UserDto } from 'src/app/shared/models/user.model';
import { environment } from '../../../environments/environment';
import { HomeLoginService } from '../../login-home/login-home.service';
import { UserForm } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private homeLoginService: HomeLoginService) { }

  readonly API = environment.api + '/users';

  getUserPublic(id: number) {
    return this.http.get<UserDto>(`${this.API}/${id}/public`)
  }

  patchUser(id: number, userForm: Partial<UserDto>) {
    return this.http.patch<UserDto>(`${this.API}/${id}`, userForm)
      .pipe(tap(_ => {
        this.homeLoginService.reloadUser().pipe(take(1)).subscribe()
      }))
  }

  patchLoggedUser(userForm: Partial<UserForm>) {
    return this.homeLoginService.loggedUser$.pipe(
      take(1),
      switchMap(user => this.http.patch<UserDto>(`${this.API}/${user.id}`, userForm)
        .pipe(tap(_ => {
          this.homeLoginService.reloadUser().pipe(take(1)).subscribe()
        })))
    )

  }
}

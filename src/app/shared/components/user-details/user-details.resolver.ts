import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserPublicDto } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<UserPublicDto> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserPublicDto> {
    const id = route.params.id;

    return this.userService.getUserPublic(id);
  }
}

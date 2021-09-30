import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompanyModel } from '../new-company/new-company.model';
import { CookieService } from '../cookie.service';
import { MyService } from '../globals';
import { Registrations } from './registrations.model';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {

  public _url: string = environment.api + "/users/";

  constructor(private http: HttpClient, private cookie: CookieService, private myService: MyService) { }

  
  getAllRegister() {
    const header = {
      'Authorization': 'Bearer ' + this.cookie.get("token")
    }

    const headerToken = {
      headers: new HttpHeaders(header),
    };


    return this.http.get<Registrations[]>(`${this._url}${this.cookie.get('userId')}/jobs`, headerToken);
  }
}

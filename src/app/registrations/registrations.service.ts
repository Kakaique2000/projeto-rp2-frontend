import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CookieService } from '../cookie.service';
import { MyService } from '../globals';
import { JobApplicationDto } from "../shared/models/job-application.model";

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


    return this.http.get<JobApplicationDto[]>(`${this._url}${this.cookie.get('userId')}/jobs`, headerToken);
  }
}

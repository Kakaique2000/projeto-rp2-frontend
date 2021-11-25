import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment as env } from 'src/environments/environment';
import { CookieService } from '../cookie.service';
import { MyService } from '../globals';
import { CompanyModel } from '../new-company/new-company.model';
import { NewJob, TypeJob, TypeSalary } from '../shared/models/new-job.model';

const API_URL = env.api + '/jobs/';
const API_URL_COMPANIE = env.api + '/users/';
@Injectable({
  providedIn: 'root'
})
export class NewJobService {

  public _url: string = "http://localhost:8080/jobs/";
  public _urlCompanie: string = "http://localhost:8080/users/";

  constructor(private http: HttpClient, private cookie: CookieService, private myService: MyService) { }

  getAreas() {
    const header = {
      'Authorization': 'Bearer ' + this.cookie.get("token")
    }

    const headerToken = {
      headers: new HttpHeaders(header),
    };

    return this.http.get<TypeJob>(API_URL + 'occupations', headerToken)
  }

  getSalary() {
    const header = {
      'Authorization': 'Bearer ' + this.cookie.get("token")
    }

    const headerToken = {
      headers: new HttpHeaders(header),
    };

    return this.http.get<TypeSalary>(API_URL + 'salaries', headerToken)
  }

  createJob(newjob: NewJob) {
    const headertste = 'Bearer ' + this.cookie.get("token")


    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': headertste
    });
    let options = { headers: headers };

    const title = newjob.title;
    const description = newjob.description;
    const salary = newjob.salary;
    const companyId = newjob.companyId;
    const knowledges = newjob.knowledges;
    const fullDescription = newjob.fullDescription;


    return this.http.post(API_URL, { title, description, salary, companyId, knowledges, fullDescription }, options);

  }

  getAllCompanies() {
    const header = {
      'Authorization': 'Bearer ' + this.cookie.get("token")
    }

    const headerToken = {
      headers: new HttpHeaders(header),
    };


    return this.http.get<CompanyModel[]>(`${API_URL_COMPANIE}${this.cookie.get('userId')}/companies`, headerToken);
  }
}

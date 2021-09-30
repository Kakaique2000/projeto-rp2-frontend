import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JobModel } from './job-list.models';
import { environment } from 'src/environments/environment';
import { CookieService } from 'src/app/cookie.service';

const API_URL = environment.api + '/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobListService {
  public _url: string = "http://localhost:8080/jobs";

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getJobs(category: any, salary: any, query: string) {

    const header = {
      Authorization: 'Bearer ' + this.cookie.get('token')
    };

    const params: any = {};

    if (category && category !== 'Todos') {
      params.occupation = category;
    }

    if (salary) {
      params.salary = salary;
    }

    if (query && query !== '') {
      params.title = query;
    }

    const httpOptions = {
      headers: new HttpHeaders(header),
      params
    };

    return this.http.get<JobModel[]>(API_URL, httpOptions);
  }

  apply(idJob: any) {
    const params = new HttpParams({
        fromObject: {
            id: idJob
        }
    });

    return this.http.post(API_URL +'/' + idJob+'/apply', {},);
}

}

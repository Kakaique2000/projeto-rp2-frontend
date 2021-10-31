import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CookieService } from 'src/app/cookie.service';
import { TypeSalary } from "src/app/shared/models/new-job.model";
import { Page } from "src/app/shared/models/page.model";
import { environment } from 'src/environments/environment';
import { JobDetailsDto, JobDto, JobRecruiterDetailsDto, KnowledgeDto } from '../../shared/models/job.models';

const API_URL = environment.api + '/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobListService {
  public _url: string = "http://localhost:8080/jobs";

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getJob(id: number) {
    return this.http.get<JobDetailsDto>(`${this._url}/${id}`)
  }

  getJobs(category: any, salary: any, query: string) {


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
      params
    };

    return this.http.get<JobDto[]>(API_URL, httpOptions);
  }

  apply(idJob: any) {
    const params = new HttpParams({
        fromObject: {
            id: idJob
        }
    });

    return this.http.post(API_URL +'/' + idJob+'/apply', {},);
  }

  getSalaries() {
    return this.http.get<TypeSalary>(`${this._url}/salaries`)
  }

  getKnowledges() {
    return this.http.get<KnowledgeDto[]>(`${this._url}/knowledge`)
  }

  /**
   * Recupera os jobs de um recruiter com os usuarios inscritos nele
   */
  getCreatedJobs() {
    return this.http.get<Page<JobRecruiterDetailsDto>>(`${this._url}/created`)
  }

}

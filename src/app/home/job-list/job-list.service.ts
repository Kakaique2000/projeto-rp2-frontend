import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Params } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
import { CookieService } from 'src/app/cookie.service';
import { HomeLoginService } from 'src/app/login-home/login-home.service';
import { KnowledgeDto } from 'src/app/shared/models/knowledge.model';
import { TypeSalary } from "src/app/shared/models/new-job.model";
import { Page } from "src/app/shared/models/page.model";
import { environment } from 'src/environments/environment';
import { JobDetailsDto, JobDto, JobRecruiterDetailsDto } from '../../shared/models/job.models';

const API_URL = environment.api + '/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobListService {
  public _url: string = "http://localhost:8080/jobs";

  constructor(private http: HttpClient, private cookie: CookieService, private homeLoginService: HomeLoginService) { }

  idLoading$ = new Subject<number>();

  isUserCandidated$(id: number) {
    return this.homeLoginService.loggedUser$.pipe(
      map(user => {
        return !!user.jobApplications.find(e => e.job.id === id)
      })
    )
  }

  getJob(id: number) {
    return this.http.get<JobDetailsDto>(`${this._url}/${id}`)
  }

  modifyApproval(jobId: number, userId: number, approved: boolean | null) {
    return this.http.post(`${this._url}/${jobId}/job_applications/${userId}`, { approved })
  }

  getJobs(category: any, salary: any, query: string, knowledges: number[]) {


    const params: Params = {};

    if (category && category !== 'Todos') {
      params.occupation = category;
    }

    if (knowledges?.length) {
      params.knowledges = knowledges;
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

  apply(idJob: number) {
    this.idLoading$.next(idJob);
    return this.http.post(API_URL + '/' + idJob + '/apply', {},).pipe(
      switchMap(() => {
        const resetIdLoading = () => this.idLoading$.next(-1);
        return this.homeLoginService.reloadUser().pipe(
          finalize(() => resetIdLoading())
        )
      })
    );
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

  deleteJob(job: JobDto) {
    return this.http.delete(`${this._url}/${job.id}`)
  }

}

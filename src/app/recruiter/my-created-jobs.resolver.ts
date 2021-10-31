import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobRecruiterDetailsDto } from '../shared/models/job.models';
import { JobListService } from './../home/job-list/job-list.service';

@Injectable({
  providedIn: 'root'
})
export class MyCreatedJobsResolver implements Resolve<JobRecruiterDetailsDto[]> {

  constructor(private jobService: JobListService) { }

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<JobRecruiterDetailsDto[]> {
    return this.jobService.getCreatedJobs().pipe(map(e => e.content));
  }
}

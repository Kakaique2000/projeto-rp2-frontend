import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JobDetailsModel, JobModel } from '../job-list/job-list.models';
import { JobListService } from '../job-list/job-list.service';

@Component({
  selector: 'app-job-descriptor',
  templateUrl: './job-descriptor.component.html',
  styleUrls: ['./job-descriptor.component.scss']
})
export class JobDescriptorComponent implements OnInit {

  constructor(private jobService: JobListService) { }

  @Input()
  job: JobModel;
  jobDetails?: JobDetailsModel;
  loadingJobDetails: boolean;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.job) {
      this.reloadJobDetails();
    }
  }

  reloadJobDetails() {
    this.loadingJobDetails = true;
    this.jobService.getJob(this.job.id).subscribe({
      next: job => {
        this.jobDetails = job;
        this.loadingJobDetails = false;
      }
    })
  }

}

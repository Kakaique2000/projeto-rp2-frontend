import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobRecruiterDetailsDto } from 'src/app/shared/models/job.models';

@Component({
  selector: 'app-my-created-jobs',
  templateUrl: './my-created-jobs.component.html',
  styleUrls: ['./my-created-jobs.component.scss']
})
export class MyCreatedJobsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  @Input()
  jobs: JobRecruiterDetailsDto[] = this.route.snapshot.data.jobs;

  ngOnInit(): void {
  }

  deleteJob(job: JobRecruiterDetailsDto) {
    this.jobs = this.jobs.filter(e => e.id !== job.id)
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobRecruiterDetailsModel } from 'src/app/home/job-list/job-list.models';

@Component({
  selector: 'app-my-created-jobs',
  templateUrl: './my-created-jobs.component.html',
  styleUrls: ['./my-created-jobs.component.scss']
})
export class MyCreatedJobsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  @Input()
  jobs: JobRecruiterDetailsModel[] = this.route.snapshot.data.jobs;

  ngOnInit(): void {
  }

}

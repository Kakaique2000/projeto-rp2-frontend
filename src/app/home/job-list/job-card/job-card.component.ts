import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobDto } from '../../../shared/models/job.models';
import { JobListService } from './../job-list.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit, OnDestroy {

  constructor(public jobService: JobListService) { }

  loading = false;
  candidated = false

  subscriptions: Subscription[] = []

  @Input()
  job: JobDto;

  @Input()
  selected = false;

  @Output()
  onApply = new EventEmitter<JobDto>();


  ngOnInit(): void {
    this.subscriptions.push(

      this.jobService.idLoading$.subscribe({
        next: id => this.loading = this.job.id === id
      }),

      this.jobService.isUserCandidated$(this.job.id).subscribe({
        next: isCandidated => this.candidated = isCandidated
      }),

    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

}

import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { JobListService } from 'src/app/home/job-list/job-list.service';
import { JobDetailsDto, JobDto } from '../../shared/models/job.models';

@Component({
  selector: 'app-job-descriptor',
  templateUrl: './job-descriptor.component.html',
  styleUrls: ['./job-descriptor.component.scss']
})
export class JobDescriptorComponent implements OnInit, OnChanges, OnDestroy {

  constructor(public jobService: JobListService) { }

  @Input()
  job: JobDto;
  jobDetails?: JobDetailsDto;
  loadingJobDetails: boolean;
  candidaturaLoading = false;
  subscriptions: Subscription[] = [];

  loading = false;
  candidated = false

  ngOnInit(): void {

    this.subscriptions.push(

    );

  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.job) {
      this.reloadJobDetails();
    }
  }

  apply() {
    this.jobService.apply(this.job.id)
      .subscribe((res) => {
        alert('Candidatura efetivada com sucesso, boa sorte!')
      },
        erro => {
          console.log(erro)
        });
  }

  reloadJobDetails() {
    this.loadingJobDetails = true;
    this.jobService.getJob(this.job.id).subscribe({
      next: job => {
        this.jobDetails = job;
        this.loadingJobDetails = false;
      }
    })

    this.jobService.isUserCandidated$(this.job.id).pipe(take(1)).subscribe({
      next: isCandidated => this.candidated = isCandidated
    })


    this.jobService.idLoading$.subscribe({
      next: id => {
        this.loading = this.job.id === id;
        this.jobService.isUserCandidated$(this.job.id).pipe(take(1)).subscribe({
          next: isCandidated => this.candidated = isCandidated
        })
      }
    })


  }

}

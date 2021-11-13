import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { JobListService } from 'src/app/home/job-list/job-list.service';
import { KnowledgeService } from 'src/app/shared/services/knowledge.service';
import { SnackHelperService } from 'src/app/shared/snack-helper.service';
import { JobDetailsDto, JobDto } from '../../shared/models/job.models';
import { KnowledgeDto } from './../../shared/models/knowledge.model';

@Component({
  selector: 'app-job-descriptor',
  templateUrl: './job-descriptor.component.html',
  styleUrls: ['./job-descriptor.component.scss']
})
export class JobDescriptorComponent implements OnInit, OnChanges, OnDestroy {

  constructor(
    public jobService: JobListService,
    private knowledgeService: KnowledgeService,
    private snack: SnackHelperService
  ) { }

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
        if (!this.candidated) {
          this.snack.okTransacao('candidatura efetivada com sucesso, boa sorte!');
        } else {
          this.snack.okTransacao('candidatura cancelada com sucesso');
        }
      },
      erro => {
        this.snack.okTransacao('ops, ocorreu um erro, tente novamente mais tarde');
        });
  }

  openTips(knowledge: KnowledgeDto) {
    this.knowledgeService.popKnowledgeTips(knowledge);
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

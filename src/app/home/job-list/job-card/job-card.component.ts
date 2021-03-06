import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobListService } from 'src/app/home/job-list/job-list.service';
import { KnowledgeDto } from 'src/app/shared/models/knowledge.model';
import { KnowledgeService } from 'src/app/shared/services/knowledge.service';
import { JobDto } from '../../../shared/models/job.models';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit, OnDestroy {

  constructor(public jobService: JobListService, private knowledgeService: KnowledgeService) { }

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

  openTips(knowledge: KnowledgeDto) {
    this.knowledgeService.popKnowledgeTips(knowledge);
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

}

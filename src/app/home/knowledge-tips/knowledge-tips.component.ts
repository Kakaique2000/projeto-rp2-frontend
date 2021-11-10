import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KnowledgeDto } from 'src/app/shared/models/knowledge.model';
import { KnowledgeService } from 'src/app/shared/services/knowledge.service';

@Component({
  selector: 'app-knowledge-tips',
  templateUrl: './knowledge-tips.component.html',
  styleUrls: ['./knowledge-tips.component.scss']
})
export class KnowledgeTipsComponent implements OnInit, OnDestroy {

  constructor(private knowledgeService: KnowledgeService) { }

  subscriptions: Subscription[] = [];

  @Input()
  knowledge: KnowledgeDto

  ngOnInit(): void {

    this.subscriptions.push(

    )

  }

  closeTips() {
    this.knowledgeService.closeKnowledgeTips();
  }

  ngOnDestroy() {

  }

}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentDto, KnowledgeDto } from 'src/app/shared/models/knowledge.model';
import { KnowledgeService } from 'src/app/shared/services/knowledge.service';

@Component({
  selector: 'app-knowledge-content-list',
  templateUrl: './knowledge-content-list.component.html',
  styleUrls: ['./knowledge-content-list.component.scss']
})
export class KnowledgeContentListComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  contents: ContentDto[];

  constructor(private knowledgeService: KnowledgeService) {
  }

  @Input()
  knowledge: KnowledgeDto;

  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.subscriptions.push(

      this.knowledgeService.getKnowledgeContents(this.knowledge.id).subscribe({
        next: content => {
          this.contents = content;
          this.isLoading = false;
        }
      })


    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(e => e.unsubscribe())
  }


}

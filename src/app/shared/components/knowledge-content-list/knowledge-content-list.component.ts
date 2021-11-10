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
  _contents: ContentDto[];

  get contents() {
    if (this.filterContent) {
      return this._contents
        .filter(e => e.contentType.toLocaleLowerCase() === this.filterContent.toLocaleLowerCase())
        .slice(0, this.limit)
    }

    return this._contents;
  }

  constructor(private knowledgeService: KnowledgeService) {
  }

  @Input()
  knowledge: KnowledgeDto;

  @Input()
  columns = 1;

  @Input()
  filterContent = null;

  @Input()
  limit = 3;

  isLoading = false;

  ngOnInit(): void {
    this._contents = this.knowledge.contents;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(e => e.unsubscribe())
  }


}

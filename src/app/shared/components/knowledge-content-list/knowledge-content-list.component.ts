import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentDto, KnowledgeDetailsDto, KnowledgeDto } from 'src/app/shared/models/knowledge.model';
import { KnowledgeLevel } from 'src/app/shared/models/user.model';
import { KnowledgeService } from 'src/app/shared/services/knowledge.service';
import { BaseDataFetchComponent } from './../base-data-fetching.component';

@Component({
  selector: 'app-knowledge-content-list',
  templateUrl: './knowledge-content-list.component.html',
  styleUrls: ['./knowledge-content-list.component.scss']
})
export class KnowledgeContentListComponent extends BaseDataFetchComponent implements OnInit {

  subscriptions: Subscription[] = [];
  _contents: ContentDto[] = [];

  get contents() {

    let contents = this._contents;

    if (this.filterContentLevel) {
      contents = contents
        .filter(e => e.knowledgeLevel.toLocaleLowerCase() === this.filterContentLevel.toLocaleLowerCase())
    }

    if (this.filterContent) {
      contents = contents
        .filter(e => e.contentType.toLocaleLowerCase() === this.filterContent.toLocaleLowerCase())
    }

    contents = contents.slice(0, this.limit);



    return contents;
  }

  constructor(private knowledgeService: KnowledgeService) {
    super();
  }

  @Input()
  knowledge: KnowledgeDto | KnowledgeDetailsDto;

  @Input()
  columns = 1;

  @Input()
  filterContent = null;

  @Input()
  filterContentLevel: KnowledgeLevel = null

  @Input()
  limit = 3;

  isLoading = false;

  ngOnInit(): void {


    if ((this.knowledge as KnowledgeDetailsDto).contents?.length) {
      this._contents = (this.knowledge as KnowledgeDetailsDto).contents;
    }

    if (!this._contents?.length) {
      this.isLoading = true;

      this.addSub(
        this.knowledgeService.getKnowledgeContents(this.knowledge.id).subscribe({
          next: val => {
            this.isLoading = false;
            this._contents = val;
          },
          error: _err => {
            this.isLoading = false
          }
        })
      )
    }


  }


}

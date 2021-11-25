import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { KnowledgeDetailsDto } from './../shared/models/knowledge.model';
import { KnowledgeLevel } from './../shared/models/user.model';

@Component({
  selector: 'app-knowledge-page',
  templateUrl: './knowledge-page.component.html',
  styleUrls: ['./knowledge-page.component.scss']
})
export class KnowledgePageComponent implements OnInit {
  subscriptions: Subscription[] = [];

  knowledge: KnowledgeDetailsDto = this.route.snapshot.data.knowledge;

  private _knowledgeLevelFilter?: KnowledgeLevel;

  get knowledgeLevelFilter() {
    return this._knowledgeLevelFilter;
  }

  set knowledgeLevelFilter(knowledgeLevel: KnowledgeLevel) {
    if (this._knowledgeLevelFilter === knowledgeLevel) {
      delete this._knowledgeLevelFilter;
    } else {
      this._knowledgeLevelFilter = knowledgeLevel;
    }

  }

  contents: any;

  tiposConteudo = [
  'CURSO',
	'PODCAST',
	'ARTIGO',
	'VÍDEO',
	'PLAYLIST',
	'POST',
  ]

  constructor(private route: ActivatedRoute) { }

  hasContentType(contentType: string, knowledge: KnowledgeDetailsDto) {
    return knowledge.contents.find(e => e.contentType === contentType);
  }

  ngOnInit(): void {
    this.subscriptions.push(


    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(e => e.unsubscribe())
  }



}

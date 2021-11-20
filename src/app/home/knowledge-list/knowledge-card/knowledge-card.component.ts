import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KnowledgeDto } from './../../../shared/models/knowledge.model';

@Component({
  selector: 'app-knowledge-card',
  templateUrl: './knowledge-card.component.html',
  styleUrls: ['./knowledge-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KnowledgeCardComponent implements OnInit {

  constructor() { }

  @Input()
  knowledge: KnowledgeDto;


  ngOnInit(): void {
  }

}

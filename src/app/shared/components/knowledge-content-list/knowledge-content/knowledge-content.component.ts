import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContentDto } from 'src/app/shared/models/knowledge.model';

@Component({
  selector: 'app-knowledge-content',
  templateUrl: './knowledge-content.component.html',
  styleUrls: ['./knowledge-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KnowledgeContentComponent implements OnInit {

  constructor() { }

  @Input()
  content: ContentDto


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { KnowledgeDto } from '../shared/models/knowledge.model';

@Component({
  selector: 'app-knowledge-page',
  templateUrl: './knowledge-page.component.html',
  styleUrls: ['./knowledge-page.component.scss']
})
export class KnowledgePageComponent implements OnInit {
  subscriptions: Subscription[] = [];

  knowledge: KnowledgeDto = this.route.snapshot.data.knowledge;

  contents: any;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.subscriptions.push(


    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(e => e.unsubscribe())
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KnowledgeTipsComponent } from 'src/app/home/knowledge-tips/knowledge-tips.component';
import { ContentDto, KnowledgeDto } from '../models/knowledge.model';
import { environment as env } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getKnowledgeContents(id: number) {
    return this.http.get<ContentDto[]>(`${env.api}/jobs/knowledge/${id}/contents`)
  }

  getKnowledges() {
    return this.http.get<KnowledgeDto[]>(`${env.api}/jobs/knowledge`)
  }

  getKnowledge(id: number) {
    return this.http.get<KnowledgeDto>(`${env.api}/jobs/knowledge/${id}`)
  }

  popKnowledgeTips(knowledge: KnowledgeDto) {
    const tipsDialog = this.dialog.open(KnowledgeTipsComponent);
    tipsDialog.componentInstance.knowledge = knowledge;
  }

  closeKnowledgeTips() {
    this.dialog.closeAll();
  }

}

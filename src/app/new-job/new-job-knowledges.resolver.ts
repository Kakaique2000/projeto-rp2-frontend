import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { KnowledgeDto } from 'src/app/shared/models/knowledge.model';
import { KnowledgeService } from '../shared/services/knowledge.service';

@Injectable({
  providedIn: 'root'
})
export class NewJobKnowledgesResolver implements Resolve<KnowledgeDto[]> {

  constructor(private knowledgeService: KnowledgeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KnowledgeDto[]> {
    return this.knowledgeService.getKnowledges()
  }
}

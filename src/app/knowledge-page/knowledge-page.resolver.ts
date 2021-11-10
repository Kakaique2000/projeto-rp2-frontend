import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { KnowledgeDto } from '../shared/models/knowledge.model';
import { KnowledgeService } from './../shared/services/knowledge.service';

@Injectable({
  providedIn: 'root'
})
export class KnowledgePageResolver implements Resolve<KnowledgeDto> {

  constructor(private knowledgeService: KnowledgeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KnowledgeDto> {
    return this.knowledgeService.getKnowledge(route.params.id).pipe(
      take(1),
    )}
}

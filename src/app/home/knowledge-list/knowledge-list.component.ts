import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { MemoryPage } from 'src/app/shared/utils/page.util';
import { BaseDataFetchComponent } from './../../shared/components/base-data-fetching.component';
import { KnowledgeDto } from './../../shared/models/knowledge.model';
import { KnowledgeService } from './../../shared/services/knowledge.service';
import { SnackHelperService } from './../../shared/snack-helper.service';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.scss']
})
export class KnowledgeListComponent extends BaseDataFetchComponent implements OnInit {

  constructor(
    private knowledgeService: KnowledgeService,
    private snack: SnackHelperService,
  ) {
    super();
  }

  @Input()
  searching = false;
  knowledges: KnowledgeDto[] = [];
  knowledgesPage: MemoryPage<KnowledgeDto> = new MemoryPage([]);
  knowledgeSearch = new FormControl('');

  knowledgesFiltered$: Observable<KnowledgeDto[]> = this.knowledgeSearch
    .valueChanges
    .pipe(
      startWith(''),
      map((val: string) => this.knowledges
        .filter(k => k.name.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
      ),
      tap(e => this.knowledgesPage.setContent(e)),
      switchMap(() => this.knowledgesPage.content$)
  );

  disableRightButton() {
    return this.knowledgesPage.totalPages
  }


  ngOnInit(): void {

    this.isLoading = true;
    this.addSub(

      this.knowledgeService.getKnowledges().subscribe({
        next: val => {
          this.knowledges = val;
          this.knowledgeSearch.setValue(this.knowledgeSearch.value)
          this.isLoading = false;
        },
        error: err => {
          this.isLoading = false;
          this.snack.okTransacao('ocorreu um erro ao carregar os conhecimentos')
        }
      })

    )
  }

}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KnowledgeDto } from '../../models/knowledge.model';
import { SnackHelperService } from '../../snack-helper.service';
import { KnowledgeService } from './../../services/knowledge.service';
import { BaseDataFetchComponent } from './../base-data-fetching.component';

@Component({
  selector: 'app-knowledge-multiple-select',
  templateUrl: './knowledge-multiple-select.component.html',
  styleUrls: ['./knowledge-multiple-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KnowledgeMultipleSelectComponent extends BaseDataFetchComponent implements OnInit {

  constructor(
    private knowledgeService: KnowledgeService,
    private snack: SnackHelperService
  ) { super() }

  knowledgesSelected: KnowledgeDto[] = [];
  knowledgeSearch = new FormControl('');
  knowledges: KnowledgeDto[] = [];

  @Output()
  knowledgeSelect = new EventEmitter<KnowledgeDto[]>();

  @Input()
  label = '';

  @Input()
  maxSelection = 5;

  get knowledgesFiltered() {
    return this.knowledges
    .filter(e => e.name.toLocaleLowerCase().includes(this.knowledgeSearch.value.toLocaleLowerCase()))
    .filter(e => !this.knowledgesSelected.find(selected => selected.id === e.id))
  }


  ngOnInit(): void {
    this.addSub(

      this.knowledgeService.getKnowledges().subscribe({
        next: val => this.knowledges = val,
        error: _err => this.snack.okTransacao('Ops, ocorreu um erro ao carregar os conhecimentos')
      })

    )
  }

  addKnowledge(knowledge: KnowledgeDto) {
    this.knowledgeSearch.setValue('');
    (document.activeElement as HTMLElement).blur();
    if (this.knowledgesSelected.find(e => e.id === knowledge.id)) {
      return
    }
    this.knowledgesSelected.push(knowledge);
    this.knowledgeSelect.emit(this.knowledgesSelected);
  }



  removeKnowledge(knowledge: KnowledgeDto) {
    const index = this.knowledgesSelected.findIndex(e => e.id === knowledge.id)
    this.knowledgesSelected.splice(index, 1);
    // this.snack.okTransacao('você removeu o conhecimento: ' + knowledge.name);
  }

}

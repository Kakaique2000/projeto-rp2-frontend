import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KnowledgeDto } from './../../models/knowledge.model';
import { KnowledgeLevel, UserKnowledgeForm } from './../../models/user.model';
import { KnowledgeService } from './../../services/knowledge.service';
import { UserService } from './../../services/user.service';
import { SnackHelperService } from './../../snack-helper.service';
import { BaseDataFetchComponent } from './../base-data-fetching.component';

@Component({
  selector: 'app-add-knowledge',
  templateUrl: './add-knowledge.component.html',
  styleUrls: ['./add-knowledge.component.scss']
})
export class AddKnowledgeComponent extends BaseDataFetchComponent implements OnInit {

  constructor(
    private knowledgeService: KnowledgeService,
    private userService: UserService,
    private snack: SnackHelperService
  ) { super() }

  knowledges: KnowledgeDto[] = [];

  loadingUserUpdate = false;

  @Input()
  isProfile = true;

  @Output()
  createUserKnowledge = new EventEmitter<UserKnowledgeForm>();

  knowledgeControl = new FormControl('');
  knowledgeLevelControl = new FormControl('');

  get invalidKnowledge() {
    return ({
      erroKnowledgeLevel: this.knowledgeLevelControl.value === '',
      erroKnowledgeValue: !this.knowledges.find(e => e.name.toLocaleLowerCase() === this.knowledgeControl.value?.toLocaleLowerCase())
    })
  }

  get knowledgesFiltered() {
    return this.knowledges
      .filter(e => e.name.toLocaleLowerCase().includes(this.knowledgeControl.value?.toLocaleLowerCase()))
  }

  userKnowledgeSave() {
    const knowledgeName = this.knowledgeControl.value as string;
    const knowledgeId = this.knowledges
      .find(e => e.name.toLocaleLowerCase() === knowledgeName.toLocaleLowerCase()).id;

    const knowledgeLevel = this.knowledgeLevelControl.value as KnowledgeLevel;

    const knowledge = {
      knowledgeId,
      knowledgeLevel
    }

    this.loadingUserUpdate = true
    this.addSub(
      this.userService.patchLoggedUser({ knowledges: [knowledge] }).subscribe({
        next: e => {
          this.loadingUserUpdate = false;
          this.createUserKnowledge.emit(knowledge);
          this.snack.okTransacao('conhecimento adicionado com sucesso')
        },
        error: err => {
          this.loadingUserUpdate = false;
          this.snack.okTransacao('ops, ocorreu um erro ao adicionar o conhecimento')
        }
      })
    )
  }

  ngOnInit(): void {
    this.addSub(

      this.knowledgeService.getKnowledges().subscribe({
        next: knowledge => this.knowledges.push(...knowledge)
      })

    )
  }

}

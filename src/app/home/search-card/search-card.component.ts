import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeLoginService } from 'src/app/login-home/login-home.service';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

  searchQuery = ''
  @Input() contracted = false;
  @Output() contractedChange = new EventEmitter<boolean>();
  @Output() paramChange = new EventEmitter();

  constructor(public ls: HomeLoginService) { }

  ngOnInit() {
  }

  setContracted(contracted: boolean) {
    this.contracted = contracted;
    this.contractedChange.emit(this.contracted);
  }

  search(term: string) {
    this.paramChange.emit({type: 'query', data: term});
  }

  emitParamChange(data) {
    this.paramChange.emit(data);
  }
}

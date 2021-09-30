import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ISalary } from './search-params.models';
import { SearchParamsService } from './search-params.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-params',
  templateUrl: './search-params.component.html',
  styleUrls: ['./search-params.component.scss']
})
export class SearchParamsComponent implements OnInit {

  @Output() selectEvent = new EventEmitter();

  categoriaSelected: string;
  salarySelected: ISalary;

  categorias: string[] = [];
  salaries: ISalary[] = [];


  constructor(private searchParamsService: SearchParamsService) { }

  selectCategoria(categoria: string) {
    this.categoriaSelected = categoria;

    this.emitChange({
      type: 'category',
      data: categoria,
    });
  }

  selectSalary(salary: ISalary) {
    this.salarySelected = salary;

    this.emitChange({
      type: 'salary',
      data: salary.id,
    });
  }

  emitChange(data) {
    this.selectEvent.emit(data);
  }

  ngOnInit() {
    this.searchParamsService.getCategorias().subscribe(
      categorias => this.categorias = ['Todos', ...Object.values(categorias)]
    );

    this.searchParamsService.getSalaries().subscribe(salaries => {
      const data = Object.keys(salaries).map((key) => {
        return {
          id: key,
          label: salaries[key],
        };
      });

      data.sort((x, y) => (x.label > y.label) ? 1 : -1);
      this.salaries = [{id: null, label: 'Todos'}, ...data];
    });

  }

}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ISalary } from './search-params.models';

@Injectable()
export class SearchParamsService {

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(env.api + '/jobs/occupations');
  }

  getSalaries() {
    return this.http.get(env.api + '/jobs/salaries');
  }

}

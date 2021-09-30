import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { CompanyModel } from './new-company.model';
import { CookieService } from '../cookie.service';

const API_URL = env.api + '/users/';
@Injectable({
  providedIn: 'root'
})
export class NewCompanyService {

  public _url: string = `http://localhost:8080/users/`;


  constructor(private http: HttpClient,
    private cookie: CookieService) { }


  createCompany(newCompany: CompanyModel) {
    const headertste = 'Bearer ' + this.cookie.get("token")

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': headertste
    });

    let options = { headers: headers };

    const cnpj = newCompany.cnpj;
    const name = newCompany.name;
    const street = newCompany.street;
    const number = newCompany.number;
    const complement = newCompany.complement;
    const cep = newCompany.cep;
    const city = newCompany.city;
    const state = newCompany.state;

    return this.http.post<CompanyModel>(`${API_URL}${this.cookie.get('userId')}/companies`,
    { cnpj, name, street, number, complement, cep, city, state }, options);
  }


  getAllCompanies() {
    const header = {
      'Authorization': 'Bearer ' + this.cookie.get("token")
    }

    const headerToken = {
      headers: new HttpHeaders(header),
    };

    return this.http.get<CompanyModel[]>(`${API_URL}${this.cookie.get('userId')}/companies`, headerToken);
  }




}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyModel } from './new-company.model';
import { NewCompanyService } from './new-company.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent implements OnInit {

  Object = Object;
  companyForm: FormGroup;
  listCompanies :CompanyModel[] =[] ;

  constructor(private formBuilder: FormBuilder,
    private router : Router, private newCompanyService: NewCompanyService) {  }

  ngOnInit() { 
    this.configForm()
    this.getCompanies()
    
    }

  createCompany(){
    const newCompany = this.companyForm.getRawValue() as CompanyModel;
    console.log(newCompany)
        this.newCompanyService.createCompany(newCompany)
        .subscribe((res) => {
          alert("companhia criada")
          this.getCompanies()  
        },
        erro => {
            alert('Compania inválida, revise os campos cadastrados novamente');
        })
  }

  getCompanies() {
    this.newCompanyService.getAllCompanies()
        .subscribe((res) => {
          this.listCompanies = res['content'] as CompanyModel[]
          console.log(this.listCompanies)
          
        },
        erro => {
            console.log(erro);
        })
  }

  configForm() {
    this.companyForm = this.formBuilder.group({
      cnpj: ['',
          [
              Validators.required,
              Validators.minLength(14),
          ]
      ],
      name: ['',
          [
              Validators.required
          ]
      ],
      street: ['',
          [
              Validators.required
          ]
      ],
      number: ['',
          [
              Validators.required
          ]
      ],
      complement: ['',
      ],
      cep: ['',
          [
              Validators.required
          ]
      ],
      city: ['',
          [
              Validators.required
          ]
      ],
      state: ['',
          [
              Validators.required
          ]
      ]
  });

  }
  

}

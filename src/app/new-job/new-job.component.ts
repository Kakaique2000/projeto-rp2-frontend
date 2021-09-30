import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyModel } from '../new-company/new-company.model';
import { NewJob, TypeJob, TypeSalary } from './new-job.model';
import { NewJobService } from './new-job.service';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit { 

  Object = Object;
  areas;
  salary;
  jobForm: FormGroup;
  listCompanies : CompanyModel[] = []

  constructor(private formBuilder: FormBuilder,
    private router : Router, private newJobService: NewJobService) {  }

  ngOnInit() {
    this.configForm()
    this.callAreas()
    this.callCompanies()    
  }

  callAreas() {
    this.newJobService.getAreas()
        .subscribe((res : TypeJob) => {
         this.areas = res
         console.log(this.areas)
        },
        erro => {
          console.log(erro)
        });
  }

  callCompanies() {
    this.newJobService.getAllCompanies()
        .subscribe((res : CompanyModel[]) => {
          console.log(res)
         this.listCompanies = res['content'] as CompanyModel[]
        },
        erro => {
          console.log(erro)
        });
  }

  createJob(){
    const newJob = this.jobForm.getRawValue() as NewJob;
        this.newJobService.createJob(newJob)
        .subscribe(() => {
          alert('Vaga Criada')
          this.routerTo('home')
        },
        erro => {
          alert('Vaga inválida')
        })
  }

  routerTo(route : String) {
    this.router.navigateByUrl(route.toString());
  }

  configForm() {
    this.jobForm = this.formBuilder.group({
      title: ['',
          [
              Validators.required,
              Validators.minLength(2)
          ]
      ],
      description: ['',
          [
              Validators.required
          ]
      ],
      salary: ['',
          [
              Validators.required
          ]
      ],
      occupation: ['',
          [
              Validators.required
          ]
      ],
      companyId: ['',
          [
              Validators.required
          ]
      ]
  });

  }

}

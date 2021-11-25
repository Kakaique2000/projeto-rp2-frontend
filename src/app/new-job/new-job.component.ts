import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyModel } from '../new-company/new-company.model';
import { NewJob, TypeJob } from '../shared/models/new-job.model';
import { KnowledgeDto } from './../shared/models/knowledge.model';
import { SnackHelperService } from './../shared/snack-helper.service';
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
  listCompanies: CompanyModel[] = [];
  showDescriptionPreview = true;
  knowledgesSelected: KnowledgeDto[] = [];

  constructor(private formBuilder: FormBuilder,
    private router: Router, private newJobService: NewJobService,
    private route: ActivatedRoute,
  private snack: SnackHelperService) { }


  ngOnInit() {
    this.configForm()
    this.callAreas()
    this.callCompanies()
  }

  callAreas() {
    this.newJobService.getAreas()
      .subscribe((res: TypeJob) => {
        this.areas = res
        console.log(this.areas)
      },
        erro => {
          console.log(erro)
        });
  }

  callCompanies() {
    this.newJobService.getAllCompanies()
      .subscribe((res: CompanyModel[]) => {
        console.log(res)
        this.listCompanies = res['content'] as CompanyModel[]
      },
        erro => {
          console.log(erro)
        });
  }

  setKnowledges(knowledges: KnowledgeDto[]) {
    this.knowledgesSelected = knowledges;
  }

  createJob() {
    const newJob = this.jobForm.getRawValue() as NewJob;

    newJob.knowledges = this.knowledgesSelected;

    this.newJobService.createJob(newJob)
      .subscribe(() => {
        alert('Vaga Criada')
        this.routerTo('home')
      },
        erro => {
          alert('Vaga inválida')
        })
  }

  routerTo(route: String) {
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
      fullDescription: ['',
        [
          Validators.required
        ]
      ],
      salary: ['',
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

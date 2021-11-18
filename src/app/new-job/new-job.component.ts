import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  knowledgesSelected: KnowledgeDto[] = []

  knowledgeSearch = new FormControl('');

  constructor(private formBuilder: FormBuilder,
    private router: Router, private newJobService: NewJobService,
    private route: ActivatedRoute,
  private snack: SnackHelperService) { }

  knowledges: KnowledgeDto[] = this.route.snapshot.data.knowledges;

  get knowledgesFiltered() {
    return this.knowledges
    .filter(e => e.name.toLocaleLowerCase().includes(this.knowledgeSearch.value.toLocaleLowerCase()))
    .filter(e => !this.knowledgesSelected.find(selected => selected.id === e.id))

  }

  ngOnInit() {
    this.configForm()
    this.callAreas()
    this.callCompanies()
  }

  addKnowledge(knowledge: KnowledgeDto) {
    this.knowledgeSearch.setValue('');
    (document.activeElement as HTMLElement).blur();
    if (this.knowledgesSelected.find(e => e.id === knowledge.id)) {
      return
    }
    this.knowledgesSelected.push(knowledge);
  }

  removeKnowledge(knowledge: KnowledgeDto) {
    const index = this.knowledgesSelected.findIndex(e => e.id === knowledge.id)
    this.knowledgesSelected.splice(index, 1);
    // this.snack.okTransacao('você removeu o conhecimento: ' + knowledge.name);
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

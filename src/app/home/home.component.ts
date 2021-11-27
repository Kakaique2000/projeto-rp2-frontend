import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { JobListService } from 'src/app/home/job-list/job-list.service';
import { JobDto } from '../shared/models/job.models';
import { HomeLoginService } from './../login-home/login-home.service';
import { KnowledgeDto } from './../shared/models/knowledge.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contractedSearchCard: boolean;
  jobs: JobDto[] = [];
  filter = "";

  categorySelected: any;
  salarySelected: any;
  query: string;

  searchingKnowledges = false;

  cardSelected?: JobDto;
  isLoading = false;

  isUser$ = this.homeLoginService.loggedUser$
    .pipe(
      map(e => e?.roles?.find(role => role.name === 'ROLE_USER')
      )
    );
  knowledgesParams: number[];

  constructor(private serviceJob: JobListService, private homeLoginService: HomeLoginService) { }

  shrinkSearchCard(contracted: boolean) {

    this.contractedSearchCard = contracted;
  }

  ngOnInit() {
    this.searchJobs();
    document.title = "Hefest - Vagas";
  }

  updateParams(param) {
    if (param.type === 'category') {
      this.categorySelected = param.data;
    } else if (param.type === 'salary') {
      this.salarySelected = param.data;
    } else {
      this.query = param.data;
    }

    this.searchJobs();
  }

  updateKnowledge(knowledges: KnowledgeDto[]) {
    this.knowledgesParams = knowledges.map(e => e.id)

    this.searchJobs();
  }

  searchJobs() {
    this.isLoading = true;
    this.serviceJob.getJobs(this.categorySelected, this.salarySelected, this.query, this.knowledgesParams)
      .subscribe((res: any) => {
        this.isLoading = false;
        console.log(res);
        this.jobs = res['content'] as JobDto[];
        console.log(this.jobs);
      },
        erro => {
          this.isLoading = false;
          console.log(erro);
        });
  }

}

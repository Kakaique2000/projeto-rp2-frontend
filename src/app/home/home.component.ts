import { Component, OnInit } from '@angular/core';
import { JobDto } from '../shared/models/job.models';
import { JobListService } from './job-list/job-list.service';

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

  cardSelected?: JobDto;

  constructor(private serviceJob: JobListService) { }

  shrinkSearchCard(contracted: boolean) {

    this.contractedSearchCard = contracted;
  }

  ngOnInit() {
    this.searchJobs();
  }

  updateParams(param) {
    if (param.type === 'category') {
      this.categorySelected = param.data;
    } else if (param.type === 'salary') {
      this.salarySelected = param.data;
    } else  {
      this.query = param.data;
    }

    this.searchJobs();
  }

  searchJobs() {
    this.serviceJob.getJobs(this.categorySelected, this.salarySelected, this.query)
      .subscribe((res: any) => {
        console.log(res);
        this.jobs = res['content'] as JobDto[];
        console.log(this.jobs);
      },
        erro => {
          console.log(erro);
        });
  }

}

import { Component, OnInit } from '@angular/core';
import { JobListService } from 'src/app/home/job-list/job-list.service';
import { JobDto } from '../shared/models/job.models';

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
  isLoading = false;

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
    this.isLoading = true;
    this.serviceJob.getJobs(this.categorySelected, this.salarySelected, this.query)
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

import { Component, OnInit } from '@angular/core';
import { JobListService } from 'src/app/home/job-list/job-list.service';
import { KnowledgeDto } from 'src/app/shared/models/knowledge.model';
import { TypeSalary } from 'src/app/shared/models/new-job.model';
@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  constructor(private jobService: JobListService) { }

  showSelect = false;

  salaries: TypeSalary;
  knowledges: KnowledgeDto[] = [];

  ngOnInit(): void {
    this.jobService.getSalaries().subscribe({
      next: salaries => {
        this.salaries = salaries
      }
    })
    this.jobService.getKnowledges().subscribe({
      next: knowledges => {
        this.knowledges = knowledges;
      }
    })
  }

}

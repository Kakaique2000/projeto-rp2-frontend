import { Component, OnInit } from '@angular/core';
import { TypeSalary } from 'src/app/shared/models/new-job.model';
import { KnowledgeDto } from '../../shared/models/job.models';
import { JobListService } from '../job-list/job-list.service';

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

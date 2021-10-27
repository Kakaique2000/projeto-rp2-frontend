import { Component, OnInit } from '@angular/core';
import { TypeSalary } from 'src/app/new-job/new-job.model';
import { Knowledge } from '../job-list/job-list.models';
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
  knowledges: Knowledge[] = [];

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

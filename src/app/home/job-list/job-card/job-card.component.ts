import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobDto } from '../../../shared/models/job.models';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  constructor() { }

  @Input()
  job: JobDto;

  @Input()
  selected = false;

  @Output()
  onApply = new EventEmitter<JobDto>();

  ngOnInit(): void {
  }

}

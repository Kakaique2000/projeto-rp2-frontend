import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { JobModel } from '../job-list.models';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  constructor() { }

  @Input()
  job: JobModel;

  @Output()
  onApply = new EventEmitter<JobModel>();

  ngOnInit(): void {
  }

}

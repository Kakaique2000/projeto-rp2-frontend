import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobDto } from '../../shared/models/job.models';
import { JobListService } from './job-list.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  @Input() jobs: JobDto[] = [];
  @Input() showingPreview = false;

  @Output()
  selectCard = new EventEmitter<JobDto>();

  selectedId = -1;

  onCardClick(job: JobDto) {
    this.selectCard.emit(job);
    this.selectedId = job.id;
  }

  constructor(private serviceJob: JobListService) { }

  ngOnInit() {}

  apply(event) {
    console.log(event)
    this.serviceJob.apply(event)
        .subscribe((res) => {
         alert('Candidatura efetiva com sucesso, boa sorte!')
        },
        erro => {
          console.log(erro)
        });
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobListService } from 'src/app/home/job-list/job-list.service';
import { HomeLoginService } from 'src/app/login-home/login-home.service';
import { JobDto } from '../../shared/models/job.models';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  @Input() jobs: JobDto[] = [];
  @Input() showingPreview = false;

  @Input() isLoading = false;

  @Output()
  selectCard = new EventEmitter<JobDto>();

  selectedId = -1;
  loadingId = -1

  onCardClick(job: JobDto) {
    this.selectCard.emit(job);
    this.selectedId = job.id;
  }

  constructor(public serviceJob: JobListService, private homeLoginService: HomeLoginService) { }

  ngOnInit() { }

  apply(event: JobDto) {
    this.loadingId = event.id;
    this.serviceJob.apply(event.id)
    .subscribe((res) => {
      this.loadingId = -1;
         alert('Candidatura efetiva com sucesso, boa sorte!')
        },
        erro => {
          console.log(erro)
        });
  }

}

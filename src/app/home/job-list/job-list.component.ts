import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobListService } from 'src/app/home/job-list/job-list.service';
import { HomeLoginService } from 'src/app/login-home/login-home.service';
import { SnackHelperService } from 'src/app/shared/snack-helper.service';
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

  searchQuery = ''
  @Input() contracted = false;
  @Output() contractedChange = new EventEmitter<boolean>();
  @Output() paramChange = new EventEmitter();

  selectedId = -1;
  loadingId = -1

  onCardClick(job: JobDto) {
    this.selectCard.emit(job);
    this.selectedId = job.id;
  }

  constructor(public serviceJob: JobListService, private homeLoginService: HomeLoginService, private snack: SnackHelperService) { }

  ngOnInit() { }

  apply(event: JobDto) {
    this.loadingId = event.id;
    this.serviceJob.apply(event.id)
    .subscribe((res) => {
      this.loadingId = -1;
      this.snack.okTransacao('candidatura efetivada com sucesso, boa sorte!')
    },
        erro => {
          console.log(erro)
        });
  }

  setContracted(contracted: boolean) {
    this.contracted = contracted;
    this.contractedChange.emit(this.contracted);
  }

  search(term: string) {
    this.paramChange.emit({type: 'query', data: term});
  }

  emitParamChange(data) {
    this.paramChange.emit(data);
  }

}

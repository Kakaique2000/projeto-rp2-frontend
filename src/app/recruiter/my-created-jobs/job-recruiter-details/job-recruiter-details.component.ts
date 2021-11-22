import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { JobRecruiterDetailsDto } from 'src/app/shared/models/job.models';
import { UserDto } from 'src/app/shared/models/user.model';
import { BreakpointUtils } from 'src/app/shared/utils/breakpoint.util';
import { JobListService } from './../../../home/job-list/job-list.service';
import { BaseDataFetchComponent } from './../../../shared/components/base-data-fetching.component';
import { SnackHelperService } from './../../../shared/snack-helper.service';

@Component({
  selector: 'app-job-recruiter-details',
  templateUrl: './job-recruiter-details.component.html',
  styleUrls: ['./job-recruiter-details.component.scss']
})
export class JobRecruiterDetailsComponent extends BaseDataFetchComponent implements OnInit, OnChanges {

  constructor(
    public breakpointUtils: BreakpointUtils,
    private jobService: JobListService,
    private snack: SnackHelperService
  ) { super() }

  @Input()
  job: JobRecruiterDetailsDto;

  @Output()
  jobDeleted = new EventEmitter();

  @ViewChild('main')
  mainElement: ElementRef<HTMLElement>

  @ViewChild('inscricoes')
  inscricoesElement: ElementRef<HTMLElement>

  _expand = false;


  jobApplicationGrid$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications ?? [])

  jobApplicationGridApproved$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications.filter(e => e.approved === true) ?? [])
  jobApplicationGridPending$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications.filter(e => e.approved === null) ?? [])
  jobApplicationGridRejected$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications.filter(e => e.approved === false) ?? [])


  get expand() {
    return this._expand;
  }

  set expand(value) {
    if (value === true) {
      this.updateMaxHeightCard()
    } else {
      this.mainElement.nativeElement.style.maxHeight = '0px';
    }
    this._expand = value;
  }

  updateMaxHeightCard() {
    console.log('atualizando altura');

    setTimeout(() => {
      this.mainElement.nativeElement.style.maxHeight = this.mainElement.nativeElement.scrollHeight + 'px';
    }, 50);
  }

  ngOnInit(): void {
    console.log(this.job);
  }

  approveRejectUser(user: UserDto, approve: boolean) {
    this.addSub(
      this.jobService.modifyApproval(this.job.id, user.id, approve).subscribe({
        next: val => {
          this.addSub(this.jobService.getCreatedJobs()
            .subscribe({
              next: val => {
                this.job = val.content.find(e => e.id === this.job.id);
                if (this.expand) {
                  this.updateMaxHeightCard();
                }
                this.resetJobApplicationGrid();
              }
            }))
          this.snack.okTransacao('candidatura aprovada com sucesso')
        },
        error: err => {

          this.snack.okTransacao('ops, ocorreu um erro com a transação')
        }
      })
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.job) {
      this.resetJobApplicationGrid();
      if (this.expand) {
        this.updateMaxHeightCard();
      }
    }
  }

  deleteJob() {
    const confirmation = confirm('Você tem certeza que quer excluir a vaga ' + this.job.title + '?');
    if (confirmation) {
      this.addSub(
        this.jobService.deleteJob(this.job).subscribe({
          next: _e => {
            this.snack.okTransacao('Vaga removida com sucesso!');
            this.jobDeleted.emit();
        },
          error: _e => {
            this.snack.okTransacao('ops, ocorreu um erro com a transação');

        }
        })
      )
    }
  }

  resetJobApplicationGrid() {
    this.jobApplicationGridApproved$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications.filter(e => e.approved === true) ?? [])
    this.jobApplicationGridPending$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications.filter(e => e.approved === null) ?? [])
    this.jobApplicationGridRejected$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications.filter(e => e.approved === false) ?? [])
  }

}

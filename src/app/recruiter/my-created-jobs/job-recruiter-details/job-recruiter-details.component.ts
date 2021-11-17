import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { JobRecruiterDetailsDto } from 'src/app/shared/models/job.models';
import { BreakpointUtils } from 'src/app/shared/utils/breakpoint.util';

@Component({
  selector: 'app-job-recruiter-details',
  templateUrl: './job-recruiter-details.component.html',
  styleUrls: ['./job-recruiter-details.component.scss']
})
export class JobRecruiterDetailsComponent implements OnInit, OnChanges {

  constructor(public breakpointUtils: BreakpointUtils) { }

  @Input()
  job: JobRecruiterDetailsDto;

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.job) {
      this.resetJobApplicationGrid()
      this.updateMaxHeightCard();
    }
  }

  resetJobApplicationGrid() {
    this.jobApplicationGridApproved$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications.filter(e => e.approved === true) ?? [])
    this.jobApplicationGridPending$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications.filter(e => e.approved === null) ?? [])
    this.jobApplicationGridRejected$ = this.breakpointUtils.getAsGrid(this!.job?.jobApplications.filter(e => e.approved === false) ?? [])
  }

}

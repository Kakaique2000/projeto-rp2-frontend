import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { JobRecruiterDetailsDto } from 'src/app/shared/models/job.models';

@Component({
  selector: 'app-job-recruiter-details',
  templateUrl: './job-recruiter-details.component.html',
  styleUrls: ['./job-recruiter-details.component.scss']
})
export class JobRecruiterDetailsComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }

  @Input()
  job: JobRecruiterDetailsDto;

  @ViewChild('main')
  mainElement: ElementRef<HTMLElement>

  @ViewChild('inscricoes')
  inscricoesElement: ElementRef<HTMLElement>

  _expand = false;

  jobApplicationGrid$ = this.breakpointObserver
    .observe(['(min-width: 1024px)', '(min-width: 768px)', '(min-width: 640px)'])
    .pipe(
      map(state => {
        console.log(state.breakpoints);

        if (state.breakpoints['(min-width: 1024px)']) {
          return [
            this.job.jobApplications.filter((_, index) => index % 3 === 0),
            this.job.jobApplications.filter((_, index) => index % 3 === 1),
            this.job.jobApplications.filter((_, index) => index % 3 === 2),
          ]
        }
        if (state.breakpoints['(min-width: 768px)']) {
          return [
            this.job.jobApplications.filter((_, index) => index % 2 === 0),
            this.job.jobApplications.filter((_, index) => index % 2 === 1),
          ]
        }

        return [this.job.jobApplications];
      })
    )


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

}

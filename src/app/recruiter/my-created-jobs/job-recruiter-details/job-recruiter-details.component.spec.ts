import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRecruiterDetailsComponent } from './job-recruiter-details.component';

describe('JobRecruiterDetailsComponent', () => {
  let component: JobRecruiterDetailsComponent;
  let fixture: ComponentFixture<JobRecruiterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRecruiterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRecruiterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

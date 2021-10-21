import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescriptorComponent } from './job-descriptor.component';

describe('JobDescriptorComponent', () => {
  let component: JobDescriptorComponent;
  let fixture: ComponentFixture<JobDescriptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDescriptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

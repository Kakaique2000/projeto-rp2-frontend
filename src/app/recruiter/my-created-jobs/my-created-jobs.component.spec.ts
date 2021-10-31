import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCreatedJobsComponent } from './my-created-jobs.component';

describe('MyCreatedJobsComponent', () => {
  let component: MyCreatedJobsComponent;
  let fixture: ComponentFixture<MyCreatedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCreatedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCreatedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeMultipleSelectComponent } from './knowledge-multiple-select.component';

describe('KnowledgeMultipleSelectComponent', () => {
  let component: KnowledgeMultipleSelectComponent;
  let fixture: ComponentFixture<KnowledgeMultipleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeMultipleSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeMultipleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

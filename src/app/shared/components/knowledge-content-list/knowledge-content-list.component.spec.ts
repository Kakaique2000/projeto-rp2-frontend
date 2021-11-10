import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeContentListComponent } from './knowledge-content-list.component';

describe('KnowledgeContentListComponent', () => {
  let component: KnowledgeContentListComponent;
  let fixture: ComponentFixture<KnowledgeContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeContentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

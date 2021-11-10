import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeContentComponent } from './knowledge-content.component';

describe('KnowledgeContentComponent', () => {
  let component: KnowledgeContentComponent;
  let fixture: ComponentFixture<KnowledgeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

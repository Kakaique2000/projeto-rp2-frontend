import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgePageComponent } from './knowledge-page.component';

describe('KnowledgePageComponent', () => {
  let component: KnowledgePageComponent;
  let fixture: ComponentFixture<KnowledgePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTipsComponent } from './knowledge-tips.component';

describe('KnowledgeTipsComponent', () => {
  let component: KnowledgeTipsComponent;
  let fixture: ComponentFixture<KnowledgeTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

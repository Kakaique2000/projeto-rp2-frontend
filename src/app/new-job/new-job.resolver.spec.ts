import { TestBed } from '@angular/core/testing';
import { NewJobResolver } from './new-job-knowledges.resolver';


describe('NewJobResolver', () => {
  let resolver: NewJobResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewJobResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

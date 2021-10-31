import { TestBed } from '@angular/core/testing';

import { MyCreatedJobsResolver } from './my-created-jobs.resolver';

describe('MyCreatedJobsResolver', () => {
  let resolver: MyCreatedJobsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MyCreatedJobsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

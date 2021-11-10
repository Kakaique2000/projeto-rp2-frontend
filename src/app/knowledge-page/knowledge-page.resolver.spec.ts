import { TestBed } from '@angular/core/testing';

import { KnowledgePageResolver } from './knowledge-page.resolver';

describe('KnowledgePageResolver', () => {
  let resolver: KnowledgePageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(KnowledgePageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

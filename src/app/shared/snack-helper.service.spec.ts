import { TestBed } from '@angular/core/testing';

import { SnackHelperService } from './snack-helper.service';

describe('SnackHelperService', () => {
  let service: SnackHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

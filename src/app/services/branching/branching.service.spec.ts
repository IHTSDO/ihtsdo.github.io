import { TestBed } from '@angular/core/testing';

import { BranchingService } from './branching.service';

describe('BranchingService', () => {
  let service: BranchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

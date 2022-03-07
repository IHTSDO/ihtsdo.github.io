import { TestBed } from '@angular/core/testing';

import { PathingService } from './pathing.service';

describe('PathingService', () => {
  let service: PathingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

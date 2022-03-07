import { TestBed } from '@angular/core/testing';

import { SnomedUtilityService } from './snomed-utility.service';

describe('SnomedUtilityService', () => {
  let service: SnomedUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnomedUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

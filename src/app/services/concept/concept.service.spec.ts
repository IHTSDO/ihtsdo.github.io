import { TestBed } from '@angular/core/testing';

import { ConceptService } from './concept.service';

describe('ConceptService', () => {
  let service: ConceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthoringService } from './authoring.service';

describe('AuthoringService', () => {
  let service: AuthoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

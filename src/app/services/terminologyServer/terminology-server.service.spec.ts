import { TestBed } from '@angular/core/testing';

import { TerminologyServerService } from './terminology-server.service';

describe('TerminologyServerService', () => {
  let service: TerminologyServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminologyServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

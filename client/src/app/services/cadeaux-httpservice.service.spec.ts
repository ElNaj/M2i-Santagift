import { TestBed } from '@angular/core/testing';

import { CadeauxHTTPService } from './cadeaux-http.service';

describe('CadeauxHTTPServiceService', () => {
  let service: CadeauxHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadeauxHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

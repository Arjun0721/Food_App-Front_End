import { TestBed } from '@angular/core/testing';

import { ManagerRegService } from './manager-reg.service';

describe('ManagerRegService', () => {
  let service: ManagerRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

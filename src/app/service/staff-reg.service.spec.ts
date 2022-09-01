import { TestBed } from '@angular/core/testing';

import { StaffRegService } from './staff-reg.service';

describe('StaffRegService', () => {
  let service: StaffRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

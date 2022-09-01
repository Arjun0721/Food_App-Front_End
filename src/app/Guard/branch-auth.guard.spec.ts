import { TestBed } from '@angular/core/testing';

import { BranchAuthGuard } from './branch-auth.guard';

describe('BranchAuthGuard', () => {
  let guard: BranchAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BranchAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

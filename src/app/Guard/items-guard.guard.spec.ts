import { TestBed } from '@angular/core/testing';

import { ItemsGuardGuard } from './items-guard.guard';

describe('ItemsGuardGuard', () => {
  let guard: ItemsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ItemsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

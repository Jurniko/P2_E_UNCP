import { TestBed } from '@angular/core/testing';

import { LimitLevelGuard } from './limit-level.guard';

describe('LimitLevelGuard', () => {
  let guard: LimitLevelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LimitLevelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

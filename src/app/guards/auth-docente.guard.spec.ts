import { TestBed } from '@angular/core/testing';

import { AuthDocenteGuard } from './auth-docente.guard';

describe('AuthDocenteGuard', () => {
  let guard: AuthDocenteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDocenteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

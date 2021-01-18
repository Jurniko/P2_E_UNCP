import { TestBed } from '@angular/core/testing';

import { ExistCodeRoomGuard } from './exist-code-room.guard';

describe('ExistCodeRoomGuard', () => {
  let guard: ExistCodeRoomGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExistCodeRoomGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

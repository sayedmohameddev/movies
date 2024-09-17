import { TestBed } from '@angular/core/testing';

import { DuardGuard } from './duard.guard';

describe('DuardGuard', () => {
  let guard: DuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

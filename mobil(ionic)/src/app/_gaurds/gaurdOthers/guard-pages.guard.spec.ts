import { TestBed, async, inject } from '@angular/core/testing';

import { GuardPagesGuard } from './guard-pages.guard';

describe('GuardPagesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardPagesGuard]
    });
  });

  it('should ...', inject([GuardPagesGuard], (guard: GuardPagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});

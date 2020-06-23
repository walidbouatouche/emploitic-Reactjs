import { TestBed } from '@angular/core/testing';

import { UxService } from './ux.service';

describe('UxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UxService = TestBed.get(UxService);
    expect(service).toBeTruthy();
  });
});

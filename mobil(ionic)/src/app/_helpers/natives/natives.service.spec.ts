import { TestBed } from '@angular/core/testing';

import { NativesService } from './natives.service';

describe('NativesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NativesService = TestBed.get(NativesService);
    expect(service).toBeTruthy();
  });
});

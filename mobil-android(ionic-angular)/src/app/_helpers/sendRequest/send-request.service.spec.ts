import { TestBed } from '@angular/core/testing';

import { SendRequestService } from './send-request.service';

describe('SendRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendRequestService = TestBed.get(SendRequestService);
    expect(service).toBeTruthy();
  });
});

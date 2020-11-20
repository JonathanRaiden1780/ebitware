import { TestBed } from '@angular/core/testing';

import { ClientserviceService } from './clientservice.service';

describe('ClientserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientserviceService = TestBed.get(ClientserviceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EggCounterService } from './egg-counter.service';

describe('EggCounterService', () => {
  let service: EggCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EggCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

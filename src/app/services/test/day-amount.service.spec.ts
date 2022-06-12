import { TestBed } from '@angular/core/testing';

import { DayAmountService } from './day-amount.service';

describe('DayAmountService', () => {
  let service: DayAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

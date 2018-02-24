import { TestBed, inject } from '@angular/core/testing';

import { ProfitsCalculatorService } from './profits-calculator.service';

describe('ProfitsCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfitsCalculatorService]
    });
  });

  it('should be created', inject([ProfitsCalculatorService], (service: ProfitsCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CalcluationService } from './calcluation.service';

describe('CalcluationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcluationService]
    });
  });

  it('should be created', inject([CalcluationService], (service: CalcluationService) => {
    expect(service).toBeTruthy();
  }));
});

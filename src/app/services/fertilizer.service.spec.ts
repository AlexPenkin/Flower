import { TestBed, inject } from '@angular/core/testing';

import { FertilizerService } from './fertilizer.service';

describe('FertilizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FertilizerService]
    });
  });

  it(
    'should be created',
    inject([FertilizerService], (service: FertilizerService) => {
      expect(service).toBeTruthy();
    })
  );
});

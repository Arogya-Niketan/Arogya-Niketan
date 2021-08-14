import { TestBed, async, inject } from '@angular/core/testing';

import { HospitalCreateGuard } from './hospital-create.guard';

describe('HospitalCreateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitalCreateGuard]
    });
  });

  it('should ...', inject([HospitalCreateGuard], (guard: HospitalCreateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

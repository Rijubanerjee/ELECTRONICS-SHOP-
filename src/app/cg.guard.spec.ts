import { TestBed, async, inject } from '@angular/core/testing';

import { CgGuard } from './cg.guard';

describe('CgGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CgGuard]
    });
  });

  it('should ...', inject([CgGuard], (guard: CgGuard) => {
    expect(guard).toBeTruthy();
  }));
});

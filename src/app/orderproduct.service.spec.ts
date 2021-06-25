import { TestBed } from '@angular/core/testing';

import { OrderproductService } from './orderproduct.service';

describe('OrderproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderproductService = TestBed.get(OrderproductService);
    expect(service).toBeTruthy();
  });
});

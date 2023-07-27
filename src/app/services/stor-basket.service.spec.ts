import { TestBed } from '@angular/core/testing';

import { StorBasketService } from './stor-basket.service';

describe('StorBasketService', () => {
  let service: StorBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

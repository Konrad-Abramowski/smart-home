import { TestBed } from '@angular/core/testing';

import { YeelightBulbService } from './yeelight-bulb.service';

describe('YeelightLedBulbService', () => {
  let service: YeelightBulbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YeelightBulbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

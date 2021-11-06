import { TestBed } from '@angular/core/testing';

import { YeelightLedBulbService } from './yeelight-led-bulb.service';

describe('YeelightLedBulbService', () => {
  let service: YeelightLedBulbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YeelightLedBulbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

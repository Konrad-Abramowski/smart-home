import { TestBed } from '@angular/core/testing';

import { RgbParserService } from './rgb-parser.service';

describe('RgbParserService', () => {
  let service: RgbParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RgbParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SwiatwoblerowFrontService } from './swiatwoblerow-front.service';

describe('SwiatwoblerowFrontService', () => {
  let service: SwiatwoblerowFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiatwoblerowFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

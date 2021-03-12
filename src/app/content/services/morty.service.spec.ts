import { TestBed } from '@angular/core/testing';

import { MortyService } from './morty.service';

describe('MortyService', () => {
  let service: MortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

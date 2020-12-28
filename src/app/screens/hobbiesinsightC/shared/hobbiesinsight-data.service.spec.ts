import { TestBed } from '@angular/core/testing';

import { HobbiesinsightDataService } from './hobbiesinsight-data.service';

describe('Hobbies-insightDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HobbiesinsightDataService = TestBed.get(HobbiesinsightDataService);
    expect(service).toBeTruthy();
  });
});

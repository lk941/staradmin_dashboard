import { TestBed } from '@angular/core/testing';

import { ParentportalDataService } from './parentportal-data.service';

describe('ParentportalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentportalDataService = TestBed.get(ParentportalDataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ParentportalService } from './parentportal.service';

describe('ParentportalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentportalService = TestBed.get(ParentportalService);
    expect(service).toBeTruthy();
  });
});

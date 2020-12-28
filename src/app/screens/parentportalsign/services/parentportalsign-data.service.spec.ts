import { TestBed } from '@angular/core/testing';

import { ParentportalsignDataService } from './parentportalsign-data.service';

describe('ParentportalsignDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentportalsignDataService = TestBed.get(ParentportalsignDataService);
    expect(service).toBeTruthy();
  });
});

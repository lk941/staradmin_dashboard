import { TestBed } from '@angular/core/testing';

import { ParentportalsignService } from './parentportalsign.service';

describe('ParentportalsignService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentportalsignService = TestBed.get(ParentportalsignService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TeachAddChildService } from './teach-add-child.service';

describe('TeachAddChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeachAddChildService = TestBed.get(TeachAddChildService);
    expect(service).toBeTruthy();
  });
});

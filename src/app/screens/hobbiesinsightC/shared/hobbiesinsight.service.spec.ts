import { TestBed } from '@angular/core/testing';

import { Hobbiesinsight } from './hobbiesinsight.service';

describe('Hobbiesinsight', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Hobbiesinsight = TestBed.get(Hobbiesinsight);
    expect(service).toBeTruthy();
  });
});

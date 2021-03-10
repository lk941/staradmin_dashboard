import { TestBed } from '@angular/core/testing';

import { ContatoDataService } from './contato11-data.service';

describe('Contato11DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContatoDataService = TestBed.get(ContatoDataService);
    expect(service).toBeTruthy();
  });
});

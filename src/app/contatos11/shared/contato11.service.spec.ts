import { TestBed } from '@angular/core/testing';

import { ContatoService } from './contato11.service';

describe('Contato1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContatoService = TestBed.get(ContatoService);
    expect(service).toBeTruthy();
  });
});

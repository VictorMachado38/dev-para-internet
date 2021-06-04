import { TestBed } from '@angular/core/testing';

import { SalaDeAulaService } from './sala-de-aula.service';

describe('SalaDeAulaService', () => {
  let service: SalaDeAulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaDeAulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

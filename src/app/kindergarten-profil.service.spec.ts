import { TestBed } from '@angular/core/testing';

import { KindergartenProfilService } from './kindergarten-profil.service';

describe('KindergartenProfilService', () => {
  let service: KindergartenProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KindergartenProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

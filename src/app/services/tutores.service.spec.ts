import { TestBed } from '@angular/core/testing';

import { TutoresService } from './tutores.service';

describe('TutoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutoresService = TestBed.get(TutoresService);
    expect(service).toBeTruthy();
  });
});

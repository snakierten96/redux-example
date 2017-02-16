/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LionsService } from './lions.service';

describe('LionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LionsService]
    });
  });

  it('should ...', inject([LionsService], (service: LionsService) => {
    expect(service).toBeTruthy();
  }));
});

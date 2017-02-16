/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElephantsService } from './elephants.service';

describe('ElephantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElephantsService]
    });
  });

  it('should ...', inject([ElephantsService], (service: ElephantsService) => {
    expect(service).toBeTruthy();
  }));
});

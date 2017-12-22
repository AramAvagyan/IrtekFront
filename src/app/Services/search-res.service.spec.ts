/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchResService } from './search-res.service';

describe('SearchResService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchResService]
    });
  });

  it('should ...', inject([SearchResService], (service: SearchResService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoffeeListServiceService } from './coffeeListService.service';

describe('Service: CoffeeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeListServiceService]
    });
  });

  it('should ...', inject([CoffeeListServiceService], (service: CoffeeListServiceService) => {
    expect(service).toBeTruthy();
  }));
});

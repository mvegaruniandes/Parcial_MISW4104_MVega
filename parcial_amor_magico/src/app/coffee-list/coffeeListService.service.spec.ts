/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoffeeListService } from './coffeeListService.service';

describe('Service: CoffeeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeListService],
    });
  });

  it('should ...', inject([CoffeeListService], (service: CoffeeListService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { Observer1Service } from './observer1.service';

describe('Observer1Service', () => {
  let service: Observer1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Observer1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should be created', () => {
    expect(service.subscribeCaso1).toEqual("Caso 1");
  });  

});



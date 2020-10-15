import { TestBed, inject } from '@angular/core/testing';

import { ActivatedRouteComponent } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivatedRouteComponent]
    });
  });

  it('should be created', inject([ActivatedRouteComponent], (service: ActivatedRouteComponent) => {
    expect(service).toBeTruthy();
  }));
});

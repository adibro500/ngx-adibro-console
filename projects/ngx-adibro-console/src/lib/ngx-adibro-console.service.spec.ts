import { TestBed } from '@angular/core/testing';

import { NgxAdibroConsoleService } from './ngx-adibro-console.service';

describe('NgxAdibroConsoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAdibroConsoleService = TestBed.get(NgxAdibroConsoleService);
    expect(service).toBeTruthy();
  });
});

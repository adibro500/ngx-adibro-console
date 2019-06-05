import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdibroConsoleComponent } from './ngx-adibro-console.component';

describe('NgxAdibroConsoleComponent', () => {
  let component: NgxAdibroConsoleComponent;
  let fixture: ComponentFixture<NgxAdibroConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdibroConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdibroConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

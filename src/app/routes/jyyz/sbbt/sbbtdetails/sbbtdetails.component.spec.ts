import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbbtdetailsComponent } from './sbbtdetails.component';

describe('SbbtdetailsComponent', () => {
  let component: SbbtdetailsComponent;
  let fixture: ComponentFixture<SbbtdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbbtdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

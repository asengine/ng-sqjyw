import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxcjdetailsComponent } from './pxcjdetails.component';

describe('PxcjdetailsComponent', () => {
  let component: PxcjdetailsComponent;
  let fixture: ComponentFixture<PxcjdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxcjdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxcjdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

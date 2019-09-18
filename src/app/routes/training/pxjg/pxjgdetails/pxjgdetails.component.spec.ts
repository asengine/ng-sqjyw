import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxjgdetailsComponent } from './pxjgdetails.component';

describe('PxjgdetailsComponent', () => {
  let component: PxjgdetailsComponent;
  let fixture: ComponentFixture<PxjgdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxjgdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxjgdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

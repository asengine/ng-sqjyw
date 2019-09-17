import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyzjdetailsComponent } from './cyzjdetails.component';

describe('CyzjdetailsComponent', () => {
  let component: CyzjdetailsComponent;
  let fixture: ComponentFixture<CyzjdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyzjdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyzjdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

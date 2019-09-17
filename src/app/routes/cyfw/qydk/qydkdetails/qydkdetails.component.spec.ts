import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QydkdetailsComponent } from './qydkdetails.component';

describe('QydkdetailsComponent', () => {
  let component: QydkdetailsComponent;
  let fixture: ComponentFixture<QydkdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QydkdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QydkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

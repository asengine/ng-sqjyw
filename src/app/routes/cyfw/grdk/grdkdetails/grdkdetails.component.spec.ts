import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrdkdetailsComponent } from './grdkdetails.component';

describe('GrdkdetailsComponent', () => {
  let component: GrdkdetailsComponent;
  let fixture: ComponentFixture<GrdkdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrdkdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrdkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

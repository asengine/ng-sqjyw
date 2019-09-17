import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CybtdetailsComponent } from './cybtdetails.component';

describe('CybtdetailsComponent', () => {
  let component: CybtdetailsComponent;
  let fixture: ComponentFixture<CybtdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CybtdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CybtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

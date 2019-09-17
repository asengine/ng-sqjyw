import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbxxdetailsComponent } from './jbxxdetails.component';

describe('JbxxdetailsComponent', () => {
  let component: JbxxdetailsComponent;
  let fixture: ComponentFixture<JbxxdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbxxdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbxxdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

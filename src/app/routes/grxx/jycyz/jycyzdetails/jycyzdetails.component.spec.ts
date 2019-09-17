import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JycyzdetailsComponent } from './jycyzdetails.component';

describe('JycyzdetailsComponent', () => {
  let component: JycyzdetailsComponent;
  let fixture: ComponentFixture<JycyzdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JycyzdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JycyzdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

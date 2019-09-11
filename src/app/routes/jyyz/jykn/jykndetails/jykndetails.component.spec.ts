import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JykndetailsComponent } from './jykndetails.component';

describe('JykndetailsComponent', () => {
  let component: JykndetailsComponent;
  let fixture: ComponentFixture<JykndetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JykndetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JykndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JszwfwComponent } from './jszwfw.component';

describe('JszwfwComponent', () => {
  let component: JszwfwComponent;
  let fixture: ComponentFixture<JszwfwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JszwfwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JszwfwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

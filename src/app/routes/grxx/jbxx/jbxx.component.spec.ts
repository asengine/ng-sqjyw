import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbxxComponent } from './jbxx.component';

describe('JbxxComponent', () => {
  let component: JbxxComponent;
  let fixture: ComponentFixture<JbxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

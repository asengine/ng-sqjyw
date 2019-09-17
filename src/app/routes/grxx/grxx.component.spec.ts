import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrxxComponent } from './grxx.component';

describe('GrxxComponent', () => {
  let component: GrxxComponent;
  let fixture: ComponentFixture<GrxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

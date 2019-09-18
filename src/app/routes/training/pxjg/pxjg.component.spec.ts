import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxjgComponent } from './pxjg.component';

describe('PxjgComponent', () => {
  let component: PxjgComponent;
  let fixture: ComponentFixture<PxjgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxjgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxjgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

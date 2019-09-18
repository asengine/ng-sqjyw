import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxcjComponent } from './pxcj.component';

describe('PxcjComponent', () => {
  let component: PxcjComponent;
  let fixture: ComponentFixture<PxcjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxcjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxcjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxxyComponent } from './pxxy.component';

describe('PxxyComponent', () => {
  let component: PxxyComponent;
  let fixture: ComponentFixture<PxxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxxyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxdwComponent } from './pxdw.component';

describe('PxdwComponent', () => {
  let component: PxdwComponent;
  let fixture: ComponentFixture<PxdwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxdwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxdwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

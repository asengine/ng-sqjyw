import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxzsComponent } from './pxzs.component';

describe('PxzsComponent', () => {
  let component: PxzsComponent;
  let fixture: ComponentFixture<PxzsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxzsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxzsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

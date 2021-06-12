import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxkhComponent } from './pxkh.component';

describe('PxkhComponent', () => {
  let component: PxkhComponent;
  let fixture: ComponentFixture<PxkhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxkhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxkhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

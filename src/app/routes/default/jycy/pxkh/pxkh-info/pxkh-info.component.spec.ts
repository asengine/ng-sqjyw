import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxkhInfoComponent } from './pxkh-info.component';

describe('PxkhInfoComponent', () => {
  let component: PxkhInfoComponent;
  let fixture: ComponentFixture<PxkhInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxkhInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxkhInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

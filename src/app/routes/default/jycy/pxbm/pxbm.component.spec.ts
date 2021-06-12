import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxbmComponent } from './pxbm.component';

describe('PxbmComponent', () => {
  let component: PxbmComponent;
  let fixture: ComponentFixture<PxbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

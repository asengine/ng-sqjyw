import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxbmInfoComponent } from './pxbm-info.component';

describe('PxbmInfoComponent', () => {
  let component: PxbmInfoComponent;
  let fixture: ComponentFixture<PxbmInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxbmInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxbmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

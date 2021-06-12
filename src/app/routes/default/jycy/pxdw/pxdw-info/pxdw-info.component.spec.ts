import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxdwInfoComponent } from './pxdw-info.component';

describe('PxdwInfoComponent', () => {
  let component: PxdwInfoComponent;
  let fixture: ComponentFixture<PxdwInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxdwInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxdwInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

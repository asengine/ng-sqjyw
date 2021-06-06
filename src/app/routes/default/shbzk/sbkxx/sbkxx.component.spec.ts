import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbkxxComponent } from './sbkxx.component';

describe('SbkxxComponent', () => {
  let component: SbkxxComponent;
  let fixture: ComponentFixture<SbkxxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbkxxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbkxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

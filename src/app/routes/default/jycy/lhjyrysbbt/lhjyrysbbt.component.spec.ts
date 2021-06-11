import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhjyrysbbtComponent } from './lhjyrysbbt.component';

describe('LhjyrysbbtComponent', () => {
  let component: LhjyrysbbtComponent;
  let fixture: ComponentFixture<LhjyrysbbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhjyrysbbtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhjyrysbbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

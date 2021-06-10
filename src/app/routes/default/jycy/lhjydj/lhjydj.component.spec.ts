import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhjydjComponent } from './lhjydj.component';

describe('LhjydjComponent', () => {
  let component: LhjydjComponent;
  let fixture: ComponentFixture<LhjydjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhjydjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhjydjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

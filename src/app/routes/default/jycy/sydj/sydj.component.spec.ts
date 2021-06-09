import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SydjComponent } from './sydj.component';

describe('SydjComponent', () => {
  let component: SydjComponent;
  let fixture: ComponentFixture<SydjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SydjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SydjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwjydjComponent } from './dwjydj.component';

describe('DwjydjComponent', () => {
  let component: DwjydjComponent;
  let fixture: ComponentFixture<DwjydjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwjydjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwjydjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

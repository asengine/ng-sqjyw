import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyjcbgComponent } from './ryjcbg.component';

describe('RyjcbgComponent', () => {
  let component: RyjcbgComponent;
  let fixture: ComponentFixture<RyjcbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RyjcbgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RyjcbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

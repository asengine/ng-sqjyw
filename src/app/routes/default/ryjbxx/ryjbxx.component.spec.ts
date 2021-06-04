import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyjbxxComponent } from './ryjbxx.component';

describe('RyjbxxComponent', () => {
  let component: RyjbxxComponent;
  let fixture: ComponentFixture<RyjbxxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RyjbxxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RyjbxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

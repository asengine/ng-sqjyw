import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcfwComponent } from './rcfw.component';

describe('RcfwComponent', () => {
  let component: RcfwComponent;
  let fixture: ComponentFixture<RcfwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcfwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcfwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

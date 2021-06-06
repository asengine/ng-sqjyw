import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyjfComponent } from './ryjf.component';

describe('RyjfComponent', () => {
  let component: RyjfComponent;
  let fixture: ComponentFixture<RyjfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RyjfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RyjfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

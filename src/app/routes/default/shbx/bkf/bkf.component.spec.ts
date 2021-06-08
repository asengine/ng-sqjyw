import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkfComponent } from './bkf.component';

describe('BkfComponent', () => {
  let component: BkfComponent;
  let fixture: ComponentFixture<BkfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

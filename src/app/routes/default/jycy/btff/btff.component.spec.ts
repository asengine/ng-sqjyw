import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtffComponent } from './btff.component';

describe('BtffComponent', () => {
  let component: BtffComponent;
  let fixture: ComponentFixture<BtffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

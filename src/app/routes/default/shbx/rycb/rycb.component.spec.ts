import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RycbComponent } from './rycb.component';

describe('RycbComponent', () => {
  let component: RycbComponent;
  let fixture: ComponentFixture<RycbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RycbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RycbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

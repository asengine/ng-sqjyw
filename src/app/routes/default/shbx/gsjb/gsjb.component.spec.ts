import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsjbComponent } from './gsjb.component';

describe('GsjbComponent', () => {
  let component: GsjbComponent;
  let fixture: ComponentFixture<GsjbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsjbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsjbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsjbInfoComponent } from './gsjb-info.component';

describe('GsjbInfoComponent', () => {
  let component: GsjbInfoComponent;
  let fixture: ComponentFixture<GsjbInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsjbInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsjbInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsdyslInfoComponent } from './gsdysl-info.component';

describe('GsdyslInfoComponent', () => {
  let component: GsdyslInfoComponent;
  let fixture: ComponentFixture<GsdyslInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsdyslInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsdyslInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

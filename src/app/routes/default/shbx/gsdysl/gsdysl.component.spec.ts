import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsdyslComponent } from './gsdysl.component';

describe('GsdyslComponent', () => {
  let component: GsdyslComponent;
  let fixture: ComponentFixture<GsdyslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsdyslComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsdyslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

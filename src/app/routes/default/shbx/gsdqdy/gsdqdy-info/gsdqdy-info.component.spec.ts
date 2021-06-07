import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsdqdyInfoComponent } from './gsdqdy-info.component';

describe('GsdqdyInfoComponent', () => {
  let component: GsdqdyInfoComponent;
  let fixture: ComponentFixture<GsdqdyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsdqdyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsdqdyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

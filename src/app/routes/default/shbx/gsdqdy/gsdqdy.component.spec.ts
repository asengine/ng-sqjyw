import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsdqdyComponent } from './gsdqdy.component';

describe('GsdqdyComponent', () => {
  let component: GsdqdyComponent;
  let fixture: ComponentFixture<GsdqdyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsdqdyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsdqdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

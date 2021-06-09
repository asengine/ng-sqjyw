import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrffbgComponent } from './grffbg.component';

describe('GrffbgComponent', () => {
  let component: GrffbgComponent;
  let fixture: ComponentFixture<GrffbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrffbgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrffbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

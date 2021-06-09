import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyffComponent } from './dyff.component';

describe('DyffComponent', () => {
  let component: DyffComponent;
  let fixture: ComponentFixture<DyffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

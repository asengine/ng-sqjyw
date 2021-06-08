import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YljtzqkComponent } from './yljtzqk.component';

describe('YljtzqkComponent', () => {
  let component: YljtzqkComponent;
  let fixture: ComponentFixture<YljtzqkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YljtzqkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YljtzqkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

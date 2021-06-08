import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YljtzqkInfoComponent } from './yljtzqk-info.component';

describe('YljtzqkInfoComponent', () => {
  let component: YljtzqkInfoComponent;
  let fixture: ComponentFixture<YljtzqkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YljtzqkInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YljtzqkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

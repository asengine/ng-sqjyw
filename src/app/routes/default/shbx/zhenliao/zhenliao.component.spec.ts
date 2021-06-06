import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhenliaoComponent } from './zhenliao.component';

describe('ZhenliaoComponent', () => {
  let component: ZhenliaoComponent;
  let fixture: ComponentFixture<ZhenliaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZhenliaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhenliaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

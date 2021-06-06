import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhenliaoInfoComponent } from './zhenliao-info.component';

describe('ZhenliaoInfoComponent', () => {
  let component: ZhenliaoInfoComponent;
  let fixture: ComponentFixture<ZhenliaoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZhenliaoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhenliaoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

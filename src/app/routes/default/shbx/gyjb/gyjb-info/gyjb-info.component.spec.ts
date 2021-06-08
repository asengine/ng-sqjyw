import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyjbInfoComponent } from './gyjb-info.component';

describe('GyjbInfoComponent', () => {
  let component: GyjbInfoComponent;
  let fixture: ComponentFixture<GyjbInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyjbInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GyjbInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

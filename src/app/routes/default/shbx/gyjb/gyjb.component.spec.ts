import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyjbComponent } from './gyjb.component';

describe('GyjbComponent', () => {
  let component: GyjbComponent;
  let fixture: ComponentFixture<GyjbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyjbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GyjbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RynzhComponent } from './rynzh.component';

describe('RynzhComponent', () => {
  let component: RynzhComponent;
  let fixture: ComponentFixture<RynzhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RynzhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RynzhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

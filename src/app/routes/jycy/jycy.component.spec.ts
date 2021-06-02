import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JycyComponent } from './jycy.component';

describe('JycyComponent', () => {
  let component: JycyComponent;
  let fixture: ComponentFixture<JycyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JycyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JycyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

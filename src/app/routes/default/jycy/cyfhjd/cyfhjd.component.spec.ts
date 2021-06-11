import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyfhjdComponent } from './cyfhjd.component';

describe('CyfhjdComponent', () => {
  let component: CyfhjdComponent;
  let fixture: ComponentFixture<CyfhjdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyfhjdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyfhjdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

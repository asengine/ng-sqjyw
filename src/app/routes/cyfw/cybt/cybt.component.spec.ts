import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CybtComponent } from './cybt.component';

describe('CybtComponent', () => {
  let component: CybtComponent;
  let fixture: ComponentFixture<CybtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CybtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CybtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

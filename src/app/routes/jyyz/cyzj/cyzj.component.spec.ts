import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyzjComponent } from './cyzj.component';

describe('CyzjComponent', () => {
  let component: CyzjComponent;
  let fixture: ComponentFixture<CyzjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyzjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyzjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

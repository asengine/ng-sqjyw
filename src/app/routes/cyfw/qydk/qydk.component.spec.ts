import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QydkComponent } from './qydk.component';

describe('QydkComponent', () => {
  let component: QydkComponent;
  let fixture: ComponentFixture<QydkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QydkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QydkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

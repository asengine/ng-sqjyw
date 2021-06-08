import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QyltxComponent } from './qyltx.component';

describe('QyltxComponent', () => {
  let component: QyltxComponent;
  let fixture: ComponentFixture<QyltxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QyltxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QyltxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

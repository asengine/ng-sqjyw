import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyfwComponent } from './cyfw.component';

describe('CyfwComponent', () => {
  let component: CyfwComponent;
  let fixture: ComponentFixture<CyfwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyfwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyfwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

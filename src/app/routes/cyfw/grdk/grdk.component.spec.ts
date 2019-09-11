import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrdkComponent } from './grdk.component';

describe('GrdkComponent', () => {
  let component: GrdkComponent;
  let fixture: ComponentFixture<GrdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

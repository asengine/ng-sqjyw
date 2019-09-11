import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbbtComponent } from './sbbt.component';

describe('SbbtComponent', () => {
  let component: SbbtComponent;
  let fixture: ComponentFixture<SbbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

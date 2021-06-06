import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RycbbgComponent } from './rycbbg.component';

describe('RycbbgComponent', () => {
  let component: RycbbgComponent;
  let fixture: ComponentFixture<RycbbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RycbbgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RycbbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

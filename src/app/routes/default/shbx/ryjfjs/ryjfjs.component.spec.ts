import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyjfjsComponent } from './ryjfjs.component';

describe('RyjfjsComponent', () => {
  let component: RyjfjsComponent;
  let fixture: ComponentFixture<RyjfjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RyjfjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RyjfjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

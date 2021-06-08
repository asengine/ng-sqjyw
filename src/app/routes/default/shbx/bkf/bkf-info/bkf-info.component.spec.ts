import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkfInfoComponent } from './bkf-info.component';

describe('BkfInfoComponent', () => {
  let component: BkfInfoComponent;
  let fixture: ComponentFixture<BkfInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkfInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BkfInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

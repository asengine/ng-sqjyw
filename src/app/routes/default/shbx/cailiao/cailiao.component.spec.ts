import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CailiaoComponent } from './cailiao.component';

describe('CailiaoComponent', () => {
  let component: CailiaoComponent;
  let fixture: ComponentFixture<CailiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CailiaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CailiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

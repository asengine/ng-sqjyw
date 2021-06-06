import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CailiaoInfoComponent } from './cailiao-info.component';

describe('CailiaoInfoComponent', () => {
  let component: CailiaoInfoComponent;
  let fixture: ComponentFixture<CailiaoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CailiaoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CailiaoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

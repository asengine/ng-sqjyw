import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShbzkComponent } from './shbzk.component';

describe('ShbzkComponent', () => {
  let component: ShbzkComponent;
  let fixture: ComponentFixture<ShbzkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShbzkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShbzkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

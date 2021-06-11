import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwxnjyknrysbbtComponent } from './dwxnjyknrysbbt.component';

describe('DwxnjyknrysbbtComponent', () => {
  let component: DwxnjyknrysbbtComponent;
  let fixture: ComponentFixture<DwxnjyknrysbbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwxnjyknrysbbtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwxnjyknrysbbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

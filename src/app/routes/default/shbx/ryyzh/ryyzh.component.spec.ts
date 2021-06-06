import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyyzhComponent } from './ryyzh.component';

describe('RyyzhComponent', () => {
  let component: RyyzhComponent;
  let fixture: ComponentFixture<RyyzhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RyyzhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RyyzhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

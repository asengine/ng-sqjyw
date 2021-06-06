import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsdyzfInfoComponent } from './gsdyzf-info.component';

describe('GsdyzfInfoComponent', () => {
  let component: GsdyzfInfoComponent;
  let fixture: ComponentFixture<GsdyzfInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsdyzfInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsdyzfInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

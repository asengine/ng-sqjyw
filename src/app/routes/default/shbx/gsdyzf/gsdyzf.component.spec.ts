import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsdyzfComponent } from './gsdyzf.component';

describe('GsdyzfComponent', () => {
  let component: GsdyzfComponent;
  let fixture: ComponentFixture<GsdyzfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsdyzfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsdyzfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

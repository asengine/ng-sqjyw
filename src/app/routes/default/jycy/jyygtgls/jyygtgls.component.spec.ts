import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JyygtglsComponent } from './jyygtgls.component';

describe('JyygtglsComponent', () => {
  let component: JyygtglsComponent;
  let fixture: ComponentFixture<JyygtglsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JyygtglsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JyygtglsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

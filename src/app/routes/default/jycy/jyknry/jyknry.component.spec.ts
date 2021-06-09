import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JyknryComponent } from './jyknry.component';

describe('JyknryComponent', () => {
  let component: JyknryComponent;
  let fixture: ComponentFixture<JyknryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JyknryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JyknryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

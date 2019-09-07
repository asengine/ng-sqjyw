import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JyyzComponent } from './jyyz.component';

describe('JyyzComponent', () => {
  let component: JyyzComponent;
  let fixture: ComponentFixture<JyyzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JyyzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JyyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

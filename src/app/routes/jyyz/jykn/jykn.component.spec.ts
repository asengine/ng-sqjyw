import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JyknComponent } from './jykn.component';

describe('JyknComponent', () => {
  let component: JyknComponent;
  let fixture: ComponentFixture<JyknComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JyknComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JyknComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

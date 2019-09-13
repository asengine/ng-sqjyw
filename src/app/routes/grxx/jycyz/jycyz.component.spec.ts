import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JycyzComponent } from './jycyz.component';

describe('JycyzComponent', () => {
  let component: JycyzComponent;
  let fixture: ComponentFixture<JycyzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JycyzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JycyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

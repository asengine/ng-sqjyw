import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SybxComponent } from './sybx.component';

describe('SybxComponent', () => {
  let component: SybxComponent;
  let fixture: ComponentFixture<SybxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SybxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SybxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

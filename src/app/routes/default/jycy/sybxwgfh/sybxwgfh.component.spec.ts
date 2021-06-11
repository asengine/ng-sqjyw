import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SybxwgfhComponent } from './sybxwgfh.component';

describe('SybxwgfhComponent', () => {
  let component: SybxwgfhComponent;
  let fixture: ComponentFixture<SybxwgfhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SybxwgfhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SybxwgfhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

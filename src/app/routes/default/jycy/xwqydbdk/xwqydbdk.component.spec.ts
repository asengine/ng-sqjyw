import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XwqydbdkComponent } from './xwqydbdk.component';

describe('XwqydbdkComponent', () => {
  let component: XwqydbdkComponent;
  let fixture: ComponentFixture<XwqydbdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XwqydbdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XwqydbdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShbxComponent } from './shbx.component';

describe('ShbxComponent', () => {
  let component: ShbxComponent;
  let fixture: ComponentFixture<ShbxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShbxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShbxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaopinComponent } from './yaopin.component';

describe('YaopinComponent', () => {
  let component: YaopinComponent;
  let fixture: ComponentFixture<YaopinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YaopinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YaopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

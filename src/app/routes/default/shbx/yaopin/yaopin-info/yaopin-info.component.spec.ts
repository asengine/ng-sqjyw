import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaopinInfoComponent } from './yaopin-info.component';

describe('YaopinInfoComponent', () => {
  let component: YaopinInfoComponent;
  let fixture: ComponentFixture<YaopinInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YaopinInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YaopinInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsgyqsInfoComponent } from './gsgyqs-info.component';

describe('GsgyqsInfoComponent', () => {
  let component: GsgyqsInfoComponent;
  let fixture: ComponentFixture<GsgyqsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsgyqsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsgyqsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

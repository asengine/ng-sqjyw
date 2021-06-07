import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsgyqsComponent } from './gsgyqs.component';

describe('GsgyqsComponent', () => {
  let component: GsgyqsComponent;
  let fixture: ComponentFixture<GsgyqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsgyqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsgyqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

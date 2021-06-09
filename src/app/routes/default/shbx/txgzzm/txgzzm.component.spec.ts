import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxgzzmComponent } from './txgzzm.component';

describe('TxgzzmComponent', () => {
  let component: TxgzzmComponent;
  let fixture: ComponentFixture<TxgzzmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxgzzmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxgzzmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

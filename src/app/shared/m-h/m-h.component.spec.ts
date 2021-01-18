import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MHComponent } from './m-h.component';

describe('MHComponent', () => {
  let component: MHComponent;
  let fixture: ComponentFixture<MHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

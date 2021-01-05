import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFInputComponent } from './m-f-input.component';

describe('MFInputComponent', () => {
  let component: MFInputComponent;
  let fixture: ComponentFixture<MFInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MFInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

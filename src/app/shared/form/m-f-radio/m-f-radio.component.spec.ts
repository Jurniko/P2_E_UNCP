import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFRadioComponent } from './m-f-radio.component';

describe('MFRadioComponent', () => {
  let component: MFRadioComponent;
  let fixture: ComponentFixture<MFRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MFRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

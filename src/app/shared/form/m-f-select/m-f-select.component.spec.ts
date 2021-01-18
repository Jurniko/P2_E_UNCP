import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFSelectComponent } from './m-f-select.component';

describe('MFSelectComponent', () => {
  let component: MFSelectComponent;
  let fixture: ComponentFixture<MFSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MFSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

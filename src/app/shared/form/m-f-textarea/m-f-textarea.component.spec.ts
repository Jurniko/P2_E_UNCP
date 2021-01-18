import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFTextareaComponent } from './m-f-textarea.component';

describe('MFTextareaComponent', () => {
  let component: MFTextareaComponent;
  let fixture: ComponentFixture<MFTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MFTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

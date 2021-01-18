import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFSearchComponent } from './m-f-search.component';

describe('MFSearchComponent', () => {
  let component: MFSearchComponent;
  let fixture: ComponentFixture<MFSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MFSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

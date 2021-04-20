import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MHiddenComponent } from './m-hidden.component';

describe('MHiddenComponent', () => {
  let component: MHiddenComponent;
  let fixture: ComponentFixture<MHiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MHiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

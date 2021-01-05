import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLevelComponent } from './m-level.component';

describe('MLevelComponent', () => {
  let component: MLevelComponent;
  let fixture: ComponentFixture<MLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

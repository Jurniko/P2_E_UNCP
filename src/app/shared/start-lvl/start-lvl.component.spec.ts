import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLvlComponent } from './start-lvl.component';

describe('StartLvlComponent', () => {
  let component: StartLvlComponent;
  let fixture: ComponentFixture<StartLvlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartLvlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartLvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

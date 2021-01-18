import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNavbarLvlComponent } from './m-navbar-lvl.component';

describe('MNavbarLvlComponent', () => {
  let component: MNavbarLvlComponent;
  let fixture: ComponentFixture<MNavbarLvlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MNavbarLvlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MNavbarLvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

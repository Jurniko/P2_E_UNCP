import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueVidComponent } from './bloque-vid.component';

describe('BloqueVidComponent', () => {
  let component: BloqueVidComponent;
  let fixture: ComponentFixture<BloqueVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueVidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

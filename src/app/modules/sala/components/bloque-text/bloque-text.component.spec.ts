import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueTextComponent } from './bloque-text.component';

describe('BloqueComponent', () => {
  let component: BloqueTextComponent;
  let fixture: ComponentFixture<BloqueTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

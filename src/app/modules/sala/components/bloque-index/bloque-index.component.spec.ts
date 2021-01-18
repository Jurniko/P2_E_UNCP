import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueIndexComponent } from './bloque-index.component';

describe('BloqueIndexComponent', () => {
  let component: BloqueIndexComponent;
  let fixture: ComponentFixture<BloqueIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoLevelComponent } from './resultado-level.component';

describe('ResultadoLevelComponent', () => {
  let component: ResultadoLevelComponent;
  let fixture: ComponentFixture<ResultadoLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

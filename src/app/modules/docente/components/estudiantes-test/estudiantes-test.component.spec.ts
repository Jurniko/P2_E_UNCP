import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesTestComponent } from './estudiantes-test.component';

describe('EstudiantesTestComponent', () => {
  let component: EstudiantesTestComponent;
  let fixture: ComponentFixture<EstudiantesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

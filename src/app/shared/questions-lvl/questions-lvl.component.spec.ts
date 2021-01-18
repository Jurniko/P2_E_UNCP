import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsLvlComponent } from './questions-lvl.component';

describe('QuestionsLvlComponent', () => {
  let component: QuestionsLvlComponent;
  let fixture: ComponentFixture<QuestionsLvlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsLvlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsLvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

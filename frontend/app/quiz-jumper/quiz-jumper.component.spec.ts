import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizJumperComponent } from './quiz-jumper.component';

describe('QuizJumperComponent', () => {
  let component: QuizJumperComponent;
  let fixture: ComponentFixture<QuizJumperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizJumperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizJumperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

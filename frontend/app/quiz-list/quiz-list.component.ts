import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { QuizJumperComponent } from '../quiz-jumper/quiz-jumper.component';
import { QuizService } from '../quiz.service';
import { QuizListService } from '../quiz-list.service';
import { Question, Quiz } from '../quiz.model';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CardComponent, QuizJumperComponent],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css'
})
export class QuizListComponent {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getAllQuizzes().subscribe((data: Quiz[]) => {
      this.quizzes = data;
    });
  }
}

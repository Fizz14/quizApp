import { Component } from '@angular/core';
import { QuizListService } from '../quiz-list.service';
import { QuizService } from '../quiz.service';
import { Question, Quiz } from '../quiz.model';

@Component({
  selector: 'app-quiz-jumper',
  standalone: true,
  imports: [],
  templateUrl: './quiz-jumper.component.html',
  styleUrl: './quiz-jumper.component.css'
})
export class QuizJumperComponent {
  activeDescription = "Empty description";
  quizzes: Quiz[] = [];
  quizIdEndpoint: number = -1;

  constructor(private quizListService: QuizListService, private quizService: QuizService) {

  }

  ngOnInit() {
    this.quizService.getAllQuizzes().subscribe((data: Quiz[]) => {
      this.quizzes = data;
    });
    this.quizListService.quizId.subscribe((newId) => {
      this.quizIdEndpoint = newId;
    });
  }
  
}

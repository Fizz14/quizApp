import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { QuizListService } from '../quiz-list.service';
import { Question, Quiz } from '../quiz.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() name = "";
  @Input() difficulty = "";
  @Input() id = 0;
  selected = true;

  constructor(private quizListService: QuizListService) { }

  cardClicked() {
    this.quizListService.setQuizId(this.id);
  }

  cardMouseDown() {
    this.selected = false;
  }

  cardMouseUp() {
    this.selected = true;
  }
}

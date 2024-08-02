import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  quizName = "";
  score = 0;
  numQuestions = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.quizName = params['quizName'];
      this.score = params['score'];
      this.numQuestions = params['numQuestions']
    });

  }

}

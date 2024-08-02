import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { QuizService } from '../quiz.service';
import { Question, Quiz } from '../quiz.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-quiz',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './take-quiz.component.html',
  styleUrl: './take-quiz.component.css'
})
export class TakeQuizComponent {
  quizzes: Quiz[] = [];
  thisQuiz: Quiz = {} as Quiz;
  questions: Question[] = [];
  index: number = 0;
  cooldown: number = 150;
  score: number = 0;
  feedback = "";
  wrong = 0;
  waitForNextQuestion = 0;

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) {
    this.quizService.getAllQuizzes().subscribe((data: Quiz[]) => {
      this.quizzes = data;

      this.route.params.subscribe(params => {
        this.questions = this.quizzes[params['id']].questions;
        this.thisQuiz = this.quizzes[params['id']];

      })

    });

  }

  aMouseDown() {
    const elem = document.getElementById('a');
    if(elem) {
      elem.classList.add('clicked');
      elem.classList.remove('aUnclicked');
      setTimeout(() => {
        elem.classList.remove('clicked');
        elem.classList.add('bUnclicked');
      }, 500);
    }
  }

  aMouseUp() {
    const elem = document.getElementById('a');
    if(elem) {
      elem.classList.remove('clicked');
      elem.classList.add('aUnclicked');
    }
  }

  bMouseDown() {
    const elem = document.getElementById('b');
    if(elem) {
      elem.classList.add('clicked');
      elem.classList.remove('bUnclicked');
      setTimeout(() => {
        elem.classList.remove('clicked');
        elem.classList.add('bUnclicked');
      }, 500);
    }
  }

  bMouseUp() {
    const elem = document.getElementById('b');
    if(elem) {
      elem.classList.remove('clicked');
      elem.classList.add('bUnclicked');
    }
  }

  cMouseDown() {
    const elem = document.getElementById('c');
    if(elem) {
      elem.classList.add('clicked');
      elem.classList.remove('cUnclicked');
      setTimeout(() => {
        elem.classList.remove('clicked');
        elem.classList.add('bUnclicked');
      }, 500);
    }
  }

  cMouseUp() {
    const elem = document.getElementById('c');
    if(elem) {
      elem.classList.remove('clicked');
      elem.classList.add('cUnclicked');
    }
  }

  dMouseDown() {
    const elem = document.getElementById('d');
    if(elem) {
      elem.classList.add('clicked');
      elem.classList.remove('dUnclicked');
      setTimeout(() => {
        elem.classList.remove('clicked');
        elem.classList.add('bUnclicked');
      }, 500);
    }
  }

  dMouseUp() {
    const elem = document.getElementById('d');
    if(elem) {
      elem.classList.remove('clicked');
      elem.classList.add('dUnclicked');
    }
  }

  answer(response:number) {
    if(this.waitForNextQuestion == 0) {
      this.waitForNextQuestion = 1;
      if(this.questions[this.index].answers[response] == this.questions[this.index].correctAnswer) {
        //right
        this.score++;
        this.continueQuiz(0);
      } else {
        //wrong
        this.continueQuiz(1);
      }
    }

  }

  async continueQuiz(wrong:number) {
    this.wrong = wrong;
    if(wrong == 1) {
      this.feedback = "Wrong. The right answer is " + this.questions[this.index].correctAnswer;
    } else {
      this.feedback = "Right. " + this.questions[this.index].correctAnswer + " is the right answer.";

    }
    await new Promise(f => setTimeout(f, 3000));
    this.index++;
    this.feedback = "";
    if(this.index == this.questions.length) {
      this.router.navigate(['/results', this.thisQuiz.name, this.score, this.questions.length]);
    }
    this.waitForNextQuestion = 0;

  }

}

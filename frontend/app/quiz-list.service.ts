import { Injectable, Inject} from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Question, Quiz } from './quiz.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizListService {
  //for when the user clicks a quiz
  private quizIdSource = new BehaviorSubject<number>(-1);

  quizId = this.quizIdSource.asObservable();

  setQuizId(newId: number) {
    this.quizIdSource.next(newId);
  }

}

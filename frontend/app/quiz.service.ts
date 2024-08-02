import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question, Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = "http://127.0.0.1:8080";
  private allUrl = this.baseUrl + "/quizzes/all";

  constructor(private http: HttpClient) { }

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.allUrl);
  }

}

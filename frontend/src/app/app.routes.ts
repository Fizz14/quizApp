import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'quizzes',
    title: 'Quizzes',
    component: QuizListComponent,
  },
  {
    path:'quiz/:id',
    title:'Quiz',
    component: TakeQuizComponent,
  },
  {
    path:'results/:quizName/:score/:numQuestions',
    title:'Results',
    component: ResultsComponent,
  },


];

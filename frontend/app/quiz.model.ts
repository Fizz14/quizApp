import { Injectable, Inject, InjectionToken } from '@angular/core';

//export const ID_TOKEN = new InjectionToken<number>('id');
//export const Q_TOKEN = new InjectionToken<Question[]>('qid');

export class Quiz {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty: string;
  questions: Question[];
  //constructor( @Inject(ID_TOKEN) id:number, @Inject(String) name:string, @Inject(String) description: string, @Inject(String) category: string, @Inject(String) difficulty: string, @Inject(Q_TOKEN) questions: Question[]) {
  constructor( id:number, name:string, description: string, category: string,  difficulty: string, questions: Question[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.difficulty = difficulty;
    this.questions = questions;
  }
}

export class Question {
  id: number
  description: string;
  answers: string[];
  correctAnswer: string;
  constructor(id:number, description:string, answers:string[],correctAnswer:string) {
    this.id = id;
    this.description = description;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

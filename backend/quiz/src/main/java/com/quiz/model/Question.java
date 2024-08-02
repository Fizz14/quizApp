package com.quiz.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import java.util.List;

@Entity
public class Question {
  @Id
  private Long id;
  private String description;
  private List<String> answers;
  private String correctAnswer;

  public void setId(Long a) {
    id = a;
  }

  public void setDescription(String a) {
    description = a;
  }

  public void setAnswers(List<String> a) {
    answers = a;
  }

  public void setCorrectAnswer(String a) {
    correctAnswer = a;
  }

  public Long getId() {
    return id;
  }

  public String getDescription() {
    return description;
  }

  public List<String> getAnswers() {
    return answers;
  }

  public String getCorrectAnswer() {
    return correctAnswer;
  }
}

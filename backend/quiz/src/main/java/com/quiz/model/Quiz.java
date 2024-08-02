package com.quiz.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.ElementCollection;
import java.util.List;

@Entity
public class Quiz {
  @Id
  private Long id;
  private String name;
  private String description;
  private String category;
  private String difficulty;
  @OneToMany(cascade = CascadeType.ALL)
  public List<Question> questions;

  public void setId(Long a) {
    id = a;
  }

  public void setName(String a) {
    name = a;
  }

  public void setDescription(String a) {
    description = a;
  }

  public void setCategory(String a) {
    category = a;
  }

  public void setDifficulty(String a) {
    difficulty = a;
  }

  public void setQuestions(List<Question> a) {
    questions = a;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public String getCategory() {
    return category;
  }

  public String getDifficulty() {
    return difficulty;
  }

  public List<Question> getQuestions() {
    return questions;
  }
}

package com.quiz.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.quiz.model.Question;
import com.quiz.model.Quiz;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
  @Query("SELECT q FROM Quiz q WHERE q.id = ID")
  Quiz getQuizById(@Param("ID") Long ID);
  
}

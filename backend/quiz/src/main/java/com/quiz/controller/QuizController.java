package com.quiz.controller;


import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.List;
import com.quiz.loader.QuizLoader;
import jakarta.annotation.PostConstruct;
import java.io.IOException;

import com.quiz.model.Question;
import com.quiz.model.Quiz;
import com.quiz.repository.QuizRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class QuizController {
  @Autowired
  private QuizRepository quizRepository;

  @PostConstruct
  public void init() {
    System.out.println("");
    System.out.println("Controller inits");
    System.out.println("");
    
    QuizLoader quizLoader = new QuizLoader();

    List<Quiz> quizzes = quizLoader.loadQuizzes();
    for(int i = 0; i < quizzes.size(); i++) {
      Quiz ret = quizzes.get(i);
      quizRepository.save(ret);
    }


  }

  @GetMapping("/quizzes/all")
  public List<Quiz> getAllQuizzes() {
    System.out.println("");
    System.out.println("All quizzes were retrieved");
    System.out.println("");

    return quizRepository.findAll();
  }

  //get quiz by id
  @PostMapping("/quizzes/id")
  public Quiz getQuizById(@RequestBody Long ID) {
    System.out.println("");
    System.out.println("Get quiz by ID attempted");
    System.out.println("");
    Quiz ret = quizRepository.getQuizById(ID);
    return ret;
  }
}

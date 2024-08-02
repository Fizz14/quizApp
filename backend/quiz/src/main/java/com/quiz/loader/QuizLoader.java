package com.quiz.loader;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.nio.file.Paths;
import java.io.File;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import com.quiz.model.Question;
import com.quiz.model.Quiz;


public class QuizLoader {
  public static void writeQuiz() {
  
    Quiz a = new Quiz();
    a.setId(0L);
    a.setName("World History 1");
    a.setDescription("Over world history starting in 2000bc.");
    a.setCategory("History");
    a.setDifficulty("Medium");

    Question b = new Question();
    b.setId(0L);
    b.setDescription("What was the first known written document?");

    List<String> answers = new ArrayList<String>();
    answers.add("Code of Hamurrabi");
    answers.add("Epic of Gilgamesh");
    answers.add("Genesis");
    answers.add("Narmer Palette");
    b.setAnswers(answers);
    b.setCorrectAnswer("Epic of Gilgamesh");

    Question c = new Question();
    c.setId(1L);
    c.setDescription("Who was the first woman to fly over the Atlantic Ocean alone?");

    answers.clear();
    answers.add("Valentina Tereshkova");
    answers.add("Harriet Quimby");
    answers.add("Amelia Earhart");
    answers.add("Bessie Coleman");
    c.setAnswers(answers);
    c.setCorrectAnswer("Amelia Earhart");

    List<Question> questions = new ArrayList<Question>();
    questions.add(b);
    questions.add(c);

    a.setQuestions(questions);

    ObjectMapper objectMapper = new ObjectMapper();
    System.out.println("Printing quiz");
    try {
      objectMapper.writeValue(new File("target/quiz.json"),a);
    } catch(Exception e) {
      System.out.println("Something went wrong");

    }
    
  }

  public static Quiz loadQuiz(String fileAddress) {
    //locate a file, load the quiz data and all the questions
    fileAddress = "src/main/resources/quizzes/" + fileAddress + ".json";
    System.out.println(fileAddress);

    ObjectMapper objectMapper = new ObjectMapper();
    try {
      Quiz ret = objectMapper.readValue(Paths.get(fileAddress).toFile(), Quiz.class);
      return ret;
    } catch (Exception e) {
      System.out.println("Something went wrong");
      return null;
    }


  }

  //load all quizzes from resources/quizzes, while maintaining ID's for quiz and question
  public static List<Quiz> loadQuizzes() {
    ObjectMapper objectMapper = new ObjectMapper();
    List<Quiz> ret = new ArrayList<Quiz>();
    File folder = new File("src/main/resources/quizzes");
    Long quizId = 0L;
    Long questionId = 0L;
    File[] listOfFiles = folder.listFiles();
    if(listOfFiles != null) {
      for(int i = 0; i < listOfFiles.length; i++) {
        //System.out.println("Loading file " + listOfFiles[i].getName());
        Quiz quiz = new Quiz();
        try {
          quiz = objectMapper.readValue(Paths.get(listOfFiles[i].getPath()).toFile(), Quiz.class);
          for(int j = 0; j < quiz.questions.size(); j++) {
            quiz.questions.get(j).setId(questionId);
            questionId++;
          }
        
          quiz.setId(quizId);
          quizId++;
          System.out.println("Successfully loaded quiz " + Paths.get(listOfFiles[i].getName()));
          ret.add(quiz);
        } catch (Exception e) {
          e.printStackTrace();
          System.exit(0);
        }
      }
    }

    System.out.println(ret.size());
    return ret;
  }
}

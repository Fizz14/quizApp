package com.quiz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

import com.quiz.loader.QuizLoader;
import com.quiz.model.Question;
import com.quiz.model.Quiz;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.quiz.*")
@ComponentScan(basePackages = { "com.quiz.*"})
@EntityScan("com.quiz.*")
public class QuizApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizApplication.class, args);

    System.out.println("");
    System.out.println("Execution begins");
    System.out.println("");

	}

}

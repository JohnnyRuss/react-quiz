import React, { FC, useState } from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { getQuizQuestions, DifficultyType, Question } from "./lib/API";

import { GlobalStyles, Wrapper } from "./styles/app.styles";

const TOTAL_QUESTIONS = 10;

export type AnswerType = {
  question: string;
  answer: string;
  correctAnswer: string;
  correct: boolean;
};

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNm, setQuestionNm] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerType[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    try {
      setLoading(true);
      setGameOver(false);

      const data = await getQuizQuestions(TOTAL_QUESTIONS, DifficultyType.EASY);
      setQuestions(data);

      setScore(0);
      setUserAnswers([]);
      setQuestionNm(0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (gameOver) return;

    const answer = e.currentTarget.value;
    const correct = questions[questionNm].correctAnswer === answer;
    if (correct) setScore((prev) => prev + 1);

    const userAnswer: AnswerType = {
      question: questions[questionNm].question,
      correctAnswer: questions[questionNm].correctAnswer,
      answer,
      correct,
    };

    setUserAnswers((prev) => [...prev, userAnswer]);
  };

  const nextQuestion = () => {
    if (questionNm + 1 === TOTAL_QUESTIONS) setGameOver(true);
    else setQuestionNm((prev) => prev + 1);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <h1 className="title">quiz</h1>
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button className="start" onClick={startTrivia}>
            start quiz
          </button>
        )}
        {!gameOver && <p className="message score">Score:{score}</p>}
        {loading && <p className="message">Loading For Question...</p>}
        {!gameOver && !loading && (
          <QuestionCard
            question={questions[questionNm].question}
            answers={questions[questionNm].answers}
            questionNm={questionNm}
            totalQuestions={TOTAL_QUESTIONS}
            userAnswer={userAnswers[questionNm]}
            checkAnswer={checkAnswer}
          />
        )}
        {!loading &&
          !gameOver &&
          userAnswers.length === questionNm + 1 &&
          questionNm !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              next question
            </button>
          )}
      </Wrapper>
    </>
  );
};

export default App;

import { TRIVIA_URL } from "./config";
import { shuffleArray } from "./utils";

export enum DifficultyType {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionDB = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type Question = {
  category: string;
  correctAnswer: string;
  difficulty: string;
  incorrectAnswers: string[];
  question: string;
  type: string;
  answers: string[];
};

export const getQuizQuestions = async (
  amount: number,
  difficulty: DifficultyType
): Promise<Question[]> => {
  const { results } = await (
    await fetch(TRIVIA_URL(amount, difficulty))
  ).json();

  return results.map((question: QuestionDB) => ({
    category: question.category,
    correctAnswer: question.correct_answer,
    difficulty: question.difficulty,
    incorrectAnswers: question.incorrect_answers,
    question: question.question,
    type: question.type,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

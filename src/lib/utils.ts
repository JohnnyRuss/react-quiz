import { QuestionT } from "@/types/index.types";
import { QuestionDB_T } from "@/types/api.types";

function shuffleArray(array: any[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export const fitQuizData = (
  question: QuestionDB_T,
  index: number
): QuestionT => ({
  _id: `question-${index}`,
  questionIndex: index,
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
});

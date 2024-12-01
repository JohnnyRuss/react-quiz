import { DifficultyT, MatchT } from "./index.types";

export type GetQuizQuestionsParamsT = {
  type: MatchT;
  amount: number;
  category?: string;
  difficulty: DifficultyT;
};

export type QuestionDB_T = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type CategoryShortDetailsDB_T = {
  id: string;
  name: string;
};

export type CategoryDetailsDB_T = {
  category_id: number;
  category_question_count: {
    total_question_count: number;
    total_easy_question_count: number;
    total_medium_question_count: number;
    total_hard_question_count: number;
  };
};

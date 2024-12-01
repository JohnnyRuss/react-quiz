export type AppContextT = {
  gameOver: boolean;
  startTrivia: () => Promise<void>;
  score: number;
  loading: boolean;
  currentQuestion: QuestionT;
  userAnswer: AnswerT | undefined;
  questions: Array<QuestionT>;
  userAnswers: Array<AnswerT>;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  nextQuestion: () => void;
  resetGameState: () => void;
  resetGame: boolean;
  isLastQuestion: boolean;
  settings: SettingsT;
  setSettings: React.Dispatch<React.SetStateAction<SettingsT>>;
  showMatchReview: boolean;
  setShowMatchReview: React.Dispatch<React.SetStateAction<boolean>>;
  showMatchConfig: boolean;
  setShowMatchConfig: React.Dispatch<React.SetStateAction<boolean>>;
  playClickSound: (onVoiceEnd?: () => void) => void;
  playHoverSound: () => void;
  getScoreToIncreaseBy: (difficulty: string) => number;
};

export type QuestionT = {
  _id: string;
  questionIndex: number;
  category: string;
  correctAnswer: string;
  difficulty: string;
  incorrectAnswers: string[];
  question: string;
  type: string;
  answers: string[];
};

export enum DifficultyT {
  ANY = "ANY",
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export enum MatchT {
  ANY = "ANY",
  MULTIPLE = "MULTIPLE",
  "TRUE/FALSE" = "TRUE/FALSE",
}

export type AnswerT = {
  question: string;
  answer: string;
  correctAnswer: string;
  correct: boolean;
};

export type SettingsT = {
  type: MatchT;
  difficulty: DifficultyT;
  questionsPerMatch: number;
  switchToNextQuestion: boolean;
  showCorrectAnswer: boolean;
  saveMatchHistory: boolean;
};

export type GameProgressT = {
  questions: Array<QuestionT>;
  currentQuestion: QuestionT;
  score: number;
  gameOver: boolean;
  userAnswers: Array<AnswerT>;
  resetGame: boolean;
};

export type CategoryDetailsT = {
  id: string;
  name: string;
  totalQuestionsCount: number;
  easyQuestionsCount: number;
  mediumQuestionsCount: number;
  hardQuestionsCount: number;
};

export type CategoryOptionT = {
  value: string;
  label: string;
};

export type SettingsKeyT = keyof SettingsT;

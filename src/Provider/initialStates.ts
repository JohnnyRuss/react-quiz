import {
  QuestionT,
  AppContextT,
  DifficultyT,
  SettingsT,
  MatchT,
} from "@/types/index.types";

export const currentQuestionInitialState: QuestionT = {
  _id: "",
  questionIndex: 0,
  answers: [],
  category: "",
  correctAnswer: "",
  difficulty: "",
  incorrectAnswers: [],
  question: "",
  type: "",
};

export const settingsInitialState: SettingsT = {
  type: MatchT.ANY,
  difficulty: DifficultyT.ANY,
  questionsPerMatch: 10,
  saveMatchHistory: true,
  showCorrectAnswer: true,
  switchToNextQuestion: false,
};

export const appContextInitialState: AppContextT = {
  score: NaN,
  gameOver: true,
  startTrivia: async () => {},
  loading: false,
  currentQuestion: currentQuestionInitialState,
  userAnswer: undefined,
  checkAnswer: () => {},
  nextQuestion: () => {},
  resetGameState: () => {},
  resetGame: true,
  isLastQuestion: false,
  settings: settingsInitialState,
  setSettings: () => {},
  setShowMatchReview: () => {},
  showMatchReview: false,
  questions: [],
  userAnswers: [],
  showMatchConfig: false,
  setShowMatchConfig: () => {},
  playClickSound: () => {},
  playHoverSound: () => {},
  getScoreToIncreaseBy: () => NaN,
};

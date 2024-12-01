/* eslint-disable react-hooks/exhaustive-deps */
import { Howl } from "howler";
import { createContext, useState, useContext, useEffect } from "react";

import {
  settingsInitialState,
  appContextInitialState,
  currentQuestionInitialState,
} from "./initialStates";
import LS from "@/lib/storage";
import {
  LS_SETTINGS_KEY,
  LS_CATEGORY_KEY,
  LS_GAME_PROGRESS_KEY,
  SCORE_FOR_EASY,
  SCORE_FOR_HARD,
  SCORE_FOR_MEDIUM,
} from "@/lib/config";
import { getQuizQuestions } from "@/lib/api";

import { GlobalStyles } from "@/styles/app.styles";

import {
  AnswerT,
  SettingsT,
  QuestionT,
  AppContextT,
  GameProgressT,
  DifficultyT,
} from "@/types/index.types";

type AppProviderT = {
  children: React.ReactNode;
};

export const AppContext = createContext<AppContextT>(appContextInitialState);

export const useAppContext = () => useContext(AppContext);

const AppProvider: React.FC<AppProviderT> = ({ children }) => {
  /////////////////////////
  // Sound Effects

  const playClickSound = (onVoiceEnd?: () => void) => {
    const clickSound = new Howl({
      src: ["/assets/sounds/mouse-click-sound.mp3"],
      rate: 2,
    });

    clickSound.play();
    clickSound.on("end", () =>
      setTimeout(() => onVoiceEnd && onVoiceEnd(), 250)
    );
  };

  const playHoverSound = () => {
    const hoverSound = new Howl({
      src: ["/assets/sounds/hover-sound.mp3"],
      rate: 2.5,
    });

    hoverSound.seek(0.07);
    hoverSound.play();
  };

  const playWinSound = () => {
    const winSound = new Howl({
      src: ["/assets/sounds/win-sound.mp3"],
    });

    winSound.play();
  };

  const playCorrectSound = () => {
    const correctSound = new Howl({
      src: ["/assets/sounds/correct-sound.mp3"],
    });

    correctSound.play();
  };

  const playWrongSound = () => {
    const wrongSound = new Howl({
      src: ["/assets/sounds/wrong-sound.mp3"],
    });
    wrongSound.play();
  };

  // Business Logic

  const [settings, setSettings] = useState<SettingsT>(settingsInitialState);

  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<Array<QuestionT>>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionT>(
    currentQuestionInitialState
  );

  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<AnswerT>>([]);

  const [gameOver, setGameOver] = useState(true);
  const [resetGame, setResetGame] = useState<boolean>(true);

  const [showMatchReview, setShowMatchReview] = useState<boolean>(false);

  const autoSwitch = settings.switchToNextQuestion;
  const userAnswer = userAnswers?.[currentQuestion?.questionIndex || 0];
  const isLastQuestion =
    currentQuestion.questionIndex + 1 === settings.questionsPerMatch;
  const delaySpeed = settings.showCorrectAnswer ? 1000 : 500;

  const [showMatchConfig, setShowMatchConfig] = useState<boolean>(false);

  const getValuesToUpdateProgressStorage = () => ({
    score,
    gameOver,
    questions,
    resetGame,
    userAnswers,
    currentQuestion,
  });

  const onQuestionChange = (
    updatedScore?: number,
    updatedUserAnswers?: Array<AnswerT>
  ) => {
    const storageState = {
      ...getValuesToUpdateProgressStorage(),
    };

    if (autoSwitch) {
      storageState.score = updatedScore!;
      storageState.userAnswers = updatedUserAnswers!;
    }

    function switchToNextHandler() {
      if (isLastQuestion) {
        if (score > 0) playWinSound();

        setGameOver(true);

        LS.setValue(LS_GAME_PROGRESS_KEY, { ...storageState, gameOver: true });
      } else {
        const nextQuestion = questions[currentQuestion.questionIndex + 1];

        setCurrentQuestion(() => nextQuestion);

        LS.setValue(LS_GAME_PROGRESS_KEY, {
          ...storageState,
          currentQuestion: nextQuestion,
        });
      }
    }

    if (autoSwitch)
      setTimeout(() => {
        switchToNextHandler();
      }, delaySpeed);
    else switchToNextHandler();
  };

  const startTrivia = async () => {
    try {
      setLoading(true);

      setScore(0);
      setGameOver(false);
      setUserAnswers([]);
      setResetGame(false);
      setShowMatchConfig(false);

      const selected_category = LS.getValue(LS_CATEGORY_KEY);

      const data = await getQuizQuestions({
        type: settings.type,
        difficulty: settings.difficulty,
        category: selected_category?.value || "",
        amount: settings.questionsPerMatch,
      });

      setQuestions(() => data);
      setCurrentQuestion(() => data[0]);

      LS.setValue(LS_GAME_PROGRESS_KEY, {
        score: 0,
        userAnswers: [],
        gameOver: false,
        resetGame: false,
        questions: data,
        currentQuestion: data[0],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getScoreToIncreaseBy = (difficulty: string): number =>
    difficulty === DifficultyT.HARD.toLocaleLowerCase()
      ? SCORE_FOR_HARD
      : difficulty === DifficultyT.MEDIUM.toLocaleLowerCase()
      ? SCORE_FOR_MEDIUM
      : difficulty === DifficultyT.EASY.toLocaleLowerCase()
      ? SCORE_FOR_EASY
      : 0;

  const checkAnswer = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | { currentTarget: { value: string } }
  ) => {
    playClickSound();

    const answer = e.currentTarget.value;

    const isCorrectAnswer = currentQuestion.correctAnswer === answer;

    isCorrectAnswer ? playCorrectSound() : playWrongSound();

    const userAnswer: AnswerT = {
      answer,
      correct: isCorrectAnswer,
      question: currentQuestion.question,
      correctAnswer: currentQuestion.correctAnswer,
    };

    const scoreToIncreaseBy = getScoreToIncreaseBy(currentQuestion.difficulty);

    const updatedScore = isCorrectAnswer ? score + scoreToIncreaseBy : score;
    const updatedUserAnswers = [...userAnswers, userAnswer];

    if (isCorrectAnswer) setScore(() => updatedScore);

    setUserAnswers(() => updatedUserAnswers);

    if (autoSwitch) {
      onQuestionChange(updatedScore, updatedUserAnswers);
    } else {
      const storageState = {
        ...getValuesToUpdateProgressStorage(),
        score: updatedScore,
        userAnswers: updatedUserAnswers,
      };

      if (isLastQuestion) {
        setTimeout(() => {
          if (score > 0) playWinSound();

          setGameOver(true);

          LS.setValue(LS_GAME_PROGRESS_KEY, {
            ...storageState,
            gameOver: true,
          });
        }, delaySpeed);
      } else LS.setValue(LS_GAME_PROGRESS_KEY, storageState);
    }
  };

  const nextQuestion = () => onQuestionChange();

  const resetGameState = () => {
    setScore(0);
    setUserAnswers([]);
    setGameOver(true);
    setResetGame(true);
    setQuestions([]);
    setCurrentQuestion(() => currentQuestionInitialState);
    // LS.removeValue(LS_CATEGORY_KEY);
    LS.removeValue(LS_GAME_PROGRESS_KEY);
  };

  useEffect(() => {
    const currentSettings: SettingsT | undefined = LS.getValue(LS_SETTINGS_KEY);

    if (!currentSettings) LS.setValue(LS_SETTINGS_KEY, settings);
    else setSettings(() => currentSettings);

    const ongoingProgress: GameProgressT | undefined =
      LS.getValue(LS_GAME_PROGRESS_KEY);

    if (ongoingProgress) {
      setScore(ongoingProgress.score);
      setGameOver(ongoingProgress.gameOver);
      setUserAnswers(ongoingProgress.userAnswers);
      setResetGame(ongoingProgress.resetGame);
      setQuestions(() => ongoingProgress.questions);
      setCurrentQuestion(() => ongoingProgress.currentQuestion);
    }
  }, []);

  useEffect(() => {
    if (!autoSwitch || (autoSwitch && !userAnswer)) return;

    onQuestionChange(score, userAnswers);
  }, [autoSwitch]);

  return (
    <AppContext.Provider
      value={{
        loading,
        startTrivia,
        checkAnswer,
        nextQuestion,
        resetGameState,
        score,
        currentQuestion,
        userAnswer,
        gameOver,
        resetGame,
        settings,
        setSettings,
        isLastQuestion,
        setShowMatchReview,
        showMatchReview,
        questions,
        userAnswers,
        showMatchConfig,
        setShowMatchConfig,
        playClickSound,
        playHoverSound,
        getScoreToIncreaseBy,
      }}
    >
      <GlobalStyles />
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

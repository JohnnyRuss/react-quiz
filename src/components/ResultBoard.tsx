import { useAppContext } from "@/Provider/AppProvider";

import * as Styled from "./styles/resultBoard.styled";
import { DifficultyT } from "@/types/index.types";

const ResultBoard: React.FC = () => {
  const {
    settings,
    resetGameState,
    playHoverSound,
    playClickSound,
    setShowMatchReview,
    setShowMatchConfig,
    ...config
  } = useAppContext();

  const currentDifficulty = settings.difficulty;
  const difficultyColor: string =
    currentDifficulty === DifficultyT.EASY
      ? "#56ffa4"
      : currentDifficulty === DifficultyT.MEDIUM
      ? "#FFC107"
      : "#ff5656";

  const showReviewMatchBtn =
    !config.resetGame && settings.saveMatchHistory && config.gameOver;

  const maxAvailableScore = config.questions.reduce(
    (acc, question) =>
      (acc += config.getScoreToIncreaseBy(question.difficulty)),
    0
  );

  const onMouseEnter = () => playHoverSound();

  const onPlayAgain = () => {
    playClickSound(() => {
      resetGameState();
      setShowMatchConfig(true);
    });
  };

  const onShowReview = () => playClickSound(() => setShowMatchReview(true));

  const onGoHome = () => playClickSound(() => resetGameState());

  return (
    <Styled.ResultBoard>
      <div className="result-window">
        <h4>Congratulations ✨💫🥳</h4>

        <p>
          <span>
            You got <strong>{config.score}</strong> scores
          </span>
          &nbsp;
          <span>from {maxAvailableScore}</span>
        </p>

        <p className="difficulty">
          <span>Difficulty:</span>
          <span style={{ color: difficultyColor }}>{currentDifficulty}</span>
        </p>

        <div className="actions">
          {showReviewMatchBtn && (
            <button
              className="btn"
              onMouseEnter={onMouseEnter}
              onClick={onShowReview}
            >
              <span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M11.962 20q-3.046 0-5.311-1.99q-2.264-1.989-2.62-5.01h1.011q.408 2.58 2.351 4.29T11.962 19q2.925 0 4.962-2.037T18.962 12t-2.038-4.963T11.962 5q-1.553 0-2.918.656q-1.365.655-2.41 1.805h2.481v1H4.962V4.309h1v2.388q1.16-1.273 2.718-1.984T11.962 4q1.663 0 3.118.626t2.542 1.714t1.714 2.542t.626 3.118t-.626 3.118t-1.714 2.542t-2.542 1.714t-3.118.626m3.204-4.146l-3.647-3.646V7h1v4.792l3.354 3.354z"
                  />
                </svg>
              </span>
              Review Match
            </button>
          )}

          <button
            className="btn"
            onClick={onPlayAgain}
            onMouseEnter={onMouseEnter}
          >
            <span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="currentColor" d="M8 5.14v14l11-7z" />
              </svg>
            </span>
            Play Again
          </button>

          <button
            className="btn"
            onClick={onGoHome}
            onMouseEnter={onMouseEnter}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
              </svg>
            </span>
            Home
          </button>
        </div>
      </div>
    </Styled.ResultBoard>
  );
};

export default ResultBoard;

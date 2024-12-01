import styled from "styled-components";

import { useAppContext } from "@/Provider/AppProvider";

import * as UI from "@/components";

const StyledPlayingBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 1rem;
    margin-top: 2rem;
  }
`;

const PlayingBoard: React.FC = () => {
  const { settings, gameOver, resetGame, loading, ...config } = useAppContext();

  const showNextButton =
    !settings.switchToNextQuestion && !config.isLastQuestion;

  return (
    <>
      {loading && <UI.LoadingText />}

      {!loading && !gameOver && (
        <StyledPlayingBoard>
          <UI.Scores />
          <UI.QuestionCard />
          {showNextButton && <UI.NextButton />}
        </StyledPlayingBoard>
      )}

      {gameOver && !resetGame && (
        <>{config.showMatchReview ? <UI.MatchReview /> : <UI.ResultBoard />}</>
      )}
    </>
  );
};

export default PlayingBoard;

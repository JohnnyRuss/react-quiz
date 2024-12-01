import { useAppContext } from "@/Provider/AppProvider";

import * as Styled from "./styles/scores.styled";

const Scores: React.FC = () => {
  const { score, startTrivia, resetGameState, playClickSound } =
    useAppContext();

  const onLeaveGame = () => playClickSound(resetGameState);
  const onRestartGame = () => playClickSound(startTrivia);

  return (
    <Styled.Scores className="message">
      <div>
        <button title="Leave Game" onClick={onLeaveGame}>
          ❌
        </button>
        <button title="Restart" onClick={onRestartGame}>
          🔁
        </button>
      </div>

      <span>Score:&nbsp;{score}</span>
    </Styled.Scores>
  );
};

export default Scores;

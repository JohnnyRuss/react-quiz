import { useAppContext } from "@/Provider/AppProvider";
import styled from "styled-components";

const StyledStartQuizButton = styled.button`
  width: 100%;
`;

type StartQuizButtonT = {
  startTrivia: () => void;
};

const StartQuizButton: React.FC<StartQuizButtonT> = ({ startTrivia }) => {
  const { playHoverSound } = useAppContext();
  return (
    <StyledStartQuizButton
      className="btn"
      onClick={startTrivia}
      onMouseOver={playHoverSound}
    >
      Start Quiz
    </StyledStartQuizButton>
  );
};

export default StartQuizButton;

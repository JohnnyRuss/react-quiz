import { FC } from "react";
import { AnswerType } from "../../App";
import { Wrapper, ButtonWrapper } from "../../styles/QuestionCard.styles";

interface CardProps {
  question: string;
  answers: string[];
  userAnswer: AnswerType | undefined;
  questionNm: number;
  totalQuestions: number;
  checkAnswer: any;
}

const QuestionCard: FC<CardProps> = ({
  question,
  answers,
  userAnswer,
  questionNm,
  totalQuestions,
  checkAnswer,
}) => {
  return (
    <Wrapper>
      <p className="text-secondary">
        <strong>questions</strong>:<span>{questionNm}</span>/
        <span>{totalQuestions}</span>
      </p>
      <p className="text-primary" dangerouslySetInnerHTML={{ __html: question }}></p>
      {answers.map((answer, i) => (
        <ButtonWrapper
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={`answer-${i}`}
        >
          <button className="cart-btn" disabled={!!userAnswer} value={answer} onClick={checkAnswer}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};

export default QuestionCard;

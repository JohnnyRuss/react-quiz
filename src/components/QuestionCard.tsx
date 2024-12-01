import { useAppContext } from "@/Provider/AppProvider";

import * as Styled from "./styles/questionCard.styled";

const QuestionCard: React.FC = () => {
  const { currentQuestion, userAnswer, checkAnswer, settings } =
    useAppContext();

  const settingsDifficulty = settings.difficulty.toLocaleLowerCase();

  const currentDifficulty =
    settingsDifficulty === "any"
      ? `${settingsDifficulty} - ${currentQuestion.difficulty}`
      : settingsDifficulty;

  return (
    <Styled.QuestionCard>
      <div className="question-card--header">
        <p className="answered-questions--count">
          <strong>questions</strong>:&nbsp;
          <span>{currentQuestion.questionIndex + 1}</span>/
          <span>{settings.questionsPerMatch}</span>
        </p>

        <div className="subhead">
          <p className="subhead-block">
            <span>Difficulty:</span>
            <span>{currentDifficulty}</span>
          </p>

          <p className="subhead-block">
            <span>Category:</span>
            <span
              dangerouslySetInnerHTML={{ __html: currentQuestion.category }}
            />
          </p>
        </div>

        <p
          className="question"
          dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
        />
      </div>

      <div>
        {currentQuestion.answers.map((answer, i) => (
          <Styled.ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={`answer-${i}`}
          >
            <button
              className={`cart-btn ${
                settings.showCorrectAnswer ? "show-correct" : ""
              }`}
              disabled={!!userAnswer}
              value={answer}
              onClick={checkAnswer}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </Styled.ButtonWrapper>
        ))}
      </div>
    </Styled.QuestionCard>
  );
};

export default QuestionCard;

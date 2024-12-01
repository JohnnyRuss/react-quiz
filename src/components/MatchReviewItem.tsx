import { QuestionT, AnswerT } from "@/types/index.types";

type MatchReviewItemT = {
  index: number;
  question: QuestionT;
  answer: AnswerT;
};

const MatchReviewItem: React.FC<MatchReviewItemT> = ({
  index,
  answer,
  question,
}) => {
  return (
    <li className="questions-list--item">
      <div className="questions-list--item__question">
        <span>{index + 1})</span>

        <p dangerouslySetInnerHTML={{ __html: question.question }} />

        <div
          className={`correct-check ${answer.correct ? "correct" : "wrong"}`}
        >
          {answer.correct ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.9 8.1L9 18l-4.95-4.95l.71-.71L9 16.59l9.19-9.2z"
                />
              </svg>
            </span>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                />
              </svg>
            </span>
          )}
        </div>
      </div>

      <p
        className="correct-answer"
        dangerouslySetInnerHTML={{ __html: question.correctAnswer }}
      />

      {!answer.correct && (
        <p
          className="wrong-answer "
          dangerouslySetInnerHTML={{ __html: answer.answer }}
        />
      )}
    </li>
  );
};

export default MatchReviewItem;

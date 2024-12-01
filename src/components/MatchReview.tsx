import { useAppContext } from "@/Provider/AppProvider";

import * as Styled from "./styles/matchReview.styled";
import MatchReviewItem from "./MatchReviewItem";

const MatchReview: React.FC = () => {
  const { questions, userAnswers, setShowMatchReview, playClickSound } =
    useAppContext();

  const onClose = () => playClickSound(() => setShowMatchReview(false));

  return (
    <Styled.MatchReview>
      <div className="review-result--header">
        <h4>Review Your Result</h4>

        <button onClick={onClose}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
            />
          </svg>
        </button>
      </div>

      <ul className="questions-list">
        {questions.map((question, index) => (
          <MatchReviewItem
            key={question._id}
            index={index}
            question={question}
            answer={userAnswers[index]}
          />
        ))}
      </ul>
    </Styled.MatchReview>
  );
};

export default MatchReview;

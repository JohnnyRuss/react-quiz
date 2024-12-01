import styled from "styled-components";

export const QuestionCard = styled.div`
  width: 40rem;
  margin-top: 1.5rem;
  background: #e79471ff;
  border-radius: 1rem;
  border: 2px solid #674a44ff;
  padding: 2rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .question-card--header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .answered-questions--count {
      font-size: 1.6rem;
      text-transform: capitalize;
      font-weight: 900;
    }

    .subhead {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      &-block {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
        text-transform: capitalize;
        font-size: 14px;
        border-bottom: 1px solid #fff;

        span:last-child {
          color: #56ffa4;
          font-weight: 700;
          letter-spacing: 0.6px;
        }
      }
    }

    .question {
      height: 8rem;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  .cart-btn {
    cursor: pointer;
    font-size: 1.2rem;
    user-select: none;
    width: 100%;
    height: 4rem;
    margin: 0.5rem 0;
    border: 1px solid #674a44ff;
    border-radius: 0.5rem;
    color: #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.2);
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    letter-spacing: 0.3px;
    background: ${({ correct, userClicked }) =>
      !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #413a41ff, #674a44ff)"};

    &.show-correct {
      background: ${({ correct, userClicked }) =>
        correct
          ? "linear-gradient(90deg, #56ffa4, #59bc86)"
          : !correct && userClicked
          ? "linear-gradient(90deg, #ff5656, #c16868)"
          : "linear-gradient(90deg, #413a41ff, #674a44ff)"};
    }
  }
`;

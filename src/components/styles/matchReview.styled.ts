import { scrollbar } from "@/styles/utils.styled";
import styled from "styled-components";

export const MatchReview = styled.div`
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
  gap: 3rem;
  font-size: 14px;
  height: 80vh;

  .review-result--header {
    display: flex;
    align-items: center;

    h4 {
      font-size: 22px;
      width: 100%;
      text-align: start;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      font-size: 32px;
      font-weight: 900;
      color: #fff;
      cursor: pointer;
    }
  }

  .questions-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    padding-bottom: 2rem;
    padding-right: 2rem;
    scroll-behavior: smooth;
    ${scrollbar}
  }

  .questions-list--item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .questions-list--item__question {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    p {
      text-align: start;
    }
  }

  .correct-check {
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 900;

    &.correct {
      color: #56ffa4;
    }

    &.wrong {
      color: #ff5656;
    }
  }

  .wrong-answer,
  .correct-answer {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    color: #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.2);
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    letter-spacing: 0.3px;
  }

  .correct-answer {
    background: linear-gradient(90deg, #56ffa4, #59bc86);
  }

  .wrong-answer {
    background: linear-gradient(90deg, #ff5656, #c16868);
  }

  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

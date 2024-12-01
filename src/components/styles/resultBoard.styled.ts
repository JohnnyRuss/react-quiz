import styled from "styled-components";

export const ResultBoard = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .result-window {
    width: 52rem;
    background: #e79471ff;
    border-radius: 1rem;
    border: 2px solid #674a44ff;
    color: #fff;
    padding: 2rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
    gap: 2rem;

    @media screen and (max-width: 500px) {
      width: 95%;
    }
  }

  h4 {
    font-size: 25px;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .difficulty {
    font-size: 16px;
    gap: 1rem;

    span:last-child {
      color: green;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
    width: 100%;

    button {
      width: 100%;
      flex: 1;
      padding: 1rem 0;
      border-radius: 0.5rem;
      border: 1px solid gray;
      font-weight: 700;
      letter-spacing: 0.5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin: 0 !important;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        line-height: 1;
      }

      &:first-child span {
        transform: translateY(-1px);
      }

      &:last-child span {
        transform: translateY(-2px);
      }
    }
  }
`;

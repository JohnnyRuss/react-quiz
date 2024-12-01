import styled from "styled-components";

export const MatchConfig = styled.div`
  width: 40rem;
  margin-top: 1.5rem;
  background: #e79471ff;
  border-radius: 1rem;
  border: 2px solid #674a44ff;
  padding: 2rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-transform: capitalize;

  .config-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 28px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  h4 {
    font-size: 25px;
  }

  span {
    color: #fff;
    font-weight: 700;
  }

  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

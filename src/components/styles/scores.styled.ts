import styled from "styled-components";

export const Scores = styled.div`
  font-size: 3.2rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  padding: 0 2rem;

  span {
    font-size: 22px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  button {
    font-size: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

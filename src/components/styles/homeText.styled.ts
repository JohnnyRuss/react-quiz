import styled from "styled-components";

export const HomeText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-context);
  grid-template-rows: repeat(2, max-context);
  align-items: center;
  align-content: center;
  column-gap: 1.5rem;
  height: 40vh;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 1);

  .more-than {
    grid-column: 1;
    grid-row: 1;
    font-size: 28px;
    line-height: 1.4;
    letter-spacing: 4px;
    width: max-content;
    font-weight: 500;
    color: #fff;
  }

  .number {
    grid-column: 2;
    grid-row: 1;
    font-size: 74px;
    line-height: 1;
    letter-spacing: 4px;
    width: max-content;
    font-weight: 700;
    background: linear-gradient(140deg, #56ffa4, #59bc86);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-shadow: none;
  }

  .questions {
    grid-column: span 2;
    grid-row: 2;
    font-size: 50px;
    line-height: 1;
    letter-spacing: 4px;
    font-weight: 500;
    color: #fff;
    text-decoration: underline;
  }
`;

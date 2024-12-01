import styled from "styled-components";

export const Title = styled.h1`
  background: linear-gradient(180deg, #d9ae89, #e79471ff);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(2px 2px #674a44ff);
  font-weight: 400;
  margin: 2rem;
  font-size: 7rem;
  text-align: center;
  text-transform: capitalize;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

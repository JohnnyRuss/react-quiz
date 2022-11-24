import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        height:100%;
        font-size:62.5%;
    }

    body{
        background: url('./assets/summer.jpg');
        background-size: cover;
        margin:0;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    background: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-weight: 400;
    margin: 2rem;
    font-size: 7rem;
    text-align: center;
    text-transform: capitalize;
  }

  .message {
    color: #fff;
  }

  .score {
    font-size: 3.2rem;
    margin: 0;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    margin: 2rem 0;
    height: 4rem;
    padding: 0 4rem;
  }

  .start {
    max-width: 20rem;
  }
`;

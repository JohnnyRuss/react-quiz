import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    html{
      height:100%;
      font-size:62.5%;
    }

    body{
      background: url('./assets/bg.webp');
      background-size: cover;
      font-family: "Open Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      font-variation-settings:"width" 100;
    }

    .btn{
      cursor: pointer;
      background: linear-gradient(120deg, #945c42ff, #e79471ff);
      border: 2px solid rgba(148,92,66,0.5);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
      border-radius: 1rem;
      margin: 2rem 0;
      height: 4.875rem;
      padding: 0 4rem;
      color:#fff;
      letter-spacing: 1px;
      font-size: 16px;
      transition: all 0.3s ease;
      pointer-events: all;

      &:hover{
        border-color: rgba(148,92,66,0.8);
        transform: translateY(-3px);
      }

      &:disabled{
        opacity: 0.5;
        pointer-events: none;
      }
    }

    .message {
      color: #fff;
    }
    
    .loading-text{
      font-size: 20px;
      color:#fff;
      padding-top: 40px;
    }
`;

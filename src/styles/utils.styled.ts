import { css } from "styled-components";

export const scrollbar = css`
  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #53403dff;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #945c42ff;
    border-radius: 1rem;
  }
`;

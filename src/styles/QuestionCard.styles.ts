import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40rem;
  margin-top:1.5rem;
  background: #ebfeff;
  border-radius: 1rem;
  border: 2px solid #0085a3;
  padding: 2rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  .text-secondary {
    font-size: 1.6rem;
    text-transform: capitalize;
  }

  .text-primary {
    font-size: 1.8rem;
  }

  @media (max-width:31.25em){
    width:calc(100% - 2rem);
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
    border: 3px solid #fff;
    border-radius: 1rem;
    color: #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);

    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
  }
`;

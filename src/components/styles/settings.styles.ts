import styled from "styled-components";

export const Settings = styled.div`
  .gear-btn {
    background: none;
    border: none;
    font-size: 45px;
    color: #fff;
    position: fixed;
    right: 20px;
    top: 20px;
    cursor: pointer;
    z-index: 999;
  }

  .prevent-change--msg {
    color: #ff5656;
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 1rem;

    span:last-child {
      color: #56ffa4;
      font-weight: 600;
      font-size: 16px;
      padding-top: 5px;
    }
  }

  .settings-box {
    position: fixed;
    background-color: #fff;
    z-index: 999;
    top: 80px;
    right: 40px;
    border-radius: 0.75rem;
    width: 44rem;
    padding: 3rem 2rem;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-transform: capitalize;
    box-shadow: 7px 5px 15px 5px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 500px) {
      right: 1rem;
      top: 7rem;
      width: 95vw;
    }
  }

  .backdrop {
    z-index: 99;
    position: fixed;
    inset: 0;
  }

  .switch-box {
  }

  span {
    font-weight: 600;
  }
`;

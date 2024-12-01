import { scrollbar } from "@/styles/utils.styled";
import styled from "styled-components";

export const SelectField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  color: black;

  .select__control {
    cursor: pointer;
  }

  .select__control--is-focused {
    border-color: #e79471ff;
    box-shadow: 0 0 0 1px #e79471ff;
  }

  .select__menu-list {
    padding: 1rem;
    overflow-x: hidden;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    ${scrollbar}
  }

  .select__option {
    cursor: pointer;
    border-radius: inherit;
    transition: all 0.2s ease;
  }

  .select__option--is-selected,
  .select__option--is-selected.select__option--is-focused {
    background-color: #945c42ff;
  }

  .select__option--is-focused {
    background-color: #e79471ff;
  }

  .select__option--is-selected,
  .select__option--is-focused {
    color: #fff;
  }
`;

export const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

import styled from "styled-components";

import * as UI from "@/components";

type ContainerT = {
  children: React.ReactNode;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Container: React.FC<ContainerT> = ({ children }) => {
  return (
    <StyledContainer>
      <UI.Title />
      {children}
      <UI.Settings />
    </StyledContainer>
  );
};

export default Container;

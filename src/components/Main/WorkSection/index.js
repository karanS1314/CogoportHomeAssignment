import React from "react";

import {
  Container,
  H1,
  Wrapper,
  Btn,
  ColumLeft,
  ColumRight,
} from "./WorkElements";
const WorkSection = () => {
  return (
    <>
      <Container id="grid">
        <H1>How it Works</H1>
        <Wrapper>
          <ColumLeft>
            <Btn yellowBg={true}>For Cargo Owners</Btn>
          </ColumLeft>
          <ColumRight>
            <Btn>For Logistic Partners</Btn>
          </ColumRight>
        </Wrapper>
      </Container>
    </>
  );
};

export default WorkSection;

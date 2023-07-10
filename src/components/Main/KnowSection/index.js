import React from "react";

import {
  Container,
  Row,
  Column1,
  Column2,
  Heading,
  Btn,
} from "./KnowElements";
const KnowSection = () => {
  return (
    <>
      <Container>
        <Row>
          <Column1>
            <Heading>
              Ready to take your Supply Chain to the Next Level?
            </Heading>
          </Column1>
          <Column2>
            <Btn>Get Started ▶</Btn>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default KnowSection;

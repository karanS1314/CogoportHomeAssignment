import React from "react";

import {
  Container,
  Row,
  Column1,
  Column2,
  Heading,
  Subtitle,
  Btn,
} from "./KnowElements";
const KnowSection2 = () => {
  return (
    <>
      <Container>
        <Row redBg={true}>
          <Column1 redBg={true}>
            <Heading>Grow Faster with Cogoport</Heading>
            <Subtitle>
              Know more about Cogoport’s Global Trade PlatformTM
            </Subtitle>
          </Column1>
          <Column2>
            <Btn redBg={true}>Get Started ▶</Btn>
          </Column2>
        </Row>
      </Container>
    </>
  );
};

export default KnowSection2;

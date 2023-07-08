import React from "react";
import laptopImg from "../../../assets/images/MainImages/laptop.webp";
import { Container, Wrapper, Img } from "./LaptopElements";
const LaptopSection = () => {
  return (
    <>
      <Container id="grid">
        <Wrapper>
          <Img src={laptopImg}></Img>
        </Wrapper>
      </Container>
    </>
  );
};

export default LaptopSection;

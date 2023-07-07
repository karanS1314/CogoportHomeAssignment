import React from "react";
import i1 from "../../../assets/images/MainImages/CardImages/i1.jpg";
import i2 from "../../../assets/images/MainImages/CardImages/i2.jpg";
import i3 from "../../../assets/images/MainImages/CardImages/i3.jpg";
import {
  CardContainer,
  CardH1,
  CardWrapper,
  CardCard,
  CardIcon,
  CardH2,
  CardP,
  CardP2,
  Btn,
} from "./CardElements";
const CardSection = () => {
  return (
    <CardContainer id="card">
      <CardH1>Blogs</CardH1>
      <CardWrapper>
        <CardCard>
          <CardIcon src={i1} />
          <CardH2>Trade News</CardH2>
          <CardP>
            Cogoport Enables Movement of 11 Envirotainer Containers from India
            to Italy
          </CardP>
          <CardP2>
            Cogoport’s collective logistics and technical expertise came in
            handy.
          </CardP2>
        </CardCard>
        <CardCard>
          <CardIcon src={i2} />
          <CardH2>Expert Speak</CardH2>
          <CardP>Cogoport: A Global Trade Platform</CardP>
          <CardP2>
            Cogoport leverages technology and caters to enterprises of all
            sizes.
          </CardP2>
        </CardCard>
        <CardCard>
          <CardIcon src={i3} />
          <CardH2>Industry Basics</CardH2>
          <CardP>
            Understanding Lean Supply Chain Management: Definition and
            Considerations
          </CardP>
          <CardP2>
            So, what are the benefits and key components? Read on!
          </CardP2>
        </CardCard>
      </CardWrapper>
      <Btn>View All</Btn>
    </CardContainer>
  );
};

export default CardSection;

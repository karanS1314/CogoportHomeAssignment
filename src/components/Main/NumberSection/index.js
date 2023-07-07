import React from "react";
import down from "../../../assets/images/down.png";
import {
  CardContainer,
  CardWrapper,
  CardCard,
  CardIcon,
  CardH2,
} from "./NumberElements";
import CountUp from "react-countup";

const GridSection = () => {
  return (
    <>
      <CardContainer id="grid">
        <CardWrapper>
          <CardCard>
            <CardIcon>
              <CountUp end={180} />+
            </CardIcon>
            <CardH2>Countries Served</CardH2>
          </CardCard>
          <CardCard>
            <CardIcon>
              <CountUp end={10000} />
            </CardIcon>
            <CardH2>Ports Pairs Served</CardH2>
          </CardCard>
          <CardCard>
            <CardIcon>
              <CountUp end={30000} />+
            </CardIcon>
            <CardH2>Tons of Air Cargo Moved</CardH2>
          </CardCard>
          <CardCard>
            <CardIcon>
              <CountUp end={700000} />
            </CardIcon>
            <CardH2>Containers Moved</CardH2>
          </CardCard>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default GridSection;

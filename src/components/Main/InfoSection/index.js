import React from "react";
import mapImg from "../../../assets/images/MainImages/mapImg.webp";

import {
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  Heading,
  Subtitle,
  Img,
} from "./InfoElements";
const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoRow>
          <Column1>
            <Heading>One Stop Solution for Your Supply Chain</Heading>
            <Subtitle>
              Connected Shipping, Finance, and Trade-tech, to Power Global Trade
              and Supply Chains.
            </Subtitle>
          </Column1>
          <Column2>
            <Img src={mapImg} alt="mapImg" />
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

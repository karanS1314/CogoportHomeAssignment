import React from "react";
import girlImg from "../../../assets/images/MainImages/girlImg.webp";

import {
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  Heading,
  Subtitle,
  Btn,
  Image,
  variants,
} from "./InfoElements2";
const InfoSection2 = () => {
  return (
    <>
      <InfoContainer>
        <InfoRow>
          <Column1>
            <Heading>Get Started Today</Heading>
            <Subtitle>
              Plan, Book and Finance your shipment in one place.<br></br>{" "}
              Experience how Cogoport’s Global Trade Platform can Turbocharge
              your Business.
            </Subtitle>
            <Btn girl={true}>Get Started</Btn>
          </Column1>
          <Column2>
            <Image
              src={girlImg}
              alt="Hero"
              whileTap={{ scale: 0.8 }}
              variants={variants}
              initial="initial"
              animate="animate"
            />
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection2;

import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  width: 100%;
  background-color: #fffef2;
  padding: 0rem calc((100vw - 1300px) / 2);
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 960px) {
    grid-template-areas: "col2 col2" "col1 col1";
  }
`;

export const Column1 = styled(motion.div)`
  display: flex;
  color: "black";
  grid-area: col1;
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 10rem 5rem;
  h1 {
    font-size: 40px;
    line-height: 48px;
    margin: 0;
    font-weight: 1100;
  }
  p {
    margin: 1.5rem 6rem 1.5rem 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: lighter;
  }
  @media screen and (max-width: 768px) {
    padding: 5rem 4rem;
    h1 {
      font-size: 24px;
      line-height: 28.8px;
    }
    p {
      font-size: 16px;
      line-height: 21px;
    }
  }
`;

export const Column2 = styled.div`
  display: flex;
  grid-area: col2;
  justify-content: center;
  padding: 10rem 5rem;
  @media screen and (max-width: 960px) {
    margin: -3rem 0 -12rem;
  }
`;

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: black;
`;

export const Img = styled.img`
  width: 100%;
  @media screen and (max-width: 960px) {
    width: 50%;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

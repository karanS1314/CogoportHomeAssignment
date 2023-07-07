import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-columns: 1.9fr 1fr;
  width: 100%;
  background-color: ${({ redBg }) => (redBg ? "#ee3425" : "#fbdc00")};
  padding: 3rem calc((100vw - 1300px) / 2);
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 960px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled(motion.div)`
  display: flex;
  color: ${({ redBg }) => (redBg ? "white" : "black")};
  grid-area: col1;
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem 5rem;
  h1 {
    font-size: 28px;
    line-height: 33.6px;
    margin: 0;
    font-weight: 1100;
  }
  p {
    margin: 1.5rem 6rem 1.5rem 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: lighter;
  }
  @media screen and (max-width: 960px) {
    padding: 0 4rem;
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
  justify-content: right;
  padding: 0 5rem;
  @media screen and (max-width: 960px) {
    padding: 2rem 4rem 3rem;
    justify-content: flex-start;
  }
`;

export const Heading = styled.h1``;

export const Subtitle = styled.p``;

export const Img = styled.img`
  width: 100%;
  @media screen and (max-width: 960px) {
    width: 50%;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
export const Btn = styled(LinkR)`
  border-radius: 5px;
  text-align: center;
  background: ${({ redBg }) => (redBg ? "yellow" : "red")};
  white-space: nowrap;
  padding: 10px 18px;
  height: 1.35rem;
  color: ${({ redBg }) => (redBg ? "black" : "white")};
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  float: left;
`;

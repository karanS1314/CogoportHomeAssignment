import styled from "styled-components";
import { motion } from "framer-motion";
import HeroBg from "../../../assets/images/MainImages/heroBg.jpg";
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: calc((100vh - 100px) / 2); */
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(251, 220, 0);
  padding: 0rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
  margin-top: -2.5rem;
`;

export const ColumnLeft = styled.div`
  display: flex;
  color: "black";

  background-image: url(${HeroBg});
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 10rem 5rem;
  h4 {
    font-size: 14px;
    line-height: 14px;
    margin: 0;
  }
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
    padding: 5rem 0.8rem;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 3.6rem;
      line-height: 1.1;
    }
  }
`;
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: white;
  padding: 1px 5px;
  height: 30px;
  font-size: 14px;
  margin: 3px 0;
`;
export const IconImg = styled.img`
  height: ${({ wsp }) => (wsp ? "20px" : "10px")};
`;
export const Placeholder = styled.input`
  border: none;
`;
export const SubmitBtn = styled.div`
  border-radius: 12px;
  background: rgb(54, 187, 34);
  font-size: 14px;
  word-spacing: 0px;
  white-space: nowrap;
  padding: 4px 10px;
  color: white;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  float: left;
`;

export const ColumnRight = styled.div`
  position: relative;
`;
export const Video = styled.video`
  width: 100%;
  bottom: -5.9%;
  position: absolute;
  @media screen and (max-width: 1200px) {
    bottom: -5.4%;
  }
  @media screen and (max-width: 1150px) {
    bottom: -4.7%;
  }
  @media screen and (max-width: 1020px) {
    bottom: -4%;
  }
  @media screen and (max-width: 930px) {
    bottom: -3.7%;
  }
`;

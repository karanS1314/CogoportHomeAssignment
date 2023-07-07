import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  display: flex;
  z-index: -100;
  width: 100%;
  background-color: white;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 1rem 0 7rem;
  @media screen and (max-width: 960px) {
    margin: -2rem 0;
    padding: 1rem 0 2rem;
  }
`;

export const CardWrapper = styled(motion.div)`
  width: 68vw;
  display: grid;
  z-index: 0;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  @media screen and (max-width: 1180px) {
    width: 80vw;
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px 5rem;
    padding: 0 10px;
  }
`;

export const CardCard = styled(motion.div)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  transition: all 0.2s ease-in-out;
`;

export const CardIcon = styled.div`
  font-size: 40px;
  font-weight: bolder;
  color: red;
  @media screen and (max-width: 468px) {
    font-size: 24px;
  }
`;

export const CardH2 = styled.h2`
  font-size: 16px;
  font-weight: bolder;
  color: black;

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 10px;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 350px) {
    padding: 0 5px;
    font-size: 0.8rem;
  }
`;
// 5e17eb
export const Img = styled.img`
  width: 110%;
  margin-top: -0.1rem;
  margin-bottom: -1rem;
  z-index: -100;
`;

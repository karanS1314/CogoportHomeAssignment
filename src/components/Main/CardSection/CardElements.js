import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";

export const CardContainer = styled.div`
  display: flex;
  z-index: 50;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 0 4rem;
`;

export const CardWrapper = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  z-index: 5;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px 70px;
  padding: 0 4rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px 80px;
    padding: 0 20px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 5px 20px;
  }
`;

export const CardCard = styled(motion.div)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 12px;
  height: 350px;
  width: 300px;
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CardIcon = styled.img`
  min-height: 150px;
`;

export const CardH1 = styled(motion.h1)`
  line-height: 33.6px;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  margin: 3rem 0;
`;

export const CardH2 = styled.h2`
  font-size: 16px;
  line-height: 24px;
  font-weight: bolder;
  color: red;
  text-align: left;
  margin: 0.5rem 0;
`;

export const CardP = styled.p`
  line-height: 27px;
  font-size: 18px;
  margin: 0;
  font-weight: bolder;
  text-align: left;
`;
export const CardP2 = styled.p`
  line-height: 24px;
  font-size: 16px;
  margin: 0.5 0;
  text-align: left;
`;

export const Btn = styled(LinkR)`
  border-radius: 5px;
  text-align: center;
  background: red;
  white-space: nowrap;
  padding: 10px 25px;
  color: white;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  float: left;
  margin: 2rem 0;
`;

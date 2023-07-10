import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  z-index: 50;
  background-color: rgb(255, 254, 243);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem calc((100vw - 1700px) / 2) 3rem;
`;

export const CardWrapper = styled.div`
  display: grid;
  z-index: 5;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  align-content: center;
  grid-gap: 20px 50px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 50px 30px;
    padding: 0 10px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px 5px;
  }
`;

export const CardCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CardH1 = styled.h1`
  line-height: 33.6px;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  margin: 3rem 0;
`;

export const CardH2 = styled.h2`
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
`;
export const ImgWrap = styled.div`
  height: 85px;
`;
export const CardImg = styled.img``;

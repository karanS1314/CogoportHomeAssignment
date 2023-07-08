import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  z-index: 50;
  background-color: rgb(255, 254, 243);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 calc((100vw - 1200px) / 2) 3rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr 2.1fr;
  width: 100%;
  background-color: #fffef2;
  padding: 0rem calc((100vw - 1300px) / 2);
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 1080px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  transition: all 0.2s ease-in-out;
  height: 130px;
  line-height: 36px;
  font-size: 24px;
  font-weight: 700;
  padding: 2rem 2rem 0;
  grid-area: col1;
  @media screen and (max-width: 768px) {
    line-height: 24px;
    font-size: 16px;
    padding: 0 4rem;
  }
`;
export const CardWrapper = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-area: col2;
  padding: 0rem 2rem;

  grid-gap: 20px 30px;
  @media screen and (max-width: 960px) {
    margin-top: -5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px 10px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 30px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 150px;
  height: 150px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: 1px solid red;
  }
  @media screen and (max-width: 960px) {
    height: 180px;
    width: 180px;
  }
  @media screen and (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;
export const H1Wrap = styled.div`
  width: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
export const H1 = styled.h1`
  line-height: 33.6px;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    padding: 3rem 4rem 1rem;
    transition: all 0.2s ease-in-out;
    line-height: 24px;
    font-size: 20px;
    text-align: left;
  }
`;

export const CardH2 = styled.h2`
  line-height: 20.8px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 35px;
`;
export const CardH3 = styled.h3`
  line-height: 20.8px;
  font-size: 14px;
  text-align: center;
  color: red;
  font-weight: light;
  position: absolute;
  bottom: 0;
`;
export const ImgWrap = styled.div`
  margin-bottom: -10px;
`;
export const CardImg = styled.img`
  height: 70px;
`;

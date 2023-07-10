import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 5rem;
  font-family: "PT Sans", sans-serif;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1.6fr 1fr;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-items: center;
  align-content: center;
  padding: 0rem calc((100vw - 1200px) / 2);
  grid-template-areas: "col1 col2 col3";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col2" "col1" "col3";
    grid-gap: 10px 10px;
  }
`;

export const Col1 = styled.div`
  display: grid;
  grid-area: col1;
  width: 100%;
`;

export const Col2 = styled.div`
  display: grid;
  grid-area: col2;
  justify-content: center;
`;

export const Col3 = styled.div`
  display: grid;
  grid-area: col3;
  width: 100%;
`;
export const Img = styled.img`
  width: 100%;
  @media screen and (max-width: 768px) {
    display: ${({ arrows }) => (arrows ? "none" : "")};
  }
  @media screen and (min-width: 768px) {
    display: ${({ arrows }) => (!arrows ? "none" : "")};
  }
`;

export const Card = styled.div`
  padding: 10px 10px 20px;
  margin-top: ${({ first }) => (first ? "-3rem" : "0")};
  margin-bottom: ${({ first }) => (first ? "8rem" : "0")};
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    margin: 0.5rem;
  }
`;

export const CardH1 = styled.h1`
  line-height: 24px;
  font-size: 16px;
  text-align: left;
  font-weight: 700;
  margin: 0;
  color: #ee3425;
`;
export const CardH2 = styled.h2`
  line-height: 30px;
  font-size: 20px;
  text-align: left;
  font-weight: 700;
`;
export const CardImg = styled.img`
  max-width: 35px;
  margin-bottom: -6px;
`;

export const UL = styled.ul`
  margin: -0.5rem 0 0 -1.5rem;
`;

export const LI = styled.li`
  text-align: left;

  line-height: 24px;
  font-size: 16px;
  margin: 0;
  font-family: "PT Sans", sans-serif;
`;

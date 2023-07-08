import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  z-index: 50;
  background-color: rgb(255, 254, 243);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem calc((100vw - 1700px) / 2) 0rem;
`;

export const Wrapper = styled.div`
  display: grid;
  z-index: 5;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "col1 col2";
  align-items: center;
  justify-items: center;
  align-content: center;
  grid-gap: 20px 50px;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
    grid-gap: 10px 10px;
  }
`;

export const ColumLeft = styled.div`
  display: flex;
  grid-area: col1;
  justify-content: right;
`;
export const ColumRight = styled.div`
  display: flex;
  grid-area: col2;
  justify-content: left;
`;

export const H1 = styled.h1`
  line-height: 33.6px;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  margin: 3rem 0;
`;

export const Btn = styled.button`
  border-radius: 20px;
  text-align: center;
  background: ${({ yellowBg }) =>
    yellowBg ? "rgb(251, 220, 0)" : "rgb(229, 223, 223)"};
  white-space: nowrap;
  padding: 10px 18px;
  height: 3rem;
  width: 15rem;
  border: none;
  color: black;
  outline: none;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  float: left;
`;

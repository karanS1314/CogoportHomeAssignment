import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  z-index: 50;
  background-color: rgb(251, 220, 0);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10rem calc((100vw - 1700px) / 2) 0rem;
  background-image: radial-gradient(
    100% 120px at 50% 0px,
    white 50%,
    transparent 0%
  );
`;

export const Wrapper = styled.div`
  display: grid;
  z-index: 5;
  justify-content: center;
  grid-template-columns: 1fr 1.5fr;
  grid-template-areas: "col1 col2";
  align-items: center;
  justify-items: center;
  align-content: center;
  grid-gap: 20px 50px;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2 col2";
    grid-gap: 10px 10px;
  }
`;

export const ColumLeft = styled.div`
  display: flex;
  grid-area: col1;
  justify-content: right;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 300px;
`;
export const ColumRight = styled.div`
  grid-area: col2;
  justify-content: left;
  align-items: left;
  text-align: left;
`;
export const InputWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  padding: 0 0 0 5px;
  height: 30px;
  width: 300px;
  font-size: 14px;
  margin: 3px 0;
  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;

export const Placeholder = styled.input`
  border: none;
`;
export const SubmitBtn = styled.div`
  position: absolute;
  border-radius: 8px;
  background: #ee3425;
  font-size: 14px;
  word-spacing: 0px;
  white-space: nowrap;
  padding: 8px 10px;
  color: white;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  float: left;
  right: 0;
`;

export const Heading = styled.h1`
  font-size: 28px;
  line-height: 33.6px;
`;
export const Subs = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  z-index: 50;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem calc((100vw - 800px) / 2) 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  z-index: 5;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
`;

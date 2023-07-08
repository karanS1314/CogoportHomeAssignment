import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: rgb(251, 220, 0);
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 778px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  margin: 2rem;
  @media screen and (max-width: 778px) {
    display: ${({ sec }) => (sec ? "none" : "")};
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLink = styled(Link)`
  color: #4169e1;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #12f84d;
    transition: 0.3s ease-out;
  }
`;

export const WebsiteRights = styled.small`
  color: black;
  padding: 1rem;
  font-size: 18px;
  text-align: center;
  width: 100%;
  background-color: rgb(235, 190, 0);
`;

export const H1 = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  font-family: "PT Sans", sans-serif;
  @media screen and (max-width: 778px) {
    margin: -1rem;
    text-decoration: none;
  }
`;

export const P = styled.p`
  @media screen and (max-width: 778px) {
    display: none;
  }
`;

export const H6 = styled.h6`
  @media screen and (max-width: 778px) {
    display: none;
  }
`;
export const Ul = styled.ul`
  @media screen and (max-width: 778px) {
    display: ${({ sec }) => (sec ? "none" : "")};
  }
`;

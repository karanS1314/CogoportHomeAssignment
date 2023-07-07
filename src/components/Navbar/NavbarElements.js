import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollnav }) => (scrollnav ? "white" : "#fbdc00")};
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavbarContainer = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-evenly;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: red;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bolder;
  text-decoration: none;
`;

export const LogoImg = styled.img`
  z-index: 1;
  height: ${({ smiley }) => (smiley ? "20px" : "")};
  margin-right: ${({ smiley }) => (smiley ? "-10px" : "")};
  @media screen and (max-width: 960px) {
    display: flex;
    position: absolute;
    top: 0.4rem;
    left: 3rem;
    /* transform: translate(-100%, 60%); */
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    position: absolute;
    top: 0.4rem;
    left: 2rem;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-around;
  font-weight: bolder;
  white-space: nowrap;
  @media screen and (min-width: 1200px) {
    padding: 0 calc((75vw - 800px) / 2);
  }
  padding: 0 calc((55vw - 800px) / 2);
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 50px;
  display: inline-block;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 8px;
  background: ${({ loginBtn }) => (loginBtn ? "" : "red")};
  white-space: nowrap;
  padding: 10px 18px;
  color: ${({ loginBtn }) => (loginBtn ? "black" : "white")};
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  float: left;
`;

export const NavBtnWrap = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 0.5fr);
  align-items: center;
  grid-template-areas: "col1 col2";
`;

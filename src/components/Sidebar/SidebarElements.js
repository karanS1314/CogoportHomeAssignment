import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgb(251, 220, 0);
  display: grid;
  align-items: left;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  /* top: 0; */
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: black;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  text-align: left;
  cursor: pointer;
  justify-content: left;
  margin-left: 4rem;
  color: black;
  &:hover {
    color: red;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarMenu = styled(LinkS)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100px);
  font-weight: 700;
  font-size: 32px;
  margin-top: 5rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 100px);
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 4rem;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 8px;
  background: ${({ loginBtn }) => (loginBtn ? "white" : "red")};
  white-space: nowrap;
  padding: 10px 28px;
  color: ${({ loginBtn }) => (loginBtn ? "black" : "white")};
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  float: left;
`;

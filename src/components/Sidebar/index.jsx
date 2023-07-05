import React , {useContext} from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute1,
  SidebarRoute2,
  SidebarLinkR
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const RenderMenu = () => {
    return(
      <>
        <SideBtnWrap>
          <SidebarRoute1 to="/signup">Sign Up</SidebarRoute1>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute2 to="/signin">Sign In</SidebarRoute2>
        </SideBtnWrap>
      </>
    )
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLinkR to="/home" onClick={toggle}>
            Modules
          </SidebarLinkR>
        </SidebarMenu>
        <RenderMenu/>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

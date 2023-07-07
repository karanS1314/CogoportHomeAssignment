import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const RenderMenu = () => {
    return(
      <>
        <SideBtnWrap>
          <SidebarRoute loginBtn={true} to="/signin">login</SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute to="/signup">Sign Up</SidebarRoute>
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
          <SidebarLink to="/home" onClick={toggle}>
            Products
          </SidebarLink>
          <SidebarLink to="/home" onClick={toggle}>
            Partners
          </SidebarLink>
          <SidebarLink to="/home" onClick={toggle}>
            Tools
          </SidebarLink>
          <SidebarLink to="/home" onClick={toggle}>
            Company
          </SidebarLink>
          <SidebarLink to="/home" onClick={toggle}>
            Knowledge Center
          </SidebarLink>
          <SidebarLink to="/home" onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <RenderMenu/>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

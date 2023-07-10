import React, { useState, useEffect,  } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnWrap,
  NavBtn,
  NavBtnLink,
  LogoImg
} from "./NavbarElements";
import cogoLogo from "../../assets/images/NavImages/cogoLogo.svg"
import smiley from "../../assets/images/NavImages/smiley.svg"

const Navbar = ({ toggle }) => {
  const [scrollnav, setscrollnav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setscrollnav(true);
    } else {
      setscrollnav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const RenderMenu = () => {
    return(
      <>
        <NavBtn>
        <LogoImg smiley={true} src={smiley} alt=""/>
          <NavBtnLink loginBtn={true} to="/signup">login</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signin">Sign Up</NavBtnLink>
        </NavBtn>
      </>
    )
  }
  return (
    <>
      <Nav scrollnav={scrollnav}>
        <NavbarContainer>
          <MobileIcon  onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavLogo to="/" onClick={toggleHome}>
            <LogoImg src={cogoLogo} alt=""/>
          </NavLogo >
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                offset={-60}
              >
                Products 
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="discover"
                offset={-60}
              >
                Partners
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="/home"
                offset={-80}
              >
                Tools
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="/home"
                offset={-80}
              >
                Company
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="/home"
                offset={-80}
              >
                Knowledge Center
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="/home"
                offset={-80}
              >
                Contact Us
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtnWrap>
            <RenderMenu/>
          </NavBtnWrap>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

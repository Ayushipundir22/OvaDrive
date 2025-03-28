import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../assets/favicon.ico';

// --- Styled Components ---
const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 50px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1061px;
  z-index: 1000;
  margin: 40px auto 20px;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const LogoIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const NavItem = styled(motion.li)`
  margin: 0 15px;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: white;
  font-size: 1em;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &.active {
    background-color: black; /* Or any active state color */
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const GetAppButton = styled(motion.button)`
  background-color: #A600FC;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: darkpurple; /* Darker shade on hover */
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Navbar = ({
  scrollToHome,
  scrollToAbout,
  scrollToTeam,
  scrollToCareers,
  scrollToPrivacy,
  scrollToDocumentation,
  activeSection,
}) => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoIcon src={Logo} alt="Logo" />
      </LogoContainer>
      <NavLinks>
        <NavItem>
          <NavLink
            href="#home"
            onClick={scrollToHome}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#about"
            onClick={scrollToAbout}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#team"
            onClick={scrollToTeam}
            className={activeSection === 'team' ? 'active' : ''}
          >
            Our Team
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#careers"
            onClick={scrollToCareers}
            className={activeSection === 'careers' ? 'active' : ''}
          >
            Careers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#privacy"
            onClick={scrollToPrivacy}
            className={activeSection === 'privacy' ? 'active' : ''}
          >
            Privacy Policy
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#documentation"
            onClick={scrollToDocumentation}
            className={activeSection === 'documentation' ? 'active' : ''}
          >
            Documentation
          </NavLink>
        </NavItem>
      </NavLinks>
      <GetAppButton>Get The App</GetAppButton>
    </NavbarContainer>
  );
};

export default Navbar;
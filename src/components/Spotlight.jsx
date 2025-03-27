import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import HeroBtn from "../components/HeroBtn";
import Navbar from '../components/Navbar';

const SpotlightContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #282929;
  background: url('/Spotlight.jpg') no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  color: white;
`;

const Paragraph = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const LineOne = styled.span`
  display: block;
`;

const LineTwo = styled.span`
  display: block;
`;

const Highlight = styled.span`
  color: #A600FC;
  display: inline;
  white-space: nowrap;
`;

const Spotlight = () => {
  const homeRef = useRef(null); 
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    scrollToSection(homeRef);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return;

      const homeTop = homeRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 3; 

      if (scrollY >= homeTop - offset && scrollY < homeTop + homeRef.current.offsetHeight - offset) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [homeRef]);

  return (
    <>
      <Navbar
        scrollToHome={scrollToHome}
        activeSection={activeSection}
      />
      <SpotlightContainer ref={homeRef}>
        <Paragraph>
          <LineOne>Master your Data, Seize your life,</LineOne>
          <LineTwo>Shape your future with <Highlight>OvaDrive</Highlight></LineTwo>
        </Paragraph>
        <HeroBtn />
      </SpotlightContainer>
    </>
  );
};

export default Spotlight;
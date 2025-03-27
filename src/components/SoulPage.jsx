import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import {
  SoulPageContainer,
  GlowTopLeft,
  GlowTopRight,
  GlowBottomLeft,
  GlowBottomRight,
} from '../styles/motion-style';

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height to maintain centering */
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const TextContainer = styled(motion.div)`
  text-align: center;
  font-size: 2em;
  padding: 0 20px;
  width: 800px; /* Fixed width */
  max-width: 90vw;
`;

const PurpleText = styled.span`
  color: rgb(144, 5, 151);
  font-weight: bold;
`;

const SoulPage = ({ onAnimationEnd }) => {
  const [isVisible, setIsVisible] = useState(true);
  const homeRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    scrollToSection(homeRef);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500); 
    return () => clearTimeout(timer);
  }, []);

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

      <SoulPageContainer ref={homeRef}>
        <GlowTopLeft />
        <GlowTopRight />
        <GlowBottomLeft />
        <GlowBottomRight />

        <TextWrapper>
          <AnimatePresence>
            {isVisible && (
              <TextContainer
                initial={{ opacity: 0, y: '100vh' }} 
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-100vh' }} 
                transition={{ duration: 1.3, ease: 'easeInOut' }} 
              >
                OvaDrive isn't just about saving your chats, it's the beginning to make your{' '}
                <PurpleText>Soul immortal</PurpleText>.
              </TextContainer>
            )}
          </AnimatePresence>
        </TextWrapper>
      </SoulPageContainer>
    </>
  );
};

export default SoulPage;
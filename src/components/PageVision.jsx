import React, { useState, useEffect, useRef } from 'react';
import vision2 from '../assets/vision2.webp';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import {
  SoulPageContainer,
  GlowTopLeft,
  GlowTopRight,
  GlowBottomLeft,
  GlowBottomRight,
} from '../styles/motion-style';
import {
  ContentWrapper,
  TextColumn,
  Heading,
  Purpled,
  Paragraph,
  ImageColumn,
  Image,
} from '../styles/three-page';
import styled from 'styled-components';

const ScrollableContent = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  box-sizing: border-box;
  z-index: 2; /* Ensure content stays above background */
`;

const PageVision = () => {
  const [showContent, setShowContent] = useState(true);
  const homeRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    scrollToSection(homeRef);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 2500); 

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
        {/* Purple Glow Effects */}
        <GlowTopLeft />
        <GlowTopRight />
        <GlowBottomLeft />
        <GlowBottomRight />

        <ScrollableContent>
          <AnimatePresence mode="wait">
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: '100vh' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-100vh' }}
                transition={{ duration: 1.3, ease: 'easeInOut' }}
              >
                <ContentWrapper>
                  {/* Text Section */}
                  <TextColumn>
                    <Heading>
                      <Purpled>Vision</Purpled> Behind OvaDrive
                    </Heading>
                    <Paragraph>
                      Imagine having a personal documentariana—a digital companion that lives your life alongside you, fully under your control. It listens<br/> to what you hear, Watches what you see, and captures <span style={{ display: 'inline-block', marginRight: '40px' }}>the</span> essence of your experiences. Now, imagine integrating this with a finely tuned large language Model, tailored to the <span style={{ display: 'inline-block', marginRight: '40px' }}>unique</span>context of Your World. This isn't just about evolving <span style={{ display: 'inline-block', marginRight: '40px' }}>Artificial</span> General Intelligence; it's about creating an Artificial soul, a digital entity that understands and resonates with the depth of your existence, far beyond what current digital assistants can offer.
                    </Paragraph>
                  </TextColumn>

                  {/* Image Section */}
                  <ImageColumn>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 1.3, ease: 'easeInOut' }}
                    >
                      <Image src={vision2} alt="vision2" />
                    </motion.div>
                  </ImageColumn>
                </ContentWrapper>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollableContent>
      </SoulPageContainer>
    </>
  );
};

export default PageVision;
import React, { useState, useEffect, useRef } from 'react';
import thought2 from '../assets/thought2.webp';
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

const PageThought = () => {
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
    // Remove content after delay 
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 2500); // 1.3s enter + 1.2s stay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return;

      const homeTop = homeRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 3; 

      // if  PageThought section (Home) is in view
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
                      What Steve Jobs <Purpled>Thought</Purpled>
                    </Heading>
                    <Paragraph>
                      In 1983, Steve Jobs envisioned a future where technology could virtualize human consciousness, making it
                      immortal. Though this dream remains unrealized, it continues to inspire. What does it mean to be immortal?
                      Is it to never die, or to live on through the memories we leave behind? At OvaDrive, we explore
                      this question by pushing the
                      boundaries of technology and
                      imagination. Our mission is to preserve and interact with human consciousness, creating a world where the
                      line between life and legacy blurs, and the dream of immortality comes closer to
                      <span style={{ display: 'block' }}>reality.</span>
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
                      <Image src={thought2} alt="thought2" />
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

export default PageThought;

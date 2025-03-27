import React, { useState, useEffect, useRef } from 'react';
import future2 from '../assets/future2.webp';
import Navbar from '../components/Navbar';
import {
  SoulPageContainer,
  GlowTopLeft,
  GlowTopRight,
  GlowBottomLeft,
  GlowBottomRight,
  usePageAnimation,
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
import { motion } from 'framer-motion';

const ScrollableContent = styled(motion.div)`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding-top: 100px; /* Added margin-top to shift content down */
  box-sizing: border-box;
  z-index: 2;
`;

const StyledImage = styled(Image)`
  max-width: 500px; 
`;

const PageFuture = ({ onAnimationEnd }) => {
  const homeRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    scrollToSection(homeRef);
  };


  const { controls, textControls } = usePageAnimation(onAnimationEnd, true); // 'true' for bottom-right animation

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return;

      const homeTop = homeRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 3; 
      //if PageFuture section (Home) is in view
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
        {/* Purple Glow Effects  */}
        <GlowTopLeft />
        <GlowTopRight />
        <GlowBottomLeft />
        <GlowBottomRight />

        <ScrollableContent
          initial={{ opacity: 0, x: '50vw', y: '100vh' }} 
          animate={controls} 
          exit={{ opacity: 0, x: 0, y: '-100vh' }} 
          transition={{ duration: 1.3, ease: 'easeInOut' }}
        >
          <ContentWrapper>
            {/* Text Section */}
            <TextColumn>
              <Heading>
                The <Purpled>Future</Purpled> of OvaDrive
              </Heading>
              <Paragraph>
                Our journey begins with a mobile app that captures notes from your surroundings, but this is just the beginning.
                OvaDrive will <span style={{ display: 'inline-block', marginRight: '40px' }}>evolve</span> to include watches, rings, bracelets, necklaces, glasses, holograms, and even the metaverse.
                This isn't just about achieving immortality, it's about preserving and deeply understanding the essence of human experience.
                By expanding into these new realms, OvaDrive will open up unprecedented frontiers in psychology, history, and our understanding of consciousness itself.
              </Paragraph>
            </TextColumn>

            {/* Image Section */}
            <ImageColumn animate={textControls}> 
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.3, ease: 'easeInOut' }}
              >
                <StyledImage src={future2} alt="future2" />
              </motion.div>
            </ImageColumn>
          </ContentWrapper>
        </ScrollableContent>
      </SoulPageContainer>
    </>
  );
};

export default PageFuture;

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import card1 from '../assets/card1.webp';
import card2 from '../assets/card2.webp';
import card3 from '../assets/card3.webp';
import card4 from '../assets/card4.webp';
import {
  SoulPageContainer,
  GlowTopLeft,
  GlowTopRight,
  GlowBottomLeft,
  GlowBottomRight,
} from '../styles/motion-style';
import { Card } from '../styles/card-style';
import { ScrollContainer } from '../styles/card-style';
import { motion, AnimatePresence } from 'framer-motion';
import { Title } from '../styles/card-style';
import Navbar from '../components/Navbar';


const ScrollableContent = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  box-sizing: border-box;
  z-index: 2; /* Ensure it's above other elements */
`;

const AboutUsContainer = styled(SoulPageContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align title to the left */
  padding: 40px;
  overflow: hidden;
  background-color: transparent;
`;

const CardsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-left: 75px; /* Added left margin */
`;

const AboutUs = () => {
  const [showContent, setShowContent] = useState(true);
  const aboutUsRef = useRef(null);
  const [activeSection, setActiveSection] = useState('about'); 

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    scrollToSection(aboutUsRef);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutUsRef.current) return;

      const aboutTop = aboutUsRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 3; 


      if (scrollY >= aboutTop - offset && scrollY < aboutTop + aboutUsRef.current.offsetHeight - offset) {
        setActiveSection('about');
      } else {
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [aboutUsRef]);

  return (
    <>
 
      <Navbar
        scrollToAbout={scrollToAbout}
        activeSection={activeSection}
      />

      <SoulPageContainer ref={aboutUsRef}> 
      
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
                <AboutUsContainer>
                  {/* Title */}
                  <Title animate={{ opacity: 1, y: 0 }}>About Us</Title>

                  {/* Cards Section */}
                  <ScrollContainer>
                    <Card>
                      <img src={card1} alt="card1" />
                    </Card>
                    <Card>
                      <img src={card2} alt="card2" />
                    </Card>
                    <Card>
                      <img src={card3} alt="card3" />
                    </Card>
                    <Card>
                      <img src={card4} alt="card4" />
                    </Card>
                  </ScrollContainer>
                </AboutUsContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollableContent>
      </SoulPageContainer>
    </>
  );
};

export default AboutUs;
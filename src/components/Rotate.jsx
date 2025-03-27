import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import OvaLogo from '../assets/Logo.png';
import maincard1 from '../assets/maincard1.jpg';
import maincard2 from '../assets/maincard2.jpg';
import maincard3 from '../assets/maincard3.jpg';
import maincard4 from '../assets/maincard4.jpg';
import Liquid from './Liquid'; 

const GlobalStyle = createGlobalStyle`
   body {
    background-color: transparent;
    overflow: hidden;
    margin: 0;
  }

  body::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  body {
    scrollbar-width: none;
  }
`;

const FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  overflow-y: auto;
  padding: 20px 0;
  box-sizing: border-box;
   background-color: #282929;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px; 
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardRow = styled.div`
  display: flex;
  gap: 10px;
`;

const LogoContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* Make sure z-index works */
  z-index: 10; /* Higher than the liquid */

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const LogoImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CardWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Rotate = () => {
  const controls = useAnimation();
  const [sequenceRunning, setSequenceRunning] = useState(false);
  const [showLiquid, setShowLiquid] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLiquid(true), 1000); // Start Liquid animation after 1s delay
  }, []);

  useEffect(() => {
    const animateSequence = async () => {
      if (sequenceRunning) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for Liquid animation
        await controls.start({
          rotate: -180,
          transition: { duration: 0.2, ease: "linear" },
        });
        await new Promise(resolve => setTimeout(resolve, 600));
        await controls.start({
          rotate: -360,
          transition: { duration: 0.2, ease: "linear" },
        });
        setSequenceRunning(false);
      }
    };

    animateSequence();
  }, [controls, sequenceRunning]);

  return (
    <FullScreenContainer>
      <GlobalStyle />
      {showLiquid && <Liquid onComplete={() => setSequenceRunning(true)} />} 
      <ContentWrapper>
        <CardColumn>
          <CardRow>
            <CardWrapper style={{ marginLeft: '0px', marginRight: '0px', width: '370px', height: '480px' }}><Card src={maincard1} alt="Card 1" /></CardWrapper>
            <CardWrapper style={{ marginRight: '0px', marginLeft: '20px', width: '380px', height: '480px' }}><Card src={maincard2} alt="Card 2" /></CardWrapper>
          </CardRow>
        </CardColumn>
        <LogoContainer>
          <LogoImage
            src={OvaLogo}
            alt="Ova Logo"
            animate={controls}
            style={{ rotate: controls.rotate }}
          />
        </LogoContainer>
        <CardColumn>
          <CardRow>
            <CardWrapper style={{ marginLeft: '0px', marginRight: '20px', width: '380px', height: '480px' }}><Card src={maincard3} alt="Card 3" /></CardWrapper>
            <CardWrapper style={{ marginLeft: '0px', marginRight: '0', width: '370px', height: '480px' }}><Card src={maincard4} alt="Card 4" /></CardWrapper>
          </CardRow>
        </CardColumn>
      </ContentWrapper>
    </FullScreenContainer>
  );
};

export default Rotate;


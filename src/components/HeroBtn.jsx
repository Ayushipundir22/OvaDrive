import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonContainer = styled(motion.div)`
  position: relative;
  cursor: pointer;
  display: inline-block;
  border-radius: 20px;
  overflow: visible;
`;

const ButtonText = styled(motion.div)`
  background-color: white;
  padding: 12px 24px;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  color: black;
  box-shadow: ${({ isActive }) => (isActive ? '5px 5px 0px black' : 'none')};

  span {
    color: ${({ isActive }) => (isActive ? '#A600FC' : 'black')};
  }
`;

const ArrowIcon = styled(motion.span)`
  font-size: 1.1em;
  display: inline-block;
  color: black !important; /* Forces arrow to stay black */
`;

const OurButton = ({ text }) => {
  const [isActive, setIsActive] = useState(false);

  const handleHoverStart = () => setIsActive(true);
  const handleHoverEnd = () => setIsActive(false);
  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 500);
  };

  return (
    <ButtonContainer
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
      animate={{
        x: isActive ? 26 : 0,
        y: isActive ? -16 : 0,
        rotate: isActive ? -15 : 0,
        scale: isActive ? 1.2 : 1, // Moves forward slightly
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <ButtonText isActive={isActive}>
        Try <span>OvaDrive</span> 
        <ArrowIcon animate={{ scale: isActive ? 1.3 : 1 }}>↗</ArrowIcon>
      </ButtonText>
    </ButtonContainer>
  );
};

export default OurButton;

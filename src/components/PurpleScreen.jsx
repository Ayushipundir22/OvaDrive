import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const PurpleScreenContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #A600FC;
  z-index: 10;
`;

const PurpleScreen = ({ onAnimationEnd }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateSequence = async () => {
      await controls.start({ y: 0, transition: { duration: 0.5, ease: 'easeOut' } });
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      await controls.start({ scaleY: 0, originY: 0, transition: { duration: 0.5, ease: 'easeIn' } });

      if (onAnimationEnd) onAnimationEnd(); // Notify parent component. Call parent function when animation ends
    };

    animateSequence();
  }, [controls, onAnimationEnd]);

  return <PurpleScreenContainer initial={{ y: '100%' }} animate={controls} />;
};

export default PurpleScreen;
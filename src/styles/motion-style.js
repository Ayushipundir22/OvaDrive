import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const SoulPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0d0d0d; /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: white;
  overflow: hidden;
  z-index: 11;
`;

// Purple Glow Effects (Stay Fixed)
export const GlowCorner = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  background: linear-gradient(to bottom right, rgba(118, 16, 118, 0.8) 0%, transparent 70%),
    radial-gradient(circle at top right, rgba(118, 16, 118, 0.8) 0%, transparent 70%),
    radial-gradient(circle at bottom left, rgba(118, 16, 118, 0.8) 0%, transparent 70%),
    radial-gradient(circle at bottom right, rgba(118, 16, 118, 0.8) 0%, transparent 70%);
  filter: blur(70px);
  pointer-events: none;
`;

export const GlowTopLeft = styled(GlowCorner)`
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
`;

export const GlowTopRight = styled(GlowCorner)`
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

export const GlowBottomLeft = styled(GlowCorner)`
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
`;

export const GlowBottomRight = styled(GlowCorner)`
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
`;

// Image Column Animation
export const ImageColumn = styled(motion.div)`
  flex-shrink: 0;
  width: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  margin-left: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

// Animation Hook 
export const usePageAnimation = (onAnimationEnd, isBottomRight = false) => {
  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const animateSequence = async () => {
      // Start content 
      controls.set({
        opacity: 0,
        x: isBottomRight ? '50vw' : 0,
        y: '100vh',
      });

      // Animate content moving in
      await controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 1.3, ease: 'easeInOut' },
      });

    
      await new Promise((resolve) => setTimeout(resolve, 1200));

  
      await controls.start({
        opacity: 0,
        x: 0,
        y: '-100vh', 
        transition: { duration: 1, ease: 'easeInOut' },
      });

      if (onAnimationEnd) onAnimationEnd();
    };

    animateSequence();
  }, [controls, textControls, onAnimationEnd, isBottomRight]);

  return { controls, textControls };
};

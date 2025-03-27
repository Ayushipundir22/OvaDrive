import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const LiquidContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  pointer-events: none;
  overflow: hidden;
`;

const LiquidLayer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  background-color: #282929;
  z-index: 1;
`;

const Liquid = ({ onComplete = () => {} }) => {
  const controls = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const finalHeight = 650;

  useEffect(() => {
    const animateLiquid = async () => {
      await Promise.all(
        controls.map((control, index) =>
          control.start({
            y: "0%", // Stop at normal position
            height: finalHeight,
            opacity: 1,
            transition: { duration: 0.7 + index * 0.2, ease: "easeInOut" },
          })
        )
      );

      onComplete(); // Call when animation is fully done
    };

    animateLiquid();
  }, []);

  return (
    <LiquidContainer>
      {controls.map((control, index) => (
        <LiquidLayer
          key={index}
          animate={control}
          initial={{ y: "100%", height: 0, opacity: 0 }}
          style={{
            width: "25vw",
            left: `${index * 25}vw`,
            height: finalHeight, 
          }}
        />
      ))}
    </LiquidContainer>
  );
};

export default Liquid;
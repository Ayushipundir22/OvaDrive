import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TeamContainer = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 20px;
  background-color: transparent;
  overflow-x: hidden;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
`;

export const BackgroundImage = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(15px);
  z-index: -1;
  opacity: 0.4;
`;

export const InfoWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
  padding: 0 40px;
  box-sizing: border-box;
  position: fixed;
  left: 75px;
  top: 28.95%;
  justify-content: flex-start;
`;

export const OurTeamHeading = styled(motion.h1)`
  font-size: 2em;
  margin-top: 0;
  margin-bottom: 20px;
  align-self: flex-start;
  color: white;
`;

export const CardInfoContainer = styled(motion.div)`
  width: 300px;
  color: white;
  background-color: transparent;
  text-align: left;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MemberName = styled.h2`
  font-size: 1.5em;
  margin-bottom: 5px;
  color: white;
`;

export const MemberRole = styled.h3`
  font-size: 1em;
  font-weight: 300;
  margin-top: 3px;
  margin-bottom: 10px;
  color: white;
`;

export const MemberBio = styled(motion.p)`
  font-size: 1.1em;
  font-weight: 400;
  margin-bottom: 15px;
  color: white;
  line-height: 1.4;
`;

export const LinkedInIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 25px;
  display: block;
`;

export const CarouselContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 20px 0;
  width: 70%;
  justify-content: flex-start;
  gap: 20px;
  margin-left: auto;
`;

export const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
  border: 3px solid white;
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  align-self: flex-end;
`;

export const CarouselImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;  
  object-position: center; 
  transition: transform 0.3s ease;  
`;

export const QueueImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  flex-shrink: 0;
  overflow: hidden;
  border: 2px solid transparent;
  box-sizing: border-box;
  align-self: flex-end;
  &:active {
    transform: scale(0.7);
    transition: transform 0.1s ease-out;
  }
`;

export const QueueImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

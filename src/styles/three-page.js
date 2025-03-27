import styled from 'styled-components';
import { motion } from 'framer-motion';

// Wrapper for the entire content
export const ContentWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 100%;
  margin: 100px 0 auto ;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')}; 
  gap:3em;

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 20px;
  }
`;

// Text column for heading and paragraph
export const TextColumn = styled.div`
  flex: 0.6;
  padding-right: 30px;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center; 
  }
`;

// Heading styles
export const Heading = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: white;
  font-style: italic;
  line-height: 100%;
  margin-bottom: 30px;
  white-space: nowrap;
  letter-spacing: 0%;

  @media (max-width: 768px) {
    font-size: 32px; 
  }
`;

// Highlighted text 
export const Purpled = styled.span`
  color: rgb(166, 0, 252);
`;

// Paragraph styles
export const Paragraph = styled.p`
  font-size: 0.9em; 
  line-height: 1.6;
  max-width: 500px;
  text-align: justify;
  margin: 0;
  color: #eee;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Image column for the image beside the text
export const ImageColumn = styled(motion.div)`
  width: 25em; /* Reduce width */
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  margin-left: 2em;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 90%; /* Make the image responsive */
  }
`;

// Image styles
export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

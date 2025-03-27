import styled from 'styled-components';
export const ScrollContainer = styled.div`
  display: flex;
  gap: 13px; /* Space between cards */
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent wrapping */
  scrollbar-width: none; /* Hide scrollbar (Firefox) */
  -ms-overflow-style: none; /* Hide scrollbar (IE/Edge) */
  flex-shrink: 0;
  padding-bottom: 10px; /* Space to prevent scrollbar overlapping */
  width: 100vw; /* Ensure it takes full screen width */
  min-width: 100vw; /* Ensures enough space for scrolling */
  padding-left: 75px; /* Initial margin-left */
  scroll-behavior: smooth; /* Smooth scrolling effect */

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar (Chrome/Safari) */
  }
`;

  export const Card = styled.div`
  width: 28vw;
  height: 17.71vw;
  flex-shrink: 0; /* Prevents shrinking */
  object-fit: cover;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-size: 2.0rem;
  color: white;
  margin-bottom: 60px;
  margin-left: 75px; /* Keep left margin */
`;

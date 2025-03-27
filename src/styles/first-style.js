import styled from "styled-components";

export const FirstContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #282929;
  background: url('/First.jpg') no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 1.5s ease-in-out;
`;

export const ContentContainer = styled.div`
  width: 868px;
  height: 228px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
`;

export const AnimatedText = styled.h1`
  font-size: 1em;
  font-weight: 300;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 150px
  height: 150px
  color: #A600FC;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 10;
`;
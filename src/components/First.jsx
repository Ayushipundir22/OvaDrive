import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import Navbar from '../components/Navbar';

const FirstContainer = styled.div`
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
`;

const ContentContainer = styled.div`
  width: 868px;
  height: 228px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
`;

const AnimatedText = styled.h1`
  font-size: 3em;
  font-weight: 700;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #A600FC;
  opacity: 0;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 70px;
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.transparent ? "transparent" : "#A600FC")};
  color: white;
  border: ${(props) => (props.transparent ? "1px solid white" : "none")};
  border-radius: 50px;
  padding: 12px 30px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.transparent ? "rgba(255, 255, 255, 0.2)" : "#8A00E0")};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const First = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const homeRef = useRef(null); 
  const aboutUsRef = useRef(null); 
  const teamRef = useRef(null);
  const careersRef = useRef(null);
  const privacyRef = useRef(null);
  const documentationRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    scrollToSection(homeRef);
  };

  const scrollToAbout = () => {
    scrollToSection(aboutUsRef);
  };

  const scrollToTeam = () => {
    scrollToSection(teamRef);
  };

  const scrollToCareers = () => {
    scrollToSection(careersRef);
  };

  const scrollToPrivacy = () => {
    scrollToSection(privacyRef);
  };

  const scrollToDocumentation = () => {
    scrollToSection(documentationRef);
  };

  useEffect(() => {
    gsap.to(containerRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 2,
      delay: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(textRef.current, {
          opacity: 1,
          duration: 1,
        });
      },
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 3;

      const sections = [
        { ref: homeRef, id: 'home' },
        { ref: aboutUsRef, id: 'about' },
        { ref: teamRef, id: 'team' },
        { ref: careersRef, id: 'careers' },
        { ref: privacyRef, id: 'privacy' },
        { ref: documentationRef, id: 'documentation' },
      ];

      sections.forEach(({ ref, id }) => {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const bottom = top + ref.current.offsetHeight;
          if (scrollY >= top - offset && scrollY < bottom - offset) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [homeRef, aboutUsRef, teamRef, careersRef, privacyRef, documentationRef]);

  return (
    <>
      <Navbar
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToTeam={scrollToTeam}
        scrollToCareers={scrollToCareers}
        scrollToPrivacy={scrollToPrivacy}
        scrollToDocumentation={scrollToDocumentation}
        activeSection={activeSection}
      />
      <div ref={homeRef} style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <FirstContainer ref={containerRef}>
          <ContentContainer>
            <p style={{ fontSize: "24px", fontWeight: "500", marginBottom: "0px", height: "30px", color: "#E6B5FF" }}>
              The Ultimate AI Assistant
            </p>
            <h1 style={{ fontSize: "3em", fontWeight: "700", marginTop: "15px", marginBottom: "18px" }}>
              Unlock The Power Of Your 2nd Brain
            </h1>
            <p style={{ fontSize: "16px", fontWeight: "400", maxWidth: "700px", maxHeight: "48px", marginTop: "2px" }}>
              OvaDrive is designed to turn your phone into an assistant following
              you everywhere, learning all about your life and helping to utilize that.
            </p>
            <p style={{ fontSize: "20px", fontWeight: "600", maxWidth: "700px", maxHeight: "30px", marginTop: "0px" }}>
              Own your data, own your life, own your future.
            </p>
          </ContentContainer>

          <ButtonsContainer>
            <Button>Android App</Button>
            <Button>IOS App</Button>
            <Button transparent>Learn More</Button>
          </ButtonsContainer>
        </FirstContainer>
        <AnimatedText ref={textRef}>OvaDrive</AnimatedText>
      </div>

   
      <section ref={aboutUsRef} id="about">
        <h2>About Us Section</h2>
     
      </section>

      <section ref={teamRef} id="team">
        <h2>Our Team Section</h2>
   
      </section>

      <section ref={careersRef} id="careers">
        <h2>Careers Section</h2>
    
      </section>

      <section ref={privacyRef} id="privacy">
        <h2>Privacy Policy Section</h2>
     
      </section>

      <section ref={documentationRef} id="documentation">
        <h2>Documentation Section</h2>
       
      </section>
    </>
  );
};

export default First;
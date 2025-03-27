import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  TeamContainer,
  OurTeamHeading,
  InfoWrapper,
  CardInfoContainer,
  MemberName,
  MemberRole,
  MemberBio,
  LinkedInIcon,
  CarouselContainer,
  ImageWrapper,
  CarouselImage,
  QueueImageWrapper,
  QueueImage,
  BackgroundImage,
} from '../styles/team-styles';
import about1 from '../assets/about11.jpg';
import about2 from '../assets/about2.webp';
import about3 from '../assets/about3.webp';
import about4 from '../assets/about4.webp';
import about5 from '../assets/about5.webp';
import about6 from '../assets/about6.webp';
import linkedInIcon from '../assets/linkedInIcon.png';
import Navbar from '../components/Navbar';

const teamMembers = [
  { id: 1, name: 'Jack Jay', role: 'CEO', bio: 'The driving force behind OvaDrive revolutionizes talent recruitment and entrepreneurship by passionately fostering innovation and advancing societal progress.', image: about1, showLinkedIn: true },
  { id: 2, name: 'Swapnil Sharma', role: 'CTO', bio: 'Swapnil Sharma champions technological innovation, nurturing teams to develop solutions that redefine industry standards.', image: about2, showLinkedIn: true },
  { id: 3, name: 'Jatin Sharma', role: 'AI Engineer', bio: 'Jatin Kumar Sharma drives innovation in ML, DL, NLP, and cloud technologies, passionately advancing the AI frontier.', image: about3, showLinkedIn: true },
  { id: 4, name: 'Yash Rastogi', role: 'AI Engineer', bio: 'Yash Rastogi, a skilled Flutter developer, excels in algorithm development, ranking under 250 at Codeforces, and shaping coding future.', image: about4, showLinkedIn: true },
  { id: 5, name: 'Udit Devadiga', role: 'AWS DevOps', bio: 'Udit Devadiga, eager to master cloud technology and DevOps, is captivated by cloud application mechanics, showcasing a strong commitment to his field.', image: about5, showLinkedIn: true },
  { id: 6, name: 'Prashant Gokhale', role: '3D Artist', bio: 'Prashant Gokhale combines architecture and artistry to create stunning 3D designs in Blender, pushing the boundaries of 3D art.', image: about6, showLinkedIn: true },
];

const OurTeam = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const teamRef = useRef(null); 
  const [activeSection, setActiveSection] = useState('ourteam'); 

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTeam = () => {
    scrollToSection(teamRef);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const activeElement = carouselRef.current.children[1];
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [index]);

  useEffect(() => {
    const handleScroll = () => {
      if (!teamRef.current) return;

      const teamTop = teamRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 3; 


      if (scrollY >= teamTop - offset && scrollY < teamTop + teamRef.current.offsetHeight - offset) {
        setActiveSection('team');
      } else {
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [teamRef]);

  const currentMember = teamMembers[index];

  return (
    <>
      <Navbar
        scrollToTeam={scrollToTeam}
        activeSection={activeSection}
      />
      <TeamContainer
        ref={teamRef}
      >
        <BackgroundImage style={{ backgroundImage: `url(${currentMember.image})` }} />
        <InfoWrapper>
          <OurTeamHeading>Our Team</OurTeamHeading>
          <CardInfoContainer>
            <MemberName>{currentMember.name}</MemberName>
            <MemberRole>{currentMember.role}</MemberRole>
            <MemberBio>
              {currentMember.bio}
              {currentMember.showLinkedIn && (
                <LinkedInIcon src={linkedInIcon} alt="LinkedIn Logo" />
              )}
            </MemberBio>
          </CardInfoContainer>
        </InfoWrapper>

        <CarouselContainer ref={carouselRef}>
          {[...teamMembers.slice(index), ...teamMembers.slice(0, index)].map((member, i) => (
            <motion.div key={member.id} style={{ display: 'flex', alignItems: 'flex-end' }}>
              {i === 0 ? (
                <ImageWrapper>
                  <CarouselImage src={member.image} alt={member.name} />
                </ImageWrapper>
              ) : (
                <QueueImageWrapper
                  onClick={() => setIndex(teamMembers.findIndex(m => m.id === member.id))}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <QueueImage src={member.image} alt={member.name} />
                </QueueImageWrapper>
              )}
            </motion.div>
          ))}
        </CarouselContainer>
      </TeamContainer>
    </>
  );
};

export default OurTeam;
import React, { useState, useEffect } from 'react';
import Rotate from './Rotate';
import PurpleScreen from './PurpleScreen';
import First from './First';  // The first page after PurpleScreen
import PageThought from './PageThought';
import PageVision from './PageVision';
import PageFuture from './PageFuture';
import SoulPage from './SoulPage';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import Spotlight from './Spotlight';  // The spotlight page at the end

const SplashScreen = () => {
  const [showRotate, setShowRotate] = useState(true);
  const [showPurpleScreen, setShowPurpleScreen] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showPageThought, setShowPageThought] = useState(false);
  const [showPageVision, setShowPageVision] = useState(false);
  const [showPageFuture, setShowPageFuture] = useState(false);
  const [showSoulPage, setShowSoulPage] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showOurTeam, setShowOurTeam] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Show Rotate (5 seconds)
      await new Promise(resolve => setTimeout(resolve, 5000));
      setShowRotate(false);


      // Step 2: Show PurpleScreen (3 seconds)
      setShowPurpleScreen(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowPurpleScreen(false);

      // Step 3: Show First (5 seconds)
      setShowFirst(true);
      await new Promise(resolve => setTimeout(resolve, 5000));
      setShowFirst(false);

      // Step 4: Show PageThought (5 seconds)
      setShowPageThought(true);
      await new Promise(resolve => setTimeout(resolve, 4000));
      setShowPageThought(false);

      // Step 5: Show PageVision (5 seconds)
      setShowPageVision(true);
      await new Promise(resolve => setTimeout(resolve, 4000));
      setShowPageVision(false);

      // Step 6: Show PageFuture (5 seconds)
      setShowPageFuture(true);
      await new Promise(resolve => setTimeout(resolve, 4000));
      setShowPageFuture(false);

      // // Step 7: Show SoulPage (5 seconds)
      setShowSoulPage(true);
      await new Promise(resolve => setTimeout(resolve, 5000));
      setShowSoulPage(false);

      // // Step 8: Show AboutUs (5 seconds)
      setShowAboutUs(true);
      await new Promise(resolve => setTimeout(resolve, 5000));
      setShowAboutUs(false);

      // // Step 9: Show OurTeam (5 seconds)
      setShowOurTeam(true);
      await new Promise(resolve => setTimeout(resolve, 5000));
      setShowOurTeam(false);

      // // Step 10: Show Spotlight 
      setShowSpotlight(true);
      await new Promise(resolve => setTimeout(resolve, 5000));
    };

    sequence();
  }, []);

  return (
    <>
       {showRotate && <Rotate />}
      {showPurpleScreen && <PurpleScreen />}
      {showFirst && <First />} 
      {showPageThought && <PageThought />}
      {showPageVision && <PageVision />}
      {showPageFuture && <PageFuture />}
      {showSoulPage && <SoulPage />}
      {showAboutUs && <AboutUs />}
      {showOurTeam && <OurTeam />}
      {showSpotlight && <Spotlight />}
    </>
  );
};

export default SplashScreen;

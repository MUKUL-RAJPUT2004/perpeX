import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import { AboutSection} from './components/MainSections';
import VerticalsSection from './components/VerticalsSection.jsx';
import ServicesSection from './components/ServicesSection';
import HowWeWorkSection from './components/HowWeWork.jsx';
import CaseStudiesSection from './components/CaseStudiesSection.jsx';
import LeadMagnetSection from './components/LeadMagnetSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import CTASection from './components/CTAButton.jsx';
import FooterSection from './components/Footer.jsx';

import ChatWidget from './components/ChatWidget';
import FloatingChatButton from './components/FloatingChatButton';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onChatOpen={handleChatOpen} />
      <HeroSection onChatOpen={handleChatOpen} />
      <AboutSection />
      <VerticalsSection />
      <ServicesSection />
       <HowWeWorkSection />
      <CaseStudiesSection />
      <LeadMagnetSection />
      <ContactSection />
      <CTASection onChatOpen={handleChatOpen} />
      <FooterSection /> 
      <ChatWidget isOpen={isChatOpen} onClose={handleChatClose} />
      <FloatingChatButton onClick={handleChatOpen} />
    </div>
  );
}

export default App;
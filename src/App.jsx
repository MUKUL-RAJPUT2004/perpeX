import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import { AboutSection, VerticalsSection, ServicesSection, HowWeWorkSection, CaseStudiesSection, LeadMagnetSection, ContactSection, FooterSection, CTASection } from './components/MainSections';
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
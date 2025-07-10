import React, { useState, useEffect } from 'react';
import { MessageCircle, Download, Phone, Menu, X } from 'lucide-react';

const Navigation = ({ onChatOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Verticals', href: '#verticals' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">PX</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">PerpeX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm">
              <Download className="w-4 h-4 mr-2" />
              Get Brochure
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
              <Phone className="w-4 h-4 mr-2" />
              Book a Call
            </button>
            <button 
              onClick={onChatOpen}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with PerpexAI
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMenuOpen 
          ? 'max-h-96 opacity-100 bg-white/95 backdrop-blur-xl border-t border-gray-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-6 pt-4 pb-6 space-y-4">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 space-y-3 border-t border-gray-100">
            <button className="w-full flex items-center justify-center px-6 py-3 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              <Download className="w-4 h-4 mr-2" />
              Get Brochure
            </button>
            <button className="w-full flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
              <Phone className="w-4 h-4 mr-2" />
              Book a Call
            </button>
            <button 
              onClick={() => {
                onChatOpen();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with PerpexAI
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
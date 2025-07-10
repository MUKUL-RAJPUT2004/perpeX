import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, Send, Bot, Sparkles, TrendingUp, Users, Target } from 'lucide-react';

const HeroSection = ({ onChatOpen }) => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I\'m PerpexAI, your business transformation assistant. How can I help you today?', timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const autoMessages = [
    { type: 'user', text: 'Tell me about your services' },
    { type: 'bot', text: 'We offer 4 core verticals: SaleX for sales optimization, MarketriX for organic marketing, PlaceX for recruitment, and PerpeX Practical Bschool for business education. Which interests you most?' },
    { type: 'user', text: 'How can you help with sales?' },
    { type: 'bot', text: 'Our SaleX division provides lead funnels, sales training, and execution. We\'ve helped clients achieve 40% increase in conversion rates and 300% more qualified leads. Want to see a demo?' },
    { type: 'user', text: 'Show me your success metrics' },
    { type: 'bot', text: 'We\'ve transformed 500+ businesses with 30% average revenue growth. Our clients see 50% reduction in CAC, 90% placement success rate, and 400% increase in organic reach. Ready to get started?' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < autoMessages.length) {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            ...autoMessages[currentStep],
            timestamp: new Date()
          }]);
          setIsTyping(false);
          setCurrentStep(prev => prev + 1);
        }, 1500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentStep]);

  const predefinedResponses = {
    'hello': 'Welcome to PerpeX! We specialize in Sales, Marketing, Recruitment, and Business Education. What would you like to know more about?',
    'services': 'Our core services include: 1) Sales Optimization 2) Marketing Strategy 3) Talent Acquisition 4) Business Education. Which area interests you most?',
    'sales': 'Our SaleX vertical helps businesses increase revenue through data-driven strategies, process optimization, and performance analytics. We\'ve achieved 40% increase in conversion rates for our clients.',
    'marketing': 'MarketriX offers comprehensive marketing solutions including organic strategies, brand development, and campaign optimization. We deliver 400% increase in organic reach on average.',
    'recruitment': 'PlaceX provides AI-powered recruitment services with 90% placement success rate and 50% reduction in hiring time. Need help with talent acquisition?',
    'education': 'PerpeX Practical Bschool offers hands-on business education programs with real-world simulations. Perfect for upskilling teams and founders.',
    'pricing': 'Our pricing is customized based on your specific needs and business size. Let\'s schedule a consultation to discuss your requirements.',
    'demo': 'I\'d be happy to arrange a demo! You can use the "Book a Call" button to schedule a personalized demonstration of our services.'
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        text: inputMessage,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');
      setIsTyping(true);

      setTimeout(() => {
        const response = findResponse(inputMessage.toLowerCase());
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          text: response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const findResponse = (message) => {
    const keys = Object.keys(predefinedResponses);
    const matchedKey = keys.find(key => message.includes(key));
    return matchedKey ? predefinedResponses[matchedKey] : 'That\'s interesting! Let me connect you with our team for personalized assistance. What specific business challenge are you facing?';
  };

  const quickCommands = [
    { text: 'Our Services', icon: Target },
    { text: 'Success Stories', icon: TrendingUp },
    { text: 'Book Demo', icon: Users },
    { text: 'Get Pricing', icon: Sparkles }
  ];

  return (
    <section id="home" className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Redesigning the Future of{' '}
            <span className="text-green-500">Sales, Marketing, and Talent.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Powering business excellence through data-driven services, innovative strategies, and transformative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onChatOpen}
              className="btn-primary inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Start Chat with PerpexAI
            </button>
            <button className="btn-secondary inline-flex items-center">
              Explore Our Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Enhanced Interactive Chat Demo Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-20 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">PerpexAI</h3>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <p className="text-sm text-gray-500">Online • Responding automatically</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                AI Powered
              </div>
              <button 
                onClick={onChatOpen}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-sm px-4 py-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-50 text-gray-900'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-50 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {quickCommands.map((command, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(command.text)}
                className="flex items-center justify-center px-3 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm hover:bg-gray-100 transition-colors"
              >
                <command.icon className="w-4 h-4 mr-2" />
                {command.text}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about our services, pricing, or success stories..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              This is a demo of our AI assistant. For full functionality, click "Chat with PerpexAI" above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send } from 'lucide-react';

const ChatWidget = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I\'m PerpexAI, your business transformation assistant. How can I help you today?', timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    'hello': 'Welcome to PerpeX! We specialize in Sales, Marketing, Recruitment, and Business Education. What would you like to know more about?',
    'services': 'Our core services include: 1) Sales Optimization 2) Marketing Strategy 3) Talent Acquisition 4) Business Education. Which area interests you most?',
    'sales': 'Our Sales vertical helps businesses increase revenue through data-driven strategies, process optimization, and performance analytics. Would you like to schedule a consultation?',
    'marketing': 'We offer comprehensive marketing solutions including digital strategy, brand development, and campaign optimization. Ready to transform your marketing?',
    'recruitment': 'Our recruitment services help you find top talent using AI-powered screening and strategic hiring processes. Need help with hiring?',
    'education': 'Our Business Education programs upskill your team with modern business practices and industry insights. Interested in learning more?',
    'contact': 'You can reach us at contact@perpex.com or book a call directly. We\'re here to help transform your business!',
    'pricing': 'Our pricing is customized based on your specific needs and business size. Let\'s schedule a consultation to discuss your requirements.',
    'case studies': 'We\'ve helped 500+ businesses achieve 30% average growth. Our case studies showcase transformations across various industries.',
    'about': 'PerpeX is a next-gen business consultancy delivering B2B transformation through innovative, data-driven solutions across four key verticals.',
    'demo': 'I\'d be happy to arrange a demo! You can use the "Book a Call" button to schedule a personalized demonstration of our services.',
    'help': 'I can help you with information about our services, pricing, case studies, or connect you with our team. What would you like to know?'
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
    return matchedKey ? predefinedResponses[matchedKey] : 'I understand you\'re interested in learning more about PerpeX. Let me connect you with our team for personalized assistance. Use the "Book a Call" button or ask me about our specific services!';
  };

  const quickButtons = [
    { text: 'Our Services', action: () => setInputMessage('Tell me about your services') },
    { text: 'Pricing', action: () => setInputMessage('What are your pricing options?') },
    { text: 'Case Studies', action: () => setInputMessage('Show me case studies') },
    { text: 'Book Demo', action: () => setInputMessage('I want to see a demo') }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">PerpexAI</h3>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-50 text-gray-900'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-50 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Action Buttons */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickButtons.map((button, index) => (
              <button
                key={index}
                onClick={button.action}
                className="px-3 py-2 bg-gray-50 text-gray-700 rounded-full text-sm hover:bg-gray-100 transition-colors"
              >
                {button.text}
              </button>
            ))}
          </div>
          
          {/* Chat Input */}
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
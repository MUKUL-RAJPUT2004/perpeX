import {React, useState} from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
    const [text, setText] = useState('');
    const services = ['Sales', 'Marketing', 'Recruitment', 'Business Education'];
    const [serviceIndex, setServiceIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          What is PerpeX?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          A next-gen business consultancy delivering B2B transformation through Sales, Marketing, Recruitment, and Business Education.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center hover:scale-105 transition-transform duration-300 hover:bg-green-300 hover:text-white hover:p-6 hover:rounded-lg hover:shadow-lg">
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Businesses Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">30%</div>
            <div className="text-gray-600">Average Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Support & Consultation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">AI</div>
            <div className="text-gray-600">Powered Solutions</div>
          </div>
        </div>

        <button className="btn-primary inline-flex items-center">
          Learn More About Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </section>
  );
};

export { AboutSection};
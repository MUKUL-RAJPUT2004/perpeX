import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

const CTASection = ({ onChatOpen }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl opacity-5"></div>
          <div className="relative bg-white rounded-3xl p-12 shadow-xl">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join 500+ businesses that have already experienced the PerpeX difference. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onChatOpen}
                className="btn-primary inline-flex items-center text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Chat with PerpexAI
              </button>
              <button className="btn-secondary inline-flex items-center text-lg">
                <Calendar className="w-5 h-5 mr-3" />
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
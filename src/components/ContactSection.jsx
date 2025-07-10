import React from 'react';
import { Mail, Phone, MapPin, Calendar, Download, MessageCircle } from 'lucide-react';


const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card-manglish">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Services of Interest</option>
                <option>Sales Optimization</option>
                <option>Marketing Strategy</option>
                <option>Talent Acquisition</option>
                <option>Business Education</option>
                <option>All Services</option>
              </select>
              <textarea
                rows="4"
                placeholder="Tell us about your business challenges..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              ></textarea>
              <button type="submit" className="w-full btn-primary">
                Submit Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="card-manglish">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">contact@perpex.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">123 Business District, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            <div className="card-manglish">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary inline-flex items-center text-lg ">
                  <Calendar className="w-5 h-5 mr-2" />
                   Book a Consultation
                </button>
                <button className="w-full btn-secondary inline-flex items-center text-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 inline-flex items-center text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </button>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
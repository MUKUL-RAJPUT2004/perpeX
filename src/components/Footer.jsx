import React from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";


// Enhanced Footer Section
const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">PX</span>
              </div>
              <span className="text-xl font-semibold">PerpeX</span>
            </div>
            <p className="text-gray-400 mb-6">
              Redesigning the future of business through innovative B2B transformation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Verticals</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition-colors">SaleX</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">MarketriX</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">PlaceX</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">PerpeX Practical Bschool</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest insights and offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
              />
              <button type="submit" className="w-full btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PerpeX. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <p className="text-gray-400 text-sm">
              Developed by MUKUL RAJPUT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
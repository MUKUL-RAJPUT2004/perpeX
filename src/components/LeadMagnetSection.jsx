import React from "react";
import { Download } from "lucide-react";



const LeadMagnetSection = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unlock our Strategy Playbook
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Learn how we cut Lead churn by 45% and discover the exact strategies we use to transform businesses.
            </p>
            
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
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
                <option>Select Your Role</option>
                <option>CEO/Founder</option>
                <option>Sales Manager</option>
                <option>Marketing Manager</option>
                <option>HR Manager</option>
                <option>Other</option>
              </select>
              <button type="submit" className="w-full btn-primary inline-flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Playbook
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              By downloading, you agree to our privacy policy. We respect your data and never spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
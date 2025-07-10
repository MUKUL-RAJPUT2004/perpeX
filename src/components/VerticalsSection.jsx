import React from 'react';
import {ArrowRight } from 'lucide-react';



const VerticalsSection = () => {
  const verticals = [
    { 
      
      
      description: 'In-house B2B sales division offering lead funnels, sales enablement, training, and execution.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    { 
       
      title: 'MarketriX', 
      description: 'Organic marketing division focusing on visibility, hybrid strategies, and audience growth.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    { 
      
      title: 'PlaceX', 
      description: 'Recruitment arm that connects job-seekers with employers and manages large-scale hiring.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    { 
      
      title: 'PerpeX Practical Bschool', 
      description: 'Practical education programs for upskilling teams and founders using real-world simulations.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section id="verticals" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Core Verticals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four specialized divisions delivering comprehensive B2B transformation across every aspect of your business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verticals.map((vertical, index) => (
            <div 
              key={index} 
              className="card-manglish h-[280px] flex animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section - 1/3 */}
              <div className="w-1/3 relative overflow-hidden rounded-l-2xl">
                <img 
                  src={vertical.image} 
                  alt={vertical.title}
                  className="w-full h-full object-cover"
                />
               
              </div>
              
              {/* Content Section - 2/3 */}
              <div className="w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {vertical.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {vertical.description}
                  </p>
                </div>
                
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors mt-4 self-start">
                  Explore Vertical
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalsSection;
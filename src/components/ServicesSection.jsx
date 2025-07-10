import React from "react";

const ServicesSection = () => {
  const services = [
    {
      
      title: 'Customized Sales Training',
      description: 'Tailored training programs that transform your sales team into high-performing revenue generators with proven methodologies.',
      results: ['40% increase in conversion rates', '60% reduction in sales cycle time', '25% improvement in deal size'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      
      title: 'Sales Funnel Redesign & Automation',
      description: 'Complete funnel optimization with automated workflows that nurture leads and maximize conversions through data-driven insights.',
      results: ['300% increase in qualified leads', '50% reduction in CAC', '80% improvement in lead quality'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      
      title: 'Parallel Sales Teams',
      description: 'Dedicated sales teams working alongside your existing structure to accelerate growth and market penetration.',
      results: ['200% increase in sales capacity', '35% faster market penetration', '90% client retention rate'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      
      title: 'CRM-IVR Lead Management',
      description: 'Integrated CRM and IVR systems for seamless lead tracking, automated follow-ups, and comprehensive analytics.',
      results: ['95% lead capture rate', '70% reduction in response time', '45% increase in follow-up efficiency'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      
      title: 'Filtered Lead Generation',
      description: 'High-quality, pre-qualified leads delivered directly to your sales pipeline using advanced targeting and AI screening.',
      results: ['85% lead qualification rate', '60% reduction in sales effort', '120% ROI improvement'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      
      title: 'Data-driven Telemarketing',
      description: 'Strategic telemarketing campaigns powered by data analytics, AI insights, and personalized outreach strategies.',
      results: ['250% increase in appointment setting', '40% improvement in call success rate', '30% cost reduction'],
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      
      title: 'Organic Marketing Campaigns',
      description: 'Comprehensive organic marketing strategies that build lasting brand presence and sustainable growth.',
      results: ['400% increase in organic reach', '180% growth in engagement', '65% reduction in marketing costs'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {

      title: 'B2B Recruitment & Staffing',
      description: 'End-to-end recruitment solutions for scaling your team with top-tier talent using AI-powered screening.',
      results: ['90% placement success rate', '50% reduction in hiring time', '95% candidate satisfaction'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Core B2B Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to transform every aspect of your business operations and drive measurable growth.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Column */}
              <div className="lg:w-1/3">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                </div>
              </div>
              
              {/* Content Column */}
              <div className="lg:w-2/3">
                <div className="card-manglish">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">Proven Results:</h4>
                    {service.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-primary flex-1">
                      Talk to Sales
                    </button>
                    <button className="btn-secondary flex-1">
                      Book Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import React from "react";
import {UserPlus, Search, Rocket, TrendingUp, Target, ArrowRight} from "lucide-react";



const HowWeWorkSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Enroll',
      description: 'Initial consultation and onboarding process to understand your business needs and objectives.',
      details: ['Business assessment', 'Goal alignment', 'Team introduction', 'Project roadmap'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      icon: Search,
      title: 'Analyze',
      description: 'Deep dive analysis of your current processes, market position, and growth opportunities.',
      details: ['Market research', 'Competitor analysis', 'Process audit', 'Gap identification'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      icon: Rocket,
      title: 'Deploy',
      description: 'Implementation of customized strategies and solutions tailored to your specific requirements.',
      details: ['Strategy execution', 'Team deployment', 'System integration', 'Process optimization'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      icon: TrendingUp,
      title: 'Optimize',
      description: 'Continuous monitoring and refinement to ensure maximum performance and ROI.',
      details: ['Performance tracking', 'Data analysis', 'Strategy refinement', 'Process improvement'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      icon: Target,
      title: 'Scale',
      description: 'Expansion and scaling of successful strategies to drive sustained business growth.',
      details: ['Growth acceleration', 'Market expansion', 'Team scaling', 'Long-term planning'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step methodology ensures successful B2B transformation and sustainable growth for every client engagement.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-16 right-16 h-0.5 bg-gray-300"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
            {steps.map((step, index) => (
              <div key={index} className="relative group h-full flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="absolute inset-0 w-20 h-20 rounded-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    />
                  </div>
                </div>

                <div className="card-manglish flex-1 flex flex-col min-h-[320px]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-8 leading-relaxed flex-1">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3 mt-auto">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary inline-flex items-center text-lg">
            See Client Success Stories
            <ArrowRight className="w-6 h-6 ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
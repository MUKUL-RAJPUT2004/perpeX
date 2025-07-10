import React from "react";
import { ArrowRight } from "lucide-react";


const CaseStudiesSection = () => {
  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Software Development',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      problem: 'Low conversion rates and long sales cycles affecting revenue growth',
      solution: 'Implemented automated sales funnels, CRM integration, and sales team training',
      outcome: '300% increase in qualified leads, 45% reduction in sales cycle, 120% revenue growth',
      metrics: { cac: '-50%', conversion: '+40%', revenue: '+120%' }
    },
    {
      company: 'GrowthStart Inc',
      industry: 'E-commerce',
      logo: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100',
      problem: 'Poor organic reach and brand visibility in competitive market',
      solution: 'Comprehensive organic marketing strategy, content optimization, and social media management',
      outcome: '400% increase in organic reach, 180% growth in engagement, 65% cost reduction',
      metrics: { reach: '+400%', engagement: '+180%', cost: '-65%' }
    },
    {
      company: 'ScaleUp Ventures',
      industry: 'Fintech',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
      problem: 'Difficulty finding qualified talent for rapid scaling requirements',
      solution: 'AI-powered recruitment process, talent pipeline development, and screening optimization',
      outcome: '90% placement success rate, 50% reduction in hiring time, 95% candidate satisfaction',
      metrics: { placement: '90%', time: '-50%', satisfaction: '95%' }
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Case Studies & Success Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. See how we've transformed companies across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card-manglish animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-6">
                <img 
                  src={study.logo} 
                  alt={study.company}
                  className="w-12 h-12 rounded-lg object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                  <p className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block mt-1">{study.industry}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Challenge</h4>
                  <p className="text-sm text-gray-600">{study.problem}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Solution</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Results</h4>
                  <p className="text-sm text-gray-600">{study.outcome}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                {Object.entries(study.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-green-600">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary inline-flex items-center">
            View All Cases
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
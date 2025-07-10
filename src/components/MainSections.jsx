import React from 'react';
import { Target, Zap, Users, Award, ArrowRight, CheckCircle, TrendingUp, Database, Phone, BarChart3, UserPlus, Search, Rocket, MessageCircle, Calendar, Download, Mail, MapPin, Linkedin, Instagram, Twitter, Building2, Briefcase, GraduationCap, HeadphonesIcon } from 'lucide-react';

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What is PerpeX?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          A next-gen business consultancy delivering B2B transformation through Sales, Marketing, Recruitment, and Business Education.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
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

// Enhanced Verticals Section with 1/3 image and 2/3 content layout
const VerticalsSection = () => {
  const verticals = [
    { 
      icon: Target, 
      title: 'SaleX', 
      description: 'In-house B2B sales division offering lead funnels, sales enablement, training, and execution.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    { 
      icon: Zap, 
      title: 'MarketriX', 
      description: 'Organic marketing division focusing on visibility, hybrid strategies, and audience growth.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    { 
      icon: Users, 
      title: 'PlaceX', 
      description: 'Recruitment arm that connects job-seekers with employers and manages large-scale hiring.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    { 
      icon: Award, 
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 ${vertical.iconBg} rounded-xl flex items-center justify-center`}>
                  <vertical.icon className={`w-6 h-6 ${vertical.iconColor}`} />
                </div>
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

// Enhanced Services Section with 3-column alternating layout
const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Customized Sales Training',
      description: 'Tailored training programs that transform your sales team into high-performing revenue generators with proven methodologies.',
      results: ['40% increase in conversion rates', '60% reduction in sales cycle time', '25% improvement in deal size'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: TrendingUp,
      title: 'Sales Funnel Redesign & Automation',
      description: 'Complete funnel optimization with automated workflows that nurture leads and maximize conversions through data-driven insights.',
      results: ['300% increase in qualified leads', '50% reduction in CAC', '80% improvement in lead quality'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Parallel Sales Teams',
      description: 'Dedicated sales teams working alongside your existing structure to accelerate growth and market penetration.',
      results: ['200% increase in sales capacity', '35% faster market penetration', '90% client retention rate'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Database,
      title: 'CRM-IVR Lead Management',
      description: 'Integrated CRM and IVR systems for seamless lead tracking, automated follow-ups, and comprehensive analytics.',
      results: ['95% lead capture rate', '70% reduction in response time', '45% increase in follow-up efficiency'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: CheckCircle,
      title: 'Filtered Lead Generation',
      description: 'High-quality, pre-qualified leads delivered directly to your sales pipeline using advanced targeting and AI screening.',
      results: ['85% lead qualification rate', '60% reduction in sales effort', '120% ROI improvement'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Phone,
      title: 'Data-driven Telemarketing',
      description: 'Strategic telemarketing campaigns powered by data analytics, AI insights, and personalized outreach strategies.',
      results: ['250% increase in appointment setting', '40% improvement in call success rate', '30% cost reduction'],
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Zap,
      title: 'Organic Marketing Campaigns',
      description: 'Comprehensive organic marketing strategies that build lasting brand presence and sustainable growth.',
      results: ['400% increase in organic reach', '180% growth in engagement', '65% reduction in marketing costs'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: BarChart3,
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
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

// Enhanced How We Work Section
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step methodology ensures successful B2B transformation and sustainable growth for every client engagement.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-16 right-16 h-0.5 bg-gray-300"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
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

// Enhanced Case Studies Section
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
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

// Enhanced Lead Magnet Section
const LeadMagnetSection = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
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

// Enhanced Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
                <button className="w-full btn-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Consultation
                </button>
                <button className="w-full btn-secondary">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </button>
              </div>
            </div>

            <div className="card-manglish">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

// Enhanced CTA Section
const CTASection = ({ onChatOpen }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl opacity-5"></div>
          <div className="relative bg-white rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
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

export { AboutSection, VerticalsSection, ServicesSection, HowWeWorkSection, CaseStudiesSection, LeadMagnetSection, ContactSection, FooterSection, CTASection };